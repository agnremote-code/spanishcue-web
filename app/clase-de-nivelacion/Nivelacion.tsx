'use client';
import Link from 'next/link';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { SpanishCueBrand } from '../SpanishCueBrand';
import { accentSentence, accents, alphabet, cognates, consonants, countries, countryLine, DATA_YEAR, src, vowels, wordClip } from './content.mjs';
import { Flag } from './flags';
import '../grammar-classroom/live/live.css';
import './nivelacion.css';

export const LESSON_ID = 262;
const STORE = 'spanishcue:nivelacion:v1';
const LEVELS = ['Sin definir', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

type Ficha = {
  name: string; from: string; lives: string; job: string; native: string;
  reasons: string[]; improve: string[]; experience: string; variety: string; level: string;
  notes: string; frequency: number; plan: string; studentId?: string; recordId?: string;
};
const emptyFicha = (): Ficha => ({ name: '', from: '', lives: '', job: '', native: '', reasons: [], improve: [], experience: '', variety: '', level: 'Sin definir', notes: '', frequency: 2, plan: '' });
type SaveState = 'idle' | 'saving' | 'saved' | 'login' | 'error';

const REASONS = [['Trabajo', 'Work'], ['Estudios', 'Studies'], ['Viajes', 'Travel'], ['Placer', 'For fun'], ['Pareja o familia', 'Partner or family'], ['Mudanza', 'Moving abroad'], ['Examen', 'An exam'], ['Cultura', 'Culture']];
const IMPROVE = [['Hablar con fluidez', 'Fluency'], ['Pronunciación', 'Pronunciation'], ['Gramática', 'Grammar'], ['Vocabulario', 'Vocabulary'], ['Entender cuando me hablan', 'Listening'], ['Escribir', 'Writing']];
const EXPERIENCE = [['Empiezo de cero', 'Starting from zero'], ['Sé lo básico', 'I know the basics'], ['Estudié antes', 'I studied before'], ['Lo uso a veces', 'I use it sometimes']];
const VARIETY = [['Español neutro', 'Neutral Spanish'], ['España', 'Spain'], ['México', 'Mexico'], ['Rioplatense (Argentina y Uruguay)', 'Rioplatense'], ['Otro', 'Other']];
const NATIVE = ['Inglés', 'Portugués', 'Francés', 'Alemán', 'Italiano', 'Chino', 'Otra'];
const NATIONALITIES = [['Estados Unidos', 'estadounidense', 'estadounidense'], ['Reino Unido', 'británico', 'británica'], ['Canadá', 'canadiense', 'canadiense'], ['Australia', 'australiano', 'australiana'], ['Irlanda', 'irlandés', 'irlandesa'], ['Alemania', 'alemán', 'alemana'], ['Francia', 'francés', 'francesa'], ['Italia', 'italiano', 'italiana'], ['Brasil', 'brasileño', 'brasileña'], ['China', 'chino', 'china'], ['Japón', 'japonés', 'japonesa'], ['India', 'indio', 'india']];

const clip = (text: string, max: number) => (text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`);
/** What «Mis alumnos» shows as the student's goal. */
export function goalOf(f: Ficha) {
  return clip([f.reasons.length ? `Motivos: ${f.reasons.join(', ')}` : '', f.improve.length ? `Quiere mejorar: ${f.improve.join(', ')}` : '', `${f.frequency} ${f.frequency === 1 ? 'clase' : 'clases'} por semana`].filter(Boolean).join(' · '), 300);
}
/** The class record note: every answer plus the teacher's notes. */
export function noteOf(f: Ficha) {
  const rows: [string, string][] = [['De', f.from], ['Vive en', f.lives], ['Ocupación', f.job], ['Lengua materna', f.native], ['Motivos', f.reasons.join(', ')], ['Quiere mejorar', f.improve.join(', ')], ['Experiencia', f.experience], ['Español que le interesa', f.variety], ['Nivel estimado', f.level], ['Notas del profe', f.notes.replace(/\s*\n+\s*/g, ' / ')]];
  return clip(['Clase de nivelación', ...rows.filter(([, value]) => value.trim()).map(([label, value]) => `${label}: ${value.trim()}`)].join(' | '), 4000);
}
export const nextStepOf = (f: Ficha) => clip([`Plan: ${f.frequency} ${f.frequency === 1 ? 'clase' : 'clases'} por semana`, f.plan.replace(/\s*\n+\s*/g, ' / ').trim()].filter(Boolean).join(' · '), 1000);

/** **bold** only. */
const rich = (text: string): ReactNode => text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => (part.startsWith('**') ? <b key={i}>{part.slice(2, -2)}</b> : part));
const underline = (text: string, pattern: string): ReactNode => {
  const re = new RegExp(pattern, 'gi');
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(re)) {
    const at = match.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    out.push(<u key={at}>{match[0]}</u>);
    last = at + match[0].length;
  }
  out.push(text.slice(last));
  return out;
};
const MARK: Record<string, string> = { 'b-v': '[bv]', 'c-z': 'c(?=[eiéí])|z', 'c-k-q': 'c(?=[aouáóú])|qu|k', ch: 'ch', 'd-t-p': '[dtp]', 'g-gu': 'gu(?=[eiéí])|gü|g(?=[aouáóú])', 'g-j': 'j|g(?=[eiéí])', h: 'h', 'll-y': 'll|y', n: 'ñ', 'r-rr': 'rr|r', 'w-x': '[wx]' };
const PLAIN_ROWS = new Set(['seseo', 'distincion', 'rioplatense']);
const VOWEL_MARK: Record<string, string> = { A: '[aá]', E: '[eé]', I: '[ií]', O: '[oó]', U: '[uúü]' };

type Step = { key: string; title: string };
type Stage = { id: string; label: string; icon: string; title: string; steps: Step[] };
const STAGES: Stage[] = [
  { id: 'conocernos', label: 'Conocernos', icon: '👋', title: 'Conocernos', steps: [{ key: 'hoy', title: 'La clase de hoy' }, { key: 'quien', title: '¿Quién eres?' }, { key: 'porque', title: '¿Por qué estás aquí?' }, { key: 'ficha', title: 'Ficha del alumno' }] },
  { id: 'fonetica', label: 'Fonética', icon: '🔊', title: 'Fonética', steps: [{ key: 'vocales', title: 'Vocales' }, { key: 'ingles', title: 'Inglés y español' }, { key: 'abecedario', title: 'El abecedario' }, ...consonants.map(c => ({ key: `c:${c.id}`, title: c.nav })), { key: 'acentos', title: 'Acentos del mundo' }] },
  { id: 'paises', label: 'Países y nacionalidades', icon: '🌎', title: 'Países y nacionalidades', steps: [{ key: 'elegir', title: 'Elige un país' }, { key: 'azar', title: 'País sorpresa' }, { key: 'tu-pais', title: '¿Y tú?' }] },
  { id: 'cierre', label: 'Cierre', icon: '🎯', title: 'Cierre', steps: [{ key: 'metodo', title: 'Cómo trabajamos' }, { key: 'plan', title: 'Tu plan' }, { key: 'reservas', title: 'Reservas y cambios' }, { key: 'final', title: 'Próximo paso' }] },
];

const Ui = createContext<{ english: boolean; playing: string | null; play: (id: string) => void }>({ english: true, playing: null, play: () => undefined });
function En({ children }: { children: ReactNode }) { return useContext(Ui).english ? <span className="gl-en">{children}</span> : null; }
function Speak({ id, label, big }: { id: string; label?: string; big?: boolean }) {
  const { playing, play } = useContext(Ui);
  return <button type="button" className={`nv-speak${big ? ' is-big' : ''}`} data-clip={id} data-playing={playing === id} aria-label={label ?? 'Escuchar'} title="Escuchar" onClick={() => play(id)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" /><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>;
}
function Chips({ options, picked, onPick }: { options: string[][]; picked: (value: string) => boolean; onPick: (value: string) => void }) {
  const { english } = useContext(Ui);
  return <div className="nv-chips">{options.map(([es, en]) => <button type="button" key={es} className="nv-chip" aria-pressed={picked(es)} onClick={() => onPick(es)}><b>{es}</b>{english && en && <small>{en}</small>}</button>)}</div>;
}
function Teacher({ children }: { children: ReactNode }) { return <aside className="gl-teacher-note" data-teacher-note><b>Para el profe</b><p>{children}</p></aside>; }
function Field({ label, en, value, onChange, placeholder }: { label: string; en: string; value: string; onChange: (value: string) => void; placeholder?: string }) {
  const { english } = useContext(Ui);
  return <label className="nv-field"><span>{label}{english && <small>{en}</small>}</span><input type="text" value={value} maxLength={120} placeholder={placeholder} onChange={event => onChange(event.target.value)} /></label>;
}
function Frame({ children, en }: { children: ReactNode; en: string }) { return <li className="nv-frame"><p>{children}</p><En>{en}</En></li>; }
const gap = (hint: string, answer?: string | false) => <span className="nv-gap" data-filled={Boolean(answer)}>{answer || '\u00a0'}<small>{hint}</small></span>;

export default function Nivelacion() {
  const [at, setAt] = useState({ stage: 0, step: 0 });
  const [ficha, setFicha] = useState<Ficha>(emptyFicha);
  const [loaded, setLoaded] = useState(false);
  const [english, setEnglish] = useState(true);
  const [large, setLarge] = useState(false);
  const [menu, setMenu] = useState(false);
  const [save, setSave] = useState<SaveState>('idle');
  const [message, setMessage] = useState('');
  const [playing, setPlaying] = useState<string | null>(null);
  const [vowel, setVowel] = useState(0);
  const [country, setCountry] = useState<string | null>(null);
  const [answers, setAnswers] = useState(false);
  const [surprise, setSurprise] = useState<string | null>(null);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [accent, setAccent] = useState(accents[0].id);
  const audio = useRef<HTMLAudioElement | null>(null);
  const stageRef = useRef<HTMLElement>(null);
  const moved = useRef(false);
  const stage = STAGES[at.stage];
  const step = stage.steps[at.step];

  // The draft lives in this browser until the teacher creates the student.
  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORE) || 'null') as { ficha?: Partial<Ficha>; english?: boolean } | null;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved?.ficha) setFicha({ ...emptyFicha(), ...saved.ficha });
      if (typeof saved?.english === 'boolean') setEnglish(saved.english);
    } catch { /* a broken draft starts empty */ }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    try { window.localStorage.setItem(STORE, JSON.stringify({ ficha, english })); } catch { /* private mode */ }
  }, [ficha, english, loaded]);

  const set = useCallback(<K extends keyof Ficha>(key: K, value: Ficha[K]) => { setFicha(prev => ({ ...prev, [key]: value })); setSave(state => (state === 'saved' ? 'idle' : state)); }, []);
  const toggle = useCallback((key: 'reasons' | 'improve', value: string) => { setFicha(prev => ({ ...prev, [key]: prev[key].includes(value) ? prev[key].filter(item => item !== value) : [...prev[key], value] })); setSave(state => (state === 'saved' ? 'idle' : state)); }, []);

  const play = useCallback((id: string) => {
    const player = audio.current ?? (audio.current = new Audio());
    player.pause();
    player.onended = () => setPlaying(null);
    player.onerror = () => setPlaying(null);
    player.src = src(id);
    setPlaying(id);
    void player.play().catch(() => setPlaying(null));
  }, []);

  const go = useCallback((stageIndex: number, stepIndex = 0) => {
    const s = Math.max(0, Math.min(STAGES.length - 1, stageIndex));
    moved.current = true;
    setAt({ stage: s, step: Math.max(0, Math.min(STAGES[s].steps.length - 1, stepIndex)) });
    setMenu(false);
    audio.current?.pause();
    setPlaying(null);
  }, []);
  const forward = useCallback(() => { if (at.step < stage.steps.length - 1) go(at.stage, at.step + 1); else if (at.stage < STAGES.length - 1) go(at.stage + 1, 0); }, [at, go, stage.steps.length]);
  const back = useCallback(() => { if (at.step > 0) go(at.stage, at.step - 1); else if (at.stage > 0) go(at.stage - 1, STAGES[at.stage - 1].steps.length - 1); }, [at, go]);
  useEffect(() => {
    if (!moved.current) return;
    const panel = stageRef.current;
    if (!panel) return;
    const top = panel.getBoundingClientRect().top;
    if (top < 70 || top > window.innerHeight * 0.6) window.scrollTo({ top: window.scrollY + top - 84, behavior: 'smooth' });
  }, [at]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if ((event.target as HTMLElement | null)?.closest?.('input, textarea, select, [contenteditable="true"]')) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); forward(); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); back(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [forward, back]);

  /** Creates the student and the record of this class in «Mis alumnos», or updates both. */
  const saveStudent = useCallback(async () => {
    const alias = ficha.name.trim();
    if (!alias) { setSave('error'); setMessage('Escribe el nombre del alumno para crear su ficha.'); return; }
    setSave('saving'); setMessage('');
    const send = async (url: string, method: string, body: unknown) => {
      const response = await fetch(url, { method, credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
      const data = await response.json().catch(() => ({})) as { student?: { id: string }; record?: { id: string }; error?: string };
      if (response.status === 401) throw new Error('login');
      if (!response.ok) throw new Error(data.error || 'No pudimos guardar la ficha.');
      return data;
    };
    try {
      const student = { alias: clip(alias, 80), level: ficha.level, goal: goalOf(ficha) };
      const record = { pedagogicalNote: noteOf(ficha), nextStep: nextStepOf(ficha) };
      let studentId = ficha.studentId, recordId = ficha.recordId;
      if (studentId) await send(`/api/students/${studentId}`, 'PATCH', student);
      else studentId = (await send('/api/students', 'POST', student)).student?.id;
      if (!studentId) throw new Error('No pudimos crear el alumno.');
      if (recordId) await send(`/api/class-records/${recordId}`, 'PATCH', record);
      else recordId = (await send('/api/class-records', 'POST', { ...record, studentId, lessonId: LESSON_ID, startsAt: new Date().toISOString(), timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC', durationMinutes: 50, status: 'taught', requestKey: `nivelacion-${studentId}` })).record?.id;
      setFicha(prev => ({ ...prev, studentId, recordId }));
      setSave('saved');
    } catch (cause) {
      const text = cause instanceof Error ? cause.message : '';
      if (text === 'login') { setSave('login'); setMessage('Inicia sesión con tu cuenta de profe para guardar alumnos. La ficha queda guardada en este navegador.'); }
      else { setSave('error'); setMessage(text || 'No pudimos guardar la ficha.'); }
    }
  }, [ficha]);
  const startOver = useCallback(() => { setFicha(emptyFicha()); setSave('idle'); setMessage(''); go(0, 0); }, [go]);

  const saveLabel = save === 'saving' ? 'Guardando…' : ficha.studentId ? 'Guardar cambios' : 'Crear alumno';
  const saveBox = <div className="nv-save" data-save={save}>
    <button type="button" className="gl-primary" data-create-student disabled={save === 'saving'} onClick={saveStudent}>{saveLabel}</button>
    {ficha.studentId && <Link className="nv-link" href={`/cuenta?tab=alumnos&alumno=${ficha.studentId}`}>Ver en Mis alumnos →</Link>}
    <p className="nv-save-state" role="status">{save === 'saved' ? `✓ ${ficha.name.trim()} está en Mis alumnos, con sus objetivos y tus notas.` : message || (ficha.studentId ? 'Hay cambios sin guardar en la cuenta.' : 'La ficha se guarda sola en este navegador. «Crear alumno» la lleva a Mis alumnos.')}</p>
  </div>;
  const notes = (rows: number) => <label className="nv-notes"><b>Notas para el profe:</b><textarea rows={rows} value={ficha.notes} maxLength={3000} data-teacher-notes placeholder="Errores que se repiten, intereses, datos de su vida, ideas para las próximas clases…" onChange={event => set('notes', event.target.value)} /></label>;

  const selected = countries.find(c => c.id === country);
  const hidden = countries.find(c => c.id === surprise);
  const facts = (c: (typeof countries)[number]) => <dl className="nv-facts">
    <div><dt>Capital</dt><dd>{c.capital}{c.capitalNote && <small>{c.capitalNote}</small>}</dd></div>
    <div><dt>Gentilicio</dt><dd>{c.m === c.f ? c.m : `${c.m} / ${c.f}`}</dd></div>
    <div><dt>Habitantes</dt><dd>{c.people}</dd></div>
    <div><dt>Moneda</dt><dd>{c.money}</dd></div>
    <div><dt>Región</dt><dd>{c.region}</dd></div>
    <div className="is-wide"><dt>Un dato</dt><dd>{c.fact}</dd></div>
  </dl>;
  const frames = (c: (typeof countries)[number] | undefined, open: boolean) => {
    const of = c ? `${c.art}${c.name}` : '';
    return <ol className="nv-frames">
      <Frame en="The country is ___.">El país es {gap('country', open && c?.name)}.</Frame>
      <Frame en="The capital of ___ is ___.">La capital de {gap('country', open && of)} es {gap('capital', open && c?.capital)}.</Frame>
      <Frame en="People from ___ are called ___.">A las personas de {gap('country', open && of)} les dicen {gap('nationality', open && c && (c.m === c.f ? `${c.m}s` : `${c.m}s y ${c.f}s`))}.</Frame>
      <Frame en="In ___ there are ___ people.">En {gap('country', open && of)} viven {gap('number', open && c?.people)} de personas.</Frame>
      <Frame en="The currency of ___ is the ___.">La moneda de {gap('country', open && of)} es el {gap('currency', open && c?.money)}.</Frame>
    </ol>;
  };

  const body = (): ReactNode => {
    switch (step.key) {
      case 'hoy': return <>
        <div className="gl-lead"><p>Hoy no hay examen. Esta primera clase es un <b>diagnóstico</b>: conversamos, escucho cómo suenas y al final te cuento qué plan te conviene.</p><En>There is no test today. This first lesson is a check-up: we talk, I listen to how you sound, and at the end I tell you which plan suits you.</En></div>
        <ol className="nv-cards">
          <li><span>👋</span><h3>Nos conocemos</h3><p>Quién eres, por qué quieres aprender español y qué esperas de las clases.</p><En>Who you are, why you want Spanish and what you expect.</En></li>
          <li><span>🔊</span><h3>Escucho tu español</h3><p>Vocales, letras y sonidos: lo que ya te sale bien y lo que vamos a entrenar.</p><En>Vowels, letters and sounds: what already works and what we will train.</En></li>
          <li><span>🌎</span><h3>Hablamos del mundo hispano</h3><p>Países, capitales y nacionalidades, con frases completas desde el primer día.</p><En>Countries, capitals and nationalities, in full sentences from day one.</En></li>
          <li><span>🎯</span><h3>Armamos tu plan</h3><p>Objetivos claros, frecuencia de clases y cómo practicar entre una clase y otra.</p><En>Clear goals, how often we meet and how to practise between lessons.</En></li>
        </ol>
        <div className="gl-tip"><span>💡</span><div><h4>Los errores ayudan</h4><p>Cada error me muestra qué necesitas. No hace falta hablar perfecto: hace falta hablar.</p><En>Every mistake shows me what you need. You do not have to speak perfectly: you have to speak.</En></div></div>
        <Teacher>Tú cuentas en dos frases cómo será la clase y anotas a la derecha lo que escuchas desde el primer minuto. Tu alumno solo tiene que ponerse cómodo.</Teacher>
      </>;
      case 'quien': return <>
        <div className="gl-lead"><p>¿Quién eres?</p><En>Who are you?</En></div>
        <ol className="nv-frames">
          <Frame en="My name is ___.">Me llamo {gap('name', ficha.name.trim())}.</Frame>
          <Frame en="I am from ___.">Soy de {gap('country / city', ficha.from.trim())}.</Frame>
          <Frame en="I live in ___.">Vivo en {gap('city', ficha.lives.trim())}.</Frame>
          <Frame en="I am a ___ / I work in ___.">Soy {gap('job', ficha.job.trim())}.</Frame>
        </ol>
        <div className="nv-form">
          <Field label="Nombre" en="Name" value={ficha.name} onChange={value => set('name', value)} placeholder="Jack" />
          <Field label="¿De dónde eres?" en="Where are you from?" value={ficha.from} onChange={value => set('from', value)} placeholder="Estados Unidos" />
          <Field label="¿Dónde vives?" en="Where do you live?" value={ficha.lives} onChange={value => set('lives', value)} placeholder="Connecticut" />
          <Field label="¿A qué te dedicas?" en="What do you do?" value={ficha.job} onChange={value => set('job', value)} placeholder="estudiante de Psicología" />
        </div>
        <div><h4>Lengua materna{english && <small className="nv-h-en"> · Native language</small>}</h4><Chips options={NATIVE.map(item => [item])} picked={value => ficha.native === value} onPick={value => set('native', ficha.native === value ? '' : value)} /></div>
        <Teacher>Tú escribes las respuestas mientras tu alumno habla. Si empieza de cero, lee las frases guía de arriba y completa cada hueco.</Teacher>
      </>;
      case 'porque': return <>
        <div className="gl-lead"><p>¿Por qué estás aquí?</p><En>Why are you here?</En></div>
        <ol className="nv-frames">
          <Frame en="I want to learn Spanish for ___.">Quiero aprender español para {gap('reason', ficha.reasons.join(', ').toLowerCase())}.</Frame>
          <Frame en="I want to improve my ___.">Quiero mejorar {gap('skill', ficha.improve.join(', ').toLowerCase())}.</Frame>
        </ol>
        <div><h4>Motivos{english && <small className="nv-h-en"> · Reasons</small>}</h4><Chips options={REASONS} picked={value => ficha.reasons.includes(value)} onPick={value => toggle('reasons', value)} /></div>
        <div><h4>Quiero mejorar{english && <small className="nv-h-en"> · I want to improve</small>}</h4><Chips options={IMPROVE} picked={value => ficha.improve.includes(value)} onPick={value => toggle('improve', value)} /></div>
        <div><h4>Mi español hoy{english && <small className="nv-h-en"> · My Spanish today</small>}</h4><Chips options={EXPERIENCE} picked={value => ficha.experience === value} onPick={value => set('experience', ficha.experience === value ? '' : value)} /></div>
        <div><h4>El español que más me interesa{english && <small className="nv-h-en"> · The Spanish I care about most</small>}</h4><Chips options={VARIETY} picked={value => ficha.variety === value} onPick={value => set('variety', ficha.variety === value ? '' : value)} /></div>
        <Teacher>Tú marcas las opciones que nombra tu alumno; puede elegir varias. Lo que no entra en un botón va a las notas.</Teacher>
      </>;
      case 'ficha': return <>
        <div className="nv-sheet">
          <header><span className="nv-avatar">{(ficha.name.trim()[0] || '?').toUpperCase()}</span><div><h3>{ficha.name.trim() || 'Alumno nuevo'}</h3><p>{[ficha.from, ficha.lives && `vive en ${ficha.lives}`, ficha.job].filter(Boolean).join(' · ') || 'Completa «¿Quién eres?» para ver sus datos aquí.'}</p></div></header>
          <dl>
            <div><dt>Motivos</dt><dd>{ficha.reasons.join(', ') || '—'}</dd></div>
            <div><dt>Quiere mejorar</dt><dd>{ficha.improve.join(', ') || '—'}</dd></div>
            <div><dt>Experiencia</dt><dd>{ficha.experience || '—'}</dd></div>
            <div><dt>Español que le interesa</dt><dd>{ficha.variety || '—'}</dd></div>
            <div><dt>Lengua materna</dt><dd>{ficha.native || '—'}</dd></div>
            <div><dt>Nivel estimado</dt><dd><select value={ficha.level} data-level onChange={event => set('level', event.target.value)}>{LEVELS.map(level => <option key={level}>{level}</option>)}</select></dd></div>
          </dl>
          {notes(6)}
          {saveBox}
        </div>
        <Teacher>«Crear alumno» guarda a esta persona en Mis alumnos con sus objetivos, sus respuestas y tus notas. Después puedes seguir anotando y tocar «Guardar cambios».</Teacher>
      </>;
      case 'vocales': { const v = vowels[vowel]; return <>
        <div className="gl-lead"><p>El español tiene <b>cinco vocales</b> y cada una suena siempre igual.</p><En>Spanish has five vowels and each one always sounds the same.</En></div>
        <div className="nv-vowels" role="tablist" aria-label="Vocales">
          {vowels.map((item, i) => <button type="button" role="tab" key={item.letter} aria-selected={i === vowel} data-vowel={item.letter} style={{ '--nv-color': item.color } as CSSProperties} onClick={() => { setVowel(i); play(`${item.id}-letra`); }}>{item.letter}</button>)}
          <button type="button" className="nv-all" onClick={() => play('vocales-todas')} data-playing={playing === 'vocales-todas'}>▶ a · e · i · o · u</button>
        </div>
        <section className="nv-sound" style={{ '--nv-color': v.color } as CSSProperties} data-sound={v.id}>
          <header><span className="nv-letter">{v.letter}</span><div><p><b>{v.mouth}</b></p><p>{v.like}</p><En>{v.mouthEn} {v.likeEn}</En></div><Speak id={`${v.id}-letra`} big label={`Escuchar la ${v.letter}`} /></header>
          <div className="nv-row"><p>{underline(v.syllables.toUpperCase(), VOWEL_MARK[v.letter])}</p><Speak id={`${v.id}-silabas`} /></div>
          <div className="nv-row"><p>{underline(v.words.join(' · '), VOWEL_MARK[v.letter])}</p><Speak id={`${v.id}-palabras`} /></div>
          <div className="nv-row is-phrase"><p>{underline(v.phrase, VOWEL_MARK[v.letter])}<En>{v.phraseEn}</En></p><Speak id={`${v.id}-frase`} /></div>
        </section>
        <Teacher>Tú tocas la vocal, la clase la escucha y tu alumno la repite. Luego siguen las sílabas, las palabras y la frase. En las notas queda cada vocal que se le mueve.</Teacher>
      </>; }
      case 'ingles': return <>
        <div className="gl-lead"><p>El inglés escribe cinco vocales y pronuncia más de doce sonidos. El español escribe cinco y pronuncia <b>cinco</b>.</p><En>English writes five vowels and says more than twelve sounds. Spanish writes five and says five.</En></div>
        <div className="gl-table-wrap"><table className="gl-table"><thead><tr><th>Vocal</th><th>Ejemplos</th><th>Referencia en inglés</th><th aria-label="Audio" /></tr></thead><tbody>
          {vowels.map((item, i) => <tr key={item.letter}><td><b className="nv-dot" style={{ '--nv-color': item.color } as CSSProperties}>{item.letter}</b></td><td>{item.words.slice(0, 2).join(', ')}</td><td>{item.like}{english && <span className="gl-en">{item.likeEn}</span>}</td><td><Speak id={wordClip(['casa', 'mesa', 'vino', 'poco', 'luna'][i])} label={`Escuchar ${['casa', 'mesa', 'vino', 'poco', 'luna'][i]}`} /></td></tr>)}
        </tbody></table></div>
        <ol className="nv-cards is-three">
          <li><span>①</span><h3>Una letra, un sonido</h3><p>En inglés la <b>a</b> cambia: <i>cat, cake, father</i>. En español no: <b>casa, mapa, mañana</b>.</p><En>In English the letter a changes. In Spanish it never does.</En></li>
          <li><span>②</span><h3>Sin vocal «perezosa»</h3><p>El inglés relaja las vocales sin acento (la <i>schwa</i>: <i>ba-NA-na</i>). El español las dice todas claras: <b>ba-na-na</b>.</p><En>English relaxes unstressed vowels into a schwa. Spanish keeps every vowel clear.</En></li>
          <li><span>③</span><h3>Sin deslizar</h3><p>En inglés <i>no</i> termina en «u» y <i>day</i> termina en «i». En español la vocal se queda quieta: <b>no</b>, <b>de</b>.</p><En>English vowels glide (“no” ends in an oo sound). Spanish vowels stay still.</En></li>
        </ol>
        <div><h4>La misma palabra, otro sonido{english && <small className="nv-h-en"> · Same word, different sound</small>}</h4>
          <div className="nv-words">{cognates.map(word => <button type="button" key={word} data-playing={playing === wordClip(word)} onClick={() => play(wordClip(word))}>{word}</button>)}</div>
          <p className="gl-hint">Tu alumno dice la palabra en inglés, la clase la escucha en español y la repite con las vocales completas.</p></div>
        <div className="gl-tip"><span>🧠</span><div><h4>Por qué cuesta</h4><p>Tu cerebro lleva toda la vida aplicando las reglas del inglés sin que lo notes. No se trata de perder tu acento: se trata de sonar claro.</p><En>Your brain has applied English sound rules all your life without you noticing. The goal is not to lose your accent: it is to sound clear.</En></div></div>
      </>;
      case 'abecedario': return <>
        <div className="gl-lead"><p>El abecedario español tiene <b>27 letras</b>. Cada letra tiene un nombre.</p><En>The Spanish alphabet has 27 letters. Every letter has a name.</En></div>
        <div className="nv-abc">{alphabet.map(item => <button type="button" key={item.letter} data-letter={item.letter} data-playing={playing === item.clip} onClick={() => play(item.clip)}><b>{item.letter}</b><small>{item.name}</small></button>)}</div>
        <ol className="nv-frames">
          <Frame en="How do you spell your name? — It is spelled …">¿Cómo se escribe tu nombre? — Se escribe {gap('letters', ficha.name.trim() && ficha.name.trim().toUpperCase().split('').join(' · '))}.</Frame>
        </ol>
        <div className="gl-tip"><span>ℹ️</span><div><h4>CH y LL</h4><p><b>CH</b> y <b>LL</b> no son letras: son dígrafos, dos letras que forman un solo sonido. En el diccionario, «chico» está en la C y «llave» en la L.</p><En>CH and LL are not letters: they are digraphs, two letters for one sound.</En></div></div>
        <Teacher>Tú tocas una letra, la clase escucha su nombre y tu alumno la repite. Después deletrea su nombre y su apellido.</Teacher>
      </>;
      case 'acentos': { const a = accents.find(item => item.id === accent) ?? accents[0]; return <>
        <div className="gl-lead"><p>El español se habla en más de veinte países. Es <b>un solo idioma</b> con muchos acentos.</p><En>Spanish is spoken in more than twenty countries. It is one language with many accents.</En></div>
        <div className="nv-accent-tabs" role="tablist" aria-label="Acentos">{accents.map(item => <button type="button" role="tab" key={item.id} aria-selected={item.id === accent} data-accent={item.id} onClick={() => setAccent(item.id)}><Flag id={item.flag} /><span>{item.name}</span></button>)}</div>
        <section className="nv-sound" style={{ '--nv-color': '#1663d6' } as CSSProperties}>
          <header><span className="nv-letter is-flag"><Flag id={a.flag} /></span><div><p><b>{a.name}</b>{a.sub && ` · ${a.sub}`}</p><En>{a.en}</En></div></header>
          <div className="nv-row is-phrase"><p>{accentSentence}<En>My name is Julio. Yesterday I had chicken with rice on Zaragoza street, near the two squares.</En></p><Speak id={`acento-${a.id}`} big label={`Escuchar el acento de ${a.name}`} /></div>
          <ul className="nv-traits">{a.traits.map(trait => <li key={trait}>{rich(trait)}</li>)}</ul>
        </section>
        <p className="gl-hint">La frase es la misma en los siete acentos: escuchen dos seguidos y comparen la Y, la LL, la Z y las S finales.</p>
        <Teacher>Tú abres el acento que le interesa a tu alumno y lo comparas con otro. Es el momento de contar qué variedad vas a usar en tus clases.</Teacher>
      </>; }
      case 'elegir': return <>
        <div className="gl-lead"><p>Elige un país y cuéntame qué sabes de él.</p><En>Choose a country and tell me what you know about it.</En></div>
        <div className="nv-flags">{countries.map(c => <button type="button" key={c.id} data-country={c.id} aria-pressed={c.id === country} onClick={() => { setCountry(c.id); setAnswers(false); }}><Flag id={c.id} /><span>{c.name}</span></button>)}</div>
        {selected ? <section className="nv-country" data-country-card={selected.id}>
          <header><Flag id={selected.id} title={`Bandera de ${selected.name}`} /><div><h3>{selected.name}</h3><p>Datos aproximados de {DATA_YEAR}.</p></div><Speak id={`pais-${selected.id}`} big label={`Escuchar a alguien de ${selected.name}`} /></header>
          {facts(selected)}
          <p className="nv-heard">🎧 «{countryLine(selected)}»</p>
        </section> : <p className="gl-hint">Toca una bandera para abrir su ficha.</p>}
        <div><div className="gl-card-head"><h3>Ahora dilo tú</h3><button type="button" className="gl-chip-button" data-show-answers aria-pressed={answers} disabled={!selected} onClick={() => setAnswers(value => !value)}>{answers ? 'Ocultar respuestas' : 'Mostrar respuestas'}</button></div>{frames(selected, answers)}</div>
        <Teacher>Tu alumno elige la bandera, lee la ficha y arma cada frase en voz alta. Tú muestras las respuestas solo al final.</Teacher>
      </>;
      case 'azar': return <>
        <div className="gl-lead"><p>¿Qué país es? Mira la bandera y di todo lo que recuerdes.</p><En>Which country is it? Look at the flag and say everything you remember.</En></div>
        <div className="gl-row"><button type="button" className="gl-primary" data-surprise onClick={() => { const pool = countries.filter(c => c.id !== surprise); setSurprise(pool[Math.floor(Math.random() * pool.length)].id); setSurpriseOpen(false); }}>🎲 País sorpresa</button>{hidden && <button type="button" className="gl-chip-button" aria-pressed={surpriseOpen} onClick={() => setSurpriseOpen(value => !value)}>{surpriseOpen ? 'Ocultar la ficha' : 'Mostrar la ficha'}</button>}</div>
        {hidden && <section className="nv-country is-surprise"><header><Flag id={hidden.id} /><div><h3>{surpriseOpen ? hidden.name : '¿ … ?'}</h3><p>{surpriseOpen ? `Datos aproximados de ${DATA_YEAR}.` : 'Primero tu alumno, después la ficha.'}</p></div>{surpriseOpen && <Speak id={`pais-${hidden.id}`} big />}</header>{surpriseOpen && facts(hidden)}</section>}
        {frames(hidden, surpriseOpen)}
      </>;
      case 'tu-pais': return <>
        <div className="gl-lead"><p>¿Y tú? ¿De dónde eres?</p><En>And you? Where are you from?</En></div>
        <ol className="nv-frames">
          <Frame en="I am from ___.">Yo soy de {gap('country', ficha.from.trim())}.</Frame>
          <Frame en="I am ___ (nationality).">Soy {gap('nationality')}.</Frame>
          <Frame en="The capital of my country is ___.">La capital de mi país es {gap('capital')}.</Frame>
          <Frame en="In my country people speak ___.">En mi país se habla {gap('language', ficha.native && ficha.native !== 'Otra' && ficha.native.toLowerCase())}.</Frame>
        </ol>
        <div className="gl-table-wrap"><table className="gl-table"><thead><tr><th>País</th><th>Él es…</th><th>Ella es…</th></tr></thead><tbody>{NATIONALITIES.map(([place, m, f]) => <tr key={place}><td>{place}</td><td>{m}</td><td>{f}</td></tr>)}</tbody></table></div>
        <div className="gl-tip"><span>✏️</span><div><h4>Masculino y femenino</h4><p><b>-o → -a</b> (italiano, italiana). Consonante <b>+ a</b> (alemán, alemana). Con <b>-e</b> o <b>-ense</b> no cambia (canadiense). Y se escriben con minúscula.</p><En>-o becomes -a; a final consonant adds -a; -e and -ense do not change. Nationalities are not capitalised.</En></div></div>
      </>;
      case 'metodo': return <>
        <div className="gl-lead"><p>Así son mis clases.</p><En>This is how my lessons work.</En></div>
        <ol className="nv-cards">
          <li><span>💬</span><h3>Primero, hablar</h3><p>La mayor parte de la clase hablas tú. La gramática aparece cuando la necesitas para decir algo.</p><En>You do most of the talking. Grammar shows up when you need it to say something.</En></li>
          <li><span>🧩</span><h3>Materiales propios</h3><p>Trabajamos con SpanishCue: clases interactivas de gramática, conversación, escucha y fonética que comparto en pantalla.</p><En>We work with SpanishCue: interactive grammar, conversation, listening and phonetics lessons I share on screen.</En></li>
          <li><span>📝</span><h3>Corrección sin cortar</h3><p>No te interrumpo a cada error. Anoto, y al final vemos juntos los dos o tres que más importan.</p><En>I do not interrupt every mistake. I take notes and we review the two or three that matter most.</En></li>
          <li><span>📚</span><h3>Práctica entre clases</h3><p>Después de cada clase recibes tarea en SpanishCue para repasar a tu ritmo, con audio.</p><En>After each lesson you get homework on SpanishCue to review at your own pace, with audio.</En></li>
        </ol>
        <div className="gl-tip"><span>🎧</span><div><h4>A tu medida</h4><p>Los temas salen de tu vida: tu trabajo, tus estudios, tus viajes y la variedad de español que quieres hablar.</p><En>Topics come from your life: your job, your studies, your trips and the variety of Spanish you want to speak.</En></div></div>
      </>;
      case 'plan': return <>
        <div className="gl-lead"><p>Tu plan{ficha.name.trim() ? `, ${ficha.name.trim()}` : ''}.</p><En>Your plan.</En></div>
        <div><h4>Vamos a trabajar en{english && <small className="nv-h-en"> · We will work on</small>}</h4><Chips options={IMPROVE} picked={value => ficha.improve.includes(value)} onPick={value => toggle('improve', value)} /></div>
        <div><h4>Frecuencia{english && <small className="nv-h-en"> · How often</small>}</h4>
          <div className="nv-frequency">{[[1, 'Mantener', 'Para no perder el contacto con el idioma.', 'To stay in touch with the language.'], [2, 'Avanzar', 'El ritmo que recomiendo: llegas con lo anterior todavía fresco.', 'The pace I recommend: the last lesson is still fresh.'], [3, 'Acelerar', 'Para una fecha cercana: un viaje, una mudanza, un examen.', 'For a close deadline: a trip, a move, an exam.']].map(([n, title, text, en]) => <button type="button" key={n} aria-pressed={ficha.frequency === n} data-frequency={n} onClick={() => set('frequency', n as number)}><b>{n}</b><span>{n === 1 ? 'clase por semana' : 'clases por semana'}</span><em>{title}</em><p>{text}</p>{english && <small>{en}</small>}<i>{(n as number) * 4} clases cada 4 semanas</i></button>)}</div></div>
        <label className="nv-notes"><b>Primeros objetivos:</b><textarea rows={4} maxLength={900} value={ficha.plan} data-plan placeholder="1. Presentarse y hablar de su rutina sin traducir. 2. Vocales claras. 3. …" onChange={event => set('plan', event.target.value)} /></label>
        <Teacher>Tú propones dos o tres objetivos concretos con las palabras que usó tu alumno y los escribes aquí. Quedan guardados como próximo paso en su ficha.</Teacher>
      </>;
      case 'reservas': return <>
        <div className="gl-lead"><p>Reservas, cambios y pagos.</p><En>Booking, changes and payments.</En></div>
        <ol className="nv-cards is-three">
          <li><span>📅</span><h3>Horario fijo</h3><p>Elegimos días y horas que se repiten cada semana. Con {ficha.frequency} {ficha.frequency === 1 ? 'clase' : 'clases'} por semana son <b>{ficha.frequency * 4} clases cada 4 semanas</b>.</p><En>We choose days and times that repeat every week.</En></li>
          <li><span>🔁</span><h3>Reprogramar</h3><p>Puedes mover una clase desde la plataforma hasta <b>12 horas antes</b>, si hay otro horario libre. Con menos de 12 horas, la clase cuenta como dada.</p><En>You can move a lesson on the platform up to 12 hours before it starts. With less notice, the lesson counts as taken.</En></li>
          <li><span>💳</span><h3>Suscripción</h3><p>En Preply la suscripción se renueva cada 4 semanas. La plataforma gestiona los pagos y puedes cambiar la cantidad de clases.</p><En>On Preply the subscription renews every 4 weeks. The platform handles payments and you can change the number of lessons.</En></li>
        </ol>
        <div className="gl-tip"><span>✉️</span><div><h4>Si surge algo</h4><p>Me escribes por el chat de la plataforma. Si necesitas ayuda con la reserva, te mando la guía paso a paso.</p><En>Message me on the platform chat. If you need help booking, I will send you the step-by-step guide.</En></div></div>
        <Teacher>Esta página describe las reglas de Preply. Si trabajas por tu cuenta, cuenta aquí tus propias condiciones.</Teacher>
      </>;
      default: return <>
        <div className="gl-lead"><p>{ficha.name.trim() ? `${ficha.name.trim()}, este` : 'Este'} es tu punto de partida.</p><En>This is your starting point.</En></div>
        <div className="nv-sheet is-final">
          <dl>
            <div><dt>Tu objetivo</dt><dd>{ficha.reasons.join(', ') || '—'}</dd></div>
            <div><dt>Vamos a trabajar en</dt><dd>{ficha.improve.join(', ') || '—'}</dd></div>
            <div><dt>Tu plan</dt><dd>{ficha.frequency} {ficha.frequency === 1 ? 'clase' : 'clases'} por semana · {ficha.frequency * 4} cada 4 semanas</dd></div>
            <div className="is-wide"><dt>Primeros objetivos</dt><dd>{ficha.plan.trim() || '—'}</dd></div>
          </dl>
        </div>
        <ol className="nv-cards is-three">
          <li><span>1</span><h3>Elegimos tus horarios</h3><p>Miramos el calendario y reservamos las próximas clases.</p><En>We look at the calendar and book your next lessons.</En></li>
          <li><span>2</span><h3>Recibes tu primera tarea</h3><p>Un repaso corto de lo que vimos hoy, para hacer antes de la próxima clase.</p><En>A short review of today, to do before the next lesson.</En></li>
          <li><span>3</span><h3>Empezamos</h3><p>La próxima clase arranca donde terminamos hoy, con tu plan sobre la mesa.</p><En>The next lesson starts where we finished today, with your plan on the table.</En></li>
        </ol>
        {saveBox}
        <button type="button" className="gl-link" data-new-ficha onClick={startOver}>Empezar una ficha nueva para otro alumno</button>
        <Teacher>Tú cierras con una pregunta concreta: «¿Miramos el calendario y dejamos reservadas las próximas clases?».</Teacher>
      </>;
    }
  };

  const consonant = step.key.startsWith('c:') ? consonants.find(c => `c:${c.id}` === step.key) : undefined;
  const content = consonant ? <>
    <section className="nv-sound" style={{ '--nv-color': consonant.color } as CSSProperties} data-sound={consonant.id}>
      <header><div className="nv-letters">{consonant.letters.map(([letter, name], i) => <span key={letter} className="nv-letter-group">{i > 0 && <em>{consonant.equals ? '=' : '·'}</em>}<span className="nv-letter"><small>{name}</small>{letter}</span></span>)}</div><span className="nv-ipa"><small>Sonido</small>{consonant.ipa}</span></header>
      <div className="nv-rule"><p>{rich(consonant.rule)}</p><En>{consonant.ruleEn}</En></div>
      {consonant.rows.map(([key, label]) => <div className={`nv-row${key === 'frase' ? ' is-phrase' : ''}`} key={key}><p>{PLAIN_ROWS.has(key) ? label : underline(label, MARK[consonant.id])}</p><Speak id={`${consonant.id}-${key}`} /></div>)}
    </section>
    <div className="gl-tip"><span>👂</span><div><h4>Ojo</h4><p>{rich(consonant.tip)}</p><En>{consonant.tipEn}</En></div></div>
    <Teacher>Tú tocas el altavoz, la clase escucha y tu alumno repite: primero las sílabas, después las palabras y al final la frase.</Teacher>
  </> : body();

  const isFirst = at.stage === 0 && at.step === 0;
  const isLast = at.stage === STAGES.length - 1 && at.step === stage.steps.length - 1;
  const nextLabel = at.step < stage.steps.length - 1 ? stage.steps[at.step + 1].title : STAGES[at.stage + 1]?.label;
  const style = useMemo(() => ({ '--gl-level': '#1663d6' }) as CSSProperties, []);

  const ui = useMemo(() => ({ english, playing, play }), [english, playing, play]);
  return <Ui.Provider value={ui}><div className="gl-shell nv-shell" style={style} data-nivelacion data-large-text={large}>
    <header className="gl-topbar">
      <Link href="/" className="gl-brand" aria-label="SPANISHCUE, volver a la biblioteca"><SpanishCueBrand variant="compact" context="NIVELACIÓN" /></Link>
      <div className="gl-tools">
        <button type="button" data-tool="english" aria-pressed={english} onClick={() => setEnglish(value => !value)} title="Mostrar u ocultar la ayuda en inglés">EN</button>
        <button type="button" data-tool="large" aria-pressed={large} onClick={() => setLarge(value => !value)} title="Texto más grande">A+</button>
      </div>
    </header>
    <section className="gl-hero">
      <p className="gl-kicker"><span className="gl-level-pill">Primera clase</span> Clase de prueba · 50 min</p>
      <h1>Clase de nivelación</h1>
      <p className="gl-hero-sub">Conocer a tu alumno, escuchar cómo suena, hablar del mundo hispano y salir con un plan. Todo lo que anotas queda en su ficha.</p>
    </section>
    <div className="gl-layout nv-layout">
      <div className="gl-nav">
        <div className="gl-nav-bar"><button type="button" className="gl-nav-toggle" aria-expanded={menu} aria-controls="gl-stages" onClick={() => setMenu(value => !value)}><i>{String(at.stage + 1).padStart(2, '0')}</i><span><b>{stage.label}</b><small>{step.title}</small></span><em aria-hidden="true">{menu ? '▴' : '▾'}</em></button></div>
        <nav className={`gl-stages ${menu ? 'is-open' : ''}`} id="gl-stages" aria-label="Secciones de la clase">
          <ol>{STAGES.map((s, i) => <li key={s.id} className={i === at.stage ? 'is-current' : ''}>
            <button type="button" data-stage={s.id} aria-current={i === at.stage ? 'step' : undefined} onClick={() => go(i, 0)}><i>{String(i + 1).padStart(2, '0')}</i><span>{s.label}</span></button>
            {i === at.stage && <ol className="gl-substeps">{s.steps.map((st, j) => <li key={st.key}><button type="button" data-step={j} aria-current={j === at.step ? 'true' : undefined} onClick={() => go(i, j)}>{st.title}</button></li>)}</ol>}
          </li>)}</ol>
        </nav>
      </div>
      <main className="gl-stage" ref={stageRef} tabIndex={-1}>
        <header className="gl-stage-head nv-stage-head">
          <span className="gl-stage-icon" aria-hidden="true">{stage.icon}</span>
          <div><small>{String(at.stage + 1).padStart(2, '0')} · {stage.label} · {at.step + 1}/{stage.steps.length}</small><h2>{step.title}</h2></div>
        </header>
        <div className="gl-stage-body"><div className="gl-step" key={step.key} data-step-key={step.key}>{content}</div></div>
        <footer className="gl-stage-foot">
          <button type="button" className="gl-ghost" data-prev disabled={isFirst} onClick={back} aria-label="Anterior">←<span className="gl-long"> Anterior</span></button>
          {isLast ? <Link className="gl-primary" href="/">Volver a la biblioteca</Link> : <button type="button" className="gl-primary" data-next onClick={forward}><span className="gl-long">{nextLabel}</span><span className="gl-short">Siguiente</span> →</button>}
        </footer>
      </main>
      <aside className="nv-rail" aria-label="Notas del profe">
        <p className="nv-rail-name"><span className="nv-avatar">{(ficha.name.trim()[0] || '?').toUpperCase()}</span><b>{ficha.name.trim() || 'Alumno nuevo'}</b></p>
        {notes(9)}
        <div className="nv-rail-save" data-save={save}>
          <button type="button" className="gl-primary" disabled={save === 'saving'} onClick={saveStudent}>{saveLabel}</button>
          <small role="status">{save === 'saved' ? '✓ Guardado en Mis alumnos' : save === 'login' ? 'Inicia sesión para guardar en tu cuenta.' : save === 'error' ? message : 'Guardado en este navegador'}</small>
        </div>
      </aside>
    </div>
  </div></Ui.Provider>;
}
