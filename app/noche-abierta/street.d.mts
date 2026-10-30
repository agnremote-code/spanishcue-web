export * from './street-core.mjs';
import type { Encounter } from './street-core.mjs';
export const ALL_ENCOUNTERS: readonly Encounter[];
export const ALL_A0_SCENES: Record<string, unknown>;
export const ALL_A1_WORDS: Record<string, unknown>;
export function registerFullStreet(): void;
