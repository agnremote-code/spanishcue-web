import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Original procedural fungi. Every walkable cap keeps its upper surface within
// a few centimetres of the engine's flat collision disk, so feet never float or
// sink; the silhouette (dome, funnel, umbrella, bell, bracket) lives below the
// rim and in the stem, where it reads as a real mushroom.
export type Shape = 'dome' | 'funnel' | 'flat' | 'bell' | 'ball' | 'shelf' | 'stump';
export type SpeciesStyle = {
  shape: Shape; cap: string; rim?: string; stem: string; gill: string; depth: number;
  stemWidth: number; emissive?: string; glow?: number; warts?: string; ring?: boolean; volva?: boolean; translucent?: boolean; scales?: string;
};
export const SPECIES: Record<string, SpeciesStyle> = {
  bolete: { shape: 'dome', cap: '#8a5631', rim: '#b07a46', stem: '#e2d3b0', gill: '#d9c27c', depth: .55, stemWidth: .3 },
  stump: { shape: 'stump', cap: '#6f8c42', stem: '#6b4f33', gill: '#a58a63', depth: .2, stemWidth: 1 },
  chanterelle: { shape: 'funnel', cap: '#f0a52a', rim: '#ffc95a', stem: '#f2b54a', gill: '#e9962a', depth: .55, stemWidth: .2 },
  oyster: { shape: 'flat', cap: '#e8dcc4', rim: '#f6efe0', stem: '#efe6d2', gill: '#f4ecd9', depth: .35, stemWidth: .2 },
  amanita: { shape: 'dome', cap: '#cf2a1f', rim: '#e8452d', stem: '#f6f0e1', gill: '#fbf5e6', depth: .62, stemWidth: .2, warts: '#fffaf0', ring: true, volva: true },
  violet: { shape: 'dome', cap: '#3b2147', rim: '#7a4a96', stem: '#cfc6d6', gill: '#5d3b6c', depth: .6, stemWidth: .2, emissive: '#2a0d3a', glow: .25 },
  glow: { shape: 'dome', cap: '#2fb6c8', rim: '#8ff0ff', stem: '#bfefff', gill: '#58e6ff', depth: .5, stemWidth: .2, emissive: '#0d8fb0', glow: .9, translucent: true },
  spiral: { shape: 'dome', cap: '#9b52d8', rim: '#e3a6ff', stem: '#b9e6ff', gill: '#d78cff', depth: .45, stemWidth: .17, emissive: '#5a1f99', glow: .55 },
  parasol: { shape: 'flat', cap: '#d6c09a', rim: '#ead9b8', stem: '#cdb894', gill: '#f3ead6', depth: .3, stemWidth: .11, scales: '#6e4a2c', ring: true },
  shelf: { shape: 'shelf', cap: '#d9802e', rim: '#f2d29c', stem: '#5e4a35', gill: '#f0e2c4', depth: .35, stemWidth: 0 },
  ghost: { shape: 'dome', cap: '#eef4f4', rim: '#ffffff', stem: '#f4f7f6', gill: '#dfe8e6', depth: .7, stemWidth: .12, emissive: '#9fc9c4', glow: .35, translucent: true },
  sky: { shape: 'dome', cap: '#f3e9ff', rim: '#ffffff', stem: '#eee6f6', gill: '#d9c8ef', depth: .5, stemWidth: .1, warts: '#f4c95d', emissive: '#6b5a93', glow: .18 },
  crown: { shape: 'dome', cap: '#f2c25b', rim: '#fff0b8', stem: '#f5e7c6', gill: '#fbe6a9', depth: .55, stemWidth: .24, warts: '#fff7d9', emissive: '#a8681a', glow: .45, ring: true },
  bouncer: { shape: 'dome', cap: '#e8b93a', rim: '#ffe28a', stem: '#f1e3b8', gill: '#f6dd8f', depth: .5, stemWidth: .22, emissive: '#7a4d00', glow: .35 },
  inkcap: { shape: 'bell', cap: '#2b2233', rim: '#0f0c13', stem: '#ece6dc', gill: '#1a141f', depth: 1.7, stemWidth: .2 },
  puffball: { shape: 'ball', cap: '#efe6d0', stem: '#efe6d0', gill: '#efe6d0', depth: 1, stemWidth: .5 },
};

type Profile = [number, number][];
/** Upper surface, normalised to radius 1 at the walkable edge. */
function topProfile(shape: Shape, depth: number): Profile {
  const d = depth;
  switch (shape) {
    case 'funnel': return [[0, -.02], [.55, -.02], [.9, .015], [1.02, .07], [1.1, .1], [1.13, .07]];
    case 'flat': return [[0, .035], [.18, .02], [.6, 0], [.95, -.025], [1.12, -.09], [1.22, -.2 * d / .3], [1.24, -.27 * d / .3]];
    case 'bell': return [[0, 0], [.35, -.06], [.65, -.3], [.86, -.8], [.97, -1.35], [1, -d]];
    case 'ball': return [[0, .03], [.5, .01], [.85, -.12], [1.04, -.42], [1.08, -.7], [1, -.95], [.72, -1.14], [.32, -1.22], [0, -1.24]];
    case 'shelf': return [[0, .02], [.6, .01], [.95, -.03], [1.08, -.12], [1.12, -.22]];
    case 'stump': return [[0, .04], [.7, .03], [.97, 0], [1.03, -.06]];
    default: return [[0, .05], [.45, .04], [.78, -.005], [.97, -.08], [1.1, -.25 * d], [1.16, -.52 * d], [1.13, -.82 * d], [1.04, -d]];
  }
}
/** Underside from the rim to where the stem joins: the gills. */
function gillProfile(shape: Shape, depth: number, stem: number): Profile {
  const top = topProfile(shape, depth), rim = top[top.length - 1];
  if (shape === 'funnel') return [[1.13, .07], [.95, -.06], [.65, -.28], [.38, -.55], [stem, -.8]];
  if (shape === 'ball' || shape === 'stump') return [];
  return [rim, [rim[0] * .7, rim[1] * .9 + .02], [Math.max(stem, .1), rim[1] * .72 + .04]];
}
function lathe(profile: Profile, scaleR: number, scaleY: number, segments: number, phi = Math.PI * 2) {
  return new THREE.LatheGeometry(profile.map(([x, y]) => new THREE.Vector2(Math.max(.0001, x * scaleR), y * scaleY)), segments, 0, phi);
}
/** Ragged rims and asymmetry: a small radial wobble, fixed per seed. */
function wobble(geometry: THREE.BufferGeometry, amount: number, seed: number, keepTop = 0) {
  const p = geometry.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), a = Math.atan2(z, x), r = Math.hypot(x, z);
    if (y > keepTop) continue;
    const k = 1 + amount * (Math.sin(a * 5 + seed) * .6 + Math.sin(a * 11 + seed * 2.3) * .4);
    p.setXYZ(i, Math.cos(a) * r * k, y, Math.sin(a) * r * k);
  }
  geometry.computeVertexNormals();
  return geometry;
}
export function capGeometry(shape: Shape, r: number, depth: number, seed = 1, segments = 40) {
  const g = lathe(topProfile(shape, depth), r, r, segments);
  return shape === 'stump' ? g : wobble(g, shape === 'funnel' ? .05 : .025, seed, -.05 * r);
}
export function gillGeometry(shape: Shape, r: number, depth: number, stemFraction: number, seed = 1, segments = 40) {
  const profile = gillProfile(shape, depth, stemFraction);
  if (!profile.length) return null;
  return wobble(lathe(profile, r, r, segments), shape === 'funnel' ? .05 : .025, seed, 99);
}
/** Unit-height stem: a bulbous base, gentle taper and a flared top. */
export function stemGeometry(radius: number, height: number, segments = 14, bulb = 1.35) {
  const pts: Profile = [[radius * bulb, 0], [radius * bulb * 1.02, .03], [radius * 1.08, .12], [radius, .35], [radius * .9, .75], [radius * .92, .94], [radius * 1.18, 1]];
  return new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y * height)), segments);
}
/** A tube that winds upward: for strange, twisted mushrooms. */
export function spiralStemGeometry(radius: number, height: number, turns = 1.4) {
  const points = Array.from({ length: 24 }, (_, i) => { const t = i / 23; return new THREE.Vector3(Math.cos(t * turns * Math.PI * 2) * radius * 1.8 * (1 - t * .6), t * height, Math.sin(t * turns * Math.PI * 2) * radius * 1.8 * (1 - t * .6)); });
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 48, radius, 10, false);
}
export function ringGeometry(radius: number) {
  return new THREE.LatheGeometry([[radius * 1.05, .08], [radius * 1.9, -.12], [radius * 2.2, -.4], [radius * 2.05, -.45], [radius * 1.5, -.15], [radius * 1.02, -.02]].map(([x, y]) => new THREE.Vector2(x, y * radius * 2)), 18);
}

// ---------------------------------------------------------------- instanced decor
// One merged, vertex-coloured mesh per species: cap, gills and stem in one draw call.
function colored(geometry: THREE.BufferGeometry, color: string) {
  const g = geometry.index ? geometry.toNonIndexed() : geometry;
  const c = new THREE.Color(color), n = g.attributes.position.count, data = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) data.set([c.r, c.g, c.b], i * 3);
  g.setAttribute('color', new THREE.BufferAttribute(data, 3));
  for (const key of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(key)) g.deleteAttribute(key);
  return g;
}
/** A small mushroom of total height ~1 with its base at y=0. */
export function decorMushroomGeometry(name: string, detail = 18) {
  const s = SPECIES[name] ?? SPECIES.bolete;
  const parts: THREE.BufferGeometry[] = [];
  if (s.shape === 'ball') {
    const ball = lathe(topProfile('ball', 1), .42, .42, detail).translate(0, .5, 0);
    parts.push(colored(ball, s.cap));
  } else {
    const capR = s.shape === 'bell' ? .26 : s.shape === 'flat' ? .48 : s.shape === 'funnel' ? .34 : .38;
    const capDrop = s.shape === 'bell' ? capR * s.depth : capR * s.depth * .7;
    const stemH = s.shape === 'flat' ? 1.0 : s.shape === 'bell' ? .9 : .62;
    const stemR = Math.max(.045, capR * (s.stemWidth || .2) * 1.15);
    parts.push(colored(stemGeometry(stemR, stemH, 8), s.stem));
    const cap = capGeometry(s.shape === 'shelf' ? 'dome' : s.shape, capR, s.depth, 3, detail).translate(0, stemH + capDrop * .55, 0);
    parts.push(colored(cap, s.cap));
    const gills = gillGeometry(s.shape === 'shelf' ? 'dome' : s.shape, capR, s.depth, stemR / capR, 3, detail);
    if (gills) parts.push(colored(gills.translate(0, stemH + capDrop * .55, 0), s.gill));
  }
  const merged = mergeGeometries(parts, false)!;
  for (const p of parts) p.dispose();
  merged.computeVertexNormals();
  return merged;
}
/** A bracket fungus for trunks: a layered half-fan on +x, origin at the trunk surface. */
export function bracketGeometry() {
  const parts = [0, 1, 2].map(i => colored(lathe(topProfile('shelf', .3), .5 - i * .1, .5, 10, Math.PI).translate(0, -i * .16, 0), ['#d9802e', '#eaa75a', '#f2d29c'][i]));
  const merged = mergeGeometries(parts, false)!;
  for (const p of parts) p.dispose();
  merged.computeVertexNormals();
  return merged;
}
/** Height of a cap's upper surface at radius fraction q (0 centre, ~1 rim), in units of r. */
export function capSurfaceY(shape: Shape, depth: number, q: number) {
  const profile = topProfile(shape, depth);
  for (let i = 1; i < profile.length; i++) {
    const [x0, y0] = profile[i - 1], [x1, y1] = profile[i];
    if (q <= x1) return y0 + (y1 - y0) * Math.max(0, (q - x0) / Math.max(1e-6, x1 - x0));
  }
  return profile[profile.length - 1][1];
}
/** Where the stem meets the gills, in units of r below the walking surface. */
export function stemAttachY(shape: Shape, depth: number) {
  const g = gillProfile(shape, depth, .2);
  return g.length ? g[g.length - 1][1] : topProfile(shape, depth).at(-1)![1];
}
