import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useReducedMotion } from '../../../hooks/index.js'
import { SCANNER_Y } from './labConfig.js'
import { labMaterials } from './labMaterials.js'
import LabRing from './LabRing.jsx'

const flat = [-Math.PI / 2, 0, 0]
const EMITTER_ANGLES = Array.from({ length: 6 }, (_, index) => (index / 6) * Math.PI * 2 + Math.PI / 6)
const ROD_ANGLES = [Math.PI * 0.5, Math.PI * 1.17, Math.PI * 1.83]
const SWEEP_BOTTOM = 0.15
const SWEEP_TOP = 3.7

/** Thin scan plane that travels down the body. Static when reduced motion is requested. */
function ScanSweep({ animate }) {
	const ref = useRef(null)
	useFrame(({ clock }) => {
		if (!animate || !ref.current) return
		const t = (Math.sin(clock.elapsedTime * 0.9) + 1) / 2
		ref.current.position.y = SWEEP_BOTTOM + (SWEEP_TOP - SWEEP_BOTTOM) * t
	})
	return (
		<group ref={ref} position={[0, animate ? SWEEP_BOTTOM : 2.2, 0]}>
			<mesh rotation={flat} material={labMaterials.scanLine}>
				<ringGeometry args={[1.26, 1.29, 96]} />
			</mesh>
			<mesh rotation={flat} material={labMaterials.scanBand}>
				<ringGeometry args={[1.29, 1.36, 96]} />
			</mesh>
		</group>
	)
}

function OverheadScanner() {
	const reduced = useReducedMotion()
	return (
		<group>
			<group position={[0, SCANNER_Y, 0]}>
				{/* Outer housing, stepped plate and inner collar */}
				<LabRing inner={1.5} outer={2.35} height={0.3} material="darkMetal" castShadow />
				<LabRing inner={1.62} outer={2.12} height={0.1} y={0.2} material="brushed" castShadow />
				<LabRing inner={1.3} outer={1.56} height={0.46} y={-0.1} material="brushed" castShadow />
				<LabRing inner={1.78} outer={1.96} height={0.04} y={0.272} material="gunmetal" />

				{/* Lens rings on the underside */}
				<mesh rotation={flat} position={[0, -0.153, 0]} material={labMaterials.matte}>
					<ringGeometry args={[1.58, 2.3, 96]} />
				</mesh>
				<mesh rotation={flat} position={[0, -0.155, 0]} material={labMaterials.redDim}>
					<ringGeometry args={[1.96, 1.98, 96]} />
				</mesh>
				<mesh rotation={flat} position={[0, -0.155, 0]} material={labMaterials.cyanDim}>
					<ringGeometry args={[1.74, 1.755, 96]} />
				</mesh>
				<mesh rotation={flat} position={[0, -0.335, 0]} material={labMaterials.red}>
					<ringGeometry args={[1.285, 1.31, 96]} />
				</mesh>

				{/* Emitters on the collar */}
				{EMITTER_ANGLES.map((angle) => (
					<mesh
						key={angle}
						position={[1.3 * Math.sin(angle), -0.31, 1.3 * Math.cos(angle)]}
						material={labMaterials.white}
					>
						<cylinderGeometry args={[0.035, 0.035, 0.03, 12]} />
					</mesh>
				))}

				{/* Suspension rods */}
				{ROD_ANGLES.map((angle) => (
					<mesh
						key={angle}
						position={[2.0 * Math.sin(angle), 2.3, 2.0 * Math.cos(angle)]}
						material={labMaterials.brushed}
					>
						<cylinderGeometry args={[0.035, 0.035, 4.6, 8]} />
					</mesh>
				))}

				{/* Service arm towards the rear wall */}
				<mesh position={[0, 0.05, -3.4]} material={labMaterials.darkMetal} castShadow>
					<boxGeometry args={[0.55, 0.3, 2.4]} />
				</mesh>
				<mesh position={[0, 0.2, -4.7]} material={labMaterials.gunmetal}>
					<boxGeometry args={[0.9, 0.9, 0.5]} />
				</mesh>
			</group>
			<ScanSweep animate={!reduced} />
		</group>
	)
}

export default OverheadScanner
