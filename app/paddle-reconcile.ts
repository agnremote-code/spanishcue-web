import type { BillingRuntimeConfig } from "./billing-config";
import type { PaddleRuntimeConfig } from "./paddle-config";
import {
  getPaddleSubscription, listPaddleSubscriptionTransactions, paddleCompletedPayment, type PaddleSubscription,
} from "./paddle-server";
import {
  applyPaddleLifecycle, paddleSubscriptionById, recordPaddleCompletedPayment, upsertPaddleSubscription,
} from "../db/paddle-billing";
import { getPurchaseClaim } from "../db/purchase-claims";
import type { SubscriptionStatus } from "../db/billing";

function status(value: unknown): SubscriptionStatus {
  if (value === "active" || value === "trialing") return "ACTIVE";
  if (value === "paused" || value === "past_due") return "SUSPENDED";
  if (value === "canceled") return "CANCELLED";
  return "APPROVAL_PENDING";
}

async function ownedBy(db: D1Database, subscription: PaddleSubscription, userId: string) {
  const custom = subscription.custom_data && typeof subscription.custom_data === "object"
    ? subscription.custom_data as Record<string, unknown> : {};
  if (custom.spanishcue_user_id === userId) return true;
  if (typeof custom.spanishcue_claim_id !== "string") return false;
  const claim = await getPurchaseClaim(db, custom.spanishcue_claim_id);
  return Boolean(claim && claim.provider === "paddle" && claim.status === "claimed"
    && claim.claimedUserId === userId && claim.providerSubscriptionId === subscription.id);
}

/**
 * Explicit account action: re-read one Paddle subscription and its completed
 * charges from the Paddle API. Renewals keep access even when a webhook was
 * lost. Every charge passes the same validation as the webhook, and payment
 * IDs stay unique, so a replay cannot add access or events twice.
 */
export async function reconcilePaddleSubscription(
  db: D1Database, paddle: PaddleRuntimeConfig, billing: BillingRuntimeConfig, userId: string, subscriptionId: string,
) {
  const local = await paddleSubscriptionById(db, subscriptionId);
  if (!local || local.userId !== userId) return null;
  const config = local.firstPaymentAt ? { ...paddle, legacyMonthly: true } : paddle;
  const subscription = await getPaddleSubscription(config, subscriptionId);
  if (subscription.id !== subscriptionId || !(await ownedBy(db, subscription, userId))) throw new Error("paddle_subscription_owner_mismatch");
  const now = Math.floor(Date.now() / 1000);
  const transactions = await listPaddleSubscriptionTransactions(config, subscriptionId);
  for (const transaction of [...transactions].reverse()) {
    const payment = paddleCompletedPayment(transaction, subscription, config);
    if (!payment || typeof transaction.id !== "string") continue;
    await recordPaddleCompletedPayment(db, {
      userId, subscriptionId, transactionId: transaction.id, ...payment, occurredAt: payment.paidAt,
    }, billing);
  }
  const next = status(subscription.status);
  await upsertPaddleSubscription(db, {
    userId, subscriptionId, customerId: typeof subscription.customer_id === "string" ? subscription.customer_id : null,
    priceId: String(subscription.items?.[0]?.price?.id || ""), offerCode: local.offerCode || billing.founderOffer.code,
    status: next, nextBillingTime: subscription.next_billed_at, occurredAt: now,
  });
  if (next === "CANCELLED" || next === "SUSPENDED") {
    await applyPaddleLifecycle(db, subscriptionId, { status: next, nextBillingTime: subscription.next_billed_at, occurredAt: now });
  }
  return paddleSubscriptionById(db, subscriptionId);
}
