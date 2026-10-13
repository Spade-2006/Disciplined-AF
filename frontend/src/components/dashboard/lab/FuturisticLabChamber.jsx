import { useMemo } from 'react'
import { Sparkles } from '@react-three/drei'
import { labMaterials } from './labMaterials.js'
import LabRing from './LabRing.jsx'
import { CurvedLabWallConduit } from './ActiveLabWallConduit.jsx'

const flat = [-Math.PI / 2, 0, 0]
const CHAMBER_RADIUS = 11.2

/**
 * Diagnostic Workstation Console:
 * High-tech laboratory terminal with angled dual-display diagnostic screens,
 * holographic data readouts, and articulated stand.
 */
function DiagnosticWorkstation({ position, rotation }) {
	return (
		<group position={position} rotation={rotation}>
			{/* Heavy base stand */}
			<mesh position={[0, 0.08, 0]} material={labMaterials.darkMetal}>
				<cylinderGeometry args={[0.55, 0.65, 0.16, 24]} />
			</mesh>
			{/* Articulated dual support neck */}
			<mesh position={[0, 0.95, -0.1]} rotation={[0.22, 0, 0]} material={labMaterials.chrome}>
				<cylinderGeometry args={[0.045, 0.055, 1.8, 16]} />
			</mesh>
			<mesh position={[0, 0.95, 0.08]} rotation={[-0.15, 0, 0]} material={labMaterials.gunmetal}>
				<cylinderGeometry args={[0.035, 0.045, 1.7, 16]} />
			</mesh>

			{/* Angled keyboard & holographic interface deck */}
			<group position={[0, 1.05, 0.22]} rotation={[-0.32, 0, 0]}>
				<mesh material={labMaterials.carbon}>
					<boxGeometry args={[1.05, 0.05, 0.55]} />
				</mesh>
				{/* Illuminated interface touchpad */}
				<mesh position={[0, 0.028, 0.02]} material={labMaterials.cyanDim}>
					<boxGeometry args={[0.85, 0.008, 0.38]} />
				</mesh>
				<mesh position={[-0.3, 0.03, 0.18]} material={labMaterials.cyan}>
					<boxGeometry args={[0.22, 0.008, 0.05]} />
				</mesh>
				<mesh position={[0.3, 0.03, 0.18]} material={labMaterials.redDim}>
					<boxGeometry args={[0.22, 0.008, 0.05]} />
				</mesh>
			</group>

			{/* Primary widescreen biometric monitor */}
			<group position={[0, 1.78, 0]} rotation={[-0.08, 0, 0]}>
				{/* Monitor frame */}
				<mesh material={labMaterials.darkMetal}>
					<boxGeometry args={[1.4, 0.85, 0.07]} />
				</mesh>
				{/* Glowing cyan diagnostic screen */}
				<mesh position={[0, 0, 0.04]} material={labMaterials.cyan}>
					<boxGeometry args={[1.28, 0.73, 0.01]} />
				</mesh>
				{/* Waveform / graph overlays */}
				<mesh position={[0, 0.12, 0.048]} material={labMaterials.white}>
					<boxGeometry args={[1.08, 0.18, 0.005]} />
				</mesh>
				<mesh position={[-0.35, -0.16, 0.048]} material={labMaterials.redBright}>
					<boxGeometry args={[0.42, 0.18, 0.005]} />
				</mesh>
				<mesh position={[0.28, -0.16, 0.048]} material={labMaterials.cyanDim}>
					<boxGeometry args={[0.55, 0.18, 0.005]} />
				</mesh>
			</group>

			{/* Secondary angled upper status screen */}
			<group position={[0, 2.38, -0.06]} rotation={[0.28, 0, 0]}>
				<mesh material={labMaterials.gunmetal}>
					<boxGeometry args={[1.1, 0.42, 0.06]} />
				</mesh>
				<mesh position={[0, 0, 0.034]} material={labMaterials.cyanDim}>
					<boxGeometry args={[1.0, 0.32, 0.01]} />
				</mesh>
				<mesh position={[0, 0, 0.04]} material={labMaterials.white}>
					<boxGeometry args={[0.82, 0.08, 0.005]} />
				</mesh>
			</group>
		</group>
	)
}

/**
 * Biometric Testing Station:
 * High-performance testing rig with dual guide rails, weight/sensor stacks, and cabling.
 */
function BiometricTestingStation({ position, rotation }) {
	return (
		<group position={position} rotation={rotation}>
			{/* Base frame */}
			<mesh position={[0, 0.1, 0]} material={labMaterials.darkMetal}>
				<boxGeometry args={[2.2, 0.2, 1.4]} />
			</mesh>
			{/* Chrome guide columns */}
			<mesh position={[-0.85, 3.1, -0.3]} material={labMaterials.chrome}>
				<cylinderGeometry args={[0.05, 0.05, 6.0, 16]} />
			</mesh>
			<mesh position={[0.85, 3.1, -0.3]} material={labMaterials.chrome}>
				<cylinderGeometry args={[0.05, 0.05, 6.0, 16]} />
			</mesh>
			<mesh position={[-0.85, 3.1, 0.3]} material={labMaterials.chrome}>
				<cylinderGeometry args={[0.05, 0.05, 6.0, 16]} />
			</mesh>
			<mesh position={[0.85, 3.1, 0.3]} material={labMaterials.chrome}>
				<cylinderGeometry args={[0.05, 0.05, 6.0, 16]} />
			</mesh>

			{/* Central weight stack & biomechanics sensor box */}
			<mesh position={[0, 2.2, -0.3]} material={labMaterials.carbon}>
				<boxGeometry args={[0.9, 4.0, 0.35]} />
			</mesh>
			{/* Red telemetry strip on stack */}
			<mesh position={[0, 2.2, -0.11]} material={labMaterials.red}>
				<boxGeometry args={[0.06, 3.6, 0.02]} />
			</mesh>

			{/* Top crossbar & pulley header */}
			<mesh position={[0, 6.1, 0]} material={labMaterials.gunmetal}>
				<boxGeometry args={[2.4, 0.3, 1.6]} />
			</mesh>
			<mesh position={[0, 6.1, 0.81]} material={labMaterials.cyan}>
				<boxGeometry args={[1.6, 0.06, 0.02]} />
			</mesh>

			{/* Side diagnostic telemetry display attached to rig */}
			<group position={[1.15, 2.0, 0.3]} rotation={[0, -0.45, 0]}>
				<mesh material={labMaterials.darkMetal}>
					<boxGeometry args={[0.65, 0.9, 0.06]} />
				</mesh>
				<mesh position={[0, 0.1, 0.035]} material={labMaterials.cyan}>
					<boxGeometry args={[0.55, 0.6, 0.01]} />
				</mesh>
				<mesh position={[0, -0.3, 0.035]} material={labMaterials.redDim}>
					<boxGeometry args={[0.55, 0.12, 0.01]} />
				</mesh>
			</group>
		</group>
	)
}

/**
 * Modular High-Density Server Bay:
 * 42U rack chassis with stacked blade units, status LED arrays, and ventilation.
 */
function ModularServerRackBay({ position, rotation }) {
	const serverBlades = useMemo(() => Array.from({ length: 9 }, (_, i) => i), [])

	return (
		<group position={position} rotation={rotation}>
			{/* Main rack cabinet */}
			<mesh position={[0, 3.2, 0]} material={labMaterials.gunmetal}>
				<boxGeometry args={[1.8, 6.4, 0.9]} />
			</mesh>
			{/* Outer dark bezel */}
			<mesh position={[0, 3.2, 0.46]} material={labMaterials.darkMetal}>
				<boxGeometry args={[1.9, 6.5, 0.05]} />
			</mesh>

			{/* Stacked server blade units */}
			{serverBlades.map((i) => {
				const y = 0.8 + i * 0.6
				const isRed = i % 3 === 0
				const isAmber = i === 4
				return (
					<group key={i} position={[0, y, 0.47]}>
						{/* Blade faceplate */}
						<mesh material={labMaterials.carbon}>
							<boxGeometry args={[1.6, 0.5, 0.04]} />
						</mesh>
						{/* Status readout strip */}
						<mesh position={[-0.3, 0.1, 0.025]} material={isRed ? labMaterials.red : isAmber ? labMaterials.amber : labMaterials.cyan}>
							<boxGeometry args={[0.85, 0.05, 0.01]} />
						</mesh>
						{/* Secondary indicator LEDs */}
						<mesh position={[0.45, 0.1, 0.025]} material={labMaterials.green}>
							<boxGeometry args={[0.12, 0.05, 0.01]} />
						</mesh>
						<mesh position={[0.62, 0.1, 0.025]} material={labMaterials.cyanDim}>
							<boxGeometry args={[0.12, 0.05, 0.01]} />
						</mesh>
						{/* Vent louvers */}
						<mesh position={[0, -0.1, 0.025]} material={labMaterials.darkMetal}>
							<boxGeometry args={[1.45, 0.18, 0.01]} />
						</mesh>
					</group>
				)
			})}

			{/* Power conduit pipes ascending to ceiling */}
			<mesh position={[-0.6, 7.2, 0]} material={labMaterials.conduit}>
				<cylinderGeometry args={[0.07, 0.07, 2.0, 16]} />
			</mesh>
			<mesh position={[0.6, 7.2, 0]} material={labMaterials.conduit}>
				<cylinderGeometry args={[0.07, 0.07, 2.0, 16]} />
			</mesh>
		</group>
	)
}

/**
 * Architectural Reinforced Chamber Pillar:
 * Heavy carbon column with vertical linear neon telemetry, status panels, and cabling.
 */
function ArchitecturalPillar({ angle }) {
	const x = CHAMBER_RADIUS * Math.sin(angle)
	const z = CHAMBER_RADIUS * Math.cos(angle)

	return (
		<group position={[x, 4.0, z]} rotation={[0, angle + Math.PI, 0]}>
			{/* Heavy structural pillar */}
			<mesh material={labMaterials.darkMetal}>
				<boxGeometry args={[1.3, 10.0, 0.9]} />
			</mesh>
			{/* Front bevel collar */}
			<mesh position={[0, 0, 0.46]} material={labMaterials.gunmetal}>
				<boxGeometry args={[0.9, 10.0, 0.06]} />
			</mesh>
			{/* Vertical red neon telemetry channel */}
			<mesh position={[0, 0.2, 0.5]} material={labMaterials.red}>
				<boxGeometry args={[0.08, 7.8, 0.02]} />
			</mesh>
			{/* Upper cyan telemetry readout */}
			<mesh position={[0, 3.8, 0.5]} material={labMaterials.cyan}>
				<boxGeometry args={[0.45, 0.12, 0.02]} />
			</mesh>
			{/* Lower red telemetry notch */}
			<mesh position={[0, -3.2, 0.5]} material={labMaterials.redDim}>
				<boxGeometry args={[0.45, 0.1, 0.02]} />
			</mesh>

			{/* Conduit line running along side of pillar */}
			<mesh position={[0.55, 0, 0.2]} material={labMaterials.conduit}>
				<cylinderGeometry args={[0.04, 0.04, 10.0, 12]} />
			</mesh>
		</group>
	)
}


/**
 * Multi-Tier Biometric Platform:
 * Polished wet-look reflective floor with glowing red neon ring & diagnostic tracks.
 */
function FuturisticChamberPlatform() {
	return (
		<group>
			{/* Reflective wet/polished dark floor */}
			<mesh rotation={flat} position={[0, -0.22, 0]} material={labMaterials.floor} receiveShadow>
				<circleGeometry args={[18, 64]} />
			</mesh>

			{/* Outer glowing red neon circular ring (Matching reference visual) */}
			<mesh rotation={flat} position={[0, -0.19, 0]} material={labMaterials.red}>
				<ringGeometry args={[2.72, 2.84, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, -0.192, 0]} material={labMaterials.redHaze}>
				<ringGeometry args={[2.55, 3.02, 96]} />
			</mesh>

			{/* Mid tier with cyan & red diagnostic tracks */}
			<LabRing inner={1.65} outer={2.45} height={0.08} y={-0.12} material="darkMetal" />
			<mesh rotation={flat} position={[0, -0.078, 0]} material={labMaterials.cyanDim}>
				<ringGeometry args={[2.05, 2.11, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, -0.078, 0]} material={labMaterials.redDim}>
				<ringGeometry args={[1.74, 1.78, 96]} />
			</mesh>

			{/* Central brushed standing plinth (top at y = 0) */}
			<LabRing inner={0} outer={1.5} height={0.12} y={-0.06} material="brushed" />
			<mesh rotation={flat} position={[0, 0.001, 0]} material={labMaterials.matte}>
				<ringGeometry args={[0.85, 0.88, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, 0.002, 0]} material={labMaterials.cyan}>
				<ringGeometry args={[1.14, 1.17, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, 0.002, 0]} material={labMaterials.redDim}>
				<ringGeometry args={[1.34, 1.36, 96]} />
			</mesh>
		</group>
	)
}

/**
 * Overhead Double-Ring Halo Scanner:
 * Dual halo lights with hydraulic ceiling struts.
 */
function OverheadHaloScanner() {
	const SCANNER_HEIGHT = 4.85
	return (
		<group position={[0, SCANNER_HEIGHT, 0]}>
			{/* Outer dark chassis collar */}
			<LabRing inner={2.2} outer={3.2} height={0.32} material="darkMetal" castShadow />
			<LabRing inner={2.4} outer={2.95} height={0.15} y={0.2} material="brushed" castShadow />

			{/* Outer dramatic glowing red halo ring */}
			<mesh rotation={flat} position={[0, -0.165, 0]} material={labMaterials.red}>
				<ringGeometry args={[2.65, 2.78, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, -0.167, 0]} material={labMaterials.redHaze}>
				<ringGeometry args={[2.5, 2.92, 96]} />
			</mesh>

			{/* Inner bright cyan-white scanning halo */}
			<LabRing inner={1.5} outer={1.95} height={0.45} y={-0.12} material="brushed" castShadow />
			<mesh rotation={flat} position={[0, -0.348, 0]} material={labMaterials.white}>
				<ringGeometry args={[1.65, 1.78, 96]} />
			</mesh>
			<mesh rotation={flat} position={[0, -0.348, 0]} material={labMaterials.cyan}>
				<ringGeometry args={[1.82, 1.88, 96]} />
			</mesh>

			{/* 4 Angled technical hydraulic struts connecting to ceiling */}
			{[0, Math.PI * 0.5, Math.PI, Math.PI * 1.5].map((angle) => {
				const x = 2.7 * Math.sin(angle)
				const z = 2.7 * Math.cos(angle)
				return (
					<mesh key={angle} position={[x, 0.8, z]} rotation={[0.2 * Math.cos(angle), angle, -0.2 * Math.sin(angle)]} material={labMaterials.gunmetal}>
						<cylinderGeometry args={[0.06, 0.08, 1.8, 16]} />
					</mesh>
				)
			})}
		</group>
	)
}

function VolumetricScanBeam() {
	return (
		<group position={[0, 2.425, 0]}>
			<mesh>
				<cylinderGeometry args={[1.72, 2.72, 4.85, 48, 1, true]} />
				<meshBasicMaterial
					color="#a6d4df"
					transparent
					opacity={0.04}
					depthWrite={false}
					side={2}
					toneMapped={false}
				/>
			</mesh>
			<mesh>
				<cylinderGeometry args={[1.2, 1.9, 4.85, 36, 1, true]} />
				<meshBasicMaterial
					color="#ffffff"
					transparent
					opacity={0.025}
					depthWrite={false}
					side={2}
					toneMapped={false}
				/>
			</mesh>
		</group>
	)
}

function FuturisticLabChamber() {
	const PILLAR_COUNT = 8
	const pillarAngles = useMemo(() => Array.from({ length: PILLAR_COUNT }, (_, i) => (i / PILLAR_COUNT) * Math.PI * 2), [])

	return (
		<group name="futuristic-lab-chamber">
			{/* Platform floor & neon rings */}
			<FuturisticChamberPlatform />

			{/* Overhead technical halo scanner */}
			<OverheadHaloScanner />

			{/* Volumetric holographic scanning beam downlight */}
			<VolumetricScanBeam />

			{/* Continuous active red diagnostic wiring conduit running along curved rear walls */}
			<CurvedLabWallConduit radius={11.95} height={9.6} y={4.2} />

			{/* Chamber perimeter structural pillars with telemetry */}
			{pillarAngles.map((angle) => (
				<ArchitecturalPillar key={angle} angle={angle} />
			))}

			{/* 1. Left Diagnostic Workstation Terminal */}
			<DiagnosticWorkstation position={[-6.8, 0, -4.5]} rotation={[0, 0.85, 0]} />

			{/* 2. Right Diagnostic Workstation Terminal */}
			<DiagnosticWorkstation position={[6.8, 0, -4.5]} rotation={[0, -0.85, 0]} />

			{/* 3. Left Background Biometric Testing Station Rig */}
			<BiometricTestingStation position={[-8.2, 0, 2.5]} rotation={[0, 1.45, 0]} />

			{/* 4. Right Background Biometric Testing Station Rig */}
			<BiometricTestingStation position={[8.2, 0, 2.5]} rotation={[0, -1.45, 0]} />

			{/* 5. Deep Background Server Bays (Left & Right) */}
			<ModularServerRackBay position={[-7.2, 0, -8.6]} rotation={[0, 0.42, 0]} />
			<ModularServerRackBay position={[7.2, 0, -8.6]} rotation={[0, -0.42, 0]} />

			{/* Ceiling circular structural truss rig */}
			<group position={[0, 8.4, 0]}>
				<LabRing inner={CHAMBER_RADIUS - 0.9} outer={CHAMBER_RADIUS + 0.6} height={0.5} material="gunmetal" />
				<mesh rotation={flat} position={[0, -0.26, 0]} material={labMaterials.redDim}>
					<ringGeometry args={[CHAMBER_RADIUS - 0.35, CHAMBER_RADIUS - 0.22, 96]} />
				</mesh>
			</group>

			{/* Subtle floating technical particle sparkles in the scan volume */}
			<Sparkles
				count={36}
				scale={[7, 7, 7]}
				size={1.6}
				speed={0.2}
				color="#a6d4df"
				opacity={0.32}
			/>
		</group>
	)
}

export default FuturisticLabChamber
