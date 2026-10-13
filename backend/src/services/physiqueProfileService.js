const DEFAULT_PHYSIQUE_CLASSIFICATION_CONFIG = [
  { code: "slim", label: "Slim silhouette", maxBmi: 20 },
  { code: "balanced", label: "Balanced silhouette", maxBmi: 25 },
  { code: "broad", label: "Broad silhouette", maxBmi: 30 },
  { code: "fuller", label: "Fuller silhouette", maxBmi: Infinity },
];

const toFiniteNumber = (value) => {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const roundTo = (value, places = 1) => {
  const factor = 10 ** places;
  return Math.round(value * factor) / factor;
};

const toCentimeters = (value, units) => {
  const number = toFiniteNumber(value);
  if (number === null || number <= 0) return null;
  return roundTo(units === "imperial" ? number * 2.54 : number, 1);
};

const toKilograms = (value, units) => {
  const number = toFiniteNumber(value);
  if (number === null || number <= 0) return null;
  return roundTo(units === "imperial" ? number / 2.2046226218 : number, 1);
};

const calculateBmi = (user) => {
  const units = user.units === "imperial" ? "imperial" : "metric";
  const height = toFiniteNumber(user.height);
  const weight = toFiniteNumber(user.weight);
  if (height === null || weight === null || height <= 0 || weight <= 0) return null;

  const heightInMeters = units === "imperial" ? height * 0.0254 : height / 100;
  const weightInKilograms = units === "imperial" ? weight / 2.2046226218 : weight;
  return roundTo(weightInKilograms / (heightInMeters * heightInMeters), 1);
};

const calculateEstimatedBodyFat = (user, bmi) => {
  const age = toFiniteNumber(user.age);
  if (bmi === null || age === null || age < 13 || age > 120) return null;

  const rawGender = (user.gender || user.modelType || "").trim().toLowerCase();
  const isFemale = rawGender === "female" || rawGender === "woman" || rawGender === "f";
  const isMale = rawGender === "male" || rawGender === "man" || rawGender === "m";
  if (!isFemale && !isMale) return null;

  // Deurenberg clinical formula for adult body fat percentage:
  // Men: 1.20 * BMI + 0.23 * Age - 16.2
  // Women: 1.20 * BMI + 0.23 * Age - 5.4
  const constant = isFemale ? 5.4 : 16.2;
  const rawBf = 1.20 * bmi + 0.23 * age - constant;

  // Sensible physiological bounds: clamp between 4% (essential fat) and 60%
  const boundedBf = Math.min(60, Math.max(4, rawBf));
  return roundTo(boundedBf, 1);
};

const classifyPhysique = (bmi, config = DEFAULT_PHYSIQUE_CLASSIFICATION_CONFIG) => {
  if (bmi === null) return null;
  const band = config.find(({ maxBmi }) => bmi < maxBmi);
  if (!band) return null;

  return {
    code: band.code,
    label: band.label,
    basis: "BMI-derived 3D silhouette band; not a medical assessment",
  };
};

const buildPhysiqueProfile = (user, classificationConfig) => {
  const units = user.units === "imperial" ? "imperial" : "metric";
  const bmi = calculateBmi(user);
  const estimatedBodyFat = calculateEstimatedBodyFat(user, bmi);
  const physiqueClassification = classifyPhysique(bmi, classificationConfig);
  const heightCm = toCentimeters(user.height, units);
  const currentWeightKg = toKilograms(user.weight, units);
  const targetWeightKg = toKilograms(user.targetWeight, units);
  const measurementsCm = {
    chest: toCentimeters(user.chest, units),
    waist: toCentimeters(user.waist, units),
    arms: toCentimeters(user.arms, units),
    thighs: toCentimeters(user.thighs, units),
  };
  const resolvedModelType = user.modelType || (user.gender ? (user.gender.toLowerCase() === 'female' ? 'female' : 'male') : 'male');
  const appearance = {
    modelType: resolvedModelType,
    skinTone: user.skinTone || null,
    hairStyle: user.hairStyle || null,
    hairColor: user.hairColor || null,
  };
  const physiqueConfiguration = {
    modelType: appearance.modelType,
    units: "metric",
    height: heightCm,
    currentWeight: currentWeightKg,
    targetWeight: targetWeightKg,
    estimatedBodyFat,
    bmi,
    bodyMeasurements: measurementsCm,
    physiqueClassification,
    appearancePreferences: {
      skinTone: appearance.skinTone,
      hairStyle: appearance.hairStyle,
      hairColor: appearance.hairColor,
    },
  };

  return {
    bmi,
    estimatedBodyFat,
    estimatedBodyFatSource: estimatedBodyFat === null ? "insufficient data" : "user-provided profile value",
    estimatedBodyFatDisclaimer: "Informational estimate only; not a medical measurement.",
    physiqueClassification,
    bodyMeasurements: {
      units,
      height: toFiniteNumber(user.height),
      weight: toFiniteNumber(user.weight),
      targetWeight: toFiniteNumber(user.targetWeight),
      bodyFatPercentage: estimatedBodyFat,
      chest: toFiniteNumber(user.chest),
      waist: toFiniteNumber(user.waist),
      arms: toFiniteNumber(user.arms),
      thighs: toFiniteNumber(user.thighs),
    },
    ...appearance,
    physiqueConfiguration,
    physique3DConfig: {
      ...appearance,
      units: "metric",
      heightCm,
      weightKg: currentWeightKg,
      targetWeightKg,
      estimatedBodyFat,
      bmi,
      measurementsCm,
      physiqueClassification: physiqueClassification?.code || null,
    },
  };
};

module.exports = {
  DEFAULT_PHYSIQUE_CLASSIFICATION_CONFIG,
  calculateBmi,
  calculateEstimatedBodyFat,
  estimateBodyFatPercentage: calculateEstimatedBodyFat,
  classifyPhysique,
  buildPhysiqueProfile,
};