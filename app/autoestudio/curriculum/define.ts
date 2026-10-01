import type { Domain, LevelId, Objective } from "./types";

const domainCodes: Record<string, Domain> = {
  gram: "grammar",
  voc: "vocabulary",
  pron: "pronunciation",
  lis: "listening",
  read: "reading",
  wri: "writing",
  spk: "speaking",
  fun: "functional",
  disc: "discourse",
  rev: "review",
};

export type ObjectiveRow = [
  week: number,
  code: keyof typeof domainCodes,
  slug: string,
  topic: string,
  outcome: string,
  prerequisites?: string[],
  extra?: { pcic?: string; related?: string[] },
];

/** Compact authoring helper: ids are `${level}.${code}.${slug}`. */
export function defineObjectives(level: LevelId, rows: ObjectiveRow[]): Objective[] {
  return rows.map(([week, code, slug, topic, outcome, prerequisites = [], extra = {}]) => ({
    id: `${level}.${code}.${slug}`,
    level,
    domain: domainCodes[code],
    topic,
    outcome,
    prerequisites,
    week,
    ...extra,
  }));
}
