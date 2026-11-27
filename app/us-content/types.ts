import type { QuizItem } from "../mini-apps/ChoiceQuiz";

/** Real US search demand behind a page: the query Google autocompleted for an en-US visitor. */
export type UsDemand = { query: string; source: string; date: string };

/**
 * A graded reading by level and theme, stored in
 * public/us-content/reading/<level>-<theme>.json. tests/us-content-quality.test.mjs
 * enforces the gate: 300+ own words, 8+ distinct questions, a figure, a heritage
 * block and under 30 % shared 5-word sequences with any other reading.
 */
export type UsReadingPage = {
  level: "A1" | "A2" | "B1" | "B2";
  theme: string;
  themeLabel: string;
  title: string;
  description: string;
  h1: string;
  titleEs: string;
  focus: string;
  intro: string;
  demand: UsDemand;
  paragraphs: string[];
  glossary: [string, string][];
  comprehension: QuizItem[];
  grammar: { title: string; intro: string; items: QuizItem[] };
  speaking: string[];
  figure: { text: string; source: string; href?: string };
  heritage: string;
  teacher: string;
};

/**
 * A vocabulary page by theme (family «vocabulary»), stored in public/us-content/vocabulary/<theme>.json:
 * a word list by group and a vocabulary quiz on top of a graded reading that uses the words.
 */
export type UsVocabularyPage = UsReadingPage & {
  level: "A1" | "A2";
  vocabulary: { title: string; words: [string, string][] }[];
  vocabQuiz: QuizItem[];
};

/**
 * A practice page for one high-frequency verb (family «verbs»), stored in public/us-content/verbs/<verb>.json:
 * uses with examples, present and preterite forms, a 10-question quiz, a short reading and common mistakes.
 */
export type UsVerbPage = {
  verb: string;
  meaning: string;
  level: "A1" | "A2";
  title: string;
  description: string;
  h1: string;
  intro: string;
  demand: UsDemand;
  uses: { use: string; example: string; meaning: string }[];
  present: [string, string][];
  preterite: [string, string][];
  quiz: QuizItem[];
  reading: { titleEs: string; paragraphs: string[]; comprehension: QuizItem[] };
  mistakes: { wrong: string; right: string; why: string }[];
  heritage: string;
  teacher: string;
  figure: { text: string; source: string };
};

/**
 * An AP Spanish Language and Culture unit page (family «ap»), stored in public/us-content/ap/<slug>.json and
 * served at /ap-spanish-language/themes/<slug>: one page per unit of the course framework effective fall 2026.
 * Official facts (unit names, recommended contexts, exam format) carry the College Board page they came from;
 * everything else (vocabulary, reading, prompts) is SpanishCue's own.
 */
export type UsApPage = {
  /** "unit-1" … "unit-6"; orders the hub. */
  theme: string;
  unitName: string;
  level: "B1" | "B2";
  title: string;
  description: string;
  h1: string;
  intro: string;
  demand: UsDemand;
  overview: { heading: string; paragraphs: string[] };
  /** Recommended instructional contexts quoted from the course framework; empty when we could not read them. */
  contexts: string[];
  vocabulary: { title: string; words: [string, string][] }[];
  vocabQuiz: QuizItem[];
  reading: { titleEs: string; intro: string; paragraphs: string[]; comprehension: QuizItem[] };
  essay: { prompt: string; sideA: string; sideB: string; outline: string[]; phrases: [string, string][] };
  speaking: string[];
  heritage: string;
  teacher: string;
  figure: { text: string; source: string };
};
