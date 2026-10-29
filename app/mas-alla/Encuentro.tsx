'use client';

// Más allá · what happens at a white circle. The card beside the world
// (below it on a phone) holds the encounter: the situation and a brief
// dialogue (read aloud by the browser on request). «Saltear directo a la
// pregunta» jumps over it. Then the ONE deep question fills the screen, in the
// form of this encounter (Pregunta.tsx); the character answers whatever you
// choose, never with a verdict. «Más hondo» follows: two open questions, one
// per slide, to keep talking. Finishing them closes the encounter.
//
// «Con profesor»: the guide lines describe what happens (the student reads
// the shared screen too). «Por mi cuenta»: the recorder and a timer, so the
// student can listen to themself; nothing is graded.
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { Recorder, SpeakTimer } from '../autoestudio/engine/Recorder';
import { copyFor } from '../autoestudio/engine/copy';
import { canSpeak, speakScene, stopScene } from '../madrid-infectada/speak';
import { CAST, FORMS, spotById, zoneById } from './story.mjs';
import type { Scene, Text } from './levels.d.mts';
import { Bi, Pregunta } from './Pregunta';

export type Teaching = 'profesor' | 'solo';
type Stage = 'scene' | 'question' | 'deeper';
const T = copyFor('es');
const TALK_SECONDS: Record<string, number> = { A0: 15, A1: 25, A2: 60, B1: 90, B2: 120, C1: 120, C2: 150 };
const TALK_HINT: Record<string, string> = { A0: 'Una frase o dos.', A1: 'Tres o cuatro frases.', A2: 'Habla entre 30 segundos y un minuto.', B1: 'Habla un minuto o más y da un ejemplo de tu vida.', B2: 'Habla al menos un minuto y medio: argumenta y matiza.', C1: 'Desarrolla tu postura unos dos minutos.', C2: 'Defiende tu postura dos minutos o más, con matices.' };
const KIND_LABEL: Record<string, string> = { angel: 'Ángel', demon: 'Demonio', soul: 'Alma' };
const plain = (t: Text) => (typeof t === 'string' ? t : t.es);

function speaker(who: string) {
  if (who === 'yo') return { name: 'Tú', gender: null as 'f' | 'm' | null, me: true };
  const m = CAST[who];
  return { name: m?.name ?? who, gender: (m?.gender ?? null) as 'f' | 'm' | null, me: false };
}

type Props = {
  id: string;
  scene: Scene;
  level: string;
  teaching: Teaching;
  done: boolean;
  answer: number | null;
  onAnswer: (index: number) => void;
  onDone: () => void;
  onClose: () => void;
  onNext: (() => void) | null;
  nextName: string | null;
  onSound: (s: 'pick' | 'gong') => void;
};

export function Encuentro({ id, scene, level, teaching, done, answer, onAnswer, onDone, onClose, onNext, nextName, onSound }: Props) {
  const spot = spotById(id)!;
  const who = CAST[spot.cast[0]];
  const zone = zoneById(spot.zone)!;
  const form = FORMS[spot.form];
  const [stage, setStage] = useState<Stage>('scene');
  const [reading, setReading] = useState<number | null>(null);
  const [pick, setPick] = useState<number | null>(answer);
  const [at, setAt] = useState(0);
  const [finished, setFinished] = useState(false);
  const body = useRef<HTMLDivElement>(null);
  const qRef = useRef<HTMLDivElement>(null);

  useEffect(() => { (stage === 'scene' ? body : qRef).current?.focus({ preventScroll: true }); }, [stage, at]);
  useEffect(() => () => stopScene(), []);

  const play = () => {
    if (reading !== null) { stopScene(); setReading(null); return; }
    const lines = scene.dialogue.map(([w, text]) => ({ text: plain(text), gender: speaker(w).gender }));
    if (!speakScene(lines, i => setReading(i < 0 ? null : i), level === 'A0' || level === 'A1' ? 0.82 : 0.95)) setReading(null);
  };
  const toQuestion = () => { stopScene(); setReading(null); setStage('question'); onSound('gong'); };
  const choose = (i: number) => { setPick(i); onAnswer(i); onSound('pick'); };
  const finish = () => { setFinished(true); setStage('scene'); setAt(0); onDone(); };

  const onKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
    if (event.key === 'Escape') { event.preventDefault(); if (stage === 'scene') onClose(); else setStage(stage === 'deeper' ? 'question' : 'scene'); return; }
    if (stage === 'question' && /^[1-5]$/.test(event.key)) { const i = Number(event.key) - 1; if (i < scene.options.length) { event.preventDefault(); choose(i); } }
    if (stage === 'deeper' && event.key === 'ArrowRight' && at < 1) { event.preventDefault(); setAt(1); }
    if (stage === 'deeper' && event.key === 'ArrowLeft' && at > 0) { event.preventDefault(); setAt(0); }
  };
  const echo = pick !== null ? scene.options[pick]?.echo : null;
  const echoBox = useRef<HTMLDivElement>(null);
  // On a short screen the answer can fall below the fold: bring it into view.
  useEffect(() => { if (echo) echoBox.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, [echo]);

  return <>
    {stage === 'scene' && <section className={`ma-card is-${spot.world}`} role="dialog" aria-modal="false" aria-labelledby="ma-card-h" onKeyDown={onKey} onKeyUp={e => e.stopPropagation()} data-scene={id} data-level={level}>
      <header className="ma-card-head">
        <p><span>{zone.name}</span><em>{KIND_LABEL[who.kind]} · {who.full} · {who.role}</em></p>
        <button type="button" className="ma-x" onClick={onClose} aria-label="Cerrar y seguir explorando">×</button>
      </header>
      <div className="ma-card-body" ref={body} tabIndex={-1}>
        {teaching === 'profesor' && <p className="ma-guide">Tú lees la situación. Tu alumno lee las líneas de «Tú»; las demás las leen juntos o con la voz del navegador. Después viene una sola pregunta, profunda: no hay respuestas correctas.</p>}
        <h2 id="ma-card-h" className="ma-h"><Bi t={scene.title} /></h2>
        <Bi t={scene.line} as="p" className="ma-line" />
        <div className="ma-dialogue-head">
          <span>Encuentro</span>
          {canSpeak() && <button type="button" className="ma-link" onClick={play} aria-pressed={reading !== null}>{reading !== null ? '■ Parar' : '▶ Escuchar'} <small>(voz del navegador)</small></button>}
        </div>
        <ol className="ma-dialogue">
          {scene.dialogue.map(([w, text], i) => {
            const s = speaker(w);
            return <li key={i} className={`${s.me ? 'is-me' : ''}${reading === i ? ' is-reading' : ''}`}><b>{s.name}</b><Bi t={text} /></li>;
          })}
        </ol>
        <details className="ma-words" open={level === 'A0' || level === 'A1'}>
          <summary>Palabras del encuentro</summary>
          <ul>{scene.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>
        {(done || finished) && <div className="ma-after" role="status">
          <p><b>Encuentro cerrado.</b> {pick !== null && <>Tu respuesta: «{plain(scene.options[pick].t)}». </>}{nextName ? <>Te espera <b>{nextName}</b>.</> : 'Has cerrado todos los encuentros de este nivel: vuelve al Umbral, al reloj de arena.'}</p>
          <div className="ma-row">
            {onNext && <button type="button" className="ma-primary" onClick={onNext}>Siguiente encuentro →</button>}
            <button type="button" className="ma-secondary" onClick={onClose}>Seguir explorando</button>
          </div>
        </div>}
      </div>
      <footer className="ma-card-foot">
        <button type="button" className="ma-skip" onClick={toQuestion}>Saltear directo a la pregunta ⇢</button>
        <button type="button" className="ma-turn" onClick={toQuestion}>{done || finished ? 'La pregunta otra vez →' : 'La pregunta →'}</button>
      </footer>
    </section>}

    {stage !== 'scene' && <div className={`ma-q-wrap is-${spot.world}`} onKeyDown={onKey} onKeyUp={e => e.stopPropagation()}>
      <section className="ma-q" role="dialog" aria-modal="true" aria-labelledby="ma-q-h" ref={qRef} tabIndex={-1} data-form={spot.form}>
        <header className="ma-q-head">
          <p><b>{who.name}</b> · {KIND_LABEL[who.kind]} · {form.label}</p>
          <button type="button" className="ma-x" onClick={() => setStage('scene')} aria-label="Volver al encuentro">×</button>
        </header>
        {stage === 'question' && <>
          <h2 id="ma-q-h" className="ma-q-text"><Bi t={scene.q} /></h2>
          <p className="ma-q-hint">{teaching === 'profesor' ? `Tu alumno piensa, elige y explica por qué. ${form.hint}` : form.hint}</p>
          <Pregunta form={spot.form} options={scene.options.map(o => o.t)} pick={pick} onPick={choose} poles={scene.poles} />
          <div className="ma-echo" aria-live="polite" ref={echoBox}>
            {echo ? <p><b>{who.name}:</b> <Bi t={echo} /></p> : <p className="ma-echo-wait">No hay respuestas correctas. Solo la tuya.</p>}
          </div>
          <footer className="ma-q-foot">
            <button type="button" className="ma-secondary" onClick={() => setStage('scene')}>← Volver al encuentro</button>
            <button type="button" className="ma-primary" disabled={pick === null} onClick={() => { setAt(0); setStage('deeper'); }}>Más hondo →</button>
          </footer>
        </>}
        {stage === 'deeper' && <>
          <p className="ma-deeper-from">{teaching === 'profesor' ? 'Tu alumno responde en voz alta; tú escuchas y preguntas más.' : `${who.name} quiere saber más.`} <span>{at + 1}/2</span></p>
          <div key={at} className="ma-deeper-q"><Bi t={scene.talk[at]} as="p" /></div>
          <p className="ma-q-hint">{TALK_HINT[level] ?? ''}</p>
          {teaching === 'solo' && <div className="ma-tools"><Recorder t={T} /><SpeakTimer seconds={TALK_SECONDS[level] ?? 60} t={T} /></div>}
          <footer className="ma-q-foot">
            <button type="button" className="ma-secondary" onClick={() => (at === 0 ? setStage('question') : setAt(0))}>← Anterior</button>
            {at === 0
              ? <button type="button" className="ma-primary" onClick={() => setAt(1)}>Siguiente →</button>
              : <button type="button" className="ma-primary" onClick={finish}>Cerrar el encuentro ✓</button>}
          </footer>
        </>}
      </section>
    </div>}
  </>;
}
