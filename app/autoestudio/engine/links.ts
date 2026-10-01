import type { LevelMeta, ModuleSummary } from "../curriculum/types";

export type LandingLevel = LevelMeta & { modules: ModuleSummary[] };

/** Locked weeks link to the access page, which returns the learner here after PRO. */
export function moduleHref(summary: Pick<ModuleSummary, "level" | "slug" | "free">, fullAccess: boolean) {
  const path = `/autoestudio/${summary.level}/${summary.slug}`;
  return summary.free || fullAccess ? path : `/acceso?returnTo=${encodeURIComponent(path)}`;
}
