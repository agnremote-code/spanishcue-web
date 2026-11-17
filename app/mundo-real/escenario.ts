// Realistic scenery for worlds built from plain coloured boxes. One pass over
// a finished (not yet batched) world gives its big surfaces photographic
// materials (floors, walls, ceilings, wood, the ground outside), keeping each
// one's own colour as the tint, and softens the hard edges of its boxes so
// light rolls over a corner the way it does on real furniture.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { finished, surface, worldUV, type Surface } from './real3d';

export type Setting = {
  /** Indoor floor; none leaves the floors as the world drew them. */
  floor?: Surface;
  /** Replace floors the world painted itself (a drawn terrazzo) with the photo. */
  repaint?: boolean;
  /** How polished the indoor floor is: 1 keeps the photo, lower is shinier. */
  polish?: number;
  wall?: Surface;
  /** Open-air ground is told apart by its colour: grass, asphalt, sand or paving. */
  outdoors?: boolean;
  paving?: Surface;
};

const hsl = { h: 0, s: 0, l: 0 };
const box = new THREE.Box3(), size = new THREE.Vector3();
const tints = new Map<string, string>();
/** Photos that keep their own colour take only a little of the world's tint. */
const NATURAL = new Set<Surface>(['asphalt_02', 'cobblestone_floor_04', 'leafy_grass', 'red_brick_03', 'sand_01', 'wood_planks', 'wood_table_001', 'laminate_floor_02']);

function tint(name: Surface, color: THREE.Color) {
  const key = `${name}|${color.getHexString()}`;
  let value = tints.get(key);
  if (!value) {
    const c = color.clone();
    if (NATURAL.has(name)) { c.getHSL(hsl); c.setHSL(hsl.h, hsl.s * 0.35, 0.62 + hsl.l * 0.4); }
    value = `#${c.getHexString()}`;
    tints.set(key, value);
  }
  return value;
}

function ground(color: THREE.Color, setting: Setting): Surface {
  color.getHSL(hsl);
  if (hsl.s > 0.18 && hsl.h > 0.18 && hsl.h < 0.45) return 'leafy_grass';
  if (hsl.s > 0.2 && hsl.h > 0.07 && hsl.h < 0.17 && hsl.l > 0.45) return 'sand_01';
  if (hsl.s < 0.2 && hsl.l < 0.32) return 'asphalt_02';
  return setting.paving ?? 'large_floor_tiles_02';
}

const isWood = (color: THREE.Color) => { color.getHSL(hsl); return hsl.h > 0.035 && hsl.h < 0.12 && hsl.s > 0.22 && hsl.l > 0.12 && hsl.l < 0.62; };

/**
 * Dresses a world. Call after it is built and before its static meshes are
 * merged. People (roots tagged `userData.person`) and anything in `skip` stay
 * as they are, and so does everything that glows, is see-through or already
 * carries a picture.
 */
export function realScenery(root: THREE.Object3D, setting: Setting, skip: THREE.Object3D[] = []) {
  root.updateMatrixWorld(true);
  const leave = new Set(skip);
  const rounded = new Map<string, THREE.BufferGeometry>();
  const visit = (o: THREE.Object3D) => {
    if (leave.has(o) || o.userData.person) return;
    const mesh = o as THREE.Mesh;
    const m = mesh.material as THREE.MeshStandardMaterial | undefined;
    if (mesh.isMesh && m && !Array.isArray(m) && m.isMeshStandardMaterial && !(mesh as THREE.InstancedMesh).isInstancedMesh && !(mesh as THREE.SkinnedMesh).isSkinnedMesh
      && !m.transparent && !m.userData.metres && m.side !== THREE.BackSide && (m.emissiveIntensity === 0 || m.emissive.getHex() === 0)) {
      const g = mesh.geometry;
      if (!g.boundingBox) g.computeBoundingBox();
      box.copy(g.boundingBox as THREE.Box3).applyMatrix4(mesh.matrixWorld).getSize(size);
      const base = root.matrixWorld.elements[13];
      const flat = size.y < 0.4 && size.x * size.z > 10, thin = Math.min(size.x, size.z);
      const low = box.max.y - base < 0.35, high = box.max.y - base > 2.3;
      let name: Surface | null = null, extra: THREE.MeshStandardMaterialParameters = {};
      // A painted floor (a drawn terrazzo, drawn tiles) gives way to the photo; any other picture stays.
      if (m.map && !(setting.repaint && flat && low && size.x * size.z > 30)) name = null;
      else if (flat && high && !setting.outdoors) name = 'ceiling_interior';
      else if (flat && low) {
        name = setting.outdoors ? ground(m.color, setting) : m.metalness > 0.5 ? null : !m.map && isWood(m.color) ? 'laminate_floor_02' : setting.floor ?? null;
        if (name && name === setting.floor && setting.polish !== undefined) extra = { roughness: setting.polish, envMapIntensity: 1.2 };
      } else if (flat) name = null;
      else if (setting.wall && thin < 0.6 && size.y > 1.9 && Math.max(size.x, size.z) > 1.6 && m.metalness < 0.5) name = setting.wall;
      else if (m.metalness < 0.3 && isWood(m.color) && Math.max(size.x, size.y, size.z) > 0.5) name = 'wood_table_001';
      if (name) {
        const dressed = surface(name, tint(name, m.color), extra);
        mesh.geometry = worldUV(g.clone(), dressed.userData.metres as number, mesh.matrixWorld);
        mesh.material = dressed;
      } else if (!m.map && !m.normalMap) {
        // A soft edge instead of a knife edge. Boxes made off-centre or already tiny stay as they are.
        let shape = g;
        if (g.type === 'BoxGeometry') {
          const { width, height, depth } = (g as THREE.BoxGeometry).parameters;
          const least = Math.min(width, height, depth), most = Math.max(width, height, depth);
          const centred = (g.boundingBox as THREE.Box3).getCenter(size).lengthSq() < 1e-8;
          if (centred && least >= 0.05 && most <= 6) {
            const key = `${width}|${height}|${depth}`;
            let soft = rounded.get(key);
            if (!soft) { soft = new RoundedBoxGeometry(width, height, depth, most > 0.5 ? 2 : 1, Math.min(0.03, least * 0.3)); rounded.set(key, soft); }
            shape = soft;
          }
        }
        // And the grain of a real painted, moulded or brushed surface on everything of one flat colour.
        if (g.attributes.normal) {
          const dressed = finished(m);
          mesh.geometry = worldUV(shape.clone(), dressed.userData.metres as number, mesh.matrixWorld);
          mesh.material = dressed;
        } else mesh.geometry = shape;
      }
    }
    for (const child of o.children) visit(child);
  };
  visit(root);
}
