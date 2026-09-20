import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import CheckoutButton from "../acceso/CheckoutButton";
import { emailFromHeaders, fullAccessFromHeaders, signedInFromHeaders } from "../access-policy";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import { localeFromHeaders } from "../i18n/messages";
import { lessons } from "../lesson-catalog";
import { MarketingLink } from "../marketing/MarketingSections";
import { SpanishCueBrand } from "../SpanishCueBrand";
import "./style.css";
import { env } from "cloudflare:workers";
import { legalOperator } from "../legal/operator";
import { billingConfig, paypalReady } from "../billing-config";
import FounderAccessForm from "../acceso/FounderAccessForm";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const locale = localeFromHeaders(await headers());
  const es = locale === "es";
  const url = "https://spanishcue.com/pricing";
  const canonical = es ? url : `${url}?lang=en`;
  const title = es ? "Precios: Gratis y PRO | SPANISHCUE" : "Pricing: Free and PRO | SPANISHCUE";
  const config = billingConfig(env);
  const checkoutLive = config.paypalEnv === "live" && paypalReady(config) && Boolean(legalOperator(env));
  const description = checkoutLive
    ? es
      ? "Compara SPANISHCUE Gratis y PRO. Prueba diez clases reales o accede a toda la biblioteca interactiva por US$15 al mes con el precio fundador."
      : "Compare SPANISHCUE Free and PRO. Try ten real Spanish lessons or unlock the complete interactive library for US$15/month with Founder Price."
    : es
      ? "Compara SPANISHCUE Gratis y el próximo plan PRO. Prueba diez clases reales sin tarjeta y reserva el precio fundador previsto de US$15 al mes."
      : "Compare SPANISHCUE Free with the upcoming PRO plan. Try ten real lessons with no card and reserve the planned US$15 monthly Founder Price.";
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { es: url, en: `${url}?lang=en`, "x-default": url },
    },
    openGraph: { title, description, url: canonical, images: ["/og.png"] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
    robots: { index: true, follow: true },
  };
}

export default async function PricingPage() {
  const requestHeaders = await headers();
  const locale = localeFromHeaders(requestHeaders);
  const signedIn = signedInFromHeaders(requestHeaders);
  const fullAccess = fullAccessFromHeaders(requestHeaders);
  const es = locale === "es";
  const config = billingConfig(env);
  const checkoutLive = config.paypalEnv === "live" && paypalReady(config) && Boolean(legalOperator(env));
  const priceLabel = `US$${config.founderOffer.priceUsd}`;
  const accountEmail = emailFromHeaders(requestHeaders) || "";
  const freeCta = {
    href: "/el-hotel-de-lo-imposible",
    labelKey: "nav.viewLesson" as const,
    event: "cta_click" as const,
    intent: "view_lesson" as const,
  };

  return <main className="pricing-page" id="main-content">
    <a className="skip-link" href="#pricing-title">{es ? "Saltar al contenido" : "Skip to content"}</a>
    <header className="pricing-nav"><Link href="/" aria-label="SPANISHCUE"><SpanishCueBrand variant="compact" tone="light" /></Link><nav aria-label={es ? "Navegación principal" : "Main navigation"}><Link href="/">← {es ? "Biblioteca" : "Library"}</Link><LanguageSwitcher className="page-language" /></nav></header>
    <section className="pricing-intro" aria-labelledby="pricing-title">
      <span>{es ? "PRECIOS SIMPLES" : "SIMPLE PRICING"}</span>
      <h1 id="pricing-title">{checkoutLive ? (es ? "Empieza gratis. Desbloquea todo cuando lo necesites." : "Start free. Unlock everything when you need it.") : (es ? "Empieza gratis. PRO abre próximamente." : "Start free. PRO is launching soon.")}</h1>
      <p>{checkoutLive ? (es ? "Prueba clases completas sin tarjeta. PRO abre la biblioteca entera sin límites de acceso." : "Try complete lessons with no card. PRO opens the entire library with unlimited access.") : (es ? "Prueba diez clases completas sin tarjeta. Puedes reservar el precio previsto de PRO, pero hoy no se realizan cobros." : "Try ten complete lessons with no card. You can reserve the planned PRO price, but no charges are taken today.")}</p>
      <div><b>{lessons.length}</b> {es ? "clases reales" : "real lessons"}<i /> <b>A1–C2</b><i /> <b>5</b> {es ? "rutas" : "paths"}</div>
    </section>

    <section className="pricing-grid" aria-label={es ? "Comparación de planes" : "Plan comparison"}>
      <article className="pricing-free">
        <div className="pricing-card-label">FREE</div>
        <h2>{es ? "Cuenta gratuita" : "Free account"}</h2>
        <div className="pricing-amount"><b>US$0</b></div>
        <p>{es ? "Para conocer el producto con clases verdaderas, no una demo vacía." : "Experience the product through real lessons, not an empty demo."}</p>
        <ul><li>✓ {es ? "10 clases completas gratis" : "10 complete free lessons"}</li><li>✓ {es ? "2 por cada categoría" : "2 from every category"}</li><li>✓ {es ? "Sin tarjeta" : "No card required"}</li><li>✓ {es ? "Cuenta docente personal" : "Personal teacher account"}</li></ul>
        <MarketingLink cta={freeCta} placement="pricing_free">{es ? "Abrir una clase gratis" : "Open a free lesson"} →</MarketingLink>
        <Link className="pricing-student-demo" href="/demo/mis-alumnos">{es ? "Probar demo de Mis alumnos" : "Try the My students demo"} →</Link>
      </article>

      <article className="pricing-pro">
        <div className="pricing-card-label">FOUNDING TEACHERS · {checkoutLive ? (es ? "PRIMEROS 1.000" : "FIRST 1,000") : (es ? "LANZAMIENTO PRÓXIMO" : "LAUNCHING SOON")}</div>
        <h2>SPANISHCUE PRO</h2>
        <div className="pricing-amount"><b>{priceLabel}</b><span>{es ? "/ mes" : "/ month"}</span></div>
        <p>{checkoutLive ? (es ? `${priceLabel} por mes, con renovación automática hasta que canceles. Mantienes el precio mientras la misma suscripción continúe activa.` : `${priceLabel} per month, renewing automatically until cancelled. Keep the price while the same subscription remains active.`) : (es ? `Precio fundador previsto: ${priceLabel} por mes. El checkout todavía no está activo; reservar no inicia una suscripción ni un cobro.` : `Planned Founder Price: ${priceLabel} per month. Checkout is not active yet; reserving starts neither a subscription nor a charge.`)}</p>
        <ul><li>✓ {es ? "Toda la biblioteca" : "The complete library"}</li><li>✓ {es ? "Acceso ilimitado" : "Unlimited access"}</li><li>✓ {es ? "Gramática, conversación y escucha" : "Grammar, conversation and listening"}</li><li>✓ {es ? "Fonética y vocabulario" : "Pronunciation and vocabulary"}</li><li>✓ {es ? "Nuevas clases dentro de la plataforma" : "New lessons added to the platform"}</li></ul>
        {fullAccess ? <Link className="pricing-open-library" href="/">{es ? "Abrir mi biblioteca" : "Open my library"} →</Link> : checkoutLive ? <CheckoutButton signedIn={signedIn} returnTo="/" /> : <FounderAccessForm defaultEmail={accountEmail} priceLabel={`${priceLabel}/${es ? "mes" : "month"}`} returnTo="/" />}
        <nav className="pricing-legal-links" aria-label={es ? "Información legal y de privacidad" : "Legal and privacy information"}><Link href="/terms">{es ? "Términos" : "Terms"}</Link><Link href="/privacy">{es ? "Privacidad" : "Privacy"}</Link><Link href="/contact">{es ? "Contacto" : "Contact"}</Link><Link href="/subscription-terms">{es ? "Estado de suscripción" : "Subscription status"}</Link></nav>
      </article>
    </section>

    <section className="pricing-explainer" aria-labelledby="pricing-explainer-title"><span>{es ? "SIN COMPLICACIONES" : "NO COMPLEXITY"}</span><h2 id="pricing-explainer-title">{es ? "Una cuenta gratis. Un plan PRO." : "One free account. One PRO plan."}</h2><div><article><b>01</b><h3>{es ? "Prueba" : "Try"}</h3><p>{es ? "Abre clases completas de cada categoría." : "Open complete lessons from every category."}</p></article><article><b>02</b><h3>{es ? "Decide" : "Decide"}</h3><p>{es ? "Comprueba si encaja con tu manera de enseñar." : "See whether it fits the way you teach."}</p></article><article><b>03</b><h3>{checkoutLive ? (es ? "Desbloquea" : "Unlock") : (es ? "Reserva" : "Reserve")}</h3><p>{checkoutLive ? (es ? "Pasa a PRO solo cuando quieras toda la biblioteca." : "Move to PRO only when you want the full library.") : (es ? "Guarda tu lugar sin pago y recibe aviso antes del lanzamiento." : "Save your place with no payment and get notice before launch.")}</p></article></div></section>

    <section className="pricing-faq" aria-labelledby="pricing-faq-title"><span>FAQ</span><h2 id="pricing-faq-title">{es ? "Antes de elegir." : "Before you choose."}</h2><div><details><summary>{es ? "¿Necesito tarjeta para probar?" : "Do I need a card to try it?"}</summary><p>{es ? "No. La cuenta gratuita y las diez clases incluidas no piden tarjeta." : "No. The free account and its ten included lessons do not require a card."}</p></details><details><summary>{es ? "¿Qué significa acceso ilimitado?" : "What does unlimited access mean?"}</summary><p>{es ? "Cuando PRO esté disponible, permitirá abrir cualquier clase mientras la suscripción siga activa." : "When PRO becomes available, it will let you open any lesson while the subscription stays active."}</p></details><details><summary>{es ? "¿Puedo pagar ahora?" : "Can I pay now?"}</summary><p>{checkoutLive ? (es ? `Sí. El checkout muestra ${priceLabel} por mes y la renovación antes de confirmar en PayPal.` : `Yes. Checkout shows ${priceLabel} per month and renewal terms before PayPal confirmation.`) : (es ? "No todavía. El checkout está desactivado y reservar el precio fundador no produce ningún cobro." : "Not yet. Checkout is disabled, and reserving Founder Price causes no charge.")}</p></details><details><summary>{es ? "¿Cómo funcionará la cancelación?" : "How will cancellation work?"}</summary><p>{es ? "Antes de activar pagos se publicarán las condiciones definitivas. La integración preparada permite cancelar online desde Mi cuenta." : "Final terms will be published before payments start. The prepared integration supports online cancellation from My account."}</p></details></div></section>
    <footer className="pricing-footer"><SpanishCueBrand variant="compact" tone="light" /><nav aria-label={es ? "Legal" : "Legal"}><Link href="/privacy">{es ? "Privacidad" : "Privacy"}</Link><Link href="/terms">{es ? "Términos" : "Terms"}</Link><Link href="/contact">{es ? "Contacto" : "Contact"}</Link></nav><p>{es ? "Clases visuales listas para enseñar." : "Visual lessons ready to teach."}</p></footer>
  </main>;
}
