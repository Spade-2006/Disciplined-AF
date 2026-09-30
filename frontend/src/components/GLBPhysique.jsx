import { useEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { clone as cloneSkinnedModel } from 'three/addons/utils/SkeletonUtils.js'
import { Box3, BoxGeometry, DoubleSide, Vector3 } from 'three'
import MuscleCalloutProjector from './MuscleCalloutProjector.jsx'
import MuscleHighlight from './MuscleHighlight.jsx'
import { isZoneVisibleInView, MUSCLE_ZONES } from './muscleRegionZones.js'

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
      onPointerDown={(event) => {
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

function RiggedModel({ model, modelConfig, physique }) {
  const regionNodeMap = modelConfig?.regionNodeMap ?? emptyMap
  const morphTargetMap = modelConfig?.morphTargetMap ?? emptyMap

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
  calloutLayoutRef,
  reducedMotion,
}) {
  const rootRef = useRef(null)
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

  const visibleZones = MUSCLE_ZONES.filter((zone) => isZoneVisibleInView(zone, viewMode))

  return (
    <group ref={rootRef} name="physique-model-root" rotation={modelConfig.rotation ?? [0, 0, 0]}>
      <group position={fit.position} scale={fit.scale}>
        <RiggedModel
          model={model}
          modelConfig={modelConfig}
          physique={physique}
        />
      </group>
      {visibleZones.map((zone) => (
        <MusclePickZone key={zone.id} zone={zone} onHover={onHover} onSelect={onSelect} />
      ))}
      <MuscleHighlight
        hoveredRegion={hoveredRegion}
        selectedRegion={selectedRegion}
        viewMode={viewMode}
        reducedMotion={reducedMotion}
      />
      {calloutLayoutRef && (
        <MuscleCalloutProjector
          rootRef={rootRef}
          viewMode={viewMode}
          layoutRef={calloutLayoutRef}
          activeRegionId={selectedRegion ?? hoveredRegion}
        />
      )}
    </group>
  )
}

export default GLBPhysique