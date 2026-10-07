import b1 from './b1.mjs';
import type { CategoryId, Level, Prompt } from '../types';
// Level data for the shared expedition world. Each authored level maps every
// landmark (a category id) to one station conversation; a level without an
// entry keeps the category banks, so the same 3D world serves A1–C2.
export const STATION_LEVELS: Partial<Record<Level, Prompt[]>> = { B1: b1 as Prompt[] };
export function stationFor(level: Level, zone: CategoryId): Prompt | null {
  return STATION_LEVELS[level]?.find(p => p.zone === zone) ?? null;
}
export function hasExpedition(level: Level) { return Boolean(STATION_LEVELS[level]?.length); }
