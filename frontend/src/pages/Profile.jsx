// pages/Profile.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import Footer from '../components/Footer';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    bodyFat: '',
    bodyGoal: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    loadUserData();
  }, [navigate]);

  const loadUserData = async () => {
    try {
      const userData = localStorage.getItem('user');
      if (userData) {
        const parsed = JSON.parse(userData);
        setUser(parsed);
        setFormData({
          name: parsed.name || '',
          email: parsed.email || '',
          age: parsed.age || '',
          weight: parsed.weight || '',
          height: parsed.height || '',
          bodyFat: parsed.body_fat_percentage || '',
          bodyGoal: parsed.body_goal || ''
        });
      }
    } catch (err) {
      console.error('Failed to load user data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: '', text: '' });

    try {
      const { data } = await api.put('/api/auth/profile', {
        name: formData.name,
        age: formData.age ? parseInt(formData.age) : null,
        weight: formData.weight ? parseFloat(formData.weight) : null,
        height: formData.height ? parseFloat(formData.height) : null,
        body_fat_percentage: formData.bodyFat ? parseFloat(formData.bodyFat) : null,
        body_goal: formData.bodyGoal || null
      });

      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.response?.data?.message || err.response?.data?.error || 'Failed to update profile.'
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-dark-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button
              onClick={() => navigate('/app')}
              className="text-primary-400 hover:text-primary-300 font-medium mb-4 flex items-center gap-2"
            >
              ← Back to Dashboard
            </button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Profile Settings
            </h1>
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

          <div className="bg-dark-card rounded-xl shadow-xl p-8 border border-dark-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className="w-full px-4 py-3 bg-dark-surface/50 border-2 border-dark-border rounded-lg text-dark-muted cursor-not-allowed"
                  />
                  <p className="text-xs text-dark-muted mt-1">Email cannot be changed</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Age (years)
                  </label>
                  <input
                    type="number"
                    min="13"
                    max="120"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="30"
                    max="300"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="100"
                    max="250"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Body Fat Percentage (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="50"
                    value={formData.bodyFat}
                    onChange={(e) => setFormData({ ...formData, bodyFat: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-text mb-3">
                  Body Goal
                </label>
                <select
                  value={formData.bodyGoal}
                  onChange={(e) => setFormData({ ...formData, bodyGoal: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                >
                  <option value="">Select goal...</option>
                  <option value="lose_weight">Lose Weight</option>
                  <option value="build_muscle">Build Muscle</option>
                  <option value="maintain">Maintain</option>
                  <option value="improve_endurance">Improve Endurance</option>
                  <option value="general_fitness">General Fitness</option>
                </select>
              </div>

              <div className="pt-4 border-t border-dark-border">
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;

