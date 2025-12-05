import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import LogWorkout from './pages/LogWorkout';
import Progress from './pages/Progress';
import Export from './pages/Export';
import Profile from './pages/Profile';
import CustomizePlans from './pages/CustomizePlans';
import GoalDetermination from './pages/GoalDetermination';
import DailyTracking from './pages/DailyTracking';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/log-workout" element={<LogWorkout />} />
        <Route path="/app/progress" element={<Progress />} />
        <Route path="/app/export" element={<Export />} />
        <Route path="/app/profile" element={<Profile />} />
        <Route path="/app/customize-plans" element={<CustomizePlans />} />
        <Route path="/app/goal-determination" element={<GoalDetermination />} />
        <Route path="/app/daily-tracking" element={<DailyTracking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
