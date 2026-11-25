import Link from "next/link";
import q from "../mini-apps/quiz.module.css";
import { prepVerbPath } from "./data";
import type { VerboPrep } from "./verbos";

export function VerbCards({ verbs }: { verbs: VerboPrep[] }) {
  return (
    <ul className={q.cards}>
      {verbs.map((e) => (
        <li key={`${e.v}-${e.p}`}>
          <Link href={prepVerbPath(e)}><strong>{e.v} {e.p}</strong><span>{e.meaning}</span></Link>
        </li>
      ))}
    </ul>
  );
}

export const PREP_GUIDES = [
  { href: "/material-ele/preposiciones", label: "Material para enseñar las preposiciones" },
  { href: "/conjugacion", label: "Conjugación de más de 1.200 verbos" },
  { href: "/indicativo-o-subjuntivo", label: "¿Indicativo o subjuntivo? Ejercicios por expresión" },
];
