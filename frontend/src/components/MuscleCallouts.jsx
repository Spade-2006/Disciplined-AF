import { useEffect, useRef } from 'react'
import { MUSCLE_REGIONS } from './muscleRegions.js'
import { createCalloutLayout, getCalloutGroup, MUSCLE_CALLOUT_GROUPS } from './muscleCalloutCatalog.js'

const compactQuery = '(max-width: 700px)'

/**
 * Computes the SVG leader path connecting the label terminal to the 3D anatomical anchor point.
 * Matches the reference image: clean horizontal lines into the pill or sharp CAD elbows.
 */
function computeLeaderPath(item) {
  const ax = item.anchorX * 10
  const ay = item.anchorY * 10
  const isLeft = item.side === 'left'

  // Label connection point:
  // Left labels sit on the left, so leader connects to their right edge (labelX)
  // Right labels sit on the right, so leader connects to their left edge (labelX)
  const lx = (item.labelX ?? (isLeft ? 24 : 76)) * 10
  const ly = item.labelY * 10

  // Direct horizontal line when labelY and anchorY are aligned (like PECTORALIS in reference image)
  if (Math.abs(ay - ly) < 14) {
    return `M ${lx} ${ly} L ${ax} ${ay}`
  }

  // High-precision CAD elbow (horizontal from label, diagonal to anchor):
  const bendX = isLeft
    ? lx + Math.max(30, (ax - lx) * 0.45)
    : lx - Math.max(30, (lx - ax) * 0.45)

  return `M ${lx} ${ly} H ${bendX} L ${ax} ${ay}`
}

function MuscleCallouts({
  activeRegionId,
  layoutRef,
  onSelectGroup,
  onHoverGroup,
  reducedMotion = false,
}) {
  const activeRegion = MUSCLE_REGIONS.find((region) => region.id === activeRegionId)
  const activeGroupId = getCalloutGroup(activeRegionId)?.id ?? null
  const activeGroupIdRef = useRef(activeGroupId)

  const leaderRefs = useRef({})
  const pathRefs = useRef({})
  const labelDotRefs = useRef({})
  const coreDotRefs = useRef({})
  const ringRefs = useRef({})
  const beaconRefs = useRef({})
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

      // On mobile, show active callout plus top 3 nearest
      const ranked = compact
        ? MUSCLE_CALLOUT_GROUPS
          .map((group) => layout[group.id])
          .filter((item) => item?.visible)
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
        if (!item) continue

        const shown = item.visible && item.opacity > 0.08 && (!compactSet || compactSet.has(group.id))
        const opacity = shown ? item.opacity : 0
        const active = activeId === group.id

        const leader = leaderRefs.current[group.id]
        const path = pathRefs.current[group.id]
        const labelDot = labelDotRefs.current[group.id]
        const coreDot = coreDotRefs.current[group.id]
        const ring = ringRefs.current[group.id]
        const beacon = beaconRefs.current[group.id]
        const label = labelRefs.current[group.id]

        const ax = item.anchorX * 10
        const ay = item.anchorY * 10
        const lx = (item.labelX ?? (item.side === 'left' ? 24 : 76)) * 10
        const ly = item.labelY * 10

        if (leader) {
          leader.style.opacity = String(opacity)
          leader.classList.toggle('is-active', active && shown)
          leader.classList.toggle('is-hidden', !shown)
        }

        if (path) {
          path.setAttribute('d', computeLeaderPath(item))
        }

        if (labelDot) {
          labelDot.setAttribute('cx', String(lx))
          labelDot.setAttribute('cy', String(ly))
          labelDot.setAttribute('r', active && shown ? '2.8' : '1.8')
        }

        if (coreDot) {
          coreDot.setAttribute('cx', String(ax))
          coreDot.setAttribute('cy', String(ay))
          coreDot.setAttribute('r', active && shown ? '3.2' : '1.8')
        }

        if (ring) {
          ring.setAttribute('cx', String(ax))
          ring.setAttribute('cy', String(ay))
          ring.setAttribute('r', active && shown ? '7.5' : '4')
        }

        if (beacon) {
          beacon.setAttribute('cx', String(ax))
          beacon.setAttribute('cy', String(ay))
          beacon.setAttribute('r', active && shown && !reducedMotion ? '13' : '0')
        }

        if (label) {
          label.style.opacity = String(opacity)
          label.style.top = `${item.labelY}%`
          label.style.left = `${item.labelX ?? (item.side === 'left' ? 24 : 76)}%`
          label.classList.toggle('callout-left', item.side === 'left')
          label.classList.toggle('callout-right', item.side === 'right')
          label.classList.toggle('is-active', active && shown)
          label.classList.toggle('is-hidden', !shown || opacity < 0.04)
        }
      }

      frame = window.requestAnimationFrame(sync)
    }

    frame = window.requestAnimationFrame(sync)
    return () => window.cancelAnimationFrame(frame)
  }, [layoutRef, reducedMotion])

  return (
    <>
      <svg
        className="anatomy-leaders"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Active laser glow filter for vibrant neon red stroke */}
          <filter id="laser-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {MUSCLE_CALLOUT_GROUPS.map((group) => (
          <g
            className="anatomy-leader is-hidden"
            key={group.id}
            ref={(node) => {
              leaderRefs.current[group.id] = node
            }}
          >
            {/* The CAD leader path */}
            <path
              className="anatomy-leader-path"
              ref={(node) => {
                pathRefs.current[group.id] = node
              }}
            />

            {/* Terminal micro-dot right next to the label */}
            <circle
              className="anatomy-label-dot"
              r={1.8}
              ref={(node) => {
                labelDotRefs.current[group.id] = node
              }}
            />

            {/* Technical Target Group on the Body */}
            <g className="anatomy-anchor-target">
              {/* Outer pulsing radar beacon (active state) */}
              <circle
                className="target-beacon-glow"
                r={0}
                ref={(node) => {
                  beaconRefs.current[group.id] = node
                }}
              />
              {/* Middle concentric reticle ring */}
              <circle
                className="target-reticle-ring"
                r={4}
                ref={(node) => {
                  ringRefs.current[group.id] = node
                }}
              />
              {/* Solid center anchor dot */}
              <circle
                className="target-core-dot"
                r={1.8}
                ref={(node) => {
                  coreDotRefs.current[group.id] = node
                }}
              />
            </g>
          </g>
        ))}
      </svg>

      <div className="anatomy-callouts" aria-label="Physique muscle callouts">
        {MUSCLE_CALLOUT_GROUPS.map((group) => (
          <button
            key={group.id}
            type="button"
            className={`anatomy-callout callout-${group.side} is-hidden`}
            ref={(node) => {
              labelRefs.current[group.id] = node
            }}
            onClick={() => onSelectGroup?.(group.id)}
            onMouseEnter={() => onHoverGroup?.(group.id)}
            onMouseLeave={() => onHoverGroup?.(null)}
            title={`Focus ${group.label}`}
          >
            <span className="callout-pill">
              <span className="callout-label-text">{group.label}</span>
            </span>
          </button>
        ))}
      </div>

      {activeRegion && (
        <div className="active-muscle-tag" aria-live="polite">
          <i aria-hidden="true" />
          <span className="active-tag-label">{activeRegion.label}</span>
        </div>
      )}
    </>
  )
}

export default MuscleCallouts
