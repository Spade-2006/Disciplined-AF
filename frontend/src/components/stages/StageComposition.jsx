import { useState, memo } from 'react'

const MILESTONES = [
  { day: 'DAY 01', label: 'Baseline Capture', bf: '15.8%', lean: '68.2 KG', ffmi: '21.4', delta: '0.0 KG' },
  { day: 'DAY 60', label: 'Hypertrophic Recomp', bf: '13.8%', lean: '69.4 KG', ffmi: '21.9', delta: '+1.2 KG' },
  { day: 'DAY 120', label: 'Conditioned Peak', bf: '12.4%', lean: '70.8 KG', ffmi: '22.4', delta: '+2.6 KG' },
]

function StageComposition() {
  const [selectedMilestone, setSelectedMilestone] = useState(1)
  const current = MILESTONES[selectedMilestone]

  return (
    <section className="stage-panel stage-composition" id="composition" aria-label="Stage 3: Composition & Progress Analytics">
      {/* Left Column: Composition Telemetry & Golden Ratio Metrics */}
      <div className="stage-card stage-card-left composition-card">
        <div className="card-header">
          <span className="card-badge">MATRIX // 03</span>
          <span className="card-status-code">CHRONO-COMPOSITION</span>
        </div>

        <h2 className="card-title">
          <span>PROGRESS</span>
          <b>VELOCITY</b>
        </h2>
        <p className="card-description">
          Tracking the trajectory of lean tissue accretion and fat loss in three-dimensional space over time.
        </p>

        <div className="composition-stats-grid">
          <div className="comp-stat-box">
            <span className="comp-stat-label">BODY COMPOSITION</span>
            <div className="comp-stat-value text-cyan">13.0% <span>BF</span></div>
            <span className="comp-stat-sub">Down from 15.8% Baseline</span>
          </div>

          <div className="comp-stat-box">
            <span className="comp-stat-label">LEAN TISSUE ACCRETION</span>
            <div className="comp-stat-value text-red">+1.8 <span>KG</span></div>
            <span className="comp-stat-sub">Fat-Free Mass Index: 22.4</span>
          </div>

          <div className="comp-stat-box">
            <span className="comp-stat-label">V-TAPER PROPORTION</span>
            <div className="comp-stat-value">1.618 <span>Φ</span></div>
            <span className="comp-stat-sub">Optimal Shoulder / Waist</span>
          </div>

          <div className="comp-stat-box">
            <span className="comp-stat-label">GROWTH VELOCITY</span>
            <div className="comp-stat-value text-cyan">+0.42 <span>KG/MO</span></div>
            <span className="comp-stat-sub">Clean Anabolic Rate</span>
          </div>
        </div>

        <div className="comp-timeline-bar">
          <div className="bar-labels">
            <span>BASELINE (15.8%)</span>
            <span>CURRENT (13.0%)</span>
            <span>TARGET (11.2%)</span>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: '68%' }} />
            <div className="bar-pin" style={{ left: '68%' }} />
          </div>
        </div>

        {/* Tech Corner Brackets */}
        <span className="card-corner corner-tl" aria-hidden="true" />
        <span className="card-corner corner-tr" aria-hidden="true" />
        <span className="card-corner corner-bl" aria-hidden="true" />
        <span className="card-corner corner-br" aria-hidden="true" />
      </div>

      {/* Right Column: Interactive Chrono-Scan Timeline */}
      <div className="stage-card stage-card-right chrono-timeline-card">
        <div className="card-header">
          <span className="card-badge">CHRONO-SCAN TELEMETRY</span>
          <span className="card-status-code">120-DAY DELTA</span>
        </div>

        <h3 className="card-title">
          <span>LONGITUDINAL</span>
          <b>EVOLUTION</b>
        </h3>
        <p className="card-description">
          Toggle between progression milestones to compare volumetric changes across scan cycles.
        </p>

        <div className="milestone-toggle-group" role="tablist" aria-label="Select progression milestone">
          {MILESTONES.map((m, idx) => {
            const isActive = selectedMilestone === idx
            return (
              <button
                key={m.day}
                type="button"
                className={`milestone-btn${isActive ? ' is-active' : ''}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedMilestone(idx)}
              >
                <span className="milestone-day">{m.day}</span>
                <span className="milestone-label">{m.label}</span>
              </button>
            )
          })}
        </div>

        <div className="milestone-detail-card" aria-live="polite">
          <div className="detail-row">
            <span>BODY FAT ESTIMATE:</span>
            <b>{current.bf}</b>
          </div>
          <div className="detail-row">
            <span>LEAN BODY MASS:</span>
            <b>{current.lean}</b>
          </div>
          <div className="detail-row">
            <span>FFMI RATING:</span>
            <b>{current.ffmi}</b>
          </div>
          <div className="detail-row delta-row">
            <span>LEAN ACCRETION DELTA:</span>
            <b className="text-red">{current.delta}</b>
          </div>
        </div>

        <div className="training-load-summary">
          <div className="summary-item">
            <span className="summary-num text-cyan">142.8T</span>
            <span className="summary-lbl">VOLUME MOVED</span>
          </div>
          <div className="summary-item">
            <span className="summary-num">486</span>
            <span className="summary-lbl">VALIDATED SETS</span>
          </div>
          <div className="summary-item">
            <span className="summary-num text-red">94%</span>
            <span className="summary-lbl">RECOVERY RESERVE</span>
          </div>
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

export default memo(StageComposition)
