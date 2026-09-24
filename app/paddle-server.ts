import type { PaddleRuntimeConfig } from "./paddle-config";

type PaddleTransaction = {
  id?: unknown;
  status?: unknown;
  subscription_id?: unknown;
  customer_id?: unknown;
  custom_data?: unknown;
  currency_code?: unknown;
  billing_period?: { ends_at?: unknown } | null;
  items?: Array<{
    quantity?: unknown;
    price?: {
      id?: unknown;
      unit_price?: { amount?: unknown; currency_code?: unknown };
      billing_cycle?: { interval?: unknown; frequency?: unknown } | null;
      trial_period?: unknown;
    };
  }>;
  details?: { totals?: { total?: unknown } };
};

type PaddleSubscription = {
  id?: unknown;
  status?: unknown;
  customer_id?: unknown;
  custom_data?: unknown;
  next_billed_at?: unknown;
  current_billing_period?: { starts_at?: unknown; ends_at?: unknown } | null;
  items?: Array<{
    quantity?: unknown;
    price?: {
      id?: unknown;
      unit_price?: { amount?: unknown; currency_code?: unknown };
      billing_cycle?: { interval?: unknown; frequency?: unknown } | null;
      trial_period?: unknown;
    };
  }>;
};

type PaddleResponse<T> = { data?: T };

function paddleHeaders(config: PaddleRuntimeConfig) {
  return {
    authorization: `Bearer ${config.apiKey}`,
    "content-type": "application/json",
    "paddle-version": "1",
  };
}

async function paddleJson<T>(config: PaddleRuntimeConfig, path: string, init: RequestInit = {}) {
  const response = await fetch(`https://api.paddle.com${path}`, {
    ...init,
    headers: { ...paddleHeaders(config), ...(init.headers || {}) },
  });
  const body = await response.json().catch(() => ({})) as PaddleResponse<T>;
  if (!response.ok || !body.data) throw new Error(`paddle_api_${response.status}`);
  return body.data;
}

export async function createPaddleCheckoutTransaction(
  config: PaddleRuntimeConfig,
  input: { userId: string; offerCode: string },
) {
  const data = await paddleJson<PaddleTransaction>(config, "/transactions", {
    method: "POST",
    body: JSON.stringify({
      items: [{ price_id: config.priceId, quantity: 1 }],
      collection_mode: "automatic",
      custom_data: {
        spanishcue_user_id: input.userId,
        spanishcue_offer_code: input.offerCode,
      },
    }),
  });
  if (typeof data.id !== "string" || !data.id.startsWith("txn_")) throw new Error("paddle_transaction_invalid");
  return data.id;
}

export async function getPaddleTransaction(config: PaddleRuntimeConfig, transactionId: string) {
  return paddleJson<PaddleTransaction>(config, `/transactions/${encodeURIComponent(transactionId)}`);
}

export async function getPaddleSubscription(config: PaddleRuntimeConfig, subscriptionId: string) {
  return paddleJson<PaddleSubscription>(config, `/subscriptions/${encodeURIComponent(subscriptionId)}`);
}

export function validatePaddleSubscription(subscription: PaddleSubscription, config: PaddleRuntimeConfig, userId: string) {
  if (typeof subscription.id !== "string" || !subscription.id.startsWith("sub_")) return false;
  const custom = subscription.custom_data && typeof subscription.custom_data === "object"
    ? subscription.custom_data as Record<string, unknown>
    : {};
  if (custom.spanishcue_user_id !== userId) return false;
  const item = Array.isArray(subscription.items) && subscription.items.length === 1 ? subscription.items[0] : null;
  if (!item || item.quantity !== 1 || item.price?.id !== config.priceId) return false;
  return item.price?.unit_price?.amount === "1500"
    && item.price?.unit_price?.currency_code === "USD"
    && item.price?.billing_cycle?.interval === "month"
    && item.price?.billing_cycle?.frequency === 1
    && item.price?.trial_period == null;
}

export function validatePaddleTransaction(transaction: PaddleTransaction, config: PaddleRuntimeConfig, userId: string) {
  const custom = transaction.custom_data && typeof transaction.custom_data === "object"
    ? transaction.custom_data as Record<string, unknown>
    : {};
  if (custom.spanishcue_user_id !== userId) return false;
  const item = Array.isArray(transaction.items) && transaction.items.length === 1 ? transaction.items[0] : null;
  return Boolean(
    item
    && item.quantity === 1
    && item.price?.id === config.priceId
    && item.price?.unit_price?.amount === "1500"
    && item.price?.unit_price?.currency_code === "USD"
    && item.price?.billing_cycle?.interval === "month"
    && item.price?.billing_cycle?.frequency === 1
    && item.price?.trial_period == null
  );
}

export async function pausePaddleSubscription(config: PaddleRuntimeConfig, subscriptionId: string) {
  return paddleJson<PaddleSubscription>(config, `/subscriptions/${encodeURIComponent(subscriptionId)}/pause`, {
    method: "POST",
    body: JSON.stringify({ effective_from: "immediately", on_resume: "continue_existing_billing_period" }),
  });
}

export async function resumePaddleSubscription(config: PaddleRuntimeConfig, subscriptionId: string) {
  return paddleJson<PaddleSubscription>(config, `/subscriptions/${encodeURIComponent(subscriptionId)}/resume`, {
    method: "POST",
    body: JSON.stringify({ effective_from: "immediately", on_resume: "continue_existing_billing_period" }),
  });
}

export async function cancelPaddleSubscription(config: PaddleRuntimeConfig, subscriptionId: string) {
  return paddleJson<PaddleSubscription>(config, `/subscriptions/${encodeURIComponent(subscriptionId)}/cancel`, {
    method: "POST",
    body: JSON.stringify({ effective_from: "immediately" }),
  });
}

function parsePaddleSignature(header: string | null) {
  if (!header) return null;
  let ts = "";
  const signatures: string[] = [];
  for (const part of header.split(";")) {
    const [key, value] = part.split("=", 2);
    if (key === "ts") ts = value || "";
    if (key === "h1" && value) signatures.push(value);
  }
  return ts && signatures.length ? { ts, signatures } : null;
}

function constantTimeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let diff = 0;
  for (let index = 0; index < left.length; index += 1) diff |= left.charCodeAt(index) ^ right.charCodeAt(index);
  return diff === 0;
}

export async function verifyPaddleWebhook(
  config: PaddleRuntimeConfig,
  rawBody: string,
  signatureHeader: string | null,
) {
  const parsed = parsePaddleSignature(signatureHeader);
  if (!parsed || !/^\d+$/.test(parsed.ts)) return false;
  const timestamp = Number(parsed.ts);
  if (!Number.isFinite(timestamp) || Math.abs(Math.floor(Date.now() / 1000) - timestamp) > 300) return false;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(config.webhookSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signed = await crypto.subtle.sign("HMAC", key, encoder.encode(`${parsed.ts}:${rawBody}`));
  const expected = Array.from(new Uint8Array(signed)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return parsed.signatures.some((signature) => constantTimeEqual(expected, signature));
}

export type { PaddleTransaction, PaddleSubscription };
