"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { calmPlan, openPrompts, stops, type CityStop } from "./data";
import "./style.css";

type Screen = "intro" | "map" | "place";

function Brand() {
  return <Link className="ba-brand" href="/" aria-label="Volver a CHESPANISH"><span>CH</span><b>CHESPANISH</b><small>BUENOS AIRES · A2</small></Link>;
}

function Scene({ stop }: { stop: CityStop }) {
  const positions = ["0% 0%", "100% 0%", "0% 100%", "100% 100%"];
  return <div className={`ba-scene ba-atlas-${stop.atlas}`} style={{ backgroundPosition: positions[stop.tile - 1] }} role="img" aria-label={`Escena tridimensional: ${stop.title}`}>
    <div className="ba-scene-depth" />
    <div className="ba-scene-light ba-scene-light-a" />
    <div className="ba-scene-light ba-scene-light-b" />
    <div className="ba-scene-vignette" />
  </div>;
}

function PortalThumb({ stop }: { stop: CityStop }) {
  const positions = ["0% 0%", "100% 0%", "0% 100%", "100% 100%"];
  return <span className={`ba-portal-thumb ba-atlas-${stop.atlas}`} style={{ backgroundPosition: positions[stop.tile - 1] }} aria-hidden="true"><i /><em /></span>;
}

export default function BuenosAiresEnLaCalle() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [selectedId, setSelectedId] = useState(stops[0].id);
  const [calm, setCalm] = useState(true);
  const [english, setEnglish] = useState(true);
  const [visited, setVisited] = useState<string[]>([]);
  const selected = useMemo(() => stops.find(stop => stop.id === selectedId) || stops[0], [selectedId]);
  const openPrompt = openPrompts[selected.id];

  const openStop = (id: string) => {
    setSelectedId(id);
    setScreen("place");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const complete = () => {
    setVisited(current => current.includes(selected.id) ? current : [...current, selected.id]);
    setScreen("map");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const visibleWords = calm ? selected.words.slice(0, 3) : selected.words;
  const visibleDialogues = calm ? selected.dialogues.slice(0, 1) : selected.dialogues;
  const visiblePrompts = calm ? selected.prompts.slice(0, 1) : selected.prompts;

  return <main className={`ba-app ${calm ? "ba-calm" : "ba-full"}`}>
    <nav className="ba-nav">
      <Brand />
      <div className="ba-nav-center"><b>{visited.length}</b><span>de 16 lugares recorridos</span><i><em style={{ width: `${visited.length / stops.length * 100}%` }} /></i></div>
      <div className="ba-tools">
        <button className={calm ? "active" : ""} onClick={() => setCalm(value => !value)}><span className="ba-switch" />{calm ? "HOY VOY TRANQUI" : "PRÁCTICA COMPLETA"}</button>
        <button className={english ? "active" : ""} onClick={() => setEnglish(value => !value)}><span className="ba-switch" />ENGLISH HELP</button>
      </div>
    </nav>

    {screen === "intro" && <section className="ba-cover">
      <div className="ba-cover-image" role="img" aria-label="Vista aérea tridimensional de Buenos Aires de noche"><div className="ba-cover-scan" /><div className="ba-cover-glow" /></div>
      <div className="ba-cover-copy">
        <span className="ba-kicker">EVERYDAY HOLIDAY SPANISH · A2</span>
        <h1>BUENOS AIRES<br /><em>EN LA CALLE</em></h1>
        <p>Una ciudad viva para hablar sin presión. Entrá, resolvé una situación cotidiana y seguí paseando.</p>
        {english && <p className="ba-english">A low-key holiday lesson for a hard day: useful words, short answers and no pressure to be perfect.</p>}
        <div className="ba-cover-actions"><button onClick={() => setScreen("map")}>ENTRAR A LA CIUDAD <span>→</span></button><small>16 lugares · español rioplatense · traducciones opcionales</small></div>
      </div>
      <aside className="ba-calm-card"><span>PLAN TRANQUILO</span>{calmPlan.map((line, index) => <p key={line}><b>0{index + 1}</b>{line}</p>)}</aside>
      <div className="ba-cover-stats"><div><b>16</b><span>lugares</span></div><div><b>48</b><span>frases reales</span></div><div><b>A2</b><span>sin presión</span></div></div>
    </section>}

    {screen === "map" && <section className="ba-map-page">
      <header className="ba-map-head"><div><span>MAPA 3D · ELEGÍ TU PRÓXIMA PARADA</span><h1>La ciudad está despierta.</h1><p>Hoy no necesitás hacer todo. Elegí cuatro lugares que realmente usarías durante tus vacaciones.</p></div><button onClick={() => setScreen("intro")}>VER PORTADA</button></header>
      <div className="ba-city-frame">
        <div className="ba-city-image" role="img" aria-label="Mapa tridimensional interactivo de Buenos Aires">
          <div className="ba-city-pan" />
          <div className="ba-city-lights" />
          {stops.map(stop => <button key={stop.id} className={`ba-pin ${visited.includes(stop.id) ? "visited" : ""}`} style={{ left: `${stop.position.x}%`, top: `${stop.position.y}%` }} onClick={() => openStop(stop.id)} aria-label={`Abrir ${stop.title}`}><PortalThumb stop={stop} /><b>{stop.title}</b></button>)}
        </div>
        <div className="ba-map-caption"><span>BUENOS AIRES · NOCHE AZUL</span><p>Mové la mirada por la ciudad y abrí una puerta. Cada miniatura muestra el mundo que vas a encontrar.</p></div>
      </div>
      <div className="ba-stop-index">{stops.map(stop => <button key={stop.id} className={visited.includes(stop.id) ? "visited" : ""} onClick={() => openStop(stop.id)}><PortalThumb stop={stop} /><div><b>{stop.title}</b><small>{stop.zone} · {stop.english}</small></div><i>→</i></button>)}</div>
    </section>}

    {screen === "place" && <section className="ba-place-page">
      <header className="ba-place-hero">
        <Scene stop={selected} />
        <button className="ba-back" onClick={() => setScreen("map")}>← VOLVER A LA CIUDAD</button>
        <div className="ba-place-number"><small>PARADA</small><b>{selected.number}</b></div>
        <div className="ba-place-title"><span>{selected.zone.toUpperCase()} · BUENOS AIRES</span><h1>{selected.title}</h1><p>{selected.hook}</p>{english && <small>{selected.hookEn}</small>}</div>
        <div className="ba-live"><i /><span>ESCENA EN MOVIMIENTO</span></div>
      </header>

      <div className="ba-lesson-shell">
        <aside className="ba-route-panel"><span>TU RUTA HOY</span><b>{calm ? "Una frase alcanza." : "Práctica completa."}</b><p>{calm ? "3 palabras · 1 diálogo · 1 pregunta básica · 1 conversación abierta" : "5 palabras · 3 diálogos · 3 preguntas básicas · 1 conversación abierta"}</p><button onClick={() => setCalm(value => !value)}>{calm ? "ABRIR TODO" : "VOLVER A MODO TRANQUI"}</button><div><small>PORTEÑO PARA EL OÍDO</small><strong>{selected.local.es}</strong>{english && <em>{selected.local.en}</em>}<p>{selected.local.note}</p></div></aside>

        <div className="ba-lesson-content">
          <section className="ba-block ba-wordbank"><header><span>01</span><div><small>PRIMERO, MIRÁ</small><h2>Palabras que vas a usar</h2></div></header><div>{visibleWords.map(word => <article key={word.es}><b>{word.es}</b>{english && <span>{word.en}</span>}</article>)}</div></section>

          <section className="ba-block ba-dialogues"><header><span>02</span><div><small>DESPUÉS, ESCUCHÁ CON LOS OJOS</small><h2>Así suena en la calle</h2></div></header><div>{visibleDialogues.map((dialogue, index) => <article key={dialogue.a}><i>{String(index + 1).padStart(2, "0")}</i><p><b>{dialogue.a}</b><strong>{dialogue.b}</strong>{english && <small>{dialogue.en}</small>}</p></article>)}</div></section>

          <section className="ba-block ba-prompts"><header><span>03</span><div><small>AHORA, HABLÁ</small><h2>Una pregunta está bien</h2></div></header><div>{visiblePrompts.map((prompt, index) => <article key={prompt.es}><span>PREGUNTA {String(index + 1).padStart(2, "0")}</span><h3>{prompt.es}</h3>{english && <p>{prompt.en}</p>}<div><small>EMPEZÁ ASÍ</small><b>{prompt.starter}</b></div></article>)}</div></section>

          <section className="ba-opinion">
            <div className="ba-opinion-visual"><PortalThumb stop={selected} /><span>CONVERSACIÓN ABIERTA</span></div>
            <div className="ba-opinion-copy"><small>AL FINAL · PARA HABLAR DE VERDAD</small><h2>¿Qué pensás vos?</h2><p>{openPrompt.intro}</p>{english && <p className="ba-opinion-en">{openPrompt.introEn}</p>}<h3>{openPrompt.question}</h3>{english && <p className="ba-opinion-en">{openPrompt.questionEn}</p>}<div><small>EMPEZÁ ASÍ</small><b>{openPrompt.starter}</b></div></div>
          </section>

          <section className="ba-mission"><div><small>MISIÓN DE VIAJE</small><h2>{selected.mission}</h2><p>No busques una respuesta perfecta. Hacelo con palabras simples, pedí que repitan si hace falta y seguí.</p></div><button onClick={complete}>LISTO, VOLVER AL MAPA <span>→</span></button></section>
        </div>
      </div>
    </section>}

    <footer className="ba-footer"><span>CHESPANISH · BUENOS AIRES EN LA CALLE</span><p>Español útil, rioplatense y sin presión.</p></footer>
  </main>;
}
