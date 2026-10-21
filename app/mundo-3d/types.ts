// Mundo 3D · the shared shape of an explorable country:
// País → Estado (región) → Escena 3D → Spot → Nivel → Interacción.
// Content (what people say and ask) lives apart from the scenes (what the
// world looks like), so a new country only adds data and its scene builders.

export type Bi = { es: string; en: string };
export type WorldLevel = 'A0' | 'A1' | 'A2' | 'B1';
export const WORLD_LEVELS: readonly WorldLevel[] = ['A0', 'A1', 'A2', 'B1'];

/** A main question, the help that builds an answer, and where the talk goes next. */
export type Question = { q: Bi; help: Bi; follow: Bi[] };
/** One thing the student can decide, and what happens then. */
export type Choice = { say: Bi; then: Bi };

/** Everything one spot offers at one level. */
export type SpotLevel = {
  /** The situation the student walks into. */
  scene: Bi;
  /** What the character says first. */
  opener: Bi;
  /** A small decision with three ways out. */
  decide: { ask: Bi; options: Choice[] };
  /** Something unexpected that changes the conversation. */
  twist: Bi;
  questions: Question[];
  words: Bi[];
};

export type SpotContent = {
  id: string;
  name: Bi;
  who: { name: string; role: Bi };
  levels: Record<WorldLevel, SpotLevel>;
};

/** The conversation content of one region (a state, a province…). */
export type RegionContent = { id: string; spots: SpotContent[] };

/** Ambient sound kinds (app/mundo-3d/ambience.ts). */
export type SoundKind = 'beach' | 'city' | 'coast' | 'ranch' | 'tropic' | 'mountain' | 'sky';

/** A region as the map and the menus show it. */
export type RegionInfo = {
  id: string;
  /** Name on the map sign, in the country's own language. */
  sign: string;
  name: Bi;
  /** The zone the student enters: "Miami Beach", "Manhattan"… */
  zone: Bi;
  hook: Bi;
  /** Name of the silhouette in the country's shape list (map relief). */
  shape: string;
  /** Island position on the map, metres from the airport. */
  at: { x: number; z: number };
  color: string;
  sound: SoundKind;
  /** Small landmarks on the map island (countries after the US); `dist` is
   *  metres behind the gate, `side` metres to its side. */
  marks?: { kind: 'palm' | 'pine' | 'peak' | 'tower' | 'pyramid' | 'dome' | 'house'; dist: number; side: number; size?: number; color?: string; snow?: boolean }[];
  /** Spot ids in walking order, with their names for menus and the no-3D list. */
  spots: { id: string; name: Bi }[];
};

export type CountryInfo = {
  id: string;
  /** Catalog lesson id: progress per student is saved under it. */
  lessonId: number;
  name: Bi;
  welcome: { es: string; en: string };
  regions: RegionInfo[];
};
