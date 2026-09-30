import { memo, useLayoutEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Object3D } from 'three'
import { LAB_CYAN, LAB_RED } from './labPalette.js'

const wallAngles = [0, Math.PI / 2, Math.PI, Math.PI * 1.5]
const wallRadius = 12.58
const trussY = 4.48
const trussSpan = 6.35
const slatDummy = new Object3D()

function SignalStrip({ position, size, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  )
}

function VentBank({ position }) {
  const meshRef = useRef(null)

  useLayoutEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return
    for (let index = 0; index < 7; index += 1) {
      slatDummy.position.set(0, (index - 3) * 0.1, 0)
      slatDummy.updateMatrix()
      mesh.setMatrixAt(index, slatDummy.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
    mesh.computeBoundingSphere()
  }, [])

  return (
    <group position={position}>
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[0.72, 0.82, 0.05]} />
        <meshStandardMaterial color="#141a1b" metalness={0.7} roughness={0.42} />
      </mesh>
      <instancedMesh ref={meshRef} args={[undefined, undefined, 7]} position={[0, 0, -0.02]}>
        <boxGeometry args={[0.58, 0.035, 0.04]} />
        <meshStandardMaterial color="#3a4345" metalness={0.78} roughness={0.32} />
      </instancedMesh>
    </group>
  )
}

function WallBay({ fanRef }) {
  return (
    <group position={[0, 0.15, -0.22]}>
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[2.55, 3.15, 0.52]} />
        <meshStandardMaterial color="#171d1e" metalness={0.78} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.38, -0.22]}>
        <boxGeometry args={[2.28, 2.82, 0.08]} />
        <meshStandardMaterial color="#101516" metalness={0.62} roughness={0.48} />
      </mesh>
      <mesh position={[-0.62, 0.72, -0.28]}>
        <boxGeometry args={[0.92, 1.35, 0.16]} />
        <meshStandardMaterial color="#22292b" metalness={0.82} roughness={0.3} />
      </mesh>
      <mesh position={[0.68, 0.18, -0.3]}>
        <cylinderGeometry args={[0.28, 0.3, 1.55, 10]} />
        <meshStandardMaterial color="#2b3335" metalness={0.86} roughness={0.28} />
      </mesh>
      <mesh position={[0.68, 1.08, -0.3]}>
        <cylinderGeometry args={[0.22, 0.22, 0.18, 10]} />
        <meshStandardMaterial color="#3d4749" metalness={0.84} roughness={0.26} />
      </mesh>
      <VentBank position={[-0.62, -0.55, -0.3]} />
      <group ref={fanRef} position={[0.68, -0.82, -0.38]}>
        <mesh>
          <cylinderGeometry args={[0.2, 0.2, 0.04, 10]} />
          <meshStandardMaterial color="#2f383a" metalness={0.8} roughness={0.34} />
        </mesh>
        <mesh rotation={[0, 0, 0.2]}>
          <boxGeometry args={[0.36, 0.04, 0.015]} />
          <meshStandardMaterial color="#4a5456" metalness={0.82} roughness={0.28} />
        </mesh>
        <mesh rotation={[0, 0, 1.25]}>
          <boxGeometry args={[0.36, 0.04, 0.015]} />
          <meshStandardMaterial color="#4a5456" metalness={0.82} roughness={0.28} />
        </mesh>
      </group>
      <mesh position={[0, -1.42, -0.05]}>
        <boxGeometry args={[2.7, 0.28, 0.7]} />
        <meshStandardMaterial color="#1c2224" metalness={0.8} roughness={0.36} />
      </mesh>
      <mesh position={[0, -2.12, -0.08]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 2.2, 6]} />
        <meshStandardMaterial color="#2a3234" metalness={0.84} roughness={0.3} />
      </mesh>
      <mesh position={[0, -2.28, -0.18]}>
        <boxGeometry args={[9.4, 0.07, 0.2]} />
        <meshStandardMaterial color="#252c2e" metalness={0.76} roughness={0.38} />
      </mesh>
      <SignalStrip position={[-1.18, 0.55, -0.29]} size={[0.03, 2.05, 0.02]} color={LAB_CYAN} />
      <SignalStrip position={[1.14, 1.55, -0.29]} size={[0.08, 0.08, 0.04]} color={LAB_RED} />
    </group>
  )
}

function OverheadTruss() {
  const beams = [
    { position: [0, 0, trussSpan], rotation: [0, 0, 0] },
    { position: [0, 0, -trussSpan], rotation: [0, 0, 0] },
    { position: [trussSpan, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { position: [-trussSpan, 0, 0], rotation: [0, Math.PI / 2, 0] },
  ]

  return (
    <group position={[0, trussY, 0]}>
      {beams.map((beam) => (
        <group key={`${beam.position[0]}-${beam.position[2]}`} position={beam.position} rotation={beam.rotation}>
          <mesh>
            <boxGeometry args={[trussSpan * 2 + 0.28, 0.16, 0.22]} />
            <meshStandardMaterial color="#323a3c" metalness={0.86} roughness={0.26} />
          </mesh>
          <mesh position={[0, -0.16, 0]}>
            <boxGeometry args={[trussSpan * 2 + 0.18, 0.08, 0.08]} />
            <meshStandardMaterial color="#1e2527" metalness={0.8} roughness={0.34} />
          </mesh>
        </group>
      ))}
      {[[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([x, z]) => (
        <group key={`${x}${z}`} position={[x * trussSpan, 0, z * trussSpan]}>
          <mesh>
            <boxGeometry args={[0.42, 0.28, 0.42]} />
            <meshStandardMaterial color="#3d4648" metalness={0.86} roughness={0.24} />
          </mesh>
          <mesh position={[0, -1.15, 0]}>
            <boxGeometry args={[0.09, 2.2, 0.09]} />
            <meshStandardMaterial color="#2a3234" metalness={0.82} roughness={0.3} />
          </mesh>
          <SignalStrip position={[0, 0.16, 0]} size={[0.18, 0.03, 0.18]} color={x + z === 0 ? LAB_RED : LAB_CYAN} />
        </group>
      ))}
    </group>
  )
}

function CornerRiser({ x, z }) {
  return (
    <group position={[x * 11.15, 0.9, z * 11.15]}>
      <mesh>
        <boxGeometry args={[0.34, 6.9, 0.34]} />
        <meshStandardMaterial color="#2c3436" metalness={0.84} roughness={0.28} />
      </mesh>
      <mesh position={[0, 3.35, 0]}>
        <boxGeometry args={[0.52, 0.14, 0.52]} />
        <meshStandardMaterial color="#3f484a" metalness={0.86} roughness={0.24} />
      </mesh>
      <mesh position={[x * -0.55, 1.1, z * -0.55]} rotation={[0, x * z > 0 ? Math.PI / 4 : -Math.PI / 4, 0.42]}>
        <boxGeometry args={[0.08, 2.4, 0.08]} />
        <meshStandardMaterial color="#262d2f" metalness={0.8} roughness={0.34} />
      </mesh>
      <SignalStrip position={[x * -0.18, 0.4, z * -0.18]} size={[0.03, 1.6, 0.03]} color={LAB_RED} />
    </group>
  )
}

function FacilityMachinery({ reducedMotion }) {
  const fans = useRef([])

  useFrame((_, delta) => {
    if (reducedMotion) return
    const spin = delta * 0.75
    const nodes = fans.current
    for (let index = 0; index < nodes.length; index += 1) {
      if (nodes[index]) nodes[index].rotation.z += spin
    }
  })

  return (
    <group name="facility-machinery">
      <OverheadTruss />
      {wallAngles.map((angle, index) => (
        <group key={angle} position={[Math.sin(angle) * wallRadius, 0, Math.cos(angle) * wallRadius]} rotation={[0, angle, 0]}>
          <mesh position={[0, 0.85, -0.08]}>
            <boxGeometry args={[7.2, 4.6, 0.14]} />
            <meshStandardMaterial color="#12181a" metalness={0.74} roughness={0.44} />
          </mesh>
          <WallBay
            fanRef={(node) => {
              fans.current[index] = node
            }}
          />
          <mesh position={[0, 2.42, -0.12]}>
            <boxGeometry args={[10.5, 0.07, 0.16]} />
            <meshStandardMaterial color="#2a3234" metalness={0.8} roughness={0.32} />
          </mesh>
          <mesh position={[-4.2, 1.1, -0.18]} rotation={[0.08, 0, 0.18]}>
            <cylinderGeometry args={[0.025, 0.025, 3.4, 6]} />
            <meshStandardMaterial color="#1f2628" metalness={0.72} roughness={0.4} />
          </mesh>
        </group>
      ))}
      {[[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([x, z]) => (
        <CornerRiser key={`${x}${z}`} x={x} z={z} />
      ))}
    </group>
  )
}

export default memo(FacilityMachinery)
