'use client';

// Comprensión auditiva for the 3D games. In this mode every white circle
// opens a listening instead of the conversation, with the same steps as the
// reviewed listening classes: listen twice, multiple choice, choose a
// question and answer it aloud, fill in the gaps, read the transcript.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { GAMES, audioSrc, listeningFor, parseGaps, sameWord } from './games.mjs';
import { loadListenings } from './loaders';
import type { GameId, Listening } from './types';
import './escucha.css';

export type Mode = 'conversacion' | 'escucha';
const LETTERS = ['A', 'B', 'C'];
const STEPS = ['Escuchar', 'Elegir', 'Responder', 'Completar', 'Leer'];

const modeKey = (game: GameId) => `spanishcue:escucha-3d:${game}:modo`;
const doneKey = (game: GameId, level: string) => `spanishcue:escucha-3d:${game}:${level}:hechas`;

function readJson<T>(key: string, fallback: T): T {
  try { const raw = window.localStorage.getItem(key); return raw ? JSON.parse(raw) as T : fallback; } catch { return fallback; }
}
function writeJson(key: string, value: unknown) {
  try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode: the class still works */ }
}

/** Conversation or listening, remembered per game; ?modo=escucha in the URL wins. */
export function useListeningMode(game: GameId): [Mode, (mode: Mode) => void] {
  const [mode, setMode] = useState<Mode>('conversacion');
  useEffect(() => {
    const asked = new URLSearchParams(window.location.search).get('modo');
    const saved = readJson<Mode>(modeKey(game), 'conversacion');
    const next = asked === 'escucha' || asked === 'conversacion' ? asked : saved;
    // Restoring the saved mode after hydration is an external-store sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (next !== 'conversacion') setMode(next);
  }, [game]);
  const change = useCallback((next: Mode) => { setMode(next); writeJson(modeKey(game), next); }, [game]);
  return [mode, change];
}

/** Listenings finished in this game and level. */
export function useListeningDone(game: GameId, level: string): [string[], (id: string) => void, () => void] {
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => {
    // Reading saved progress after hydration is an external-store sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDone(readJson<string[]>(doneKey(game, level), []));
  }, [game, level]);
  const mark = useCallback((id: string) => setDone(current => {
    if (current.includes(id)) return current;
    const next = [...current, id];
    writeJson(doneKey(game, level), next);
    return next;
  }), [game, level]);
  const reset = useCallback(() => { setDone([]); writeJson(doneKey(game, level), []); }, [game, level]);
  return [done, mark, reset];
}

/** A transcript: who says each line (and its English under it on A0). Shared
 * by the listenings and by other 3D tasks with audio (La feria de Villaluz). */
export function Transcript({ lines, speakers, en = false }: { lines: { s: number; text: string; en?: string }[]; speakers: { name: string }[]; en?: boolean }) {
  return <div className="e3-transcript">{lines.map((line, i) => <p key={i}><b>{speakers[line.s]?.name}</b>{line.text}{en && line.en && <small className="e3-en" lang="en">{line.en}</small>}</p>)}</div>;
}

/** The two-way switch shown next to the level picker. */
export function ModeSwitch({ mode, onChange, className }: { mode: Mode; onChange: (mode: Mode) => void; className?: string }) {
  return <div className={`e3-mode${className ? ` ${className}` : ''}`} role="radiogroup" aria-label="Tipo de clase">
    <button type="button" role="radio" aria-checked={mode === 'conversacion'} onClick={() => onChange('conversacion')}>
      <b>Conversación</b><small>Elegir y hablar</small>
    </button>
    <button type="button" role="radio" aria-checked={mode === 'escucha'} onClick={() => onChange('escucha')}>
      <b>Comprensión auditiva</b><small>Escuchar en cada círculo</small>
    </button>
  </div>;
}

/** Small badge for the game HUD while the listening mode is on. */
export function ListeningBadge({ game, done, onList }: { game: GameId; done: string[]; onList?: () => void }) {
  const total = GAMES[game].spots.length;
  const count = GAMES[game].spots.filter(id => done.includes(id)).length;
  return createPortal(<div className="e3-badge" role="status">
    <span className="e3-badge-dot" aria-hidden="true" />
    <span><b>Comprensión auditiva</b><small>{count} de {total} escuchas · acércate a un círculo blanco</small></span>
    {onList && <button type="button" onClick={onList}>Ver todas</button>}
  </div>, document.body);
}

type Props = { game: GameId; level: string; spot: string | null; done: string[]; onDone: (id: string) => void; onClose: () => void; onAudio?: (playing: boolean) => void };

/** The listening that opens at a circle; with spot = null it starts with the list. */
export function ListeningCard({ game, level, spot, done, onDone, onClose, onAudio }: Props) {
  const [items, setItems] = useState<Listening[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const [browsing, setBrowsing] = useState(spot === null);
  // The circle decides the listening once, with the progress of that moment.
  const [doneAtOpen] = useState(done);
  const item = useMemo(() => {
    if (!items) return null;
    if (picked) return items.find(i => i.id === picked) ?? null;
    return browsing ? null : listeningFor(items, spot, doneAtOpen, GAMES[game].ownListening);
  }, [items, picked, browsing, spot, doneAtOpen, game]);

  useEffect(() => {
    let live = true;
    loadListenings(game, level).then(file => { if (live) setItems(file?.items ?? []); }).catch(() => { if (live) setFailed(true); });
    return () => { live = false; };
  }, [game, level]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const target = event.target as HTMLElement | null;
      if (target?.tagName === 'INPUT') { target.blur(); return; }
      event.preventDefault(); event.stopPropagation(); onClose();
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [onClose]);

  const card = useRef<HTMLElement>(null);
  useEffect(() => { card.current?.focus({ preventScroll: true }); }, []);

  // Keys typed in the card never move the character behind it.
  const stopKeys = (event: React.KeyboardEvent) => { if (event.key !== 'Escape') event.stopPropagation(); };

  // On document.body, away from each game's own button styles.
  return createPortal(<div className="e3-backdrop" onKeyDown={stopKeys} onKeyUp={stopKeys}>
    <section ref={card} tabIndex={-1} className="e3-card" role="dialog" aria-modal="true" aria-labelledby="e3-title">
      <button type="button" className="e3-close" onClick={onClose} aria-label="Cerrar y volver al juego">×</button>
      {failed && <p className="e3-empty">No se pudieron cargar las escuchas. Revisa la conexión y vuelve a abrir el círculo.</p>}
      {!failed && !items && <p className="e3-empty" role="status">Preparando la escucha…</p>}
      {items && !item && <ListeningList game={game} level={level} items={items} done={done} onPick={setPicked} />}
      {items && item && <Exercise key={`${level}-${item.id}`} game={game} level={level} item={item} done={done.includes(item.id)} onAudio={onAudio}
        onDone={() => onDone(item.id)} onClose={onClose} onList={() => { setPicked(null); setBrowsing(true); }}
        onOther={items.length > 1 ? () => { const next = items.find(i => i.id !== item.id && !done.includes(i.id)) ?? items[(items.indexOf(item) + 1) % items.length]; setPicked(next.id); } : undefined} />}
    </section>
  </div>, document.body);
}

function ListeningList({ game, level, items, done, onPick }: { game: GameId; level: string; items: Listening[]; done: string[]; onPick: (id: string) => void }) {
  return <div className="e3-list">
    <p className="e3-kicker">{GAMES[game].title} · {level} · Comprensión auditiva</p>
    <h2 id="e3-title">Elige una escucha</h2>
    <p className="e3-lede">En el juego, cada círculo blanco abre la escucha de ese lugar. También puedes abrirla desde aquí.</p>
    <ol>{items.map((item, index) => <li key={item.id}>
      <button type="button" onClick={() => onPick(item.id)} className={done.includes(item.id) ? 'is-done' : undefined}>
        <span className="e3-num">{String(index + 1).padStart(2, '0')}</span>
        <span><b>{item.title}</b><small>{item.place} · {[...new Set(item.speakers.map(s => s.country))].join(', ')}</small></span>
        {done.includes(item.id) && <i aria-label="hecha">✓</i>}
      </button>
    </li>)}</ol>
  </div>;
}

function Exercise({ game, level, item, done, onDone, onClose, onList, onOther, onAudio }: {
  game: GameId; level: string; item: Listening; done: boolean; onDone: () => void; onClose: () => void; onList: () => void; onOther?: () => void; onAudio?: (playing: boolean) => void;
}) {
  const [step, setStep] = useState(0);
  const [listens, setListens] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [length, setLength] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const [picks, setPicks] = useState<(number | null)[]>(() => item.choice.map(() => null));
  const [question, setQuestion] = useState<number | null>(null);
  const [model, setModel] = useState(false);
  const gaps = useMemo(() => parseGaps(item.gaps), [item.gaps]);
  const [typed, setTyped] = useState<string[]>(() => gaps.answers.map(() => ''));
  const [checked, setChecked] = useState(false);
  const [solved, setSolved] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  // A0 in a bilingual game shows the English support under the Spanish.
  const en = Boolean(GAMES[game].bilingualA0 && level === 'A0');
  useEffect(() => { if (audio.current) audio.current.playbackRate = rate; }, [rate]);
  useEffect(() => { if (audio.current) audio.current.volume = volume; }, [volume]);
  useEffect(() => { onAudio?.(playing); }, [playing, onAudio]);
  useEffect(() => () => onAudio?.(false), [onAudio]);

  useEffect(() => { body.current?.scrollTo({ top: 0 }); }, [step]);
  useEffect(() => () => audio.current?.pause(), []);

  const play = () => {
    const el = audio.current;
    if (!el) return;
    if (!el.paused) { el.pause(); return; }
    if (el.ended || (el.duration && el.currentTime >= el.duration - 0.2)) el.currentTime = 0;
    void el.play().catch(() => setAudioError(true));
  };
  const seek = (seconds: number) => { const el = audio.current; if (el) el.currentTime = Math.max(0, Math.min(el.duration || 0, seconds)); };
  const go = (next: number) => { audio.current?.pause(); setStep(next); };

  const score = picks.reduce<number>((total, pick, i) => total + (pick === item.choice[i].answer ? 1 : 0), 0);
  const allPicked = picks.every(pick => pick !== null);
  const gapRight = typed.map((value, i) => sameWord(value, gaps.answers[i]));
  const countries = [...new Set(item.speakers.map(s => s.country))];
  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  const player = <div className={`e3-player${step === 0 ? ' is-big' : ''}`}>
    <audio ref={audio} src={audioSrc(game, level, item.id)} preload="auto"
      onLoadedMetadata={e => { setLength(e.currentTarget.duration || 0); setAudioError(false); e.currentTarget.playbackRate = rate; e.currentTarget.volume = volume; }}
      onTimeUpdate={e => setTime(e.currentTarget.currentTime)}
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
      onEnded={() => { setPlaying(false); setListens(n => n + 1); }}
      onError={() => setAudioError(true)} />
    <button type="button" className="e3-play" onClick={play} disabled={audioError} aria-label={playing ? 'Pausar' : 'Escuchar'}>{playing ? '❚❚' : '▶'}</button>
    <button type="button" className="e3-back5" onClick={() => seek(time - 5)} disabled={!length} aria-label="Volver cinco segundos">−5 s</button>
    <div className="e3-track">
      <input type="range" min={0} max={length || 1} step={0.1} value={Math.min(time, length || 1)} onChange={e => seek(Number(e.target.value))} aria-label="Posición del audio" />
      <span>{fmt(time)} / {length ? fmt(length) : '–:––'}</span>
    </div>
    <div className="e3-tune">
      <label>Velocidad <select value={rate} onChange={e => setRate(Number(e.target.value))}>{[0.75, 0.9, 1, 1.15].map(r => <option key={r} value={r}>{r === 1 ? 'normal' : `${r}×`}</option>)}</select></label>
      <label>Volumen <input type="range" min={0} max={1} step={0.05} value={volume} onChange={e => setVolume(Number(e.target.value))} aria-label="Volumen" /></label>
    </div>
    {audioError && <p className="e3-error">El audio no cargó. <button type="button" onClick={() => { setAudioError(false); audio.current?.load(); }}>Reintentar</button></p>}
  </div>;

  return <>
    <header className="e3-head">
      <p className="e3-kicker">{GAMES[game].title} · {level} · {item.place}</p>
      <h2 id="e3-title">{item.title}</h2>
      <p className="e3-voices">{item.speakers.map(s => <span key={s.voice}><b>{s.name}</b> · {s.country}</span>)}</p>
      <ol className="e3-steps" aria-label="Pasos">{STEPS.map((label, i) => <li key={label} className={i === step ? 'is-now' : i < step ? 'is-past' : undefined}>
        <button type="button" onClick={() => go(i)} aria-current={i === step ? 'step' : undefined}><span>{i + 1}</span>{label}</button>
      </li>)}</ol>
    </header>
    <div className="e3-body" ref={body}>
      {player}

      {step === 0 && <div className="e3-step">
        <p className="e3-context">{item.context}{en && item.contextEn && <small className="e3-en" lang="en">{item.contextEn}</small>}</p>
        <div className="e3-listens" aria-live="polite">
          {[0, 1].map(i => <div key={i} className={listens > i ? 'is-done' : listens === i ? 'is-now' : undefined}>
            <span>{listens > i ? '✓' : i + 1}</span><p><b>Escucha {i + 1}</b><small>{i === 0 ? 'La idea general: ¿quién habla, dónde, qué pasa?' : 'Los detalles: nombres, números, decisiones.'}</small></p>
          </div>)}
        </div>
        <p className="e3-tip">Escucha sin leer. Puedes pausar y volver atrás. Voces de {countries.join(', ')}.</p>
        <div className="e3-actions">
          <button type="button" className="e3-primary" onClick={() => go(1)} disabled={listens < 2}>{listens < 2 ? `Escucha dos veces (${listens}/2)` : 'Ir a las preguntas →'}</button>
          {listens < 2 && <button type="button" className="e3-link" onClick={() => go(1)}>El profe decide: pasar ya</button>}
        </div>
      </div>}

      {step === 1 && <div className="e3-step">
        <h3>Elige la respuesta correcta.</h3>
        <ol className="e3-mc">{item.choice.map((q, qi) => <li key={q.q}>
          <p>{q.q}{en && q.qEn && <small className="e3-en" lang="en">{q.qEn}</small>}</p>
          <div>{q.options.map((option, oi) => {
            const pick = picks[qi];
            const state = pick === null ? '' : oi === q.answer ? ' is-right' : oi === pick ? ' is-wrong' : ' is-off';
            return <button key={option} type="button" className={`e3-option${state}`} disabled={pick !== null}
              onClick={() => setPicks(current => current.map((value, i) => i === qi ? oi : value))}><kbd>{LETTERS[oi]}</kbd>{option}</button>;
          })}</div>
        </li>)}</ol>
        {allPicked && <p className="e3-score" role="status">{score} de {item.choice.length} correctas.{score < item.choice.length ? ' Escucha otra vez la parte que falló.' : ' ¡Muy bien!'}</p>}
        <div className="e3-actions">
          <button type="button" className="e3-secondary" onClick={() => setPicks(item.choice.map(() => null))}>Repetir</button>
          <button type="button" className="e3-primary" onClick={() => go(2)}>Siguiente: responder →</button>
        </div>
      </div>}

      {step === 2 && <div className="e3-step">
        <h3>Elige una pregunta y respóndela en voz alta.</h3>
        <div className="e3-open">{item.open.map((q, i) => <button key={q.q} type="button" aria-pressed={question === i} onClick={() => { setQuestion(i); setModel(false); }}>
          <span>{i + 1}</span>{q.q}{en && q.qEn && <small className="e3-en" lang="en">{q.qEn}</small>}
        </button>)}</div>
        {question !== null && <div className="e3-answer" role="status">
          <p className="e3-say">Ahora tú: responde con dos o tres frases. Usa algo que escuchaste.</p>
          {model ? <p className="e3-model"><small>Una respuesta posible</small>{item.open[question].model}</p>
            : <button type="button" className="e3-link" onClick={() => setModel(true)}>Ver una respuesta posible</button>}
        </div>}
        <div className="e3-actions">
          <button type="button" className="e3-primary" onClick={() => go(3)}>Siguiente: completar →</button>
        </div>
      </div>}

      {step === 3 && <div className="e3-step">
        <h3>Escucha otra vez y completa los espacios.</h3>
        <p className="e3-gaps">{gaps.parts.map((part, i) => <span key={i}>{part}{i < gaps.answers.length && <input
          className={checked ? (gapRight[i] ? 'is-right' : 'is-wrong') : undefined}
          value={solved ? gaps.answers[i] : typed[i]} readOnly={solved}
          size={Math.max(4, gaps.answers[i].length + 1)} aria-label={`Espacio ${i + 1}`} autoComplete="off" spellCheck={false}
          onChange={e => { const value = e.target.value; setChecked(false); setTyped(current => current.map((v, j) => j === i ? value : v)); }}
          onKeyDown={e => { if (e.key === 'Enter') setChecked(true); }} />}</span>)}</p>
        {checked && <p className="e3-score" role="status">{gapRight.filter(Boolean).length} de {gaps.answers.length} bien.{gapRight.every(Boolean) ? ' ¡Perfecto!' : ' Las tildes y las mayúsculas no cuentan.'}</p>}
        <div className="e3-actions">
          <button type="button" className="e3-secondary" onClick={() => setChecked(true)}>Comprobar</button>
          <button type="button" className="e3-secondary" onClick={() => { setSolved(true); setChecked(false); }}>Ver soluciones</button>
          <button type="button" className="e3-primary" onClick={() => go(4)}>Siguiente: leer →</button>
        </div>
      </div>}

      {step === 4 && <div className="e3-step">
        <h3>Lee la transcripción.</h3>
        <p className="e3-tip">Primero en silencio. Después en voz alta, imitando el ritmo de cada voz.</p>
        <Transcript lines={item.lines} speakers={item.speakers} en={en} />
        <dl className="e3-gloss">{item.glossary.map(g => <div key={g.word}><dt>{g.word}</dt><dd>{g.meaning}{en && g.en && <small className="e3-en" lang="en">{g.en}</small>}</dd></div>)}</dl>
        <div className="e3-actions">
          {!done && <button type="button" className="e3-primary" onClick={() => { onDone(); onClose(); }}>Terminar y seguir explorando</button>}
          {done && <button type="button" className="e3-primary" onClick={onClose}>Seguir explorando</button>}
          {onOther && <button type="button" className="e3-secondary" onClick={() => { if (!done) onDone(); onOther(); }}>Otra escucha</button>}
          <button type="button" className="e3-secondary" onClick={onList}>Todas las escuchas</button>
        </div>
      </div>}
    </div>
  </>;
}
