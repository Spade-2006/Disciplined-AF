import { MUSCLE_REGIONS } from './muscleRegions.js'

export const MUSCLE_ZONES = MUSCLE_REGIONS.map((region) => {
  const [x, y, z] = region.position

  return {
    ...region,
    position: [x, y - 2.6, z],
    size: region.scale.map((dimension) => Math.max(0.12, dimension * 1.8)),
  }
})

export const MUSCLE_ZONE_BY_ID = new Map(MUSCLE_ZONES.map((zone) => [zone.id, zone]))

export function isZoneVisibleInView(zone, viewMode) {
  if (viewMode === 'front') return !['back', 'posterior'].includes(zone.layer)
  if (viewMode === 'back') return ['back', 'posterior'].includes(zone.layer)
  return ['lateral', 'front', 'back', 'posterior'].includes(zone.layer)
}