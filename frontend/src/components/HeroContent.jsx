function HeroContent({ previewPlaying, onPreviewToggle }) {
  return (
    <section className="intro-panel" id="about" aria-labelledby="landing-title">
      <p className="intro-eyebrow">TRACK <i>/</i> ANALYZE <i>/</i> EVOLVE</p>
      <h1 id="landing-title">YOUR PHYSIQUE.<br /><em>VISUALIZED.</em></h1>
      <p className="intro-copy">Your training, measurements and body composition — connected to one evolving physique.</p>
      <div className="intro-actions">
        <a className="enter-system" href="#physique-model">ENTER THE SYSTEM <span aria-hidden="true">↗</span></a>
        <button className="watch-preview" type="button" aria-pressed={previewPlaying} onClick={onPreviewToggle}>
          <span className={`preview-icon ${previewPlaying ? 'is-playing' : ''}`} aria-hidden="true" />
          {previewPlaying ? 'PAUSE PREVIEW' : 'WATCH PREVIEW'}
        </button>
      </div>
    </section>
  )
}

export default HeroContent