import type { LevelContent } from './levels.mjs';
export const BANDS: Record<string, 'a0' | 'a' | 'b' | 'c'>;
export const BAND_LABEL: Record<'a0' | 'a' | 'b' | 'c', string>;
export const LOADERS: Record<string, () => Promise<{ default: LevelContent }>>;
export function bandOf(level: string): 'a0' | 'a' | 'b' | 'c';
export function loadStreet(level: string): Promise<LevelContent>;
