import type { BillingRuntimeConfig } from "../app/billing-config";
import {
  applyPaypalSubscriptionLifecycle, createPendingSubscription, recordPaypalPayment,
  subscriptionByPaypalId, type SubscriptionStatus,
} from "./billing";
import { applyPaddleLifecycle, recordPaddleCompletedPayment, upsertPaddleSubscription } from "./paddle-billing";
import { beginPurchaseBind, finishPurchaseBind } from "./purchase-claims";

/** The claim is exclusively locked to one verified account before any grants
 * are written. Replaying for that same account is safe after a partial failure. */
export async function bindPurchaseToUser(
  db: D1Database, claimId: string, userId: string, verifiedEmail: string,
  config: BillingRuntimeConfig, paddlePriceId: string,
) {
  const claim = await beginPurchaseBind(db, claimId, userId, verifiedEmail);
  if (!claim || claim.environment !== config.paypalEnv || claim.offerCode !== config.founderOffer.code ||
      claim.amountCents !== 1500 || claim.currency !== "USD" ||
      !claim.providerSubscriptionId || !claim.providerPaymentId || !claim.paidAt ||
      !claim.paidThrough || claim.paidThrough <= Math.floor(Date.now() / 1000)) return null;

  if (claim.provider === "paypal") {
    await createPendingSubscription(db, {
      environment: config.paypalEnv, userId, paypalSubscriptionId: claim.providerSubscriptionId,
      planId: config.founderPlanId, offerCode: config.founderOffer.code,
    });
    const subscription = await subscriptionByPaypalId(db, claim.providerSubscriptionId, config.paypalEnv);
    if (subscription?.userId !== userId) throw new Error("paypal_subscription_owner_mismatch");
    await recordPaypalPayment(db, {
      environment: config.paypalEnv, paypalSubscriptionId: claim.providerSubscriptionId,
      providerPaymentId: claim.providerPaymentId, providerEventId: claim.providerEventId || undefined,
      amountCents: claim.amountCents, currency: claim.currency, status: "COMPLETED",
      occurredAt: claim.paidAt, paidThrough: claim.paidThrough,
    }, config);
    const status = claim.providerStatus;
    if (status && ["ACTIVE", "SUSPENDED", "CANCELLED", "EXPIRED"].includes(status)) {
      await applyPaypalSubscriptionLifecycle(db, config.paypalEnv, claim.providerSubscriptionId, {
        status: status as SubscriptionStatus, eventType: `CLAIM.${status}`,
      });
    }
  } else if (claim.provider === "paddle" && config.paypalEnv === "live" && paddlePriceId) {
    await upsertPaddleSubscription(db, {
      userId, subscriptionId: claim.providerSubscriptionId,
      customerId: claim.providerCustomerId, priceId: paddlePriceId,
      offerCode: config.founderOffer.code, status: "ACTIVE", occurredAt: claim.paidAt,
    });
    await recordPaddleCompletedPayment(db, {
      userId, subscriptionId: claim.providerSubscriptionId, transactionId: claim.providerPaymentId,
      eventId: claim.providerEventId, amountCents: claim.amountCents, currency: claim.currency,
      occurredAt: claim.paidAt, paidThrough: claim.paidThrough,
    }, config);
    if (claim.providerStatus === "paused" || claim.providerStatus === "past_due" || claim.providerStatus === "canceled") {
      await applyPaddleLifecycle(db, claim.providerSubscriptionId, {
        status: claim.providerStatus === "canceled" ? "CANCELLED" : "SUSPENDED",
        customerId: claim.providerCustomerId, occurredAt: Math.floor(Date.now() / 1000),
      });
    }
  } else {
    throw new Error("purchase_provider_unavailable");
  }

  await finishPurchaseBind(db, claim.claimId, userId);
  return { returnTo: claim.returnTo, subscriptionId: claim.providerSubscriptionId };
}
