import type { AbsurdRule, Elimination } from './data';

export type WorldLevel = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type WorldElimination = Elimination & { answerFrames?: string[]; followUp?: string; counterpoint?: string; revision?: string; depthPrompt?: string; reinterpretation?: string; teacherChallenge?: string; competingReading?: string; reformulationPrompt?: string };
export type WorldRule = AbsurdRule & { questionFrames?: [string[], string[], string[]]; teacherFollowUp?: string; developments?: [string, string] };
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

export type EliminationA1 = WorldElimination & { answerFrames: string[] };
export type AbsurdRuleA1 = WorldRule & { questionFrames: [string[], string[], string[]] };

export type EliminationC1 = WorldElimination & { depthPrompt: string; reinterpretation: string; teacherChallenge: string };
export type AbsurdRuleC1 = WorldRule & { developments: [string, string]; teacherFollowUp: string };

export type EliminationC2 = WorldElimination & { depthPrompt: string; reinterpretation: string; teacherChallenge: string; competingReading: string; reformulationPrompt: string };
export type AbsurdRuleC2 = WorldRule & { developments: [string, string]; teacherFollowUp: string };
