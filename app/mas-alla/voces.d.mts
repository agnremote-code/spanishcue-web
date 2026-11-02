import type { Text } from './levels.d.mts';
export type Voice = {
  id: string;
  world: 'umbral' | 'cielo' | 'infierno';
  zone: string;
  kind: 'soul' | 'angel' | 'demon' | 'place';
  name: string;
  role: { es: string; en: string };
  walker?: number;
  extra?: number;
  at?: { x: number; z: number };
  look?: { x: number; z: number };
};
/** What a voice says and the three questions it asks, at one level. */
export type VoiceText = { line: Text; qs: [Text, Text, Text] };
export const VOICES: Voice[];
export const VOICE_IDS: string[];
export function voiceById(id: string): Voice | null;
export function voicesOf(world: string): Voice[];
export function isVoice(id: string): boolean;
export const VOICE_LOADERS: Record<string, () => Promise<{ default: Record<string, VoiceText> }>>;
export function loadVoices(level: string): Promise<Record<string, VoiceText>>;
export function voiceTexts(raw: Record<string, unknown[]>): Record<string, VoiceText>;
export const VOICE_MIN_WORDS: Record<string, number>;
