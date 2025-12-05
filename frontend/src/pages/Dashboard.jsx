// pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import Footer from '../components/Footer';

const Dashboard = () => {
  const navigate = useNavigate();
  const [serverStatus, setServerStatus] = useState('offline');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [stats, setStats] = useState({
    workouts: 0,
    sets: 0,
    volume: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        if (user.email) setEmail(user.email);
        if (user.name) setUserName(user.name);
      } catch (err) {
        // Invalid JSON, ignore
      }
    }

    const checkHealth = async () => {
      try {
        await api.get('/api/health');
        setServerStatus('ok');
      } catch (err) {
        setServerStatus('offline');
      }
    };

    const loadStats = async () => {
      try {
        const { data } = await api.get('/api/progress/summary');
        setStats({
          workouts: data.workout_count || 0,
          sets: data.sets_count || 0,
          volume: data.total_volume || 0,
        });
      } catch (err) {
        console.error('Failed to load stats:', err);
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
    loadStats();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const StatCard = ({ title, value, icon, gradient }) => (
    <div className="bg-dark-card rounded-xl shadow-lg p-6 border border-dark-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg ${gradient} flex items-center justify-center text-white text-xl`}>
          {icon}
        </div>
      </div>
      <h3 className="text-sm font-semibold text-dark-muted uppercase tracking-wide mb-1">{title}</h3>
      <p className="text-3xl font-bold text-dark-text">{loading ? '...' : value.toLocaleString()}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      {/* Header */}
      <div className="bg-dark-card border-b border-dark-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Disciplined AF
              </h1>
              <p className="text-gray-600 mt-1">Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              {email && (
                <div className="hidden sm:block text-right">
                  <p className="text-sm text-dark-muted">Logged in as</p>
                  <p className="font-semibold text-dark-text">{userName || email}</p>
                </div>
              )}
              <button
                onClick={() => navigate('/app/profile')}
                className="px-4 py-2 bg-dark-surface text-dark-text rounded-lg hover:bg-dark-border border border-dark-border transition-all"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all transform hover:scale-105 active:scale-95 shadow-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Server Status */}
        <div className="mb-8 bg-dark-card rounded-xl shadow-lg p-6 border border-dark-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-dark-text mb-2">Server Status</h2>
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full animate-pulse-slow ${
                    serverStatus === 'ok' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
                <span className="text-dark-text capitalize font-medium">
                  {serverStatus === 'ok' ? 'All systems operational' : 'Server offline'}
                </span>
              </div>
            </div>
            <div className={`px-4 py-2 rounded-lg font-semibold ${
              serverStatus === 'ok' 
                ? 'bg-green-900/50 text-green-300 border border-green-700' 
                : 'bg-red-900/50 text-red-300 border border-red-700'
            }`}>
              {serverStatus === 'ok' ? '✓ Online' : '✕ Offline'}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Workouts"
            value={stats.workouts}
            icon="💪"
            gradient="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <StatCard
            title="Total Sets"
            value={stats.sets}
            icon="📊"
            gradient="bg-gradient-to-br from-purple-500 to-purple-600"
          />
          <StatCard
            title="Total Volume (lbs)"
            value={stats.volume}
            icon="🔥"
            gradient="bg-gradient-to-br from-orange-500 to-red-600"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-dark-card rounded-xl shadow-lg p-8 border border-dark-border">
          <h2 className="text-2xl font-bold text-dark-text mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={() => navigate('/app/log-workout')}
              className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white py-6 px-8 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">📝</span>
                <span className="text-lg">Log Workout</span>
              </div>
            </button>
            
            <button
              onClick={() => navigate('/app/daily-tracking')}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white py-6 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">📊</span>
                <span className="text-lg">Daily Tracking</span>
              </div>
            </button>

            <button
              onClick={() => navigate('/app/progress')}
              className="group relative overflow-hidden bg-gradient-to-r from-accent-600 to-accent-700 text-white py-6 px-8 rounded-xl font-semibold hover:from-accent-700 hover:to-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">📈</span>
                <span className="text-lg">View Progress</span>
              </div>
            </button>

            <button
              onClick={() => navigate('/app/customize-plans')}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">📋</span>
                <span className="text-lg">Workout Plans</span>
              </div>
            </button>

            <button
              onClick={() => navigate('/app/goal-determination')}
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-700 text-white py-6 px-8 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">🎯</span>
                <span className="text-lg">Set Goal</span>
              </div>
            </button>

            <button
              onClick={() => navigate('/app/export')}
              className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white py-6 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">📥</span>
                <span className="text-lg">Export Data</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
