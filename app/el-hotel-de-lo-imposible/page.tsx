"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { rooms, type Room } from "./data";
import { ClassicTopBar } from "../clasicas-ui/TopBar";
import "../clasicas-ui/clasicas.css";
import "../clasicas-ui/premium.css";
import "./style.css";

type Stage = "lobby" | "listen" | "quiz" | "open" | "result" | "reading";

function formatTime(seconds: number) {
  const safe = Math.max(0, Math.round(seconds));
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
}

function Waveform({ active, paused }: { active: boolean; paused: boolean }) {
  return <div className={`hi-waveform ${active && !paused ? "is-playing" : ""}`} aria-hidden="true">
    {Array.from({ length: 42 }, (_, index) => <i key={index} style={{ "--i": index, "--h": `${18 + ((index * 37) % 60)}%` } as CSSProperties}/>) }
  </div>;
}

function StudentGuide({ children }: { children: ReactNode }) {
  return <div className="hi-student-guide"><span>STUDENT INSTRUCTIONS</span><p>{children}</p></div>;
}

function TranscriptCard({ active, final = false }: { active: Room; final?: boolean }) {
  return <article className={`cx-card hi-transcript ${final ? "result" : ""}`}>
    <span>{final ? "FINAL READING TEXT" : "TRANSCRIPCIÓN DESBLOQUEADA · UNLOCKED TRANSCRIPT"}</span>
    <p>{active.script}</p>
    <div>{active.glossary.map(item => <small key={item.word}><b>{item.word}</b>{item.meaning}</small>)}</div>
  </article>;
}

export default function HotelDeLoImposible() {
  const [stage, setStage] = useState<Stage>("lobby");
  const [active, setActive] = useState<Room>(rooms[0]);
  const [listens, setListens] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const [transcript, setTranscript] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [chosen, setChosen] = useState<number | null>(null);
  const [openDrafts, setOpenDrafts] = useState<string[]>(["", "", "", ""]);
  const [openRevealed, setOpenRevealed] = useState<number[]>([]);
  const [readingSteps, setReadingSteps] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const multipleQuestions = active.questions.slice(0, 6);
  const openQuestions = active.questions.slice(6, 10);
  const current = multipleQuestions[question];
  const score = answers.reduce((total, answer, index) => total + (answer === multipleQuestions[index]?.answer ? 1 : 0), 0);
  const progress = duration > 0 ? Math.min(100, (elapsed / duration) * 100) : 0;

  const stopAudio = (reset = false) => {
    const audio = audioRef.current;
    audio?.pause();
    if (reset && audio) audio.currentTime = 0;
    setSpeaking(false);
    setPaused(false);
    if (reset) setElapsed(0);
  };

  const chooseRoom = (room: Room) => {
    stopAudio(true);
    setActive(room);
    setStage("listen");
    setListens(0);
    setTranscript(false);
    setQuestion(0);
    setAnswers([]);
    setChosen(null);
    setOpenDrafts(["", "", "", ""]);
    setOpenRevealed([]);
    setReadingSteps([]);
  };

  useEffect(() => {
    const roomId = new URLSearchParams(window.location.search).get("room");
    const requestedRoom = rooms.find((room) => room.id === roomId);
    const frame = requestedRoom ? window.requestAnimationFrame(() => chooseRoom(requestedRoom)) : null;
    // The room URL is read once on page load. Lobby choices are normal links.
    return () => { if (frame !== null) window.cancelAnimationFrame(frame); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    setDuration(0);
    setElapsed(0);
    setSpeaking(false);
    setPaused(false);
    setAudioError(false);
  }, [active.id]);

  useEffect(() => () => audioRef.current?.pause(), []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [stage]);

  const playFrom = (from = elapsed >= duration - .5 ? 0 : elapsed) => {
    const audio = audioRef.current;
    if (!audio) return;
    const total = Number.isFinite(audio.duration) ? audio.duration : duration;
    const safeFrom = Math.max(0, Math.min(Math.max(0, total - .1), from));
    audio.currentTime = safeFrom;
    setElapsed(safeFrom);
    void audio.play().catch(() => {
      setSpeaking(false);
      setPaused(false);
      setAudioError(true);
    });
  };

  const pauseResume = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) void audio.play().catch(() => setAudioError(true));
    else audio.pause();
  };

  const seekTo = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const target = Math.max(0, Math.min(duration, seconds));
    audio.currentTime = target;
    setElapsed(target);
  };

  const selectAnswer = (index: number) => {
    if (chosen !== null) return;
    setChosen(index);
    setAnswers(previous => { const next = [...previous]; next[question] = index; return next; });
  };

  const nextQuestion = () => {
    if (question === multipleQuestions.length - 1) setStage("open");
    else {
      const nextIndex = question + 1;
      setQuestion(nextIndex);
      setChosen(answers[nextIndex] ?? null);
    }
  };

  const revealOpen = (index: number) => setOpenRevealed(previous => previous.includes(index) ? previous : [...previous, index]);
  const setStageSafely = (next: Stage) => { stopAudio(false); setStage(next); };
  const previousQuestion = () => {
    if (question === 0) {
      setStageSafely("listen");
      return;
    }
    const previousIndex = question - 1;
    setQuestion(previousIndex);
    setChosen(answers[previousIndex] ?? null);
  };

  const status = audioError ? "Error al cargar · recarga la página" : !duration ? "Cargando el audio…" : speaking ? "Reproduciendo · audio compartible" : paused ? "Pausa · puedes continuar cuando quieras" : elapsed >= duration - .1 ? "Audio completo" : "Listo para escuchar";
  return <main className="cx cxp hi-shell" style={{ "--room": active.color, "--cx-accent": "#5f3dc4" } as CSSProperties}>
    <ClassicTopBar title="El hotel de lo imposible · A2" context="Escucha"><span className="cx-chip">A2 · comprensión auditiva</span></ClassicTopBar>
    <audio
      ref={audioRef}
      className="hi-real-audio"
      src={`/audio/hotel/${active.id}.mp3`}
      preload="auto"
      onLoadedMetadata={event => { if (Number.isFinite(event.currentTarget.duration)) setDuration(event.currentTarget.duration); setAudioError(false); }}
      onTimeUpdate={event => setElapsed(event.currentTarget.currentTime)}
      onPlay={() => { setSpeaking(true); setPaused(false); }}
      onPause={event => { setSpeaking(false); setPaused(event.currentTarget.currentTime > 0 && event.currentTarget.currentTime < event.currentTarget.duration); }}
      onEnded={event => { setSpeaking(false); setPaused(false); setElapsed(event.currentTarget.duration); setListens(value => Math.min(2, value + 1)); }}
      onError={() => { setAudioError(true); setSpeaking(false); setPaused(false); }}
    />

    {stage === "lobby" && <>
      <section className="cxp-hero hi-hero"><article className="cx-rise"><p className="cx-kicker">Diez habitaciones · diez historias</p><h1>El hotel de <em>lo imposible.</em></h1><p className="cxp-lead">En este hotel, nada funciona como esperas. Elige una habitación y escucha qué pasó.</p><StudentGuide>Choose a room. Listen twice, answer the questions and read the transcript at the end.</StudentGuide><ol className="hi-method"><li>Escucha</li><li>Elige</li><li>Responde</li><li>Lee</li></ol></article><figure className="cxp-art cx-rise hi-lobby-art"><img src="/hotel-imposible/lobby.webp" alt="Un vestíbulo de hotel fantástico, con un ascensor abierto a las estrellas y una valija flotando." width="1536" height="1024"/><figcaption><b>Tu llave abre una historia.</b><small>10 audios · 100 preguntas · nivel A2</small></figcaption></figure></section>
      <section className="cxp-page"><header><p className="cx-kicker">Recepción · elige una llave</p></header><nav className="hi-room-menu" aria-label="Elegir una habitación">{rooms.map(room => <a key={room.id} href={`/el-hotel-de-lo-imposible?room=${room.id}`} style={{"--key-color": room.color} as CSSProperties}><span className="hi-room-number">{room.number}</span><span><b>{room.name}</b><small>{room.topic}</small></span><i aria-hidden="true">{room.symbol}</i></a>)}</nav></section>
    </>}

    {stage === "listen" && <section className="cxp-page hi-studio">
      <aside className="cx-card hi-room-console"><button className="cx-btn" onClick={() => { stopAudio(); setStage("lobby"); }}>← Recepción</button><span className="hi-symbol" aria-hidden="true">{active.symbol}</span><p className="cx-kicker">Habitación {active.number}</p><h1>{active.name}</h1><p>{active.topic}</p></aside>
      <div className="hi-player-panel">
        <header className="hi-player-head"><p className="cx-kicker">Historia {String(rooms.indexOf(active) + 1).padStart(2, "0")} · relato {active.number}</p><h2>{active.title}</h2><p>{active.speaker}</p></header>
        <StudentGuide>Listen without reading first. You can pause, go back 10 seconds, move forward, or drag the timeline. Complete two full listens if possible.</StudentGuide>
        <div className="cx-card hi-player">
          <Waveform active={speaking} paused={paused}/>
          <div className="hi-timeline"><span>{formatTime(elapsed)}</span><input aria-label="Posición del audio" type="range" min="0" max={duration || 1} step="0.1" value={Math.min(elapsed, duration || 1)} onChange={event => seekTo(Number(event.target.value))}/><span>{duration ? formatTime(duration) : "–:––"}</span></div>
          <div className="hi-progress" role="status" aria-live="polite"><i style={{ width: `${progress}%` }}/><span>{status}</span></div>
          <div className="hi-transport-controls"><button className="cx-btn" disabled={!duration} onClick={() => seekTo(elapsed - 10)}>↶ −10 s</button><button disabled={!duration || audioError} className="cx-btn is-accent hi-main-play" onClick={() => speaking ? pauseResume() : playFrom()}>{speaking ? "Ⅱ Pausar" : paused || elapsed > 0 && elapsed < duration ? "▶ Continuar" : "▶ Escuchar"}</button><button className="cx-btn" disabled={!duration} onClick={() => seekTo(elapsed + 10)}>+10 s ↷</button><button className="cx-btn" disabled={!duration} onClick={() => stopAudio(true)}>↺ Reiniciar</button></div>
          {audioError && <button className="cx-btn hi-retry" onClick={() => { setAudioError(false); audioRef.current?.load(); }}>Reintentar cargar el audio</button>}
        </div>
        <div className="hi-listen-track">{[0, 1].map(index => <div className={listens > index ? "done" : listens === index ? "current" : ""} key={index}><span>{listens > index ? "✓" : index + 1}</span><p><b>Escucha {index + 1}</b><small>{index === 0 ? "Idea general" : "Detalles importantes"}</small></p></div>)}</div>
        <p className="hi-share-note">Para que tu alumno oiga la historia, activa el audio al compartir la pestaña.</p>
        <button className={`cx-btn ${listens >= 2 ? "is-primary" : ""} hi-unlock`} onClick={() => { setStageSafely("quiz"); setQuestion(0); setChosen(answers[0] ?? null); }}>{listens >= 2 ? "EJERCICIO 1 · MULTIPLE CHOICE →" : `Abrir el ejercicio ahora · ${listens} de 2 escuchas`}</button>
        <button className="cx-btn hi-transcript-toggle" aria-expanded={transcript} onClick={() => setTranscript(value => !value)}>{transcript ? "Ocultar la transcripción" : "Desbloquear el texto"}<small>Teacher control · Unlock at any time</small></button>{transcript && <TranscriptCard active={active}/>}
      </div>
    </section>}

    {stage === "quiz" && <section className="cxp-page hi-studio">
      <aside className="cx-card hi-room-console"><button className="cx-btn" onClick={() => setStageSafely("listen")}>← Volver al audio</button><span className="hi-symbol" aria-hidden="true">{active.symbol}</span><p className="cx-kicker">Ejercicio 1 · {active.name}</p><h1>Elige la respuesta correcta.</h1><StudentGuide>Choose one answer. Try not to open the transcript yet, but your teacher can unlock it at any time.</StudentGuide><button className="cx-btn hi-en-label" aria-expanded={transcript} onClick={() => setTranscript(value => !value)}>{transcript ? "Ocultar el texto" : "UNLOCK TEXT"}</button></aside>
      <div className="cx-card hi-question-card"><header><span className="hi-en-label">EJERCICIO 1 · MULTIPLE CHOICE</span><b className="cx-chip">{question + 1} de 6</b></header><div className="hi-question-meter"><i style={{ width: `${((question + 1) / 6) * 100}%` }}/></div>{transcript && <TranscriptCard active={active}/>}<h1>{current.prompt}</h1><div className="hi-options">{current.options.map((option, index) => <button key={option} onClick={() => selectAnswer(index)} className={chosen === null ? "" : index === current.answer ? "correct" : chosen === index ? "wrong" : "muted"}><span>{String.fromCharCode(65 + index)}</span>{option}<i>{chosen !== null && index === current.answer ? "✓" : chosen === index ? "×" : ""}</i></button>)}</div>{chosen !== null && <div className={`hi-feedback ${chosen === current.answer ? "good" : "again"}`}><b>{chosen === current.answer ? "¡Exacto!" : "Casi."}</b><p>{current.feedback}</p></div>}<div className="hi-question-nav"><button className="cx-btn" onClick={previousQuestion}>{question === 0 ? "← Volver al audio" : "← Pregunta anterior"}</button><button className="cx-btn is-primary" disabled={chosen === null} onClick={nextQuestion}>{question === 5 ? "Ejercicio 2 · responder →" : "Siguiente pregunta →"}</button></div></div>
    </section>}

    {stage === "open" && <section className="cxp-page hi-open-screen">
      <header className="hi-open-head"><button className="cx-btn" onClick={() => setStage("quiz")}>← Ejercicio 1</button><span className="cx-chip">{active.symbol} {active.name}</span><b className="cx-chip is-accent hi-en-label">EJERCICIO 2 · ANSWER IN SPANISH</b></header>
      <div className="hi-open-intro"><h1>Ahora responde tú.</h1><StudentGuide>Answer aloud in Spanish. You may write key words, but do not write a complete paragraph. Then reveal a possible answer.</StudentGuide><button className="cx-btn hi-en-label" aria-expanded={transcript} onClick={() => setTranscript(value => !value)}>{transcript ? "Ocultar el texto" : "UNLOCK TRANSCRIPT"}</button></div>{transcript && <TranscriptCard active={active}/>}
      <div className="hi-open-grid">{openQuestions.map((item, index) => <article className={`cx-card ${openRevealed.includes(index) ? "revealed" : ""}`} key={item.prompt}><span>0{index + 1}</span><h2>{item.prompt}</h2><small className="hi-en-label">ANSWER ALOUD · RESPONDE EN VOZ ALTA</small><textarea aria-label={`Notas para: ${item.prompt}`} value={openDrafts[index]} onChange={event => setOpenDrafts(previous => previous.map((value, itemIndex) => itemIndex === index ? event.target.value : value))} placeholder="Optional: write key words here..."/><button className="cx-btn" onClick={() => revealOpen(index)}>{openRevealed.includes(index) ? "Respuesta posible" : "Comparar respuesta"}</button>{openRevealed.includes(index) && <div><b>{item.options[item.answer]}</b><p>{item.feedback}</p></div>}</article>)}</div>
      <div className="cxp-controls"><span><b>{openRevealed.length} de 4</b>comparadas</span><button className="cx-btn is-primary" onClick={() => setStage("result")}>Ver resultado y lectura final →</button></div>
    </section>}

    {stage === "result" && <section className="cxp-page hi-result-screen"><div className="hi-score-ring" style={{ "--score": `${(score / 6) * 100}%` } as CSSProperties}><b>{score}</b><small>de 6</small></div><p className="cx-kicker">Tu escucha en esta habitación · {active.name}</p><h1>{score >= 5 ? "Descifraste el misterio." : score >= 3 ? "Captaste la historia." : "Una escucha más y cambia todo."}</h1><p>Opción múltiple: {score} de 6 · respuestas abiertas trabajadas: {openRevealed.length} de 4</p><StudentGuide>Final step: open the text and read it aloud. Focus on rhythm, pauses and clear pronunciation.</StudentGuide><button className="cx-btn is-primary" onClick={() => setStage("reading")}>Abrir la lectura final →</button><div className="hi-result-actions"><button className="cx-btn" onClick={() => { stopAudio(true); setStage("listen"); }}>↻ Volver al audio</button><button className="cx-btn" onClick={() => { setQuestion(0); setAnswers([]); setChosen(null); setOpenDrafts(["", "", "", ""]); setOpenRevealed([]); setReadingSteps([]); setStage("quiz"); }}>Repetir los ejercicios</button><button className="cx-btn" onClick={() => setStage("lobby")}>Otra habitación</button></div></section>}

    {stage === "reading" && <section className="cxp-page hi-studio">
      <aside className="cx-card hi-room-console"><button className="cx-btn" onClick={() => setStageSafely("result")}>← Resultado</button><span className="hi-symbol" aria-hidden="true">{active.symbol}</span><p className="cx-kicker hi-en-label">PASO FINAL · FINAL STEP</p><h1>Lee y haz tuya la voz.</h1><StudentGuide>1. Read silently once. 2. Read aloud slowly. 3. Read again and imitate the speaker&apos;s rhythm.</StudentGuide><div className="hi-reading-checks">{["Lectura silenciosa", "Lectura en voz alta", "Ritmo e imitación"].map((label, index) => <button className={readingSteps.includes(index) ? "done" : ""} aria-pressed={readingSteps.includes(index)} onClick={() => setReadingSteps(previous => previous.includes(index) ? previous.filter(item => item !== index) : [...previous, index])} key={label}><span>{readingSteps.includes(index) ? "✓" : index + 1}</span>{label}</button>)}</div><button className="cx-btn is-accent" disabled={!duration || audioError} onClick={() => speaking ? pauseResume() : playFrom()}>{speaking ? "Ⅱ Pausar el audio" : "▶ Escuchar para imitar"}</button><button className="cx-btn" disabled={!duration || audioError} onClick={() => playFrom(0)}>↺ Escuchar desde el principio</button></aside>
      <article className="cx-card hi-reading-paper"><header><p className="cx-kicker">Habitación {active.number} · {active.name}</p><h2>{active.title}</h2></header><div className="hi-reading-lines">{active.script.replace(/([.!?])\s+/g, '$1\u0000').split('\u0000').map((sentence, index) => <span key={`${sentence}-${index}`}>{sentence} </span>)}</div><footer>{active.glossary.map(item => <div key={item.word}><b>{item.word}</b><span>{item.meaning}</span></div>)}</footer><button className="cx-btn is-primary" onClick={() => { stopAudio(); setStage("lobby"); }}>Elegir otra habitación →</button></article>
    </section>}
  </main>;
}
