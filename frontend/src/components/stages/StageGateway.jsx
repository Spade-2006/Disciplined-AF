import { memo } from 'react'

function StageGateway({ onResetTour }) {
  return (
    <section className="stage-panel stage-gateway" id="gateway" aria-label="Stage 5: Command Gateway & System Activation">
      <div className="gateway-terminal-card">
        <div className="card-header terminal-header">
          <span className="card-badge">SYSTEM ACTIVATION // 05</span>
          <span className="terminal-status-light">ALL SYSTEMS ONLINE</span>
        </div>

        <div className="gateway-headline-lockup">
          <p className="gateway-eyebrow">READY TO INITIALIZE YOUR DIGITAL TWIN</p>
          <h2 className="gateway-title">
            <span>ENTER THE</span>
            <b>PHYSIQUE INTELLIGENCE SYSTEM</b>
          </h2>
          <p className="gateway-subtitle">
            Bridge the gap between raw effort and quantifiable physical evolution. Step into the laboratory and track your transformation in full volumetric 3D.
          </p>
        </div>

        <div className="gateway-specs-grid">
          <div className="spec-item">
            <span className="spec-val text-cyan">28</span>
            <span className="spec-lbl">MONITORED REGIONS</span>
          </div>
          <div className="spec-item">
            <span className="spec-val text-red">0.8MM</span>
            <span className="spec-lbl">VOXEL RESOLUTION</span>
          </div>
          <div className="spec-item">
            <span className="spec-val text-cyan">REAL-TIME</span>
            <span className="spec-lbl">SFR CALCULATION</span>
          </div>
          <div className="spec-item">
            <span className="spec-val">100%</span>
            <span className="spec-lbl">ADAPTIVE SYNC</span>
          </div>
        </div>

        <div className="gateway-actions">
          <a className="btn-enter-system" href="#physique-model">
            <span>INITIALIZE YOUR PROFILE</span>
            <i aria-hidden="true">→</i>
          </a>
          <button className="btn-explore-demo" type="button" onClick={onResetTour}>
            <span>RESTART 3D LAB TOUR</span>
            <i aria-hidden="true">↺</i>
          </button>
        </div>

        {/* Tech Corner Brackets */}
        <span className="card-corner corner-tl" aria-hidden="true" />
        <span className="card-corner corner-tr" aria-hidden="true" />
        <span className="card-corner corner-bl" aria-hidden="true" />
        <span className="card-corner corner-br" aria-hidden="true" />
      </div>

      {/* Laboratory Futuristic Terminal Footer */}
      <footer className="gateway-footer">
        <div className="footer-content">
          <div className="footer-brand-lockup">
            <span className="brand-tag">DISCIPLINED <b>AF</b></span>
            <small>PHYSIQUE INTELLIGENCE ENGINE v2.4.0 // ALL RIGHTS RESERVED</small>
          </div>
          <div className="footer-links">
            <a href="#about">HERO DECK</a>
            <a href="#deep-scan">DEEP SCAN</a>
            <a href="#composition">COMPOSITION</a>
            <a href="#protocols">PROTOCOLS</a>
            <a href="#gateway">PORTAL</a>
          </div>
          <div className="footer-dev-meta">
            <span>ENGINEERED BY <b>SATYANSH ACHARYA</b></span>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default memo(StageGateway)
