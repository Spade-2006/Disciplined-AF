// pages/Progress.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import Footer from '../components/Footer';

const Progress = () => {
  const navigate = useNavigate();
  const [summary, setSummary] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    to: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    loadData();
  }, [navigate, dateRange]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [summaryRes, workoutsRes] = await Promise.all([
        api.get(`/api/progress/summary?from=${dateRange.from}&to=${dateRange.to}`),
        api.get('/api/workouts/all')
      ]);
      
      setSummary(summaryRes.data);
      setWorkouts(workoutsRes.data.workouts || workoutsRes.data || []);
    } catch (err) {
      console.error('Failed to load progress:', err);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white text-xl`}>
          {icon}
        </div>
      </div>
      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{loading ? '...' : value.toLocaleString()}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button
              onClick={() => navigate('/app')}
              className="text-primary-600 hover:text-primary-700 font-medium mb-4 flex items-center gap-2"
            >
              ← Back to Dashboard
            </button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Progress Tracking
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Date Range</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
                <input
                  type="date"
                  value={dateRange.from}
                  onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
                <input
                  type="date"
                  value={dateRange.to}
                  onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {summary && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard
                title="Total Workouts"
                value={summary.workout_count || 0}
                icon="💪"
                color="bg-gradient-to-br from-blue-500 to-blue-600"
              />
              <StatCard
                title="Total Sets"
                value={summary.sets_count || 0}
                icon="📊"
                color="bg-gradient-to-br from-purple-500 to-purple-600"
              />
              <StatCard
                title="Total Volume (lbs)"
                value={summary.total_volume || 0}
                icon="🔥"
                color="bg-gradient-to-br from-orange-500 to-red-600"
              />
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Workouts</h2>
            {loading ? (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            ) : workouts.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p className="mb-4">No workouts found</p>
                <button
                  onClick={() => navigate('/app/log-workout')}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
                >
                  Log Your First Workout
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {workouts.slice(0, 10).map((workout) => (
                  <div key={workout.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{workout.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {new Date(workout.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                        {workout.duration_minutes && (
                          <p className="text-sm text-gray-500 mt-1">Duration: {workout.duration_minutes} minutes</p>
                        )}
                        {workout.notes && (
                          <p className="text-sm text-gray-600 mt-2 italic">"{workout.notes}"</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Progress;

