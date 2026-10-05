import type { Beat, Progress } from './activities.mjs';

export type Help = { starters: string[]; chunks: string[]; vocab?: string[] };
export type Grammar = { title: string; rows: { form: string; example: string }[] };
export type Message = { from: string; time: string; text: string };
export type Option = { id: string; label: string; result?: string; ask?: string; facts?: string[] };
export type Activity = {
  id: string; title: string; lessonLevel?: Level; role?: string; teacher?: string[];
  situation?: string; prompt?: string; options?: Option[]; close?: string;
  who?: string; says?: string; ask?: string; followUps?: string[];
  conditions?: { text: string; ask: string }[];
  object?: string; year?: string; plaque?: string; detail?: string; ask2?: string;
  task?: string; pushback?: string; task2?: string;
  thread?: Message[]; next?: Message; reply?: string;
  items?: { id: string; label: string; detail: string }[]; reveal?: string;
  need?: string; banned?: string[]; wrong?: string;
  people?: { name: string; wants: string; reason: string }[]; change?: string;
};
export type ActivityType = 'mensajes' | 'observar' | 'decisiones' | 'conversacion' | 'social' | 'condiciones' | 'museo' | 'comparar' | 'describir' | 'acuerdo';
export type Location = {
  id: string; name: string; short: string; type: ActivityType; focus: string; help: Help; grammar?: Grammar;
  hub?: boolean; hubPrompt?: string; activities: Activity[];
};
export type Mechanic = { mechanic: string; more: string };
export type CityEvent = { id: string; title: string; text: string; affects: string[]; prompts: string[]; teacher: string };
export type Encounter = { done: boolean; acts: Record<string, Progress> };
export type Phase = 'llegada' | 'ciudad' | 'encuentro' | 'evento' | 'cierre';
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type NightState = {
  level?: Level; phase: Phase; position: string | null; activity: string | null; visitOrder: string[]; encounters: Record<string, Encounter>;
  event: { id: string; resolved: boolean } | null; final: { criteria: Record<string, boolean> };
};
export type SummaryItem = { id: string; name: string; situations: string[]; choices: string[]; done: boolean };
export type View = {
  location: Location; mechanic: Mechanic; activity: null;
} | {
  location: Location; mechanic: Mechanic; activity: Activity; progress: Progress; beats: Beat[];
  beat: Beat; index: number; total: number; last: boolean;
};

export const LESSON_ID: number;
export const MIN_ENCOUNTERS_FOR_EVENT: number;
export const ROUTE_PLAN: { id: string; title: string; minutes: number; note: string }[];
export const ARRIVAL: { kicker: string; title: string; premise: string; warmup: string[]; teacher: string };
export const MECHANICS: Record<ActivityType, Mechanic>;
export const LOCATIONS: Location[];
export const CITY_EVENTS: CityEvent[];
export const TEACHER_MOVES: { id: string; label: string; line: string }[];
export const FINAL: {
  title: string; prompts: string[]; hypothetical: string; help: Help;
  criteria: { id: string; label: string; detail: string }[];
};
export type Content = {
  level: Level; ARRIVAL: typeof ARRIVAL; MECHANICS: typeof MECHANICS; LOCATIONS: Location[]; CITY_EVENTS: CityEvent[];
  FINAL: typeof FINAL; TEACHER_MOVES: typeof TEACHER_MOVES; ROUTE_PLAN: typeof ROUTE_PLAN;
};
export const LEVELS: Level[];
export const DEFAULT_LEVEL: Level;
export function isLevel(value: unknown): value is Level;
export function contentFor(level?: Level | string | null): Content;
export function setLevel(state: NightState, level: Level): NightState;
export function locationById(id: string | null, level?: Level | string | null): Location | null;
export function activityById(location: Location | null, id: string | null): Activity | null;
export function initialState(level?: Level | string | null): NightState;
export function startExploring(state: NightState): NightState;
export function openLocation(state: NightState, id: string, activityId?: string | null): NightState;
export function openActivity(state: NightState, activityId: string): NightState;
export function closeActivity(state: NightState): NightState;
export function previousBeat(state: NightState): NightState;
export function previousActivity(state: NightState): NightState;
export function otherActivity(state: NightState): NightState;
export function chooseOption(state: NightState, optionId: string): NightState;
export function advanceBeat(state: NightState): NightState;
export function inspectItem(state: NightState, itemId: string): NightState;
export function markDone(state: NightState): NightState;
export function restartActivity(state: NightState): NightState;
export function currentView(state: NightState): View | null;
export function leaveLocation(state: NightState, id?: string | null): NightState;
export function completedIds(state: NightState): string[];
export function eventReady(state: NightState): boolean;
export function suggestedEvent(state: NightState): string;
export function triggerEvent(state: NightState, eventId: string): NightState;
export function resolveEvent(state: NightState): NightState;
export function finalAvailable(state: NightState): boolean;
export function openFinal(state: NightState): NightState;
export function toggleCriterion(state: NightState, criterionId: string): NightState;
export function nightClock(state: NightState): string;
export function nightSummary(state: NightState): SummaryItem[];
export function isValidState(value: unknown): value is NightState;

export type WorldOutcome = { key: string; location: string; travel: "walk" | "ride" | "wait" | "turn"; label: string };
export function worldOutcome(state: NightState): WorldOutcome | null;
