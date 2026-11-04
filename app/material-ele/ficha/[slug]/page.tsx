import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../../growth/components";
import { faqPageSchema, webPageSchema } from "../../../growth/schema";
import { EleBuyBand, EleTopbar, eleMetadata } from "../../components";
import { MATERIAL_ELE_PATH } from "../../data";
import { lessonCards } from "../../../growth/lessons";
import { FICHAS_PATH, fichaBySlug, fichaPages } from "../../fichas";
import { fichaContent } from "../../ficha-content";
import { Bold } from "../../ficha-components";
import PrintButton from "../../PrintButton";
import ShareSnippet from "../../ShareSnippet";
import styles from "../../../growth/growth.module.css";
import grammar from "../../../growth/grammar.module.css";
import print from "../../print.module.css";
import sheet from "../../ficha.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return fichaPages.map((page) => ({ slug: page.slug })); }
export async function generateMetadata({ params }: Props) {
  const page = fichaBySlug.get((await params).slug);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function FichaPage({ params }: Props) {
  const page = fichaBySlug.get((await params).slug);
  const content = page ? await fichaContent(page.id, page.sample) : undefined;
  if (!page || !content) notFound();
  const siblings = fichaPages.filter((other) => other.level === page.level && other.slug !== page.slug).slice(0, 12);
  const lessonHref = lessonCards([page.id])[0]?.href ?? page.lessonPath;
  const faq = [
    { question: "¿La ficha es gratis?", answer: "Sí. Se abre sin registro, se imprime o se guarda en PDF con el botón de la página y se puede proyectar en pantalla compartida." },
    page.sample
      ? { question: "¿De dónde salen los ejercicios?", answer: `Son una muestra de la clase interactiva «${page.name}» de SpanishCue. La clase completa, con toda la práctica, audio, conversación guiada y escritura con corrección, está en la suscripción.` }
      : { question: "¿De dónde salen los ejercicios?", answer: `De la clase interactiva «${page.name}» de SpanishCue, que trae además audio, conversación guiada y escritura con corrección. La clase completa también es gratis.` },
    { question: "¿Dónde están las soluciones?", answer: "Al final de la ficha, numeradas igual que los ejercicios y con una explicación corta de cada respuesta." },
  ];
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: page.path, name: page.title, description: page.description, inLanguage: "es", educationalLevel: page.level, about: ["ficha ELE", page.name, page.level] })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Fichas de gramática", href: FICHAS_PATH }, { name: page.h1, href: page.path }]} />
          <p className={print.printOnly}><strong>Ficha de SpanishCue · {page.level}</strong><br />Clase interactiva: spanishcue.com{page.lessonPath}</p>
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{page.sample ? "Ficha ELE de muestra" : "Ficha ELE de gramática"} · {page.level}</p>
            <h1 className={styles.title}>{page.h1}</h1>
            <p className={styles.lead}>{content.subtitle}</p>
            <div className={`${styles.heroActions} ${print.noPrint}`}>
              <PrintButton />
              <Link className={styles.secondaryButton} href={lessonHref}>{page.sample ? "Ver la clase completa" : "Abrir la clase interactiva gratis"}</Link>
            </div>
          </section>

          <Section id="teoria" title="Entender">
            {content.theory.map((concept) => (
              <article className={grammar.activity} key={concept.label}>
                <h3>{concept.label}</h3>
                {concept.formula.map((line) => <p className={grammar.prompt} key={line}><Bold text={line} /></p>)}
                <p><Bold text={concept.meaning} /></p>
                <ul>{concept.examples.map((example) => <li key={example}><Bold text={example} /></li>)}</ul>
              </article>
            ))}
            {content.tables.map((table, index) => (
              <div className={sheet.tableWrap} key={index}><table className={sheet.table}>
                {table.title ? <caption><Bold text={table.title} /></caption> : null}
                <thead><tr>{table.head.map((cell) => <th key={cell}><Bold text={cell} /></th>)}</tr></thead>
                <tbody>{table.rows.map((row, r) => <tr key={r}>{row.map((cell, c) => <td key={c}><Bold text={cell} /></td>)}</tr>)}</tbody>
              </table></div>
            ))}
          </Section>

          {content.mistakes.length ? (
            <Section id="errores" title="Errores típicos">
              <ul className={sheet.mistakes}>{content.mistakes.map((mistake) => <li key={mistake.wrong}><s>{mistake.wrong}</s> → <strong>{mistake.right}</strong>. <Bold text={mistake.why} /></li>)}</ul>
            </Section>
          ) : null}

          <Section id="ejercicios" title="Practicar" intro="Contesta primero sin mirar las soluciones del final.">
            <ol className={sheet.items}>
              {content.exercises.map((item, index) => (
                <li key={index}>
                  {item.kind === "fix" ? <em>¿Está bien? Si no, corrígela: </em> : null}
                  {item.context ? <em><Bold text={item.context} /> </em> : null}
                  <Bold text={item.prompt} />
                  {item.options ? <ul className={sheet.options}>{item.options.map((option) => <li key={option}>☐ <Bold text={option} /></li>)}</ul> : <p className={sheet.line} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </Section>

          {page.sample ? (
            <div className={print.noPrint}>
              <Section id="clase-completa" title="El resto está en la clase completa" intro="Esta ficha es una muestra. La clase interactiva trae toda la práctica, el audio, la conversación guiada y la escritura con corrección, lista para compartir en pantalla.">
                <Link className={styles.primaryButton} href={lessonHref}>Ver la clase completa</Link>
              </Section>
            </div>
          ) : null}

          {content.writing || content.talk.length ? (
            <Section id="usar" title="Usar">
              {content.writing ? (
                <article className={grammar.activity}>
                  <h3>Escribir: {content.writing.title}</h3>
                  <p><Bold text={content.writing.situation} /></p>
                  <ul>{content.writing.task.map((task) => <li key={task}><Bold text={task} /></li>)}</ul>
                </article>
              ) : null}
              {content.talk.length ? (
                <article className={grammar.activity}>
                  <h3>Conversar</h3>
                  <ol className={sheet.items}>{content.talk.map((question) => <li key={question}><Bold text={question} /></li>)}</ol>
                </article>
              ) : null}
            </Section>
          ) : null}

          <Section id="soluciones" title="Soluciones">
            <ol className={sheet.answers}>{content.exercises.map((item, index) => <li key={index}><strong><Bold text={item.answer} /></strong>{item.why ? <> <Bold text={item.why} /></> : null}</li>)}</ol>
          </Section>

          {siblings.length ? (
            <div className={print.noPrint}>
              <Section title={`Más fichas de ${page.level}`}>
                <div className={styles.cardGrid}>{siblings.map((sibling) => <Link className={styles.levelCard} key={sibling.path} href={sibling.path}><em>Ficha {sibling.level}</em><b>{sibling.name}</b></Link>)}</div>
                <p><Link href={FICHAS_PATH}>Todas las fichas de gramática</Link></p>
              </Section>
            </div>
          ) : null}
          <div className={print.noPrint}><Section title="Compartir"><ShareSnippet path={page.path} title={page.h1} description={page.description} /></Section></div>
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
          <div className={print.noPrint}><EleBuyBand /></div>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
