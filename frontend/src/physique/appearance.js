import { BufferAttribute, BufferGeometry, Color } from 'three'
import { clone as cloneSkinnedScene } from 'three/addons/utils/SkeletonUtils.js'

// Swatches match the options saved by onboarding (backend enum values).
export const SKIN_TONES = Object.freeze({
	porcelain: '#f0d5c2',
	fair: '#e2b99d',
	light: '#d3a17e',
	medium: '#b9805e',
	olive: '#a87952',
	tan: '#966443',
	brown: '#70442f',
	deep: '#492b22',
})

export const HAIR_COLORS = Object.freeze({
	black: '#191718',
	brown: '#493022',
	blonde: '#b99a5a',
	red: '#803b2e',
	gray: '#777579',
	white: '#d5d2cf',
	other: '#a04c55',
})

/**
 * What each GLB actually allows, from inspecting its meshes/materials.
 * - Male.glb: separate `Body` (skin tone baked into vertex colors, white material)
 *   and `Hair` meshes. Only one hair asset exists, so hair style cannot change.
 * - Feamle.glb: a single mesh with one texture atlas holding skin, hair and clothing.
 *   Recolouring would tint everything, so no appearance attribute is applied.
 */
const APPEARANCE_RIGS = Object.freeze({
	male: { skinMeshes: ['Body'], hairMeshes: ['Hair'] },
	female: { skinMeshes: ['Mesh'], hairMeshes: [] },
})

export function getAppearanceSupport(modelType) {
	const rig = APPEARANCE_RIGS[modelType]
	return {
		skinTone: Boolean(rig?.skinMeshes.length),
		hairColor: Boolean(rig?.hairMeshes.length),
		hairStyle: false,
	}
}

const albedoNeutralGeometry = new WeakMap()

/**
 * The male skin tone lives in vertex colours (a warm base with darker/redder detail).
 * Multiplying a new tone onto them would double-tint, so build a geometry whose colour
 * is each vertex's ratio to the model's dominant skin colour: the base becomes 1.0 and
 * the painted detail survives as relative shading under the chosen tone.
 */
function getAlbedoNeutralGeometry(source) {
	if (albedoNeutralGeometry.has(source)) return albedoNeutralGeometry.get(source)

	const color = source.getAttribute('color')
	if (!color) {
		albedoNeutralGeometry.set(source, null)
		return null
	}

	const reference = [0, 1, 2].map((channel) => {
		const samples = []
		for (let index = 0; index < color.count; index += 7) samples.push(color.getComponent(index, channel))
		samples.sort((a, b) => a - b)
		return Math.max(samples[Math.floor(samples.length / 2)], 1e-3)
	})

	const itemSize = color.itemSize
	const neutral = new Float32Array(color.count * itemSize)
	for (let index = 0; index < color.count; index += 1) {
		for (let channel = 0; channel < 3; channel += 1) {
			neutral[index * itemSize + channel] = Math.min(1.3, color.getComponent(index, channel) / reference[channel])
		}
		if (itemSize === 4) neutral[index * itemSize + 3] = color.getComponent(index, 3)
	}

	const geometry = new BufferGeometry()
	for (const [name, attribute] of Object.entries(source.attributes)) geometry.setAttribute(name, attribute)
	geometry.setAttribute('color', new BufferAttribute(neutral, itemSize))
	geometry.setIndex(source.index)
	for (const group of source.groups) geometry.addGroup(group.start, group.count, group.materialIndex)
	geometry.drawRange = { ...source.drawRange }

	albedoNeutralGeometry.set(source, geometry)
	return geometry
}

/**
 * Clones the cached glTF scene (so shared materials/skeletons are never mutated) and
 * exposes `apply` to recolour only the skin/hair meshes of that model.
 */
export function createAppearanceRig(scene, modelType) {
	const model = cloneSkinnedScene(scene)
	const materials = []
	model.traverse((object) => {
		if (object.isSkinnedMesh || object.isMesh) {
			object.frustumCulled = false
			object.castShadow = true
			object.receiveShadow = true
			if (object.material) {
				object.material = object.material.clone()
				object.material.roughness = 0.88
				object.material.metalness = 0.0
				object.material.envMapIntensity = 0.2
				materials.push(object.material)
			}
		}
	})

	const spec = APPEARANCE_RIGS[modelType] ?? { skinMeshes: [], hairMeshes: [] }
	const claim = (name) => {
		const mesh = model.getObjectByName(name)
		if (!mesh?.isMesh) return null
		if (name === 'Body' || name === 'Skin' || name === 'Skin.001') {
			mesh.material.roughness = 0.88
			mesh.material.metalness = 0.0
			mesh.material.envMapIntensity = 0.2
		} else if (name === 'Hair') {
			mesh.material.roughness = 0.82
			mesh.material.metalness = 0.02
			mesh.material.envMapIntensity = 0.25
		}
		return mesh
	}
	const skinMeshes = spec.skinMeshes.map(claim).filter(Boolean)
	const hairMeshes = spec.hairMeshes.map(claim).filter(Boolean)
	const sourceGeometry = new Map(skinMeshes.map((mesh) => [mesh, mesh.geometry]))
	const original = new Color('#ffffff')

	return {
		model,
		apply({ skinTone, hairColor }) {
			const skinHex = SKIN_TONES[skinTone]
			for (const mesh of skinMeshes) {
				const source = sourceGeometry.get(mesh)
				const neutral = skinHex ? getAlbedoNeutralGeometry(source) : null
				mesh.geometry = neutral ?? source
				mesh.material.color.set(skinHex ?? original)
			}

			const hairHex = HAIR_COLORS[hairColor]
			for (const mesh of hairMeshes) mesh.material.color.set(hairHex ?? original)
		},
		dispose() {
			for (const material of materials) material.dispose()
		},
	}
}
