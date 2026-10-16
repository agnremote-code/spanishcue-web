import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { isFreeLesson, signedInFromHeaders } from "../access-policy";
import AudienceSchema from "../audience/AudienceSchema";
import AudienceTopbar from "../audience/AudienceTopbar";
import TrackedLink from "../audience/TrackedLink";
import { STUDENT_LANDING_PATH, TEACHER_LANDING_PATH } from "../audience/audiences";
import "../audience/audience.css";
import { catalogLessons } from "../conversation-families/catalog";
import { localeFromHeaders, type Locale } from "../i18n/messages";
import { SpanishCueFooter, SpanishCueHero } from "../SpanishCueBrand";
import { canonicalUrl } from "../seo";
import "../top-area.css";

const meta: Record<Locale, { title: string; description: string; kicker: string }> = {
  es: {
    title: "Clases interactivas para profesores de español | SPANISHCUE",
    description: "Clases interactivas de español listas para enseñar, de A1 a C2: gramática, conversación, escucha y fonética en pantalla. Prueba una clase gratis, sin tarjeta.",
    kicker: "Clases interactivas para profesores de español",
  },
  en: {
    title: "Ready-to-Teach Spanish Lesson Materials | SPANISHCUE",
    description: "Interactive Spanish lessons ready to teach, A1 to C2: grammar, conversation, listening and pronunciation on screen. Try a free lesson, no card.",
    kicker: "Interactive Spanish lessons for teachers",
  },
};

const heroImage = { url: "https://spanishcue.com/brand/spanishcue-hero-online.webp", width: 1672, height: 941 };

export async function generateMetadata(): Promise<Metadata> {
  const locale = localeFromHeaders(await headers());
  const copy = meta[locale];
  const canonical = canonicalUrl(TEACHER_LANDING_PATH);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical },
    openGraph: { title: copy.title, description: copy.description, url: canonical, type: "website", siteName: "SPANISHCUE", images: [{ ...heroImage, alt: copy.kicker }] },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: [heroImage.url] },
    robots: { index: true, follow: true },
  };
}

/** Free sample lessons (the access ledger decides; the test checks they stay free). */
const freeSamples = [
  { id: 40, href: "/la-fabrica-de-los-nombres", image: "/lp/fabrica.webp", title: "La Fábrica de los Nombres", level: "A1", es: "Gramática", en: "Grammar" },
  { id: 36, href: "/estados-unidos-a2-b1", image: "/lp/usa-map.webp", title: "Estados Unidos", level: "A2–B1", es: "Conversación", en: "Conversation" },
  { id: 105, href: "/el-hotel-de-lo-imposible", image: "/lp/hotel.webp", title: "El hotel de lo imposible", level: "A2", es: "Escucha", en: "Listening" },
  { id: 28, href: "/latinoamerica-al-oido", image: "/lp/latam.webp", title: "Latinoamérica al oído", level: "A2", es: "Escucha", en: "Listening" },
].filter((lesson) => isFreeLesson(lesson.id));

const copy = {
  es: {
    benefitsKicker: "Para tu semana de clases",
    benefitsTitle: "Menos preparación. Más clase.",
    benefits: [
      ["Ahorra tiempo preparando clases", "Elige por nivel y tema, abre la clase y enseña. Sin armar diapositivas cada semana."],
      ["Materiales visuales listos para enseñar", "Explicación, práctica y cierre en pantalla, pensados para compartir en tu clase online."],
      ["Experiencias más inmersivas", "Ciudades en 3D, escuchas con voces de distintos países y mundos de gramática que recorres con tu alumno."],
      ["Conversaciones reales", "Cada clase termina en producción oral: preguntas, situaciones y decisiones que hacen hablar."],
      ["Prueba antes de comprar", "Abre una clase real gratis, sin tarjeta, y decide después."],
    ],
    freeKicker: "Clases gratis",
    freeTitle: "Prueba una clase completa con tu próximo alumno.",
    freeCopy: "Son clases reales de la biblioteca, no demos recortadas.",
    open: "Abrir la clase",
    stepsTitle: "Así funciona",
    steps: [["Elige", "por tema y nivel"], ["Abre", "todo listo en pantalla"], ["Enseña", "con conversación real"]],
    closeTitle: "Tu próxima clase ya está lista.",
    closeCopy: (count: number) => `${count} clases visuales de A1 a C2 en una sola biblioteca.`,
    tryFree: "PROBAR UNA CLASE GRATIS",
    explore: "EXPLORAR LA BIBLIOTECA",
    plans: "Ver planes y precios",
    student: "¿Quieres aprender español? Mira la experiencia para estudiantes",
  },
  en: {
    benefitsKicker: "For your teaching week",
    benefitsTitle: "Less prep. More teaching.",
    benefits: [
      ["Save time on lesson prep", "Pick by level and topic, open the lesson and teach. No slide building every week."],
      ["Visual materials, ready to teach", "Explanation, practice and wrap-up on screen, made to share in your online lessons."],
      ["More immersive lessons", "3D cities, listening with voices from different countries and grammar worlds you explore with your student."],
      ["Real conversations", "Every lesson ends in speaking: questions, situations and choices that get students talking."],
      ["Try before you buy", "Open a real lesson for free, no card, and decide later."],
    ],
    freeKicker: "Free lessons",
    freeTitle: "Try a full lesson with your next student.",
    freeCopy: "These are real lessons from the library, not cut-down demos.",
    open: "Open the lesson",
    stepsTitle: "How it works",
    steps: [["Choose", "by topic and level"], ["Open", "everything ready on screen"], ["Teach", "with real conversation"]],
    closeTitle: "Your next lesson is ready.",
    closeCopy: (count: number) => `${count} visual lessons from A1 to C2 in one library.`,
    tryFree: "TRY A FREE LESSON",
    explore: "EXPLORE THE LIBRARY",
    plans: "See plans and pricing",
    student: "Want to learn Spanish? See the student experience",
  },
} as const;

export default async function Page() {
  const h = await headers();
  const locale = localeFromHeaders(h);
  const signedIn = signedInFromHeaders(h);
  const t = copy[locale];
  const lessonCount = catalogLessons.filter((lesson) => !lesson.path?.startsWith("http")).length;
  return (
    <main className="main-content aud-page aud-teacher">
      <AudienceSchema path={TEACHER_LANDING_PATH} name={meta[locale].title} description={meta[locale].description} audience="teacher" language={locale} />
      <AudienceTopbar
        active="teacher"
        signedIn={signedIn}
        cta={<TrackedLink className="topbar-primary-cta" href="#free-lessons" event="teacher_demo_started" placement="header">{t.tryFree}<span aria-hidden="true">→</span></TrackedLink>}
      />
      <SpanishCueHero kicker={meta[locale].kicker} kickerInHeading />

      <section className="aud-section aud-benefits" aria-labelledby="aud-benefits-title">
        <p className="aud-eyebrow">{t.benefitsKicker}</p>
        <h2 id="aud-benefits-title">{t.benefitsTitle}</h2>
        <ol className="aud-benefit-list">
          {t.benefits.map(([title, body], index) => (
            <li key={title}>
              <span className="aud-benefit-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{body}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="aud-section aud-free" id="free-lessons" aria-labelledby="aud-free-title">
        <div className="aud-section-head">
          <p className="aud-eyebrow">{t.freeKicker}</p>
          <h2 id="aud-free-title">{t.freeTitle}</h2>
          <p>{t.freeCopy}</p>
        </div>
        <div className="aud-card-grid">
          {freeSamples.map((lesson) => (
            <TrackedLink key={lesson.id} className="aud-card" href={lesson.href} event="teacher_demo_started" placement="free_lessons" lessonId={lesson.id}>
              <img src={lesson.image} alt="" width="640" height="400" loading="lazy" decoding="async" />
              <span className="aud-card-meta">{lesson[locale]} · {lesson.level}</span>
              <b>{lesson.title}</b>
              <span className="aud-card-action">{t.open} <i aria-hidden="true">→</i></span>
            </TrackedLink>
          ))}
        </div>
      </section>

      <section className="aud-section aud-steps" aria-labelledby="aud-steps-title">
        <h2 id="aud-steps-title">{t.stepsTitle}</h2>
        <ol>
          {t.steps.map(([title, body], index) => (
            <li key={title}><span aria-hidden="true">{index + 1}</span><b>{title}</b><em>{body}</em></li>
          ))}
        </ol>
      </section>

      <section className="aud-close" aria-labelledby="aud-close-title">
        <h2 id="aud-close-title">{t.closeTitle}</h2>
        <p>{t.closeCopy(lessonCount)}</p>
        <div className="aud-close-actions">
          <TrackedLink className="aud-primary" href="#free-lessons" event="teacher_demo_started" placement="close">{t.tryFree}</TrackedLink>
          <Link className="aud-secondary" href="/#library-results">{t.explore}</Link>
        </div>
        <a className="aud-text-link" href="/pricing">{t.plans} →</a>
      </section>

      <p className="aud-crosslink"><a href={STUDENT_LANDING_PATH}>{t.student} →</a></p>
      <SpanishCueFooter />
    </main>
  );
}
