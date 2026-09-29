import { getMuscleCategory, MUSCLE_REGIONS } from './muscleRegions.js'

const featureItems = [
  { id: 'anatomy', title: 'Interactive anatomy', detail: 'Explore {count} mapped muscle regions.' },
  { id: 'progress', title: 'Track progress', detail: 'Connect training with measurable change.' },
  { id: 'insights', title: 'Personalized insights', detail: 'Turn your history into a clearer next step.' },
  { id: 'physique', title: 'Your digital physique', detail: 'A model built to evolve with your data.' },
]

function FeatureStack({ selectedRegion, onClearSelection }) {
  const selectedMuscle = MUSCLE_REGIONS.find((region) => region.id === selectedRegion)

  return (
    <aside className="feature-stack" id="features" aria-label="Disciplined AF features">
      <p className="feature-stack-heading">THE PHYSIQUE SYSTEM</p>
      {selectedMuscle && (
        <section className="selected-muscle" aria-live="polite">
          <button type="button" onClick={onClearSelection} aria-label="Close muscle details">×</button>
          <span>{getMuscleCategory(selectedMuscle.id)} / {selectedMuscle.side}</span>
          <h2>{selectedMuscle.label.replace(/ \/ [LR]$/, '')}</h2>
          <p>Muscle region selected. Training history can be mapped here as your profile develops.</p>
        </section>
      )}
      <div className="feature-list">
        {featureItems.map((feature, index) => (
          <article className="feature-item" key={feature.id}>
            <span className={`feature-mark feature-mark-${feature.id}`} aria-hidden="true"><i /></span>
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.detail.replace('{count}', String(MUSCLE_REGIONS.length))}</p>
            </div>
            <span className="feature-index">0{index + 1}</span>
          </article>
        ))}
      </div>
      <div className="feature-stack-foot"><span>PROFILE</span><b>181 CM / 13% BF</b></div>
    </aside>
  )
}

export default FeatureStack