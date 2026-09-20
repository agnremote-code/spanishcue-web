import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { freeLessonIds, isFreeLesson, localLessonPath } from "../access-policy";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import { localeFromHeaders, translateCategory } from "../i18n/messages";
import { lessons } from "../lesson-catalog";
import { MarketingLink } from "../marketing/MarketingSections";
import type { MarketingCta } from "../marketing/cta-state";
import { SpanishCueBrand } from "../SpanishCueBrand";
import type { LandingConfig } from "./config";
import { env } from "cloudflare:workers";
import { billingConfig, paypalReady } from "../billing-config";
import { legalOperator } from "../legal/operator";

const categoryLinks = [
  ["Grammar", "Gramática", "/spanish-grammar-lessons"],
  ["Conversation", "Conversación", "/spanish-conversation-activities"],
  ["Teacher resources", "Recursos ELE", "/ele-recursos-profesores"],
] as const;

export default async function MarketingLanding({ config }: { config: LandingConfig }) {
  const requestHeaders = await headers();
  const locale = localeFromHeaders(requestHeaders);
  const c = config.copy[locale];
  const billing = billingConfig(env);
  const checkoutLive = billing.paypalEnv === "live" && paypalReady(billing) && Boolean(legalOperator(env));
  const selectedLessons = config.lessonIds
    .map((id) => lessons.find((lesson) => lesson.id === id))
    .filter((lesson): lesson is (typeof lessons)[number] => Boolean(lesson))
    .map((lesson) => ({ lesson, path: localLessonPath(lesson) }))
    .filter((item): item is { lesson: (typeof lessons)[number]; path: string } => Boolean(item.path));
  const firstFree = selectedLessons.find(({ lesson }) => isFreeLesson(lesson.id))
    ?? lessons.map((lesson) => ({ lesson, path: localLessonPath(lesson) })).find((item) => item.path && isFreeLesson(item.lesson.id));
  const freePath = firstFree?.path || "/el-hotel-de-lo-imposible";
  const createAccountPath = `/ingresar?modo=registro&returnTo=${encodeURIComponent(freePath)}`;
  const lessonCta: MarketingCta = { href: freePath, labelKey: "nav.viewLesson", event: "cta_click", intent: "view_lesson" };
  const accountCta: MarketingCta = { href: createAccountPath, labelKey: "nav.tryFree", event: "cta_click", intent: "try_free" };
  const pricingCta: MarketingCta = { href: "/pricing", labelKey: "nav.subscribe", event: "cta_click", intent: "subscribe" };
  const labels = locale === "es" ? {
    navLibrary: "Biblioteca",
    navPricing: "Precios",
    openFree: "Abrir una clase gratis",
    createFree: "Crear cuenta gratis",
    realLessons: "Clases reales",
    plans: "Planes simples",
    free: "GRATIS",
    pro: "PRO",
    freePlan: "Cuenta gratis",
    freePlanCopy: "Dos clases reales de cada categoría, sin tarjeta.",
    proPlan: checkoutLive ? "Acceso ilimitado" : "PRO · lanzamiento próximo",
    proPlanCopy: checkoutLive ? "Toda la biblioteca mientras la suscripción esté activa." : "Toda la biblioteca cuando PRO esté disponible. Hoy no se realizan cobros.",
    founder: checkoutLive ? "FOUNDING TEACHERS · PRIMEROS 1.000 PROFESORES" : "FOUNDING TEACHERS · PRECIO PREVISTO",
    month: "/ mes",
    founderCopy: checkoutLive ? "Mantienes este precio mientras la misma suscripción continúe activa." : "Reserva el precio previsto sin tarjeta ni pago.",
    compare: checkoutLive ? "Ver Free vs PRO" : "Ver lanzamiento PRO",
    lessonFree: "Abrir gratis",
    lessonPro: "Ver clase PRO",
    levels: "Niveles",
  } : {
    navLibrary: "Library",
    navPricing: "Pricing",
    openFree: "Open a free lesson",
    createFree: "Create a free account",
    realLessons: "Real lessons",
    plans: "Simple plans",
    free: "FREE",
    pro: "PRO",
    freePlan: "Free account",
    freePlanCopy: "Two real lessons from every category, with no card.",
    proPlan: checkoutLive ? "Unlimited access" : "PRO · launching soon",
    proPlanCopy: checkoutLive ? "The full library while your subscription is active." : "The full library when PRO is available. No charges are taken today.",
    founder: checkoutLive ? "FOUNDING TEACHERS · FIRST 1,000 TEACHERS" : "FOUNDING TEACHERS · PLANNED PRICE",
    month: "/ month",
    founderCopy: checkoutLive ? "Keep this price while the same subscription remains active." : "Reserve the planned price with no card or payment.",
    compare: checkoutLive ? "Compare Free and PRO" : "View the PRO launch",
    lessonFree: "Open free",
    lessonPro: "View PRO lesson",
    levels: "Levels",
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: c.title,
    description: c.lead,
    url: `https://spanishcue.com/${config.slug}`,
    isPartOf: { "@type": "WebSite", name: "SPANISHCUE", url: "https://spanishcue.com" },
    audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
  };

  return <main className="landing-page" id="landing-main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <a className="skip-link" href="#landing-title">{locale === "es" ? "Ir al contenido" : "Skip to content"}</a>
    <header className="landing-nav">
      <Link href="/" aria-label="SPANISHCUE"><SpanishCueBrand variant="compact" /></Link>
      <nav aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
        <Link href="/">{labels.navLibrary}</Link>
        <Link href="/pricing">{labels.navPricing}</Link>
        <LanguageSwitcher className="landing-language" />
        <MarketingLink cta={accountCta} placement={`landing_header_${config.slug}`}>{labels.createFree}</MarketingLink>
      </nav>
    </header>

    <section className="landing-hero" aria-labelledby="landing-title">
      <div className="landing-hero-copy">
        <span>{c.kicker}</span>
        <h1 id="landing-title">{c.title}</h1>
        <p>{c.lead}</p>
        <div className="landing-actions">
          <MarketingLink cta={lessonCta} placement={`landing_hero_${config.slug}`}>{labels.openFree}<b aria-hidden="true">→</b></MarketingLink>
          <MarketingLink cta={accountCta} placement={`landing_hero_secondary_${config.slug}`}>{labels.createFree}</MarketingLink>
        </div>
        <small>✓ {c.proof}</small>
      </div>
      {firstFree && <MarketingLink cta={lessonCta} className="landing-hero-preview" placement={`landing_visual_${config.slug}`}>
        <Image src={firstFree.lesson.image} alt={`${firstFree.lesson.title} · SPANISHCUE`} width={1200} height={750} fetchPriority="high" sizes="(max-width: 720px) 100vw, 46vw" />
        <span className="landing-hero-caption"><small>{labels.free} · {firstFree.lesson.displayLevel || firstFree.lesson.level}</small><b>{firstFree.lesson.title}</b><em>{labels.openFree} →</em></span>
      </MarketingLink>}
    </section>

    <section className="landing-stats" aria-label={locale === "es" ? "SPANISHCUE en números" : "SPANISHCUE in numbers"}>
      <div><b>{lessons.length}</b><span>{labels.realLessons}</span></div>
      <div><b>5</b><span>{locale === "es" ? "rutas de contenido" : "content paths"}</span></div>
      <div><b>A1–C2</b><span>{labels.levels}</span></div>
      <div><b>{freeLessonIds.length}</b><span>{locale === "es" ? "clases gratuitas" : "free lessons"}</span></div>
    </section>

    <section className="landing-products" aria-labelledby="landing-product-title">
      <header><span>{labels.realLessons}</span><h2 id="landing-product-title">{c.productTitle}</h2><p>{c.productCopy}</p></header>
      <div className="landing-lesson-grid">
        {selectedLessons.map(({ lesson, path }) => {
          const free = isFreeLesson(lesson.id);
          const destination = free ? path : `/acceso?returnTo=${encodeURIComponent(path)}`;
          const cta: MarketingCta = { href: destination, labelKey: "nav.viewLesson", event: "cta_click", intent: "view_lesson" };
          return <article key={lesson.id}>
            <Image src={lesson.image} alt={`${lesson.title} · ${lesson.category}`} width={720} height={450} loading="lazy" sizes="(max-width: 720px) 82vw, (max-width: 1000px) 50vw, 33vw" />
            <div><span className={free ? "free" : "pro"}>{free ? labels.free : labels.pro}</span><small>{lesson.displayLevel || lesson.level} · {translateCategory(locale, lesson.category)}</small><h3>{lesson.title}</h3><p>{lesson.subtitle}</p><MarketingLink cta={cta} placement={`landing_lesson_${config.slug}`}>{free ? labels.lessonFree : labels.lessonPro} →</MarketingLink></div>
          </article>;
        })}
      </div>
    </section>

    <section className="landing-benefits" aria-labelledby="landing-benefits-title">
      <div><span>SPANISHCUE</span><h2 id="landing-benefits-title">{c.benefitTitle}</h2></div>
      <div>{c.benefits.map(([title, description], index) => <article key={title}><i>0{index + 1}</i><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>

    <section className="landing-method" aria-labelledby="landing-method-title">
      <header><span>CHOOSE. OPEN. TEACH.</span><h2 id="landing-method-title">{c.methodTitle}</h2></header>
      <div>{c.methodSteps.map(([title, description], index) => <article key={title}><b>{index + 1}</b><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>

    <section className="landing-price" aria-labelledby="landing-price-title">
      <div className="landing-price-copy"><span>{labels.plans}</span><h2 id="landing-price-title">{labels.freePlan} <em>vs</em> {labels.proPlan}</h2><p>{checkoutLive ? (locale === "es" ? "Prueba el producto sin tarjeta y pasa a PRO cuando necesites toda la biblioteca." : "Try the product with no card, then move to PRO when you need the full library.") : (locale === "es" ? "Prueba el producto sin tarjeta. PRO está en preparación y reservar no inicia ningún cobro." : "Try the product with no card. PRO is in preparation, and reserving starts no charge.")}</p></div>
      <div className="landing-plan free"><span>{labels.free}</span><b>{locale === "es" ? "US$0" : "US$0"}</b><h3>{labels.freePlan}</h3><p>{labels.freePlanCopy}</p><MarketingLink cta={accountCta} placement={`landing_pricing_free_${config.slug}`}>{labels.createFree} →</MarketingLink></div>
      <div className="landing-plan pro"><span>{labels.founder}</span><div><b>US$15</b><small>{labels.month}</small></div><h3>{labels.proPlan}</h3><p>{labels.proPlanCopy} {labels.founderCopy}</p><MarketingLink cta={pricingCta} placement={`landing_pricing_pro_${config.slug}`}>{labels.compare} →</MarketingLink></div>
    </section>

    <section className="landing-final" aria-labelledby="landing-final-title"><span>SPANISHCUE</span><h2 id="landing-final-title">{c.finalTitle}</h2><p>{c.finalCopy}</p><div className="landing-actions"><MarketingLink cta={lessonCta} placement={`landing_final_${config.slug}`}>{labels.openFree}<b aria-hidden="true">→</b></MarketingLink><MarketingLink cta={accountCta} placement={`landing_final_secondary_${config.slug}`}>{labels.createFree}</MarketingLink></div></section>

    <footer className="landing-footer"><Link href="/"><SpanishCueBrand variant="compact" /></Link><nav aria-label={locale === "es" ? "Recursos, legal y privacidad" : "Resources, legal and privacy"}>{categoryLinks.map(([en, es, href]) => <Link key={href} href={href}>{locale === "es" ? es : en}</Link>)}<Link href="/pricing">{labels.navPricing}</Link><Link href="/privacy">{locale === "es" ? "Privacidad" : "Privacy"}</Link><Link href="/terms">{locale === "es" ? "Términos" : "Terms"}</Link><Link href="/contact">{locale === "es" ? "Contacto" : "Contact"}</Link></nav></footer>
  </main>;
}
