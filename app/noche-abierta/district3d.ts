// Builds the city around the Noche Abierta centre in three.js from the data
// in city.mjs: eight districts, the new streets, the canal, the edges of the
// city and the two walkable street rooms (the 24 h laundromat and the roof of
// the old tenement). Everything is original procedural geometry and
// canvas-drawn textures, like build3d.ts: no model files, no image downloads.
//
// Each district is one group ("sector") whose static meshes are merged per
// material, so a whole district costs a few dozen draw calls; repeated things
// (lamps, trees, stall awnings, bollards, fence posts, sleepers) are
// instanced across the whole city. `update` hides districts far from the
// learner and animates water, blinking and flickering lights.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  BALCONY_PEOPLE, BARRIERS, CANAL, CEILINGS, CITY_BOUNDS, CITY_BUILDINGS, CITY_PARKED, CITY_PROPS, CROSSINGS,
  DISTRICT_ZONES, EDGES, GROUNDS, GROUPS, PLACEMENTS, ROADS, SITTERS, STREET_ROOMS, TREES,
  canalWater, groupMembers, lampPositions,
} from './city.mjs';
import {
  addBuilding, addPalm, batchStatic, box, canvas, cylinder, facadeTextures, glow, lightPool, makeCar,
  nightWindow, placeVehicle, random, sag, solid, storefrontTexture, stripes, tiles, walkRoom, type Night,
} from './build3d';

// ---------------------------------------------------------------- data types

type Side = 'north' | 'south' | 'east' | 'west';
type Rect = { x0: number; x1: number; z0: number; z1: number };
type Zone = Rect & { id: string; name: string; lamp: string; glow: string };
type CityBuilding = Rect & {
  id: string; district: string; h: number; style: string; sign?: string; door?: { side: Side; at: number };
  balconies?: Side[]; canopy?: boolean; shutter?: Side; fireEscape?: Side; party?: boolean; clock?: boolean; flags?: boolean;
};
type Prop = Rect & { id: string; kind: string; h: number; color?: string };
type Spot = { x: number; y: number; z: number };
type Placement = {
  x: number; z: number; y?: number; face: number; room?: string; seat?: boolean; balcony?: boolean;
  behindCounter?: boolean; behindDoor?: boolean; kiosk?: Rect; boat?: Rect; car?: { x: number; z: number; heading: number };
  poster?: Spot; window?: true | Spot; circle: { x: number; z: number; follow?: boolean };
};
type Road = Rect & { id: string; axis: 'x' | 'z' };
type Lamp = { x: number; z: number; arm: number; side?: boolean };
type Tree = { x: number; z: number; kind: 'lime' | 'plane' | 'palm'; lights?: boolean };
type Parked = { id: string; kind: 'sedan' | 'coupe' | 'taxi' | 'van'; x: number; z: number; heading: number; color: string };
type Edge = Rect & { id: string; kind: 'wall' | 'rail' | 'river'; h: number };
type Barrier = { id: string; x: number; z: number; axis: 'x' | 'z'; width: number };
type Ground = Rect & { id: string; kind: 'cobbles' | 'park' | 'stone' | 'market' | 'asphalt' | 'gravel' };

const ZONES = DISTRICT_ZONES as Zone[];
const BUILDINGS = CITY_BUILDINGS as unknown as CityBuilding[];
const PROPS = CITY_PROPS as unknown as Prop[];
const PLACES = PLACEMENTS as unknown as Record<string, Placement>;
const STREETS = ROADS as unknown as Road[];

export type Sector = { id: string; group: THREE.Group; x0: number; x1: number; z0: number; z1: number };
export type Districts = {
  root: THREE.Group;
  sectors: Sector[];
  update(dt: number, time: number, player: { x: number; z: number }): void;
  stats(): { meshes: number; sectorsVisible: number };
};

// Districts farther than this from the learner are hidden (fog hides the rest).
const STREAM_RANGE = 80;
// Storey height and window rhythm of every facade texture (see facadeTex).
const STOREY = 3.2;
const BAY = 3;

const TAU = Math.PI * 2;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const inside = (r: Rect, x: number, z: number, margin = 0) => x > r.x0 - margin && x < r.x1 + margin && z > r.z0 - margin && z < r.z1 + margin;

// Which district a point belongs to (points on the edges count as inside).
function zoneAt(x: number, z: number) {
  const cx = Math.min(CITY_BOUNDS.maxX - 0.01, Math.max(CITY_BOUNDS.minX, x));
  const cz = Math.min(CITY_BOUNDS.maxZ - 0.01, Math.max(CITY_BOUNDS.minZ, z));
  return ZONES.find(zone => cx >= zone.x0 && cx < zone.x1 && cz >= zone.z0 && cz < zone.z1) ?? ZONES[0];
}

// ---------------------------------------------------------------- small helpers

function slab(parent: THREE.Object3D, x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, material: THREE.Material, cast = true) {
  const mesh = box(Math.abs(x1 - x0), Math.abs(y1 - y0), Math.abs(z1 - z0), material, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, cast);
  parent.add(mesh);
  return mesh;
}

// A box whose texture keeps its real size: `tile` metres per repeat.
function texturedSlab(parent: THREE.Object3D, x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, material: THREE.Material, tile: number) {
  const w = x1 - x0, h = y1 - y0, d = z1 - z0;
  const geometry = new THREE.BoxGeometry(w, h, d);
  const uv = geometry.getAttribute('uv') as THREE.BufferAttribute;
  for (let face = 0; face < 6; face++) {
    const [su, sv] = face < 2 ? [d, h] : face < 4 ? [w, d] : [w, h];
    for (let v = 0; v < 4; v++) {
      const i = face * 4 + v;
      uv.setXY(i, (uv.getX(i) * su) / tile, (uv.getY(i) * sv) / tile);
    }
  }
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function quad(parent: THREE.Object3D, w: number, h: number, material: THREE.Material, x: number, y: number, z: number, ry = 0) {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

// A flat piece of floor, its texture in world units so neighbours line up.
function floor(parent: THREE.Object3D, r: Rect, y: number, material: THREE.Material, tile: number) {
  const w = r.x1 - r.x0, d = r.z1 - r.z0;
  const geometry = new THREE.PlaneGeometry(w, d);
  const uv = geometry.getAttribute('uv') as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (r.x0 + uv.getX(i) * w) / tile, (-r.z1 + uv.getY(i) * d) / tile);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set((r.x0 + r.x1) / 2, y, (r.z0 + r.z1) / 2);
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function m4(x: number, y: number, z: number, ry = 0, sx = 1, sy = 1, sz = 1, rx = 0, rz = 0) {
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')), new THREE.Vector3(sx, sy, sz));
}

// A box between two points (rails, braces, stair stringers): `w` × `h` thick.
function beam(parent: THREE.Object3D, a: THREE.Vector3, b: THREE.Vector3, w: number, h: number, material: THREE.Material) {
  const length = a.distanceTo(b);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, length), material);
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.lookAt(b);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function mergedMesh(parts: THREE.BufferGeometry[], material: THREE.Material) {
  const flat = parts.map(part => {
    const geometry = part.index ? part.toNonIndexed() : part;
    for (const name of Object.keys(geometry.attributes)) if (name !== 'position' && name !== 'normal' && name !== 'uv') geometry.deleteAttribute(name);
    return geometry;
  });
  return new THREE.Mesh(mergeGeometries(flat, false) ?? new THREE.BufferGeometry(), material);
}

// Facades: where a side of a building is, which way it looks, how to stand on it.
type Face = { side: Side; c: number; nx: number; nz: number; lo: number; hi: number; ry: number; along: 'x' | 'z' };
function faceOf(b: Rect, side: Side): Face {
  if (side === 'south') return { side, c: b.z1, nx: 0, nz: 1, lo: b.x0, hi: b.x1, ry: 0, along: 'x' };
  if (side === 'north') return { side, c: b.z0, nx: 0, nz: -1, lo: b.x0, hi: b.x1, ry: Math.PI, along: 'x' };
  if (side === 'east') return { side, c: b.x1, nx: 1, nz: 0, lo: b.z0, hi: b.z1, ry: Math.PI / 2, along: 'z' };
  return { side, c: b.x0, nx: -1, nz: 0, lo: b.z0, hi: b.z1, ry: -Math.PI / 2, along: 'z' };
}
function onFace(f: Face, t: number, y: number, out: number) {
  return f.along === 'x' ? new THREE.Vector3(t, y, f.c + f.nz * out) : new THREE.Vector3(f.c + f.nx * out, y, t);
}
// A box against a facade: `w` along it, from `out0` to `out1` metres in front.
function faceBox(parent: THREE.Object3D, f: Face, t: number, w: number, y0: number, y1: number, out0: number, out1: number, material: THREE.Material, cast = false) {
  const p = onFace(f, t, (y0 + y1) / 2, (out0 + out1) / 2);
  const depth = Math.abs(out1 - out0);
  const mesh = box(f.along === 'x' ? w : depth, y1 - y0, f.along === 'x' ? depth : w, material, p.x, p.y, p.z, cast);
  parent.add(mesh);
  return mesh;
}
function facePlane(parent: THREE.Object3D, f: Face, t: number, y: number, out: number, w: number, h: number, material: THREE.Material) {
  const p = onFace(f, t, y, out);
  return quad(parent, w, h, material, p.x, p.y, p.z, f.ry);
}
// Centre of the k-th window bay of a facade (matches the UVs of addBuilding).
function bayAt(b: Rect, f: Face, k: number) {
  const offset = BAY / 2 + BAY * k;
  if (f.side === 'south') return b.x0 + offset;
  if (f.side === 'north') return b.x1 - offset;
  if (f.side === 'east') return b.z1 - offset;
  return b.z0 + offset;
}

// ---------------------------------------------------------------- textures

function speckle(ctx: CanvasRenderingContext2D, rand: () => number, size: number, count: number, alpha: number, dark = true) {
  for (let i = 0; i < count; i++) {
    ctx.fillStyle = dark ? `rgba(0,0,0,${rand() * alpha})` : `rgba(255,255,255,${rand() * alpha})`;
    ctx.fillRect(rand() * size, rand() * size, 2, 2);
  }
}

function shade(color: string, k: number) {
  return `#${new THREE.Color(color).multiplyScalar(k).getHexString()}`;
}

type FacadeKind = 'plain' | 'peeling' | 'stone' | 'ribbon' | 'ribbon-dark' | 'garage' | 'corrugated' | 'arches';

// District facades. Same layout as facadeTextures in build3d.ts: a 256 px
// tile is 4 bays × 4 storeys (12 m × 12.8 m), so balconies, doors and the
// UV scaling of addBuilding line up with the windows.
function facadeTex(kind: FacadeKind, seed: number, light: string, partyColors?: string[]) {
  if (kind === 'plain') {
    if (!partyColors) return facadeTextures(seed);
    const { map } = facadeTextures(seed);
    const rand = random(seed + 5);
    const emissive = canvas(256, 256, ctx => {
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 256, 256);
      for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) {
        if (rand() > 0.78) continue;
        ctx.fillStyle = partyColors[Math.floor(rand() * partyColors.length)];
        ctx.fillRect(col * 64 + 16, row * 64 + 14, 32, 36);
        ctx.fillStyle = 'rgba(0,0,0,.6)';
        // Someone dancing against the light.
        if (rand() > 0.5) { ctx.beginPath(); ctx.ellipse(col * 64 + 24 + rand() * 16, row * 64 + 40, 5, 12, 0, 0, TAU); ctx.fill(); }
        ctx.fillRect(col * 64 + 31, row * 64 + 14, 2, 36);
      }
    }, true);
    return { map, emissive };
  }
  const rand = random(seed * 31 + kind.length * 7);
  const lit: number[] = Array.from({ length: 64 }, () => rand());
  const lightHi = shade(light, 1), lightLo = shade(light, 0.62);
  const black = (ctx: CanvasRenderingContext2D) => { ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 256, 256); };
  const warmFill = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) => {
    const g = ctx.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(0, lightHi); g.addColorStop(1, lightLo);
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
  };

  if (kind === 'peeling') {
    // Old plaster: patches where it fell off and the bricks show, damp
    // streaks, tall windows with wooden shutters, some closed.
    const shutters = Array.from({ length: 16 }, () => (rand() > 0.5 ? '#4f6a4a' : '#7a5236'));
    const map = canvas(256, 256, ctx => {
      ctx.fillStyle = '#ece3d3'; ctx.fillRect(0, 0, 256, 256);
      speckle(ctx, rand, 256, 1600, 0.06);
      for (let i = 0; i < 8; i++) {
        const x = rand() * 240, y = rand() * 240, w = 16 + rand() * 40, h = 10 + rand() * 24;
        ctx.save();
        ctx.beginPath(); ctx.ellipse(x, y, w / 2, h / 2, rand() * 0.6, 0, TAU); ctx.clip();
        ctx.fillStyle = '#a8644a'; ctx.fillRect(x - w, y - h, w * 2, h * 2);
        ctx.fillStyle = 'rgba(60,30,20,.55)';
        for (let by = y - h; by < y + h; by += 4) ctx.fillRect(x - w, by, w * 2, 1);
        for (let by = y - h, r = 0; by < y + h; by += 4, r++) for (let bx = x - w + (r % 2) * 5; bx < x + w; bx += 10) ctx.fillRect(bx, by, 1, 4);
        ctx.restore();
      }
      for (let i = 0; i < 14; i++) { ctx.fillStyle = `rgba(70,60,40,${0.05 + rand() * 0.07})`; ctx.fillRect(rand() * 256, rand() * 128, 2 + rand() * 6, 50 + rand() * 120); }
      for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) {
        const x = col * 64, y = row * 64, v = lit[row * 4 + col];
        ctx.fillStyle = '#5a4f44'; ctx.fillRect(x + 17, y + 7, 30, 48);
        const pane = ctx.createLinearGradient(0, y + 9, 0, y + 53);
        pane.addColorStop(0, '#36404c'); pane.addColorStop(1, '#1b2028');
        ctx.fillStyle = pane; ctx.fillRect(x + 19, y + 9, 26, 44);
        ctx.fillStyle = shutters[row * 4 + col];
        if (v > 0.7) ctx.fillRect(x + 19, y + 9, 26, 44);
        else { ctx.fillRect(x + 5, y + 9, 12, 44); ctx.fillRect(x + 47, y + 9, 12, 44); }
        ctx.fillStyle = 'rgba(0,0,0,.35)';
        for (let ly = y + 11; ly < y + 52; ly += 3) {
          if (v > 0.7) ctx.fillRect(x + 19, ly, 26, 1);
          else { ctx.fillRect(x + 5, ly, 12, 1); ctx.fillRect(x + 47, ly, 12, 1); }
        }
        ctx.fillStyle = '#d8cfbf'; ctx.fillRect(x + 14, y + 54, 36, 3);
      }
    }, true);
    const emissive = canvas(256, 256, ctx => {
      black(ctx);
      for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) {
        const x = col * 64, y = row * 64, v = lit[row * 4 + col];
        if (v < 0.4) {
          warmFill(ctx, x + 19, y + 9, 26, 44);
          ctx.fillStyle = 'rgba(30,15,5,.6)';
          if (v < 0.15) ctx.fillRect(x + 19, y + 9, 9, 44);
          ctx.fillStyle = '#000'; ctx.fillRect(x + 31, y + 9, 2, 44);
        } else if (v > 0.7 && v < 0.84) {
          // Light through the slats of a closed shutter.
          ctx.fillStyle = lightLo;
          for (let ly = y + 12; ly < y + 52; ly += 3) ctx.fillRect(x + 19, ly, 26, 1);
        }
      }
    }, true);
    return { map, emissive };
  }

  if (kind === 'stone') {
    // Ashlar stone, tall framed windows with a small cornice; warm-white rooms.
    const map = canvas(256, 256, ctx => {
      ctx.fillStyle = '#efe7d8'; ctx.fillRect(0, 0, 256, 256);
      speckle(ctx, rand, 256, 900, 0.04);
      ctx.fillStyle = 'rgba(90,80,60,.22)';
      for (let y = 0, r = 0; y < 256; y += 8, r++) {
        ctx.fillRect(0, y, 256, 1);
        for (let x = (r % 2) * 12; x < 256; x += 24) ctx.fillRect(x, y, 1, 8);
      }
      for (let row = 0; row < 4; row++) {
        ctx.fillStyle = '#d9cfbc'; ctx.fillRect(0, row * 64 + 60, 256, 4);
        for (let col = 0; col < 4; col++) {
          const x = col * 64, y = row * 64;
          ctx.fillStyle = '#d4c8b2'; ctx.fillRect(x + 13, y + 1, 38, 5);
          ctx.fillStyle = '#f6f1e6'; ctx.fillRect(x + 15, y + 6, 34, 52);
          const pane = ctx.createLinearGradient(0, y + 9, 0, y + 55);
          pane.addColorStop(0, '#3a4452'); pane.addColorStop(1, '#1c222b');
          ctx.fillStyle = pane; ctx.fillRect(x + 18, y + 9, 28, 46);
          ctx.fillStyle = '#e8e0d0'; ctx.fillRect(x + 31, y + 9, 2, 46); ctx.fillRect(x + 18, y + 26, 28, 2);
        }
      }
    }, true);
    const emissive = canvas(256, 256, ctx => {
      black(ctx);
      for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) {
        const x = col * 64, y = row * 64, v = lit[row * 4 + col];
        if (v > 0.48) continue;
        warmFill(ctx, x + 18, y + 9, 28, 46);
        ctx.fillStyle = 'rgba(70,35,15,.55)';
        ctx.fillRect(x + 18, y + 9, 5, 46); ctx.fillRect(x + 41, y + 9, 5, 46);
        if (v < 0.18) { ctx.fillStyle = '#fff6e0'; ctx.beginPath(); ctx.arc(x + 32, y + 15, 3, 0, TAU); ctx.fill(); }
        ctx.fillStyle = '#000'; ctx.fillRect(x + 31, y + 9, 2, 46); ctx.fillRect(x + 18, y + 26, 28, 2);
      }
    }, true);
    return { map, emissive };
  }

  if (kind === 'ribbon' || kind === 'ribbon-dark') {
    // Clinic, police, school: continuous window bands, office light.
    const ratio = kind === 'ribbon' ? 0.62 : 0.1;
    const map = canvas(256, 256, ctx => {
      ctx.fillStyle = '#eceeee'; ctx.fillRect(0, 0, 256, 256);
      speckle(ctx, rand, 256, 700, 0.04);
      for (let row = 0; row < 4; row++) {
        const y = row * 64;
        ctx.fillStyle = '#2b3540'; ctx.fillRect(0, y + 16, 256, 30);
        ctx.fillStyle = '#9aa3ab';
        for (let x = 0; x < 256; x += 16) ctx.fillRect(x, y + 16, 2, 30);
        ctx.fillRect(0, y + 15, 256, 2); ctx.fillRect(0, y + 45, 256, 2);
        ctx.fillStyle = 'rgba(0,0,0,.08)'; ctx.fillRect(0, y + 47, 256, 6);
      }
    }, true);
    const emissive = canvas(256, 256, ctx => {
      black(ctx);
      for (let row = 0; row < 4; row++) for (let s = 0; s < 16; s++) {
        if (lit[row * 16 + s] > ratio) continue;
        const x = s * 16 + 2, y = row * 64 + 17;
        const g = ctx.createLinearGradient(0, y, 0, y + 28);
        g.addColorStop(0, lightHi); g.addColorStop(1, lightLo);
        ctx.fillStyle = g; ctx.fillRect(x, y, 14, 28);
        if (lit[(row * 16 + s + 7) % 64] > 0.6) { ctx.fillStyle = 'rgba(0,0,0,.45)'; for (let ly = y + 2; ly < y + 14; ly += 3) ctx.fillRect(x, ly, 14, 1); }
      }
    }, true);
    return { map, emissive };
  }

  if (kind === 'garage') {
    // Open parking decks: concrete bands, dark gaps, parked cars inside.
    const map = canvas(256, 256, ctx => {
      ctx.fillStyle = '#cfccc4'; ctx.fillRect(0, 0, 256, 256);
      speckle(ctx, rand, 256, 1200, 0.07);
      for (let row = 0; row < 4; row++) {
        const y = row * 64;
        ctx.fillStyle = '#16181c'; ctx.fillRect(0, y + 22, 256, 32);
        for (let x = 0; x < 256; x += 64) { ctx.fillStyle = '#bdb9b0'; ctx.fillRect(x, y + 22, 8, 32); }
        for (let i = 0; i < 5; i++) {
          if (rand() > 0.7) continue;
          ctx.fillStyle = ['#6e2a25', '#2f4f6a', '#c9c4b8', '#3a3a3a', '#7a6a3a'][Math.floor(rand() * 5)];
          const cx = 12 + i * 50 + rand() * 10;
          ctx.fillRect(cx, y + 42, 34, 10); ctx.fillRect(cx + 7, y + 36, 20, 7);
        }
        ctx.fillStyle = '#e8e4da'; ctx.fillRect(0, y + 54, 256, 2);
      }
    }, true);
    const emissive = canvas(256, 256, ctx => {
      black(ctx);
      for (let row = 0; row < 4; row++) {
        const y = row * 64;
        ctx.fillStyle = 'rgba(70,86,104,.55)'; ctx.fillRect(0, y + 22, 256, 32);
        ctx.fillStyle = lightHi;
        for (let x = 20; x < 256; x += 32) ctx.fillRect(x, y + 23, 12, 2);
      }
    }, true);
    return { map, emissive };
  }

  if (kind === 'corrugated') {
    // Warehouse sheeting with a band of high windows, rust running down.
    const draw = (ctx: CanvasRenderingContext2D) => {
      for (let x = 0; x < 256; x += 8) {
        ctx.fillStyle = '#c9cfd0'; ctx.fillRect(x, 0, 4, 256);
        ctx.fillStyle = '#98a0a2'; ctx.fillRect(x + 4, 0, 4, 256);
      }
      for (let i = 0; i < 18; i++) { ctx.fillStyle = `rgba(120,60,25,${0.08 + rand() * 0.14})`; ctx.fillRect(rand() * 256, rand() * 200, 3 + rand() * 5, 30 + rand() * 90); }
      ctx.fillStyle = '#5d6466'; ctx.fillRect(0, 82, 256, 30);
      for (let col = 0; col < 4; col++) {
        ctx.fillStyle = '#26303a'; ctx.fillRect(col * 64 + 4, 85, 56, 24);
        ctx.fillStyle = '#5d6466';
        for (let x = col * 64 + 4; x < col * 64 + 60; x += 14) ctx.fillRect(x, 85, 2, 24);
        ctx.fillRect(col * 64 + 4, 96, 56, 2);
      }
    };
    const map = canvas(256, 256, draw, true);
    const emissive = canvas(256, 256, ctx => {
      black(ctx);
      for (let col = 0; col < 4; col++) for (let p = 0; p < 4; p++) {
        if (!partyColors && lit[col * 4 + p] > 0.4) continue;
        ctx.fillStyle = partyColors ? partyColors[(col * 4 + p) % partyColors.length] : lightLo;
        ctx.fillRect(col * 64 + 6 + p * 14, 86, 12, 22);
      }
    }, true);
    return { map, emissive };
  }

  // Arches: the station hall and the market, tall arched windows.
  const map = canvas(256, 256, ctx => {
    ctx.fillStyle = '#e9dfcc'; ctx.fillRect(0, 0, 256, 256);
    speckle(ctx, rand, 256, 900, 0.05);
    for (let row = 0; row < 4; row++) {
      ctx.fillStyle = 'rgba(80,60,40,.25)'; ctx.fillRect(0, row * 64 + 60, 256, 4);
      for (let col = 0; col < 4; col++) {
        const x = col * 64 + 32, y = row * 64;
        ctx.fillStyle = '#7a6a56';
        ctx.beginPath(); ctx.arc(x, y + 22, 18, Math.PI, 0); ctx.lineTo(x + 18, y + 58); ctx.lineTo(x - 18, y + 58); ctx.fill();
        ctx.fillStyle = '#1f2630';
        ctx.beginPath(); ctx.arc(x, y + 22, 15, Math.PI, 0); ctx.lineTo(x + 15, y + 56); ctx.lineTo(x - 15, y + 56); ctx.fill();
        ctx.fillStyle = '#7a6a56'; ctx.fillRect(x - 1, y + 7, 2, 49); ctx.fillRect(x - 15, y + 30, 30, 2);
        ctx.fillStyle = '#d6c8ae'; ctx.fillRect(x - 3, y + 2, 6, 6);
      }
    }
  }, true);
  const emissive = canvas(256, 256, ctx => {
    black(ctx);
    for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) {
      if (lit[row * 4 + col] > 0.75) continue;
      const x = col * 64 + 32, y = row * 64;
      const g = ctx.createLinearGradient(0, y + 7, 0, y + 56);
      g.addColorStop(0, lightHi); g.addColorStop(1, lightLo);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y + 22, 15, Math.PI, 0); ctx.lineTo(x + 15, y + 56); ctx.lineTo(x - 15, y + 56); ctx.fill();
      ctx.fillStyle = '#000'; ctx.fillRect(x - 1, y + 7, 2, 49); ctx.fillRect(x - 15, y + 30, 30, 2);
    }
  }, true);
  return { map, emissive };
}

// The look of each building style: facade texture and tint.
const STYLE: Record<string, { kind: FacadeKind; tint: string }> = {
  brick: { kind: 'plain', tint: '#b0634a' }, cream: { kind: 'plain', tint: '#e6d5b2' }, slate: { kind: 'plain', tint: '#8f98a4' },
  teal: { kind: 'plain', tint: '#6fa39b' }, plaster: { kind: 'plain', tint: '#d9b89a' }, cinema: { kind: 'plain', tint: '#e2cdb0' },
  old: { kind: 'peeling', tint: '#d6c3a5' }, oldhotel: { kind: 'peeling', tint: '#cdb08f' }, laundry: { kind: 'peeling', tint: '#b9c9c6' },
  grand: { kind: 'stone', tint: '#ddd1b9' }, elegant: { kind: 'stone', tint: '#cfc3ab' }, boutique: { kind: 'stone', tint: '#e4dccb' },
  gallery: { kind: 'stone', tint: '#f0ece4' }, wine: { kind: 'plain', tint: '#7d4038' }, stone: { kind: 'stone', tint: '#d9d0bd' },
  clinic: { kind: 'ribbon', tint: '#eef1f2' }, pharmacy: { kind: 'ribbon', tint: '#e3ebe6' }, police: { kind: 'ribbon', tint: '#97a2b2' },
  garage: { kind: 'garage', tint: '#cfcbc2' }, school: { kind: 'ribbon-dark', tint: '#d8b48a' }, market: { kind: 'arches', tint: '#c07a58' },
  station: { kind: 'arches', tint: '#d9caa9' }, warehouse: { kind: 'corrugated', tint: '#a9b2b4' },
};

// Shared one-off textures.
function doorTexture() {
  return canvas(128, 192, ctx => {
    ctx.fillStyle = '#4a3222'; ctx.fillRect(0, 0, 128, 192);
    ctx.fillStyle = '#ffd48c'; ctx.fillRect(14, 16, 44, 120); ctx.fillRect(70, 16, 44, 120);
    ctx.fillStyle = '#2a1c12'; ctx.fillRect(60, 0, 8, 192); ctx.fillRect(14, 72, 100, 5);
    for (const x of [14, 70]) for (let y = 20; y < 132; y += 12) ctx.fillRect(x, y, 44, 2);
    ctx.fillStyle = '#c9a24a'; ctx.fillRect(50, 140, 6, 16); ctx.fillRect(72, 140, 6, 16);
  });
}

function shutterTexture(seed: number) {
  const rand = random(seed);
  return canvas(512, 256, ctx => {
    ctx.fillStyle = '#80848a'; ctx.fillRect(0, 0, 512, 256);
    for (let y = 0; y < 256; y += 8) { ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(0, y, 512, 2); ctx.fillStyle = 'rgba(255,255,255,.07)'; ctx.fillRect(0, y + 4, 512, 1); }
    for (let i = 0; i < 12; i++) { ctx.fillStyle = `rgba(110,60,30,${rand() * 0.15})`; ctx.fillRect(rand() * 512, rand() * 256, 20 + rand() * 60, 4 + rand() * 30); }
    // A spray-painted tag.
    const words = ['NOCHE', 'K7', 'LUNA', 'TOTO', 'SUR', 'RAYO'];
    ctx.save();
    ctx.translate(120 + rand() * 260, 150 + rand() * 40);
    ctx.rotate((rand() - 0.5) * 0.3);
    ctx.font = '900 italic 92px "Arial Black", Impact, sans-serif';
    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';
    const word = words[Math.floor(rand() * words.length)];
    ctx.lineWidth = 14; ctx.strokeStyle = '#111111'; ctx.strokeText(word, 0, 0);
    ctx.fillStyle = ['#e0457a', '#3fb6c8', '#f2c230', '#7ad15a'][Math.floor(rand() * 4)]; ctx.fillText(word, 0, 0);
    ctx.lineWidth = 3; ctx.strokeStyle = '#f4f1ea'; ctx.strokeText(word, 0, 0);
    ctx.restore();
    ctx.fillStyle = 'rgba(20,20,20,.7)';
    for (let i = 0; i < 6; i++) ctx.fillRect(rand() * 512, 40 + rand() * 60, 2, 10 + rand() * 30);
  });
}

// Shop windows of the district shops. Door in the middle of the texture.
function shopTexture(kind: 'laundry' | 'boutique' | 'wine' | 'gallery' | 'lobby' | 'pharmacy' | 'market' | 'clinic') {
  return canvas(512, 256, ctx => {
    const rand = random(kind.length * 13 + 5);
    const tone: Record<string, [string, string]> = {
      laundry: ['#f2f8ff', '#cfe0ec'], boutique: ['#fff3e0', '#e8c9a0'], wine: ['#ffcf8a', '#a8532e'], gallery: ['#ffffff', '#e6e6e2'],
      lobby: ['#ffe0a8', '#d89a58'], pharmacy: ['#f4fff6', '#cfe8d8'], market: ['#ffd08a', '#e08a40'], clinic: ['#f2f8ff', '#d6e4f2'],
    };
    const [top, bottom] = tone[kind];
    const g = ctx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, top); g.addColorStop(1, bottom);
    ctx.fillStyle = g; ctx.fillRect(0, 0, 512, 256);
    if (kind === 'laundry') {
      for (let i = 0; i < 6; i++) {
        const x = 30 + i * 80 + (i > 2 ? 40 : 0);
        if (x > 470) continue;
        ctx.fillStyle = '#e9edf0'; ctx.fillRect(x - 28, 120, 56, 120);
        ctx.fillStyle = '#7d8a96'; ctx.beginPath(); ctx.arc(x, 170, 20, 0, TAU); ctx.fill();
        ctx.fillStyle = ['#9bc4e2', '#e2b49b', '#c9e29b'][i % 3]; ctx.beginPath(); ctx.arc(x, 170, 14, 0, TAU); ctx.fill();
      }
    } else if (kind === 'boutique') {
      for (const x of [80, 170, 340, 430]) {
        ctx.fillStyle = '#3a2f2a'; ctx.beginPath(); ctx.arc(x, 70, 12, 0, TAU); ctx.fill();
        ctx.fillStyle = ['#8e2f4a', '#20304a', '#c9a24a', '#2f5d4a'][Math.floor(rand() * 4)];
        ctx.beginPath(); ctx.moveTo(x - 18, 86); ctx.lineTo(x + 18, 86); ctx.lineTo(x + 30, 220); ctx.lineTo(x - 30, 220); ctx.fill();
      }
    } else if (kind === 'wine') {
      for (let y = 30; y < 240; y += 26) for (let x = 10; x < 512; x += 18) {
        if (x > 200 && x < 312) continue;
        ctx.fillStyle = ['#3a1418', '#20301c', '#5a2a18'][Math.floor(rand() * 3)];
        ctx.beginPath(); ctx.arc(x, y, 6, 0, TAU); ctx.fill();
      }
    } else if (kind === 'gallery') {
      for (const [x, w, c] of [[40, 110, '#1f4a7a'], [330, 80, '#c9452c'], [430, 60, '#e8c46a']] as const) {
        ctx.fillStyle = '#2a2a2a'; ctx.fillRect(x - 4, 56, w + 8, 98);
        ctx.fillStyle = c; ctx.fillRect(x, 60, w, 90);
        ctx.fillStyle = 'rgba(255,255,255,.4)'; ctx.beginPath(); ctx.arc(x + w / 2, 105, w / 4, 0, TAU); ctx.fill();
      }
    } else if (kind === 'lobby' || kind === 'market') {
      for (let i = 0; i < 7; i++) {
        const x = rand() * 480, w = 20 + rand() * 26;
        ctx.fillStyle = 'rgba(90,45,20,.35)'; ctx.fillRect(x, 150 + rand() * 30, w, 106);
        ctx.beginPath(); ctx.arc(x + w / 2, 132 + rand() * 18, 13, 0, TAU); ctx.fill();
      }
      if (kind === 'market') for (let x = 20; x < 512; x += 46) { ctx.fillStyle = ['#c9452c', '#e8c46a', '#5a8a3a', '#d97a2a'][Math.floor(rand() * 4)]; ctx.fillRect(x, 180, 34, 40); }
    } else {
      for (let s = 0; s < 3; s++) {
        ctx.fillStyle = '#a7b2b0'; ctx.fillRect(0, 70 + s * 60, 512, 4);
        for (let i = 0; i < 36; i++) { ctx.fillStyle = ['#ffffff', '#d24a3a', '#3a7bd2', '#7ac08a'][Math.floor(rand() * 4)]; ctx.fillRect(i * 14 + rand() * 4, 52 + s * 60, 9, 18); }
      }
    }
    ctx.fillStyle = '#2a2420';
    for (let x = 0; x <= 512; x += 128) ctx.fillRect(x - 4, 0, 8, 256);
    ctx.fillRect(0, 0, 512, 10); ctx.fillRect(0, 246, 512, 10);
    ctx.fillRect(216, 24, 80, 232);
    ctx.fillStyle = kind === 'wine' || kind === 'lobby' || kind === 'market' ? '#ffd08a' : '#f0f6ff';
    ctx.fillRect(226, 36, 60, 210);
    ctx.fillStyle = '#2a2420'; ctx.fillRect(254, 36, 4, 210);
  });
}

// Neutral round glow for the light pools under every new street lamp; the
// instance colour gives each district its own light.
function whitePool() {
  return canvas(128, 128, ctx => {
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.45, 'rgba(255,255,255,.42)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
  });
}

// Railings: bars on a transparent canvas, cut out with alphaTest.
function railingTexture(color: string, ornate: boolean) {
  const texture = canvas(128, 64, ctx => {
    ctx.clearRect(0, 0, 128, 64);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 128, 6); ctx.fillRect(0, 56, 128, 4);
    for (let x = 4; x < 128; x += 16) ctx.fillRect(x, 0, 4, 60);
    if (ornate) {
      ctx.strokeStyle = color; ctx.lineWidth = 3;
      for (let x = 12; x < 128; x += 32) { ctx.beginPath(); ctx.ellipse(x + 4, 32, 6, 14, 0, 0, TAU); ctx.stroke(); }
    }
  }, true);
  return texture;
}

function chainLinkTexture() {
  return canvas(64, 64, ctx => {
    ctx.clearRect(0, 0, 64, 64);
    ctx.strokeStyle = 'rgba(175,182,186,1)'; ctx.lineWidth = 2;
    for (let i = -64; i < 128; i += 12) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + 64, 64); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(i + 64, 0); ctx.lineTo(i, 64); ctx.stroke();
    }
  }, true);
}

function hoardingTexture() {
  return canvas(512, 256, ctx => {
    const rand = random(404);
    ctx.fillStyle = '#3d5a48'; ctx.fillRect(0, 0, 512, 256);
    for (let x = 0; x < 512; x += 12) { ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(x, 0, 5, 256); }
    for (let x = 0; x < 512; x += 128) { ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.fillRect(x, 0, 3, 256); }
    // Torn posters glued on the panels.
    for (let i = 0; i < 5; i++) {
      const x = rand() * 440, y = 40 + rand() * 120;
      ctx.fillStyle = ['#e8dcc0', '#d24a3a', '#f2c230', '#e0e4e8'][i % 4];
      ctx.fillRect(x, y, 50 + rand() * 30, 70 + rand() * 20);
      ctx.fillStyle = 'rgba(30,30,30,.7)';
      for (let l = 0; l < 4; l++) ctx.fillRect(x + 6, y + 12 + l * 14, 30 + rand() * 30, 5);
    }
    ctx.fillStyle = '#f2c230'; ctx.fillRect(0, 226, 512, 18);
    ctx.fillStyle = '#1b1b1b';
    for (let x = -20; x < 512; x += 36) { ctx.beginPath(); ctx.moveTo(x, 244); ctx.lineTo(x + 18, 226); ctx.lineTo(x + 30, 226); ctx.lineTo(x + 12, 244); ctx.fill(); }
    ctx.font = '700 30px "Arial Black", sans-serif'; ctx.fillStyle = '#f4f1ea'; ctx.textAlign = 'center';
    ctx.fillText('OBRA EN CURSO', 256, 34);
  }, true);
}

function brickTexture(base = '#8a4a36') {
  return canvas(128, 128, ctx => {
    const rand = random(77 + base.length);
    ctx.fillStyle = '#6a625a'; ctx.fillRect(0, 0, 128, 128);
    for (let row = 0; row < 16; row++) for (let col = -1; col < 5; col++) {
      const x = col * 32 + (row % 2) * 16, y = row * 8;
      ctx.fillStyle = shade(base, 0.8 + rand() * 0.35);
      ctx.fillRect(x + 1, y + 1, 30, 6);
    }
  }, true);
}

function stoneTexture(base: string, line: string, cells: number, seed: number) {
  return canvas(256, 256, ctx => {
    const rand = random(seed);
    ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
    const size = 256 / cells;
    for (let r = 0; r < cells; r++) for (let c = 0; c < cells; c++) {
      ctx.fillStyle = `rgba(${rand() > 0.5 ? '0,0,0' : '255,255,255'},${rand() * 0.07})`;
      ctx.fillRect(c * size, r * size, size, size);
    }
    speckle(ctx, rand, 256, 1500, 0.06);
    ctx.strokeStyle = line; ctx.lineWidth = 2;
    for (let i = 0; i <= cells; i++) {
      ctx.beginPath(); ctx.moveTo(i * size, 0); ctx.lineTo(i * size, 256); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * size); ctx.lineTo(256, i * size); ctx.stroke();
    }
  }, true);
}

function cobbleTexture() {
  return canvas(256, 256, ctx => {
    const rand = random(919);
    ctx.fillStyle = '#2e2a26'; ctx.fillRect(0, 0, 256, 256);
    for (let row = 0; row < 16; row++) for (let col = 0; col < 16; col++) {
      const x = col * 16 + (row % 2) * 8 + rand() * 2, y = row * 16 + rand() * 2;
      const tone = 0.75 + rand() * 0.45;
      ctx.fillStyle = shade(rand() > 0.3 ? '#8a8378' : '#8a7462', tone);
      ctx.beginPath(); ctx.ellipse(x + 7, y + 7, 6.5, 6, rand(), 0, TAU); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.beginPath(); ctx.ellipse(x + 5.5, y + 5, 3, 2, 0, 0, TAU); ctx.fill();
    }
  }, true);
}

function grassTexture() {
  return canvas(256, 256, ctx => {
    const rand = random(303);
    ctx.fillStyle = '#2e4529'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 5000; i++) {
      ctx.fillStyle = ['#3a5631', '#27391f', '#44623a', '#33492b'][Math.floor(rand() * 4)];
      ctx.fillRect(rand() * 256, rand() * 256, 1.5, 3);
    }
  }, true);
}

function gravelTexture(base: string) {
  return canvas(256, 256, ctx => {
    const rand = random(base.length * 11);
    ctx.fillStyle = base; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 6000; i++) {
      ctx.fillStyle = `rgba(${rand() > 0.5 ? '255,255,255' : '0,0,0'},${0.05 + rand() * 0.15})`;
      ctx.fillRect(rand() * 256, rand() * 256, 1 + rand() * 2, 1 + rand() * 2);
    }
  }, true);
}

function marketTileTexture() {
  return canvas(256, 256, ctx => {
    const rand = random(616);
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
      ctx.fillStyle = (r + c) % 2 ? shade('#9a5a3e', 0.9 + rand() * 0.2) : shade('#b98a5a', 0.9 + rand() * 0.2);
      ctx.fillRect(c * 32, r * 32, 32, 32);
    }
    ctx.strokeStyle = 'rgba(30,20,10,.45)'; ctx.lineWidth = 2;
    for (let i = 0; i <= 8; i++) {
      ctx.beginPath(); ctx.moveTo(i * 32, 0); ctx.lineTo(i * 32, 256); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * 32); ctx.lineTo(256, i * 32); ctx.stroke();
    }
    speckle(ctx, rand, 256, 1200, 0.08);
  }, true);
}

function waterTexture() {
  return canvas(256, 256, ctx => {
    const rand = random(1717);
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 260; i++) {
      const x = rand() * 256, y = rand() * 256, w = 6 + rand() * 26;
      ctx.fillStyle = `rgba(150,180,210,${0.05 + rand() * 0.22})`;
      ctx.fillRect(x, y, w, 1 + rand() * 1.5);
      if (x + w > 256) ctx.fillRect(x - 256, y, w, 1.5);
    }
  }, true);
}

// Old billboards on the walls that close the city: six invented adverts in
// one texture (2 × 3 cells), worn and faded.
function billboardAtlas() {
  return canvas(1024, 768, ctx => {
    const rand = random(2024);
    const cell = (i: number, draw: (x: number, y: number) => void) => draw((i % 2) * 512, Math.floor(i / 2) * 256);
    const title = (x: number, y: number, text: string, color: string, size = 64) => {
      ctx.font = `800 ${size}px Georgia, "Times New Roman", serif`; ctx.textAlign = 'center'; ctx.fillStyle = color;
      ctx.fillText(text, x + 256, y, 470);
    };
    cell(0, (x, y) => {
      ctx.fillStyle = '#f2e6cc'; ctx.fillRect(x, y, 512, 256);
      ctx.fillStyle = '#2f6a8a'; ctx.fillRect(x, y + 190, 512, 66);
      ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.ellipse(x + 400, y + 130, 70, 50, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = '#1d1d1f'; for (const [dx, dy] of [[-30, -10], [20, 20], [40, -25]]) { ctx.beginPath(); ctx.arc(x + 400 + dx, y + 130 + dy, 12, 0, TAU); ctx.fill(); }
      title(x - 80, y + 90, 'LECHE', '#2f6a8a', 70); title(x - 80, y + 160, 'LA VAQUITA', '#c0342b', 52);
      ctx.fillStyle = '#ffffff'; ctx.font = 'italic 28px Georgia, serif'; ctx.textAlign = 'center'; ctx.fillText('fresca desde 1962', x + 256, y + 232);
    });
    cell(1, (x, y) => {
      ctx.fillStyle = '#1d1a2e'; ctx.fillRect(x, y, 512, 256);
      ctx.fillStyle = '#e0457a'; ctx.beginPath(); ctx.arc(x + 90, y + 128, 70, 0, TAU); ctx.fill();
      title(x + 60, y + 110, 'TANGO', '#f2e6cc', 80); title(x + 60, y + 180, 'TODOS LOS SÁBADOS', '#e8c46a', 36);
    });
    cell(2, (x, y) => {
      ctx.fillStyle = '#e8c46a'; ctx.fillRect(x, y, 512, 256);
      for (let i = 0; i < 6; i++) { ctx.fillStyle = ['#c0342b', '#2f6a8a', '#3a8a5a'][i % 3]; ctx.fillRect(x + 30 + i * 30, y + 40, 22, 180); }
      title(x + 90, y + 110, 'PINTURAS', '#1d1d1f', 58); title(x + 90, y + 180, 'COLOR VIVO', '#c0342b', 50);
    });
    cell(3, (x, y) => {
      ctx.fillStyle = '#3a5a3a'; ctx.fillRect(x, y, 512, 256);
      ctx.fillStyle = '#c99a5a'; ctx.beginPath(); ctx.ellipse(x + 420, y + 150, 50, 70, 0.2, 0, TAU); ctx.fill();
      title(x - 60, y + 110, 'MATE SERENO', '#f2e6cc', 56); title(x - 60, y + 170, 'el de la abuela', '#e8c46a', 34);
    });
    cell(4, (x, y) => {
      ctx.fillStyle = '#f4f1ea'; ctx.fillRect(x, y, 512, 256);
      title(x, y + 120, 'SE ALQUILA', '#c0342b', 76); title(x, y + 190, 'consultar abajo', '#4a4a4a', 30);
    });
    cell(5, (x, y) => {
      const g = ctx.createLinearGradient(x, y, x, y + 256);
      g.addColorStop(0, '#2c3e73'); g.addColorStop(1, '#e0685a');
      ctx.fillStyle = g; ctx.fillRect(x, y, 512, 256);
      title(x, y + 100, 'CINE RIVOLI', '#ffe3a0', 64); title(x, y + 170, 'función de trasnoche', '#f2e6cc', 34);
    });
    // Wear: faded patches, torn corners, stains.
    for (let i = 0; i < 90; i++) {
      ctx.fillStyle = `rgba(${rand() > 0.5 ? '240,230,210' : '40,30,20'},${0.05 + rand() * 0.2})`;
      ctx.fillRect(rand() * 1024, rand() * 768, 10 + rand() * 60, 4 + rand() * 30);
    }
  });
}

// ---------------------------------------------------------------- build context

type Animator = (time: number, dt: number, level: number) => void;
type MSM = THREE.MeshStandardMaterial;

// Repeated things across the whole city, drawn as one InstancedMesh per kind.
type InstanceSet = { geometry: THREE.BufferGeometry; material: THREE.Material; matrices: THREE.Matrix4[]; colors: (THREE.Color | null)[]; cast: boolean };
class Instances {
  sets = new Map<string, InstanceSet>();
  add(key: string, make: () => THREE.BufferGeometry, material: THREE.Material, matrix: THREE.Matrix4, color?: THREE.ColorRepresentation, cast = false) {
    let set = this.sets.get(key);
    if (!set) { set = { geometry: make(), material, matrices: [], colors: [], cast }; this.sets.set(key, set); }
    set.matrices.push(matrix);
    set.colors.push(color === undefined ? null : new THREE.Color(color));
  }
  build(parent: THREE.Object3D, shadows: boolean) {
    for (const set of this.sets.values()) {
      const mesh = new THREE.InstancedMesh(set.geometry, set.material, set.matrices.length);
      set.matrices.forEach((matrix, i) => mesh.setMatrixAt(i, matrix));
      if (set.colors.some(Boolean)) set.colors.forEach((color, i) => mesh.setColorAt(i, color ?? new THREE.Color('#ffffff')));
      mesh.castShadow = shadows && set.cast;
      mesh.receiveShadow = true;
      mesh.computeBoundingSphere();
      parent.add(mesh);
    }
  }
}

type SignSlot = { geometry: THREE.PlaneGeometry; text: string; bg: string; fg: string; w: number; h: number };
type Ctx = {
  zone: Zone; group: THREE.Group; keep: THREE.Object3D[];
  signs: SignSlot[]; signMat: MSM; wires: number[]; kit: Kit;
};

type Kit = ReturnType<typeof makeKit>;

// Materials shared by every district, created once per city.
function makeKit(night: Night, shadows: boolean) {
  const animate: Animator[] = [];
  const windowGlow = (color: string, base = '#1a1612') => {
    const material = new THREE.MeshStandardMaterial({ color: base, emissive: color, emissiveIntensity: 0.2, roughness: 0.5 });
    night.windows.push(material);
    return material;
  };
  const lamps = new Map<string, MSM>();
  const lamp = (color: string) => {
    let material = lamps.get(color);
    if (!material) { material = glow(color, 0.6); night.lamps.push(material); lamps.set(color, material); }
    return material;
  };
  const facades = new Map<string, MSM>();
  const facade = (kind: FacadeKind, tint: string, light: string, seed: number) => {
    const key = `${kind}|${tint}|${light}|${seed}`;
    let material = facades.get(key);
    if (!material) {
      const { map, emissive } = facadeTex(kind, seed * 17 + 11, light);
      material = new THREE.MeshStandardMaterial({ map, emissiveMap: emissive, emissive: kind === 'plain' ? light : '#ffffff', emissiveIntensity: 0.2, color: tint, roughness: 0.92 });
      night.windows.push(material);
      facades.set(key, material);
    }
    return material;
  };
  // Party windows: their own material, pulsing colours (animated in update).
  const party = (kind: 'plain' | 'corrugated', tint: string, seed: number, colors: string[]) => {
    const { map, emissive } = facadeTex(kind, seed, '#ffffff', colors);
    const material = new THREE.MeshStandardMaterial({ map, emissiveMap: emissive, emissive: '#ffffff', emissiveIntensity: 0.2, color: tint, roughness: 0.9 });
    const hue = new THREE.Color();
    animate.push((time, _dt, level) => {
      const beat = 0.7 + 0.3 * Math.sin(time * 2.4 + seed) * Math.sin(time * 0.9);
      material.emissiveIntensity = (0.12 + 1.4 * level) * beat;
      hue.setHSL((time * 0.05 + seed * 0.1) % 1, 0.45, 0.72);
      material.emissive.copy(hue);
    });
    return material;
  };
  const doorMap = doorTexture();
  const door = new THREE.MeshStandardMaterial({ map: doorMap, emissiveMap: doorMap, emissive: '#ffffff', emissiveIntensity: 0.2 });
  night.windows.push(door);
  const shutters = [0, 1, 2].map(i => new THREE.MeshStandardMaterial({ map: shutterTexture(31 + i * 17), roughness: 0.5, metalness: 0.45 }));
  for (const material of shutters) material.map!.wrapS = THREE.RepeatWrapping;
  const rail = (color: string, ornate: boolean) => new THREE.MeshStandardMaterial({ map: railingTexture(color, ornate), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.5, metalness: 0.5 });
  const waterMap = waterTexture();
  waterMap.repeat.set(1, 1);
  const water = new THREE.MeshStandardMaterial({ color: '#0b1a24', roughness: 0.12, metalness: 0.65, emissive: '#ffffff', emissiveMap: waterMap, emissiveIntensity: 0.25 });
  const bulb = new THREE.MeshBasicMaterial({ color: '#ffffff' });
  const shopGlass = new Map<string, MSM>();
  const shop = (kind: Parameters<typeof shopTexture>[0] | 'warm' | 'cool' | 'red') => {
    let material = shopGlass.get(kind);
    if (!material) {
      const map = kind === 'warm' || kind === 'cool' || kind === 'red' ? storefrontTexture(kind, 0.5) : shopTexture(kind);
      material = new THREE.MeshStandardMaterial({ map, emissiveMap: map, emissive: '#ffffff', emissiveIntensity: 0.5, roughness: 0.3 });
      night.windows.push(material);
      shopGlass.set(kind, material);
    }
    return material;
  };
  const textured = (map: THREE.Texture, options: THREE.MeshStandardMaterialParameters = {}) => new THREE.MeshStandardMaterial({ map, roughness: 0.9, ...options });
  // Lamp heads and bulbs are unlit colours (one draw call for the whole
  // city, a colour per instance) that brighten as the night falls.
  const headMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
  const fairy = new THREE.MeshBasicMaterial({ color: '#ffffff' });
  const flickerHead = new THREE.MeshBasicMaterial({ color: '#ffffff' });
  const flickerPool = new THREE.MeshBasicMaterial({ map: whitePool(), transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false });
  animate.push((time, _dt, level) => {
    const k = 0.35 + 0.65 * level;
    headMat.color.setScalar(k);
    bulb.color.setScalar(k);
    fairy.color.setScalar(k * (0.85 + 0.15 * Math.sin(time * 2.3)));
    const f = flick(time, 5);
    flickerHead.color.setScalar(k * (0.25 + 0.75 * f));
    flickerPool.opacity = (0.05 + 0.5 * level) * f;
    water.emissiveIntensity = 0.12 + 0.5 * level;
    waterMap.offset.set((time * 0.011) % 1, (time * 0.027) % 1);
  });
  return {
    headMat, fairy, flickerHead, flickerPool,
    paint: new THREE.MeshStandardMaterial({ color: '#d9cba4', roughness: 0.8 }),
    night, shadows, animate, inst: new Instances(),
    lamp, facade, party, door, shutters, shop, water, waterMap, bulb,
    warm: windowGlow('#ffcf8a'), cool: windowGlow('#e2ecff'), amber: windowGlow('#ffb35c'),
    rails: { iron: rail('#1f2326', false), ornate: rail('#2a2622', true), brass: rail('#b8913e', true), white: rail('#e9e6de', false) },
    brick: textured(brickTexture()), brickDark: textured(brickTexture('#5e3a2e')),
    hoarding: textured(hoardingTexture()),
    chain: new THREE.MeshStandardMaterial({ map: chainLinkTexture(), alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.5, metalness: 0.6 }),
    tunnelTile: textured(tiles('#d8d4c6', 'rgba(60,70,70,.5)', 128, 6), { roughness: 0.4 }),
    concreteTex: textured(gravelTexture('#7f7b74'), { roughness: 0.95 }),
    corrugated: textured(canvas(64, 64, ctx => { for (let x = 0; x < 64; x += 8) { ctx.fillStyle = '#f2f2f2'; ctx.fillRect(x, 0, 4, 64); ctx.fillStyle = '#bdbdbd'; ctx.fillRect(x + 4, 0, 4, 64); } }, true), { roughness: 0.6, metalness: 0.4 }),
    ground: {
      cobbles: textured(cobbleTexture(), { color: '#b8b0a4' }),
      park: textured(grassTexture(), { roughness: 1 }),
      path: textured(gravelTexture('#9a8e78'), { roughness: 1 }),
      stone: textured(stoneTexture('#9d988e', 'rgba(40,36,32,.45)', 4, 21)),
      market: textured(marketTileTexture()),
      asphalt: textured(gravelTexture('#34373b'), { roughness: 0.9 }),
      gravel: textured(gravelTexture('#6f685e'), { roughness: 1 }),
      plaza: textured(stoneTexture('#a59a88', 'rgba(50,40,30,.4)', 2, 33)),
    },
    stripes: textured(stripes('#c0342b', '#f2efe6'), { roughness: 0.6 }),
    hazard: textured(stripes('#f2c230', '#1d1d1f'), { roughness: 0.6 }),
    billboards: (() => {
      const map = billboardAtlas();
      const material = new THREE.MeshStandardMaterial({ map, emissiveMap: map, emissive: '#5a5650', emissiveIntensity: 0.3, roughness: 0.9 });
      night.signs.push(material);
      return material;
    })(),
    dark: new THREE.MeshBasicMaterial({ color: '#07080a' }),
    pool: (() => {
      const material = new THREE.MeshBasicMaterial({ map: whitePool(), transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false });
      night.pools.push(material);
      return material;
    })(),
  };
}

// Common solid colours.
const iron = () => solid('#23272a', 0.55, 0.6);
const brass = () => solid('#b8913e', 0.35, 0.8);
const concrete = () => solid('#8c867c', 0.95);
const paleStone = () => solid('#c9bfab', 0.9);
const darkWood = () => solid('#4a3424', 0.8);

// Something that blinks: on for `on` of every `period` seconds.
function blinker(kit: Kit, color: string, period: number, on: number, phase = 0, strength = 2.2) {
  const material = glow(color, 0);
  kit.animate.push((time, _dt, level) => {
    const t = ((time + phase) % period) / period;
    material.emissiveIntensity = t < on / period ? (0.6 + strength * level) : 0.05;
  });
  return material;
}

// Something that breathes slowly (police lamp, tent, patrol lights).
function pulser(kit: Kit, color: string, speed: number, phase = 0, strength = 2.4) {
  const material = glow(color, 0);
  kit.animate.push((time, _dt, level) => {
    material.emissiveIntensity = (0.3 + strength * level) * (0.55 + 0.45 * Math.sin(time * speed + phase));
  });
  return material;
}

function hash(n: number) {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
}
// A tired lamp or tube: steady most of the time, then a burst of stutters.
function flick(time: number, seed: number) {
  const burst = hash(Math.floor(time * 0.5 + seed * 3.1)) < 0.32;
  if (!burst) return 0.93 + 0.07 * Math.sin(time * 37 + seed);
  const h = hash(Math.floor(time * 16) + seed * 13.7);
  return h < 0.5 ? 0.1 + h * 0.3 : 1;
}

function flickerer(kit: Kit, color: string, seed: number, strength = 3.2) {
  const material = glow(color, 0);
  kit.animate.push((time, _dt, level) => { material.emissiveIntensity = (0.4 + strength * level) * flick(time, seed); });
  return material;
}

function idSeed(id: string) {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619);
  return (h >>> 0) % 100000;
}

// Signs: every sign of a district shares one texture (one slot per sign),
// so all of them cost a single draw call.
function sign(ctx: Ctx, text: string, bg: string, fg: string, w: number, h: number, at: THREE.Vector3, ry: number) {
  const geometry = new THREE.PlaneGeometry(w, h);
  const mesh = new THREE.Mesh(geometry, ctx.signMat);
  mesh.position.copy(at);
  mesh.rotation.y = ry;
  ctx.group.add(mesh);
  ctx.signs.push({ geometry, text, bg, fg, w, h });
  return mesh;
}

function finishSigns(ctx: Ctx) {
  const n = ctx.signs.length;
  if (!n) return;
  const SW = 512, SH = 96;
  const texture = canvas(SW, SH * n, c => {
    ctx.signs.forEach((s, i) => {
      const y = i * SH;
      c.fillStyle = s.bg; c.fillRect(0, y, SW, SH);
      c.globalAlpha = 0.5; c.strokeStyle = s.fg; c.lineWidth = 4; c.strokeRect(8, y + 8, SW - 16, SH - 16); c.globalAlpha = 1;
      // Keep letters in proportion whatever the size of the sign.
      const stretch = (SW / s.w) / (SH / s.h);
      c.save();
      c.translate(SW / 2, y + SH / 2 + 3);
      c.scale(stretch, 1);
      c.fillStyle = s.fg;
      c.font = '700 54px Georgia, "Times New Roman", serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      c.fillText(s.text, 0, 0, (SW - 40) / stretch);
      c.restore();
    });
  });
  texture.anisotropy = 8;
  ctx.signMat.map = texture;
  ctx.signMat.emissiveMap = texture;
  ctx.signMat.needsUpdate = true;
  ctx.signs.forEach((s, i) => {
    const uv = s.geometry.getAttribute('uv') as THREE.BufferAttribute;
    for (let j = 0; j < uv.count; j++) uv.setY(j, (n - 1 - i + uv.getY(j)) / n);
  });
}

// Overhead wires (washing lines, light strings) of a district: one draw call.
function wire(ctx: Ctx, from: THREE.Vector3, to: THREE.Vector3, drop: number) {
  const pts = sag(from, to, drop).getAttribute('position') as THREE.BufferAttribute;
  for (let i = 0; i < pts.count - 1; i++) ctx.wires.push(pts.getX(i), pts.getY(i), pts.getZ(i), pts.getX(i + 1), pts.getY(i + 1), pts.getZ(i + 1));
}
const sagPoint = (from: THREE.Vector3, to: THREE.Vector3, drop: number, t: number) => {
  const p = from.clone().lerp(to, t);
  p.y -= Math.sin(t * Math.PI) * drop;
  return p;
};
// A string of bulbs; colours cycle through `colors`.
function bulbString(ctx: Ctx, from: THREE.Vector3, to: THREE.Vector3, drop: number, count: number, colors: string[]) {
  wire(ctx, from, to, drop);
  for (let i = 1; i < count; i++) {
    const p = sagPoint(from, to, drop, i / count);
    ctx.kit.inst.add('bulb', () => new THREE.SphereGeometry(0.075, 6, 4), ctx.kit.bulb, m4(p.x, p.y - 0.08, p.z), colors[i % colors.length]);
  }
}

// ---------------------------------------------------------------- buildings

// Balconies: where they stand and at what height. A building's balcony
// floors sit `offset` metres above each storey line; the offset comes from the
// encounter that happens on one of its balconies, if any.
function facadeOfPoint(x: number, z: number, maxOut = 1.7) {
  for (const b of BUILDINGS) for (const side of ['north', 'south', 'east', 'west'] as Side[]) {
    const f = faceOf(b, side);
    const out = f.along === 'x' ? (z - f.c) * f.nz : (x - f.c) * f.nx;
    const t = f.along === 'x' ? x : z;
    if (out > 0 && out < maxOut && t > f.lo && t < f.hi) return { b, f, t, out };
  }
  return null;
}

const offsets = new Map<string, number>();
function balconyOffset(b: CityBuilding) {
  if (offsets.has(b.id)) return offsets.get(b.id)!;
  let offset = 0.4;
  for (const place of Object.values(PLACES)) {
    if (!place.balcony || place.y === undefined) continue;
    const hit = facadeOfPoint(place.x, place.z);
    if (hit?.b.id !== b.id) continue;
    offset = place.y - STOREY * Math.round((place.y - 0.4) / STOREY);
  }
  offsets.set(b.id, offset);
  return offset;
}

// Height of the floor of the balcony at a storey of the building whose
// facade is at (x, z); World3D stands BALCONY_PEOPLE on it.
export function balconyHeight(x: number, z: number, storey: number) {
  const hit = facadeOfPoint(x, z);
  return storey * STOREY + (hit ? balconyOffset(hit.b) : 0.4);
}

function balconyLook(ctx: Ctx) {
  const id = ctx.zone.id;
  if (id === 'alto') return { rail: ctx.kit.rails.brass, slab: paleStone(), cap: brass(), chance: 0.5, plants: 0.15 };
  if (id === 'costa') return { rail: ctx.kit.rails.white, slab: solid('#d9d4c8', 0.8), cap: solid('#e9e6de', 0.5), chance: 0.75, plants: 0.35 };
  if (id === 'viejo') return { rail: ctx.kit.rails.ornate, slab: solid('#9a9184', 0.9), cap: iron(), chance: 0.65, plants: 0.5 };
  if (id === 'sur') return { rail: ctx.kit.rails.iron, slab: solid('#b5ab9a', 0.9), cap: iron(), chance: 0.7, plants: 0.6 };
  return { rail: ctx.kit.rails.iron, slab: solid('#a8a092', 0.9), cap: iron(), chance: 0.55, plants: 0.3 };
}

function railPlane(parent: THREE.Object3D, w: number, h: number, material: THREE.Material, at: THREE.Vector3, ry: number) {
  const geometry = new THREE.PlaneGeometry(w, h);
  const uv = geometry.getAttribute('uv') as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * w);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(at);
  mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}

const DEPTH = 1.1;
function balcony(ctx: Ctx, f: Face, t: number, w: number, y: number, look: ReturnType<typeof balconyLook>, rand: () => number) {
  const g = ctx.group;
  faceBox(g, f, t, w, y - 0.14, y, 0, DEPTH, look.slab, true);
  railPlane(g, w, 1, look.rail, onFace(f, t, y + 0.5, DEPTH - 0.04), f.ry);
  for (const s of [-1, 1]) railPlane(g, DEPTH - 0.06, 1, look.rail, onFace(f, t + s * (w / 2 - 0.03), y + 0.5, DEPTH / 2), f.ry + Math.PI / 2);
  faceBox(g, f, t, w + 0.04, y + 0.98, y + 1.04, DEPTH - 0.08, DEPTH, look.cap);
  if (rand() < look.plants) {
    const end = t + (rand() > 0.5 ? 1 : -1) * (w / 2 - 0.3);
    const p = onFace(f, end, y + 0.18, 0.5);
    g.add(cylinder(0.16, 0.12, 0.34, solid('#9a5a3a', 0.9), p.x, p.y, p.z, 8));
    const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(0.32 + rand() * 0.15, 0), solid(rand() > 0.5 ? '#3f6a36' : '#55803e', 0.95));
    leaves.position.set(p.x, y + 0.6, p.z);
    g.add(leaves);
    if (rand() > 0.6) {
      const q = onFace(f, end, y + 0.75, 0.5);
      for (let i = 0; i < 4; i++) g.add(box(0.08, 0.08, 0.08, solid(['#e0457a', '#f2c230', '#f4f1ea'][i % 3], 0.8), q.x + (rand() - 0.5) * 0.4, q.y + rand() * 0.2, q.z + (rand() - 0.5) * 0.3, false));
    }
  }
}

function balconies(ctx: Ctx, b: CityBuilding, side: Side) {
  const f = faceOf(b, side);
  const offset = balconyOffset(b);
  const look = balconyLook(ctx);
  const rand = random(idSeed(b.id + side));
  const cols = Math.floor((f.hi - f.lo) / BAY);
  const distance = (t: number) => (side === 'south' ? t - b.x0 : side === 'north' ? b.x1 - t : side === 'east' ? b.z1 - t : t - b.z0);
  const required: { t: number; storey: number }[] = [];
  for (const p of BALCONY_PEOPLE) {
    const hit = facadeOfPoint(p.x, p.z);
    if (hit?.b.id === b.id && hit.f.side === side) required.push({ t: hit.t, storey: p.floor });
  }
  for (const place of Object.values(PLACES)) {
    if (!place.balcony || place.y === undefined) continue;
    const hit = facadeOfPoint(place.x, place.z);
    if (hit?.b.id === b.id && hit.f.side === side) required.push({ t: hit.t, storey: Math.round((place.y - offset) / STOREY) });
  }
  for (let storey = 1; storey * STOREY + offset + 1.3 < b.h; storey++) {
    const y = storey * STOREY + offset;
    const taken = new Set<number>();
    for (const need of required.filter(r => r.storey === storey)) {
      const k = Math.max(0, Math.min(cols - 1, Math.round((distance(need.t) - BAY / 2) / BAY)));
      taken.add(k);
      const c = bayAt(b, f, k);
      const lo = Math.min(c, need.t) - 1.05, hi = Math.max(c, need.t) + 1.05;
      balcony(ctx, f, (lo + hi) / 2, hi - lo, y, look, rand);
    }
    for (let k = 0; k < cols; k++) {
      if (taken.has(k)) continue;
      const t = bayAt(b, f, k);
      if (t - 1.05 < f.lo + 0.3 || t + 1.05 > f.hi - 0.3) continue;
      if (storey === 1 && b.door?.side === side && Math.abs(t - b.door.at) < 3.2) continue;
      if (storey === 1 && b.sign) continue;
      if (rand() > look.chance) continue;
      balcony(ctx, f, t, 2.1, y, look, rand);
    }
  }
}

// A closed shop: a roller shutter with a tag sprayed on it.
function shutter(ctx: Ctx, b: CityBuilding, side: Side) {
  const f = faceOf(b, side);
  const w = Math.min(f.hi - f.lo - 1.2, 9);
  const t = (f.lo + f.hi) / 2;
  const material = ctx.kit.shutters[idSeed(b.id) % 3];
  const big = b.style === 'warehouse';
  const h = big ? 4.6 : 2.8;
  const plane = facePlane(ctx.group, f, t, h / 2, 0.05, w, h, material);
  const uv = plane.geometry.getAttribute('uv') as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * Math.max(1, Math.round(w / 5.6)));
  faceBox(ctx.group, f, t, w + 0.3, h, h + 0.35, 0, 0.32, solid('#5d6064', 0.5, 0.6));
  for (const s of [-1, 1]) faceBox(ctx.group, f, t + s * (w / 2 + 0.06), 0.12, 0, h, 0, 0.12, solid('#4a4d52', 0.5, 0.6));
}

// Plain street door with a little canopy, a wall lamp and a step.
function plainDoor(ctx: Ctx, f: Face, t: number) {
  const g = ctx.group;
  facePlane(g, f, t, 1.35, 0.03, 1.8, 2.7, ctx.kit.door);
  faceBox(g, f, t, 2.2, 0, 0.12, 0, 0.45, solid('#8d877d', 0.9));
  faceBox(g, f, t, 2.5, 2.92, 3.04, 0, 1.0, solid('#2e2a26', 0.8));
  faceBox(g, f, t + 1.25, 0.2, 2.35, 2.65, 0, 0.14, ctx.kit.lamp(ctx.zone.lamp));
}

// A door left open: light from the hall and the leaf swung inwards.
function openDoor(ctx: Ctx, f: Face, t: number) {
  const g = ctx.group;
  faceBox(g, f, t, 2.2, 0, 0.12, 0, 0.45, solid('#8d877d', 0.9));
  facePlane(g, f, t, 1.35, 0.02, 1.7, 2.7, ctx.kit.warm);
  for (const s of [-1, 1]) faceBox(g, f, t + s * 0.95, 0.16, 0, 2.85, 0, 0.1, darkWood());
  faceBox(g, f, t, 2.06, 2.7, 2.85, 0, 0.1, darkWood());
  // The leaf, open against the jamb, seen edge-on from the street.
  faceBox(g, f, t - 0.75, 0.06, 0.02, 2.66, 0.04, 0.9, solid('#5a3a26', 0.8));
  faceBox(g, f, t + 1.25, 0.2, 2.35, 2.65, 0, 0.14, ctx.kit.lamp(ctx.zone.lamp));
}

type ShopOptions = { glass: MSM; sign?: string; bg?: string; fg?: string; width?: number; awning?: string; canopy?: boolean; fascia?: string };
function shopFront(ctx: Ctx, f: Face, at: number, o: ShopOptions) {
  const g = ctx.group;
  const half = Math.min(at - f.lo, f.hi - at) - 0.3;
  const w = Math.min(o.width ?? 9, half * 2);
  facePlane(g, f, at, 1.65, 0.04, w, 3.3, o.glass);
  const frame = solid('#2a2420', 0.6, 0.3);
  for (const s of [-1, 1]) faceBox(g, f, at + s * (w / 2 + 0.06), 0.14, 0, 3.4, 0, 0.12, frame);
  faceBox(g, f, at, w + 0.4, 3.3, 4.05, 0, 0.2, solid(o.fascia ?? '#2b2420', 0.7));
  if (o.sign) sign(ctx, o.sign, o.bg ?? '#231a14', o.fg ?? '#f6d9a0', Math.min(w, 0.42 * o.sign.length + 1.2), 0.62, onFace(f, at, 3.68, 0.21), f.ry);
  if (o.awning) {
    const awning = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, 1.5), new THREE.MeshStandardMaterial({ map: stripes(o.awning, '#efe4cc'), roughness: 0.9 }));
    (awning.material as MSM).map!.repeat.set(w / 4, 1);
    const p = onFace(f, at, 3.05, 0.75);
    awning.position.copy(p);
    awning.rotation.set(0, f.ry, 0);
    awning.rotateX(0.26);
    awning.castShadow = true;
    g.add(awning);
  }
  if (o.canopy) {
    // Flat canopy with a brass edge, the lit underside just above the door.
    faceBox(g, f, at, Math.min(w, 5), 3.0, 3.16, 0, 1.6, solid('#1d1d1f', 0.7));
    faceBox(g, f, at, Math.min(w, 5) + 0.06, 2.98, 3.18, 1.55, 1.65, brass());
    faceBox(g, f, at, Math.min(w, 5) - 0.6, 2.96, 3.0, 0.3, 1.3, ctx.kit.lamp('#fff1d6'));
    for (const s of [-1, 1]) {
      const a = onFace(f, at + s * (Math.min(w, 5) / 2 - 0.2), 3.1, 1.55), b2 = onFace(f, at + s * (Math.min(w, 5) / 2 - 0.2), 4.4, 0.02);
      beam(g, a, b2, 0.03, 0.03, brass());
    }
  }
}

// Newspaper and drinks kiosks: hollow, so the seller stands inside, with an
// open hatch (counter) on the side where people are served.
function kiosk(ctx: Ctx, b: CityBuilding) {
  const g = ctx.group;
  let side: Side = b.door?.side ?? 'south';
  for (const place of Object.values(PLACES)) {
    if (!place.behindCounter || !inside(b, place.x, place.z, 1)) continue;
    const dx = place.circle.x - place.x, dz = place.circle.z - place.z;
    side = Math.abs(dx) > Math.abs(dz) ? (dx > 0 ? 'east' : 'west') : (dz > 0 ? 'south' : 'north');
  }
  const cafe = b.id === 'r-cafe';
  const paint = solid(cafe ? '#2f5d4a' : b.district === 'estacion' ? '#7a2a22' : '#2f4f6a', 0.6, 0.3);
  const th = 0.1;
  const hatchLow = 1.05, hatchHigh = 2.3;
  for (const s of ['north', 'south', 'east', 'west'] as Side[]) {
    const f = faceOf(b, s);
    const w = f.hi - f.lo;
    const t = (f.lo + f.hi) / 2;
    if (s !== side) { faceBox(g, f, t, w, 0, b.h - 0.2, -th, 0, paint, true); continue; }
    faceBox(g, f, t, w, 0, hatchLow, -th, 0, paint, true);
    faceBox(g, f, t, w, hatchHigh, b.h - 0.2, -th, 0, paint, true);
    for (const e of [-1, 1]) faceBox(g, f, t + e * (w / 2 - 0.15), 0.3, hatchLow, hatchHigh, -th, 0, paint, true);
    // The counter shelf, inside the kiosk's footprint.
    faceBox(g, f, t, w - 0.3, hatchLow, hatchLow + 0.06, -0.45, 0, solid('#d8cfbf', 0.5));
    // The hatch lid, propped open above the opening.
    const lid = faceBox(g, f, t, w - 0.2, hatchHigh, hatchHigh + 0.05, 0, 0.9, paint);
    lid.rotation.x += f.along === 'x' ? -f.nz * 0.25 : 0;
    lid.rotation.z += f.along === 'z' ? f.nx * 0.25 : 0;
    sign(ctx, b.sign ?? 'KIOSCO', cafe ? '#1d3a2e' : '#1a2230', cafe ? '#f2e6cc' : '#ffd36a', w - 0.2, 0.42, onFace(f, t, b.h - 0.42, 0.03), f.ry);
    // Inside: shelves of colourful goods, a warm ceiling light.
    const back = faceOf(b, side === 'north' ? 'south' : side === 'south' ? 'north' : side === 'east' ? 'west' : 'east');
    const bt = (back.lo + back.hi) / 2;
    for (const y of [1.2, 1.6, 2.0]) {
      faceBox(g, back, bt, w - 0.4, y, y + 0.04, -0.45, -th, solid('#6b4a33', 0.8));
      for (let i = 0; i < 7; i++) {
        const p = onFace(back, bt - (w - 0.8) / 2 + i * ((w - 0.8) / 6), y + 0.14, -0.3);
        ctx.kit.inst.add('goods', () => new THREE.BoxGeometry(0.18, 0.22, 0.14), solid('#ffffff', 0.6), m4(p.x, p.y, p.z, back.ry), ['#d24a3a', '#3a7bd2', '#e8c640', '#4aa05a', '#f0ece4'][(i + Math.round(y * 5)) % 5]);
      }
    }
    facePlane(g, back, bt, 1.6, -th - 0.01, w - 0.3, 2.4, ctx.kit.amber);
  }
  // Roof with a small eave, floor inside.
  slab(g, b.x0 - 0.12, b.x1 + 0.12, b.h - 0.2, b.h, b.z0 - 0.12, b.z1 + 0.12, solid('#2a2a2c', 0.8));
  slab(g, b.x0 + 0.4, b.x1 - 0.4, b.h - 0.24, b.h - 0.2, b.z0 + 0.4, b.z1 - 0.4, ctx.kit.lamp('#ffe2b0'));
  floor(g, { x0: b.x0 + th, x1: b.x1 - th, z0: b.z0 + th, z1: b.z1 - th }, 0.015, solid('#5a5048', 0.8), 1);
  // Magazines clipped to the outside of one side wall.
  const sideFace = faceOf(b, side === 'south' || side === 'north' ? 'east' : 'south');
  const covers = canvas(256, 128, c => {
    const rand = random(b.x0 * 3);
    c.fillStyle = '#2a2a2a'; c.fillRect(0, 0, 256, 128);
    for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) {
      c.fillStyle = ['#d24a3a', '#f2c230', '#3a7bd2', '#f4f1ea', '#e0457a', '#4aa05a'][Math.floor(rand() * 6)];
      c.fillRect(4 + i * 42, 6 + r * 62, 38, 54);
      c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(8 + i * 42, 12 + r * 62, 30, 6); c.fillRect(8 + i * 42, 40 + r * 62, 20, 12);
    }
  });
  const rack = new THREE.MeshStandardMaterial({ map: covers, emissiveMap: covers, emissive: '#ffffff', emissiveIntensity: 0.2 });
  ctx.kit.night.windows.push(rack);
  facePlane(g, sideFace, (sideFace.lo + sideFace.hi) / 2, 1.5, 0.02, Math.min(2.4, sideFace.hi - sideFace.lo - 0.4), 1.1, rack);
}

function crossTexture(color: string) {
  return canvas(128, 128, ctx => {
    ctx.fillStyle = '#0c0c0c'; ctx.fillRect(0, 0, 128, 128);
    ctx.fillStyle = color;
    ctx.fillRect(44, 14, 40, 100); ctx.fillRect(14, 44, 100, 40);
    ctx.strokeStyle = 'rgba(255,255,255,.6)'; ctx.lineWidth = 3; ctx.strokeRect(46, 16, 36, 96); ctx.strokeRect(16, 46, 96, 36);
  });
}

// The station clock. It stopped years ago at a quarter past three.
function clockTexture() {
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#1d1a16'; ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = '#f4ecd6'; ctx.beginPath(); ctx.arc(128, 128, 118, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#2a241c'; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(128, 128, 112, 0, TAU); ctx.stroke();
    ctx.fillStyle = '#2a241c';
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * TAU, r0 = i % 5 ? 100 : 90;
      ctx.save(); ctx.translate(128 + Math.sin(a) * 104, 128 - Math.cos(a) * 104); ctx.rotate(a);
      ctx.fillRect(-1.5, -(104 - r0) / 2 - 4, 3, i % 5 ? 6 : 14); ctx.restore();
    }
    ctx.font = '700 26px Georgia, serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ['XII', 'III', 'VI', 'IX'].forEach((n, i) => { const a = (i / 4) * TAU; ctx.fillText(n, 128 + Math.sin(a) * 72, 128 - Math.cos(a) * 72); });
    const hand = (angle: number, length: number, width: number) => {
      ctx.save(); ctx.translate(128, 128); ctx.rotate(angle); ctx.fillRect(-width / 2, -length, width, length + 12); ctx.restore();
    };
    hand(((3 + 17 / 60) / 12) * TAU, 58, 9);
    hand((17 / 60) * TAU, 92, 5);
    ctx.beginPath(); ctx.arc(128, 128, 8, 0, TAU); ctx.fill();
  });
}

function flagTexture(kind: number) {
  return canvas(192, 128, ctx => {
    if (kind === 0) {
      ['#1f6a6a', '#f2e6cc', '#c9a24a'].forEach((c, i) => { ctx.fillStyle = c; ctx.fillRect(0, i * 43, 192, 43); });
      ctx.fillStyle = '#1f6a6a'; ctx.beginPath(); ctx.arc(96, 64, 16, 0, TAU); ctx.fill();
    } else {
      ctx.fillStyle = '#6a1e2a'; ctx.fillRect(0, 0, 192, 128);
      ctx.fillStyle = '#f2e6cc'; ctx.fillRect(84, 34, 24, 60); ctx.fillRect(76, 28, 40, 10);
      for (let i = 0; i < 3; i++) ctx.fillRect(78 + i * 14, 20, 8, 10);
    }
  });
}

// A vertical wash of light thrown up a facade by a floodlight.
function washTexture() {
  return canvas(64, 256, ctx => {
    const g = ctx.createLinearGradient(0, 256, 0, 0);
    g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(0.5, 'rgba(255,255,255,.3)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 256);
    const side = ctx.createLinearGradient(0, 0, 64, 0);
    side.addColorStop(0, 'rgba(0,0,0,1)'); side.addColorStop(0.3, 'rgba(0,0,0,0)'); side.addColorStop(0.7, 'rgba(0,0,0,0)'); side.addColorStop(1, 'rgba(0,0,0,1)');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = side; ctx.fillRect(0, 0, 64, 256);
  });
}

// The shared pool texture for colour accents on the ground (party, tent).
let accentPool: THREE.Texture | null = null;
function accentGlow(ctx: Ctx, x: number, z: number, radius: number, color: string, pulse: number) {
  accentPool ??= whitePool();
  const material = new THREE.MeshBasicMaterial({ map: accentPool, color, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  const disc = new THREE.Mesh(new THREE.CircleGeometry(radius, 24), material);
  disc.rotation.x = -Math.PI / 2;
  disc.position.set(x, 0.045, z);
  ctx.group.add(disc);
  ctx.kit.animate.push((time, _dt, level) => { material.opacity = level * 0.45 * (pulse ? 0.65 + 0.35 * Math.sin(time * pulse) : 1); });
}

function front(ctx: Ctx, b: CityBuilding) {
  const g = ctx.group;
  const kit = ctx.kit;
  const f = b.door ? faceOf(b, b.door.side) : faceOf(b, 'south');
  const at = b.door?.at ?? (f.lo + f.hi) / 2;
  switch (b.style) {
    case 'laundry': {
      shopFront(ctx, f, at, { glass: kit.shop('laundry'), sign: b.sign, bg: '#173040', fg: '#bfe8ff', width: 11, fascia: '#1d3440' });
      sign(ctx, 'ABIERTO 24 H', '#0c2a1c', '#7cf0a8', 1.3, 0.32, onFace(f, at + 1.6, 2.3, 0.06), f.ry);
      const mat = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.8), solid('#2a3a3e', 1));
      mat.rotation.x = -Math.PI / 2;
      mat.position.copy(onFace(f, at, 0.016, 0.5));
      g.add(mat);
      return;
    }
    case 'pharmacy': {
      shopFront(ctx, f, at, { glass: kit.shop('pharmacy'), sign: b.sign, bg: '#f4f8f4', fg: '#1f7a3f', width: 10, fascia: '#e9efe9' });
      const green = new THREE.MeshStandardMaterial({ map: crossTexture('#3fdc72'), emissiveMap: crossTexture('#3fdc72'), emissive: '#ffffff', emissiveIntensity: 0.4 });
      kit.animate.push((time, _dt, level) => { green.emissiveIntensity = (0.3 + 1.6 * level) * (Math.sin(time * 1.6) > -0.2 ? 1 : 0.25); });
      const t = f.hi - 1.2;
      faceBox(g, f, t, 0.08, 4.4, 4.5, 0, 0.9, iron());
      for (const s of [1, -1]) {
        const p = onFace(f, t, 4.0, 0.95);
        quad(g, 0.8, 0.8, green, p.x + (f.along === 'x' ? s * 0.03 : 0), p.y, p.z + (f.along === 'z' ? s * 0.03 : 0), f.ry + (s * Math.PI) / 2);
      }
      return;
    }
    case 'boutique':
      shopFront(ctx, f, at, { glass: kit.shop('boutique'), sign: b.sign, bg: '#141414', fg: '#e8d6a8', canopy: true, fascia: '#141414' });
      return;
    case 'wine':
      shopFront(ctx, f, at, { glass: kit.shop('wine'), sign: b.sign, bg: '#2a1418', fg: '#e8c46a', awning: '#5a1a24', fascia: '#2a1418' });
      return;
    case 'gallery': {
      shopFront(ctx, f, at, { glass: kit.shop('gallery'), sign: b.sign, bg: '#f4f1ea', fg: '#1d1d1f', width: 12, fascia: '#f4f1ea' });
      for (const dx of [-4, -1.5, 1.5, 4]) faceBox(g, f, at + dx, 0.14, 4.1, 4.3, 0.1, 0.5, kit.lamp('#fff6ea'));
      return;
    }
    case 'oldhotel': {
      shopFront(ctx, f, at, { glass: kit.shop('lobby'), sign: b.sign, bg: '#3a1f18', fg: '#ffd9a0', width: 6, fascia: '#3a1f18' });
      // A blade sign out from the corner, readable from up and down the street.
      const t = Math.min(f.hi - 1, at + 4.5);
      faceBox(g, f, t, 0.1, 6.6, 6.7, 0, 1.4, iron());
      for (const s of [1, -1]) {
        const p = onFace(f, t, 6.0, 0.8);
        const off = s * 0.04;
        sign(ctx, 'HOTEL', '#3a1f18', '#ffd9a0', 1.2, 0.5, new THREE.Vector3(p.x + (f.along === 'x' ? off : 0), p.y, p.z + (f.along === 'z' ? off : 0)), f.ry + (s * Math.PI) / 2);
      }
      return;
    }
    case 'grand': {
      shopFront(ctx, f, at, { glass: kit.shop('lobby'), width: 10, fascia: '#2a2420' });
      // Brass canopy over the door, its name on the front edge.
      const w = 6, deep = 3.6;
      faceBox(g, f, at, w, 3.4, 3.62, 0, deep, solid('#1a1a1c', 0.6), true);
      faceBox(g, f, at, w + 0.08, 3.36, 3.66, deep - 0.06, deep + 0.04, brass());
      for (const s of [-1, 1]) faceBox(g, f, at + s * (w / 2), 0.08, 3.36, 3.66, 0, deep, brass());
      faceBox(g, f, at, w - 0.8, 3.34, 3.4, 0.4, deep - 0.4, kit.lamp('#fff1d6'));
      sign(ctx, b.sign ?? 'HOTEL', '#1a1a1c', '#e8c46a', 4.6, 0.26, onFace(f, at, 3.51, deep + 0.05), f.ry);
      for (const s of [-1, 1]) beam(g, onFace(f, at + s * (w / 2 - 0.2), 3.62, deep - 0.1), onFace(f, at + s * (w / 2 - 0.2), 6.2, 0.02), 0.04, 0.04, brass());
      const carpet = new THREE.Mesh(new THREE.PlaneGeometry(f.along === 'x' ? 2 : deep, f.along === 'x' ? deep : 2), solid('#6a1e2a', 1));
      carpet.rotation.x = -Math.PI / 2;
      carpet.position.copy(onFace(f, at, 0.017, deep / 2));
      g.add(carpet);
      for (const s of [-1, 1]) {
        const p = onFace(f, at + s * 2.4, 0, 0.55);
        g.add(cylinder(0.32, 0.26, 0.6, solid('#2a2a2c', 0.4, 0.4), p.x, 0.3, p.z, 12));
        const bush = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 8), solid('#2f5a34', 0.9));
        bush.position.set(p.x, 1.0, p.z);
        g.add(bush);
        faceBox(g, f, at + s * 3.6, 0.22, 2.4, 2.8, 0, 0.18, kit.lamp('#fff1d6'));
      }
      sign(ctx, b.sign ?? 'HOTEL', '#141414', '#f2e2b6', 12, 1.3, onFace(f, at, b.h - 1.6, 0.04), f.ry);
      return;
    }
    case 'cinema':
      cinemaFront(ctx, b, f, at);
      return;
    case 'market': {
      shopFront(ctx, f, at, { glass: kit.shop('market'), width: 10, fascia: '#3a1f12' });
      sign(ctx, b.sign ?? 'MERCADO', '#2a140c', '#ffcf6a', 12, 1.2, onFace(f, at, 5.2, 0.04), f.ry);
      bulbString(ctx, onFace(f, b.x0 + 0.6, 4.4, 1.0), onFace(f, b.x1 - 0.6, 4.4, 1.0), 0.5, 28, ['#ffcf7a', '#ff7a5a', '#ffe9a0', '#7ad1ff']);
      // The old door T-7 at the end of the alley (east wall).
      const east = faceOf(b, 'east');
      const t7 = canvas(128, 256, c => {
        c.fillStyle = '#3a2a1e'; c.fillRect(0, 0, 128, 256);
        for (let x = 0; x < 128; x += 16) { c.fillStyle = 'rgba(0,0,0,.25)'; c.fillRect(x, 0, 2, 256); }
        c.fillStyle = '#d8cfbf'; c.font = '700 34px Georgia, serif'; c.textAlign = 'center'; c.fillText('T-7', 64, 80);
        c.fillStyle = '#1a120c'; c.fillRect(44, 100, 40, 26);
        c.fillStyle = '#c9a24a'; c.fillRect(100, 150, 8, 22);
      });
      facePlane(g, east, -33.4, 1.3, 0.03, 1.2, 2.5, new THREE.MeshStandardMaterial({ map: t7, roughness: 0.9 }));
      facePlane(g, east, -33.4, 1.83, 0.035, 0.3, 0.2, kit.warm);
      faceBox(g, east, -33.4 - 1.0, 0.18, 2.3, 2.6, 0, 0.14, flickerer(kit, '#ffcf8a', 41, 2.4));
      return;
    }
    case 'clinic': {
      shopFront(ctx, f, at, { glass: kit.shop('clinic'), width: 7, fascia: '#dfe6ee' });
      const w = 9, deep = 4.4;
      faceBox(g, f, at, w, 3.6, 3.9, 0, deep, solid('#e8ecef', 0.5), true);
      faceBox(g, f, at, w - 1, 3.56, 3.6, 0.3, deep - 0.3, kit.lamp('#eef6ff'));
      for (const s of [-1, 1]) {
        const p = onFace(f, at + s * (w / 2 - 0.3), 1.8, deep - 0.3);
        g.add(cylinder(0.09, 0.09, 3.6, solid('#c9d0d6', 0.4, 0.5), p.x, p.y, p.z, 10));
      }
      sign(ctx, 'URGENCIAS', '#f4f8ff', '#c0342b', 3.6, 0.32, onFace(f, at, 3.75, deep + 0.01), f.ry);
      sign(ctx, b.sign ?? 'CLÍNICA', '#f4f8ff', '#1f4a7a', 10, 1.3, onFace(f, at, b.h - 2.2, 0.04), f.ry);
      const red = new THREE.MeshStandardMaterial({ map: crossTexture('#ff3a3a'), emissiveMap: crossTexture('#ff3a3a'), emissive: '#ffffff', emissiveIntensity: 0.4 });
      kit.night.signs.push(red);
      facePlane(g, f, f.hi - 3, b.h - 2.2, 0.05, 2.2, 2.2, red);
      quad(g, 1.1, 1.1, red, ...onFace(f, at + w / 2 - 0.9, 4.6, 0.05).toArray() as [number, number, number], f.ry);
      // The ambulance bay roof, hung from the east wall.
      const bay = { x0: b.x1, x1: b.x1 + 8.6, z0: -72, z1: -62.2 };
      slab(g, bay.x0, bay.x1, 4.1, 4.35, bay.z0, bay.z1, solid('#dfe4e8', 0.6));
      slab(g, bay.x0 + 0.5, bay.x1 - 0.5, 4.06, 4.1, bay.z0 + 0.5, bay.z1 - 0.5, kit.lamp('#eef6ff'));
      for (const z of [bay.z0 + 0.4, bay.z1 - 0.4]) beam(g, new THREE.Vector3(bay.x1 - 0.2, 4.35, z), new THREE.Vector3(b.x1 + 0.02, 8.5, z), 0.06, 0.06, solid('#9aa3ab', 0.4, 0.6));
      sign(ctx, 'AMBULANCIAS', '#c0342b', '#ffffff', 3.4, 0.3, new THREE.Vector3(bay.x1 + 0.01, 4.22, (bay.z0 + bay.z1) / 2), Math.PI / 2);
      for (let z = bay.z0 + 1; z < bay.z1; z += 3.2) {
        const line = new THREE.Mesh(new THREE.PlaneGeometry(7, 0.12), solid('#e8c640', 0.8));
        line.rotation.x = -Math.PI / 2;
        line.position.set(bay.x0 + 4.3, 0.025, z);
        g.add(line);
      }
      return;
    }
    case 'police': {
      faceBox(g, f, at, 4, 0, 0.16, 0, 1.2, solid('#9d978e', 0.9));
      faceBox(g, f, at, 3, 0.16, 0.3, 0, 0.6, solid('#9d978e', 0.9));
      facePlane(g, f, at, 1.45, 0.03, 2.2, 2.9, kit.door);
      faceBox(g, f, at, 3.0, 3.0, 3.12, 0, 1.2, solid('#1f2e4a', 0.6));
      // The blue lamp over the door, breathing slowly.
      const blue = pulser(kit, '#3a7bff', 1.1, 0, 2.6);
      faceBox(g, f, at, 0.06, 3.3, 3.36, 0, 0.5, iron());
      const p = onFace(f, at, 3.45, 0.5);
      const globe = new THREE.Mesh(new THREE.SphereGeometry(0.24, 14, 10), blue);
      globe.position.copy(p);
      g.add(globe);
      sign(ctx, b.sign ?? 'COMISARÍA', '#1f2e4a', '#f4f1ea', 5, 0.62, onFace(f, at, 4.1, 0.04), f.ry);
      return;
    }
    case 'garage': {
      const gf = b.door ? f : faceOf(b, 'south');
      const t = b.door ? at : b.x0 + 6;
      facePlane(g, gf, t, 1.4, 0.02, 5, 2.8, kit.dark);
      faceBox(g, gf, t, 5.4, 2.8, 3.1, 0, 0.12, solid('#3a3d42', 0.6));
      for (const s of [-1, 1]) faceBox(g, gf, t + s * 2.6, 0.2, 0, 2.8, 0, 0.12, solid('#3a3d42', 0.6));
      faceBox(g, gf, t, 4.6, 2.74, 2.8, 0.1, 0.5, kit.lamp('#e4f0ff'));
      // The barrier arm and its post.
      faceBox(g, gf, t - 2.3, 0.3, 0, 1.1, 0.4, 0.7, solid('#e8c640', 0.6));
      const arm = faceBox(g, gf, t - 0.2, 4.0, 0.95, 1.05, 0.5, 0.6, kit.stripes);
      arm.castShadow = false;
      sign(ctx, b.sign ?? 'ESTACIONAMIENTO', '#1f4a7a', '#ffffff', 5.4, 0.6, onFace(gf, t, 3.5, 0.04), gf.ry);
      faceBox(g, gf, t + 3.4, 0.08, 4.2, 4.28, 0, 0.9, iron());
      for (const s of [1, -1]) {
        const q = onFace(gf, t + 3.4, 3.7, 0.7);
        sign(ctx, 'E', '#1f6ad4', '#ffffff', 0.8, 0.8, new THREE.Vector3(q.x + (gf.along === 'x' ? s * 0.03 : 0), q.y, q.z + (gf.along === 'z' ? s * 0.03 : 0)), gf.ry + (s * Math.PI) / 2);
      }
      return;
    }
    case 'station': {
      if (b.clock) { stationClock(ctx, b); return; }
      shopFront(ctx, f, at, { glass: kit.shop('lobby'), width: 7, fascia: '#3a3226' });
      for (const s of [-1, 1]) faceBox(g, f, at + s * 3.9, 0.9, 0, 4.6, 0, 0.35, solid('#bfb196', 0.9));
      faceBox(g, f, at, 8.7, 4.05, 4.6, 0, 0.35, solid('#bfb196', 0.9));
      sign(ctx, b.sign ?? 'ESTACIÓN', '#1d2a3a', '#f8e2b0', 14, 1.3, onFace(f, at, 8.2, 0.04), f.ry);
      for (const s of [-1, 1]) {
        const p = onFace(f, at + s * 5.2, 3.8, 0.35);
        const globe = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 8), kit.lamp('#fff0cc'));
        globe.position.copy(p);
        g.add(globe);
        faceBox(g, f, at + s * 5.2, 0.06, 3.5, 3.56, 0, 0.35, iron());
      }
      // Doors to the platform on the south side.
      const south = faceOf(b, 'south');
      for (const x of [-108, -96, -84]) { facePlane(g, south, x, 1.5, 0.03, 2.6, 3, kit.shop('lobby')); faceBox(g, south, x, 2.9, 3.0, 3.2, 0, 0.12, solid('#3a3226', 0.7)); }
      return;
    }
    case 'school': {
      const nf = faceOf(b, 'north');
      plainDoor(ctx, nf, 42);
      sign(ctx, b.sign ?? 'ESCUELA', '#2f5d4a', '#f2ead8', 6, 0.7, onFace(nf, 42, 3.55, 0.04), nf.ry);
      const p = onFace(nf, 37, 0, 1.6);
      g.add(cylinder(0.05, 0.07, 7, solid('#d8d8d4', 0.4, 0.6), p.x, 3.5, p.z, 8));
      const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1), new THREE.MeshStandardMaterial({ map: flagTexture(1), side: THREE.DoubleSide, roughness: 0.9 }));
      flag.position.set(p.x + 0.8, 6.4, p.z);
      g.add(flag);
      return;
    }
    case 'warehouse': {
      if (!b.door) return;
      clubFront(ctx, b, f, at);
      return;
    }
    default:
      if (!b.door) return;
      if (Object.values(PLACES).some(place => place.behindDoor && Math.abs(place.x - at) < 1 && Math.abs((f.along === 'x' ? place.z : place.x) - f.c) < 1.5)) openDoor(ctx, f, at);
      else if (b.party) {
        openDoor(ctx, f, at);
        accentGlow(ctx, onFace(f, at, 0, 2.2).x, onFace(f, at, 0, 2.2).z, 3.2, '#ff4fa3', 2.4);
      } else plainDoor(ctx, f, at);
  }
}

function cinemaFront(ctx: Ctx, b: CityBuilding, f: Face, at: number) {
  const g = ctx.group;
  const kit = ctx.kit;
  shopFront(ctx, f, at, { glass: kit.shop('lobby'), width: 9, fascia: '#5a1a1e' });
  // The marquee: a lit box over the entrance with running bulbs.
  const w = 9.4, deep = 1.9;
  faceBox(g, f, at, w, 3.45, 4.6, 0, deep, solid('#5a1a1e', 0.6), true);
  faceBox(g, f, at, w - 0.4, 3.41, 3.45, 0.2, deep - 0.2, kit.lamp('#ffe3a0'));
  sign(ctx, b.sign ?? 'CINE', '#1a0f12', '#ffe3a0', 7.4, 0.72, onFace(f, at, 4.02, deep + 0.01), f.ry);
  const parts: [THREE.BufferGeometry[], THREE.BufferGeometry[]] = [[], []];
  const bulb = new THREE.SphereGeometry(0.06, 6, 4);
  let n = 0;
  for (const y of [3.52, 4.53]) for (let t = -w / 2 + 0.15; t <= w / 2 - 0.15; t += 0.3) {
    const p = onFace(f, at + t, y, deep + 0.03);
    parts[n++ % 2].push(bulb.clone().translate(p.x, p.y, p.z));
  }
  const chase = [glow('#ffe7a8', 1), glow('#ffe7a8', 1)];
  kit.animate.push((time, _dt, level) => {
    const on = Math.floor(time * 3) % 2;
    chase[0].emissiveIntensity = (0.5 + 3 * level) * (on ? 1 : 0.25);
    chase[1].emissiveIntensity = (0.5 + 3 * level) * (on ? 0.25 : 1);
  });
  g.add(mergedMesh(parts[0], chase[0]), mergedMesh(parts[1], chase[1]));
  // A tall blade with the name, letters stacked, framed by bulbs.
  const blade = canvas(128, 512, c => {
    c.fillStyle = '#1a0f12'; c.fillRect(0, 0, 128, 512);
    c.strokeStyle = '#ffe3a0'; c.lineWidth = 6; c.strokeRect(10, 10, 108, 492);
    c.fillStyle = '#ff6a5a'; c.font = '800 64px Georgia, serif'; c.textAlign = 'center';
    'RIVOLI'.split('').forEach((ch, i) => c.fillText(ch, 64, 86 + i * 78));
  });
  const bladeMat = new THREE.MeshStandardMaterial({ map: blade, emissiveMap: blade, emissive: '#ffffff', emissiveIntensity: 0.4 });
  kit.night.signs.push(bladeMat);
  const t = at - w / 2 + 0.6;
  faceBox(g, f, t, 0.18, 5.0, 9.4, 0, 1.3, solid('#1a0f12', 0.6));
  for (const s of [1, -1]) {
    const p = onFace(f, t, 7.2, 0.7);
    quad(g, 1.1, 4.3, bladeMat, p.x + (f.along === 'x' ? s * 0.1 : 0), p.y, p.z + (f.along === 'z' ? s * 0.1 : 0), f.ry + (s * Math.PI) / 2);
  }
  // Posters beside the doors.
  const posters = canvas(256, 192, c => {
    const halves: [string, string, string][] = [['#2c3e73', 'LA ÚLTIMA', 'FUNCIÓN'], ['#7a2e3e', 'NOCHE DE', 'ESTRENO']];
    halves.forEach(([bg, a, z], i) => {
      c.fillStyle = bg; c.fillRect(i * 128, 0, 128, 192);
      c.fillStyle = '#ffe3a0'; c.beginPath(); c.arc(i * 128 + 64, 70, 30, 0, TAU); c.fill();
      c.fillStyle = '#f2e6cc'; c.font = '700 18px Georgia, serif'; c.textAlign = 'center';
      c.fillText(a, i * 128 + 64, 140); c.fillText(z, i * 128 + 64, 164);
    });
  });
  const posterMat = new THREE.MeshStandardMaterial({ map: posters, emissiveMap: posters, emissive: '#ffffff', emissiveIntensity: 0.3 });
  kit.night.signs.push(posterMat);
  for (const [i, s] of [[0, -1], [1, 1]] as const) {
    const plane = facePlane(g, f, at + s * 5.4, 1.7, 0.05, 1.0, 1.5, posterMat);
    const uv = plane.geometry.getAttribute('uv') as THREE.BufferAttribute;
    for (let j = 0; j < uv.count; j++) uv.setX(j, (uv.getX(j) + i) / 2);
    faceBox(g, f, at + s * 5.4, 1.12, 0.9, 2.5, 0, 0.04, solid('#c9a24a', 0.3, 0.8));
  }
}

function clubFront(ctx: Ctx, b: CityBuilding, f: Face, at: number) {
  const g = ctx.group;
  const kit = ctx.kit;
  const violet = pulser(kit, '#9a4dff', 3.1, 0, 2.2);
  facePlane(g, f, at, 1.5, 0.03, 2.6, 3.0, violet);
  for (const s of [-1, 1]) faceBox(g, f, at + s * 1.45, 0.3, 0, 3.3, 0, 0.25, solid('#151517', 0.5, 0.5));
  faceBox(g, f, at, 3.2, 3.0, 3.35, 0, 0.25, solid('#151517', 0.5, 0.5));
  faceBox(g, f, at, 6, 3.6, 3.7, 0, 0.12, pulser(kit, '#ff4fa3', 3.1, 1.2, 2.6));
  // Neon name in pink script on a black board.
  const neon = canvas(512, 160, c => {
    c.fillStyle = '#0b0b0d'; c.fillRect(0, 0, 512, 160);
    c.font = 'italic 800 92px Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.shadowColor = '#ff4fa3'; c.shadowBlur = 24; c.fillStyle = '#ffd1ea';
    c.fillText(b.sign ?? 'LA FÁBRICA', 256, 84, 470);
    c.lineWidth = 3; c.strokeStyle = '#ff4fa3'; c.strokeText(b.sign ?? 'LA FÁBRICA', 256, 84, 470);
  });
  const neonMat = new THREE.MeshStandardMaterial({ map: neon, emissiveMap: neon, emissive: '#ffffff', emissiveIntensity: 1 });
  kit.animate.push((time, _dt, level) => {
    // A buzzing neon that sometimes drops for an instant.
    neonMat.emissiveIntensity = (0.4 + 2.2 * level) * (hash(Math.floor(time * 9)) < 0.05 ? 0.3 : 1);
  });
  facePlane(g, f, at, 4.9, 0.05, 6, 1.9, neonMat);
  for (const s of [-1, 1]) faceBox(g, f, at + s * 2.4, 0.18, 2.4, 2.7, 0, 0.14, kit.lamp('#c9b4ff'));
  accentGlow(ctx, onFace(f, at, 0, 2.5).x, onFace(f, at, 0, 2.5).z, 4, '#b04dff', 3.1);
}

function stationClock(ctx: Ctx, b: CityBuilding) {
  const g = ctx.group;
  const map = clockTexture();
  const face = new THREE.MeshStandardMaterial({ map, emissiveMap: map, emissive: '#fff4d8', emissiveIntensity: 0.4 });
  ctx.kit.night.signs.push(face);
  const north = faceOf(b, 'north');
  const t = (north.lo + north.hi) / 2;
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1.7, 40), face);
  disc.position.copy(onFace(north, t, b.h - 3.2, 0.05));
  disc.rotation.y = north.ry;
  g.add(disc);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.75, 0.09, 8, 40), brass());
  rim.position.copy(onFace(north, t, b.h - 3.2, 0.06));
  rim.rotation.y = north.ry;
  g.add(rim);
  // A small lantern roof on top of the tower.
  const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
  slab(g, cx - 1.6, cx + 1.6, b.h, b.h + 2.2, cz - 0.8, cz + 0.8, solid('#c8b896', 0.9));
  slab(g, cx - 1.3, cx + 1.3, b.h + 0.4, b.h + 1.8, cz - 0.82, cz + 0.82, ctx.kit.amber);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(1.9, 2.4, 4), solid('#3e5a5a', 0.6, 0.3));
  cap.position.set(cx, b.h + 3.4, cz);
  cap.rotation.y = Math.PI / 4;
  cap.scale.z = 0.5;
  g.add(cap);
}

// The embassy: flags, a lit entrance, floodlights up its stone front.
function embassyFront(ctx: Ctx, b: CityBuilding) {
  const g = ctx.group;
  const f = faceOf(b, 'south');
  const at = (b.x0 + b.x1) / 2;
  faceBox(g, f, at, 7, 0, 0.18, 0, 1.6, paleStone());
  faceBox(g, f, at, 6, 0.18, 0.36, 0, 1.0, paleStone());
  facePlane(g, f, at, 1.85, 0.03, 2.4, 3.0, ctx.kit.door);
  for (const s of [-1, 1]) {
    const p = onFace(f, at + s * 1.9, 2.2, 0.35);
    g.add(cylinder(0.26, 0.3, 4.4, paleStone(), p.x, p.y, p.z, 14));
  }
  faceBox(g, f, at, 4.6, 4.4, 4.9, 0, 0.6, paleStone());
  sign(ctx, 'EMBAJADA', '#2a2a2c', '#e8c46a', 3.2, 0.36, onFace(f, at, 4.65, 0.61), f.ry);
  [0, 1].forEach(i => {
    const t = at + (i ? 5 : -5);
    const p = onFace(f, t, 0, 2.2);
    g.add(cylinder(0.05, 0.08, 9, solid('#d8d8d4', 0.4, 0.6), p.x, 4.5, p.z, 8));
    g.add(cylinder(0.3, 0.36, 0.3, paleStone(), p.x, 0.15, p.z, 10));
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.4, 6, 1), new THREE.MeshStandardMaterial({ map: flagTexture(i), side: THREE.DoubleSide, roughness: 0.9 }));
    const pos = flag.geometry.getAttribute('position') as THREE.BufferAttribute;
    for (let v = 0; v < pos.count; v++) pos.setZ(v, Math.sin((pos.getX(v) + 1.1) * 2.6) * 0.12 * ((pos.getX(v) + 1.1) / 2.2));
    flag.geometry.computeVertexNormals();
    flag.position.set(p.x + 1.15, 8.1, p.z);
    g.add(flag);
  });
  // Floodlights in the ground throwing light up the facade.
  const wash = new THREE.MeshBasicMaterial({ map: washTexture(), color: '#8a7350', transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false });
  ctx.kit.night.pools.push(wash);
  for (const t of [b.x0 + 3.5, b.x0 + 9, b.x1 - 9, b.x1 - 3.5]) {
    facePlane(g, f, t, 5, 0.06, 5, 10, wash);
    faceBox(g, f, t, 0.5, 0, 0.18, 0.2, 0.6, ctx.kit.lamp('#fff1d6'));
  }
}

// The exterior iron staircase up the east side of the tenement: four flights
// from the street door to the roof, a small hut over the roof door.
function fireEscape(ctx: Ctx, b: CityBuilding) {
  const g = ctx.group;
  const metal = solid('#2b2f33', 0.6, 0.6);
  const grate = solid('#3a3e42', 0.6, 0.6);
  const x0 = b.x1 + 0.02, x1 = b.x1 + 1.12;
  const door = STREET_ROOMS['azotea-viejo'].door;
  const zs = door.z + 0.2, zn = zs - 3.8;
  const top = b.h;
  const flights: [number, number, number, number][] = [[zs, 0, zn, 2.5], [zn, 2.5, zs, 5], [zs, 5, zn, 7.5], [zn, 7.5, zs - 1.4, top]];
  for (const [za, ya, zb, yb] of flights) {
    const n = 13;
    for (let i = 0; i < n; i++) {
      const z = za + ((zb - za) * (i + 0.5)) / n;
      const y = ya + ((yb - ya) * (i + 1)) / n;
      slab(g, x0 + 0.06, x1 - 0.06, y - 0.04, y, z - Math.abs(zb - za) / n / 2 + 0.02, z + Math.abs(zb - za) / n / 2 - 0.02, grate, false);
    }
    for (const x of [x0 + 0.03, x1 - 0.03]) beam(g, new THREE.Vector3(x, ya - 0.1, za), new THREE.Vector3(x, yb - 0.1, zb), 0.05, 0.2, metal);
    beam(g, new THREE.Vector3(x1 - 0.03, ya + 0.95, za), new THREE.Vector3(x1 - 0.03, yb + 0.95, zb), 0.04, 0.04, metal);
  }
  const landing = (z0: number, z1: number, y: number) => {
    slab(g, x0, x1, y - 0.06, y, z0, z1, grate, false);
    railPlane(g, z1 - z0, 1, ctx.kit.rails.iron, new THREE.Vector3(x1 - 0.02, y + 0.5, (z0 + z1) / 2), Math.PI / 2);
    beam(g, new THREE.Vector3(x0, y - 0.9, (z0 + z1) / 2), new THREE.Vector3(x1 - 0.1, y - 0.06, (z0 + z1) / 2), 0.05, 0.05, metal);
  };
  landing(zn - 1.4, zn, 2.5);
  landing(zs, zs + 1.4, 5);
  landing(zn - 1.4, zn, 7.5);
  landing(zs - 1.4, zs + 1.2, top);
  // The hut over the roof door, its doorway open towards the roof (west).
  const hz0 = zs - 1.4, hz1 = zs + 1.2;
  const sheet = solid('#5d6a66', 0.7, 0.4);
  slab(g, x0, x1 + 0.1, top, top + 2.4, hz0 - 0.08, hz0, sheet);
  slab(g, x0, x1 + 0.1, top, top + 2.4, hz1, hz1 + 0.08, sheet);
  slab(g, x1, x1 + 0.1, top, top + 2.4, hz0, hz1, sheet);
  slab(g, x0 - 0.3, x1 + 0.3, top + 2.4, top + 2.55, hz0 - 0.3, hz1 + 0.3, solid('#3a3d40', 0.7, 0.4));
  slab(g, x0 + 0.3, x0 + 0.5, top + 2.1, top + 2.3, door.z - 0.1, door.z + 0.1, ctx.kit.lamp('#ffcf8a'));
  // A plaque by the foot of the stairs.
  sign(ctx, 'AZOTEA', '#1d1d1f', '#f2e6cc', 0.9, 0.3, new THREE.Vector3(b.x1 + 0.02, 2.0, zs + 0.9), Math.PI / 2);
  for (const z of [zs + 0.05, zs + 1.35]) slab(g, x1 - 0.05, x1 + 0.03, 0, 1.1, z - 0.04, z + 0.04, metal, false);
}

// One building of the city: the mass from addBuilding (build3d.ts), the
// district's facade, then balconies, shutters, doors and signs.
function cityBuilding(ctx: Ctx, b: CityBuilding, index: number) {
  if (b.style === 'kiosk') { kiosk(ctx, b); return; }
  const kit = ctx.kit;
  const look = STYLE[b.style] ?? { kind: 'plain' as FacadeKind, tint: '#cccccc' };
  const conventillo = b.id.startsWith('v-conventillo');
  const tint = b.district === 'viejo' && b.style === 'brick' ? '#94513e' : look.tint;
  const wall = b.party
    ? kit.party(look.kind === 'corrugated' ? 'corrugated' : 'plain', look.kind === 'corrugated' ? '#5e5266' : look.tint, index, look.kind === 'corrugated' ? ['#ff4fa3', '#9a4dff', '#4fd8ff'] : ['#ff4fa3', '#4fd8ff', '#ffb347', '#a46bff', '#7cff9a'])
    : kit.facade(look.kind, tint, ctx.zone.glow, index % 3);
  addBuilding(ctx.group, { id: b.id, x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, h: b.h, style: b.style, rooftop: conventillo }, index, kit.night, { wall, split: true, bare: conventillo });
  if (b.balconies) for (const side of b.balconies) balconies(ctx, b, side);
  if (b.shutter) shutter(ctx, b, b.shutter);
  if (b.fireEscape) fireEscape(ctx, b);
  if (b.flags) embassyFront(ctx, b);
  front(ctx, b);
}

// ---------------------------------------------------------------- props

// Every prop is drawn inside its box (x0..x1, z0..z1, up to h), so what you
// see is what you bump into.
function prop(ctx: Ctx, p: Prop) {
  const g = ctx.group;
  const kit = ctx.kit;
  const w = p.x1 - p.x0, d = p.z1 - p.z0;
  const cx = (p.x0 + p.x1) / 2, cz = (p.z0 + p.z1) / 2;
  const alongX = w >= d;
  switch (p.kind) {
    case 'fence': {
      if (p.id.startsWith('obra')) {
        // Construction hoarding: painted sheet panels on posts.
        texturedSlab(g, p.x0, p.x1, 0, p.h, p.z0, p.z1, kit.hoarding, 4.8).scale.set(1, 1, 1);
        return;
      }
      meshFence(ctx, p);
      return;
    }
    case 'gate': {
      if (p.id.includes('porton')) {
        slab(g, p.x0, p.x1, 0, p.h - 0.05, p.z0 + 0.12, p.z1 - 0.12, solid('#4a5a52', 0.6, 0.5));
        const f: Face = alongX ? faceOf(p, 'south') : faceOf(p, 'east');
        const t = alongX ? cx : cz;
        const width = alongX ? w : d;
        for (const s of [-1, 1]) {
          const frame = faceBox(g, f, t + (s * width) / 4, width / 2 - 0.1, 0.1, p.h - 0.15, -0.06, 0.02, solid('#e8c640', 0.6));
          frame.scale.set(1, 1, 1);
        }
        for (const face of [f, alongX ? faceOf(p, 'north') : faceOf(p, 'west')]) {
          sign(ctx, 'PROHIBIDO EL PASO', '#f2c230', '#1d1d1f', Math.min(width - 0.4, 2.6), 0.42, onFace(face, t, 1.5, 0.05), face.ry);
          faceBox(g, face, t, 0.5, 1.0, 1.05, 0, 0.06, solid('#9aa3ab', 0.4, 0.8));
          faceBox(g, face, t, 0.16, 0.86, 1.04, 0.02, 0.1, solid('#c9a24a', 0.3, 0.8));
        }
        // A warning lamp on the gate post, blinking amber.
        const post = alongX ? new THREE.Vector3(p.x0 + 0.1, p.h + 0.12, cz) : new THREE.Vector3(cx, p.h + 0.12, p.z0 + 0.1);
        g.add(box(0.18, 0.24, 0.18, blinker(kit, '#ffab2a', 1.2, 0.5, p.x0 * 0.01), post.x, post.y, post.z, false));
        return;
      }
      // Wrought-iron gate closing the alley.
      const bars: THREE.BufferGeometry[] = [];
      const length = alongX ? w : d;
      for (let s = 0.1; s < length; s += 0.16) {
        const x = alongX ? p.x0 + s : cx, z = alongX ? cz : p.z0 + s;
        bars.push(new THREE.BoxGeometry(0.03, p.h - 0.1, 0.03).translate(x, (p.h - 0.1) / 2, z));
      }
      for (const y of [0.15, 1.2, p.h - 0.15]) bars.push(new THREE.BoxGeometry(alongX ? length : 0.06, 0.06, alongX ? 0.06 : length).translate(cx, y, cz));
      g.add(mergedMesh(bars, iron()));
      g.add(box(0.14, 0.2, 0.1, solid('#c9a24a', 0.3, 0.8), cx, 1.15, cz, false));
      return;
    }
    case 'scaffold': scaffold(ctx, p); return;
    case 'booth': {
      slab(g, p.x0, p.x1, 0, p.h - 0.15, p.z0, p.z1, solid('#d9d3c4', 0.7));
      slab(g, p.x0 - 0.05, p.x1 + 0.05, p.h - 0.15, p.h, p.z0 - 0.05, p.z1 + 0.05, solid('#3a5a7a', 0.6));
      const f = faceOf(p, 'east');
      facePlane(g, f, cz - 0.4, 1.5, 0.02, 0.9, 0.7, kit.warm);
      facePlane(g, f, cz + 0.65, 1.0, 0.02, 0.8, 2.0, solid('#3a5a7a', 0.6));
      const north = faceOf(p, 'north');
      sign(ctx, 'OBRA', '#3a5a7a', '#f2e6cc', 1.2, 0.3, onFace(north, cx, 2.1, 0.02), north.ry);
      return;
    }
    case 'wall': {
      texturedSlab(g, p.x0, p.x1, 0, p.h - 0.08, p.z0, p.z1, ctx.zone.id === 'viejo' ? kit.brick : kit.brickDark, 1.6);
      slab(g, p.x0 - 0.04, p.x1 + 0.04, p.h - 0.08, p.h, p.z0 - 0.04, p.z1 + 0.04, solid('#8d877d', 0.9));
      return;
    }
    case 'phone': {
      slab(g, cx - 0.06, cx + 0.06, 0, p.h - 0.2, p.z0 + 0.05, p.z0 + 0.25, solid('#2f4f7a', 0.5, 0.3));
      slab(g, p.x0, p.x1, p.h - 0.25, p.h, p.z0, p.z1, solid('#2f4f7a', 0.5, 0.3));
      slab(g, p.x0 + 0.08, p.x1 - 0.08, p.h - 0.28, p.h - 0.25, p.z0 + 0.08, p.z1 - 0.08, kit.lamp('#e4f0ff'));
      slab(g, cx - 0.17, cx + 0.17, 1.15, 1.65, p.z0 + 0.25, p.z0 + 0.45, solid('#9aa3ab', 0.4, 0.6));
      const handset = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.2, 4, 8), solid('#141414', 0.4));
      handset.position.set(cx - 0.22, 1.42, p.z0 + 0.4);
      g.add(handset);
      const south = faceOf(p, 'south');
      sign(ctx, 'TELÉFONO', '#2f4f7a', '#f4f1ea', 0.74, 0.2, onFace(south, cx, p.h - 0.125, 0.01), 0);
      return;
    }
    case 'bench': bench(ctx, p); return;
    case 'dumpster': {
      slab(g, p.x0 + 0.05, p.x1 - 0.05, 0.15, p.h - 0.12, p.z0 + 0.05, p.z1 - 0.05, solid('#2f5a3a', 0.6, 0.3));
      const lid = slab(g, p.x0, p.x1, p.h - 0.12, p.h - 0.04, p.z0, p.z1, solid('#1f3a26', 0.6, 0.3));
      lid.rotation.x = 0.06;
      for (const x of [p.x0 + 0.25, p.x1 - 0.25]) for (const z of [p.z0 + 0.2, p.z1 - 0.2]) g.add(cylinder(0.08, 0.08, 0.12, solid('#151515'), x, 0.08, z, 8));
      return;
    }
    case 'fountain': {
      const r = Math.min(w, d) / 2;
      g.add(cylinder(r, r, 0.6, paleStone(), cx, 0.3, cz, 8));
      const pool = new THREE.Mesh(new THREE.CircleGeometry(r - 0.25, 8), kit.water);
      pool.rotation.x = -Math.PI / 2;
      pool.rotation.z = Math.PI / 8;
      pool.position.set(cx, 0.52, cz);
      g.add(pool);
      g.add(cylinder(0.3, 0.42, 0.6, paleStone(), cx, 0.8, cz, 12));
      g.add(cylinder(0.9, 0.55, 0.12, paleStone(), cx, 1.14, cz, 16));
      const jet = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.9, 12, 1, true), new THREE.MeshStandardMaterial({ color: '#cfe8f4', transparent: true, opacity: 0.3, roughness: 0.1, depthWrite: false }));
      jet.position.set(cx, 1.65, cz);
      jet.rotation.x = Math.PI;
      g.add(jet);
      // Lights under the water.
      const ring = new THREE.Mesh(new THREE.RingGeometry(r - 0.6, r - 0.45, 24), kit.lamp('#9fe0ff'));
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(cx, 0.51, cz);
      g.add(ring);
      return;
    }
    case 'statue': statue(ctx, p); return;
    case 'planter': {
      texturedSlab(g, p.x0, p.x1, 0, 0.45, p.z0, p.z1, kit.ground.stone, 1.2);
      slab(g, p.x0 + 0.1, p.x1 - 0.1, 0.45, 0.66, p.z0 + 0.1, p.z1 - 0.1, solid('#33512e', 0.95));
      for (let i = 0; i < 6; i++) g.add(box(0.12, 0.12, 0.12, solid(['#f2e6cc', '#e0457a', '#f2c230'][i % 3], 0.8), p.x0 + 0.4 + i * ((w - 0.8) / 5), 0.72, cz + (i % 2 ? 0.2 : -0.2), false));
      return;
    }
    case 'vending': {
      slab(g, p.x0, p.x1, 0, p.h, p.z0, p.z1, solid('#8e2a2a', 0.5, 0.3));
      const front = canvas(128, 256, c => {
        c.fillStyle = '#e8f0ff'; c.fillRect(0, 0, 128, 256);
        for (let r = 0; r < 5; r++) for (let i = 0; i < 5; i++) { c.fillStyle = ['#d24a3a', '#3a7bd2', '#e8c640', '#4aa05a', '#f0f0f0'][(r + i) % 5]; c.fillRect(8 + i * 16, 12 + r * 32, 10, 22); }
        c.fillStyle = '#2a2a2a'; c.fillRect(96, 20, 26, 120); c.fillRect(8, 190, 80, 40);
      });
      const mat = new THREE.MeshStandardMaterial({ map: front, emissiveMap: front, emissive: '#ffffff', emissiveIntensity: 0.5 });
      kit.night.windows.push(mat);
      facePlane(g, faceOf(p, 'east'), cz, 1.1, 0.01, d - 0.2, 1.8, mat);
      return;
    }
    case 'patrol': patrolCar(ctx, p); return;
    case 'ambulance': ambulance(ctx, p); return;
    case 'stall': stall(ctx, p); return;
    case 'stage': {
      texturedSlab(g, p.x0, p.x1, 0, p.h, p.z0, p.z1, new THREE.MeshStandardMaterial({ map: tiles('#6b4a33', 'rgba(20,10,5,.5)', 128, 8), roughness: 0.8 }), 2);
      const back = p.z1 - 0.15;
      for (const x of [p.x0 + 0.15, p.x1 - 0.15]) slab(g, x - 0.08, x + 0.08, p.h, 3.8, back - 0.08, back + 0.08, iron());
      slab(g, p.x0 + 0.07, p.x1 - 0.07, 3.7, 3.86, back - 0.08, back + 0.08, iron());
      sign(ctx, 'MÚSICA EN VIVO', '#1d1a2e', '#ffcf6a', 3.6, 0.5, new THREE.Vector3(cx, 3.35, back - 0.1), Math.PI);
      for (const [x, c] of [[p.x0 + 1.2, '#ff5a7a'], [cx, '#ffd36a'], [p.x1 - 1.2, '#5ad1ff']] as const) {
        const spot = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.3, 10), pulser(kit, c, 1.7, x, 2.6));
        spot.position.set(x, 3.55, back - 0.15);
        g.add(spot);
        accentGlow(ctx, x, cz - 0.5, 1.2, c, 1.7);
      }
      for (const x of [p.x0 + 0.4, p.x1 - 0.4]) slab(g, x - 0.3, x + 0.3, p.h, p.h + 0.9, p.z0 + 0.3, p.z0 + 0.8, solid('#1d1d1f', 0.6));
      return;
    }
    case 'tent': tent(ctx, p); return;
    case 'table': {
      g.add(cylinder(0.56, 0.56, 0.05, solid(ctx.zone.id === 'costa' ? '#e9e6de' : '#8a6a4a', 0.6), cx, p.h - 0.03, cz, 18));
      g.add(cylinder(0.05, 0.05, p.h - 0.05, iron(), cx, (p.h - 0.05) / 2, cz, 8));
      g.add(cylinder(0.3, 0.3, 0.04, iron(), cx, 0.02, cz, 12));
      if (ctx.zone.id === 'mercado') g.add(cylinder(0.05, 0.05, 0.12, kit.lamp('#ffcf7a'), cx, p.h + 0.06, cz, 8));
      return;
    }
    case 'grill': {
      texturedSlab(g, p.x0, p.x1, 0, 0.8, p.z0, p.z1, kit.brickDark, 1.2);
      const coals = flickerer(kit, '#ff6a2a', 7, 1.6);
      slab(g, p.x0 + 0.15, p.x1 - 0.15, 0.8, 0.84, p.z0 + 0.15, p.z1 - 0.15, coals, false);
      slab(g, p.x0 + 0.1, p.x1 - 0.1, 0.88, 0.9, p.z0 + 0.1, p.z1 - 0.1, iron(), false);
      for (let i = 0; i < 5; i++) g.add(box(0.3, 0.05, 0.12, solid('#7a3a22', 0.6), p.x0 + 0.5 + i * 0.25, 0.93, cz + (i % 2 ? 0.3 : -0.3), false));
      for (const x of [p.x0 + 0.1, p.x1 - 0.1]) slab(g, x - 0.03, x + 0.03, 0.8, p.h, p.z1 - 0.13, p.z1 - 0.07, iron(), false);
      slab(g, p.x0 + 0.05, p.x1 - 0.05, p.h - 0.06, p.h, p.z1 - 0.15, p.z1 - 0.05, iron(), false);
      smoke(ctx, cx, 1.0, cz);
      return;
    }
    case 'tunnel-wall': {
      texturedSlab(g, p.x0, p.x1, 0, p.h, p.z0, p.z1, kit.concreteTex, 3);
      floor(g, { x0: p.x1 - 0.01, x1: p.x1 + 0.01, z0: p.z0, z1: p.z1 }, 0, kit.tunnelTile, 1);
      const tile = quad(g, p.z1 - p.z0, CEILINGS[0].height, kit.tunnelTile, p.x1 + 0.02, CEILINGS[0].height / 2, cz, Math.PI / 2);
      const uv = tile.geometry.getAttribute('uv') as THREE.BufferAttribute;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (p.z1 - p.z0) / 1.2, uv.getY(i) * CEILINGS[0].height / 1.2);
      return;
    }
    case 'shelter': {
      const glass = new THREE.MeshStandardMaterial({ color: '#9fc0d0', transparent: true, opacity: 0.22, roughness: 0.1, depthWrite: false, side: THREE.DoubleSide });
      const frame = solid('#2c3a3a', 0.5, 0.5);
      slab(g, p.x0, p.x1, p.h - 0.12, p.h, p.z0, p.z1, solid('#7d8f96', 0.4, 0.3));
      for (const z of [p.z0 + 0.04, p.z1 - 0.04]) for (const x of [p.x0 + 0.04, p.x1 - 0.04]) slab(g, x - 0.04, x + 0.04, 0, p.h - 0.12, z - 0.04, z + 0.04, frame);
      quad(g, d - 0.1, p.h - 0.4, glass, p.x0 + 0.05, (p.h - 0.12) / 2 + 0.1, cz, Math.PI / 2);
      quad(g, w - 0.1, p.h - 0.4, glass, cx, (p.h - 0.12) / 2 + 0.1, p.z0 + 0.05, 0);
      // A lit panel with the night bus timetable at the south end.
      const panel = canvas(128, 256, c => {
        c.fillStyle = '#eef4ff'; c.fillRect(0, 0, 128, 256);
        c.fillStyle = '#1f4a7a'; c.fillRect(0, 0, 128, 44);
        c.fillStyle = '#ffffff'; c.font = '700 22px sans-serif'; c.textAlign = 'center'; c.fillText('N3', 64, 30);
        c.fillStyle = '#1d1d1f'; c.font = '14px sans-serif';
        ['NOCTURNO', 'cada 40 min', '', '00:10', '00:50', '01:30', '02:10'].forEach((line, i) => c.fillText(line, 64, 72 + i * 22));
      });
      const panelMat = new THREE.MeshStandardMaterial({ map: panel, emissiveMap: panel, emissive: '#ffffff', emissiveIntensity: 0.4 });
      kit.night.signs.push(panelMat);
      slab(g, p.x0 + 0.1, p.x1 - 0.1, 0.3, 2.1, p.z1 - 0.12, p.z1 - 0.04, frame);
      quad(g, w - 0.3, 1.7, panelMat, cx, 1.2, p.z1 - 0.13, Math.PI);
      slab(g, p.x0 + 0.12, p.x0 + 0.52, 0.44, 0.5, p.z0 + 0.6, p.z1 - 0.8, solid('#6b4a33'));
      sign(ctx, 'PARADA', '#1f4a7a', '#ffffff', 1.0, 0.24, new THREE.Vector3(p.x1 + 0.01, p.h - 0.06, cz), Math.PI / 2);
      return;
    }
    case 'swings': {
      const frame = solid('#c0342b', 0.5, 0.4);
      for (const x of [p.x0 + 0.08, p.x1 - 0.08]) {
        beam(g, new THREE.Vector3(x, 0, p.z0 + 0.05), new THREE.Vector3(x, p.h, cz), 0.08, 0.08, frame);
        beam(g, new THREE.Vector3(x, 0, p.z1 - 0.05), new THREE.Vector3(x, p.h, cz), 0.08, 0.08, frame);
      }
      slab(g, p.x0, p.x1, p.h - 0.08, p.h, cz - 0.05, cz + 0.05, frame);
      for (const x of [cx - 1.5, cx, cx + 1.5]) {
        slab(g, x - 0.25, x + 0.25, 0.42, 0.47, cz - 0.11, cz + 0.11, solid('#2a2a2c', 0.6));
        for (const s of [-0.23, 0.23]) slab(g, x + s - 0.01, x + s + 0.01, 0.47, p.h - 0.08, cz - 0.01, cz + 0.01, iron(), false);
      }
      return;
    }
    case 'slide': {
      const color = solid('#e8c640', 0.5, 0.3);
      const top = p.h - 0.35;
      for (const z of [p.z0 + 0.6, p.z1 - 0.6]) for (const x of [p.x0 + 0.15, p.x0 + 1.05]) slab(g, x - 0.05, x + 0.05, 0, p.h, z - 0.05, z + 0.05, solid('#c0342b', 0.5, 0.4));
      slab(g, p.x0 + 0.1, p.x0 + 1.1, top - 0.06, top, p.z0 + 0.55, p.z1 - 0.55, color);
      for (let y = 0.3; y < top; y += 0.3) slab(g, p.x0 + 0.12, p.x0 + 0.18, y - 0.02, y + 0.02, p.z0 + 0.6, p.z1 - 0.6, iron(), false);
      beam(g, new THREE.Vector3(p.x0 + 1.1, top, cz), new THREE.Vector3(p.x1 - 0.1, 0.3, cz), 0.7, 0.06, color);
      for (const s of [-0.37, 0.37]) beam(g, new THREE.Vector3(p.x0 + 1.1, top + 0.15, cz + s), new THREE.Vector3(p.x1 - 0.1, 0.45, cz + s), 0.04, 0.2, color);
      return;
    }
    case 'crane': crane(ctx, p); return;
    case 'foodtruck': foodTruck(ctx, p); return;
    case 'container': {
      const color = p.id.endsWith('1') ? '#a8442f' : '#2f6a8a';
      const material = new THREE.MeshStandardMaterial({ map: kit.corrugated.map, color, roughness: 0.7, metalness: 0.3 });
      texturedSlab(g, p.x0, p.x1, 0, p.h, p.z0, p.z1, material, 0.6);
      for (const x of [p.x0 + 0.02, p.x1 - 0.02]) slab(g, x - 0.03, x + 0.03, 0.1, p.h - 0.1, cz - 0.02, cz + 0.02, solid('#3a3a3a', 0.6, 0.6), false);
      return;
    }
    case 'rope': {
      const posts: THREE.Vector3[] = [];
      for (let x = p.x0 + 0.1; x <= p.x1 - 0.1 + 1e-6; x += (w - 0.2) / 3) posts.push(new THREE.Vector3(x, p.h - 0.1, cz));
      for (const q of posts) {
        g.add(cylinder(0.04, 0.04, p.h - 0.1, brass(), q.x, (p.h - 0.1) / 2, q.z, 8));
        g.add(cylinder(0.14, 0.16, 0.04, brass(), q.x, 0.02, q.z, 12));
        const knob = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), brass());
        knob.position.set(q.x, p.h - 0.06, q.z);
        g.add(knob);
      }
      for (let i = 0; i < posts.length - 1; i++) {
        const curve = new THREE.CatmullRomCurve3([0, 0.25, 0.5, 0.75, 1].map(t => sagPoint(posts[i], posts[i + 1], 0.22, t)));
        g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.03, 6), solid('#7a1a2a', 0.8)));
      }
      return;
    }
  }
}

// Wire-mesh fence: posts (instanced), a top rail and the mesh.
function meshFence(ctx: Ctx, p: Prop) {
  const alongX = p.x1 - p.x0 >= p.z1 - p.z0;
  const length = alongX ? p.x1 - p.x0 : p.z1 - p.z0;
  const cx = (p.x0 + p.x1) / 2, cz = (p.z0 + p.z1) / 2;
  const n = Math.max(1, Math.round(length / 2.5));
  for (let i = 0; i <= n; i++) {
    const s = Math.min(length - 0.05, Math.max(0.05, (i / n) * length));
    const x = alongX ? p.x0 + s : cx, z = alongX ? cz : p.z0 + s;
    ctx.kit.inst.add('fence-post', () => new THREE.CylinderGeometry(0.04, 0.04, 1, 6), solid('#8f979b', 0.4, 0.7), m4(x, p.h / 2, z, 0, 1, p.h, 1));
  }
  slab(ctx.group, alongX ? p.x0 : cx - 0.03, alongX ? p.x1 : cx + 0.03, p.h - 0.06, p.h, alongX ? cz - 0.03 : p.z0, alongX ? cz + 0.03 : p.z1, solid('#8f979b', 0.4, 0.7), false);
  const mesh = quad(ctx.group, length, p.h - 0.1, ctx.kit.chain, cx, (p.h - 0.1) / 2, cz, alongX ? 0 : Math.PI / 2);
  const uv = mesh.geometry.getAttribute('uv') as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * length / 0.6, uv.getY(i) * (p.h - 0.1) / 0.6);
}

// Which way a bench looks: the way its sitter faces, otherwise away from the
// wall behind it (south for long-in-x benches, west for long-in-z ones).
function bench(ctx: Ctx, p: Prop) {
  const cx = (p.x0 + p.x1) / 2, cz = (p.z0 + p.z1) / 2;
  const alongX = p.x1 - p.x0 >= p.z1 - p.z0;
  let face = alongX ? 0 : -Math.PI / 2;
  for (const s of SITTERS) if (inside(p, s.x, s.z, 0.3)) face = s.face;
  for (const place of Object.values(PLACES)) if (place.seat && inside(p, place.x, place.z, 0.3)) face = place.face;
  const length = alongX ? p.x1 - p.x0 : p.z1 - p.z0;
  const depth = alongX ? p.z1 - p.z0 : p.x1 - p.x0;
  const group = new THREE.Group();
  const wood = solid(ctx.zone.id === 'alto' ? '#3a2a20' : '#6b4a33', 0.8);
  const metal = ctx.zone.id === 'alto' ? solid('#1d2622', 0.5, 0.6) : iron();
  group.add(box(length, 0.07, depth * 0.62, wood, 0, 0.46, 0.04 * depth));
  group.add(box(length, 0.38, 0.06, wood, 0, 0.78, -depth / 2 + 0.06));
  for (const s of [-1, 1]) {
    group.add(box(0.07, 0.46, depth * 0.7, metal, s * (length / 2 - 0.12), 0.23, 0));
    group.add(box(0.07, 0.25, depth * 0.7, metal, s * (length / 2 - 0.05), 0.68, 0));
  }
  group.position.set(cx, 0, cz);
  group.rotation.y = face;
  ctx.group.add(group);
}

function statue(ctx: Ctx, p: Prop) {
  const g = ctx.group;
  const cx = (p.x0 + p.x1) / 2, cz = (p.z0 + p.z1) / 2;
  const bronze = solid('#4a5a46', 0.45, 0.6);
  texturedSlab(g, p.x0, p.x1, 0, 0.3, p.z0, p.z1, ctx.kit.ground.stone, 1.2);
  slab(g, p.x0 + 0.25, p.x1 - 0.25, 0.3, 1.7, p.z0 + 0.25, p.z1 - 0.25, paleStone());
  slab(g, p.x0 + 0.15, p.x1 - 0.15, 1.7, 1.85, p.z0 + 0.15, p.z1 - 0.15, paleStone());
  sign(ctx, 'AL POETA DEL BARRIO', '#5a5446', '#e8dcc0', 1.4, 0.2, new THREE.Vector3(cx, 1.1, p.z1 - 0.24), 0);
  // The poet, standing with a book open in one hand.
  const figure = new THREE.Group();
  figure.add(cylinder(0.32, 0.42, 1.2, bronze, 0, 0.6, 0, 10));
  figure.add(cylinder(0.24, 0.3, 0.6, bronze, 0, 1.45, 0, 10));
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), bronze);
  head.position.set(0, 1.95, 0.02);
  figure.add(head);
  const arm = box(0.12, 0.55, 0.12, bronze, 0.3, 1.45, 0.18);
  arm.rotation.x = -0.9;
  figure.add(arm);
  figure.add(box(0.3, 0.04, 0.22, bronze, 0.32, 1.32, 0.42));
  figure.add(box(0.1, 0.5, 0.1, bronze, -0.32, 1.3, 0));
  figure.position.set(cx, 1.85, cz);
  g.add(figure);
  // Small lights in the plinth, warm on the bronze.
  for (const s of [-1, 1]) g.add(box(0.2, 0.08, 0.08, ctx.kit.lamp('#ffe2b0'), cx + s * 0.5, 0.34, p.z1 - 0.05, false));
}

function patrolCar(ctx: Ctx, p: Prop) {
  const cx = (p.x0 + p.x1) / 2, cz = (p.z0 + p.z1) / 2;
  const rig = parkedCar(ctx, 'sedan', '#eef0f2', cx, cz, 0);
  const g = rig;
  g.add(box(4.32, 0.18, 1.84, solid('#1f3a7a', 0.4, 0.3), 0, 0.72, 0, false));
  const blue = pulser(ctx.kit, '#3a6bff', 1.6, 0, 3);
  const red = pulser(ctx.kit, '#ff3a3a', 1.6, Math.PI, 3);
  g.add(box(0.26, 0.12, 1.2, solid('#1d1d1f', 0.5), -0.25, 1.57, 0, false));
  g.add(box(0.22, 0.1, 0.5, blue, -0.25, 1.65, 0.3, false));
  g.add(box(0.22, 0.1, 0.5, red, -0.25, 1.65, -0.3, false));
}

function ambulance(ctx: Ctx, p: Prop) {
  const g = new THREE.Group();
  const white = solid('#f2f2ee', 0.4, 0.2);
  const red = solid('#c0342b', 0.5);
  const w = p.x1 - p.x0 - 0.04, length = p.z1 - p.z0 - 0.04;
  // Long axis along z, cab at the south end.
  g.add(box(w, 1.95, length - 1.4, white, 0, 0.35 + 1.95 / 2, -0.7));
  g.add(box(w, 1.35, 1.4, white, 0, 0.35 + 1.35 / 2, length / 2 - 0.7));
  g.add(box(w - 0.1, 0.5, 0.05, carGlassMat(), 0, 1.4, length / 2 - 0.02));
  for (const s of [-1, 1]) {
    g.add(box(0.02, 0.2, length - 0.2, red, s * (w / 2 + 0.005), 1.05, 0, ));
    const cross = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.6), new THREE.MeshStandardMaterial({ map: crossTexture('#d92a2a'), roughness: 0.6 }));
    cross.position.set(s * (w / 2 + 0.02), 1.6, -0.9);
    cross.rotation.y = (s * Math.PI) / 2;
    g.add(cross);
  }
  for (const [x, z] of [[-w / 2 + 0.1, -length / 2 + 0.8], [w / 2 - 0.1, -length / 2 + 0.8], [-w / 2 + 0.1, length / 2 - 0.9], [w / 2 - 0.1, length / 2 - 0.9]]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.24, 14), solid('#151515', 0.8));
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(x, 0.36, z);
    g.add(wheel);
  }
  // Roof lights: off while it waits, just a faint glow.
  g.add(box(0.25, 0.14, 0.25, glow('#3a6bff', 0.3), -0.5, 2.37, length / 2 - 1.6, false));
  g.add(box(0.25, 0.14, 0.25, glow('#3a6bff', 0.3), 0.5, 2.37, length / 2 - 1.6, false));
  g.position.set((p.x0 + p.x1) / 2, 0, (p.z0 + p.z1) / 2);
  ctx.group.add(g);
}

let glassMaterial: THREE.MeshStandardMaterial | null = null;
function carGlassMat() {
  glassMaterial ??= new THREE.MeshStandardMaterial({ color: '#1a222b', roughness: 0.1, metalness: 0.6, transparent: true, opacity: 0.6 });
  return glassMaterial;
}

// A parked car from makeCar (build3d.ts) with its lights off, sharing
// materials so a street of parked cars stays cheap.
const lightsOff = { head: () => solid('#cfcac0', 0.3, 0.1), tail: () => solid('#4a1410', 0.4, 0.1) };
let taxiSign: THREE.MeshStandardMaterial | null = null;
function parkedCar(ctx: Ctx, kind: 'sedan' | 'coupe' | 'taxi' | 'van', color: string, x: number, z: number, heading: number) {
  const rig = makeCar(kind, color);
  rig.group.traverse(object => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh || Array.isArray(mesh.material)) return;
    const material = mesh.material as MSM;
    if (material.map && material.emissiveMap) {
      if (!taxiSign) { taxiSign = material; ctx.kit.night.signs.push(material); }
      mesh.material = taxiSign;
    } else if (material.emissive && material.emissiveIntensity > 0 && material.color.getHex() === 0x111111) {
      mesh.material = mesh.position.x > 0 ? lightsOff.head() : lightsOff.tail();
    }
  });
  placeVehicle(rig.group, x, z, heading);
  ctx.group.add(rig.group);
  return rig.group;
}

function stall(ctx: Ctx, p: Prop) {
  const g = ctx.group;
  const kit = ctx.kit;
  const cx = (p.x0 + p.x1) / 2;
  // Stalls face the middle of the market lane.
  const out = (p.z0 + p.z1) / 2 < -12 ? 1 : -1;
  const front = out > 0 ? p.z1 : p.z0, back = out > 0 ? p.z0 : p.z1;
  const wood = solid('#7a5a3c', 0.8);
  slab(g, p.x0 + 0.05, p.x1 - 0.05, 0, 0.92, Math.min(front, back) + 0.05, Math.max(front, back) - 0.05, wood);
  slab(g, p.x0, p.x1, 0.92, 0.98, Math.min(front, back), Math.max(front, back), solid('#d8cfbf', 0.6));
  const backPost = back + out * 0.06;
  for (const x of [p.x0 + 0.06, p.x1 - 0.06]) for (const z of [p.z0 + 0.06, p.z1 - 0.06]) {
    const h = Math.abs(z - backPost) < 0.01 ? p.h - 0.05 : p.h - 0.35;
    slab(g, x - 0.04, x + 0.04, 0.98, h, z - 0.04, z + 0.04, solid('#d2bc96', 0.7));
  }
  // The awning slopes down towards the customers (instanced, coloured).
  const slope = Math.atan2(0.3, p.z1 - p.z0);
  kit.inst.add('awning', () => {
    const geometry = new THREE.BoxGeometry(1, 0.06, 1);
    const uv = geometry.getAttribute('uv') as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * 4);
    return geometry;
  }, new THREE.MeshStandardMaterial({ map: stripes('#ffffff', '#cfc6b4'), roughness: 0.9, side: THREE.DoubleSide }), m4(cx, p.h - 0.2, (p.z0 + p.z1) / 2, 0, p.x1 - p.x0, 1, (p.z1 - p.z0) / Math.cos(slope), out * slope), p.color ?? '#a04f3c', true);
  kit.inst.add('bulb', () => new THREE.SphereGeometry(0.075, 6, 4), kit.bulb, m4(cx, p.h - 0.6, (p.z0 + p.z1) / 2), '#ffd9a0');
  // What is for sale: flowers, books, food or bric-a-brac.
  const seller = Object.values(PLACES).find(place => place.behindCounter && Math.abs(place.x - cx) < 1.4 && Math.abs(place.z - (p.z0 + p.z1) / 2) < 3);
  const id = seller ? Object.entries(PLACES).find(([, v]) => v === seller)![0] : '';
  const palette = id === 'mercado-flores' ? ['#e0457a', '#f2c230', '#f4f1ea', '#c0342b', '#9a6bd8']
    : id === 'mercado-libros' ? ['#6a1e2a', '#1f4a7a', '#2f5d4a', '#c9a24a', '#e8dcc0']
      : id === 'mercado-vendedor' ? ['#d9a441', '#c9853a', '#e8c46a'] : ['#d24a3a', '#e8c640', '#4aa05a', '#d97a2a', '#7ad1ff'];
  const rand = random(idSeed(p.id));
  for (let i = 0; i < 9; i++) {
    const x = p.x0 + 0.25 + (i % 5) * ((p.x1 - p.x0 - 0.5) / 4);
    const z = front - out * (0.3 + Math.floor(i / 5) * 0.45);
    const h = id === 'mercado-libros' ? 0.08 : 0.14 + rand() * 0.12;
    kit.inst.add('goods', () => new THREE.BoxGeometry(0.18, 0.22, 0.14), solid('#ffffff', 0.6), m4(x, 0.98 + h / 2, z, rand() * 0.6, 1.4, h / 0.22, 1.6), palette[i % palette.length]);
  }
}

function tent(ctx: Ctx, p: Prop) {
  const g = ctx.group;
  const kit = ctx.kit;
  const cx = (p.x0 + p.x1) / 2, cz = (p.z0 + p.z1) / 2;
  const r = Math.min(p.x1 - p.x0, p.z1 - p.z0) / 2;
  const cloth = new THREE.MeshStandardMaterial({ map: stripes('#4a2a6a', '#c9a24a'), roughness: 0.9, side: THREE.DoubleSide });
  cloth.map!.repeat.set(4, 1);
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.96, r * 0.96, 1.9, 12, 1, true), cloth);
  wall.position.set(cx, 0.95, cz);
  g.add(wall);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(r, p.h - 1.9, 12), cloth);
  roof.position.set(cx, 1.9 + (p.h - 1.9) / 2, cz);
  g.add(roof);
  // The entrance faces north, where the fortune teller waits; violet light inside.
  const purple = pulser(kit, '#b04dff', 0.8, 0, 2);
  quad(g, 1.1, 1.75, purple, cx, 0.88, p.z0 + (r - r * 0.96 * Math.cos(Math.PI / 12)) + 0.05, Math.PI);
  for (const s of [-1, 1]) {
    const flap = box(0.5, 1.8, 0.03, cloth, cx + s * 0.75, 0.9, p.z0 + 0.25, false);
    flap.rotation.y = s * 0.5;
    g.add(flap);
  }
  sign(ctx, 'MADAME ZULEMA', '#2a1440', '#e8c46a', 1.8, 0.32, new THREE.Vector3(cx, 2.15, p.z0 + 0.12), Math.PI);
  g.add(cylinder(0.02, 0.02, 0.9, iron(), cx, p.h + 0.4, cz, 6));
  const pennant = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.25), solid('#c9a24a', 0.8));
  pennant.position.set(cx + 0.25, p.h + 0.7, cz);
  g.add(pennant);
  accentGlow(ctx, cx, p.z0 - 1, 2.4, '#9a4dff', 0.8);
}

function scaffold(ctx: Ctx, p: Prop) {
  const g = ctx.group;
  const tube = solid('#9aa3ab', 0.4, 0.7);
  const parts: THREE.BufferGeometry[] = [];
  const xs: number[] = [];
  for (let x = p.x0 + 0.05; x <= p.x1 - 0.05 + 1e-6; x += (p.x1 - p.x0 - 0.1) / 6) xs.push(x);
  const zs = [p.z0 + 0.05, p.z1 - 0.05];
  for (const x of xs) for (const z of zs) parts.push(new THREE.BoxGeometry(0.06, p.h, 0.06).translate(x, p.h / 2, z));
  for (let y = 2; y < p.h; y += 2) {
    for (const z of zs) parts.push(new THREE.BoxGeometry(p.x1 - p.x0, 0.05, 0.05).translate((p.x0 + p.x1) / 2, y, z));
    for (const x of xs) parts.push(new THREE.BoxGeometry(0.05, 0.05, p.z1 - p.z0).translate(x, y, (p.z0 + p.z1) / 2));
  }
  g.add(mergedMesh(parts, tube));
  for (let y = 2; y < p.h; y += 4) slab(g, p.x0 + 0.1, p.x1 - 0.1, y, y + 0.05, p.z0 + 0.15, p.z1 - 0.15, solid('#8a6a42', 0.9), false);
  // Green netting on the street side, a little see-through.
  const net = new THREE.MeshStandardMaterial({ color: '#2f6a4a', transparent: true, opacity: 0.55, side: THREE.DoubleSide, roughness: 1, depthWrite: false });
  quad(g, p.x1 - p.x0, p.h - 2, net, (p.x0 + p.x1) / 2, (p.h + 2) / 2, p.z1 - 0.02, 0);
  quad(g, p.z1 - p.z0, p.h - 2, net, p.x1 - 0.02, (p.h + 2) / 2, (p.z0 + p.z1) / 2, Math.PI / 2);
  g.add(box(0.2, 0.2, 0.2, blinker(ctx.kit, '#ff3a2a', 1.6, 0.6), p.x1 - 0.1, p.h + 0.1, p.z1 - 0.1, false));
}

function crane(ctx: Ctx, p: Prop) {
  const g = ctx.group;
  const yellow = solid('#e0b02a', 0.5, 0.4);
  const parts: THREE.BufferGeometry[] = [];
  const cx = (p.x0 + p.x1) / 2, cz = (p.z0 + p.z1) / 2;
  const half = (p.x1 - p.x0) / 2 - 0.08;
  slab(g, p.x0, p.x1, 0, 0.5, p.z0, p.z1, concrete());
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) parts.push(new THREE.BoxGeometry(0.14, p.h - 0.5, 0.14).translate(cx + sx * half, 0.5 + (p.h - 0.5) / 2, cz + sz * half));
  // Zig-zag braces on every side of the mast.
  for (let y = 0.5; y < p.h - 1; y += 2) {
    for (const s of [-1, 1]) {
      const a = new THREE.Vector3(cx - half, y, cz + s * half), b = new THREE.Vector3(cx + half, y + 2, cz + s * half);
      const c = new THREE.Vector3(cx + s * half, y, cz - half), e = new THREE.Vector3(cx + s * half, y + 2, cz + half);
      for (const [from, to] of [[a, b], [c, e]]) {
        const brace = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, from.distanceTo(to)));
        brace.position.copy(from).add(to).multiplyScalar(0.5);
        brace.lookAt(to);
        brace.updateMatrix();
        parts.push(brace.geometry.applyMatrix4(brace.matrix));
      }
    }
  }
  // Jib to the west over the site, counter-jib with weights to the east.
  const top = p.h;
  parts.push(new THREE.BoxGeometry(26, 0.12, 0.12).translate(cx - 13, top + 0.1, cz - 0.5), new THREE.BoxGeometry(26, 0.12, 0.12).translate(cx - 13, top + 0.1, cz + 0.5));
  parts.push(new THREE.BoxGeometry(24, 0.1, 0.1).translate(cx - 12, top + 1.2, cz));
  for (let x = 0; x < 26; x += 2) {
    const brace = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.3, 0.05));
    brace.position.set(cx - x - 1, top + 0.65, cz);
    brace.rotation.z = 0.7 * (x % 4 ? 1 : -1);
    brace.updateMatrix();
    parts.push(brace.geometry.applyMatrix4(brace.matrix));
  }
  parts.push(new THREE.BoxGeometry(9, 0.25, 1.2).translate(cx + 4.5, top + 0.1, cz));
  parts.push(new THREE.BoxGeometry(0.2, 4, 0.2).translate(cx, top + 2, cz));
  g.add(mergedMesh(parts, yellow));
  slab(g, cx + 6, cx + 8.6, top + 0.22, top + 1.8, cz - 0.6, cz + 0.6, concrete());
  slab(g, cx - 1.6, cx - 0.2, top - 2.2, top - 0.2, cz + 0.2, cz + 1.4, solid('#e0b02a', 0.5, 0.4));
  slab(g, cx - 1.5, cx - 0.3, top - 1.6, top - 0.6, cz + 1.41, cz + 1.42, ctx.kit.cool);
  wire(ctx, new THREE.Vector3(cx, top + 4, cz), new THREE.Vector3(cx - 22, top + 1.2, cz), 0.1);
  wire(ctx, new THREE.Vector3(cx, top + 4, cz), new THREE.Vector3(cx + 8, top + 0.3, cz), 0.05);
  wire(ctx, new THREE.Vector3(cx - 14, top, cz), new THREE.Vector3(cx - 14, 9, cz), 0);
  slab(g, cx - 14.3, cx - 13.7, 8.4, 9, cz - 0.3, cz + 0.3, solid('#e0b02a', 0.5, 0.4));
  // Red aircraft lights at the top and the tip of the jib.
  const red = blinker(ctx.kit, '#ff2a1a', 1.8, 0.7, 0, 3);
  g.add(box(0.3, 0.3, 0.3, red, cx, top + 4.2, cz, false));
  g.add(box(0.26, 0.26, 0.26, red, cx - 26, top + 0.4, cz, false));
}

function foodTruck(ctx: Ctx, p: Prop) {
  const g = ctx.group;
  const kit = ctx.kit;
  const body = solid('#e8dcc0', 0.5, 0.2);
  const cz = (p.z0 + p.z1) / 2;
  // Box body behind, cab at the east end.
  slab(g, p.x0 + 0.05, p.x1 - 1.4, 0.45, p.h - 0.05, p.z0 + 0.05, p.z1 - 0.05, body);
  slab(g, p.x1 - 1.4, p.x1 - 0.05, 0.45, 1.9, p.z0 + 0.1, p.z1 - 0.1, solid('#c0342b', 0.5, 0.3));
  slab(g, p.x1 - 0.5, p.x1 - 0.04, 1.3, 1.8, p.z0 + 0.2, p.z1 - 0.2, carGlassMat());
  for (const x of [p.x0 + 0.8, p.x1 - 0.8]) for (const z of [p.z0 + 0.12, p.z1 - 0.12]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.22, 14), solid('#151515', 0.8));
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(x, 0.4, z);
    g.add(wheel);
  }
  // The serving hatch on the north side, lit, its flap propped up.
  const north = faceOf(p, 'north');
  const t = (p.x0 + p.x1 - 1.4) / 2;
  facePlane(g, north, t, 1.75, 0.01, 2.2, 1.0, kit.amber);
  faceBox(g, north, t, 2.3, 1.2, 1.25, -0.02, 0.0, solid('#c9c4b8', 0.4, 0.5));
  const flap = faceBox(g, north, t, 2.4, 2.4, 2.45, 0, 0.9, solid('#c0342b', 0.5, 0.3));
  flap.rotation.x = 0.35;
  sign(ctx, 'EMPANADAS · CHORIPÁN', '#1d1d1f', '#ffd36a', 2.3, 0.32, onFace(north, t, 2.62, 0.02), north.ry);
  bulbString(ctx, new THREE.Vector3(p.x0 + 0.1, p.h - 0.05, p.z0 - 0.02), new THREE.Vector3(p.x1 - 1.5, p.h - 0.05, p.z0 - 0.02), 0.08, 9, ['#ffd27a', '#ff8a5a']);
  slab(g, p.x0 + 0.4, p.x0 + 1.2, p.h - 0.05, p.h + 0.4, cz - 0.3, cz + 0.3, iron());
}

// Smoke from the grill: a few soft sprites rising and fading (they move, so
// they stay out of the static batch).
let puff: THREE.Texture | null = null;
function smoke(ctx: Ctx, x: number, y: number, z: number) {
  puff ??= canvas(64, 64, c => {
    const gradient = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(210,210,210,.7)'); gradient.addColorStop(1, 'rgba(210,210,210,0)');
    c.fillStyle = gradient; c.fillRect(0, 0, 64, 64);
  });
  for (let i = 0; i < 5; i++) {
    const material = new THREE.SpriteMaterial({ map: puff, transparent: true, depthWrite: false, opacity: 0.3 });
    const sprite = new THREE.Sprite(material);
    ctx.group.add(sprite);
    ctx.keep.push(sprite);
    ctx.kit.animate.push(time => {
      const t = (time * 0.25 + i / 5) % 1;
      sprite.position.set(x + Math.sin(time * 0.7 + i) * 0.2 * t, y + t * 2.6, z + t * 0.4);
      sprite.scale.setScalar(0.6 + t * 1.4);
      material.opacity = 0.35 * (1 - t);
    });
  }
}

// ---------------------------------------------------------------- placements

// Things that belong to an encounter: the newspaper kiosk, the houseboat, the
// car with its hazard lights on, a poster, a lit window.
function newsKiosk(ctx: Ctx, r: Rect) {
  const g = ctx.group;
  const green = solid('#2f5a46', 0.6, 0.3);
  slab(g, r.x0 + 0.1, r.x1 - 0.1, 0, 2.3, r.z0 + 0.1, r.z1 - 0.1, green);
  slab(g, r.x0, r.x1, 2.3, 2.45, r.z0, r.z1, solid('#1f3a2e', 0.6, 0.3));
  const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.hypot(r.x1 - r.x0, r.z1 - r.z0) / 2, 0.15, 4), solid('#1f3a2e', 0.6, 0.3));
  roof.position.set((r.x0 + r.x1) / 2, 2.52, (r.z0 + r.z1) / 2);
  roof.rotation.y = Math.PI / 4;
  roof.scale.set(1, 1, (r.z1 - r.z0) / (r.x1 - r.x0));
  g.add(roof);
  const covers = canvas(512, 256, c => {
    const rand = random(r.x0 * 7);
    c.fillStyle = '#1f3a2e'; c.fillRect(0, 0, 512, 256);
    for (let row = 0; row < 3; row++) for (let i = 0; i < 9; i++) {
      c.fillStyle = ['#f4f1ea', '#d24a3a', '#f2c230', '#3a7bd2', '#e0457a'][Math.floor(rand() * 5)];
      c.fillRect(8 + i * 56, 10 + row * 82, 48, 70);
      c.fillStyle = 'rgba(0,0,0,.55)'; c.fillRect(12 + i * 56, 16 + row * 82, 40, 8); c.fillRect(12 + i * 56, 50 + row * 82, 28, 14);
    }
  });
  const mat = new THREE.MeshStandardMaterial({ map: covers, emissiveMap: covers, emissive: '#ffffff', emissiveIntensity: 0.2 });
  ctx.kit.night.windows.push(mat);
  for (const side of ['south', 'east', 'west'] as Side[]) {
    const f = faceOf({ x0: r.x0 + 0.1, x1: r.x1 - 0.1, z0: r.z0 + 0.1, z1: r.z1 - 0.1 }, side);
    facePlane(g, f, (f.lo + f.hi) / 2, 1.35, 0.01, f.hi - f.lo - 0.2, 1.5, mat);
  }
  sign(ctx, 'DIARIOS · REVISTAS', '#1f3a2e', '#f2e6cc', r.x1 - r.x0 - 0.1, 0.3, new THREE.Vector3((r.x0 + r.x1) / 2, 2.15, r.z1 - 0.08), 0);
  g.add(box(0.5, 0.06, 0.5, ctx.kit.lamp('#ffe2b0'), (r.x0 + r.x1) / 2, 2.27, r.z1 - 0.1, false));
}

function houseboat(ctx: Ctx, r: Rect) {
  const g = ctx.group;
  const hull = solid('#2f4a5a', 0.6, 0.2);
  const deck = 0.9;
  slab(g, r.x0 + 0.1, r.x1 - 0.1, -0.9, deck - 0.12, r.z0 + 0.1, r.z1 - 0.1, hull);
  slab(g, r.x0 + 0.05, r.x1 - 0.05, -0.5, -0.3, r.z0 + 0.05, r.z1 - 0.05, solid('#c9452c', 0.6));
  texturedSlab(g, r.x0 + 0.1, r.x1 - 0.1, deck - 0.12, deck, r.z0 + 0.1, r.z1 - 0.1, new THREE.MeshStandardMaterial({ map: tiles('#8a6a48', 'rgba(30,20,10,.5)', 128, 8), roughness: 0.8 }), 2);
  // The cabin on the east half, warm light in its windows.
  const c = { x0: r.x0 + 3.1, x1: r.x1 - 0.3, z0: r.z0 + 0.6, z1: r.z1 - 0.6 };
  const windows = canvas(256, 64, ctx2 => {
    ctx2.fillStyle = '#e8dcc0'; ctx2.fillRect(0, 0, 256, 64);
    for (let i = 0; i < 4; i++) { ctx2.fillStyle = '#3a2a1e'; ctx2.fillRect(14 + i * 62, 14, 40, 30); }
  }, true);
  const lit = canvas(256, 64, ctx2 => {
    ctx2.fillStyle = '#000'; ctx2.fillRect(0, 0, 256, 64);
    for (let i = 0; i < 4; i++) { ctx2.fillStyle = i === 2 ? '#7a4a20' : '#ffc27a'; ctx2.fillRect(16 + i * 62, 16, 36, 26); }
  }, true);
  const cabin = new THREE.MeshStandardMaterial({ map: windows, emissiveMap: lit, emissive: '#ffffff', emissiveIntensity: 0.2, roughness: 0.8 });
  ctx.kit.night.windows.push(cabin);
  texturedSlab(g, c.x0, c.x1, deck, deck + 2.1, c.z0, c.z1, cabin, 2.1);
  slab(g, c.x0 - 0.2, c.x1 + 0.2, deck + 2.1, deck + 2.22, c.z0 - 0.2, c.z1 + 0.2, solid('#3a4a3e', 0.7));
  facePlane(g, faceOf(c, 'west'), (c.z0 + c.z1) / 2, deck + 1.0, 0.02, 0.9, 1.9, ctx.kit.warm);
  slab(g, c.x1 - 0.8, c.x1 - 0.6, deck + 2.22, deck + 3.0, c.z0 + 0.6, c.z0 + 0.8, iron());
  // Plants in pots on the roof and on the deck: the boat of the plants.
  const rand = random(88);
  for (let i = 0; i < 9; i++) {
    const x = c.x0 + 0.4 + rand() * (c.x1 - c.x0 - 0.8), z = c.z0 + 0.3 + rand() * (c.z1 - c.z0 - 0.6);
    g.add(cylinder(0.18, 0.14, 0.3, solid('#9a5a3a', 0.9), x, deck + 2.37, z, 8));
    const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28 + rand() * 0.2, 0), solid(rand() > 0.5 ? '#3f6a36' : '#5a8a3e', 0.95));
    leaves.position.set(x, deck + 2.7, z);
    g.add(leaves);
  }
  for (const z of [r.z0 + 0.4, r.z1 - 0.4]) {
    g.add(cylinder(0.2, 0.16, 0.36, solid('#9a5a3a', 0.9), r.x0 + 0.5, deck + 0.18, z, 8));
    const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(0.35, 0), solid('#3f6a36', 0.95));
    leaves.position.set(r.x0 + 0.5, deck + 0.6, z);
    g.add(leaves);
  }
  // A low rail around the open deck, a gangplank to the bank, lights.
  railPlane(g, c.x0 - r.x0 - 0.2, 0.7, ctx.kit.rails.white, new THREE.Vector3((r.x0 + c.x0) / 2, deck + 0.35, r.z0 + 0.12), 0);
  railPlane(g, c.x0 - r.x0 - 0.2, 0.7, ctx.kit.rails.white, new THREE.Vector3((r.x0 + c.x0) / 2, deck + 0.35, r.z1 - 0.12), 0);
  beam(g, new THREE.Vector3(CANAL.x0 - 0.2, 0.12, (r.z0 + r.z1) / 2 - 2.2), new THREE.Vector3(r.x0 + 0.5, deck, (r.z0 + r.z1) / 2 - 2.2), 0.8, 0.06, darkWood());
  for (const z of [r.z0 + 0.2, r.z1 - 0.2]) g.add(cylinder(0.04, 0.04, 1.4, iron(), r.x0 + 0.25, deck + 0.7, z, 6));
  bulbString(ctx, new THREE.Vector3(r.x0 + 0.25, deck + 1.4, r.z0 + 0.2), new THREE.Vector3(c.x0, deck + 2.15, (c.z0 + c.z1) / 2), 0.2, 8, ['#ffd27a', '#ffb070']);
  bulbString(ctx, new THREE.Vector3(r.x0 + 0.25, deck + 1.4, r.z1 - 0.2), new THREE.Vector3(c.x0, deck + 2.15, (c.z0 + c.z1) / 2), 0.2, 8, ['#ffd27a', '#ffb070']);
  // Its light on the water.
  reflection(ctx, r.x0 - 0.6, (r.z0 + r.z1) / 2, '#ffb070', 0, 3);
}

// A long shimmering streak of a light on the water.
function reflection(ctx: Ctx, x: number, z: number, color: string, ry: number, length = 4) {
  const material = new THREE.MeshBasicMaterial({ map: accentPool ??= whitePool(), color, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  const streak = new THREE.Mesh(new THREE.PlaneGeometry(0.7, length), material);
  streak.rotation.set(-Math.PI / 2, 0, ry);
  streak.position.set(x, -0.58, z);
  ctx.group.add(streak);
  const seed = x * 0.37 + z * 0.11;
  ctx.kit.animate.push((time, _dt, level) => {
    material.opacity = level * (0.32 + 0.14 * Math.sin(time * 1.7 + seed) + 0.08 * Math.sin(time * 4.3 + seed * 2));
  });
}

function hazardCar(ctx: Ctx, car: { x: number; z: number; heading: number }) {
  const group = parkedCar(ctx, 'sedan', '#6e7a86', car.x, car.z, car.heading);
  const hazard = blinker(ctx.kit, '#ff9a2a', 1.0, 0.5, 0, 3);
  for (const [x, z] of [[2.16, 0.84], [2.16, -0.84], [-2.16, 0.84], [-2.16, -0.84]]) group.add(box(0.08, 0.1, 0.16, hazard, x, 0.78, z, false));
}

function poster(ctx: Ctx, at: Spot) {
  const hit = facadeOfPoint(at.x, at.z, 0.3);
  const f = hit?.f ?? faceOf({ x0: at.x - 1, x1: at.x + 1, z0: at.z - 1, z1: at.z }, 'south');
  const t = f.along === 'x' ? at.x : at.z;
  const art = canvas(256, 360, c => {
    c.fillStyle = '#f4f1e4'; c.fillRect(0, 0, 256, 360);
    c.fillStyle = '#c0342b'; c.font = '800 46px Georgia, serif'; c.textAlign = 'center'; c.fillText('SE BUSCA', 128, 56);
    // A child's drawing of the dog: big ears, a wagging tail.
    c.strokeStyle = '#3a2a1e'; c.lineWidth = 5; c.fillStyle = '#c99a5a';
    c.beginPath(); c.ellipse(128, 190, 70, 44, 0, 0, TAU); c.fill(); c.stroke();
    c.beginPath(); c.arc(70, 140, 34, 0, TAU); c.fill(); c.stroke();
    c.fillStyle = '#6a4a2a'; c.beginPath(); c.ellipse(46, 132, 14, 34, 0.5, 0, TAU); c.fill(); c.beginPath(); c.ellipse(92, 120, 14, 34, -0.5, 0, TAU); c.fill();
    c.fillStyle = '#1d1d1f'; c.beginPath(); c.arc(62, 140, 5, 0, TAU); c.fill(); c.beginPath(); c.arc(56, 154, 7, 0, TAU); c.fill();
    c.beginPath(); c.moveTo(196, 180); c.quadraticCurveTo(230, 150, 222, 120); c.stroke();
    for (const x of [86, 110, 150, 172]) { c.beginPath(); c.moveTo(x, 226); c.lineTo(x, 262); c.stroke(); }
    c.fillStyle = '#1d1d1f'; c.font = '700 40px Georgia, serif'; c.fillText('TOTO', 128, 304);
    c.font = '20px Georgia, serif'; c.fillText('orejas grandes · muy bueno', 128, 336);
  });
  const mat = new THREE.MeshStandardMaterial({ map: art, emissiveMap: art, emissive: '#ffffff', emissiveIntensity: 0.15, roughness: 0.9 });
  ctx.kit.night.windows.push(mat);
  facePlane(ctx.group, f, t, at.y, 0.04, 0.6, 0.85, mat);
  // Older posters around it, half torn.
  const old = solid('#d8cfb8', 0.95);
  for (const [dt, dy, w, h] of [[-0.9, 0.2, 0.55, 0.75], [0.85, -0.1, 0.6, 0.8], [1.6, 0.3, 0.5, 0.6]] as const) facePlane(ctx.group, f, t + dt, at.y + dy, 0.03, w, h, old);
}

function litWindow(ctx: Ctx, place: Placement) {
  const spot = typeof place.window === 'object' ? place.window : null;
  const x = spot?.x ?? place.x, z = spot?.z ?? place.z;
  const hit = facadeOfPoint(x, z, 0.4);
  if (!hit) return;
  const { f, t } = hit;
  const h = spot ? 1.6 : 2.0;
  const y = spot ? spot.y : (place.y ?? 0) + h / 2;
  const g = ctx.group;
  facePlane(g, f, t, y, 0.03, 1.2, h, ctx.kit.warm);
  for (const s of [-1, 1]) faceBox(g, f, t + s * 0.66, 0.1, y - h / 2, y + h / 2 + 0.05, 0, 0.1, solid('#e8e0d0', 0.8));
  faceBox(g, f, t, 1.5, y + h / 2, y + h / 2 + 0.12, 0, 0.14, solid('#e8e0d0', 0.8));
  faceBox(g, f, t, 1.5, y - h / 2 - 0.1, y - h / 2, 0, 0.26, solid('#d8cfbf', 0.8));
  // Shutters open wide, flat against the wall either side.
  for (const s of [-1, 1]) {
    faceBox(g, f, t + s * 1.05, 0.6, y - h / 2, y + h / 2, 0.02, 0.07, solid('#4f6a4a', 0.8));
  }
}

// ---------------------------------------------------------------- districts

function viejoExtras(ctx: Ctx) {
  const g = ctx.group;
  const kit = ctx.kit;
  // The tenement's roof: one low parapet around the U and the patio, a gap
  // in the east side for the door of the iron staircase.
  const roof = 10, top = roof + 0.9;
  const parapet = solid('#a89a84', 0.9);
  const door = STREET_ROOMS['azotea-viejo'].door;
  slab(g, -90, -64, roof, top, -84, -83.75, parapet);
  slab(g, -90, -89.75, roof, top, -83.75, -68, parapet);
  slab(g, -64.25, -64, roof, top, -83.75, door.z - 0.6, parapet);
  slab(g, -64.25, -64, roof, top, door.z + 0.6, -68, parapet);
  slab(g, -90, -84, roof, top, -68.25, -68, parapet);
  slab(g, -70, -64, roof, top, -68.25, -68, parapet);
  slab(g, -84.3, -84, roof, top, -79.3, -68, parapet);
  slab(g, -70, -69.7, roof, top, -79.3, -68, parapet);
  slab(g, -84, -70, roof, top, -79.3, -79, parapet);
  // Washing lines across the cobbled passage and over the patio.
  const clothes = ['#f4f1ea', '#c0342b', '#3a7bd2', '#e8c640', '#f4f1ea', '#7ad1a0', '#e0457a'];
  const rand = random(55);
  const line = (a: THREE.Vector3, b: THREE.Vector3) => {
    wire(ctx, a, b, 0.4);
    for (let i = 1; i < 8; i++) {
      if (rand() < 0.3) continue;
      const p = sagPoint(a, b, 0.4, i / 8 + (rand() - 0.5) * 0.05);
      const w = 0.4 + rand() * 0.5, h = 0.5 + rand() * 0.5;
      const cloth = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ color: clothes[Math.floor(rand() * clothes.length)], roughness: 1, side: THREE.DoubleSide }));
      cloth.position.set(p.x, p.y - h / 2, p.z);
      cloth.rotation.y = Math.atan2(b.x - a.x, b.z - a.z) + Math.PI / 2;
      g.add(cloth);
    }
  };
  for (const x of [-88.5, -85, -81.5, -78, -74.5]) line(new THREE.Vector3(x, 7.4, -95.02), new THREE.Vector3(x + 0.6, 6.9, -84.02));
  for (const z of [-76, -73, -70]) line(new THREE.Vector3(-83.98, 6.6, z), new THREE.Vector3(-70.02, 6.2, z + 0.4));
  // Graffiti on the west wall of the tenement.
  const mural = canvas(512, 224, c => {
    c.fillStyle = 'rgba(0,0,0,0)'; c.clearRect(0, 0, 512, 224);
    const r2 = random(808);
    for (let i = 0; i < 40; i++) { c.fillStyle = ['rgba(224,69,122,.5)', 'rgba(63,182,200,.5)', 'rgba(242,194,48,.5)'][i % 3]; c.beginPath(); c.arc(r2() * 512, r2() * 224, 6 + r2() * 30, 0, TAU); c.fill(); }
    c.save(); c.translate(256, 130); c.rotate(-0.06);
    c.font = '900 italic 96px "Arial Black", Impact, sans-serif'; c.textAlign = 'center'; c.lineJoin = 'round';
    c.lineWidth = 16; c.strokeStyle = '#141414'; c.strokeText('LA NOCHE', 0, 0);
    const grad = c.createLinearGradient(-200, 0, 200, 0); grad.addColorStop(0, '#ff5a8a'); grad.addColorStop(0.5, '#ffd36a'); grad.addColorStop(1, '#4fd8ff');
    c.fillStyle = grad; c.fillText('LA NOCHE', 0, 0);
    c.font = '700 italic 40px "Arial Black", sans-serif'; c.fillStyle = '#f4f1ea'; c.fillText('es de quien la camina', 0, 64);
    c.restore();
  });
  const muralMat = new THREE.MeshStandardMaterial({ map: mural, transparent: true, roughness: 0.95, emissive: '#ffffff', emissiveMap: mural, emissiveIntensity: 0.1 });
  kit.night.windows.push(muralMat);
  quad(g, 6.4, 2.8, muralMat, -90.03, 1.6, -75, -Math.PI / 2);
  // A bare bulb over a back door in the alley, tired and stuttering.
  quad(g, 1.0, 2.2, solid('#3a3028', 0.8), -90.98, 1.1, -104, -Math.PI / 2);
  g.add(box(0.12, 0.16, 0.12, flickerer(kit, '#ffc27a', 3, 3.4), -91.12, 2.6, -104, false));
  // Old bins and crates by the walls.
  for (const [x, z] of [[-93.6, -100], [-92.4, -114.5], [-96.3, -66]] as const) g.add(cylinder(0.28, 0.25, 0.75, solid('#4a5048', 0.6, 0.4), x, 0.375, z, 10));
}

function altoExtras(ctx: Ctx) {
  const g = ctx.group;
  // Bollards with brass caps along the stone walk.
  for (let x = 6; x <= 36; x += 3) {
    ctx.kit.inst.add('bollard', () => new THREE.CylinderGeometry(0.11, 0.13, 0.9, 10), solid('#2a2a2c', 0.5, 0.5), m4(x, 0.45, -66.4));
    ctx.kit.inst.add('bollard-cap', () => new THREE.SphereGeometry(0.12, 8, 6), brass(), m4(x, 0.92, -66.4));
  }
  // Hedges in boxes along the hotel front.
  for (const x of [-40, -35, -19, -14]) {
    slab(g, x - 1, x + 1, 0, 0.5, -56.6, -55.8, paleStone());
    slab(g, x - 0.9, x + 0.9, 0.5, 0.95, -56.5, -55.9, solid('#2f5a34', 0.9));
  }
}

function clinicaExtras(ctx: Ctx) {
  const g = ctx.group;
  const white = solid('#e9e6de', 0.7);
  for (const z of [-94.4, -91.4]) {
    const line = new THREE.Mesh(new THREE.PlaneGeometry(30, 0.12), white);
    line.rotation.x = -Math.PI / 2;
    line.position.set(82, 0.03, z);
    g.add(line);
  }
  for (let x = 68; x <= 96; x += 5) {
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 3), white);
    line.rotation.x = -Math.PI / 2;
    line.position.set(x, 0.03, -92.9);
    g.add(line);
  }
  // Bollards round the ambulance bay.
  for (let z = -71.5; z <= -62.5; z += 1.5) ctx.kit.inst.add('bollard', () => new THREE.CylinderGeometry(0.11, 0.13, 0.9, 10), solid('#2a2a2c', 0.5, 0.5), m4(107.4, 0.45, z));
}

function mercadoExtras(ctx: Ctx) {
  const g = ctx.group;
  const colors = ['#ffcf7a', '#ff7a5a', '#7ad1ff', '#b5ff7a', '#ff9ad1', '#ffe9a0'];
  // Light strings over the market lane, from the market's wall to poles.
  const pole = solid('#2b3230', 0.6, 0.4);
  for (let x = -120; x <= -64; x += 8) {
    if (x > -82 && x < -76) continue;
    const anchorZ = x > -82 ? -22.05 : -20.05;
    const px = x + 4;
    g.add(cylinder(0.06, 0.08, 5.2, pole, px, 2.6, -7.1, 8));
    bulbString(ctx, new THREE.Vector3(x, 5.2, anchorZ), new THREE.Vector3(px, 5.0, -7.1), 0.7, 12, colors);
    if (x + 8 <= -64) bulbString(ctx, new THREE.Vector3(px, 5.0, -7.1), new THREE.Vector3(x + 8, 5.2, x + 8 > -82 ? -22.05 : -20.05), 0.7, 12, colors);
  }
  // The food court: poles round the edge and strings between them.
  const west = -93.6, east = -64.4;
  const zs = [9, 17, 25, 33, 41];
  for (const z of zs) for (const x of [west, east]) g.add(cylinder(0.06, 0.08, 4.8, pole, x, 2.4, z, 8));
  for (const z of zs) bulbString(ctx, new THREE.Vector3(west, 4.7, z), new THREE.Vector3(east, 4.7, z), 1.1, 26, ['#ffd27a', '#ffb070', '#ffe9a0']);
  bulbString(ctx, new THREE.Vector3(west, 4.7, 9), new THREE.Vector3(east, 4.7, 41), 1.6, 30, colors);
  bulbString(ctx, new THREE.Vector3(east, 4.7, 9), new THREE.Vector3(west, 4.7, 41), 1.6, 30, colors);
  // Stools where the seated groups sit.
  for (const group of GROUPS) {
    if (!group.seated) continue;
    for (const member of groupMembers(group)) {
      g.add(cylinder(0.2, 0.2, 0.05, solid('#8a4a2a', 0.7), member.x, 0.45, member.z, 10));
      g.add(cylinder(0.04, 0.05, 0.43, iron(), member.x, 0.215, member.z, 6));
    }
  }
}

function costaExtras(ctx: Ctx) {
  const g = ctx.group;
  const kit = ctx.kit;
  // The canal: stone walls down to the water, a coping stone at street level.
  const wall = kit.concreteTex;
  const { x0, x1, z0, z1 } = CANAL;
  texturedSlab(g, x0, x0 + 0.5, -1.6, 0, z0, z1, wall, 2);
  texturedSlab(g, x1 - 0.5, x1, -1.6, 0, z0, z1, wall, 2);
  texturedSlab(g, x0, x1, -1.6, 0, z0, z0 + 0.5, wall, 2);
  texturedSlab(g, x0, x1, -1.6, 0, z1 - 0.5, z1, wall, 2);
  const coping = solid('#a8a092', 0.85);
  for (const x of [x0 - 0.4, x1]) {
    slab(g, x, x + 0.4, 0, 0.12, z0 - 0.4, z1 + 0.4, coping, false);
  }
  slab(g, x0, x1, 0, 0.12, z0 - 0.4, z0, coping, false);
  slab(g, x0, x1, 0, 0.12, z1, z1 + 0.4, coping, false);
  // Water everywhere in the channel, under the bridges too.
  const water = { x0: x0 + 0.5, x1: x1 - 0.5, z0: z0 + 0.5, z1: z1 - 0.5 };
  for (const piece of canalWater()) floor(g, { ...piece, x0: water.x0, x1: water.x1, z0: Math.max(piece.z0, water.z0), z1: Math.min(piece.z1, water.z1) }, -0.6, kit.water, 6);
  for (const bridge of CANAL.bridges) floor(g, { ...water, z0: bridge.z0, z1: bridge.z1 }, -0.6, kit.water, 6);
  // Bollards along the edge, where there is no bridge.
  for (const piece of canalWater()) for (let z = piece.z0 + 1.5; z < piece.z1 - 1; z += 3) for (const x of [x0 - 0.2, x1 + 0.2]) {
    kit.inst.add('bollard', () => new THREE.CylinderGeometry(0.11, 0.13, 0.9, 10), solid('#2a2a2c', 0.5, 0.5), m4(x, 0.12 + 0.3, z, 0, 1, 0.66, 1));
  }
  // Bridges: the avenue on a stone deck with balustrades, two footbridges.
  for (const bridge of CANAL.bridges) {
    const road = bridge.z1 - bridge.z0 > 8;
    if (road) {
      slab(g, x0, x1, -0.55, 0, bridge.z0, bridge.z1, solid('#8e8473', 0.9));
      for (const z of [bridge.z0 + 0.2, bridge.z1 - 0.2]) {
        slab(g, x0 - 0.4, x1 + 0.4, 0, 0.95, z - 0.2, z + 0.2, paleStone());
        slab(g, x0 - 0.5, x1 + 0.5, 0.95, 1.08, z - 0.26, z + 0.26, solid('#b5ab98', 0.9));
      }
      for (const z of [bridge.z0, bridge.z1]) slab(g, x0 + 0.5, x1 - 0.5, -0.6, -0.55, z - 0.1, z + 0.1, solid('#6e665a', 0.9), false);
    } else {
      texturedSlab(g, x0 - 0.4, x1 + 0.4, -0.25, 0.08, bridge.z0, bridge.z1, new THREE.MeshStandardMaterial({ map: tiles('#6b4a33', 'rgba(20,10,5,.55)', 128, 8), roughness: 0.85 }), 2);
      for (const z of [bridge.z0 + 0.08, bridge.z1 - 0.08]) {
        railPlane(g, x1 - x0 + 0.8, 1.0, kit.rails.iron, new THREE.Vector3((x0 + x1) / 2, 0.58, z), 0);
        slab(g, x0 - 0.4, x1 + 0.4, 1.06, 1.12, z - 0.05, z + 0.05, darkWood(), false);
        for (let x = x0 - 0.35; x <= x1 + 0.4; x += 3.2) slab(g, x - 0.04, x + 0.04, 0.08, 1.06, z - 0.04, z + 0.04, iron(), false);
      }
    }
  }
  // Lamps along the riverside walk, and their light on the water.
  for (let z = -40; z <= 41; z += 12) {
    if (CANAL.bridges.some(b => z > b.z0 - 2 && z < b.z1 + 2)) continue;
    parkLamp(kit, 95.2, z, ctx.zone.lamp, 4.4);
    reflection(ctx, 98.6, z, '#ffe2b8', Math.PI / 2, 4.5);
  }
  for (let z = -36; z <= 40; z += 15) {
    if (CANAL.bridges.some(b => z > b.z0 - 2 && z < b.z1 + 2)) continue;
    parkLamp(kit, 108.8, z, ctx.zone.lamp, 4.4);
    reflection(ctx, 105.6, z, '#d6e4ff', Math.PI / 2, 4);
  }
}

function estacionExtras(ctx: Ctx) {
  const g = ctx.group;
  const kit = ctx.kit;
  // Platform canopy along the station's south side.
  const canopy = { x0: -117.5, x1: -74, z0: 100, z1: 103.1 };
  slab(g, canopy.x0, canopy.x1, 4.2, 4.42, canopy.z0, canopy.z1, solid('#5a6a6a', 0.6, 0.4), true);
  for (let x = canopy.x0 + 2; x < canopy.x1; x += 8) {
    g.add(cylinder(0.1, 0.12, 4.2, solid('#3e5a5a', 0.5, 0.5), x, 2.1, 102.6, 10));
  }
  for (let x = canopy.x0 + 3; x < canopy.x1 - 1; x += 4) slab(g, x - 0.7, x + 0.7, 4.14, 4.2, 101.4, 101.6, kit.lamp('#f2f8ff'));
  const edge = new THREE.Mesh(new THREE.PlaneGeometry(60, 0.3), solid('#e8c640', 0.7));
  edge.rotation.x = -Math.PI / 2;
  edge.position.set(-92, 0.025, 103.1);
  g.add(edge);
  // The departures board: last train, a delay nobody explains.
  const board = canvas(512, 128, c => {
    c.fillStyle = '#0b0b0c'; c.fillRect(0, 0, 512, 128);
    c.fillStyle = '#ffb02a'; c.font = '700 30px "Courier New", monospace';
    c.fillText('00:15  ÚLTIMO TREN  VÍA 2', 16, 48);
    c.fillText('00:40  RETRASADO ......', 16, 96);
  });
  const boardMat = new THREE.MeshStandardMaterial({ map: board, emissiveMap: board, emissive: '#ffffff', emissiveIntensity: 0.6 });
  kit.night.signs.push(boardMat);
  slab(g, -88.1, -87.9, 3.3, 4.2, 101.4, 101.6, iron(), false);
  slab(g, -88.15, -87.85, 2.6, 3.3, 100.4, 102.6, solid('#1d1d1f', 0.6));
  for (const s of [-1, 1]) quad(g, 2.1, 0.6, boardMat, -88 + s * 0.16, 2.95, 101.5, (s * Math.PI) / 2);
  // Gravel, rails and sleepers behind the platform fence; buffer stops.
  floor(g, { x0: -126, x1: -60, z0: 103.8, z1: 116 }, 0.013, kit.ground.gravel, 3);
  for (const z of [107.5, 112.3]) {
    for (const s of [-0.72, 0.72]) slab(g, -124, -62.6, 0.02, 0.17, z + s - 0.035, z + s + 0.035, solid('#7a7470', 0.35, 0.8), false);
    for (let x = -123.6; x < -63; x += 0.7) kit.inst.add('sleeper', () => new THREE.BoxGeometry(0.24, 0.1, 2.3), solid('#4a3a2e', 0.9), m4(x, 0.05, z));
    slab(g, -62.6, -62.3, 0, 1.0, z - 1.0, z + 1.0, kit.stripes);
  }
  // The pedestrian tunnel to the platform: roof, columns where it is open
  // to the square, tiled walls and buzzing fluorescent tubes.
  const ceiling = CEILINGS[0];
  slab(g, ceiling.x0, ceiling.x1 + 0.3, ceiling.height, ceiling.height + 0.45, ceiling.z0, ceiling.z1, concrete(), true);
  quad(g, ceiling.x1 - ceiling.x0, ceiling.z1 - ceiling.z0, solid('#4a4844', 0.9), (ceiling.x0 + ceiling.x1) / 2, ceiling.height - 0.01, (ceiling.z0 + ceiling.z1) / 2).rotation.set(Math.PI / 2, 0, 0);
  for (let z = ceiling.z0 + 0.3; z < 82; z += 5) slab(g, ceiling.x1 - 0.1, ceiling.x1 + 0.25, 0, ceiling.height, z - 0.18, z + 0.18, concrete());
  const tile = quad(g, 100 - 82, ceiling.height, kit.tunnelTile, ceiling.x1 + 0.02, ceiling.height / 2, 91, -Math.PI / 2);
  const uv = tile.geometry.getAttribute('uv') as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) * 18) / 1.2, (uv.getY(i) * ceiling.height) / 1.2);
  floor(g, ceiling, 0.014, solid('#3a3c3e', 0.35, 0.1), 1);
  const steady = kit.lamp('#e8f4ff');
  const tubes = [steady, flickerer(kit, '#e8f4ff', 17, 3.2), flickerer(kit, '#e8f4ff', 29, 3.2), glow('#40464a', 0.1)];
  let i = 0;
  for (let z = ceiling.z0 + 2; z < ceiling.z1 - 1; z += 4, i++) {
    const material = i === 5 ? tubes[3] : i % 4 === 1 ? tubes[1] : i % 4 === 3 ? tubes[2] : steady;
    slab(g, -120.2, -119.4, ceiling.height - 0.08, ceiling.height - 0.02, z - 0.06, z + 0.06, material, false);
  }
  sign(ctx, 'PASO A ANDENES', '#1d2a3a', '#f8e2b0', 3.6, 0.5, new THREE.Vector3((ceiling.x0 + ceiling.x1) / 2, ceiling.height + 0.22, ceiling.z0 - 0.01), Math.PI);
  // The taxi rank sign.
  g.add(cylinder(0.05, 0.05, 2.8, iron(), -64.8, 1.4, 58.6, 8));
  for (const s of [-1, 1]) sign(ctx, 'TAXIS', '#f2c230', '#141517', 1.2, 0.42, new THREE.Vector3(-64.8 + s * 0.03, 2.7, 58.6), (s * Math.PI) / 2);
}

function surExtras(ctx: Ctx) {
  // Planters with flowers along the front of the balcony block.
  for (const x of [-48, -43, -37, -32]) {
    slab(ctx.group, x - 0.9, x + 0.9, 0, 0.5, 56.2, 56.8, solid('#9a8a74', 0.9));
    for (let i = 0; i < 4; i++) ctx.group.add(box(0.14, 0.14, 0.14, solid(['#e0457a', '#f2c230', '#f4f1ea'][i % 3], 0.8), x - 0.6 + i * 0.4, 0.58, 56.5, false));
  }
}

function galponesExtras(ctx: Ctx) {
  const g = ctx.group;
  // A floodlight mast over the yard: cold light, long shadows.
  g.add(cylinder(0.12, 0.18, 11, solid('#7d8a8e', 0.5, 0.6), 124.6, 5.5, 112, 10));
  slab(g, 123.4, 125.8, 11, 11.1, 111.8, 112.2, iron());
  for (const x of [123.8, 125.2]) slab(g, x - 0.3, x + 0.3, 10.6, 11, 111.7, 111.9, ctx.kit.lamp('#e8eeff'));
  accentGlow(ctx, 120, 108, 9, '#a8b8e8', 0);
  // Pallets and drums by the warehouse.
  for (const [x, z] of [[104.5, 85.5], [105.6, 86.4]] as const) slab(g, x - 0.6, x + 0.6, 0, 0.15, z - 0.4, z + 0.4, solid('#8a6a42', 0.9));
  for (const [x, z] of [[101.4, 86], [101.4, 86.8]] as const) g.add(cylinder(0.3, 0.3, 0.9, solid('#2f5a8a', 0.5, 0.4), x, 0.45, z, 12));
}

// ---------------------------------------------------------------- streets

// Lamps with a lantern on a post (parks, the riverside), instanced.
function parkLamp(kit: Kit, x: number, z: number, color: string, height = 3.6) {
  kit.inst.add('pole', () => new THREE.CylinderGeometry(0.07, 0.1, 1, 8), solid('#2b3230', 0.6, 0.4), m4(x, height / 2, z, 0, 1, height, 1));
  kit.inst.add('lantern', () => new THREE.BoxGeometry(0.3, 0.42, 0.3), kit.headMat, m4(x, height + 0.2, z), color);
  kit.inst.add('pool', () => new THREE.CircleGeometry(1, 24), kit.pool, m4(x, 0.05, z, 0, 2.8, 2.8, 2.8, -Math.PI / 2), color);
}

function streets(shared: THREE.Group, kit: Kit, asphalt: THREE.Material, ctxAt: (x: number, z: number) => Ctx) {
  // Asphalt of the four new streets (the avenue and the cross street are in buildCity).
  for (const road of STREETS) if (road.id !== 'avenida' && road.id !== 'transversal') floor(shared, road, 0.02, asphalt, 8);
  // Kerbs, cut where another street crosses; the centre's own are in buildCity.
  const curb = solid('#9d978e', 0.9);
  for (const road of STREETS) {
    const ax = road.axis === 'x';
    const cuts = STREETS.filter(o => o.axis !== road.axis).map(o => (ax ? [o.x0, o.x1] : [o.z0, o.z1]) as [number, number]);
    if (road.id === 'avenida') cuts.push([-53, 53]);
    if (road.id === 'transversal') cuts.push([-45, 46]);
    cuts.sort((a, b) => a[0] - b[0]);
    let from = ax ? road.x0 : road.z0;
    const end = ax ? road.x1 : road.z1;
    const pieces: [number, number][] = [];
    for (const [a, b] of cuts) { if (a > from) pieces.push([from, Math.min(a, end)]); from = Math.max(from, b); }
    if (from < end) pieces.push([from, end]);
    for (const [a, b] of pieces) {
      if (b - a < 0.3) continue;
      if (ax) for (const z of [road.z0 - 0.11, road.z1 + 0.11]) slab(shared, a, b, 0, 0.14, z - 0.11, z + 0.11, curb, false);
      else for (const x of [road.x0 - 0.11, road.x1 + 0.11]) slab(shared, x - 0.11, x + 0.11, 0, 0.14, a, b, curb, false);
    }
    // Centre dashes on the new streets.
    if (road.id === 'avenida' || road.id === 'transversal') continue;
    const mid = ax ? (road.z0 + road.z1) / 2 : (road.x0 + road.x1) / 2;
    for (let t = (ax ? road.x0 : road.z0) + 3; t < end - 2; t += 5) {
      if (STREETS.some(o => o.axis !== road.axis && t > (ax ? o.x0 : o.z0) - 2 && t < (ax ? o.x1 : o.z1) + 2)) continue;
      kit.inst.add('dash', () => new THREE.PlaneGeometry(2, 0.14), kit.paint, ax ? m4(t, 0.03, mid, 0, 1, 1, 1, -Math.PI / 2) : m4(mid, 0.03, t, Math.PI / 2, 1, 1, 1, -Math.PI / 2));
    }
  }
  // Zebra crossings on every side of every crossing (the central one exists).
  for (const c of CROSSINGS) {
    if (c.x0 < 0 && c.x1 > 0 && c.z0 < 0 && c.z1 > 0) continue;
    for (const x of [c.x0 - 1.8, c.x1 + 1.8]) {
      if (x < CITY_BOUNDS.minX + 1 || x > CITY_BOUNDS.maxX - 1 || (x > CANAL.x0 && x < CANAL.x1)) continue;
      for (let z = c.z0 + 0.5; z <= c.z1 - 0.4; z += 0.9) kit.inst.add('zebra', () => new THREE.PlaneGeometry(2.4, 0.45), kit.paint, m4(x, 0.031, z, 0, 1, 1, 1, -Math.PI / 2));
    }
    for (const z of [c.z0 - 1.8, c.z1 + 1.8]) {
      if (z < CITY_BOUNDS.minZ + 1 || z > CITY_BOUNDS.maxZ - 1) continue;
      for (let x = c.x0 + 0.5; x <= c.x1 - 0.4; x += 0.9) kit.inst.add('zebra', () => new THREE.PlaneGeometry(2.4, 0.45), kit.paint, m4(x, 0.031, z, Math.PI / 2, 1, 1, 1, -Math.PI / 2));
    }
  }
  // Street lamps on the new streets: post, arm and head instanced for the
  // whole city, the head in the colour of its district. A few lamps of the
  // Barrio Viejo stutter.
  const blocked = (x: number, z: number) => BUILDINGS.some(b => inside(b, x, z, 0.4)) || PROPS.some(p => inside(p, x, z, 0.4)) || inside(CANAL, x, z, 0.4);
  let viejo = 0;
  for (const lamp of lampPositions() as Lamp[]) {
    const hx = lamp.side ? lamp.x + lamp.arm * 1.2 : lamp.x;
    const hz = lamp.side ? lamp.z : lamp.z + lamp.arm * 1.2;
    if (blocked(lamp.x, lamp.z) || inside(CITY_BOUNDS_RECT, lamp.x, lamp.z, -0.5) === false) continue;
    const zone = zoneAt(lamp.x, lamp.z);
    kit.inst.add('pole', () => new THREE.CylinderGeometry(0.07, 0.1, 1, 8), solid('#2b3230', 0.6, 0.4), m4(lamp.x, 2.7, lamp.z, 0, 1, 5.4, 1), undefined, true);
    kit.inst.add('arm', () => new THREE.BoxGeometry(1.3, 0.07, 0.07), solid('#2b3230', 0.6, 0.4), m4((lamp.x + hx) / 2, 5.35, (lamp.z + hz) / 2, lamp.side ? 0 : Math.PI / 2));
    const classic = zone.id === 'viejo' || zone.id === 'alto' || zone.id === 'mercado' || zone.id === 'estacion';
    const stutter = zone.id === 'viejo' && viejo++ % 4 === 1;
    const ry = lamp.side ? 0 : Math.PI / 2;
    if (stutter) {
      kit.inst.add('head-flicker', () => new THREE.BoxGeometry(0.3, 0.42, 0.3), kit.flickerHead, m4(hx, 5.05, hz, ry), zone.lamp);
      kit.inst.add('pool-flicker', () => new THREE.CircleGeometry(1, 24), kit.flickerPool, m4(hx, 0.05, hz, 0, 3.6, 3.6, 3.6, -Math.PI / 2), zone.lamp);
      continue;
    }
    if (classic) kit.inst.add('lantern', () => new THREE.BoxGeometry(0.3, 0.42, 0.3), kit.headMat, m4(hx, 5.05, hz, ry), zone.lamp);
    else kit.inst.add('head', () => new THREE.BoxGeometry(0.55, 0.14, 0.3), kit.headMat, m4(hx, 5.25, hz, ry), zone.lamp);
    kit.inst.add('pool', () => new THREE.CircleGeometry(1, 24), kit.pool, m4(hx, 0.05, hz, 0, 3.6, 3.6, 3.6, -Math.PI / 2), zone.lamp);
  }
  // Lamps on the paths of the three parks.
  for (const [x, z] of [[-40, -88], [-10, -88], [-40, -114], [-10, -114], [-25, -96.5]] as const) parkLamp(kit, x + (x < -25 ? 1.2 : -1.2), z, zoneAt(x, z).lamp);
  for (const [x, z] of [[-48, 86], [-10, 86], [-48, 110], [-10, 110], [-29, 98]] as const) parkLamp(kit, x + (x < -29 ? 1.2 : x > -29 ? -1.2 : 0), z + (x === -29 ? -3 : 0), zoneAt(x, z).lamp);
  for (const [x, z] of [[110, -30], [124, -10], [110, 15], [124, 35]] as const) parkLamp(kit, x + (x < 117 ? 1.2 : -1.2), z, zoneAt(x, z).lamp);
  void ctxAt;
}

const CITY_BOUNDS_RECT: Rect = { x0: CITY_BOUNDS.minX, x1: CITY_BOUNDS.maxX, z0: CITY_BOUNDS.minZ, z1: CITY_BOUNDS.maxZ };

// Floors of the squares, parks and passages, with paths along the walks.
function grounds(ctxAt: (x: number, z: number) => Ctx) {
  for (const ground of GROUNDS as Ground[]) {
    const ctx = ctxAt((ground.x0 + ground.x1) / 2, (ground.z0 + ground.z1) / 2);
    const kit = ctx.kit;
    const material = ground.id === 'plaza-estacion' ? kit.ground.plaza : kit.ground[ground.kind];
    const tile = ground.kind === 'park' ? 4 : ground.kind === 'cobbles' ? 2.4 : ground.kind === 'market' ? 2 : 3;
    floor(ctx.group, ground, ground.kind === 'park' ? 0.012 : 0.013, material, tile);
    if (ground.kind !== 'park') continue;
    // A ring path along the walking route and a cross through the middle.
    const inset = 2;
    const r = { x0: ground.x0 + inset, x1: ground.x1 - inset, z0: ground.z0 + inset, z1: ground.z1 - inset };
    const path = kit.ground.path;
    const strips: Rect[] = [
      { x0: r.x0 - 1, x1: r.x1 + 1, z0: r.z0 - 1, z1: r.z0 + 1 }, { x0: r.x0 - 1, x1: r.x1 + 1, z0: r.z1 - 1, z1: r.z1 + 1 },
      { x0: r.x0 - 1, x1: r.x0 + 1, z0: r.z0 + 1, z1: r.z1 - 1 }, { x0: r.x1 - 1, x1: r.x1 + 1, z0: r.z0 + 1, z1: r.z1 - 1 },
    ];
    if (ground.id === 'plazoleta-tilos') strips.push({ x0: r.x0 + 1, x1: r.x1 - 1, z0: -106, z1: -104 }, { x0: -26, x1: -24, z0: r.z0 + 1, z1: r.z1 - 1 });
    if (ground.id === 'parque-sur') strips.push({ x0: r.x0 + 1, x1: r.x1 - 1, z0: 97, z1: 99 });
    if (ground.id === 'parque-rio') strips.push({ x0: r.x0 + 1, x1: r.x1 - 1, z0: -1, z1: 1 });
    for (const strip of strips) floor(ctx.group, strip, 0.015, path, 3);
    // A low stone edge round the grass.
    const edge = solid('#8d877d', 0.9);
    slab(ctx.group, ground.x0, ground.x1, 0, 0.12, ground.z0, ground.z0 + 0.15, edge, false);
    slab(ctx.group, ground.x0, ground.x1, 0, 0.12, ground.z1 - 0.15, ground.z1, edge, false);
    slab(ctx.group, ground.x0, ground.x0 + 0.15, 0, 0.12, ground.z0 + 0.15, ground.z1 - 0.15, edge, false);
    slab(ctx.group, ground.x1 - 0.15, ground.x1, 0, 0.12, ground.z0 + 0.15, ground.z1 - 0.15, edge, false);
  }
}

// Trees: trunks and crowns instanced; the limes of the square carry fairy
// lights; the two palms by the station come from build3d.ts.
function trees(kit: Kit, ctxAt: (x: number, z: number) => Ctx) {
  const greens = ['#2f4b2c', '#3a5530', '#2a4426', '#37502e'];
  TREES.forEach((tree: Tree, i: number) => {
    const rand = random(i * 13 + 7);
    if (tree.kind === 'palm') { addPalm(ctxAt(tree.x, tree.z).group, tree.x, tree.z, 7.5 + rand() * 2, i + 40); return; }
    const lime = tree.kind === 'lime';
    const trunkH = lime ? 2.6 : 3.4;
    kit.inst.add('trunk', () => new THREE.CylinderGeometry(0.14, 0.22, 1, 8), solid('#4a3a2c', 0.95), m4(tree.x, trunkH / 2, tree.z, 0, lime ? 1 : 1.25, trunkH, lime ? 1 : 1.25), undefined, true);
    const blobs = lime ? 3 : 4;
    const centres: THREE.Vector3[] = [];
    for (let b = 0; b < blobs; b++) {
      const r = lime ? 1.2 + rand() * 0.4 : 1.6 + rand() * 0.6;
      const c = new THREE.Vector3(tree.x + (rand() - 0.5) * 1.6, trunkH + 0.9 + rand() * 1.2, tree.z + (rand() - 0.5) * 1.6);
      centres.push(c);
      kit.inst.add('crown', () => new THREE.IcosahedronGeometry(1, 1), solid('#ffffff', 0.95), m4(c.x, c.y, c.z, rand() * TAU, r, r * 0.9, r), greens[Math.floor(rand() * greens.length)], true);
    }
    if (tree.lights) {
      for (let k = 0; k < 34; k++) {
        const c = centres[k % centres.length];
        const a = rand() * TAU, h = rand() * 1.6 - 0.6;
        const r = 1.35 + rand() * 0.25;
        kit.inst.add('fairy', () => new THREE.SphereGeometry(0.05, 5, 4), kit.fairy, m4(c.x + Math.cos(a) * r * Math.sqrt(1 - Math.min(0.8, (h / 1.6) ** 2)), c.y + h, c.z + Math.sin(a) * r), rand() > 0.15 ? '#ffd9a0' : '#ffffff');
      }
    }
  });
}

// What closes the city: walls with old billboards to the north and west,
// the railway behind a fence to the south, the river to the east.
function edges(kit: Kit, ctxAt: (x: number, z: number) => Ctx, shared: THREE.Group) {
  const splitsX = [-126, -53, 53, 126], splitsZ = [-123, -45, 46, 117];
  const cut = (edge: Edge) => {
    const ax = edge.x1 - edge.x0 > edge.z1 - edge.z0;
    const splits = ax ? splitsX : splitsZ;
    const out: Rect[] = [];
    for (let i = 0; i < splits.length - 1; i++) {
      const a = Math.max(splits[i], ax ? edge.x0 : edge.z0), b = Math.min(splits[i + 1], ax ? edge.x1 : edge.z1);
      if (b - a > 0.1) out.push(ax ? { x0: a, x1: b, z0: edge.z0, z1: edge.z1 } : { x0: edge.x0, x1: edge.x1, z0: a, z1: b });
    }
    return out;
  };
  let board = 0;
  for (const edge of EDGES as Edge[]) {
    for (const piece of cut(edge)) {
      const ctx = ctxAt((piece.x0 + piece.x1) / 2, (piece.z0 + piece.z1) / 2);
      const g = ctx.group;
      if (edge.kind === 'wall') {
        texturedSlab(g, piece.x0, piece.x1, 0, edge.h, piece.z0, piece.z1, kit.brickDark, 1.6);
        slab(g, piece.x0 - 0.1, piece.x1 + 0.1, edge.h, edge.h + 0.2, piece.z0 - 0.1, piece.z1 + 0.1, concrete(), false);
      } else if (edge.kind === 'rail') {
        meshFence(ctx, { id: edge.id, kind: 'fence', ...piece, h: edge.h });
        floor(g, { x0: piece.x0, x1: piece.x1, z0: piece.z1, z1: piece.z1 + 12 }, 0.013, kit.ground.gravel, 3);
        for (const z of [120.5, 125]) for (const s of [-0.72, 0.72]) slab(g, piece.x0, piece.x1, 0.02, 0.17, z + s - 0.035, z + s + 0.035, solid('#7a7470', 0.35, 0.8), false);
      } else {
        // River: a railing on a coping stone, the embankment down to the water.
        slab(g, piece.x0, piece.x0 + 0.6, 0, 0.2, piece.z0, piece.z1, solid('#a8a092', 0.85), false);
        texturedSlab(g, piece.x0, piece.x1, -1.8, 0, piece.z0, piece.z1, kit.concreteTex, 2);
        railPlane(g, piece.z1 - piece.z0, edge.h - 0.2, kit.rails.iron, new THREE.Vector3(piece.x0 + 0.3, 0.2 + (edge.h - 0.2) / 2, (piece.z0 + piece.z1) / 2), Math.PI / 2);
        slab(g, piece.x0 + 0.26, piece.x0 + 0.34, edge.h - 0.04, edge.h + 0.02, piece.z0, piece.z1, iron(), false);
      }
    }
    if (edge.kind === 'rail') for (const z of [120.5, 125]) for (let x = edge.x0 + 0.4; x < edge.x1; x += 0.7) kit.inst.add('sleeper', () => new THREE.BoxGeometry(0.24, 0.1, 2.3), solid('#4a3a2e', 0.9), m4(x, 0.05, z));
    if (edge.kind === 'river') floor(shared, { x0: edge.x1, x1: 330, z0: -260, z1: 260 }, -1.1, kit.water, 8);
    if (edge.kind !== 'wall') continue;
    // Billboards on the inside face, each with two small lamps over it.
    const north = edge.x1 - edge.x0 > edge.z1 - edge.z0;
    const spots = north ? [-112, -84, 0, 18, 40, 72, 104] : [-100, -10, 30, 78];
    for (const t of spots) {
      const ctx = north ? ctxAt(t, edge.z1 + 1) : ctxAt(edge.x1 + 1, t);
      const f = north ? faceOf(edge, 'south') : faceOf(edge, 'east');
      const y = north ? 3.9 : t === 78 ? 4.7 : 3.9;
      const plane = facePlane(ctx.group, f, t, y, 0.08, 7, 3.4, kit.billboards);
      const cell = board++ % 6;
      const uv = plane.geometry.getAttribute('uv') as THREE.BufferAttribute;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, ((cell % 2) + uv.getX(i)) / 2, (2 - Math.floor(cell / 2) + uv.getY(i)) / 3);
      faceBox(ctx.group, f, t, 7.3, y - 1.85, y + 1.85, 0, 0.06, solid('#2a2622', 0.7));
      for (const s of [-1.8, 1.8]) {
        faceBox(ctx.group, f, t + s, 0.05, y + 1.85, y + 1.9, 0, 0.7, iron());
        faceBox(ctx.group, f, t + s, 0.5, y + 1.8, y + 1.92, 0.6, 0.8, kit.lamp('#ffe2b0'));
      }
    }
  }
  // Barriers where the streets end at the edge of the city.
  const amber = blinker(kit, '#ffab2a', 1.4, 0.6, 0.3, 2.4);
  for (const barrier of BARRIERS as Barrier[]) {
    const ctx = ctxAt(barrier.x, barrier.z);
    const half = barrier.width / 2 - 0.2;
    const along = barrier.axis === 'z';
    const a = along ? new THREE.Vector3(barrier.x, 0, barrier.z - half) : new THREE.Vector3(barrier.x - half, 0, barrier.z);
    const b = along ? new THREE.Vector3(barrier.x, 0, barrier.z + half) : new THREE.Vector3(barrier.x + half, 0, barrier.z);
    for (const p of [a, b]) ctx.group.add(cylinder(0.06, 0.06, 1.1, iron(), p.x, 0.55, p.z, 8));
    const board2 = new THREE.Mesh(new THREE.BoxGeometry(along ? 0.08 : half * 2, 0.3, along ? half * 2 : 0.08), kit.stripes);
    board2.position.set(barrier.x, 0.9, barrier.z);
    ctx.group.add(board2);
    ctx.group.add(box(0.16, 0.16, 0.16, amber, barrier.x, 1.13, barrier.z, false));
  }
}

// ---------------------------------------------------------------- palette

// Plain-coloured meshes (walls of kiosks, posts, crates, clothes, cars...)
// would each need their own material. Instead every colour becomes a swatch
// in one small palette texture, read through constant UVs, so a district's
// plain colours collapse into three or four merged meshes.
const palette = {
  texture: null as THREE.CanvasTexture | null,
  ctx: null as CanvasRenderingContext2D | null,
  swatches: new Map<string, [number, number]>(),
  materials: new Map<string, THREE.MeshStandardMaterial>(),
};
const SWATCH = 4, PALETTE = 256;
function swatch(color: THREE.Color): [number, number] {
  const hex = color.getHexString();
  let uv = palette.swatches.get(hex);
  if (uv) return uv;
  if (!palette.texture) {
    const element = document.createElement('canvas');
    element.width = element.height = PALETTE;
    palette.ctx = element.getContext('2d');
    palette.texture = new THREE.CanvasTexture(element);
    palette.texture.colorSpace = THREE.SRGBColorSpace;
    palette.texture.magFilter = THREE.NearestFilter;
    palette.texture.minFilter = THREE.NearestFilter;
    palette.texture.generateMipmaps = false;
  }
  const index = palette.swatches.size;
  const cols = PALETTE / SWATCH;
  const col = index % cols, row = Math.floor(index / cols);
  if (palette.ctx) { palette.ctx.fillStyle = `#${hex}`; palette.ctx.fillRect(col * SWATCH, row * SWATCH, SWATCH, SWATCH); }
  uv = [(col * SWATCH + SWATCH / 2) / PALETTE, 1 - (row * SWATCH + SWATCH / 2) / PALETTE];
  palette.swatches.set(hex, uv);
  palette.texture.needsUpdate = true;
  return uv;
}
function paletteMaterial(finish: 'matte' | 'satin' | 'metal', side: THREE.Side) {
  const key = `${finish}|${side}`;
  let material = palette.materials.get(key);
  if (!material) {
    const [roughness, metalness] = finish === 'metal' ? [0.45, 0.6] : finish === 'satin' ? [0.45, 0.15] : [0.9, 0];
    material = new THREE.MeshStandardMaterial({ map: palette.texture, roughness, metalness, side });
    palette.materials.set(key, material);
  }
  return material;
}
function paletteize(group: THREE.Object3D) {
  group.traverse(object => {
    const mesh = object as THREE.Mesh;
    if (!mesh.isMesh || (mesh as THREE.InstancedMesh).isInstancedMesh || Array.isArray(mesh.material)) return;
    const m = mesh.material as THREE.MeshStandardMaterial;
    if (!m.isMeshStandardMaterial || m.map || m.transparent || m.alphaTest > 0 || m.emissive.getHex() !== 0 || m.vertexColors) return;
    const [u, v] = swatch(m.color);
    const geometry = mesh.geometry.clone();
    const count = geometry.getAttribute('position').count;
    const uv = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) { uv[i * 2] = u; uv[i * 2 + 1] = v; }
    geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    mesh.geometry = geometry;
    mesh.material = paletteMaterial(m.metalness >= 0.4 ? 'metal' : m.roughness < 0.6 ? 'satin' : 'matte', m.side);
  });
}

// ---------------------------------------------------------------- the city

// A handful of real lights where the night is busiest; everything else is
// emissive materials and additive pools.
const LIGHTS = [
  { x: -17, y: 4.2, z: 54.6, color: '#ff4fa3', base: 14, pulse: 2.4 },
  { x: -80, y: 4.6, z: 20, color: '#ffbf73', base: 16, pulse: 0 },
  { x: -95, y: 4.2, z: -12, color: '#ffb35c', base: 14, pulse: 0 },
  { x: -100, y: 5, z: 73, color: '#f6e6c4', base: 14, pulse: 0 },
  { x: 83, y: 3.4, z: -55.6, color: '#e4f0ff', base: 14, pulse: 0 },
  { x: 83, y: 3.4, z: 56.6, color: '#b04dff', base: 16, pulse: 3.1 },
];

const rectDistance = (r: Rect, x: number, z: number) => Math.hypot(Math.max(r.x0 - x, 0, x - r.x1), Math.max(r.z0 - z, 0, z - r.z1));

// Animated things of the walkable street rooms (built later, on demand).
const roomAnimators: Animator[] = [];

export function buildDistricts(night: Night, options: { shadows: boolean; asphalt?: THREE.MeshStandardMaterial }): Districts {
  const root = new THREE.Group();
  root.name = 'districts';
  const kit = makeKit(night, options.shadows);
  // The night level (0 at dusk, 1 at night) is read back from a lamp that
  // World3D drives like all the others.
  const reference = kit.lamp('#ffd08a');
  const shared = new THREE.Group();
  shared.name = 'districts-shared';
  root.add(shared);
  const contexts = new Map<string, Ctx>();
  for (const zone of ZONES) {
    const group = new THREE.Group();
    group.name = `sector-${zone.id}`;
    root.add(group);
    const signMat = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0.3, roughness: 0.7 });
    night.signs.push(signMat);
    contexts.set(zone.id, { zone, group, keep: [], signs: [], signMat, wires: [], kit });
  }
  const ctxAt = (x: number, z: number) => contexts.get(zoneAt(x, z).id)!;

  BUILDINGS.forEach((b, i) => cityBuilding(contexts.get(b.district) ?? ctxAt((b.x0 + b.x1) / 2, (b.z0 + b.z1) / 2), b, 40 + i));
  for (const p of PROPS) prop(ctxAt((p.x0 + p.x1) / 2, (p.z0 + p.z1) / 2), p);
  for (const car of CITY_PARKED as Parked[]) parkedCar(ctxAt(car.x, car.z), car.kind, car.color, car.x, car.z, car.heading);
  for (const place of Object.values(PLACES)) {
    if (place.room) continue;
    const ctx = ctxAt(place.x, place.z);
    if (place.kiosk) newsKiosk(ctx, place.kiosk);
    if (place.boat) houseboat(ctx, place.boat);
    if (place.car) hazardCar(ctx, place.car);
    if (place.poster) poster(ctx, place.poster);
    if (place.window) litWindow(ctx, place);
  }
  grounds(ctxAt);
  streets(shared, kit, options.asphalt ?? new THREE.MeshStandardMaterial({ color: '#2a2d31', roughness: 0.9 }), ctxAt);
  trees(kit, ctxAt);
  edges(kit, ctxAt, shared);
  viejoExtras(contexts.get('viejo')!);
  altoExtras(contexts.get('alto')!);
  clinicaExtras(contexts.get('clinica')!);
  mercadoExtras(contexts.get('mercado')!);
  costaExtras(contexts.get('costa')!);
  estacionExtras(contexts.get('estacion')!);
  surExtras(contexts.get('sur')!);
  galponesExtras(contexts.get('galpones')!);

  // Close each district: one sign texture, one set of wires, then merge every
  // static mesh per material. Only big things cast shadows.
  const wireMat = new THREE.LineBasicMaterial({ color: '#1b1916' });
  const size = new THREE.Vector3();
  for (const ctx of contexts.values()) {
    finishSigns(ctx);
    if (ctx.wires.length) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(ctx.wires, 3));
      ctx.group.add(new THREE.LineSegments(geometry, wireMat));
    }
    ctx.group.traverse(object => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.geometry.computeBoundingBox();
      mesh.geometry.boundingBox!.getSize(size).multiply(mesh.getWorldScale(new THREE.Vector3()));
      mesh.castShadow = options.shadows && mesh.castShadow && Math.max(size.x, size.y, size.z) > 2.5;
    });
    paletteize(ctx.group);
    batchStatic(ctx.group, ctx.keep);
  }
  batchStatic(shared, []);
  kit.inst.build(shared, options.shadows);

  const lights = LIGHTS.map(spot => {
    const light = new THREE.PointLight(spot.color, 0, 20, 2);
    light.position.set(spot.x, spot.y, spot.z);
    root.add(light);
    return { light, spot };
  });

  const sectors: Sector[] = ZONES.map(zone => ({ id: zone.id, group: contexts.get(zone.id)!.group, x0: zone.x0, x1: zone.x1, z0: zone.z0, z1: zone.z1 }));
  const touching = (a: Rect, b: Rect) => a.x0 <= b.x1 + 0.5 && b.x0 <= a.x1 + 0.5 && a.z0 <= b.z1 + 0.5 && b.z0 <= a.z1 + 0.5;
  const neighbours = new Map(sectors.map(s => [s.id, new Set(sectors.filter(o => touching(s, o)).map(o => o.id))]));

  return {
    root,
    sectors,
    update(dt, time, player) {
      const level = clamp01((reference.emissiveIntensity - 0.4) / 3.2);
      // Far from the city (in a room at its own origin): nothing to show.
      const away = rectDistance(CITY_BOUNDS_RECT, player.x, player.z) > 40;
      const here = neighbours.get(zoneAt(player.x, player.z).id)!;
      for (const sector of sectors) sector.group.visible = !away && (here.has(sector.id) || rectDistance(sector, player.x, player.z) < STREAM_RANGE);
      for (const animate of kit.animate) animate(time, dt, level);
      for (const animate of roomAnimators) animate(time, dt, level);
      for (const { light, spot } of lights) {
        const far = away || Math.hypot(spot.x - player.x, spot.z - player.z) > 80;
        light.intensity = far ? 0 : (1 + spot.base * level) * (spot.pulse ? 0.7 + 0.3 * Math.sin(time * spot.pulse) : 1);
      }
    },
    stats() {
      let meshes = 0;
      root.traverseVisible(object => {
        if ((object as THREE.Mesh).isMesh || (object as THREE.Line).isLine || (object as THREE.Sprite).isSprite) meshes++;
      });
      return { meshes, sectorsVisible: sectors.filter(s => s.group.visible).length };
    },
  };
}

// ---------------------------------------------------------------- street rooms

type StreetRoom = { group: THREE.Group; lamp: { color: string; spots: THREE.Vector3[] } };
type Solid = Rect;
type RoomSpec = {
  origin: { x: number; z: number }; height: number; roof?: number; size?: { w: number; d: number }; area?: Rect;
  door: { x: number; z: number }; exit: { x: number; z: number }; solids: Solid[];
};
const ROOMS = STREET_ROOMS as unknown as Record<'sala-lavanderia' | 'azotea-viejo', RoomSpec>;

// The two walkable places of the Barrio Viejo encounters that are not on the
// street: the 24 h laundromat (far away, at its own origin, like the museum
// and the bar) and the roof of the tenement, in place, 10 m up.
export function buildStreetRoom(stage: 'sala-lavanderia' | 'azotea-viejo', shadows: boolean): StreetRoom | null {
  const room = stage === 'sala-lavanderia' ? laundromat() : stage === 'azotea-viejo' ? rooftop() : null;
  if (!room) return null;
  room.group.traverse(object => { const mesh = object as THREE.Mesh; if (mesh.isMesh) mesh.castShadow = shadows && mesh.castShadow; });
  paletteize(room.group);
  batchStatic(room.group, []);
  return room;
}

function laundromat(): StreetRoom {
  const setting = ROOMS['sala-lavanderia'];
  const group = new THREE.Group();
  const ox = setting.origin.x, oz = setting.origin.z;
  const { w, d } = setting.size!;
  const h = setting.height;
  const solids = setting.solids.map((s: Solid) => ({ x0: s.x0 + ox, x1: s.x1 + ox, z0: s.z0 + oz, z1: s.z1 + oz }));
  const floorTex = canvas(256, 256, c => {
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { c.fillStyle = (x + y) % 2 ? '#d8d4ca' : '#7a8a8e'; c.fillRect(x * 32, y * 32, 32, 32); }
    c.fillStyle = 'rgba(0,0,0,.06)'; for (let i = 0; i < 400; i++) c.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
  }, true);
  walkRoom(group, ox, w, d, h, '#cfe0dc', floorTex, 4, ox + setting.exit.x, '#eef2f0');
  // Tiles up to shoulder height on the three walls.
  const tile = new THREE.MeshStandardMaterial({ map: tiles('#e9f0ee', 'rgba(90,120,120,.5)', 128, 4), roughness: 0.35 });
  slab(group, ox - w / 2 + 0.1, ox + w / 2 - 0.1, 0, 1.5, oz - d / 2 + 0.1, oz - d / 2 + 0.12, tile, false);
  for (const s of [-1, 1]) slab(group, ox + s * (w / 2 - 0.11) - 0.01, ox + s * (w / 2 - 0.11) + 0.01, 0, 1.5, oz - d / 2 + 0.1, oz + d / 2 - 0.1, tile, false);

  const white = solid('#eef0f0', 0.35, 0.2);
  const steel = solid('#b9bcc0', 0.3, 0.8);
  const glass = new THREE.MeshStandardMaterial({ color: '#2a3a46', roughness: 0.1, metalness: 0.4, emissive: '#5a7a9a', emissiveIntensity: 0.25 });
  const display = glow('#7cf0a8', 1.2);
  // A washer or dryer with its round door facing `ry`.
  const machine = (x: number, y: number, z: number, ry: number, dryer: boolean) => {
    const m = new THREE.Group();
    m.add(box(0.95, 0.95, 0.85, dryer ? solid('#e4e6e8', 0.35, 0.2) : white, 0, 0.475, 0));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.04, 8, 24), steel);
    ring.position.set(0, 0.45, 0.43);
    m.add(ring);
    const pane = new THREE.Mesh(new THREE.CircleGeometry(0.25, 24), glass);
    pane.position.set(0, 0.45, 0.432);
    m.add(pane);
    m.add(box(0.8, 0.12, 0.02, solid('#9aa3ab', 0.4, 0.5), 0, 0.85, 0.43, false));
    m.add(box(0.14, 0.05, 0.02, display, 0.25, 0.85, 0.442, false));
    m.position.set(x, y, z);
    m.rotation.y = ry;
    group.add(m);
  };
  const [west, east, north, table] = solids;
  // West row: washers, then the bench by the door.
  for (let z = west.z0 + 0.5; z < -0.1 + oz; z += 1.0) machine((west.x0 + west.x1) / 2, 0, z, Math.PI / 2, false);
  slab(group, west.x0 + 0.1, west.x1 - 0.1, 0.42, 0.5, 0.6 + oz, west.z1 - 0.05, solid('#6b4a33', 0.7));
  for (const z of [0.75 + oz, west.z1 - 0.2]) slab(group, west.x0 + 0.2, west.x1 - 0.2, 0, 0.42, z - 0.04, z + 0.04, solid('#262a2c', 0.5, 0.5), false);
  slab(group, west.x0 + 0.02, west.x0 + 0.1, 0.5, 0.95, 0.6 + oz, west.z1 - 0.05, solid('#6b4a33', 0.7));
  // East row: washers, the one where the encounter happens with its door open.
  for (let z = east.z0 + 0.5; z < east.z1 - 0.3; z += 1.0) machine((east.x0 + east.x1) / 2, 0, z, -Math.PI / 2, false);
  // North wall: dryers stacked two high.
  for (let x = north.x0 + 0.5; x < north.x1 - 0.3; x += 1.0) for (const y of [0, 0.97]) machine(x, y, (north.z0 + north.z1) / 2 - 0.02, 0, true);
  // The folding table in the middle, with folded clothes and a basket.
  slab(group, table.x0, table.x1, 0.84, 0.9, table.z0, table.z1, solid('#d8d2c4', 0.5));
  for (const [x, z] of [[table.x0 + 0.1, table.z0 + 0.1], [table.x1 - 0.1, table.z0 + 0.1], [table.x0 + 0.1, table.z1 - 0.1], [table.x1 - 0.1, table.z1 - 0.1]]) slab(group, x - 0.03, x + 0.03, 0, 0.84, z - 0.03, z + 0.03, steel, false);
  for (let i = 0; i < 4; i++) slab(group, table.x0 + 0.2 + i * 0.4, table.x0 + 0.55 + i * 0.4, 0.9, 0.96 + (i % 2) * 0.05, table.z0 + 0.25, table.z0 + 0.6, solid(['#3a7bd2', '#f4f1ea', '#c0342b', '#e8c640'][i], 0.95), false);
  group.add(cylinder(0.24, 0.2, 0.3, solid('#c9a24a', 0.9), table.x1 - 0.35, 1.05, table.z1 - 0.3, 12));
  // Soap machine, a clock, notices.
  slab(group, ox + 4.2, ox + 4.75, 0.9, 2.0, oz - d / 2 + 0.12, oz - d / 2 + 0.45, solid('#2f5d8a', 0.5, 0.3));
  slab(group, ox + 4.3, ox + 4.65, 1.5, 1.85, oz - d / 2 + 0.46, oz - d / 2 + 0.47, glow('#cfe8ff', 1));
  const clock = new THREE.Mesh(new THREE.CircleGeometry(0.22, 24), new THREE.MeshStandardMaterial({ map: clockTexture(), roughness: 0.6 }));
  clock.position.set(ox - 2.5, 2.6, oz - d / 2 + 0.12);
  group.add(clock);
  const notice = canvas(256, 128, c => {
    c.fillStyle = '#fff8c4'; c.fillRect(0, 0, 256, 128);
    c.fillStyle = '#1d1d1f'; c.font = '700 28px sans-serif'; c.textAlign = 'center';
    c.fillText('NO SOBRECARGAR', 128, 54); c.font = '20px sans-serif'; c.fillText('las máquinas · gracias', 128, 92);
  });
  quad(group, 0.8, 0.4, new THREE.MeshStandardMaterial({ map: notice, roughness: 0.9 }), ox - 1, 2.3, oz - d / 2 + 0.12);
  nightWindow(group, ox + 2, 1.9, oz + d / 2 - 0.12, 3, 1.2, Math.PI);
  // Fluorescent tubes; one of them buzzes and stutters.
  const steady = glow('#f2f8ff', 2.4);
  const tired = glow('#f2f8ff', 2.4);
  roomAnimators.push(time => { tired.emissiveIntensity = 2.4 * flick(time, 11); });
  for (const [i, z] of [-2.6, 0, 2.6].entries()) for (const x of [-2.5, 2.5]) slab(group, ox + x - 1, ox + x + 1, h - 0.08, h - 0.02, oz + z - 0.08, oz + z + 0.08, i === 1 && x > 0 ? tired : steady, false);
  for (const [x, z] of [[0, -2], [-3, 0.5], [3, 0.5]]) lightPool(group, ox + x, oz + z, 2.6, '#e8f2ff', 0.18);
  return { group, lamp: { color: '#eef4ff', spots: [new THREE.Vector3(ox, h - 0.2, oz - 1), new THREE.Vector3(ox + 2.5, h - 0.2, oz + 1.5)] } };
}

function rooftop(): StreetRoom {
  const setting = ROOMS['azotea-viejo'];
  const group = new THREE.Group();
  const y = setting.roof!;
  const area = setting.area!;
  const [hole, tankA, tankB] = setting.solids as Solid[];
  // Old clay tiles over the three wings (the patio is the hole in the middle).
  const deck = new THREE.MeshStandardMaterial({ map: tiles('#8a5a44', 'rgba(40,24,16,.5)', 128, 4), roughness: 0.95 });
  const wings: Rect[] = [
    { x0: area.x0 + 0.25, x1: hole.x0, z0: area.z0 + 0.25, z1: area.z1 - 0.25 },
    { x0: hole.x1, x1: area.x1 - 0.25, z0: area.z0 + 0.25, z1: area.z1 - 0.25 },
    { x0: hole.x0, x1: hole.x1, z0: area.z0 + 0.25, z1: hole.z0 },
  ];
  for (const wing of wings) floor(group, wing, y + 0.02, deck, 1.5);
  // Water tanks on stands, where the solids are.
  for (const tank of [tankA, tankB]) {
    const cx = (tank.x0 + tank.x1) / 2, cz = (tank.z0 + tank.z1) / 2;
    const r = Math.min(tank.x1 - tank.x0, tank.z1 - tank.z0) / 2 - 0.05;
    for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) slab(group, cx + dx * (r - 0.15) - 0.05, cx + dx * (r - 0.15) + 0.05, y, y + 0.8, cz + dz * (r - 0.15) - 0.05, cz + dz * (r - 0.15) + 0.05, iron());
    slab(group, cx - r, cx + r, y + 0.8, y + 0.9, cz - r, cz + r, iron());
    group.add(cylinder(r, r, 1.6, solid('#8a8f8c', 0.5, 0.5), cx, y + 1.7, cz, 18));
    group.add(cylinder(r + 0.04, r + 0.04, 0.08, solid('#6a6f6c', 0.5, 0.5), cx, y + 2.54, cz, 18));
  }
  // Clotheslines with sheets across the west wing.
  const sheetColors = ['#f4f1ea', '#e8dcc0', '#cfe0f0', '#f4f1ea'];
  const lineMat = new THREE.LineBasicMaterial({ color: '#2a2622' });
  for (const [i, x] of [-88.6, -86.2].entries()) {
    for (const z of [-79, -69.2]) group.add(cylinder(0.04, 0.04, 2.2, iron(), x, y + 1.1, z, 6));
    group.add(new THREE.Line(sag(new THREE.Vector3(x, y + 2.1, -79), new THREE.Vector3(x, y + 2.1, -69.2), 0.25), lineMat));
    for (let k = 0; k < 3; k++) {
      const z = -77.6 + k * 3 + i * 0.8;
      const sheet = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.3, 4, 1), new THREE.MeshStandardMaterial({ color: sheetColors[(k + i) % 4], roughness: 1, side: THREE.DoubleSide }));
      const pos = sheet.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let v = 0; v < pos.count; v++) pos.setZ(v, Math.sin(pos.getX(v) * 3 + k) * 0.06);
      sheet.geometry.computeVertexNormals();
      sheet.position.set(x, y + 1.4, z);
      sheet.rotation.y = Math.PI / 2;
      group.add(sheet);
    }
  }
  // The pigeon coop against the west parapet, pigeons on its roof.
  const coop = solid('#8a6a48', 0.9);
  slab(group, -89.7, -88.9, y, y + 1.3, -74.2, -70.4, coop);
  slab(group, -89.75, -88.75, y + 1.3, y + 1.4, -74.3, -70.3, solid('#4a3a2a', 0.8));
  for (let k = 0; k < 4; k++) quad(group, 0.5, 0.4, solid('#1a1410', 0.9), -88.89, y + 0.7, -73.6 + k * 0.95, Math.PI / 2);
  const rand = random(64);
  for (let k = 0; k < 5; k++) {
    const pigeon = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), solid(rand() > 0.3 ? '#8a8f98' : '#f2f2ee', 0.8));
    body.scale.set(1.5, 1, 1);
    pigeon.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 5), solid('#5a6070', 0.8));
    head.position.set(0.13, 0.07, 0);
    pigeon.add(head);
    pigeon.position.set(-89.25, y + 1.5, -74 + k * 0.8);
    pigeon.rotation.y = rand() * TAU;
    group.add(pigeon);
  }
  // Old armchairs facing the sky, by the north parapet.
  for (const [x, ry] of [[-81.6, 0.3], [-78.4, -0.3]] as const) {
    const chair = new THREE.Group();
    chair.add(box(0.8, 0.4, 0.75, solid('#6a3a3a', 0.95), 0, 0.2, 0));
    chair.add(box(0.8, 0.6, 0.15, solid('#6a3a3a', 0.95), 0, 0.6, -0.32));
    for (const s of [-1, 1]) chair.add(box(0.12, 0.3, 0.75, solid('#5a2e2e', 0.95), s * 0.4, 0.5, 0));
    chair.position.set(x, y, -83.2);
    chair.rotation.y = ry;
    group.add(chair);
  }
  // The TV antenna in the north-east corner.
  group.add(cylinder(0.04, 0.05, 3.2, iron(), -65, y + 1.6, -83.2, 6));
  for (const [k, w] of [1.4, 1.1, 0.8].entries()) slab(group, -65 - w / 2, -65 + w / 2, y + 2.4 + k * 0.35, y + 2.43 + k * 0.35, -83.22, -83.18, iron(), false);
  // Plants in pots along the parapets.
  for (const [x, z] of [[-89.4, -83.4], [-87.6, -83.5], [-69, -83.5], [-67, -83.5], [-64.7, -70], [-64.7, -72.4], [-89.4, -68.8], [-64.7, -80]] as const) {
    group.add(cylinder(0.22, 0.17, 0.4, solid('#9a5a3a', 0.9), x, y + 0.2, z, 10));
    const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(0.35 + rand() * 0.2, 0), solid(rand() > 0.5 ? '#3f6a36' : '#5a8a3e', 0.95));
    leaves.position.set(x, y + 0.65, z);
    group.add(leaves);
  }
  // String lights from the hut to the antenna and over the east wing.
  const bulbs = glow('#ffd27a', 2.2);
  const bulbGeometry = new THREE.SphereGeometry(0.06, 6, 4);
  const strings: [THREE.Vector3, THREE.Vector3][] = [
    [new THREE.Vector3(-64.2, y + 2.3, -77.2), new THREE.Vector3(-65, y + 3.0, -83.2)],
    [new THREE.Vector3(-64.2, y + 2.3, -74.6), new THREE.Vector3(-69.8, y + 2.2, -68.4)],
    [new THREE.Vector3(-65, y + 3.0, -83.2), new THREE.Vector3(-84, y + 2.3, -83.6)],
  ];
  for (const [a, b] of strings) {
    group.add(new THREE.Line(sag(a, b, 0.35), lineMat));
    for (let k = 1; k < 12; k++) {
      const p = sagPoint(a, b, 0.35, k / 12);
      const mesh = new THREE.Mesh(bulbGeometry, bulbs);
      mesh.position.set(p.x, p.y - 0.07, p.z);
      group.add(mesh);
    }
  }
  return { group, lamp: { color: '#ffd9a0', spots: [new THREE.Vector3(-67, y + 2.6, -76), new THREE.Vector3(-80, y + 2.6, -81.5)] } };
}
