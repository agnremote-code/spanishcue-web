// Noche abierta · bumping into the city: props you can jump onto, people who
// never block the way, and the yell when you crash into someone.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const world = await import('../app/noche-abierta/world3d.mjs');
const city = await import('../app/noche-abierta/city.mjs');
const street = await import('../app/noche-abierta/street.mjs');
const { PERSON_RADIUS, pushOut } = await import('../app/escucha-3d/bump.mjs');

const castSizes = Object.fromEntries(street.ENCOUNTERS.map(item => [item.id, item.cast.length]));
const boxes = world.colliders(castSizes);
const solids = boxes.filter(box => !box.npc);
const B = world.WORLD_BOUNDS;
// Everyone standing on the ground: the plaza's people and the city's.
const people = [
  ...world.NPCS.filter(n => !n.walk && !n.seated).map(n => ({ id: n.id, x: n.x, z: n.z })),
  ...city.standingPeople(castSizes).filter(p => !p.seated).map(p => ({ id: p.id, x: p.x, z: p.z })),
];

test('low props have a top you can land on; walls, fences and tall things do not', () => {
  const apex = 10.5 ** 2 / 36;
  const tops = boxes.filter(b => b.top != null);
  assert.ok(tops.length >= 60, `${tops.length} climbable boxes`);
  for (const b of tops) assert.ok(b.top > 0 && b.top < apex, JSON.stringify(b));
  for (const prop of city.CITY_PROPS) {
    const top = city.climbTop(prop);
    if (['fence', 'gate', 'scaffold', 'crane', 'tunnel-wall', 'statue', 'tent'].includes(prop.kind)) assert.equal(top, undefined, prop.id);
    if (top != null) assert.ok(top <= prop.h + 0.01, `${prop.id} is not taller than drawn`);
  }
  for (const kind of ['bench', 'bin', 'table', 'dumpster', 'fountain']) assert.ok(city.CITY_PROPS.some(p => p.kind === kind && city.climbTop(p)), kind);
  assert.ok(boxes.every(b => !b.building || b.top == null), 'buildings stay walls');
  assert.ok(world.roomLayout('interior-bar').solids.some(b => b.top), 'the bar has furniture to climb');
  assert.ok(city.streetRoomLayout('sala-lavanderia').solids.some(b => b.top), 'so does the laundromat');
});

test('space lands you on a bench, you walk on it and fall off its edge', () => {
  const bench = boxes.find(b => b.prop === 'banco-placita');
  assert.equal(bench.top, 0.5);
  const cx = (bench.x0 + bench.x1) / 2;
  let p = { x: cx, z: bench.z1 + 0.6, heading: Math.PI };
  // Jump toward it and let go of the stick once over the seat.
  for (let i = 0; i < 80; i++) p = world.stepPlayer(p, { y: p.z > bench.z1 - 0.2 ? 1 : 0, yaw: Math.PI, walk: true, jump: i === 0 }, 1 / 60, boxes);
  assert.equal(p.y, 0.5, JSON.stringify(p));
  // Along the bench, then off its end.
  for (let i = 0; i < 120; i++) p = world.stepPlayer(p, { y: 1, yaw: Math.PI / 2, walk: true }, 1 / 60, boxes);
  assert.equal(p.y, 0);
  assert.ok(p.x > bench.x1, 'walked off the end');
  // A fence stays a fence, jump or not.
  const fence = boxes.find(b => b.prop === 'obra-n');
  p = { x: -110, z: fence.z0 - 1, heading: 0 };
  for (let i = 0; i < 90; i++) p = world.stepPlayer(p, { y: 1, yaw: 0, jump: i === 0 }, 1 / 60, boxes);
  assert.ok(p.z < fence.z0, 'still outside');
});

// Walk the city half a metre at a time with everyone standing as a solid body.
test('nobody standing blocks a door, a circle or a person you talk to', () => {
  const STEP = 0.5;
  const nx = Math.round((B.maxX - B.minX) / STEP) + 1;
  const nz = Math.round((B.maxZ - B.minZ) / STEP) + 1;
  const free = (x, z) => world.isWalkable(x, z, solids) && people.every(p => Math.hypot(p.x - x, p.z - z) >= PERSON_RADIUS);
  const reached = new Uint8Array(nx * nz);
  const start = [Math.round((world.SPAWN.x - B.minX) / STEP), Math.round((world.SPAWN.z - B.minZ) / STEP)];
  const queue = [start];
  reached[start[0] * nz + start[1]] = 1;
  while (queue.length) {
    const [i, j] = queue.pop();
    for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const I = i + a, J = j + b;
      if (I < 0 || J < 0 || I >= nx || J >= nz || reached[I * nz + J]) continue;
      reached[I * nz + J] = free(B.minX + I * STEP, B.minZ + J * STEP) ? 1 : 2;
      if (reached[I * nz + J] === 1) queue.push([I, J]);
    }
  }
  // Inside the circle: some reachable point within its radius.
  const reach = (x, z, radius = 1.2) => {
    const r = Math.ceil(radius / STEP);
    const i0 = Math.round((x - B.minX) / STEP), j0 = Math.round((z - B.minZ) / STEP);
    for (let i = i0 - r; i <= i0 + r; i++) for (let j = j0 - r; j <= j0 + r; j++) {
      if (reached[i * nz + j] === 1 && Math.hypot(B.minX + i * STEP - x, B.minZ + j * STEP - z) < radius) return true;
    }
    return false;
  };
  const blocked = [];
  for (const target of world.TARGETS) if (!reach(target.x, target.z, Math.min(target.radius ?? 1.4, 1.4))) blocked.push(target.id);
  for (const door of city.ROOM_DOORS) if (!reach(door.x, door.z)) blocked.push(door.id);
  for (const [id, place] of Object.entries(city.PLACEMENTS)) {
    if (place.room) continue;
    const p = city.placementOf(id);
    if (p.circle.follow) { for (const point of [p.walk.from, p.walk.to]) if (!reach(point.x, point.z)) blocked.push(`${id} walk`); continue; }
    if (!reach(p.circle.x, p.circle.z)) blocked.push(id);
  }
  assert.deepEqual(blocked, []);
});

test('the player is pushed out of a person, never into a wall', () => {
  const someone = people.find(p => p.id === 'pablo');
  const out = pushOut(someone.x + 0.1, someone.z, [someone], (x, z) => world.isWalkable(x, z, solids));
  assert.equal(out.hit, 0);
  assert.ok(Math.hypot(out.x - someone.x, out.z - someone.z) >= PERSON_RADIUS - 1e-6);
  const wall = pushOut(someone.x + 0.1, someone.z, [someone], () => false);
  assert.equal(wall.x, someone.x + 0.1, 'a wall keeps you where you were');
});

test('crashing into someone: insult, angry face, red bubble, mute wired to the voices switch', () => {
  const src = readFileSync(new URL('../app/noche-abierta/World3D.tsx', import.meta.url), 'utf8');
  for (const needle of ['pushOut(', 'createBumpClock(', 'insultFor(', 'shout(', "'furious'", 'angry: true']) assert.ok(src.includes(needle), needle);
  const ui = readFileSync(new URL('../app/noche-abierta/NocheGame.tsx', import.meta.url), 'utf8');
  assert.ok(ui.includes('setShoutMuted('), 'the voices switch mutes the yells too');
  const css = readFileSync(new URL('../app/noche-abierta/noche-abierta.css', import.meta.url), 'utf8');
  assert.ok(/\.na-bubble\.is-angry\s*\{[^}]*background:\s*#[a-f0-9]{3,6}/i.test(css), 'red bubble');
});
