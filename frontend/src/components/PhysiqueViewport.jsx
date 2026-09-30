import { useCallback, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import PhysiqueScene from './PhysiqueScene.jsx'
import HUD from './HUD.jsx'
import MuscleCallouts from './MuscleCallouts.jsx'
import { createCalloutLayout } from './muscleCalloutCatalog.js'

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
}) {
  const controlsRef = useRef(null)
  const interactionRef = useRef(false)
  const releasePendingRef = useRef(false)
  const viewTransitionRef = useRef(null)
  const calloutLayoutRef = useRef(createCalloutLayout())
  const [viewMode, setViewMode] = useState('front')
  const [heatmapMode, setHeatmapMode] = useState(false)
  const [showMeasurements, setShowMeasurements] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isViewTransitioning, setIsViewTransitioning] = useState(false)

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
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
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
    <section className={`body-stage${hoveredRegion ? ' is-probing' : ''}${selectedRegion ? ' is-locked' : ''}${isViewTransitioning ? ' is-view-shifting' : ''}`} id="physique-model" aria-label="Interactive 3D physique model">
      <Canvas
        className="physique-canvas"
        camera={{ position: cameraViews.front, fov: 32, near: 0.1, far: 80 }}
        dpr={[1, 1.7]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        shadows="variance"
        onPointerMissed={() => onRegionHover(null)}
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
        />
      </Canvas>

      <div className="stage-edge stage-edge-top" aria-hidden="true" />
      <MuscleCallouts activeRegionId={selectedRegion ?? hoveredRegion} layoutRef={calloutLayoutRef} />
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
      />
    </section>
  )
}

export default PhysiqueViewport