function HeroContent({ previewPlaying, onPreviewToggle }) {
  return (
    <section className="intro-panel" id="about" aria-labelledby="landing-title">
      <p className="intro-eyebrow">TRACK <i>/</i> ANALYZE <i>/</i> EVOLVE<span /></p>
      <h1 id="landing-title">
        <span className="headline-line">YOUR PHYSIQUE.</span>
        <span className="headline-accent">VISUALIZED.</span>
      </h1>
      <p className="intro-copy">
        A digital you that evolves with your training.
        <span>See the progress. Feel the change.</span>
      </p>
      <div className="intro-actions">
        <a className="enter-system" href="#physique-model">
          ENTER THE SYSTEM <span aria-hidden="true">→</span>
        </a>
        <button className="watch-preview" type="button" aria-pressed={previewPlaying} onClick={onPreviewToggle}>
          <span className={`preview-icon ${previewPlaying ? 'is-playing' : ''}`} aria-hidden="true" />
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
