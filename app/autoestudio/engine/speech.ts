"use client";

import { audioKey } from "../curriculum/audio-key";
import type { Voice } from "../curriculum/types";

export type Clip = { text: string; voice?: Voice };
export type AudioMap = Record<string, string>;
type Options = { rate?: number; audio?: AudioMap; onLine?: (index: number) => void; onStart?: () => void };
type Run = { stop: () => void };
let active: Run | null = null;
let media: HTMLAudioElement | null = null;

export function audioSupported(): boolean {
  return typeof window !== "undefined" && typeof Audio !== "undefined";
}

/** Settle our promise even when pause() does not emit an event on mobile. */
export function stopAudio() {
  active?.stop();
}

/** Static neural recordings only. First play() stays inside the user gesture. */
export function playClips(clips: Clip[], options: Options = {}): Promise<boolean> {
  stopAudio();
  if (!clips.length) return Promise.resolve(true);
  return new Promise((resolve, reject) => {
    const rate = options.rate ?? 1;
    let settled = false;
    let started = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const run: Run = { stop: () => finish(false) };
    active = run;
    const finish = (completed: boolean, error?: Error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (media) media.onplaying = media.onended = media.onerror = null;
      if (!completed) media?.pause();
      if (active === run) active = null;
      options.onLine?.(-1);
      if (error) reject(error);
      else resolve(completed);
    };
    const fail = (code: string) => {
      if (settled) return;
      // Never log lesson text, learner data, tokens or audio URLs.
      console.warn("[autoestudio audio]", { code, rate });
      finish(false, new Error(code));
    };
    try {
      const sources = clips.map(clip => options.audio?.[audioKey(clip.text, clip.voice)]);
      // Incomplete sequences are explicit errors, never a return to browser TTS.
      if (!sources.every(Boolean)) { fail("audio-asset-missing"); return; }
      if (!audioSupported()) { fail("audio-unavailable"); return; }
      media ??= new Audio();
      const audio = media;
      const playFile = (index: number) => {
        if (settled) return;
        audio.src = sources[index]!;
        audio.playbackRate = rate;
        audio.onplaying = () => {
          if (settled) return;
          clearTimeout(timer);
          options.onLine?.(index);
          if (!started) { started = true; options.onStart?.(); }
        };
        audio.onerror = () => fail(`media-${audio.error?.code ?? "load"}`);
        audio.onended = () => {
          if (settled) return;
          if (index + 1 < clips.length) playFile(index + 1);
          else finish(true);
        };
        clearTimeout(timer);
        timer = setTimeout(() => fail("audio-start-timeout"), 15000);
        audio.play().catch(error => fail(`media-${error?.name ?? "play"}`));
      };
      playFile(0);
    } catch (error) {
      fail(error instanceof Error ? error.name : "audio-exception");
    }
  });
}
