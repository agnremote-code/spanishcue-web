"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";
import { useI18n } from "../i18n/LocaleProvider";
import { SpanishCueBrand } from "../SpanishCueBrand";
import { SECTION_ORDER, type LevelMeta, type Module, type ModuleSummary, type SectionKey } from "./curriculum/types";
import { copyFor, sectionHashes, sectionCoach, sectionIcons, sectionLabels, sectionMascots } from "./engine/copy";
import type { EngineContext } from "./engine/Exercises";
import { Rich } from "./engine/Rich";
import {
  GoalSection,
  ListeningSection,
  PracticeSection,
  PronunciationSection,
  QuizSection,
  ReadingSection,
  SpeakingSection,
  TheorySection,
  UseInClassSection,
  VocabularySection,
  WritingSection,
} from "./engine/Sections";
import { stopAudio, warmVoices, type AudioMap } from "./engine/speech";
import { completeSection, isModuleComplete, recordQuiz, saveDraft, startModule, visitSection } from "./progress/model";
import type { ShareSession } from "./progress/server-adapter";
import ProgressNotice from "./progress/ProgressNotice";
import { useStudyProgress } from "./progress/useProgress";

export type ModulePlayerProps = {
  module: Module;
  session?: ShareSession | null;
  level: Pick<LevelMeta, "id" | "code" | "name" | "color" | "mascot" | "support">;
  objectives: { id: string; topic: string; isNew: boolean }[];
  previous: ModuleSummary | null;
  next: ModuleSummary | null;
  related: { path: string; label: string }[];
  audio?: AudioMap;
  nextLocked: boolean;
};

const hashToSection = Object.fromEntries(Object.entries(sectionHashes).map(([key, hash]) => [hash, key as SectionKey]));

export default function ModulePlayer({ module, level, objectives, previous, next, related, audio, nextLocked, session }: ModulePlayerProps) {
  const { locale } = useI18n();
  const t = copyFor(locale);
  const labels = sectionLabels[locale === "en" ? "en" : "es"];
  const { state, ready, update, syncStatus, retry } = useStudyProgress(session);
  const [section, setSection] = useState<SectionKey>("goal");
  const hasEnglish = level.id === "a1" || level.id === "a2" || level.id === "b1";
  const [showEnglish, setShowEnglish] = useState(level.support === "strong");
  const progress = state.modules[module.id];

  useEffect(() => {
    warmVoices();
    return () => stopAudio();
  }, []);

  // Resume where the learner left off, or follow a deep link.
  useEffect(() => {
    if (!ready) return;
    const fromHash = hashToSection[window.location.hash.replace("#", "")];
    const resume = fromHash ?? state.modules[module.id]?.lastSection ?? "goal";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSection(resume);
    update((current) => startModule(current, module.id));
    // Only on first load of this module.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, module.id]);

  const go = useCallback(
    (key: SectionKey) => {
      stopAudio();
      setSection(key);
      update((current) => visitSection(current, module.id, key));
      window.history.replaceState(null, "", `#${sectionHashes[key]}`);
      document.getElementById("ae-stage")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    },
    [module.id, update],
  );

  const index = SECTION_ORDER.indexOf(section);
  const doneCount = SECTION_ORDER.filter((key) => progress?.sections[key]).length;
  const complete = isModuleComplete(progress);
  const pending = SECTION_ORDER.filter((key) => key !== "complete" && !progress?.sections[key]);

  const finishSection = () => {
    // The quiz counts only when it has been taken; its result marks it done.
    if (section !== "quiz" || progress?.quiz) update((current) => completeSection(current, module.id, section));
    const following = SECTION_ORDER[index + 1];
    if (following) go(following);
  };

  const ctx: EngineContext = useMemo(() => ({ t, audio, showEnglish: hasEnglish && showEnglish }), [t, audio, showEnglish, hasEnglish]);
  const onQuizFinish = useCallback((score: number, total: number) => update((current) => recordQuiz(current, module.id, score, total)), [module.id, update]);
  const onDraft = useCallback((text: string) => update((current) => saveDraft(current, module.id, text)), [module.id, update]);

  const style = { "--ae-level": level.color } as CSSProperties;
  const levelHref = `/autoestudio/${level.id}`;

  return (
    <div className="ae-shell ae-module" style={style}>
      <header className="ae-topbar">
        <Link href="/" className="ae-brand" aria-label="SPANISHCUE">
          <SpanishCueBrand variant="compact" context={t.product.toUpperCase()} />
        </Link>
        <nav aria-label="Breadcrumb" className="ae-crumbs">
          <Link href="/autoestudio">{t.product}</Link>
          <span aria-hidden="true">›</span>
          <Link href={levelHref}>{level.code}</Link>
          <span aria-hidden="true">›</span>
          <b>
            {t.week} {module.week}
          </b>
        </nav>
        {hasEnglish && (
          <button type="button" className="ae-toggle" aria-pressed={showEnglish} onClick={() => setShowEnglish((value) => !value)}>
            EN {showEnglish ? "✓" : ""}
          </button>
        )}
      </header>

      <section className="ae-hero">
        <div className="ae-hero-copy">
          <p className="ae-kicker">
            <span className="ae-level-pill">{level.code}</span> {module.kind === "checkpoint" ? `★ ${t.checkpoint}` : `${t.week} ${module.week}`} · {module.stop.place}, {module.stop.country}
          </p>
          <h1>{module.title}</h1>
          <p className="ae-hero-sub">
            <Rich text={module.subtitle} />
          </p>
          <div className="ae-meta">
            <span>⏱ {module.minutes} {t.minutes}</span>
            <span>
              {doneCount}/13 {t.sectionsDone}
            </span>
            {progress?.quiz && (
              <span>
                ? {progress.quiz.best}/{progress.quiz.total}
              </span>
            )}
            {complete && <span className="ae-done-pill">✓ {t.completed}</span>}
          </div>
        </div>
        <div className="ae-hero-art" aria-hidden="true">
          <img src={level.mascot} alt="" width="900" height="1350" />
        </div>
        <div className="ae-road" aria-hidden="true">
          {SECTION_ORDER.map((key, position) => (
            <i key={key} className={`${progress?.sections[key] ? "done" : ""} ${key === section ? "here" : ""}`} style={{ left: `${(position / 12) * 100}%` }} />
          ))}
        </div>
      </section>

      <div className="ae-layout">
        <nav className="ae-stations" aria-label={t.weekRoute}>
          <p>{t.weekRoute}</p>
          <ol>
            {SECTION_ORDER.map((key, position) => (
              <li key={key}>
                <button type="button" className={`${key === section ? "current" : ""} ${progress?.sections[key] ? "done" : ""}`} aria-current={key === section ? "step" : undefined} onClick={() => go(key)}>
                  <i>{progress?.sections[key] ? "✓" : String(position + 1).padStart(2, "0")}</i>
                  <span>{labels[key]}</span>
                </button>
              </li>
            ))}
          </ol>
          <ProgressNotice status={syncStatus} localText={t.progressLocal} onRetry={retry} />
        </nav>

        <main className="ae-stage" id="ae-stage" tabIndex={-1}>
          <header className="ae-stage-head">
            <span aria-hidden="true">{sectionIcons[section]}</span>
            <div>
              <small>
                {String(index + 1).padStart(2, "0")} / 13
              </small>
              <h2>{labels[section]}</h2>
            </div>
            <figure className="ae-coach" aria-hidden="true">
              <figcaption>{sectionCoach[locale === "en" ? "en" : "es"][section]}</figcaption>
              <img key={section} src={sectionMascots[section]} alt="" width="600" height="1350" />
            </figure>
          </header>

          <div className="ae-stage-body">
            {section === "goal" && <GoalSection module={module} objectives={objectives} ctx={ctx} levelColor={level.color} />}
            {section === "theory" && <TheorySection theory={module.theory} ctx={ctx} />}
            {section === "grammar" && <PracticeSection intro={module.grammar.intro} exercises={module.grammar.exercises} ctx={ctx} />}
            {section === "vocabulary" && <VocabularySection vocabulary={module.vocabulary} ctx={ctx} />}
            {section === "pronunciation" && <PronunciationSection pronunciation={module.pronunciation} ctx={ctx} />}
            {section === "listening" && <ListeningSection listening={module.listening} ctx={ctx} />}
            {section === "reading" && <ReadingSection reading={module.reading} ctx={ctx} />}
            {section === "practice" && <PracticeSection intro={module.practice.intro} exercises={module.practice.exercises} ctx={ctx} />}
            {section === "writing" && <WritingSection writing={module.writing} ctx={ctx} draft={progress?.writingDraft ?? ""} onDraft={onDraft} />}
            {section === "speaking" && <SpeakingSection speaking={module.speaking} ctx={ctx} />}
            {section === "useInClass" && <UseInClassSection use={module.useInClass} ctx={ctx} title={`${level.code} · ${t.week} ${module.week} · ${module.title}`} />}
            {section === "quiz" && <QuizSection items={module.quiz.items} ctx={ctx} onFinish={onQuizFinish} previous={progress?.quiz} />}
            {section === "complete" && (
              <div className="ae-complete">
                <div className={`ae-complete-banner ${complete ? "is-done" : ""}`}>
                  <img src="/brand/mascot/standing.webp" alt="" width="900" height="1350" />
                  <div>
                    <h3>{complete ? t.moduleComplete : t.finishToComplete}</h3>
                    {!complete && pending.length > 0 && (
                      <p>
                        {t.pending}:{" "}
                        {pending.map((key, position) => (
                          <span key={key}>
                            <button type="button" className="ae-link" onClick={() => go(key)}>
                              {labels[key]}
                            </button>
                            {position < pending.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>
                    )}
                    {progress?.quiz && (
                      <p>
                        {t.quizScore}: <b>{progress.quiz.best}/{progress.quiz.total}</b>
                      </p>
                    )}
                  </div>
                </div>
                <div className="ae-complete-grid">
                  <article>
                    <h4>{t.canNow}</h4>
                    <ul>
                      {module.complete.canNow.map((line) => (
                        <li key={line}>
                          ✓ <Rich text={line} />
                        </li>
                      ))}
                    </ul>
                  </article>
                  <article>
                    <h4>{t.toReview}</h4>
                    <ul>
                      {module.complete.review.map((line) => (
                        <li key={line}>
                          ↻ <Rich text={line} />
                        </li>
                      ))}
                    </ul>
                  </article>
                  <article className="ae-next-card">
                    <h4>{t.nextUp}</h4>
                    {next ? (
                      <>
                        <p>
                          <b>
                            {next.level.toUpperCase()} · {next.kind === "checkpoint" ? t.checkpoint : `${t.week} ${next.week}`}
                          </b>
                          <br />
                          {next.title}
                        </p>
                        <small>{next.canDo}</small>
                        <Link className="ae-primary" href={nextLocked ? `/acceso?returnTo=${encodeURIComponent(`/autoestudio/${next.level}/${next.slug}`)}` : `/autoestudio/${next.level}/${next.slug}`}>
                          {nextLocked ? `🔒 ${t.unlock}` : `${t.continue} →`}
                        </Link>
                      </>
                    ) : (
                      <Link className="ae-primary" href="/autoestudio">
                        {t.allLevels}
                      </Link>
                    )}
                  </article>
                </div>
                {related.length > 0 && (
                  <div className="ae-related">
                    <h4>{t.related}</h4>
                    <ul>
                      {related.map((item) => (
                        <li key={item.path}>
                          <Link href={item.path}>↗ {item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          <footer className="ae-stage-foot">
            {index > 0 ? (
              <button type="button" className="ae-ghost" onClick={() => go(SECTION_ORDER[index - 1])}>
                ← {labels[SECTION_ORDER[index - 1]]}
              </button>
            ) : previous ? (
              <Link className="ae-ghost" href={`/autoestudio/${previous.level}/${previous.slug}`}>
                ← {t.week} {previous.week}
              </Link>
            ) : (
              <span />
            )}
            {section !== "complete" ? (
              <button type="button" className="ae-primary" onClick={finishSection}>
                {progress?.sections[section] ? `${t.next}: ${labels[SECTION_ORDER[index + 1]]}` : index === SECTION_ORDER.length - 2 ? t.markDoneLast : t.markDone} →
              </button>
            ) : (
              <Link className="ae-ghost" href={levelHref}>
                {t.backToLevel}
              </Link>
            )}
          </footer>
        </main>
      </div>
    </div>
  );
}
