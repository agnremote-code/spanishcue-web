import Link from "next/link";
import { Breadcrumbs, GrowthFooter, Section } from "../../growth/components";
import { EleTopbar, eleMetadata } from "../components";
import { MATERIAL_ELE_PATH } from "../data";
import { FICHAS_GRATIS_LEVELS, FICHAS_GRATIS_PATH, fichasGratis, fichasGratisDescription, fichasGratisTitle } from "../fichas-gratis";
import { FreeBadge } from "../fichas-gratis/free-components";
import { FICHAS_PROFES_PATH, SoftCta, profesPackPath, profesPath } from "./twin";
import styles from "../../growth/growth.module.css";
import print from "../print.module.css";
import free from "../fichas-gratis/fichas-gratis.module.css";

export const metadata = eleMetadata(FICHAS_GRATIS_PATH, fichasGratisTitle, fichasGratisDescription);

export default function FichasParaProfesPage() {
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <EleTopbar current={MATERIAL_ELE_PATH} promo={false} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Fichas completas para profes", href: FICHAS_PROFES_PATH }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Gratis · sin registro · A1–C2</p>
            <h1 className={styles.title}>{fichasGratis.length} fichas ELE completas y gratis para profes</h1>
            <p className={styles.lead}>Fichas de gramática enteras: teoría, errores típicos, ejercicios, escritura, conversación y soluciones explicadas. Se descargan completas en PDF, sin cuenta.</p>
            <div className={`${free.packs} ${print.noPrint}`}>
              {FICHAS_GRATIS_LEVELS.map((level) => <Link className={styles.secondaryButton} key={level} href={profesPackPath(level)}>Pack {level} completo (PDF)</Link>)}
            </div>
          </section>
          {FICHAS_GRATIS_LEVELS.map((level) => {
            const pages = fichasGratis.filter((page) => page.level === level);
            return (
              <Section key={level} id={level.toLowerCase()} title={`Fichas ${level} completas y gratis (${pages.length})`}>
                <div className={styles.cardGrid}>
                  {pages.map((page) => (
                    <Link className={`${styles.levelCard} ${free.card}`} key={page.slug} href={profesPath(page)}>
                      <em><FreeBadge /> {page.level}</em>
                      <b>{page.name}</b>
                      <span>Teoría, ejercicios y soluciones · PDF</span>
                    </Link>
                  ))}
                </div>
              </Section>
            );
          })}
          <SoftCta />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
