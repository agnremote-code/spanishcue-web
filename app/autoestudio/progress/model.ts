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
  /** Server-side last write for this week (teacher view only). */
  updatedAt?: string;
};

export type ProgressState = {
  version: 1;
  modules: Record<string, ModuleProgress>;
  lastModule?: string;
  updatedAt?: string;
};

export interface ProgressAdapter {
  load(): ProgressState | Promise<ProgressState>;
  save(state: ProgressState): void;
  /** Called when another tab or device changes the stored state. */
  subscribe?(listener: (state: ProgressState) => void): () => void;
  dispose?(): void;
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

/** The 12 sections a learner must finish to complete a week (the closing summary is not one). */
export const REQUIRED_SECTIONS: readonly SectionKey[] = SECTION_ORDER.filter((key) => key !== "complete");
export const WEEKS_PER_LEVEL = 20;

/** Required sections actually finished (a visit alone never counts). */
export function requiredSectionsDone(progress: ModuleProgress | undefined): number {
  if (!progress) return 0;
  return REQUIRED_SECTIONS.filter((key) => Boolean(progress.sections[key])).length;
}

export function pendingSections(progress: ModuleProgress | undefined): SectionKey[] {
  return REQUIRED_SECTIONS.filter((key) => !progress?.sections[key]);
}

/** Percentage with one decimal, never rounded up to 100 or down to 0 when partial. */
export function preciseShare(done: number, total: number): number {
  if (!total || done <= 0) return 0;
  if (done >= total) return 100;
  const value = Math.floor((done / total) * 1000) / 10;
  return value > 0 ? value : 0.1;
}

export const levelWeekIds = (level: string): string[] => Array.from({ length: WEEKS_PER_LEVEL }, (_, i) => `${level}-${String(i + 1).padStart(2, "0")}`);

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
  /** Completed weeks over total weeks (academic criterion), whole number. */
  percent: number;
  /** Required sections finished over all required sections of the level. */
  sectionsCompleted: number;
  sectionsTotal: number;
  /** Real course advance: sectionsCompleted / sectionsTotal, one decimal. */
  coursePercent: number;
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
  const sectionsTotal = moduleIds.length * REQUIRED_SECTIONS.length;
  const sectionsCompleted = moduleIds.reduce((sum, id, index) => sum + (statuses[index] === "completed" ? REQUIRED_SECTIONS.length : requiredSectionsDone(state.modules[id])), 0);
  return {
    total: moduleIds.length,
    completed,
    started,
    percent: moduleIds.length ? Math.round((completed / moduleIds.length) * 100) : 0,
    sectionsCompleted,
    sectionsTotal,
    coursePercent: preciseShare(sectionsCompleted, sectionsTotal),
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
