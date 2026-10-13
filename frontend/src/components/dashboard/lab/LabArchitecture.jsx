import { useMemo } from 'react'
import { FLOOR_Y, WALL_CENTER_ANGLE, WALL_RADIUS } from './labConfig.js'
import { getArcTube, getPathTube } from './labGeometry.js'
import { labMaterials } from './labMaterials.js'

const flat = [-Math.PI / 2, 0, 0]
const WALL_HEIGHT = 11
const WALL_MID_Y = FLOOR_Y + WALL_HEIGHT / 2 - 0.5
const COLUMN_STEP = 0.34
const COLUMN_INDEXES = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
const BAY_INDEXES = [-4, -3, -2, -1, 0, 1, 2, 3]

const polar = (radius, angle) => [radius * Math.sin(angle), radius * Math.cos(angle)]

function stripMaterial(index) {
	const distance = Math.abs(index)
	if (distance === 0) return null
	if (distance === 1) return labMaterials.red
	if (distance === 2) return labMaterials.cyanDim
	return labMaterials.redDim
}

function Column({ index }) {
	const angle = WALL_CENTER_ANGLE + index * COLUMN_STEP
	const [x, z] = polar(WALL_RADIUS - 0.35, angle)
	const strip = stripMaterial(index)
	return (
		<group position={[x, WALL_MID_Y, z]} rotation={[0, angle, 0]}>
			<mesh material={labMaterials.darkMetal} receiveShadow>
				<boxGeometry args={[0.55, WALL_HEIGHT, 0.7]} />
			</mesh>
			{/* Local -z faces the platform */}
			<mesh position={[0, 0, 0.352]} material={labMaterials.gunmetal}>
				<boxGeometry args={[0.7, WALL_HEIGHT, 0.04]} />
			</mesh>
			{strip && (
				<mesh position={[0, 0.6, -0.356]} material={strip}>
					<boxGeometry args={[0.05, 7.5, 0.012]} />
				</mesh>
			)}
		</group>
	)
}

function Bay({ index }) {
	const angle = WALL_CENTER_ANGLE + (index + 0.5) * COLUMN_STEP
	const [x, z] = polar(WALL_RADIUS - 0.18, angle)
	const [cx, cz] = polar(WALL_RADIUS - 0.5, angle)
	const slit = Math.abs(index + 0.5) < 2 ? labMaterials.red : labMaterials.cyanDim
	return (
		<group>
			{/* Recessed wall panel */}
			<group position={[x, 3.3, z]} rotation={[0, angle, 0]}>
				<mesh material={labMaterials.gunmetal}>
					<boxGeometry args={[1.7, 4.2, 0.1]} />
				</mesh>
				<mesh position={[0, 0.9, -0.056]} material={labMaterials.matte}>
					<boxGeometry args={[1.45, 2.2, 0.02]} />
				</mesh>
				<mesh position={[0, 1.3, -0.07]} material={slit}>
					<boxGeometry args={[1.2, 0.025, 0.01]} />
				</mesh>
			</group>
			{/* Machinery cabinet */}
			<group position={[cx, FLOOR_Y + 0.9, cz]} rotation={[0, angle, 0]}>
				<mesh material={labMaterials.darkMetal} receiveShadow>
					<boxGeometry args={[1.45, 1.8, 0.55]} />
				</mesh>
				<mesh position={[0, 0.35, -0.282]} material={labMaterials.glass}>
					<boxGeometry args={[0.9, 0.55, 0.01]} />
				</mesh>
				<mesh position={[0, -0.45, -0.282]} material={Math.abs(index + 0.5) < 2 ? labMaterials.redDim : labMaterials.cyanDim}>
					<boxGeometry args={[1.1, 0.025, 0.01]} />
				</mesh>
			</group>
		</group>
	)
}

function Mast({ side }) {
	const x = side * 3.5
	const strip = side < 0 ? labMaterials.red : labMaterials.cyan
	return (
		<group position={[x, 0, -1.2]} rotation={[0, side * -0.3, 0]}>
			<mesh position={[0, FLOOR_Y + 0.4, 0]} material={labMaterials.darkMetal} castShadow receiveShadow>
				<boxGeometry args={[0.9, 0.8, 0.9]} />
			</mesh>
			<mesh position={[0, 2.9, 0]} material={labMaterials.gunmetal} castShadow>
				<boxGeometry args={[0.5, 4.6, 0.5]} />
			</mesh>
			<mesh position={[-side * 0.1, 2.9, 0.256]} material={strip}>
				<boxGeometry args={[0.04, 3.6, 0.012]} />
			</mesh>
			<mesh position={[0, 4.4, 0]} material={labMaterials.darkMetal}>
				<boxGeometry args={[0.7, 0.25, 0.7]} />
			</mesh>
			<mesh position={[0, 1.4, 0.262]} material={labMaterials.acrylic}>
				<boxGeometry args={[0.34, 0.8, 0.01]} />
			</mesh>
		</group>
	)
}

function Floor() {
	return (
		<group position={[0, FLOOR_Y, 0]}>
			<mesh rotation={flat} material={labMaterials.floor} receiveShadow>
				<circleGeometry args={[WALL_RADIUS + 1, 96]} />
			</mesh>
			{[3.2, 4.6, 6.2].map((radius, index) => (
				<mesh key={radius} rotation={flat} position={[0, 0.004, 0]} material={index === 0 ? labMaterials.redDim : labMaterials.gunmetal}>
					<ringGeometry args={[radius, radius + (index === 0 ? 0.015 : 0.03), 128]} />
				</mesh>
			))}
			{[-4, -2, 0, 2, 4].map((offset) => (
				<mesh key={offset} rotation={flat} position={[offset * 1.5, 0.003, 0]} material={labMaterials.gunmetal}>
					<planeGeometry args={[0.02, 14]} />
				</mesh>
			))}
		</group>
	)
}

function LabArchitecture() {
	const geometry = useMemo(() => ({
		pipeLow: getArcTube({ radius: WALL_RADIUS - 0.62, from: Math.PI - 1.2, to: Math.PI + 1.2, y: 2.3, tube: 0.07 }),
		pipeHigh: getArcTube({ radius: WALL_RADIUS - 0.62, from: Math.PI - 1.2, to: Math.PI + 1.2, y: 3.05, tube: 0.04 }),
		cableA: getArcTube({ radius: WALL_RADIUS - 0.9, from: Math.PI - 1.1, to: Math.PI + 1.1, y: 6.4, sag: 0.9, tube: 0.03 }),
		cableB: getArcTube({ radius: WALL_RADIUS - 0.9, from: Math.PI - 0.9, to: Math.PI + 1.3, y: 6.9, sag: 0.7, tube: 0.025 }),
		conduitL: getPathTube([[-1.9, FLOOR_Y + 0.05, -0.3], [-2.6, FLOOR_Y + 0.03, -0.8], [-3.5, FLOOR_Y + 0.03, -1.2]], 0.045),
		conduitR: getPathTube([[1.9, FLOOR_Y + 0.05, -0.3], [2.6, FLOOR_Y + 0.03, -0.8], [3.5, FLOOR_Y + 0.03, -1.2]], 0.045),
	}), [])

	return (
		<group>
			<Floor />

			{/* Curved back wall */}
			<mesh position={[0, WALL_MID_Y, 0]} material={labMaterials.wall} receiveShadow>
				<cylinderGeometry args={[WALL_RADIUS, WALL_RADIUS, WALL_HEIGHT, 72, 1, true, Math.PI - 1.45, 2.9]} />
			</mesh>

			{COLUMN_INDEXES.map((index) => <Column key={index} index={index} />)}
			{BAY_INDEXES.map((index) => <Bay key={index} index={index} />)}

			<mesh geometry={geometry.pipeLow} material={labMaterials.darkMetal} />
			<mesh geometry={geometry.pipeHigh} material={labMaterials.brushed} />
			<mesh geometry={geometry.cableA} material={labMaterials.cable} />
			<mesh geometry={geometry.cableB} material={labMaterials.cable} />
			<mesh geometry={geometry.conduitL} material={labMaterials.cable} />
			<mesh geometry={geometry.conduitR} material={labMaterials.cable} />

			<Mast side={-1} />
			<Mast side={1} />
		</group>
	)
}

export default LabArchitecture
