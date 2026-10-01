"use client";

import Link from "next/link";
import { useI18n } from "../i18n/LocaleProvider";
import { useProgress } from "./progress/useProgress";
import "./library-entry.css";

/** The single Library entry point into Autoestudio. Carries no course content. */
export default function AutoestudioLibraryEntry() {
  const { locale } = useI18n();
  const en = locale === "en";
  const { state, ready } = useProgress();
  const last = ready ? state.lastModule?.match(/^(a1|a2|b1|b2|c1|c2)-(\d{2})$/) : null;
  const href = last ? `/autoestudio/${last[1]}/semana-${Number(last[2])}` : "/autoestudio";
  return (
    <Link href={href} className="ae-library-entry" aria-label={en ? "Autoestudio: self-study course" : "Autoestudio: curso para estudiar entre clases"}>
      <span className="ae-library-entry-art" aria-hidden="true">
        <img src="/brand/mascot/studying.webp" alt="" width="900" height="1350" />
      </span>
      <span className="ae-library-entry-copy">
        <small>{en ? "NEW · SELF-STUDY COURSE" : "NUEVO · CURSO DE AUTOESTUDIO"}</small>
        <b>{en ? "Study here. Use it in class." : "Estudia aquí. Úsalo en clase."}</b>
        <em>
          {en
            ? "Week by week: explanation, practice, listening, reading, speaking and cards for your next live class."
            : "Semana a semana: explicación, práctica, escucha, lectura, expresión oral y tarjetas para tu próxima clase."}
        </em>
      </span>
      <i>{last ? (en ? `Continue ${last[1].toUpperCase()} · week ${Number(last[2])}` : `Continuar ${last[1].toUpperCase()} · semana ${Number(last[2])}`) : en ? "Open Autoestudio" : "Abrir Autoestudio"} →</i>
    </Link>
  );
}
