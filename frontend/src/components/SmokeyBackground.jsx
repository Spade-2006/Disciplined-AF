import { useEffect, useRef } from 'react'

const vertexSource = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const fragmentSource = `
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 p = (2.0 * gl_FragCoord.xy - u_resolution) / min(u_resolution.x, u_resolution.y);
	float t = u_time * 0.46;
  vec2 q = p;

  for (int i = 0; i < 7; i++) {
    float fi = float(i + 1);
	q.x += 0.34 / fi * sin(fi * 1.7 * q.y + t * 0.75);
	q.y += 0.31 / fi * cos(fi * 1.5 * q.x - t * 0.65);
  }

	float wave = 0.5 + 0.5 * sin(q.x * 1.4 + q.y * 1.7 + t);
	float smoke = smoothstep(0.4, 0.96, wave);
	vec2 plumeCenter = vec2(-0.2 + 0.38 * sin(t * 0.55), 0.12 + 0.34 * cos(t * 0.4));
	float plume = 1.0 - smoothstep(0.12, 1.7, length(q - plumeCenter));
	vec3 signal = vec3(0.92, 0.08, 0.14);
	vec3 color = signal * (smoke * 0.34 + plume * smoke * 0.24);

  gl_FragColor = vec4(color, 1.0);
}
`

function compileShader(gl, type, source) {
	const shader = gl.createShader(type)
	if (!shader) return null

	gl.shaderSource(shader, source)
	gl.compileShader(shader)
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		gl.deleteShader(shader)
		return null
	}

	return shader
}

function SmokeyBackground() {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const gl = canvas?.getContext('webgl', { alpha: false, antialias: false })
		if (!canvas || !gl) return undefined

		const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource)
		const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource)
		if (!vertexShader || !fragmentShader) {
			if (vertexShader) gl.deleteShader(vertexShader)
			if (fragmentShader) gl.deleteShader(fragmentShader)
			return undefined
		}

		const program = gl.createProgram()
		if (!program) {
			gl.deleteShader(vertexShader)
			gl.deleteShader(fragmentShader)
			return undefined
		}

		gl.attachShader(program, vertexShader)
		gl.attachShader(program, fragmentShader)
		gl.linkProgram(program)
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			gl.deleteProgram(program)
			gl.deleteShader(vertexShader)
			gl.deleteShader(fragmentShader)
			return undefined
		}

		gl.useProgram(program)
		const buffer = gl.createBuffer()
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
			gl.STATIC_DRAW,
		)

		const positionLocation = gl.getAttribLocation(program, 'a_position')
		gl.enableVertexAttribArray(positionLocation)
		gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

		const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
		const timeLocation = gl.getUniformLocation(program, 'u_time')
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		const startTime = performance.now()
		let frameId = 0

		const resize = () => {
			const bounds = canvas.getBoundingClientRect()
			const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
			canvas.width = Math.max(1, Math.round(bounds.width * pixelRatio))
			canvas.height = Math.max(1, Math.round(bounds.height * pixelRatio))
			gl.viewport(0, 0, canvas.width, canvas.height)
		}

		const render = (time) => {
			gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
			gl.uniform1f(timeLocation, reducedMotion ? 0 : (time - startTime) / 1000)
			gl.drawArrays(gl.TRIANGLES, 0, 6)
			if (!reducedMotion) frameId = requestAnimationFrame(render)
		}

		resize()
		const resizeObserver = new ResizeObserver(resize)
		resizeObserver.observe(canvas)
		render(startTime)

		return () => {
			cancelAnimationFrame(frameId)
			resizeObserver.disconnect()
			gl.deleteBuffer(buffer)
			gl.deleteProgram(program)
			gl.deleteShader(vertexShader)
			gl.deleteShader(fragmentShader)
		}
	}, [])

	return (
		<div className="account-smoke" aria-hidden="true">
			<canvas ref={canvasRef} className="account-smoke__canvas" />
			<div className="account-smoke__veil" />
		</div>
	)
}

export default SmokeyBackground