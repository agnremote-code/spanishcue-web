// Noche abierta · cars and motorbikes you can take and drive through the
// whole city. Plain data plus pure movement, like world3d.mjs, so it can be
// tested without WebGL. A vehicle's heading follows the model: forward is
// (cos h, sin h) on the (x, z) plane, and turning right raises h.

import { CITY_BOUNDS } from "./city.mjs";

// What each kind of vehicle can do. Speeds in m/s, lengths in metres.
export const SPECS = Object.freeze({
  sedan: { label: "auto", max: 17, reverse: 5, accel: 8, brake: 17, wheelbase: 2.7, steer: 0.62, radius: 0.95, half: 2.0, seat: "car" },
  coupe: { label: "auto", max: 21, reverse: 5, accel: 10, brake: 18, wheelbase: 2.5, steer: 0.66, radius: 0.92, half: 1.95, seat: "car" },
  taxi: { label: "taxi", max: 17, reverse: 5, accel: 8, brake: 17, wheelbase: 2.7, steer: 0.62, radius: 0.95, half: 2.0, seat: "car" },
  van: { label: "camioneta", max: 14, reverse: 4.5, accel: 5.8, brake: 14, wheelbase: 3.4, steer: 0.55, radius: 1.05, half: 2.2, seat: "car" },
  moto: { label: "moto", max: 25, reverse: 3, accel: 12, brake: 20, wheelbase: 1.4, steer: 0.85, radius: 0.5, half: 0.9, seat: "moto" },
});

// Where they wait: along the kerb of the main streets, spread over the
// districts. Each spot was checked clear of buildings, props, parked cars and
// the white circles of the street scenes.
export const DRIVABLES = Object.freeze([
  { id: "auto-1", kind: "sedan", color: "#8a3b2f", x: 2.5, z: 26, heading: -Math.PI / 2 },
  { id: "moto-1", kind: "moto", color: "#c2352b", x: 14, z: 2.5, heading: Math.PI },
  { id: "auto-2", kind: "coupe", color: "#2c5f8a", x: 2, z: 51.5, heading: Math.PI },
  { id: "auto-3", kind: "taxi", color: "#f2c230", x: -2.5, z: -18, heading: Math.PI / 2 },
  { id: "moto-2", kind: "moto", color: "#1f6f4a", x: 2.5, z: 78, heading: -Math.PI / 2 },
  { id: "auto-4", kind: "van", color: "#d8d2c4", x: 42, z: 2.5, heading: Math.PI },
  { id: "moto-3", kind: "moto", color: "#e0a526", x: 58.5, z: -18, heading: -Math.PI / 2 },
  { id: "auto-5", kind: "sedan", color: "#4b4f58", x: 74, z: 2.5, heading: Math.PI },
  { id: "auto-6", kind: "sedan", color: "#a8442f", x: 54.5, z: 26, heading: Math.PI / 2 },
  { id: "moto-4", kind: "moto", color: "#2a2d33", x: 54, z: 51.5, heading: Math.PI },
  { id: "auto-7", kind: "coupe", color: "#d8d2c4", x: 54.5, z: 78, heading: Math.PI / 2 },
  { id: "auto-8", kind: "taxi", color: "#f2c230", x: -2.5, z: -46, heading: Math.PI / 2 },
  { id: "moto-5", kind: "moto", color: "#3a63b8", x: -30, z: -46.5, heading: Math.PI },
  { id: "auto-9", kind: "sedan", color: "#5d6f7a", x: -54.5, z: -38, heading: -Math.PI / 2 },
  { id: "auto-10", kind: "van", color: "#2e7d57", x: -78, z: -50.5, heading: 0 },
  { id: "moto-6", kind: "moto", color: "#d6602a", x: 2.5, z: 106, heading: -Math.PI / 2 },
  { id: "auto-11", kind: "sedan", color: "#7a2e4f", x: 58.5, z: -46, heading: -Math.PI / 2 },
  { id: "auto-12", kind: "coupe", color: "#1f2e4a", x: 86, z: -46.5, heading: Math.PI },
  { id: "moto-7", kind: "moto", color: "#8a8f96", x: 102, z: 2.5, heading: Math.PI },
  { id: "auto-13", kind: "sedan", color: "#b8962f", x: 54.5, z: 106, heading: Math.PI / 2 },
  { id: "moto-8", kind: "moto", color: "#7a3ab8", x: -2.5, z: -74, heading: Math.PI / 2 },
  { id: "auto-14", kind: "van", color: "#c4bfb4", x: -54.5, z: -66, heading: -Math.PI / 2 },
]);

export const BOARD_RADIUS = 2.6;
export const OWNER_SHOUT_AFTER = 1.2;
export const POLICE_AFTER = 14;

// Nearest vehicle you can board from where you stand.
export function nearestDrivable(player, list = DRIVABLES, taken = null) {
  let best = null;
  let bestDistance = Infinity;
  for (const item of list) {
    if (taken && item.id === taken) continue;
    const distance = Math.hypot(item.x - player.x, item.z - player.z);
    if (distance <= BOARD_RADIUS && distance < bestDistance) { best = item; bestDistance = distance; }
  }
  return best;
}

// Where the driver steps out: beside the door, on the first free side.
export function dismountSpot(state, spec, free) {
  const sides = [1, -1];
  for (const side of sides) {
    for (const reach of [1.9, 2.5, 3.2]) {
      const x = state.x - Math.sin(state.heading) * side * (spec.radius + reach - 1);
      const z = state.z + Math.cos(state.heading) * side * (spec.radius + reach - 1);
      if (free(x, z)) return { x, z };
    }
  }
  const back = { x: state.x - Math.cos(state.heading) * (spec.half + 1.6), z: state.z - Math.sin(state.heading) * (spec.half + 1.6) };
  return free(back.x, back.z) ? back : { x: state.x, z: state.z };
}

const hitAt = (x, z, r, boxes, bounds) => {
  if (x < bounds.minX + r || x > bounds.maxX - r || z < bounds.minZ + r || z > bounds.maxZ - r) return true;
  for (const b of boxes) if (x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r) return b;
  return false;
};

// Is the vehicle's body (a few circles along its length) clear at this pose?
export function bodyClear(x, z, heading, spec, boxes, bounds = CITY_BOUNDS) {
  const c = Math.cos(heading);
  const s = Math.sin(heading);
  const reach = spec.half - spec.radius * 0.7;
  for (const t of [-reach, 0, reach]) if (hitAt(x + c * t, z + s * t, spec.radius, boxes, bounds)) return false;
  return true;
}

// One step. `input.y` is the throttle (+1 forward, -1 reverse), `input.x`
// steers (+1 right), `input.brake` is the handbrake. Walls stop you and
// bounce you back a little; `hit` is the strength of the knock (0 if none).
export function stepVehicle(state, input, dt, spec, boxes = [], bounds = CITY_BOUNDS) {
  const step = Math.min(Math.max(dt, 0), 0.08);
  const throttle = Math.max(-1, Math.min(1, input.y || 0));
  const steer = Math.max(-1, Math.min(1, input.x || 0));
  let speed = state.speed || 0;
  if (input.brake) speed = speed > 0 ? Math.max(0, speed - spec.brake * 1.5 * step) : Math.min(0, speed + spec.brake * 1.5 * step);
  else if (throttle > 0.05) speed = speed < 0 ? Math.min(0, speed + spec.brake * step) : Math.min(spec.max * (input.boost ? 1.12 : 1), speed + spec.accel * throttle * step * (1.2 - speed / (spec.max * 1.4)));
  else if (throttle < -0.05) speed = speed > 0 ? Math.max(0, speed - spec.brake * step) : Math.max(-spec.reverse, speed - spec.accel * 0.6 * -throttle * step);
  else speed = speed > 0 ? Math.max(0, speed - 3.2 * step) : Math.min(0, speed + 3.2 * step);
  // Steering gets lighter as you go faster, and flips when reversing.
  const angle = steer * spec.steer / (1 + Math.abs(speed) / 14);
  let heading = state.heading + (speed / spec.wheelbase) * Math.tan(angle) * step;
  let x = state.x + Math.cos(heading) * speed * step;
  let z = state.z + Math.sin(heading) * speed * step;
  let hit = 0;
  if (!bodyClear(x, z, heading, spec, boxes, bounds)) {
    // Slide along an axis if one of them is free, otherwise stop and bounce.
    if (bodyClear(x, state.z, heading, spec, boxes, bounds)) z = state.z;
    else if (bodyClear(state.x, z, heading, spec, boxes, bounds)) x = state.x;
    else if (bodyClear(state.x, state.z, heading, spec, boxes, bounds)) { x = state.x; z = state.z; heading = state.heading; }
    else { x = state.x; z = state.z; heading = state.heading; }
    hit = Math.abs(speed);
    speed = -speed * 0.25;
    if (Math.abs(speed) < 0.3) speed = 0;
  }
  return { x, z, heading, speed, hit, steer: angle };
}

// Player-side heading (forward is (sin h, cos h)) of a vehicle heading.
export const playerHeading = (heading) => Math.PI / 2 - heading;
