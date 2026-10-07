"use client";
import { ConversationFamily } from "../conversation-families/ConversationFamily";
import { COUNTRY_LEVELS, countryActivity, countrySupport } from "../conversation-families/country-levels";
import { CountryTools, CountryClosing } from "../conversation-families/country-tools";
import type { CEFRLevel } from "../conversation-families/types";


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
    <svg viewBox="0 0 1000 620" role="img" aria-label="Mapa interactivo de las 31 entidades federativas y Ciudad de México / Interactive map of Mexico's 31 states and Mexico City">
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

function ModePanel({ mode, active, onOpen, ideal, setIdeal, level }: {
  mode: Mode;
  level: CEFRLevel;
  active: MexicoEntity;
  onOpen: (entity: MexicoEntity) => void;
  ideal: Ideal;
  setIdeal: (ideal: Ideal) => void;
}) {
  const alternatives = useMemo(() => {
    const index = mexicoEntities.findIndex((entity) => entity.code === active.code);
    return [active, mexicoEntities[(index + 11) % mexicoEntities.length], mexicoEntities[(index + 23) % mexicoEntities.length]];
  }, [active]);
  const modeSupport=countrySupport(level,{name:active.name});
  if (mode === "EXPLORAR") return <div className="mx-mode-note"><b>Elige cualquiera de las 32 piezas.<span className="country-a0-en" lang="en"> / Choose any of the 32 pieces.</span></b><span>{modeSupport.tip.es} / {modeSupport.tip.en}</span></div>;
  if (mode === "ELIGE ENTRE DOS") return <section className="mx-mode-challenge"><span>DECISIÓN RÁPIDA<span className="country-a0-en" lang="en"> / QUICK DECISION</span></span><h3>¿Una semana en<span className="country-a0-en" lang="en"> / A week in</span> {alternatives[0].name} o en<span className="country-a0-en" lang="en"> / or in</span> {alternatives[1].name}?</h3><p>{modeSupport.challenge.es} / {modeSupport.challenge.en}</p><div>{alternatives.slice(0, 2).map((entity) => <button key={entity.code} onClick={() => onOpen(entity)}>{entity.name}<small>{level==="A0"?entity.vocabulary.map(word=>word.es+" / "+word.en).join(" · "):entity.contrast.join(" · ")}</small></button>)}</div></section>;
  if (mode === "¿DÓNDE VIVIRÍAS?") return <section className="mx-mode-challenge"><span>VIVIR DURANTE UN AÑO<span className="country-a0-en" lang="en"> / LIVING THERE FOR A YEAR</span></span><h3>Tres estilos. Una dirección.<span className="country-a0-en" lang="en"> / Three lifestyles. One address.</span></h3><p>{modeSupport.challenge.es} / {modeSupport.challenge.en}</p><div>{alternatives.map((entity) => <button key={entity.code} onClick={() => onOpen(entity)}>{entity.name}<small>{level==="A0"?entity.vocabulary.map(word=>word.es+" / "+word.en).join(" · "):entity.lifestyle}</small></button>)}</div></section>;
  if (mode === "TU PAÍS VS MÉXICO") return <section className="mx-mode-challenge"><span>COMPARACIÓN PERSONAL<span className="country-a0-en" lang="en"> / PERSONAL COMPARISON</span></span><h3>{active.name} vs. tu país<span className="country-a0-en" lang="en"> / vs. your country</span></h3><p>{modeSupport.challenge.es} / {modeSupport.challenge.en}</p><button onClick={() => onOpen(active)}>ABRIR LAS 5 PREGUNTAS DE<span className="country-a0-en" lang="en"> / OPEN THE 5 QUESTIONS FOR</span> {active.name.toUpperCase()} →</button></section>;
  if (mode === "TU MÉXICO IDEAL") return <section className="mx-ideal"><span>CIERRE · TU MÉXICO IDEAL<span className="country-a0-en" lang="en"> / CLOSING: YOUR IDEAL MEXICO</span></span><h3>Cinco decisiones para diseñar tu mapa personal.<span className="country-a0-en" lang="en"> / Five decisions to design your personal map.</span></h3><div>{mexicoIdealCategories.map((category) => <label key={category}><b>Para<span className="country-a0-en" lang="en"> / For</span> {category}</b><select value={ideal[category] || ""} onChange={(event) => setIdeal({ ...ideal, [category]: event.target.value })}><option value="">Elige una entidad / Choose a state</option>{mexicoEntities.map((entity) => <option key={entity.code} value={entity.code}>{entity.name}</option>)}</select></label>)}</div><p>{modeSupport.challenge.es} / {modeSupport.challenge.en}</p></section>;
  return null;
}

export default function MexicoLesson(){
 return <ConversationFamily id="mexico" title="México" levels={COUNTRY_LEVELS} defaultLevel="B1">{level=><CountryExperience key={level} level={level}/>}</ConversationFamily>;
}
function CountryExperience({level}:{level:CEFRLevel}){
  const [screen, setScreen] = useState<Screen>("cover");
  const [nativeActive, setActive] = useState<MexicoEntity>(mexicoEntities[6]);
  const context={name:nativeActive.name,places:[{es:nativeActive.name,en:nativeActive.name}],words:nativeActive.vocabulary,source:nativeActive.questions};
  const support=countrySupport(level,context);
  const active=level==="B1"?nativeActive:{...nativeActive,questions:nativeActive.questions.map((_,index)=>countryActivity(level,context,index)),followups:[support.challenge,support.tip],...(level==="A0"?{hook:`Mira ${nativeActive.name}. / Look at ${nativeActive.name}.`,visual:nativeActive.vocabulary.map(word=>word.es+" / "+word.en).join(" · "),lifestyle:"Mira y elige. / Look and choose.",contrast:["Sí, me gusta. / Yes, I like it.","No, gracias. / No, thank you."] as [string,string]}:{})};
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
    <nav className="mx-nav"><Link href="/" className="mx-brand"><span>MX</span><b>SPANISHCUE<small>CONVERSATION ATLAS</small></b></Link><div className="mx-progress"><span>EXPLORADO<span className="country-a0-en" lang="en"> / EXPLORED</span></span><i><b style={{ width: `${Math.round((visited.size / 32) * 100)}%` }} /></i><strong>{visited.size}/32</strong></div><div><button onClick={random}>AL AZAR<span className="country-a0-en" lang="en"> / AT RANDOM</span></button><button onClick={showAtlas}>MAPA<span className="country-a0-en" lang="en"> / MAP</span></button></div></nav>

    {screen === "cover" && <section className="mx-cover"><div className="mx-grid" aria-hidden="true" /><div className="mx-cover-copy"><span className="mx-kicker">{level} · CONVERSACIÓN · 90+ MIN</span><h1>MÉXICO</h1><h2>32 formas de vivir.<span className="country-a0-en" lang="en"> / 32 ways of living.</span></h2><p>Un mapa. 32 territorios. Cientos de conversaciones.<span className="country-a0-en" lang="en"> / One map. 32 territories. Hundreds of conversations.</span></p><p className="mx-cover-lead">Elige un lugar, observa cómo el territorio puede cambiar la vida cotidiana y habla desde tu propia experiencia. No necesitas saber nada de México para empezar.<span className="country-a0-en" lang="en"> / Choose a place, notice how its landscape can change everyday life and speak from your own experience. You do not need to know anything about Mexico to begin.</span></p><div className="mx-cover-actions"><button onClick={showAtlas}>ABRIR EL MAPA<span className="country-a0-en" lang="en"> / OPEN THE MAP</span> <b>→</b></button><button className="ghost" onClick={random}>AL AZAR<span className="country-a0-en" lang="en"> / AT RANDOM</span></button></div><dl><div><dt>32</dt><dd>estados y entidades<span className="country-a0-en" lang="en"> / states and federal entities</span></dd></div><div><dt>{mexicoPromptCount}</dt><dd>preguntas<span className="country-a0-en" lang="en"> / questions</span> {level}</dd></div><div><dt>6</dt><dd>modos de clase<span className="country-a0-en" lang="en"> / class modes</span></dd></div></dl></div><div className="mx-cover-map"><span>RELIEVE VECTORIAL · 32 PIEZAS<span className="country-a0-en" lang="en"> / VECTOR RELIEF MAP · 32 PIECES</span></span><MexicoMap active={active} visibleCodes={allCodes} visited={visited} onSelect={setActive} compact /><aside><b>{active.name}</b><small>{active.hook}</small></aside></div></section>}

    {screen === "atlas" && <section className="mx-atlas"><header className="mx-atlas-head"><div><span>31 ESTADOS + CIUDAD DE MÉXICO</span><h1>Elige un territorio.<span className="country-a0-en" lang="en"> / Choose a territory.</span><br /><em>Abre una conversación.<span className="country-a0-en" lang="en"> / Start a conversation.</span></em></h1></div><p>Fronteras vectoriales reales, relieve editorial y una pregunta que siempre vuelve a la vida del alumno.<span className="country-a0-en" lang="en"> / Real boundaries, a raised map and questions that always connect to your own life.</span></p></header><div className="mx-modes" aria-label="Modos de la clase / Class modes">{mexicoModes.map((item) => <button key={item} className={mode === item ? "active" : ""} onClick={() => selectMode(item)}>{item}<span className="country-a0-en" lang="en"> / {({"EXPLORAR":"EXPLORE","AL AZAR":"RANDOM","ELIGE ENTRE DOS":"CHOOSE BETWEEN TWO","¿DÓNDE VIVIRÍAS?":"WHERE WOULD YOU LIVE?","TU PAÍS VS MÉXICO":"YOUR COUNTRY VS MEXICO","TU MÉXICO IDEAL":"YOUR IDEAL MEXICO"} as Record<string,string>)[item]}</span></button>)}</div><div className="mx-tools"><div><button className={region === "todas" ? "active" : ""} onClick={() => setRegion("todas")}>TODAS<span className="country-a0-en" lang="en"> / ALL</span></button>{(Object.keys(mexicoRegionNames) as MexicoRegion[]).map((key) => <button key={key} className={region === key ? "active" : ""} onClick={() => setRegion(key)}>{mexicoRegionNames[key].es}<span className="country-a0-en" lang="en"> / {mexicoRegionNames[key].en}</span></button>)}</div><label><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar entidad, capital o paisaje… / Search state, capital or landscape…" /></label></div><ModePanel level={level} mode={mode} active={active} onOpen={open} ideal={ideal} setIdeal={setIdeal} /><div className="mx-atlas-grid"><div className="mx-map-card"><header><span>MAPA INTERACTIVO<span className="country-a0-en" lang="en"> / INTERACTIVE MAP</span></span><b>{visible.length} VISIBLES<span className="country-a0-en" lang="en"> / VISIBLE</span></b></header><MexicoMap active={active} visibleCodes={visibleCodes} visited={visited} onSelect={setActive} /></div><aside className="mx-preview" style={{ "--entity": active.color } as CSSProperties}><span>{active.number} · {active.code}</span><h2>{active.name}</h2><p>{mexicoRegionNames[active.region].es}<span className="country-a0-en" lang="en"> / {mexicoRegionNames[active.region].en}</span> · Capital:<span className="country-a0-en" lang="en"> / · Capital:</span> {active.capital}</p><h3>{active.hook}</h3><div className="mx-landscape"><i /><b>{active.visual}</b></div><small>TEMA DE VIDA<span className="country-a0-en" lang="en"> / LIFE TOPIC</span></small><strong>{active.lifestyle}</strong><button onClick={() => open(active)}>ENTRAR EN<span className="country-a0-en" lang="en"> / ENTER</span> {active.name.toUpperCase()} →</button></aside></div><section className="mx-index"><header><span>LAS 32 ENTIDADES<span className="country-a0-en" lang="en"> / ALL 32 STATES</span></span><h2>Un país no es un solo estilo de vida.<span className="country-a0-en" lang="en"> / A country has many lifestyles.</span></h2></header><div>{visible.map((entity) => <button key={entity.code} className={active.code === entity.code ? "active" : ""} onClick={() => setActive(entity)} style={{ "--entity": entity.color } as CSSProperties}><span>{entity.number}</span><b>{entity.name}</b><small>{level==="A0"?entity.vocabulary.map(word=>word.es+" / "+word.en).join(" · "):entity.lifestyle}</small><em>VER →<span className="country-a0-en" lang="en"> / VIEW →</span></em></button>)}</div></section></section>}

    {screen === "entity" && <section className="mx-entity-page" style={{ "--entity": active.color } as CSSProperties}><header className="mx-entity-hero"><button onClick={showAtlas}>← MAPA DE MÉXICO<span className="country-a0-en" lang="en"> / ← MEXICO MAP</span></button><span>{active.code} · {mexicoRegionNames[active.region].es.toUpperCase()}</span><button onClick={random}>OTRA ENTIDAD →<span className="country-a0-en" lang="en"> / ANOTHER STATE →</span></button><div><small>CAPITAL · {active.capital}</small><h1>{active.name}</h1><h2>{active.hook}</h2><p>{active.visual}</p></div><MexicoMap active={active} visibleCodes={allCodes} visited={visited} onSelect={open} compact /></header><div className="mx-classroom"><CountryTools level={level} context={context} index={question}/><section className="mx-context"><span>ANTES DE HABLAR · BEFORE SPEAKING</span><h2>{active.lifestyle}</h2><p>{support.tip.es}<br/>{support.tip.en}</p><div><b>{active.contrast[0]}</b><i>O</i><b>{active.contrast[1]}</b></div></section><section className="mx-question"><header><span>PREGUNTA<span className="country-a0-en" lang="en"> / QUESTION</span> {level} · QUESTION</span><b>{String(question + 1).padStart(2, "0")} / 05</b></header><h2>{active.questions[question].es}</h2><p>{active.questions[question].en}</p><div className="mx-followups"><span>REPREGUNTAS · FOLLOW-UP QUESTIONS</span>{active.followups.map((followup) => <button key={followup.es}>{followup.es}<small>{followup.en}</small></button>)}</div><footer><button onClick={() => setQuestion((question + 4) % 5)}>← ANTERIOR<span className="country-a0-en" lang="en"> / ← PREVIOUS</span></button><div>{active.questions.map((_, index) => <button key={index} aria-label={`Pregunta ${index + 1}`} aria-current={question === index ? "step" : undefined} className={question === index ? "active" : ""} onClick={() => setQuestion(index)}>{index + 1}</button>)}</div><button onClick={() => setQuestion((question + 1) % 5)}>SIGUIENTE →<span className="country-a0-en" lang="en"> / NEXT →</span></button></footer></section><section className="mx-wordbank"><span>VOCABULARIO · WORD BANK</span><h2>Palabras de<span className="country-a0-en" lang="en"> / Words for</span> {active.name}</h2><div>{active.vocabulary.map((word) => <article key={word.es}><b>{word.es}</b><small>{word.en}</small></article>)}</div></section><section className="mx-personal"><span>COMPARACIÓN PERSONAL<span className="country-a0-en" lang="en"> / PERSONAL COMPARISON</span></span><h2>Tu lugar vs.<span className="country-a0-en" lang="en"> / Your home vs.</span> {active.name}</h2><p>{support.challenge.es}<br/>{support.challenge.en}</p></section><div className="mx-entity-actions"><button onClick={showAtlas}>ELEGIR OTRA ENTIDAD<span className="country-a0-en" lang="en"> / CHOOSE ANOTHER STATE</span></button><Link href="/acceso?modo=registro&returnTo=%2Fmexico">GUARDAR MI LUGAR EN SPANISHCUE →<span className="country-a0-en" lang="en"> / SAVE MY PLACE IN SPANISHCUE →</span></Link></div></div></section>}
  <CountryClosing level={level} context={context}/></main>;
}
