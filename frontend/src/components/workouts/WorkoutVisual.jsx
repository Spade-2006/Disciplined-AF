import React from 'react'
import './WorkoutVisual.css'

export default function WorkoutVisual({ program }) {
	const name = program.name.toLowerCase()
	const cat = program.category
	const tgt = program.target

	// Motif classification
	const isStrength = tgt === 'strength'
	const isFatLoss = tgt === 'fat_loss' || cat === 'cardio' || name.includes('cond')
	const isPPL = cat === 'ppl'
	const isPush = name.includes('push') || name.includes('upper') || name.includes('chest')
	const isPull = name.includes('pull') || name.includes('back')
	const isLower = name.includes('lower') || name.includes('leg') || name.includes('glute')
	const isFull = cat === 'full_body' || name.includes('full') || cat === 'hybrid'
	const isHome = program.environment === 'home'

	return (
		<div className="workout-visual-container" aria-hidden="true">
			{/* Technical Background Grid */}
			<svg className="visual-grid" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<pattern id={`grid-${program.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
						<path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" />
					</pattern>
					<pattern id={`dots-${program.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
						<circle cx="2" cy="2" r="0.5" fill="rgba(6, 182, 212, 0.1)" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill={`url(#grid-${program.id})`} />
				{isStrength && <rect width="100%" height="100%" fill={`url(#dots-${program.id})`} opacity="0.3" />}
			</svg>

			{/* Scanning / Telemetry Particles */}
			<div className="abstract-particles"></div>
			<div className="scan-line"></div>

			{/* Abstract SVG Composition Layer */}
			<svg className="visual-vectors" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice">
				
				{/* 1. STRENGTH: Heavier structural geometry */}
				{isStrength && (
					<g className="motif-strength">
						<rect x="40" y="20" width="120" height="60" fill="none" stroke="rgba(219,60,71,0.2)" strokeWidth="2" />
						<rect x="50" y="30" width="100" height="40" fill="rgba(219,60,71,0.05)" stroke="rgba(219,60,71,0.4)" strokeWidth="1" />
						<path d="M 40 20 L 160 80 M 40 80 L 160 20" stroke="rgba(6,182,212,0.15)" strokeWidth="0.5" />
						<circle cx="100" cy="50" r="10" fill="#db3c47" opacity="0.2" className="pulse-slow" />
					</g>
				)}

				{/* 2. FAT LOSS / CARDIO: Dynamic waveform & energy flow */}
				{isFatLoss && (
					<g className="motif-waveform">
						<path d="M 0 50 Q 50 20 100 50 T 200 50" fill="none" stroke="rgba(219,60,71,0.4)" strokeWidth="1" className="wave-anim-1" />
						<path d="M 0 50 Q 50 80 100 50 T 200 50" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" className="wave-anim-2" />
						<circle cx="100" cy="50" r="25" fill="none" stroke="rgba(219,60,71,0.1)" strokeWidth="2" strokeDasharray="4 8" className="orbit-spin" />
					</g>
				)}

				{/* 3. PPL: Three interconnected zones */}
				{isPPL && (
					<g className="motif-ppl">
						<circle cx="70" cy="45" r="20" fill="rgba(219,60,71,0.05)" stroke="rgba(219,60,71,0.3)" strokeWidth="0.5" className="zone-1" />
						<circle cx="130" cy="45" r="20" fill="rgba(6,182,212,0.02)" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" className="zone-2" />
						<circle cx="100" cy="70" r="20" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" className="zone-3" />
						<path d="M 70 45 L 130 45 L 100 70 Z" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="0.5" strokeDasharray="2 2" />
					</g>
				)}

				{/* 4. PUSH: Layered horizontal geometry */}
				{isPush && !isPPL && (
					<g className="motif-push">
						<line x1="20" y1="30" x2="180" y2="30" stroke="rgba(219,60,71,0.3)" strokeWidth="1.5" />
						<line x1="40" y1="50" x2="160" y2="50" stroke="rgba(219,60,71,0.5)" strokeWidth="2" className="pulse-fast" />
						<line x1="60" y1="70" x2="140" y2="70" stroke="rgba(6,182,212,0.3)" strokeWidth="0.5" strokeDasharray="1 3" />
						<polygon points="100,20 120,40 80,40" fill="rgba(219,60,71,0.1)" />
					</g>
				)}

				{/* 5. PULL: Directional flowing lines */}
				{isPull && !isPPL && (
					<g className="motif-pull">
						<path d="M 20 20 C 80 20 120 80 180 80" fill="none" stroke="rgba(219,60,71,0.4)" strokeWidth="1.5" className="flow-anim" />
						<path d="M 20 40 C 80 40 120 100 180 100" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" className="flow-anim-delay" />
						<circle cx="100" cy="50" r="15" fill="none" stroke="rgba(219,60,71,0.2)" strokeWidth="1" />
					</g>
				)}

				{/* 6. LEGS/LOWER: Strong vertical/lower-section geometry */}
				{isLower && (
					<g className="motif-legs">
						<rect x="70" y="30" width="15" height="60" fill="rgba(219,60,71,0.1)" stroke="rgba(219,60,71,0.4)" strokeWidth="1" />
						<rect x="115" y="30" width="15" height="60" fill="rgba(219,60,71,0.1)" stroke="rgba(219,60,71,0.4)" strokeWidth="1" />
						<line x1="77.5" y1="10" x2="77.5" y2="30" stroke="rgba(6,182,212,0.4)" strokeWidth="0.5" strokeDasharray="2 2" />
						<line x1="122.5" y1="10" x2="122.5" y2="30" stroke="rgba(6,182,212,0.4)" strokeWidth="0.5" strokeDasharray="2 2" />
						<path d="M 60 90 L 140 90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
					</g>
				)}

				{/* 7. FULL BODY: Large circular contour composition */}
				{isFull && !isPPL && (
					<g className="motif-fullbody">
						<circle cx="100" cy="50" r="40" fill="none" stroke="rgba(219,60,71,0.15)" strokeWidth="1" />
						<circle cx="100" cy="50" r="30" fill="rgba(219,60,71,0.05)" stroke="rgba(219,60,71,0.3)" strokeWidth="0.5" className="pulse-slow" />
						<circle cx="100" cy="50" r="20" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" strokeDasharray="3 3" className="orbit-spin-rev" />
						<path d="M 100 10 L 100 90 M 60 50 L 140 50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
					</g>
				)}

				{/* 8. HOME: Minimal geometric composition */}
				{isHome && !isFatLoss && !isStrength && (
					<g className="motif-home">
						<rect x="60" y="40" width="80" height="40" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
						<polygon points="100,20 140,40 60,40" fill="none" stroke="rgba(219,60,71,0.3)" strokeWidth="1" />
						<line x1="50" y1="80" x2="150" y2="80" stroke="rgba(6,182,212,0.3)" strokeWidth="0.5" />
					</g>
				)}

				{/* Common Technical Overlays (Cyan details) */}
				<g className="tech-accents" opacity="0.7">
					<circle cx="180" cy="20" r="1.5" fill="#06b6d4" />
					<line x1="180" y1="20" x2="195" y2="20" stroke="#06b6d4" strokeWidth="0.3" />
					<text x="182" y="18" fill="#06b6d4" fontSize="4" fontFamily="monospace" letterSpacing="0.1em">{cat.substring(0,3).toUpperCase()}-XX</text>
					<path d="M 5 90 L 10 90 L 15 85" fill="none" stroke="#06b6d4" strokeWidth="0.5" />
				</g>
			</svg>
			
			{/* Fade Overlay */}
			<div className="visual-vignette"></div>
		</div>
	)
}
