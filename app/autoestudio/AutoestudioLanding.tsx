"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useI18n } from "../i18n/LocaleProvider";
import { SpanishCueBrand } from "../SpanishCueBrand";
import { SECTION_ORDER } from "./curriculum/types";
import { copyFor, sectionIcons, sectionLabels } from "./engine/copy";
import { moduleHref, type LandingLevel } from "./engine/links";
import { levelProgress } from "./progress/model";
import { useProgress } from "./progress/useProgress";
import "./autoestudio.css";

export default function AutoestudioLanding({ levels, fullAccess }: { levels: LandingLevel[]; fullAccess: boolean }) {
  const { locale } = useI18n();
  const en = locale === "en";
  const t = copyFor(locale);
  const labels = sectionLabels[en ? "en" : "es"];
  const { state, ready } = useProgress();
  const all = levels.flatMap((level) => level.modules);
  const last = ready && state.lastModule ? all.find((summary) => summary.id === state.lastModule) : undefined;
  const first = all[0];
  const resume = last ?? first;
  const resumeLabel = last ? t.continue : t.start;

  return (
    <div className="ae-shell ae-landing">
      <header className="ae-topbar">
        <Link href="/" className="ae-brand" aria-label="SPANISHCUE">
          <SpanishCueBrand variant="compact" context={t.product.toUpperCase()} />
        </Link>
        <nav aria-label="Breadcrumb" className="ae-crumbs">
          <Link href="/">{en ? "Library" : "Biblioteca"}</Link>
          <span aria-hidden="true">›</span>
          <b>{t.product}</b>
        </nav>
      </header>

      <section className="ae-landing-hero">
        <div>
          <p className="ae-kicker">{t.product.toUpperCase()} · A1–C2</p>
          <h1>
            {en ? "Study here." : "Estudia aquí."} <em>{en ? "Use it in class." : "Úsalo en clase."}</em>
          </h1>
          <p className="ae-hero-sub">
            {en
              ? "A complete self-study course that moves you forward between live lessons, week by week. Every week ends with exactly what you will use in your next class."
              : "Un curso completo para avanzar entre clases, semana a semana. Cada semana termina con lo que vas a usar en tu próxima clase en vivo."}
          </p>
          {resume && (
            <div className="ae-cta-row">
              <Link className="ae-primary big" href={moduleHref(resume, fullAccess)}>
                {resumeLabel}: {resume.level.toUpperCase()} · {t.week} {resume.week}
                <small>{resume.title}</small>
              </Link>
              <a className="ae-ghost" href="#niveles">
                {en ? "See the level map" : "Ver el mapa de niveles"}
              </a>
            </div>
          )}
          {!fullAccess && <p className="ae-hint">{en ? "A1 weeks 1 and 2 are free. PRO opens the whole route." : "Las semanas 1 y 2 de A1 son gratis. PRO abre todo el recorrido."}</p>}
        </div>
        <div className="ae-landing-art" aria-hidden="true">
          <span className="ae-sun" />
          <span className="ae-hill one" />
          <span className="ae-hill two" />
          <span className="ae-path" />
          <img src="/brand/mascot/walking.webp" alt="" width="900" height="1350" />
        </div>
      </section>

      <section className="ae-rhythm" aria-labelledby="ae-rhythm-title">
        <div>
          <h2 id="ae-rhythm-title">{en ? "Your weekly rhythm" : "Tu ritmo semanal"}</h2>
          <p>{en ? "60–90 minutes a week, in short sessions. Short sessions beat one exhausting marathon." : "Entre 60 y 90 minutos por semana, en sesiones cortas. Mejor poco y seguido que un maratón agotador."}</p>
        </div>
        <ol>
          {SECTION_ORDER.map((key, index) => (
            <li key={key} className={key === "useInClass" ? "is-class" : ""}>
              <i aria-hidden="true">{sectionIcons[key]}</i>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <span>{labels[key]}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="ae-twomodes">
        <article>
          <span>1</span>
          <h3>{en ? "Prepare" : "Prepárate"}</h3>
          <p>{en ? "Explanation, grammar, vocabulary, pronunciation, listening and reading: you learn the week's language step by step, with feedback that tells you why." : "Explicación, gramática, vocabulario, pronunciación, escucha y lectura: aprendes la lengua de la semana paso a paso, con correcciones que explican por qué."}</p>
        </article>
        <article>
          <span>2</span>
          <h3>{en ? "Practise" : "Practica"}</h3>
          <p>{en ? "Varied exercises, writing with a model and checklist, speaking with a timer and your own recording, and a mixed quiz." : "Ejercicios variados, escritura con modelo y lista de control, expresión oral con temporizador y grabación, y un quiz mixto."}</p>
        </article>
        <article className="is-class">
          <span>3</span>
          <h3>{en ? "Use it in class" : "Úsalo en clase"}</h3>
          <p>{en ? "Each week gives you cards to tell, ask, compare or defend something with your teacher. You arrive ready to speak." : "Cada semana te da tarjetas para contar, preguntar, comparar o defender algo con tu profesor. Llegas a clase listo para hablar."}</p>
        </article>
      </section>

      <section className="ae-levels" id="niveles" aria-labelledby="ae-levels-title">
        <h2 id="ae-levels-title">{en ? "The route, level by level" : "La ruta, nivel a nivel"}</h2>
        <ol className="ae-level-road">
          {levels.map((level) => {
            const ids = level.modules.map((summary) => summary.id);
            const progress = levelProgress(state, ids);
            const nextSummary = level.modules.find((summary) => summary.id === progress.nextModuleId) ?? level.modules[0];
            const checkpoints = level.modules.filter((summary) => summary.kind === "checkpoint").length;
            return (
              <li key={level.id} className="ae-level-card" style={{ "--ae-level": level.color } as CSSProperties}>
                <Link href={`/autoestudio/${level.id}`} className="ae-level-tile" aria-label={`${level.code} · ${en ? level.nameEn : level.name}`}>
                  <b>{level.code}</b>
                  <img src={level.mascot} alt="" width="900" height="1350" />
                </Link>
                <div className="ae-level-copy">
                  <p className="ae-kicker">
                    {en ? level.nameEn : level.name} · {en ? "Route" : "Ruta"}: {en ? level.routeEn : level.route}
                  </p>
                  <h3>{en ? level.outcomeEn : level.outcome}</h3>
                  <p className="ae-level-meta">
                    {level.modules.length} {en ? "weeks" : "semanas"} · {checkpoints} {en ? "checkpoints" : "checkpoints"}
                  </p>
                  <div className="ae-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress.percent} aria-label={`${level.code}: ${progress.completed}/${progress.total}`}>
                    <span style={{ width: `${progress.percent}%` }} />
                  </div>
                  <small>
                    {ready ? `${progress.completed}/${progress.total} ${en ? "weeks completed" : "semanas completadas"}` : " "}
                  </small>
                </div>
                <div className="ae-level-next">
                  {nextSummary && (
                    <>
                      <small>{progress.hasStarted ? t.nextUp : en ? "Starts with" : "Empieza con"}</small>
                      <b>
                        {t.week} {nextSummary.week} · {nextSummary.title}
                      </b>
                      <Link className="ae-primary" href={moduleHref(nextSummary, fullAccess)}>
                        {!nextSummary.free && !fullAccess ? `🔒 ${t.locked}` : progress.hasStarted ? t.continue : t.start} →
                      </Link>
                    </>
                  )}
                  <Link className="ae-link" href={`/autoestudio/${level.id}`}>
                    {en ? "Open the map" : "Abrir el mapa"}
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="ae-hint">{t.progressLocal}</p>
      </section>
    </div>
  );
}
