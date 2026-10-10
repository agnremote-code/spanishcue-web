export type SpanishLevel = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export interface Character { id: string; name: string; role: string; color: string }
export interface Item { id: string; name: string; icon: string; description: string }
export interface Spell { id: string; name: string; key: string; color: string; description: string }
export interface Quest { id: string; number: number; title: string; description: string; reward: string }
export const LEVELS: SpanishLevel[];
export const NPCS: Character[];
export const ITEMS: Item[];
export const SPELLS: Spell[];
export const QUESTS: Quest[];
export const LEVEL_FOCUS: Record<SpanishLevel, string>;
export const DIALOGUES: Record<string, [string, string, [string, string][]][]>;
export const INTENTS: Record<string, { any: string[]; all?: string[][]; reject?: string[] }>;
