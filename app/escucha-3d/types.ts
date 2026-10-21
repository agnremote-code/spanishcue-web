export type Speaker = { name: string; country: string; voice: string };
export type Listening = {
  id: string;
  title: string;
  place: string;
  context: string;
  contextEn?: string;
  speakers: Speaker[];
  lines: { s: number; text: string; en?: string }[];
  choice: { q: string; options: string[]; answer: number; qEn?: string }[];
  open: { q: string; model: string; qEn?: string }[];
  gaps: string;
  glossary: { word: string; meaning: string; en?: string }[];
};
export type ListeningFile = { game: string; level: string; items: Listening[] };
export type GameId = 'noche' | 'casino' | 'bosque' | 'reino' | 'hospital' | 'usa' | 'mexico' | 'argentina' | 'espana' | 'suecia' | 'feria';
