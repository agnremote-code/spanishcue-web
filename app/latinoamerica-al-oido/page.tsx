"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { countries, type Country } from "./data";
import "./style.css";

type Stage = "map" | "listen" | "quiz" | "result";

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

function SignalBackground() {
  return <div className="la-signal-bg" aria-hidden="true"><i/><i/><i/><i/><span/><span/><span/></div>;
}

function Waveform({ active, paused }: { active: boolean; paused: boolean }) {
  return <div className={`la-waveform ${active && !paused ? "is-playing" : ""}`} aria-hidden="true">
    {Array.from({ length: 34 }, (_, index) => <i key={index} style={{ "--i": index } as CSSProperties}/>) }
  </div>;
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
  const [progress, setProgress] = useState(0);
  const [transcript, setTranscript] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [chosen, setChosen] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const spanishVoices = useMemo(() => voices.filter(voice => voice.lang.toLowerCase().startsWith("es")), [voices]);
  const rankedVoices = useMemo(() => [...spanishVoices].sort((a, b) => voiceScore(b, active) - voiceScore(a, active)), [spanishVoices, active]);
  const voice = useMemo(() => rankedVoices.find(item => item.voiceURI === selectedVoice) || rankedVoices[0], [rankedVoices, selectedVoice]);
  const exactVoice = Boolean(voice && voice.lang.toLowerCase() === active.locale.toLowerCase());

  useEffect(() => {
    const load = () => setVoices(window.speechSynthesis?.getVoices?.() || []);
    load();
    window.speechSynthesis?.addEventListener?.("voiceschanged", load);
    return () => window.speechSynthesis?.removeEventListener?.("voiceschanged", load);
  }, []);

  useEffect(() => {
    setSelectedVoice("");
  }, [active.id]);

  useEffect(() => () => {
    window.speechSynthesis?.cancel();
    if (timer.current) clearInterval(timer.current);
  }, []);

  const chooseCountry = (country: Country) => {
    window.speechSynthesis?.cancel();
    if (timer.current) clearInterval(timer.current);
    setActive(country);
    setStage("listen");
    setListens(0);
    setSpeaking(false);
    setPaused(false);
    setProgress(0);
    setTranscript(false);
    setQuestion(0);
    setAnswers([]);
    setChosen(null);
  };

  const startProgress = () => {
    if (timer.current) clearInterval(timer.current);
    const estimatedSeconds = Math.max(38, active.script.split(/\s+/).length / (2.25 * active.speed));
    const started = Date.now();
    timer.current = setInterval(() => {
      const elapsed = (Date.now() - started) / 1000;
      setProgress(Math.min(94, (elapsed / estimatedSeconds) * 100));
    }, 250);
  };

  const play = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(active.script);
    utterance.lang = active.locale;
    utterance.rate = active.speed;
    utterance.pitch = active.pitch;
    if (voice) utterance.voice = voice;
    utterance.onstart = () => {
      setSpeaking(true);
      setPaused(false);
      setProgress(2);
      startProgress();
    };
    utterance.onend = () => {
      if (timer.current) clearInterval(timer.current);
      setSpeaking(false);
      setPaused(false);
      setProgress(100);
      setListens(value => Math.min(2, value + 1));
    };
    utterance.onerror = () => {
      if (timer.current) clearInterval(timer.current);
      setSpeaking(false);
      setPaused(false);
      setProgress(0);
    };
    window.speechSynthesis.speak(utterance);
  };

  const pauseResume = () => {
    if (paused) {
      window.speechSynthesis.resume();
      setPaused(false);
    } else {
      window.speechSynthesis.pause();
      setPaused(true);
    }
  };

  const selectAnswer = (index: number) => {
    if (chosen !== null) return;
    setChosen(index);
    setAnswers(previous => [...previous, index]);
  };

  const nextQuestion = () => {
    if (question === active.questions.length - 1) {
      setStage("result");
    } else {
      setQuestion(value => value + 1);
      setChosen(null);
    }
  };

  const score = answers.reduce((total, answer, index) => total + (answer === active.questions[index]?.answer ? 1 : 0), 0);
  const current = active.questions[question];

  return <main className="la-shell" style={{ "--country": active.color } as CSSProperties}>
    <SignalBackground/>
    <header className="la-topbar">
      <button onClick={() => { window.speechSynthesis?.cancel(); window.location.href = "/"; }}>← BIBLIOTECA</button>
      <a className="la-brand" href="/">CHESPANISH <b>RADIO</b></a>
      <div className="la-level"><span>A2</span> COMPRENSIÓN AUDITIVA</div>
    </header>

    {stage === "map" && <section className="la-map-screen">
      <div className="la-intro">
        <span className="la-kicker">FRECUENCIA 10.10 · LATINOAMÉRICA</span>
        <h1>Latinoamérica<br/><em>al oído.</em></h1>
        <p>Elegí un país. Escuchá una historia realista dos veces. Después comprobá cuánto entendiste sin leer.</p>
        <div className="la-method"><span><b>1</b> ELEGÍ</span><i>→</i><span><b>2</b> ESCUCHÁ ×2</span><i>→</i><span><b>3</b> RESPONDÉ ×10</span></div>
        <div className="la-audio-promise"><strong>SONIDO INTELIGENTE</strong><p>La clase busca automáticamente la voz regional más natural disponible en tu dispositivo. También podés cambiarla antes de escuchar.</p></div>
      </div>
      <div className="la-map-wrap">
        <div className="la-radar"><i/><i/><i/></div>
        <svg className="la-map-shape" viewBox="0 0 500 700" aria-hidden="true">
          <path d="M42 45 C95 20 158 42 205 73 L190 116 225 147 205 182 235 216 209 245 173 225 151 180 108 159 62 116Z"/>
          <path d="M204 223 C250 204 323 224 365 278 410 336 401 405 373 465 349 516 314 551 294 625 282 670 247 679 225 631 203 583 211 527 189 481 166 432 145 376 160 326 171 289 184 251 204 223Z"/>
          <path d="M220 185 C248 170 274 184 291 201 L270 220 238 216Z"/>
        </svg>
        <div className="la-map-label">TOCÁ UN PAÍS</div>
        {countries.map((country, index) => <button
          className="la-country-pin"
          key={country.id}
          onClick={() => chooseCountry(country)}
          style={{ left: `${country.x}%`, top: `${country.y}%`, "--pin": country.color, "--delay": `${index * .12}s` } as CSSProperties}
        ><span>{country.flag}</span><b>{country.name}</b><i/></button>)}
      </div>
      <div className="la-country-list">{countries.map(country => <button key={country.id} onClick={() => chooseCountry(country)}><span>{country.flag}</span><b>{country.name}</b><small>{country.city}</small></button>)}</div>
    </section>}

    {stage === "listen" && <section className="la-studio">
      <aside className="la-country-console">
        <button className="la-back" onClick={() => { window.speechSynthesis?.cancel(); setStage("map"); }}>← CAMBIAR PAÍS</button>
        <div className="la-flag-orbit"><span>{active.flag}</span><i/><i/></div>
        <span className="la-city">{active.city}</span>
        <h1>{active.name}</h1>
        <p>{active.topic}</p>
        <div className="la-console-dial"><i/><span>SEÑAL<br/><b>100%</b></span></div>
      </aside>
      <div className="la-player-panel">
        <div className="la-broadcast-head"><div><span>HISTORIA · {String(countries.indexOf(active) + 1).padStart(2, "0")}</span><h2>{active.title}</h2><p>{active.speaker}</p></div><b>EN VIVO</b></div>
        <Waveform active={speaking} paused={paused}/>
        <div className="la-progress"><i style={{ width: `${progress}%` }}/><span>{speaking ? paused ? "PAUSA" : "REPRODUCIENDO" : listens === 2 ? "DOS ESCUCHAS COMPLETAS" : "LISTO PARA ESCUCHAR"}</span></div>
        <div className="la-listen-track">
          {[0, 1].map(index => <div className={listens > index ? "done" : listens === index ? "current" : ""} key={index}><span>{listens > index ? "✓" : index + 1}</span><p><b>ESCUCHA {index + 1}</b><small>{index === 0 ? "Idea general" : "Detalles importantes"}</small></p></div>)}
        </div>
        <div className="la-player-controls">
          <button className="la-play" onClick={play} disabled={speaking}>{speaking ? "HABLANDO..." : listens < 2 ? `▶ ESCUCHAR · RONDA ${listens + 1}` : "↻ ESCUCHAR OTRA VEZ"}</button>
          {speaking && <button className="la-pause" onClick={pauseResume}>{paused ? "▶ CONTINUAR" : "Ⅱ PAUSAR"}</button>}
        </div>
        <div className={`la-voice-box ${exactVoice ? "exact" : "fallback"}`}>
          <div><span>{exactVoice ? "✦ VOZ REGIONAL DISPONIBLE" : "◇ VOZ EN ESPAÑOL DISPONIBLE"}</span><p>{voice ? `${voice.name} · ${voice.lang}` : "El navegador elegirá automáticamente una voz en español."}</p></div>
          <button onClick={() => setVoiceOpen(value => !value)}>AJUSTAR VOZ</button>
          {voiceOpen && <label>Elegí la voz que suene más natural
            <select value={voice?.voiceURI || ""} onChange={event => setSelectedVoice(event.target.value)}>
              {rankedVoices.map(item => <option key={item.voiceURI} value={item.voiceURI}>{item.name} · {item.lang}</option>)}
            </select>
          </label>}
        </div>
        <button className={`la-unlock ${listens >= 2 ? "ready" : ""}`} disabled={listens < 2} onClick={() => { setStage("quiz"); setQuestion(0); setChosen(null); }}>
          {listens >= 2 ? "ABRIR LAS 10 PREGUNTAS →" : `FALTA${listens === 0 ? "N" : ""} ${2 - listens} ESCUCHA${2 - listens === 1 ? "" : "S"} PARA DESBLOQUEAR`}
        </button>
        <button className="la-transcript-toggle" onClick={() => setTranscript(value => !value)}>{transcript ? "OCULTAR TRANSCRIPCIÓN" : "▣ VER TRANSCRIPCIÓN OCULTA"}</button>
        {transcript && <article className="la-transcript"><span>TRANSCRIPCIÓN · USALA DESPUÉS DE ESCUCHAR</span><p>{active.script}</p><div>{active.glossary.map(item => <small key={item.word}><b>{item.word}</b>{item.meaning}</small>)}</div></article>}
      </div>
    </section>}

    {stage === "quiz" && <section className="la-quiz-screen">
      <aside className="la-quiz-side"><button onClick={() => setStage("listen")}>← VOLVER AL AUDIO</button><span>{active.flag}</span><small>{active.name} · {active.city}</small><h2>{active.title}</h2><div className="la-mini-wave"><i/><i/><i/><i/><i/></div><p>Respondé con lo que recordás. No abras todavía la transcripción.</p></aside>
      <div className="la-question-card">
        <header><span>PREGUNTA {String(question + 1).padStart(2, "0")}</span><b>{question + 1} / 10</b></header>
        <div className="la-question-meter"><i style={{ width: `${(question + 1) * 10}%` }}/></div>
        <h1>{current.prompt}</h1>
        <div className="la-options">{current.options.map((option, index) => <button
          key={option}
          onClick={() => selectAnswer(index)}
          className={chosen === null ? "" : index === current.answer ? "correct" : chosen === index ? "wrong" : "muted"}
        ><span>{String.fromCharCode(65 + index)}</span>{option}<i>{chosen !== null && index === current.answer ? "✓" : chosen === index ? "×" : ""}</i></button>)}</div>
        {chosen !== null && <div className={`la-feedback ${chosen === current.answer ? "good" : "again"}`}><b>{chosen === current.answer ? "¡Exacto!" : "Casi."}</b><p>{current.feedback}</p></div>}
        <button className="la-next" disabled={chosen === null} onClick={nextQuestion}>{question === 9 ? "VER RESULTADO →" : "SIGUIENTE PREGUNTA →"}</button>
      </div>
    </section>}

    {stage === "result" && <section className="la-result-screen">
      <div className="la-result-radio"><span>{active.flag}</span><div className="la-score-ring" style={{ "--score": `${score * 10}%` } as CSSProperties}><b>{score}</b><small>/ 10</small></div><i/><i/></div>
      <span className="la-kicker">TRANSMISIÓN COMPLETADA · {active.name.toUpperCase()}</span>
      <h1>{score >= 8 ? "Tu oído está en frecuencia." : score >= 6 ? "Captaste la historia." : "Una escucha más y cambia todo."}</h1>
      <p>{score >= 8 ? "Entendiste la idea general y casi todos los detalles." : "Volvé al audio, escuchá con las preguntas en mente y probá otra vez."}</p>
      <div className="la-result-actions"><button onClick={() => { setListens(2); setProgress(0); setStage("listen"); }}>↻ VOLVER AL AUDIO</button><button onClick={() => { setQuestion(0); setAnswers([]); setChosen(null); setStage("quiz"); }}>REPETIR PREGUNTAS</button><button onClick={() => setStage("map")}>ELEGIR OTRO PAÍS →</button></div>
      <button className="la-result-transcript" onClick={() => setTranscript(value => !value)}>{transcript ? "OCULTAR TEXTO" : "VER TEXTO Y EXPRESIONES"}</button>
      {transcript && <article className="la-transcript result"><p>{active.script}</p><div>{active.glossary.map(item => <small key={item.word}><b>{item.word}</b>{item.meaning}</small>)}</div></article>}
    </section>}
  </main>;
}

