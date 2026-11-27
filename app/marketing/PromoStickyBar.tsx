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
 * the browser session. Spanish pages only until the owner approves the English copy.
 */
export default function PromoStickyBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const path = window.location.pathname;
    if (QUIET_PATHS.some((quiet) => path.startsWith(quiet))) return;
    const lang = document.querySelector("main[lang]")?.getAttribute("lang") || document.documentElement.lang || "es";
    if (!lang.toLowerCase().startsWith("es")) return;
    try { if (window.sessionStorage.getItem(CLOSED_KEY)) return; } catch { /* private mode */ }
    let waiting = 0;
    const show = () => {
      cleanup();
      if (document.querySelector(".consent-panel")) { waiting = window.setTimeout(show, 1500); return; }
      setOpen(true);
    };
    const onScroll = () => { if (window.scrollY > window.innerHeight * 0.6) show(); };
    const timer = window.setTimeout(show, 6000);
    window.addEventListener("scroll", onScroll, { passive: true });
    function cleanup() { window.clearTimeout(timer); window.removeEventListener("scroll", onScroll); }
    return () => { cleanup(); window.clearTimeout(waiting); };
  }, []);
  if (!open) return null;
  const promo = promoWeekActive();
  const close = () => {
    try { window.sessionStorage.setItem(CLOSED_KEY, "1"); } catch { /* ignore */ }
    setOpen(false);
  };
  return (
    <aside className="promo-sticky-bar" aria-label="SpanishCue PRO">
      <p>
        <b>{promo ? "SpanishCue PRO: 10 días por US$0,99" : "Todas las clases listas para dar"}</b>
        <span>{promo ? "Todas las clases, todos los niveles. Luego US$19,90 al mes · Cancelas cuando quieras." : "Gramática, conversación y comprensión auditiva de A1 a C2 por US$19,90 al mes."}</span>
      </p>
      <a
        href="/pricing"
        onClick={() => trackMarketingEvent("cta_click", { placement: "seo_sticky_bar", cta_type: "buy", destination: "/pricing" })}
      >
        {promo ? "Probar por US$0,99 →" : "Ver planes →"}
      </a>
      <button type="button" onClick={close} aria-label="Cerrar">×</button>
    </aside>
  );
}
