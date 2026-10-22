// Madrid infectada · the zones in 3D, drawn from layout.mjs. Original
// procedural geometry and canvas textures only: damaged facades with
// balconies, soot and boarded windows, the shutters and graffiti of the
// ground floors, abandoned and burnt cars, an overturned bus, barricades,
// Metro de Madrid signs, dead traffic lights that blink amber, smoke, dust
// and fire, and one recognisable landmark per zone (the Casa de Correos and
// its clock, the Metrópolis, the Plaza Mayor, the ghost station of Chamberí,
// the Retiro with its pond and the Palacio de Cristal, the arch of Monteleón,
// the old hall of Atocha, the Palacio Real, a field hospital and the
// Manzanares with the Puente de Segovia). Survivors stand where layout.mjs
// says; zombies walk the barricaded streets outside the player's bounds.
import * as THREE from 'three';
import { addBench, addPalm, addTree, box, canvas, cylinder, glow, makeCar, random, solid } from '../noche-abierta/build3d';
import { animatePerson, setMood } from '../noche-abierta/people3d';
import { ground, groundTexture, lightPool, makeTalker, makeWalker, muralTexture, tileTexture, type Light, type RegionScene, type Talker, type Walker } from '../mundo-3d/kit3d';
import { CAST, SPOTS } from './story.mjs';
import { layoutOf, npcOf, propBox, solidsFor } from './layout.mjs';

export type Zone3D = RegionScene & {
  id: string;
  gate: { x: number; z: number } | null;
  back: { x: number; z: number } | null;
  nests: { x: number; z: number; r: number }[];
  zombies: Walker[];
  under: boolean;
  /** Where a micro-event can happen: lamps that spark, a car whose alarm goes off. */
  sparks: THREE.Vector3[];
  alarms: { lights: THREE.MeshStandardMaterial[]; at: THREE.Vector3 }[];
};

// ------------------------------------------------------------------ light
export const MOODS: Record<string, Light> = {
  dawn: { sky: ['#2e3a50', '#d99a72'], fog: ['#8a7e72', 30, 160], sun: { color: '#ffc39a', intensity: 2.0, at: [-30, 22, 40] }, hemi: ['#b4c2d6', '#6a5a48', 1.25], exposure: 1.12 },
  smoke: { sky: ['#47463f', '#a39276'], fog: ['#837c6c', 22, 125], sun: { color: '#ffd29a', intensity: 1.7, at: [30, 34, 20] }, hemi: ['#bdb8a4', '#5a5246', 1.3], exposure: 1.12 },
  amber: { sky: ['#2f2c38', '#c98a52'], fog: ['#7e6654', 26, 140], sun: { color: '#ffb070', intensity: 1.9, at: [-35, 24, 25] }, hemi: ['#c4b4a2', '#5a4a3e', 1.25], exposure: 1.1 },
  under: { sky: ['#0a0d10', '#181d22'], fog: ['#1a2126', 12, 62], sun: { color: '#cfe0ff', intensity: 0.5, at: [0, 30, 6] }, hemi: ['#c2d2de', '#4a4642', 1.55], exposure: 1.35 },
  green: { sky: ['#3a4e46', '#b0bf98'], fog: ['#83937e', 26, 140], sun: { color: '#eef2cc', intensity: 1.9, at: [20, 34, 30] }, hemi: ['#cde0c2', '#5a6a48', 1.3], exposure: 1.08 },
  night: { sky: ['#0d1224', '#2f3352'], fog: ['#22263a', 18, 100], sun: { color: '#a8b8ff', intensity: 0.9, at: [-20, 30, 18] }, hemi: ['#8494c8', '#3a3440', 1.2], exposure: 1.35 },
  cold: { sky: ['#56606c', '#bcc4cc'], fog: ['#9ea6ac', 28, 150], sun: { color: '#eef4ff', intensity: 1.9, at: [25, 36, 25] }, hemi: ['#d2dce8', '#66665f', 1.3], exposure: 1.06 },
};

// ------------------------------------------------------------------ textures
const cache = new Map<string, THREE.Texture>();
export const once = (key: string, make: () => THREE.Texture) => { let t = cache.get(key); if (!t) { t = make(); cache.set(key, t); } return t; };

/** A Madrid facade tile: two windows wide, two floors high, with balconies; some broken, boarded or burnt. */
export function facadeTexture(color: string, style: string, seed: number, ruin: number) {
  return canvas(256, 256, ctx => {
    const rand = random(seed);
    ctx.fillStyle = color; ctx.fillRect(0, 0, 256, 256);
    // Grime: vertical streaks and blotches.
    for (let i = 0; i < 260; i++) { ctx.fillStyle = `rgba(40,34,28,${0.03 + rand() * 0.07})`; ctx.fillRect(rand() * 256, rand() * 256, 2 + rand() * 8, 4 + rand() * 30); }
    if (style === 'brick' || style === 'mayor') {
      ctx.strokeStyle = 'rgba(60,24,16,0.25)'; ctx.lineWidth = 1;
      for (let y = 0; y < 256; y += 8) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y); ctx.stroke(); for (let x = (y / 8) % 2 ? 0 : 8; x < 256; x += 16) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 8); ctx.stroke(); } }
    }
    if (style === 'tiles') {
      ctx.fillStyle = '#f2eee4'; ctx.fillRect(0, 0, 256, 256);
      ctx.strokeStyle = 'rgba(120,110,95,0.5)'; ctx.lineWidth = 2;
      for (let y = 0; y < 256; y += 16) for (let x = (y / 16) % 2 ? 0 : 16; x < 256; x += 32) ctx.strokeRect(x, y, 32, 16);
      ctx.fillStyle = '#2a5aa8'; ctx.fillRect(0, 180, 256, 14);
      for (let i = 0; i < 40; i++) { ctx.fillStyle = `rgba(60,50,40,${0.05 + rand() * 0.12})`; ctx.fillRect(rand() * 256, rand() * 256, 3 + rand() * 20, 2 + rand() * 20); }
      return;
    }
    const modern = style === 'modern';
    for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) {
      const x = c * 128 + (modern ? 10 : 34), y = r * 128 + (modern ? 14 : 22), w = modern ? 108 : 60, h = modern ? 96 : 84;
      const roll = rand();
      if (!modern) { ctx.fillStyle = 'rgba(255,248,232,0.55)'; ctx.fillRect(x - 6, y - 8, w + 12, 8); }
      if (roll < ruin * 0.35) {
        // Burnt: black inside and soot climbing the wall.
        const g = ctx.createRadialGradient(x + w / 2, y, 4, x + w / 2, y - 10, 70);
        g.addColorStop(0, 'rgba(10,8,6,0.85)'); g.addColorStop(1, 'rgba(10,8,6,0)');
        ctx.fillStyle = g; ctx.fillRect(x - 40, y - 70, w + 80, 120);
        ctx.fillStyle = '#0c0b0a'; ctx.fillRect(x, y, w, h);
      } else if (roll < ruin * 0.6) {
        // Boarded up.
        ctx.fillStyle = '#1e2226'; ctx.fillRect(x, y, w, h);
        ctx.fillStyle = '#8a6a48';
        for (let k = 0; k < 3; k++) { ctx.save(); ctx.translate(x + w / 2, y + 18 + k * 26); ctx.rotate((rand() - 0.5) * 0.4); ctx.fillRect(-w / 2 - 4, -6, w + 8, 12); ctx.restore(); }
      } else {
        ctx.fillStyle = rand() < 0.15 ? '#3a3020' : '#232a30'; ctx.fillRect(x, y, w, h);
        ctx.fillStyle = 'rgba(160,180,190,0.25)'; ctx.fillRect(x + 4, y + 4, w / 2 - 6, h - 8);
        if (rand() < 0.35 + ruin * 0.3) {
          // Broken glass: shards.
          ctx.strokeStyle = 'rgba(220,230,235,0.6)'; ctx.lineWidth = 1.5;
          const cx = x + rand() * w, cy = y + rand() * h;
          for (let k = 0; k < 7; k++) { ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x + rand() * w, y + rand() * h); ctx.stroke(); }
        }
        if (!modern && rand() < 0.5) { ctx.fillStyle = '#5a6a3a'; ctx.fillRect(x + w - 12, y + 2, 10, h - 4); }
      }
      if (!modern) {
        // The balcony: a slab and an iron railing.
        ctx.fillStyle = 'rgba(230,222,206,0.9)'; ctx.fillRect(x - 10, y + h, w + 20, 6);
        ctx.strokeStyle = '#1b1b1b'; ctx.lineWidth = 2;
        ctx.strokeRect(x - 8, y + h - 26, w + 16, 26);
        for (let k = 0; k <= 10; k++) { ctx.beginPath(); ctx.moveTo(x - 8 + k * (w + 16) / 10, y + h - 26); ctx.lineTo(x - 8 + k * (w + 16) / 10, y + h); ctx.stroke(); }
      }
    }
    if (modern) { ctx.strokeStyle = 'rgba(40,46,52,0.8)'; ctx.lineWidth = 6; for (let i = 0; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(i * 128, 0); ctx.lineTo(i * 128, 256); ctx.stroke(); } }
    // Cracks.
    ctx.strokeStyle = 'rgba(30,24,20,0.55)'; ctx.lineWidth = 1.4;
    for (let k = 0; k < Math.round(ruin * 6); k++) {
      let x = rand() * 256, y = rand() * 256;
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let s = 0; s < 6; s++) { x += (rand() - 0.5) * 40; y += rand() * 30; ctx.lineTo(x, y); }
      ctx.stroke();
    }
  }, true);
}

export const SPRAY = ['¿HAY ALGUIEN?', 'NO MIRES ATRÁS', 'AGUA EN EL 3.º B', 'ELLOS OYEN', 'MADRID RESISTE', 'NO SON TU FAMILIA', 'VUELVE, MAMÁ', 'APAGA LA LUZ', 'REFUGIO → PLAZA MAYOR', 'SIGUEN AQUÍ', 'AQUÍ NO HAY COMIDA', 'NO ABRAS', 'TODOS SANOS · 4', 'DE NOCHE NO', 'NI UN PASO ATRÁS', 'MUERTOS DENTRO'];
/** The ground floor: metal shutters, a shop sign and spray paint. */
export function shopTexture(seed: number, mural: boolean) {
  return canvas(512, 128, ctx => {
    const rand = random(seed);
    ctx.fillStyle = '#4a4c4e'; ctx.fillRect(0, 0, 512, 128);
    for (let i = 0; i < 4; i++) {
      const x = i * 128 + 8, open = rand() < 0.2;
      ctx.fillStyle = open ? '#0c0d0e' : '#8d9296'; ctx.fillRect(x, 30, 112, 98);
      if (!open) { ctx.fillStyle = 'rgba(40,44,48,0.5)'; for (let y = 34; y < 128; y += 6) ctx.fillRect(x, y, 112, 2); }
      else { ctx.strokeStyle = 'rgba(220,230,235,0.5)'; for (let k = 0; k < 6; k++) { ctx.beginPath(); ctx.moveTo(x + 56, 70); ctx.lineTo(x + rand() * 112, 30 + rand() * 98); ctx.stroke(); } }
      ctx.fillStyle = ['#7a2a2a', '#2a4a6a', '#3a5a3a', '#6a5a2a'][(i + seed) % 4]; ctx.fillRect(x, 6, 112, 20);
    }
    if (mural) {
      const tex = muralTexture(seed, ['#e05a3a', '#2a7ab0', '#f2c14e', '#1b1b1b', '#6ab04c', '#c04a9a']);
      ctx.globalAlpha = 0.85; ctx.drawImage(tex.image as HTMLCanvasElement, 0, 30, 512, 98); ctx.globalAlpha = 1;
      tex.dispose();
    }
    ctx.font = '700 22px "Arial Black", Arial, sans-serif'; ctx.fillStyle = ['#d23a2a', '#1a1a1a', '#e8e0d0'][seed % 3];
    ctx.save(); ctx.translate(40 + rand() * 300, 90); ctx.rotate(-0.06); ctx.fillText(SPRAY[seed % SPRAY.length], 0, 0); ctx.restore();
    // Red handprints dragged down the shutters, and a painted cross on a door.
    if (seed % 3 === 0) for (let k = 0; k < 3; k++) {
      const hx = 30 + rand() * 450, hy = 40 + rand() * 40;
      ctx.fillStyle = 'rgba(120,10,10,0.85)';
      ctx.beginPath(); ctx.ellipse(hx, hy, 9, 11, 0, 0, 6.3); ctx.fill();
      for (let f = 0; f < 5; f++) { ctx.fillRect(hx - 10 + f * 5, hy - 22 + Math.abs(f - 2) * 3, 3.4, 12); }
      ctx.fillStyle = 'rgba(110,8,8,0.5)'; ctx.fillRect(hx - 6, hy + 8, 3, 18 + rand() * 30); ctx.fillRect(hx + 2, hy + 8, 2, 10 + rand() * 24);
    }
    if (seed % 4 === 1) { ctx.strokeStyle = 'rgba(150,20,20,0.9)'; ctx.lineWidth = 7; const cx = 60 + rand() * 380; ctx.beginPath(); ctx.moveTo(cx - 26, 44); ctx.lineTo(cx + 26, 112); ctx.moveTo(cx + 26, 44); ctx.lineTo(cx - 26, 112); ctx.stroke(); }
  });
}

export function metroLogo() {
  return once('metro-logo', () => canvas(256, 256, ctx => {
    ctx.clearRect(0, 0, 256, 256);
    ctx.save(); ctx.translate(128, 128); ctx.rotate(Math.PI / 4);
    ctx.fillStyle = '#d6241f'; ctx.fillRect(-82, -82, 164, 164); ctx.restore();
    ctx.fillStyle = '#1f3d8f'; ctx.fillRect(10, 104, 236, 48);
    ctx.fillStyle = '#ffffff'; ctx.font = '800 38px "Helvetica Neue", Arial, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('METRO', 128, 130);
  }));
}
export function plate(text: string, bg: string, fg: string, w = 512, h = 128, font = 800) {
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = fg; ctx.lineWidth = 6; ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.fillStyle = fg; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `${font} ${Math.round(h * 0.42)}px "Helvetica Neue", Arial, sans-serif`;
    ctx.fillText(text, w / 2, h / 2 + 3, w - 30);
  });
}
export const signMat = (tex: THREE.Texture, glowing = 0) => new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.6, ...(glowing ? { emissive: '#ffffff', emissiveMap: tex, emissiveIntensity: glowing } : {}) });

/** A clock face stopped at 6:17, the minute the city went quiet. */
export function clockFace() {
  return once('reloj', () => canvas(128, 128, ctx => {
    ctx.fillStyle = '#f4efe2'; ctx.beginPath(); ctx.arc(64, 64, 62, 0, 6.3); ctx.fill(); ctx.strokeStyle = '#1a1a1a'; ctx.lineWidth = 4; ctx.stroke();
    for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; ctx.fillStyle = '#1a1a1a'; ctx.fillRect(64 + Math.sin(a) * 52 - 2, 64 - Math.cos(a) * 52 - 2, 4, 4); }
    ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(64, 64); ctx.lineTo(64 + Math.sin(3.25) * 30, 64 - Math.cos(3.25) * 30); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(64, 64); ctx.lineTo(64 + Math.sin(1.78) * 46, 64 - Math.cos(1.78) * 46); ctx.stroke();
  }));
}

export function smokeTexture() {
  return once('smoke', () => canvas(64, 64, ctx => {
    const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 31);
    g.addColorStop(0, 'rgba(255,255,255,0.8)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  }));
}

// ------------------------------------------------------------------ pieces
export function building(group: THREE.Group, b: { x0: number; x1: number; z0: number; z1: number; h: number; color: string; ruin?: number; style?: string; seed?: number }, centre: { x: number; z: number }, low: boolean) {
  const w = b.x1 - b.x0, d = b.z1 - b.z0, h = b.h, ruin = b.ruin ?? 0.3, seed = b.seed ?? 1, style = b.style ?? 'classic';
  const tex = facadeTexture(b.color, style, seed, ruin);
  const tile = style === 'modern' ? 7 : 6.4;
  const side = (len: number) => { const t = tex.clone(); t.needsUpdate = true; t.repeat.set(Math.max(1, Math.round(len / tile)), Math.max(1, Math.round(h / tile))); return new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }); };
  const roof = solid(style === 'mayor' ? '#4a4c52' : '#3a3632', 0.95);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [side(d), side(d), roof, roof, side(w), side(w)]);
  mesh.position.set((b.x0 + b.x1) / 2, h / 2, (b.z0 + b.z1) / 2);
  mesh.castShadow = !low; mesh.receiveShadow = true;
  group.add(mesh);
  const rand = random(seed * 31 + 7);
  // A cornice, and broken roofs: jagged chunks on top, a missing corner.
  group.add(box(w + 0.4, 0.4, d + 0.4, solid('#e9e0cc', 0.8), (b.x0 + b.x1) / 2, h, (b.z0 + b.z1) / 2, false));
  if (ruin > 0.55) {
    for (let i = 0; i < 4; i++) {
      const cw = 1 + rand() * 3, ch = 0.6 + rand() * 2.4;
      group.add(box(cw, ch, 1 + rand() * 2, solid(b.color, 0.95), b.x0 + rand() * w, h + ch / 2, b.z0 + rand() * d, !low));
    }
  }
  // The ground floor faces the zone: shutters, a sign, spray paint (murals in Malasaña).
  const toX = Math.abs((b.x0 + b.x1) / 2 - centre.x) - w / 2 > Math.abs((b.z0 + b.z1) / 2 - centre.z) - d / 2;
  const len = toX ? d : w;
  if (style !== 'tiles' && style !== 'palace') {
    const shop = new THREE.Mesh(new THREE.PlaneGeometry(len - 0.4, 3.4), new THREE.MeshStandardMaterial({ map: shopTexture(seed, style === 'barrio' && rand() < 0.7), roughness: 0.85 }));
    if (toX) { const east = (b.x0 + b.x1) / 2 < centre.x; shop.position.set(east ? b.x1 + 0.03 : b.x0 - 0.03, 1.7, (b.z0 + b.z1) / 2); shop.rotation.y = east ? Math.PI / 2 : -Math.PI / 2; }
    else { const south = (b.z0 + b.z1) / 2 > centre.z; shop.position.set((b.x0 + b.x1) / 2, 1.7, south ? b.z0 - 0.03 : b.z1 + 0.03); shop.rotation.y = south ? Math.PI : 0; }
    group.add(shop);
  }
  return ruin > 0.7 ? new THREE.Vector3((b.x0 + b.x1) / 2, h + 1, (b.z0 + b.z1) / 2) : null;
}

export type Life = {
  lamps: THREE.MeshStandardMaterial[];
  ambers: THREE.MeshStandardMaterial[];
  fires: { mat: THREE.MeshStandardMaterial; at: THREE.Vector3; seed: number }[];
  smoke: THREE.Vector3[];
  spin: THREE.Object3D[];
  sparks: THREE.Vector3[];
  alarms: { lights: THREE.MeshStandardMaterial[]; at: THREE.Vector3 }[];
};

function car(group: THREE.Group, p: { x: number; z: number; r?: number; kind: string; look?: string }, life: Life, seed: number) {
  const rand = random(seed);
  const colors = ['#8a8f94', '#5a1f22', '#1f2f4a', '#d8d6d0', '#2f3a2f', '#9a7a3a'];
  if (p.kind === 'burnt') {
    const rig = makeCar('sedan', '#2a2422');
    rig.group.traverse(o => { const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined; if (m && 'color' in m && !Array.isArray(m)) { (o as THREE.Mesh).material = solid('#231f1c', 1); } });
    rig.group.position.set(p.x, 0, p.z); rig.group.rotation.y = p.r ?? 0; rig.group.scale.y = 0.9;
    group.add(rig.group);
    const fireMat = glow('#ff7a2a', 2.2);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.3, 7), fireMat);
    flame.position.set(p.x, 1.6, p.z);
    group.add(flame);
    life.fires.push({ mat: fireMat, at: new THREE.Vector3(p.x, 1.6, p.z), seed });
    life.smoke.push(new THREE.Vector3(p.x, 2.2, p.z));
    return;
  }
  if (p.kind === 'bus') {
    // An EMT bus lying on its side: blue and white, wheels to the street.
    const bus = new THREE.Group();
    const body = box(11, 2.9, 2.55, solid('#2a5aa8', 0.5, 0.2), 0, 0, 0);
    bus.add(body);
    bus.add(box(11.02, 0.9, 2.57, solid('#f2f2ee', 0.5), 0, 0.85, 0));
    bus.add(box(10.2, 0.05, 1.2, solid('#1b2228', 0.2, 0.5), 0, 0, 1.3));
    for (const x of [-3.6, 3.6]) { const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.35, 14), solid('#141414')); wheel.position.set(x, -0.9, -1.4); wheel.rotation.x = Math.PI / 2; bus.add(wheel); }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.4), signMat(plate('146 · CALLAO', '#111111', '#ffb02a', 512, 96), 0.8));
    sign.position.set(5.52, 0.8, 0); sign.rotation.y = Math.PI / 2; bus.add(sign);
    bus.rotation.set(Math.PI / 2, p.r ?? 0, 0, 'YXZ');
    bus.position.set(p.x, 1.3, p.z);
    group.add(bus);
    const hz = glow('#ffb02a', 0);
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), hz);
    lamp.position.set(p.x + Math.cos(p.r ?? 0) * 5.4, 2.2, p.z - Math.sin(p.r ?? 0) * 5.4);
    group.add(lamp);
    life.alarms.push({ lights: [hz], at: lamp.position.clone() });
    return;
  }
  const kind = p.kind === 'van' ? 'van' : p.kind === 'police' ? 'sedan' : rand() < 0.5 ? 'sedan' : 'coupe';
  const color = p.kind === 'police' ? '#e8eaee' : p.look === 'ambulancia' ? '#f0f0ec' : p.look === 'cruz' ? '#f0f0ec' : colors[Math.floor(rand() * colors.length)];
  const rig = makeCar(kind as 'sedan', color);
  rig.group.position.set(p.x, 0, p.z); rig.group.rotation.y = p.r ?? 0;
  group.add(rig.group);
  // Doors left open, a few windows smashed: a sheet of dust on the roof.
  rig.group.add(box(2.2, 0.02, 1.5, solid('#8a8070', 1), 0, kind === 'van' ? 2.27 : 1.45, 0, false));
  if (p.kind === 'police' || p.look === 'ambulancia' || p.look === 'cruz') {
    const blue = glow(p.kind === 'police' ? '#3a6aff' : '#ff3a3a', 0.4), red = glow(p.kind === 'police' ? '#ff3a3a' : '#ffb02a', 0.4);
    const top = kind === 'van' ? 2.35 : 1.5;
    rig.group.add(box(0.3, 0.14, 0.3, blue, -0.3, top, 0.4, false), box(0.3, 0.14, 0.3, red, -0.3, top, -0.4, false));
    life.alarms.push({ lights: [blue, red], at: new THREE.Vector3(p.x, top, p.z) });
    if (p.look) {
      const cross = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.9), signMat(once('cruz', () => canvas(64, 64, ctx => { ctx.fillStyle = '#d2221f'; ctx.fillRect(24, 6, 16, 52); ctx.fillRect(6, 24, 52, 16); })), 0));
      cross.position.set(0, 1.4, 1.06); rig.group.add(cross);
    }
    if (p.kind === 'police') {
      const band = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.3), signMat(plate('POLICÍA', '#1f3d8f', '#ffffff', 512, 64), 0));
      band.position.set(0, 0.75, 1.0); rig.group.add(band);
    }
  }
}

function barricade(group: THREE.Group, p: { x: number; z: number; w?: number; r?: number; look?: string }, seed: number) {
  const g = new THREE.Group();
  const rand = random(seed);
  const w = p.w ?? 6;
  const wood = solid('#6a4a30', 0.95), metal = solid('#6a6e70', 0.6, 0.4), red = solid('#c33a2a', 0.7), white = solid('#efefea', 0.7);
  if (p.look === 'muebles') {
    // Furniture piled up: wardrobes, a fridge, mattresses, chairs.
    for (let x = -w / 2 + 0.6; x < w / 2; x += 1.1 + rand() * 0.4) {
      const h = 0.7 + rand() * 0.5;
      g.add(box(1 + rand() * 0.3, h, 0.7, [wood, metal, solid('#cfc6b2', 0.9), solid('#3a5a8a', 0.9)][Math.floor(rand() * 4)], x, h / 2, (rand() - 0.5) * 0.15));
    }
  } else {
    // Concrete blocks with red-and-white stripes, planks and a mesh fence.
    for (let x = -w / 2 + 0.75; x < w / 2; x += 1.5) {
      g.add(box(1.45, 0.8, 0.7, solid('#9a9690', 0.95), x, 0.4, 0));
      g.add(box(1.46, 0.12, 0.71, rand() < 0.5 ? red : white, x, 0.62, 0, false));
    }
    const fence = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.2), new THREE.MeshStandardMaterial({ map: once('mesh', () => canvas(64, 64, ctx => { ctx.clearRect(0, 0, 64, 64); ctx.strokeStyle = '#b8bcbe'; ctx.lineWidth = 2; for (let i = -64; i < 128; i += 12) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + 64, 64); ctx.stroke(); ctx.beginPath(); ctx.moveTo(i + 64, 0); ctx.lineTo(i, 64); ctx.stroke(); } }, true)), transparent: true, alphaTest: 0.3, side: THREE.DoubleSide }));
    ((fence.material as THREE.MeshStandardMaterial).map as THREE.Texture).repeat.set(w / 1.2, 1);
    fence.position.y = 1.4; g.add(fence);
    for (let x = -w / 2; x <= w / 2; x += w / Math.max(1, Math.round(w / 3))) g.add(cylinder(0.04, 0.04, 2.1, metal, x, 1.05, 0, 6));
    const warn = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.5), signMat(plate('ZONA CONTAMINADA', '#f2c230', '#1b1b1b', 512, 160), 0));
    warn.position.set((rand() - 0.5) * (w - 2), 1.55, 0.03); g.add(warn);
  }
  g.position.set(p.x, 0, p.z); g.rotation.y = p.r ?? 0;
  group.add(g);
}

export function propMesh(group: THREE.Group, p: Record<string, unknown> & { kind: string; x: number; z: number; r?: number; w?: number; d?: number; look?: string; name?: string }, life: Life, seed: number, zone: string, low: boolean) {
  const rand = random(seed);
  const at = (o: THREE.Object3D) => { o.position.set(p.x, o.position.y, p.z); o.rotation.y = p.r ?? 0; group.add(o); return o; };
  switch (p.kind) {
    case 'car': case 'burnt': case 'van': case 'police': case 'bus': car(group, p, life, seed); return;
    case 'barricade': barricade(group, p, seed); return;
    case 'sandbags': {
      const g = new THREE.Group(); const w = p.w ?? 4; const sack = solid('#8f8460', 1);
      for (let row = 0; row < 3; row++) for (let x = -w / 2 + 0.35 + (row % 2) * 0.3; x < w / 2 - 0.2; x += 0.62) { const s = new THREE.Mesh(new THREE.CapsuleGeometry(0.17, 0.3, 3, 6), sack); s.rotation.z = Math.PI / 2; s.position.set(x, 0.17 + row * 0.27, (rand() - 0.5) * 0.3); g.add(s); }
      at(g); return;
    }
    case 'fence': {
      const g = new THREE.Group(); const w = p.w ?? 4; const metal = solid(p.look === 'borde' ? '#c9a227' : '#5a5e60', 0.5, 0.4);
      g.add(box(w, 0.06, 0.06, metal, 0, 1.0, 0), box(w, 0.06, 0.06, metal, 0, 0.55, 0));
      for (let x = -w / 2; x <= w / 2 + 0.01; x += 2) g.add(box(0.06, 1.05, 0.06, metal, x, 0.52, 0));
      at(g); return;
    }
    case 'crates': {
      const g = new THREE.Group();
      g.add(box(1.4, 0.9, 1.4, solid('#7a6040', 0.95), 0, 0.45, 0), box(0.8, 0.5, 0.8, solid('#3a5a3a', 0.9), 0.2, 1.15, -0.1));
      at(g); return;
    }
    case 'debris': {
      const g = new THREE.Group(); const rubble = [solid('#8a8278', 1), solid('#6a625a', 1), solid('#a89a88', 1)];
      for (let i = 0; i < 9; i++) { const s = 0.3 + rand() * 0.6; const m = new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), rubble[i % 3]); m.position.set((rand() - 0.5) * 2, s * 0.5, (rand() - 0.5) * 1.6); m.rotation.set(rand() * 3, rand() * 3, 0); g.add(m); }
      g.add(box(1.8, 0.08, 0.3, solid('#2a2a2a', 0.5, 0.6), 0.2, 0.7, 0.1, false));
      at(g); return;
    }
    case 'kiosk': {
      // The lottery booth, shutters half down, its sign still lit by a battery.
      const g = new THREE.Group();
      g.add(box(2.4, 2.4, 2.4, solid('#d8c49a', 0.8), 0, 1.2, 0), box(2.7, 0.2, 2.7, solid('#7a1f1f', 0.7), 0, 2.5, 0));
      const s = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 0.55), signMat(plate('LOTERÍA', '#b8241f', '#ffe9a8', 512, 128), 0.7));
      s.position.set(-1.22, 2.05, 0); s.rotation.y = -Math.PI / 2; g.add(s);
      g.add(box(0.05, 0.9, 1.8, solid('#2a2a2a', 0.5), -1.22, 1.3, 0));
      at(g); g.rotation.y = 0; return;
    }
    case 'statue': {
      // The bear and the strawberry tree (Oso y Madroño), on its pedestal.
      const g = new THREE.Group(); const bronze = solid('#4a3a2a', 0.45, 0.6);
      g.add(box(2.6, 1.4, 2.6, solid('#b8b2a4', 0.8), 0, 0.7, 0));
      const bear = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.9, 4, 8), bronze); bear.position.set(-0.2, 2.2, 0); bear.rotation.z = 0.35; g.add(bear);
      g.add(cylinder(0.12, 0.16, 2.6, bronze, 0.4, 2.7, 0, 8));
      const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 0), bronze); crown.position.set(0.4, 4.1, 0); g.add(crown);
      at(g); return;
    }
    case 'horse': {
      // An equestrian statue on a stone base.
      const g = new THREE.Group(); const bronze = solid('#3e4a42', 0.45, 0.6);
      g.add(box(3.4, 2.4, 3.4, solid('#c4bcac', 0.8), 0, 1.2, 0), box(3.8, 0.3, 3.8, solid('#a8a090', 0.8), 0, 2.45, 0));
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 1.5, 4, 8), bronze); body.rotation.z = Math.PI / 2; body.position.set(0, 3.7, 0); g.add(body);
      for (const [x, z] of [[-0.6, -0.3], [-0.6, 0.3], [0.6, -0.3], [0.6, 0.3]]) g.add(cylinder(0.1, 0.08, 1.1, bronze, x, 2.95, z, 6));
      const neck = new THREE.Mesh(new THREE.CapsuleGeometry(0.25, 0.7, 4, 6), bronze); neck.position.set(1.05, 4.3, 0); neck.rotation.z = -0.6; g.add(neck);
      const rider = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.75, 4, 8), bronze); rider.position.set(-0.1, 4.7, 0); g.add(rider);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), bronze); head.position.set(-0.1, 5.35, 0); g.add(head);
      at(g); return;
    }
    case 'fountain': {
      const g = new THREE.Group();
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.7, 0.7, 28), solid('#c4bcac', 0.8)); rim.position.y = 0.35; g.add(rim);
      const water = new THREE.Mesh(new THREE.CircleGeometry(2.35, 28), new THREE.MeshStandardMaterial({ color: '#3a4a3a', roughness: 0.2, metalness: 0.2 })); water.rotation.x = -Math.PI / 2; water.position.y = 0.6; g.add(water);
      g.add(cylinder(0.3, 0.45, 2.2, solid('#b8b0a0', 0.8), 0, 1.4, 0, 10));
      at(g); return;
    }
    case 'tree': { if (zone === 'atocha') addPalm(group, p.x, p.z, 6, seed); else addTree(group, p.x, p.z, seed); return; }
    case 'lamp': {
      const pole = cylinder(0.07, 0.1, 4.4, solid('#1e2124', 0.5, 0.5), p.x, 2.2, p.z, 8); group.add(pole);
      const bulb = glow('#ffcf8a', 1.4); life.lamps.push(bulb);
      const head = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.45, 8, 1, true), solid('#1e2124', 0.5, 0.5)); head.position.set(p.x, 4.45, p.z); head.rotation.x = Math.PI; group.add(head);
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), bulb); b.position.set(p.x, 4.3, p.z); group.add(b);
      life.sparks.push(new THREE.Vector3(p.x, 4.3, p.z));
      if (zone !== 'metro') lightPool(group, p.x, p.z, 3.5, '#ffcf8a', 0.18);
      return;
    }
    case 'semaforo': {
      group.add(cylinder(0.06, 0.08, 3.2, solid('#2a2d30', 0.5, 0.5), p.x, 1.6, p.z, 8));
      const head = box(0.32, 0.9, 0.28, solid('#1a1c1e', 0.6), p.x, 3.4, p.z, false); group.add(head);
      const amber = glow('#ffb02a', 0);
      for (const [y, m] of [[3.68, solid('#3a1a1a', 0.5)], [3.4, amber], [3.12, solid('#1a3a1a', 0.5)]] as const) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), m); l.position.set(p.x, y, p.z + 0.15); group.add(l); }
      life.ambers.push(amber);
      return;
    }
    case 'metro': {
      // A Metro de Madrid entrance: railings round the stairs and the red diamond on its post.
      const g = new THREE.Group(); const iron = solid('#2a2d30', 0.45, 0.5);
      g.add(box(3.2, 0.06, 5, solid('#1a1a1a', 0.9), 0, 0.03, 0, false));
      for (const [x, z, w, d] of [[-1.6, 0, 0.06, 5], [1.6, 0, 0.06, 5], [0, 2.5, 3.2, 0.06]] as const) { g.add(box(w, 1.05, d, iron, x, 0.55, z)); }
      const stairs = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 4.7), new THREE.MeshStandardMaterial({ map: once('stairs', () => canvas(64, 128, ctx => { for (let i = 0; i < 16; i++) { ctx.fillStyle = i % 2 ? '#3a3a3a' : '#1a1a1a'; ctx.fillRect(0, i * 8, 64, 8); } })), roughness: 0.9 }));
      stairs.rotation.x = -Math.PI / 2; stairs.position.y = 0.07; g.add(stairs);
      g.add(cylinder(0.06, 0.06, 3, iron, 1.6, 1.5, -2.5, 8));
      const logo = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.2), signMat(metroLogo(), 0.5)); logo.position.set(1.6, 3.4, -2.5); g.add(logo);
      const back = logo.clone(); back.rotation.y = Math.PI; g.add(back);
      const name = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.5), signMat(plate(p.name ?? 'METRO', '#1f3d8f', '#ffffff', 512, 96), 0.4)); name.position.set(0, 1.35, -2.53); name.rotation.y = Math.PI; g.add(name);
      at(g); return;
    }
    case 'table': {
      const g = new THREE.Group();
      g.add(box(1.8, 0.08, 0.9, solid('#5a4a38', 0.8), 0, 0.78, 0));
      for (const [x, z] of [[-0.8, -0.38], [0.8, -0.38], [-0.8, 0.38], [0.8, 0.38]]) g.add(box(0.06, 0.76, 0.06, solid('#2a2a2a', 0.5, 0.4), x, 0.38, z, false));
      if (p.look === 'radio') {
        // The pirate radio: a transmitter with its dials, a microphone and an antenna.
        g.add(box(0.7, 0.4, 0.4, solid('#3a3e36', 0.6, 0.3), -0.3, 1.02, 0));
        const dial = glow('#9fff7a', 1.2); g.add(box(0.5, 0.12, 0.02, dial, -0.3, 1.08, -0.21, false));
        g.add(cylinder(0.02, 0.02, 0.35, solid('#1a1a1a'), 0.4, 0.98, 0, 6));
        g.add(cylinder(0.012, 0.012, 3, solid('#8a8e90', 0.4, 0.8), -0.6, 2.3, 0.2, 4));
        life.lamps.push(dial);
      } else if (p.look === 'lab') {
        for (let i = 0; i < 5; i++) g.add(cylinder(0.05, 0.05, 0.28, glow(i % 2 ? '#6dff9e' : '#9fe8ff', 1), -0.7 + i * 0.35, 0.96, 0, 8));
        g.add(box(0.6, 0.4, 0.4, solid('#e8ecee', 0.4), 0.5, 1.02, 0.1));
      } else if (p.look === 'mapas' || p.look === 'mapa') {
        const map = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), new THREE.MeshStandardMaterial({ map: once('plano', () => canvas(256, 128, ctx => { ctx.fillStyle = '#e8e0c8'; ctx.fillRect(0, 0, 256, 128); ctx.strokeStyle = '#4a6a9a'; ctx.lineWidth = 3; for (let i = 0; i < 9; i++) { ctx.beginPath(); ctx.moveTo(0, 14 * i); ctx.lineTo(256, 14 * i + 30); ctx.stroke(); } ctx.strokeStyle = '#c33'; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(150, 60, 22, 0, 6.3); ctx.stroke(); })) }));
        map.rotation.x = -Math.PI / 2; map.position.y = 0.83; g.add(map);
      } else if (p.look === 'triaje' || p.look === 'reparto' || p.look === 'megafono') {
        g.add(box(0.5, 0.3, 0.35, solid(p.look === 'triaje' ? '#e8ecee' : '#c9a227', 0.6), -0.4, 0.97, 0));
        g.add(box(0.35, 0.05, 0.25, solid('#f4f4f0', 0.8), 0.4, 0.84, 0));
      }
      at(g); return;
    }
    case 'generator': {
      const g = new THREE.Group();
      g.add(box(1.7, 1.1, 1.0, solid('#c9a227', 0.6, 0.2), 0, 0.55, 0), box(0.4, 0.2, 0.4, solid('#2a2a2a'), 0.5, 1.2, 0));
      life.smoke.push(new THREE.Vector3(p.x + 0.5, 1.4, p.z));
      at(g); return;
    }
    case 'tent': {
      const w = p.w ?? 5, d = p.d ?? 4;
      const g = new THREE.Group();
      const canopyColor = p.look === 'militar' ? '#5a6040' : p.look === 'cruz' ? '#eef0ec' : p.look === 'escuela' ? '#d8c9a8' : ['#4a6a8a', '#8a5a3a', '#5a7a4a'][seed % 3];
      const cloth = new THREE.MeshStandardMaterial({ color: canopyColor, roughness: 0.95, side: THREE.DoubleSide });
      const open = (p as { solid?: boolean }).solid === false;
      // Roof: two slopes and the gables; closed tents also have walls.
      const roofGeo = new THREE.BufferGeometry();
      const hw = w / 2, hd = d / 2, eave = open ? 2.4 : 2.0, ridge = eave + 1.2;
      roofGeo.setAttribute('position', new THREE.Float32BufferAttribute([-hw, eave, -hd, 0, ridge, -hd, 0, ridge, hd, -hw, eave, -hd, 0, ridge, hd, -hw, eave, hd, hw, eave, -hd, hw, eave, hd, 0, ridge, hd, hw, eave, -hd, 0, ridge, hd, 0, ridge, -hd, -hw, eave, -hd, hw, eave, -hd, 0, ridge, -hd, -hw, eave, hd, 0, ridge, hd, hw, eave, hd], 3));
      roofGeo.computeVertexNormals();
      const roof = new THREE.Mesh(roofGeo, cloth); roof.castShadow = !low; g.add(roof);
      if (open) { for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(cylinder(0.06, 0.06, eave, solid('#8a8e90', 0.5, 0.5), sx * (hw - 0.1), eave / 2, sz * (hd - 0.1), 6)); }
      else { const walls = box(w, eave, d, cloth, 0, eave / 2, 0); g.add(walls); const door = box(1.2, 1.7, 0.02, solid('#2a2a2a'), 0, 0.85, -hd - 0.01, false); g.add(door); }
      if (p.look === 'cruz') { const c = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), signMat(once('cruz', () => canvas(64, 64, ctx => { ctx.fillStyle = '#d2221f'; ctx.fillRect(24, 6, 16, 52); ctx.fillRect(6, 24, 52, 16); })))); c.position.set(0, ridge - 0.3, -hd - 0.02); c.rotation.y = Math.PI; g.add(c); }
      if (p.look === 'escuela') {
        const board = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.3), new THREE.MeshStandardMaterial({ map: once('pizarra', () => canvas(256, 128, ctx => { ctx.fillStyle = '#26382c'; ctx.fillRect(0, 0, 256, 128); ctx.fillStyle = '#f2f2e8'; ctx.font = '600 22px "Comic Sans MS", cursive'; ctx.fillText('Hoy: el futuro', 18, 40); ctx.fillText('iré · serás · habrá', 18, 78); ctx.fillText('¡Deberes para mañana!', 18, 112); })) }));
        board.position.set(hw - 0.3, 1.5, 0); board.rotation.y = -Math.PI / 2; g.add(board);
        g.add(box(0.08, 1.5, 0.08, solid('#5a4a38'), hw - 0.3, 0.75, 1.0, false), box(0.08, 1.5, 0.08, solid('#5a4a38'), hw - 0.3, 0.75, -1.0, false));
      }
      g.position.set(p.x, 0, p.z); group.add(g); return;
    }
    case 'bed': {
      const g = new THREE.Group();
      g.add(box(2.0, 0.1, 0.95, solid('#8a8e90', 0.4, 0.6), 0, 0.5, 0), box(1.9, 0.12, 0.9, solid('#e8ecee', 0.9), 0, 0.6, 0), box(0.5, 0.1, 0.7, solid('#f6f6f2', 0.9), -0.7, 0.7, 0, false));
      for (const [x, z] of [[-0.95, -0.42], [0.95, -0.42], [-0.95, 0.42], [0.95, 0.42]]) g.add(box(0.05, 0.5, 0.05, solid('#8a8e90', 0.4, 0.6), x, 0.25, z, false));
      g.add(cylinder(0.015, 0.015, 1.7, solid('#b8bcbe', 0.4, 0.6), 1.05, 0.85, 0.5, 6));
      at(g); return;
    }
    case 'heli': { const h = helicopter(); life.spin.push(h.rotor); at(h.group); return; }
    case 'jeep': {
      const g = new THREE.Group(); const olive = solid('#4a5236', 0.7);
      g.add(box(4.2, 1.0, 2.0, olive, 0, 0.9, 0), box(2.0, 0.8, 1.9, olive, -0.6, 1.8, 0));
      for (const [x, z] of [[-1.4, -1], [1.4, -1], [-1.4, 1], [1.4, 1]]) { const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.35, 12), solid('#141414')); wheel.rotation.x = Math.PI / 2; wheel.position.set(x, 0.45, z); g.add(wheel); }
      at(g); return;
    }
    case 'container': {
      const g = new THREE.Group();
      g.add(box(6, 2.6, 2.5, solid(zone === 'hospital' ? '#e8ecee' : '#5a6040', 0.7, 0.3), 0, 1.3, 0));
      if (zone === 'hospital') { const s = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.6), signMat(plate('FARMACIA · VACÍO', '#ffffff', '#d2221f', 512, 96))); s.position.set(0, 1.7, 1.26); g.add(s); }
      at(g); return;
    }
    case 'boat': {
      const g = new THREE.Group();
      const hull = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.6, 5.2, 12, 1, false, 0, Math.PI), solid(p.look === 'barca' ? '#c46a1e' : '#f2f2ee', 0.6));
      hull.position.y = 0.2; hull.rotation.set(Math.PI, 0, Math.PI / 2); g.add(hull);
      g.add(box(4.6, 0.08, 1.2, solid('#7a5a3a', 0.9), 0, 0.15, 0, false));
      if (p.look === 'barca') { g.add(cylinder(0.05, 0.05, 2.6, solid('#ddd'), 0.8, 1.4, 0, 6)); const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.5), new THREE.MeshStandardMaterial({ color: '#f2f2ee', side: THREE.DoubleSide })); flag.position.set(1.2, 2.4, 0); g.add(flag); }
      g.position.set(p.x, -0.3, p.z); g.rotation.y = p.r ?? 0; group.add(g);
      (g as THREE.Object3D).userData.bob = true; life.spin.push(g);
      return;
    }
    case 'bench': addBench(group, p.x, p.z, p.r ?? 0); return;
    case 'counter': {
      const w = p.w ?? 3, d = p.d ?? 0.8;
      if (p.look === 'jardin') {
        // Atocha's tropical garden: a raised bed full of palms and big leaves.
        group.add(box(w, 0.5, d, solid('#6a5a48', 0.9), p.x, 0.25, p.z));
        const soil = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.4, d - 0.4), solid('#3a2e22', 1)); soil.rotation.x = -Math.PI / 2; soil.position.set(p.x, 0.51, p.z); group.add(soil);
        for (let i = 0; i < (low ? 5 : 9); i++) addPalm(group, p.x - w / 2 + 1.2 + rand() * (w - 2.4), p.z - d / 2 + 1 + rand() * (d - 2), 5 + rand() * 4, seed + i);
        for (let i = 0; i < 14; i++) { const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5 + rand() * 0.5, 0), solid(['#2f5a2c', '#3c6a32', '#4a7a3a'][i % 3], 0.9)); leaf.position.set(p.x - w / 2 + 0.6 + rand() * (w - 1.2), 0.8, p.z - d / 2 + 0.6 + rand() * (d - 1.2)); leaf.scale.y = 0.6; group.add(leaf); }
        return;
      }
      if (p.look === 'portal') {
        // Doña Remedios' doorway: steps and a wooden door.
        group.add(box(w, 0.25, 0.8, solid('#b8b0a0', 0.9), p.x, 0.12, p.z), box(1.4, 2.6, 0.1, solid('#5a3a22', 0.7), p.x, 1.55, p.z - 0.45));
        return;
      }
      const g = new THREE.Group();
      g.add(box(w, 1.05, d, solid(zone === 'plaza' ? '#7a5a3a' : '#5a4a3a', 0.85), 0, 0.52, 0));
      if (zone === 'plaza') { const s = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.6), signMat(plate('CONTROL · REFUGIO', '#1f2b45', '#ffffff', 512, 112), 0.3)); s.position.set(0, 1.6, -0.45); s.rotation.y = Math.PI; g.add(s); g.add(box(0.05, 0.9, 0.05, solid('#2a2a2a'), -1.2, 1.4, -0.4, false), box(0.05, 0.9, 0.05, solid('#2a2a2a'), 1.2, 1.4, -0.4, false)); }
      at(g); return;
    }
    case 'stove': {
      const g = new THREE.Group();
      g.add(box(1.2, 0.95, 0.8, solid('#5a5e60', 0.5, 0.5), 0, 0.47, 0));
      const pot = cylinder(0.28, 0.25, 0.35, solid('#9aa0a4', 0.3, 0.8), -0.2, 1.12, 0, 12); g.add(pot);
      const flame = glow('#4aa8ff', 1.6); const f = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.18, 8), flame); f.position.set(-0.2, 0.98, 0); g.add(f);
      life.smoke.push(new THREE.Vector3(p.x - 0.2, 1.4, p.z));
      at(g); return;
    }
    case 'pillar': group.add(box(0.8, 5.2, 0.8, solid('#e6e0d2', 0.85), p.x, 2.6, p.z)); return;
    case 'screen': {
      const g = new THREE.Group();
      g.add(box(0.25, 3.2, p.w ?? 6, solid('#1a1c1e', 0.5), 0, 1.6, 0));
      const tex = once('paneles', () => canvas(512, 256, ctx => { ctx.fillStyle = '#0a0c0e'; ctx.fillRect(0, 0, 512, 256); ctx.font = '600 24px monospace'; const rows = [['08:15', 'SEVILLA', 'CANCELADO'], ['08:40', 'BARCELONA', 'CANCELADO'], ['09:05', 'VALENCIA', 'CANCELADO'], ['09:30', 'TOLEDO', 'CANCELADO'], ['??:??', 'SALIDA ÚNICA', 'EMBARQUE']]; rows.forEach((r, i) => { ctx.fillStyle = '#ffcf4a'; ctx.fillText(r[0], 16, 40 + i * 44); ctx.fillText(r[1], 120, 40 + i * 44); ctx.fillStyle = i === 4 ? '#6dff9e' : '#ff5a4a'; ctx.fillText(r[2], 340, 40 + i * 44); }); }));
      for (const s of [-1, 1]) { const m = new THREE.Mesh(new THREE.PlaneGeometry((p.w ?? 6) - 0.3, 2.6), signMat(tex, 0.9)); m.position.set(s * 0.14, 1.9, 0); m.rotation.y = s * Math.PI / 2; g.add(m); }
      at(g); return;
    }
    case 'train': {
      // A stopped train: white body, dark windows and a red band.
      const g = new THREE.Group(); const len = p.w ?? 30;
      const carLen = 9.6;
      for (let x = -len / 2 + carLen / 2; x < len / 2; x += carLen + 0.4) {
        g.add(box(carLen, 3.0, 2.9, solid(zone === 'metro' ? '#d8d2c0' : '#eeeeea', 0.5, 0.2), x, 1.5 + (zone === 'metro' ? -1.1 : 0), 0));
        g.add(box(carLen + 0.02, 0.8, 2.92, solid('#1a222a', 0.15, 0.5), x, 2.1 + (zone === 'metro' ? -1.1 : 0), 0, false));
        g.add(box(carLen + 0.03, 0.18, 2.93, solid(zone === 'metro' ? '#2a5aa8' : '#b8241f', 0.5), x, 1.35 + (zone === 'metro' ? -1.1 : 0), 0, false));
      }
      at(g); return;
    }
    default: return;
  }
}

/** A military helicopter, olive drab; the rotor is returned to spin. */
export function helicopter() {
  const g = new THREE.Group(); const olive = solid('#4a5236', 0.6, 0.2);
  const cab = new THREE.Mesh(new THREE.CapsuleGeometry(1.3, 3.2, 6, 12), olive); cab.rotation.z = Math.PI / 2; cab.position.y = 1.7; g.add(cab);
  g.add(box(5, 0.5, 0.5, olive, 4.2, 2.1, 0), box(0.2, 1.4, 0.8, olive, 6.6, 2.6, 0));
  g.add(box(0.25, 0.2, 3, solid('#2a2a2a'), -1, 0.15, 0), box(0.25, 0.2, 3, solid('#2a2a2a'), 1, 0.15, 0));
  const glass = new THREE.Mesh(new THREE.SphereGeometry(1.05, 12, 8, 0, Math.PI), new THREE.MeshStandardMaterial({ color: '#1a2a30', roughness: 0.1, metalness: 0.6 })); glass.position.set(-1.9, 1.9, 0); glass.rotation.y = Math.PI / 2; g.add(glass);
  const rotor = new THREE.Group(); rotor.position.y = 3.25;
  for (let i = 0; i < 4; i++) { const blade = box(5.2, 0.05, 0.3, solid('#1e2124'), 2.6, 0, 0, false); const pv = new THREE.Group(); pv.rotation.y = i * Math.PI / 2; pv.add(blade); rotor.add(pv); }
  g.add(rotor);
  return { group: g, rotor };
}

/** The orange boat of the last crossing, for the finale (the pier one stays in the zone). */
export function boat() {
  const g = new THREE.Group();
  const hull = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.6, 5.2, 12, 1, false, 0, Math.PI), solid('#c46a1e', 0.6));
  hull.position.y = 0.2; hull.rotation.set(Math.PI, 0, Math.PI / 2); g.add(hull);
  g.add(box(4.6, 0.08, 1.2, solid('#7a5a3a', 0.9), 0, 0.15, 0, false));
  g.add(cylinder(0.05, 0.05, 2.6, solid('#dddddd'), 0.8, 1.4, 0, 6));
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.5), new THREE.MeshStandardMaterial({ color: '#f2f2ee', side: THREE.DoubleSide })); flag.position.set(1.2, 2.4, 0); g.add(flag);
  return g;
}

// ------------------------------------------------------------------ landmarks
export function landmark(group: THREE.Group, l: Record<string, unknown> & { kind: string }, life: Life, low: boolean) {
  const stone = solid('#e8e0cc', 0.85), slate = solid('#2e3238', 0.6, 0.3), gold = solid('#c9a24a', 0.35, 0.8);
  const L = l as Record<string, number> & { kind: string };
  switch (l.kind) {
    case 'correos': {
      // Casa de Correos: brick and stone, the tower with the clock stopped at 6:17.
      const w = L.x1 - L.x0, d = L.z1 - L.z0, cx = (L.x0 + L.x1) / 2, cz = (L.z0 + L.z1) / 2;
      building(group, { x0: L.x0, x1: L.x1, z0: L.z0, z1: L.z1, h: 14, color: '#b2563c', style: 'brick', ruin: 0.35, seed: 900 }, { x: 0, z: 0 }, low);
      group.add(box(w + 0.6, 1.1, d + 0.6, stone, cx, 14.2, cz, false));
      const tower = box(5, 6, 4, solid('#b2563c', 0.9), cx, 17, L.z0 + 2.4); group.add(tower);
      group.add(box(5.6, 0.6, 4.6, stone, cx, 20.2, L.z0 + 2.4, false));
      const cupola = new THREE.Mesh(new THREE.SphereGeometry(1.6, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), slate); cupola.position.set(cx, 20.5, L.z0 + 2.4); group.add(cupola);
      const clock = new THREE.Mesh(new THREE.CircleGeometry(1.3, 32), new THREE.MeshStandardMaterial({ map: clockFace(), emissive: '#ffe9b8', emissiveIntensity: 0.25 }));
      clock.position.set(cx, 17.4, L.z0 + 0.38); clock.rotation.y = Math.PI; group.add(clock);
      const door = box(3, 4, 0.2, solid('#3a2a1e'), cx, 2, L.z0 - 0.05, false); group.add(door);
      const km = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), new THREE.MeshStandardMaterial({ map: once('km0', () => canvas(128, 72, ctx => { ctx.fillStyle = '#c9c0a8'; ctx.fillRect(0, 0, 128, 72); ctx.fillStyle = '#2a2a2a'; ctx.font = '800 30px Arial'; ctx.textAlign = 'center'; ctx.fillText('KM 0', 64, 46); })) }));
      km.rotation.x = -Math.PI / 2; km.position.set(cx + 4, 0.03, L.z0 - 2); group.add(km);
      const banner = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.2), signMat(plate('EVACUACIÓN · SIGA LAS FLECHAS ROJAS', '#d2221f', '#ffffff', 1024, 128), 0.3));
      banner.position.set(cx, 8, L.z0 - 0.08); banner.rotation.y = Math.PI; group.add(banner);
      return;
    }
    case 'metropolis': {
      // The Metrópolis: a round corner tower, the black dome with gold bands and the winged Victory on top.
      const cx = 18, cz = 41;
      building(group, { x0: L.x0 + 4, x1: L.x1, z0: L.z0 + 3, z1: L.z1, h: 22, color: '#ece4d2', style: 'classic', ruin: 0.4, seed: 901 }, { x: 0, z: 0 }, low);
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.2, 24, 24), new THREE.MeshStandardMaterial({ map: facadeTexture('#ece4d2', 'classic', 902, 0.4), roughness: 0.85 })); drum.position.set(cx - 1, 12, cz - 2); group.add(drum);
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(5.6, 5.6, 1, 24), stone); ring.position.set(cx - 1, 24.5, cz - 2); group.add(ring);
      const dome = new THREE.Mesh(new THREE.SphereGeometry(5, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), solid('#15171b', 0.35, 0.4)); dome.position.set(cx - 1, 25, cz - 2); dome.scale.y = 1.25; group.add(dome);
      for (let i = 0; i < 6; i++) { const band = new THREE.Mesh(new THREE.TorusGeometry(5, 0.08, 4, 32, Math.PI), gold); band.position.set(cx - 1, 25, cz - 2); band.rotation.y = i * Math.PI / 6; band.scale.y = 1.25; group.add(band); }
      const statue = new THREE.Group(); statue.position.set(cx - 1, 31.6, cz - 2);
      const bronze = solid('#2a2e2a', 0.4, 0.6);
      const fig = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 1.4, 4, 8), bronze); fig.position.y = 1.1; statue.add(fig);
      for (const s of [-1, 1]) { const wing = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 2.2), new THREE.MeshStandardMaterial({ color: '#c9a24a', metalness: 0.8, roughness: 0.35, side: THREE.DoubleSide })); wing.position.set(s * 0.9, 1.7, -0.2); wing.rotation.set(0, s * 0.5, s * 0.4); statue.add(wing); }
      statue.add(cylinder(0.5, 0.7, 0.8, stone, 0, 0.1, 0, 10));
      group.add(statue);
      return;
    }
    case 'panaderia': {
      // Casa de la Panadería: painted facade between two slate towers; the arch under it is the way on.
      const fresco = new THREE.Mesh(new THREE.PlaneGeometry(14, 9), new THREE.MeshStandardMaterial({ map: once('fresco', () => canvas(512, 320, ctx => { ctx.fillStyle = '#c7774a'; ctx.fillRect(0, 0, 512, 320); const rand = random(77); for (let i = 0; i < 40; i++) { ctx.fillStyle = ['#e8b36a', '#7a9ab8', '#d2c09a', '#8a4a3a', '#5a7a5a'][i % 5]; ctx.beginPath(); ctx.ellipse(rand() * 512, 40 + rand() * 240, 14 + rand() * 30, 30 + rand() * 40, rand() * 3, 0, 6.3); ctx.fill(); } for (let c = 0; c < 6; c++) { ctx.fillStyle = '#1e1e1e'; ctx.fillRect(40 + c * 80, 120, 34, 60); ctx.fillStyle = '#ece4d2'; ctx.fillRect(34 + c * 80, 182, 46, 6); } })), roughness: 0.9 }));
      fresco.position.set(0, 10, 19.95); fresco.rotation.y = Math.PI; group.add(fresco);
      for (const x of [-16, 16]) {
        group.add(box(5, 22, 5, solid('#9a4a36', 0.9), x, 11, 25));
        const spire = new THREE.Mesh(new THREE.ConeGeometry(3.2, 7, 4), slate); spire.position.set(x, 25.5, 25); spire.rotation.y = Math.PI / 4; group.add(spire);
      }
      const arch = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.5, 6, 18, Math.PI), stone); arch.position.set(0, 3.2, 19.9); group.add(arch);
      group.add(box(0.9, 3.2, 0.9, stone, -2.2, 1.6, 19.9), box(0.9, 3.2, 0.9, stone, 2.2, 1.6, 19.9));
      return;
    }
    case 'andenes': {
      // Chamberí: a vault of white tiles, old ceramic adverts, the tracks in a pit, lamps that flicker.
      const vaultTex = facadeTexture('#efeae0', 'tiles', 950, 0.2);
      vaultTex.repeat.set(14, 3);
      const vault = new THREE.Mesh(new THREE.CylinderGeometry(9.4, 9.4, 58, 24, 1, true, 0, Math.PI), new THREE.MeshStandardMaterial({ map: vaultTex, roughness: 0.6, side: THREE.DoubleSide }));
      // The axis runs along x; the half with local x > 0 becomes the roof, flattened to a low vault.
      vault.rotation.z = Math.PI / 2; vault.position.set(0, 3.0, 0); vault.scale.x = 0.24; group.add(vault);
      for (const z of [-9, 9]) {
        const wall = new THREE.Mesh(new THREE.PlaneGeometry(58, 3.2), new THREE.MeshStandardMaterial({ map: (() => { const t = facadeTexture('#efeae0', 'tiles', 951 + z, 0.2); t.repeat.set(14, 1); return t; })(), roughness: 0.6 }));
        wall.position.set(0, 1.6, z * 0.995); wall.rotation.y = z > 0 ? Math.PI : 0; group.add(wall);
      }
      const ads = ['MADRID · 1919', 'CHAMBERÍ', 'HAY QUE BAJAR', 'CHAMBERÍ'];
      ads.forEach((text, i) => { const ad = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.3), signMat(i % 2 ? plate(text, '#1f3d8f', '#ffffff', 512, 144) : plate(text, '#efe2c2', '#7a2a1e', 512, 144, 700), 0.15)); ad.position.set(-18 + i * 12, 2.1, 8.94); ad.rotation.y = Math.PI; group.add(ad); });
      const logo = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 1.3), signMat(metroLogo(), 0.4)); logo.position.set(-24, 2.4, 8.93); logo.rotation.y = Math.PI; group.add(logo);
      // The pit: lower floor with sleepers and rails.
      const pit = new THREE.Mesh(new THREE.PlaneGeometry(58, 4.4), solid('#2a2622', 1)); pit.rotation.x = -Math.PI / 2; pit.position.set(0, -1.1, -2.4); group.add(pit);
      for (const z of [-3.1, -1.7]) group.add(box(58, 0.12, 0.1, solid('#8a8e90', 0.3, 0.8), 0, -1.0, z, false));
      group.add(box(58, 1.1, 0.2, solid('#3a3632', 1), 0, -0.55, -0.2, false), box(58, 1.1, 0.2, solid('#3a3632', 1), 0, -0.55, -4.6, false));
      const far = new THREE.Mesh(new THREE.PlaneGeometry(58, 4.4), new THREE.MeshStandardMaterial({ map: (() => { const t = tileTexture('#b9b2a2', '#8a8476', 6); t.repeat.set(12, 1); return t; })(), roughness: 0.8 })); far.rotation.x = -Math.PI / 2; far.position.set(0, 0.01, -6.8); group.add(far);
      for (let x = -24; x <= 24; x += 8) { const lamp = glow('#ffe2a8', 1.6); life.lamps.push(lamp); const l = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), lamp); l.position.set(x, 4.6, 3); group.add(l); group.add(cylinder(0.02, 0.02, 0.6, solid('#1a1a1a'), x, 4.95, 3, 4)); life.sparks.push(l.position.clone()); }
      return;
    }
    case 'retiro': {
      const pond = l.pond as { x0: number; x1: number; z0: number; z1: number };
      const water = new THREE.Mesh(new THREE.PlaneGeometry(pond.x1 - pond.x0, pond.z1 - pond.z0), new THREE.MeshStandardMaterial({ color: '#4a6a5a', roughness: 0.12, metalness: 0.2 }));
      water.rotation.x = -Math.PI / 2; water.position.set((pond.x0 + pond.x1) / 2, 0.05, (pond.z0 + pond.z1) / 2); group.add(water);
      // A green bloom on the water: the virus feeds on it.
      for (let i = 0; i < 8; i++) { const scum = new THREE.Mesh(new THREE.CircleGeometry(0.8 + i * 0.2, 12), new THREE.MeshBasicMaterial({ color: '#7fd06a', transparent: true, opacity: 0.25, depthWrite: false })); scum.rotation.x = -Math.PI / 2; scum.position.set(pond.x0 + 3 + i * 3, 0.07, pond.z0 + 4 + (i % 3) * 4); group.add(scum); }
      for (const [x0, z0, x1, z1] of [[pond.x0, pond.z0 - 0.4, pond.x1, pond.z0], [pond.x0 - 0.4, pond.z0, pond.x0, pond.z1], [pond.x1, pond.z0, pond.x1 + 0.4, pond.z1]]) group.add(box(x1 - x0, 0.5, z1 - z0, stone, (x0 + x1) / 2, 0.25, (z0 + z1) / 2));
      // The Alfonso XII colonnade and its rider.
      for (let i = 0; i <= 10; i++) { const a = Math.PI * (i / 10); group.add(cylinder(0.35, 0.4, 7, stone, Math.cos(a) * 12, 3.5, 26 + Math.sin(a) * 3.5, 10)); }
      group.add(box(28, 1.2, 1.6, stone, 0, 7.5, 27.5, false), box(5, 9, 5, stone, 0, 4.5, 24.5));
      const rider = new THREE.Mesh(new THREE.CapsuleGeometry(0.7, 1.8, 4, 8), solid('#3e4a42', 0.45, 0.6)); rider.position.set(0, 10.4, 24.5); group.add(rider);
      // The Palacio de Cristal: glass, iron and a dome; inside, a lab that should not be there.
      const pal = l.palace as { x0: number; x1: number; z0: number; z1: number };
      const pw = pal.x1 - pal.x0, pd = pal.z1 - pal.z0, pcx = (pal.x0 + pal.x1) / 2, pcz = (pal.z0 + pal.z1) / 2;
      const glass = new THREE.MeshStandardMaterial({ color: '#cfe6ea', transparent: true, opacity: 0.28, roughness: 0.05, metalness: 0.3, side: THREE.DoubleSide, depthWrite: false });
      group.add(box(pw, 0.6, pd, solid('#c9c0a8', 0.9), pcx, 0.3, pcz));
      const shell = new THREE.Mesh(new THREE.BoxGeometry(pw, 7, pd), glass); shell.position.set(pcx, 4.1, pcz); group.add(shell);
      const dome = new THREE.Mesh(new THREE.SphereGeometry(4.2, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), glass); dome.position.set(pcx, 7.6, pcz); group.add(dome);
      const iron = solid('#e8ecee', 0.5, 0.4);
      for (let x = pal.x0; x <= pal.x1 + 0.01; x += pw / 6) { group.add(box(0.12, 7, 0.12, iron, x, 4.1, pal.z0, false), box(0.12, 7, 0.12, iron, x, 4.1, pal.z1, false)); }
      for (const y of [0.6, 4.1, 7.6]) { group.add(box(pw, 0.12, 0.12, iron, pcx, y, pal.z0, false), box(pw, 0.12, 0.12, iron, pcx, y, pal.z1, false)); }
      for (let i = 0; i < 6; i++) { const tank = cylinder(0.45, 0.45, 2.2, glow(i % 2 ? '#6dff9e' : '#48d0a0', 0.9), pal.x0 + 1.5 + i * 1.8, 1.7, pcz + (i % 2 ? 2 : -2), 12); group.add(tank); }
      const tape = new THREE.Mesh(new THREE.PlaneGeometry(pw, 0.3), signMat(plate('PROYECTO KILÓMETRO CERO · ACCESO RESTRINGIDO', '#f2c230', '#1b1b1b', 1024, 64)));
      tape.position.set(pcx, 1.4, pal.z0 - 0.05); tape.rotation.y = Math.PI; group.add(tape);
      return;
    }
    case 'monteleon': {
      // The brick arch of Monteleón in the Plaza del Dos de Mayo.
      const brick = solid('#a4553a', 0.9);
      group.add(box(1.2, 5.2, 1.6, brick, -2.8, 2.6, 14), box(1.2, 5.2, 1.6, brick, 2.8, 2.6, 14));
      const arch = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.55, 6, 18, Math.PI), brick); arch.position.set(0, 5.2, 14); arch.scale.z = 1.4; group.add(arch);
      group.add(box(7.4, 0.8, 1.8, brick, 0, 8.3, 14, false));
      // Strings of bulbs across the square: the bar's generator still feeds them.
      for (let i = 0; i < 14; i++) { const bulb = glow('#ffcf7a', 1.2); life.lamps.push(bulb); const b = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 4), bulb); b.position.set(-12 + i * 1.8, 4.2 + Math.sin(i / 13 * Math.PI) * -0.6, -10); group.add(b); }
      const bar = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 0.9), signMat(plate('EL ÚLTIMO VERMÚ', '#1b1b1b', '#ff5aa8', 512, 112), 1.2)); bar.position.set(-15.9, 3.6, -11); bar.rotation.y = Math.PI / 2; group.add(bar);
      const rest = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 0.9), signMat(plate('PARRILLA GALVÁN', '#f2e6cc', '#7a2a1e', 512, 112), 0.4)); rest.position.set(15.9, 3.6, -16.5); rest.rotation.y = -Math.PI / 2; group.add(rest);
      return;
    }
    case 'atocha': {
      // The old hall of Atocha: iron arches and a glass vault over the garden.
      const iron = solid('#3a4044', 0.5, 0.6);
      for (let z = -28; z <= 28; z += 7) { const arch = new THREE.Mesh(new THREE.TorusGeometry(22, 0.28, 6, 40, Math.PI), iron); arch.position.set(0, 6, z); arch.scale.y = 0.75; group.add(arch); }
      const vault = new THREE.Mesh(new THREE.CylinderGeometry(22, 22, 56, 28, 1, true, -Math.PI / 2, Math.PI), new THREE.MeshStandardMaterial({ color: '#c8d8dc', transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }));
      // Axis along z, the z > 0 half of the cylinder turned up into a vault.
      vault.rotation.x = -Math.PI / 2; vault.position.set(0, 6, 0); vault.scale.set(1, 1, 0.75); group.add(vault);
      const big = new THREE.Mesh(new THREE.PlaneGeometry(16, 1.6), signMat(plate('ESTACIÓN DE ATOCHA', '#2a2a2a', '#f2f2ee', 1024, 112), 0.4)); big.position.set(0, 9, 27.6); big.rotation.y = Math.PI; group.add(big);
      const clock = new THREE.Mesh(new THREE.CircleGeometry(1.4, 28), new THREE.MeshStandardMaterial({ map: clockFace(), emissive: '#ffe9b8', emissiveIntensity: 0.25 })); clock.position.set(0, 11.5, 27.55); clock.rotation.y = Math.PI; group.add(clock);
      for (const x of [-14.4, 14.4]) for (let z = -18; z <= 22; z += 10) { const lamp = glow('#ffe2a8', 1.2); life.lamps.push(lamp); const b = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), lamp); b.position.set(x, 3.8, z); group.add(b); group.add(cylinder(0.05, 0.06, 3.8, iron, x, 1.9, z, 6)); }
      return;
    }
    case 'palacio': {
      // The Palacio Real: a long white facade of columns and windows, statues on the roofline.
      const w = L.x1 - L.x0, cx = (L.x0 + L.x1) / 2;
      const tex = canvas(512, 256, ctx => {
        ctx.fillStyle = '#ece6d6'; ctx.fillRect(0, 0, 512, 256);
        for (let c = 0; c < 8; c++) { ctx.fillStyle = '#e2dac6'; ctx.fillRect(c * 64 + 2, 0, 10, 256); ctx.fillStyle = '#2a2e34'; ctx.fillRect(c * 64 + 22, 40, 26, 60); ctx.fillRect(c * 64 + 22, 150, 26, 64); ctx.fillStyle = '#d8ceb6'; ctx.fillRect(c * 64 + 18, 32, 34, 8); ctx.fillRect(c * 64 + 18, 140, 34, 8); }
        ctx.fillStyle = 'rgba(40,40,40,0.08)'; for (let i = 0; i < 80; i++) ctx.fillRect(Math.random() * 512, Math.random() * 256, 3, 20);
      }, true);
      tex.repeat.set(w / 14, 1);
      const facade = new THREE.Mesh(new THREE.BoxGeometry(w, 22, L.z1 - L.z0), [stone, stone, stone, stone, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 }), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85 })]);
      facade.position.set(cx, 11, (L.z0 + L.z1) / 2); group.add(facade);
      group.add(box(w + 1, 1.2, L.z1 - L.z0 + 1, stone, cx, 22.6, (L.z0 + L.z1) / 2, false));
      for (let x = L.x0 + 2; x < L.x1; x += 4) { const s = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 1.2, 3, 6), solid('#d8d0bc', 0.8)); s.position.set(x, 24.2, L.z0 + 0.6); group.add(s); }
      group.add(box(12, 3, 1, stone, cx, 9, L.z0 - 0.5, false));
      const flag = new THREE.Mesh(new THREE.PlaneGeometry(3, 1.8), new THREE.MeshStandardMaterial({ map: once('bandera', () => canvas(96, 64, ctx => { ctx.fillStyle = '#c60b1e'; ctx.fillRect(0, 0, 96, 64); ctx.fillStyle = '#ffc400'; ctx.fillRect(0, 16, 96, 32); })), side: THREE.DoubleSide }));
      flag.position.set(cx + 1.6, 27, L.z0 + 1); group.add(flag); group.add(cylinder(0.06, 0.06, 5, solid('#cfd3d8', 0.3, 0.8), cx, 25.4, L.z0 + 1, 6));
      life.spin.push(flag); flag.userData.wave = true;
      // Floodlights of the military camp.
      for (const x of [-20, 20]) { const f = glow('#e8f0ff', 2); life.lamps.push(f); group.add(cylinder(0.08, 0.1, 6, solid('#3a3e40', 0.5, 0.5), x, 3, 20, 6)); const h = box(0.8, 0.5, 0.4, f, x, 6.2, 19.8, false); group.add(h); }
      return;
    }
    case 'campana': {
      const big = new THREE.Mesh(new THREE.PlaneGeometry(12, 1.4), signMat(plate('HOSPITAL DE CAMPAÑA · TRIAJE', '#ffffff', '#d2221f', 1024, 112), 0.3)); big.position.set(0, 4.4, 11.2); big.rotation.y = Math.PI; group.add(big);
      group.add(cylinder(0.08, 0.08, 4.8, solid('#8a8e90', 0.5, 0.5), -6, 2.4, 11.2, 6), cylinder(0.08, 0.08, 4.8, solid('#8a8e90', 0.5, 0.5), 6, 2.4, 11.2, 6));
      for (let i = 0; i < 6; i++) { const drip = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.25, 8), new THREE.MeshStandardMaterial({ color: '#e8fff4', transparent: true, opacity: 0.7 })); drip.position.set(-16 + i * 6.4, 1.6, 3.9); group.add(drip); }
      return;
    }
    case 'rio': {
      const W = l.water as { x0: number; x1: number; z0: number; z1: number };
      const water = new THREE.Mesh(new THREE.PlaneGeometry(W.x1 - W.x0, W.z1 - W.z0), new THREE.MeshStandardMaterial({ color: '#3a5a62', roughness: 0.1, metalness: 0.25 }));
      water.rotation.x = -Math.PI / 2; water.position.set((W.x0 + W.x1) / 2, -0.45, (W.z0 + W.z1) / 2); group.add(water); water.userData.river = true; life.spin.push(water);
      group.add(box(W.x1 - W.x0, 1.4, 0.6, stone, (W.x0 + W.x1) / 2, -0.5, W.z0 - 0.3), box(W.x1 - W.x0, 1.4, 0.6, stone, (W.x0 + W.x1) / 2, -0.5, W.z1 + 0.3));
      // The railing of the riverside walk, with a gap at the pier.
      for (let x = -30; x <= 30; x += 2) if (Math.abs(x - 22) > 2.5) group.add(cylinder(0.04, 0.04, 1, solid('#2a2d30', 0.5, 0.5), x, 0.5, W.z0 - 0.4, 6));
      group.add(box(56, 0.06, 0.06, solid('#2a2d30', 0.5, 0.5), -3, 1, W.z0 - 0.4, false));
      // The Puente de Segovia: granite arches over the Manzanares.
      const bx = (l.bridge as { x: number }).x;
      group.add(box(7, 1.2, 40, solid('#a8a090', 0.9), bx, 1.8, 26));
      for (let z = 14; z <= 40; z += 5) { group.add(box(7, 3.2, 1.6, solid('#a8a090', 0.9), bx, 0, z)); }
      group.add(box(0.4, 0.8, 40, solid('#b8b0a0', 0.9), bx - 3.3, 2.8, 26), box(0.4, 0.8, 40, solid('#b8b0a0', 0.9), bx + 3.3, 2.8, 26));
      // The pier of the last boat.
      group.add(box(3.6, 0.15, 3.4, solid('#7a5a3a', 0.9), 22, -0.1, 20.6, false));
      // Far bank: trees and the skyline of the other side.
      for (let x = -55; x < 60; x += 7) addTree(group, x, 36 + (x % 3), 600 + x);
      return;
    }
    default: return;
  }
}

// ------------------------------------------------------------------ people
const ZOMBIE_SKIN = ['#8e9a82', '#9aa08a', '#7a8670', '#a3a594', '#8b8f9a', '#9a9078'];
export function zombieLook(seed: number) {
  const rand = random(seed);
  return {
    skin: ZOMBIE_SKIN[seed % ZOMBIE_SKIN.length], body: rand() < 0.5 ? 'f' : 'm', age: ['young', 'adult', 'old'][seed % 3], build: 'slim',
    top: ['shirt', 'suit', 'hoodie', 'tshirt', 'coat', 'scrubs'][seed % 6], topColor: ['#4a4a44', '#5a4a3a', '#3a4048', '#6a6a5a'][seed % 4],
    bottom: 'pants', bottomColor: '#2e2e2a', hairStyle: ['short', 'long', 'bald', 'curly'][seed % 4], hairColor: '#3a3a34',
    extras: ['bruise', ...[['blood-shirt', 'blood-hands'], ['blood-head'], ['blood-arm', 'blood-leg'], ['blood-shirt', 'blood-head', 'bloody-palm'], ['bandage', 'blood-leg']][seed % 5]],
  };
}

// ------------------------------------------------------------------ the zone
export function buildZone(id: string, { low, shadows, labels }: { low: boolean; shadows: boolean; labels?: { gate?: string; back?: string } }): Zone3D {
  const z = layoutOf(id) as ReturnType<typeof layoutOf> & Record<string, never>;
  if (!z) throw new Error(`Unknown zone ${id}`);
  const group = new THREE.Group();
  const life: Life = { lamps: [], ambers: [], fires: [], smoke: [], spin: [], sparks: [], alarms: [] };
  const zone = id;
  const b = z.bounds as { minX: number; maxX: number; minZ: number; maxZ: number };
  const centre = { x: (b.minX + b.maxX) / 2, z: (b.minZ + b.maxZ) / 2 };

  // Ground: the zone's paving, a wider street around it.
  const grounds: Record<string, [string, string[], number]> = {
    stone: ['#a59c8e', ['#8f877a', '#b8b0a2', '#6f675f'], 3], asphalt: ['#45474b', ['#3a3c40', '#55575b', '#2e3034'], 6], cobble: ['#8e857a', ['#766d62', '#a39a8e'], 2],
    tiles: ['#b9b2a2', ['#a8a090', '#cfc8b8'], 2], grass: ['#5f7a45', ['#4f6a38', '#6f8a52', '#7a7a4a'], 6], gravel: ['#b8ae98', ['#a89e88', '#c8bea8', '#988e78'], 4],
    park: ['#6a7f4a', ['#5a6f3c', '#7a8f5a'], 6],
  };
  const [base, specks, rep] = grounds[z.ground as string] ?? grounds.stone;
  if (id === 'metro') {
    // The platforms either side, and the pit with the tracks in between.
    const floor = groundTexture(base, specks, 3005);
    ground(group, -32, -0.2, 32, 12, floor, '#ffffff', rep);
    ground(group, -32, -12, 32, -4.6, floor, '#ffffff', rep);
  } else if (id === 'rio') {
    // This bank and the far one; the Manzanares runs between them.
    const grass = groundTexture(base, specks, 3010);
    const W = (z.landmark as { water: { z0: number; z1: number } }).water;
    ground(group, b.minX - 40, b.minZ - 40, b.maxX + 40, W.z0, grass, '#ffffff', rep);
    ground(group, b.minX - 40, W.z1, b.maxX + 40, W.z1 + 40, grass, '#ffffff', rep);
  } else ground(group, b.minX - 40, b.minZ - 40, b.maxX + 40, b.maxZ + 40, groundTexture(base, specks, 3000 + id.length), '#ffffff', rep);
  if (id !== 'metro' && (z.ground === 'stone' || z.ground === 'cobble' || z.ground === 'tiles')) ground(group, b.minX, b.minZ, b.maxX, b.maxZ, tileTexture(base, '#6f675f', 4), '#ffffff', 3, 0.012);
  if (z.ground === 'park') ground(group, b.minX, 10, b.maxX, 19.6, groundTexture('#c8b898', ['#b8a888', '#d8c8a8'], 3101), '#ffffff', 4, 0.012);
  if (id === 'granvia') {
    // Lane markings, half erased.
    for (let zz = b.minZ; zz < b.maxZ; zz += 6) { const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 2.6), new THREE.MeshBasicMaterial({ color: '#d8d4c4', transparent: true, opacity: 0.5 })); dash.rotation.x = -Math.PI / 2; dash.position.set(0, 0.02, zz); group.add(dash); }
    ground(group, -11, b.minZ - 10, -8.5, b.maxZ + 10, tileTexture('#9a9286', '#7a7268', 3), '#ffffff', 2, 0.02);
    ground(group, 8.5, b.minZ - 10, 11, b.maxZ + 10, tileTexture('#9a9286', '#7a7268', 3), '#ffffff', 2, 0.02);
  }

  // Buildings.
  for (const bb of z.buildings as never[]) { const top = building(group, bb, centre, low); if (top && life.smoke.length < 4) life.smoke.push(top); }
  landmark(group, z.landmark as never, life, low);
  (z.props as never[]).forEach((p: { kind: string; x: number; z: number }, i: number) => propMesh(group, p as never, life, 700 + i * 13 + id.length, zone, low));

  // Signs that point the way: the gate forward and the way back.
  const zoneOrder = ['sol', 'granvia', 'plaza', 'metro', 'retiro', 'malasana', 'atocha', 'palacio', 'hospital', 'rio'];
  const names: Record<string, string> = { sol: 'PUERTA DEL SOL', granvia: 'GRAN VÍA', plaza: 'PLAZA MAYOR', metro: 'METRO · CHAMBERÍ', retiro: 'EL RETIRO', malasana: 'MALASAÑA', atocha: 'ATOCHA', palacio: 'PALACIO REAL', hospital: 'HOSPITAL DE CAMPAÑA', rio: 'MADRID RÍO' };
  const nextId = zoneOrder[zoneOrder.indexOf(id) + 1];
  const prevId = zoneOrder[zoneOrder.indexOf(id) - 1];
  const portal = (at: { x: number; z: number }, label: string, color: string) => {
    const g = new THREE.Group();
    const post = solid('#2a2d30', 0.5, 0.5);
    g.add(box(0.2, 3.2, 0.2, post, -1.7, 1.6, 0), box(0.2, 3.2, 0.2, post, 1.7, 1.6, 0));
    const s = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 0.75), signMat(plate(label, color, '#ffffff', 768, 128), 0.6)); s.position.y = 3.4; g.add(s);
    const back = s.clone(); back.rotation.y = Math.PI; g.add(back);
    const veil = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 3), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false }));
    veil.position.y = 1.5; g.add(veil); veil.userData.veil = true; life.spin.push(veil);
    g.position.set(at.x, 0, at.z);
    g.rotation.y = Math.atan2(centre.x - at.x, centre.z - at.z);
    group.add(g);
  };
  if (z.gate && nextId) portal(z.gate as never, labels?.gate ?? `${names[nextId]} →`, '#1f6a4a');
  if (z.back && prevId) portal(z.back as never, labels?.back ?? `← ${names[prevId]}`, '#3a4458');

  // People of the circles (from the cast) and the survivors.
  const talkers: Talker[] = [];
  const spots = (z.spots as { id: string; x: number; z: number; angle: number }[]).map(s => ({ id: s.id, x: s.x, z: s.z, heading: s.angle }));
  for (const s of z.spots as { id: string; x: number; z: number; angle: number }[]) {
    const spot = SPOTS.find(x => x.id === s.id)!;
    const at = npcOf(s);
    const member = (CAST as Record<string, { look: Record<string, unknown> }>)[spot.cast[0]];
    const pose = spot.id === 'directo' ? 'phone' : spot.id === 'cocina' ? 'cook' : spot.id === 'radio' ? 'stand' : 'stand';
    talkers.push(makeTalker(group, s.id, at.x, at.z, at.heading, 400 + talkers.length, member.look as never, pose, 'neutral', shadows));
    const pair = (z.pairs as Record<string, { x: number; z: number; heading: number }> | undefined)?.[s.id];
    if (pair && spot.cast[1]) talkers.push(makeTalker(group, null, pair.x, pair.z, pair.heading, 450, (CAST as Record<string, { look: Record<string, unknown> }>)[spot.cast[1]].look as never, 'arms', 'angry', shadows));
  }
  (z.extras as { x: number; z: number; heading: number; pose: string; seed: number; mood?: string; look?: Record<string, unknown>; y?: number }[]).forEach(e => {
    const t = makeTalker(group, null, e.x, e.z, e.heading, e.seed, (e.look ?? {}) as never, e.pose, e.mood ?? 'neutral', false);
    if (e.y) { t.person.root.position.y = e.y; }
    if (/sit|ground|sleep|guitar|lie/.test(e.pose)) t.seated = true;
    talkers.push(t);
  });

  // Zombies: slow, arms forward, in the barricaded streets outside the bounds.
  const zombies: Walker[] = (z.zombies as { path: number[][]; seed: number }[]).map(zm => {
    const pts = zm.path.map(([x, zz]) => ({ x, z: zz }));
    const path = pts.length === 2 ? [pts[0], pts[1]] : pts;
    const w = makeWalker(group, path, zm.seed, 0.45 + (zm.seed % 5) * 0.06, zombieLook(zm.seed) as never, false);
    setMood(w.person, 'pain');
    return w;
  });

  // Smoke columns and dust.
  const smokeMat = new THREE.SpriteMaterial({ map: smokeTexture(), color: '#3a3632', transparent: true, opacity: 0.35, depthWrite: false });
  const columns = life.smoke.slice(0, low ? 3 : 6).map(at => {
    const puffs: THREE.Sprite[] = [];
    for (let i = 0; i < (low ? 5 : 9); i++) { const s = new THREE.Sprite(smokeMat); s.position.copy(at); group.add(s); puffs.push(s); }
    return { at, puffs };
  });
  const dustCount = low ? 140 : 360;
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(dustCount * 3);
  const rand = random(77 + id.length);
  for (let i = 0; i < dustCount; i++) { dustPos[i * 3] = b.minX + rand() * (b.maxX - b.minX); dustPos[i * 3 + 1] = 0.3 + rand() * 7; dustPos[i * 3 + 2] = b.minZ + rand() * (b.maxZ - b.minZ); }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: z.under ? '#d8d0c0' : '#e8dcc8', size: 0.06, transparent: true, opacity: 0.55, depthWrite: false }));
  group.add(dust);

  const zoneInfo = { sol: 'dawn', granvia: 'smoke', plaza: 'amber', metro: 'under', retiro: 'green', malasana: 'night', atocha: 'amber', palacio: 'cold', hospital: 'cold', rio: 'dawn' } as Record<string, string>;
  const light = MOODS[zoneInfo[id]];

  const animate = (t: number, dt: number) => {
    life.lamps.forEach((m, i) => { m.emissiveIntensity = (Math.sin(t * 13 + i * 1.7) > 0.93 || Math.sin(t * 2.1 + i * 5.3) > 0.985) ? 0.15 : 1.4; });
    for (const m of life.ambers) m.emissiveIntensity = Math.sin(t * 3.4) > 0 ? 1.8 : 0.05;
    for (const f of life.fires) f.mat.emissiveIntensity = 1.6 + Math.sin(t * 17 + f.seed) * 0.5 + Math.sin(t * 7.3) * 0.3;
    for (const c of columns) c.puffs.forEach((s, i) => {
      const k = ((t * 0.18 + i / c.puffs.length) % 1);
      s.position.set(c.at.x + Math.sin(t * 0.3 + i) * k * 1.6, c.at.y + k * 14, c.at.z + k * 2.2);
      s.scale.setScalar(1.2 + k * 6);
      s.material.opacity = 0.35;
    });
    for (const o of life.spin) {
      if (o.userData.bob) { o.position.y = -0.3 + Math.sin(t * 1.4 + o.position.x) * 0.06; o.rotation.z = Math.sin(t * 0.9) * 0.03; }
      else if (o.userData.veil) ((o as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = 0.18 + Math.sin(t * 2.4) * 0.08;
      else if (o.userData.wave) o.rotation.y = Math.sin(t * 2) * 0.25;
      else if (o.userData.river) { ((o as THREE.Mesh).material as THREE.MeshStandardMaterial).color.setHSL(0.52, 0.22, 0.28 + Math.sin(t) * 0.02); }
      else o.rotation.y += dt * 0.35;
    }
    const pos = dustGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < dustCount; i++) {
      let y = pos.getY(i) + dt * (0.05 + (i % 7) * 0.012);
      if (y > 7.5) y = 0.3;
      pos.setY(i, y); pos.setX(i, pos.getX(i) + Math.sin(t * 0.4 + i) * dt * 0.12);
    }
    pos.needsUpdate = true;
    // Zombies hold their arms forward and drag a little.
    for (const w of zombies) {
      const p = w.person.parts;
      p.armL.rotation.x = -1.25 + Math.sin(t * 1.3 + w.seed) * 0.08; p.armR.rotation.x = -1.15 + Math.sin(t * 1.1 + w.seed) * 0.1;
      p.head.rotation.z = 0.25 + Math.sin(t * 0.7 + w.seed) * 0.08;
    }
  };

  const spawn = z.spawn as { x: number; z: number; heading: number };
  return {
    id, group, bounds: b, solids: solidsFor(id), spawn, exit: (z.back ?? z.spawn) as { x: number; z: number },
    spots, talkers, walkers: [], light, ceilings: z.ceilings as never, animate,
    gate: (z.gate as { x: number; z: number }) ?? null, back: (z.back as { x: number; z: number }) ?? null,
    nests: z.clouds as never, zombies, under: Boolean(z.under), sparks: life.sparks, alarms: life.alarms,
  };
}

export { animatePerson, propBox };
