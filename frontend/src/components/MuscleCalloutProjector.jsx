import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import { isCalloutGroupInView, MUSCLE_CALLOUT_GROUPS } from './muscleCalloutCatalog.js'
import { MUSCLE_ZONE_BY_ID } from './muscleRegionZones.js'

const BODY_CENTER_LOCAL = new Vector3(0, 0.45, 0)
const MIN_FACING = 0.05
const MIN_LABEL_GAP = 4.8
const LABEL_MIN = 8
const LABEL_MAX = 92
const camPos = new Vector3()
const bodyWorld = new Vector3()
const camDir = new Vector3()
const worldPos = new Vector3()
const toZone = new Vector3()
const viewPos = new Vector3()
const ndc = new Vector3()

function facingAmount(world, body, cameraDirection, out) {
  out.copy(world).sub(body)
  const distance = out.length()
  if (distance < 1e-5) return -Infinity
  out.multiplyScalar(1 / distance)
  return out.dot(cameraDirection)
}

function projectCallouts(root, camera, viewMode, layout, activeRegionId) {
  root.updateWorldMatrix(true, false)
  camera.updateMatrixWorld()
  camera.getWorldPosition(camPos)
  bodyWorld.copy(BODY_CENTER_LOCAL)
  root.localToWorld(bodyWorld)
  camDir.copy(camPos).sub(bodyWorld)
  if (camDir.lengthSq() < 1e-8) return
  camDir.normalize()

  const placed = []

  for (const group of MUSCLE_CALLOUT_GROUPS) {
    const item = layout[group.id]
    if (!isCalloutGroupInView(group, viewMode)) {
      item.visible = false
      item.opacity = 0
      continue
    }

    const candidates = []

    for (const regionId of group.regionIds) {
      const zone = MUSCLE_ZONE_BY_ID.get(regionId)
      if (!zone) continue

      worldPos.fromArray(zone.position)
      root.localToWorld(worldPos)
      const facing = facingAmount(worldPos, bodyWorld, camDir, toZone)
      if (facing < MIN_FACING) continue

      viewPos.copy(worldPos).applyMatrix4(camera.matrixWorldInverse)
      if (viewPos.z > -camera.near) continue

      ndc.copy(worldPos).project(camera)
      const anchorX = (ndc.x * 0.5 + 0.5) * 100
      const anchorY = (-ndc.y * 0.5 + 0.5) * 100
      if (anchorX < -4 || anchorX > 104 || anchorY < 3 || anchorY > 97) continue
      if (ndc.z < -1 || ndc.z > 1) continue

      candidates.push({
        regionId,
        facing,
        anchorX,
        anchorY,
      })
    }

    const preferred = candidates.find((candidate) => candidate.regionId === activeRegionId)
    const chosen = preferred ?? candidates.reduce((best, candidate) => {
      if (!best) return candidate
      return group.side === 'left'
        ? (candidate.anchorX < best.anchorX ? candidate : best)
        : (candidate.anchorX > best.anchorX ? candidate : best)
    }, null)

    if (!chosen) {
      item.visible = false
      item.opacity = 0
      continue
    }

    const facingFade = Math.min(1, (chosen.facing - MIN_FACING) / 0.28)
    const edgeFade = Math.min(
      chosen.anchorX / 6,
      (100 - chosen.anchorX) / 6,
      (chosen.anchorY - 3) / 6,
      (97 - chosen.anchorY) / 6,
      1,
    )
    item.anchorX = chosen.anchorX
    item.anchorY = chosen.anchorY
    item.side = group.side
    item.labelY = Math.min(LABEL_MAX, Math.max(LABEL_MIN, chosen.anchorY))
    item.opacity = Math.max(0, facingFade * Math.max(0, edgeFade))
    item.visible = item.opacity > 0.08
    if (item.visible) placed.push(item)
  }

  for (const side of ['left', 'right']) {
    const column = placed.filter((item) => item.side === side).sort((a, b) => a.labelY - b.labelY)
    for (let index = 1; index < column.length; index += 1) {
      const minY = column[index - 1].labelY + MIN_LABEL_GAP
      if (column[index].labelY < minY) column[index].labelY = Math.min(LABEL_MAX, minY)
    }
  }
}

function MuscleCalloutProjector({ rootRef, viewMode, layoutRef, activeRegionId }) {
  const { camera } = useThree()

  useFrame(() => {
    const root = rootRef.current
    const layout = layoutRef.current
    if (!root || !layout) return
    projectCallouts(root, camera, viewMode, layout, activeRegionId)
  })

  return null
}

export default MuscleCalloutProjector
