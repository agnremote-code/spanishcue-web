'use client';

// The people of the night speak their lines out loud with the browser's own
// Spanish voices: narration in a neutral voice, what stands between «» in the
// voice of the character (a lower pitch for men, a higher one for women),
// slower at the first levels. Only what a character or the narrator says is
// read; the questions for the learner are never spoken. Bilingual lines read
// their Spanish half only. Off with the «Voces» switch (kept per device).
import { BI_BREAK } from './bilingual.mjs';

export const VOICE_KEY = 'spanishcue:noche-abierta:voces';
export type Speaker = { body?: string | null; level?: string };

const synthOf = () => (typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined' ? window.speechSynthesis : null);

export function voicesOn(): boolean {
  try { return window.localStorage.getItem(VOICE_KEY) !== 'off'; } catch { return true; }
}
export function setVoicesOn(on: boolean) {
  try { window.localStorage.setItem(VOICE_KEY, on ? 'on' : 'off'); } catch { /* private mode */ }
  if (!on) stopSpeaking();
}
export const voiceSupported = () => Boolean(synthOf());

let warmed = false;
function spanishVoice(gender: 'm' | 'f' | null): SpeechSynthesisVoice | null {
  const synth = synthOf();
  if (!synth) return null;
  if (!warmed) { warmed = true; synth.addEventListener('voiceschanged', () => { /* the list fills in; the next line reads it */ }); }
  const voices = synth.getVoices().filter(voice => /^es([-_]|$)/i.test(voice.lang));
  if (!voices.length) return null;
  const order = ['es-ar', 'es-mx', 'es-es', 'es-us', 'es-co', 'es-cl', 'es-pe', 'es-uy', 'es-ve'];
  const rank = (voice: SpeechSynthesisVoice) => { const at = order.indexOf(voice.lang.toLowerCase().replace('_', '-')); return at < 0 ? order.length : at; };
  const female = /(female|mujer|paulina|monica|mónica|helena|laura|lucia|lucía|sabina|elvira|dalia|salome|salomé|elena|camila|paloma|marisol|esperanza|francisca|angelica)/i;
  const sorted = [...voices].sort((a, b) => rank(a) - rank(b));
  if (gender === 'f') return sorted.find(voice => female.test(voice.name)) ?? sorted[0];
  if (gender === 'm') return sorted.find(voice => !female.test(voice.name)) ?? sorted[0];
  return sorted[0];
}

// «Quoted» stretches belong to the character; the rest is narration.
export function segmentsOf(text: string): { text: string; quoted: boolean }[] {
  const spanish = text.split(BI_BREAK)[0];
  const out: { text: string; quoted: boolean }[] = [];
  const re = /«([^»]*)»/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(spanish))) {
    const before = spanish.slice(last, match.index).trim();
    if (before) out.push({ text: before, quoted: false });
    const inside = match[1].trim();
    if (inside) out.push({ text: inside, quoted: true });
    last = match.index + match[0].length;
  }
  const tail = spanish.slice(last).trim();
  if (tail) out.push({ text: tail, quoted: false });
  return out.filter(item => /[\p{L}\p{N}]/u.test(item.text));
}

const rateFor = (level?: string) => (level === 'A0' ? 0.78 : level === 'A1' ? 0.84 : level === 'A2' ? 0.9 : 0.97);

/** Reads one or more lines, in order, stopping whatever was being read. */
export function speakLines(lines: (string | null | undefined)[], speaker: Speaker = {}) {
  const synth = synthOf();
  if (!synth || !voicesOn()) return false;
  const gender = speaker.body === 'f' ? 'f' : speaker.body === 'm' ? 'm' : null;
  const segments = lines.filter((line): line is string => Boolean(line)).flatMap(segmentsOf);
  if (!segments.length) return false;
  synth.cancel();
  if (synth.paused) synth.resume();
  const rate = rateFor(speaker.level);
  for (const segment of segments) {
    const utterance = new SpeechSynthesisUtterance(segment.text);
    const voice = spanishVoice(segment.quoted ? gender : null);
    if (voice) { utterance.voice = voice; utterance.lang = voice.lang; } else utterance.lang = 'es-ES';
    utterance.rate = segment.quoted ? rate : Math.min(1, rate + 0.04);
    utterance.pitch = segment.quoted ? (gender === 'f' ? 1.15 : gender === 'm' ? 0.85 : 1) : 1;
    try { synth.speak(utterance); } catch { /* speech is optional */ }
  }
  return true;
}

export function stopSpeaking() {
  try { synthOf()?.cancel(); } catch { /* ignore */ }
}
