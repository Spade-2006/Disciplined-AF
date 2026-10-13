import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import OnboardingFitness from './pages/OnboardingFitness.jsx'
import OnboardingPersonal from './pages/OnboardingPersonal.jsx'
import DigitalPhysiqueRigTest from './pages/DigitalPhysiqueRigTest.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import SignUp from './pages/SignUp.jsx'
import FAQ from './pages/FAQ.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import About from './pages/About.jsx'
import Track from './pages/Track.jsx'
import Workouts from './pages/Workouts.jsx'
import PhysiqueProfileProvider from './context/PhysiqueProfileProvider.jsx'

function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

function App() {
	return (
		<BrowserRouter>
			<PhysiqueProfileProvider>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/track" element={<Track />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/onboarding/profile" element={<OnboardingPersonal />} />
					<Route path="/onboarding/step-2" element={<OnboardingFitness />} />
					<Route path="/digital-physique-rig-test" element={<DigitalPhysiqueRigTest />} />
					<Route path="/about" element={<About />} />
					<Route path="/features" element={<Navigate to="/login" replace />} />
					<Route path="/analysis" element={<Navigate to="/login" replace />} />
					<Route path="/preview" element={<Navigate to="/login" replace />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/progress" element={<Navigate to="/login" replace />} />
					<Route path="/workouts" element={<Workouts />} />
					<Route path="/goals" element={<PlaceholderPage title="GOALS" />} />
					<Route path="/settings" element={<PlaceholderPage title="SETTINGS" />} />
					<Route path="/digital-physique" element={<Navigate to="/login" replace />} />
					<Route path="/insights" element={<Navigate to="/login" replace />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/terms-and-conditions" element={<Terms />} />
					<Route path="*" element={<PlaceholderPage title="PAGE NOT FOUND" />} />
				</Routes>
			</PhysiqueProfileProvider>
		</BrowserRouter>
	)
}

export default App
