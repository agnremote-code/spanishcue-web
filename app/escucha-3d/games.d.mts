export const GAMES: Record<'noche' | 'casino' | 'bosque' | 'reino' | 'hospital' | 'usa' | 'mexico' | 'argentina' | 'espana' | 'suecia' | 'uk' | 'irlanda' | 'australia' | 'suiza' | 'israel' | 'indonesia' | 'feria' | 'madrid' | 'ascensor', { title: string; levels: string[]; spots: string[]; ownListening?: boolean; bilingualA0?: boolean; freeAudio?: boolean }>;
export const WORDS: Record<string, [number, number]>;
export const RATE: Record<string, string>;
export function audioSrc(game: string, level: string, id: string): string;
export function listeningFor<T extends { id: string }>(items: T[], spot: string | null, done?: string[], strict?: boolean): T | null;
export function parseGaps(source: string): { parts: string[]; answers: string[] };
export function sameWord(a: string, b: string): boolean;
export function transcriptOf(item: { lines: { text: string }[] }): string;
export function wordCount(text: string): number;
