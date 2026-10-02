import { PADDLE_MONTHLY_PRICE_ID, PADDLE_TRIAL_PRICE_ID, PADDLE_MONTHLY_CENTS, PADDLE_TRIAL_CENTS, PADDLE_PRODUCT_ID, type PaddleRuntimeConfig, type PaddleOffer } from "./paddle-config";

type PaddlePrice = {
  id?: unknown; product_id?: unknown; tax_mode?: unknown;
  unit_price?: { amount?: unknown; currency_code?: unknown };
  billing_cycle?: { interval?: unknown; frequency?: unknown } | null;
  trial_period?: { interval?: unknown; frequency?: unknown; requires_payment_method?: unknown; unit_price?: { amount?: unknown; currency_code?: unknown } | null } | null;
};

type PaddleTransaction = {
  id?: unknown;
  status?: unknown;
  subscription_id?: unknown;
  customer_id?: unknown;
  customer?: { id?: unknown; email?: unknown } | null;
  custom_data?: unknown;
  currency_code?: unknown;
  billing_period?: { starts_at?: unknown; ends_at?: unknown } | null;
  items?: Array<{
    quantity?: unknown;
    price?: PaddlePrice;
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
    price?: PaddlePrice;
  }>;
};

type PaddleResponse<T> = {
  data?: T;
  error?: { type?: unknown; code?: unknown; detail?: unknown };
  meta?: { request_id?: unknown };
};

function safePaddleDiagnostic(value: unknown, config: PaddleRuntimeConfig, maxLength: number) {
  if (typeof value !== "string") return null;
  let safe = value.slice(0, 1000);
  for (const secret of [config.apiKey, config.clientToken, config.webhookSecret]) {
    if (secret) safe = safe.replaceAll(secret, "[redacted]");
  }
  return safe
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[redacted]")
    .replace(/(?:Bearer\s+|__Host-spanishcue-claim-[\w-]+=)[^\s;]+/gi, "[redacted]")
    .replace(/\b[a-f0-9]{64}\b/gi, "[redacted]")
    .replace(/\bpdl_(?:live|sdbx)_[\w-]+\b/gi, "[redacted]")
    .replace(/\b[A-Za-z0-9_-]{40,}\b/g, "[redacted]")
    .slice(0, maxLength);
}

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
  const parsed = await response.json().catch(() => null);
  const body = parsed && typeof parsed === "object" ? parsed as PaddleResponse<T> : {};
  if (!response.ok) {
    console.error("paddle_api_error", {
      status: response.status,
      method: init.method || "GET",
      path: path.split("?")[0].replace(/^(\/(?:transactions|subscriptions))\/[^/]+/, "$1/:id"),
      type: safePaddleDiagnostic(body.error?.type, config, 80),
      code: safePaddleDiagnostic(body.error?.code, config, 80),
      detail: safePaddleDiagnostic(body.error?.detail, config, 400),
      requestId: safePaddleDiagnostic(body.meta?.request_id, config, 80),
    });
    throw new Error(`paddle_api_${response.status}`);
  }
  if (!body.data) throw new Error(`paddle_api_${response.status}`);
  return body.data;
}

export async function createPaddleCheckoutTransaction(
  config: PaddleRuntimeConfig,
  input: { userId: string; claimId?: never; offerCode: string; offer?: PaddleOffer } | { claimId: string; userId?: never; offerCode: string; offer?: PaddleOffer },
) {
  const data = await paddleJson<PaddleTransaction>(config, "/transactions", {
    method: "POST",
    body: JSON.stringify({
      items: [{ price_id: input.offer === "trial" ? config.trialPriceId : config.priceId, quantity: 1 }],
      currency_code: "USD",
      collection_mode: "automatic",
      custom_data: {
        ...(input.claimId ? { spanishcue_claim_id: input.claimId } : { spanishcue_user_id: input.userId }),
        spanishcue_offer_code: input.offerCode,
        spanishcue_checkout_offer: input.offer || "monthly",
      },
    }),
  });
  if (typeof data.id !== "string" || !data.id.startsWith("txn_")) throw new Error("paddle_transaction_invalid");
  return data.id;
}

export async function getPaddleTransaction(config: PaddleRuntimeConfig, transactionId: string) {
  return paddleJson<PaddleTransaction>(config, `/transactions/${encodeURIComponent(transactionId)}?include=customer`);
}

export async function getPaddleSubscription(config: PaddleRuntimeConfig, subscriptionId: string) {
  return paddleJson<PaddleSubscription>(config, `/subscriptions/${encodeURIComponent(subscriptionId)}`);
}

function claimFromCustomData(value: unknown, offerCode: string) {
  if (!value || typeof value !== "object") return "";
  const custom = value as Record<string, unknown>;
  return custom.spanishcue_offer_code === offerCode && typeof custom.spanishcue_claim_id === "string"
    ? custom.spanishcue_claim_id : "";
}

export function validatePaddleClaimSubscription(subscription: PaddleSubscription, config: PaddleRuntimeConfig, claimId: string, offerCode: string) {
  return claimFromCustomData(subscription.custom_data, offerCode) === claimId
    && validatePaddleSubscription(subscription, config, claimId, "spanishcue_claim_id");
}

export function validatePaddleClaimTransaction(transaction: PaddleTransaction, config: PaddleRuntimeConfig, claimId: string, offerCode: string) {
  return claimFromCustomData(transaction.custom_data, offerCode) === claimId
    && validatePaddleTransaction(transaction, config, claimId, "spanishcue_claim_id")
    && transaction.status === "completed"
    && paddleTransactionAmountValid(transaction, config)
    && transaction.currency_code === "USD";
}

export function validatePaddleSubscription(subscription: PaddleSubscription, config: PaddleRuntimeConfig, userId: string, customKey: "spanishcue_user_id" | "spanishcue_claim_id" = "spanishcue_user_id") {
  if (typeof subscription.id !== "string" || !subscription.id.startsWith("sub_")) return false;
  const custom = subscription.custom_data && typeof subscription.custom_data === "object"
    ? subscription.custom_data as Record<string, unknown>
    : {};
  if (custom[customKey] !== userId) return false;
  return paddleOffer(subscription, config) !== null
    && (subscription.status !== "trialing" || paddleOffer(subscription, config) === "trial");
}

export function validatePaddleTransaction(transaction: PaddleTransaction, config: PaddleRuntimeConfig, userId: string, customKey: "spanishcue_user_id" | "spanishcue_claim_id" = "spanishcue_user_id") {
  const custom = transaction.custom_data && typeof transaction.custom_data === "object"
    ? transaction.custom_data as Record<string, unknown> : {};
  return custom[customKey] === userId && paddleOffer(transaction, config) !== null;
}

/** Only the two configured catalog prices are valid. The trial remains on its
 * original price ID after conversion; its base billing cycle is still monthly. */
export function paddleOffer(entity: Pick<PaddleTransaction, "items">, config: PaddleRuntimeConfig): PaddleOffer | null {
  if (config.priceId !== PADDLE_MONTHLY_PRICE_ID || (config.trialPriceId && config.trialPriceId !== PADDLE_TRIAL_PRICE_ID)) return null;
  const item = entity.items?.length === 1 ? entity.items[0] : null;
  const price = item?.price;
  if (!price || item?.quantity !== 1 || price.product_id !== PADDLE_PRODUCT_ID
      || price.tax_mode !== "internal" || !(price.unit_price?.amount === String(PADDLE_MONTHLY_CENTS) || (config.legacyMonthly && price.id === config.priceId && price.unit_price?.amount === "1500"))
      || price.unit_price?.currency_code !== "USD" || price.billing_cycle?.interval !== "month"
      || price.billing_cycle.frequency !== 1) return null;
  if (price.id === config.priceId && price.trial_period == null) return "monthly";
  const trial = price.trial_period;
  if (config.trialPriceId && config.trialPriceId !== config.priceId && price.id === config.trialPriceId
      && trial?.interval === "day" && trial.frequency === 1 && trial.requires_payment_method !== false
      && trial.unit_price?.amount === String(PADDLE_TRIAL_CENTS) && trial.unit_price.currency_code === "USD") return "trial";
  return null;
}

function paddleTransactionAmountValid(transaction: PaddleTransaction, config: PaddleRuntimeConfig) {
  const offer = paddleOffer(transaction, config);
  const amount = Number(transaction.details?.totals?.total);
  return offer !== null && (amount === Number(transaction.items?.[0].price?.unit_price?.amount) || (offer === "trial" && amount === PADDLE_TRIAL_CENTS));
}

/** Derive grants from the paid transaction's period, never from a newer
 * subscription period: replaying yesterday's trial cannot buy another month. */
export function paddleCompletedPayment(transaction: PaddleTransaction, subscription: PaddleSubscription, config: PaddleRuntimeConfig) {
  const offer = paddleOffer(transaction, config);
  if (!offer || paddleOffer(subscription, config) !== offer
      || transaction.items?.[0].price?.id !== subscription.items?.[0].price?.id
      || transaction.status !== "completed" || transaction.currency_code !== "USD"
      || !paddleTransactionAmountValid(transaction, config)
      || transaction.subscription_id !== subscription.id || !transaction.customer_id
      || transaction.customer_id !== subscription.customer_id) return null;
  const amountCents = Number(transaction.details?.totals?.total);
  const isTrial = amountCents === PADDLE_TRIAL_CENTS;
  const period = transaction.billing_period ?? (isTrial && subscription.status === "trialing" ? subscription.current_billing_period : null);
  const start = typeof period?.starts_at === "string" ? Math.floor(Date.parse(period.starts_at) / 1000) : NaN;
  const end = typeof period?.ends_at === "string" ? Math.floor(Date.parse(period.ends_at) / 1000) : NaN;
  if (!Number.isInteger(start) || !Number.isInteger(end) || end <= start
      || (isTrial && end - start !== 86400)
      || (!isTrial && (end - start < 28 * 86400 || end - start > 31 * 86400))
      || (subscription.status === "trialing" && !isTrial)
      || !["active", "trialing", "canceled", "paused", "past_due"].includes(String(subscription.status))) return null;
  return { amountCents, currency: "USD", isTrial, paidThrough: end, paidAt: start,
    priceId: String(transaction.items![0].price!.id) };
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
