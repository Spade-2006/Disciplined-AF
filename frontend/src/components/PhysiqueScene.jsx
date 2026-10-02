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
  isSettled,
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

    if (!interactionRef.current && isSettled) {
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

/**
 * Smoothly ramps all scene lights from near-zero to their target intensities
 * on first render, simulating a lab environment powering up.
 */
const LIGHT_TARGETS = [3.35, 1.05, 2.7, 1.05, 0.58]
const RAMP_SPEED = 1.6 // higher = faster ramp

function LightRampUp({ refs, reducedMotion }) {
  const elapsed = useRef(0)
  const done = useRef(reducedMotion)

  useFrame((_, delta) => {
    if (done.current) return
    elapsed.current = Math.min(elapsed.current + delta * RAMP_SPEED, 1)
    const t = elapsed.current
    // Ease-out curve: t * (2 - t)
    const eased = t * (2 - t)

    refs.forEach((ref, i) => {
      if (ref.current) ref.current.intensity = LIGHT_TARGETS[i] * eased
    })

    if (t >= 1) done.current = true
  })

  return null
}

function CinematicCameraController({
  controlsRef,
  cameraTarget,
  scrollCameraRef,
  scrollProgressRef,
  isInteracting,
  isViewTransitioning,
  reducedMotion,
}) {
  const desiredCam = useRef(new Vector3(0, cameraTarget[1] + 0.45, 9.6))
  const desiredTarget = useRef(new Vector3(0, cameraTarget[1], 0))

  useFrame((state, delta) => {
    if (reducedMotion) return
    const controls = controlsRef.current

    // If user is actively interacting with OrbitControls (dragging 360), let OrbitControls handle camera
    if (isInteracting || isViewTransitioning) return

    const s = scrollCameraRef?.current
    if (!s) return

    desiredCam.current.set(s.x, s.y, s.z)
    desiredTarget.current.set(s.targetX, s.targetY, s.targetZ)

    const easeSpeed = 1 - Math.exp(-delta * 6.5)
    state.camera.position.lerp(desiredCam.current, easeSpeed)

    if (controls) {
      controls.target.lerp(desiredTarget.current, easeSpeed)
      controls.update()
    } else {
      state.camera.lookAt(desiredTarget.current)
    }

    if (s.fov && Math.abs(state.camera.fov - s.fov) > 0.05) {
      state.camera.fov += (s.fov - state.camera.fov) * easeSpeed
      state.camera.updateProjectionMatrix()
    }

    if (state.scene.fog && scrollProgressRef?.current !== undefined) {
      const p = scrollProgressRef.current
      const targetNear = 22 - p * 8
      const targetFar = 60 - p * 16
      state.scene.fog.near += (targetNear - state.scene.fog.near) * easeSpeed
      state.scene.fog.far += (targetFar - state.scene.fog.far) * easeSpeed
    }
  })

  return null
}

function SynchronizedScanLighting({
  keyLightRef,
  rimLightRef,
  redLightRef,
  basePointLightRef,
  scannerValues,
  reducedMotion,
  scrollProgressRef,
}) {
  useFrame((_, delta) => {
    if (reducedMotion) return
    const p = scrollProgressRef?.current ?? 0
    const ease = 1 - Math.exp(-delta * 8)

    // Dynamic key light sculpting
    if (keyLightRef?.current) {
      const targetKey = 2.4 + p * 1.1
      keyLightRef.current.intensity += (targetKey - keyLightRef.current.intensity) * ease
    }

    // Dynamic dual-tone rim definition
    if (rimLightRef?.current) {
      const targetRim = 0.8 + p * 0.55
      rimLightRef.current.intensity += (targetRim - rimLightRef.current.intensity) * ease
    }

    if (redLightRef?.current) {
      const targetRed = 0.75 + p * 0.65
      redLightRef.current.intensity += (targetRed - redLightRef.current.intensity) * ease
    }

    if (scannerValues?.current?.isScanning) {
      const live = scannerValues.current
      if (redLightRef?.current) redLightRef.current.intensity += live.redIntensity * 1.5
      if (rimLightRef?.current) rimLightRef.current.intensity += live.cyanIntensity * 0.95
      if (basePointLightRef?.current) basePointLightRef.current.intensity += live.platformSurge * 2.0
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
  scannerValues,
  activeScanRegion,
  scrollProgressRef,
  scrollCameraRef,
  isSettled = false,
}) {
  const keyLightRef = useRef(null)
  const rimLightRef = useRef(null)
  const backLightRef = useRef(null)
  const redLightRef = useRef(null)
  const basePointLightRef = useRef(null)
  const lightRefs = [keyLightRef, rimLightRef, backLightRef, redLightRef, basePointLightRef]

  return (
    <>
      <color attach="background" args={[LAB_VOID]} />
      <fog attach="fog" args={[LAB_VOID, 26, 68]} />
      <hemisphereLight args={['#dce6e6', '#15191a', 0.3]} />
      <directionalLight ref={keyLightRef} position={[-4, 6, 5]} intensity={2.4} color="#f3f1ec" />
      <directionalLight ref={rimLightRef} position={[4, 1.8, 4]} intensity={0.8} color={LAB_CYAN_BRIGHT} />
      <directionalLight ref={backLightRef} position={[0, 4, -4]} intensity={2.5} color={LAB_CYAN_LIGHT} />
      <directionalLight ref={redLightRef} position={[-4, 1, -3]} intensity={0.75} color={LAB_RED} />
      <pointLight ref={basePointLightRef} position={[0, -2.35, 0.5]} intensity={0.58} color={LAB_CYAN} distance={3.2} />
      <LightRampUp refs={lightRefs} reducedMotion={reducedMotion} />
      <SynchronizedScanLighting
        keyLightRef={keyLightRef}
        rimLightRef={rimLightRef}
        redLightRef={redLightRef}
        basePointLightRef={basePointLightRef}
        scannerValues={scannerValues}
        reducedMotion={reducedMotion}
        scrollProgressRef={scrollProgressRef}
      />
      <CinematicCameraController
        controlsRef={controlsRef}
        cameraTarget={cameraTarget}
        scrollCameraRef={scrollCameraRef}
        scrollProgressRef={scrollProgressRef}
        isInteracting={isInteracting}
        isViewTransitioning={isViewTransitioning}
        reducedMotion={reducedMotion}
      />
      <SceneReflections resolution={96} frames={1} background={false} environmentIntensity={0.48}>
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
        isSettled={isSettled}
      />
      <CameraViewTransition
        controlsRef={controlsRef}
        cameraTarget={cameraTarget}
        transitionRef={viewTransitionRef}
        onComplete={onInteractionSettled}
      />

      <Environment reducedMotion={reducedMotion} scrollProgressRef={scrollProgressRef} />
      <Scanner
        reducedMotion={reducedMotion}
        probeLevel={selectedRegion ? 2 : hoveredRegion ? 1 : 0}
        scannerValues={scannerValues}
        scrollProgressRef={scrollProgressRef}
      />
      <Platform
        reducedMotion={reducedMotion}
        probeLevel={selectedRegion ? 2 : hoveredRegion ? 1 : 0}
        scannerValues={scannerValues}
        scrollProgressRef={scrollProgressRef}
      />
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
            hoveredRegion={hoveredRegion ?? activeScanRegion}
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
        dampingFactor={0.08}
        rotateSpeed={0.62}
        zoomSpeed={1.2}
        enableZoom={true}
        autoRotate={!isInteracting && !reducedMotion && previewPlaying}
        autoRotateSpeed={0.24}
        minDistance={3.5}
        maxDistance={24.0}
        minPolarAngle={0.4}
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