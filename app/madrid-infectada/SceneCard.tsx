'use client';

// Madrid infectada · what happens at a white circle. The card beside the
// world (below it on a phone) holds the scene: the situation, the whole
// dialogue (read aloud by the browser on request, line by line) and at most
// one question that checks real comprehension. «TU TURNO →» opens the
// survival terminal: exactly two open questions, one per slide (1/2, 2/2),
// with no suggested answers. Finishing the terminal marks the circle done.
//
// «Con profesor»: the guide lines describe what happens (the student reads
// the shared screen too). «Por mi cuenta»: the terminal adds the recorder and
// a timer, so the student can listen to themself; nothing is graded.
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { Recorder, SpeakTimer } from '../autoestudio/engine/Recorder';
import { copyFor } from '../autoestudio/engine/copy';
import { CAST, spotById } from './story.mjs';
import type { Scene, Text } from './levels.d.mts';
import { canSpeak, speakScene, stopScene } from './speak';

export type Teaching = 'profesor' | 'solo';
const LETTERS = ['A', 'B', 'C'];
const T = copyFor('es');
// How long an answer should run, from A2 on a real one.
const TALK_SECONDS: Record<string, number> = { A0: 15, A1: 25, A2: 60, B1: 90, B2: 120, C1: 120, C2: 150 };
const TALK_HINT: Record<string, string> = { A0: 'Una frase o dos.', A1: 'Tres o cuatro frases.', A2: 'Habla entre 30 segundos y un minuto.', B1: 'Habla un minuto o más y da un ejemplo.', B2: 'Habla al menos un minuto y medio: argumenta y matiza.', C1: 'Desarrolla tu postura unos dos minutos.', C2: 'Defiende tu postura dos minutos o más, con matices.' };

/** Spanish first; English underneath when the text has it (A0, A1 words). */
export function Bi({ t, as: Tag = 'span', className }: { t: Text; as?: 'span' | 'p' | 'b' | 'h2'; className?: string }): ReactNode {
  if (typeof t === 'string') return <Tag className={className}>{t}</Tag>;
  return <Tag className={className}>{t.es}<small className="mi-en" lang="en">{t.en}</small></Tag>;
}
const plain = (t: Text) => (typeof t === 'string' ? t : t.es);

export function speakerOf(who: string) {
  if (who === 'yo') return { name: 'Tú', gender: null as 'f' | 'm' | null, me: true };
  if (who.startsWith('*')) return { name: who.slice(1), gender: null, me: false };
  const member = CAST[who];
  return { name: member?.name ?? who, gender: (member?.gender ?? null) as 'f' | 'm' | null, me: false };
}

type Props = {
  id: string;
  zoneName: string;
  scene: Scene;
  level: string;
  teaching: Teaching;
  done: boolean;
  onDone: () => void;
  onClose: () => void;
  onNext: (() => void) | null;
  nextName: string | null;
  /** Madrid Río, the boat: the mission can close from here. */
  onFinale: (() => void) | null;
};

export function SceneCard({ id, zoneName, scene, level, teaching, done, onDone, onClose, onNext, nextName, onFinale }: Props) {
  const main = CAST[spotById(id)?.cast[0] ?? ''];
  const [reading, setReading] = useState<number | null>(null);
  const [pick, setPick] = useState<number | null>(null);
  const [talk, setTalk] = useState(false);
  const [finished, setFinished] = useState(false);
  const body = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement>(null);

  useEffect(() => { body.current?.focus({ preventScroll: true }); }, []);
  useEffect(() => () => stopScene(), []);

  const play = () => {
    if (reading !== null) { stopScene(); setReading(null); return; }
    const lines = scene.dialogue.map(([who, text]) => ({ text: plain(text), gender: speakerOf(who).gender }));
    if (!speakScene(lines, i => setReading(i < 0 ? null : i), level === 'A0' || level === 'A1' ? 0.82 : 0.95)) setReading(null);
  };
  const onKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') { event.preventDefault(); if (!talk) onClose(); return; }
    event.stopPropagation();
    const target = event.target as HTMLElement;
    if (talk || !scene.quiz || pick !== null || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
    const index = /^[1-3]$/.test(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
    if (index >= 0) { event.preventDefault(); setPick(index); }
  };
  const quiz = scene.quiz;
  const right = quiz && pick !== null ? pick === quiz.answer : null;

  return <>
    <section className="mi-card" role="dialog" aria-modal="false" aria-labelledby="mi-card-h" onKeyDown={onKey} onKeyUp={e => e.stopPropagation()} data-scene={id} data-level={level}>
      <header className="mi-card-head">
        <p><span>{zoneName}</span><em>{main ? `${main.full} · ${main.role}` : ''}</em></p>
        <button type="button" className="mi-x" onClick={onClose} aria-label="Cerrar y seguir explorando">×</button>
      </header>
      <div className="mi-card-body" ref={body} tabIndex={-1}>
        {teaching === 'profesor' && <p className="mi-guide">Tú lees la situación. Tu alumno lee las líneas de «Tú»; las demás las leéis juntos o con la voz del navegador.</p>}
        <h2 id="mi-card-h" className="mi-h"><Bi t={scene.title} /></h2>
        <Bi t={scene.line} as="p" className="mi-line" />
        <div className="mi-dialogue-head">
          <span>Diálogo</span>
          {canSpeak() && <button type="button" className="mi-link" onClick={play} aria-pressed={reading !== null}>{reading !== null ? '■ Parar' : '▶ Escuchar la escena'} <small>(voz del navegador)</small></button>}
        </div>
        <ol className="mi-dialogue">
          {scene.dialogue.map(([who, text], i) => {
            const s = speakerOf(who);
            return <li key={i} className={`${s.me ? 'is-me' : ''}${reading === i ? ' is-reading' : ''}`}><b>{s.name}</b><Bi t={text} /></li>;
          })}
        </ol>
        {quiz && <section className="mi-quiz" aria-labelledby="mi-quiz-h">
          <h3 id="mi-quiz-h">¿Lo has entendido?</h3>
          <Bi t={quiz.q} as="p" className="mi-quiz-q" />
          <ol className="mi-options">{quiz.options.map((o, i) => <li key={i}>
            <button type="button" onClick={() => setPick(i)} disabled={pick !== null}
              className={pick === null ? undefined : i === quiz.answer ? 'is-right' : i === pick ? 'is-wrong' : 'is-off'}
              aria-pressed={pick === i}><kbd>{LETTERS[i]}</kbd><Bi t={o} /></button>
          </li>)}</ol>
          {pick !== null && <div className="mi-why" role="status">
            <b>{right ? '¡Exacto!' : 'No exactamente.'}</b> <Bi t={quiz.why} />
            {!right && <button type="button" className="mi-link" onClick={() => setPick(null)}>Intentar otra vez</button>}
          </div>}
        </section>}
        <details className="mi-words" open={level === 'A0' || level === 'A1'}>
          <summary>Palabras de la escena</summary>
          <ul>{scene.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>
        {(done || finished) && <div className="mi-after" role="status">
          <p><b>Escena completada.</b> {nextName ? <>Te queda <b>{nextName}</b>.</> : 'Has hecho todas las escenas de este nivel.'}</p>
          <div className="mi-row">
            {onFinale && <button type="button" className="mi-primary" onClick={onFinale}>Subir a la barca →</button>}
            {onNext && <button type="button" className={onFinale ? 'mi-secondary' : 'mi-primary'} onClick={onNext}>Siguiente escena →</button>}
            <button type="button" className="mi-secondary" onClick={onClose}>Seguir explorando</button>
          </div>
        </div>}
      </div>
      <footer className="mi-card-foot">
        <button type="button" className="mi-secondary" onClick={onClose}>Volver a Madrid <kbd>Esc</kbd></button>
        <button type="button" ref={opener} className="mi-turn" onClick={() => { stopScene(); setReading(null); setTalk(true); }}>{done || finished ? 'TU TURNO otra vez →' : 'TU TURNO →'}</button>
      </footer>
    </section>
    {talk && <TalkTerminal level={level} teaching={teaching} questions={scene.talk} who={main?.name ?? ''}
      onClose={() => { setTalk(false); window.setTimeout(() => opener.current?.focus(), 0); }}
      onFinish={() => { setTalk(false); setFinished(true); onDone(); }} />}
  </>;
}

/** The survival terminal: two open questions, one per slide. */
function TalkTerminal({ level, teaching, questions, who, onClose, onFinish }: { level: string; teaching: Teaching; questions: [Text, Text]; who: string; onClose: () => void; onFinish: () => void }) {
  const [at, setAt] = useState(0);
  const [dir, setDir] = useState<'next' | 'back'>('next');
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => { panel.current?.focus({ preventScroll: true }); }, [at]);
  const go = (i: number) => { setDir(i > at ? 'next' : 'back'); setAt(i); };
  const onKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    event.stopPropagation();
    if (event.key === 'Escape') { event.preventDefault(); onClose(); }
    else if (event.key === 'ArrowRight' && at < 1) { event.preventDefault(); go(1); }
    else if (event.key === 'ArrowLeft' && at > 0) { event.preventDefault(); go(0); }
  };
  return <div className="mi-terminal-wrap" onKeyDown={onKey} onKeyUp={e => e.stopPropagation()}>
    <section className="mi-terminal" role="dialog" aria-modal="true" aria-labelledby="mi-term-h">
      <header className="mi-term-head">
        <span className="mi-term-led" aria-hidden="true" />
        <p id="mi-term-h">TERMINAL DE SUPERVIVENCIA · CANAL SEGURO</p>
        <span className="mi-term-count" aria-label={`Pregunta ${at + 1} de 2`}>{at + 1}/2</span>
        <button type="button" className="mi-x" onClick={onClose} aria-label="Cerrar el terminal">×</button>
      </header>
      <div className="mi-term-body" ref={panel} tabIndex={-1} aria-live="polite">
        <p className="mi-term-from">{teaching === 'profesor' ? 'Tu alumno responde en voz alta; tú escuchas y preguntas más.' : `Mensaje entrante${who ? ` · ${who} quiere saber` : ''}`}</p>
        <div key={at} className={`mi-term-q is-${dir}`}>
          <Bi t={questions[at]} as="p" />
        </div>
        <p className="mi-term-hint">{TALK_HINT[level] ?? ''}</p>
        {teaching === 'solo' && <div className="mi-term-tools"><Recorder t={T} /><SpeakTimer seconds={TALK_SECONDS[level] ?? 60} t={T} /></div>}
      </div>
      <footer className="mi-term-foot">
        <button type="button" className="mi-term-btn" disabled={at === 0} onClick={() => go(0)}>← Anterior</button>
        <span className="mi-term-dots" aria-hidden="true"><i className={at === 0 ? 'is-on' : undefined} /><i className={at === 1 ? 'is-on' : undefined} /></span>
        {at === 0
          ? <button type="button" className="mi-term-btn is-main" onClick={() => go(1)}>Siguiente →</button>
          : <button type="button" className="mi-term-btn is-main" onClick={onFinish}>Terminar ✓</button>}
      </footer>
    </section>
  </div>;
}
