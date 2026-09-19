"use client";

import { useEffect, useState } from "react";
import { useI18n } from "../i18n/LocaleProvider";

type Subscription = {
  provider: string;
  status: "FREE" | "PENDING" | "APPROVAL_PENDING" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "CANCELLED" | "EXPIRED";
  founder: boolean;
  nextBillingTime: number | null;
  paidThrough: number | null;
  accessConfirmed: boolean;
  cancelledAt: number | null;
  cancellationReference: string | null;
};

export default function SubscriptionManager({ fullAccess }: { fullAccess: boolean }) {
  const { locale } = useI18n();
  const es = locale === "es";
  const [subscription, setSubscription] = useState<Subscription | null | undefined>(undefined);
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/billing/subscription", { credentials: "same-origin", signal: controller.signal })
      .then(async (response) => response.ok ? response.json() : null)
      .then((body: unknown) => {
        if (body && typeof body === "object" && "subscription" in body) setSubscription(body.subscription as Subscription | null);
        else setSubscription(null);
      })
      .catch(() => setSubscription(null));
    return () => controller.abort();
  }, []);

  if (subscription === undefined) return <section className="subscription-manager" aria-live="polite"><p>{es ? "Cargando suscripción…" : "Loading subscription…"}</p></section>;
  if (!subscription) return fullAccess ? <section className="subscription-manager"><span>{es ? "ACCESO" : "ACCESS"}</span><h2>{es ? "Acceso administrado" : "Managed access"}</h2><p>{es ? "Esta cuenta tiene acceso completo sin una suscripción PayPal asociada." : "This account has full access without an associated PayPal subscription."}</p></section> : null;

  const accessEnd = subscription.paidThrough || subscription.nextBillingTime;
  const date = accessEnd
    ? new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", { dateStyle: "long" }).format(accessEnd * 1000)
    : null;
  const active = subscription.status === "ACTIVE";
  const paid = subscription.accessConfirmed;
  const cancelled = subscription.status === "CANCELLED";

  async function cancel() {
    setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/billing/subscription", { method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" }, body: "{}" });
      const body = await response.json() as { subscription?: Subscription; error?: string };
      if (!response.ok || !body.subscription) throw new Error(body.error || "cancel_failed");
      setSubscription(body.subscription);
      setConfirming(false);
      const reference = body.subscription.cancellationReference ? ` · ${body.subscription.cancellationReference}` : "";
      setMessage(es ? `Cancelación confirmada${reference}${date ? `. Tu acceso continúa hasta el ${date}` : ""}. No habrá nuevas renovaciones.` : `Cancellation confirmed${reference}${date ? `. Your access continues until ${date}` : ""}. There will be no further renewals.`);
    } catch (error) {
      setMessage(error instanceof Error && error.message !== "cancel_failed" ? error.message : es ? "No pudimos cancelar ahora. Intenta nuevamente." : "We could not cancel it now. Please try again.");
    } finally { setBusy(false); }
  }

  return <section className="subscription-manager" aria-labelledby="subscription-title">
    <span>{es ? "SUSCRIPCIÓN" : "SUBSCRIPTION"}</span>
    <h2 id="subscription-title">SPANISHCUE PRO</h2>
    <dl><div><dt>{es ? "Estado" : "Status"}</dt><dd>{paid && active ? (es ? "Pagada y activa" : "Paid and active") : active ? (es ? "Verificando primer pago" : "Verifying first payment") : cancelled ? (es ? "Cancelada" : "Cancelled") : subscription.status}</dd></div><div><dt>{paid ? (es ? "Acceso hasta" : "Access until") : (es ? "Próximo cobro informado" : "Reported next charge")}</dt><dd>{date || (es ? "No disponible" : "Unavailable")}</dd></div><div><dt>{es ? "Importe" : "Amount"}</dt><dd>{subscription.founder ? "US$15 / month" : (es ? "Según plan" : "Per plan")}</dd></div><div><dt>{es ? "Pago" : "Payment"}</dt><dd>PayPal</dd></div></dl>
    {active && !confirming && <button type="button" className="subscription-cancel" onClick={() => setConfirming(true)}>{es ? "Cancelar suscripción" : "Cancel subscription"}</button>}
    {active && confirming && <div className="subscription-confirm" role="group" aria-label={es ? "Confirmar cancelación" : "Confirm cancellation"}><p>{es ? `Se detendrán los cobros futuros${date ? ` y conservarás el acceso hasta el ${date}` : ""}. El precio fundador deja de estar garantizado si vuelves.` : `Future charges will stop${date ? ` and access continues until ${date}` : ""}. Founder Price is no longer guaranteed if you return.`}</p><button type="button" disabled={busy} onClick={cancel}>{busy ? (es ? "Cancelando…" : "Cancelling…") : (es ? "Sí, cancelar" : "Yes, cancel")}</button><button type="button" disabled={busy} onClick={() => setConfirming(false)}>{es ? "Mantener suscripción" : "Keep subscription"}</button></div>}
    {message && <p className="subscription-message" aria-live="polite">{message}</p>}
  </section>;
}
