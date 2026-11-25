"use client";

import { useState } from "react";
import q from "./quiz.module.css";

export type QuizItem = { before: string; after: string; options: string[]; answer: number; why: string; tag?: string };

/**
 * Multiple-choice gap quiz shared by the mini-app families: the student taps an
 * option and gets the reason at once. The server renders every sentence and its
 * solution (inside <details>), so the page reads the same without JavaScript,
 * in print and for search engines.
 */
export default function ChoiceQuiz({ items, label = "Elige la opción correcta" }: { items: QuizItem[]; label?: string }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const answered = Object.keys(picked).length;
  const right = items.filter((item, i) => picked[i] === item.answer).length;
  return (
    <div className={q.chooser}>
      <ol>
        {items.map((item, i) => {
          const choice = picked[i];
          const done = choice !== undefined;
          const correct = item.options[item.answer];
          return (
            <li key={`${item.before}${i}`} data-state={done ? (choice === item.answer ? "right" : "wrong") : undefined}>
              {item.tag ? <span className={q.tag}>{item.tag}</span> : null}
              <p className={q.sentence}>
                {item.before}<span className={q.gap}>{done ? correct : "___"}</span>{item.after}
              </p>
              <div className={q.options} role="group" aria-label={label}>
                {item.options.map((option, o) => (
                  <button
                    key={option} type="button" disabled={done}
                    data-mark={done ? (o === item.answer ? "right" : o === choice ? "wrong" : undefined) : undefined}
                    onClick={() => setPicked((prev) => ({ ...prev, [i]: o }))}
                  >{option}</button>
                ))}
              </div>
              {done ? (
                <p className={q.feedback} role="status">{choice === item.answer ? "Correcto. " : `No, «${item.options[choice]}» no va aquí. `}{item.why}</p>
              ) : (
                <details className={q.solution}><summary>Ver solución</summary>{correct}. {item.why}</details>
              )}
            </li>
          );
        })}
      </ol>
      <p className={q.score} aria-live="polite">
        {answered ? `${right} de ${answered} correctas${answered === items.length ? "." : ` · faltan ${items.length - answered}`}` : `${items.length} frases: pulsa la opción que va en el hueco.`}
        {answered ? <button type="button" onClick={() => setPicked({})}>Empezar de nuevo</button> : null}
      </p>
    </div>
  );
}
