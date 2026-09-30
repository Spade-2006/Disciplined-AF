import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { DoubleSide, PlaneGeometry, SphereGeometry, TorusGeometry } from 'three'
import { getCalloutGroup, isCalloutGroupInView } from './muscleCalloutCatalog.js'
import { isZoneVisibleInView, MUSCLE_ZONE_BY_ID } from './muscleRegionZones.js'
import { LAB_RED, LAB_RED_BRIGHT, LAB_WHITE } from './labPalette.js'

const BODY_CENTER = [0, 0.45, 0]

function isHighlightInView(regionId, viewMode) {
  const zone = MUSCLE_ZONE_BY_ID.get(regionId)
  if (!zone) return false
  const group = getCalloutGroup(regionId)
  if (group) return isCalloutGroupInView(group, viewMode)
  return isZoneVisibleInView(zone, viewMode)
}

function MuscleHighlight({ hoveredRegion, selectedRegion, viewMode, reducedMotion }) {
  const groupRef = useRef(null)
  const volumeRef = useRef(null)
  const scanRef = useRef(null)
  const ringRef = useRef(null)
  const lockRef = useRef(null)
  const lightRef = useRef(null)
  const opacity = useRef(0)
  const pulse = useRef(0)
  const volumeGeo = useMemo(() => new SphereGeometry(0.5, 18, 14), [])
  const scanGeo = useMemo(() => new PlaneGeometry(0.92, 0.92), [])
  const ringGeo = useMemo(() => new TorusGeometry(0.38, 0.007, 8, 48), [])
  const lockGeo = useMemo(() => new TorusGeometry(0.16, 0.006, 8, 40), [])

  useFrame(({ camera }, delta) => {
    const regionId = selectedRegion ?? hoveredRegion
    const zone = regionId ? MUSCLE_ZONE_BY_ID.get(regionId) : null
    const visible = Boolean(zone) && isHighlightInView(regionId, viewMode)
    const selected = Boolean(selectedRegion) && selectedRegion === regionId
    const easing = 1 - Math.exp(-delta * 12)
    const targetOpacity = visible ? 1 : 0
    opacity.current += (targetOpacity - opacity.current) * easing
    pulse.current += delta
    const shown = opacity.current > 0.01
    const group = groupRef.current
    if (!group) return

    group.visible = shown
    if (!shown) return

    if (zone) {
      group.position.x += (zone.position[0] - group.position.x) * easing
      group.position.y += (zone.position[1] - group.position.y) * easing
      group.position.z += (zone.position[2] - group.position.z) * easing
    }

    const [sx, sy, sz] = zone?.size ?? [0.2, 0.2, 0.2]
    const beat = reducedMotion ? 0 : Math.sin(pulse.current * (selected ? 3.6 : 2.4)) * 0.5 + 0.5
    const strength = (selected ? 0.78 : 0.5) * opacity.current
    const pulseAmt = 0.72 + beat * (selected ? 0.28 : 0.16)

    if (volumeRef.current?.material) {
      volumeRef.current.scale.set(sx * 1.05, sy * 1.05, sz * 1.05)
      volumeRef.current.material.opacity = 0.032 * strength * pulseAmt
    }
    if (ringRef.current?.material) {
      ringRef.current.scale.set(Math.max(sx, sz) * 1.15, Math.max(sx, sz) * 1.15, 1)
      ringRef.current.position.y = sy * (reducedMotion ? 0 : (beat - 0.5) * 0.22)
      ringRef.current.material.opacity = 0.42 * strength
    }
    if (scanRef.current?.material) {
      const travel = reducedMotion ? 0 : Math.sin(pulse.current * 2.1)
      scanRef.current.scale.set(sx * 0.98, sy * 0.98, 1)
      scanRef.current.position.y = travel * sy * 0.32
      scanRef.current.material.opacity = 0.12 * strength * (0.45 + beat * 0.55)
    }
    if (lockRef.current?.material) {
      lockRef.current.lookAt(camera.position)
      const lockScale = 0.55 + Math.max(sx, sy, sz) * 0.35
      lockRef.current.scale.setScalar(lockScale * (0.94 + beat * 0.08))
      lockRef.current.material.opacity = 0.7 * strength
    }
    if (lightRef.current) {
      const dx = group.position.x - BODY_CENTER[0]
      const dy = group.position.y - BODY_CENTER[1]
      const dz = group.position.z - BODY_CENTER[2]
      const len = Math.hypot(dx, dy, dz) || 1
      lightRef.current.position.set((dx / len) * 0.12, (dy / len) * 0.12, (dz / len) * 0.12)
      lightRef.current.intensity = (selected ? 1.15 : 0.7) * opacity.current
      lightRef.current.distance = 0.75 + Math.max(sx, sy, sz) * 1.1
    }
  })

  return (
    <group ref={groupRef} visible={false} renderOrder={8}>
      <mesh ref={volumeRef} geometry={volumeGeo} renderOrder={8}>
        <meshBasicMaterial color={LAB_RED} transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh ref={scanRef} geometry={scanGeo} renderOrder={9}>
        <meshBasicMaterial color={LAB_RED_BRIGHT} transparent opacity={0} depthWrite={false} side={DoubleSide} />
      </mesh>
      <mesh ref={ringRef} geometry={ringGeo} rotation={[Math.PI / 2, 0, 0]} renderOrder={10}>
        <meshBasicMaterial color={LAB_RED_BRIGHT} transparent opacity={0} depthWrite={false} toneMapped={false} />
      </mesh>
      <mesh ref={lockRef} geometry={lockGeo} renderOrder={11}>
        <meshBasicMaterial color={LAB_WHITE} transparent opacity={0} depthWrite={false} toneMapped={false} />
      </mesh>
      <pointLight ref={lightRef} color={LAB_RED_BRIGHT} intensity={0} distance={1.2} />
    </group>
  )
}

export default MuscleHighlight
