// El ascensor del cerro · the procedural hillside (three.js only, no GLB): the
// port with its quay, cranes and a ship; the cerro in three terraces with
// houses stacked up the slope (corrugated-iron fronts in many colours, as the
// real architecture is, never as a postcard gimmick); the funicular with its
// two cabins on a cutting; the stairway with the mural; the café, the
// restoration workshop, the mirador and the junta de vecinos. Positions come
// from layout.mjs; people come from noche-abierta/people3d. Static scenery is
// authored straight into merged meshes (bake3d Batch), so it costs a handful of
// draw calls in both modes.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { addBlobShadow, animatePerson, createPerson, randomLook, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { BOLLARDS, BUILDINGS, CIRCLES, FUNICULAR, LINKS, POLES, STAIRS, TRACK_ANGLE, TREES, cabinAt, crowd, groundY } from './layout.mjs';
import { Batch, bake } from './bake3d';

export type Spot = { id: string; group: THREE.Group; material: THREE.MeshBasicMaterial; gem: THREE.Mesh };
export type Npc = { id: string; person: Person; x: number; y: number; z: number; heading: number };
export type Body = { key: string; x: number; z: number; y: number; body?: string; seed: number };
export type Cerro = {
  spots: Spot[];
  npcs: Npc[];
  /** The two cabins: `a` (red, rail 0) is at sA, `b` (green, rail 1) at 1 − sA. */
  setCabins: (sA: number) => void;
  animate: (t: number, dt: number, px: number, pz: number) => void;
  /** Low mode: only the host of the open circle is a live (animated) person.
   * `terrace` is where the player is (see visibleHosts). */
  focus: (circleId: string | null, terrace: string) => void;
  /** Everyone standing on the cerro: the mascot bumps into them, never through. */
  bodies: () => Body[];
  people: () => number;
};

// ------------------------------------------------------------------ palette
// Painted corrugated iron and plaster: strong and faded colours, whites and
// greys too, the way a lived-in hillside looks (no rainbow rows).
const FRONTS = ['#c8553d', '#e3b23c', '#3a7ca5', '#7fa86a', '#ece4d4', '#8e5572', '#2f5d62', '#d9825b', '#4a6fa5', '#d4b483', '#9bb1c8', '#a63d40', '#e8dcc0', '#6b8f71', '#b9b2a6', '#f0c987', '#5c6f7b', '#c97b84'];
const ROOFS = ['#7d4b37', '#8a8f94', '#6e3b2c', '#9a9a92', '#5f5a55'];
const STONE = '#9d9282';
const PAVING = '#a59a8a';
const TRIM = '#f3eee4';

function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** A corrugated-iron sheet: a plane with vertical ridges (real geometry, so
 * the light picks the ridges out; no texture needed). Faces +z. */
function corrugated(w: number, h: number) {
  const segs = Math.max(4, Math.round(w / 0.16));
  const g = new THREE.PlaneGeometry(w, h, segs, 1);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const col = Math.round((pos.getX(i) + w / 2) / (w / segs));
    pos.setZ(i, col % 2 ? 0.035 : -0.035);
  }
  g.computeVertexNormals();
  return g;
}

type House = { x: number; z: number; w: number; d: number; base: number; h: number; facing?: number; seed: number };

/** One house on the slope: plain body, corrugated front in its colour,
 * framed windows, a door, a tin roof; sometimes a balcony. Facing +z unless
 * `facing` turns it. */
function house(b: Batch, o: House, detail: boolean) {
  const r = rng(o.seed);
  const front = FRONTS[Math.floor(r() * FRONTS.length)];
  const side = FRONTS[Math.floor(r() * FRONTS.length)];
  const roof = ROOFS[Math.floor(r() * ROOFS.length)];
  const ry = o.facing ?? 0;
  const c = Math.cos(ry), s = Math.sin(ry);
  // Local (lx, lz) → world, around the footprint centre.
  const at = (lx: number, ly: number, lz: number, geometry: THREE.BufferGeometry, hex: string, surface: 'matte' | 'metal' = 'matte') =>
    b.put(geometry, hex, o.x + lx * c + lz * s, o.base + ly, o.z - lx * s + lz * c, ry, surface);
  at(0, o.h / 2, 0, new THREE.BoxGeometry(o.w, o.h, o.d), side);
  at(0, o.h / 2, o.d / 2 + 0.04, corrugated(o.w - 0.06, o.h - 0.06), front);
  // Roof: a thin slab with a slight fall to the back, overhanging the front.
  const roofMesh = new THREE.BoxGeometry(o.w + 0.4, 0.12, o.d + 0.5);
  roofMesh.rotateX(-0.08);
  at(0, o.h + 0.12, 0.1, roofMesh, roof, 'metal');
  if (!detail) return;
  const floors = Math.max(1, Math.floor(o.h / 2.7));
  const cols = Math.max(1, Math.floor(o.w / 1.9));
  const doorCol = Math.floor(r() * cols);
  for (let f = 0; f < floors; f++) {
    for (let k = 0; k < cols; k++) {
      const lx = -o.w / 2 + (k + 0.5) * (o.w / cols);
      const ly = 1.4 + f * 2.7;
      if (ly + 0.8 > o.h) continue;
      if (f === 0 && k === doorCol && o.base < 30) {
        at(lx, 1.05, o.d / 2 + 0.09, new THREE.BoxGeometry(0.95, 2.1, 0.06), TRIM);
        at(lx, 1.0, o.d / 2 + 0.12, new THREE.BoxGeometry(0.8, 1.95, 0.05), r() < 0.5 ? '#3b3330' : '#4d5d55');
        continue;
      }
      at(lx, ly + 0.1, o.d / 2 + 0.09, new THREE.BoxGeometry(1.0, 1.3, 0.06), TRIM);
      at(lx, ly + 0.1, o.d / 2 + 0.12, new THREE.BoxGeometry(0.82, 1.1, 0.05), r() < 0.3 ? '#6a7a86' : '#34424d');
    }
    if (f > 0 && r() < 0.3) {
      // A narrow balcony with a rail.
      at(0, 2.7 * f + 0.05, o.d / 2 + 0.45, new THREE.BoxGeometry(Math.min(o.w - 0.4, 2.6), 0.1, 0.8), STONE);
      at(0, 2.7 * f + 0.55, o.d / 2 + 0.83, new THREE.BoxGeometry(Math.min(o.w - 0.4, 2.6), 0.05, 0.05), '#2b2b2b', 'metal');
    }
  }
}

/** A row of houses along x on a slope band, skipping the gaps. */
function row(b: Batch, opts: { z0: number; z1: number; base: number; maxTop: number; minH: number; x0: number; x1: number; skip: [number, number][]; seed: number; facing?: number; detail: boolean }) {
  const r = rng(opts.seed);
  let x = opts.x0;
  while (x < opts.x1) {
    const w = 3.4 + r() * 3.4;
    const cx = x + w / 2;
    x += w + 0.12 + (r() < 0.15 ? 0.8 : 0);
    if (x > opts.x1 + 0.5) break;
    if (opts.skip.some(([a, z]) => cx + w / 2 > a && cx - w / 2 < z)) continue;
    const room = opts.maxTop - opts.base;
    const h = Math.max(opts.minH, Math.min(room, opts.minH + r() * (room - opts.minH + 1.5)));
    const d = (opts.z1 - opts.z0) * (0.75 + r() * 0.2);
    const z = opts.z1 - d / 2 - r() * ((opts.z1 - opts.z0) - d);
    house(b, { x: cx, z, w, d, base: opts.base, h, facing: opts.facing, seed: Math.floor(r() * 1e9) }, opts.detail);
  }
}

// ------------------------------------------------------------------ textures
function canvasTexture(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void) {
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  draw(canvas.getContext('2d')!);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

const SIGNS = [
  { text: 'ASCENSOR LA GAVIOTA', bg: '#1f5a46', fg: '#f3eee4' },
  { text: 'ESTACIÓN ALTA', bg: '#1f5a46', fg: '#f3eee4' },
  { text: 'CAFÉ', bg: '#3b2a20', fg: '#f6d38a' },
  { text: 'TALLER DE RESTAURACIÓN', bg: '#24323a', fg: '#e9e3d6' },
  { text: 'JUNTA DE VECINOS', bg: '#f3eee4', fg: '#24406e' },
  { text: 'ESCALERA', bg: '#f3eee4', fg: '#2a2a2a' },
  { text: 'CERRADO POR REPARACIONES', bg: '#f3d34a', fg: '#1d1d1d' },
  { text: 'MIRADOR', bg: '#f3eee4', fg: '#2a2a2a' },
];
const SIGN_ROWS = 8;

function signAtlas() {
  return canvasTexture(1024, 64 * SIGN_ROWS, ctx => {
    SIGNS.forEach((sign, i) => {
      ctx.fillStyle = sign.bg;
      ctx.fillRect(0, i * 64, 1024, 64);
      ctx.strokeStyle = sign.fg; ctx.lineWidth = 4; ctx.strokeRect(6, i * 64 + 6, 1012, 52);
      ctx.fillStyle = sign.fg;
      ctx.font = 'bold 40px "Helvetica Neue", Arial, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(sign.text, 512, i * 64 + 34);
    });
  });
}

/** A sign plane whose UVs pick one row of the atlas. */
function signGeometry(index: number, width: number) {
  const g = new THREE.PlaneGeometry(width, width / 16);
  const uv = g.attributes.uv;
  const v0 = 1 - (index + 1) / SIGN_ROWS, v1 = 1 - index / SIGN_ROWS;
  for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) > 0.5 ? v1 - 0.002 : v0 + 0.002);
  return g;
}

/** The stairway mural: hills of houses over the bay, the two cabins on their
 * diagonal and many hands; abstract, painted, no text. */
function muralTexture() {
  return canvasTexture(1024, 512, ctx => {
    const r = rng(77);
    const sky = ctx.createLinearGradient(0, 0, 0, 512);
    sky.addColorStop(0, '#24406e'); sky.addColorStop(0.55, '#3f7fa6'); sky.addColorStop(1, '#173a52');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, 1024, 512);
    ctx.fillStyle = '#f2c14e';
    ctx.beginPath(); ctx.arc(790, 120, 74, 0, Math.PI * 2); ctx.fill();
    // Stacked houses climbing to the right.
    for (let i = 0; i < 70; i++) {
      const x = r() * 1024, base = 430 - (x / 1024) * 230 + r() * 40;
      const w = 30 + r() * 46, h = 30 + r() * 50;
      ctx.fillStyle = FRONTS[Math.floor(r() * FRONTS.length)];
      ctx.fillRect(x, base - h, w, h);
      ctx.fillStyle = 'rgba(20,24,30,.55)';
      ctx.fillRect(x + w * 0.2, base - h * 0.7, w * 0.22, h * 0.28);
    }
    // The rail and two cabins.
    ctx.strokeStyle = '#1d1d1d'; ctx.lineWidth = 10;
    ctx.beginPath(); ctx.moveTo(140, 500); ctx.lineTo(560, 120); ctx.stroke();
    for (const [x, y, c] of [[250, 400, '#b3332b'], [450, 220, '#2e6b4f']] as [number, number, string][]) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(-0.74);
      ctx.fillStyle = c; ctx.fillRect(-46, -34, 92, 60);
      ctx.fillStyle = '#f3eee4'; ctx.fillRect(-38, -26, 26, 22); ctx.fillRect(-6, -26, 26, 22);
      ctx.restore();
    }
    // Waves.
    ctx.strokeStyle = 'rgba(243,238,228,.75)'; ctx.lineWidth = 6;
    for (let k = 0; k < 4; k++) {
      ctx.beginPath();
      for (let x = 0; x <= 1024; x += 16) ctx.lineTo(x, 470 + k * 12 + Math.sin(x / 40 + k) * 6);
      ctx.stroke();
    }
    // Hands raised, as in a vote.
    ctx.fillStyle = '#e8b48a';
    for (let i = 0; i < 9; i++) {
      const x = 620 + i * 42, y = 360 + (i % 3) * 18;
      ctx.fillRect(x, y, 16, 90);
      ctx.beginPath(); ctx.ellipse(x + 8, y, 14, 22, 0, 0, Math.PI * 2); ctx.fill();
    }
  });
}

// ------------------------------------------------------------------ people
// The person at each circle, dressed as the cast of levels/b2.mjs (CAST):
// don Lorenzo the operator, Catalina who chairs the junta (on the stairs and
// at the assembly), Paola at her café, Alex the architect, Elvira the grant
// consultant.
const LOOKS: Record<string, Look> = {
  lorenzo: { skin: '#c99468', age: 'old', body: 'm', hairStyle: 'cap', hairColor: '#cfcdc8', top: 'jacket', topColor: '#24406e', bottom: 'pants', bottomColor: '#2a2a30', extras: ['mustache'] },
  catalina: { skin: '#dcae88', age: 'adult', body: 'f', hairStyle: 'bun', hairColor: '#3a2014', top: 'sweater', topColor: '#7a2e3b', bottom: 'skirt', bottomColor: '#1b1b1e', extras: ['glasses'] },
  paola: { skin: '#a8724e', age: 'adult', body: 'f', hairStyle: 'curly', hairColor: '#1a1210', top: 'apron', topColor: '#f0ebe0', bottom: 'pants', bottomColor: '#2a2a30', extras: ['earrings'] },
  alex: { skin: '#8d5a3c', age: 'young', body: 'm', hairStyle: 'short', hairColor: '#120d0b', top: 'jacket', topColor: '#4d5b3a', bottom: 'jeans', bottomColor: '#24304a', extras: ['glasses'] },
  elvira: { skin: '#f0d0b4', age: 'adult', body: 'f', hairStyle: 'bob', hairColor: '#5a3c26', top: 'coat', topColor: '#3a4a5c', bottom: 'pants', bottomColor: '#1e2430', extras: ['scarf'] },
};
export const HOST_OF: Record<string, keyof typeof LOOKS> = { estacion: 'lorenzo', escalera: 'catalina', cafe: 'paola', taller: 'alex', mirador: 'elvira', asamblea: 'catalina' };
const HOSTS: Record<string, Look> = Object.fromEntries(Object.entries(HOST_OF).map(([id, who]) => [id, LOOKS[who]]));

/** Which hosts stand on the cerro now. A character who talks at two circles
 * (Catalina) is shown once: at the circle on the player's terrace, else at
 * the lower one; the host of an open circle is always there. */
export function visibleHosts(terrace: string, open: string | null) {
  const shown = new Set<string>();
  const byWho = new Map<string, typeof CIRCLES>();
  for (const c of CIRCLES) byWho.set(HOST_OF[c.id], [...(byWho.get(HOST_OF[c.id]) ?? []), c]);
  for (const list of byWho.values()) {
    const pick = list.find(c => c.id === open) ?? list.find(c => c.terrace === terrace) ?? list[0];
    shown.add(pick.id);
  }
  return shown;
}

function makePerson(look: Look, pose: string, shadows: boolean) {
  const person = createPerson(look, shadows);
  setPose(person, pose, pose === 'sit');
  addBlobShadow(person, 0.8);
  return person;
}

function buildSpot(id: string, x: number, y: number, z: number, discMaterial: THREE.Material): Spot {
  const group = new THREE.Group();
  group.position.set(x, y + 0.03, z);
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.98, 1.18, 48), material);
  ring.rotation.x = -Math.PI / 2;
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.98, 48), discMaterial);
  disc.rotation.x = -Math.PI / 2;
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), material);
  gem.position.y = 2.3;
  group.add(ring, disc, gem);
  return { id, group, material, gem };
}

/** One funicular cabin, merged: a level body with half walls, open windows
 * (the rider shows through), a roof, and a chassis that follows the rail. */
function cabin(colour: string, n: number, shadows: boolean) {
  const b = new Batch();
  const W = 2.3, D = 3.2, H = 2.35;
  b.box(W, 0.12, D, '#5a4a3a', 0, -0.06, 0);
  for (const sx of [-1, 1]) b.box(0.08, 1.0, D, colour, sx * (W / 2 - 0.04), 0.5, 0);
  for (const sz of [-1, 1]) b.box(W, 1.0, 0.08, colour, 0, 0.5, sz * (D / 2 - 0.04));
  b.box(W + 0.04, 0.12, D + 0.04, TRIM, 0, 1.04, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 0, 1]) b.box(0.1, H - 1.0, 0.1, colour, sx * (W / 2 - 0.05), 1.0 + (H - 1.0) / 2, sz * (D / 2 - 0.05));
  b.box(W + 0.3, 0.16, D + 0.3, '#3c3c3c', 0, H + 0.08, 0, 0, 'metal');
  b.box(W * 0.7, 0.24, 0.05, TRIM, 0, H - 0.25, D / 2 + 0.03);
  // The chassis: a wedge-like frame under the floor, parallel to the rail.
  const chassis = new THREE.BoxGeometry(1.9, 0.3, D + 0.2);
  chassis.rotateX(TRACK_ANGLE);
  b.put(chassis, '#2b2b2b', 0, -FUNICULAR.chassis + 0.15, 0, 0, 'metal');
  // Wheels on the rail line (the chassis tilts by the track angle).
  for (const sz of [-1, 1]) for (const sx of [-1, 1]) {
    const z = sz * (D / 2 - 0.3);
    b.cyl(0.18, 0.18, 0.12, '#1d1d1d', sx * 0.55, -FUNICULAR.chassis + 0.02 - z * Math.sin(TRACK_ANGLE), z, 10, 'metal', 0, Math.PI / 2);
  }
  // Its number on both ends, as a painted panel.
  for (const sz of [-1, 1]) b.box(0.5, 0.5, 0.04, TRIM, 0, 0.55, sz * (D / 2 + 0.02));
  const group = b.build({ shadows, name: `cabina-${n}` });
  return group;
}

// ------------------------------------------------------------------ build
export function buildCerro(scene: THREE.Scene, opts: { low: boolean; shadows: boolean }): Cerro {
  const { low, shadows } = opts;
  const root = new THREE.Group();
  scene.add(root);
  const b = new Batch();
  const gap: [number, number] = [-27.6, -20.4];

  // ---------------------------------------------------------- ground
  // Port level, the middle street and the top: three solid steps of earth,
  // cut by the funicular.
  b.block(-90, 90, 7, 34, -3, 0, '#8d877e');
  b.block(-90, 90, 33.5, 34.2, -3, 0.12, '#6f6a62');
  for (const [x0, x1] of [[-90, gap[0]], [gap[1], 90]]) {
    b.block(x0, x1, -11, 7, -3, 9, STONE);
    b.block(x0, x1, -95, -11, -3, 18, STONE);
  }
  b.block(-31, 31, -3, 5, 9, 9.03, '#8f877b');
  b.block(-31, 31, -36, -11, 18, 18.03, '#b0a48f');
  b.block(-90, 90, 15, 33.5, 0, 0.02, PAVING);
  // The funicular cutting: a sloping bed from the lower to the upper station.
  const len = Math.hypot(FUNICULAR.bottom.z - FUNICULAR.top.z, FUNICULAR.top.y - FUNICULAR.bottom.y) + 3;
  const midZ = (FUNICULAR.bottom.z + FUNICULAR.top.z) / 2, midY = (FUNICULAR.bottom.y + FUNICULAR.top.y) / 2 - FUNICULAR.chassis - 0.3;
  b.put(new THREE.BoxGeometry(gap[1] - gap[0], 0.4, len), '#7c7468', (gap[0] + gap[1]) / 2, midY, midZ, 0, 'matte', TRACK_ANGLE);
  // Where the cutting stands above the port, it rests on piers.
  for (let z = 15.5; z > 6.5; z -= 3) {
    const top = FUNICULAR.bottom.y + (FUNICULAR.top.y - FUNICULAR.bottom.y) * ((FUNICULAR.bottom.z - z) / (FUNICULAR.bottom.z - FUNICULAR.top.z)) - FUNICULAR.chassis - 0.4;
    if (top > 0.2) for (const x of [gap[0] + 0.5, gap[1] - 0.5]) b.box(0.6, top, 0.6, STONE, x, top / 2, z);
  }
  // Rails and sleepers.
  const railLen = len - 3;
  for (const rail of FUNICULAR.rails) for (const dx of [-0.55, 0.55]) {
    b.put(new THREE.BoxGeometry(0.1, 0.12, railLen), '#4a4a4a', rail + dx, midY + 0.28, midZ, 0, 'metal', TRACK_ANGLE);
  }
  const sleepers = low ? 22 : 44;
  for (let i = 0; i <= sleepers; i++) {
    const s = i / sleepers;
    const p = cabinAt(s, (FUNICULAR.rails[0] + FUNICULAR.rails[1]) / 2);
    b.put(new THREE.BoxGeometry(4.6, 0.1, 0.25), '#5b4636', p.x, p.y - FUNICULAR.chassis - 0.08, p.z, 0, 'matte', TRACK_ANGLE);
  }
  // The haulage cable between the rails.
  b.put(new THREE.BoxGeometry(0.05, 0.05, railLen), '#2b2b2b', (FUNICULAR.rails[0] + FUNICULAR.rails[1]) / 2, midY + 0.3, midZ, 0, 'metal', TRACK_ANGLE);

  // ---------------------------------------------------------- the sea and the port
  b.block(-400, 400, 34.2, 420, -1.25, -1.2, '#2d6b86', 'sea');
  // The working quay across the water: cranes, containers, a ship.
  b.block(18, 120, 46, 70, -1.3, 0.9, '#8a8278');
  const cont = ['#b5452f', '#2f6f8f', '#d9a441', '#3a7a5a', '#8a8f94', '#7a3a5a'];
  const rc = rng(31);
  for (let i = 0; i < (low ? 14 : 28); i++) {
    const x = 30 + (i % 7) * 6.5, z = 54 + Math.floor(i / 7) % 2 * 3, y = 0.9 + Math.floor(i / 14) * 2.5;
    b.box(6, 2.5, 2.5, cont[Math.floor(rc() * cont.length)], x, y + 1.25, z);
  }
  for (const [x, c] of [[26, '#d2462e'], [44, '#e2b13c'], [62, '#d2462e']] as [number, string][]) {
    for (const dz of [-3, 3]) for (const dx of [-3, 3]) b.box(0.7, 18, 0.7, c, x + dx, 9.9, 50 + dz, 0, 'metal');
    b.box(7.4, 1.2, 7.4, c, x, 19, 50, 0, 'metal');
    b.box(1.4, 1.2, 40, c, x, 21, 40, 0, 'metal');
    b.box(3, 2.4, 3, '#e8e2d6', x, 21.4, 52);
  }
  b.block(-46, 8, 50, 60, -1.2, 4.2, '#24304a');
  b.block(-46, 8, 50, 60, 4.2, 4.8, '#a63d40');
  b.block(-40, -26, 52, 58, 4.8, 13, '#ece4d4');
  b.box(2.2, 6, 2.2, '#2b2b2b', -30, 16, 55);
  // A low breakwater to the west.
  b.block(-140, -40, 120, 126, -1.3, 1.2, '#7c7468');

  // On our quay: bollards, benches, the kiosk, two stacked containers, lamps.
  for (const bo of BOLLARDS) b.cyl(0.22, 0.26, 0.6, '#2b2b2b', bo.x, 0.3, bo.z, 10, 'metal');
  for (const [x, z] of [[-7.5, 30.3], [22.5, 29.3]]) {
    b.box(2.2, 0.08, 0.6, '#6b4a30', x, 0.45, z);
    b.box(2.2, 0.5, 0.08, '#6b4a30', x, 0.75, z + 0.27);
    for (const sx of [-0.9, 0.9]) b.box(0.08, 0.45, 0.5, '#2b2b2b', x + sx, 0.22, z, 0, 'metal');
  }
  const k = BUILDINGS.kiosco;
  b.block(k.x0, k.x1, k.z0, k.z1, 0, k.h, k.color);
  b.block(k.x0 - 0.3, k.x1 + 0.3, k.z0 - 0.3, k.z1 + 0.5, k.h, k.h + 0.12, '#3c3c3c', 'metal');
  b.box(1.8, 0.9, 0.05, '#f3eee4', (k.x0 + k.x1) / 2, 1.6, k.z1 + 0.03);
  const ct = BUILDINGS.contenedores;
  b.block(ct.x0, ct.x1, ct.z0, ct.z1, 0, 2.6, '#b5452f');
  b.block(ct.x0 + 1, ct.x1 - 0.5, ct.z0 + 0.3, ct.z1 - 0.3, 2.6, 5.2, '#2f6f8f');
  for (let i = 0; i < 12; i++) b.box(0.06, 2.4, 0.04, '#7d3020', ct.x0 + 0.5 + i * 0.7, 1.3, ct.z1 + 0.02);

  // ---------------------------------------------------------- the stations
  const lo = BUILDINGS.estacionBaja, hi = BUILDINGS.estacionAlta;
  const station = (s: typeof lo, base: number, openSide: 'south' | 'north') => {
    for (const x of [s.x0, s.x1]) b.block(x - (x === s.x0 ? 0 : 0.5), x + (x === s.x0 ? 0.5 : 0), s.z0, s.z1, base, base + s.h, s.color);
    b.block(s.x0 - 0.4, s.x1 + 0.4, s.z0 - 0.4, s.z1 + 0.4, base + s.h, base + s.h + 0.3, '#5f5a55', 'metal');
    const fz = openSide === 'south' ? s.z1 : s.z0;
    const dir = openSide === 'south' ? 1 : -1;
    // Front: a lintel over the opening, two piers, green trim.
    b.block(s.x0, s.x1, fz - 0.25, fz + 0.25, base + s.h - 1.2, base + s.h, s.color);
    for (const x of [s.x0 + 0.5, s.x1 - 0.5]) b.block(x - 0.3, x + 0.3, fz - 0.25, fz + 0.25, base, base + s.h, '#1f5a46');
    // The platform edge and a low turnstile gate across the opening.
    b.block(s.x0 + 0.5, s.x1 - 0.5, fz - 0.6 * dir - 0.1, fz - 0.6 * dir + 0.1, base, base + 0.95, '#2b2b2b', 'metal');
  };
  station(lo, 0, 'south');
  station(hi, 18, 'north');
  // The winding house next to the upper station, with its wheel.
  b.block(-34, -28.6, -19, -12, 18, 23, '#d8cbb0');
  b.cyl(1.6, 1.6, 0.3, '#3c3c3c', -28.4, 21, -15.5, 24, 'metal', 0, Math.PI / 2);

  // ---------------------------------------------------------- the stairway
  for (const f of STAIRS.flights) {
    // 70 steps a flight: the «ciento cuarenta escalones» of the scene.
    const steps = 70;
    const run = (f.z1 - f.z0) / steps, rise = (f.y1 - f.y0) / steps;
    for (let i = 0; i < steps; i++) {
      const top = f.y0 + (i + 1) * rise;
      const zc = f.z0 + (i + 0.5) * run;
      b.box(STAIRS.width, top - f.y0 + 0.3, Math.abs(run) + 0.01, i % 2 ? '#a79c8b' : '#9d9282', STAIRS.x, (top + f.y0 - 0.3) / 2, zc);
    }
    // Side walls and a central handrail along the slope.
    const L = Math.hypot(f.z1 - f.z0, f.y1 - f.y0), ang = Math.atan2(f.y1 - f.y0, f.z0 - f.z1);
    const zc = (f.z0 + f.z1) / 2, yc = (f.y0 + f.y1) / 2;
    for (const sx of [-1, 1]) b.put(new THREE.BoxGeometry(0.3, 1.2, L), '#ece4d4', STAIRS.x + sx * (STAIRS.width / 2 + 0.15), yc + 0.5, zc, 0, 'matte', ang);
    b.put(new THREE.BoxGeometry(0.06, 0.06, L), '#2b2b2b', STAIRS.x, yc + 1.0, zc, 0, 'metal', ang);
  }
  // Landings: the stair heads cross the railings.
  b.block(STAIRS.x - STAIRS.width / 2, STAIRS.x + STAIRS.width / 2, 5, 7, 8.7, 9.02, '#a79c8b');
  b.block(STAIRS.x - STAIRS.width / 2, STAIRS.x + STAIRS.width / 2, -13, -11, 17.7, 18.02, '#a79c8b');

  // ---------------------------------------------------------- the middle street
  // The mural wall at the stair landing.
  b.block(6.6, 20.4, -3.5, -3, 9, 15.2, '#ece4d4');
  b.block(6.4, 20.6, -3.6, -2.9, 15.2, 15.4, '#9d9282');
  // Railings on both lips of the funicular cutting where it crosses the
  // street (nothing across the rails: the cabins run underneath).
  for (const x of [gap[0] - 0.1, gap[1] + 0.1]) {
    for (let z = -3; z <= 5.01; z += 2) b.box(0.07, 1.0, 0.07, '#2b2b2b', x, 9.5, z, 0, 'metal');
    b.block(x - 0.035, x + 0.035, -3, 5, 9.96, 10.02, '#2b2b2b', 'metal');
    b.block(x - 0.02, x + 0.02, -3, 5, 9.48, 9.52, '#2b2b2b', 'metal');
  }

  // Railings on the downhill edges (middle street and the mirador), leaving
  // the stair heads and the funicular open.
  const railing = (z: number, y: number, skip: [number, number][]) => {
    for (let x = -31; x < 31; x += 2) {
      if (skip.some(([a, c]) => x + 2 > a && x < c)) continue;
      b.box(2, 0.06, 0.06, '#2b2b2b', x + 1, y + 1.0, z, 0, 'metal');
      b.box(2, 0.04, 0.04, '#2b2b2b', x + 1, y + 0.5, z, 0, 'metal');
      b.box(0.07, 1.0, 0.07, '#2b2b2b', x, y + 0.5, z, 0, 'metal');
    }
  };
  railing(5.1, 9, [[STAIRS.x - 1.8, STAIRS.x + 1.8], [-28.4, -19.6]]);
  railing(-12.9, 18, [[STAIRS.x - 1.8, STAIRS.x + 1.8], [-28.4, -19.6]]);

  // ---------------------------------------------------------- houses
  const detail = true;
  const skipA: [number, number][] = [[-38, -19.4], [STAIRS.x - 2.4, STAIRS.x + 2.4]];
  // Slope A: the port's backdrop, two rows, roofs below the middle street.
  row(b, { z0: 11.2, z1: 14.9, base: 0, maxTop: 8.6, minH: 4.2, x0: -90, x1: 90, skip: skipA, seed: 11, detail });
  b.block(-90, -38, 7, 11, 0, 3.4, STONE); b.block(-19.4, STAIRS.x - 2.4, 7, 11, 0, 3.4, STONE); b.block(STAIRS.x + 2.4, 90, 7, 11, 0, 3.4, STONE);
  row(b, { z0: 7.1, z1: 10.9, base: 3.4, maxTop: 8.8, minH: 3.6, x0: -90, x1: 90, skip: skipA, seed: 12, detail: !low });
  // Slope B: the middle street's uphill side.
  const skipB: [number, number][] = [[-38, -19.4], [6.4, 20.6], [STAIRS.x - 2.4, STAIRS.x + 2.4]];
  row(b, { z0: -6.8, z1: -3.1, base: 9, maxTop: 16.4, minH: 4.4, x0: -90, x1: 90, skip: skipB, seed: 21, detail });
  b.block(-90, -38, -11, -6.8, 9, 12.4, STONE); b.block(-19.4, STAIRS.x - 2.4, -11, -6.8, 9, 12.4, STONE); b.block(STAIRS.x + 2.4, 90, -11, -6.8, 9, 12.4, STONE);
  row(b, { z0: -10.9, z1: -7, base: 12.4, maxTop: 17.6, minH: 3.4, x0: -90, x1: 90, skip: [[-38, -19.4], [STAIRS.x - 2.4, STAIRS.x + 2.4]], seed: 22, detail: !low });
  // Behind the top: the cerro keeps climbing.
  for (let i = 0; i < (low ? 3 : 5); i++) {
    const z1 = -36.3 - i * 6, base = 18 + i * 3.2;
    if (i > 0) b.block(-90, 90, z1 - 6, z1, 18, base, '#8f8576');
    row(b, { z0: z1 - 5, z1, base, maxTop: base + 4 + (i % 2) * 3, minH: 3.6, x0: -90, x1: 90, skip: i === 0 ? [[-17.5, -6.5], [-3.5, 7.5], [10.5, 25.5]] : [], seed: 31 + i, detail: !low && i < 2 });
  }
  b.block(-140, 140, -150, -66, 18, 34, '#6f7a5a');
  // The cerros on either side, beyond the terraces.
  for (const sx of [-1, 1]) for (let i = 0; i < (low ? 2 : 4); i++) {
    const x0 = sx < 0 ? -36 - (i + 1) * 9 : 34 + i * 9;
    row(b, { z0: -34, z1: -14, base: 18 + i * 1.5, maxTop: 25 + i * 1.5, minH: 4, x0, x1: x0 + 8, skip: [], seed: 51 + i * 2 + (sx > 0 ? 1 : 0), facing: 0, detail: false });
  }

  // ---------------------------------------------------------- the top: café, workshop, hall, mirador
  const cafe = BUILDINGS.cafe;
  b.block(cafe.x0, cafe.x1, cafe.z0, cafe.z1, 18, 18 + cafe.h, cafe.color);
  b.put(corrugated(cafe.x1 - cafe.x0 - 0.1, cafe.h - 0.1), '#d39a33', (cafe.x0 + cafe.x1) / 2, 18 + cafe.h / 2, cafe.z1 + 0.05);
  b.block(cafe.x0 - 0.3, cafe.x1 + 0.3, cafe.z0 - 0.3, cafe.z1 + 0.4, 18 + cafe.h, 18 + cafe.h + 0.15, '#7d4b37', 'metal');
  b.block(cafe.x0 + 1.4, cafe.x0 + 4.2, cafe.z1, cafe.z1 + 0.12, 18.2, 20.6, '#3b2a20');
  b.block(cafe.x0 + 5.2, cafe.x1 - 1.2, cafe.z1, cafe.z1 + 0.12, 19.0, 20.8, '#4a5c68');
  const awning = new THREE.BoxGeometry(cafe.x1 - cafe.x0 - 1, 0.08, 1.8);
  awning.rotateX(0.32);
  b.put(awning, '#a63d40', (cafe.x0 + cafe.x1) / 2, 21.5, cafe.z1 + 0.9);
  for (const x of [-15.8, -8.2]) {
    b.cyl(0.5, 0.5, 0.06, '#e8e2d6', x, 18.75, -24.2, 16);
    b.cyl(0.06, 0.06, 0.72, '#2b2b2b', x, 18.36, -24.2, 6, 'metal');
    for (const dx of [-0.8, 0.8]) { b.box(0.42, 0.06, 0.42, '#2b2b2b', x + dx, 18.45, -24.2, 0, 'metal'); b.box(0.42, 0.45, 0.05, '#2b2b2b', x + dx * 1.25, 18.7, -24.2, Math.PI / 2, 'metal'); }
  }
  const tl = BUILDINGS.taller;
  b.block(tl.x0, tl.x1, tl.z0, tl.z1, 18, 18 + tl.h, tl.color);
  b.put(corrugated(tl.x1 - tl.x0 - 0.1, tl.h - 0.1), '#6f8f9b', (tl.x0 + tl.x1) / 2, 18 + tl.h / 2, tl.z1 + 0.05);
  b.block(tl.x0 + 1.2, tl.x1 - 1.2, tl.z1 + 0.06, tl.z1 + 0.14, 18, 22.6, '#39424a');
  b.block(tl.x0 - 0.3, tl.x1 + 0.3, tl.z0 - 0.3, tl.z1 + 0.5, 18 + tl.h, 18 + tl.h + 0.15, '#8a8f94', 'metal');
  // The old cabin under restoration, on trestles, and a spare cable wheel.
  b.block(4.4, 6.9, -26.5, -24.9, 18, 18.9, '#6b4a30');
  b.block(4.5, 6.8, -26.4, -25.0, 18.9, 20.4, '#b3332b');
  b.block(4.5, 6.8, -26.4, -25.0, 20.4, 20.5, TRIM);
  b.cyl(1.1, 1.1, 0.2, '#3c3c3c', tl.x0 + 0.9, 19.2, tl.z1 + 0.35, 20, 'metal', Math.PI / 2);
  const hall = BUILDINGS.asamblea;
  b.block(hall.x0, hall.x1, hall.z0, hall.z1, 18, 18 + hall.h, hall.color);
  b.block(hall.x0, hall.x1, hall.z1, hall.z1 + 0.1, 18, 18.8, '#24406e');
  b.block(hall.x0 - 0.3, hall.x1 + 0.3, hall.z0 - 0.3, hall.z1 + 0.5, 18 + hall.h, 18 + hall.h + 0.2, '#5f5a55', 'metal');
  b.block(16.8, 19.2, hall.z1, hall.z1 + 0.14, 18, 20.6, '#5a3b26');
  for (const x of [12.6, 14.4, 21.6, 23.4]) { b.block(x - 0.55, x + 0.55, hall.z1, hall.z1 + 0.1, 19.6, 21.4, TRIM); b.block(x - 0.42, x + 0.42, hall.z1 + 0.05, hall.z1 + 0.13, 19.73, 21.27, '#28323a'); }
  // A notice board by the hall door.
  b.box(1.4, 1.0, 0.08, '#6b4a30', 15.2, 19.6, hall.z1 + 0.15);
  b.box(1.2, 0.8, 0.04, '#f3eee4', 15.2, 19.6, hall.z1 + 0.2);
  // Mirador: bench, coin telescope.
  b.box(2.4, 0.08, 0.7, '#6b4a30', 7.4, 18.45, -13.8);
  b.box(2.4, 0.45, 0.08, '#6b4a30', 7.4, 18.75, -14.15);
  b.cyl(0.08, 0.1, 1.1, '#2b2b2b', 14.8, 18.55, -13.8, 8, 'metal');
  b.box(0.3, 0.25, 0.55, '#2f6f8f', 14.8, 19.2, -13.75, 0, 'metal');

  // Trees, lamps.
  for (const t of TREES) {
    const y = groundY(t.x, t.z);
    b.cyl(0.18, 0.26, 2.6, '#5a4030', t.x, y + 1.3, t.z, 8);
    b.put(new THREE.IcosahedronGeometry(1.6, 0), '#557a46', t.x, y + 3.4, t.z);
    b.put(new THREE.IcosahedronGeometry(1.1, 0), '#4a6b3c', t.x + 0.7, y + 4.2, t.z - 0.3);
  }
  for (const p of POLES) {
    const y = groundY(p.x, p.z);
    b.cyl(0.07, 0.1, 4.2, '#2b2b2b', p.x, y + 2.1, p.z, 8, 'metal');
    b.box(0.7, 0.06, 0.06, '#2b2b2b', p.x + 0.3, y + 4.15, p.z, 0, 'metal');
    b.box(0.26, 0.3, 0.26, '#fff1c8', p.x + 0.6, y + 3.95, p.z, 0, 'glow');
  }

  // Posts for the stairway signs (at the foot and at the middle landing).
  b.cyl(0.05, 0.05, 2.6, '#2b2b2b', STAIRS.x - 2.4, 1.3, 15.25, 6, 'metal');
  b.cyl(0.05, 0.05, 2.6, '#2b2b2b', STAIRS.x - 2.4, 10.3, -3.2, 6, 'metal');

  root.add(b.build({ shadows }));

  // ---------------------------------------------------------- signs and the mural (one draw call each)
  const signs: THREE.BufferGeometry[] = [];
  const signAt = (index: number, width: number, x: number, y: number, z: number, ry = 0) => {
    const g = signGeometry(index, width);
    g.rotateY(ry);
    g.translate(x, y, z);
    signs.push(g);
  };
  signAt(0, 6.6, (lo.x0 + lo.x1) / 2, lo.h - 0.55, lo.z1 + 0.27);
  signAt(6, 3.6, (lo.x0 + lo.x1) / 2, lo.h - 1.0, lo.z1 + 0.27);
  signAt(1, 5.6, (hi.x0 + hi.x1) / 2, 18 + hi.h - 0.55, hi.z0 - 0.27, Math.PI);
  signAt(6, 3.6, (hi.x0 + hi.x1) / 2, 18 + hi.h - 1.0, hi.z0 - 0.27, Math.PI);
  signAt(2, 3.2, (cafe.x0 + cafe.x1) / 2, 18 + cafe.h - 0.7, cafe.z1 + 0.12);
  signAt(3, 7.2, (tl.x0 + tl.x1) / 2, 18 + tl.h - 0.8, tl.z1 + 0.16);
  signAt(4, 7.4, (hall.x0 + hall.x1) / 2, 18 + hall.h - 1.0, hall.z1 + 0.12);
  signAt(5, 2.2, STAIRS.x - 2.4, 2.75, 15.32);
  signAt(5, 2.2, STAIRS.x - 2.4, 11.75, -3.12);
  signAt(7, 2.6, 11, 19.6, -12.85);
  const signMesh = new THREE.Mesh(mergeGeometries(signs, false)!, new THREE.MeshBasicMaterial({ map: signAtlas(), side: THREE.DoubleSide }));
  for (const g of signs) g.dispose();
  root.add(signMesh);
  const mural = new THREE.Mesh(new THREE.PlaneGeometry(13.4, 5.8), new THREE.MeshStandardMaterial({ map: muralTexture(), roughness: 0.9 }));
  mural.position.set(13.5, 12.1, -2.99);
  mural.receiveShadow = shadows;
  root.add(mural);

  // ---------------------------------------------------------- the cabins
  const cabinA = cabin('#b3332b', 1, shadows);
  const cabinB = cabin('#2e6b4f', 2, shadows);
  root.add(cabinA, cabinB);
  function setCabins(sA: number) {
    const a = cabinAt(sA, FUNICULAR.rails[0]), c = cabinAt(1 - sA, FUNICULAR.rails[1]);
    cabinA.position.set(a.x, a.y, a.z);
    cabinB.position.set(c.x, c.y, c.z);
  }
  setCabins(0);

  // ---------------------------------------------------------- markers for the rides
  // An amber ring with a chevron pointing the way in: two instanced meshes.
  const ringGeo = new THREE.RingGeometry(0.78, 0.98, 40);
  ringGeo.rotateX(-Math.PI / 2);
  const chevron = new THREE.ShapeGeometry(new THREE.Shape([new THREE.Vector2(-0.38, -0.2), new THREE.Vector2(0, 0.28), new THREE.Vector2(0.38, -0.2), new THREE.Vector2(0.38, -0.02), new THREE.Vector2(0, 0.46), new THREE.Vector2(-0.38, -0.02)]));
  chevron.rotateX(-Math.PI / 2);
  const markerMat = new THREE.MeshBasicMaterial({ color: '#ffc04a', transparent: true, opacity: 0.92, depthWrite: false, toneMapped: false, side: THREE.DoubleSide });
  const rings = new THREE.InstancedMesh(ringGeo, markerMat, LINKS.length);
  const arrows = new THREE.InstancedMesh(chevron, markerMat, LINKS.length);
  const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  LINKS.forEach((l, i) => {
    const y = groundY(l.at.x, l.at.z) + 0.04;
    rings.setMatrixAt(i, mtx.compose(v.set(l.at.x, y, l.at.z), q.identity(), one));
    // The chevron points along `enter` (its tip is local −z after rotateX).
    arrows.setMatrixAt(i, mtx.compose(v.set(l.at.x, y + 0.01, l.at.z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), l.enter + Math.PI), one));
  });
  rings.frustumCulled = arrows.frustumCulled = false;
  root.add(rings, arrows);

  // ---------------------------------------------------------- white circles
  const discMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.12, depthWrite: false, toneMapped: false });
  const spots = CIRCLES.map(c => { const s = buildSpot(c.id, c.spot.x, groundY(c.spot.x, c.spot.z), c.spot.z, discMaterial); root.add(s.group); return s; });

  // ---------------------------------------------------------- people
  const npcs: Npc[] = [];
  for (const c of CIRCLES) {
    const heading = Math.atan2(c.spot.x - c.npc.x, c.spot.z - c.npc.z);
    const y = groundY(c.npc.x, c.npc.z);
    const person = makePerson(HOSTS[c.id], 'stand', shadows);
    person.root.position.set(c.npc.x, y, c.npc.z);
    person.root.rotation.y = heading;
    root.add(person.root);
    npcs.push({ id: c.id, person, x: c.npc.x, y, z: c.npc.z, heading });
  }
  const crowdPeople: { person: Person; x: number; y: number; z: number; body?: string; seed: number }[] = [];
  for (const p of crowd(low ? 7 : 10)) {
    const look = randomLook(p.seed, 'costa');
    const person = makePerson(look, p.pose, false);
    const y = groundY(p.x, p.z);
    person.root.position.set(p.x, y, p.z);
    person.root.rotation.y = p.heading;
    if (low) animatePerson(person, 0, 0, false);
    root.add(person.root);
    crowdPeople.push({ person, x: p.x, y, z: p.z, body: look.body, seed: p.seed });
  }

  // Gulls over the port: one instanced mesh of small V wings.
  const gullGeo = new THREE.BufferGeometry();
  gullGeo.setAttribute('position', new THREE.Float32BufferAttribute([-0.6, 0.12, 0, 0, 0, 0.1, 0, 0, -0.1, 0, 0, 0.1, 0.6, 0.12, 0, 0, 0, -0.1], 3));
  gullGeo.computeVertexNormals();
  const GULLS = low ? 5 : 9;
  const gulls = new THREE.InstancedMesh(gullGeo, new THREE.MeshBasicMaterial({ color: '#f4f4f0', side: THREE.DoubleSide }), GULLS);
  gulls.frustumCulled = false;
  root.add(gulls);

  // ---------------------------------------------------------- low-power bake
  let focusKey = '';
  let focused: string | null = null;
  let hostBake: THREE.Group | null = null;
  const hostBakes = new Map<string, THREE.Group>();
  function hostsBaked(key: string, ids: string[]) {
    let group = hostBakes.get(key);
    if (!group) {
      const list = npcs.filter(n => ids.includes(n.id));
      for (const n of list) n.person.root.visible = true;
      group = bake(list.map(n => n.person.root), { hide: false });
      hostBakes.set(key, group);
    }
    return group;
  }
  let lastTerrace = 'puerto';
  const focusTerrace = () => lastTerrace;
  function focus(id: string | null, terrace: string) {
    lastTerrace = terrace;
    const shown = visibleHosts(terrace, id);
    const key = `${id ?? ''}|${[...shown].sort().join()}`;
    if (key === focusKey) return;
    focusKey = key;
    focused = id;
    if (!low) {
      for (const n of npcs) n.person.root.visible = shown.has(n.id);
      return;
    }
    // Low mode: the hosts who stand still are one baked group (blob shadows
    // included); the open circle's host is live.
    if (hostBake) root.remove(hostBake);
    hostBake = hostsBaked(key, [...shown].filter(s => s !== id));
    root.add(hostBake);
    for (const n of npcs) n.person.root.visible = n.id === id;
  }
  if (low) {
    root.add(bake(crowdPeople.map(c => c.person.root)));
    for (const c of crowdPeople) root.remove(c.person.root);
  }
  focus(null, 'puerto');

  const gm = new THREE.Matrix4(), gq = new THREE.Quaternion(), gp = new THREE.Vector3(), gs = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
  function animate(t: number, dt: number, px: number, pz: number) {
    for (const s of spots) { s.gem.position.y = 2.3 + Math.sin(t * 2 + s.group.position.x) * 0.12; s.gem.rotation.y += dt * 1.5; }
    for (const n of npcs) if (n.person.root.visible && (!low || n.id === focused)) animatePerson(n.person, dt, 0, false);
    if (!low) for (const c of crowdPeople) if (Math.abs(c.x - px) < 26 && Math.abs(c.z - pz) < 26) animatePerson(c.person, dt, 0, false);
    for (let i = 0; i < GULLS; i++) {
      const a = t * (0.12 + (i % 3) * 0.03) + i * 1.7;
      const r = 14 + (i % 4) * 6;
      gp.set(Math.sin(a) * r - 4 + i * 2, 14 + (i % 3) * 4 + Math.sin(t * 0.7 + i) * 1.2, 46 + Math.cos(a) * r * 0.6);
      gq.setFromAxisAngle(up, a + Math.PI / 2);
      gs.set(1, 1 + Math.sin(t * 6 + i) * 0.6, 1);
      gulls.setMatrixAt(i, gm.compose(gp, gq, gs));
    }
    gulls.instanceMatrix.needsUpdate = true;
  }
  animate(0, 0, 0, 0);

  const bodies = (): Body[] => [
    ...npcs.filter(n => visibleHosts(focusTerrace(), focused).has(n.id)).map((n, i) => ({ key: `host-${n.id}`, x: n.x, z: n.z, y: n.y, body: HOSTS[n.id]?.body, seed: i * 7 + 3 })),
    ...crowdPeople.map((c, i) => ({ key: `vecino-${i}`, x: c.x, z: c.z, y: c.y, body: c.body, seed: c.seed })),
  ];
  return { spots, npcs, setCabins, animate, focus, bodies, people: () => npcs.length + crowdPeople.length };
}
