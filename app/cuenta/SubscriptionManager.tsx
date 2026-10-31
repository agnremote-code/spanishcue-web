"use client";

import Link from "next/link";
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
  trial?: boolean;
  amountCents?: number | null;
  paymentFailed?: boolean;
  paymentPortal?: boolean;
};

export default function SubscriptionManager({ fullAccess }: { fullAccess: boolean }) {
  const { locale } = useI18n();
  const es = locale === "es";
  const [subscription, setSubscription] = useState<Subscription | null | undefined>(undefined);
  const [loadFailed, setLoadFailed] = useState(false);
  const [reload, setReload] = useState(0);
  const [portalBusy, setPortalBusy] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [busyAction, setBusyAction] = useState<"pause" | "resume" | "cancel" | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    // A failed request must not look like "no subscription": a paying user
    // would lose their cancel and payment controls.
    const load = () => fetch("/api/billing/subscription", { credentials: "same-origin", signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("subscription_unavailable");
        const body = await response.json() as unknown;
        if (!body || typeof body !== "object" || !("subscription" in body)) throw new Error("subscription_unavailable");
        return body.subscription as Subscription | null;
      });
    load()
      .then(async (current) => {
        // A Paddle renewal whose webhook never arrived: re-read it from Paddle
        // (server-verified) before showing the subscription as lapsed.
        if (current?.provider === "paddle" && !current.accessConfirmed && (current.status === "ACTIVE" || current.status === "SUSPENDED")) {
          await fetch("/api/billing/refresh", { method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" }, body: "{}", signal: controller.signal }).catch(() => null);
          return load();
        }
        return current;
      })
      .then((current) => setSubscription(current))
      .catch(() => { if (!controller.signal.aborted) { setLoadFailed(true); setSubscription(undefined); } });
    return () => controller.abort();
  }, [reload]);

  if (loadFailed) return <section className="subscription-manager" role="alert"><p>{es ? "No pudimos cargar tu suscripción." : "We could not load your subscription."}</p><button type="button" onClick={() => { setLoadFailed(false); setReload((value) => value + 1); }}>{es ? "Reintentar" : "Try again"}</button></section>;
  if (subscription === undefined) return <section className="subscription-manager" aria-live="polite"><p>{es ? "Cargando suscripción…" : "Loading subscription…"}</p></section>;
  if (!subscription) return fullAccess ? <section className="subscription-manager"><span>{es ? "ACCESO" : "ACCESS"}</span><h2>{es ? "Acceso administrado" : "Managed access"}</h2><p>{es ? "Esta cuenta tiene acceso completo sin una suscripción de pago asociada." : "This account has full access without an associated paid subscription."}</p></section> : null;

  const accessEnd = subscription.paidThrough || subscription.nextBillingTime;
  const date = accessEnd
    ? new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", { dateStyle: "long" }).format(accessEnd * 1000)
    : null;
  const active = subscription.status === "ACTIVE";
  const paid = subscription.accessConfirmed;
  const cancelled = subscription.status === "CANCELLED";
  const paymentFailed = Boolean(subscription.paymentFailed);
  const paused = subscription.status === "SUSPENDED" && !paymentFailed;
  const trial = Boolean(subscription.trial) && active && paid;
  const pending = ["PENDING", "APPROVAL_PENDING", "APPROVED"].includes(subscription.status);

  async function openPortal() {
    setPortalBusy(true); setMessage("");
    try {
      const response = await fetch("/api/billing/portal", { method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" }, body: "{}" });
      const body = await response.json().catch(() => ({})) as { url?: unknown; error?: unknown };
      if (!response.ok || typeof body.url !== "string") throw new Error(typeof body.error === "string" ? body.error : "");
      window.location.assign(body.url);
    } catch (error) {
      setMessage(error instanceof Error && error.message ? error.message : (es ? "No pudimos abrir la gestión de pagos. Intenta nuevamente." : "We could not open payment management. Please try again."));
      setPortalBusy(false);
    }
  }

  async function manage(action: "pause" | "resume" | "cancel") {
    setBusyAction(action); setMessage("");
    try {
      const response = await fetch("/api/billing/subscription", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const body = await response.json().catch(() => ({})) as { subscription?: Subscription; error?: string };
      // A 409 carries the current state: show it instead of stale buttons.
      if (body.subscription) setSubscription(body.subscription);
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
    <dl><div><dt>{es ? "Estado" : "Status"}</dt><dd>{paymentFailed ? (es ? "Pago rechazado" : "Payment declined") : trial ? (es ? "Prueba de 1 día" : "1-day trial") : paid && active ? (es ? "Pagada y activa" : "Paid and active") : paused ? (es ? "Pausada" : "Paused") : active ? (es ? "Verificando primer pago" : "Verifying first payment") : cancelled ? (es ? "Cancelada" : "Cancelled") : pending ? (es ? "Pago pendiente" : "Payment pending") : (es ? "Vencida" : "Expired")}</dd></div><div><dt>{trial ? (es ? "Primer cobro de US$15.50" : "First US$15.50 charge") : paid ? (es ? "Acceso hasta" : "Access until") : (es ? "Próximo cobro informado" : "Reported next charge")}</dt><dd>{date || (es ? "No disponible" : "Unavailable")}</dd></div><div><dt>{es ? "Importe" : "Amount"}</dt><dd>{subscription.provider === "paddle" ? (subscription.amountCents === 12900 ? (es ? "US$129 / año" : "US$129 / year") : trial || subscription.amountCents === 1550 ? "US$15.50 / month" : (es ? "Según el importe y la renovación confirmados en Paddle" : "As confirmed in Paddle at checkout and renewal")) : subscription.founder ? "US$15 / month" : (es ? "Según plan" : "Per plan")}</dd></div><div><dt>{es ? "Pago" : "Payment"}</dt><dd>{subscription.provider === "paddle" ? "Paddle" : "PayPal"}</dd></div></dl>
    {active && !confirming && <div className="subscription-confirm" role="group" aria-label={es ? "Gestionar suscripción" : "Manage subscription"}>
      <button type="button" disabled={busyAction !== null} onClick={() => void manage("pause")}>{busyAction === "pause" ? (es ? "Pausando…" : "Pausing…") : (es ? "Pausar suscripción" : "Pause subscription")}</button>
      <button type="button" className="subscription-cancel" disabled={busyAction !== null} onClick={() => setConfirming(true)}>{es ? "Cancelar suscripción" : "Cancel subscription"}</button>
    </div>}
    {paused && <button type="button" className="subscription-cancel" disabled={busyAction !== null} onClick={() => void manage("resume")}>{busyAction === "resume" ? (es ? "Reanudando…" : "Resuming…") : (es ? "Reanudar suscripción" : "Resume subscription")}</button>}
    {active && confirming && <div className="subscription-confirm" role="group" aria-label={es ? "Confirmar cancelación" : "Confirm cancellation"}><p>{es ? `Se detendrán los cobros futuros${date ? ` y conservarás el acceso hasta el ${date}` : ""}. El precio fundador deja de estar garantizado si vuelves.` : `Future charges will stop${date ? ` and access continues until ${date}` : ""}. Founder Price is no longer guaranteed if you return.`}</p><button type="button" disabled={busyAction !== null} onClick={() => void manage("cancel")}>{busyAction === "cancel" ? (es ? "Cancelando…" : "Cancelling…") : (es ? "Sí, cancelar" : "Yes, cancel")}</button><button type="button" disabled={busyAction !== null} onClick={() => setConfirming(false)}>{es ? "Mantener suscripción" : "Keep subscription"}</button></div>}
    {paymentFailed && <p className="subscription-message" role="alert">{es ? "Paddle no pudo cobrar la renovación. Actualiza tu tarjeta para mantener el acceso." : "Paddle could not charge the renewal. Update your card to keep your access."}</p>}
    {subscription.paymentPortal && <button type="button" disabled={portalBusy} onClick={() => void openPortal()}>{es ? "Gestionar pago y facturas" : "Manage payment and invoices"}</button>}
    {(cancelled || (!paid && !active && !paused && !paymentFailed && !pending)) && <Link className="subscription-cancel" href="/pricing">{es ? "Volver a suscribirte" : "Subscribe again"}</Link>}
    {message && <p className="subscription-message" aria-live="polite">{message}</p>}
    <div className="subscription-billing">
      <strong>{es ? "Facturación" : "Billing"}</strong>
      {subscription.provider === "paddle"
        ? <p>{es ? "Paddle te envía cada recibo por email; desde ese email también puedes actualizar el método de pago." : "Paddle emails every receipt; from that email you can also update your payment method."}</p>
        : <p>{es ? "Tus pagos y recibos están en tu cuenta de PayPal, en Pagos automáticos." : "Your payments and receipts are in your PayPal account, under Automatic payments."} <a href="https://www.paypal.com/myaccount/autopay/" target="_blank" rel="noopener noreferrer">{es ? "Abrir PayPal" : "Open PayPal"} ↗</a></p>}
    </div>
  </section>;
}
