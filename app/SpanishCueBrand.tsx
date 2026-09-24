"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useI18n } from "./i18n/LocaleProvider";
import type { MessageKey } from "./i18n/messages";
import { trackMarketingEvent } from "./marketing/analytics";
import { CookieSettingsButton } from "./privacy/CookieConsent";

const countries: ReadonlyArray<readonly [string, MessageKey]> = [
  ["🇦🇷", "country.argentina"],
  ["🇺🇾", "country.uruguay"],
  ["🇨🇱", "country.chile"],
  ["🇵🇾", "country.paraguay"],
  ["🇧🇴", "country.bolivia"],
  ["🇵🇪", "country.peru"],
  ["🇪🇨", "country.ecuador"],
  ["🇨🇴", "country.colombia"],
  ["🇻🇪", "country.venezuela"],
  ["🇵🇦", "country.panama"],
  ["🇨🇷", "country.costaRica"],
  ["🇳🇮", "country.nicaragua"],
  ["🇭🇳", "country.honduras"],
  ["🇸🇻", "country.elSalvador"],
  ["🇬🇹", "country.guatemala"],
  ["🇲🇽", "country.mexico"],
  ["🇨🇺", "country.cuba"],
  ["🇩🇴", "country.dominicanRepublic"],
  ["🇵🇷", "country.puertoRico"],
  ["🇪🇸", "country.spain"],
  ["🇬🇶", "country.equatorialGuinea"],
];
export const SPANISH_SPEAKING_COUNTRY_COUNT = countries.length;

export type SpanishCueBrandVariant = "full" | "compact" | "micro";

function SpanishCueMonogram({className=""}:{className?:string}) {
  return <svg className={`sc-monogram ${className}`} viewBox="0 0 52 52" aria-hidden="true">
    <path className="sc-monogram-c" d="M39 12.5a18 18 0 1 0 0 27" />
    <path className="sc-monogram-s" d="M29.5 15.5c-2.2-2.2-9.5-2.7-12.2.9-3.1 4.2 1.5 6.8 6 7.9 5.4 1.3 9.1 3.5 7 8.4-2.3 5.3-11 4.6-14.7 1" />
    <path className="sc-monogram-pencil" d="M36.5 7.5 20.2 43.2l-4.9 2.6 1-5.5L32.6 5Z" />
    <path className="sc-monogram-pencil-line" d="m18 39.6 4.1 1.9M32.5 9l4 1.9" />
    <circle cx="41.2" cy="38.8" r="3.2" />
  </svg>;
}

export function SpanishCueBrand({variant="full",tone="auto",context,className=""}:{variant?:SpanishCueBrandVariant;tone?:"auto"|"light"|"dark";context?:string;className?:string}) {
  if(variant==="micro") return <span className={`sc-brand-system micro ${tone} ${className}`} role="img" aria-label="SPANISHCUE"><SpanishCueMonogram /></span>;
  return <span className={`sc-brand-system sc-wordmark ${variant} ${tone} ${className}`}>
    {variant==="full"?<img className="sc-brand-mascot" src="/brand/mascot/portrait.webp" alt="" width="512" height="512"/>:<SpanishCueMonogram />}
    <span className="sc-brand-name"><span><b>SPANISH</b>CUE</span>{context?<small>{context}</small>:variant==="full"?<small>CHOOSE. OPEN. TEACH.</small>:null}</span>
  </span>;
}

export function SpanishCueWordmark({ compact = false }: { compact?: boolean }) {
  return <SpanishCueBrand variant={compact?"compact":"full"} />;
}

export function SpanishCueHero() {
  const { locale, t } = useI18n();
  const openSamples = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    trackMarketingEvent("cta_click", {
      placement: "hero_primary",
      cta_type: "view_lesson",
      destination: "#free-lessons",
    });
    const target = document.getElementById("free-lessons");
    if (!target) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", "#free-lessons");
  };
  return (
    <section className="sc-hero" id="main-content" tabIndex={-1} aria-labelledby="sc-hero-title">
      <div className="sc-hero-art" aria-hidden="true">
        <img
          src="/brand/spanishcue-hero-online.webp"
          alt=""
          width="1672"
          height="941"
          fetchPriority="high"
        />
      </div>
      <div className="sc-hero-copy">
        <p className="sc-hero-kicker">{t("hero.kicker")}</p>
        <h1 id="sc-hero-title">
          {t("hero.titleStart")} <em>{t("hero.titleEmphasis")}</em>
        </h1>
        <p className="sc-hero-lead">{t("hero.lead")}</p>
        <div className="sc-hero-actions">
          <div className="sc-hero-cta-anchor">
            <a href="#free-lessons" className="sc-hero-primary" onClick={openSamples}>
              {locale === "es" ? "PROBAR UNA CLASE GRATIS" : "TRY A FREE LESSON"}
            </a>
            <div className="sc-mascot-cue" aria-hidden="true">
              <img src="/brand/mascot/pointing.webp" alt="" width="900" height="1350" />
            </div>
          </div>
        </div>
        <p className="sc-hero-reassurance">{locale === "es" ? "Gratis · Sin tarjeta · Clase real incluida" : "Free · No card · Real lesson included"}</p>
      </div>
    </section>
  );
}

export function SpanishCueGlobalStage() {
  const { t } = useI18n();
  return (
    <section className="sc-global" aria-labelledby="sc-global-title">
      <div className="sc-global-art">
        <img
          src="/brand/spanishcue-global-stage.webp"
          alt="Seis mujeres adultas con estilismo editorial futurista representan distintas regiones del mundo hispanohablante"
          width="1672"
          height="941"
          loading="lazy"
        />
      </div>
      <div className="sc-global-copy">
        <span>{t("global.kicker")}</span>
        <h2 id="sc-global-title">{t("global.title")}</h2>
        <p>{t("global.copy")}</p>
        <div className="sc-region-tags" aria-label={t("global.regionsAria")}>
          <b>{t("global.southernCone")}</b>
          <b>{t("global.andes")}</b>
          <b>{t("global.caribbean")}</b>
          <b>{t("global.centralAmerica")}</b>
          <b>{t("global.mexico")}</b>
          <b>{t("global.spainGuinea")}</b>
        </div>
      </div>
      <div className="sc-country-marquee" aria-label={t("global.countriesAria")}>
        <div>
          {countries.map(([flag, key]) => (
            <span key={key}>
              <i aria-hidden="true">{flag}</i>
              {t(key)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpanishCueFooter() {
  const { locale, t } = useI18n();
  const es = locale === "es";
  return (
    <footer className="sc-site-footer">
      <div className="sc-footer-brand"><SpanishCueWordmark compact /><p>{t("footer.tagline")}</p><small>CHOOSE. OPEN. TEACH.</small></div>
      <div className="sc-footer-links">
        <nav aria-label={es ? "Producto" : "Product"}><b>{es ? "Producto" : "Product"}</b><Link href="/#library-results">{es ? "Biblioteca" : "Library"}</Link><Link href="/#how-it-works">{es ? "Cómo funciona" : "How it works"}</Link><Link href="/pricing">{es ? "Precios" : "Pricing"}</Link><Link href="/cuenta">{es ? "Mi cuenta" : "My account"}</Link></nav>
        <nav aria-label={es ? "Recursos" : "Resources"}><b>{es ? "Recursos" : "Resources"}</b><Link href="/ele-recursos-profesores">{es ? "Recursos ELE" : "ELE resources"}</Link><Link href="/spanish-teacher-resources">{es ? "Recursos docentes" : "Teacher resources"}</Link><Link href="/spanish-conversation-activities">{es ? "Conversación" : "Conversation"}</Link><Link href="/spanish-grammar-lessons">{es ? "Gramática" : "Grammar"}</Link></nav>
        <nav aria-label={es ? "Cuenta" : "Account"}><b>{es ? "Cuenta" : "Account"}</b><Link href="/ingresar?modo=registro">{es ? "Crear cuenta gratis" : "Create free account"}</Link><Link href="/ingresar?modo=entrar">{es ? "Iniciar sesión" : "Sign in"}</Link><Link href="/cuenta">{es ? "Gestionar suscripción" : "Manage subscription"}</Link></nav>
        <nav aria-label={es ? "Legal y privacidad" : "Legal and privacy"}><b>{es ? "Legal y privacidad" : "Legal and privacy"}</b><Link href="/terms">{es ? "Términos" : "Terms"}</Link><Link href="/privacy">{es ? "Privacidad" : "Privacy"}</Link><Link href="/cookies">Cookies</Link><Link href="/contact">{es ? "Contacto / Soporte" : "Contact / Support"}</Link><Link href="/subscription-terms">{es ? "Suscripción" : "Subscription"}</Link><Link href="/refunds">{es ? "Reembolsos" : "Refunds"}</Link><Link href="/legal">{es ? "Aviso legal" : "Legal notice"}</Link><CookieSettingsButton /></nav>
      </div>
      <p className="sc-footer-disclaimer">{es ? "SPANISHCUE utiliza el PCIC como referencia curricular. No está afiliado ni respaldado por el Instituto Cervantes." : "SPANISHCUE uses the PCIC as a curriculum reference. It is not affiliated with or endorsed by Instituto Cervantes."}</p>
      <div className="sc-footer-bottom"><span>{t("footer.copy")}</span><span>SPANISHCUE · {es ? "Clases visuales para profesores de español" : "Visual lessons for Spanish teachers"}</span></div>
    </footer>
  );
}
