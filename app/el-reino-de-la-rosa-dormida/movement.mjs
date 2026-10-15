// Reuse Noche Abierta's tested acceleration, turning and wall sliding.
// This adapter adds the kingdom's continuous floors and vertical collision.
import { stepPlayer, PLAYER_RADIUS } from '../noche-abierta/world3d.mjs';
import { pushOut } from '../escucha-3d/bump.mjs';

export const REALM_BOUNDS = { minX: -42, maxX: 42, minZ: -140, maxZ: 34 };
export const REALM_SPAWN = { x: 0, y: 0, z: 24, heading: Math.PI, speed: 0, vy: 0, jumpHeld: false, moving: false };
const HEIGHT = 1.7;
const STEP_HEIGHT = 0.42;
const GRAVITY = 21;
const JUMP_SPEED = 8.6; // ≈ 1.75 m apex: enough to land on a table or a hedge
// Low props (tables, stalls, an anvil, hedges, rocks) can be jumped onto and
// walked on; anything taller than this blocks like a wall.
export const CLIMB_HEIGHT = 1.8;
// Moving runs by default and Shift sprints. Nitro plays the sprint
// much faster: a flash dash across the kingdom.
export const NITRO_FACTOR = 2.6;

export function activeColliders(boxes, flags = {}, y = 0) {
  return boxes.filter(b => !(b.gate && flags[b.gate]) && y + HEIGHT > (b.minY ?? -Infinity) + 0.02 && y < (b.maxY ?? Infinity) - 0.03);
}

// Ground under the player: the floor, or the top of a low prop they are
// already above (its footprint grows by the body radius, as in stepPlayer).
export function groundAt(x, z, y, boxes, floorAt, flags = {}) {
  let h = Math.max(0, floorAt(x, z));
  for (const b of boxes) {
    if ((b.gate && flags[b.gate]) || b.maxY === undefined || b.maxY - (b.minY ?? 0) > CLIMB_HEIGHT || b.maxY <= h || y < b.maxY - 0.001) continue;
    if (x > b.minX - PLAYER_RADIUS && x < b.maxX + PLAYER_RADIUS && z > b.minZ - PLAYER_RADIUS && z < b.maxZ + PLAYER_RADIUS) h = b.maxY;
  }
  return h;
}

export function stepRealmPlayer(player, input, dt, boxes, floorAt, flags = {}, bounds = REALM_BOUNDS) {
  const total = Math.max(0, Math.min(0.1, Number.isFinite(dt) ? dt : 0));
  const count = Math.max(1, Math.ceil(total / (1 / 60)));
  const step = total / count;
  let p = { ...REALM_SPAWN, ...player };
  const jumpEdge = Boolean(input.jump && !p.jumpHeld);
  for (let i = 0; i < count; i++) {
    const old = { ...p };
    const support = groundAt(p.x, p.z, p.y, boxes, floorAt, flags);
    const grounded = p.y <= support + 0.045 && p.vy <= 0;
    if (grounded) { p.y = support; p.vy = 0; }
    if (i === 0 && jumpEdge && grounded) p.vy = JUMP_SPEED;
    const solids = activeColliders(boxes, flags, p.y).map(b => ({ x0: b.minX, x1: b.maxX, z0: b.minZ, z1: b.maxZ }));
    const nitro = input.nitro ? NITRO_FACTOR : 1;
    const horizontal = stepPlayer({ ...p, y: 0, vy: 0, jumpHeld: false, speed: (p.speed || 0) / nitro }, { ...input, jump: false, nitro: false, sprint: Boolean(input.sprint || input.nitro), walk: Boolean(input.walk && !input.sprint && !input.nitro) }, step * nitro, solids, bounds);
    let x = horizontal.x, z = horizontal.z;
    // A raised floor cannot teleport Gael up a terrace's vertical edge.
    const accessible = (px, pz) => floorAt(px, pz) <= p.y + STEP_HEIGHT;
    if (!accessible(x, z)) {
      if (accessible(x, p.z)) z = p.z;
      else if (accessible(p.x, z)) x = p.x;
      else { x = p.x; z = p.z; }
    }
    const floor = groundAt(x, z, p.y, boxes, floorAt, flags);
    let y = p.y + p.vy * step - GRAVITY * step * step / 2;
    let vy = p.vy - GRAVITY * step;
    // Follow a gentle ramp down instead of bouncing on each stair.
    if (grounded && !jumpEdge && support - floor < STEP_HEIGHT) { y = floor; vy = 0; }
    for (const box of boxes) {
      if (box.gate && flags[box.gate]) continue;
      if (box.minY === undefined || box.minY <= p.y + HEIGHT) continue;
      if (x + PLAYER_RADIUS <= box.minX || x - PLAYER_RADIUS >= box.maxX || z + PLAYER_RADIUS <= box.minZ || z - PLAYER_RADIUS >= box.maxZ) continue;
      if (y + HEIGHT >= box.minY && vy > 0) { y = Math.max(floor, box.minY - HEIGHT); vy = 0; }
    }
    if (y <= floor) { y = floor; vy = 0; }
    const distance = Math.hypot(x - old.x, z - old.z);
    p = { ...horizontal, x, z, y, vy, jumpHeld: Boolean(input.jump), speed: step ? distance / step : 0, moving: distance > 0.0001 };
  }
  return p;
}

// A spot the player may be pushed to: inside the realm, on reachable ground
// and clear of every wall or prop at that height.
export function standable(x, z, y, boxes, floorAt, flags = {}, bounds = REALM_BOUNDS) {
  if (x < bounds.minX + PLAYER_RADIUS || x > bounds.maxX - PLAYER_RADIUS || z < bounds.minZ + PLAYER_RADIUS || z > bounds.maxZ - PLAYER_RADIUS) return false;
  if (floorAt(x, z) > y + STEP_HEIGHT) return false;
  return !activeColliders(boxes, flags, y).some(b => x > b.minX - PLAYER_RADIUS && x < b.maxX + PLAYER_RADIUS && z > b.minZ - PLAYER_RADIUS && z < b.maxZ + PLAYER_RADIUS);
}

// People are solid: whoever stands on the player's level pushes them aside
// (never into a wall). Returns the moved player and who was touched.
export function shovePeople(player, people, boxes, floorAt, flags = {}) {
  const near = people.filter(person => Math.abs(person.y - player.y) < 1.6);
  const out = pushOut(player.x, player.z, near, (x, z) => standable(x, z, player.y, boxes, floorAt, flags));
  return { player: out.hit >= 0 ? { ...player, x: out.x, z: out.z } : player, hit: out.hit >= 0 ? near[out.hit] : null };
}

export function nearestInReach(player, positions, range = 3.4) {
  let nearest = null;
  let distance = range;
  for (const [id, pos] of Object.entries(positions)) {
    if (Math.abs(pos.y - player.y) > 2.4) continue;
    const d = Math.hypot(pos.x - player.x, pos.z - player.z);
    if (d < distance) { distance = d; nearest = id; }
  }
  return nearest;
}

export function safeCheckpoint(position, floorAt, boxes = [], flags = {}) {
  if (!position || ![position.x, position.y, position.z].every(Number.isFinite)) return { ...REALM_SPAWN };
  if (position.x < REALM_BOUNDS.minX + 1 || position.x > REALM_BOUNDS.maxX - 1 || position.z < REALM_BOUNDS.minZ + 1 || position.z > REALM_BOUNDS.maxZ - 1) return { ...REALM_SPAWN };
  const floor = floorAt(position.x, position.z);
  if (!Number.isFinite(floor) || Math.abs(position.y - floor) > 0.6) return { ...REALM_SPAWN };
  if (activeColliders(boxes, flags, floor).some(b => position.x > b.minX - PLAYER_RADIUS && position.x < b.maxX + PLAYER_RADIUS && position.z > b.minZ - PLAYER_RADIUS && position.z < b.maxZ + PLAYER_RADIUS)) return { ...REALM_SPAWN };
  return { ...REALM_SPAWN, x: position.x, y: Math.max(0, floor), z: position.z };
}
