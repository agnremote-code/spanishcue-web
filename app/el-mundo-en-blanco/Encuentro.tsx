'use client';

// El mundo en blanco · what happens at a brush circle. The card beside the
// world (below it on a phone) is a sheet of paper with the encounter: the
// situation and a brief dialogue (read aloud by the browser on request).
// «Ir directo a la pregunta» jumps over it. Then the ONE deep question fills
// the page: three slips of paper, none of them right or wrong; the being
// answers whatever you choose, never with a verdict. «Más tinta» follows:
// three open questions, one per page, to keep talking. Finishing them closes
// the encounter and the ink of that being comes back to the world.
//
// «Con profesor»: the guide lines describe what happens (the student reads
// the shared screen too). «Por mi cuenta»: the recorder and a timer, so the
// student can listen to themself; nothing is graded.
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import { Recorder, SpeakTimer } from '../autoestudio/engine/Recorder';
import { copyFor } from '../autoestudio/engine/copy';
import { canSpeak, speakScene, stopScene } from '../madrid-infectada/speak';
import { CAST, spotById, zoneById } from './story.mjs';
import type { Scene, Text } from './levels.d.mts';

export type Teaching = 'profesor' | 'solo';
type Stage = 'scene' | 'question' | 'deeper';
const T = copyFor('es');
const TALK_SECONDS: Record<string, number> = { A0: 15, A1: 25, A2: 60, B1: 90, B2: 120, C1: 120, C2: 150 };
const TALK_HINT: Record<string, string> = { A0: 'Una frase o dos.', A1: 'Tres o cuatro frases.', A2: 'Habla entre 30 segundos y un minuto.', B1: 'Habla un minuto o más y da un ejemplo de tu vida.', B2: 'Habla al menos un minuto y medio: argumenta y matiza.', C1: 'Desarrolla tu postura unos dos minutos.', C2: 'Defiende tu postura dos minutos o más, con matices.' };
const plain = (t: Text) => (typeof t === 'string' ? t : t.es);

export function Bi({ t, as: Tag = 'span', className }: { t: Text; as?: 'span' | 'p' | 'b' | 'h2' | 'h3' | 'em'; className?: string }): ReactNode {
  if (typeof t === 'string') return <Tag className={className}>{t}</Tag>;
  return <Tag className={className}>{t.es}<small className="mb-en" lang="en">{t.en}</small></Tag>;
}

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
  onSound: (s: 'pick' | 'page') => void;
};

export function Encuentro({ id, scene, level, teaching, done, answer, onAnswer, onDone, onClose, onNext, nextName, onSound }: Props) {
  const spot = spotById(id)!;
  const who = CAST[spot.cast[0]];
  const zone = zoneById(spot.zone)!;
  const [stage, setStage] = useState<Stage>('scene');
  const [reading, setReading] = useState<number | null>(null);
  const [pick, setPick] = useState<number | null>(answer);
  const [at, setAt] = useState(0);
  const [finished, setFinished] = useState(false);
  const body = useRef<HTMLDivElement>(null);
  const qRef = useRef<HTMLDivElement>(null);
  const last = scene.talk.length - 1;
  const tint = { '--tinta': who.ink } as CSSProperties;

  useEffect(() => { (stage === 'scene' ? body : qRef).current?.focus({ preventScroll: true }); }, [stage, at]);
  useEffect(() => () => stopScene(), []);

  const play = () => {
    if (reading !== null) { stopScene(); setReading(null); return; }
    const lines = scene.dialogue.map(([w, text]) => ({ text: plain(text), gender: speaker(w).gender }));
    if (!speakScene(lines, i => setReading(i < 0 ? null : i), level === 'A0' || level === 'A1' ? 0.82 : 0.95)) setReading(null);
  };
  const toQuestion = () => { stopScene(); setReading(null); setStage('question'); onSound('page'); };
  const choose = (i: number) => { setPick(i); onAnswer(i); onSound('pick'); };
  const finish = () => { setFinished(true); setStage('scene'); setAt(0); onDone(); };

  const onKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
    if (event.key === 'Escape') { event.preventDefault(); if (stage === 'scene') onClose(); else setStage(stage === 'deeper' ? 'question' : 'scene'); return; }
    if (stage === 'question' && /^[1-3]$/.test(event.key)) { const i = Number(event.key) - 1; if (i < scene.options.length) { event.preventDefault(); choose(i); } }
    if (stage === 'deeper' && event.key === 'ArrowRight' && at < last) { event.preventDefault(); setAt(at + 1); }
    if (stage === 'deeper' && event.key === 'ArrowLeft' && at > 0) { event.preventDefault(); setAt(at - 1); }
  };
  const echo = pick !== null ? scene.options[pick]?.echo : null;
  const echoBox = useRef<HTMLDivElement>(null);
  // On a short screen the answer can fall below the fold: bring it into view.
  useEffect(() => { if (echo) echoBox.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, [echo]);

  return <>
    {stage === 'scene' && <section className="mb-card" style={tint} role="dialog" aria-modal="false" aria-labelledby="mb-card-h" onKeyDown={onKey} onKeyUp={e => e.stopPropagation()} data-scene={id} data-level={level}>
      <header className="mb-card-head">
        <p><span>{zone.name}</span><em>{who.full} · {who.role}</em></p>
        <button type="button" className="mb-x" onClick={onClose} aria-label="Cerrar y seguir explorando">×</button>
      </header>
      <div className="mb-card-body" ref={body} tabIndex={-1}>
        {teaching === 'profesor' && <p className="mb-guide">Tú lees la situación. Tu alumno lee las líneas de «Tú»; las demás las leen juntos o con la voz del navegador. Después viene una sola pregunta, profunda: no hay respuestas correctas.</p>}
        <h2 id="mb-card-h" className="mb-h"><Bi t={scene.title} /></h2>
        <Bi t={scene.line} as="p" className="mb-line" />
        <div className="mb-dialogue-head">
          <span>Encuentro</span>
          {canSpeak() && <button type="button" className="mb-link" onClick={play} aria-pressed={reading !== null}>{reading !== null ? '■ Parar' : '▶ Escuchar'} <small>(voz del navegador)</small></button>}
        </div>
        <ol className="mb-dialogue">
          {scene.dialogue.map(([w, text], i) => {
            const s = speaker(w);
            return <li key={i} className={`${s.me ? 'is-me' : ''}${reading === i ? ' is-reading' : ''}`}><b>{s.name}</b><Bi t={text} /></li>;
          })}
        </ol>
        <details className="mb-words" open={level === 'A0' || level === 'A1'}>
          <summary>Palabras del encuentro</summary>
          <ul>{scene.words.map(w => <li key={plain(w)}><Bi t={w} /></li>)}</ul>
        </details>
        {(done || finished) && <div className="mb-after" role="status">
          <p><b>La tinta de {who.name} ha vuelto.</b> {pick !== null && <>Tu respuesta: «{plain(scene.options[pick].t)}». </>}{nextName ? <>Te espera <b>{nextName}</b>.</> : 'Has cerrado todos los encuentros de este nivel: vuelve al gran tintero, en el centro del mundo.'}</p>
          <div className="mb-row">
            {onNext && <button type="button" className="mb-primary" onClick={onNext}>Siguiente encuentro →</button>}
            <button type="button" className="mb-secondary" onClick={onClose}>Mirar cómo vuelve el color</button>
          </div>
        </div>}
      </div>
      <footer className="mb-card-foot">
        <button type="button" className="mb-skip" onClick={toQuestion}>Ir directo a la pregunta ⇢</button>
        <button type="button" className="mb-turn" onClick={toQuestion}>{done || finished ? 'La pregunta otra vez →' : 'La pregunta →'}</button>
      </footer>
    </section>}

    {stage !== 'scene' && <div className="mb-q-wrap" style={tint} onKeyDown={onKey} onKeyUp={e => e.stopPropagation()}>
      <section className="mb-q" role="dialog" aria-modal="true" aria-labelledby="mb-q-h" ref={qRef} tabIndex={-1}>
        <header className="mb-q-head">
          <p><b>{who.name}</b> · {zone.name}</p>
          <button type="button" className="mb-x" onClick={() => setStage('scene')} aria-label="Volver al encuentro">×</button>
        </header>
        {stage === 'question' && <>
          <h2 id="mb-q-h" className="mb-q-text"><Bi t={scene.q} /></h2>
          <p className="mb-q-hint">{teaching === 'profesor' ? 'Tu alumno piensa, toma un papel y explica por qué.' : 'Toma un papel. No hay respuestas correctas: solo la tuya.'}</p>
          <div className="mb-slips" role="group" aria-label="Respuestas">
            {scene.options.map((o, i) => <button key={i} type="button" className={`mb-slip${pick === null ? '' : pick === i ? ' is-on' : ' is-off'}`} aria-pressed={pick === i} onClick={() => choose(i)}>
              <i aria-hidden="true">{i + 1}</i><Bi t={o.t} />
            </button>)}
          </div>
          <div className="mb-echo" aria-live="polite" ref={echoBox}>
            {echo ? <p><b>{who.name}:</b> <Bi t={echo} /></p> : <p className="mb-echo-wait">{who.name} espera tu respuesta.</p>}
          </div>
          <footer className="mb-q-foot">
            <button type="button" className="mb-secondary" onClick={() => setStage('scene')}>← Volver al encuentro</button>
            <button type="button" className="mb-primary" disabled={pick === null} onClick={() => { setAt(0); setStage('deeper'); onSound('page'); }}>Más tinta →</button>
          </footer>
        </>}
        {stage === 'deeper' && <>
          <p className="mb-deeper-from">{teaching === 'profesor' ? 'Tu alumno responde en voz alta; tú escuchas y preguntas más.' : `${who.name} quiere saber más.`} <span>{at + 1}/{scene.talk.length}</span></p>
          <div key={at} className="mb-deeper-q"><Bi t={scene.talk[at]} as="p" /></div>
          <p className="mb-q-hint">{TALK_HINT[level] ?? ''}</p>
          {teaching === 'solo' && <div className="mb-tools"><Recorder t={T} /><SpeakTimer seconds={TALK_SECONDS[level] ?? 60} t={T} /></div>}
          <footer className="mb-q-foot">
            <button type="button" className="mb-secondary" onClick={() => (at === 0 ? setStage('question') : setAt(at - 1))}>← Anterior</button>
            {at < last
              ? <button type="button" className="mb-primary" onClick={() => { setAt(at + 1); onSound('page'); }}>Siguiente →</button>
              : <button type="button" className="mb-primary" onClick={finish}>Devolver la tinta ✓</button>}
          </footer>
        </>}
      </section>
    </div>}
  </>;
}
