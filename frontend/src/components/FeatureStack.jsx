import { useState } from 'react'
import { getMuscleCategory, MUSCLE_REGIONS } from './muscleRegions.js'

const featureItems = [
  { id: 'anatomy', title: ['Interactive', 'anatomy'], detail: 'Explore {count} muscle groups in real time.' },
  { id: 'progress', title: ['Track', 'progress'], detail: 'Visualize your physique evolution.' },
  { id: 'insights', title: ['Personalized', 'insights'], detail: 'Data-driven training recommendations.' },
  { id: 'physique', title: ['Your digital', 'physique'], detail: 'Built from your data.' },
]

function sceneFeatureId(selectedRegion, hoveredRegion, previewPlaying) {
  if (selectedRegion || hoveredRegion) return 'anatomy'
  if (previewPlaying) return 'physique'
  return 'anatomy'
}

function FeatureStack({ selectedRegion, hoveredRegion, previewPlaying, onClearSelection }) {
  const selectedMuscle = MUSCLE_REGIONS.find((region) => region.id === selectedRegion)
  const [intentId, setIntentId] = useState(null)
  const activeId = intentId ?? sceneFeatureId(selectedRegion, hoveredRegion, previewPlaying)

  return (
    <aside className="feature-stack" id="features" aria-label="Disciplined AF features">
      <div className="feature-spine" aria-hidden="true" />
      {selectedMuscle && (
        <section className="selected-muscle" aria-live="polite">
          <button type="button" onClick={onClearSelection} aria-label="Close muscle details">×</button>
          <span>{getMuscleCategory(selectedMuscle.id)} / {selectedMuscle.side}</span>
          <h2>{selectedMuscle.label.replace(/ \/ [LR]$/, '')}</h2>
          <p>Mapped to the live model. Training history can attach here as the profile develops.</p>
        </section>
      )}
      <div className="feature-list">
        {featureItems.map((feature) => {
          const active = activeId === feature.id
          return (
            <button
              className={`feature-node${active ? ' is-active' : ''}`}
              type="button"
              key={feature.id}
              aria-pressed={active}
              onMouseEnter={() => setIntentId(feature.id)}
              onMouseLeave={(event) => {
                if (event.currentTarget !== document.activeElement) setIntentId(null)
              }}
              onFocus={() => setIntentId(feature.id)}
              onClick={() => setIntentId(feature.id)}
              onBlur={() => setIntentId(null)}
            >
              <i className="feature-lead" aria-hidden="true" />
              <i className="feature-tick" aria-hidden="true" />
              <span className={`feature-mark feature-mark-${feature.id}`} aria-hidden="true"><i /></span>
              <span className="feature-copy">
                <span className="feature-title">
                  {feature.title.map((line) => (
                    <b key={line}>{line}</b>
                  ))}
                </span>
                <span className="feature-detail">{feature.detail.replace('{count}', String(MUSCLE_REGIONS.length))}</span>
              </span>
              <span className="feature-frame" aria-hidden="true">
                <i /><i /><i /><i />
              </span>
              <span className="feature-scan" aria-hidden="true" />
            </button>
          )
        })}
      </div>
      <div className="feature-stack-foot"><span>PROFILE</span><b>181 CM / 13% BF</b></div>
    </aside>
  )
}

export default FeatureStack
