/** A0 texts are { es, en }; other levels use plain strings (A1 words are { es, en }). */
export type Text = string | { es: string; en: string };
export type Option = {
  /** The answer, as you would say it. */
  t: Text;
  /** What the paper being answers back: never a verdict, always a mirror. */
  echo: Text;
};
export type Scene = {
  title: Text;
  /** The situation, read before the dialogue. */
  line: Text;
  /** [who, line]: a cast id or «yo» (voiced by the student). Brief: four to six lines. */
  dialogue: [string, Text][];
  /** The one deep question of the encounter. */
  q: Text;
  options: [Option, Option, Option];
  /** «Más tinta»: three open questions to keep talking. */
  talk: [Text, Text, Text];
  words: Text[];
};
export type LevelContent = Record<string, Scene>;
export const LOADERS: Record<string, () => Promise<{ default: LevelContent }>>;
export function loadLevel(level: string): Promise<LevelContent>;
export const LEVELS: { id: string; label: string; hint: string }[];
