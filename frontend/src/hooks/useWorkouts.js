import { useState, useEffect, useCallback } from 'react';

const API_URL = '/api/workouts';

export function useWorkouts() {
  const [workouts, setWorkouts] = useState([]);
  const [activeWorkoutId, setActiveWorkoutId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };
  };

  const fetchWorkouts = useCallback(async () => {
    try {
      const res = await fetch(API_URL, { headers: getHeaders() });
      if (!res.ok) throw new Error(res.status === 401 ? 'Unauthorized session' : 'Failed to load workouts');
      const data = await res.json();
      setWorkouts(data.map(w => ({ ...w, id: w._id || w.id })));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const fetchActiveWorkoutId = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/active`, { headers: getHeaders() });
      if (!res.ok) throw new Error(res.status === 401 ? 'Unauthorized session' : 'Failed to load active workout');
      const data = await res.json();
      setActiveWorkoutId(data.activeWorkoutId);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    Promise.all([fetchWorkouts(), fetchActiveWorkoutId()]).finally(() => {
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, [fetchWorkouts, fetchActiveWorkoutId]);

  const createWorkout = async (workoutData) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(workoutData),
    });
    if (!res.ok) throw new Error('Failed to save workout');
    const newWorkout = await res.json();
    newWorkout.id = newWorkout._id || newWorkout.id;
    setWorkouts(prev => [newWorkout, ...prev]);
    return newWorkout;
  };

  const updateWorkout = async (id, workoutData) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(workoutData),
    });
    if (!res.ok) throw new Error('Failed to update workout');
    const updatedWorkout = await res.json();
    updatedWorkout.id = updatedWorkout._id || updatedWorkout.id;
    setWorkouts(prev => prev.map(w => (w.id === id ? updatedWorkout : w)));
    return updatedWorkout;
  };

  const deleteWorkout = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error('Failed to delete workout');
    setWorkouts(prev => prev.filter(w => w.id !== id));
    if (activeWorkoutId === id) {
      setActiveWorkoutId(null);
    }
  };

  const setServerActiveWorkout = async (id) => {
    const res = await fetch(`${API_URL}/active`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ activeWorkoutId: id }),
    });
    if (!res.ok) throw new Error('Failed to set active workout');
    setActiveWorkoutId(id);
  };

  const clearActiveWorkout = async () => {
    await setServerActiveWorkout(null);
  };

  return {
    workouts,
    activeWorkoutId,
    loading,
    error,
    createWorkout,
    updateWorkout,
    deleteWorkout,
    setActiveWorkout: setServerActiveWorkout,
    clearActiveWorkout,
    refresh: () => {
      fetchWorkouts();
      fetchActiveWorkoutId();
    }
  };
}
