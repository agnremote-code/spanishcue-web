// El ascensor del cerro · draw-call budget (low mode ≤ 120 draw calls, as in
// the feria). Two tools:
// - Batch: the hillside is authored straight into a few merged meshes. Every
//   box, cylinder or plane gets a vertex colour and lands in one bucket per
//   surface kind (matte, metal, glowing), so a hundred houses cost three draw
//   calls in both modes.
// - bake(): people built by noche-abierta/people3d (many small meshes) are
//   merged the same way for the low path; the person who talks stays live.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export type Surface = 'matte' | 'metal' | 'glow' | 'sea';

const SURFACES: Record<Surface, () => THREE.Material> = {
  matte: () => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, metalness: 0 }),
  metal: () => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.45 }),
  glow: () => new THREE.MeshBasicMaterial({ vertexColors: true }),
  sea: () => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.25, metalness: 0.15 }),
};

const color = new THREE.Color();
const matrix = new THREE.Matrix4();
const euler = new THREE.Euler();
const quat = new THREE.Quaternion();
const scale = new THREE.Vector3(1, 1, 1);
const position = new THREE.Vector3();

/** Prepare a geometry for merging: non-indexed, position + normal + colour. */
function prepared(geometry: THREE.BufferGeometry, hex: string | THREE.Color, m: THREE.Matrix4) {
  const g = geometry.index ? geometry.toNonIndexed() : geometry.clone();
  if (geometry !== g) geometry.dispose();
  for (const name of Object.keys(g.attributes)) if (name !== 'position' && name !== 'normal') g.deleteAttribute(name);
  if (!g.attributes.normal) g.computeVertexNormals();
  g.applyMatrix4(m);
  const n = g.attributes.position.count, data = new Float32Array(n * 3);
  if (hex instanceof THREE.Color) color.copy(hex); else color.set(hex);
  for (let i = 0; i < n; i++) { data[i * 3] = color.r; data[i * 3 + 1] = color.g; data[i * 3 + 2] = color.b; }
  g.setAttribute('color', new THREE.BufferAttribute(data, 3));
  return g;
}

export class Batch {
  private parts = new Map<Surface, THREE.BufferGeometry[]>();

  /** Any geometry, placed by a matrix (it is consumed). */
  add(geometry: THREE.BufferGeometry, hex: string | THREE.Color, m: THREE.Matrix4, surface: Surface = 'matte') {
    let list = this.parts.get(surface);
    if (!list) { list = []; this.parts.set(surface, list); }
    list.push(prepared(geometry, hex, m));
  }

  /** A geometry at (x, y, z) turned by (rx, ry, rz). */
  put(geometry: THREE.BufferGeometry, hex: string, x: number, y: number, z: number, ry = 0, surface: Surface = 'matte', rx = 0, rz = 0) {
    position.set(x, y, z);
    quat.setFromEuler(euler.set(rx, ry, rz, 'YXZ'));
    matrix.compose(position, quat, scale);
    this.add(geometry, hex, matrix, surface);
  }

  box(w: number, h: number, d: number, hex: string, x: number, y: number, z: number, ry = 0, surface: Surface = 'matte') {
    this.put(new THREE.BoxGeometry(w, h, d), hex, x, y, z, ry, surface);
  }

  /** A box given by its floor-level footprint corner-to-corner and its base. */
  block(x0: number, x1: number, z0: number, z1: number, y0: number, y1: number, hex: string, surface: Surface = 'matte') {
    this.box(x1 - x0, y1 - y0, z1 - z0, hex, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, 0, surface);
  }

  cyl(rTop: number, rBottom: number, h: number, hex: string, x: number, y: number, z: number, segments = 10, surface: Surface = 'matte', rx = 0, rz = 0) {
    this.put(new THREE.CylinderGeometry(rTop, rBottom, h, segments), hex, x, y, z, 0, surface, rx, rz);
  }

  /** Merge every bucket into one mesh each. */
  build(opts: { shadows?: boolean; name?: string } = {}): THREE.Group {
    const group = new THREE.Group();
    group.name = opts.name ?? 'batch';
    for (const [surface, list] of this.parts) {
      const merged = mergeGeometries(list, false);
      for (const g of list) g.dispose();
      if (!merged) continue;
      merged.computeBoundingSphere();
      const mesh = new THREE.Mesh(merged, SURFACES[surface]());
      mesh.castShadow = Boolean(opts.shadows) && surface !== 'sea' && surface !== 'glow';
      mesh.receiveShadow = Boolean(opts.shadows) && surface !== 'glow';
      mesh.matrixAutoUpdate = false;
      group.add(mesh);
    }
    this.parts.clear();
    return group;
  }
}

// ------------------------------------------------------------------ people bake
function shown(o: THREE.Object3D) {
  for (let p: THREE.Object3D | null = o; p; p = p.parent) if (!p.visible) return false;
  return true;
}

const personMaterial = () => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, metalness: 0, side: THREE.DoubleSide });
const glowMaterial = () => new THREE.MeshBasicMaterial({ vertexColors: true });

/** Bake every visible mesh under `roots` (minus `skip`) into a few merged
 * meshes in world coordinates: plain standard materials become vertex
 * colours in one material, glowing parts one unlit material, anything with a
 * texture or transparency (blob shadows) merges per material. The sources are
 * hidden unless `hide` is false. Instanced and skinned meshes are left alone. */
export function bake(roots: THREE.Object3D[], opts: { skip?: (mesh: THREE.Mesh) => boolean; hide?: boolean } = {}): THREE.Group {
  const buckets = new Map<string, { material: THREE.Material; geometries: THREE.BufferGeometry[]; uv: boolean; order: number }>();
  const baked: THREE.Mesh[] = [];
  for (const root of roots) {
    root.updateWorldMatrix(true, true);
    root.traverse(o => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh || (mesh as THREE.InstancedMesh).isInstancedMesh || (mesh as THREE.SkinnedMesh).isSkinnedMesh) return;
      if (!shown(mesh) || opts.skip?.(mesh) || Array.isArray(mesh.material)) return;
      const m = mesh.material as THREE.MeshStandardMaterial & THREE.MeshBasicMaterial;
      let key: string, tint: THREE.Color | null = null, uv = false, material: THREE.Material;
      if ((m as THREE.MeshStandardMaterial).isMeshStandardMaterial && !m.map && !m.transparent && !m.vertexColors) {
        const glowing = m.emissive && m.emissive.getHex() !== 0 && m.emissiveIntensity > 0;
        key = glowing ? 'glow' : 'person';
        tint = glowing ? m.emissive.clone().multiplyScalar(Math.min(1.6, m.emissiveIntensity)) : m.color.clone();
        material = glowing ? glowMaterial() : personMaterial();
      } else {
        key = `mat:${m.uuid}`; uv = Boolean(m.map); material = m;
      }
      let g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
      for (const name of Object.keys(g.attributes)) if (!(name === 'position' || name === 'normal' || (uv && name === 'uv') || (!tint && name === 'color'))) g.deleteAttribute(name);
      g.morphAttributes = {};
      g.clearGroups();
      if (!g.attributes.normal) g.computeVertexNormals();
      if (uv && !g.attributes.uv) { g.dispose(); return; }
      g.applyMatrix4(mesh.matrixWorld);
      if (mesh.matrixWorld.determinant() < 0) {
        // A mirrored part: keep its triangles facing out.
        for (const name of Object.keys(g.attributes)) {
          const attr = g.attributes[name];
          for (let i = 0; i < attr.count; i += 3) for (let k = 0; k < attr.itemSize; k++) { const a = attr.getComponent(i + 1, k); attr.setComponent(i + 1, k, attr.getComponent(i + 2, k)); attr.setComponent(i + 2, k, a); }
        }
      }
      if (tint) {
        const n = g.attributes.position.count, data = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) { data[i * 3] = tint.r; data[i * 3 + 1] = tint.g; data[i * 3 + 2] = tint.b; }
        g.setAttribute('color', new THREE.BufferAttribute(data, 3));
      }
      let entry = buckets.get(key);
      if (!entry) { entry = { material, geometries: [], uv, order: 0 }; buckets.set(key, entry); }
      entry.geometries.push(g);
      entry.order = Math.max(entry.order, mesh.renderOrder);
      baked.push(mesh);
      g = null as unknown as THREE.BufferGeometry;
    });
  }
  const group = new THREE.Group();
  group.name = 'baked';
  for (const entry of buckets.values()) {
    const merged = mergeGeometries(entry.geometries, false);
    const parts = merged ? [merged] : entry.geometries;
    for (const geometry of parts) {
      geometry.computeBoundingSphere();
      const mesh = new THREE.Mesh(geometry, entry.material);
      mesh.renderOrder = entry.order;
      mesh.matrixAutoUpdate = false;
      group.add(mesh);
    }
    if (merged) for (const g of entry.geometries) g.dispose();
  }
  if (opts.hide !== false) for (const mesh of baked) mesh.visible = false;
  return group;
}
