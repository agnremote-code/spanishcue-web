// Charlas 3D · circles for the things that stand out in a building of floors
// (hospital, casino): one circle per kind of thing per floor, moved onto free
// ground beside it.

import { onFreeGround, type CharlaPlace } from './lugar';

export type Talk = { title: string; intro: string; themes: string[] };
type Box = { x0: number; z0: number; x1: number; z1: number };
type Floor = { id: number; y: number; bounds: { minX: number; maxX: number; minZ: number; maxZ: number } };
type Item = { type: string; x: number; z: number };
export type FloorPlace = CharlaPlace & { floor: number };

/** Free ground on a floor: inside its bounds and 0.7 m clear of every solid. */
export function freeOn(floor: Floor, solids: Box[]) {
  const b = floor.bounds;
  return (x: number, z: number) => x > b.minX + 0.8 && x < b.maxX - 0.8 && z > b.minZ + 0.8 && z < b.maxZ - 0.8
    && !solids.some(s => x > s.x0 - 0.7 && x < s.x1 + 0.7 && z > s.z0 - 0.7 && z < s.z1 + 0.7);
}

export function thingPlaces(floors: Floor[], furniture: Record<number, Item[]>, solidsFor: (floor: number) => Box[], things: Record<string, Talk>, prefix: string): FloorPlace[] {
  const out: FloorPlace[] = [];
  for (const f of floors) {
    const free = freeOn(f, solidsFor(f.id));
    for (const [i, item] of (furniture[f.id] ?? []).entries()) {
      const t = things[item.type];
      if (!t || out.some(o => o.floor === f.id && o.title === t.title)) continue;
      out.push({ ...onFreeGround({ id: `${prefix}${f.id}-${item.type}-${i}`, x: item.x, z: item.z, y: f.y, r: 1.6, ...t }, free), floor: f.id });
    }
  }
  return out;
}
