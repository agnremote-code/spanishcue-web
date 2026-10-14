export type Speaker = { name: string; country: string; voice: string };
export type Listening = {
  id: string;
  title: string;
  place: string;
  context: string;
  speakers: Speaker[];
  lines: { s: number; text: string }[];
  choice: { q: string; options: string[]; answer: number }[];
  open: { q: string; model: string }[];
  gaps: string;
  glossary: { word: string; meaning: string }[];
};
export type ListeningFile = { game: string; level: string; items: Listening[] };
export type GameId = 'noche' | 'casino' | 'bosque' | 'reino';
