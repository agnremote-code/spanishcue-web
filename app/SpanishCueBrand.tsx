"use client";

import Link from "next/link";
import { useI18n } from "./i18n/LocaleProvider";
import type { MessageKey } from "./i18n/messages";
import { trackMarketingEvent } from "./marketing/analytics";
import { CookieSettingsButton } from "./privacy/CookieConsent";
import ArsPrice from "./marketing/ArsPrice";

/** Where «Probar una clase gratis» goes: a free grammar class (ID 350), which asks for a free account after 30 s. The 3D demos stay one tap away. */
const FREE_DEMO_PATH = "/gramatica/indefinido-e-imperfecto";

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

/** The official SC logo (blue SC with gold detail), used everywhere the brand mark appears. */
export const SPANISHCUE_LOGO_SRC = "/brand/spanishcue-logo.png";

function SpanishCueMonogram({className=""}:{className?:string}) {
  return <img className={`sc-monogram ${className}`} src={SPANISHCUE_LOGO_SRC} alt="" width="256" height="256" aria-hidden="true" />;
}

export function SpanishCueBrand({variant="full",tone="auto",context,className=""}:{variant?:SpanishCueBrandVariant;tone?:"auto"|"light"|"dark";context?:string;className?:string}) {
  if(variant==="micro") return <span className={`sc-brand-system micro ${tone} ${className}`} role="img" aria-label="SPANISHCUE"><SpanishCueMonogram /></span>;
  return <span className={`sc-brand-system sc-wordmark ${variant} ${tone} ${className}`}>
    <SpanishCueMonogram />
    <span className="sc-brand-name"><span><b>SPANISH</b>CUE</span>{context?<small>{context}</small>:variant==="full"?<small>CHOOSE. OPEN. TEACH.</small>:null}</span>
  </span>;
}

export function SpanishCueWordmark({ compact = false }: { compact?: boolean }) {
  return <SpanishCueBrand variant={compact?"compact":"full"} />;
}

/**
 * The teacher hero (image, headline, free-lesson CTA). The home page renders
 * it unchanged; /para-profesores passes its own kicker and puts it inside the
 * H1 so each landing has a distinct heading with the same composition.
 */
export function SpanishCueHero({ kicker, kickerInHeading = false, pricing = false }: { kicker?: string; kickerInHeading?: boolean; pricing?: boolean } = {}) {
  const { locale, t } = useI18n();
  const kickerText = kicker ?? t("hero.kicker");
  // The free lesson is Noche abierta: the centre is free, the districts are PRO.
  const openSamples = () => {
    trackMarketingEvent("cta_click", {
      placement: "hero_primary",
      cta_type: "view_lesson",
      destination: FREE_DEMO_PATH,
    });
    trackMarketingEvent("teacher_demo_started", { placement: "hero_primary" });
  };
  return (
    <section className={pricing ? "sc-hero sc-hero--sell" : "sc-hero"} id="main-content" tabIndex={-1} aria-labelledby="sc-hero-title">
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
        {kickerInHeading ? (
          <h1 id="sc-hero-title">
            <span className="sc-hero-kicker">{kickerText}</span>
            {t("hero.titleStart")} <em>{t("hero.titleEmphasis")}</em>
          </h1>
        ) : (
          <>
            <p className="sc-hero-kicker">{kickerText}</p>
            <h1 id="sc-hero-title">
              {t("hero.titleStart")} <em>{t("hero.titleEmphasis")}</em>
            </h1>
          </>
        )}
        <p className="sc-hero-lead">{t("hero.lead")}</p>
        <div className="sc-hero-actions">
          <div className="sc-hero-cta-anchor">
            <a href={FREE_DEMO_PATH} className="sc-hero-primary" onClick={openSamples}>
              {locale === "es" ? "PROBAR UNA CLASE GRATIS" : "TRY A FREE LESSON"}
            </a>
            <div className="sc-mascot-cue" aria-hidden="true">
              <img src="/brand/mascot/pointing.webp" alt="" width="900" height="1350" />
            </div>
          </div>
          {pricing && (
            <a
              href="/pricing"
              className="sc-hero-secondary"
              onClick={() => trackMarketingEvent("cta_click", { placement: "hero_secondary", cta_type: "buy", destination: "/pricing" })}
            >
              {locale === "es" ? "Ver planes PRO" : "See PRO plans"}
            </a>
          )}
        </div>
        <p className="sc-hero-reassurance">{locale === "es" ? "Gratis · Sin tarjeta · Clase real incluida" : "Free · No card · Real lesson included"}</p>
        {pricing && (
          <p className="sc-hero-price">
            {locale === "es"
              ? <>Todo PRO: <b>US$19,90/mes</b> o <b>US$150/año</b> <span className="sc-hero-save">Ahorras 37 %</span></>
              : <>Full PRO: <b>US$19.90/month</b> or <b>US$150/year</b> <span className="sc-hero-save">Save 37%</span></>}
            <ArsPrice usd={19.9} className="sc-hero-ars" />
          </p>
        )}
        {pricing && (
          <p className="sc-hero-more">
            {locale === "es" ? "Prueba también gratis:" : "Also free to try:"}{" "}
            <a href="/demo/hospital-san-casi-vivo" onClick={() => trackMarketingEvent("cta_click", { placement: "hero_more_hospital", cta_type: "view_lesson", destination: "/demo/hospital-san-casi-vivo" })}>Hospital San Casi Vivo (3D)</a>
            {" · "}
            <a href="/demo/noche-abierta" onClick={() => trackMarketingEvent("cta_click", { placement: "hero_more_noche", cta_type: "view_lesson", destination: "/demo/noche-abierta" })}>Noche abierta (3D)</a>
          </p>
        )}
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
        <nav aria-label={es ? "Producto" : "Product"}><b>{es ? "Producto" : "Product"}</b><Link href="/#library-results">{es ? "Biblioteca" : "Library"}</Link><Link href="/#how-it-works">{es ? "Cómo funciona" : "How it works"}</Link><Link href="/para-profesores">{es ? "Para profesores" : "For teachers"}</Link><Link href="/aprender-espanol">{es ? "Aprender español" : "Learn Spanish"}</Link><Link href="/pricing">{es ? "Precios" : "Pricing"}</Link><Link href="/cuenta">{es ? "Mi cuenta" : "My account"}</Link><Link href="/about">{es ? "Sobre SpanishCue" : "About SpanishCue"}</Link><Link href="/partners">Partners</Link><Link href="/zeely">{es ? "Kit de marca" : "Brand kit"}</Link></nav>
        <nav aria-label={es ? "Recursos" : "Resources"}><b>{es ? "Recursos" : "Resources"}</b><Link href="/material-ele">Material ELE</Link><Link href="/ele-recursos-profesores">{es ? "Recursos ELE" : "ELE resources"}</Link><Link href="/spanish-teacher-resources">{es ? "Recursos docentes" : "Teacher resources"}</Link><Link href="/spanish-conversation-activities">{es ? "Conversación" : "Conversation"}</Link><Link href="/spanish-conversation-questions">{es ? "Preguntas de conversación" : "Conversation questions"}</Link><Link href="/spanish-grammar-lessons">{es ? "Gramática" : "Grammar"}</Link><Link href="/resources">{es ? "Biblioteca de clases" : "Lesson library"}</Link><Link href="/guides">{es ? "Guías para profes" : "Teaching guides"}</Link><Link href="/autoestudio">Autoestudio</Link></nav>
        <nav aria-label={es ? "Cuenta" : "Account"}><b>{es ? "Cuenta" : "Account"}</b><Link href="/ingresar?modo=registro">{es ? "Crear cuenta gratis" : "Create free account"}</Link><Link href="/ingresar?modo=entrar">{es ? "Iniciar sesión" : "Sign in"}</Link><Link href="/cuenta">{es ? "Gestionar suscripción" : "Manage subscription"}</Link></nav>
        <nav aria-label={es ? "Legal y privacidad" : "Legal and privacy"}><b>{es ? "Legal y privacidad" : "Legal and privacy"}</b><Link href="/terms">{es ? "Términos" : "Terms"}</Link><Link href="/privacy">{es ? "Privacidad" : "Privacy"}</Link><Link href="/cookies">Cookies</Link><Link href="/contact">{es ? "Contacto / Soporte" : "Contact / Support"}</Link><Link href="/subscription-terms">{es ? "Suscripción" : "Subscription"}</Link><Link href="/refunds">{es ? "Reembolsos" : "Refunds"}</Link><Link href="/legal">{es ? "Aviso legal" : "Legal notice"}</Link><CookieSettingsButton /></nav>
      </div>
      <p className="sc-footer-disclaimer">{es ? "SPANISHCUE utiliza el PCIC como referencia curricular. No está afiliado ni respaldado por el Instituto Cervantes." : "SPANISHCUE uses the PCIC as a curriculum reference. It is not affiliated with or endorsed by Instituto Cervantes."}</p>
      <div className="sc-footer-bottom"><span>{t("footer.copy")}</span><span>SPANISHCUE · {es ? "Clases visuales para profesores de español" : "Visual lessons for Spanish teachers"}</span></div>
    </footer>
  );
}
