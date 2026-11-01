import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Faq, GrowthFooter, JsonLd, Section } from "../../../growth/components";
import { faqPageSchema, webPageSchema } from "../../../growth/schema";
import { EleBuyBand, EleLessonGrid, EleTopbar, eleLessonCards, eleMetadata, featuredGrammarLesson, EleFeaturedLesson } from "../../components";
import { MATERIAL_ELE_PATH, elePageBySlug } from "../../data";
import { TemaCards, TemaGroupCards, TemaLevelLinks } from "../../tema-components";
import { relatedTemas, temaGroupById, temaPageByPath, temaPages } from "../../temas";
import styles from "../../../growth/growth.module.css";

type Props = { params: Promise<{ slug: string; tema: string }> };

export function generateStaticParams() {
  return temaPages.map((page) => ({ slug: page.group, tema: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug: group, tema } = await params;
  const page = temaPageByPath.get(`${MATERIAL_ELE_PATH}/${group}/${tema}`);
  return page ? eleMetadata(page.path, page.title, page.description) : {};
}

export default async function TemaPageRoute({ params }: Props) {
  const { slug: groupId, tema } = await params;
  const page = temaPageByPath.get(`${MATERIAL_ELE_PATH}/${groupId}/${tema}`);
  if (!page) notFound();
  const group = temaGroupById.get(page.group)!;
  const lessons = eleLessonCards(page.lessonIds);
  const freeLesson = lessons.find((lesson) => lesson.free);
  const featured = page.group === "gramatica" ? featuredGrammarLesson(page.lessonIds) : undefined;
  const guide = page.guide ? elePageBySlug.get(page.guide) : undefined;
  const related = relatedTemas(page);
  const lower = page.name.toLowerCase();
  return (
    <>
      <main className={styles.page} lang="es">
        <div className={styles.shell}>
          <JsonLd data={webPageSchema({ pathname: page.path, name: page.title, description: page.description, about: [page.name, group.label, "ELE", ...page.levels], inLanguage: "es", ...(page.levels.length === 1 ? { educationalLevel: page.levels[0] } : {}) })} />
          <JsonLd data={faqPageSchema(page.faq, "es")} />
          <EleTopbar current={MATERIAL_ELE_PATH} />
          <Breadcrumbs items={[{ name: "SpanishCue", href: "/" }, { name: "Material ELE", href: MATERIAL_ELE_PATH }, { name: group.label, href: group.path }, { name: page.name, href: page.path }]} />
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{group.label} · {page.parent} · {page.levels.join(" · ")}</p>
            <h1 className={styles.title}>{page.h1}</h1>
            <p className={styles.lead}>{page.intro}</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#clases">Ver las clases</Link>
              {freeLesson ? <Link className={styles.secondaryButton} href={freeLesson.href}>Clase gratis: {freeLesson.title}</Link> : <Link className={styles.secondaryButton} href="/demo/noche-abierta">Probar una clase gratis</Link>}
              {guide ? <Link className={styles.secondaryButton} href={guide.path}>Actividades y ejercicio en PDF</Link> : null}
            </div>
          </section>
          {featured ? <EleFeaturedLesson lesson={featured} /> : null}

          <Section id="clases" title={`Clases para enseñar ${lower}`} intro={`${lessons.length === 1 ? "Una clase interactiva" : `${lessons.length} clases interactivas`} para compartir en pantalla, ordenadas de lo más básico a lo más avanzado. Las gratis se abren sin registro.`}>
            <EleLessonGrid lessons={lessons} />
          </Section>

          {page.goals.length ? (
            <Section title={`Qué aprende el alumno con ${lower}`} intro="Objetivos tomados de las propias clases: lo que el alumno puede hacer con el español al terminar.">
              <div className={styles.panel}><ul>{page.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul></div>
            </Section>
          ) : null}

          {page.warmups.length || page.speaking.length ? (
            <Section title="Para empezar y para conversar" intro="Preguntas de calentamiento y de producción oral que estas clases usan. Sirven también sin la pantalla, en cualquier clase sobre el tema.">
              <div className={styles.panel}>
                {page.warmups.length ? <><h3>Para empezar</h3><ul>{page.warmups.map((item) => <li key={item}>{item}</li>)}</ul></> : null}
                {page.speaking.length ? <><h3>Para conversar</h3><ul>{page.speaking.map((item) => <li key={item}>{item}</li>)}</ul></> : null}
              </div>
            </Section>
          ) : null}

          <Section title={`Cómo se trabaja ${lower} en SpanishCue`}>
            <div className={styles.panel}><ol>{group.method.map((step) => <li key={step}>{step}</li>)}</ol></div>
          </Section>

          {guide ? (
            <Section title="Guía con actividades y ejercicio" intro={`Si quieres material para llevar a clase sin pantalla, la guía «${guide.h1}» trae ${guide.activities.length} actividades con pasos y frases modelo${guide.exercise ? ", un ejercicio con soluciones" : ""} y una ficha en PDF.`}>
              <Link className={styles.primaryButton} href={guide.path}>Abrir la guía</Link>
            </Section>
          ) : null}

          <Section title="Preguntas frecuentes"><Faq items={page.faq} /></Section>

          {related.length ? (
            <Section title={`Más temas de ${group.label.toLowerCase()}`}>
              <TemaCards pages={related} />
            </Section>
          ) : null}
          <Section title="Explorar por grupo">
            <TemaGroupCards current={page.group} />
            <TemaLevelLinks />
          </Section>
          <EleBuyBand />
        </div>
      </main>
      <GrowthFooter />
    </>
  );
}
