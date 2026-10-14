import { markPaddleOutboxDelivered } from "../db/paddle-billing";
import type { PaddleAttribution } from "./paddle-server";

type ConversionEnv = Partial<Record<"NEXT_PUBLIC_GA4_MEASUREMENT_ID" | "GA4_API_SECRET" | "ANALYTICS_CONVERSIONS_ENABLED", string>>;

/**
 * Charges that happen while the buyer is not on the site (the first US$15.50
 * month after a US$2 trial, and every renewal) are reported server-side to
 * GA4 through the Measurement Protocol. The browser already reports the first
 * paid transaction, so it is never sent from here.
 *
 * It only runs with the buyer's GA client ID, which the checkout captures only
 * with analytics consent, and with a configured GA4 API secret. Without either
 * the event stays undelivered in billing_outbox_events for a later import.
 */
export async function deliverPaddleServerConversion(
  input: unknown,
  db: D1Database,
  payment: { kind: "first" | "renewal" | "trial" | "duplicate"; afterTrial: boolean; eventKey: string },
  details: { transactionId: string; amountCents: number; currency: string; attribution: PaddleAttribution },
) {
  const env = (input && typeof input === "object" ? input : {}) as ConversionEnv;
  const eventName = payment.kind === "renewal" ? "subscription_renewal"
    : payment.kind === "first" && payment.afterTrial ? "first_subscription_payment" : null;
  const measurementId = env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || "";
  const secret = env.GA4_API_SECRET?.trim() || "";
  const clientId = details.attribution.ga_client_id || "";
  if (!eventName || env.ANALYTICS_CONVERSIONS_ENABLED !== "true" || !/^G-[A-Z0-9]+$/i.test(measurementId)
      || !secret || !/^\d+\.\d+$/.test(clientId)) return false;
  try {
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(measurementId)}&api_secret=${encodeURIComponent(secret)}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          non_personalized_ads: true,
          events: [{
            name: eventName,
            params: {
              transaction_id: details.transactionId,
              value: details.amountCents / 100,
              currency: details.currency,
              method: "paddle",
              ...(details.attribution.utm_campaign ? { campaign: details.attribution.utm_campaign } : {}),
            },
          }],
        }),
      },
    );
    if (!response.ok) return false;
    await markPaddleOutboxDelivered(db, payment.eventKey);
    return true;
  } catch {
    return false;
  }
}
