"use client";

import { audioKey } from "../curriculum/audio-key";
import type { Voice } from "../curriculum/types";

export type Clip = { text: string; voice?: Voice };
export type AudioMap = Record<string, string>;
type Options = { rate?: number; audio?: AudioMap; onLine?: (index: number) => void; onStart?: () => void };
type Run = { stop: () => void; utterances: SpeechSynthesisUtterance[] };
let active: Run | null = null;
let media: HTMLAudioElement | null = null;
let voiceEngine: SpeechSynthesis | null = null;
let cachedVoices: SpeechSynthesisVoice[] = [];

function speechAvailable() {
  return typeof window !== "undefined" && !!window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined";
}

export function audioSupported(): boolean {
  return typeof window !== "undefined" && (speechAvailable() || typeof Audio !== "undefined");
}

function refreshVoices() {
  cachedVoices = voiceEngine?.getVoices() ?? [];
}

/** Listen before reading: Android/Chromium may initially return an empty list. */
export function warmVoices() {
  if (!speechAvailable()) return;
  const synth = window.speechSynthesis;
  if (voiceEngine !== synth) {
    voiceEngine?.removeEventListener("voiceschanged", refreshVoices);
    voiceEngine = synth;
    synth.addEventListener("voiceschanged", refreshVoices);
  }
  refreshVoices();
}

function pickVoice(voice: Voice | undefined): SpeechSynthesisVoice | null {
  if (!speechAvailable()) return null;
  warmVoices();
  const voices = cachedVoices.filter((candidate) => /^es(?:[-_]|$)/i.test(candidate.lang));
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

/** Settle our own promise: cancel() does not reliably emit end/error on mobile. */
export function stopAudio() {
  active?.stop();
}

/**
 * Called directly by the click handler. Never await voices or a timer before
 * speak()/play(): doing so loses transient activation on mobile browsers.
 * Queue the entire speech sequence in that same gesture, retaining every
 * utterance until it ends. The browser owns sequencing, not async callbacks.
 */
export function playClips(clips: Clip[], options: Options = {}): Promise<boolean> {
  stopAudio();
  if (!clips.length) return Promise.resolve(true);
  return new Promise((resolve, reject) => {
    const synth = speechAvailable() ? window.speechSynthesis : null;
    const rate = options.rate ?? 1;
    let settled = false;
    let started = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const run: Run = { stop: () => finish(false), utterances: [] };
    active = run;
    const clean = () => {
      clearTimeout(timer);
      for (const utterance of run.utterances) {
        utterance.onstart = utterance.onend = utterance.onerror = null;
      }
      run.utterances.length = 0;
      if (media) media.onplaying = media.onended = media.onerror = null;
      if (active === run) active = null;
      options.onLine?.(-1);
    };
    const finish = (completed: boolean, error?: Error) => {
      if (settled) return;
      settled = true;
      clean();
      if (!completed) {
        media?.pause();
        synth?.cancel();
      }
      if (error) reject(error);
      else resolve(completed);
    };
    const fail = (code: string) => {
      if (settled) return;
      // Never log lesson text, learner data, tokens or audio URLs.
      console.warn("[autoestudio audio]", { code, rate, voices: cachedVoices.length,
        paused: synth?.paused, pending: synth?.pending, speaking: synth?.speaking });
      finish(false, new Error(code));
    };
    const onStart = (index: number) => {
      if (settled) return;
      clearTimeout(timer);
      options.onLine?.(index);
      if (!started) { started = true; options.onStart?.(); }
    };
    // Failure detection only, never a delayed playback/unlock workaround.
    const expectStart = () => {
      clearTimeout(timer);
      timer = setTimeout(() => fail("audio-start-timeout"), 15000);
    };
    try {
      const sources = clips.map(clip => options.audio?.[audioKey(clip.text, clip.voice)]);
      if (sources.every(Boolean)) {
        // Reuse the element unlocked by the first tap for subsequent files.
        media ??= new Audio();
        const audio = media;
        const playFile = (index: number) => {
          if (settled) return;
          audio.src = sources[index]!;
          audio.playbackRate = rate;
          audio.onplaying = () => onStart(index);
          audio.onerror = () => fail(`media-${audio.error?.code ?? "load"}`);
          audio.onended = () => {
            if (index + 1 < clips.length) playFile(index + 1);
            else finish(true);
          };
          expectStart();
          audio.play().catch(error => fail(`media-${error?.name ?? "play"}`));
        };
        playFile(0);
      } else {
        if (!synth) { fail("speech-unavailable"); return; }
        warmVoices();
        // cancel() does not clear paused; a paused global engine queues forever.
        if (synth.speaking || synth.pending) synth.cancel();
        if (synth.paused) synth.resume();
        run.utterances = clips.map((clip, index) => {
          const utterance = new SpeechSynthesisUtterance(clip.text);
          const voice = pickVoice(clip.voice);
          utterance.lang = voice?.lang ?? (clip.voice?.slice(0, 5) || "es-MX");
          // Empty getVoices() is not proof of no installed voice. Let the engine
          // resolve the Spanish language now; voiceschanged refreshes later taps.
          if (voice) utterance.voice = voice;
          utterance.rate = rate;
          utterance.pitch = clip.voice?.endsWith("-m") ? 0.92 : 1.06;
          utterance.onstart = () => onStart(index);
          utterance.onerror = event => fail(`speech-${event.error}`);
          utterance.onend = () => {
            if (settled) return;
            if (index === clips.length - 1) finish(true);
            else expectStart();
          };
          return utterance;
        });
        expectStart();
        for (const utterance of run.utterances) {
          if (settled) break;
          synth.speak(utterance);
        }
      }
    } catch (error) {
      fail(error instanceof Error ? error.name : "audio-exception");
    }
  });
}
