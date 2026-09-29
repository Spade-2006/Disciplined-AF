import { useCallback, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import malePhysiqueModel from '../assets/Physique template/MascularMale.glb?url'
import PhysiqueViewport from '../components/PhysiqueViewport.jsx'
import HeroContent from '../components/HeroContent.jsx'
import FeatureStack from '../components/FeatureStack.jsx'
import { MUSCLE_REGIONS } from '../components/muscleRegions.js'
import { DEFAULT_PHYSIQUE_PROFILE } from '../components/physiqueProfile.js'
import './LandingExperience.css'

useGLTF.preload(malePhysiqueModel)

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
	const [hoveredRegion, setHoveredRegion] = useState(null)
	const [selectedRegion, setSelectedRegion] = useState(null)
	const [previewPlaying, setPreviewPlaying] = useState(false)
	const [faqOpen, setFaqOpen] = useState(false)
	const handleRegionSelect = useCallback((regionId) => {
		setSelectedRegion((current) => current === regionId ? null : regionId)
	}, [])

	return (
		<div className="landing-experience">
			<header className="landing-header">
				<a className="landing-brand" href="#top" aria-label="Disciplined AF home">
					<span className="brand-emblem" aria-hidden="true"><i /><i /><i /></span>
					<span>DISCIPLINED <b>AF</b><small>PHYSIQUE INTELLIGENCE</small></span>
				</a>
				<nav className="landing-nav" aria-label="Main navigation">
					<a href="#about">ABOUT</a>
					<a href="#features">FEATURES</a>
					<button type="button" aria-pressed={previewPlaying} onClick={() => setPreviewPlaying((playing) => !playing)}>PREVIEW</button>
					<button type="button" aria-expanded={faqOpen} onClick={() => setFaqOpen((open) => !open)}>FAQ</button>
				</nav>
				<a className="header-enter" href="#physique-model">ENTER THE SYSTEM <span aria-hidden="true">↗</span></a>
				{faqOpen && (
					<div className="faq-popover" id="faq">
						<button type="button" onClick={() => setFaqOpen(false)} aria-label="Close FAQ">×</button>
						<strong>WHAT DOES THE MODEL TRACK?</strong>
						<p>Measurements, body composition and training history can map to individual muscle regions over time.</p>
					</div>
				)}
			</header>

			<main className="landing-grid" id="top">
				<HeroContent previewPlaying={previewPlaying} onPreviewToggle={() => setPreviewPlaying((playing) => !playing)} />
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
				/>
				<FeatureStack selectedRegion={selectedRegion} onClearSelection={() => setSelectedRegion(null)} />
			</main>

			<footer className="capability-strip" id="capabilities">
				<div className="capability-item"><span className="capability-symbol capability-body" aria-hidden="true" /><div><b>3D BODY MAPPING</b><small>{MUSCLE_REGIONS.length} regions / 360° view</small></div></div>
				<div className="capability-item"><span className="capability-symbol capability-progress" aria-hidden="true" /><div><b>PROGRESS ANALYTICS</b><small>Training / composition / change</small></div></div>
				<div className="capability-item"><span className="capability-symbol capability-plan" aria-hidden="true" /><div><b>PERSONALIZED PLANS</b><small>Built around your response</small></div></div>
				<a className="explore-link" href="#physique-model"><span>SCROLL TO EXPLORE</span><i aria-hidden="true">↓</i></a>
			</footer>
		</div>
	)
}

export default Home
