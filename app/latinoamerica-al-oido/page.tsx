"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { countries, type Country } from "./data";
import LatamGlobe from "./LatamGlobe";
import "./style.css";

type Stage = "map" | "listen" | "quiz" | "open" | "result" | "reading";
const premiumWords = ["natural", "premium", "enhanced", "neural", "google", "microsoft", "apple"];

function voiceScore(voice: SpeechSynthesisVoice, country: Country) {
  const name = `${voice.name} ${voice.lang}`.toLowerCase();
  const locale = country.locale.toLowerCase();
  let score = 0;
  if (voice.lang.toLowerCase() === locale) score += 120;
  if (voice.lang.toLowerCase().startsWith("es")) score += 25;
  if (country.voiceHints.some(hint => name.includes(hint))) score += 55;
  if (premiumWords.some(word => name.includes(word))) score += 35;
  if (voice.localService) score += 5;
  return score;
}

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
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [listens, setListens] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [transcript, setTranscript] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [chosen, setChosen] = useState<number | null>(null);
  const [openDrafts, setOpenDrafts] = useState<string[]>(["", "", "", ""]);
  const [openRevealed, setOpenRevealed] = useState<number[]>([]);
  const [readingSteps, setReadingSteps] = useState<number[]>([]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const playId = useRef(0);

  const spanishVoices = useMemo(() => voices.filter(voice => voice.lang.toLowerCase().startsWith("es")), [voices]);
  const rankedVoices = useMemo(() => [...spanishVoices].sort((a, b) => voiceScore(b, active) - voiceScore(a, active)), [spanishVoices, active]);
  const voice = useMemo(() => rankedVoices.find(item => item.voiceURI === selectedVoice) || rankedVoices[0], [rankedVoices, selectedVoice]);
  const exactVoice = Boolean(voice && voice.lang.toLowerCase() === active.locale.toLowerCase());
  const duration = useMemo(() => Math.max(40, Math.ceil(active.script.split(/\s+/).length / (2.15 * active.speed))), [active]);
  const multipleQuestions = active.questions.slice(0, 6);
  const openQuestions = active.questions.slice(6, 10);
  const current = multipleQuestions[question];
  const score = answers.reduce((total, answer, index) => total + (answer === multipleQuestions[index]?.answer ? 1 : 0), 0);
  const progress = Math.min(100, (elapsed / duration) * 100);

  useEffect(() => {
    const load = () => setVoices(window.speechSynthesis?.getVoices?.() || []);
    load();
    window.speechSynthesis?.addEventListener?.("voiceschanged", load);
    return () => window.speechSynthesis?.removeEventListener?.("voiceschanged", load);
  }, []);

  useEffect(() => setSelectedVoice(""), [active.id]);
  useEffect(() => () => {
    playId.current += 1;
    window.speechSynthesis?.cancel();
    if (timer.current) clearInterval(timer.current);
  }, []);

  const clearTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  const stopAudio = (reset = false) => {
    playId.current += 1;
    window.speechSynthesis?.cancel();
    clearTimer();
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

  const textFromSecond = (second: number) => {
    const words = active.script.split(/\s+/);
    const wordIndex = Math.min(words.length - 1, Math.floor((second / duration) * words.length));
    return words.slice(Math.max(0, wordIndex)).join(" ");
  };

  const startTicker = (from: number) => {
    clearTimer();
    const started = Date.now() - from * 1000;
    timer.current = setInterval(() => setElapsed(Math.min(duration, (Date.now() - started) / 1000)), 200);
  };

  const playFrom = (from = elapsed >= duration - .5 ? 0 : elapsed) => {
    if (!window.speechSynthesis) return;
    const safeFrom = Math.max(0, Math.min(duration - .5, from));
    playId.current += 1;
    const id = playId.current;
    window.speechSynthesis.cancel();
    clearTimer();
    setElapsed(safeFrom);
    const utterance = new SpeechSynthesisUtterance(textFromSecond(safeFrom));
    utterance.lang = active.locale;
    utterance.rate = active.speed;
    utterance.pitch = active.pitch;
    if (voice) utterance.voice = voice;
    utterance.onstart = () => {
      if (id !== playId.current) return;
      setSpeaking(true);
      setPaused(false);
      startTicker(safeFrom);
    };
    utterance.onend = () => {
      if (id !== playId.current) return;
      clearTimer();
      setSpeaking(false);
      setPaused(false);
      setElapsed(duration);
      setListens(value => Math.min(2, value + 1));
    };
    utterance.onerror = () => {
      if (id !== playId.current) return;
      clearTimer();
      setSpeaking(false);
      setPaused(false);
    };
    window.speechSynthesis.speak(utterance);
  };

  const pauseResume = () => {
    if (!speaking) return;
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
      startTicker(elapsed);
    } else {
      window.speechSynthesis.pause();
      clearTimer();
      setPaused(true);
    }
  };

  const seekTo = (seconds: number) => {
    const target = Math.max(0, Math.min(duration - .5, seconds));
    const continuePlaying = speaking;
    stopAudio(false);
    setElapsed(target);
    if (continuePlaying) playFrom(target);
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

    {stage === "map" && <section className="la-map-screen">
      <div className="la-intro"><span className="la-kicker">FRECUENCIA 10.10 · LATINOAMÉRICA</span><h1>Latinoamérica<br/><em>al oído.</em></h1><p>Elegí un país, escuchá una historia natural y entrená tu oído antes de leer.</p><StudentGuide>Choose a country. Listen twice. Complete both exercises. Read the transcript aloud only at the end.</StudentGuide><div className="la-method"><span><b>1</b> ESCUCHÁ</span><i>→</i><span><b>2</b> ELEGÍ</span><i>→</i><span><b>3</b> RESPONDÉ</span><i>→</i><span><b>4</b> LEÉ</span></div><div className="la-audio-promise"><strong>CONTROL TOTAL</strong><p>Pausa, continuá, retrocedé, avanzá o movete por la línea de tiempo. La transcripción se puede desbloquear cuando vos decidas.</p></div></div>
      <LatamGlobe countries={countries} onChoose={chooseCountry}/>
      <div className="la-country-list">{countries.map(country => <button key={country.id} onClick={() => chooseCountry(country)}><span>{country.flag}</span><b>{country.name}</b><small>{country.city}</small></button>)}</div>
    </section>}

    {stage === "listen" && <section className="la-studio">
      <aside className="la-country-console"><button className="la-back" onClick={() => { stopAudio(); setStage("map"); }}>← CAMBIAR PAÍS</button><div className={`la-flag-orbit ${speaking && !paused ? "broadcasting" : ""}`}><span>{active.flag}</span><i/><i/><b/><b/><b/></div><span className="la-city">{active.city}</span><h1>{active.name}</h1><p>{active.topic}</p><div className="la-console-dial"><i/><span>SEÑAL<br/><b>100%</b></span></div></aside>
      <div className="la-player-panel"><div className="la-broadcast-head"><div><span>HISTORIA · {String(countries.indexOf(active) + 1).padStart(2, "0")}</span><h2>{active.title}</h2><p>{active.speaker}</p></div><b>EN VIVO</b></div><StudentGuide>Listen without reading first. You can pause, go back 10 seconds, move forward, or drag the timeline. Complete two full listens if possible.</StudentGuide><Waveform active={speaking} paused={paused}/>
        <div className="la-timeline"><span>{formatTime(elapsed)}</span><input aria-label="Posición del audio" type="range" min="0" max={duration} step="1" value={Math.min(elapsed, duration)} onChange={event => setElapsed(Number(event.target.value))} onPointerUp={event => seekTo(Number((event.currentTarget as HTMLInputElement).value))}/><span>{formatTime(duration)}</span></div>
        <div className="la-progress"><i style={{ width: `${progress}%` }}/><span>{speaking ? paused ? "PAUSA · PODÉS CONTINUAR CUANDO QUIERAS" : "REPRODUCIENDO" : elapsed >= duration ? "AUDIO COMPLETO" : "LISTO PARA ESCUCHAR"}</span></div>
        <div className="la-transport-controls"><button onClick={() => seekTo(elapsed - 10)}>↶<b>-10</b><small>segundos</small></button><button className="la-main-play" onClick={() => speaking ? pauseResume() : playFrom()}>{speaking ? paused ? "▶" : "Ⅱ" : "▶"}<span>{speaking ? paused ? "CONTINUAR" : "PAUSAR" : elapsed > 0 && elapsed < duration ? "CONTINUAR" : "ESCUCHAR"}</span></button><button onClick={() => seekTo(elapsed + 10)}>↷<b>+10</b><small>segundos</small></button><button onClick={() => stopAudio(true)}>↺<small>reiniciar</small></button></div>
        <div className="la-listen-track">{[0, 1].map(index => <div className={listens > index ? "done" : listens === index ? "current" : ""} key={index}><span>{listens > index ? "✓" : index + 1}</span><p><b>ESCUCHA {index + 1}</b><small>{index === 0 ? "Idea general" : "Detalles importantes"}</small></p></div>)}</div>
        <div className={`la-voice-box ${exactVoice ? "exact" : "fallback"}`}><div><span>{voice ? "◇ VOZ INSTALADA EN ESTE DISPOSITIVO" : "◇ SIN VOZ INSTALADA DETECTADA"}</span><p>{voice ? `${voice.name} · código ${voice.lang}` : "El navegador intentará reproducir el texto con una voz en español disponible."}</p><small>El país identifica la historia; no garantiza el origen ni el acento de la voz sintética.</small></div><button onClick={() => setVoiceOpen(value => !value)}>VER VOCES REALES</button>{voiceOpen && <label>Voces disponibles en este navegador<select value={voice?.voiceURI || ""} onChange={event => setSelectedVoice(event.target.value)}>{rankedVoices.map(item => <option key={item.voiceURI} value={item.voiceURI}>{item.name} · {item.lang}</option>)}</select></label>}</div>
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
