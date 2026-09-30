import { memo, useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Object3D } from 'three'
import { LAB_CYAN, LAB_CYAN_BRIGHT, LAB_CYAN_LIGHT, LAB_RED } from './labPalette.js'

const scannerClampCount = 8

function ScannerClamps() {
  const meshRef = useRef(null)

  useLayoutEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return
    const marker = new Object3D()
    for (let index = 0; index < scannerClampCount; index += 1) {
      const angle = (index / scannerClampCount) * Math.PI * 2
      marker.position.set(Math.cos(angle) * 2.13, Math.sin(angle) * 2.13, 0.04)
      marker.rotation.z = angle
      marker.updateMatrix()
      mesh.setMatrixAt(index, marker.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
    mesh.computeBoundingSphere()
  }, [])

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, scannerClampCount]}>
      <boxGeometry args={[0.28, 0.1, 0.2]} />
      <meshStandardMaterial color="#30393b" metalness={0.78} roughness={0.4} />
    </instancedMesh>
  )
}

function Scanner({ reducedMotion, probeLevel = 0 }) {
  const gantryRef = useRef(null)
  const beamRef = useRef(null)
  const beamLightRef = useRef(null)
  const cyanRingRef = useRef(null)
  const elapsed = useRef(0)

  useFrame((_, delta) => {
    if (reducedMotion) return
    const probe = probeLevel
    const ease = 1 - Math.exp(-delta * 7)
    elapsed.current += delta * (1 + probe * 0.55)
    if (gantryRef.current) gantryRef.current.rotation.y = Math.sin(elapsed.current * 0.16) * (0.018 + probe * 0.01) + elapsed.current * 0.012
    if (beamRef.current) beamRef.current.position.y = 2.6 * Math.cos(elapsed.current * 0.42) - 0.05
    if (beamLightRef.current) {
      const target = 0.72 + probe * 0.38
      beamLightRef.current.intensity += (target - beamLightRef.current.intensity) * ease
    }
    if (cyanRingRef.current?.material) {
      const target = 0.52 + probe * 0.18
      cyanRingRef.current.material.opacity += (target - cyanRingRef.current.material.opacity) * ease
    }
  })

  return (
    <group name="overhead-circular-scanner">
      <group ref={gantryRef} position={[0, 3.24, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.15, 0.11, 16, 128]} />
          <meshStandardMaterial color="#4b5557" metalness={0.84} roughness={0.32} />
        </mesh>
        <mesh>
          <torusGeometry args={[1.87, 0.055, 10, 128]} />
          <meshStandardMaterial color="#353f41" metalness={0.86} roughness={0.34} />
        </mesh>
        <mesh position={[0, 0, -0.02]}>
          <torusGeometry args={[1.98, 0.036, 8, 128]} />
          <meshBasicMaterial color={LAB_RED} toneMapped={false} />
        </mesh>
        <mesh ref={cyanRingRef} position={[0, 0, 0.035]}>
          <torusGeometry args={[2.29, 0.018, 8, 128]} />
          <meshBasicMaterial color={LAB_CYAN_BRIGHT} transparent opacity={0.52} />
        </mesh>
        <mesh position={[0, 0, 0.052]}>
          <torusGeometry args={[1.71, 0.014, 8, 128]} />
          <meshBasicMaterial color={LAB_CYAN_LIGHT} toneMapped={false} transparent opacity={0.62} />
        </mesh>
        <ScannerClamps />
      </group>

      <spotLight position={[0, 3.1, 0.35]} angle={0.58} penumbra={0.92} intensity={7.2} color={LAB_CYAN_LIGHT} distance={8} />

      <group ref={beamRef} position={[0, 0, 0.84]}>
        <pointLight ref={beamLightRef} position={[0, 0, 0]} intensity={0.72} color={LAB_CYAN_BRIGHT} distance={3.2} />
        <mesh>
          <planeGeometry args={[2.5, 0.012]} />
          <meshBasicMaterial color={LAB_CYAN_LIGHT} toneMapped={false} transparent opacity={0.38} />
        </mesh>
        <mesh position={[0, 0, -0.006]}>
          <planeGeometry args={[2.8, 0.12]} />
          <meshBasicMaterial color={LAB_CYAN} toneMapped={false} transparent opacity={0.04} depthWrite={false} />
        </mesh>
        <mesh position={[0, 0, -0.012]}>
          <planeGeometry args={[2.9, 0.075]} />
          <meshBasicMaterial color={LAB_RED} toneMapped={false} transparent opacity={0.028} depthWrite={false} />
        </mesh>
      </group>
      <mesh position={[0, 0, -1.9]}>
        <cylinderGeometry args={[0.82, 1.7, 5.6, 32, 1, true]} />
        <meshBasicMaterial color={LAB_CYAN} toneMapped={false} transparent opacity={0.024} depthWrite={false} />
      </mesh>
    </group>
  )
}

export default memo(Scanner)