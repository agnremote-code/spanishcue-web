export const WORLD = Object.freeze({ width: 3840, height: 1280, minX: 100, maxX: 3740, floorY: 990, speed: 245 });

export function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

/** Physical movement, independent of frame rate. Long hidden-tab gaps never teleport. */
export function stepMotion({ x, direction, target }, seconds) {
  const dt = clamp(Number.isFinite(seconds) ? seconds : 0, 0, .05);
  const destination = target == null ? null : clamp(target, WORLD.minX, WORLD.maxX);
  const heading = destination == null ? direction : Math.sign(destination - x);
  const distance = WORLD.speed * dt;
  const arrived = destination != null && Math.abs(destination - x) <= distance;
  const nextX = arrived ? destination : clamp(x + heading * distance, WORLD.minX, WORLD.maxX);
  return { x: nextX, moving: nextX !== x, facing: heading < 0 ? -1 : 1, arrived };
}

export function cameraOffset(x, viewportWidth, scale) {
  return clamp(x * scale - viewportWidth * .43, 0, Math.max(0, WORLD.width * scale - viewportWidth));
}

export function canHandleKeys(target) {
  return !target?.isContentEditable && !/^(BUTTON|A|INPUT|SELECT|TEXTAREA|SUMMARY)$/.test(target?.tagName ?? '')
    && !target?.closest?.('button,a,input,select,textarea,summary,[contenteditable="true"],[role="dialog"]');
}

export function nearestStop(x, stops, radius = 155) {
  let closest = null;
  for (const stop of stops) {
    if (Math.abs(stop.x - x) <= radius && (!closest || Math.abs(stop.x - x) < Math.abs(closest.x - x))) closest = stop;
  }
  return closest;
}
