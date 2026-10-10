// Noche abierta · stealing and driving cars and motorbikes: where they wait,
// that you can walk up to each one, and how they move and crash.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const drive = await import('../app/noche-abierta/drive.mjs');
const world = await import('../app/noche-abierta/world3d.mjs');
const city = await import('../app/noche-abierta/city.mjs');
const street = await import('../app/noche-abierta/street.mjs');

const castSizes = Object.fromEntries(street.ENCOUNTERS.map(item => [item.id, item.cast.length]));
const base = world.colliders(castSizes).filter(box => !box.npc);
const { DRIVABLES, SPECS } = drive;
const clone = (item) => ({ x: item.x, z: item.z, heading: item.heading, speed: 0 });

test('there are cars and motorbikes to take, spread over the city', () => {
  const kinds = new Set(DRIVABLES.map(item => item.kind));
  assert.ok(DRIVABLES.filter(item => item.kind === 'moto').length >= 6, 'enough motorbikes');
  assert.ok(DRIVABLES.filter(item => item.kind !== 'moto').length >= 10, 'enough cars');
  for (const kind of ['sedan', 'coupe', 'taxi', 'van', 'moto']) assert.ok(kinds.has(kind), kind);
  assert.equal(new Set(DRIVABLES.map(item => item.id)).size, DRIVABLES.length, 'unique ids');
  const zones = new Set(DRIVABLES.map(item => city.districtAt(item.x, item.z)));
  assert.ok(zones.size >= 4, `spread over districts (${[...zones].join(', ')})`);
  for (const item of DRIVABLES) assert.ok(SPECS[item.kind], item.id);
});

test('every vehicle waits on clear ground and can be reached on foot', () => {
  for (const item of DRIVABLES) {
    const spec = SPECS[item.kind];
    assert.ok(drive.bodyClear(item.x, item.z, item.heading, spec, base), `${item.id} is not inside a building, prop or parked car`);
    // Someone on foot can stand within the boarding radius.
    let reach = false;
    for (let k = 0; k < 16 && !reach; k++) for (const r of [1.7, 2.1, 2.4]) {
      const a = (k / 16) * Math.PI * 2;
      if (world.isWalkable(item.x + Math.cos(a) * r, item.z + Math.sin(a) * r, base)) { reach = true; break; }
    }
    assert.ok(reach, `${item.id} can be walked up to`);
    assert.ok(Math.abs(item.x) < 126 && item.z > -122 && item.z < 116, `${item.id} is inside the city`);
  }
});

test('vehicles do not overlap each other or the places and scenes you walk to', () => {
  for (let i = 0; i < DRIVABLES.length; i++) for (let j = i + 1; j < DRIVABLES.length; j++) {
    const a = DRIVABLES[i], b = DRIVABLES[j];
    assert.ok(Math.hypot(a.x - b.x, a.z - b.z) > 5, `${a.id} and ${b.id} are apart`);
  }
  for (const target of world.TARGETS) for (const item of DRIVABLES) assert.ok(Math.hypot(item.x - target.x, item.z - target.z) > 3.2, `${item.id} is not on top of ${target.id}`);
  for (const parked of city.CITY_PARKED) for (const item of DRIVABLES) assert.ok(Math.hypot(item.x - parked.x, item.z - parked.z) > 4, `${item.id} is not on top of ${parked.id}`);
});

test('you can only board one that is close, and the nearest wins', () => {
  const car = DRIVABLES[0];
  assert.equal(drive.nearestDrivable({ x: car.x + 1, z: car.z }).id, car.id);
  assert.equal(drive.nearestDrivable({ x: car.x + 9, z: car.z }), null);
  assert.equal(drive.nearestDrivable({ x: car.x, z: car.z }, DRIVABLES, car.id), null, 'a taken one is skipped');
});

test('a car accelerates, holds a top speed and a motorbike is quicker', () => {
  const run = (kind, seconds, input = { y: 1 }) => {
    let state = { x: 0, z: 0, heading: 0, speed: 0 };
    for (let t = 0; t < seconds; t += 0.02) state = { ...drive.stepVehicle(state, input, 0.02, SPECS[kind], [], { minX: -1e5, maxX: 1e5, minZ: -1e5, maxZ: 1e5 }) };
    return state;
  };
  const sedan = run('sedan', 10), moto = run('moto', 10);
  assert.ok(sedan.speed > 12 && sedan.speed <= SPECS.sedan.max + 0.01, `sedan ${sedan.speed}`);
  assert.ok(moto.speed > sedan.speed, 'moto is faster');
  assert.ok(sedan.x > 60, 'it travelled');
  const reversing = run('sedan', 4, { y: -1 });
  assert.ok(reversing.speed < 0 && reversing.speed >= -SPECS.sedan.reverse - 0.01, 'reverse is slow');
  assert.ok(run('sedan', 12, { y: 0 }).speed === 0, 'it rolls to a stop without a throttle');
});

test('steering turns it, and standing still does not', () => {
  const free = { minX: -1e5, maxX: 1e5, minZ: -1e5, maxZ: 1e5 };
  let state = { x: 0, z: 0, heading: 0, speed: 8 };
  for (let t = 0; t < 1; t += 0.02) state = drive.stepVehicle(state, { x: 1, y: 1 }, 0.02, SPECS.sedan, [], free);
  assert.ok(state.heading > 0.3, 'right raises the heading');
  let left = { x: 0, z: 0, heading: 0, speed: 8 };
  for (let t = 0; t < 1; t += 0.02) left = drive.stepVehicle(left, { x: -1, y: 1 }, 0.02, SPECS.sedan, [], free);
  assert.ok(left.heading < -0.3, 'left lowers it');
  const still = drive.stepVehicle({ x: 0, z: 0, heading: 0, speed: 0 }, { x: 1, y: 0 }, 0.05, SPECS.sedan, [], free);
  assert.equal(still.heading, 0, 'no steering at a standstill');
});

test('walls stop you, knock you back and are never driven through', () => {
  const wall = [{ x0: 20, x1: 24, z0: -50, z1: 50 }];
  const bounds = { minX: -1e5, maxX: 1e5, minZ: -1e5, maxZ: 1e5 };
  let state = { x: 0, z: 0, heading: 0, speed: 0 };
  let hardest = 0;
  for (let t = 0; t < 8; t += 0.016) {
    const next = drive.stepVehicle(state, { y: 1, boost: true }, 0.016, SPECS.moto, wall, bounds);
    hardest = Math.max(hardest, next.hit);
    state = next;
    assert.ok(state.x + SPECS.moto.half <= 20 + 0.01, `x ${state.x} stays outside the wall`);
  }
  assert.ok(hardest > 5, 'the crash was felt');
  assert.ok(drive.bodyClear(state.x, state.z, state.heading, SPECS.moto, wall, bounds), 'it ends on free ground');
});

test('a full-speed run into every building edge never ends inside a collider', () => {
  const small = { minX: -126, maxX: 126, minZ: -122, maxZ: 116 };
  for (const item of DRIVABLES.slice(0, 12)) {
    let state = clone(item);
    for (let t = 0; t < 20; t += 0.02) {
      state = drive.stepVehicle(state, { y: 1, x: Math.sin(t * 0.7), boost: true }, 0.02, SPECS[item.kind], base, small);
      assert.ok(drive.bodyClear(state.x, state.z, state.heading, SPECS[item.kind], base, small), `${item.id} at ${t.toFixed(2)}s is clear`);
    }
  }
});

test('stepping out puts you on free ground beside the vehicle', () => {
  for (const item of DRIVABLES) {
    const spec = SPECS[item.kind];
    const free = (x, z) => world.isWalkable(x, z, base);
    const out = drive.dismountSpot(clone(item), spec, free);
    assert.ok(Math.hypot(out.x - item.x, out.z - item.z) >= spec.radius + 0.4, `${item.id}: you do not appear inside it`);
    assert.ok(free(out.x, out.z), `${item.id}: the exit point is walkable`);
  }
});

test('the player faces the way the vehicle goes', () => {
  assert.ok(Math.abs(Math.sin(drive.playerHeading(0)) - 1) < 1e-9, 'heading 0 is +x');
  const h = 0.8;
  const forward = { x: Math.cos(h), z: Math.sin(h) };
  const player = drive.playerHeading(h);
  assert.ok(Math.abs(Math.sin(player) - forward.x) < 1e-9 && Math.abs(Math.cos(player) - forward.z) < 1e-9);
});

test('the world wires it up: prompt, owner shout, police, exit and the map', () => {
  const source = readFileSync(new URL('../app/noche-abierta/World3D.tsx', import.meta.url), 'utf8');
  for (const needle of ['driveSpots()', 'board(', 'stopDriving', 'stepVehicle(', 'OWNER_SHOUT_AFTER', 'POLICE_AFTER', "verb: 'ROBAR'", "verb: 'BAJAR'", "kind: 'drive'", 'na-drive-hud']) assert.ok(source.includes(needle), needle);
  const meshes = readFileSync(new URL('../app/noche-abierta/drive3d.ts', import.meta.url), 'utf8');
  assert.ok(meshes.includes('makeMoto') && meshes.includes('makeCar'));
  assert.ok(meshes.includes('rig.driver?.root.removeFromParent()'), 'a taken taxi has no driver');
});
