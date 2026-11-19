// Plays the shouted lines of voces.json (pre-generated native neural voices). If a
// clip is missing or the browser blocks audio, the speech bubble still shows.
//
// Three things keep the voices quiet:
// - the world's sound button (setShoutMuted), which also silences the music;
// - the «Voces» button (setVoicesOff), only the voices, kept in this browser;
// - an open conversation (hushVoices): nobody in the background yells or cries
//   while the learner is talking. Crashing into someone still makes them yell,
//   because the learner cannot run while a conversation is open.
import voces from './voces.json';
import { bumpLine, voiceSrc, type Voice } from './bump.mjs';

export const VOICES = voces.lines as Voice[];
export const CRIES = VOICES.filter(v => v.kind === 'cry');

const KEY = 'spanishcue:voces-3d:apagadas';
let current: HTMLAudioElement | null = null;
let soundMuted = false;
let voicesOff: boolean | null = null;
const hushed = new Set<string>();
const listeners = new Set<(off: boolean) => void>();

function stop() { current?.pause(); current = null; }

export function voicesAreOff() {
  if (voicesOff === null) {
    voicesOff = false;
    try { voicesOff = typeof window !== 'undefined' && window.localStorage.getItem(KEY) === '1'; } catch { /* default: voices on */ }
  }
  return voicesOff;
}
export function setVoicesOff(off: boolean) {
  voicesOff = off;
  if (off) stop();
  try { window.localStorage.setItem(KEY, off ? '1' : '0'); } catch { /* Not saved, still applied. */ }
  for (const l of listeners) l(off);
}
export function onVoicesOff(listener: (off: boolean) => void) { listeners.add(listener); return () => { listeners.delete(listener); }; }

export function setShoutMuted(value: boolean) { soundMuted = value; if (value) stop(); }
/** While any reason is on (an open conversation, a task card), the background stays quiet. */
export function hushVoices(reason: string, on: boolean) {
  if (on) { hushed.add(reason); stop(); } else hushed.delete(reason);
}

export function shout(line: Voice, volume = 1) {
  if (soundMuted || hushed.size || voicesAreOff() || typeof Audio === 'undefined') return;
  try {
    current?.pause();
    const audio = new Audio(voiceSrc(line.id));
    audio.volume = Math.max(0, Math.min(1, volume));
    current = audio;
    void audio.play().catch(() => {});
  } catch { /* no audio: the bubble is enough */ }
}
/** The person keeps their voice; each new crash brings another of that voice's lines. */
const crashes = new Map<number, number>();
export function insultFor(body: string | undefined, seed: number) {
  const n = (crashes.get(seed) ?? -1) + 1;
  crashes.set(seed, n);
  return bumpLine(VOICES, body, seed, n);
}
