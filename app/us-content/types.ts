import type { QuizItem } from "../mini-apps/ChoiceQuiz";

/** Real US search demand behind a page: the query Google autocompleted for an en-US visitor. */
export type UsDemand = { query: string; source: string; date: string };

/**
 * A graded reading by level and theme (family «reading»), stored in
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
