import type { Content, Level } from './engine.mjs';

export const LEVELS: Level[];
export const DEFAULT_LEVEL: Level;
export const LEVEL_INFO: Record<Level, { name: string; demand: string }>;
export const PATCHES: Record<Level, object>;
export function isLevel(value: unknown): value is Level;
export function merge<T>(base: T, patch: unknown): T;
export function contentFor(level?: Level | string | null): Content;
export function untouched(level: Level): string[];
