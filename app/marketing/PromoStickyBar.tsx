"use client";

import { useEffect, useState } from "react";
import { promoWeekActive } from "../promo-config";
import { trackMarketingEvent } from "./analytics";
import "./promo-sticky-bar.css";

const CLOSED_KEY = "sc-promo-bar-closed";
/** The free worksheets sections stay free of offers (outreach promise); the social twin keeps only its soft CTA. */
const QUIET_PATHS = ["/material-ele/fichas-gratis", "/material-ele/fichas-para-profes"];

/**
 * Fixed offer bar at the bottom of the public SEO pages (owner, 2026-11-27: more aggressive CTAs).
 * Browser only, so edge-cached HTML stays identical for everyone. It appears once the reader has
 * scrolled past the first screen or after 6 s, never over the cookie banner, and a close lasts for
 * the browser session. It follows the page language, like the email popup.
 */
export default function PromoStickyBar() {
  const [locale, setLocale] = useState<"es" | "en" | null>(null);
  useEffect(() => {
    const path = window.location.pathname;
    if (QUIET_PATHS.some((quiet) => path.startsWith(quiet))) return;
    const lang = document.querySelector("main[lang]")?.getAttribute("lang") || document.documentElement.lang || "es";
    const pageLocale = lang.toLowerCase().startsWith("en") ? "en" : "es";
    try { if (window.sessionStorage.getItem(CLOSED_KEY)) return; } catch { /* private mode */ }
    let waiting = 0;
    const show = () => {
      cleanup();
      if (document.querySelector(".consent-panel")) { waiting = window.setTimeout(show, 1500); return; }
      setLocale(pageLocale);
    };
    const onScroll = () => { if (window.scrollY > window.innerHeight * 0.6) show(); };
    const timer = window.setTimeout(show, 6000);
    window.addEventListener("scroll", onScroll, { passive: true });
    function cleanup() { window.clearTimeout(timer); window.removeEventListener("scroll", onScroll); }
    return () => { cleanup(); window.clearTimeout(waiting); };
  }, []);
  if (!locale) return null;
  const es = locale === "es";
  const promo = promoWeekActive();
  const close = () => {
    try { window.sessionStorage.setItem(CLOSED_KEY, "1"); } catch { /* ignore */ }
    setLocale(null);
  };
  const title = promo
    ? (es ? "SpanishCue PRO: 10 días por US$0,99" : "SpanishCue PRO: 10 days for US$0.99")
    : (es ? "Todas las clases listas para dar" : "Every lesson ready to teach");
  const copy = promo
    ? (es ? "Todas las clases, todos los niveles. Luego US$19,90 al mes · Cancelas cuando quieras." : "Every lesson, every level. Then US$19.90/month · Cancel anytime.")
    : (es ? "Gramática, conversación y comprensión auditiva de A1 a C2 por US$19,90 al mes." : "Grammar, conversation and listening from A1 to C2 for US$19.90/month.");
  const button = promo ? (es ? "Probar por US$0,99 →" : "Try it for US$0.99 →") : (es ? "Ver planes →" : "See plans →");
  return (
    <aside className="promo-sticky-bar" aria-label="SpanishCue PRO">
      <p><b>{title}</b><span>{copy}</span></p>
      <a
        href="/pricing"
        onClick={() => trackMarketingEvent("cta_click", { placement: es ? "seo_sticky_bar" : "seo_sticky_bar_en", cta_type: "buy", destination: "/pricing" })}
      >
        {button}
      </a>
      <button type="button" onClick={close} aria-label={es ? "Cerrar" : "Close"}>×</button>
    </aside>
  );
}
