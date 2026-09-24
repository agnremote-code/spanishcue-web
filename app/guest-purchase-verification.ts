import type { BillingRuntimeConfig } from "./billing-config";
import type { PaddleRuntimeConfig } from "./paddle-config";
import {
  getPaddleSubscription, getPaddleTransaction,
  validatePaddleClaimSubscription, validatePaddleClaimTransaction,
} from "./paddle-server";
import {
  getPaypalSubscription, getPaypalSubscriptionTransactions,
  validatePaypalPayment, validatePaypalSubscription,
} from "./paypal-server";
import { getPurchaseClaim, recordVerifiedPurchase, type PurchaseClaim } from "../db/purchase-claims";
import type { PaypalSubscription } from "./paypal-server";

const seconds = (value: unknown) => {
  if (typeof value !== "string") return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? Math.floor(parsed / 1000) : null;
};

function cents(value: unknown) {
  if (typeof value !== "string" || !/^\d+(?:\.\d{1,2})?$/.test(value)) return null;
  const [whole, fraction = ""] = value.split(".");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0"));
}

/** Payment confirmation is read from Paddle's API, never from a JS checkout event. */
export async function verifyGuestPaddlePayment(db: D1Database, paddle: PaddleRuntimeConfig, claim: PurchaseClaim, transactionId: string, eventId?: string) {
  if (claim.provider !== "paddle" || claim.environment !== "live" ||
      (claim.providerPaymentId && claim.providerPaymentId !== transactionId)) return null;
  const transaction = await getPaddleTransaction(paddle, transactionId);
  if (!validatePaddleClaimTransaction(transaction, paddle, claim.claimId, claim.offerCode)) return null;
  const subscriptionId = typeof transaction.subscription_id === "string" ? transaction.subscription_id : "";
  if (!/^sub_[a-z0-9]{26}$/.test(subscriptionId)) return null;
  const subscription = await getPaddleSubscription(paddle, subscriptionId);
  if (!validatePaddleClaimSubscription(subscription, paddle, claim.claimId, claim.offerCode)) return null;
  const customerId = typeof subscription.customer_id === "string" ? subscription.customer_id : "";
  if (!customerId || (typeof transaction.customer_id === "string" && transaction.customer_id !== customerId)) return null;
  const customer = transaction.customer;
  if (customer?.id !== customerId || typeof customer.email !== "string" || !customer.email) return null;
  const paidThrough = seconds(subscription.current_billing_period?.ends_at);
  if (!paidThrough) return null;
  return recordVerifiedPurchase(db, claim.claimId, "paddle", {
    subscriptionId, paymentId: transactionId, customerId, email: customer.email,
    amountCents: 1500, currency: "USD", paidThrough, paidAt: Math.floor(Date.now() / 1000),
    eventId, providerStatus: typeof subscription.status === "string" ? subscription.status : "active",
  });
}

/** PayPal return is only a hint; subscription and completed sale are fetched server-side. */
export async function verifyGuestPaypalPayment(db: D1Database, config: BillingRuntimeConfig, claim: PurchaseClaim) {
  if (claim.provider !== "paypal" || claim.environment !== config.paypalEnv || !claim.providerSubscriptionId) return null;
  const subscription = await getPaypalSubscription(config, claim.providerSubscriptionId);
  if (!validatePaypalSubscription(subscription, {
    subscriptionId: claim.providerSubscriptionId, userId: claim.claimId, config,
  })) return null;
  const email = subscription.subscriber?.email_address;
  if (typeof email !== "string" || !email) return null;
  const transactions = await getPaypalSubscriptionTransactions(config, claim.providerSubscriptionId);
  const completed = transactions.filter(transaction => transaction.status === "COMPLETED" &&
    typeof transaction.id === "string" &&
    validatePaypalPayment(transaction.amount_with_breakdown?.gross_amount || {}, config))
    .sort((a, b) => String(a.time).localeCompare(String(b.time)))[0];
  const paidThrough = seconds(subscription.billing_info?.next_billing_time) ?? claim.paidThrough;
  const paidAt = seconds(completed?.time);
  if (!completed || !paidAt || !paidThrough) return null;
  return recordVerifiedPurchase(db, claim.claimId, "paypal", {
    subscriptionId: claim.providerSubscriptionId, paymentId: String(completed.id),
    customerId: typeof subscription.subscriber?.payer_id === "string" ? subscription.subscriber.payer_id : null,
    email, amountCents: cents(completed.amount_with_breakdown?.gross_amount?.value) || 0,
    currency: "USD", paidAt, paidThrough,
    providerStatus: typeof subscription.status === "string" ? subscription.status : "ACTIVE",
  });
}

/** PayPal keeps the guest claim ID in custom_id for the lifetime of a subscription.
 * Only the verified account that claimed that exact subscription may reconcile it. */
export async function validatePaypalOwnedSubscription(db: D1Database, subscription: PaypalSubscription, expected: {
  subscriptionId: string; userId: string; config: BillingRuntimeConfig;
}) {
  if (validatePaypalSubscription(subscription, expected)) return true;
  if (typeof subscription.custom_id !== "string" || !/^[a-f0-9-]{36}$/.test(subscription.custom_id)) return false;
  const claim = await getPurchaseClaim(db, subscription.custom_id);
  return Boolean(claim && (claim.status === "claimed" || claim.status === "claiming")
    && claim.provider === "paypal" && claim.environment === expected.config.paypalEnv
    && claim.offerCode === expected.config.founderOffer.code && claim.claimedUserId === expected.userId
    && claim.providerSubscriptionId === expected.subscriptionId
    && validatePaypalSubscription(subscription, { ...expected, userId: claim.claimId }));
}
