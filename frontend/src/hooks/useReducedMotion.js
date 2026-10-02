import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../utils/gsap.js'

/**
 * Hook to listen for system-level reduced motion preferences
 * @returns {boolean}
 */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setReducedMotion(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return reducedMotion
}

export default useReducedMotion
