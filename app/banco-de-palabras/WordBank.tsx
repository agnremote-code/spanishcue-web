"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { wordBank, wordTopics, type TopicId, type WordCard, type WordKind } from "./data";
import "./style.css";
import "./brand.css";
import { SpanishCueBrand } from "../SpanishCueBrand";

type Mode = "banco" | "quiz" | "parejas" | "hablar";
type TopicFilter = TopicId | "todos";
type KindFilter = WordKind | "todos";
type QuizKind = "frase" | "significado";
type MatchTile = { key: string; wordId: number; side: "word" | "meaning"; label: string };

const modes: { id: Mode; number: string; title: string; copy: string }[] = [
  { id: "banco", number: "01", title: "Explorar", copy: "Filtrá y revelá" },
  { id: "quiz", number: "02", title: "Reto exprés", copy: "Elegí la respuesta" },
  { id: "parejas", number: "03", title: "Emparejar", copy: "Uní cinco pares" },
  { id: "hablar", number: "04", title: "Hablar", copy: "Combiná y producí" },
];

const topicFor = (id: TopicId) => wordTopics.find(topic => topic.id === id)!;

function shuffled<T>(items: T[]) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function buildQuiz(pool: WordCard[]) {
  const target = pool[Math.floor(Math.random() * pool.length)] || wordBank[0];
  const distractors = shuffled(pool.filter(card => card.id !== target.id)).slice(0, 3);
  return { targetId: target.id, optionIds: shuffled([target, ...distractors]).map(card => card.id) };
}

function buildMatch(pool: WordCard[], randomize = true): MatchTile[] {
  const selected = (randomize ? shuffled(pool) : pool).slice(0, 5);
  const tiles = selected.flatMap(card => [
    { key: `word-${card.id}`, wordId: card.id, side: "word" as const, label: card.word },
    { key: `meaning-${card.id}`, wordId: card.id, side: "meaning" as const, label: card.translation },
  ]);
  return randomize ? shuffled(tiles) : tiles;
}

const firstQuiz = { targetId: 1, optionIds: [1, 2, 3, 4] };
const speakingTasks = [
  "Contá una mini historia usando las tres tarjetas. Conectá las ideas: no hagas tres frases aisladas.",
  "Usá dos tarjetas en una pregunta y la tercera en tu respuesta. Después cambien de rol.",
  "Inventá un problema realista con dos tarjetas y una solución que incluya la tercera.",
  "Compará una experiencia pasada con tu vida actual. Usá al menos dos tarjetas.",
];

export default function WordBank() {
  const [mode, setMode] = useState<Mode>("banco");
  const [topic, setTopic] = useState<TopicFilter>("todos");
  const [kind, setKind] = useState<KindFilter>("todos");
  const [query, setQuery] = useState("");
  const [openWord, setOpenWord] = useState<number | null>(null);
  const [supportVisible, setSupportVisible] = useState(false);
  const [savedOnly, setSavedOnly] = useState(false);
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const [quizKind, setQuizKind] = useState<QuizKind>("frase");
  const [quiz, setQuiz] = useState(firstQuiz);
  const [quizChoice, setQuizChoice] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState({ correct: 0, attempts: 0 });

  const [matchTiles, setMatchTiles] = useState<MatchTile[]>(buildMatch(wordBank.slice(0, 5), false));
  const [activeMatchKeys, setActiveMatchKeys] = useState<string[]>([]);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);

  const [speakingIds, setSpeakingIds] = useState([1, 2, 3]);
  const [speakingTask, setSpeakingTask] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning || seconds <= 0) return;
    const timer = window.setTimeout(() => setSeconds(value => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [timerRunning, seconds]);

  const practicePool = useMemo(
    () => wordBank.filter(card => topic === "todos" || card.topic === topic),
    [topic],
  );

  const visibleWords = useMemo(() => {
    const cleanQuery = query.trim().toLocaleLowerCase("es");
    return wordBank.filter(card => {
      if (topic !== "todos" && card.topic !== topic) return false;
      if (kind !== "todos" && card.kind !== kind) return false;
      if (savedOnly && !savedIds.includes(card.id)) return false;
      if (!cleanQuery) return true;
      return [card.word, card.translation, card.definition, card.example]
        .some(value => value.toLocaleLowerCase("es").includes(cleanQuery));
    });
  }, [kind, query, savedIds, savedOnly, topic]);

  const quizTarget = wordBank.find(card => card.id === quiz.targetId) || practicePool[0] || wordBank[0];
  const quizOptions = quiz.optionIds
    .map(id => wordBank.find(card => card.id === id))
    .filter((card): card is WordCard => Boolean(card));
  const speakingWords = speakingIds
    .map(id => wordBank.find(card => card.id === id))
    .filter((card): card is WordCard => Boolean(card));

  const changeTopic = (nextTopic: TopicFilter) => {
    setTopic(nextTopic);
    setOpenWord(null);
    setQuizChoice(null);
    const nextPool = wordBank.filter(card => nextTopic === "todos" || card.topic === nextTopic);
    setQuiz(buildQuiz(nextPool));
    setMatchTiles(buildMatch(nextPool));
    setMatchedIds([]);
    setActiveMatchKeys([]);
    setSpeakingIds(shuffled(nextPool).slice(0, 3).map(card => card.id));
  };

  const nextQuiz = () => {
    setQuiz(buildQuiz(practicePool));
    setQuizChoice(null);
  };

  const answerQuiz = (id: number) => {
    if (quizChoice !== null) return;
    setQuizChoice(id);
    setQuizScore(score => ({
      correct: score.correct + (id === quizTarget.id ? 1 : 0),
      attempts: score.attempts + 1,
    }));
  };

  const resetMatches = () => {
    setMatchTiles(buildMatch(practicePool));
    setActiveMatchKeys([]);
    setMatchedIds([]);
  };

  const chooseMatch = (tile: MatchTile) => {
    if (matchedIds.includes(tile.wordId) || activeMatchKeys.length === 2) return;
    if (activeMatchKeys.length === 0) {
      setActiveMatchKeys([tile.key]);
      return;
    }
    if (activeMatchKeys[0] === tile.key) {
      setActiveMatchKeys([]);
      return;
    }
    const first = matchTiles.find(item => item.key === activeMatchKeys[0]);
    const pair = [activeMatchKeys[0], tile.key];
    setActiveMatchKeys(pair);
    if (first && first.wordId === tile.wordId && first.side !== tile.side) {
      window.setTimeout(() => {
        setMatchedIds(ids => [...ids, tile.wordId]);
        setActiveMatchKeys([]);
      }, 320);
    } else {
      window.setTimeout(() => setActiveMatchKeys([]), 720);
    }
  };

  const nextSpeakingRound = () => {
    setSpeakingIds(shuffled(practicePool).slice(0, 3).map(card => card.id));
    setSpeakingTask(value => (value + 1) % speakingTasks.length);
    setSeconds(60);
    setTimerRunning(false);
  };

  const toggleSaved = (id: number) => {
    setSavedIds(ids => ids.includes(id) ? ids.filter(item => item !== id) : [...ids, id]);
  };

  return (
    <div className="wb-shell">
      <header className="wb-topbar">
        <Link href="/" className="wb-back">← Biblioteca</Link>
        <Link href="/" className="wb-brand"><SpanishCueBrand variant="compact" tone="light" context="VOCABULARIO" /></Link>
        <div className="wb-session"><i /> SESIÓN DE VOCABULARIO</div>
      </header>

      <main>
        <section className="wb-hero">
          <div className="wb-hero-copy">
            <div className="wb-kicker"><span>A2–B1</span> VOCABULARIO EN USO</div>
            <h1>El Banco<br />de <em>Palabras</em></h1>
            <p>No memorices una lista. Elegí un mundo, descubrí las palabras y hacelas trabajar en frases, pares y conversaciones.</p>
            <div className="wb-hero-stats">
              <div><strong>60</strong><span>palabras y chunks</span></div>
              <div><strong>6</strong><span>mundos cotidianos</span></div>
              <div><strong>4</strong><span>formas de practicar</span></div>
            </div>
            <a href="#mesa" className="wb-start">ABRIR EL BANCO <span>↓</span></a>
          </div>
          <div className="wb-hero-art">
            <img src="/previews/word-bank-studio-v91.webp" alt="Estudio 3D con objetos cotidianos organizados por temas de vocabulario" width="1672" height="941" />
            <div className="wb-float-card card-one"><small>CHUNK</small><b>quedarse sin</b></div>
            <div className="wb-float-card card-two"><small>PALABRA</small><b>el equipaje</b></div>
          </div>
        </section>

        <section className="wb-how">
          <span>PARA EL PROFE</span>
          <h2>Una clase, cuatro recorridos.</h2>
          <p>Elegí un tema. Empezá revelando pocas tarjetas, comprobá comprensión con un reto y terminá produciendo. El apoyo en inglés queda oculto hasta que vos decidas mostrarlo.</p>
          <ol>
            <li><b>01</b> Descubrir</li>
            <li><b>02</b> Reconocer</li>
            <li><b>03</b> Recuperar</li>
            <li><b>04</b> Usar</li>
          </ol>
        </section>

        <section className="wb-workbench" id="mesa">
          <div className="wb-workbench-head">
            <div><span>LA MESA DE TRABAJO</span><h2>¿Con qué palabras practicamos?</h2></div>
            <button className={supportVisible ? "active" : ""} onClick={() => setSupportVisible(value => !value)}>
              {supportVisible ? "Ocultar inglés" : "Mostrar apoyo en inglés"}
            </button>
          </div>

          <div className="wb-topic-rail" role="group" aria-label="Elegir tema de vocabulario">
            <button className={topic === "todos" ? "active" : ""} onClick={() => changeTopic("todos")}><i>∞</i><span>Todo el banco</span><small>60 tarjetas</small></button>
            {wordTopics.map(item => (
              <button key={item.id} className={topic === item.id ? "active" : ""} style={{"--topic-color": item.color} as CSSProperties} onClick={() => changeTopic(item.id)}>
                <i>{item.icon}</i><span>{item.label}</span><small>10 tarjetas</small>
              </button>
            ))}
          </div>

          <nav className="wb-mode-tabs" aria-label="Modo de práctica">
            {modes.map(item => (
              <button key={item.id} className={mode === item.id ? "active" : ""} onClick={() => setMode(item.id)} aria-pressed={mode === item.id}>
                <span>{item.number}</span><div><b>{item.title}</b><small>{item.copy}</small></div>
              </button>
            ))}
          </nav>

          {mode === "banco" && <section className="wb-bank" aria-labelledby="bank-title">
            <div className="wb-bank-tools">
              <div><span id="bank-title">BANCO ACTIVO</span><b>{visibleWords.length} tarjetas visibles</b></div>
              <label className="wb-search"><span>⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar palabra, significado o ejemplo…" /></label>
              <select value={kind} onChange={event => setKind(event.target.value as KindFilter)} aria-label="Filtrar por tipo de palabra">
                <option value="todos">Todos los tipos</option>
                <option value="sustantivo">Sustantivos</option>
                <option value="verbo">Verbos</option>
                <option value="adjetivo">Adjetivos</option>
                <option value="chunk">Chunks</option>
              </select>
              <button className={savedOnly ? "active" : ""} onClick={() => setSavedOnly(value => !value)}>★ Mi banco <small>{savedIds.length}</small></button>
            </div>

            {visibleWords.length > 0 ? <div className="wb-card-grid">
              {visibleWords.map(card => {
                const cardTopic = topicFor(card.topic);
                const isOpen = openWord === card.id;
                return <article className={`wb-word-card ${isOpen ? "open" : ""}`} style={{"--topic-color": cardTopic.color} as CSSProperties} key={card.id}>
                  <button className={`wb-save ${savedIds.includes(card.id) ? "saved" : ""}`} aria-label={savedIds.includes(card.id) ? `Quitar ${card.word} de Mi banco` : `Guardar ${card.word} en Mi banco`} onClick={() => toggleSaved(card.id)}>★</button>
                  <button className="wb-card-face" onClick={() => setOpenWord(isOpen ? null : card.id)} aria-expanded={isOpen}>
                    <span className="wb-card-icon">{card.icon}</span>
                    <small>{cardTopic.label} · {card.kind}</small>
                    <h3>{card.word}</h3>
                    {!isOpen ? <p>Tocá para descubrirla</p> : <div className="wb-card-answer">
                      <p>{card.definition}</p>
                      {supportVisible && <strong>{card.translation}</strong>}
                      <blockquote>“{card.example}”</blockquote>
                    </div>}
                    <i>{isOpen ? "−" : "+"}</i>
                  </button>
                </article>;
              })}
            </div> : <div className="wb-empty"><b>No hay tarjetas con esos filtros.</b><button onClick={() => {setKind("todos");setQuery("");setSavedOnly(false)}}>Ver todo el banco</button></div>}
          </section>}

          {mode === "quiz" && <section className="wb-practice-panel wb-quiz" aria-labelledby="quiz-title">
            <div className="wb-practice-copy">
              <span>RETO EXPRÉS</span><h2 id="quiz-title">Una respuesta. Una razón.</h2>
              <p>El alumno elige y después explica qué pista de la frase o definición lo ayudó.</p>
              <div className="wb-score"><strong>{quizScore.correct}</strong><span>correctas</span><b>{quizScore.attempts}</b><span>intentos</span></div>
              <div className="wb-segmented">
                <button className={quizKind === "frase" ? "active" : ""} onClick={() => {setQuizKind("frase");setQuizChoice(null)}}>Completar frase</button>
                <button className={quizKind === "significado" ? "active" : ""} onClick={() => {setQuizKind("significado");setQuizChoice(null)}}>Elegir significado</button>
              </div>
            </div>
            <div className="wb-quiz-board">
              <div className="wb-question-label"><span>{topicFor(quizTarget.topic).icon}</span>{quizKind === "frase" ? "Elegí la opción y conjugala si hace falta" : "¿Qué significa esta palabra?"}</div>
              <h3>{quizKind === "frase" ? quizTarget.gap : quizTarget.word}</h3>
              <div className="wb-options">
                {quizOptions.map((option, index) => {
                  const answered = quizChoice !== null;
                  const correct = answered && option.id === quizTarget.id;
                  const wrong = answered && option.id === quizChoice && option.id !== quizTarget.id;
                  return <button key={option.id} className={`${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`} onClick={() => answerQuiz(option.id)} disabled={answered}>
                    <span>{String.fromCharCode(65 + index)}</span>{quizKind === "frase" ? option.word : option.definition}
                  </button>;
                })}
              </div>
              {quizChoice !== null && <div className={`wb-feedback ${quizChoice === quizTarget.id ? "correct" : "wrong"}`}>
                <div><b>{quizChoice === quizTarget.id ? "¡Exacto!" : `La respuesta es «${quizTarget.word}».`}</b><p>{quizTarget.example}{supportVisible ? ` · ${quizTarget.translation}` : ""}</p></div>
                <button onClick={nextQuiz}>SIGUIENTE →</button>
              </div>}
            </div>
          </section>}

          {mode === "parejas" && <section className="wb-practice-panel wb-match" aria-labelledby="match-title">
            <div className="wb-practice-copy">
              <span>MEMORIA ACTIVA</span><h2 id="match-title">Encontrá los cinco pares.</h2>
              <p>Uní cada palabra en español con su apoyo en inglés. Las tarjetas cambian cada vez.</p>
              <div className="wb-match-meter"><i style={{width:`${matchedIds.length * 20}%`}} /><span>{matchedIds.length} / 5 pares</span></div>
              <button className="wb-secondary" onClick={resetMatches}>↻ Mezclar otras cinco</button>
            </div>
            <div className={`wb-match-board ${activeMatchKeys.length === 2 ? "checking" : ""}`}>
              {matchTiles.map(tile => {
                const active = activeMatchKeys.includes(tile.key);
                const matched = matchedIds.includes(tile.wordId);
                const first = matchTiles.find(item => item.key === activeMatchKeys[0]);
                const wrong = activeMatchKeys.length === 2 && active && first?.wordId !== tile.wordId;
                return <button key={tile.key} className={`${tile.side} ${active ? "active" : ""} ${matched ? "matched" : ""} ${wrong ? "wrong" : ""}`} onClick={() => chooseMatch(tile)} disabled={matched}>
                  <small>{tile.side === "word" ? "ES" : "EN"}</small><b>{tile.label}</b>
                </button>;
              })}
              {matchedIds.length === 5 && <div className="wb-match-complete"><span>✓</span><b>¡Banco conectado!</b><p>Mezclá para jugar con cinco palabras nuevas.</p><button onClick={resetMatches}>OTRA RONDA</button></div>}
            </div>
          </section>}

          {mode === "hablar" && <section className="wb-practice-panel wb-speak" aria-labelledby="speak-title">
            <div className="wb-practice-copy">
              <span>PRODUCCIÓN ORAL</span><h2 id="speak-title">Tres palabras. Una conexión.</h2>
              <p>{speakingTasks[speakingTask]}</p>
              <div className={`wb-timer ${timerRunning ? "running" : ""}`}>
                <strong>{String(Math.floor(seconds / 60)).padStart(2,"0")}:{String(seconds % 60).padStart(2,"0")}</strong>
                <button onClick={() => {
                  if (seconds === 0) {
                    setSeconds(60);
                    setTimerRunning(false);
                    return;
                  }
                  setTimerRunning(value => !value);
                }}>{seconds === 0 ? "REINICIAR" : timerRunning ? "PAUSA" : "EMPEZAR"}</button>
              </div>
            </div>
            <div className="wb-speak-board">
              <div className="wb-speaking-cards">
                {speakingWords.map((card, index) => <article key={card.id} style={{"--topic-color":topicFor(card.topic).color} as CSSProperties}>
                  <span>{String(index + 1).padStart(2,"0")}</span><i>{card.icon}</i><small>{topicFor(card.topic).label}</small><h3>{card.word}</h3>{supportVisible && <p>{card.translation}</p>}
                </article>)}
              </div>
              <div className="wb-teacher-prompts"><b>SI SE QUEDA EN BLANCO</b><span>¿Quién aparece en la historia?</span><span>¿Dónde sucede?</span><span>¿Qué cambia al final?</span></div>
              <button className="wb-next-round" onClick={nextSpeakingRound}>OTRA COMBINACIÓN <span>↻</span></button>
            </div>
          </section>}
        </section>

        <section className="wb-exit">
          <div><span>CIERRE · 5 MIN</span><h2>Que las palabras salgan del banco.</h2><p>El alumno elige cinco tarjetas para “Mi banco”, usa tres sin mirar y deja dos preparadas para la próxima clase.</p></div>
          <Link href="/">VOLVER A LA BIBLIOTECA →</Link>
        </section>
      </main>
    </div>
  );
}
