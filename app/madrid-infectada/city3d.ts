// Madrid infectada · the whole city in one scene, drawn from city.mjs. The
// ten places of the story keep their own squares, landmarks and props (each
// drawn in its own turned sub-group, as in madrid3d.ts); the streets between
// them, the squares that are not part of the story (Cibeles, the Puerta de
// Alcalá, Plaza de España and the Templo de Debod, Plaza de Oriente and the
// Teatro Real, the Plaza de la Armería and the Almudena) and every block of
// buildings around are added here. The blocks are merged per material and
// per 64 m chunk, so a city of hundreds of buildings costs a few draw calls;
// props and people far in the fog are hidden by the runtime (`cull`).
import * as THREE from 'three';
import { addPalm, box, canvas, cylinder, glow, random, solid } from '../noche-abierta/build3d';
import { ground, groundTexture, lightPool, makeTalker, tileTexture, type Light, type Talker } from '../mundo-3d/kit3d';
import { CAST, SPOTS } from './story.mjs';
import { layoutOf, npcOf } from './layout.mjs';
import {
  CITY_BOUNDS, CITY_PROPS, CITY_ZONES, ENCOUNTERS, GREEN, MONUMENTS, PLACEMENT, PLACES, RIVER, STREETS,
  allSolids, arrivalOf, cityBlocks, citySpots, creepyProps, metroEntrances, toWorld, turnOf, zoneProps,
} from './city.mjs';
import { solidIndex } from './horde.mjs';
import { MOODS, facadeTexture, landmark, once, plate, propMesh, shopTexture, signMat, smokeTexture, type Life, type Zone3D } from './madrid3d';

export type Culled = { obj: THREE.Object3D; x: number; z: number; r: number };
export type City3D = Zone3D & {
  encounters: Map<string, Talker>;
  metro: { x: number; z: number; heading: number; name: string; zone: string; at: { x: number; z: number } }[];
  /** Things to hide when far in the fog (props, landmarks, people). */
  cull: Culled[];
  /** Moves the floating ash with the mascot. */
  focus: (x: number, z: number) => void;
  moodOf: (zone: string) => Light;
};

// ------------------------------------------------------------------ light
// The city is darker and foggier than the old zones: you cannot see the end
// of a street, and what moves in the fog may be anything.
const MOOD_OF: Record<string, string> = { sol: 'dawn', granvia: 'smoke', plaza: 'amber', metro: 'under', retiro: 'green', malasana: 'night', atocha: 'amber', palacio: 'cold', hospital: 'cold', rio: 'dawn' };
export function cityMood(zone: string, low: boolean): Light {
  const m = MOODS[MOOD_OF[zone] ?? 'dawn'];
  const far = low ? 58 : 70;
  const dim = (hex: string, k: number) => `#${new THREE.Color(hex).multiplyScalar(k).getHexString()}`;
  return {
    ...m, sun: { ...m.sun, intensity: m.sun.intensity * 0.6 },
    fog: [dim(m.fog[0], 0.62), 4, Math.min(m.fog[2], far)], exposure: m.exposure * 0.86, hemi: [m.hemi[0], m.hemi[1], m.hemi[2] * 0.78],
  };
}

// ------------------------------------------------------------------ merged quads
class Quads {
  pos: number[] = []; nor: number[] = []; uv: number[] = []; idx: number[] = [];
  /** A wall: outward normal (nx, nz), centre (cx, cz), length, from y0 to y1, the texture tile in metres. */
  wall(nx: number, nz: number, cx: number, cz: number, len: number, y0: number, y1: number, tileU: number, tileV: number, u0 = 0) {
    const rx = nz, rz = -nx, h = len / 2;
    const base = this.pos.length / 3;
    this.pos.push(cx - rx * h, y0, cz - rz * h, cx + rx * h, y0, cz + rz * h, cx + rx * h, y1, cz + rz * h, cx - rx * h, y1, cz - rz * h);
    for (let i = 0; i < 4; i++) this.nor.push(nx, 0, nz);
    const u = len / tileU, v = (y1 - y0) / tileV;
    this.uv.push(u0, 0, u0 + u, 0, u0 + u, v, u0, v);
    this.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  roof(x0: number, z0: number, x1: number, z1: number, y: number) {
    const base = this.pos.length / 3;
    this.pos.push(x0, y, z1, x1, y, z1, x1, y, z0, x0, y, z0);
    for (let i = 0; i < 4; i++) this.nor.push(0, 1, 0);
    this.uv.push(0, 0, (x1 - x0) / 8, 0, (x1 - x0) / 8, (z1 - z0) / 8, 0, (z1 - z0) / 8);
    this.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  get empty() { return this.idx.length === 0; }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.idx);
    g.computeBoundingSphere();
    return g;
  }
}
/** Boxes merged into one geometry (hedges, kerbs, railings). */
class Boxes {
  private parts: THREE.BufferGeometry[] = [];
  add(w: number, h: number, d: number, x: number, y: number, z: number) {
    const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); this.parts.push(g.index ? g.toNonIndexed() : g); g.dispose();
  }
  mesh(material: THREE.Material) {
    if (!this.parts.length) return null;
    let count = 0; for (const p of this.parts) count += p.attributes.position.count;
    const pos = new Float32Array(count * 3), nor = new Float32Array(count * 3);
    let o = 0;
    for (const p of this.parts) { pos.set(p.attributes.position.array as Float32Array, o * 3); nor.set(p.attributes.normal.array as Float32Array, o * 3); o += p.attributes.position.count; p.dispose(); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.computeBoundingSphere();
    return new THREE.Mesh(g, material);
  }
}

// ------------------------------------------------------------------ the city
export function buildCity({ low, shadows }: { low: boolean; shadows: boolean }): City3D {
  const group = new THREE.Group();
  const life: Life = { lamps: [], ambers: [], fires: [], smoke: [], spin: [], sparks: [], alarms: [] };
  const cull: Culled[] = [];
  const solids = allSolids() as never as Zone3D['solids'];
  const index = solidIndex(solids);
  const B = CITY_BOUNDS;
  const { kept, blocks, green } = cityBlocks() as { kept: (Record<string, number> & { zone: string; index: number })[]; blocks: Record<string, number & string>[]; green: Record<string, number>[] };
  /** A wrapper group for something that is hidden when far: (x, z) in the city, radius r. */
  const piece = (parent: THREE.Object3D, x: number, z: number, r = 6) => { const g = new THREE.Group(); parent.add(g); cull.push({ obj: g, x, z, r }); return g; };

  // ---------------------------------------------------- ground
  const asphalt = groundTexture('#3e4044', ['#35373a', '#4a4c50', '#2a2c30'], 3200);
  ground(group, B.minX - 80, B.minZ - 40, B.maxX + 80, B.maxZ + 80, asphalt, '#ffffff', 7);
  const surfaces: Record<string, [string, string[], number, boolean]> = {
    stone: ['#a59c8e', ['#8f877a', '#b8b0a2', '#6f675f'], 3, true], asphalt: ['#45474b', ['#3a3c40', '#55575b'], 6, false], cobble: ['#8e857a', ['#766d62', '#a39a8e'], 2, true],
    tiles: ['#b9b2a2', ['#a8a090', '#cfc8b8'], 2, true], grass: ['#55703e', ['#4a6234', '#66804a', '#6e6e42'], 6, false], gravel: ['#b0a690', ['#a09682', '#c0b6a0', '#90866e'], 4, false],
    park: ['#5f7444', ['#526638', '#6f8452'], 6, false],
  };
  const paving = (parent: THREE.Object3D, kind: string, x0: number, z0: number, x1: number, z1: number, seed: number, y = 0.012) => {
    const [base, specks, rep, tiled] = surfaces[kind] ?? surfaces.stone;
    ground(parent, x0, z0, x1, z1, groundTexture(base, specks, seed), '#ffffff', rep, y);
    if (tiled) ground(parent, x0, z0, x1, z1, tileTexture(base, '#6f675f', 4), '#ffffff', 3, y + 0.004);
  };
  for (const p of PLACES) paving(group, p.ground, p.area.x0, p.area.z0, p.area.x1, p.area.z1, 3300 + p.id.length);
  // Worn lane markings along the streets.
  const dashTex = once('dashes', () => canvas(16, 64, ctx => { ctx.clearRect(0, 0, 16, 64); ctx.fillStyle = 'rgba(220,214,196,0.55)'; ctx.fillRect(5, 0, 6, 34); }, true));
  for (const s of STREETS) {
    const a = s.area, alongX = a.x1 - a.x0 > a.z1 - a.z0, len = alongX ? a.x1 - a.x0 : a.z1 - a.z0;
    const t = dashTex.clone(); t.needsUpdate = true; t.repeat.set(1, len / 6);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.22, len), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false }));
    m.rotation.set(-Math.PI / 2, 0, alongX ? Math.PI / 2 : 0); m.position.set((a.x0 + a.x1) / 2, 0.02, (a.z0 + a.z1) / 2);
    group.add(m);
  }
  // The Manzanares the whole width of the south, with its stone banks; the far bank is green.
  const riverMat = new THREE.MeshStandardMaterial({ color: '#34525a', roughness: 0.1, metalness: 0.25 });
  const rioWater = toWorld('rio', -60, 20), rioWater2 = toWorld('rio', 60, 32);
  const rx0 = Math.min(rioWater.x, rioWater2.x), rx1 = Math.max(rioWater.x, rioWater2.x);
  for (const [x0, x1] of [[B.minX - 80, rx0], [rx1, B.maxX + 80]]) {
    const w = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, RIVER.z1 - RIVER.z0), riverMat); w.rotation.x = -Math.PI / 2; w.position.set((x0 + x1) / 2, -0.45, (RIVER.z0 + RIVER.z1) / 2); group.add(w);
    w.userData.river = true; life.spin.push(w);
    group.add(box(x1 - x0, 1.4, 0.6, solid('#cfc6b2', 0.85), (x0 + x1) / 2, -0.25, RIVER.z1 + 0.3, false));
  }
  ground(group, B.minX - 80, B.minZ - 60, B.maxX + 80, RIVER.z0 - 0.4, groundTexture('#4f6538', ['#435a30', '#5d7344'], 3401), '#ffffff', 6, -0.2);

  // ---------------------------------------------------- the ten places of the story
  const grounds: Record<string, string> = { sol: 'stone', granvia: 'asphalt', plaza: 'cobble', retiro: 'grass', malasana: 'cobble', atocha: 'tiles', palacio: 'gravel', hospital: 'asphalt', rio: 'park' };
  for (const zone of CITY_ZONES) {
    const z = layoutOf(zone) as ReturnType<typeof layoutOf> & Record<string, never>;
    const [cx, cz] = PLACEMENT[zone as keyof typeof PLACEMENT].c;
    const zg = new THREE.Group(); zg.position.set(cx, 0, cz); zg.rotation.y = turnOf(zone); group.add(zg);
    const b = z.bounds as { minX: number; maxX: number; minZ: number; maxZ: number };
    if (zone === 'rio') {
      const W = (z.landmark as { water: { z0: number } }).water;
      paving(zg, 'park', b.minX, b.minZ, b.maxX, Math.min(b.maxZ, W.z0), 3500);
      paving(zg, 'gravel', b.minX, 10, b.maxX, 19.6, 3501, 0.02);
    } else paving(zg, grounds[zone] ?? 'stone', b.minX, b.minZ, b.maxX, b.maxZ, 3500 + zone.length);
    if (zone === 'granvia') {
      for (let zz = b.minZ; zz < b.maxZ; zz += 6) { const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 2.6), new THREE.MeshBasicMaterial({ color: '#d8d4c4', transparent: true, opacity: 0.5 })); dash.rotation.x = -Math.PI / 2; dash.position.set(0, 0.03, zz); zg.add(dash); }
    }
    const centre = toWorld(zone, 0, 0);
    const lm = piece(zg, centre.x, centre.z, 40);
    landmark(lm, z.landmark as never, life, low);
    zoneProps(zone).forEach((p: { kind: string; x: number; z: number }, i: number) => {
      const w = toWorld(zone, p.x, p.z);
      const g = piece(zg, w.x, w.z, p.kind === 'bus' || p.kind === 'train' ? 20 : 6);
      propMesh(g, p as never, life, 700 + i * 13 + zone.length, zone, low);
    });
  }

  // ---------------------------------------------------- the rest of Madrid
  CITY_PROPS.forEach((p, i) => {
    const g = piece(group, p.x, p.z, p.kind === 'bus' ? 12 : 6);
    propMesh(g, p as never, life, 1900 + i * 7, 'city', low);
  });
  for (const m of MONUMENTS) monument(piece(group, (m.x ?? ((m.x0! + m.x1!) / 2)), (m.z ?? ((m.z0! + m.z1!) / 2)), 30), m as never, life, low);
  for (const c of creepyProps() as { kind: string; x: number; z: number; r: number }[]) creepy(piece(group, c.x, c.z, 3), c);

  // ---------------------------------------------------- the buildings: merged per material and chunk
  const CHUNK = 64;
  const facades = new Map<string, THREE.MeshStandardMaterial>();
  const facadeMat = (style: string, color: string) => {
    const key = `${style}|${color}`;
    let m = facades.get(key);
    if (!m) { m = new THREE.MeshStandardMaterial({ map: facadeTexture(color, style, 400 + facades.size * 17, 0.62), roughness: 0.9 }); facades.set(key, m); }
    return m;
  };
  const shops = Array.from({ length: low ? 4 : 8 }, (_, i) => { const t = shopTexture(31 + i * 7, i % 3 === 1); t.wrapS = THREE.RepeatWrapping; return new THREE.MeshStandardMaterial({ map: t, roughness: 0.85 }); });
  const roofMat = solid('#2c2a28', 0.95);
  const buckets = new Map<string, { mat: THREE.Material; quads: Quads }>();
  const quadsFor = (mat: THREE.Material, x: number, z: number) => {
    const key = `${mat.uuid}|${Math.floor(x / CHUNK)}|${Math.floor(z / CHUNK)}`;
    let b = buckets.get(key);
    if (!b) { b = { mat, quads: new Quads() }; buckets.set(key, b); }
    return b.quads;
  };
  const openOutside = (x: number, z: number) => x > B.minX && x < B.maxX && z > B.minZ && z < B.maxZ && !index.near(x, z, 0.2).some(s => x > s.x0 && x < s.x1 && z > s.z0 && z < s.z1);
  const allBlocks = [
    ...kept.map(k => { const src = (layoutOf(k.zone) as { buildings: Record<string, number & string>[] }).buildings[k.index]; return { x0: k.x0, x1: k.x1, z0: k.z0, z1: k.z1, h: src.h, color: src.color, style: src.style, seed: src.seed }; }),
    ...blocks.map(b => ({ x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, h: b.h, color: b.color, style: b.style, seed: b.seed })),
  ];
  const rubble = new Boxes(); const cornice = new Boxes();
  let smokes = 0;
  for (const b of allBlocks) {
    const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2, h = b.h as number, style = b.style as string;
    const mat = facadeMat(style, b.color as string), tile = style === 'modern' ? 7 : 6.4;
    const q = quadsFor(mat, cx, cz);
    const sides: [number, number, number, number, number][] = [[1, 0, b.x1, cz, b.z1 - b.z0], [-1, 0, b.x0, cz, b.z1 - b.z0], [0, 1, cx, b.z1, b.x1 - b.x0], [0, -1, cx, b.z0, b.x1 - b.x0]];
    for (const [nx, nz, sx, sz, len] of sides) {
      q.wall(nx, nz, sx, sz, len, 0, h, tile, tile, (b.seed as number % 5) * 0.5);
      // A ground floor of shutters where the wall faces a street or a square.
      if (len > 3 && openOutside(sx + nx * 1.2, sz + nz * 1.2)) quadsFor(shops[(b.seed as number + nx * 3 + nz * 5 + 16) % shops.length], cx, cz).wall(nx, nz, sx + nx * 0.04, sz + nz * 0.04, len - 0.3, 0, 3.4, 13.6, 3.4);
    }
    quadsFor(roofMat, cx, cz).roof(b.x0, b.z0, b.x1, b.z1, h);
    cornice.add(b.x1 - b.x0 + 0.4, 0.35, b.z1 - b.z0 + 0.4, cx, h, cz);
    const rand = random((b.seed as number) * 31 + 7);
    if (rand() < 0.35) for (let i = 0; i < 3; i++) { const cw = 1 + rand() * 2.6, ch = 0.6 + rand() * 2; rubble.add(cw, ch, 1 + rand() * 2, b.x0 + 1 + rand() * (b.x1 - b.x0 - 2), h + ch / 2, b.z0 + 1 + rand() * (b.z1 - b.z0 - 2)); }
    if (rand() < 0.06 && smokes < (low ? 3 : 7)) { smokes++; life.smoke.push(new THREE.Vector3(cx, h + 1, cz)); }
  }
  for (const { mat, quads } of buckets.values()) {
    if (quads.empty) continue;
    const mesh = new THREE.Mesh(quads.geometry(), mat);
    mesh.castShadow = shadows; mesh.receiveShadow = true;
    group.add(mesh);
  }
  for (const [boxes, mat] of [[cornice, solid('#d8cfba', 0.85)], [rubble, solid('#8a8278', 0.95)]] as const) { const m = boxes.mesh(mat); if (m) { m.castShadow = shadows; group.add(m); } }

  // ---------------------------------------------------- parks: hedges and (half dead) trees
  const hedges = new Boxes();
  const trees: { x: number; z: number; s: number; dead: boolean }[] = [];
  for (const g of green as { x0: number; x1: number; z0: number; z1: number }[]) {
    paving(group, 'grass', g.x0, g.z0, g.x1, g.z1, 3600, 0.01);
    hedges.add(g.x1 - g.x0, 1.3, 0.7, (g.x0 + g.x1) / 2, 0.65, g.z0 + 0.35); hedges.add(g.x1 - g.x0, 1.3, 0.7, (g.x0 + g.x1) / 2, 0.65, g.z1 - 0.35);
    hedges.add(0.7, 1.3, g.z1 - g.z0, g.x0 + 0.35, 0.65, (g.z0 + g.z1) / 2); hedges.add(0.7, 1.3, g.z1 - g.z0, g.x1 - 0.35, 0.65, (g.z0 + g.z1) / 2);
    const rand = random(Math.round(g.x0 * 7 + g.z0 * 13));
    for (let x = g.x0 + 3; x < g.x1 - 2; x += 5 + rand() * 3) for (let z = g.z0 + 3; z < g.z1 - 2; z += 5 + rand() * 3) trees.push({ x: x + rand(), z: z + rand(), s: 0.8 + rand() * 0.7, dead: rand() < 0.3 });
  }
  const hedgeMesh = hedges.mesh(solid('#2e4026', 0.95)); if (hedgeMesh) { hedgeMesh.castShadow = shadows; group.add(hedgeMesh); }
  if (trees.length) {
    const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.14, 0.22, 3.2, 6), solid('#3a2e24', 0.95), trees.length);
    const live = trees.filter(t => !t.dead);
    const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1.7, 0), solid('#3a4a2c', 0.95), Math.max(1, live.length));
    const branch = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.04, 0.08, 2.2, 4), solid('#2a221c', 0.95), trees.length * 2);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), e = new THREE.Euler();
    trees.forEach((t, i) => {
      m.compose(p.set(t.x, 1.6 * t.s, t.z), q.identity(), s.set(t.s, t.s, t.s)); trunk.setMatrixAt(i, m);
      for (let k = 0; k < 2; k++) { e.set(0.7 * (k ? 1 : -1), i * 1.3, 0.3); q.setFromEuler(e); m.compose(p.set(t.x, 3 * t.s, t.z), q, s.set(t.s, t.s, t.s)); branch.setMatrixAt(i * 2 + k, m); }
    });
    live.forEach((t, i) => { m.compose(p.set(t.x, 3.8 * t.s, t.z), q.identity(), s.set(t.s * 1.1, t.s * 0.9, t.s * 1.1)); crown.setMatrixAt(i, m); });
    for (const mesh of [trunk, crown, branch]) { mesh.castShadow = shadows; mesh.computeBoundingSphere(); group.add(mesh); }
  }

  // ---------------------------------------------------- the blue street plaques
  for (const s of STREETS) {
    const a = s.area, alongX = a.x1 - a.x0 > a.z1 - a.z0;
    const mx = (a.x0 + a.x1) / 2, mz = (a.z0 + a.z1) / 2;
    const tex = once(`plaque-${s.name}`, () => plaqueTexture(s.name));
    for (const along of [-0.3, 0.3]) {
      const px = alongX ? mx + (a.x1 - a.x0) * along : mx, pz = alongX ? mz : mz + (a.z1 - a.z0) * along;
      for (const side of [-1, 1]) {
        const wx = alongX ? px : (side < 0 ? a.x0 : a.x1), wz = alongX ? (side < 0 ? a.z0 : a.z1) : pz;
        const ox = alongX ? 0 : side * 0.8, oz = alongX ? side * 0.8 : 0;
        if (openOutside(wx + ox, wz + oz)) continue;
        const plaque = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.62), signMat(tex, 0.15));
        plaque.position.set(wx - (alongX ? 0 : side * 0.04), 3.3, wz - (alongX ? side * 0.04 : 0));
        plaque.rotation.y = alongX ? (side < 0 ? 0 : Math.PI) : (side < 0 ? Math.PI / 2 : -Math.PI / 2);
        group.add(plaque);
        break;
      }
    }
  }

  // ---------------------------------------------------- people: the circles, their companions, the survivors
  const talkers: Talker[] = [];
  const encounters = new Map<string, Talker>();
  const spots = citySpots().map((s: { id: string; x: number; z: number; angle: number }) => ({ id: s.id, x: s.x, z: s.z, heading: s.angle }));
  for (const zone of CITY_ZONES) {
    const z = layoutOf(zone) as ReturnType<typeof layoutOf> & Record<string, never>;
    const turn = turnOf(zone);
    for (const s of z.spots as { id: string; x: number; z: number; angle: number }[]) {
      const spot = SPOTS.find(x => x.id === s.id)!;
      const n = npcOf(s), at = toWorld(zone, n.x, n.z);
      const member = (CAST as Record<string, { look: Record<string, unknown> }>)[spot.cast[0]];
      const pose = spot.id === 'directo' ? 'phone' : spot.id === 'cocina' ? 'cook' : 'stand';
      talkers.push(makeTalker(group, s.id, at.x, at.z, n.heading + turn, 400 + talkers.length, member.look as never, pose, 'neutral', shadows));
      const pair = (z.pairs as Record<string, { x: number; z: number; heading: number }> | undefined)?.[s.id];
      if (pair && spot.cast[1]) { const q = toWorld(zone, pair.x, pair.z); talkers.push(makeTalker(group, null, q.x, q.z, pair.heading + turn, 450, (CAST as Record<string, { look: Record<string, unknown> }>)[spot.cast[1]].look as never, 'arms', 'angry', shadows)); }
    }
    (z.extras as { x: number; z: number; heading: number; pose: string; seed: number; mood?: string; look?: Record<string, unknown>; y?: number }[]).forEach(e => {
      const at = toWorld(zone, e.x, e.z);
      const t = makeTalker(group, null, at.x, at.z, e.heading + turn, e.seed, (e.look ?? {}) as never, e.pose, e.mood ?? 'worried', false);
      if (e.y) t.person.root.position.y = e.y;
      if (/sit|ground|sleep|guitar|lie/.test(e.pose)) t.seated = true;
      talkers.push(t);
    });
  }
  for (const e of ENCOUNTERS) {
    const t = makeTalker(group, `calle/${e.id}`, e.x, e.z, e.heading, e.seed, e.look as never, e.pose, e.seed % 3 === 0 ? 'scared' : 'worried', false);
    if (/sit|ground|sleep|guitar|lie|fish/.test(e.pose)) t.seated = true;
    talkers.push(t); encounters.set(e.id, t);
  }

  // ---------------------------------------------------- the clouds of every place, smoke and ash
  const nests = CITY_ZONES.flatMap(zone => ((layoutOf(zone) as { clouds: { x: number; z: number; r: number }[] }).clouds).map(c => { const p = toWorld(zone, c.x, c.z); return { x: p.x, z: p.z, r: c.r }; }));
  const smokeMat = new THREE.SpriteMaterial({ map: smokeTexture(), color: '#2e2b28', transparent: true, opacity: 0.38, depthWrite: false });
  const fireSmoke = life.fires.slice(0, low ? 4 : 9).map(f => f.at);
  const columns = [...life.smoke.slice(0, low ? 4 : 9), ...fireSmoke].map(at => {
    const puffs: THREE.Sprite[] = [];
    for (let i = 0; i < (low ? 4 : 7); i++) { const s = new THREE.Sprite(smokeMat); s.position.copy(at); group.add(s); puffs.push(s); }
    return { at, puffs };
  });
  const ashCount = low ? 160 : 420;
  const ashGeo = new THREE.BufferGeometry();
  const ashPos = new Float32Array(ashCount * 3);
  const rand = random(4242);
  for (let i = 0; i < ashCount; i++) { ashPos[i * 3] = (rand() - 0.5) * 60; ashPos[i * 3 + 1] = rand() * 9; ashPos[i * 3 + 2] = (rand() - 0.5) * 60; }
  ashGeo.setAttribute('position', new THREE.BufferAttribute(ashPos, 3));
  const ash = new THREE.Points(ashGeo, new THREE.PointsMaterial({ color: '#cfc6b4', size: 0.07, transparent: true, opacity: 0.6, depthWrite: false }));
  ash.frustumCulled = false;
  group.add(ash);

  const animate = (t: number, dt: number) => {
    life.lamps.forEach((m, i) => { m.emissiveIntensity = (Math.sin(t * 13 + i * 1.7) > 0.9 || Math.sin(t * 2.1 + i * 5.3) > 0.97) ? 0.08 : 1.3; });
    for (const m of life.ambers) m.emissiveIntensity = Math.sin(t * 3.4) > 0 ? 1.8 : 0.05;
    for (const f of life.fires) f.mat.emissiveIntensity = 1.6 + Math.sin(t * 17 + f.seed) * 0.5 + Math.sin(t * 7.3) * 0.3;
    for (const c of columns) c.puffs.forEach((s, i) => {
      const k = ((t * 0.16 + i / c.puffs.length) % 1);
      s.position.set(c.at.x + Math.sin(t * 0.3 + i) * k * 2, c.at.y + k * 18, c.at.z + k * 3);
      s.scale.setScalar(1.4 + k * 8);
    });
    for (const o of life.spin) {
      if (o.userData.bob) { o.position.y = -0.3 + Math.sin(t * 1.4 + o.position.x) * 0.06; o.rotation.z = Math.sin(t * 0.9) * 0.03; }
      else if (o.userData.veil) ((o as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = 0.18 + Math.sin(t * 2.4) * 0.08;
      else if (o.userData.wave) o.rotation.y = Math.sin(t * 2) * 0.25;
      else if (o.userData.river) ((o as THREE.Mesh).material as THREE.MeshStandardMaterial).color.setHSL(0.52, 0.22, 0.26 + Math.sin(t) * 0.02);
      else o.rotation.y += dt * 0.35;
    }
    const pos = ashGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < ashCount; i++) {
      let y = pos.getY(i) - dt * (0.12 + (i % 5) * 0.03);
      if (y < 0) y = 9;
      pos.setY(i, y); pos.setX(i, pos.getX(i) + Math.sin(t * 0.5 + i) * dt * 0.2);
    }
    pos.needsUpdate = true;
  };

  const spawn = arrivalOf('sol');
  return {
    id: 'city', group, bounds: { minX: B.minX, maxX: B.maxX, minZ: B.minZ, maxZ: B.maxZ }, solids, spawn, exit: spawn,
    spots, talkers, walkers: [], light: cityMood('sol', low), animate, gate: null, back: null,
    nests, zombies: [], under: false, sparks: life.sparks, alarms: life.alarms,
    encounters, metro: metroEntrances(), cull,
    focus: (x, z) => { ash.position.set(x, 0, z); },
    moodOf: zone => cityMood(zone, low),
  };
}

// ------------------------------------------------------------------ monuments
function plaqueTexture(name: string) {
  return canvas(340, 124, ctx => {
    ctx.fillStyle = '#f2ede0'; ctx.fillRect(0, 0, 340, 124);
    ctx.fillStyle = '#1f3d8f'; ctx.fillRect(8, 8, 324, 108);
    ctx.strokeStyle = '#f2ede0'; ctx.lineWidth = 3; ctx.strokeRect(16, 16, 308, 92);
    ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const [kind, ...rest] = name.split(' de ');
    const big = rest.length ? rest.join(' de ') : name;
    ctx.font = '600 20px Georgia, serif'; ctx.fillText(rest.length ? `${kind} de` : 'Madrid', 170, 38);
    ctx.font = `800 ${big.length > 14 ? 26 : 32}px Georgia, serif`; ctx.fillText(big.toUpperCase(), 170, 78, 300);
  });
}

type Monument = { kind: string; x?: number; z?: number; r?: number; w?: number; d?: number; x0?: number; x1?: number; z0?: number; z1?: number };
function monument(g: THREE.Group, m: Monument, life: Life, low: boolean) {
  const marble = solid('#e8e2d4', 0.7), stone = solid('#d8cfba', 0.85), bronze = solid('#3e4a42', 0.45, 0.6), slate = solid('#2e3238', 0.6, 0.3), sand = solid('#c9b48a', 0.9);
  switch (m.kind) {
    case 'cibeles': {
      // The goddess on her chariot pulled by two lions, in a dry basin full of leaves.
      const x = m.x!, z = m.z!;
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(m.r!, m.r! + 0.2, 0.8, 32), marble); rim.position.set(x, 0.4, z); g.add(rim);
      const dry = new THREE.Mesh(new THREE.CircleGeometry(m.r! - 0.3, 32), solid('#4a4232', 1)); dry.rotation.x = -Math.PI / 2; dry.position.set(x, 0.7, z); g.add(dry);
      g.add(box(3.2, 1.6, 2.2, marble, x, 1.4, z), box(2.2, 1.2, 1.6, marble, x + 0.4, 2.8, z));
      const goddess = new THREE.Mesh(new THREE.CapsuleGeometry(0.45, 1.5, 4, 8), marble); goddess.position.set(x + 0.4, 4.4, z); g.add(goddess);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), marble); head.position.set(x + 0.4, 5.6, z); g.add(head);
      for (const s of [-0.6, 0.6]) { const lion = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 1.2, 4, 8), marble); lion.rotation.z = Math.PI / 2; lion.position.set(x - 1.9, 2.4, z + s); g.add(lion); const mane = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 0), marble); mane.position.set(x - 2.7, 2.8, z + s); g.add(mane); }
      return;
    }
    case 'alcala': {
      // Five openings; the piers are the solids of city.mjs, the arches and the attic are above.
      const x = m.x!, z = m.z!, d = m.d!;
      for (const px of [-7.5, -4.5, -1.5, 1.5, 4.5, 7.5]) g.add(box(1.2, 9, d, stone, x + px, 4.5, z));
      for (const ax of [-6, 0, 6]) { const arch = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.3, 6, 16, Math.PI), stone); arch.position.set(x + ax, 7.4, z); arch.scale.z = d / 0.6; g.add(arch); }
      g.add(box(17, 2.4, d + 0.4, stone, x, 10.2, z), box(17.6, 0.5, d + 0.8, stone, x, 11.6, z));
      const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 4.2, 2.6, 3), stone); ped.rotation.set(Math.PI / 2, 0, 0); ped.scale.set(1, 0.5, 1); ped.position.set(x, 13, z); g.add(ped);
      g.add(box(3, 2.2, 1.2, stone, x, 13.2, z));
      return;
    }
    case 'cervantes': {
      // Cervantes seated over Don Quijote on his horse and Sancho on his donkey.
      const x = m.x!, z = m.z!;
      g.add(box(m.w!, 1.2, m.d!, stone, x, 0.6, z), box(2.2, 6, 2.2, stone, x, 4.2, z + 1));
      const writer = new THREE.Mesh(new THREE.CapsuleGeometry(0.5, 1.2, 4, 8), bronze); writer.position.set(x, 7.9, z + 1); g.add(writer);
      for (const [ox, h] of [[-1.6, 2.3], [1.6, 1.9]] as const) {
        const horse = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 1.3, 4, 8), bronze); horse.rotation.x = Math.PI / 2; horse.position.set(x + ox, 1.9, z - 0.6); g.add(horse);
        const rider = new THREE.Mesh(new THREE.CapsuleGeometry(0.25, h - 1.2, 4, 8), bronze); rider.position.set(x + ox, 2.4 + h / 3, z - 0.6); g.add(rider);
      }
      return;
    }
    case 'debod': {
      // The Egyptian temple on its platform, its two gates and the long pond, in the dusk.
      const x = m.x!, z = m.z!;
      g.add(box(m.w! + 2, 0.6, m.d! + 2, sand, x, 0.3, z), box(m.w!, 5.4, m.d!, sand, x, 3.3, z), box(m.w! + 0.6, 0.6, m.d! + 0.6, sand, x, 6.2, z));
      g.add(box(2, 3.4, 0.3, solid('#1a1814', 1), x, 2.3, z - m.d! / 2 - 0.05, false));
      for (const gz of [z - 12, z - 17]) {
        g.add(box(1.2, 5.2, 1.2, sand, x - 2.5, 2.6, gz), box(1.2, 5.2, 1.2, sand, x + 2.5, 2.6, gz), box(6.4, 1, 1.4, sand, x, 5.6, gz));
      }
      const pond = new THREE.Mesh(new THREE.PlaneGeometry(4, 8), new THREE.MeshStandardMaterial({ color: '#2e3e40', roughness: 0.1, metalness: 0.3 })); pond.rotation.x = -Math.PI / 2; pond.position.set(x + 9, 0.03, z - 6); g.add(pond);
      return;
    }
    case 'oriente': {
      // Felipe IV on his rearing horse, in the middle of the plaza.
      const x = m.x!, z = m.z!;
      g.add(box(3.4, 3, 3.4, stone, x, 1.5, z));
      const horse = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 1.6, 4, 8), bronze); horse.rotation.z = 1.1; horse.position.set(x, 4.4, z); g.add(horse);
      const king = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.8, 4, 8), bronze); king.position.set(x - 0.2, 5.4, z); g.add(king);
      return;
    }
    case 'almudena': {
      // The cathedral of the Almudena: grey stone, two towers to the square and the dome.
      const x0 = m.x0!, x1 = m.x1!, z0 = m.z0!, z1 = m.z1!, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      const tex = facadeTexture('#d6d0c2', 'palace', 977, 0.25); tex.repeat.set((x1 - x0) / 7, 3);
      const body = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 20, z1 - z0), [stone, stone, slate, stone, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 }), stone]); body.position.set(cx, 10, cz); g.add(body);
      for (const tx of [x0 + 3, x1 - 3]) { g.add(box(6, 28, 6, stone, tx, 14, z1 - 3)); const cap = new THREE.Mesh(new THREE.SphereGeometry(2.6, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), slate); cap.position.set(tx, 28, z1 - 3); g.add(cap); g.add(cylinder(0.08, 0.08, 3, solid('#c9a24a', 0.35, 0.8), tx, 31.4, z1 - 3, 6)); }
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, 6, 20), stone); drum.position.set(cx, 23, cz - 2); g.add(drum);
      const dome = new THREE.Mesh(new THREE.SphereGeometry(6.2, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), slate); dome.position.set(cx, 26, cz - 2); dome.scale.y = 1.3; g.add(dome);
      g.add(box(4.4, 7, 0.3, solid('#1a1612', 1), cx, 3.5, z1 + 0.1, false));
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(10, 1.4), signMat(plate('NO HAY SITIO · NO LLAMÉIS', '#1b1b1b', '#e8e0d0', 1024, 128), 0)); sign.position.set(cx, 8.5, z1 + 0.12); g.add(sign);
      return;
    }
    case 'teatro': {
      const x0 = m.x0!, x1 = m.x1!, z0 = m.z0!, z1 = m.z1!, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      const tex = facadeTexture('#c9b8a0', 'classic', 978, 0.5); tex.repeat.set(3, 3);
      g.add(new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 18, z1 - z0), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 })));
      g.children[g.children.length - 1].position.set(cx, 9, cz);
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(6, 7, 6, 8), solid('#a8a090', 0.9)); drum.position.set(cx, 21, cz); g.add(drum);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.1), signMat(plate('TEATRO REAL', '#2a1a1a', '#e8c88a', 768, 112), 0.3)); sign.position.set(cx, 7, z0 - 0.06); sign.rotation.y = Math.PI; g.add(sign);
      const poster = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 3), signMat(plate('HOY: NADA', '#6a1a1a', '#f2e6cc', 256, 352, 800), 0)); poster.position.set(cx + 6, 2.2, z0 - 0.07); poster.rotation.y = Math.PI; g.add(poster);
      return;
    }
    case 'comunicaciones': {
      // The white palace of Cibeles, its towers and a banner hung from the roof.
      const x0 = m.x0!, x1 = m.x1!, z0 = m.z0!, z1 = m.z1!, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      const tex = facadeTexture('#eeeae0', 'palace', 979, 0.3); tex.repeat.set(3, 3);
      const body = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 20, z1 - z0), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 })); body.position.set(cx, 10, cz); g.add(body);
      for (const tx of [x0 + 3, cx, x1 - 3]) { g.add(box(4, tx === cx ? 30 : 25, 4, solid('#eeeae0', 0.85), tx, tx === cx ? 15 : 12.5, z0 + 2)); const spire = new THREE.Mesh(new THREE.ConeGeometry(2.6, 5, 4), slate); spire.rotation.y = Math.PI / 4; spire.position.set(tx, (tx === cx ? 30 : 25) + 2.5, z0 + 2); g.add(spire); }
      const banner = new THREE.Mesh(new THREE.PlaneGeometry(12, 5), new THREE.MeshStandardMaterial({ map: plate('NO ESTAMOS MUERTOS', '#efefe8', '#a01a1a', 1024, 420), side: THREE.DoubleSide, roughness: 1 })); banner.position.set(cx, 13, z0 - 0.1); g.add(banner);
      return;
    }
    case 'prado': {
      // The Museo del Prado: a long front of columns to the Paseo.
      const x0 = m.x0!, x1 = m.x1!, z0 = m.z0!, z1 = m.z1!, cz = (z0 + z1) / 2;
      const tex = facadeTexture('#c98a6a', 'brick', 980, 0.35); tex.repeat.set(8, 2);
      const body = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 13, z1 - z0), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 })); body.position.set((x0 + x1) / 2, 6.5, cz); g.add(body);
      for (let z = z0 + 2; z < z1 - 1; z += low ? 4 : 2.5) g.add(cylinder(0.35, 0.4, 10, stone, x0 - 0.05, 5, z, 10));
      g.add(box(1.2, 1.4, z1 - z0, stone, x0, 10.7, cz), box(1.6, 0.6, z1 - z0, stone, x0, 13.2, cz));
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.1), signMat(plate('MUSEO DEL PRADO · CERRADO', '#2a2a2a', '#efe6d2', 1024, 112), 0.2)); sign.position.set(x0 - 0.9, 9.6, cz); sign.rotation.y = -Math.PI / 2; g.add(sign);
      return;
    }
    case 'edificio-espana': {
      const x0 = m.x0!, x1 = m.x1!, z0 = m.z0!, z1 = m.z1!, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      const tex = facadeTexture('#d6b89a', 'modern', 981, 0.55); tex.repeat.set(3, 6);
      const base = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 26, z1 - z0), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 })); base.position.set(cx, 13, cz); g.add(base);
      const t2 = tex.clone(); t2.needsUpdate = true; t2.repeat.set(1.5, 6);
      const tower = new THREE.Mesh(new THREE.BoxGeometry(10, 24, 8), new THREE.MeshStandardMaterial({ map: t2, roughness: 0.9 })); tower.position.set(cx, 38, cz); g.add(tower);
      // One window up there is still lit, and goes out now and then.
      const lit = glow('#ffd88a', 1.5); life.lamps.push(lit); g.add(box(1, 1.2, 0.05, lit, cx + 2, 44, z0 - 0.03, false));
      return;
    }
    case 'pylon': return; // drawn with the temple
    default: {
      g.add(box(m.w ?? 2, 3, m.d ?? 2, stone, m.x ?? 0, 1.5, m.z ?? 0));
    }
  }
}

// ------------------------------------------------------------------ the creepy things
const SHEET = new THREE.MeshStandardMaterial({ color: '#e8e6e0', roughness: 1 });
function creepy(g: THREE.Group, c: { kind: string; x: number; z: number; r: number }) {
  const o = new THREE.Group(); o.position.set(c.x, 0, c.z); o.rotation.y = c.r; g.add(o);
  switch (c.kind) {
    case 'sheet': {
      // A body under a white sheet: the shape of the head and the feet, a dark stain.
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 1.3, 4, 8), SHEET); body.rotation.z = Math.PI / 2; body.scale.set(1, 1, 0.55); body.position.y = 0.16; o.add(body);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), SHEET); head.position.set(0.85, 0.2, 0); head.scale.y = 0.75; o.add(head);
      for (const s of [-0.12, 0.12]) { const foot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), SHEET); foot.position.set(-0.92, 0.26, s); o.add(foot); }
      const stain = new THREE.Mesh(new THREE.CircleGeometry(0.34, 12), new THREE.MeshBasicMaterial({ color: '#4a0c0c', transparent: true, opacity: 0.85, depthWrite: false })); stain.rotation.x = -Math.PI / 2; stain.position.set(0.2, 0.33, 0.02); stain.scale.set(1.4, 0.8, 1); o.add(stain);
      const pool = new THREE.Mesh(new THREE.CircleGeometry(0.6, 14), new THREE.MeshBasicMaterial({ color: '#2a0606', transparent: true, opacity: 0.7, depthWrite: false })); pool.rotation.x = -Math.PI / 2; pool.position.set(0.3, 0.015, 0.45); o.add(pool);
      return;
    }
    case 'doll': {
      // A child's doll sitting alone, its head turned the wrong way.
      const dress = solid('#b84a5a', 0.9), skin = solid('#e8c8b0', 0.7);
      const b = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.28, 8), dress); b.position.y = 0.14; o.add(b);
      const h = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), skin); h.position.y = 0.34; h.rotation.y = Math.PI; o.add(h);
      o.add(box(0.03, 0.03, 0.03, solid('#111111'), 0, 0.36, -0.08, false));
      return;
    }
    case 'pram': {
      const frame = solid('#2a2a2e', 0.6, 0.3);
      const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.3, 0.9, 12, 1, true, 0, Math.PI), solid('#3a4a5a', 0.9)); basket.rotation.z = Math.PI / 2; basket.position.y = 0.7; o.add(basket);
      for (const [x, z] of [[-0.35, -0.28], [0.35, -0.28], [-0.35, 0.28], [0.35, 0.28]]) { const w = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 4, 12), frame); w.position.set(x, 0.15, z); o.add(w); }
      o.rotation.z = 0.2;
      return;
    }
    case 'suitcase': {
      o.add(box(0.85, 0.5, 0.25, solid('#5a3a2a', 0.8), 0, 0.12, 0, false));
      for (let i = 0; i < 5; i++) o.add(box(0.2 + i * 0.03, 0.02, 0.15, solid(['#e8e4dc', '#4a5a7a', '#8a2a2a'][i % 3], 1), 0.6 + i * 0.12, 0.01, (i % 2) * 0.2 - 0.1, false));
      return;
    }
  }
}

export { lightPool, addPalm };
