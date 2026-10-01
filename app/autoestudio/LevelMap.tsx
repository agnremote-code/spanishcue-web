"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useI18n } from "../i18n/LocaleProvider";
import { SpanishCueBrand } from "../SpanishCueBrand";
import { moduleHref, type LandingLevel } from "./engine/links";
import { copyFor } from "./engine/copy";
import { levelProgress, moduleStatus, sectionsDone } from "./progress/model";
import { useProgress } from "./progress/useProgress";
import "./autoestudio.css";

export default function LevelMap({ level, fullAccess, nextLevel }: { level: LandingLevel; fullAccess: boolean; nextLevel: { id: string; code: string } | null }) {
  const { locale } = useI18n();
  const en = locale === "en";
  const t = copyFor(locale);
  const { state, ready } = useProgress();
  const progress = levelProgress(state, level.modules.map((summary) => summary.id));
  const nextSummary = level.modules.find((summary) => summary.id === progress.nextModuleId) ?? level.modules[0];

  return (
    <div className="ae-shell ae-levelmap" style={{ "--ae-level": level.color } as CSSProperties}>
      <header className="ae-topbar">
        <Link href="/" className="ae-brand" aria-label="SPANISHCUE">
          <SpanishCueBrand variant="compact" context={t.product.toUpperCase()} />
        </Link>
        <nav aria-label="Breadcrumb" className="ae-crumbs">
          <Link href="/autoestudio">{t.product}</Link>
          <span aria-hidden="true">›</span>
          <b>{level.code}</b>
        </nav>
      </header>

      <section className="ae-level-hero">
        <div className="ae-level-tile big" aria-hidden="true">
          <b>{level.code}</b>
          <img src={level.mascot} alt="" width="900" height="1350" />
        </div>
        <div>
          <p className="ae-kicker">
            {en ? level.nameEn : level.name} · {en ? "Route" : "Ruta"}: {en ? level.routeEn : level.route}
          </p>
          <h1>{en ? level.outcomeEn : level.outcome}</h1>
          <div className="ae-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress.percent} aria-label={`${progress.completed}/${progress.total}`}>
            <span style={{ width: `${progress.percent}%` }} />
          </div>
          <p className="ae-level-meta">
            {ready ? `${progress.completed}/${progress.total} ${en ? "weeks completed" : "semanas completadas"}` : `${progress.total} ${en ? "weeks" : "semanas"}`}
          </p>
          {nextSummary && (
            <Link className="ae-primary big" href={moduleHref(nextSummary, fullAccess)}>
              {progress.hasStarted ? t.continue : t.start}: {t.week} {nextSummary.week}
              <small>{nextSummary.title}</small>
            </Link>
          )}
        </div>
      </section>

      <ol className="ae-weeks">
        {level.modules.map((summary, index) => {
          const status = moduleStatus(state, summary.id);
          const locked = !summary.free && !fullAccess;
          const done = sectionsDone(state.modules[summary.id]);
          return (
            <li key={summary.id} className={`ae-week ${summary.kind} ${status} ${index % 2 ? "right" : "left"} ${summary.id === progress.nextModuleId ? "is-next" : ""}`}>
              <Link href={moduleHref(summary, fullAccess)} className="ae-week-card" aria-label={`${t.week} ${summary.week}: ${summary.title}${locked ? ` (${t.locked})` : ""}`}>
                {summary.id === progress.nextModuleId && <img className="ae-week-mascot" src="/brand/mascot/walking.webp" alt="" width="600" height="900" aria-hidden="true" />}
                <span className="ae-week-num" aria-hidden="true">
                  {status === "completed" ? "✓" : summary.kind === "checkpoint" ? "★" : summary.week}
                </span>
                <span className="ae-week-body">
                  <small>
                    {summary.kind === "checkpoint" ? `${t.checkpoint} · ${t.week} ${summary.week}` : `${t.week} ${summary.week}`} · {summary.stop.place}
                  </small>
                  <b>{summary.title}</b>
                  <em>{summary.canDo}</em>
                  <span className="ae-week-tags">
                    <span>⏱ {summary.minutes} {t.minutes}</span>
                    {summary.free && !fullAccess && <span className="free">{t.free}</span>}
                    {locked && <span className="lock">🔒 {t.locked}</span>}
                    {status === "in-progress" && <span className="progress">{done}/13</span>}
                    {status === "completed" && <span className="done">{t.completed}</span>}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
      {nextLevel && (
        <p className="ae-level-after">
          <Link className="ae-ghost" href={`/autoestudio/${nextLevel.id}`}>
            {en ? "Next level" : "Siguiente nivel"}: {nextLevel.code} →
          </Link>
        </p>
      )}
      <p className="ae-hint center">{t.progressLocal}</p>
    </div>
  );
}
