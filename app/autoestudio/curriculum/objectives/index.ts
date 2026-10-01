import type { LevelId, Objective } from "../types";
import { a1Objectives } from "./a1";
import { a2Objectives } from "./a2";
import { b1Objectives } from "./b1";
import { b2Objectives } from "./b2";
import { c1Objectives } from "./c1";
import { c2Objectives } from "./c2";

export const objectivesByLevel: Record<LevelId, Objective[]> = {
  a1: a1Objectives,
  a2: a2Objectives,
  b1: b1Objectives,
  b2: b2Objectives,
  c1: c1Objectives,
  c2: c2Objectives,
};

export const allObjectives: Objective[] = Object.values(objectivesByLevel).flat();

export const objectiveById: ReadonlyMap<string, Objective> = new Map(
  allObjectives.map((objective) => [objective.id, objective]),
);

/** Number of weeks a level needs, derived from its objective map. */
export function plannedWeeks(level: LevelId): number {
  return Math.max(0, ...objectivesByLevel[level].map((objective) => objective.week));
}
