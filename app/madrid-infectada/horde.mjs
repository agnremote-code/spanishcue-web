// Madrid infectada · the walking dead, as plain logic (no three.js), so the
// tests can run the horde for minutes and prove nobody ends up inside a wall.
// A pool of zombies is kept around the mascot: they appear out of sight in
// the streets and squares 22–52 m away, shamble about, turn towards the
// mascot when it comes close, groan, sometimes scream, and grab it (the
// vaccine's shield throws them back). The beam knocks them down for a while.
// Some are found crouched over a body under a sheet and get up when the
// mascot comes near. While a card is open, a vaccination runs or the class
// is paused they lose interest and walk away: nobody is attacked mid-sentence.

export const ZOMBIE_RADIUS = 0.35;
const CELL = 8;

/** A grid of the solids, so each body only checks the few boxes around it. */
export function solidIndex(solids, cell = CELL) {
  const buckets = new Map();
  const key = (i, j) => i * 100003 + j;
  for (const b of solids) {
    for (let i = Math.floor(b.x0 / cell); i <= Math.floor(b.x1 / cell); i++) for (let j = Math.floor(b.z0 / cell); j <= Math.floor(b.z1 / cell); j++) {
      const k = key(i, j);
      let list = buckets.get(k);
      if (!list) buckets.set(k, (list = []));
      list.push(b);
    }
  }
  return {
    near(x, z, r = 1) {
      const out = new Set();
      for (let i = Math.floor((x - r) / cell); i <= Math.floor((x + r) / cell); i++) for (let j = Math.floor((z - r) / cell); j <= Math.floor((z + r) / cell); j++) {
        const list = buckets.get(key(i, j));
        if (list) for (const b of list) out.add(b);
      }
      return [...out];
    },
  };
}

export const blockedAt = (x, z, boxes, r = ZOMBIE_RADIUS) => boxes.some((b) => x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r);

/** The nearest free point to (x, z), looking outwards in rings. */
export function freeNear(x, z, index, r = ZOMBIE_RADIUS) {
  if (!blockedAt(x, z, index.near(x, z, r + 0.5), r)) return { x, z };
  for (let d = 0.25; d <= 10; d += 0.25) {
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2, px = x + Math.sin(a) * d, pz = z + Math.cos(a) * d;
      if (!blockedAt(px, pz, index.near(px, pz, r + 0.5), r)) return { x: px, z: pz };
    }
  }
  return { x, z };
}

const rng = (seed) => { let v = seed >>> 0 || 1; return () => { v = (v * 1664525 + 1013904223) >>> 0; return v / 4294967296; }; };
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));

/**
 * The pool: `count` wanderers and one sleeper per body that has a feeder.
 * State: off (waiting to appear), wander, chase, leave (calm), stagger
 * (after a grab), down (knocked over by the beam), rise, feed.
 */
export function createHorde(count, feeders = [], seed = 1) {
  const rand = rng(seed);
  const horde = [];
  for (let i = 0; i < count; i++) {
    horde.push({ id: i, kind: 'walker', state: 'off', x: 0, z: 0, heading: 0, speed: 0, tx: 0, tz: 0, t: 0, cool: 0, groanIn: 3 + rand() * 6, runner: rand() < 0.12, seed: 900 + i * 37 });
  }
  feeders.forEach((f, i) => {
    horde.push({ id: count + i, kind: 'feeder', state: 'feed', home: { x: f.x, z: f.z, heading: f.heading }, x: f.x, z: f.z, heading: f.heading, speed: 0, tx: f.x, tz: f.z, t: 0, cool: 0, groanIn: 2 + rand() * 4, runner: false, seed: 1700 + i * 41 });
  });
  return { list: horde, rand, clock: 0, scan: 0 };
}

/**
 * One step. `world`: { index, bounds, ground (spawn points), people (bodies
 * to keep clear of), keepAway ([{ x, z, r }]: circles, survivors' spots,
 * metro stairs) }. `player`: { x, z }. `view`: unit vector the camera looks
 * along (zombies appear outside it). Returns the events of the step.
 */
export function stepHorde(horde, world, player, view, dt, calm) {
  const events = [];
  const rand = horde.rand;
  horde.clock += dt;
  horde.scan -= dt;
  const rescan = horde.scan <= 0;
  if (rescan) horde.scan = 0.5;
  for (const z of horde.list) {
    const dx = player.x - z.x, dz = player.z - z.z, d = Math.hypot(dx, dz);
    z.cool = Math.max(0, z.cool - dt);
    // ---- appearing (and being recycled when left far behind)
    if (z.kind === 'walker' && rescan && (z.state === 'off' || (d > 64 && z.state !== 'down'))) {
      const at = spawnPoint(world, player, view, rand);
      if (at) { z.x = at.x; z.z = at.z; z.state = 'wander'; z.heading = rand() * Math.PI * 2; pickTarget(z, world, rand); }
      else z.state = 'off';
      continue;
    }
    if (z.state === 'off') continue;
    if (z.kind === 'feeder' && z.state !== 'feed' && d > 70) { Object.assign(z, { state: 'feed', x: z.home.x, z: z.home.z, heading: z.home.heading }); continue; }

    // ---- what it wants
    if (calm && d < 13 && z.state !== 'down' && z.state !== 'rise' && z.state !== 'feed') z.state = 'leave';
    else if (z.state === 'leave' && (!calm || d > 16)) z.state = 'wander';
    if (!calm && (z.state === 'wander' || z.state === 'feed') && d < (z.state === 'feed' ? 9 : 13)) {
      if (z.state === 'feed' || rand() < 0.5) events.push({ type: 'scream', id: z.id, d });
      z.state = 'chase';
    }
    if (z.state === 'chase' && (d > 24 || calm)) { z.state = calm ? 'leave' : 'wander'; pickTarget(z, world, rand); }

    let speed = 0, goal = z.heading;
    switch (z.state) {
      case 'feed': speed = 0; break;
      case 'down': z.t -= dt; if (z.t <= 0) { z.state = 'rise'; z.t = 1.3; } break;
      case 'rise': z.t -= dt; if (z.t <= 0) { z.state = 'wander'; pickTarget(z, world, rand); } break;
      case 'stagger': z.t -= dt; speed = -0.9; goal = Math.atan2(dx, dz); if (z.t <= 0) z.state = 'chase'; break;
      case 'leave': speed = 0.75; goal = Math.atan2(-dx, -dz); break;
      case 'chase': speed = z.runner ? 1.9 : 1.05 + (z.seed % 5) * 0.06; goal = Math.atan2(dx, dz); break;
      default: {
        speed = 0.45 + (z.seed % 7) * 0.03;
        if (Math.hypot(z.tx - z.x, z.tz - z.z) < 1 || z.t <= 0) pickTarget(z, world, rand);
        z.t -= dt;
        goal = Math.atan2(z.tx - z.x, z.tz - z.z);
      }
    }
    // The shamble: the heading wavers.
    if (speed > 0) goal += Math.sin(horde.clock * 1.7 + z.seed) * 0.25;
    z.heading = wrap(z.heading + wrap(goal - z.heading) * Math.min(1, dt * (z.state === 'chase' ? 3 : 1.6)));
    z.speed = speed;

    // ---- moving, never through a wall, a person or a circle
    if (speed !== 0) {
      const dir = speed > 0 ? z.heading : z.heading + Math.PI, v = Math.abs(speed) * dt;
      let moved = false;
      for (const turn of [0, 0.7, -0.7, 1.4, -1.4]) {
        const nx = z.x + Math.sin(dir + turn) * v, nz = z.z + Math.cos(dir + turn) * v;
        if (!inBounds(nx, nz, world.bounds) || blockedAt(nx, nz, world.index.near(nx, nz, 1))) continue;
        if (world.keepAway.some((k) => Math.hypot(k.x - nx, k.z - nz) < k.r && Math.hypot(k.x - nx, k.z - nz) < Math.hypot(k.x - z.x, k.z - z.z))) continue;
        z.x = nx; z.z = nz; moved = true;
        if (turn !== 0 && z.state === 'wander') z.t = Math.min(z.t, 0.8);
        break;
      }
      if (!moved && z.state === 'wander') pickTarget(z, world, rand);
    }
    // Bodies are solid: step out of anyone standing there.
    for (const p of world.people) {
      const ex = z.x - p.x, ez = z.z - p.z, e = Math.hypot(ex, ez);
      if (e < 0.9 && e > 0.001) { z.x = p.x + (ex / e) * 0.9; z.z = p.z + (ez / e) * 0.9; }
    }
    for (const o of horde.list) {
      if (o === z || o.state === 'off') continue;
      const ex = z.x - o.x, ez = z.z - o.z, e = Math.hypot(ex, ez);
      if (e < 0.7 && e > 0.001) { z.x += (ex / e) * (0.7 - e) * 0.5; z.z += (ez / e) * (0.7 - e) * 0.5; }
    }
    const safe = freeNear(z.x, z.z, world.index);
    z.x = safe.x; z.z = safe.z;

    // ---- the grab: the shield holds and throws it back
    if (z.state === 'chase' && !calm && d < 0.95 && z.cool <= 0) {
      z.cool = 3; z.state = 'stagger'; z.t = 1.1;
      events.push({ type: 'grab', id: z.id, d });
    }
    // ---- groans, louder when close
    if (d < 18 && z.state !== 'down') {
      z.groanIn -= dt;
      if (z.groanIn <= 0) { z.groanIn = (z.state === 'chase' ? 2.5 : 5) + rand() * 5; events.push({ type: 'groan', id: z.id, d }); }
    }
  }
  return events;
}

/** The beam knocks a zombie over; it gets up a few seconds later. */
export function knockDown(z) {
  z.state = 'down'; z.t = 6 + (z.seed % 3); z.speed = 0;
}

const inBounds = (x, z, b) => !b || (x > b.minX + 1 && x < b.maxX - 1 && z > b.minZ + 1 && z < b.maxZ - 1);

function pickTarget(z, world, rand) {
  const options = world.ground.filter((p) => Math.abs(p.x - z.x) < 16 && Math.abs(p.z - z.z) < 16);
  const p = options.length ? options[Math.floor(rand() * options.length)] : { x: z.x, z: z.z };
  z.tx = p.x; z.tz = p.z; z.t = 6 + rand() * 6;
}

function spawnPoint(world, player, view, rand) {
  for (let tries = 0; tries < 14; tries++) {
    const p = world.ground[Math.floor(rand() * world.ground.length)];
    const dx = p.x - player.x, dz = p.z - player.z, d = Math.hypot(dx, dz);
    if (d < 22 || d > 52) continue;
    // Out of sight: behind or beside the camera, or far in the fog.
    if (d < 40 && (dx * view.x + dz * view.z) / d > 0.25) continue;
    if (world.keepAway.some((k) => Math.hypot(k.x - p.x, k.z - p.z) < k.r + 4)) continue;
    if (blockedAt(p.x, p.z, world.index.near(p.x, p.z, 1))) continue;
    return p;
  }
  return null;
}
