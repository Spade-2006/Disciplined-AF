import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { AnimationMixer } from 'three'
import maleModelUrl from '../assets/Physique template/Male.glb?url'
import femaleModelUrl from '../assets/Physique template/Feamle.glb?url'
import { createAppearanceRig } from '../physique/appearance.js'
import { createDeformationController, DEFORMATION_CALIBRATION, resolveDeformationInfluences } from '../physique/deformation.js'
import { fitModelToStage } from '../physique/modelFit.js'

const modelAssets = {
	male: maleModelUrl,
	female: femaleModelUrl,
}

/**
 * Renders one body. `configuration` (from createDigitalPhysiqueConfig) selects the
 * GLB, appearance and physique metrics; legacy callers may pass `modelType` alone.
 * With `targetHeight` the model is normalized (grounded, centred, scaled) in place.
 */
function DigitalPhysiqueModel({
	configuration,
	modelType: modelTypeProp,
	targetHeight,
	position = [0, 0, 0],
	rotation = [0, 0, 0],
	scale = 1,
	...groupProps
}) {
	const modelType = configuration?.modelType ?? modelTypeProp
	const { scene, animations } = useGLTF(modelAssets[modelType])
	const rig = useMemo(() => createAppearanceRig(scene, modelType), [scene, modelType])
	const mixer = useMemo(() => new AnimationMixer(rig.model), [rig])
	const fitRef = useRef(null)

	const skinTone = configuration?.appearance?.skinTone
	const hairColor = configuration?.appearance?.hairColor
	const metrics = configuration?.metrics

	const heightCm = metrics?.heightCm
	const effectiveHeight = useMemo(() => {
		if (!targetHeight) return null
		if (!heightCm || !Number.isFinite(heightCm)) return targetHeight
		const factor = Math.min(1.18, Math.max(0.82, heightCm / 175))
		return targetHeight * factor
	}, [targetHeight, heightCm])

	useLayoutEffect(() => {
		const idle = animations.find((clip) => clip.name === 'Idle')
		if (idle) {
			const action = mixer.clipAction(idle)
			action.play()
			action.paused = true
		}
		mixer.setTime(0)

		if (effectiveHeight && fitRef.current) {
			fitModelToStage({ fit: fitRef.current, mixer, duration: 0, targetHeight: effectiveHeight })
		}

		return () => {
			mixer.stopAllAction()
			mixer.uncacheRoot(rig.model)
		}
	}, [animations, mixer, rig, effectiveHeight])

	useEffect(() => {
		rig.apply({ skinTone, hairColor })
	}, [rig, skinTone, hairColor])

	useEffect(() => {
		const deformation = createDeformationController(rig.model, modelType)
		if (deformation.supported) {
			deformation.apply({
				bodyFat: metrics?.estimatedBodyFat,
				...resolveDeformationInfluences(metrics, DEFORMATION_CALIBRATION[modelType]),
			})
		}
	}, [rig, metrics, modelType])

	useEffect(() => () => rig.dispose(), [rig])

	return (
		<group name="digital-physique-root" position={position} rotation={rotation} scale={scale} {...groupProps}>
			<group ref={fitRef} name="digital-physique-fit">
				<primitive object={rig.model} />
			</group>
		</group>
	)
}

export default DigitalPhysiqueModel
