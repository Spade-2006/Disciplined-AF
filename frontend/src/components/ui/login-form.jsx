import { GoogleLogin } from '@react-oauth/google'
import { ArrowRight, Lock, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import SmokeyBackground from '../SmokeyBackground.jsx'
import './login-form.css'

function LoginForm({ mode, isSubmitting, feedback, feedbackKind, onSubmit, onGoogleSuccess, onGoogleError }) {
	const isLogin = mode === 'login'

	return (
		<main className="auth-scene">
			<SmokeyBackground />
			<div className="auth-content">
				<section className="auth-card" aria-labelledby="auth-title">
					<header className="auth-header">
						<h1 id="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
						<p>{isLogin ? 'Sign in to continue' : 'Create an account to get started'}</p>
					</header>

					<form className="auth-form" onSubmit={onSubmit}>
						{!isLogin && (
							<div className="auth-field">
								<input
									className="auth-field__input"
									name="name"
									type="text"
									id="auth-name"
									autoComplete="name"
									placeholder=" "
									required
								/>
								<label className="auth-field__label" htmlFor="auth-name">
									<User size={16} aria-hidden="true" />
									Full Name
								</label>
							</div>
						)}

						<div className="auth-field">
							<input
								className="auth-field__input"
								name="email"
								type="email"
								id="auth-email"
								autoComplete="email"
								placeholder=" "
								required
							/>
							<label className="auth-field__label" htmlFor="auth-email">
								<User size={16} aria-hidden="true" />
								Email Address
							</label>
						</div>

						<div className="auth-field">
							<input
								className="auth-field__input"
								name="password"
								type="password"
								id="auth-password"
								autoComplete={isLogin ? 'current-password' : 'new-password'}
								placeholder=" "
								required
							/>
							<label className="auth-field__label" htmlFor="auth-password">
								<Lock size={16} aria-hidden="true" />
								Password
							</label>
						</div>

						<button className="auth-submit" type="submit" disabled={isSubmitting}>
							{isSubmitting ? 'PLEASE WAIT' : isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
							<ArrowRight className="auth-submit__arrow" size={20} aria-hidden="true" />
						</button>
					</form>

					<div className="auth-divider"><span>OR CONTINUE WITH</span></div>
					<div className="auth-google">
						<GoogleLogin
							theme="outline"
							shape="rectangular"
							size="large"
							text="continue_with"
							onSuccess={onGoogleSuccess}
							onError={onGoogleError}
						/>
					</div>

					{feedback && (
						<p className="auth-feedback" data-kind={feedbackKind} role="status" aria-live="polite">
							{feedback}
						</p>
					)}

					<p className="auth-switch">
						{isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
						<Link to={isLogin ? '/signup' : '/login'}>{isLogin ? 'Sign Up' : 'Sign In'}</Link>
					</p>
				</section>
			</div>
		</main>
	)
}

export default LoginForm