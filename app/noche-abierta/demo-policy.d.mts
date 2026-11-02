import type { Encounter } from './street-core.mjs';
export const DEMO_FREE_DISTRICTS: readonly string[];
export const DEMO_LOCKED_SCENES: readonly string[];
export const DEMO_STREET_PATH: string;
export function isDemoFree(encounter: Encounter): boolean;
export function lockedShell(encounter: Encounter): Encounter;
export type DemoStreet = {
  encounters: Encounter[]; a0: Record<string, unknown>; a1Words: Record<string, unknown>;
  talk: Record<string, Record<string, string[]>>; talkA0: Record<string, unknown>;
};
export function demoStreet(data: { encounters: readonly Encounter[]; a0: Record<string, unknown>; a1Words: Record<string, unknown>; talk: Record<string, unknown>; talkA0: Record<string, unknown> }): DemoStreet;
