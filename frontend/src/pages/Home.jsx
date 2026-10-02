import { lazy, Suspense, useCallback, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import malePhysiqueModel from '../assets/Physique template/MascularMale.hq.glb?url'
import HeroContent from '../components/HeroContent.jsx'
import FeatureStack from '../components/FeatureStack.jsx'
import { MUSCLE_REGIONS } from '../components/muscleRegions.js'
import { DEFAULT_PHYSIQUE_PROFILE } from '../components/physiqueProfile.js'
import { EASING, gsap, ScrollTrigger } from '../utils/gsap.js'
import { useGSAP, useReducedMotion } from '../hooks/index.js'
import './LandingExperience.css'

const PhysiqueViewport = lazy(() => import('../components/PhysiqueViewport.jsx'))

const physiqueModelConfig = {
	regionNodeMap: {},
	morphTargetMap: {
		heightCm: 'Height',
		bodyFatPercent: 'BodyFat',
		shoulderWidth: 'ShoulderWidth',
		chestWidth: 'ChestWidth',
		waistWidth: 'WaistWidth',
	},
}

const sampleRegionValues = Object.fromEntries(
	MUSCLE_REGIONS.map((region, index) => [region.id, 0.16 + ((index * 29) % 72) / 100]),
)

function Home() {
	const trackRef = useRef(null)
	const containerRef = useRef(null)
	const scrollProgressRef = useRef(0)
	const navigate = useNavigate()
	const location = useLocation()

	const [scrollProgress, setScrollProgress] = useState(0)
	const [analysisStage, setAnalysisStage] = useState(0)
	const [isSettled, setIsSettled] = useState(false)
	const [hoveredRegion, setHoveredRegion] = useState(null)
	const [selectedRegion, setSelectedRegion] = useState(null)
	const [previewPlaying, setPreviewPlaying] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [systemReady, setSystemReady] = useState(false)
	const reducedMotion = useReducedMotion()

	const handleRegionSelect = useCallback((regionId) => {
		setSelectedRegion((current) => (current === regionId ? null : regionId))
	}, [])

	const scrollToProgress = useCallback((targetProgress) => {
		if (!trackRef.current) return
		const maxScroll = trackRef.current.offsetHeight - window.innerHeight
		if (maxScroll <= 0) return
		const targetY = maxScroll * Math.min(1, Math.max(0, targetProgress))
		window.scrollTo({
			top: targetY,
			behavior: 'smooth',
		})
	}, [])

	const handleExplorePhysique = useCallback(() => {
		scrollToProgress(1.0)
	}, [scrollToProgress])

	const handleLabOverview = useCallback(() => {
		if (location.pathname === '/') {
			scrollToProgress(0)
		} else {
			navigate('/')
		}
	}, [location.pathname, navigate, scrollToProgress])

	const handleResetToLab = useCallback((e) => {
		if (e) e.preventDefault()
		scrollToProgress(0)
	}, [scrollToProgress])

	useGSAP(
		() => {
			if (reducedMotion) {
				scrollProgressRef.current = 1
				setScrollProgress(1)
				setAnalysisStage(3)
				setIsSettled(true)
				setSystemReady(true)
				return
			}

			// ─── 1. Initial Lab Boot & UI Reveal ───────────────────────────
			const enterTl = gsap.timeline({
				defaults: { ease: EASING.cinematic },
				onComplete: () => {
					setSystemReady(true)
					ScrollTrigger.refresh()
				},
			})

			enterTl
				.fromTo(
					'.body-stage',
					{ opacity: 0, scale: 0.98 },
					{ opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' },
					0,
				)
				.fromTo(
					'.landing-header',
					{ opacity: 0, y: -14 },
					{ opacity: 1, y: 0, duration: 0.7, ease: EASING.tech },
					0.1,
				)
				.fromTo(
					'.header-sys-rail',
					{ opacity: 0 },
					{ opacity: 1, duration: 0.5, ease: 'power2.out' },
					0.15,
				)
				.fromTo(
					'.brand-emblem i',
					{ scaleY: 0, transformOrigin: 'bottom' },
					{ scaleY: 1, stagger: 0.08, duration: 0.45, ease: EASING.tech },
					0.25,
				)
				.fromTo(
					['.header-enter', '.header-enter-system'],
					{ opacity: 0, x: 8 },
					{ opacity: 1, x: 0, stagger: 0.06, duration: 0.4, ease: EASING.tech },
					0.35,
				)
				.from(
					'.intro-panel',
					{ opacity: 0, y: 16, duration: 0.7, ease: EASING.cinematic, clearProps: 'y' },
					0.35,
				)
				.from(
					['.hero-corner-reticle', '.hero-system-index'],
					{ opacity: 0, x: -10, duration: 0.45, ease: EASING.tech, clearProps: 'all' },
					0.4,
				)
				.from(
					'.intro-eyebrow',
					{ opacity: 0, x: -14, duration: 0.5, ease: EASING.tech, clearProps: 'all' },
					0.45,
				)
				.from(
					['.headline-line', '.headline-accent'],
					{ opacity: 0, y: 22, stagger: 0.1, duration: 0.75, ease: EASING.cinematic, clearProps: 'all' },
					0.5,
				)
				.from(
					'.intro-copy',
					{ opacity: 0, y: 14, duration: 0.6, ease: EASING.cinematic, clearProps: 'all' },
					0.65,
				)
				.from(
					'.hero-spec-chip',
					{ opacity: 0, y: 8, stagger: 0.05, duration: 0.45, ease: EASING.tech, clearProps: 'all' },
					0.72,
				)
				.from(
					['.enter-system', '.watch-preview', '.physique-link'],
					{ opacity: 0, y: 12, stagger: 0.08, duration: 0.55, ease: EASING.smoothSnap, clearProps: 'all' },
					0.8,
				)
				.fromTo(
					'.feature-node',
					{ opacity: 0, x: 20 },
					{ opacity: 1, x: 0, stagger: 0.08, duration: 0.5, ease: EASING.cinematic },
					1.05,
				)
				.fromTo(
					'.capability-strip .capability-item',
					{ opacity: 0, y: 10 },
					{ opacity: 1, y: 0, stagger: 0.07, duration: 0.45, ease: EASING.cinematic },
					1.15,
				)
			enterTl.timeScale(2.4)
			// ─── 2. Master Continuous Scroll-Driven Sequence ────────────────
			const st = ScrollTrigger.create({
				trigger: trackRef.current,
				start: 'top top',
				end: 'bottom bottom',
				scrub: 0.8,
				onUpdate: (self) => {
					const p = self.progress
					scrollProgressRef.current = p
					const progressPercent = Math.round(p * 100) / 100
					setScrollProgress((current) => current === progressPercent ? current : progressPercent)

					// Determine current analysis stage
					let stage = 0
					if (p >= 0.88) stage = 3
					else if (p >= 0.58) stage = 2
					else if (p >= 0.22) stage = 1

					setAnalysisStage((prev) => (prev !== stage ? stage : prev))
					setIsSettled(p >= 0.88)
				},
			})

			return () => {
				st.kill()
			}
		},
		{ scope: trackRef, dependencies: [reducedMotion] },
	)

	return (
		<div className="landing-scroll-track" ref={trackRef}>
			<link rel="preload" href={malePhysiqueModel} as="fetch" crossOrigin="anonymous" />
			<div className={`landing-experience${systemReady ? ' is-system-ready' : ''}`} ref={containerRef}>
				{/* Top Navigation Bar */}
				<header className={`landing-header${menuOpen ? ' is-menu-open' : ''}`}>
					{/* System ID strip — structural top rail */}
					<div className="header-sys-rail" aria-hidden="true">
						<span className="sys-rail-id">SYS // DAF-LAB-001</span>
						<span className="sys-rail-sep" />
						<span className="sys-rail-status">
							<i className="sys-rail-led" />
							OPERATIONAL
						</span>
						<span className="sys-rail-right">PHYSIQUE INTELLIGENCE SYSTEM v2.0</span>
					</div>

					{/* Main header row */}
					<div className="header-inner">
						{/* Brand */}
						<Link className="landing-brand" to="/" onClick={handleResetToLab} aria-label="Disciplined AF home">
							<span className="brand-emblem" aria-hidden="true"><i /><i /><i /></span>
							<span className="brand-text">
								DISCIPLINED <b>AF</b>
								<small>PHYSIQUE INTELLIGENCE</small>
							</span>
						</Link>

						{/* Corner crosshair detail */}
						<span className="header-crosshair" aria-hidden="true" />

						{/* Mobile toggle */}
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

						{/* Nav */}
						<nav
							className={`landing-nav${menuOpen ? ' is-open' : ''}`}
							id="landing-navigation"
							aria-label="Main navigation"
							onClick={() => setMenuOpen(false)}
						>
							<button type="button" onClick={handleLabOverview}>
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
							<button type="button" onClick={() => navigate('/about')}>
								<span className="nav-item-index" aria-hidden="true">06</span>
								<span className="nav-item-label">ABOUT</span>
								<span className="nav-item-bar" aria-hidden="true" />
							</button>
						</nav>

						{/* CTA group */}
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

				{/* Central Continuous Cinematic Stage */}
				<main className="landing-grid" id="top">
					<HeroContent
						previewPlaying={previewPlaying}
						onPreviewToggle={() => setPreviewPlaying((playing) => !playing)}
						onSignUp={() => navigate('/signup')}
						onScrollCue={handleExplorePhysique}
						onExplorePhysique={handleExplorePhysique}
					/>
					<Suspense fallback={<div className="body-stage body-stage-loading" aria-label="Loading physique model" />}>
						<PhysiqueViewport
							modelUrl={malePhysiqueModel}
							modelConfig={physiqueModelConfig}
							physique={DEFAULT_PHYSIQUE_PROFILE}
							regionValues={sampleRegionValues}
							hoveredRegion={hoveredRegion}
							selectedRegion={selectedRegion}
							onRegionHover={setHoveredRegion}
							onRegionSelect={handleRegionSelect}
							previewPlaying={previewPlaying}
							scrollProgressRef={scrollProgressRef}
							scrollProgress={scrollProgress}
							analysisStage={analysisStage}
							isSettled={isSettled}
							onResetToLab={handleResetToLab}
						/>
					</Suspense>
					<FeatureStack
						selectedRegion={selectedRegion}
						hoveredRegion={hoveredRegion}
						previewPlaying={previewPlaying}
						onClearSelection={() => setSelectedRegion(null)}
						reducedMotion={reducedMotion}
						scrollProgress={scrollProgress}
						analysisStage={analysisStage}
					/>
				</main>

				{/* Initial Stage Capability Footer */}
				<footer className="capability-strip" id="capabilities">
					<div className="capability-item">
						<span className="capability-symbol capability-body" aria-hidden="true" />
						<div><b>3D BODY MAPPING</b><small>{MUSCLE_REGIONS.length} regions / 360° view</small></div>
					</div>
					<div className="capability-item">
						<span className="capability-symbol capability-progress" aria-hidden="true" />
						<div><b>PROGRESS ANALYTICS</b><small>Training / composition / change</small></div>
					</div>
					<div className="capability-item">
						<span className="capability-symbol capability-plan" aria-hidden="true" />
						<div><b>PERSONALIZED PLANS</b><small>Built around your response</small></div>
					</div>
					<div className="footer-legal">
						<small>© Disciplined AF — All Rights Reserved</small>
						<nav aria-label="Legal links">
							<Link to="/privacy-policy">PRIVACY POLICY</Link>
							<Link to="/terms-and-conditions">TERMS &amp; CONDITIONS</Link>
						</nav>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default Home
