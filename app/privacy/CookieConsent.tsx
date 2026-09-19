"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/LocaleProvider";
import {
  OPEN_CONSENT_EVENT,
  readConsent,
  saveConsent,
  type ConsentState,
} from "./consent";

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  const { locale } = useI18n();
  return <button className={className} type="button" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
    {locale === "es" ? "Configurar privacidad" : "Privacy settings"}
  </button>;
}

export default function CookieConsent() {
  const { locale } = useI18n();
  const [visible, setVisible] = useState(false);
  const [configure, setConfigure] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const current = readConsent();
    const timer = window.setTimeout(() => {
      if (!current) setVisible(true);
      else {
        setPreferences(current.preferences);
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
    }, 0);
    const open = () => {
      const latest = readConsent();
      setPreferences(latest?.preferences ?? false);
      setAnalytics(latest?.analytics ?? false);
      setMarketing(latest?.marketing ?? false);
      setConfigure(true);
      setVisible(true);
      requestAnimationFrame(() => headingRef.current?.focus());
    };
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => { window.clearTimeout(timer); window.removeEventListener(OPEN_CONSENT_EVENT, open); };
  }, []);

  if (!visible) return null;
  const commit = (choice: Pick<ConsentState, "preferences" | "analytics" | "marketing">) => {
    saveConsent(choice);
    setVisible(false);
    setConfigure(false);
  };
  const es = locale === "es";
  return <section className="consent-panel" role="dialog" aria-modal="false" aria-labelledby="consent-title" aria-describedby="consent-copy">
    <div className="consent-copy">
      <span>SPANISHCUE · {es ? "PRIVACIDAD" : "PRIVACY"}</span>
      <h2 id="consent-title" ref={headingRef} tabIndex={-1}>{es ? "Tú decides qué datos opcionales usamos." : "You decide which optional data we use."}</h2>
      <p id="consent-copy">{es
        ? "Las funciones esenciales mantienen la sesión, el idioma y la seguridad. Analítica y marketing permanecen apagados hasta que los aceptes."
        : "Essential functions keep your session, language and security working. Analytics and marketing stay off until you accept them."}</p>
    </div>
    {configure && <div className="consent-options">
      <label><span><b>{es ? "Esenciales" : "Essential"}</b><small>{es ? "Sesión, seguridad, compra e idioma solicitado." : "Session, security, checkout and requested language."}</small></span><input type="checkbox" checked disabled aria-label={es ? "Cookies esenciales siempre activas" : "Essential cookies always on"} /></label>
      <label><span><b>{es ? "Preferencias" : "Preferences"}</b><small>{es ? "Recuerda opciones no esenciales de interfaz." : "Remembers non-essential interface choices."}</small></span><input type="checkbox" checked={preferences} onChange={(event) => setPreferences(event.target.checked)} /></label>
      <label><span><b>{es ? "Analítica" : "Analytics"}</b><small>{es ? "Mide uso y rendimiento para mejorar el producto." : "Measures use and performance to improve the product."}</small></span><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /></label>
      <label><span><b>{es ? "Marketing" : "Marketing"}</b><small>{es ? "Permite atribución de campañas y publicidad futura." : "Allows campaign attribution and future advertising."}</small></span><input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} /></label>
    </div>}
    <div className="consent-actions">
      <button type="button" onClick={() => commit({ preferences: true, analytics: true, marketing: true })}>{es ? "Aceptar" : "Accept"}</button>
      <button type="button" onClick={() => commit({ preferences: false, analytics: false, marketing: false })}>{es ? "Rechazar" : "Reject"}</button>
      {configure
        ? <button type="button" onClick={() => commit({ preferences, analytics, marketing })}>{es ? "Guardar selección" : "Save selection"}</button>
        : <button type="button" onClick={() => setConfigure(true)}>{es ? "Configurar" : "Configure"}</button>}
    </div>
  </section>;
}
