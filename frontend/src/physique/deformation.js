/**
 * Body Deformation Controller:
 * Provides continuous, anatomically calibrated body-fat deformation without
 * hierarchical compounding distortion.
 * 
 * Supports both:
 * 1. Morph Targets: When custom shape keys (BodyFat, Waist, etc.) are present in the mesh.
 * 2. Anatomical Skeletal Regional Scaling: Accurately deforms the abdomen, waist, chest,
 *    hips, and limbs along lateral (x) and sagittal (z) cross-sections with exact
 *    hierarchical compensation so that children (chest, neck, head, limbs) never compound
 *    into squished or distorted shapes.
 */

export const MORPH_TARGET_CONTRACT = Object.freeze({
	bodyFat: 'BodyFat',
	chest: 'Chest',
	waist: 'Waist',
	arms: 'Arms',
	thighs: 'Thighs',
})

export const DEFORMATION_CALIBRATION = Object.freeze({
	male: {
		bodyFat: { min: 8, max: 35 },
		chest: { min: 85, max: 130 },
		waist: { min: 65, max: 115 },
		arms: { min: 28, max: 48 },
		thighs: { min: 45, max: 75 },
	},
	female: {
		bodyFat: { min: 14, max: 42 },
		chest: { min: 75, max: 120 },
		waist: { min: 58, max: 105 },
		arms: { min: 22, max: 40 },
		thighs: { min: 42, max: 72 },
	},
})

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const clamp01 = (value) => clamp(value, 0, 1)

export function resolveDeformationInfluences(metrics, calibration) {
	if (!metrics || !calibration) return {}

	const readings = {
		bodyFat: metrics.estimatedBodyFat,
		...metrics.measurementsCm,
	}
	const influences = {}
	for (const [key, range] of Object.entries(calibration)) {
		const reading = readings[key]
		if (!Number.isFinite(reading) || !range || !(range.max > range.min)) continue
		influences[key] = clamp01((reading - range.min) / (range.max - range.min))
	}
	return influences
}

function getBoneMap(root) {
	const map = new Map()
	root.traverse((object) => {
		if (object.isBone) {
			map.set(object.name.toLowerCase(), object)
		}
	})
	return map
}

function findBone(map, ...names) {
	for (const name of names) {
		const target = name.toLowerCase()
		if (map.has(target)) return map.get(target)
		for (const [k, v] of map.entries()) {
			if (k.includes(target)) return v
		}
	}
	return null
}

/**
 * Creates the unified deformation controller.
 */
export function createDeformationController(root, modelType = 'male') {
	const morphTargets = {}
	root.traverse((object) => {
		if (!object.isMesh || !object.morphTargetDictionary) return
		for (const [key, name] of Object.entries(MORPH_TARGET_CONTRACT)) {
			if (name in object.morphTargetDictionary) {
				;(morphTargets[key] ??= []).push({ mesh: object, index: object.morphTargetDictionary[name] })
			}
		}
	})

	const hasMorphs = Object.keys(morphTargets).length > 0
	const boneMap = getBoneMap(root)

	const hips = findBone(boneMap, 'Hips')
	const spine = findBone(boneMap, 'Spine')
	const spine1 = findBone(boneMap, 'Spine1')
	const spine2 = findBone(boneMap, 'Spine2')
	const neck = findBone(boneMap, 'Neck')
	const head = findBone(boneMap, 'Head')
	const leftShoulder = findBone(boneMap, 'LeftShoulder')
	const rightShoulder = findBone(boneMap, 'RightShoulder')
	const leftArm = findBone(boneMap, 'LeftArm')
	const rightArm = findBone(boneMap, 'RightArm')
	const leftForeArm = findBone(boneMap, 'LeftForeArm')
	const rightForeArm = findBone(boneMap, 'RightForeArm')
	const leftHand = findBone(boneMap, 'LeftHand')
	const rightHand = findBone(boneMap, 'RightHand')
	const leftUpLeg = findBone(boneMap, 'LeftUpLeg')
	const rightUpLeg = findBone(boneMap, 'RightUpLeg')
	const leftLeg = findBone(boneMap, 'LeftLeg')
	const rightLeg = findBone(boneMap, 'RightLeg')
	const leftFoot = findBone(boneMap, 'LeftFoot')
	const rightFoot = findBone(boneMap, 'RightFoot')

	const isFemale = modelType === 'female'
	const baselineBf = isFemale ? 22.0 : 15.0

	return {
		supported: true,
		hasMorphs,
		apply(payload = {}) {
			const bodyFat = payload.bodyFat ?? payload.estimatedBodyFat

			// 1. If morph targets exist on the mesh, apply morph influences
			if (hasMorphs) {
				for (const [key, value] of Object.entries(payload)) {
					if (typeof value === 'number' && morphTargets[key]) {
						for (const { mesh, index } of morphTargets[key]) {
							mesh.morphTargetInfluences[index] = value
						}
					}
				}
			}

			// 2. Continuous anatomical regional body-fat scaling with exact hierarchical compensation
			if (typeof bodyFat === 'number' && Number.isFinite(bodyFat)) {
				// Normalized deviation relative to healthy athletic baseline
				const delta = (bodyFat - baselineBf) / 100

				// Desired target NET (world) cross-sectional scales for each anatomical region:
				// As body fat increases: waist, lower abdomen, hips, chest, and limbs expand.
				// As body fat decreases: waist and abdomen shrink, showing a lean athletic taper.
				const wHipsX = clamp(1.0 + delta * 0.70, 0.90, 1.28)
				const wHipsZ = clamp(1.0 + delta * 0.80, 0.90, 1.32)

				const wSpineX = clamp(1.0 + delta * 1.10, 0.88, 1.38)
				const wSpineZ = clamp(1.0 + delta * 1.25, 0.88, 1.45)

				const wSpine1X = clamp(1.0 + delta * 0.80, 0.90, 1.28)
				const wSpine1Z = clamp(1.0 + delta * 0.95, 0.90, 1.32)

				const wSpine2X = clamp(1.0 + delta * 0.55, 0.92, 1.22)
				const wSpine2Z = clamp(1.0 + delta * 0.70, 0.92, 1.26)

				const wArm = clamp(1.0 + delta * 0.45, 0.92, 1.20)
				const wLeg = clamp(1.0 + delta * 0.55, 0.90, 1.24)

				// Apply hierarchically compensated local scales (prevents compounding distortion):
				if (hips) hips.scale.set(wHipsX, 1.0, wHipsZ)

				if (spine) spine.scale.set(wSpineX / wHipsX, 1.0, wSpineZ / wHipsZ)

				if (spine1) spine1.scale.set(wSpine1X / wSpineX, 1.0, wSpine1Z / wSpineZ)

				if (spine2) spine2.scale.set(wSpine2X / wSpine1X, 1.0, wSpine2Z / wSpine1Z)

				// Compensate Neck & Head to ensure skull/head is NEVER squished or deformed
				if (neck) neck.scale.set(1.0 / wSpine2X, 1.0, 1.0 / wSpine2Z)
				if (head) head.scale.set(1.0, 1.0, 1.0)

				// Compensate Shoulders and scale Arms
				if (leftShoulder) leftShoulder.scale.set(1.0 / wSpine2X, 1.0, 1.0 / wSpine2Z)
				if (rightShoulder) rightShoulder.scale.set(1.0 / wSpine2X, 1.0, 1.0 / wSpine2Z)

				if (leftArm) leftArm.scale.set(wArm, 1.0, wArm)
				if (rightArm) rightArm.scale.set(wArm, 1.0, wArm)
				if (leftForeArm) leftForeArm.scale.set(1.0, 1.0, 1.0)
				if (rightForeArm) rightForeArm.scale.set(1.0, 1.0, 1.0)
				if (leftHand) leftHand.scale.set(1.0 / wArm, 1.0, 1.0 / wArm)
				if (rightHand) rightHand.scale.set(1.0 / wArm, 1.0, 1.0 / wArm)

				// Thighs and Legs (children of Hips)
				if (leftUpLeg) leftUpLeg.scale.set(wLeg / wHipsX, 1.0, wLeg / wHipsZ)
				if (rightUpLeg) rightUpLeg.scale.set(wLeg / wHipsX, 1.0, wLeg / wHipsZ)
				if (leftLeg) leftLeg.scale.set(1.0, 1.0, 1.0)
				if (rightLeg) rightLeg.scale.set(1.0, 1.0, 1.0)
				if (leftFoot) leftFoot.scale.set(wHipsX / wLeg, 1.0, wHipsZ / wLeg)
				if (rightFoot) rightFoot.scale.set(wHipsX / wLeg, 1.0, wHipsZ / wLeg)
			}
		},
	}
}
