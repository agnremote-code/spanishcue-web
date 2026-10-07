export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type Question = { kind: 'meaning' | 'fact'; prompt: string; model: string; criteria: string[] };
export type Rule = { title: string; form: string; meaning: string; examples: string[]; contrast?: string };
export type Exercise =
  | { kind: 'choice'; prompt: string; options: string[]; answers: number[]; explanation: string }
  | { kind: 'open'; prompt: string; model: string; criteria: string[] };
export type LessonContext = {
  scope: string;
  warmup: string[];
  reading: { title: string; text: string; questions: Question[] };
  discovery: { prompt: string; model: string }[];
  listening: { title: string; transcript: string; voice: 'es-MX-DaliaNeural' | 'es-ES-AlvaroNeural'; questions: Question[] };
  speaking: { prompt: string; followUp: string; support: string }[];
  writing: { prompt: string; words: [number, number]; model: string; checklist: string[] };
  closing: { prompt: string; model: string };
  /** Zero-based indices in the preserved source's theory bank. */
  coreIndices?: number[];
  /** Explicit focused core for a hub, or where its former bank lacks a usable progression. */
  grammar?: Rule[];
  practice?: Exercise[];
};
export type ClassroomLesson = LessonContext & {
  id: number;
  title: string;
  level: Level;
  topic: string;
  objectives: string[];
  grammar: Rule[];
  practice: Exercise[];
  audioSrc: string;
  originalPath: string;
  isNew: boolean;
  paradigm?: {person:string;hablar:string;comer:string;vivir:string}[];
};
