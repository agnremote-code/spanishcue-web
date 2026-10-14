"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { EngineContext } from "../engine/Exercises";
import type { AnswerEvent } from "./model";
import type { Suggestion } from "./useErrorLog";

/**
 * Reports one checked answer exactly once and, when the log decides so, shows
 * the discreet class card under the feedback. Never blocks the activity.
 */
export function Outcome({ ctx, event }: { ctx: EngineContext; event: AnswerEvent | null }) {
  const key = event ? `${event.section}|${event.exerciseId}|${event.itemIndex}|${event.attempt}|${event.verdict}` : "";
  const reported = useRef("");
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);
  useEffect(() => {
    if (!event || !key || reported.current === key) return;
    reported.current = key;
    const next = ctx.report?.(event) ?? null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (next) setSuggestion(next);
    if (event.verdict === "correct") setSuggestion(null);
  }, [key, event, ctx]);
  if (!suggestion || !event || event.verdict === "correct") return null;
  return <RecommendationCard suggestion={suggestion} onOpen={() => ctx.onOpenSuggestion?.(suggestion)} onDismiss={() => { ctx.onDismissSuggestion?.(suggestion); setSuggestion(null); }} />;
}

export function RecommendationCard({ suggestion, onOpen, onDismiss }: { suggestion: Suggestion; onOpen?: () => void; onDismiss?: () => void }): ReactNode {
  const href = suggestion.lesson.free ? suggestion.lesson.path : `/autoestudio/clase/${suggestion.lesson.id}?de=${encodeURIComponent(suggestion.moduleId)}&tema=${suggestion.category}`;
  return (
    <aside className="ae-reco" aria-label={`Clase recomendada: ${suggestion.lesson.title}`}>
      <img src={suggestion.lesson.image} alt="" width="640" height="360" loading="lazy" />
      <div>
        <p className="ae-reco-kicker">{suggestion.question}</p>
        <p>Parece que este tema necesita un poco más de práctica. Explora nuestra clase interactiva <b>{suggestion.lesson.title}</b> ({suggestion.lesson.level} · {suggestion.lesson.topic}), con explicaciones, ejemplos y ejercicios.</p>
        <div className="ae-reco-actions">
          <Link href={href} className="ae-primary" onClick={onOpen}>Explorar clase →</Link>
          <button type="button" className="ae-link" onClick={onDismiss}>Ahora no</button>
        </div>
      </div>
    </aside>
  );
}
