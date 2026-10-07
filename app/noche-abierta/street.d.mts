import type { Level } from './engine.mjs';

export type ItemId = 'lapiz' | 'libro' | 'gas' | 'granada' | 'pistola' | 'cuchillo' | 'corazon';
export type Item = { id: ItemId; name: string; short: string; note: string };
export type Mood = 'neutral' | 'smile' | 'love' | 'sad' | 'scared' | 'angry' | 'surprised' | 'worried' | 'pain' | 'tipsy' | 'sleepy';
export type Change = 'sonrie' | 'se-va' | 'corre' | 'ambulancia' | 'policia' | 'baila' | 'sigue' | 'llama' | 'triste' | 'enojado' | 'luz' | 'abraza' | 'se-sienta' | 'duerme';
export type Banded = { A: string; B: string; C: string };
export type CastMember = {
  id: string; name: string; role: string; age: string; body: string; build: string; height?: number; hair: string; hairColor: string; skin: string;
  top: string; topColor: string; bottom: string; bottomColor: string; extras?: string[]; pose: string; props?: string[];
  kind?: 'animal'; species?: 'dog' | 'cat' | 'pigeons'; color?: string; size?: 'small' | 'medium';
};
export type Choice = { id: string; say: Banded; reply: Banded; act?: Banded; mood: Mood; next?: string; end?: string };
export type Node = { who: string; mood: Mood; line: Banded; options: Choice[]; items?: Partial<Record<ItemId, Choice & { act: Banded }>> };
export type End = { text: Banded; change: Change; recap: string; flag?: string };
export type Encounter = {
  id: string; kind: 'escena' | 'rincon'; district: string; title: string; verb: string; goal: string;
  cast: CastMember[]; start: string; nodes: Record<string, Node>; ends: Record<string, End>;
  speak: Record<Level, string>; requires?: string; event?: 'lluvia' | 'transporte' | 'celular';
};
export type StreetState = {
  item: ItemId | null;
  open: { id: string; node: string; trail: { node: string; choice: string }[]; end: string | null } | null;
  done: Record<string, string>;
  flags: string[];
};
export type StreetChoice = { key: string; item: ItemId | null; act: string; say: string };
export type StreetView = {
  id: string; title: string; district: string; districtName: string; goal: string; kind: 'escena' | 'rincon'; step: number;
  said: { act: string; say: string; reply: string; item: ItemId | null } | null; mood: Mood;
  ended: boolean; who?: string; line?: string; choices?: StreetChoice[];
  end?: { id: string; text: string; change: Change; recap: string }; speak?: string;
};

export const ITEMS: Item[];
export const ITEM_IDS: ItemId[];
export function isItem(value: unknown): value is ItemId;
export function itemById(id: string | null): Item | null;
export const DISTRICTS: Record<string, string>;
export const ENCOUNTERS: readonly Encounter[];
export function encounterById(id: string | null | undefined): Encounter | null;
export function bandFor(level: Level): 'A' | 'B' | 'C';
export function emptyStreet(): StreetState;
export function isValidStreet(value: unknown): value is StreetState;
export function chooseItem(street: StreetState, item: ItemId): StreetState;
export function isAvailable(street: StreetState, encounter: Encounter | null, eventId?: string | null): boolean;
export function availableEncounters(street: StreetState, eventId?: string | null): Encounter[];
export function openEncounter(street: StreetState, id: string, eventId?: string | null): StreetState;
export function choicesFor(encounter: Encounter | null, nodeId: string, item: ItemId | null): (Choice & { key: string; item: ItemId | null })[];
export function chooseLine(street: StreetState, choiceId: string): StreetState;
export function stepBack(street: StreetState): StreetState;
export function restartEncounter(street: StreetState): StreetState;
export function closeEncounter(street: StreetState): StreetState;
export function moodOf(street: StreetState, id: string): Mood;
export function streetView(street: StreetState, level: Level): StreetView | null;
export function streetSummary(street: StreetState): { id: string; title: string; district: string; recap: string }[];
export function heartsUsed(street: StreetState): number;
export function ambientReaction(item: ItemId, level: Level, seed?: number): { mood: Mood; text: string; flee: boolean; hearts: boolean } | null;
