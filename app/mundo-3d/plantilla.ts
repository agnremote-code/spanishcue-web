// Mundo 3D · a zone built from data. Countries after the United States
// describe each region (style, ground, light, landmark and five places) and
// this template builds it, so a new country adds data, not scene code.
//
// The layout is the same everywhere and was framed once for the talk camera:
// the entrance in the south, an avenue running north, a plaza with its centre
// piece, two places on each side of the avenue facing it and the fifth in the
// north, under the landmark. Every place keeps its props behind the person
// who talks there, so the side camera always has room.
import * as THREE from 'three';
import {
  addBench, addPalm, addTree, block, box, canvas, cylinder, extra, glow, ground, groundTexture, lightPool, makeCar, makeWalker,
  placeVehicle, random, sign, solid, spotWith, streetLamp, tileTexture, umbrella, water, windowsTexture,
  type Box, type Light, type Look, type SceneBuilder, type SpotPlace, type Talker, type Walker,
} from './kit3d';

export type ZoneStyle = 'colonial' | 'mediterranean' | 'nordic' | 'modern' | 'alpine' | 'tropical' | 'brick' | 'desert';
export type SpotKind = 'cafe' | 'market' | 'shop' | 'park' | 'beach' | 'harbor' | 'museum' | 'station' | 'stage' | 'viewpoint' | 'restaurant' | 'temple' | 'church' | 'school';
export type LandmarkKind = 'cathedral' | 'tower' | 'obelisk' | 'pyramid' | 'castle' | 'windmill' | 'temple' | 'opera' | 'arch' | 'mountain' | 'lighthouse' | 'dome' | 'wall' | 'volcano';

export type ZoneSpot = {
  id: string;
  kind: SpotKind;
  /** Text on the place itself (shop sign, station name…). */
  sign: string;
  color: string;
  who: Partial<Look>;
  pose?: string;
  mood?: string;
};

export type ZoneLayout = {
  seed: number;
  style: ZoneStyle;
  /** Facade colours, used in turn. */
  palette: string[];
  ground: 'cobble' | 'asphalt' | 'sand' | 'grass' | 'snow' | 'dirt' | 'stone';
  plaza: string;
  water?: 'east' | 'west';
  trees?: 'palm' | 'tree' | 'pine' | 'none';
  light: 'day' | 'golden' | 'dusk' | 'overcast' | 'snow';
  landmark: { kind: LandmarkKind; color: string; accent?: string; label?: string };
  /** The sign over the entrance: the zone's name. */
  entrance: string;
  centre?: 'fountain' | 'statue' | 'kiosk' | 'tree';
  /** Exactly five, in walking order: south-west, south-east, north-west, north-east, north. */
  spots: ZoneSpot[];
};

// Where the five places stand (O) and which way they face the avenue (f).
const SITES = [
  { x: -21, z: -14, fx: 1, fz: 0 },
  { x: 21, z: -14, fx: -1, fz: 0 },
  { x: -21, z: 20, fx: 1, fz: 0 },
  { x: 21, z: 20, fx: -1, fz: 0 },
  { x: 0, z: 37, fx: 0, fz: -1 },
] as const;

const LIGHTS: Record<ZoneLayout['light'], Light> = {
  day: { sky: ['#6fa8e0', '#d9ecf8'], fog: ['#dbe8f0', 80, 260], sun: { color: '#fff1d6', intensity: 2.5, at: [30, 40, -20] }, hemi: ['#d6e8ff', '#b9a98a', 1.2], exposure: 1.05 },
  golden: { sky: ['#79a9db', '#ffd6a0'], fog: ['#f0d6b4', 70, 250], sun: { color: '#ffd9a8', intensity: 2.4, at: [-40, 26, -30] }, hemi: ['#cfe3ff', '#d8b98a', 1.15], exposure: 1.05 },
  dusk: { sky: ['#2e3f74', '#f29a6b'], fog: ['#c98a7a', 60, 220], sun: { color: '#ffb48a', intensity: 1.7, at: [-40, 14, 30] }, hemi: ['#8fa2d6', '#6d5a52', 1.0], exposure: 1.1 },
  overcast: { sky: ['#9fb0bf', '#dfe4e8'], fog: ['#cfd6dc', 60, 220], sun: { color: '#f2f2ee', intensity: 1.6, at: [20, 40, 10] }, hemi: ['#e2e8ee', '#8f948f', 1.35], exposure: 1.1 },
  snow: { sky: ['#a9c3dc', '#eef4f8'], fog: ['#e6edf2', 60, 220], sun: { color: '#fff6e8', intensity: 2.1, at: [30, 30, -30] }, hemi: ['#e8f0ff', '#cfd6dc', 1.35], exposure: 1.08 },
};

const GROUNDS: Record<ZoneLayout['ground'], [string, string[]]> = {
  cobble: ['#9c938a', ['#857c73', '#b1a89e', '#6f675f']],
  asphalt: ['#4a4c51', ['#3d3f43', '#5b5d62']],
  sand: ['#e3cc9a', ['#d2b77f', '#f0dfb6']],
  grass: ['#6f9c4a', ['#5d8a3c', '#86b05a']],
  snow: ['#eef2f6', ['#dfe6ee', '#ffffff']],
  dirt: ['#b08d63', ['#9a7a54', '#c4a37a']],
  stone: ['#c9bfae', ['#b6ab98', '#ddd3c2']],
};

const build = (z: ZoneLayout): SceneBuilder => ({ low, shadows }) => {
  const group = new THREE.Group();
  const solids: Box[] = [];
  const spots: SpotPlace[] = [];
  const talkers: Talker[] = [];
  const walkers: Walker[] = [];
  const lamps: THREE.MeshStandardMaterial[] = [];
  const spinners: THREE.Object3D[] = [];
  const rand = random(z.seed);
  const pick = (i: number) => z.palette[i % z.palette.length];
  const solidBox = (x0: number, z0: number, x1: number, z1: number, top?: number) =>
    solids.push(top == null ? { x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: Math.min(z0, z1), z1: Math.max(z0, z1) } : { x0: Math.min(x0, x1), x1: Math.max(x0, x1), z0: Math.min(z0, z1), z1: Math.max(z0, z1), top });
  const east = z.water === 'east', west = z.water === 'west';
  const night = z.light === 'dusk';

  // ---------------------------------------------------------- ground
  const [base, specks] = GROUNDS[z.ground];
  ground(group, -60, -60, 60, 70, groundTexture(base, specks, z.seed + 1), '#ffffff', 8);
  const pavers = tileTexture(z.plaza, shade(z.plaza, -0.18), 4);
  ground(group, -4.5, -48, 4.5, 48, z.ground === 'asphalt' ? pavers : tileTexture(shade(base, 0.08), shade(base, -0.12), 3), '#ffffff', 4, 0.01);
  ground(group, -12, -4, 12, 12, pavers, '#ffffff', 3, 0.02);
  ground(group, -16, -16, 16, -12, pavers, '#ffffff', 3, 0.015);
  ground(group, -16, 18, 16, 22, pavers, '#ffffff', 3, 0.015);
  let sea: THREE.Texture | null = null;
  if (east || west) {
    const s = east ? 1 : -1;
    ground(group, s * 30, -60, s * 38, 60, groundTexture('#ecd7aa', ['#d9c08e', '#f7e7c4'], z.seed + 2), '#ffffff', 8, 0.012);
    sea = water(group, s * 38, -90, s * 140, 90, '#1f8fb0', '#bff1ff', -0.04);
    solidBox(s * 37.5, -60, s * 140, 60);
  }

  // ---------------------------------------------------------- the town around
  const facade = (color: string, seed: number, cols = 3, rows = 3) => windowsTexture(color, night ? '#2c3442' : '#3d4b5a', '#ffd98a', cols, rows, seed, night ? 0.45 : 0.08);
  const house = (x0: number, z0: number, x1: number, z1: number, h: number, color: string, seed: number) => {
    block(group, x0, z0, x1, z1, h, facade(color, seed), '#ffffff', z.style === 'modern' ? '#5a6168' : '#6b5a4c');
    roof(group, z.style, x0, z0, x1, z1, h, seed);
    solidBox(x0, z0, x1, z1);
  };
  const height = () => z.style === 'modern' ? 12 + rand() * 18 : z.style === 'nordic' || z.style === 'alpine' ? 6 + rand() * 3 : 5 + rand() * 5;
  // Side rows (or the beach), the south row with the entrance gap.
  for (const s of [-1, 1]) {
    if ((s === 1 && east) || (s === -1 && west)) continue;
    let zz = -48, i = 0;
    while (zz < 48) { const len = 9 + rand() * 7; const end = Math.min(48, zz + len); house(s * 36, zz, s * 48, end, height(), pick(i + (s > 0 ? 2 : 0)), z.seed + 30 + i * 3 + s); zz = end + 0.4; i++; }
  }
  for (const [x0, x1, i] of [[-36, -9, 0], [9, 36, 1]] as const) house(x0, -48, x1, -40, height(), pick(i + 3), z.seed + 60 + i);
  // The entrance arch with the zone's name.
  for (const s of [-1, 1]) { group.add(box(1, 6, 1, solid(shade(z.palette[0], -0.25), 0.8), s * 6.5, 3, -38)); solidBox(s * 6.5 - 0.5, -38.5, s * 6.5 + 0.5, -37.5); }
  group.add(box(14, 1.1, 1, solid(shade(z.palette[0], -0.25), 0.8), 0, 6.3, -38));
  sign(group, z.entrance, 0, 6.3, -37.46, 0, 9, '#fbf6ea', '#1f2a37');
  sign(group, z.entrance, 0, 6.3, -38.54, Math.PI, 9, '#fbf6ea', '#1f2a37');
  // The north edge: a low wall, and the landmark beyond it.
  group.add(box(96, 1.2, 0.8, solid(shade(base, -0.2), 0.9), 0, 0.6, 48.6));
  solidBox(-48, 48.2, 48, 49);
  landmark(group, z, spinners);

  // ---------------------------------------------------------- the plaza
  const centre = z.centre ?? 'fountain';
  if (centre === 'fountain') {
    group.add(cylinder(2.4, 2.6, 0.7, solid('#d8d2c4', 0.7), 0, 0.35, 4, 28));
    const w = new THREE.Mesh(new THREE.CircleGeometry(2.1, 28), new THREE.MeshStandardMaterial({ color: '#5fb3cf', roughness: 0.15, metalness: 0.2 }));
    w.rotation.x = -Math.PI / 2; w.position.set(0, 0.66, 4); group.add(w);
    group.add(cylinder(0.3, 0.45, 2.2, solid('#d8d2c4', 0.7), 0, 1.4, 4, 12));
    group.add(cylinder(1, 0.4, 0.3, solid('#d8d2c4', 0.7), 0, 2.5, 4, 16));
  } else if (centre === 'statue') {
    group.add(box(2.4, 2.2, 2.4, solid('#b9b0a2', 0.8), 0, 1.1, 4));
    const fig = new THREE.Group();
    fig.add(cylinder(0.35, 0.45, 1.6, solid('#4f6b5c', 0.4, 0.6), 0, 0.8, 0, 10));
    fig.add(new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), solid('#4f6b5c', 0.4, 0.6)).translateY(1.85));
    const arm = cylinder(0.08, 0.08, 1, solid('#4f6b5c', 0.4, 0.6), 0.4, 1.6, 0, 8); arm.rotation.z = -1; fig.add(arm);
    fig.position.set(0, 2.2, 4); group.add(fig);
  } else if (centre === 'kiosk') {
    group.add(cylinder(2.6, 2.6, 0.5, solid('#d8d2c4', 0.8), 0, 0.25, 4, 8));
    for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2; group.add(cylinder(0.08, 0.08, 3, solid('#f4f1ea', 0.6), Math.cos(a) * 2.3, 2, 4 + Math.sin(a) * 2.3, 6)); }
    const top = new THREE.Mesh(new THREE.ConeGeometry(3, 1.4, 8), solid(z.palette[1] ?? '#3d6b52', 0.7)); top.position.set(0, 4.2, 4); group.add(top);
  } else {
    addTree(group, 0, 4, z.seed + 5);
    group.add(cylinder(2.2, 2.3, 0.5, solid('#b9b0a2', 0.8), 0, 0.25, 4, 24));
  }
  solidBox(-2.6, 1.4, 2.6, 6.6);
  for (const [x, zz, r] of [[-7, 4, Math.PI / 2], [7, 4, -Math.PI / 2], [0, -2, 0], [0, 10, Math.PI]] as const) {
    addBench(group, x, zz, r);
    solidBox(x - (r === 0 || r === Math.PI ? 1 : 0.35), zz - (r === 0 || r === Math.PI ? 0.35 : 1), x + (r === 0 || r === Math.PI ? 1 : 0.35), zz + (r === 0 || r === Math.PI ? 0.35 : 1), 0.55);
  }
  extra(group, talkers, -7.2, 3.6, Math.PI / 2, z.seed + 71, {}, 'sit', 'smile', shadows);
  extra(group, talkers, 0.4, 10.2, Math.PI, z.seed + 72, { age: 'old' }, 'sit', 'neutral', shadows);
  extra(group, talkers, 9.5, -1.5, -2.4, z.seed + 73, {}, 'phone', 'smile', shadows);
  extra(group, talkers, -9.5, 9.5, 2.2, z.seed + 74, { age: 'child' }, 'stand', 'surprised', shadows);

  // ---------------------------------------------------------- the avenue
  const trees = z.trees ?? 'tree';
  for (let zz = -34; zz <= 44; zz += 9) {
    if (zz > -6 && zz < 14) continue;
    for (const s of [-1, 1]) {
      const x = s * 6.5;
      if (trees === 'palm') addPalm(group, x, zz, 5 + rand() * 1.5, z.seed + zz * 7 + s);
      else if (trees === 'pine') pine(group, x, zz);
      else if (trees === 'tree') addTree(group, x, zz, z.seed + zz * 5 + s);
      else { streetLamp(group, x, zz, lamps); solidBox(x - 0.2, zz - 0.2, x + 0.2, zz + 0.2); continue; }
      solidBox(x - 0.45, zz - 0.45, x + 0.45, zz + 0.45);
    }
  }
  for (const zz of [-24, 26]) for (const s of [-1, 1]) { streetLamp(group, s * 4.9, zz, lamps); solidBox(s * 4.9 - 0.2, zz - 0.2, s * 4.9 + 0.2, zz + 0.2); }
  // A parked car or two by the corners.
  if (z.style !== 'alpine' && !low) {
    for (const [x, zz, c] of [[-29, -30, '#c23b3b'], [29, 31, '#2f6fb0']] as const) {
      if ((x > 0 && east) || (x < 0 && west)) continue;
      const car = makeCar('sedan', c); placeVehicle(car.group, x, zz, Math.PI / 2); group.add(car.group);
      solidBox(x - 1.1, zz - 2.3, x + 1.1, zz + 2.3, 1.4);
    }
  }

  // ---------------------------------------------------------- the five places
  z.spots.forEach((spot, i) => {
    const site = SITES[i];
    place(group, z, spot, site, i, solidBox, talkers, shadows, rand);
    const sx = site.x + site.fx * 2.2, sz = site.z + site.fz * 2.2;
    spotWith(group, spots, talkers, spot.id, sx, sz, Math.atan2(-site.fx, -site.fz), z.seed + 100 + i * 7, spot.who, spot.pose ?? 'stand', spot.mood ?? 'smile', shadows, 2.2);
    if (night) lightPool(group, site.x + site.fx, site.z + site.fz, 3.2, '#ffe6b0', 0.2);
  });

  // ---------------------------------------------------------- people walking
  const walk = (path: [number, number][], seed: number, speed: number, look: Partial<Look> = {}) => walkers.push(makeWalker(group, path.map(([x, zz]) => ({ x, z: zz })), seed, speed, look, shadows));
  walk([[-3.4, -36], [-3.4, 44]], z.seed + 201, 1.2);
  walk([[3.4, 44], [3.4, -36]], z.seed + 202, 1.1, { extras: ['bag'] });
  walk([[-12, -8], [12, -8]], z.seed + 203, 1.0);
  if (!low) {
    walk([[12, 15], [-12, 15]], z.seed + 204, 1.3);
    walk([[-3.4, 40], [-3.4, -30]], z.seed + 205, 0.9, { age: 'old' });
    walk([[3.4, -30], [3.4, 30]], z.seed + 206, 1.4, { extras: ['headphones'] });
  }

  const maxX = east ? 33 : 35.5, minX = west ? -33 : -35.5;
  return {
    group,
    bounds: { minX, maxX, minZ: -37, maxZ: 47.6 },
    solids,
    spawn: { x: 0, z: -33, heading: 0 },
    exit: { x: 0, z: -35.6 },
    spots,
    talkers,
    walkers,
    light: LIGHTS[z.light],
    animate(t, dt) {
      if (sea) { sea.offset.x = (sea.offset.x + dt * 0.01) % 1; sea.offset.y = Math.sin(t * 0.3) * 0.03; }
      lamps.forEach((m, k) => { m.emissiveIntensity = (night ? 1.8 : 0.6) + Math.sin(t * 2 + k) * 0.1; });
      for (const s of spinners) s.rotation.z += dt * 0.6;
    },
  };
};

export default build;

// ---------------------------------------------------------------- helpers

/** Lighter (amount > 0) or darker version of a hex colour. */
function shade(hex: string, amount: number) {
  const c = new THREE.Color(hex);
  if (amount > 0) c.lerp(new THREE.Color('#ffffff'), amount); else c.lerp(new THREE.Color('#000000'), -amount);
  return `#${c.getHexString()}`;
}

function pine(g: THREE.Group, x: number, z: number) {
  g.add(cylinder(0.18, 0.24, 1.6, solid('#4a3626'), x, 0.8, z, 6));
  for (let i = 0; i < 3; i++) { const c = new THREE.Mesh(new THREE.ConeGeometry(1.6 - i * 0.4, 2, 8), solid('#24452f', 0.9)); c.position.set(x, 2 + i * 1.1, z); c.castShadow = true; g.add(c); }
}

/** Roofs that say where we are: pitched tiles, steep Nordic gables, chalets, flat parapets. */
function roof(g: THREE.Group, style: ZoneStyle, x0: number, z0: number, x1: number, z1: number, h: number, seed: number) {
  const w = x1 - x0, d = z1 - z0, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  const pitched = { mediterranean: ['#b5562f', 0.35], nordic: ['#2f3236', 0.75], alpine: ['#5a3b24', 0.45], tropical: ['#8a8f93', 0.25], brick: ['#3d3f44', 0.5] } as const;
  const p = pitched[style as keyof typeof pitched];
  if (p) {
    const along = d >= w;
    const span = along ? w : d, len = along ? d : w;
    const rise = span * p[1];
    const shape = new THREE.Shape([new THREE.Vector2(-span / 2 - 0.3, 0), new THREE.Vector2(span / 2 + 0.3, 0), new THREE.Vector2(0, rise)]);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: len + 0.4, bevelEnabled: false });
    geo.translate(0, 0, -(len + 0.4) / 2);
    const mesh = new THREE.Mesh(geo, solid(p[0], 0.85));
    mesh.position.set(cx, h, cz);
    if (!along) mesh.rotation.y = Math.PI / 2;
    mesh.castShadow = true; g.add(mesh);
    if (style === 'alpine') g.add(box(w + 0.2, 0.25, d + 0.2, solid('#7a5233', 0.9), cx, h * 0.55, cz));
  } else {
    // Flat roofs with a parapet; colonial towns get a cornice of another colour.
    g.add(box(w + 0.3, 0.5, d + 0.3, solid(style === 'colonial' ? '#f4efe4' : style === 'desert' ? '#c9b38a' : '#5c636a', 0.8), cx, h + 0.25, cz));
    if (style === 'modern' && random(seed)() > 0.6) g.add(cylinder(0.05, 0.05, 4, solid('#9aa1a8', 0.4, 0.6), cx, h + 2.5, cz, 6));
  }
}

type Site = (typeof SITES)[number];
type SolidFn = (x0: number, z0: number, x1: number, z1: number, top?: number) => void;

/**
 * One place: everything stands behind the person who talks there (a < 0 is
 * away from the avenue, b sideways), so the circle and the camera stay free.
 */
function place(g: THREE.Group, z: ZoneLayout, spot: ZoneSpot, site: Site, index: number, solidBox: SolidFn, talkers: Talker[], shadows: boolean, rand: () => number) {
  // Local (a, b) to world: f points to the avenue, p is f turned left.
  const px = -site.fz, pz = site.fx;
  const at = (a: number, b: number) => ({ x: site.x + site.fx * a + px * b, z: site.z + site.fz * a + pz * b });
  const ry = Math.atan2(site.fx, site.fz); // a front facing the avenue
  const put = (o: THREE.Object3D, a: number, b: number, y = 0) => { const p = at(a, b); o.position.set(p.x, y, p.z); o.rotation.y = ry; g.add(o); return o; };
  const rect = (a0: number, b0: number, a1: number, b1: number, top?: number) => { const p = at(a0, b0), q = at(a1, b1); solidBox(p.x, p.z, q.x, q.z, top); };
  const mat = (c: string, r = 0.8, m = 0) => solid(c, r, m);
  const wall = shade(spot.color, 0.55);
  const sitter = (a: number, b: number, heading: number, seed: number, look: Partial<Look> = {}) => {
    const p = at(a, b);
    extra(g, talkers, p.x, p.z, ry + heading, seed, look, 'sit', 'smile', shadows);
  };
  // A building whose front is at a = front, with the sign over the door.
  const facadeBlock = (front: number, depth: number, width: number, h: number, color: string) => {
    const p = at(front - depth / 2, 0);
    const tex = windowsTexture(color, '#3d4b5a', '#ffd98a', 4, 3, z.seed + index * 13, 0.1);
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, h, depth), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.82 }));
    mesh.position.set(p.x, h / 2, p.z); mesh.rotation.y = ry; mesh.castShadow = true; mesh.receiveShadow = true; g.add(mesh);
    rect(front - depth, -width / 2, front, width / 2);
    const s = at(front + 0.06, 0);
    sign(g, spot.sign, s.x, Math.min(h - 0.6, 3.6), s.z, ry, Math.min(width - 1, 5.5), spot.color, '#ffffff');
    const door = at(front + 0.03, 0);
    const d = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 2.3), mat(shade(spot.color, -0.45), 0.6)); d.position.set(door.x, 1.15, door.z); d.rotation.y = ry; g.add(d);
  };
  const awning = (a: number, width: number, color: string) => {
    const tex = canvas(128, 16, ctx => { for (let k = 0; k < 8; k++) { ctx.fillStyle = k % 2 ? '#ffffff' : color; ctx.fillRect(k * 16, 0, 16, 16); } });
    const m = new THREE.Mesh(new THREE.BoxGeometry(width, 0.12, 1.6), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }));
    put(m, a + 0.8, 0, 2.75);
  };
  const table = (a: number, b: number, chairs = true) => {
    const t = new THREE.Group();
    t.add(cylinder(0.5, 0.5, 0.06, mat('#f2efe8', 0.5), 0, 0.76, 0, 16));
    t.add(cylinder(0.05, 0.05, 0.76, mat('#2a2a2a', 0.5, 0.5), 0, 0.38, 0, 6));
    put(t, a, b);
    rect(a - 0.55, b - 0.55, a + 0.55, b + 0.55, 0.8);
    if (chairs) for (const s of [-1, 1]) { const c = box(0.45, 0.45, 0.45, mat('#7a5a3c'), 0, 0.23, 0); put(c, a, b + s * 0.85); rect(a - 0.25, b + s * 0.85 - 0.25, a + 0.25, b + s * 0.85 + 0.25, 0.47); }
  };
  const stall = (a: number, b: number, color: string, goods: string[]) => {
    const st = new THREE.Group();
    st.add(box(2.4, 0.9, 1.1, mat('#8a6a48'), 0, 0.45, 0));
    for (const s of [-1, 1]) st.add(cylinder(0.05, 0.05, 2.4, mat('#5a4632'), s * 1.1, 1.2, -0.45, 6));
    const tex = canvas(128, 16, ctx => { for (let k = 0; k < 8; k++) { ctx.fillStyle = k % 2 ? '#ffffff' : color; ctx.fillRect(k * 16, 0, 16, 16); } });
    const top = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.1, 1.6), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 })); top.position.set(0, 2.45, 0.1); top.rotation.x = 0.18; st.add(top);
    goods.forEach((c, k) => { const m = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), mat(c, 0.6)); for (let n = 0; n < 5; n++) { const s = m.clone(); s.position.set(-0.9 + k * 0.6 + (n % 3) * 0.12, 0.98 + Math.floor(n / 3) * 0.12, -0.2 + (n % 2) * 0.2); st.add(s); } });
    put(st, a, b);
    rect(a - 0.6, b - 1.25, a + 0.6, b + 1.25, 0.95);
  };

  switch (spot.kind) {
    case 'cafe':
    case 'restaurant': {
      facadeBlock(-3.2, 6, 10, 5.2, wall);
      awning(-3.2, 9, spot.color);
      table(-1.2, -4.2); table(-1.2, 4.2);
      sitter(-1.2, -5.05, 0, z.seed + index * 31 + 1); sitter(-1.2, 3.35, Math.PI, z.seed + index * 31 + 2);
      if (spot.kind === 'restaurant') {
        // String lights between two poles.
        for (const s of [-1, 1]) { const p = cylinder(0.05, 0.05, 3.4, mat('#333', 0.5, 0.5), 0, 1.7, 0, 6); put(p, -0.4, s * 5.6); rect(-0.55, s * 5.6 - 0.15, -0.25, s * 5.6 + 0.15); }
        for (let k = 0; k < 12; k++) { const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), glow('#ffd27a', 1.4)); put(bulb, -0.4, -5.6 + k * (11.2 / 11), 3.3 - Math.sin((k / 11) * Math.PI) * 0.4); }
      } else umbrella(g, at(-1, 6.2).x, at(-1, 6.2).z, spot.color, '#ffffff', 2.4);
      break;
    }
    case 'market': {
      facadeBlock(-6.5, 5, 13, 4.2, wall);
      stall(-3, -3.6, spot.color, ['#e64b3c', '#f2a63a', '#7cbf4a']);
      stall(-3, 0, '#3a8fd1', ['#f6d743', '#e06f9c', '#8a5a2b']);
      stall(-3, 3.6, '#2fa36b', ['#c43b2e', '#f0e6c8', '#6aa84f']);
      for (const b of [-5.6, 5.6]) { const crate = box(0.7, 0.6, 0.7, mat('#a37c52'), 0, 0.3, 0); put(crate, -1.8, b); rect(-2.15, b - 0.35, -1.45, b + 0.35, 0.62); }
      const seller = at(-4.2, 3.6); extra(g, talkers, seller.x, seller.z, ry, z.seed + index * 31 + 3, {}, 'stand', 'smile', shadows);
      break;
    }
    case 'shop':
    case 'school': {
      facadeBlock(-3, 6, 10, spot.kind === 'school' ? 7 : 5, wall);
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.8), new THREE.MeshStandardMaterial({ color: '#a9c6d8', roughness: 0.1, metalness: 0.3 }));
      for (const b of [-3, 3]) put(glass.clone(), -2.96, b, 1.4);
      if (spot.kind === 'school') { const flag = box(1.2, 0.8, 0.04, mat(spot.color, 0.7), 0, 0, 0); put(flag, -2.5, 4.6, 5.4); const pole = cylinder(0.04, 0.04, 6, mat('#ccc', 0.4, 0.6), 0, 3, 0, 6); put(pole, -2.5, 5.2); rect(-2.65, 5.05, -2.35, 5.35); }
      else awning(-3, 6, spot.color);
      addBench(g, at(-1.4, 5).x, at(-1.4, 5).z, ry);
      rect(-1.75, 4, -1.05, 6, 0.55);
      break;
    }
    case 'park': {
      const g0 = at(-12, -8), g1 = at(2, 8);
      ground(g, Math.min(g0.x, g1.x), Math.min(g0.z, g1.z), Math.max(g0.x, g1.x), Math.max(g0.z, g1.z), groundTexture('#6f9c4a', ['#5d8a3c', '#86b05a'], z.seed + index), '#ffffff', 6, 0.018);
      for (const [a, b] of [[-5, -5], [-7, 1], [-4.5, 6], [-10, -2], [-9.5, 5.5]] as const) { const p = at(a, b); if (z.trees === 'palm') addPalm(g, p.x, p.z, 5, z.seed + a * 11 + b); else if (z.trees === 'pine') pine(g, p.x, p.z); else addTree(g, p.x, p.z, z.seed + a * 9 + b); rect(a - 0.5, b - 0.5, a + 0.5, b + 0.5); }
      for (const b of [-3.6, 3.6]) { const p = at(-1.6, b); addBench(g, p.x, p.z, ry); rect(-1.95, b - 1, -1.25, b + 1, 0.55); }
      sitter(-1.6, 3.6, 0, z.seed + index * 31 + 4, { age: 'old' });
      const bed = cylinder(1.4, 1.5, 0.4, mat('#7a5a3c'), 0, 0.2, 0, 20); put(bed, -5.5, -1.2);
      const flowers = cylinder(1.3, 1.3, 0.2, mat(spot.color, 0.8), 0, 0.5, 0, 20); put(flowers, -5.5, -1.2);
      rect(-7, -2.7, -4, 0.3, 0.6);
      const s = at(-3.2, 0); sign(g, spot.sign, s.x, 1.2, s.z, ry, 2.8, '#2f5d3a', '#ffffff');
      const post = cylinder(0.05, 0.05, 1, mat('#4a3626'), 0, 0.5, 0, 6); put(post, -3.25, 0); rect(-3.4, -0.2, -3.1, 0.2);
      break;
    }
    case 'beach': {
      const p0 = at(-14, -9), p1 = at(1.2, 9);
      ground(g, Math.min(p0.x, p1.x), Math.min(p0.z, p1.z), Math.max(p0.x, p1.x), Math.max(p0.z, p1.z), groundTexture('#ecd7aa', ['#d9c08e', '#f7e7c4'], z.seed + 9), '#ffffff', 6, 0.02);
      for (const [a, b, c] of [[-3, -4, spot.color], [-3.5, 4, '#2f8fcf'], [-7, 0, '#f2b134']] as const) { const p = at(a, b); umbrella(g, p.x, p.z, c, '#ffffff', 2.3); rect(a - 0.15, b - 0.15, a + 0.15, b + 0.15); const towel = box(0.9, 0.02, 1.8, mat(c, 0.9), 0, 0.03, 0); put(towel, a - 0.4, b + 1.2); }
      const sun = at(-3.4, 5.2); extra(g, talkers, sun.x, sun.z, ry + Math.PI / 2, z.seed + index * 31 + 5, { top: 'tshirt', bottom: 'shorts' }, 'ground', 'smile', shadows);
      // The lifeguard chair.
      const chair = new THREE.Group();
      for (const s of [-1, 1]) for (const t of [-1, 1]) chair.add(cylinder(0.06, 0.06, 2.4, mat('#f4f1ea', 0.6), s * 0.6, 1.2, t * 0.5, 6));
      chair.add(box(1.4, 0.12, 1.2, mat(spot.color, 0.7), 0, 2.4, 0));
      chair.add(box(1.4, 0.9, 0.1, mat(spot.color, 0.7), 0, 2.9, -0.55));
      put(chair, -10, -4); rect(-10.7, -4.7, -9.3, -3.3);
      const s = at(-10, -4); sign(g, spot.sign, s.x, 3.6, s.z, ry, 2.6, spot.color, '#ffffff');
      break;
    }
    case 'harbor': {
      const p0 = at(-16, -10), p1 = at(-3, 10);
      water(g, Math.min(p0.x, p1.x), Math.min(p0.z, p1.z), Math.max(p0.x, p1.x), Math.max(p0.z, p1.z), '#1b6f8a', '#9fe3f0', 0.01);
      rect(-16, -10, -3, 10);
      const pier = box(2.6, 0.3, 11, mat('#8b6440', 0.9), 0, 0, 0); put(pier, -8.5, -4, 0.15);
      for (const b of [-3, 3]) { const bol = cylinder(0.18, 0.22, 0.6, mat('#2b2b2b', 0.5, 0.4), 0, 0.3, 0, 10); put(bol, -2.6, b); rect(-2.8, b - 0.2, -2.4, b + 0.2, 0.6); }
      const boat = new THREE.Group();
      boat.add(box(5, 1, 1.9, mat(spot.color, 0.6), 0, 0.3, 0));
      boat.add(box(1.8, 1.2, 1.4, mat('#f4f1ea', 0.6), -0.6, 1.3, 0));
      const mast = cylinder(0.06, 0.06, 4, mat('#ddd', 0.4), 1.2, 2.6, 0, 6); boat.add(mast);
      put(boat, -8, 4.5);
      const s = at(-2.4, 0); sign(g, spot.sign, s.x, 1.4, s.z, ry, 2.8, '#1d3b57', '#ffffff');
      const post = cylinder(0.05, 0.05, 1.2, mat('#4a3626'), 0, 0.6, 0, 6); put(post, -2.45, 0); rect(-2.6, -0.2, -2.3, 0.2);
      break;
    }
    case 'museum': {
      facadeBlock(-5, 8, 14, 7, wall);
      for (let k = 0; k < 6; k++) { const b = -5 + k * 2; const col = cylinder(0.3, 0.34, 5.4, mat('#f1ede4', 0.6), 0, 3.1, 0, 14); put(col, -4.2, b); rect(-4.55, b - 0.35, -3.85, b + 0.35); }
      const steps = box(14, 0.4, 1.6, mat('#e2dccf', 0.8), 0, 0.2, 0); put(steps, -2.4, 0); rect(-3.2, -7, -1.6, 7, 0.4);
      const ped = new THREE.Mesh(new THREE.ConeGeometry(8, 1.6, 4, 1), mat('#f1ede4', 0.6)); ped.scale.set(1, 1, 0.25); put(ped, -4.4, 0, 6.6); ped.rotation.y = ry + Math.PI / 4;
      const banner = box(1.1, 3, 0.05, mat(spot.color, 0.7), 0, 0, 0); put(banner, -3.9, 5.8, 4.4);
      break;
    }
    case 'station': {
      // A platform roof on posts, the vehicle behind, the station's name.
      const roofM = box(13, 0.25, 4, mat('#3c4650', 0.6, 0.4), 0, 0, 0); put(roofM, -2.2, 0, 3.3);
      for (const b of [-6, 6]) { const post = cylinder(0.1, 0.1, 3.3, mat('#5a646e', 0.5, 0.5), 0, 1.65, 0, 8); put(post, -2.2, b); rect(-2.35, b - 0.15, -2.05, b + 0.15); }
      const train = new THREE.Group();
      train.add(box(16, 2.8, 2.6, mat(spot.color, 0.5, 0.2), 0, 1.6, 0));
      train.add(box(15.6, 0.9, 2.62, mat('#2a3440', 0.2, 0.4), 0, 2.1, 0));
      put(train, -6, 0);
      rect(-7.4, -8, -4.6, 8);
      const plat = box(16, 0.3, 3, mat('#cfc8bb', 0.9), 0, 0.15, 0); put(plat, -2.4, 0);
      const s = at(-2.1, 0); sign(g, spot.sign, s.x, 2.75, s.z, ry, 4, '#ffffff', '#1d3b57');
      const bench = at(-3.3, 3.5); addBench(g, bench.x, bench.z, ry); rect(-3.65, 2.5, -2.95, 4.5, 0.55);
      sitter(-3.3, 3.2, 0, z.seed + index * 31 + 6, { extras: ['bag'] });
      break;
    }
    case 'stage': {
      const stg = box(10, 0.9, 5, mat('#2b2b30', 0.6), 0, 0.45, 0); put(stg, -5.5, 0);
      rect(-8, -5, -3, 5, 0.9);
      const back = box(10, 5, 0.3, mat(spot.color, 0.7), 0, 0, 0); put(back, -8, 0, 3.4);
      for (const b of [-5.4, 5.4]) { const sp = box(1, 2, 1, mat('#1a1a1a', 0.6), 0, 1, 0); put(sp, -3.5, b); rect(-4, b - 0.5, -3, b + 0.5); }
      const truss = box(10.6, 0.25, 0.25, mat('#9aa1a8', 0.4, 0.6), 0, 0, 0); put(truss, -3.4, 0, 5);
      for (const b of [-5.3, 5.3]) { const leg = cylinder(0.1, 0.1, 5, mat('#9aa1a8', 0.4, 0.6), 0, 2.5, 0, 6); put(leg, -3.4, b); }
      for (let k = 0; k < 4; k++) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), glow(['#ff5fa2', '#46e3d0', '#ffc045', '#b48cff'][k], 1.8)); put(l, -3.4, -3 + k * 2, 4.8); }
      const s = at(-7.8, 0); sign(g, spot.sign, s.x, 4.2, s.z, ry, 6, '#141414', spot.color, true);
      const singer = at(-5.5, 1.5); const sp = extra(g, talkers, singer.x, singer.z, ry, z.seed + index * 31 + 7, {}, 'point', 'smile', shadows); sp.person.root.position.y = 0.9;
      break;
    }
    case 'viewpoint': {
      const rail = box(14, 1.05, 0.12, mat('#3a3f44', 0.4, 0.6), 0, 0, 0); put(rail, -2.6, 0, 0.55);
      rect(-2.8, -7, -2.4, 7);
      rect(-30, -7, -2.6, 7);
      const p0 = at(-30, -7), p1 = at(-2.6, 7);
      const drop = new THREE.Mesh(new THREE.PlaneGeometry(Math.abs(p1.x - p0.x), Math.abs(p1.z - p0.z)), mat('#7c8f6a', 1)); drop.rotation.x = -Math.PI / 2; drop.position.set((p0.x + p1.x) / 2, -14, (p0.z + p1.z) / 2); g.add(drop);
      for (let k = 0; k < 7; k++) { const hill = new THREE.Mesh(new THREE.SphereGeometry(8 + rand() * 8, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(k % 2 ? '#6c8a5a' : '#8a9a6a', 1)); hill.scale.y = 0.5; put(hill, -14 - rand() * 14, -6 + k * 2, -14); }
      const tele = new THREE.Group();
      for (let k = 0; k < 3; k++) { const leg = cylinder(0.04, 0.04, 1.4, mat('#2a2a2a', 0.5, 0.5), Math.cos(k * 2.1) * 0.3, 0.65, Math.sin(k * 2.1) * 0.3, 6); tele.add(leg); }
      const tube = cylinder(0.12, 0.16, 1.1, mat('#f2f2f2', 0.3, 0.4), 0, 1.5, 0, 12); tube.rotation.z = 1.1; tele.add(tube);
      put(tele, -1.8, 4.2); rect(-2.1, 3.9, -1.5, 4.5, 1.4);
      const s = at(-2.5, -4.5); sign(g, spot.sign, s.x, 1.6, s.z, ry, 3, spot.color, '#ffffff');
      break;
    }
    case 'temple': {
      const base = box(9, 1.2, 7, mat('#8b7b66', 0.9), 0, 0, 0); put(base, -6.5, 0, 0.6); rect(-10, -4.5, -3, 4.5, 1.2);
      for (let k = 0; k < 4; k++) { const tier = new THREE.Mesh(new THREE.ConeGeometry(3.6 - k * 0.7, 1.4, 4), mat(k % 2 ? '#3d2f25' : '#5a4636', 0.9)); tier.rotation.y = Math.PI / 4; put(tier, -6.5, 0, 2.2 + k * 1.3); }
      const gateL = box(1.4, 4.2, 1.4, mat(spot.color, 0.8), 0, 0, 0); put(gateL, -2.8, -2.6, 2.1);
      const gateR = gateL.clone(); put(gateR, -2.8, 2.6, 2.1);
      rect(-3.5, -3.3, -2.1, -1.9); rect(-3.5, 1.9, -2.1, 3.3);
      const s = at(-2.6, 0); sign(g, spot.sign, s.x, 4.8, s.z, ry, 4, '#3d2f25', '#f6e7b8');
      break;
    }
    case 'church': {
      const nave = new THREE.Group();
      nave.add(box(7, 6, 10, mat('#f6f2ea', 0.85), 0, 3, 0));
      const tower = box(2.6, 11, 2.6, mat('#f6f2ea', 0.85), 0, 5.5, 3.6); nave.add(tower);
      const cap = new THREE.Mesh(new THREE.ConeGeometry(1.9, 2.4, 4), mat(spot.color, 0.7)); cap.position.set(0, 12.2, 3.6); cap.rotation.y = Math.PI / 4; nave.add(cap);
      const bell = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat('#b8893a', 0.4, 0.6)); bell.rotation.x = Math.PI; bell.position.set(0, 9.2, 3.6); nave.add(bell);
      put(nave, -8.5, 0);
      rect(-13.5, -3.6, -3.5, 3.6);
      const door = at(-3.46, 0); const d = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 3), mat('#6b4a33', 0.7)); d.position.set(door.x, 1.5, door.z); d.rotation.y = ry; g.add(d);
      const s = at(-3.44, 0); sign(g, spot.sign, s.x, 3.9, s.z, ry, 3.6, '#f6f2ea', '#3d2f25');
      break;
    }
  }
}

/** The landmark north of the zone: big, simple and readable from the plaza. */
function landmark(g: THREE.Group, z: ZoneLayout, spinners: THREE.Object3D[]) {
  const L = z.landmark, c = L.color, a = L.accent ?? '#f4efe4';
  const m = (color: string, r = 0.8, met = 0) => solid(color, r, met);
  const root = new THREE.Group();
  root.position.set(0, 0, 70);
  switch (L.kind) {
    case 'cathedral': {
      root.add(box(16, 14, 22, m(c), 0, 7, 4));
      for (const s of [-1, 1]) { root.add(box(5, 28, 5, m(c), s * 6, 14, -7)); const sp = new THREE.Mesh(new THREE.ConeGeometry(3.4, 8, 4), m(a)); sp.position.set(s * 6, 32, -7); sp.rotation.y = Math.PI / 4; root.add(sp); }
      const rose = new THREE.Mesh(new THREE.CircleGeometry(2.4, 24), glow('#ffcf7a', 0.5)); rose.position.set(0, 10, -7.05); rose.rotation.y = Math.PI; root.add(rose);
      break;
    }
    case 'tower': {
      root.add(box(6, 34, 6, m(c), 0, 17, 0));
      for (const s of [1, -1]) { const face = new THREE.Mesh(new THREE.CircleGeometry(2, 24), m('#f6f1dc', 0.5)); face.position.set(0, 28, -3.02 * s); face.rotation.y = s > 0 ? Math.PI : 0; root.add(face); }
      const sp = new THREE.Mesh(new THREE.ConeGeometry(4.4, 10, 4), m(a)); sp.position.set(0, 39, 0); sp.rotation.y = Math.PI / 4; root.add(sp);
      root.add(box(26, 10, 8, m(c), -14, 5, 4));
      break;
    }
    case 'obelisk': {
      root.add(box(5, 1.2, 5, m('#cfc8bb'), 0, 0.6, 0));
      const ob = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 2.2, 34, 4), m(c, 0.7)); ob.position.set(0, 18, 0); ob.rotation.y = Math.PI / 4; root.add(ob);
      const tip = new THREE.Mesh(new THREE.ConeGeometry(1.25, 2.6, 4), m(c, 0.7)); tip.position.set(0, 36.3, 0); tip.rotation.y = Math.PI / 4; root.add(tip);
      break;
    }
    case 'pyramid': {
      for (let k = 0; k < 6; k++) root.add(box(30 - k * 4.6, 3.4, 30 - k * 4.6, m(k % 2 ? c : a, 0.95), 0, 1.7 + k * 3.4, 6));
      root.add(box(6, 4, 6, m(c), 0, 22.4, 6));
      root.add(box(4, 21, 3, m(shade(c, -0.15), 0.95), 0, 10.5, -8.6));
      break;
    }
    case 'castle': {
      root.add(box(34, 9, 12, m(c, 0.95), 0, 4.5, 6));
      for (const s of [-1, 0, 1]) { root.add(cylinder(3, 3.2, s === 0 ? 20 : 14, m(c, 0.95), s * 15, s === 0 ? 10 : 7, 0, 16)); const cap = new THREE.Mesh(new THREE.ConeGeometry(3.6, 5, 16), m(a)); cap.position.set(s * 15, s === 0 ? 22.5 : 16.5, 0); root.add(cap); }
      for (let k = -8; k <= 8; k++) if (k % 2 === 0) root.add(box(1.4, 1.2, 1, m(c, 0.95), k * 2, 9.6, 0.2));
      break;
    }
    case 'windmill': {
      root.add(cylinder(3, 4.4, 14, m(c), 0, 7, 0, 12));
      const cap = new THREE.Mesh(new THREE.ConeGeometry(3.6, 4, 12), m(a)); cap.position.set(0, 16, 0); root.add(cap);
      const hub = new THREE.Group(); hub.position.set(0, 13, -3.6);
      for (let k = 0; k < 4; k++) { const blade = box(1.6, 11, 0.15, m('#f4f1ea', 0.7), 0, 5.5, 0); const arm = new THREE.Group(); arm.add(blade); arm.rotation.z = (k * Math.PI) / 2; hub.add(arm); }
      root.add(hub); spinners.push(hub);
      break;
    }
    case 'temple': {
      root.add(box(22, 3, 16, m('#8b7b66', 0.95), 0, 1.5, 4));
      for (let k = 0; k < 7; k++) { const tier = new THREE.Mesh(new THREE.ConeGeometry(8 - k * 1, 2.6, 4), m(k % 2 ? c : a, 0.9)); tier.rotation.y = Math.PI / 4; tier.position.set(0, 4.4 + k * 2.6, 4); root.add(tier); }
      break;
    }
    case 'opera': {
      root.add(box(40, 3, 18, m('#d9cdb8', 0.9), 0, 1.5, 4));
      for (const [x, s, rot] of [[-12, 1.2, -0.4], [-2, 1.5, -0.3], [9, 1.1, -0.35]] as const) {
        const shell = new THREE.Mesh(new THREE.SphereGeometry(9 * s, 20, 12, 0, Math.PI, 0, Math.PI / 2), m(c, 0.35, 0.1));
        shell.position.set(x, 3, 4); shell.rotation.set(0, Math.PI / 2, rot); shell.scale.set(1, 1.5, 0.55); root.add(shell);
      }
      break;
    }
    case 'arch': {
      for (const s of [-1, 1]) root.add(box(6, 22, 8, m(c), s * 9, 11, 0));
      root.add(box(24, 7, 8, m(c), 0, 25.5, 0));
      root.add(box(25, 1.2, 8.6, m(a), 0, 29.6, 0));
      break;
    }
    case 'mountain': {
      const peak = new THREE.Mesh(new THREE.ConeGeometry(42, 46, 9), new THREE.MeshStandardMaterial({ color: c, roughness: 1, flatShading: true })); peak.position.set(0, 23, 30); root.add(peak);
      const snow = new THREE.Mesh(new THREE.ConeGeometry(17, 18.5, 9), m('#f6f8fb', 0.8)); snow.position.set(0, 37, 30); root.add(snow);
      for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.ConeGeometry(26, 28, 8), new THREE.MeshStandardMaterial({ color: shade(c, 0.12), roughness: 1, flatShading: true })); p.position.set(s * 40, 14, 40); root.add(p); }
      break;
    }
    case 'volcano': {
      const v = new THREE.Mesh(new THREE.CylinderGeometry(8, 40, 34, 14, 1, true), new THREE.MeshStandardMaterial({ color: c, roughness: 1, flatShading: true, side: THREE.DoubleSide })); v.position.set(0, 17, 30); root.add(v);
      const smoke = new THREE.Mesh(new THREE.SphereGeometry(7, 12, 10), new THREE.MeshStandardMaterial({ color: '#d8d8d8', transparent: true, opacity: 0.6 })); smoke.position.set(0, 38, 30); smoke.scale.y = 0.6; root.add(smoke);
      break;
    }
    case 'lighthouse': {
      root.add(cylinder(2.4, 3.4, 24, m('#f6f2ea', 0.7), 0, 12, 0, 16));
      for (let k = 0; k < 3; k++) root.add(cylinder(2.5 + (2 - k) * 0.3, 2.6 + (2 - k) * 0.3, 2.4, m(c, 0.7), 0, 4 + k * 7, 0, 16));
      root.add(cylinder(1.8, 1.8, 2.4, glow('#ffe6a0', 1.4), 0, 25.2, 0, 12));
      const cap = new THREE.Mesh(new THREE.ConeGeometry(2.6, 2.4, 16), m(c)); cap.position.set(0, 27.6, 0); root.add(cap);
      break;
    }
    case 'dome': {
      root.add(box(22, 12, 22, m(a), 0, 6, 4));
      root.add(cylinder(7.5, 7.5, 5, m(a), 0, 14.5, 4, 24));
      const dome = new THREE.Mesh(new THREE.SphereGeometry(7.6, 28, 16, 0, Math.PI * 2, 0, Math.PI / 2), m(c, 0.3, 0.6)); dome.position.set(0, 17, 4); root.add(dome);
      break;
    }
    case 'wall': {
      root.add(box(70, 12, 5, m(c, 0.95), 0, 6, 0));
      for (let k = -17; k <= 17; k++) if (k % 2 === 0) root.add(box(1.6, 1.6, 5.2, m(c, 0.95), k * 2, 12.8, 0));
      for (const s of [-1, 1]) root.add(box(8, 18, 8, m(shade(c, -0.08), 0.95), s * 20, 9, 0));
      const gate = new THREE.Mesh(new THREE.CircleGeometry(3.4, 20, 0, Math.PI), m('#2a221c', 0.9)); gate.position.set(0, 4.2, -2.56); gate.rotation.y = Math.PI; root.add(gate);
      root.add(box(6.8, 4.2, 0.1, m('#2a221c', 0.9), 0, 2.1, -2.56));
      break;
    }
  }
  root.traverse(o => { o.castShadow = true; });
  g.add(root);
  if (L.label) sign(g, L.label, 0, 2.2, 48.1, Math.PI, 7, '#1f2a37', '#f6e7b8');
}
