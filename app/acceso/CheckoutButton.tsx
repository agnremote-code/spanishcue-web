"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "../i18n/LocaleProvider";
import { trackMarketingEvent } from "../marketing/analytics";

type FounderStatus = { limit: number; remaining: number; available: boolean; checkoutLive: boolean; mode: "sandbox" | "live" };

export default function CheckoutButton({ signedIn, returnTo }: { signedIn: boolean; returnTo: string }) {
  const { locale, t } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");
  const [founder, setFounder] = useState<FounderStatus | null | undefined>(undefined);
  const loginPath = `/ingresar?modo=registro&returnTo=${encodeURIComponent(`/acceso?returnTo=${encodeURIComponent(returnTo)}`)}`;

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/billing/founder-status", { credentials: "same-origin", signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((body: unknown) => {
        if (body && typeof body === "object" && "remaining" in body && typeof body.remaining === "number") {
          setFounder(body as FounderStatus);
        }
      })
      .catch(() => setFounder(null));
    return () => controller.abort();
  }, []);

  async function checkout() {
    trackMarketingEvent("cta_click", { placement: "paywall", cta_type: "subscribe", signed_in: signedIn });
    if (!signedIn) { window.location.assign(loginPath); return; }
    if (!founder?.available || !founder.checkoutLive) return;
    trackMarketingEvent("checkout_start", { plan: "founder-1000-usd15-monthly", value: 15, currency: "USD" });
    setStatus("loading"); setMessage("");
    try {
      const response = await fetch("/api/billing/checkout", {
        method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" }, body: JSON.stringify({ returnTo }),
      });
      const body = await response.json() as { approvalUrl?: unknown; error?: unknown };
      if (!response.ok || typeof body.approvalUrl !== "string") {
        throw new Error(typeof body.error === "string" ? body.error : t("checkout.error"));
      }
      window.location.assign(body.approvalUrl);
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : t("checkout.error"));
    }
  }

  if (founder === undefined) return <div className="checkout-action" aria-live="polite"><p>{locale === "es" ? "Comprobando disponibilidad…" : "Checking availability…"}</p></div>;

  if (!founder?.checkoutLive) return <div className="checkout-action">
    <strong className="checkout-availability closed">{locale === "es" ? "Lanzamiento próximo · sin cobros todavía" : "Launching soon · no charges yet"}</strong>
    <Link className="checkout-free-link" href="/el-hotel-de-lo-imposible">{locale === "es" ? "Abrir una clase gratis" : "Open a free lesson"} →</Link>
    <p>{locale === "es" ? "Este enlace no inicia una suscripción." : "This link does not start a subscription."}</p>
  </div>;

  return <div className="checkout-action">
    {founder.mode === "sandbox" && <strong className="checkout-availability closed">{locale === "es" ? "PRUEBA SANDBOX · no es un cobro real" : "SANDBOX TEST · not a real charge"}</strong>}
    {founder && <strong className={`checkout-availability ${founder.available && founder.checkoutLive ? "" : "closed"}`}>
      {founder.available
        ? locale === "es" ? `${founder.remaining} de ${founder.limit} lugares disponibles` : `${founder.remaining} of ${founder.limit} places available`
        : locale === "es" ? "Oferta fundadora completa" : "Founder offer fully claimed"}
    </strong>}
    <button type="button" onClick={checkout} disabled={status === "loading" || !founder.available}>
      {status === "loading"
        ? t("checkout.openingPayPal")
        : !founder.available
          ? locale === "es" ? "Oferta completa" : "Offer full"
          : signedIn
            ? (locale === "es" ? "Activar PRO · US$15/mes" : "Activate PRO · US$15/month")
            : (locale === "es" ? "Crear cuenta y activar PRO · US$15/mes" : "Create account and activate PRO · US$15/month")}
    </button>
    <p>{locale === "es" ? "Pago seguro · acceso inmediato · pausá o cancelá cuando quieras." : "Secure payment · instant access · pause or cancel anytime."}</p>
    {status === "error" && <small role="alert">{message}</small>}
  </div>;
}
