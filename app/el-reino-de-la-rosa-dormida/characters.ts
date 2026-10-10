import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { animateHero, createHero } from '../noche-abierta/hero3d';

export type Prince = {
  root: THREE.Group;
  update(dt: number, speed: number, time: number, casting: boolean | number): void;
  dispose(): void;
};
export type Resident = {
  root: THREE.Group;
  update(dt: number, time: number, active: boolean): void;
};

// All sculpture is original procedural geometry. Static pieces are combined by
// material within each articulated joint; only the joints animate each frame.
const TAU = Math.PI * 2;
function mat(color: string, metalness = 0, roughness = 0.75) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness });
}
function glow(color: string, strength = 1) {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: strength, roughness: 0.5 });
}
function group(parent: THREE.Object3D, x = 0, y = 0, z = 0) {
  const result = new THREE.Group();
  result.position.set(x, y, z);
  parent.add(result);
  return result;
}
function part(parent: THREE.Object3D, geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0) {
  const result = new THREE.Mesh(geometry, material);
  result.position.set(x, y, z);
  result.castShadow = true;
  result.receiveShadow = true;
  parent.add(result);
  return result;
}
function oval(x: number, y: number, z: number, detail = 12) {
  return new THREE.SphereGeometry(1, detail, Math.max(6, Math.round(detail * 0.7))).scale(x, y, z);
}
function lathe(profile: [number, number][], segments = 16) {
  return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), segments);
}
function rod(parent: THREE.Object3D, material: THREE.Material, from: THREE.Vector3, to: THREE.Vector3, radius: number, tip = radius) {
  const delta = to.clone().sub(from);
  const result = part(parent, new THREE.CylinderGeometry(tip, radius, delta.length(), 8), material);
  result.position.copy(from).add(to).multiplyScalar(0.5);
  result.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
  return result;
}
function curve(parent: THREE.Object3D, material: THREE.Material, points: number[][], radius: number, segments = 14) {
  return part(parent, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))), segments, radius, 6, false), material);
}
function bake(parent: THREE.Object3D) {
  const buckets = new Map<THREE.Material, THREE.BufferGeometry[]>();
  for (const child of [...parent.children]) {
    if (!(child instanceof THREE.Mesh) || Array.isArray(child.material) || child.userData.animated) continue;
    child.updateMatrix();
    const transformed = child.geometry.clone().applyMatrix4(child.matrix);
    const geometry = transformed.index ? transformed.toNonIndexed() : transformed;
    if (geometry !== transformed) transformed.dispose();
    // All primitives use the same three vertex attributes.
    for (const name of Object.keys(geometry.attributes)) if (!['position', 'normal', 'uv'].includes(name)) geometry.deleteAttribute(name);
    const bucket = buckets.get(child.material) ?? [];
    bucket.push(geometry);
    buckets.set(child.material, bucket);
    child.geometry.dispose();
    parent.remove(child);
  }
  for (const [material, geometries] of buckets) {
    const geometry = mergeGeometries(geometries, false);
    geometries.forEach(item => item.dispose());
    if (geometry) part(parent, geometry, material);
  }
}
function bakeTree(root: THREE.Object3D) {
  for (const child of [...root.children]) if (child instanceof THREE.Group) bakeTree(child);
  bake(root);
}
function disposeTree(root: THREE.Object3D) {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const textures = new Set<THREE.Texture>();
  root.traverse(item => {
    if (!(item instanceof THREE.Mesh)) return;
    geometries.add(item.geometry);
    const list = Array.isArray(item.material) ? item.material : [item.material];
    list.forEach(material => {
      materials.add(material);
      for (const value of Object.values(material)) if (value instanceof THREE.Texture) textures.add(value);
    });
  });
  geometries.forEach(item => item.dispose());
  materials.forEach(item => item.dispose());
  textures.forEach(item => item.dispose());
  root.removeFromParent();
}
function rose(parent: THREE.Object3D, gold: THREE.Material, red: THREE.Material, x: number, y: number, z: number, size = 0.04) {
  for (let i = 0; i < 5; i++) {
    const angle = i * TAU / 5;
    part(parent, oval(size * 0.62, size * 0.8, size * 0.28, 8), red, x + Math.sin(angle) * size * 0.45, y + Math.cos(angle) * size * 0.45, z).rotation.z = -angle;
  }
  part(parent, new THREE.SphereGeometry(size * 0.26, 8, 6), gold, x, y, z + size * 0.3);
}

export function createPrince(): Prince {
  const hero = createHero(true);
  hero.root.name = 'Prince of the sleeping rose';
  hero.parts.pack.visible = false;
  // Retain the mascot's face, sculpted hair and full articulated locomotion.
  const recolors: Record<string, string> = { '161618': '#172447', '232327': '#bc9650', '111114': '#182035', '0c0c0d': '#b99a5c' };
  const seen = new Set<THREE.Material>();
  hero.root.traverse(item => {
    if (!(item instanceof THREE.Mesh)) return;
    const materials = Array.isArray(item.material) ? item.material : [item.material];
    materials.forEach(material => {
      if (seen.has(material)) return;
      seen.add(material);
      if (material instanceof THREE.MeshStandardMaterial && recolors[material.color.getHexString()]) material.color.set(recolors[material.color.getHexString()]);
    });
  });
  // The original pen is a separate group in the right palm.
  for (const child of hero.parts.handR.children) if (child instanceof THREE.Group) child.visible = false;

  const gold = mat('#d6ae63', 0.72, 0.3);
  const leather = mat('#352825', 0.1, 0.5);
  const navy = mat('#1b2b52');
  const ruby = mat('#9e304e', 0.25, 0.4);
  const silver = mat('#c3cfde', 0.85, 0.22);
  const amulet = glow('#79dfd2', 1.25);
  for (const side of [-1, 1]) {
    const arm = side < 0 ? hero.parts.armR : hero.parts.armL;
    part(arm, oval(0.091, 0.048, 0.087), gold, 0, 0.014);
    for (let i = 0; i < 4; i++) part(arm, new THREE.CapsuleGeometry(0.006, 0.07, 2, 6), gold, side * 0.052, -0.055, (i - 1.5) * 0.036);
    const fore = side < 0 ? hero.parts.foreR : hero.parts.foreL;
    part(fore, lathe([[0.043, -0.24], [0.05, -0.2], [0.055, -0.12], [0.052, -0.06]]), navy);
    part(fore, new THREE.TorusGeometry(0.045, 0.006, 6, 14), gold, 0, -0.238).rotation.x = Math.PI / 2;
    const shin = side < 0 ? hero.parts.shinR : hero.parts.shinL;
    part(shin, lathe([[0.057, -0.445], [0.059, -0.36], [0.066, -0.19], [0.069, -0.08]]), leather);
    part(shin, new THREE.TorusGeometry(0.069, 0.009, 6, 14), gold, 0, -0.085).rotation.x = Math.PI / 2;
  }
  const royal = group(hero.parts.torso);
  curve(royal, gold, [[-0.09, 0.55, 0.1], [-0.085, 0.4, 0.14], [0, 0.33, 0.15], [0.085, 0.4, 0.14], [0.09, 0.55, 0.1]], 0.006);
  rose(royal, gold, ruby, 0.083, 0.42, 0.146, 0.035);
  part(royal, new THREE.OctahedronGeometry(0.032), amulet, 0, 0.345, 0.17);
  const circlet = group(hero.parts.head, 0, 0.24);
  const crownBand = part(circlet, new THREE.TorusGeometry(0.121, 0.008, 6, 24), gold);
  crownBand.rotation.x = Math.PI / 2;
  crownBand.scale.y = 1.04;
  for (const x of [-0.062, 0, 0.062]) {
    part(circlet, new THREE.ConeGeometry(0.016, x === 0 ? 0.075 : 0.046, 4), gold, x, 0.027, 0.102);
    part(circlet, new THREE.OctahedronGeometry(0.009), ruby, x, 0.018, 0.117);
  }
  const sword = group(hero.parts.hips, -0.208, 0.07, 0.005);
  sword.rotation.z = -0.2;
  part(sword, lathe([[0.003, -0.79], [0.022, -0.75], [0.024, -0.14], [0.026, -0.11]], 6), navy).scale.z = 0.45;
  part(sword, new THREE.ConeGeometry(0.025, 0.09, 4), gold, 0, -0.755).rotation.z = Math.PI;
  part(sword, new THREE.CylinderGeometry(0.017, 0.017, 0.14, 8), leather, 0, -0.016);
  part(sword, new THREE.CapsuleGeometry(0.015, 0.16, 3, 8), gold, 0, -0.09).rotation.z = Math.PI / 2;
  part(sword, new THREE.OctahedronGeometry(0.027), ruby, 0, 0.07);
  part(sword, new THREE.CylinderGeometry(0.023, 0.025, 0.065, 8), silver, 0, -0.135);

  // A deforming grid with a fixed shoulder seam, broad scalloped hem and
  // length-dependent lag. This is cloth geometry, not a rigid cape primitive.
  const capeGeometry = new THREE.PlaneGeometry(1, 1, 12, 18);
  const capePosition = capeGeometry.getAttribute('position') as THREE.BufferAttribute;
  const capeRest = new Float32Array(capePosition.count * 3);
  const capeDrop = new Float32Array(capePosition.count);
  for (let i = 0; i < capePosition.count; i++) {
    const u = capePosition.getX(i) * 2;
    const t = 0.5 - capePosition.getY(i);
    const x = u * (0.17 + t * 0.3);
    const y = 0.52 - t * 1.32 + Math.cos(u * Math.PI * 3) * 0.026 * t * t;
    const z = -0.13 - t * 0.14 - Math.cos(u * Math.PI * 3) * 0.028 * t;
    capePosition.setXYZ(i, x, y, z);
    capeRest.set([x, y, z], i * 3);
    capeDrop[i] = t;
  }
  const capeMaterial = new THREE.MeshStandardMaterial({ color: '#172c56', side: THREE.DoubleSide, roughness: 0.92 });
  const cape = part(hero.parts.torso, capeGeometry, capeMaterial);
  cape.name = 'Wind animated royal cape';
  cape.userData.animated = true;
  cape.frustumCulled = false;
  capeGeometry.computeVertexNormals();
  for (const side of [-1, 1]) part(royal, new THREE.SphereGeometry(0.021, 10, 8), gold, side * 0.154, 0.5, 0.077);
  for (const joint of [royal, circlet, sword, hero.parts.armL, hero.parts.armR, hero.parts.foreL, hero.parts.foreR, hero.parts.shinL, hero.parts.shinR]) bake(joint);
  let castingBlend = 0;
  let normalFrame = 0;
  return {
    root: hero.root,
    update(dt, speed, time, casting) {
      animateHero(hero, Math.min(dt, 0.06), speed, 0, 'move');
      const strength = typeof casting === 'number' ? Math.max(0, Math.min(1, casting)) : casting ? 1 : 0;
      castingBlend = THREE.MathUtils.damp(castingBlend, strength, 12, dt);
      hero.parts.armR.rotation.x = THREE.MathUtils.lerp(hero.parts.armR.rotation.x, -1.08, castingBlend);
      hero.parts.foreR.rotation.x = THREE.MathUtils.lerp(hero.parts.foreR.rotation.x, -0.75, castingBlend);
      hero.parts.armR.rotation.z -= castingBlend * 0.16;
      amulet.emissiveIntensity = 1.1 + Math.sin(time * 2) * 0.3 + castingBlend * 3;
      for (let i = 0; i < capePosition.count; i++) {
        const t = capeDrop[i];
        const x = capeRest[i * 3];
        const wind = Math.sin(time * 4.1 - t * 5 + x * 4) * (0.022 + Math.min(speed, 8) * 0.006);
        capePosition.setXYZ(i, x + Math.sin(time * 2.4 - t * 3) * t * 0.027, capeRest[i * 3 + 1] + Math.min(speed, 8) * t * t * 0.03, capeRest[i * 3 + 2] - Math.min(speed, 8) * t * 0.055 + wind * t);
      }
      capePosition.needsUpdate = true;
      if (++normalFrame % 3 === 0) capeGeometry.computeVertexNormals();
    },
    dispose() { disposeTree(hero.root); },
  };
}

type HumanRig = { root: THREE.Group; body: THREE.Group; head: THREE.Group; left: THREE.Group; right: THREE.Group; cloth: THREE.Mesh; };
type HumanStyle = { dress: string; hair: string; skin?: string; skirt?: boolean; height?: number; width?: number; };
function human(style: HumanStyle): HumanRig {
  const root = new THREE.Group();
  const body = group(root);
  const skin = mat(style.skin ?? '#d6a17e', 0, 0.66);
  const clothMaterial = mat(style.dress);
  const hair = mat(style.hair);
  const brown = mat('#352624');
  const eye = mat('#20212b', 0, 0.4);
  const cream = mat('#e8d9b5');
  const head = group(body, 0, 1.47);
  const cloth = part(body, lathe(style.skirt ? [[0, 0.15], [0.34, 0.16], [0.32, 0.25], [0.23, 0.75], [0.15, 0.96], [0.185, 1.15], [0.22, 1.26], [0.16, 1.34], [0.055, 1.36]] : [[0, 0.77], [0.21, 0.8], [0.18, 0.99], [0.2, 1.17], [0.23, 1.26], [0.16, 1.34], [0.05, 1.36]]), clothMaterial);
  cloth.scale.z = 0.65;
  cloth.userData.animated = true;
  part(body, new THREE.CylinderGeometry(0.049, 0.055, 0.12, 12), skin, 0, 1.38);
  for (const side of [-1, 1]) {
    if (!style.skirt) part(body, lathe([[0.065, 0.1], [0.069, 0.42], [0.09, 0.72], [0.095, 0.88]]), brown, side * 0.1).scale.z = 0.9;
    part(body, oval(0.076, 0.062, 0.135), brown, side * 0.1, 0.08, 0.04);
    part(head, oval(0.025, 0.04, 0.026), skin, side * 0.119, -0.004, -0.007);
  }
  // A softly tapered jaw and a separate nape distinguish these from spheres
  // stacked into a snowman. Faces look forward in +z.
  const face = oval(0.123, 0.162, 0.117, 18);
  const positions = face.getAttribute('position');
  for (let i = 0; i < positions.count; i++) {
    const y = positions.getY(i);
    if (y < -0.018) positions.setX(i, positions.getX(i) * (1 + (y + 0.018) * 2.1));
  }
  face.computeVertexNormals();
  part(head, face, skin);
  part(head, oval(0.132, 0.116, 0.125), hair, 0, 0.072, -0.019);
  for (const side of [-1, 1]) {
    part(head, oval(0.035, 0.053, 0.036), hair, side * 0.101, 0.033, -0.026);
    part(head, oval(0.016, 0.01, 0.007, 8), cream, side * 0.047, 0.017, 0.109);
    part(head, oval(0.006, 0.008, 0.006, 8), eye, side * 0.047, 0.017, 0.115);
    part(head, new THREE.CapsuleGeometry(0.004, 0.028, 2, 6), hair, side * 0.047, 0.037, 0.109).rotation.z = side * 1.35;
  }
  part(head, oval(0.017, 0.03, 0.024, 10), skin, 0, -0.013, 0.116);
  part(head, new THREE.CapsuleGeometry(0.004, 0.029, 2, 8), mat('#a66559'), 0, -0.061, 0.101).rotation.z = Math.PI / 2;
  const arms = [-1, 1].map(side => {
    const arm = group(body, side * 0.21, 1.24);
    part(arm, lathe([[0.042, -0.39], [0.056, -0.29], [0.071, -0.06], [0.058, 0.04], [0, 0.055]]), clothMaterial);
    part(arm, lathe([[0.027, -0.53], [0.033, -0.46], [0.045, -0.35]]), skin);
    part(arm, oval(0.036, 0.058, 0.031), skin, 0, -0.55);
    part(arm, oval(0.014, 0.028, 0.016, 8), skin, -side * 0.028, -0.537, 0.015).rotation.z = side * 0.4;
    arm.rotation.z = side * 0.1;
    return arm;
  });
  root.scale.set(style.width ?? 1, style.height ?? 1, 1);
  return { root, body, head, left: arms[1], right: arms[0], cloth };
}

function humanResident(role: string): Resident {
  const styles: Record<string, HumanStyle> = {
    ines: { dress: '#a45c49', hair: '#472c23', skirt: true },
    bruno: { dress: '#625f64', hair: '#35271f', width: 1.17, height: 1.08, skin: '#ba845e' },
    aldren: { dress: '#354567', hair: '#573b28', height: 1.09 },
    celina: { dress: '#627c45', hair: '#a15b32', skirt: true, height: 0.97 },
    baltasar: { dress: '#685477', hair: '#c8c1ae', height: 1.04 },
    teobaldo: { dress: '#343e4c', hair: '#69452b', width: 1.05, height: 1.04 },
    tejedora: { dress: '#49365c', hair: '#c2ccd6', skirt: true, height: 1.16 },
  };
  const rig = human(styles[role] ?? styles.ines);
  const { root, body, head, left, right } = rig;
  root.name = role;
  const gold = mat('#c4a363', 0.65, 0.35);
  const cream = mat('#ece0c0');
  const leather = mat('#563b2e');
  const iron = mat('#788793', 0.7, 0.4);
  const wood = mat('#61412f');
  const trim = mat('#d5b17b');
  const accessory = group(body);
  if (role === 'ines' || role === 'bruno') {
    const apron = part(accessory, lathe([[0.19, 0.37], [0.2, 0.63], [0.15, 0.98], [0.16, 1.15]], 12), role === 'bruno' ? leather : cream, 0, 0, 0.09);
    apron.scale.z = 0.3;
    curve(accessory, trim, [[-0.08, 1.16, 0.13], [-0.075, 1.3, 0.11], [0, 1.35, 0.07], [0.075, 1.3, 0.11], [0.08, 1.16, 0.13]], 0.012);
  }
  if (role === 'ines') {
    part(head, oval(0.071, 0.076, 0.071), mat('#472c23'), 0, 0.042, -0.139);
    const tray = group(left, 0, -0.48, 0.18);
    part(tray, new THREE.CylinderGeometry(0.2, 0.2, 0.015, 20), wood);
    for (const x of [-0.075, 0.075]) {
      part(tray, new THREE.CylinderGeometry(0.044, 0.036, 0.1, 10), cream, x, 0.06);
      part(tray, new THREE.TorusGeometry(0.028, 0.008, 5, 10), cream, x + 0.041, 0.06).rotation.y = Math.PI / 2;
    }
    left.rotation.x = -0.85;
  } else if (role === 'bruno') {
    part(head, lathe([[0.0, -0.18], [0.066, -0.15], [0.085, -0.075], [0.1, -0.025]], 12), mat('#35271f'), 0, 0, 0.026).scale.z = 0.7;
    const hammer = group(right, 0, -0.54, 0.025);
    part(hammer, new THREE.CylinderGeometry(0.018, 0.016, 0.41, 8), wood, 0, -0.06);
    part(hammer, new THREE.CylinderGeometry(0.062, 0.062, 0.22, 8), iron, 0, 0.13).rotation.z = Math.PI / 2;
    right.rotation.x = -0.2;
  } else if (role === 'aldren') {
    part(accessory, oval(0.217, 0.22, 0.132), iron, 0, 1.12, 0.025);
    for (const side of [-1, 1]) part(accessory, oval(0.093, 0.063, 0.12), iron, side * 0.225, 1.25);
    part(head, new THREE.SphereGeometry(0.14, 16, 10, 0, TAU, 0, 1.4), iron, 0, 0.03);
    part(head, oval(0.023, 0.13, 0.1), mat('#92384e'), 0, 0.169, -0.013);
    const spear = group(right, -0.06, -0.65, 0.04);
    part(spear, new THREE.CylinderGeometry(0.016, 0.018, 1.75, 8), wood, 0, 0.48);
    part(spear, new THREE.ConeGeometry(0.061, 0.25, 4), iron, 0, 1.45).scale.z = 0.4;
    const shield = group(left, 0.05, -0.35, 0.13);
    part(shield, oval(0.19, 0.3, 0.045), gold);
    part(shield, oval(0.164, 0.271, 0.046), mat('#334f76'), 0, 0, 0.016);
    rose(shield, gold, mat('#9a4961'), 0, 0, 0.065, 0.072);
  } else if (role === 'celina') {
    const straw = mat('#baa268');
    part(head, new THREE.CylinderGeometry(0.233, 0.23, 0.024, 24), straw, 0, 0.127);
    part(head, lathe([[0.14, 0.12], [0.126, 0.19], [0.09, 0.25], [0, 0.26]]), straw);
    rose(head, gold, mat('#d27d94'), 0.095, 0.16, 0.112, 0.027);
    const basket = group(left, 0.07, -0.53, 0.07);
    part(basket, lathe([[0.07, -0.06], [0.13, 0.0], [0.13, 0.15]], 16), straw);
    part(basket, new THREE.TorusGeometry(0.12, 0.012, 6, 18, Math.PI), wood, 0, 0.12);
    for (const [x, z] of [[-0.06, 0], [0.05, 0.03], [0, -0.04]]) {
      part(basket, new THREE.SphereGeometry(0.048, 8, 6), mat('#ba5863'), x, 0.15, z);
      part(basket, oval(0.045, 0.06, 0.015, 8), mat('#779c56'), x, 0.18, z - 0.014);
    }
  } else if (role === 'baltasar') {
    part(head, lathe([[0, -0.31], [0.065, -0.16], [0.098, -0.06]], 12), cream, 0, 0, 0.05).scale.z = 0.65;
    for (const side of [-1, 1]) part(head, new THREE.TorusGeometry(0.03, 0.003, 5, 12), gold, side * 0.049, 0.015, 0.125);
    rod(head, gold, new THREE.Vector3(-0.02, 0.018, 0.125), new THREE.Vector3(0.02, 0.018, 0.125), 0.003);
    const book = group(left, -0.04, -0.43, 0.15);
    book.rotation.set(-0.28, 0, 0.12);
    const pages = part(book, new THREE.BoxGeometry(0.27, 0.075, 0.21), cream);
    pages.rotation.z = -0.1;
    for (const y of [-0.044, 0.044]) part(book, new THREE.BoxGeometry(0.3, 0.012, 0.235), mat('#65313c'), 0, y);
    left.rotation.x = -0.72;
  } else if (role === 'teobaldo') {
    // The royal steward wears a fitted waistcoat, ceremonial chain and gloves.
    part(accessory, oval(0.115, 0.245, 0.035), cream, 0, 1.03, 0.132);
    for (const side of [-1, 1]) part(accessory, oval(0.043, 0.025, 0.023), mat('#343e4c'), side * 0.036, 1.29, 0.145).rotation.z = side * .32;
    for (const y of [.92, 1.04, 1.16]) part(accessory, new THREE.SphereGeometry(.012, 8, 6), gold, 0, y, .168);
    curve(accessory, gold, [[-.11, .92, .16], [-.03, .84, .174], [.1, .93, .154]], .006);
    part(accessory, new THREE.TorusGeometry(.036, .009, 5, 14), gold, -.11, .92, .173);
    for (const side of [-1, 1]) part(head, oval(0.034, 0.009, 0.012, 8), mat('#69452b'), side * 0.023, -0.041, 0.117).rotation.z = -side * 0.25;
    const tray = group(right, 0, -.48, .17);
    part(tray, new THREE.CylinderGeometry(.23, .23, .022, 24), iron);
    part(tray, new THREE.CylinderGeometry(.06, .035, .15, 12), gold, .05, .09);
    right.rotation.x = -.8;
  } else if (role === 'tejedora') {
    // Long silver hair, branching crown and the wheel-like head of her staff.
    part(head, oval(0.143, 0.3, 0.1), mat('#bfc9d4'), 0, -0.102, -0.096);
    for (const side of [-1, 1]) {
      curve(head, gold, [[side * 0.06, 0.1, 0], [side * 0.14, 0.2, -0.01], [side * 0.17, 0.36, -0.04]], 0.008);
      curve(head, gold, [[side * 0.13, 0.2, -0.01], [side * 0.21, 0.28, 0.02], [side * 0.23, 0.32, 0.02]], 0.005);
    }
    const staff = group(right, -0.07, -0.6, 0.06);
    part(staff, new THREE.CylinderGeometry(0.017, 0.025, 1.45, 9), wood, 0, 0.35);
    part(staff, new THREE.TorusGeometry(0.13, 0.014, 7, 24), gold, 0, 1.13);
    const moon = glow('#b688d5', 1.2);
    part(staff, new THREE.OctahedronGeometry(0.047), moon, 0, 1.13);
    for (let i = 0; i < 8; i++) {
      const a = i * TAU / 8;
      rod(staff, gold, new THREE.Vector3(0, 1.13, 0), new THREE.Vector3(Math.cos(a) * 0.123, 1.13 + Math.sin(a) * 0.123, 0), 0.003);
    }
    curve(accessory, gold, [[-0.12, 1.28, 0.13], [0, 1.03, 0.15], [0.12, 1.28, 0.13]], 0.008);
  }
  bakeTree(root);
  const armX = right.rotation.x;
  const leftX = left.rotation.x;
  return { root, update(_dt, time, active) {
    const phase = time + role.length * 1.37;
    body.position.y = Math.sin(phase * 1.65) * 0.007;
    rig.cloth.scale.y = 1 + Math.sin(phase * 1.65) * 0.004;
    head.rotation.y = Math.sin(phase * 0.47) * (active ? 0.11 : 0.065);
    head.rotation.z = Math.sin(phase * 0.73) * 0.018;
    right.rotation.x = armX + Math.sin(phase * (active ? 2.1 : 0.8)) * (active ? 0.1 : 0.025);
    left.rotation.x = leftX + Math.sin(phase * 0.9 + 1) * 0.023;
  } };
}

function crow(): Resident {
  const root = new THREE.Group(); root.name = 'nox';
  const body = group(root, 0, 0.52);
  const ink = mat('#171925', 0.2, 0.56);
  const feather = mat('#303048', 0.28, 0.5);
  const beak = mat('#42435a', 0.2, 0.55);
  const amber = glow('#eac272', 0.4);
  part(body, oval(0.19, 0.26, 0.24), ink, 0, 0.02).rotation.x = -0.24;
  const head = group(body, 0, 0.28, 0.11);
  part(head, oval(0.137, 0.143, 0.134), ink);
  part(head, new THREE.ConeGeometry(0.053, 0.2, 5), beak, 0, -0.013, 0.192).rotation.x = Math.PI / 2;
  for (const side of [-1, 1]) {
    part(head, new THREE.SphereGeometry(0.015, 10, 8), amber, side * 0.113, 0.02, 0.063);
    part(head, new THREE.SphereGeometry(0.008, 8, 6), ink, side * 0.121, 0.02, 0.065);
    curve(root, beak, [[side * 0.07, 0.38, 0.01], [side * 0.065, 0.19, 0.02], [side * 0.07, 0.11, 0.085]], 0.013);
    for (let i = -1; i <= 1; i++) rod(root, beak, new THREE.Vector3(side * 0.07, 0.11, 0.085), new THREE.Vector3(side * 0.07 + i * 0.038, 0.08, 0.17), 0.01, 0.006);
  }
  for (let i = -2; i <= 2; i++) part(body, oval(0.038, 0.04, 0.235), feather, i * 0.048, -0.115, -0.23).rotation.y = i * -0.13;
  const wings = [-1, 1].map(side => {
    const wing = group(body, side * 0.145, 0.065, -0.035);
    part(wing, oval(0.065, 0.21, 0.13), feather, side * 0.025, -0.075, -0.03).rotation.z = side * 0.16;
    for (let i = 0; i < 5; i++) part(wing, oval(0.03, 0.21 - i * 0.016, 0.029), ink, side * (0.01 + i * 0.025), -0.16, -0.076 + i * 0.037).rotation.z = side * (-0.16 - i * 0.06);
    return wing;
  });
  const ribbon = mat('#925070');
  part(body, new THREE.TorusGeometry(0.104, 0.018, 6, 16), ribbon, 0, 0.2, 0.1).rotation.x = Math.PI / 2;
  part(body, new THREE.OctahedronGeometry(0.027), amber, 0, 0.174, 0.206);
  bakeTree(root);
  return { root, update(_dt, time, active) {
    body.position.y = 0.52 + Math.sin(time * 2.4) * 0.009;
    head.rotation.y = Math.sin(time * 0.91) * 0.35;
    head.rotation.z = Math.sin(time * 1.7) * 0.09;
    wings.forEach((wing, i) => { wing.rotation.z = (i === 0 ? -1 : 1) * (0.04 + (active ? Math.max(0, Math.sin(time * 3.4)) * 0.45 : Math.sin(time * 1.3) * 0.03)); });
  } };
}

function fairy(): Resident {
  const rig = human({ dress: '#7ba5a4', hair: '#f1ddad', skin: '#e8c2ad', skirt: true });
  const { root, body, head } = rig;
  root.name = 'liora';
  body.scale.setScalar(0.48);
  body.position.y = 0.32;
  const gold = mat('#e4c982', 0.6, 0.3);
  const wingMaterial = new THREE.MeshStandardMaterial({ color: '#a7dbd1', emissive: '#4f9c95', emissiveIntensity: 0.4, transparent: true, opacity: 0.63, side: THREE.DoubleSide, depthWrite: false, roughness: 0.35 });
  const vein = glow('#d8ece0', 0.3);
  const wings = [-1, 1].map(side => {
    const wing = group(body, side * 0.08, 1.2, -0.1);
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(side * 0.16, 0.26, side * 0.74, 0.64, side * 0.8, 0.37);
    shape.bezierCurveTo(side * 0.91, 0.09, side * 0.38, -0.06, 0, 0);
    part(wing, new THREE.ShapeGeometry(shape, 14), wingMaterial);
    const lower = new THREE.Shape();
    lower.moveTo(0, 0);
    lower.bezierCurveTo(side * 0.42, -0.02, side * 0.58, -0.27, side * 0.44, -0.45);
    lower.bezierCurveTo(side * 0.25, -0.56, side * 0.03, -0.14, 0, 0);
    part(wing, new THREE.ShapeGeometry(lower, 12), wingMaterial);
    for (let i = 0; i < 3; i++) curve(wing, vein, [[0, 0, 0.004], [side * 0.34, 0.12 + i * 0.04, 0.006], [side * (0.65 + i * 0.055), 0.15 + i * 0.1, 0.004]], 0.003);
    curve(wing, vein, [[0, 0, 0.004], [side * 0.22, -0.14, 0.006], [side * 0.4, -0.38, 0.004]], 0.003);
    return wing;
  });
  for (let i = 0; i < 7; i++) {
    const a = i * TAU / 7;
    part(head, new THREE.OctahedronGeometry(0.022), gold, Math.cos(a) * 0.116, 0.12, Math.sin(a) * 0.116);
  }
  const wand = group(rig.right, 0, -0.55, 0.02);
  part(wand, new THREE.CylinderGeometry(0.009, 0.01, 0.43, 6), gold, 0, 0.11);
  const star = part(wand, new THREE.OctahedronGeometry(0.055), glow('#fff0be', 1.7), 0, 0.35);
  rig.right.rotation.x = -0.7;
  bakeTree(root);
  // The star was batched into the wand. Keep animation on the articulated wand.
  void star;
  return { root, update(_dt, time, active) {
    body.position.y = 0.32 + Math.sin(time * 2.2) * 0.085;
    body.rotation.z = Math.sin(time * 1.1) * 0.035;
    wings.forEach((wing, i) => { wing.rotation.y = (i === 0 ? -1 : 1) * (0.33 + Math.sin(time * 11) * 0.36); });
    rig.head.rotation.y = Math.sin(time * 0.8) * 0.2;
    rig.right.rotation.x = -0.7 + Math.sin(time * (active ? 3 : 1.3)) * 0.13;
  } };
}

function proceduralDragon(): Resident {
  const root = new THREE.Group(); root.name = 'brum';
  const body = group(root);
  const green = mat('#425e57', 0.12, 0.75);
  const scale = mat('#608177', 0.1, 0.63);
  const belly = mat('#b0a687');
  const horn = mat('#c1b197', 0.15, 0.58);
  const membrane = mat('#8a655c', 0.05, 0.88);
  membrane.side = THREE.DoubleSide;
  const eye = glow('#e6b25c', 0.6);
  const black = mat('#182522');
  part(body, oval(0.69, 0.74, 1.08, 18), green, 0, 1.0, -0.23);
  part(body, oval(0.47, 0.66, 0.61, 16), belly, 0, 1.01, 0.42);
  part(body, oval(0.39, 0.71, 0.37, 16), green, 0, 1.59, 0.48).rotation.x = -0.27;
  const head = group(body, 0, 2.1, 0.73);
  part(head, oval(0.4, 0.3, 0.49, 18), green);
  part(head, oval(0.34, 0.18, 0.44), scale, 0, -0.075, 0.37);
  part(head, oval(0.285, 0.08, 0.35), belly, 0, -0.212, 0.34);
  for (const side of [-1, 1]) {
    part(head, oval(0.053, 0.036, 0.027), black, side * 0.18, -0.014, 0.746);
    part(head, oval(0.067, 0.063, 0.027), eye, side * 0.306, 0.082, 0.227).rotation.y = side * 0.7;
    part(head, oval(0.014, 0.048, 0.029), black, side * 0.321, 0.085, 0.244).rotation.y = side * 0.7;
    part(head, oval(0.105, 0.036, 0.108), scale, side * 0.275, 0.145, 0.204).rotation.z = side * -0.2;
    curve(head, horn, [[side * 0.25, 0.17, -0.15], [side * 0.39, 0.34, -0.24], [side * 0.36, 0.53, -0.37]], 0.055);
    part(head, new THREE.ConeGeometry(0.056, 0.18, 8), horn, side * 0.36, 0.52, -0.36).rotation.x = -0.5;
    const ear = part(head, new THREE.ConeGeometry(0.14, 0.3, 5), green, side * 0.4, 0.07, -0.16);
    ear.rotation.z = -side * 1.0; ear.scale.z = 0.3;
    const haunch = group(body, side * 0.58, 0.57, -0.64);
    part(haunch, oval(0.35, 0.49, 0.42), green);
    part(haunch, oval(0.24, 0.17, 0.43), scale, side * 0.02, -0.36, 0.22);
    const fore = group(body, side * 0.45, 0.85, 0.49);
    part(fore, oval(0.17, 0.45, 0.19), green, side * 0.01, -0.19, 0.09).rotation.x = -0.2;
    part(fore, oval(0.21, 0.135, 0.31), scale, side * 0.02, -0.61, 0.25);
    for (let i = -1; i <= 1; i++) {
      part(haunch, new THREE.ConeGeometry(0.043, 0.17, 6), horn, i * 0.13, -0.385, 0.61).rotation.x = Math.PI / 2;
      part(fore, new THREE.ConeGeometry(0.035, 0.15, 6), horn, i * 0.115, -0.625, 0.55).rotation.x = Math.PI / 2;
    }
  }
  const tail = group(body, 0, 0.82, -1.0);
  const tailPath = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.14, -0.23, -0.53), new THREE.Vector3(0.58, -0.5, -1.04), new THREE.Vector3(1.05, -0.53, -1.31), new THREE.Vector3(1.42, -0.31, -1.23)]);
  const tailGeometry = new THREE.TubeGeometry(tailPath, 24, 1, 10, false);
  const tailPosition = tailGeometry.getAttribute('position');
  for (let i = 0; i < tailPosition.count; i++) {
    const t = Math.floor(i / 11) / 24;
    const center = tailPath.getPointAt(t);
    const radius = 0.29 * (1 - t) + 0.018;
    tailPosition.setXYZ(i, center.x + (tailPosition.getX(i) - center.x) * radius, center.y + (tailPosition.getY(i) - center.y) * radius, center.z + (tailPosition.getZ(i) - center.z) * radius);
  }
  tailGeometry.computeVertexNormals();
  part(tail, tailGeometry, green);
  for (let i = 0; i < 7; i++) {
    const t = i / 7;
    part(body, new THREE.ConeGeometry(0.1 - t * 0.035, 0.29 - t * 0.12, 5), horn, 0, 1.77 - t * 0.38, 0.2 - t * 1.4);
  }
  const wings = [-1, 1].map(side => {
    const wing = group(body, side * 0.43, 1.52, -0.28);
    const points = [[0, 0], [side * 0.57, 0.92], [side * 1.92, 0.62], [side * 1.41, -0.02], [side * 1.13, 0.08], [side * 0.86, -0.38], [side * 0.58, -0.23], [side * 0.25, -0.53]];
    const shape = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x, y)));
    part(wing, new THREE.ShapeGeometry(shape), membrane);
    const start = new THREE.Vector3(0, 0, 0);
    const elbow = new THREE.Vector3(side * 0.57, 0.92, 0.012);
    rod(wing, green, start, elbow, 0.075, 0.052);
    for (const index of [2, 3, 5, 7]) rod(wing, scale, elbow, new THREE.Vector3(points[index][0], points[index][1], 0.012), 0.035, 0.013);
    wing.rotation.y = -side * 0.39;
    return wing;
  });
  bakeTree(root);
  return { root, update(_dt, time, active) {
    body.position.y = Math.sin(time * 1.1) * 0.025;
    head.rotation.y = Math.sin(time * 0.37) * 0.14;
    head.rotation.x = Math.sin(time * 0.71) * 0.028 + (active ? -0.07 : 0.025);
    tail.rotation.y = Math.sin(time * 0.72) * 0.13;
    wings.forEach((wing, i) => { const side = i === 0 ? -1 : 1; wing.rotation.y = -side * (0.39 + Math.sin(time * 0.85) * 0.07); wing.rotation.z = side * Math.sin(time * 0.85) * 0.035; });
  } };
}

function dragon(): Resident {
  const fallback = proceduralDragon();
  const root = new THREE.Group();
  root.name = 'brum';
  root.add(fallback.root);
  let released = false;
  let mixer: THREE.AnimationMixer | undefined;
  let model: THREE.Group | undefined;
  let idle: THREE.AnimationAction | undefined;
  let flying: THREE.AnimationAction | undefined;
  let agitation = 0;
  // This original sculpture stays visible while the self-contained CC0 model
  // loads, and remains usable if the network is unavailable.
  new GLTFLoader().load('/reino/assets/dragon.glb', gltf => {
    if (released) { disposeTree(gltf.scene); return; }
    model = gltf.scene;
    model.name = 'Quaternius rigged dragon';
    model.scale.setScalar(1.13);
    model.rotation.y = Math.PI;
    const bounds = new THREE.Box3().setFromObject(model);
    const center = bounds.getCenter(new THREE.Vector3());
    model.position.set(-center.x, -bounds.min.y + 0.1, -center.z);
    model.traverse(object => {
      if (object instanceof THREE.Mesh) { object.castShadow = true; object.receiveShadow = true; object.frustumCulled = false; }
    });
    root.add(model);
    disposeTree(fallback.root);
    mixer = new THREE.AnimationMixer(model);
    const idleClip = gltf.animations.find(clip => clip.name.endsWith('|Flying_Idle'));
    const flyingClip = gltf.animations.find(clip => clip.name.endsWith('|Fast_Flying'));
    if (idleClip) idle = mixer.clipAction(idleClip).play();
    if (flyingClip) flying = mixer.clipAction(flyingClip).setEffectiveWeight(0).play();
    root.userData.assetLoaded = true;
  }, undefined, () => {
    // A missing optional asset must never prevent playing the story.
    root.userData.assetLoaded = false;
  });
  root.userData.dispose = () => {
    released = true;
    if (mixer && model) { mixer.stopAllAction(); mixer.uncacheRoot(model); }
  };
  return { root, update(dt, time, active) {
    const calm = Boolean(root.userData.calm);
    if (!mixer) { fallback.update(dt, time, active && !calm); return; }
    agitation = THREE.MathUtils.damp(agitation, active && !calm ? 0.58 : 0, 2.4, dt);
    idle?.setEffectiveWeight(1 - agitation);
    flying?.setEffectiveWeight(agitation);
    mixer.timeScale = calm ? 0.55 : 0.7;
    mixer.update(Math.min(dt, 0.06));
    if (model) model.rotation.y = Math.PI + Math.sin(time * 0.31) * (calm ? 0.045 : 0.085);
  } };
}

function princess(): Resident {
  const root = new THREE.Group(); root.name = 'elara';
  const rig = human({ dress: '#bda2bb', hair: '#c99b5c', skin: '#e8c0ab', skirt: true });
  root.add(rig.root);
  // The princess lies face up, with her head toward -z. The world can place
  // this root directly on its bed or dais; her back is at root y = 0.
  rig.root.rotation.x = -Math.PI / 2;
  rig.root.position.set(0, 0.16, 0.8);
  const gold = mat('#d7ba7b', 0.6, 0.35);
  const ivory = mat('#e8dace');
  const hair = mat('#c99b5c');
  const sleep = mat('#865f59');
  for (const side of [-1, 1]) {
    part(rig.head, oval(0.052, 0.2, 0.042), hair, side * 0.12, -0.12, -0.035).rotation.z = side * 0.13;
    // Closed eyelids cover the open eyes of the shared sculpt.
    part(rig.head, oval(0.026, 0.018, 0.011, 10), mat('#e8c0ab'), side * 0.047, 0.017, 0.12);
    part(rig.head, new THREE.TorusGeometry(0.022, 0.002, 4, 12, 1.55), sleep, side * 0.047, 0.025, 0.129).rotation.z = 3.9;
  }
  const circlet = part(rig.head, new THREE.TorusGeometry(0.13, 0.007, 6, 20), gold, 0, 0.091);
  circlet.rotation.x = Math.PI / 2;
  for (const x of [-0.065, 0, 0.065]) part(rig.head, new THREE.ConeGeometry(0.017, x ? 0.055 : 0.079, 4), gold, x, 0.12, 0.113);
  curve(rig.body, ivory, [[-0.15, 1.27, 0.1], [-0.08, 1.18, 0.145], [0, 1.16, 0.15], [0.08, 1.18, 0.145], [0.15, 1.27, 0.1]], 0.012);
  rig.left.rotation.set(-0.33, 0, 0.37);
  rig.right.rotation.set(-0.32, 0, -0.37);
  const flower = group(rig.body, 0, 0.73, 0.26);
  curve(flower, mat('#647c51'), [[0, -0.12, 0], [0.018, 0.05, 0.01], [0, 0.2, 0]], 0.009);
  rose(flower, gold, mat('#a94c69'), 0, 0.2, 0, 0.066);
  bakeTree(root);
  return { root, update(_dt, time) {
    rig.cloth.scale.z = 0.65 + Math.sin(time * 1.1) * 0.005;
    rig.head.rotation.y = Math.sin(time * 0.32) * 0.008;
  } };
}

export function createResident(role: string): Resident {
  const key = role.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (key === 'nox' || key === 'crow') return crow();
  if (key === 'liora' || key === 'fairy') return fairy();
  if (key === 'brum' || key === 'dragon') return dragon();
  if (key === 'elara' || key === 'princess') return princess();
  return humanResident(key);
}
