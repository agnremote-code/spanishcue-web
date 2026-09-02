"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { finalDiagnostic, irregularGroups, tables, units, type GrammarTable, type Unit } from "./data";
import "./style.css";

type Screen = "cover" | "map" | "chapter" | "atlas";

const sequence = [
  ["AHORA / DESPUÉS", "Quiero que vengas", "Presente"],
  ["ANTES DE AHORA", "Me alegra que hayas venido", "Perfecto"],
  ["DESDE EL PASADO", "Quería que vinieras", "Imperfecto"],
  ["ANTES DE ESE PASADO", "Me alegró que hubieras venido", "Pluscuamperfecto"],
];

const ojala = [
  ["POSIBLE O FUTURO", "Ojalá venga", "Presente"],
  ["DIFÍCIL O CONTRARIO AL PRESENTE", "Ojalá viniera", "Imperfecto"],
  ["PASADO CON EFECTO ACTUAL", "Ojalá haya llegado", "Perfecto"],
  ["LAMENTO IRREVERSIBLE", "Ojalá hubiera venido", "Pluscuamperfecto"],
];

function Dust() {
  return <div className="sj-dust" aria-hidden="true">{Array.from({ length: 22 }, (_, i) => <i key={i} />)}</div>;
}

function Scene({ src, alt, mode = "landscape" }: { src: string; alt: string; mode?: "landscape" | "ensemble" }) {
  return (
    <div className={`sj-scene ${mode}`}>
      <div className="sj-scene-depth sj-depth-one" />
      {/* The Site serves these local 3D scenes directly; routing them through the image optimizer breaks the Worker preview. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      <div className="sj-scene-depth sj-depth-two" />
      <div className="sj-scene-glow" />
    </div>
  );
}

function Table({ table }: { table: GrammarTable }) {
  return (
    <article className="sj-table-card">
      <header>
        <span>{table.cue}</span>
        <h3>{table.title}</h3>
        <p>{table.formula}</p>
      </header>
      <div className="sj-table-scroll">
        <div className="sj-table-head"><b>PERSONA</b><b>HABLAR</b><b>COMER</b><b>VIVIR</b><b>SER</b></div>
        {table.rows.map((row) => <div className="sj-table-row" key={row[0]}>{row.map((cell, i) => i === 0 ? <span key={cell}>{cell}</span> : <b key={cell}>{cell}</b>)}</div>)}
      </div>
    </article>
  );
}

function Nav({ screen, setScreen, progress }: { screen: Screen; setScreen: (s: Screen) => void; progress: number }) {
  return (
    <nav className="sj-nav">
      <Link href="/" className="sj-brand"><span>CH</span><div><b>CHESPANISH</b><small>GRAMMAR ADVENTURE</small></div></Link>
      <div className="sj-progress"><span>DOMINIO DEL MODO</span><i><b style={{ width: `${progress}%` }} /></i><strong>{progress}%</strong></div>
      <div className="sj-nav-actions">
        <button className={screen === "map" ? "active" : ""} onClick={() => setScreen("map")}>MAPA</button>
        <button className={screen === "atlas" ? "active" : ""} onClick={() => setScreen("atlas")}>ATLAS</button>
      </div>
    </nav>
  );
}

export default function SubjuntivoWonderland() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [unitIndex, setUnitIndex] = useState(0);
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const active = units[unitIndex];
  const tableMap = useMemo(() => new Map(tables.map((table) => [table.id, table])), []);
  const progress = Math.round((visited.size / units.length) * 100);

  const openUnit = (index: number) => {
    setUnitIndex(index);
    setVisited((old) => new Set(old).add(units[index].id));
    setScreen("chapter");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reveal = (key: string) => setRevealed((old) => {
    const next = new Set(old);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    return next;
  });

  if (screen === "cover") return (
    <main className="sj-app sj-cover">
      <Dust />
      <div className="sj-cover-orbit orbit-a" /><div className="sj-cover-orbit orbit-b" />
      <div className="sj-cover-copy">
        <Link href="/" className="sj-eyebrow">CHESPANISH · GRAMÁTICA A2–C1</Link>
        <p className="sj-kicker">UNA AVENTURA COMPLETA POR EL MODO VERBAL</p>
        <h1>El País del<br /><em>Subjuntivo</em></h1>
        <p className="sj-cover-lead">No es el modo de lo irreal. Es el modo de la <strong>mirada del hablante</strong>: lo que desea, duda, valora, teme, imagina o todavía no afirma.</p>
        <div className="sj-cover-actions">
          <button onClick={() => setScreen("map")}>CAER POR LA MADRIGUERA <span>→</span></button>
          <button onClick={() => setScreen("atlas")}>ABRIR EL ATLAS</button>
        </div>
        <div className="sj-cover-stats"><span><b>08</b> mundos</span><span><b>07</b> tiempos</span><span><b>32</b> desafíos</span></div>
      </div>
      <div className="sj-cover-art"><Scene src="/subjuntivo/alicia-hero.png" alt="Una joven aventurera cae por una biblioteca imposible llena de puertas, relojes y naipes" /></div>
      <div className="sj-falling-word word-a">QUIERO QUE</div><div className="sj-falling-word word-b">OJALÁ</div><div className="sj-falling-word word-c">AUNQUE</div>
    </main>
  );

  return (
    <main className={`sj-app sj-${screen}`} style={{ "--portal": active.color } as React.CSSProperties}>
      <Nav screen={screen} setScreen={setScreen} progress={progress} />
      {screen === "map" && <MapScreen openUnit={openUnit} visited={visited} setScreen={setScreen} />}
      {screen === "chapter" && <Chapter unit={active} index={unitIndex} tableMap={tableMap} revealed={revealed} reveal={reveal} openUnit={openUnit} setScreen={setScreen} />}
      {screen === "atlas" && <Atlas setScreen={setScreen} openUnit={openUnit} />}
    </main>
  );
}

function MapScreen({ openUnit, visited, setScreen }: { openUnit: (i: number) => void; visited: Set<string>; setScreen: (s: Screen) => void }) {
  return (
    <div className="sj-map-content">
      <header className="sj-map-hero">
        <div>
          <span className="sj-overline">ANTES DE ENTRAR · LA IDEA CENTRAL</span>
          <h1>Un modo no dice <em>cuándo</em>.<br />Dice <em>cómo lo presentás</em>.</h1>
          <p>El tiempo ubica una acción. El modo revela la posición del hablante frente a ella. Por eso una situación real también puede aparecer en subjuntivo: <strong>Me alegra que estés aquí.</strong></p>
        </div>
        <Scene src="/subjuntivo/wonderland-ensemble.png" alt="Personajes y objetos fantásticos de un mundo de gramática" mode="ensemble" />
      </header>

      <section className="sj-three-moods">
        <header><span>LOS TRES MODOS DEL ESPAÑOL</span><h2>Tres puertas. Tres intenciones.</h2></header>
        <div>
          <article><i>01</i><small>INDICATIVO</small><h3>Informo</h3><p>Presento una situación como afirmada, conocida o habitual.</p><b>Alicia tiene la llave.</b></article>
          <article className="featured"><i>02</i><small>SUBJUNTIVO</small><h3>Filtro</h3><p>La situación pasa por deseo, emoción, duda, valoración o hipótesis.</p><b>Quiero que Alicia tenga la llave.</b></article>
          <article><i>03</i><small>IMPERATIVO</small><h3>Dirijo</h3><p>Intento que otra persona haga o deje de hacer algo.</p><b>Alicia, buscá la llave.</b></article>
        </div>
      </section>

      <section className="sj-anatomy">
        <header><span>ANATOMÍA DE LA FRASE</span><h2>La bisagra es la relación entre dos acciones</h2></header>
        <div className="sj-anatomy-line"><article><small>SUJETO 1 + FILTRO</small><b>La Reina quiere</b></article><i>+</i><article><small>NEXO</small><b>que</b></article><i>+</i><article><small>SUJETO 2 + SUBJUNTIVO</small><b>Alicia se vaya</b></article></div>
        <aside><span>MISMO SUJETO</span><b>Quiero irme.</b><i>→</i><span>DOS SUJETOS</span><b>Quiero que te vayas.</b></aside>
      </section>

      <section className="sj-route">
        <header><span>MAPA DE LA AVENTURA</span><h2>De la primera puerta al archivo perdido</h2><p>Recorré los mundos en orden o entrá directamente al tema que necesitás.</p></header>
        <div className="sj-route-grid">
          {units.map((unit, index) => <button key={unit.id} className={visited.has(unit.id) ? "visited" : ""} style={{ "--card": unit.color } as React.CSSProperties} onClick={() => openUnit(index)}>
            <span className="sj-card-number">{unit.number}</span><small>{unit.level}</small><h3>{unit.title}</h3><p>{unit.english}</p><b>{unit.world}</b><i>{visited.has(unit.id) ? "REVISITAR" : "ENTRAR"} →</i>
          </button>)}
        </div>
      </section>

      <section className="sj-golden-rule"><span>REGLA DE ORO</span><h2>No busques una “palabra mágica”.</h2><p>Preguntate qué afirma el hablante, qué filtra y desde qué momento mira la segunda acción.</p><button onClick={() => setScreen("atlas")}>VER EL SISTEMA COMPLETO →</button></section>
    </div>
  );
}

function Chapter({ unit, index, tableMap, revealed, reveal, openUnit, setScreen }: { unit: Unit; index: number; tableMap: Map<string, GrammarTable>; revealed: Set<string>; reveal: (k: string) => void; openUnit: (i: number) => void; setScreen: (s: Screen) => void }) {
  return (
    <div className="sj-chapter-wrap">
      <header className="sj-chapter-hero">
        <Scene src={unit.image} alt={`Escena fantástica de ${unit.title}`} mode={unit.image.includes("ensemble") ? "ensemble" : "landscape"} />
        <div className="sj-chapter-shade" />
        <div className="sj-chapter-top"><button onClick={() => setScreen("map")}>← VOLVER AL MAPA</button><span>MUNDO {unit.number} · {unit.level}</span></div>
        <div className="sj-chapter-title"><small>{unit.world}</small><h1>{unit.title}</h1><p>{unit.english}</p></div>
        <div className="sj-formula"><span>FÓRMULA CENTRAL</span><b>{unit.formula}</b></div>
      </header>

      <div className="sj-chapter-body">
        <section className="sj-learning-order"><span>RUTA DE APRENDIZAJE</span><div>{["ENTENDER", "FORMAR", "CONTRASTAR", "PRACTICAR", "HABLAR"].map((label, i) => <span key={label}><b>{i + 1}</b>{label}</span>)}</div></section>

        <section className="sj-concept">
          <span className="sj-section-number">01</span><article><small>LA PREGUNTA QUE DECIDE EL MODO</small><h2>{unit.keyQuestion}</h2><p>{unit.meaning}</p></article>
        </section>

        <section className="sj-formation">
          <header><span>CONSTRUCCIÓN PASO A PASO</span><h2>Cómo atravesar esta puerta</h2></header>
          <div>{unit.formation.map((step, i) => <article key={step}><b>0{i + 1}</b><p>{step}</p></article>)}</div>
        </section>

        {unit.tables.length > 0 && <section className="sj-tables"><header><span>CONJUGACIÓN COMPLETA</span><h2>Las formas del mundo {unit.number}</h2><p>Incluye tú, vos, usted, nosotros, vosotros y ustedes. Las formas rioplatenses posibles aparecen donde corresponden.</p></header><div>{unit.tables.map((id) => tableMap.get(id)).filter(Boolean).map((table) => <Table key={table!.id} table={table!} />)}</div></section>}

        <section className="sj-uses"><header><span>CUÁNDO SE USA</span><h2>Cuatro razones, cuatro escenas</h2></header><div>{unit.uses.map((use, i) => <article key={use.title}><span>0{i + 1}</span><div><h3>{use.title}</h3><p>{use.explanation}</p><b>{use.example}</b></div></article>)}</div></section>

        <section className="sj-contrast"><header><span>EL ESPEJO DEL SIGNIFICADO</span><h2>Indicativo y subjuntivo no dicen lo mismo</h2></header><div>{unit.contrasts.map((pair, i) => <article key={pair.left}><div><small>LADO A</small><b>{pair.left}</b></div><i>{i + 1}</i><div><small>LADO B</small><b>{pair.right}</b></div><p>{pair.why}</p></article>)}</div></section>

        <section className="sj-errors"><div className="sj-error-art"><Scene src="/subjuntivo/wonderland-ensemble.png" alt="Figuras fantásticas observan errores de gramática" mode="ensemble" /></div><article><span>TRAMPAS DE LA REINA</span><h2>Errores que cambian el sentido</h2>{unit.errors.map((error) => <div key={error.wrong}><p><small>NO</small><del>{error.wrong}</del></p><p><small>SÍ</small><b>{error.right}</b></p><span>{error.why}</span></div>)}</article></section>

        <section className="sj-practice"><header><span>LABORATORIO INTERACTIVO</span><h2>Abrí cada naipe y comprobá tu decisión</h2><p>Respondé en voz alta antes de revelar la solución.</p></header><div>{unit.exercises.map((exercise, i) => { const key = unit.id + i; const open = revealed.has(key); return <button key={key} className={open ? "open" : ""} onClick={() => reveal(key)}><span>{String(i + 1).padStart(2, "0")}</span><b>{exercise.prompt}</b><i>{open ? "OCULTAR RESPUESTA" : "REVELAR RESPUESTA"}</i>{open && <em><strong>{exercise.answer}</strong>{exercise.why}</em>}</button>; })}</div></section>

        <section className="sj-speaking"><div><span>MESA DE CONVERSACIÓN</span><h2>Ahora el modo es tuyo</h2><p>Usá la estructura para decir algo verdadero sobre vos. La forma sirve al significado, no al revés.</p></div><div>{unit.speaking.map((item, i) => <article key={item.question}><span>{i + 1}</span><h3>{item.question}</h3><p>{item.starter}</p></article>)}</div></section>

        <nav className="sj-chapter-nav"><button disabled={index === 0} onClick={() => openUnit(index - 1)}>← ANTERIOR</button><button onClick={() => setScreen("map")}>MAPA GENERAL</button><button disabled={index === units.length - 1} onClick={() => openUnit(index + 1)}>SIGUIENTE →</button></nav>
      </div>
    </div>
  );
}

function Atlas({ setScreen, openUnit }: { setScreen: (s: Screen) => void; openUnit: (i: number) => void }) {
  return (
    <div className="sj-atlas-wrap">
      <header className="sj-atlas-hero"><Dust /><div className="sj-atlas-copy"><span>ATLAS MAESTRO · A2–C1</span><h1>Todo el sistema<br />en una sola mirada</h1><p>Formas, usos, concordancia, irregulares y una brújula para decidir.</p><button onClick={() => setScreen("map")}>← VOLVER AL MAPA</button></div><Scene src="/subjuntivo/wonderland-garden.png" alt="Jardín nocturno con castillo, puertas y caminos de ajedrez" /></header>
      <div className="sj-atlas-body">
        <section className="sj-atlas-intro"><span>EL SISTEMA MODERNO</span><h2>Cuatro tiempos productivos + dos formas históricas</h2><p>En la conversación actual vas a producir sobre todo presente, perfecto, imperfecto y pluscuamperfecto. El futuro y el futuro perfecto se reconocen en registros especiales.</p></section>
        <section className="sj-all-tables">{tables.map((table) => <Table key={table.id} table={table} />)}</section>

        <section className="sj-atlas-section"><header><span>LA TORRE DE LOS RELOJES</span><h2>Concordancia temporal</h2></header><div className="sj-sequence-grid">{sequence.map((item) => <article key={item[0]}><small>{item[0]}</small><b>{item[1]}</b><span>{item[2]}</span></article>)}</div></section>

        <section className="sj-atlas-section sj-ojala"><header><span>LA ESCALERA DE OJALÁ</span><h2>La distancia cambia el tiempo</h2></header><div>{ojala.map((item, i) => <article key={item[0]}><i>0{i + 1}</i><div><small>{item[0]}</small><b>{item[1]}</b><span>{item[2]}</span></div></article>)}</div></section>

        <section className="sj-atlas-section"><header><span>EL GABINETE DE IRREGULARES</span><h2>Familias que conviene reconocer</h2></header><div className="sj-irregular-grid">{irregularGroups.map((group, i) => <article key={group.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{group.title}</h3><p>{group.forms}</p></article>)}</div></section>

        <section className="sj-diagnostic"><header><span>BRÚJULA FINAL</span><h2>Seis preguntas antes de conjugar</h2></header><div>{finalDiagnostic.map((item, i) => <article key={item[0]}><b>{i + 1}</b><p>{item[0]}</p><span>{item[1]}</span></article>)}</div><button onClick={() => openUnit(0)}>EMPEZAR DESDE CERO →</button></section>
      </div>
    </div>
  );
}
