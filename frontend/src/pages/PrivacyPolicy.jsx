import { useEffect, useState } from 'react'
import { ArrowLeft, ShieldCheck, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SmokeyBackground from '../components/SmokeyBackground.jsx'
import './PrivacyPolicy.css'

const SECTIONS = [
	{ id: 'overview', index: '01', title: 'Overview & Scope' },
	{ id: 'collection', index: '02', title: 'Information We Collect' },
	{ id: 'fitness-data', index: '03', title: 'Fitness & Physical Profile' },
	{ id: 'digital-physique', index: '04', title: 'Digital Physique Disclaimer' },
	{ id: 'use-of-info', index: '05', title: 'How We Use Information' },
	{ id: 'storage', index: '06', title: 'Storage & Local State' },
	{ id: 'sharing', index: '07', title: 'Data Sharing & Third Parties' },
	{ id: 'security', index: '08', title: 'Data Security & Retention' },
	{ id: 'user-rights', index: '09', title: 'User Rights & Deletion' },
	{ id: 'children', index: '10', title: 'Children’s Privacy' },
	{ id: 'updates', index: '11', title: 'Changes & Support' },
]

function PrivacyPolicy() {
	const [activeSection, setActiveSection] = useState('overview')

	useEffect(() => {
		const handleScroll = () => {
			const scrollPos = window.scrollY + 180
			for (let i = SECTIONS.length - 1; i >= 0; i--) {
				const section = document.getElementById(SECTIONS[i].id)
				if (section && section.offsetTop <= scrollPos) {
					setActiveSection(SECTIONS[i].id)
					break
				}
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToSection = (e, id) => {
		e.preventDefault()
		const element = document.getElementById(id)
		if (element) {
			const yOffset = -90
			const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
			window.scrollTo({ top: y, behavior: 'smooth' })
			setActiveSection(id)
		}
	}

	return (
		<div className="privacy-page">
			<SmokeyBackground />
			{/* Top Navigation */}
			<header className="privacy-header">
				<div className="privacy-header__inner">
					<Link to="/" className="privacy-brand" aria-label="Disciplined AF home">
						<span className="privacy-brand__emblem" aria-hidden="true">
							<i /><i /><i />
						</span>
						<span className="privacy-brand__text">
							<span>DISCIPLINED <b>AF</b></span>
							<small>Physique Intelligence</small>
						</span>
					</Link>
					<Link to="/" className="privacy-back-link">
						<ArrowLeft size={12} aria-hidden="true" />
						<span>Back to Home</span>
					</Link>
				</div>
			</header>

			{/* Hero Heading */}
			<section className="privacy-hero">
				<div className="privacy-hero__badge">
					<span className="privacy-hero__dot" />
					<span>Legal Documentation // Data Privacy Protocol</span>
				</div>
				<h1>Privacy Policy</h1>
				<p className="privacy-hero__intro">
					This Privacy Policy outlines how Disciplined AF collects, utilizes, stores, and protects
					information provided by users when accessing the application, creating an account, or interacting
					with our physique visualization features.
				</p>
				<div className="privacy-hero__meta">
					<span>Effective Date: <b>October 2026</b></span>
					<span>Scope: <b>Web Application</b></span>
					<span>Status: <b>Active</b></span>
				</div>

				{/* Important Medical Disclaimer Notice */}
				<div className="privacy-disclaimer">
					<AlertCircle size={20} className="privacy-disclaimer__icon" aria-hidden="true" />
					<div className="privacy-disclaimer__text">
						<strong>Important: Non-Medical Approximate Visualization</strong>
						The Digital Physique model and associated training metrics provided by Disciplined AF are approximate,
						mathematically simulated visualizations based on user-entered values. They do not constitute medical
						data, clinical biometric measurements, bodily composition assessments, or healthcare diagnosis.
					</div>
				</div>
			</section>

			{/* Main Content Layout */}
			<main className="privacy-layout">
				{/* Sticky Table of Contents */}
				<aside className="privacy-sidebar" aria-label="Section navigation">
					<div className="privacy-sidebar__title">
						<ShieldCheck size={12} aria-hidden="true" />
						<span>Index / Navigation</span>
					</div>
					<nav className="privacy-sidebar__nav">
						{SECTIONS.map((sec) => (
							<a
								key={sec.id}
								href={`#${sec.id}`}
								className={`privacy-nav-item ${activeSection === sec.id ? 'is-active' : ''}`}
								onClick={(e) => scrollToSection(e, sec.id)}
							>
								<span className="privacy-nav-item__index">{sec.index}</span>
								<span>{sec.title}</span>
							</a>
						))}
					</nav>
				</aside>

				{/* Policy Body */}
				<div className="privacy-content">
					{/* 01. Overview */}
					<article id="overview" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">01</span>
							<h2>Overview &amp; Scope</h2>
						</div>
						<p>
							Disciplined AF is designed to empower individuals to visualize their physical development,
							configure body measurements, and receive customized workout splits aligned with their personal goals.
							We are committed to operating transparently and collecting only the information strictly necessary to
							deliver this personalized functionality.
						</p>
						<p>
							By accessing or using the Disciplined AF platform, you acknowledge the data handling practices
							described in this document.
						</p>
					</article>

					{/* 02. Information We Collect */}
					<article id="collection" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">02</span>
							<h2>Information We Collect</h2>
						</div>
						<p>
							We collect information directly from you when you register an account, authenticate, and complete the
							onboarding or profile configuration workflows.
						</p>

						<div className="privacy-field-grid">
							<div className="privacy-field-item">
								<span className="privacy-field-item__title">Account Identity</span>
								<span className="privacy-field-item__desc">
									Your display name and email address provided during registration.
								</span>
							</div>
							<div className="privacy-field-item">
								<span className="privacy-field-item__title">Authentication Data</span>
								<span className="privacy-field-item__desc">
									Securely hashed account passwords, or Google OAuth credential tokens when utilizing Google sign-in.
								</span>
							</div>
							<div className="privacy-field-item">
								<span className="privacy-field-item__title">Physical Profile</span>
								<span className="privacy-field-item__desc">
									Age, biological sex / model preference, height, current weight, and target weight.
								</span>
							</div>
							<div className="privacy-field-item">
								<span className="privacy-field-item__title">Body Measurements</span>
								<span className="privacy-field-item__desc">
									Optional user-reported circumference figures (chest, waist, arms, thighs, and body fat percentage).
								</span>
							</div>
							<div className="privacy-field-item">
								<span className="privacy-field-item__title">Training Preferences</span>
								<span className="privacy-field-item__desc">
									Primary goals (e.g., fat loss, muscle gain), experience level, equipment access, and activity rate.
								</span>
							</div>
							<div className="privacy-field-item">
								<span className="privacy-field-item__title">Dietary &amp; Aesthetic Choices</span>
								<span className="privacy-field-item__desc">
									Dietary lifestyle preferences and avatar appearance options (skin tone, hair color, eye color).
								</span>
							</div>
						</div>
					</article>

					{/* 03. Fitness & Profile Information */}
					<article id="fitness-data" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">03</span>
							<h2>Fitness &amp; Physical Profile Information</h2>
						</div>
						<p>
							All fitness metrics, body dimensions, and workout parameters within the application are
							<strong> user-provided</strong>. The application does not connect to external clinical hardware,
							medical laboratory sensors, or invasive tracking equipment.
						</p>
						<p>
							You retain full control over whether to provide optional measurements such as body fat percentage or
							individual limb circumferences. These data points are utilized exclusively to calculate baseline caloric
							and training guidelines, scale 3D morphological targets, and reflect your self-reported progress over time.
						</p>
					</article>

					{/* 04. Digital Physique Disclaimer */}
					<article id="digital-physique" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">04</span>
							<h2>Digital Physique Visualization Disclaimer</h2>
						</div>
						<p>
							The interactive 3D model featured within Disciplined AF is a digital mesh representation adjusted
							via parametric morph targets (such as height, weight, and regional proportions).
						</p>
						<ul>
							<li>
								<strong>Approximate Simulation:</strong> The 3D render is a visual simulation designed to help visualize
								physique adjustments and muscular structure. It does not reproduce exact anatomical reality or clinical scans.
							</li>
							<li>
								<strong>Non-Medical Purpose:</strong> The visualization does not constitute medical data, health diagnostics,
								pathological screening, or clinical body composition evaluation.
							</li>
							<li>
								<strong>User Responsibility:</strong> Any exercise, nutritional change, or training regimen undertaken
								should be evaluated based on your individual health status, and you should consult a qualified healthcare
								professional before starting intensive physical regimens.
							</li>
						</ul>
					</article>

					{/* 05. How We Use Information */}
					<article id="use-of-info" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">05</span>
							<h2>How We Use Information</h2>
						</div>
						<p>We process your data strictly to operate and personalize the Disciplined AF platform:</p>
						<ul>
							<li>
								<strong>Account Management:</strong> Authenticating user sessions, identifying registered accounts, and
								preventing unauthorized access.
							</li>
							<li>
								<strong>Workout Plan Generation:</strong> Tailoring training splits (such as Push/Pull/Legs or Upper/Lower)
								according to your selected experience level, equipment availability, and weekly schedule.
							</li>
							<li>
								<strong>Model Deformation &amp; Display:</strong> Adjusting the proportions of the interactive 3D avatar
								to reflect your specified height, weight, and dimensional values.
							</li>
							<li>
								<strong>Interface Preferences:</strong> Remembering your chosen measurement system (metric vs. imperial)
								and avatar customization selections.
							</li>
						</ul>
					</article>

					{/* 06. Storage & Local Storage */}
					<article id="storage" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">06</span>
							<h2>How Information Is Stored &amp; Local Storage</h2>
						</div>
						<p>
							Information is managed through a combination of secure database persistence and browser client-side storage:
						</p>
						<ul>
							<li>
								<strong>Server Storage:</strong> User account credentials, personal statistics, and fitness configurations
								are stored in server-side databases behind authenticated application endpoints.
							</li>
							<li>
								<strong>Browser Local Storage (localStorage):</strong> The application uses your browser’s local storage
								solely to retain session state across page refreshes. This includes storing your authentication token
								(<code>token</code>) and a local user profile object (<code>user</code>) so that you remain signed in.
							</li>
							<li>
								<strong>No Tracking Cookies:</strong> The application does not deploy advertising cookies, cross-site trackers,
								or behavioral tracking pixels.
							</li>
						</ul>
					</article>

					{/* 07. Data Sharing & Third-Party Services */}
					<article id="sharing" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">07</span>
							<h2>Data Sharing &amp; Third-Party Services</h2>
						</div>
						<p>
							We do not sell, rent, monetize, or disclose your personal or fitness information to third-party data brokers,
							advertisers, or commercial entities.
						</p>
						<p>
							The application utilizes the following specific third-party service:
						</p>
						<ul>
							<li>
								<strong>Google Identity Services (OAuth):</strong> If you choose to authenticate via Google sign-in, Google
								provides an ID credential verifying your email and basic identity to authenticate your session. Use of this
								service is governed by Google’s privacy practices.
							</li>
						</ul>
						<p>
							Beyond authentication, Disciplined AF does not integrate third-party advertising networks, analytics vendors,
							or payment processing brokers.
						</p>
					</article>

					{/* 08. Security & Retention */}
					<article id="security" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">08</span>
							<h2>Data Security &amp; Retention</h2>
						</div>
						<p>
							We apply appropriate technical and organizational safeguards to safeguard your personal data:
						</p>
						<ul>
							<li>
								<strong>Encryption in Transit:</strong> All communications between your web browser and our servers are
								transmitted via encrypted HTTPS / TLS channels.
							</li>
							<li>
								<strong>Credential Protection:</strong> Account passwords are not stored in plaintext; they are salted and
								hashed using cryptographic standards.
							</li>
							<li>
								<strong>Data Retention:</strong> We retain your profile and fitness metrics for as long as your account remains
								active to allow ongoing tracking and historical visualization.
							</li>
						</ul>
					</article>

					{/* 09. User Rights & Deletion */}
					<article id="user-rights" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">09</span>
							<h2>User Rights &amp; Data Deletion</h2>
						</div>
						<p>You have full autonomy over your submitted fitness and personal data:</p>
						<ul>
							<li>
								<strong>Review &amp; Update:</strong> You can edit your measurements, goals, and training preferences at
								any time through the onboarding and profile management screens.
							</li>
							<li>
								<strong>Session Clearing:</strong> You can clear your local session data at any time by signing out, which
								removes the authentication token and profile cache from your browser’s local storage.
							</li>
							<li>
								<strong>Account Deletion:</strong> You have the right to request deletion of your account and all associated
								profile records. Upon request, your account data will be permanently purged from active databases.
							</li>
						</ul>
					</article>

					{/* 10. Children's Privacy */}
					<article id="children" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">10</span>
							<h2>Children’s Privacy</h2>
						</div>
						<p>
							Disciplined AF is intended for adult fitness enthusiasts and is not directed at children under the age of 13
							(or under the age of 16 in jurisdictions with higher thresholds). We do not knowingly collect personal or
							biometric-related data from children. If we become aware that a minor has submitted personal information,
							we will promptly take steps to delete that account.
						</p>
					</article>

					{/* 11. Changes & Support */}
					<article id="updates" className="privacy-card">
						<div className="privacy-card__header">
							<span className="privacy-card__index">11</span>
							<h2>Changes to This Policy &amp; Support</h2>
						</div>
						<p>
							We may update this Privacy Policy from time to time as features and data capabilities evolve. Any updates
							will be reflected on this page along with a revised "Effective Date" timestamp at the top of the document.
						</p>
						<p>
							If you have questions regarding this policy, wish to request account deletion, or require assistance
							regarding your stored data, please contact us through the application’s designated support channels or
							project repository.
						</p>
					</article>
				</div>
			</main>

			{/* Site Footer */}
			<footer className="privacy-footer">
				<div className="privacy-footer__inner">
					<span className="privacy-footer__copyright">
						© Disciplined AF — All Rights Reserved. Physique Intelligence Protocol.
					</span>
					<nav className="privacy-footer__links" aria-label="Footer links">
						<Link to="/" className="privacy-footer__link">Home</Link>
						<Link to="/privacy" className="privacy-footer__link is-active">Privacy Policy</Link>
						<Link to="/terms-and-conditions" className="privacy-footer__link">Terms &amp; Conditions</Link>
					</nav>
				</div>
			</footer>
		</div>
	)
}

export default PrivacyPolicy
