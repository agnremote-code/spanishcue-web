import { PRO_PRODUCT_CODE, type BillingRuntimeConfig } from "../app/billing-config";
import { getFounderOfferStatus, type SubscriptionStatus } from "./billing";

const ENVIRONMENT = "live";
const now = () => Math.floor(Date.now() / 1000);

function asSeconds(value: unknown) {
  if (typeof value !== "string") return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? Math.floor(parsed / 1000) : null;
}

export async function paddleSubscriptionById(db: D1Database, subscriptionId: string) {
  return db.prepare(
    `SELECT id, user_id AS userId, status, offer_code AS offerCode,
            next_billing_time AS nextBillingTime, first_payment_at AS firstPaymentAt,
            paid_through AS paidThrough
     FROM billing_subscriptions
     WHERE provider = 'paddle' AND environment = ? AND provider_subscription_id = ? LIMIT 1`,
  ).bind(ENVIRONMENT, subscriptionId).first<{
    id: number;
    userId: string;
    status: SubscriptionStatus;
    offerCode: string | null;
    nextBillingTime: number | null;
    firstPaymentAt: number | null;
    paidThrough: number | null;
  }>();
}

export async function upsertPaddleSubscription(
  db: D1Database,
  input: {
    userId: string;
    subscriptionId: string;
    customerId?: string | null;
    priceId: string;
    offerCode: string;
    status: SubscriptionStatus;
    nextBillingTime?: unknown;
    occurredAt?: number;
  },
) {
  const existing = await paddleSubscriptionById(db, input.subscriptionId);
  if (existing && existing.userId !== input.userId) throw new Error("paddle_subscription_owner_mismatch");
  const stamp = now();
  const eventTime = input.occurredAt ?? stamp;
  await db.prepare(
    `INSERT INTO billing_subscriptions (
      user_id, provider, environment, provider_subscriber_id, provider_subscription_id,
      provider_plan_id, provider_event_time, product_code, offer_code, status,
      next_billing_time, created_at, activated_at, updated_at
    ) VALUES (?, 'paddle', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(provider, environment, provider_subscription_id) DO UPDATE SET
      provider_subscriber_id = COALESCE(excluded.provider_subscriber_id, billing_subscriptions.provider_subscriber_id),
      provider_plan_id = excluded.provider_plan_id,
      provider_event_time = excluded.provider_event_time,
      offer_code = COALESCE(billing_subscriptions.offer_code, excluded.offer_code),
      status = excluded.status,
      next_billing_time = COALESCE(excluded.next_billing_time, billing_subscriptions.next_billing_time),
      activated_at = CASE
        WHEN excluded.status = 'ACTIVE' AND billing_subscriptions.activated_at IS NULL THEN excluded.updated_at
        ELSE billing_subscriptions.activated_at
      END,
      updated_at = excluded.updated_at
    WHERE billing_subscriptions.provider_event_time IS NULL OR billing_subscriptions.provider_event_time <= excluded.provider_event_time`,
  ).bind(
    input.userId,
    ENVIRONMENT,
    input.customerId ?? null,
    input.subscriptionId,
    input.priceId,
    eventTime,
    PRO_PRODUCT_CODE,
    input.offerCode,
    input.status,
    asSeconds(input.nextBillingTime),
    stamp,
    input.status === "ACTIVE" ? stamp : null,
    stamp,
  ).run();
  return paddleSubscriptionById(db, input.subscriptionId);
}

export async function applyPaddleLifecycle(
  db: D1Database,
  subscriptionId: string,
  details: {
    status: SubscriptionStatus;
    customerId?: string | null;
    nextBillingTime?: unknown;
    occurredAt?: number;
    paymentFailed?: boolean;
  },
) {
  const subscription = await paddleSubscriptionById(db, subscriptionId);
  if (!subscription) return null;
  const stamp = now();
  const eventTime = details.occurredAt ?? stamp;
  const terminal = details.status === "CANCELLED" || details.status === "SUSPENDED" || details.status === "EXPIRED";
  await db.prepare(
    `UPDATE billing_subscriptions SET
      status = ?,
      provider_subscriber_id = COALESCE(?, provider_subscriber_id),
      provider_event_time = ?,
      next_billing_time = COALESCE(?, next_billing_time),
      activated_at = CASE WHEN ? = 'ACTIVE' AND activated_at IS NULL THEN ? ELSE activated_at END,
      cancelled_at = CASE WHEN ? = 'CANCELLED' THEN ? ELSE cancelled_at END,
      last_failure_at = CASE WHEN ? THEN ? ELSE last_failure_at END,
      updated_at = ?
     WHERE id = ? AND (provider_event_time IS NULL OR provider_event_time <= ?)`,
  ).bind(
    details.status,
    details.customerId ?? null,
    eventTime,
    asSeconds(details.nextBillingTime),
    details.status,
    stamp,
    details.status,
    stamp,
    details.paymentFailed ? 1 : 0,
    stamp,
    stamp,
    subscription.id,
    eventTime,
  ).run();

  if (terminal) {
    const paidThrough = subscription.paidThrough;
    await db.prepare(
      `UPDATE access_grants SET status = ?, expires_at = ?, updated_at = ?
       WHERE user_id = ? AND product_code = ? AND source = 'billing' AND source_reference = ?`,
    ).bind(
      paidThrough && paidThrough > stamp ? "active" : "inactive",
      paidThrough && paidThrough > stamp ? paidThrough : stamp,
      stamp,
      subscription.userId,
      PRO_PRODUCT_CODE,
      subscriptionId,
    ).run();
  }
  return paddleSubscriptionById(db, subscriptionId);
}

async function claimFounderSlot(
  db: D1Database,
  subscriptionId: number,
  userId: string,
  config: BillingRuntimeConfig,
) {
  const offer = await getFounderOfferStatus(db, config);
  if (!offer.available) return null;
  const result = await db.prepare(
    `INSERT INTO founder_assignments (environment, user_id, subscription_id, offer_code, founder_number, created_at)
     SELECT ?, ?, ?, s.offer_code, s.claimed + 1, ?
     FROM founder_offer_state s
     WHERE s.environment = ? AND s.offer_code = ? AND s.enabled = 1 AND s.claimed < s."limit"
       AND NOT EXISTS (
         SELECT 1 FROM founder_assignments a
         WHERE a.environment = ? AND a.user_id = ? AND a.offer_code = s.offer_code
       )
       AND NOT EXISTS (
         SELECT 1 FROM founder_assignments a
         WHERE a.environment = ? AND a.subscription_id = ?
       )
     RETURNING founder_number`,
  ).bind(
    ENVIRONMENT,
    userId,
    subscriptionId,
    now(),
    ENVIRONMENT,
    config.founderOffer.code,
    ENVIRONMENT,
    userId,
    ENVIRONMENT,
    subscriptionId,
  ).first<{ founder_number: number }>();
  return result?.founder_number ?? null;
}

export async function recordPaddleCompletedPayment(
  db: D1Database,
  input: {
    userId: string;
    subscriptionId: string;
    transactionId: string;
    eventId?: string | null;
    amountCents: number;
    currency: string;
    occurredAt: number;
    paidThrough: number;
  },
  config: BillingRuntimeConfig,
) {
  if (config.paypalEnv !== "live") throw new Error("paddle_requires_live_billing");
  const subscription = await paddleSubscriptionById(db, input.subscriptionId);
  if (!subscription || subscription.userId !== input.userId) throw new Error("paddle_subscription_unknown");

  const existing = await db.prepare(
    `SELECT id, user_id AS userId, subscription_id AS subscriptionId, status FROM billing_payments
     WHERE provider = 'paddle' AND environment = ? AND provider_payment_id = ? LIMIT 1`,
  ).bind(ENVIRONMENT, input.transactionId).first<{ id: number; userId: string; subscriptionId: number; status: string }>();
  if (existing && (existing.userId !== input.userId || existing.subscriptionId !== subscription.id || existing.status !== "COMPLETED")) {
    throw new Error("paddle_payment_owner_mismatch");
  }

  const stamp = now();
  if (!existing) await db.prepare(
    `INSERT INTO billing_payments (
      user_id, subscription_id, provider, environment, provider_payment_id, provider_event_id,
      amount_cents, currency, status, occurred_at, paid_through, created_at, updated_at
    ) VALUES (?, ?, 'paddle', ?, ?, ?, ?, ?, 'COMPLETED', ?, ?, ?, ?)`,
  ).bind(
    input.userId,
    subscription.id,
    ENVIRONMENT,
    input.transactionId,
    input.eventId ?? null,
    input.amountCents,
    input.currency,
    input.occurredAt,
    input.paidThrough,
    stamp,
    stamp,
  ).run();

  const payment = await db.prepare(
    `SELECT id FROM billing_payments
     WHERE provider = 'paddle' AND environment = ? AND provider_payment_id = ? LIMIT 1`,
  ).bind(ENVIRONMENT, input.transactionId).first<{ id: number }>();
  if (!payment) throw new Error("paddle_payment_not_persisted");

  const earliest = await db.prepare(
    `SELECT id FROM billing_payments WHERE subscription_id = ? ORDER BY occurred_at, id LIMIT 1`,
  ).bind(subscription.id).first<{ id: number }>();
  const isFirst = earliest?.id === payment.id;
  const paidThrough = Math.max(subscription.paidThrough ?? 0, input.paidThrough);
  await db.prepare(
    `UPDATE billing_subscriptions SET
      status = CASE WHEN status IN ('CANCELLED', 'SUSPENDED', 'EXPIRED') THEN status ELSE 'ACTIVE' END,
      first_payment_at = COALESCE(first_payment_at, ?),
      last_payment_at = ?,
      paid_through = ?,
      updated_at = ?
     WHERE id = ?`,
  ).bind(input.occurredAt, input.occurredAt, paidThrough, stamp, subscription.id).run();

  await db.prepare(
    `INSERT INTO access_grants (
      user_id, product_code, access_level, source, source_reference, plan_code,
      status, starts_at, expires_at, created_at, updated_at
    ) VALUES (?, ?, 'full', 'billing', ?, ?, 'active', ?, ?, ?, ?)
    ON CONFLICT(user_id, product_code, source) DO UPDATE SET
      access_level = 'full',
      source_reference = excluded.source_reference,
      plan_code = excluded.plan_code,
      status = 'active',
      expires_at = excluded.expires_at,
      updated_at = excluded.updated_at`,
  ).bind(
    input.userId,
    PRO_PRODUCT_CODE,
    input.subscriptionId,
    config.founderOffer.code,
    input.occurredAt,
    paidThrough,
    stamp,
    stamp,
  ).run();

  if (isFirst && subscription.offerCode === config.founderOffer.code) {
    await claimFounderSlot(db, subscription.id, input.userId, config);
  }

  const eventName = isFirst ? "first_subscription_paid" : "subscription_renewed";
  await db.prepare(
    `INSERT INTO billing_outbox_events (
      provider, environment, event_key, event_name, user_id, subscription_id, payment_id, occurred_at, created_at
    ) VALUES ('paddle', ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(provider, environment, event_key) DO NOTHING`,
  ).bind(
    ENVIRONMENT,
    `${eventName}:${input.transactionId}`,
    eventName,
    input.userId,
    subscription.id,
    payment.id,
    input.occurredAt,
    stamp,
  ).run();

  return { kind: existing ? "duplicate" as const : isFirst ? "first" as const : "renewal" as const, paymentId: payment.id };
}

export async function markPaddleWebhookReceived(
  db: D1Database,
  eventId: string,
  eventType: string,
  resourceId: string | null,
) {
  const stamp = now();
  const staleBefore = stamp - 300;
  const result = await db.prepare(
    `INSERT INTO payment_webhook_events (
      provider, environment, event_id, event_type, resource_id, received_at, processing_status
    ) VALUES ('paddle', ?, ?, ?, ?, ?, 'received')`,
  ).bind(ENVIRONMENT, eventId, eventType, resourceId, stamp).run().catch(async (error) => {
    const retry = await db.prepare(
      `UPDATE payment_webhook_events SET
        event_type = ?, resource_id = ?, received_at = ?, processing_status = 'received',
        processed_at = NULL, error_code = NULL
       WHERE provider = 'paddle' AND environment = ? AND event_id = ?
         AND (processing_status = 'failed' OR (processing_status = 'received' AND received_at <= ?))`,
    ).bind(eventType, resourceId, stamp, ENVIRONMENT, eventId, staleBefore).run();
    if ((retry.meta.changes ?? 0) === 1) return retry;
    const existing = await db.prepare(
      `SELECT processing_status FROM payment_webhook_events
       WHERE provider = 'paddle' AND environment = ? AND event_id = ? LIMIT 1`,
    ).bind(ENVIRONMENT, eventId).first<{ processing_status: string }>();
    if (existing) return retry;
    throw error;
  });
  return (result.meta.changes ?? 0) === 1;
}

export async function finishPaddleWebhook(
  db: D1Database,
  eventId: string,
  status: "processed" | "ignored" | "failed",
  errorCode: string | null = null,
) {
  await db.prepare(
    `UPDATE payment_webhook_events
     SET processing_status = ?, processed_at = ?, error_code = ?
     WHERE provider = 'paddle' AND environment = ? AND event_id = ?`,
  ).bind(status, now(), errorCode, ENVIRONMENT, eventId).run();
}
