// Objetos perdidos · the municipal lost-and-found office in three.js: the
// street with the pharmacy, the waiting room and the counter, the rooms full
// of lost things, the loading dock with the bus and the taxi, and the rooftop
// with the city at its feet. Everything is drawn from layout.mjs, so what you
// see is what you bump into. The night moves on with the lesson: deep night
// at eleven, the last dark hour, and daylight at the shift change (setNight).
// In realistic mode floors and walls are photographic surfaces (app/mundo-real)
// and the people get real bodies (enableRealPeople, called by World3D first).
import * as THREE from 'three';
import { batchStatic, canvas, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { fitSurfaces, surface } from '../mundo-real/real3d';
import {
  ARCHIVE, BIG, BUILDING, CHATTER, COLD, CORRIDOR, CROWD, DOCK, DOORS, FILLERS, FURNITURE, HALL, OFFICE_ROOM, PHONES, ROOF, SCENES, SHELVES, STREET, TELEPORTS, WALKERS, WALLS,
  ceilingAt, footprint, walkerAt, type Walker,
} from './layout.mjs';

export type Npc = { person: Person; scene?: string; main?: boolean; x: number; z: number; y: number; heading: number; baseMood: string; seated?: boolean; talk?: string; key?: string; body?: string; seed: number; angryUntil?: number; kids?: number };
export type Mover = { walker: Walker; person: Person; offset: number; x: number; z: number; moving?: boolean; body?: string; seed: number; key: string; angryUntil?: number; heading?: number };
export type Spot = { id: string; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Body = { x: number; z: number; radius?: number; who: Npc | Mover };
export type Oficina = {
  npcs: Npc[];
  movers: Mover[];
  spots: Spot[];
  animate: (t: number, dt: number, px: number, pz: number, camera: THREE.Camera) => void;
  setSceneMood: (id: string | null, mood: string | null) => void;
  /** The night follows the lesson: 0 at eleven, 1 the last dark hour, 2 daylight at seven. */
  setNight: (phase: number) => void;
  bodies: () => Body[];
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
};

// People currently speaking in an open scene.
export const talking = new WeakSet<Person>();

const std = (color: string, roughness = 0.8, metalness = 0, extra: THREE.MeshStandardMaterialParameters = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
const B = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
const C = (rt: number, rb: number, h: number, s = 14) => new THREE.CylinderGeometry(rt, rb, h, s);
function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}
function sign(text: string, bg = '#1d3a5a', fg = '#f4f0e0', w = 512, h = 128, font = 'Arial, sans-serif') {
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = fg; ctx.lineWidth = 5; ctx.strokeRect(7, 7, w - 14, h - 14);
    ctx.fillStyle = fg; ctx.font = `700 ${Math.round(h * (text.length > 14 ? 0.32 : 0.44))}px ${font}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, w / 2, h / 2 + 2);
  });
}
function bubbleTexture(text: string, yell = false) {
  return canvas(512, 128, ctx => {
    ctx.fillStyle = yell ? 'rgba(200,20,20,.96)' : 'rgba(255,255,255,.94)';
    ctx.beginPath(); ctx.roundRect(8, 8, 496, 92, 26); ctx.fill();
    ctx.beginPath(); ctx.moveTo(230, 98); ctx.lineTo(256, 124); ctx.lineTo(270, 98); ctx.fill();
    ctx.fillStyle = yell ? '#ffffff' : '#1a2230'; ctx.font = `${yell ? 800 : 600} ${text.length > 30 ? 24 : 30}px Arial, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text.length > 44 ? text.slice(0, 43) + '…' : text, 256, 54);
  });
}

// ---------------------------------------------------------------- people
function makePerson(look: Look, pose: string, opts: { seat?: boolean; mood?: string }) {
  const person = createPerson(look, false);
  person.root.userData.person = true; // the no-ghost QA check finds people by this tag
  setPose(person, pose, Boolean(opts.seat) || pose === 'sit');
  if (opts.mood) setMood(person, opts.mood);
  addBlobShadow(person, 0.8);
  return person;
}
const Lk = (skin: string, age: string, body: string, hairStyle: string, hairColor: string, top: string, topColor: string, bottom: string | null, bottomColor: string | null, extras: string[] = [], seed = 0): Look =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, ...(bottom ? { bottom, bottomColor: bottomColor ?? undefined } : {}), extras, seed } as Look);
// The seventeen who talk, in the order of CROWD and invitados.mjs.
const CROWD_LOOKS: Look[] = [
  Lk('#f0d6c0', 'elderly', 'f', 'curly', '#e0d8e8', 'coat', '#6a3a6a', 'pants', '#2a2a30', ['glasses', 'earrings'], 401), // Doña Amparo
  Lk('#c48f69', 'young', 'm', 'short', '#120d0b', 'tshirt', '#e8c020', 'jeans', '#24304a', [], 402), // Marcos
  Lk('#e2b896', 'adult', 'f', 'ponytail', '#3a2416', 'jacket', '#2a6a8a', 'jeans', '#24304a', ['earrings'], 403), // Lucía
  Lk('#dcae88', 'adult', 'm', 'curly', '#2a1a12', 'suit', '#d02a8a', 'pants', '#d02a8a', ['hat'], 404), // Toño, disguised
  Lk('#b9825c', 'old', 'f', 'bun', '#d8d8d8', 'uniform', '#f07020', 'pants', '#2a2a30', [], 405), // Doña Rosario
  Lk('#a8724e', 'young', 'm', 'cap', '#120d0b', 'jacket', '#30a060', 'pants', '#2a2a2a', [], 406), // Kevin
  Lk('#e8c0a0', 'young', 'f', 'bob', '#6a2a18', 'hoodie', '#4a7ac8', 'jeans', '#24304a', ['glasses'], 407), // Paula
  Lk('#c99468', 'old', 'm', 'short', '#9a9a9a', 'uniform', '#3a5a7a', 'pants', '#3a5a7a', ['mustache'], 408), // Don Ramiro
  Lk('#f0d6c0', 'adult', 'f', 'long', '#2a1a12', 'sweater', '#c81e2a', 'pants', '#2a2a30', [], 409), // Inés
  Lk('#e2b896', 'young', 'm', 'short', '#3a2416', 'coat', '#3a3a42', 'jeans', '#24304a', ['scarf'], 410), // Dani
  Lk('#e8c0a0', 'elderly', 'm', 'bald', '#e8e8e8', 'sweater', '#5a4a3a', 'pants', '#3a3028', ['glasses'], 411), // Don Aurelio
  Lk('#c48f69', 'adult', 'f', 'curly', '#120d0b', 'uniform', '#7a1a2a', 'pants', '#141418', ['hat'], 412), // Pili
  Lk('#dcae88', 'elderly', 'f', 'bob', '#c8c8c8', 'dress', '#5a2a6a', null, null, ['earrings'], 413), // Doña Chelo
  Lk('#8d5a3c', 'adult', 'm', 'buzz', '#120d0b', 'uniform', '#2a3a5a', 'pants', '#2a3a5a', [], 414), // Jairo
  Lk('#c99468', 'adult', 'f', 'ponytail', '#120d0b', 'jacket', '#1a1a1a', 'pants', '#2a2a2a', [], 415), // Noelia
  Lk('#b9825c', 'young', 'm', 'afro', '#120d0b', 'hoodie', '#2a2a2a', 'jeans', '#24304a', ['headphones'], 416), // Mateo
  Lk('#f0d6c0', 'young', 'f', 'long', '#e0c070', 'jacket', '#8a6a3a', 'jeans', '#24304a', [], 417), // Carla
];
const NIGHT_OWLS: Look[] = [
  Lk('#e8c0a0', 'old', 'f', 'curly', '#d8d0e0', 'coat', '#3a6aa8', 'pants', '#2a2a30', ['glasses'], 501),
  Lk('#c48f69', 'young', 'm', 'short', '#1a1210', 'tshirt', '#e83a3a', 'jeans', '#24304a', [], 502),
  Lk('#8d5a3c', 'young', 'f', 'braids', '#120d0b', 'dress', '#e0a020', null, null, ['earrings'], 503),
  Lk('#f0d0b4', 'young', 'm', 'curly', '#6a3a1a', 'shirt', '#3ac8a8', 'shorts', '#2a2a30', ['hat'], 504),
  Lk('#b9825c', 'adult', 'f', 'long', '#2a1a12', 'jacket', '#2a2a40', 'jeans', '#24304a', [], 505),
  Lk('#dcae88', 'adult', 'm', 'short', '#3a2416', 'uniform', '#f4f4f0', 'pants', '#2a2a30', [], 506),
  Lk('#e2b896', 'adult', 'm', 'buzz', '#3a2416', 'uniform', '#2a3a5a', 'pants', '#2a3a5a', [], 507),
];

// ---------------------------------------------------------------- spots
function buildSpot(id: string, x: number, z: number, y = 0): Spot {
  const group = new THREE.Group();
  group.position.set(x, y + 0.03, z);
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.98, 1.18, 48), material);
  ring.rotation.x = -Math.PI / 2;
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.98, 48), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.12, depthWrite: false, toneMapped: false }));
  disc.rotation.x = -Math.PI / 2;
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), material);
  gem.position.y = 2.3;
  group.add(ring, disc, gem);
  return { id, group, ring, gem, material };
}

// ---------------------------------------------------------------- the office
export function buildOficina(scene: THREE.Scene, opts: { low: boolean; shadows: boolean; real: boolean }): Oficina {
  const real = opts.real;
  const world = new THREE.Group();
  world.name = 'objetos-perdidos';
  scene.add(world);
  const statics = new THREE.Group();
  world.add(statics);
  const keep: THREE.Object3D[] = [];

  // Materials: photographic in realistic mode, plain colours on phones.
  const asphalt = real ? surface('asphalt_02', '#5a5a60') : std('#3a3a40', 0.95);
  const pavement = real ? surface('large_floor_tiles_02', '#b8b0a4') : std('#a8a094', 0.9);
  const tiles = real ? surface('floor_tiles_06', '#e8e4dc') : std('#dcd8ce', 0.6);
  const lino = real ? surface('laminate_floor_02', '#c8a880') : std('#b89870', 0.7);
  const carpet = real ? surface('dirty_carpet', '#5a6a7a') : std('#4a5a6a', 0.95);
  const concrete = real ? surface('concrete_floor_02', '#a8a8a4') : std('#8e8e8a', 0.9);
  const roofFloor = real ? surface('concrete_floor_02', '#9a948a') : std('#8a847a', 0.95);
  const wallIn = real ? surface('plastered_wall_04', '#ece6d8') : std('#e6e0d2', 0.9);
  const wallOut = real ? surface('concrete_wall_008', '#d8d2c4') : std('#cfc8b8', 0.9);
  const brick = real ? surface('red_brick_03', '#b07a62') : std('#9a5a44', 0.9);
  const ceilingMat = real ? surface('ceiling_interior', '#f4f0e8') : std('#f0ece2', 0.95);
  const wood = real ? surface('wood_table_001', '#8a5a3a') : std('#7a4a2a', 0.6);
  const metalPlate = real ? surface('metal_plate', '#8a9098') : std('#7a8088', 0.5, 0.5);
  const metal = std('#8a9098', 0.4, 0.7), dark = std('#2a2c30', 0.7), white = std('#f4f4f0', 0.6), steel = std('#b8bec4', 0.35, 0.6);
  const plastic = std('#3a6aa8', 0.5), orange = std('#e86a20', 0.6), red = std('#b02a2a', 0.6), green = std('#2a7a4a', 0.6), gold = std('#d8b060', 0.3, 0.8);
  const black = std('#18181c', 0.5), paper = std('#f2ead4', 0.9), cardboard = std('#b08858', 0.9);
  const glass = new THREE.MeshStandardMaterial({ color: '#9ab8c8', roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.28, emissive: '#ffcf8a', emissiveIntensity: 0.15, depthWrite: false });
  const lampMat = new THREE.MeshStandardMaterial({ color: '#fff4d8', emissive: '#ffd890', emissiveIntensity: 1.6, roughness: 0.4 });
  const neonGreen = new THREE.MeshBasicMaterial({ color: '#30ff70', toneMapped: false });
  const litWindow = new THREE.MeshStandardMaterial({ color: '#2a2a20', emissive: '#ffcc70', emissiveIntensity: 0.9, roughness: 0.5 });
  const screenMat = new THREE.MeshBasicMaterial({ map: sign('112', '#081410', '#40ff80', 256, 128), toneMapped: false });

  // ------------------------------------------------------------ ground
  const floor = (x0: number, z0: number, x1: number, z1: number, mat: THREE.Material, y = 0.012) => { const m = add(statics, B(x1 - x0, 0.02, z1 - z0), mat, (x0 + x1) / 2, y, (z0 + z1) / 2); m.castShadow = false; return m; };
  floor(STREET.x0, 22, STREET.x1, 28.6, asphalt, 0.005);
  floor(STREET.x0, STREET.z0, STREET.x1, 22, pavement, 0.02); floor(STREET.x0, 28.6, STREET.x1, STREET.z1, pavement, 0.02);
  floor(HALL.x0, HALL.z0, HALL.x1, HALL.z1, tiles);
  floor(OFFICE_ROOM.x0, OFFICE_ROOM.z0, OFFICE_ROOM.x1, OFFICE_ROOM.z1, carpet);
  floor(PHONES.x0, PHONES.z0, PHONES.x1, PHONES.z1, lino);
  floor(CORRIDOR.x0, CORRIDOR.z0, CORRIDOR.x1, CORRIDOR.z1, lino);
  floor(SHELVES.x0, SHELVES.z0, SHELVES.x1, SHELVES.z1, lino);
  floor(COLD.x0, COLD.z0, COLD.x1, COLD.z1, metalPlate);
  floor(ARCHIVE.x0, ARCHIVE.z0, ARCHIVE.x1, ARCHIVE.z1, carpet);
  floor(BIG.x0, BIG.z0, BIG.x1, BIG.z1, concrete);
  floor(DOCK.x0, DOCK.z0, DOCK.x1, DOCK.z1, asphalt);
  floor(ROOF.x0, ROOF.z0, ROOF.x1, ROOF.z1, roofFloor);
  // Painted lines on the dock and the zebra crossing on the street.
  for (let x = -14; x <= 14; x += 4) floor(x - 0.06, -46, x + 0.06, -42, std('#e8d040', 0.8), 0.02);
  for (let x = -2; x <= 2; x += 0.9) floor(x - 0.25, 22.2, x + 0.25, 28.4, std('#ece8e0', 0.8), 0.012);
  // Ceilings: low in the office, high in the room of oversized objects.
  const ceilings: [number, number, number, number, number][] = [[BUILDING.x0, -14, BUILDING.x1, BUILDING.z1, 3.4], [BIG.x0, BIG.z0, BIG.x1, BIG.z1, 5.4]];
  for (const [x0, z0, x1, z1, h] of ceilings) { const c = add(statics, B(x1 - x0, 0.04, z1 - z0), ceilingMat, (x0 + x1) / 2, h, (z0 + z1) / 2); c.castShadow = false; }
  // The building seen from outside: a second floor of offices with dark windows, and the roof line.
  add(statics, B(32.4, 3.2, 46.4), wallOut, 0, 3.4 + 1.6 + 0.02, -7);
  for (let x = -14; x <= 14; x += 3.5) add(statics, B(1.6, 1.2, 0.04), std('#20262c', 0.3), x, 5.0, 16.24).castShadow = false;
  // Fluorescent strips along the ceilings.
  for (let z = -12; z < 16; z += 4) for (const x of [-11, -4, 4, 11]) { const s = add(statics, B(1.4, 0.04, 0.16), lampMat, x, 3.36, z); s.castShadow = false; }
  for (let z = -27; z < -15; z += 4) for (const x of [-10, 0, 10]) { const s = add(statics, B(1.6, 0.05, 0.2), lampMat, x, 5.34, z); s.castShadow = false; }

  // ------------------------------------------------------------ walls
  const heightFor = (kind: string, mx: number, mz: number) => {
    if (kind === 'facade') return 9;
    if (kind === 'fence') return 2.4;
    if (kind === 'parapet') return 1.1;
    let h = 0;
    for (const [dx, dz] of [[0.3, 0], [-0.3, 0], [0, 0.3], [0, -0.3]]) { const c = ceilingAt(mx + dx, mz + dz); if (c < 8) h = Math.max(h, c); }
    return h || 3.4;
  };
  for (const seg of WALLS as [number, number, number, number, string][]) {
    const [x0, z0, x1, z1, kind] = seg;
    const len = Math.hypot(x1 - x0, z1 - z0), mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
    const ang = x0 === x1 ? 0 : Math.PI / 2;
    const h = heightFor(kind, mx, mz);
    const piece = (y0: number, y1: number, m: THREE.Material, t = 0.25) => add(statics, B(t, y1 - y0, len), m, mx, (y0 + y1) / 2, mz, ang);
    if (kind === 'glass') {
      piece(0, 0.6, wallOut); piece(2.6, 3.4, wallOut);
      const pane = piece(0.6, 2.6, glass, 0.05); pane.castShadow = false;
      const n = Math.max(1, Math.round(len / 2));
      for (let k = 0; k <= n; k++) { const t = k / n; add(statics, B(0.12, 2.0, 0.12), metal, x0 + (x1 - x0) * t, 1.6, z0 + (z1 - z0) * t); }
    } else if (kind === 'facade') {
      // The houses across the street and the alleys: brick, lit windows, balconies.
      piece(0, h, brick, 0.3);
      const rr = random(Math.round(Math.abs(mx * 7 + mz * 3)) + 5);
      const n = Math.floor(len / 3.2);
      for (let k = 0; k < n; k++) for (const y of [4.2, 7.0]) {
        const t = (k + 0.5) / n, wx = x0 + (x1 - x0) * t, wz = z0 + (z1 - z0) * t;
        const lit = rr() > 0.55;
        const off = x0 === x1 ? [x0 > 0 ? -0.17 : 0.17, 0] : [0, z0 > 0 ? -0.17 : 0.17];
        const m = add(statics, B(x0 === x1 ? 0.04 : 1.1, 1.3, x0 === x1 ? 1.1 : 0.04), lit ? litWindow : std('#1c2026', 0.4), wx + off[0], y, wz + off[1]);
        m.castShadow = false;
      }
    } else if (kind === 'fence') {
      const n = Math.max(1, Math.round(len / 2.5));
      for (let k = 0; k <= n; k++) { const t = k / n; add(statics, C(0.04, 0.04, h, 6), metal, x0 + (x1 - x0) * t, h / 2, z0 + (z1 - z0) * t); }
      const mesh = piece(0, h, new THREE.MeshStandardMaterial({ color: '#9aa0a8', transparent: true, opacity: 0.35, roughness: 0.6, metalness: 0.5, side: THREE.DoubleSide, depthWrite: false }), 0.03);
      mesh.castShadow = false;
    } else if (kind === 'parapet') {
      piece(0, h, wallOut, 0.3); add(statics, B(x0 === x1 ? 0.4 : len, 0.08, x0 === x1 ? len : 0.4), white, mx, h + 0.04, mz);
    } else piece(0, h, mz <= -29.8 ? wallOut : wallIn);
  }
  // Labels over the doors.
  const labelMat = (text: string) => new THREE.MeshBasicMaterial({ map: sign(text), toneMapped: false, side: THREE.DoubleSide });
  for (const d of DOORS as { x: number; z: number; w: number; label: string; out?: boolean }[]) {
    const along = (WALLS as [number, number, number, number, string][]).some(w => w[0] === w[2] && Math.abs(w[0] - d.x) < 0.01);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(Math.max(1.2, d.label.length * 0.11), 0.26), labelMat(d.label));
    if (along) { m.position.set(d.x, 2.45, d.z); m.rotation.y = Math.PI / 2; }
    else m.position.set(d.x, d.out ? 3.0 : 2.45, d.z + (d.out ? 0.16 : 0));
    if (d.out) m.scale.set(2.2, 2.2, 1);
    world.add(m); keep.push(m);
  }

  // ------------------------------------------------------------ furniture
  const anim = { neon: [] as THREE.Mesh[], sway: [] as THREE.Object3D[], lanterns: [] as THREE.Mesh[], cage: [] as THREE.Object3D[] };
  const rnd = random(264);
  for (const item of FURNITURE as { type: string; x: number; z: number; w: number; d: number; rot?: number }[]) {
    const f = footprint(item), w = f.x1 - f.x0, d = f.z1 - f.z0;
    const g = new THREE.Group(); g.position.set(item.x, 0, item.z); statics.add(g);
    const face = ((item.rot ?? 0) * Math.PI) / 2;
    switch (item.type) {
      case 'pharmacy': {
        add(g, B(w, 3.2, 0.2), std('#f4f4f0', 0.6), 0, 1.6);
        const glassFront = add(g, B(w - 1, 2.0, 0.05), glass, 0, 1.2, -0.12); glassFront.castShadow = false;
        const m = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 0.6), new THREE.MeshBasicMaterial({ map: sign('FARMACIA · GUARDIA', '#1a7a3a', '#ffffff', 1024, 140), toneMapped: false }));
        m.position.set(0, 2.8, -0.12); m.rotation.y = Math.PI; g.add(m); keep.push(m);
        break;
      }
      case 'neoncross': {
        const a = add(g, B(0.9, 0.3, 0.08), neonGreen, 0, 3.6, -0.3); const b = add(g, B(0.3, 0.9, 0.08), neonGreen, 0, 3.6, -0.3);
        a.castShadow = b.castShadow = false; anim.neon.push(a, b); keep.push(a, b);
        break;
      }
      case 'bench': g.rotation.y = face; add(g, B(item.w, 0.06, item.d), wood, 0, 0.45); add(g, B(item.w, 0.4, 0.05), wood, 0, 0.7, -item.d / 2 + 0.03); for (const a of [-1, 1]) add(g, B(0.06, 0.44, item.d), metal, a * (item.w / 2 - 0.1), 0.22, 0); break;
      case 'streetlamp': add(g, C(0.07, 0.1, 4.2, 8), dark, 0, 2.1); add(g, B(0.6, 0.12, 0.3), dark, 0.25, 4.2, 0); add(g, B(0.4, 0.06, 0.22), lampMat, 0.3, 4.12, 0).castShadow = false; break;
      case 'kiosk': add(g, B(w, 2.4, d), green, 0, 1.2); add(g, B(w + 0.4, 0.12, d + 0.4), green, 0, 2.5); add(g, B(w - 0.2, 0.9, 0.04), std('#f0e8d0', 0.8), 0, 1.4, -d / 2 - 0.02).castShadow = false; break;
      case 'bin': add(g, C(w / 2, w / 2 - 0.05, 0.9, 12), green, 0, 0.45); break;
      case 'barrier': add(g, B(w, 0.12, 0.06), std('#e8e0d0', 0.6), 0, 0.85); add(g, B(w, 0.12, 0.06), red, 0, 0.6); for (const a of [-1, 1]) add(g, B(0.06, 1.0, 0.3), metal, a * (w / 2 - 0.05), 0.5, 0); break;
      case 'garland': {
        // Paper lanterns strung across the street, left over from the festival.
        for (let k = 0; k < 18; k++) {
          const x = -15 + k * (30 / 17);
          const lan = add(g, new THREE.SphereGeometry(0.22, 10, 8), new THREE.MeshStandardMaterial({ color: ['#e84a3a', '#f0a020', '#e8d040', '#d04a8a'][k % 4], emissive: ['#e84a3a', '#f0a020', '#e8d040', '#d04a8a'][k % 4], emissiveIntensity: 0.7, roughness: 0.8 }), x, 5.2 - Math.sin((k / 17) * Math.PI) * 0.8, 0);
          lan.scale.y = 1.3; lan.castShadow = false; anim.lanterns.push(lan); keep.push(lan);
        }
        break;
      }
      case 'confetti': {
        for (let k = 0; k < (opts.low ? 120 : 360); k++) {
          const c = add(g, B(0.06, 0.005, 0.04), new THREE.MeshBasicMaterial({ color: ['#e84a3a', '#f0c020', '#30a0e0', '#e04aa0', '#40c060'][k % 5] }), (rnd() - 0.5) * w, 0.03, (rnd() - 0.5) * d, rnd() * 3);
          c.castShadow = false; c.receiveShadow = false;
        }
        break;
      }
      case 'counter': add(g, B(w, 1.05, d), wood, 0, 0.53); add(g, B(w + 0.1, 0.06, d + 0.12), std('#e8e0d0', 0.3), 0, 1.08); for (let k = -w / 2 + 1; k < w / 2; k += 2.5) { add(g, B(0.5, 0.35, 0.05), dark, k, 1.3, -0.15); add(g, B(0.46, 0.3, 0.01), std('#1a3a5a', 0.3, 0, { emissive: '#3a7ab8', emissiveIntensity: 0.5 }), k, 1.3, -0.12).castShadow = false; } break;
      case 'ticketmachine': add(g, B(w, 1.4, d), red, 0, 0.7); add(g, B(w * 0.6, 0.2, 0.02), white, 0, 1.15, d / 2 + 0.01); break;
      case 'screen': { const m = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), screenMat); m.position.set(0, 2.7, -0.1); m.rotation.y = Math.PI; g.add(m); keep.push(m); break; }
      case 'seatrow': {
        const n = Math.round(item.w / 0.6);
        add(g, B(item.w, 0.05, 0.12), metal, 0, 0.32, 0);
        for (let k = 0; k < n; k++) { const x = -item.w / 2 + 0.3 + k * 0.6; add(g, B(0.52, 0.05, 0.45), plastic, x, 0.45, 0.04); add(g, B(0.52, 0.45, 0.05), plastic, x, 0.7, 0.26); }
        for (const a of [-1, 1]) add(g, B(0.06, 0.45, 0.4), metal, a * (item.w / 2 - 0.1), 0.22, 0);
        g.rotation.y = face;
        break;
      }
      case 'plant': add(g, C(0.22, 0.18, 0.4, 10), std('#8a5a3a', 0.8), 0, 0.2); add(g, new THREE.SphereGeometry(0.38, 10, 8), std('#3a7a3a', 0.9), 0, 0.85); break;
      case 'noticeboard': { add(g, B(0.04, 1.2, 2.4), cardboard, 0, 1.6); for (let k = 0; k < 9; k++) add(g, B(0.01, 0.22, 0.18), paper, 0.03, 1.2 + (k % 3) * 0.32, -0.9 + Math.floor(k / 3) * 0.7).castShadow = false; break; }
      case 'desk': add(g, B(w, 0.05, d), wood, 0, 0.74); add(g, B(0.05, 0.72, d - 0.1), wood, -w / 2 + 0.05, 0.36, 0); add(g, B(0.05, 0.72, d - 0.1), wood, w / 2 - 0.05, 0.36, 0); add(g, B(0.4, 0.06, 0.3), paper, 0.2, 0.79, 0).castShadow = false; break;
      case 'chair': g.rotation.y = face; add(g, B(0.46, 0.06, 0.46), dark, 0, 0.45); add(g, B(0.46, 0.5, 0.06), dark, 0, 0.72, -0.2); for (const [a, b] of [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]]) add(g, B(0.04, 0.44, 0.04), metal, a, 0.22, b); break;
      case 'cabinet': add(g, B(w, 1.4, d), steel, 0, 0.7); for (let k = 0; k < 3; k++) add(g, B(0.02, 0.06, 0.3), dark, -w / 2 - 0.01, 0.3 + k * 0.45, 0); break;
      case 'coatstand': add(g, C(0.03, 0.03, 1.8, 6), wood, 0, 0.9); add(g, C(0.2, 0.2, 0.04, 10), wood, 0, 0.02); add(g, B(0.4, 0.6, 0.15), std('#6a2a2a', 0.9), 0.1, 1.4, 0); break;
      case 'phoneshelf': case 'umbrellashelf': case 'keyrack': case 'plantshelf': case 'foodshelf': case 'ledgershelf': {
        const h = item.type === 'ledgershelf' ? 2.2 : 2.0;
        const long = Math.max(w, d), alongZ = d > w;
        add(g, B(w, h, d), item.type === 'keyrack' ? wood : steel, 0, h / 2);
        // What is on the shelves: little boxes in many colours, one row per board.
        const colors = item.type === 'phoneshelf' ? ['#1a1a1a', '#3a3a3a', '#e8e8e8', '#3a6ac8'] : item.type === 'umbrellashelf' ? ['#121214', '#1a1a1e', '#222226'] : item.type === 'plantshelf' ? ['#3a7a3a', '#5a9a3a', '#2a6a4a'] : item.type === 'foodshelf' ? ['#3a6aa8', '#e8e0d0', '#c83a3a', '#f0a020'] : item.type === 'ledgershelf' ? ['#5a2a1a', '#2a3a5a', '#3a5a2a', '#6a1a1a'] : ['#c8a050', '#9a9a9a', '#c8c8c8'];
        for (let row = 0; row < 3; row++) for (let k = 0; k < Math.floor(long / 0.5); k++) {
          const at = -long / 2 + 0.25 + k * 0.5;
          const m = add(g, B(alongZ ? w + 0.04 : 0.32, 0.26, alongZ ? 0.32 : d + 0.04), std(colors[(k + row) % colors.length], 0.7), alongZ ? 0 : at, 0.4 + row * 0.6, alongZ ? at : 0);
          m.castShadow = false;
        }
        break;
      }
      case 'keywall': add(g, B(w, 2.6, d), wood, 0, 1.3); for (let k = 0; k < 60; k++) add(g, B(0.03, 0.08, 0.03), gold, w / 2 + 0.02, 0.6 + (k % 6) * 0.32, -d / 2 + 0.4 + Math.floor(k / 6) * 1.1 + (k % 2) * 0.3).castShadow = false; break;
      case 'table': add(g, B(w, 0.05, d), wood, 0, 0.74); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(g, B(0.05, 0.72, 0.05), metal, a * (w / 2 - 0.06), 0.36, b * (d / 2 - 0.06)); break;
      case 'umbrellabin': add(g, C(w / 2, w / 2, 0.6, 12), dark, 0, 0.3); for (let k = 0; k < 7; k++) { const u = add(g, C(0.02, 0.02, 1.0, 5), black, Math.sin(k) * 0.15, 0.8, Math.cos(k) * 0.15); u.rotation.z = Math.sin(k * 2) * 0.15; } break;
      case 'fridge': add(g, B(w, 2.2, d), white, 0, 1.1); add(g, B(0.02, 1.8, d - 0.4), steel, w / 2 + 0.01, 1.2, 0).castShadow = false; break;
      case 'bonsaitable': add(g, B(w, 0.05, d), wood, 0, 0.74); add(g, B(0.05, 0.72, 0.05), wood, 0, 0.36); add(g, C(0.2, 0.16, 0.12, 10), std('#6a3a2a', 0.7), 0, 0.83); add(g, C(0.03, 0.04, 0.22, 6), std('#5a3a2a', 0.9), 0, 0.98); add(g, new THREE.SphereGeometry(0.2, 8, 6), std('#3a7a3a', 0.9), 0.06, 1.12, 0).scale.y = 0.6; break;
      case 'canoe': { const hull = add(g, new THREE.SphereGeometry(1, 16, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), std('#c82a2a', 0.5, 0, { side: THREE.DoubleSide }), 0, 0.75, 0); hull.scale.set(w / 2, 0.55, d / 2); add(g, B(w * 0.9, 0.04, 0.12), wood, 0, 0.72, -1); add(g, B(w * 0.9, 0.04, 0.12), wood, 0, 0.72, 1); add(g, B(0.6, 0.6, 0.3), wood, 0, 0.3, -1.6); add(g, B(0.6, 0.6, 0.3), wood, 0, 0.3, 1.6); break; }
      case 'mannequin': add(g, C(0.2, 0.1, 0.05, 10), dark, 0, 0.02); add(g, C(0.02, 0.02, 0.5, 6), metal, 0, 0.27); add(g, C(0.18, 0.55, 1.0, 14), std('#fbfaf6', 0.8), 0, 1.0); add(g, C(0.15, 0.18, 0.4, 12), std('#fbfaf6', 0.8), 0, 1.65); break;
      case 'tubastand': { add(g, C(0.3, 0.35, 0.3, 12), dark, 0, 0.15); const t = add(g, new THREE.TorusGeometry(0.35, 0.12, 10, 20), gold, 0, 0.8, 0); t.rotation.y = Math.PI / 2; add(g, C(0.12, 0.45, 0.6, 16), gold, 0, 1.3, 0); break; }
      case 'teddy': add(g, new THREE.SphereGeometry(0.6, 12, 10), std('#b07a4a', 1), 0, 0.6); add(g, new THREE.SphereGeometry(0.4, 12, 10), std('#b07a4a', 1), 0, 1.3); for (const a of [-1, 1]) add(g, new THREE.SphereGeometry(0.14, 8, 6), std('#b07a4a', 1), a * 0.28, 1.62); break;
      case 'scooter': add(g, B(0.5, 0.4, 1.4), orange, 0, 0.45); add(g, C(0.22, 0.22, 0.1, 12), black, 0, 0.22, -0.7).rotation.z = Math.PI / 2; add(g, C(0.22, 0.22, 0.1, 12), black, 0, 0.22, 0.7).rotation.z = Math.PI / 2; add(g, C(0.03, 0.03, 0.8, 6), metal, 0, 0.9, 0.7); break;
      case 'crate': add(g, B(w, 1.0, d), cardboard, 0, 0.5); break;
      case 'drumkit': add(g, C(0.4, 0.4, 0.5, 16), red, 0, 0.3); add(g, C(0.22, 0.22, 0.25, 12), red, -0.45, 0.6, 0.2); add(g, C(0.3, 0.3, 0.02, 14), gold, 0.45, 0.9, 0); break;
      case 'bigclock': add(g, B(w, 2.0, d), wood, 0, 1.0); { const m = add(g, C(0.4, 0.4, 0.03, 20), white, 0, 1.6, d / 2 + 0.02); m.rotation.x = Math.PI / 2; } break;
      case 'wheelchair': add(g, B(0.5, 0.06, 0.45), dark, 0, 0.5); add(g, B(0.5, 0.5, 0.05), dark, 0, 0.75, -0.22); for (const a of [-1, 1]) add(g, new THREE.TorusGeometry(0.28, 0.03, 6, 18), metal, a * 0.3, 0.3, 0).rotation.y = Math.PI / 2; break;
      case 'bus': {
        add(g, B(w, 2.6, d), std('#d83a2a', 0.5), 0, 1.6); add(g, B(w - 0.6, 0.8, d + 0.02), std('#1a2430', 0.2, 0.2), 0, 2.2);
        for (const a of [-1, 1]) for (const b of [-1, 1]) add(g, C(0.45, 0.45, 0.3, 14), black, a * (w / 2 - 1.6), 0.45, b * (d / 2 - 0.05)).rotation.x = Math.PI / 2;
        const m = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.36), new THREE.MeshBasicMaterial({ map: sign('14 · PUERTO', '#101010', '#ffb020', 512, 128), toneMapped: false }));
        m.position.set(w / 2 + 0.01, 2.6, 0); m.rotation.y = Math.PI / 2; g.add(m); keep.push(m);
        break;
      }
      case 'taxi': add(g, B(w, 0.8, d), std('#f0c020', 0.4), 0, 0.6); add(g, B(w * 0.55, 0.6, d - 0.1), std('#f0c020', 0.4), -0.2, 1.3); add(g, B(w * 0.53, 0.45, d - 0.06), std('#1a2430', 0.2, 0.2), -0.2, 1.3); add(g, B(0.5, 0.15, 0.25), white, -0.2, 1.68); for (const a of [-1, 1]) for (const b of [-1, 1]) add(g, C(0.32, 0.32, 0.2, 12), black, a * (w / 2 - 0.8), 0.32, b * (d / 2 - 0.05)).rotation.x = Math.PI / 2; break;
      case 'cagecrate': { add(g, B(w, 0.6, d), wood, 0, 0.3); const cage = new THREE.Group(); cage.position.set(0, 0.6, 0); g.add(cage); for (let k = 0; k < 10; k++) add(cage, C(0.008, 0.008, 0.5, 4), gold, Math.sin(k * 0.63) * 0.2, 0.25, Math.cos(k * 0.63) * 0.2); add(cage, new THREE.SphereGeometry(0.21, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), gold, 0, 0.5); add(cage, new THREE.SphereGeometry(0.09, 8, 6), std('#2ac040', 0.7), 0, 0.22).scale.y = 1.4; anim.cage.push(cage); keep.push(cage); break; }
      case 'stairhut': add(g, B(w, 2.8, d), wallOut, 0, 1.4); add(g, B(w + 0.2, 0.15, d + 0.2), dark, 0, 2.87); break;
      case 'pallet': add(g, B(w, 0.15, d), cardboard, 0, 0.08); add(g, B(w * 0.8, 0.5, d * 0.8), cardboard, 0, 0.4); break;
      case 'tank': add(g, C(w / 2, w / 2, 2.6, 18), std('#4a6a8a', 0.5, 0.3), 0, 1.6); for (const a of [-1, 1]) for (const b of [-1, 1]) add(g, B(0.1, 0.4, 0.1), metal, a * w * 0.35, 0.2, b * w * 0.35); break;
      case 'acunit': add(g, B(w, 1.1, d), steel, 0, 0.55); add(g, C(0.4, 0.4, 0.04, 16), dark, 0, 1.12, 0); break;
      case 'lights': {
        // Bulbs strung across the roof terrace.
        for (let k = 0; k < 14; k++) { const b = add(g, new THREE.SphereGeometry(0.07, 6, 5), lampMat, -9 + k * (18 / 13), 2.6 - Math.sin((k / 13) * Math.PI) * 0.4, -3 + (k % 2) * 0.2); b.castShadow = false; }
        for (const x of [-9.6, 9.6]) add(g, C(0.04, 0.04, 2.7, 6), metal, x, 1.35, -3);
        break;
      }
      case 'lantern': { const l = add(g, C(0.22, 0.28, 0.5, 10), new THREE.MeshStandardMaterial({ color: '#f4d8a0', emissive: '#f0a040', emissiveIntensity: 0.4, roughness: 0.9, transparent: true, opacity: 0.9 }), 0, 0.25, 0); l.rotation.z = 0.5; l.position.y = 0.2; break; }
      default: add(g, B(w, 0.8, d), dark, 0, 0.4);
    }
  }
  // The stair doors: a door with a sign on each hut, facing west.
  for (const t of TELEPORTS as { id: string; label: string; x: number; z: number }[]) {
    add(statics, B(0.06, 2.1, 1.0), wood, t.x + 0.42, 1.05, t.z).castShadow = false;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.3), labelMat(t.label.toUpperCase()));
    m.position.set(t.x + 0.38, 2.4, t.z); m.rotation.y = -Math.PI / 2; world.add(m); keep.push(m);
    const glow = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.62, 32), new THREE.MeshBasicMaterial({ color: '#ffd060', transparent: true, opacity: 0.7, depthWrite: false, toneMapped: false }));
    glow.rotation.x = -Math.PI / 2; glow.position.set(t.x, 0.04, t.z); world.add(glow); keep.push(glow);
  }

  // ------------------------------------------------------------ the city around the roof
  // The roof floats far from the rest of the world: below it, a city of rooftops and lit windows, the port and the sea.
  const city = new THREE.Group(); city.position.set(0, 0, -140); scene.add(city);
  const cr = random(77);
  for (let k = 0; k < (opts.low ? 40 : 90); k++) {
    const a = cr() * Math.PI * 2, r = 22 + cr() * 70;
    const x = Math.sin(a) * r, z = Math.cos(a) * r;
    if (Math.abs(x) < 14 && Math.abs(z) < 14) continue;
    const h = 4 + cr() * 18, bw = 4 + cr() * 7;
    const b = new THREE.Mesh(B(bw, h, bw), std(['#c8b8a4', '#b8a898', '#d8ccb8', '#a89888'][k % 4], 0.9));
    b.position.set(x, -14 + h / 2, z); city.add(b);
    for (let i = 0; i < 4; i++) if (cr() > 0.4) { const wv = new THREE.Mesh(B(0.8, 0.9, 0.05), litWindow); wv.position.set(x + (cr() - 0.5) * bw * 0.7, -14 + h * (0.3 + cr() * 0.6), z + bw / 2 + 0.03); city.add(wv); }
  }
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(900, 500), std('#0e2030', 0.3, 0.3));
  sea.rotation.x = -Math.PI / 2; sea.position.set(0, -14.5, -260); scene.add(sea);
  // The roof's own building, under the terrace.
  add(statics, B(20.6, 14, 20.6), wallOut, 0, -7.05, -140);

  // ------------------------------------------------------------ lights
  const lamps: THREE.PointLight[] = [];
  const lampSpots: [number, number, number, string, number, number][] = [
    [0, 3.1, 11, '#fff4e8', 6, 14], [12.5, 3.0, 11, '#ffe8c8', 3, 8], [-12.5, 3.0, 11, '#f0f4ff', 3, 8], [0, 3.1, 4, '#fff4e8', 3, 14],
    [-9, 3.1, -6, '#fff0d8', 4, 12], [2, 3.0, -6, '#d8f0ff', 4, 10], [11, 3.0, -6, '#ffe0b0', 4, 10], [0, 5.0, -22, '#fff4e8', 6, 20],
    [-5, 4.0, 17.0, '#ffc880', 5, 12], [5, 4.0, 17.0, '#ffc880', 5, 12], [-10, 3.4, 28.8, '#40ff80', 3, 9], [0, 5, -38, '#ffd8a0', 5, 20], [0, 2.8, -137, '#ffd890', 4, 14],
  ];
  for (const [x, y, z, color, intensity, range] of lampSpots) {
    if (opts.low && intensity < 4) continue;
    const l = new THREE.PointLight(color, intensity, range, 1.6);
    l.position.set(x, y, z); l.userData.base = intensity; world.add(l); lamps.push(l);
  }

  if (real) fitSurfaces(world);
  batchStatic(statics, keep);

  // ------------------------------------------------------------ people
  const npcs: Npc[] = [];
  for (const s of SCENES as { id: string; npc: { x: number; z: number; heading: number; seat?: boolean; y?: number }; pose: string; mood: string; look: Look; extras?: { x: number; z: number; heading: number; pose: string; mood: string; look: Look; seat?: boolean }[] }[]) {
    const people = [{ ...s.npc, pose: s.pose, mood: s.mood, look: s.look, main: true }, ...(s.extras ?? []).map(e => ({ ...e, main: false }))];
    for (const p of people) {
      const anyP = p as typeof p & { seat?: boolean; y?: number };
      const person = makePerson(p.look, p.pose, { seat: anyP.seat, mood: p.mood });
      person.root.position.set(p.x, anyP.y ?? 0, p.z); person.root.rotation.y = p.heading;
      world.add(person.root);
      npcs.push({ person, scene: s.id, main: p.main, x: p.x, z: p.z, y: anyP.y ?? 0, heading: p.heading, baseMood: p.mood ?? 'neutral', seated: Boolean(anyP.seat) || p.pose === 'sit', body: p.look.body, seed: npcs.length * 31 + 7 });
    }
  }
  const crowd = (list: typeof CROWD, talk: boolean) => list.forEach((c, i) => {
    const any = c as typeof c & { seat?: boolean; y?: number; mood?: string };
    const look = talk ? CROWD_LOOKS[i] : NIGHT_OWLS[i % NIGHT_OWLS.length];
    const person = makePerson(look, c.pose, { seat: any.seat, mood: any.mood });
    person.root.position.set(c.x, any.y ?? 0, c.z); person.root.rotation.y = c.heading;
    world.add(person.root);
    npcs.push({ person, x: c.x, z: c.z, y: any.y ?? 0, heading: c.heading, baseMood: any.mood ?? 'neutral', seated: Boolean(any.seat), talk: talk ? String(i) : undefined, key: talk ? undefined : `noche-${i}`, body: look.body, seed: (talk ? 300 : 500) + i });
  });
  crowd(CROWD, true);
  crowd(FILLERS, false);
  const movers: Mover[] = [];
  WALKERS.forEach((walker, i) => {
    const person = makePerson(walker.look as Look, 'stand', {});
    if ((walker as Walker & { mop?: boolean }).mop) {
      const mop = new THREE.Group(); mop.position.set(0.3, 0, 0.35); person.root.add(mop);
      const stick = add(mop, C(0.015, 0.015, 1.4, 6), wood, 0, 0.75, 0); stick.rotation.x = 0.35;
      add(mop, B(0.3, 0.06, 0.12), std('#e0e0d8', 1), 0, 0.05, 0.25);
    }
    world.add(person.root);
    movers.push({ walker, person, offset: i * 13.7, x: walker.path[0][0], z: walker.path[0][1], body: (walker.look as Look).body, seed: 900 + i * 3, key: `paseo-${i}` });
  });

  const spots = (SCENES as { id: string; spot: { x: number; z: number } }[]).map(s => { const spot = buildSpot(s.id, s.spot.x, s.spot.z); world.add(spot.group); return spot; });

  // ------------------------------------------------------------ sky
  const stars = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: '#ffffff', size: 1.4, sizeAttenuation: false, transparent: true, opacity: 0.8, fog: false }));
  { const sr = random(5); const pos: number[] = []; for (let k = 0; k < 500; k++) { const a = sr() * Math.PI * 2, e = 0.15 + sr() * 1.3; pos.push(Math.cos(a) * Math.cos(e) * 400, Math.sin(e) * 400, Math.sin(a) * Math.cos(e) * 400 - 60); } stars.geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); }
  stars.frustumCulled = false; scene.add(stars);
  const sun = new THREE.Mesh(new THREE.CircleGeometry(16, 24), new THREE.MeshBasicMaterial({ color: '#ffb070', toneMapped: false, fog: false, transparent: true, opacity: 0 }));
  sun.position.set(120, -10, -420); sun.lookAt(0, 0, -140); scene.add(sun);

  // ------------------------------------------------------------ speech bubbles
  const bubbles: { sprite: THREE.Sprite; until: number; npc: Npc | Mover }[] = [];
  let nextBubble = 3, clockNow = 0;
  function say(who: Npc | Mover, text: string, seconds = 3.6, yell = false) {
    const old = bubbles.findIndex(b => b.npc === who);
    if (old >= 0) { const b = bubbles[old]; b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(old, 1); }
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTexture(text, yell), transparent: true, depthTest: true, toneMapped: false }));
    sprite.scale.set(2.2, 0.55, 1);
    world.add(sprite);
    bubbles.push({ sprite, until: clockNow + seconds, npc: who });
  }
  function setSceneMood(id: string | null, mood: string | null) {
    for (const npc of npcs) if (npc.scene) setMood(npc.person, id && mood && npc.scene === id && npc.main ? mood : npc.baseMood);
  }

  // ------------------------------------------------------------ the night
  let k = 0;
  const sky = new THREE.Color(), c1 = new THREE.Color(), c2 = new THREE.Color();
  function skyColor() {
    if (k <= 1) return sky.copy(c1.set('#141c2e')).lerp(c2.set('#0a0e1a'), k * 0.6).lerp(c2.set('#2a2440'), Math.max(0, k - 0.8) * 2);
    return sky.copy(c1.set('#2a2440')).lerp(c2.set('#f0b898'), Math.min(1, (k - 1) * 1.4));
  }
  function applyNight() {
    const s = skyColor();
    if (scene.background instanceof THREE.Color) scene.background.copy(s); else scene.background = s.clone();
    if (scene.fog) { const fog = scene.fog as THREE.Fog; fog.color.copy(s); fog.near = k > 1 ? 50 : 30; fog.far = k > 1 ? 320 : 200; }
    (stars.material as THREE.PointsMaterial).opacity = k > 1 ? Math.max(0, 0.8 - (k - 1) * 1.6) : 0.8;
    (sun.material as THREE.MeshBasicMaterial).opacity = k > 1 ? Math.min(1, (k - 1) * 2) : 0;
    sun.position.y = k > 1 ? -10 + (k - 1) * 40 : -10;
    litWindow.emissiveIntensity = k > 1 ? 0.25 : 0.9;
    for (const l of lamps) if (l.position.y > 3.5 && l.position.z > 16) l.intensity = (l.userData.base as number) * (k > 1 ? 0.2 : 1);
  }
  applyNight();
  function setNight(phase: number) { k = Math.max(0, Math.min(2, phase)); applyNight(); }

  function bodies(): Body[] {
    const out: Body[] = [];
    for (const n of npcs) out.push({ x: n.x, z: n.z, who: n });
    for (const m of movers) out.push({ x: m.x, z: m.z, who: m });
    return out;
  }

  const wp = new THREE.Vector3();
  const far = opts.low ? 26 : 40;
  let farTick = 0;
  function animate(t: number, dt: number, px: number, pz: number, camera: THREE.Camera) {
    clockNow = t;
    for (const spot of spots) {
      spot.gem.position.y = 2.3 + Math.sin(t * 2 + spot.group.position.x) * 0.12;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    // The pharmacy's green cross blinks; the paper lanterns and the parrot's cage sway in the breeze.
    const on = Math.sin(t * 3.1) > -0.6;
    for (const n of anim.neon) n.visible = on;
    for (const l of anim.lanterns) l.rotation.z = Math.sin(t * 1.3 + l.position.x) * 0.12;
    for (const c of anim.cage) c.rotation.y = Math.sin(t * 0.7) * 0.2;
    // The city around the roof is only drawn when you are up there (or the camera is).
    city.visible = pz < -100 || camera.position.z < -100;
    sea.visible = city.visible;
    // People who walk.
    for (const m of movers) {
      const at = walkerAt(m.walker, t + m.offset);
      m.x = at.x; m.z = at.z; m.moving = at.moving; m.heading = at.heading;
      m.person.root.position.set(at.x, 0, at.z);
      m.person.root.rotation.y = at.heading;
      animatePerson(m.person, dt, at.moving ? m.walker.speed : 0, false);
    }
    farTick++;
    for (const npc of npcs) {
      const d = Math.max(Math.abs(npc.x - px), Math.abs(npc.z - pz));
      npc.person.root.visible = d < far;
      // Far people still get a pose now and then: a real body loaded late must not keep its bind pose.
      const kids = npc.person.root.children.length; // grows when the real body arrives
      if (d > 24 && kids === npc.kids && (farTick + npc.seed) % 30 !== 0) continue;
      npc.kids = kids;
      animatePerson(npc.person, d > 24 ? 0 : dt, 0, talking.has(npc.person));
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.npc.person.root.getWorldPosition(wp); world.worldToLocal(wp); b.sprite.position.set(wp.x, wp.y + 2.25, wp.z);
      if (t > b.until) { b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(i, 1); }
    }
    if (t > nextBubble) {
      nextBubble = t + 2.5 + Math.random() * 3;
      const pool = [...npcs.filter(n => !n.main), ...movers].filter(n => { const d = Math.hypot(n.x - px, n.z - pz); return d > 1.5 && d < 11; });
      if (pool.length && bubbles.length < 2) {
        const npc = pool[Math.floor(Math.random() * pool.length)];
        if (!bubbles.some(b => b.npc === npc)) say(npc, CHATTER[Math.floor(Math.random() * CHATTER.length)]);
      }
    }
  }

  return { npcs, movers, spots, animate, setSceneMood, setNight, bodies, say };
}
