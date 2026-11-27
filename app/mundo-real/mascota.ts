// The SpanishCue mascot as a real 3D person: a rigged GLB (Mixamo-style
// skeleton, 1.80 m, face morphs) built from the official turnaround art
// (scripts/mundo-real/mascota/). It is put on the procedural hero of a world
// and follows it every frame: the hero keeps deciding the walk, the run, the
// seat and the gestures, and this module copies the pose onto the real bones
// and the blinks onto the face. The procedural meshes stop being drawn;
// whatever the hero holds in its hands stays visible. The model lives in
// /public/mundo-real/mascota (a static asset, never in the Worker bundle).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import type { Hero } from '../noche-abierta/hero3d';

export const MASCOTA_URL = '/mundo-real/mascota/mascota.glb';

type PartName = keyof Hero['parts'];
// GLTFLoader drops the colon of «mixamorig:Hips» from node names, so bones are looked up without it.
const M = 'mixamorig';
const key = (name: string) => name.replace(/:/g, '');
// Which part of the hero turns each bone. Bones not listed keep their bind pose relative to their parent.
const DRIVERS: Record<string, { part: PartName; limb?: boolean; blend?: [PartName, number] }> = {
  [`${M}Hips`]: { part: 'hips' },
  [`${M}Spine`]: { part: 'hips', blend: ['torso', 0.3] },
  [`${M}Spine1`]: { part: 'hips', blend: ['torso', 0.65] },
  [`${M}Spine2`]: { part: 'torso' },
  [`${M}Neck`]: { part: 'torso', blend: ['head', 0.4] },
  [`${M}Head`]: { part: 'head' },
  [`${M}LeftArm`]: { part: 'armL', limb: true }, [`${M}LeftForeArm`]: { part: 'foreL', limb: true },
  [`${M}RightArm`]: { part: 'armR', limb: true }, [`${M}RightForeArm`]: { part: 'foreR', limb: true },
  [`${M}LeftUpLeg`]: { part: 'legL', limb: true }, [`${M}LeftLeg`]: { part: 'shinL', limb: true },
  [`${M}RightUpLeg`]: { part: 'legR', limb: true }, [`${M}RightLeg`]: { part: 'shinR', limb: true },
};
// The hero's hip joints: the hips pivot sits at 0.97 and the thighs hang 4 cm below it.
const HIP_JOINT = 0.93, THIGH_DROP = 0.04;
const HIDDEN_LAYER = 31;
const DOWN = new THREE.Vector3(0, -1, 0);

let loading: Promise<THREE.Object3D> | null = null;
function loadMascot() {
  loading ??= new GLTFLoader().loadAsync(MASCOTA_URL).then(g => g.scene);
  return loading;
}

function fixMaterials(root: THREE.Object3D, shadows: boolean) {
  root.traverse(o => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const m = mesh.material as THREE.MeshStandardMaterial;
    const name = `${m.name} ${mesh.name}`.toLowerCase();
    if (/eyebrow|eyelash|cejas|pestanas/.test(name)) { m.transparent = true; m.depthWrite = false; m.alphaTest = 0.02; }
    else if (/short01|long01|pelo|mullet/.test(name)) { m.transparent = false; m.alphaTest = 0.4; m.side = THREE.DoubleSide; m.depthWrite = true; }
    else if (/casualsuit|ropa|shoes|zapatillas/.test(name)) { m.transparent = false; m.depthWrite = true; m.alphaTest = 0; m.side = THREE.DoubleSide; }
    else { m.transparent = false; m.depthWrite = true; m.alphaTest = 0; }
    if (/cadena|cruz|plata/.test(name)) { m.metalness = 0.35; m.roughness = 0.3; m.color.set('#e4e6ea'); } else m.metalness = 0;
    if (/body|cuerpo|skin/.test(name)) m.roughness = 0.55;
    const small = /teeth|tongue|dientes|lengua|eyebrow|eyelash|cejas|pestanas|cadena|cruz/.test(name);
    mesh.castShadow = shadows && !small;
    mesh.receiveShadow = false;
  });
}

/** Puts the mascot's real body on the hero as soon as the model arrives. Until then the drawn hero stays. */
export async function attachMascot(hero: Hero, shadows = true) {
  const scene = await loadMascot();
  const model = scene.clone(true);
  // SkinnedMesh clones keep pointing at the original bones: rebind them to the copies.
  const bonesByName = new Map<string, THREE.Bone>();
  model.traverse(o => { if ((o as THREE.Bone).isBone) bonesByName.set(key(o.name), o as THREE.Bone); });
  model.traverse(o => {
    const sk = o as THREE.SkinnedMesh;
    if (!sk.isSkinnedMesh) return;
    const bones = sk.skeleton.bones.map(b => bonesByName.get(key(b.name)) as THREE.Bone);
    sk.bind(new THREE.Skeleton(bones, sk.skeleton.boneInverses), sk.bindMatrix);
  });
  fixMaterials(model, shadows);
  model.updateMatrixWorld(true);

  // Bind orientation of every bone relative to the model root, and where the hip joints are.
  const inverseRoot = model.getWorldQuaternion(new THREE.Quaternion()).invert();
  const bind = new Map<string, THREE.Quaternion>();
  model.traverse(o => { if ((o as THREE.Bone).isBone) bind.set(o.name, o.getWorldQuaternion(new THREE.Quaternion()).premultiply(inverseRoot)); });
  const joint = (name: string) => (bonesByName.get(name) as THREE.Bone).getWorldPosition(new THREE.Vector3()).applyMatrix4(model.matrixWorld.clone().invert());
  const hips = joint(`${M}LeftUpLeg`).add(joint(`${M}RightUpLeg`)).multiplyScalar(0.5);
  const hipBone = bonesByName.get(`${M}Hips`) as THREE.Bone;
  const hipsInPelvis = hips.clone().applyMatrix4(hipBone.matrixWorld.clone().invert().multiply(model.matrixWorld));
  // The model stands with its soles at y = 0.
  const scale = HIP_JOINT / hips.y;
  model.scale.setScalar(scale);

  // Stop drawing the procedural hero, but keep whatever its hands hold.
  const held = (o: THREE.Object3D) => { for (let p: THREE.Object3D | null = o; p; p = p.parent) if (p.name.startsWith('held:')) return true; return false; };
  hero.body.traverse(o => { if ((o as THREE.Mesh).isMesh && !held(o)) o.layers.set(HIDDEN_LAYER); });
  // A sphere around the standing mascot, so the skinned meshes are culled as a whole.
  const bounds = new THREE.Sphere(new THREE.Vector3(0, 0.9 / scale, 0), 1.2 / scale);
  model.traverse(o => { const mesh = o as THREE.SkinnedMesh; if (mesh.isMesh) { mesh.boundingSphere = bounds; mesh.frustumCulled = true; } });
  hero.root.add(model);

  type Driven = { bone: THREE.Bone; parent: number; local: THREE.Quaternion; part?: THREE.Object3D; other?: THREE.Object3D; mix: number; offset: THREE.Quaternion; world: THREE.Quaternion };
  const driven: Driven[] = [];
  const indexOf = new Map<THREE.Object3D, number>();
  const va = new THREE.Vector3(), vb = new THREE.Vector3(), qa = new THREE.Quaternion(), qRoot = new THREE.Quaternion();
  model.traverse(o => {
    const bone = o as THREE.Bone;
    if (!bone.isBone) return;
    const d = DRIVERS[key(bone.name)];
    const bindQ = bind.get(bone.name) as THREE.Quaternion;
    const offset = bindQ.clone();
    if (d?.limb) offset.premultiply(new THREE.Quaternion().setFromUnitVectors(va.set(0, 1, 0).applyQuaternion(bindQ).normalize(), DOWN));
    indexOf.set(bone, driven.length);
    driven.push({
      bone, parent: indexOf.get(bone.parent as THREE.Object3D) ?? -1, local: bone.quaternion.clone(),
      part: d ? hero.parts[d.part] as THREE.Object3D : undefined, other: d?.blend ? hero.parts[d.blend[0]] as THREE.Object3D : undefined, mix: d?.blend?.[1] ?? 0,
      offset, world: new THREE.Quaternion(),
    });
  });
  const pelvis = driven[indexOf.get(hipBone) as number];
  const baseWorld = pelvis.parent >= 0 ? (bind.get(driven[pelvis.parent].bone.name) as THREE.Quaternion).clone() : new THREE.Quaternion();
  const restHips = hipBone.position.clone();

  const faces: { influences: number[]; index: Record<string, number> }[] = [];
  model.traverse(o => {
    const mesh = o as THREE.Mesh;
    if (mesh.isMesh && mesh.morphTargetDictionary && mesh.morphTargetInfluences) faces.push({ influences: mesh.morphTargetInfluences, index: mesh.morphTargetDictionary });
  });
  const setMorph = (name: string, value: number) => { for (const f of faces) { const i = f.index[name]; if (i !== undefined) f.influences[i] = value; } };
  // The mascot's half smile, as in the official art.
  setMorph('smile', 0.32);

  const partQ = (part: THREE.Object3D, out: THREE.Quaternion) => {
    out.copy(part.quaternion);
    for (let p = part.parent; p && p !== hero.root; p = p.parent) out.premultiply(p.quaternion);
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
      } else if (d.parent < 0) d.world.copy(bind.get(d.bone.name) as THREE.Quaternion);
      else d.world.copy(parentWorld).multiply(d.local);
    }
    // Hips: the real hip joints sit where the hero's are, so the feet reach the floor and seats are sat on.
    const h = hero.parts.hips;
    hero.body.updateMatrix();
    va.set(0, -THIGH_DROP, 0).applyQuaternion(h.quaternion).add(h.position).applyMatrix4(hero.body.matrix);
    vb.copy(hipsInPelvis).applyQuaternion(pelvis.world).multiplyScalar(scale);
    va.sub(vb).divideScalar(scale);
    pelvis.bone.position.copy(va.applyQuaternion(qa.copy(baseWorld).invert()));
    if (!Number.isFinite(pelvis.bone.position.x)) pelvis.bone.position.copy(restHips);
    // Blinks: the hero's lids close by turning down (0.04 open, 1.14 shut).
    setMorph('blink', Math.min(1, Math.max(0, (hero.parts.lids.rotation.x - 0.04) / 1.1)));
  };
  update();
  hero.real = update;
  return model;
}
