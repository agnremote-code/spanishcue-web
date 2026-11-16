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
import { HEAD_R, HEAD_Y, personHooks, type Person } from '../noche-abierta/people3d';

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
// Pieces a person wears, by the name of their shape in people3d.
const ON_HEAD = /^(glasses|earrings|bandage|cap|beanie|fedora|helmet|headphones|bruise|wound-cut)$/;
// Hats were shaped for a drawn head with a low brow and thick hair: how each is moved up and flattened to sit on a real one.
const HATS: Record<string, { up: number; tall: number; wide: number }> = {
  cap: { up: -0.012, tall: 1.04, wide: 1.02 }, beanie: { up: -0.004, tall: 1.04, wide: 1.07 }, helmet: { up: -0.004, tall: 0.94, wide: 1 },
  fedora: { up: -0.03, tall: 1, wide: 1 }, bandage: { up: 0, tall: 1, wide: 0.93 },
};
// Scarves stay; the boxy backpacks and shoulder bags of the drawn people do not belong on a real body.
const ON_TORSO = /^scarf$/;
// The measured skull is wider than the head people3d draws (ears) and deeper (nose): how much of each half size counts.
const HEAD_FIT = { x: 0.92, y: 1, z: 1 };
const HEAD_LIFT = -0.04, HEAD_PUSH = -0.12;

export type Template = {
  scene: THREE.Object3D;
  /** Height of the hip joints above the ground in the model's own units. */
  hipHeight: number;
  /** Height of the soles in the model's own units (the models stand around their origin). */
  floor: number;
  /** Bind orientation of every bone relative to the model root, by bone name. */
  bind: Map<string, THREE.Quaternion>;
  /** Midpoint of the hip joints in the pelvis bone's own frame. */
  hipsInPelvis: THREE.Vector3;
  /** The skull: its centre in the head bone's frame and its half sizes along the model's own axes. */
  head: { center: THREE.Vector3; radius: THREE.Vector3 };
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
    else if (/suit|shoes/.test(name)) { m.transparent = false; m.depthWrite = true; m.alphaTest = 0.5; m.side = THREE.DoubleSide; }
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
  // The skull, from the skin that follows the head bone alone: where glasses, hats and beards are fitted.
  const body = skinned as unknown as THREE.SkinnedMesh;
  const headIndex = bones.findIndex(b => b.name === 'head');
  const pos = body.geometry.attributes.position, si = body.geometry.attributes.skinIndex, sw = body.geometry.attributes.skinWeight;
  const box = new THREE.Box3(), v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    let w = 0;
    for (let k = 0; k < 4; k++) if (si.getComponent(i, k) === headIndex) w += sw.getComponent(i, k);
    if (w > 0.98) box.expandByPoint(v.fromBufferAttribute(pos, i).applyMatrix4(body.bindMatrix));
  }
  // Kept in the head bone's own frame, so it stays on the skull whatever the bone does.
  const head = { center: box.getCenter(new THREE.Vector3()).applyMatrix4(boneInverses[headIndex]), radius: box.getSize(new THREE.Vector3()).multiplyScalar(0.5) };
  return { scene, hipHeight: hips.y - floor, floor, bind, hipsInPelvis: hips.clone().applyMatrix4(inverseOf('pelvis')), head };
}

const cache = new Map<string, Promise<Template>>();
export function loadTemplate(url: string) {
  let p = cache.get(url);
  if (!p) { p = new GLTFLoader().loadAsync(url).then(g => prepareTemplate(g.scene)); cache.set(url, p); }
  return p;
}

// ------------------------------------------------------------------ the cast
// Bodies, outfits, shoes and hair are separate files fitted to each body, so a
// person is put together from the look the world gave them: nearest skin,
// their hairstyle and hair colour, and their clothes dyed in their colours.

const GENTE = '/mundo-real/gente/';
type Catalogue = { cuerpos: Record<string, Record<string, number>>; pieles: Record<string, [number, number, number]> };
let catalogue: Promise<Catalogue> | null = null;
const loadCatalogue = () => catalogue ??= fetch(`${GENTE}elenco.json`).then(r => r.json() as Promise<Catalogue>);

const pieces = new Map<string, Promise<THREE.Object3D>>();
function loadPiece(body: string, name: string) {
  const key = `${body}/${name}`;
  let p = pieces.get(key);
  if (!p) { p = new GLTFLoader().loadAsync(`${GENTE}${key}.glb`).then(g => { fixMaterials(g.scene); return g.scene; }); pieces.set(key, p); }
  return p;
}

type Full = Person['rig']['full'];
const pick = <T,>(list: T[], seed: number) => list[Math.abs(Math.floor(seed)) % list.length];

function wardrobe(L: Full) {
  const f = L.body === 'f';
  const c = new THREE.Color(L.skin);
  const dark = c.r * 0.3 + c.g * 0.59 + c.b * 0.11 < 0.16;
  const age = L.age === 'old' || L.age === 'elderly' ? 'old' : L.age === 'adult' ? 'middleage' : 'young';
  const skin = `${age}_${dark ? 'african' : 'caucasian'}_${f ? 'female' : 'male'}`;
  let outfit: string;
  if (f) {
    outfit = L.top === 'dress' || L.bottom === 'skirt' ? 'female_elegantsuit01'
      : L.top === 'suit' ? 'male_elegantsuit01'
        : L.top === 'jacket' || L.top === 'coat' ? 'male_casualsuit05'
          : L.bottom === 'shorts' ? 'female_casualsuit02'
            : L.top === 'shirt' || L.top === 'uniform' ? 'male_casualsuit01' : 'female_casualsuit01';
  } else {
    outfit = L.top === 'suit' ? 'male_elegantsuit01'
      : L.top === 'jacket' || L.top === 'coat' ? 'male_casualsuit05'
        : L.top === 'shirt' || L.top === 'uniform' ? 'male_casualsuit01'
          : L.top === 'sweater' || L.top === 'hoodie' ? 'male_casualsuit02'
            : L.top === 'apron' ? 'male_worksuit01' : 'male_casualsuit06';
  }
  const shoes = f ? (outfit === 'female_elegantsuit01' ? 'shoes04' : 'shoes02') : (L.top === 'suit' ? 'shoes01' : 'shoes02');
  const h = L.hairStyle;
  const hair = h === 'bald' ? null
    : h === 'afro' || h === 'curly' ? 'afro01'
      : h === 'long' ? 'long01'
        : f ? (h === 'bob' ? 'bob02' : h === 'ponytail' || h === 'bun' ? 'ponytail01' : h === 'braids' ? 'braid01' : 'short04')
          : h === 'buzz' || h === 'cap' ? 'short04' : pick(['short01', 'short02', 'short03'], L.seed);
  return { body: `${f ? 'f' : 'm'}_${dark ? 'afr' : 'cau'}`, skin, outfit, shoes, hair };
}

const textureLoader = new THREE.TextureLoader();
const variants = new Map<string, THREE.Material>();
function variant<T extends THREE.Material>(key: string, make: () => T) {
  let m = variants.get(key) as T | undefined;
  if (!m) { m = make(); variants.set(key, m); }
  return m;
}

/** Clothes dyed in the person's colours: the weave and folds of the photo stay, the upper and lower garments take one colour each. */
function dyed(base: THREE.MeshStandardMaterial, top: string, bottom: string) {
  return variant(`${base.uuid}|${top}|${bottom}`, () => {
    const m = base.clone();
    const lum = (base.userData.lum as [number, number] | undefined) ?? [0.2, 0.2];
    // Worlds paint their people in poster colours; cloth under real light is a little greyer and darker.
    const cloth = (hex: string) => { const c = new THREE.Color(hex), hsl = { h: 0, s: 0, l: 0 }; c.getHSL(hsl); return c.setHSL(hsl.h, hsl.s * 0.72, hsl.l * 0.9); };
    const uniforms = { uTop: { value: cloth(top) }, uBottom: { value: cloth(bottom) }, uLum: { value: new THREE.Vector2(lum[0], lum[1]) } };
    m.color.set('#ffffff');
    m.onBeforeCompile = shader => {
      Object.assign(shader.uniforms, uniforms);
      shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nattribute float _region;\nvarying float vRegion;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvRegion = _region;');
      shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vRegion;\nuniform vec3 uTop;\nuniform vec3 uBottom;\nuniform vec2 uLum;')
        .replace('#include <map_fragment>', `#include <map_fragment>
          float upper = step(0.5, vRegion);
          float shade = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722)) / max(0.02, mix(uLum.x, uLum.y, upper));
          diffuseColor.rgb = mix(uBottom, uTop, upper) * clamp(shade, 0.0, 2.4);`);
    };
    m.customProgramCacheKey = () => 'ropa-teñida';
    return m;
  });
}

const maskedGeometry = new Map<string, THREE.BufferGeometry>();
/** The body without the skin its clothes cover (so it never pokes through them). Shares every vertex buffer with the original. */
function uncovered(geometry: THREE.BufferGeometry, bits: number) {
  const mask = geometry.attributes._mask;
  if (!mask || !bits || !geometry.index) return geometry;
  const key = `${geometry.uuid}|${bits}`;
  let g = maskedGeometry.get(key);
  if (!g) {
    const src = geometry.index.array, kept: number[] = [];
    for (let i = 0; i < src.length; i += 3) {
      const a = src[i], b = src[i + 1], c = src[i + 2];
      if ((mask.getX(a) & bits) || (mask.getX(b) & bits) || (mask.getX(c) & bits)) continue;
      kept.push(a, b, c);
    }
    g = new THREE.BufferGeometry();
    g.attributes = geometry.attributes; g.morphAttributes = geometry.morphAttributes; g.morphTargetsRelative = geometry.morphTargetsRelative;
    g.boundingBox = geometry.boundingBox; g.boundingSphere = geometry.boundingSphere;
    g.setIndex(kept);
    maskedGeometry.set(key, g);
  }
  return g;
}

/** Builds the real body for a procedural person from the cast files and attaches it. Until it arrives the person stays as it was. */
export async function makeReal(person: Person) {
  const L = person.rig.full;
  const w = wardrobe(L);
  // Under a cap, a beanie or a helmet the hair is cropped, so it does not come through.
  person.rig.body.traverse(o => { if (w.hair && /^(cap|beanie|helmet)$/.test((o as THREE.Mesh).geometry?.name ?? '')) w.hair = 'short04'; });
  const [cat, template, outfit, shoes, hair] = await Promise.all([
    loadCatalogue(), loadTemplate(`${GENTE}${w.body}/cuerpo.glb`), loadPiece(w.body, w.outfit), loadPiece(w.body, w.shoes), w.hair ? loadPiece(w.body, w.hair) : null,
  ]);
  const model = cloneSkinned(template.scene);
  let bodyMesh: THREE.SkinnedMesh | null = null;
  model.traverse(o => { const m = o as THREE.SkinnedMesh; if (m.isSkinnedMesh && m.geometry.attributes._mask) bodyMesh = m; });
  const body = bodyMesh as unknown as THREE.SkinnedMesh;
  const bits = cat.cuerpos[w.body];
  body.geometry = uncovered(body.geometry, (1 << (bits[w.outfit] ?? 30)) | (1 << (bits[w.shoes] ?? 30)));

  // Skin: the nearest photographed skin, toned to the person's own colour.
  const mean = cat.pieles[w.skin] ?? cat.pieles[w.skin.replace(/^[a-z]+_/, 'young_')];
  const want = new THREE.Color(L.skin), have = new THREE.Color().setRGB(mean[0], mean[1], mean[2], THREE.SRGBColorSpace);
  const tone = new THREE.Color(clamp(want.r / have.r, 0.45, 1.25), clamp(want.g / have.g, 0.45, 1.25), clamp(want.b / have.b, 0.45, 1.25));
  body.material = variant(`${w.body}|${w.skin}|${L.skin}`, () => {
    const m = (body.material as THREE.MeshStandardMaterial).clone();
    const t = textureLoader.load(`${GENTE}tex/piel_${w.skin}.webp`);
    t.flipY = false; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    m.map = t; m.color.copy(tone);
    return m;
  });

  // Clothes, shoes and hair ride the body's own skeleton.
  const skeleton = body.skeleton;
  const byName = new Map(skeleton.bones.map(b => [b.name, b]));
  const wear = (piece: THREE.Object3D, material: (m: THREE.MeshStandardMaterial) => THREE.Material) => {
    piece.traverse(o => {
      const src = o as THREE.SkinnedMesh;
      if (!src.isSkinnedMesh) return;
      const mesh = new THREE.SkinnedMesh(src.geometry, material(src.material as THREE.MeshStandardMaterial));
      mesh.name = src.name; mesh.frustumCulled = false;
      const same = src.skeleton.bones.length === skeleton.bones.length && src.skeleton.bones.every((b, i) => b.name === skeleton.bones[i].name);
      mesh.bind(same ? skeleton : new THREE.Skeleton(src.skeleton.bones.map(b => byName.get(b.name) as THREE.Bone), src.skeleton.boneInverses), src.bindMatrix);
      (body.parent as THREE.Object3D).add(mesh);
    });
  };
  wear(outfit, m => dyed(m, L.topColor, L.top === 'dress' ? L.topColor : L.bottomColor));
  wear(shoes, m => m);
  if (hair) wear(hair, m => variant(`${m.uuid}|${L.hairColor}`, () => { const c = m.clone(); c.color.set(L.hairColor).multiplyScalar(2.6); return c; }));

  const build = L.build === 'heavy' ? 1.16 : L.build === 'slim' ? 0.95 : L.build === 'athletic' ? 1.04 : 1;
  attachRealBody(person, template, model, build);
}

/** Every person the worlds create from now on gets a real body as soon as its files arrive. */
export function enableRealPeople(on = true) {
  personHooks.created = on ? person => { void makeReal(person).catch(() => {}); } : undefined;
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
export function attachRealBody(person: Person, template: Template, model: THREE.Object3D = cloneSkinned(template.scene), girth = 1) {
  const rig = person.rig;
  // Stop drawing the procedural figure (a layer no camera sees also keeps it out of shadows), but keep what the hands hold.
  const hands = [rig.handL, rig.handR];
  const props = new Set<THREE.Object3D>(rig.props.values());
  if (rig.handheld) props.add(rig.handheld);
  const carried = hands.map(h => h.children.filter(c => props.has(c)));
  const onHead: THREE.Object3D[] = [];
  const hide = (o: THREE.Object3D) => {
    if (props.has(o)) return;
    const piece = (o as THREE.Mesh).isMesh ? (o as THREE.Mesh).geometry.name : '';
    if (ON_TORSO.test(piece)) return;
    if (ON_HEAD.test(piece)) { onHead.push(o); return; }
    if ((o as THREE.Mesh).isMesh) o.layers.set(HIDDEN_LAYER);
    for (const c of o.children) hide(c);
  };
  hide(rig.body);

  const scale = (HIP_JOINT * rig.scale) / template.hipHeight;
  model.scale.set(scale * girth, scale, scale * girth);
  // Only what gives the silhouette casts a shadow, and each mesh is culled by a sphere around the whole standing person.
  const bounds = new THREE.Sphere(new THREE.Vector3(0, template.floor + (0.9 * rig.scale) / scale, 0), 1.5 / scale);
  const mouth: THREE.Object3D[] = [];
  model.traverse(o => {
    const mesh = o as THREE.SkinnedMesh;
    if (!mesh.isMesh) return;
    const small = /teeth|tongue|eyebrow|eyelash|low-poly/i.test(mesh.name);
    mesh.castShadow = !small; mesh.receiveShadow = false;
    mesh.boundingSphere = bounds; mesh.frustumCulled = true;
    if (/teeth|tongue/i.test(mesh.name)) mouth.push(mesh);
  });
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

  // What is worn on the head moves to the real skull, fitted to its size.
  const headBone = driven.find(d => d.bone.name === 'head')!.bone;
  const worn = new THREE.Group(), fit = new THREE.Group();
  if (onHead.length) {
    const r = template.head.radius;
    worn.scale.set((r.x * scale * girth * HEAD_FIT.x) / HEAD_R.x, (r.y * scale * HEAD_FIT.y) / HEAD_R.y, (r.z * scale * girth * HEAD_FIT.z) / HEAD_R.z);
    fit.position.set(0, -HEAD_Y, 0);
    worn.add(fit);
    person.root.add(worn);
    for (const o of onHead) {
      fit.add(o);
      const hat = HATS[(o as THREE.Mesh).geometry.name];
      if (hat) { o.position.y += hat.up; o.scale.multiply(va.set(hat.wide, hat.tall, hat.wide)); }
    }
  }

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
    va.sub(vb); va.x /= scale * girth; va.y /= scale; va.z /= scale * girth;
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
    for (const m of mouth) m.visible = n.open > 0.04 || n.teeth > 0.3;
    setMorph('pucker', clamp(n.pucker, 0, 1));

    if (onHead.length) {
      headBone.updateWorldMatrix(true, false);
      person.root.worldToLocal(worn.position.copy(template.head.center).applyMatrix4(headBone.matrixWorld));
      partQ(person.parts.head, worn.quaternion);
      const r = template.head.radius;
      worn.position.add(va.set(0, r.y * HEAD_LIFT * scale, r.z * HEAD_PUSH * scale * girth).applyQuaternion(worn.quaternion));
    }

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
