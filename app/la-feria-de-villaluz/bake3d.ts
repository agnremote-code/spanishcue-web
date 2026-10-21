// La feria de Villaluz · low-power draw-call budget (LESSON-DECISION-001 T5:
// ≤ 120 draw calls in low mode). Static things are baked into a few merged
// meshes: every plain MeshStandardMaterial becomes a vertex colour in one
// shared material per (side, roughness, metalness); glowing parts become one
// unlit vertex-coloured mesh; textured or transparent parts (blob shadows)
// merge per texture. The baked copy looks the same at fair distance, but it
// no longer animates, so only the low path uses it (the people who must move
// or talk stay live).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

type Std = THREE.MeshStandardMaterial;
type Basic = THREE.MeshBasicMaterial;

const materials = new Map<string, THREE.Material>();
function bakedMaterial(key: string, source: THREE.Material): THREE.Material {
  let m = materials.get(key);
  if (m) return m;
  if (key === 'std:person') {
    m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, metalness: 0, side: THREE.DoubleSide });
  } else if (key.startsWith('std:')) {
    const s = source as Std;
    m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: s.roughness, metalness: s.metalness, side: s.side, flatShading: s.flatShading });
  } else if (key.startsWith('glow:')) {
    m = new THREE.MeshBasicMaterial({ vertexColors: true, side: source.side });
  } else m = source;
  materials.set(key, m);
  return m;
}

function shown(o: THREE.Object3D, stop: THREE.Object3D | null) {
  for (let p: THREE.Object3D | null = o; p && p !== stop; p = p.parent) if (!p.visible) return false;
  return true;
}

/** What a mesh bakes into: a bucket key and, for vertex-coloured buckets, its colour. */
function bucketOf(mesh: THREE.Mesh, person: boolean): { key: string; color: THREE.Color | null; uv: boolean } | null {
  if (Array.isArray(mesh.material)) return null;
  const m = mesh.material as Std & Basic;
  if ((m as Std).isMeshStandardMaterial && !m.map && !m.transparent) {
    const glowing = m.emissive && m.emissive.getHex() !== 0 && m.emissiveIntensity > 0;
    if (glowing) return { key: `glow:${m.side}`, color: m.emissive.clone().multiplyScalar(Math.min(1.6, m.emissiveIntensity)), uv: false };
    // People: one material for every cloth, skin and hair colour (at fair
    // distance the roughness differences don't show).
    if (person) return { key: 'std:person', color: m.color.clone(), uv: false };
    return { key: `std:${m.side}:${m.roughness.toFixed(2)}:${m.metalness.toFixed(2)}:${m.flatShading ? 1 : 0}`, color: m.color.clone(), uv: false };
  }
  if ((m as Basic).isMeshBasicMaterial && m.map) return { key: `map:${m.map.uuid}:${m.opacity}:${m.transparent}:${m.depthWrite}`, color: null, uv: true };
  return { key: `mat:${m.uuid}`, color: null, uv: Boolean(m.map) };
}

/** Bake every visible mesh under `roots` (minus `skip`) into a group of merged
 * meshes, in the coordinates of `relativeTo` (default: world). The sources
 * are hidden. Instanced meshes and sprites are left alone. */
export function bake(roots: THREE.Object3D[], opts: { skip?: (mesh: THREE.Mesh) => boolean; relativeTo?: THREE.Object3D; hide?: boolean; people?: boolean } = {}): THREE.Group {
  const inverse = new THREE.Matrix4();
  if (opts.relativeTo) { opts.relativeTo.updateWorldMatrix(true, false); inverse.copy(opts.relativeTo.matrixWorld).invert(); }
  const buckets = new Map<string, { source: THREE.Material; geometries: THREE.BufferGeometry[]; order: number }>();
  const baked: THREE.Mesh[] = [];
  const matrix = new THREE.Matrix4();
  for (const root of roots) {
    root.updateWorldMatrix(true, true);
    root.traverse(o => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh || (mesh as THREE.InstancedMesh).isInstancedMesh || (mesh as THREE.SkinnedMesh).isSkinnedMesh) return;
      if (!shown(mesh, null) || opts.skip?.(mesh)) return;
      const bucket = bucketOf(mesh, Boolean(opts.people));
      if (!bucket) return;
      let g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
      for (const name of Object.keys(g.attributes)) if (!(name === 'position' || name === 'normal' || (bucket.uv && name === 'uv'))) g.deleteAttribute(name);
      g.morphAttributes = {};
      g.clearGroups();
      if (!g.attributes.normal) g.computeVertexNormals();
      if (bucket.uv && !g.attributes.uv) { g.dispose(); return; }
      matrix.multiplyMatrices(inverse, mesh.matrixWorld);
      g.applyMatrix4(matrix);
      if (matrix.determinant() < 0) {
        // A mirrored part: keep its triangles facing out.
        const flip = (attr: THREE.BufferAttribute | THREE.InterleavedBufferAttribute) => {
          for (let i = 0; i < attr.count; i += 3) for (let k = 0; k < attr.itemSize; k++) { const a = attr.getComponent(i + 1, k); attr.setComponent(i + 1, k, attr.getComponent(i + 2, k)); attr.setComponent(i + 2, k, a); }
        };
        for (const name of Object.keys(g.attributes)) flip(g.attributes[name]);
      }
      if (bucket.color) {
        const n = g.attributes.position.count, data = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) { data[i * 3] = bucket.color.r; data[i * 3 + 1] = bucket.color.g; data[i * 3 + 2] = bucket.color.b; }
        g.setAttribute('color', new THREE.BufferAttribute(data, 3));
      }
      let entry = buckets.get(bucket.key);
      if (!entry) { entry = { source: mesh.material as THREE.Material, geometries: [], order: 0 }; buckets.set(bucket.key, entry); }
      entry.geometries.push(g);
      entry.order = Math.max(entry.order, mesh.renderOrder);
      baked.push(mesh);
      g = null as unknown as THREE.BufferGeometry;
    });
  }
  const group = new THREE.Group();
  group.name = 'baked';
  for (const [key, entry] of buckets) {
    const merged = mergeGeometries(entry.geometries, false);
    const parts = merged ? [merged] : entry.geometries;
    for (const geometry of parts) {
      geometry.computeBoundingSphere();
      const mesh = new THREE.Mesh(geometry, bakedMaterial(key, entry.source));
      mesh.renderOrder = entry.order;
      mesh.matrixAutoUpdate = false;
      group.add(mesh);
    }
    if (merged) for (const g of entry.geometries) g.dispose();
  }
  if (opts.hide !== false) for (const mesh of baked) mesh.visible = false;
  return group;
}

/** Draw calls a group costs at most (visible meshes and sprites). */
export function meshCount(root: THREE.Object3D) {
  let n = 0;
  root.traverse(o => { if (((o as THREE.Mesh).isMesh || (o as THREE.Sprite).isSprite) && shown(o, null)) n++; });
  return n;
}
