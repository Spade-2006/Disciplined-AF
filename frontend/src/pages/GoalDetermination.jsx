// pages/GoalDetermination.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const GOALS = {
  bulk: {
    name: 'Bulk',
    icon: '💪',
    description: 'Gain muscle mass and size',
    plans: [
      {
        name: 'Aggressive Bulk',
        calories: '+500-750',
        protein: '1.2-1.5g/lb',
        duration: '12-16 weeks',
        description: 'Maximum muscle gain with some fat'
      },
      {
        name: 'Moderate Bulk',
        calories: '+300-500',
        protein: '1.0-1.2g/lb',
        duration: '16-20 weeks',
        description: 'Steady muscle gain, minimal fat'
      },
      {
        name: 'Lean Bulk',
        calories: '+200-300',
        protein: '1.2-1.5g/lb',
        duration: '20-24 weeks',
        description: 'Slow, lean muscle gain'
      }
    ]
  },
  clean_bulk: {
    name: 'Clean Bulk',
    icon: '🔥',
    description: 'Gain muscle with minimal fat gain',
    plans: [
      {
        name: 'Strict Clean Bulk',
        calories: '+200-300',
        protein: '1.3-1.6g/lb',
        duration: '20-24 weeks',
        description: 'Very controlled surplus, high protein'
      },
      {
        name: 'Balanced Clean Bulk',
        calories: '+300-400',
        protein: '1.2-1.4g/lb',
        duration: '16-20 weeks',
        description: 'Balanced approach to lean gains'
      },
      {
        name: 'Macro-Focused Clean Bulk',
        calories: '+250-350',
        protein: '1.2-1.5g/lb',
        carbs: '3-4g/lb',
        fats: '0.4-0.5g/lb',
        duration: '18-22 weeks',
        description: 'Precise macro tracking'
      }
    ]
  },
  cut: {
    name: 'Cut',
    icon: '✂️',
    description: 'Lose fat while maintaining muscle',
    plans: [
      {
        name: 'Aggressive Cut',
        calories: '-750-1000',
        protein: '1.2-1.5g/lb',
        duration: '8-12 weeks',
        description: 'Fast fat loss, higher risk of muscle loss'
      },
      {
        name: 'Moderate Cut',
        calories: '-500-750',
        protein: '1.0-1.3g/lb',
        duration: '12-16 weeks',
        description: 'Steady fat loss, preserve muscle'
      },
      {
        name: 'Slow Cut',
        calories: '-300-500',
        protein: '1.2-1.5g/lb',
        duration: '16-20 weeks',
        description: 'Slow, sustainable fat loss'
      }
    ]
  },
  fat_loss: {
    name: 'Fat Loss',
    icon: '🏃',
    description: 'Primary focus on losing body fat',
    plans: [
      {
        name: 'Rapid Fat Loss',
        calories: '-800-1000',
        protein: '1.0-1.2g/lb',
        duration: '6-10 weeks',
        description: 'Maximum fat loss rate'
      },
      {
        name: 'Sustainable Fat Loss',
        calories: '-500-700',
        protein: '1.0-1.2g/lb',
        duration: '12-16 weeks',
        description: 'Sustainable approach'
      },
      {
        name: 'Long-term Fat Loss',
        calories: '-300-500',
        protein: '0.8-1.0g/lb',
        duration: '20+ weeks',
        description: 'Gradual, maintainable fat loss'
      }
    ]
  },
  body_recomp: {
    name: 'Body Recomposition',
    icon: '⚖️',
    description: 'Lose fat and gain muscle simultaneously',
    plans: [
      {
        name: 'Classic Recomp',
        calories: 'Maintenance ±100',
        protein: '1.2-1.6g/lb',
        duration: '24+ weeks',
        description: 'Bodyweight maintenance, body composition change'
      },
      {
        name: 'Slight Deficit Recomp',
        calories: '-200-300',
        protein: '1.3-1.6g/lb',
        duration: '20-24 weeks',
        description: 'Small deficit for fat loss focus'
      },
      {
        name: 'Slight Surplus Recomp',
        calories: '+200-300',
        protein: '1.3-1.6g/lb',
        duration: '20-24 weeks',
        description: 'Small surplus for muscle focus'
      }
    ]
  },
  custom: {
    name: 'Custom',
    icon: '🎯',
    description: 'Create your own personalized plan',
    plans: [
      {
        name: 'Build Your Own',
        calories: 'Custom',
        protein: 'Custom',
        duration: 'Custom',
        description: 'Set your own targets and timeline'
      }
    ]
  }
};

const GoalDetermination = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectGoal = (goalKey) => {
    setSelectedGoal(goalKey);
    setSelectedPlan(null);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSaveGoal = () => {
    if (selectedGoal && selectedPlan) {
      const goalData = {
        goal: selectedGoal,
        plan: selectedPlan
      };
      localStorage.setItem('fitnessGoal', JSON.stringify(goalData));
      alert('Goal and plan saved!');
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
              Determine Your Fitness Goal
            </h1>
            <p className="text-dark-muted mt-2">Choose your goal and select a plan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {Object.entries(GOALS).map(([key, goal]) => (
              <button
                key={key}
                onClick={() => handleSelectGoal(key)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  selectedGoal === key
                    ? 'border-primary-500 bg-primary-900/20 shadow-lg'
                    : 'border-dark-border hover:border-primary-700 bg-dark-card'
                }`}
              >
                <div className="text-4xl mb-2">{goal.icon}</div>
                <h3 className="font-semibold text-dark-text mb-1">{goal.name}</h3>
                <p className="text-sm text-dark-muted">{goal.description}</p>
              </button>
            ))}
          </div>

          {selectedGoal && (
            <div className="bg-dark-card rounded-xl shadow-xl p-6 border border-dark-border">
              <h2 className="text-xl font-semibold text-dark-text mb-4">
                {GOALS[selectedGoal].name} Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {GOALS[selectedGoal].plans.map((plan, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectPlan(plan)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPlan?.name === plan.name
                        ? 'border-primary-500 bg-primary-900/20'
                        : 'border-dark-border hover:border-primary-700 bg-dark-surface'
                    }`}
                  >
                    <h3 className="font-semibold text-primary-400 mb-2">{plan.name}</h3>
                    <div className="space-y-1 text-sm text-dark-text mb-3">
                      <p><span className="text-dark-muted">Calories:</span> {plan.calories}</p>
                      <p><span className="text-dark-muted">Protein:</span> {plan.protein}</p>
                      {plan.carbs && <p><span className="text-dark-muted">Carbs:</span> {plan.carbs}</p>}
                      {plan.fats && <p><span className="text-dark-muted">Fats:</span> {plan.fats}</p>}
                      <p><span className="text-dark-muted">Duration:</span> {plan.duration}</p>
                    </div>
                    <p className="text-xs text-dark-muted">{plan.description}</p>
                  </div>
                ))}
              </div>

              {selectedPlan && (
                <div className="mt-6 pt-6 border-t border-dark-border">
                  <button
                    onClick={handleSaveGoal}
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-all"
                  >
                    Save Goal & Plan
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GoalDetermination;

