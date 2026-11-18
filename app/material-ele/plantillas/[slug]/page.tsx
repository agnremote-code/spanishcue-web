import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../../growth/components";
import { faqPageSchema, webPageSchema } from "../../../growth/schema";
import { EleBuyBand, ElePageDates, EleTopbar, eleMetadata } from "../../components";
import { MATERIAL_ELE_PATH } from "../../data";
import { pageDates } from "../../indice";
import { PLANTILLAS_PATH, plantillaBySlug, plantillaFiles, plantillas } from "../../plantillas";
import ShareSnippet from "../../ShareSnippet";
import styles from "../../../growth/growth.module.css";
import own from "../plantillas.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return plantillas.map((page) => ({ slug: page.slug })); }
export async function generateMetadata({ params }: Props) {
  const page = plantillaBySlug.get((await params).slug);
  return page ? eleMetadata(page.path, page.title, page.description, plantillaFiles(page.slug).preview) : {};
}

export default async function PlantillaPage({ params }: Props) {
  const page = plantillaBySlug.get((await params).slug);
  if (!page) notFound();
  const files = plantillaFiles(page.slug);
  const dates = pageDates(page.path);
  const faq = [
    ...page.faq,
    { question: "¿Es gratis? ¿Hay que registrarse?", answer: "Es gratis y se descarga sin registro. Puedes imprimirla y usarla con tus alumnos las veces que quieras; solo pedimos no venderla ni quitarle el pie de SpanishCue." },
    { question: "¿Qué versión descargo, A4 o carta?", answer: "A4 si imprimes en Europa o en la mayor parte de América Latina; carta si imprimes en Estados Unidos, México, Colombia u otros países que usan ese tamaño. El contenido es el mismo." },
  ];
  const others = plantillas.filter((other) => other.slug !== page.slug && other.kind === page.kind).concat(plantillas.filter((other) => other.slug !== page.slug && other.kind !== page.kind)).slice(0, 6);
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: page.path, name: page.title, description: page.description, inLanguage: "es", about: ["plantilla para profesores de español", page.name], image: files.preview, dates })} />
          <JsonLd data={faqPageSchema(faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: "Plantillas", href: PLANTILLAS_PATH }, { name: page.name, href: page.path }]} />
          <div className={own.layout}>
            <section className={styles.hero}>
              <p className={styles.eyebrow}>Plantilla gratis · {page.kind}</p>
              <h1 className={styles.title}>{page.h1}</h1>
              <p className={styles.lead}>{page.intro}</p>
              <ul className={own.facts}>
                <li><b>Formato:</b> PDF, {page.sheets === 1 ? "una hoja" : `${page.sheets} hojas`}, {page.landscape ? "horizontal" : "vertical"}</li>
                <li><b>Tamaños:</b> A4 y carta</li>
                <li><b>Precio:</b> gratis, sin registro</li>
              </ul>
              <div className={own.downloads}>
                <a className={styles.primaryButton} href={files.a4} download>Descargar PDF en A4</a>
                <a className={styles.secondaryButton} href={files.letter} download>Descargar PDF en carta</a>
              </div>
              <ElePageDates dates={dates} />
            </section>
            <figure className={own.preview}>
              <a href={files.a4}><img src={files.preview} alt={`Vista previa de la plantilla: ${page.h1}`} width={page.landscape ? 1685 : 1191} height={page.landscape ? 1191 : 1685} /></a>
              <figcaption>Vista previa de la primera hoja. El PDF se imprime a tamaño completo.</figcaption>
            </figure>
          </div>

          <Section id="incluye" title="Qué incluye la plantilla">
            <ul className={own.list}>{page.includes.map((item) => <li key={item}>{item}</li>)}</ul>
          </Section>
          <Section id="como-usarla" title="Cómo usarla en clase">
            <ol className={own.list}>{page.steps.map((step) => <li key={step}>{step}</li>)}</ol>
            <p className={own.tip}><strong>Consejo.</strong> {page.tip}</p>
          </Section>
          <Section title="Material que va bien con esta plantilla">
            <div className={styles.cardGrid}>{page.related.map((link) => <Link className={styles.levelCard} key={link.href} href={link.href}><em>Material ELE</em><b>{link.label}</b></Link>)}</div>
          </Section>
          <Section title="Más plantillas para profesores">
            <div className={styles.cardGrid}>{others.map((other) => <Link className={styles.levelCard} key={other.path} href={other.path}><em>{other.kind}</em><b>{other.name}</b></Link>)}</div>
            <p><Link href={PLANTILLAS_PATH}>Todas las plantillas para profesores de español</Link></p>
          </Section>
          <Section title="Compartir"><ShareSnippet path={page.path} title={page.h1} description={page.description} /></Section>
          <Section title="Preguntas frecuentes"><Faq items={faq} /></Section>
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
