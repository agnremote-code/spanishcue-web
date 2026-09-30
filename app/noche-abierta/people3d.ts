// Procedural low-poly people for Noche Abierta: an articulated adult figure
// (hips, torso, head, two-segment arms and legs) built from simple shapes and
// animated in code. Original geometry, no external models.
import * as THREE from 'three';

export type Look = { shirt: string; pants?: string; hair: string; skin: string; shoes?: string };
export type Person = {
  root: THREE.Group;
  parts: {
    hips: THREE.Group; torso: THREE.Group; head: THREE.Group;
    armL: THREE.Group; armR: THREE.Group; foreL: THREE.Group; foreR: THREE.Group;
    legL: THREE.Group; legR: THREE.Group; shinL: THREE.Group; shinR: THREE.Group;
  };
  phase: number;
  seated: boolean;
};

const materialCache = new Map<string, THREE.MeshStandardMaterial>();
function mat(color: string, roughness = 0.8) {
  const key = `${color}-${roughness}`;
  let value = materialCache.get(key);
  if (!value) {
    value = new THREE.MeshStandardMaterial({ color, roughness, metalness: 0 });
    materialCache.set(key, value);
  }
  return value;
}

const capsule = (radius: number, length: number) => new THREE.CapsuleGeometry(radius, length, 4, 10);
function limb(geometry: THREE.BufferGeometry, material: THREE.Material, length: number, shadows: boolean) {
  const pivot = new THREE.Group();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = -length / 2;
  mesh.castShadow = shadows;
  pivot.add(mesh);
  return pivot;
}

// About 1.75 m tall. The root's origin is between the feet.
export function createPerson(look: Look, shadows = true): Person {
  const skin = mat(look.skin, 0.6);
  const shirt = mat(look.shirt);
  const pants = mat(look.pants ?? '#2d3440');
  const hair = mat(look.hair, 0.9);
  const shoes = mat(look.shoes ?? '#1c1c1e', 0.5);

  const root = new THREE.Group();
  const hips = new THREE.Group();
  hips.position.y = 0.95;
  root.add(hips);

  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.2), pants);
  pelvis.castShadow = shadows;
  hips.add(pelvis);

  const torso = new THREE.Group();
  torso.position.y = 0.06;
  hips.add(torso);
  const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.56, 10), shirt);
  chest.scale.z = 0.62;
  chest.position.y = 0.3;
  chest.castShadow = shadows;
  torso.add(chest);
  const shoulders = new THREE.Mesh(capsule(0.08, 0.3), shirt);
  shoulders.rotation.z = Math.PI / 2;
  shoulders.position.y = 0.54;
  shoulders.castShadow = shadows;
  torso.add(shoulders);

  const head = new THREE.Group();
  head.position.y = 0.64;
  torso.add(head);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.1, 8), skin);
  neck.position.y = 0.03;
  head.add(neck);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.115, 16, 12), skin);
  skull.scale.set(0.92, 1.1, 1);
  skull.position.y = 0.19;
  skull.castShadow = shadows;
  head.add(skull);
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.122, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
  hairCap.scale.set(0.95, 1.08, 1.04);
  hairCap.position.set(0, 0.215, -0.012);
  head.add(hairCap);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.05, 6), skin);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.18, 0.115);
  head.add(nose);

  const makeArm = (side: 1 | -1) => {
    const arm = limb(capsule(0.052, 0.24), shirt, 0.3, shadows);
    arm.position.set(0.22 * side, 0.52, 0);
    torso.add(arm);
    const fore = limb(capsule(0.045, 0.22), skin, 0.28, shadows);
    fore.position.y = -0.3;
    arm.add(fore);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.048, 8, 6), skin);
    hand.position.y = -0.3;
    fore.add(hand);
    return { arm, fore };
  };
  const left = makeArm(-1);
  const right = makeArm(1);

  const makeLeg = (side: 1 | -1) => {
    const leg = limb(capsule(0.075, 0.34), pants, 0.44, shadows);
    leg.position.set(0.1 * side, -0.04, 0);
    hips.add(leg);
    const shin = limb(capsule(0.06, 0.36), pants, 0.44, shadows);
    shin.position.y = -0.44;
    leg.add(shin);
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.07, 0.25), shoes);
    shoe.position.set(0, -0.46, 0.05);
    shoe.castShadow = shadows;
    shin.add(shoe);
    return { leg, shin };
  };
  const legL = makeLeg(-1);
  const legR = makeLeg(1);

  return {
    root,
    parts: { hips, torso, head, armL: left.arm, armR: right.arm, foreL: left.fore, foreR: right.fore, legL: legL.leg, legR: legR.leg, shinL: legL.shin, shinR: legR.shin },
    phase: Math.random() * 6,
    seated: false,
  };
}

// speed in m/s: 0 idle, ~2.4 walk, ~5 run. `talk` adds a small gesture.
export function animatePerson(person: Person, dt: number, speed: number, talk = false) {
  const p = person.parts;
  if (person.seated) {
    p.hips.position.y = 0.52;
    p.legL.rotation.x = p.legR.rotation.x = -Math.PI / 2;
    p.shinL.rotation.x = p.shinR.rotation.x = Math.PI / 2;
    person.phase += dt * 1.4;
    p.armL.rotation.x = -0.5 + Math.sin(person.phase) * (talk ? 0.15 : 0.03);
    p.armR.rotation.x = -0.6;
    p.foreL.rotation.x = p.foreR.rotation.x = -0.6;
    p.head.rotation.y = Math.sin(person.phase * 0.4) * 0.25;
    return;
  }
  const moving = speed > 0.1;
  const running = speed > 3.4;
  person.phase += dt * (moving ? speed * (running ? 2.3 : 3.3) : 1.2);
  const t = person.phase;
  if (moving) {
    const swing = running ? 0.95 : 0.55;
    p.legL.rotation.x = Math.sin(t) * swing;
    p.legR.rotation.x = -Math.sin(t) * swing;
    p.shinL.rotation.x = Math.max(0, -Math.cos(t)) * (running ? 1.3 : 0.75);
    p.shinR.rotation.x = Math.max(0, Math.cos(t)) * (running ? 1.3 : 0.75);
    p.armL.rotation.x = -Math.sin(t) * swing * 0.8;
    p.armR.rotation.x = Math.sin(t) * swing * 0.8;
    p.foreL.rotation.x = p.foreR.rotation.x = running ? -1.2 : -0.35;
    p.hips.position.y = 0.95 + Math.abs(Math.sin(t)) * (running ? 0.07 : 0.035) - (running ? 0.04 : 0);
    p.torso.rotation.x = running ? 0.18 : 0.04;
    p.torso.rotation.y = Math.sin(t) * 0.08;
    p.head.rotation.y = 0;
  } else {
    const ease = Math.min(1, dt * 8);
    for (const part of [p.legL, p.legR, p.shinL, p.shinR, p.armR]) part.rotation.x += (0 - part.rotation.x) * ease;
    p.torso.rotation.x += (0 - p.torso.rotation.x) * ease;
    p.torso.rotation.y += (0 - p.torso.rotation.y) * ease;
    p.hips.position.y = 0.95 + Math.sin(t) * 0.006;
    p.armL.rotation.x = talk ? -0.5 + Math.sin(t * 2.2) * 0.25 : p.armL.rotation.x + (0 - p.armL.rotation.x) * ease;
    p.foreL.rotation.x = talk ? -0.9 : p.foreL.rotation.x + (-0.12 - p.foreL.rotation.x) * ease;
    p.foreR.rotation.x += (-0.12 - p.foreR.rotation.x) * ease;
    p.armL.rotation.z = -0.06;
    p.armR.rotation.z = 0.06;
    p.head.rotation.y = talk ? Math.sin(t * 0.9) * 0.2 : Math.sin(t * 0.3) * 0.08;
  }
}
