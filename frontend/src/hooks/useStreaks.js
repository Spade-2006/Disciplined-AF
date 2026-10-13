import { useState, useEffect, useCallback } from 'react';
import { getTodayDateString } from '../utils/dateUtils';

const STREAKS_API = '/api/daily-logs/streaks';

/**
 * Reusable Hook to consume the single source-of-truth streak & consistency engine
 */
export function useStreaks(todayDate = getTodayDateString()) {
  const [streakData, setStreakData] = useState({
    currentStreak: 0,
    longestStreak: 0,
    totalConsistentDays: 0,
    lastCompletedDate: null,
    isStreakActiveToday: false,
    streakBroken: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStreaks = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${STREAKS_API}?today=${todayDate}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch streak telemetry');
      }

      const data = await res.json();
      setStreakData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [todayDate]);

  useEffect(() => {
    let mounted = true;
    fetchStreaks();
    return () => {
      mounted = false;
    };
  }, [fetchStreaks]);

  return {
    ...streakData,
    loading,
    error,
    refreshStreaks: fetchStreaks,
  };
}
