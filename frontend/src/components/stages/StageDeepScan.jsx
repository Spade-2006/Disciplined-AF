import { memo } from 'react'

const PRIMARY_REGIONS = [
  { id: 'chest', label: 'Pectoralis Major', symmetry: '99.1%', density: 'High', code: 'PEC-01' },
  { id: 'shoulders', label: 'Anterior / Lateral Deltoids', symmetry: '97.8%', density: 'Optimum', code: 'DELT-02' },
  { id: 'back', label: 'Latissimus Dorsi', symmetry: '98.5%', density: 'Peak', code: 'LAT-03' },
  { id: 'arms', label: 'Biceps & Triceps Brachii', symmetry: '96.9%', density: 'High', code: 'ARM-04' },
  { id: 'quads', label: 'Quadriceps Femoris', symmetry: '99.4%', density: 'High', code: 'QUAD-05' },
]

function StageDeepScan({ selectedRegion, hoveredRegion, onRegionSelect, onRegionHover }) {
  return (
    <section className="stage-panel stage-deep-scan" id="deep-scan" aria-label="Stage 2: Biomechanical Deep Scan">
      {/* Left Column: Volumetric Diagnostic Readout */}
      <div className="stage-card stage-card-left diagnostic-card">
        <div className="card-header">
          <span className="card-badge">DEEP SCAN // 02</span>
          <span className="card-status-code">SYS.RES_0.8MM</span>
        </div>

        <h2 className="card-title">
          <span>VOLUMETRIC</span>
          <b>TOPOGRAPHY</b>
        </h2>
        <p className="card-description">
          Continuous laser triangulation captures muscle cross-sectional area with sub-millimeter precision.
        </p>

        <div className="metric-group">
          <div className="metric-row">
            <span className="metric-name">BILATERAL SYMMETRY</span>
            <span className="metric-val text-cyan">98.4% BALANCED</span>
          </div>
          <div className="metric-track">
            <div className="metric-fill metric-fill-cyan" style={{ width: '98.4%' }} />
          </div>

          <div className="metric-row">
            <span className="metric-name">VOLUMETRIC RESOLUTION</span>
            <span className="metric-val">0.8 MM³ VOXEL</span>
          </div>
          <div className="metric-track">
            <div className="metric-fill metric-fill-red" style={{ width: '92%' }} />
          </div>

          <div className="metric-row">
            <span className="metric-name">ANTERIOR / POSTERIOR LOAD</span>
            <span className="metric-val text-dim">51.8% : 48.2%</span>
          </div>
          <div className="metric-track">
            <div className="metric-fill metric-fill-neutral" style={{ width: '52%' }} />
          </div>
        </div>

        <div className="card-footer-tags">
          <span>SCAN MODE: CONTINUOUS</span>
          <span>RESONANCE: OPTIMAL</span>
        </div>

        {/* Tech Corner Brackets */}
        <span className="card-corner corner-tl" aria-hidden="true" />
        <span className="card-corner corner-tr" aria-hidden="true" />
        <span className="card-corner corner-bl" aria-hidden="true" />
        <span className="card-corner corner-br" aria-hidden="true" />
      </div>

      {/* Right Column: Muscle Isolation Matrix with Clickable Chips */}
      <div className="stage-card stage-card-right muscle-matrix-card">
        <div className="card-header">
          <span className="card-badge">TARGET ISOLATION</span>
          <span className="card-status-code">28 MONITORED NODES</span>
        </div>

        <h3 className="card-title">
          <span>ACTIVE REGION</span>
          <b>INTERROGATION</b>
        </h3>
        <p className="card-description">
          Select any node to isolate the vector coordinates on the live 3D physique model.
        </p>

        <div className="region-chip-list" role="radiogroup" aria-label="Select muscle region">
          {PRIMARY_REGIONS.map((item) => {
            const isSelected = selectedRegion === item.id
            const isHovered = hoveredRegion === item.id
            return (
              <button
                key={item.id}
                type="button"
                className={`region-chip${isSelected ? ' is-selected' : ''}${isHovered ? ' is-hovered' : ''}`}
                role="radio"
                aria-checked={isSelected}
                onClick={() => onRegionSelect(item.id)}
                onMouseEnter={() => onRegionHover(item.id)}
                onMouseLeave={() => onRegionHover(null)}
              >
                <div className="chip-primary">
                  <span className="chip-indicator" aria-hidden="true" />
                  <span className="chip-code">{item.code}</span>
                  <span className="chip-label">{item.label}</span>
                </div>
                <div className="chip-meta">
                  <span className="chip-sym">{item.symmetry}</span>
                  <span className="chip-density">{item.density}</span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="matrix-telemetry-note">
          <span className="note-pulse" aria-hidden="true" />
          <span>Clicking any node synchronizes the 3D laser focus directly onto the digital twin.</span>
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

export default memo(StageDeepScan)
