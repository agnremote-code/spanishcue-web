'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import AudioDeck from '../../listening-studio/AudioDeck';
import type { Block, ChoiceItem, TalkCard } from './types';
import { English, plain, Rich, useLive, useModeText } from './Rich';
import { useStore, useStored, type Result } from './store';
import { LiveVisual } from './visuals';
import { ConceptArt } from './visuals/art';
import { reviewWriting } from './writing';

/** Where a block lives, so results can link back to it. */
export type Where = { id: string; stage: number; step: number };

/** Lets the mascot react to a checked answer. */
function react(ok: boolean) {
  window.dispatchEvent(new window.CustomEvent('gl-react', { detail: { ok } }));
}

/** Compares typed or built answers without case, accents, punctuation or extra spaces. */
export const normalize = (text: string) => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[¿?¡!.,;:«»"]/g, '').replace(/\s+/g, ' ').trim();

function useRecord(where: Where) {
  const { record } = useStore();
  return (item: number | string, ok: boolean, prompt: string, right: string) => {
    record(`${where.id}:${item}`, { ok, prompt, right, stage: where.stage, step: where.step });
    react(ok);
  };
}

function Card({ kind, title, children, actions }: { kind: string; title?: string; children: ReactNode; actions?: ReactNode }) {
  return <section className={`gl-card gl-${kind}`} data-block={kind}>
    {(title || actions) && <header className="gl-card-head">{title && <h3><Rich text={title} /></h3>}{actions}</header>}
    {children}
  </section>;
}

function Feedback({ ok, children }: { ok: boolean; children: ReactNode }) {
  return <p className={`gl-feedback ${ok ? 'is-ok' : 'is-no'}`} role="status"><b>{ok ? '✓ Correcto.' : 'Todavía no.'}</b> {children}</p>;
}

/** Teacher-only shortcut to show every answer at once. */
function TeacherReveal({ open, set }: { open: boolean; set: (v: boolean) => void }) {
  const { mode } = useLive();
  return mode === 'teacher' ? <button type="button" className="gl-chip-button" data-reveal-all aria-pressed={open} onClick={() => set(!open)}>{open ? 'Ocultar respuestas' : 'Mostrar respuestas'}</button> : null;
}

function Guide({ text }: { text: Extract<Block, { kind: 'guide' }>['text'] }) {
  const { mode } = useLive();
  const line = useModeText(text);
  return line ? <p className="gl-guide" data-guide={mode}><span aria-hidden="true">{mode === 'teacher' ? '🧑‍🏫' : '🎯'}</span><Rich text={line} /></p> : null;
}

/** Choose the right option; a wrong one explains itself and can be retried. */
function ChoiceList({ items, where, title }: { items: ChoiceItem[]; where: Where; title?: string }) {
  const { optionNotes } = useLive();
  const [picked, setPicked] = useStored<Record<number, number>>(`${where.id}:picked`, {});
  const [shown, setShown] = useState(false);
  const save = useRecord(where);
  return <Card kind="choice" title={title} actions={<TeacherReveal open={shown} set={setShown} />}>
    <ol className="gl-exercise-list">{items.map((item, i) => {
      const choice = shown ? item.answer : picked[i];
      const right = choice === item.answer;
      const parts = item.prompt.split('___');
      const wrongNote = choice !== undefined && !right ? optionNotes[item.options[choice]] : undefined;
      return <li key={item.prompt} className="gl-choice-item" data-state={choice === undefined ? 'open' : right ? 'right' : 'wrong'}>
        {item.context && <p className="gl-context">{item.context}</p>}
        <p className="gl-prompt"><Rich text={parts[0]} />{parts.length > 1 && <span className="gl-blank">{choice === undefined ? '_____' : item.options[choice]}</span>}<Rich text={parts.slice(1).join('___')} /></p>
        <English text={item.en} />
        <div className="gl-options" role="group" aria-label={`Opciones ${i + 1}`}>
          {item.options.map((option, o) => <button type="button" key={option} data-option={o} aria-pressed={choice === o} className={choice === o ? (right ? 'is-right' : 'is-wrong') : ''} onClick={() => {
            setShown(false); setPicked(prev => ({ ...prev, [i]: o }));
            save(i, o === item.answer, plain(item.prompt).replace('___', '…'), item.options[item.answer]);
          }}>{option}</button>)}
        </div>
        {choice !== undefined && (right ? <Feedback ok>{item.why}</Feedback> : <Feedback ok={false}>{wrongNote ?? 'Vuelve a leer la frase y prueba otra opción.'}</Feedback>)}
      </li>;
    })}</ol>
  </Card>;
}

function Classify({ block, where }: { block: Extract<Block, { kind: 'classify' }>; where: Where }) {
  const [picked, setPicked] = useStored<Record<number, string>>(`${where.id}:picked`, {});
  const [shown, setShown] = useState(false);
  const save = useRecord(where);
  return <Card kind="classify" title={block.title} actions={<TeacherReveal open={shown} set={setShown} />}>
    <ol className="gl-exercise-list">{block.items.map((item, i) => {
      const choice = shown ? item.answer : picked[i];
      const right = choice === item.answer;
      return <li key={item.text} className="gl-classify-item" data-state={choice === undefined ? 'open' : right ? 'right' : 'wrong'}>
        <p className="gl-prompt"><Rich text={item.text} /></p>
        <div className="gl-options" role="group" aria-label={plain(item.text)}>{block.categories.map(category => <button type="button" key={category.id} data-category={category.id} aria-pressed={choice === category.id} className={`gl-tone-${category.tone} ${choice === category.id ? (right ? 'is-right' : 'is-wrong') : ''}`} onClick={() => {
          setShown(false); setPicked(prev => ({ ...prev, [i]: category.id }));
          save(i, category.id === item.answer, plain(item.text), block.categories.find(c => c.id === item.answer)?.label ?? '');
        }}>{category.label}</button>)}</div>
        {choice !== undefined && <Feedback ok={right}>{right ? item.why : 'Pregúntate: ¿la situación sigue hoy o ya terminó?'}</Feedback>}
      </li>;
    })}</ol>
  </Card>;
}

/** First decide if the sentence is right; if it is not, choose the correction. */
function Fix({ block, where }: { block: Extract<Block, { kind: 'fix' }>; where: Where }) {
  const [state, setState] = useStored<Record<number, { judge?: boolean; pick?: number }>>(`${where.id}:state`, {});
  const save = useRecord(where);
  return <Card kind="fix" title={block.title}>
    <ol className="gl-exercise-list">{block.items.map((item, i) => {
      const s = state[i] ?? {};
      const judged = s.judge !== undefined;
      const judgedRight = judged && s.judge === item.ok;
      const needsFix = judgedRight && !item.ok;
      const fixed = needsFix && s.pick === item.answer;
      const right = item.options?.[item.answer ?? 0] ?? item.sentence;
      const finish = (ok: boolean) => save(i, ok, item.sentence, right);
      return <li key={item.sentence} data-state={judgedRight && (item.ok || fixed) ? 'right' : judged && !judgedRight ? 'wrong' : 'open'}>
        <p className="gl-prompt">«{item.sentence}»</p>
        <div className="gl-options" role="group" aria-label={`¿Es correcta la frase ${i + 1}?`}>
          {([[true, 'Está bien'], [false, 'Tiene un error']] as const).map(([value, label]) => <button type="button" key={label} data-judge={String(value)} aria-pressed={s.judge === value} className={s.judge === value ? (value === item.ok ? 'is-right' : 'is-wrong') : ''} onClick={() => {
            setState(prev => ({ ...prev, [i]: { judge: value } }));
            if (value !== item.ok) finish(false); else if (item.ok) finish(true);
          }}>{label}</button>)}
        </div>
        {judged && !judgedRight && <Feedback ok={false}>{item.ok ? 'Esta frase es correcta. Mira el verbo y la expresión de tiempo otra vez.' : 'Hay un error. Mira qué va después de la expresión de tiempo.'}</Feedback>}
        {judgedRight && item.ok && <Feedback ok>{item.why}</Feedback>}
        {needsFix && <>
          <p className="gl-step-label">¿Cómo se corrige?</p>
          <div className="gl-options gl-options-stack" role="group" aria-label={`Corrección ${i + 1}`}>{item.options?.map((option, o) => <button type="button" key={option} data-fix={o} aria-pressed={s.pick === o} className={s.pick === o ? (o === item.answer ? 'is-right' : 'is-wrong') : ''} onClick={() => { setState(prev => ({ ...prev, [i]: { judge: false, pick: o } })); finish(o === item.answer); }}>{option}</button>)}</div>
          {s.pick !== undefined && <Feedback ok={fixed}>{fixed ? item.why : 'Esa corrección no resuelve el problema. Prueba otra.'}</Feedback>}
        </>}
      </li>;
    })}</ol>
  </Card>;
}

/** A natural conversation with gaps. */
function ChatFill({ block, where }: { block: Extract<Block, { kind: 'chat-fill' }>; where: Where }) {
  const [picked, setPicked] = useStored<Record<number, number>>(`${where.id}:picked`, {});
  const save = useRecord(where);
  const speakers = [...new Set(block.lines.map(line => line.who))];
  return <Card kind="chat-fill" title={block.title}>
    <div className="gl-chat">{block.lines.map((line, i) => {
      const choice = picked[i];
      const right = choice === line.answer;
      const parts = line.text.split('___');
      return <div key={i} className={`gl-bubble gl-side-${speakers.indexOf(line.who) % 2}`} data-gap={line.options ? i : undefined}>
        <b>{line.who}</b>
        <p>{parts[0]}{line.options && <span className={`gl-blank ${choice === undefined ? '' : right ? 'is-right' : 'is-wrong'}`}>{choice === undefined ? '_____' : line.options[choice]}</span>}{parts.slice(1).join('')}</p>
        {line.options && <div className="gl-options gl-options-small" role="group" aria-label={`Hueco ${i + 1}`}>{line.options.map((option, o) => <button type="button" key={option} data-option={o} aria-pressed={choice === o} onClick={() => { setPicked(prev => ({ ...prev, [i]: o })); save(i, o === line.answer, line.text.replace('___', '…'), line.options![line.answer ?? 0]); }}>{option}</button>)}</div>}
        {line.options && choice !== undefined && <Feedback ok={right}>{right ? line.why : 'Lee la respuesta completa: ¿momento, cantidad o hecho terminado?'}</Feedback>}
      </div>;
    })}</div>
  </Card>;
}

/** Tap the words in order to build the sentence. */
function Build({ block, where }: { block: Extract<Block, { kind: 'build' }>; where: Where }) {
  const [chosen, setChosen] = useStored<Record<number, number[]>>(`${where.id}:chosen`, {});
  const save = useRecord(where);
  return <Card kind="build" title={block.title}>
    <ol className="gl-exercise-list">{block.items.map((item, i) => {
      const order = chosen[i] ?? [];
      const done = order.length === item.tiles.length;
      const sentence = order.map(t => item.tiles[t]).join(' ');
      const right = done && item.accept.some(a => normalize(a) === normalize(sentence));
      const put = (next: number[]) => {
        setChosen(prev => ({ ...prev, [i]: next }));
        if (next.length === item.tiles.length) save(i, item.accept.some(a => normalize(a) === normalize(next.map(t => item.tiles[t]).join(' '))), `Ordena: ${item.tiles.join(' / ')}`, item.accept[0]);
      };
      return <li key={item.tiles.join()} data-state={!done ? 'open' : right ? 'right' : 'wrong'}>
        <p className="gl-built" aria-live="polite">{order.length ? sentence : <span className="gl-muted">Toca las palabras en orden.</span>}</p>
        <English text={item.en} />
        <div className="gl-tiles" role="group" aria-label={`Palabras ${i + 1}`}>{item.tiles.map((tile, t) => <button type="button" key={t} data-tile={t} disabled={order.includes(t)} onClick={() => put([...order, t])}>{tile}</button>)}</div>
        <div className="gl-row">
          <button type="button" className="gl-chip-button" disabled={!order.length} onClick={() => setChosen(prev => ({ ...prev, [i]: order.slice(0, -1) }))}>Deshacer</button>
          <button type="button" className="gl-chip-button" disabled={!order.length} onClick={() => setChosen(prev => ({ ...prev, [i]: [] }))}>Empezar de nuevo</button>
        </div>
        {done && <Feedback ok={right}>{right ? `${item.accept[0]}` : 'El orden no funciona todavía. Empieza por el verbo o por la expresión de tiempo.'}</Feedback>}
      </li>;
    })}</ol>
  </Card>;
}

/** Type the new sentence. After two tries a model answer is offered. */
function Rewrite({ block, where }: { block: Extract<Block, { kind: 'rewrite' }>; where: Where }) {
  const [typed, setTyped] = useStored<Record<number, string>>(`${where.id}:typed`, {});
  const [checks, setChecks] = useStored<Record<number, { ok: boolean; tries: number }>>(`${where.id}:checks`, {});
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const save = useRecord(where);
  return <Card kind="rewrite" title={block.title}>
    <ol className="gl-exercise-list">{block.items.map((item, i) => {
      const check = checks[i];
      const submit = () => {
        const ok = item.accept.some(a => normalize(a) === normalize(typed[i] ?? ''));
        setChecks(prev => ({ ...prev, [i]: { ok, tries: (prev[i]?.tries ?? 0) + 1 } }));
        save(i, ok, `${item.prompt} → ${item.instruction}`, item.accept[0]);
      };
      return <li key={item.prompt} data-state={!check ? 'open' : check.ok ? 'right' : 'wrong'}>
        <p className="gl-prompt">«{item.prompt}»</p>
        <p className="gl-context">{item.instruction}</p>
        <form className="gl-type" onSubmit={event => { event.preventDefault(); submit(); }}>
          <input aria-label={`Respuesta ${i + 1}`} value={typed[i] ?? ''} onChange={event => setTyped(prev => ({ ...prev, [i]: event.target.value }))} autoComplete="off" spellCheck={false} lang="es" />
          <button type="submit" className="gl-chip-button" disabled={!(typed[i] ?? '').trim()}>Comprobar</button>
        </form>
        {check && <Feedback ok={check.ok}>{check.ok ? 'Bien escrito.' : 'Revisa la expresión de tiempo y el verbo.'}</Feedback>}
        {check && !check.ok && check.tries >= 2 && (open[i] ? <p className="gl-answer">{item.accept[0]}</p> : <button type="button" className="gl-link" data-answer-toggle onClick={() => setOpen(prev => ({ ...prev, [i]: true }))}>Ver una respuesta posible</button>)}
      </li>;
    })}</ol>
  </Card>;
}

/** Tap a highlighted expression to see why the speaker used it. */
function Explore({ block, where }: { block: Extract<Block, { kind: 'explore' }>; where: Where }) {
  const { legend } = useLive();
  const { results } = useStore();
  const [active, setActive] = useState<{ line: number; mark: string }>();
  const save = useRecord(where);
  const keys = Object.keys(block.notes);
  const seen = keys.filter((_, k) => results[`${where.id}:${k}`]?.ok).length;
  const speakers = [...new Set(block.lines.map(line => line.who))];
  const tap = (line: number, mark: string) => {
    setActive(prev => prev?.mark === mark && prev.line === line ? undefined : { line, mark });
    const k = keys.indexOf(mark);
    if (k >= 0 && !results[`${where.id}:${k}`]) save(k, true, mark, block.notes[mark]);
  };
  return <Card kind="explore" title={block.title} actions={<span className="gl-counter" data-explored={seen}>{seen} de {keys.length} expresiones</span>}>
    <p className="gl-setting">{block.setting}</p>
    <div className="gl-chat">{block.lines.map((line, i) => {
      const tone = active?.line === i ? /\[\[([^\]|]+)\|([a-z]+)\]\]/g : null;
      const activeTone = tone ? [...line.text.matchAll(tone)].find(m => m[1] === active?.mark)?.[2] : undefined;
      return <div key={i} className={`gl-bubble gl-side-${speakers.indexOf(line.who) % 2}`}>
        <b>{line.who}</b>
        <p><Rich text={line.text} onMark={mark => tap(i, mark)} active={active?.line === i ? active.mark : undefined} /></p>
        <English text={line.en} />
        {active?.line === i && <div className={`gl-why gl-tone-${activeTone ?? 'neutral'}`} role="status">
          <span className="gl-badge">{legend.find(l => l.tone === activeTone)?.label ?? 'Expresión'}</span>
          <p><Rich text={block.notes[active.mark] ?? ''} /></p>
        </div>}
      </div>;
    })}</div>
  </Card>;
}

function Listen({ block, where }: { block: Extract<Block, { kind: 'listen' }>; where: Where }) {
  const { mode } = useLive();
  const [heard, setHeard] = useStored(`${where.id}:heard`, false);
  const [transcript, setTranscript] = useState(false);
  const [reply, setReply] = useStored(`${where.id}:reply`, '');
  const replyText = useModeText(block.reply);
  return <section className="gl-listen" data-block="listen">
    <div className="gl-listen-before"><small>Antes de escuchar</small><p>{block.before}</p></div>
    <AudioDeck src={block.src} title={block.title} channel={block.channel} accent="#7fd3ff" allowSlow playingMessage="Escucha sin leer. La transcripción sigue oculta." onComplete={() => setHeard(true)} />
    {!heard ? <div className="gl-listen-locked">
      <p>Las preguntas se abren cuando termina el audio.</p>
      <button type="button" className="gl-link" data-open-questions onClick={() => setHeard(true)}>{mode === 'teacher' ? 'Abrir las preguntas ahora' : 'No puedo escuchar el audio: abrir las preguntas'}</button>
    </div> : <>
      <ChoiceList title="Primera escucha: la idea general" items={[block.gist]} where={{ ...where, id: `${where.id}:gist` }} />
      <ChoiceList title="Segunda escucha: los detalles" items={block.details} where={{ ...where, id: `${where.id}:details` }} />
      <div className="gl-row"><button type="button" className="gl-chip-button" data-transcript aria-pressed={transcript} onClick={() => setTranscript(v => !v)}>{transcript ? 'Ocultar transcripción' : 'Ver transcripción'}</button></div>
      {transcript && <p className="gl-transcript"><Rich text={block.transcript} /></p>}
      {replyText && <div className="gl-listen-reply">
        <h4>Y ahora tú</h4><p><Rich text={replyText} /></p>
        {mode === 'self' && <textarea aria-label="Tu respuesta" rows={3} value={reply} onChange={event => setReply(event.target.value)} placeholder="Escribe tu respuesta…" lang="es" />}
      </div>}
    </>}
  </section>;
}

type Recognition = { lang: string; interimResults: boolean; continuous: boolean; start: () => void; stop: () => void; onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null; onend: (() => void) | null; onerror: (() => void) | null };
type VoiceWindow = Window & { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };

/** Browser dictation when the browser really supports it; otherwise the button is not shown. */
function Dictate({ onText }: { onText: (text: string) => void }) {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const recognition = useRef<Recognition | null>(null);
  useEffect(() => {
    const voice = window as VoiceWindow;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSupported(Boolean(voice.SpeechRecognition ?? voice.webkitSpeechRecognition));
    return () => recognition.current?.stop();
  }, []);
  if (!supported) return null;
  const toggle = () => {
    if (listening) { recognition.current?.stop(); return; }
    const voice = window as VoiceWindow;
    const Engine = voice.SpeechRecognition ?? voice.webkitSpeechRecognition;
    if (!Engine) return;
    const engine = new Engine();
    engine.lang = 'es-MX'; engine.interimResults = false; engine.continuous = false;
    engine.onresult = event => { const text = Array.from(event.results).map(r => r[0]?.transcript ?? '').join(' ').trim(); if (text) onText(text); };
    engine.onend = () => setListening(false);
    engine.onerror = () => setListening(false);
    recognition.current = engine;
    setListening(true);
    try { engine.start(); } catch { setListening(false); }
  };
  return <button type="button" className="gl-chip-button" data-dictate aria-pressed={listening} onClick={toggle}>{listening ? '■ Detener' : '🎙 Dictar'}</button>;
}

/** One conversation card at a time: the question leads, help is there when needed. */
function Talk({ block, where }: { block: Extract<Block, { kind: 'talk' }>; where: Where }) {
  const { mode } = useLive();
  const { results } = useStore();
  const [index, setIndex] = useStored(`${where.id}:card`, 0);
  const [answers, setAnswers] = useStored<Record<number, string>>(`${where.id}:answers`, {});
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [follow, setFollow] = useState<Record<number, number>>({});
  const save = useRecord(where);
  const card: TalkCard = block.cards[Math.min(index, block.cards.length - 1)];
  const talked = (i: number) => Boolean(results[`${where.id}:${i}`]?.ok);
  const toggle = (key: string) => setOpen(prev => ({ ...prev, [`${index}:${key}`]: !prev[`${index}:${key}`] }));
  const isOpen = (key: string) => Boolean(open[`${index}:${key}`]);
  const shownFollowUps = mode === 'teacher' ? card.followUps.length : follow[index] ?? 0;
  const swap = useModeText(block.swap);
  const last = index === block.cards.length - 1;
  const done = () => { if (!talked(index)) save(index, true, card.q, ''); if (!last) setIndex(index + 1); };
  return <section className="gl-talk" data-block="talk">
    <nav className="gl-talk-dots" aria-label="Preguntas">{block.cards.map((c, i) => <button type="button" key={c.q} data-card={i} aria-current={i === index ? 'step' : undefined} className={talked(i) ? 'is-done' : ''} aria-label={`Pregunta ${i + 1}${talked(i) ? ', conversada' : ''}`} onClick={() => setIndex(i)}>{i + 1}</button>)}</nav>
    <article className="gl-talk-card" key={index}>
      <small>Pregunta {index + 1} de {block.cards.length}</small>
      <h3 className="gl-talk-q">{card.q}</h3>
      {shownFollowUps > 0 && <ul className="gl-follow" data-follow-list>{card.followUps.slice(0, shownFollowUps).map(f => <li key={f}>{f}</li>)}</ul>}
      {mode === 'self' && shownFollowUps < card.followUps.length && <button type="button" className="gl-talk-more" data-follow-ups onClick={() => setFollow(prev => ({ ...prev, [index]: (prev[index] ?? 0) + 1 }))}>＋ Otra pregunta sobre esto</button>}
      <ul className="gl-phrases" aria-label="Expresiones útiles">{card.phrases.map(p => <li key={p}><Rich text={p} /></li>)}</ul>
      <div className="gl-row">
        <button type="button" className="gl-chip-button" data-hint aria-pressed={isOpen('hint')} onClick={() => toggle('hint')}>Pista</button>
        <button type="button" className="gl-chip-button" data-example aria-pressed={isOpen('example')} onClick={() => toggle('example')}>Ejemplo de respuesta</button>
      </div>
      {isOpen('hint') && <p className="gl-talk-help"><Rich text={card.hint} /></p>}
      {isOpen('example') && <p className="gl-talk-help gl-talk-example"><Rich text={card.example} /></p>}
      {mode === 'self' ? <div className="gl-talk-answer">
        <label htmlFor={`${where.id}-answer`}>Responde en voz alta y, si quieres, escribe tu respuesta aquí.</label>
        <textarea id={`${where.id}-answer`} rows={3} value={answers[index] ?? ''} onChange={event => setAnswers(prev => ({ ...prev, [index]: event.target.value }))} placeholder="Yo vivo en… desde…" lang="es" />
        <Dictate onText={text => setAnswers(prev => ({ ...prev, [index]: `${prev[index] ? `${prev[index]} ` : ''}${text}` }))} />
      </div> : card.teacher && <aside className="gl-teacher-note" data-teacher-note><b>Para el profesor</b><p>{card.teacher}</p></aside>}
      <footer className="gl-talk-foot">
        {card.next && <p className="gl-talk-next">{card.next}</p>}
        <button type="button" className="gl-primary" data-talked onClick={done}>{last ? (talked(index) ? '✓ Conversada' : 'Terminar la conversación') : 'Siguiente pregunta →'}</button>
      </footer>
    </article>
    {swap && <p className="gl-swap"><span aria-hidden="true">⇄</span> <Rich text={swap} /></p>}
  </section>;
}

function Write({ block, where }: { block: Extract<Block, { kind: 'write' }>; where: Where }) {
  const { mode } = useLive();
  const [text, setText] = useStored(`${where.id}:text`, '');
  const [review, setReview] = useStored<ReturnType<typeof reviewWriting> | null>(`${where.id}:review`, null);
  const [help, setHelp] = useState<'starters' | 'words' | 'model' | null>(null);
  const save = useRecord(where);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const box = useRef<HTMLTextAreaElement>(null);
  const insert = (starter: string) => { setText(prev => `${prev}${prev && !prev.endsWith(' ') ? ' ' : ''}${starter}`); box.current?.focus(); };
  return <Card kind="write" title={block.title}>
    <p className="gl-situation"><Rich text={block.situation} /></p>
    <ul className="gl-task-list">{block.task.map(t => <li key={t}><Rich text={t} /></li>)}</ul>
    <textarea ref={box} className="gl-write-box" aria-label="Tu texto" rows={7} value={text} onChange={event => setText(event.target.value)} placeholder="Hola a todos: me llamo…" lang="es" />
    <div className="gl-write-meta"><span data-words={words}>{words} palabras</span><span>{words < block.minWords ? `Mínimo: ${block.minWords}` : 'Buena extensión'}</span></div>
    <div className="gl-row">
      {(['starters', 'words', 'model'] as const).map(kind => <button type="button" key={kind} className="gl-chip-button" data-help={kind} aria-pressed={help === kind} onClick={() => setHelp(prev => prev === kind ? null : kind)}>{kind === 'starters' ? 'Comienzos de frase' : kind === 'words' ? 'Palabras útiles' : 'Ver un ejemplo'}</button>)}
    </div>
    {help === 'starters' && <div className="gl-tiles gl-tiles-soft">{block.starters.map(s => <button type="button" key={s} onClick={() => insert(s)}>{s}</button>)}</div>}
    {help === 'words' && <ul className="gl-phrases">{block.words.map(w => <li key={w}>{w}</li>)}</ul>}
    {help === 'model' && <p className="gl-model"><Rich text={block.model} /></p>}
    <div className="gl-row gl-write-actions">
      <button type="button" className="gl-primary" data-review disabled={words < 5} onClick={() => { const result = reviewWriting(text); setReview(result); save(0, words >= block.minWords, block.title, ''); }}>Revisar mi texto</button>
      {mode === 'teacher' && <span className="gl-hint">Después, léanlo juntos y corrijan lo que la revisión no ve.</span>}
    </div>
    {review && <div className="gl-review" data-review-result>
      <h4>Revisión de las estructuras de la clase</h4>
      <ul>{review.uses.map(use => <li key={use.label} className={use.found ? 'is-ok' : 'is-missing'}><span aria-hidden="true">{use.found ? '✓' : '○'}</span><div><b>{use.label}</b>{use.found ? <small>«{use.found}»</small> : <small>{use.tip}</small>}</div></li>)}</ul>
      {review.problems.length > 0 && <><h4>Revisa estas frases</h4><ul>{review.problems.map(p => <li key={p.text} className="is-problem"><span aria-hidden="true">!</span><div><b>«{p.text}»</b><small>{p.why}</small></div></li>)}</ul></>}
      <p className="gl-hint">Esta revisión busca solo las estructuras de la clase y sus errores típicos. No corrige la ortografía ni el resto del texto.</p>
    </div>}
  </Card>;
}

/** The first-try mistakes of this class, from the real answers. */
function Review() {
  const { results } = useStore();
  const { go } = useLive();
  const mistakes = Object.entries(results).filter(([, r]) => !r.first && r.right).map(([id, r]) => ({ id, ...r })) as (Result & { id: string })[];
  if (!mistakes.length) return <Card kind="review" title="Tus errores en esta clase"><p className="gl-hint">{Object.keys(results).length ? 'No hay errores registrados: todas tus respuestas fueron correctas al primer intento.' : 'Todavía no hay respuestas registradas. Cuando hagas los ejercicios, aquí verás los errores para repasarlos.'}</p></Card>;
  return <Card kind="review" title="Tus errores en esta clase">
    <ul className="gl-review-list">{mistakes.slice(0, 8).map(m => <li key={m.id}>
      <div><p>{m.prompt}</p><small>Respuesta: <b>{m.right}</b>{m.ok ? ' · ya la corregiste' : ''}</small></div>
      <button type="button" className="gl-chip-button" data-review-go onClick={() => go(m.stage, m.step)}>Repasar</button>
    </li>)}</ul>
    {mistakes.length > 8 && <p className="gl-hint">Y {mistakes.length - 8} más.</p>}
  </Card>;
}

function Restart() {
  const { clear } = useStore();
  const { go } = useLive();
  const [confirm, setConfirm] = useState(false);
  return <div className="gl-restart">
    <button type="button" className="gl-chip-button" data-repeat="practicar" onClick={() => { clear('practicar:'); go(2, 0); }}>Repetir la práctica</button>
    {confirm ? <span className="gl-row"><span className="gl-hint">Se borran tus respuestas de esta clase en este navegador.</span><button type="button" className="gl-chip-button gl-accent" data-restart-confirm onClick={() => { clear(); setConfirm(false); go(0, 0); }}>Sí, empezar de nuevo</button><button type="button" className="gl-link" onClick={() => setConfirm(false)}>Cancelar</button></span>
      : <button type="button" className="gl-chip-button" data-restart onClick={() => setConfirm(true)}>Empezar la clase de nuevo</button>}
  </div>;
}

function Mistakes({ block }: { block: Extract<Block, { kind: 'mistakes' }> }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return <Card kind="mistakes" title={block.title}>
    <ul>{block.items.map((item, i) => <li key={item.wrong}>
      <span className="gl-wrong"><i aria-hidden="true">✗</i><s>{item.wrong}</s></span>
      {open[i] ? <><span className="gl-right"><i aria-hidden="true">✓</i>{item.right}</span><small>{item.why}</small></> : <button type="button" className="gl-link" data-answer-toggle onClick={() => setOpen(prev => ({ ...prev, [i]: true }))}>¿Dónde está el error?</button>}
    </li>)}</ul>
  </Card>;
}

/** Answer two yes/no questions to find the structure. */
function Decide({ block }: { block: Extract<Block, { kind: 'decide' }> }) {
  const [path, setPath] = useState<boolean[]>([]);
  const result = (() => {
    for (let i = 0; i < path.length; i++) { const answer = path[i] ? block.steps[i].yes : block.steps[i].no; if (answer !== 'next') return answer; }
    return null;
  })();
  const current = result ? -1 : path.length;
  return <Card kind="decide" title={block.title}>
    <ol className="gl-decide">{block.steps.slice(0, result ? path.length : path.length + 1).map((step, i) => <li key={step.q}>
      <p>{step.q}</p>
      <div className="gl-options">{([[true, 'Sí'], [false, 'No']] as const).map(([value, label]) => <button type="button" key={label} data-decide={`${i}-${value}`} aria-pressed={path[i] === value} disabled={i !== current && path[i] !== value} onClick={() => setPath([...path.slice(0, i), value])}>{label}</button>)}</div>
    </li>)}</ol>
    {result && <div className="gl-decide-result" role="status"><Rich text={result} /><button type="button" className="gl-link" onClick={() => setPath([])}>Probar con otra frase</button></div>}
  </Card>;
}

export function LiveBlock({ block, where }: { block: Block; where: Where }) {
  const { mode } = useLive();
  switch (block.kind) {
    case 'guide': return <Guide text={block.text} />;
    case 'lead': return <div className="gl-lead"><p><Rich text={block.text} /></p><English text={block.en} /></div>;
    case 'concept': return <section className={`gl-concept gl-tone-${block.tone}`} data-block="concept">
      <div className="gl-concept-copy">
        <header><span className="gl-badge">{block.label}</span><English text={block.en} /></header>
        <h3>{block.question}</h3>
        <p className="gl-meaning"><Rich text={block.meaning} /></p>
        <div className="gl-formulas">{block.formula.map(f => <code key={f}>{f}</code>)}</div>
      </div>
      {block.art && <ConceptArt art={block.art} />}
      <ul className="gl-examples">{block.examples.map(example => <li key={example.es}><span><Rich text={example.es} /></span><English text={example.en} /></li>)}</ul>
      {block.note && <p className="gl-note"><Rich text={block.note} /></p>}
    </section>;
    case 'compare': return <Card kind="compare" title={block.title}><div className="gl-compare-grid">{block.columns.map(col => <article key={col.label} className={`gl-tone-${col.tone}`}>
      <span className="gl-badge">{col.label}</span><p><Rich text={col.sentence} /></p><small>{col.idea}</small><English text={col.en} />
    </article>)}</div></Card>;
    case 'decide': return <Decide block={block} />;
    case 'tip': return <aside className="gl-tip"><span aria-hidden="true">{block.icon}</span><div><h4>{block.title}</h4><p><Rich text={block.text} /></p><English text={block.en} /></div></aside>;
    case 'table': return <Card kind="ref-table" title={block.title}><div className="gl-table-wrap"><table className="gl-table"><thead><tr>{block.head.map(h => <th key={h} scope="col"><Rich text={h} /></th>)}</tr></thead><tbody>{block.rows.map((row, r) => <tr key={r}>{row.map((cell, c) => c === 0 ? <th key={c} scope="row"><Rich text={cell} /></th> : <td key={c}><Rich text={cell} /></td>)}</tr>)}</tbody></table></div>{block.note && <p className="gl-note"><Rich text={block.note} /></p>}</Card>;
    case 'mistakes': return <Mistakes block={block} />;
    case 'visual': return <LiveVisual visual={block.visual} where={where} />;
    case 'explore': return <Explore block={block} where={where} />;
    case 'choice': return <ChoiceList title={block.title} items={block.items} where={where} />;
    case 'classify': return <Classify block={block} where={where} />;
    case 'fix': return <Fix block={block} where={where} />;
    case 'chat-fill': return <ChatFill block={block} where={where} />;
    case 'build': return <Build block={block} where={where} />;
    case 'rewrite': return <Rewrite block={block} where={where} />;
    case 'listen': return <Listen block={block} where={where} />;
    case 'talk': return <Talk block={block} where={where} />;
    case 'write': return <Write block={block} where={where} />;
    case 'recap': return <div className="gl-recap">{block.items.map(item => <article key={item.label} className={`gl-tone-${item.tone}`}><span className="gl-badge">{item.label}</span><English text={item.en} /><code>{item.formula}</code><p>{item.example}</p><small>{item.caption}</small></article>)}</div>;
    case 'review': return <Review />;
    case 'restart': return <Restart />;
    case 'teacher': return mode === 'teacher' ? <aside className="gl-teacher-note" data-teacher-note><b>Para el profesor</b><p>{block.text}</p></aside> : null;
  }
}
