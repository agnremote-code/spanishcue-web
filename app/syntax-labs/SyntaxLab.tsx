"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import GrammarStep from "../grammar-steps/GrammarStep";
import { SpanishCueBrand } from "../SpanishCueBrand";
import type { SyntaxDecision, SyntaxLabData, SyntaxRepair } from "./data";
import { ClauseBuilder, ContrastMixer, DecisionChain, ReferentFinder, SentenceConnector, TimelineBuilder } from "./SyntaxVisuals";
import "./style.css";

function SyntaxPreview({ data, left, connector, right }: { data: SyntaxLabData; left: string; connector: string; right: string }) {
  if (data.mode === "connector") return <SentenceConnector left={left} connector={connector} right={right} />;
  if (data.mode === "timeline") return <TimelineBuilder left={left} connector={connector} right={right} />;
  if (data.mode === "decision") return <DecisionChain left={left} connector={connector} right={right} />;
  if (data.mode === "contrast") return <ContrastMixer left={left} connector={connector} right={right} />;
  if (data.mode === "referent") return <ReferentFinder left={left} connector={connector} right={right} />;
  return <ClauseBuilder left={left} connector={connector} right={right} />;
}

function PatternPreview({ data, pattern }: { data: SyntaxLabData; pattern: SyntaxLabData["patterns"][number] }) {
  const props = { left: pattern.preview.left, connector: pattern.preview.connector, right: pattern.preview.right, label: pattern.formula };
  if (data.mode === "connector") return <SentenceConnector {...props} />;
  if (data.mode === "timeline") return <TimelineBuilder {...props} />;
  if (data.mode === "decision") return <DecisionChain {...props} />;
  if (data.mode === "contrast") return <ContrastMixer {...props} />;
  if (data.mode === "referent") return <ReferentFinder {...props} />;
  return <ClauseBuilder {...props} />;
}

function DecisionCard({ data, item, index }: { data: SyntaxLabData; item: SyntaxDecision; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = selected === item.correct;
  const connector = answered ? item.options[selected] : "?";
  return (
    <article className={`sx-decision ${answered ? (correct ? "correct" : "retry") : ""}`}>
      <header><span>{String(index + 1).padStart(2, "0")}</span><div><small>{item.intention}</small><h3>{item.prompt}</h3></div></header>
      <SyntaxPreview data={data} left={item.left} connector={connector} right={item.right} />
      <div className="sx-options" aria-label={`Opciones para la decisión ${index + 1}`}>
        {item.options.map((option, optionIndex) => (
          <button
            type="button"
            aria-pressed={selected === optionIndex}
            onClick={() => setSelected(optionIndex)}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
      {answered && <p className="sx-feedback" role="status"><b>{correct ? "LA RELACIÓN FUNCIONA" : `PROBÁ: ${item.options[item.correct]}`}</b>{item.feedback}</p>}
    </article>
  );
}

function RepairCard({ item, index }: { item: SyntaxRepair; index: number }) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = selected === item.correct;
  return (
    <article className={`sx-repair ${answered ? (correct ? "correct" : "retry") : ""}`}>
      <header><span>{String(index + 1).padStart(2, "0")}</span><div><small>REPARÁ EL MENSAJE</small><h3>{item.prompt}</h3></div></header>
      <blockquote>{item.original}</blockquote>
      <div className="sx-repair-options">
        {item.options.map((option, optionIndex) => (
          <button type="button" aria-pressed={selected === optionIndex} onClick={() => setSelected(optionIndex)} key={option}>{option}</button>
        ))}
      </div>
      {answered && <p className="sx-feedback" role="status"><b>{correct ? "REPARACIÓN PRECISA" : "CAMBIÓ EL SIGNIFICADO"}</b>{item.feedback}</p>}
    </article>
  );
}

export default function SyntaxLab({ data }: { data: SyntaxLabData }) {
  const [patternIndex, setPatternIndex] = useState(0);
  const pattern = data.patterns[patternIndex];
  const totalMinutes = useMemo(() => data.timeline.reduce((total, item) => total + item.minutes, 0), [data.timeline]);
  const theme = { "--sx-accent": data.accent, "--sx-accent-2": data.accent2 } as CSSProperties;

  return (
    <main className={`sx-app sx-${data.mode}`} style={theme}>
      <header className="sx-topbar">
        <Link href="/" aria-label="SPANISHCUE, inicio"><SpanishCueBrand variant="compact" tone="dark" /></Link>
        <div><small>{data.module}</small><b>{data.level} · {totalMinutes} MIN</b></div>
        <a href="#recorrido">VER RECORRIDO ↓</a>
      </header>

      <section className="sx-hero">
        <div className="sx-grid" aria-hidden="true" />
        <div className="sx-hero-copy">
          <span>{data.pcic}</span>
          <h1>{data.displayTitle.split("\n").map((line) => <em key={line}>{line}</em>)}</h1>
          <p>{data.subtitle}</p>
          <a href="#recorrido">EMPEZAR LA CLASE <b>↓</b></a>
        </div>
        <aside>
          <small>OBJETIVO COMUNICATIVO</small>
          <strong>{data.goal}</strong>
          <div><span>CLASE REAL</span><b>≈ {totalMinutes} min</b><span>NIVEL</span><b>{data.level}</b></div>
        </aside>
      </section>

      <section className="sx-timeline" aria-label="Distribución sugerida del tiempo">
        {data.timeline.map((item) => <div key={item.label}><b>{item.minutes} min</b><span>{item.label}</span></div>)}
      </section>

      <section className="sx-boundary"><b>LÍMITE {data.level}</b><p>{data.boundaries}</p></section>

      <section className="grammar-step-stack sx-steps" id="recorrido">
        <GrammarStep number="01" eyebrow={`ACTIVACIÓN · ${data.timeline[0].minutes} MIN`} title="¿Qué relación escuchás?" description="Primero interpretar; después elegir una forma." accent={data.accent}>
          <p className="sx-instruction">{data.activation.instruction}</p>
          <div className="sx-activation-grid">
            {data.activation.cards.map((card, index) => <article key={`${card.first}-${card.second}`}><small>{String(index + 1).padStart(2, "0")} · {card.intention}</small><p>{card.first}</p><i aria-hidden="true">+</i><p>{card.second}</p></article>)}
          </div>
        </GrammarStep>

        <GrammarStep number="02" eyebrow="MAPA VISUAL" title={data.mode === "connector" ? "Cinco relaciones, cinco decisiones" : "¿Qué tipo de idea entra en el espacio?"} description="La forma aparece siempre unida a una intención comunicativa." accent={data.accent}>
          <div className="sx-pattern-lab">
            <nav aria-label="Arquitecturas de la clase">
              {data.patterns.map((item, index) => <button type="button" aria-pressed={patternIndex === index} onClick={() => setPatternIndex(index)} key={item.key}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.label}</b><small>{item.intention}</small></button>)}
            </nav>
            <article>
              <small>{pattern.intention}</small>
              <h2>{pattern.formula}</h2>
              <PatternPreview data={data} pattern={pattern} />
              <p>{pattern.explanation}</p>
            </article>
          </div>
        </GrammarStep>

        <GrammarStep number="03" eyebrow="DECISIONES AUTOCORREGIBLES" title={data.mode === "connector" ? "Conecta según el significado" : "Encaja la arquitectura correcta"} description={`${data.decisions.length} decisiones con feedback sobre el significado.`} accent={data.accent}>
          <div className="sx-decision-grid">{data.decisions.map((item, index) => <DecisionCard data={data} item={item} index={index} key={item.prompt} />)}</div>
        </GrammarStep>

        {data.questionAnswerCycle.length > 0 && (
          <GrammarStep number="04" eyebrow="MICROCICLO · PREGUNTA / RESPUESTA" title="¿Por qué? se pregunta; porque responde" description="Decilo en voz alta y después cambiá el dato con información propia." accent={data.accent}>
            <div className="sx-qa-grid">{data.questionAnswerCycle.map((item) => <article key={item.question}><small>{item.cue}</small><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div>
          </GrammarStep>
        )}

        <GrammarStep number={data.questionAnswerCycle.length ? "05" : "04"} eyebrow="REPARACIÓN" title="Cuando una pieza cambia el mensaje" description="No alcanza con que la frase suene posible: tiene que comunicar la intención." accent={data.accent}>
          <div className="sx-repair-grid">{data.repairs.map((item, index) => <RepairCard item={item} index={index} key={item.original} />)}</div>
        </GrammarStep>

        <GrammarStep number={data.questionAnswerCycle.length ? "06" : "05"} eyebrow="RECUPERACIÓN SIN APOYO" title="Ahora la estructura sale de vos" description="Primera producción, repetición y menos apoyo visual." accent={data.accent}>
          <div className="sx-retrieval-grid">{data.retrieval.map((item, index) => <article key={item.prompt}><span>{String(index + 1).padStart(2, "0")}</span><small>{item.intention}</small><h3>{item.prompt}</h3><p>{item.challenge}</p></article>)}</div>
        </GrammarStep>

        <GrammarStep number={data.questionAnswerCycle.length ? "07" : "06"} eyebrow="PRODUCCIÓN ORAL" title="Construí una intervención completa" description="No hay respuestas modelo: el contenido tiene que ser verdadero o defendible." accent={data.accent}>
          <div className="sx-production-grid">{data.production.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><small>{item.title}</small><h3>{item.prompt}</h3><ul>{item.checklist.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div>
        </GrammarStep>

        <GrammarStep number={data.questionAnswerCycle.length ? "08" : "07"} eyebrow={`CONVERSACIÓN REAL · ${data.conversationMinutes} MIN`} title={data.finalTask.split(":")[0]} description={data.finalTask} accent={data.accent} className="sx-conversation-step">
          <div className="sx-conversation-grid">{data.conversation.map((item, index) => <article key={item.question}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.question}</h3><details><summary>APOYO OPCIONAL</summary><p><b>PARA EMPEZAR</b>{item.starter}</p><p><b>REPREGUNTA</b>{item.followUp}</p></details></article>)}</div>
        </GrammarStep>
      </section>

      <footer className="sx-footer"><Link href="/">← VOLVER A GRAMÁTICA</Link><div><b>SPANISHCUE</b><span>{data.pcic}</span></div><a href="#recorrido">VOLVER ARRIBA ↑</a></footer>
    </main>
  );
}
