import { useEffect, useRef } from 'react'
import { gsap } from '../utils/gsap.js'

/**
 * The signal bridge between the 3D physique system and the DOM UI layer.
 *
 * Drives coordinated GSAP tweens across the HUD console, stage edges,
 * stage meta text, and the probe-state indicator — making the UI feel
 * physically wired to the scanner.
 *
 * @param {object} params
 * @param {React.RefObject} params.stageRef - ref on the .body-stage section
 * @param {string|null} params.hoveredRegion
 * @param {string|null} params.selectedRegion
 * @param {boolean} params.previewPlaying
 * @param {boolean} params.reducedMotion
 */
export function useAnalysisSync({
  stageRef,
  hoveredRegion,
  selectedRegion,
  previewPlaying,
  reducedMotion,
}) {
  // 0 = idle, 1 = probing (hover), 2 = locked (selected)
  const probeLevel = selectedRegion ? 2 : hoveredRegion ? 1 : 0
  const prevProbeLevelRef = useRef(probeLevel)

  useEffect(() => {
    if (reducedMotion) return
    const stage = stageRef.current
    if (!stage) return

    const edge = stage.querySelector('.stage-edge')
    const console_ = stage.querySelector('.view-console')
    const meta = stage.querySelector('.stage-meta')

    const prevLevel = prevProbeLevelRef.current
    prevProbeLevelRef.current = probeLevel

    if (probeLevel === prevLevel) return

    // -------------------------------------------------------------------
    // IDLE → PROBE (hover begins)
    // -------------------------------------------------------------------
    if (probeLevel === 1) {
      if (edge) {
        gsap.to(edge, {
          '--stage-edge-opacity': 1,
          borderColor: 'rgba(143, 208, 210, 0.82)',
          duration: 0.22,
          ease: 'power2.out',
        })
      }
      if (console_) {
        gsap.to(console_, {
          borderColor: 'rgba(143, 208, 210, 0.42)',
          boxShadow: 'inset 0 1px rgba(255,255,255,0.04), 0 8px 24px rgba(0,0,0,0.28), 0 0 18px rgba(143, 208, 210, 0.08)',
          duration: 0.3,
          ease: 'power2.out',
        })
      }
      if (meta) {
        gsap.to(meta, { opacity: 0.35, duration: 0.25, ease: 'power2.out' })
      }
    }

    // -------------------------------------------------------------------
    // PROBE → LOCK (region selected)
    // -------------------------------------------------------------------
    if (probeLevel === 2) {
      if (edge) {
        gsap.to(edge, {
          borderColor: 'rgba(219, 60, 71, 0.82)',
          duration: 0.18,
          ease: 'power4.out',
        })
      }
      if (console_) {
        // Brief sharp pulse then settle
        gsap.timeline()
          .to(console_, {
            borderColor: 'rgba(219, 60, 71, 0.7)',
            boxShadow: 'inset 0 1px rgba(255,255,255,0.04), 0 8px 24px rgba(0,0,0,0.28), 0 0 28px rgba(219, 60, 71, 0.16)',
            duration: 0.14,
            ease: 'power4.out',
          })
          .to(console_, {
            borderColor: 'rgba(219, 60, 71, 0.38)',
            boxShadow: 'inset 0 1px rgba(255,255,255,0.04), 0 8px 24px rgba(0,0,0,0.28), 0 0 14px rgba(219, 60, 71, 0.1)',
            duration: 0.4,
            ease: 'power2.inOut',
          })
      }
      if (meta) {
        gsap.to(meta, { opacity: 0.18, duration: 0.22, ease: 'power3.out' })
      }
    }

    // -------------------------------------------------------------------
    // Any active → IDLE (release)
    // -------------------------------------------------------------------
    if (probeLevel === 0) {
      if (edge) {
        gsap.to(edge, {
          borderColor: 'rgba(143, 208, 210, 0.55)',
          duration: 0.45,
          ease: 'power2.out',
        })
      }
      if (console_) {
        gsap.to(console_, {
          borderColor: 'rgba(143, 208, 210, 0.22)',
          boxShadow: 'inset 0 1px rgba(255,255,255,0.04), 0 8px 24px rgba(0,0,0,0.28)',
          duration: 0.55,
          ease: 'power2.out',
        })
      }
      if (meta) {
        gsap.to(meta, { opacity: 1, duration: 0.45, ease: 'power2.out' })
      }
    }
  }, [probeLevel, reducedMotion, stageRef])

  // Preview playing → pulse the stage grid subtly
  useEffect(() => {
    if (reducedMotion) return
    const stage = stageRef.current
    if (!stage) return

    if (previewPlaying) {
      gsap.to(stage, {
        backgroundImage: `
          linear-gradient(rgba(143, 208, 210, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(143, 208, 210, 0.06) 1px, transparent 1px)
        `,
        duration: 0.6,
        ease: 'power2.out',
      })
    } else {
      gsap.to(stage, {
        backgroundImage: `
          linear-gradient(rgba(143, 208, 210, 0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(143, 208, 210, 0.035) 1px, transparent 1px)
        `,
        duration: 0.8,
        ease: 'power2.out',
      })
    }
  }, [previewPlaying, reducedMotion, stageRef])

  return { probeLevel }
}

export default useAnalysisSync
