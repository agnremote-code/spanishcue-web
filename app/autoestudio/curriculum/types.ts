/**
 * Autoestudio content contract.
 *
 * Every weekly module is plain data typed by this file and rendered by one
 * shared engine (app/autoestudio/engine). Content files never contain JSX.
 * Text fields accept a tiny inline markup: **bold**, _italic_ and `form`
 * (highlighted Spanish form). Nothing else is interpreted.
 */

export type LevelId = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export type Domain =
  | "grammar"
  | "vocabulary"
  | "pronunciation"
  | "listening"
  | "reading"
  | "writing"
  | "speaking"
  | "functional"
  | "discourse"
  | "review";

/** A curricular objective: the unit the coverage matrix is built from. */
export type Objective = {
  /** Stable id, e.g. "a1.gram.ser-presente". Never reuse a retired id. */
  id: string;
  level: LevelId;
  domain: Domain;
  topic: string;
  /** Learner-facing communicative outcome ("Puedo…" / "Can…"). */
  outcome: string;
  /** Objective ids that must be introduced in an earlier (or the same) week. */
  prerequisites: string[];
  /** Week in which the objective is introduced as NEW. */
  week: number;
  /** PCIC inventory reference when one applies, e.g. "Gramática 9.1". */
  pcic?: string;
  /** Existing SpanishCue routes that extend this objective. */
  related?: string[];
};

export type LevelMeta = {
  id: LevelId;
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  name: string;
  nameEn: string;
  /** Learner outcome for the whole level. */
  outcome: string;
  outcomeEn: string;
  /** Journey theme: the region this stretch of the road crosses. */
  route: string;
  routeEn: string;
  /** How much English scaffolding the level uses. */
  support: "strong" | "moderate" | "spanish-first" | "mostly-spanish" | "spanish-only";
  color: string;
  mascot: string;
};

/** Voice tag: language-region plus an optional gender hint for synthesis. */
export type Voice =
  | "es-MX-f" | "es-MX-m"
  | "es-ES-f" | "es-ES-m"
  | "es-AR-f" | "es-AR-m"
  | "es-CO-f" | "es-CO-m"
  | "es-CL-f" | "es-CL-m"
  | "es-PE-f" | "es-PE-m"
  | "es-CU-f" | "es-CU-m"
  | "es-US-f" | "es-US-m"
  | "es-VE-f" | "es-VE-m"
  | "es-UY-f" | "es-UY-m"
  | "es-GQ-f" | "es-GQ-m";

export type Example = {
  es: string;
  /** English gloss, used mainly at A1–A2. */
  en?: string;
  note?: string;
};

// ---------------------------------------------------------------------------
// Exercises
// ---------------------------------------------------------------------------

export type ChoiceItem = {
  q: string;
  options: string[];
  /** Index into options. */
  answer: number;
  why?: string;
  /** Optional context shown above the question (situation, message, etc.). */
  context?: string;
  /** Text spoken when the learner presses play (listen + choose). */
  audio?: string;
  voice?: Voice;
};

export type GapItem = {
  /** Sentence with one or more "___" gaps. One answer list per gap. */
  q: string;
  answers: string[][];
  hint?: string;
  why?: string;
  en?: string;
};

export type OrderItem = {
  /** Tokens in the correct order; the engine shuffles them. */
  words: string[];
  /** Other accepted complete orders, as full strings. */
  alt?: string[];
  en?: string;
  why?: string;
};

export type MatchPair = { left: string; right: string };

export type ClassifyItem = { text: string; cat: number; why?: string; audio?: string; voice?: Voice };

export type TransformItem = {
  source: string;
  instruction?: string;
  answers: string[];
  why?: string;
};

export type ErrorItem = {
  /** Sentence containing exactly one deliberate error. */
  sentence: string;
  /** Accepted corrected sentences. */
  answers: string[];
  why: string;
};

export type OpenItem = {
  prompt: string;
  model?: string;
  checklist?: string[];
};

export type Exercise =
  | { id: string; type: "choice"; title?: string; prompt: string; items: ChoiceItem[] }
  | { id: string; type: "context"; title?: string; prompt: string; items: ChoiceItem[] }
  | { id: string; type: "listen"; title?: string; prompt: string; items: ChoiceItem[] }
  | { id: string; type: "gap"; title?: string; prompt: string; items: GapItem[]; bank?: string[] }
  | { id: string; type: "order"; title?: string; prompt: string; items: OrderItem[] }
  | { id: string; type: "match"; title?: string; prompt: string; pairs: MatchPair[]; why?: string }
  | { id: string; type: "classify"; title?: string; prompt: string; categories: string[]; items: ClassifyItem[] }
  | { id: string; type: "transform"; title?: string; prompt: string; items: TransformItem[] }
  | { id: string; type: "error"; title?: string; prompt: string; items: ErrorItem[] }
  | { id: string; type: "open"; title?: string; prompt: string; items: OpenItem[] };

export type ExerciseType = Exercise["type"];

/** Quiz items are single items of the auto-gradable kinds, plus short production. */
export type QuizItem =
  | ({ type: "choice" } & ChoiceItem)
  | ({ type: "listen" } & ChoiceItem)
  | ({ type: "gap" } & GapItem)
  | ({ type: "order" } & OrderItem)
  | ({ type: "transform" } & TransformItem)
  | ({ type: "error" } & ErrorItem)
  | ({ type: "open" } & OpenItem);

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

export type Goal = {
  /** Learner-facing can-do statement. */
  canDo: string;
  canDoEn?: string;
  /** What the learner will do this week, in order. */
  steps: string[];
};

export type Table = { caption?: string; head: string[]; rows: string[][] };

export type Mistake = { wrong: string; right: string; why: string };

export type TheoryPart = {
  heading: string;
  body: string[];
  /** Optional English explanation (A1–A2 mainly). */
  support?: string[];
  examples?: Example[];
  table?: Table;
  mistakes?: Mistake[];
  tip?: string;
};

export type Theory = { intro?: string; parts: TheoryPart[] };

export type PracticeBlock = { intro?: string; exercises: Exercise[] };

export type VocabularyGroup = { title: string; items: Example[] };

export type Vocabulary = { intro?: string; groups: VocabularyGroup[]; exercises: Exercise[] };

export type Pronunciation = {
  focus: string;
  explanation: string[];
  support?: string[];
  examples?: Example[];
  table?: Table;
  /** Perception first: the learner listens and decides. Items must carry audio. */
  perceive: Exercise;
  /** Then production: say, compare, record. */
  produce: { text: string; tip?: string; voice?: Voice }[];
  /** Optional spelling link (sound ↔ letter). */
  spelling?: string;
};

export type ListeningStage = {
  stage: "gist" | "detail" | "notice";
  prompt: string;
  exercise: Exercise;
};

export type Speaker = { id: string; name: string; voice: Voice; role?: string };

export type Listening = {
  title: string;
  /** Situation shown before the first listen. */
  context: string;
  speakers: Speaker[];
  script: { speaker: string; text: string }[];
  stages: ListeningStage[];
};

export type Reading = {
  title: string;
  genre: string;
  /** Short situating line: who wrote it, where it appears. */
  frame?: string;
  text: string[];
  glossary?: Example[];
  tasks: Exercise[];
  noticing: { prompt: string; items: { quote: string; note: string }[] };
};

export type Writing = {
  task: string;
  context?: string;
  steps: string[];
  /** Target language the text should use. */
  useLanguage: string[];
  model: string[];
  checklist: string[];
  words: [number, number];
};

export type SpeakingTask = {
  title: string;
  prompt: string;
  prep?: string[];
  seconds: number;
  model?: string;
  selfCheck?: string[];
};

export type Speaking = { intro?: string; tasks: SpeakingTask[] };

export type ClassCard = {
  /** Imperative verb that names the move: "Cuéntale", "Pregúntale", "Defiende"… */
  move: string;
  task: string;
  phrases?: string[];
};

export type UseInClass = { intro: string; cards: ClassCard[]; bring?: string };

export type Complete = { canNow: string[]; review: string[] };

export type SectionKey =
  | "goal"
  | "theory"
  | "grammar"
  | "vocabulary"
  | "pronunciation"
  | "listening"
  | "reading"
  | "practice"
  | "writing"
  | "speaking"
  | "useInClass"
  | "quiz"
  | "complete";

export const SECTION_ORDER: readonly SectionKey[] = [
  "goal",
  "theory",
  "grammar",
  "vocabulary",
  "pronunciation",
  "listening",
  "reading",
  "practice",
  "writing",
  "speaking",
  "useInClass",
  "quiz",
  "complete",
] as const;

export type Module = {
  /** "a1-01" … ; unique across the course. */
  id: string;
  level: LevelId;
  week: number;
  kind: "core" | "checkpoint";
  title: string;
  subtitle: string;
  /** Journey stop for this week. */
  stop: { place: string; country: string };
  minutes: number;
  newObjectives: string[];
  reviewObjectives: string[];
  /** Module ids the learner should have completed first. */
  prerequisites: string[];
  goal: Goal;
  theory: Theory;
  grammar: PracticeBlock;
  vocabulary: Vocabulary;
  pronunciation: Pronunciation;
  listening: Listening;
  reading: Reading;
  practice: PracticeBlock;
  writing: Writing;
  speaking: Speaking;
  useInClass: UseInClass;
  quiz: { items: QuizItem[] };
  complete: Complete;
  /** Existing SpanishCue routes that extend this week (optional). */
  related?: { path: string; label: string }[];
};

/** What the landing and level map need: no lesson bodies. */
export type ModuleSummary = {
  id: string;
  level: LevelId;
  week: number;
  slug: string;
  kind: Module["kind"];
  title: string;
  subtitle: string;
  stop: Module["stop"];
  minutes: number;
  canDo: string;
  free: boolean;
};
