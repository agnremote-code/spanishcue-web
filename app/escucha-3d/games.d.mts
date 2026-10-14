export const GAMES: Record<'noche' | 'casino' | 'bosque' | 'reino', { title: string; levels: string[]; spots: string[] }>;
export const WORDS: Record<string, [number, number]>;
export const RATE: Record<string, string>;
export function audioSrc(game: string, level: string, id: string): string;
export function listeningFor<T extends { id: string }>(items: T[], spot: string | null, done?: string[]): T | null;
export function parseGaps(source: string): { parts: string[]; answers: string[] };
export function sameWord(a: string, b: string): boolean;
export function transcriptOf(item: { lines: { text: string }[] }): string;
export function wordCount(text: string): number;
