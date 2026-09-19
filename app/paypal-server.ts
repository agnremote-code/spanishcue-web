import {
  APPROVED_CURRENCY,
  APPROVED_INTERVAL,
  APPROVED_PRICE_CENTS,
  type BillingRuntimeConfig,
} from "./billing-config";

type PaypalLink = { href?: unknown; rel?: unknown };
export type PaypalSubscription = {
  id?: unknown;
  plan_id?: unknown;
  custom_id?: unknown;
  status?: unknown;
  subscriber?: { payer_id?: unknown };
  billing_info?: { next_billing_time?: unknown; last_payment?: { amount?: PaypalMoney; time?: unknown } };
  links?: PaypalLink[];
};

export type PaypalTransaction = {
  id?: unknown;
  status?: unknown;
  time?: unknown;
  amount_with_breakdown?: { gross_amount?: PaypalMoney };
};

type PaypalMoney = { value?: unknown; currency_code?: unknown };
type PaypalPlan = {
  id?: unknown;
  product_id?: unknown;
  status?: unknown;
  billing_cycles?: Array<{
    frequency?: { interval_unit?: unknown; interval_count?: unknown };
    tenure_type?: unknown;
    total_cycles?: unknown;
    pricing_scheme?: { fixed_price?: PaypalMoney };
  }>;
  payment_preferences?: { setup_fee?: PaypalMoney };
};

function cents(value: unknown) {
  if (typeof value !== "string" || !/^\d+(?:\.\d{1,2})?$/.test(value)) return null;
  const [whole, fraction = ""] = value.split(".");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
}

export function validatePaypalPayment(money: PaypalMoney, config: BillingRuntimeConfig) {
  return money.currency_code === APPROVED_CURRENCY
    && cents(money.value) === Math.round(config.founderOffer.priceUsd * 100)
    && cents(money.value) === APPROVED_PRICE_CENTS;
}

export function validatePaypalPlan(plan: PaypalPlan, config: BillingRuntimeConfig) {
  if (plan.id !== config.founderPlanId || plan.product_id !== config.productId || plan.status !== "ACTIVE") return false;
  if (!Array.isArray(plan.billing_cycles) || plan.billing_cycles.length !== 1) return false;
  const cycle = plan.billing_cycles[0];
  return cycle.tenure_type === "REGULAR"
    && cycle.total_cycles === 0
    && cycle.frequency?.interval_unit === APPROVED_INTERVAL.unit
    && cycle.frequency?.interval_count === APPROVED_INTERVAL.count
    && validatePaypalPayment(cycle.pricing_scheme?.fixed_price || {}, config)
    && cents(plan.payment_preferences?.setup_fee?.value ?? "0") === 0
    && plan.payment_preferences?.setup_fee?.currency_code === APPROVED_CURRENCY;
}

export function validatePaypalSubscription(
  subscription: PaypalSubscription,
  expected: { subscriptionId: string; userId: string; config: BillingRuntimeConfig },
) {
  return subscription.id === expected.subscriptionId
    && subscription.plan_id === expected.config.founderPlanId
    && subscription.custom_id === expected.userId;
}

function endpoint(config: BillingRuntimeConfig) {
  return config.paypalEnv === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

export async function paypalAccessToken(config: BillingRuntimeConfig) {
  const credentials = btoa(`${config.clientId}:${config.clientSecret}`);
  const response = await fetch(`${endpoint(config)}/v1/oauth2/token`, {
    method: "POST",
    headers: { authorization: `Basic ${credentials}`, "content-type": "application/x-www-form-urlencoded" },
    body: "grant_type=client_credentials",
  });
  if (!response.ok) throw new Error("paypal_auth_failed");
  const payload = await response.json() as { access_token?: unknown };
  if (typeof payload.access_token !== "string" || !payload.access_token) throw new Error("paypal_auth_failed");
  return payload.access_token;
}

async function paypalRequest(config: BillingRuntimeConfig, path: string, init: RequestInit = {}) {
  const token = await paypalAccessToken(config);
  const response = await fetch(`${endpoint(config)}${path}`, {
    ...init,
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json", ...(init.headers || {}) },
  });
  return response;
}

async function paypalJson<T>(config: BillingRuntimeConfig, path: string, init: RequestInit) {
  const response = await paypalRequest(config, path, init);
  const body = await response.json().catch(() => ({})) as T;
  if (!response.ok) throw new Error(`paypal_api_${response.status}`);
  return body;
}

/** Verifies configured provider resources. Resource creation is deliberately
 * excluded: a missing identifier must be located in the PayPal dashboard, not
 * replaced by an accidental duplicate. */
export async function setupPaypalBilling(config: BillingRuntimeConfig, origin: string) {
  if (!config.clientId || !config.clientSecret || !config.productId || !config.founderPlanId || !config.webhookId) {
    throw new Error("paypal_resources_missing");
  }
  const plan = await paypalJson<PaypalPlan>(config, `/v1/billing/plans/${encodeURIComponent(config.founderPlanId)}`, {});
  if (!validatePaypalPlan(plan, config)) throw new Error("paypal_plan_mismatch");
  const webhook = await paypalJson<{ url?: unknown; event_types?: Array<{ name?: unknown }> }>(
    config,
    `/v1/notifications/webhooks/${encodeURIComponent(config.webhookId)}`,
    {},
  );
  const requiredEvents = [
    "BILLING.SUBSCRIPTION.CREATED", "BILLING.SUBSCRIPTION.ACTIVATED", "BILLING.SUBSCRIPTION.UPDATED",
    "BILLING.SUBSCRIPTION.CANCELLED", "BILLING.SUBSCRIPTION.SUSPENDED", "BILLING.SUBSCRIPTION.EXPIRED",
    "BILLING.SUBSCRIPTION.PAYMENT.FAILED", "PAYMENT.SALE.COMPLETED", "PAYMENT.SALE.REFUNDED", "PAYMENT.SALE.REVERSED",
  ];
  const configuredEvents = new Set((webhook.event_types || []).map((item) => item.name));
  if (webhook.url !== `${origin}/api/billing/webhook` || requiredEvents.some((name) => !configuredEvents.has(name))) {
    throw new Error("paypal_webhook_mismatch");
  }
  return { productId: config.productId, founderPlanId: config.founderPlanId, webhookId: config.webhookId };
}

export async function createPaypalSubscription(
  config: BillingRuntimeConfig,
  input: { origin: string; returnTo: string; userId: string; requestId?: string },
) {
  const response = await paypalRequest(config, "/v1/billing/subscriptions", {
    method: "POST",
    headers: { "paypal-request-id": input.requestId || crypto.randomUUID() },
    body: JSON.stringify({
      plan_id: config.founderPlanId,
      custom_id: input.userId,
      application_context: {
        brand_name: "SPANISHCUE",
        user_action: "SUBSCRIBE_NOW",
        shipping_preference: "NO_SHIPPING",
        return_url: `${input.origin}/pro/success?returnTo=${encodeURIComponent(input.returnTo)}`,
        cancel_url: `${input.origin}/pro/cancel?returnTo=${encodeURIComponent(input.returnTo)}`,
      },
    }),
  });
  if (!response.ok) throw new Error("paypal_create_subscription_failed");
  const subscription = await response.json() as PaypalSubscription;
  const subscriptionId = typeof subscription.id === "string" ? subscription.id : "";
  const approvalUrl = subscription.links?.find((link) => link.rel === "approve")?.href;
  if (!subscriptionId || typeof approvalUrl !== "string" || !approvalUrl.startsWith("https://")) {
    throw new Error("paypal_invalid_subscription_response");
  }
  return { subscriptionId, approvalUrl };
}

export async function getPaypalSubscription(config: BillingRuntimeConfig, subscriptionId: string) {
  const response = await paypalRequest(config, `/v1/billing/subscriptions/${encodeURIComponent(subscriptionId)}`);
  if (!response.ok) throw new Error("paypal_subscription_lookup_failed");
  return response.json() as Promise<PaypalSubscription>;
}

export async function getPaypalSubscriptionTransactions(config: BillingRuntimeConfig, subscriptionId: string) {
  const end = new Date();
  const start = new Date(end.getTime() - 45 * 24 * 60 * 60 * 1000);
  const query = new URLSearchParams({ start_time: start.toISOString(), end_time: end.toISOString() });
  const response = await paypalRequest(
    config,
    `/v1/billing/subscriptions/${encodeURIComponent(subscriptionId)}/transactions?${query}`,
  );
  if (!response.ok) throw new Error("paypal_transactions_lookup_failed");
  const body = await response.json() as { transactions?: unknown };
  return Array.isArray(body.transactions) ? body.transactions as PaypalTransaction[] : [];
}

export async function cancelPaypalSubscription(config: BillingRuntimeConfig, subscriptionId: string) {
  const response = await paypalRequest(config, `/v1/billing/subscriptions/${encodeURIComponent(subscriptionId)}/cancel`, {
    method: "POST",
    body: JSON.stringify({ reason: "Cancelled online by the subscriber from SPANISHCUE account settings." }),
  });
  if (!response.ok && response.status !== 204) throw new Error("paypal_subscription_cancel_failed");
}

export async function verifyPaypalWebhook(
  config: BillingRuntimeConfig,
  request: Request,
  event: unknown,
) {
  const required = [
    "paypal-auth-algo", "paypal-cert-url", "paypal-transmission-id",
    "paypal-transmission-sig", "paypal-transmission-time",
  ] as const;
  if (required.some((header) => !request.headers.get(header))) return false;
  const response = await paypalRequest(config, "/v1/notifications/verify-webhook-signature", {
    method: "POST",
    body: JSON.stringify({
      auth_algo: request.headers.get("paypal-auth-algo"),
      cert_url: request.headers.get("paypal-cert-url"),
      transmission_id: request.headers.get("paypal-transmission-id"),
      transmission_sig: request.headers.get("paypal-transmission-sig"),
      transmission_time: request.headers.get("paypal-transmission-time"),
      webhook_id: config.webhookId,
      webhook_event: event,
    }),
  });
  if (!response.ok) return false;
  const body = await response.json() as { verification_status?: unknown };
  return body.verification_status === "SUCCESS";
}
