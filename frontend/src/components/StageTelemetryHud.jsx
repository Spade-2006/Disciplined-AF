import { memo } from 'react'

const STAGE_NAMES = [
  'STAGE 01 // TWIN CALIBRATION',
  'STAGE 02 // BIOMECHANICAL SCAN',
  'STAGE 03 // COMPOSITION MATRIX',
  'STAGE 04 // NEURAL PROTOCOLS',
  'STAGE 05 // SYSTEM GATEWAY',
]

function StageTelemetryHud({ currentStage, cameraCoords }) {
  const stageName = STAGE_NAMES[currentStage] || STAGE_NAMES[0]
  const x = cameraCoords?.x?.toFixed(1) ?? '0.0'
  const y = cameraCoords?.y?.toFixed(1) ?? '0.8'
  const z = cameraCoords?.z?.toFixed(1) ?? '17.5'

  return (
    <div className="spatial-telemetry-hud" aria-live="polite" aria-atomic="true">
      <div className="telemetry-pill">
        <span className="telemetry-radar" aria-hidden="true" />
        <span className="telemetry-stage-tag">{stageName}</span>
        <span className="telemetry-divider" aria-hidden="true">|</span>
        <span className="telemetry-coord">
          XYZ: <b>[{x}, {y}, {z}]</b>
        </span>
        <span className="telemetry-status-dot" aria-hidden="true" />
      </div>
    </div>
  )
}

export default memo(StageTelemetryHud)
