"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { rooms, type Room } from "./data";
import Link from "next/link";

import "./style.css";

type Stage = "lobby" | "listen" | "quiz" | "open" | "result" | "reading";

function formatTime(seconds: number) {
  const safe = Math.max(0, Math.round(seconds));
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
}

function SignalBackground() {
  return <div className="hi-signal-bg" aria-hidden="true"><i/><i/><i/><i/><span/><span/><span/><b/><b/><b/></div>;
}

function Waveform({ active, paused }: { active: boolean; paused: boolean }) {
  return <div className={`hi-waveform ${active && !paused ? "is-playing" : ""}`} aria-hidden="true">
    <span className="hi-signal-sweep"/>
    {Array.from({ length: 42 }, (_, index) => <i key={index} style={{ "--i": index } as CSSProperties}/>) }
  </div>;
}

function StudentGuide({ children }: { children: ReactNode }) {
  return <div className="hi-student-guide"><span>STUDENT INSTRUCTIONS</span><p>{children}</p><i/></div>;
}

function TranscriptCard({ active, final = false }: { active: Room; final?: boolean }) {
  return <article className={`hi-transcript ${final ? "result" : ""}`}>
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

  return <main className="hi-shell" style={{ "--room": active.color } as CSSProperties}>
    <SignalBackground/>
    <header className="hi-topbar"><Link className="hi-back" href="/" onClick={() => stopAudio()}>← BIBLIOTECA</Link><Link className="hi-brand" href="/" onClick={() => stopAudio()}>SPANISHCUE <b>ESCUCHA</b></Link><div className="hi-level"><span>A2</span> COMPRENSIÓN AUDITIVA</div></header>
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

    {stage === "lobby" && <section className="hi-lobby">
      <div className="hi-welcome"><span className="hi-kicker">DIEZ HABITACIONES · DIEZ HISTORIAS</span><h1>El hotel de<br/><em>lo imposible.</em></h1><p>En este hotel, nada funciona como esperás.<br/>Elegí una habitación y escuchá qué pasó.</p><StudentGuide>Choose a room. Listen twice, answer the questions and read the transcript at the end.</StudentGuide><div className="hi-method"><span><b>1</b> ESCUCHÁ</span><span><b>2</b> ELEGÍ</span><span><b>3</b> RESPONDÉ</span><span><b>4</b> LEÉ</span></div>
      <nav className="hi-room-menu" aria-label="Elegir una habitación">{rooms.map(room => <a key={room.id} href={`/el-hotel-de-lo-imposible?room=${room.id}`} style={{"--key-color": room.color} as CSSProperties}><span className="hi-room-number">{room.number}</span><span><b>{room.name}</b><small>{room.topic}</small></span><span aria-hidden="true">↗</span></a>)}</nav></div>
      <figure className="hi-lobby-art"><img src="/hotel-imposible/lobby.webp" alt="Un vestíbulo de hotel fantástico, con un ascensor abierto a las estrellas y una valija flotando." width="1536" height="1024"/><figcaption><span>RECEPCIÓN · 00:00</span><b>Tu llave abre una historia.</b><small>10 audios · 100 preguntas · Nivel A2</small></figcaption></figure>
    </section>}

    {stage === "listen" && <section className="hi-studio">
      <aside className="hi-room-console"><button className="hi-back" onClick={() => { stopAudio(); setStage("lobby"); }}>← RECEPCIÓN</button><div className={`hi-flag-orbit ${speaking && !paused ? "broadcasting" : ""}`}><span>{active.symbol}</span><i/><i/><b/><b/><b/></div><span className="hi-city">{`HABITACIÓN ${active.number}`}</span><h1>{active.name}</h1><p>{active.topic}</p><div className="hi-console-dial"><i/><span>LLAVE<br/><b>{active.number}</b></span></div></aside>
      <div className="hi-player-panel"><div className="hi-broadcast-head"><div><span>HISTORIA · {String(rooms.indexOf(active) + 1).padStart(2, "0")}</span><h2>{active.title}</h2><p>{active.speaker}</p></div><b>RELATO {active.number}</b></div><StudentGuide>Listen without reading first. You can pause, go back 10 seconds, move forward, or drag the timeline. Complete two full listens if possible.</StudentGuide><Waveform active={speaking} paused={paused}/>
        <div className="hi-timeline"><span>{formatTime(elapsed)}</span><input aria-label="Posición del audio" type="range" min="0" max={duration || 1} step="0.1" value={Math.min(elapsed, duration || 1)} onChange={event => seekTo(Number(event.target.value))}/><span>{duration ? formatTime(duration) : "–:––"}</span></div>
        <div className="hi-progress" role="status" aria-live="polite"><i style={{ width: `${progress}%` }}/><span>{audioError ? "ERROR AL CARGAR · RECARGÁ LA PÁGINA" : !duration ? "CARGANDO AUDIO MULTIMEDIA…" : speaking ? "REPRODUCIENDO · AUDIO COMPARTIBLE" : paused ? "PAUSA · PODÉS CONTINUAR CUANDO QUIERAS" : elapsed >= duration - .1 ? "AUDIO COMPLETO" : "LISTO PARA ESCUCHAR"}</span></div>
        <div className="hi-transport-controls"><button disabled={!duration} onClick={() => seekTo(elapsed - 10)}>↶<b>-10</b><small>segundos</small></button><button disabled={!duration || audioError} className="hi-main-play" onClick={() => speaking ? pauseResume() : playFrom()}>{speaking ? "Ⅱ" : "▶"}<span>{speaking ? "PAUSAR" : paused || elapsed > 0 && elapsed < duration ? "CONTINUAR" : "ESCUCHAR"}</span></button><button disabled={!duration} onClick={() => seekTo(elapsed + 10)}>↷<b>+10</b><small>segundos</small></button><button disabled={!duration} onClick={() => stopAudio(true)}>↺<small>reiniciar</small></button></div>
        <div className="hi-listen-track">{[0, 1].map(index => <div className={listens > index ? "done" : listens === index ? "current" : ""} key={index}><span>{listens > index ? "✓" : index + 1}</span><p><b>ESCUCHA {index + 1}</b><small>{index === 0 ? "Idea general" : "Detalles importantes"}</small></p></div>)}</div>
        <div className={`hi-voice-box hi-media-audio ${audioError ? "fallback" : "exact"}`}><div><span>◉ AUDIO MULTIMEDIA INTEGRADO</span><p>Escuchá la historia sin salir de la clase.</p><small>Para que tu alumno la oiga, activá el audio al compartir la pestaña.</small></div><b>{audioError ? "RECARGAR" : "MP3 INCRUSTADO"}</b></div>
        {audioError && <button className="hi-retry" onClick={() => { setAudioError(false); audioRef.current?.load(); }}>Reintentar cargar el audio</button>}
        <button className={`hi-unlock ${listens >= 2 ? "ready" : ""}`} onClick={() => { setStageSafely("quiz"); setQuestion(0); setChosen(answers[0] ?? null); }}>{listens >= 2 ? "EJERCICIO 1 · MULTIPLE CHOICE →" : `ABRIR EJERCICIO AHORA · ${listens}/2 ESCUCHAS`}</button>
        <button className="hi-transcript-toggle teacher-flex" onClick={() => setTranscript(value => !value)}>{transcript ? "OCULTAR TRANSCRIPCIÓN" : "▣ DESBLOQUEAR TEXTO CUANDO QUIERAS"}<small>Teacher control · Unlock at any time</small></button>{transcript && <TranscriptCard active={active}/>}
      </div>
    </section>}

    {stage === "quiz" && <section className="hi-quiz-screen">
      <aside className="hi-quiz-side"><button onClick={() => setStageSafely("listen")}>← VOLVER AL AUDIO</button><span>{active.symbol}</span><small>EJERCICIO 1 · {active.name}</small><h2>Elegí la respuesta correcta.</h2><div className="hi-mini-wave"><i/><i/><i/><i/><i/></div><StudentGuide>Choose one answer. Try not to open the transcript yet, but your teacher can unlock it at any time.</StudentGuide><button className="hi-side-transcript" onClick={() => setTranscript(value => !value)}>▣ {transcript ? "OCULTAR TEXTO" : "UNLOCK TEXT"}</button></aside>
      <div className="hi-question-card"><header><span>EJERCICIO 1 · MULTIPLE CHOICE</span><b>{question + 1} / 6</b></header><div className="hi-question-meter"><i style={{ width: `${((question + 1) / 6) * 100}%` }}/></div>{transcript && <TranscriptCard active={active}/>}<h1>{current.prompt}</h1><div className="hi-options">{current.options.map((option, index) => <button key={option} onClick={() => selectAnswer(index)} className={chosen === null ? "" : index === current.answer ? "correct" : chosen === index ? "wrong" : "muted"}><span>{String.fromCharCode(65 + index)}</span>{option}<i>{chosen !== null && index === current.answer ? "✓" : chosen === index ? "×" : ""}</i></button>)}</div>{chosen !== null && <div className={`hi-feedback ${chosen === current.answer ? "good" : "again"}`}><b>{chosen === current.answer ? "¡Exacto!" : "Casi."}</b><p>{current.feedback}</p></div>}<div className="hi-question-nav"><button className="hi-previous" onClick={previousQuestion}>{question === 0 ? "← VOLVER AL AUDIO" : "← PREGUNTA ANTERIOR"}</button><button className="hi-next" disabled={chosen === null} onClick={nextQuestion}>{question === 5 ? "EJERCICIO 2 · RESPONDER →" : "SIGUIENTE PREGUNTA →"}</button></div></div>
    </section>}

    {stage === "open" && <section className="hi-open-screen">
      <header className="hi-open-head"><button onClick={() => setStage("quiz")}>← EJERCICIO 1</button><span>{active.symbol} {active.name}</span><b>EJERCICIO 2 · ANSWER IN SPANISH</b></header>
      <div className="hi-open-intro"><span>02</span><div><h1>Ahora respondé vos.</h1><StudentGuide>Answer aloud in Spanish. You may write key words, but do not write a complete paragraph. Then reveal a possible answer.</StudentGuide></div><button onClick={() => setTranscript(value => !value)}>▣ {transcript ? "OCULTAR TEXTO" : "UNLOCK TRANSCRIPT"}</button></div>{transcript && <TranscriptCard active={active}/>}
      <div className="hi-open-grid">{openQuestions.map((item, index) => <article className={openRevealed.includes(index) ? "revealed" : ""} key={item.prompt} style={{ "--delay": `${index * .1}s` } as CSSProperties}><span>0{index + 1}</span><h2>{item.prompt}</h2><small>ANSWER ALOUD · RESPONDÉ EN VOZ ALTA</small><textarea aria-label={`Notas para: ${item.prompt}`} value={openDrafts[index]} onChange={event => setOpenDrafts(previous => previous.map((value, itemIndex) => itemIndex === index ? event.target.value : value))} placeholder="Optional: write key words here..."/><button onClick={() => revealOpen(index)}>{openRevealed.includes(index) ? "RESPUESTA POSIBLE" : "COMPARAR RESPUESTA"}</button>{openRevealed.includes(index) && <div><b>{item.options[item.answer]}</b><p>{item.feedback}</p></div>}</article>)}</div>
      <div className="hi-open-finish"><span>{openRevealed.length} / 4 comparadas</span><button onClick={() => setStage("result")}>VER RESULTADO Y LECTURA FINAL →</button></div>
    </section>}

    {stage === "result" && <section className="hi-result-screen"><div className="hi-result-radio"><span>{active.symbol}</span><div className="hi-score-ring" style={{ "--score": `${(score / 6) * 100}%` } as CSSProperties}><b>{score}</b><small>/ 6</small></div><i/><i/></div><span className="hi-kicker">TU ESCUCHA EN ESTA HABITACIÓN · {active.name.toUpperCase()}</span><h1>{score >= 5 ? "Descifraste el misterio." : score >= 3 ? "Captaste la historia." : "Una escucha más y cambia todo."}</h1><p>Opción múltiple: {score}/6 · Respuestas abiertas trabajadas: {openRevealed.length}/4</p><StudentGuide>Final step: open the text and read it aloud. Focus on rhythm, pauses and clear pronunciation.</StudentGuide><button className="hi-reading-launch" onClick={() => setStage("reading")}>ABRIR LECTURA FINAL →</button><div className="hi-result-actions"><button onClick={() => { stopAudio(true); setStage("listen"); }}>↻ VOLVER AL AUDIO</button><button onClick={() => { setQuestion(0); setAnswers([]); setChosen(null); setOpenDrafts(["", "", "", ""]); setOpenRevealed([]); setReadingSteps([]); setStage("quiz"); }}>REPETIR EJERCICIOS</button><button onClick={() => setStage("lobby")}>OTRA HABITACIÓN</button></div></section>}

    {stage === "reading" && <section className="hi-reading-screen">
      <aside><button onClick={() => setStageSafely("result")}>← RESULTADO</button><span>{active.symbol}</span><small>PASO FINAL · FINAL STEP</small><h1>Leé y hacé tuya la voz.</h1><StudentGuide>1. Read silently once. 2. Read aloud slowly. 3. Read again and imitate the speaker&apos;s rhythm.</StudentGuide><div className="hi-reading-checks">{["Lectura silenciosa", "Lectura en voz alta", "Ritmo e imitación"].map((label, index) => <button className={readingSteps.includes(index) ? "done" : ""} onClick={() => setReadingSteps(previous => previous.includes(index) ? previous.filter(item => item !== index) : [...previous, index])} key={label}><span>{readingSteps.includes(index) ? "✓" : index + 1}</span>{label}</button>)}</div><button className="hi-shadow" disabled={!duration || audioError} onClick={() => speaking ? pauseResume() : playFrom()}>{speaking ? "Ⅱ PAUSAR AUDIO" : "▶ ESCUCHAR PARA IMITAR"}</button><button className="hi-shadow" disabled={!duration || audioError} onClick={() => playFrom(0)}>↺ ESCUCHAR DESDE EL PRINCIPIO</button></aside>
      <article className="hi-reading-paper"><header><span>{`HABITACIÓN ${active.number}`} · {active.name}</span><b>{active.title}</b></header><div className="hi-reading-lines">{active.script.split(/(?<=[.!?])\s+/).map((sentence, index) => <span key={`${sentence}-${index}`} style={{ "--line": index } as CSSProperties}>{sentence} </span>)}</div><footer>{active.glossary.map(item => <div key={item.word}><b>{item.word}</b><span>{item.meaning}</span></div>)}</footer><button onClick={() => { stopAudio(); setStage("lobby"); }}>ELEGIR OTRA HABITACIÓN →</button></article>
    </section>}
  </main>;
}
