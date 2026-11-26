import Link from "next/link";
import q from "../mini-apps/quiz.module.css";
import { serPath } from "./data";
import type { Adjetivo, Uso } from "./contenido";

export function UsoCards({ items }: { items: Uso[] }) {
  return (
    <ul className={q.cards}>
      {items.map((u) => <li key={u.slug}><Link href={serPath(u.slug)}><strong>{u.name}</strong><span>{u.verb} · {u.level}</span></Link></li>)}
    </ul>
  );
}

export function AdjCards({ items }: { items: Adjetivo[] }) {
  return (
    <ul className={q.cards}>
      {items.map((a) => <li key={a.slug}><Link href={serPath(a.slug)}><strong>Ser o estar {a.adj}</strong><span>{a.ser} / {a.estar}</span></Link></li>)}
    </ul>
  );
}

export const SER_GUIDES = [
  { href: "/material-ele/ser-y-estar", label: "Material para enseñar ser y estar" },
  { href: "/gramatica/ser-y-estar-con-adjetivos-que-cambian-de-significado", label: "Clase: ser y estar con adjetivos que cambian de significado" },
  { href: "/conjugacion/ser", label: "Conjugación del verbo ser" },
  { href: "/conjugacion/estar", label: "Conjugación del verbo estar" },
  { href: "/indefinido-o-imperfecto", label: "¿Indefinido o imperfecto? Ejercicios por marcador" },
];
