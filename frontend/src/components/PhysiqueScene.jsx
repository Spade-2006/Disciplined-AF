import { Suspense, memo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment as SceneReflections, Lightformer, OrbitControls, Sparkles } from '@react-three/drei'
import { Quaternion, Vector3 } from 'three'
import GLBPhysique from './GLBPhysique.jsx'
import Environment from './Environment.jsx'
import Platform from './Platform.jsx'
import Scanner from './Scanner.jsx'
import { LAB_CYAN, LAB_CYAN_BRIGHT, LAB_CYAN_LIGHT, LAB_RED, LAB_VOID } from './labPalette.js'

const sparkleScale = [8, 7, 5]
const MemoSparkles = memo(Sparkles)

function MouseInfluence({
  controlsRef,
  cameraTarget,
  interactionRef,
  releasePendingRef,
  onInteractionSettled,
}) {
  const lightRef = useRef(null)
  const target = useRef(new Vector3(...cameraTarget))
  const desiredTarget = useRef(new Vector3(...cameraTarget))
  const desiredLight = useRef(new Vector3())
  const previousPosition = useRef(new Vector3())
  const previousQuaternion = useRef(new Quaternion())
  const hasCameraSample = useRef(false)
  const settleTime = useRef(0)

  useFrame(({ pointer, camera }, delta) => {
    const controls = controlsRef.current
    if (!controls) return

    const cameraMoving = hasCameraSample.current && (
      previousPosition.current.distanceToSquared(camera.position) > 1e-8
      || previousQuaternion.current.angleTo(camera.quaternion) > 1e-5
    )
    previousPosition.current.copy(camera.position)
    previousQuaternion.current.copy(camera.quaternion)
    hasCameraSample.current = true

    if (interactionRef.current && releasePendingRef.current) {
      settleTime.current = cameraMoving ? 0 : settleTime.current + delta
      if (settleTime.current >= 0.22) onInteractionSettled()
    } else {
      settleTime.current = 0
    }

    const easing = 1 - Math.exp(-delta * 2.4)
    desiredLight.current.set(pointer.x * 3.5, pointer.y * 2.8 + 1, 4)
    lightRef.current?.position.lerp(desiredLight.current, easing)

    if (!interactionRef.current) {
      desiredTarget.current.set(pointer.x * 0.035, cameraTarget[1] + pointer.y * 0.025, cameraTarget[2])
      target.current.lerp(desiredTarget.current, easing)
      controls.target.copy(target.current)
    }
  })

  return <pointLight ref={lightRef} position={[0, 1, 4]} intensity={0.58} color={LAB_CYAN} distance={9} />
}

function IdleMotion({ children, reducedMotion, isInteracting }) {
  const modelRef = useRef(null)
  const elapsed = useRef(0)

  useFrame((_, delta) => {
    if (!modelRef.current || reducedMotion || isInteracting) return
    elapsed.current += delta
    const time = elapsed.current
    modelRef.current.position.y = Math.sin(time * 0.72) * 0.006
  })

  return <group ref={modelRef}>{children}</group>
}

function CameraViewTransition({ controlsRef, cameraTarget, transitionRef, onComplete }) {
  const startPosition = useRef(new Vector3())
  const startTarget = useRef(new Vector3())
  const endPosition = useRef(new Vector3())
  const endTarget = useRef(new Vector3())

  useFrame((_, delta) => {
    const transition = transitionRef.current
    const controls = controlsRef.current
    if (!transition || !controls) return

    if (!transition.initialized) {
      startPosition.current.copy(controls.object.position)
      startTarget.current.copy(controls.target)
      endPosition.current.fromArray(transition.position)
      endTarget.current.fromArray(cameraTarget)
      transition.initialized = true
    }

    transition.elapsed = Math.min(transition.elapsed + delta, 0.42)
    const progress = transition.elapsed / 0.42
    const eased = progress * progress * (3 - 2 * progress)
    controls.object.position.lerpVectors(startPosition.current, endPosition.current, eased)
    controls.target.lerpVectors(startTarget.current, endTarget.current, eased)
    controls.update()

    if (progress >= 1) {
      controls.saveState()
      transitionRef.current = null
      onComplete()
    }
  })

  return null
}

function PhysiqueScene({
  controlsRef,
  cameraTarget,
  interactionRef,
  releasePendingRef,
  viewTransitionRef,
  onInteractionSettled,
  onControlStart,
  onControlEnd,
  isInteracting,
  isViewTransitioning,
  modelUrl,
  modelConfig,
  physique,
  regionValues,
  viewMode,
  heatmapMode,
  hoveredRegion,
  onRegionHover,
  onRegionSelect,
  reducedMotion,
  selectedRegion,
  previewPlaying,
  calloutLayoutRef,
}) {
  return (
    <>
      <color attach="background" args={[LAB_VOID]} />
      <fog attach="fog" args={[LAB_VOID, 13, 36]} />
      <hemisphereLight args={['#dce6e6', '#15191a', 0.3]} />
      <directionalLight position={[-4, 6, 5]} intensity={3.35} color="#f3f1ec" />
      <directionalLight position={[4, 1.8, 4]} intensity={1.05} color={LAB_CYAN_BRIGHT} />
      <directionalLight position={[0, 4, -4]} intensity={2.7} color={LAB_CYAN_LIGHT} />
      <directionalLight position={[-4, 1, -3]} intensity={1.05} color={LAB_RED} />
      <pointLight position={[0, -2.35, 0.5]} intensity={0.58} color={LAB_CYAN} distance={3.2} />
      <SceneReflections resolution={128} frames={1} background={false} environmentIntensity={0.48}>
        <Lightformer form="rect" intensity={1.15} color="#f2f0ea" position={[-4, 3, 4]} rotation={[0, 0.55, 0]} scale={[3.5, 6, 1]} />
        <Lightformer form="rect" intensity={0.72} color={LAB_CYAN} position={[4, 1, 3]} rotation={[0, -0.55, 0]} scale={[2, 5, 1]} />
        <Lightformer form="rect" intensity={0.38} color={LAB_RED} position={[-4, 0, -2]} rotation={[0, Math.PI / 2, 0]} scale={[1.2, 4.5, 1]} />
      </SceneReflections>
      <MouseInfluence
        controlsRef={controlsRef}
        cameraTarget={cameraTarget}
        interactionRef={interactionRef}
        releasePendingRef={releasePendingRef}
        onInteractionSettled={onInteractionSettled}
      />
      <CameraViewTransition
        controlsRef={controlsRef}
        cameraTarget={cameraTarget}
        transitionRef={viewTransitionRef}
        onComplete={onInteractionSettled}
      />

      <Environment reducedMotion={reducedMotion} />
      <Scanner reducedMotion={reducedMotion} probeLevel={selectedRegion ? 2 : hoveredRegion ? 1 : 0} />
      <Platform reducedMotion={reducedMotion} probeLevel={selectedRegion ? 2 : hoveredRegion ? 1 : 0} />
      <MemoSparkles
        count={40}
        color={LAB_CYAN_LIGHT}
        opacity={0.12}
        size={0.42}
        scale={sparkleScale}
        speed={reducedMotion ? 0 : 0.035}
        noise={0.4}
      />

      <IdleMotion reducedMotion={reducedMotion} isInteracting={isInteracting}>
        <Suspense fallback={null}>
          <GLBPhysique
            url={modelUrl}
            modelConfig={modelConfig}
            physique={physique}
            regionValues={regionValues}
            viewMode={viewMode}
            heatmapMode={heatmapMode}
            hoveredRegion={hoveredRegion}
            selectedRegion={selectedRegion}
            onHover={onRegionHover}
            onSelect={onRegionSelect}
            calloutLayoutRef={calloutLayoutRef}
            reducedMotion={reducedMotion}
          />
        </Suspense>
      </IdleMotion>

      <OrbitControls
        ref={controlsRef}
        makeDefault
        target={cameraTarget}
        enableDamping
        dampingFactor={0.075}
        rotateSpeed={0.62}
        zoomSpeed={0.72}
        autoRotate={!isInteracting && !reducedMotion}
        autoRotateSpeed={previewPlaying ? 0.24 : 0.08}
        minDistance={9.35}
        maxDistance={11.5}
        minPolarAngle={0.48}
        maxPolarAngle={Math.PI / 2 + 0.18}
        enablePan={false}
        enabled={!isViewTransitioning}
        onStart={onControlStart}
        onEnd={onControlEnd}
      />
    </>
  )
}

export default memo(PhysiqueScene)