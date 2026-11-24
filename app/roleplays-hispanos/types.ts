/** Spanish text first, its English gloss second. */
export type Pair = [string, string];
/** «L» is the local character (the teacher reads it), «T» is the student. */
export type Who = 'L' | 'T';

/** One step of «Tu turno»: the local asks, the student answers with as much help as the teacher chooses. */
export type Step = {
  /** What the local character says or asks. */
  q: Pair;
  /** Two complete model answers the student can choose and read aloud. */
  a: Pair[];
  /** A sentence frame with ___ for the gap. */
  f: Pair;
  /** Three pieces that fit the gap. */
  w: Pair[];
};

export type Scene = {
  emoji: string;
  title: string;
  /** English title of the scene. */
  en: string;
  /** Where the student is and what happens. */
  c: Pair;
  /** Who the student talks to. */
  who: Pair;
  /** Model dialogue: ten short lines, local and student. */
  d: [Who, Pair][];
  /** «Tu turno»: five steps with graded help. */
  s: Step[];
};

export type Expression = {
  /** The local expression as it is said. */
  t: string;
  /** Closest English meaning. */
  en: string;
  /** When and how it is used. */
  uso: Pair;
  /** One example sentence. */
  ej: Pair;
  /** A warning about register, if any. */
  ojo?: Pair;
};

export type CountryContent = { expresiones: Expression[]; escenas: Scene[] };

export type CountryMeta = {
  slug: string;
  /** Lesson id in app/lesson-catalog.ts. */
  id: number;
  name: string;
  /** ISO code of the flag file in public/roleplays-hispanos/banderas/. */
  flag: string;
  /** Accent of the class, taken from the flag. */
  accent: string;
  /** Second colour of the flag for the hero. */
  accent2: string;
  /** Three expressions shown on the hero. */
  hero: [string, string, string];
  /** How people address each other there (tú, vos, usted, vosotros). */
  trato: Pair;
  /** The local voice of the roleplays, e.g. «el español mexicano». */
  variedad: string;
};
