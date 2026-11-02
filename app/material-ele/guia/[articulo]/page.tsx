import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd } from "../../../growth/components";
import { faqPageSchema, webPageSchema } from "../../../growth/schema";
import { EleBuyBand, EleLessonGrid, ElePageDates, ElePreviewVideo, EleTopbar, EleTopicCards, PRICE_LABEL, PRICING_PATH, eleLessonCards, eleMetadata, elePreviewLesson, pageImage } from "../../components";
import { GuiaBlocks } from "../../guia-components";
import { guiaBySlug, guiaPages } from "../../guias";
import { pageDates } from "../../indice";
import { MATERIAL_ELE_PATH } from "../../data";
import styles from "../../../growth/growth.module.css";
import PrintButton from "../../PrintButton";
import print from "../../print.module.css";

type Props = { params: Promise<{ articulo: string }> };

export function generateStaticParams() {
  return guiaPages.map((page) => ({ articulo: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { articulo } = await params;
  const page = guiaBySlug.get(articulo);
  return page ? { ...eleMetadata(page.path, page.title, page.description, pageImage(page.lessonIds)), keywords: page.keywords } : {};
}

export default async function GuiaPage({ params }: Props) {
  const { articulo } = await params;
  const page = guiaBySlug.get(articulo);
  if (!page) notFound();
  const lessons = eleLessonCards(page.lessonIds);
  const freeLesson = lessons.find((lesson) => lesson.free);
  const dates = pageDates(page.path);
  const preview = elePreviewLesson(page.lessonIds);
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: page.path, name: page.title, description: page.description, about: page.keywords, inLanguage: "es", image: pageImage(page.lessonIds), dates })} />
          <JsonLd data={faqPageSchema(page.faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: page.h1, href: page.path }]} />
          <p className={print.printOnly}>
            <strong>Guía de SpanishCue · {page.h1}</strong><br />
            Más actividades y clases interactivas: spanishcue.com{page.path}
          </p>
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{page.kicker}</p>
            <h1 className={styles.title}>{page.h1}</h1>
            <p className={styles.lead}>{page.intro}</p>
            <div className={`${styles.heroActions} ${print.noPrint}`}>
              <Link className={styles.primaryButton} href={MATERIAL_ELE_PATH}>Ver Material ELE</Link>
              <PrintButton />
              {freeLesson ? <Link className={styles.secondaryButton} href={freeLesson.href}>Clase gratis: {freeLesson.title}</Link> : null}
            </div>
            <ElePageDates dates={dates} />
          </section>
          {preview ? <div className={print.noPrint}><ElePreviewVideo lesson={preview} pathname={page.path} /></div> : null}

          {page.sections.map((section) => (
            <article className={styles.section} id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <div className={styles.prose}>
                <GuiaBlocks blocks={section.blocks} />
                {section.subsections?.map((sub) => (
                  <section key={sub.title}>
                    <h3>{sub.title}</h3>
                    <GuiaBlocks blocks={sub.blocks} />
                  </section>
                ))}
              </div>
            </article>
          ))}

          <div className={print.noPrint}>
            <article className={styles.section} id="clases" aria-labelledby="clases-title">
              <h2 id="clases-title">Clases que se citan en esta guía</h2>
              <p className={styles.sectionIntro}>Las clases GRATIS se abren ya. Las PRO están incluidas en la suscripción de {PRICE_LABEL}.</p>
              <EleLessonGrid lessons={lessons} />
              <p><Link className={styles.textLink} href={PRICING_PATH}>Desbloquear todas las clases →</Link></p>
            </article>
          </div>

          <article className={styles.section} id="faq" aria-labelledby="faq-title">
            <h2 id="faq-title">Preguntas frecuentes</h2>
            <Faq items={page.faq} />
          </article>

          <div className={print.noPrint}>
            <article className={styles.section} aria-label="Sigue con">
              <h2>Sigue con</h2>
              <EleTopicCards slugs={page.related} />
            </article>
            <EleBuyBand />
          </div>
          <p className={print.printOnly}>Guía gratuita de SpanishCue. Clases interactivas de A1 a C2 para compartir en pantalla: spanishcue.com/material-ele</p>
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
