"use client";

import Link from "next/link";
import GrammarStep from "../grammar-steps/GrammarStep";
import "./style.css";

export default function MoodTenseDisclosure({
  showLessonLink = true,
  className = "",
  defaultOpen,
}: {
  showLessonLink?: boolean;
  className?: string;
  defaultOpen?: boolean;
}) {
  return (
    <GrammarStep
      number="M/T"
      eyebrow="AYUDA GRAMATICAL"
      title="¿Qué es un modo y qué es un tiempo verbal?"
      description="Abre esta explicación solamente cuando haga falta separar ambos conceptos."
      accent="#7259bb"
      className={`vmt-help ${className}`.trim()}
      kind="optional"
      defaultOpen={defaultOpen ?? !showLessonLink}
    >
      <div className="vmt-help-body">
        <p className="vmt-help-intro">
          Son dos datos distintos de un verbo conjugado. Separarlos evita
          confundir <b>subjuntivo</b>, <b>pasado</b> y <b>condicional</b>.
        </p>

        <div className="vmt-help-pair">
          <article>
            <small>MODO · ¿CÓMO LO PRESENTO?</small>
            <h3>La posición del hablante</h3>
            <p>
              <b>Indicativo:</b> presenta información. <b>Subjuntivo:</b> no
              presenta la acción como una afirmación independiente; la filtra
              mediante deseo, emoción, duda, valoración, finalidad o hipótesis.{" "}
              <b>Imperativo:</b> intenta dirigir una acción.
            </p>
          </article>
          <article>
            <small>TIEMPO · ¿CUÁNDO LO SITÚO?</small>
            <h3>La ubicación temporal</h3>
            <p>
              Sitúa la acción respecto de ahora o de otro momento de referencia.
              El indicativo y el subjuntivo tienen varios tiempos: el
              subjuntivo, por ejemplo, tiene presente, imperfecto y tiempos
              compuestos.
            </p>
          </article>
        </div>

        <div
          className="vmt-help-examples"
          aria-label="Ejemplos de modo y tiempo"
        >
          <p>
            <b>Sé que viene.</b>
            <span>Indicativo · presente</span>
          </p>
          <p>
            <b>Dudo que venga.</b>
            <span>Subjuntivo · presente</span>
          </p>
          <p>
            <b>Dudaba que viniera.</b>
            <span>Subjuntivo · imperfecto</span>
          </p>
        </div>

        <aside className="vmt-help-note">
          <b>Dos confusiones frecuentes</b>
          <p>
            El <strong>subjuntivo es un modo</strong>, no “un tiempo”. En la
            clasificación académica, <strong>abriría</strong> es condicional
            simple de indicativo. Además, una oración con <em>si</em> puede no
            llevar ningún verbo en condicional:{" "}
            <strong>Si llueve, me quedo.</strong>
          </p>
        </aside>

        {showLessonLink && (
          <Link className="vmt-help-link" href="/modo-vs-tiempo-verbal">
            Abrir la mini clase completa →
          </Link>
        )}
      </div>
    </GrammarStep>
  );
}
