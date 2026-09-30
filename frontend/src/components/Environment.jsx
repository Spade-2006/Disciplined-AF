import { memo } from 'react'
import { Grid } from '@react-three/drei'
import { LAB_CYAN, LAB_RED } from './labPalette.js'
import FacilityMachinery from './FacilityMachinery.jsx'

const gantrySides = [-1, 1]
const wallRibs = [-10, -7, -4, -1, 2, 5, 8, 10]
const insetPanels = [-3.7, 3.7]
const chamberSides = Array.from({ length: 4 }, (_, index) => {
  const angle = (index * Math.PI) / 2
  return {
    angle,
    position: [Math.sin(angle) * 13.2, 0, Math.cos(angle) * 13.2],
  }
})

function RedFixture({ position, size = [0.035, 1.8, 0.04] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshBasicMaterial color={LAB_RED} toneMapped={false} />
    </mesh>
  )
}

function Environment({ reducedMotion }) {
  return (
    <group name="physique-facility">
      <mesh position={[0, -3.06, -0.4]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[70, 70]} />
        <meshStandardMaterial color="#252c2e" metalness={0.78} roughness={0.32} />
      </mesh>

      {chamberSides.map(({ angle, position }) => (
        <group key={angle} position={position} rotation={[0, angle, 0]}>
          <mesh position={[0, 0.55, 0]}>
            <boxGeometry args={[26, 7.8, 0.4]} />
            <meshStandardMaterial color="#151a1b" metalness={0.74} roughness={0.4} />
          </mesh>

          {wallRibs.map((x) => (
            <mesh key={x} position={[x, 0.62, -0.25]}>
              <boxGeometry args={[0.075, 6.9, 0.08]} />
              <meshStandardMaterial color="#3b4446" metalness={0.8} roughness={0.29} />
            </mesh>
          ))}

          {insetPanels.map((x) => (
            <group key={x} position={[x, 0.55, -0.26]}>
              <mesh>
                <boxGeometry args={[1.85, 5.7, 0.06]} />
                <meshStandardMaterial color="#111719" metalness={0.62} roughness={0.48} />
              </mesh>
              <mesh position={[0, 0, -0.04]}>
                <boxGeometry args={[1.62, 5.35, 0.018]} />
                <meshStandardMaterial color="#192022" metalness={0.68} roughness={0.42} />
              </mesh>
              <RedFixture position={[-0.76, 0, -0.06]} size={[0.025, 1.15, 0.018]} />
            </group>
          ))}

          {gantrySides.map((side) => (
            <group key={side} position={[side * 11.8, 0, -0.33]}>
              <mesh position={[0, 0.34, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.22, 6.2, 0.32]} />
                <meshStandardMaterial color="#353d3f" metalness={0.84} roughness={0.25} />
              </mesh>
              <mesh position={[side * 0.45, -0.1, -0.85]}>
                <boxGeometry args={[0.62, 2.65, 1.2]} />
                <meshStandardMaterial color="#1c2224" metalness={0.78} roughness={0.36} />
              </mesh>
              <RedFixture position={[0, 0.62, -0.93]} size={[0.045, 2.75, 0.05]} />
              <mesh position={[0, 3.48, 0]}>
                <boxGeometry args={[0.5, 0.16, 0.54]} />
                <meshStandardMaterial color="#4a5152" metalness={0.86} roughness={0.28} />
              </mesh>
            </group>
          ))}
        </group>
      ))}

      <mesh position={[0, 3.8, -1.4]}>
        <boxGeometry args={[7.1, 0.22, 1.2]} />
        <meshStandardMaterial color="#303739" metalness={0.86} roughness={0.27} />
      </mesh>
      <RedFixture position={[0, 3.65, -0.84]} size={[5.7, 0.035, 0.045]} />
      <FacilityMachinery reducedMotion={reducedMotion} />

      <mesh position={[0, -2.96, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial color="#8d9999" transparent opacity={0.18} />
      </mesh>
      <Grid
        position={[0, -3.045, 0]}
        args={[24, 24]}
        cellSize={0.5}
        cellThickness={0.35}
        cellColor="#4d5c5e"
        sectionSize={2}
        sectionThickness={0.75}
        sectionColor={LAB_RED}
        fadeDistance={17}
        fadeStrength={1.4}
        infiniteGrid
      />

      <spotLight position={[0, 6.5, 2.3]} angle={0.42} penumbra={0.9} intensity={12} color="#f4f6f4" castShadow />
      <pointLight position={[-3.4, 1.2, -1.2]} intensity={3.2} color={LAB_RED} distance={8} />
      <pointLight position={[3.5, 1.3, -1.4]} intensity={2.4} color={LAB_CYAN} distance={7} />
      <pointLight position={[0, 3.2, -3.1]} intensity={1.5} color="#edf1f0" distance={7} />
    </group>
  )
}

export default memo(Environment)