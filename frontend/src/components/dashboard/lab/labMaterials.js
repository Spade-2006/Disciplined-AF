import { CanvasTexture, DoubleSide, MeshBasicMaterial, MeshStandardMaterial, NoColorSpace, RepeatWrapping } from 'three'

// Fine horizontal streaks used as a roughness map so metals read as brushed, not plastic.
function createBrushedMap() {
	const size = 256
	const canvas = document.createElement('canvas')
	canvas.width = size
	canvas.height = size
	const context = canvas.getContext('2d')
	context.fillStyle = '#9a9a9a'
	context.fillRect(0, 0, size, size)
	for (let line = 0; line < 520; line += 1) {
		const shade = 90 + Math.floor(Math.random() * 120)
		context.fillStyle = `rgba(${shade},${shade},${shade},${0.12 + Math.random() * 0.2})`
		context.fillRect(Math.random() * size, Math.random() * size, 20 + Math.random() * 150, 1)
	}
	const texture = new CanvasTexture(canvas)
	texture.wrapS = RepeatWrapping
	texture.wrapT = RepeatWrapping
	texture.repeat.set(2, 2)
	texture.colorSpace = NoColorSpace
	return texture
}

const brushedMap = createBrushedMap()

const metal = (color, metalness, roughness, extra = {}) => new MeshStandardMaterial({
	color,
	metalness,
	roughness,
	roughnessMap: brushedMap,
	...extra,
})

const glow = (color, opacity = 1) => new MeshBasicMaterial({
	color,
	toneMapped: false,
	transparent: opacity < 1,
	opacity,
	depthWrite: opacity >= 1,
})

// One instance of each material is shared by every lab component.
export const labMaterials = {
	brushed: metal('#3a4044', 0.92, 0.55),
	darkMetal: metal('#171b1e', 0.88, 0.6),
	gunmetal: metal('#0f1214', 0.8, 0.7),
	chrome: metal('#a4b3bc', 0.96, 0.18),
	carbon: metal('#111417', 0.75, 0.35),
	conduit: metal('#1e2226', 0.45, 0.5),
	floor: metal('#07090b', 0.85, 0.22),
	wall: metal('#121518', 0.65, 0.6, { side: DoubleSide }),
	matte: new MeshStandardMaterial({ color: '#07080a', metalness: 0.2, roughness: 0.85 }),
	cable: new MeshStandardMaterial({ color: '#090a0c', metalness: 0.3, roughness: 0.5 }),
	acrylic: new MeshStandardMaterial({ color: '#9fc7d4', metalness: 0, roughness: 0.08, transparent: true, opacity: 0.12, depthWrite: false }),
	glass: new MeshStandardMaterial({ color: '#0a161a', metalness: 0.85, roughness: 0.08, transparent: true, opacity: 0.65, depthWrite: false }),
	red: glow('#e3343f'),
	redBright: glow('#ff2a3a'),
	redDim: glow('#821e25'),
	cyan: glow('#7de0f2'),
	cyanDim: glow('#386d79'),
	amber: glow('#e59a24'),
	green: glow('#2ae382'),
	white: glow('#eef7fb'),
	redHaze: glow('#e3343f', 0.38),
	scanBand: glow('#a6d4df', 0.08),
	scanLine: glow('#bfe6ef', 0.7),
}
