export type Text = string | { es: string; en: string };
export type Option = { say: Text; reply: Text; end: Text; mood: string };
export type SceneText = { title: Text; line: Text; dialogue: [string, Text][]; ask: Text; options: Option[]; talk: Text[]; words: Text[] };
export const LEVELS: { id: string; label: string; hint: string }[];
export const CONTENT: Record<string, Record<string, SceneText>>;
