/** A0 texts are { es, en }; other levels use plain strings (A1 words are { es, en }). */
export type Text = string | { es: string; en: string };
export type Option = { say: Text; reply: Text; end: Text; mood: string };
export type SceneText = { title: Text; line: Text; dialogue: [string, Text][]; ask: Text; options: Option[]; talk: Text[]; words: Text[] };
export type LevelContent = Record<string, SceneText>;
export const LOADERS: Record<string, () => Promise<{ default: LevelContent }>>;
export function loadLevel(level: string): Promise<LevelContent>;
export const LEVELS: { id: string; label: string; hint: string }[];
