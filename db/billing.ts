import { APPROVED_CURRENCY, APPROVED_PRICE_CENTS, PRO_PRODUCT_CODE, type BillingRuntimeConfig } from "../app/billing-config";

export type PaypalEnvironment = "sandbox" | "live";
export type SubscriptionStatus = "FREE" | "PENDING" | "APPROVAL_PENDING" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "CANCELLED" | "EXPIRED";
export type PaymentStatus = "COMPLETED" | "REFUNDED" | "REVERSED";

const now = () => Math.floor(Date.now() / 1000);
const asSeconds = (value: unknown) => {
  if (typeof value !== "string") return null;
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? Math.floor(timestamp / 1000) : null;
};
const inputEventTime = (value: unknown, fallback: number) =>
  typeof value === "number" && Number.isInteger(value) && value >= 0 ? value : fallback;

export async function getFounderOfferStatus(db: D1Database, config: BillingRuntimeConfig) {
  const stamp = now();
  await db.prepare(
    `INSERT INTO founder_offer_state (environment, offer_code, "limit", claimed, enabled, updated_at)
     VALUES (?, ?, ?, 0, ?, ?)
     ON CONFLICT(environment, offer_code) DO UPDATE SET "limit" = excluded."limit", enabled = excluded.enabled, updated_at = excluded.updated_at`,
  ).bind(config.paypalEnv, config.founderOffer.code, config.founderOffer.limit, config.founderOffer.enabled ? 1 : 0, stamp).run();
  const state = await db.prepare(
    `SELECT "limit" AS offer_limit, claimed, enabled FROM founder_offer_state WHERE environment = ? AND offer_code = ?`,
  ).bind(config.paypalEnv, config.founderOffer.code).first<{ offer_limit: number; claimed: number; enabled: number }>();
  const limit = state?.offer_limit ?? config.founderOffer.limit;
  const claimed = state?.claimed ?? 0;
  const enabled = config.founderOffer.enabled && state?.enabled !== 0;
  return { enabled, limit, claimed, remaining: Math.max(0, limit - claimed), available: enabled && claimed < limit };
}

export async function createPendingSubscription(
  db: D1Database,
  input: { environment: PaypalEnvironment; userId: string; paypalSubscriptionId: string; planId: string; offerCode: string },
) {
  const stamp = now();
  await db.prepare(
    `INSERT INTO billing_subscriptions (
       user_id, provider, environment, provider_subscription_id, provider_plan_id, product_code,
       offer_code, status, created_at, updated_at
     ) VALUES (?, 'paypal', ?, ?, ?, ?, ?, 'APPROVAL_PENDING', ?, ?)
     ON CONFLICT(provider, environment, provider_subscription_id) DO UPDATE SET updated_at = excluded.updated_at`,
  ).bind(input.userId, input.environment, input.paypalSubscriptionId, input.planId, PRO_PRODUCT_CODE, input.offerCode, stamp, stamp).run();
  return db.prepare(
    `SELECT id FROM billing_subscriptions WHERE provider = 'paypal' AND environment = ? AND provider_subscription_id = ?`,
  ).bind(input.environment, input.paypalSubscriptionId).first<{ id: number }>();
}

export async function acquireCheckoutLock(
  db: D1Database,
  input: { environment: PaypalEnvironment; userId: string; requestId: string; heldUntil: number },
  stamp = now(),
) {
  await db.prepare(
    `INSERT INTO billing_checkout_locks (
      environment, user_id, product_code, request_id, status, held_until, created_at, updated_at
     ) VALUES (?, ?, ?, ?, 'creating', ?, ?, ?)
     ON CONFLICT(environment, user_id, product_code) DO UPDATE SET
      request_id = excluded.request_id, status = 'creating', provider_subscription_id = NULL,
      approval_url = NULL, held_until = excluded.held_until, updated_at = excluded.updated_at
     WHERE billing_checkout_locks.status = 'failed' OR billing_checkout_locks.held_until < ?`,
  ).bind(input.environment, input.userId, PRO_PRODUCT_CODE, input.requestId, input.heldUntil, stamp, stamp, stamp).run();
  const lock = await db.prepare(
    `SELECT request_id AS requestId, status, provider_subscription_id AS paypalSubscriptionId,
            approval_url AS approvalUrl
     FROM billing_checkout_locks
     WHERE environment = ? AND user_id = ? AND product_code = ?`,
  ).bind(input.environment, input.userId, PRO_PRODUCT_CODE).first<{
    requestId: string; status: string; paypalSubscriptionId: string | null; approvalUrl: string | null;
  }>();
  if (!lock) throw new Error("checkout_lock_missing");
  if (lock.status === "ready" && lock.paypalSubscriptionId && lock.approvalUrl) {
    return { kind: "ready" as const, requestId: lock.requestId, paypalSubscriptionId: lock.paypalSubscriptionId, approvalUrl: lock.approvalUrl };
  }
  if (lock.requestId !== input.requestId) return { kind: "busy" as const, requestId: lock.requestId };
  return { kind: "acquired" as const, requestId: lock.requestId };
}

export async function completeCheckoutLock(
  db: D1Database,
  input: {
    environment: PaypalEnvironment; userId: string; requestId: string;
    paypalSubscriptionId: string; approvalUrl: string;
  },
  stamp = now(),
) {
  const result = await db.prepare(
    `UPDATE billing_checkout_locks SET status = 'ready', provider_subscription_id = ?,
       approval_url = ?, updated_at = ?
     WHERE environment = ? AND user_id = ? AND product_code = ? AND request_id = ? AND status = 'creating'`,
  ).bind(input.paypalSubscriptionId, input.approvalUrl, stamp, input.environment, input.userId,
    PRO_PRODUCT_CODE, input.requestId).run();
  if ((result.meta.changes ?? 0) !== 1) throw new Error("checkout_lock_lost");
}

export async function failCheckoutLock(
  db: D1Database,
  input: { environment: PaypalEnvironment; userId: string; requestId: string },
) {
  await db.prepare(
    `UPDATE billing_checkout_locks SET status = 'failed', updated_at = ?
     WHERE environment = ? AND user_id = ? AND product_code = ? AND request_id = ?`,
  ).bind(now(), input.environment, input.userId, PRO_PRODUCT_CODE, input.requestId).run();
}

export async function subscriptionForUser(
  db: D1Database,
  userId: string,
  paypalSubscriptionId: string,
  environment: PaypalEnvironment = "sandbox",
) {
  return db.prepare(
    `SELECT id, status FROM billing_subscriptions
     WHERE user_id = ? AND provider = 'paypal' AND environment = ? AND provider_subscription_id = ? LIMIT 1`,
  ).bind(userId, environment, paypalSubscriptionId).first<{ id: number; status: SubscriptionStatus }>();
}

export async function subscriptionByPaypalId(db: D1Database, paypalSubscriptionId: string, environment: PaypalEnvironment = "sandbox") {
  return db.prepare(
    `SELECT id, user_id AS userId, status, offer_code AS offerCode,
            next_billing_time AS nextBillingTime, first_payment_at AS firstPaymentAt, paid_through AS paidThrough
     FROM billing_subscriptions
     WHERE provider = 'paypal' AND environment = ? AND provider_subscription_id = ? LIMIT 1`,
  ).bind(environment, paypalSubscriptionId).first<{
    id: number; userId: string; status: SubscriptionStatus; offerCode: string | null;
    nextBillingTime: number | null; firstPaymentAt: number | null; paidThrough: number | null;
  }>();
}

export async function currentSubscriptionForUser(db: D1Database, userId: string, environment: PaypalEnvironment = "sandbox") {
  return db.prepare(
    `SELECT id, provider, environment, provider_subscription_id AS providerSubscriptionId,
            status, offer_code AS offerCode, next_billing_time AS nextBillingTime,
            activated_at AS activatedAt, first_payment_at AS firstPaymentAt,
            paid_through AS paidThrough, cancelled_at AS cancelledAt
     FROM billing_subscriptions WHERE user_id = ? AND environment = ?
     ORDER BY CASE status WHEN 'ACTIVE' THEN 0 WHEN 'APPROVED' THEN 1 WHEN 'APPROVAL_PENDING' THEN 2 ELSE 3 END, updated_at DESC
     LIMIT 1`,
  ).bind(userId, environment).first<{
    id: number; provider: string; environment: PaypalEnvironment; providerSubscriptionId: string;
    status: SubscriptionStatus; offerCode: string | null; nextBillingTime: number | null;
    activatedAt: number | null; firstPaymentAt: number | null; paidThrough: number | null; cancelledAt: number | null;
  }>();
}

export async function markWebhookReceived(
  db: D1Database,
  environment: PaypalEnvironment,
  eventId: string,
  eventType: string,
  resourceId: string | null,
) {
  const stamp = now();
  const staleBefore = stamp - 300;
  const result = await db.prepare(
    `INSERT INTO payment_webhook_events (
      provider, environment, event_id, event_type, resource_id, received_at, processing_status
    ) VALUES ('paypal', ?, ?, ?, ?, ?, 'received')`,
  ).bind(environment, eventId, eventType, resourceId, stamp).run().catch(async (error) => {
    const retry = await db.prepare(
      `UPDATE payment_webhook_events SET
         event_type = ?, resource_id = ?, received_at = ?, processing_status = 'received',
         processed_at = NULL, error_code = NULL
       WHERE provider = 'paypal' AND environment = ? AND event_id = ?
         AND (processing_status = 'failed' OR (processing_status = 'received' AND received_at <= ?))`,
    ).bind(eventType, resourceId, stamp, environment, eventId, staleBefore).run();
    if ((retry.meta.changes ?? 0) === 1) return retry;
    const existing = await db.prepare(
      `SELECT processing_status FROM payment_webhook_events
       WHERE provider = 'paypal' AND environment = ? AND event_id = ? LIMIT 1`,
    ).bind(environment, eventId).first<{ processing_status: string }>();
    if (existing) return retry;
    throw error;
  });
  return (result.meta.changes ?? 0) === 1;
}

export async function finishWebhook(
  db: D1Database,
  environment: PaypalEnvironment,
  eventId: string,
  status: "processed" | "ignored" | "failed",
  errorCode: string | null = null,
) {
  await db.prepare(
    `UPDATE payment_webhook_events SET processing_status = ?, processed_at = ?, error_code = ?
     WHERE provider = 'paypal' AND environment = ? AND event_id = ?`,
  ).bind(status, now(), errorCode, environment, eventId).run();
}

/** Provider lifecycle only updates lifecycle facts. It never creates access. */
export async function applyPaypalSubscriptionLifecycle(
  db: D1Database,
  environment: PaypalEnvironment,
  paypalSubscriptionId: string,
  details: { status: SubscriptionStatus; subscriberId?: string | null; nextBillingTime?: unknown; eventType: string; occurredAt?: number },
) {
  const subscription = await subscriptionByPaypalId(db, paypalSubscriptionId, environment);
  if (!subscription) return null;
  const stamp = now();
  const terminal = details.status === "CANCELLED" || details.status === "SUSPENDED" || details.status === "EXPIRED";
  const failed = details.eventType === "BILLING.SUBSCRIPTION.PAYMENT.FAILED";
  const occurredAt = inputEventTime(details.occurredAt, stamp);
  const update = await db.prepare(
    `UPDATE billing_subscriptions SET
       status = ?, provider_subscriber_id = COALESCE(?, provider_subscriber_id),
       provider_event_time = ?,
       next_billing_time = COALESCE(?, next_billing_time),
       activated_at = CASE WHEN ? = 'ACTIVE' AND activated_at IS NULL THEN ? ELSE activated_at END,
       cancelled_at = CASE WHEN ? THEN ? ELSE cancelled_at END,
       last_failure_at = CASE WHEN ? THEN ? ELSE last_failure_at END,
       updated_at = ? WHERE id = ? AND (provider_event_time IS NULL OR provider_event_time <= ?)`,
  ).bind(details.status, details.subscriberId ?? null, occurredAt, asSeconds(details.nextBillingTime), details.status, stamp,
    terminal ? 1 : 0, stamp, failed ? 1 : 0, stamp, stamp, subscription.id, occurredAt).run();

  if ((update.meta.changes ?? 0) !== 1) return subscription;

  if (terminal) {
    const paidThrough = subscription.paidThrough;
    await db.prepare(
      `UPDATE access_grants SET status = ?, expires_at = ?, updated_at = ?
       WHERE user_id = ? AND product_code = ? AND source = 'billing' AND source_reference = ?`,
    ).bind(paidThrough && paidThrough > stamp ? "active" : "inactive", paidThrough && paidThrough > stamp ? paidThrough : stamp,
      stamp, subscription.userId, PRO_PRODUCT_CODE, paypalSubscriptionId).run();
  }
  return subscription;
}

/** Compatibility name for older route imports; semantics remain lifecycle-only. */
export async function applyPaypalSubscription(
  db: D1Database,
  paypalSubscriptionId: string,
  details: { status: SubscriptionStatus; subscriberId?: string | null; nextBillingTime?: unknown; eventType: string; occurredAt?: number },
  config: BillingRuntimeConfig,
) {
  return applyPaypalSubscriptionLifecycle(db, config.paypalEnv, paypalSubscriptionId, details);
}

async function claimFounderSlot(db: D1Database, subscriptionId: number, userId: string, config: BillingRuntimeConfig) {
  const offer = await getFounderOfferStatus(db, config);
  if (!offer.available) return null;
  const result = await db.prepare(
    `INSERT INTO founder_assignments (environment, user_id, subscription_id, offer_code, founder_number, created_at)
     SELECT ?, ?, ?, s.offer_code, s.claimed + 1, ?
     FROM founder_offer_state s
     WHERE s.environment = ? AND s.offer_code = ? AND s.enabled = 1 AND s.claimed < s."limit"
       AND NOT EXISTS (SELECT 1 FROM founder_assignments a WHERE a.environment = ? AND a.user_id = ? AND a.offer_code = s.offer_code)
       AND NOT EXISTS (SELECT 1 FROM founder_assignments a WHERE a.environment = ? AND a.subscription_id = ?)
     RETURNING founder_number`,
  ).bind(config.paypalEnv, userId, subscriptionId, now(), config.paypalEnv, config.founderOffer.code,
    config.paypalEnv, userId, config.paypalEnv, subscriptionId).first<{ founder_number: number }>();
  return result?.founder_number ?? null;
}

export async function recordPaypalPayment(
  db: D1Database,
  input: {
    environment: PaypalEnvironment; paypalSubscriptionId: string; providerPaymentId: string;
    providerEventId?: string; amountCents: number; currency: string; status: PaymentStatus;
    occurredAt: number; paidThrough?: number | null;
  },
  config: BillingRuntimeConfig,
) {
  if (input.environment !== config.paypalEnv) throw new Error("paypal_environment_mismatch");
  if (input.amountCents !== APPROVED_PRICE_CENTS || input.amountCents !== Math.round(config.founderOffer.priceUsd * 100)
      || input.currency !== APPROVED_CURRENCY) throw new Error("paypal_payment_mismatch");
  const subscription = await subscriptionByPaypalId(db, input.paypalSubscriptionId, input.environment);
  if (!subscription) throw new Error("paypal_subscription_unknown");
  const existing = await db.prepare(
    `SELECT id, status FROM billing_payments
     WHERE provider = 'paypal' AND environment = ? AND provider_payment_id = ? LIMIT 1`,
  ).bind(input.environment, input.providerPaymentId).first<{ id: number; status: PaymentStatus }>();
  if (existing?.status === input.status) return { kind: "duplicate" as const, paymentId: existing.id };

  const stamp = now();
  if (input.status === "COMPLETED") {
    if (existing) throw new Error("paypal_payment_terminal");
    await db.prepare(
      `INSERT INTO billing_payments (
        user_id, subscription_id, provider, environment, provider_payment_id, provider_event_id,
        amount_cents, currency, status, occurred_at, paid_through, created_at, updated_at
       ) VALUES (?, ?, 'paypal', ?, ?, ?, ?, ?, 'COMPLETED', ?, ?, ?, ?)`,
    ).bind(subscription.userId, subscription.id, input.environment, input.providerPaymentId, input.providerEventId ?? null,
      input.amountCents, input.currency, input.occurredAt, input.paidThrough ?? null, stamp, stamp).run();
    const payment = await db.prepare(
      `SELECT id FROM billing_payments WHERE provider = 'paypal' AND environment = ? AND provider_payment_id = ?`,
    ).bind(input.environment, input.providerPaymentId).first<{ id: number }>();
    if (!payment) throw new Error("paypal_payment_not_persisted");
    const isFirst = !subscription.firstPaymentAt;
    const paidThrough = Math.max(subscription.paidThrough ?? 0, input.paidThrough ?? input.occurredAt);
    await db.prepare(
      `UPDATE billing_subscriptions SET first_payment_at = COALESCE(first_payment_at, ?),
       last_payment_at = ?, paid_through = ?, updated_at = ? WHERE id = ?`,
    ).bind(input.occurredAt, input.occurredAt, paidThrough, stamp, subscription.id).run();
    await db.prepare(
      `INSERT INTO access_grants (
        user_id, product_code, access_level, source, source_reference, plan_code,
        status, starts_at, expires_at, created_at, updated_at
       ) VALUES (?, ?, 'full', 'billing', ?, ?, 'active', ?, ?, ?, ?)
       ON CONFLICT(user_id, product_code, source) DO UPDATE SET
        access_level = 'full', source_reference = excluded.source_reference, plan_code = excluded.plan_code,
        status = 'active', expires_at = excluded.expires_at, updated_at = excluded.updated_at`,
    ).bind(subscription.userId, PRO_PRODUCT_CODE, input.paypalSubscriptionId, config.founderOffer.code,
      input.occurredAt, paidThrough, stamp, stamp).run();
    if (isFirst && subscription.offerCode === config.founderOffer.code) {
      await claimFounderSlot(db, subscription.id, subscription.userId, config);
    }
    const eventName = isFirst ? "first_subscription_paid" : "subscription_renewed";
    await db.prepare(
      `INSERT INTO billing_outbox_events (
        provider, environment, event_key, event_name, user_id, subscription_id, payment_id, occurred_at, created_at
       ) VALUES ('paypal', ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(provider, environment, event_key) DO NOTHING`,
    ).bind(input.environment, `${eventName}:${input.providerPaymentId}`, eventName, subscription.userId,
      subscription.id, payment.id, input.occurredAt, stamp).run();
    return { kind: isFirst ? "first" as const : "renewal" as const, paymentId: payment.id };
  }

  if (!existing) throw new Error("paypal_payment_unknown");
  await db.prepare(
    `UPDATE billing_payments SET status = ?, provider_event_id = COALESCE(?, provider_event_id),
     occurred_at = ?, updated_at = ? WHERE id = ?`,
  ).bind(input.status, input.providerEventId ?? null, input.occurredAt, stamp, existing.id).run();
  const remaining = await db.prepare(
    `SELECT MAX(paid_through) AS paidThrough FROM billing_payments
     WHERE subscription_id = ? AND status = 'COMPLETED'`,
  ).bind(subscription.id).first<{ paidThrough: number | null }>();
  const paidThrough = remaining?.paidThrough ?? null;
  await db.prepare(`UPDATE billing_subscriptions SET paid_through = ?, updated_at = ? WHERE id = ?`)
    .bind(paidThrough, stamp, subscription.id).run();
  await db.prepare(
    `UPDATE access_grants SET status = ?, expires_at = ?, updated_at = ?
     WHERE user_id = ? AND product_code = ? AND source = 'billing' AND source_reference = ?`,
  ).bind(paidThrough && paidThrough > stamp ? "active" : "inactive", paidThrough && paidThrough > stamp ? paidThrough : stamp,
    stamp, subscription.userId, PRO_PRODUCT_CODE, input.paypalSubscriptionId).run();
  const eventName = input.status === "REFUNDED" ? "subscription_refunded" : "subscription_reversed";
  await db.prepare(
    `INSERT INTO billing_outbox_events (
      provider, environment, event_key, event_name, user_id, subscription_id, payment_id, occurred_at, created_at
     ) VALUES ('paypal', ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(provider, environment, event_key) DO NOTHING`,
  ).bind(input.environment, `${eventName}:${input.providerPaymentId}`, eventName, subscription.userId,
    subscription.id, existing.id, input.occurredAt, stamp).run();
  return { kind: input.status === "REFUNDED" ? "refund" as const : "reversal" as const, paymentId: existing.id };
}

/**
 * Claims the one acquisition conversion produced by the payment transaction.
 * The outbox row is created with the confirmed payment, never by the callback.
 */
export async function claimFirstPaidConversionForUser(
  db: D1Database,
  userId: string,
  paypalSubscriptionId: string,
  environment: PaypalEnvironment,
) {
  const event = await db.prepare(
    `SELECT outbox.id, payment.provider_payment_id AS transactionId
     FROM billing_outbox_events outbox
     JOIN billing_subscriptions subscription ON subscription.id = outbox.subscription_id
     JOIN billing_payments payment ON payment.id = outbox.payment_id
     WHERE outbox.provider = 'paypal' AND outbox.environment = ?
       AND outbox.event_name = 'first_subscription_paid' AND outbox.delivered_at IS NULL
       AND subscription.user_id = ? AND subscription.provider_subscription_id = ?
       AND payment.status = 'COMPLETED'
     LIMIT 1`,
  ).bind(environment, userId, paypalSubscriptionId).first<{ id: number; transactionId: string }>();
  if (!event) return null;
  const claimed = await db.prepare(
    `UPDATE billing_outbox_events SET delivered_at = ? WHERE id = ? AND delivered_at IS NULL`,
  ).bind(now(), event.id).run();
  return (claimed.meta.changes ?? 0) === 1 ? { transactionId: event.transactionId } : null;
}
