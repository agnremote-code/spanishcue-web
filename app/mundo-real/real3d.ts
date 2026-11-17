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

export type Surface = 'laminate_floor_02' | 'plastered_wall_04' | 'ceiling_interior' | 'wood_table_001' | 'dirty_carpet'
  | 'marble_01' | 'concrete_floor_02' | 'large_floor_tiles_02' | 'floor_tiles_06' | 'asphalt_02' | 'cobblestone_floor_04' | 'leafy_grass'
  | 'red_brick_03' | 'sand_01' | 'metal_plate' | 'concrete_wall_008' | 'wood_planks';
// Metres covered by one repeat of each photo.
const SIZE: Record<Surface, number> = {
  laminate_floor_02: 2.4, plastered_wall_04: 3, ceiling_interior: 2.4, wood_table_001: 1.6, dirty_carpet: 2.2,
  marble_01: 3, concrete_floor_02: 3, large_floor_tiles_02: 2.4, floor_tiles_06: 2, asphalt_02: 4, cobblestone_floor_04: 2.4, leafy_grass: 3,
  red_brick_03: 2, sand_01: 3, metal_plate: 2, concrete_wall_008: 3, wood_planks: 2,
};

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

const finishes = new Map<string, THREE.MeshStandardMaterial>();
/**
 * The same plain-coloured material with the fine grain of a painted surface: tiny relief and
 * uneven shine, so light breaks on it like on a real object instead of a flat fill.
 */
export function finished(source: THREE.MeshStandardMaterial) {
  let m = finishes.get(source.uuid);
  if (!m) {
    const metal = source.metalness > 0.5;
    const grain = metal ? 'metal_plate' : 'plastered_wall_04';
    m = source.clone();
    m.normalMap = tex(`${grain}_nor.webp`, false);
    m.normalScale = new THREE.Vector2(metal ? 0.25 : 0.6, metal ? 0.25 : 0.6);
    m.roughnessMap = tex(`${grain}_arm.webp`, false);
    // The map multiplies the material's own roughness: lift it so the average stays where the world set it.
    m.roughness = Math.min(1, source.roughness * (metal ? 1.6 : 1.15));
    m.userData.metres = metal ? 1.2 : 1.8;
    finishes.set(source.uuid, m);
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
  for (const m of finishes.values()) m.dispose();
  textures.clear(); materials.clear(); finishes.clear();
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

/** A scanned object: one of the three office pieces in /muebles, or any file of /objetos (see scripts/mundo-real/modelos.py). */
export type Mueble = string;
type Piece = { geometry: THREE.BufferGeometry; material: THREE.Material };
/**
 * Where one object stands. `fit` stretches it to a width, height and depth; `tall` scales it
 * evenly to a height. `y` is the height of its base (objects from /objetos stand on their base, centred).
 */
export type Placement = { model: Mueble; x: number; z: number; y?: number; rotY?: number; fit?: [number, number, number]; tall?: number };
const OFFICE = new Set(['silla', 'escritorio', 'sofa']);

const models = new Map<Mueble, Promise<{ pieces: Piece[]; box: THREE.Box3 }>>();
function loadModel(name: Mueble) {
  let p = models.get(name);
  if (!p) {
    p = new GLTFLoader().loadAsync(`${BASE}${OFFICE.has(name) ? 'muebles' : 'objetos'}/${name}.glb`).then(gltf => {
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
      if (!OFFICE.has(name)) {
        // Stand it on its base, centred, whatever origin the scan came with.
        const c = box.getCenter(new THREE.Vector3());
        for (const piece of pieces) piece.geometry.translate(-c.x, -box.min.y, -c.z);
        box.translate(new THREE.Vector3(-c.x, -box.min.y, -c.z));
      }
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
        if (p.fit) s.set(p.fit[0] / size.x, p.fit[1] / size.y, p.fit[2] / size.z); else s.setScalar(p.tall ? p.tall / size.y : 1);
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

type Footprint = { x0: number; x1: number; z0: number; z1: number };
/**
 * Contact shade, painted once: the soft dark band where walls meet the floor and the ceiling, and the
 * pool of shade under each piece of furniture. It is what screen-space occlusion would add, without
 * its per-frame cost: two draw calls for the whole place.
 */
export function contactShade(parent: THREE.Object3D, walls: Footprint[], things: Footprint[], ceiling?: number) {
  // A soft dark rectangle: full in the middle, fading smoothly to nothing over the outer 22 % of each side.
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 64;
  const context = canvas.getContext('2d')!;
  const image = context.createImageData(64, 64);
  const fade = (n: number) => { const k = Math.min(1, Math.min(n, 63 - n) / 14); return k * k * (3 - 2 * k); };
  for (let y = 0; y < 64; y++) for (let x = 0; x < 64; x++) image.data[(y * 64 + x) * 4 + 3] = Math.round(255 * fade(x) * fade(y));
  context.putImageData(image, 0, 0);
  const pool = new THREE.CanvasTexture(canvas);
  const quads: THREE.BufferGeometry[] = [];
  const quad = (b: Footprint, grow: number, y: number) => {
    const g = new THREE.PlaneGeometry(b.x1 - b.x0 + grow * 2, b.z1 - b.z0 + grow * 2);
    g.rotateX(-Math.PI / 2); g.translate((b.x0 + b.x1) / 2, y, (b.z0 + b.z1) / 2);
    quads.push(g);
  };
  // The texture keeps 22 % of its width as fade on each side, so the quad grows to leave the dark core over the footprint.
  for (const w of walls) { quad(w, 0.55, 0.014); if (ceiling) quad(w, 0.7, ceiling - 0.012); }
  for (const t of things) quad(t, 0.32, 0.016);
  if (!quads.length) return () => {};
  const positions: number[] = [], uvs: number[] = [], index: number[] = [];
  quads.forEach((g, i) => {
    positions.push(...(g.attributes.position.array as Float32Array)); uvs.push(...(g.attributes.uv.array as Float32Array));
    index.push(...Array.from(g.index!.array, n => n + i * 4)); g.dispose();
  });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(index);
  const material = new THREE.MeshBasicMaterial({ map: pool, transparent: true, opacity: 0.42, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = 1; mesh.name = 'contact-shade';
  parent.add(mesh);
  return () => { mesh.removeFromParent(); geometry.dispose(); material.dispose(); pool.dispose(); };
}
