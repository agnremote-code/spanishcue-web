import type { AbsurdRule, Elimination } from './data';

export type WorldLevel = 'A2' | 'B1' | 'B2';
export type WorldElimination = Elimination & { followUp?: string; counterpoint?: string; revision?: string };
export type WorldRule = AbsurdRule & { teacherFollowUp?: string };
export type EliminationB2 = Elimination & { followUp: string; counterpoint: string; revision: string };
export type AbsurdRuleB2 = AbsurdRule & { teacherFollowUp: string };
export type WorldGuide = {
  introduction: string;
  warmup: string;
  objective: string;
  stages: { time: string; title: string; task: string }[];
  teacherNote: string;
  moves: string[];
  challenge: string;
  closingTitle: string;
  closingTask: string;
};
