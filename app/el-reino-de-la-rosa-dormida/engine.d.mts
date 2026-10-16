import type { Quest, SpanishLevel } from './content.mjs';
export { LEVELS, NPCS, ITEMS, SPELLS, QUESTS } from './content.mjs';
export type Level = SpanishLevel;
export type Position = { x: number; y: number; z: number };
export interface GameState {
  version: 2;
  level: SpanishLevel;
  completed: string[];
  inventory: string[];
  spells: string[];
  flags: Record<string, boolean>;
  dialogue: Record<string, number>;
  places: Record<string, number>;
  deep: Record<string, number>;
  talking: { id: string; deep: boolean } | null;
  checkpoint: Position;
}
export type GameAction =
  | { type: 'say' | 'answer'; npc: string; text?: string }
  | { type: 'open' | 'deepen'; npc: string }
  | { type: 'close' }
  | { type: 'collect'; item: string }
  | { type: 'cast'; spell: string; target?: string }
  | { type: 'checkpoint'; position: Position }
  | { type: 'level'; level: string };
export interface Help { frames: string[]; words: string[]; safe: string; safeEn?: string }
export interface ConversationView {
  id: string; kind: 'npc' | 'place'; name: string; role: string; level: SpanishLevel; topic: string;
  total: number; index: number; revealed: boolean;
  mode: 'locked' | 'main' | 'deep' | 'revisit'; step: string;
  text: string; en?: string; options?: string[]; fn?: string; isQuestion: boolean;
  mission: { objective: string; title: string; chapter: number; here: boolean };
  canDeepen: boolean; help: Help | null;
  /** A0 and A1 only: 4–6 bilingual words for this encounter (empty at other levels). */
  keywords: { es: string; en: string }[];
}
export interface ActiveQuest extends Quest { objective: string; target: string; total: number; complete: boolean }
export const LEGACY_SAVE_KEY: string;
export const SAVE_KEY: string;
export const STATE_VERSION: 2;
export const PLACE_IDS: string[];
export const CAMPAIGN: [string, string, string?][];
export function conversationLength(id: string): number;
export function hasTalked(state: GameState, npc: string): boolean;
export function conversationAvailable(state: GameState, id: string): boolean;
export function createGame(level?: string): GameState;
export function restoreGame(raw: unknown): GameState;
export function reduceGame(state: GameState, action: GameAction): GameState;
export function currentQuest(state: GameState): ActiveQuest;
export function discoveries(state: GameState): { npc: string; name: string; text: string }[];
export function deepPool(id: string, level: string): { es: string; en?: string; options?: string[]; fn?: string }[];
export function conversationView(state: GameState, id: string): ConversationView;
export function getDialogue(npc: string, level?: string, stage?: number, state?: GameState): ConversationView;
export function canInteract(state: GameState, id: string): boolean;
export function actionFeedback(previous: GameState, action: GameAction, next: GameState): string;
