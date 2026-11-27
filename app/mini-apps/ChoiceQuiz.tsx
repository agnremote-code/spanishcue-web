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
const copy = {
  es: { label: "Elige la opción correcta", right: "Correcto. ", wrong: (option: string) => `No, «${option}» no va aquí. `, solution: "Ver solución", score: (right: number, answered: number) => `${right} de ${answered} correctas`, left: (n: number) => ` · faltan ${n}`, start: (n: number) => `${n} frases: pulsa la opción que va en el hueco.`, reset: "Empezar de nuevo" },
  en: { label: "Choose the right answer", right: "Correct. ", wrong: (option: string) => `Not quite: «${option}» does not fit here. `, solution: "Show the answer", score: (right: number, answered: number) => `${right} of ${answered} correct`, left: (n: number) => ` · ${n} to go`, start: (n: number) => `${n} questions: tap the option that fills the gap.`, reset: "Start again" },
};

export default function ChoiceQuiz({ items, label, lang = "es" }: { items: QuizItem[]; label?: string; lang?: "es" | "en" }) {
  const t = copy[lang];
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
              <div className={q.options} role="group" aria-label={label ?? t.label}>
                {item.options.map((option, o) => (
                  <button
                    key={option} type="button" disabled={done}
                    data-mark={done ? (o === item.answer ? "right" : o === choice ? "wrong" : undefined) : undefined}
                    onClick={() => setPicked((prev) => ({ ...prev, [i]: o }))}
                  >{option}</button>
                ))}
              </div>
              {done ? (
                <p className={q.feedback} role="status">{choice === item.answer ? t.right : t.wrong(item.options[choice])}{item.why}</p>
              ) : (
                <details className={q.solution}><summary>{t.solution}</summary>{correct}. {item.why}</details>
              )}
            </li>
          );
        })}
      </ol>
      <p className={q.score} aria-live="polite">
        {answered ? `${t.score(right, answered)}${answered === items.length ? "." : t.left(items.length - answered)}` : t.start(items.length)}
        {answered ? <button type="button" onClick={() => setPicked({})}>{t.reset}</button> : null}
      </p>
    </div>
  );
}
