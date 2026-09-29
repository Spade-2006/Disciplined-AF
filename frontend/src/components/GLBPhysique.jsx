import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { clone as cloneSkinnedModel } from 'three/addons/utils/SkeletonUtils.js'
import { Box3, BoxGeometry, DoubleSide, Vector3 } from 'three'
import { MUSCLE_ZONES } from './muscleRegionZones.js'

const emptyMap = Object.freeze({})
const MODEL_GROUND_Y = -2.74
const MODEL_TARGET_HEIGHT = 5.15

function clonePresentationMaterial(material) {
  const clone = material.clone()
  if (clone.name === 'Skin' || clone.name === 'Skin.001') {
    clone.roughness = Math.max(clone.roughness ?? 0, 0.52)
  }
  return clone
}

function MusclePickZone({ zone, onHover, onSelect }) {
  const geometry = useMemo(() => new BoxGeometry(...zone.size), [zone.size])

  return (
    <mesh
      name={zone.id}
      userData={{ muscleRegionId: zone.id, muscleGroup: zone.group, side: zone.side }}
      position={zone.position}
      geometry={geometry}
      onPointerOver={(event) => {
        event.stopPropagation()
        onHover(zone.id)
      }}
      onPointerOut={(event) => {
        event.stopPropagation()
        onHover(null)
      }}
      onClick={(event) => {
        event.stopPropagation()
        onSelect(zone.id)
      }}
    >
      <meshBasicMaterial transparent opacity={0} colorWrite={false} depthWrite={false} side={DoubleSide} />
    </mesh>
  )
}

function RiggedModel({ model, modelConfig, physique, hoveredRegion, selectedRegion }) {
  const regionNodeMap = modelConfig?.regionNodeMap ?? emptyMap
  const morphTargetMap = modelConfig?.morphTargetMap ?? emptyMap
  const regionMeshes = useMemo(() => {
    const meshes = []
    model.traverse((node) => {
      if (!node.isMesh) return
      const regionId = node.userData.muscleRegionId ?? regionNodeMap[node.name]
      if (regionId) meshes.push({ node, regionId })
    })
    return meshes
  }, [model, regionNodeMap])
  const activeRegionRef = useRef(null)

  useEffect(() => {
    model.traverse((node) => {
      if (node.isMesh) node.userData.muscleRegionId ??= regionNodeMap[node.name]

      if (!node.morphTargetDictionary || !node.morphTargetInfluences) return
      for (const [profileKey, targetName] of Object.entries(morphTargetMap)) {
        const targetIndex = node.morphTargetDictionary[targetName]
        if (targetIndex === undefined) continue

        const value = profileKey.startsWith('muscle:')
          ? physique.muscleDevelopment?.[profileKey.slice(7)]
          : profileKey === 'heightCm'
            ? (physique.heightCm - 145) / 75
            : profileKey === 'bodyFatPercent'
              ? (physique.bodyFatPercent - 4) / 41
              : physique.proportions?.[profileKey]
        if (value !== undefined) node.morphTargetInfluences[targetIndex] = Math.max(0, Math.min(1, value))
      }
    })
  }, [model, regionNodeMap, morphTargetMap, physique])

  useEffect(() => {
    regionMeshes.forEach(({ node }) => {
      const materials = Array.isArray(node.material) ? node.material : [node.material]
      materials.forEach((material) => {
        if (material.emissive) material.emissive.set('#ad303d')
      })
    })
  }, [regionMeshes])

  useEffect(() => {
    activeRegionRef.current = selectedRegion ?? hoveredRegion
  }, [hoveredRegion, selectedRegion])

  useFrame((_, delta) => {
    const activeRegion = activeRegionRef.current
    const easing = 1 - Math.exp(-delta * 14)
    regionMeshes.forEach(({ node, regionId }) => {
      const targetIntensity = activeRegion === regionId ? 0.22 : 0
      const materials = Array.isArray(node.material) ? node.material : [node.material]
      materials.forEach((material) => {
        if (!material.emissive) return
        material.emissiveIntensity += (targetIntensity - material.emissiveIntensity) * easing
      })
    })
  })

  return <primitive object={model} />
}

function GLBPhysique({
  url,
  modelConfig = {},
  physique,
  viewMode,
  hoveredRegion,
  selectedRegion,
  onHover,
  onSelect,
}) {
  const { scene } = useGLTF(url)
  const model = useMemo(() => {
    const clone = cloneSkinnedModel(scene)
    clone.traverse((node) => {
      if (!node.isMesh) return
      node.castShadow = true
      node.receiveShadow = true
      node.material = Array.isArray(node.material)
        ? node.material.map(clonePresentationMaterial)
        : clonePresentationMaterial(node.material)
    })
    return clone
  }, [scene])
  const bounds = useMemo(() => {
    model.updateMatrixWorld(true)
    return new Box3().setFromObject(model)
  }, [model])
  const fit = useMemo(() => {
    const center = bounds.getCenter(new Vector3())
    const dimensions = bounds.getSize(new Vector3())
    const scale = modelConfig.scale ?? MODEL_TARGET_HEIGHT / dimensions.y
    const heightFactor = physique.heightCm / 181
    const widthFactor = 1 + (physique.proportions.shoulderWidth - 1) * 0.12
    const depthFactor = 1 + (physique.bodyFatPercent - 13) * 0.003
    const scaledHeight = scale * heightFactor

    return {
      position: modelConfig.position ?? [-center.x * scale * widthFactor, MODEL_GROUND_Y - bounds.min.y * scaledHeight, -center.z * scale * depthFactor],
      scale: modelConfig.scaleVector ?? [scale * widthFactor, scale * heightFactor, scale * depthFactor],
    }
  }, [bounds, modelConfig, physique])

  const visibleZones = viewMode === 'front'
    ? MUSCLE_ZONES.filter((zone) => !['back', 'posterior'].includes(zone.layer))
    : viewMode === 'back'
      ? MUSCLE_ZONES.filter((zone) => ['back', 'posterior'].includes(zone.layer))
      : MUSCLE_ZONES.filter((zone) => ['lateral', 'front', 'back', 'posterior'].includes(zone.layer))

  return (
    <group name="physique-model-root" rotation={modelConfig.rotation ?? [0, 0, 0]}>
      <group position={fit.position} scale={fit.scale}>
        <RiggedModel
          model={model}
          modelConfig={modelConfig}
          physique={physique}
          hoveredRegion={hoveredRegion}
          selectedRegion={selectedRegion}
        />
      </group>
      {visibleZones.map((zone) => (
        <MusclePickZone key={zone.id} zone={zone} onHover={onHover} onSelect={onSelect} />
      ))}
    </group>
  )
}

export function MuscleTarget({ regionId }) {
  const groupRef = useRef(null)
  const lightRef = useRef(null)
  const materialRef = useRef(null)
  const opacity = useRef(0)
  const targetPosition = useRef(new Vector3())
  const zone = MUSCLE_ZONES.find((region) => region.id === regionId)
  useEffect(() => {
    if (!zone) return
    targetPosition.current.fromArray(zone.position)
    if (opacity.current < 0.01) groupRef.current?.position.copy(targetPosition.current)
  }, [zone])

  useFrame((_, delta) => {
    const easing = 1 - Math.exp(-delta * 14)
    opacity.current += ((zone ? 1 : 0) - opacity.current) * easing

    if (groupRef.current) {
      if (zone) groupRef.current.position.lerp(targetPosition.current, easing)
      groupRef.current.visible = opacity.current > 0.01 || Boolean(zone)
      groupRef.current.scale.setScalar(0.9 + opacity.current * 0.1)
    }
    if (lightRef.current) lightRef.current.intensity = 1.1 * opacity.current
    if (materialRef.current) materialRef.current.opacity = 0.58 * opacity.current
  })

  return (
    <group ref={groupRef} visible={false}>
      <pointLight ref={lightRef} color="#ee454e" intensity={0} distance={1.45} />
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.15, 0.008, 6, 40]} />
        <meshBasicMaterial ref={materialRef} color="#ef545a" toneMapped={false} transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  )
}

export default GLBPhysique