'use client';

// Roleplays del mundo hispano: the shared engine of the twenty country roleplay
// classes (A1–A2). Each scene has three moments: the model dialogue (read both
// parts aloud), «Tu turno» (the local asks, the student answers with the help
// the teacher chooses: choose a model answer, complete a frame, or speak freely)
// and «Cambio de roles» (the student asks the local's questions).
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { ClassicTopBar } from '../clasicas-ui/TopBar';
import { useAccessibleModal } from '../useAccessibleModal';
import { LOADERS } from './loaders';
import { paisBySlug } from './paises';
import type { CountryContent, Expression, Pair, Scene } from './types';
import '../clasicas-ui/clasicas.css';
import './roleplays.css';

type Tab = 'dialogo' | 'turno' | 'roles';
type Help = 'mucha' | 'poca' | 'nada';

const HELP: { id: Help; label: string; hint: string }[] = [
  { id: 'mucha', label: 'Mucha ayuda', hint: 'Elige una respuesta modelo y dila.' },
  { id: 'poca', label: 'Poca ayuda', hint: 'Completa la frase con una pieza.' },
  { id: 'nada', label: 'Sin ayuda', hint: 'Responde con tus palabras.' },
];

const HELP_PHRASES: { title: Pair; items: Pair[] }[] = [
  { title: ['Si no entiendes', 'If you do not understand'], items: [['¿Puedes repetir, por favor?', 'Can you repeat, please?'], ['Más despacio, por favor.', 'Slower, please.'], ['No entiendo esta palabra.', 'I do not understand this word.'], ['¿Qué significa…?', 'What does… mean?']] },
  { title: ['Si te falta una palabra', 'If you are missing a word'], items: [['¿Cómo se dice… en español?', 'How do you say… in Spanish?'], ['Es como…', 'It is like…'], ['No sé la palabra, pero…', 'I do not know the word, but…'], ['Un momento, por favor.', 'One moment, please.']] },
  { title: ['Para ganar tiempo', 'To buy time'], items: [['Mmm, a ver…', 'Hmm, let me see…'], ['Bueno…', 'Well…'], ['Es una buena pregunta.', 'That is a good question.'], ['Déjame pensar.', 'Let me think.']] },
  { title: ['Para seguir la conversación', 'To keep the conversation going'], items: [['¿Y tú?', 'And you?'], ['¿Y usted?', 'And you? (formal)'], ['¡Qué bien!', 'How nice!'], ['¿De verdad?', 'Really?']] },
];

const clean = (term: string) => term.replace(/[¡!¿?…]/g, '').trim();
const isLetter = (ch: string | undefined) => Boolean(ch && /\p{L}/u.test(ch));

/** Splits a line so the country's expressions can be highlighted. */
function useHighlighter(expresiones: Expression[]) {
  return useMemo(() => {
    const variants = expresiones.flatMap((item) => item.t.split(/\s*\/\s*/).map((v) => ({ v: clean(v), item }))).filter((x) => x.v.length > 1);
    variants.sort((a, b) => b.v.length - a.v.length);
    if (!variants.length) return (text: string): { parts: ReactNode[]; found: Expression[] } => ({ parts: [text], found: [] });
    const pattern = new RegExp(variants.map((x) => x.v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'giu');
    return (text: string) => {
      const parts: ReactNode[] = [];
      const found: Expression[] = [];
      let last = 0;
      for (const match of text.matchAll(pattern)) {
        const start = match.index ?? 0;
        const end = start + match[0].length;
        if (isLetter(text[start - 1]) || isLetter(text[end])) continue;
        const hit = variants.find((x) => x.v.toLocaleLowerCase('es') === match[0].toLocaleLowerCase('es'));
        if (!hit) continue;
        if (start > last) parts.push(text.slice(last, start));
        parts.push(<mark key={`${start}-${match[0]}`} className="rph-mark" title={hit.item.en}>{match[0]}</mark>);
        if (!found.includes(hit.item)) found.push(hit.item);
        last = end;
      }
      if (last < text.length) parts.push(text.slice(last));
      return { parts, found };
    };
  }, [expresiones]);
}

function Gloss({ pair, english, className = '' }: { pair: Pair; english: boolean; className?: string }) {
  return <span className={`rph-gloss ${className}`}><b>{pair[0]}</b>{english && <small lang="en">{pair[1]}</small>}</span>;
}

function scrollTop() {
  const smooth = !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
}

export default function Roleplays({ slug }: { slug: string }) {
  const pais = paisBySlug(slug);
  const [content, setContent] = useState<CountryContent | null>(null);
  const [failed, setFailed] = useState(false);
  const [current, setCurrent] = useState<number | null>(null);
  const [tab, setTab] = useState<Tab>('dialogo');
  const [help, setHelp] = useState<Help>('mucha');
  const [step, setStep] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [filled, setFilled] = useState<number | null>(null);
  const [idea, setIdea] = useState(false);
  const [english, setEnglish] = useState(true);
  const [drawer, setDrawer] = useState<'expresiones' | 'ayuda' | null>(null);
  const closeDrawer = () => setDrawer(null);
  const drawerRef = useAccessibleModal(Boolean(drawer), closeDrawer);

  useEffect(() => {
    let alive = true;
    LOADERS[slug]?.().then((mod) => { if (alive) setContent(mod.default); }, () => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [slug]);

  const highlight = useHighlighter(content?.expresiones ?? []);
  const scenes = content?.escenas ?? [];
  const scene: Scene | null = current === null ? null : scenes[current] ?? null;
  const resetStep = () => { setChosen(null); setFilled(null); setIdea(false); };
  const open = (index: number) => { setCurrent(index); setTab('dialogo'); setStep(0); resetStep(); scrollTop(); };
  const go = (dir: number) => { if (current !== null && scenes.length) open((current + dir + scenes.length) % scenes.length); };
  const toStep = (next: number) => { setStep(next); resetStep(); };
  const style = { '--cx-accent': pais.accent, '--rph-accent': pais.accent, '--rph-accent-2': pais.accent2 } as CSSProperties;
  const flag = `/roleplays-hispanos/banderas/${pais.flag}.svg`;
  const title = `Roleplays de ${pais.name}`;

  const englishToggle = <button type="button" className={`cx-chip rph-en-toggle${english ? ' is-accent' : ''}`} aria-pressed={english} onClick={() => setEnglish((v) => !v)}>{english ? 'Inglés: sí' : 'Inglés: no'}</button>;

  return <main className="cx rph" style={style}>
    <ClassicTopBar title={title} context="Conversación · A1–A2">{englishToggle}</ClassicTopBar>

    {scene === null ? <>
      <header className="rph-hero">
        <div className="rph-hero-copy cx-rise">
          <span className="cx-kicker">Roleplays · A1–A2 · {pais.variedad}</span>
          <h1>Roleplays de <em>{pais.name}</em></h1>
          <p className="rph-lead">Situaciones de la vida real con el español de {pais.name}: lee el diálogo, responde con la ayuda que necesites y después cambia de papel.</p>
          {english && <p className="rph-lead-en" lang="en">Real-life situations in the Spanish of {pais.name}: read the dialogue, answer with as much help as you need, then swap roles.</p>}
          <div className="rph-trato"><b>¿Tú, vos o usted?</b><Gloss pair={pais.trato} english={english} /></div>
          <ol className="rph-steps">
            <li><b>1 · Diálogo</b><span>Lean los dos papeles en voz alta.</span></li>
            <li><b>2 · Tu turno</b><span>Responde paso a paso, con mucha, poca o ninguna ayuda.</span></li>
            <li><b>3 · Cambio de roles</b><span>Ahora el alumno hace las preguntas.</span></li>
          </ol>
          <button type="button" className="cx-btn is-accent" onClick={() => setDrawer('expresiones')}>Expresiones de {pais.name}</button>
        </div>
        <div className="rph-hero-art" aria-hidden="true">
          <img className="rph-flag" src={flag} alt="" width="640" height="480" />
          {pais.hero.map((word, i) => <span key={word} className={`rph-bubble b${i}`}>{word}</span>)}
        </div>
      </header>

      <section className="rph-menu">
        <header><h2>Elige una situación</h2>{english && <p lang="en">Choose a situation</p>}</header>
        {failed && <p className="cx-teacher">No se pudieron cargar las escenas. Recarga la página.</p>}
        {!content && !failed && <p className="rph-loading">Cargando escenas…</p>}
        <div className="rph-grid">
          {scenes.map((item, index) => <button type="button" key={item.title} className="rph-card cx-card" onClick={() => open(index)}>
            <span className="rph-card-top"><i aria-hidden="true">{item.emoji}</i><small>{String(index + 1).padStart(2, '0')}</small></span>
            <h3>{item.title}</h3>
            {english && <em lang="en">{item.en}</em>}
            <Gloss pair={item.c} english={english} />
            <span className="rph-card-who">Con: {item.who[0]}</span>
          </button>)}
        </div>
      </section>
    </> : <section className="rph-class">
      <header className="rph-class-head">
        <button type="button" className="cx-btn" onClick={() => { setCurrent(null); scrollTop(); }}>← Todas las situaciones</button>
        <span className="cx-chip">Situación {current! + 1} de {scenes.length}</span>
      </header>
      <section className="rph-scene-title cx-rise">
        <i aria-hidden="true">{scene.emoji}</i>
        <div>
          <h1>{scene.title}</h1>
          {english && <span className="rph-scene-en" lang="en">{scene.en}</span>}
          <Gloss pair={scene.c} english={english} />
          <span className="rph-scene-who"><img src={flag} alt="" width="28" height="21" /> Hablas con: <b>{scene.who[0]}</b>{english && <small lang="en"> · {scene.who[1]}</small>}</span>
        </div>
      </section>

      <div className="cx-seg rph-tabs" role="tablist" aria-label="Momento de la escena">
        {([['dialogo', '1 · Diálogo'], ['turno', '2 · Tu turno'], ['roles', '3 · Cambio de roles']] as [Tab, string][]).map(([id, label]) => <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? 'is-on' : undefined} onClick={() => setTab(id)}>{label}</button>)}
      </div>

      {tab === 'dialogo' && <DialogueView scene={scene} english={english} highlight={highlight} onNext={() => { setTab('turno'); toStep(0); }} />}

      {tab === 'turno' && <section className="rph-panel" role="tabpanel">
        <div className="rph-help-row">
          <div className="cx-seg" role="radiogroup" aria-label="Cuánta ayuda">
            {HELP.map((h) => <button key={h.id} type="button" role="radio" aria-checked={help === h.id} className={help === h.id ? 'is-on' : undefined} onClick={() => { setHelp(h.id); resetStep(); }}>{h.label}</button>)}
          </div>
          <p>{HELP.find((h) => h.id === help)!.hint}</p>
        </div>
        <ol className="rph-dots" aria-label="Pasos">
          {scene.s.map((_, i) => <li key={i}><button type="button" aria-current={i === step ? 'step' : undefined} className={i === step ? 'is-on' : i < step ? 'is-done' : undefined} onClick={() => toStep(i)}>{i + 1}</button></li>)}
        </ol>
        <StepView key={`${current}-${step}-${help}`} pais={pais.name} scene={scene} index={step} help={help} english={english} chosen={chosen} setChosen={setChosen} filled={filled} setFilled={setFilled} idea={idea} setIdea={setIdea} />
        <footer className="rph-step-nav">
          <button type="button" className="cx-btn" disabled={step === 0} onClick={() => toStep(step - 1)}>← Paso anterior</button>
          {step < scene.s.length - 1
            ? <button type="button" className="cx-btn is-primary" onClick={() => toStep(step + 1)}>Siguiente paso →</button>
            : <button type="button" className="cx-btn is-accent" onClick={() => { setTab('roles'); scrollTop(); }}>Cambio de roles →</button>}
        </footer>
      </section>}

      {tab === 'roles' && <section className="rph-panel" role="tabpanel">
        <div className="rph-roles-intro cx-card">
          <h2>Ahora tú eres: {scene.who[0]}</h2>
          {english && <p lang="en">Now you are: {scene.who[1]}</p>}
          <p>Haz estas preguntas a tu profe. Tu profe responde como alumno, y a veces con una sorpresa.</p>
        </div>
        <ol className="rph-roles">
          {scene.s.map((item, i) => <li key={item.q[0]} className="cx-card"><span className="rph-letter">{i + 1}</span><Gloss pair={item.q} english={english} /></li>)}
        </ol>
        <p className="cx-teacher"><b>Para el profe</b>Responde con una sorpresa pequeña (no hay, es muy caro, cambias de idea) para que el alumno reaccione con las expresiones de la escena.</p>
      </section>}

      <footer className="rph-scene-nav">
        <button type="button" className="cx-btn" onClick={() => go(-1)}>← Anterior</button>
        <span>{current! + 1} / {scenes.length}</span>
        <button type="button" className="cx-btn" onClick={() => go(1)}>Siguiente →</button>
      </footer>
    </section>}

    <div className="rph-floating">
      <button type="button" className="cx-btn is-accent" onClick={() => setDrawer('expresiones')}><img src={flag} alt="" width="24" height="18" /> Expresiones</button>
      <button type="button" className="cx-btn" onClick={() => setDrawer('ayuda')}>Ayuda para hablar</button>
    </div>

    {drawer && <aside ref={drawerRef} tabIndex={-1} className="rph-drawer" role="dialog" aria-modal="true" aria-label={drawer === 'expresiones' ? `Expresiones de ${pais.name}` : 'Ayuda para hablar'} onMouseDown={(event) => { if (event.target === event.currentTarget) closeDrawer(); }}>
      <div className="rph-drawer-box">
        <header>
          <div>{drawer === 'expresiones' && <img src={flag} alt="" width="48" height="36" />}<h2>{drawer === 'expresiones' ? `Expresiones de ${pais.name}` : 'Ayuda para hablar'}</h2></div>
          <button type="button" className="cx-btn" onClick={closeDrawer}>Cerrar ×</button>
        </header>
        {drawer === 'expresiones'
          ? <div className="rph-expr">{(content?.expresiones ?? []).map((item) => <article key={item.t} className="cx-card">
            <header><h3>{item.t}</h3><span lang="en">{item.en}</span></header>
            <Gloss pair={item.uso} english={english} />
            <p className="rph-expr-ej"><Gloss pair={item.ej} english={english} /></p>
            {item.ojo && <p className="rph-ojo"><Gloss pair={item.ojo} english={english} /></p>}
          </article>)}</div>
          : <div className="rph-helpers">{HELP_PHRASES.map((group) => <section key={group.title[0]}><h3>{group.title[0]}{english && <small lang="en"> · {group.title[1]}</small>}</h3><ul>{group.items.map((pair) => <li key={pair[0]}><Gloss pair={pair} english={english} /></li>)}</ul></section>)}</div>}
      </div>
    </aside>}
  </main>;
}

function DialogueView({ scene, english, highlight, onNext }: { scene: Scene; english: boolean; highlight: (text: string) => { parts: ReactNode[]; found: Expression[] }; onNext: () => void }) {
  const lines = scene.d.map(([who, pair]) => ({ who, pair, ...highlight(pair[0]) }));
  const found = [...new Set(lines.flatMap((line) => line.found))];
  return <section className="rph-panel" role="tabpanel">
    <p className="cx-teacher"><b>Para el profe</b>Lean el diálogo dos veces: primero el profe es {scene.who[0].toLocaleLowerCase('es')} y el alumno es «Tú»; después, al revés.</p>
    <div className="rph-dialogue">
      {lines.map((line, i) => <article key={i} className={line.who === 'L' ? 'is-local' : 'is-tu'}>
        <span className="rph-who">{line.who === 'L' ? scene.who[0] : 'Tú'}</span>
        <p>{line.parts}</p>
        {english && <small lang="en">{line.pair[1]}</small>}
      </article>)}
    </div>
    {found.length > 0 && <aside className="rph-found cx-card">
      <h3>Expresiones de esta escena</h3>
      <ul>{found.map((item) => <li key={item.t}><b>{item.t}</b> <span lang="en">{item.en}</span></li>)}</ul>
    </aside>}
    <div className="rph-next"><button type="button" className="cx-btn is-primary" onClick={onNext}>Ir a Tu turno →</button></div>
  </section>;
}

function StepView({ pais, scene, index, help, english, chosen, setChosen, filled, setFilled, idea, setIdea }: {
  pais: string; scene: Scene; index: number; help: Help; english: boolean;
  chosen: number | null; setChosen: (n: number) => void; filled: number | null; setFilled: (n: number) => void; idea: boolean; setIdea: (v: boolean) => void;
}) {
  const item = scene.s[index];
  const [before, after = ''] = item.f[0].split('___');
  const [beforeEn, afterEn = ''] = item.f[1].split('___');
  const piece = filled === null ? null : item.w[filled];
  return <article className="rph-step cx-rise">
    <div className="rph-ask">
      <span className="rph-who">{scene.who[0]}</span>
      <p>{item.q[0]}</p>
      {english && <small lang="en">{item.q[1]}</small>}
    </div>

    {help === 'mucha' && <div className="rph-choose">
      <h3>Elige una respuesta y dila en voz alta</h3>
      <div className="rph-options">
        {item.a.map((answer, i) => <button type="button" key={answer[0]} className={`rph-option${chosen === i ? ' is-on' : ''}`} aria-pressed={chosen === i} onClick={() => setChosen(i)}>
          <span className="rph-letter">{String.fromCharCode(65 + i)}</span><Gloss pair={answer} english={english} />
        </button>)}
      </div>
      <p className="rph-or">¿Otra idea? Usa la frase: <b>{before}<u>…</u>{after}</b></p>
    </div>}

    {help === 'poca' && <div className="rph-frame">
      <h3>Completa la frase y dila</h3>
      <p className="rph-frame-line"><b>{before}</b><span className={`rph-gap${piece ? ' is-full' : ''}`}>{piece ? piece[0] : '…'}</span><b>{after}</b></p>
      {english && <small lang="en" className="rph-frame-en">{beforeEn}{piece ? piece[1] : '…'}{afterEn}</small>}
      <div className="rph-chips">
        {item.w.map((pieceItem, i) => <button type="button" key={pieceItem[0]} className={`rph-chip${filled === i ? ' is-on' : ''}`} aria-pressed={filled === i} onClick={() => setFilled(i)}>
          {pieceItem[0]}{english && <small lang="en">{pieceItem[1]}</small>}
        </button>)}
      </div>
      <p className="rph-or">También puedes decir otra cosa.</p>
    </div>}

    {help === 'nada' && <div className="rph-free">
      <h3>Responde con tus palabras</h3>
      <p>Una o dos frases son suficientes. Si puedes, usa una expresión de {pais}.</p>
      {idea ? <p className="rph-idea"><Gloss pair={item.a[0]} english={english} /></p> : <button type="button" className="cx-btn" onClick={() => setIdea(true)}>Ver una idea</button>}
    </div>}
  </article>;
}
