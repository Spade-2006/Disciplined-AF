function HeroContent({
  previewPlaying,
  onPreviewToggle,
  onSignUp,
  onExplorePhysique,
}) {
  return (
    <section className="intro-panel" id="about" aria-labelledby="landing-title">
      {/* Precision Biotech Corner Reticle */}
      <div className="hero-corner-reticle top-left" aria-hidden="true" />

      {/* System Status / Index Header */}
      <div className="hero-system-index" aria-label="System status">
        <span className="system-status-led" />
        <span className="system-status-code">SYS.ID // BIO-LAB v4.8</span>
        <span className="system-status-badge">ONLINE</span>
      </div>

      {/* Eyebrow with Red Slashes and Accent Tracer */}
      <p className="intro-eyebrow">
        <span>TRACK</span>
        <i>/</i>
        <span>ANALYZE</span>
        <i>/</i>
        <span>EVOLVE</span>
        <span className="eyebrow-tracer" aria-hidden="true" />
      </p>

      {/* Hero Headline */}
      <h1 id="landing-title">
        <span className="headline-line">YOUR PHYSIQUE.</span>
        <span className="headline-accent">VISUALIZED.</span>
      </h1>

      {/* Supporting Copy & Clinical Specs */}
      <div className="intro-copy-wrap">
        <p className="intro-copy">
          A digital you that evolves with your training.
          <span>See the progress. Feel the change.</span>
        </p>

        {/* Biotech Telemetry Specs Chips */}
        <div className="hero-spec-chips" aria-label="Biometric Specifications">
          <div className="hero-spec-chip">
            <span className="spec-dot" aria-hidden="true" />
            <span className="spec-val">54</span>
            <span className="spec-lbl">ZONES</span>
          </div>
          <div className="hero-spec-chip">
            <span className="spec-dot" aria-hidden="true" />
            <span className="spec-val">360°</span>
            <span className="spec-lbl">VOLUMETRIC</span>
          </div>
          <div className="hero-spec-chip">
            <span className="spec-dot" aria-hidden="true" />
            <span className="spec-val">0.1<small>mm</small></span>
            <span className="spec-lbl">PRECISION</span>
          </div>
        </div>
      </div>

      {/* Primary Actions Deck */}
      <div className="intro-actions">
        {/* Tactical Biotech CTA */}
        <button
          className="enter-system tactical-cta"
          type="button"
          onClick={onSignUp}
          aria-label="Sign up for Disciplined AF"
        >
          <span className="cta-glow-edge" aria-hidden="true" />
          <span className="cta-content">
            <span className="cta-micro-code">[ ACCOUNT // CREATE ]</span>
            <span className="cta-label">SIGN UP</span>
          </span>
          <span className="cta-arrow" aria-hidden="true">→</span>
        </button>

        <button
          className="physique-link"
          type="button"
          onClick={onExplorePhysique}
          aria-label="Explore the 3D physique lab"
        >
          <span>3D PHYSIQUE</span>
          <span aria-hidden="true">↗</span>
        </button>

        {/* Watch Preview */}
        <button
          className="watch-preview"
          type="button"
          aria-pressed={previewPlaying}
          onClick={onPreviewToggle}
        >
          <span className={`preview-icon ${previewPlaying ? 'is-playing' : ''}`} aria-hidden="true">
            <span className="preview-pulse-ring" />
          </span>
          <span className="watch-preview-copy">
            <b>{previewPlaying ? 'PAUSE PREVIEW' : 'WATCH PREVIEW'}</b>
            <small>See it in action</small>
          </span>
        </button>

      </div>
    </section>
  )
}

export default HeroContent
