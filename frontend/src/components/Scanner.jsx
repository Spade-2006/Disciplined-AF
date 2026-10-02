import { memo, useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { DoubleSide, Object3D } from 'three'
import { LAB_CYAN, LAB_CYAN_BRIGHT, LAB_CYAN_LIGHT, LAB_RED, LAB_RED_BRIGHT } from './labPalette.js'

const scannerClampCount = 12

function ScannerClamps() {
  const meshRef = useRef(null)

  useLayoutEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return
    const marker = new Object3D()
    for (let index = 0; index < scannerClampCount; index += 1) {
      const angle = (index / scannerClampCount) * Math.PI * 2
      marker.position.set(Math.cos(angle) * 2.18, Math.sin(angle) * 2.18, 0.04)
      marker.rotation.z = angle
      marker.updateMatrix()
      mesh.setMatrixAt(index, marker.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
    mesh.computeBoundingSphere()
  }, [])

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, scannerClampCount]}>
      <boxGeometry args={[0.22, 0.09, 0.16]} />
      <meshStandardMaterial color="#2d3537" metalness={0.82} roughness={0.35} />
    </instancedMesh>
  )
}

function TravelerSensors() {
  const meshRef = useRef(null)
  const count = 6

  useLayoutEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return
    const marker = new Object3D()
    for (let index = 0; index < count; index += 1) {
      const angle = (index / count) * Math.PI * 2
      marker.position.set(Math.cos(angle) * 2.06, 0, Math.sin(angle) * 2.06)
      marker.rotation.y = -angle
      marker.updateMatrix()
      mesh.setMatrixAt(index, marker.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
    mesh.computeBoundingSphere()
  }, [])

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.12, 0.05, 0.16]} />
      <meshStandardMaterial color="#1a2022" metalness={0.88} roughness={0.24} />
    </instancedMesh>
  )
}

function Scanner({ reducedMotion, probeLevel = 0, scannerValues }) {
  const gantryRef = useRef(null)
  const travelerRef = useRef(null)
  const cyanBeamLightRef = useRef(null)
  const redBeamLightRef = useRef(null)
  const cuttingRingRef = useRef(null)
  const redReticleRef = useRef(null)
  const cyanDiscRef = useRef(null)
  const volumeCurtainRef = useRef(null)
  const gantryCyanRingRef = useRef(null)
  const gantryRedRingRef = useRef(null)
  const elapsed = useRef(0)


  useFrame((_, delta) => {
    if (reducedMotion) return
    elapsed.current += delta

    const time = elapsed.current
    const live = scannerValues?.current
    const isScanning = live?.isScanning ?? false

    // Target Y: driven by live scanner sequence if active, otherwise subtle standby float
    const targetY = isScanning
      ? live.scanY
      : 2.45 + Math.sin(time * 0.9) * 0.06

    const redTarget = isScanning
      ? live.redIntensity
      : probeLevel === 2 ? 1.4 : probeLevel === 1 ? 0.6 : 0.15

    const cyanTarget = isScanning
      ? live.cyanIntensity
      : 0.85 + (probeLevel > 0 ? 0.35 : 0)

    const beamOpTarget = isScanning
      ? live.beamOpacity
      : probeLevel > 0 ? 0.65 : 0.35

    const ease = 1 - Math.exp(-delta * 14)

    // 1. Move the physical scanning traveler ring
    if (travelerRef.current) {
      travelerRef.current.position.y += (targetY - travelerRef.current.position.y) * ease
      travelerRef.current.rotation.y = time * 0.18 + (isScanning ? live.progress * Math.PI : 0)
    }

    // 2. Overhead Gantry subtle mechanical stabilization rotation
    if (gantryRef.current) {
      gantryRef.current.rotation.z = Math.sin(time * 0.22) * 0.015
    }

    // 3. Volumetric light curtain connecting gantry (y=3.24) down to traveler Y
    if (volumeCurtainRef.current && travelerRef.current) {
      const gantryY = 3.24
      const curY = travelerRef.current.position.y
      const height = Math.max(0.1, gantryY - curY)
      const midY = curY + height / 2

      volumeCurtainRef.current.position.y = midY
      volumeCurtainRef.current.scale.set(1, height / 2.8, 1)

      if (volumeCurtainRef.current.material) {
        const targetOp = isScanning ? 0.05 + live.progress * 0.03 : 0.025
        volumeCurtainRef.current.material.opacity += (targetOp - volumeCurtainRef.current.material.opacity) * ease
      }
    }

    // 4. Synchronized Traveler Lights (Red Diagnostic & Cyan Ambient)
    if (cyanBeamLightRef.current) {
      cyanBeamLightRef.current.intensity += (cyanTarget * 1.6 - cyanBeamLightRef.current.intensity) * ease
    }
    if (redBeamLightRef.current) {
      redBeamLightRef.current.intensity += (redTarget * 2.2 - redBeamLightRef.current.intensity) * ease
    }

    // 5. Planar Laser Cutting Edge & Reticle Opacity
    if (cuttingRingRef.current?.material) {
      const op = Math.min(1, beamOpTarget * 0.95)
      cuttingRingRef.current.material.opacity += (op - cuttingRingRef.current.material.opacity) * ease
    }

    if (cyanDiscRef.current?.material) {
      const op = isScanning ? 0.16 * beamOpTarget : 0.04
      cyanDiscRef.current.material.opacity += (op - cyanDiscRef.current.material.opacity) * ease
    }

    if (redReticleRef.current?.material) {
      const op = Math.min(1, redTarget * 0.72)
      redReticleRef.current.material.opacity += (op - redReticleRef.current.material.opacity) * ease
    }

    // 6. Gantry Ring Illuminations
    if (gantryCyanRingRef.current?.material) {
      const gOp = 0.5 + Math.sin(time * 1.5) * 0.15 + (isScanning ? 0.3 : 0)
      gantryCyanRingRef.current.material.opacity += (gOp - gantryCyanRingRef.current.material.opacity) * ease
    }
    if (gantryRedRingRef.current?.material) {
      const rOp = 0.35 + (isScanning ? redTarget * 0.4 : 0)
      gantryRedRingRef.current.material.opacity += (rOp - gantryRedRingRef.current.material.opacity) * ease
    }
  })

  return (
    <group name="overhead-cinematic-scanner">
      {/* ─── FIXED OVERHEAD GANTRY APPARATUS (Y = 3.24) ─── */}
      <group position={[0, 3.24, 0]}>
        <group ref={gantryRef} rotation={[Math.PI / 2, 0, 0]}>
          {/* Main heavy structural ring */}
          <mesh>
            <torusGeometry args={[2.22, 0.10, 16, 128]} />
            <meshStandardMaterial color="#384244" metalness={0.86} roughness={0.28} />
          </mesh>

          {/* Inner chassis ring */}
          <mesh>
            <torusGeometry args={[1.92, 0.05, 12, 128]} />
            <meshStandardMaterial color="#262f31" metalness={0.88} roughness={0.32} />
          </mesh>

          {/* Warning red emitter ring */}
          <mesh ref={gantryRedRingRef} position={[0, 0, -0.018]}>
            <torusGeometry args={[2.02, 0.026, 8, 128]} />
            <meshBasicMaterial color={LAB_RED} toneMapped={false} transparent opacity={0.4} />
          </mesh>

          {/* Cyan laser glow ring */}
          <mesh ref={gantryCyanRingRef} position={[0, 0, 0.028]}>
            <torusGeometry args={[2.34, 0.016, 8, 128]} />
            <meshBasicMaterial color={LAB_CYAN_BRIGHT} toneMapped={false} transparent opacity={0.65} />
          </mesh>

          {/* Inner focus aperture */}
          <mesh position={[0, 0, 0.045]}>
            <torusGeometry args={[1.76, 0.014, 8, 128]} />
            <meshBasicMaterial color={LAB_CYAN_LIGHT} toneMapped={false} transparent opacity={0.55} />
          </mesh>

          {/* Perimeter clamps */}
          <ScannerClamps />
        </group>

        {/* Downward projector spot beam */}
        <spotLight
          position={[0, 0.1, 0]}
          target-position={[0, -4, 0]}
          angle={0.54}
          penumbra={0.88}
          intensity={8.5}
          color={LAB_CYAN_LIGHT}
          distance={10}
        />
      </group>

      {/* ─── VOLUMETRIC SCANNER CONE / LIGHT CURTAIN ─── */}
      <mesh ref={volumeCurtainRef} position={[0, 1.8, 0]}>
        <cylinderGeometry args={[1.92, 2.05, 2.8, 36, 1, true]} />
        <meshBasicMaterial
          color={LAB_CYAN}
          toneMapped={false}
          transparent
          opacity={0.032}
          side={DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* ─── MOBILE SCANNER TRAVELER ASSEMBLY (Moves down the physique) ─── */}
      <group ref={travelerRef} position={[0, 2.5, 0]}>
        {/* Main circular carrier ring surrounding the physique */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.06, 0.042, 12, 96]} />
          <meshStandardMaterial color="#2d3537" metalness={0.88} roughness={0.25} />
        </mesh>

        {/* Inner laser emitter blade */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
          <torusGeometry args={[1.94, 0.016, 8, 96]} />
          <meshBasicMaterial color={LAB_CYAN_BRIGHT} toneMapped={false} />
        </mesh>

        {/* Sensor nodules */}
        <TravelerSensors />

        {/* Sharp Planar Laser Cutting Ring */}
        <mesh ref={cuttingRingRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <ringGeometry args={[1.90, 1.95, 64]} />
          <meshBasicMaterial
            color={LAB_CYAN_LIGHT}
            toneMapped={false}
            transparent
            opacity={0.65}
            side={DoubleSide}
            depthWrite={false}
          />
        </mesh>

        {/* Planar Laser Scan Sheet / Disc with radial grid lines */}
        <mesh ref={cyanDiscRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.002, 0]}>
          <ringGeometry args={[0.08, 1.90, 64]} />
          <meshBasicMaterial
            color={LAB_CYAN}
            toneMapped={false}
            transparent
            opacity={0.08}
            side={DoubleSide}
            depthWrite={false}
          />
        </mesh>

        {/* Red Diagnostic Analysis Reticle / Target Ring */}
        <mesh ref={redReticleRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
          <ringGeometry args={[0.35, 1.15, 48]} />
          <meshBasicMaterial
            color={LAB_RED_BRIGHT}
            toneMapped={false}
            transparent
            opacity={0.12}
            side={DoubleSide}
            depthWrite={false}
          />
        </mesh>

        {/* Dual High-Dynamic Lights attached to the Traveler */}
        <pointLight
          ref={cyanBeamLightRef}
          position={[0, 0.05, 0]}
          intensity={1.2}
          color={LAB_CYAN_BRIGHT}
          distance={4.8}
        />
        <pointLight
          ref={redBeamLightRef}
          position={[0, -0.05, 0]}
          intensity={0.4}
          color={LAB_RED_BRIGHT}
          distance={3.8}
        />
      </group>
    </group>
  )
}

export default memo(Scanner)