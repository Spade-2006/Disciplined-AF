import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import SignUp from './pages/SignUp.jsx'

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
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/about" element={<PlaceholderPage title="ABOUT" />} />
				<Route path="/features" element={<PlaceholderPage title="FEATURES" />} />
				<Route path="/analysis" element={<PlaceholderPage title="ANALYSIS SCAN" />} />
				<Route path="/preview" element={<PlaceholderPage title="PREVIEW" />} />
				<Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
				<Route path="/progress" element={<PlaceholderPage title="TRACK PROGRESS" />} />
				<Route path="/digital-physique" element={<PlaceholderPage title="REAL 3D YOU" />} />
				<Route path="/insights" element={<PlaceholderPage title="PERSONALIZED INSIGHTS" />} />
				<Route path="/privacy-policy" element={<PlaceholderPage title="PRIVACY POLICY" />} />
				<Route path="/terms-and-conditions" element={<PlaceholderPage title="TERMS & CONDITIONS" />} />
				<Route path="*" element={<PlaceholderPage title="PAGE NOT FOUND" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
