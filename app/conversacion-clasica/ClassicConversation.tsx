'use client';

// Clase clásica de conversación (2026-11-02): the shared engine of the ten
// classic conversation classes. A classic class is a bank of questions by
// category (like «Preguntas que dan ganas de hablar»), not an interaction:
// you choose the level, a category and a question, and you talk. Every class
// is authored at the seven levels A0–C2; A0 and A1 carry the English under
// the Spanish.
import Link from 'next/link';
import { useEffect, useState, type CSSProperties } from 'react';
import { LEVEL_IDS, type Bi, type ClassicContent, type ClassicMeta, type LevelId } from './types';
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
  const style = { '--cc-accent': meta.accent, '--cc-ink': meta.ink ?? '#14213d' } as CSSProperties;
  const total = lesson.categorias.reduce((n, c) => n + c.questions.length, 0);

  return <main className="cc" style={style}>
    <header className="cc-hero">
      <div className="cc-hero-text">
        <Link className="cc-back" href="/">← Biblioteca</Link>
        <p className="cc-kicker">{meta.kicker} · {level}</p>
        <h1>{meta.title}</h1>
        <Text value={lesson.intro} as="p" className="cc-intro" />
        <div className="cc-levels" role="radiogroup" aria-label="Nivel">
          {LEVEL_IDS.map((id) => <button key={id} type="button" role="radio" aria-checked={id === level} className={id === level ? 'is-on' : undefined} onClick={() => pick(id)}>{id}</button>)}
        </div>
        <p className="cc-howto">Elige una categoría. Elige una pregunta. Responde con una historia tuya. <b>{lesson.categorias.length} categorías · {total} preguntas</b></p>
      </div>
      <div className="cc-art"><img src={meta.image} alt="" width="1200" height="750" /></div>
    </header>
    <nav className="cc-cats" aria-label="Categorías">
      {lesson.categorias.map((c, i) => <button key={i} type="button" aria-pressed={i === active} className={i === active ? 'is-on' : undefined} onClick={() => choose(i)}>
        <span aria-hidden="true">{c.icon}</span> {es(c.title)}
      </button>)}
    </nav>
    <div className="cc-body">
      <section className="cc-panel" aria-label={es(categoria.title)} key={`${level}-${active}`}>
        <div className="cc-panel-head">
          <span className="cc-icon" aria-hidden="true">{categoria.icon}</span>
          <Text value={categoria.title} as="h2" />
          <b>{String(active + 1).padStart(2, '0')} / {lesson.categorias.length}</b>
        </div>
        <div className="cc-qs">
          {categoria.questions.map((q, i) => <button key={i} type="button" aria-pressed={selected === i} className={selected === i ? 'is-on' : undefined} onClick={() => setSelected(selected === i ? null : i)}>
            <span className="cc-n">{String(i + 1).padStart(2, '0')}</span>
            <Text value={q} as="p" />
            {selected === i && <i>HABLEMOS DE ESTA →</i>}
          </button>)}
        </div>
        <div className="cc-starters">
          <p>Para empezar a responder</p>
          <ul>{categoria.starters.map((s, i) => <li key={i}><Text value={s} /></li>)}</ul>
        </div>
        <div className="cc-move">
          <button type="button" disabled={active === 0} onClick={() => choose(active - 1)}>← Categoría anterior</button>
          <button type="button" className="cc-next" disabled={active === lesson.categorias.length - 1} onClick={() => choose(active + 1)}>Siguiente categoría →</button>
        </div>
      </section>
      <aside className="cc-mascot" aria-hidden="true"><img src="/brand/mascot/pointing.webp" alt="" width="900" height="1350" /></aside>
    </div>
  </main>;
}
