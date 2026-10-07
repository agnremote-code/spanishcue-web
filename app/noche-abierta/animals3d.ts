// Procedural street animals for Noche Abierta: a cat, a dog and a small flock
// of pigeons. Low-poly shapes, animated in code: cats sit, lick a paw, loaf
// and swish their tails; dogs wag, sniff, sit and pant; pigeons peck, hop
// and now and then flap. Original geometry only, no external models.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export type Species = 'cat' | 'dog' | 'pigeons';
export type AnimalPose = 'stand' | 'sit' | 'lie';
export type Animal = {
  root: THREE.Group;
  species: Species;
  phase: number;
  // Set it to keep a cat or dog standing, sitting or lying; null lets it
  // choose on its own.
  pose: AnimalPose | null;
  rig: QuadRig | FlockRig;
};

const materials = new Map<string, THREE.MeshStandardMaterial>();
function mat(color: string, roughness = 0.85, emissive?: string) {
  const key = `${color}-${roughness}-${emissive ?? ''}`;
  let value = materials.get(key);
  if (!value) {
    value = new THREE.MeshStandardMaterial({ color, roughness, ...(emissive ? { emissive, emissiveIntensity: 0.7 } : {}) });
    materials.set(key, value);
  }
  return value;
}
const geometries = new Map<string, THREE.BufferGeometry>();
function cached(key: string, make: () => THREE.BufferGeometry) {
  let value = geometries.get(key);
  if (!value) {
    value = make();
    geometries.set(key, value);
  }
  return value;
}
function moved(g: THREE.BufferGeometry, x: number, y: number, z: number, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz));
  return g.applyMatrix4(m);
}
function merge(list: THREE.BufferGeometry[]) {
  return mergeGeometries(list.map(g => { const flat = g.index ? g.toNonIndexed() : g; flat.deleteAttribute('uv'); return flat; }), false)!;
}
function tint(color: string, l: number) {
  return `#${new THREE.Color(color).offsetHSL(0, -0.05, l).getHexString()}`;
}
function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}
function pivot(parent: THREE.Object3D, x = 0, y = 0, z = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}
const ease = (from: number, to: number, k: number) => from + (to - from) * k;

// ------------------------------------------------------------------ cats and dogs

type QuadRig = {
  kind: 'quad';
  body: THREE.Group; head: THREE.Group; legs: THREE.Group[]; tail: THREE.Group[];
  ears: THREE.Object3D; tongue: THREE.Object3D | null;
  legLen: number; hipToShoulder: number; radius: number;
  state: string; until: number; clock: number;
  now: Record<string, number>;
};

type Spec = { radius: number; length: number; legLen: number; legR: number; head: number; neck: number; tailSegs: number; tailLen: number; tailR: number };
const SPECS: Record<'cat' | 'dog', Spec> = {
  cat: { radius: 0.062, length: 0.2, legLen: 0.17, legR: 0.018, head: 0.062, neck: 0.07, tailSegs: 4, tailLen: 0.075, tailR: 0.014 },
  dog: { radius: 0.105, length: 0.3, legLen: 0.3, legR: 0.03, head: 0.085, neck: 0.12, tailSegs: 3, tailLen: 0.08, tailR: 0.022 },
};

function quadruped(species: 'cat' | 'dog', color: string, scale: number): QuadRig & { root: THREE.Group } {
  const s = SPECS[species];
  const fur = mat(color, 0.95);
  const light = mat(tint(color, 0.18), 0.95);
  const root = new THREE.Group();
  const holder = pivot(root);
  holder.scale.setScalar(scale);
  // The body pivots at the rear hips; the shoulders are `length` ahead.
  const body = pivot(holder, 0, s.legLen + s.radius * 0.35, -s.length / 2);
  add(body, cached(`${species}-torso`, () => merge([
    moved(new THREE.CapsuleGeometry(s.radius, s.length, 5, 10), 0, 0, s.length / 2, Math.PI / 2, 0, 0, 1, 1, species === 'dog' ? 0.95 : 1),
    moved(new THREE.SphereGeometry(s.radius * 1.05, 10, 8), 0, 0.01, s.length * 0.95),
  ])), fur);
  add(body, cached(`${species}-belly`, () => moved(new THREE.SphereGeometry(s.radius * 0.8, 10, 6), 0, -s.radius * 0.35, s.length * 0.75, 0, 0, 0, 0.8, 0.7, 1.3)), light);

  // Legs: tapered with a round paw, front pair under the shoulders.
  const legGeo = cached(`${species}-leg`, () => merge([
    moved(new THREE.CylinderGeometry(s.legR * 1.3, s.legR * 0.85, s.legLen, 7), 0, -s.legLen / 2, 0),
    moved(new THREE.SphereGeometry(s.legR * 1.15, 7, 5), 0, -s.legLen, s.legR * 0.5, 0, 0, 0, 1, 0.7, 1.3),
  ]));
  const legs: THREE.Group[] = [];
  for (const [x, z] of [[-1, 1], [1, 1], [-1, 0], [1, 0]] as const) {
    const leg = pivot(body, x * s.radius * 0.55, -s.radius * 0.35, z * s.length * 0.98);
    add(leg, legGeo, fur);
    legs.push(leg);
  }

  // Head on a short neck.
  const head = pivot(body, 0, s.radius * 0.55, s.length + s.neck * 0.55);
  const ears = new THREE.Group();
  if (species === 'cat') {
    add(head, cached('cat-head', () => moved(new THREE.SphereGeometry(s.head, 14, 10), 0, 0, 0, 0, 0, 0, 1.05, 0.92, 0.95)), fur);
    add(head, cached('cat-muzzle', () => merge([-1, 1].map(x => moved(new THREE.SphereGeometry(s.head * 0.3, 8, 6), x * s.head * 0.2, -s.head * 0.32, s.head * 0.8)))), light);
    add(head, cached('cat-nose', () => moved(new THREE.SphereGeometry(s.head * 0.11, 6, 4), 0, -s.head * 0.14, s.head * 0.95, 0, 0, 0, 1.3, 0.8, 0.8)), mat('#d98a8a', 0.6));
    add(ears, cached('cat-ears', () => merge([-1, 1].map(x => moved(new THREE.ConeGeometry(s.head * 0.36, s.head * 0.62, 4), x * s.head * 0.52, s.head * 0.82, -s.head * 0.05, -0.15, x * 0.35, -x * 0.32, 1, 1, 0.5)))), fur);
    for (const x of [-1, 1]) {
      const eye = add(head, cached('cat-eye', () => new THREE.SphereGeometry(s.head * 0.17, 8, 6)), mat('#b8d050', 0.3, '#7a9a20'), x * s.head * 0.38, s.head * 0.12, s.head * 0.8);
      eye.scale.set(1, 1, 0.7);
      add(eye, cached('cat-pupil', () => new THREE.BoxGeometry(s.head * 0.06, s.head * 0.26, s.head * 0.05)), mat('#0e0e0e', 0.3), 0, 0, s.head * 0.12);
    }
  } else {
    add(head, cached('dog-head', () => merge([
      moved(new THREE.SphereGeometry(s.head, 14, 10), 0, 0, 0, 0, 0, 0, 0.95, 0.9, 1),
      moved(new THREE.CapsuleGeometry(s.head * 0.45, s.head * 0.7, 4, 8), 0, -s.head * 0.3, s.head * 0.95, Math.PI / 2 - 0.1),
    ])), fur);
    add(head, cached('dog-nose', () => moved(new THREE.SphereGeometry(s.head * 0.2, 8, 6), 0, -s.head * 0.18, s.head * 1.75, 0, 0, 0, 1.2, 0.9, 0.9)), mat('#151212', 0.35));
    add(ears, cached('dog-ears', () => merge([-1, 1].map(x => moved(new THREE.SphereGeometry(s.head * 0.42, 8, 6), x * s.head * 0.88, -s.head * 0.25, -s.head * 0.05, 0, 0, x * 0.25, 0.32, 1.1, 0.75)))), mat(tint(color, -0.1), 0.95));
    for (const x of [-1, 1]) add(head, cached('dog-eye', () => new THREE.SphereGeometry(s.head * 0.12, 8, 6)), mat('#1a1210', 0.2), x * s.head * 0.4, s.head * 0.22, s.head * 0.78);
    add(body, cached('dog-collar', () => moved(new THREE.TorusGeometry(s.radius * 0.72, s.radius * 0.12, 5, 14), 0, s.radius * 0.45, s.length + s.neck * 0.2, Math.PI / 2 - 0.5)), mat('#c0282d', 0.5));
  }
  head.add(ears);
  let tongue: THREE.Object3D | null = null;
  if (species === 'dog') {
    tongue = add(head, cached('dog-tongue', () => new THREE.BoxGeometry(s.head * 0.3, s.head * 0.05, s.head * 0.45)), mat('#e07a86', 0.5), 0, -s.head * 0.62, s.head * 1.25);
    tongue.rotation.x = 0.5;
  }

  // Tail: a chain of segments pointing back; positive x lifts it.
  const tail: THREE.Group[] = [];
  let parent: THREE.Object3D = body;
  const segGeo = cached(`${species}-tail`, () => moved(new THREE.CapsuleGeometry(s.tailR, s.tailLen, 3, 6), 0, 0, -s.tailLen / 2, Math.PI / 2));
  for (let i = 0; i < s.tailSegs; i++) {
    const seg = pivot(parent, 0, i ? 0 : s.radius * 0.5, i ? -s.tailLen : -s.radius * 0.7);
    add(seg, segGeo, fur);
    tail.push(seg);
    parent = seg;
  }
  root.traverse(o => { if ((o as THREE.Mesh).isMesh) o.castShadow = false; });
  return {
    root, kind: 'quad', body, head, legs, tail, ears, tongue,
    legLen: s.legLen, hipToShoulder: s.length, radius: s.radius,
    state: 'stand', until: 0, clock: Math.random() * 10, now: {},
  };
}

// The idle behaviours each species cycles through, with how long they last.
const IDLE: Record<'cat' | 'dog', Record<AnimalPose | 'free', [string, number][]>> = {
  cat: {
    free: [['sit', 5], ['lick', 4], ['loaf', 8], ['sit', 4], ['stand', 3]],
    sit: [['sit', 5], ['lick', 4]], lie: [['loaf', 8], ['loaf-look', 4]], stand: [['stand', 4], ['sniff', 3]],
  },
  dog: {
    free: [['sit', 5], ['sniff', 4], ['stand', 4], ['lie', 7]],
    sit: [['sit', 6], ['sit-look', 3]], lie: [['lie', 7], ['lie-look', 3]], stand: [['stand', 4], ['sniff', 4]],
  },
};

function animateQuad(animal: Animal, rig: QuadRig, dt: number, speed: number) {
  rig.clock += dt;
  const t = rig.clock;
  const species = animal.species as 'cat' | 'dog';
  const moving = speed > 0.05;
  if (!moving && t > rig.until) {
    const list = IDLE[species][animal.pose ?? 'free'];
    const [state, len] = list[Math.floor(Math.random() * list.length)];
    rig.state = state;
    rig.until = t + len * (0.7 + Math.random() * 0.6);
  }
  const state = moving ? 'walk' : rig.state;
  const L = rig.legLen, R = rig.radius;
  // Targets: body height and pitch, legs (front right, front left, back right, back left), head, tail.
  const g: Record<string, number> = { y: L + R * 0.35, pitch: 0, l0: 0, l1: 0, l2: 0, l3: 0, hx: 0, hy: 0, tail: species === 'cat' ? 0.9 : 0.7, swish: 0, wag: 0, tongue: 0 };
  if (state === 'walk') {
    animal.phase += dt * speed * (species === 'cat' ? 26 : 14) / Math.max(0.6, L * 6);
    const p = animal.phase;
    g.l0 = Math.sin(p) * 0.5; g.l3 = Math.sin(p) * 0.5;
    g.l1 = -Math.sin(p) * 0.5; g.l2 = -Math.sin(p) * 0.5;
    g.y += Math.abs(Math.cos(p)) * L * 0.04;
    g.hx = Math.sin(p * 2) * 0.05;
    g.tail = species === 'cat' ? 1.1 : 0.9;
    g.swish = Math.sin(p * 0.5) * 0.25;
    g.wag = species === 'dog' ? Math.sin(t * 14) * 0.6 : 0;
  } else if (state.startsWith('sit') || state === 'lick') {
    const pitch = -0.7;
    g.pitch = pitch;
    g.y = R * 0.9;
    g.l0 = g.l1 = -pitch;
    g.l2 = g.l3 = -1.25;
    g.hx = 0.62 - (state === 'sit-look' ? 0.25 : 0);
    g.hy = state === 'sit-look' ? Math.sin(t * 0.8) * 0.6 : Math.sin(t * 0.4) * 0.25;
    g.tail = 0.05; g.swish = Math.sin(t * 1.4) * 0.5;
    if (state === 'lick') { g.l1 = -pitch - 1.3; g.hx = 1.25 + Math.sin(t * 9) * 0.08; g.hy = 0.35; }
    if (species === 'dog') { g.wag = Math.sin(t * 9) * 0.35; g.tongue = 1; }
  } else if (state.startsWith('loaf') || state.startsWith('lie')) {
    g.y = R * 0.95;
    g.l0 = g.l1 = -1.45;
    g.l2 = g.l3 = -1.35;
    g.hx = state.endsWith('look') ? -0.05 : 0.2;
    g.hy = state.endsWith('look') ? Math.sin(t * 0.7) * 0.5 : 0;
    g.tail = -0.15; g.swish = Math.sin(t * 0.9) * (species === 'cat' ? 0.35 : 0.15);
    if (species === 'dog') g.tongue = state.endsWith('look') ? 1 : 0;
  } else if (state === 'sniff') {
    g.hx = 0.75 + Math.sin(t * 6) * 0.08;
    g.hy = Math.sin(t * 1.3) * 0.5;
    g.pitch = 0.08;
    g.wag = species === 'dog' ? Math.sin(t * 12) * 0.5 : 0;
    g.swish = Math.sin(t * 2) * 0.2;
  } else {
    g.hy = Math.sin(t * 0.5) * 0.4;
    g.hx = Math.sin(t * 0.3) * 0.1;
    g.swish = Math.sin(t * 1.1) * 0.3;
    g.wag = species === 'dog' ? Math.sin(t * 11) * 0.45 : 0;
    g.tongue = species === 'dog' ? 1 : 0;
  }
  const k = 1 - Math.exp(-dt * (moving ? 14 : 5));
  const n = rig.now;
  for (const key of Object.keys(g)) n[key] = n[key] === undefined ? g[key] : ease(n[key], g[key], key === 'wag' || key === 'swish' ? 1 : k);
  rig.body.position.y = n.y;
  rig.body.rotation.x = n.pitch;
  rig.legs.forEach((leg, i) => { leg.rotation.x = n[`l${i}`]; });
  // Breathing.
  rig.body.scale.set(1 + Math.sin(t * 2.4) * 0.015, 1 + Math.sin(t * 2.4) * 0.015, 1);
  rig.head.rotation.set(n.hx, n.hy, 0);
  rig.ears.rotation.z = Math.sin(t * 0.7) > 0.95 ? Math.sin(t * 40) * 0.08 : 0;
  rig.tail.forEach((seg, i) => {
    seg.rotation.x = i === 0 ? n.tail : species === 'cat' ? 0.15 + (n.tail > 0.5 ? 0.15 : -0.05) : 0.1;
    seg.rotation.y = species === 'cat' ? n.swish * (0.4 + i * 0.3) * Math.sin(t * 1.6 - i * 0.6) * 2 : n.wag * (i ? 0.5 : 1);
  });
  if (rig.tongue) { rig.tongue.visible = n.tongue > 0.5; rig.tongue.scale.z = 1 + Math.sin(t * 9) * 0.15; }
}

// ------------------------------------------------------------------ pigeons

type Bird = {
  group: THREE.Group; head: THREE.Group; wings: THREE.Group[];
  home: THREE.Vector2; goal: THREE.Vector2; peck: number; flap: number; hop: number; next: number; heading: number;
};
type FlockRig = { kind: 'flock'; birds: Bird[]; clock: number };

function pigeon(color: string) {
  const body = mat(color, 0.8);
  const dark = mat(tint(color, -0.14), 0.8);
  const group = new THREE.Group();
  add(group, cached('pigeon-body', () => merge([
    moved(new THREE.SphereGeometry(0.055, 10, 8), 0, 0.085, 0, 0, 0, 0, 0.95, 0.9, 1.35),
    moved(new THREE.ConeGeometry(0.035, 0.1, 5), 0, 0.09, -0.1, -Math.PI / 2 - 0.25, 0, 0, 1.2, 1, 0.35),
  ])), body);
  add(group, cached('pigeon-legs', () => merge([-1, 1].map(x => moved(new THREE.CylinderGeometry(0.005, 0.005, 0.04, 4), x * 0.018, 0.02, 0.005)))), mat('#c8606a', 0.6));
  const head = pivot(group, 0, 0.13, 0.055);
  add(head, cached('pigeon-head', () => new THREE.SphereGeometry(0.027, 9, 7)), body);
  add(head, cached('pigeon-neck', () => moved(new THREE.SphereGeometry(0.03, 8, 6), 0, -0.025, -0.008, 0, 0, 0, 1, 1, 1)), mat('#4f7a6a', 0.35, '#1a2a30'));
  add(head, cached('pigeon-beak', () => moved(new THREE.ConeGeometry(0.007, 0.022, 4), 0, -0.004, 0.034, Math.PI / 2)), mat('#3a3436', 0.5));
  for (const x of [-1, 1]) add(head, cached('pigeon-eye', () => new THREE.SphereGeometry(0.0055, 5, 4)), mat('#e07020', 0.3), x * 0.017, 0.007, 0.016);
  const wings: THREE.Group[] = [];
  for (const x of [-1, 1]) {
    const wing = pivot(group, x * 0.045, 0.11, 0.02);
    add(wing, cached('pigeon-wing', () => moved(new THREE.SphereGeometry(0.045, 8, 6), 0, -0.012, -0.045, 0, 0, 0, 0.22, 0.6, 1.5)), dark);
    wings.push(wing);
  }
  return { group, head, wings };
}

function flock(color: string, scale: number): FlockRig & { root: THREE.Group } {
  const root = new THREE.Group();
  const birds: Bird[] = [];
  const count = 5;
  for (let i = 0; i < count; i++) {
    const tone = i % 3 === 0 ? tint(color, -0.08) : i % 3 === 1 ? color : tint(color, 0.08);
    const { group, head, wings } = pigeon(tone);
    group.scale.setScalar(scale * (0.9 + Math.random() * 0.2));
    const a = (i / count) * Math.PI * 2 + Math.random();
    const home = new THREE.Vector2(Math.cos(a) * 0.35 * (0.4 + Math.random()), Math.sin(a) * 0.35 * (0.4 + Math.random()));
    group.position.set(home.x, 0, home.y);
    root.add(group);
    birds.push({ group, head, wings, home, goal: home.clone(), peck: Math.random() * 3, flap: 0, hop: 0, next: Math.random() * 3, heading: Math.random() * Math.PI * 2 });
  }
  root.traverse(o => { if ((o as THREE.Mesh).isMesh) o.castShadow = false; });
  return { root, kind: 'flock', birds, clock: 0 };
}

function animateFlock(rig: FlockRig, dt: number, speed: number) {
  rig.clock += dt;
  const startled = speed > 0.05;
  for (const bird of rig.birds) {
    bird.next -= dt;
    if (bird.next < 0) {
      // Wander a little around home, sometimes a short flap.
      const a = Math.random() * Math.PI * 2;
      bird.goal.set(bird.home.x + Math.cos(a) * 0.25, bird.home.y + Math.sin(a) * 0.25);
      bird.next = 1.5 + Math.random() * 3.5;
      if (Math.random() < 0.12) bird.flap = 0.9;
    }
    if (startled) bird.flap = Math.max(bird.flap, 0.6);
    const p = bird.group.position;
    const dx = bird.goal.x - p.x, dz = bird.goal.y - p.z;
    const dist = Math.hypot(dx, dz);
    if (dist > 0.02) {
      const want = Math.atan2(dx, dz);
      let turn = want - bird.heading;
      turn = Math.atan2(Math.sin(turn), Math.cos(turn));
      bird.heading += turn * Math.min(1, dt * 6);
      const step = Math.min(dist, dt * (bird.flap > 0 ? 0.9 : 0.22));
      p.x += (dx / dist) * step;
      p.z += (dz / dist) * step;
      bird.hop += dt * 11;
    }
    bird.group.rotation.y = bird.heading;
    // Pigeons walk in little hops and pump the head as they go.
    const walking = dist > 0.02;
    bird.flap = Math.max(0, bird.flap - dt);
    const flying = bird.flap > 0;
    p.y = flying ? Math.sin((bird.flap / 0.9) * Math.PI) * 0.22 : walking ? Math.abs(Math.sin(bird.hop)) * 0.012 : 0;
    for (const [i, wing] of bird.wings.entries()) wing.rotation.z = (i ? -1 : 1) * (flying ? 0.4 + Math.sin(rig.clock * 38) * 0.9 : 0);
    bird.peck += dt;
    const pecking = !walking && !flying && Math.sin(bird.peck * 1.1) > 0.3;
    bird.head.rotation.x = pecking ? 0.9 + Math.sin(bird.peck * 14) * 0.35 : walking ? Math.sin(bird.hop) * 0.25 : Math.sin(rig.clock * 0.7 + bird.home.x * 9) * 0.1;
    bird.head.position.z = 0.055 + (walking ? Math.sin(bird.hop) * 0.012 : 0);
    bird.head.rotation.y = !walking && !pecking ? Math.sin(rig.clock * 0.9 + bird.home.y * 7) * 0.6 : 0;
  }
}

// ------------------------------------------------------------------ public

export function createAnimal(species: Species | string, color: string, size: 'small' | 'medium' | string = 'medium'): Animal {
  const kind: Species = species === 'cat' || species === 'pigeons' ? species : 'dog';
  const medium = size !== 'small';
  if (kind === 'pigeons') {
    const rig = flock(color, medium ? 1.2 : 1);
    return { root: rig.root, species: kind, phase: 0, pose: null, rig };
  }
  const scale = kind === 'cat' ? (medium ? 1.2 : 1) : medium ? 1 : 0.62;
  const rig = quadruped(kind, color, scale);
  return { root: rig.root, species: kind, phase: Math.random() * 6, pose: null, rig };
}

export function setAnimalPose(animal: Animal, pose: AnimalPose | string | null) {
  animal.pose = pose === 'sit' || pose === 'lie' || pose === 'stand' ? pose : null;
  if (animal.rig.kind === 'quad') animal.rig.until = 0;
}

// speed in m/s: 0 lets the animal idle; for pigeons any speed startles the flock.
export function animateAnimal(animal: Animal, dt: number, speed: number) {
  dt = Math.min(dt, 0.1);
  if (animal.rig.kind === 'flock') animateFlock(animal.rig, dt, speed);
  else animateQuad(animal, animal.rig, dt, speed);
}
