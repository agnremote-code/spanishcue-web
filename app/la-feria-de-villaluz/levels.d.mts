import type { BuscaSet } from './look-contract.d.mts';
export type CastMember = { name: string; full: string; role: string; gender: 'f' | 'm'; voice: string; country: string; listening?: boolean };
export type Exponent = { id: string; form: string; use: string };
export type ContrastOption = { id: string; label: string; correct: boolean; feature?: string; feedback: string };
export type StimulusOption = { say: string; reply: string; end: string; mood: string };
export type Beat = {
  id: string; kind: 'contrast' | 'stimulus' | 'busca'; label: string; exponent?: string[]; who?: string;
  context?: string; prompt?: string; ask?: string; after?: string; teacher?: string;
  options?: (ContrastOption | StimulusOption)[]; frames?: { id: string; label: string }[]; sets?: string[];
};
export type Circle = {
  status?: string; title: string; place: string; objective: string; related: string[]; exponents: Exponent[];
  line: string; dialogue: [string, string][]; beats: Beat[]; timeline?: string[]; talk: string[]; words: string[]; teacher: string;
};
export type RouteStep = { id?: string; circle?: string; oneOf?: string[]; minutes: number; do?: string; closing?: boolean; listening?: boolean };
export type Route = { id: string; mode: 'conversacion' | 'escucha'; title: string; minutes: number; steps: RouteStep[] };
export type Closing = {
  narrative: { prompt: string; frames: string[]; source: string; opening: string; ending: string };
  selfCheck: { scope: string; marks: string[]; items: { id: string; label: string }[] };
  transfer: { question: string; model: string };
  sessionLabel: string; reset: string;
};
export type LevelContent = {
  SPOTS: string[]; CAST: Record<string, CastMember>; CIRCLES: Record<string, Circle>; BUSCA: BuscaSet[];
  CLOSING: Closing; ROUTES: Route[]; E1_LABEL: string; PLACEMENT: string;
};
export const LEVELS: { id: string; label: string; hint: string }[];
export const CONTENT: Record<string, LevelContent>;
export function contentFor(level: string): LevelContent;
export function speakerName(cast: Record<string, CastMember>, who: string): string;
