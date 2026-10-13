import { Box3, Matrix4, Vector3 } from 'three'

const POSE_SAMPLES = 6
const VERTEX_STRIDE = 4

/**
 * Normalizes a posed model so every model shares the same stage framing: the lowest
 * point of the Idle cycle sits on y = 0, the body is centred on x/z and its height
 * equals `targetHeight`. Bounds are measured from the animated (skinned) vertices —
 * the bind pose differs from Idle, and three.js caches a stale bind-pose box on
 * SkinnedMesh — so feet land on the platform instead of floating or sinking.
 */
function refreshWorld(fit) {
	fit.updateWorldMatrix(true, false)
	fit.updateMatrixWorld(true)
}

export function fitModelToStage({ fit, mixer, duration, targetHeight }) {
	fit.scale.setScalar(1)
	fit.position.set(0, 0, 0)
	refreshWorld(fit)

	const toFitSpace = new Matrix4().copy(fit.matrixWorld).invert()
	const bounds = new Box3()
	const point = new Vector3()
	const meshBox = new Box3()
	const times = duration > 0
		? Array.from({ length: POSE_SAMPLES }, (_, index) => (duration * index) / POSE_SAMPLES)
		: [0]

	for (const time of times) {
		mixer.setTime(time)
		refreshWorld(fit)

		fit.traverse((object) => {
			if (!object.isMesh || !object.visible) return
			const position = object.geometry.getAttribute('position')
			if (!position) return

			if (object.isSkinnedMesh) {
				// In attached mode the shader's bindMatrixInverse cancels the model matrix, so
				// applyBoneTransform already yields world space. (bindMatrixInverse is only refreshed by
				// updateMatrixWorld, so it must not be relied on here.)
				const detached = object.bindMode !== 'attached'
				for (let index = 0; index < position.count; index += VERTEX_STRIDE) {
					object.getVertexPosition(index, point)
					if (detached) point.applyMatrix4(object.bindMatrixInverse).applyMatrix4(object.matrixWorld)
					bounds.expandByPoint(point.applyMatrix4(toFitSpace))
				}
			} else {
				if (!object.geometry.boundingBox) object.geometry.computeBoundingBox()
				meshBox.copy(object.geometry.boundingBox).applyMatrix4(object.matrixWorld).applyMatrix4(toFitSpace)
				bounds.union(meshBox)
			}
		})
	}
	mixer.setTime(0)

	const height = bounds.max.y - bounds.min.y
	if (bounds.isEmpty() || !Number.isFinite(height) || height <= 0) return false

	const scale = targetHeight / height
	const center = bounds.getCenter(point)
	fit.scale.setScalar(scale)
	fit.position.set(-center.x * scale, -bounds.min.y * scale, -center.z * scale)
	refreshWorld(fit)

}
