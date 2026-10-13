import { Suspense, useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import DigitalPhysiqueModel from '../DigitalPhysiqueModel.jsx'
import { createDigitalPhysiqueConfig } from '../../physique/physiqueConfiguration.js'
import LabLighting from './lab/LabLighting.jsx'
import FuturisticLabChamber from './lab/FuturisticLabChamber.jsx'
import { MODEL_HEIGHT } from './lab/labConfig.js'

// Initializes the camera once with exact anatomical framing targeting the torso center.
function StageCameraInitializer({ controlsRef }) {
	const camera = useThree((state) => state.camera)
	const initialized = useRef(false)

	useLayoutEffect(() => {
		if (initialized.current) return
		initialized.current = true

		camera.position.set(0, 1.84, 7.6)
		camera.lookAt(0, 1.82, 0)
		camera.updateProjectionMatrix()
		if (controlsRef.current) {
			controlsRef.current.target.set(0, 1.82, 0)
			controlsRef.current.update()
		}
	}, [camera, controlsRef])

	return null
}

function PhysiqueLabScene({ config }) {
	const controlsRef = useRef(null)

	return (
		<>
			<color attach="background" args={['#050607']} />
			<fog attach="fog" args={['#060708', 12, 32]} />
			<LabLighting />
			<FuturisticLabChamber />
			{config?.modelType && (
				<Suspense fallback={null}>
					<DigitalPhysiqueModel key={config.modelType} configuration={config} targetHeight={MODEL_HEIGHT} />
				</Suspense>
			)}
			<StageCameraInitializer controlsRef={controlsRef} />
			<OrbitControls
				ref={controlsRef}
				target={[0, 1.82, 0]}
				enablePan={false}
				enableZoom={true}
				minDistance={4.8}
				maxDistance={10.0}
				enableDamping
				dampingFactor={0.07}
				minPolarAngle={Math.PI * 0.36}
				maxPolarAngle={Math.PI * 0.54}
				rotateSpeed={0.85}
			/>
		</>
	)
}

function DigitalPhysiqueStage({ configuration, loading }) {
	const config = useMemo(() => createDigitalPhysiqueConfig(configuration), [configuration])
	const modelType = config?.modelType

	return (
		<div className="digital-stage" aria-label="Digital Physique Model">
			<div className="digital-stage__canvas">
				<Canvas
					shadows
					camera={{ position: [0, 1.84, 7.6], fov: 34, near: 0.2, far: 45 }}
					dpr={[1, 1.5]}
					gl={{ antialias: true, powerPreference: 'high-performance' }}
				>
					<PhysiqueLabScene config={config} />
				</Canvas>
			</div>
			<div className="digital-stage__hint">360° DRAG TO ROTATE · SCROLL TO ZOOM</div>
			{!modelType && (
				<div className="digital-stage__empty">
					{loading ? 'Loading physique profile…' : 'Physique body model unavailable.'}
				</div>
			)}
		</div>
	)
}

export default DigitalPhysiqueStage