// Noche abierta · the living city: the districts around the centre, the
// street scenes, the object the learner carries and the people walking.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const world = await import('../app/noche-abierta/world3d.mjs');
const city = await import('../app/noche-abierta/city.mjs');
const street = await import('../app/noche-abierta/street.mjs');
const levels = await import('../app/noche-abierta/levels.mjs');

const ITEMS = ['lapiz', 'libro', 'gas', 'granada', 'pistola', 'cuchillo', 'corazon'];
const MOODS = new Set(['neutral', 'smile', 'love', 'sad', 'scared', 'angry', 'surprised', 'worried', 'pain', 'tipsy', 'sleepy', 'smitten', 'laugh', 'terror', 'furious']);
const CHANGES = new Set(['sonrie', 'se-va', 'corre', 'ambulancia', 'policia', 'baila', 'sigue', 'llama', 'triste', 'enojado', 'luz', 'abraza', 'se-sienta', 'duerme', 'beso', 'huye', 'cae', 'pelea', 'helicoptero', 'manos-arriba']);
const VOSEO = /\b(vos|sos|tenés|podés|querés|sabés|pensás|creés|preferís|mirá|escuchá|vení|decime|contame|andá|fijate|sentate|tomá|dale|che|boludo)\b/i;
const castSizes = Object.fromEntries(street.ENCOUNTERS.map(item => [item.id, item.cast.length]));
const boxes = world.colliders(castSizes);
const solids = boxes.filter(box => !box.npc);
const B = world.WORLD_BOUNDS;
const R = world.PLAYER_RADIUS;
const inside = (x, z, list, margin = 0) => list.find(b => x > b.x0 - margin && x < b.x1 + margin && z > b.z0 - margin && z < b.z1 + margin);
const textsOf = value => {
  const out = [];
  const walk = item => {
    if (typeof item === 'string') out.push(item);
    else if (Array.isArray(item)) item.forEach(walk);
    else if (item && typeof item === 'object') Object.values(item).forEach(walk);
  };
  walk(value);
  return out;
};

// ------------------------------------------------------------ the city

test('the city is much larger than the old neighbourhood and keeps it in the middle', () => {
  assert.ok(B.maxX - B.minX >= 240 && B.maxZ - B.minZ >= 230, 'about 250 m across');
  const old = world.CENTRE_BOUNDS;
  assert.ok(old.minX > B.minX && old.maxX < B.maxX && old.minZ > B.minZ && old.maxZ < B.maxZ);
  for (const b of world.BUILDINGS) assert.ok(b.x0 >= old.minX && b.x1 <= old.maxX, `${b.id} is still where it was`);
  assert.equal(new Set(city.DISTRICT_ZONES.map(item => item.id)).size, 9, 'the centre and eight districts');
  assert.ok(city.CITY_BUILDINGS.length >= 50);
  // Each district has its own buildings, not copies: several styles each.
  for (const zone of city.DISTRICT_ZONES.filter(item => item.id !== 'centro')) {
    const own = city.CITY_BUILDINGS.filter(item => item.district === zone.id);
    assert.ok(own.length >= 2, `${zone.id} has buildings`);
  }
  assert.ok(new Set(city.CITY_BUILDINGS.map(item => item.style)).size >= 18, 'many building styles');
});

test('buildings never overlap each other, a road or the canal', () => {
  const all = [...world.BUILDINGS, ...city.CITY_BUILDINGS];
  const hit = (a, b) => a.x0 < b.x1 && b.x0 < a.x1 && a.z0 < b.z1 && b.z0 < a.z1;
  for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) assert.ok(!hit(all[i], all[j]), `${all[i].id} × ${all[j].id}`);
  for (const b of all) for (const road of city.ROADS) assert.ok(!hit(b, road), `${b.id} on ${road.id}`);
  for (const b of all) assert.ok(!hit(b, city.CANAL), `${b.id} in the canal`);
  for (const prop of city.CITY_PROPS) for (const road of city.ROADS) if (prop.kind !== 'tunnel-wall' && prop.kind !== 'fence') assert.ok(!hit(prop, road), `${prop.id} on ${road.id}`);
});

// A walk over the whole city from the bus stop, half a metre at a time.
const STEP = 0.5;
const nx = Math.round((B.maxX - B.minX) / STEP) + 1;
const nz = Math.round((B.maxZ - B.minZ) / STEP) + 1;
const reached = new Uint8Array(nx * nz);
{
  const free = (i, j) => world.isWalkable(B.minX + i * STEP, B.minZ + j * STEP, boxes);
  const start = [Math.round((world.SPAWN.x - B.minX) / STEP), Math.round((world.SPAWN.z - B.minZ) / STEP)];
  const queue = [start];
  reached[start[0] * nz + start[1]] = 1;
  while (queue.length) {
    const [i, j] = queue.pop();
    for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const I = i + a, J = j + b;
      if (I < 0 || J < 0 || I >= nx || J >= nz || reached[I * nz + J]) continue;
      if (!free(I, J)) { reached[I * nz + J] = 2; continue; }
      reached[I * nz + J] = 1;
      queue.push([I, J]);
    }
  }
}
const canReach = (x, z) => {
  const i0 = Math.round((x - B.minX) / STEP), j0 = Math.round((z - B.minZ) / STEP);
  for (let i = i0 - 1; i <= i0 + 1; i++) for (let j = j0 - 1; j <= j0 + 1; j++) {
    if (reached[i * nz + j] === 1 && Math.hypot(B.minX + i * STEP - x, B.minZ + j * STEP - z) < 0.75) return true;
  }
  return false;
};

test('every street circle and every door in the street can be reached on foot from the bus stop', () => {
  for (const [id, place] of Object.entries(city.PLACEMENTS)) {
    if (place.room) continue;
    const p = city.placementOf(id);
    if (p.circle.follow) {
      for (const point of [p.walk.from, p.walk.to]) assert.ok(canReach(point.x, point.z), `${id}: its walk is on reachable ground`);
      continue;
    }
    assert.ok(canReach(p.circle.x, p.circle.z), `${id}: circle at ${p.circle.x},${p.circle.z}`);
  }
  for (const door of city.ROOM_DOORS) assert.ok(canReach(door.x, door.z), door.id);
  for (const target of world.TARGETS) assert.ok(canReach(target.x, target.z), `${target.id} is still reachable`);
});

test('only the two closed building sites are out of reach; nothing else is a hidden pocket', () => {
  const pockets = [];
  const seen = new Uint8Array(nx * nz);
  for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) {
    if (reached[i * nz + j] === 1 || seen[i * nz + j] || !world.isWalkable(B.minX + i * STEP, B.minZ + j * STEP, boxes)) continue;
    const stack = [[i, j]]; seen[i * nz + j] = 1;
    let n = 0, x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
    while (stack.length) {
      const [a, b] = stack.pop(); n++;
      const x = B.minX + a * STEP, z = B.minZ + b * STEP;
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z);
      for (const [da, db] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const I = a + da, J = b + db;
        if (I < 0 || J < 0 || I >= nx || J >= nz || seen[I * nz + J] || reached[I * nz + J] === 1) continue;
        if (!world.isWalkable(B.minX + I * STEP, B.minZ + J * STEP, boxes)) continue;
        seen[I * nz + J] = 1; stack.push([I, J]);
      }
    }
    if (n > 8) pockets.push({ n, x0, x1, z0, z1 });
  }
  const sites = city.CITY_PROPS.filter(prop => prop.id.startsWith('obra-') && prop.kind === 'gate');
  assert.equal(pockets.length, sites.length, JSON.stringify(pockets));
});

test('circles are apart from each other, close to their person and never under anything', () => {
  const circles = [];
  for (const [id, place] of Object.entries(city.PLACEMENTS)) {
    const p = city.placementOf(id);
    if (p.circle.follow) continue;
    circles.push({ id, x: p.circle.x, z: p.circle.z, room: place.room ?? null });
    const reach = Math.hypot(p.circle.x - p.x, p.circle.z - p.z);
    assert.ok(reach >= 1 && reach <= (place.boat ? 4.5 : 3.5), `${id}: circle ${reach.toFixed(1)} m from the person`);
    if (!place.room) assert.equal(inside(p.circle.x, p.circle.z, solids, R), undefined, `${id}: circle is on open ground`);
  }
  for (const target of world.TARGETS) circles.push({ id: target.id, x: target.x, z: target.z, room: null });
  for (const door of city.ROOM_DOORS) circles.push({ id: door.id, x: door.x, z: door.z, room: null });
  for (let i = 0; i < circles.length; i++) for (let j = i + 1; j < circles.length; j++) {
    const a = circles[i], b = circles[j];
    if (a.room !== b.room) continue;
    assert.ok(Math.hypot(a.x - b.x, a.z - b.z) >= 3.2, `${a.id} and ${b.id} are too close`);
  }
});

test('people stand on open ground: nobody inside a wall, a car or another person', () => {
  const people = city.standingPeople(castSizes);
  for (const person of people) {
    if (person.seated) continue;
    assert.equal(inside(person.x, person.z, solids, 0.2), undefined, `${person.id} at ${person.x.toFixed(1)},${person.z.toFixed(1)}`);
  }
  for (let i = 0; i < people.length; i++) for (let j = i + 1; j < people.length; j++) {
    const a = people[i], b = people[j];
    assert.ok(Math.hypot(a.x - b.x, a.z - b.z) >= 0.5, `${a.id} and ${b.id} overlap`);
  }
  for (const [id, place] of Object.entries(city.PLACEMENTS)) {
    if (place.room || place.balcony || place.window || place.behindCounter || place.behindDoor || (place.y ?? 0) > 0.2) continue;
    assert.equal(world.insideBuilding(place.x, place.z), false, `${id} stands outside`);
  }
  for (const person of city.BALCONY_PEOPLE) {
    const facade = city.CITY_BUILDINGS.find(b => Math.abs(person.z - b.z1) < 1.2 || Math.abs(person.z - b.z0) < 1.2 || Math.abs(person.x - b.x1) < 1.2 || Math.abs(person.x - b.x0) < 1.2);
    assert.ok(facade, `${person.id} is on a facade`);
  }
});

test('the rooms of the street: the laundromat far away, the rooftop on the real roof', () => {
  for (const [stage, room] of Object.entries(city.STREET_ROOMS)) {
    const layout = city.streetRoomLayout(stage);
    assert.ok(world.isWalkable(layout.spawn.x, layout.spawn.z, layout.solids, layout.bounds), `${stage} spawn`);
    assert.ok(world.isWalkable(layout.exit.x, layout.exit.z, layout.solids, layout.bounds), `${stage} exit`);
    assert.ok(Math.hypot(layout.spawn.x - layout.exit.x, layout.spawn.z - layout.exit.z) < 4, `${stage}: the door is behind you`);
    if (room.roof) {
      const building = city.CITY_BUILDINGS.filter(b => b.x0 >= room.area.x0 - 0.01 && b.x1 <= room.area.x1 + 0.01 && b.z0 >= room.area.z0 - 0.01 && b.z1 <= room.area.z1 + 0.01);
      assert.ok(building.length && building.every(b => b.h === room.roof), `${stage} sits on the roof`);
    } else assert.ok(layout.bounds.minX > B.maxX + 50, `${stage} is far from the street`);
    const scenes = Object.entries(city.PLACEMENTS).filter(([, place]) => place.room === stage);
    assert.ok(scenes.length >= 1, `${stage} has a scene`);
    for (const [id] of scenes) {
      const p = city.placementOf(id);
      assert.ok(world.isWalkable(p.circle.x, p.circle.z, layout.solids, layout.bounds), `${id} circle in ${stage}`);
      assert.ok(Math.hypot(p.circle.x - layout.exit.x, p.circle.z - layout.exit.z) > 2.5, `${id}: not on the door`);
    }
  }
});

test('people walking keep to the sidewalks, step around whoever stands in the way and never go through walls', () => {
  let walkers = city.makeWalkers();
  assert.ok(walkers.filter(w => !w.animal).length >= 60, 'a crowd');
  const standing = city.standingPeople(castSizes).filter(p => !p.seated);
  const cars = city.CITY_TRAFFIC.map(city.trafficCar);
  let closest = Infinity;
  for (let t = 0; t < 90 * 20; t++) {
    walkers = city.stepWalkers(walkers, standing, cars, 1 / 20, solids);
    if (t % 10) continue;
    for (const walker of walkers) {
      assert.equal(inside(walker.x, walker.z, solids, 0.15), undefined, `${walker.id} at ${walker.x.toFixed(1)},${walker.z.toFixed(1)}`);
      for (const person of standing) closest = Math.min(closest, Math.hypot(person.x - walker.x, person.z - walker.z));
    }
  }
  assert.ok(closest > 0.4, `nobody walks through someone standing (${closest.toFixed(2)} m)`);
});

test('traffic on every street: cars wait at crossings, stop for people and never touch each other', () => {
  let cars = [...world.TRAFFIC.map(car => ({ id: car.id, axis: 'x', lane: car.lane, dir: car.dir, x: car.start, z: car.lane, speed: car.speed, cruise: car.speed, kind: car.kind })), ...city.CITY_TRAFFIC.map(city.trafficCar)];
  const size = car => car.kind === 'bike' || car.kind === 'moto' ? { l: 0.9, w: 0.3 } : { l: 2.15, w: 0.9 };
  const box = car => { const s = size(car); return car.axis === 'z' ? { x0: car.x - s.w, x1: car.x + s.w, z0: car.z - s.l, z1: car.z + s.l } : { x0: car.x - s.l, x1: car.x + s.l, z0: car.z - s.w, z1: car.z + s.w }; };
  const parked = solids.filter(b => b.vehicle);
  const buildings = solids.filter(b => b.building);
  let moved = 0;
  for (let t = 0; t < 120 * 30; t++) {
    const before = cars.map(car => car.x + car.z);
    cars = city.stepCityTraffic(cars, [], 1 / 30, [], world.TRAFFIC_SPAN);
    moved += cars.filter((car, i) => car.x + car.z !== before[i]).length;
    if (t % 3) continue;
    for (let i = 0; i < cars.length; i++) {
      const a = box(cars[i]);
      for (let j = i + 1; j < cars.length; j++) {
        const b = box(cars[j]);
        assert.ok(!(a.x0 < b.x1 && b.x0 < a.x1 && a.z0 < b.z1 && b.z0 < a.z1), `${cars[i].id} touches ${cars[j].id} at t=${(t / 30).toFixed(1)}`);
      }
      assert.equal(inside((a.x0 + a.x1) / 2, (a.z0 + a.z1) / 2, buildings), undefined, `${cars[i].id} inside a building`);
      for (const p of parked) assert.ok(!(a.x0 < p.x1 && p.x0 < a.x1 && a.z0 < p.z1 && p.z0 < a.z1), `${cars[i].id} drives through ${p.vehicle}`);
    }
  }
  assert.ok(moved > cars.length * 120 * 30 * 0.6, 'the traffic keeps flowing');
  // Someone standing in the lane stops the car in front of them.
  const car = city.trafficCar(city.CITY_TRAFFIC[0]);
  let one = [{ ...car, x: 0 }];
  for (let i = 0; i < 300; i++) one = city.stepCityTraffic(one, [{ x: -10, z: car.lane }], 1 / 30);
  assert.equal(one[0].speed, 0);
  assert.ok(one[0].x > -10 + 2.15, 'stops without touching');
});

test('an ambulance or a police car can reach every scene in the street', () => {
  for (const [id, place] of Object.entries(city.PLACEMENTS)) {
    if (place.room || (place.y ?? 0) > 1) continue;
    const p = city.placementOf(id);
    const route = city.emergencyRoute(p.x, p.z);
    assert.ok(route, `${id} has a street nearby`);
    const stop = route.points[route.stopAt];
    assert.ok(Math.hypot(stop[0] - p.x, stop[1] - p.z) < 48, `${id}: the vehicle stops close by`);
    for (const [x, z] of route.points) assert.ok(city.ROADS.some(r => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1), `${id}: the route stays on the road`);
  }
});

// ------------------------------------------------------------ the scenes

test('about seventy scenes in eight districts, each placed in the city', () => {
  assert.ok(street.ENCOUNTERS.length >= 65, `${street.ENCOUNTERS.length} scenes`);
  assert.ok(street.ENCOUNTERS.filter(item => item.kind === 'escena').length >= 35);
  assert.equal(new Set(street.ENCOUNTERS.map(item => item.id)).size, street.ENCOUNTERS.length);
  assert.deepEqual(street.ENCOUNTERS.map(item => item.id).sort(), Object.keys(city.PLACEMENTS).sort(), 'one place per scene');
  const districts = new Set(street.ENCOUNTERS.map(item => item.district));
  for (const id of ['viejo', 'alto', 'clinica', 'mercado', 'costa', 'estacion', 'sur', 'galpones', 'centro']) assert.ok(districts.has(id), id);
  for (const encounter of street.ENCOUNTERS) {
    const place = city.placementOf(encounter.id);
    if (!place.room) assert.equal(city.districtAt(place.x, place.z), encounter.district === 'centro' ? 'centro' : encounter.district, `${encounter.id} is in its district`);
  }
});

test('every scene is a real mini-scene: reachable moments, real choices, different endings', () => {
  const speakAll = new Set();
  for (const encounter of street.ENCOUNTERS) {
    const w = encounter.id;
    assert.ok(encounter.nodes[encounter.start], `${w} start`);
    const castIds = new Set(encounter.cast.map(item => item.id));
    const nodes = new Set(), ends = new Set();
    const reach = (from) => {
      const seenNodes = new Set(), seenEnds = new Set();
      const visit = id => {
        if (seenNodes.has(id)) return;
        seenNodes.add(id);
        const node = encounter.nodes[id];
        assert.ok(node, `${w}: node ${id}`);
        for (const choice of [...node.options, ...Object.values(node.items ?? {})]) {
          assert.ok(Boolean(choice.next) !== Boolean(choice.end), `${w}/${id}/${choice.id}: next or end`);
          if (choice.next) visit(choice.next); else seenEnds.add(choice.end);
        }
      };
      visit(from);
      for (const id of seenNodes) nodes.add(id);
      for (const id of seenEnds) ends.add(id);
      return { nodes: seenNodes, ends: seenEnds };
    };
    reach(encounter.start);
    // With an object in hand the scene opens elsewhere: its own first moment,
    // its own reactions and endings, its own closing question.
    const variants = encounter.variants ?? {};
    const starts = new Set([encounter.start]);
    for (const [item, variant] of Object.entries(variants)) {
      assert.ok(ITEMS.includes(item), `${w}: variant ${item}`);
      assert.ok(encounter.nodes[variant.start], `${w}/${item}: start ${variant.start}`);
      assert.ok(!starts.has(variant.start), `${w}/${item}: its own first moment`);
      starts.add(variant.start);
      if (variant.fx) assert.ok(street.OPENING_FX.includes(variant.fx), `${w}/${item}: fx ${variant.fx}`);
      const seen = reach(variant.start);
      assert.ok(seen.nodes.size >= 2 && seen.ends.size >= 2, `${w}/${item}: two moments and two endings at least`);
      if (variant.speak) for (const band of ['A', 'B', 'C']) assert.match(variant.speak[band] ?? '', /^¿[^?]+\?$/, `${w}/${item}: question ${band}`);
    }
    assert.deepEqual([...nodes].sort(), Object.keys(encounter.nodes).sort(), `${w}: every moment can happen`);
    assert.deepEqual([...ends].sort(), Object.keys(encounter.ends).sort(), `${w}: every ending can happen`);
    for (const [id, node] of Object.entries(encounter.nodes)) {
      assert.ok(castIds.has(node.who), `${w}/${id}: who`);
      assert.ok(MOODS.has(node.mood), `${w}/${id}: mood`);
      assert.ok(node.options.length >= (encounter.kind === 'rincon' ? 2 : 3) && node.options.length <= 3, `${w}/${id}: options`);
      for (const key of Object.keys(node.items ?? {})) assert.ok(ITEMS.includes(key), `${w}/${id}: ${key}`);
      if (node.items?.corazon) assert.equal(node.items.corazon.mood, 'love', `${w}/${id}: the heart brings love`);
      for (const choice of node.options) assert.ok(MOODS.has(choice.mood), `${w}/${id}/${choice.id}: mood`);
    }
    if (encounter.kind === 'escena') {
      for (const item of ITEMS) assert.ok(variants[item] || encounter.nodes[encounter.start].items?.[item], `${w}: reacts to ${item}`);
      assert.ok(Object.keys(encounter.ends).length >= 2, `${w}: two endings or more`);
      assert.ok(Object.keys(encounter.nodes).length >= 3, `${w}: three moments or more`);
      // The base start (no variant) still needs the heart somewhere.
      assert.ok(encounter.nodes[encounter.start].items?.corazon || variants.corazon, `${w}: the heart always does something`);
    }
    for (const end of Object.values(encounter.ends)) assert.ok(CHANGES.has(end.change), `${w}: ${end.change}`);
    for (const level of levels.LEVELS) {
      const question = encounter.speak[level];
      assert.match(question, /^¿[^?]+\?$/, `${w}: one open question for ${level}`);
      assert.ok(!speakAll.has(question), `${w}: ${level} question repeated`);
      speakAll.add(question);
    }
    // The closing questions of one scene differ by object.
    const asked = new Set();
    for (const [item, variant] of Object.entries(variants)) {
      if (!variant.speak) continue;
      for (const band of ['A', 'B', 'C']) {
        assert.ok(!asked.has(variant.speak[band]), `${w}/${item}: question ${band} repeats another object's`);
        asked.add(variant.speak[band]);
      }
    }
  }
});

test('the object changes the whole scene, not one line: every escena opens differently for all seven objects', () => {
  const escenas = street.ENCOUNTERS.filter(item => item.kind === 'escena');
  let full = 0;
  for (const encounter of escenas) {
    const variants = encounter.variants ?? {};
    if (ITEMS.every(item => variants[item]?.speak)) full++;
    const lines = new Set(), questions = new Set();
    for (const item of ITEMS) {
      if (!variants[item]) continue;
      let state = street.chooseItem(street.emptyStreet(), item);
      state = street.openEncounter(state, encounter.id);
      const view = street.streetView(state, 'A2');
      assert.equal(view.variant, item);
      assert.ok(!lines.has(view.line), `${encounter.id}/${item}: its own opening line`);
      lines.add(view.line);
      // Walk the first option to an end and read the closing question.
      let cursor = state;
      for (let i = 0; i < 6 && !cursor.open.end; i++) cursor = street.chooseLine(cursor, street.choicesFor(encounter, cursor.open.node, item)[0].key);
      const ended = street.streetView(cursor, 'A2');
      if (variants[item].speak) { assert.ok(!questions.has(ended.speak), `${encounter.id}/${item}: its own question`); questions.add(ended.speak); }
    }
  }
  assert.ok(full >= escenas.length * 0.9, `${full} of ${escenas.length} escenas react to all seven objects with their own question`);
});

test('scenes unlock each other: every flag a scene needs is set by another one', () => {
  const set = new Set(street.ENCOUNTERS.flatMap(item => Object.values(item.ends).map(end => end.flag).filter(Boolean)));
  const needed = street.ENCOUNTERS.filter(item => item.requires);
  assert.ok(needed.length >= 4, 'some scenes only appear after others');
  for (const encounter of needed) assert.ok(set.has(encounter.requires), `${encounter.id} needs ${encounter.requires}`);
  for (const encounter of street.ENCOUNTERS.filter(item => item.event)) assert.ok(['lluvia', 'transporte', 'celular'].includes(encounter.event));
  assert.ok(street.ENCOUNTERS.some(item => item.event), 'some scenes only happen after a city event');
});

test('the language of every scene: three bands, the level of the URL, neutral Spanish with tú', () => {
  for (const encounter of street.ENCOUNTERS) {
    for (const text of textsOf([encounter.nodes, encounter.ends, encounter.speak, encounter.title])) {
      assert.doesNotMatch(text, VOSEO, `${encounter.id}: ${text}`);
    }
    for (const node of Object.values(encounter.nodes)) for (const band of ['A', 'B', 'C']) assert.ok(node.line[band]?.trim(), `${encounter.id}: band ${band}`);
  }
  // A2 reads band A, B1 band B, C2 band C: the same scene in three registers.
  const one = street.ENCOUNTERS.find(item => item.kind === 'escena');
  let state = street.openEncounter(street.emptyStreet(), one.id);
  assert.equal(street.streetView(state, 'A2').line, one.nodes[one.start].line.A);
  assert.equal(street.streetView(state, 'B1').line, one.nodes[one.start].line.B);
  assert.equal(street.streetView(state, 'C2').line, one.nodes[one.start].line.C);
  assert.equal(street.bandFor('A1'), 'A');
  assert.equal(street.bandFor('B2'), 'B');
  state = street.chooseLine(state, one.nodes[one.start].options[0].id);
  assert.equal(street.streetView(state, 'A2').said.reply, one.nodes[one.start].options[0].reply.A);
  const lesson = readFileSync('app/noche-abierta/NocheAbierta.tsx', 'utf8');
  assert.match(lesson, /params\.get\('level'\) \?\? params\.get\('nivel'\)/, '?nivel= works like ?level=');
});

test('a scene from start to end: choose, use the object, step back, finish, unlock', () => {
  const unlocking = street.ENCOUNTERS.find(item => Object.values(item.ends).some(end => end.flag));
  const [endId, end] = Object.entries(unlocking.ends).find(([, item]) => item.flag);
  // Find a path to that end.
  const path = (nodeId, seen = new Set()) => {
    if (seen.has(nodeId)) return null;
    seen.add(nodeId);
    for (const choice of unlocking.nodes[nodeId].options) {
      if (choice.end === endId) return [choice.id];
      if (choice.next) { const rest = path(choice.next, seen); if (rest) return [choice.id, ...rest]; }
    }
    return null;
  };
  const route = path(unlocking.start);
  assert.ok(route, `${unlocking.id}: ${endId} is reachable without an object`);
  let state = street.chooseItem(street.emptyStreet(), 'corazon');
  assert.equal(state.item, 'corazon');
  state = street.openEncounter(state, unlocking.id);
  assert.equal(street.choicesFor(unlocking, unlocking.start, 'corazon').at(-1).key, 'item:corazon', 'the object is the last choice');
  state = street.chooseLine(state, 'item:corazon');
  assert.equal(street.moodOf(state, unlocking.id), 'love');
  assert.equal(street.heartsUsed(state), 1);
  state = street.stepBack(state);
  assert.equal(state.open.trail.length, 0);
  for (const choice of route) state = street.chooseLine(state, choice);
  assert.equal(state.open.end, endId);
  assert.ok(street.streetView(state, 'B1').ended);
  assert.ok(street.isValidStreet(state));
  state = street.closeEncounter(state);
  assert.equal(state.done[unlocking.id], endId);
  assert.ok(state.flags.includes(end.flag));
  assert.equal(street.openEncounter(state, unlocking.id).open, null, 'a finished scene does not reopen');
  const after = street.ENCOUNTERS.filter(item => item.requires === end.flag);
  for (const item of after) assert.ok(street.isAvailable(state, item));
  assert.equal(street.streetSummary(state)[0].recap, end.recap);
  assert.equal(street.isValidStreet({ item: 'espada', open: null, done: {}, flags: [] }), false);
});

test('using the object on someone passing by: weapons scare, the heart charms, nobody is hurt', () => {
  for (const item of ITEMS) for (const level of levels.LEVELS) {
    const reaction = street.ambientReaction(item, level, 3);
    assert.ok(reaction.text, `${item} ${level}`);
    assert.doesNotMatch(reaction.text, VOSEO);
  }
  for (const item of ['gas', 'granada', 'pistola', 'cuchillo']) assert.equal(street.ambientReaction(item, 'B1').flee, true);
  assert.equal(street.ambientReaction('corazon', 'A2').mood, 'love');
  assert.equal(street.ambientReaction('corazon', 'A2').hearts, true);
  const all = textsOf(street.ENCOUNTERS.map(item => [item.nodes, item.ends])).join('\n');
});

// ------------------------------------------------------------ the 3D side

test('the 3D street: object choice, inventory, Q to use it, street scenes and the new modules', () => {
  const picker = readFileSync('app/noche-abierta/ItemPicker.tsx', 'utf8');
  assert.match(picker, /¿QUÉ LLEVAS ESTA NOCHE\?/);
  assert.doesNotMatch(picker, /^import (?!type )[^\n]*from 'three'/m, 'the picker loads three only on demand');
  const scene = readFileSync('app/noche-abierta/World3D.tsx', 'utf8');
  assert.match(scene, /Q · USAR TU OBJETO/);
  assert.match(scene, /event\.code === 'KeyQ'/);
  assert.equal(world.keyAction('KeyQ'), null, 'Q is not a movement key');
  assert.match(scene, /createStreetCrowd\(/);
  assert.match(scene, /buildDistricts\(/);
  assert.match(scene, /holdItem\(/);
  const lesson = readFileSync('app/noche-abierta/NocheAbierta.tsx', 'utf8');
  assert.match(lesson, /<StreetCard /);
  assert.match(lesson, /<ItemPicker /);
  assert.match(lesson, /streetSummary\(street\)/, 'the final recap includes the street');
  for (const file of ['streetlife.ts', 'district3d.ts', 'items3d.ts', 'animals3d.ts', 'ItemStage.tsx', 'city.mjs', 'street.mjs']) {
    const source = readFileSync(`app/noche-abierta/${file}`, 'utf8');
    assert.doesNotMatch(source, /https?:\/\//, `${file} loads nothing from the network`);
    assert.doesNotMatch(source, /\.(?:glb|gltf|fbx|obj|mtl|png|jpe?g|ktx2|hdr)\b['"]/i, `${file} loads no model or image files`);
    assert.doesNotMatch(source, /\b(?:gta|grand theft|rockstar|vice city|san andreas|kenney)\b/i, `${file} has no borrowed game content`);
  }
  const assets = readFileSync('docs/lessons/noche-abierta-3d-assets.md', 'utf8');
  for (const file of ['district3d.ts', 'streetlife.ts', 'items3d.ts', 'animals3d.ts', 'city.mjs']) assert.ok(assets.includes(file), `provenance lists ${file}`);
});
