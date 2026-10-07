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
