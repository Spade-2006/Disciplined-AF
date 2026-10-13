import { ContactShadows } from '@react-three/drei'
import { FLOOR_Y } from './labConfig.js'
import { labMaterials } from './labMaterials.js'
import LabRing from './LabRing.jsx'

const flat = [-Math.PI / 2, 0, 0]

/**
 * Layered analysis platform. The model stands on y = 0, which is the top of the
 * inner brushed disc; the red channel and ring grooves are recessed below it.
 */
function LabPlatform() {
	return (
		<group>
			{/* Foundation plinth */}
			<LabRing inner={0} outer={2.05} height={0.1} y={FLOOR_Y + 0.05} material="gunmetal" />
			<LabRing inner={0} outer={1.9} height={0.08} y={FLOOR_Y + 0.14} material="darkMetal" />
			<mesh rotation={flat} position={[0, FLOOR_Y + 0.011, 0]} material={labMaterials.redDim}>
				<ringGeometry args={[2.05, 2.075, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, FLOOR_Y + 0.101, 0]} material={labMaterials.redHaze}>
				<ringGeometry args={[1.905, 1.935, 96]} />
			</mesh>

			{/* Mid tier, top sits slightly below the standing surface */}
			<LabRing inner={1.3} outer={1.68} height={0.05} y={-0.045} material="brushed" />
			<mesh rotation={flat} position={[0, -0.0195, 0]} material={labMaterials.redDim}>
				<ringGeometry args={[1.665, 1.68, 96]} />
			</mesh>

			{/* Recessed illuminated channel between mid tier and standing disc */}
			<mesh rotation={flat} position={[0, -0.0745, 0]} material={labMaterials.matte}>
				<ringGeometry args={[1.28, 1.32, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, -0.05, 0]} material={labMaterials.red}>
				<ringGeometry args={[1.292, 1.308, 96]} />
			</mesh>

			{/* Standing surface */}
			<LabRing inner={0} outer={1.28} height={0.1} y={-0.05} material="brushed" />
			<mesh rotation={flat} position={[0, 0.0006, 0]} material={labMaterials.matte}>
				<ringGeometry args={[0.78, 0.8, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, 0.0008, 0]} material={labMaterials.cyanDim}>
				<ringGeometry args={[0.99, 1.0, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, 0.0008, 0]} material={labMaterials.redDim}>
				<ringGeometry args={[1.14, 1.15, 96]} />
			</mesh>

			<ContactShadows position={[0, 0.005, 0]} opacity={0.9} scale={3.8} blur={1.5} far={2.0} resolution={512} color="#000000" frames={Infinity} />
		</group>
	)
}

export default LabPlatform
