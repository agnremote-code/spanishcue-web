"use client";
import { useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  hero,
  units,
  tables,
  finalDiagnostic,
  sources,
  type Exercise,
  type GrammarTable,
} from "./data";
import GrammarStep from "../grammar-steps/GrammarStep";
import "../subjuntivo-pais-maravillas/style.css";
import "./style.css";

type Screen = "intro" | "cover" | "map" | "chapter" | "atlas";
type Answers = Record<string, number>;
const exerciseCount =
  units.reduce((n, u) => n + u.exercises.length, 0) + finalDiagnostic.length;
function Scene({ position = "center" }: { position?: string }) {
  return (
    <div className="sj-scene">
      <img
        src={hero}
        alt="Estación postal fantástica entre nubes, con cartas luminosas y dos vías de entrega"
        width="1672"
        height="941"
        style={{ objectPosition: position }}
      />
      <div className="sj-scene-depth sj-depth-two" />
      <div className="sj-scene-glow" />
    </div>
  );
}
function Dust() {
  return (
    <div className="sj-dust" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}
function Table({ table }: { table: GrammarTable }) {
  return (
    <article className="sj-table-card od-table">
      <header>
        <span>{table.cue}</span>
        <h3>{table.title}</h3>
      </header>
      <div
        className="sj-table-scroll"
        role="region"
        aria-label={table.title}
        tabIndex={0}
      >
        <table>
          <thead>
            <tr>
              {table.headers.map((h) => (
                <th scope="col" key={h}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) =>
                  j === 0 ? (
                    <th scope="row" key={j}>
                      {cell}
                    </th>
                  ) : (
                    <td key={j}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <p className="od-table-note">{table.note}</p>}
    </article>
  );
}
function English({ children }: { children: React.ReactNode }) {
  return (
    <details className="od-english">
      <summary>Ayuda en inglés</summary>
      <p lang="en">{children}</p>
    </details>
  );
}
function Quiz({
  id,
  items,
  answers,
  setAnswer,
}: {
  id: string;
  items: Exercise[];
  answers: Answers;
  setAnswer: (key: string, value: number) => void;
}) {
  return (
    <div className="od-quiz-grid">
      {items.map((q, i) => {
        const key = `${id}-${i}`,
          chosen = answers[key],
          answered = chosen !== undefined,
          correct = chosen === q.correct;
        return (
          <article
            className={`od-question ${answered ? (correct ? "correct" : "retry") : ""}`}
            key={key}
          >
            <span className="od-question-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{q.prompt}</h3>
            {q.en && <English>{q.en}</English>}
            <div className="od-options" role="group" aria-label={q.prompt}>
              {q.options.map((option, j) => (
                <button
                  key={option}
                  aria-pressed={chosen === j}
                  onClick={() => setAnswer(key, j)}
                >
                  {option}
                </button>
              ))}
            </div>
            {answered && (
              <div className="od-feedback" role="status">
                <strong>
                  {correct
                    ? "✓ Sí. Esa es la idea."
                    : "Revisá la escena y probá otra vez."}
                </strong>
                <p>{q.why}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
const scenes = [
  {
    name: "Una entrega",
    parts: [
      ["Leo", "sujeto", "Sujeto: Leo es quien entrega."],
      ["entrega", "verbo", "Verbo: la acción es entregar."],
      ["una carta", "directo", "OD: una carta es lo que Leo entrega."],
      ["a Ana", "indirecto", "OI: Ana recibe la carta."],
    ],
    en: "Leo gives a letter to Ana. The letter is what is given; Ana is the recipient.",
  },
  {
    name: "Una persona vista",
    parts: [
      ["Leo", "sujeto", "Sujeto: Leo es quien ve."],
      ["ve", "verbo", "Verbo: la acción es ver."],
      [
        "a Ana",
        "directo",
        "OD: Ana es la persona vista. La a es personal; no hay OI aquí.",
      ],
    ],
    en: "Leo sees Ana. Ana is the direct object, even though Spanish uses a before her name.",
  },
  {
    name: "Un destino",
    parts: [
      ["Ana", "sujeto", "Sujeto: Ana es quien va."],
      ["va", "verbo", "Verbo: va es una forma de ir."],
      [
        "a la estación",
        "destino",
        "Destino: indica adónde va Ana. No es OD ni OI.",
      ],
    ],
    en: "Ana goes to the station. To the station expresses a destination, not an indirect object.",
  },
  {
    name: "Una frase con gustar",
    parts: [
      ["A Ana", "indirecto", "OI: Ana es quien siente el gusto."],
      ["le", "indirecto", "Pronombre OI: se refiere también a Ana."],
      ["gustan", "verbo", "Verbo: gustan concuerda con los mapas, en plural."],
      ["los mapas", "sujeto", "Sujeto: los mapas. No hay OD en esta frase."],
    ],
    en: "Ana likes maps. In Spanish, los mapas is the grammatical subject and le refers to the person who likes them.",
  },
];
function SentenceLab({ extra = false }: { extra?: boolean }) {
  const [sceneIndex, setSceneIndex] = useState(0),
    [partIndex, setPartIndex] = useState<number | null>(null);
  const scene = scenes[sceneIndex];
  return (
    <section className="od-sentence-lab">
      <header>
        <span>TOCÁ CADA PIEZA</span>
        <h2>La frase tiene un reparto</h2>
        <p>
          Elegí una escena y tocá sus palabras para descubrir qué trabajo hacen.
        </p>
      </header>
      <div className="od-scene-tabs">
        {scenes.slice(0, extra ? 4 : 2).map((s, i) => (
          <button
            key={s.name}
            aria-pressed={sceneIndex === i}
            onClick={() => {
              setSceneIndex(i);
              setPartIndex(null);
            }}
          >
            {s.name}
          </button>
        ))}
      </div>
      <div className="od-sentence">
        {scene.parts.map(([text, role], i) => (
          <button
            className={`od-token role-${role}`}
            key={`${sceneIndex}-${i}`}
            aria-pressed={partIndex === i}
            onClick={() => setPartIndex(i)}
          >
            <span>{text}</span>
            <small>{partIndex === i ? role : "Tocá para explorar"}</small>
          </button>
        ))}
      </div>
      <div className="od-role-feedback" role="status">
        {partIndex === null
          ? "Cada color identifica una función. Los nombres OD y OI aparecen al explorar."
          : scene.parts[partIndex][2]}
      </div>
      <English>{scene.en}</English>
    </section>
  );
}
const parcels = [
  { noun: "el mapa", pronoun: "lo" },
  { noun: "la carta", pronoun: "la" },
  { noun: "los billetes", pronoun: "los" },
  { noun: "las llaves", pronoun: "las" },
];
const recipients = [
  { name: "a Ana", io: "le", pair: "se" },
  { name: "a Leo", io: "le", pair: "se" },
  { name: "a Ana y Eva", io: "les", pair: "se" },
  { name: "a vos / a ti", io: "te", pair: "te" },
  { name: "a nosotros", io: "nos", pair: "nos" },
];
function DeliveryLab() {
  const [object, setObject] = useState(1),
    [recipient, setRecipient] = useState(0),
    [step, setStep] = useState(0);
  const o = parcels[object],
    r = recipients[recipient];
  const label = recipient === 3 ? "a vos" : r.name;
  return (
    <section className="od-delivery-lab">
      <header>
        <span>MESA DE ENVÍOS · AMPLIACIÓN GUIADA</span>
        <h2>Misma escena. Menos repeticiones.</h2>
        <p>
          Cambiá el objeto o el destinatario y observá qué pronombre necesita
          cambiar.
        </p>
      </header>
      <div className="od-lab-controls">
        <label>
          ¿Qué entrega Leo?
          <select
            value={object}
            onChange={(e) => setObject(Number(e.target.value))}
          >
            {parcels.map((p, i) => (
              <option value={i} key={p.noun}>
                {p.noun}
              </option>
            ))}
          </select>
        </label>
        <label>
          ¿A quién?
          <select
            value={recipient}
            onChange={(e) => setRecipient(Number(e.target.value))}
          >
            {recipients.map((r, i) => (
              <option value={i} key={r.name}>
                {r.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="od-scene-tabs">
        {["Frase completa", "Pronombre OI", "Los dos pronombres"].map(
          (label, i) => (
            <button
              key={label}
              aria-pressed={step === i}
              onClick={() => setStep(i)}
            >
              {i + 1}. {label}
            </button>
          ),
        )}
      </div>
      <div className="od-live-delivery" aria-live="polite">
        {step === 0 ? (
          <p>
            Leo{" "}
            {recipient > 2 ? (
              <strong className="io-color">{r.io} </strong>
            ) : null}
            da <strong className="do-color">{o.noun}</strong>{" "}
            <strong className="io-color">{label}</strong>.
          </p>
        ) : step === 1 ? (
          <p>
            Leo <strong className="io-color">{r.io}</strong> da{" "}
            <strong className="do-color">{o.noun}</strong>.
          </p>
        ) : (
          <p>
            Leo <strong className="io-color">{r.pair}</strong>{" "}
            <strong className="do-color">{o.pronoun}</strong> da.
          </p>
        )}
        <div>
          <span className="do-color">
            OD: {o.noun}
            {step === 2 ? ` → ${o.pronoun}` : ""}
          </span>
          <span className="io-color">
            OI: {label}
            {step > 0 ? ` → ${step === 2 ? r.pair : r.io}` : ""}
          </span>
        </div>
        {step === 2 && (
          <small>
            {r.io === "le" || r.io === "les"
              ? `${r.io} cambia a se delante de ${o.pronoun}. El destinatario sigue siendo ${label.replace(/^a /, "")}.`
              : `${r.io} conserva su forma. Va antes de ${o.pronoun}.`}
          </small>
        )}
      </div>
    </section>
  );
}
function PositionStrip() {
  return (
    <aside className="od-position-strip">
      <div>
        <small>ESTAMOS ESTUDIANDO</small>
        <b>Funciones en la frase</b>
        <span>OD / CD y OI / CI</span>
      </div>
      <div>
        <small>LAS PALABRAS QUE USAMOS</small>
        <b>Pronombres personales</b>
        <span>me, te, lo, la, le, nos…</span>
      </div>
      <div>
        <small>LOS VERBOS DE LA BASE</small>
        <b>Presente de indicativo</b>
        <span>veo, tengo, doy, mando</span>
      </div>
      <p>
        OD y OI no son modos ni tiempos verbales. Un pronombre es un tipo de
        palabra; OD u OI es el trabajo que hace en una frase.
      </p>
    </aside>
  );
}
export default function ObjectAdventure() {
  const [screen, setScreen] = useState<Screen>("intro"),
    [unitIndex, setUnitIndex] = useState(0),
    [answers, setAnswers] = useState<Answers>({});
  const completed = new Set(
    units
      .filter((u) =>
        u.exercises.every((q, i) => answers[`${u.id}-${i}`] === q.correct),
      )
      .map((u) => u.id),
  );
  const progress = Math.round((completed.size / units.length) * 100),
    active = units[unitIndex];
  const go = (next: Screen) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const openUnit = (i: number) => {
    setUnitIndex(i);
    go("chapter");
  };
  const setAnswer = (key: string, value: number) =>
    setAnswers((old) => ({ ...old, [key]: value }));
  const nav = (
    <nav className="sj-nav">
      <Link href="/" className="sj-brand">
        <span>SC</span>
        <div>
          <b>SPANISHCUE</b>
          <small>AVENTURA GRAMATICAL</small>
        </div>
      </Link>
      <div className="sj-progress">
        <span>ESTACIONES COMPLETADAS</span>
        <i>
          <b style={{ width: `${progress}%` }} />
        </i>
        <strong>
          {completed.size}/{units.length}
        </strong>
      </div>
      <div className="sj-nav-actions">
        <button
          className={screen === "map" ? "active" : ""}
          onClick={() => go("map")}
        >
          MAPA
        </button>
        <button
          className={screen === "atlas" ? "active" : ""}
          onClick={() => go("atlas")}
        >
          ATLAS
        </button>
      </div>
    </nav>
  );
  if (screen === "intro")
    return (
      <main className="sj-app sj-intro od-app">
        <div className="sj-intro-wrap">
          <Link href="/" className="sj-eyebrow">
            SPANISHCUE · GRAMÁTICA A1 GUIADA
          </Link>
          <header className="sj-intro-heading">
            <span>ANTES DE LA AVENTURA · ENTENDÉ LAS PIEZAS</span>
            <h1>
              Una cosa es la <em>palabra</em>.<br />
              Otra, su <em>función</em>.
            </h1>
            <p>
              Para distinguir objeto directo e indirecto, primero vamos a
              entender una escena. Después pondremos nombres y pronombres.
            </p>
          </header>
          <div className="grammar-step-stack od-intro-steps">
            <GrammarStep
              number="01"
              eyebrow="PASO 1 · ¿QUÉ ES?"
              title="Función y tipo de palabra"
              accent="#7259bb"
            >
              <div className="sj-intro-pair">
                <article>
                  <span>01 · FUNCIÓN</span>
                  <h2>¿Qué trabajo hace?</h2>
                  <p>
                    <strong>Ana abre la puerta.</strong>
                    <br />
                    Ana es sujeto. La puerta es objeto directo.
                  </p>
                  <p>
                    <strong>Leo da una carta a Ana.</strong>
                    <br />
                    La carta es objeto directo. A Ana es objeto indirecto.
                  </p>
                </article>
                <article>
                  <span>02 · TIPO DE PALABRA</span>
                  <h2>¿Cómo lo nombramos?</h2>
                  <p>
                    <strong>Veo a Ana. → La veo.</strong>
                    <br />
                    La es un pronombre. En esta frase hace el trabajo de objeto
                    directo.
                  </p>
                  <p>
                    <strong>Le doy una carta.</strong>
                    <br />
                    Le es un pronombre. Aquí hace el trabajo de objeto
                    indirecto.
                  </p>
                </article>
              </div>
              <PositionStrip />
            </GrammarStep>
            <GrammarStep
              number="02"
              eyebrow="PASO 2 · EJEMPLOS"
              title="Probalo en una frase"
              accent="#52d9e8"
            >
              <SentenceLab />
            </GrammarStep>
            <GrammarStep
              number="03"
              eyebrow="PASO 3 · ORIENTACIÓN"
              title="Una regla por vez"
              accent="#e8bf65"
            >
              <section className="od-beginner-note">
                <h2>Una regla por vez</h2>
                <p>
                  La entrada es para A1, con ejemplos simples y vocabulario
                  repetido. El sistema completo incluye contenidos A2: las
                  estaciones 05 y 06 son ampliaciones opcionales. Podés aprender
                  a distinguir las dos funciones antes de combinar dos
                  pronombres.
                </p>
                <p>
                  <strong>OD = CD:</strong> objeto o complemento directo.{" "}
                  <strong>OI = CI:</strong> objeto o complemento indirecto.
                </p>
              </section>
            </GrammarStep>
          </div>
          <footer className="sj-intro-footer">
            <p>
              La estación está abierta. No necesitás saber los pronombres
              todavía.
            </p>
            <button onClick={() => go("cover")}>ENTRAR A LA AVENTURA →</button>
          </footer>
        </div>
      </main>
    );
  if (screen === "cover")
    return (
      <main className="sj-app sj-cover od-app">
        <Dust />
        <div className="sj-cover-orbit orbit-a" />
        <div className="sj-cover-copy">
          <Link href="/" className="sj-eyebrow">
            SPANISHCUE · A1 GUIADO
          </Link>
          <p className="sj-kicker">OBJETO DIRECTO + INDIRECTO + PRONOMBRES</p>
          <h1>
            La estación de
            <br />
            <em>los dos destinos</em>
          </h1>
          <p className="sj-cover-lead">
            Una carta. Un destinatario. Dos trabajos distintos.
            <br />
            Descubrí qué representan <strong>
              lo, la, le, me, te y nos
            </strong>{" "}
            sin adivinar por una letra.
          </p>
          <div className="sj-cover-actions">
            <button onClick={() => go("map")}>ABRIR EL RECORRIDO →</button>
            <button onClick={() => openUnit(0)}>EMPEZAR DESDE CERO</button>
          </div>
          <div className="sj-cover-stats">
            <span>
              <b>{String(units.length).padStart(2, "0")}</b> estaciones
            </span>
            <span>
              <b>{tables.length}</b> tablas
            </span>
            <span>
              <b>{exerciseCount}</b> decisiones
            </span>
          </div>
          <button className="sj-intro-back" onClick={() => go("intro")}>
            Repasar palabra, función, modo y tiempo
          </button>
        </div>
        <div className="sj-cover-art">
          <Scene />
        </div>
        <div className="sj-falling-word word-a">LA CARTA → LA</div>
        <div className="sj-falling-word word-b">A ANA → LE</div>
        <div className="sj-falling-word word-c">SE LA DOY</div>
      </main>
    );
  return (
    <main
      className={`sj-app sj-${screen} od-app`}
      style={{ "--portal": active.color } as CSSProperties}
    >
      {nav}
      {screen === "map" && (
        <div className="sj-map-content">
          <header className="sj-map-hero">
            <div>
              <span className="sj-overline">LA IDEA CENTRAL</span>
              <h1>
                La persona no decide.
                <br />
                La <em>función</em>, sí.
              </h1>
              <p>
                <strong>Veo a Ana.</strong> Ana es la persona vista: OD.
                <br />
                <strong>Doy una carta a Ana.</strong> Ana recibe la carta: OI.
              </p>
              <English>
                “Who?” alone does not separate the two objects. In “I see Ana”,
                Ana is seen. In “I give Ana a letter”, Ana receives the letter.
              </English>
            </div>
            <Scene />
          </header>
          <div className="grammar-step-stack od-map-steps">
            <GrammarStep
              number="01"
              eyebrow="PASO 1 · ¿QUÉ ES?"
              title="Quién entrega, qué entrega y a quién"
              accent="#7259bb"
            >
              <section className="sj-three-moods">
                <header>
                  <span>EL REPARTO DE UNA ENTREGA</span>
                  <h2>Quién entrega. Qué entrega. A quién.</h2>
                </header>
                <div>
                  <article>
                    <i>01</i>
                    <small>SUJETO</small>
                    <h3>Leo</h3>
                    <p>Quien realiza esta entrega.</p>
                    <b>Leo entrega una carta a Ana.</b>
                  </article>
                  <article className="featured">
                    <i>02</i>
                    <small>OBJETO DIRECTO</small>
                    <h3>La carta</h3>
                    <p>Lo entregado en esta escena.</p>
                    <b>Leo la entrega.</b>
                  </article>
                  <article>
                    <i>03</i>
                    <small>OBJETO INDIRECTO</small>
                    <h3>A Ana</h3>
                    <p>La destinataria de la carta.</p>
                    <b>Leo le entrega una carta.</b>
                  </article>
                </div>
              </section>
            </GrammarStep>
          </div>
          <section className="sj-route">
            <header>
              <span>MAPA DE LA AVENTURA</span>
              <h2>Ocho estaciones, una pieza por vez</h2>
              <p>
                Seguí el orden o volvé al punto que te cuesta. Una estación
                cuenta como completada al resolver sus cuatro decisiones. El
                progreso dura mientras esta página siga abierta.
              </p>
            </header>
            <div className="sj-route-grid">
              {units.map((u, i) => (
                <button
                  key={u.id}
                  className={completed.has(u.id) ? "visited" : ""}
                  style={{ "--card": u.color } as CSSProperties}
                  onClick={() => openUnit(i)}
                >
                  <span className="sj-card-number">{u.number}</span>
                  <small>{u.level}</small>
                  <h3>{u.title}</h3>
                  <p>{u.english}</p>
                  <b>{u.world}</b>
                  <i>{completed.has(u.id) ? "✓ COMPLETADA" : "ENTRAR"} →</i>
                </button>
              ))}
            </div>
          </section>
          <section className="sj-golden-rule">
            <span>LA BRÚJULA</span>
            <h2>Escena → función → pronombre.</h2>
            <p>Primero entendé qué pasa. Después elegí cómo nombrarlo.</p>
            <button onClick={() => go("atlas")}>
              ABRIR EL ATLAS COMPLETO →
            </button>
          </section>
        </div>
      )}
      {screen === "chapter" && (
        <div className="sj-chapter-wrap">
          <header className="sj-chapter-hero">
            <Scene position={unitIndex % 2 ? "70% center" : "center"} />
            <div className="sj-chapter-shade" />
            <div className="sj-chapter-top">
              <button onClick={() => go("map")}>← VOLVER AL MAPA</button>
              <span>
                ESTACIÓN {active.number} · {active.level}
              </span>
            </div>
            <div className="sj-chapter-title">
              <small>{active.world}</small>
              <h1>{active.title}</h1>
              <p>{active.english}</p>
            </div>
            <div className="sj-formula">
              <span>FÓRMULA CENTRAL</span>
              <b>{active.formula}</b>
            </div>
          </header>
          <div className="sj-chapter-body">
            <section className="sj-learning-order">
              <span>RUTA DE APRENDIZAJE</span>
              <div>
                {[
                  "ENTENDER",
                  "IDENTIFICAR",
                  "REEMPLAZAR",
                  "PRACTICAR",
                  "HABLAR",
                ].map((x, i) => (
                  <span key={x}>
                    <b>{i + 1}</b>
                    {x}
                  </span>
                ))}
              </div>
            </section>
            <div className="grammar-step-stack od-chapter-steps">
              <GrammarStep
                number="01"
                eyebrow="PASO 1 · ¿QUÉ ES?"
                title={active.question}
                accent={active.color}
              >
                <PositionStrip />
                <section className="sj-concept">
                  <span className="sj-section-number">01</span>
                  <article>
                    <small>LA PREGUNTA QUE ACLARA LA FUNCIÓN</small>
                    <h2>{active.question}</h2>
                    <p>{active.meaning}</p>
                  </article>
                </section>
              </GrammarStep>
              <GrammarStep
                number="02"
                eyebrow="PASO 2 · ¿CÓMO SE CONSTRUYE?"
                title="Una decisión por vez"
                accent={active.color}
              >
                <section className="sj-formation">
                  <header>
                    <span>CONSTRUCCIÓN PASO A PASO</span>
                    <h2>Una decisión por vez</h2>
                  </header>
                  <div>
                    {active.steps.map((step, i) => (
                      <article key={step}>
                        <b>0{i + 1}</b>
                        <p>{step}</p>
                      </article>
                    ))}
                  </div>
                </section>
                {(unitIndex === 0 || unitIndex === 1 || unitIndex === 7) && (
                  <SentenceLab key={active.id} extra={unitIndex === 7} />
                )}{" "}
                {unitIndex === 5 && <DeliveryLab />}
              </GrammarStep>
              {active.tables.length > 0 && (
                <GrammarStep
                  number="03"
                  eyebrow="PASO 3 · FÓRMULA / ESTRUCTURA"
                  title="Las formas de esta estación"
                  accent={active.color}
                >
                  <section className="sj-tables">
                    <header>
                      <span>EL SISTEMA A LA VISTA</span>
                      <h2>Las formas de esta estación</h2>
                    </header>
                    <div>
                      {active.tables.map((id) => (
                        <Table
                          key={id}
                          table={tables.find((t) => t.id === id)!}
                        />
                      ))}
                    </div>
                  </section>
                </GrammarStep>
              )}
              <GrammarStep
                number="04"
                eyebrow="PASO 4 · ¿PARA QUÉ LO USAMOS?"
                title="Dos escenas cotidianas"
                accent={active.color}
              >
                <section className="sj-uses">
                  <header>
                    <span>CUÁNDO LO USAMOS</span>
                    <h2>Dos escenas cotidianas</h2>
                  </header>
                  <div>
                    {active.uses.map((use, i) => (
                      <article key={use.title}>
                        <span>0{i + 1}</span>
                        <div>
                          <h3>{use.title}</h3>
                          <p>{use.explanation}</p>
                          <b>{use.example}</b>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </GrammarStep>
              <GrammarStep
                number="05"
                eyebrow="PASO 5 · CONTRASTES"
                title="Compará lo que cambia"
                accent={active.color}
              >
                <section className="sj-contrast">
                  <header>
                    <span>EL ESPEJO DEL SIGNIFICADO</span>
                    <h2>Compará lo que cambia</h2>
                  </header>
                  <div>
                    {active.contrasts.map((pair, i) => (
                      <article key={pair.left}>
                        <div>
                          <small>ESCENA A</small>
                          <b>{pair.left}</b>
                        </div>
                        <i>{i + 1}</i>
                        <div>
                          <small>ESCENA B</small>
                          <b>{pair.right}</b>
                        </div>
                        <p>{pair.why}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </GrammarStep>
              <GrammarStep
                number="06"
                eyebrow="PASO 6 · ERRORES COMUNES"
                title="Paquetes mal encaminados"
                accent={active.color}
              >
                <section className="sj-errors">
                  <div className="sj-error-art">
                    <Scene position="20% center" />
                  </div>
                  <article>
                    <span>PAQUETES MAL ENCAMINADOS</span>
                    <h2>Errores que podemos entender</h2>
                    {active.errors.map((e) => (
                      <div key={e.wrong}>
                        <p>
                          <small>REVISÁ</small>
                          <del>{e.wrong}</del>
                        </p>
                        <p>
                          <small>ASÍ SÍ</small>
                          <b>{e.right}</b>
                        </p>
                        <span>{e.why}</span>
                      </div>
                    ))}
                  </article>
                </section>
              </GrammarStep>
              <GrammarStep
                number="07"
                eyebrow="PASO 7 · PRÁCTICA"
                title="Elegí, comprobá y explicá"
                accent={active.color}
              >
                <section className="od-practice">
                  <header>
                    <span>LABORATORIO INTERACTIVO</span>
                    <h2>Elegí. Comprobá. Explicá.</h2>
                    <p>
                      Son cuatro decisiones. Si te equivocás, leé la explicación
                      y probá de nuevo.
                    </p>
                  </header>
                  <Quiz
                    id={active.id}
                    items={active.exercises}
                    answers={answers}
                    setAnswer={setAnswer}
                  />
                  <p className="od-station-status" role="status">
                    {completed.has(active.id)
                      ? "✓ Estación completada. Ya resolviste las cuatro decisiones."
                      : `${active.exercises.filter((q, i) => answers[`${active.id}-${i}`] === q.correct).length} de 4 decisiones resueltas.`}
                  </p>
                </section>
              </GrammarStep>
              <GrammarStep
                number="08"
                eyebrow="PASO 8 · CONVERSACIÓN / PRODUCCIÓN"
                title="Ahora contá algo tuyo"
                accent={active.color}
              >
                <section className="sj-speaking">
                  <div>
                    <span>MESA DE CONVERSACIÓN</span>
                    <h2>Ahora contá algo tuyo</h2>
                    <p>
                      Usá los comienzos como ayuda. La respuesta puede ser
                      corta; lo importante es entender qué representa cada
                      pronombre.
                    </p>
                  </div>
                  <div>
                    {active.speaking.map((p, i) => (
                      <article key={p.question}>
                        <span>{i + 1}</span>
                        <h3>{p.question}</h3>
                        <p>{p.starter}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </GrammarStep>
            </div>
            <nav className="sj-chapter-nav">
              <button
                disabled={unitIndex === 0}
                onClick={() => openUnit(unitIndex - 1)}
              >
                ← ANTERIOR
              </button>
              <button onClick={() => go("map")}>MAPA GENERAL</button>
              <button
                disabled={unitIndex === units.length - 1}
                onClick={() => openUnit(unitIndex + 1)}
              >
                SIGUIENTE →
              </button>
            </nav>
            {unitIndex === 4 && (
              <button className="od-skip-extra" onClick={() => openUnit(7)}>
                Dejar la ampliación A2 para después e ir a la integración →
              </button>
            )}
            {unitIndex === 7 && (
              <button className="od-skip-extra" onClick={() => go("atlas")}>
                Abrir el atlas y el diagnóstico final →
              </button>
            )}
          </div>
        </div>
      )}
      {screen === "atlas" && (
        <>
          <header className="sj-atlas-hero">
            <Dust />
            <div className="sj-atlas-copy">
              <span>ATLAS MAESTRO · A1 GUIADO + AMPLIACIÓN A2</span>
              <h1>
                Todo el sistema,
                <br />
                sin perder la escena.
              </h1>
              <p>Tablas, una entrega interactiva y ocho decisiones finales.</p>
              <button onClick={() => go("map")}>← VOLVER AL MAPA</button>
            </div>
            <Scene />
          </header>
          <div className="sj-atlas-body">
            <div className="grammar-step-stack od-atlas-steps">
              <GrammarStep
                number="01"
                eyebrow="PASO 1 · CONTRASTE CENTRAL"
                title="Veo a Ana. Le doy algo a Ana."
                accent="#7259bb"
              >
                <section className="sj-atlas-intro">
                  <span>LA DISTINCIÓN QUE IMPORTA</span>
                  <h2>Veo a Ana. Le doy algo a Ana.</h2>
                  <p>
                    Una persona puede ocupar cualquiera de las dos funciones. El
                    pronombre depende de qué hace en esa frase.
                  </p>
                </section>
              </GrammarStep>
              <GrammarStep
                number="02"
                eyebrow="PASO 2 · TABLAS"
                title="Todo el sistema a la vista"
                accent="#52d9e8"
              >
                <div className="sj-all-tables">
                  {tables.map((t) => (
                    <Table key={t.id} table={t} />
                  ))}
                </div>
              </GrammarStep>
              <GrammarStep
                number="03"
                eyebrow="PASO 3 · PRODUCCIÓN GUIADA"
                title="Mesa de envíos"
                accent="#e8bf65"
              >
                <DeliveryLab />
              </GrammarStep>
              <GrammarStep
                number="04"
                eyebrow="PASO 4 · PRÁCTICA"
                title="Diagnóstico final"
                accent="#e84f83"
              >
                <section className="od-diagnostic">
                  <header>
                    <span>DIAGNÓSTICO FINAL</span>
                    <h2>¿Entendés a quién o a qué se refiere?</h2>
                    <p>
                      Las primeras seis decisiones repasan la base. Las últimas
                      dos son ampliación.
                    </p>
                  </header>
                  <Quiz
                    id="final"
                    items={finalDiagnostic}
                    answers={answers}
                    setAnswer={setAnswer}
                  />
                  <p className="od-station-status" role="status">
                    {
                      finalDiagnostic.filter(
                        (q, i) => answers[`final-${i}`] === q.correct,
                      ).length
                    }{" "}
                    de {finalDiagnostic.length} respuestas correctas.
                  </p>
                </section>
              </GrammarStep>
              <GrammarStep
                number="05"
                eyebrow="PASO 5 · GUÍA"
                title="Cuatro preguntas útiles"
                accent="#7259bb"
              >
                <section className="sj-diagnostic">
                  <header>
                    <span>BRÚJULA PARA LLEVAR A CLASE</span>
                    <h2>Cuatro preguntas útiles</h2>
                  </header>
                  <div>
                    {[
                      [
                        "¿Qué dice el verbo en esta escena?",
                        "No empieces por una letra.",
                      ],
                      [
                        "¿Qué función tiene el referente?",
                        "OD u OI; también puede ser sujeto u otro complemento.",
                      ],
                      [
                        "¿A quién o qué representa el pronombre?",
                        "Persona, género y número cuando correspondan.",
                      ],
                      [
                        "¿Dónde va en esta construcción?",
                        "Con presente: antes. Si hay dos, mantenelos juntos.",
                      ],
                    ].map(([q, a], i) => (
                      <article key={q}>
                        <b>{i + 1}</b>
                        <p>{q}</p>
                        <span>{a}</span>
                      </article>
                    ))}
                  </div>
                  <button onClick={() => openUnit(0)}>
                    VOLVER A LA PRIMERA ESTACIÓN →
                  </button>
                </section>
              </GrammarStep>
              <GrammarStep
                number="06"
                eyebrow="PASO 6 · PRECISIONES"
                title="Variantes y fuentes"
                accent="#52d9e8"
              >
                <details className="od-reference-note">
                  <summary>Si escuchás «le veo»</summary>
                  <p>
                    Para aprender la distinción, aquí usamos «lo veo» para un OD
                    masculino y «le doy una carta» para un OI. También se admite
                    le para un OD de persona masculina singular: «A Leo le veo».
                    Es una variante del español. No significa que todos los OD
                    de persona usen le.
                  </p>
                </details>
                <details className="od-reference-note">
                  <summary>Fuentes gramaticales de la clase</summary>
                  <div className="od-sources">
                    {sources.map((s) => (
                      <article key={s.url}>
                        <a href={s.url} target="_blank" rel="noreferrer">
                          {s.title} ↗
                        </a>
                        <p>{s.note}</p>
                      </article>
                    ))}
                  </div>
                </details>
              </GrammarStep>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
