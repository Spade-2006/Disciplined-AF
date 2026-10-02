import { useState } from 'react'
import { Link } from 'react-router-dom'

function AccountPage({ mode }) {
	const [feedback, setFeedback] = useState('')
	const isLogin = mode === 'login'

	return (
		<main className="account-overlay">
			<section className="account-dialog" role="dialog" aria-modal="true" aria-labelledby="account-title">
				<Link className="account-close" to="/" aria-label="Return to home">×</Link>
				<p className="account-eyebrow">DISCIPLINED AF / ACCOUNT</p>
				<h2 id="account-title">{isLogin ? 'LOG IN' : 'SIGN UP'}</h2>
				<p className="account-note">Account access is not connected yet. Form details are not sent or stored.</p>
				<form onSubmit={(event) => {
					event.preventDefault()
					setFeedback('Authentication is unavailable until an account service is connected.')
				}}>
					{!isLogin && (
						<label>NAME<input name="name" type="text" autoComplete="name" required /></label>
					)}
					<label>EMAIL<input name="email" type="email" autoComplete="email" required /></label>
					<label>PASSWORD<input name="password" type="password" autoComplete={isLogin ? 'current-password' : 'new-password'} required /></label>
					<button className="account-submit" type="submit">{isLogin ? 'LOG IN' : 'CREATE ACCOUNT'}</button>
				</form>
				{feedback && <p className="account-feedback" role="status">{feedback}</p>}
				<Link className="account-switch" to={isLogin ? '/signup' : '/login'}>
					{isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
				</Link>
			</section>
		</main>
	)
}

export default AccountPage