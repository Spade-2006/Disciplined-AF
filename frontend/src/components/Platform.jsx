import { memo, useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Object3D } from 'three'

const platformLedCount = 32

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

function Platform({ reducedMotion }) {
  const edgeRef = useRef(null)
  const coreRef = useRef(null)
  const rotorRef = useRef(null)
  const indexRingRef = useRef(null)

  useFrame(({ clock }) => {
    if (reducedMotion) return
    const pulse = 0.16 + (Math.sin(clock.elapsedTime * 0.82) + 1) * 0.07
    if (edgeRef.current) edgeRef.current.material.opacity = pulse
    if (coreRef.current) coreRef.current.material.emissiveIntensity = 0.07 + pulse * 0.14
    if (rotorRef.current) rotorRef.current.rotation.y = clock.elapsedTime * 0.035
    if (indexRingRef.current) indexRingRef.current.rotation.y = -clock.elapsedTime * 0.018
  })

  return (
    <group name="circular-analysis-platform" position={[0, -2.84, 0]}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.86, 2.02, 0.22, 96]} />
        <meshStandardMaterial color="#303739" metalness={0.82} roughness={0.34} />
      </mesh>
      <mesh position={[0, -0.085, 0]}>
        <cylinderGeometry args={[1.96, 2.05, 0.07, 96]} />
        <meshStandardMaterial color="#202628" metalness={0.84} roughness={0.39} />
      </mesh>
      <mesh position={[0, 0.115, 0]}>
        <cylinderGeometry args={[1.84, 1.86, 0.035, 96]} />
        <meshStandardMaterial color="#465052" metalness={0.78} roughness={0.38} />
      </mesh>
      <mesh ref={coreRef} position={[0, 0.105, 0]}>
        <cylinderGeometry args={[1.5, 1.55, 0.025, 96]} />
        <meshStandardMaterial color="#141a1b" emissive="#a3222c" emissiveIntensity={0.1} metalness={0.58} roughness={0.38} />
      </mesh>
      <mesh ref={edgeRef} position={[0, 0.118, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.72, 0.022, 8, 96]} />
        <meshBasicMaterial color="#d8414b" toneMapped={false} transparent opacity={0.28} />
      </mesh>
      <mesh position={[0, 0.14, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.88, 0.012, 6, 96]} />
        <meshBasicMaterial color="#d7e7e5" transparent opacity={0.48} />
      </mesh>
      <mesh position={[0, 0.018, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.985, 0.018, 8, 96]} />
        <meshStandardMaterial color="#758082" metalness={0.78} roughness={0.32} />
      </mesh>
      <group ref={rotorRef} position={[0, 0.15, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.58, 0.009, 6, 96]} />
          <meshBasicMaterial color="#b9dfe0" transparent opacity={0.62} />
        </mesh>
        <RingMarkers count={platformLedCount} radius={1.86} y={-0.01} size={[0.055, 0.018, 0.014]} color="#b9dfe0" />
        <RingMarkers count={24} radius={1.66} y={0} size={[0.15, 0.026, 0.055]} color="#626e70" metallic />
      </group>
      <group ref={indexRingRef} position={[0, 0.15, 0]}>
        <RingMarkers count={8} radius={1.43} y={0} size={[0.11, 0.018, 0.035]} color="#a93640" />
      </group>
      <pointLight position={[0, 0.42, 0]} intensity={0.38} color="#cdebee" distance={2.6} />
    </group>
  )
}

export default memo(Platform)