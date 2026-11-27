/**
 * Data report «Qué autocompleta Google en las búsquedas de gramática del español».
 *
 * Source: docs/seo-plan/fase0/suggest-20261126.csv (Google Suggest, 26 Nov 2026): 342 queries
 * (144 in Spanish with hl=es&gl=es, 198 in English with hl=en&gl=us) built from 18 grammar topics per
 * language, alone and with a modifier. Google returns at most 15 completions per query; 40 queries
 * returned none. Figures computed with the script in docs/seo-plan/fase1/LEEME.md. Never edit by hand.
 */
export const autocompletado = {
  path: "/datos/que-autocompleta-google-en-gramatica",
  csvPath: "/datos/autocompletado-gramatica-2026-11.csv",
  date: "2026-11-26",
  dateLabel: "26 de noviembre de 2026",
  queries: 342,
  suggestions: 2876,
  topicsPerLanguage: 18,
  es: { queries: 144, suggestions: 1467, empty: 7 },
  en: { queries: 198, suggestions: 1409, empty: 33 },
  dates: { datePublished: "2026-11-27", dateModified: "2026-11-27" },
} as const;

/** Completions per modifier: 18 queries each («tema + modificador»), at most 15 completions per query (270). */
export const modifiersEs: [string, number, number][] = [
  ["ejercicios", 253, 0],
  ["pdf", 215, 1],
  ["quiz", 185, 0],
  ["dele", 168, 1],
  ["online", 161, 2],
  ["test", 135, 2],
  ["práctica", 80, 1],
];

export const modifiersEn: [string, number, number][] = [
  ["practice", 210, 0],
  ["quiz", 191, 0],
  ["worksheet", 158, 2],
  ["test", 134, 3],
  ["pdf", 118, 2],
  ["ib", 77, 2],
  ["ap", 76, 5],
  ["gcse", 73, 5],
  ["free", 68, 5],
  ["online", 48, 9],
];

/** A word inside the completions, counted only in queries that did not already contain it. */
export const wordsInside: { word: string; lang: "es" | "en"; count: number; of: number }[] = [
  { word: "pdf", lang: "es", count: 100, of: 1252 },
  { word: "wordwall", lang: "es", count: 36, of: 1467 },
  { word: "quizlet", lang: "es", count: 25, of: 1467 },
  { word: "juego", lang: "es", count: 13, of: 1467 },
  { word: "interactivo / interactiva", lang: "es", count: 11, of: 1467 },
  { word: "pdf", lang: "en", count: 146, of: 1291 },
  { word: "worksheet", lang: "en", count: 132, of: 1251 },
  { word: "quizlet", lang: "en", count: 65, of: 1409 },
  { word: "answers / answer key", lang: "en", count: 29, of: 1409 },
  { word: "game", lang: "en", count: 12, of: 1409 },
  { word: "interactive", lang: "en", count: 0, of: 1409 },
];

/** «[tema] dele» queries: completions that name the website DELE Ahora, and those about the exam itself. */
export const dele = { suggestions: 168, deleAhora: 76, exam: 0 };
