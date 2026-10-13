import type { GameState } from './engine.mjs';
import type { SpanishLevel } from './content.mjs';
export interface Profile { id: string; name: string; level: SpanishLevel; createdAt: string; updatedAt: string; started: boolean; save: GameState }
export interface ProfileStore { version: 2; activeId: string | null; profiles: Profile[]; legacyMigrated: boolean }
type StorageLike = { getItem(key: string): string | null; setItem(key: string, value: string): void };
export const PROFILES_KEY: string;
export const EXPORT_KIND: string;
export function emptyStore(): ProfileStore;
export function newProfileId(random?: () => number, now?: number): string;
export function parseStore(raw: unknown): ProfileStore;
export function readStore(storage: StorageLike, now?: string): ProfileStore;
export function writeStore(storage: StorageLike, store: ProfileStore): void;
export function createProfile(store: ProfileStore, options?: { name?: string; level?: string; state?: GameState; started?: boolean; now?: string; id?: string }): { store: ProfileStore; profile: Profile | null };
export function saveProfileState(store: ProfileStore, id: string, state: GameState, now?: string): ProfileStore;
export function setActive(store: ProfileStore, id: string): ProfileStore;
export function renameProfile(store: ProfileStore, id: string, name: string): ProfileStore;
export function setProfileLevel(store: ProfileStore, id: string, level: string, now?: string): ProfileStore;
export function resetProfile(store: ProfileStore, id: string, now?: string): ProfileStore;
export function deleteProfile(store: ProfileStore, id: string): ProfileStore;
export function activeProfile(store: ProfileStore): Profile | null;
export function exportStore(store: ProfileStore, now?: string): string;
export function importProfiles(store: ProfileStore, json: unknown, now?: string): { store: ProfileStore; added: number; error: string };
export function profileSummary(profile: Profile): { chapter: string; point: string; lastSession: string | null; level: SpanishLevel };
