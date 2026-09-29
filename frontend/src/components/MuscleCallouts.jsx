import { MUSCLE_REGIONS } from './muscleRegions.js'

const callouts = [
  { label: 'TRAPS', side: 'left', top: 13, anchor: [447, 20], match: 'trapezius' },
  { label: 'DELTOID', side: 'right', top: 19, anchor: [575, 27], match: 'deltoid' },
  { label: 'PECTORALIS', side: 'left', top: 27, anchor: [439, 35], match: 'pectoralis' },
  { label: 'BICEPS', side: 'right', top: 34, anchor: [568, 39], match: 'biceps' },
  { label: 'FOREARMS', side: 'left', top: 41, anchor: [425, 48], match: 'forearm' },
  { label: 'ABS', side: 'right', top: 48, anchor: [554, 49], match: 'abdominis' },
  { label: 'LATS', side: 'left', top: 55, anchor: [429, 49], match: 'latissimus' },
  { label: 'SERRATUS', side: 'right', top: 62, anchor: [581, 51], match: 'oblique' },
  { label: 'OBLIQUES', side: 'left', top: 68, anchor: [431, 57], match: 'oblique' },
  { label: 'GLUTES', side: 'right', top: 74, anchor: [560, 65], match: 'glute' },
  { label: 'QUADS', side: 'left', top: 79, anchor: [434, 73], match: 'vastus' },
  { label: 'HAMSTRINGS', side: 'right', top: 85, anchor: [564, 75], match: 'femoris' },
  { label: 'CALVES', side: 'left', top: 91, anchor: [457, 87], match: 'gastrocnemius' },
]

function MuscleCallouts({ activeRegionId }) {
  const activeRegion = MUSCLE_REGIONS.find((region) => region.id === activeRegionId)

  return (
    <>
      <svg className="anatomy-leaders" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
        {callouts.map((callout) => {
          const active = activeRegionId?.includes(callout.match)
          const labelY = callout.top * 10
          const [anchorX, anchorY] = callout.anchor
          const startX = callout.side === 'left' ? 132 : 868
          const bendX = callout.side === 'left' ? 345 : 655
          const path = `M ${startX} ${labelY} H ${bendX} L ${anchorX} ${anchorY * 10}`

          return (
            <g className={`anatomy-leader ${active ? 'is-active' : ''}`} key={callout.label}>
              <path d={path} />
              <circle cx={anchorX} cy={anchorY * 10} r={active ? 5 : 3.5} />
            </g>
          )
        })}
      </svg>
      <div className="anatomy-callouts" aria-hidden="true">
        {callouts.map((callout) => (
          <span key={callout.label} className={`anatomy-callout callout-${callout.side} ${activeRegionId?.includes(callout.match) ? 'is-active' : ''}`} style={{ top: `${callout.top}%` }}>
            <i />{callout.label}
          </span>
        ))}
      </div>
      {activeRegion && (
        <div className="active-muscle-tag" aria-live="polite">
          <i aria-hidden="true" /> {activeRegion.label}
        </div>
      )}
    </>
  )
}

export default MuscleCallouts