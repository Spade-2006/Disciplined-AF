import { MUSCLE_REGIONS } from './muscleRegions.js'

export const MUSCLE_ZONES = MUSCLE_REGIONS.map((region) => {
  const [x, y, z] = region.position

  return {
    ...region,
    position: [x, y - 2.6, z],
    size: region.scale.map((dimension) => Math.max(0.12, dimension * 1.8)),
  }
})