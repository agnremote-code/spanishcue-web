import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq, JsonLd, Section } from "../../../growth/components";
import { faqPageSchema, webPageSchema, collectionPageSchema } from "../../../growth/schema";
import { eleMetadata } from "../../components";
import { fichaContent } from "../../ficha-content";
import { FICHAS_GRATIS_LEVELS, FICHAS_GRATIS_PATH, fichaGratisBySlug, fichasGratis, packLevelBySlug, packPath, packSlug } from "../../fichas-gratis";
import PrintButton from "../../PrintButton";
import { FichaSheet, FreeBadge, FreeFooter, FreeHeader } from "../free-components";
import styles from "../../../growth/growth.module.css";
import print from "../../print.module.css";
import free from "../fichas-gratis.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return [...fichasGratis.map((page) => ({ slug: page.slug })), ...FICHAS_GRATIS_LEVELS.map((level) => ({ slug: packSlug(level) }))];
}

const packTitle = (level: string) => `Pack de fichas ELE ${level} completas y gratis (PDF)`;
const packDescription = (level: string, count: number) => `Las ${count} fichas ELE ${level} completas y gratis en un solo PDF: teoría, errores típicos, ejercicios y soluciones. Sin registro y sin pagos.`;

export async function generateMetadata({ params }: Props) {
  const slug = (await params).slug;
  const level = packLevelBySlug.get(slug);
  if (level) return eleMetadata(packPath(level), packTitle(level), packDescription(level, fichasGratis.filter((page) => page.level === level).length));
  const page = fichaGratisBySlug.get(slug);
  return page ? eleMetadata(page.freePath, page.freeTitle, page.freeDescription) : {};
}

const printHeader = (level: string) => (
  <p className={print.printOnly}><strong>Ficha ELE {level} · completa y gratis</strong><br />spanishcue.com{FICHAS_GRATIS_PATH}</p>
);

async function PackPage({ level }: { level: string }) {
  const pages = fichasGratis.filter((page) => page.level === level);
  const contents = await Promise.all(pages.map((page) => fichaContent(page.id, false)));
  const title = packTitle(level);
  const description = packDescription(level, pages.length);
  return (
    <main className={styles.page} lang="es">
      <div className={styles.shell}>
        <JsonLd data={collectionPageSchema({ pathname: packPath(level), name: title, description, inLanguage: "es", about: ["fichas ELE gratis", `fichas ${level}`], items: pages.map((page) => ({ name: page.freeH1, href: page.freePath })) })} />
        <FreeHeader />
        <section className={styles.hero}>
          <p className={styles.eyebrow}><FreeBadge /> Pack {level} · 100 % gratis</p>
          <h1 className={styles.title}>Todas las fichas ELE {level} completas y gratis</h1>
          <p className={styles.lead}>{description}</p>
          <div className={`${styles.heroActions} ${print.noPrint}`}><PrintButton label={`Descargar el pack ${level} completo en PDF`} /></div>
          <nav className={print.noPrint} aria-label={`Fichas del pack ${level}`}>
            <ol>{pages.map((page) => <li key={page.slug}><a href={`#${page.slug}`}>{page.name}</a></li>)}</ol>
          </nav>
        </section>
        {pages.map((page, index) => contents[index] ? (
          <article className={free.fichaBreak} id={page.slug} key={page.slug}>
            {printHeader(level)}
            <h2>{page.name}</h2>
            <p className={styles.lead}>{contents[index]!.subtitle}</p>
            <FichaSheet content={contents[index]!} prefix={`${page.slug}-`} headingLevel={3} />
          </article>
        ) : null)}
        <FreeFooter />
      </div>
    </main>
  );
}

export default async function FichaGratisPage({ params }: Props) {
  const slug = (await params).slug;
  const level = packLevelBySlug.get(slug);
  if (level) return <PackPage level={level} />;
  const page = fichaGratisBySlug.get(slug);
  const content = page ? await fichaContent(page.id, false) : undefined;
  if (!page || !content) notFound();
  const siblings = fichasGratis.filter((other) => other.level === page.level && other.slug !== page.slug);
  const faq = [
    { question: "¿Esta ficha es completa y gratis?", answer: "Sí. La ficha está entera, con teoría, errores típicos, ejercicios, escritura, conversación y soluciones. Se abre sin registro y no se paga nada." },
    { question: "¿Cómo la descargo en PDF?", answer: "Pulsa «Descargar ficha completa en PDF» y elige «Guardar como PDF» en el diálogo de impresión. Las soluciones salen en una página aparte, al final." },
    { question: "¿Puedo compartirla?", answer: "Sí. Puedes imprimirla, proyectarla, dársela a tus alumnos y enlazarla desde tu web o tu blog." },
  ];
  return (
    <main className={styles.page} lang="es">
      <div className={styles.shell}>
        <JsonLd data={webPageSchema({ pathname: page.freePath, name: page.freeTitle, description: page.freeDescription, inLanguage: "es", educationalLevel: page.level, about: ["ficha ELE gratis", page.name, page.level] })} />
        <JsonLd data={faqPageSchema(faq, "es")} />
        <FreeHeader />
        {printHeader(page.level)}
        <section className={styles.hero}>
          <p className={styles.eyebrow}><FreeBadge /> Ficha ELE {page.level} · 100 % gratis</p>
          <h1 className={styles.title}>{page.freeH1}</h1>
          <p className={styles.lead}>{content.subtitle}</p>
          <div className={`${styles.heroActions} ${print.noPrint}`}>
            <PrintButton label="Descargar ficha completa en PDF" />
            <Link className={styles.secondaryButton} href={packPath(page.level)}>Pack {page.level} completo (PDF)</Link>
          </div>
        </section>
        <FichaSheet content={content} />
        <div className={print.noPrint}>
          <Section title={`Más fichas ${page.level} completas y gratis`}>
            <div className={styles.cardGrid}>{siblings.map((sibling) => <Link className={styles.levelCard} key={sibling.freePath} href={sibling.freePath}><em><FreeBadge /> {sibling.level}</em><b>{sibling.name}</b></Link>)}</div>
            <p><Link href={FICHAS_GRATIS_PATH}>Todas las fichas completas y gratis (A1–C2)</Link></p>
          </Section>
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
        </div>
        <FreeFooter />
      </div>
    </main>
  );
}
