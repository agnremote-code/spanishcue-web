import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, GrowthFooter, Section } from "../../../growth/components";
import { EleTopbar, eleMetadata } from "../../components";
import { MATERIAL_ELE_PATH } from "../../data";
import { fichaContent } from "../../ficha-content";
import { FICHAS_GRATIS_LEVELS, fichaGratisBySlug, fichasGratis, packLevelBySlug, packPath, packSlug } from "../../fichas-gratis";
import PrintButton from "../../PrintButton";
import { FichaSheet, FreeBadge } from "../../fichas-gratis/free-components";
import { FICHAS_PROFES_PATH, SoftCta, profesPackPath, profesPath } from "../twin";
import styles from "../../../growth/growth.module.css";
import print from "../../print.module.css";
import free from "../../fichas-gratis/fichas-gratis.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return [...fichasGratis.map((page) => ({ slug: page.slug })), ...FICHAS_GRATIS_LEVELS.map((level) => ({ slug: packSlug(level) }))];
}

const packTitle = (level: string) => `Pack de fichas ELE ${level} completas y gratis (PDF)`;

// Canonical = the same page in the clean /material-ele/fichas-gratis section.
export async function generateMetadata({ params }: Props) {
  const slug = (await params).slug;
  const level = packLevelBySlug.get(slug);
  if (level) return eleMetadata(packPath(level), packTitle(level), `Las fichas ELE ${level} completas y gratis en un solo PDF: teoría, errores típicos, ejercicios y soluciones. Sin registro.`);
  const page = fichaGratisBySlug.get(slug);
  return page ? eleMetadata(page.freePath, page.freeTitle, page.freeDescription) : {};
}

const crumbs = (name: string, href: string) => <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Fichas completas para profes", href: FICHAS_PROFES_PATH }, { name, href }]} />;
const printHeader = (level: string) => <p className={print.printOnly}><strong>Ficha ELE {level} · SpanishCue</strong><br />spanishcue.com{FICHAS_PROFES_PATH}</p>;

export default async function FichaParaProfesPage({ params }: Props) {
  const slug = (await params).slug;
  const level = packLevelBySlug.get(slug);
  if (level) {
    const pages = fichasGratis.filter((page) => page.level === level);
    const contents = await Promise.all(pages.map((page) => fichaContent(page.id, false)));
    return (
      <>
        <main className={styles.page} lang="es">
          <div className={styles.shell}>
            <EleTopbar current={MATERIAL_ELE_PATH} promo={false} />
            {crumbs(`Pack ${level}`, profesPackPath(level))}
            <section className={styles.hero}>
              <p className={styles.eyebrow}><FreeBadge /> Pack {level}</p>
              <h1 className={styles.title}>Todas las fichas ELE {level} completas y gratis</h1>
              <p className={styles.lead}>{pages.length} fichas completas en un solo PDF, con teoría, ejercicios y soluciones.</p>
              <div className={`${styles.heroActions} ${print.noPrint}`}><PrintButton label={`Descargar el pack ${level} completo en PDF`} /></div>
            </section>
            {pages.map((page, index) => contents[index] ? (
              <article className={free.fichaBreak} id={page.slug} key={page.slug}>
                {printHeader(level)}
                <h2>{page.name}</h2>
                <p className={styles.lead}>{contents[index]!.subtitle}</p>
                <FichaSheet content={contents[index]!} prefix={`${page.slug}-`} headingLevel={3} />
              </article>
            ) : null)}
            <SoftCta />
          </div>
        </main>
        <GrowthFooter />
      </>
    );
  }
  const page = fichaGratisBySlug.get(slug);
  const content = page ? await fichaContent(page.id, false) : undefined;
  if (!page || !content) notFound();
  const siblings = fichasGratis.filter((other) => other.level === page.level && other.slug !== page.slug);
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <EleTopbar current={MATERIAL_ELE_PATH} promo={false} />
          {crumbs(page.name, profesPath(page))}
          {printHeader(page.level)}
          <section className={styles.hero}>
            <p className={styles.eyebrow}><FreeBadge /> Ficha ELE {page.level}</p>
            <h1 className={styles.title}>{page.freeH1}</h1>
            <p className={styles.lead}>{content.subtitle}</p>
            <div className={`${styles.heroActions} ${print.noPrint}`}>
              <PrintButton label="Descargar ficha completa en PDF" />
              <Link className={styles.secondaryButton} href={profesPackPath(page.level)}>Pack {page.level} completo (PDF)</Link>
            </div>
          </section>
          <FichaSheet content={content} />
          <SoftCta />
          <div className={print.noPrint}>
            <Section title={`Más fichas ${page.level} completas y gratis`}>
              <div className={styles.cardGrid}>{siblings.map((sibling) => <Link className={styles.levelCard} key={sibling.slug} href={profesPath(sibling)}><em><FreeBadge /> {sibling.level}</em><b>{sibling.name}</b></Link>)}</div>
              <p><Link href={FICHAS_PROFES_PATH}>Todas las fichas completas para profes (A1–C2)</Link></p>
            </Section>
          </div>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
