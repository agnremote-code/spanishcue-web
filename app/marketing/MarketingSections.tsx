"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useI18n } from "../i18n/LocaleProvider";
import { cantonShapes } from "../suiza-en-relieve/map-data";
import { subscriptionCtaFor, type MarketingAudience, type MarketingCta } from "./cta-state";
import { markFreeLessonCompleted, trackMarketingEvent, type MarketingEvent } from "./analytics";
import { selectFreeProductSamples, type FreeSampleLesson } from "./free-sample-selector";

type MarketingLesson = FreeSampleLesson & {
  title: string;
  subtitle: string;
  level: string;
  displayLevel?: string;
  path?: string;
};

const copy = {
  es: {
    stepsKicker: "TU PRÓXIMA CLASE EN TRES PASOS",
    stepsTitle: "Menos preparación. Más tiempo para enseñar.",
    steps: [
      ["01", "Elige", "Filtra por nivel, tema u objetivo."],
      ["02", "Abre", "Todo lo que necesitas vive en una pantalla."],
      ["03", "Enseña", "Comparte, practica y activa conversación real."],
    ],
    problemKicker: "EL PROBLEMA QUE YA CONOCES",
    problemTitle: "Tu tiempo vale más que otra noche armando diapositivas.",
    problemCopy: "Buscar ideas, ordenar explicaciones y diseñar actividades vuelve a empezar con cada alumno. SPANISHCUE reúne ese trabajo en experiencias visuales listas para usar.",
    oldWay: "Preparar desde cero",
    oldItems: ["Elegir un tema", "Buscar material", "Diseñar la secuencia", "Crear la práctica"],
    cueWay: "Con SPANISHCUE",
    cueItems: ["Elegir por nivel", "Abrir la clase", "Enseñar y conversar"],
    previewKicker: "EL PRODUCTO, NO UNA PROMESA",
    previewTitle: "Mira clases reales antes de decidir.",
    previewCopy: "Cada recorrido combina dirección visual, claridad pedagógica y producción oral. Abre una muestra o explora la categoría que necesitas.",
    previewOpen: "Ver clase gratis",
    previewFree: "CLASE GRATUITA",
    previewLabels: {
      grammar: "Gramática",
      conversation: "Conversación",
      listening: "Escucha",
      vocabulary: "Vocabulario",
      pronunciation: "Fonética",
      switzerland: "Suiza 3D",
    },
    benefitsKicker: "DISEÑADO PARA PROFESORES",
    benefitsTitle: "Una biblioteca que trabaja antes de que llegue tu alumno.",
    benefits: [
      ["Lista para pantalla", "Comparte la clase desde el navegador sin preparar un PowerPoint paralelo."],
      ["Progresión clara", "Niveles A0–C2, rutas pedagógicas y objetivos visibles para elegir con criterio."],
      ["Conversación integrada", "La explicación, la práctica y la producción viven en una misma experiencia."],
      ["Un español global", "Voces, lugares y culturas del mundo hispanohablante, no una sola variedad."],
    ],
    proofAria: "Prueba de producto SPANISHCUE",
    proof: ["clases reales", "rutas de contenido", "progresión completa", "culturas representadas"],
    founderKicker: "FOUNDER PRICE",
    founderTitle: "Toda la biblioteca por US$15 al mes.",
    founderCopy: "Precio fundador para las primeras 1.000 suscripciones activadas. US$15 se mantiene mientras esa misma suscripción siga activa.",
    founderLaunchTitle: "PRO abre próximamente por un precio previsto de US$15 al mes.",
    founderLaunchCopy: "El checkout todavía no está activo. Puedes reservar el precio fundador sin tarjeta ni pago y recibirás aviso antes de que se habilite cualquier cobro.",
    founderBenefits: ["Biblioteca completa", "A0–C2", "5 rutas", "Modo Play + Universos"],
    remaining: "{remaining} de {limit} lugares disponibles",
    founderFallback: "Lanzamiento próximo · sin cobros todavía",
    founderFull: "La oferta fundadora ya completó sus lugares",
    checkoutNotLive: "El checkout todavía no está habilitado para cobros reales",
    proActive: "Tu acceso PRO ya está activo",
    proCopy: "Toda la biblioteca está lista para que elijas y abras una clase.",
    subscribe: "Suscribirme",
    payment: "Pago mensual automático con PayPal hasta que canceles.",
    launchPayment: "Reservar no inicia una suscripción ni produce un cobro.",
    reserve: "Reservar sin pago",
    billingFacts: [
      ["Facturación", "US$15 cada mes"],
      ["Renovación", "Automática hasta la cancelación"],
      ["Cancelación", "Online desde Mi cuenta"],
      ["Precio fundador", "Vinculado a la misma suscripción activa"],
    ],
    launchBillingFacts: [
      ["Estado", "Lanzamiento próximo"],
      ["Precio previsto", "US$15 por mes"],
      ["Pago hoy", "Ninguno"],
      ["Aviso", "Antes de activar cobros"],
    ],
    founderPill: "Precio Fundador · US$15/mes",
    founderPillAria: "Ir al precio fundador",
    founderPillClose: "Ocultar precio fundador durante esta sesión",
    finalKicker: "CHOOSE. OPEN. TEACH.",
    finalTitle: "La próxima clase no tiene que empezar desde cero.",
    finalCopy: "Crea tu cuenta gratuita, abre una clase real y decide con el producto delante.",
    finalOffer: "PRO en preparación · precio previsto US$15/mes · sin cobros todavía",
    faqKicker: "PREGUNTAS CLARAS",
    faqTitle: "Antes de abrir tu primera clase.",
    faq: [
      ["¿Qué es SPANISHCUE?", "Una biblioteca visual de clases de español listas para abrir, compartir y enseñar desde el navegador."],
      ["¿Es para profesores o para estudiantes?", "Está diseñada principalmente para profesores. El alumno participa en las explicaciones, prácticas y conversaciones que guía su profesor."],
      ["¿Funciona para clases online y presenciales?", "Sí. En Zoom o Meet puedes compartir la pantalla; en una clase presencial puedes proyectarla o usarla como guía visual en tu dispositivo."],
      ["¿Qué niveles hay?", "La biblioteca cubre la progresión A0–C2; cada tarjeta indica su nivel y objetivo."],
      ["¿Qué tipos de clases incluye?", "Gramática, conversación, escucha, fonética y vocabulario, además de recorridos visuales y formatos interactivos."],
      ["¿Necesito descargar algo?", "No. Las clases se abren en el navegador y están diseñadas para compartir en pantalla."],
      ["¿Qué incluye la cuenta gratuita?", "Diez clases reales: dos de cada categoría. No necesitas tarjeta para crear la cuenta."],
      ["¿Qué desbloqueará PRO?", "Cuando se active, dará acceso ilimitado a toda la biblioteca de gramática, conversación, escucha, fonética y vocabulario."],
      ["¿Cómo funcionará el Founder Price?", "El lanzamiento prevé US$15 al mes para las primeras 1.000 suscripciones activadas. Reservar ahora no inicia una suscripción ni un cobro."],
      ["¿La suscripción se renueva automáticamente?", "Todavía no hay suscripciones públicas. Antes de activar pagos se mostrarán claramente la renovación y las condiciones finales."],
      ["¿Cómo funcionará la cancelación?", "La integración preparada permite cancelarla online desde Mi cuenta. Las condiciones definitivas se publicarán antes de activar pagos."],
      ["¿Qué pasa con mi precio si cancelo y vuelvo?", "Al cancelar termina la garantía asociada a esa suscripción. Si vuelves, se aplicará la oferta disponible en ese momento."],
      ["¿Puedo pagar ahora?", "No todavía. PayPal está integrado en modo de pruebas y el checkout público permanece desactivado."],
      ["¿Puedo compartir mi cuenta?", "No. El acceso es individual para el profesor titular; puedes compartir la pantalla y el contenido durante tus clases."],
    ],
    libraryCta: "¿Encontraste una clase que quieres usar?",
    libraryCopy: "Prueba las muestras gratuitas o desbloquea la biblioteca completa.",
    freeDone: "¿Terminaste de usar esta clase?",
    markDone: "Marcar como terminada",
    markedDone: "Clase terminada",
    freeTitle: "Ya viste cómo enseña SPANISHCUE.",
    freeCopy: "Guarda tu acceso gratuito o abre toda la biblioteca para tu próxima clase.",
  },
  en: {
    stepsKicker: "YOUR NEXT LESSON IN THREE STEPS",
    stepsTitle: "Less prep. More time to teach.",
    steps: [
      ["01", "Choose", "Filter by level, topic or goal."],
      ["02", "Open", "Everything you need lives on one screen."],
      ["03", "Teach", "Share, practise and spark real conversation."],
    ],
    problemKicker: "THE PROBLEM YOU ALREADY KNOW",
    problemTitle: "Your time is worth more than another night building slides.",
    problemCopy: "Finding ideas, structuring explanations and creating activities starts over with every learner. SPANISHCUE brings that work together in visual experiences ready to use.",
    oldWay: "Build from scratch",
    oldItems: ["Choose a topic", "Find material", "Design the sequence", "Create the practice"],
    cueWay: "With SPANISHCUE",
    cueItems: ["Choose by level", "Open the lesson", "Teach and talk"],
    previewKicker: "THE PRODUCT, NOT A PROMISE",
    previewTitle: "See real lessons before you decide.",
    previewCopy: "Every path combines visual direction, pedagogical clarity and speaking practice. Open a sample or explore the category you need.",
    previewOpen: "View free lesson",
    previewFree: "FREE LESSON",
    previewLabels: {
      grammar: "Grammar",
      conversation: "Conversation",
      listening: "Listening",
      vocabulary: "Vocabulary",
      pronunciation: "Pronunciation",
      switzerland: "Switzerland 3D",
    },
    benefitsKicker: "BUILT FOR TEACHERS",
    benefitsTitle: "A library that works before your learner arrives.",
    benefits: [
      ["Screen-share ready", "Share the lesson from your browser without building a separate slide deck."],
      ["Clear progression", "A0–C2 levels, pedagogical paths and visible goals help you choose with confidence."],
      ["Conversation built in", "Explanation, practice and production live in the same experience."],
      ["Global Spanish", "Voices, places and cultures from across the Spanish-speaking world."],
    ],
    proofAria: "SPANISHCUE product proof",
    proof: ["real lessons", "content paths", "full progression", "cultures represented"],
    founderKicker: "FOUNDER PRICE",
    founderTitle: "The full library for US$15 a month.",
    founderCopy: "Founder pricing for the first 1,000 activated subscriptions. US$15 stays in place while that same subscription remains active.",
    founderLaunchTitle: "PRO is launching soon at a planned US$15 monthly price.",
    founderLaunchCopy: "Checkout is not active yet. You can reserve Founder Price with no card or payment, and you will be notified before any charge is enabled.",
    founderBenefits: ["Full library", "A0–C2", "5 content paths", "Play Mode + Worlds"],
    remaining: "{remaining} of {limit} places available",
    founderFallback: "Launching soon · no charges yet",
    founderFull: "All Founder Price places have been claimed",
    checkoutNotLive: "Checkout is not yet enabled for real charges",
    proActive: "Your PRO access is active",
    proCopy: "The full library is ready for you to choose and open a lesson.",
    subscribe: "Subscribe",
    payment: "Automatic monthly billing through PayPal until you cancel.",
    launchPayment: "Reserving starts neither a subscription nor a charge.",
    reserve: "Reserve with no payment",
    billingFacts: [
      ["Billing", "US$15 every month"],
      ["Renewal", "Automatic until cancellation"],
      ["Cancellation", "Online from My account"],
      ["Founder price", "Tied to the same active subscription"],
    ],
    launchBillingFacts: [
      ["Status", "Launching soon"],
      ["Planned price", "US$15 per month"],
      ["Payment today", "None"],
      ["Notice", "Before charges start"],
    ],
    founderPill: "Founder Price · US$15/month",
    founderPillAria: "Go to Founder Price",
    founderPillClose: "Hide Founder Price for this session",
    finalKicker: "CHOOSE. OPEN. TEACH.",
    finalTitle: "Your next lesson does not have to start from scratch.",
    finalCopy: "Create your free account, open a real lesson and decide with the product in front of you.",
    finalOffer: "PRO in preparation · planned US$15/month · no charges yet",
    faqKicker: "CLEAR ANSWERS",
    faqTitle: "Before you open your first lesson.",
    faq: [
      ["What is SPANISHCUE?", "A visual library of Spanish lessons ready to open, share and teach from your browser."],
      ["Is it for teachers or learners?", "It is designed primarily for teachers. Learners take part in the explanations, practice and conversations guided by their teacher."],
      ["Does it work for online and in-person lessons?", "Yes. In Zoom or Meet you can share your screen; in person, project it or use it as a visual guide on your device."],
      ["Which levels are included?", "The library covers the full A0–C2 progression; every card shows its level and goal."],
      ["Which lesson types are included?", "Grammar, conversation, listening, pronunciation and vocabulary, plus visual paths and interactive formats."],
      ["Do I need to download anything?", "No. Lessons open in the browser and are designed for screen sharing."],
      ["What does the free account include?", "Ten real lessons: two from every category. No card is required to create an account."],
      ["What will PRO unlock?", "When active, it will provide unlimited access to the full grammar, conversation, listening, pronunciation and vocabulary library."],
      ["How will Founder Price work?", "The launch plan is US$15 per month for the first 1,000 activated subscriptions. Reserving now starts neither a subscription nor a charge."],
      ["Does the subscription renew automatically?", "There are no public subscriptions yet. Renewal and final terms will be shown clearly before payments are enabled."],
      ["How will cancellation work?", "The prepared integration supports online cancellation from My account. Final terms will be published before payments are enabled."],
      ["What happens to my price if I cancel and return?", "Cancellation ends the guarantee tied to that subscription. If you return, the offer available at that time applies."],
      ["Can I pay now?", "Not yet. PayPal is integrated in test mode and public checkout remains disabled."],
      ["Can I share my account?", "No. Access is personal to the account-holding teacher; you may share your screen and lesson content while teaching."],
    ],
    libraryCta: "Found a lesson you want to use?",
    libraryCopy: "Try the free samples or unlock the full library.",
    freeDone: "Finished using this lesson?",
    markDone: "Mark as completed",
    markedDone: "Lesson completed",
    freeTitle: "You have seen how SPANISHCUE teaches.",
    freeCopy: "Save your free access or open the full library for your next lesson.",
  },
} as const;

function useCopy() {
  const { locale } = useI18n();
  return copy[locale];
}

export function MarketingLink({
  cta,
  className,
  children,
  placement,
}: {
  cta: MarketingCta;
  className?: string;
  children: ReactNode;
  placement: string;
}) {
  return <a className={className} href={cta.href} onClick={() => trackMarketingEvent(cta.event, { placement, cta_type: cta.intent, destination: cta.href })}>{children}</a>;
}

function useViewEvent(event: MarketingEvent, placement: string, companion?: MarketingEvent) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      trackMarketingEvent(event, { placement });
      if (companion) trackMarketingEvent(companion, { placement });
      observer.disconnect();
    }, { threshold: .35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [companion, event, placement]);
  return ref;
}

export function HowItWorks() {
  const c = useCopy();
  return <section className="mk-section mk-steps" id="how-it-works" aria-labelledby="mk-steps-title">
    <div className="mk-section-heading">
      <span>{c.stepsKicker}</span>
      <h2 id="mk-steps-title">{c.stepsTitle}</h2>
    </div>
    <div className="mk-step-grid">
      {c.steps.map(([number, title, description]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{description}</p></div></article>)}
    </div>
  </section>;
}

export function ProblemSolution({ primary, primaryLabel }: { primary: MarketingCta; primaryLabel: string }) {
  const c = useCopy();
  return <section className="mk-section mk-problem" aria-labelledby="mk-problem-title">
    <div className="mk-problem-copy">
      <span>{c.problemKicker}</span>
      <h2 id="mk-problem-title">{c.problemTitle}</h2>
      <p>{c.problemCopy}</p>
      <MarketingLink cta={primary} className="mk-inline-cta" placement="problem_solution">{primaryLabel}<span>→</span></MarketingLink>
    </div>
    <div className="mk-compare" aria-label={`${c.oldWay} / ${c.cueWay}`}>
      <article className="old"><small>{c.oldWay}</small>{c.oldItems.map((item, index) => <p key={item}><i>{index + 1}</i>{item}</p>)}</article>
      <span className="mk-compare-arrow" aria-hidden="true">→</span>
      <article className="cue"><small>{c.cueWay}</small>{c.cueItems.map((item, index) => <p key={item}><i>0{index + 1}</i>{item}</p>)}</article>
    </div>
  </section>;
}

export function ProductPreview({ lessons }: { lessons: MarketingLesson[] }) {
  const c = useCopy();
  const previews = useMemo(() => selectFreeProductSamples(lessons), [lessons]);
  return <section className="mk-section mk-product" id="free-lessons" aria-labelledby="mk-product-title">
    <div className="mk-product-head"><div><span>{c.previewKicker}</span><h2 id="mk-product-title">{c.previewTitle}</h2></div><p>{c.previewCopy}</p></div>
    <div className="mk-preview-rail">
      {previews.map(({ lesson, key }) => <a key={`${key}-${lesson.id}`} href={lesson.href} data-free-sample-id={lesson.id} onClick={() => { trackMarketingEvent("lesson_preview_open", { lesson_id: lesson.id, lesson_title: lesson.title, category: key, access: "free", placement: "product_preview" }); }}>
        <img src={lesson.image} alt="" width="640" height="400" loading="lazy" />
        {key === "switzerland" && <div className="mk-swiss-preview" aria-hidden="true">
          <i>MAPA 3D · 26 CANTONES</i>
          <svg viewBox="0 0 900 555">
            {cantonShapes.map((shape, index) => <g key={shape.code}>
              <path d={shape.d} transform="translate(0 12)" className="mk-swiss-side" fillRule="evenodd" />
              <path d={shape.d} className={`mk-swiss-top tone-${index % 4}`} fillRule="evenodd" />
            </g>)}
          </svg>
        </div>}
        <span><small>{c.previewFree} · {lesson.displayLevel || lesson.level} · {c.previewLabels[key]}</small><b>{lesson.title}</b><em>{c.previewOpen} →</em></span>
      </a>)}
    </div>
  </section>;
}

export function BenefitSection({ primary, primaryLabel }: { primary: MarketingCta; primaryLabel: string }) {
  const c = useCopy();
  return <section className="mk-section mk-benefits" aria-labelledby="mk-benefits-title">
    <div className="mk-section-heading"><span>{c.benefitsKicker}</span><h2 id="mk-benefits-title">{c.benefitsTitle}</h2></div>
    <div className="mk-benefit-grid">{c.benefits.map(([title, description], index) => <article key={title}><i>0{index + 1}</i><h3>{title}</h3><p>{description}</p></article>)}</div>
    <MarketingLink cta={primary} className="mk-inline-cta" placement="benefits">{primaryLabel}<span>→</span></MarketingLink>
  </section>;
}

export function SocialProof({ lessonCount, routeCount, levelRange, cultureCount }: { lessonCount: number; routeCount: number; levelRange: string; cultureCount: number }) {
  const c = useCopy();
  const values = [String(lessonCount), String(routeCount), levelRange, String(cultureCount)];
  return <section className="mk-proof" aria-label={c.proofAria}>{values.map((value, index) => <div key={value}><b>{value}</b><span>{c.proof[index]}</span></div>)}</section>;
}

type FounderStatus = { enabled: boolean; limit: number; claimed: number; remaining: number; available: boolean; priceUsd: number; checkoutLive: boolean };

export function FounderOffer({ audience, primary, primaryLabel }: { audience: MarketingAudience; primary: MarketingCta; primaryLabel: string }) {
  const c = useCopy();
  const { locale } = useI18n();
  const ref = useViewEvent("pricing_view", "home_founder_offer");
  const [status, setStatus] = useState<FounderStatus | null>(null);
  useEffect(() => {
    if (audience === "pro") return;
    const controller = new AbortController();
    fetch("/api/billing/founder-status", { credentials: "same-origin", signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((body: unknown) => {
        if (body && typeof body === "object" && "remaining" in body && typeof body.remaining === "number") {
          setStatus(body as FounderStatus);
        }
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [audience]);
  const checkoutLive = Boolean(status?.available && status.checkoutLive);
  const subscriptionCta = subscriptionCtaFor(audience);
  const launchCta: MarketingCta = { href: "/pricing", labelKey: "nav.subscribe", event: "cta_click", intent: "subscribe" };
  const availability = status && !status.checkoutLive
    ? c.checkoutNotLive
    : status
    ? status.available
      ? c.remaining.replace("{remaining}", String(status.remaining)).replace("{limit}", String(status.limit))
      : c.founderFull
    : c.founderFallback;
  return <section className="mk-section mk-founder" id="pricing" aria-labelledby="mk-founder-title" ref={ref}>
    <div className="mk-founder-glow" aria-hidden="true" />
    <div className="mk-founder-copy"><span>{c.founderKicker}</span><h2 id="mk-founder-title">{audience === "pro" ? c.proActive : checkoutLive ? c.founderTitle : c.founderLaunchTitle}</h2><p>{audience === "pro" ? c.proCopy : checkoutLive ? c.founderCopy : c.founderLaunchCopy}</p>{audience !== "pro" && <><ul>{c.founderBenefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}</ul><dl className="mk-billing-facts">{(checkoutLive ? c.billingFacts : c.launchBillingFacts).map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl></>}</div>
    <div className="mk-founder-offer">
      <small className={status && !status.available ? "closed" : ""}><i />{availability}</small>
      {audience !== "pro" && <div className="mk-founder-price"><b>US$15</b><span>/ {locale === "es" ? "mes" : "month"}</span></div>}
      {audience === "pro" ? <MarketingLink cta={primary} className="mk-founder-cta" placement="home_founder_offer">{primaryLabel}<span>→</span></MarketingLink> : checkoutLive ? <MarketingLink cta={subscriptionCta} className="mk-founder-cta" placement="home_founder_offer">{c.subscribe}<span>→</span></MarketingLink> : <MarketingLink cta={launchCta} className="mk-founder-cta" placement="home_founder_reservation">{c.reserve}<span>→</span></MarketingLink>}
      {audience !== "pro" && <em>{checkoutLive ? c.payment : c.launchPayment}</em>}
    </div>
  </section>;
}

export function Pricing(props: Parameters<typeof FounderOffer>[0]) {
  return <FounderOffer {...props} />;
}

export function FounderPricePill({ audience }: { audience: MarketingAudience }) {
  const c = useCopy();
  const [eligible, setEligible] = useState(false);
  const [pastIntro, setPastIntro] = useState(false);
  const [pricingVisible, setPricingVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (audience === "pro") return;
    const timer = window.setTimeout(() => setDismissed(window.sessionStorage.getItem("spanishcue.founder-pill.hidden") === "1"), 0);
    const onScroll = () => setPastIntro(window.scrollY > Math.max(520, window.innerHeight * .78));
    requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    const pricing = document.getElementById("pricing");
    const observer = pricing ? new IntersectionObserver(([entry]) => setPricingVisible(entry.isIntersecting), { threshold: .08 }) : null;
    if (pricing && observer) observer.observe(pricing);
    const controller = new AbortController();
    fetch("/api/billing/founder-status", { credentials: "same-origin", signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((body: unknown) => setEligible(Boolean(body && typeof body === "object" && "available" in body && body.available === true && "checkoutLive" in body && body.checkoutLive === true)))
      .catch(() => setEligible(false));
    return () => { window.clearTimeout(timer); window.removeEventListener("scroll", onScroll); observer?.disconnect(); controller.abort(); };
  }, [audience]);

  if (audience === "pro" || !eligible || !pastIntro || pricingVisible || dismissed) return null;
  const hide = () => { window.sessionStorage.setItem("spanishcue.founder-pill.hidden", "1"); setDismissed(true); };
  return <aside className="mk-founder-pill" aria-label={c.founderPillAria}>
    <button type="button" className="mk-founder-pill-link" onClick={() => {
      trackMarketingEvent("cta_click", { placement: "floating_founder_price", destination: "#pricing" });
      hide();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("pricing")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }}><span>{c.founderPill}</span><b aria-hidden="true">↓</b></button>
    <button type="button" className="mk-founder-pill-close" aria-label={c.founderPillClose} title={c.founderPillClose} onClick={hide}>×</button>
  </aside>;
}

export function FAQ() {
  const c = useCopy();
  return <section className="mk-section mk-faq" aria-labelledby="mk-faq-title"><div className="mk-faq-head"><span>{c.faqKicker}</span><h2 id="mk-faq-title">{c.faqTitle}</h2></div><div>{c.faq.map(([question, answer]) => <details key={question}><summary>{question}<i>+</i></summary><p>{answer}</p></details>)}</div></section>;
}

export function CTASection({ audience, primary, primaryLabel, secondary, secondaryLabel }: { audience: MarketingAudience; primary: MarketingCta; primaryLabel: string; secondary: MarketingCta; secondaryLabel: string }) {
  const c = useCopy();
  const { locale } = useI18n();
  return <section className="mk-section mk-final-cta"><img src="/brand/mascot/pointing.webp" alt="" width="900" height="1350" loading="lazy"/><div><span>{c.finalKicker}</span><h2>{c.finalTitle}</h2><p>{c.finalCopy}</p>{audience !== "pro" && <small className="mk-final-offer">{c.finalOffer}</small>}<nav aria-label={locale === "es" ? "Próximos pasos" : "Next steps"}><MarketingLink cta={primary} placement="final_cta">{primaryLabel}<b>→</b></MarketingLink><MarketingLink cta={secondary} placement="final_cta_secondary">{secondaryLabel}</MarketingLink></nav></div></section>;
}

export function LibraryConversionBanner({ primary, primaryLabel, secondary, secondaryLabel }: { primary: MarketingCta; primaryLabel: string; secondary: MarketingCta; secondaryLabel: string }) {
  const c = useCopy();
  const { locale } = useI18n();
  return <aside className="mk-library-cta"><div><span>SPANISHCUE</span><b>{c.libraryCta}</b><p>{c.libraryCopy}</p></div><nav aria-label={locale === "es" ? "Acciones de la biblioteca" : "Library actions"}><MarketingLink cta={primary} placement="library_banner">{primaryLabel} →</MarketingLink><MarketingLink cta={secondary} placement="library_banner_secondary">{secondaryLabel}</MarketingLink></nav></aside>;
}

export function FreeLessonConversionBar({ lessonId, lessonTitle, primary, primaryLabel }: { lessonId: number; lessonTitle: string; primary: MarketingCta; primaryLabel: string }) {
  const c = useCopy();
  const [done, setDone] = useState(false);
  const [registeredInLesson, setRegisteredInLesson] = useState(false);

  useEffect(() => {
    const handleSessionReady = () => setRegisteredInLesson(true);
    window.addEventListener("spanishcue:session-ready", handleSessionReady);
    return () => window.removeEventListener("spanishcue:session-ready", handleSessionReady);
  }, []);

  if (registeredInLesson) return null;

  return <aside className="mk-free-finish" aria-label={c.freeDone}>
    <div className="mk-free-mascot"><img src="/brand/mascot/standing-crossed.webp" alt="" width="900" height="1350" loading="lazy" /></div>
    <div><button type="button" className={done ? "done" : ""} onClick={() => { if (!done) markFreeLessonCompleted(lessonId, lessonTitle); setDone(true); }}>{done ? `✓ ${c.markedDone}` : c.markDone}</button><h2>{c.freeTitle}</h2><p>{c.freeCopy}</p></div>
    <MarketingLink cta={primary} placement="free_lesson_end">{primaryLabel}<span>→</span></MarketingLink>
  </aside>;
}
