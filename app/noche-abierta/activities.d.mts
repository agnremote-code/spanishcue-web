import type { Activity, ActivityType, Message } from './engine.mjs';

export type Progress = { beat: number; choice: string | null; seen: string[]; done: boolean };
export type Media =
  | { type: 'quote'; who: string; text: string }
  | { type: 'thread'; messages: Message[]; fresh: Message | null }
  | { type: 'conditions'; before: string[]; now: string | null }
  | { type: 'plaque'; object: string; year: string; text: string }
  | { type: 'items'; items: { id: string; label: string; detail: string; seen: boolean }[] }
  | { type: 'taboo'; need: string; banned: string[] }
  | { type: 'people'; people: { name: string; wants: string; reason: string }[] };
export type Beat = {
  kind: 'choose' | 'result' | 'talk' | 'change' | 'inspect' | 'task';
  label?: string; context?: string; media?: Media; prompt?: string; chosen?: string | null;
  options?: { id: string; label: string; facts?: string[] }[];
};

export const ACTIVITY_TYPES: Record<ActivityType, { beats: (activity: Activity, progress: Progress) => Beat[] }>;
export const INSPECT_BEFORE_GUESSING: number;
export function emptyProgress(): Progress;
export function beatsOf(type: ActivityType, activity: Activity, progress?: Progress): Beat[];
export function canAdvance(beat: Beat | undefined, progress: Progress): boolean;
export function advance(type: ActivityType, activity: Activity, progress: Progress): Progress;
export function choose(type: ActivityType, activity: Activity, progress: Progress, optionId: string): Progress;
export function inspect(progress: Progress, itemId: string): Progress;
export function isLastBeat(type: ActivityType, activity: Activity, progress: Progress): boolean;
