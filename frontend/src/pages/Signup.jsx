// pages/Signup.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api, { setAuthToken } from '../lib/api';
import Footer from '../components/Footer';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '', 
    name: '',
    age: '',
    weight: '',
    height: '',
    bodyFat: '',
    bodyGoal: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);

  const bodyFatGuidelines = {
    male: {
      essential: '2-5%',
      athlete: '6-13%',
      fitness: '14-17%',
      average: '18-24%',
      obese: '25%+'
    },
    female: {
      essential: '10-13%',
      athlete: '14-20%',
      fitness: '21-24%',
      average: '25-31%',
      obese: '32%+'
    }
  };

  const bodyGoals = [
    { value: 'lose_weight', label: 'Lose Weight', icon: '🔥' },
    { value: 'build_muscle', label: 'Build Muscle', icon: '💪' },
    { value: 'maintain', label: 'Maintain', icon: '⚖️' },
    { value: 'improve_endurance', label: 'Improve Endurance', icon: '🏃' },
    { value: 'general_fitness', label: 'General Fitness', icon: '✨' }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.age || formData.age < 13 || formData.age > 120) {
      newErrors.age = 'Age must be between 13 and 120';
    }
    if (!formData.weight || formData.weight < 30 || formData.weight > 300) {
      newErrors.weight = 'Weight must be between 30-300 kg';
    }
    if (!formData.height || formData.height < 100 || formData.height > 250) {
      newErrors.height = 'Height must be between 100-250 cm';
    }
    if (!formData.bodyFat || formData.bodyFat < 0 || formData.bodyFat > 50) {
      newErrors.bodyFat = 'Body fat % must be between 0-50%';
    }
    if (!formData.bodyGoal) {
      newErrors.bodyGoal = 'Please select a body goal';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    
    if (!validate()) return;

    setLoading(true);
    try {
      const { data } = await api.post('/api/auth/signup', {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        age: parseInt(formData.age),
        weight: parseFloat(formData.weight),
        height: parseFloat(formData.height),
        body_fat_percentage: parseFloat(formData.bodyFat),
        body_goal: formData.bodyGoal
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setAuthToken(data.token);
      setMessage({ type: 'success', text: data.message || 'Signup successful!' });
      setTimeout(() => navigate('/app'), 500);
    } catch (err) {
      let errorMessage = 'Signup failed. Please try again.';
      
      if (err.response) {
        errorMessage = err.response.data?.message || err.response.data?.error || errorMessage;
      } else if (err.request) {
        errorMessage = 'Unable to connect to server. Please check if the backend is running.';
      } else {
        errorMessage = err.message || errorMessage;
      }
      
      setMessage({
        type: 'error',
        text: errorMessage,
      });
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-accent-50 via-white to-primary-50">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full animate-fade-in">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mb-2">
              Disciplined AF
            </h1>
            <h2 className="text-2xl font-semibold text-gray-900">Create Account</h2>
            <p className="text-gray-600 mt-2">Start your fitness journey today</p>
          </div>
          
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-lg text-sm animate-slide-up ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border-2 border-green-200'
                  : 'bg-red-50 text-red-800 border-2 border-red-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{message.type === 'success' ? '✓' : '✕'}</span>
                <span>{message.text}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.name 
                      ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-accent-500 focus:border-accent-500'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.email 
                      ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-accent-500 focus:border-accent-500'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password *
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.password 
                    ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                    : 'border-gray-200 focus:ring-accent-500 focus:border-accent-500'
                }`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠</span> {errors.password}
                </p>
              )}
              <p className="mt-1.5 text-xs text-gray-500">Must be at least 6 characters</p>
            </div>

            <div className="border-t border-gray-200 pt-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Body Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                    Age (years) *
                  </label>
                  <input
                    id="age"
                    type="number"
                    min="13"
                    max="120"
                    value={formData.age}
                    onChange={(e) => {
                      setFormData({ ...formData, age: e.target.value });
                      if (errors.age) setErrors({ ...errors, age: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.age 
                        ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-accent-500 focus:border-accent-500'
                    }`}
                    placeholder="25"
                  />
                  {errors.age && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.age}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 mb-2">
                    Weight (kg) *
                  </label>
                  <input
                    id="weight"
                    type="number"
                    step="0.1"
                    min="30"
                    max="300"
                    value={formData.weight}
                    onChange={(e) => {
                      setFormData({ ...formData, weight: e.target.value });
                      if (errors.weight) setErrors({ ...errors, weight: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.weight 
                        ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-accent-500 focus:border-accent-500'
                    }`}
                    placeholder="70.5"
                  />
                  {errors.weight && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.weight}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="height" className="block text-sm font-semibold text-gray-700 mb-2">
                    Height (cm) *
                  </label>
                  <input
                    id="height"
                    type="number"
                    step="0.1"
                    min="100"
                    max="250"
                    value={formData.height}
                    onChange={(e) => {
                      setFormData({ ...formData, height: e.target.value });
                      if (errors.height) setErrors({ ...errors, height: '' });
                    }}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.height 
                        ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                        : 'border-gray-200 focus:ring-accent-500 focus:border-accent-500'
                    }`}
                    placeholder="175"
                  />
                  {errors.height && (
                    <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                      <span>⚠</span> {errors.height}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="bodyFat" className="block text-sm font-semibold text-gray-700">
                  Body Fat Percentage (%) *
                </label>
                <button
                  type="button"
                  onClick={() => setShowGuidelines(!showGuidelines)}
                  className="text-xs text-accent-600 hover:text-accent-700 font-medium"
                >
                  {showGuidelines ? 'Hide' : 'Show'} Guidelines
                </button>
              </div>
              <input
                id="bodyFat"
                type="number"
                step="0.1"
                min="0"
                max="50"
                value={formData.bodyFat}
                onChange={(e) => {
                  setFormData({ ...formData, bodyFat: e.target.value });
                  if (errors.bodyFat) setErrors({ ...errors, bodyFat: '' });
                }}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.bodyFat 
                    ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                    : 'border-gray-200 focus:ring-accent-500 focus:border-accent-500'
                }`}
                placeholder="15.0"
              />
              {errors.bodyFat && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠</span> {errors.bodyFat}
                </p>
              )}
              {showGuidelines && (
                <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs font-semibold text-blue-900 mb-2">Body Fat Guidelines:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-blue-800">
                    <div>
                      <p className="font-semibold">Men:</p>
                      <p>Essential: {bodyFatGuidelines.male.essential}</p>
                      <p>Athlete: {bodyFatGuidelines.male.athlete}</p>
                      <p>Fitness: {bodyFatGuidelines.male.fitness}</p>
                      <p>Average: {bodyFatGuidelines.male.average}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Women:</p>
                      <p>Essential: {bodyFatGuidelines.female.essential}</p>
                      <p>Athlete: {bodyFatGuidelines.female.athlete}</p>
                      <p>Fitness: {bodyFatGuidelines.female.fitness}</p>
                      <p>Average: {bodyFatGuidelines.female.average}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Body Goal *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {bodyGoals.map((goal) => (
                  <button
                    key={goal.value}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, bodyGoal: goal.value });
                      if (errors.bodyGoal) setErrors({ ...errors, bodyGoal: '' });
                    }}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.bodyGoal === goal.value
                        ? 'border-accent-500 bg-accent-50'
                        : 'border-gray-200 hover:border-accent-300'
                    } ${errors.bodyGoal ? 'border-red-400' : ''}`}
                  >
                    <div className="text-2xl mb-1">{goal.icon}</div>
                    <div className="text-xs font-medium text-gray-700">{goal.label}</div>
                  </button>
                ))}
              </div>
              {errors.bodyGoal && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                  <span>⚠</span> {errors.bodyGoal}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-accent-600 to-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-accent-700 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-accent-600 hover:text-accent-700 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
