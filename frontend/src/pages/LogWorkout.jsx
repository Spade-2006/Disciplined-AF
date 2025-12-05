// pages/LogWorkout.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import Footer from '../components/Footer';

const EXERCISES = {
  'Barbell': [
    'Barbell Bench Press', 'Barbell Squat', 'Barbell Deadlift', 'Barbell Row', 
    'Barbell Overhead Press', 'Barbell Curl', 'Barbell Shrug', 'Barbell Lunge',
    'Barbell Good Morning', 'Barbell Hip Thrust', 'Barbell Calf Raise', 'Barbell Front Squat'
  ],
  'Dumbbell': [
    'Dumbbell Bench Press', 'Dumbbell Flyes', 'Dumbbell Shoulder Press', 'Dumbbell Lateral Raise',
    'Dumbbell Front Raise', 'Dumbbell Row', 'Dumbbell Curl', 'Dumbbell Hammer Curl',
    'Dumbbell Tricep Extension', 'Dumbbell Kickback', 'Dumbbell Lunge', 'Dumbbell Step Up',
    'Dumbbell Goblet Squat', 'Dumbbell Romanian Deadlift', 'Dumbbell Pullover'
  ],
  'Machine': [
    'Leg Press', 'Leg Extension', 'Leg Curl', 'Cable Crossover', 'Cable Flyes',
    'Cable Row', 'Lat Pulldown', 'Cable Tricep Pushdown', 'Cable Bicep Curl',
    'Cable Lateral Raise', 'Cable Crunch', 'Cable Woodchopper', 'Smith Machine Squat',
    'Smith Machine Bench Press', 'Pec Deck', 'Seated Row Machine', 'Chest Press Machine'
  ],
  'Bodyweight': [
    'Push-ups', 'Pull-ups', 'Chin-ups', 'Dips', 'Squats', 'Lunges', 'Plank',
    'Burpees', 'Mountain Climbers', 'Jumping Jacks', 'Sit-ups', 'Crunches',
    'Leg Raises', 'Pike Push-ups', 'Handstand Push-ups', 'Muscle-ups'
  ],
  'Cardio': [
    'Running', 'Cycling', 'Rowing', 'Elliptical', 'Stair Climber', 'Treadmill',
    'Jump Rope', 'Swimming', 'HIIT', 'Sprint Intervals', 'Walking', 'Jogging',
    'Stair Running', 'Cycling (Indoor)', 'Cycling (Outdoor)', 'Rowing Machine',
    'Cross Trainer', 'Assault Bike', 'SkiErg', 'Treadmill Incline Walk',
    'Stepper Machine', 'Arc Trainer'
  ],
  'Other': [
    'Kettlebell Swing', 'Kettlebell Goblet Squat', 'TRX Rows', 'TRX Push-ups',
    'Battle Ropes', 'Farmers Walk', 'Turkish Get-up', 'Box Jumps'
  ]
};

const LogWorkout = () => {
  const navigate = useNavigate();
  const [workoutData, setWorkoutData] = useState({
    name: '',
    date: new Date().toISOString().split('T')[0],
    notes: '',
    duration_minutes: ''
  });
  const [exercises, setExercises] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Barbell');
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const addExercise = () => {
    const exerciseName = document.getElementById('exercise-select')?.value;
    if (exerciseName && !exercises.find(e => e.exercise_name === exerciseName)) {
      setExercises([...exercises, {
        exercise_name: exerciseName,
        sets: [{ set_index: 1, reps: '', weight: '', rpe: '', tempo: '' }]
      }]);
      setSearchTerm('');
    }
  };

  const addSet = (exerciseIndex) => {
    const updatedExercises = [...exercises];
    const newSetIndex = updatedExercises[exerciseIndex].sets.length + 1;
    updatedExercises[exerciseIndex].sets.push({
      set_index: newSetIndex,
      reps: '',
      weight: '',
      rpe: '',
      tempo: ''
    });
    setExercises(updatedExercises);
  };

  const removeSet = (exerciseIndex, setIndex) => {
    const updatedExercises = [...exercises];
    updatedExercises[exerciseIndex].sets = updatedExercises[exerciseIndex].sets
      .filter(s => s.set_index !== setIndex)
      .map((s, idx) => ({ ...s, set_index: idx + 1 }));
    setExercises(updatedExercises);
  };

  const updateSet = (exerciseIndex, setIndex, field, value) => {
    const updatedExercises = [...exercises];
    const set = updatedExercises[exerciseIndex].sets.find(s => s.set_index === setIndex);
    if (set) {
      set[field] = value;
      setExercises(updatedExercises);
    }
  };

  const removeExercise = (exerciseIndex) => {
    setExercises(exercises.filter((_, idx) => idx !== exerciseIndex));
  };

  const filteredExercises = EXERCISES[selectedCategory]?.filter(ex =>
    ex.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!workoutData.name) {
      setMessage({ type: 'error', text: 'Workout name is required' });
      return;
    }

    if (exercises.length === 0) {
      setMessage({ type: 'error', text: 'Please add at least one exercise' });
      return;
    }

    setLoading(true);
    try {
      // Create workout
      const { data: workoutRes } = await api.post('/api/workouts/create', {
        name: workoutData.name,
        date: workoutData.date,
        notes: workoutData.notes || null,
        duration_minutes: workoutData.duration_minutes ? parseInt(workoutData.duration_minutes) : null
      });

      const newWorkoutId = workoutRes.workout?.id || workoutRes.id || workoutRes.workout_id;
      setWorkoutId(newWorkoutId);

      // Add exercise entries
      for (const exercise of exercises) {
        for (const set of exercise.sets) {
          if (set.reps && set.weight) {
            await api.post('/api/workouts/add-entry', {
              workout_id: newWorkoutId,
              exercise_name: exercise.exercise_name,
              set_index: set.set_index,
              reps: parseInt(set.reps),
              weight: parseFloat(set.weight),
              rpe: set.rpe ? parseFloat(set.rpe) : null,
              tempo: set.tempo || null
            });
          }
        }
      }

      setMessage({ type: 'success', text: 'Workout logged successfully!' });
      setTimeout(() => navigate('/app'), 1500);
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.response?.data?.message || err.response?.data?.error || 'Failed to log workout. Please try again.'
      });
      console.error('Log workout error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button
              onClick={() => navigate('/app')}
              className="text-primary-400 hover:text-primary-300 font-medium mb-4 flex items-center gap-2"
            >
              ← Back to Dashboard
            </button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Log Workout
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-dark-card rounded-xl shadow-lg p-6 border border-dark-border">
              <h2 className="text-xl font-semibold text-dark-text mb-4">Workout Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Workout Name *
                  </label>
                  <input
                    type="text"
                    value={workoutData.name}
                    onChange={(e) => setWorkoutData({ ...workoutData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-text"
                    placeholder="Push Day, Pull Day, etc."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={workoutData.date}
                    onChange={(e) => setWorkoutData({ ...workoutData, date: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-text"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-text mb-2">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={workoutData.duration_minutes}
                    onChange={(e) => setWorkoutData({ ...workoutData, duration_minutes: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-text"
                    placeholder="60"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold text-dark-text mb-2">
                  Notes
                </label>
                <textarea
                  value={workoutData.notes}
                  onChange={(e) => setWorkoutData({ ...workoutData, notes: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-text"
                  rows="3"
                  placeholder="How did you feel? Any observations?"
                />
              </div>
            </div>

            <div className="bg-dark-card rounded-xl shadow-lg p-6 border border-dark-border">
              <h2 className="text-xl font-semibold text-dark-text mb-4">Add Exercises</h2>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.keys(EXERCISES).map(category => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white shadow-md'
                          : 'bg-dark-surface text-dark-text border border-dark-border hover:border-primary-500'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search exercises..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-2 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-text"
                  />
                  <select
                    id="exercise-select"
                    className="flex-1 px-4 py-2 bg-dark-surface border-2 border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-dark-text"
                  >
                    <option value="">Select exercise...</option>
                    {filteredExercises.map(ex => (
                      <option key={ex} value={ex}>{ex}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={addExercise}
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>

              {exercises.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex} className="mb-6 p-4 bg-dark-surface rounded-lg border border-dark-border">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-dark-text">{exercise.exercise_name}</h3>
                    <button
                      type="button"
                      onClick={() => removeExercise(exerciseIndex)}
                      className="text-red-400 hover:text-red-300 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-dark-border">
                          <th className="text-left py-2 px-2 text-sm font-semibold text-dark-text">Set</th>
                          <th className="text-left py-2 px-2 text-sm font-semibold text-dark-text">Reps</th>
                          <th className="text-left py-2 px-2 text-sm font-semibold text-dark-text">Weight (lbs)</th>
                          <th className="text-left py-2 px-2 text-sm font-semibold text-dark-text">RPE</th>
                          <th className="text-left py-2 px-2 text-sm font-semibold text-dark-text">Tempo</th>
                          <th className="text-left py-2 px-2 text-sm font-semibold text-dark-text"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {exercise.sets.map((set) => (
                          <tr key={set.set_index} className="border-b border-dark-border">
                            <td className="py-2 px-2">
                              <span className="font-medium text-dark-text">{set.set_index}</span>
                            </td>
                            <td className="py-2 px-2">
                              <input
                                type="number"
                                min="1"
                                value={set.reps}
                                onChange={(e) => updateSet(exerciseIndex, set.set_index, 'reps', e.target.value)}
                                className="w-20 px-2 py-1 bg-dark-bg border border-dark-border rounded focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                                placeholder="10"
                              />
                            </td>
                            <td className="py-2 px-2">
                              <input
                                type="number"
                                step="0.5"
                                min="0"
                                value={set.weight}
                                onChange={(e) => updateSet(exerciseIndex, set.set_index, 'weight', e.target.value)}
                                className="w-24 px-2 py-1 bg-dark-bg border border-dark-border rounded focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                                placeholder="135"
                              />
                            </td>
                            <td className="py-2 px-2">
                              <input
                                type="number"
                                step="0.5"
                                min="1"
                                max="10"
                                value={set.rpe}
                                onChange={(e) => updateSet(exerciseIndex, set.set_index, 'rpe', e.target.value)}
                                className="w-20 px-2 py-1 bg-dark-bg border border-dark-border rounded focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                                placeholder="8"
                              />
                            </td>
                            <td className="py-2 px-2">
                              <input
                                type="text"
                                value={set.tempo}
                                onChange={(e) => updateSet(exerciseIndex, set.set_index, 'tempo', e.target.value)}
                                className="w-24 px-2 py-1 bg-dark-bg border border-dark-border rounded focus:outline-none focus:ring-2 focus:ring-primary-500 text-dark-text"
                                placeholder="2-1-2"
                              />
                            </td>
                            <td className="py-2 px-2">
                              {exercise.sets.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeSet(exerciseIndex, set.set_index)}
                                  className="text-red-400 hover:text-red-300 text-sm"
                                >
                                  Remove
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => addSet(exerciseIndex)}
                    className="mt-3 text-primary-400 hover:text-primary-300 font-medium text-sm"
                  >
                    + Add Set
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                {loading ? 'Saving Workout...' : 'Save Workout'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/app')}
                className="px-6 py-3 bg-dark-surface text-dark-text border border-dark-border rounded-lg font-semibold hover:bg-dark-border transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogWorkout;

