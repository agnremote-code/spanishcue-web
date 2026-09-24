"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "../i18n/LocaleProvider";
import { trackMarketingEvent } from "../marketing/analytics";

type FounderStatus = {
  limit: number;
  remaining: number;
  available: boolean;
  checkoutLive: boolean;
  checkoutAvailable: boolean;
  paddleCheckoutAvailable?: boolean;
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

export default function CheckoutButton({ signedIn, returnTo }: { signedIn: boolean; returnTo: string }) {
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
      const body = await response.json() as { transactionId?: unknown };
      if (typeof body.transactionId === "string") {
        trackMarketingEvent("subscription_first_paid", { transaction_id: body.transactionId });
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

  async function checkoutPaddle() {
    trackMarketingEvent("cta_click", { placement: "paywall", cta_type: "subscribe_card", signed_in: signedIn });
    if (!founder?.available || !founder.paddleCheckoutAvailable) return;
    trackMarketingEvent("checkout_start", { plan: "founder-1000-usd15-monthly", value: 15, currency: "USD", method: "paddle" });
    setStatus("paddle");
    setMessage("");
    try {
      const response = await fetch("/api/billing/paddle/checkout", {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ returnTo }),
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

  return <div className="checkout-action">
    {founder.mode === "sandbox" && <strong className="checkout-availability closed">{locale === "es" ? "PRUEBA SANDBOX · no es un cobro real" : "SANDBOX TEST · not a real charge"}</strong>}
    <strong className={`checkout-availability ${founder.available ? "" : "closed"}`}>
      {founder.available
        ? locale === "es" ? `${founder.remaining} de ${founder.limit} lugares disponibles` : `${founder.remaining} of ${founder.limit} places available`
        : locale === "es" ? "Oferta fundadora completa" : "Founder offer fully claimed"}
    </strong>

    {founder.paddleCheckoutAvailable && (
      <button className="checkout-card-button" type="button" onClick={checkoutPaddle} disabled={busy || !founder.available}>
        {status === "paddle" || status === "confirming"
          ? (locale === "es" ? "Procesando pago…" : "Processing payment…")
          : (locale === "es" ? "Pagar con tarjeta · US$15/mes" : "Pay by card · US$15/month")}
      </button>
    )}

    {founder.checkoutLive && (
      <button className="checkout-paypal-button" type="button" onClick={checkoutPayPal} disabled={busy || !founder.available}>
        {status === "paypal"
          ? t("checkout.openingPayPal")
          : (locale === "es" ? "Pagar con PayPal" : "Pay with PayPal")}
      </button>
    )}

    <p>{locale === "es"
      ? "Pagá primero. Después vinculás la compra a tu cuenta para entrar a PRO."
      : "Pay first, then link the purchase to your account for PRO access."}</p>
    {status === "error" && <small role="alert">{message}</small>}
  </div>;
}
