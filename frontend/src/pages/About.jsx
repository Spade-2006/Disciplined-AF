import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import femaleModelImg from '../assets/Pages png/female_physique_model.jpg'
import maleModelImg from '../assets/Pages png/male_physique_model.jpg'
import anatomyModelImg from '../assets/Pages png/Profile page.png'
import labChamberImg from '../assets/Pages png/ChatGPT Image Sep 27, 2026, 12_44_29 AM.png'
import SmokeyBackground from '../components/SmokeyBackground.jsx'
import './LandingExperience.css' // Reuses header system styling
import './About.css'

// Calibrated reference model presets with exact dimensional telemetry
const MODEL_PRESETS = [
	{
		id: 'male',
		label: 'MALE ATHLETIC',
		code: 'CALIBRATION // M-01',
		image: maleModelImg,
		metrics: {
			height: '182 CM',
			weight: '82.0 KG',
			bodyFat: '14.2%',
			classification: 'ATHLETIC HYPERTROPHY',
		},
		caption: 'Calibrated male athletic template showing compound muscular density and baseline symmetry.',
	},
	{
		id: 'female',
		label: 'FEMALE TONED',
		code: 'CALIBRATION // F-01',
		image: femaleModelImg,
		metrics: {
			height: '168 CM',
			weight: '60.0 KG',
			bodyFat: '20.5%',
			classification: 'ATHLETIC CONDITIONING',
		},
		caption: 'Calibrated female athletic template showing balanced kinetic development and lean tissue ratio.',
	},
	{
		id: 'anatomy',
		label: 'ANATOMICAL MAP',
		code: 'DIAGNOSTIC // A-01',
		image: anatomyModelImg,
		metrics: {
			height: '181 CM',
			weight: '77.6 KG',
			bodyFat: '13.0%',
			classification: 'REGIONAL MUSCLE MAP',
		},
		caption: 'High-density musculoskeletal diagnostic map with regional telemetry and activation guides.',
	},
	{
		id: 'chamber',
		label: 'LAB OVERVIEW',
		code: 'ENVIRONMENT // LAB-01',
		image: labChamberImg,
		metrics: {
			height: 'WIDE FIELD',
			weight: 'CIRCULAR PLATFORM',
			bodyFat: 'NEON HARNESS',
			classification: 'FACILITY VIEW',
		},
		caption: 'Cinematic laboratory facility showing the physical scanner ring and ambient neon containment.',
	},
]

const SCATTERED_METRICS = [
	{
		name: 'WORKOUTS',
		silo: 'Notes apps & spreadsheets',
		fate: 'Disconnected set volume without anatomical correlation.',
	},
	{
		name: 'NUTRITION',
		silo: 'Third-party calorie trackers',
		fate: 'Tedious input logs isolated from your training fatigue.',
	},
	{
		name: 'BODY WEIGHT',
		silo: 'Bluetooth scale apps',
		fate: 'Fluctuating numbers that fail to explain lean mass vs. water.',
	},
	{
		name: 'SLEEP & RECOVERY',
		silo: 'Wearable subscriptions',
		fate: 'Passive metrics locked behind external paywalls.',
	},
	{
		name: 'DAILY STEPS',
		silo: 'Native smartphone sensors',
		fate: 'Isolated expenditure data never tied to body composition.',
	},
	{
		name: 'PROGRESS PHOTOS',
		silo: 'Camera roll albums',
		fate: 'Subjective snapshots distorted by inconsistent lighting.',
	},
]

const SYSTEM_PILLARS = [
	{
		code: 'SYS-01',
		question: 'WHAT DO I DO TODAY?',
		subtitle: 'DAILY ACTIONS & FOCUSED TRACKING',
		narrative:
			'Eliminate friction and decision fatigue. When you open the system, you see your clear mandate for the day: workouts, nutritional targets, and recovery habits ready for direct execution.',
		footnote: 'MANDATE // ZERO GUESSWORK. COMPLETE OPERATIONAL CLARITY.',
	},
	{
		code: 'SYS-02',
		question: 'AM I IMPROVING?',
		subtitle: 'PROGRESS METRICS & AUDIT VELOCITY',
		narrative:
			'Feelings lie and changing mirror lighting is deceptive. Cold historical data does not. The system audits your consistency over time, tracking your rate of physical adaptation.',
		footnote: 'AUDIT // PROGRESSIVE OVERLOAD & COMPOSITION TRENDS.',
	},
	{
		code: 'SYS-03',
		question: 'WHAT IS HAPPENING TO MY BODY?',
		subtitle: 'THE DIGITAL PHYSIQUE ENGINE',
		narrative:
			'The ultimate visual feedback loop. Instead of guessing in front of a mirror, your verified physical measurements drive an evolving anatomical model that morphs as you adapt.',
		footnote: 'RENDER // MORPHOMETRIC ANATOMICAL REFLECTION.',
		featured: true,
		showPreview: true,
	},
]

const CONSISTENCY_DOCTRINE = [
	{
		num: '01',
		title: 'DAILY TRACKING',
		desc: 'What gets measured gets mastered. Daily inputs remove emotion and guesswork from your physical evaluation.',
	},
	{
		num: '02',
		title: 'WORKOUTS',
		desc: 'The mechanical stimulus. Progressive tension signals the neuromuscular adaptations required for muscle hypertrophy.',
	},
	{
		num: '03',
		title: 'NUTRITION',
		desc: 'The structural fuel. Precision energy balance and macronutrient intake supply the exact materials to rebuild tissue.',
	},
	{
		num: '04',
		title: 'RECOVERY',
		desc: 'The consolidation window. Sleep and central nervous system downtime where systemic repair and adaptation occur.',
	},
	{
		num: '05',
		title: 'STREAKS',
		desc: 'The personal contract. Not a gamified toy, but an unbroken audit of your willingness to execute when motivation fades.',
	},
	{
		num: '06',
		title: 'PROGRESS',
		desc: 'The lagging indicator. Transformation is the cumulative mathematical outcome of discipline maintained across months.',
	},
]

const VISION_PHASES = [
	{
		timeframe: 'DAY 1 — BASELINE',
		title: 'CALIBRATION',
		desc: 'Your starting physical metrics, body measurements, and initial digital physique are mapped into a high-fidelity visual model.',
	},
	{
		timeframe: 'MONTH 3 — MOMENTUM',
		title: 'BEHAVIORAL SYNC',
		desc: 'Persistent daily logging reveals true behavioral patterns, volume velocity, and early morphological changes in body fat and muscle.',
	},
	{
		timeframe: 'YEAR 1+ — ARCHIVE',
		title: 'LONGITUDINAL MASTERY',
		desc: 'A permanent, intelligent record of your physical evolution, reflecting seasonal training cycles, progressive adaptations, and lifelong consistency.',
	},
]

function About() {
	const navigate = useNavigate()
	const [menuOpen, setMenuOpen] = useState(false)
	const [selectedModelId, setSelectedModelId] = useState('male')

	const activeModel = MODEL_PRESETS.find((m) => m.id === selectedModelId) || MODEL_PRESETS[0]

	return (
		<div className="about-page">
			{/* Fluid WebGL Smoky Background (Matching Login & SignUp) */}
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
						<button type="button" onClick={() => navigate('/faq')}>
							<span className="nav-item-index" aria-hidden="true">05</span>
							<span className="nav-item-label">FAQ</span>
							<span className="nav-item-bar" aria-hidden="true" />
						</button>
						<button type="button" aria-pressed="true" onClick={() => navigate('/about')}>
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

			<main className="about-main">
				{/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
				<section className="about-hero" aria-labelledby="about-hero-title">
					<div className="section-meta-tag">
						<i className="tag-pip" />
						<span>MANIFESTO // SYSTEM CODEX 01</span>
						<span className="tag-rule" />
						<span>DAF-CORE-DOC</span>
					</div>

					<div className="about-hero-grid">
						<div className="about-hero-editorial">
							<h1 id="about-hero-title" className="about-hero-headline">
								<span>DISCIPLINE,</span>
								<span className="headline-accent">VISUALIZED<span className="headline-red">.</span></span>
							</h1>
							<p className="about-hero-lead">
								<b>Disciplined AF</b> is a unified fitness intelligence system designed to turn raw daily effort into an evolving, visual reality. We bring scattered workouts, nutrition, body measurements, and habit tracking into a single operating environment anchored by your personalized <b>Digital Physique</b>.
							</p>

							<div className="hero-scroll-cue" aria-hidden="true">
								<span className="cue-line" />
								<span>SCROLL TO EXPLORE THE SYSTEM ARCHITECTURE</span>
							</div>
						</div>

						{/* Right Rail: Visual Model Showcase & Architecture */}
						<aside className="hero-telemetry-rail" aria-label="System Specifications">
							<div className="telemetry-rail-header">
								<span>ARCHITECTURAL CODEX</span>
								<span className="live-status"><i />LIVE NODE</span>
							</div>

							{/* Hero Rendered Model Preview Frame */}
							<div className="hero-model-preview-chassis" aria-hidden="true">
								<img
									src={maleModelImg}
									alt="Calibrated male digital physique preview"
									className="hero-model-preview-img"
								/>
								<div className="hero-model-scanline" />
							</div>

							<div className="telemetry-row">
								<span className="telemetry-label">CORE DOCTRINE</span>
								<span className="telemetry-val">CONTINUOUS PHYSICAL AUDIT</span>
							</div>
							<div className="telemetry-row">
								<span className="telemetry-label">FEEDBACK LOOP</span>
								<span className="telemetry-val highlight">DAILY EFFORT → DIGITAL RENDER</span>
							</div>
							<div className="telemetry-row">
								<span className="telemetry-label">PRIMARY ASSET</span>
								<span className="telemetry-val">THE DIGITAL PHYSIQUE</span>
							</div>
						</aside>
					</div>
				</section>

				{/* ─── 2. THE PROBLEM SECTION ─────────────────────────────────────── */}
				<section className="about-problem" aria-labelledby="problem-heading">
					<div className="section-meta-tag">
						<i className="tag-pip" />
						<span>01 // THE CORE FRICTION</span>
						<span className="tag-rule" />
						<span>FRAGMENTATION VS. SYNTHESIS</span>
					</div>

					<h2 id="problem-heading" className="about-section-heading">
						THE SCATTERED REALITY OF FITNESS TRACKING
					</h2>
					<p className="about-section-desc">
						Fitness tracking is often broken not by lack of willpower, but by fragmentation. When your physical metrics are isolated in different apps and camera rolls, effort feels disconnected from visual results.
					</p>

					<div className="problem-editorial-layout">
						{/* Left: Scattered Ecosystem */}
						<div className="fragmented-column">
							<div className="column-header-block">
								<span className="column-title">SCATTERED DATA SILOS</span>
								<span className="column-status-badge">STATUS: FRAGMENTED</span>
							</div>

							<div className="scatter-grid">
								{SCATTERED_METRICS.map((metric) => (
									<div key={metric.name} className="scatter-card">
										<div className="scatter-metric-name">
											<span>{metric.name}</span>
											<span className="scatter-fracture-tag">{metric.silo}</span>
										</div>
										<p className="scatter-fate">{metric.fate}</p>
									</div>
								))}
							</div>

							<div className="fragmented-footer-note">
								FRICTION // EFFORT LOGGED IN ISOLATION FAILS TO FORM A COHERENT PICTURE.
							</div>
						</div>

						{/* Right: Unified System */}
						<div className="unified-column">
							<div className="column-header-block">
								<span className="column-title">THE UNIFIED OPERATING SYSTEM</span>
								<span className="column-status-badge">DISCIPLINED AF</span>
							</div>

							<p className="unified-statement">
								Disciplined AF brings that information into <b>one coherent system</b>. Every workout set, nutritional intake, body weight entry, and tape measurement connects to a central feedback loop.
							</p>

							<div className="unified-flow-diagram">
								<div className="flow-step-node">
									<span className="flow-node-index">INPUT 01</span>
									<div className="flow-node-detail">
										<span className="flow-node-title">DAILY LOGGING &amp; HABITS</span>
										<span className="flow-node-desc">Workouts, body metrics, macronutrients, and active streaks.</span>
									</div>
								</div>

								<div className="flow-arrow-connector" aria-hidden="true">
									↓ CONVERGES INTO
								</div>

								<div className="flow-step-node">
									<span className="flow-node-index">ANALYSIS 02</span>
									<div className="flow-node-detail">
										<span className="flow-node-title">PROGRESS AUDIT ENGINE</span>
										<span className="flow-node-desc">Longitudinal tracking of body composition and strength trends.</span>
									</div>
								</div>

								<div className="flow-arrow-connector" aria-hidden="true">
									↓ VISUALIZES ONTO
								</div>

								<div className="flow-step-node">
									<span className="flow-node-index">OUTPUT 03</span>
									<div className="flow-node-detail">
										<span className="flow-node-title">DIGITAL PHYSIQUE</span>
										<span className="flow-node-desc">A dynamic visual representation showing real anatomical adaptation.</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ─── 3. THE SYSTEM (THREE CORE QUESTIONS) ───────────────────────── */}
				<section className="about-system" aria-labelledby="system-heading">
					<div className="section-meta-tag">
						<i className="tag-pip" />
						<span>02 // THE THREE QUESTIONS</span>
						<span className="tag-rule" />
						<span>CORE ARCHITECTURE</span>
					</div>

					<h2 id="system-heading" className="about-section-heading">
						A SYSTEM BUILT AROUND THREE FUNDAMENTAL QUESTIONS
					</h2>
					<p className="about-section-desc">
						You do not need endless social feeds or vanity badges. Every serious fitness journey requires clarity on three operational questions:
					</p>

					<div className="pillars-grid">
						{SYSTEM_PILLARS.map((pillar) => (
							<article
								key={pillar.code}
								className={`pillar-monolith${pillar.featured ? ' pillar-featured' : ''}`}
							>
								<div className="pillar-top-rail">
									<span className="pillar-code">{pillar.code}</span>
									<i className="pillar-indicator" />
								</div>
								<h3 className="pillar-question">{pillar.question}</h3>
								<div className="pillar-subtitle">{pillar.subtitle}</div>

								{/* Embedded Model Render in Pillar 03 */}
								{pillar.showPreview && (
									<div className="pillar-model-preview" aria-hidden="true">
										<img
											src={anatomyModelImg}
											alt="Anatomical muscle mapping preview"
											className="pillar-model-preview-img"
										/>
									</div>
								)}

								<p className="pillar-narrative">{pillar.narrative}</p>
								<div className="pillar-footnote">{pillar.footnote}</div>
							</article>
						))}
					</div>
				</section>

				{/* ─── 4. DIGITAL PHYSIQUE (INTERACTIVE MODEL CHAMBER) ─────────────── */}
				<section className="about-physique-section" aria-labelledby="physique-heading">
					<div className="section-meta-tag">
						<i className="tag-pip" />
						<span>03 // THE DIGITAL PHYSIQUE</span>
						<span className="tag-rule" />
						<span>ANATOMICAL VISUALIZATION</span>
					</div>

					<div className="physique-feature-grid">
						{/* Model Chamber Inspection Frame (Sized Visual Renders) */}
						<div className="about-stage-wrapper">
							<div className="about-stage-topbar">
								<span className="stage-topbar-code">
									<i className="code-pip" />
									{activeModel.code}
								</span>
								<div className="stage-topbar-controls">
									{MODEL_PRESETS.map((preset) => (
										<button
											key={preset.id}
											type="button"
											className={`stage-toggle-btn${selectedModelId === preset.id ? ' is-active' : ''}`}
											onClick={() => setSelectedModelId(preset.id)}
										>
											{preset.label}
										</button>
									))}
								</div>
							</div>

							<div className="about-stage-viewport">
								{/* Hardware Brackets */}
								<span className="chamber-bracket chamber-bracket-tl" aria-hidden="true" />
								<span className="chamber-bracket chamber-bracket-tr" aria-hidden="true" />
								<span className="chamber-bracket chamber-bracket-bl" aria-hidden="true" />
								<span className="chamber-bracket chamber-bracket-br" aria-hidden="true" />

								{/* Animated Scanner Laser */}
								<div className="chamber-scanner-laser" aria-hidden="true" />

								{/* Pedestal Glow */}
								<div className="chamber-pedestal-glow" aria-hidden="true" />

								{/* Telemetry Overlay Badge */}
								<div className="chamber-overlay-badge" aria-hidden="true">
									<span>TARGET: <b>{activeModel.label}</b></span>
								</div>

								{/* Sized Model Render */}
								<img
									src={activeModel.image}
									alt={`${activeModel.label} physique visualization`}
									className="chamber-model-render"
								/>
							</div>

							{/* Active Model Metrics Strip */}
							<div className="chamber-metrics-strip">
								<div className="metric-strip-cell">
									<span className="metric-strip-label">HEIGHT</span>
									<span className="metric-strip-val">{activeModel.metrics.height}</span>
								</div>
								<div className="metric-strip-cell">
									<span className="metric-strip-label">BODY WEIGHT</span>
									<span className="metric-strip-val">{activeModel.metrics.weight}</span>
								</div>
								<div className="metric-strip-cell">
									<span className="metric-strip-label">EST. BODY FAT</span>
									<span className="metric-strip-val accent">{activeModel.metrics.bodyFat}</span>
								</div>
								<div className="metric-strip-cell">
									<span className="metric-strip-label">CLASSIFICATION</span>
									<span className="metric-strip-val">{activeModel.metrics.classification}</span>
								</div>
							</div>

							<div className="about-stage-bottombar">
								<span className="stage-gesture-hint">
									<i className="hint-pulse" />
									HIGH-DEFINITION DIGITAL PHYSIQUE RENDER
								</span>
								<span>{activeModel.caption}</span>
							</div>
						</div>

						{/* Editorial & Explicit Honesty Disclosures */}
						<div className="physique-editorial-copy">
							<div>
								<h2 id="physique-heading" className="about-section-heading">
									YOUR REAL BODY, RENDERED IN SILICON.
								</h2>
								<p className="physique-concept-desc">
									The Digital Physique is a <b>personalized digital representation</b> of the user. By tying your baseline height, body weight, estimated body fat percentage, and anatomical circumferences into a calibrated visual model, the system provides a tangible anchor for your physical progress.
								</p>
							</div>

							{/* Mandatory Honest Transparency Disclosure */}
							<div className="anatomical-disclosure-panel">
								<div className="disclosure-header">
									<i className="tag-pip" />
									<span>SYSTEM INTEGRITY // SCIENTIFIC DISCLOSURE</span>
								</div>

								<div className="disclosure-points">
									<div className="disclosure-item">
										<span className="disclosure-bullet">[01]</span>
										<div>
											<strong>Profile-Driven Approximation:</strong> Current visualizations are dynamically constructed using your user-provided measurements and metrics.
										</div>
									</div>
									<div className="disclosure-item">
										<span className="disclosure-bullet">[02]</span>
										<div>
											<strong>Not Medical Imaging:</strong> The Digital Physique is an analytical tracking and visualization aid. It is not an MRI, DEXA scan, or clinical medical diagnosis.
										</div>
									</div>
									<div className="disclosure-item">
										<span className="disclosure-bullet">[03]</span>
										<div>
											<strong>Continuous Evolution:</strong> As the system matures, future versions will ingest deeper volumetric data and refined tape telemetry to become progressively more detailed and personalized over time.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ─── 5. BUILT AROUND CONSISTENCY ────────────────────────────────── */}
				<section className="about-consistency" aria-labelledby="consistency-heading">
					<div className="section-meta-tag">
						<i className="tag-pip" />
						<span>04 // THE PHILOSOPHY</span>
						<span className="tag-rule" />
						<span>UNBROKEN REPETITION</span>
					</div>

					<h2 id="consistency-heading" className="about-section-heading">
						BUILT AROUND CONSISTENCY
					</h2>

					<blockquote className="consistency-doctrine-quote">
						PHYSICAL TRANSFORMATION IS NOT AN EVENT. IT IS THE CUMULATIVE BYPRODUCT OF <span>UNBROKEN EXECUTION</span> MAINTAINED ACROSS TIME.
					</blockquote>

					<div className="consistency-elements-grid">
						{CONSISTENCY_DOCTRINE.map((item) => (
							<div key={item.num} className="consistency-card">
								<div className="card-num-tag">
									<span>PILLAR {item.num}</span>
									<i className="card-accent-dot" />
								</div>
								<h3 className="card-title">{item.title}</h3>
								<p className="card-desc">{item.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* ─── 6. THE VISION ──────────────────────────────────────────────── */}
				<section className="about-vision" aria-labelledby="vision-heading">
					<div className="section-meta-tag">
						<i className="tag-pip" />
						<span>05 // THE HORIZON</span>
						<span className="tag-rule" />
						<span>FUTURE EVOLUTION</span>
					</div>

					<h2 id="vision-heading" className="about-section-heading">
						WHERE DISCIPLINED AF IS GOING
					</h2>
					<p className="about-section-desc">
						Disciplined AF is designed as a personal fitness system that becomes exponentially more valuable as you continuously log your journey.
					</p>

					<div className="vision-trajectory-rail">
						{VISION_PHASES.map((phase) => (
							<div key={phase.timeframe} className="trajectory-pod">
								<div className="trajectory-timeframe">
									<i className="pod-pip" />
									<span>{phase.timeframe}</span>
								</div>
								<h3 className="trajectory-title">{phase.title}</h3>
								<p className="trajectory-desc">{phase.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* ─── 7. FINAL CALL TO ACTION (CTA) ──────────────────────────────── */}
				<section className="about-cta-section" aria-labelledby="cta-heading">
					<div className="cta-monolith-box">
						<div className="cta-tagline">OWN YOUR PHYSICAL DATA</div>
						<h2 id="cta-heading" className="cta-main-title">
							BUILD YOUR SYSTEM.
						</h2>
						<p className="cta-subtitle">
							Stop scattering your workouts and measurements across disjointed apps. Calibrate your baseline and experience the discipline of a unified physical operating system.
						</p>

						<div className="cta-actions-cluster">
							<button
								type="button"
								className="cta-primary-btn"
								onClick={() => navigate('/signup')}
							>
								<span>CREATE ACCOUNT</span>
								<span aria-hidden="true">↗</span>
							</button>

							<button
								type="button"
								className="cta-secondary-btn"
								onClick={() => navigate('/login')}
							>
								<span>LOG IN</span>
								<span aria-hidden="true">→</span>
							</button>
						</div>
					</div>
				</section>
			</main>

			{/* ─── 8. FOOTER ──────────────────────────────────────────────────── */}
			<footer className="about-footer">
				<div className="about-footer-inner">
					<span>© DISCIPLINED AF — ALL RIGHTS RESERVED</span>
					<div className="about-footer-links">
						<Link to="/">HOME</Link>
						<Link to="/faq">FAQ</Link>
						<Link to="/privacy-policy">PRIVACY POLICY</Link>
						<Link to="/terms-and-conditions">TERMS &amp; CONDITIONS</Link>
					</div>
					<span>SYS ID: DAF-CORE-001 // STATUS: NOMINAL</span>
				</div>
			</footer>
		</div>
	)
}

export default About
