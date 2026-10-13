import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/ui/login-form.jsx'

function AccountPage({ mode }) {
	const navigate = useNavigate()
	const [feedback, setFeedback] = useState('')
	const [feedbackKind, setFeedbackKind] = useState('error')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const isLogin = mode === 'login'

	const authenticate = async (endpoint, credentials) => {
		setIsSubmitting(true)
		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(credentials),
			})
			const result = await response.json().catch(() => ({}))

			if (!response.ok) {
				throw new Error(result.message || 'Authentication failed.')
			}
			if (!result.token || !result.user) {
				throw new Error('Unexpected authentication response.')
			}

			localStorage.setItem('token', result.token)
			localStorage.setItem('user', JSON.stringify(result.user))
			navigate(result.user.onboardingCompleted ? '/dashboard' : '/onboarding/profile', { replace: true })
		} catch (error) {
			setFeedbackKind('error')
			setFeedback(error.message || 'Authentication failed.')
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const credentials = {
			email: formData.get('email'),
			password: formData.get('password'),
		}
		if (!isLogin) credentials.name = formData.get('name')

		void authenticate(isLogin ? '/api/auth/login' : '/api/auth/register', credentials)
	}

	const handleGoogleSuccess = ({ credential }) => {
		if (!credential) {
			setFeedbackKind('error')
			setFeedback('Google sign-in did not return an ID token.')
			return
		}

		const endpoint = isLogin ? '/api/auth/google/login' : '/api/auth/google/signup'
		void authenticate(endpoint, { idToken: credential })
	}

	const showGoogleError = () => {
		setFeedbackKind('error')
		setFeedback('Google sign-in failed. Please try again.')
	}

	return (
		<LoginForm
			mode={mode}
			isSubmitting={isSubmitting}
			feedback={feedback}
			feedbackKind={feedbackKind}
			onSubmit={handleSubmit}
			onGoogleSuccess={handleGoogleSuccess}
			onGoogleError={showGoogleError}
		/>
	)
}

export default AccountPage