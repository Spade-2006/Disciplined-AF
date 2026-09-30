import { memo, useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Object3D } from 'three'
import { LAB_CYAN, LAB_CYAN_BRIGHT, LAB_RED, LAB_RED_DEEP } from './labPalette.js'

const platformLedCount = 32
// Physique soles rest at y=-2.74 and bob by ±0.006. The deck crown was at
// y=-2.7075, so the top plate sat in front of the feet. Shift the cap down
// and shorten the pedestal from the top so the foot of the base stays put.
const deckDrop = 0.047

function RingMarkers({ count, radius, y, size, color, metallic = false }) {
  const meshRef = useRef(null)

  useLayoutEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return
    const marker = new Object3D()
    for (let index = 0; index < count; index += 1) {
      const angle = (index / count) * Math.PI * 2
      marker.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
      marker.rotation.y = -angle
      marker.updateMatrix()
      mesh.setMatrixAt(index, marker.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
    mesh.computeBoundingSphere()
  }, [count, radius, y])

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={size} />
      {metallic
        ? <meshStandardMaterial color={color} metalness={0.72} roughness={0.36} />
        : <meshBasicMaterial color={color} toneMapped={false} />}
    </instancedMesh>
  )
}

function Platform({ reducedMotion, probeLevel = 0 }) {
  const edgeRef = useRef(null)
  const coreRef = useRef(null)
  const rotorRef = useRef(null)
  const indexRingRef = useRef(null)

  useFrame(({ clock }) => {
    if (reducedMotion) return
    const probe = probeLevel
    const pulse = 0.16 + (Math.sin(clock.elapsedTime * (0.82 + probe * 0.28)) + 1) * (0.07 + probe * 0.03)
    if (edgeRef.current) edgeRef.current.material.opacity = pulse + probe * 0.1
    if (coreRef.current) coreRef.current.material.emissiveIntensity = 0.07 + pulse * 0.14 + probe * 0.06
    if (rotorRef.current) rotorRef.current.rotation.y = clock.elapsedTime * (0.035 + probe * 0.028)
    if (indexRingRef.current) indexRingRef.current.rotation.y = -clock.elapsedTime * (0.018 + probe * 0.012)
  })

  return (
    <group name="circular-analysis-platform" position={[0, -2.84, 0]}>
      <mesh castShadow receiveShadow position={[0, -deckDrop / 2, 0]}>
        <cylinderGeometry args={[1.86, 2.02, 0.22 - deckDrop, 96]} />
        <meshStandardMaterial color="#303739" metalness={0.82} roughness={0.34} />
      </mesh>
      <mesh position={[0, -0.085, 0]}>
        <cylinderGeometry args={[1.96, 2.05, 0.07, 96]} />
        <meshStandardMaterial color="#202628" metalness={0.84} roughness={0.39} />
      </mesh>
      <mesh position={[0, 0.018, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.985, 0.018, 8, 96]} />
        <meshStandardMaterial color="#758082" metalness={0.78} roughness={0.32} />
      </mesh>
      <group position={[0, -deckDrop, 0]}>
        <mesh position={[0, 0.115, 0]}>
          <cylinderGeometry args={[1.84, 1.86, 0.035, 96]} />
          <meshStandardMaterial color="#465052" metalness={0.78} roughness={0.38} />
        </mesh>
        <mesh ref={coreRef} position={[0, 0.105, 0]}>
          <cylinderGeometry args={[1.5, 1.55, 0.025, 96]} />
          <meshStandardMaterial color="#141a1b" emissive={LAB_RED_DEEP} emissiveIntensity={0.1} metalness={0.58} roughness={0.38} />
        </mesh>
        <mesh ref={edgeRef} position={[0, 0.118, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.72, 0.022, 8, 96]} />
          <meshBasicMaterial color={LAB_RED} toneMapped={false} transparent opacity={0.28} />
        </mesh>
        <mesh position={[0, 0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.88, 0.012, 6, 96]} />
          <meshBasicMaterial color={LAB_CYAN_BRIGHT} transparent opacity={0.42} />
        </mesh>
        <group ref={rotorRef} position={[0, 0.15, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.58, 0.009, 6, 96]} />
            <meshBasicMaterial color={LAB_CYAN} transparent opacity={0.58} />
          </mesh>
          <RingMarkers count={platformLedCount} radius={1.86} y={-0.01} size={[0.055, 0.018, 0.014]} color={LAB_CYAN_BRIGHT} />
          <RingMarkers count={24} radius={1.66} y={0} size={[0.15, 0.026, 0.055]} color="#626e70" metallic />
        </group>
        <group ref={indexRingRef} position={[0, 0.15, 0]}>
          <RingMarkers count={8} radius={1.43} y={0} size={[0.11, 0.018, 0.035]} color={LAB_RED} />
        </group>
        <pointLight position={[0, 0.32, 0]} intensity={0.55} color={LAB_CYAN_BRIGHT} distance={3.5} />
      </group>
    </group>
  )
}

export default memo(Platform)