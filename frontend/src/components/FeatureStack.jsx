import { memo, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from '../utils/gsap.js'
import { getMuscleCategory, MUSCLE_REGIONS } from './muscleRegions.js'

const featureRoutes = {
  anatomy: '/analysis',
  progress: '/progress',
  insights: '/insights',
  physique: '/digital-physique',
}

const FEATURE_PODS = [
  {
    id: 'anatomy',
    code: '01',
    tag: 'VOLUMETRIC SCAN',
    title: 'INTERACTIVE ANATOMY',
    detail: 'Explore 50+ muscle groups in real time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Head */}
        <circle cx="12" cy="4.8" r="2.2" />
        {/* Traps and Torso */}
        <path d="M8 8.5C8 7.5 9.5 7 12 7s4 0.5 4 1.5l1.5 4.5c0.3 1-0.5 2-1.5 2.2L15 15.5V20H13.5V16.5H10.5V20H9V15.5l-1-0.3c-1-0.2-1.8-1.2-1.5-2.2L8 8.5z" />
        {/* Anatomical Target Nodes */}
        <circle cx="9.2" cy="10.8" r="0.8" fill="currentColor" />
        <circle cx="14.8" cy="10.8" r="0.8" fill="currentColor" />
        <circle cx="12" cy="11.8" r="0.9" fill="currentColor" />
        {/* Lead line indicators */}
        <path d="M4 11h2.5M17.5 11H20" strokeWidth="1.2" opacity="0.65" />
      </svg>
    ),
  },
  {
    id: 'progress',
    code: '02',
    tag: 'CHRONO METRICS',
    title: 'TRACK PROGRESS',
    detail: 'Visualize your physique evolution.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Ascending metric bars */}
        <rect x="3.5" y="14" width="3" height="7" rx="0.8" />
        <rect x="9.5" y="10" width="3" height="11" rx="0.8" />
        <rect x="15.5" y="6" width="3" height="15" rx="0.8" />
        {/* Growth vector line and arrow */}
        <path d="M3.5 10.5l6-4.5 6 1.5 4.5-4" strokeWidth="1.8" />
        <path d="M16.5 3.5H20v3.5" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: 'insights',
    code: '03',
    tag: 'NEURAL PROTOCOL',
    title: 'PERSONALIZED INSIGHTS',
    detail: 'Data-driven training recommendations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Concentric radar rings */}
        <circle cx="12" cy="12" r="9" strokeWidth="1.3" opacity="0.65" />
        <circle cx="12" cy="12" r="5.2" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        {/* Precision reticle ticks */}
        <path d="M12 1.5v2.5M12 20v2.5M1.5 12h2.5M20 12h2.5" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: 'physique',
    code: '04',
    tag: 'DIGITAL TWIN',
    title: 'REAL 3D YOU',
    detail: 'Your digital physique. Built from your data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Volumetric 3D isometric prism */}
        <path d="M12 2.5l7.8 4.5v10l-7.8 4.5-7.8-4.5V7z" strokeWidth="1.6" />
        <path d="M12 2.5v10l7.8 4.5" strokeWidth="1.4" />
        <path d="M12 12.5l-7.8 4.5" strokeWidth="1.4" />
        <circle cx="12" cy="12.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
]

function sceneFeatureId(selectedRegion, hoveredRegion, previewPlaying) {
  if (selectedRegion || hoveredRegion) return 'anatomy'
  if (previewPlaying) return 'physique'
  return 'anatomy'
}

function FeatureStack({
  selectedRegion,
  hoveredRegion,
  previewPlaying,
  onClearSelection,
  reducedMotion = false,
  scrollProgress = 0,
}) {
  const navigate = useNavigate()
  const selectedMuscle = MUSCLE_REGIONS.find((region) => region.id === selectedRegion)
  const [intentId, setIntentId] = useState(null)

  // Map scroll position to active pod if not manually focused
  const scrollActiveId = scrollProgress < 0.2
    ? null
    : scrollProgress < 0.48
    ? 'anatomy'
    : scrollProgress < 0.72
    ? 'progress'
    : scrollProgress < 0.88
    ? 'insights'
    : 'physique'

  const activeId = intentId ?? (
    selectedMuscle
      ? 'anatomy'
      : (reducedMotion ? sceneFeatureId(selectedRegion, hoveredRegion, previewPlaying) : (scrollActiveId ?? sceneFeatureId(selectedRegion, hoveredRegion, previewPlaying)))
  )

  const podRefs = useRef({})
  const selectedMuscleRef = useRef(null)
  const prevActiveIdRef = useRef(activeId)
  const prevSelectedMuscleRef = useRef(null)

  // ─── Animate the active pod transition ──────────────────────────────────────
  useEffect(() => {
    const prev = prevActiveIdRef.current
    prevActiveIdRef.current = activeId
    if (prev === activeId || reducedMotion) return

    // Deactivate previous pod
    const prevPod = podRefs.current[prev]
    if (prevPod) {
      const prevLead = prevPod.querySelector('.pod-connector-lead')
      const prevAccent = prevPod.querySelector('.pod-accent-bar')
      if (prevLead) {
        gsap.to(prevLead, { width: 0, opacity: 0, duration: 0.2, ease: 'power2.in' })
      }
      if (prevAccent) {
        gsap.to(prevAccent, { opacity: 0.5, scaleY: 0.75, duration: 0.25, ease: 'power2.in' })
      }
    }

    // Activate new pod
    const nextPod = podRefs.current[activeId]
    if (nextPod) {
      const lead = nextPod.querySelector('.pod-connector-lead')
      const accent = nextPod.querySelector('.pod-accent-bar')
      const icon = nextPod.querySelector('.pod-icon-cradle')

      if (lead) {
        gsap.fromTo(lead,
          { width: 0, opacity: 0 },
          { width: 28, opacity: 1, duration: 0.35, ease: 'power4.out' },
        )
      }
      if (accent) {
        gsap.fromTo(accent,
          { scaleY: 0.7, opacity: 0.5 },
          { scaleY: 1, opacity: 1, duration: 0.3, ease: 'back.out(2)' },
        )
      }
      if (icon) {
        gsap.fromTo(icon,
          { scale: 0.9 },
          { scale: 1, duration: 0.28, ease: 'back.out(2.5)' },
        )
      }
    }
  }, [activeId, reducedMotion])

  // ─── Selected muscle panel entrance ─────────────────────────────────────────
  useEffect(() => {
    if (reducedMotion) return
    const el = selectedMuscleRef.current
    if (!el) return

    const wasPresent = Boolean(prevSelectedMuscleRef.current)
    prevSelectedMuscleRef.current = selectedMuscle

    if (selectedMuscle && !wasPresent && el) {
      gsap.fromTo(el,
        { opacity: 0, y: -12, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' },
      )
    }
  }, [selectedMuscle, reducedMotion])

  const handlePodClick = (podId) => {
    navigate(featureRoutes[podId])
  }

  return (
    <aside className="feature-analysis-deck" id="features" aria-label="Physique Analysis Modules">
      {/* Top Deck Header */}
      <div className="deck-header">
        <span className="deck-tag">
          <i className="deck-pulse-diode" aria-hidden="true" />
          SYSTEM ANALYSIS // 04 MODULES
        </span>
        <span className="deck-status">READY</span>
      </div>

      {/* Selected Muscle Live Diagnostic Panel */}
      {selectedMuscle && (
        <section
          className="selected-muscle-pod"
          aria-live="polite"
          ref={selectedMuscleRef}
        >
          <div className="selected-pod-header">
            <span className="selected-region-code">
              {getMuscleCategory(selectedMuscle.id)} // {selectedMuscle.side}
            </span>
            <button
              type="button"
              className="selected-close-btn"
              onClick={onClearSelection}
              aria-label="Close muscle details"
            >
              ×
            </button>
          </div>
          <h2 className="selected-muscle-name">{selectedMuscle.label.replace(/ \/ [LR]$/, '')}</h2>
          <div className="selected-stats-row">
            <span>DEVELOPMENT: <b>OPTIMAL</b></span>
            <span>SYMMETRY: <b>98.4%</b></span>
          </div>
          <p className="selected-desc">
            Live telemetry bound to 3D scanner coordinate. Training stimuli will track here.
          </p>
          <div className="selected-pod-line" aria-hidden="true" />
        </section>
      )}

      {/* Main Feature Pods Stack */}
      <div className="feature-pod-list">
        {FEATURE_PODS.map((pod, index) => {
          const isActive = activeId === pod.id
          const nodeVisible = reducedMotion || scrollProgress >= index * 0.22
          const nodeOpacity = reducedMotion ? 1 : (nodeVisible ? 1 : (scrollProgress < 0.15 ? 0.35 : 0.6))

          return (
            <button
              key={pod.id}
              type="button"
              className={`feature-pod${isActive ? ' is-active' : ''}`}
              aria-pressed={isActive}
              style={{ opacity: nodeOpacity }}
              ref={(node) => { podRefs.current[pod.id] = node }}
              onMouseEnter={() => setIntentId(pod.id)}
              onMouseLeave={(e) => {
                if (e.currentTarget !== document.activeElement) setIntentId(null)
              }}
              onFocus={() => setIntentId(pod.id)}
              onClick={() => handlePodClick(pod.id)}
              onBlur={() => setIntentId(null)}
            >
              {/* Spatial Laser Connector Lead pointing toward 3D physique */}
              <span className="pod-connector-lead" aria-hidden="true">
                <span className="connector-reticle" />
              </span>

              {/* Glowing Crimson Edge Accent Bar */}
              <span className="pod-accent-bar" aria-hidden="true" />

              {/* High-Tech Neon Icon Cradle */}
              <div className="pod-icon-cradle">
                {pod.icon}
              </div>

              {/* Typography & Technical Details */}
              <div className="pod-body">
                <div className="pod-meta-line">
                  <span className="pod-tag">{pod.tag}</span>
                  <span className="pod-code">SYS.{pod.code}</span>
                </div>
                <h3 className="pod-title">{pod.title}</h3>
                <p className="pod-detail">{pod.detail}</p>
              </div>

              {/* Dynamic Laser Scan Sweep on Active */}
              <span className="pod-scan-sweep" aria-hidden="true" />

              {/* Subtle Tech Corner Ticks */}
              <span className="pod-corner-tick tick-tr" aria-hidden="true" />
              <span className="pod-corner-tick tick-br" aria-hidden="true" />
            </button>
          )
        })}
      </div>

      {/* Bottom Biometric Telemetry Capsule */}
      <div className="deck-footer-capsule">
        <div className="capsule-data">
          <span className="capsule-label">BIOMETRIC TWIN</span>
          <b className="capsule-value">181 CM · 77.6 KG · 13% BF</b>
        </div>
        <span className="capsule-diode" aria-hidden="true" />
      </div>
    </aside>
  )
}

export default memo(FeatureStack)
