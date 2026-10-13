import { useMemo } from 'react'
import { getRingGeometry } from './labGeometry.js'
import { labMaterials } from './labMaterials.js'

/** Horizontal metal annulus centred on its own y. Geometry is cached/shared by dimensions. */
function LabRing({ inner, outer, height, y = 0, material = 'brushed', castShadow = false, receiveShadow = true }) {
	const geometry = useMemo(() => getRingGeometry(inner, outer, height), [inner, outer, height])
	return <mesh geometry={geometry} material={labMaterials[material]} position={[0, y, 0]} castShadow={castShadow} receiveShadow={receiveShadow} />
}

export default LabRing
