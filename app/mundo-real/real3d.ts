// Realistic rendering shared by the 3D worlds: photographic PBR surfaces
// (colour + normal + AO/roughness/metal maps), image-based lighting from an
// HDRI, and geometry UVs in metres so textures keep their real size on any
// wall or floor. Every file lives in /public/mundo-real (static assets, never
// in the Worker bundle) and comes from Poly Haven (CC0).
import * as THREE from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const BASE = '/mundo-real/';
const loader = new THREE.TextureLoader();
const textures = new Map<string, THREE.Texture>();

function tex(file: string, srgb: boolean) {
  let t = textures.get(file);
  if (!t) {
    t = loader.load(BASE + file);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.anisotropy = 8;
    textures.set(file, t);
  }
  return t;
}

export type Surface = 'laminate_floor_02' | 'plastered_wall_04' | 'ceiling_interior' | 'wood_table_001' | 'dirty_carpet';
// Metres covered by one repeat of each photo.
const SIZE: Record<Surface, number> = { laminate_floor_02: 2.4, plastered_wall_04: 3, ceiling_interior: 2.4, wood_table_001: 1.6, dirty_carpet: 2.2 };

const materials = new Map<string, THREE.MeshStandardMaterial>();
/** A photographic material. `color` tints it; geometry must carry UVs in metres (see worldUV). */
export function surface(name: Surface, color = '#ffffff', extra: THREE.MeshStandardMaterialParameters = {}) {
  const key = `${name}|${color}|${JSON.stringify(extra)}`;
  let m = materials.get(key);
  if (!m) {
    const arm = tex(`${name}_arm.webp`, false);
    m = new THREE.MeshStandardMaterial({
      color, map: tex(`${name}_col.webp`, true), normalMap: tex(`${name}_nor.webp`, false),
      aoMap: arm, roughnessMap: arm, metalnessMap: arm, roughness: 1, metalness: 1, ...extra,
    });
    m.userData.metres = SIZE[name];
    materials.set(key, m);
  }
  return m;
}

/** Rewrites a geometry's UVs as box-projected world metres, so a texture repeats at its real size. */
export function worldUV<T extends THREE.BufferGeometry>(geometry: T, metres = 1, matrix?: THREE.Matrix4): T {
  const g = geometry;
  const pos = g.attributes.position, nor = g.attributes.normal;
  const uv = new Float32Array(pos.count * 2);
  const p = new THREE.Vector3(), n = new THREE.Vector3();
  const normalMatrix = matrix ? new THREE.Matrix3().getNormalMatrix(matrix) : null;
  for (let i = 0; i < pos.count; i++) {
    p.fromBufferAttribute(pos, i); n.fromBufferAttribute(nor, i);
    if (matrix && normalMatrix) { p.applyMatrix4(matrix); n.applyMatrix3(normalMatrix); }
    const ax = Math.abs(n.x), ay = Math.abs(n.y), az = Math.abs(n.z);
    let u: number, v: number;
    if (ay >= ax && ay >= az) { u = p.x; v = p.z; } else if (ax >= az) { u = p.z; v = p.y; } else { u = p.x; v = p.y; }
    uv[i * 2] = u / metres; uv[i * 2 + 1] = v / metres;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return g;
}

/** Gives every mesh under `root` that uses a photographic material UVs in world metres. Call before batching. */
export function fitSurfaces(root: THREE.Object3D) {
  root.updateMatrixWorld(true);
  root.traverse(o => {
    const mesh = o as THREE.Mesh;
    const metres = (mesh.material as THREE.Material | undefined)?.userData?.metres as number | undefined;
    if (!mesh.isMesh || !metres) return;
    mesh.geometry = worldUV(mesh.geometry.clone(), metres, mesh.matrixWorld);
  });
}

/** Lights the scene from an HDRI photo (reflections and soft ambient light). Resolves when it is in place. */
export function loadEnvironment(renderer: THREE.WebGLRenderer, scene: THREE.Scene, file = 'oficina_512.hdr', intensity = 1) {
  return new Promise<() => void>(resolve => {
    new HDRLoader().load(BASE + file, hdr => {
      hdr.mapping = THREE.EquirectangularReflectionMapping;
      const pmrem = new THREE.PMREMGenerator(renderer);
      const target = pmrem.fromEquirectangular(hdr);
      hdr.dispose(); pmrem.dispose();
      const previous = scene.environment;
      scene.environment = target.texture;
      scene.environmentIntensity = intensity;
      previous?.dispose();
      resolve(() => target.dispose());
    }, undefined, () => resolve(() => {}));
  });
}

export function disposeSurfaces() {
  for (const t of textures.values()) t.dispose();
  for (const m of materials.values()) m.dispose();
  textures.clear(); materials.clear();
}

/** Render pipeline with ambient occlusion: the soft dark contact where things meet (chair legs, corners, a chin over a collar). */
export function createRealComposer(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, width: number, height: number) {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const ao = new GTAOPass(scene, camera, width, height);
  ao.blendIntensity = 1;
  ao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1.6, thickness: 1.2, scale: 1.1, samples: 8, distanceFallOff: 1, screenSpaceRadius: false });
  ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 8 });
  // Sprites (labels, speech bubbles, smoke) and glass must not enter the occlusion buffer: they would leave black squares.
  const hidden: THREE.Object3D[] = [];
  const internals = ao as unknown as { _overrideVisibility: () => void; _restoreVisibility: () => void };
  internals._overrideVisibility = () => {
    scene.traverseVisible(o => {
      const mesh = o as THREE.Mesh;
      const material = mesh.material as THREE.Material | undefined;
      if ((o as THREE.Sprite).isSprite || (o as THREE.Points).isPoints || (o as THREE.Line).isLine || (mesh.isMesh && material && !Array.isArray(material) && material.transparent)) hidden.push(o);
    });
    for (const o of hidden) o.visible = false;
  };
  internals._restoreVisibility = () => { for (const o of hidden) o.visible = true; hidden.length = 0; };
  composer.addPass(ao);
  composer.addPass(new OutputPass());
  return { composer, ao };
}

/** Ceiling light for interiors: one soft-shadowed light from above that follows the player, on top of the HDRI. */
export function createCeilingLight(scene: THREE.Scene, size = 2048, reach = 16) {
  const light = new THREE.DirectionalLight('#fff4e4', 2.2);
  light.castShadow = true;
  light.shadow.mapSize.set(size, size);
  Object.assign(light.shadow.camera, { left: -reach, right: reach, top: reach, bottom: -reach, near: 1, far: 30 });
  light.shadow.bias = -0.0003; light.shadow.normalBias = 0.025; light.shadow.radius = 5; light.shadow.blurSamples = 12;
  scene.add(light, light.target);
  const follow = (x: number, z: number) => {
    // Snap to shadow texels so the shadow edges do not shimmer while walking.
    const step = (reach * 2) / size * 4;
    const sx = Math.round(x / step) * step, sz = Math.round(z / step) * step;
    light.target.position.set(sx, 0, sz); light.position.set(sx + 2.2, 14, sz + 3.2);
  };
  follow(0, 0);
  return { light, follow };
}

// ------------------------------------------------------------------ furniture

export type Mueble = 'silla' | 'escritorio' | 'sofa';
/** Where a piece goes. `fit` stretches the model's own box to [width, height, depth] in metres before turning it. */
export type Placement = { model: Mueble; x: number; z: number; y?: number; rotY?: number; fit?: [number, number, number] };

type Piece = { geometry: THREE.BufferGeometry; material: THREE.Material };
const models = new Map<Mueble, Promise<{ pieces: Piece[]; box: THREE.Box3 }>>();
function loadModel(name: Mueble) {
  let p = models.get(name);
  if (!p) {
    p = new GLTFLoader().loadAsync(`${BASE}muebles/${name}.glb`).then(gltf => {
      const pieces: Piece[] = [];
      const box = new THREE.Box3();
      gltf.scene.updateMatrixWorld(true);
      gltf.scene.traverse(o => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        const geometry = mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
        geometry.computeBoundingBox();
        box.union(geometry.boundingBox as THREE.Box3);
        pieces.push({ geometry, material: mesh.material as THREE.Material });
      });
      return { pieces, box };
    });
    models.set(name, p);
  }
  return p;
}

/** Photographed furniture (Poly Haven, CC0) drawn as instances: one draw call per model part, however many chairs there are. */
export async function placeFurniture(parent: THREE.Object3D, placements: Placement[], shadows = true) {
  const group = new THREE.Group();
  group.name = 'muebles';
  const byModel = new Map<Mueble, Placement[]>();
  for (const p of placements) byModel.set(p.model, [...(byModel.get(p.model) ?? []), p]);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), s = new THREE.Vector3(), t = new THREE.Vector3();
  await Promise.all([...byModel].map(async ([name, list]) => {
    const { pieces, box } = await loadModel(name);
    const size = box.getSize(new THREE.Vector3());
    for (const piece of pieces) {
      const inst = new THREE.InstancedMesh(piece.geometry, piece.material, list.length);
      inst.castShadow = shadows; inst.receiveShadow = true;
      list.forEach((p, i) => {
        if (p.fit) s.set(p.fit[0] / size.x, p.fit[1] / size.y, p.fit[2] / size.z); else s.set(1, 1, 1);
        q.setFromAxisAngle(up, p.rotY ?? 0);
        m.compose(t.set(p.x, p.y ?? 0, p.z), q, s);
        inst.setMatrixAt(i, m);
      });
      inst.instanceMatrix.needsUpdate = true;
      inst.computeBoundingSphere();
      group.add(inst);
    }
  }));
  parent.add(group);
  return group;
}
