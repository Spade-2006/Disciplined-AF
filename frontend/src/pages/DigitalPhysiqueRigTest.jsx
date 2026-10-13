import { Suspense, useLayoutEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Box3, Vector3 } from 'three'
import DigitalPhysiqueModel from '../components/DigitalPhysiqueModel.jsx'
import './DigitalPhysiqueRigTest.css'

function FittedModel({ modelType, centerX, targetHeight }) {
	const rootRef = useRef(null)

	useLayoutEffect(() => {
		const root = rootRef.current
		if (!root) return

		root.updateWorldMatrix(true, true)
		const bounds = new Box3().setFromObject(root)
		const dimensions = bounds.getSize(new Vector3())
		if (!Number.isFinite(dimensions.y) || dimensions.y <= 0) return

		root.scale.setScalar(targetHeight / dimensions.y)
		root.position.set(centerX, 0, 0)

		for (let pass = 0; pass < 2; pass += 1) {
			root.updateWorldMatrix(true, true)
			const currentBounds = new Box3().setFromObject(root)
			const currentHeight = currentBounds.getSize(new Vector3()).y
			if (!Number.isFinite(currentHeight) || currentHeight <= 0) return
			root.scale.multiplyScalar(targetHeight / currentHeight)
		}

		root.updateWorldMatrix(true, true)
		const fittedBounds = new Box3().setFromObject(root)
		const fittedCenter = fittedBounds.getCenter(new Vector3())
		root.position.x += centerX - fittedCenter.x
		root.position.y -= fittedBounds.min.y
		root.position.z -= fittedCenter.z
		root.updateWorldMatrix(true, true)
	}, [centerX, modelType, targetHeight])

	return (
		<group ref={rootRef} position={[centerX, 0, 0]}>
			<DigitalPhysiqueModel modelType={modelType} />
		</group>
	)
}

function PreviewScene() {
	const { viewport } = useThree()
	const compact = viewport.width < 5.5
	const separation = compact ? 0.82 : 1.7
	const targetHeight = compact ? 1.8 : 2.5

	return (
		<>
			<color attach="background" args={['#070809']} />
			<ambientLight intensity={1.15} />
			<directionalLight position={[-3, 6, 5]} intensity={2.2} />
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.015, 0]}>
				<planeGeometry args={[30, 30]} />
				<meshStandardMaterial color="#111315" roughness={0.92} />
			</mesh>
			<Suspense fallback={null}>
				<FittedModel modelType="male" centerX={-separation} targetHeight={targetHeight} />
				<FittedModel modelType="female" centerX={separation} targetHeight={targetHeight} />
			</Suspense>
		</>
	)
}

function DigitalPhysiqueRigTest() {
	return (
		<main className="physique-rig-test">
			<header className="physique-rig-test__header">
				<div>
					<p>DISCIPLINED AF / DIGITAL PHYSIQUE</p>
					<h1>RIGGED MODEL TEST</h1>
				</div>
				<span>ISOLATED PREVIEW</span>
			</header>
			<section className="physique-rig-test__stage" aria-label="Male and female rigged physique models">
				<Canvas camera={{ position: [0, 1.25, 8.5], fov: 38 }} dpr={[1, 1.5]}>
					<PreviewScene />
				</Canvas>
				<div className="physique-rig-test__labels" aria-hidden="true">
					<div><small>MODEL 01</small><strong>MALE</strong></div>
					<div><small>MODEL 02</small><strong>FEMALE</strong></div>
				</div>
			</section>
		</main>
	)
}

export default DigitalPhysiqueRigTest