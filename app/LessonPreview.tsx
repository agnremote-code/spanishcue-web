"use client";

import type { CSSProperties } from "react";
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
  34: "center 48%",
  36: "center 52%",
  37: "center 44%",
  105: "center 52%",
  128: "center 54%",
  129: "center 47%",
  130: "center 51%",
  131: "center 52%",
  132: "center 48%",
  133: "center 50%",
  134: "center 47%",
  135: "center 49%",
  203: "center 46%",
};

export default function LessonPreview({
  lesson,
  news = false,
}: {
  lesson: PreviewLesson;
  news?: boolean;
}) {
  const { t } = useI18n();
  const style = {
    "--preview-position": imagePositions[lesson.id] || "center",
  } as CSSProperties;

  return (
    <figure
      className={`lesson-preview ${news ? "preview-news" : ""}`}
      role="img"
      aria-label={t("common.previewOf", { title: lesson.title })}
      style={style}
    >
      <img
        src={lesson.image}
        alt=""
        loading={news ? "eager" : "lazy"}
        decoding="async"
        width="1672"
        height="941"
      />
    </figure>
  );
}
