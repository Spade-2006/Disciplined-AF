import { useMemo } from 'react'
import { Object3D } from 'three'
import { Environment, Lightformer } from '@react-three/drei'

function Spot({ position, target, color = '#ffffff', intensity, angle, penumbra = 0.8, shadow = false }) {
	const targetObject = useMemo(() => {
		const object = new Object3D()
		object.position.set(...target)
		return object
	}, [target])
	return (
		<>
			<primitive object={targetObject} />
			<spotLight
				position={position}
				target={targetObject}
				color={color}
				intensity={intensity}
				angle={angle}
				penumbra={penumbra}
				decay={1.5}
				castShadow={shadow}
				shadow-mapSize={[1024, 1024]}
				shadow-bias={-0.0004}
				shadow-radius={4}
			/>
		</>
	)
}

const MODEL_CENTER = [0, 1.82, 0]
const PLATFORM_CENTER = [0, 0, 0]

function LabLighting() {
	return (
		<>
			{/* Base laboratory ambient & hemisphere balance */}
			<ambientLight intensity={0.35} color="#0c141a" />
			<hemisphereLight args={['#d4e5ee', '#080a0c', 0.5]} />

			{/* Front key light: natural, flattering warm key light for human skin definition */}
			<Spot position={[-2.4, 5.4, 4.8]} target={MODEL_CENTER} color="#faf3ec" intensity={135} angle={0.38} penumbra={0.85} shadow />

			{/* Front-right soft natural fill */}
			<Spot position={[3.2, 4.6, 3.6]} target={MODEL_CENTER} color="#dce8ee" intensity={65} angle={0.46} penumbra={0.88} />

			{/* Back key light: soft anatomical rim for 360 rotation without over-exposure */}
			<Spot position={[0, 5.0, -4.5]} target={MODEL_CENTER} color="#dbeaf0" intensity={90} angle={0.5} penumbra={0.88} />

			{/* Back-left subtle red laboratory kicker */}
			<Spot position={[-3.6, 2.8, -3.8]} target={MODEL_CENTER} color="#e3343f" intensity={60} angle={0.52} penumbra={0.9} />

			{/* Back-right subtle cool kicker */}
			<Spot position={[3.6, 2.8, -3.8]} target={MODEL_CENTER} color="#9ec7d4" intensity={60} angle={0.52} penumbra={0.9} />

			{/* Overhead technical halo scanner soft downlight onto plinth */}
			<Spot position={[0, 4.8, 0]} target={PLATFORM_CENTER} color="#eef7fb" intensity={70} angle={0.46} penumbra={0.9} />

			{/* Upward red bounce light from the glowing floor neon ring */}
			<pointLight position={[0, 0.15, 0]} color="#e3343f" intensity={14} distance={5.0} decay={1.8} />

			{/* Chamber perimeter background wash lights (illuminates background pillars and consoles) */}
			<pointLight position={[-7, 3.5, -6]} color="#e3343f" intensity={22} distance={14} decay={1.6} />
			<pointLight position={[7, 3.5, -6]} color="#7ebed0" intensity={24} distance={14} decay={1.6} />
			<pointLight position={[0, 3.5, 8]} color="#98c8d8" intensity={18} distance={14} decay={1.6} />
			<pointLight position={[-7, 3.5, 5]} color="#7ebed0" intensity={16} distance={12} decay={1.6} />
			<pointLight position={[7, 3.5, 5]} color="#e3343f" intensity={16} distance={12} decay={1.6} />

			{/* Soft core fills for smooth anatomical shading */}
			<pointLight position={[0, 2.0, 3.8]} color="#e2edf2" intensity={10} distance={7} decay={2} />
			<pointLight position={[0, 2.0, -3.4]} color="#b5d6e2" intensity={12} distance={7} decay={2} />

			{/* Procedural reflections for realistic skin, floor, and dark metallic chamber architecture */}
			<Environment resolution={256} frames={1} environmentIntensity={0.45}>
				{/* Overhead glowing scanner ring reflection */}
				<Lightformer form="ring" intensity={3.5} color="#eef6f8" position={[0, 7.5, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[5, 5, 1]} />
				<Lightformer form="ring" intensity={2.8} color="#e3343f" position={[0, 7.4, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[7, 7, 1]} />

				{/* Vertical red telemetry pillars in background */}
				<Lightformer form="rect" intensity={2.5} color="#e3343f" position={[-8, 3, -4]} rotation={[0, Math.PI / 4, 0]} scale={[0.8, 8, 1]} />
				<Lightformer form="rect" intensity={2.5} color="#e3343f" position={[8, 3, -4]} rotation={[0, -Math.PI / 4, 0]} scale={[0.8, 8, 1]} />

				{/* Cyan technical status displays */}
				<Lightformer form="rect" intensity={2.2} color="#a6d4df" position={[0, 3.5, -9]} scale={[8, 1.2, 1]} />
				<Lightformer form="rect" intensity={1.8} color="#a6d4df" position={[-8, 3, 3]} rotation={[0, Math.PI * 0.75, 0]} scale={[1, 6, 1]} />
				<Lightformer form="rect" intensity={1.8} color="#a6d4df" position={[8, 3, 3]} rotation={[0, -Math.PI * 0.75, 0]} scale={[1, 6, 1]} />

				{/* Floor glowing ring reflection */}
				<Lightformer form="ring" intensity={2.2} color="#e3343f" position={[0, -1.5, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[6, 6, 1]} />
			</Environment>
		</>
	)
}

export default LabLighting
