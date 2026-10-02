import { useCallback, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import PhysiqueScene from './PhysiqueScene.jsx'
import HUD from './HUD.jsx'
import MuscleCallouts from './MuscleCallouts.jsx'
import { createCalloutLayout, MUSCLE_CALLOUT_GROUPS } from './muscleCalloutCatalog.js'
import { useReducedMotion, useAnalysisSync, useScannerSequence } from '../hooks/index.js'

const cameraTargetY = -0.165
const cameraTarget = [0, cameraTargetY, 0]
const cameraViews = {
  front: [0, cameraTargetY, 9.6],
  side: [9.6, cameraTargetY, 0],
  back: [0, cameraTargetY, -9.6],
}

function PhysiqueViewport({
  modelUrl,
  modelConfig,
  physique,
  regionValues,
  hoveredRegion,
  selectedRegion,
  onRegionHover,
  onRegionSelect,
  previewPlaying,
  scrollProgressRef,
  scrollProgress = 0,
  analysisStage = 0,
  isSettled = false,
  onResetToLab,
}) {
  const stageRef = useRef(null)
  const controlsRef = useRef(null)
  const interactionRef = useRef(false)
  const releasePendingRef = useRef(false)
  const viewTransitionRef = useRef(null)
  const calloutLayoutRef = useRef(createCalloutLayout())
  const [viewMode, setViewMode] = useState('front')
  const [renderDpr, setRenderDpr] = useState([1, 1.5])
  const [heatmapMode, setHeatmapMode] = useState(false)
  const [showMeasurements, setShowMeasurements] = useState(true)
  const reducedMotion = useReducedMotion()
  const [isInteracting, setIsInteracting] = useState(false)
  const [isViewTransitioning, setIsViewTransitioning] = useState(false)

  // Cinematic overhead scanner sequence manager
  const {
    scanState,
    liveValues: scannerValues,
    startScan,
    stopScan,
  } = useScannerSequence({
    reducedMotion,
    autoStartDelay: 350,
  })

  // Bridge 3D probe state → DOM UI layer via GSAP
  const { probeLevel } = useAnalysisSync({
    stageRef,
    hoveredRegion: hoveredRegion ?? scanState.activeRegion,
    selectedRegion,
    previewPlaying,
    reducedMotion,
  })

  // Listen for navigation / entrance scan triggers
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#physique-model') {
        startScan()
      }
    }
    const handleCustomTrigger = () => {
      startScan()
    }
    window.addEventListener('hashchange', handleHash)
    window.addEventListener('disciplined-af:trigger-scan', handleCustomTrigger)

    return () => {
      window.removeEventListener('hashchange', handleHash)
      window.removeEventListener('disciplined-af:trigger-scan', handleCustomTrigger)
    }
  }, [startScan])

  const handleControlStart = useCallback(() => {
    interactionRef.current = true
    releasePendingRef.current = false
    viewTransitionRef.current = null
    setIsViewTransitioning(false)
    setIsInteracting(true)
  }, [])

  const handleControlEnd = useCallback(() => {
    releasePendingRef.current = true
  }, [])

  const handleInteractionSettled = useCallback(() => {
    interactionRef.current = false
    releasePendingRef.current = false
    setIsInteracting(false)
    setIsViewTransitioning(false)
  }, [])

  const changeView = (mode) => {
    setViewMode(mode)
    const controls = controlsRef.current
    if (!controls) return
    interactionRef.current = true
    releasePendingRef.current = false
    viewTransitionRef.current = { position: cameraViews[mode], initialized: false, elapsed: 0 }
    setIsInteracting(true)
    setIsViewTransitioning(true)
  }

  return (
    <section
      ref={stageRef}
      className={`body-stage${hoveredRegion ? ' is-probing' : ''}${selectedRegion ? ' is-locked' : ''}${isViewTransitioning ? ' is-view-shifting' : ''}${scanState.isScanning ? ' is-scanning' : ''}`}
      id="physique-model"
      aria-label="Interactive 3D physique model"
    >
      <Canvas
        className="physique-canvas"
        camera={{ position: [0, 0.8, 17.5], fov: 36, near: 0.25, far: 70 }}
        dpr={renderDpr}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        shadows="percentage"
        onPointerMissed={() => onRegionHover(null)}
      >
        <PerformanceMonitor
          iterations={4}
          ms={200}
          threshold={0.6}
          bounds={() => [48, 58]}
          onDecline={() => setRenderDpr((current) => Math.max(1, typeof current === 'number' ? current - 0.12 : 1.1))}
          onIncline={() => setRenderDpr((current) => Math.min(1.5, typeof current === 'number' ? current + 0.05 : 1.5))}
        >
        <PhysiqueScene
          controlsRef={controlsRef}
          cameraTarget={cameraTarget}
          interactionRef={interactionRef}
          releasePendingRef={releasePendingRef}
          viewTransitionRef={viewTransitionRef}
          onInteractionSettled={handleInteractionSettled}
          onControlStart={handleControlStart}
          onControlEnd={handleControlEnd}
          isInteracting={isInteracting}
          isViewTransitioning={isViewTransitioning}
          modelUrl={modelUrl}
          modelConfig={modelConfig}
          physique={physique}
          regionValues={regionValues}
          viewMode={viewMode}
          heatmapMode={heatmapMode}
          hoveredRegion={hoveredRegion}
          onRegionHover={onRegionHover}
          onRegionSelect={onRegionSelect}
          reducedMotion={reducedMotion}
          selectedRegion={selectedRegion}
          previewPlaying={previewPlaying}
          calloutLayoutRef={calloutLayoutRef}
          scannerValues={scannerValues}
          activeScanRegion={scanState.activeRegion}
          scrollProgressRef={scrollProgressRef}
          isSettled={isSettled}
        />
        </PerformanceMonitor>
      </Canvas>

      <div className="stage-edge stage-edge-top-left" aria-hidden="true" />
      <div className="stage-edge stage-edge-top-right" aria-hidden="true" />
      <div className="stage-edge stage-edge-bottom-left" aria-hidden="true" />
      <div className="stage-edge stage-edge-bottom-right" aria-hidden="true" />
      <MuscleCallouts
        activeRegionId={selectedRegion ?? hoveredRegion ?? scanState.activeRegion}
        layoutRef={calloutLayoutRef}
        onSelectGroup={(groupId) => {
          const group = MUSCLE_CALLOUT_GROUPS.find((g) => g.id === groupId)
          if (group && group.regionIds.length > 0) {
            onRegionSelect(group.regionIds[0])
          }
        }}
        onHoverGroup={(groupId) => {
          if (!groupId) {
            onRegionHover(null)
          } else {
            const group = MUSCLE_CALLOUT_GROUPS.find((g) => g.id === groupId)
            if (group && group.regionIds.length > 0) {
              onRegionHover(group.regionIds[0])
            }
          }
        }}
        reducedMotion={reducedMotion}
      />
      {showMeasurements && viewMode === 'front' && (
        <div className="measurement-guides" aria-hidden="true">
          <span className="guide-shoulder">SHOULDER SPAN</span>
          <span className="guide-waist">WAIST / TORSO</span>
        </div>
      )}
      <HUD
        viewMode={viewMode}
        onViewChange={changeView}
        heatmapMode={heatmapMode}
        onHeatmapToggle={() => setHeatmapMode((active) => !active)}
        showMeasurements={showMeasurements}
        onMeasurementsToggle={() => setShowMeasurements((active) => !active)}
        probeLevel={probeLevel}
        reducedMotion={reducedMotion}
        scanState={scanState}
        onStartScan={startScan}
        onStopScan={stopScan}
        scrollProgress={scrollProgress}
        analysisStage={analysisStage}
        isSettled={isSettled}
        onResetToLab={onResetToLab}
      />
    </section>
  )
}

export default PhysiqueViewport