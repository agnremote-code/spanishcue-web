"use client";

import { trackMarketingEvent } from "./analytics";
import "./promo-hero-cta.css";

/**
 * Promo week hero call to action (owner, 2026-11-18): one clean button and one
 * small line with the renewal price and a link to a free lesson, as on EnglishCue.
 * The checkout itself carries the full renewal notice.
 */
export default function PromoHeroCta({ locale, href, freeHref, placement, tone = "dark" }: {
  locale: "es" | "en";
  href: string;
  freeHref: string;
  placement: string;
  tone?: "dark" | "light";
}) {
  const es = locale === "es";
  return <div className={`promo-hero-cta promo-hero-cta-${tone}`}>
    <a
      className="promo-hero-cta-button"
      href={href}
      onClick={() => trackMarketingEvent("cta_click", { placement, cta_type: "buy", destination: href })}
    >
      <span>{es ? "PROBAR PRO · US$0,99 LOS PRIMEROS 10 DÍAS" : "TRY PRO · US$0.99 FOR 10 DAYS"}</span>
      <b aria-hidden="true">→</b>
    </a>
    <p className="promo-hero-cta-note">
      {es ? "Luego US$19,90/mes · Cancelas cuando quieras · " : "Then US$19.90/month · Cancel anytime · "}
      <a
        href={freeHref}
        onClick={() => trackMarketingEvent("cta_click", { placement: `${placement}_free`, cta_type: "view_lesson", destination: freeHref })}
      >
        {es ? "O prueba una clase gratis" : "Or try a free lesson"}
      </a>
    </p>
  </div>;
}
