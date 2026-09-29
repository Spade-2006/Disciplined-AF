export const DEFAULT_PHYSIQUE_PROFILE = {
  heightCm: 181,
  bodyFatPercent: 13,
  proportions: {
    shoulderWidth: 1,
    chestWidth: 1,
    waistWidth: 1,
    armLength: 1,
    legLength: 1,
  },
  muscleDevelopment: {},
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || min))
}

export function normalizePhysiqueProfile(profile = DEFAULT_PHYSIQUE_PROFILE) {
  return {
    heightCm: clamp(profile.heightCm ?? DEFAULT_PHYSIQUE_PROFILE.heightCm, 145, 220),
    bodyFatPercent: clamp(profile.bodyFatPercent ?? DEFAULT_PHYSIQUE_PROFILE.bodyFatPercent, 4, 45),
    proportions: {
      shoulderWidth: clamp(profile.proportions?.shoulderWidth ?? 1, 0.78, 1.25),
      chestWidth: clamp(profile.proportions?.chestWidth ?? 1, 0.78, 1.25),
      waistWidth: clamp(profile.proportions?.waistWidth ?? 1, 0.78, 1.3),
      armLength: clamp(profile.proportions?.armLength ?? 1, 0.82, 1.2),
      legLength: clamp(profile.proportions?.legLength ?? 1, 0.82, 1.2),
    },
    muscleDevelopment: profile.muscleDevelopment ?? {},
  }
}