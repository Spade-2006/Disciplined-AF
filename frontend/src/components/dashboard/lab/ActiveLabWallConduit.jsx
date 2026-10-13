import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  varying vec2 vUv;

  const float overallSpeed = 0.14;
  const float gridSmoothWidth = 0.015;
  const float axisWidth = 0.05;
  const float majorLineWidth = 0.025;
  const float minorLineWidth = 0.0125;
  const float majorLineFrequency = 5.0;
  const float minorLineFrequency = 1.0;
  const vec4 gridColor = vec4(0.06, 0.02, 0.03, 1.0);
  const float scale = 4.2;
  // Disciplined AF deep crimson wire color
  const vec4 lineColor = vec4(0.86, 0.14, 0.20, 1.0);
  const float minLineWidth = 0.012;
  const float maxLineWidth = 0.18;
  const float lineSpeed = 1.0 * overallSpeed;
  const float lineAmplitude = 0.82;
  const float lineFrequency = 0.24;
  const float warpSpeed = 0.2 * overallSpeed;
  const float warpFrequency = 0.5;
  const float warpAmplitude = 0.75;
  const float offsetFrequency = 0.45;
  const float offsetSpeed = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.4;
  const float maxOffsetSpread = 1.2;
  const int linesPerGroup = 28;

  #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
  #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))

  float drawGridLines(float axis) {
    return drawCrispLine(0.0, axisWidth, axis)
          + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)
          + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);
  }

  float drawGrid(vec2 space) {
    return min(1.0, drawGridLines(space.x) + drawGridLines(space.y));
  }

  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
  }

  float getPlasmaY(float x, float horizontalFade, float offset) {
    return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
  }

  void main() {
    vec2 uv = vUv;
    vec2 space = (uv - 0.5) * vec2(iResolution.x / iResolution.y, 1.0) * 2.0 * scale;

    float horizontalFade = 1.0;
    float verticalFade = smoothstep(0.02, 0.16, uv.y) * smoothstep(0.98, 0.84, uv.y);

    space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * 1.1;
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * 0.75;

    vec4 lines = vec4(0.0);
    // Dark charcoal / near-black architectural wall base
    vec4 bgColor1 = vec4(0.012, 0.015, 0.018, 1.0);
    vec4 bgColor2 = vec4(0.022, 0.010, 0.014, 1.0);

    for(int l = 0; l < linesPerGroup; l++) {
      float normalizedLineIndex = float(l) / float(linesPerGroup);
      float wireTrack = (normalizedLineIndex - 0.5) * 5.2 - 0.35;
      float offsetTime = iTime * offsetSpeed;
      float offsetPosition = float(l) * 1.6 + space.x * offsetFrequency;
      float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
      float halfWidth = mix(minLineWidth, maxLineWidth, rand * 0.75 + 0.25) / 2.0;
      float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex * 0.4)) * mix(minOffsetSpread, maxOffsetSpread, 0.85);
      float linePosition = wireTrack + getPlasmaY(space.x, 1.0, offset);
      float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.16, space.y);

      float circleX = mod(float(l) * 1.3 + iTime * lineSpeed, 32.0) - 16.0;
      vec2 circlePosition = vec2(circleX, wireTrack + getPlasmaY(circleX, 1.0, offset));
      float circle = drawCircle(circlePosition, 0.014, space) * 3.5;

      // Subtle restrained white/cyan technical packet highlight
      vec4 pulse = vec4(0.85, 0.95, 1.0, 1.0) * circle * 0.45;
      lines += (line * lineColor * (0.65 + 0.45 * rand)) + pulse;
    }

    vec4 wallBase = mix(bgColor1, bgColor2, 0.5);
    wallBase *= (0.45 + 0.55 * verticalFade);

    // Subtle dark technical grid
    float grid = drawGrid(space);
    wallBase += vec4(0.12, 0.03, 0.04, 1.0) * grid * 0.22;

    vec4 finalColor = wallBase + lines;
    finalColor.a = 1.0;

    gl_FragColor = finalColor;
  }
`

export function useLabWallShaderMaterial(aspectRatio = 2.0) {
  const materialRef = useRef(null)

  const uniforms = useMemo(
    () => ({
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(1024 * aspectRatio, 1024) },
    }),
    [aspectRatio]
  )

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value += Math.min(delta, 0.1)
    }
  })

  return { materialRef, uniforms }
}

/**
 * Curved perimeter diagnostic wall conduit:
 * Full 360-degree seamless cylinder around the laboratory chamber,
 * rendering one unified, continuous flowing red plasma wire ribbon.
 */
export function CurvedLabWallConduit({ radius = 11.95, height = 9.6, y = 4.2 }) {
  const { materialRef, uniforms } = useLabWallShaderMaterial(5.0)

  return (
    <mesh position={[0, y, 0]} raycast={() => null}>
      <cylinderGeometry args={[radius, radius, height, 96, 1, true, 0, Math.PI * 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  )
}

/**
 * Wall segment mounted diagnostic conduit panel:
 * Flat architectural panel integrated into specific chamber wall segments.
 */
export function WallSegmentConduitPanel({ width = 3.8, height = 3.6, position = [0, 0, 0.075] }) {
  const { materialRef, uniforms } = useLabWallShaderMaterial(width / height)

  return (
    <mesh position={position} raycast={() => null}>
      <planeGeometry args={[width, height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  )
}
