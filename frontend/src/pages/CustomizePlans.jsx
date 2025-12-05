// pages/CustomizePlans.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const WORKOUT_SPLITS = {
  '6-Day': [
    {
      name: 'Push/Pull/Legs (PPL)',
      days: ['Push', 'Pull', 'Legs', 'Push', 'Pull', 'Legs', 'Rest'],
      description: 'Classic 6-day split focusing on muscle groups'
    },
    {
      name: 'Upper/Lower/Upper/Lower/Upper/Lower',
      days: ['Upper', 'Lower', 'Upper', 'Lower', 'Upper', 'Lower', 'Rest'],
      description: 'Alternating upper and lower body focus'
    },
    {
      name: 'Chest/Back/Shoulders/Arms/Legs/Core',
      days: ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core', 'Rest'],
      description: 'One muscle group per day'
    },
    {
      name: 'Push/Pull/Legs + Cardio',
      days: ['Push', 'Pull', 'Legs', 'Push', 'Pull', 'Legs + Cardio', 'Rest'],
      description: 'PPL with cardio on leg days'
    },
    {
      name: 'Bodybuilding Split',
      days: ['Chest/Triceps', 'Back/Biceps', 'Legs', 'Shoulders/Arms', 'Back/Chest', 'Legs', 'Rest'],
      description: 'High volume bodybuilding approach'
    },
    {
      name: 'Powerlifting Focus',
      days: ['Squat', 'Bench', 'Deadlift', 'Squat', 'Bench', 'Deadlift', 'Rest'],
      description: 'Big 3 focus with accessories'
    },
    {
      name: 'Hypertrophy Split',
      days: ['Chest/Shoulders', 'Back/Arms', 'Legs', 'Chest/Triceps', 'Back/Biceps', 'Legs/Calves', 'Rest'],
      description: 'Maximum muscle growth focus'
    },
    {
      name: 'Athletic Performance',
      days: ['Upper Power', 'Lower Power', 'Upper Hypertrophy', 'Lower Hypertrophy', 'Full Body', 'Cardio/Conditioning', 'Rest'],
      description: 'Power and conditioning focus'
    },
    {
      name: 'Arnold Split',
      days: ['Chest/Back', 'Shoulders/Arms', 'Legs', 'Chest/Back', 'Shoulders/Arms', 'Legs', 'Rest'],
      description: 'Classic Arnold Schwarzenegger split'
    },
    {
      name: 'Volume Split',
      days: ['Push (Heavy)', 'Pull (Heavy)', 'Legs (Heavy)', 'Push (Volume)', 'Pull (Volume)', 'Legs (Volume)', 'Rest'],
      description: 'Heavy and volume days alternated'
    },
    {
      name: 'Strength & Size',
      days: ['Upper Strength', 'Lower Strength', 'Upper Size', 'Lower Size', 'Full Body', 'Cardio', 'Rest'],
      description: 'Combining strength and hypertrophy'
    },
    {
      name: 'Full Body 6-Day',
      days: ['Full Body A', 'Full Body B', 'Full Body C', 'Full Body A', 'Full Body B', 'Full Body C', 'Rest'],
      description: 'Full body workouts with variations'
    }
  ],
  '5-Day': [
    {
      name: 'Bro Split',
      days: ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Rest', 'Rest'],
      description: 'One muscle group per day'
    },
    {
      name: 'Upper/Lower/Push/Pull/Legs',
      days: ['Upper', 'Lower', 'Push', 'Pull', 'Legs', 'Rest', 'Rest'],
      description: 'Mixed approach'
    },
    {
      name: 'Push/Pull/Legs/Upper/Lower',
      days: ['Push', 'Pull', 'Legs', 'Upper', 'Lower', 'Rest', 'Rest'],
      description: 'Classic 5-day split'
    },
    {
      name: 'Chest/Back/Shoulders/Arms/Legs',
      days: ['Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Rest', 'Rest'],
      description: 'Traditional bodybuilding split'
    },
    {
      name: 'Powerbuilding',
      days: ['Squat Focus', 'Bench Focus', 'Deadlift Focus', 'Upper Hypertrophy', 'Lower Hypertrophy', 'Rest', 'Rest'],
      description: 'Strength + size focus'
    },
    {
      name: 'Athletic 5-Day',
      days: ['Upper Power', 'Lower Power', 'Push', 'Pull', 'Legs', 'Rest', 'Rest'],
      description: 'Power and volume combination'
    },
    {
      name: 'Volume Split',
      days: ['Chest/Triceps', 'Back/Biceps', 'Shoulders', 'Legs', 'Arms', 'Rest', 'Rest'],
      description: 'High volume approach'
    },
    {
      name: 'Strength Focus',
      days: ['Squat', 'Bench', 'Deadlift', 'Upper Accessories', 'Lower Accessories', 'Rest', 'Rest'],
      description: 'Big 3 with accessories'
    },
    {
      name: 'Hypertrophy Focus',
      days: ['Chest/Shoulders', 'Back', 'Legs', 'Arms', 'Full Body', 'Rest', 'Rest'],
      description: 'Maximum muscle growth'
    },
    {
      name: 'Balanced Split',
      days: ['Push', 'Pull', 'Legs', 'Upper', 'Lower', 'Rest', 'Rest'],
      description: 'Balanced muscle development'
    },
    {
      name: 'Cardio Integrated',
      days: ['Upper', 'Lower', 'Cardio', 'Upper', 'Lower', 'Rest', 'Rest'],
      description: 'Cardio on dedicated day'
    },
    {
      name: 'Full Body Variation',
      days: ['Full Body A', 'Full Body B', 'Full Body C', 'Full Body D', 'Full Body E', 'Rest', 'Rest'],
      description: 'Full body with variations'
    }
  ],
  '3-Day': [
    {
      name: 'Full Body',
      days: ['Full Body', 'Rest', 'Full Body', 'Rest', 'Full Body', 'Rest', 'Rest'],
      description: 'Complete workout every session'
    },
    {
      name: 'Push/Pull/Legs',
      days: ['Push', 'Rest', 'Pull', 'Rest', 'Legs', 'Rest', 'Rest'],
      description: 'Classic 3-day split'
    },
    {
      name: 'Upper/Lower/Full Body',
      days: ['Upper', 'Rest', 'Lower', 'Rest', 'Full Body', 'Rest', 'Rest'],
      description: 'Mixed approach'
    },
    {
      name: 'Strength Focus',
      days: ['Squat/Bench', 'Rest', 'Deadlift/OHP', 'Rest', 'Accessories', 'Rest', 'Rest'],
      description: 'Big lifts focus'
    },
    {
      name: 'Hypertrophy Focus',
      days: ['Push', 'Rest', 'Pull', 'Rest', 'Legs', 'Rest', 'Rest'],
      description: 'Muscle growth focus'
    },
    {
      name: 'Beginner Full Body',
      days: ['Full Body A', 'Rest', 'Full Body B', 'Rest', 'Full Body C', 'Rest', 'Rest'],
      description: 'Perfect for beginners'
    },
    {
      name: 'Powerlifting',
      days: ['Squat Day', 'Rest', 'Bench Day', 'Rest', 'Deadlift Day', 'Rest', 'Rest'],
      description: 'Big 3 focus'
    },
    {
      name: 'Athletic Performance',
      days: ['Upper Power', 'Rest', 'Lower Power', 'Rest', 'Full Body Conditioning', 'Rest', 'Rest'],
      description: 'Power and conditioning'
    },
    {
      name: 'Bodybuilding',
      days: ['Chest/Back', 'Rest', 'Shoulders/Arms', 'Rest', 'Legs', 'Rest', 'Rest'],
      description: 'Bodybuilding approach'
    },
    {
      name: 'Cardio Integrated',
      days: ['Full Body + Cardio', 'Rest', 'Full Body', 'Rest', 'Full Body + Cardio', 'Rest', 'Rest'],
      description: 'Cardio included'
    },
    {
      name: 'Strength & Size',
      days: ['Upper Strength', 'Rest', 'Lower Strength', 'Rest', 'Full Body Volume', 'Rest', 'Rest'],
      description: 'Strength and size combo'
    },
    {
      name: 'Balanced 3-Day',
      days: ['Push/Pull', 'Rest', 'Legs/Core', 'Rest', 'Full Body', 'Rest', 'Rest'],
      description: 'Balanced approach'
    }
  ],
  '2-Day': [
    {
      name: 'Upper/Lower',
      days: ['Upper', 'Rest', 'Lower', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Classic 2-day split'
    },
    {
      name: 'Push/Pull',
      days: ['Push', 'Rest', 'Pull', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Push and pull focus'
    },
    {
      name: 'Full Body',
      days: ['Full Body A', 'Rest', 'Full Body B', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Two full body sessions'
    },
    {
      name: 'Strength Focus',
      days: ['Squat/Bench', 'Rest', 'Deadlift/OHP', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Big lifts focus'
    },
    {
      name: 'Hypertrophy',
      days: ['Upper Hypertrophy', 'Rest', 'Lower Hypertrophy', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Muscle growth focus'
    },
    {
      name: 'Cardio Integrated',
      days: ['Full Body + Cardio', 'Rest', 'Full Body', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Cardio included'
    },
    {
      name: 'Beginner Friendly',
      days: ['Full Body A', 'Rest', 'Full Body B', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Perfect for beginners'
    },
    {
      name: 'Powerlifting',
      days: ['Squat/Bench', 'Rest', 'Deadlift/Accessories', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Big 3 focus'
    },
    {
      name: 'Bodybuilding',
      days: ['Chest/Back/Shoulders', 'Rest', 'Legs/Arms', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Bodybuilding approach'
    },
    {
      name: 'Athletic',
      days: ['Upper Power', 'Rest', 'Lower Power', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Power focus'
    },
    {
      name: 'Balanced',
      days: ['Push/Legs', 'Rest', 'Pull/Core', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Balanced muscle groups'
    },
    {
      name: 'Time Efficient',
      days: ['Full Body Heavy', 'Rest', 'Full Body Volume', 'Rest', 'Rest', 'Rest', 'Rest'],
      description: 'Maximum efficiency'
    }
  ]
};

const CARDIO_OPTIONS = [
  { name: 'None', description: 'No dedicated cardio' },
  { name: 'Light Cardio', description: '20-30 min low intensity, 2-3x/week' },
  { name: 'Moderate Cardio', description: '30-45 min moderate intensity, 3-4x/week' },
  { name: 'High Intensity', description: '20-30 min HIIT, 2-3x/week' },
  { name: 'Daily Light', description: '15-20 min daily low intensity' },
  { name: 'Cardio Focus', description: '45-60 min, 4-5x/week' }
];

const CustomizePlans = () => {
  const navigate = useNavigate();
  const [selectedDays, setSelectedDays] = useState('6-Day');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cardioOption, setCardioOption] = useState('None');

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSavePlan = () => {
    if (selectedPlan) {
      // Save plan to backend/localStorage
      const planData = {
        ...selectedPlan,
        cardio: cardioOption,
        selectedDays
      };
      localStorage.setItem('workoutPlan', JSON.stringify(planData));
      alert('Workout plan saved!');
      navigate('/app');
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
              Customize Your Workout Plan
            </h1>
            <p className="text-dark-muted mt-2">Choose from pre-built workout splits</p>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-3">
              {Object.keys(WORKOUT_SPLITS).map(days => (
                <button
                  key={days}
                  onClick={() => {
                    setSelectedDays(days);
                    setSelectedPlan(null);
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedDays === days
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                      : 'bg-dark-card text-dark-text border border-dark-border hover:border-primary-500'
                  }`}
                >
                  {days}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-dark-card rounded-xl shadow-xl p-6 border border-dark-border">
                <h2 className="text-xl font-semibold text-dark-text mb-4">
                  {selectedDays} Workout Plans
                </h2>
                <div className="space-y-4">
                  {WORKOUT_SPLITS[selectedDays].map((plan, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectPlan(plan)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedPlan?.name === plan.name
                          ? 'border-primary-500 bg-primary-900/20'
                          : 'border-dark-border hover:border-primary-700 bg-dark-surface'
                      }`}
                    >
                      <h3 className="font-semibold text-dark-text mb-1">{plan.name}</h3>
                      <p className="text-sm text-dark-muted mb-3">{plan.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {plan.days.map((day, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 rounded text-xs ${
                              day === 'Rest'
                                ? 'bg-dark-border text-dark-muted'
                                : 'bg-primary-900/30 text-primary-300'
                            }`}
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-dark-card rounded-xl shadow-xl p-6 border border-dark-border">
                <h2 className="text-xl font-semibold text-dark-text mb-4">Cardio Options</h2>
                <div className="space-y-3">
                  {CARDIO_OPTIONS.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setCardioOption(option.name)}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                        cardioOption === option.name
                          ? 'border-primary-500 bg-primary-900/20'
                          : 'border-dark-border hover:border-primary-700 bg-dark-surface'
                      }`}
                    >
                      <div className="font-medium text-dark-text">{option.name}</div>
                      <div className="text-xs text-dark-muted mt-1">{option.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedPlan && (
                <div className="bg-dark-card rounded-xl shadow-xl p-6 border border-dark-border">
                  <h2 className="text-xl font-semibold text-dark-text mb-4">Selected Plan</h2>
                  <div className="mb-4">
                    <h3 className="font-semibold text-primary-400 mb-2">{selectedPlan.name}</h3>
                    <p className="text-sm text-dark-muted mb-3">{selectedPlan.description}</p>
                    <div className="space-y-2">
                      {selectedPlan.days.map((day, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-xs text-dark-muted w-16">Day {idx + 1}:</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            day === 'Rest'
                              ? 'bg-dark-border text-dark-muted'
                              : 'bg-primary-900/30 text-primary-300'
                          }`}>
                            {day}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleSavePlan}
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-all"
                  >
                    Save Plan
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomizePlans;

