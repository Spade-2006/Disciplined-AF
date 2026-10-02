import { useEffect, useRef } from 'react'
import { gsap } from '../utils/gsap.js'

const STAGE_INFO = [
  { code: '01', title: 'FACILITY STANDBY // WIDE APERTURE', status: 'STANDBY', color: 'cyan' },
  { code: '02', title: 'BIOMETRIC SCAN // TORSO TOPOLOGY', status: 'SCANNING', color: 'red' },
  { code: '03', title: 'TOPOLOGY RESOLUTION // 32 CALLOUTS', status: 'SYNCED', color: 'cyan' },
  { code: '04', title: 'CALIBRATION COMPLETE // 360° READY', status: 'ONLINE', color: 'green' },
]

function FrontSilhouetteIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5C8.8 1.5 9.4 2.1 9.4 2.9C9.4 3.7 8.8 4.3 8 4.3C7.2 4.3 6.6 3.7 6.6 2.9C6.6 2.1 7.2 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 6.2C4.8 5.6 6.3 5.2 8 5.2C9.7 5.2 11.2 5.6 12 6.2L13.2 8.4C13.4 8.8 13 9.3 12.5 9.1L11.2 8.5V11L10.2 14.5H8.7L8 11.8L7.3 14.5H5.8L4.8 11V8.5L3.5 9.1C3 9.3 2.6 8.8 2.8 8.4L4 6.2Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <line x1="6.2" y1="7.2" x2="9.8" y2="7.2" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      <line x1="8" y1="5.6" x2="8" y2="10.5" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 1" opacity="0.6" />
    </svg>
  )
}

function SideSilhouetteIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M7.5 1.5C8.3 1.5 8.9 2.1 8.9 2.9C8.9 3.7 8.3 4.3 7.5 4.3C6.7 4.3 6.1 3.7 6.1 2.9C6.1 2.1 6.7 1.5 7.5 1.5Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M6 5.4C7 5.2 8.4 5.5 9.2 6.2C10 6.9 10.2 8 9.8 9.2C9.5 10 9 10.6 8.6 11.2L9.2 14.5H7.7L7 11.8C6.6 11 6.2 10.2 6.3 9.2C6.4 8.2 6 7 5.5 6.4L6 5.4Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M5.5 7.8L7.2 8.4L6.8 10.8" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
    </svg>
  )
}

function BackSilhouetteIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5C8.8 1.5 9.4 2.1 9.4 2.9C9.4 3.7 8.8 4.3 8 4.3C7.2 4.3 6.6 3.7 6.6 2.9C6.6 2.1 7.2 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 6.2C4.8 5.6 6.3 5.2 8 5.2C9.7 5.2 11.2 5.6 12 6.2L13.2 8.4C13.4 8.8 13 9.3 12.5 9.1L11.2 8.5V11L10.2 14.5H8.7L8 11.8L7.3 14.5H5.8L4.8 11V8.5L3.5 9.1C3 9.3 2.6 8.8 2.8 8.4L4 6.2Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M6 6.8L8 8.4L10 6.8" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <line x1="8" y1="8.4" x2="8" y2="12.5" stroke="currentColor" strokeWidth="1.0" opacity="0.8" />
    </svg>
  )
}

function HeatmapSpectrumIcon({ active }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.1" opacity={active ? 1 : 0.6} />
      <path d="M5.5 8C5.5 6.6 6.6 5.5 8 5.5C9.4 5.5 10.5 6.6 10.5 8C10.5 9.4 9.4 10.5 8 10.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="8" cy="8" r="1.8" fill={active ? 'var(--lab-red-bright)' : 'var(--lab-cyan)'} />
    </svg>
  )
}

function MeasurementCaliperIcon({ active }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <line x1="2" y1="4" x2="2" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="14" y1="4" x2="14" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.1" strokeDasharray={active ? 'none' : '2 2'} />
      <path d="M4.5 6.5L2.5 8L4.5 9.5" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M11.5 6.5L13.5 8L11.5 9.5" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  )
}

function GimbalResetIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M8 2.5V4.5M8 11.5V13.5M2.5 8H4.5M11.5 8H13.5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M6 7L8 5L10 7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RadarSweepIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <line x1="8" y1="8" x2="12.5" y2="4.5" stroke="var(--lab-cyan-bright)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function HUD({
  viewMode,
  onViewChange,
  heatmapMode,
  onHeatmapToggle,
  showMeasurements,
  onMeasurementsToggle,
  probeLevel = 0,
  reducedMotion = false,
  scanState,
  onStartScan,
  onStopScan,
  scrollProgress = 0,
  analysisStage = 0,
  isSettled = false,
  onResetToLab,
}) {
  const consoleRef = useRef(null)
  const telemetryRef = useRef(null)
  const prevLevelRef = useRef(probeLevel)
  const prevPhaseRef = useRef(scanState?.phase)

  // Console probe/lock micro-pulse
  useEffect(() => {
    if (reducedMotion) return
    const el = consoleRef.current
    if (!el) return

    const prev = prevLevelRef.current
    prevLevelRef.current = probeLevel
    if (prev === probeLevel) return

    if (probeLevel === 2 && prev < 2) {
      gsap.fromTo(el,
        { y: 0, scale: 1 },
        {
          y: -4,
          scale: 1.008,
          duration: 0.14,
          ease: 'power4.out',
          yoyo: true,
          repeat: 1,
          onComplete: () => gsap.set(el, { clearProps: 'y,scale' }),
        },
      )
    } else if (probeLevel === 0 && prev > 0) {
      gsap.fromTo(el,
        { y: -1 },
        { y: 0, duration: 0.35, ease: 'power2.out' },
      )
    }

    el.dataset.probeLevel = String(probeLevel)
  }, [probeLevel, reducedMotion])

  // Telemetry HUD glitch/pulse animation on scan phase change
  useEffect(() => {
    if (reducedMotion) return
    const el = telemetryRef.current
    if (!el || !scanState) return

    const currentPhase = scanState.phase
    if (prevPhaseRef.current !== currentPhase) {
      prevPhaseRef.current = currentPhase
      if (currentPhase !== 'idle') {
        gsap.fromTo(el,
          { opacity: 0.72, x: -3 },
          { opacity: 1, x: 0, duration: 0.22, ease: 'power4.out' },
        )
      }
    }
  }, [scanState?.phase, reducedMotion, scanState])

  const currentStage = STAGE_INFO[analysisStage] ?? STAGE_INFO[0]

  return (
    <>
      {/* Top Left Analysis Stage Telemetry Badge */}
      <div className="stage-telemetry-badge" data-stage={analysisStage} aria-hidden="true">
        <span className="telemetry-led" />
        <span className="telemetry-stage">STAGE {currentStage.code}</span>
        <span className="telemetry-divider">/</span>
        <span className="telemetry-title">{currentStage.title}</span>
        <span className="telemetry-depth">DEPTH {(35 - scrollProgress * 25.4).toFixed(1)}M</span>
      </div>

      {scanState && (
        <aside
          className={`scanner-telemetry-hud${scanState.isScanning ? ' is-active' : ''}${scanState.phase === 'complete' ? ' is-complete' : ''}`}
          aria-label="Scanner Telemetry"
          ref={telemetryRef}
        >
          <div className="telemetry-header">
            <span className="telemetry-badge">
              <i className="telemetry-pulse-dot" aria-hidden="true" />
              {scanState.isScanning ? 'OVERHEAD ANALYSIS ACTIVE' : scanState.phase === 'complete' ? 'SCAN COMPLETE' : 'SCANNER STANDBY'}
            </span>
            <span className="telemetry-elevation">ELEVATION <b>{scanState.elevation}</b></span>
          </div>

          <div className="telemetry-body">
            <div className="telemetry-target-info">
              <span className="telemetry-target-title">{scanState.targetName}</span>
              <span className="telemetry-metric-readout">{scanState.metric}</span>
            </div>
            <div className="telemetry-symmetry-badge">
              <span>SYMMETRY</span>
              <b>{scanState.symmetry}</b>
            </div>
          </div>

          <div className="telemetry-progress-row">
            <div className="telemetry-progress-track">
              <div
                className="telemetry-progress-bar"
                style={{ width: `${Math.round(scanState.progress * 100)}%` }}
              />
            </div>
            <span className="telemetry-progress-val">{Math.round(scanState.progress * 100)}%</span>
          </div>
        </aside>
      )}

      {/* ─── SOPHISTICATED HARDWARE SCANNER-CONSOLE DECK ─────────────────── */}
      <div
        className={`scanner-console-deck${!isSettled && !reducedMotion ? ' is-calibrating' : ' is-calibrated'}${probeLevel === 2 ? ' is-locked' : probeLevel === 1 ? ' is-probing' : ''}`}
        ref={consoleRef}
        data-probe-level={probeLevel}
        data-stage={analysisStage}
        role="toolbar"
        aria-label="3D Physique Laboratory Scanner Console"
      >
        {/* Hardware Chassis Metallic Corner Brackets & Bolts */}
        <span className="chassis-bracket chassis-tl" aria-hidden="true"><i /></span>
        <span className="chassis-bracket chassis-tr" aria-hidden="true"><i /></span>
        <span className="chassis-bracket chassis-bl" aria-hidden="true"><i /></span>
        <span className="chassis-bracket chassis-br" aria-hidden="true"><i /></span>

        {/* Ambient Platform Red/Cyan Underglow Layer */}
        <div className="console-ambient-glow" aria-hidden="true" />
        <div className="console-top-laser-beam" aria-hidden="true" />

        {/* Top Telemetry Header Rail */}
        <div className="console-deck-header">
          <div className="deck-tag">
            <span className="deck-tag-dot" aria-hidden="true" />
            <span className="deck-code">DECK APERTURE // SYS.01</span>
          </div>
          <div className="deck-status">
            <span className="deck-status-pip" aria-hidden="true" />
            <span className="deck-status-text">
              {probeLevel === 2
                ? 'TARGET LOCKED // BIOMETRIC ACTIVE'
                : probeLevel === 1
                ? 'PROBING SURFACE // SENSORS ENGAGED'
                : isSettled
                ? '360° GIMBAL READY // CALIBRATED'
                : 'CALIBRATING TOPOLOGY MATRIX...'}
            </span>
          </div>
          <div className="deck-fov">
            <span>FOV 36°</span>
            <span className="deck-fov-sep">/</span>
            <span className="deck-depth">{(35 - scrollProgress * 25.4).toFixed(1)}M</span>
          </div>
        </div>

        {/* Main Segmented Control Array */}
        <div className="console-control-array">
          {/* Segment 1: Perspective Vantage Controls (FRONT / SIDE / BACK) */}
          <div className="console-segment-group vantage-group">
            <div className="group-label">
              <span className="group-label-text">PERSPECTIVE</span>
              <span className="group-label-sub">[360° VANTAGE]</span>
            </div>
            <div className="vantage-rail" role="group" aria-label="Camera perspective vantage">
              {[
                { id: 'front', code: 'V-01', label: 'FRONT', icon: <FrontSilhouetteIcon /> },
                { id: 'side', code: 'V-02', label: 'SIDE', icon: <SideSilhouetteIcon /> },
                { id: 'back', code: 'V-03', label: 'BACK', icon: <BackSilhouetteIcon /> },
              ].map((item) => {
                const isActive = viewMode === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`vantage-pod${isActive ? ' is-active' : ''}`}
                    aria-pressed={isActive}
                    onClick={() => onViewChange(item.id)}
                  >
                    <span className="pod-pip" aria-hidden="true" />
                    <span className="pod-icon" aria-hidden="true">{item.icon}</span>
                    <span className="pod-content">
                      <span className="pod-code">{item.code}</span>
                      <span className="pod-label">{item.label}</span>
                    </span>
                    <span className="pod-laser-line" aria-hidden="true" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Precision Divider Pillar */}
          <div className="console-divider-pillar" aria-hidden="true">
            <i className="pillar-notch-top" />
            <span className="pillar-core-line" />
            <i className="pillar-notch-bottom" />
          </div>

          {/* Segment 2: Diagnostic Analysis Tools (HEATMAP & MEASURE) */}
          <div className="console-segment-group tools-group">
            <div className="group-label">
              <span className="group-label-text">DIAGNOSTIC MODES</span>
              <span className="group-label-sub">[ANALYSIS]</span>
            </div>
            <div className="tools-rail">
              {/* Heatmap Pod */}
              <button
                className={`diagnostic-pod heat-pod${heatmapMode ? ' is-active' : ''}`}
                type="button"
                aria-pressed={heatmapMode}
                onClick={onHeatmapToggle}
              >
                <span className="pod-pip" aria-hidden="true" />
                <span className="pod-icon" aria-hidden="true">
                  <HeatmapSpectrumIcon active={heatmapMode} />
                </span>
                <span className="pod-content">
                  <span className="pod-label">HEATMAP</span>
                  <span className="pod-subtext">{heatmapMode ? 'SPECTRUM LIVE' : 'DENSITY MESH'}</span>
                </span>
                <span className="pod-laser-line" aria-hidden="true" />
              </button>

              {/* Measure Pod */}
              <button
                className={`diagnostic-pod measure-pod${showMeasurements ? ' is-active' : ''}`}
                type="button"
                aria-pressed={showMeasurements}
                onClick={onMeasurementsToggle}
              >
                <span className="pod-pip" aria-hidden="true" />
                <span className="pod-icon" aria-hidden="true">
                  <MeasurementCaliperIcon active={showMeasurements} />
                </span>
                <span className="pod-content">
                  <span className="pod-label">MEASURE</span>
                  <span className="pod-subtext">{showMeasurements ? 'SPAN ACTIVE' : 'CALIPERS'}</span>
                </span>
                <span className="pod-laser-line" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Precision Divider Pillar */}
          <div className="console-divider-pillar" aria-hidden="true">
            <i className="pillar-notch-top" />
            <span className="pillar-core-line" />
            <i className="pillar-notch-bottom" />
          </div>

          {/* Segment 3: Scanner Operations & Facility Reset Wing */}
          <div className="console-utility-wing">
            {onStartScan && (
              <button
                className={`utility-pod scan-trigger-pod${scanState?.isScanning ? ' is-scanning' : ''}`}
                type="button"
                aria-pressed={Boolean(scanState?.isScanning)}
                onClick={scanState?.isScanning ? onStopScan : onStartScan}
                title={scanState?.isScanning ? 'Halt active scan pass' : 'Execute overhead biometric scan'}
              >
                <span className="utility-icon" aria-hidden="true">
                  <RadarSweepIcon />
                </span>
                <span className="utility-label">{scanState?.isScanning ? 'HALT' : 'SCAN'}</span>
              </button>
            )}

            <button
              className="utility-pod reset-pod"
              type="button"
              aria-label={isSettled ? 'Return to facility wide view' : 'Reset view to front'}
              title={isSettled ? 'Return to facility wide view' : 'Reset view to front'}
              onClick={() => {
                if (isSettled && onResetToLab) {
                  onResetToLab()
                } else {
                  onViewChange('front')
                }
              }}
            >
              <span className="utility-icon reset-gimbal-icon" aria-hidden="true">
                <GimbalResetIcon />
              </span>
              <span className="utility-label">{isSettled ? 'LAB WIDE' : 'RESET'}</span>
            </button>
          </div>
        </div>

        {/* Chassis Sub-Lip Hardware Baseplate */}
        <div className="console-deck-footer">
          <div className="footer-hashes" aria-hidden="true">/// /// ///</div>
          <div className="footer-gesture-hints">
            <span><i className="gesture-dot" /><b>DRAG</b> 360° ORBIT</span>
            <span><i className="gesture-dot" /><b>SCROLL</b> DEPTH ZOOM</span>
            <span><i className="gesture-dot" /><b>CLICK</b> PROBE REGION</span>
          </div>
          <div className="footer-terminal-id">TERMINAL: <b>DAF-CONSOLE-09</b></div>
        </div>
      </div>
    </>
  )
}

export default HUD