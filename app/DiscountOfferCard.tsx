"use client";

import { useEffect, useState } from "react";
import { useI18n } from "./i18n/LocaleProvider";
import { discount10Visible, type DiscountOfferStatus } from "./discount-offer";
import "./discount-offer.css";

/** «Obtén un 10% de descuento en tu próxima suscripción» (owner, 2026-11-24): a quiet, dismissible
 * card for signed-in teachers without PRO. It opens the checkout with the first month 10% off.
 * While the US$0.99 promo week is open to this teacher, that better offer wins and this card hides. */

const dismissKey = "spanishcue-discount10-dismissed";
const dismissDays = 7;

function dismissedRecently() {
  try {
    const at = Number(window.localStorage.getItem(dismissKey));
    return Number.isFinite(at) && at > 0 && Date.now() - at < dismissDays * 86400000;
  } catch { return false; }
}

export default function DiscountOfferCard({ preview = false }: { preview?: boolean }) {
  const { locale } = useI18n();
  const es = locale === "es";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (dismissedRecently()) return;
    let active = true;
    fetch("/api/billing/founder-status", { credentials: "same-origin" })
      .then((response) => response.ok ? response.json() as Promise<DiscountOfferStatus> : null)
      .then((status) => { if (active) setVisible(discount10Visible(status, preview)); })
      .catch(() => undefined);
    return () => { active = false; };
  }, [preview]);

  if (!visible) return null;
  const dismiss = () => {
    try { window.localStorage.setItem(dismissKey, String(Date.now())); } catch {}
    setVisible(false);
  };

  return <aside className="discount-offer" aria-label={es ? "Descuento del 10 %" : "10% off"}>
    <span className="discount-offer-badge" aria-hidden="true">−10%</span>
    <div className="discount-offer-copy">
      <h2>{es ? "Obtén un 10 % de descuento en tu próxima suscripción" : "Get 10% off your next subscription"}</h2>
      <p>{es ? "Disfruta de más tipos de actividades, más funciones y más diversión en el aula." : "Enjoy more kinds of activities, more features and more fun in class."}</p>
    </div>
    <a className="discount-offer-cta" href="/acceso?oferta=descuento10">{es ? "Reclama mi descuento" : "Claim my discount"}</a>
    <button className="discount-offer-close" type="button" onClick={dismiss} aria-label={es ? "Ocultar aviso" : "Dismiss"}>×</button>
  </aside>;
}
