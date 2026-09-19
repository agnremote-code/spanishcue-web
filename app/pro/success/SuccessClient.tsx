"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useI18n } from "../../i18n/LocaleProvider";
import { trackMarketingEvent } from "../../marketing/analytics";
import { CONSENT_EVENT, consentFor } from "../../privacy/consent";

const measurementConfigured = /^G-[A-Z0-9]+$/i.test(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || "");

export default function SuccessClient({ subscriptionId, returnTo }: { subscriptionId: string; returnTo: string }) {
  const { locale, t } = useI18n();
  const [state, setState] = useState<"checking" | "confirmed" | "pending" | "error">(subscriptionId ? "checking" : "pending");
  const conversionChecked = useRef(false);
  const reconcile = useCallback(async () => {
    if (!subscriptionId) return;
    try {
      const response = await fetch("/api/billing/refresh", {
        method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" },
        body: JSON.stringify({ subscriptionId }),
      });
      const body = await response.json() as { accessConfirmed?: unknown; pending?: unknown };
      if (response.status === 401 || response.status === 403 || response.status === 404 || response.status === 409) {
        setState("error");
      } else {
        setState(body.accessConfirmed === true ? "confirmed" : "pending");
      }
    } catch {
      setState("error");
    }
  }, [subscriptionId]);

  useEffect(() => { if (subscriptionId) void Promise.resolve().then(reconcile); }, [reconcile, subscriptionId]);

  useEffect(() => {
    if (state !== "confirmed" || conversionChecked.current || !measurementConfigured) return;
    let cancelled = false;
    let attempts = 0;
    let retry: number | undefined;
    const attempt = async () => {
      if (cancelled || conversionChecked.current || !consentFor("analytics")) return;
      attempts += 1;
      try {
        const response = await fetch("/api/billing/conversion", {
          method: "POST",
          credentials: "same-origin",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ subscriptionId }),
        });
        if (response.ok && response.status !== 204) {
          const body = await response.json() as { transactionId?: unknown };
          if (typeof body.transactionId === "string" && !cancelled) {
            trackMarketingEvent("subscription_first_paid", { transaction_id: body.transactionId });
            conversionChecked.current = true;
          }
          return;
        }
        if (response.status !== 404) return;
      } catch {}
      if (!cancelled && attempts < 5) retry = window.setTimeout(attempt, 2_000);
    };
    const onConsent = () => { if (consentFor("analytics")) void attempt(); };
    void attempt();
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => {
      cancelled = true;
      if (retry !== undefined) window.clearTimeout(retry);
      window.removeEventListener(CONSENT_EVENT, onConsent);
    };
  }, [state, subscriptionId]);

  return <div className="pro-success-status" role="status" aria-live="polite" aria-atomic="true">
    {state === "confirmed"
      ? <Link className="pro-success-button" href={returnTo}>{t("success.openClass")}</Link>
      : state === "checking"
        ? <p className="pro-success-note">{t("success.checking")}</p>
        : <>
          <p className="pro-success-note">{state === "pending"
            ? (locale === "es" ? "PayPal aprobó la suscripción. Estamos esperando la confirmación de la primera cuota; todavía no se concedió acceso PRO." : "PayPal approved the subscription. We are waiting for the first payment confirmation; PRO access has not been granted yet.")
            : (locale === "es" ? "No pudimos verificar el pago ahora. Tu cuenta no fue activada." : "We could not verify the payment yet. Your account was not activated.")}</p>
          <button className="pro-success-button" type="button" onClick={() => { setState("checking"); void reconcile(); }}>
            {locale === "es" ? "Reintentar verificación" : "Retry verification"}
          </button>
          <Link className="pro-secondary" href="/cuenta">{locale === "es" ? "Ver Mi cuenta" : "View My account"}</Link>
        </>}
  </div>;
}
