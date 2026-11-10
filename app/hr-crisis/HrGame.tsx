'use client';

// HR Crisis · the lesson around the 3D company: the title screen with the
// student profile (name, flag, native language, field, level, vocabulary and
// objectives), the HUD, the mission panel, the task card (dialogue spoken in
// Spanish at the speed of the level, free typed production with contextual
// feedback, interviews, documents, ordering and decisions), the optional help
// tab in the student's language (always collapsed until she opens it) and the
// notebook that tracks recurring mistakes, vocabulary and grammar.
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { COUNTRIES, DEFAULT_PROFILE, LEVEL_IDS, NATIVE, PROFILE_KEY, STORAGE_KEY, fill, normaliseProfile, profileFromQuery } from './config.mjs';
import { LEVEL_RULES, MISSIONS, TASKS, missionDone, missionOpen, taskById, tasksOf, variant } from './misiones.mjs';
import { CAST, ROOMS, SPOTS } from './oficina.mjs';
import { evaluate, intentOf, questionForm, recordAnswer, recurring, CHECKS, plainText } from './evaluar.mjs';
import { INTENT_LABELS, answerFor } from './candidatos.mjs';
import { AYUDA } from './ayuda.mjs';
import { complete, createState, remember, restore, serialise } from './engine.mjs';
import { createAmbience, type Ambience } from './ambience';
import { setShoutMuted } from '../escucha-3d/shout';
import MusicVolume, { useMusicVolume } from '../escucha-3d/MusicVolume';
import type { Pose } from './World3D';
import type { TiziaGesture, TiziaMood } from './tizia3d';
import './hr.css';

const World3D = dynamic(() => import('./World3D'), { ssr: false, loading: () => <div className="hr-loading">Abriendo las puertas de Caos y Asociados…</div> });

type Profile = ReturnType<typeof normaliseProfile>;
type State = ReturnType<typeof createState>;
type Task = (typeof TASKS)[number];
type Variant = Record<string, unknown> & { line: string; prompt: string; hints: string[]; write?: { need: string[]; extra?: string[]; min: number; model: string }; good?: string; part?: string };
type Result = ReturnType<typeof evaluate>;

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return Boolean(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}

// Spanish voice at the speed of the level. Speech recognition is not used.
function speak(text: string, rate: number, on: boolean) {
  if (!on || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/^[A-ZÁÉÍÓÚ][a-záéíóú]+: /, ''));
    u.lang = 'es-ES'; u.rate = rate;
    const voice = window.speechSynthesis.getVoices().find(v => v.lang?.startsWith('es'));
    if (voice) u.voice = voice;
    window.speechSynthesis.speak(u);
  } catch { /* no voice available */ }
}

function shuffled<T>(list: T[], seed: number): T[] {
  const out = [...list];
  let s = seed || 1;
  for (let i = out.length - 1; i > 0; i--) { s = (s * 16807) % 2147483647; const j = s % (i + 1); [out[i], out[j]] = [out[j], out[i]]; }
  if (out.every((x, i) => x === list[i]) && out.length > 1) [out[0], out[1]] = [out[1], out[0]];
  return out;
}

// ------------------------------------------------------------ help tab
function HelpTab({ taskId, profile }: { taskId: string; profile: Profile }) {
  const help = AYUDA[taskId as keyof typeof AYUDA];
  const native = NATIVE[profile.lengua as keyof typeof NATIVE] ?? NATIVE.otro;
  if (!help) return null;
  // A <details> element: closed by default, opened only by the student.
  return <details className="hr-help">
    <summary>{native.tab}</summary>
    {native.full ? <div lang="pt-BR">
      <p className="hr-help-situ">{help.situacao}</p>
      <h4>Vocabulário</h4>
      <ul className="hr-help-vocab">{help.vocab.map(([es, pt]) => <li key={es}><b lang="es">{es}</b> = {pt}</li>)}</ul>
      <h4>Gramática</h4>
      <p>{help.gramatica}</p>
      <h4>Falsos amigos</h4>
      <ul>{help.falsos.map(([es, pt]) => <li key={es}><b lang="es">{es}</b>: {pt}</li>)}</ul>
    </div> : <div>
      <h4>Palabras útiles</h4>
      <ul className="hr-help-vocab">{help.vocab.map(([es, , def]) => <li key={es}><b>{es}</b>: {def}</li>)}</ul>
    </div>}
  </details>;
}

// ------------------------------------------------------------ feedback block
function Feedback({ result, name, react }: { result: Result; name: string; react: string }) {
  const head = result.verdict === 'bien' ? `¡Muy bien, ${name}!` : result.verdict === 'casi' ? `Casi, ${name}. Revisa esto:` : `Inténtalo otra vez, ${name}.`;
  return <div className={`hr-feedback is-${result.verdict}`} role="status" aria-live="polite">
    <p className="hr-react">{react}</p>
    <p className="hr-fb-head">{head}</p>
    <ul>
      {result.ok.map(i => <li key={i.key} className="ok">✓ {i.text}</li>)}
      {result.bonus.map(i => <li key={`b-${i.key}`} className="bonus">★ {i.text}</li>)}
      {result.miss.map(i => <li key={i.key} className="miss">✗ {i.text}</li>)}
      {result.short && <li className="miss">✗ Escribe un poco más: tu respuesta tiene {result.words} palabras.</li>}
      {result.issues.map((i, k) => <li key={`i-${k}`} className="warn">⚠ <b>{i.word}</b>{i.fix ? <> → {i.fix}</> : null}. {i.why}</li>)}
    </ul>
  </div>;
}

// ------------------------------------------------------------ the task card
function TaskCard({ task, level, profile, state, setState, onClose, onDone, onReact, voice, rate }: {
  task: Task; level: string; profile: Profile; state: State; setState: (fn: (s: State) => State) => void;
  onClose: () => void; onDone: () => void; onReact: (mood: TiziaMood, g: TiziaGesture, good?: boolean) => void; voice: boolean; rate: number;
}) {
  const v = variant(task, level) as unknown as Variant;
  const f = (t: string) => fill(t, profile);
  const spot = SPOTS[task.id as keyof typeof SPOTS];
  const who = 'npc' in spot ? CAST[spot.npc as keyof typeof CAST] : null;
  const rules = LEVEL_RULES[level as keyof typeof LEVEL_RULES];
  const [showLine, setShowLine] = useState(rules.transcript === 'visible');
  const [hintsShown, setHintsShown] = useState(0);
  const [text, setText] = useState(state.answers[task.id] ?? '');
  const [result, setResult] = useState<Result | null>(null);
  const [tries, setTries] = useState(0);
  const [model, setModel] = useState(false);
  const kind = (task as { kind?: string }).kind ?? 'write';
  const [stage, setStage] = useState<'pre' | 'write'>(kind === 'write' ? 'write' : 'pre');
  // select
  const doc = (v as { doc?: { title: string; lines: { t: string; err?: boolean; why?: string }[] } }).doc;
  const [marked, setMarked] = useState<number[]>([]);
  const [checked, setChecked] = useState(0);
  // order
  const items = (v as { items?: string[] }).items ?? [];
  const [order, setOrder] = useState<string[]>(() => shuffled(items, task.id.length * 97 + level.charCodeAt(1)));
  // choose
  const options = (v as { options?: { t: string; react: string }[] }).options ?? [];
  const [pick, setPick] = useState<number | null>(state.picks[task.id] ?? null);
  // interview
  const need = (v as { need?: number }).need ?? 0;
  const must = (v as { must?: string[] }).must ?? [];
  const formal = Boolean((v as { formal?: boolean }).formal);
  const [chat, setChat] = useState<{ from: 'me' | 'them' | 'coach'; text: string }[]>([]);
  const [asked, setAsked] = useState<string[]>(state.asked[task.id] ?? []);
  const [question, setQuestion] = useState('');
  const chatEnd = useRef<HTMLDivElement>(null);
  const done = state.done.includes(task.id);

  useEffect(() => { speak(f(v.line), rate, voice); return () => { try { window.speechSynthesis?.cancel(); } catch { /* none */ } }; }, [task.id, level]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { chatEnd.current?.scrollIntoView({ block: 'nearest' }); }, [chat]);

  const write = v.write;
  const check = () => {
    if (!write || !text.trim()) return;
    const r = evaluate(text, write);
    setResult(r); setTries(n => n + 1);
    setState(s => remember(s, task.id, { answer: text, stats: recordAnswer(s.stats, r, text, profile.vocabulario) }));
    const react = r.verdict === 'bien' ? v.good : v.part;
    if (react) speak(f(react), rate, voice);
    onReact(r.verdict === 'bien' ? 'laugh' : r.verdict === 'casi' ? 'worried' : 'surprised', r.verdict === 'bien' ? 'celebrate' : r.verdict === 'casi' ? 'think' : 'facepalm', r.verdict === 'bien');
  };
  const finish = () => { setState(s => complete(s, task.id)); onDone(); };

  const ask = () => {
    const q = question.trim();
    if (!q) return;
    const intent = intentOf(q);
    const candidate = (task as { candidate?: string }).candidate ?? 'bruno';
    const answer = answerFor(candidate, intent, level);
    const notes = questionForm(q);
    const lines: typeof chat = [{ from: 'me', text: q }, { from: 'them', text: answer }];
    if (intent === 'ilegal') { lines.push({ from: 'coach', text: f('{nombre}, cuidado: en una entrevista no se pregunta la edad, los hijos, la pareja ni la religión. Es discriminación.') }); onReact('worried', 'facepalm'); }
    else if (!intent) lines.push({ from: 'coach', text: `Pregunta por un tema concreto: ${Object.values(INTENT_LABELS).slice(0, 6).join(', ')}…` });
    if (notes.length) lines.push({ from: 'coach', text: notes.join(' ') });
    if (formal && intent && !CHECKS.formal.test(q, plainText(q))) lines.push({ from: 'coach', text: 'Recuerda el registro formal: «¿Puede…?», «¿Dónde trabajaba usted?».' });
    setChat(c => [...c, ...lines]);
    speak(answer, rate, voice);
    const next = intent && intent !== 'ilegal' && !asked.includes(intent) ? [...asked, intent] : asked;
    setAsked(next);
    const pseudo = { ok: intent && intent !== 'ilegal' ? [{ key: 'pregunta', text: '', tag: 'preguntas' }] : [], miss: intent ? [] : [{ key: 'pregunta', text: '', tag: 'preguntas' }], bonus: [], issues: [] } as unknown as Result;
    setState(s => remember(s, task.id, { asked: next, stats: recordAnswer(s.stats, pseudo, q, profile.vocabulario) }));
    if (intent && intent !== 'ilegal') onReact('smile', 'none');
    setQuestion('');
  };
  const interviewDone = asked.length >= need && must.every(m => asked.includes(m));

  const docCheck = () => {
    setChecked(n => n + 1);
    const errs = doc!.lines.map((l, i) => (l.err ? i : -1)).filter(i => i >= 0);
    const allFound = errs.every(i => marked.includes(i)) && marked.every(i => errs.includes(i));
    if (allFound) onReact('proud', 'celebrate', true); else onReact('worried', 'think');
  };
  const errsOf = doc ? doc.lines.map((l, i) => (l.err ? i : -1)).filter(i => i >= 0) : [];
  const docSolved = doc && errsOf.every(i => marked.includes(i)) && marked.every(i => errsOf.includes(i));
  const orderSolved = order.every((x, i) => x === items[i]);
  const [orderChecks, setOrderChecks] = useState(0);
  const move = (i: number, d: number) => setOrder(o => { const n = [...o]; const j = i + d; if (j < 0 || j >= n.length) return o; [n[i], n[j]] = [n[j], n[i]]; return n; });

  return <div className="hr-card" role="dialog" aria-modal="false" aria-labelledby="hr-card-title">
    <div className="hr-card-head">
      <span className="hr-card-mission" style={{ background: ['', '#f6d21c', '#ff7a59', '#3fd08a', '#5aa8ff', '#c27bff', '#ff4f7a'][task.mission] }}>{task.mission}</span>
      <div>
        <small>{f(MISSIONS[task.mission - 1].title)}</small>
        <h2 id="hr-card-title">{f(task.title)}</h2>
      </div>
      <button type="button" className="hr-x" onClick={onClose} aria-label="Cerrar y volver a la oficina">×</button>
    </div>
    <div className="hr-card-body">
      <div className="hr-line">
        <div className="hr-who">{who ? <><b>{who.name}</b> · {who.role}</> : <b>{({ ordenador: 'El ordenador', corcho: 'El corcho de RR. HH.', equipo: 'Todo el equipo', pizarra: 'La pizarra del director', microfono: 'El micrófono de la empresa' } as Record<string, string>)[(spot as { thing?: string }).thing ?? ''] ?? ''}</b>}</div>
        <button type="button" className="hr-listen" onClick={() => speak(f(v.line), rate, true)} aria-label="Escuchar otra vez">🔊 Escuchar</button>
        {showLine ? <p className="hr-quote">«{f(v.line)}»</p> : <button type="button" className="hr-show" onClick={() => setShowLine(true)}>Ver el texto</button>}
      </div>
      <p className="hr-prompt">{f(v.prompt)}</p>

      {kind === 'interview' && <div className="hr-interview">
        <div className="hr-topics">{Object.entries(INTENT_LABELS).map(([k, l]) => <span key={k} className={asked.includes(k) ? 'on' : must.includes(k) ? 'must' : ''}>{asked.includes(k) ? '✓ ' : ''}{l}</span>)}</div>
        <p className="hr-count">{Math.min(asked.length, need)} / {need} temas{must.length ? ` · obligatorio: ${must.map(m => INTENT_LABELS[m as keyof typeof INTENT_LABELS]).join(', ')}` : ''}</p>
        <div className="hr-chat">{chat.map((c, i) => <p key={i} className={`hr-msg ${c.from}`}>{c.from === 'them' && who ? <b>{who.name.split(' ')[0]}: </b> : c.from === 'coach' ? <b>Consejo: </b> : null}{c.text}</p>)}<div ref={chatEnd} /></div>
        <form className="hr-ask" onSubmit={e => { e.preventDefault(); ask(); }}>
          <input value={question} onChange={e => setQuestion(e.target.value)} placeholder="Escribe tu pregunta: ¿…?" aria-label="Tu pregunta" lang="es" />
          <button type="submit">Preguntar</button>
        </form>
        <button type="button" className="hr-primary" disabled={!interviewDone} onClick={finish}>{interviewDone ? 'Terminar la entrevista' : 'Sigue preguntando…'}</button>
      </div>}

      {kind === 'select' && stage === 'pre' && doc && <div className="hr-doc">
        <h3>{doc.title}</h3>
        <ol>{doc.lines.map((l, i) => {
          const showWhy = checked > 0 && (marked.includes(i) || l.err);
          const cls = checked > 0 ? (l.err && marked.includes(i) ? 'found' : l.err ? (checked > 1 ? 'missed' : '') : marked.includes(i) ? 'wrong' : '') : marked.includes(i) ? 'marked' : '';
          return <li key={i}><button type="button" className={cls} aria-pressed={marked.includes(i)} onClick={() => setMarked(m => m.includes(i) ? m.filter(x => x !== i) : [...m, i])}>{l.t}</button>{showWhy && checked > 1 && l.why ? <small>{l.why}</small> : null}</li>;
        })}</ol>
        {checked > 0 && !docSolved && <p className="hr-note">{marked.filter(i => !errsOf.includes(i)).length ? 'Alguna de las frases marcadas no es un problema. ' : ''}{errsOf.filter(i => !marked.includes(i)).length ? `Te faltan ${errsOf.filter(i => !marked.includes(i)).length}.` : ''}</p>}
        <div className="hr-row">
          <button type="button" onClick={docCheck} disabled={!marked.length}>Comprobar</button>
          {(docSolved || checked > 1) && <button type="button" className="hr-primary" onClick={() => setStage('write')}>{docSolved ? '¡Bien! Ahora escribe' : 'Ver y seguir'}</button>}
        </div>
      </div>}

      {kind === 'order' && stage === 'pre' && <div className="hr-order">
        <ol>{order.map((it, i) => <li key={it} className={orderChecks > 0 ? (it === items[i] ? 'ok' : 'no') : ''}>
          <span>{it}</span>
          <span className="hr-arrows"><button type="button" onClick={() => move(i, -1)} aria-label={`Subir: ${it}`} disabled={i === 0}>↑</button><button type="button" onClick={() => move(i, 1)} aria-label={`Bajar: ${it}`} disabled={i === order.length - 1}>↓</button></span>
        </li>)}</ol>
        <div className="hr-row">
          <button type="button" onClick={() => { setOrderChecks(n => n + 1); onReact(orderSolved ? 'proud' : 'worried', orderSolved ? 'celebrate' : 'think', orderSolved); }}>Comprobar</button>
          {orderChecks > 1 && !orderSolved && <button type="button" onClick={() => setOrder(items)}>Ver el orden</button>}
          {orderSolved && orderChecks > 0 && <button type="button" className="hr-primary" onClick={() => setStage('write')}>¡Bien! Ahora explícalo</button>}
        </div>
      </div>}

      {kind === 'choose' && stage === 'pre' && <div className="hr-choose">
        {options.map((o, i) => <button key={o.t} type="button" className={pick === i ? 'on' : ''} onClick={() => { setPick(i); setState(s => remember(s, task.id, { pick: i })); speak(f(o.react).replace(/^[^:]+: /, ''), rate, voice); onReact('smile', 'think'); }}>{o.t}</button>)}
        {pick != null && <p className="hr-react">{f(options[pick].react)}</p>}
        {pick != null && <button type="button" className="hr-primary" onClick={() => setStage('write')}>Explica tu decisión</button>}
      </div>}

      {stage === 'write' && write && <div className="hr-write">
        <textarea value={text} onChange={e => setText(e.target.value)} rows={level === 'A1' ? 3 : 5} placeholder="Escribe aquí lo que dices, en español…" aria-label="Tu respuesta" lang="es" spellCheck={false} />
        <div className="hr-row">
          <button type="button" className="hr-primary" onClick={check} disabled={!text.trim()}>Comprobar</button>
          {v.hints.length > 0 && hintsShown < v.hints.length && <button type="button" onClick={() => setHintsShown(n => n + 1)}>Pista ({v.hints.length - hintsShown})</button>}
          {tries > 0 && !model && <button type="button" onClick={() => setModel(true)}>Ver una respuesta modelo</button>}
          <small className="hr-min">{text.trim() ? text.trim().split(/\s+/).length : 0} / {write.min}+ palabras</small>
        </div>
        {hintsShown > 0 && <ul className="hr-hints">{v.hints.slice(0, hintsShown).map(h => <li key={h}>{f(h)}</li>)}</ul>}
        {result && <Feedback result={result} name={profile.nombre} react={f(result.verdict === 'bien' ? v.good ?? '' : v.part ?? '')} />}
        {model && <p className="hr-model"><b>Una respuesta posible:</b> {f(write.model)}</p>}
        {(result?.verdict === 'bien' || tries >= 2 || done) && <button type="button" className="hr-primary hr-continue" onClick={finish}>{result?.verdict === 'bien' ? 'Continuar' : 'Continuar de todos modos'}</button>}
      </div>}

      <HelpTab taskId={task.id} profile={profile} />
    </div>
  </div>;
}

// ------------------------------------------------------------ the notebook
function Notebook({ state, profile, onClose }: { state: State; profile: Profile; onClose: () => void }) {
  const tags = Object.entries(state.stats.tags).sort((a, b) => (b[1].ok + b[1].miss) - (a[1].ok + a[1].miss));
  const mistakes = recurring(state.stats, 6);
  return <div className="hr-panel" role="dialog" aria-label={`Cuaderno de ${profile.nombre}`}>
    <div className="hr-card-head"><div><small>{profile.area} · {profile.nivel}</small><h2>Cuaderno de {profile.nombre}</h2></div><button type="button" className="hr-x" onClick={onClose} aria-label="Cerrar el cuaderno">×</button></div>
    <div className="hr-card-body">
      <h3>Objetivos</h3>
      <ul className="hr-goals">{profile.objetivos.map(g => <li key={g}>{g}</li>)}</ul>
      <h3>Gramática y comunicación</h3>
      {tags.length === 0 ? <p className="hr-note">Todavía no hay respuestas. Ve a un círculo de color.</p> : <ul className="hr-tags">{tags.map(([tag, v]) => <li key={tag}><span>{tag}</span><span className="hr-bar" aria-hidden="true"><i style={{ width: `${Math.round((v.ok / Math.max(1, v.ok + v.miss)) * 100)}%` }} /></span><small>{v.ok} bien · {v.miss} a mejorar</small></li>)}</ul>}
      <h3>Errores que se repiten</h3>
      {mistakes.length === 0 ? <p className="hr-note">Ningún error repetido por ahora.</p> : <ul className="hr-mistakes">{mistakes.map(m => <li key={m.key}><b>{m.key}</b> ×{m.count}{m.fix ? <> → {m.fix}</> : null}<small>{m.why}</small></li>)}</ul>}
      <h3>Vocabulario objetivo</h3>
      <ul className="hr-vocab">{profile.vocabulario.map(w => <li key={w} className={state.stats.vocab.includes(w) ? 'on' : ''}>{state.stats.vocab.includes(w) ? '✓ ' : ''}{w}</li>)}</ul>
      <p className="hr-note">Las palabras se marcan cuando {profile.nombre} las usa en sus respuestas.</p>
    </div>
  </div>;
}

// ------------------------------------------------------------ profile form
function ProfileForm({ profile, onSave }: { profile: Profile; onSave: (p: Profile) => void }) {
  const [draft, setDraft] = useState({ ...profile, vocabulario: profile.vocabulario.join(', '), objetivos: profile.objetivos.join('\n') });
  const [copied, setCopied] = useState(false);
  const set = (k: string, val: string) => setDraft(d => ({ ...d, [k]: val }));
  const link = () => {
    const p = normaliseProfile(draft);
    const q = new URLSearchParams({ alumno: p.nombre, genero: p.genero, pais: p.pais, lengua: p.lengua, area: p.area, nivel: p.nivel });
    const url = `${window.location.origin}${window.location.pathname}?${q.toString()}`;
    navigator.clipboard?.writeText(url).then(() => setCopied(true), () => setCopied(false));
  };
  return <details className="hr-config">
    <summary>⚙️ Configurar alumno (profesor)</summary>
    <form onSubmit={e => { e.preventDefault(); onSave(normaliseProfile(draft)); }}>
      <label>Nombre<input value={draft.nombre} onChange={e => set('nombre', e.target.value)} maxLength={24} /></label>
      <label>Género gramatical<select value={draft.genero} onChange={e => set('genero', e.target.value)}><option value="f">femenino (bienvenida)</option><option value="m">masculino (bienvenido)</option></select></label>
      <label>Nacionalidad y bandera<select value={draft.pais} onChange={e => set('pais', e.target.value)}>{Object.entries(COUNTRIES).map(([k, c]) => <option key={k} value={k}>{c.emoji} {c.name}</option>)}</select></label>
      <label>Lengua materna<select value={draft.lengua} onChange={e => set('lengua', e.target.value)}>{Object.entries(NATIVE).map(([k, n]) => <option key={k} value={k}>{n.name}</option>)}</select></label>
      <label>Área profesional<input value={draft.area} onChange={e => set('area', e.target.value)} maxLength={40} /></label>
      <label>Nivel<select value={draft.nivel} onChange={e => set('nivel', e.target.value)}>{LEVEL_IDS.map(l => <option key={l} value={l}>{l}</option>)}</select></label>
      <label className="wide">Vocabulario objetivo (separado por comas)<input value={draft.vocabulario} onChange={e => set('vocabulario', e.target.value)} /></label>
      <label className="wide">Objetivos (uno por línea)<textarea rows={3} value={draft.objetivos} onChange={e => set('objetivos', e.target.value)} /></label>
      <div className="hr-row wide"><button type="submit" className="hr-primary">Guardar perfil</button><button type="button" onClick={link}>{copied ? 'Enlace copiado' : 'Copiar enlace para este alumno'}</button><button type="button" onClick={() => onSave(normaliseProfile(DEFAULT_PROFILE))}>Volver a Tizia</button></div>
    </form>
  </details>;
}

// ------------------------------------------------------------ the lesson
export default function HrGame() {
  const [profile, setProfile] = useState<Profile>(() => normaliseProfile(DEFAULT_PROFILE));
  const [state, setStateRaw] = useState<State>(() => createState());
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [has3d, setHas3d] = useState(true);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [near, setNear] = useState<string | null>(null);
  const [pose, setPose] = useState<Pose | null>(null);
  const [panel, setPanel] = useState<'missions' | 'notebook' | null>(null);
  const [sound, setSound] = useState(true);
  const [musicVolume, setMusicVolume] = useMusicVolume();
  const [mood, setMood] = useState<TiziaMood>('smile');
  const [gesture, setGesture] = useState<{ g: TiziaGesture; n: number }>({ g: 'none', n: 0 });
  const ambience = useRef<Ambience | null>(null);
  const setState = useCallback((fn: (s: State) => State) => setStateRaw(fn), []);

  useEffect(() => {
    const t = window.setTimeout(() => {
      let saved: unknown = null;
      try { saved = JSON.parse(window.localStorage.getItem(PROFILE_KEY) ?? 'null'); } catch { saved = null; }
      setProfile(profileFromQuery(window.location.search, normaliseProfile(saved ?? DEFAULT_PROFILE)));
      let raw: string | null = null;
      try { raw = window.localStorage.getItem(STORAGE_KEY); } catch { raw = null; }
      setStateRaw(restore(raw));
      setHas3d(webglAvailable());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);
  useEffect(() => { if (ready) try { window.localStorage.setItem(STORAGE_KEY, serialise(state)); } catch { /* private mode */ } }, [state, ready]);
  useEffect(() => { if (ready) try { window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile)); } catch { /* private mode */ } }, [profile, ready]);
  useEffect(() => { ambience.current = createAmbience(); return () => { ambience.current?.dispose(); ambience.current = null; }; }, []);
  useEffect(() => { ambience.current?.setMuted(!sound); setShoutMuted(!sound); }, [sound]);
  useEffect(() => { ambience.current?.setVolume(musicVolume); }, [musicVolume]);
  useEffect(() => { ambience.current?.duck(taskId ? 0.25 : 1); }, [taskId]);

  const level = profile.nivel;
  const rules = LEVEL_RULES[level as keyof typeof LEVEL_RULES];
  const open = useMemo(() => TASKS.filter(t => missionOpen(t.mission, state.done, state.unlocked)).map(t => t.id), [state.done, state.unlocked]);
  const task = taskId ? taskById(taskId) : null;
  const room = pose ? ROOMS.find(r => r.id === pose.room) : null;
  const allDone = state.done.length === TASKS.length;
  const f = (t: string) => fill(t, profile);
  const country = COUNTRIES[profile.pais as keyof typeof COUNTRIES];

  const react = useCallback((m: TiziaMood, g: TiziaGesture, good?: boolean) => {
    setMood(m); setGesture(x => ({ g, n: x.n + 1 }));
    if (good != null) ambience.current?.chime(good);
    window.setTimeout(() => setMood('smile'), 3500);
  }, []);
  const openTask = useCallback((id: string) => { if (open.includes(id)) { setTaskId(id); setPanel(null); setMood('smile'); } }, [open]);
  const enter = () => { setEntered(true); ambience.current?.start(); };
  const nextHint = TASKS.find(t => open.includes(t.id) && !state.done.includes(t.id));

  if (!ready) return <main className="hr-root"><div className="hr-loading">Cargando…</div></main>;

  return <main className={`hr-root${entered ? ' is-in' : ''}`}>
    {has3d && <World3D pais={profile.pais} level={level} open={open} done={state.done} taskId={taskId} paused={Boolean(panel) || !entered} intro={!entered} mood={mood} gesture={gesture}
      onSpot={openTask} onNear={setNear} onPose={setPose} onFail={() => setHas3d(false)} />}

    {!entered && <section className="hr-title">
      <div className="hr-title-card">
        <p className="hr-kicker">SPANISHCUE · Experiencia 3D para {profile.nombre} {country?.emoji}</p>
        <h1>HR CRISIS<span>La empresa es un caos</span></h1>
        <p className="hr-lead">{f('{nombre} es [la nueva responsable|el nuevo responsable] de {area} en Caos y Asociados. Las entrevistas, las quejas, las nóminas, los cambios y la dirección: todo es urgente. Y todo se resuelve en español.')}</p>
        <div className="hr-levels" role="radiogroup" aria-label="Nivel">
          {LEVEL_IDS.map(l => <button key={l} type="button" role="radio" aria-checked={level === l} className={level === l ? 'on' : ''} onClick={() => setProfile(p => ({ ...p, nivel: l }))}>{l}</button>)}
        </div>
        <p className="hr-level-note">{rules.label}</p>
        <button type="button" className="hr-enter" onClick={enter}>Entrar en la empresa</button>
        <p className="hr-keys">WASD o flechas para caminar · arrastra para mirar · espacio para saltar · N nitro · E para hablar</p>
        <ProfileForm key={JSON.stringify(profile)} profile={profile} onSave={p => setProfile(p)} />
        {state.done.length > 0 && <p className="hr-note">{state.done.length} de {TASKS.length} tareas hechas. <button type="button" className="hr-link" onClick={() => { if (window.confirm('¿Empezar de cero? Se borra el progreso y el cuaderno.')) setStateRaw(createState()); }}>Empezar de cero</button></p>}
      </div>
    </section>}

    {entered && <>
      <header className="hr-hud">
        <button type="button" className="hr-chip" onClick={() => setPanel(panel === 'missions' ? null : 'missions')} aria-expanded={panel === 'missions'}>📋 Misiones · {state.done.length}/{TASKS.length}</button>
        <span className="hr-room">{room?.name ?? 'Caos y Asociados'}</span>
        <span className="hr-spacer" />
        <select className="hr-chip" value={level} onChange={e => setProfile(p => ({ ...p, nivel: e.target.value }))} aria-label="Nivel">{LEVEL_IDS.map(l => <option key={l} value={l}>{l}</option>)}</select>
        <button type="button" className="hr-chip" onClick={() => setPanel(panel === 'notebook' ? null : 'notebook')} aria-expanded={panel === 'notebook'}>📓 Cuaderno</button>
        <MusicVolume sound={sound} onSound={setSound} volume={musicVolume} onVolume={setMusicVolume} />
      </header>

      {!task && !panel && near && <button type="button" className="hr-near" onClick={() => openTask(near)}>E · {f(taskById(near)?.title ?? '')}</button>}
      {!task && !panel && !near && nextHint && has3d && <p className="hr-goal">Siguiente: <b>{f(nextHint.title)}</b> · {ROOMS.find(r => { const s = SPOTS[nextHint.id as keyof typeof SPOTS]; return s.x >= r.x0 && s.x <= r.x1 && s.z >= r.z0 && s.z <= r.z1 && r.id !== 'pasillo'; })?.name ?? ''}. Busca el círculo con el número {nextHint.mission}.</p>}

      {(panel === 'missions' || !has3d) && !task && <div className="hr-panel hr-missions" role="dialog" aria-label="Misiones">
        <div className="hr-card-head"><div><small>{profile.area}</small><h2>Las misiones de {profile.nombre}</h2></div>{has3d && <button type="button" className="hr-x" onClick={() => setPanel(null)} aria-label="Cerrar">×</button>}</div>
        <div className="hr-card-body">
          {MISSIONS.map(m => {
            const isOpen = missionOpen(m.n, state.done, state.unlocked);
            return <section key={m.n} className={`hr-mission${missionDone(m.n, state.done) ? ' is-done' : ''}${isOpen ? '' : ' is-locked'}`}>
              <h3><span style={{ background: ['', '#f6d21c', '#ff7a59', '#3fd08a', '#5aa8ff', '#c27bff', '#ff4f7a'][m.n] }}>{m.n}</span>{f(m.title)}</h3>
              <p>{m.goal} · <i>{m.room}</i></p>
              {isOpen ? <ul>{tasksOf(m.n).map(t => <li key={t.id}><button type="button" onClick={() => openTask(t.id)}>{state.done.includes(t.id) ? '✓' : '○'} {f(t.title)}</button></li>)}</ul>
                : <p className="hr-note">Se abre al terminar las misiones 1 a 5. <button type="button" className="hr-link" onClick={() => setState(s => ({ ...s, unlocked: true }))}>Abrirla ahora (profesor)</button></p>}
            </section>;
          })}
        </div>
      </div>}

      {panel === 'notebook' && !task && <Notebook state={state} profile={profile} onClose={() => setPanel(null)} />}

      {task && <TaskCard key={`${task.id}-${level}`} task={task} level={level} profile={profile} state={state} setState={setState} voice={sound} rate={rules.rate}
        onClose={() => setTaskId(null)} onReact={react}
        onDone={() => { setTaskId(null); react('laugh', 'celebrate', true); }} />}

      {allDone && !task && !panel && <div className="hr-panel hr-final" role="dialog" aria-label="Final">
        <div className="hr-card-head"><div><small>Misión 6 cumplida</small><h2>{f('¡{nombre} salvó la empresa!')}</h2></div></div>
        <div className="hr-card-body">
          <p>{f('Entrevistaste a dos candidatos, resolviste quejas, corregiste nóminas, anunciaste cambios, te enfrentaste a la dirección y sacaste a Caos y Asociados de su peor crisis. Todo en español.')}</p>
          <button type="button" className="hr-primary" onClick={() => setPanel('notebook')}>Ver mi cuaderno</button>
          {LEVEL_IDS.indexOf(level) < LEVEL_IDS.length - 1 && <button type="button" onClick={() => { setProfile(p => ({ ...p, nivel: LEVEL_IDS[LEVEL_IDS.indexOf(level) + 1] })); setStateRaw(s => ({ ...createState(), stats: s.stats })); }}>Jugar en {LEVEL_IDS[LEVEL_IDS.indexOf(level) + 1]}</button>}
        </div>
      </div>}
    </>}
  </main>;
}
