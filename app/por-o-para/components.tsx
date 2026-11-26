import Link from "next/link";
import q from "../mini-apps/quiz.module.css";
import { porParaPath } from "./data";
import type { UsoPrep } from "./usos";

export function PorParaCards({ items }: { items: UsoPrep[] }) {
  return (
    <ul className={q.cards}>
      {items.map((u) => <li key={u.slug}><Link href={porParaPath(u.slug)}><strong>{u.name}</strong><span>{u.prep} · {u.level}</span></Link></li>)}
    </ul>
  );
}

export const PORPARA_GUIDES = [
  { href: "/material-ele/por-y-para", label: "Material para enseñar por y para" },
  { href: "/verbos-con-preposicion", label: "Verbos con preposición: soñar con, depender de…" },
  { href: "/ser-o-estar", label: "¿Ser o estar? Usos y ejercicios" },
  { href: "/indicativo-o-subjuntivo/para-que", label: "Para que + subjuntivo" },
];
