import Link from "next/link";
import { Section } from "../growth/components";
import styles from "../growth/growth.module.css";
import { FICHAS_PATH, fichasForLessons } from "./fichas";

/** Printable fichas of the classes a page lists. Search Console (2026-11-15)
 *  shows fichas entering at positions 6–10 with no links from the topic pages
 *  that carry the impressions, so each topic and level page names its fichas. */
export function EleFichaLinks({ lessonIds, name }: { lessonIds: readonly number[]; name: string }) {
  const fichas = fichasForLessons(lessonIds);
  if (!fichas.length) return null;
  return (
    <Section id="fichas" title={`Fichas de ${name} para imprimir`} intro="Teoría resumida, ejercicios y soluciones de cada clase, en una página que se imprime o se guarda en PDF sin registro.">
      <div className={styles.cardGrid}>
        {fichas.map((ficha) => <Link className={styles.levelCard} key={ficha.path} href={ficha.path}><em>Ficha {ficha.level}{ficha.sample ? "" : " · completa"}</em><b>{ficha.name}</b><span>PDF con soluciones</span></Link>)}
      </div>
      <p><Link className={styles.textLink} href={FICHAS_PATH}>Ver todas las fichas ELE →</Link></p>
    </Section>
  );
}
