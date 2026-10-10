export type ThemeId = 'village' | 'forest' | 'journey' | 'castle' | 'dragon' | 'tower' | 'victory';
export type Theme = { title: string; bpm: number; root: number; scale: number[]; progression: number[]; melody: (number | null)[][]; drums: string[]; lead: 'brass' | 'flute' | 'horn' | 'bell'; harp: boolean; choir: boolean; ostinato: boolean };
export const THEMES: Record<ThemeId, Theme>;
export function themeFor(position: { x?: number; z?: number } | null | undefined, flags?: Record<string, boolean>): ThemeId;
export function midiToFrequency(note: number): number;
export function degreeNote(theme: Theme, degree: number, octave?: number): number;
export function chordNotes(theme: Theme, degree: number, octave?: number): number[];
