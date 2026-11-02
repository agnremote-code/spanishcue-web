// La feria de Villaluz · the procedural fair at dusk (three.js only, no GLB):
// plaza, stalls with awnings, a turning Ferris wheel, the bandstand, strings
// of bulbs (one InstancedMesh), the white circles, the people at each stall,
// an ambient crowd and the "Busca y describe" candidates. Layout and every
// position come from layout.mjs; people come from noche-abierta/people3d.
import * as THREE from 'three';
import { addBlobShadow, animatePerson, createPerson, randomLook, setPose, type Look, type Person } from '../noche-abierta/people3d';
import { BOUNDS, CIRCLES, DANCE_FLOOR, FOUNTAIN, POLES, STAGE, WHEEL, crowd } from './layout.mjs';
import { lookOf, type Figure } from './look-contract.mjs';
import { bake } from './bake3d';

export type Spot = { id: string; group: THREE.Group; material: THREE.MeshBasicMaterial; gem: THREE.Mesh };
export type Npc = { id: string; person: Person; x: number; z: number; heading: number; main: boolean };
export type Placed = { figure: Figure; n: number; x: number; z: number; heading: number };
export type Fair = {
  spots: Spot[];
  npcs: Npc[];
  showBusca: (placed: Placed[] | null) => void;
  reveal: (figureId: string | null) => void;
  animate: (t: number, dt: number, px: number, pz: number) => void;
  /** Draw-call budget check in the dev overlay. */
  people: () => number;
  /** Low mode: only the host of the open circle is a live (animated) person. */
  focus: (circleId: string | null) => void;
  /** Everyone standing in the fair: the mascot bumps into them, never through. */
  bodies: () => Body[];
  /** Unmount: frees what the scene traverse cannot reach (cached host bakes, label textures). */
  dispose: () => void;
};
export type Body = { key: string; x: number; z: number; body?: string; seed: number };

const std = (color: string, roughness = 0.8, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
const glow = (color: string, intensity = 1.6) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: 0.4 });

function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}

// The people who run each stall; the dance has a host.
const HOSTS: Record<string, Look> = {
  informacion: { skin: '#c99468', age: 'adult', body: 'f', hairStyle: 'bun', hairColor: '#2a1a12', top: 'jacket', topColor: '#2f6fb0', bottom: 'pants', bottomColor: '#1e2430', extras: ['glasses'] },
  churreria: { skin: '#e2b896', age: 'old', body: 'm', hairStyle: 'short', hairColor: '#cfcdc8', top: 'apron', topColor: '#f0ebe0', bottom: 'pants', bottomColor: '#2a2a30', extras: ['mustache'] },
  tombola: { skin: '#8d5a3c', age: 'adult', body: 'f', hairStyle: 'curly', hairColor: '#120d0b', top: 'shirt', topColor: '#c0392b', bottom: 'skirt', bottomColor: '#1b1b1e', extras: ['earrings'] },
  noria: { skin: '#b9825c', age: 'young', body: 'm', hairStyle: 'cap', hairColor: '#1a1210', top: 'hoodie', topColor: '#7a3ab0', bottom: 'jeans', bottomColor: '#24304a' },
  artesania: { skin: '#dcae88', age: 'adult', body: 'f', hairStyle: 'braids', hairColor: '#3a2014', top: 'sweater', topColor: '#2f8a4a', bottom: 'skirt', bottomColor: '#6b4428', extras: ['scarf'] },
  escenario: { skin: '#a8724e', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#1e1612', top: 'shirt', topColor: '#1b1b1e', bottom: 'pants', bottomColor: '#1b1b1e', extras: ['headphones'] },
  fotos: { skin: '#f0d0b4', age: 'adult', body: 'm', hairStyle: 'bald', hairColor: '#6a4426', top: 'jacket', topColor: '#6b4428', bottom: 'jeans', bottomColor: '#24304a', extras: ['beard'] },
  baile: { skin: '#e8c0a0', age: 'old', body: 'f', hairStyle: 'bob', hairColor: '#cfcdc8', top: 'dress', topColor: '#e47aa8', bottom: 'skirt', bottomColor: '#e47aa8', extras: ['earrings'] },
};

function makePerson(look: Look, pose: string, shadows: boolean) {
  const person = createPerson(look, shadows);
  setPose(person, pose, pose === 'sit');
  addBlobShadow(person, 0.8);
  return person;
}

function buildSpot(id: string, x: number, z: number, discMaterial: THREE.Material): Spot {
  const group = new THREE.Group();
  group.position.set(x, 0.03, z);
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

// A number above each Busca candidate: the same plain label for everyone, so
// nobody stands out before the pick (AC4).
function numberSprite(n: number) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'rgba(16,18,28,.82)';
  ctx.beginPath(); ctx.arc(64, 64, 54, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 6; ctx.stroke();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 72px system-ui, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(String(n), 64, 68);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, depthTest: false, transparent: true }));
  sprite.scale.set(0.55, 0.55, 1);
  sprite.renderOrder = 5;
  return sprite;
}

function stall(parent: THREE.Object3D, s: { x: number; z: number; w: number; d: number; color: string }, facing: number) {
  const g = new THREE.Group();
  g.position.set(s.x, 0, s.z);
  g.rotation.y = facing;
  parent.add(g);
  const wood = std('#6b4a30', 0.9);
  const cloth = std(s.color, 0.85);
  const w = Math.max(s.w, s.d), d = Math.min(s.w, s.d);
  add(g, new THREE.BoxGeometry(w, 1.05, d * 0.5), wood, 0, 0.52, d * 0.18);
  add(g, new THREE.BoxGeometry(w, 0.06, d * 0.55), std('#e8dcc4', 0.7), 0, 1.08, d * 0.18);
  add(g, new THREE.BoxGeometry(w, 2.6, 0.08), wood, 0, 1.3, -d / 2 + 0.05);
  for (const sx of [-1, 1]) add(g, new THREE.BoxGeometry(0.1, 2.7, 0.1), wood, sx * (w / 2 - 0.06), 1.35, d / 2 - 0.1);
  const awning = add(g, new THREE.BoxGeometry(w + 0.4, 0.08, d + 0.6), cloth, 0, 2.75, 0.15);
  awning.rotation.x = 0.18;
  // A scalloped valance in white and the stall colour.
  const n = Math.max(4, Math.round(w / 0.5));
  for (let i = 0; i < n; i++) {
    const m = add(g, new THREE.ConeGeometry(0.24, 0.32, 3), i % 2 ? cloth : std('#f4efe6', 0.85), -w / 2 + (i + 0.5) * (w / n), 2.42, d / 2 + 0.42);
    m.rotation.x = Math.PI;
  }
  const sign = add(g, new THREE.BoxGeometry(w * 0.6, 0.45, 0.06), glow(s.color, 0.55), 0, 3.15, d / 2 + 0.1);
  sign.rotation.x = -0.1;
  return g;
}

export function buildFair(scene: THREE.Scene, opts: { low: boolean; shadows: boolean }): Fair {
  const { low, shadows } = opts;
  const root = new THREE.Group();
  scene.add(root);

  // Plaza: worn stone, a wooden dance floor, the fountain.
  const ground = add(root, new THREE.PlaneGeometry(BOUNDS.maxX - BOUNDS.minX + 60, BOUNDS.maxZ - BOUNDS.minZ + 60), std('#4a423a', 0.95));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = shadows;
  const paving = add(root, new THREE.CircleGeometry(30, 64), std('#5c5248', 0.92), 0, 0.005, 0);
  paving.rotation.x = -Math.PI / 2;
  paving.receiveShadow = shadows;
  const floorMesh = add(root, new THREE.CylinderGeometry(DANCE_FLOOR.r, DANCE_FLOOR.r, 0.08, 40), std('#8a5a34', 0.6), DANCE_FLOOR.x, 0.04, DANCE_FLOOR.z);
  floorMesh.receiveShadow = shadows;
  add(root, new THREE.CylinderGeometry(FOUNTAIN.r, FOUNTAIN.r + 0.2, 0.6, 24), std('#9a9088', 0.8), FOUNTAIN.x, 0.3, FOUNTAIN.z);
  add(root, new THREE.CylinderGeometry(FOUNTAIN.r - 0.2, FOUNTAIN.r - 0.2, 0.05, 24), new THREE.MeshStandardMaterial({ color: '#2a5a7a', roughness: 0.15, metalness: 0.2 }), FOUNTAIN.x, 0.58, FOUNTAIN.z);
  add(root, new THREE.CylinderGeometry(0.18, 0.28, 1.6, 10), std('#9a9088', 0.8), FOUNTAIN.x, 1.1, FOUNTAIN.z);

  // The town around the fair: low houses with lit windows.
  const houseMat = [std('#d8c8a8'), std('#c89a78'), std('#e4d8c0'), std('#b8a088')];
  const windowMat = glow('#ffd28a', 0.9);
  const roofMat = std('#8a3a2a', 0.9);
  const ring = low ? 16 : 26;
  for (let i = 0; i < ring; i++) {
    const a = (i / ring) * Math.PI * 2;
    const r = 52 + (i % 3) * 3;
    const x = Math.sin(a) * r, z = Math.cos(a) * r;
    const h = 5 + (i % 4) * 1.6, w = 9 + (i % 3) * 2;
    const house = new THREE.Group();
    house.position.set(x, 0, z);
    house.rotation.y = a + Math.PI;
    root.add(house);
    add(house, new THREE.BoxGeometry(w, h, 6), houseMat[i % 4], 0, h / 2, 0);
    const roof = add(house, new THREE.ConeGeometry(w * 0.75, 2.2, 4), roofMat, 0, h + 1.1, 0, Math.PI / 4);
    roof.scale.set(1, 1, 0.6);
    for (let k = 0; k < 3; k++) add(house, new THREE.PlaneGeometry(0.9, 1.2), windowMat, -w / 3 + k * (w / 3), h * 0.62, 3.01);
  }

  // Stalls face their circle.
  for (const c of CIRCLES) {
    if (!c.stall || c.id === 'escenario') continue;
    stall(root, c.stall, Math.atan2(c.spot.x - c.stall.x, c.spot.z - c.stall.z));
  }

  // The bandstand: platform, back wall, roof, lights and a mic stand.
  const stage = new THREE.Group();
  stage.position.set(STAGE.x, 0, STAGE.z);
  root.add(stage);
  add(stage, new THREE.BoxGeometry(STAGE.w, STAGE.h, STAGE.d), std('#3a2a20', 0.8), 0, STAGE.h / 2, 0);
  add(stage, new THREE.BoxGeometry(0.2, 4.2, STAGE.d), std('#1b1b22', 0.9), STAGE.w / 2 - 0.1, STAGE.h + 2.1, 0);
  add(stage, new THREE.BoxGeometry(STAGE.w + 0.6, 0.25, STAGE.d + 0.6), std('#e0b030', 0.7), 0, STAGE.h + 4.3, 0);
  for (const sz of [-1, 1]) add(stage, new THREE.BoxGeometry(0.2, 4.2, 0.2), std('#2a2a30', 0.6, 0.4), -STAGE.w / 2 + 0.1, STAGE.h + 2.1, sz * (STAGE.d / 2 - 0.1));
  for (let i = 0; i < 6; i++) add(stage, new THREE.SphereGeometry(0.16, 10, 8), glow(['#ff6a3a', '#ffd23a', '#3ac0ff'][i % 3], 2.2), -STAGE.w / 2 + 0.3, STAGE.h + 4.05, -STAGE.d / 2 + 0.9 + i * ((STAGE.d - 1.8) / 5));

  // The Ferris wheel turns slowly; its cabins hang level.
  const wheel = new THREE.Group();
  wheel.position.set(WHEEL.x, WHEEL.radius + 1.6, WHEEL.z);
  root.add(wheel);
  const steel = std('#d8d4cc', 0.4, 0.6);
  for (const sz of [-0.9, 0.9]) {
    const leg = (dir: number) => { const m = add(root, new THREE.BoxGeometry(0.3, WHEEL.radius + 2.6, 0.3), steel, WHEEL.x + dir * 2.4, (WHEEL.radius + 1.6) / 2, WHEEL.z + sz); m.rotation.z = dir * 0.24; };
    leg(-1); leg(1);
  }
  const spin = new THREE.Group();
  wheel.add(spin);
  for (const sz of [-0.6, 0.6]) {
    const rim = add(spin, new THREE.TorusGeometry(WHEEL.radius, 0.09, 6, low ? 40 : 72), steel, 0, 0, sz);
    rim.rotation.y = 0;
  }
  for (let i = 0; i < WHEEL.cabins; i++) {
    const a = (i / WHEEL.cabins) * Math.PI * 2;
    const spoke = add(spin, new THREE.BoxGeometry(0.06, WHEEL.radius, 0.06), steel, Math.sin(a) * WHEEL.radius / 2, Math.cos(a) * WHEEL.radius / 2, 0);
    spoke.rotation.z = -a;
  }
  const cabins: THREE.Group[] = [];
  const cabinColors = ['#c0392b', '#2f6fb0', '#e0b030', '#2f8a4a', '#7a3ab0', '#e47aa8'];
  // Low mode: the twelve cabins are two instanced meshes (body, roof) that
  // stay level as the wheel turns (2 draw calls instead of 24).
  let cabinParts: { mesh: THREE.InstancedMesh; y: number }[] = [];
  if (low) {
    cabinParts = [
      { mesh: new THREE.InstancedMesh(new THREE.BoxGeometry(1.1, 0.9, 1), std('#ffffff', 0.6), WHEEL.cabins), y: -0.75 },
      { mesh: new THREE.InstancedMesh(new THREE.BoxGeometry(1.25, 0.08, 1.15), std('#f4efe6', 0.6), WHEEL.cabins), y: -0.25 },
    ];
    for (let i = 0; i < WHEEL.cabins; i++) cabinParts[0].mesh.setColorAt(i, new THREE.Color(cabinColors[i % cabinColors.length]));
    for (const part of cabinParts) { part.mesh.frustumCulled = false; spin.add(part.mesh); }
  }
  for (let i = 0; i < (low ? 0 : WHEEL.cabins); i++) {
    const a = (i / WHEEL.cabins) * Math.PI * 2;
    const cabin = new THREE.Group();
    cabin.position.set(Math.sin(a) * WHEEL.radius, Math.cos(a) * WHEEL.radius, 0);
    spin.add(cabin);
    add(cabin, new THREE.BoxGeometry(1.1, 0.9, 1), std(cabinColors[i % cabinColors.length], 0.6), 0, -0.75, 0);
    add(cabin, new THREE.BoxGeometry(1.25, 0.08, 1.15), std('#f4efe6', 0.6), 0, -0.25, 0);
    cabins.push(cabin);
  }
  add(wheel, new THREE.CylinderGeometry(0.45, 0.45, 2, 12), steel, 0, 0, 0).rotation.x = Math.PI / 2;

  // Strings of bulbs between poles: one InstancedMesh for all the bulbs.
  const poles: [number, number][] = POLES.slice(0, 10).map(p => [p.x, p.z]);
  const poleMat = std('#2a2a30', 0.6, 0.4);
  for (const [x, z] of poles) add(root, new THREE.CylinderGeometry(0.07, 0.09, 5.2, 8), poleMat, x, 2.6, z);
  const spans: [number, number, number, number][] = [];
  for (let i = 0; i < poles.length; i++) {
    const [ax, az] = poles[i], [bx, bz] = poles[(i + 1) % poles.length];
    spans.push([ax, az, bx, bz]);
    if (i % 2 === 0) spans.push([ax, az, DANCE_FLOOR.x, DANCE_FLOOR.z]);
  }
  const perSpan = low ? 9 : 16;
  const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 2.4, toneMapped: false }), spans.length * perSpan);
  const colours = ['#ffd27a', '#ff8a5a', '#8ad0ff', '#ffe9a8', '#ff6a9a'].map(c => new THREE.Color(c));
  const matrix = new THREE.Matrix4();
  let k = 0;
  for (const [ax, az, bx, bz] of spans) {
    const toCentre = bx === DANCE_FLOOR.x && bz === DANCE_FLOOR.z;
    for (let i = 0; i < perSpan; i++) {
      const t = (i + 0.5) / perSpan;
      const sag = Math.sin(t * Math.PI) * 0.9;
      const y = toCentre ? 5 + (7 - 5) * t - sag : 5 - sag;
      matrix.makeTranslation(ax + (bx - ax) * t, y, az + (bz - az) * t);
      bulbs.setMatrixAt(k, matrix);
      bulbs.setColorAt(k, colours[(k * 7) % colours.length]);
      k++;
    }
  }
  add(root, new THREE.CylinderGeometry(0.08, 0.1, 7.2, 8), poleMat, DANCE_FLOOR.x, 3.6, DANCE_FLOOR.z);
  root.add(bulbs);

  // Warm light pools (high mode only; low mode relies on emissive bulbs).
  if (!low) for (const [x, z] of [[0, 1], [-20, 0], [20, 0], [0, -22], [0, 22]] as [number, number][]) {
    const lamp = new THREE.PointLight('#ffb070', 14, 22, 1.6);
    lamp.position.set(x, 5.5, z);
    root.add(lamp);
  }

  // White circles.
  const discMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.12, depthWrite: false, toneMapped: false });
  const spots = CIRCLES.map(c => { const s = buildSpot(c.id, c.spot.x, c.spot.z, discMaterial); root.add(s.group); return s; });

  // Hosts at their stalls.
  const npcs: Npc[] = [];
  const hostBlobs: THREE.Object3D[] = [];
  for (const c of CIRCLES) {
    const heading = Math.atan2(c.spot.x - c.npc.x, c.spot.z - c.npc.z);
    const person = makePerson(HOSTS[c.id], c.id === 'escenario' ? 'stand' : 'stand', shadows);
    person.root.position.set(c.npc.x, 0, c.npc.z);
    person.root.rotation.y = heading;
    root.add(person.root);
    hostBlobs.push(person.root.children[person.root.children.length - 1]);
    npcs.push({ id: c.id, person, x: c.npc.x, z: c.npc.z, heading, main: true });
  }

  // The crowd: fewer people in low mode (§3), baked there (no idle motion).
  const crowdPeople: { person: Person; x: number; z: number; body?: string; seed: number }[] = [];
  for (const p of crowd(low ? 10 : 24)) {
    const look = randomLook(p.seed);
    const person = makePerson(look, p.pose, false);
    person.root.position.set(p.x, 0, p.z);
    person.root.rotation.y = p.heading;
    if (low) animatePerson(person, 0, 0, false);
    root.add(person.root);
    crowdPeople.push({ person, x: p.x, z: p.z, body: look.body, seed: p.seed });
  }

  // Busca candidates.
  const busca = new THREE.Group();
  root.add(busca);
  let candidates: { id: string; person: Person; label: THREE.Sprite; x: number; z: number; body?: string }[] = [];
  const found = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.72, 40), new THREE.MeshBasicMaterial({ color: '#7dffb0', transparent: true, opacity: 0.95, depthWrite: false, toneMapped: false }));
  found.rotation.x = -Math.PI / 2;
  found.visible = false;
  root.add(found);

  let candidateBake: THREE.Group | null = null;
  function clearBusca() {
    if (candidateBake) { busca.remove(candidateBake); candidateBake.traverse(o => { const m = o as THREE.Mesh; if (m.isMesh) m.geometry.dispose(); }); candidateBake = null; }
    for (const c of candidates) {
      busca.remove(c.person.root, c.label);
      c.person.root.traverse(o => { const m = o as THREE.Mesh; if (m.isMesh) { const mat = m.material as THREE.Material | THREE.Material[]; if (Array.isArray(mat)) mat.forEach(x => x.dispose()); else mat.dispose(); } });
      (c.label.material as THREE.SpriteMaterial).map?.dispose();
      c.label.material.dispose();
    }
    candidates = [];
    found.visible = false;
  }

  function showBusca(placed: Placed[] | null) {
    clearBusca();
    if (!placed) return;
    for (const p of placed) {
      const { look, pose } = lookOf(p.figure);
      const person = makePerson(look as unknown as Look, pose, shadows);
      person.root.position.set(p.x, 0, p.z);
      person.root.rotation.y = p.heading;
      busca.add(person.root);
      const label = numberSprite(p.n);
      label.position.set(p.x, (look.height ?? 1.7) + 0.55, p.z);
      busca.add(label);
      candidates.push({ id: p.figure.id, person, label, x: p.x, z: p.z, body: (look as unknown as Look).body });
    }
    if (low) {
      // One baked cluster (same look and pose, no idle motion): ~3 draw calls
      // instead of ~30 per candidate. Labels stay sprites.
      for (const c of candidates) animatePerson(c.person, 0, 0, false);
      candidateBake = bake(candidates.map(c => c.person.root), { people: true });
      busca.add(candidateBake);
    }
  }

  function reveal(id: string | null) {
    const c = id ? candidates.find(x => x.id === id) : null;
    found.visible = Boolean(c);
    if (c) found.position.set(c.x, 0.04, c.z);
  }

  // ------------------------------------------------------------ low-power bake (T5)
  // Everything that never moves becomes a few merged meshes; the crowd too;
  // the hosts are baked as a group and only the host of the open circle is a
  // live person (it turns to the mascot and talks).
  let focused: string | null = null;
  let hostBake: THREE.Group | null = null;
  const hostBakes = new Map<string, THREE.Group>();
  function hostsExcept(id: string | null) {
    const key = id ?? '';
    let group = hostBakes.get(key);
    if (!group) {
      const others = npcs.filter(n => n.id !== id);
      for (const n of others) n.person.root.visible = true;
      group = bake(others.map(n => n.person.root), { people: true, hide: false, skip: m => hostBlobs.includes(m) });
      for (const n of npcs) n.person.root.visible = n.id === id;
      hostBakes.set(key, group);
    }
    return group;
  }
  function focus(id: string | null) {
    if (!low || id === focused && hostBake) return;
    focused = id;
    if (hostBake) root.remove(hostBake);
    hostBake = hostsExcept(id);
    root.add(hostBake);
    for (const n of npcs) n.person.root.visible = n.id === id;
  }
  if (low) {
    // Static scenery: houses, stalls, stage, wheel frame, poles, fountain, discs.
    const live = new Set<THREE.Object3D>([spin, busca, found, ...npcs.map(n => n.person.root), ...crowdPeople.map(c => c.person.root)]);
    const ringsAndGems = new Set<THREE.Object3D>(spots.flatMap(s => s.group.children.filter(o => (o as THREE.Mesh).material === s.material)));
    const isLive = (o: THREE.Object3D) => { for (let p: THREE.Object3D | null = o; p; p = p.parent) if (live.has(p)) return true; return false; };
    root.add(bake([root], { skip: m => ringsAndGems.has(m) || isLive(m) }));
    // The turning part of the wheel (rims and spokes) in the wheel's own frame.
    spin.add(bake([spin], { relativeTo: spin }));
    // The crowd and every host's blob shadow: one baked group.
    root.add(bake([...crowdPeople.map(c => c.person.root), ...hostBlobs], { people: true }));
    for (const c of crowdPeople) root.remove(c.person.root);
    for (const n of npcs) { const blob = hostBlobs[npcs.indexOf(n)]; n.person.root.remove(blob); }
    focus(null);
  }

  const cabinMatrix = new THREE.Matrix4(), cabinTurn = new THREE.Matrix4(), cabinOffset = new THREE.Matrix4();
  function animate(t: number, dt: number, px: number, pz: number) {
    spin.rotation.z = t * 0.05;
    for (const cabin of cabins) cabin.rotation.z = -spin.rotation.z;
    if (cabinParts.length) {
      cabinTurn.makeRotationZ(-spin.rotation.z);
      for (let i = 0; i < WHEEL.cabins; i++) {
        const a = (i / WHEEL.cabins) * Math.PI * 2;
        for (const part of cabinParts) {
          cabinMatrix.makeTranslation(Math.sin(a) * WHEEL.radius, Math.cos(a) * WHEEL.radius, 0).multiply(cabinTurn).multiply(cabinOffset.makeTranslation(0, part.y, 0));
          part.mesh.setMatrixAt(i, cabinMatrix);
        }
      }
      for (const part of cabinParts) part.mesh.instanceMatrix.needsUpdate = true;
    }
    for (const s of spots) { s.gem.position.y = 2.3 + Math.sin(t * 2 + s.group.position.x) * 0.12; s.gem.rotation.y += dt * 1.5; }
    for (const n of npcs) if (!low || n.id === focused) animatePerson(n.person, dt, 0, false);
    if (!low) {
      for (const c of crowdPeople) if (Math.abs(c.x - px) < 28 && Math.abs(c.z - pz) < 28) animatePerson(c.person, dt, 0, false);
      for (const c of candidates) animatePerson(c.person, dt, 0, false);
    }
    if (found.visible) found.rotation.z += dt;
  }
  animate(0, 0, 0, 0);

  // Unmount (code review B1 of El ascensor del cerro, the same leak here): the
  // Busca labels' canvas textures and the cached host bakes not attached to
  // the scene are invisible to World3D's traverse.
  function dispose() {
    clearBusca();
    for (const group of hostBakes.values()) group.traverse(o => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      m.geometry.dispose();
      const mat = m.material as THREE.Material | THREE.Material[];
      if (Array.isArray(mat)) mat.forEach(x => x.dispose()); else mat.dispose();
    });
    hostBakes.clear();
    hostBake = null;
  }

  const bodies = (): Body[] => [
    ...npcs.map((n, i) => ({ key: `host-${n.id}`, x: n.x, z: n.z, body: HOSTS[n.id]?.body, seed: i * 7 + 3 })),
    ...crowdPeople.map((c, i) => ({ key: `crowd-${i}`, x: c.x, z: c.z, body: c.body, seed: c.seed })),
    ...candidates.map((c, i) => ({ key: `busca-${c.id}`, x: c.x, z: c.z, body: c.body, seed: i * 11 + 5 })),
  ];
  return { spots, npcs, showBusca, reveal, animate, focus, bodies, dispose, people: () => npcs.length + crowdPeople.length + candidates.length };
}
