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
const STREAM_RANGE = 95;
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
  return {
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
  const x0 = b.x1 + 0.02, x1 = b.x1 + 1.12, xm = (x0 + x1) / 2;
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
