import Link from "next/link";
import { MATERIAL_ELE_PATH } from "../data";
import { FICHAS_GRATIS_PATH, type FichaGratisPage } from "../fichas-gratis";
import styles from "../../growth/growth.module.css";
import print from "../print.module.css";

/**
 * Social-media twin of /material-ele/fichas-gratis (owner OK 2026-11-19): the same 100 complete
 * worksheets inside the normal SpanishCue navigation, with a soft invitation to the home page.
 * Canonical points to the clean section, so search engines see one page; the clean section stays
 * untouched for link-outreach emails. Not in the sitemap.
 */
export const FICHAS_PROFES_PATH = `${MATERIAL_ELE_PATH}/fichas-para-profes`;
export const profesPath = (page: Pick<FichaGratisPage, "slug">) => `${FICHAS_PROFES_PATH}/${page.slug}`;
export const profesPackPath = (level: string) => `${FICHAS_PROFES_PATH}/pack-${level.toLowerCase()}`;
export const canonicalFor = (twinPath: string) => twinPath.replace(FICHAS_PROFES_PATH, FICHAS_GRATIS_PATH);

export function SoftCta() {
  return (
    <section className={`${styles.section} ${print.noPrint}`} aria-label="Clases interactivas de SpanishCue">
      <h2>¿Te sirvió?</h2>
      <p className={styles.sectionIntro}>Estas fichas salen de las clases interactivas de SpanishCue: teoría animada, audio, práctica con corrección y conversación guiada, listas para compartir en pantalla con tus alumnos.</p>
      <Link className={styles.secondaryButton} href="/">Mira las clases interactivas de SpanishCue</Link>
    </section>
  );
}
