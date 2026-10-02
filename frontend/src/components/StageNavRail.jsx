import { memo } from 'react'

const STAGES = [
  { id: 'calibration', index: '01', label: 'TWIN', title: 'Calibration Deck' },
  { id: 'deepscan', index: '02', label: 'SCAN', title: 'Biomechanical Scan' },
  { id: 'composition', index: '03', label: 'MATRIX', title: 'Composition Matrix' },
  { id: 'protocols', index: '04', label: 'PROTOCOL', title: 'Neural Protocols' },
  { id: 'gateway', index: '05', label: 'GATEWAY', title: 'System Activation' },
]

function StageNavRail({ currentStage, scrollProgress, onStageSelect }) {
  return (
    <aside className="stage-nav-rail" aria-label="Stage Navigation">
      <div className="rail-track" aria-hidden="true">
        <div
          className="rail-progress-bar"
          style={{ transform: `scaleY(${Math.max(0.04, Math.min(1, scrollProgress))})` }}
        />
      </div>

      <nav className="rail-nodes" aria-label="Quick jump to stage">
        {STAGES.map((stage, idx) => {
          const isActive = currentStage === idx
          return (
            <button
              key={stage.id}
              type="button"
              className={`rail-node${isActive ? ' is-active' : ''}`}
              aria-current={isActive ? 'step' : undefined}
              aria-label={`Jump to stage ${stage.index}: ${stage.title}`}
              onClick={() => onStageSelect(idx)}
            >
              <span className="rail-pip" aria-hidden="true" />
              <span className="rail-meta">
                <span className="rail-index">{stage.index}</span>
                <span className="rail-label">{stage.label}</span>
              </span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default memo(StageNavRail)
