import Link from "next/link";
import q from "../mini-apps/quiz.module.css";
import { pasadoPath } from "./data";
import type { Marcador } from "./marcadores";

export function MarcadorCards({ items }: { items: Marcador[] }) {
  return (
    <ul className={q.cards}>
      {items.map((m) => (
        <li key={m.slug}><Link href={pasadoPath(m.slug)}><strong>{m.marker}</strong><span>{m.level} · {m.items.length} frases</span></Link></li>
      ))}
    </ul>
  );
}

export const PASADO_GUIDES = [
  { href: "/material-ele/indefinido-e-imperfecto", label: "Actividades de indefinido e imperfecto" },
  { href: "/conjugacion/irregulares/indefinido", label: "Verbos irregulares en indefinido" },
  { href: "/conjugacion/irregulares/imperfecto", label: "Verbos irregulares en imperfecto" },
  { href: "/indicativo-o-subjuntivo", label: "¿Indicativo o subjuntivo? Ejercicios por expresión" },
];
