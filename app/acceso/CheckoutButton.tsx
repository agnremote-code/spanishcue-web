"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "../i18n/LocaleProvider";
import PaymentBrands from "./PaymentBrands";
import "./payment-options.css";
import { trackMarketingEvent } from "../marketing/analytics";

type FounderStatus = {
  limit: number;
  remaining: number;
  available: boolean;
  checkoutLive: boolean;
  checkoutAvailable: boolean;
  paddleCheckoutAvailable?: boolean;
  trialCheckoutAvailable?: boolean;
  paypalPriceUsd?: number;
  mode: "sandbox" | "live";
};

type PaddleEvent = {
  name?: string;
  data?: { transaction_id?: string };
};

type PaddleApi = {
  Initialize: (options: { token: string; eventCallback?: (event: PaddleEvent) => void }) => void;
  Update?: (options: { eventCallback?: (event: PaddleEvent) => void }) => void;
  Checkout: {
    open: (options: {
      transactionId: string;
      settings?: {
        displayMode?: "overlay";
        theme?: "light" | "dark";
        variant?: "one-page" | "multi-page";
        locale?: string;
      };
    }) => void;
  };
};

declare global {
  interface Window {
    Paddle?: PaddleApi;
    __spanishcuePaddleInitialized?: boolean;
  }
}

const paddleScriptId = "spanishcue-paddle-js";

function loadPaddle() {
  if (window.Paddle) return Promise.resolve(window.Paddle);
  return new Promise<PaddleApi>((resolve, reject) => {
    const existing = document.getElementById(paddleScriptId) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => window.Paddle ? resolve(window.Paddle) : reject(new Error("paddle_missing")), { once: true });
      existing.addEventListener("error", () => reject(new Error("paddle_load_failed")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.id = paddleScriptId;
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    script.onload = () => window.Paddle ? resolve(window.Paddle) : reject(new Error("paddle_missing"));
    script.onerror = () => reject(new Error("paddle_load_failed"));
    document.head.appendChild(script);
  });
}

/**
 * `variant="landing"` renders the same Paddle/PayPal flows as two plain plan
 * choices for the paid-traffic landings: the US$2 one-day trial first, the
 * monthly subscription second and PayPal as a quieter secondary option.
 */
export default function CheckoutButton({ signedIn, returnTo, variant = "default" }: { signedIn: boolean; returnTo: string; variant?: "default" | "landing" }) {
  const { locale, t } = useI18n();
  const [status, setStatus] = useState<"idle" | "paypal" | "paddle" | "confirming" | "error">("idle");
  const [message, setMessage] = useState("");
  const [founder, setFounder] = useState<FounderStatus | null | undefined>(undefined);

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

  async function emitPaidConversion(subscriptionId: string) {
    try {
      const response = await fetch("/api/billing/conversion", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ subscriptionId }),
      });
      if (!response.ok || response.status === 204) return;
      const body = await response.json() as { transactionId?: unknown; value?: unknown; currency?: unknown };
      if (typeof body.transactionId === "string"
          && typeof body.value === "number" && Number.isFinite(body.value) && body.value > 0
          && typeof body.currency === "string" && /^[A-Z]{3}$/.test(body.currency)) {
        trackMarketingEvent("subscription_first_paid", {
          transaction_id: body.transactionId,
          value: body.value,
          currency: body.currency,
        });
      }
    } catch {}
  }

  async function confirmPaddle(transactionId: string) {
    setStatus("confirming");
    for (let attempt = 0; attempt < 8; attempt += 1) {
      try {
        const response = await fetch("/api/billing/paddle/confirm", {
          method: "POST",
          credentials: "same-origin",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ transactionId }),
        });
        const body = await response.json() as { accessConfirmed?: unknown; paymentConfirmed?: unknown; subscriptionId?: unknown };
        if (!signedIn && response.ok && body.paymentConfirmed === true) {
          window.location.assign("/pro/claim?provider=paddle");
          return;
        }
        if (response.ok && body.accessConfirmed === true && typeof body.subscriptionId === "string") {
          await emitPaidConversion(body.subscriptionId);
          window.location.assign(returnTo);
          return;
        }
      } catch {}
      await new Promise((resolve) => window.setTimeout(resolve, 1500));
    }
    window.location.assign(signedIn ? "/cuenta?checkout=paddle" : "/pro/claim?provider=paddle");
  }

  async function checkoutPaddle(offer: "monthly" | "trial" = "monthly") {
    trackMarketingEvent("cta_click", { placement: "paywall", cta_type: "subscribe_card", signed_in: signedIn });
    if (!founder?.available || !founder.paddleCheckoutAvailable || (offer === "trial" && !founder.trialCheckoutAvailable)) return;
    trackMarketingEvent(offer === "trial" ? "trial_checkout_start" : "checkout_start", { plan: "founder-1000-usd15-monthly", value: offer === "trial" ? 2 : 15.5, currency: "USD", method: "paddle" });
    setStatus("paddle");
    setMessage("");
    try {
      const response = await fetch("/api/billing/paddle/checkout", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ returnTo, offer }),
      });
      const body = await response.json() as { transactionId?: unknown; clientToken?: unknown; claimUrl?: unknown; error?: unknown };
      if (response.ok && body.claimUrl === "/pro/claim?provider=paddle") {
        window.location.assign(body.claimUrl);
        return;
      }
      if (!response.ok || typeof body.transactionId !== "string" || typeof body.clientToken !== "string") {
        throw new Error(typeof body.error === "string" ? body.error : "No pudimos abrir el pago con tarjeta.");
      }
      const paddle = await loadPaddle();
      const callback = (event: PaddleEvent) => {
        if (event.name !== "checkout.completed") return;
        const transactionId = event.data?.transaction_id || body.transactionId as string;
        void confirmPaddle(transactionId);
      };
      if (!window.__spanishcuePaddleInitialized) {
        paddle.Initialize({ token: body.clientToken, eventCallback: callback });
        window.__spanishcuePaddleInitialized = true;
      } else {
        paddle.Update?.({ eventCallback: callback });
      }
      paddle.Checkout.open({
        transactionId: body.transactionId,
        settings: {
          displayMode: "overlay",
          theme: "light",
          variant: "one-page",
          locale: locale === "es" ? "es" : "en",
        },
      });
      setStatus("idle");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "No pudimos abrir el pago con tarjeta.");
    }
  }

  async function checkoutPayPal() {
    trackMarketingEvent("cta_click", { placement: "paywall", cta_type: "subscribe_paypal", signed_in: signedIn });
    if (!founder?.available || !founder.checkoutLive) return;
    trackMarketingEvent("checkout_start", { plan: "founder-1000-usd15-monthly", value: 15, currency: "USD", method: "paypal" });
    setStatus("paypal"); setMessage("");
    try {
      const response = await fetch("/api/billing/checkout", {
        method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" }, body: JSON.stringify({ returnTo }),
      });
      const body = await response.json() as { approvalUrl?: unknown; claimUrl?: unknown; error?: unknown };
      if (response.ok && body.claimUrl === "/pro/claim?provider=paypal") {
        window.location.assign(body.claimUrl);
        return;
      }
      if (!response.ok || typeof body.approvalUrl !== "string") {
        throw new Error(typeof body.error === "string" ? body.error : t("checkout.error"));
      }
      window.location.assign(body.approvalUrl);
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : t("checkout.error"));
    }
  }

  if (founder === undefined) return <div className="checkout-action" aria-live="polite"><p>{locale === "es" ? "Comprobando disponibilidad…" : "Checking availability…"}</p></div>;

  if (!founder?.checkoutAvailable) return <div className="checkout-action">
    <strong className="checkout-availability closed">{locale === "es" ? "Lanzamiento próximo · sin cobros todavía" : "Launching soon · no charges yet"}</strong>
    <Link className="checkout-free-link" href="/el-hotel-de-lo-imposible">{locale === "es" ? "Abrir una clase gratis" : "Open a free lesson"} →</Link>
    <p>{locale === "es" ? "Este enlace no inicia una suscripción." : "This link does not start a subscription."}</p>
  </div>;

  const busy = status === "paypal" || status === "paddle" || status === "confirming";

  if (variant === "landing") return landingCheckout(founder);

  return <div className="checkout-action">
    {founder.mode === "sandbox" && <strong className="checkout-availability closed">{locale === "es" ? "PRUEBA SANDBOX · no es un cobro real" : "SANDBOX TEST · not a real charge"}</strong>}
    <strong className={`checkout-availability ${founder.available ? "" : "closed"}`}>
      {founder.available
        ? locale === "es" ? `${founder.remaining} de ${founder.limit} lugares disponibles` : `${founder.remaining} of ${founder.limit} places available`
        : locale === "es" ? "Oferta fundadora completa" : "Founder offer fully claimed"}
    </strong>

    {founder.paddleCheckoutAvailable && (
      <button className="checkout-card-button" type="button" onClick={() => checkoutPaddle("monthly")} disabled={busy || !founder.available}>
        {status === "paddle" || status === "confirming"
          ? (locale === "es" ? "Procesando pago…" : "Processing payment…")
          : (locale === "es" ? "Pagar con tarjeta · US$15.50/mes" : "Pay by card · US$15.50/month")}
        <PaymentBrands /><span className="sr-only">Visa, Mastercard, American Express</span>
      </button>
    )}

    {founder.paddleCheckoutAvailable && <p className="checkout-price-note">{locale === "es" ? "Tarjeta: US$15.50 ahora y cada mes. Precio final, impuestos incluidos." : "Card: US$15.50 now and every month. Final price, taxes included."}</p>}

    {founder.checkoutLive && (
      <button className="checkout-paypal-button" type="button" onClick={checkoutPayPal} disabled={busy || !founder.available}>
        {status === "paypal"
          ? t("checkout.openingPayPal")
           : (locale === "es" ? `Pagar con PayPal · US$${founder.paypalPriceUsd ?? 15}/mes` : `Pay with PayPal · US$${founder.paypalPriceUsd ?? 15}/month`)}
        <PaymentBrands paypal />
      </button>
    )}

    {founder.trialCheckoutAvailable && <div className="checkout-trial">
      <button className="checkout-trial-button" type="button" onClick={() => checkoutPaddle("trial")} disabled={busy || !founder.available}>
        {locale === "es" ? "Prueba 1 día por US$2" : "Try 1 day for US$2"}
      </button>
      <small>{locale === "es" ? "Después, US$15.50/mes. Cancela cuando quieras. Impuestos incluidos." : "Then US$15.50/month. Cancel anytime. Taxes included."}</small>
    </div>}

    <p>{locale === "es"
      ? "Paga primero. Después vinculas la compra a tu cuenta para entrar a PRO."
      : "Pay first, then link the purchase to your account for PRO access."}</p>
    {status === "error" && <small role="alert">{message}</small>}
  </div>;

  function landingCheckout(offer: FounderStatus) {
    const es = locale === "es";
    const paddleBusy = status === "paddle" || status === "confirming";
    return <div className="checkout-action checkout-landing">
      {offer.mode === "sandbox" && <strong className="checkout-availability closed">{es ? "PRUEBA SANDBOX · no es un cobro real" : "SANDBOX TEST · not a real charge"}</strong>}
      {!offer.available && <strong className="checkout-availability closed">{es ? "Oferta fundadora completa" : "Founder offer fully claimed"}</strong>}
      <div className="checkout-landing-plans">
        {offer.paddleCheckoutAvailable && offer.trialCheckoutAvailable && <div className="checkout-landing-plan checkout-landing-trial">
          <button className="checkout-trial-button" type="button" onClick={() => checkoutPaddle("trial")} disabled={busy || !offer.available}>
            {paddleBusy ? (es ? "Abriendo el pago…" : "Opening checkout…") : (es ? "Prueba 1 día por US$2" : "Try 1 day for US$2")}
          </button>
          <span>{es ? "Después, US$15.50/mes. Cancela cuando quieras. Impuestos incluidos." : "Then US$15.50/month. Cancel anytime. Taxes included."}</span>
        </div>}
        {offer.paddleCheckoutAvailable && <div className="checkout-landing-plan checkout-landing-monthly">
          <button className="checkout-card-button" type="button" onClick={() => checkoutPaddle("monthly")} disabled={busy || !offer.available}>
            {paddleBusy ? (es ? "Abriendo el pago…" : "Opening checkout…") : (es ? "Suscríbete · US$15.50/mes" : "Subscribe · US$15.50/month")}
          </button>
          <span>{es ? "Tarjeta: US$15.50 ahora y cada mes. Precio final, impuestos incluidos." : "Card: US$15.50 now and every month. Final price, taxes included."}</span>
        </div>}
      </div>
      {offer.checkoutLive && <button className="checkout-landing-paypal" type="button" onClick={checkoutPayPal} disabled={busy || !offer.available}>
        {status === "paypal" ? t("checkout.openingPayPal") : (es ? `O paga con PayPal · US$${offer.paypalPriceUsd ?? 15}/mes` : `Or pay with PayPal · US$${offer.paypalPriceUsd ?? 15}/month`)}
      </button>}
      <p>{es
        ? "Paga primero. Después vinculas la compra a tu cuenta para entrar a PRO."
        : "Pay first, then link the purchase to your account for PRO access."}</p>
      {status === "error" && <small role="alert" className="checkout-landing-error">{message}</small>}
    </div>;
  }
}
