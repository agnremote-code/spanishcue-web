export type CastMember = { name: string; full: string; role: string; gender: 'f' | 'm'; voice: string; country: string };
export type StoryScene = { id: string; sector: string; floor: number; cast: string[] };
export const CAST: Record<string, CastMember>;
export const STORY: StoryScene[];
export const STORY_IDS: string[];
export function castByName(name: string): string | null;
export const LEVEL_IDS: string[];
export const SCENE_WORDS: Record<string, [number, number]>;
export const MOODS: string[];
