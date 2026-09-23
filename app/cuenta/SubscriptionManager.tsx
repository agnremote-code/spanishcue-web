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
  const [busyAction, setBusyAction] = useState<"pause" | "resume" | "cancel" | null>(null);
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
  const paused = subscription.status === "SUSPENDED";

  async function manage(action: "pause" | "resume" | "cancel") {
    setBusyAction(action); setMessage("");
    try {
      const response = await fetch("/api/billing/subscription", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const body = await response.json() as { subscription?: Subscription; error?: string };
      if (!response.ok || !body.subscription) throw new Error(body.error || `${action}_failed`);
      setSubscription(body.subscription);
      setConfirming(false);
      if (action === "pause") {
        setMessage(es ? `Suscripción pausada. No habrá renovaciones mientras esté pausada${date ? `; tu período pagado continúa hasta el ${date}` : ""}.` : `Subscription paused. There will be no renewals while it is paused${date ? `; your paid period continues until ${date}` : ""}.`);
      } else if (action === "resume") {
        setMessage(es ? "Suscripción reanudada." : "Subscription resumed.");
      } else {
        const reference = body.subscription.cancellationReference ? ` · ${body.subscription.cancellationReference}` : "";
        setMessage(es ? `Cancelación confirmada${reference}${date ? `. Tu acceso continúa hasta el ${date}` : ""}. No habrá nuevas renovaciones.` : `Cancellation confirmed${reference}${date ? `. Your access continues until ${date}` : ""}. There will be no further renewals.`);
      }
    } catch (error) {
      const fallback = action === "pause"
        ? (es ? "No pudimos pausar ahora. Intenta nuevamente." : "We could not pause it now. Please try again.")
        : action === "resume"
          ? (es ? "No pudimos reanudar ahora. Intenta nuevamente." : "We could not resume it now. Please try again.")
          : (es ? "No pudimos cancelar ahora. Intenta nuevamente." : "We could not cancel it now. Please try again.");
      setMessage(error instanceof Error && !error.message.endsWith("_failed") ? error.message : fallback);
    } finally { setBusyAction(null); }
  }

  return <section className="subscription-manager" aria-labelledby="subscription-title">
    <span>{es ? "SUSCRIPCIÓN" : "SUBSCRIPTION"}</span>
    <h2 id="subscription-title">SPANISHCUE PRO</h2>
    <dl><div><dt>{es ? "Estado" : "Status"}</dt><dd>{paid && active ? (es ? "Pagada y activa" : "Paid and active") : paused ? (es ? "Pausada" : "Paused") : active ? (es ? "Verificando primer pago" : "Verifying first payment") : cancelled ? (es ? "Cancelada" : "Cancelled") : subscription.status}</dd></div><div><dt>{paid ? (es ? "Acceso hasta" : "Access until") : (es ? "Próximo cobro informado" : "Reported next charge")}</dt><dd>{date || (es ? "No disponible" : "Unavailable")}</dd></div><div><dt>{es ? "Importe" : "Amount"}</dt><dd>{subscription.founder ? "US$15 / month" : (es ? "Según plan" : "Per plan")}</dd></div><div><dt>{es ? "Pago" : "Payment"}</dt><dd>PayPal</dd></div></dl>
    {active && !confirming && <div className="subscription-confirm" role="group" aria-label={es ? "Gestionar suscripción" : "Manage subscription"}>
      <button type="button" disabled={busyAction !== null} onClick={() => void manage("pause")}>{busyAction === "pause" ? (es ? "Pausando…" : "Pausing…") : (es ? "Pausar suscripción" : "Pause subscription")}</button>
      <button type="button" className="subscription-cancel" disabled={busyAction !== null} onClick={() => setConfirming(true)}>{es ? "Cancelar suscripción" : "Cancel subscription"}</button>
    </div>}
    {paused && <button type="button" className="subscription-cancel" disabled={busyAction !== null} onClick={() => void manage("resume")}>{busyAction === "resume" ? (es ? "Reanudando…" : "Resuming…") : (es ? "Reanudar suscripción" : "Resume subscription")}</button>}
    {active && confirming && <div className="subscription-confirm" role="group" aria-label={es ? "Confirmar cancelación" : "Confirm cancellation"}><p>{es ? `Se detendrán los cobros futuros${date ? ` y conservarás el acceso hasta el ${date}` : ""}. El precio fundador deja de estar garantizado si vuelves.` : `Future charges will stop${date ? ` and access continues until ${date}` : ""}. Founder Price is no longer guaranteed if you return.`}</p><button type="button" disabled={busyAction !== null} onClick={() => void manage("cancel")}>{busyAction === "cancel" ? (es ? "Cancelando…" : "Cancelling…") : (es ? "Sí, cancelar" : "Yes, cancel")}</button><button type="button" disabled={busyAction !== null} onClick={() => setConfirming(false)}>{es ? "Mantener suscripción" : "Keep subscription"}</button></div>}
    {message && <p className="subscription-message" aria-live="polite">{message}</p>}
  </section>;
}
