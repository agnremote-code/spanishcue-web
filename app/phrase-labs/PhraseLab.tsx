"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import GrammarStep from "../grammar-steps/GrammarStep";
import type { PhraseLabData, PhraseToken } from "./data";
import "./style.css";

function Tokens({ tokens, large = false }: { tokens: PhraseToken[]; large?: boolean }) {
  return (
    <div className={`pl-tokens ${large ? "large" : ""}`}>
      {tokens.map((token, index) => (
        <span className={`role-${token.role}`} key={`${token.text}-${index}`}>
          {token.text}
        </span>
      ))}
    </div>
  );
}

function OrderBoard({
  task,
  index,
}: {
  task: PhraseLabData["orderTasks"][number];
  index: number;
}) {
  const [chosen, setChosen] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const correct = task.answers.some(
    (answer) =>
      answer.length === chosen.length &&
      answer.every((token, tokenIndex) => token === chosen[tokenIndex]),
  );
  const available = task.tokens.filter((token) => !chosen.includes(token));
  return (
    <article className={`pl-order-card ${checked ? (correct ? "correct" : "retry") : ""}`}>
      <header>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div>
          <small>RECONSTRUCCIÓN</small>
          <h3>{task.prompt}</h3>
        </div>
      </header>
      <div className="pl-answer-line" aria-label="Tu frase">
        {chosen.length ? (
          chosen.map((token) => (
            <button
              type="button"
              key={token}
              onClick={() => {
                setChosen((current) => current.filter((item) => item !== token));
                setChecked(false);
              }}
            >
              {token}
            </button>
          ))
        ) : (
          <p>Toca las piezas en el orden correcto.</p>
        )}
      </div>
      <div className="pl-token-pool" aria-label="Piezas disponibles">
        {available.map((token) => (
          <button
            type="button"
            key={token}
            onClick={() => {
              setChosen((current) => [...current, token]);
              setChecked(false);
            }}
          >
            {token}
          </button>
        ))}
      </div>
      <div className="pl-board-actions">
        <button
          type="button"
          className="secondary"
          disabled={!chosen.length}
          onClick={() => {
            setChosen([]);
            setChecked(false);
          }}
        >
          REINICIAR
        </button>
        <button
          type="button"
          disabled={chosen.length !== task.tokens.length}
          onClick={() => setChecked(true)}
        >
          COMPROBAR
        </button>
      </div>
      {checked && (
        <p className="pl-feedback" role="status">
          <b>{correct ? "BIEN CONSTRUIDA" : "REVISÁ EL ORDEN"}</b>
          {correct ? task.explanation : "Retira una pieza y prueba otra posición."}
        </p>
      )}
    </article>
  );
}

function ChoicePractice({ choices }: { choices: PhraseLabData["choices"] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  return (
    <div className="pl-choice-grid">
      {choices.map((choice, index) => {
        const selected = answers[index];
        const answered = selected !== undefined;
        const correct = selected === choice.correct;
        return (
          <article className={answered ? (correct ? "correct" : "retry") : ""} key={choice.prompt}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{choice.prompt}</h3>
            <div>
              {choice.options.map((option, optionIndex) => (
                <button
                  type="button"
                  aria-pressed={selected === optionIndex}
                  onClick={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}
                  key={option}
                >
                  {option}
                </button>
              ))}
            </div>
            {answered && (
              <p role="status">
                <b>{correct ? "CORRECTO" : `MIRA: ${choice.options[choice.correct]}`}</b>
                {choice.explanation}
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default function PhraseLab({ data }: { data: PhraseLabData }) {
  const [layer, setLayer] = useState(0);
  const [transformation, setTransformation] = useState(0);
  const progress = useMemo(
    () => Math.round(((layer + 1) / data.layers.length) * 100),
    [layer, data.layers.length],
  );
  const theme = {
    "--pl-accent": data.accent,
    "--pl-accent-2": data.accent2,
  } as CSSProperties;

  return (
    <main className={`pl-app pl-${data.level.toLowerCase()}`} style={theme}>
      <header className="pl-nav">
        <Link href="/" className="pl-back" aria-label="Volver a la biblioteca">←</Link>
        <Link href="/" className="pl-brand" aria-label="SPANISHCUE, inicio">
          <span>SC</span>
          <div><b>SPANISHCUE</b><small>GRAMMAR STUDIO</small></div>
        </Link>
        <div className="pl-nav-topic">
          <small>{data.module}</small>
          <b>{data.level} · 45 MIN</b>
        </div>
        <a href="#recorrido" className="pl-nav-action">VER RECORRIDO</a>
      </header>

      <section className="pl-hero">
        <div className="pl-grid" aria-hidden="true" />
        <div className="pl-orbit orbit-one" aria-hidden="true" />
        <div className="pl-orbit orbit-two" aria-hidden="true" />
        <div className="pl-hero-copy">
          <span className="pl-module">{data.module}</span>
          <span className="pl-pcic"><small>PCIC · NOMBRE EXACTO</small>{data.pcic}</span>
          <h1>
            {data.displayTitle.split("\n").map((line, index, lines) => (
              <span className={index ? "accent" : ""} key={line}>
                {line}{index < lines.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p>{data.subtitle}</p>
          <div className="pl-hero-formula"><Tokens tokens={data.coreFormula} /></div>
          <a href="#recorrido">EMPEZAR LA CLASE <span>↓</span></a>
        </div>
        <div className="pl-hero-board" aria-label="Objetivo comunicativo">
          <small>OBJETIVO COMUNICATIVO</small>
          <strong>{data.goal}</strong>
          <div>
            <span>CLASE REAL</span><b>≈ 45 min</b>
            <span>NIVEL</span><b>{data.level}</b>
          </div>
        </div>
      </section>

      <section className="pl-timeline" aria-label="Distribución sugerida del tiempo">
        {data.timeline.map((item) => (
          <div key={item.label}><small>{item.minutes}</small><b>{item.label}</b></div>
        ))}
      </section>

      <section className="pl-audit-note">
        <span>AUDITORÍA DE CONTENIDOS</span>
        <p>{data.auditNote}</p>
      </section>

      <section className="grammar-step-stack pl-steps" id="recorrido">
        <GrammarStep
          number="01"
          eyebrow="DESCUBRIR · 5 MIN"
          title={data.discovery.question}
          description="Primero observar; después ponerle nombre a la estructura."
          accent={data.accent}
        >
          <div className="pl-discovery">
            <p>{data.discovery.instruction}</p>
            <div>
              {data.discovery.contrast.map((item, index) => (
                <article key={item}><small>{String(index + 1).padStart(2, "0")}</small><b>{item}</b></article>
              ))}
            </div>
          </div>
        </GrammarStep>

        <GrammarStep
          number="02"
          eyebrow="EXPLICACIÓN VISUAL · 10 MIN"
          title={data.visualTitle ?? "Construir por capas"}
          description={data.visualDescription ?? "Una sola pieza nueva por vez."}
          accent={data.accent}
        >
          <div className="pl-layer-lab">
            <header>
              <div><small>CAPA ACTIVA</small><b>{data.layers[layer].label}</b></div>
              <span>{progress}%</span>
            </header>
            <Tokens tokens={data.layers[layer].tokens} large />
            <p>{data.layers[layer].note}</p>
            <nav aria-label="Capas de la estructura">
              {data.layers.map((item, index) => (
                <button
                  type="button"
                  aria-pressed={index === layer}
                  onClick={() => setLayer(index)}
                  key={item.label}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="pl-principles">
            {data.principles.map((principle, index) => (
              <article key={principle.title}>
                <header><span>{String(index + 1).padStart(2, "0")}</span><small>{principle.kicker}</small></header>
                <h3>{principle.title}</h3>
                <p>{principle.explanation}</p>
                <b className="pl-mini-formula">{principle.formula}</b>
                <div>{principle.examples.map((example) => <span key={example}>{example}</span>)}</div>
              </article>
            ))}
          </div>
        </GrammarStep>

        <GrammarStep
          number="03"
          eyebrow="PRÁCTICA GUIADA · 7 MIN"
          title="Ordenar y reconstruir"
          description="Toca las piezas para montar cada estructura."
          accent={data.accent}
        >
          <div className="pl-order-grid">
            {data.orderTasks.map((task, index) => <OrderBoard task={task} index={index} key={task.prompt} />)}
          </div>
        </GrammarStep>

        <GrammarStep
          number="04"
          eyebrow="PRÁCTICA GUIADA · 5 MIN"
          title="Elegir y corregir"
          description="Cada respuesta explica la decisión."
          accent={data.accent}
        >
          <ChoicePractice choices={data.choices} />
        </GrammarStep>

        <GrammarStep
          number="05"
          eyebrow="TRANSFORMAR Y EXPANDIR · 3–5 MIN"
          title={data.transformTitle ?? "Una idea, varias versiones"}
          description={data.transformDescription ?? "Cambia una pieza y observá qué cambia en el mensaje."}
          accent={data.accent}
        >
          <div className="pl-transform">
            <nav aria-label="Versiones de la misma idea">
              {data.transformations.map((item, index) => (
                <button type="button" aria-pressed={index === transformation} onClick={() => setTransformation(index)} key={item.label}>
                  {item.label}
                </button>
              ))}
            </nav>
            <article key={data.transformations[transformation].label}>
              <small>{data.transformations[transformation].label}</small>
              <strong>{data.transformations[transformation].sentence}</strong>
              <p>{data.transformations[transformation].note}</p>
            </article>
          </div>
        </GrammarStep>

        <GrammarStep
          number="06"
          eyebrow="MINI-PRODUCCIÓN · 5 MIN"
          title="Ahora sin piezas preparadas"
          description="El alumno construye y el profesor acompaña."
          accent={data.accent}
        >
          <div className="pl-production-grid">
            {data.production.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <small>{item.title}</small>
                <h3>{item.prompt}</h3>
                <ul>{item.checklist.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </GrammarStep>

        <GrammarStep
          number="07"
          eyebrow={`CONVERSACIÓN REAL · ${data.conversationMinutes ?? "10+ MIN"}`}
          title="De la estructura a una charla de verdad"
          description="Preguntas abiertas, repreguntas y apoyos opcionales."
          accent={data.accent}
          className="pl-conversation-step"
        >
          <div className="pl-conversation-intro">
            <span>NO ES UN EJERCICIO DISFRAZADO</span>
            <p>Elige las preguntas que generen una conversación real. Escucha la respuesta, usa la repregunta y deja que el tema continúe.</p>
          </div>
          <div className="pl-conversation-grid">
            {data.conversation.map((item, index) => (
              <article key={item.question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.question}</h3>
                <details>
                  <summary>VER APOYOS OPCIONALES</summary>
                  <div><small>STARTER</small><p>{item.starter}</p></div>
                  <div><small>VOCABULARIO</small><p>{item.vocabulary}</p></div>
                  <div><small>REPREGUNTA</small><p>{item.followUp}</p></div>
                </details>
              </article>
            ))}
          </div>
        </GrammarStep>
      </section>

      <footer className="pl-footer">
        <Link href="/">← VOLVER A GRAMÁTICA</Link>
        <div><b>SPANISHCUE</b><span>{data.pcic}</span></div>
        <a href="#recorrido">VOLVER ARRIBA ↑</a>
      </footer>
    </main>
  );
}
