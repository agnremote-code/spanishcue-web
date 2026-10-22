// Every 3D class: nobody ends up inside an object (Ale, 2026-10-21). The
// mascot and every person bump into walls, furniture, cars and counters, or
// stand on top of them, but never sit in the middle of them like a ghost.
//
// Each world below lists its solids, the people standing or sitting in it,
// the walkers' routes and the places the mascot is put (spawn, circles,
// arrivals). A new 3D world belongs in WORLDS so it is checked too.
import test from 'node:test';
import assert from 'node:assert/strict';

const { PLAYER_RADIUS, stepPlayer, escapeSolids, colliders, NPCS, SPAWN: NOCHE_SPAWN, WORLD_BOUNDS, ROOMS, roomLayout } = await import('../app/noche-abierta/world3d.mjs');
const city = await import('../app/noche-abierta/city.mjs');
const street = await import('../app/noche-abierta/street.mjs');
const hospital = await import('../app/hospital-san-casi-vivo/layout.mjs');
const casino = await import('../app/marketing-de-casinos/layout.mjs');
const feria = await import('../app/la-feria-de-villaluz/layout.mjs');
const feriaLevels = await import('../app/la-feria-de-villaluz/levels.mjs');
const madrid = await import('../app/madrid-infectada/layout.mjs');
const bosque = await import('../app/bosque-de-los-hongos-gigantes/engine.mjs');
const { pushOut } = await import('../app/escucha-3d/bump.mjs');

const BODY = 0.25; // half the width of a person
const SEAT_TOP = 1.3; // someone sitting may sit on (or at) anything this low
const overlaps = (x, z, r, b) => x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r;
const name = (b) => b.prop ?? b.building ?? b.vehicle ?? (b.water ? 'water' : `[${[b.x0, b.x1, b.z0, b.z1].map(v => +v.toFixed(2)).join(', ')}]`);

// People that are meant to be inside a box, and why. Nothing else is.
const ALLOWED = new Set([
  'casino:caja', // the cashier stands inside the cage: a hollow booth behind its counter
  'noche:sur-hamacas', // sitting on a swing, inside the swings' frame
]);

// ------------------------------------------------------------------ worlds
const castSizes = Object.fromEntries(street.ENCOUNTERS.map(item => [item.id, item.cast.length]));
const sample = (points, closed, step = 0.25) => {
  const pts = closed ? [...points, points[0]] : points;
  const out = [];
  for (let i = 1; i < pts.length; i++) {
    const [ax, az] = pts[i - 1], [bx, bz] = pts[i];
    const n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / step));
    for (let k = 0; k <= n; k++) out.push({ x: ax + (bx - ax) * k / n, z: az + (bz - az) * k / n, dx: (bx - ax), dz: (bz - az) });
  }
  return out;
};
const sideways = (points, offset) => points.map(p => { const l = Math.hypot(p.dx, p.dz) || 1; return { x: p.x - p.dz / l * offset, z: p.z + p.dx / l * offset }; });

function nocheStreet() {
  const solids = colliders(castSizes).filter(b => !b.npc);
  const people = [
    ...NPCS.filter(n => !n.walk).map(n => ({ id: n.id, x: n.x, z: n.z, seated: n.seated })),
    ...city.standingPeople(castSizes).map(p => ({ id: p.id, x: p.x, z: p.z, seated: p.seated })),
    ...city.ANIMALS.filter(a => a.x != null && !(a.y > 0)).map(a => ({ id: a.id, x: a.x, z: a.z })),
  ];
  const walkers = [
    ...NPCS.filter(n => n.walk).map(n => ({ id: n.id, points: sample(n.walk.axis === 'x' ? [[n.walk.from, n.z], [n.walk.to, n.z]] : [[n.x, n.walk.from], [n.x, n.walk.to]], false) })),
    ...city.WALKER_ROUTES.map(r => ({ id: r.id, points: sample(r.points, r.points.length >= 4) })),
    ...city.ANIMALS.filter(a => a.route).map(a => { const r = city.WALKER_ROUTES.find(x => x.id === a.route); return { id: a.id, r: 0.2, points: sideways(sample(r.points, r.points.length >= 4), 0.5) }; }),
  ];
  // People in the street step aside for the mascot, so they don't count as
  // walls for the walkers (their own avoidance handles them).
  return { id: 'noche', solids, people, walkers, staticWalkers: false, bounds: WORLD_BOUNDS, spots: [{ id: 'spawn', ...NOCHE_SPAWN }] };
}

function nocheRooms() {
  return Object.keys(ROOMS).map(stage => {
    const room = roomLayout(stage);
    return { id: `noche:${stage}`, solids: room.solids, people: [], walkers: [], bounds: room.bounds, spots: [{ id: 'spawn', ...room.spawn }, { id: 'exit', ...room.exit }, ...room.hotspots.map(h => ({ id: h.id, x: h.x, z: h.z }))] };
  }).concat(Object.keys(city.STREET_ROOMS).map(stage => {
    const room = city.streetRoomLayout(stage);
    const people = Object.entries(city.PLACEMENTS).filter(([, p]) => p.room === stage).flatMap(([id]) => city.castSpots(id, castSizes[id] ?? 1).map(s => ({ id, x: s.x, z: s.z, seated: s.seated })));
    return { id: `noche:${stage}`, solids: room.solids, people, walkers: [], bounds: room.bounds, spots: [{ id: 'spawn', ...room.spawn }, { id: 'exit', ...room.exit }] };
  }));
}

const floorWorld = (game, layout, floor, opts) => {
  const scenes = layout.SCENES.filter(s => s.floor === floor);
  const scenePeople = scenes.flatMap(s => [s.npc, ...(s.extras ?? [])].map((p, i) => ({
    id: s.id, x: p.x, z: p.z, y: p.y ?? 0,
    seated: Boolean(p.seat || p.lying || /sit|lie|sleep/.test(p.pose ?? (i === 0 ? s.pose : '') ?? '')),
  })));
  const isPersonBox = b => scenes.some(s => [s.npc, ...(s.extras ?? [])].some(p => Math.abs((b.x0 + b.x1) / 2 - p.x) < 1e-6 && Math.abs((b.z0 + b.z1) / 2 - p.z) < 1e-6 && Math.abs(b.x1 - b.x0 - 0.6) < 1e-6));
  const solids = layout.solidsFor(floor).filter(b => !isPersonBox(b));
  const crowd = (layout.CROWD[floor] ?? []).filter(c => !c.walk).map((c, i) => ({ id: `crowd-${i}`, x: c.x, z: c.z, y: c.y ?? 0, seated: Boolean(c.seat || /sit|lie|sleep|read|cry|fallen/.test(c.pose)), lying: /lie|fallen/.test(c.pose) }));
  const spots = scenes.map(s => ({ id: s.id, ...s.spot }));
  return { id: `${game}:${floor}`, solids, people: [...scenePeople, ...crowd], walkers: opts.walkers(floor), staticWalkers: true, bounds: layout.floorById(floor).bounds, spots: [...spots, ...opts.spots(floor)] };
};

function hospitalFloors() {
  const carry = w => (['stretcher', 'wheelchair', 'cart'].includes(w.carry) ? 0.45 : BODY);
  return hospital.FLOOR_IDS.map(floor => floorWorld('hospital', hospital, floor, {
    walkers: f => (hospital.WALKERS[f] ?? []).map((w, i) => {
      const pts = [];
      for (let t = 0; t < 900; t += 0.05) pts.push(hospital.walkerAt(w, t));
      return { id: `walker-${i}`, r: carry(w), points: pts };
    }),
    spots: f => [hospital.ELEVATOR_ARRIVAL, hospital.STAIRS_ARRIVAL, ...(f === hospital.SPAWN.floor ? [hospital.SPAWN] : [])].map((p, i) => ({ id: ['ascensor', 'escalera', 'spawn'][i], ...p })),
  }));
}

function casinoFloors() {
  return casino.FLOORS.map(f => f.id).map(floor => floorWorld('casino', casino, floor, {
    walkers: f => (casino.CROWD[f] ?? []).filter(c => c.walk).map((c, i) => ({ id: `walker-${i}`, points: sample(c.walk.axis === 'x' ? [[c.walk.from, c.z], [c.walk.to, c.z]] : [[c.x, c.walk.from], [c.x, c.walk.to]], false) })),
    spots: f => [casino.ELEVATOR_ARRIVAL, ...(f === casino.SPAWN.floor ? [casino.SPAWN] : [])].map((p, i) => ({ id: ['ascensor', 'spawn'][i], ...p })),
  }));
}

function feriaWorld() {
  const busca = feriaLevels.CONTENT.A2.BUSCA.flatMap(set => {
    const circle = feria.CIRCLES.find(c => c.n === set.circle || c.id === set.circle).id;
    return feria.placeSet(set, circle).map(p => ({ id: `${set.id}/${p.figure.id}`, x: p.x, z: p.z }));
  });
  return {
    id: 'feria', solids: feria.SOLIDS, bounds: feria.BOUNDS, walkers: [], staticWalkers: true,
    people: [...feria.CIRCLES.map(c => ({ id: `host-${c.id}`, x: c.npc.x, z: c.npc.z })), ...feria.crowd(24).map((p, i) => ({ id: `crowd-${i}`, x: p.x, z: p.z })), ...busca],
    spots: [{ id: 'spawn', ...feria.SPAWN }, ...feria.CIRCLES.flatMap(c => [{ id: c.id, ...c.spot }, { id: `${c.id}-llegada`, ...feria.arrival(c.id) }])],
  };
}

// Madrid infectada: one world per zone. The mascot starts at the spawn, a few
// steps past it, or (coming back from the next zone) just inside the gate.
function madridZones() {
  return madrid.ZONE_ORDER.map(id => {
    const z = madrid.layoutOf(id);
    const solids = madrid.solidsFor(id);
    const fwd = { x: z.spawn.x + Math.sin(z.spawn.heading) * 4.5, z: z.spawn.z + Math.cos(z.spawn.heading) * 4.5 };
    const clearFwd = z.back && !solids.some(b => overlaps(fwd.x, fwd.z, 0.6, b));
    const gateIn = z.gate && { x: z.gate.x + (z.spawn.x - z.gate.x) * 0.12, z: z.gate.z + (z.spawn.z - z.gate.z) * 0.12 };
    return {
      id: `madrid:${id}`, solids, bounds: z.bounds, staticWalkers: true,
      walkers: (z.zombies ?? []).map(w => ({ id: `zombie-${w.seed}`, points: sample(w.path, false) })), people: madrid.peopleOf(id),
      spots: [{ id: 'spawn', ...z.spawn }, ...(clearFwd ? [{ id: 'adelante', ...fwd }] : []), ...(gateIn ? [{ id: 'vuelta', ...gateIn }] : []), ...z.spots.map(s => ({ id: s.id, x: s.x, z: s.z }))],
    };
  });
}

const WORLDS = [nocheStreet(), ...nocheRooms(), ...hospitalFloors(), ...casinoFloors(), feriaWorld(), ...madridZones()];

// ------------------------------------------------------------------ checks
test('every world in the list has solids, people or walkers to check', () => {
  assert.ok(WORLDS.length >= 12, WORLDS.map(w => w.id).join(', '));
  for (const w of WORLDS) assert.ok(w.solids.length > 0, w.id);
});

test('nobody stands inside a wall, a piece of furniture, a car or a stall', () => {
  const bad = [];
  for (const w of WORLDS) for (const p of w.people) {
    if (ALLOWED.has(`${w.id.split(':')[0]}:${p.id}`)) continue;
    const r = p.lying ? 0.45 : BODY;
    // Standing on something (a dancer on the stage) is fine; sitting on a
    // seat, a bench or at a table too, but never inside anything taller.
    const hits = w.solids.filter(b => overlaps(p.x, p.z, r, b) && !(b.top != null && (p.y ?? 0) >= b.top - 0.02) && !(p.seated && b.top != null && b.top <= SEAT_TOP));
    if (hits.length) bad.push(`${w.id} ${p.id} (${p.x.toFixed(2)}, ${p.z.toFixed(2)}) inside ${hits.map(name).join(', ')}`);
  }
  assert.deepEqual(bad, []);
});

test('nobody walks through a solid, nor through someone standing still', () => {
  const bad = [];
  for (const w of WORLDS) for (const walker of w.walkers) {
    const r = walker.r ?? BODY;
    const seen = new Set();
    for (const q of walker.points) {
      for (const b of w.solids) if (overlaps(q.x, q.z, r, b) && !seen.has(b)) { seen.add(b); bad.push(`${w.id} ${walker.id} (${q.x.toFixed(1)}, ${q.z.toFixed(1)}) through ${name(b)}`); }
      if (!w.staticWalkers) continue;
      for (const p of w.people) if (Math.hypot(q.x - p.x, q.z - p.z) < r + (p.lying ? 0.45 : BODY) && !seen.has(p)) { seen.add(p); bad.push(`${w.id} ${walker.id} (${q.x.toFixed(1)}, ${q.z.toFixed(1)}) through ${p.id}`); }
    }
  }
  assert.deepEqual(bad, []);
});

test('the mascot is never put inside anything: spawn, circles, arrivals, doors', () => {
  const bad = [];
  for (const w of WORLDS) for (const s of w.spots) {
    const hits = w.solids.filter(b => overlaps(s.x, s.z, PLAYER_RADIUS, b));
    if (hits.length) bad.push(`${w.id} ${s.id} (${s.x.toFixed(2)}, ${s.z.toFixed(2)}) inside ${hits.map(name).join(', ')}`);
  }
  assert.deepEqual(bad, []);
});

// Wherever the mascot runs and jumps, after every step it is either clear of
// every box or standing on top of one.
const embedded = (p, boxes) => boxes.filter(b => (b.top == null || p.y < b.top - 0.001) && overlaps(p.x, p.z, PLAYER_RADIUS - 1e-6, b));
function wander(world, frames, seed) {
  let s = seed;
  const rand = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  let p = { ...(world.spots[0]), heading: 0, speed: 0, y: 0, vy: 0 };
  let input = { x: 0, y: 1, yaw: 0 };
  for (let i = 0; i < frames; i++) {
    if (i % 40 === 0) input = { x: rand() * 2 - 1, y: rand() * 2 - 1, yaw: rand() * Math.PI * 2, sprint: rand() < 0.3, nitro: rand() < 0.1, jumpSpeed: rand() < 0.5 ? 7.6 : 10.5 };
    p = stepPlayer(p, { ...input, jump: rand() < 0.04 }, 1 / 60, world.solids, world.bounds);
    const hits = embedded(p, world.solids);
    if (hits.length) return `${world.id} frame ${i}: (${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}) inside ${hits.map(name).join(', ')}`;
  }
  return null;
}

test('running and jumping around, the mascot never ends up inside a box', () => {
  const bad = WORLDS.flatMap(w => [1, 2, 3].map(seed => wander(w, w.id === 'noche' ? 6000 : 2500, 7919 * seed + w.id.length))).filter(Boolean);
  assert.deepEqual(bad, []);
});

test('put inside a box (a car drives into you, a saved spot in a new prop), the mascot steps out to the nearest side', () => {
  const box = { x0: 0, x1: 4, z0: 0, z1: 2 };
  const bounds = { minX: -20, maxX: 20, minZ: -20, maxZ: 20 };
  let p = stepPlayer({ x: 1, z: 0.5, heading: 0, speed: 0 }, {}, 1 / 60, [box], bounds);
  assert.deepEqual(embedded(p, [box]), []);
  assert.ok(Math.abs(p.z - (box.z0 - PLAYER_RADIUS)) < 0.01, `nearest face: ${JSON.stringify(p)}`);
  // Boxes side by side: the way out is past both of them.
  const row = [box, { x0: -4, x1: 0, z0: -2, z1: 0.2 }, { x0: -4, x1: 0, z0: 0.2, z1: 2 }];
  const out = escapeSolids(-0.1, 0.4, row, bounds);
  assert.deepEqual(row.filter(b => overlaps(out.x, out.z, PLAYER_RADIUS - 1e-6, b)), []);
  // Standing on top of something with a `top` is not being inside it.
  p = stepPlayer({ x: 1, z: 1, y: 1, heading: 0, speed: 0 }, {}, 1 / 60, [{ ...box, top: 1 }], bounds);
  assert.equal(p.y, 1);
  assert.equal(p.x, 1);
});

test('bumping into someone against a wall slides you round them, never into the wall or their body', () => {
  const wall = { x0: 1, x1: 3, z0: -5, z1: 5 };
  const free = (x, z) => !overlaps(x, z, PLAYER_RADIUS, wall);
  const out = pushOut(0.4, 0, [{ x: 0, z: 0 }], free);
  assert.ok(free(out.x, out.z), JSON.stringify(out));
  assert.ok(Math.hypot(out.x, out.z) >= 0.62 - 1e-6, JSON.stringify(out));
});

// ------------------------------------------------------------------ bosque
// No people in the forest: the mascot against stems, trunks and props.
test('bosque: the mascot never stays inside a stem, a trunk or a prop, and no cap is a checkpoint inside one', () => {
  const inside = p => bosque.OBSTACLES.filter(o => !(p.y + 1.7 < o.y0 || p.y > o.y1 || (o.top != null && p.y >= o.top - 0.05)) && Math.hypot(p.x - o.x, p.z - o.z) < o.r + bosque.PLAYER_RADIUS - 0.02);
  assert.deepEqual(inside({ ...bosque.SPAWN }).map(o => o.id), []);
  for (const cap of bosque.PLATFORMS) {
    const hits = inside({ x: cap.x, y: cap.y, z: cap.z }).filter(o => o.id !== `${cap.id}-stem` && o.id !== `${cap.id}-ball` && o.id !== `${cap.id}-trunk`);
    assert.deepEqual(hits.map(o => o.id), [], cap.id);
  }
  let s = 4242;
  const rand = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  let p = bosque.spawnPlayer();
  let input = { x: 0, z: 1 };
  for (let i = 0; i < 6000; i++) {
    if (i % 30 === 0) input = { x: rand() * 2 - 1, z: rand() * 2 - 1, run: rand() < 0.5 };
    p = bosque.stepPlayer(p, { ...input, jump: rand() < 0.05 }, 1 / 60);
    assert.deepEqual(inside(p).map(o => o.id), [], `frame ${i} at ${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}`);
  }
});

test('bosque: jumping under a cap, the head bumps it instead of passing through', () => {
  const cap = bosque.PLATFORMS.find(p => p.kind === 'mushroom' && !['puffball', 'stump'].includes(p.species) && p.y > 3 && p.r > 1.5);
  // Right under the cap, beside its stem.
  const angle = 0.7, d = Math.min(cap.r - 0.4, bosque.stemRadiusOf(cap) + bosque.PLAYER_RADIUS + 0.4);
  const ground = cap.y - bosque.CAP_DEPTH - bosque.BODY_HEIGHT - 1;
  let p = { ...bosque.spawnPlayer(), x: cap.x + Math.cos(angle) * d, z: cap.z + Math.sin(angle) * d, y: ground, vy: 0, grounded: true };
  let top = p.y;
  for (let i = 0; i < 30; i++) { p = bosque.stepPlayer(p, { jump: i === 0 }, 1 / 60, [cap], []); top = Math.max(top, p.y); }
  assert.ok(top + bosque.BODY_HEIGHT <= cap.y - bosque.CAP_DEPTH + 1e-6, `head at ${top + bosque.BODY_HEIGHT}, cap underside at ${cap.y - bosque.CAP_DEPTH}`);
});
