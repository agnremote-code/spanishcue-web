'use client';

// Clase clásica de conversación (2026-11-02): the shared engine of the ten
// classic conversation classes. A classic class is a bank of questions by
// category (like «Preguntas que dan ganas de hablar»), not an interaction:
// you choose the level, a category and a question, and you talk. Every class
// is authored at the seven levels A0–C2; A0 and A1 carry the English under
// the Spanish.
import { useEffect, useState, type CSSProperties } from 'react';
import { LEVEL_IDS, type Bi, type ClassicContent, type ClassicMeta, type LevelId } from './types';
import { ClassicTopBar } from '../clasicas-ui/TopBar';
import '../clasicas-ui/clasicas.css';
import './clasica.css';

const es = (v: Bi) => (typeof v === 'string' ? v : v.es);
const en = (v: Bi) => (typeof v === 'string' ? null : v.en);

function Text({ value, as: Tag = 'span', className }: { value: Bi; as?: 'span' | 'p' | 'h2'; className?: string }) {
  const english = en(value);
  return <Tag className={className}>{es(value)}{english && <small className="cc-en" lang="en">{english}</small>}</Tag>;
}

function readLevel(storageKey: string): LevelId | null {
  const ok = (v: string | null | undefined): v is LevelId => Boolean(v && (LEVEL_IDS as readonly string[]).includes(v));
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('nivel')?.toUpperCase();
    if (ok(fromUrl)) return fromUrl;
    const saved = window.localStorage.getItem(storageKey);
    if (ok(saved)) return saved;
  } catch { /* storage blocked: keep the default */ }
  return null;
}

export default function ClassicConversation({ meta, content }: { meta: ClassicMeta; content: ClassicContent }) {
  const storageKey = `spanishcue.clasica.${meta.slug}.level`;
  const [level, setLevel] = useState<LevelId>('B1');
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- restore the saved level after hydration
  useEffect(() => { const saved = readLevel(storageKey); if (saved) setLevel(saved); }, [storageKey]);
  const pick = (next: LevelId) => {
    setLevel(next); setSelected(null);
    try {
      window.localStorage.setItem(storageKey, next);
      const url = new URL(window.location.href); url.searchParams.set('nivel', next); window.history.replaceState(null, '', url);
    } catch { /* the level still changes for this visit */ }
  };
  const lesson = content[level];
  const categoria = lesson.categorias[Math.min(active, lesson.categorias.length - 1)];
  const choose = (i: number) => { setActive(i); setSelected(null); };
  const style = { '--cx-accent': meta.accent, '--cc-accent': meta.accent } as CSSProperties;
  const total = lesson.categorias.reduce((n, c) => n + c.questions.length, 0);

  const count = (n: number) => `${n} ${n === 1 ? 'pregunta' : 'preguntas'}`;
  const toCategories = () => document.getElementById('cc-cats')?.scrollIntoView({ behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });

  return <main className="cx cc" style={style}>
    <ClassicTopBar title={meta.title} context={meta.kicker}>
      <div className="cx-seg cc-levels" role="radiogroup" aria-label="Nivel">
        {LEVEL_IDS.map((id) => <button key={id} type="button" role="radio" aria-checked={id === level} className={id === level ? 'is-on' : undefined} onClick={() => pick(id)}>{id}</button>)}
      </div>
    </ClassicTopBar>
    <header className="cc-hero">
      <div className="cc-hero-text cx-rise">
        <p className="cx-kicker cc-kicker">{meta.kicker} · Nivel {level}</p>
        <h1>{meta.title}</h1>
        <Text value={lesson.intro} as="p" className="cc-intro" />
        <ol className="cc-howto" aria-label="Cómo funciona">
          <li><b>1</b>Elige una categoría</li>
          <li><b>2</b>Elige una pregunta</li>
          <li><b>3</b>Responde con una historia tuya</li>
        </ol>
        <div className="cc-hero-cta">
          <button type="button" className="cx-btn is-primary" onClick={toCategories}>Empezar a conversar <span aria-hidden="true">→</span></button>
          <span className="cx-chip">{lesson.categorias.length} categorías · {total} preguntas</span>
        </div>
      </div>
      <figure className="cc-art cx-rise"><img src={meta.image} alt="" width="1200" height="750" /></figure>
    </header>
    <nav className="cc-cats" id="cc-cats" aria-label="Categorías">
      <div className="cc-cats-track">
        {lesson.categorias.map((c, i) => <button key={i} type="button" aria-pressed={i === active} className={i === active ? 'is-on' : undefined} onClick={() => choose(i)}>
          <span className="cc-cat-icon" aria-hidden="true">{c.icon}</span>
          <span className="cc-cat-text"><b>{es(c.title)}</b><small>{count(c.questions.length)}</small></span>
        </button>)}
      </div>
    </nav>
    <div className="cc-body">
      <section className="cc-panel" aria-label={es(categoria.title)} key={`${level}-${active}`}>
        <div className="cc-panel-head cx-rise">
          <span className="cc-icon" aria-hidden="true">{categoria.icon}</span>
          <div><small>Categoría {String(active + 1).padStart(2, '0')} de {String(lesson.categorias.length).padStart(2, '0')}</small><Text value={categoria.title} as="h2" /></div>
        </div>
        {selected !== null && categoria.questions[selected] && <div className="cc-spotlight cx-rise" key={selected} aria-live="polite">
          <span className="cc-n">Pregunta {String(selected + 1).padStart(2, '0')}</span>
          <Text value={categoria.questions[selected]} as="p" />
          <i>Hablemos de esta</i>
        </div>}
        <div className="cc-qs">
          {categoria.questions.map((q, i) => <button key={i} type="button" aria-pressed={selected === i} className={`cx-rise${selected === i ? ' is-on' : ''}`} style={{ animationDelay: `${i * 45}ms` }} onClick={() => setSelected(selected === i ? null : i)}>
            <span className="cc-n">{String(i + 1).padStart(2, '0')}</span>
            <Text value={q} as="p" />
          </button>)}
        </div>
        <div className="cc-starters">
          <p>Para empezar a responder</p>
          <ul>{categoria.starters.map((s, i) => <li key={i}><Text value={s} /></li>)}</ul>
        </div>
        <div className="cc-move">
          <button type="button" className="cx-btn" disabled={active === 0} onClick={() => choose(active - 1)}><span aria-hidden="true">←</span> Categoría anterior</button>
          <button type="button" className="cx-btn is-primary cc-next" disabled={active === lesson.categorias.length - 1} onClick={() => choose(active + 1)}>Siguiente categoría <span aria-hidden="true">→</span></button>
        </div>
      </section>
      <aside className="cc-mascot" aria-hidden="true">
        <p>Una pregunta, una historia. Las preguntas de seguimiento salen de lo que cuenta tu alumno.</p>
        <img src="/brand/mascot/pointing.webp" alt="" width="900" height="1350" />
      </aside>
    </div>
  </main>;
}
