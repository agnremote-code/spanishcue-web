import * as THREE from 'three';

const clearance = .65;
const ray = new THREE.Raycaster();
const up = new THREE.Vector3(0, 1, 0);
const direction = new THREE.Vector3();
const right = new THREE.Vector3();
const vertical = new THREE.Vector3();
const origin = new THREE.Vector3();

/** A small ray bundle protects the near plane as well as the center of the view. */
export function cameraClearDistance(target: THREE.Vector3, end: THREE.Vector3, solids: THREE.Object3D[]) {
  const length = target.distanceTo(end);
  direction.copy(end).sub(target).normalize();
  right.crossVectors(direction, up).normalize();
  vertical.crossVectors(right, direction).normalize();
  let distance = length;
  for (const [x, y] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]) {
    origin.copy(target).addScaledVector(right, x * clearance).addScaledVector(vertical, y * clearance);
    ray.set(origin, direction);
    ray.near = 0;
    ray.far = length + clearance;
    const hit = ray.intersectObjects(solids, false)[0];
    if (hit) distance = Math.min(distance, Math.max(.1, hit.distance - clearance));
  }
  return distance;
}

/** Raise the orbit over nearby caps before sacrificing the readable follow distance. */
export function solveForestCamera(target: THREE.Vector3, yaw: number, pitch: number, distance: number, solids: THREE.Object3D[]) {
  const end = new THREE.Vector3();
  let best = new THREE.Vector3();
  let bestDistance = -1;
  for (const elevation of [pitch, Math.max(pitch, .8), Math.max(pitch, 1.05), Math.max(pitch, 1.3), 1.48]) {
    end.set(Math.sin(yaw) * Math.cos(elevation), Math.sin(elevation), Math.cos(yaw) * Math.cos(elevation));
    end.multiplyScalar(distance).add(target);
    const safe = cameraClearDistance(target, end, solids);
    if (safe > bestDistance) {
      bestDistance = safe;
      best = end.clone().sub(target).setLength(safe).add(target);
    }
    if (safe >= distance - .01) break;
  }
  return best;
}

/** CSS rotation is clockwise; world yaw is measured from +z. */
export function destinationBearing(dx: number, dz: number, yaw: number) {
  return yaw + Math.PI - Math.atan2(dx, dz);
}

// Third-person framing adapted from La Noche Abierta: three distances to cycle
// with V, free zoom with the wheel or a pinch, and an orbit that drifts back
// behind the hero only while the hero runs away from the camera.
export const CAMERA_PRESETS = [
  { id: 'cerca', label: 'Cerca', distance: 5.2 },
  { id: 'media', label: 'Media', distance: 8.8 },
  { id: 'lejos', label: 'Lejos', distance: 15 },
];
export const MIN_DISTANCE = 3.2, MAX_DISTANCE = 26;
/** Below this the orbit stops descending and the view tilts up toward the climb instead. */
export const LOOK_UP_FROM = .14, PITCH_MIN = -.62, PITCH_MAX = 1.38;
const wrap = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

export function followYaw(yaw: number, heading: number, speed: number, dt: number, runSpeed = 9) {
  if (speed < .5) return yaw;
  const behind = heading + Math.PI, diff = wrap(behind - yaw);
  const ahead = Math.max(0, Math.cos(diff));
  const rate = 2.2 * ahead * Math.min(1, speed / runSpeed);
  return wrap(yaw + diff * (1 - Math.exp(-rate * Math.min(dt, .1))));
}

/** Orbit elevation and how far the look target rises when the learner looks up. */
export function orbitFor(pitch: number) {
  return { elevation: Math.max(pitch, LOOK_UP_FROM), lift: Math.max(0, LOOK_UP_FROM - pitch) * 30 };
}
