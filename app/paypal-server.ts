import {
  APPROVED_CURRENCY,
  APPROVED_INTERVAL,
  APPROVED_PRICE_CENTS,
  PAYPAL_ALLOWED_CENTS,
  PAYPAL_LIVE_PROMO_PLAN_ID,
  PAYPAL_PROMO_PLAN_NAME,
  type BillingRuntimeConfig,
} from "./billing-config";
import { PROMO_WEEK_CENTS, PROMO_WEEK_CODE, PROMO_WEEK_THEN_CENTS } from "./promo-config";

type PaypalLink = { href?: unknown; rel?: unknown };
export type PaypalSubscription = {
  id?: unknown;
  plan_id?: unknown;
  custom_id?: unknown;
  status?: unknown;
  subscriber?: { payer_id?: unknown; email_address?: unknown };
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
  name?: unknown;
  product_id?: unknown;
  status?: unknown;
  billing_cycles?: Array<{
    sequence?: unknown;
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

/** A payment carries the current plan price, or US$15 for a subscription still on the legacy Founder plan.
 * A subscription on the verified promo plan (`planId`) pays US$0.99 for its first week and then US$19.90. */
export function validatePaypalPayment(money: PaypalMoney, config: BillingRuntimeConfig, planId?: unknown) {
  const amount = cents(money.value);
  if (config.promoPlanId && planId === config.promoPlanId) {
    return money.currency_code === APPROVED_CURRENCY && (amount === PROMO_WEEK_CENTS || amount === PROMO_WEEK_THEN_CENTS);
  }
  return money.currency_code === APPROVED_CURRENCY
    && (amount === Math.round(config.founderOffer.priceUsd * 100) || amount === APPROVED_PRICE_CENTS)
    && (PAYPAL_ALLOWED_CENTS as readonly number[]).includes(amount ?? -1);
}

/** The configured plan itself must carry exactly the current price. */
function validatePaypalPlanPrice(money: PaypalMoney, config: BillingRuntimeConfig) {
  return money.currency_code === APPROVED_CURRENCY && cents(money.value) === Math.round(config.founderOffer.priceUsd * 100)
    && (PAYPAL_ALLOWED_CENTS as readonly number[]).includes(cents(money.value) ?? -1);
}

export function validatePaypalPlan(plan: PaypalPlan, config: BillingRuntimeConfig) {
  if (plan.id !== config.founderPlanId || plan.product_id !== config.productId || plan.status !== "ACTIVE") return false;
  if (!Array.isArray(plan.billing_cycles) || plan.billing_cycles.length !== 1) return false;
  const cycle = plan.billing_cycles[0];
  return cycle.tenure_type === "REGULAR"
    && cycle.total_cycles === 0
    && cycle.frequency?.interval_unit === APPROVED_INTERVAL.unit
    && cycle.frequency?.interval_count === APPROVED_INTERVAL.count
    && validatePaypalPlanPrice(cycle.pricing_scheme?.fixed_price || {}, config)
    && cents(plan.payment_preferences?.setup_fee?.value ?? "0") === 0
    && plan.payment_preferences?.setup_fee?.currency_code === APPROVED_CURRENCY;
}

export function validatePaypalSubscription(
  subscription: PaypalSubscription,
  expected: { subscriptionId: string; userId: string; config: BillingRuntimeConfig },
) {
  return subscription.id === expected.subscriptionId
    && (subscription.plan_id === expected.config.founderPlanId
      || (Boolean(expected.config.legacyFounderPlanId) && subscription.plan_id === expected.config.legacyFounderPlanId)
      || (Boolean(expected.config.promoPlanId) && subscription.plan_id === expected.config.promoPlanId))
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

/** The promo plan: one US$0.99 trial week, then US$19.90 every month, on the PRO product, no setup fee. */
export function validatePaypalPromoPlan(plan: PaypalPlan, config: BillingRuntimeConfig) {
  if (typeof plan.id !== "string" || !plan.id.startsWith("P-") || plan.product_id !== config.productId || plan.status !== "ACTIVE"
      || plan.id === config.founderPlanId || plan.id === config.legacyFounderPlanId) return false;
  if (!Array.isArray(plan.billing_cycles) || plan.billing_cycles.length !== 2) return false;
  const trial = plan.billing_cycles.find((cycle) => cycle.tenure_type === "TRIAL");
  const regular = plan.billing_cycles.find((cycle) => cycle.tenure_type === "REGULAR");
  const price = (cycle: typeof trial) => cycle?.pricing_scheme?.fixed_price;
  return Boolean(trial && regular)
    && trial!.sequence === 1 && trial!.total_cycles === 1
    && trial!.frequency?.interval_unit === "WEEK" && trial!.frequency.interval_count === 1
    && price(trial)?.currency_code === APPROVED_CURRENCY && cents(price(trial)?.value) === PROMO_WEEK_CENTS
    && regular!.sequence === 2 && regular!.total_cycles === 0
    && regular!.frequency?.interval_unit === APPROVED_INTERVAL.unit && regular!.frequency.interval_count === APPROVED_INTERVAL.count
    && price(regular)?.currency_code === APPROVED_CURRENCY && cents(price(regular)?.value) === PROMO_WEEK_THEN_CENTS
    && cents(plan.payment_preferences?.setup_fee?.value ?? "0") === 0;
}

// Promo plan IDs already fetched from PayPal and verified by this isolate, per environment.
const verifiedPromoPlans = new Set<string>();
const ensuredPromoPlan = new Map<string, { planId: string; at: number }>();
const promoPlanFailedAt = new Map<string, number>();

/** True only when PayPal itself returns this plan with exactly the promo terms. */
export async function paypalPromoPlanVerified(config: BillingRuntimeConfig, planId: unknown) {
  if (typeof planId !== "string" || !/^P-[A-Z0-9]{10,40}$/.test(planId)) return false;
  if (config.paypalEnv === "live" && PAYPAL_LIVE_PROMO_PLAN_ID && planId !== PAYPAL_LIVE_PROMO_PLAN_ID) return false;
  const key = `${config.paypalEnv}:${planId}`;
  if (verifiedPromoPlans.has(key)) return true;
  const plan = await paypalJson<PaypalPlan>(config, `/v1/billing/plans/${encodeURIComponent(planId)}`, {});
  if (plan.id !== planId || !validatePaypalPromoPlan(plan, config)) return false;
  verifiedPromoPlans.add(key);
  return true;
}

/** The same configuration with `promoPlanId` set when `planId` is the verified promo plan. Regular
 * plans never cost a PayPal request, and a lookup failure only leaves the promo plan unrecognized. */
export async function withPaypalPromoPlan(config: BillingRuntimeConfig, planId: unknown): Promise<BillingRuntimeConfig> {
  if (typeof planId !== "string" || planId === config.founderPlanId || planId === config.legacyFounderPlanId) return config;
  try {
    return await paypalPromoPlanVerified(config, planId) ? { ...config, promoPlanId: planId } : config;
  } catch {
    return config;
  }
}

/** Finds the promo plan on the PRO product (pinned ID, or by its exact name) and, only when PayPal has
 * none, creates it once. The fixed request ID makes a concurrent or repeated creation return the same
 * plan instead of a duplicate. Existing plans are never modified. */
export async function ensurePaypalPromoPlan(config: BillingRuntimeConfig) {
  const cached = ensuredPromoPlan.get(config.paypalEnv);
  if (cached && Date.now() - cached.at < 6 * 60 * 60 * 1000) return cached.planId;
  // After a failure, wait five minutes before asking PayPal again: page views must not hammer it.
  const failedAt = promoPlanFailedAt.get(config.paypalEnv);
  if (failedAt && Date.now() - failedAt < 5 * 60 * 1000) throw new Error("paypal_promo_plan_unavailable");
  try {
    const planId = await findOrCreatePaypalPromoPlan(config);
    ensuredPromoPlan.set(config.paypalEnv, { planId, at: Date.now() });
    promoPlanFailedAt.delete(config.paypalEnv);
    return planId;
  } catch (error) {
    promoPlanFailedAt.set(config.paypalEnv, Date.now());
    throw error;
  }
}

async function findOrCreatePaypalPromoPlan(config: BillingRuntimeConfig) {
  if (!config.clientId || !config.clientSecret || !config.productId) throw new Error("paypal_resources_missing");
  let planId = config.paypalEnv === "live" ? PAYPAL_LIVE_PROMO_PLAN_ID : "";
  if (!planId) {
    const query = new URLSearchParams({ product_id: config.productId, page_size: "20", page: "1", total_required: "false" });
    const listed = await paypalJson<{ plans?: Array<{ id?: unknown; name?: unknown; status?: unknown }> }>(config, `/v1/billing/plans?${query}`, {});
    const found = (listed.plans || []).find((plan) => plan.name === PAYPAL_PROMO_PLAN_NAME && plan.status === "ACTIVE");
    planId = typeof found?.id === "string" ? found.id : "";
  }
  if (!planId) {
    const money = (amountCents: number) => ({ value: (amountCents / 100).toFixed(2), currency_code: APPROVED_CURRENCY });
    const created = await paypalJson<PaypalPlan>(config, "/v1/billing/plans", {
      method: "POST",
      headers: { "paypal-request-id": `spanishcue-promo-${PROMO_WEEK_CODE}`, prefer: "return=representation" },
      body: JSON.stringify({
        product_id: config.productId,
        name: PAYPAL_PROMO_PLAN_NAME,
        description: "SpanishCue PRO: first week US$0.99, then US$19.90 every month until cancelled.",
        status: "ACTIVE",
        billing_cycles: [
          { frequency: { interval_unit: "WEEK", interval_count: 1 }, tenure_type: "TRIAL", sequence: 1, total_cycles: 1,
            pricing_scheme: { fixed_price: money(PROMO_WEEK_CENTS) } },
          { frequency: { interval_unit: APPROVED_INTERVAL.unit, interval_count: APPROVED_INTERVAL.count }, tenure_type: "REGULAR", sequence: 2, total_cycles: 0,
            pricing_scheme: { fixed_price: money(PROMO_WEEK_THEN_CENTS) } },
        ],
        payment_preferences: { auto_bill_outstanding: true, setup_fee: money(0), setup_fee_failure_action: "CONTINUE", payment_failure_threshold: 3 },
      }),
    });
    planId = typeof created.id === "string" ? created.id : "";
  }
  if (!(await paypalPromoPlanVerified(config, planId))) throw new Error("paypal_promo_plan_mismatch");
  return planId;
}

export async function createPaypalSubscription(
  config: BillingRuntimeConfig,
  input: ({ origin: string; returnTo: string; userId: string; claimId?: never; requestId?: string }
    | { origin: string; returnTo: string; claimId: string; userId?: never; requestId?: string }) & { planId?: string },
) {
  const response = await paypalRequest(config, "/v1/billing/subscriptions", {
    method: "POST",
    headers: { "paypal-request-id": input.requestId || crypto.randomUUID() },
    body: JSON.stringify({
      plan_id: input.planId || config.founderPlanId,
      custom_id: input.claimId || input.userId,
      application_context: {
        brand_name: "SPANISHCUE",
        user_action: "SUBSCRIBE_NOW",
        shipping_preference: "NO_SHIPPING",
        return_url: input.claimId ? `${input.origin}/pro/claim?provider=paypal` : `${input.origin}/pro/success?returnTo=${encodeURIComponent(input.returnTo)}`,
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

export async function suspendPaypalSubscription(config: BillingRuntimeConfig, subscriptionId: string) {
  const response = await paypalRequest(config, `/v1/billing/subscriptions/${encodeURIComponent(subscriptionId)}/suspend`, {
    method: "POST",
    body: JSON.stringify({ reason: "Paused online by the subscriber from SPANISHCUE account settings." }),
  });
  if (!response.ok && response.status !== 204) throw new Error("paypal_subscription_suspend_failed");
}

export async function activatePaypalSubscription(config: BillingRuntimeConfig, subscriptionId: string) {
  const response = await paypalRequest(config, `/v1/billing/subscriptions/${encodeURIComponent(subscriptionId)}/activate`, {
    method: "POST",
    body: JSON.stringify({ reason: "Resumed online by the subscriber from SPANISHCUE account settings." }),
  });
  if (!response.ok && response.status !== 204) throw new Error("paypal_subscription_activate_failed");
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
