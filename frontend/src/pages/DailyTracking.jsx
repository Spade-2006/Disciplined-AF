// pages/DailyTracking.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import Footer from '../components/Footer';

const DailyTracking = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [trackingData, setTrackingData] = useState({
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    sleep_hours: '',
    steps: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [todayData, setTodayData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    loadTodayData();
  }, [navigate, selectedDate]);

  const loadTodayData = async () => {
    try {
      const { data } = await api.get(`/api/tracking/daily?date=${selectedDate}`);
      if (data) {
        setTodayData(data);
        setTrackingData({
          calories: data.calories || '',
          protein: data.protein || '',
          carbs: data.carbs || '',
          fats: data.fats || '',
          sleep_hours: data.sleep_hours || '',
          steps: data.steps || '',
          notes: data.notes || ''
        });
      }
    } catch (err) {
      if (err.response?.status !== 404) {
        console.error('Failed to load tracking data:', err);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const payload = {
        date: selectedDate,
        calories: trackingData.calories ? parseInt(trackingData.calories) : null,
        protein: trackingData.protein ? parseFloat(trackingData.protein) : null,
        carbs: trackingData.carbs ? parseFloat(trackingData.carbs) : null,
        fats: trackingData.fats ? parseFloat(trackingData.fats) : null,
        sleep_hours: trackingData.sleep_hours ? parseFloat(trackingData.sleep_hours) : null,
        steps: trackingData.steps ? parseInt(trackingData.steps) : null,
        notes: trackingData.notes || null
      };

      if (todayData) {
        await api.put(`/api/tracking/daily/${todayData.id}`, payload);
        setMessage({ type: 'success', text: 'Tracking data updated successfully!' });
      } else {
        await api.post('/api/tracking/daily', payload);
        setMessage({ type: 'success', text: 'Tracking data saved successfully!' });
      }
      
      loadTodayData();
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.response?.data?.message || err.response?.data?.error || 'Failed to save tracking data.'
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateMacros = () => {
    const protein = trackingData.protein ? parseFloat(trackingData.protein) : 0;
    const carbs = trackingData.carbs ? parseFloat(trackingData.carbs) : 0;
    const fats = trackingData.fats ? parseFloat(trackingData.fats) : 0;
    const totalCalories = (protein * 4) + (carbs * 4) + (fats * 9);
    return totalCalories;
  };

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button
              onClick={() => navigate('/app')}
              className="text-primary-400 hover:text-primary-300 font-medium mb-4 flex items-center gap-2"
            >
              ← Back to Dashboard
            </button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Daily Tracking
            </h1>
            <p className="text-dark-muted mt-2">Track your daily nutrition, sleep, and activity</p>
          </div>

          {message.text && (
            <div
              className={`mb-6 p-4 rounded-lg animate-slide-up ${
                message.type === 'success'
                  ? 'bg-green-900/50 text-green-300 border-2 border-green-700'
                  : 'bg-red-900/50 text-red-300 border-2 border-red-700'
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="bg-dark-card rounded-xl shadow-xl p-6 border border-dark-border mb-6">
            <label className="block text-sm font-semibold text-dark-text mb-2">
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-dark-card rounded-xl shadow-xl p-6 border border-dark-border">
              <h2 className="text-xl font-semibold text-dark-text mb-4">Nutrition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Calories (kcal)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={trackingData.calories}
                    onChange={(e) => setTrackingData({ ...trackingData, calories: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                    placeholder="2000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Protein (g)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={trackingData.protein}
                    onChange={(e) => setTrackingData({ ...trackingData, protein: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                    placeholder="150"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Carbs (g)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={trackingData.carbs}
                    onChange={(e) => setTrackingData({ ...trackingData, carbs: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                    placeholder="200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Fats (g)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={trackingData.fats}
                    onChange={(e) => setTrackingData({ ...trackingData, fats: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                    placeholder="65"
                  />
                </div>
              </div>
              {trackingData.protein && trackingData.carbs && trackingData.fats && (
                <div className="mt-4 p-3 bg-primary-900/20 rounded-lg border border-primary-700">
                  <p className="text-sm text-primary-300">
                    Calculated Calories from Macros: <span className="font-semibold">{calculateMacros().toFixed(0)} kcal</span>
                  </p>
                </div>
              )}
            </div>

            <div className="bg-dark-card rounded-xl shadow-xl p-6 border border-dark-border">
              <h2 className="text-xl font-semibold text-dark-text mb-4">Activity & Sleep</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Sleep Hours
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="24"
                    value={trackingData.sleep_hours}
                    onChange={(e) => setTrackingData({ ...trackingData, sleep_hours: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                    placeholder="7.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Steps
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={trackingData.steps}
                    onChange={(e) => setTrackingData({ ...trackingData, steps: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                    placeholder="10000"
                  />
                </div>
              </div>
            </div>

            <div className="bg-dark-card rounded-xl shadow-xl p-6 border border-dark-border">
              <h2 className="text-xl font-semibold text-dark-text mb-4">Notes</h2>
              <textarea
                value={trackingData.notes}
                onChange={(e) => setTrackingData({ ...trackingData, notes: e.target.value })}
                className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                rows="4"
                placeholder="How did you feel today? Any observations?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              {loading ? 'Saving...' : todayData ? 'Update Tracking' : 'Save Tracking'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DailyTracking;

