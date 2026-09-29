import { memo, useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Object3D } from 'three'

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

function Scanner({ reducedMotion }) {
  const gantryRef = useRef(null)
  const beamRef = useRef(null)
  const elapsed = useRef(0)

  useFrame((_, delta) => {
    if (reducedMotion) return
    elapsed.current += delta
    if (gantryRef.current) gantryRef.current.rotation.y = Math.sin(elapsed.current * 0.16) * 0.018 + elapsed.current * 0.012
    if (beamRef.current) beamRef.current.position.y = 2.6 * Math.cos(elapsed.current * 0.42) - 0.05
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
          <meshBasicMaterial color="#c93641" toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, 0.035]}>
          <torusGeometry args={[2.29, 0.018, 8, 128]} />
          <meshBasicMaterial color="#c5d9d8" transparent opacity={0.58} />
        </mesh>
        <mesh position={[0, 0, 0.052]}>
          <torusGeometry args={[1.71, 0.014, 8, 128]} />
          <meshBasicMaterial color="#e3f1f1" toneMapped={false} transparent opacity={0.72} />
        </mesh>
        <ScannerClamps />
      </group>

      <spotLight position={[0, 3.1, 0]} angle={0.58} penumbra={0.92} intensity={7} color="#d9f2f3" distance={7} />

      <group ref={beamRef} position={[0, 0, 0.84]}>
        <mesh>
          <planeGeometry args={[2.5, 0.012]} />
          <meshBasicMaterial color="#e4f2f2" toneMapped={false} transparent opacity={0.4} />
        </mesh>
        <mesh position={[0, 0, -0.012]}>
          <planeGeometry args={[2.9, 0.075]} />
          <meshBasicMaterial color="#cb3b46" transparent opacity={0.045} depthWrite={false} />
        </mesh>
      </group>
      <mesh position={[0, 0, -1.9]}>
        <cylinderGeometry args={[0.82, 1.7, 5.6, 32, 1, true]} />
        <meshBasicMaterial color="#c3e5e5" transparent opacity={0.018} depthWrite={false} />
      </mesh>
    </group>
  )
}

export default memo(Scanner)