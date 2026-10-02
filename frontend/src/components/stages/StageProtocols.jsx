import { memo } from 'react'

const RECOVERY_GAUGES = [
  { name: 'Upper Push (Chest / Triceps)', score: 96, status: 'Prime Stimulus Ready', tone: 'cyan' },
  { name: 'Posterior Chain (Lats / Spinal)', score: 88, status: 'Recovered / Adaptive', tone: 'cyan' },
  { name: 'Lower Extremity (Quads / Hams)', score: 92, status: 'High Reserve', tone: 'cyan' },
  { name: 'Central Nervous System (CNS)', score: 84, status: 'Nominal Fatigue Buffer', tone: 'neutral' },
]

function StageProtocols() {
  return (
    <section className="stage-panel stage-protocols" id="protocols" aria-label="Stage 4: Intelligent Autoregulating Protocols">
      {/* Left Column: Adaptive Training Engine & SFR Optimization */}
      <div className="stage-card stage-card-left protocol-card">
        <div className="card-header">
          <span className="card-badge">ENGINE // 04</span>
          <span className="card-status-code">AUTOREGULATION v2.4</span>
        </div>

        <h2 className="card-title">
          <span>INTELLIGENT</span>
          <b>AUTOREGULATION</b>
        </h2>
        <p className="card-description">
          The engine dynamically scales weekly volume landmarks (MEV → MAV) based on regional biofeedback and strain accumulation.
        </p>

        <div className="protocol-features">
          <div className="protocol-feature-item">
            <div className="proto-dot dot-cyan" aria-hidden="true" />
            <div className="proto-copy">
              <b>STIMULUS-TO-FATIGUE RATIO (SFR)</b>
              <small>Prunes non-productive junk volume while maximizing fractional motor unit recruitment.</small>
            </div>
          </div>

          <div className="protocol-feature-item">
            <div className="proto-dot dot-red" aria-hidden="true" />
            <div className="proto-copy">
              <b>DYNAMIC SET VOLUME SCALING</b>
              <small>Auto-adjusts weekly working sets per muscle group based on volumetric adaptation rate.</small>
            </div>
          </div>

          <div className="protocol-feature-item">
            <div className="proto-dot dot-cyan" aria-hidden="true" />
            <div className="proto-copy">
              <b>PERIODIZED ACCUMULATION CYCLES</b>
              <small>Structured 6-week microcycles with calculated progressive overload and deload triggers.</small>
            </div>
          </div>
        </div>

        <div className="cycle-indicator-pill">
          <span className="cycle-badge">ACTIVE CYCLE</span>
          <span className="cycle-name">HYPERTROPHY ACCUMULATION BLOCK // WEEK 3 OF 6</span>
        </div>

        {/* Tech Corner Brackets */}
        <span className="card-corner corner-tl" aria-hidden="true" />
        <span className="card-corner corner-tr" aria-hidden="true" />
        <span className="card-corner corner-bl" aria-hidden="true" />
        <span className="card-corner corner-br" aria-hidden="true" />
      </div>

      {/* Right Column: Regional Recovery Gauges & Prescription Directives */}
      <div className="stage-card stage-card-right recovery-card">
        <div className="card-header">
          <span className="card-badge">BIOMETRIC RESERVES</span>
          <span className="card-status-code">SYSTEM NOMINAL</span>
        </div>

        <h3 className="card-title">
          <span>REGIONAL</span>
          <b>RECOVERY READOUTS</b>
        </h3>
        <p className="card-description">
          Calculated tissue readiness matrix drives real-time load recommendations for your upcoming sessions.
        </p>

        <div className="recovery-gauges-list">
          {RECOVERY_GAUGES.map((g) => (
            <div className="recovery-gauge-item" key={g.name}>
              <div className="gauge-header">
                <span className="gauge-name">{g.name}</span>
                <span className={`gauge-pct text-${g.tone}`}>{g.score}%</span>
              </div>
              <div className="gauge-bar-track">
                <div
                  className={`gauge-bar-fill fill-${g.tone}`}
                  style={{ width: `${g.score}%` }}
                />
              </div>
              <span className="gauge-status-sub">{g.status}</span>
            </div>
          ))}
        </div>

        <div className="protocol-directive-box">
          <div className="directive-tag">
            <i className="directive-pulse" aria-hidden="true" />
            <span>ALGORITHMIC PRESCRIPTION</span>
          </div>
          <p>
            Target +2.5 KG micro-load on incline pressing. Pectoral recovery reserve is at peak capacity (+96%).
          </p>
        </div>

        {/* Tech Corner Brackets */}
        <span className="card-corner corner-tl" aria-hidden="true" />
        <span className="card-corner corner-tr" aria-hidden="true" />
        <span className="card-corner corner-bl" aria-hidden="true" />
        <span className="card-corner corner-br" aria-hidden="true" />
      </div>
    </section>
  )
}

export default memo(StageProtocols)
