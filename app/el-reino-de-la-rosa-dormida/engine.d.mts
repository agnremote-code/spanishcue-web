import type { Quest, SpanishLevel } from './content.mjs';
export { LEVELS, NPCS, ITEMS, SPELLS, QUESTS } from './content.mjs';
export type Level = SpanishLevel;
export type Position = { x: number; y: number; z: number };
export interface GameState {
  version: 1;
  level: SpanishLevel;
  completed: string[];
  inventory: string[];
  spells: string[];
  flags: Record<string, boolean>;
  dialogue: Record<string, number>;
  checkpoint: Position;
}
export type GameAction =
  | { type: 'answer'; npc: string; text: string }
  | { type: 'collect'; item: string }
  | { type: 'cast'; spell: string; target?: string }
  | { type: 'checkpoint'; position: Position }
  | { type: 'level'; level: string };
export interface Dialogue {
  npc: string; name: string; text: string; prompt: string; hint: string;
  suggestions: string[]; intent: string; stage: number;
  complete: boolean; locked: boolean; level: SpanishLevel;
}
export interface AnswerEvaluation { accepted: boolean; feedback: string; intent: string }
export interface ActiveQuest extends Quest { objective: string; target: string; total: number; complete: boolean }
export const SAVE_KEY: string;
export function createGame(level?: string): GameState;
export function restoreGame(raw: unknown): GameState;
export function reduceGame(state: GameState, action: GameAction): GameState;
export function currentQuest(state: GameState): ActiveQuest;
export function getDialogue(npc: string, level?: string, stage?: number, state?: GameState): Dialogue;
export function evaluateAnswer(dialogue: Dialogue, input: unknown): AnswerEvaluation;
export function canInteract(state: GameState, id: string): boolean;
export function actionFeedback(previous: GameState, action: GameAction, next: GameState): string;
