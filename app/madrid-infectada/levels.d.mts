/** A0 texts are { es, en }; other levels use plain strings (A1 words are { es, en }). */
export type Text = string | { es: string; en: string };
export type Scene = {
  title: Text;
  /** The situation, read before the dialogue. */
  line: Text;
  /** [who, line]: a cast id, «yo» (the mascot, voiced by the student) or «*Name» for someone else. */
  dialogue: [string, Text][];
  /** At most one comprehension question: three options, one answer, why. */
  quiz?: { q: Text; options: [Text, Text, Text]; answer: 0 | 1 | 2; why: Text };
  /** «Tu turno»: exactly two open questions about real life. */
  talk: [Text, Text];
  words: Text[];
};
export type LevelContent = Record<string, Scene>;
export const LOADERS: Record<string, () => Promise<{ default: LevelContent }>>;
export function loadLevel(level: string): Promise<LevelContent>;
