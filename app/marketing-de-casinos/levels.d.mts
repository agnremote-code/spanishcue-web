export type Option = { say: string; reply: string };
export type SceneText = { title: string; line: string; options: Option[]; line2: string; options2: Option[]; end: string; talk: string[]; words: string[] };
export type Level = { id: string; label: string; story: string; hint: string };
export const LEVELS: Level[];
export const CONTENT: Record<string, Record<string, SceneText>>;
