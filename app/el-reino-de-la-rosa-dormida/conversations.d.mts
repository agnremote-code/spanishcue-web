import type { SpanishLevel } from './content.mjs';
type Line = string | { es: string; en: string };
type Keyword = { es: string; en: string };
type Band = 'a0' | 'a1' | 'base' | 'full';
type Question = string | [string, string] | { es: string; en: string; options: string[] };
export interface Conversation {
  topic: string; flow: string[]; words: string[]; journal: string;
  keywords: Record<'a0' | 'a1', Keyword[]>;
  story: Record<Band, Record<string, Line>>;
  levels: Record<SpanishLevel, Record<'q1' | 'follow' | 'q2' | 'q3', Question> & { extra: Question[] }>;
}
export interface Place { name: string; requires: string | null; spot: { x: number; y: number; z: number }; keywords: Record<'a0' | 'a1', Keyword[]>; story: Record<Band, Line>; levels: Record<SpanishLevel, Question> }
export const BANDS: Record<SpanishLevel, Band>;
export const QUESTION_STEPS: string[];
export const DEFAULT_FUNCTIONS: Record<string, string>;
export const CONVERSATIONS: Record<string, Conversation>;
export const PLACES: Record<string, Place>;
export const FRAMES: Record<string, Record<string, string[]>>;
export const SAFE_ANSWER: { es: string; en: string };
export const TEACHER_NOTES: Record<SpanishLevel, string>;
