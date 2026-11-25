export type CastMember = { name: string; full: string; role: string; gender: 'f' | 'm'; voice: string; country: string; phone?: boolean };
export type Exponent = { id: string; form: string; use: string };
export type ContrastOption = { id: string; label: string; correct: boolean; feature?: string; feedback: string };
export type StimulusOption = { say: string; reply: string; end: string; mood: string };
export type Beat = {
  id: string; kind: 'contrast' | 'stimulus'; label: string; exponent?: string[]; who?: string; title?: string; closing?: boolean;
  context?: string; prompt?: string; ask?: string; after?: string; teacher?: string;
  options?: (ContrastOption | StimulusOption)[]; frames?: { id: string; label: string }[];
};
export type Production = {
  kind: 'speaking' | 'writing'; title: string; prompt: string;
  interruptions?: string[]; facts?: string[]; skeleton?: string[]; model?: string[];
};
export type Handoff = { who: string; text: string; prop: string };
export type Circle = {
  title: string; place: string; cast: string[]; objective: string; related: string[]; exponents: Exponent[];
  task: string; line: string; opening?: string; dialogue: [string, string][]; beats: Beat[]; production?: Production; handoff?: Handoff;
  talk: string[]; words: string[]; scaffolding: string; teacher: string;
};
export type RouteStep = { id?: string; circle?: string; oneOf?: string[]; minutes: number; do?: string; closing?: boolean; listening?: boolean };
export type Route = { id: string; mode: 'conversacion' | 'escucha'; title: string; minutes: number; steps: RouteStep[] };
export type Closing = {
  production: { title: string; prompt: string };
  selfCheck: { scope: string; items: { id: string; label: string }[] };
  sessionLabel: string; reset: string;
};
export type LevelContent = {
  SPOTS: string[]; CAST: Record<string, CastMember>; ROLE: string; CIRCLES: Record<string, Circle>;
  CLOSING: Closing; ROUTES: Route[]; EXTENSIONS: string; E1_LABEL: string; PLACEMENT: string;
};
export const LEVELS: { id: string; label: string; hint: string }[];
export const CONTENT: Record<string, LevelContent>;
export function contentFor(level: string): LevelContent;
export function speakerName(cast: Record<string, CastMember>, who: string): string;
