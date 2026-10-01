import { SECTION_ORDER, type SectionKey } from "../curriculum/types";

/**
 * Learner progress model. Pure data + pure functions: no storage here.
 * Persistence lives behind ProgressAdapter so the UI never touches
 * localStorage (or, later, the account API) directly.
 */
export type QuizResult = { score: number; total: number; best: number; at: string; attempts: number };

export type ModuleProgress = {
  startedAt: string;
  sections: Partial<Record<SectionKey, string>>;
  lastSection?: SectionKey;
  completedAt?: string;
  quiz?: QuizResult;
  writingDraft?: string;
};

export type ProgressState = {
  version: 1;
  modules: Record<string, ModuleProgress>;
  lastModule?: string;
  updatedAt?: string;
};

export interface ProgressAdapter {
  load(): ProgressState;
  save(state: ProgressState): void;
  /** Called when another tab or device changes the stored state. */
  subscribe?(listener: (state: ProgressState) => void): () => void;
}

export const emptyProgress = (): ProgressState => ({ version: 1, modules: {} });

const now = () => new Date().toISOString();

function touch(state: ProgressState, moduleId: string, update: (current: ModuleProgress) => ModuleProgress): ProgressState {
  const current = state.modules[moduleId] ?? { startedAt: now(), sections: {} };
  return {
    ...state,
    lastModule: moduleId,
    updatedAt: now(),
    modules: { ...state.modules, [moduleId]: update(current) },
  };
}

export function startModule(state: ProgressState, moduleId: string): ProgressState {
  if (state.modules[moduleId] && state.lastModule === moduleId) return state;
  return touch(state, moduleId, (current) => current);
}

export function visitSection(state: ProgressState, moduleId: string, section: SectionKey): ProgressState {
  return touch(state, moduleId, (current) => ({ ...current, lastSection: section }));
}

export function completeSection(state: ProgressState, moduleId: string, section: SectionKey): ProgressState {
  return touch(state, moduleId, (current) => {
    const sections = { ...current.sections, [section]: current.sections[section] ?? now() };
    const completedAt = current.completedAt ?? (isModuleComplete({ ...current, sections }) ? now() : undefined);
    return { ...current, sections, completedAt };
  });
}

export function recordQuiz(state: ProgressState, moduleId: string, score: number, total: number): ProgressState {
  return touch(state, moduleId, (current) => {
    const previous = current.quiz;
    const quiz: QuizResult = {
      score,
      total,
      best: Math.max(score, previous?.best ?? 0),
      at: now(),
      attempts: (previous?.attempts ?? 0) + 1,
    };
    const sections = { ...current.sections, quiz: current.sections.quiz ?? now() };
    const next = { ...current, quiz, sections };
    return { ...next, completedAt: current.completedAt ?? (isModuleComplete(next) ? now() : undefined) };
  });
}

export function saveDraft(state: ProgressState, moduleId: string, text: string): ProgressState {
  return touch(state, moduleId, (current) => ({ ...current, writingDraft: text.slice(0, 6000) }));
}

/** Every section except the closing summary must be done and the quiz attempted. */
export function isModuleComplete(progress: ModuleProgress | undefined): boolean {
  if (!progress) return false;
  return SECTION_ORDER.filter((key) => key !== "complete").every((key) => Boolean(progress.sections[key]));
}

export function sectionsDone(progress: ModuleProgress | undefined): number {
  if (!progress) return 0;
  return SECTION_ORDER.filter((key) => Boolean(progress.sections[key])).length;
}

export type ModuleStatus = "not-started" | "in-progress" | "completed";

export function moduleStatus(state: ProgressState, moduleId: string): ModuleStatus {
  const progress = state.modules[moduleId];
  if (!progress) return "not-started";
  return progress.completedAt || isModuleComplete(progress) ? "completed" : "in-progress";
}

export type LevelProgress = {
  total: number;
  completed: number;
  started: number;
  percent: number;
  /** The module to open next: the first in progress, else the first not completed. */
  nextModuleId: string | null;
  hasStarted: boolean;
};

export function levelProgress(state: ProgressState, moduleIds: readonly string[]): LevelProgress {
  const statuses = moduleIds.map((id) => moduleStatus(state, id));
  const completed = statuses.filter((status) => status === "completed").length;
  const started = statuses.filter((status) => status !== "not-started").length;
  const inProgressIndex = statuses.findIndex((status) => status === "in-progress");
  const firstOpenIndex = statuses.findIndex((status) => status !== "completed");
  const nextIndex = inProgressIndex >= 0 ? inProgressIndex : firstOpenIndex;
  return {
    total: moduleIds.length,
    completed,
    started,
    percent: moduleIds.length ? Math.round((completed / moduleIds.length) * 100) : 0,
    nextModuleId: nextIndex >= 0 ? moduleIds[nextIndex] : null,
    hasStarted: started > 0,
  };
}

/** Defensive parse: unknown or corrupted data becomes an empty state, never a crash. */
export function parseProgress(raw: unknown): ProgressState {
  if (!raw || typeof raw !== "object") return emptyProgress();
  const candidate = raw as Partial<ProgressState>;
  if (candidate.version !== 1 || !candidate.modules || typeof candidate.modules !== "object") return emptyProgress();
  const modules: Record<string, ModuleProgress> = {};
  for (const [id, value] of Object.entries(candidate.modules)) {
    if (!/^[abc][12]-\d{2}$/.test(id) || !value || typeof value !== "object") continue;
    const entry = value as Partial<ModuleProgress>;
    if (typeof entry.startedAt !== "string" || !entry.sections || typeof entry.sections !== "object") continue;
    const sections: ModuleProgress["sections"] = {};
    for (const key of SECTION_ORDER) {
      const at = (entry.sections as Record<string, unknown>)[key];
      if (typeof at === "string") sections[key] = at;
    }
    modules[id] = {
      startedAt: entry.startedAt,
      sections,
      lastSection: entry.lastSection && SECTION_ORDER.includes(entry.lastSection) ? entry.lastSection : undefined,
      completedAt: typeof entry.completedAt === "string" ? entry.completedAt : undefined,
      quiz: entry.quiz && typeof entry.quiz.score === "number" && typeof entry.quiz.total === "number" ? entry.quiz : undefined,
      writingDraft: typeof entry.writingDraft === "string" ? entry.writingDraft : undefined,
    };
  }
  return {
    version: 1,
    modules,
    lastModule: typeof candidate.lastModule === "string" && modules[candidate.lastModule] ? candidate.lastModule : undefined,
    updatedAt: typeof candidate.updatedAt === "string" ? candidate.updatedAt : undefined,
  };
}
