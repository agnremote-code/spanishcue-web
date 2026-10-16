// A0 texts carry English under the Spanish ({ es, en }); A1 words do too.
export type Text = string | { es: string; en: string };
export type Option = { say: Text; reply: Text };
export type SceneText = { title: Text; line: Text; money?: Record<string, string>; options: Option[]; line2?: Text; options2?: Option[]; end: Text; talk: Text[]; words: Text[] };
export type Level = { id: string; label: string; story: string; hint: string; track?: boolean };
export const LEVELS: Level[];
export const CONTENT: Record<string, Record<string, SceneText>>;
