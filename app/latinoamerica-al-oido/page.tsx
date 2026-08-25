"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { countries, type Country } from "./data";
import LatamGlobe from "./LatamGlobe";
import "./style.css";

type Stage = "map" | "listen" | "quiz" | "open" | "result" | "reading";

function formatTime(seconds: number) {
  const safe = Math.max(0, Math.round(seconds));
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
}

function SignalBackground() {
  return <div className="la-signal-bg" aria-hidden="true"><i/><i/><i/><i/><span/><span/><span/><b/><b/><b/></div>;
}

function Waveform({ active, paused }: { active: boolean; paused: boolean }) {
  return <div className={`la-waveform ${active && !paused ? "is-playing" : ""}`} aria-hidden="true">
    <span className="la-signal-sweep"/>
    {Array.from({ length: 42 }, (_, index) => <i key={index} style={{ "--i": index } as CSSProperties}/>) }
  </div>;
}

function StudentGuide({ children }: { children: ReactNode }) {
  return <div className="la-student-guide"><span>STUDENT INSTRUCTIONS</span><p>{children}</p><i/></div>;
}

function TranscriptCard({ active, final = false }: { active: Country; final?: boolean }) {
  return <article className={`la-transcript ${final ? "result" : ""}`}>
    <span>{final ? "FINAL READING TEXT" : "TRANSCRIPCIÓN DESBLOQUEADA · UNLOCKED TRANSCRIPT"}</span>
    <p>{active.script}</p>
    <div>{active.glossary.map(item => <small key={item.word}><b>{item.word}</b>{item.meaning}</small>)}</div>
  </article>;
}

export default function LatinoamericaAlOido() {
  const [stage, setStage] = useState<Stage>("map");
  const [active, setActive] = useState<Country>(countries[0]);
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

  const stopAudio = (reset = false) => {
    const audio = audioRef.current;
    audio?.pause();
    if (reset && audio) audio.currentTime = 0;
    setSpeaking(false);
    setPaused(false);
    if (reset) setElapsed(0);
  };

  const chooseCountry = (country: Country) => {
    stopAudio(true);
    setActive(country);
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
    });
  };

  const pauseResume = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) void audio.play();
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
    setAnswers(previous => [...previous, index]);
  };

  const nextQuestion = () => {
    if (question === multipleQuestions.length - 1) setStage("open");
    else { setQuestion(value => value + 1); setChosen(null); }
  };

  const revealOpen = (index: number) => setOpenRevealed(previous => previous.includes(index) ? previous : [...previous, index]);
  const setStageSafely = (next: Stage) => { stopAudio(false); setStage(next); };

  return <main className="la-shell" style={{ "--country": active.color } as CSSProperties}>
    <SignalBackground/>
    <header className="la-topbar"><button onClick={() => { stopAudio(); window.location.href = "/"; }}>← BIBLIOTECA</button><a className="la-brand" href="/">CHESPANISH <b>RADIO</b></a><div className="la-level"><span>A2</span> COMPRENSIÓN AUDITIVA</div></header>
    <audio
      ref={audioRef}
      className="la-real-audio"
      src={`/audio/latam/${active.id}.mp3`}
      preload="auto"
      onLoadedMetadata={event => { setDuration(event.currentTarget.duration); setAudioError(false); }}
      onTimeUpdate={event => setElapsed(event.currentTarget.currentTime)}
      onPlay={() => { setSpeaking(true); setPaused(false); }}
      onPause={event => { setSpeaking(false); setPaused(event.currentTarget.currentTime > 0 && event.currentTarget.currentTime < event.currentTarget.duration); }}
      onEnded={event => { setSpeaking(false); setPaused(false); setElapsed(event.currentTarget.duration); setListens(value => Math.min(2, value + 1)); }}
      onError={() => { setAudioError(true); setSpeaking(false); setPaused(false); }}
    />

    {stage === "map" && <section className="la-map-screen">
      <div className="la-intro"><span className="la-kicker">FRECUENCIA 10.10 · LATINOAMÉRICA</span><h1>Latinoamérica<br/><em>al oído.</em></h1><p>Elegí un país, escuchá una historia natural y entrená tu oído antes de leer.</p><StudentGuide>Choose a country. Listen twice. Complete both exercises. Read the transcript aloud only at the end.</StudentGuide><div className="la-method"><span><b>1</b> ESCUCHÁ</span><i>→</i><span><b>2</b> ELEGÍ</span><i>→</i><span><b>3</b> RESPONDÉ</span><i>→</i><span><b>4</b> LEÉ</span></div><div className="la-audio-promise"><strong>CONTROL TOTAL</strong><p>Pausa, continuá, retrocedé, avanzá o movete por la línea de tiempo. La transcripción se puede desbloquear cuando vos decidas.</p></div></div>
      <LatamGlobe countries={countries} onChoose={chooseCountry}/>
      <div className="la-country-list">{countries.map(country => <button key={country.id} onClick={() => chooseCountry(country)}><span>{country.flag}</span><b>{country.name}</b><small>{country.city}</small></button>)}</div>
    </section>}

    {stage === "listen" && <section className="la-studio">
      <aside className="la-country-console"><button className="la-back" onClick={() => { stopAudio(); setStage("map"); }}>← CAMBIAR PAÍS</button><div className={`la-flag-orbit ${speaking && !paused ? "broadcasting" : ""}`}><span>{active.flag}</span><i/><i/><b/><b/><b/></div><span className="la-city">{active.city}</span><h1>{active.name}</h1><p>{active.topic}</p><div className="la-console-dial"><i/><span>SEÑAL<br/><b>100%</b></span></div></aside>
      <div className="la-player-panel"><div className="la-broadcast-head"><div><span>HISTORIA · {String(countries.indexOf(active) + 1).padStart(2, "0")}</span><h2>{active.title}</h2><p>{active.speaker}</p></div><b>EN VIVO</b></div><StudentGuide>Listen without reading first. You can pause, go back 10 seconds, move forward, or drag the timeline. Complete two full listens if possible.</StudentGuide><Waveform active={speaking} paused={paused}/>
        <div className="la-timeline"><span>{formatTime(elapsed)}</span><input aria-label="Posición del audio" type="range" min="0" max={duration || 1} step="0.1" value={Math.min(elapsed, duration || 1)} onChange={event => seekTo(Number(event.target.value))}/><span>{duration ? formatTime(duration) : "–:––"}</span></div>
        <div className="la-progress"><i style={{ width: `${progress}%` }}/><span>{audioError ? "ERROR AL CARGAR · RECARGÁ LA PÁGINA" : !duration ? "CARGANDO AUDIO MULTIMEDIA…" : speaking ? "REPRODUCIENDO · AUDIO COMPARTIBLE" : paused ? "PAUSA · PODÉS CONTINUAR CUANDO QUIERAS" : elapsed >= duration - .1 ? "AUDIO COMPLETO" : "LISTO PARA ESCUCHAR"}</span></div>
        <div className="la-transport-controls"><button disabled={!duration} onClick={() => seekTo(elapsed - 10)}>↶<b>-10</b><small>segundos</small></button><button disabled={!duration || audioError} className="la-main-play" onClick={() => speaking ? pauseResume() : playFrom()}>{speaking ? "Ⅱ" : "▶"}<span>{speaking ? "PAUSAR" : paused || elapsed > 0 && elapsed < duration ? "CONTINUAR" : "ESCUCHAR"}</span></button><button disabled={!duration} onClick={() => seekTo(elapsed + 10)}>↷<b>+10</b><small>segundos</small></button><button disabled={!duration} onClick={() => stopAudio(true)}>↺<small>reiniciar</small></button></div>
        <div className="la-listen-track">{[0, 1].map(index => <div className={listens > index ? "done" : listens === index ? "current" : ""} key={index}><span>{listens > index ? "✓" : index + 1}</span><p><b>ESCUCHA {index + 1}</b><small>{index === 0 ? "Idea general" : "Detalles importantes"}</small></p></div>)}</div>
        <div className={`la-voice-box la-media-audio ${audioError ? "fallback" : "exact"}`}><div><span>◉ AUDIO MULTIMEDIA INTEGRADO</span><p>Archivo MP3 reproducido directamente por la página.</p><small>Compatible con el audio compartido de Preply, igual que un video o una actividad de listening.</small></div><b>{audioError ? "RECARGAR" : "LISTO PARA COMPARTIR"}</b></div>
        <button className={`la-unlock ${listens >= 2 ? "ready" : ""}`} onClick={() => { setStageSafely("quiz"); setQuestion(0); setChosen(null); }}>{listens >= 2 ? "EJERCICIO 1 · MULTIPLE CHOICE →" : `ABRIR EJERCICIO AHORA · ${listens}/2 ESCUCHAS`}</button>
        <button className="la-transcript-toggle teacher-flex" onClick={() => setTranscript(value => !value)}>{transcript ? "OCULTAR TRANSCRIPCIÓN" : "▣ DESBLOQUEAR TEXTO CUANDO QUIERAS"}<small>Teacher control · Unlock at any time</small></button>{transcript && <TranscriptCard active={active}/>}
      </div>
    </section>}

    {stage === "quiz" && <section className="la-quiz-screen">
      <aside className="la-quiz-side"><button onClick={() => setStageSafely("listen")}>← VOLVER AL AUDIO</button><span>{active.flag}</span><small>EJERCICIO 1 · {active.name}</small><h2>Elegí la respuesta correcta.</h2><div className="la-mini-wave"><i/><i/><i/><i/><i/></div><StudentGuide>Choose one answer. Try not to open the transcript yet, but your teacher can unlock it at any time.</StudentGuide><button className="la-side-transcript" onClick={() => setTranscript(value => !value)}>▣ {transcript ? "OCULTAR TEXTO" : "UNLOCK TEXT"}</button></aside>
      <div className="la-question-card"><header><span>EJERCICIO 1 · MULTIPLE CHOICE</span><b>{question + 1} / 6</b></header><div className="la-question-meter"><i style={{ width: `${((question + 1) / 6) * 100}%` }}/></div>{transcript && <TranscriptCard active={active}/>}<h1>{current.prompt}</h1><div className="la-options">{current.options.map((option, index) => <button key={option} onClick={() => selectAnswer(index)} className={chosen === null ? "" : index === current.answer ? "correct" : chosen === index ? "wrong" : "muted"}><span>{String.fromCharCode(65 + index)}</span>{option}<i>{chosen !== null && index === current.answer ? "✓" : chosen === index ? "×" : ""}</i></button>)}</div>{chosen !== null && <div className={`la-feedback ${chosen === current.answer ? "good" : "again"}`}><b>{chosen === current.answer ? "¡Exacto!" : "Casi."}</b><p>{current.feedback}</p></div>}<button className="la-next" disabled={chosen === null} onClick={nextQuestion}>{question === 5 ? "EJERCICIO 2 · RESPONDER →" : "SIGUIENTE PREGUNTA →"}</button></div>
    </section>}

    {stage === "open" && <section className="la-open-screen">
      <header className="la-open-head"><button onClick={() => setStage("quiz")}>← EJERCICIO 1</button><span>{active.flag} {active.name}</span><b>EJERCICIO 2 · ANSWER IN SPANISH</b></header>
      <div className="la-open-intro"><span>02</span><div><h1>Ahora respondé vos.</h1><StudentGuide>Answer aloud in Spanish. You may write key words, but do not write a complete paragraph. Then reveal a possible answer.</StudentGuide></div><button onClick={() => setTranscript(value => !value)}>▣ {transcript ? "OCULTAR TEXTO" : "UNLOCK TRANSCRIPT"}</button></div>{transcript && <TranscriptCard active={active}/>}
      <div className="la-open-grid">{openQuestions.map((item, index) => <article className={openRevealed.includes(index) ? "revealed" : ""} key={item.prompt} style={{ "--delay": `${index * .1}s` } as CSSProperties}><span>0{index + 1}</span><h2>{item.prompt}</h2><small>ANSWER ALOUD · RESPONDÉ EN VOZ ALTA</small><textarea value={openDrafts[index]} onChange={event => setOpenDrafts(previous => previous.map((value, itemIndex) => itemIndex === index ? event.target.value : value))} placeholder="Optional: write key words here..."/><button onClick={() => revealOpen(index)}>{openRevealed.includes(index) ? "RESPUESTA POSIBLE" : "COMPARAR RESPUESTA"}</button>{openRevealed.includes(index) && <div><b>{item.options[item.answer]}</b><p>{item.feedback}</p></div>}</article>)}</div>
      <div className="la-open-finish"><span>{openRevealed.length} / 4 comparadas</span><button onClick={() => setStage("result")}>VER RESULTADO Y LECTURA FINAL →</button></div>
    </section>}

    {stage === "result" && <section className="la-result-screen"><div className="la-result-radio"><span>{active.flag}</span><div className="la-score-ring" style={{ "--score": `${(score / 6) * 100}%` } as CSSProperties}><b>{score}</b><small>/ 6</small></div><i/><i/></div><span className="la-kicker">DOS EJERCICIOS COMPLETADOS · {active.name.toUpperCase()}</span><h1>{score >= 5 ? "Tu oído está en frecuencia." : score >= 3 ? "Captaste la historia." : "Una escucha más y cambia todo."}</h1><p>Opción múltiple: {score}/6 · Respuestas abiertas trabajadas: {openRevealed.length}/4</p><StudentGuide>Final step: open the text and read it aloud. Focus on rhythm, pauses and clear pronunciation.</StudentGuide><button className="la-reading-launch" onClick={() => setStage("reading")}>ABRIR LECTURA FINAL →</button><div className="la-result-actions"><button onClick={() => { setElapsed(0); setStage("listen"); }}>↻ VOLVER AL AUDIO</button><button onClick={() => { setQuestion(0); setAnswers([]); setChosen(null); setStage("quiz"); }}>REPETIR EJERCICIOS</button><button onClick={() => setStage("map")}>OTRO PAÍS</button></div></section>}

    {stage === "reading" && <section className="la-reading-screen">
      <aside><button onClick={() => setStage("result")}>← RESULTADO</button><span>{active.flag}</span><small>PASO FINAL · FINAL STEP</small><h1>Leé y hacé tuya la voz.</h1><StudentGuide>1. Read silently once. 2. Read aloud slowly. 3. Read again and imitate the speaker&apos;s rhythm.</StudentGuide><div className="la-reading-checks">{["Lectura silenciosa", "Lectura en voz alta", "Ritmo e imitación"].map((label, index) => <button className={readingSteps.includes(index) ? "done" : ""} onClick={() => setReadingSteps(previous => previous.includes(index) ? previous.filter(item => item !== index) : [...previous, index])} key={label}><span>{readingSteps.includes(index) ? "✓" : index + 1}</span>{label}</button>)}</div><button className="la-shadow" onClick={() => { setElapsed(0); playFrom(0); }}>▶ ESCUCHAR PARA IMITAR</button></aside>
      <article className="la-reading-paper"><header><span>{active.city} · {active.name}</span><b>{active.title}</b></header><div className="la-reading-lines">{active.script.split(/(?<=[.!?])\s+/).map((sentence, index) => <span key={`${sentence}-${index}`} style={{ "--line": index } as CSSProperties}>{sentence} </span>)}</div><footer>{active.glossary.map(item => <div key={item.word}><b>{item.word}</b><span>{item.meaning}</span></div>)}</footer><button onClick={() => { stopAudio(); setStage("map"); }}>ELEGIR OTRO PAÍS →</button></article>
    </section>}
  </main>;
}
