import type { WorldLevel } from './types';

export type Progress = {
  level: WorldLevel;
  done: Partial<Record<WorldLevel, string[]>>;
  at: { region: string; spot: string | null } | null;
  landed: boolean;
};
export type Saved = { values: Record<string, unknown>; results: Record<string, unknown>; pos: { stage: number; step: number } };
type RegionLike = { id: string; spots: { id: string }[] };

export const LEVELS: WorldLevel[];
export function storageKey(country: string): string;
export function spotKey(region: string, spot: string): string;
export function normaliseLevel(value: unknown): WorldLevel | null;
export function createProgress(level?: string): Progress;
export function restore(raw: unknown): Progress;
export function serialise(progress: Progress): string;
export function setLevel(progress: Progress, level: string): Progress;
export function doneFor(progress: Progress, level?: WorldLevel): string[];
export function isDone(progress: Progress, region: string, spot: string, level?: WorldLevel): boolean;
export function markDone(progress: Progress, region: string, spot: string): Progress;
export function visit(progress: Progress, region: string, spot?: string | null): Progress;
export function land(progress: Progress): Progress;
export function resetLevel(progress: Progress): Progress;
export function regionCount(progress: Progress, regions: RegionLike[]): Record<string, number>;
export function nextSpot(progress: Progress, regions: RegionLike[], region: string, spot: string): { region: string; spot: string } | null;
export function toSaved(progress: Progress, regions: RegionLike[]): Saved;
export function fromSaved(saved: unknown): Progress;
