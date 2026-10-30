// Mundo 3D · the country map: an airport floating above the ocean and the
// clouds, with every implemented region as a floating island around it.
// Wooden bridges join the airport to each island; portals on the apron jump
// straight to one. Each island carries the real outline of its region in
// relief and a small landmark, and a gate that opens its zone.
import * as THREE from 'three';
import { box, canvas, cylinder, glow, random, solid, addPalm } from './kit3d';
import type { Box } from './kit3d';
import type { CountryInfo, RegionInfo } from './types';
import { countryHasFlag, createFlags, flagColors } from './banderas3d';
import { FLAG_RATIO, drawFlag } from './banderas.mjs';

export const HUB = { x0: -26, x1: 26, z0: -7, z1: 14 };
export const RUNWAY = { z0: -6, z1: 1.5 };
export const ISLAND_RADIUS = 14.5;
export const OCEAN_Y = -18;
export const PLANE_PARK = { x: 6, z: -2.2, heading: Math.PI / 2 };
// Facing the welcome sign, west of the parked plane, so the camera behind has a clear view.
export const MAP_SPAWN = { x: -6, z: 4, heading: 0 };

export type Bridge = { region: string; ax: number; az: number; bx: number; bz: number; width: number };
export type Portal = { region: string; x: number; z: number };
export type Gate = { region: string; x: number; z: number; heading: number };
export type MapLayout = { bridges: Bridge[]; portals: Portal[]; gates: Gate[]; solids: Box[] };

// ---------------------------------------------------------------- layout (pure)

/** Where a straight line from the airport centre to an island leaves the airport. */
function leaveHub(tx: number, tz: number) {
  const cx = 0, cz = (HUB.z0 + HUB.z1) / 2;
  const dx = tx - cx, dz = tz - cz;
  const k = Math.min(dx ? Math.abs((dx > 0 ? HUB.x1 : HUB.x0) / dx) : Infinity, dz ? Math.abs(((dz > 0 ? HUB.z1 : HUB.z0) - cz) / dz) : Infinity);
  return { x: cx + dx * k, z: cz + dz * k };
}

export function mapLayout(country: CountryInfo): MapLayout {
  const bridges: Bridge[] = [], gates: Gate[] = [], portals: Portal[] = [];
  const solids: Box[] = [];
  country.regions.forEach((region, i) => {
    const start = leaveHub(region.at.x, region.at.z);
    const dx = region.at.x - start.x, dz = region.at.z - start.z;
    const len = Math.hypot(dx, dz);
    const end = { x: region.at.x - (dx / len) * (ISLAND_RADIUS - 1.2), z: region.at.z - (dz / len) * (ISLAND_RADIUS - 1.2) };
    bridges.push({ region: region.id, ax: start.x - (dx / len) * 1.2, az: start.z - (dz / len) * 1.2, bx: end.x, bz: end.z, width: 3.2 });
    // The gate stands in the middle of the island and faces the bridge.
    gates.push({ region: region.id, x: region.at.x, z: region.at.z, heading: Math.atan2(-dx, -dz) });
    // Portals: a row on the apron, west to east in map order.
    const n = country.regions.length;
    portals.push({ region: region.id, x: -15 + (30 / (n - 1)) * i, z: 11.6 });
  });
  // The terminal and the control tower on the apron; the parked plane can be climbed (top).
  solids.push({ x0: -23, x1: -13, z0: 6, z1: 13.4 });
  solids.push({ x0: 18.5, x1: 21.5, z0: 8.5, z1: 11.5 });
  solids.push({ x0: PLANE_PARK.x - 7, x1: PLANE_PARK.x + 7, z0: PLANE_PARK.z - 0.9, z1: PLANE_PARK.z + 0.9, top: 1.85 });
  // The two flagpoles at the ends of the portal row.
  for (const px of [-24.6, 24.6]) solids.push({ x0: px - 0.15, x1: px + 0.15, z0: 12.65, z1: 12.95 });
  // The welcome sign's two posts (its panel is high enough to walk under).
  for (const px of [-7.5, 3.5]) solids.push({ x0: px - 0.25, x1: px + 0.25, z0: 9.25, z1: 9.75 });
  for (const gate of gates) {
    const sx = Math.cos(gate.heading) * 1.9, sz = -Math.sin(gate.heading) * 1.9;
    for (const s of [1, -1]) solids.push({ x0: gate.x + sx * s - 0.35, x1: gate.x + sx * s + 0.35, z0: gate.z + sz * s - 0.35, z1: gate.z + sz * s + 0.35 });
  }
  return { bridges, portals, gates, solids };
}

/** Is there ground under this point (airport, a bridge or an island)? */
export function onGround(layout: MapLayout, regions: RegionInfo[], x: number, z: number, margin = 0.2) {
  if (x > HUB.x0 + margin && x < HUB.x1 - margin && z > HUB.z0 + margin && z < HUB.z1 - margin) return true;
  for (const r of regions) if (Math.hypot(x - r.at.x, z - r.at.z) < ISLAND_RADIUS - margin) return true;
  for (const b of layout.bridges) {
    const dx = b.bx - b.ax, dz = b.bz - b.az, len2 = dx * dx + dz * dz;
    const t = ((x - b.ax) * dx + (z - b.az) * dz) / len2;
    if (t < 0 || t > 1) continue;
    const px = b.ax + dx * t, pz = b.az + dz * t;
    if (Math.hypot(x - px, z - pz) < b.width / 2 - margin) return true;
  }
  return false;
}

export const islandAt = (regions: RegionInfo[], x: number, z: number) => regions.find(r => Math.hypot(x - r.at.x, z - r.at.z) < ISLAND_RADIUS) ?? null;

// ---------------------------------------------------------------- textures

function skyTexture(top: string, mid: string, bottom: string) {
  const tex = canvas(16, 512, ctx => {
    const g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, top); g.addColorStop(0.55, mid); g.addColorStop(1, bottom);
    ctx.fillStyle = g; ctx.fillRect(0, 0, 16, 512);
  });
  tex.mapping = THREE.EquirectangularReflectionMapping;
  return tex;
}

let cloudTex: THREE.Texture | null = null;
export function cloudTexture() {
  if (cloudTex && cloudTex.image) return cloudTex;
  cloudTex = canvas(256, 256, ctx => {
    const rand = random(31);
    for (let i = 0; i < 18; i++) {
      const x = 60 + rand() * 136, y = 90 + rand() * 80, r = 30 + rand() * 50;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(0.6, 'rgba(250,252,255,.45)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
  });
  return cloudTex;
}

function runwayTexture() {
  return canvas(1024, 160, ctx => {
    ctx.fillStyle = '#3b3f44'; ctx.fillRect(0, 0, 1024, 160);
    const rand = random(5);
    for (let i = 0; i < 3000; i++) { ctx.fillStyle = rand() > 0.5 ? '#454a50' : '#33373b'; ctx.fillRect(rand() * 1024, rand() * 160, 2, 2); }
    ctx.fillStyle = '#f2f2ee';
    for (let x = 60; x < 980; x += 70) ctx.fillRect(x, 76, 40, 7);
    for (let i = 0; i < 8; i++) { ctx.fillRect(14, 18 + i * 16, 34, 8); ctx.fillRect(976, 18 + i * 16, 34, 8); }
    ctx.fillRect(0, 6, 1024, 4); ctx.fillRect(0, 150, 1024, 4);
  });
}

// ---------------------------------------------------------------- pieces

/** The jet: white fuselage with a coloured stripe, wings, tail and engines. */
export function buildPlane() {
  const g = new THREE.Group();
  const white = solid('#f4f6f8', 0.35, 0.2);
  const stripe = solid('#c8323c', 0.5);
  const blue = solid('#1f3b73', 0.5);
  const glass = solid('#1a2836', 0.2, 0.5);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.95, 11, 8, 16), white);
  body.rotation.z = Math.PI / 2; body.castShadow = true; g.add(body);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.965, 0.965, 9.5, 16, 1, true, Math.PI * 0.62, Math.PI * 0.25), stripe);
  band.rotation.z = Math.PI / 2; g.add(band);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.7, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2.4), glass);
  nose.rotation.z = -Math.PI / 2; nose.position.set(6.05, 0.32, 0); nose.scale.set(0.5, 0.8, 1.05); g.add(nose);
  // Cabin windows as a dark strip.
  for (const s of [1, -1]) { const w = box(8, 0.16, 0.02, glass, 0, 0.32, 0.94 * s, false); g.add(w); }
  const wing = new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(2.6, 0), new THREE.Vector2(0.6, 7.2), new THREE.Vector2(-0.6, 7.2)].map(v => v));
  for (const s of [1, -1]) {
    const geo = new THREE.ExtrudeGeometry(wing, { depth: 0.16, bevelEnabled: false });
    const m = new THREE.Mesh(geo, white); m.rotation.x = Math.PI / 2; m.position.set(-1.6, -0.25, 0); m.scale.z = 1; m.scale.y = s; m.castShadow = true; g.add(m);
    const engine = cylinder(0.42, 0.36, 1.7, solid('#c9ced4', 0.3, 0.6), -0.1, -0.75, 2.6 * s, 14);
    engine.rotation.z = Math.PI / 2; g.add(engine);
    const tailWing = new THREE.Mesh(new THREE.ExtrudeGeometry(new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(1.3, 0), new THREE.Vector2(0.4, 2.6), new THREE.Vector2(-0.3, 2.6)]), { depth: 0.1, bevelEnabled: false }), white);
    tailWing.rotation.x = Math.PI / 2; tailWing.position.set(-6.2, 0.35, 0); tailWing.scale.y = s; g.add(tailWing);
  }
  const fin = new THREE.Mesh(new THREE.ExtrudeGeometry(new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(2.4, 0), new THREE.Vector2(0.4, 3), new THREE.Vector2(-0.7, 3)]), { depth: 0.14, bevelEnabled: false }), blue);
  fin.position.set(-6.6, 0.55, -0.07); fin.castShadow = true; g.add(fin);
  // Landing gear.
  for (const [x, z] of [[4.4, 0], [-0.6, 1.1], [-0.6, -1.1]]) {
    g.add(cylinder(0.05, 0.05, 0.8, solid('#555', 0.4, 0.6), x, -1.1, z, 6));
    const wheel = cylinder(0.32, 0.32, 0.22, solid('#141414', 0.8), x, -1.55, z, 12); wheel.rotation.x = Math.PI / 2; g.add(wheel);
  }
  return g;
}

function floatingRock(radius: number, depth: number, top: string, rock: string, seed: number) {
  const g = new THREE.Group();
  const rand = random(seed);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 0.96, 1.2, 40), solid(top, 0.95));
  cap.position.y = -0.6; cap.receiveShadow = true; g.add(cap);
  const geo = new THREE.ConeGeometry(radius * 0.97, depth, 18, 4);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y > depth / 2 - 0.01) continue;
    pos.setX(i, pos.getX(i) * (0.85 + rand() * 0.3)); pos.setZ(i, pos.getZ(i) * (0.85 + rand() * 0.3));
  }
  geo.computeVertexNormals();
  const under = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: rock, roughness: 1, flatShading: true }));
  under.rotation.x = Math.PI; under.position.y = -1.2 - depth / 2; g.add(under);
  return g;
}

/** A soft island shape for regions without a real outline in the data. */
function blob(seed: number) {
  const rand = random(seed);
  const k = [rand(), rand(), rand()].map(v => v * Math.PI * 2);
  return Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * Math.PI * 2;
    const r = 7.2 + Math.sin(a * 2 + k[0]) * 1.1 + Math.sin(a * 3 + k[1]) * 0.7 + Math.sin(a * 5 + k[2]) * 0.35;
    return [Math.cos(a) * r, Math.sin(a) * r * 0.8];
  });
}

/** The region's real outline, embossed on its island. */
function silhouette(rings: number[][][], color: string) {
  const shapes = rings.map(ring => new THREE.Shape(ring.map(([x, z]) => new THREE.Vector2(x, -z))));
  const geo = new THREE.ExtrudeGeometry(shapes, { depth: 0.22, bevelEnabled: true, bevelSize: 0.12, bevelThickness: 0.08, bevelSegments: 2 });
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.7 }));
  mesh.rotation.x = -Math.PI / 2; mesh.position.y = -0.08; mesh.receiveShadow = true; mesh.castShadow = true;
  return mesh;
}

/** Small landmarks that say which state this is at a glance. */
function landmark(region: RegionInfo, g: THREE.Group) {
  const back = (dist: number, side: number) => {
    // Behind the gate, seen from the airport.
    const d = Math.hypot(region.at.x, region.at.z - 3.5) || 1;
    const ux = region.at.x / d, uz = (region.at.z - 3.5) / d;
    return { x: ux * dist - uz * side, z: uz * dist + ux * side };
  };
  const at = (dist: number, side: number) => back(dist, side);
  const solids: { x: number; z: number; r: number }[] = [];
  const tower = (dist: number, side: number, w: number, h: number, color: string, lit = '#ffe6a8') => {
    const p = at(dist, side);
    const tex = canvas(64, 128, ctx => { ctx.fillStyle = color; ctx.fillRect(0, 0, 64, 128); ctx.fillStyle = lit; for (let y = 6; y < 128; y += 10) for (let x = 6; x < 64; x += 12) if ((x + y) % 3) ctx.fillRect(x, y, 6, 5); });
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 }));
    m.position.set(p.x, h / 2, p.z); m.castShadow = true; g.add(m); solids.push({ x: p.x, z: p.z, r: w * 0.75 });
  };
  const peak = (dist: number, side: number, r: number, h: number, snow = true) => {
    const p = at(dist, side);
    const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), new THREE.MeshStandardMaterial({ color: '#5d6b74', roughness: 1, flatShading: true }));
    m.position.set(p.x, h / 2, p.z); m.castShadow = true; g.add(m);
    if (snow) { const s = new THREE.Mesh(new THREE.ConeGeometry(r * 0.42, h * 0.42, 7), solid('#f4f7fa', 0.8)); s.position.set(p.x, h * 0.79, p.z); g.add(s); }
    solids.push({ x: p.x, z: p.z, r: r * 0.8 });
  };
  const palm = (dist: number, side: number, h = 4.5) => { const p = at(dist, side); addPalm(g, p.x, p.z, h, Math.round(dist * 13 + side * 7)); solids.push({ x: p.x, z: p.z, r: 0.4 }); };
  const pine = (dist: number, side: number) => {
    const p = at(dist, side);
    g.add(cylinder(0.12, 0.16, 1, solid('#4a3626'), p.x, 0.5, p.z, 6));
    for (let i = 0; i < 3; i++) { const c = new THREE.Mesh(new THREE.ConeGeometry(1 - i * 0.25, 1.4, 8), solid('#24452f', 0.9)); c.position.set(p.x, 1.3 + i * 0.75, p.z); c.castShadow = true; g.add(c); }
    solids.push({ x: p.x, z: p.z, r: 0.5 });
  };
  switch (region.id) {
    case 'florida': {
      palm(6, -5); palm(8, 4); palm(4, 6, 3.8);
      const p = at(8.5, -1);
      const deco = box(4, 3.2, 2.4, solid('#f3c6d2', 0.7), p.x, 1.6, p.z); deco.castShadow = true; g.add(deco);
      g.add(box(4.1, 0.25, 2.5, solid('#6fd3c8'), p.x, 3.3, p.z));
      solids.push({ x: p.x, z: p.z, r: 2.2 });
      const lg = at(3.5, -7.5); g.add(box(1.6, 0.12, 1.6, solid('#ffb347'), lg.x, 1.6, lg.z)); g.add(box(1.4, 1.2, 1.2, solid('#ff7a59'), lg.x, 2.2, lg.z));
      for (const s of [-0.6, 0.6]) g.add(cylinder(0.06, 0.06, 1.6, solid('#ffffff'), lg.x + s, 0.8, lg.z, 6));
      break;
    }
    case 'nueva-york':
      tower(7, -4, 2.2, 9, '#7d8796'); tower(9, 0, 2.6, 13, '#6a7480'); tower(7, 4, 2, 7, '#8c8174'); tower(10.5, -2.5, 1.8, 6, '#9aa3ad');
      { const p = at(9, 0); const spire = new THREE.Mesh(new THREE.ConeGeometry(0.5, 3, 4), solid('#c9ced4', 0.3, 0.7)); spire.position.set(p.x, 14.5, p.z); g.add(spire); }
      break;
    case 'california': {
      const hill = at(9.5, 0); const h = new THREE.Mesh(new THREE.SphereGeometry(5, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#b39a62', roughness: 1, flatShading: true }));
      h.scale.set(1.3, 0.7, 0.8); h.position.set(hill.x, 0, hill.z); g.add(h); solids.push({ x: hill.x, z: hill.z, r: 5 });
      palm(5, -5, 5.5); palm(6, 5, 5); palm(3.5, 7, 4.5); tower(6, -1, 1.4, 5, '#c7b49a');
      break;
    }
    case 'texas': {
      const p = at(8, 0);
      g.add(box(6, 2.4, 3.4, solid('#e3d2b5', 0.8), p.x, 1.2, p.z));
      g.add(cylinder(1.2, 1.4, 1.4, solid('#e3d2b5', 0.8), p.x, 3.1, p.z, 16));
      const dome = new THREE.Mesh(new THREE.SphereGeometry(1.25, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), solid('#e8d9bd', 0.7)); dome.position.set(p.x, 3.8, p.z); g.add(dome);
      solids.push({ x: p.x, z: p.z, r: 3.2 });
      const star = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2, r = i % 2 ? 0.45 : 1.1; if (i) star.lineTo(Math.cos(a) * r, Math.sin(a) * r); else star.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
      const s = new THREE.Mesh(new THREE.ExtrudeGeometry(star, { depth: 0.2, bevelEnabled: false }), glow('#ffd36b', 0.5)); const sp = at(4, -6); s.position.set(sp.x, 2.6, sp.z); s.userData.spin = true; g.add(s);
      g.add(cylinder(0.08, 0.08, 1.6, solid('#444'), sp.x, 0.8, sp.z, 6));
      break;
    }
    case 'hawai': {
      const p = at(8.5, 1);
      const v = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 5.5, 5, 12, 1, true), new THREE.MeshStandardMaterial({ color: '#4d5a3e', roughness: 1, flatShading: true, side: THREE.DoubleSide }));
      v.position.set(p.x, 2.5, p.z); g.add(v); solids.push({ x: p.x, z: p.z, r: 5 });
      const glowTop = new THREE.Mesh(new THREE.CircleGeometry(1.35, 16), glow('#ff6a2a', 0.35)); glowTop.rotation.x = -Math.PI / 2; glowTop.position.set(p.x, 4.6, p.z); g.add(glowTop);
      palm(4, -6, 5); palm(6, -3, 5.5); palm(3, 7, 4.5);
      break;
    }
    case 'colorado':
      peak(9, -3, 3.4, 7); peak(8.5, 3.5, 2.8, 5.5); peak(11, 1, 2.6, 6);
      pine(4.5, -6); pine(5, 6); pine(3.5, 7.5); pine(6, -8);
      break;
    default:
      // Countries built from data say which marks their islands carry.
      for (const mk of region.marks ?? []) {
        const size = mk.size ?? 1, color = mk.color ?? '#d9cdb8';
        if (mk.kind === 'palm') palm(mk.dist, mk.side, 4.5 * size);
        else if (mk.kind === 'pine') pine(mk.dist, mk.side);
        else if (mk.kind === 'peak') peak(mk.dist, mk.side, 3 * size, 6 * size, mk.snow ?? true);
        else if (mk.kind === 'tower') tower(mk.dist, mk.side, 1.8 * size, 8 * size, color);
        else {
          const p = at(mk.dist, mk.side);
          if (mk.kind === 'pyramid') { for (let k = 0; k < 4; k++) g.add(box((5 - k * 1.1) * size, 0.9 * size, (5 - k * 1.1) * size, solid(color, 0.95), p.x, (0.45 + k * 0.9) * size, p.z)); solids.push({ x: p.x, z: p.z, r: 2.6 * size }); }
          else if (mk.kind === 'dome') { g.add(box(3.4 * size, 2.4 * size, 3.4 * size, solid('#f1ece2', 0.8), p.x, 1.2 * size, p.z)); const d = new THREE.Mesh(new THREE.SphereGeometry(1.5 * size, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), solid(color, 0.35, 0.5)); d.position.set(p.x, 2.4 * size, p.z); g.add(d); solids.push({ x: p.x, z: p.z, r: 2 * size }); }
          else { g.add(box(2.6 * size, 2 * size, 2.2 * size, solid(color, 0.8), p.x, size, p.z)); const r = new THREE.Mesh(new THREE.ConeGeometry(2 * size, 1.2 * size, 4), solid('#8a4b32', 0.9)); r.position.set(p.x, 2.6 * size, p.z); r.rotation.y = Math.PI / 4; g.add(r); solids.push({ x: p.x, z: p.z, r: 1.6 * size }); }
        }
      }
  }
  return solids;
}

function gate(region: RegionInfo, at: Gate) {
  const g = new THREE.Group();
  const post = solid('#f3efe6', 0.6);
  g.add(box(0.5, 4.2, 0.5, post, -1.9, 2.1, 0));
  g.add(box(0.5, 4.2, 0.5, post, 1.9, 2.1, 0));
  const tex = canvas(512, 128, ctx => {
    ctx.fillStyle = region.color; ctx.fillRect(0, 0, 512, 128);
    ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '800 58px "Helvetica Neue", Arial, sans-serif'; ctx.fillText(region.sign, 256, 52, 480);
    ctx.font = '600 26px "Helvetica Neue", Arial, sans-serif'; ctx.fillText(region.zone.es.toUpperCase(), 256, 104, 480);
  });
  const panel = new THREE.Mesh(new THREE.BoxGeometry(4.6, 1.15, 0.2), [post, post, post, post, new THREE.MeshStandardMaterial({ map: tex }), new THREE.MeshStandardMaterial({ map: tex })]);
  panel.position.y = 4.3; g.add(panel);
  // The doorway glows: walk in and press E.
  const veil = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 3.7), new THREE.MeshBasicMaterial({ color: region.color, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false }));
  veil.position.y = 1.9; veil.userData.veil = true; g.add(veil);
  g.position.set(at.x, 0, at.z); g.rotation.y = at.heading;
  return g;
}

function bridgeMesh(b: Bridge) {
  const g = new THREE.Group();
  const dx = b.bx - b.ax, dz = b.bz - b.az, len = Math.hypot(dx, dz);
  const plank = solid('#9b7350', 0.9), rope = solid('#d9c7a1', 0.9);
  const n = Math.ceil(len / 0.7);
  for (let i = 0; i < n; i++) {
    const p = box(b.width, 0.14, 0.58, i % 3 ? plank : solid('#8a6446', 0.9), 0, -0.07, -len / 2 + (i + 0.5) * (len / n), false);
    p.receiveShadow = true; g.add(p);
  }
  for (const s of [1, -1]) {
    g.add(box(0.06, 0.06, len, rope, s * (b.width / 2 - 0.05), 0.9, 0, false));
    for (let z = -len / 2; z <= len / 2; z += 3) g.add(box(0.1, 0.95, 0.1, plank, s * (b.width / 2 - 0.05), 0.45, z, false));
  }
  g.position.set((b.ax + b.bx) / 2, 0, (b.az + b.bz) / 2);
  g.rotation.y = Math.atan2(dx, dz);
  return g;
}

function portalMesh(region: RegionInfo, p: Portal) {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.12, 10, 40), glow(region.color, 1.1));
  ring.position.y = 1.35; g.add(ring);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1.0, 32), new THREE.MeshBasicMaterial({ color: region.color, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
  disc.position.y = 1.35; disc.userData.veil = true; g.add(disc);
  // A name board above the ring, readable from the spawn: the region and its zone.
  const tex = canvas(512, 160, ctx => {
    ctx.fillStyle = 'rgba(10,20,40,.9)'; ctx.fillRect(0, 0, 512, 160);
    ctx.fillStyle = region.color; ctx.fillRect(0, 0, 512, 14);
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '800 52px "Helvetica Neue", Arial, sans-serif'; ctx.fillText(region.sign, 256, 66, 488);
    ctx.fillStyle = '#ffd36b'; ctx.font = '700 28px "Helvetica Neue", Arial, sans-serif'; ctx.fillText(region.zone.es, 256, 124, 488);
  });
  // Back to back, so it reads the right way from the spawn and from the bridges.
  for (const turn of [0, Math.PI]) {
    const label = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
    label.position.y = 3.15; label.rotation.y = turn; g.add(label);
  }
  g.position.set(p.x, 0, p.z);
  return g;
}

/** Height of the welcome panel's centre: high enough that the portal boards show under it. */
export const SIGN_Y = 7.4;

/** The big welcome sign that rises on the apron at the end of the landing. */
export function welcomeSign(country: CountryInfo) {
  const g = new THREE.Group();
  const tex = canvas(1024, 384, ctx => {
    const grad = ctx.createLinearGradient(0, 0, 0, 384); grad.addColorStop(0, '#16336b'); grad.addColorStop(1, '#0d1f45');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 1024, 384);
    const [c1, c2] = flagColors(country.id);
    ctx.fillStyle = c1; ctx.fillRect(0, 0, 1024, 18); ctx.fillStyle = c2; ctx.fillRect(0, 366, 1024, 18);
    ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    let left = 512, room = 960;
    if (countryHasFlag(country.id)) {
      // The flag on both ends, the welcome between them.
      const fh = 132, fw = Math.min(210, fh * FLAG_RATIO[country.id]);
      for (const x of [40, 1024 - 40 - fw]) { ctx.save(); ctx.translate(x, 126); ctx.beginPath(); ctx.rect(0, 0, fw, fh); ctx.clip(); drawFlag(ctx, country.id, fw, fh); ctx.restore(); ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 3; ctx.strokeRect(x, 126, fw, fh); }
      left = 512; room = 1024 - 2 * (60 + fw);
    }
    ctx.font = '800 64px "Helvetica Neue", Arial, sans-serif'; ctx.fillText(country.welcome.en, left, 150, room);
    ctx.fillStyle = '#ffd36b'; ctx.font = '700 54px "Helvetica Neue", Arial, sans-serif'; ctx.fillText(country.welcome.es, left, 252, room);
  });
  const face = new THREE.MeshStandardMaterial({ map: tex, emissive: '#ffffff', emissiveMap: tex, emissiveIntensity: 0.35, roughness: 0.5 });
  const frame = solid('#e9edf2', 0.4, 0.4);
  const panel = new THREE.Mesh(new THREE.BoxGeometry(14, 5.25, 0.35), [frame, frame, frame, frame, face, face]);
  panel.position.y = SIGN_Y; panel.castShadow = true; g.add(panel);
  g.add(box(0.4, SIGN_Y - 2, 0.4, frame, -5.5, (SIGN_Y - 2) / 2, 0)); g.add(box(0.4, SIGN_Y - 2, 0.4, frame, 5.5, (SIGN_Y - 2) / 2, 0));
  return g;
}

export type MapScene = {
  group: THREE.Group;
  plane: THREE.Group;
  sign: THREE.Group;
  layout: MapLayout;
  clouds: THREE.Sprite[];
  gates: Map<string, THREE.Group>;
  islandSolids: { x: number; z: number; r: number }[];
  ocean: THREE.Texture;
  animate: (t: number, dt: number) => void;
  sky: THREE.Texture;
};

export function buildMap(country: CountryInfo, rings: Record<string, number[][][]>, options: { low: boolean }): MapScene {
  const group = new THREE.Group();
  const layout = mapLayout(country);
  // Ocean far below, with a moving shimmer.
  const oceanTex = canvas(256, 256, ctx => {
    ctx.fillStyle = '#1f6f9a'; ctx.fillRect(0, 0, 256, 256);
    const rand = random(3); ctx.strokeStyle = '#7fd0ee'; ctx.lineWidth = 2;
    for (let i = 0; i < 70; i++) { ctx.globalAlpha = 0.12 + rand() * 0.3; const x = rand() * 256, y = rand() * 256, l = 8 + rand() * 24; ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + l / 2, y - 3, x + l, y); ctx.stroke(); }
  }, true);
  oceanTex.repeat.set(60, 60);
  const ocean = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), new THREE.MeshStandardMaterial({ map: oceanTex, roughness: 0.25, metalness: 0.1 }));
  ocean.rotation.x = -Math.PI / 2; ocean.position.y = OCEAN_Y; group.add(ocean);

  // The airport: platform, runway, apron, terminal, tower, windsock.
  const hub = floatingRock(1, 9, '#8a9a6a', '#6b5a48', 1);
  hub.scale.set((HUB.x1 - HUB.x0) / 2, 1, (HUB.z1 - HUB.z0) / 2);
  hub.position.set(0, 0, (HUB.z0 + HUB.z1) / 2);
  group.add(hub);
  group.add(box(HUB.x1 - HUB.x0, 1.2, HUB.z1 - HUB.z0, solid('#8a9a6a', 0.95), 0, -0.6, (HUB.z0 + HUB.z1) / 2, false));
  const apron = new THREE.Mesh(new THREE.PlaneGeometry(HUB.x1 - HUB.x0 - 0.4, HUB.z1 - RUNWAY.z1 - 0.2), solid('#c9c4b8', 0.95));
  apron.rotation.x = -Math.PI / 2; apron.position.set(0, 0.012, (RUNWAY.z1 + HUB.z1) / 2 - 0.1); apron.receiveShadow = true; group.add(apron);
  const runway = new THREE.Mesh(new THREE.PlaneGeometry(HUB.x1 - HUB.x0 - 0.6, RUNWAY.z1 - RUNWAY.z0), new THREE.MeshStandardMaterial({ map: runwayTexture(), roughness: 0.9 }));
  runway.rotation.x = -Math.PI / 2; runway.position.set(0, 0.02, (RUNWAY.z0 + RUNWAY.z1) / 2); runway.receiveShadow = true; group.add(runway);
  // Terminal with a glass front and the tower.
  const glass = new THREE.MeshStandardMaterial({ color: '#7fb0cc', roughness: 0.1, metalness: 0.6 });
  const wall = solid('#eceae4', 0.7);
  const terminal = new THREE.Mesh(new THREE.BoxGeometry(10, 4, 7.4), [wall, wall, solid('#9aa4ad'), wall, glass, wall]);
  terminal.position.set(-18, 2, 9.7); terminal.castShadow = true; terminal.receiveShadow = true; group.add(terminal);
  const tlabel = new THREE.Mesh(new THREE.PlaneGeometry(6, 0.8), new THREE.MeshStandardMaterial({ map: canvas(512, 72, ctx => { ctx.fillStyle = '#16336b'; ctx.fillRect(0, 0, 512, 72); ctx.fillStyle = '#fff'; ctx.font = '700 40px "Helvetica Neue", Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('ARRIVALS · LLEGADAS', 256, 38, 490); }) }));
  tlabel.position.set(-18, 3.5, 5.98); tlabel.rotation.y = Math.PI; group.add(tlabel);
  group.add(cylinder(1.1, 1.3, 7, wall, 20, 3.5, 10, 14));
  const cab = cylinder(1.9, 1.5, 1.4, glass, 20, 7.6, 10, 14); group.add(cab);
  group.add(cylinder(2, 2, 0.2, solid('#2b3a4a'), 20, 8.4, 10, 14));
  const sock = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.4, 10, 1, true), solid('#ff7a1a', 0.8)); sock.rotation.z = Math.PI / 2; sock.position.set(24.2, 3.1, -6.3); group.add(sock);
  group.add(cylinder(0.05, 0.05, 3.2, solid('#ddd'), 23.5, 1.6, -6.3, 6));
  // Runway lights.
  for (let x = HUB.x0 + 1.5; x < HUB.x1 - 1; x += 3) for (const z of [RUNWAY.z0 + 0.25, RUNWAY.z1 - 0.25]) {
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 4), glow(x > 20 ? '#ff4040' : '#fff3c4', 2)); l.position.set(x, 0.08, z); group.add(l);
  }

  const plane = buildPlane();
  plane.position.set(PLANE_PARK.x, 1.85, PLANE_PARK.z);
  group.add(plane);
  const sign = welcomeSign(country);
  sign.position.set(-2, 0, 9.5);
  sign.rotation.y = Math.PI;
  sign.visible = false;
  group.add(sign);

  // Islands, bridges, gates and portals.
  const gates = new Map<string, THREE.Group>();
  const islandSolids: { x: number; z: number; r: number }[] = [];
  country.regions.forEach((region, i) => {
    const isl = floatingRock(ISLAND_RADIUS, 9 + (i % 3) * 2, '#7da86a', '#6e5d4c', 10 + i);
    isl.position.set(region.at.x, 0, region.at.z);
    group.add(isl);
    const relief = silhouette(rings[region.shape] ?? [blob(10 + i * 7)], region.color);
    relief.position.x = region.at.x; relief.position.z = region.at.z;
    group.add(relief);
    const marks = new THREE.Group();
    marks.position.set(region.at.x, 0, region.at.z);
    for (const s of landmark(region, marks)) islandSolids.push({ x: region.at.x + s.x, z: region.at.z + s.z, r: s.r });
    group.add(marks);
    const gt = layout.gates.find(g => g.region === region.id)!;
    const gm = gate(region, gt); gates.set(region.id, gm); group.add(gm);
    const b = layout.bridges.find(x => x.region === region.id)!;
    group.add(bridgeMesh(b));
    group.add(portalMesh(region, layout.portals.find(p => p.region === region.id)!));
  });

  // Clouds: a layer below the islands, a few drifting at their height and a
  // field high up where the plane flies.
  const clouds: THREE.Sprite[] = [];
  const cloudMat = new THREE.SpriteMaterial({ map: cloudTexture(), transparent: true, depthWrite: false, opacity: 0.92, fog: true });
  const rand = random(77);
  const addCloud = (x: number, y: number, z: number, s: number) => { const c = new THREE.Sprite(cloudMat); c.position.set(x, y, z); c.scale.set(s, s * 0.55, 1); c.userData.drift = 0.4 + rand() * 0.8; group.add(c); clouds.push(c); };
  const count = options.low ? 0.5 : 1;
  for (let i = 0; i < 46 * count; i++) { const a = rand() * Math.PI * 2, r = 20 + rand() * 120; addCloud(Math.cos(a) * r, -7 - rand() * 6, Math.sin(a) * r, 18 + rand() * 22); }
  for (let i = 0; i < 12 * count; i++) { const a = rand() * Math.PI * 2, r = 35 + rand() * 90; addCloud(Math.cos(a) * r, 6 + rand() * 10, Math.sin(a) * r, 10 + rand() * 12); }
  for (let i = 0; i < 40 * count; i++) addCloud(-260 + rand() * 260, 38 + rand() * 40, -45 + rand() * 90, 16 + rand() * 26);

  const flags = createFlags();
  if (countryHasFlag(country.id)) for (const px of [-24.6, 24.6]) flags.pole(group, country.id, px, 0, 12.8, 6, 2.4, px < 0 ? 0 : Math.PI);

  const sky = skyTexture('#3c79c4', '#9cc8ec', '#e9f2f8');
  const spinning: THREE.Object3D[] = [];
  const veils: THREE.Mesh[] = [];
  group.traverse(o => { if (o.userData.spin) spinning.push(o); if (o.userData.veil) veils.push(o as THREE.Mesh); });
  return {
    group, plane, sign, layout, clouds, gates, islandSolids, ocean: oceanTex, sky,
    animate(t, dt) {
      oceanTex.offset.x += dt * 0.004; oceanTex.offset.y += dt * 0.002;
      for (const c of clouds) { c.position.x += c.userData.drift * dt; if (c.position.x > 160) c.position.x -= 320; }
      for (const s of spinning) s.rotation.y += dt * 0.8;
      for (const v of veils) (v.material as THREE.MeshBasicMaterial).opacity = 0.22 + Math.sin(t * 2.2) * 0.1;
      sock.rotation.y = Math.sin(t * 0.7) * 0.3;
      flags.wave(t);
    },
  };
}
