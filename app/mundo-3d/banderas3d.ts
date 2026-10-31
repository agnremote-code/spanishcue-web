// Mundo 3D · the country's flag in the world: a pole with a cloth that waves,
// and pennant strings in the flag's colours. Drawn from banderas.mjs.
import * as THREE from 'three';
import { canvas, cylinder, solid } from './kit3d';
import { FLAG_COLORS, FLAG_RATIO, drawFlag, hasFlag } from './banderas.mjs';

const textures = new Map<string, THREE.Texture>();

/** The flag as a texture (one per country, shared by every pole). */
export function flagTexture(id: string) {
  let t = textures.get(id);
  if (!t) {
    const h = 128, w = Math.round(h * ((FLAG_RATIO as Record<string, number>)[id] ?? 1.5));
    t = canvas(w, h, ctx => { drawFlag(ctx, id, w, h); });
    t.colorSpace = THREE.SRGBColorSpace;
    textures.set(id, t);
  }
  return t;
}

export const flagColors = (id: string): string[] => (FLAG_COLORS as Record<string, string[]>)[id] ?? ['#16336b', '#ffffff'];
export const countryHasFlag = (id: string | undefined): id is string => Boolean(id && hasFlag(id));

type Cloth = { mesh: THREE.Mesh; base: Float32Array; width: number; phase: number };

/** Waving cloths: call wave(t) every frame. */
export function createFlags() {
  const cloths: Cloth[] = [];
  return {
    /** A pole of height `h` at (x, y, z) with the flag at its top, `width` metres wide, flying towards +x of `heading`. */
    pole(parent: THREE.Object3D, id: string, x: number, y: number, z: number, h = 4, width = 1.6, heading = 0) {
      const g = new THREE.Group();
      g.add(cylinder(0.04, 0.05, h, solid('#d9dde2', 0.4, 0.6), 0, h / 2, 0, 8));
      g.add(new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), solid('#e8c35a', 0.3, 0.7)).translateY(h + 0.04));
      const ratio = (FLAG_RATIO as Record<string, number>)[id] ?? 1.5;
      const height = width / ratio;
      const geo = new THREE.PlaneGeometry(width, height, 12, 1);
      geo.translate(width / 2, 0, 0);
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: flagTexture(id), side: THREE.DoubleSide, roughness: 0.8 }));
      mesh.position.set(0.05, h - height / 2 - 0.05, 0);
      mesh.castShadow = true;
      g.add(mesh);
      g.position.set(x, y, z);
      g.rotation.y = heading;
      parent.add(g);
      cloths.push({ mesh, base: Float32Array.from(geo.attributes.position.array as Float32Array), width, phase: x * 0.7 + z * 0.3 });
      return g;
    },
    wave(t: number) {
      for (const c of cloths) {
        const pos = c.mesh.geometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < pos.count; i++) {
          const bx = c.base[i * 3], k = bx / c.width;
          pos.setZ(i, Math.sin(t * 3.2 + bx * 3 + c.phase) * 0.12 * k);
          pos.setY(i, c.base[i * 3 + 1] - k * k * 0.05);
        }
        pos.needsUpdate = true;
      }
    },
  };
}

/** A string of triangular pennants in the flag's colours, hung between two points. */
export function bunting(parent: THREE.Object3D, id: string, ax: number, az: number, bx: number, bz: number, y: number) {
  const colors = [...flagColors(id), '#ffffff'];
  const len = Math.hypot(bx - ax, bz - az), n = Math.max(4, Math.round(len / 0.7));
  const g = new THREE.Group();
  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, len, 4), solid('#f2efe8', 0.9));
  rope.rotation.z = Math.PI / 2; rope.position.set(len / 2, 0, 0); g.add(rope);
  const tri = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-0.22, 0, 0), new THREE.Vector3(0.22, 0, 0), new THREE.Vector3(0, -0.5, 0)]);
  tri.computeVertexNormals();
  const mats = colors.map(c => new THREE.MeshStandardMaterial({ color: c, side: THREE.DoubleSide, roughness: 0.8 }));
  for (let i = 0; i < n; i++) {
    const x = ((i + 0.5) / n) * len, sag = Math.sin(((i + 0.5) / n) * Math.PI) * 0.45;
    const m = new THREE.Mesh(tri, mats[i % mats.length]); m.position.set(x, -sag, 0); g.add(m);
  }
  g.position.set(ax, y, az);
  g.rotation.y = -Math.atan2(bz - az, bx - ax);
  parent.add(g);
  return g;
}
