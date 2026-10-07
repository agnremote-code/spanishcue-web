// Builds the Noche Abierta neighbourhood in three.js from the data in
// world3d.mjs. Everything is original procedural geometry and canvas-drawn
// textures: no model files, no image downloads. See
// docs/lessons/noche-abierta-3d-assets.md for the full provenance record.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  BUILDINGS, NPCS, OVERPASS, PLAZA, SOLID_PROPS, STAGES, TARGETS, VEHICLES,
  type Building, type Npc, type Vehicle,
} from './world3d.mjs';
import { addBlobShadow, createPerson, type Look, type Person } from './people3d';
import { CANAL, CITY_BOUNDS, ROADS } from './city.mjs';

export type Night = {
  windows: THREE.MeshStandardMaterial[];
  lamps: THREE.MeshStandardMaterial[];
  pools: THREE.MeshBasicMaterial[];
  lights: THREE.PointLight[];
  signs: THREE.MeshStandardMaterial[];
  headlights: THREE.MeshStandardMaterial[];
};
export type CarRig = { group: THREE.Group; hazards?: THREE.MeshStandardMaterial; smoke?: THREE.Sprite[]; driver?: Person; passenger: THREE.Object3D };
export type NpcRig = { person: Person; data: Npc; x: number; z: number; dir: number; heading: number };
export type Marker = { ring: THREE.Mesh; lantern: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type City = {
  root: THREE.Group;
  night: Night;
  cars: Map<string, CarRig>;
  npcs: Map<string, NpcRig>;
  markers: Map<string, Marker>;
  rooftop: Person[];
  busSign: THREE.MeshStandardMaterial;
  asphalt: THREE.MeshStandardMaterial;
  water: THREE.MeshStandardMaterial;
};
export type Interior = {
  group: THREE.Group; people: Person[]; lamp: { color: string; spots: THREE.Vector3[] };
  // In rooms you walk around: who belongs to which activity (they talk when it is open).
  roles?: Record<string, Person[]>;
};

// Seeded random numbers so the city looks the same on every visit.
export function random(seed: number) {
  let value = seed >>> 0 || 1;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

const materials = new Map<string, THREE.MeshStandardMaterial>();
export function solid(color: string, roughness = 0.85, metalness = 0) {
  const key = `${color}|${roughness}|${metalness}`;
  let material = materials.get(key);
  if (!material) {
    material = new THREE.MeshStandardMaterial({ color, roughness, metalness });
    materials.set(key, material);
  }
  return material;
}

export function glow(color: string, intensity = 1) {
  return new THREE.MeshStandardMaterial({ color: '#111111', emissive: color, emissiveIntensity: intensity, roughness: 0.6 });
}

export function canvas(width: number, height: number, draw: (ctx: CanvasRenderingContext2D) => void, repeat = false) {
  const element = document.createElement('canvas');
  element.width = width;
  element.height = height;
  draw(element.getContext('2d')!);
  const texture = new THREE.CanvasTexture(element);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  if (repeat) texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function box(w: number, h: number, d: number, material: THREE.Material, x = 0, y = 0, z = 0, shadows = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = shadows;
  mesh.receiveShadow = true;
  return mesh;
}

export function cylinder(rTop: number, rBottom: number, h: number, material: THREE.Material, x = 0, y = 0, z = 0, segments = 12) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, h, segments), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// ---------------------------------------------------------------- textures

// A facade tile: 4 × 4 windows, 3 m wide and 3.2 m tall each. The colour map
// is neutral (tinted by the material); the emissive map lights some windows.
export function facadeTextures(seed: number) {
  const rand = random(seed);
  const lit: number[] = [];
  for (let i = 0; i < 16; i++) lit.push(rand());
  const map = canvas(256, 256, ctx => {
    ctx.fillStyle = '#ebe6de';
    ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = `rgba(0,0,0,${0.02 + rand() * 0.04})`;
      ctx.fillRect(rand() * 256, rand() * 256, 2, 2);
    }
    for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) {
      const x = col * 64, y = row * 64;
      ctx.fillStyle = '#6d655b';
      ctx.fillRect(x + 13, y + 11, 38, 42);
      const pane = ctx.createLinearGradient(0, y + 14, 0, y + 50);
      pane.addColorStop(0, '#3b4656');
      pane.addColorStop(1, '#1d242e');
      ctx.fillStyle = pane;
      ctx.fillRect(x + 16, y + 14, 32, 36);
      ctx.fillStyle = '#6d655b';
      ctx.fillRect(x + 31, y + 14, 2, 36);
      ctx.fillStyle = '#d9d2c6';
      ctx.fillRect(x + 11, y + 52, 42, 4);
      if ((row + col + seed) % 3 === 0) {
        ctx.fillStyle = '#4c443c';
        ctx.fillRect(x + 8, y + 50, 48, 3);
        for (let r = 0; r < 7; r++) ctx.fillRect(x + 9 + r * 7, y + 42, 1.5, 9);
        ctx.fillRect(x + 8, y + 41, 48, 2);
      }
    }
  }, true);
  const emissive = canvas(256, 256, ctx => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 256, 256);
    for (let row = 0; row < 4; row++) for (let col = 0; col < 4; col++) {
      const value = lit[row * 4 + col];
      if (value > 0.5) continue;
      const x = col * 64, y = row * 64;
      const warm = value < 0.38;
      const light = ctx.createLinearGradient(0, y + 14, 0, y + 50);
      light.addColorStop(0, warm ? '#ffd79a' : '#b9c8ff');
      light.addColorStop(1, warm ? '#e59a4a' : '#6f82c8');
      ctx.fillStyle = light;
      ctx.fillRect(x + 16, y + 14, 32, 36);
      ctx.fillStyle = 'rgba(40,20,10,.55)';
      if (value < 0.2) ctx.fillRect(x + 16, y + 14, 11, 36);
      ctx.fillStyle = '#000';
      ctx.fillRect(x + 31, y + 14, 2, 36);
    }
  }, true);
  return { map, emissive };
}

export function signTexture(text: string, background: string, color: string) {
  return canvas(1024, 192, ctx => {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, 1024, 192);
    ctx.strokeStyle = color;
    ctx.globalAlpha = 0.5;
    ctx.lineWidth = 6;
    ctx.strokeRect(14, 14, 996, 164);
    ctx.globalAlpha = 1;
    ctx.fillStyle = color;
    ctx.font = '700 96px Georgia, "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 512, 102, 940);
  });
}

export function storefrontTexture(tone: 'warm' | 'cool' | 'red', door: number) {
  return canvas(512, 256, ctx => {
    const glass = ctx.createLinearGradient(0, 0, 0, 256);
    glass.addColorStop(0, tone === 'cool' ? '#f4f7ff' : '#ffe2a8');
    glass.addColorStop(1, tone === 'cool' ? '#c9d6e8' : tone === 'red' ? '#d9774a' : '#e0a060');
    ctx.fillStyle = glass;
    ctx.fillRect(0, 0, 512, 256);
    const rand = random(tone.length * 17 + door * 100);
    ctx.fillStyle = tone === 'cool' ? 'rgba(60,80,110,.35)' : 'rgba(90,45,20,.35)';
    for (let i = 0; i < 9; i++) {
      const x = rand() * 480, w = 20 + rand() * 30;
      ctx.fillRect(x, 150 + rand() * 30, w, 106);
      ctx.beginPath();
      ctx.arc(x + w / 2, 130 + rand() * 20, 14, 0, Math.PI * 2);
      ctx.fill();
    }
    if (tone === 'cool') {
      for (let s = 0; s < 3; s++) {
        ctx.fillStyle = '#7d8796';
        ctx.fillRect(0, 70 + s * 60, 512, 5);
        for (let i = 0; i < 40; i++) {
          ctx.fillStyle = ['#d24a3a', '#3a7bd2', '#e8c640', '#4aa05a', '#f0f0f0'][Math.floor(rand() * 5)];
          ctx.fillRect(i * 13 + rand() * 4, 48 + s * 60, 9, 22);
        }
      }
    }
    ctx.fillStyle = '#2a2420';
    for (let x = 0; x <= 512; x += 128) ctx.fillRect(x - 5, 0, 10, 256);
    ctx.fillRect(0, 0, 512, 12);
    ctx.fillRect(0, 244, 512, 12);
    const doorX = door * 512;
    ctx.fillStyle = '#2a2420';
    ctx.fillRect(doorX - 40, 30, 80, 226);
    ctx.fillStyle = tone === 'cool' ? '#e8f0ff' : '#ffd08a';
    ctx.fillRect(doorX - 30, 42, 60, 200);
    ctx.fillStyle = '#2a2420';
    ctx.fillRect(doorX - 2, 42, 4, 200);
  });
}

export function stripes(a: string, b: string) {
  return canvas(256, 64, ctx => {
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = i % 2 ? b : a;
      ctx.fillRect(i * 32, 0, 32, 64);
    }
    ctx.fillStyle = 'rgba(0,0,0,.18)';
    ctx.fillRect(0, 52, 256, 12);
  }, true);
}

export function tiles(base: string, line: string, size = 128, cells = 4) {
  return canvas(size, size, ctx => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, size, size);
    const rand = random(size + base.length);
    for (let i = 0; i < 400; i++) {
      ctx.fillStyle = `rgba(0,0,0,${rand() * 0.06})`;
      ctx.fillRect(rand() * size, rand() * size, 2, 2);
    }
    ctx.strokeStyle = line;
    ctx.lineWidth = 2;
    for (let i = 0; i <= cells; i++) {
      const p = (i / cells) * size;
      ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, size); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(size, p); ctx.stroke();
    }
  }, true);
}

export function poolTexture() {
  return canvas(128, 128, ctx => {
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,200,120,1)');
    g.addColorStop(0.45, 'rgba(255,170,90,.45)');
    g.addColorStop(1, 'rgba(255,160,80,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
  });
}

function muralTexture() {
  return canvas(1024, 720, ctx => {
    const sky = ctx.createLinearGradient(0, 0, 0, 720);
    sky.addColorStop(0, '#2c3e73');
    sky.addColorStop(0.45, '#e0685a');
    sky.addColorStop(0.7, '#f4b25c');
    sky.addColorStop(1, '#f7d488');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 1024, 720);
    ctx.fillStyle = '#ffe3a0';
    ctx.beginPath(); ctx.arc(640, 430, 150, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#f7c77a';
    for (let i = 0; i < 6; i++) ctx.fillRect(470, 330 + i * 34, 340, 10);
    ctx.fillStyle = '#1f6f78';
    ctx.beginPath(); ctx.moveTo(0, 560);
    for (let x = 0; x <= 1024; x += 32) ctx.lineTo(x, 540 + Math.sin(x / 70) * 16);
    ctx.lineTo(1024, 720); ctx.lineTo(0, 720); ctx.fill();
    ctx.fillStyle = '#143d4a';
    ctx.fillRect(0, 630, 1024, 90);
    const palm = (x: number, h: number, lean: number) => {
      ctx.strokeStyle = '#1a1420';
      ctx.lineWidth = 18;
      ctx.beginPath(); ctx.moveTo(x, 720); ctx.quadraticCurveTo(x + lean * 0.3, 720 - h * 0.5, x + lean, 720 - h); ctx.stroke();
      ctx.fillStyle = '#1a1420';
      for (let i = 0; i < 7; i++) {
        const a = -Math.PI + (i / 6) * Math.PI;
        ctx.beginPath();
        ctx.ellipse(x + lean + Math.cos(a) * 70, 720 - h + Math.sin(a) * 26 + 20, 80, 16, a * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    palm(170, 470, 50);
    palm(290, 380, -30);
    palm(900, 440, -40);
    ctx.strokeStyle = '#1a1420';
    ctx.lineWidth = 5;
    for (const [x, y] of [[420, 170], [470, 140], [520, 180]]) {
      ctx.beginPath(); ctx.moveTo(x - 20, y); ctx.quadraticCurveTo(x - 8, y - 12, x, y); ctx.quadraticCurveTo(x + 8, y - 12, x + 20, y); ctx.stroke();
    }
    ctx.fillStyle = '#fff4dc';
    ctx.font = '800 64px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('LA NOCHE ES LARGA', 512, 96);
  });
}

// ---------------------------------------------------------------- pieces

// Optional: `wall` shares a facade material between buildings (the caller
// registers it for the night), `split` makes the walls and the roof two
// single-material meshes so static batching can merge them, `bare` stops
// after the mass (no parapet, roof units or front).
export type BuildingOptions = { wall?: THREE.MeshStandardMaterial; split?: boolean; bare?: boolean };

function boxFaces(geometry: THREE.BoxGeometry, groups: number[]) {
  const index = geometry.getIndex()!;
  const picked: number[] = [];
  for (const g of groups) {
    const group = geometry.groups[g];
    for (let i = group.start; i < group.start + group.count; i++) picked.push(index.getX(i));
  }
  const out = new THREE.BufferGeometry();
  for (const name of ['position', 'normal', 'uv']) out.setAttribute(name, geometry.getAttribute(name));
  out.setIndex(picked);
  return out;
}

export function addBuilding(parent: THREE.Group, b: Building, index: number, night: Night, options: BuildingOptions = {}) {
  const w = b.x1 - b.x0, d = b.z1 - b.z0;
  const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
  const tints: Record<string, string> = {
    cream: '#e6d5b2', slate: '#8f98a4', brick: '#b0634a', teal: '#6fa39b', plaster: '#d9b89a',
    cafe: '#c79e76', restaurant: '#b86a50', store: '#ddd3c1', museum: '#d6ccb8', bar: '#8a4a38',
  };
  let wall = options.wall;
  if (!wall) {
    const { map, emissive } = facadeTextures(index * 7 + 3);
    wall = new THREE.MeshStandardMaterial({ map, emissiveMap: emissive, emissive: '#ffffff', emissiveIntensity: 0.2, color: tints[b.style] ?? '#cccccc', roughness: 0.92 });
    night.windows.push(wall);
  }
  const roof = solid('#3a3835', 0.95);
  const geometry = new THREE.BoxGeometry(w, b.h, d);
  const uv = geometry.getAttribute('uv') as THREE.BufferAttribute;
  // Box faces: +x, -x, +y, -y, +z, -z. Scale UVs so windows keep their size.
  for (let face = 0; face < 6; face++) {
    const length = face < 2 ? d : w;
    for (let v = 0; v < 4; v++) {
      const i = face * 4 + v;
      uv.setXY(i, uv.getX(i) * (length / 12), uv.getY(i) * (b.h / 12.8));
    }
  }
  const masses = options.split
    ? [new THREE.Mesh(boxFaces(geometry, [0, 1, 4, 5]), wall), new THREE.Mesh(boxFaces(geometry, [2]), roof)]
    : [new THREE.Mesh(geometry, [wall, wall, roof, roof, wall, wall])];
  for (const mass of masses) {
    mass.position.set(cx, b.h / 2, cz);
    mass.castShadow = true;
    mass.receiveShadow = true;
    parent.add(mass);
  }
  if (options.bare) return;

  const parapet = solid('#6f675e');
  parent.add(box(w + 0.3, 0.55, 0.25, parapet, cx, b.h + 0.27, b.z0 + 0.1, false));
  parent.add(box(w + 0.3, 0.55, 0.25, parapet, cx, b.h + 0.27, b.z1 - 0.1, false));
  parent.add(box(0.25, 0.55, d, parapet, b.x0 + 0.1, b.h + 0.27, cz, false));
  parent.add(box(0.25, 0.55, d, parapet, b.x1 - 0.1, b.h + 0.27, cz, false));
  if (b.h > 8 && !b.rooftop) {
    parent.add(cylinder(0.9, 0.9, 1.8, solid('#8a8580', 0.6, 0.3), cx + w * 0.2, b.h + 0.9, cz - d * 0.15));
    parent.add(box(1.4, 0.9, 1, solid('#9b9a96', 0.6), cx - w * 0.2, b.h + 0.45, cz + d * 0.2));
  }

  if (b.style === 'museum') { addMuseumFront(parent, b, night); return; }
  const shop = b.style === 'cafe' || b.style === 'restaurant' || b.style === 'store' || b.style === 'bar';
  const side = b.door?.side ?? 'south';
  const faceZ = side === 'south' ? b.z1 + 0.04 : b.z0 - 0.04;
  const turn = side === 'south' ? 0 : Math.PI;
  if (shop) {
    const tone = b.style === 'store' ? 'cool' : b.style === 'restaurant' || b.style === 'bar' ? 'red' : 'warm';
    const doorAt = b.door ? (side === 'south' ? (b.door.at - b.x0) / w : (b.x1 - b.door.at) / w) : 0.5;
    const front = storefrontTexture(tone, doorAt);
    const glass = new THREE.MeshStandardMaterial({ map: front, emissiveMap: front, emissive: '#ffffff', emissiveIntensity: 0.5, roughness: 0.3 });
    night.windows.push(glass);
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.4, 3.3), glass);
    plane.position.set(cx, 1.65, faceZ);
    plane.rotation.y = turn;
    parent.add(plane);
    const fascia = solid(b.style === 'store' ? '#e9e4da' : '#3a2a22');
    const band = box(w + 0.1, 0.5, 0.2, fascia, cx, 3.55, side === 'south' ? b.z1 + 0.1 : b.z0 - 0.1, false);
    parent.add(band);
    if (b.style === 'bar') addBarFront(parent, b, faceZ, night);
    else if (b.style !== 'store') {
      const awning = new THREE.Mesh(new THREE.BoxGeometry(w - 0.6, 0.08, 1.7), new THREE.MeshStandardMaterial({ map: stripes(b.style === 'cafe' ? '#2f5d4a' : '#9c2f2a', '#efe4cc'), roughness: 0.9 }));
      (awning.material as THREE.MeshStandardMaterial).map!.repeat.set((w - 0.6) / 4, 1);
      awning.position.set(cx, 3.15, side === 'south' ? b.z1 + 0.85 : b.z0 - 0.85);
      awning.rotation.x = side === 'south' ? 0.28 : -0.28;
      awning.castShadow = true;
      parent.add(awning);
    }
    if (b.sign) {
      const texture = signTexture(b.sign, b.style === 'store' ? '#f4f1ea' : '#231a14', b.style === 'store' ? '#b3261e' : b.style === 'bar' ? '#ffb46a' : '#f6d9a0');
      const signMat = new THREE.MeshStandardMaterial({ map: texture, emissiveMap: texture, emissive: '#ffffff', emissiveIntensity: 0.3 });
      night.signs.push(signMat);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(6, w - 1), 1.1), signMat);
      sign.position.set(cx, b.style === 'store' ? 4.1 : 4.25, faceZ + (side === 'south' ? 0.05 : -0.05));
      sign.rotation.y = turn;
      parent.add(sign);
    }
  } else if (b.door) {
    const doorTexture = canvas(128, 192, ctx => {
      ctx.fillStyle = '#4a3222'; ctx.fillRect(0, 0, 128, 192);
      ctx.fillStyle = '#ffd48c'; ctx.fillRect(14, 16, 44, 120); ctx.fillRect(70, 16, 44, 120);
      ctx.fillStyle = '#2a1c12'; ctx.fillRect(60, 0, 8, 192); ctx.fillRect(14, 72, 100, 5);
      ctx.fillStyle = '#c9a24a'; ctx.fillRect(50, 140, 6, 16); ctx.fillRect(72, 140, 6, 16);
    });
    const doorMat = new THREE.MeshStandardMaterial({ map: doorTexture, emissiveMap: doorTexture, emissive: '#ffffff', emissiveIntensity: 0.2 });
    night.windows.push(doorMat);
    const door = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.7), doorMat);
    door.position.set(b.door.at, 1.35, faceZ);
    door.rotation.y = turn;
    parent.add(door);
    parent.add(box(2.6, 0.12, 1.1, solid('#2e2a26'), b.door.at, 3, side === 'south' ? b.z1 + 0.55 : b.z0 - 0.55));
    const lamp = glow('#ffd08a', 0.6);
    night.lamps.push(lamp);
    parent.add(box(0.2, 0.3, 0.14, lamp, b.door.at + 1.2, 2.5, faceZ + 0.08, false));
    parent.add(box(0.6, 0.16, 0.06, solid('#d8cfbf'), b.door.at, 2.85, faceZ + 0.03, false));
  }
}

// The museum: a stone front with columns, steps, a lit double door and
// two banners. Its door faces the avenue.
function addMuseumFront(parent: THREE.Group, b: Building, night: Night) {
  const north = b.door?.side === 'north';
  const faceZ = north ? b.z0 : b.z1;
  const out = north ? -1 : 1;
  const at = b.door?.at ?? (b.x0 + b.x1) / 2;
  const stone = solid('#cfc4ae', 0.9);
  const darkStone = solid('#a69a84', 0.9);
  parent.add(box(9.4, 0.18, 1.6, darkStone, at, 0.09, faceZ + out * 0.8));
  parent.add(box(8.6, 0.18, 1.1, stone, at, 0.27, faceZ + out * 0.55));
  for (const dx of [-3.6, -1.6, 1.6, 3.6]) {
    parent.add(cylinder(0.24, 0.28, 5.2, stone, at + dx, 2.9, faceZ + out * 0.75, 14));
    parent.add(box(0.7, 0.2, 0.7, darkStone, at + dx, 0.38, faceZ + out * 0.75));
    parent.add(box(0.7, 0.24, 0.7, darkStone, at + dx, 5.6, faceZ + out * 0.75));
  }
  parent.add(box(9, 0.7, 1.7, stone, at, 6.05, faceZ + out * 0.7));
  const pediment = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 5, 1.4, 3, 1), stone);
  pediment.scale.z = 0.3;
  pediment.rotation.z = Math.PI;
  pediment.rotation.y = Math.PI / 2;
  pediment.position.set(at, 7.05, faceZ + out * 0.6);
  parent.add(pediment);
  const door = canvas(256, 256, ctx => {
    ctx.fillStyle = '#2b1d14'; ctx.fillRect(0, 0, 256, 256);
    const glow = ctx.createLinearGradient(0, 0, 0, 256);
    glow.addColorStop(0, '#ffe2a8'); glow.addColorStop(1, '#f0a85a');
    ctx.fillStyle = glow;
    ctx.fillRect(24, 20, 96, 220); ctx.fillRect(136, 20, 96, 220);
    ctx.fillStyle = '#2b1d14';
    for (const x of [24, 136]) for (let y = 70; y < 240; y += 56) ctx.fillRect(x, y, 96, 6);
    ctx.fillStyle = '#c9a24a'; ctx.fillRect(110, 120, 6, 26); ctx.fillRect(140, 120, 6, 26);
  });
  const doorMat = new THREE.MeshStandardMaterial({ map: door, emissiveMap: door, emissive: '#ffffff', emissiveIntensity: 0.4 });
  night.windows.push(doorMat);
  const doorPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 3.2), doorMat);
  doorPlane.position.set(at, 1.96, faceZ + out * 0.04);
  doorPlane.rotation.y = north ? Math.PI : 0;
  parent.add(doorPlane);
  const sign = signTexture(b.sign ?? 'MUSEO', '#1d1915', '#e9d6a8');
  const signMat = new THREE.MeshStandardMaterial({ map: sign, emissiveMap: sign, emissive: '#ffffff', emissiveIntensity: 0.3 });
  night.signs.push(signMat);
  const plate = new THREE.Mesh(new THREE.PlaneGeometry(6, 0.62), signMat);
  plate.position.set(at, 6.05, faceZ + out * 1.56);
  plate.rotation.y = north ? Math.PI : 0;
  parent.add(plate);
  const banner = canvas(128, 384, ctx => {
    ctx.fillStyle = '#5a1f24'; ctx.fillRect(0, 0, 128, 384);
    ctx.strokeStyle = '#d8b35a'; ctx.lineWidth = 4; ctx.strokeRect(10, 10, 108, 364);
    ctx.fillStyle = '#f2e6cc'; ctx.textAlign = 'center';
    ctx.font = '700 22px Georgia, serif';
    ['ABIERTO', 'DE', 'NOCHE'].forEach((word, i) => ctx.fillText(word, 64, 150 + i * 34));
    ctx.font = 'italic 18px Georgia, serif';
    ctx.fillText('hasta la 1', 64, 300);
  });
  const bannerMat = new THREE.MeshStandardMaterial({ map: banner, emissiveMap: banner, emissive: '#ffffff', emissiveIntensity: 0.25, side: THREE.DoubleSide });
  night.signs.push(bannerMat);
  for (const dx of [-4.9, 4.9]) {
    const flagPlane = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 2.7), bannerMat);
    flagPlane.position.set(at + dx, 3.7, faceZ + out * 0.12);
    flagPlane.rotation.y = north ? Math.PI : 0;
    parent.add(flagPlane);
  }
  const lamp = glow('#ffd08a', 0.6);
  night.lamps.push(lamp);
  for (const dx of [-1.6, 1.6]) parent.add(box(0.22, 0.34, 0.22, lamp, at + dx, 3.4, faceZ + out * 0.2, false));
}

// The bar: a half-raised roller shutter (the persiana of its name), warm
// light under it, and two small tables outside.
function addBarFront(parent: THREE.Group, b: Building, faceZ: number, night: Night) {
  const south = (b.door?.side ?? 'south') === 'south';
  const out = south ? 1 : -1;
  const w = b.x1 - b.x0;
  const cx = (b.x0 + b.x1) / 2;
  const shutter = canvas(256, 128, ctx => {
    ctx.fillStyle = '#7d8084'; ctx.fillRect(0, 0, 256, 128);
    for (let y = 0; y < 128; y += 8) { ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.fillRect(0, y, 256, 2); }
    ctx.fillStyle = 'rgba(255,255,255,.08)';
    for (let y = 4; y < 128; y += 8) ctx.fillRect(0, y, 256, 1);
  });
  const shutterMat = new THREE.MeshStandardMaterial({ map: shutter, roughness: 0.5, metalness: 0.5 });
  const roll = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.6, 1.1), shutterMat);
  roll.position.set(cx, 2.85, faceZ + out * 0.08);
  roll.rotation.y = south ? 0 : Math.PI;
  parent.add(roll);
  parent.add(box(w - 0.4, 0.3, 0.32, solid('#5d6064', 0.5, 0.6), cx, 3.45, faceZ + out * 0.18, false));
  const neon = glow('#ff7a4a', 1.4);
  night.signs.push(neon);
  parent.add(box(1.4, 0.08, 0.05, neon, (b.door?.at ?? cx) + 2.4, 2.1, faceZ + out * 0.1, false));
  parent.add(box(0.08, 0.5, 0.05, neon, (b.door?.at ?? cx) + 1.74, 1.9, faceZ + out * 0.1, false));
  const top = solid('#3a2a22', 0.6);
  const legs = solid('#1d1d1f', 0.5, 0.5);
  for (const x of [b.x0 + 1.6, b.x1 - 1.4]) {
    parent.add(cylinder(0.36, 0.36, 0.04, top, x, 0.74, faceZ + out * 1.1, 14));
    parent.add(cylinder(0.035, 0.035, 0.72, legs, x, 0.36, faceZ + out * 1.1, 6));
    for (const dx of [-0.55, 0.55]) {
      parent.add(box(0.36, 0.05, 0.36, legs, x + dx, 0.46, faceZ + out * 1.1, false));
      parent.add(box(0.05, 0.42, 0.36, legs, x + dx * 1.3, 0.68, faceZ + out * 1.1, false));
    }
  }
}

function addLamp(parent: THREE.Group, x: number, z: number, armX: number, armZ: number, night: Night, pool: THREE.Texture) {
  const pole = solid('#2b3230', 0.6, 0.4);
  parent.add(cylinder(0.07, 0.1, 5.4, pole, x, 2.7, z, 8));
  const arm = box(Math.abs(armX) + 0.1 || 0.1, 0.07, Math.abs(armZ) + 0.1 || 0.1, pole, x + armX / 2, 5.35, z + armZ / 2, false);
  parent.add(arm);
  const head = glow('#ffd49a', 0.6);
  night.lamps.push(head);
  const lamp = box(0.55, 0.14, 0.3, head, x + armX, 5.25, z + armZ, false);
  if (Math.abs(armZ) > Math.abs(armX)) lamp.rotation.y = Math.PI / 2;
  parent.add(lamp);
  const poolMat = new THREE.MeshBasicMaterial({ map: pool, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false });
  night.pools.push(poolMat);
  const spot = new THREE.Mesh(new THREE.CircleGeometry(3.6, 24), poolMat);
  spot.rotation.x = -Math.PI / 2;
  spot.position.set(x + armX, 0.05, z + armZ);
  parent.add(spot);
}

export function addPalm(parent: THREE.Group, x: number, z: number, height: number, seed: number) {
  const rand = random(seed);
  const trunk = solid('#6b5642', 0.95);
  const leaf = solid('#2f4d2b', 0.9);
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  const lean = (rand() - 0.5) * 0.18;
  let y = 0;
  const segments = 5;
  let top = new THREE.Vector3();
  for (let i = 0; i < segments; i++) {
    const h = height / segments;
    const r = 0.2 - i * 0.02;
    const piece = cylinder(r - 0.02, r, h, trunk, lean * y, y + h / 2, 0, 8);
    piece.rotation.z = -lean;
    group.add(piece);
    y += h;
    top = new THREE.Vector3(lean * y, y, 0);
  }
  const crown = new THREE.Group();
  crown.position.copy(top);
  for (let i = 0; i < 9; i++) {
    const pivot = new THREE.Group();
    pivot.rotation.y = (i / 9) * Math.PI * 2 + rand() * 0.3;
    const frond = new THREE.Mesh(new THREE.ConeGeometry(0.34, 2.8, 4), leaf);
    frond.scale.set(1, 1, 0.18);
    frond.rotation.z = -Math.PI / 2 - 0.45 - rand() * 0.4;
    frond.position.x = 1.2;
    frond.position.y = -0.35;
    frond.castShadow = true;
    pivot.add(frond);
    crown.add(pivot);
  }
  group.add(crown);
  parent.add(group);
}

export function addTree(parent: THREE.Group, x: number, z: number, seed: number) {
  const rand = random(seed);
  parent.add(cylinder(0.14, 0.2, 2.4, solid('#4a3a2c'), x, 1.2, z, 8));
  const leaves = solid(rand() > 0.5 ? '#2f4b2c' : '#3a5530', 0.95);
  for (let i = 0; i < 3; i++) {
    const blob = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1 + rand() * 0.6, 1), leaves);
    blob.position.set(x + (rand() - 0.5) * 1.2, 3 + rand() * 0.9, z + (rand() - 0.5) * 1.2);
    blob.castShadow = true;
    parent.add(blob);
  }
}

export function sag(from: THREE.Vector3, to: THREE.Vector3, drop: number) {
  const path: THREE.Vector3[] = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const p = from.clone().lerp(to, t);
    p.y -= Math.sin(t * Math.PI) * drop;
    path.push(p);
  }
  return new THREE.BufferGeometry().setFromPoints(path);
}

const carGlass = new THREE.MeshStandardMaterial({ color: '#1a222b', roughness: 0.1, metalness: 0.6, transparent: true, opacity: 0.55 });
export function makeCar(kind: Vehicle['kind'] | 'van', color = '#777777', night?: Night): CarRig {
  const group = new THREE.Group();
  const taxi = kind === 'taxi';
  const bodyColor = taxi ? '#141517' : kind === 'broken' ? '#8fb1b8' : color;
  const paint = taxi ? solid('#23262b', 0.3, 0.55) : solid(bodyColor, 0.35, 0.4);
  const glass = carGlass;
  const dark = solid('#151515', 0.8);
  const coupe = kind === 'coupe';
  if (kind === 'van') {
    // A delivery van: one tall body, a windscreen and side windows up front.
    group.add(box(4.3, 1.5, 1.86, paint, 0, 1.1, 0));
    group.add(box(0.06, 0.6, 1.62, glass, 2.15, 1.42, 0, false));
    for (const z of [0.94, -0.94]) group.add(box(0.9, 0.5, 0.04, glass, 1.4, 1.45, z, false));
    group.add(box(0.05, 1.2, 0.03, dark, -0.4, 1.05, 0.94, false));
  } else {
    group.add(box(4.3, 0.62, 1.8, paint, 0, 0.62, 0));
    group.add(box(coupe ? 1.9 : 2.3, 0.52, 1.6, glass, coupe ? -0.35 : -0.25, 1.18, 0));
    group.add(box(coupe ? 1.7 : 2.1, 0.07, 1.56, taxi ? solid('#f2c230', 0.4, 0.2) : paint, coupe ? -0.35 : -0.25, 1.47, 0));
  }
  group.add(box(0.14, 0.2, 1.84, dark, 2.18, 0.45, 0, false));
  group.add(box(0.14, 0.2, 1.84, dark, -2.18, 0.45, 0, false));
  const wheel = new THREE.CylinderGeometry(0.34, 0.34, 0.24, 14);
  for (const [x, z] of [[1.35, 0.86], [1.35, -0.86], [-1.35, 0.86], [-1.35, -0.86]]) {
    const mesh = new THREE.Mesh(wheel, dark);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.set(x, 0.34, z);
    mesh.castShadow = true;
    group.add(mesh);
  }
  const head = glow('#fff1c9', 0.4);
  const tail = glow('#ff3a2a', 0.8);
  night?.headlights.push(head);
  for (const z of [0.6, -0.6]) {
    group.add(box(0.06, 0.14, 0.34, head, 2.16, 0.72, z, false));
    group.add(box(0.06, 0.14, 0.3, tail, -2.16, 0.74, z, false));
  }
  if (taxi) {
    const sign = signTexture('TAXI', '#f2c230', '#141517');
    const signMat = new THREE.MeshStandardMaterial({ map: sign, emissiveMap: sign, emissive: '#ffffff', emissiveIntensity: 0.5 });
    night?.signs.push(signMat);
    const roofSign = box(0.36, 0.22, 0.8, signMat, -0.25, 1.62, 0, false);
    group.add(roofSign);
    group.add(box(0.05, 0.1, 0.22, glow('#ff4030', 1.2), 0.86, 1.2, -0.45, false));
  }
  const passenger = new THREE.Group();
  passenger.position.set(-0.6, -0.08, 0.42);
  group.add(passenger);
  const rig: CarRig = { group, passenger };
  if (kind === 'broken') {
    group.add(box(1.1, 0.34, 1.3, solid('#3b3d40', 0.6, 0.5), 1.45, 0.98, 0));
    const hood = new THREE.Group();
    hood.position.set(0.85, 0.95, 0);
    hood.add(box(1.35, 0.06, 1.72, paint, 0.67, 0, 0));
    hood.rotation.z = 1.05;
    group.add(hood);
    const hazard = glow('#ff9a2a', 0.1);
    rig.hazards = hazard;
    for (const [x, z] of [[2.16, 0.84], [2.16, -0.84], [-2.16, 0.84], [-2.16, -0.84]]) group.add(box(0.08, 0.1, 0.14, hazard, x, 0.78, z, false));
    const puff = canvas(64, 64, ctx => {
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, 'rgba(220,220,220,.8)');
      g.addColorStop(1, 'rgba(220,220,220,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
    });
    rig.smoke = [];
    for (let i = 0; i < 6; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: puff, transparent: true, depthWrite: false, opacity: 0.4 }));
      sprite.scale.setScalar(0.8);
      sprite.position.set(1.5, 1.2 + i * 0.3, 0);
      sprite.userData.phase = i / 6;
      rig.smoke.push(sprite);
      group.add(sprite);
    }
  }
  if (taxi) {
    const driver = createPerson({ shirt: '#5b6b7c', hair: '#2a2420', skin: '#c99468' }, false);
    driver.seated = true;
    driver.root.scale.setScalar(0.92);
    driver.root.position.set(0.2, -0.08, -0.42);
    driver.root.rotation.y = Math.PI / 2;
    group.add(driver.root);
    rig.driver = driver;
  }
  return rig;
}

// Heading convention for vehicles: +x forward, heading h points to (cos h, sin h).
export function placeVehicle(group: THREE.Object3D, x: number, z: number, heading: number) {
  group.position.set(x, 0, z);
  group.rotation.y = -heading;
}

export function addBench(parent: THREE.Group, x: number, z: number, rotation: number) {
  const group = new THREE.Group();
  const wood = solid('#6b4a33');
  const iron = solid('#262a2c', 0.5, 0.5);
  group.add(box(1.8, 0.08, 0.5, wood, 0, 0.46, 0));
  group.add(box(1.8, 0.4, 0.07, wood, 0, 0.8, -0.24));
  group.add(box(0.07, 0.46, 0.5, iron, -0.8, 0.23, 0));
  group.add(box(0.07, 0.46, 0.5, iron, 0.8, 0.23, 0));
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  parent.add(group);
}

function addBike(parent: THREE.Group, x: number, z: number) {
  const group = new THREE.Group();
  const frame = solid('#b33a2c', 0.4, 0.4);
  const tyre = solid('#161616');
  for (const px of [-0.52, 0.52]) {
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.03, 6, 20), tyre);
    wheel.position.set(px, 0.35, 0);
    group.add(wheel);
  }
  const bar = (length: number, px: number, py: number, rz: number) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, length, 6), frame);
    mesh.position.set(px, py, 0);
    mesh.rotation.z = rz;
    group.add(mesh);
  };
  bar(0.75, 0, 0.62, Math.PI / 2 - 0.1);
  bar(0.62, -0.25, 0.5, 0.7);
  bar(0.6, 0.3, 0.52, -0.6);
  bar(0.4, 0.52, 0.72, 0.2);
  group.add(box(0.22, 0.05, 0.1, tyre, -0.3, 0.86, 0, false));
  group.add(box(0.05, 0.05, 0.46, tyre, 0.56, 0.95, 0, false));
  group.position.set(x, 0, z);
  group.rotation.y = 1.2;
  parent.add(group);
}

export function stringLights(parent: THREE.Group, from: THREE.Vector3, to: THREE.Vector3, drop: number, night: Night) {
  parent.add(new THREE.Line(sag(from, to, drop), new THREE.LineBasicMaterial({ color: '#2b241d' })));
  const bulb = glow('#ffd27a', 1);
  night.lamps.push(bulb);
  const geometry = new THREE.SphereGeometry(0.06, 6, 4);
  for (let i = 1; i < 10; i++) {
    const t = i / 10;
    const p = from.clone().lerp(to, t);
    p.y -= Math.sin(t * Math.PI) * drop + 0.08;
    const mesh = new THREE.Mesh(geometry, bulb);
    mesh.position.copy(p);
    parent.add(mesh);
  }
}

export function placePerson(person: { root: THREE.Object3D }, x: number, z: number, heading: number, y = 0) {
  person.root.position.set(x, y, z);
  person.root.rotation.y = heading;
}

// ---------------------------------------------------------------- city

export function buildCity(options: { shadows: boolean; crowd: boolean }): City {
  const root = new THREE.Group();
  const night: Night = { windows: [], lamps: [], pools: [], lights: [], signs: [], headlights: [] };

  // Ground: sidewalks everywhere, asphalt for the two streets, a paved plaza.
  // The sidewalk ground is cut in four pieces around the canal (city.mjs),
  // whose water lies below street level; the river beyond the east edge too.
  const sidewalkTex = tiles('#8a847b', 'rgba(40,36,32,.35)', 128, 4);
  const sidewalk = new THREE.MeshStandardMaterial({ map: sidewalkTex, color: '#b9b2a7', roughness: 0.95 });
  const east = CITY_BOUNDS.maxX + 0.6;
  for (const [x0, x1, z0, z1] of [[-130, CANAL.x0, -130, 130], [CANAL.x1, east, -130, 130], [CANAL.x0, CANAL.x1, -130, CANAL.z0], [CANAL.x0, CANAL.x1, CANAL.z1, 130]]) {
    const geometry = new THREE.PlaneGeometry(x1 - x0, z1 - z0);
    const uv = geometry.getAttribute('uv') as THREE.BufferAttribute;
    // Same 2 m tiles everywhere, whatever the piece.
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (x0 + uv.getX(i) * (x1 - x0)) / 2, (-z1 + uv.getY(i) * (z1 - z0)) / 2);
    const piece = new THREE.Mesh(geometry, sidewalk);
    piece.rotation.x = -Math.PI / 2;
    piece.position.set((x0 + x1) / 2, 0, (z0 + z1) / 2);
    piece.receiveShadow = true;
    root.add(piece);
  }
  // The avenue and the cross street run from edge to edge of the city.
  const asphalt = new THREE.MeshStandardMaterial({ color: '#2a2d31', roughness: 0.9, metalness: 0 });
  const { minX, maxX, minZ, maxZ } = CITY_BOUNDS;
  const avenue = new THREE.Mesh(new THREE.PlaneGeometry(maxX - minX, 8), asphalt);
  avenue.rotation.x = -Math.PI / 2;
  avenue.position.set((minX + maxX) / 2, 0.02, 0);
  avenue.receiveShadow = true;
  root.add(avenue);
  const cross = new THREE.Mesh(new THREE.PlaneGeometry(8, maxZ - minZ), asphalt);
  cross.rotation.x = -Math.PI / 2;
  cross.position.set(0, 0.021, (minZ + maxZ) / 2);
  cross.receiveShadow = true;
  root.add(cross);
  // Kerbs inside the centre only: district3d.ts draws them beyond, with
  // gaps where the new streets cross.
  const curb = solid('#9d978e', 0.9);
  for (const sign of [-1, 1]) {
    root.add(box(48.9, 0.14, 0.22, curb, sign * 28.55, 0.07, 4.1, false));
    root.add(box(48.9, 0.14, 0.22, curb, sign * 28.55, 0.07, -4.1, false));
  }
  for (const [z0, z1] of [[-45, -4], [4, 46]]) for (const x of [-4.1, 4.1]) root.add(box(0.22, 0.14, z1 - z0, curb, x, 0.07, (z0 + z1) / 2, false));
  const paint = new THREE.MeshStandardMaterial({ color: '#d9cba4', roughness: 0.8 });
  const dash = new THREE.PlaneGeometry(2, 0.14);
  const dashes: THREE.Matrix4[] = [];
  const m = new THREE.Matrix4();
  // No centre line inside a crossing with one of the new streets.
  const crossed = (t: number, axis: 'x' | 'z') => ROADS.some(road => road.axis !== axis && (axis === 'x' ? t > road.x0 - 1.5 && t < road.x1 + 1.5 : t > road.z0 - 1.5 && t < road.z1 + 1.5));
  for (let x = minX + 2; x < maxX - 2; x += 5) if (Math.abs(x) > 7 && !crossed(x, 'x')) dashes.push(m.clone().makeRotationX(-Math.PI / 2).setPosition(x, 0.03, 0));
  for (let z = minZ + 2; z < maxZ - 2; z += 5) if (Math.abs(z) > 7 && !crossed(z, 'z')) dashes.push(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2)).setPosition(0, 0.03, z));
  const stripe = new THREE.PlaneGeometry(2.4, 0.45);
  const zebra = new THREE.InstancedMesh(stripe, paint, 32);
  let zi = 0;
  for (const sz of [-6.2, 6.2]) for (let x = -3.4; x <= 3.4; x += 0.9) zebra.setMatrixAt(zi++, new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2)).setPosition(x, 0.031, sz));
  zebra.count = zi;
  root.add(zebra);
  const lines = new THREE.InstancedMesh(dash, paint, dashes.length);
  dashes.forEach((matrix, i) => lines.setMatrixAt(i, matrix));
  // Zebra crossings: over the cross street (above) and over the avenue.
  const crossing = new THREE.InstancedMesh(stripe, paint, 32);
  let ci = 0;
  for (const sx of [-6.2, 6.2]) for (let z = -3.4; z <= 3.4; z += 0.9) crossing.setMatrixAt(ci++, new THREE.Matrix4().makeRotationX(-Math.PI / 2).setPosition(sx, 0.031, z));
  crossing.count = ci;
  root.add(lines, crossing);

  const plazaTex = tiles('#9a8a74', 'rgba(60,45,30,.4)', 128, 2);
  plazaTex.repeat.set(13, 12);
  const plaza = new THREE.Mesh(new THREE.PlaneGeometry(PLAZA.x1 - PLAZA.x0, PLAZA.z1 - PLAZA.z0), new THREE.MeshStandardMaterial({ map: plazaTex, roughness: 0.9 }));
  plaza.rotation.x = -Math.PI / 2;
  plaza.position.set((PLAZA.x0 + PLAZA.x1) / 2, 0.012, (PLAZA.z0 + PLAZA.z1) / 2);
  plaza.receiveShadow = true;
  root.add(plaza);
  const grass = solid('#34502f', 1);
  for (const [x, z, w, d] of [[12, 27, 6, 6], [29, 27, 6, 6], [29, 12, 5, 5], [12.5, 11.5, 5, 4]]) {
    const bed = new THREE.Mesh(new THREE.PlaneGeometry(w, d), grass);
    bed.rotation.x = -Math.PI / 2;
    bed.position.set(x, 0.018, z);
    bed.receiveShadow = true;
    root.add(bed);
    root.add(box(w + 0.3, 0.25, 0.15, curb, x, 0.12, z - d / 2, false), box(w + 0.3, 0.25, 0.15, curb, x, 0.12, z + d / 2, false));
  }

  // Buildings. The districts around the centre come from district3d.ts.
  BUILDINGS.forEach((b, i) => addBuilding(root, b, i, night));

  // Mural on the side wall facing the cross street (original canvas art).
  const mural = new THREE.Mesh(new THREE.PlaneGeometry(9, 6.4), new THREE.MeshStandardMaterial({ map: muralTexture(), roughness: 0.95, emissive: '#ffffff', emissiveIntensity: 0 }));
  mural.material.emissiveMap = mural.material.map;
  night.windows.push(mural.material);
  mural.position.set(-7.95, 3.5, 23);
  mural.rotation.y = Math.PI / 2;
  root.add(mural);

  // Overpass at the south end of the cross street.
  const concrete = solid('#8c867c', 0.95);
  root.add(box(OVERPASS.x1 - OVERPASS.x0, 1, OVERPASS.z1 - OVERPASS.z0, concrete, 0, OVERPASS.y + 0.5, (OVERPASS.z0 + OVERPASS.z1) / 2));
  root.add(box(OVERPASS.x1 - OVERPASS.x0, 0.9, 0.15, concrete, 0, OVERPASS.y + 1.45, OVERPASS.z0 + 0.1, false));
  for (const prop of SOLID_PROPS.filter(p => p.id.startsWith('pilar'))) root.add(box(prop.x1 - prop.x0, OVERPASS.y, prop.z1 - prop.z0, concrete, (prop.x0 + prop.x1) / 2, OVERPASS.y / 2, (prop.z0 + prop.z1) / 2));
  const underLight = glow('#ffc98a', 0.6);
  night.lamps.push(underLight);
  root.add(box(0.8, 0.08, 0.2, underLight, -2, OVERPASS.y - 0.05, 35, false), box(0.8, 0.08, 0.2, underLight, 2, OVERPASS.y - 0.05, 35, false));

  // Street lamps with warm light pools, and a few real lights at key places.
  const pool = poolTexture();
  for (const x of [-38, -27, -16, -6, 9, 19, 31, 41]) addLamp(root, x, -5.4, 0, 1.2, night, pool);
  for (const x of [-36, -26, -15, -7.2, 9, 20, 31, 41]) addLamp(root, x, 5.4, 0, -1.2, night, pool);
  for (const z of [-16, -28, 16, 26]) addLamp(root, -5.4, z, 1.2, 0, night, pool);
  for (const z of [-14, -28, 16]) addLamp(root, 5.4, z, -1.2, 0, night, pool);
  for (const [x, z] of [[13, 21], [27, 21], [20, 12], [20, 29]]) addLamp(root, x, z, 0, 0.01, night, pool);
  const roofY = BUILDINGS.find(b => b.rooftop)!.h;
  for (const [x, y, z, color] of [[-11.5, 3.4, -5, '#ffc27a'], [-12, 3.4, 5, '#e8f0ff'], [13.4, 3.4, -4.4, '#ffb870'], [20, 3.4, 16, '#ffcf8a'], [-21, 3.4, 4.6, '#ffc07a'], [27, 3.4, -5, '#ffcf8a'], [27, roofY + 2.4, -14.5, '#ffcf8a']] as const) {
    const light = new THREE.PointLight(color, 0, 14, 2);
    light.position.set(x, y, z);
    night.lights.push(light);
    root.add(light);
  }

  // Trees and palms.
  let seed = 1;
  for (const [x, z, h] of [[9.6, 9.6, 8], [32.6, 9.8, 9], [9.8, 31, 7.5], [32.4, 30.6, 8.5], [25, 26, 9], [-36.5, 6.3, 8], [40, 6.3, 9], [-5.8, -34, 8.5], [5.8, 31, 7], [-40, -6.3, 7.5]] as const) addPalm(root, x, z, h, seed++);
  for (const [x, z] of [[13, 25], [29, 13], [12.5, 11.5], [-30, 6.4], [36, -6.4], [-5.9, 12], [5.9, -20]] as const) addTree(root, x, z, seed++);

  // Utility poles and overhead wires, like any older neighbourhood.
  const wood = solid('#5a4a3a', 0.95);
  const wire = new THREE.LineBasicMaterial({ color: '#1b1b1b' });
  const poles: THREE.Vector3[] = [];
  for (const x of [-40, -24, -8.5, 8.5, 24.5, 40]) {
    root.add(cylinder(0.11, 0.14, 8.4, wood, x, 4.2, -7, 8));
    root.add(box(0.1, 0.1, 1.4, wood, x, 7.8, -7, false));
    poles.push(new THREE.Vector3(x, 7.8, -7));
  }
  for (let i = 0; i < poles.length - 1; i++) for (const dz of [-0.6, 0, 0.6]) {
    root.add(new THREE.Line(sag(poles[i].clone().setZ(-7 + dz), poles[i + 1].clone().setZ(-7 + dz), 0.7), wire));
  }
  for (const x of [-32, 0.5, 16, 33]) {
    root.add(cylinder(0.11, 0.14, 7.6, wood, x, 3.8, 7, 8));
    const near = poles.reduce((a, b) => (Math.abs(a.x - x) < Math.abs(b.x - x) ? a : b));
    root.add(new THREE.Line(sag(new THREE.Vector3(x, 7.4, 7), near, 1.1), wire));
  }

  // Bus stop where the learner arrives.
  const shelterFrame = solid('#2c3a3a', 0.5, 0.5);
  root.add(box(1, 0.1, 4.2, solid('#7d8f96', 0.4, 0.3), 7.05, 2.5, 27, false));
  for (const z of [25.1, 28.9]) root.add(box(0.08, 2.5, 0.08, shelterFrame, 7.3, 1.25, z, false));
  const shelterGlass = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 2), new THREE.MeshStandardMaterial({ color: '#9fc0d0', transparent: true, opacity: 0.25, roughness: 0.1 }));
  shelterGlass.position.set(7.3, 1.3, 27);
  shelterGlass.rotation.y = -Math.PI / 2;
  root.add(shelterGlass);
  root.add(box(0.4, 0.08, 2.4, solid('#6b4a33'), 7, 0.48, 27.4, false));
  root.add(cylinder(0.05, 0.05, 2.8, shelterFrame, 5.2, 1.4, 30.4, 6));
  const busSign = glow('#2f9aa8', 0.9);
  root.add(box(0.1, 0.6, 0.6, busSign, 5.2, 2.9, 30.4, false));

  // Plaza: fountain, benches, the vendor's cart, a bike.
  const stone = solid('#a59d90', 0.9);
  const f = PLAZA.fountain;
  root.add(cylinder(f.r, f.r + 0.1, 0.6, stone, f.x, 0.3, f.z, 28));
  const water = new THREE.MeshStandardMaterial({ color: '#4d7f95', roughness: 0.15, metalness: 0.2, emissive: '#1c3a4a', emissiveIntensity: 0.4 });
  const waterDisc = new THREE.Mesh(new THREE.CircleGeometry(f.r - 0.2, 28), water);
  waterDisc.rotation.x = -Math.PI / 2;
  waterDisc.position.set(f.x, 0.55, f.z);
  root.add(waterDisc);
  root.add(cylinder(0.28, 0.36, 1.7, stone, f.x, 1.15, f.z, 12));
  root.add(cylinder(0.9, 0.5, 0.25, stone, f.x, 2.05, f.z, 16));
  const spout = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.9, 12, 1, true), new THREE.MeshStandardMaterial({ color: '#bfe0ee', transparent: true, opacity: 0.35, roughness: 0.1 }));
  spout.position.set(f.x, 2.55, f.z);
  root.add(spout);
  for (const [x, z, r] of [[14.5, 19, Math.PI / 2], [25.5, 19, -Math.PI / 2], [20, 24.6, Math.PI], [12.5, 30, Math.PI]] as const) addBench(root, x, z, r);
  const cart = new THREE.Group();
  cart.add(box(1.5, 0.8, 0.8, solid('#8a5a36'), 0, 0.8, 0));
  cart.add(box(1.6, 0.06, 0.9, solid('#d9cdb4'), 0, 1.23, 0, false));
  cart.add(cylinder(0.03, 0.03, 1.6, solid('#333333'), 0, 2, 0, 6));
  const umbrella = new THREE.Mesh(new THREE.ConeGeometry(1.2, 0.5, 8), new THREE.MeshStandardMaterial({ map: stripes('#c8452c', '#f2e6cc'), roughness: 0.9 }));
  umbrella.position.y = 2.85;
  cart.add(umbrella);
  const cartLight = glow('#ffd08a', 0.8);
  night.lamps.push(cartLight);
  cart.add(box(0.12, 0.12, 0.12, cartLight, 0, 2.5, 0, false));
  cart.position.set(16, 0, 15.2);
  root.add(cart);
  addBike(root, 23.4, 14.8);

  // Restaurant's outdoor table.
  const cloth = solid('#efe7d6', 0.9);
  root.add(box(4.8, 0.06, 0.9, cloth, 13.4, 0.76, -5.5));
  for (const x of [11.2, 15.6]) root.add(cylinder(0.04, 0.04, 0.74, solid('#2a2a2a'), x, 0.37, -5.5, 6));
  const candle = glow('#ffcf7a', 1.2);
  night.lamps.push(candle);
  for (const [x, c] of [[12.4, '#6d2a2a'], [14.3, '#2f5a36']] as const) root.add(cylinder(0.05, 0.05, 0.3, solid(c, 0.2, 0.1), x, 0.94, -5.5, 8));
  root.add(cylinder(0.04, 0.04, 0.1, candle, 13.4, 0.84, -5.45, 8));
  const chair = solid('#3c2c22');
  for (const x of [11.6, 13.4, 15.2]) {
    root.add(box(0.46, 0.06, 0.46, chair, x, 0.47, -6.5, false));
    root.add(box(0.46, 0.5, 0.06, chair, x, 0.74, -6.74, false));
  }
  root.add(box(0.46, 0.06, 0.46, chair, 13.4, 0.47, -4.7, false));
  root.add(box(0.46, 0.5, 0.06, chair, 13.4, 0.74, -4.46, false));
  stringLights(root, new THREE.Vector3(8.4, 3.3, -7.2), new THREE.Vector3(18.6, 3.3, -7.2), 0.35, night);

  // A small night market and music corner give the plaza taxi outcomes
  // a real visible destination, beyond a generic patch of grass.
  for (const [x, cloth] of [[29, '#a04f3c'], [33, '#397467']] as const) {
    root.add(box(2.6, 0.12, 1.3, solid('#977452'), x, 0.9, 29));
    root.add(box(3, 0.08, 1.8, solid(cloth), x, 2.5, 29));
    for (const side of [-1.2, 1.2]) root.add(box(0.05, 2.5, 0.05, solid('#d2bc96'), x + side, 1.25, 29));
    for (let i = 0; i < 7; i++) root.add(box(0.22, 0.22 + (i % 3) * 0.06, 0.28, solid(['#d9b565', '#ce6755', '#719367'][i % 3]), x - 0.9 + i * 0.3, 1.07, 29));
  }
  root.add(box(3.4, 0.25, 2, solid('#564737'), 14, 0.125, 29));
  for (const x of [12.6, 15.4]) root.add(box(0.5, 0.9, 0.4, solid('#25272c'), x, 0.7, 28.5));
  const musician = createPerson({ shirt: '#68866d', hair: '#30251e', skin: '#ce9e7c' }, false);
  placePerson(musician, 14, 28.9, Math.PI, 0.25); root.add(musician.root);
  root.add(cylinder(0.025, 0.025, 1.45, solid('#303339'), 14, 0.97, 28.3, 6));

  // Rooftop of the tall building: railing, lights, a small group.
  const terraza = BUILDINGS.find(b => b.rooftop)!;
  const rail = solid('#9ab1ab', 0.4, 0.6);
  const top = terraza.h + 0.01;
  const rw = terraza.x1 - terraza.x0, rd = terraza.z1 - terraza.z0;
  const rcx = (terraza.x0 + terraza.x1) / 2, rcz = (terraza.z0 + terraza.z1) / 2;
  const deck = new THREE.Mesh(new THREE.PlaneGeometry(rw - 0.4, rd - 0.4), new THREE.MeshStandardMaterial({ map: (() => { const t = tiles('#8d7a66', 'rgba(40,30,20,.5)', 128, 3); t.repeat.set(4, 6); return t; })(), roughness: 0.9 }));
  deck.rotation.x = -Math.PI / 2;
  deck.position.set(rcx, top + 0.02, rcz);
  deck.receiveShadow = true;
  root.add(deck);
  root.add(box(rw, 0.05, 0.05, rail, rcx, top + 1.1, terraza.z1 - 0.2, false), box(rw, 0.05, 0.05, rail, rcx, top + 1.1, terraza.z0 + 0.2, false));
  root.add(box(0.05, 0.05, rd, rail, terraza.x0 + 0.2, top + 1.1, rcz, false), box(0.05, 0.05, rd, rail, terraza.x1 - 0.2, top + 1.1, rcz, false));
  for (let x = terraza.x0 + 0.2; x <= terraza.x1; x += 2) root.add(box(0.05, 1.1, 0.05, rail, x, top + 0.55, terraza.z1 - 0.2, false));
  for (const z of [-10, -13, -16, -19]) stringLights(root, new THREE.Vector3(terraza.x0 + 0.4, top + 2.6, z), new THREE.Vector3(terraza.x1 - 0.4, top + 2.6, z), 0.4, night);
  for (const [x, z] of [[terraza.x0 + 0.4, -10], [terraza.x1 - 0.4, -10], [terraza.x0 + 0.4, -19], [terraza.x1 - 0.4, -19]]) root.add(cylinder(0.04, 0.04, 2.6, rail, x, top + 1.3, z, 6));
  root.add(cylinder(0.45, 0.45, 0.05, solid('#d9cdb4'), 26.4, top + 1.05, -15.4, 16), cylinder(0.05, 0.05, 1, solid('#333333'), 26.4, top + 0.5, -15.4, 6));
  for (const [x, z] of [[23, -20.5], [31, -20.5], [23, -9.5]]) {
    root.add(box(0.8, 0.6, 0.8, solid('#6b4a33'), x, top + 0.3, z));
    const plant = new THREE.Mesh(new THREE.IcosahedronGeometry(0.6, 1), solid('#3a5a34'));
    plant.position.set(x, top + 1, z);
    root.add(plant);
  }
  root.add(box(2.1, 2.5, 2.1, solid('#526962'), 29.7, top + 1.25, -20));
  root.add(box(0.85, 2.05, 0.035, solid('#d0b486'), 29.7, top + 1.025, -18.93));
  const roofExit = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.22), new THREE.MeshStandardMaterial({ map: signTexture('ASCENSOR', '#23463d', '#fff7df') }));
  roofExit.position.set(29.7, top + 2.23, -18.92); root.add(roofExit);
  for (const z of [-17.2, -18.2]) {
    root.add(box(1.8, 0.1, 0.55, solid('#81664b'), 23.5, top + 0.46, z));
    for (const x of [22.8, 24.2]) root.add(box(0.07, 0.46, 0.5, rail, x, top + 0.23, z));
  }
  const rooftop: Person[] = [];
  const looks: Look[] = [
    { shirt: '#d9a441', hair: '#1a1410', skin: '#b87a55' }, { shirt: '#2f4f6a', hair: '#6b4a2a', skin: '#e8c3a0' },
    { shirt: '#7a2e3e', hair: '#101010', skin: '#8a5a3a' }, { shirt: '#e6e0d4', pants: '#3a3a44', hair: '#c8a064', skin: '#f0cfae' },
  ];
  for (const [i, [x, z, h]] of ([[25.4, -14.4, 0.5], [27.2, -14.9, 0], [28.9, -14.2, -0.6], [30.4, -17.6, -1.2]] as const).entries()) {
    const person = createPerson(looks[i], false);
    addBlobShadow(person);
    placePerson(person, x, z, h, top);
    rooftop.push(person);
    root.add(person.root);
  }

  // Vehicles.
  const cars = new Map<string, CarRig>();
  for (const v of VEHICLES) {
    const rig = makeCar(v.kind, v.color, night);
    placeVehicle(rig.group, v.x, v.z, v.heading);
    cars.set(v.id, rig);
    root.add(rig.group);
  }

  // People in the street.
  const npcs = new Map<string, NpcRig>();
  for (const data of NPCS) {
    if (data.walk && !options.crowd) continue;
    // Only the learner casts a real shadow; everyone else gets a soft disc.
    const person = createPerson(data.look, false);
    addBlobShadow(person, data.seated ? 1.2 : 1);
    person.seated = Boolean(data.seated);
    placePerson(person, data.x, data.z, data.facing);
    root.add(person.root);
    npcs.set(data.id, { person, data, x: data.x, z: data.z, dir: 1, heading: data.facing });
  }

  // Soft rings at every place you can interact with; a lantern once done.
  const markers = new Map<string, Marker>();
  const ringGeometry = new THREE.RingGeometry(0.62, 0.8, 32);
  for (const target of TARGETS) {
    const material = new THREE.MeshBasicMaterial({ color: '#ffc46b', transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending });
    const ring = new THREE.Mesh(ringGeometry, material);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(target.x, 0.06, target.z);
    root.add(ring);
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 8), glow('#ffcf7a', 2));
    lantern.position.set(target.x + 0.9, 2.7, target.z);
    lantern.visible = false;
    root.add(lantern);
    markers.set(target.id, { ring, lantern, material });
  }

  const keep: THREE.Object3D[] = [...rooftop.map(p => p.root), ...[...npcs.values()].map(n => n.person.root), cars.get('taxi')!.group, ...cars.get('auto-roto')!.smoke!];
  for (const marker of markers.values()) keep.push(marker.ring, marker.lantern);
  batchStatic(root, keep);
  return { root, night, cars, npcs, markers, rooftop, busSign, asphalt, water };
}

// Static batching: every mesh that never moves is baked into one mesh per
// material, which turns about a thousand draw calls into a few dozen. Moving
// things (people, the taxi, markers) are listed in `keep` and left alone.
export function batchStatic(root: THREE.Object3D, keep: THREE.Object3D[]) {
  root.updateMatrixWorld(true);
  const skip = new Set(keep);
  const inverse = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map<string, { material: THREE.Material; cast: boolean; receive: boolean; parts: THREE.BufferGeometry[]; meshes: THREE.Mesh[] }>();
  const visit = (object: THREE.Object3D) => {
    if (skip.has(object)) return;
    const mesh = object as THREE.Mesh;
    if (mesh.isMesh && !(mesh as THREE.InstancedMesh).isInstancedMesh && !Array.isArray(mesh.material)) {
      const material = mesh.material as THREE.Material;
      const key = `${material.uuid}|${mesh.castShadow}|${mesh.receiveShadow}`;
      let bucket = buckets.get(key);
      if (!bucket) { bucket = { material, cast: mesh.castShadow, receive: mesh.receiveShadow, parts: [], meshes: [] }; buckets.set(key, bucket); }
      const geometry = (mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone());
      for (const name of Object.keys(geometry.attributes)) if (name !== 'position' && name !== 'normal' && name !== 'uv') geometry.deleteAttribute(name);
      if (!geometry.attributes.uv) geometry.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((geometry.attributes.position.count) * 2), 2));
      geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, mesh.matrixWorld));
      bucket.parts.push(geometry);
      bucket.meshes.push(mesh);
    }
    for (const child of object.children) visit(child);
  };
  for (const child of root.children) visit(child);
  for (const bucket of buckets.values()) {
    if (bucket.meshes.length < 2) continue;
    const merged = mergeGeometries(bucket.parts, false);
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, bucket.material);
    mesh.castShadow = bucket.cast;
    mesh.receiveShadow = bucket.receive;
    for (const original of bucket.meshes) {
      original.removeFromParent();
      original.geometry.dispose();
    }
    root.add(mesh);
  }
  for (const bucket of buckets.values()) if (bucket.meshes.length < 2) for (const part of bucket.parts) part.dispose();
}

// ---------------------------------------------------------------- interiors

function room(group: THREE.Group, cx: number, w: number, d: number, h: number, wallColor: string, floor: THREE.Texture, floorRepeat: number) {
  floor.repeat.set(floorRepeat, floorRepeat * (d / w));
  const base = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: floor, roughness: 0.7 }));
  base.rotation.x = -Math.PI / 2;
  base.position.set(cx, 0.01, 0);
  base.receiveShadow = true;
  group.add(base);
  const wall = solid(wallColor, 0.95);
  group.add(box(w, h, 0.2, wall, cx, h / 2, -d / 2, false));
  group.add(box(0.2, h, d, wall, cx - w / 2, h / 2, 0, false));
  group.add(box(0.2, h, d, wall, cx + w / 2, h / 2, 0, false));
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(w, d), solid('#efe6d8'));
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.set(cx, h, 0);
  group.add(ceiling);
}

export function nightWindow(group: THREE.Group, x: number, y: number, z: number, w: number, h: number, rotation: number) {
  const view = canvas(256, 160, ctx => {
    const sky = ctx.createLinearGradient(0, 0, 0, 160);
    sky.addColorStop(0, '#0d1526');
    sky.addColorStop(1, '#2a3350');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 256, 160);
    const rand = random(w * 10 + x);
    for (let i = 0; i < 9; i++) {
      const bx = rand() * 230, bw = 20 + rand() * 30, bh = 40 + rand() * 90;
      ctx.fillStyle = '#121824';
      ctx.fillRect(bx, 160 - bh, bw, bh);
      for (let j = 0; j < 8; j++) {
        if (rand() > 0.55) continue;
        ctx.fillStyle = rand() > 0.3 ? '#f5c36a' : '#9fb4ff';
        ctx.fillRect(bx + 3 + rand() * (bw - 8), 160 - bh + 6 + rand() * (bh - 12), 4, 5);
      }
    }
    ctx.fillStyle = '#3a2e26';
    ctx.fillRect(126, 0, 6, 160);
    ctx.fillRect(0, 0, 256, 6);
    ctx.fillRect(0, 154, 256, 6);
  });
  const pane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: view, emissiveMap: view, emissive: '#ffffff', emissiveIntensity: 0.9 }));
  pane.position.set(x, y, z);
  pane.rotation.y = rotation;
  group.add(pane);
}

export function table(group: THREE.Group, x: number, z: number, top: THREE.Material, round = true) {
  if (round) group.add(cylinder(0.42, 0.42, 0.05, top, x, 0.76, z, 18));
  else group.add(box(1, 0.05, 0.7, top, x, 0.76, z));
  group.add(cylinder(0.04, 0.04, 0.74, solid('#2a2a2a', 0.5, 0.5), x, 0.37, z, 6));
}

export function seat(group: THREE.Group, x: number, z: number, rotation: number, material: THREE.Material) {
  const chair = new THREE.Group();
  chair.add(box(0.44, 0.05, 0.44, material, 0, 0.46, 0, false));
  chair.add(box(0.44, 0.5, 0.05, material, 0, 0.72, -0.2, false));
  for (const [lx, lz] of [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]]) chair.add(box(0.04, 0.46, 0.04, material, lx, 0.23, lz, false));
  chair.position.set(x, 0, z);
  chair.rotation.y = rotation;
  group.add(chair);
}

// Interiors are built the first time the learner walks in.
export function buildInterior(stage: string, shadows: boolean): Interior | null {
  const interior = interiorScene(stage, shadows);
  if (interior) batchStatic(interior.group, interior.people.map(person => person.root));
  return interior;
}

function interiorScene(stage: string, shadows: boolean): Interior | null {
  const setting = STAGES[stage];
  if (!setting?.size) return null;
  const group = new THREE.Group();
  const cx = setting.origin.x;
  const { w, d } = setting.size;
  const people: Person[] = [];
  const pendant = glow('#ffd49a', 2.4);

  if (stage === 'interior-cafe') {
    const floor = canvas(256, 256, ctx => {
      const rand = random(5);
      for (let i = 0; i < 8; i++) {
        ctx.fillStyle = ['#7a5536', '#6d4a2e', '#845c3b'][i % 3];
        ctx.fillRect(0, i * 32, 256, 32);
        ctx.fillStyle = 'rgba(0,0,0,.25)';
        ctx.fillRect(0, i * 32, 256, 2);
        ctx.fillRect(rand() * 256, i * 32, 2, 32);
      }
    }, true);
    room(group, cx, w, d, 3.4, '#c99a6e', floor, 3);
    const wood = solid('#4e3322', 0.7);
    group.add(box(w, 1, 0.1, wood, cx, 0.5, -d / 2 + 0.12, false));
    group.add(box(7, 1.05, 0.8, wood, cx - 0.5, 0.52, -2.4));
    group.add(box(7.2, 0.06, 0.95, solid('#d9c8a8', 0.4), cx - 0.5, 1.07, -2.4));
    group.add(box(0.7, 0.55, 0.5, solid('#b9bcc0', 0.3, 0.8), cx + 1, 1.37, -2.5));
    for (let i = 0; i < 5; i++) group.add(cylinder(0.05, 0.04, 0.09, solid('#f2ede4', 0.3), cx - 2.6 + i * 0.25, 1.15, -2.2, 10));
    for (const y of [1.6, 2.2]) {
      group.add(box(5, 0.05, 0.3, wood, cx - 0.5, y, -d / 2 + 0.3, false));
      for (let i = 0; i < 12; i++) group.add(cylinder(0.08, 0.08, 0.22, solid(['#e8d9b8', '#8a5a36', '#2f5d4a'][i % 3], 0.5), cx - 2.8 + i * 0.4, y + 0.14, -d / 2 + 0.3, 8));
    }
    const menu = canvas(512, 320, ctx => {
      ctx.fillStyle = '#1f2421'; ctx.fillRect(0, 0, 512, 320);
      ctx.strokeStyle = '#8a6a4a'; ctx.lineWidth = 14; ctx.strokeRect(0, 0, 512, 320);
      ctx.fillStyle = '#f2ede4'; ctx.font = '700 44px Georgia, serif'; ctx.textAlign = 'center';
      ctx.fillText('CAFÉ MARTINA', 256, 68);
      ctx.font = '32px Georgia, serif';
      ['café con leche', 'medialunas', 'tostado', 'submarino'].forEach((item, i) => ctx.fillText(item, 256, 130 + i * 46));
    });
    const board = new THREE.Mesh(new THREE.PlaneGeometry(2, 1.25), new THREE.MeshStandardMaterial({ map: menu, roughness: 0.9 }));
    board.position.set(cx + 3.2, 2.2, -d / 2 + 0.12);
    group.add(board);
    nightWindow(group, cx - w / 2 + 0.12, 1.7, 0.5, 4, 1.8, Math.PI / 2);
    for (const x of [-3, -0.5, 2]) {
      group.add(cylinder(0.01, 0.01, 1, solid('#222222'), cx + x, 2.9, -2.4, 4));
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 8), pendant);
      bulb.position.set(cx + x, 2.35, -2.4);
      group.add(bulb);
    }
    const top = solid('#e9dcc3', 0.5);
    const chairs = solid('#2b211b', 0.7);
    for (const [x, z] of [[3.6, 0.4], [-3.4, 1.4], [3.9, 3]]) {
      table(group, cx + x, z, top);
      seat(group, cx + x - 0.7, z, Math.PI / 2, chairs);
      seat(group, cx + x + 0.7, z, -Math.PI / 2, chairs);
    }
    const waiter = createPerson({ shirt: '#f0ebe0', pants: '#1e1e1e', hair: '#2a1a12', skin: '#c8906a' }, shadows);
    placePerson(waiter, cx - 1, -3.3, 0);
    const guest = createPerson({ shirt: '#6a4a7a', hair: '#9a6a3a', skin: '#efc8a4' }, shadows);
    guest.seated = true;
    placePerson(guest, cx - 4.1, 1.4, Math.PI / 2);
    people.push(waiter, guest);
    group.add(waiter.root, guest.root);
    return { group, people, lamp: { color: '#ffc27a', spots: [new THREE.Vector3(cx, 3, 0), new THREE.Vector3(cx - 1, 2.6, -2.2)] } };
  }

  if (stage === 'interior-departamento') {
    const floor = canvas(256, 256, ctx => {
      for (let y = 0; y < 8; y++) for (let x = 0; x < 4; x++) {
        ctx.fillStyle = (x + y) % 2 ? '#9a6b44' : '#8a5e3a';
        ctx.fillRect(x * 64 + (y % 2) * 32, y * 32, 64, 32);
        ctx.strokeStyle = 'rgba(0,0,0,.25)';
        ctx.strokeRect(x * 64 + (y % 2) * 32, y * 32, 64, 32);
      }
    }, true);
    room(group, cx, w, d, 3, '#e3d4b6', floor, 3);
    const fabric = solid('#5d6f7a', 0.95);
    group.add(box(2.6, 0.45, 0.95, fabric, cx - 3, 0.35, -3.6));
    group.add(box(2.6, 0.55, 0.22, fabric, cx - 3, 0.85, -4.05));
    group.add(box(0.22, 0.6, 0.95, fabric, cx - 4.2, 0.55, -3.6), box(0.22, 0.6, 0.95, fabric, cx - 1.8, 0.55, -3.6));
    const rand = random(12);
    for (let i = 0; i < 6; i++) {
      const coat = new THREE.Mesh(new THREE.SphereGeometry(0.32, 10, 8), solid(['#3a3a44', '#7a2e2e', '#c9b48a', '#2f4f3a'][i % 4]));
      coat.scale.set(1.3, 0.5, 1);
      coat.position.set(cx - 3.8 + rand() * 1.6, 0.75 + i * 0.07, -3.6 + (rand() - 0.5) * 0.4);
      group.add(coat);
    }
    group.add(box(0.4, 0.3, 0.3, solid('#d24a3a'), cx - 2.2, 0.72, -3.4));
    group.add(box(1.2, 0.4, 0.7, solid('#6b4a33'), cx - 3, 0.2, -2.3));
    group.add(box(2.2, 0.06, 1.1, solid('#efe7d6'), cx + 2.4, 0.78, -1.2));
    for (const [x, z] of [[1.4, -1.6], [3.4, -1.6], [1.4, -0.8], [3.4, -0.8]]) group.add(box(0.05, 0.76, 0.05, solid('#3a2a1e'), cx + x, 0.38, z, false));
    group.add(cylinder(0.26, 0.26, 0.2, solid('#f4ece0', 0.6), cx + 2.4, 0.91, -1.2, 18));
    const flame = glow('#ffcf7a', 2);
    group.add(box(0.1, 0.1, 0.03, solid('#e2b93a'), cx + 2.4, 1.07, -1.2, false), box(0.03, 0.05, 0.03, flame, cx + 2.4, 1.16, -1.2, false));
    for (let i = 0; i < 8; i++) group.add(box(0.12, 0.08, 0.26, solid(['#1c1c1e', '#8a5a36', '#e8e2d6', '#3a4a6a'][i % 4]), cx + w / 2 - 0.3, 0.04, 1.2 + i * 0.3, false));
    const door = new THREE.Mesh(new THREE.PlaneGeometry(1, 2.2), solid('#6b4a33'));
    door.position.set(cx + w / 2 - 0.11, 1.1, 2.6);
    door.rotation.y = -Math.PI / 2;
    group.add(door);
    group.add(box(0.8, 1.8, 0.7, solid('#f2f0ea', 0.3, 0.1), cx - 5.3, 0.9, -1));
    const note = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.28), solid('#fff8c4'));
    note.position.set(cx - 4.89, 1.3, -1);
    note.rotation.y = Math.PI / 2;
    group.add(note);
    nightWindow(group, cx + 1, 1.7, -d / 2 + 0.12, 3.2, 1.6, 0);
    group.add(cylinder(0.02, 0.02, 1.6, solid('#222222'), cx + 4.8, 0.8, -4.2, 6));
    const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.35, 16, 1, true), pendant);
    shade.position.set(cx + 4.8, 1.7, -4.2);
    group.add(shade);
    for (const [x, c] of [[-1, '#e05a5a'], [-0.6, '#f2c230'], [-0.2, '#4a8ad4']] as const) {
      const balloon = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), solid(c, 0.3));
      balloon.position.set(cx + x, 2.5, -4.2);
      group.add(balloon);
    }
    const vale = createPerson({ shirt: '#c05a7a', pants: '#2a2f3a', hair: '#1a120c', skin: '#d6a07a' }, shadows);
    placePerson(vale, cx + 1.3, 0.9, Math.PI + 0.6);
    people.push(vale);
    group.add(vale.root);
    return { group, people, lamp: { color: '#ffc98a', spots: [new THREE.Vector3(cx, 2.7, 0), new THREE.Vector3(cx + 3.5, 2.2, -3)] } };
  }

  if (stage === 'interior-tienda') {
    room(group, cx, w, d, 3.2, '#e8e4dc', tiles('#e4e0d6', '#b8b2a6', 128, 2), 5);
    const metal = solid('#c4c7cb', 0.4, 0.6);
    const rand = random(33);
    const products = new THREE.InstancedMesh(new THREE.BoxGeometry(0.22, 0.28, 0.2), new THREE.MeshStandardMaterial({ roughness: 0.6 }), 360);
    let n = 0;
    const color = new THREE.Color();
    for (const sx of [-3.8, 3.6]) {
      // Open shelving: the former solid box hid every product inside it.
      for (const z of [-4.35, 1.55]) group.add(box(0.66, 1.95, 0.05, metal, cx + sx, 0.975, z));
      for (const y of [0.35, 0.85, 1.35, 1.8]) {
        group.add(box(0.76, 0.045, 6, metal, cx + sx, y, -1.4));
        group.add(box(0.025, 0.08, 6, solid('#f3eee1'), cx + sx + (sx < 0 ? 0.39 : -0.39), y, -1.4));
      }
      for (const y of [0.35, 0.85, 1.35, 1.8]) for (const side of [-0.22, 0.22]) for (let i = 0; i < 22 && n < 360; i++) {
        if (rand() < 0.15) continue;
        products.setMatrixAt(n, new THREE.Matrix4().setPosition(cx + sx + side, y + 0.14, -4.2 + i * 0.26));
        products.setColorAt(n, color.set(['#d24a3a', '#3a7bd2', '#e8c640', '#4aa05a', '#f0ece4', '#e07a2a'][Math.floor(rand() * 6)]));
        n++;
      }
    }
    products.count = n;
    group.add(products);
    const fridge = new THREE.MeshStandardMaterial({ color: '#dfe8f2', emissive: '#cfe0ff', emissiveIntensity: 0.9, roughness: 0.2 });
    for (let i = 0; i < 4; i++) {
      group.add(box(1.8, 2.1, 0.7, solid('#e8ebee', 0.4, 0.3), cx - 2.8 + i * 1.9, 1.05, -d / 2 + 0.45));
      const door = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.8), fridge);
      door.position.set(cx - 2.8 + i * 1.9, 1.1, -d / 2 + 0.79);
      group.add(door);
      for (let j = 0; j < 12; j++) group.add(cylinder(0.04, 0.04, 0.26, solid(['#3a8a3a', '#b33a2c', '#e8c640', '#f0ece4'][(i + j) % 4], 0.3), cx - 3.45 + i * 1.9 + (j % 6) * 0.25, 0.55 + Math.floor(j / 6) * 0.6, -d / 2 + 0.91, 6));
    }
    const sign = (text: string, x: number, y: number, z: number, width: number) => {
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(width, 0.35), new THREE.MeshStandardMaterial({ map: signTexture(text, '#23463d', '#fff6dd'), roughness: 0.8 }));
      panel.position.set(x, y, z); group.add(panel);
    };
    sign('BEBIDAS · LÁCTEOS · HIELO', cx, 2.65, -d / 2 + 0.83, 7);
    sign('ALMACÉN 24 H', cx - 2.7, 2.7, -4.5, 3);
    group.add(box(2.2, 1, 0.7, solid('#7a5a3c', 0.6), cx + 1.4, 0.5, 1.6));
    sign('CAJA', cx + 1.4, 0.73, 1.97, 1.1);
    const payment = new THREE.MeshStandardMaterial({ color: '#28383e', roughness: 0.45 });
    group.add(box(0.16, 0.12, 0.25, payment, cx + 0.8, 1.08, 1.65));
    group.add(box(0.14, 0.01, 0.15, glow('#7cb89c', 0.6), cx + 0.8, 1.145, 1.65));
    for (let i = 0; i < 3; i++) group.add(box(0.55, 0.14, 0.42, solid('#9a4936'), cx - 1.9, 0.1 + i * 0.15, 3.9));
    group.add(box(1.7, 0.025, 1.1, solid('#35413d'), cx, 0.03, 4.5));
    group.add(box(0.4, 0.3, 0.35, solid('#2a2a2a', 0.4, 0.4), cx + 1.9, 1.15, 1.6));
    const tube = glow('#f4f8ff', 2.2);
    for (const z of [-3.5, 0, 3.5]) group.add(box(3.6, 0.06, 0.3, tube, cx, 3.15, z, false));
    const clerk = createPerson({ shirt: '#b33a2c', pants: '#2a2a30', hair: '#141414', skin: '#9a6a48' }, shadows);
    placePerson(clerk, cx + 1.4, 0.9, Math.PI * 0.85);
    people.push(clerk);
    group.add(clerk.root);
    return { group, people, lamp: { color: '#eef4ff', spots: [new THREE.Vector3(cx, 3, 0), new THREE.Vector3(cx, 3, -3.5)] } };
  }
  if (stage === 'interior-museo') return museumRoom(group, cx, w, d, pendant);
  if (stage === 'interior-bar') return barRoom(group, cx, w, d);
  return null;
}

// A room you walk around in: four walls, the street door in the south wall.
export function walkRoom(group: THREE.Group, cx: number, w: number, d: number, h: number, wallColor: string, floor: THREE.Texture, floorRepeat: number, doorX: number, ceilingColor: string) {
  floor.repeat.set(floorRepeat, floorRepeat * (d / w));
  const base = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshStandardMaterial({ map: floor, roughness: 0.55 }));
  base.rotation.x = -Math.PI / 2;
  base.position.set(cx, 0.01, 0);
  base.receiveShadow = true;
  group.add(base);
  const wall = solid(wallColor, 0.95);
  group.add(box(w, h, 0.2, wall, cx, h / 2, -d / 2, false));
  group.add(box(0.2, h, d, wall, cx - w / 2, h / 2, 0, false));
  group.add(box(0.2, h, d, wall, cx + w / 2, h / 2, 0, false));
  const left = doorX - 0.9 - (cx - w / 2), right = cx + w / 2 - (doorX + 0.9);
  group.add(box(left, h, 0.2, wall, cx - w / 2 + left / 2, h / 2, d / 2, false));
  group.add(box(right, h, 0.2, wall, cx + w / 2 - right / 2, h / 2, d / 2, false));
  group.add(box(1.8, h - 2.5, 0.2, wall, doorX, 2.5 + (h - 2.5) / 2, d / 2, false));
  // The street door, glowing a little, and an exit sign above it.
  const outside = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.5), new THREE.MeshBasicMaterial({ color: '#1c2638' }));
  outside.position.set(doorX, 1.25, d / 2 + 0.12);
  outside.rotation.y = Math.PI;
  group.add(outside);
  const exit = glow('#59d17a', 1.2);
  group.add(box(0.5, 0.18, 0.04, exit, doorX, 2.75, d / 2 - 0.12, false));
  const mat = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.9), solid('#2a201a', 1));
  mat.rotation.x = -Math.PI / 2;
  mat.position.set(doorX, 0.015, d / 2 - 0.6);
  group.add(mat);
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(w, d), solid(ceilingColor));
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.set(cx, h, 0);
  group.add(ceiling);
}

export function lightPool(group: THREE.Group, x: number, z: number, radius: number, color = '#ffdca8', opacity = 0.32) {
  const pool = new THREE.Mesh(new THREE.CircleGeometry(radius, 24), new THREE.MeshBasicMaterial({ map: poolTexture(), color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false }));
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(x, 0.02, z);
  group.add(pool);
}

export function framed(group: THREE.Group, texture: THREE.Texture, x: number, y: number, z: number, w: number, h: number, rotation: number, frame = '#3a2a1e') {
  const holder = new THREE.Group();
  holder.position.set(x, y, z);
  holder.rotation.y = rotation;
  holder.add(box(w + 0.12, h + 0.12, 0.05, solid(frame, 0.6), 0, 0, 0, false));
  const picture = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: texture, roughness: 0.8, emissive: '#ffffff', emissiveMap: texture, emissiveIntensity: 0.18 }));
  picture.position.z = 0.03;
  holder.add(picture);
  group.add(holder);
}

function vitrine(group: THREE.Group, x: number, z: number, content: THREE.Object3D) {
  const wood = solid('#2a1f19', 0.6);
  group.add(box(0.9, 1, 0.9, wood, x, 0.5, z));
  group.add(box(0.96, 0.05, 0.96, solid('#b8a27a', 0.3, 0.6), x, 1.02, z, false));
  content.position.set(x, 1.06, z);
  group.add(content);
  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.5, 0.86), new THREE.MeshStandardMaterial({ color: '#cfe4ee', transparent: true, opacity: 0.16, roughness: 0.05, metalness: 0.2, depthWrite: false }));
  glass.position.set(x, 1.3, z);
  group.add(glass);
}

// Museo del Pasado: a dim hall with nine pieces, each under its own light.
function museumRoom(group: THREE.Group, cx: number, w: number, d: number, pendant: THREE.Material): Interior {
  const ox = cx;
  walkRoom(group, cx, w, d, 4.4, '#34474b', tiles('#4a423b', 'rgba(20,16,12,.55)', 128, 2), 6, ox, '#161b1e');
  const trim = solid('#1a2326', 0.8);
  group.add(box(w, 1, 0.06, trim, cx, 0.5, -d / 2 + 0.13, false));
  group.add(box(0.06, 1, d, trim, cx - w / 2 + 0.13, 0.5, 0, false), box(0.06, 1, d, trim, cx + w / 2 - 0.13, 0.5, 0, false));
  // Track lights along the ceiling.
  const spot = glow('#fff0d0', 1.6);
  for (const x of [-6, -2, 2, 6]) for (const z of [-4, 1]) group.add(box(0.18, 0.12, 0.18, spot, ox + x, 4.3, z, false));
  const brass = solid('#c9a24a', 0.3, 0.8);

  // 1 · The beach photo (west wall).
  const photo = canvas(256, 192, ctx => {
    const sky = ctx.createLinearGradient(0, 0, 0, 192);
    sky.addColorStop(0, '#d9d9d6'); sky.addColorStop(0.5, '#a4a4a0'); sky.addColorStop(0.52, '#7a7a76'); sky.addColorStop(1, '#c9c6bc');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, 256, 192);
    ctx.fillStyle = '#2a2a28';
    for (const [x, h] of [[70, 46], [96, 52], [122, 40], [190, 48]]) { ctx.fillRect(x, 150 - h, 12, h); ctx.beginPath(); ctx.arc(x + 6, 150 - h - 7, 7, 0, Math.PI * 2); ctx.fill(); }
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 10; ctx.strokeRect(0, 0, 256, 192);
  });
  framed(group, photo, ox - 8.86, 1.75, -3.5, 1.3, 0.95, Math.PI / 2);
  lightPool(group, ox - 8, -3.5, 1.6);

  // 2 · The public phone (west wall).
  const phone = new THREE.Group();
  phone.add(box(0.36, 0.6, 0.22, solid('#2f4f7a', 0.5, 0.3), 0, 0, 0));
  phone.add(box(0.2, 0.16, 0.03, solid('#b9b4a8', 0.4, 0.5), 0, -0.06, 0.12, false));
  const handset = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.2, 4, 8), solid('#141414', 0.4));
  handset.position.set(-0.12, 0.12, 0.14);
  phone.add(handset);
  phone.add(box(0.5, 0.06, 0.4, solid('#2f4f7a', 0.5, 0.3), 0, 0.42, 0.06, false));
  phone.position.set(ox - 8.75, 1.45, 2);
  phone.rotation.y = Math.PI / 2;
  group.add(phone);
  lightPool(group, ox - 8, 2, 1.5);

  // 3 · The 1969 television on its stand (north wall).
  group.add(box(1, 0.6, 0.6, solid('#3a2a1e', 0.7), ox - 5, 0.3, -6.3));
  const tv = new THREE.Group();
  tv.add(box(0.86, 0.66, 0.56, solid('#6a4a2e', 0.5), 0, 0, 0));
  const moon = canvas(128, 96, ctx => {
    ctx.fillStyle = '#5c5c5c'; ctx.fillRect(0, 0, 128, 96);
    ctx.fillStyle = '#9a9a9a'; ctx.fillRect(0, 62, 128, 34);
    ctx.fillStyle = '#e8e8e8'; ctx.fillRect(56, 30, 12, 26); ctx.beginPath(); ctx.arc(62, 26, 8, 0, Math.PI * 2); ctx.fill();
    for (let i = 0; i < 400; i++) { ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.25})`; ctx.fillRect(Math.random() * 128, Math.random() * 96, 2, 1); }
  });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.46), new THREE.MeshStandardMaterial({ map: moon, emissive: '#ffffff', emissiveMap: moon, emissiveIntensity: 0.9 }));
  screen.position.set(-0.06, 0.02, 0.285);
  tv.add(screen);
  for (const side of [-1, 1]) {
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.6, 4), brass);
    antenna.position.set(side * 0.14, 0.58, 0);
    antenna.rotation.z = side * -0.5;
    tv.add(antenna);
  }
  tv.position.set(ox - 5, 0.93, -6.3);
  group.add(tv);
  lightPool(group, ox - 5, -5.6, 1.5, '#cfe0ff', 0.25);

  // 4 · A bedroom from 1985 behind a rope (north alcove).
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(6.6, 1.9), solid('#5a3a5a', 1));
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(ox + 3, 0.02, -6);
  group.add(rug);
  group.add(box(2, 0.45, 1, solid('#3d4f7a', 0.9), ox + 1, 0.23, -6.3));
  group.add(box(0.5, 0.12, 0.8, solid('#efe6d8', 0.9), ox + 0.2, 0.5, -6.3, false));
  group.add(box(1.4, 0.06, 0.6, solid('#7a5a3c', 0.6), ox + 4.6, 0.78, -6.5));
  for (const x of [4, 5.2]) group.add(box(0.05, 0.76, 0.5, solid('#4a3626', 0.6), ox + x, 0.38, -6.5, false));
  group.add(box(0.42, 0.12, 0.22, solid('#1d1d1d', 0.4, 0.4), ox + 4.3, 0.87, -6.5, false));
  const desk = glow('#ffcf8a', 1.4);
  group.add(cylinder(0.12, 0.08, 0.2, desk, ox + 5.1, 0.95, -6.5, 10));
  const poster = canvas(128, 176, ctx => {
    ctx.fillStyle = '#121a2e'; ctx.fillRect(0, 0, 128, 176);
    ctx.fillStyle = '#e0457a'; ctx.beginPath(); ctx.moveTo(14, 150); ctx.lineTo(64, 30); ctx.lineTo(114, 150); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#39c2d7'; ctx.fillRect(14, 124, 100, 10);
    ctx.fillStyle = '#f2e6cc'; ctx.font = '700 26px Georgia, serif'; ctx.textAlign = 'center'; ctx.fillText('1985', 64, 26);
  });
  framed(group, poster, ox + 2.4, 2.2, -6.86, 0.8, 1.1, 0, '#d9d2c4');
  for (const x of [-0.4, 1.8, 4.2, 6.4]) {
    group.add(cylinder(0.04, 0.06, 0.9, brass, ox + x, 0.45, -4.9, 8));
  }
  for (const [a, b] of [[-0.4, 1.8], [1.8, 4.2], [4.2, 6.4]]) group.add(new THREE.Line(sag(new THREE.Vector3(ox + a, 0.86, -4.9), new THREE.Vector3(ox + b, 0.86, -4.9), 0.15), new THREE.LineBasicMaterial({ color: '#7a2a2e' })));
  lightPool(group, ox + 3, -5.8, 2.6, '#ffd8b0', 0.22);

  // 5 · The postman's red bicycle (east wall, on a low platform).
  group.add(box(1.4, 0.18, 2.1, solid('#2a1f19', 0.6), ox + 8.25, 0.09, -3.5));
  const bike = new THREE.Group();
  addBike(bike, 0, 0);
  bike.children[bike.children.length - 1].rotation.y = Math.PI / 2;
  bike.position.set(ox + 8.25, 0.18, -3.5);
  group.add(bike);
  group.add(box(0.36, 0.28, 0.14, solid('#5a3a22', 0.8), ox + 8.25, 0.85, -3.05, false));
  lightPool(group, ox + 7.9, -3.5, 1.7);

  // 6 · The leather suitcase nobody claimed (east wall).
  group.add(box(1.4, 0.4, 1, darkPlinth(), ox + 8.2, 0.2, 2.4));
  const suitcase = new THREE.Group();
  suitcase.add(box(0.78, 0.5, 0.24, solid('#6a4026', 0.65), 0, 0, 0));
  for (const x of [-0.22, 0.22]) suitcase.add(box(0.05, 0.52, 0.26, solid('#3a2416', 0.6), x, 0, 0, false));
  suitcase.add(box(0.2, 0.05, 0.06, brass, 0, 0.28, 0, false));
  const tag = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.05), solid('#efe2c4', 0.9));
  tag.position.set(0.12, 0.2, 0.125);
  suitcase.add(tag);
  suitcase.position.set(ox + 8.2, 0.65, 2.4);
  suitcase.rotation.y = -Math.PI / 2 + 0.2;
  group.add(suitcase);
  lightPool(group, ox + 7.8, 2.4, 1.6);

  // 7 · A train ticket that never got used.
  const ticket = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.1), new THREE.MeshStandardMaterial({ map: canvas(128, 64, ctx => {
    ctx.fillStyle = '#e8d9a8'; ctx.fillRect(0, 0, 128, 64);
    ctx.fillStyle = '#5a3a22'; ctx.font = '700 14px Georgia, serif'; ctx.fillText('RETIRO → ROSARIO', 8, 24);
    ctx.font = '12px Georgia, serif'; ctx.fillText('14 · III · 1987   07:40', 8, 46);
  }), roughness: 0.9 }));
  ticket.rotation.x = -Math.PI / 2;
  vitrine(group, ox - 3, -0.4, ticket);
  lightPool(group, ox - 3, -0.4, 1.4);

  // 8 · The letter found behind a wardrobe, still closed.
  const letter = new THREE.Group();
  const envelope = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.17), new THREE.MeshStandardMaterial({ map: canvas(128, 84, ctx => {
    ctx.fillStyle = '#efe4cc'; ctx.fillRect(0, 0, 128, 84);
    ctx.strokeStyle = '#b8a27a'; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(64, 44); ctx.lineTo(128, 0); ctx.stroke();
    ctx.fillStyle = '#8a2a2e'; ctx.beginPath(); ctx.arc(64, 44, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#3a3a5a'; ctx.font = 'italic 11px Georgia, serif'; ctx.fillText('Para Elena', 70, 74);
  }), roughness: 0.9 }));
  envelope.rotation.x = -Math.PI / 2;
  envelope.rotation.z = 0.2;
  letter.add(envelope);
  vitrine(group, ox + 0.4, -1.6, letter);
  lightPool(group, ox + 0.4, -1.6, 1.4);

  // 9 · A broken music box.
  const music = new THREE.Group();
  music.add(box(0.3, 0.14, 0.22, solid('#5a2a2e', 0.4, 0.2), 0, 0.07, 0, false));
  const lid = box(0.3, 0.02, 0.22, solid('#5a2a2e', 0.4, 0.2), 0, 0.11, -0.11, false);
  lid.geometry.translate(0, 0, 0.11);
  lid.rotation.x = -1.2;
  music.add(lid);
  music.add(cylinder(0.008, 0.008, 0.08, brass, 0, 0.18, 0.02, 6));
  const dancer = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.06, 8), solid('#f2e6dc', 0.5));
  dancer.position.set(0, 0.24, 0.02);
  music.add(dancer);
  vitrine(group, ox + 3.9, 0.6, music);
  lightPool(group, ox + 3.9, 0.6, 1.4);

  // A bench in the middle, and the night guard by the door.
  group.add(box(2.2, 0.08, 0.6, solid('#3a2a20', 0.6), ox - 4.6, 0.46, 3.6));
  for (const x of [-5.5, -3.7]) group.add(box(0.08, 0.44, 0.5, solid('#1d1d1f', 0.5, 0.5), ox + x, 0.22, 3.6, false));
  for (const x of [-2, 2]) {
    group.add(cylinder(0.01, 0.01, 0.8, solid('#222222'), ox + x, 4, 4.6, 4));
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 8), pendant);
    bulb.position.set(ox + x, 3.5, 4.6);
    group.add(bulb);
  }
  const guard = createPerson({ shirt: '#2a3140', pants: '#1f232b', hair: '#b8b0a4', skin: '#c8906a', shoes: '#141414' }, false);
  addBlobShadow(guard);
  placePerson(guard, ox + 7.6, 5.6, -2.4);
  group.add(guard.root);
  return { group, people: [guard], lamp: { color: '#ffe2b8', spots: [new THREE.Vector3(ox, 3.6, -1), new THREE.Vector3(ox, 3.6, 3)] } };
}

function darkPlinth() {
  return solid('#2a1f19', 0.6);
}

// Bar La Persiana: a long counter, bottles glowing behind it, tables and
// the people in each situation.
function barRoom(group: THREE.Group, cx: number, w: number, d: number): Interior {
  const ox = cx;
  const floor = canvas(256, 256, ctx => {
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
      ctx.fillStyle = (x + y) % 2 ? '#2a2420' : '#c9bca4';
      ctx.fillRect(x * 32, y * 32, 32, 32);
    }
  }, true);
  walkRoom(group, cx, w, d, 3.6, '#6a3428', floor, 4, ox - 5, '#1c1512');
  const wood = solid('#3a2418', 0.55);
  const top = solid('#6a4a30', 0.35, 0.1);
  // Counter and the shelves behind it.
  group.add(box(9, 1.05, 0.95, wood, ox - 1.9, 0.53, -3.32));
  group.add(box(9.2, 0.07, 1.1, top, ox - 1.9, 1.09, -3.3));
  group.add(box(9, 0.06, 0.06, solid('#c9a24a', 0.3, 0.8), ox - 1.9, 0.18, -2.8, false));
  for (const y of [1.5, 2.05, 2.6]) group.add(box(8, 0.05, 0.35, wood, ox - 1.9, y, -5.25, false));
  const bottles = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.045, 0.05, 0.3, 8), new THREE.MeshStandardMaterial({ roughness: 0.15, metalness: 0.1, emissive: '#ffffff', emissiveIntensity: 0.12 }), 72);
  const color = new THREE.Color();
  const rand = random(71);
  let n = 0;
  for (const y of [1.5, 2.05, 2.6]) for (let i = 0; i < 24; i++) {
    bottles.setMatrixAt(n, new THREE.Matrix4().setPosition(ox - 5.6 + i * 0.32 + rand() * 0.06, y + 0.18, -5.25));
    bottles.setColorAt(n, color.set(['#2f6a3a', '#8a5a1e', '#c9d4d8', '#6a1e2a', '#d9a441'][Math.floor(rand() * 5)]));
    n++;
  }
  group.add(bottles);
  const back = glow('#ff9a5a', 0.8);
  group.add(box(8, 0.04, 0.04, back, ox - 1.9, 1.47, -5.08, false));
  const pendant = glow('#ffc27a', 2.2);
  for (const x of [-5, -2.6, -0.2, 2]) {
    group.add(cylinder(0.01, 0.01, 0.9, solid('#222222'), ox + x, 3.15, -3.2, 4));
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.2, 12, 1, true), solid('#1d1d1f', 0.5, 0.5));
    shade.position.set(ox + x, 2.62, -3.2);
    group.add(shade);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), pendant);
    bulb.position.set(ox + x, 2.52, -3.2);
    group.add(bulb);
  }
  const stool = solid('#1d1d1f', 0.5, 0.5);
  for (const x of [-6, -3.2, -1.6, 2.2]) {
    group.add(cylinder(0.2, 0.2, 0.06, solid('#7a2a22', 0.7), ox + x, 0.76, -2.45, 12));
    group.add(cylinder(0.03, 0.05, 0.74, stool, ox + x, 0.37, -2.45, 6));
  }
  // Tables.
  const chairs = solid('#2b211b', 0.7);
  table(group, ox + 5.2, -3.3, top);
  seat(group, ox + 5.2, -2.65, Math.PI, chairs);
  group.add(box(0.12, 0.03, 0.08, solid('#3a2416', 0.6), ox + 5.35, 0.8, -3.25, false));
  table(group, ox - 2.5, 1.6, top);
  group.add(box(2.4, 0.06, 1.2, top, ox + 4.6, 0.76, 1.8));
  for (const [x, z] of [[3.6, 1.3], [5.6, 1.3], [3.6, 2.3], [5.6, 2.3]]) group.add(cylinder(0.04, 0.04, 0.74, stool, ox + x, 0.37, z, 6));
  for (const [x, c] of [[4.2, '#d9a441'], [4.9, '#6a1e2a'], [5.3, '#c9d4d8']] as const) group.add(cylinder(0.04, 0.04, 0.16, solid(c, 0.2), ox + x, 0.87, 1.8, 8));
  // A jukebox in the quiet corner.
  group.add(box(0.85, 1.5, 0.6, solid('#4a2a1e', 0.4, 0.2), ox + 6.5, 0.75, 4.8));
  const juke = glow('#ffb45a', 1.6);
  group.add(box(0.6, 0.5, 0.04, juke, ox + 6.5, 1.15, 4.48, false));
  // Posters.
  const posters = [['TANGO', 'LOS JUEVES'], ['NOCHE DE', 'BOLEROS'], ['PROHIBIDO', 'NO CANTAR']];
  posters.forEach(([a, b], i) => {
    const art = canvas(128, 176, ctx => {
      ctx.fillStyle = ['#e8d9b8', '#1e2a3a', '#c9452c'][i]; ctx.fillRect(0, 0, 128, 176);
      ctx.fillStyle = ['#7a2a22', '#e8c46a', '#f2e6cc'][i]; ctx.textAlign = 'center';
      ctx.font = '700 22px Georgia, serif'; ctx.fillText(a, 64, 80);
      ctx.font = '16px Georgia, serif'; ctx.fillText(b, 64, 108);
    });
    framed(group, art, ox + w / 2 - 0.13, 1.9, -1.6 + i * 1.6 - 1.4, 0.7, 0.95, -Math.PI / 2, '#1d1d1f');
  });
  lightPool(group, ox - 1.9, -2.4, 3.4, '#ffb070', 0.22);
  lightPool(group, ox - 2.5, 1.6, 1.8, '#ffc890', 0.22);
  lightPool(group, ox + 4.6, 1.8, 2, '#ffc890', 0.22);

  // People.
  const person = (look: Look, x: number, z: number, heading: number, seated = false) => {
    const p = createPerson(look, false);
    addBlobShadow(p, seated ? 1.2 : 1);
    p.seated = seated;
    placePerson(p, ox + x, z, heading);
    group.add(p.root);
    return p;
  };
  const bartender = person({ shirt: '#efe7d6', pants: '#1d1d1f', hair: '#1a120c', skin: '#b87a55' }, -2.2, -4.5, 0);
  const loud = person({ shirt: '#8a2a22', pants: '#2a2f3a', hair: '#2a1a12', skin: '#d6a07a' }, -4.5, -2.35, Math.PI - 0.5);
  const queueA = person({ shirt: '#2f6a8a', pants: '#26262c', hair: '#6b3a1e', skin: '#efcaa6' }, 0.6, -2.4, Math.PI);
  const queueB = person({ shirt: '#e0c46a', pants: '#3a3440', hair: '#121212', skin: '#8a5a3a' }, 1.3, -2.3, Math.PI + 0.3);
  const martin = person({ shirt: '#4a5d3a', pants: '#2a2e36', hair: '#3a2a1e', skin: '#e0b089' }, 5.2, -2.62, Math.PI, true);
  const leo = person({ shirt: '#3a3a44', pants: '#1f232b', hair: '#6b4a2a', skin: '#e8c3a0' }, -1.55, 2.3, -Math.PI / 2 - 0.3);
  const friendA = person({ shirt: '#c98a3c', hair: '#2a1a12', skin: '#c99064' }, -3.15, 1.6, Math.PI / 2, true);
  const friendB = person({ shirt: '#5a3a6a', hair: '#0f0f0f', skin: '#7a4b30' }, -2.5, 0.95, 0, true);
  const vale = person({ shirt: '#c05a7a', pants: '#2a2f3a', hair: '#1a120c', skin: '#d6a07a' }, 4, 0.75, 0, true);
  const groupA = person({ shirt: '#2f4f6a', hair: '#6b4a2a', skin: '#e8c3a0' }, 5.2, 0.75, 0, true);
  const groupB = person({ shirt: '#d9d2c4', hair: '#101010', skin: '#8a5a3a' }, 6.25, 1.8, -Math.PI / 2, true);
  const sergio = person({ shirt: '#23293a', pants: '#23293a', hair: '#1a1410', skin: '#c99468', shoes: '#0a0a0b' }, -2.5, 4.75, Math.PI);
  const people = [bartender, loud, queueA, queueB, martin, leo, friendA, friendB, vale, groupA, groupB, sergio];
  return {
    group, people,
    lamp: { color: '#ffb878', spots: [new THREE.Vector3(ox - 1.9, 2.8, -2), new THREE.Vector3(ox + 2, 2.8, 2)] },
    roles: { fuerte: [loud, bartender], fila: [queueA, queueB], billetera: [martin], quedarse: [leo, friendA, friendB], caro: [vale, groupA, groupB], invitacion: [sergio] },
  };
}
