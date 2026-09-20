import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { lessons } from "../lesson-catalog";
import {
  accountIdFromHeaders,
  emailFromHeaders,
  fullAccessFromHeaders,
  lessonAtPath,
  safeRelativeReturnPath,
  signedInFromHeaders,
} from "../access-policy";
import CheckoutButton from "./CheckoutButton";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import {
  localeFromHeaders,
  translate,
  translateCategory,
  type MessageKey,
} from "../i18n/messages";
import "./style.css";
import { SpanishCueBrand } from "../SpanishCueBrand";
import { MarketingLink } from "../marketing/MarketingSections";
import { env } from "cloudflare:workers";
import { legalOperator } from "../legal/operator";
import { billingConfig, billingReadiness, checkoutAllowed } from "../billing-config";
import FounderAccessForm from "./FounderAccessForm";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "SPANISHCUE PRO",
  description: "Accede a la biblioteca completa de clases interactivas de SPANISHCUE.",
  alternates: { canonical: "https://spanishcue.com/pricing" },
  robots: { index: false, follow: true },
};

export default async function Access({
  searchParams,
}: {
  searchParams: Promise<{ returnTo?: string }>;
}) {
  const [requestHeaders, params] = await Promise.all([headers(), searchParams]);
  const returnTo = safeRelativeReturnPath(params.returnTo);
  if (fullAccessFromHeaders(requestHeaders)) redirect(returnTo);

  const locale = localeFromHeaders(requestHeaders);
  const t = (key: MessageKey, values?: Record<string, string | number>) =>
    translate(locale, key, values);
  const signedIn = signedInFromHeaders(requestHeaders);
  const config = billingConfig(env);
  const priceLabel = `US$${config.founderOffer.priceUsd}`;
  // In Sandbox the same paywall opens the test checkout; Live still requires
  // the legal operator data before the public billing flow is enabled.
  const readiness = billingReadiness(config, Boolean(legalOperator(env)));
  const checkoutLive = readiness !== "unconfigured" && checkoutAllowed(config, accountIdFromHeaders(requestHeaders));
  const sandbox = readiness === "sandbox_ready";
  const accountEmail = emailFromHeaders(requestHeaders) || "";
  const signInHref = `/ingresar?modo=entrar&returnTo=${encodeURIComponent(returnTo)}`;
  const requestedLesson = lessonAtPath(returnTo, lessons);

  return (
    <div className="premium-gate">
      <a className="skip-link" href="#main-content">{t("common.skipToContent")}</a>
      <header className="premium-nav">
        <Link className="premium-brand" href="/" aria-label={`SPANISHCUE · ${t("common.library")}`}>
          <SpanishCueBrand variant="full" tone="light" />
        </Link>
        <Link className="premium-back" href="/">
          <span aria-hidden="true">←</span> {t("common.backToLibrary")}
        </Link>
        <LanguageSwitcher className="page-language" />
      </header>

      <main className="premium-layout" id="main-content" tabIndex={-1}>
        <section className="premium-story" aria-labelledby="premium-title">
          <div className="premium-kicker">
            <span aria-hidden="true">✦</span> {t("paywall.premiumClass")}
          </div>
          <h1 id="premium-title">
            {t("paywall.titleStart")} <em>{t("paywall.titleEmphasis")}</em>
          </h1>
          <p className="premium-lead">{t("paywall.lead")}</p>

          <div className="premium-proof" aria-label={t("paywall.benefitsAria")}>
            <span><b>{checkoutLive ? "∞" : "PRO"}</b> {checkoutLive ? t("paywall.unlimited") : locale === "es" ? "lanzamiento próximo" : "launching soon"}</span>
            <span><b>5</b> {t("paywall.contentRoutes")}</span>
            <span><b>A1–C2</b> {t("hero.levels")}</span>
          </div>

          <div className="premium-scene" aria-hidden="true">
            <div className="premium-scene-glow" />
            <img src="/brand/spanishcue-global-stage.webp" alt="" width="1672" height="941" />
            <img className="premium-scene-mascot" src="/brand/mascot/pointing.webp" alt="" width="900" height="1350" />
            <div className="premium-key-seal">
              <span>✦</span>
              <b>{t("paywall.open")}</b>
            </div>
            <div className="premium-scene-card">
              <span>{t("paywall.allInOne")}</span>
              <b>CHOOSE. OPEN. TEACH.</b>
            </div>
          </div>
        </section>

        <aside className="founder-card" aria-labelledby="founder-title">
          <div className="founder-card-shine" aria-hidden="true" />
          <div className="founder-badge">
            <span aria-hidden="true">◆</span> {sandbox ? "PAYPAL SANDBOX · TEST" : checkoutLive ? t("paywall.founderOffer") : locale === "es" ? "PRO · checkout no configurado" : "PRO · checkout not configured"}
          </div>
          <p className="founder-limit">{checkoutLive ? t("paywall.founderLimit") : locale === "es" ? "Reserva el precio previsto · sin pago hoy" : "Reserve the planned price · no payment today"}</p>
          <h2 id="founder-title">{checkoutLive ? t("paywall.subscriptionTitle") : locale === "es" ? "Toda la plataforma, cuando PRO abra." : "The whole platform, when PRO launches."}</h2>

          <div className="founder-price" aria-label={t("paywall.priceAria")}>
            <strong>{priceLabel}</strong>
            <span>{t("paywall.perMonth")}</span>
          </div>
          <p className="founder-price-copy">{checkoutLive ? t("paywall.priceCopy") : locale === "es" ? `Precio fundador previsto: ${priceLabel}/mes. El checkout público aún no está activo.` : `Planned Founder Price: ${priceLabel}/month. Public checkout is not active yet.`}</p>
          <dl className="paywall-billing-facts">
            {checkoutLive ? <>
              <div><dt>{locale === "es" ? "Facturación" : "Billing"}</dt><dd>{locale === "es" ? `${priceLabel} cada mes` : `${priceLabel} every month`}</dd></div>
              <div><dt>{locale === "es" ? "Renovación" : "Renewal"}</dt><dd>{locale === "es" ? "Automática hasta cancelar" : "Automatic until cancelled"}</dd></div>
              <div><dt>{locale === "es" ? "Cancelación" : "Cancellation"}</dt><dd>{locale === "es" ? "Online desde Mi cuenta" : "Online from My account"}</dd></div>
              <div><dt>{locale === "es" ? "Precio fundador" : "Founder Price"}</dt><dd>{locale === "es" ? "Mientras la misma suscripción siga activa" : "While the same subscription remains active"}</dd></div>
            </> : <>
              <div><dt>{locale === "es" ? "Estado" : "Status"}</dt><dd>{locale === "es" ? "Lanzamiento próximo" : "Launching soon"}</dd></div>
              <div><dt>{locale === "es" ? "Pago hoy" : "Payment today"}</dt><dd>{locale === "es" ? "Ninguno" : "None"}</dd></div>
              <div><dt>{locale === "es" ? "Reserva" : "Reservation"}</dt><dd>{locale === "es" ? "Sin tarjeta" : "No card"}</dd></div>
              <div><dt>{locale === "es" ? "Aviso" : "Notice"}</dt><dd>{locale === "es" ? "Antes de activar cobros" : "Before charges start"}</dd></div>
            </>}
          </dl>

          {requestedLesson && (
            <div className="premium-intended">
              <span>{t("paywall.aboutToOpen")}</span>
              <img src={requestedLesson.image} alt="" width="640" height="400" loading="lazy" />
              <b>{requestedLesson.title}</b>
              <small>{requestedLesson.level} · {translateCategory(locale, requestedLesson.category)}</small>
            </div>
          )}

          <ul className="founder-benefits">
            <li><span>✓</span><div><b>{t("paywall.allPremium")}</b><small>{t("paywall.allPremiumCopy")}</small></div></li>
            <li><span>✓</span><div><b>{t("paywall.screenReady")}</b><small>{t("paywall.screenReadyCopy")}</small></div></li>
            <li><span>✓</span><div><b>{t("paywall.noLimits")}</b><small>{t("paywall.noLimitsCopy")}</small></div></li>
          </ul>

          {checkoutLive ? <CheckoutButton signedIn={signedIn} returnTo={returnTo} /> : <FounderAccessForm defaultEmail={accountEmail} priceLabel={`${priceLabel}/${locale === "es" ? "mes" : "month"}`} returnTo={returnTo} />}
          <nav className="checkout-legal-links" aria-label={locale === "es" ? "Información legal y de privacidad" : "Legal and privacy information"}><Link href="/terms">{locale === "es" ? "Términos" : "Terms"}</Link><Link href="/privacy">{locale === "es" ? "Privacidad" : "Privacy"}</Link><Link href="/contact">{locale === "es" ? "Contacto" : "Contact"}</Link><Link href="/subscription-terms">{locale === "es" ? "Estado de suscripción" : "Subscription status"}</Link></nav>
          <MarketingLink
            cta={{ href: "/el-hotel-de-lo-imposible", labelKey: "nav.viewLesson", event: "cta_click", intent: "view_lesson" }}
            className="paywall-demo-link"
            placement="paywall_secondary"
          >
            {t("nav.viewLesson")} {locale === "es" ? "gratis" : "for free"} →
          </MarketingLink>

          <div className="founder-session">
            {signedIn ? (
              <p>{t("paywall.sessionReady")} <a href="/cuenta">{t("paywall.reviewAccount")}</a></p>
            ) : (
              <p>{t("paywall.alreadyPremium")} <a href={signInHref}>{t("paywall.loginTeacher")}</a></p>
            )}
          </div>
        </aside>
      </main>

      <footer className="premium-footer">
        <SpanishCueBrand variant="compact" tone="light" />
        <nav aria-label={locale === "es" ? "Legal" : "Legal"}><Link href="/privacy">{locale === "es" ? "Privacidad" : "Privacy"}</Link><Link href="/terms">{locale === "es" ? "Términos" : "Terms"}</Link><Link href="/contact">{locale === "es" ? "Contacto" : "Contact"}</Link></nav>
        <p>{t("paywall.footer")}</p>
      </footer>
    </div>
  );
}
