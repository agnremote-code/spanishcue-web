/**
 * Pure error-history model shared by the learner page, the teacher panel and
 * the server. No storage, no catalog: only data and verifiable rules.
 */
import type { SectionKey } from "../curriculum/types";
import { categories, type CategoryId } from "./categorize";

/** One wrong answer as the engine reports it (before categorisation/storage). */
export type AnswerEvent = {
  section: SectionKey;
  exerciseId: string;
  itemIndex: number;
  type: string;
  question: string;
  given: string;
  correct: string[];
  why?: string;
  verdict: "correct" | "accent" | "wrong";
  /** 1 for the first check of this item on this page load, 2 for the retry… */
  attempt: number;
};

export type ErrorRecord = {
  id: string;
  moduleId: string;
  section: SectionKey;
  exerciseId: string;
  itemIndex: number;
  type: string;
  question: string;
  given: string;
  correct: string;
  explanation: string;
  category: CategoryId;
  categoryLabel: string;
  attempt: number;
  verdict: "wrong" | "accent";
  createdAt: string;
  correctedAt: string | null;
};

export type TeacherNote = { id: string; category: CategoryId | "general"; kind: "note" | "worked"; text: string; createdAt: string };

export const DAY = 86_400_000;
export const weekOf = (moduleId: string) => Number(moduleId.split("-")[1]) || 0;

/** Errors that count as the same mistake repeated somewhere else. */
export function isRecurrent(error: ErrorRecord, all: ErrorRecord[]): boolean {
  return all.some((other) => other.id !== error.id && other.category === error.category && (other.exerciseId !== error.exerciseId || other.itemIndex !== error.itemIndex || other.moduleId !== error.moduleId));
}

export type CategorySummary = {
  category: CategoryId;
  label: string;
  errors: number;
  recurrent: number;
  corrected: number;
  /** Distinct activities (module + exercise) where the mistake appeared. */
  activities: number;
  lastAt: string;
  firstAt: string;
  /** Priority score: higher means more urgent for the next class. */
  score: number;
  status: "refuerzo" | "atencion" | "leve" | "superado";
  examples: ErrorRecord[];
  /** Errors after the last «worked in class» mark, when there is one. */
  afterWork?: { workedAt: string; errorsAfter: number; correctedAfter: number };
};

const recency = (at: string, now: number) => {
  const age = now - Date.parse(at);
  return age <= 7 * DAY ? 1.5 : age <= 30 * DAY ? 1 : 0.6;
};

/**
 * Verifiable priority: every error weighs 1, recent ones more, quiz items more
 * (harder context), corrected ones much less; repetition across activities
 * multiplies the total. Improvement therefore lowers the score by itself.
 */
export function summarizeCategories(errors: ErrorRecord[], notes: TeacherNote[] = [], now = Date.now()): CategorySummary[] {
  const groups = new Map<CategoryId, ErrorRecord[]>();
  for (const error of errors) groups.set(error.category, [...(groups.get(error.category) ?? []), error]);
  const result: CategorySummary[] = [];
  for (const [category, list] of groups) {
    const sorted = [...list].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    const activities = new Set(sorted.map((e) => `${e.moduleId}:${e.exerciseId}`)).size;
    const corrected = sorted.filter((e) => e.correctedAt).length;
    const recurrent = sorted.filter((e) => isRecurrent(e, sorted)).length;
    let score = 0;
    for (const e of sorted) score += recency(e.createdAt, now) * (e.section === "quiz" ? 1.3 : 1) * (e.correctedAt ? 0.4 : 1) * (e.verdict === "accent" ? 0.5 : 1);
    if (activities >= 2) score *= 1.5;
    score = Math.round(score * 10) / 10;
    const worked = notes.filter((n) => n.kind === "worked" && n.category === category).map((n) => n.createdAt).sort().at(-1);
    const afterWork = worked ? { workedAt: worked, errorsAfter: sorted.filter((e) => e.createdAt > worked).length, correctedAfter: sorted.filter((e) => e.correctedAt && e.correctedAt > worked).length } : undefined;
    const allCorrected = corrected === sorted.length;
    const status: CategorySummary["status"] = allCorrected && (afterWork ? afterWork.errorsAfter === 0 : true) && score < 3 ? "superado" : score >= 3 || (recurrent >= 2 && score >= 2) ? "refuerzo" : score >= 2 ? "atencion" : "leve";
    result.push({ category, label: categories[category].label, errors: sorted.length, recurrent, corrected, activities, lastAt: sorted[0].createdAt, firstAt: sorted[sorted.length - 1].createdAt, score, status, examples: sorted.slice(0, 12), afterWork });
  }
  return result.sort((a, b) => b.score - a.score || b.errors - a.errors);
}

export type WeekSummary = { moduleId: string; week: number; errors: number; corrected: number; categories: CategoryId[] };

export function summarizeWeeks(errors: ErrorRecord[]): WeekSummary[] {
  const map = new Map<string, ErrorRecord[]>();
  for (const e of errors) map.set(e.moduleId, [...(map.get(e.moduleId) ?? []), e]);
  return [...map].map(([moduleId, list]) => ({ moduleId, week: weekOf(moduleId), errors: list.length, corrected: list.filter((e) => e.correctedAt).length, categories: [...new Set(list.map((e) => e.category))] })).sort((a, b) => a.moduleId.localeCompare(b.moduleId));
}

export type ActivitySummary = { moduleId: string; section: SectionKey; exerciseId: string; errors: number; corrected: number; categories: CategoryId[]; lastAt: string };

export function summarizeActivities(errors: ErrorRecord[]): ActivitySummary[] {
  const map = new Map<string, ErrorRecord[]>();
  for (const e of errors) { const key = `${e.moduleId}|${e.section}|${e.exerciseId}`; map.set(key, [...(map.get(key) ?? []), e]); }
  return [...map].map(([, list]) => ({ moduleId: list[0].moduleId, section: list[0].section, exerciseId: list[0].exerciseId, errors: list.length, corrected: list.filter((e) => e.correctedAt).length, categories: [...new Set(list.map((e) => e.category))], lastAt: list.map((e) => e.createdAt).sort().at(-1)! })).sort((a, b) => b.lastAt.localeCompare(a.lastAt));
}

/** Evolution: errors per ISO week bucket (oldest first), to see whether the learner improves. */
export function evolution(errors: ErrorRecord[]): { from: string; errors: number; corrected: number; recurrent: number }[] {
  const buckets = new Map<string, ErrorRecord[]>();
  for (const e of errors) {
    const d = new Date(e.createdAt); const day = (d.getUTCDay() + 6) % 7;
    const monday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - day)).toISOString().slice(0, 10);
    buckets.set(monday, [...(buckets.get(monday) ?? []), e]);
  }
  return [...buckets].sort(([a], [b]) => a.localeCompare(b)).map(([from, list]) => ({ from, errors: list.length, corrected: list.filter((e) => e.correctedAt).length, recurrent: list.filter((e) => isRecurrent(e, errors)).length }));
}

/** Learner-side rule: which categories deserve a card right now (grouped, not repeated). */
export function categoriesToSuggest(errors: ErrorRecord[], shown: Set<CategoryId>, now = Date.now()): CategoryId[] {
  const recent = errors.filter((e) => now - Date.parse(e.createdAt) <= 30 * DAY);
  return summarizeCategories(recent, [], now).filter((s) => !shown.has(s.category) && s.status !== "superado").map((s) => s.category);
}
