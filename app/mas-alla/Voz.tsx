'use client';

// Más allá · the card of a voice: someone you meet on the way (or a place
// that stops you). What they say, and three questions about your own life to
// talk for a while. Lighter than an encounter: no dialogue, no form.
import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { Recorder, SpeakTimer } from '../autoestudio/engine/Recorder';
import { copyFor } from '../autoestudio/engine/copy';
import { zoneById } from './story.mjs';
import { voiceById, type VoiceText } from './voces.mjs';
import { Bi } from './Pregunta';
import type { Teaching } from './Encuentro';

const T = copyFor('es');
const KIND_LABEL: Record<string, string> = { angel: 'Ángel', demon: 'Demonio', soul: 'Alma', place: 'Lugar' };
const TALK_SECONDS: Record<string, number> = { A0: 15, A1: 25, A2: 45, B1: 60, B2: 90, C1: 90, C2: 120 };

type Props = { id: string; text: VoiceText; level: string; teaching: Teaching; done: boolean; onDone: () => void; onClose: () => void };

export function Voz({ id, text, level, teaching, done, onDone, onClose }: Props) {
  const voice = voiceById(id)!;
  const zone = zoneById(voice.zone);
  const body = useRef<HTMLDivElement>(null);
  const en = level === 'A0';
  useEffect(() => { body.current?.focus({ preventScroll: true }); }, []);
  const onKey = (event: ReactKeyboardEvent<HTMLElement>) => {
    event.stopPropagation();
    if (event.key === 'Escape') { event.preventDefault(); onClose(); }
  };
  const place = voice.kind === 'place';
  return <section className={`ma-card ma-voz is-${voice.world}`} role="dialog" aria-modal="false" aria-labelledby="ma-voz-h" onKeyDown={onKey} onKeyUp={e => e.stopPropagation()} data-voice={id} data-level={level}>
    <header className="ma-card-head">
      <p><span>{zone?.name ?? 'El Umbral'}</span><em>{KIND_LABEL[voice.kind]} · {voice.role.es}</em></p>
      <button type="button" className="ma-x" onClick={onClose} aria-label="Cerrar y seguir explorando">×</button>
    </header>
    <div className="ma-card-body" ref={body} tabIndex={-1}>
      <h2 id="ma-voz-h" className="ma-h">{voice.name}{en && <small className="ma-en" lang="en">{voice.role.en}</small>}</h2>
      <Bi t={text.line} as="p" className={place ? 'ma-line' : 'ma-voz-line'} />
      <p className="ma-voz-kicker">{teaching === 'profesor' ? 'Tu alumno elige una pregunta, o las tres, y responde en voz alta.' : place ? 'Este lugar te pregunta:' : `${voice.name} te pregunta:`}</p>
      <ol className="ma-voz-qs">
        {text.qs.map((q, i) => <li key={i}><Bi t={q} /></li>)}
      </ol>
      {teaching === 'solo' && <div className="ma-tools"><Recorder t={T} /><SpeakTimer seconds={TALK_SECONDS[level] ?? 60} t={T} /></div>}
    </div>
    <footer className="ma-card-foot">
      <button type="button" className="ma-secondary" onClick={onClose}>Seguir explorando</button>
      <button type="button" className="ma-turn" onClick={() => { onDone(); onClose(); }}>{done ? 'Cerrar ✓' : 'Ya hablamos ✓'}</button>
    </footer>
  </section>;
}
