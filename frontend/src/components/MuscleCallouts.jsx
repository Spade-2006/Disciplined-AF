import { useEffect, useRef } from 'react'
import { MUSCLE_REGIONS } from './muscleRegions.js'
import { createCalloutLayout, getCalloutGroup, MUSCLE_CALLOUT_GROUPS } from './muscleCalloutCatalog.js'

const LABEL_START = { left: 128, right: 872 }
const LABEL_BEND = { left: 338, right: 662 }
const compactQuery = '(max-width: 700px)'

function leaderPath(item) {
  const startX = LABEL_START[item.side]
  const bendX = LABEL_BEND[item.side]
  const labelY = item.labelY * 10
  return `M ${startX} ${labelY} H ${bendX} L ${item.anchorX * 10} ${item.anchorY * 10}`
}

function MuscleCallouts({ activeRegionId, layoutRef }) {
  const activeRegion = MUSCLE_REGIONS.find((region) => region.id === activeRegionId)
  const activeGroupId = getCalloutGroup(activeRegionId)?.id ?? null
  const activeGroupIdRef = useRef(activeGroupId)
  const leaderRefs = useRef({})
  const pathRefs = useRef({})
  const circleRefs = useRef({})
  const labelRefs = useRef({})

  useEffect(() => {
    activeGroupIdRef.current = activeGroupId
  }, [activeGroupId])

  useEffect(() => {
    const compactMedia = window.matchMedia(compactQuery)
    let frame = 0

    const sync = () => {
      const layout = layoutRef?.current ?? createCalloutLayout()
      const compact = compactMedia.matches
      const activeId = activeGroupIdRef.current
      const ranked = compact
        ? MUSCLE_CALLOUT_GROUPS
          .map((group) => layout[group.id])
          .filter((item) => item.visible)
          .sort((a, b) => {
            if (a.id === activeId) return -1
            if (b.id === activeId) return 1
            return a.labelY - b.labelY
          })
          .slice(0, 4)
          .map((item) => item.id)
        : null
      const compactSet = ranked ? new Set(ranked) : null

      for (const group of MUSCLE_CALLOUT_GROUPS) {
        const item = layout[group.id]
        const shown = item.visible && item.opacity > 0.08 && (!compactSet || compactSet.has(group.id))
        const opacity = shown ? item.opacity : 0
        const active = activeId === group.id
        const leader = leaderRefs.current[group.id]
        const path = pathRefs.current[group.id]
        const circle = circleRefs.current[group.id]
        const label = labelRefs.current[group.id]

        if (leader) {
          leader.style.opacity = String(opacity)
          leader.classList.toggle('is-active', active && shown)
          leader.classList.toggle('is-hidden', !shown)
        }
        if (path) path.setAttribute('d', leaderPath(item))
        if (circle) {
          circle.setAttribute('cx', String(item.anchorX * 10))
          circle.setAttribute('cy', String(item.anchorY * 10))
          circle.setAttribute('r', active && shown ? '5' : '3.5')
        }
        if (label) {
          label.style.opacity = String(opacity)
          label.style.top = `${item.labelY}%`
          label.classList.toggle('callout-left', item.side === 'left')
          label.classList.toggle('callout-right', item.side === 'right')
          label.classList.toggle('is-active', active && shown)
          label.classList.toggle('is-hidden', !shown)
        }
      }

      frame = window.requestAnimationFrame(sync)
    }

    frame = window.requestAnimationFrame(sync)
    return () => window.cancelAnimationFrame(frame)
  }, [layoutRef])

  return (
    <>
      <svg className="anatomy-leaders" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
        {MUSCLE_CALLOUT_GROUPS.map((group) => (
          <g
            className="anatomy-leader is-hidden"
            key={group.id}
            ref={(node) => {
              leaderRefs.current[group.id] = node
            }}
          >
            <path
              ref={(node) => {
                pathRefs.current[group.id] = node
              }}
            />
            <circle
              r={3.5}
              ref={(node) => {
                circleRefs.current[group.id] = node
              }}
            />
          </g>
        ))}
      </svg>
      <div className="anatomy-callouts" aria-hidden="true">
        {MUSCLE_CALLOUT_GROUPS.map((group) => (
          <span
            key={group.id}
            className="anatomy-callout callout-left is-hidden"
            ref={(node) => {
              labelRefs.current[group.id] = node
            }}
          >
            <i />{group.label}
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
