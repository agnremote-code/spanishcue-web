/**
 * Live grammar classes: one data-driven lesson that works with a teacher and
 * for self-study. Each lesson declares its own sections; the shell and the
 * blocks are shared. Inline text supports **bold** and [[marked words|tone]].
 */
/** Colour slots; each lesson's legend says what they mean. */
export type Tone = 'blue' | 'teal' | 'orange' | 'violet' | 'neutral';
/** Text that changes with the class mode. `both` is shown in either mode. */
export type ByMode = { both?: string; teacher?: string; self?: string };
export type Example = { es: string; en?: string };
/** A closed item that checks itself: the explanation says why the answer is right. */
export type ChoiceItem = { prompt: string; context?: string; options: string[]; answer: number; why: string; en?: string };

export type Block =
  /** A short instruction that adapts to the mode (teacher or self-study). */
  | { kind: 'guide'; text: ByMode }
  | { kind: 'lead'; text: string; en?: string }
  | { kind: 'concept'; tone: Tone; label: string; question: string; en?: string; formula: string[]; meaning: string; examples: Example[]; note?: string; art?: ArtKey }
  | { kind: 'compare'; title: string; columns: { tone: Tone; label: string; sentence: string; idea: string; en?: string }[] }
  | { kind: 'decide'; title: string; steps: { q: string; yes: string; no: string }[] }
  | { kind: 'tip'; icon: string; title: string; text: string; en?: string }
  /** A small reference table (conjugations, forms by person, contrasts). Cells accept **bold** and [[marks|tone]]. */
  | { kind: 'table'; title?: string; head: string[]; rows: string[][]; note?: string }
  | { kind: 'mistakes'; title: string; items: { wrong: string; right: string; why: string }[] }
  | { kind: 'visual'; visual: VisualKey }
  /** A conversation whose marked expressions can be tapped to see why they were used. */
  | { kind: 'explore'; title: string; setting: string; lines: { who: string; text: string; en?: string }[]; notes: Record<string, string> }
  | { kind: 'choice'; title?: string; items: ChoiceItem[] }
  | { kind: 'classify'; title?: string; categories: { id: string; label: string; tone: Tone }[]; items: { text: string; answer: string; why: string }[] }
  /** Is the sentence right? If not, pick the correction. */
  | { kind: 'fix'; title?: string; items: { sentence: string; ok: boolean; options?: string[]; answer?: number; why: string }[] }
  /** A conversation with gaps to complete. */
  | { kind: 'chat-fill'; title?: string; lines: { who: string; text: string; options?: string[]; answer?: number; why?: string }[] }
  /** Tap the words to build the sentence; any listed order counts. */
  | { kind: 'build'; title?: string; items: { tiles: string[]; accept: string[]; en?: string }[] }
  /** Type the transformed sentence; answers are compared without case, accents or punctuation. */
  | { kind: 'rewrite'; title?: string; items: { prompt: string; instruction: string; accept: string[] }[] }
  | { kind: 'listen'; title: string; channel: string; src: string; before: string; gist: ChoiceItem; details: ChoiceItem[]; transcript: string; reply: ByMode }
  | { kind: 'talk'; cards: TalkCard[]; swap: ByMode }
  | { kind: 'write'; title: string; situation: string; task: string[]; starters: string[]; words: string[]; model: string; minWords: number }
  | { kind: 'recap'; items: { tone: Tone; label: string; formula: string; example: string; caption: string; en?: string }[] }
  /** The learner's real mistakes in this class, with links back to the step. */
  | { kind: 'review' }
  | { kind: 'restart' }
  | { kind: 'teacher'; text: string };

export type TalkCard = { q: string; followUps: string[]; phrases: string[]; hint: string; example: string; next?: string; teacher?: string };

/** Topic visuals live in ./visuals; a lesson names them, it never imports them. */
/** `*-workbench` and `article-gallery` are premium scenes the server page passes in (see GrammarPage). */
export type VisualKey = 'time-compare' | 'barrio-mission' | 'noun-workbench' | 'adjective-workbench' | 'article-gallery';
/** Small illustrations that sit next to a concept (./visuals/art.tsx). */
export type ArtKey = 'calendar-start' | 'duration-clock' | 'past-trip';

/** A step may change the mascot's pose and line; otherwise the section's are used. */
export type LiveStep = { title: string; blocks: Block[]; mascot?: string; coach?: string };
export type LiveStage = { id: string; label: string; icon: string; title: string; coach: string; mascot: string; steps: LiveStep[] };
export type LiveLesson = {
  id: number;
  level: string;
  title: string;
  subtitle: string;
  /** A fixed classroom "now" so answers stay correct whenever the class is taught. */
  now?: string;
  /** What each colour of [[marked|tone]] text means in this lesson. */
  legend: { tone: Tone; label: string }[];
  /** Why a tempting option is wrong, keyed by the option text (shared by every exercise). */
  optionNotes?: Record<string, string>;
  stages: LiveStage[];
};
