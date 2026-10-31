// Vuelo cancelado · the 3D airport: arrivals, departures with the rainy kerb
// and the gates over the runway, every counter, carousel and seat, the
// planes outside in the storm and the people who spend the night inside.
// Original procedural geometry and canvas textures only; people come from
// Noche abierta's people3d and the player is the SpanishCue mascot (hero3d).
// Static furniture is merged by material (batchStatic), so a floor costs a
// few hundred draw calls; only the floor you are on is drawn.
import * as THREE from 'three';
import { batchStatic, canvas, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import type { Voice } from '../escucha-3d/bump.mjs';
import { CEILING, CHATTER, CROWD, DOORS, ELEVATOR, FLOORS, FURNITURE, SCENES, STAIRS, WALKERS, WALL, WALLS, footprint, walkerAt, type Walker } from './layout.mjs';
import { TRIP } from './story.mjs';

type Item = { type: string; x: number; z: number; w: number; d: number; rot?: number; solid?: boolean };
export type Npc = { person: Person; floor: number; scene?: string; main?: boolean; x: number; z: number; heading: number; baseMood: string; lying?: boolean; seated?: boolean; talk?: string; body?: string; seed: number; angryUntil?: number; smoker?: { tip: THREE.Object3D; puffs: THREE.Sprite[]; phase: number } };
export type Mover = { walker: Walker; person: Person; floor: number; offset: number; carry?: THREE.Object3D; crew?: { person: Person; case: THREE.Object3D }[]; x: number; z: number; moving?: boolean; body?: string; seed: number; angryUntil?: number; heading?: number; light?: THREE.Mesh };
export type Cry = Voice;
export type DoorRig = { floor: number; x: number; z: number; leaves: { mesh: THREE.Object3D; open: (k: number) => void }[]; k: number };
export type Spot = { id: string; floor: number; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Body = { x: number; z: number; radius?: number; who: Npc | Mover };
export type Airport = {
  floors: Record<number, THREE.Group>;
  outside: Record<number, THREE.Group>;
  npcs: Npc[];
  movers: Mover[];
  spots: Spot[];
  doors: DoorRig[];
  lift: Record<number, { left: THREE.Object3D; right: THREE.Object3D }>;
  animate: (t: number, dt: number, floor: number, px: number, pz: number) => void;
  setSceneMood: (id: string | null, mood: string | null) => void;
  /** The departures board and the gate screen follow the night: clock and boarding pass. */
  setNight: (clock: string, pass: 'cancelado' | 'espera' | 'abordo') => void;
  /** What the mascot bumps into: people, and every part of a buggy or a trolley. */
  bodies: (floor: number) => Body[];
  /** A speech bubble over someone: plain talk or a red yell. */
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
  /** A lightning flash now (it also strikes by itself every half minute or so). */
  strike: () => void;
};

// People currently speaking in an open scene.
export const talking = new WeakSet<Person>();

// ---------------------------------------------------------------- materials
const cache = new Map<string, THREE.Material>();
function std(color: string, roughness = 0.7, metalness = 0, emissive?: string, intensity = 1) {
  const key = `${color}|${roughness}|${metalness}|${emissive}|${intensity}`;
  let m = cache.get(key) as THREE.MeshStandardMaterial | undefined;
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness, metalness });
    if (emissive) { m.emissive.set(emissive); m.emissiveIntensity = intensity; }
    cache.set(key, m);
  }
  return m;
}
function bright(color: string, opacity = 1) {
  const key = `bright|${color}|${opacity}`;
  let m = cache.get(key) as THREE.MeshBasicMaterial | undefined;
  if (!m) { m = new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, toneMapped: false }); cache.set(key, m); }
  return m;
}
function mapped(texture: THREE.Texture, glowing = 0, roughness = 0.6) {
  const m = new THREE.MeshStandardMaterial({ map: texture, roughness });
  if (glowing) { m.emissive.set('#ffffff'); m.emissiveMap = texture; m.emissiveIntensity = glowing; }
  return m;
}
const B = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
const C = (rt: number, rb: number, h: number, seg = 14) => new THREE.CylinderGeometry(rt, rb, h, seg);
function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}
const STEEL = () => std('#b8c0c6', 0.3, 0.8);
const CHROME = () => std('#dfe4e8', 0.15, 0.95);
const DARK = () => std('#24282e', 0.5, 0.3);
const RUBBER = () => std('#141518', 0.9);
const NAVY = () => std('#1f2f5a', 0.45, 0.1);
const BRAND_RED = () => std('#d8302a', 0.45);
const WOOD = () => std('#8a5a34', 0.6);
const WHITE = () => std('#eef0f0', 0.45);
const GLASS = () => {
  const key = 'glass';
  let m = cache.get(key) as THREE.MeshPhysicalMaterial | undefined;
  if (!m) { m = new THREE.MeshPhysicalMaterial({ color: '#cfe6f2', transparent: true, opacity: 0.14, roughness: 0.03, metalness: 0, depthWrite: false }); cache.set(key, m); }
  return m;
};

// ---------------------------------------------------------------- textures
function terrazzo(base: string, chips: string[], seed: number) {
  const rand = random(seed);
  return canvas(512, 512, ctx => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 5200; i++) { ctx.fillStyle = chips[Math.floor(rand() * chips.length)]; ctx.globalAlpha = 0.25 + rand() * 0.5; const s = 1 + rand() * 3.2; ctx.fillRect(rand() * 512, rand() * 512, s, s * (0.6 + rand() * 0.8)); }
    ctx.globalAlpha = 0.5; ctx.strokeStyle = 'rgba(0,0,0,.28)'; ctx.lineWidth = 1.4;
    for (let i = 0; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 256, 0); ctx.lineTo(i * 256, 512); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * 256); ctx.lineTo(512, i * 256); ctx.stroke(); }
    ctx.globalAlpha = 1;
  }, true);
}
function asphalt(seed: number, wet = true) {
  const rand = random(seed);
  return canvas(256, 256, ctx => {
    ctx.fillStyle = '#26282c'; ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 3000; i++) { ctx.fillStyle = rand() < 0.5 ? '#3a3c40' : '#1a1b1e'; ctx.fillRect(rand() * 256, rand() * 256, 1 + rand() * 2, 1 + rand() * 2); }
    if (wet) for (let i = 0; i < 9; i++) { ctx.fillStyle = 'rgba(120,140,170,.10)'; ctx.beginPath(); ctx.ellipse(rand() * 256, rand() * 256, 10 + rand() * 40, 4 + rand() * 12, rand() * 3, 0, Math.PI * 2); ctx.fill(); }
  }, true);
}
function panelTexture(paint: string, seam: string) {
  return canvas(256, 256, ctx => {
    ctx.fillStyle = paint; ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = seam; ctx.lineWidth = 2; ctx.strokeRect(1, 1, 254, 254);
    const g = ctx.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, 'rgba(255,255,255,.06)'); g.addColorStop(1, 'rgba(0,0,0,.08)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 256);
  }, true);
}
function ceilingTexture() {
  return canvas(128, 128, ctx => {
    ctx.fillStyle = '#3a3e44'; ctx.fillRect(0, 0, 128, 128);
    ctx.fillStyle = '#2e3136'; for (let i = 0; i < 8; i++) ctx.fillRect(0, i * 16, 128, 3);
  }, true);
}
function textTexture(text: string, bg: string, fg: string, w = 512, h = 128, font = 'bold 64px "Arial Narrow", Arial, sans-serif', align: CanvasTextAlign = 'center') {
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = fg; ctx.font = font; ctx.textAlign = align; ctx.textBaseline = 'middle';
    let size = Number(/(\d+)px/.exec(font)?.[1] ?? 64);
    while (ctx.measureText(text).width > w * 0.92 && size > 12) { size -= 2; ctx.font = font.replace(/\d+px/, `${size}px`); }
    ctx.fillText(text, align === 'left' ? h * 0.3 : w / 2, h / 2 + 2);
  });
}
// Wayfinding: yellow on charcoal with an arrow, the way airports do it.
function wayTexture(text: string, arrow = '', bg = '#1d2126', fg = '#ffcc00') {
  return canvas(1024, 160, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, 1024, 160);
    ctx.fillStyle = fg; ctx.textBaseline = 'middle';
    ctx.font = 'bold 92px "Arial Narrow", Arial, sans-serif';
    if (arrow) { ctx.textAlign = 'left'; ctx.fillText(arrow, 30, 84); }
    ctx.textAlign = arrow ? 'left' : 'center';
    let size = 78; ctx.font = `bold ${size}px "Arial Narrow", Arial, sans-serif`;
    while (ctx.measureText(text).width > (arrow ? 860 : 960) && size > 30) { size -= 3; ctx.font = `bold ${size}px "Arial Narrow", Arial, sans-serif`; }
    ctx.fillText(text, arrow ? 140 : 512, 84);
  });
}
function sign(parent: THREE.Object3D, text: string, x: number, y: number, z: number, ry: number, width = 3.2, arrow = '', bg?: string, fg?: string) {
  const tex = wayTexture(text, arrow, bg, fg);
  const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, side: THREE.DoubleSide });
  const mesh = add(parent, new THREE.PlaneGeometry(width, width * 160 / 1024), mat, x, y, z, ry);
  return mesh;
}
function hangingSign(parent: THREE.Object3D, text: string, x: number, z: number, ry: number, width = 4.6, arrow = '', y = 4.3) {
  sign(parent, text, x, y, z, ry, width, arrow);
  add(parent, B(width + 0.1, width * 160 / 1024 + 0.1, 0.06), DARK(), x - Math.sin(ry) * 0.04, y, z - Math.cos(ry) * 0.04, ry);
  for (const s of [-1, 1]) add(parent, C(0.012, 0.012, CEILING - y - 0.1, 4), STEEL(), x + Math.cos(ry) * s * width * 0.42, (CEILING + y) / 2 + 0.05, z - Math.sin(ry) * s * width * 0.42);
}
// The Aerobruma logo: a cloud with a red swoosh.
function brandTexture(w = 1024, h = 256, bg = '#1f2f5a', motto = true) {
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    const cx = h * 0.6, cy = h * 0.5, r = h * 0.2;
    ctx.fillStyle = '#ffffff';
    for (const [dx, dy, k] of [[-0.9, 0.2, 0.8], [0, -0.2, 1.1], [0.95, 0.15, 0.85], [0.1, 0.4, 0.9]]) { ctx.beginPath(); ctx.arc(cx + dx * r, cy + dy * r, r * k, 0, Math.PI * 2); ctx.fill(); }
    ctx.strokeStyle = '#d8302a'; ctx.lineWidth = h * 0.06; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(cx - r * 1.6, cy + r * 1.3); ctx.quadraticCurveTo(cx, cy + r * 0.2, cx + r * 1.8, cy - r * 0.9); ctx.stroke();
    ctx.fillStyle = '#ffffff'; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    ctx.font = `bold ${Math.round(h * 0.36)}px "Arial Black", Arial, sans-serif`;
    ctx.fillText(TRIP.airline.toUpperCase(), h * 1.15, motto ? h * 0.42 : h * 0.52);
    if (motto) { ctx.font = `italic ${Math.round(h * 0.15)}px Georgia, serif`; ctx.fillStyle = '#ffd7d4'; ctx.fillText(`«${TRIP.motto}»`, h * 1.18, h * 0.76); }
  });
}
function skyline(seed: number) {
  const rand = random(seed);
  return canvas(1024, 256, ctx => {
    const g = ctx.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, '#0a0f1c'); g.addColorStop(1, '#25243a');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 1024, 256);
    for (let i = 0; i < 46; i++) {
      const x = rand() * 1024, w = 18 + rand() * 50, h = 30 + rand() * 170;
      ctx.fillStyle = '#080b14'; ctx.fillRect(x, 256 - h, w, h);
      for (let k = 0; k < 24; k++) if (rand() < 0.4) { ctx.fillStyle = rand() < 0.8 ? '#ffcf7a' : '#bcd8ff'; ctx.fillRect(x + 3 + rand() * (w - 6), 256 - h + 4 + rand() * (h - 8), 2, 3); }
    }
  });
}
function xrayTexture(seed: number) {
  const rand = random(seed);
  return canvas(256, 192, ctx => {
    ctx.fillStyle = '#081830'; ctx.fillRect(0, 0, 256, 192);
    ctx.fillStyle = '#2a7ad8'; ctx.fillRect(30, 40, 196, 112);
    ctx.fillStyle = '#e88a2a';
    for (let i = 0; i < 8; i++) ctx.fillRect(40 + rand() * 150, 50 + rand() * 80, 10 + rand() * 40, 6 + rand() * 30);
    ctx.fillStyle = '#4ae06a'; ctx.beginPath(); ctx.ellipse(160, 100, 22, 30, 0.3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 16px monospace'; ctx.fillText('CARRIL 2 · REVISIÓN', 34, 24);
  });
}
function adTexture(title: string, sub: string, bg: string, fg = '#ffffff') {
  return canvas(256, 512, ctx => {
    const g = ctx.createLinearGradient(0, 0, 0, 512); g.addColorStop(0, bg); g.addColorStop(1, '#0a0a10');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 512);
    ctx.fillStyle = fg; ctx.textAlign = 'center';
    const words = title.split(' ');
    ctx.font = 'bold 40px "Arial Black", Arial, sans-serif';
    words.forEach((word, i) => ctx.fillText(word, 128, 150 + i * 46));
    ctx.font = 'italic 22px Georgia, serif'; ctx.fillStyle = 'rgba(255,255,255,.8)';
    sub.split('|').forEach((line, i) => ctx.fillText(line, 128, 400 + i * 28));
  });
}
const ADS: [string, string, string][] = [
  ['SEGURO DE VIAJE', 'Por las dudas.|Y por las otras dudas.', '#2a6ac8'],
  ['PERFUMES SIN IMPUESTOS', 'Huele a rico,|paga como rico.', '#8a1a5a'],
  ['CAMBIO HONESTO', 'Casi siempre.', '#2a7a4a'],
  ['AEROBRUMA', 'Volamos|cuando podemos.', '#1f2f5a'],
  ['DORMÍ AQUÍ', 'Sillones con|vista a la pista.', '#5a3a8a'],
  ['EMPANADAS 24 H', 'Primer piso.|Planta de embarque.', '#c86a1a'],
];
// The departures board, redrawn every second: the rows flip, your flight blinks.
type BoardRow = [string, string, string, string, string];
const BOARD: BoardRow[] = [
  ['23:20', 'AB 1180', 'BOGOTÁ', '04', 'CANCELADO'],
  ['23:35', 'IB 6844', 'MADRID', '09', 'DEMORADO 01:40'],
  ['23:40', 'AB 0907', 'LIMA', '06', 'CANCELADO'],
  ['23:55', 'AB 2317', 'CASA', '12', 'CANCELADO'],
  ['00:10', 'LA 2441', 'SANTIAGO', '03', 'DEMORADO'],
  ['00:25', 'AB 3002', 'MONTEVIDEO', '07', 'PUERTA EN OBRAS'],
  ['00:45', 'CM 0418', 'PANAMÁ', '11', 'CANCELADO'],
  ['01:30', 'AB 5150', 'CIUDAD DE MÉXICO', '05', 'CANCELADO'],
  ['05:20', 'AV 0022', 'MIAMI', '02', 'A HORARIO'],
  ['06:10', 'AB 0610', 'CASA', '12', 'PROGRAMADO'],
];
type Board = { tex: THREE.CanvasTexture; ctx: CanvasRenderingContext2D; w: number; h: number; kind: 'fids' | 'gate' };
function makeBoard(w: number, h: number, kind: Board['kind']): Board | null {
  if (typeof document === 'undefined') return null;
  const el = document.createElement('canvas'); el.width = w; el.height = h;
  const tex = new THREE.CanvasTexture(el); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  return { tex, ctx: el.getContext('2d')!, w, h, kind };
}
function drawBoard(b: Board, t: number, clock: string, pass: string) {
  const { ctx, w, h } = b;
  ctx.fillStyle = '#05070b'; ctx.fillRect(0, 0, w, h);
  if (b.kind === 'gate') {
    ctx.fillStyle = '#1f2f5a'; ctx.fillRect(0, 0, w, h * 0.3);
    ctx.fillStyle = '#ffffff'; ctx.font = `bold ${h * 0.18}px "Arial Narrow", Arial`; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    ctx.fillText('PUERTA 12', w * 0.04, h * 0.15);
    ctx.textAlign = 'right'; ctx.fillText(clock, w * 0.96, h * 0.15);
    ctx.textAlign = 'left'; ctx.fillStyle = '#ffcc00'; ctx.font = `bold ${h * 0.2}px "Arial Narrow", Arial`;
    ctx.fillText(`${TRIP.rebooked.flight} · CASA · ${TRIP.rebooked.time}`, w * 0.04, h * 0.48);
    const status = pass === 'abordo' ? 'EMBARQUE CERRADO' : pass === 'espera' ? 'LISTA DE ESPERA' : 'EMBARQUE 05:40';
    ctx.fillStyle = pass === 'abordo' ? '#4ae06a' : Math.floor(t * 1.5) % 2 ? '#ff8a3a' : '#ffffff';
    ctx.fillText(status, w * 0.04, h * 0.74);
    return;
  }
  const head = h / 12;
  ctx.fillStyle = '#ffcc00'; ctx.fillRect(0, 0, w, head * 1.2);
  ctx.fillStyle = '#05070b'; ctx.font = `bold ${head * 0.8}px "Arial Narrow", Arial`; ctx.textBaseline = 'middle';
  ctx.textAlign = 'left'; ctx.fillText('SALIDAS', w * 0.02, head * 0.62);
  ctx.textAlign = 'right'; ctx.fillText(clock, w * 0.98, head * 0.62);
  ctx.font = `${head * 0.42}px "Arial Narrow", Arial`; ctx.textAlign = 'left'; ctx.fillStyle = '#7a8090';
  const cols = [0.02, 0.13, 0.27, 0.6, 0.68];
  ['HORA', 'VUELO', 'DESTINO', 'PTA.', 'ESTADO'].forEach((label, i) => ctx.fillText(label, w * cols[i], head * 1.6));
  BOARD.forEach((row, r) => {
    const y = head * (2.4 + r * 0.95);
    // A flipping row every few seconds: the split-flap shuffle.
    const flipping = Math.floor(t / 3) % BOARD.length === r && (t % 3) < 0.5;
    ctx.fillStyle = r % 2 ? '#0c1018' : '#080b12'; ctx.fillRect(0, y - head * 0.45, w, head * 0.9);
    ctx.font = `bold ${head * 0.62}px "Arial Narrow", Arial`;
    row.forEach((cell, i) => {
      let text = cell;
      let color = '#e8e8e8';
      if (i === 4) {
        const ours = row[1] === TRIP.cancelled.flight;
        const next = row[1] === TRIP.rebooked.flight;
        if (next && pass === 'espera') text = 'LISTA DE ESPERA';
        if (next && pass === 'abordo') text = 'EMBARCANDO';
        color = /CANCELADO/.test(text) ? (ours && Math.floor(t * 2) % 2 ? '#ffffff' : '#ff3b30') : /DEMORADO|OBRAS|ESPERA/.test(text) ? '#ffb020' : '#4ae06a';
        if (ours) { ctx.fillStyle = 'rgba(255,59,48,.18)'; ctx.fillRect(0, y - head * 0.45, w, head * 0.9); }
      }
      if (flipping) text = text.replace(/[A-ZÁÉÍÓÚ0-9]/g, (ch) => String.fromCharCode(65 + ((ch.charCodeAt(0) + Math.floor(t * 30)) % 26)));
      ctx.fillStyle = color; ctx.fillText(text, w * cols[i], y + 1);
    });
  });
}

// ---------------------------------------------------------------- small pieces
function seatRow(g: THREE.Object3D, item: Item, upholstery = '#2a4a8a') {
  const holder = new THREE.Group(); holder.position.set(item.x, 0, item.z); holder.rotation.y = (item.rot ?? 0) * Math.PI / 2; g.add(holder);
  const n = Math.max(2, Math.round(item.w / 0.62));
  const span = n * 0.62;
  add(holder, B(span, 0.08, 0.12), STEEL(), 0, 0.36, -0.05);
  for (const s of [-1, 1]) { add(holder, B(0.06, 0.36, 0.5), STEEL(), s * (span / 2 - 0.2), 0.18, -0.02); add(holder, B(0.5, 0.03, 0.06), STEEL(), s * (span / 2 - 0.2), 0.015, -0.02); }
  const pad = std(upholstery, 0.7);
  for (let i = 0; i < n; i++) {
    const x = -span / 2 + 0.31 + i * 0.62;
    add(holder, B(0.54, 0.07, 0.5), pad, x, 0.45, 0.02);
    add(holder, B(0.54, 0.55, 0.06), pad, x, 0.76, -0.24).rotation.x = -0.12;
    if (i < n - 1) add(holder, B(0.05, 0.18, 0.44), STEEL(), x + 0.31, 0.6, 0);
  }
}
function pew(g: THREE.Object3D, item: Item) {
  // Faces the altar (north, -z).
  add(g, B(item.w, 0.06, 0.45), WOOD(), item.x, 0.45, item.z - 0.05);
  add(g, B(item.w, 0.6, 0.06), WOOD(), item.x, 0.78, item.z + 0.22);
  for (const s of [-1, 1]) add(g, B(0.06, 0.9, 0.55), std('#6a4428', 0.6), item.x + s * item.w / 2, 0.45, item.z);
}
function plantMesh(g: THREE.Object3D, x: number, z: number) {
  add(g, C(0.34, 0.28, 0.6, 16), std('#d8d2c6', 0.6), x, 0.3, z);
  const leaf = std('#2f6a3a', 0.8);
  for (let i = 0; i < 7; i++) { const a = i * 0.9; const l = add(g, new THREE.SphereGeometry(0.22, 8, 6), leaf, x + Math.sin(a) * 0.18, 0.75 + (i % 3) * 0.22, z + Math.cos(a) * 0.18); l.scale.set(1, 1.8, 0.5); l.rotation.y = a; }
}
function suitcaseMesh(color: string, w = 0.42, h = 0.62, d = 0.26) {
  const g = new THREE.Group();
  add(g, B(w, h, d), std(color, 0.45, 0.1), 0, h / 2 + 0.05, 0);
  for (const s of [-1, 1]) add(g, B(0.02, h * 0.9, d + 0.01), std('#1a1a1a', 0.5), s * w * 0.28, h / 2 + 0.05, 0);
  add(g, C(0.035, 0.035, 0.03, 8), RUBBER(), -w * 0.35, 0.035, d * 0.3).rotation.z = Math.PI / 2;
  add(g, C(0.035, 0.035, 0.03, 8), RUBBER(), w * 0.35, 0.035, d * 0.3).rotation.z = Math.PI / 2;
  add(g, B(0.03, 0.45, 0.03), CHROME(), 0, h + 0.27, -d * 0.35);
  add(g, B(0.2, 0.03, 0.03), DARK(), 0, h + 0.5, -d * 0.35);
  return g;
}
const CASE_COLORS = ['#2a4a7a', '#8a1c1c', '#1a1a1e', '#d8a020', '#3a6a4a', '#c8c8c0', '#e05a8a', '#5a3a8a'];
function trolleyMesh(bags = 2, seed = 1) {
  const g = new THREE.Group();
  add(g, B(0.62, 0.05, 0.95), STEEL(), 0, 0.2, 0);
  add(g, B(0.62, 0.9, 0.05), STEEL(), 0, 0.62, -0.46);
  add(g, B(0.66, 0.05, 0.05), DARK(), 0, 1.08, -0.5);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(g, C(0.07, 0.07, 0.05, 10), RUBBER(), sx * 0.27, 0.07, sz * 0.38).rotation.z = Math.PI / 2;
  const rand = random(seed);
  for (let i = 0; i < bags; i++) { const bag = add(g, B(0.55, 0.28, 0.75), std(CASE_COLORS[Math.floor(rand() * CASE_COLORS.length)], 0.5), 0, 0.37 + i * 0.29, 0.02); bag.rotation.y = (rand() - 0.5) * 0.2; }
  return g;
}
function carMesh(color: string, kind: 'taxi' | 'compact' | 'bus' = 'taxi') {
  const g = new THREE.Group();
  if (kind === 'bus') {
    add(g, B(12, 2.6, 2.7), std('#e8eef2', 0.45, 0.2), 0, 1.6, 0);
    add(g, B(11.6, 0.9, 2.74), std('#1a2a3a', 0.05, 0.4), 0, 2.1, 0);
    add(g, B(12.02, 0.25, 2.72), std('#1f2f5a', 0.5), 0, 1.2, 0);
    add(g, new THREE.PlaneGeometry(4.4, 0.5), new THREE.MeshBasicMaterial({ map: textTexture('TERMINAL · ESTACIONAMIENTO', '#1f2f5a', '#ffffff', 512, 64, 'bold 34px Arial'), toneMapped: false }), 0, 1.2, -1.37, Math.PI);
    for (const sx of [-4, 4]) for (const sz of [-1, 1]) add(g, C(0.5, 0.5, 0.35, 16), RUBBER(), sx, 0.5, sz * 1.25).rotation.x = Math.PI / 2;
    add(g, B(0.1, 0.3, 2.2), bright('#fff4d0'), 6.02, 0.9, 0);
    return g;
  }
  const body = std(color, 0.35, 0.35);
  add(g, B(4.4, 0.72, 1.82), body, 0, 0.62, 0);
  add(g, B(2.4, 0.62, 1.66), body, -0.25, 1.28, 0);
  add(g, B(2.3, 0.5, 1.7), std('#18222e', 0.05, 0.4), -0.25, 1.3, 0);
  for (const sx of [-1.4, 1.4]) for (const sz of [-0.9, 0.9]) add(g, C(0.36, 0.36, 0.26, 14), RUBBER(), sx, 0.36, sz).rotation.x = Math.PI / 2;
  add(g, B(0.06, 0.16, 1.4), bright('#fff8e0'), 2.21, 0.72, 0);
  add(g, B(0.06, 0.14, 1.4), bright('#ff2a1a'), -2.21, 0.72, 0);
  if (kind === 'taxi') {
    add(g, B(4.42, 0.12, 1.84), std('#141414', 0.5), 0, 0.74, 0);
    add(g, B(0.7, 0.2, 0.32), std('#ffe060', 0.4, 0, '#ffd020', 1.2), -0.25, 1.69, 0);
    for (const s of [-1, 1]) add(g, new THREE.PlaneGeometry(0.6, 0.18), new THREE.MeshBasicMaterial({ map: textTexture('TAXI', '#ffe060', '#141414', 128, 40, 'bold 30px Arial'), toneMapped: false }), -0.25, 1.69, s * 0.165, s > 0 ? 0 : Math.PI);
  }
  return g;
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
function puff() {
  return canvas(64, 64, ctx => {
    const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30); g.addColorStop(0, 'rgba(230,230,230,.9)'); g.addColorStop(1, 'rgba(230,230,230,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  });
}

// ---------------------------------------------------------------- furniture
function buildItem(g: THREE.Group, item: Item, floor: number, glows: THREE.MeshStandardMaterial[], screens: { board: Board; mesh: THREE.Mesh }[], belts: { x: number; z: number; w: number; d: number; cases: THREE.Object3D[] }[]) {
  const r = (item.rot ?? 0) * Math.PI / 2;
  const turned = item.rot === 1 || item.rot === 3;
  const W = turned ? item.d : item.w, D = turned ? item.w : item.d;
  switch (item.type) {
    case 'seats': seatRow(g, item, floor === 2 ? '#2a4a8a' : floor === 1 ? '#5a2a3a' : '#2a5a5a'); break;
    case 'pew': pew(g, item); break;
    case 'bench': add(g, B(item.w, 0.08, item.d), WOOD(), item.x, 0.45, item.z); for (const s of [-1, 1]) add(g, B(0.08, 0.45, item.d * 0.8), STEEL(), item.x + s * (item.w / 2 - 0.2), 0.22, item.z); break;
    case 'column': {
      add(g, B(item.w, CEILING, item.d), std('#e8e6e0', 0.4), item.x, CEILING / 2, item.z);
      const ad = ADS[Math.abs(Math.round(item.x * 3 + item.z * 7 + floor)) % ADS.length];
      const m = mapped(adTexture(ad[0], ad[1], ad[2]), 0.9);
      glows.push(m);
      for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; add(g, new THREE.PlaneGeometry(item.w * 0.82, 1.7), m, item.x + Math.sin(a) * (item.w / 2 + 0.01), 1.6, item.z + Math.cos(a) * (item.d / 2 + 0.01), a); }
      break;
    }
    case 'plant': plantMesh(g, item.x, item.z); break;
    case 'bin': add(g, C(0.24, 0.22, 0.85, 14), STEEL(), item.x, 0.42, item.z); add(g, C(0.25, 0.25, 0.04, 14), DARK(), item.x, 0.86, item.z); break;
    case 'table': {
      add(g, C(0.42, 0.42, 0.04, 20), std('#f2efe8', 0.35), item.x, 0.76, item.z);
      add(g, C(0.05, 0.05, 0.74, 8), STEEL(), item.x, 0.37, item.z);
      add(g, C(0.3, 0.3, 0.03, 16), STEEL(), item.x, 0.02, item.z);
      for (const s of [-1, 1]) { add(g, C(0.17, 0.17, 0.04, 14), std('#c8501e', 0.6), item.x + s * 0.36, 0.46, item.z); add(g, C(0.03, 0.03, 0.44, 6), STEEL(), item.x + s * 0.36, 0.22, item.z); }
      break;
    }
    case 'lowtable': add(g, B(item.w, 0.05, item.d), std('#2a2a2a', 0.15, 0.3), item.x, 0.42, item.z); add(g, B(item.w * 0.8, 0.4, item.d * 0.6), std('#c8a060', 0.5, 0.4), item.x, 0.2, item.z); add(g, C(0.05, 0.04, 0.12, 8), std('#e8d8a0', 0.2, 0.2), item.x + 0.2, 0.51, item.z); break;
    case 'sofa': {
      const h = new THREE.Group(); h.position.set(item.x, 0, item.z); h.rotation.y = r; g.add(h);
      const fab = std('#6a2a3a', 0.85);
      add(h, B(item.w, 0.42, item.d * 0.7), fab, 0, 0.22, 0.1);
      add(h, B(item.w, 0.6, 0.25), fab, 0, 0.6, -item.d / 2 + 0.13);
      for (const s of [-1, 1]) add(h, B(0.22, 0.6, item.d), fab, s * (item.w / 2 - 0.11), 0.32, 0);
      break;
    }
    case 'checkin': {
      add(g, B(item.w, 1.0, item.d), std('#e8e4dc', 0.45), item.x, 0.5, item.z);
      add(g, B(item.w + 0.1, 0.05, item.d + 0.16), std('#1f2f5a', 0.35), item.x, 1.02, item.z);
      add(g, B(item.w, 0.12, 0.04), BRAND_RED(), item.x, 0.86, item.z + item.d / 2 + 0.02);
      const stations = Math.floor(item.w / 3);
      for (let i = 0; i < stations; i++) {
        const x = item.x - item.w / 2 + 1.5 + i * 3;
        add(g, B(0.48, 0.32, 0.04), DARK(), x, 1.28, item.z - 0.15);
        add(g, B(0.44, 0.28, 0.01), std('#5a8ab0', 0.3, 0, '#3a7ad0', 0.6), x, 1.28, item.z - 0.128);
        // The scale beside each desk: a plate and a red display.
        add(g, B(0.8, 0.1, 0.8), STEEL(), x + 1.1, 0.06, item.z + item.d / 2 - 0.4);
        add(g, B(0.3, 0.12, 0.02), bright('#ff3b30'), x + 1.1, 1.12, item.z + item.d / 2 + 0.01);
        const num = textTexture(String(i + 1).padStart(2, '0'), '#1d2126', '#ffcc00', 128, 64, 'bold 46px "Arial Narrow"');
        add(g, new THREE.PlaneGeometry(0.4, 0.2), new THREE.MeshBasicMaterial({ map: num, toneMapped: false }), x, 1.9, item.z + 0.2);
        add(g, C(0.015, 0.015, 0.8, 4), STEEL(), x, 1.5, item.z + 0.2);
      }
      break;
    }
    case 'belt': {
      add(g, B(item.w, 0.55, item.d), DARK(), item.x, 0.28, item.z);
      add(g, B(item.w, 0.04, item.d - 0.1), RUBBER(), item.x, 0.58, item.z);
      for (let x = item.x - item.w / 2 + 0.5; x < item.x + item.w / 2; x += 1) add(g, B(0.03, 0.02, item.d - 0.12), STEEL(), x, 0.605, item.z);
      break;
    }
    case 'airlinewall': {
      add(g, B(item.w, CEILING - 0.6, item.d), NAVY(), item.x, (CEILING - 0.6) / 2, item.z);
      const brand = mapped(brandTexture(), 0.8, 0.5);
      glows.push(brand);
      add(g, new THREE.PlaneGeometry(12, 3), brand, item.x, 3.6, item.z + item.d / 2 + 0.01);
      for (const s of [-1, 1]) { const m = mapped(textTexture(s < 0 ? 'FACTURACIÓN · MOSTRADORES 01–10' : 'EQUIPAJE ESPECIAL · URNAS · MASCOTAS', '#1d2126', '#ffcc00', 1024, 128, 'bold 64px "Arial Narrow"'), 0.9); glows.push(m); add(g, new THREE.PlaneGeometry(9, 1.1), m, item.x + s * 11, 1.9, item.z + item.d / 2 + 0.01); }
      break;
    }
    case 'servicedesk': {
      add(g, B(item.w, 1.05, item.d), std('#efe9dd', 0.45), item.x, 0.52, item.z);
      add(g, B(item.w + 0.1, 0.06, item.d + 0.2), std('#d8302a', 0.4), item.x, 1.08, item.z);
      for (let i = 0; i < 4; i++) { const x = item.x - item.w / 2 + 3 + i * 6.6; add(g, B(0.5, 0.34, 0.04), DARK(), x, 1.32, item.z - 0.2); add(g, B(0.46, 0.3, 0.01), std('#5a8ab0', 0.3, 0, '#3a7ad0', 0.6), x, 1.32, item.z - 0.178); }
      const m = mapped(textTexture('ATENCIÓN AL PASAJERO · REPROGRAMACIONES', '#1f2f5a', '#ffffff', 1024, 128, 'bold 54px "Arial Narrow"'), 0.9); glows.push(m);
      add(g, new THREE.PlaneGeometry(14, 1.75), m, item.x, 3.4, -13.82);
      const t = mapped(textTexture('TURNO ACTUAL: 7 · SU TURNO: 342', '#05070b', '#ff3b30', 1024, 128, 'bold 60px monospace'), 1); glows.push(t);
      add(g, new THREE.PlaneGeometry(6, 0.75), t, item.x, 2.3, -13.82);
      break;
    }
    case 'queue': {
      // Lanes painted on the floor: nothing to bump into, only where to wait.
      const m = std('#d8b020', 0.6);
      const lanes = Math.max(2, Math.round(item.d / 1.2));
      for (let i = 0; i <= lanes; i++) { const tape = add(g, new THREE.PlaneGeometry(item.w, 0.08), m, item.x, 0.006, item.z - item.d / 2 + i * item.d / lanes); tape.rotation.x = -Math.PI / 2; }
      const txt = textTexture('FILA AQUÍ ↓', '#d8b020', '#141414', 256, 64, 'bold 38px Arial');
      const label = add(g, new THREE.PlaneGeometry(1.6, 0.4), new THREE.MeshStandardMaterial({ map: txt, roughness: 0.6 }), item.x + item.w / 2 - 1, 0.007, item.z + item.d / 2 + 0.4); label.rotation.x = -Math.PI / 2;
      break;
    }
    case 'exchange': {
      add(g, B(item.w, 1.05, item.d), std('#2a5a3a', 0.5), item.x, 0.52, item.z);
      add(g, B(item.w + 0.1, 0.06, item.d + 0.1), std('#c8a040', 0.3, 0.6), item.x, 1.08, item.z);
      add(g, B(item.w, 1.1, 0.03), GLASS(), item.x, 1.65, item.z);
      add(g, B(0.4, 0.04, 0.3), STEEL(), item.x, 1.14, item.z + 0.3);
      const m = mapped(textTexture('CASA DE CAMBIO · MEJOR TASA (DE NUESTRO LADO)', '#2a5a3a', '#ffe08a', 1024, 128, 'bold 46px "Arial Narrow"'), 0.9); glows.push(m);
      add(g, new THREE.PlaneGeometry(5.4, 0.67), m, item.x, 2.55, item.z + 0.04);
      break;
    }
    case 'rates': {
      const tex = canvas(512, 384, ctx => {
        ctx.fillStyle = '#05070b'; ctx.fillRect(0, 0, 512, 384);
        ctx.font = 'bold 30px monospace'; ctx.fillStyle = '#ffcc00'; ctx.fillText('MONEDA    COMPRA   VENTA', 20, 40);
        const rows = [['DÓLAR', '0,62', '1,95'], ['EURO', '0,70', '2,10'], ['PESO', '0,001', '9,99'], ['REAL', '0,11', '0,90'], ['SOL', '0,15', '0,88'], ['LIBRA', '0,80', '2,60']];
        rows.forEach((row, i) => { ctx.fillStyle = '#e8e8e8'; ctx.fillText(row[0].padEnd(10) + row[1].padEnd(9) + row[2], 20, 90 + i * 46); });
        ctx.fillStyle = '#ff3b30'; ctx.font = 'bold 22px monospace'; ctx.fillText('COMISIÓN: SÍ', 20, 370);
      });
      const m = mapped(tex, 1); glows.push(m);
      add(g, new THREE.PlaneGeometry(item.w, item.w * 0.75), m, item.x, 2.6, item.z + 0.2);
      break;
    }
    case 'wallshelf': {
      add(g, B(item.w, 2.4, item.d), std('#3a2e26', 0.6), item.x, 1.2, item.z);
      const rand = random(Math.round(item.x * 13 + floor));
      for (let row = 0; row < 4; row++) for (let x = item.x - item.w / 2 + 0.25; x < item.x + item.w / 2 - 0.2; x += 0.22 + rand() * 0.1) {
        const h = 0.18 + rand() * 0.2;
        add(g, B(0.15, h, 0.15), std(['#d8a020', '#8a1c1c', '#2a6ac8', '#e8e0d0', '#3a8a4a', '#e05a8a'][Math.floor(rand() * 6)], 0.4, 0.1), x, 0.25 + row * 0.55 + h / 2, item.z + item.d / 2 - 0.14);
      }
      break;
    }
    case 'shelf': {
      add(g, B(item.w, 1.8, item.d), std('#efece6', 0.5), item.x, 0.9, item.z);
      const rand = random(Math.round(item.x * 7 + item.z));
      for (const side of [-1, 1]) for (let row = 0; row < 3; row++) for (let x = item.x - item.w / 2 + 0.2; x < item.x + item.w / 2 - 0.15; x += 0.24) {
        const tall = rand() < 0.5;
        const m = std(['#c8901e', '#5a2a1a', '#2a5a3a', '#d8d8d0', '#8a1c5a', '#1a2a5a'][Math.floor(rand() * 6)], 0.15, 0.2);
        if (tall) add(g, C(0.05, 0.06, 0.32, 8), m, x, 0.35 + row * 0.55, item.z + side * (item.d / 2 + 0.06));
        else add(g, B(0.16, 0.22, 0.1), m, x, 0.3 + row * 0.55, item.z + side * (item.d / 2 + 0.06));
      }
      break;
    }
    case 'tower': {
      for (let level = 0; level < 5; level++) { const s = item.w * (1 - level * 0.18); add(g, B(s, 0.4, s), std(level % 2 ? '#c8901e' : '#5a2a1a', 0.3, 0.2), item.x, 0.2 + level * 0.4, item.z); }
      add(g, C(0.08, 0.1, 0.5, 10), std('#e8c060', 0.1, 0.6, '#c89020', 0.4), item.x, 2.25, item.z);
      break;
    }
    case 'perfume': {
      add(g, B(item.w, 1.0, item.d), std('#141418', 0.2, 0.3), item.x, 0.5, item.z);
      add(g, B(item.w + 0.05, 0.04, item.d + 0.05), std('#f4f0e8', 0.2), item.x, 1.02, item.z);
      const rand = random(77);
      for (let i = 0; i < 12; i++) add(g, C(0.04, 0.05, 0.12 + rand() * 0.1, 8), std(['#f0c8d8', '#d8e8f8', '#f8e8a0', '#c8f0e0'][i % 4], 0.05, 0.3), item.x - item.w / 2 + 0.3 + i * 0.34, 1.1, item.z + (i % 2 ? 0.2 : -0.15));
      const m = mapped(textTexture('PERFUMES · FRAGANCIAS · SIN IMPUESTOS', '#141418', '#f0d8a0', 1024, 128, 'italic 52px Georgia'), 0.9); glows.push(m);
      add(g, new THREE.PlaneGeometry(4.4, 0.55), m, item.x, 0.62, item.z + item.d / 2 + 0.01);
      break;
    }
    case 'chocolates': {
      add(g, B(item.w, 0.85, item.d), std('#6a3a1e', 0.6), item.x, 0.42, item.z);
      for (let i = 0; i < 6; i++) { const bar = add(g, new THREE.CylinderGeometry(0.11, 0.11, 0.9, 3), std(i % 2 ? '#f0c020' : '#d8302a', 0.5), item.x - 1.1 + i * 0.44, 0.97, item.z); bar.rotation.z = Math.PI / 2; }
      break;
    }
    case 'vipdesk': {
      add(g, B(item.w, 1.05, item.d), std('#1a1a1e', 0.2, 0.4), item.x, 0.52, item.z);
      add(g, B(item.w + 0.1, 0.05, item.d + 0.1), std('#c8a040', 0.25, 0.7), item.x, 1.07, item.z);
      add(g, B(0.4, 0.28, 0.04), DARK(), item.x - 0.8, 1.26, item.z - 0.2);
      const m = mapped(textTexture('SALA VIP · SOLO MIEMBROS', '#1a1a1e', '#c8a040', 1024, 128, 'bold 60px Georgia'), 0.8); glows.push(m);
      add(g, new THREE.PlaneGeometry(item.w, 0.45), m, item.x, 0.7, item.z + item.d / 2 + 0.01);
      break;
    }
    case 'bar': {
      add(g, B(item.w, 1.08, item.d), std('#3a2418', 0.4), item.x, 0.54, item.z);
      add(g, B(item.w + 0.1, 0.05, item.d + 0.15), std('#e8e0d0', 0.15, 0.1), item.x, 1.1, item.z);
      add(g, B(item.w, 2.2, 0.3), std('#1a1410', 0.5), item.x, 1.9, -29.7);
      for (let i = 0; i < 24; i++) add(g, C(0.04, 0.045, 0.3, 8), std(['#3a7a3a', '#c89020', '#7a1a1a', '#e8e8e8'][i % 4], 0.1, 0.2, i % 5 === 0 ? '#ffb040' : undefined, 0.3), item.x - item.w / 2 + 0.3 + (i % 12) * 0.72, 1.4 + Math.floor(i / 12) * 0.7, -29.45);
      break;
    }
    case 'aquarium': {
      add(g, B(item.w, 0.9, item.d), std('#1a1a1e', 0.4), item.x, 0.45, item.z);
      const water = std('#2a8ab8', 0.05, 0, '#1a6a9a', 0.8); glows.push(water);
      add(g, B(item.w * 0.9, 1.6, item.d * 0.96), water, item.x, 1.7, item.z);
      for (let i = 0; i < 9; i++) add(g, new THREE.SphereGeometry(0.06, 6, 4), std(['#ff8a2a', '#ffd020', '#ff4a8a'][i % 3], 0.4, 0, '#ff6a2a', 0.4), item.x, 1.2 + (i % 4) * 0.3, item.z - 2.4 + i * 0.6).scale.set(0.5, 0.8, 1.6);
      break;
    }
    case 'ashtray': add(g, C(0.22, 0.25, 1.0, 12), STEEL(), item.x, 0.5, item.z); add(g, C(0.2, 0.2, 0.02, 12), std('#d8c8a0', 1), item.x, 1.0, item.z); break;
    case 'altar': {
      add(g, B(item.w, 0.95, item.d), std('#e8dcc8', 0.6), item.x, 0.48, item.z);
      for (let i = 0; i < 14; i++) {
        const x = item.x - item.w / 2 + 0.25 + (i % 7) * 0.58, z = item.z + (i < 7 ? -0.15 : 0.15);
        add(g, C(0.03, 0.03, 0.14 + (i % 3) * 0.06, 8), std('#f4f0e6', 0.6), x, 1.02 + (i % 3) * 0.03, z);
        const flame = std('#ffb040', 0.4, 0, '#ff9a20', 2.4); flame.userData.candle = i; glows.push(flame);
        add(g, new THREE.SphereGeometry(0.018, 6, 4), flame, x, 1.13 + (i % 3) * 0.06, z).scale.set(1, 2, 1);
      }
      // A window of coloured glass with no symbol of any one faith.
      const glass = canvas(256, 512, ctx => {
        const cols = ['#d8302a', '#2a6ac8', '#f0c020', '#3a8a4a', '#8a3ac8', '#e87a2a'];
        for (let y = 0; y < 512; y += 64) for (let x = 0; x < 256; x += 64) { ctx.fillStyle = cols[(x / 64 + y / 64 * 3) % cols.length]; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 64, y + (y % 128 ? 20 : 40)); ctx.lineTo(x + 50, y + 64); ctx.lineTo(x, y + 50); ctx.fill(); }
        ctx.strokeStyle = '#1a1410'; ctx.lineWidth = 5; for (let y = 0; y < 512; y += 64) for (let x = 0; x < 256; x += 64) ctx.strokeRect(x, y, 64, 64);
      });
      const m = mapped(glass, 1.1); glows.push(m);
      add(g, new THREE.PlaneGeometry(2.4, 4.4), m, item.x, 3.3, -13.83);
      break;
    }
    case 'foodstall': {
      // The cook stands on the wall side (west); the counter faces east.
      add(g, B(item.w, 1.05, item.d), std('#c86a1a', 0.5), item.x, 0.52, item.z);
      add(g, B(item.w + 0.2, 0.06, item.d + 0.1), std('#f2efe8', 0.3), item.x, 1.08, item.z);
      add(g, B(0.4, 0.3, item.d * 0.8), GLASS(), item.x + 0.1, 1.28, item.z);
      for (let i = 0; i < 10; i++) add(g, new THREE.SphereGeometry(0.09, 8, 6), std('#d8a040', 0.6), item.x + 0.1, 1.17, item.z - item.d * 0.35 + i * item.d * 0.07).scale.set(1.6, 0.5, 1);
      const names = item.z < 0 ? ['EMPANADAS DOÑA MARISOL', 'Carne · Pollo · Humita · Café de olla'] : ['SUSHI 24 H', 'Pescado del día (de algún día)'];
      const menu = canvas(1024, 384, ctx => { ctx.fillStyle = item.z < 0 ? '#3a1a0a' : '#0a1a2a'; ctx.fillRect(0, 0, 1024, 384); ctx.fillStyle = '#ffd08a'; ctx.font = 'bold 84px "Arial Narrow"'; ctx.textAlign = 'center'; ctx.fillText(names[0], 512, 140); ctx.font = 'italic 46px Georgia'; ctx.fillStyle = '#ffffff'; ctx.fillText(names[1], 512, 260); });
      const m = mapped(menu, 1); glows.push(m);
      add(g, new THREE.PlaneGeometry(item.d, item.d * 0.375), m, -47.8, 3.2, item.z, Math.PI / 2);
      break;
    }
    case 'cafebar': {
      add(g, B(item.w, 1.05, item.d), std('#2a1a12', 0.5), item.x, 0.52, item.z);
      add(g, B(item.w + 0.1, 0.06, item.d + 0.15), std('#e8e0d0', 0.2), item.x, 1.08, item.z);
      add(g, B(0.7, 0.5, 0.45), CHROME(), item.x - 2, 1.36, item.z - 0.2);
      for (let i = 0; i < 5; i++) add(g, new THREE.SphereGeometry(0.12, 10, 8), std(['#d89a5a', '#f0e0c0', '#7a3a1a'][i % 3], 0.6), item.x + 0.4 + i * 0.4, 1.18, item.z + 0.1).scale.set(1, 0.6, 1);
      const m = mapped(textTexture('CAFÉ DE LLEGADAS · ABIERTO 24 H', '#2a1a12', '#ffd08a', 1024, 128, 'bold 56px Georgia'), 0.9); glows.push(m);
      add(g, new THREE.PlaneGeometry(item.w, 0.85), m, item.x, 2.9, item.z - 0.4);
      add(g, B(item.w, 0.06, 0.6), DARK(), item.x, 3.4, item.z - 0.4);
      break;
    }
    case 'rentdesk': {
      add(g, B(item.w, 1.05, item.d), std('#e8e8e4', 0.4), item.x, 0.52, item.z);
      add(g, B(item.w + 0.15, 0.06, item.d + 0.1), std('#2a2a2a', 0.3), item.x, 1.08, item.z);
      const brands: [string, string][] = [['AUTOS YA', '#d8302a'], ['RUEDA LIBRE', '#2a8a4a'], ['MÓVIL PLUS', '#2a6ac8']];
      brands.forEach(([name, color], i) => {
        const z = item.z - item.d / 2 + item.d / 6 + i * item.d / 3;
        const m = mapped(textTexture(name, color, '#ffffff', 512, 128, 'bold 64px "Arial Black"'), 0.9); glows.push(m);
        add(g, new THREE.PlaneGeometry(3.4, 0.85), m, 47.82, 3, z, -Math.PI / 2);
        add(g, new THREE.PlaneGeometry(item.d / 3.2, 0.36), m, item.x - item.w / 2 - 0.01, 0.75, z, -Math.PI / 2);
        add(g, B(0.04, 0.3, 0.45), DARK(), item.x, 1.26, z);
      });
      // The key board: every hook empty but one.
      const keys = canvas(512, 256, ctx => { ctx.fillStyle = '#c8b89a'; ctx.fillRect(0, 0, 512, 256); for (let i = 0; i < 24; i++) { const x = 40 + (i % 8) * 60, y = 50 + Math.floor(i / 8) * 70; ctx.fillStyle = '#5a4a3a'; ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill(); if (i === 13) { ctx.fillStyle = '#e05a8a'; ctx.fillRect(x - 8, y + 6, 16, 30); } } ctx.fillStyle = '#2a2a2a'; ctx.font = 'bold 24px Arial'; ctx.fillText('LLAVES', 210, 240); });
      add(g, new THREE.PlaneGeometry(2.4, 1.2), mapped(keys), 47.82, 1.7, item.z + 4.4, -Math.PI / 2);
      break;
    }
    case 'showcar': {
      const car = carMesh('#e05a8a', 'compact');
      car.rotation.y = Math.PI / 2; car.position.set(item.x, 0.02, item.z); car.scale.set(0.86, 0.86, 0.86); g.add(car);
      const m = mapped(textTexture('ÚLTIMO AUTO DISPONIBLE', '#ffcc00', '#141414', 512, 96, 'bold 44px "Arial Narrow"'), 0.6); glows.push(m);
      add(g, new THREE.PlaneGeometry(1.8, 0.34), m, item.x, 1.62, item.z + 0.4, Math.PI / 2);
      break;
    }
    case 'carousel': {
      // An oval belt of steel plates around a central island; cases ride it.
      const shape = new THREE.Shape();
      const rx = item.w / 2, rz = item.d / 2, rr = rz;
      shape.moveTo(-rx + rr, -rz); shape.lineTo(rx - rr, -rz); shape.absarc(rx - rr, 0, rr, -Math.PI / 2, Math.PI / 2, false);
      shape.lineTo(-rx + rr, rz); shape.absarc(-rx + rr, 0, rr, Math.PI / 2, Math.PI * 1.5, false);
      const base = new THREE.ExtrudeGeometry(shape, { depth: 0.5, bevelEnabled: false, curveSegments: 18 });
      base.rotateX(Math.PI / 2); base.translate(0, 0.5, 0);
      add(g, base, std('#9aa2aa', 0.35, 0.6), item.x, 0, item.z);
      const top = new THREE.ShapeGeometry(shape, 18); top.rotateX(Math.PI / 2);
      add(g, top, std('#55606a', 0.3, 0.7), item.x, 0.51, item.z).scale.set(1, 1, 1);
      add(g, B(item.w - item.d - 0.4, 0.9, 0.9), std('#c8ccd0', 0.4, 0.5), item.x, 0.45 + 0.07, item.z);
      add(g, B(item.w - item.d - 0.6, 0.04, 1.0), RUBBER(), item.x, 0.98, item.z);
      const cases: THREE.Object3D[] = [];
      const rand = random(Math.round(item.z * 10));
      for (let i = 0; i < 9; i++) { const c = suitcaseMesh(CASE_COLORS[Math.floor(rand() * CASE_COLORS.length)], 0.5, 0.26, 0.7); c.children.slice(-2).forEach(ch => ch.removeFromParent()); g.add(c); cases.push(c); }
      belts.push({ x: item.x, z: item.z, w: item.w, d: item.d, cases });
      const num = mapped(textTexture(item.z < -18 ? 'CINTA 3 · AB 2290 · LIMA' : 'CINTA 4 · AB 0907 · BOGOTÁ', '#1d2126', '#ffcc00', 1024, 128, 'bold 62px "Arial Narrow"'), 1); glows.push(num);
      add(g, new THREE.PlaneGeometry(4.8, 0.6), num, item.x, 3.6, item.z, 0);
      add(g, new THREE.PlaneGeometry(4.8, 0.6), num, item.x, 3.6, item.z, Math.PI);
      add(g, C(0.02, 0.02, CEILING - 3.9, 4), STEEL(), item.x - 2, (CEILING + 3.9) / 2, item.z);
      add(g, C(0.02, 0.02, CEILING - 3.9, 4), STEEL(), item.x + 2, (CEILING + 3.9) / 2, item.z);
      break;
    }
    case 'trolleys': {
      const along = item.d > item.w;
      const n = Math.max(2, Math.round((along ? item.d : item.w) / 0.42));
      for (let i = 0; i < n; i++) { const t = trolleyMesh(0); const k = -((along ? item.d : item.w) / 2) + 0.3 + i * 0.42; t.position.set(item.x + (along ? 0 : k), 0, item.z + (along ? k : 0)); t.rotation.y = along ? 0 : Math.PI / 2; g.add(t); }
      break;
    }
    case 'screen': {
      add(g, B(item.w, 1.4, 0.2), DARK(), item.x, 3.6, item.z);
      const m = mapped(textTexture('EQUIPAJE · CINTA 3: LIMA · CINTA 4: BOGOTÁ · CINTA 5: ¿?', '#05070b', '#ffcc00', 1024, 128, 'bold 50px monospace'), 1); glows.push(m);
      add(g, new THREE.PlaneGeometry(item.w - 0.2, 1.2), m, item.x, 3.6, item.z + 0.11);
      break;
    }
    case 'desk': {
      add(g, B(item.w, 1.05, item.d), std('#d8cfbe', 0.5), item.x, 0.52, item.z);
      add(g, B(item.w + 0.1, 0.05, item.d + 0.12), std('#5a4a3a', 0.4), item.x, 1.07, item.z);
      add(g, B(0.5, 0.34, 0.04), DARK(), item.x - 2.2, 1.28, item.z - 0.2);
      add(g, B(0.3, 0.06, 0.4), std('#f4f0e0', 0.8), item.x + 1.4, 1.12, item.z);
      add(g, new THREE.PlaneGeometry(4, 0.5), mapped(textTexture('TOME UN FORMULARIO · O CUATRO', '#d8cfbe', '#3a2a1a', 1024, 128, 'bold 56px Arial')), item.x, 0.7, item.z + item.d / 2 + 0.01);
      break;
    }
    case 'luggageshelf': {
      add(g, B(item.w, 0.05, item.d), STEEL(), item.x, 0.02, item.z);
      for (let level = 0; level < 3; level++) add(g, B(item.w, 0.05, item.d), STEEL(), item.x, 0.9 + level * 0.9, item.z);
      for (let x = item.x - item.w / 2; x <= item.x + item.w / 2 + 0.01; x += 2) add(g, B(0.05, 2.8, item.d), STEEL(), x, 1.4, item.z);
      const rand = random(311);
      for (let level = 0; level < 4; level++) for (let x = item.x - item.w / 2 + 0.4; x < item.x + item.w / 2 - 0.3; x += 0.55 + rand() * 0.25) {
        const c = suitcaseMesh(CASE_COLORS[Math.floor(rand() * CASE_COLORS.length)], 0.42, 0.5 + rand() * 0.2, 0.26);
        c.position.set(x, level * 0.9 + 0.03, item.z); c.rotation.y = (rand() - 0.5) * 0.3; g.add(c);
      }
      // A wedding dress in a garment bag, hanging at the end with a tag.
      add(g, B(0.7, 1.5, 0.12), std('#f4f0ea', 0.8), item.x + item.w / 2 - 0.8, 2.6, item.z + item.d / 2 + 0.12);
      add(g, B(0.16, 0.1, 0.01), std('#ffcc00', 0.6), item.x + item.w / 2 - 0.6, 2.2, item.z + item.d / 2 + 0.19);
      break;
    }
    case 'suitcases': {
      const rand = random(Math.round(item.x * 5 + item.z * 3));
      for (let i = 0; i < 7; i++) { const c = suitcaseMesh(CASE_COLORS[i % CASE_COLORS.length], 0.5, 0.3, 0.7); c.children.slice(-2).forEach(ch => ch.removeFromParent()); c.position.set(item.x + (rand() - 0.5) * (item.w - 0.8), Math.floor(i / 3) * 0.32, item.z + (rand() - 0.5) * (item.d - 0.8)); c.rotation.y = rand() * Math.PI; g.add(c); }
      break;
    }
    case 'inspect': {
      add(g, B(item.w, 0.06, item.d), STEEL(), item.x, 0.88, item.z);
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(g, B(0.06, 0.86, 0.06), STEEL(), item.x + sx * (item.w / 2 - 0.1), 0.43, item.z + sz * (item.d / 2 - 0.1));
      if (Math.abs(item.x - 28) < 0.1 && floor === 0) {
        // Doña Carmela's luggage: an open suitcase full of cheese, and the parrot.
        const open = suitcaseMesh('#8a1c1c', 0.9, 0.18, 0.6); open.position.set(item.x - 0.6, 0.91, item.z); open.children.slice(-2).forEach(ch => ch.removeFromParent()); g.add(open);
        for (let i = 0; i < 6; i++) add(g, C(0.13, 0.13, 0.09, 16), std('#f0d070', 0.6), item.x - 0.85 + (i % 3) * 0.26, 1.18, item.z - 0.12 + Math.floor(i / 3) * 0.26);
        for (let i = 0; i < 6; i++) add(g, C(0.13, 0.13, 0.09, 16), std('#e8c060', 0.6), item.x + 0.4 + (i % 2) * 0.27, 0.96 + Math.floor(i / 2) * 0.09, item.z + 0.2);
        const cage = new THREE.Group(); cage.position.set(item.x + 1.1, 0.91, item.z - 0.2); g.add(cage);
        add(cage, C(0.22, 0.22, 0.04, 14), std('#c8a040', 0.4, 0.6), 0, 0.02, 0);
        for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; add(cage, C(0.006, 0.006, 0.5, 4), std('#c8a040', 0.4, 0.6), Math.sin(a) * 0.21, 0.27, Math.cos(a) * 0.21); }
        add(cage, new THREE.SphereGeometry(0.22, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), std('#c8a040', 0.4, 0.6, undefined, 1), 0, 0.5, 0).scale.set(1, 0.4, 1);
        add(cage, new THREE.SphereGeometry(0.08, 10, 8), std('#2aa84a', 0.5), 0, 0.22, 0).scale.set(0.8, 1.3, 0.9);
        add(cage, new THREE.SphereGeometry(0.05, 10, 8), std('#d8302a', 0.5), 0, 0.33, 0.02);
        add(cage, new THREE.ConeGeometry(0.02, 0.05, 6), std('#f0c020', 0.4), 0, 0.32, 0.07).rotation.x = Math.PI / 2;
      }
      break;
    }
    case 'xray': {
      const h = new THREE.Group(); h.position.set(item.x, 0, item.z); h.rotation.y = r; g.add(h);
      add(h, B(item.w, 1.4, item.d * 0.55), std('#d8dcd8', 0.4), 0, 0.95, 0);
      add(h, B(item.w * 0.8, 0.5, 0.02), std('#141414', 0.4), 0, 0.6, item.d * 0.276);
      add(h, B(item.w * 0.8, 0.5, 0.02), std('#141414', 0.4), 0, 0.6, -item.d * 0.276);
      add(h, B(item.w * 0.7, 0.05, item.d), RUBBER(), 0, 0.42, 0);
      add(h, B(item.w * 0.75, 0.4, item.d), DARK(), 0, 0.2, 0);
      add(h, B(item.w * 0.3, 0.1, 0.2), std('#ff3b30', 0.3, 0, '#ff0000', 1.5), 0, 1.7, 0);
      break;
    }
    case 'arch': {
      add(g, B(0.16, 2.2, item.d), std('#d8dcd8', 0.4), item.x - item.w / 2 + 0.08, 1.1, item.z);
      add(g, B(0.16, 2.2, item.d), std('#d8dcd8', 0.4), item.x + item.w / 2 - 0.08, 1.1, item.z);
      add(g, B(item.w, 0.22, item.d), std('#d8dcd8', 0.4), item.x, 2.31, item.z);
      const lamp = std('#4ae06a', 0.3, 0, '#20d040', 1.6); glows.push(lamp); lamp.userData.arch = Math.round(item.x);
      add(g, B(0.1, 0.1, 0.1), lamp, item.x, 2.47, item.z);
      break;
    }
    case 'trays': {
      add(g, B(item.w, 0.85, item.d), std('#c8ccd0', 0.4, 0.4), item.x, 0.42, item.z);
      for (let i = 0; i < 6; i++) add(g, B(0.55, 0.1, 0.4), std('#6a7078', 0.6), item.x, 0.9 + i * 0.1, item.z - 0.4);
      add(g, B(0.55, 0.1, 0.4), std('#6a7078', 0.6), item.x, 0.9, item.z + 0.35);
      if (Math.abs(item.x - 30) < 0.1) add(g, C(0.07, 0.07, 0.14, 12), std('#a86a2a', 0.3, 0, '#5a2a0a', 0.2), item.x + 0.1, 1.02, item.z + 0.35);
      break;
    }
    case 'xscreen': {
      add(g, B(item.w, 0.75, item.d), DARK(), item.x, 0.38, item.z);
      add(g, B(0.04, 0.4, 0.5), DARK(), item.x, 0.95, item.z);
      const m = mapped(xrayTexture(Math.round(item.x)), 1); glows.push(m);
      add(g, new THREE.PlaneGeometry(0.48, 0.36), m, item.x + 0.03, 0.95, item.z, Math.PI / 2);
      break;
    }
    case 'binpile': for (let i = 0; i < 9; i++) add(g, B(0.55, 0.1, 0.4), std('#6a7078', 0.6), item.x, 0.06 + i * 0.12, item.z); break;
    case 'cage': add(g, B(item.w, 0.9, item.d), std('#5a5a5a', 0.6, 0.5), item.x, 0.45, item.z); add(g, new THREE.PlaneGeometry(0.8, 0.3), mapped(textTexture('UNIDAD CANINA', '#1d2126', '#ffcc00', 256, 96, 'bold 40px Arial')), item.x - item.w / 2 - 0.01, 1.2, item.z, -Math.PI / 2); break;
    case 'rail': {
      for (let x = item.x - item.w / 2; x <= item.x + item.w / 2 + 0.01; x += 2) add(g, C(0.04, 0.04, 1.0, 8), CHROME(), x, 0.5, item.z);
      add(g, C(0.035, 0.035, item.w, 8), CHROME(), item.x, 1.0, item.z).rotation.z = Math.PI / 2;
      add(g, C(0.02, 0.02, item.w, 6), CHROME(), item.x, 0.55, item.z).rotation.z = Math.PI / 2;
      break;
    }
    case 'flowers': {
      add(g, B(item.w, 0.8, item.d), std('#3a7a4a', 0.6), item.x, 0.4, item.z);
      const rand = random(55);
      for (let i = 0; i < 26; i++) add(g, new THREE.SphereGeometry(0.07, 6, 5), std(['#e8287a', '#ffd23f', '#ffffff', '#ff6a2a', '#a84ae0'][i % 5], 0.6), item.x - item.w / 2 + 0.2 + rand() * (item.w - 0.4), 0.92 + rand() * 0.2, item.z - item.d / 2 + 0.2 + rand() * (item.d - 0.4));
      const m = mapped(textTexture('FLORES PARA EL QUE LLEGA', '#3a7a4a', '#ffffff', 512, 96, 'bold 40px Georgia'), 0.6); glows.push(m);
      add(g, new THREE.PlaneGeometry(item.w, 0.42), m, item.x, 0.55, item.z + item.d / 2 + 0.01);
      break;
    }
    case 'taxi': case 'bus': {
      const car = carMesh('#f0c020', item.type === 'bus' ? 'bus' : 'taxi');
      car.position.set(item.x, 0, item.z); car.rotation.y = r; g.add(car);
      break;
    }
    case 'bollard': add(g, C(0.15, 0.17, 0.9, 12), std('#3a3e44', 0.5, 0.4), item.x, 0.45, item.z); add(g, C(0.16, 0.16, 0.08, 12), std('#ffcc00', 0.5), item.x, 0.78, item.z); break;
    case 'canopy': {
      add(g, B(item.w, 0.4, item.d), std('#d8dcdf', 0.4, 0.4), item.x, 6.2, item.z);
      for (let x = -42; x <= 42; x += 6) { const lamp = std('#ffffff', 0.4, 0, '#fff0d0', 1.6); glows.push(lamp); add(g, B(1.6, 0.05, 0.3), lamp, x, 5.98, item.z); }
      break;
    }
    case 'fids': {
      // A wide board (13 × 3.8 m) hanging between the doors and the halls.
      const bh = 3.8, by = 4.05; // bottom edge at 2.15 m: nobody's head reaches it
      const board = makeBoard(1300, 380, 'fids');
      add(g, B(item.w + 0.3, bh + 0.3, 0.4), DARK(), item.x, by, item.z);
      if (board) {
        const mat = new THREE.MeshBasicMaterial({ map: board.tex, toneMapped: false });
        for (const s of [-1, 1]) { const mesh = add(g, new THREE.PlaneGeometry(item.w, bh), mat, item.x, by, item.z + s * 0.21, s > 0 ? 0 : Math.PI); screens.push({ board, mesh }); }
      }
      for (const s of [-1, 1]) add(g, C(0.03, 0.03, CEILING - 6.1 + 2.6, 4), STEEL(), item.x + s * item.w * 0.4, CEILING - 0.6, item.z);
      break;
    }
    case 'gatescreen': {
      const board = makeBoard(512, 256, 'gate');
      add(g, B(item.w + 0.2, item.w * 0.5 + 0.2, 0.1), DARK(), item.x, 3.2, item.z);
      if (board) { const mesh = add(g, new THREE.PlaneGeometry(item.w, item.w * 0.5), new THREE.MeshBasicMaterial({ map: board.tex, toneMapped: false }), item.x, 3.2, item.z - 0.06, Math.PI); screens.push({ board, mesh }); }
      break;
    }
    case 'podium': {
      add(g, B(item.w, 1.05, item.d), std('#1f2f5a', 0.4), item.x, 0.52, item.z);
      add(g, B(item.w + 0.1, 0.05, item.d + 0.1), std('#e8e8e4', 0.3), item.x, 1.07, item.z);
      add(g, B(0.4, 0.3, 0.04), DARK(), item.x + 0.6, 1.26, item.z + 0.15);
      add(g, new THREE.PlaneGeometry(item.w, 0.45), mapped(brandTexture(512, 128, '#1f2f5a', false), 0.6), item.x, 0.7, item.z - item.d / 2 - 0.01, Math.PI);
      break;
    }
    case 'charging': {
      add(g, B(item.w * 0.6, 1.3, item.d * 0.6), std('#2a2e34', 0.4, 0.4), item.x, 0.65, item.z);
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; add(g, B(0.08, 0.15, 0.01), std('#141414', 0.3, 0, '#4ae06a', 0.4), item.x + Math.sin(a) * 0.31, 1.0, item.z + Math.cos(a) * 0.31, a); }
      add(g, new THREE.PlaneGeometry(0.58, 0.2), mapped(textTexture('CARGA AQUÍ · 3%', '#1d2126', '#4ae06a', 256, 80, 'bold 34px Arial'), 0.8), item.x, 1.2, item.z + 0.305);
      break;
    }
    case 'kiosk': {
      add(g, B(item.w, 1.0, item.d * 0.6), std('#e8e8e4', 0.4), item.x, 0.5, item.z);
      const screen = add(g, B(item.w * 0.9, 0.6, 0.06), std('#1f2f5a', 0.3, 0, '#3a6ad0', 0.5), item.x, 1.3, item.z + 0.1);
      screen.rotation.x = -0.3;
      add(g, new THREE.PlaneGeometry(item.w * 0.8, 0.18), mapped(textTexture('AUTOSERVICIO · FUERA DE SERVICIO', '#141414', '#ff3b30', 512, 96, 'bold 30px Arial'), 1), item.x, 1.72, item.z + 0.06);
      break;
    }
    case 'newsstand': {
      add(g, B(item.w, 2.4, item.d), std('#2a3a5a', 0.5), item.x, 1.2, item.z);
      const rand = random(91);
      for (let i = 0; i < 18; i++) add(g, new THREE.PlaneGeometry(0.22, 0.3), std(['#d8302a', '#f0c020', '#2a6ac8', '#e8e8e8', '#3a8a4a'][Math.floor(rand() * 5)], 0.6), item.x - item.w / 2 + 0.3 + (i % 9) * 0.6, 0.8 + Math.floor(i / 9) * 0.5, item.z + item.d / 2 + 0.01);
      const m = mapped(textTexture('DIARIOS · REVISTAS · ALMOHADAS DE CUELLO', '#2a3a5a', '#ffffff', 1024, 128, 'bold 52px "Arial Narrow"'), 0.9); glows.push(m);
      add(g, new THREE.PlaneGeometry(item.w, 0.6), m, item.x, 2.1, item.z + item.d / 2 + 0.01);
      break;
    }
    case 'shopfront': {
      const m = mapped(textTexture('FARMACIA · ABIERTA (A VECES)', '#2a8a4a', '#ffffff', 1024, 128, 'bold 56px "Arial Narrow"'), 0.9); glows.push(m);
      add(g, new THREE.PlaneGeometry(item.w, 1), m, item.x, 3.4, item.z + 0.21);
      break;
    }
    case 'atm': add(g, B(item.w, 1.7, item.d), std('#3a4048', 0.4, 0.4), item.x, 0.85, item.z); add(g, B(0.04, 0.3, 0.4), std('#3a7ad0', 0.3, 0, '#3a7ad0', 0.7), item.x + item.w / 2 + 0.01, 1.3, item.z); break;
    case 'camp': {
      // Esteban's home: a blanket, a pillow, a trolley as a wardrobe and a sign.
      const blanket = add(g, B(item.w * 0.7, 0.06, item.d * 0.6), std('#8a3a2a', 0.95), item.x + 0.3, 0.03, item.z + 0.2);
      blanket.rotation.y = 0.1;
      add(g, B(0.6, 0.12, 0.35), std('#e8e0d0', 0.9), item.x - 0.6, 0.09, item.z + 0.2);
      const note = mapped(textTexture('HOGAR, DULCE HOGAR · DÍA 9', '#c8a070', '#2a1a0a', 512, 128, 'bold 44px "Comic Sans MS", cursive'));
      add(g, new THREE.PlaneGeometry(1.3, 0.32), note, item.x + 0.4, 0.05, item.z + 1.3).rotation.x = -Math.PI / 2;
      break;
    }
  }
  void D; void W;
}

// Seats you can sit on without a chair of your own.
const SEATING = new Set(['seats', 'pew', 'sofa', 'bench']);
function seatUnder(floor: number, x: number, z: number) {
  return ((FURNITURE[floor] ?? []) as Item[]).some(item => SEATING.has(item.type) && (() => { const b = footprint(item); return x > b.x0 - 0.3 && x < b.x1 + 0.3 && z > b.z0 - 0.3 && z < b.z1 + 0.3; })());
}

// ---------------------------------------------------------------- people
const SITS = new Set(['sit']);
function makePerson(look: Look, pose: string, opts: { seat?: boolean; lying?: boolean; mood?: string }) {
  const person = createPerson(look, false);
  const seated = Boolean(opts.seat) || SITS.has(pose);
  setPose(person, opts.lying ? 'lie' : pose, opts.lying ? false : seated);
  if (opts.mood) setMood(person, opts.mood);
  addBlobShadow(person, 0.8);
  return person;
}
const CROWD_LOOKS: Look[] = [
  { skin: '#e8c0a0', age: 'old', body: 'f', hairStyle: 'curly', hairColor: '#d8d0e0', top: 'coat', topColor: '#3a6aa8', bottom: 'pants', bottomColor: '#2a2a30', extras: ['glasses'] },
  { skin: '#c48f69', age: 'adult', body: 'm', hairStyle: 'cap', hairColor: '#1a1210', top: 'jacket', topColor: '#d8a040', bottom: 'jeans', bottomColor: '#24304a', extras: ['backpack'] },
  { skin: '#8d5a3c', age: 'adult', body: 'f', hairStyle: 'long', hairColor: '#120d0b', top: 'jacket', topColor: '#d43a6a', bottom: 'jeans', bottomColor: '#1f2840', extras: ['earrings', 'scarf'] },
  { skin: '#f0d0b4', age: 'old', body: 'm', hairStyle: 'bald', hairColor: '#999', top: 'suit', topColor: '#3a3a40', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['glasses'] },
  { skin: '#b9825c', age: 'young', body: 'm', hairStyle: 'short', hairColor: '#2a1a12', top: 'hoodie', topColor: '#4a6a3a', bottom: 'jeans', bottomColor: '#121214', extras: ['headphones'] },
  { skin: '#dcae88', age: 'adult', body: 'f', hairStyle: 'ponytail', hairColor: '#6a2a18', top: 'sweater', topColor: '#8a3a8a', bottom: 'pants', bottomColor: '#1a1a20' },
  { skin: '#a8724e', age: 'teen', body: 'f', hairStyle: 'braids', hairColor: '#120d0b', top: 'tshirt', topColor: '#f0c040', bottom: 'jeans', bottomColor: '#24304a', extras: ['backpack'] },
  { skin: '#e2b896', age: 'elderly', body: 'm', hairStyle: 'short', hairColor: '#e8e8e8', top: 'coat', topColor: '#4a4a3a', bottom: 'pants', bottomColor: '#2a2a2a', extras: ['mustache', 'scarf'] },
  { skin: '#c99468', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#120d0b', top: 'suit', topColor: '#1a2a4a', bottom: 'pants', bottomColor: '#1a2a4a', extras: ['beard'] },
  { skin: '#f0d6c0', age: 'young', body: 'f', hairStyle: 'bob', hairColor: '#e0c070', top: 'dress', topColor: '#2a8a8a', bottom: 'skirt', bottomColor: '#2a8a8a', extras: ['earrings'] },
];
const BARMAN: Look = { skin: '#8d5a3c', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#120d0b', top: 'shirt', topColor: '#f4f2ec', bottom: 'pants', bottomColor: '#141414', extras: ['mustache'] };

function urn(parent: THREE.Object3D) {
  const g = new THREE.Group(); parent.add(g);
  add(g, new THREE.SphereGeometry(0.1, 14, 10), std('#3a5a8a', 0.2, 0.5), 0, 0.12, 0).scale.set(1, 1.3, 1);
  add(g, C(0.05, 0.07, 0.05, 12), std('#c8a040', 0.25, 0.8), 0, 0.27, 0);
  add(g, C(0.06, 0.05, 0.04, 12), std('#c8a040', 0.25, 0.8), 0, 0.0, 0);
  return g;
}

// ---------------------------------------------------------------- spots
function buildSpot(id: string, floor: number, x: number, z: number): Spot {
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
  return { id, floor, group, ring, gem, material };
}

// ---------------------------------------------------------------- a floor
const PALETTE: Record<number, { base: string; chips: string[]; wall: string }> = {
  0: { base: '#bfc3c4', chips: ['#8a9094', '#e8ecee', '#5a6066', '#c8b89a'], wall: '#e9e5dc' },
  1: { base: '#c9c6bf', chips: ['#8a8680', '#f0eee8', '#5a5650', '#c8a07a'], wall: '#eeeae2' },
  2: { base: '#b9bec6', chips: ['#7a8290', '#eef0f4', '#4a5260', '#9ab0c8'], wall: '#e6e8ec' },
};
function buildFloor(id: number, low: boolean, glows: THREE.MeshStandardMaterial[], doors: DoorRig[], lift: Airport['lift'], screens: { board: Board; mesh: THREE.Mesh }[], belts: { x: number; z: number; w: number; d: number; cases: THREE.Object3D[] }[], escalators: { floor: number; steps: THREE.Object3D[] }[]) {
  const group = new THREE.Group();
  const info = FLOORS.find(f => f.id === id)!;
  group.position.y = info.y;
  const pal = PALETTE[id];
  const w = 96, d = 60;
  const tex = terrazzo(pal.base, pal.chips, 60 + id);
  tex.repeat.set(w / 3, d / 3);
  const floorMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.16, metalness: 0.05, envMapIntensity: 1.5 });
  const ground = add(group, new THREE.PlaneGeometry(w, d), floorMat, 0, 0, 0);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  // A dark ceiling with long warm light strips, like a terminal at night.
  const ceil = ceilingTexture(); ceil.repeat.set(w / 2, d / 2);
  const ceiling = add(group, new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: ceil, roughness: 0.9 }), 0, CEILING, 0);
  ceiling.rotation.x = Math.PI / 2;
  const strip = std('#ffffff', 0.4, 0, '#fff1d8', 1.7);
  glows.push(strip);
  for (let z = -26; z <= 26; z += 6) add(group, B(88, 0.06, 0.28), strip, 0, CEILING - 0.04, z);
  // Walls: tall white panels, the glass of the façade with its mullions.
  const panel = panelTexture(pal.wall, 'rgba(0,0,0,.12)');
  for (const seg of WALLS[id] as (number | string)[][]) {
    const [x0, z0, x1, z1] = seg as number[];
    const len = Math.hypot(x1 - x0, z1 - z0);
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const ry = x0 === x1 ? Math.PI / 2 : 0;
    if (seg[4] === 'glass') {
      const outer = Math.abs(cz) === 30 && x0 !== x1;
      const tall = outer ? CEILING : 3.2;
      add(group, B(len, tall - 0.2, 0.04), GLASS(), cx, (tall - 0.2) / 2 + 0.1, cz, ry);
      add(group, B(len, 0.12, WALL), STEEL(), cx, 0.06, cz, ry);
      add(group, B(len, 0.1, WALL), STEEL(), cx, tall - 0.05, cz, ry);
      for (let k = 0; k <= len + 0.01; k += 3) add(group, B(0.08, tall, 0.12), DARK(), x0 === x1 ? x0 : x0 + k, tall / 2, x0 === x1 ? z0 + k : z0);
      continue;
    }
    const t = panel.clone(); t.needsUpdate = true; t.repeat.set(len / 3, CEILING / 3);
    add(group, B(len + WALL, CEILING, WALL), new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 }), cx, CEILING / 2, cz, ry);
  }
  // Doors.
  for (const door of DOORS[id] ?? []) {
    const rig: DoorRig = { floor: id, x: door.x, z: door.z, leaves: [], k: 0 };
    const half = door.w / 2;
    const along = door.axis === 'x';
    const tall = Math.abs(door.z) === 30 ? CEILING : 3.2;
    if (door.kind === 'slide') {
      const leafMat = new THREE.MeshPhysicalMaterial({ color: '#cfe8f0', transparent: true, opacity: 0.3, roughness: 0.05, depthWrite: false });
      for (const s of [-1, 1]) {
        const leaf = add(group, B(half, 2.7, 0.06), leafMat, door.x + (along ? s * half / 2 : 0), 1.35, door.z + (along ? 0 : s * half / 2), along ? 0 : Math.PI / 2);
        add(leaf, B(half, 0.06, 0.08), STEEL(), 0, 1.33, 0);
        const base = leaf.position.clone();
        rig.leaves.push({ mesh: leaf, open: k => { if (along) leaf.position.x = base.x + s * k * half * 0.95; else leaf.position.z = base.z + s * k * half * 0.95; } });
      }
      add(group, B(along ? door.w : 0.3, tall - 2.7, along ? 0.3 : door.w), Math.abs(door.z) === 30 ? GLASS() : STEEL(), door.x, (tall + 2.7) / 2, door.z);
    } else {
      const leafMat = WOOD();
      for (const s of [-1, 1]) {
        const hinge = new THREE.Group();
        hinge.position.set(door.x + (along ? s * half : 0), 0, door.z + (along ? 0 : s * half));
        group.add(hinge);
        add(hinge, B(along ? half - 0.05 : 0.05, 2.3, along ? 0.05 : half - 0.05), leafMat, along ? -s * (half / 2) : 0, 1.15, along ? 0 : -s * (half / 2));
        rig.leaves.push({ mesh: hinge, open: k => { hinge.rotation.y = s * k * 1.35; } });
      }
      add(group, B(along ? door.w : 0.3, CEILING - 2.3, along ? 0.3 : door.w), new THREE.MeshStandardMaterial({ map: panel, roughness: 0.6 }), door.x, (CEILING + 2.3) / 2, door.z);
    }
    if (door.label) {
      const ry = along ? 0 : Math.PI / 2;
      sign(group, door.label, door.x + (along ? 0 : 0.2), 3.0, door.z + (along ? (door.z > 0 ? -0.2 : 0.2) : 0), ry, Math.min(3.4, door.w * 0.8), '', /ALGO QUE/.test(door.label) ? '#a01818' : /NADA QUE/.test(door.label) ? '#1a7a3a' : undefined, /QUE DECLARAR/.test(door.label) ? '#ffffff' : undefined);
    }
    doors.push(rig);
  }
  // The elevator: steel doors in the north wall.
  const shaft = std('#9aa4ac', 0.25, 0.85);
  add(group, B(3.6, CEILING, 0.2), std('#3a4048', 0.4, 0.5), ELEVATOR.x, CEILING / 2, ELEVATOR.wallZ + 0.25);
  const left = add(group, B(0.62, 2.3, 0.06), shaft, ELEVATOR.x - 0.31, 1.15, ELEVATOR.wallZ + 0.38);
  const right = add(group, B(0.62, 2.3, 0.06), shaft, ELEVATOR.x + 0.31, 1.15, ELEVATOR.wallZ + 0.38);
  lift[id] = { left, right };
  const display = textTexture(`▲▼  ${id === 0 ? 'LLEGADAS' : id === 1 ? 'SALIDAS' : 'EMBARQUE'}`, '#101010', '#ff8a3a', 512, 64, 'bold 36px monospace');
  add(group, new THREE.PlaneGeometry(1.2, 0.15), new THREE.MeshBasicMaterial({ map: display, toneMapped: false }), ELEVATOR.x, 2.55, ELEVATOR.wallZ + 0.36);
  sign(group, 'ASCENSOR', ELEVATOR.x, 3.2, ELEVATOR.wallZ + 0.37, 0, 2.2);
  // The escalator: two flights with glass sides; the steps really move.
  for (const [ex, up] of [[4.3, id < 2], [6.5, id > 0]] as [number, boolean][]) {
    const len = Math.hypot(8, CEILING);
    const angle = Math.atan2(CEILING, 8);
    const ramp = new THREE.Group(); ramp.position.set(ex, 0, -22); group.add(ramp);
    const side = add(ramp, B(0.06, 1.0, len), GLASS(), -0.55, CEILING / 2 + 0.5, -4); side.rotation.x = angle;
    const side2 = add(ramp, B(0.06, 1.0, len), GLASS(), 0.55, CEILING / 2 + 0.5, -4); side2.rotation.x = angle;
    const rail = add(ramp, B(0.08, 0.08, len), RUBBER(), -0.55, CEILING / 2 + 1.05, -4); rail.rotation.x = angle;
    const rail2 = add(ramp, B(0.08, 0.08, len), RUBBER(), 0.55, CEILING / 2 + 1.05, -4); rail2.rotation.x = angle;
    const truss = add(ramp, B(1.1, 0.4, len), std('#8a9298', 0.4, 0.6), 0, CEILING / 2 - 0.35, -4); truss.rotation.x = angle;
    const steps: THREE.Object3D[] = [];
    const stepMat = std('#5a6066', 0.4, 0.7);
    for (let i = 0; i < 24; i++) { const s = add(ramp, B(1.0, 0.06, 0.4), stepMat, 0, 0, 0); s.userData.k = i / 24; s.userData.up = up; steps.push(s); }
    escalators.push({ floor: id, steps });
    add(ramp, B(1.2, 0.05, 1.2), STEEL(), 0, 0.02, 0.3);
  }
  sign(group, 'ESCALERA MECÁNICA', STAIRS.x, 3.4, -21.2, 0, 3.0, '↕');
  // Wayfinding over the halls.
  if (id === 1) {
    hangingSign(group, 'FACTURACIÓN', -29, 4, Math.PI, 5, '←');
    hangingSign(group, 'ATENCIÓN AL PASAJERO', 31, 4, Math.PI, 6.2, '→');
    hangingSign(group, 'CONTROL DE SEGURIDAD · EMBARQUE ↑', 30, -13.2, Math.PI, 7.4);
    hangingSign(group, 'CASA DE CAMBIO · FARMACIA', -29, -13.2, Math.PI, 6.2);
    // The terminal's name over the doors, seen from the kerb.
    const name = canvas(2048, 256, ctx => { ctx.fillStyle = '#1d2126'; ctx.fillRect(0, 0, 2048, 256); ctx.fillStyle = '#ffffff'; ctx.font = 'bold 120px "Arial Narrow", Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('AEROPUERTO INTERNACIONAL DE PUERTO BRUMA', 1024, 110, 1940); ctx.fillStyle = '#ffcc00'; ctx.font = 'bold 64px "Arial Narrow", Arial'; ctx.fillText('SALIDAS', 1024, 210); });
    const m = mapped(name, 0.9); glows.push(m);
    add(group, new THREE.PlaneGeometry(30, 3.75), m, 0, 7.8, 30.46);
    add(group, B(96, 3.6, 0.4), std('#d8dcdf', 0.5, 0.3), 0, CEILING + 1.6 + 0.2, 30.2);
  }
  if (id === 0) {
    hangingSign(group, 'RECOGIDA DE EQUIPAJE', -29, -6.6, Math.PI, 6, '←');
    hangingSign(group, 'ADUANA', 29, -6.8, Math.PI, 4, '→');
    hangingSign(group, 'SALIDA · TAXIS · ALQUILER DE AUTOS', 0, 22, Math.PI, 8);
  }
  if (id === 2) {
    hangingSign(group, 'PUERTAS 10–14', 30, 6, 0, 5, '→');
    hangingSign(group, 'FREE SHOP · COMIDAS', -24, -12.6, 0, 6, '←');
    hangingSign(group, 'ZONA DE DESCANSO', -30, 6.6, 0, 5, '←');
    hangingSign(group, 'CAPILLA · FUMADORES', 30, -1.6, Math.PI, 5.4, '↑');
  }
  // Floor decals: wet floor and the long shine of the strips.
  for (const item of (FURNITURE[id] ?? []) as Item[]) buildItem(group, item, id, glows, screens, belts);
  void low;
  return group;
}

// ---------------------------------------------------------------- outside
function airliner(livery = '#1f2f5a') {
  const g = new THREE.Group();
  const white = std('#f2f4f6', 0.35, 0.2);
  const body = add(g, C(1.9, 1.9, 30, 24), white, 0, 3.4, 0); body.rotation.x = Math.PI / 2;
  const nose = add(g, new THREE.SphereGeometry(1.9, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), white, 0, 3.4, 15); nose.rotation.x = Math.PI / 2; nose.scale.set(1, 1.5, 1);
  const tail = add(g, C(1.9, 0.5, 8, 24), white, 0, 3.9, -19); tail.rotation.x = -Math.PI / 2;
  // Windows and the livery stripe.
  const strip = canvas(1024, 64, ctx => { ctx.fillStyle = '#f2f4f6'; ctx.fillRect(0, 0, 1024, 64); ctx.fillStyle = livery; ctx.fillRect(0, 40, 1024, 14); ctx.fillStyle = '#d8302a'; ctx.fillRect(0, 54, 1024, 5); for (let x = 30; x < 1000; x += 18) { ctx.fillStyle = '#ffe2a0'; ctx.fillRect(x, 18, 9, 12); } });
  const winMat = new THREE.MeshStandardMaterial({ map: strip, emissive: '#ffffff', emissiveMap: strip, emissiveIntensity: 0.35, roughness: 0.4 });
  for (const s of [-1, 1]) add(g, new THREE.PlaneGeometry(28, 1.6), winMat, s * 1.91, 3.7, 0, s * Math.PI / 2);
  const name = textTexture('AEROBRUMA', '#f2f4f6', livery, 1024, 160, 'bold 120px "Arial Black", Arial');
  for (const s of [-1, 1]) add(g, new THREE.PlaneGeometry(9, 1.4), new THREE.MeshStandardMaterial({ map: name, roughness: 0.4 }), s * 1.92, 4.6, 6, s * Math.PI / 2);
  // Cockpit windows.
  for (const s of [-1, 1]) add(g, B(0.5, 0.35, 0.8), std('#0a1018', 0.05, 0.4), s * 0.85, 4.35, 15.6).rotation.y = s * 0.5;
  // Wings, engines, the tail fin with the logo.
  const wingShape = new THREE.Shape(); wingShape.moveTo(0, 0); wingShape.lineTo(17, -6); wingShape.lineTo(17, -8); wingShape.lineTo(0, -6.5);
  const wing = new THREE.ExtrudeGeometry(wingShape, { depth: 0.35, bevelEnabled: false });
  wing.rotateX(-Math.PI / 2);
  for (const s of [-1, 1]) { const m = add(g, wing, white, s * 1.2, 2.4, 3); m.scale.set(s, 1, 1); m.rotation.z = s * 0.06; }
  for (const s of [-1, 1]) {
    add(g, C(0.95, 0.85, 3.8, 18), std('#dfe2e6', 0.3, 0.4), s * 6.4, 1.6, 1.2).rotation.x = Math.PI / 2;
    add(g, C(0.7, 0.7, 0.05, 18), std('#141414', 0.5), s * 6.4, 1.6, 3.12).rotation.x = Math.PI / 2;
  }
  const finShape = new THREE.Shape(); finShape.moveTo(0, 0); finShape.lineTo(5, 0); finShape.lineTo(6.5, 7); finShape.lineTo(3.4, 7);
  const fin = new THREE.ExtrudeGeometry(finShape, { depth: 0.3, bevelEnabled: false });
  const finMesh = add(g, fin, std(livery, 0.4), -0.15, 4.4, -21); finMesh.rotation.y = -Math.PI / 2;
  const logo = brandTexture(256, 256, livery, false);
  for (const s of [-1, 1]) add(g, new THREE.PlaneGeometry(3, 3), new THREE.MeshStandardMaterial({ map: logo, roughness: 0.4, transparent: false }), s * 0.17, 8.4, -24.4, s * Math.PI / 2);
  const stabShape = new THREE.Shape(); stabShape.moveTo(0, 0); stabShape.lineTo(6, -2.2); stabShape.lineTo(6, -3.4); stabShape.lineTo(0, -3.2);
  const stab = new THREE.ExtrudeGeometry(stabShape, { depth: 0.2, bevelEnabled: false }); stab.rotateX(-Math.PI / 2);
  for (const s of [-1, 1]) { const m = add(g, stab, white, s * 0.5, 4.2, -19.6); m.scale.set(s, 1, 1); }
  // Landing gear.
  for (const [x, z] of [[0, 12], [-2.8, 2], [2.8, 2]] as [number, number][]) { add(g, C(0.1, 0.1, 1.8, 8), STEEL(), x, 0.95, z); add(g, C(0.5, 0.5, 0.4, 14), RUBBER(), x, 0.5, z).rotation.z = Math.PI / 2; }
  // Navigation lights: red on the left wing tip, green on the right, the white strobe.
  const red = add(g, new THREE.SphereGeometry(0.18, 8, 6), bright('#ff2020'), -18, 2.5, -4);
  const green = add(g, new THREE.SphereGeometry(0.18, 8, 6), bright('#20ff40'), 18, 2.5, -4);
  const strobe = add(g, new THREE.SphereGeometry(0.22, 8, 6), bright('#ffffff'), 0, 11.4, -25);
  g.userData.lights = [red, green, strobe];
  return g;
}
function buildStreet(y: number, kerb: boolean) {
  const g = new THREE.Group(); g.position.y = y;
  const road = asphalt(5);
  road.repeat.set(40, 6);
  const plane = add(g, new THREE.PlaneGeometry(260, 60), new THREE.MeshStandardMaterial({ map: road, roughness: 0.25, metalness: 0.1, envMapIntensity: 1.6 }), 0, kerb ? -0.02 : 0, kerb ? 70 : 60);
  plane.rotation.x = -Math.PI / 2;
  if (kerb) {
    // The kerb you walk on, wet; the road beyond it with its lines.
    const walk = add(g, new THREE.PlaneGeometry(96, 9), new THREE.MeshStandardMaterial({ map: terrazzo('#8a8a86', ['#6a6a66', '#a8a8a2'], 9), roughness: 0.3 }), 0, 0.01, 34.5);
    walk.rotation.x = -Math.PI / 2;
    const lane = add(g, new THREE.PlaneGeometry(96, 6.6), new THREE.MeshStandardMaterial({ map: road, roughness: 0.22, metalness: 0.1 }), 0, 0.005, 42.3);
    lane.rotation.x = -Math.PI / 2;
    add(g, B(96, 0.16, 0.3), std('#c8c8c0', 0.6), 0, 0.08, 39);
    for (let x = -46; x < 48; x += 5) add(g, B(2.6, 0.01, 0.16), bright('#f0f0e0'), x, 0.02, 45.4);
    add(g, B(96, 0.9, 0.3), std('#c8c8c0', 0.5, 0.3), 0, 0.45, 45.4);
    const taxis = mapped(textTexture('PARADA DE TAXIS', '#1d2126', '#ffcc00', 512, 96, 'bold 52px "Arial Narrow"'), 0.9);
    add(g, C(0.05, 0.05, 2.6, 6), STEEL(), -20, 1.3, 38.4); add(g, new THREE.PlaneGeometry(2.4, 0.45), taxis, -20, 2.7, 38.4);
  }
  // The city beyond the parking lot, and the parking garage.
  const sky = mapped(skyline(31), 0.55);
  add(g, new THREE.PlaneGeometry(320, 80), sky, 0, 28, 150, Math.PI);
  add(g, B(80, 14, 30), std('#5a5e64', 0.8), -40, 7, 100);
  for (let level = 0; level < 4; level++) { const lamp = std('#ffffff', 0.5, 0, '#ffd8a0', 1.2); add(g, B(78, 0.1, 0.2), lamp, -40, 2 + level * 3.4, 84.9); }
  const pk = mapped(textTexture('ESTACIONAMIENTO · LLENO', '#1d2126', '#ff3b30', 1024, 128, 'bold 70px "Arial Narrow"'), 1);
  add(g, new THREE.PlaneGeometry(14, 1.75), pk, -40, 12, 84.8, Math.PI);
  for (let i = 0; i < 9; i++) { add(g, C(0.08, 0.1, 8, 6), DARK(), -60 + i * 15, 4, 52); add(g, B(1.4, 0.2, 0.4), std('#ffffff', 0.5, 0, '#ffd8a0', 2), -60 + i * 15, 8, 52); }
  return g;
}
function buildApron(y: number, planes: THREE.Group[], taxiing: { plane: THREE.Group } ) {
  const g = new THREE.Group(); g.position.y = y;
  const tarmac = asphalt(8);
  tarmac.repeat.set(30, 30);
  const ground = add(g, new THREE.PlaneGeometry(400, 400), new THREE.MeshStandardMaterial({ map: tarmac, roughness: 0.3, metalness: 0.1, envMapIntensity: 1.4 }), 0, -9, 230);
  ground.rotation.x = -Math.PI / 2;
  // Stand markings, the taxiway line, blue edge lights and the runway lights far off.
  for (const x of [-38, 0, 38]) { const line = add(g, new THREE.PlaneGeometry(0.4, 50), bright('#e8c020'), x, -8.98, 60); line.rotation.x = -Math.PI / 2; }
  const taxiLine = add(g, new THREE.PlaneGeometry(400, 0.4), bright('#e8c020'), 0, -8.98, 104); taxiLine.rotation.x = -Math.PI / 2;
  for (let x = -190; x < 190; x += 10) { add(g, new THREE.SphereGeometry(0.25, 6, 4), bright('#3a7aff'), x, -8.8, 98); add(g, new THREE.SphereGeometry(0.25, 6, 4), bright('#3a7aff'), x, -8.8, 110); }
  for (let x = -190; x < 190; x += 7) { add(g, new THREE.SphereGeometry(0.35, 6, 4), bright('#ffffff'), x, -8.8, 150); add(g, new THREE.SphereGeometry(0.3, 6, 4), bright(x % 14 ? '#ffd040' : '#ff3020'), x, -8.8, 170); }
  // Planes at the stands; the one at gate 12 meets the jet bridge.
  for (const [x, livery] of [[38, '#1f2f5a'], [0, '#1f2f5a'], [-38, '#3a6a3a']] as [number, string][]) {
    const p = airliner(livery); p.position.set(x + 3.5, -9, 58); p.rotation.y = Math.PI; g.add(p); planes.push(p);
  }
  // The jet bridge from the door of gate 12 to the front door of the plane.
  const bridge = new THREE.Group(); g.add(bridge);
  add(bridge, B(3.2, 3.0, 9.6), std('#c8ccd0', 0.4, 0.5), 38, 1.5, 34.8);
  add(bridge, B(3.3, 0.6, 9.7), std('#1f2f5a', 0.4), 38, 2.7, 34.8);
  add(bridge, B(0.6, 9, 0.6), DARK(), 38, -4.5, 38.4);
  add(bridge, B(2.4, 0.5, 1.2), RUBBER(), 38, -8.7, 38.4);
  const cab = mapped(textTexture('12', '#1f2f5a', '#ffffff', 128, 128, 'bold 90px Arial'), 0.6);
  add(bridge, new THREE.PlaneGeometry(1.2, 1.2), cab, 39.66, 1.6, 34.8, Math.PI / 2);
  // Ground vehicles: a tug and a baggage train with its lights.
  add(g, B(2.4, 1.2, 3.4), std('#f0c020', 0.5), 30, -8.4, 48); add(g, B(0.4, 0.2, 0.2), bright('#ff9a20'), 30, -7.7, 48);
  for (let i = 0; i < 4; i++) { add(g, B(1.8, 1.2, 2.6), std('#8a9298', 0.5, 0.4), 22 - i * 3.2, -8.3, 46); add(g, B(1.6, 0.6, 2.2), std(CASE_COLORS[i], 0.6), 22 - i * 3.2, -7.4, 46); }
  // The control tower and the terminal's other wing.
  add(g, C(2.2, 3, 40, 12), std('#c8ccd0', 0.6), -110, 11, 140);
  const towerTop = add(g, C(6, 4.5, 5, 12), std('#2a3a4a', 0.1, 0.4, '#5a8ac8', 0.5), -110, 33, 140);
  void towerTop;
  // A plane taxiing far away, with its lights.
  const far = airliner('#7a1a2a'); far.scale.setScalar(0.9); g.add(far); taxiing.plane = far;
  const sky = mapped(skyline(77), 0.35);
  add(g, new THREE.PlaneGeometry(500, 90), sky, 0, 25, 330, Math.PI);
  return g;
}

// ---------------------------------------------------------------- the whole airport
export function buildAirport(scene: THREE.Scene, opts: { low: boolean; shadows: boolean; cries?: Cry[]; onCry?: (cry: Cry | null, volume: number) => void; onThunder?: (delay: number, strength: number) => void }): Airport {
  const floors: Record<number, THREE.Group> = {};
  const doors: DoorRig[] = [];
  const glows: THREE.MeshStandardMaterial[] = [];
  const lift: Airport['lift'] = {};
  const screens: { board: Board; mesh: THREE.Mesh }[] = [];
  const belts: { x: number; z: number; w: number; d: number; cases: THREE.Object3D[] }[] = [];
  const escalators: { floor: number; steps: THREE.Object3D[] }[] = [];
  for (const f of FLOORS) {
    const before = belts.length;
    const group = buildFloor(f.id, opts.low, glows, doors, lift, screens, belts, escalators);
    const moving = [
      ...doors.filter(d => d.floor === f.id).flatMap(d => d.leaves.map(l => l.mesh)), lift[f.id].left, lift[f.id].right,
      ...escalators.filter(e => e.floor === f.id).flatMap(e => e.steps), ...belts.slice(before).flatMap(b => b.cases),
      ...screens.map(s => s.mesh),
    ];
    batchStatic(group, moving);
    floors[f.id] = group;
    scene.add(group);
  }
  const planes: THREE.Group[] = [];
  const taxiing = { plane: new THREE.Group() };
  const outside: Record<number, THREE.Group> = { 0: buildStreet(FLOORS[0].y, false), 1: buildStreet(FLOORS[1].y, true), 2: buildApron(FLOORS[2].y, planes, taxiing) };
  for (const g of Object.values(outside)) scene.add(g);

  // A few real lights per floor: warm in the cafés and the chapel, cold at security.
  const lights: Record<number, [string, number, number, number][]> = {
    0: [['#ffe2b0', -30, 22, 1.2], ['#e0ecff', 28, -16, 1.1], ['#ffd8a0', -38, 1, 1.0]],
    1: [['#fff0d8', 0, 16, 1.4], ['#e0ecff', 30, -22, 1.1], ['#ffd8a0', -36, -22, 1.0]],
    2: [['#ffd08a', 30, -22, 1.2], ['#ffb060', 40, -8, 1.1], ['#ffe2b0', -34, -4, 1.1]],
  };
  for (const f of FLOORS) for (const [color, x, z, intensity] of lights[f.id]) {
    const light = new THREE.PointLight(color, intensity * 16, 22, 1.6);
    light.position.set(x, CEILING - 0.8, z);
    floors[f.id].add(light);
  }
  // Lightning: a cold light from the sky outside the glass.
  const flash = new THREE.DirectionalLight('#c8d8ff', 0);
  flash.position.set(20, 60, 120);
  scene.add(flash, flash.target);
  const skyColor = (scene.background as THREE.Color | null)?.clone() ?? new THREE.Color('#05070c');

  // People at the circles.
  const npcs: Npc[] = [];
  const puffTex = puff();
  for (const s of SCENES) {
    const group = floors[s.floor];
    const people = [{ ...s.npc, pose: s.pose, mood: s.mood, look: s.look, smoke: s.smoke, urn: false, main: true },
      ...(s.extras ?? []).map(e => ({ ...e, main: false }))];
    for (const p of people) {
      const anyP = p as typeof p & { seat?: boolean; lying?: boolean; smoke?: boolean; urn?: boolean };
      const person = makePerson(p.look as Look, p.pose, { seat: anyP.seat, lying: anyP.lying, mood: p.mood });
      person.root.position.set(p.x, 0, p.z); person.root.rotation.y = p.heading;
      if (anyP.seat && !seatUnder(s.floor, p.x, p.z)) {
        // A folding chair of their own (Doña Inés has been here three days).
        const back = new THREE.Vector3(0, 0, -0.12).applyAxisAngle(new THREE.Vector3(0, 1, 0), p.heading);
        add(group, B(0.46, 0.05, 0.44), std('#3a3e44', 0.5, 0.4), p.x + back.x, 0.45, p.z + back.z);
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(group, C(0.015, 0.015, 0.45, 4), STEEL(), p.x + back.x + sx * 0.2, 0.22, p.z + back.z + sz * 0.19);
        const backrest = add(group, B(0.46, 0.4, 0.04), std('#3a3e44', 0.5, 0.4), p.x + back.x * 3, 0.7, p.z + back.z * 3); backrest.rotation.y = p.heading;
      }
      if (anyP.urn) { const rig = person.rig as unknown as { handL?: THREE.Object3D }; if (rig.handL) { const u = urn(rig.handL); u.position.set(0, -0.12, 0.06); } }
      group.add(person.root);
      const npc: Npc = { person, floor: s.floor, scene: s.id, main: p.main, x: p.x, z: p.z, heading: p.heading, baseMood: p.mood ?? 'neutral', lying: anyP.lying, seated: anyP.seat || p.pose === 'sit', body: (p.look as Look).body, seed: npcs.length * 31 + 7 };
      if (anyP.smoke) {
        const rig = person.rig as unknown as { handR: THREE.Object3D };
        const tip = add(rig.handR, new THREE.SphereGeometry(0.008, 6, 4), bright('#ff5a1a'), 0.02, -0.075, 0.09);
        add(rig.handR, C(0.005, 0.005, 0.08, 6), std('#f4f0e6', 0.8), 0.02, -0.075, 0.05).rotation.x = Math.PI / 2;
        const puffs = Array.from({ length: 6 }, () => { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: puffTex, transparent: true, depthWrite: false, opacity: 0 })); group.add(sp); return sp; });
        npc.smoker = { tip, puffs, phase: Math.random() * 9 };
      }
      npcs.push(npc);
    }
  }
  // Everyone else who spends the night here: you can talk to all of them.
  for (const [floorId, list] of Object.entries(CROWD)) {
    const floor = Number(floorId);
    list.forEach((c, i) => {
      const bartender = floor === 2 && c.pose === 'cook';
      const look = bartender ? { ...BARMAN, seed: 2000 + i } : { ...CROWD_LOOKS[(i * 3 + floor) % CROWD_LOOKS.length], seed: floor * 100 + i * 7 };
      const person = makePerson(look as Look, bartender ? 'stand' : c.pose, { seat: c.seat, mood: c.mood });
      person.root.position.set(c.x, 0, c.z); person.root.rotation.y = c.heading;
      if (c.seat && !seatUnder(floor, c.x, c.z)) {
        // Sitting on their own suitcase.
        const back = new THREE.Vector3(0, 0, -0.1).applyAxisAngle(new THREE.Vector3(0, 1, 0), c.heading);
        const sc = suitcaseMesh(CASE_COLORS[i % CASE_COLORS.length], 0.42, 0.38, 0.62); sc.children.slice(-2).forEach(ch => ch.removeFromParent());
        sc.position.set(c.x + back.x, 0, c.z + back.z); sc.rotation.y = c.heading; floors[floor].add(sc);
      }
      floors[floor].add(person.root);
      npcs.push({ person, floor, x: c.x, z: c.z, heading: c.heading, baseMood: c.mood ?? 'neutral', lying: c.lying, seated: c.seat || c.pose === 'sit', talk: `${floor}-${i}`, body: (look as Look).body, seed: floor * 100 + i });
    });
  }
  // People who walk, pull suitcases, push trolleys, clean and drive.
  const movers: Mover[] = [];
  for (const [floorId, list] of Object.entries(WALKERS)) {
    const floor = Number(floorId);
    list.forEach((walker, i) => {
      if (opts.low && i % 4 === 3) return;
      const person = makePerson(walker.look as Look, walker.carry === 'buggy' ? 'sit' : 'stand', { seat: walker.carry === 'buggy' });
      floors[floor].add(person.root);
      const mover: Mover = { walker, person, floor, offset: walker.delay ?? i * 13.7, x: 0, z: 0, body: (walker.look as Look).body, seed: floor * 50 + i * 3 };
      if (walker.carry === 'case') { mover.carry = suitcaseMesh(CASE_COLORS[(i + floor) % CASE_COLORS.length]); floors[floor].add(mover.carry); }
      else if (walker.carry === 'trolley') { mover.carry = trolleyMesh(3, i + floor * 7); floors[floor].add(mover.carry); }
      else if (walker.carry === 'cleaner') {
        const m = new THREE.Group();
        add(m, B(0.8, 0.5, 0.9), std('#f0c020', 0.5), 0, 0.35, 0); add(m, C(0.38, 0.38, 0.08, 16), DARK(), 0, 0.05, 0.1);
        add(m, B(0.06, 0.8, 0.06), DARK(), -0.25, 0.9, -0.42); add(m, B(0.06, 0.8, 0.06), DARK(), 0.25, 0.9, -0.42); add(m, B(0.6, 0.06, 0.06), DARK(), 0, 1.28, -0.45);
        const lamp = add(m, B(0.12, 0.08, 0.12), bright('#ff9a20'), 0, 0.65, 0.2); mover.light = lamp;
        mover.carry = m; floors[floor].add(m);
      } else if (walker.carry === 'buggy') {
        const m = new THREE.Group();
        add(m, B(1.3, 0.5, 2.6), std('#f2f4f6', 0.4, 0.2), 0, 0.5, 0);
        add(m, B(1.32, 0.12, 2.62), NAVY(), 0, 0.72, 0);
        add(m, B(1.1, 0.12, 0.5), std('#2a2a2a', 0.6), 0, 0.85, 0.1); add(m, B(1.1, 0.5, 0.1), std('#2a2a2a', 0.6), 0, 1.1, -0.15);
        add(m, B(1.1, 0.12, 0.5), std('#2a2a2a', 0.6), 0, 0.85, -0.9); add(m, B(1.1, 0.5, 0.1), std('#2a2a2a', 0.6), 0, 1.1, -1.15);
        add(m, B(1.2, 0.05, 1.8), std('#d8dcdf', 0.4, 0.4), 0, 2.1, -0.3);
        for (const sx of [-0.55, 0.55]) for (const sz of [-1.0, 1.0]) add(m, C(0.03, 0.03, 1.3, 4), STEEL(), sx, 1.45, sz * 0.8 - 0.3);
        for (const sx of [-0.6, 0.6]) for (const sz of [-0.9, 0.9]) add(m, C(0.2, 0.2, 0.14, 12), RUBBER(), sx, 0.2, sz).rotation.z = Math.PI / 2;
        const lamp = add(m, B(0.18, 0.12, 0.18), bright('#ff9a20'), 0, 2.2, -0.3); mover.light = lamp;
        add(m, B(0.9, 0.12, 0.05), bright('#fff4d0'), 0, 0.6, 1.31);
        const passenger = makePerson({ ...CROWD_LOOKS[7], seed: 940 + i }, 'sit', { seat: true, mood: 'smile' });
        passenger.root.position.set(0.25, 0.42, -0.8); m.add(passenger.root);
        mover.carry = m; floors[floor].add(m);
      } else if (walker.carry === 'crew') {
        mover.carry = suitcaseMesh('#1a2440', 0.38, 0.5, 0.24); floors[floor].add(mover.carry);
        mover.crew = [0, 1, 2].map(k => {
          const f = k % 2 === 0;
          const look: Look = { skin: ['#e2b896', '#8d5a3c', '#c99468'][k], age: 'adult', body: f ? 'f' : 'm', hairStyle: f ? 'bun' : 'short', hairColor: ['#3a2416', '#120d0b', '#e0c070'][k], top: 'uniform', topColor: '#1f2f5a', bottom: f ? 'skirt' : 'pants', bottomColor: '#1a2440', extras: ['scarf'], seed: 950 + k + i * 5 };
          const p = makePerson(look, 'stand', {}); floors[floor].add(p.root);
          const c = suitcaseMesh('#1a2440', 0.38, 0.5, 0.24); floors[floor].add(c);
          return { person: p, case: c };
        });
      }
      movers.push(mover);
    });
  }

  // White circles.
  const spots = SCENES.map(s => { const spot = buildSpot(s.id, s.floor, s.spot.x, s.spot.z); floors[s.floor].add(spot.group); return spot; });

  // Rain: falling streaks outside the glass, on the floor you are on.
  const rainCount = opts.low ? 700 : 2200;
  const rainPos = new Float32Array(rainCount * 6);
  const rainSeed = random(4242);
  const rainDrops = Array.from({ length: rainCount }, () => ({ x: -70 + rainSeed() * 140, y: rainSeed() * 26, z: 39 + rainSeed() * 70, v: 14 + rainSeed() * 6 }));
  const rainGeo = new THREE.BufferGeometry(); rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
  const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: '#9ab4d8', transparent: true, opacity: 0.45, depthWrite: false }));
  rain.frustumCulled = false;
  scene.add(rain);

  // Speech bubbles for chatter near the player.
  const bubbles: { sprite: THREE.Sprite; until: number; npc: Npc | Mover }[] = [];
  let nextBubble = 3, clockNow = 0, nextCry = 9, nextStrike = 8, strikeAt = -10, strikePower = 1;
  function bubble(text: string, yell = false) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTexture(text, yell), transparent: true, depthTest: true, toneMapped: false }));
    sprite.scale.set(2.2, 0.55, 1);
    return sprite;
  }
  function say(who: Npc | Mover, text: string, seconds = 3.6, yell = false) {
    const old = bubbles.findIndex(b => b.npc === who);
    if (old >= 0) { const b = bubbles[old]; b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(old, 1); }
    const sprite = bubble(text, yell);
    floors[who.floor].add(sprite);
    bubbles.push({ sprite, until: clockNow + seconds, npc: who });
  }
  const SHOUTS = ['¡CANCELADO!', '¡NOOO!', '¡MI MALETA!', '¡QUIERO UN AVIÓN!', '¡AY, NO!'];

  const wp = new THREE.Vector3();
  function setSceneMood(id: string | null, mood: string | null) {
    for (const npc of npcs) if (npc.scene) setMood(npc.person, id && mood && npc.scene === id && npc.main ? mood : npc.baseMood);
  }
  let night = { clock: '23:15', pass: 'cancelado' as 'cancelado' | 'espera' | 'abordo' };
  function setNight(clock: string, pass: 'cancelado' | 'espera' | 'abordo') { night = { clock, pass }; }
  let boardAt = -1;

  function bodies(floor: number): Body[] {
    const out: Body[] = [];
    for (const n of npcs) if (n.floor === floor && !n.lying) out.push({ x: n.x, z: n.z, who: n });
    for (const m of movers) {
      if (m.floor !== floor) continue;
      const h = m.heading ?? 0, sx = Math.sin(h), sz = Math.cos(h);
      if (m.walker.carry === 'buggy') for (const k of [-1.1, 0, 1.1]) out.push({ x: m.x + sx * k, z: m.z + sz * k, radius: 1.05, who: m });
      else {
        out.push({ x: m.x, z: m.z, who: m });
        if (m.walker.carry === 'trolley' || m.walker.carry === 'cleaner') out.push({ x: m.x + sx * 0.85, z: m.z + sz * 0.85, radius: 0.75, who: m });
        for (const c of m.crew ?? []) out.push({ x: c.person.root.position.x, z: c.person.root.position.z, who: m });
      }
    }
    return out;
  }

  function strike() { strikeAt = clockNow; strikePower = 0.7 + Math.random() * 0.6; opts.onThunder?.(0.4 + Math.random() * 2.2, strikePower); }

  function animate(t: number, dt: number, floor: number, px: number, pz: number) {
    clockNow = t;
    // Which outside you see: the kerb, the arrivals road or the runway.
    for (const [fid, g] of Object.entries(outside)) g.visible = Number(fid) === floor;
    // The boards: once a second, plus the flicker of the split flaps.
    if (t - boardAt > 0.25) { boardAt = t; for (const s of screens) { drawBoard(s.board, t, night.clock, night.pass); s.board.tex.needsUpdate = true; } }
    // Lightning: two quick flashes, the sky goes white, then thunder.
    if (t > nextStrike) { nextStrike = t + 18 + Math.random() * 22; strike(); }
    const k = t - strikeAt;
    const lit = k < 0.08 ? 1 : k < 0.16 ? 0.15 : k < 0.26 ? 0.8 : k < 0.6 ? Math.max(0, 0.8 - (k - 0.26) * 2.4) : 0;
    flash.intensity = lit * 3.2 * strikePower;
    if (scene.background instanceof THREE.Color) scene.background.copy(skyColor).lerp(new THREE.Color('#9aa8c8'), lit * 0.55 * strikePower);
    // Rain falls on the floor you are on.
    rain.position.y = FLOORS.find(f => f.id === floor)!.y;
    for (let i = 0; i < rainDrops.length; i++) {
      const r = rainDrops[i];
      r.y -= r.v * dt; r.x += dt * 2.2;
      if (r.y < 0) { r.y = 22 + Math.random() * 4; r.x = -70 + Math.random() * 140; }
      const j = i * 6;
      rainPos[j] = r.x; rainPos[j + 1] = r.y; rainPos[j + 2] = r.z;
      rainPos[j + 3] = r.x + 0.08; rainPos[j + 4] = r.y + 0.55; rainPos[j + 5] = r.z;
    }
    rainGeo.attributes.position.needsUpdate = true;
    glows.forEach(m => {
      const candle = m.userData.candle as number | undefined;
      if (candle != null) m.emissiveIntensity = 1.8 + Math.sin(t * 9 + candle * 1.7) * 0.5 + Math.sin(t * 23 + candle) * 0.3;
      const arch = m.userData.arch as number | undefined;
      if (arch != null) m.emissive.set(Math.floor(t * 2 + arch) % 7 === 0 ? '#ff2a1a' : '#20d040');
    });
    for (const spot of spots) {
      if (spot.floor !== floor) continue;
      spot.gem.position.y = 2.3 + Math.sin(t * 2 + spot.group.position.x) * 0.12;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    // Escalator steps climb or go down forever.
    for (const e of escalators) {
      if (e.floor !== floor) continue;
      for (const s of e.steps) {
        const u = ((s.userData.k as number) + t * 0.05 * (s.userData.up ? 1 : -1) % 1 + 1) % 1;
        s.position.set(0, u * CEILING + 0.03, -u * 8);
      }
    }
    // Baggage carousels: the cases go round the oval.
    for (const b of belts) {
      if (floor !== 0) break;
      const rx = b.w / 2 - b.d / 2, rz = b.d / 2 - 0.35;
      const straight = rx * 2, arc = Math.PI * rz, total = (straight + arc) * 2;
      b.cases.forEach((c, i) => {
        let s = ((t * 0.55 + i * total / b.cases.length) % total + total) % total;
        let x: number, z: number, h: number;
        if (s < straight) { x = -rx + s; z = -rz; h = Math.PI / 2; }
        else if ((s -= straight) < arc) { const a = -Math.PI / 2 + s / rz; x = rx + Math.cos(a) * rz; z = Math.sin(a) * rz; h = a + Math.PI; }
        else if ((s -= arc) < straight) { x = rx - s; z = rz; h = -Math.PI / 2; }
        else { s -= straight; const a = Math.PI / 2 + s / rz; x = -rx + Math.cos(a) * rz; z = Math.sin(a) * rz; h = a + Math.PI; }
        c.position.set(b.x + x, 0.52, b.z + z); c.rotation.y = h;
      });
    }
    // Planes: navigation lights, the strobe, and one taxiing far off.
    for (const p of [...planes, taxiing.plane]) {
      const [red, green, strobe] = p.userData.lights as THREE.Mesh[];
      strobe.visible = (t * 1.1 + p.position.x) % 1.2 < 0.08;
      red.visible = green.visible = true;
    }
    const u = (t * 0.012) % 1;
    taxiing.plane.position.set(-200 + u * 400, -9, 104); taxiing.plane.rotation.y = Math.PI / 2;
    // People who move.
    const nearDoor: { x: number; z: number }[] = [{ x: px, z: pz }];
    for (const m of movers) {
      if (m.floor !== floor) continue;
      const at = walkerAt(m.walker, t + m.offset);
      m.x = at.x; m.z = at.z; m.moving = at.moving; m.heading = at.heading;
      const sx = Math.sin(at.heading), sz = Math.cos(at.heading);
      if (m.walker.carry === 'buggy') {
        m.carry!.position.set(at.x, 0, at.z); m.carry!.rotation.y = at.heading;
        m.person.root.position.set(at.x - sz * 0.25 + sx * 0.15, 0.42, at.z + sx * 0.25 + sz * 0.15); m.person.root.rotation.y = at.heading;
        animatePerson(m.person, dt, 0, false);
        if (m.light) m.light.visible = Math.floor(t * 3) % 2 === 0;
        nearDoor.push({ x: at.x + sx * 2, z: at.z + sz * 2 });
        continue;
      }
      m.person.root.position.set(at.x, 0, at.z);
      m.person.root.rotation.y = at.heading;
      animatePerson(m.person, dt, at.moving ? m.walker.speed : 0, false);
      if (m.carry) {
        const kind = m.walker.carry;
        const ahead = kind === 'trolley' ? 0.85 : kind === 'cleaner' ? 0.8 : -0.55;
        const side = kind === 'case' || kind === 'crew' ? 0.22 : 0;
        m.carry.position.set(at.x + sx * ahead + sz * side, 0, at.z + sz * ahead - sx * side);
        m.carry.rotation.y = at.heading;
        if (kind === 'case' || kind === 'crew') m.carry.rotation.x = at.moving ? -0.25 : 0;
        if (m.light) m.light.visible = Math.floor(t * 2) % 2 === 0;
      }
      // The crew: three more in uniform walking in a line behind the captain.
      (m.crew ?? []).forEach((c, k) => {
        const back = walkerAt(m.walker, t + m.offset - (k + 1) * 1.1 / m.walker.speed);
        const bx = Math.sin(back.heading), bz = Math.cos(back.heading);
        c.person.root.position.set(back.x, 0, back.z); c.person.root.rotation.y = back.heading;
        animatePerson(c.person, dt, back.moving ? m.walker.speed : 0, false);
        c.case.position.set(back.x - bx * 0.55 + bz * 0.22, 0, back.z - bz * 0.55 - bx * 0.22); c.case.rotation.y = back.heading; c.case.rotation.x = back.moving ? -0.25 : 0;
      });
      nearDoor.push({ x: at.x + sx * 1.4, z: at.z + sz * 1.4 });
    }
    // Someone loses it now and then: the board says CANCELADO one more time.
    if (t > nextCry) {
      nextCry = t + 14 + Math.random() * 14;
      const near = (n: { x: number; z: number }) => Math.hypot(n.x - px, n.z - pz);
      const pool = npcs.filter(n => n.floor === floor && !n.main && ['angry', 'furious', 'sad', 'worried', 'scared'].includes(n.baseMood) && near(n) < 22);
      if (pool.length) {
        const who = pool[Math.floor(Math.random() * pool.length)];
        const cries = opts.cries ?? [];
        const cry = cries.length && Math.random() < 0.5 ? cries[Math.floor(Math.random() * cries.length)] : null;
        say(who, cry ? cry.text : SHOUTS[Math.floor(Math.random() * SHOUTS.length)], 2.6, true);
        opts.onCry?.(cry, Math.max(0.15, 1 - near(who) / 24));
      }
    }
    // Doors open for anyone close.
    for (const door of doors) {
      if (door.floor !== floor) continue;
      const want = nearDoor.some(p => Math.hypot(p.x - door.x, p.z - door.z) < 3) ? 1 : 0;
      door.k += (want - door.k) * Math.min(1, dt * 5);
      for (const leaf of door.leaves) leaf.open(door.k);
    }
    // People who stay: breathe, look around, smoke.
    for (const npc of npcs) {
      if (npc.floor !== floor) continue;
      if (Math.abs(npc.x - px) > 32 || Math.abs(npc.z - pz) > 32) continue;
      animatePerson(npc.person, dt, 0, talking.has(npc.person));
      const smoker = npc.smoker;
      if (smoker) {
        smoker.phase += dt;
        smoker.tip.getWorldPosition(wp); floors[npc.floor].worldToLocal(wp);
        smoker.puffs.forEach((sprite, i) => {
          const age = (smoker.phase * 0.5 + i / smoker.puffs.length) % 1;
          if (age < 0.05) sprite.userData.from = wp.clone();
          const from = (sprite.userData.from as THREE.Vector3 | undefined) ?? wp;
          sprite.position.set(from.x + Math.sin(age * 6 + i) * 0.08, from.y + age * 1.1, from.z);
          sprite.scale.setScalar(0.1 + age * 0.6);
          (sprite.material as THREE.SpriteMaterial).opacity = (1 - age) * 0.4;
        });
      }
    }
    // Chatter bubbles.
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.npc.person.root.getWorldPosition(wp); floors[floor].worldToLocal(wp); b.sprite.position.set(wp.x, wp.y + 2.25, wp.z);
      if (t > b.until || b.sprite.parent !== floors[floor]) { b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(i, 1); }
    }
    if (t > nextBubble) {
      nextBubble = t + 2.5 + Math.random() * 3;
      const lines = CHATTER[floor] ?? [];
      const pool = [...npcs.filter(n => n.floor === floor && !n.main && !n.lying), ...movers.filter(m => m.floor === floor)]
        .filter(n => { const d = Math.hypot(n.x - px, n.z - pz); return d > 1.5 && d < 11; });
      if (lines.length && pool.length && bubbles.length < 2) {
        const npc = pool[Math.floor(Math.random() * pool.length)];
        if (!bubbles.some(b => b.npc === npc)) say(npc, lines[Math.floor(Math.random() * lines.length)]);
      }
    }
  }

  return { floors, outside, npcs, movers, spots, doors, lift, animate, setSceneMood, setNight, bodies, say, strike };
}
