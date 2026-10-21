'use client';

// Mundo 3D · the conversation at a spot: the situation and what the
// character says, a small decision, something unexpected, then the real
// conversation (four or more questions with their follow-ups and the help to
// build an answer) and a close with what to do next. The world stays visible
// beside the card (desktop) or above it (phone).
//
// «Con profesor»: every question is listed, help and follow-ups stay hidden
// until the teacher shows them, and the guide lines describe what happens.
// «Por mi cuenta»: one question at a time, with the recorder and the timer of
// Autoestudio (the student listens to themself; nothing is graded) and a short
// self-check. There is no speech recognition and no automatic correction.
import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { Recorder, SpeakTimer } from '../autoestudio/engine/Recorder';
import { copyFor } from '../autoestudio/engine/copy';
import { speakLines, stopSpeaking, voiceSupported } from '../noche-abierta/voice';
import type { Bi, SpotContent, WorldLevel } from './types';
import { FRAMES, SELF_CHECK, TALK_SECONDS } from './frames';

export type Teaching = 'profesor' | 'solo';
const STEPS = ['Situación', 'Decide', 'Sorpresa', 'Conversa', 'Cierre'] as const;
const LETTERS = ['A', 'B', 'C'];
const T = copyFor('es');

/** Spanish first; the English line shows when translation is on. */
export function Two({ t, en, as: Tag = 'span', className }: { t: Bi; en: boolean; as?: 'span' | 'p' | 'b' | 'h2' | 'h3' | 'li'; className?: string }): ReactNode {
  return <Tag className={className}>{t.es}{en && <small className="mw-en" lang="en">{t.en}</small>}</Tag>;
}

type Props = {
  spot: SpotContent;
  regionName: Bi;
  level: WorldLevel;
  teaching: Teaching;
  voices: boolean;
  done: boolean;
  onDone: () => void;
  onClose: () => void;
  onOther: () => void;
  onNext: (() => void) | null;
  nextName: Bi | null;
  onMap: () => void;
};

export function SpotCard({ spot, regionName, level, teaching, voices, done, onDone, onClose, onOther, onNext, nextName, onMap }: Props) {
  const content = spot.levels[level];
  const [step, setStep] = useState(0);
  const [en, setEn] = useState(level === 'A0' || level === 'A1');
  const [pick, setPick] = useState<number | null>(null);
  const [q, setQ] = useState(0);
  const [help, setHelp] = useState<Record<number, boolean>>((): Record<number, boolean> => level === 'A0' ? { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true } : {});
  const [follow, setFollow] = useState<Record<number, number>>({});
  const [checks, setChecks] = useState<boolean[]>([]);
  const [words, setWords] = useState(level === 'A0');
  const body = useRef<HTMLDivElement>(null);
  const frames = FRAMES[level];

  useEffect(() => { body.current?.scrollTo({ top: 0 }); body.current?.focus({ preventScroll: true }); }, [step]);
  useEffect(() => { if (step === 4 && !done) onDone(); }, [step, done, onDone]);
  // The character's first line, read by the browser's voice when the toggle is on.
  useEffect(() => {
    if (!voices || step !== 0) return;
    speakLines([{ text: content.opener.es }], { level });
    return () => stopSpeaking();
  }, [voices, step, content.opener.es, level]);
  useEffect(() => () => stopSpeaking(), []);

  const onKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') { event.preventDefault(); onClose(); return; }
    event.stopPropagation();
    const target = event.target as HTMLElement;
    if (step !== 1 || pick !== null || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
    const index = /^[1-3]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    if (index >= 0 && index < content.decide.options.length) { event.preventDefault(); setPick(index); }
  };

  const question = content.questions[q];
  const shownFollow = follow[q] ?? 0;
  const guide = useMemo(() => teaching === 'profesor' ? GUIDE[STEPS[step]] : null, [teaching, step]);

  return <section className="mw-card" role="dialog" aria-modal="false" aria-labelledby="mw-card-h" onKeyDown={onKey} onKeyUp={e => e.stopPropagation()} data-step={STEPS[step]} data-level={level}>
    <header className="mw-card-head">
      <p><span>{regionName.es} · {spot.name.es}</span><em>{spot.who.name} · {spot.who.role.es}{en && <small lang="en"> · {spot.who.role.en}</small>}</em></p>
      <div className="mw-card-tools">
        <button type="button" className={en ? 'is-on' : undefined} aria-pressed={en} onClick={() => setEn(v => !v)} title="Traducción al inglés">EN</button>
        <button type="button" className="mw-x" onClick={onClose} aria-label="Cerrar y seguir explorando">×</button>
      </div>
    </header>
    <ol className="mw-steps" aria-label="Pasos">
      {STEPS.map((name, i) => <li key={name}><button type="button" aria-current={i === step ? 'step' : undefined} className={i < step ? 'is-past' : undefined} onClick={() => setStep(i)}>{i + 1}<span>{name}</span></button></li>)}
    </ol>
    <div className="mw-card-body" ref={body} tabIndex={-1} aria-live="polite">
      {guide && <p className="mw-guide">{guide}</p>}

      {step === 0 && <>
        <h2 id="mw-card-h" className="mw-h">{spot.name.es}</h2>
        <Two t={content.scene} en={en} as="p" className="mw-scene" />
        <blockquote className="mw-opener"><b>{spot.who.name}</b><Two t={content.opener} en={en} as="p" />
          {voices && voiceSupported() && <button type="button" className="mw-link" onClick={() => speakLines([{ text: content.opener.es }], { level })}>▶ Escuchar otra vez <small>(voz del navegador)</small></button>}
        </blockquote>
      </>}

      {step === 1 && <>
        <h2 id="mw-card-h" className="mw-h">Decide</h2>
        <Two t={content.decide.ask} en={en} as="p" className="mw-ask" />
        {pick === null ? <>
          <p className="mw-say">Elige una opción y dila en voz alta.</p>
          <ol className="mw-options">{content.decide.options.map((o, i) => <li key={i}><button type="button" onClick={() => setPick(i)}><kbd>{LETTERS[i]}</kbd><Two t={o.say} en={en} /></button></li>)}</ol>
        </> : <div className="mw-said">
          <p className="mw-chosen"><span>Tú</span><Two t={content.decide.options[pick].say} en={en} /></p>
          <Two t={content.decide.options[pick].then} en={en} as="p" className="mw-then" />
          <p className="mw-why">{level === 'A0' ? '¿Por qué? Di una palabra o una frase.' : level === 'A1' ? '¿Por qué elegiste esto? Responde con «porque…».' : '¿Por qué elegiste esta opción y no las otras? Explícalo.'}</p>
          <button type="button" className="mw-link" onClick={() => setPick(null)}>← Elegir otra opción</button>
        </div>}
      </>}

      {step === 2 && <>
        <h2 id="mw-card-h" className="mw-h">¡Sorpresa!</h2>
        <Two t={content.twist} en={en} as="p" className="mw-twist" />
      </>}

      {step === 3 && <>
        <h2 id="mw-card-h" className="mw-h">Conversa</h2>
        {teaching === 'profesor' ? <ol className="mw-qlist">
          {content.questions.map((item, i) => <li key={i} className={i === q ? 'is-now' : undefined}>
            <button type="button" className="mw-q" onClick={() => setQ(i)}><Two t={item.q} en={en} /></button>
            {i === q && <QuestionTools item={item} index={i} en={en} help={help} setHelp={setHelp} shown={shownFollow} setFollow={setFollow} />}
          </li>)}
        </ol> : <div className="mw-one">
          <p className="mw-count">Pregunta {q + 1} de {content.questions.length}</p>
          <Two t={question.q} en={en} as="p" className="mw-q mw-q-big" />
          <QuestionTools item={question} index={q} en={en} help={help} setHelp={setHelp} shown={shownFollow} setFollow={setFollow} />
          <div className="mw-practice">
            <Recorder t={T} />
            <SpeakTimer seconds={TALK_SECONDS[level]} t={T} />
          </div>
          <details className="mw-check">
            <summary>¿Cómo te fue? Revísalo tú</summary>
            <ul>{SELF_CHECK[level].map((c, i) => <li key={i}><label><input type="checkbox" checked={Boolean(checks[i])} onChange={e => setChecks(list => { const next = [...list]; next[i] = e.target.checked; return next; })} /> <Two t={c} en={en} /></label></li>)}</ul>
          </details>
          <div className="mw-row">
            <button type="button" className="mw-secondary" disabled={q === 0} onClick={() => setQ(i => Math.max(0, i - 1))}>← Anterior</button>
            {q < content.questions.length - 1
              ? <button type="button" className="mw-secondary" onClick={() => { setQ(i => i + 1); setChecks([]); }}>Siguiente pregunta →</button>
              : <button type="button" className="mw-primary" onClick={() => setStep(4)}>Terminar →</button>}
          </div>
        </div>}
        <details className="mw-frames" open={level === 'A0' || level === 'A1'}>
          <summary>Para construir tu respuesta</summary>
          <ul>{frames.map((f, i) => <li key={i}><Two t={f} en={en} /></li>)}</ul>
        </details>
      </>}

      {step === 4 && <>
        <h2 id="mw-card-h" className="mw-h">¡Bien hecho!</h2>
        <p className="mw-close">Terminaste <b>{spot.name.es}</b> en {level}. {nextName ? <>El próximo lugar sin hacer es <b>{nextName.es}</b>.</> : 'Ya hiciste todos los lugares de este nivel.'}</p>
        <div className="mw-next">
          <button type="button" className="mw-primary" onClick={onClose}>Seguir explorando <small>Camina por la zona</small></button>
          {onNext && <button type="button" className="mw-secondary" onClick={onNext}>Ir a {nextName?.es} <small>Te lleva al círculo</small></button>}
          <button type="button" className="mw-secondary" onClick={() => { setStep(0); setPick(null); setQ(0); setFollow({}); }}>Repetir este lugar</button>
          <button type="button" className="mw-secondary" onClick={onOther}>Cambiar de actividad <small>Otro lugar al azar</small></button>
          <button type="button" className="mw-secondary" onClick={onMap}>Volver al mapa</button>
        </div>
      </>}

      <details className="mw-words" open={words} onToggle={e => setWords((e.target as HTMLDetailsElement).open)}>
        <summary>Vocabulario · {content.words.length} palabras</summary>
        <ul>{content.words.map(w => <li key={w.es}><b>{w.es}</b><small lang="en">{w.en}</small></li>)}</ul>
      </details>
    </div>
    <footer className="mw-card-foot">
      <button type="button" className="mw-secondary" disabled={step === 0} onClick={() => setStep(s => Math.max(0, s - 1))}>← Atrás</button>
      {step < 4 && <button type="button" className="mw-primary" onClick={() => setStep(s => Math.min(4, s + 1))}>{step === 3 ? 'Cierre →' : 'Continuar →'}</button>}
    </footer>
  </section>;
}

function QuestionTools({ item, index, en, help, setHelp, shown, setFollow }: {
  item: SpotContent['levels']['A1']['questions'][number]; index: number; en: boolean;
  help: Record<number, boolean>; setHelp: (f: (h: Record<number, boolean>) => Record<number, boolean>) => void;
  shown: number; setFollow: (f: (h: Record<number, number>) => Record<number, number>) => void;
}) {
  return <div className="mw-tools">
    {help[index]
      ? <p className="mw-help"><span>Ayuda</span><Two t={item.help} en={en} /></p>
      : <button type="button" className="mw-link" onClick={() => setHelp(h => ({ ...h, [index]: true }))}>💡 Ayuda para responder</button>}
    {shown > 0 && <ul className="mw-follow">{item.follow.slice(0, shown).map((f, i) => <li key={i}><Two t={f} en={en} /></li>)}</ul>}
    {shown < item.follow.length && <button type="button" className="mw-link" onClick={() => setFollow(f => ({ ...f, [index]: shown + 1 }))}>↪ Seguir la conversación</button>}
  </div>;
}

// What the teacher sees above each step: descriptive, because the student
// reads the shared screen too.
const GUIDE: Record<(typeof STEPS)[number], string> = {
  Situación: 'Tú lees la situación en voz alta y tu alumno cuenta qué ve y qué cree que va a pasar.',
  Decide: 'Tu alumno elige una opción, la dice con su voz y explica por qué. Tú preguntas por las otras dos.',
  Sorpresa: 'Algo cambia. Tu alumno reacciona primero; después tú comentas.',
  Conversa: 'Tú lees cada pregunta y tu alumno responde con sus palabras. La ayuda y los seguimientos quedan ocultos hasta que hagan falta.',
  Cierre: 'Tu alumno resume en dos o tres frases lo que pasó y lo que opina. Después eligen el próximo lugar.',
};
