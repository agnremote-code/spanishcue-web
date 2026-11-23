// Lluvia de estrellas · Camping Los Cardones in three.js: the desert floor,
// the salt flat, the tents, the caravans, the observatory, the people, the
// white circles, and the sky of the high desert: thousands of stars, the
// Milky Way, the volcanoes on the horizon and the meteors of the Ledésmidas,
// more and more of them as the night goes on. Everything is drawn from
// layout.mjs, so what you see is what you bump into. In realistic mode the
// ground, wood and stone are photographic surfaces (app/mundo-real) and the
// people get real bodies (enableRealPeople, called by World3D before this runs).
import * as THREE from 'three';
import { batchStatic, canvas, random } from '../noche-abierta/build3d';
import { addBlobShadow, animatePerson, createPerson, setMood, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { fitSurfaces, surface } from '../mundo-real/real3d';
import {
  CHATTER, CORRAL, CROWD, DOME, DOORS, FILLERS, FIRE, FURNITURE, KITCHEN, LOOKOUT, PATH, SALAR, SCENES, WALKERS, WALLS,
  footprint, walkerAt, type Walker,
} from './layout.mjs';

export type Npc = { person: Person; scene?: string; main?: boolean; x: number; z: number; y: number; heading: number; baseMood: string; seated?: boolean; talk?: string; key?: string; body?: string; seed: number; angryUntil?: number; kids?: number };
export type Mover = { walker: Walker; person: Person; offset: number; x: number; z: number; moving?: boolean; body?: string; seed: number; key: string; angryUntil?: number; heading?: number; torch?: THREE.Object3D };
export type Spot = { id: string; group: THREE.Group; ring: THREE.Mesh; gem: THREE.Mesh; material: THREE.MeshBasicMaterial };
export type Body = { x: number; z: number; radius?: number; who: Npc | Mover };
export type Campamento = {
  npcs: Npc[];
  movers: Mover[];
  spots: Spot[];
  animate: (t: number, dt: number, px: number, pz: number, camera: THREE.Camera) => void;
  setSceneMood: (id: string | null, mood: string | null) => void;
  /** The sky follows the lesson: 0 at nine in the evening, 1 the darkest sky, 2 the peak at the lookout. */
  setSky: (phase: number) => void;
  bodies: () => Body[];
  say: (who: Npc | Mover, text: string, seconds?: number, yell?: boolean) => void;
  /** Called with the brightness of every big fireball (the lesson plays a soft sound). */
  onFireball: (fn: (k: number) => void) => void;
};

// People currently speaking in an open scene.
export const talking = new WeakSet<Person>();

const std = (color: string, roughness = 0.85, metalness = 0, extra: THREE.MeshStandardMaterialParameters = {}) => new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
const B = (w: number, h: number, d: number) => new THREE.BoxGeometry(w, h, d);
const C = (rt: number, rb: number, h: number, s = 14) => new THREE.CylinderGeometry(rt, rb, h, s);
function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}
function sign(text: string, bg = '#3a2a1a', fg = '#f4e8c8', w = 512, h = 128, font = 'Georgia, serif') {
  return canvas(w, h, ctx => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = fg; ctx.lineWidth = 6; ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.fillStyle = fg; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const lines = text.split('\n');
    const size = Math.round(h * (lines.length > 1 ? 0.3 : 0.44));
    ctx.font = `700 ${size}px ${font}`;
    lines.forEach((line, i) => ctx.fillText(line, w / 2, h / 2 + (i - (lines.length - 1) / 2) * size * 1.15 + 2));
  });
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

// ---------------------------------------------------------------- people
function makePerson(look: Look, pose: string, opts: { seat?: boolean; mood?: string }) {
  const person = createPerson(look, false);
  person.root.userData.person = true; // the no-ghost QA check finds people by this tag
  setPose(person, pose, Boolean(opts.seat) || pose === 'sit');
  if (opts.mood) setMood(person, opts.mood);
  addBlobShadow(person, 0.8);
  return person;
}
const Lk = (skin: string, age: string, body: string, hairStyle: string, hairColor: string, top: string, topColor: string, bottom: string | null, bottomColor: string | null, extras: string[] = [], seed = 0): Look =>
  ({ skin, age, body, hairStyle, hairColor, top, topColor, ...(bottom ? { bottom, bottomColor: bottomColor ?? undefined } : {}), extras, seed });
// The seventeen who talk, in the order of CROWD and invitados.mjs. Everyone
// is dressed for five below zero.
const CROWD_LOOKS: Look[] = [
  Lk('#c99468', 'adult', 'f', 'braids', '#2a1a12', 'sweater', '#b8402a', 'jeans', '#24304a', ['scarf'], 301),
  Lk('#a8724e', 'young', 'm', 'short', '#120d0b', 'jacket', '#2a5a3a', 'pants', '#2a2a2a', ['cap'], 302),
  Lk('#e8c0a0', 'adult', 'f', 'bob', '#5a3a1a', 'coat', '#6a6a72', 'pants', '#2a2a30', ['glasses'], 303),
  Lk('#c48f69', 'adult', 'm', 'curly', '#2a1a12', 'jacket', '#c86a20', 'jeans', '#24304a', ['beard'], 304),
  Lk('#f0d6c0', 'young', 'f', 'long', '#c89050', 'hoodie', '#4a5a8a', 'jeans', '#24304a', ['glasses'], 305),
  Lk('#e2b896', 'elderly', 'm', 'cap', '#e8e8e8', 'coat', '#3a3a30', 'pants', '#2a2a2a', ['mustache'], 306),
  Lk('#dcae88', 'old', 'f', 'bun', '#d8d8d8', 'coat', '#8a2a4a', 'pants', '#1a1a2a', ['earrings', 'scarf'], 307),
  Lk('#c99468', 'adult', 'm', 'bald', '#5a4a3a', 'sweater', '#7a1a2a', 'pants', '#3a3028', ['beard'], 308),
  Lk('#b9825c', 'adult', 'f', 'ponytail', '#120d0b', 'jacket', '#2a6a7a', 'pants', '#2a2a30', [], 309),
  Lk('#e8c0a0', 'young', 'm', 'curly', '#6a2a18', 'hoodie', '#3a3a3a', 'pants', '#2a2a30', ['headphones'], 310),
  Lk('#a8724e', 'adult', 'f', 'curly', '#120d0b', 'sweater', '#c8a040', 'skirt', '#3a2a2a', ['glasses', 'earrings'], 311),
  Lk('#c48f69', 'young', 'm', 'buzz', '#120d0b', 'jacket', '#e0e040', 'shorts', '#1a1a1a', [], 312),
  Lk('#dcae88', 'young', 'f', 'ponytail', '#2a1a12', 'jacket', '#2a2a4a', 'jeans', '#24304a', ['glasses'], 313),
  Lk('#8d5a3c', 'adult', 'm', 'short', '#120d0b', 'coat', '#4a4a3a', 'pants', '#2a2a2a', ['mustache'], 314),
  Lk('#f0d6c0', 'young', 'f', 'long', '#3a2416', 'coat', '#e8e0d0', 'pants', '#2a2a30', ['earrings'], 315),
  Lk('#e2b896', 'adult', 'm', 'short', '#3a2a1a', 'jacket', '#5a5a2a', 'pants', '#3a3028', ['cap', 'beard'], 316),
  Lk('#a8724e', 'elderly', 'f', 'bun', '#f0f0f0', 'coat', '#5a2a6a', 'skirt', '#2a2a2a', ['scarf', 'glasses'], 317),
];
const CAMPERS: Look[] = [
  Lk('#e8c0a0', 'adult', 'f', 'long', '#5a3a1a', 'coat', '#3a6aa8', 'jeans', '#24304a', [], 501),
  Lk('#c48f69', 'adult', 'm', 'short', '#1a1210', 'jacket', '#2a3a2a', 'pants', '#2a2a2a', ['cap'], 502),
  Lk('#8d5a3c', 'young', 'f', 'braids', '#120d0b', 'hoodie', '#d43a6a', 'jeans', '#24304a', [], 503),
  Lk('#f0d0b4', 'old', 'm', 'bald', '#999999', 'coat', '#5a4a3a', 'pants', '#3a3028', ['glasses'], 504),
  Lk('#b9825c', 'young', 'm', 'curly', '#2a1a12', 'jacket', '#c87a2a', 'jeans', '#24304a', [], 505),
  Lk('#dcae88', 'adult', 'f', 'bun', '#6a2a18', 'sweater', '#2a8a6a', 'pants', '#2a2a2a', ['scarf'], 506),
  Lk('#e2b896', 'teen', 'm', 'short', '#3a2416', 'hoodie', '#5a2a8a', 'jeans', '#24304a', ['headphones'], 507),
  Lk('#f0d6c0', 'young', 'f', 'bob', '#e0c070', 'coat', '#e0a020', 'pants', '#2a2a30', [], 508),
  Lk('#a8724e', 'child', 'f', 'ponytail', '#120d0b', 'coat', '#e04040', 'pants', '#2a2a30', [], 509),
  Lk('#c99468', 'elderly', 'm', 'cap', '#e8e8e8', 'coat', '#2a3a4a', 'pants', '#2a2a2a', ['beard'], 510),
];

// ---------------------------------------------------------------- spots
function buildSpot(id: string, x: number, z: number): Spot {
  const group = new THREE.Group();
  group.position.set(x, 0.04, z);
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.98, 1.18, 48), material);
  ring.rotation.x = -Math.PI / 2;
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.98, 48), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.12, depthWrite: false, toneMapped: false }));
  disc.rotation.x = -Math.PI / 2;
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), material);
  gem.position.y = 2.3;
  group.add(ring, disc, gem);
  return { id, group, ring, gem, material };
}

// ---------------------------------------------------------------- the sky
// The stars: a fixed random sky (the same every visit), brighter towards the
// band of the Milky Way, with the real spread of colours (blue-white to orange).
const SKY_R = 420;
function starField(low: boolean) {
  const n = low ? 2600 : 7000;
  const rnd = random(1966);
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3), size = new Float32Array(n);
  // The plane of the galaxy, tilted across the sky.
  const pole = new THREE.Vector3(0.35, 0.55, 0.76).normalize();
  const tints = [[0.7, 0.8, 1], [0.85, 0.9, 1], [1, 1, 1], [1, 0.95, 0.85], [1, 0.82, 0.6], [1, 0.7, 0.5]];
  const v = new THREE.Vector3();
  let i = 0;
  while (i < n) {
    v.set(rnd() * 2 - 1, rnd() * 2 - 1, rnd() * 2 - 1);
    const len = v.length();
    if (len > 1 || len < 0.05) continue;
    v.divideScalar(len);
    if (v.y < -0.04) continue;
    // More stars near the galactic plane.
    const band = Math.abs(v.dot(pole));
    if (band > 0.25 && rnd() < 0.55) continue;
    pos.set([v.x * SKY_R, v.y * SKY_R, v.z * SKY_R], i * 3);
    const t = tints[Math.floor(Math.pow(rnd(), 1.3) * tints.length)];
    const mag = Math.pow(rnd(), 6); // a few bright ones, very many faint
    const k = 0.35 + mag * 0.65;
    col.set([t[0] * k, t[1] * k, t[2] * k], i * 3);
    size[i] = (low ? 1.6 : 1.3) + mag * (low ? 3.4 : 4.2);
    i++;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setAttribute('size', new THREE.BufferAttribute(size, 1));
  const material = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uFade: { value: 1 }, uScale: { value: 1 } },
    vertexShader: `
      attribute float size; varying vec3 vColor; varying float vTw; uniform float uTime; uniform float uScale;
      void main() {
        vColor = color;
        vTw = 0.82 + 0.18 * sin(uTime * (1.5 + fract(position.x * 0.13) * 3.0) + position.z);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uScale;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying vec3 vColor; varying float vTw; uniform float uFade;
      void main() {
        vec2 c = gl_PointCoord - 0.5; float d = length(c);
        float a = smoothstep(0.5, 0.0, d); a *= a;
        gl_FragColor = vec4(vColor * vTw, a * uFade);
      }`,
    vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const points = new THREE.Points(g, material);
  points.frustumCulled = false;
  points.renderOrder = -2;
  return { points, material, pole };
}
// The Milky Way: a soft band of light with dark dust lanes, painted once on a
// canvas and wrapped round the sky along the galactic plane.
function milkyWay(pole: THREE.Vector3, low: boolean) {
  const tex = canvas(low ? 1024 : 2048, low ? 256 : 512, ctx => {
    const w = ctx.canvas.width, h = ctx.canvas.height;
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h);
    const rnd = random(77);
    // The glow: many faint blobs, thicker towards the core.
    for (let i = 0; i < (low ? 900 : 2600); i++) {
      const x = rnd() * w;
      const core = Math.exp(-Math.pow((x - w * 0.62) / (w * 0.18), 2));
      const spread = h * (0.12 + core * 0.16);
      const y = h / 2 + (rnd() + rnd() + rnd() - 1.5) * spread;
      const r = (6 + rnd() * 26) * (h / 512);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      const warm = core > 0.4 && rnd() < 0.5;
      g.addColorStop(0, warm ? `rgba(255,226,190,${0.05 + core * 0.06})` : `rgba(200,214,255,${0.04 + core * 0.05})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
    // Dust lanes.
    ctx.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < (low ? 200 : 600); i++) {
      const x = rnd() * w, y = h / 2 + (rnd() - 0.5) * h * 0.14 + Math.sin(x / w * 9) * h * 0.04;
      const r = (3 + rnd() * 12) * (h / 512);
      ctx.fillStyle = `rgba(0,0,0,${0.15 + rnd() * 0.25})`;
      ctx.beginPath(); ctx.ellipse(x, y, r * 2.4, r, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    // Tiny stars inside the band.
    for (let i = 0; i < (low ? 1500 : 5000); i++) {
      const x = rnd() * w, y = h / 2 + (rnd() + rnd() - 1) * h * 0.22;
      ctx.fillStyle = `rgba(255,255,255,${0.15 + rnd() * 0.4})`;
      ctx.fillRect(x, y, 1, 1);
    }
  });
  tex.colorSpace = THREE.SRGBColorSpace;
  const geo = new THREE.SphereGeometry(SKY_R * 0.98, 64, 24, 0, Math.PI * 2, Math.PI * 0.32, Math.PI * 0.36);
  const material = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide, fog: false, toneMapped: false });
  const band = new THREE.Mesh(geo, material);
  // The sphere's equator lies in the xz plane: turn it onto the galactic plane.
  band.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pole);
  band.renderOrder = -3;
  band.frustumCulled = false;
  return { band, material };
}
// The dome of the sky itself: black overhead, deep blue at the horizon, with
// the last glow of dusk in the west early in the night.
function skyDome() {
  const geo = new THREE.SphereGeometry(SKY_R * 1.02, 48, 24);
  const material = new THREE.ShaderMaterial({
    uniforms: { uDusk: { value: 1 }, uPeak: { value: 0 } },
    vertexShader: 'varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `
      varying vec3 vDir; uniform float uDusk; uniform float uPeak;
      void main() {
        float h = clamp(vDir.y, -0.1, 1.0);
        vec3 zenith = vec3(0.004, 0.006, 0.016);
        vec3 horizon = mix(vec3(0.03, 0.045, 0.09), vec3(0.04, 0.05, 0.1), uPeak);
        vec3 col = mix(horizon, zenith, pow(max(h, 0.0), 0.45));
        // Dusk in the west (-x), low on the horizon.
        float west = max(0.0, -vDir.x) * exp(-max(h, 0.0) * 9.0);
        col += uDusk * west * vec3(0.55, 0.22, 0.08);
        col += uDusk * exp(-max(h, 0.0) * 4.0) * vec3(0.02, 0.03, 0.06);
        if (vDir.y < 0.0) col = vec3(0.01, 0.012, 0.02);
        gl_FragColor = vec4(col, 1.0);
      }`,
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
  const dome = new THREE.Mesh(geo, material);
  dome.renderOrder = -4;
  dome.frustumCulled = false;
  return { dome, material };
}
// Volcanoes and ridges round the horizon, black against the stars.
function horizon(low: boolean) {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: '#05060a', fog: false });
  const snow = new THREE.MeshBasicMaterial({ color: '#2a3040', fog: false });
  const rnd = random(3600);
  const n = low ? 18 : 30;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rnd() * 0.15;
    const r = 300 + rnd() * 60;
    const big = rnd() < 0.3;
    const h = big ? 38 + rnd() * 30 : 10 + rnd() * 16;
    const w = big ? 70 + rnd() * 40 : 60 + rnd() * 80;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(w / 2, h, 7, 1), mat);
    cone.position.set(Math.sin(a) * r, h / 2 - 2, Math.cos(a) * r);
    cone.rotation.y = rnd() * Math.PI;
    group.add(cone);
    if (big) {
      const cap = new THREE.Mesh(new THREE.ConeGeometry(w * 0.12, h * 0.24, 7, 1), snow);
      cap.position.set(cone.position.x, h - 2 - h * 0.12 + 0.2, cone.position.z);
      group.add(cap);
    }
  }
  group.renderOrder = -1;
  return group;
}

// ---------------------------------------------------------------- llamas
function llama(parent: THREE.Object3D, wool: THREE.Material, dark: THREE.Material, lying: boolean) {
  const g = new THREE.Group(); parent.add(g);
  const y = lying ? 0.32 : 0.95;
  const body = add(g, new THREE.SphereGeometry(0.42, 14, 10), wool, 0, y, 0); body.scale.set(0.8, 0.85, 1.55);
  const neck = add(g, C(0.13, 0.17, 0.85, 10), wool, 0, y + 0.55, 0.5); neck.rotation.x = -0.25;
  const head = add(g, new THREE.SphereGeometry(0.16, 12, 10), wool, 0, y + 1.0, 0.64); head.scale.set(0.85, 0.9, 1.4);
  add(g, B(0.06, 0.16, 0.04), wool, -0.08, y + 1.18, 0.58).rotation.z = 0.2;
  add(g, B(0.06, 0.16, 0.04), wool, 0.08, y + 1.18, 0.58).rotation.z = -0.2;
  add(g, new THREE.SphereGeometry(0.03, 6, 6), dark, -0.09, y + 1.04, 0.8); add(g, new THREE.SphereGeometry(0.03, 6, 6), dark, 0.09, y + 1.04, 0.8);
  if (!lying) for (const [a, b] of [[-0.18, 0.4], [0.18, 0.4], [-0.18, -0.4], [0.18, -0.4]]) add(g, C(0.06, 0.05, 0.6, 8), wool, a, 0.3, b);
  else for (const [a, b] of [[-0.3, 0.45], [0.3, 0.45]]) { const leg = add(g, C(0.06, 0.05, 0.45, 8), wool, a, 0.1, b); leg.rotation.x = Math.PI / 2; }
  return g;
}

// ---------------------------------------------------------------- the campsite
export function buildCampamento(scene: THREE.Scene, opts: { low: boolean; shadows: boolean; real: boolean }): Campamento {
  const real = opts.real;
  const world = new THREE.Group();
  world.name = 'los-cardones';
  scene.add(world);
  const statics = new THREE.Group();
  world.add(statics);
  const keep: THREE.Object3D[] = [];

  // Materials: photographic in realistic mode, plain colours on phones.
  const sand = real ? surface('sand_01', '#c8a888') : std('#9a8064', 0.98);
  const salt = real ? surface('sand_01', '#f4f2ee') : std('#e8e6e0', 0.95);
  const gravel = real ? surface('cobblestone_floor_04', '#9a8a7a') : std('#7a6c5c', 0.95);
  const wood = real ? surface('wood_planks', '#8a6a4a') : std('#7a5a3a', 0.8);
  const stone = real ? surface('concrete_wall_008', '#b8b0a4') : std('#a8a094', 0.9);
  const adobe = real ? surface('plastered_wall_04', '#b88a62') : std('#a87a52', 0.95);
  const tin = real ? surface('metal_plate', '#9aa0a4', { metalness: 0.6 }) : std('#8a9098', 0.5, 0.5);
  const asphalt = real ? surface('asphalt_02', '#6a6460') : std('#4a4642', 0.95);
  const metal = std('#8a9098', 0.4, 0.7), dark = std('#1e2024', 0.7), white = std('#ecebe6', 0.6), rockMat = std('#6a5a4c', 0.95), rockDark = std('#4a3e34', 0.95);
  const canvasTan = std('#d8c8a8', 0.95, 0, { side: THREE.DoubleSide }), cloth = std('#e8e0d0', 0.95), redCloth = std('#a83a2a', 0.9);
  const cactus = std('#4a6a3a', 0.85), trunkMat = std('#4a3a2a', 0.95), leaves = std('#3a4a2a', 0.95);
  const wool = std('#f0ebe0', 1), woolBrown = std('#8a6a4a', 1), hay = std('#c8a858', 1);
  const glassWarm = new THREE.MeshStandardMaterial({ color: '#2a2018', emissive: '#ffb860', emissiveIntensity: 0.9, roughness: 0.3 });
  const redLamp = new THREE.MeshStandardMaterial({ color: '#400', emissive: '#ff2a1a', emissiveIntensity: 2.2, roughness: 0.4 });
  const screenGreen = new THREE.MeshStandardMaterial({ color: '#0a1a10', emissive: '#40e080', emissiveIntensity: 0.9, roughness: 0.4 });
  const lampMat = new THREE.MeshStandardMaterial({ color: '#fff4d8', emissive: '#ffd890', emissiveIntensity: 1.8, roughness: 0.4 });

  // ------------------------------------------------------------ the ground
  // The desert reaches the horizon; the salt flat runs off to the south-east.
  const ground = add(statics, B(760, 0.2, 760), sand, 0, -0.1, -40); ground.castShadow = false;
  const saltFlat = add(statics, B(SALAR.x1 - SALAR.x0 + 260, 0.02, SALAR.z1 - SALAR.z0 + 260), salt, (SALAR.x0 + SALAR.x1) / 2 + 130, 0.008, (SALAR.z0 + SALAR.z1) / 2 - 130); saltFlat.castShadow = false;
  // Hexagons cracked into the dry salt.
  const cracks = new THREE.Mesh(new THREE.PlaneGeometry(SALAR.x1 - SALAR.x0 + 60, SALAR.z1 - SALAR.z0 + 40), new THREE.MeshBasicMaterial({ map: hexTexture(), transparent: true, opacity: 0.35, depthWrite: false }));
  cracks.rotation.x = -Math.PI / 2; cracks.position.set((SALAR.x0 + SALAR.x1) / 2 + 30, 0.02, (SALAR.z0 + SALAR.z1) / 2 - 20);
  world.add(cracks); keep.push(cracks);
  const park = add(statics, B(30, 0.02, 26), asphalt, 31, 0.006, 46); park.castShadow = false;
  // The path to the lookout, lined with white stones.
  const path = add(statics, B(PATH.x1 - PATH.x0, 0.02, PATH.z1 - PATH.z0), gravel, (PATH.x0 + PATH.x1) / 2, 0.012, (PATH.z0 + PATH.z1) / 2); path.castShadow = false;
  for (let z = PATH.z0 + 1; z < PATH.z1; z += 2.2) for (const x of [PATH.x0 - 0.25, PATH.x1 + 0.25]) add(statics, new THREE.DodecahedronGeometry(0.14), white, x, 0.08, z).castShadow = false;
  // The lookout: a rocky platform a little above the desert.
  const rim = add(statics, C(13, 14.5, 0.06, 24), gravel, 0, 0.02, -74); rim.castShadow = false;
  // The road the cars came up.
  const road = add(statics, B(6, 0.02, 120), asphalt, 0, 0.004, 120); road.castShadow = false;

  // ------------------------------------------------------------ the observatory
  // Stone drum, flat roof under the dome, the dome with its slit.
  for (const seg of WALLS as [number, number, number, number, string][]) {
    const [x0, z0, x1, z1, kind] = seg;
    const len = Math.hypot(x1 - x0, z1 - z0), mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
    const ang = x0 === x1 ? 0 : Math.PI / 2;
    if (kind === 'rail') {
      // The llama pen: posts and two rails.
      const n = Math.max(1, Math.round(len / 1.5));
      for (let k = 0; k <= n; k++) add(statics, B(0.12, 1.2, 0.12), wood, x0 + (x1 - x0) * k / n, 0.6, z0 + (z1 - z0) * k / n);
      for (const y of [0.55, 1.05]) add(statics, B(0.06, 0.1, len), wood, mx, y, mz, ang).castShadow = false;
      continue;
    }
    add(statics, B(0.25, 3.6, len), stone, mx, 1.8, mz, ang);
  }
  const roof = add(statics, B(DOME.x1 - DOME.x0 + 0.3, 0.25, DOME.z1 - DOME.z0 + 0.3), stone, (DOME.x0 + DOME.x1) / 2, 3.6, (DOME.z0 + DOME.z1) / 2); roof.castShadow = true;
  const ceiling = add(statics, B(DOME.x1 - DOME.x0 - 0.2, 0.02, DOME.z1 - DOME.z0 - 0.2), std('#2a2a30', 0.9), (DOME.x0 + DOME.x1) / 2, 3.46, (DOME.z0 + DOME.z1) / 2); ceiling.castShadow = false;
  const domeMat = std('#e8e8ec', 0.35, 0.4);
  const cupola = add(world, new THREE.SphereGeometry(5.6, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), domeMat, (DOME.x0 + DOME.x1) / 2, 3.72, (DOME.z0 + DOME.z1) / 2);
  keep.push(cupola);
  const slit = add(world, B(1.1, 0.05, 5.8), dark, (DOME.x0 + DOME.x1) / 2, 7.2, (DOME.z0 + DOME.z1) / 2 + 1.6); slit.rotation.x = -0.55; keep.push(slit);
  // Labels over the door.
  for (const d of DOORS) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.42), new THREE.MeshBasicMaterial({ map: sign(d.label, '#1a2230', '#e8d8a8', 1024, 160, 'Arial, sans-serif'), toneMapped: false }));
    m.position.set(d.x, 2.7, d.z + 0.15); world.add(m); keep.push(m);
    add(statics, new THREE.SphereGeometry(0.08, 8, 6), redLamp, d.x + 1.1, 2.3, d.z + 0.2).castShadow = false;
  }

  // ------------------------------------------------------------ the kitchen tent
  {
    const cx = (KITCHEN.x0 + KITCHEN.x1) / 2, cz = (KITCHEN.z0 + KITCHEN.z1) / 2, w = KITCHEN.x1 - KITCHEN.x0 + 0.4, d = KITCHEN.z1 - KITCHEN.z0 + 0.4;
    const half = w / 2, rise = 0.7, slope = Math.hypot(half, rise);
    for (const s of [-1, 1]) {
      const plane = add(world, new THREE.PlaneGeometry(slope, d), canvasTan, cx + s * half / 2, 3.0 + rise / 2, cz);
      plane.rotation.order = 'ZYX'; plane.rotation.x = -Math.PI / 2; plane.rotation.y = s * Math.atan2(rise, half);
      plane.castShadow = true; keep.push(plane);
    }
    const sign1 = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.5), new THREE.MeshBasicMaterial({ map: sign('COCINA', '#7a2a1a', '#f4e8c8'), toneMapped: false }));
    sign1.position.set(cx, 2.75, KITCHEN.z0 - 0.02); sign1.rotation.y = Math.PI; world.add(sign1); keep.push(sign1);
    add(statics, new THREE.SphereGeometry(0.16, 10, 8), lampMat, cx, 2.6, cz).castShadow = false;
  }

  // ------------------------------------------------------------ furniture
  const anim = { flames: [] as THREE.Mesh[], blades: [] as THREE.Object3D[], arms: [] as THREE.Object3D[] };
  const rnd = random(7);
  for (const item of FURNITURE as { type: string; x: number; z: number; w: number; d: number; rot?: number; color?: string; open?: boolean; patched?: boolean }[]) {
    const f = footprint(item), w = f.x1 - f.x0, d = f.z1 - f.z0, x = item.x, z = item.z;
    const g = new THREE.Group(); g.position.set(x, 0, z); statics.add(g);
    const face = ((item.rot ?? 0) * Math.PI) / 2;
    switch (item.type) {
      case 'barrierpost': {
        add(g, B(0.4, 1.1, 0.4), std('#e8e0d0', 0.7), 0, 0.55);
        // The striped arm, raised: you walk in under the stars.
        const arm = new THREE.Group(); arm.position.set(0, 1.05, 0); g.add(arm); arm.rotation.z = 1.25;
        for (let k = 0; k < 6; k++) add(arm, B(0.6, 0.1, 0.1), k % 2 ? std('#c81e1e', 0.6) : white, 0.3 + k * 0.6, 0, 0);
        break;
      }
      case 'booth': add(g, B(w, 2.5, d), adobe, 0, 1.25); add(g, B(w + 0.4, 0.12, d + 0.4), tin, 0, 2.56); add(g, B(1.2, 0.7, 0.04), glassWarm, 0, 1.5, d / 2 + 0.01).castShadow = false; break;
      case 'welcome': {
        for (const a of [-1.4, 1.4]) add(g, B(0.14, 2.2, 0.14), wood, a, 1.1, 0);
        const m = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 1.0), new THREE.MeshStandardMaterial({ map: sign('CAMPING LOS CARDONES\n3600 m · Ancoyo', '#5a3a1a', '#f4e8c8', 1024, 340), roughness: 0.9 }));
        m.position.set(0, 1.75, 0.08); g.add(m); keep.push(m);
        break;
      }
      case 'car': {
        const body = std(item.color ?? '#8a8a8a', 0.4, 0.5);
        const inner = new THREE.Group(); inner.rotation.y = face; g.add(inner);
        const L = item.d, W = item.w;
        add(inner, B(W, 0.65, L), body, 0, 0.55, 0);
        add(inner, B(W * 0.9, 0.55, L * 0.5), body, 0, 1.15, -L * 0.05);
        add(inner, B(W * 0.92, 0.42, L * 0.46), std('#1a2028', 0.15, 0.4), 0, 1.15, -L * 0.05).castShadow = false;
        for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const wh = add(inner, C(0.34, 0.34, 0.24, 14), dark, a * (W / 2 - 0.05), 0.34, b * (L / 2 - 0.8)); wh.rotation.z = Math.PI / 2; }
        add(inner, B(W * 0.8, 0.12, 0.05), std('#fff0c0', 0.3, 0, { emissive: '#fff0c0', emissiveIntensity: 0.2 }), 0, 0.7, L / 2 + 0.01).castShadow = false;
        if (item.open) { const lid = add(inner, B(W * 0.9, 0.05, 0.9), body, 0, 1.4, -L / 2 - 0.1); lid.rotation.x = -1.1; }
        break;
      }
      case 'foldtable':
        add(g, B(w, 0.04, d), white, 0, 0.74); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(g, B(0.03, 0.72, 0.03), metal, a * (w / 2 - 0.06), 0.36, b * (d / 2 - 0.06));
        for (let k = 0; k < 12; k++) add(g, B(0.16, 0.05, 0.06), dark, -0.62 + (k % 6) * 0.25, 0.79, -0.15 + Math.floor(k / 6) * 0.22).castShadow = false;
        add(g, B(0.5, 0.3, 0.35), std('#c8a878', 0.9), 0.55, 0.92, 0.05);
        break;
      case 'tent': {
        const col = std(item.color ?? '#d8642a', 0.85, 0, { side: THREE.DoubleSide });
        const shell = add(g, new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), col, 0, 0, 0); shell.scale.set(w / 2, 1.25, d / 2);
        add(g, B(0.7, 0.9, 0.02), dark, 0, 0.45, d / 2 - 0.02).castShadow = false;
        if (item.patched) for (let k = 0; k < 4; k++) { const p = add(g, B(0.25, 0.08, 0.02), std('#c8c0b0', 0.6), -0.6 + k * 0.4, 0.7 + (k % 2) * 0.25, d / 2 - 0.25); p.rotation.z = rnd() - 0.5; p.castShadow = false; }
        break;
      }
      case 'caravan': {
        add(g, B(w, 2.2, d), white, 0, 1.4); add(g, B(w + 0.02, 0.3, d + 0.02), std('#3a6a8a', 0.6), 0, 1.1);
        for (const z2 of [-1.6, 1.4]) add(g, B(0.04, 0.6, 1.0), glassWarm, w / 2 + 0.01, 1.8, z2).castShadow = false;
        for (const z2 of [-1.8, 1.8]) { const wh = add(g, C(0.35, 0.35, 0.22, 14), dark, -w / 2 + 0.05, 0.35, z2); wh.rotation.z = Math.PI / 2; const wh2 = add(g, C(0.35, 0.35, 0.22, 14), dark, w / 2 - 0.05, 0.35, z2); wh2.rotation.z = Math.PI / 2; }
        add(g, B(0.04, 1.9, 0.8), std('#cacac4', 0.6), w / 2 + 0.01, 1.3, 0.1).castShadow = false;
        break;
      }
      case 'antenna': add(g, C(0.04, 0.05, 6, 8), metal, 0, 3); for (const y of [4.6, 5.2, 5.8]) add(g, B(1.6 - (y - 4.6), 0.04, 0.04), metal, 0, y, 0); break;
      case 'radiotable': add(g, B(w, 0.05, d), wood, 0, 0.78); add(g, B(0.05, 0.76, d - 0.1), wood, -w / 2 + 0.05, 0.38, 0); add(g, B(0.05, 0.76, d - 0.1), wood, w / 2 - 0.05, 0.38, 0); add(g, B(0.6, 0.28, 0.35), dark, 0, 0.95, -0.1); add(g, B(0.3, 0.1, 0.02), screenGreen, -0.1, 0.98, 0.08).castShadow = false; add(g, C(0.03, 0.03, 0.18, 6), metal, 0.25, 0.9, 0.15); break;
      case 'campchair': { const inner = new THREE.Group(); inner.rotation.y = face; g.add(inner); add(inner, B(0.5, 0.05, 0.5), redCloth, 0, 0.44); add(inner, B(0.5, 0.5, 0.05), redCloth, 0, 0.72, -0.24); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(inner, B(0.03, 0.44, 0.03), metal, a * 0.22, 0.22, b * 0.22); break; }
      case 'shed': add(g, B(w, 2.3, d), tin, 0, 1.15); add(g, B(w + 0.3, 0.1, d + 0.3), tin, 0, 2.35); add(g, B(1.0, 1.9, 0.04), dark, 0, 0.95, d / 2 + 0.01).castShadow = false; break;
      case 'generator': add(g, B(w, 0.9, d), std('#c8a020', 0.6, 0.3), 0, 0.45); add(g, C(0.06, 0.06, 0.6, 8), dark, w / 2 - 0.2, 1.1, 0); break;
      case 'lightpole': add(g, C(0.06, 0.08, 5, 8), metal, 0, 2.5); add(g, B(0.5, 0.1, 0.25), dark, 0.2, 5, 0); add(g, B(0.4, 0.04, 0.2), lampMat, 0.2, 4.94, 0).castShadow = false; break;
      case 'contactsign': {
        add(g, B(0.05, 1.3, 0.05), wood, 0, 0.65, 0);
        const m = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.55), new THREE.MeshStandardMaterial({ map: sign('BIENVENIDOS\nNO TENEMOS ARMAS', '#c8a878', '#1a2a6a', 512, 300, 'Comic Sans MS, Arial, sans-serif'), roughness: 0.95 }));
        m.position.set(0, 1.3, 0.04); g.add(m); keep.push(m);
        for (let k = 0; k < 3; k++) { const l = add(g, C(0.04, 0.04, 0.22, 8), dark, -0.5 + k * 0.5, 0.11, 0.5); l.rotation.x = Math.PI / 2; }
        break;
      }
      case 'campfire': {
        for (let k = 0; k < 10; k++) { const a = k / 10 * Math.PI * 2; add(g, new THREE.DodecahedronGeometry(0.16), rockDark, Math.sin(a) * 0.62, 0.1, Math.cos(a) * 0.62); }
        for (let k = 0; k < 4; k++) { const l = add(g, C(0.06, 0.07, 0.9, 8), trunkMat, 0, 0.18, 0); l.rotation.z = Math.PI / 2 - 0.25; l.rotation.y = k * Math.PI / 4; }
        add(g, C(0.4, 0.45, 0.04, 16), std('#ff6a20', 0.6, 0, { emissive: '#ff4a10', emissiveIntensity: 1.4 }), 0, 0.06, 0).castShadow = false;
        break;
      }
      case 'log': { const l = add(g, C(0.22, 0.24, Math.max(w, d), 10), trunkMat, 0, 0.22, 0); if (w > d) l.rotation.z = Math.PI / 2; else l.rotation.x = Math.PI / 2; break; }
      case 'pole': add(g, C(0.06, 0.06, 3.7, 8), wood, 0, 1.85); break;
      case 'cooktable': add(g, B(w, 0.06, d), wood, 0, 0.9); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) add(g, B(0.06, 0.88, 0.06), wood, a * (w / 2 - 0.1), 0.44, b * (d / 2 - 0.1));
        for (let k = 0; k < 4; k++) add(g, C(0.2, 0.18, 0.3, 14), metal, -2.2 + k * 1.4, 1.08, -0.1);
        add(g, B(0.6, 0.04, 0.35), wood, 1.4, 0.95, 0.15); break;
      case 'stove': add(g, B(w, 0.85, d), metal, 0, 0.42); for (const k of [-0.6, 0.6]) { add(g, C(0.16, 0.16, 0.02, 12), dark, 0, 0.86, k); add(g, C(0.22, 0.2, 0.34, 14), metal, 0, 1.04, k); } add(g, C(0.2, 0.2, 0.5, 12), std('#c84a2a', 0.5, 0.3), -0.25, 0.25, 0.95); break;
      case 'llama': { const l = llama(g, rnd() < 0.5 ? woolBrown : wool, dark, false); l.rotation.y = rnd() * Math.PI * 2; break; }
      case 'llamalie': { const l = llama(g, wool, dark, true); l.rotation.y = Math.PI; add(g, B(1.6, 0.06, 2.2), hay, 0, 0.03, 0).castShadow = false; break; }
      case 'hay': add(g, B(w, 0.55, d), hay, 0, 0.28); break;
      case 'showers': {
        add(g, B(w, 2.4, d), tin, 0, 1.2); add(g, B(w + 0.3, 0.1, d + 0.4), tin, 0, 2.45);
        for (let k = 0; k < 3; k++) add(g, B(0.8, 1.9, 0.04), std('#3a5a7a', 0.6), -1.8 + k * 1.8, 0.95, d / 2 + 0.01).castShadow = false;
        const m = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.4), new THREE.MeshBasicMaterial({ map: sign('DUCHAS', '#1a3a5a', '#f4f4f0'), toneMapped: false }));
        m.position.set(0, 2.15, d / 2 + 0.03); g.add(m); keep.push(m);
        add(g, C(0.4, 0.4, 0.9, 12), white, w / 2 - 0.6, 2.9, 0);
        break;
      }
      case 'tree': {
        const t = add(g, C(0.18, 0.3, 2.6, 8), trunkMat, 0, 1.3, 0); t.rotation.z = (rnd() - 0.5) * 0.25;
        for (let k = 0; k < 4; k++) { const c = add(g, new THREE.SphereGeometry(1.4, 9, 6), leaves, (rnd() - 0.5) * 1.6, 2.9 + rnd() * 0.5, (rnd() - 0.5) * 1.6); c.scale.y = 0.45; }
        break;
      }
      case 'hammock': {
        const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-w / 2 + 0.3, 1.25, 0), new THREE.Vector3(0, 0.2, 0), new THREE.Vector3(w / 2 - 0.3, 1.25, 0));
        const tube = add(g, new THREE.TubeGeometry(curve, 20, 0.34, 6, false), std('#c84a6a', 0.95, 0, { side: THREE.DoubleSide }), 0, 0, 0); tube.scale.z = 0.9;
        break;
      }
      case 'rock': { const r = add(g, new THREE.DodecahedronGeometry(0.55), rockMat, 0, 0.22, 0); r.scale.set(w / 1.1, 0.6, d / 1.1); break; }
      case 'signpost': {
        add(g, B(0.12, 2.2, 0.12), wood, 0, 1.1);
        const m = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.36), new THREE.MeshStandardMaterial({ map: sign('MIRADOR · 20 min ↑', '#5a3a1a', '#f4e8c8'), roughness: 0.9, side: THREE.DoubleSide }));
        m.position.set(-0.7, 1.9, 0); m.rotation.y = Math.PI / 2; g.add(m); keep.push(m);
        break;
      }
      case 'telescope': {
        add(g, C(0.5, 0.6, 1.4, 16), stone, 0, 0.7);
        add(g, C(0.14, 0.14, 0.4, 10), metal, 0, 1.6);
        const tube = add(g, C(0.24, 0.24, 2.6, 18), white, 0, 2.3, 0.3); tube.rotation.x = -0.9;
        add(g, C(0.26, 0.26, 0.2, 18), dark, 0, 2.95, 1.25).rotation.x = -0.9;
        break;
      }
      case 'motor': add(g, B(w, 0.9, d), dark, 0, 0.45); { const gear = add(g, C(0.3, 0.3, 0.08, 16), metal, 0, 1.0, 0); gear.rotation.x = Math.PI / 2; } break;
      case 'obsdesk': add(g, B(w, 0.05, d), wood, 0, 0.75); add(g, B(w - 0.1, 0.7, 0.05), wood, 0, 0.36, -d / 2 + 0.1); add(g, B(0.5, 0.02, 0.35), dark, 0, 0.78, 0); add(g, B(0.5, 0.32, 0.02), redLamp, 0, 0.95, -0.15).castShadow = false; break;
      case 'hut': add(g, B(w, 2.3, d), adobe, 0, 1.15); { const r = add(g, B(w + 0.5, 0.08, d + 0.6), tin, 0, 2.45, 0); r.rotation.x = 0.08; } add(g, B(0.9, 1.8, 0.04), wood, 0, 0.9, d / 2 + 0.01).castShadow = false; add(g, B(0.6, 0.5, 0.04), dark, 1.2, 1.4, d / 2 + 0.01).castShadow = false; break;
      case 'minemouth': for (const a of [-1.3, 1.3]) add(g, B(0.25, 2.4, 0.25), wood, a, 1.2, 0); add(g, B(3.0, 0.25, 0.3), wood, 0, 2.4, 0); for (let k = 0; k < 4; k++) { const p = add(g, B(2.5, 0.2, 0.06), wood, 0, 0.4 + k * 0.5, 0.1); p.rotation.z = (rnd() - 0.5) * 0.3; } add(g, B(2.4, 2.2, 0.04), dark, 0, 1.1, -0.1).castShadow = false; break;
      case 'crate': add(g, B(w, 0.45, d), wood, 0, 0.22); break;
      case 'tripod': for (let k = 0; k < 3; k++) { const a = k / 3 * Math.PI * 2; const l = add(g, C(0.02, 0.02, 1.5, 6), dark, Math.sin(a) * 0.22, 0.72, Math.cos(a) * 0.22); l.rotation.set(Math.cos(a) * 0.25, 0, -Math.sin(a) * 0.25); } add(g, B(0.22, 0.16, 0.12), dark, 0, 1.5, 0); add(g, C(0.05, 0.05, 0.14, 10), dark, 0, 1.5, 0.12).rotation.x = Math.PI / 2; break;
      case 'bucket': add(g, C(0.2, 0.16, 0.36, 14), std('#3a6ab8', 0.5), 0, 0.18); add(g, C(0.19, 0.19, 0.01, 14), std('#0a1020', 0.05, 0.6), 0, 0.33, 0).castShadow = false; break;
      case 'stall': {
        add(g, B(w, 0.05, d), wood, 0, 0.78); add(g, B(w + 0.05, 0.6, d + 0.05), std('#5a2a7a', 0.9), 0, 0.46);
        add(g, new THREE.SphereGeometry(0.14, 14, 10), new THREE.MeshStandardMaterial({ color: '#c8d8ff', emissive: '#8aa8ff', emissiveIntensity: 1.2, roughness: 0.1, transparent: true, opacity: 0.85 }), 0, 0.95, 0).castShadow = false;
        add(g, C(0.03, 0.03, 2.3, 6), metal, -0.7, 1.15, -0.3);
        add(g, new THREE.ConeGeometry(1.2, 0.5, 12, 1, true), std('#e8b030', 0.9, 0, { side: THREE.DoubleSide }), -0.7, 2.4, -0.3);
        break;
      }
      case 'boulder': { const r = add(g, new THREE.DodecahedronGeometry(1, 0), rockMat, 0, 0.5, 0); r.scale.set(w / 2, Math.min(w, d) * 0.45, d / 2); r.rotation.y = rnd() * Math.PI; const r2 = add(g, new THREE.DodecahedronGeometry(1, 0), rockDark, w * 0.18, 0.3, -d * 0.12); r2.scale.set(w * 0.28, Math.min(w, d) * 0.3, d * 0.3); break; }
      case 'bench': add(g, B(w, 0.06, d), wood, 0, 0.45); add(g, B(w, 0.06, 0.06), wood, 0, 0.42, d / 2 - 0.05); for (const a of [-1, 1]) add(g, B(0.06, 0.42, d - 0.05), wood, a * (w / 2 - 0.12), 0.21, 0); break;
      case 'cardon': {
        const h = 3.2 + rnd() * 2.6;
        add(g, C(0.26, 0.32, h, 10), cactus, 0, h / 2);
        for (let k = 0; k < 2 + Math.floor(rnd() * 2); k++) {
          const a = rnd() * Math.PI * 2, y = 1.2 + rnd() * (h - 2.2), len = 0.9 + rnd() * 1.2;
          const elbow = add(g, C(0.15, 0.15, 0.55, 8), cactus, Math.sin(a) * 0.38, y, Math.cos(a) * 0.38); elbow.rotation.set(Math.cos(a) * Math.PI / 2, 0, -Math.sin(a) * Math.PI / 2);
          add(g, C(0.15, 0.17, len, 8), cactus, Math.sin(a) * 0.62, y + len / 2, Math.cos(a) * 0.62);
        }
        break;
      }
      default: add(g, B(w, 0.8, d), dark, 0, 0.4);
    }
  }
  // Scattered stones and tufts of dry grass on the desert floor (decoration only, away from paths).
  const tufts = new THREE.InstancedMesh(new THREE.ConeGeometry(0.22, 0.32, 5), std('#8a7a4a', 1), opts.low ? 120 : 360);
  const stones = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.18), rockMat, opts.low ? 80 : 240);
  {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
    const solidsNear = (x: number, z: number) => (FURNITURE as { x: number; z: number; w: number; d: number }[]).some(it => Math.abs(it.x - x) < it.w / 2 + 1.2 && Math.abs(it.z - z) < it.d / 2 + 1.2)
      || (Math.abs(x) < 3 && z > -66 && z < 60) || SCENES.some(sc => Math.hypot(sc.spot.x - x, sc.spot.z - z) < 2.5);
    const r2 = random(42);
    for (const mesh of [tufts, stones]) {
      let i = 0;
      while (i < mesh.count) {
        const x = (r2() - 0.5) * 124, z = -86 + r2() * 148;
        if (solidsNear(x, z) || (x > SALAR.x0 && z < SALAR.z1)) continue;
        p.set(x, 0.08, z); q.setFromEuler(new THREE.Euler(0, r2() * 6, 0)); const k = 0.6 + r2() * 1.2; s.set(k, k * (mesh === tufts ? 1 : 0.6), k);
        mesh.setMatrixAt(i++, m.compose(p, q, s));
      }
      mesh.receiveShadow = true;
      world.add(mesh); keep.push(mesh);
    }
  }

  // ------------------------------------------------------------ lights
  // Warm lights of the camp: the fire, the kitchen lantern, the caravans, the
  // booth, the light pole; most go out at eleven (the lights-out of the night).
  const lamps: { light: THREE.PointLight; base: number; out: boolean }[] = [];
  const lampSpots: [number, number, number, string, number, number, boolean][] = [
    [FIRE.x, 1.2, FIRE.z, '#ff8a3a', 14, 18, false],
    [(KITCHEN.x0 + KITCHEN.x1) / 2, 2.5, (KITCHEN.z0 + KITCHEN.z1) / 2, '#ffd8a0', 8, 12, true],
    [-48.6, 2.0, 7.0, '#ffc890', 3, 8, true], [-7, 2.4, 49.4, '#ffd8a0', 3, 8, true], [-38.4, 4.8, 30.4, '#fff0d8', 6, 16, true],
    [-25, 3.0, -30, '#ff3a2a', 4, 10, false], [36.6, 1.4, 8.6, '#ffb060', 3, 7, false],
  ];
  for (const [x, y, z, color, intensity, range, out] of lampSpots) {
    if (opts.low && intensity < 4) continue;
    const l = new THREE.PointLight(color, intensity, range, 1.6);
    l.position.set(x, y, z); world.add(l); lamps.push({ light: l, base: intensity, out });
  }
  // The kerosene lamp in the llama pen.
  add(statics, C(0.08, 0.1, 0.3, 8), lampMat, 34.2, 1.25, 8.0).castShadow = false;
  const fireLight = lamps[0].light;
  // The flames of the campfire.
  const flameMat = new THREE.MeshBasicMaterial({ color: '#ffb040', transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false });
  for (let k = 0; k < 5; k++) {
    const fl = new THREE.Mesh(new THREE.ConeGeometry(0.16 + k * 0.03, 0.8 - k * 0.08, 7, 1, true), flameMat);
    fl.position.set(FIRE.x + Math.sin(k * 1.3) * 0.18, 0.45, FIRE.z + Math.cos(k * 1.3) * 0.18);
    world.add(fl); anim.flames.push(fl);
  }

  if (real) fitSurfaces(world);
  batchStatic(statics, keep);

  // ------------------------------------------------------------ people
  const npcs: Npc[] = [];
  for (const s of SCENES) {
    const people = [{ ...s.npc, pose: s.pose, mood: s.mood, look: s.look, main: true }, ...(s.extras ?? []).map(e => ({ ...e, main: false }))];
    for (const p of people) {
      const anyP = p as typeof p & { seat?: boolean; y?: number };
      const person = makePerson(p.look as Look, p.pose, { seat: anyP.seat, mood: p.mood });
      person.root.position.set(p.x, anyP.y ?? 0, p.z); person.root.rotation.y = p.heading;
      world.add(person.root);
      npcs.push({ person, scene: s.id, main: p.main, x: p.x, z: p.z, y: anyP.y ?? 0, heading: p.heading, baseMood: p.mood ?? 'neutral', seated: Boolean(anyP.seat) || p.pose === 'sit' || p.pose === 'lie', body: (p.look as Look).body, seed: npcs.length * 31 + 7 });
    }
  }
  const crowd = (list: typeof CROWD, talk: boolean) => list.forEach((c, i) => {
    const any = c as typeof c & { seat?: boolean; y?: number; mood?: string };
    const look = talk ? CROWD_LOOKS[i] : { ...CAMPERS[i % CAMPERS.length], seed: 500 + i * 7 };
    const person = makePerson(look, c.pose, { seat: any.seat, mood: any.mood });
    person.root.position.set(c.x, any.y ?? 0, c.z); person.root.rotation.y = c.heading;
    world.add(person.root);
    npcs.push({ person, x: c.x, z: c.z, y: any.y ?? 0, heading: c.heading, baseMood: any.mood ?? 'neutral', seated: Boolean(any.seat), talk: talk ? String(i) : undefined, key: talk ? undefined : `camping-${i}`, body: look.body, seed: (talk ? 300 : 500) + i });
  });
  crowd(CROWD, true);
  crowd(FILLERS, false);
  const movers: Mover[] = [];
  WALKERS.forEach((walker, i) => {
    const person = makePerson(walker.look as Look, 'stand', {});
    let torch: THREE.Object3D | undefined;
    if ((walker as Walker & { torch?: boolean }).torch) {
      torch = new THREE.Group(); torch.position.set(0.3, 1.0, 0.25); person.root.add(torch);
      add(torch, C(0.03, 0.03, 0.18, 8), dark).rotation.x = Math.PI / 2;
      add(torch, new THREE.SphereGeometry(0.035, 8, 6), redLamp, 0, 0, 0.1).castShadow = false;
    }
    world.add(person.root);
    movers.push({ walker, person, offset: i * 13.7, x: walker.path[0][0], z: walker.path[0][1], body: (walker.look as Look).body, seed: 900 + i * 3, key: `paseo-${i}`, torch });
  });

  const spots = SCENES.map(s => { const spot = buildSpot(s.id, s.spot.x, s.spot.z); world.add(spot.group); return spot; });

  // ------------------------------------------------------------ the sky
  const sky = new THREE.Group(); sky.name = 'cielo'; scene.add(sky);
  const dome = skyDome(); sky.add(dome.dome);
  const stars = starField(opts.low); sky.add(stars.points);
  const galaxy = milkyWay(stars.pole, opts.low); sky.add(galaxy.band);
  const hills = horizon(opts.low); sky.add(hills);
  // The meteors: a pool of bright streaks that start near the radiant (high
  // in the north-east) and fly away from it, with a short glowing tail.
  const radiant = new THREE.Vector3(0.45, 0.72, -0.53).normalize();
  const METEORS = opts.low ? 10 : 24;
  const meteorGeo = new THREE.BufferGeometry();
  const meteorPos = new Float32Array(METEORS * 6), meteorCol = new Float32Array(METEORS * 6);
  meteorGeo.setAttribute('position', new THREE.BufferAttribute(meteorPos, 3));
  meteorGeo.setAttribute('color', new THREE.BufferAttribute(meteorCol, 3));
  const meteorLines = new THREE.LineSegments(meteorGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, toneMapped: false }));
  meteorLines.frustumCulled = false; meteorLines.renderOrder = -1;
  sky.add(meteorLines);
  type Meteor = { on: boolean; from: THREE.Vector3; dir: THREE.Vector3; age: number; life: number; len: number; speed: number; bright: number; tint: [number, number, number] };
  const meteors: Meteor[] = Array.from({ length: METEORS }, () => ({ on: false, from: new THREE.Vector3(), dir: new THREE.Vector3(), age: 0, life: 1, len: 30, speed: 200, bright: 1, tint: [1, 1, 1] }));
  // A big fireball now and then: a sphere that lights up the desert for a moment.
  const fireball = new THREE.Mesh(new THREE.SphereGeometry(2.2, 10, 8), new THREE.MeshBasicMaterial({ color: '#d8f0ff', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, toneMapped: false }));
  sky.add(fireball);
  const flashLight = new THREE.DirectionalLight('#cfe4ff', 0);
  flashLight.position.set(60, 120, -60); scene.add(flashLight);
  let fireballFn: (k: number) => void = () => {};
  let fireAt = -1, fireDir = new THREE.Vector3(), fireVel = new THREE.Vector3();
  const tmp = new THREE.Vector3(), side = new THREE.Vector3();
  function launch(m: Meteor, big = false) {
    // A point on the sky up to ~50° from the radiant, flying away from it.
    tmp.set(rnd() - 0.5, rnd() * 0.6, rnd() - 0.5).multiplyScalar(1.2).add(radiant).normalize();
    if (tmp.y < 0.15) tmp.y = 0.15 + rnd() * 0.2;
    tmp.normalize();
    m.from.copy(tmp).multiplyScalar(SKY_R * 0.92);
    side.copy(tmp).sub(radiant); if (side.lengthSq() < 1e-4) side.set(rnd() - 0.5, -0.2, rnd() - 0.5);
    m.dir.copy(side).normalize().addScaledVector(tmp, -side.dot(tmp)).normalize();
    m.age = 0; m.life = big ? 1.6 : 0.35 + rnd() * 0.7; m.len = big ? 90 : 18 + rnd() * 50; m.speed = big ? 160 : 160 + rnd() * 160; m.bright = big ? 1.6 : 0.5 + rnd() * 0.8;
    const t = rnd();
    m.tint = t < 0.6 ? [1, 1, 1] : t < 0.85 ? [0.75, 1, 0.8] : [1, 0.85, 0.6];
    m.on = true;
  }

  // ------------------------------------------------------------ speech bubbles
  const bubbles: { sprite: THREE.Sprite; until: number; npc: Npc | Mover }[] = [];
  let nextBubble = 3, clockNow = 0;
  function say(who: Npc | Mover, text: string, seconds = 3.6, yell = false) {
    const old = bubbles.findIndex(b => b.npc === who);
    if (old >= 0) { const b = bubbles[old]; b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(old, 1); }
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubbleTexture(text, yell), transparent: true, depthTest: true, toneMapped: false }));
    sprite.scale.set(2.2, 0.55, 1);
    world.add(sprite);
    bubbles.push({ sprite, until: clockNow + seconds, npc: who });
  }
  function setSceneMood(id: string | null, mood: string | null) {
    for (const npc of npcs) if (npc.scene) setMood(npc.person, id && mood && npc.scene === id && npc.main ? mood : npc.baseMood);
  }

  // ------------------------------------------------------------ the night
  let k = 0;
  const rate = () => (k <= 1 ? 0.12 + k * 0.9 : 3.2); // meteors per second
  function applySky() {
    const dusk = k <= 1 ? Math.max(0, 1 - k * 4) : 0;
    (dome.material.uniforms.uDusk as { value: number }).value = dusk;
    (dome.material.uniforms.uPeak as { value: number }).value = k > 1 ? 1 : 0;
    (stars.material.uniforms.uFade as { value: number }).value = 0.55 + Math.min(1, k) * 0.45;
    galaxy.material.opacity = (0.35 + Math.min(1, k) * 0.6) * (opts.low ? 0.8 : 1);
    const lightsOut = k >= 0.34; // eleven o'clock
    for (const l of lamps) l.light.intensity = l.out && lightsOut ? 0 : l.base;
    lampMat.emissiveIntensity = lightsOut ? 0.25 : 1.8;
    glassWarm.emissiveIntensity = lightsOut ? 0.15 : 0.9;
    if (scene.fog) { const fog = scene.fog as THREE.Fog; fog.color.set(k > 1 ? '#0a1020' : '#0b1222'); }
  }
  applySky();
  function setSky(phase: number) { k = Math.max(0, Math.min(2, phase)); applySky(); }

  function bodies(): Body[] {
    const out: Body[] = [];
    for (const n of npcs) out.push({ x: n.x, z: n.z, who: n });
    for (const m of movers) out.push({ x: m.x, z: m.z, who: m });
    return out;
  }

  const wp = new THREE.Vector3();
  const far = opts.low ? 30 : 46;
  let farTick = 0;
  let spawnAcc = 0;
  let nextFireball = 25;
  function animate(t: number, dt: number, px: number, pz: number, camera: THREE.Camera) {
    clockNow = t;
    // The sky travels with the camera (it is infinitely far away) and turns very slowly.
    sky.position.copy(camera.position);
    sky.rotation.y = t * 0.0015;
    (stars.material.uniforms.uTime as { value: number }).value = t;
    const h = (camera as THREE.PerspectiveCamera).fov ? window.innerHeight || 800 : 800;
    (stars.material.uniforms.uScale as { value: number }).value = Math.min(1.6, Math.max(0.8, h / 800));
    for (const spot of spots) {
      spot.gem.position.y = 2.3 + Math.sin(t * 2 + spot.group.position.x) * 0.12;
      spot.gem.rotation.y += dt * 1.5;
      spot.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03);
    }
    // The fire flickers.
    for (let i = 0; i < anim.flames.length; i++) { const fl = anim.flames[i]; fl.scale.set(1, 0.75 + Math.sin(t * (9 + i * 2.3) + i) * 0.25 + Math.sin(t * 23 + i) * 0.08, 1); fl.rotation.y = t * (0.6 + i * 0.2); }
    fireLight.intensity = lamps[0].base * (0.85 + Math.sin(t * 13) * 0.08 + Math.sin(t * 29) * 0.05);
    // Meteors: more and more as the night goes on.
    spawnAcc += dt * rate();
    while (spawnAcc > 1) { spawnAcc -= 1; const free = meteors.find(m => !m.on); if (free) launch(free); }
    if (rnd() < dt * rate() * 0.3) { const free = meteors.find(m => !m.on); if (free) launch(free); }
    for (let i = 0; i < meteors.length; i++) {
      const m = meteors[i];
      if (!m.on) { meteorPos.fill(0, i * 6, i * 6 + 6); meteorCol.fill(0, i * 6, i * 6 + 6); continue; }
      m.age += dt;
      if (m.age > m.life) { m.on = false; continue; }
      const p = m.age / m.life;
      const fade = Math.sin(Math.PI * Math.min(1, p * 1.1)) * m.bright;
      const head = tmp.copy(m.from).addScaledVector(m.dir, m.speed * m.age);
      const tail = side.copy(head).addScaledVector(m.dir, -m.len * Math.min(1, p * 3 + 0.2));
      meteorPos.set([head.x, head.y, head.z, tail.x, tail.y, tail.z], i * 6);
      meteorCol.set([m.tint[0] * fade, m.tint[1] * fade, m.tint[2] * fade, 0, 0, 0], i * 6);
    }
    meteorGeo.attributes.position.needsUpdate = true;
    meteorGeo.attributes.color.needsUpdate = true;
    // A fireball: rarer early, every half minute or so at the peak.
    if (t > nextFireball && k > 0.15) {
      nextFireball = t + (k > 1 ? 18 : 50 - k * 25) * (0.7 + rnd() * 0.6);
      fireAt = t;
      fireDir.set(rnd() - 0.5, 0.5 + rnd() * 0.3, rnd() - 0.5).normalize().multiplyScalar(SKY_R * 0.85);
      fireVel.set(rnd() - 0.5, -0.35, rnd() - 0.5).normalize().multiplyScalar(140);
      const free = meteors.find(m => !m.on); if (free) { launch(free, true); free.from.copy(fireDir); free.dir.copy(fireVel).normalize(); }
      fireballFn(Math.min(1, 0.4 + k * 0.3));
    }
    const fa = fireAt >= 0 ? t - fireAt : 99;
    if (fa < 1.6) {
      const glowK = Math.sin(Math.PI * fa / 1.6);
      fireball.position.copy(fireDir).addScaledVector(fireVel, fa);
      (fireball.material as THREE.MeshBasicMaterial).opacity = glowK;
      flashLight.intensity = glowK * 0.9;
    } else if ((fireball.material as THREE.MeshBasicMaterial).opacity !== 0) { (fireball.material as THREE.MeshBasicMaterial).opacity = 0; flashLight.intensity = 0; }
    // People who walk.
    for (const m of movers) {
      const at = walkerAt(m.walker, t + m.offset);
      m.x = at.x; m.z = at.z; m.moving = at.moving; m.heading = at.heading;
      m.person.root.position.set(at.x, 0, at.z);
      m.person.root.rotation.y = at.heading;
      animatePerson(m.person, dt, at.moving ? m.walker.speed : 0, false);
    }
    farTick++;
    for (const npc of npcs) {
      const d = Math.max(Math.abs(npc.x - px), Math.abs(npc.z - pz));
      npc.person.root.visible = d < far;
      // Far people still get a pose now and then: a real body loaded late must not keep its bind pose.
      const kids = npc.person.root.children.length; // grows when the real body arrives
      if (d > 24 && kids === npc.kids && (farTick + npc.seed) % 30 !== 0) continue;
      npc.kids = kids;
      animatePerson(npc.person, d > 24 ? 0 : dt, 0, talking.has(npc.person));
    }
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      b.npc.person.root.getWorldPosition(wp); world.worldToLocal(wp); b.sprite.position.set(wp.x, wp.y + 2.25, wp.z);
      if (t > b.until) { b.sprite.removeFromParent(); (b.sprite.material as THREE.SpriteMaterial).map?.dispose(); b.sprite.material.dispose(); bubbles.splice(i, 1); }
    }
    if (t > nextBubble) {
      nextBubble = t + 2.5 + Math.random() * 3;
      const pool = [...npcs.filter(n => !n.main), ...movers].filter(n => { const d = Math.hypot(n.x - px, n.z - pz); return d > 1.5 && d < 11; });
      if (pool.length && bubbles.length < 2) {
        const npc = pool[Math.floor(Math.random() * pool.length)];
        if (!bubbles.some(b => b.npc === npc)) say(npc, CHATTER[Math.floor(Math.random() * CHATTER.length)]);
      }
    }
  }

  void CORRAL; void LOOKOUT;
  return { npcs, movers, spots, animate, setSceneMood, setSky, bodies, say, onFireball: (fn) => { fireballFn = fn; } };
}

// ---------------------------------------------------------------- textures
function hexTexture() {
  const t = canvas(512, 512, ctx => {
    ctx.clearRect(0, 0, 512, 512);
    ctx.strokeStyle = 'rgba(150,140,130,0.9)'; ctx.lineWidth = 2;
    const r = 26, hstep = r * Math.sqrt(3);
    for (let row = -1; row < 14; row++) for (let col = -1; col < 13; col++) {
      const cx = col * hstep + (row % 2 ? hstep / 2 : 0), cy = row * r * 1.5;
      ctx.beginPath();
      for (let k = 0; k <= 6; k++) { const a = Math.PI / 6 + k * Math.PI / 3; const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r; if (k) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke();
    }
  }, true);
  t.repeat.set(10, 8);
  return t;
}
