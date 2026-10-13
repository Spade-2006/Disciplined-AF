export const MODEL_TYPES = Object.freeze(['male', 'female'])

const finiteNumber = (value) => (typeof value === 'number' && Number.isFinite(value) ? value : null)

const token = (value) => {
	if (typeof value !== 'string') return null
	const normalized = value.trim().toLowerCase()
	return normalized || null
}

/**
 * Normalizes the backend `physiqueConfiguration` payload into the structure the
 * Digital Physique renderer consumes. The backend owns every calculation (BMI,
 * body fat, classification); this only validates shape and never derives or
 * invents values — anything missing or invalid stays `null`.
 */
export function createDigitalPhysiqueConfig(source) {
	if (!source || typeof source !== 'object') return null

	const measurements = source.bodyMeasurements && typeof source.bodyMeasurements === 'object' ? source.bodyMeasurements : {}
	const appearance = source.appearancePreferences && typeof source.appearancePreferences === 'object' ? source.appearancePreferences : {}
	const modelType = token(source.modelType)
	const classification = source.physiqueClassification && typeof source.physiqueClassification === 'object'
		? { code: token(source.physiqueClassification.code), label: source.physiqueClassification.label || null }
		: null

	return Object.freeze({
		modelType: MODEL_TYPES.includes(modelType) ? modelType : null,
		appearance: Object.freeze({
			skinTone: token(appearance.skinTone),
			hairStyle: token(appearance.hairStyle),
			hairColor: token(appearance.hairColor),
		}),
		metrics: Object.freeze({
			heightCm: finiteNumber(source.height),
			weightKg: finiteNumber(source.currentWeight),
			bmi: finiteNumber(source.bmi),
			estimatedBodyFat: finiteNumber(source.estimatedBodyFat),
			measurementsCm: Object.freeze({
				chest: finiteNumber(measurements.chest),
				waist: finiteNumber(measurements.waist),
				arms: finiteNumber(measurements.arms),
				thighs: finiteNumber(measurements.thighs),
			}),
			classification: classification && Object.freeze(classification),
		}),
	})
}
