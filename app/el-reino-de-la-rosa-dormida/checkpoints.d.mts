import type { Quest } from './content.mjs';
import type { GameState, Position } from './engine.mjs';
export interface StartPoint { id: string; chapter: number; label: string; done: number; position: Position; open?: string }
export const START_POINTS: StartPoint[];
export const CHAPTERS: (Quest & { points: StartPoint[] })[];
export function applyCampaignStep(state: GameState, step: [string, string, string?]): GameState;
export function stateForStartPoint(pointId: string, level?: string): GameState | null;
export function startPointFor(state: GameState): StartPoint;
