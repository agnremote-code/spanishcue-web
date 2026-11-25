// El taller de la greda · the procedural workshop on a highland morning
// (three.js only, no GLB): a covered shed with a brick back wall and a metal
// roof on posts, the counter, the clay table and sacks, the wheel, the drying
// shelves, two brick kilns, the glaze bench, the office corner, the dispatch
// yard with crates and a truck, green hills and eucalyptus beyond the fence.
// A working place, no folkloric décor (concept §6.5). Every position comes
// from layout.mjs; people come from noche-abierta/people3d; the static
// scenery is baked in low mode with the shared baker of La feria de Villaluz.
import * as THREE from 'three';
import { addBlobShadow, animatePerson, createPerson, setPose, type Look, type Person } from '../noche-abierta/people3d';
import {
  BIG_KILN, BOUNDS, CIRCLES, COUNTER, COVERED, CRACKED_BOX, CRATES, DESK, DRY_SHELVES, EAST_WALL, GLAZE_TABLE, KNEAD_TABLE, OFFICE_SHELF,
  OFFICE_WALLS, PLATE_RACK, POSTS, PROPS, SACKS, SAMPLE_TABLE, SHED, SMALL_KILN, TRUCK, WHEEL, propAt, standings, type Box,
} from './layout.mjs';
import { bake } from '../la-feria-de-villaluz/bake3d';

export type Spot = { id: string; group: THREE.Group; material: THREE.MeshBasicMaterial; gem: THREE.Mesh };
export type Npc = { id: string; person: Person; x: number; z: number; heading: number };
export type Body = { key: string; x: number; z: number; body?: string; seed: number };
export type Workshop = {
  spots: Spot[];
  npcs: Npc[];
  /** Who stands where: the open circle's cast at the circle, everyone else at home. */
  stage: (openId: string | null, closing: boolean, px: number, pz: number) => void;
  /** The order's props: each one moves a station along when its circle is done. */
  props: (done: string[]) => void;
  animate: (t: number, dt: number, focus: string | null) => void;
  people: () => number;
  bodies: () => Body[];
  dispose: () => void;
};

const std = (color: string, roughness = 0.85, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });

function add(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  parent.add(mesh);
  return mesh;
}
/** A box filling a layout footprint from y0 to y1. */
function block(parent: THREE.Object3D, b: Box, y0: number, y1: number, material: THREE.Material, inset = 0) {
  return add(parent, new THREE.BoxGeometry(b.x1 - b.x0 - inset * 2, y1 - y0, b.z1 - b.z0 - inset * 2), material, (b.x0 + b.x1) / 2, (y0 + y1) / 2, (b.z0 + b.z1) / 2);
}
const mid = (b: Box) => ({ x: (b.x0 + b.x1) / 2, z: (b.z0 + b.z1) / 2, w: b.x1 - b.x0, d: b.z1 - b.z0 });

// The people of the workshop: work clothes, aprons with clay, no costumes.
const LOOKS: Record<string, Look> = {
  marina: { skin: '#c99468', age: 'adult', body: 'f', hairStyle: 'ponytail', hairColor: '#2a1a12', top: 'shirt', topColor: '#5d7a8c', bottom: 'jeans', bottomColor: '#2c3a52', extras: ['glasses'] },
  gonzalo: { skin: '#b9825c', age: 'adult', body: 'm', hairStyle: 'short', hairColor: '#1e1612', top: 'apron', topColor: '#9a7b5c', bottom: 'pants', bottomColor: '#3a3a40', extras: ['mustache'] },
  paola: { skin: '#a8724e', age: 'young', body: 'f', hairStyle: 'curly', hairColor: '#160f0c', top: 'apron', topColor: '#6f8a6a', bottom: 'jeans', bottomColor: '#24304a', extras: ['earrings'] },
  emilio: { skin: '#7a4c34', age: 'adult', body: 'm', hairStyle: 'buzz', hairColor: '#120d0b', top: 'tshirt', topColor: '#8a5a3c', bottom: 'pants', bottomColor: '#2e2a26', extras: ['beard'] },
  roberto: { skin: '#d8a882', age: 'adult', body: 'm', hairStyle: 'cap', hairColor: '#2a1d16', top: 'jacket', topColor: '#2f5a8a', bottom: 'jeans', bottomColor: '#24304a' },
};
const POSES: Record<string, string> = { gonzalo: 'stand', paola: 'stand', emilio: 'arms', marina: 'stand', roberto: 'stand' };

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

export function buildWorkshop(scene: THREE.Scene, opts: { low: boolean; shadows: boolean }): Workshop {
  const { low, shadows } = opts;
  const root = new THREE.Group();
  scene.add(root);

  // ------------------------------------------------------------ materials
  const earth = std('#8a6e52', 0.98), concrete = std('#b5ab9c', 0.95), brick = std('#a5543a', 0.92), plaster = std('#e6dfd2', 0.9);
  const wood = std('#7a5634', 0.85), darkWood = std('#4f3824', 0.9), metal = std('#9aa2a8', 0.5, 0.5), roofMetal = std('#8e979c', 0.6, 0.4);
  const clay = std('#9c6b4a', 0.95), rawClay = std('#c8a17a', 0.95), bisque = std('#e0c2a0', 0.8), glazeBlue = std('#3f6f8f', 0.35);
  const sack = std('#d8c8a4', 1), plastic = new THREE.MeshStandardMaterial({ color: '#f2f2f0', roughness: 0.3, transparent: true, opacity: 0.55 });
  const grass = std('#5e7f3e', 1), grassFar = std('#6d8c4a', 1), leaf = std('#4f6b46', 0.95), bark = std('#8a7a68', 0.95);

  // ------------------------------------------------------------ ground
  const ground = add(root, new THREE.PlaneGeometry(260, 260), grass);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = shadows;
  const yard = add(root, new THREE.PlaneGeometry(BOUNDS.maxX - BOUNDS.minX + 2, BOUNDS.maxZ - BOUNDS.minZ + 2), earth, (BOUNDS.minX + BOUNDS.maxX) / 2, 0.004, (BOUNDS.minZ + BOUNDS.maxZ) / 2);
  yard.rotation.x = -Math.PI / 2;
  yard.receiveShadow = shadows;
  const floor = add(root, new THREE.PlaneGeometry(SHED.x1 - SHED.x0, SHED.z1 - SHED.z0), concrete, (SHED.x0 + SHED.x1) / 2, 0.008, (SHED.z0 + SHED.z1) / 2);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = shadows;

  // ------------------------------------------------------------ the shed
  // Brick back wall on the north bound, plastered west wall, the east wall
  // behind the glaze bench, posts and a metal roof sloping to the yard.
  const back = add(root, new THREE.BoxGeometry(SHED.x1 - SHED.x0, SHED.h + 0.6, 0.35), brick, (SHED.x0 + SHED.x1) / 2, (SHED.h + 0.6) / 2, SHED.z0 - 0.17);
  back.receiveShadow = shadows;
  add(root, new THREE.BoxGeometry(0.35, SHED.h + 0.4, SHED.z1 - SHED.z0), plaster, SHED.x0 - 0.17, (SHED.h + 0.4) / 2, (SHED.z0 + SHED.z1) / 2);
  block(root, EAST_WALL, 0, SHED.h, plaster);
  for (const p of POSTS) add(root, new THREE.BoxGeometry(0.28, SHED.h, 0.28), darkWood, p.x, SHED.h / 2, p.z);
  const roof = add(root, new THREE.BoxGeometry(SHED.x1 - SHED.x0 + 1, 0.08, SHED.z1 - SHED.z0 + 1.4), roofMetal, (SHED.x0 + SHED.x1) / 2, SHED.h + 0.25, (SHED.z0 + SHED.z1) / 2);
  roof.rotation.x = 0.05;
  roof.castShadow = shadows;
  // Roof beams under the sheet.
  for (let x = SHED.x0 + 2; x < SHED.x1; x += 4) add(root, new THREE.BoxGeometry(0.16, 0.22, SHED.z1 - SHED.z0), darkWood, x, SHED.h + 0.05, (SHED.z0 + SHED.z1) / 2);
  // Two windows high in the back wall and a fluorescent tube per bay.
  const sky = new THREE.MeshBasicMaterial({ color: '#cfe0ea' });
  for (const x of [-15, -3, 7]) add(root, new THREE.PlaneGeometry(2.4, 0.9), sky, x, 3.3, SHED.z0 + 0.02);
  const tube = new THREE.MeshBasicMaterial({ color: '#f4f6f2' });
  for (const x of [-16, -6, 4]) add(root, new THREE.BoxGeometry(1.4, 0.06, 0.1), tube, x, SHED.h - 0.15, -6);

  // A brick wall along the west side of the yard and a wire fence on the
  // south and east, with an open gate for the truck.
  add(root, new THREE.BoxGeometry(0.3, 1.8, BOUNDS.maxZ - SHED.z1), brick, BOUNDS.minX - 0.15, 0.9, (SHED.z1 + BOUNDS.maxZ) / 2);
  const fencePosts: [number, number][] = [];
  for (let x = BOUNDS.minX; x <= BOUNDS.maxX; x += 3) if (x < 8 || x > 20) fencePosts.push([x, BOUNDS.maxZ + 0.1]);
  for (let z = SHED.z0; z <= BOUNDS.maxZ; z += 3) fencePosts.push([BOUNDS.maxX + 0.1, z]);
  for (const [x, z] of fencePosts) add(root, new THREE.CylinderGeometry(0.07, 0.08, 1.5, 6), darkWood, x, 0.75, z);
  const wire = new THREE.MeshBasicMaterial({ color: '#6a6a6a' });
  for (const y of [0.5, 0.9, 1.3]) {
    add(root, new THREE.BoxGeometry(8 - BOUNDS.minX, 0.02, 0.02), wire, (BOUNDS.minX + 8) / 2, y, BOUNDS.maxZ + 0.1);
    add(root, new THREE.BoxGeometry(BOUNDS.maxX - 20, 0.02, 0.02), wire, (20 + BOUNDS.maxX) / 2, y, BOUNDS.maxZ + 0.1);
    add(root, new THREE.BoxGeometry(0.02, 0.02, BOUNDS.maxZ - SHED.z0), wire, BOUNDS.maxX + 0.1, y, (SHED.z0 + BOUNDS.maxZ) / 2);
  }

  // ------------------------------------------------------------ stations
  // 1. The counter: a wooden counter, the landline, the order book.
  block(root, COUNTER, 0, 1, wood);
  block(root, COUNTER, 1, 1.05, std('#d9cdb8', 0.7));
  add(root, new THREE.BoxGeometry(0.26, 0.09, 0.2), std('#2a2a2e', 0.5), -14.2, 1.1, 5);
  add(root, new THREE.BoxGeometry(0.22, 0.05, 0.08), std('#2a2a2e', 0.5), -14.2, 1.18, 5);
  // A shelf of finished pieces behind it.
  add(root, new THREE.BoxGeometry(4, 1.8, 0.4), wood, -13, 0.9, 2.2);
  for (let i = 0; i < 8; i++) add(root, new THREE.CylinderGeometry(0.14, 0.1, 0.24, 10), i % 2 ? clay : bisque, -14.6 + i * 0.45, 1.92, 2.2);

  // 2. The clay table: a heavy kneading table, sacks of clay, covered pieces.
  block(root, KNEAD_TABLE, 0, 0.9, darkWood);
  block(root, KNEAD_TABLE, 0.9, 0.94, rawClay, 0.15);
  for (let i = 0; i < 6; i++) {
    const s = mid(SACKS);
    add(root, new THREE.BoxGeometry(0.85, 0.45, 0.6), sack, s.x, 0.24 + (i % 2) * 0.45, SACKS.z0 + 0.4 + Math.floor(i / 2) * 1.1, (i * 0.37) % 0.3);
  }
  block(root, COVERED, 0, 0.8, wood);
  for (let i = 0; i < 3; i++) add(root, new THREE.SphereGeometry(0.28, 10, 8), plastic, -21.1, 1.05, 1.5 + i * 0.45);

  // 3. The wheel: a base, the turning head, a stool; a rack of fresh plates.
  const w = mid(WHEEL);
  add(root, new THREE.BoxGeometry(w.w, 0.5, w.d), std('#5a6066', 0.6, 0.3), w.x, 0.25, w.z);
  const wheelHead = add(root, new THREE.CylinderGeometry(0.32, 0.32, 0.06, 20), metal, w.x, 0.56, w.z);
  const wheelClay = add(root, new THREE.CylinderGeometry(0.14, 0.18, 0.2, 14), rawClay, w.x, 0.69, w.z);
  add(root, new THREE.CylinderGeometry(0.22, 0.22, 0.45, 12), darkWood, w.x, 0.22, w.z - 1.1);
  block(root, PLATE_RACK, 0, 1.9, wood, 0.05);
  for (const y of [0.45, 0.9, 1.35]) block(root, PLATE_RACK, y - 0.03, y, darkWood);

  // 4. The drying room: tall shelves of pieces under plastic, a box of cracked pieces.
  block(root, DRY_SHELVES, 0, 2.4, wood, 0.05);
  for (const y of [0.6, 1.25, 1.9]) {
    block(root, DRY_SHELVES, y - 0.03, y, darkWood);
    for (let x = DRY_SHELVES.x0 + 0.35; x < DRY_SHELVES.x1 - 0.2; x += 0.55) add(root, new THREE.CylinderGeometry(0.16, 0.12, 0.26, 10), rawClay, x, y + 0.13, -13.2);
  }
  block(root, CRACKED_BOX, 0, 0.45, wood);

  // 5. The kilns: a small brick kiln with a metal door, a big one with a chimney; the sample table.
  block(root, SMALL_KILN, 0, 1.5, brick);
  add(root, new THREE.BoxGeometry(1.1, 0.9, 0.06), metal, (SMALL_KILN.x0 + SMALL_KILN.x1) / 2, 0.75, SMALL_KILN.z1 + 0.03);
  block(root, BIG_KILN, 0, 2.4, brick);
  add(root, new THREE.BoxGeometry(1.8, 1.6, 0.06), metal, (BIG_KILN.x0 + BIG_KILN.x1) / 2, 1, BIG_KILN.z1 + 0.03);
  add(root, new THREE.CylinderGeometry(0.28, 0.32, 3.4, 10), brick, BIG_KILN.x1 - 0.5, 4.1, BIG_KILN.z0 + 0.5);
  block(root, SAMPLE_TABLE, 0, 0.92, wood, 0.04);

  // 6. The glaze bench: buckets, brushes, test tiles.
  block(root, GLAZE_TABLE, 0, 0.92, wood, 0.04);
  for (let i = 0; i < 3; i++) add(root, new THREE.CylinderGeometry(0.2, 0.17, 0.34, 12), [std('#e6e6e0', 0.6), std('#c0b090', 0.6), std('#8aa0a8', 0.6)][i], 10.1 + (i % 2) * 0.6, 1.09, -0.5 + i * 0.25);
  for (let i = 0; i < 4; i++) add(root, new THREE.BoxGeometry(0.16, 0.02, 0.16), [glazeBlue, bisque, std('#6a8a5a', 0.4), std('#b0503a', 0.4)][i], 9.9 + i * 0.22, 0.93, 1.1);

  // 7. The office corner: desk, computer, chair, a shelf, two partition walls.
  block(root, DESK, 0, 0.76, wood, 0.03);
  add(root, new THREE.BoxGeometry(0.6, 0.38, 0.05), std('#1d1f24', 0.4), 2.1, 1.0, 9.75);
  add(root, new THREE.BoxGeometry(0.08, 0.2, 0.08), std('#1d1f24', 0.4), 2.1, 0.86, 9.8);
  add(root, new THREE.BoxGeometry(0.5, 0.45, 0.5), std('#2e3a46', 0.8), 1.5, 0.45, 10.9);
  block(root, OFFICE_SHELF, 0, 1.6, wood, 0.03);
  for (const y of [0.5, 1.1]) block(root, OFFICE_SHELF, y - 0.03, y, darkWood);
  // Half-height partitions: the office stays open to the yard and the shed.
  for (const wall of OFFICE_WALLS) block(root, wall, 0, 1.3, plaster);

  // 8. The yard: twelve crates on a pallet, the truck at the gate.
  const c = mid(CRATES);
  add(root, new THREE.BoxGeometry(c.w, 0.14, c.d), wood, c.x, 0.07, c.z);
  for (let i = 0; i < 12; i++) {
    const col = i % 3, row = Math.floor(i / 3) % 2, layer = Math.floor(i / 6);
    add(root, new THREE.BoxGeometry(0.74, 0.7, 0.74), std('#b88a55', 0.9), CRATES.x0 + 0.42 + col * 0.78, 0.5 + layer * 0.72, CRATES.z0 + 0.42 + row * 0.78);
  }
  const t = mid(TRUCK);
  add(root, new THREE.BoxGeometry(t.w, 2.2, 4.8), std('#e8e4dc', 0.7), t.x, 1.7, TRUCK.z1 - 2.4);
  add(root, new THREE.BoxGeometry(t.w - 0.1, 1.6, 1.8), std('#2f5a8a', 0.5, 0.2), t.x, 1.4, TRUCK.z0 + 0.9);
  add(root, new THREE.BoxGeometry(t.w - 0.3, 0.6, 0.04), new THREE.MeshStandardMaterial({ color: '#9ec4dc', roughness: 0.1, metalness: 0.3 }), t.x, 1.8, TRUCK.z0 - 0.01);
  for (const sx of [-1, 1]) for (const z of [TRUCK.z0 + 1, TRUCK.z1 - 1.2]) {
    const wheelMesh = add(root, new THREE.CylinderGeometry(0.45, 0.45, 0.3, 14), std('#1d1d20', 0.9), t.x + sx * (t.w / 2), 0.45, z);
    wheelMesh.rotation.z = Math.PI / 2;
  }

  // ------------------------------------------------------------ beyond the fence
  // The family house (whitewash and a tile roof), green hills and eucalyptus.
  const house = new THREE.Group();
  house.position.set(-12, 0, 26);
  root.add(house);
  add(house, new THREE.BoxGeometry(12, 5.6, 7), plaster, 0, 2.8, 0);
  const tiles = add(house, new THREE.ConeGeometry(8.6, 2.2, 4), std('#9a4a32', 0.9), 0, 6.7, 0, Math.PI / 4);
  tiles.scale.set(1, 1, 0.62);
  for (const x of [-4, 0, 4]) for (const y of [1.6, 4.2]) add(house, new THREE.PlaneGeometry(1, 1.1), std('#3d4a52', 0.4), x, y, -3.51).rotation.y = Math.PI;
  for (let i = 0; i < (low ? 8 : 14); i++) {
    const a = (i / (low ? 8 : 14)) * Math.PI * 2;
    const r = 95 + (i % 3) * 18;
    const hill = add(root, new THREE.SphereGeometry(30 + (i % 4) * 8, 14, 8), i % 2 ? grass : grassFar, Math.sin(a) * r, -14 - (i % 3) * 4, Math.cos(a) * r);
    hill.scale.set(1.6, 0.7, 1);
  }
  const trees: [number, number][] = [[-30, -8], [-28, 6], [-32, 16], [30, -10], [28, 2], [31, 18], [-6, 32], [8, 34], [20, 30], [-24, -24], [0, -26], [18, -24]];
  for (const [x, z] of trees.slice(0, low ? 7 : trees.length)) {
    const h = 9 + ((x * 7 + z * 3) % 4 + 4) % 4;
    add(root, new THREE.CylinderGeometry(0.22, 0.35, h, 7), bark, x, h / 2, z);
    const crown = add(root, new THREE.SphereGeometry(2.2, 8, 7), leaf, x, h + 0.6, z);
    crown.scale.set(1, 1.7, 1);
  }

  // ------------------------------------------------------------ props of the order
  const propMeshes = new Map<string, THREE.Object3D>();
  function propMesh(id: string) {
    const g = new THREE.Group();
    if (id === 'cuaderno') { add(g, new THREE.BoxGeometry(0.32, 0.04, 0.24), std('#2f5a8a', 0.8), 0, 0.02, 0); add(g, new THREE.BoxGeometry(0.3, 0.02, 0.22), std('#f2efe6', 0.9), 0, 0.045, 0); }
    if (id === 'bolas') for (let i = 0; i < 6; i++) add(g, new THREE.SphereGeometry(0.1, 10, 8), rawClay, (i % 3) * 0.22 - 0.22, 0.1, Math.floor(i / 3) * 0.22 - 0.11);
    if (id === 'tabla') { add(g, new THREE.BoxGeometry(0.9, 0.04, 0.4), wood, 0, 0.02, 0); for (let i = 0; i < 4; i++) add(g, new THREE.CylinderGeometry(0.15, 0.12, 0.04, 16), rawClay, -0.3 + i * 0.2, 0.06, 0); }
    if (id === 'muestra') { for (let i = 0; i < 3; i++) add(g, new THREE.CylinderGeometry(0.16, 0.12, 0.04, 16), bisque, -0.3 + i * 0.3, 0.02, 0); add(g, new THREE.CylinderGeometry(0.06, 0.05, 0.1, 12), bisque, 0.5, 0.05, 0); }
    if (id === 'balde') { add(g, new THREE.CylinderGeometry(0.2, 0.17, 0.34, 14), std('#f2f2ee', 0.5), 0, 0.17, 0); add(g, new THREE.CylinderGeometry(0.18, 0.18, 0.02, 14), glazeBlue, 0, 0.33, 0); }
    if (id === 'jarra') { add(g, new THREE.CylinderGeometry(0.1, 0.13, 0.28, 14), glazeBlue, 0, 0.14, 0); add(g, new THREE.TorusGeometry(0.06, 0.015, 6, 12), glazeBlue, 0.13, 0.16, 0); }
    if (id === 'factura') { add(g, new THREE.BoxGeometry(0.24, 0.02, 0.32), darkWood, 0, 0.01, 0); add(g, new THREE.BoxGeometry(0.2, 0.01, 0.26), std('#f4f1e8', 0.9), 0, 0.025, 0); }
    return g;
  }
  for (const p of PROPS) { const m = propMesh(p.id); propMeshes.set(p.id, m); root.add(m); }
  let propKey = '';
  function props(done: string[]) {
    const key = PROPS.map(p => (done.includes(p.after) ? 1 : 0)).join('');
    if (key === propKey) return;
    propKey = key;
    for (const p of PROPS) { const at = propAt(p, done); propMeshes.get(p.id)!.position.set(at.x, at.y, at.z); }
  }
  props([]);

  // ------------------------------------------------------------ white circles
  const discMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.14, depthWrite: false, toneMapped: false });
  const spots = CIRCLES.map(c0 => { const s = buildSpot(c0.id, c0.spot.x, c0.spot.z, discMaterial); root.add(s.group); return s; });

  // ------------------------------------------------------------ people
  const npcs: Npc[] = [];
  const home = standings(null, false);
  for (const [id, look] of Object.entries(LOOKS)) {
    const person = createPerson(look, shadows);
    setPose(person, POSES[id] ?? 'stand');
    addBlobShadow(person, 0.8);
    const at = home[id];
    person.root.position.set(at.x, 0, at.z);
    root.add(person.root);
    npcs.push({ id, person, x: at.x, z: at.z, heading: 0 });
  }
  const wheelSeat = CIRCLES.find(x => x.id === 'torno')!.slots.gonzalo;
  let stageKey = '';
  function stage(openId: string | null, closing: boolean, px: number, pz: number) {
    const key = `${openId ?? ''}|${closing ? 1 : 0}`;
    if (key === stageKey) return;
    stageKey = key;
    const at = standings(openId, closing);
    const open = openId ? CIRCLES.find(x => x.id === openId) : null;
    for (const n of npcs) {
      n.x = at[n.id].x; n.z = at[n.id].z;
      n.person.root.position.set(n.x, 0, n.z);
      // Face the open circle's player spot, or the middle of the room.
      const target = open ? open.spot : closing ? { x: 15, z: 7 } : { x: px, z: pz };
      n.heading = Math.atan2(target.x - n.x, target.z - n.z);
      n.person.root.rotation.y = n.heading;
      // Gonzalo sits at his wheel when he is there.
      const seated = n.id === 'gonzalo' && n.x === wheelSeat.x && n.z === wheelSeat.z;
      setPose(n.person, seated ? 'sit' : POSES[n.id] ?? 'stand', seated);
      if (seated) n.person.root.position.y = 0.02;
    }
  }
  stage(null, false, 0, 10);

  // ------------------------------------------------------------ low-power bake
  if (low) {
    const live = new Set<THREE.Object3D>([...npcs.map(n => n.person.root), ...propMeshes.values()]);
    const ringsAndGems = new Set<THREE.Object3D>(spots.flatMap(s => s.group.children.filter(o => (o as THREE.Mesh).material === s.material)));
    const isLive = (o: THREE.Object3D) => { for (let p: THREE.Object3D | null = o; p; p = p.parent) if (live.has(p) || p === wheelHead || p === wheelClay) return true; return false; };
    root.add(bake([root], { skip: m => ringsAndGems.has(m) || isLive(m) || (m.material as THREE.Material).transparent }));
  }

  function animate(time: number, dt: number, focus: string | null) {
    wheelHead.rotation.y += dt * 3;
    wheelClay.rotation.y = wheelHead.rotation.y;
    for (const s of spots) { s.gem.position.y = 2.3 + Math.sin(time * 2 + s.group.position.x) * 0.12; s.gem.rotation.y += dt * 1.5; }
    const cast = focus ? CIRCLES.find(x => x.id === focus)?.slots ?? {} : {};
    for (const n of npcs) if (!low || n.id in cast) animatePerson(n.person, dt, 0, n.id in cast);
  }
  animate(0, 0, null);

  const bodies = (): Body[] => npcs.map((n, i) => ({ key: `taller-${n.id}`, x: n.x, z: n.z, body: LOOKS[n.id]?.body, seed: i * 7 + 3 }));
  // The meshes live under the scene, so World3D's traverse frees their
  // geometries and materials. Not reachable from here: the shared baker's
  // module-level material cache (la-feria-de-villaluz/bake3d.ts), which every
  // world that bakes reuses for the page's lifetime, and people3d's caches.
  function dispose() { propMeshes.clear(); }
  return { spots, npcs, stage, props, animate, bodies, dispose, people: () => npcs.length };
}
