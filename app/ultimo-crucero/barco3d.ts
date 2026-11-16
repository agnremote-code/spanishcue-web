// Último crucero · the Albatros in three.js: hull, decks, rooms, furniture,
// people, the white circles, the sea, the rain and the lightning. Everything
// is drawn from layout.mjs, so what you see is what you bump into. In
// realistic mode floors, walls, ceilings and wood are photographic surfaces
// (app/mundo-real) and the people get real bodies (enableRealPeople, called
// by World3D before this runs).
import * as THREE from 'three';
import { batchStatic, canvas, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { fitSurfaces, surface } from '../mundo-real/real3d';
import {
  BRIDGE, CABINS, CHATTER, CROWD, DOORS, ENGINE, FILLERS, FURNITURE, HULL, ROUND, SALON, SCENES, STAGE, SUPER, WALKERS, WALLS,
  ceilingAt, footprint, halfBeam, roofed, roundSeat, walkerAt, type Walker,
} from './layout.mjs';

export type Npc = { person: Person; scene?: string; main?: boolean; x: number; z: number; y: number; heading: number; baseMood: string; seated?: boolean; talk?: string; key?: string; body?: string; seed: number; angryUntil?: number; kids?: number };
export type Mover = { walker: Walker; person: Person; offset: number; x: number; z: number; moving?: boolean; body?: string; seed: number; key: string; angryUntil?: number; heading?: number };
export type Spot = { id: string; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Body = { x: number; z: number; radius?: number; who: Npc | Mover };
export type Barco = {
  npcs: Npc[];
  movers: Mover[];
  spots: Spot[];
  animate: (t: number, dt: number, px: number, pz: number, camera: THREE.Camera) => void;
  setSceneMood: (id: string | null, mood: string | null) => void;
  /** The storm follows the lesson: 0 at eight in the evening, 1 the worst of it, 2 the calm at dawn. */
  setStorm: (phase: number) => void;
  bodies: () => Body[];
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
  /** Called with the strength of every lightning flash (the lesson plays the thunder). */
  onFlash: (fn: (k: number) => void) => void;
};

// People currently speaking in an open scene.
export const talking = new WeakSet<Person>();

const SEAT_TOP = 0.45;
const std = (color: string, roughness = 0.8, metalness = 0, extra: THREE.MeshStandardMaterialParameters = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
const B = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
const C = (rt: number, rb: number, h: number, s = 14) => new THREE.CylinderGeometry(rt, rb, h, s);
function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}
function sign(text: string, bg = '#16243a', fg = '#f4e8c8', w = 512, h = 128) {
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = fg; ctx.lineWidth = 6; ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.fillStyle = fg; ctx.font = `700 ${Math.round(h * 0.46)}px Georgia, serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
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
  ({ skin, age, body, hairStyle, hairColor, top, topColor, ...(bottom ? { bottom, bottomColor: bottomColor ?? undefined } : {}), extras, seed });
// The seventeen who talk, in the order of CROWD and invitados.mjs.
const CROWD_LOOKS: Look[] = [
  Lk('#f0d6c0', 'elderly', 'f', 'curly', '#e0d8e8', 'sweater', '#6a3a6a', 'pants', '#2a2a30', ['glasses', 'earrings'], 301),
  Lk('#c48f69', 'young', 'm', 'short', '#120d0b', 'uniform', '#f4f4f0', 'pants', '#141a2a', [], 302),
  Lk('#e8c0a0', 'old', 'm', 'bald', '#9a9a9a', 'coat', '#3a4a3a', 'pants', '#2a2a2a', ['glasses'], 303),
  Lk('#e2b896', 'adult', 'f', 'bob', '#1a1210', 'suit', '#5a1a6a', 'pants', '#141418', ['earrings', 'hat'], 304),
  Lk('#c99468', 'old', 'm', 'short', '#d8d8d8', 'suit', '#3a3a42', 'pants', '#3a3a42', ['mustache'], 305),
  Lk('#b9825c', 'elderly', 'f', 'long', '#2a2a2a', 'sweater', '#8a2a5a', 'pants', '#1a1a2a', ['earrings', 'scarf'], 306),
  Lk('#a8724e', 'adult', 'm', 'short', '#120d0b', 'suit', '#f4f0ea', 'pants', '#141418', [], 307),
  Lk('#e8c0a0', 'adult', 'f', 'ponytail', '#6a2a18', 'jacket', '#2a3a2a', 'jeans', '#24304a', ['glasses'], 308),
  Lk('#c48f69', 'teen', 'm', 'curly', '#2a1a12', 'hoodie', '#3a6ac8', 'jeans', '#24304a', ['headphones'], 309),
  Lk('#f0d6c0', 'elderly', 'f', 'bun', '#f0f0f0', 'sweater', '#c81e2a', 'pants', '#1a1a1a', ['earrings'], 310),
  Lk('#e2b896', 'adult', 'm', 'short', '#3a2416', 'jacket', '#f07020', 'pants', '#2a2a30', ['glasses'], 311),
  Lk('#8d5a3c', 'adult', 'f', 'braids', '#120d0b', 'uniform', '#c8d8e0', 'pants', '#2a2a30', [], 312),
  Lk('#c99468', 'adult', 'm', 'buzz', '#120d0b', 'uniform', '#1a1a1a', 'pants', '#1a1a1a', [], 313),
  Lk('#dcae88', 'adult', 'f', 'long', '#3a2416', 'sweater', '#2a8a7a', 'pants', '#2a2a30', ['earrings'], 314),
  Lk('#e8c0a0', 'elderly', 'm', 'cap', '#e8e8e8', 'coat', '#1a2a44', 'pants', '#2a2a2a', ['beard'], 315),
  Lk('#c48f69', 'adult', 'f', 'bun', '#120d0b', 'dress', '#c81e2a', null, null, ['earrings'], 316),
  Lk('#b9825c', 'adult', 'm', 'short', '#5a4a3a', 'coat', '#5a4a3a', 'pants', '#2a2a2a', ['scarf'], 317),
];
const PASSENGERS: Look[] = [
  Lk('#e8c0a0', 'old', 'f', 'curly', '#d8d0e0', 'sweater', '#3a6aa8', 'pants', '#2a2a30', ['glasses'], 501),
  Lk('#c48f69', 'adult', 'm', 'short', '#1a1210', 'suit', '#2a3a5a', 'pants', '#2a3a5a', [], 502),
  Lk('#8d5a3c', 'adult', 'f', 'long', '#120d0b', 'sweater', '#d43a6a', 'pants', '#1a1a2a', ['earrings'], 503),
  Lk('#f0d0b4', 'old', 'm', 'bald', '#999999', 'suit', '#5a4a3a', 'pants', '#3a3028', ['glasses', 'mustache'], 504),
  Lk('#b9825c', 'young', 'm', 'curly', '#2a1a12', 'shirt', '#f4f0ea', 'pants', '#141418', [], 505),
  Lk('#dcae88', 'adult', 'f', 'bun', '#6a2a18', 'jacket', '#2a8a6a', 'pants', '#2a2a2a', ['earrings'], 506),
  Lk('#e2b896', 'elderly', 'm', 'short', '#e8e8e8', 'coat', '#3a3a30', 'pants', '#2a2a2a', ['hat'], 507),
  Lk('#f0d6c0', 'young', 'f', 'bob', '#e0c070', 'sweater', '#e0a020', 'pants', '#2a2a30', ['earrings'], 508),
];
const CREW = (seed: number, f = false): Look => Lk(f ? '#c99468' : '#a8724e', 'adult', f ? 'f' : 'm', f ? 'ponytail' : 'short', '#120d0b', 'uniform', '#f4f4f0', 'pants', '#141a2a', [], seed);
const FILLER_CREW: Record<number, Look> = { 15: { ...CREW(615), top: 'apron', topColor: '#f4f0ea' }, 16: { ...CREW(616), topColor: '#3a5a8a', bottomColor: '#3a5a8a' }, 18: CREW(618), 19: CREW(619, true), 20: CREW(620) };

// ---------------------------------------------------------------- spots
function buildSpot(id: string, x: number, z: number): Spot {
  const group = new THREE.Group();
  group.position.set(x, 0.03, z);
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

// ---------------------------------------------------------------- hull and decks
// The outline of the deck, clockwise from the stern on the starboard side.
function outline() {
  const pts: [number, number][] = [[HULL.x1, HULL.z1], [HULL.x1, HULL.z0]];
  for (let z = HULL.z0 - 1; z > HULL.bow; z -= 1) pts.push([halfBeam(z), z]);
  pts.push([0, HULL.bow]);
  for (let z = HULL.bow + 1; z < HULL.z0; z += 1) pts.push([-halfBeam(z), z]);
  pts.push([HULL.x0, HULL.z0], [HULL.x0, HULL.z1]);
  return pts;
}
// A vertical band along a closed outline, from y0 to y1.
function band(pts: [number, number][], y0: number, y1: number, material: THREE.Material, out = 0) {
  const pos: number[] = [];
  for (let i = 0; i < pts.length; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[(i + 1) % pts.length];
    const ox = Math.sign(ax) * out, oz = (az > 0 ? 1 : -1) * out * 0.2;
    const a = [ax + ox, az + oz], b = [bx + Math.sign(bx) * out, bz + (bz > 0 ? 1 : -1) * out * 0.2];
    pos.push(a[0], y0, a[1], b[0], y0, b[1], b[0], y1, b[1], a[0], y0, a[1], b[0], y1, b[1], a[0], y1, a[1]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, material);
  m.receiveShadow = true;
  return m;
}
function deckShape(pts: [number, number][]) {
  const shape = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)));
  const g = new THREE.ShapeGeometry(shape, 4);
  g.rotateX(-Math.PI / 2);
  return g;
}

// ---------------------------------------------------------------- the ship
export function buildBarco(scene: THREE.Scene, opts: { low: boolean; shadows: boolean; real: boolean }): Barco {
  const real = opts.real;
  const world = new THREE.Group();
  world.name = 'albatros';
  scene.add(world);
  const statics = new THREE.Group();
  world.add(statics);
  const keep: THREE.Object3D[] = [];

  // Materials: photographic in realistic mode, plain colours on phones.
  const teak = real ? surface('wood_table_001', '#b08a62') : std('#a27a50', 0.75);
  const parquet = real ? surface('laminate_floor_02', '#c8a880') : std('#b89870', 0.7);
  const carpetRed = real ? surface('dirty_carpet', '#9a3038') : std('#7a2a30', 0.95);
  const carpetBlue = real ? surface('dirty_carpet', '#3a5a7a') : std('#2a4a6a', 0.95);
  const wallIn = real ? surface('plastered_wall_04', '#f2eadc') : std('#efe6d6', 0.9);
  const wallOut = real ? surface('plastered_wall_04', '#f6f6f2') : std('#f2f2ee', 0.85);
  const ceilingMat = real ? surface('ceiling_interior', '#f4f0e8') : std('#f0ece2', 0.95);
  const wood = real ? surface('wood_table_001', '#8a5a3a') : std('#7a4a2a', 0.6);
  const two = { side: THREE.DoubleSide };
  const hullMat = std('#16233c', 0.6, 0.2, two), bandMat = std('#f2f2ee', 0.6, 0, two), redMat = std('#8a1a1a', 0.7, 0, two);
  const metal = std('#8a9098', 0.4, 0.7), dark = std('#2a2c30', 0.7), brass = std('#c8a050', 0.3, 0.85), white = std('#f4f4f0', 0.6), orange = std('#e86a20', 0.6);
  const engineGreen = std('#3a5a4a', 0.5, 0.4), plate = std('#5a5e62', 0.55, 0.6);
  const glass = new THREE.MeshStandardMaterial({ color: '#9ab8c8', roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.28, emissive: '#ffcf8a', emissiveIntensity: 0.18, depthWrite: false });
  const cloth = std('#f4f0ea', 0.95), red = std('#a01a2a', 0.85), black = std('#141418', 0.35, 0.2), gold = std('#d8b060', 0.3, 0.8);
  const screen = new THREE.MeshStandardMaterial({ color: '#0a1a10', emissive: '#40e080', emissiveIntensity: 0.9, roughness: 0.4 });
  const lampMat = new THREE.MeshStandardMaterial({ color: '#fff4d8', emissive: '#ffd890', emissiveIntensity: 1.6, roughness: 0.4 });

  // ------------------------------------------------------------ hull, deck, rail
  const pts = outline();
  const deck = new THREE.Mesh(deckShape(pts), teak);
  deck.receiveShadow = true;
  statics.add(deck);
  statics.add(band(pts, -7.5, -1.6, hullMat), band(pts, -1.6, -0.02, bandMat));
  statics.add(band(pts, -8.4, -7.5, redMat));
  // The rail: white posts and a wooden handrail along the whole edge.
  for (let i = 0; i < pts.length; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[(i + 1) % pts.length];
    const len = Math.hypot(bx - ax, bz - az);
    if (len < 1e-3) continue;
    const ang = Math.atan2(bx - ax, bz - az);
    const n = Math.max(1, Math.round(len / 1.6));
    for (let k = 0; k < n; k++) add(statics, B(0.06, 1.1, 0.06), white, ax + (bx - ax) * k / n, 0.55, az + (bz - az) * k / n);
    const rail = add(statics, B(0.09, 0.07, len + 0.04), wood, (ax + bx) / 2, 1.1, (az + bz) / 2, ang);
    rail.castShadow = false;
    add(statics, B(0.04, 0.04, len), white, (ax + bx) / 2, 0.58, (az + bz) / 2, ang).castShadow = false;
  }

  // ------------------------------------------------------------ floors and ceilings
  const floor = (x0: number, z0: number, x1: number, z1: number, mat: THREE.Material, y = 0.012) => { const m = add(statics, B(x1 - x0, 0.02, z1 - z0), mat, (x0 + x1) / 2, y, (z0 + z1) / 2); m.castShadow = false; return m; };
  floor(SALON.x0, SALON.z0, SALON.x1, SALON.z1, carpetRed);
  floor(-2.4, 22, 2.4, 32, parquet, 0.03);
  floor(-1.6, -20, 1.6, 14, carpetBlue);
  for (const c of CABINS) floor(c.x0, c.z0, c.x1, c.z1, carpetBlue);
  floor(-7, 2, -1.6, 14, std('#d8d4c8', 0.5)); floor(1.6, 2, 7, 14, std('#e8eaea', 0.5));
  floor(ENGINE.x0, ENGINE.z0, ENGINE.x1, ENGINE.z1, plate);
  floor(-7, -40, 7, -34, parquet); floor(BRIDGE.x0, BRIDGE.z0, BRIDGE.x1, BRIDGE.z1, parquet);
  const roofs: [number, number, number, number, number][] = [
    [BRIDGE.x0, BRIDGE.z0, BRIDGE.x1, BRIDGE.z1, 3.2], [-7, -40, 7, -34, 3.1], [ENGINE.x0, ENGINE.z0, ENGINE.x1, ENGINE.z1, 4.6],
    [-7, -20, 7, 14, 3.1], [SALON.x0, SALON.z0, SALON.x1, SALON.z1, 4.2],
  ];
  for (const [x0, z0, x1, z1, h] of roofs) {
    const c = add(statics, B(x1 - x0 + 0.3, 0.02, z1 - z0 + 0.3), ceilingMat, (x0 + x1) / 2, h, (z0 + z1) / 2); c.castShadow = false;
    add(statics, B(x1 - x0 + 0.5, 0.18, z1 - z0 + 0.5), white, (x0 + x1) / 2, h + 0.11, (z0 + z1) / 2);
  }
  // The upper decks and the funnel, seen from outside: the liner's silhouette.
  add(statics, B(11, 2.8, 50), wallOut, 0, 3.1 + 1.6, -6);
  for (let z = -30; z <= 18; z += 2.2) for (const x of [-5.52, 5.52]) add(statics, B(0.02, 0.7, 1.2), glass, x, 4.9, z).castShadow = false;
  add(statics, B(14, 2.4, 10), wallOut, 0, 4.2 + 1.3, 26);
  const funnel = add(statics, C(2.2, 2.6, 6, 20), std('#c81e1e', 0.5), 0, 9.6, 26); funnel.scale.z = 1.5;
  const top = add(statics, C(2.25, 2.25, 1.0, 20), black, 0, 13.1, 26); top.scale.z = 1.5;
  add(statics, B(0.2, 4, 0.2), metal, 0, 5.2, -44); add(statics, B(2.4, 0.12, 0.3), metal, 0, 6.6, -44);

  // ------------------------------------------------------------ walls
  const heightAt = (x: number, z: number) => {
    let h = 0;
    for (const [dx, dz] of [[0.3, 0], [-0.3, 0], [0, 0.3], [0, -0.3]]) { const c = ceilingAt(x + dx, z + dz); if (c < 8) h = Math.max(h, c); }
    return h || 3.1;
  };
  for (const seg of WALLS as [number, number, number, number, string][]) {
    const [x0, z0, x1, z1, kind] = seg;
    if (kind === 'rail') continue;
    const len = Math.hypot(x1 - x0, z1 - z0), mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
    const ang = x0 === x1 ? 0 : Math.PI / 2;
    const h = heightAt(mx, mz);
    const outer = Math.abs(mx) >= 6.9 || mz >= 37.9 || mz <= -47.9;
    const mat = outer ? wallOut : wallIn;
    const piece = (y0: number, y1: number, m: THREE.Material) => add(statics, B(0.25, y1 - y0, len), m, mx, (y0 + y1) / 2, mz, ang);
    if (kind === 'glass') {
      piece(0, 0.95, mat); piece(2.15, h, mat);
      const pane = piece(0.95, 2.15, glass); pane.castShadow = false; pane.scale.x = 0.2;
      const n = Math.max(1, Math.round(len / 1.8));
      for (let k = 0; k <= n; k++) { const t = k / n; add(statics, B(0.27, 1.2, 0.12), mat, x0 + (x1 - x0) * t, 1.55, z0 + (z1 - z0) * t, ang); }
    } else piece(0, h, mat);
    if (kind === 'door') {
      const side = mx > 0 ? -1 : 1;
      add(statics, B(0.04, 2.05, 0.9), wood, mx + side * 0.14, 1.03, mz, 0).castShadow = false;
      add(statics, B(0.05, 0.05, 0.05), brass, mx + side * 0.17, 1.0, mz + 0.32);
    }
  }
  // Labels over the doors, and the cabin numbers on the closed ones.
  const labelMat = (text: string) => new THREE.MeshBasicMaterial({ map: sign(text), toneMapped: false });
  for (const d of DOORS) {
    const along = d.x !== 0;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.25), labelMat(d.label));
    if (along) { m.position.set(d.x + (d.x > 0 ? -0.14 : 0.14), 2.35, d.z); m.rotation.y = d.x > 0 ? -Math.PI / 2 : Math.PI / 2; }
    else { m.position.set(d.x, 2.35, d.z + 0.14); }
    world.add(m); keep.push(m);
  }
  for (const c of CABINS) {
    const xc = c.side > 0 ? c.x0 - 0.14 : c.x1 + 0.14;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.18), labelMat(String(c.n)));
    m.position.set(xc, 2.2, (c.z0 + c.z1) / 2 + 0.7); m.rotation.y = c.side > 0 ? -Math.PI / 2 : Math.PI / 2;
    world.add(m); keep.push(m);
  }
  const name = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 0.9), new THREE.MeshBasicMaterial({ map: sign('ALBATROS · 1971', '#16243a', '#e8d8a8', 1024, 220), toneMapped: false }));
  name.position.set(0, 3.5, 38.15); world.add(name); keep.push(name);

  // ------------------------------------------------------------ furniture
  const anim = { flags: [] as THREE.Mesh[], sway: [] as THREE.Object3D[], gauges: [] as THREE.Mesh[] };
  for (const item of FURNITURE as { type: string; x: number; z: number; w: number; d: number; rot?: number }[]) {
    const f = footprint(item), w = f.x1 - f.x0, d = f.z1 - f.z0, x = item.x, z = item.z;
    const g = new THREE.Group(); g.position.set(x, 0, z); statics.add(g);
    const face = ((item.rot ?? 0) * Math.PI) / 2;
    switch (item.type) {
      case 'mast': add(g, C(0.16, 0.2, 9, 10), white, 0, 4.5); { const bell = add(g, C(0.12, 0.26, 0.36, 16), gold, 0, 2.4, 0.24); anim.sway.push(bell); add(g, B(0.05, 0.05, 0.3), metal, 0, 2.62, 0.12); } break;
      case 'winch': add(g, B(w, 0.5, d), dark, 0, 0.25); add(g, C(0.35, 0.35, w * 0.9, 16), metal, 0, 0.72).rotation.z = Math.PI / 2; break;
      case 'chain': for (let k = -2.8; k < 2.8; k += 0.18) add(g, B(0.08, 0.04, 0.14), dark, 0, 0.03, k).castShadow = false; break;
      case 'console': add(g, B(w, 1.0, d), dark, 0, 0.5); for (let k = -4; k <= 4; k += 1.6) add(g, B(0.9, 0.5, 0.04), screen, k, 1.25, -0.2); break;
      case 'wheel': add(g, C(0.12, 0.16, 1.0, 10), wood, 0, 0.5); { const t = add(g, new THREE.TorusGeometry(0.42, 0.04, 8, 24), wood, 0, 1.25, 0); t.rotation.x = 0.15; } break;
      case 'chartable': add(g, B(w, 0.08, d), wood, 0, 0.92); add(g, B(w - 0.2, 0.86, d - 0.2), wood, 0, 0.45); add(g, B(w - 0.3, 0.01, d - 0.3), std('#e8dfc4', 0.9), 0, 0.97); break;
      case 'captainchair': add(g, C(0.3, 0.3, 0.12, 12), dark, 0, 0.5); add(g, B(0.55, 0.6, 0.1), dark, 0, 0.85, 0.25); add(g, C(0.05, 0.05, 0.45, 8), metal, 0, 0.22); break;
      case 'radiodesk': add(g, B(w, 0.9, d), wood, 0, 0.45); for (let k = -1.2; k <= 1.2; k += 0.8) { add(g, B(0.4, 0.4, 0.6), dark, -0.05, 1.1, k); add(g, B(0.02, 0.18, 0.4), screen, 0.16, 1.14, k); } break;
      case 'chair': add(g, B(0.46, 0.06, 0.46), wood, 0, 0.45); add(g, B(0.46, 0.5, 0.06), wood, 0, 0.72, -0.2).rotation.y = 0; g.rotation.y = face; for (const [a, b] of [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]]) add(g, B(0.04, 0.44, 0.04), wood, a, 0.22, b); break;
      case 'engine': add(g, B(w, 2.4, d), engineGreen, 0, 1.2); for (let k = -d / 2 + 0.8; k < d / 2; k += 1.3) { add(g, C(0.32, 0.32, 0.8, 12), metal, 0, 2.8, k); const gauge = add(g, C(0.12, 0.12, 0.03, 12), std('#f0f0e8', 0.3, 0, { emissive: '#ffe8a0', emissiveIntensity: 0.4 }), (x < 0 ? 1 : -1) * (w / 2 + 0.02), 1.6, k); gauge.rotation.z = Math.PI / 2; } add(g, C(0.14, 0.14, d + 4, 10), metal, 0, 3.6, 0).rotation.x = Math.PI / 2; break;
      case 'toolbench': add(g, B(w, 0.95, d), dark, 0, 0.47); add(g, B(0.05, 1.2, d), plate, w / 2 - 0.05, 1.6, 0); break;
      case 'telegraph': add(g, C(0.1, 0.16, 1.0, 12), brass, 0, 0.5); add(g, C(0.22, 0.22, 0.12, 16), brass, 0, 1.08).rotation.x = Math.PI / 2; break;
      case 'bed': add(g, B(w, 0.35, d), wood, 0, 0.18); add(g, B(w - 0.08, 0.18, d - 0.08), cloth, 0, 0.45); add(g, B(w * 0.6, 0.06, d - 0.04), std('#3a5a8a', 0.95), w * 0.12, 0.56); add(g, B(0.4, 0.12, d * 0.7), cloth, (x > 0 ? 1 : -1) * (w / 2 - 0.28), 0.6, 0); break;
      case 'wardrobe': add(g, B(w, 2.0, d), wood, 0, 1.0); break;
      case 'lettertable': add(g, B(w, 0.05, d), wood, 0, 0.7); add(g, B(0.05, 0.68, 0.05), wood, 0, 0.34); for (let k = 0; k < 9; k++) add(g, B(0.16, 0.012, 0.11), std('#f4ecd8', 0.9), -0.3 + (k % 4) * 0.19, 0.735 + Math.floor(k / 4) * 0.012, -0.12 + (k % 3) * 0.12, k * 0.3).castShadow = false; break;
      case 'trolley': add(g, B(w, 0.9, d), metal, 0, 0.5); for (let k = 0; k < 3; k++) add(g, B(w - 0.06, 0.12, d - 0.1), cloth, 0, 0.55 + k * 0.14); break;
      case 'stove': add(g, B(w, 0.9, d), metal, 0, 0.45); for (let k = -d / 2 + 0.8; k < d / 2; k += 1.4) { add(g, C(0.18, 0.18, 0.02, 14), dark, 0, 0.91, k); add(g, C(0.16, 0.14, 0.22, 14), metal, 0.05, 1.02, k + 0.4); } add(g, B(0.6, 0.8, d), metal, -0.05, 2.4, 0); break;
      case 'island': add(g, B(w, 0.9, d), metal, 0, 0.45); add(g, B(0.5, 0.04, 0.3), wood, 0.1, 0.92, 0.6); add(g, C(0.2, 0.16, 0.3, 12), metal, -0.2, 1.05, -1.2); break;
      case 'cabinet': add(g, B(w, 2.0, d), white, 0, 1.0); { const m = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), new THREE.MeshBasicMaterial({ map: sign('+', '#ffffff', '#c81e2a', 128, 128) })); m.position.set(-w / 2 - 0.01, 1.5, 0); m.rotation.y = -Math.PI / 2; g.add(m); } break;
      case 'stretcher': add(g, B(w, 0.08, d), cloth, 0, 0.66); add(g, B(w, 0.04, d), metal, 0, 0.6); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(g, B(0.04, 0.6, 0.04), metal, a * (w / 2 - 0.1), 0.3, b * (d / 2 - 0.1)); break;
      case 'desk': add(g, B(w, 0.05, d), wood, 0, 0.74); add(g, B(0.05, 0.72, d - 0.1), wood, -w / 2 + 0.05, 0.36, 0); add(g, B(0.05, 0.72, d - 0.1), wood, w / 2 - 0.05, 0.36, 0); break;
      case 'bar': add(g, B(w, 1.05, d), wood, 0, 0.53); add(g, B(w + 0.1, 0.06, d + 0.1), std('#2a1a12', 0.25, 0.1), 0, 1.08); break;
      case 'backbar': add(g, B(w, 2.4, d), wood, 0, 1.2); for (let k = -d / 2 + 0.3; k < d / 2; k += 0.22) add(g, C(0.04, 0.045, 0.3, 8), new THREE.MeshStandardMaterial({ color: ['#2a6a3a', '#8a4a1a', '#c8c0a0', '#6a1a2a'][Math.round(k * 7 + 40) % 4], roughness: 0.15, metalness: 0.2 }), 0.15, 1.6 + (Math.round(k * 5) % 2) * 0.45, k).castShadow = false; break;
      case 'stool': add(g, C(0.18, 0.18, 0.06, 12), red, 0, 0.75); add(g, C(0.03, 0.03, 0.72, 6), metal, 0, 0.36); break;
      case 'stage': add(g, B(w, STAGE.top, d), wood, 0, STAGE.top / 2); add(g, B(w + 0.4, 3.6, 0.15), red, 0, 2.3, -d / 2 + 0.05).castShadow = false; break;
      case 'piano': add(g, B(w, 0.9, d), black, 0, STAGE.top + 0.45); add(g, B(w, 0.04, 0.3), white, 0, STAGE.top + 0.78, d / 2 - 0.05); { const lid = add(g, B(w, 0.03, d * 0.9), black, 0, STAGE.top + 1.2, -0.1); lid.rotation.x = -0.5; } break;
      case 'pianobench': add(g, B(w, 0.08, d), black, 0, STAGE.top + 0.45); add(g, B(w - 0.1, 0.4, 0.05), black, 0, STAGE.top + 0.22, 0); break;
      case 'dancefloor': break;
      case 'bingo': add(g, B(w, 0.85, d), red, 0, 0.42); { const drum = add(g, new THREE.SphereGeometry(0.22, 12, 10), std('#e8e0c0', 0.2, 0.3, { transparent: true, opacity: 0.6 }), 0, 1.1, 0); anim.sway.push(drum); } break;
      case 'roundtable': {
        // A short cloth on a pedestal: the knees of the people seated around it stay clear of it.
        add(g, C(0.62, 0.62, 0.05, 20), cloth, 0, 0.76); add(g, C(0.48, 0.5, 0.1, 20), cloth, 0, 0.69);
        add(g, C(0.06, 0.07, 0.62, 10), gold, 0, 0.31); add(g, C(0.28, 0.3, 0.04, 16), gold, 0, 0.02);
        add(g, C(0.04, 0.04, 0.2, 8), std('#e8e0d0', 0.1, 0, { emissive: '#ffd890', emissiveIntensity: 0.7 }), 0, 0.88);
        for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3, cx = Math.sin(a) * 1.2, cz = Math.cos(a) * 1.2; const ch = new THREE.Group(); ch.position.set(cx, 0, cz); ch.rotation.y = a + Math.PI; g.add(ch); add(ch, B(0.44, 0.06, 0.44), red, 0, 0.45); add(ch, B(0.44, 0.5, 0.06), red, 0, 0.72, -0.2); for (const [a2, b2] of [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]) add(ch, B(0.03, 0.44, 0.03), gold, a2, 0.22, b2); }
        break;
      }
      case 'map': { const m = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.3), new THREE.MeshStandardMaterial({ map: routeMap(), roughness: 0.8 })); m.position.set(0, 1.9, 0.05); m.rotation.y = Math.PI; g.add(m); keep.push(m); break; }
      case 'lifeboat': {
        const side = x > 0 ? 1 : -1;
        const hull = add(g, new THREE.SphereGeometry(1, 16, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), orange, 0, 1.6, 0); hull.scale.set(w / 2, 0.8, d / 2); hull.rotation.x = Math.PI;
        hull.position.y = 1.0;
        add(g, B(w * 0.9, 0.4, d * 0.86), white, 0, 1.25);
        for (const k of [-d / 2 + 0.6, d / 2 - 0.6]) { add(g, B(0.14, 2.6, 0.14), white, side * 0.7, 1.3, k); add(g, B(1.0, 0.12, 0.14), white, side * 0.25, 2.55, k); }
        break;
      }
      case 'crate': add(g, B(w, 0.45, d), wood, 0, 0.22); break;
      case 'deckchair': { add(g, B(w, 0.06, d), std('#e8e0c8', 0.9), 0, 0.4); const back = add(g, B(w, 0.06, 0.7), std('#e8e0c8', 0.9), 0, 0.62, d / 2 - 0.2); back.rotation.x = 0.9; for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(g, B(0.04, 0.4, 0.04), wood, a * (w / 2 - 0.04), 0.2, b * (d / 2 - 0.1)); break; }
      case 'bench': add(g, B(w, 0.06, d), wood, 0, 0.45); add(g, B(w, 0.4, 0.05), wood, 0, 0.7, -d / 2 + 0.03); for (const a of [-1, 1]) add(g, B(0.06, 0.44, d), metal, a * (w / 2 - 0.1), 0.22, 0); break;
      case 'flagpole': {
        add(g, C(0.05, 0.07, 6, 8), white, 0, 3);
        const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.0, 8, 4), new THREE.MeshStandardMaterial({ map: flagTexture(), side: THREE.DoubleSide, roughness: 0.9 }));
        flag.position.set(0, 5.4, 0.8); flag.rotation.y = Math.PI / 2; g.add(flag); keep.push(flag); anim.flags.push(flag);
        break;
      }
      case 'bollard': add(g, C(0.22, 0.25, 0.5, 12), dark, 0, 0.25); add(g, C(0.3, 0.3, 0.06, 12), dark, 0, 0.5); break;
      case 'lifering': add(g, C(0.04, 0.04, 1.2, 6), white, 0, 0.6); { const ring = add(g, new THREE.TorusGeometry(0.32, 0.08, 8, 20), orange, 0, 1.0, 0); ring.rotation.y = Math.PI / 2; } break;
      default: add(g, B(w, 0.8, d), dark, 0, 0.4);
    }
  }

  // ------------------------------------------------------------ lights
  const lamps: THREE.PointLight[] = [];
  const lampSpots: [number, number, number, string, number, number][] = [
    [0, 3.8, 22, '#ffd8a0', 9, 16], [0, 3.8, 32, '#ffd8a0', 8, 14], [4.3, 3.2, 16, '#ffc890', 4, 8],
    [0, 2.8, -6, '#fff0d8', 3, 10], [-4, 2.8, 8, '#fff4e8', 3, 8], [4, 2.8, 8, '#f0f8ff', 3, 8],
    [0, 4.2, -27, '#ff9a50', 6, 14], [0, 2.9, -44, '#a8c8ff', 2.5, 10],
  ];
  for (const [x, y, z, color, intensity, range] of lampSpots) {
    if (opts.low && intensity < 4) continue;
    const l = new THREE.PointLight(color, intensity, range, 1.6);
    l.position.set(x, y, z); l.userData.base = intensity; world.add(l); lamps.push(l);
  }
  // Chandeliers in the ballroom, wall lamps in the corridor.
  const chandeliers: THREE.Group[] = [];
  for (const z of [22, 32]) { const ch = new THREE.Group(); ch.position.set(0, 3.6, z); world.add(ch); keep.push(ch); anim.sway.push(ch); chandeliers.push(ch); add(ch, C(0.02, 0.02, 0.6, 4), gold, 0, 0.3); add(ch, new THREE.SphereGeometry(0.35, 12, 10), lampMat, 0, -0.1).castShadow = false; for (let k = 0; k < 6; k++) add(ch, new THREE.SphereGeometry(0.08, 8, 6), lampMat, Math.sin(k) * 0.55, -0.15, Math.cos(k) * 0.55).castShadow = false; }
  for (let z = -18; z < 14; z += 4) for (const x of [-1.47, 1.47]) add(statics, B(0.06, 0.18, 0.28), lampMat, x, 2.3, z).castShadow = false;
  // A light at each deck door, and the green and red running lights.
  add(statics, new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: '#30ff60', toneMapped: false }), 8.5, 3.0, -47.9);
  add(statics, new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: '#ff3030', toneMapped: false }), -8.5, 3.0, -47.9);

  if (real) fitSurfaces(world);
  batchStatic(statics, keep);

  // ------------------------------------------------------------ people
  const npcs: Npc[] = [];
  for (const s of SCENES) {
    const people = [{ ...s.npc, pose: s.pose, mood: s.mood, look: s.look, main: true }, ...(s.extras ?? []).map(e => ({ ...e, main: false }))];
    for (const p of people) {
      const anyP = p as typeof p & { seat?: boolean; y?: number };
      const person = makePerson(p.look as Look, p.pose, { seat: anyP.seat, mood: p.mood });
      person.root.position.set(p.x, anyP.y ?? 0, p.z); person.root.rotation.y = p.heading;
      world.add(person.root);
      npcs.push({ person, scene: s.id, main: p.main, x: p.x, z: p.z, y: anyP.y ?? 0, heading: p.heading, baseMood: p.mood ?? 'neutral', seated: Boolean(anyP.seat) || p.pose === 'sit', body: (p.look as Look).body, seed: npcs.length * 31 + 7 });
    }
  }
  const crowd = (list: typeof CROWD, talk: boolean) => list.forEach((c, i) => {
    const any = c as typeof c & { seat?: boolean; y?: number; mood?: string };
    const look = talk ? CROWD_LOOKS[i] : FILLER_CREW[i] ?? { ...PASSENGERS[i % PASSENGERS.length], seed: 500 + i * 7 };
    const person = makePerson(look, c.pose, { seat: any.seat, mood: any.mood });
    person.root.position.set(c.x, any.y ?? 0, c.z); person.root.rotation.y = c.heading;
    world.add(person.root);
    npcs.push({ person, x: c.x, z: c.z, y: any.y ?? 0, heading: c.heading, baseMood: any.mood ?? 'neutral', seated: Boolean(any.seat), talk: talk ? String(i) : undefined, key: talk ? undefined : `bordo-${i}`, body: look.body, seed: (talk ? 300 : 500) + i });
  });
  crowd(CROWD, true);
  crowd(FILLERS, false);
  const movers: Mover[] = [];
  WALKERS.forEach((walker, i) => {
    const person = makePerson(walker.look as Look, 'stand', {});
    if ((walker as Walker & { tray?: boolean }).tray) {
      const tray = new THREE.Group(); tray.position.set(0.32, 1.25, 0.2); person.root.add(tray);
      add(tray, C(0.22, 0.22, 0.02, 16), metal);
      for (let k = 0; k < 4; k++) add(tray, C(0.03, 0.025, 0.16, 8), std('#f0e0a0', 0.1, 0.1), Math.sin(k * 1.5) * 0.11, 0.09, Math.cos(k * 1.5) * 0.11);
    }
    world.add(person.root);
    movers.push({ walker, person, offset: i * 13.7, x: walker.path[0][0], z: walker.path[0][1], body: (walker.look as Look).body, seed: 900 + i * 3, key: `paseo-${i}` });
  });

  const spots = SCENES.map(s => { const spot = buildSpot(s.id, s.spot.x, s.spot.z); world.add(spot.group); return spot; });

  // ------------------------------------------------------------ sea, sky, rain
  const seaSeg = opts.low ? 40 : 72;
  const seaGeo = new THREE.PlaneGeometry(520, 520, seaSeg, seaSeg);
  seaGeo.rotateX(-Math.PI / 2);
  const seaBase = Float32Array.from(seaGeo.attributes.position.array as Float32Array);
  const seaMat = new THREE.MeshStandardMaterial({ color: '#0e2030', roughness: 0.35, metalness: 0.25, flatShading: true });
  const sea = new THREE.Mesh(seaGeo, seaMat);
  sea.position.y = -7.2;
  scene.add(sea);
  const foamGeo = new THREE.RingGeometry(13, 22, 48, 1);
  foamGeo.rotateX(-Math.PI / 2);
  const foam = new THREE.Mesh(foamGeo, new THREE.MeshBasicMaterial({ color: '#d8e8f0', transparent: true, opacity: 0.15, depthWrite: false }));
  foam.scale.set(1, 1, 3.6); foam.position.set(0, -6.9, -2); scene.add(foam);
  // A lighthouse on the horizon: Cádiz, visible towards the end of the night.
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(1.4, 8, 6), new THREE.MeshBasicMaterial({ color: '#fff4c0', toneMapped: false, transparent: true, opacity: 0, fog: false }));
  beacon.position.set(80, 6, -420); scene.add(beacon);
  const sun = new THREE.Mesh(new THREE.CircleGeometry(18, 24), new THREE.MeshBasicMaterial({ color: '#ffb070', toneMapped: false, fog: false, transparent: true, opacity: 0 }));
  sun.position.set(-160, 10, -380); sun.lookAt(0, 0, 0); scene.add(sun);
  const dropsN = opts.low ? 500 : 1600;
  const rainGeo = new THREE.BufferGeometry();
  const rainPos = new Float32Array(dropsN * 6);
  const rr = random(17);
  const drops = Array.from({ length: dropsN }, () => ({ x: (rr() - 0.5) * 36, y: rr() * 16, z: (rr() - 0.5) * 36 }));
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
  const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: '#b8c8d8', transparent: true, opacity: 0.45, depthWrite: false }));
  rain.frustumCulled = false;
  scene.add(rain);
  const flashLight = new THREE.DirectionalLight('#dfe8ff', 0);
  flashLight.position.set(-60, 120, -40); scene.add(flashLight);

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

  // ------------------------------------------------------------ the storm
  let k = 0, flash = 0, nextFlash = 6;
  let flashFn: (k: number) => void = () => {};
  const sky = new THREE.Color(), c1 = new THREE.Color(), c2 = new THREE.Color();
  const strength = () => (k <= 1 ? 0.25 + k * 0.75 : Math.max(0, 1 - (k - 1) * 4) * 0.2);
  function skyColor() {
    if (k <= 1) return sky.copy(c1.set('#1c2638')).lerp(c2.set('#070a12'), k);
    return sky.copy(c1.set('#070a12')).lerp(c2.set('#e8a890'), Math.min(1, (k - 1) * 1.4));
  }
  function applyStorm() {
    const s = skyColor();
    if (scene.background instanceof THREE.Color) scene.background.copy(s); else scene.background = s.clone();
    if (scene.fog) (scene.fog as THREE.Fog).color.copy(s);
    if (scene.fog) { const fog = scene.fog as THREE.Fog; fog.near = k > 1 ? 60 : 30 - k * 12; fog.far = k > 1 ? 520 : 240 - k * 110; }
    seaMat.color.set(k > 1 ? '#3a5a6a' : '#0e2030');
    (rain.material as THREE.LineBasicMaterial).opacity = 0.2 + strength() * 0.4;
    rain.visible = strength() > 0.05;
    (beacon.material as THREE.MeshBasicMaterial).opacity = k > 0.75 ? Math.min(1, (k - 0.75) * 4) : 0;
    (sun.material as THREE.MeshBasicMaterial).opacity = k > 1 ? Math.min(1, (k - 1) * 2) : 0;
    sun.position.y = k > 1 ? -10 + (k - 1) * 40 : -10;
    glass.emissiveIntensity = k > 1 ? 0.05 : 0.18;
  }
  applyStorm();
  function setStorm(phase: number) { k = Math.max(0, Math.min(2, phase)); applyStorm(); }

  function bodies(): Body[] {
    const out: Body[] = [];
    for (const n of npcs) out.push({ x: n.x, z: n.z, who: n });
    for (const m of movers) out.push({ x: m.x, z: m.z, who: m });
    return out;
  }

  const wp = new THREE.Vector3();
  const far = opts.low ? 26 : 40;
  let seaTick = 0;
  let farTick = 0;
  function animate(t: number, dt: number, px: number, pz: number, camera: THREE.Camera) {
    clockNow = t;
    const st = strength();
    for (const spot of spots) {
      spot.gem.position.y = 2.3 + Math.sin(t * 2 + spot.group.position.x) * 0.12;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    // The ship rolls: lamps, the bell and the bingo drum swing with it.
    const roll = Math.sin(t * 0.85) * st;
    for (const s of anim.sway) s.rotation.z = roll * 0.22;
    // The follow camera never ends up inside a chandelier: it steps aside while the camera passes.
    for (const ch of chandeliers) ch.visible = Math.hypot(camera.position.x - ch.position.x, camera.position.y - 3.4, camera.position.z - ch.position.z) > 1.4;
    for (const f of anim.flags) { const p = f.geometry.attributes.position as THREE.BufferAttribute; for (let i = 0; i < p.count; i++) { const x = p.getX(i); p.setZ(i, Math.sin(t * (4 + st * 6) + x * 3) * 0.12 * (x + 0.8)); } p.needsUpdate = true; }
    for (const l of lamps) l.intensity = (l.userData.base as number) * (l.position.z < -20 && l.position.z > -34 ? 0.85 + Math.sin(t * 17) * 0.08 : 1);
    // The sea: bigger waves as the storm grows.
    if (++seaTick % (opts.low ? 3 : 1) === 0) {
      const pos = seaGeo.attributes.position as THREE.BufferAttribute;
      const amp = 0.25 + st * 2.4;
      for (let i = 0; i < pos.count; i++) {
        const x = seaBase[i * 3], z = seaBase[i * 3 + 2];
        pos.setY(i, Math.sin(x * 0.045 + t * 0.9) * amp + Math.sin(z * 0.06 - t * 1.3 + x * 0.02) * amp * 0.7 + Math.sin((x + z) * 0.13 + t * 2.1) * amp * 0.25);
      }
      pos.needsUpdate = true;
      seaGeo.computeVertexNormals();
    }
    sea.position.x = Math.round(px / 20) * 20; sea.position.z = Math.round(pz / 20) * 20;
    (foam.material as THREE.MeshBasicMaterial).opacity = 0.08 + st * 0.2;
    (beacon.material as THREE.MeshBasicMaterial).color.setScalar(Math.sin(t * 2.4) > 0.6 ? 1 : 0.15);
    // Rain around the camera, only under the open sky.
    const cp = camera.position;
    rain.visible = st > 0.05 && !roofed(cp.x, cp.z);
    if (rain.visible) {
      const wind = 2 + st * 7, fall = 14 + st * 10, len = 0.35 + st * 0.5;
      for (let i = 0; i < dropsN; i++) {
        const d = drops[i];
        d.y -= fall * dt; d.x += wind * dt * 0.4; d.z += wind * dt;
        if (d.y < -1) { d.y = 14 + Math.random() * 3; d.x = (Math.random() - 0.5) * 36; d.z = (Math.random() - 0.5) * 36; }
        const x = cp.x + d.x, y = cp.y - 4 + d.y, z = cp.z + d.z;
        rainPos.set([x, y, z, x - 0.02 * wind * len, y + len, z - 0.05 * wind * len], i * 6);
      }
      rainGeo.attributes.position.needsUpdate = true;
    }
    // Lightning: more often as the storm grows; none at dawn.
    if (k <= 1 && t > nextFlash) {
      nextFlash = t + (14 - st * 10) * (0.6 + Math.random() * 0.8);
      flash = 1;
      flashFn(st);
    }
    if (flash > 0) {
      flash = Math.max(0, flash - dt * 3.2);
      const f = flash > 0.7 || (flash > 0.35 && flash < 0.5) ? flash : flash * 0.2;
      flashLight.intensity = f * 4 * (0.4 + st);
      const s = skyColor();
      if (scene.background instanceof THREE.Color) scene.background.copy(s).lerp(c1.set('#c8d4ff'), f * 0.7);
    }
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

  void SEAT_TOP; void SUPER; void ROUND; void roundSeat;
  return { npcs, movers, spots, animate, setSceneMood, setStorm, bodies, say, onFlash: (fn) => { flashFn = fn; } };
}

// ---------------------------------------------------------------- textures
function flagTexture() {
  return canvas(256, 160, ctx => {
    ctx.fillStyle = '#16243a'; ctx.fillRect(0, 0, 256, 160);
    ctx.fillStyle = '#f4f0e0'; ctx.beginPath(); ctx.moveTo(40, 110); ctx.quadraticCurveTo(128, 30, 216, 110); ctx.quadraticCurveTo(128, 70, 40, 110); ctx.fill();
    ctx.font = '700 22px Georgia, serif'; ctx.textAlign = 'center'; ctx.fillText('ALBATROS', 128, 140);
  });
}
function routeMap() {
  return canvas(512, 280, ctx => {
    ctx.fillStyle = '#e8dcc0'; ctx.fillRect(0, 0, 512, 280);
    ctx.fillStyle = '#c8b890';
    ctx.beginPath(); ctx.ellipse(380, 70, 120, 70, 0.3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(330, 230, 90, 50, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(90, 200, 26, 14, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#a01a2a'; ctx.lineWidth = 2;
    const r = random(9);
    for (let i = 0; i < 24; i++) { ctx.beginPath(); ctx.moveTo(90 + r() * 30, 190 + r() * 20); ctx.quadraticCurveTo(200 + r() * 80, 100 + r() * 120, 280 + r() * 160, 40 + r() * 200); ctx.stroke(); }
    ctx.fillStyle = '#16243a'; ctx.font = '700 22px Georgia, serif'; ctx.fillText('Rutas del Albatros · 1971–2026', 20, 30);
  });
}
