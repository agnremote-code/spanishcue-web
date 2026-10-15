'use client';

// Conversación general: the open questions that close a scene. The teacher
// sees all of them, picks the one to ask (or goes through them in order) and
// can go back; what was already asked stays marked while the class goes on,
// even if the scene is closed and opened again. Shared by the 3D classes:
// each class styles `.gq` inside its own card and passes how to render a
// question (with its translation underneath, for example).
import { useState, type ReactNode } from 'react';

type Progress = { at: number; seen: number[] };
// Progress per scene for this page visit, keyed by scene and questions.
const memory = new Map<string, Progress>();

export default function GeneralQuestions({ id, questions, render = (q) => q, title = 'Ahora, conversación', askClassName, labels }: {
  id: string;
  questions: string[];
  render?: (question: string) => ReactNode;
  title?: ReactNode;
  askClassName?: string;
  labels?: { previous?: string; next?: string; list?: string };
}) {
  const key = `${id}::${questions.join('|')}`;
  const [progress, setProgress] = useState<Progress>(() => memory.get(key) ?? { at: 0, seen: [0] });
  const [shownKey, setShownKey] = useState(key);
  let current = progress;
  if (shownKey !== key) {
    current = memory.get(key) ?? { at: 0, seen: [0] };
    setShownKey(key);
    setProgress(current);
  }
  if (!questions.length) return null;
  const at = Math.min(current.at, questions.length - 1);
  const go = (index: number) => {
    const next = { at: index, seen: current.seen.includes(index) ? current.seen : [...current.seen, index] };
    memory.set(key, next);
    setProgress(next);
  };
  return <section className="gq" data-general-questions={questions.length} aria-label="Preguntas de conversación">
    <p className="gq-title">{title}<span className="gq-count">{at + 1} / {questions.length}</span></p>
    <ol className="gq-list" aria-label={labels?.list ?? 'Todas las preguntas'}>
      {questions.map((question, i) => <li key={i}>
        <button type="button" className={i === at ? 'is-now' : current.seen.includes(i) ? 'is-seen' : undefined}
          aria-current={i === at ? 'true' : undefined} onClick={() => go(i)}>
          <span className="gq-n" aria-hidden="true">{current.seen.includes(i) && i !== at ? '✓' : i + 1}</span>
          <span className={i === at && askClassName ? `gq-q ${askClassName}` : 'gq-q'}>{render(question)}</span>
        </button>
      </li>)}
    </ol>
    <div className="gq-nav">
      <button type="button" disabled={at === 0} onClick={() => go(at - 1)}>{labels?.previous ?? '← Anterior'}</button>
      <button type="button" disabled={at === questions.length - 1} onClick={() => go(at + 1)}>{labels?.next ?? 'Siguiente pregunta →'}</button>
    </div>
  </section>;
}
