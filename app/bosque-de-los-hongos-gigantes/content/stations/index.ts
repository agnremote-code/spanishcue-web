import b1, { micro as b1Micro } from './b1.mjs';
import type { CategoryId, Level, Prompt } from '../types';
// Level data for the shared expedition world. Each authored level maps every
// landmark (a category id) to one station conversation; a level without an
// entry keeps the category banks, so the same 3D world serves A1–C2.
export const STATION_LEVELS: Partial<Record<Level, Prompt[]>> = { B1: b1 as Prompt[] };
export function stationFor(level: Level, zone: CategoryId): Prompt | null {
  return STATION_LEVELS[level]?.find(p => p.zone === zone) ?? null;
}
export function hasExpedition(level: Level) { return Boolean(STATION_LEVELS[level]?.length); }

/** A short moment between stations: quick to say, never checked. */
export type MicroPrompt = { id: string; type: string; label: string; prompt: string; choices?: string[]; hint?: string };
export const MICRO_LEVELS: Partial<Record<Level, MicroPrompt[]>> = { B1: b1Micro as MicroPrompt[] };
/** Authored moment for a spot, or a quick question from the level's own deck so every level can talk on the way. */
export function microFor(level: Level, spot: string, deck: Prompt[]): MicroPrompt | null {
  const authored = MICRO_LEVELS[level]?.find(m => m.id === spot);
  if (authored) return authored;
  const quick = deck.filter(p => !p.station && (p.type === 'quick' || p.type === 'scale' || p.type === 'choice'));
  if (!quick.length) return null;
  const n = Number(spot.split('-')[1]) || 0, p = quick[(n * 7 + (spot.startsWith('mirador') ? 3 : 0)) % quick.length];
  return { id: spot, type: p.type, label: spot.startsWith('mirador') ? 'MIRADOR' : 'EN EL CAMINO', prompt: p.question, choices: p.choices?.slice(0, 4), hint: p.support?.[0] };
}
