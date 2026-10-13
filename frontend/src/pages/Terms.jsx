import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ShieldAlert } from 'lucide-react'
import SmokeyBackground from '../components/SmokeyBackground.jsx'
import './Terms.css'

const SECTIONS = [
	{ id: 'acceptance', title: 'Acceptance of Terms' },
	{ id: 'eligibility', title: 'Eligibility & Access' },
	{ id: 'account', title: 'Account Registration & Security' },
	{ id: 'user-conduct', title: 'User Responsibilities & Conduct' },
	{ id: 'fitness-disclaimer', title: 'Fitness & Wellness Disclaimer', highlight: true },
	{ id: 'physique-disclaimer', title: 'Digital Physique & 3D Visualizations', highlight: true },
	{ id: 'user-data', title: 'User-Provided Metrics & Data' },
	{ id: 'intellectual-property', title: 'Intellectual Property Rights' },
	{ id: 'third-party', title: 'Third-Party Services & Technologies' },
	{ id: 'service-availability', title: 'Platform Availability & Updates' },
	{ id: 'limitation-of-liability', title: 'Limitation of Liability' },
	{ id: 'termination', title: 'Account Termination & Suspension' },
	{ id: 'modifications', title: 'Modifications to These Terms' },
	{ id: 'contact', title: 'Contact & Support' },
]

function Terms() {
	const navigate = useNavigate()
	const [activeSection, setActiveSection] = useState('acceptance')

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 140
			for (const section of SECTIONS) {
				const element = document.getElementById(section.id)
				if (element) {
					const top = element.offsetTop
					const height = element.offsetHeight
					if (scrollPosition >= top && scrollPosition < top + height) {
						setActiveSection(section.id)
						break
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToSection = (id) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div className="terms-page">
			<SmokeyBackground />
			{/* ─── Header ─────────────────────────────────────────── */}
			<header className="terms-header">
				<div className="terms-header-inner">
					<Link to="/" className="terms-brand" aria-label="Disciplined AF Home">
						<span className="terms-brand-emblem" aria-hidden="true">
							<i /><i /><i />
						</span>
						<span className="terms-brand-copy">
							<span className="terms-brand-title">DISCIPLINED <b>AF</b></span>
							<small className="terms-brand-subtitle">PHYSIQUE LAB</small>
						</span>
					</Link>

					<div className="terms-header-actions">
						<Link to="/" className="terms-back-link">
							<ArrowLeft size={13} aria-hidden="true" />
							<span>BACK TO HOME</span>
						</Link>
						<button
							type="button"
							className="terms-action-login"
							onClick={() => navigate('/login')}
						>
							LOG IN
						</button>
					</div>
				</div>
			</header>

			{/* ─── Document Title & Overview ──────────────────────── */}
			<div className="terms-hero">
				<div className="terms-eyebrow">
					<span className="terms-eyebrow-dot" aria-hidden="true" />
					<span>LEGAL SYSTEM FRAMEWORK // PROTOCOL 01</span>
				</div>
				<h1 className="terms-title">
					TERMS &amp; <span className="terms-title-accent">CONDITIONS</span>
				</h1>
				<div className="terms-meta-strip">
					<span>LAST UPDATED: <b>OCTOBER 2026</b></span>
					<span className="terms-meta-divider" aria-hidden="true">/</span>
					<span>VERSION: <b>1.0</b></span>
					<span className="terms-meta-divider" aria-hidden="true">/</span>
					<span>STATUS: <b>ACTIVE</b></span>
				</div>
				<p className="terms-intro-lead">
					These Terms &amp; Conditions govern your access to and use of the Disciplined AF web application,
					3D digital physique visualization tools, and workout tracking features. Please read these terms carefully
					before utilizing the system.
				</p>
			</div>

			{/* ─── Main Content Grid with Sticky Navigation ───────── */}
			<main className="terms-layout">
				<aside className="terms-sidebar" aria-label="Section Navigation">
					<nav className="terms-nav-sticky">
						<div className="terms-nav-heading">SECTIONS</div>
						<div className="terms-nav-list">
							{SECTIONS.map((section, index) => {
								const num = String(index + 1).padStart(2, '0')
								const isActive = activeSection === section.id
								return (
									<button
										key={section.id}
										type="button"
										className={`terms-nav-item${isActive ? ' is-active' : ''}`}
										onClick={() => scrollToSection(section.id)}
									>
										<span className="terms-nav-num">{num}</span>
										<span>{section.title}</span>
									</button>
								)
							})}
						</div>
					</nav>
				</aside>

				<article className="terms-content">
					{/* 01. Acceptance of Terms */}
					<section className="terms-section" id="acceptance">
						<header className="terms-section-header">
							<span className="terms-section-num">01</span>
							<h2 className="terms-section-title">Acceptance of Terms</h2>
						</header>
						<div className="terms-section-body">
							<p>
								By accessing, registering for, or using Disciplined AF (the &ldquo;Platform,&rdquo; &ldquo;Service,&rdquo; or &ldquo;we&rdquo;),
								you confirm that you have read, understood, and agreed to be legally bound by these Terms &amp; Conditions
								(&ldquo;Terms&rdquo;).
							</p>
							<p>
								If you do not agree with any provision of these Terms, you must immediately discontinue your use of the Platform.
							</p>
						</div>
					</section>

					{/* 02. Eligibility & Access */}
					<section className="terms-section" id="eligibility">
						<header className="terms-section-header">
							<span className="terms-section-num">02</span>
							<h2 className="terms-section-title">Eligibility &amp; Access</h2>
						</header>
						<div className="terms-section-body">
							<p>
								To register for an account and access the Platform, you must be at least 18 years of age or the age of majority
								in your jurisdiction, and legally capable of entering into binding agreements.
							</p>
							<p>
								By creating an account, you represent and warrant that your registration information is true, accurate,
								and complete, and that your use of the Service does not violate any applicable local, national, or international law.
							</p>
						</div>
					</section>

					{/* 03. Account Registration & Security */}
					<section className="terms-section" id="account">
						<header className="terms-section-header">
							<span className="terms-section-num">03</span>
							<h2 className="terms-section-title">Account Registration &amp; Security</h2>
						</header>
						<div className="terms-section-body">
							<p>
								Access to personalized fitness metrics, profile configuration, and 3D physique tracking requires account registration.
								You may register directly using an email and password or via supported third-party single sign-on providers.
							</p>
							<ul>
								<li>
									<strong>Credential Confidentiality:</strong> You are solely responsible for maintaining the confidentiality of your login credentials and for restricting unauthorized access to your devices.
								</li>
								<li>
									<strong>Account Responsibility:</strong> You accept full responsibility for all activities and data submissions that occur under your registered account.
								</li>
								<li>
									<strong>Unauthorized Use:</strong> You agree to notify Disciplined AF immediately if you discover or suspect any unauthorized use or security breach related to your account.
								</li>
							</ul>
						</div>
					</section>

					{/* 04. User Responsibilities & Conduct */}
					<section className="terms-section" id="user-conduct">
						<header className="terms-section-header">
							<span className="terms-section-num">04</span>
							<h2 className="terms-section-title">User Responsibilities &amp; Acceptable Use</h2>
						</header>
						<div className="terms-section-body">
							<p>
								Disciplined AF is provided for individual, non-commercial personal fitness and physique tracking. When utilizing the Platform, you agree not to:
							</p>
							<ul>
								<li>Interfere with, disrupt, or compromise the integrity or security of the Platform, servers, or underlying networks.</li>
								<li>Decompile, reverse-engineer, scrape, or extract 3D mesh assets, custom shaders, or proprietary rendering scripts without explicit written permission.</li>
								<li>Use automated bots, spiders, or scripts to access or extract system data.</li>
								<li>Impersonate any person or provide intentionally deceptive biometric or profile data.</li>
								<li>Use the Service for any unlawful, harassing, or harmful objective.</li>
							</ul>
						</div>
					</section>

					{/* 05. Fitness & Wellness Disclaimer (CRITICAL) */}
					<section className="terms-section terms-section-highlight" id="fitness-disclaimer">
						<header className="terms-section-header">
							<span className="terms-section-num">05</span>
							<h2 className="terms-section-title">Fitness &amp; Wellness Disclaimer</h2>
						</header>
						<div className="terms-section-body">
							<div className="terms-alert-banner">
								<ShieldAlert size={18} className="terms-alert-icon" aria-hidden="true" />
								<span>
									<strong>IMPORTANT MEDICAL NOTICE:</strong> Disciplined AF is an informational fitness and workout tracking utility. It is NOT a medical device, medical service, or healthcare provider.
								</span>
							</div>
							<p>
								<strong>Not Medical or Health Advice:</strong> Content, workout logs, body measurements, target calculations, and analytics presented on the Platform do not constitute medical, nutritional, or physiological advice, diagnosis, or treatment.
							</p>
							<p>
								<strong>Physician Consultation:</strong> You should always consult with a qualified physician or licensed healthcare provider before beginning any exercise routine, weight training program, or physical conditioning regimen, especially if you have pre-existing cardiovascular, musculoskeletal, or metabolic conditions.
							</p>
							<p>
								<strong>Assumption of Inherent Risk:</strong> Physical exercise and strength training carry inherent risks of personal injury or strain. You acknowledge and voluntarily assume all risks associated with your training decisions and workout routines.
							</p>
						</div>
					</section>

					{/* 06. Digital Physique & 3D Visualization Disclaimer */}
					<section className="terms-section terms-section-highlight" id="physique-disclaimer">
						<header className="terms-section-header">
							<span className="terms-section-num">06</span>
							<h2 className="terms-section-title">Digital Physique &amp; 3D Visualizations</h2>
						</header>
						<div className="terms-section-body">
							<p>
								The interactive 3D digital physique, muscle highlight maps, and morph-target deformations rendered on Disciplined AF are simulated visual representations generated from self-reported user parameters (such as height, body fat estimates, and workout volumes).
							</p>
							<ul>
								<li>
									<strong>Approximation Only:</strong> 3D models and muscle highlight overlays are graphical estimations and artistic representations. They do not represent medical-grade body composition analyses (e.g., DEXA scans, hydrostatic weighing, or MRI scans).
								</li>
								<li>
									<strong>No Anatomical Diagnosis:</strong> Visual representations are not intended to diagnose muscle imbalances, posture disorders, or physical abnormalities.
								</li>
								<li>
									<strong>Variance in Actual Results:</strong> Individual human anatomical variation means actual physical development, body fat distribution, and muscular hypertrophy will vary significantly from digital renders.
								</li>
							</ul>
						</div>
					</section>

					{/* 07. User-Provided Metrics & Data */}
					<section className="terms-section" id="user-data">
						<header className="terms-section-header">
							<span className="terms-section-num">07</span>
							<h2 className="terms-section-title">User-Provided Metrics &amp; Data</h2>
						</header>
						<div className="terms-section-body">
							<p>
								You retain full ownership of the personal fitness metrics, body measurements, training logs, and profile attributes that you submit to the Platform.
							</p>
							<p>
								By submitting metric data, you grant Disciplined AF a non-exclusive, worldwide, royalty-free license to store, process, format, and display your information solely for the purpose of delivering, rendering, and enhancing your personalized platform experience.
							</p>
						</div>
					</section>

					{/* 08. Intellectual Property Rights */}
					<section className="terms-section" id="intellectual-property">
						<header className="terms-section-header">
							<span className="terms-section-num">08</span>
							<h2 className="terms-section-title">Intellectual Property Rights</h2>
						</header>
						<div className="terms-section-body">
							<p>
								All trademarks, brand emblems, custom 3D physique models, shaders, software code, user interface designs, visual layouts, and written text on the Platform are the exclusive intellectual property of Disciplined AF and its licensors.
							</p>
							<p>
								Except for the personal, non-exclusive, non-transferable, and revocable right to access and use the Platform in accordance with these Terms, no license or ownership right is granted to you.
							</p>
						</div>
					</section>

					{/* 09. Third-Party Services & Technologies */}
					<section className="terms-section" id="third-party">
						<header className="terms-section-header">
							<span className="terms-section-num">09</span>
							<h2 className="terms-section-title">Third-Party Services &amp; Technologies</h2>
						</header>
						<div className="terms-section-body">
							<p>
								The Platform utilizes standard web technologies (including WebGL and Three.js for 3D graphic rendering) and may offer integration with third-party authentication providers (such as Google OAuth).
							</p>
							<p>
								Your interaction with third-party authentication services is subject to their respective terms and privacy policies. Disciplined AF is not responsible for the availability, security, or practices of external third-party providers.
							</p>
						</div>
					</section>

					{/* 10. Platform Availability & Updates */}
					<section className="terms-section" id="service-availability">
						<header className="terms-section-header">
							<span className="terms-section-num">10</span>
							<h2 className="terms-section-title">Platform Availability &amp; Updates</h2>
						</header>
						<div className="terms-section-body">
							<p>
								Disciplined AF provides its services and visualization tools on an &ldquo;as available&rdquo; basis. We reserve the right to modify, enhance, update, or temporarily suspend features, tools, or interface components at our discretion to conduct maintenance, performance optimizations, or system upgrades.
							</p>
							<p>
								Core platform access is currently provided as described. Any future supplemental features or specialized service tiers will be subject to applicable terms presented at that time.
							</p>
						</div>
					</section>

					{/* 11. Limitation of Liability */}
					<section className="terms-section" id="limitation-of-liability">
						<header className="terms-section-header">
							<span className="terms-section-num">11</span>
							<h2 className="terms-section-title">Limitation of Liability</h2>
						</header>
						<div className="terms-section-body">
							<p>
								TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE PLATFORM AND ALL CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR ACCURACY.
							</p>
							<p>
								IN NO EVENT SHALL DISCIPLINED AF, ITS OPERATORS, OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, OR FOR ANY INJURY, PHYSICAL STRAIN, HEALTH COMPLICATION, LOSS OF DATA, OR SERVICE INTERRUPTION ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM.
							</p>
						</div>
					</section>

					{/* 12. Account Termination & Suspension */}
					<section className="terms-section" id="termination">
						<header className="terms-section-header">
							<span className="terms-section-num">12</span>
							<h2 className="terms-section-title">Account Termination &amp; Suspension</h2>
						</header>
						<div className="terms-section-body">
							<p>
								We reserve the right to suspend or terminate your account and revoke your access to the Service at any time, with or without notice, in the event of any violation of these Terms, suspected security risks, or misuse of the Platform.
							</p>
							<p>
								You may cease using the Platform and request account deletion at any time through available platform settings or support contact mechanisms.
							</p>
						</div>
					</section>

					{/* 13. Modifications to These Terms */}
					<section className="terms-section" id="modifications">
						<header className="terms-section-header">
							<span className="terms-section-num">13</span>
							<h2 className="terms-section-title">Modifications to These Terms</h2>
						</header>
						<div className="terms-section-body">
							<p>
								We may update or revise these Terms &amp; Conditions periodically to reflect feature additions, technical changes, or legal updates. When changes are made, the revised version will be published directly to this page with an updated &ldquo;Last Updated&rdquo; date.
							</p>
							<p>
								Your continued use of Disciplined AF following the posting of updated Terms confirms your acceptance of the revised terms.
							</p>
						</div>
					</section>

					{/* 14. Contact & Support */}
					<section className="terms-section" id="contact">
						<header className="terms-section-header">
							<span className="terms-section-num">14</span>
							<h2 className="terms-section-title">Contact &amp; Inquiries</h2>
						</header>
						<div className="terms-section-body">
							<p>
								If you have questions, feedback, or legal inquiries regarding these Terms &amp; Conditions, please submit your inquiry through the support channels provided in your account dashboard and settings interface.
							</p>
						</div>
					</section>
				</article>
			</main>

			{/* ─── Footer ─────────────────────────────────────────── */}
			<footer className="terms-footer">
				<div className="terms-footer-inner">
					<div className="terms-capability-strip">
						<div className="terms-cap-item">
							<span className="terms-cap-symbol terms-cap-body" aria-hidden="true" />
							<div className="terms-cap-copy">
								<b>3D BODY MAPPING</b>
								<small>360° visual physique tracking</small>
							</div>
						</div>
						<div className="terms-cap-item">
							<span className="terms-cap-symbol terms-cap-progress" aria-hidden="true" />
							<div className="terms-cap-copy">
								<b>PROGRESS ANALYTICS</b>
								<small>Training, composition &amp; change</small>
							</div>
						</div>
						<div className="terms-cap-item">
							<span className="terms-cap-symbol terms-cap-plan" aria-hidden="true" />
							<div className="terms-cap-copy">
								<b>PERSONALIZED PLANS</b>
								<small>Built around your performance</small>
							</div>
						</div>
					</div>

					<div className="terms-footer-bottom">
						<span>&copy; Disciplined AF &mdash; All Rights Reserved</span>
						<nav className="terms-footer-legal-links" aria-label="Footer legal navigation">
							<Link to="/privacy-policy">PRIVACY POLICY</Link>
							<Link to="/terms">TERMS &amp; CONDITIONS</Link>
						</nav>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Terms
