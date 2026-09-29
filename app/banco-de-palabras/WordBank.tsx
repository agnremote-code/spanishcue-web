"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { wordBank, wordTopics, type TopicId, type WordCard } from "./data";
import { completedGap, lexicalPractice, oralScenes } from "./practice";
import { filterCards, selectedPool, initialRecall, recallAction, initialMatch, matchAction, matchRound, readSaved, writeSaved, type Filters } from "./state";
import "./style.css";
import "./brand.css";
import { SpanishCueBrand } from "../SpanishCueBrand";

type Mode = "banco" | "quiz" | "parejas" | "hablar";
const modes: { id: Mode; number: string; title: string; copy: string }[] = [
  { id: "banco", number: "01", title: "Explorar", copy: "Descubre y selecciona" },
  { id: "parejas", number: "02", title: "Emparejar", copy: "Reconoce el significado" },
  { id: "quiz", number: "03", title: "Reto exprés", copy: "Recuerda y vuelve a usar" },
  { id: "hablar", number: "04", title: "Hablar", copy: "Resuelve una situación" },
];
const topicFor = (id: TopicId) => wordTopics.find(topic => topic.id === id)!;
const emptyFilters: Filters = { topic: "todos", kind: "todos", query: "", savedOnly: false };
const rotate = <T,>(items: T[], offset: number) => [...items.slice(offset % Math.max(items.length, 1)), ...items.slice(0, offset % Math.max(items.length, 1))];

export function PracticeSession({ cards, mode, supportVisible }: { cards: WordCard[]; mode: Mode; supportVisible: boolean }) {
  const [recall, setRecall] = useState(() => initialRecall(cards.map(card => card.id)));
  const [round, setRound] = useState(0);
  const [match, setMatch] = useState(initialMatch);
  const [speakingRound, setSpeakingRound] = useState(0);
  const [speakingTopic, setSpeakingTopic] = useState<TopicId>(cards[0]?.topic || "casa");
  const [speakingHelp, setSpeakingHelp] = useState(false);
  const [criteria, setCriteria] = useState<boolean[]>([false, false, false]);
  const [closed, setClosed] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);
  const [previousMode, setPreviousMode] = useState(mode);
  if (previousMode !== mode) {
    setPreviousMode(mode);
    setRunning(false);
  }
  useEffect(() => {
    if (mode !== "hablar" || !running || seconds <= 0) return;
    const timer = window.setTimeout(() => setSeconds(value => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [mode, running, seconds]);

  if (!cards.length || mode === "banco") return null;
  const step = recall.queue[recall.cursor];
  const target = step?.id ? cards.find(card => card.id === step.id) : undefined;
  const practice = target ? lexicalPractice[target.id] : undefined;
  const tiles = matchRound(cards, round);
  const pairCount = tiles.length / 2;
  const matchWords = tiles.filter(tile => tile.side === "word");
  // Rotate definition order so pairs are not already aligned row by row.
  const meanings = rotate(tiles.filter(tile => tile.side === "meaning").reverse(), pairCount > 2 ? 1 : 0);
  const speakingTopics = wordTopics.filter(topic => cards.some(card => card.topic === topic.id));
  const speakingCards = rotate(cards.filter(card => card.topic === speakingTopic), speakingRound * 3).slice(0, 3);
  const scene = oralScenes[speakingTopic];
  const nextSpeaking = () => { setSpeakingRound(value => value + 1); setSpeakingHelp(false); setCriteria([false, false, false]); setClosed(false); setRunning(false); setSeconds(60); };

  return <>
    {mode === "quiz" && <section className="wb-practice-panel wb-quiz" aria-labelledby="quiz-title">
      <div className="wb-practice-copy">
        <span>RETO EXPRÉS · RECUPERACIÓN ORAL</span><h2 id="quiz-title">Recuerda. Combina. Repite después.</h2>
        <p>Di la palabra o expresión sin mirar. Después completa otra situación: las mismas tarjetas vuelven tras otras tareas.</p>
        <p>El profesor acepta variantes naturales. El modelo es una posibilidad, no la única respuesta válida.</p>
        <p aria-live="polite">{recall.records.length} respuestas observadas · {recall.records.filter(record => record.outcome === "independent").length} sin apoyo · {recall.records.filter(record => record.outcome === "supported").length} con apoyo.</p>
        <button className="wb-secondary" onClick={() => setRecall(initialRecall(cards.map(card => card.id)))}>Reiniciar recuperación</button>
        <p className="wb-help-note">Reiniciar borra estas observaciones y vuelve a ocultar todos los modelos. Mi banco se conserva.</p>
      </div>
      <div className="wb-quiz-board">
        {!step ? <div role="status"><h3>Terminaste esta recuperación.</h3><p>Ahora resuelve una situación en Hablar con {cards.length === 1 ? "la expresión de la selección" : "dos o tres expresiones de la selección"}. El profesor comprueba cómo las usas.</p></div>
          : step.phase === "interlude" ? <><div className="wb-question-label">OTRA TAREA ANTES DE VOLVER</div><h3>Habla de tu día sin consultar el banco.</h3><p>Pregunta a tu compañero qué hizo ayer y qué necesita hacer mañana. Escucha y haz una pregunta más. Después volverá la tarjeta pendiente.</p><button onClick={() => setRecall(state => recallAction(state, { type: "interlude" }))}>Ya hicimos el intercambio</button></>
          : target && practice && <>
            <div className="wb-question-label">{step.phase === "recall" ? "SIGNIFICADO → EXPRESIÓN" : "REAPARECE EN CONTEXTO"} · {topicFor(target.topic).label}</div>
            <h3>{step.phase === "recall" ? target.definition : target.gap}</h3>
            <p>{step.phase === "recall" ? "Recupera una palabra o expresión de la selección. Dila en voz alta." : "Completa la frase en voz alta. Ajusta artículos, pronombres y concordancia; luego cambia un detalle para hablar de ti."}</p>
            {recall.hint && <p className="wb-retrieval-help" role="status">Pista: {practice.hint}</p>}
            {recall.revealed && <div className="wb-model" role="status"><h4>Un modelo posible</h4><strong>{step.phase === "recall" ? target.word : completedGap(target)}</strong><p>Combinación útil: {practice.combination}.</p><p>{target.example}</p>{practice.use && <p>{practice.use}</p>}{supportVisible && <p>Apoyo en inglés: {target.translation}</p>}</div>}
            <div className="wb-task-actions">
              {!recall.hint && !recall.revealed && <button onClick={() => setRecall(state => recallAction(state, { type: "hint" }))}>Pedir una pista</button>}
              {!recall.revealed && <button onClick={() => setRecall(state => recallAction(state, { type: "reveal" }))}>Ver un modelo</button>}
              {recall.revealed && <button onClick={() => setRecall(state => recallAction(state, { type: "retry" }))}>Ocultar y ensayar otra vez</button>}
            </div>
            <div className="wb-observe"><p><b>Observación del profesor</b> · Marca después de escuchar. Ver una pista o modelo cuenta como apoyo en este intento.</p>
              <button onClick={() => setRecall(state => recallAction(state, { type: "assess", outcome: "independent" }))}>{recall.assisted ? "Salió con apoyo; volverá después" : "La recuperó sin apoyo"}</button>
              {!recall.assisted && <button onClick={() => setRecall(state => recallAction(state, { type: "assess", outcome: "supported" }))}>Necesita ayuda; volverá después</button>}
            </div>
          </>}
      </div>
    </section>}
    {mode === "parejas" && <section className="wb-practice-panel wb-match" aria-labelledby="match-title">
      <div className="wb-practice-copy"><span>RECONOCIMIENTO</span><h2 id="match-title">Conecta cada expresión.</h2><p>Elige una expresión y su definición en español. Puedes cambiar tu elección; una pareja equivocada se puede intentar otra vez.</p>
        <div className="wb-match-meter"><i style={{ width: `${pairCount ? match.matched.length / pairCount * 100 : 0}%` }} /><span>{match.matched.length} / {pairCount} pares</span></div>
        <p>Ronda {round + 1}. Solo aparecen tarjetas de la selección de práctica.</p>
        <button className="wb-secondary" onClick={() => { setMatch(initialMatch()); }}>Reiniciar estos pares</button>
        <button className="wb-secondary" onClick={() => { setRound(value => (value + 1) % Math.ceil(cards.length / 5)); setMatch(initialMatch()); }}>Siguiente grupo de la selección</button>
        <p role="status">{match.error ? "Estas dos pistas no corresponden. Busca el significado de la expresión y prueba otra pareja." : match.matched.length === pairCount ? "Grupo conectado. Recupera estas expresiones sin verlas en Reto exprés." : "Las parejas se comprueban al elegir ambos lados."}</p>
      </div>
      <div className="wb-match-board">
        {[matchWords, meanings].map((column, index) => <div className="wb-match-column" key={index} aria-label={index ? "Definiciones" : "Expresiones"}>{column.map(tile => {
          const card = cards.find(item => item.id === tile.id)!;
          const matched = match.matched.includes(tile.id);
          return <button key={tile.key} data-word-id={card.id} className={`${tile.side} ${match.selected === tile.key ? "active" : ""} ${matched ? "matched" : ""}`} aria-pressed={match.selected === tile.key} disabled={matched} onClick={() => setMatch(state => matchAction(state, tile, tiles))}>
            <small>{matched ? "✓ PAREJA" : tile.side === "word" ? "EXPRESIÓN" : "DEFINICIÓN"}</small><b>{tile.side === "word" ? card.word : card.definition}</b>{tile.side === "meaning" && supportVisible && <span className="wb-translation">{card.translation}</span>}
          </button>;
        })}</div>)}
      </div>
    </section>}
    {mode === "hablar" && <section className="wb-practice-panel wb-speak" aria-labelledby="speak-title">
      <div className="wb-practice-copy"><span>PRODUCCIÓN ORAL · CIERRE</span><h2 id="speak-title">Un problema. Un acuerdo.</h2><label className="wb-scene-select">Tema de la situación<select value={speakingTopic} onChange={event => { setSpeakingTopic(event.target.value as TopicId); setSpeakingRound(0); setSpeakingHelp(false); setCriteria([false, false, false]); setClosed(false); setRunning(false); setSeconds(60); }}>{speakingTopics.map(topic => <option key={topic.id} value={topic.id}>{topic.label}</option>)}</select></label><p>Para una situación coherente, aquí solo usamos las tarjetas de este tema dentro de tu selección.</p><p>{scene.situation}</p><p>Usa {speakingCards.length === 1 ? "la expresión seleccionada" : "dos de estas expresiones"} si encajan. No fuerces todas las tarjetas. Tu compañero pregunta y confirma el acuerdo.</p>
        <details><summary>Ayuda A2 / ampliación B1</summary><p>A2: «Necesito… porque…». «¿Podemos…?». «Entonces, vamos a…». Dos o tres turnos por persona.</p><p>Ampliación B1 del mismo banco: explica qué cambió, compara dos soluciones y justifica el acuerdo. Cambien los papeles y vuelvan a intentarlo con menos apoyo.</p></details>
        <div className={`wb-timer ${running ? "running" : ""}`}><strong aria-label="Tiempo orientativo">{String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}</strong><button onClick={() => { if (!seconds) { setSeconds(60); setRunning(false); } else setRunning(value => !value); }}>{!seconds ? "Reiniciar reloj" : running ? "Pausar reloj" : "Empezar reloj"}</button></div><p>Reloj opcional, sin penalización. Se pausa al cambiar de modo.</p>
      </div>
      <div className="wb-speak-board">
        <h3>Recupera las expresiones a partir de estas pistas.</h3>
        <div className="wb-speaking-cards">{speakingCards.map((card, index) => <article key={card.id} data-word-id={card.id} style={{ "--topic-color": topicFor(card.topic).color } as CSSProperties}><span>{index + 1}</span><small>{topicFor(card.topic).label}</small><p>{card.definition}</p>{speakingHelp && <><h3>{card.word}</h3><p>{lexicalPractice[card.id].combination}</p>{lexicalPractice[card.id].use && <p>{lexicalPractice[card.id].use}</p>}{supportVisible && <p>{card.translation}</p>}</>}</article>)}</div>
        <button onClick={() => setSpeakingHelp(value => !value)}>{speakingHelp ? "Ocultar expresiones" : "Mostrar apoyo para hablar"}</button>
        <details><summary>Cuando acuerden un plan, cambia un detalle</summary><p>{scene.followup}</p></details>
        <fieldset className="wb-oral-check"><legend>Comprobación del profesor, después de escuchar</legend>{["El mensaje se entiende.", `Usó ${speakingCards.length === 1 ? "la expresión" : "dos expresiones"} de forma natural.`, "Respondió a su compañero y confirmó el acuerdo."].map((label, i) => <label key={label}><input type="checkbox" checked={criteria[i]} onChange={event => { setCriteria(values => values.map((value, at) => at === i ? event.target.checked : value)); setClosed(false); }} />{label}</label>)}<button disabled={!criteria.every(Boolean)} onClick={() => setClosed(true)}>Registrar cierre observado</button>{closed && <p role="status">Cierre observado por el profesor. Elijan una expresión para volver a usar otro día.</p>}</fieldset>
        <button className="wb-next-round" onClick={nextSpeaking}>Otra combinación de la selección ↻</button>
      </div>
    </section>}
  </>;
}

export default function WordBank() {
  const [mode, setMode] = useState<Mode>("banco");
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [openWord, setOpenWord] = useState<number | null>(null);
  const [supportVisible, setSupportVisible] = useState(false);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [storageStatus, setStorageStatus] = useState("Cargando Mi banco de este navegador…");
  const [pickedIds, setPickedIds] = useState<number[]>([]);
  const [session, setSession] = useState<{ ids: number[]; source: string; version: number }>({ ids: [], source: "", version: 0 });
  useEffect(() => {
    let active = true;
    // Read browser-owned persistence after hydration, with no server/client
    // first-render mismatch and no writes before the stored IDs are loaded.
    Promise.resolve().then(() => {
      if (!active) return;
      try {
        const saved = readSaved(window.localStorage);
        setSavedIds(saved.ids);
        setStorageStatus(saved.status === "ok" ? "Mi banco se guarda solo en este navegador y dispositivo; no se sincroniza con tu cuenta." : saved.status === "invalid" ? "No se pudo recuperar el guardado anterior. Puedes crear una selección nueva." : "Guardado local no disponible: Mi banco dura solo mientras esta página esté abierta.");
      } catch { setStorageStatus("Guardado local no disponible: Mi banco dura solo mientras esta página esté abierta."); }
    });
    return () => { active = false; };
  }, []);
  const visibleWords = filterCards(wordBank, filters, savedIds);
  const picked = selectedPool(visibleWords, pickedIds);
  const practiceCards = wordBank.filter(card => session.ids.includes(card.id));
  const changeFilters = (patch: Partial<Filters>) => { setFilters(value => ({ ...value, ...patch })); setPickedIds([]); setOpenWord(null); };
  const toggleSaved = (id: number) => {
    const next = savedIds.includes(id) ? savedIds.filter(item => item !== id) : [...savedIds, id];
    setSavedIds(next);
    try { setStorageStatus(writeSaved(window.localStorage, next) ? "Mi banco guardado en este navegador y dispositivo; no se sincroniza con tu cuenta." : "No se pudo guardar: conserva estas palabras por escrito antes de cerrar la página."); }
    catch { setStorageStatus("No se pudo guardar: conserva estas palabras por escrito antes de cerrar la página."); }
  };
  const applySelection = () => {
    if (!picked.length) return;
    const source = [filters.topic === "todos" ? "Todos los temas" : topicFor(filters.topic).label, filters.kind === "todos" ? "todos los tipos" : filters.kind, filters.savedOnly ? "Mi banco" : "banco completo", filters.query ? "búsqueda aplicada" : ""].filter(Boolean).join(" · ");
    setSession(value => ({ ids: picked.map(card => card.id), source, version: value.version + 1 }));
    setMode("parejas");
  };
  return <div className="wb-shell">
    <header className="wb-topbar"><Link href="/" className="wb-back">← Biblioteca</Link><Link href="/" className="wb-brand"><SpanishCueBrand variant="compact" tone="light" context="VOCABULARIO" /></Link><div className="wb-session"><i /> SESIÓN DE VOCABULARIO</div></header>
    <main>
      <section className="wb-hero"><div className="wb-hero-copy"><div className="wb-kicker"><span>A2–B1</span> VOCABULARIO EN USO</div><h1>El Banco<br />de <em>Palabras</em></h1><p>Elige un mundo, descubre sus expresiones y recupéralas para resolver una situación con otra persona.</p><div className="wb-hero-stats"><div><strong>60</strong><span>palabras y chunks</span></div><div><strong>6</strong><span>mundos cotidianos</span></div><div><strong>4</strong><span>formas de practicar</span></div></div><a href="#mesa" className="wb-start">ABRIR EL BANCO <span>↓</span></a></div><div className="wb-hero-art"><img src="/previews/word-bank-studio-v91.webp" alt="Estudio ilustrado con objetos de casa, ciudad, comida, viaje, emociones y trabajo" width="1672" height="941" /></div></section>
      <section className="wb-how"><span>PARA EL PROFESOR</span><h2>Una selección, cuatro recorridos.</h2><div><p>Ruta orientativa de 45 minutos: elige 6–8 tarjetas de un tema (5 min), descubre sus usos (8), empareja (5), recupera y completa contextos (12), resuelve una situación (10) y vuelve a usar dos expresiones sin mirar (5).</p><details><summary>Cómo guiar la clase</summary><p>Es un solo banco A2–B1, con apoyo A2 y ampliación oral B1. No hace falta trabajar las 60 tarjetas. Las estimaciones incluyen turnos y ayuda del profesor; no son tiempos observados en clase.</p><p>Explora primero. Aplica una selección para los tres modos de práctica. Acepta sinónimos, formas de trato y variantes naturales; pregunta qué cambia. Mi banco significa guardado, no aprendido.</p></details></div><ol><li><b>01</b> Descubrir</li><li><b>02</b> Reconocer</li><li><b>03</b> Recuperar</li><li><b>04</b> Usar</li></ol></section>
      <section className="wb-workbench" id="mesa">
        <div className="wb-workbench-head"><div><span>LA MESA DE TRABAJO</span><h2>¿Con qué palabras practicamos?</h2></div><button aria-pressed={supportVisible} className={supportVisible ? "active" : ""} onClick={() => setSupportVisible(value => !value)}>{supportVisible ? "Ocultar inglés" : "Mostrar apoyo en inglés"}</button></div>
        <nav className="wb-mode-tabs" aria-label="Modo de práctica">{modes.map(item => <button key={item.id} className={mode === item.id ? "active" : ""} onClick={() => setMode(item.id)} aria-pressed={mode === item.id}><span>{item.number}</span><div><b>{item.title}</b><small>{item.copy}</small></div></button>)}</nav>
        <div className="wb-session-summary" role="status">{session.ids.length ? <><b>Selección de práctica: {session.ids.length} tarjetas.</b><span>{session.source}</span><p>Los filtros solo cambian Explorar. La selección de práctica se reemplaza al pulsar «Practicar estas tarjetas»; eso reinicia las rondas y observaciones.</p></> : <p>Primero selecciona tarjetas en Explorar y pulsa «Practicar estas tarjetas».</p>}</div>
        {mode === "banco" && <section className="wb-bank" aria-labelledby="bank-title">
          <div className="wb-topic-rail" role="group" aria-label="Filtrar la exploración por tema"><button aria-pressed={filters.topic === "todos"} className={filters.topic === "todos" ? "active" : ""} onClick={() => changeFilters({ topic: "todos" })}><i>∞</i><span>Todo el banco</span><small>60 tarjetas</small></button>{wordTopics.map(topic => <button key={topic.id} aria-pressed={filters.topic === topic.id} className={filters.topic === topic.id ? "active" : ""} style={{ "--topic-color": topic.color } as CSSProperties} onClick={() => changeFilters({ topic: topic.id })}><i>{topic.icon}</i><span>{topic.label}</span><small>10 tarjetas</small></button>)}</div>
          <div className="wb-bank-tools"><div><span id="bank-title">EXPLORAR Y SELECCIONAR</span><b>{visibleWords.length} tarjetas visibles</b></div><label className="wb-search"><span className="wb-sr-only">Buscar palabra, significado o ejemplo</span><input value={filters.query} onChange={event => changeFilters({ query: event.target.value })} placeholder="Buscar palabra, significado o ejemplo…" /></label><select value={filters.kind} onChange={event => changeFilters({ kind: event.target.value as Filters["kind"] })} aria-label="Filtrar por tipo de palabra"><option value="todos">Todos los tipos</option><option value="sustantivo">Sustantivos</option><option value="verbo">Verbos</option><option value="adjetivo">Adjetivos</option><option value="chunk">Chunks</option></select><button aria-pressed={filters.savedOnly} className={filters.savedOnly ? "active" : ""} onClick={() => changeFilters({ savedOnly: !filters.savedOnly })}>★ Mi banco <small>{savedIds.length}</small></button></div>
          <p className="wb-storage-note" role="status">{storageStatus}</p>
          <div className="wb-selection-tools"><p>{picked.length} tarjetas seleccionadas de las visibles. Recomendación: 6–8 de un tema. Al cambiar filtros se limpia esta selección pendiente.</p><button disabled={!visibleWords.length} onClick={() => setPickedIds(visibleWords.slice(0, 6).map(card => card.id))}>Seleccionar hasta 6 visibles</button><button disabled={!picked.length} onClick={applySelection}>Practicar estas tarjetas ({picked.length})</button></div>
          {visibleWords.length ? <div className="wb-card-grid">{visibleWords.map(card => {
            const isOpen = openWord === card.id;
            return <article className={`wb-word-card ${isOpen ? "open" : ""}`} style={{ "--topic-color": topicFor(card.topic).color } as CSSProperties} key={card.id}>
              <div className="wb-card-controls"><label><input type="checkbox" checked={pickedIds.includes(card.id)} onChange={() => setPickedIds(ids => ids.includes(card.id) ? ids.filter(id => id !== card.id) : [...ids, card.id])} />Seleccionar {card.word}</label><button className={`wb-save ${savedIds.includes(card.id) ? "saved" : ""}`} aria-pressed={savedIds.includes(card.id)} aria-label={savedIds.includes(card.id) ? `Quitar ${card.word} de Mi banco` : `Guardar ${card.word} en Mi banco`} onClick={() => toggleSaved(card.id)}>★</button></div>
              <button className="wb-card-face" onClick={() => setOpenWord(isOpen ? null : card.id)} aria-expanded={isOpen}><span className="wb-card-icon">{card.icon}</span><small>{topicFor(card.topic).label} · {card.kind}</small><h3>{card.word}</h3><p>{isOpen ? "Ocultar significado y uso" : "Ver significado y uso"}</p></button>
              {isOpen && <div className="wb-card-answer"><p>{card.definition}</p>{supportVisible && <strong>{card.translation}</strong>}<blockquote>“{card.example}”</blockquote><p>Combinación útil: {lexicalPractice[card.id].combination}.</p>{lexicalPractice[card.id].use && <p>{lexicalPractice[card.id].use}</p>}</div>}
            </article>;
          })}</div> : <div className="wb-empty"><b>No hay tarjetas con esos filtros.</b><button onClick={() => { setFilters(emptyFilters); setPickedIds([]); }}>Quitar todos los filtros</button></div>}
        </section>}
        {mode !== "banco" && !practiceCards.length && <div className="wb-empty"><b>No hay una selección de práctica.</b><button onClick={() => setMode("banco")}>Elegir tarjetas en Explorar</button></div>}
        <PracticeSession key={session.version} cards={practiceCards} mode={mode} supportVisible={supportVisible} />
      </section>
      <section className="wb-exit"><div><span>CIERRE · 5 MIN</span><h2>Que las palabras salgan del banco.</h2><p>Tras el intercambio de Hablar, usa {session.ids.length === 1 ? "una expresión" : "dos expresiones"} sin mirar para contar qué acordaron. Guarda {session.ids.length === 1 ? "esa expresión" : "una o dos"} en Mi banco para recuperarlas otro día desde este mismo navegador. Si el guardado local no está disponible, anótalas antes de cerrar.</p></div><Link href="/">VOLVER A LA BIBLIOTECA →</Link></section>
    </main>
  </div>;
}
