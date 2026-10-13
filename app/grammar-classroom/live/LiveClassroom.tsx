'use client';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { SpanishCueBrand } from '../../SpanishCueBrand';
import { LiveBlock } from './Blocks';
import { LiveContext, Rich } from './Rich';
import type { LiveLesson } from './types';
import './live.css';

const levelColors: Record<string, string> = { A1: '#30bda2', A2: '#77b94a', B1: '#f4a52d', B2: '#f1754d', C1: '#9d70d4', C2: '#374f76' };
type Position = { stage: number; step: number };

/** Free navigation for a live class: no completion gates, no scores, nothing stored. */
export default function LiveClassroom({ lesson }: { lesson: LiveLesson }) {
  const [at, setAt] = useState<Position>({ stage: 0, step: 0 });
  const [visited, setVisited] = useState<Set<number>>(() => new Set([0]));
  const [english, setEnglish] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [large, setLarge] = useState(false);
  const [all, setAll] = useState(false);
  const headRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const stages = lesson.stages;
  const stage = stages[at.stage];
  const total = useMemo(() => stages.reduce((sum, s) => sum + s.minutes, 0), [stages]);

  const go = useCallback((next: Position) => {
    const stageIndex = Math.max(0, Math.min(stages.length - 1, next.stage));
    const step = Math.max(0, Math.min(stages[stageIndex].steps.length - 1, next.step));
    moved.current = true;
    setAt({ stage: stageIndex, step });
    setVisited(prev => new Set(prev).add(stageIndex));
    document.querySelectorAll<HTMLMediaElement>('[data-live-class] audio').forEach(media => media.pause());
    window.history.replaceState(null, '', `#${stages[stageIndex].id}${step ? `-${step + 1}` : ''}`);
  }, [stages]);

  const forward = useCallback(() => {
    if (!all && at.step < stage.steps.length - 1) go({ stage: at.stage, step: at.step + 1 });
    else if (at.stage < stages.length - 1) go({ stage: at.stage + 1, step: 0 });
  }, [all, at, go, stage.steps.length, stages.length]);
  const back = useCallback(() => {
    if (!all && at.step > 0) go({ stage: at.stage, step: at.step - 1 });
    else if (at.stage > 0) go({ stage: at.stage - 1, step: all ? 0 : stages[at.stage - 1].steps.length - 1 });
  }, [all, at, go, stages]);

  // Deep links (#practica-3) survive a reload in the middle of a class.
  useEffect(() => {
    const match = /^#([a-z-]+?)(?:-(\d+))?$/.exec(window.location.hash);
    const index = match ? stages.findIndex(s => s.id === match[1]) : -1;
    if (index >= 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAt({ stage: index, step: Math.min(Number(match![2] || 1) - 1, stages[index].steps.length - 1) });
      setVisited(prev => new Set(prev).add(index));
    }
  }, [stages]);

  useEffect(() => {
    if (!moved.current) return;
    headRef.current?.focus({ preventScroll: true });
    document.querySelector('.gl-stages [aria-current]')?.scrollIntoView?.({ block: 'nearest', inline: 'center' });
    document.getElementById('gl-stage')?.scrollIntoView?.({ block: 'start', behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [at]);

  // Arrow keys move through the class, except while typing or using a control.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest?.('input, textarea, select, audio, [contenteditable="true"]')) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); forward(); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); back(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [forward, back]);

  const isFirst = at.stage === 0 && (all || at.step === 0);
  const isLast = at.stage === stages.length - 1 && (all || at.step === stage.steps.length - 1);
  const nextLabel = !all && at.step < stage.steps.length - 1 ? stage.steps[at.step + 1].title : stages[at.stage + 1]?.label;
  const style = { '--gl-level': levelColors[lesson.level] || '#075de7' } as CSSProperties;
  const settings = useMemo(() => ({ english, teacher, legend: lesson.legend }), [english, teacher, lesson.legend]);

  return <LiveContext.Provider value={settings}>
    <div className="gl-shell" style={style} data-live-class={lesson.id} data-large-text={large}>
      <header className="gl-topbar">
        <Link href="/" className="gl-brand" aria-label="SPANISHCUE, volver a la biblioteca"><SpanishCueBrand variant="compact" context="GRAMÁTICA EN VIVO" /></Link>
        <nav aria-label="Ruta" className="gl-crumbs"><Link href="/">Biblioteca</Link><span aria-hidden="true">›</span><span>Gramática</span><span aria-hidden="true">›</span><b>{lesson.title}</b></nav>
        <div className="gl-tools" role="group" aria-label="Herramientas de la clase">
          <button type="button" data-tool="english" aria-pressed={english} onClick={() => setEnglish(v => !v)} title="Mostrar traducciones al inglés">EN</button>
          <button type="button" data-tool="teacher" aria-pressed={teacher} onClick={() => setTeacher(v => !v)} title="Sugerencias para el profesor. Ocúltalas al compartir pantalla.">Notas del profesor</button>
          <button type="button" data-tool="large" aria-pressed={large} onClick={() => setLarge(v => !v)} title="Texto más grande para la videollamada">A+</button>
        </div>
      </header>

      <section className="gl-hero">
        <div className="gl-hero-copy">
          <p className="gl-kicker"><span className="gl-level-pill">{lesson.level}</span> {lesson.topic} · Clase en vivo · ≈ {total} min</p>
          <h1>{lesson.title}</h1>
          <p className="gl-hero-sub">{lesson.subtitle}</p>
          {lesson.now && <p className="gl-now-chip"><span aria-hidden="true">📅</span> En esta clase, hoy es <b>{lesson.now}</b>.</p>}
        </div>
        <img className="gl-hero-art" src="/brand/mascot/standing.webp" alt="" width="900" height="1350" />
        <div className="gl-road" aria-hidden="true">{stages.map((s, i) => <i key={s.id} className={`${visited.has(i) ? 'seen' : ''} ${i === at.stage ? 'here' : ''}`} style={{ left: `${(i / (stages.length - 1)) * 100}%` }} />)}</div>
      </section>

      <div className="gl-layout">
        <nav className="gl-stages" aria-label="Etapas de la clase">
          <p>Ruta de la clase</p>
          <ol>{stages.map((s, i) => <li key={s.id}>
            <button type="button" data-stage={s.id} className={`${i === at.stage ? 'current' : ''} ${visited.has(i) && i !== at.stage ? 'seen' : ''}`} aria-current={i === at.stage ? 'step' : undefined} onClick={() => go({ stage: i, step: 0 })}>
              <i>{String(i + 1).padStart(2, '0')}</i><span>{s.label}</span><small>{s.minutes}′</small>
            </button>
          </li>)}</ol>
          <small className="gl-stages-note">Navegación libre: el profesor decide el orden y el ritmo. Usa ← → del teclado.</small>
        </nav>

        <main className="gl-stage" id="gl-stage" tabIndex={-1}>
          <header className="gl-stage-head">
            <span className="gl-stage-icon" aria-hidden="true">{stage.icon}</span>
            <div>
              <small>{String(at.stage + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')} · {stage.label} · {stage.minutes} min</small>
              <h2 ref={headRef} tabIndex={-1}>{stage.title}</h2>
            </div>
            <figure className="gl-coach" aria-hidden="true"><figcaption>{stage.coach}</figcaption><img key={stage.id} src={stage.mascot} alt="" width="600" height="1350" /></figure>
          </header>

          {stage.steps.length > 1 && <div className="gl-steps">
            <div className="gl-step-tabs" role="tablist" aria-label="Pasos de esta etapa">{stage.steps.map((step, i) => <button type="button" role="tab" key={step.title} data-step={i} aria-selected={!all && i === at.step} onClick={() => { setAll(false); go({ stage: at.stage, step: i }); }}><i>{i + 1}</i>{step.title}</button>)}</div>
            <button type="button" className="gl-chip-button" data-show-all aria-pressed={all} onClick={() => setAll(v => !v)}>{all ? 'Un paso por vez' : 'Ver todo'}</button>
          </div>}

          <div className="gl-stage-body">
            {stages.map((s, si) => <section key={s.id} hidden={si !== at.stage} data-stage-panel={s.id}>
              {s.steps.map((step, i) => <div key={step.title} className="gl-step" hidden={!all && i !== at.step} data-step-panel={i}>
                {all && s.steps.length > 1 && <h3 className="gl-step-title"><span>{i + 1}</span><Rich text={step.title} /></h3>}
                {step.blocks.map((block, bi) => <LiveBlock key={bi} block={block} />)}
              </div>)}
            </section>)}
          </div>

          <footer className="gl-stage-foot">
            <button type="button" className="gl-ghost" data-prev disabled={isFirst} onClick={back} aria-label="Anterior">← <span className="gl-long">Anterior</span></button>
            <span className="gl-position">{all || stage.steps.length === 1 ? stage.label : `Paso ${at.step + 1} de ${stage.steps.length}`}</span>
            {isLast ? <Link className="gl-primary" href="/">Volver a la biblioteca</Link> : <button type="button" className="gl-primary" data-next onClick={forward}><span className="gl-long">{nextLabel}</span><span className="gl-short">Siguiente</span> →</button>}
          </footer>
        </main>
      </div>
    </div>
  </LiveContext.Provider>;
}
