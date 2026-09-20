"use client";

import Link from "next/link";
import { useMemo, useState, type CSSProperties, type KeyboardEvent } from "react";
import { mexicoEntities, mexicoIdealCategories, mexicoModes, mexicoPromptCount, mexicoRegionNames, type MexicoEntity, type MexicoRegion } from "./data";
import { mexicoShapes } from "./map-data";
import "./style.css";

type Screen = "cover" | "atlas" | "entity";
type Mode = (typeof mexicoModes)[number];
type Ideal = Partial<Record<(typeof mexicoIdealCategories)[number], string>>;

const byCode = new Map(mexicoEntities.map((entity) => [entity.code, entity]));
const allCodes = new Set(mexicoEntities.map((entity) => entity.code));
const randomEntityExcept = (code: string) => {
  const pool = mexicoEntities.filter((entity) => entity.code !== code);
  return pool[Math.floor(Math.random() * pool.length)] || mexicoEntities[0];
};

function MexicoMap({ active, visibleCodes, visited, onSelect, compact = false }: {
  active: MexicoEntity;
  visibleCodes: Set<string>;
  visited: Set<string>;
  onSelect: (entity: MexicoEntity) => void;
  compact?: boolean;
}) {
  const activate = (code: string) => {
    const entity = byCode.get(code);
    if (entity && visibleCodes.has(code)) onSelect(entity);
  };
  const keySelect = (event: KeyboardEvent<SVGGElement>, code: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activate(code);
    }
  };
  return <div className={`mx-map-stage${compact ? " compact" : ""}`}>
    <div className="mx-map-shadow" aria-hidden="true" />
    <svg viewBox="0 0 1000 620" role="img" aria-label="Mapa interactivo de las 31 entidades federativas y Ciudad de México">
      <defs>
        <linearGradient id={`mx-side-${compact ? "mini" : "main"}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#173e45" /><stop offset="1" stopColor="#06171b" /></linearGradient>
        <filter id={`mx-glow-${compact ? "mini" : "main"}`} x="-40%" y="-40%" width="180%" height="190%"><feGaussianBlur stdDeviation="7" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <text x="105" y="430" className="mx-water">PACÍFICO</text><text x="845" y="305" className="mx-water">GOLFO</text>
      {mexicoShapes.map((shape) => {
        const entity = byCode.get(shape.code);
        if (!entity) return null;
        const visible = visibleCodes.has(entity.code);
        const selected = active.code === entity.code;
        return <g
          key={shape.code}
          className={["mx-entity", selected ? "selected" : "", visited.has(entity.code) ? "visited" : "", visible ? "" : "filtered"].filter(Boolean).join(" ")}
          role="button"
          tabIndex={visible ? 0 : -1}
          aria-label={`${entity.name}. Capital: ${entity.capital}`}
          aria-pressed={selected}
          onClick={() => activate(shape.code)}
          onKeyDown={(event) => keySelect(event, shape.code)}
          style={{ "--entity": entity.color, "--mx-filter": `url(#mx-glow-${compact ? "mini" : "main"})` } as CSSProperties}
        >
          {[14, 10, 6].map((offset) => <path key={offset} d={shape.d} transform={`translate(0 ${offset})`} className="mx-entity-side" fill={`url(#mx-side-${compact ? "mini" : "main"})`} fillRule="evenodd" />)}
          <path d={shape.d} className="mx-entity-top" fillRule="evenodd" />
          {!compact && <circle className="mx-hit" cx={shape.cx} cy={shape.cy} r={entity.code === "MX-CMX" || entity.code === "MX-TLA" ? 15 : 7} />}
          {!compact && <text x={shape.cx} y={shape.cy + 3} className="mx-code">{entity.code.replace("MX-", "")}</text>}
        </g>;
      })}
    </svg>
  </div>;
}

function ModePanel({ mode, active, onOpen, ideal, setIdeal }: {
  mode: Mode;
  active: MexicoEntity;
  onOpen: (entity: MexicoEntity) => void;
  ideal: Ideal;
  setIdeal: (ideal: Ideal) => void;
}) {
  const alternatives = useMemo(() => {
    const index = mexicoEntities.findIndex((entity) => entity.code === active.code);
    return [active, mexicoEntities[(index + 11) % mexicoEntities.length], mexicoEntities[(index + 23) % mexicoEntities.length]];
  }, [active]);
  if (mode === "EXPLORAR") return <div className="mx-mode-note"><b>Elegí cualquiera de las 32 piezas.</b><span>Cada territorio abre contexto breve, vocabulario, cinco preguntas B1 y repreguntas opcionales.</span></div>;
  if (mode === "ELEGÍ ENTRE DOS") return <section className="mx-mode-challenge"><span>DECISIÓN RÁPIDA</span><h3>¿Una semana en {alternatives[0].name} o en {alternatives[1].name}?</h3><p>Elegí primero. Después explicá qué ritmo, paisaje y tipo de vida pesaron en tu decisión.</p><div>{alternatives.slice(0, 2).map((entity) => <button key={entity.code} onClick={() => onOpen(entity)}>{entity.name}<small>{entity.contrast.join(" · ")}</small></button>)}</div></section>;
  if (mode === "¿DÓNDE VIVIRÍAS?") return <section className="mx-mode-challenge"><span>VIVIR DURANTE UN AÑO</span><h3>Tres estilos. Una dirección.</h3><p>Compará trabajo, vivienda, movilidad, clima y tiempo libre antes de decidir.</p><div>{alternatives.map((entity) => <button key={entity.code} onClick={() => onOpen(entity)}>{entity.name}<small>{entity.lifestyle}</small></button>)}</div></section>;
  if (mode === "TU PAÍS VS MÉXICO") return <section className="mx-mode-challenge"><span>COMPARACIÓN PERSONAL</span><h3>{active.name} vs. tu país</h3><p>¿Dónde sería más fácil moverte, conocer gente, descansar y organizar un fin de semana? Usá ejemplos de tu vida: no necesitás saber nada más de México.</p><button onClick={() => onOpen(active)}>ABRIR LAS 5 PREGUNTAS DE {active.name.toUpperCase()} →</button></section>;
  if (mode === "TU MÉXICO IDEAL") return <section className="mx-ideal"><span>CIERRE · TU MÉXICO IDEAL</span><h3>Cinco decisiones para diseñar tu mapa personal.</h3><div>{mexicoIdealCategories.map((category) => <label key={category}><b>Para {category}</b><select value={ideal[category] || ""} onChange={(event) => setIdeal({ ...ideal, [category]: event.target.value })}><option value="">Elegí una entidad</option>{mexicoEntities.map((entity) => <option key={entity.code} value={entity.code}>{entity.name}</option>)}</select></label>)}</div><p>{Object.values(ideal).filter(Boolean).length === 5 ? "Tu mapa está completo. Explicá qué conecta estas cinco decisiones y cuál fue la más difícil." : "Completá el mapa y defendé cada elección con una razón personal."}</p></section>;
  return null;
}

export default function MexicoLesson() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [active, setActive] = useState<MexicoEntity>(mexicoEntities[6]);
  const [region, setRegion] = useState<"todas" | MexicoRegion>("todas");
  const [query, setQuery] = useState("");
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [mode, setMode] = useState<Mode>("EXPLORAR");
  const [question, setQuestion] = useState(0);
  const [ideal, setIdeal] = useState<Ideal>({});
  const visible = useMemo(() => mexicoEntities.filter((entity) => {
    const text = `${entity.name} ${entity.capital} ${entity.hook} ${entity.visual} ${entity.lifestyle}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const search = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return (region === "todas" || entity.region === region) && text.includes(search);
  }), [query, region]);
  const visibleCodes = useMemo(() => new Set(visible.map((entity) => entity.code)), [visible]);
  const open = (entity: MexicoEntity) => {
    setActive(entity);
    setQuestion(0);
    setVisited((current) => new Set([...current, entity.code]));
    setScreen("entity");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const random = () => {
    open(randomEntityExcept(active.code));
  };
  const selectMode = (next: Mode) => {
    setMode(next);
    if (next === "AL AZAR") random();
  };
  const showAtlas = () => {
    setScreen("atlas");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <main className="mx-app">
    <nav className="mx-nav"><Link href="/" className="mx-brand"><span>MX</span><b>SPANISHCUE<small>CONVERSATION ATLAS</small></b></Link><div className="mx-progress"><span>EXPLORADO</span><i><b style={{ width: `${Math.round((visited.size / 32) * 100)}%` }} /></i><strong>{visited.size}/32</strong></div><div><button onClick={random}>AL AZAR</button><button onClick={showAtlas}>MAPA</button></div></nav>

    {screen === "cover" && <section className="mx-cover"><div className="mx-grid" aria-hidden="true" /><div className="mx-cover-copy"><span className="mx-kicker">B1 · CONVERSACIÓN · 90+ MIN</span><h1>MÉXICO</h1><h2>32 formas de vivir.</h2><p>Un mapa. 32 territorios. Cientos de conversaciones.</p><p className="mx-cover-lead">Elegí un lugar, observá cómo el territorio puede cambiar la vida cotidiana y hablá desde tu propia experiencia. No necesitás saber nada de México para empezar.</p><div className="mx-cover-actions"><button onClick={showAtlas}>ABRIR EL MAPA <b>→</b></button><button className="ghost" onClick={random}>AL AZAR</button></div><dl><div><dt>32</dt><dd>estados y entidades</dd></div><div><dt>{mexicoPromptCount}</dt><dd>preguntas B1</dd></div><div><dt>6</dt><dd>modos de clase</dd></div></dl></div><div className="mx-cover-map"><span>RELIEVE VECTORIAL · 32 PIEZAS</span><MexicoMap active={active} visibleCodes={allCodes} visited={visited} onSelect={setActive} compact /><aside><b>{active.name}</b><small>{active.hook}</small></aside></div></section>}

    {screen === "atlas" && <section className="mx-atlas"><header className="mx-atlas-head"><div><span>31 ESTADOS + CIUDAD DE MÉXICO</span><h1>Elegí un territorio.<br /><em>Abrí una conversación.</em></h1></div><p>Fronteras vectoriales reales, relieve editorial y una pregunta que siempre vuelve a la vida del alumno.</p></header><div className="mx-modes" aria-label="Modos de la clase">{mexicoModes.map((item) => <button key={item} className={mode === item ? "active" : ""} onClick={() => selectMode(item)}>{item}</button>)}</div><div className="mx-tools"><div><button className={region === "todas" ? "active" : ""} onClick={() => setRegion("todas")}>TODAS</button>{(Object.keys(mexicoRegionNames) as MexicoRegion[]).map((key) => <button key={key} className={region === key ? "active" : ""} onClick={() => setRegion(key)}>{mexicoRegionNames[key].es}</button>)}</div><label><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar entidad, capital o paisaje…" /></label></div><ModePanel mode={mode} active={active} onOpen={open} ideal={ideal} setIdeal={setIdeal} /><div className="mx-atlas-grid"><div className="mx-map-card"><header><span>MAPA INTERACTIVO</span><b>{visible.length} VISIBLES</b></header><MexicoMap active={active} visibleCodes={visibleCodes} visited={visited} onSelect={setActive} /></div><aside className="mx-preview" style={{ "--entity": active.color } as CSSProperties}><span>{active.number} · {active.code}</span><h2>{active.name}</h2><p>{mexicoRegionNames[active.region].es} · Capital: {active.capital}</p><h3>{active.hook}</h3><div className="mx-landscape"><i /><b>{active.visual}</b></div><small>TEMA DE VIDA</small><strong>{active.lifestyle}</strong><button onClick={() => open(active)}>ENTRAR EN {active.name.toUpperCase()} →</button></aside></div><section className="mx-index"><header><span>LAS 32 ENTIDADES</span><h2>Un país no es un solo estilo de vida.</h2></header><div>{visible.map((entity) => <button key={entity.code} className={active.code === entity.code ? "active" : ""} onClick={() => setActive(entity)} style={{ "--entity": entity.color } as CSSProperties}><span>{entity.number}</span><b>{entity.name}</b><small>{entity.lifestyle}</small><em>VER →</em></button>)}</div></section></section>}

    {screen === "entity" && <section className="mx-entity-page" style={{ "--entity": active.color } as CSSProperties}><header className="mx-entity-hero"><button onClick={showAtlas}>← MAPA DE MÉXICO</button><span>{active.code} · {mexicoRegionNames[active.region].es.toUpperCase()}</span><button onClick={random}>OTRA ENTIDAD →</button><div><small>CAPITAL · {active.capital}</small><h1>{active.name}</h1><h2>{active.hook}</h2><p>{active.visual}</p></div><MexicoMap active={active} visibleCodes={allCodes} visited={visited} onSelect={open} compact /></header><div className="mx-classroom"><section className="mx-context"><span>ANTES DE HABLAR</span><h2>{active.lifestyle}</h2><p>Imaginá tu vida en este territorio. Usá lo que ves como punto de partida; no hay respuestas correctas ni hace falta conocer datos previos.</p><div><b>{active.contrast[0]}</b><i>O</i><b>{active.contrast[1]}</b></div></section><section className="mx-question"><header><span>PREGUNTA B1</span><b>{String(question + 1).padStart(2, "0")} / 05</b></header><h2>{active.questions[question].es}</h2><p>{active.questions[question].en}</p><div className="mx-followups"><span>REPREGUNTAS OPCIONALES</span>{active.followups.map((followup) => <button key={followup.es}>{followup.es}<small>{followup.en}</small></button>)}</div><footer><button onClick={() => setQuestion((question + 4) % 5)}>← ANTERIOR</button><div>{active.questions.map((_, index) => <button key={index} aria-label={`Pregunta ${index + 1}`} aria-current={question === index ? "step" : undefined} className={question === index ? "active" : ""} onClick={() => setQuestion(index)}>{index + 1}</button>)}</div><button onClick={() => setQuestion((question + 1) % 5)}>SIGUIENTE →</button></footer></section><section className="mx-wordbank"><span>VOCABULARIO PARA ENTRAR</span><h2>Palabras de {active.name}</h2><div>{active.vocabulary.map((word) => <article key={word.es}><b>{word.es}</b><small>{word.en}</small></article>)}</div></section><section className="mx-personal"><span>COMPARACIÓN PERSONAL</span><h2>Tu lugar vs. {active.name}</h2><p>¿Qué cambiaría en tu rutina, tus trayectos y tu tiempo libre? Terminá con una pregunta para alguien que vive aquí.</p></section><div className="mx-entity-actions"><button onClick={showAtlas}>ELEGIR OTRA ENTIDAD</button><Link href="/acceso?modo=registro&returnTo=%2Fmexico">GUARDAR MI LUGAR EN SPANISHCUE →</Link></div></div></section>}
  </main>;
}
