/**
 * Live grammar classes: a data-driven lesson for a teacher and a student in a
 * video call. Each lesson declares its own stages; the shell and the blocks are
 * shared. Inline text supports **bold** and [[marked words|tone]].
 */
/** Colour slots; each lesson's legend says what they mean. */
export type Tone = 'blue' | 'teal' | 'orange' | 'violet' | 'neutral';
export type Example = { es: string; en?: string };
export type Discuss = { q: string; en?: string; answer?: string };
export type ChoiceItem = { prompt: string; options: string[]; answer: number; explanation: string };

export type Block =
  | { kind: 'lead'; text: string; en?: string }
  | { kind: 'scenes'; items: { icon: string; place: string; line: string; en?: string; why: string }[] }
  | { kind: 'goals'; title: string; items: { text: string; en?: string }[] }
  | { kind: 'prompts'; title: string; items: string[] }
  | { kind: 'concept'; tone: Tone; label: string; question: string; en?: string; formula: string[]; meaning: string; examples: Example[]; note?: string }
  | { kind: 'contrast'; title: string; items: { tone: Tone; sentence: string; en?: string; shape: 'point' | 'line'; verdict: string }[] }
  | { kind: 'table'; title: string; head: string[]; rows: string[][]; caption?: string }
  | { kind: 'tip'; icon: string; title: string; text: string; en?: string }
  | { kind: 'mistakes'; title: string; reveal: boolean; items: { wrong: string; right: string; why: string }[] }
  | { kind: 'visual'; visual: VisualKey }
  | { kind: 'dialogue'; title: string; setting: string; lines: { who: string; text: string; en?: string }[]; questions: Discuss[] }
  | { kind: 'reading'; title: string; from: string; text: string; en?: string; questions: Discuss[] }
  | { kind: 'audio'; title: string; src: string; plan: string[]; transcript: string; questions: Discuss[] }
  | { kind: 'choice'; title: string; hint?: string; items: ChoiceItem[] }
  | { kind: 'classify'; title: string; hint?: string; categories: { id: string; label: string; tone: Tone }[]; items: { text: string; answer: string; explanation: string }[] }
  | { kind: 'reveal'; title: string; style: 'transform' | 'fix'; items: { prompt: string; answer: string; note?: string }[] }
  | { kind: 'order'; title: string; items: string[]; after: Discuss[] }
  | { kind: 'roleplay'; items: { icon: string; title: string; student: string; teacher: string; twist: string; language: string[] }[] }
  | { kind: 'conversation'; groups: { title: string; icon: string; questions: { q: string; followUps: string[]; deeper?: string }[] }[]; swap: string }
  | { kind: 'task'; purpose: string; steps: string[]; versions: { label: string; text: string }[]; success: string[] }
  | { kind: 'recap'; items: { tone: Tone; label: string; formula: string; example: string; caption: string; en?: string }[] }
  | { kind: 'teacher'; text: string };

/** Topic visuals live in ./visuals; a lesson names them, it never imports them. */
export type VisualKey = 'time-axis-start' | 'time-axis-event' | 'time-explorer' | 'life-line' | 'barrio-3d';

export type LiveStep = { title: string; blocks: Block[] };
export type LiveStage = { id: string; label: string; icon: string; minutes: number; title: string; coach: string; mascot: string; steps: LiveStep[] };
export type LiveLesson = {
  id: number;
  level: string;
  topic: string;
  title: string;
  subtitle: string;
  /** A fixed classroom "now" so answers stay correct whenever the class is taught. */
  now?: string;
  /** What each colour of [[marked|tone]] text means in this lesson. */
  legend: { tone: Tone; label: string }[];
  stages: LiveStage[];
};
