// Plays the shouted lines of voces.json (pre-generated neural voices). If a
// clip is missing or the browser blocks audio, the speech bubble still shows.
import voces from './voces.json';
import { bumpLine, voiceSrc, type Voice } from './bump.mjs';

export const VOICES = voces.lines as Voice[];
export const CRIES = VOICES.filter(v => v.kind === 'cry');

let current: HTMLAudioElement | null = null;
let muted = false;
export function setShoutMuted(value: boolean) { muted = value; if (value) current?.pause(); }
export function shout(line: Voice, volume = 1) {
  if (muted || typeof Audio === 'undefined') return;
  try {
    current?.pause();
    const audio = new Audio(voiceSrc(line.id));
    audio.volume = Math.max(0, Math.min(1, volume));
    current = audio;
    void audio.play().catch(() => {});
  } catch { /* no audio: the bubble is enough */ }
}
export const insultFor = (body: string | undefined, seed: number) => bumpLine(VOICES, body, seed);
