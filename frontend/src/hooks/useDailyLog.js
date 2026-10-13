import { useState, useEffect, useCallback, useMemo } from "react";
import { formatLocalDate, getTodayDateString, shiftDateString, isFutureDate } from "../utils/dateUtils";

const API_BASE = "/api/daily-logs";

export const EMPTY_DAILY_LOG = Object.freeze({
  nutrition: {
    calories: null,
    protein: null,
  },
  body: {
    weight: null,
  },
  hydration: {
    water: null,
  },
  recovery: {
    sleep: null,
    sleepQuality: null,
  },
  activity: {
    steps: null,
  },
  mind: {
    mood: null,
    notes: "",
  },
  workout: {
    completed: false,
    workoutProgramId: null,
    workoutName: null,
    durationMinutes: null,
    completedAt: null,
  },
});

export function useDailyLog(initialDate = getTodayDateString()) {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [dailyLog, setDailyLog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const getHeaders = useCallback(() => {
    const token = localStorage.getItem("token");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }, []);

  const isFuture = useMemo(() => isFutureDate(selectedDate), [selectedDate]);
  const isToday = useMemo(() => selectedDate === getTodayDateString(), [selectedDate]);

  // Fetch log for the currently selected date
  const fetchDailyLog = useCallback(
    async (date = selectedDate) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}?date=${date}`, {
          headers: getHeaders(),
        });

        if (res.status === 401) {
          throw new Error("Unauthorized session. Please log in.");
        }

        if (res.status === 404) {
          // A missing log is a valid clean state, not an application error
          setDailyLog(null);
          return null;
        }

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || "Failed to fetch daily log");
        }

        const data = await res.json();
        setDailyLog(data);
        return data;
      } catch (err) {
        setError(err.message);
        setDailyLog(null);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [selectedDate, getHeaders]
  );

  // Fetch whenever selectedDate changes
  useEffect(() => {
    let mounted = true;
    fetchDailyLog(selectedDate);
    return () => {
      mounted = false;
    };
  }, [selectedDate, fetchDailyLog]);

  // Upsert update for the selected date (or explicitly provided targetDate)
  const updateDailyLog = useCallback(
    async (dateOrUpdates, maybeUpdates) => {
      const targetDate = typeof dateOrUpdates === 'string' ? dateOrUpdates : selectedDate;
      const updates = typeof dateOrUpdates === 'string' ? maybeUpdates : dateOrUpdates;

      if (isFutureDate(targetDate)) {
        throw new Error("Future dates cannot be logged.");
      }

      setSaving(true);
      setError(null);

      try {
        const res = await fetch(`${API_BASE}/${targetDate}`, {
          method: "PUT",
          headers: getHeaders(),
          body: JSON.stringify(updates),
        });

        if (res.status === 401) {
          throw new Error("Unauthorized session. Please log in.");
        }

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || "Failed to update daily log");
        }

        const savedData = await res.json();
        if (targetDate === selectedDate) {
          setDailyLog(savedData);
        }
        return savedData;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setSaving(false);
      }
    },
    [selectedDate, getHeaders]
  );

  // Delete log for the selected date
  const deleteDailyLog = useCallback(async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/${selectedDate}`, {
        method: "DELETE",
        headers: getHeaders(),
      });

      if (res.status === 401) {
        throw new Error("Unauthorized session. Please log in.");
      }

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to delete daily log");
      }

      setDailyLog(null);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setSaving(false);
    }
  }, [selectedDate, getHeaders]);

  // Calendar Navigation
  const goToPreviousDay = useCallback(() => {
    setSelectedDate((curr) => shiftDateString(curr, -1));
  }, []);

  const goToNextDay = useCallback(() => {
    setSelectedDate((curr) => {
      const nextDate = shiftDateString(curr, 1);
      return nextDate;
    });
  }, []);

  const goToToday = useCallback(() => {
    setSelectedDate(getTodayDateString());
  }, []);

  return {
    selectedDate,
    setSelectedDate,
    dailyLog,
    activeLog: dailyLog || { ...EMPTY_DAILY_LOG, date: selectedDate },
    hasLoggedData: Boolean(dailyLog),
    loading,
    saving,
    error,
    isToday,
    isFuture,
    fetchDailyLog,
    updateDailyLog,
    deleteDailyLog,
    refresh: () => fetchDailyLog(selectedDate),
    goToPreviousDay,
    goToNextDay,
    goToToday,
  };
}
