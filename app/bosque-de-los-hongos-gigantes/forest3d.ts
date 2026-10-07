import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { PLATFORMS, ZONES, SPAWN, columnClear } from './engine.mjs';
import { SPECIES, capGeometry, gillGeometry, stemGeometry, spiralStemGeometry, ringGeometry, decorMushroomGeometry, bracketGeometry, capSurfaceY, stemAttachY, type SpeciesStyle } from './mushrooms3d';

export type ForestState = { visited: string[]; next: string | null; unlocked: boolean };
export type Forest = {
  root: THREE.Group; solids: THREE.Object3D[];
  update: (time: number, player: THREE.Vector3, state?: ForestState) => void;
  celebrate: (zone: string) => void;
  dispose: () => void;
};

// ------------------------------------------------------------ atmosphere
// The climb changes the air: warm forest haze, golden light among edible caps,
// a violet tint in the poison garden, blue gloom among strange fungi, the white
// wall of the mist and finally a clear blue sky above the clouds.
type Band = { y: number; fog: string; density: number; top: string; horizon: string; sun: number; hemi: number };
const BANDS: Band[] = [
  { y: 0, fog: '#a9bf9c', density: .0105, top: '#5f9a8c', horizon: '#cfdcb4', sun: 2.7, hemi: 2.0 },
  { y: 7, fog: '#c7bf93', density: .0095, top: '#6c9c8f', horizon: '#e6d6a6', sun: 3.0, hemi: 2.1 },
  { y: 15, fog: '#a99aae', density: .0105, top: '#5f6f96', horizon: '#d2bccb', sun: 2.6, hemi: 1.9 },
  { y: 23, fog: '#86aab8', density: .0115, top: '#3f6f99', horizon: '#b8d6dc', sun: 2.4, hemi: 1.9 },
  { y: 31, fog: '#b3cbbd', density: .0095, top: '#5f95b2', horizon: '#d8e7d6', sun: 3.0, hemi: 2.1 },
  { y: 39, fog: '#dde6e4', density: .021, top: '#a9c6d6', horizon: '#eef3f1', sun: 2.4, hemi: 2.5 },
  { y: 45, fog: '#d6e7f6', density: .0065, top: '#3f86d8', horizon: '#e4f1ff', sun: 3.5, hemi: 2.2 },
  { y: 58, fog: '#d3e6fb', density: .0042, top: '#2c6ccc', horizon: '#dcedff', sun: 3.7, hemi: 2.2 },
];
export type Atmosphere = { fog: THREE.Color; density: number; top: THREE.Color; horizon: THREE.Color; sun: number; hemi: number };
const ca = new THREE.Color(), cb = new THREE.Color();
export function atmosphereAt(y: number, out: Atmosphere = { fog: new THREE.Color(), density: 0, top: new THREE.Color(), horizon: new THREE.Color(), sun: 0, hemi: 0 }) {
  let i = 0;
  while (i < BANDS.length - 2 && y > BANDS[i + 1].y) i++;
  const a = BANDS[i], b = BANDS[i + 1], t = THREE.MathUtils.smoothstep(y, a.y, b.y);
  out.fog.copy(ca.set(a.fog)).lerp(cb.set(b.fog), t);
  out.top.copy(ca.set(a.top)).lerp(cb.set(b.top), t);
  out.horizon.copy(ca.set(a.horizon)).lerp(cb.set(b.horizon), t);
  out.density = a.density + (b.density - a.density) * t;
  out.sun = a.sun + (b.sun - a.sun) * t;
  out.hemi = a.hemi + (b.hemi - a.hemi) * t;
  return out;
}

/** Walkable surfaces share the engine's exact coordinates, radius and top. */
export function buildForest({ low, reducedMotion }: { low: boolean; reducedMotion: boolean }): Forest {
  const root = new THREE.Group();
  const statics = new THREE.Group();
  const dynamic = new THREE.Group();
  root.add(statics, dynamic);
  const solids: THREE.Object3D[] = [];
  const textures: THREE.Texture[] = [];
  const geometries: THREE.BufferGeometry[] = [];
  let seed = 9417;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const pick = <T,>(list: T[]) => list[Math.floor(random() * list.length)];
  const segs = low ? 26 : 40;
  const instanced: THREE.InstancedMesh[] = [];

  // ---------------------------------------------------------- textures
  const canvasTexture = (draw: (c: CanvasRenderingContext2D, size: number) => void, size = 256, repeat = true) => {
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = size;
    const c = canvas.getContext('2d')!;
    draw(c, size);
    const t = new THREE.CanvasTexture(canvas); t.colorSpace = THREE.SRGBColorSpace;
    if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = low ? 2 : 4; textures.push(t); return t;
  };
  const speckle = (c: CanvasRenderingContext2D, size: number, base: string, dark: string, light: string, n: number, streak = false) => {
    c.fillStyle = base; c.fillRect(0, 0, size, size);
    for (let i = 0; i < n; i++) {
      const x = random() * size, y = random() * size;
      c.globalAlpha = .04 + random() * .16; c.fillStyle = random() > .5 ? dark : light;
      if (streak) c.fillRect(x, y, 1 + random() * 3, 8 + random() * 60);
      else { c.beginPath(); c.ellipse(x, y, .6 + random() * 5, .6 + random() * 3, random() * 6, 0, Math.PI * 2); c.fill(); }
    }
    c.globalAlpha = 1;
  };
  const capTex = canvasTexture((c, s) => speckle(c, s, '#ececec', '#8a8a8a', '#ffffff', 2600));
  const gillTex = canvasTexture((c, s) => { c.fillStyle = '#f2f2f2'; c.fillRect(0, 0, s, s); c.fillStyle = '#9a9a9a'; for (let x = 0; x < s; x += 4) { c.globalAlpha = .5 + random() * .4; c.fillRect(x, 0, 1.4, s); } c.globalAlpha = 1; });
  gillTex.repeat.set(6, 1);
  const barkTex = canvasTexture((c, s) => speckle(c, s, '#a08e74', '#2d241a', '#e2d3b5', 3200, true));
  const soilTex = canvasTexture((c, s) => speckle(c, s, '#c9cfae', '#3d4a2c', '#f6f2d0', 3800));
  soilTex.repeat.set(30, 30);
  const mossTex = canvasTexture((c, s) => speckle(c, s, '#d4e2b2', '#3f5a2a', '#f1f8d8', 3000));
  const soft = (c: CanvasRenderingContext2D, s: number, color: string, alpha: number) => { const g = c.createRadialGradient(s / 2, s / 2, 2, s / 2, s / 2, s / 2 - 1); g.addColorStop(0, `rgba(${color},${alpha})`); g.addColorStop(.55, `rgba(${color},${alpha * .45})`); g.addColorStop(1, `rgba(${color},0)`); c.fillStyle = g; c.fillRect(0, 0, s, s); };
  const mistTex = canvasTexture((c, s) => soft(c, s, '244,248,236', .3), 128, false);
  const cloudTex = canvasTexture((c, s) => { for (let i = 0; i < 26; i++) { const x = random() * s, y = random() * s, r = 20 + random() * 60; const g = c.createRadialGradient(x, y, 1, x, y, r); g.addColorStop(0, 'rgba(255,255,255,.75)'); g.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g; c.fillRect(0, 0, s, s); } });
  cloudTex.repeat.set(5, 5);
  const beamTex = canvasTexture((c, s) => { for (let y = 0; y < s; y++) { c.globalAlpha = Math.pow(1 - y / s, 1.6) * .9; c.fillStyle = '#fff3c4'; c.fillRect(s * .3, y, s * .4, 1); c.globalAlpha *= .4; c.fillRect(s * .15, y, s * .7, 1); } c.globalAlpha = 1; }, 128, false);
  const bubbleTex = (label: string, fill: string, ink: string) => canvasTexture((c, s) => {
    c.fillStyle = fill; c.strokeStyle = ink; c.lineWidth = 7;
    c.beginPath(); c.arc(s / 2, s * .44, s * .36, 0, Math.PI * 2); c.fill(); c.stroke();
    c.beginPath(); c.moveTo(s * .42, s * .76); c.lineTo(s * .5, s * .95); c.lineTo(s * .58, s * .76); c.closePath(); c.fill();
    c.fillStyle = ink; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = `700 ${s * .32}px Georgia, serif`; c.fillText(label, s / 2, s * .46);
  }, 128, false);
  const askTex = bubbleTex('¿?', '#fff6dc', '#24402f'), doneTex = bubbleTex('✓', '#f2cd6b', '#3d2a07');

  // ---------------------------------------------------------- materials
  const materialCache = new Map<string, THREE.Material>();
  const mat = (key: string, make: () => THREE.Material) => { let m = materialCache.get(key); if (!m) { m = make(); materialCache.set(key, m); } return m; };
  const standard = (color: string, roughness = .9, map: THREE.Texture | null = null, extra: THREE.MeshStandardMaterialParameters = {}) => mat(`${color}/${roughness}/${map?.uuid ?? ''}/${JSON.stringify(extra)}`, () => new THREE.MeshStandardMaterial({ color, roughness, map, ...extra }) as THREE.Material) as THREE.MeshStandardMaterial;
  const barkMat = standard('#7a6550', 1, barkTex), stoneMat = standard('#8a8c7c', 1, soilTex);
  const capMat = (name: string, s: SpeciesStyle) => mat(`cap/${name}`, () => new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, map: s.shape === 'stump' ? mossTex : capTex, roughness: s.translucent ? .45 : .78, emissive: s.emissive ?? '#000000', emissiveIntensity: s.glow ?? 0 })) as THREE.MeshStandardMaterial;
  const gillMat = (name: string, s: SpeciesStyle) => mat(`gill/${name}`, () => new THREE.MeshStandardMaterial({ color: s.gill, map: gillTex, roughness: .95, side: THREE.DoubleSide, emissive: s.glow && s.glow > .5 ? s.gill : '#000000', emissiveIntensity: s.glow && s.glow > .5 ? .55 : 0 }));
  const stemMat = (name: string, s: SpeciesStyle) => s.shape === 'stump' ? barkMat : mat(`stem/${name}`, () => new THREE.MeshStandardMaterial({ color: s.stem, map: barkTex, roughness: .9, emissive: s.glow && s.glow > .5 ? s.stem : '#000000', emissiveIntensity: s.glow && s.glow > .5 ? .18 : 0 }));

  const place = (g: THREE.BufferGeometry, m: THREE.Material, x = 0, y = 0, z = 0, solid = false, shadow = true, parent: THREE.Object3D = statics) => {
    const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.receiveShadow = true; o.castShadow = shadow && !low; parent.add(o); if (solid) solids.push(o); return o;
  };
  /** Cap colour runs from the centre to a lighter or darker rim. */
  const gradient = (g: THREE.BufferGeometry, inner: string, outer: string, r: number) => {
    const p = g.attributes.position, data = new Float32Array(p.count * 3), a = new THREE.Color(inner), b = new THREE.Color(outer), c = new THREE.Color();
    for (let i = 0; i < p.count; i++) { const t = Math.min(1, Math.hypot(p.getX(i), p.getZ(i)) / (r * 1.15)); c.copy(a).lerp(b, t * t); data.set([c.r, c.g, c.b], i * 3); }
    g.setAttribute('color', new THREE.BufferAttribute(data, 3)); return g;
  };

  // ---------------------------------------------------------- instanced decor
  const decor = new Map<string, { matrices: THREE.Matrix4[]; colors: THREE.Color[] }>();
  const dummy = new THREE.Object3D();
  const addDecor = (name: string, x: number, y: number, z: number, scale: number, tilt = .12, tint = 1) => {
    let list = decor.get(name); if (!list) { list = { matrices: [], colors: [] }; decor.set(name, list); }
    dummy.position.set(x, y, z); dummy.rotation.set((random() - .5) * tilt, random() * Math.PI * 2, (random() - .5) * tilt); dummy.scale.setScalar(scale); dummy.updateMatrix();
    list.matrices.push(dummy.matrix.clone()); list.colors.push(new THREE.Color().setScalar(tint * (.86 + random() * .22)));
  };
  const companion: Record<string, string[]> = {
    bolete: ['bolete', 'puffball'], stump: ['bolete', 'oyster', 'puffball'], chanterelle: ['chanterelle'], oyster: ['oyster', 'chanterelle'],
    amanita: ['amanita', 'inkcap'], violet: ['inkcap', 'violet'], glow: ['glow', 'spiral'], spiral: ['glow'], parasol: ['parasol', 'bolete'],
    shelf: ['oyster'], ghost: ['ghost'], sky: ['sky'], crown: ['glow'], bouncer: ['chanterelle'],
  };
  const warts: { x: number; y: number; z: number; s: number; color: string }[] = [];

  // ---------------------------------------------------------- the walkable climb
  const halos = new Map<string, THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>>();
  const lanterns = new Map<string, THREE.MeshStandardMaterial>();
  const bubbles = new Map<string, THREE.Sprite>();
  const rings: THREE.Mesh[] = [];
  const glowLights: THREE.PointLight[] = [];
  for (const p of PLATFORMS) {
    const s = SPECIES[p.species] ?? SPECIES.bolete;
    const depth = s.depth;
    const capG = gradient(capGeometry(s.shape, p.r, depth, p.x + p.z, segs), s.cap, s.rim ?? s.cap, p.r);
    const cap = place(capG, capMat(p.species, s), p.x, p.y, p.z, true); cap.name = p.id;
    geometries.push(capG);
    const stemR = s.shape === 'stump' ? p.r * .98 : p.species === 'crown' ? 2.1 : Math.max(.45, p.r * s.stemWidth);
    const gills = gillGeometry(s.shape, p.r, depth, Math.min(.9, stemR / p.r), p.x, segs);
    if (gills) { const under = place(gills, gillMat(p.species, s), p.x, p.y, p.z, false, false); under.name = `${p.id}-gills`; }
    const attach = p.y + stemAttachY(s.shape, depth) * p.r + .05;
    if (p.kind === 'shelf' && p.trunk) {
      // An old oak carries the bracket; smaller brackets climb its bark.
      const t = p.trunk, top = Math.min(t.top, p.y + 7), trunk = place(new THREE.CylinderGeometry(t.r * .82, t.r * 1.12, top, 14, 4), barkMat, t.x, top / 2, t.z, true);
      trunk.name = `${p.id}-trunk`;
      treeCrown(t.x, top, t.z, t.r * 2.2);
      for (let k = 0; k < 7; k++) bracketOnTrunk(t.x, t.z, t.r, 3 + random() * (top - 6));
    } else if (s.shape === 'stump') {
      const stump = place(new THREE.CylinderGeometry(p.r * .97, p.r * 1.12, p.y - .05, segs, 2, true), barkMat, p.x, (p.y - .05) / 2, p.z, true);
      stump.name = `${p.id}-stump`;
      for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2 + random(); root3(p.x + Math.cos(a) * p.r * .9, p.z + Math.sin(a) * p.r * .9, a, p.r * .5); }
    } else if (s.shape === 'ball' || attach < .4) {
      // Puffballs rest on the forest floor: no stem.
    } else if (p.species === 'spiral') {
      const stem = place(spiralStemGeometry(stemR * .8, attach), stemMat(p.species, s), p.x, 0, p.z, true); stem.name = `${p.id}-stem`;
    } else {
      const stem = place(stemGeometry(stemR, attach + .2, low ? 10 : 16, s.volva ? 1.7 : 1.35), stemMat(p.species, s), p.x, 0, p.z, true); stem.name = `${p.id}-stem`;
      stem.rotation.y = random() * 6;
      if (s.ring) place(ringGeometry(stemR), gillMat(p.species, s), p.x, attach * .82, p.z, false, false);
      // Families gather at the foot of the large stems.
      if (attach > 2) for (let k = 0; k < (low ? 3 : 6); k++) { const a = random() * Math.PI * 2, d = stemR * 1.4 + .3 + random() * 2.2; addDecor(pick(companion[p.species] ?? ['bolete']), p.x + Math.cos(a) * d, 0, p.z + Math.sin(a) * d, .35 + random() * .9); }
    }
    // Warts, scales and tiny secondary fungi on the cap make the species legible.
    if (s.warts || s.scales) {
      const n = Math.round(8 + p.r * (s.scales ? 7 : 5));
      for (let k = 0; k < n; k++) {
        const q = .12 + Math.sqrt(random()) * 1.0, a = random() * Math.PI * 2;
        warts.push({ x: p.x + Math.cos(a) * q * p.r, y: p.y + capSurfaceY(s.shape, depth, q) * p.r + .01, z: p.z + Math.sin(a) * q * p.r, s: (s.scales ? .1 : .13) + random() * (s.scales ? .1 : .16) * Math.min(1.6, p.r / 3), color: s.warts ?? s.scales! });
      }
    }
    for (let k = 0; k < (low ? 2 : 4); k++) { const a = random() * Math.PI * 2, q = .82 + random() * .12; addDecor(pick(companion[p.species] ?? ['bolete']), p.x + Math.cos(a) * q * p.r, p.y + capSurfaceY(s.shape, depth, q) * p.r, p.z + Math.sin(a) * q * p.r, .18 + random() * .22); }
    if (p.bounce) {
      const ring = place(new THREE.TorusGeometry(p.r * .7, .08, 6, 40), standard('#ffe18a', .5, null, { emissive: '#c58a12', emissiveIntensity: .8 }), p.x, p.y + .08, p.z, false, false, dynamic);
      ring.rotation.x = Math.PI / 2; rings.push(ring);
    }
    if (p.checkpoint && !p.zone) {
      // Safe resting caps carry a ring of moss and pale glow mushrooms.
      for (let k = 0; k < 9; k++) { const a = k / 9 * Math.PI * 2; addDecor('glow', p.x + Math.cos(a) * p.r * .7, p.y, p.z + Math.sin(a) * p.r * .7, .16, .05); }
    }
    if (p.zone) station(p, s);
  }
  // Leading lights: on each cap, a few tiny glow mushrooms on the side facing the next one.
  const route = PLATFORMS.filter(p => !p.id.startsWith('side'));
  for (let i = 0; i < route.length - 1; i++) {
    const a = route[i], b = route[i + 1], dir = Math.atan2(b.z - a.z, b.x - a.x), s = SPECIES[a.species] ?? SPECIES.bolete;
    for (let k = -1; k <= 1; k++) { const ang = dir + k * .32, q = .9; addDecor(a.y > 30 ? 'sky' : a.y > 20 ? 'glow' : 'chanterelle', a.x + Math.cos(ang) * q * a.r, a.y + capSurfaceY(s.shape, s.depth, q) * a.r, a.z + Math.sin(ang) * q * a.r, .2, .05, 1.1); }
  }

  function station(p: (typeof PLATFORMS)[number], s: SpeciesStyle) {
    const zone = ZONES.find(z => z.id === p.zone)!, index = ZONES.indexOf(zone);
    const previous = index ? ZONES[index - 1] : { x: SPAWN.x, z: SPAWN.z };
    const toPrev = Math.atan2(previous.x - p.x, previous.z - p.z);
    const surface = (q: number) => p.y + capSurfaceY(s.shape, s.depth, q) * p.r;
    const at = (angle: number, q: number) => ({ x: p.x + Math.sin(angle) * q * p.r, z: p.z + Math.cos(angle) * q * p.r, y: surface(q) });
    // A wooden sign on the arrival shoulder names the place.
    const signAt = at(toPrev + .9, .74), sign = new THREE.Group(); sign.position.set(signAt.x, signAt.y, signAt.z); sign.rotation.y = toPrev; statics.add(sign);
    for (const x of [-.9, .9]) { const post = new THREE.Mesh(new THREE.CylinderGeometry(.06, .09, 1.6, 6), barkMat); post.position.set(x, .8, 0); post.castShadow = !low; sign.add(post); }
    const canvas = document.createElement('canvas'); canvas.width = 640; canvas.height = 200; const c = canvas.getContext('2d')!;
    c.fillStyle = '#2d4433'; c.fillRect(0, 0, 640, 200); c.strokeStyle = '#c9b27a'; c.lineWidth = 8; c.strokeRect(8, 8, 624, 184);
    c.fillStyle = '#f7ecd0'; c.textAlign = 'center'; c.font = '600 44px Georgia, serif'; c.fillText(zone.place, 320, 92);
    c.fillStyle = '#d6dcbd'; c.font = '26px Arial, sans-serif'; c.fillText(`${String(index + 1).padStart(2, '0')} · ${zone.id === 'final' ? 'LA CIMA' : 'PARADA DE CONVERSACIÓN'}`, 320, 152);
    const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace; textures.push(map);
    const board = new THREE.Mesh(new THREE.BoxGeometry(2.3, .74, .1), barkMat); board.position.y = 1.45; sign.add(board);
    const face = new THREE.MeshStandardMaterial({ map, roughness: 1 });
    for (const side of [-1, 1]) { const plane = new THREE.Mesh(new THREE.PlaneGeometry(2.2, .66), face); plane.position.set(0, 1.45, side * .056); plane.rotation.y = side === 1 ? 0 : Math.PI; sign.add(plane); }
    // Lantern: dim until the conversation here has happened.
    const lampAt = at(toPrev - .95, .76);
    place(new THREE.CylinderGeometry(.05, .07, 1.5, 6), barkMat, lampAt.x, lampAt.y + .75, lampAt.z, false);
    const lamp = new THREE.MeshStandardMaterial({ color: '#fff1c4', emissive: '#ffbf4a', emissiveIntensity: .15, roughness: .3 });
    place(new THREE.SphereGeometry(.2, 12, 8), lamp, lampAt.x, lampAt.y + 1.62, lampAt.z, false, false, dynamic);
    lanterns.set(zone.id, lamp);
    // Halo at the rim reacts when the station is completed.
    const halo = new THREE.Mesh(new THREE.TorusGeometry(p.r * .97, .07, 6, 64), new THREE.MeshBasicMaterial({ color: '#ffe3a0', transparent: true, opacity: 0, depthWrite: false }));
    halo.position.set(p.x, surface(.97) + .06, p.z); halo.rotation.x = Math.PI / 2; dynamic.add(halo); halos.set(zone.id, halo);
    // A speech bubble marks where to talk; it turns into a check once you have.
    const bubble = new THREE.Sprite(new THREE.SpriteMaterial({ map: askTex, transparent: true, depthWrite: false }));
    bubble.position.set(p.x, p.y + 3.6, p.z); bubble.scale.setScalar(1.5); dynamic.add(bubble); bubbles.set(zone.id, bubble);
    // Visual storytelling: each landmark sets up its question.
    const out = toPrev + Math.PI;
    const prop = at(out, .55);
    switch (zone.id) {
      case 'sobre-ti': {
        place(new THREE.BoxGeometry(.6, .7, .35), standard('#3a4f6b', .8), prop.x, prop.y + .35, prop.z);
        place(new THREE.CylinderGeometry(.08, .08, .7, 8).rotateZ(Math.PI / 2), standard('#e8dcb8', .9), prop.x + .5, prop.y + .1, prop.z + .3);
        for (let k = 0; k < 6; k++) { const a = at(out + (k - 2.5) * .25, .82); addDecor('bolete', a.x, a.y, a.z, .4 + random() * .5); }
        break;
      }
      case 'vida-real': {
        const basket = new THREE.LatheGeometry([[.05, 0], [.45, .02], [.58, .25], [.62, .45], [.58, .47]].map(([x, y]) => new THREE.Vector2(x, y)), 16);
        place(basket, standard('#a7743d', 1, barkTex, { side: THREE.DoubleSide }), prop.x, prop.y, prop.z);
        const handle = place(new THREE.TorusGeometry(.55, .04, 6, 20, Math.PI), standard('#8a5e30', 1), prop.x, prop.y + .45, prop.z); handle.rotation.y = random() * 3;
        for (let k = 0; k < 7; k++) addDecor(pick(['bolete', 'chanterelle', 'oyster']), prop.x + (random() - .5) * .6, prop.y + .3, prop.z + (random() - .5) * .6, .28, .6);
        break;
      }
      case 'elige': for (let k = 0; k < 9; k++) { const a = at(out + (random() - .5) * 1.4, .45 + random() * .35); addDecor('chanterelle', a.x, a.y, a.z, .55 + random() * .8, .2, 1.1); } break;
      case 'opinion': { const a = at(out - .25, .55), b = at(out + .25, .55); addDecor('bolete', a.x, a.y, a.z, 1.5, 0); addDecor('bolete', b.x, b.y, b.z, 1.5, 0, .97); break; }
      case 'suposiciones': addDecor('amanita', prop.x, prop.y, prop.z, 2.1, .05, 1.08); break;
      case 'afirmacion': for (let k = 0; k < 16; k++) { const a = at(k / 16 * Math.PI * 2, .9); addDecor(k % 3 ? 'inkcap' : 'violet', a.x, a.y, a.z, .6 + random() * .5); } break;
      case 'compara': {
        for (let k = 0; k < 10; k++) { const a = at(out + (random() - .5) * 1.6, .4 + random() * .45); addDecor(pick(['glow', 'spiral']), a.x, a.y, a.z, .6 + random() * 1.1); }
        if (!low) { const light = new THREE.PointLight('#59e3ff', 6, 16, 2); light.position.set(prop.x, prop.y + 1.5, prop.z); dynamic.add(light); glowLights.push(light); }
        break;
      }
      case 'recuerdos': {
        const bench = new THREE.Group(); bench.position.set(prop.x, prop.y, prop.z); bench.rotation.y = out; statics.add(bench);
        const wood = standard('#7b5a3a', 1, barkTex);
        for (const [w, h, d, y, z] of [[1.8, .1, .45, .5, 0], [1.8, .4, .08, .8, -.22], [.1, .5, .4, .25, 0]] as const) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wood); m.position.set(0, y, z); bench.add(m); if (w < .2) { const m2 = m.clone(); m.position.x = -.8; m2.position.x = .8; bench.add(m2); } }
        break;
      }
      case 'futuro': {
        const tent = place(new THREE.ConeGeometry(1.1, 1.5, 4), standard('#c96a3b', .95), prop.x, prop.y + .75, prop.z); tent.rotation.y = out + Math.PI / 4;
        place(new THREE.SphereGeometry(.18, 10, 8), standard('#fff1c4', .3, null, { emissive: '#ffb347', emissiveIntensity: 1.2 }), prop.x + .9, prop.y + .2, prop.z, false, false);
        break;
      }
      case 'cambia': for (let k = 0; k < 5; k++) { const a = at(random() * 6.28, .3 + random() * .5); addDecor('ghost', a.x, a.y, a.z, .7 + random() * .8); } break;
      case 'contrario': {
        const post = at(out, .45);
        place(new THREE.CylinderGeometry(.06, .08, 2.2, 6), barkMat, post.x, post.y + 1.1, post.z);
        for (const [dy, turn] of [[1.85, .9], [1.45, -1.3]]) { const arrow = place(new THREE.BoxGeometry(1.2, .26, .06), standard('#e9dcb9', 1), post.x, post.y + dy, post.z); arrow.rotation.y = out + turn; }
        break;
      }
      case 'final': {
        for (let k = 0; k < 28; k++) { const a = at(k / 28 * Math.PI * 2, .95); addDecor(k % 2 ? 'glow' : 'sky', a.x, a.y, a.z, .35 + random() * .3); }
        const scope = at(out, .62);
        place(new THREE.CylinderGeometry(.1, .14, 1.1, 10).rotateZ(1.1), standard('#c7a45a', .35, null, { metalness: .7 }), scope.x, scope.y + 1.25, scope.z);
        for (let k = 0; k < 3; k++) { const leg = place(new THREE.CylinderGeometry(.03, .03, 1.2, 5), barkMat, scope.x + Math.cos(k * 2.1) * .25, scope.y + .55, scope.z + Math.sin(k * 2.1) * .25); leg.rotation.z = Math.cos(k * 2.1) * .25; leg.rotation.x = Math.sin(k * 2.1) * .25; }
        const light = new THREE.PointLight('#ffd27a', 5, 24, 2); light.position.set(p.x, p.y + 3, p.z); dynamic.add(light); glowLights.push(light);
        // A crown of golden spires around the rim: the payoff is visible from far below.
        const gold = standard('#f6d27a', .35, null, { emissive: '#d99a2b', emissiveIntensity: .7, metalness: .3 });
        for (let k = 0; k < 14; k++) { const a = k / 14 * Math.PI * 2, rim = at(a, 1.05), h = 1.6 + (k % 2) * 1.2; const spire = place(new THREE.ConeGeometry(.22, h, 6), gold, rim.x, rim.y + h / 2 - .2, rim.z, false, false); spire.rotation.z = Math.cos(a) * -.25; spire.rotation.x = Math.sin(a) * .25; }
        break;
      }
    }
  }

  // ---------------------------------------------------------- trees
  function treeCrown(x: number, top: number, z: number, size: number) {
    if (!columnClear(x, z, size * 1.2, top - size * .4, top + size)) return;
    for (let k = 0; k < (low ? 3 : 5); k++) {
      const a = random() * 6.28, d = k ? size * .65 : 0;
      const crown = place(new THREE.IcosahedronGeometry(size * (.75 + random() * .35), 1), standard(pick(['#3f6b3a', '#507d40', '#5d8a3f', '#466f45']), 1), x + Math.cos(a) * d, top + size * .3 + random() * size * .4, z + Math.sin(a) * d);
      crown.scale.set(1.25, .62, 1.25);
    }
  }
  function root3(x: number, z: number, a: number, length: number) {
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(x - Math.cos(a) * length * .3, length * .45, z - Math.sin(a) * length * .3), new THREE.Vector3(x + Math.cos(a) * length * .3, length * .12, z + Math.sin(a) * length * .3), new THREE.Vector3(x + Math.cos(a) * length, 0, z + Math.sin(a) * length)]);
    place(new THREE.TubeGeometry(curve, 6, length * .12, 5, false), barkMat, 0, 0, 0, false, false);
  }
  function bracketOnTrunk(x: number, z: number, r: number, y: number) {
    const a = random() * Math.PI * 2;
    let list = decor.get('bracket'); if (!list) { list = { matrices: [], colors: [] }; decor.set('bracket', list); }
    dummy.position.set(x + Math.cos(a) * r * .95, y, z + Math.sin(a) * r * .95); dummy.rotation.set(0, -a, 0); dummy.scale.setScalar(1 + random() * 1.6); dummy.updateMatrix();
    list.matrices.push(dummy.matrix.clone()); list.colors.push(new THREE.Color().setScalar(.85 + random() * .2));
  }
  function tree(x: number, z: number, r: number, h: number, crown: number) {
    place(new THREE.CylinderGeometry(r * .62, r, h, 12, 3), barkMat, x, h / 2 - .5, z, true);
    for (let k = 0; k < 4; k++) root3(x, z, k * 1.57 + random(), r * 2.2);
    treeCrown(x, h, z, crown);
    // Leafy boughs at several heights: the climb passes through living trees, not bare poles.
    for (let k = 0; k < (low ? 2 : 3); k++) {
      const a = random() * Math.PI * 2, y = h * (.45 + random() * .4), reach = r + 2 + random() * 2.5, size = 2.2 + random() * 1.8;
      const bx = x + Math.cos(a) * reach, bz = z + Math.sin(a) * reach;
      if (!columnClear(bx, bz, size * 1.25, y - size, y + size)) continue;
      const bough = new THREE.Vector3(bx, y, bz), start = new THREE.Vector3(x, y - 2.5, z);
      const branch = place(new THREE.CylinderGeometry(.14, r * .35, start.distanceTo(bough), 6), barkMat); branch.position.copy(start).add(bough).multiplyScalar(.5); branch.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), bough.clone().sub(start).normalize());
      const leaves = place(new THREE.IcosahedronGeometry(size, 1), standard(pick(['#4f7f3c', '#5f8f45', '#6a9a48', '#3f6e3c']), 1), bx, y + .4, bz); leaves.scale.set(1.3, .6, 1.3);
    }
    for (let k = 0; k < (low ? 2 : 5); k++) bracketOnTrunk(x, z, r * (1 - .3 * random()), 1.5 + random() * h * .6);
  }
  // Inner trees grow between the turns of the climb, never through a cap.
  let inner = 0;
  for (let tries = 0; tries < 400 && inner < (low ? 10 : 18); tries++) {
    const a = random() * Math.PI * 2, R = 8 + random() * 54, x = Math.cos(a) * R, z = Math.sin(a) * R, r = 1.2 + random() * 1.3, h = 22 + random() * 13, crown = 4 + random() * 3;
    if (Math.hypot(x - SPAWN.x, z - SPAWN.z) < 10) continue;
    if (!columnClear(x, z, r * 1.3, 0, h) || !columnClear(x, z, crown * 1.3, h - crown, h + crown * 1.2)) continue;
    tree(x, z, r, h, crown); inner++;
  }
  // The edge of the forest: a deep ring of trunks and canopy.
  for (let i = 0; i < (low ? 24 : 44); i++) {
    const a = i * 2.39996 + random() * .3, R = 68 + random() * 70;
    tree(Math.cos(a) * R, Math.sin(a) * R, 1.6 + random() * 2.4, 26 + random() * 12, 7 + random() * 5);
  }
  // Colossal landmark mushrooms outside the route give scale from every height.
  const giants = [
    { a: .4, R: 92, h: 30, r: 13, sp: 'amanita' }, { a: 1.5, R: 104, h: 52, r: 11, sp: 'sky' }, { a: 2.5, R: 86, h: 22, r: 10, sp: 'chanterelle' },
    { a: 3.4, R: 98, h: 40, r: 14, sp: 'glow' }, { a: 4.3, R: 112, h: 58, r: 12, sp: 'sky' }, { a: 5.2, R: 90, h: 26, r: 11, sp: 'violet' }, { a: 5.9, R: 120, h: 47, r: 15, sp: 'parasol' },
  ];
  for (const g of giants) {
    const s = SPECIES[g.sp], x = Math.cos(g.a) * g.R, z = Math.sin(g.a) * g.R;
    const capG = gradient(capGeometry(s.shape, g.r, s.depth, g.a * 10, segs), s.cap, s.rim ?? s.cap, g.r);
    place(capG, capMat(g.sp, s), x, g.h, z, false);
    const gills = gillGeometry(s.shape, g.r, s.depth, .14, g.a, segs); if (gills) place(gills, gillMat(g.sp, s), x, g.h, z, false, false);
    place(stemGeometry(Math.max(1.2, g.r * .12), g.h + stemAttachY(s.shape, s.depth) * g.r + .3, 14, 1.5), stemMat(g.sp, s), x, 0, z, false);
    if (s.warts) for (let k = 0; k < 30; k++) { const q = .15 + Math.sqrt(random()) * .95, a = random() * 6.28; warts.push({ x: x + Math.cos(a) * q * g.r, y: g.h + capSurfaceY(s.shape, s.depth, q) * g.r, z: z + Math.sin(a) * q * g.r, s: .5 + random() * .7, color: s.warts }); }
  }

  // ---------------------------------------------------------- ground
  const ground = place(new THREE.CylinderGeometry(66, 70, 4, 96), standard('#8d9b62', 1, soilTex), 0, -2, 0, true); ground.name = 'forest-ground-top-0';
  // Rolling hills beyond the play area: depth without walkable surface.
  {
    const rings = 18, sectors = low ? 64 : 96, pos: number[] = [], index: number[] = [];
    for (let i = 0; i <= rings; i++) for (let j = 0; j <= sectors; j++) {
      const R = 64 + Math.pow(i / rings, 1.4) * 230, a = j / sectors * Math.PI * 2;
      const lift = THREE.MathUtils.smoothstep(R, 70, 170) * (10 + Math.sin(a * 3) * 7 + Math.sin(a * 7 + 1) * 4) - .3;
      pos.push(Math.cos(a) * R, lift, Math.sin(a) * R);
      if (i < rings && j < sectors) { const k = i * (sectors + 1) + j; index.push(k, k + sectors + 1, k + 1, k + 1, k + sectors + 1, k + sectors + 2); }
    }
    const hills = new THREE.BufferGeometry(); hills.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); hills.setIndex(index); hills.computeVertexNormals();
    const uv: number[] = []; for (let k = 0; k < pos.length; k += 3) uv.push(pos[k] / 8, pos[k + 2] / 8); hills.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    place(hills, standard('#5d7444', 1, soilTex), 0, 0, 0, false, false);
  }
  // Biome under each part of the route: what grows on the ground there.
  // The ground below the first turn takes the biome of the caps above it; deeper in, the old forest.
  const lowCaps = PLATFORMS.filter(p => p.y < 22);
  const biomeAt = (x: number, z: number) => { let best = lowCaps[0], d = Infinity; for (const p of lowCaps) { const k = Math.hypot(p.x - x, p.z - z); if (k < d) { d = k; best = p; } } return d > 13 ? 5 : Math.min(best.stage, 4); };
  const BIOME = [
    { mush: ['bolete', 'bolete', 'puffball', 'parasol'], flowers: ['#f2efe0', '#f3d36b', '#d9b2c4'], moss: '#6d8a43' },
    { mush: ['bolete', 'oyster', 'puffball', 'parasol'], flowers: ['#f6d77a', '#f0f0e0', '#c9d97a'], moss: '#7a9445' },
    { mush: ['chanterelle', 'chanterelle', 'oyster', 'bolete'], flowers: ['#f7a536', '#ffd25a', '#f6e7a6'], moss: '#8a9a3f' },
    { mush: ['amanita', 'inkcap', 'violet', 'amanita'], flowers: ['#9e3bc0', '#d23a5a', '#5a2a6e'], moss: '#4c5f3b' },
    { mush: ['glow', 'spiral', 'ghost', 'glow'], flowers: ['#59d8ff', '#7a7bff', '#b8f3ff'], moss: '#3f6458' },
    { mush: ['bolete', 'inkcap', 'glow', 'puffball', 'bolete'], flowers: ['#e9f0ff', '#8fb6ff', '#f2efe0'], moss: '#4f6b3d' },
  ];
  // Mushroom families on the forest floor: one big, many small.
  const pathClear = (x: number, z: number, margin: number) => PLATFORMS.slice(0, 6).every(p => Math.hypot(p.x - x, p.z - z) > margin) && Math.hypot(x - SPAWN.x, z - SPAWN.z) > margin + 2;
  for (let i = 0; i < (low ? 80 : 160); i++) {
    const a = random() * Math.PI * 2, R = 4 + Math.sqrt(random()) * 60, x = Math.cos(a) * R, z = Math.sin(a) * R;
    const big = 1.2 + random() * 2.4;
    if (!columnClear(x, z, big * .6 + .5, 0, big * 1.3)) continue;
    const biome = BIOME[biomeAt(x, z)], name = pick(biome.mush);
    if (pathClear(x, z, 4)) addDecor(name, x, 0, z, big, .1);
    for (let k = 0; k < 3 + Math.floor(random() * 7); k++) { const b = random() * Math.PI * 2, d = big * .5 + random() * 2.4; addDecor(random() > .3 ? name : pick(biome.mush), x + Math.cos(b) * d, 0, z + Math.sin(b) * d, .25 + random() * .7); }
  }
  // Fallen logs with oyster shelves; rocks; moss mounds.
  for (let i = 0; i < (low ? 8 : 14); i++) {
    const a = random() * 6.28, R = 10 + random() * 52, x = Math.cos(a) * R, z = Math.sin(a) * R, len = 6 + random() * 8, rot = random() * 3.14;
    if (!columnClear(x, z, len / 2 + 1, 0, 2) || !pathClear(x, z, len / 2 + 2)) continue;
    const log = place(new THREE.CylinderGeometry(.7, .85, len, 12).rotateZ(Math.PI / 2), barkMat, x, .6, z); log.rotation.y = rot;
    for (let k = 0; k < 6; k++) { const t = (random() - .5) * len * .8; addDecor(pick(['oyster', 'bolete', 'puffball']), x + Math.cos(rot) * t + (random() - .5) * .4, 1.1, z - Math.sin(rot) * t + (random() - .5) * .4, .3 + random() * .35, .4); }
  }
  const instancedMesh = (geometry: THREE.BufferGeometry, material: THREE.Material, count: number, fill: (i: number, m: THREE.InstancedMesh) => void, shadow = false) => {
    const mesh = new THREE.InstancedMesh(geometry, material, Math.max(1, count)); mesh.count = count; mesh.receiveShadow = true; mesh.castShadow = shadow && !low;
    for (let i = 0; i < count; i++) fill(i, mesh); mesh.instanceMatrix.needsUpdate = true; if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true; root.add(mesh); instanced.push(mesh); return mesh;
  };
  const rockCount = low ? 90 : 180;
  instancedMesh(new THREE.IcosahedronGeometry(1, 0), stoneMat, rockCount, (i, m) => { const a = random() * 6.28, R = 6 + random() * 58; dummy.position.set(Math.cos(a) * R, .1, Math.sin(a) * R); dummy.rotation.set(random(), random() * 6, random()); dummy.scale.set(.3 + random() * 1.1, .25 + random() * .5, .3 + random() * 1); dummy.updateMatrix(); m.setMatrixAt(i, dummy.matrix); });
  const moundCount = low ? 110 : 220;
  instancedMesh(new THREE.IcosahedronGeometry(1, 1), standard('#ffffff', 1, mossTex), moundCount, (i, m) => {
    const a = random() * 6.28, R = 3 + random() * 60, x = Math.cos(a) * R, z = Math.sin(a) * R;
    dummy.position.set(x, 0, z); dummy.rotation.set(0, random() * 6, 0); dummy.scale.set(.4 + random() * .9, .25 + random() * .45, .4 + random() * .9); dummy.updateMatrix();
    m.setMatrixAt(i, dummy.matrix); m.setColorAt(i, new THREE.Color(BIOME[biomeAt(x, z)].moss).multiplyScalar(.9 + random() * .3));
  });
  const grassCount = low ? 1600 : 4200;
  const grassGeometry = new THREE.BufferGeometry();
  grassGeometry.setAttribute('position', new THREE.Float32BufferAttribute([-.07, 0, 0, .07, 0, 0, -.05, .28, .035, .05, .28, .035, -.02, .49, .09, .02, .49, .09, .035, .66, .15], 3));
  grassGeometry.setIndex([0, 1, 2, 1, 3, 2, 2, 3, 4, 3, 5, 4, 4, 5, 6]); grassGeometry.computeVertexNormals();
  instancedMesh(grassGeometry, new THREE.MeshStandardMaterial({ color: '#ffffff', side: THREE.DoubleSide, roughness: 1 }), grassCount, (i, m) => {
    const a = random() * Math.PI * 2, r = Math.sqrt(random()) * 64; dummy.position.set(Math.cos(a) * r, 0, Math.sin(a) * r); dummy.rotation.set((random() - .5) * .3, random() * Math.PI, (random() - .5) * .25); dummy.scale.setScalar(.35 + random() * .9); dummy.updateMatrix();
    m.setMatrixAt(i, dummy.matrix); m.setColorAt(i, new THREE.Color().setHSL(.2 + random() * .1, .35 + random() * .2, .25 + random() * .15));
  });
  const leafGeo = new THREE.BufferGeometry(); leafGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, .18, .04, .25, 0, .1, .56, -.18, .04, .25], 3)); leafGeo.setIndex([0, 1, 2, 0, 2, 3]); leafGeo.computeVertexNormals();
  const fernCount = low ? 1600 : 4200;
  {
    const ferns = new THREE.InstancedMesh(leafGeo, new THREE.MeshStandardMaterial({ color: '#5a8a4b', side: THREE.DoubleSide, roughness: .9 }), fernCount);
    let fi = 0;
    while (fi < fernCount) {
      const a = random() * 6.28, r = 5 + random() * 58, cx = Math.cos(a) * r, cz = Math.sin(a) * r, scale = .7 + random() * 1.5;
      for (let f = 0; f < 6 && fi < fernCount; f++) for (let l = 0; l < 7 && fi < fernCount; l++) for (const side of [-1, 1]) { if (fi >= fernCount) break; const angle = f * Math.PI / 3; const dist = l * .18 * scale; dummy.position.set(cx + Math.sin(angle) * dist, Math.sin(l / 8 * Math.PI) * .65 * scale, cz + Math.cos(angle) * dist); dummy.rotation.set(-.4, angle + side * .9, side * .1); dummy.scale.setScalar((1 - l / 9) * scale); dummy.updateMatrix(); ferns.setMatrixAt(fi++, dummy.matrix); }
    }
    ferns.receiveShadow = true; root.add(ferns); instanced.push(ferns);
  }
  const flowerCount = low ? 260 : 620;
  instancedMesh(new THREE.IcosahedronGeometry(.11, 0), standard('#ffffff', .7), flowerCount, (i, m) => {
    const a = random() * 6.28, R = 5 + random() * 58, x = Math.cos(a) * R, z = Math.sin(a) * R;
    dummy.position.set(x, .3 + random() * .3, z); dummy.rotation.set(random(), random(), random()); dummy.scale.set(1, .55, 1); dummy.updateMatrix();
    m.setMatrixAt(i, dummy.matrix); m.setColorAt(i, new THREE.Color(pick(BIOME[biomeAt(x, z)].flowers)));
  });

  // Vines hang from the canopy caps and the oak brackets.
  {
    const vines: THREE.BufferGeometry[] = [];
    for (const p of PLATFORMS) {
      if (p.y < 20 || p.y > 42 || random() > .6) continue;
      for (let k = 0; k < 3; k++) {
        const a = random() * 6.28, x = p.x + Math.cos(a) * p.r * .95, z = p.z + Math.sin(a) * p.r * .95, top = p.y - .4, len = 3 + random() * 6;
        vines.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(x, top, z), new THREE.Vector3(x + .3, top - len * .5, z - .2), new THREE.Vector3(x - .2, top - len, z + .3)]), 8, .045, 4, false));
      }
    }
    if (vines.length) { const merged = mergeGeometries(vines, false)!; for (const v of vines) v.dispose(); place(merged, standard('#4e7a3a', 1), 0, 0, 0, false, false); }
  }

  // ---------------------------------------------------------- mist, clouds, sky life
  const mist: THREE.Sprite[] = [];
  const mistMaterial = new THREE.SpriteMaterial({ map: mistTex, transparent: true, opacity: .55, depthWrite: false });
  for (let i = 0; i < (low ? 16 : 34); i++) {
    const low_ = i % 3 === 0, p = pick(PLATFORMS.filter(q => low_ ? q.y < 8 : q.y > 34 && q.y < 46));
    const s = new THREE.Sprite(mistMaterial); s.position.set(p.x + (random() - .5) * 20, low_ ? 1.5 + random() * 3 : p.y - 3 + random() * 7, p.z + (random() - .5) * 20); s.scale.set(18 + random() * 18, 5 + random() * 6, 1); dynamic.add(s); mist.push(s);
  }
  // A sea of clouds: a soft layer seen from above, puffs that the climb passes through.
  const cloudMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, emissive: '#dfe9f5', emissiveIntensity: .35 });
  const puffs: THREE.Matrix4[] = [];
  for (let i = 0; i < (low ? 60 : 130); i++) {
    const a = random() * 6.28, R = 6 + Math.sqrt(random()) * 175, x = Math.cos(a) * R, z = Math.sin(a) * R, y = 41.5 + random() * 3.5;
    if (!columnClear(x, z, 9, y - 6, y + 4)) continue;
    for (let k = 0; k < 5; k++) { const s = 2.5 + random() * 5; dummy.position.set(x + (random() - .5) * 8, y + (random() - .5) * 1.5, z + (random() - .5) * 8); dummy.rotation.set(0, random() * 6, 0); dummy.scale.set(s * 1.5, s * .5, s); dummy.updateMatrix(); puffs.push(dummy.matrix.clone()); }
  }
  const clouds = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, low ? 1 : 2), cloudMat, puffs.length); puffs.forEach((m, i) => clouds.setMatrixAt(i, m)); root.add(clouds); instanced.push(clouds);
  const sea = new THREE.Mesh(new THREE.CircleGeometry(300, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: cloudTex, color: '#ffffff', transparent: true, opacity: .92, depthWrite: false, fog: true }));
  sea.position.y = 43; dynamic.add(sea);
  const birds: { mesh: THREE.Mesh; r: number; y: number; speed: number; phase: number }[] = [];
  const birdGeo = new THREE.BufferGeometry(); birdGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, .25, -1, .2, -.1, 0, 0, -.2, 0, 0, .25, 0, 0, -.2, 1, .2, -.1], 3)); birdGeo.computeVertexNormals();
  const birdMat = new THREE.MeshBasicMaterial({ color: '#36404f', side: THREE.DoubleSide });
  for (let i = 0; i < (low ? 4 : 8); i++) { const m = new THREE.Mesh(birdGeo, birdMat); m.scale.setScalar(.8 + random() * .5); dynamic.add(m); birds.push({ mesh: m, r: 35 + random() * 60, y: 60 + random() * 14, speed: .05 + random() * .05, phase: random() * 6.28 }); }
  // Spores drift on the climb, coloured by the zone they float in.
  const sporeCount = low ? 320 : 760, sporePos = new Float32Array(sporeCount * 3), sporeCol = new Float32Array(sporeCount * 3);
  const sporeColors = ['#fff1b8', '#f8e08a', '#ffc75a', '#ff8fb3', '#7ff2ff', '#b8ffe0', '#d8f6ff', '#ffffff', '#ffe9a8', '#ffe9a8'];
  for (let i = 0; i < sporeCount; i++) { const p = PLATFORMS[Math.floor(random() * PLATFORMS.length)]; sporePos.set([p.x + (random() - .5) * 18, p.y - 4 + random() * 10, p.z + (random() - .5) * 18], i * 3); const c = new THREE.Color(sporeColors[p.stage] ?? '#fff'); sporeCol.set([c.r, c.g, c.b], i * 3); }
  const sporeGeo = new THREE.BufferGeometry(); sporeGeo.setAttribute('position', new THREE.BufferAttribute(sporePos, 3)); sporeGeo.setAttribute('color', new THREE.BufferAttribute(sporeCol, 3));
  const spores = new THREE.Points(sporeGeo, new THREE.PointsMaterial({ size: .12, vertexColors: true, transparent: true, opacity: .85, depthWrite: false, blending: THREE.AdditiveBlending })); dynamic.add(spores);
  // Sunbeams through the lower canopy.
  const beams: THREE.Mesh[] = [];
  for (let i = 0; i < (low ? 3 : 7); i++) { const beam = new THREE.Mesh(new THREE.PlaneGeometry(5 + random() * 5, 46), new THREE.MeshBasicMaterial({ map: mistTex, color: '#fff0bf', transparent: true, opacity: .2, depthWrite: false, side: THREE.DoubleSide })); const a = random() * 6.28, R = 12 + random() * 40; beam.position.set(Math.cos(a) * R, 20, Math.sin(a) * R); beam.rotation.z = -.3; dynamic.add(beam); beams.push(beam); }
  // The next station shows a column of light that can be seen from far below.
  const beacon = new THREE.Mesh(new THREE.CylinderGeometry(.9, 1.6, 34, 16, 1, true), new THREE.MeshBasicMaterial({ map: beamTex, color: '#ffe7a3', transparent: true, opacity: .5, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, fog: false }));
  beacon.visible = false; dynamic.add(beacon);
  // Burst of spores when a conversation is completed.
  const burstCount = 90, burstPos = new Float32Array(burstCount * 3), burstVel: THREE.Vector3[] = [];
  for (let i = 0; i < burstCount; i++) burstVel.push(new THREE.Vector3((random() - .5) * 5, 2 + random() * 5, (random() - .5) * 5));
  const burstGeo = new THREE.BufferGeometry(); burstGeo.setAttribute('position', new THREE.BufferAttribute(burstPos, 3));
  const burstMat = new THREE.PointsMaterial({ color: '#ffe08a', size: .22, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const burst = new THREE.Points(burstGeo, burstMat); burst.frustumCulled = false; dynamic.add(burst);
  let burstAt = -10, burstZone: string | null = null, pendingBurst: string | null = null, clock = 0;

  // ---------------------------------------------------------- instanced decor and warts
  for (const [name, list] of decor) {
    const geometry = name === 'bracket' ? bracketGeometry() : decorMushroomGeometry(name, low ? 7 : 10);
    const s = SPECIES[name];
    const material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .8, emissive: s?.glow && s.glow > .3 ? (s.emissive ?? '#000') : '#000000', emissiveIntensity: s?.glow && s.glow > .3 ? s.glow * 1.4 : 0 });
    const mesh = new THREE.InstancedMesh(geometry, material, list.matrices.length);
    list.matrices.forEach((m, i) => { mesh.setMatrixAt(i, m); mesh.setColorAt(i, list.colors[i]); });
    mesh.receiveShadow = true; mesh.castShadow = false; root.add(mesh); instanced.push(mesh);
  }
  if (warts.length) {
    const wartMesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: .6 }), warts.length);
    warts.forEach((w, i) => { dummy.position.set(w.x, w.y, w.z); dummy.rotation.set(0, random() * 6, 0); dummy.scale.set(w.s, w.s * .45, w.s); dummy.updateMatrix(); wartMesh.setMatrixAt(i, dummy.matrix); wartMesh.setColorAt(i, new THREE.Color(w.color)); });
    root.add(wartMesh); instanced.push(wartMesh);
  }

  // ---------------------------------------------------------- batching
  // Batch immobile scenery by material. Invisible originals remain for exact camera raycasts.
  statics.updateMatrixWorld(true);
  const collisionRoot = new THREE.Group(); collisionRoot.visible = false; collisionRoot.name = 'camera-collision-surfaces';
  const flatten: THREE.Mesh[] = [];
  statics.traverse(o => { if (o instanceof THREE.Mesh && !(o instanceof THREE.InstancedMesh) && !Array.isArray(o.material)) flatten.push(o); });
  const batches = new Map<string, { material: THREE.Material; objects: THREE.Mesh[] }>();
  for (const object of flatten) {
    const key = `${(object.material as THREE.Material).uuid}/${Boolean(object.geometry.index)}/${Object.keys(object.geometry.attributes).sort().join(',')}`;
    const batch = batches.get(key) ?? { material: object.material as THREE.Material, objects: [] }; batch.objects.push(object); batches.set(key, batch);
  }
  const merged = new THREE.Group(); merged.name = 'forest-batches';
  for (const { material, objects } of batches.values()) {
    const pieces = objects.map(object => object.geometry.clone().applyMatrix4(object.matrixWorld));
    const combined = mergeGeometries(pieces, false); for (const piece of pieces) piece.dispose();
    if (!combined) continue;
    const mesh = new THREE.Mesh(combined, material); mesh.castShadow = objects.some(o => o.castShadow); mesh.receiveShadow = true; merged.add(mesh);
    for (const object of objects) {
      if (solids.includes(object)) { object.removeFromParent(); object.position.setFromMatrixPosition(object.matrixWorld); object.quaternion.setFromRotationMatrix(object.matrixWorld); object.scale.setFromMatrixScale(object.matrixWorld); collisionRoot.add(object); }
      else { object.removeFromParent(); object.geometry.dispose(); }
    }
  }
  statics.clear(); statics.add(merged);
  root.add(collisionRoot); root.updateMatrixWorld(true);
  void geometries;

  const celebrated = new Set<string>();
  return {
    root, solids,
    celebrate(zone) { pendingBurst = zone; },
    update(time, player, state) {
      clock = time;
      const motion = reducedMotion ? 0 : 1;
      for (let i = 0; i < mist.length; i++) mist[i].position.x += Math.sin(time * .06 + i) * .003 * motion;
      for (const ring of rings) ring.scale.setScalar(1 + Math.sin(time * 2.4) * .04 * motion);
      spores.rotation.y = Math.sin(time * .02) * .04 * motion; spores.position.y = Math.sin(time * .3) * .35 * motion;
      for (const beam of beams) beam.rotation.y = Math.atan2(player.x - beam.position.x, player.z - beam.position.z);
      for (const b of birds) { const a = b.phase + time * b.speed * (motion || .2); b.mesh.position.set(Math.cos(a) * b.r, b.y + Math.sin(time * .4 + b.phase) * 1.5, Math.sin(a) * b.r); b.mesh.rotation.y = -a; b.mesh.scale.y = .8 + Math.sin(time * 6 + b.phase) * .6 * motion; }
      sea.material.opacity = THREE.MathUtils.clamp((player.y - 36) / 10, 0, .92);
      if (state) {
        for (const zone of ZONES) {
          const visited = state.visited.includes(zone.id);
          const lamp = lanterns.get(zone.id); if (lamp) lamp.emissiveIntensity = visited ? 2.2 : .15;
          const bubble = bubbles.get(zone.id);
          if (bubble) {
            const locked = zone.id === 'final' && !state.unlocked && !visited;
            (bubble.material as THREE.SpriteMaterial).map = visited ? doneTex : askTex;
            (bubble.material as THREE.SpriteMaterial).opacity = locked ? .45 : 1;
            bubble.position.y = zone.y + 3.6 + Math.sin(time * 1.6 + zone.r) * .18 * motion;
            const near = Math.hypot(player.x - zone.x, player.z - zone.z) < zone.r && Math.abs(player.y - zone.y) < 2;
            bubble.scale.setScalar(near ? 1.1 : 1.5);
          }
          const halo = halos.get(zone.id);
          if (halo) {
            const since = time - (burstZone === zone.id ? burstAt : -10);
            halo.material.opacity = visited ? (since < 2.5 ? .95 - since * .2 : .35 + Math.sin(time * 1.5) * .08 * motion) : 0;
            if (visited && !celebrated.has(zone.id)) celebrated.add(zone.id);
          }
        }
        const next = ZONES.find(z => z.id === state.next);
        beacon.visible = Boolean(next) && (next!.id !== 'final' || state.unlocked) && (Math.hypot(player.x - next!.x, player.z - next!.z) > next!.r + 1 || Math.abs(player.y - next!.y) > 2);
        if (next) { beacon.position.set(next.x, next.y + 17, next.z); beacon.material.opacity = .32 + Math.sin(time * 2) * .1 * motion; }
      }
      if (pendingBurst) {
        const zone = ZONES.find(z => z.id === pendingBurst); pendingBurst = null;
        if (zone) { burstAt = clock; burstZone = zone.id; for (let i = 0; i < burstCount; i++) burstPos.set([zone.x, zone.y + .6, zone.z], i * 3); }
      }
      const age = clock - burstAt;
      if (age < 2.6 && burstZone) {
        const zone = ZONES.find(z => z.id === burstZone)!;
        for (let i = 0; i < burstCount; i++) { const v = burstVel[i]; burstPos.set([zone.x + v.x * age, zone.y + .6 + v.y * age - 1.6 * age * age, zone.z + v.z * age], i * 3); }
        burstGeo.attributes.position.needsUpdate = true; burstMat.opacity = Math.max(0, 1 - age / 2.6);
      } else burstMat.opacity = 0;
      for (const light of glowLights) light.intensity = (light.color.r > .9 ? 5 : 6) * (1 + Math.sin(time * 1.3) * .12 * motion);
    },
    dispose() {
      const geos = new Set<THREE.BufferGeometry>(), mats = new Set<THREE.Material>();
      root.traverse(o => { if (o instanceof THREE.Mesh || o instanceof THREE.Points || o instanceof THREE.LineSegments) { geos.add(o.geometry); for (const m of Array.isArray(o.material) ? o.material : [o.material]) mats.add(m); } else if (o instanceof THREE.Sprite) mats.add(o.material); });
      for (const g of geos) g.dispose(); for (const m of mats) m.dispose(); for (const m of materialCache.values()) m.dispose(); for (const t of textures) t.dispose(); root.clear();
    },
  };
}
