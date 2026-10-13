// Shared layout constants (world units; the model stands on y = 0).
export const MODEL_HEIGHT = 3.65
export const FLOOR_Y = -0.18
export const SCANNER_Y = 4.55
export const SCANNER_OUTER_RADIUS = 2.35
export const WALL_RADIUS = 7
export const WALL_CENTER_ANGLE = Math.PI

// Vertical extent the camera must keep in view: platform base up through the head with headroom.
export const FRAME_BOTTOM = -0.32
export const FRAME_TOP = MODEL_HEIGHT + 0.35
export const FRAME_HALF_WIDTH = 1.95
