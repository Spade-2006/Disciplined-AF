import { useEffect } from 'react'
import { gsap } from '../utils/gsap.js'

/**
 * Hook for orchestrating GSAP animations on Three.js / R3F scene objects.
 * Automatically creates a GSAP context and reverts all tweens on cleanup.
 *
 * @param {Function} effectCallback - (gsapInstance) => void | (() => void)
 * @param {Array} dependencies - React dependency array
 */
export function useThreeGSAP(effectCallback, dependencies = []) {
  useEffect(() => {
    let userCleanup = null
    const ctx = gsap.context(() => {
      userCleanup = effectCallback(gsap) ?? null
    })

    return () => {
      if (typeof userCleanup === 'function') userCleanup()
      ctx.revert()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}

export default useThreeGSAP
