import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { Observer } from 'gsap/Observer'
import { TextPlugin } from 'gsap/TextPlugin'
import { useGSAP } from '@gsap/react'

// Register core plugins once
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, CustomEase, Observer, TextPlugin)

// Configure custom cinematic & high-precision lab easing curves
export const EASING = {
  // Ultra-crisp tech snap for UI panels, HUD scans, and badges
  tech: 'power4.out',
  // Smooth cinematic ease for camera dollies, hero headlines, and view shifts
  cinematic: 'power3.out',
  // High-inertia ease for spring-like deceleration
  smoothSnap: 'expo.out',
  // Subtle mechanical ease for physical machinery and platform movements
  mechanical: 'sine.inOut',
  // Fluid organic ease
  fluid: 'power2.inOut',
}

// Global default settings
gsap.defaults({
  ease: EASING.cinematic,
  duration: 0.6,
})

// Check if user prefers reduced motion
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Helper to animate Three.js properties (Vector3, Euler, Color, or arbitrary scalar objects)
 * @param {object} target - Three.js object, vector, or material property
 * @param {object} vars - GSAP tween config (e.g. { x: 2, y: 3, duration: 1, ease: 'power3.out' })
 * @returns {gsap.core.Tween}
 */
export function animate3D(target, vars = {}) {
  if (!target) return null
  const { onUpdate, ...restVars } = vars

  return gsap.to(target, {
    ...restVars,
    onUpdate: function () {
      if (typeof target.updateMatrix === 'function') {
        target.updateMatrix()
      }
      if (onUpdate) onUpdate.call(this)
    },
  })
}

/**
 * Creates a synchronized GSAP timeline with automatic reduced-motion handling
 * @param {gsap.TimelineVars} vars
 * @returns {gsap.core.Timeline}
 */
export function createCinematicTimeline(vars = {}) {
  const isReduced = prefersReducedMotion()
  const tl = gsap.timeline({
    ...vars,
    defaults: {
      duration: isReduced ? 0.01 : 0.6,
      ease: EASING.cinematic,
      ...(vars.defaults || {}),
    },
  })
  return tl
}

// Re-export GSAP, plugins, and useGSAP hook for unified access
export { gsap, ScrollTrigger, ScrollToPlugin, CustomEase, Observer, TextPlugin, useGSAP }
export default gsap
