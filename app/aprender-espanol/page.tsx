import type { Metadata } from "next";
import { headers } from "next/headers";
import { isFreeLesson, signedInFromHeaders } from "../access-policy";
import AudienceSchema from "../audience/AudienceSchema";
import AudienceTopbar from "../audience/AudienceTopbar";
import TrackedLink from "../audience/TrackedLink";
import { STUDENT_DEMO_PATH, STUDENT_LANDING_PATH, TEACHER_LANDING_PATH } from "../audience/audiences";
import "../audience/audience.css";
import { isFreeAutoestudioModule } from "../autoestudio/access";
import { localeFromHeaders, type Locale } from "../i18n/messages";
import { SpanishCueFooter } from "../SpanishCueBrand";
import { canonicalUrl } from "../seo";
import "../top-area.css";

const meta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Aprender español online con experiencias interactivas | SPANISHCUE",
    description: "Aprende español explorando una ciudad en 3D, practicando situaciones reales, escuchando español en contexto y practicando gramática. Empieza gratis, sin registro.",
  },
  en: {
    title: "Learn Spanish Online Through Immersion | SPANISHCUE",
    description: "Learn Spanish by exploring a 3D city, practising real situations, listening to Spanish in context and practising grammar. Start free, no sign-up.",
  },
};

const ogImage = { url: "https://spanishcue.com/lp/noche-3d.webp", width: 1280, height: 800 };

export async function generateMetadata(): Promise<Metadata> {
  const locale = localeFromHeaders(await headers());
  const copy = meta[locale];
  const canonical = canonicalUrl(STUDENT_LANDING_PATH);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical },
    openGraph: { title: copy.title, description: copy.description, url: canonical, type: "website", siteName: "SPANISHCUE", images: [{ ...ogImage, alt: "Noche abierta" }] },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: [ogImage.url] },
    robots: { index: true, follow: true },
  };
}

const AUTOESTUDIO_FIRST_WEEK = "/autoestudio/a1/semana-1";

/**
 * Only experiences that work without a teacher today. `access` is what the
 * visitor needs: nothing (the public demo), or a free account after the first
 * minutes (free lessons). The test keeps every entry free.
 */
const experiences = [
  { key: "demo", href: STUDENT_DEMO_PATH, image: "/lp/noche-3d.webp", title: "Noche abierta", level: "A1–C2", access: "open" as const, es: ["Ciudad en 3D", "Recorre el centro: diez lugares, una situación distinta en cada uno."], en: ["3D city", "Walk the city centre: ten places, a different situation in each one."] },
  { key: "autoestudio", href: AUTOESTUDIO_FIRST_WEEK, image: "/lp/autoestudio.webp", title: "Autoestudio · A1", level: "A1", access: "open" as const, es: ["Semana 1", "Lectura, escritura, escucha y expresión oral, paso a paso."], en: ["Week 1", "Reading, writing, listening and speaking, step by step."] },
  { key: "hotel", href: "/el-hotel-de-lo-imposible", lessonId: 105, image: "/lp/hotel.webp", title: "El hotel de lo imposible", level: "A2", access: "account" as const, es: ["Escucha", "Diez habitaciones con audios y preguntas de comprensión."], en: ["Listening", "Ten rooms with audio and comprehension questions."] },
  { key: "fabrica", href: "/la-fabrica-de-los-nombres", lessonId: 40, image: "/lp/fabrica.webp", title: "La Fábrica de los Nombres", level: "A1", access: "account" as const, es: ["Gramática", "Sustantivos, género y número en una fábrica 3D, con desafíos que se corrigen solos."], en: ["Grammar", "Nouns, gender and number in a 3D factory, with self-checking challenges."] },
].filter((item) => (item.lessonId ? isFreeLesson(item.lessonId) : item.key !== "autoestudio" || isFreeAutoestudioModule(item.href)));

const copy = {
  es: {
    kicker: "Para estudiantes de español",
    titleStart: "Aprende español",
    titleEmphasis: "viviéndolo,",
    titleEnd: "no memorizándolo.",
    pair: "Learn Spanish by living it, not memorizing it.",
    pairLang: "en",
    lead: "Camina por una ciudad en 3D, resuelve situaciones reales en sus lugares, escucha español en contexto y practica gramática con actividades interactivas.",
    cta: "EXPLORAR UNA EXPERIENCIA GRATIS",
    reassurance: "Gratis · Sin registro · Sin tarjeta",
    see: "Ver qué puedes hacer",
    waysKicker: "Cinco formas de aprender",
    waysTitle: "Aprendes haciendo cosas en español.",
    ways: [
      ["Aprende explorando", "Recorre la ciudad de Noche abierta y entra a sus lugares cuando quieras."],
      ["Practica situaciones reales", "Un café, un taxi, una tienda: decides qué decir y ves qué pasa."],
      ["Escucha español en contexto", "Historias con audio y preguntas de comprensión, con voces de distintos países."],
      ["Interactúa con escenarios inmersivos", "Mundos en 3D que recorres con el teclado, el mouse o la pantalla táctil."],
      ["Avanza con actividades", "Semanas de autoestudio con lectura, escritura, escucha y expresión oral."],
    ],
    startKicker: "Empieza gratis",
    startTitle: "Elige por dónde entrar.",
    open: "Sin registro",
    account: "Gratis con cuenta gratuita",
    go: "Entrar",
    note: "Algunas clases piden una cuenta gratuita para seguir después de los primeros minutos. Nunca pedimos tarjeta para probar.",
    stepsTitle: "Así empiezas",
    steps: [["Entra a la ciudad", "sin registrarte"], ["Elige un lugar", "cada lugar es una situación"], ["Sigue practicando", "con escucha, gramática y autoestudio"]],
    closeTitle: "Tu primera conversación en español empieza aquí.",
    teacher: "¿Enseñas español? Conoce SpanishCue para profesores",
  },
  en: {
    kicker: "For Spanish learners",
    titleStart: "Learn Spanish",
    titleEmphasis: "by living it,",
    titleEnd: "not memorizing it.",
    pair: "Aprende español viviéndolo, no memorizándolo.",
    pairLang: "es",
    lead: "Walk through a 3D city, handle real situations in its places, listen to Spanish in context and practise grammar with interactive activities.",
    cta: "EXPLORE A FREE EXPERIENCE",
    reassurance: "Free · No sign-up · No card",
    see: "See what you can do",
    waysKicker: "Five ways to learn",
    waysTitle: "You learn by doing things in Spanish.",
    ways: [
      ["Learn by exploring", "Walk the Noche abierta city and step into its places whenever you like."],
      ["Practise real situations", "A café, a taxi, a shop: you decide what to say and see what happens."],
      ["Listen to Spanish in context", "Audio stories with comprehension questions, with voices from different countries."],
      ["Interact with immersive scenes", "3D worlds you move through with the keyboard, the mouse or a touch screen."],
      ["Move forward with activities", "Self-study weeks with reading, writing, listening and speaking."],
    ],
    startKicker: "Start free",
    startTitle: "Choose where to begin.",
    open: "No sign-up",
    account: "Free with a free account",
    go: "Start",
    note: "Some lessons ask for a free account to continue after the first minutes. We never ask for a card to try.",
    stepsTitle: "How you start",
    steps: [["Enter the city", "no sign-up"], ["Choose a place", "each place is a situation"], ["Keep practising", "with listening, grammar and self-study"]],
    closeTitle: "Your first conversation in Spanish starts here.",
    teacher: "Teach Spanish? See SpanishCue for teachers",
  },
} as const;

export default async function Page() {
  const h = await headers();
  const locale = localeFromHeaders(h);
  const signedIn = signedInFromHeaders(h);
  const t = copy[locale];
  return (
    <main className="main-content aud-page aud-student">
      <AudienceSchema path={STUDENT_LANDING_PATH} name={meta[locale].title} description={meta[locale].description} audience="student" language={locale} />
      <AudienceTopbar
        active="student"
        signedIn={signedIn}
        cta={<TrackedLink className="topbar-primary-cta aud-student-cta" href={STUDENT_DEMO_PATH} event="student_demo_started" placement="header">{locale === "es" ? "Explorar gratis" : "Explore free"}<span aria-hidden="true">→</span></TrackedLink>}
      />

      <section className="aud-hero" id="main-content" tabIndex={-1} aria-labelledby="aud-hero-title">
        <div className="aud-hero-art" aria-hidden="true">
          <img src="/lp/noche-3d.webp" alt="" width="1280" height="800" fetchPriority="high" />
        </div>
        <div className="aud-hero-copy">
          <p className="aud-hero-kicker">{t.kicker}</p>
          <h1 id="aud-hero-title">
            {t.titleStart} <em>{t.titleEmphasis}</em> {t.titleEnd}
          </h1>
          <p className="aud-hero-pair" lang={t.pairLang}>{t.pair}</p>
          <p className="aud-hero-lead">{t.lead}</p>
          <div className="aud-hero-actions">
            <TrackedLink className="aud-primary aud-primary-student" href={STUDENT_DEMO_PATH} event="student_demo_started" placement="hero_primary">{t.cta}</TrackedLink>
            <a className="aud-hero-secondary" href="#experiencias">{t.see} ↓</a>
          </div>
          <p className="aud-hero-reassurance">{t.reassurance}</p>
        </div>
      </section>

      <section className="aud-section aud-benefits" aria-labelledby="aud-ways-title">
        <p className="aud-eyebrow">{t.waysKicker}</p>
        <h2 id="aud-ways-title">{t.waysTitle}</h2>
        <ol className="aud-benefit-list">
          {t.ways.map(([title, body], index) => (
            <li key={title}>
              <span className="aud-benefit-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{body}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="aud-section aud-free" id="experiencias" aria-labelledby="aud-start-title">
        <div className="aud-section-head">
          <p className="aud-eyebrow">{t.startKicker}</p>
          <h2 id="aud-start-title">{t.startTitle}</h2>
        </div>
        <div className="aud-card-grid">
          {experiences.map((item) => (
            <TrackedLink key={item.key} className="aud-card" href={item.href} event="student_demo_started" placement={`experience_${item.key}`} lessonId={item.lessonId}>
              <img src={item.image} alt="" width="640" height="400" loading="lazy" decoding="async" />
              <span className={`aud-card-badge ${item.access}`}>{item.access === "open" ? t.open : t.account}</span>
              <span className="aud-card-meta">{item[locale][0]} · {item.level}</span>
              <b>{item.title}</b>
              <span className="aud-card-copy">{item[locale][1]}</span>
              <span className="aud-card-action">{t.go} <i aria-hidden="true">→</i></span>
            </TrackedLink>
          ))}
        </div>
        <p className="aud-note">{t.note}</p>
      </section>

      <section className="aud-section aud-steps" aria-labelledby="aud-steps-title">
        <h2 id="aud-steps-title">{t.stepsTitle}</h2>
        <ol>
          {t.steps.map(([title, body], index) => (
            <li key={title}><span aria-hidden="true">{index + 1}</span><b>{title}</b><em>{body}</em></li>
          ))}
        </ol>
      </section>

      <section className="aud-close aud-close-student" aria-labelledby="aud-close-title">
        <h2 id="aud-close-title">{t.closeTitle}</h2>
        <div className="aud-close-actions">
          <TrackedLink className="aud-primary aud-primary-student" href={STUDENT_DEMO_PATH} event="student_demo_started" placement="close">{t.cta}</TrackedLink>
        </div>
        <p className="aud-hero-reassurance">{t.reassurance}</p>
      </section>

      <p className="aud-crosslink"><a href={TEACHER_LANDING_PATH}>{t.teacher} →</a></p>
      <SpanishCueFooter />
    </main>
  );
}
