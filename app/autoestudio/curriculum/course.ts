import { freeAutoestudioModules, modulePath, moduleSlug } from "../access";
import { levels } from "./levels";
import { a1Modules } from "./modules/a1";
import { a2Modules } from "./modules/a2";
import { b1Modules } from "./modules/b1";
import { b2Modules } from "./modules/b2";
import { c1Modules } from "./modules/c1";
import { c2Modules } from "./modules/c2";
import type { LevelId, LevelMeta, Module, ModuleSummary } from "./types";

/**
 * Server-side course registry. Never import this from a client component:
 * module bodies must reach the browser only through an authorized page render.
 */
export const modulesByLevel: Record<LevelId, Module[]> = {
  a1: a1Modules,
  a2: a2Modules,
  b1: b1Modules,
  b2: b2Modules,
  c1: c1Modules,
  c2: c2Modules,
};

export function summarize(module: Module): ModuleSummary {
  return {
    id: module.id,
    level: module.level,
    week: module.week,
    slug: moduleSlug(module.week),
    kind: module.kind,
    title: module.title,
    subtitle: module.subtitle,
    stop: module.stop,
    minutes: module.minutes,
    canDo: module.goal.canDo,
    free: freeAutoestudioModules.has(modulePath(module.level, module.week)),
  };
}

export type LevelOverview = LevelMeta & { modules: ModuleSummary[] };

/** Levels that already have their weekly modules, in CEFR order. */
export function publishedLevels(): LevelOverview[] {
  return levels
    .map((level) => ({ ...level, modules: modulesByLevel[level.id].map(summarize) }))
    .filter((level) => level.modules.length > 0);
}

export function findModule(levelId: string, slug: string): Module | undefined {
  const match = /^semana-([1-9]\d?)$/.exec(slug);
  if (!match) return undefined;
  return modulesByLevel[levelId as LevelId]?.find((module) => module.week === Number(match[1]));
}

export function neighbours(module: Module): { previous: ModuleSummary | null; next: ModuleSummary | null } {
  const ordered = levels.flatMap((level) => modulesByLevel[level.id]);
  const index = ordered.findIndex((candidate) => candidate.id === module.id);
  return {
    previous: index > 0 ? summarize(ordered[index - 1]) : null,
    next: index >= 0 && index < ordered.length - 1 ? summarize(ordered[index + 1]) : null,
  };
}
