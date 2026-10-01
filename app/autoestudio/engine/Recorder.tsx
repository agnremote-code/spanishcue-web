"use client";

import { useEffect, useRef, useState } from "react";
import type { Copy } from "./copy";

/**
 * Lets the learner record and replay themselves. Audio never leaves the
 * device: the blob lives in memory and is discarded on unmount.
 */
export function Recorder({ t }: { t: Copy }) {
  const [state, setState] = useState<"idle" | "recording" | "ready" | "unavailable">("idle");
  const [url, setUrl] = useState<string | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => () => {
    recorderRef.current?.stream.getTracks().forEach((track) => track.stop());
    if (url) URL.revokeObjectURL(url);
  }, [url]);

  const start = async () => {
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setState("unavailable");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (event) => chunksRef.current.push(event.data);
      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
        setUrl((previous) => {
          if (previous) URL.revokeObjectURL(previous);
          return URL.createObjectURL(blob);
        });
        setState("ready");
      };
      recorderRef.current = recorder;
      recorder.start();
      setState("recording");
    } catch {
      setState("unavailable");
    }
  };

  const stop = () => recorderRef.current?.state === "recording" && recorderRef.current.stop();

  if (state === "unavailable") return <p className="ae-hint">{t.recordUnavailable}</p>;
  return (
    <div className="ae-recorder">
      {state === "recording" ? (
        <button type="button" className="ae-rec recording" onClick={stop}>
          <span aria-hidden="true">◼</span> {t.stopRecording}
        </button>
      ) : (
        <button type="button" className="ae-rec" onClick={start}>
          <span aria-hidden="true">●</span> {t.record}
        </button>
      )}
      {url && state === "ready" && <audio controls src={url} aria-label={t.playRecording} />}
    </div>
  );
}

/** Countdown for speaking tasks: gives a target, never blocks the learner. */
export function SpeakTimer({ seconds, t }: { seconds: number; t: Copy }) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    if (left === null || left <= 0) return;
    const timer = setTimeout(() => setLeft((value) => (value === null ? null : value - 1)), 1000);
    return () => clearTimeout(timer);
  }, [left]);
  const format = (value: number) => `${Math.floor(value / 60)}:${String(value % 60).padStart(2, "0")}`;
  return (
    <div className="ae-timer">
      <button type="button" onClick={() => setLeft(seconds)}>
        ⏱ {left === null ? `${t.startTimer} · ${format(seconds)}` : left > 0 ? format(left) : "0:00 ✓"}
      </button>
    </div>
  );
}
