// Realistic people for the 3D worlds. A scanned-proportion human body (made
// with MakeHuman, CC0) with a skeleton, skin, hair, clothes and face morphs is
// attached to a procedural person from people3d and follows it every frame:
// the procedural figure keeps deciding the pose, the gestures and the mood,
// and this module copies them onto the real body's bones and face. Every
// world that builds its people with createPerson gets them without changes.
// The models live in /public/mundo-real/gente (static assets, never in the
// Worker bundle).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';
import type { Person } from '../noche-abierta/people3d';

type PartName = keyof Person['parts'];
// Which procedural part turns each bone. Bones not listed keep their bind pose relative to their parent.
const DRIVERS: Record<string, { part: PartName; limb?: boolean; blend?: [PartName, number] }> = {
  pelvis: { part: 'hips' },
  spine_01: { part: 'hips', blend: ['torso', 0.3] },
  spine_02: { part: 'hips', blend: ['torso', 0.65] },
  spine_03: { part: 'torso' },
  neck_01: { part: 'torso', blend: ['head', 0.4] },
  head: { part: 'head' },
  upperarm_l: { part: 'armL', limb: true }, lowerarm_l: { part: 'foreL', limb: true },
  upperarm_r: { part: 'armR', limb: true }, lowerarm_r: { part: 'foreR', limb: true },
  thigh_l: { part: 'legL', limb: true }, calf_l: { part: 'shinL', limb: true },
  thigh_r: { part: 'legR', limb: true }, calf_r: { part: 'shinR', limb: true },
};
// Hip joint height of the procedural figure at scale 1 (thigh + shin + ankle).
const HIP_JOINT = 0.9, HIP_DROP = 0.05;
const HIDDEN_LAYER = 31;

export type Template = {
  scene: THREE.Object3D;
  /** Height of the hip joints above the ground in the model's own units. */
  hipHeight: number;
  /** Bind orientation of every bone relative to the model root, by bone name. */
  bind: Map<string, THREE.Quaternion>;
  /** Midpoint of the hip joints in the pelvis bone's own frame. */
  hipsInPelvis: THREE.Vector3;
};

const DOWN = new THREE.Vector3(0, -1, 0);

function fixMaterials(root: THREE.Object3D) {
  root.traverse(o => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const m = mesh.material as THREE.MeshStandardMaterial;
    const name = m.name.toLowerCase();
    // Skinned bounds are costly to keep right; people are culled by their own worlds.
    mesh.frustumCulled = false;
    if (/eyebrow|eyelash/.test(name)) { m.transparent = true; m.depthWrite = false; m.alphaTest = 0.02; }
    else if (/hair|bob|short|afro|ponytail|braid|long/.test(name)) { m.transparent = false; m.alphaTest = 0.4; m.side = THREE.DoubleSide; m.depthWrite = true; }
    else { m.transparent = false; m.depthWrite = true; m.alphaTest = 0; }
    m.metalness = 0;
    if (/body|skin/.test(name)) m.roughness = 0.55;
  });
}

export function prepareTemplate(scene: THREE.Object3D): Template {
  fixMaterials(scene);
  scene.updateMatrixWorld(true);
  const inverseRoot = new THREE.Quaternion().copy(scene.getWorldQuaternion(new THREE.Quaternion())).invert();
  const bind = new Map<string, THREE.Quaternion>();
  scene.traverse(o => { if ((o as THREE.Bone).isBone) bind.set(o.name, o.getWorldQuaternion(new THREE.Quaternion()).premultiply(inverseRoot)); });
  // Joint positions as the skin sees them (the skeleton and the skin do not share an origin in these files).
  let skinned: THREE.SkinnedMesh | null = null;
  scene.traverse(o => { if (!skinned && (o as THREE.SkinnedMesh).isSkinnedMesh) skinned = o as THREE.SkinnedMesh; });
  const { bones, boneInverses } = (skinned as unknown as THREE.SkinnedMesh).skeleton;
  const inverseOf = (name: string) => boneInverses[bones.findIndex(b => b.name === name)];
  const joint = (name: string) => new THREE.Vector3().setFromMatrixPosition(inverseOf(name).clone().invert());
  const hips = joint('thigh_l').add(joint('thigh_r')).multiplyScalar(0.5);
  // The models stand around their own origin: the floor is the lowest point of the shoes.
  let floor = Infinity;
  scene.traverse(o => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    floor = Math.min(floor, (mesh.geometry.boundingBox as THREE.Box3).min.y);
  });
  return { scene, hipHeight: hips.y - floor, bind, hipsInPelvis: hips.clone().applyMatrix4(inverseOf('pelvis')) };
}

const cache = new Map<string, Promise<Template>>();
export function loadTemplate(url: string) {
  let p = cache.get(url);
  if (!p) { p = new GLTFLoader().loadAsync(url).then(g => prepareTemplate(g.scene)); cache.set(url, p); }
  return p;
}

type Driven = {
  bone: THREE.Bone; parent: number; local: THREE.Quaternion;
  part?: THREE.Object3D; other?: THREE.Object3D; mix: number; offset: THREE.Quaternion;
  world: THREE.Quaternion;
};
type Face = { influences: number[]; index: Record<string, number> };

const qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), qRoot = new THREE.Quaternion();
const va = new THREE.Vector3(), vb = new THREE.Vector3();
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Puts a real body on a procedural person. The procedural meshes stop being drawn; props in the hands stay. */
export function attachRealBody(person: Person, template: Template) {
  const rig = person.rig;
  // Stop drawing the procedural figure (a layer no camera sees also keeps it out of shadows), but keep what the hands hold.
  const hands = [rig.handL, rig.handR];
  const props = new Set<THREE.Object3D>(rig.props.values());
  if (rig.handheld) props.add(rig.handheld);
  const carried = hands.map(h => h.children.filter(c => props.has(c)));
  const hide = (o: THREE.Object3D) => {
    if (props.has(o)) return;
    if ((o as THREE.Mesh).isMesh) o.layers.set(HIDDEN_LAYER);
    for (const c of o.children) hide(c);
  };
  hide(rig.body);

  const model = cloneSkinned(template.scene);
  const scale = (HIP_JOINT * rig.scale) / template.hipHeight;
  model.scale.setScalar(scale);
  model.traverse(o => { if ((o as THREE.Mesh).isMesh) { o.castShadow = true; o.receiveShadow = false; } });
  person.root.add(model);

  // Bones in hierarchy order, so a parent's orientation is known before its children's.
  const driven: Driven[] = [];
  const indexOf = new Map<THREE.Object3D, number>();
  model.traverse(o => {
    const bone = o as THREE.Bone;
    if (!bone.isBone) return;
    const d = DRIVERS[bone.name];
    const bindQ = template.bind.get(bone.name)!;
    const offset = bindQ.clone();
    if (d?.limb) offset.premultiply(new THREE.Quaternion().setFromUnitVectors(va.set(0, 1, 0).applyQuaternion(bindQ).normalize(), DOWN));
    indexOf.set(bone, driven.length);
    driven.push({
      bone, parent: indexOf.get(bone.parent as THREE.Object3D) ?? -1, local: bone.quaternion.clone(),
      part: d ? person.parts[d.part] : undefined, other: d?.blend ? person.parts[d.blend[0]] : undefined, mix: d?.blend?.[1] ?? 0,
      offset, world: new THREE.Quaternion(),
    });
  });
  const pelvis = driven.find(d => d.bone.name === 'pelvis')!;
  // The armature and its root bone do not move inside the model: their bind orientation relative to the person never changes.
  const baseWorld = pelvis.parent >= 0 ? template.bind.get(driven[pelvis.parent].bone.name)!.clone() : new THREE.Quaternion();

  // Hands: the things a person holds follow the real hands, keeping the orientation the pose gave them.
  const holds = hands.map((old, i) => {
    const g = new THREE.Group();
    g.scale.setScalar(rig.scale);
    person.root.add(g);
    for (const c of carried[i]) g.add(c);
    const bone = driven.find(d => d.bone.name === (i === 0 ? 'hand_l' : 'hand_r'))!.bone;
    return { group: g, old, bone };
  });
  rig.handL = holds[0].group; rig.handR = holds[1].group;

  const faces: Face[] = [];
  model.traverse(o => {
    const mesh = o as THREE.Mesh;
    if (mesh.isMesh && mesh.morphTargetDictionary && mesh.morphTargetInfluences) faces.push({ influences: mesh.morphTargetInfluences, index: mesh.morphTargetDictionary });
  });
  const setMorph = (name: string, value: number) => {
    for (const f of faces) { const i = f.index[name]; if (i !== undefined) f.influences[i] = value; }
  };

  const partQ = (part: THREE.Object3D, out: THREE.Quaternion) => {
    // Orientation relative to the person's root: walk up the few groups in between.
    out.copy(part.quaternion);
    for (let p = part.parent; p && p !== person.root; p = p.parent) out.premultiply(p.quaternion);
    return out;
  };

  const update = () => {
    for (const d of driven) {
      const parentWorld = d.parent >= 0 ? driven[d.parent].world : qRoot.identity();
      if (d.part) {
        partQ(d.part, d.world);
        if (d.other) d.world.slerp(partQ(d.other, qa), d.mix);
        d.world.multiply(d.offset);
        d.bone.quaternion.copy(qa.copy(parentWorld).invert()).multiply(d.world);
      } else if (d.parent < 0) d.world.copy(template.bind.get(d.bone.name)!);
      else d.world.copy(parentWorld).multiply(d.local);
    }
    // Pelvis: the real hip joints sit where the procedural ones are, so feet reach the floor and seats are sat on.
    const hips = person.parts.hips;
    rig.body.updateMatrix();
    va.set(0, -HIP_DROP, 0).applyQuaternion(hips.quaternion).add(hips.position).applyMatrix4(rig.body.matrix);
    vb.copy(template.hipsInPelvis).applyQuaternion(pelvis.world).multiplyScalar(scale);
    va.sub(vb).divideScalar(scale);
    pelvis.bone.position.copy(va.applyQuaternion(qb.copy(baseWorld).invert()));

    // Face.
    const n = rig.now;
    const blink = rig.blinking > 0 ? 1 : clamp(1 - n.eye, 0, 1);
    setMorph('blink', blink);
    setMorph('wide', clamp(n.eye - 1, 0, 1) * 1.6);
    setMorph('browUp', clamp(n.brow, 0, 1));
    setMorph('browDown', clamp(Math.max(-n.brow, -n.browIn), 0, 1));
    setMorph('browInner', clamp(n.browIn, 0, 1));
    setMorph('smile', clamp(n.smile, 0, 1));
    setMorph('frown', clamp(-n.smile, 0, 1));
    setMorph('open', clamp(n.open, 0, 1) * 0.55);
    setMorph('pucker', clamp(n.pucker, 0, 1));

    // Held things.
    for (const h of holds) {
      if (!h.group.children.length) continue;
      h.bone.updateWorldMatrix(true, false);
      person.root.worldToLocal(h.group.position.setFromMatrixPosition(h.bone.matrixWorld));
      partQ(h.old, h.group.quaternion);
    }
  };
  person.real = update;
  return model;
}
