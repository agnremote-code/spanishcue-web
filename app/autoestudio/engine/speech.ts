"use client";

import { audioKey } from "../curriculum/audio-key";
import type { Voice } from "../curriculum/types";

/**
 * Plays Spanish audio. A recorded MP3 is used when the page provides one for
 * this exact text and voice; otherwise the browser's Spanish speech engine
 * reads it with a regional voice when the device has one.
 */
export type Clip = { text: string; voice?: Voice };
export type AudioMap = Record<string, string>;

let current: HTMLAudioElement | null = null;
let cancelled = 0;

function speechAvailable() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function audioSupported(): boolean {
  return typeof window !== "undefined" && (speechAvailable() || typeof Audio !== "undefined");
}

function pickVoice(voice: Voice | undefined): SpeechSynthesisVoice | null {
  if (!speechAvailable()) return null;
  const voices = window.speechSynthesis.getVoices().filter((candidate) => candidate.lang.toLowerCase().startsWith("es"));
  if (!voices.length) return null;
  const [lang, region, gender] = (voice ?? "es-MX-f").split("-");
  const tag = `${lang}-${region}`.toLowerCase();
  const regional = voices.filter((candidate) => candidate.lang.toLowerCase().replace("_", "-") === tag);
  const latam = voices.filter((candidate) => !/^es[-_]es$/i.test(candidate.lang));
  const pool = regional.length ? regional : region !== "ES" && latam.length ? latam : voices;
  const female = /(female|mujer|paulina|monica|mónica|helena|laura|lucia|lucía|sabina|elvira|dalia|salome|salomé|elena|camila|paloma|marisol|google español de estados unidos)/i;
  const preferred = pool.find((candidate) => (gender === "f" ? female.test(candidate.name) : !female.test(candidate.name)));
  return preferred ?? pool[0];
}

function speakOne(clip: Clip, rate: number): Promise<void> {
  return new Promise((resolve) => {
    if (!speechAvailable()) {
      resolve();
      return;
    }
    const utterance = new SpeechSynthesisUtterance(clip.text);
    const voice = pickVoice(clip.voice);
    utterance.lang = voice?.lang ?? (clip.voice ? clip.voice.slice(0, 5) : "es-MX");
    if (voice) utterance.voice = voice;
    utterance.rate = rate;
    utterance.pitch = clip.voice?.endsWith("-m") ? 0.92 : 1.06;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

function playFile(src: string, rate: number): Promise<void> {
  return new Promise((resolve) => {
    const audio = new Audio(src);
    current = audio;
    audio.playbackRate = rate;
    audio.onended = () => resolve();
    audio.onerror = () => resolve();
    audio.play().catch(() => resolve());
  });
}

export function stopAudio() {
  cancelled += 1;
  if (speechAvailable()) window.speechSynthesis.cancel();
  if (current) {
    current.pause();
    current = null;
  }
}

/** Plays clips in order. Resolves when finished or stopped. */
export async function playClips(clips: Clip[], options: { rate?: number; audio?: AudioMap; onLine?: (index: number) => void } = {}) {
  stopAudio();
  const run = cancelled;
  const rate = options.rate ?? 1;
  for (let index = 0; index < clips.length; index += 1) {
    if (run !== cancelled) return;
    options.onLine?.(index);
    const clip = clips[index];
    const src = options.audio?.[audioKey(clip.text, clip.voice)];
    if (src) await playFile(src, rate);
    else await speakOne(clip, rate * 0.95);
    if (run !== cancelled) return;
    if (index < clips.length - 1) await new Promise((resolve) => setTimeout(resolve, 350));
  }
  options.onLine?.(-1);
}

/** Some browsers load voices lazily; warm them up once. */
export function warmVoices() {
  if (!speechAvailable()) return;
  window.speechSynthesis.getVoices();
}
