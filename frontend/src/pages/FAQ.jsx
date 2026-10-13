import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SmokeyBackground from '../components/SmokeyBackground.jsx'
import './LandingExperience.css'
import './FAQ.css'

const FAQ_DATA = [
	{
		category: 'PRODUCT',
		items: [
			{
				q: 'What is Disciplined AF?',
				a: 'Disciplined AF is a premium fitness intelligence system that visualizes your real body as an evolving 3D model, allowing you to track progress, monitor body composition, and train with precision.',
			},
			{
				q: 'Do I need an account?',
				a: 'Yes, an account is required to securely store your digital physique, training data, and progress history across sessions.',
			},
			{
				q: 'Is Disciplined AF medical advice?',
				a: 'No, Disciplined AF is a visualization and tracking tool. It is not intended to diagnose, treat, cure, or prevent any disease, and should not substitute for professional medical advice.',
			},
		],
	},
	{
		category: 'DIGITAL PHYSIQUE',
		items: [
			{
				q: 'How does the Digital Physique work?',
				a: 'The system maps your inputted measurements and data to a dynamic 3D rig. As your metrics change, the digital model morphs to accurately reflect your current body composition and muscular development.',
			},
			{
				q: 'Does the Digital Physique exactly represent my real body?',
				a: 'The digital physique is a high-fidelity approximation based on your provided measurements and body fat data, designed to highlight regional muscle development and overall structural changes.',
			},
			{
				q: 'Can my Digital Physique change over time?',
				a: 'Yes, the core purpose of the system is to provide a living, breathing visualization of your progress. Your model adapts as you update your measurements.',
			},
		],
	},
	{
		category: 'TRACKING',
		items: [
			{
				q: 'What does Track Today do?',
				a: 'Track Today is your daily command center for logging measurements, current body weight, and body fat percentage to keep your digital physique accurately synchronized with reality.',
			},
			{
				q: 'What can I track?',
				a: 'You can track your height, weight, body fat percentage, and specific body measurements like shoulder, chest, and waist width.',
			},
			{
				q: 'How is BMI calculated?',
				a: 'BMI (Body Mass Index) is automatically calculated using your provided height and weight metrics based on standard medical formulas.',
			},
			{
				q: 'How is estimated body fat calculated?',
				a: 'Body fat estimation uses a combination of your baseline inputs, measurements, and tracked changes, though you can manually override it with actual DEXA or caliper readings for maximum accuracy.',
			},
			{
				q: 'How does progress tracking work?',
				a: 'The system maintains a chronological log of all your logged measurements, allowing you to view historical data and observe the evolution of your digital physique over time.',
			},
		],
	},
	{
		category: 'DATA & PRIVACY',
		items: [
			{
				q: 'What information do I provide during onboarding?',
				a: 'During onboarding, you will provide your baseline physical metrics (height, weight), starting body fat percentage, primary fitness goals, and training experience level to calibrate your initial digital physique.',
			},
			{
				q: 'Can I delete my account/data?',
				a: 'Yes, you maintain full sovereignty over your data. You can delete your account and all associated physical telemetry at any time from the settings interface.',
			},
		],
	},
	{
		category: 'FITNESS',
		items: [
			{
				q: 'Can I track workouts?',
				a: 'Currently, Disciplined AF focuses on physique tracking and visualization. Comprehensive workout tracking protocols are slated for future deployment.',
				future: true,
			},
			{
				q: 'Can I track calories and protein?',
				a: 'Nutritional telemetry, including calorie and macronutrient tracking, is planned for an upcoming system update to provide a complete picture of your fitness regimen.',
				future: true,
			},
			{
				q: 'Can I track sleep, water and steps?',
				a: 'Lifestyle integrations for sleep, hydration, and step counting are currently in development as part of our holistic analysis suite.',
				future: true,
			},
			{
				q: 'What are Personalized Insights?',
				a: 'Our intelligence system will soon analyze your progress data to provide actionable, personalized insights, identifying trailing muscle groups and suggesting protocol adjustments.',
				future: true,
			},
		],
	},
]

function FAQ() {
	const navigate = useNavigate()
	const [menuOpen, setMenuOpen] = useState(false)
	const [openItems, setOpenItems] = useState({})

	const toggleItem = (categoryId, itemIndex) => {
		const key = `${categoryId}-${itemIndex}`
		setOpenItems((prev) => ({
			...prev,
			[key]: !prev[key],
		}))
	}

	return (
		<div className="faq-container">
			<SmokeyBackground />
			{/* Shared Public Header */}
			<header className={`landing-header${menuOpen ? ' is-menu-open' : ''}`}>
				<div className="header-sys-rail" aria-hidden="true">
					<span className="sys-rail-id">SYS // DAF-LAB-001</span>
					<span className="sys-rail-sep" />
					<span className="sys-rail-status">
						<i className="sys-rail-led" />
						OPERATIONAL
					</span>
					<span className="sys-rail-right">PHYSIQUE INTELLIGENCE SYSTEM v2.0</span>
				</div>

				<div className="header-inner">
					<Link className="landing-brand" to="/" aria-label="Disciplined AF home">
						<span className="brand-emblem" aria-hidden="true"><i /><i /><i /></span>
						<span className="brand-text">
							DISCIPLINED <b>AF</b>
							<small>PHYSIQUE INTELLIGENCE</small>
						</span>
					</Link>

					<span className="header-crosshair" aria-hidden="true" />

					<button
						className="nav-menu-toggle"
						type="button"
						aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
						aria-expanded={menuOpen}
						aria-controls="landing-navigation"
						onClick={() => setMenuOpen((open) => !open)}
					>
						<span /><span />
					</button>

					<nav
						className={`landing-nav${menuOpen ? ' is-open' : ''}`}
						id="landing-navigation"
						aria-label="Main navigation"
						onClick={() => setMenuOpen(false)}
					>
						<button type="button" onClick={() => navigate('/')}>
							<span className="nav-item-index" aria-hidden="true">01</span>
							<span className="nav-item-label">LAB OVERVIEW</span>
							<span className="nav-item-bar" aria-hidden="true" />
						</button>
						<button type="button" onClick={() => navigate('/analysis')}>
							<span className="nav-item-index" aria-hidden="true">02</span>
							<span className="nav-item-label">ANALYSIS SCAN</span>
							<span className="nav-item-bar" aria-hidden="true" />
						</button>
						<button type="button" onClick={() => navigate('/features')}>
							<span className="nav-item-index" aria-hidden="true">03</span>
							<span className="nav-item-label">FEATURES</span>
							<span className="nav-item-bar" aria-hidden="true" />
						</button>
						<button type="button" onClick={() => navigate('/preview')}>
							<span className="nav-item-index" aria-hidden="true">04</span>
							<span className="nav-item-label">PREVIEW</span>
							<span className="nav-item-bar" aria-hidden="true" />
						</button>
						<button type="button" aria-pressed="true" onClick={() => navigate('/faq')}>
							<span className="nav-item-index" aria-hidden="true">05</span>
							<span className="nav-item-label">FAQ</span>
							<span className="nav-item-bar" aria-hidden="true" />
						</button>
						<button type="button" onClick={() => navigate('/about')}>
							<span className="nav-item-index" aria-hidden="true">06</span>
							<span className="nav-item-label">ABOUT</span>
							<span className="nav-item-bar" aria-hidden="true" />
						</button>
					</nav>

					<div className="header-cta-group">
						<button className="header-enter" type="button" onClick={() => navigate('/login')}>
							<span className="header-enter-label">LOG IN</span>
							<span className="header-enter-arrow" aria-hidden="true">→</span>
						</button>
						<button className="header-enter-system" type="button" onClick={() => navigate('/signup')}>
							<span className="header-enter-system-prefix" aria-hidden="true">⬡</span>
							<span className="header-enter-system-label">SIGN UP</span>
							<span className="header-enter-system-arrow" aria-hidden="true">↗</span>
						</button>
					</div>
				</div>
			</header>

			<main className="faq-content">
				<div className="faq-hero">
					<div className="faq-eyebrow">SYSTEM KNOWLEDGEBASE</div>
					<h1 className="faq-title">FAQ</h1>
					<p className="faq-subtitle">Everything you need to know about the system.</p>
				</div>

				<div className="faq-system">
					{FAQ_DATA.map((category, catIndex) => (
						<div key={category.category} className="faq-category">
							<div className="faq-category-header">
								<span className="faq-category-title">{category.category}</span>
								<div className="faq-category-line" />
							</div>
							
							<div className="faq-category-items">
								{category.items.map((item, itemIndex) => {
									const isOpen = !!openItems[`${catIndex}-${itemIndex}`]
									return (
										<div key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
											<button
												type="button"
												className="faq-question"
												onClick={() => toggleItem(catIndex, itemIndex)}
												aria-expanded={isOpen}
											>
												<span>{item.q}</span>
												<span className="faq-indicator" aria-hidden="true" />
											</button>
											<div
												className="faq-answer-wrapper"
												aria-hidden={!isOpen}
											>
												<div className="faq-answer-inner">
													<div className="faq-answer">
														{item.future && (
															<span className="faq-future-badge">FUTURE DEPLOYMENT</span>
														)}
														<p>{item.a}</p>
													</div>
												</div>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					))}
				</div>

				<div className="faq-footer">
					<p>Ready to start?</p>
					<button className="header-enter-system" type="button" onClick={() => navigate('/signup')} style={{ height: '44px', padding: '0 24px' }}>
						<span className="header-enter-system-prefix" aria-hidden="true">⬡</span>
						<span className="header-enter-system-label">CREATE ACCOUNT</span>
						<span className="header-enter-system-arrow" aria-hidden="true">↗</span>
					</button>
				</div>
			</main>
		</div>
	)
}

export default FAQ
