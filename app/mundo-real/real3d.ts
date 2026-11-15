// Realistic rendering shared by the 3D worlds: photographic PBR surfaces
// (colour + normal + AO/roughness/metal maps), image-based lighting from an
// HDRI, and geometry UVs in metres so textures keep their real size on any
// wall or floor. Every file lives in /public/mundo-real (static assets, never
// in the Worker bundle) and comes from Poly Haven (CC0).
import * as THREE from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';

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
