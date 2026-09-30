export type Reaction = { id: string; label: string; followUp: string };
export type Cue = {
  from?: string; time?: string; text?: string; speaker?: string;
  items?: { id: string; label: string; detail?: string; pro?: string; con?: string }[];
  clues?: string[];
  routes?: { id: string; label: string; time: string; note: string }[];
  people?: { name: string; wants: string; reason?: string }[];
  versions?: { who: string; text: string }[];
};
export type Variant = {
  id: string; title: string; situation: string; cue: Cue; reactions: Reaction[]; prompts: string[];
  twist: string; role: string; followUps: string[];
};
export type Help = { starters: string[]; chunks: string[]; vocab?: string[] };
export type Location = { id: string; name: string; short: string; kind: string; help: Help; variants: Variant[] };
export type CityEvent = { id: string; title: string; text: string; affects: string[]; prompts: string[]; teacher: string };
export type Encounter = { variant: number; reaction: string | null; step: number; inspected: string[]; done: boolean };
export type Phase = 'llegada' | 'ciudad' | 'encuentro' | 'evento' | 'cierre';
export type NightState = {
  phase: Phase; position: string | null; visitOrder: string[]; encounters: Record<string, Encounter>;
  event: { id: string; resolved: boolean } | null; final: { criteria: Record<string, boolean> };
};
export type SummaryItem = { id: string; name: string; situation: string; choice: string | null; done: boolean };

export const LESSON_ID: number;
export const MIN_ENCOUNTERS_FOR_EVENT: number;
export const ROUTE_PLAN: { id: string; title: string; minutes: number; note: string }[];
export const ARRIVAL: { kicker: string; title: string; premise: string; warmup: string[]; teacher: string };
export const LOCATIONS: Location[];
export const CITY_EVENTS: CityEvent[];
export const TEACHER_MOVES: { id: string; label: string; line: string }[];
export const FINAL: {
  title: string; prompts: string[]; hypothetical: string; help: Help;
  criteria: { id: string; label: string; detail: string }[];
};
export function locationById(id: string): Location | null;
export function initialState(): NightState;
export function startExploring(state: NightState): NightState;
export function openLocation(state: NightState, id: string): NightState;
export function setVariant(state: NightState, id: string, variant: number): NightState;
export function inspectItem(state: NightState, id: string, itemId: string): NightState;
export function chooseReaction(state: NightState, id: string, reactionId: string): NightState;
export const TWIST_STEP: number;
export const TWIST_QUESTION: string;
export function stepCount(location: Location, variant: number): number;
export function nextStep(state: NightState, id: string): NightState;
export function leaveLocation(state: NightState, id: string): NightState;
export function markDone(state: NightState, id: string): NightState;
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
