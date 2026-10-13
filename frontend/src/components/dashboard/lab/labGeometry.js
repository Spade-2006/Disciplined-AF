import { CatmullRomCurve3, ExtrudeGeometry, Path, Shape, TubeGeometry, Vector3 } from 'three'

const ringCache = new Map()
const BEVEL = 0.012

/** Flat annulus with a small bevel (catches highlights); cached so identical rings share geometry. */
export function getRingGeometry(inner, outer, height) {
	const key = `${inner}|${outer}|${height}`
	if (ringCache.has(key)) return ringCache.get(key)

	const shape = new Shape()
	shape.absarc(0, 0, outer - BEVEL, 0, Math.PI * 2, false)
	const hole = new Path()
	hole.absarc(0, 0, inner + BEVEL, 0, Math.PI * 2, true)
	shape.holes.push(hole)

	const depth = Math.max(height - BEVEL * 2, 0.001)
	const geometry = new ExtrudeGeometry(shape, {
		depth,
		curveSegments: 72,
		bevelEnabled: true,
		bevelThickness: BEVEL,
		bevelSize: BEVEL,
		bevelSegments: 1,
	})
	geometry.rotateX(-Math.PI / 2)
	geometry.translate(0, -depth / 2, 0)
	ringCache.set(key, geometry)
	return geometry
}

const tubeCache = new Map()

/** Tube following a circular arc around the lab's vertical axis, sagging between its ends. */
export function getArcTube({ radius, from, to, y, sag = 0, tube }) {
	const key = [radius, from, to, y, sag, tube].join('|')
	if (tubeCache.has(key)) return tubeCache.get(key)

	const segments = 14
	const points = Array.from({ length: segments + 1 }, (_, index) => {
		const t = index / segments
		const angle = from + (to - from) * t
		return new Vector3(radius * Math.sin(angle), y - sag * 4 * t * (1 - t), radius * Math.cos(angle))
	})
	const geometry = new TubeGeometry(new CatmullRomCurve3(points), segments * 3, tube, 6, false)
	tubeCache.set(key, geometry)
	return geometry
}

/** Tube through arbitrary points (floor conduits). */
export function getPathTube(points, tube) {
	const key = `${points.join('|')}|${tube}`
	if (tubeCache.has(key)) return tubeCache.get(key)
	const geometry = new TubeGeometry(new CatmullRomCurve3(points.map((point) => new Vector3(...point))), 32, tube, 8, false)
	tubeCache.set(key, geometry)
	return geometry
}
