"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { previewVideo } from "./conversation-preview-videos";
import { useI18n } from "./i18n/LocaleProvider";
import "./lesson-preview.css";

type PreviewLesson = {
  id: number;
  title: string;
  image: string;
  level?: string;
};

const imagePositions: Record<number, string> = {
  16: "center 58%",
  18: "center 54%",
  19: "center 42%",
  23: "center 40%",
  28: "center 44%",
  29: "center 52%",
  30: "center 48%",
  31: "center 40%",
  36: "center 52%",
  37: "center 44%",
  105: "center 52%",
  130: "center 51%",
  131: "center 52%",
  132: "center 48%",
  133: "center 50%",
  134: "center 47%",
  135: "center 49%",
  223: "60% 16%",
};

// Muted clips may start without a click in every browser; set it on the element itself.
// The clip stays transparent until its first frame plays, so the cover never blinks.
function startClip(clip: HTMLVideoElement | null) {
  if (!clip) return;
  clip.muted = true;
  clip.addEventListener("playing", () => clip.classList.add("is-playing"), { once: true });
  void clip.play().catch(() => {});
}

export default function LessonPreview({
  lesson,
  news = false,
}: {
  lesson: PreviewLesson;
  news?: boolean;
}) {
  const { t } = useI18n();
  const video = news ? null : previewVideo(lesson.id);
  const figure = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  // The real recording is only mounted while a mouse is over the card, so the
  // library keeps no video elements around and the cover stays as its poster.
  useEffect(() => {
    const card = figure.current?.closest(".lesson-card, .conversation-route-card") ?? figure.current;
    if (!video || !card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Cards sliding under a still mouse while the page scrolls must not mount
    // clips (that flashed while scrolling): only a real pointer movement that
    // rests on the card for a moment starts the recording.
    let timer = 0;
    const move = (event: Event) => {
      const { movementX, movementY } = event as MouseEvent;
      if (!movementX && !movementY) return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setHovered(true), 180);
    };
    const leave = () => {
      window.clearTimeout(timer);
      setHovered(false);
    };
    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", leave);
    return () => {
      window.clearTimeout(timer);
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", leave);
    };
  }, [video]);

  const style = {
    "--preview-position": imagePositions[lesson.id] || "center",
  } as CSSProperties;

  return (
    <figure
      className={`lesson-preview ${news ? "preview-news" : ""}`}
      role="img"
      aria-label={t("common.previewOf", { title: lesson.title })}
      style={style}
      ref={figure}
    >
      <img
        src={lesson.image}
        alt=""
        loading={news ? "eager" : "lazy"}
        decoding="async"
        width="1672"
        height="941"
      />
      {video && hovered && (
        <video ref={startClip} muted autoPlay loop playsInline poster={lesson.image} aria-hidden="true" tabIndex={-1}>
          <source src={video} type="video/mp4" />
        </video>
      )}
    </figure>
  );
}
