import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap, EASING } from '../utils/gsap.js'

/**
 * Custom hook to control the cinematic overhead scanner analysis sequence.
 * Coordinates 3D scanner position, red/cyan lighting responses,
 * anatomical muscle callouts, and HUD telemetry indicators.
 */
export function useScannerSequence({
  onRegionHighlight,
  reducedMotion = false,
  autoStartDelay = 800,
}) {
  const [scanState, setScanState] = useState({
    isScanning: false,
    phase: 'idle', // 'idle' | 'calibrating' | 'shoulders' | 'core' | 'legs' | 'platform' | 'complete'
    progress: 0,
    scanY: 2.6,
    activeRegion: null,
    targetName: 'STANDBY',
    elevation: '+2.10M',
    metric: 'READY',
    symmetry: '100.0%',
    redIntensity: 0.1,
    cyanIntensity: 0.8,
    platformSurge: 0,
  })

  // Live mutable values accessed at 60fps by R3F useFrame
  const liveValues = useRef({
    scanY: 2.6,
    progress: 0,
    redIntensity: 0.1,
    cyanIntensity: 0.8,
    platformSurge: 0,
    beamOpacity: 0.35,
    gantryRotation: 0,
    activeRegion: null,
    isScanning: false,
  })

  const timelineRef = useRef(null)

  const stopScan = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill()
      timelineRef.current = null
    }
    liveValues.current.isScanning = false
    liveValues.current.scanY = 2.6
    liveValues.current.progress = 0
    liveValues.current.redIntensity = 0.1
    liveValues.current.cyanIntensity = 0.8
    liveValues.current.platformSurge = 0
    liveValues.current.beamOpacity = 0.35
    liveValues.current.activeRegion = null

    setScanState({
      isScanning: false,
      phase: 'idle',
      progress: 0,
      scanY: 2.6,
      activeRegion: null,
      targetName: 'STANDBY',
      elevation: '+2.10M',
      metric: 'READY',
      symmetry: '100.0%',
      redIntensity: 0.1,
      cyanIntensity: 0.8,
      platformSurge: 0,
    })
    if (onRegionHighlight) onRegionHighlight(null)
  }, [onRegionHighlight])

  const startScan = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    if (reducedMotion) {
      setScanState({
        isScanning: false,
        phase: 'complete',
        progress: 1,
        scanY: 2.4,
        activeRegion: null,
        targetName: 'PHYSIQUE PROFILE LOCKED',
        elevation: '+2.10M',
        metric: '100% COMPLETE',
        symmetry: '99.2%',
        redIntensity: 0.3,
        cyanIntensity: 1.0,
        platformSurge: 0,
      })
      return
    }

    liveValues.current.isScanning = true
    liveValues.current.scanY = 2.6
    liveValues.current.progress = 0
    liveValues.current.redIntensity = 0.2
    liveValues.current.cyanIntensity = 0.8
    liveValues.current.platformSurge = 0
    liveValues.current.beamOpacity = 0.5

    const scanObj = {
      y: 2.6,
      progress: 0,
      red: 0.2,
      cyan: 0.9,
      surge: 0,
      beamOp: 0.45,
    }

    const tl = gsap.timeline({
      onUpdate: () => {
        liveValues.current.scanY = scanObj.y
        liveValues.current.progress = scanObj.progress
        liveValues.current.redIntensity = scanObj.red
        liveValues.current.cyanIntensity = scanObj.cyan
        liveValues.current.platformSurge = scanObj.surge
        liveValues.current.beamOpacity = scanObj.beamOp
      },
      onComplete: () => {
        liveValues.current.isScanning = false
        liveValues.current.activeRegion = null
        setScanState((prev) => ({
          ...prev,
          isScanning: false,
          phase: 'complete',
          progress: 1,
          scanY: 2.4,
          activeRegion: null,
          targetName: 'PHYSIQUE PROFILE LOCKED',
          elevation: '+2.10M',
          metric: '100% COMPLETE',
          symmetry: '99.4%',
          redIntensity: 0.2,
          cyanIntensity: 0.9,
          platformSurge: 0,
        }))
        if (onRegionHighlight) onRegionHighlight(null)
      },
    })

    timelineRef.current = tl

    // ─────────────────────────────────────────────────────────────────────────
    // 0. CALIBRATION & ACTIVATION (t = 0.0s -> 1.0s)
    // ─────────────────────────────────────────────────────────────────────────
    tl.add(() => {
      setScanState((prev) => ({
        ...prev,
        isScanning: true,
        phase: 'calibrating',
        progress: 0.05,
        targetName: 'CALIBRATING OPTICS',
        elevation: '+2.10M',
        metric: 'ALIGNING FREQUENCY',
        symmetry: 'CALIBRATING',
      }))
    }, 0)

    // Beam powers up and centers on the cranial vertex
    tl.to(scanObj, {
      y: 2.1,
      progress: 0.1,
      cyan: 1.5,
      red: 0.4,
      beamOp: 0.85,
      duration: 0.9,
      ease: EASING.cinematic,
    }, 0)

    // Quick calibration pulse
    tl.to(scanObj, {
      red: 1.2,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: 'power4.inOut',
    }, 0.6)

    // ─────────────────────────────────────────────────────────────────────────
    // 1. TIER 1: DELTOID & THORACIC / PECTORAL BELT (t = 1.0s -> 2.8s)
    // ─────────────────────────────────────────────────────────────────────────
    tl.add(() => {
      setScanState((prev) => ({
        ...prev,
        phase: 'shoulders',
        progress: 0.28,
        activeRegion: 'deltoid-anterior-right',
        targetName: 'DELTOID & THORACIC BELT',
        elevation: '+1.35M',
        metric: 'MAPPING DENSITY: 1.04g/cm³',
        symmetry: '98.9%',
      }))
      if (onRegionHighlight) onRegionHighlight('deltoid-anterior-right')
    }, 1.0)

    // Controlled acceleration down to upper chest
    tl.to(scanObj, {
      y: 1.25,
      progress: 0.35,
      cyan: 1.3,
      red: 0.5,
      duration: 0.8,
      ease: 'power2.inOut',
    }, 1.0)

    // PAUSE & RED DIAGNOSTIC ANALYSIS OVER CHEST / DELTS (t = 1.8s -> 2.6s)
    tl.add(() => {
      setScanState((prev) => ({
        ...prev,
        activeRegion: 'pectoralis-major-right',
        targetName: 'PECTORALIS & CLAVICULAR MESH',
        elevation: '+1.20M',
        metric: 'FIBER SYMMETRY LOCKED',
        symmetry: '99.1%',
      }))
      if (onRegionHighlight) onRegionHighlight('pectoralis-major-right')
    }, 1.8)

    tl.to(scanObj, {
      y: 1.15,
      progress: 0.42,
      red: 1.8, // Major red light pulse!
      cyan: 0.6,
      beamOp: 0.95,
      duration: 0.8,
      ease: EASING.mechanical,
    }, 1.8)

    // ─────────────────────────────────────────────────────────────────────────
    // 2. TIER 2: CORE & ABDOMINAL MATRIX (t = 2.8s -> 4.8s)
    // ─────────────────────────────────────────────────────────────────────────
    tl.add(() => {
      setScanState((prev) => ({
        ...prev,
        phase: 'core',
        progress: 0.52,
        activeRegion: 'rectus-abdominis-upper-right',
        targetName: 'CORE & ABDOMINAL MATRIX',
        elevation: '+0.70M',
        metric: 'ANTERIOR WALL SCAN',
        symmetry: '99.4%',
      }))
      if (onRegionHighlight) onRegionHighlight('rectus-abdominis-upper-right')
    }, 2.8)

    // Accelerate down the ribcage
    tl.to(scanObj, {
      y: 0.55,
      progress: 0.58,
      cyan: 1.4,
      red: 0.4,
      duration: 0.75,
      ease: 'power2.inOut',
    }, 2.8)

    // PAUSE & DEEP RED/CYAN PULSE OVER MID-ABDOMINALS & OBLIQUES (t = 3.6s -> 4.5s)
    tl.add(() => {
      setScanState((prev) => ({
        ...prev,
        activeRegion: 'external-oblique-left',
        targetName: 'OBLIQUE & LATERAL STABILIZERS',
        elevation: '+0.45M',
        metric: 'LOCAL BF EST: 11.6%',
        symmetry: '99.5%',
      }))
      if (onRegionHighlight) onRegionHighlight('external-oblique-left')
    }, 3.6)

    tl.to(scanObj, {
      y: 0.35,
      progress: 0.65,
      red: 1.9, // High diagnostic red flare!
      cyan: 1.1,
      beamOp: 1.0,
      duration: 0.85,
      ease: EASING.mechanical,
    }, 3.6)

    // ─────────────────────────────────────────────────────────────────────────
    // 3. TIER 3: FEMORAL & QUADRICEPS AXIS (t = 4.8s -> 6.6s)
    // ─────────────────────────────────────────────────────────────────────────
    tl.add(() => {
      setScanState((prev) => ({
        ...prev,
        phase: 'legs',
        progress: 0.72,
        activeRegion: 'rectus-femoris-right',
        targetName: 'FEMORAL ARCHITECTURE',
        elevation: '-0.40M',
        metric: 'QUADRICEPS DENSITY: OPTIMAL',
        symmetry: '99.0%',
      }))
      if (onRegionHighlight) onRegionHighlight('rectus-femoris-right')
    }, 4.8)

    // Glide past hips into upper thighs
    tl.to(scanObj, {
      y: -0.70,
      progress: 0.78,
      cyan: 1.4,
      red: 0.4,
      duration: 0.8,
      ease: 'power2.inOut',
    }, 4.8)

    // PAUSE OVER MID-QUADS & HAMSTRINGS (t = 5.6s -> 6.4s)
    tl.add(() => {
      setScanState((prev) => ({
        ...prev,
        activeRegion: 'vastus-lateralis-left',
        targetName: 'VASTUS & HAMSTRING TENSION',
        elevation: '-0.85M',
        metric: 'BALANCE: 50.1 / 49.9',
        symmetry: '99.2%',
      }))
      if (onRegionHighlight) onRegionHighlight('vastus-lateralis-left')
    }, 5.6)

    tl.to(scanObj, {
      y: -0.95,
      progress: 0.84,
      red: 1.7,
      cyan: 0.9,
      beamOp: 0.95,
      duration: 0.8,
      ease: EASING.mechanical,
    }, 5.6)

    // ─────────────────────────────────────────────────────────────────────────
    // 4. TIER 4: LOWER EXTREMITIES & PLATFORM DOCKING (t = 6.6s -> 8.0s)
    // ─────────────────────────────────────────────────────────────────────────
    tl.add(() => {
      setScanState((prev) => ({
        ...prev,
        phase: 'platform',
        progress: 0.92,
        activeRegion: 'gastrocnemius-right',
        targetName: 'LOWER EXTREMITIES & BASE',
        elevation: '-1.85M',
        metric: 'CALF / TIBIALIS LOCKED',
        symmetry: '99.3%',
      }))
      if (onRegionHighlight) onRegionHighlight('gastrocnemius-right')
    }, 6.6)

    // Descent to platform deck
    tl.to(scanObj, {
      y: -2.60,
      progress: 0.98,
      surge: 1.8, // Platform flares up!
      cyan: 1.8,
      red: 1.4,
      beamOp: 1.0,
      duration: 1.0,
      ease: 'power3.inOut',
    }, 6.6)

    // Platform resonance surge
    tl.to(scanObj, {
      surge: 0.1,
      duration: 0.5,
      ease: 'power2.out',
    }, 7.6)

    // ─────────────────────────────────────────────────────────────────────────
    // 5. ASCENT & RETURN TO HIGH STANDBY (t = 8.0s -> 9.4s)
    // ─────────────────────────────────────────────────────────────────────────
    tl.add(() => {
      if (onRegionHighlight) onRegionHighlight(null)
      setScanState((prev) => ({
        ...prev,
        phase: 'complete',
        progress: 1.0,
        activeRegion: null,
        targetName: 'PHYSIQUE PROFILE LOCKED',
        elevation: '+2.10M',
        metric: '100% COMPLETE',
        symmetry: '99.4%',
      }))
    }, 8.0)

    tl.to(scanObj, {
      y: 2.45,
      red: 0.15,
      cyan: 0.85,
      beamOp: 0.38,
      duration: 1.4,
      ease: 'power3.out',
    }, 8.0)
  }, [reducedMotion, onRegionHighlight])

  // Automatic trigger when component mounts / user enters
  useEffect(() => {
    const timer = setTimeout(() => {
      startScan()
    }, autoStartDelay)

    return () => clearTimeout(timer)
  }, [autoStartDelay, startScan])

  return {
    scanState,
    liveValues,
    startScan,
    stopScan,
  }
}

export default useScannerSequence
