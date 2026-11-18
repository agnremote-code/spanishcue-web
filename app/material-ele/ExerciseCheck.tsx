"use client";

import { useState } from "react";
import ele from "./material-ele.module.css";
import { acceptedAnswers, gradeAnswer, type Grade } from "./exercise-answers";

type Item = { q: string; a: string };

const feedback: Record<Exclude<Grade, "empty">, string> = {
  right: "Correcto.",
  accent: "Casi: revisa las tildes y las mayúsculas.",
  check: "Compara con la solución.",
};

/**
 * A fill-in exercise the student can answer on the page. The server renders every
 * sentence and its answer key (inside <details>), so the page reads the same without
 * JavaScript, in print and for search engines; the inputs and the score are the
 * enhancement. A sentence with no gap stays a plain «open to see the answer» item.
 */
export default function ExerciseCheck({ items }: { items: Item[] }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const gapped = items.filter((item) => item.q.includes("___"));
  const grades = new Map(gapped.map((item) => {
    const accepted = acceptedAnswers(item.q, item.a);
    const perGap = accepted.map((options, gap) => gradeAnswer(values[`${item.q}#${gap}`] ?? "", options));
    const grade: Grade = perGap.every((g) => g === "empty") ? "empty" : perGap.every((g) => g === "right") ? "right" : perGap.every((g) => g === "right" || g === "accent") ? "accent" : "check";
    return [item.q, grade] as const;
  }));
  const right = [...grades.values()].filter((grade) => grade === "right").length;
  const reset = () => { setValues({}); setChecked(false); };

  return (
    <form className={ele.exerciseForm} onSubmit={(event) => { event.preventDefault(); setChecked(true); }}>
      <ol>
        {items.map((item, index) => {
          const parts = item.q.split("___");
          const grade = grades.get(item.q);
          const shown = checked && grade && grade !== "empty";
          return (
            <li key={item.q} data-grade={shown ? grade : undefined}>
              {parts.length > 1 ? (
                <p className={ele.exerciseSentence}>
                  {parts.map((part, gap) => (
                    <span key={gap}>
                      {part}
                      {gap < parts.length - 1 ? (
                        <input
                          type="text" autoComplete="off" autoCapitalize="off" autoCorrect="off" spellCheck={false} lang="es"
                          aria-label={`Frase ${index + 1}, hueco ${gap + 1}`}
                          value={values[`${item.q}#${gap}`] ?? ""}
                          onChange={(event) => { setValues((current) => ({ ...current, [`${item.q}#${gap}`]: event.target.value })); setChecked(false); }}
                        />
                      ) : null}
                    </span>
                  ))}
                </p>
              ) : null}
              {shown ? <p className={ele.exerciseFeedback} role="status">{feedback[grade]} {grade === "right" ? null : <><strong>Solución: </strong>{item.a}</>}</p> : null}
              <details>
                <summary>{parts.length > 1 ? "Ver la solución" : item.q}</summary>
                <p><strong>Solución: </strong>{item.a}</p>
              </details>
            </li>
          );
        })}
      </ol>
      {gapped.length ? (
        <div className={ele.exerciseActions}>
          <button type="submit">Comprobar respuestas</button>
          <button type="button" onClick={reset}>Empezar de nuevo</button>
          {checked ? <p role="status"><strong>{right} de {gapped.length}</strong> correctas.{right === gapped.length ? " ¡Todo bien!" : " Corrige las marcadas y vuelve a comprobar."}</p> : null}
        </div>
      ) : null}
    </form>
  );
}
