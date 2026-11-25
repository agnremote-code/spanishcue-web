"use client";

import { useState } from "react";
import m from "./modo.module.css";

type Item = { before: string; after: string; options: [string, string]; answer: 0 | 1; correctLabel: string; wrongLabel: string; tag?: string };

/**
 * Two-button chooser: the student picks the form and gets the reason at once.
 * The server renders every sentence and its solution (inside <details>), so the
 * page reads the same without JavaScript, in print and for search engines.
 */
export default function MoodChooser({ items }: { items: Item[] }) {
  const [picked, setPicked] = useState<Record<number, 0 | 1>>({});
  const answered = Object.keys(picked).length;
  const right = items.filter((item, i) => picked[i] === item.answer).length;
  return (
    <div className={m.chooser}>
      <ol>
        {items.map((item, i) => {
          const choice = picked[i];
          const done = choice !== undefined;
          const correct = item.options[item.answer];
          return (
            <li key={`${item.before}${i}`} data-state={done ? (choice === item.answer ? "right" : "wrong") : undefined}>
              {item.tag ? <span className={m.tag}>{item.tag}</span> : null}
              <p className={m.sentence}>
                {item.before}<span className={m.gap}>{done ? correct : "___"}</span>{item.after}
              </p>
              <div className={m.options} role="group" aria-label="Elige la forma correcta">
                {item.options.map((option, o) => (
                  <button
                    key={option} type="button" disabled={done}
                    data-mark={done ? (o === item.answer ? "right" : o === choice ? "wrong" : undefined) : undefined}
                    onClick={() => setPicked((prev) => ({ ...prev, [i]: o as 0 | 1 }))}
                  >{option}</button>
                ))}
              </div>
              {done ? (
                <p className={m.feedback} role="status">
                  {choice === item.answer ? "Correcto. " : `No: «${item.options[choice]}» está en ${item.wrongLabel}. `}
                  «{correct}» está en {item.correctLabel}.
                </p>
              ) : (
                <details className={m.solution}><summary>Ver solución</summary>{correct} ({item.correctLabel})</details>
              )}
            </li>
          );
        })}
      </ol>
      <p className={m.score} aria-live="polite">
        {answered ? `${right} de ${answered} correctas${answered === items.length ? "." : ` · faltan ${items.length - answered}`}` : `${items.length} frases: pulsa la forma que va en el hueco.`}
        {answered ? <button type="button" onClick={() => setPicked({})}>Empezar de nuevo</button> : null}
      </p>
    </div>
  );
}
