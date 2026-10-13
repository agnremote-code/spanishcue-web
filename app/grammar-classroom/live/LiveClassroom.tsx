'use client';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { SpanishCueBrand } from '../../SpanishCueBrand';
import { LiveBlock } from './Blocks';
import { LiveContext, type Mode } from './Rich';
import { blockId, LessonStoreProvider, progressOf, useStore, useStored, type Position } from './store';
import type { LiveLesson } from './types';
import './live.css';

/** Poses the mascot uses to react to a checked answer. */
const cheer = { ok: { pose: '/brand/mascot/kneeling.webp', line: '¡Bien! Eso es.' }, retry: { pose: '/autoestudio/mascot/noting.webp', line: 'Casi. Lee la pista y prueba otra vez.' } };
const levelColors: Record<string, string> = { A1: '#30bda2', A2: '#77b94a', B1: '#f4a52d', B2: '#f1754d', C1: '#9d70d4', C2: '#374f76' };

/** One class for a live lesson and for self-study: same content, the mode only changes guidance. */
export default function LiveClassroom({ lesson }: { lesson: LiveLesson }) {
  return <LessonStoreProvider lessonId={lesson.id}><Classroom lesson={lesson} /></LessonStoreProvider>;
}

function Classroom({ lesson }: { lesson: LiveLesson }) {
  const store = useStore();
  const [at, setAt] = useState<Position>({ stage: 0, step: 0 });
  const [mode, setMode] = useStored<Mode>('mode', 'teacher');
  const [english, setEnglish] = useStored('english', false);
  const [large, setLarge] = useStored('large', false);
  const [menu, setMenu] = useState(false);
  const [reaction, setReaction] = useState<{ ok: boolean } | null>(null);
  const stageRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const stages = lesson.stages;
  const stage = stages[at.stage];
  const step = stage.steps[at.step];

  // A class always opens on «Entender», at the top: no remembered scroll, no URL fragments.
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    if (window.location.hash) window.history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }, []);

  const go = useCallback((stageIndex: number, stepIndex = 0) => {
    const s = Math.max(0, Math.min(stages.length - 1, stageIndex));
    const p = { stage: s, step: Math.max(0, Math.min(stages[s].steps.length - 1, stepIndex)) };
    moved.current = true;
    setAt(p);
    setMenu(false);
    store.savePosition(p);
    document.querySelectorAll<HTMLMediaElement>('[data-live-class] audio').forEach(media => media.pause());
  }, [stages, store]);

  const forward = useCallback(() => {
    if (at.step < stage.steps.length - 1) go(at.stage, at.step + 1);
    else if (at.stage < stages.length - 1) go(at.stage + 1, 0);
  }, [at, go, stage.steps.length, stages.length]);
  const back = useCallback(() => {
    if (at.step > 0) go(at.stage, at.step - 1);
    else if (at.stage > 0) go(at.stage - 1, stages[at.stage - 1].steps.length - 1);
  }, [at, go, stages]);

  // After moving, bring the top of the step into view below the sticky bars; never jump on first load.
  useEffect(() => {
    if (!moved.current) return;
    headRef.current?.focus({ preventScroll: true });
    const panel = stageRef.current;
    if (!panel) return;
    const offset = (document.querySelector('.gl-topbar')?.getBoundingClientRect().height ?? 0) + (window.matchMedia?.('(max-width: 1020px)').matches ? (document.querySelector('.gl-nav-bar')?.getBoundingClientRect().height ?? 0) : 0) + 12;
    const top = panel.getBoundingClientRect().top;
    if (top < offset || top > window.innerHeight * 0.6) window.scrollTo({ top: window.scrollY + top - offset, behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [at]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest?.('input, textarea, select, audio, [contenteditable="true"], [role="tablist"]')) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); forward(); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); back(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [forward, back]);

  // The mascot answers a checked exercise for a moment, then goes back to its line.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onReact = (event: Event) => {
      setReaction({ ok: Boolean((event as CustomEvent<{ ok: boolean }>).detail?.ok) });
      clearTimeout(timer);
      timer = setTimeout(() => setReaction(null), 2600);
    };
    window.addEventListener('gl-react', onReact);
    return () => { window.removeEventListener('gl-react', onReact); clearTimeout(timer); };
  }, []);

  const progress = useMemo(() => stages.map(s => progressOf(s, store.results)), [stages, store.results]);
  const isFirst = at.stage === 0 && at.step === 0;
  const isLast = at.stage === stages.length - 1 && at.step === stage.steps.length - 1;
  const nextLabel = at.step < stage.steps.length - 1 ? stage.steps[at.step + 1].title : stages[at.stage + 1]?.label;
  const mood = reaction ? (reaction.ok ? cheer.ok : cheer.retry) : null;
  const coach = { pose: mood?.pose ?? step.mascot ?? stage.mascot, line: mood?.line ?? step.coach ?? stage.coach, mood: reaction ? (reaction.ok ? 'ok' : 'retry') : 'idle' };
  const style = { '--gl-level': levelColors[lesson.level] || '#075de7' } as CSSProperties;
  const settings = useMemo(() => ({ english, mode, legend: lesson.legend, optionNotes: lesson.optionNotes ?? {}, go }), [english, mode, lesson.legend, lesson.optionNotes, go]);
  const hasEnglish = useMemo(() => JSON.stringify(lesson).includes('"en":'), [lesson]);
  const resume = store.resume && (store.resume.stage !== at.stage || store.resume.step !== at.step) ? store.resume : undefined;

  const nav = <nav className={`gl-stages ${menu ? 'is-open' : ''}`} id="gl-stages" aria-label="Secciones de la clase">
    <ol>{stages.map((s, i) => {
      const p = progress[i];
      const complete = p.total > 0 && p.done === p.total;
      return <li key={s.id} className={i === at.stage ? 'is-current' : ''}>
        <button type="button" data-stage={s.id} aria-current={i === at.stage ? 'step' : undefined} onClick={() => go(i, 0)}>
          <i className={complete ? 'is-complete' : ''}>{complete ? '✓' : String(i + 1).padStart(2, '0')}</i>
          <span>{s.label}</span>
          {p.total > 0 && <small data-progress={`${p.done}/${p.total}`} aria-label={`${p.done} de ${p.total} actividades`}>{p.done}/{p.total}</small>}
        </button>
        {p.total > 0 && <span className="gl-stage-meter" aria-hidden="true"><span style={{ width: `${(p.done / p.total) * 100}%` }} /></span>}
        {i === at.stage && s.steps.length > 1 && <ol className="gl-substeps">{s.steps.map((st, j) => <li key={st.title}>
          <button type="button" data-step={j} aria-current={j === at.step ? 'true' : undefined} onClick={() => go(i, j)}>{st.title}</button>
        </li>)}</ol>}
      </li>;
    })}</ol>
    <figure className="gl-side-mascot" aria-hidden="true"><img src="/autoestudio/mascot/writing.webp" alt="" width="600" height="1350" /></figure>
  </nav>;

  return <LiveContext.Provider value={settings}>
    <div className="gl-shell" style={style} data-live-class={lesson.id} data-mode={mode} data-large-text={large}>
      <header className="gl-topbar">
        <Link href="/" className="gl-brand" aria-label="SPANISHCUE, volver a la biblioteca"><SpanishCueBrand variant="compact" context="GRAMÁTICA" /></Link>
        <div className="gl-tools">
          <div className="gl-mode" role="radiogroup" aria-label="Cómo usas la clase">
            {([['teacher', 'Con profesor'], ['self', 'Por mi cuenta']] as const).map(([value, label]) => <button type="button" role="radio" key={value} data-mode-option={value} aria-checked={mode === value} onClick={() => setMode(value)}>{label}</button>)}
          </div>
          {hasEnglish && <button type="button" data-tool="english" aria-pressed={english} onClick={() => setEnglish(!english)} title="Mostrar u ocultar la ayuda en inglés">EN</button>}
          <button type="button" data-tool="large" aria-pressed={large} onClick={() => setLarge(!large)} title="Texto más grande">A+</button>
        </div>
      </header>

      <section className="gl-hero">
        <p className="gl-kicker"><span className="gl-level-pill">{lesson.level}</span> Gramática</p>
        <h1>{lesson.title}</h1>
        <p className="gl-hero-sub">{lesson.subtitle}{lesson.now && <> <span className="gl-now">En esta clase, hoy es {lesson.now}.</span></>}</p>
      </section>

      <div className="gl-layout">
        <div className="gl-nav">
          <div className="gl-nav-bar">
            <button type="button" className="gl-nav-toggle" aria-expanded={menu} aria-controls="gl-stages" onClick={() => setMenu(v => !v)}>
              <i>{String(at.stage + 1).padStart(2, '0')}</i><span><b>{stage.label}</b>{stage.steps.length > 1 && <small>{step.title}</small>}</span><em aria-hidden="true">{menu ? '▴' : '▾'}</em>
            </button>
          </div>
          {nav}
        </div>

        <main className="gl-stage" id="gl-stage" ref={stageRef} tabIndex={-1}>
          {resume && <div className="gl-resume" role="status">
            <span>Ya empezaste esta clase. ¿Quieres continuar en <b>{stages[resume.stage].label}</b>{stages[resume.stage].steps.length > 1 ? ` · ${stages[resume.stage].steps[resume.step]?.title}` : ''}?</span>
            <button type="button" className="gl-chip-button" data-resume onClick={() => go(resume.stage, resume.step)}>Continuar donde quedé</button>
          </div>}
          <header className="gl-stage-head">
            <span className="gl-stage-icon" aria-hidden="true">{stage.icon}</span>
            <div>
              <small>{String(at.stage + 1).padStart(2, '0')} · {stage.label}{stage.steps.length > 1 ? ` · ${at.step + 1}/${stage.steps.length}` : ''}</small>
              <h2 ref={headRef} tabIndex={-1}>{stage.steps.length > 1 ? step.title : stage.title}</h2>
            </div>
            <figure className="gl-coach" data-mood={coach.mood} aria-hidden="true"><figcaption>{coach.line}</figcaption><img key={coach.pose} src={coach.pose} alt="" width="600" height="1350" /></figure>
          </header>

          <div className="gl-stage-body">
            {stages.map((s, si) => <section key={s.id} hidden={si !== at.stage} data-stage-panel={s.id}>
              {s.steps.map((st, i) => <div key={st.title} className="gl-step" hidden={i !== at.step || si !== at.stage} data-step-panel={i}>
                {st.blocks.map((block, bi) => <LiveBlock key={bi} block={block} where={{ id: blockId(s, i, bi), stage: si, step: i }} />)}
              </div>)}
            </section>)}
          </div>

          <footer className="gl-stage-foot">
            <button type="button" className="gl-ghost" data-prev disabled={isFirst} onClick={back} aria-label="Anterior">←<span className="gl-long"> Anterior</span></button>
            {isLast ? <Link className="gl-primary" href="/">Volver a la biblioteca</Link> : <button type="button" className="gl-primary" data-next onClick={forward}><span className="gl-long">{nextLabel}</span><span className="gl-short">Siguiente</span> →</button>}
          </footer>
        </main>

        <aside className="gl-rail" data-mood={coach.mood} aria-hidden="true">
          <p className="gl-rail-bubble" key={coach.line}>{coach.line}</p>
          <img key={coach.pose} src={coach.pose} alt="" width="600" height="1350" />
        </aside>
      </div>
    </div>
  </LiveContext.Provider>;
}
