import { APPROVED_PRICE_CENTS } from "../app/billing-config";

export type PurchaseProvider = "paddle" | "paypal";
export type PurchaseClaim = {
  claimId: string; claimSecretHash: string; environment: "live" | "sandbox";
  provider: PurchaseProvider | null; offerCode: string; returnTo: string;
  status: string; checkoutRequestId: string | null; approvalUrl: string | null;
  buyerEmail: string | null; normalizedEmail: string | null;
  providerCustomerId: string | null; providerSubscriptionId: string | null;
  providerPaymentId: string | null; providerEventId: string | null;
  providerStatus: string | null; amountCents: number | null; currency: string | null;
  paidThrough: number | null; paidAt: number | null;
  claimedUserId: string | null; claimedAt: number | null; expiresAt: number;
};

const now = () => Math.floor(Date.now() / 1000);
const claimColumns = `claim_id AS claimId, claim_secret_hash AS claimSecretHash,
 environment, provider, offer_code AS offerCode, return_to AS returnTo, status,
 checkout_request_id AS checkoutRequestId, approval_url AS approvalUrl,
 buyer_email AS buyerEmail, normalized_email AS normalizedEmail,
 provider_customer_id AS providerCustomerId, provider_subscription_id AS providerSubscriptionId,
 provider_payment_id AS providerPaymentId, provider_event_id AS providerEventId,
 provider_status AS providerStatus, amount_cents AS amountCents, currency,
 paid_through AS paidThrough, paid_at AS paidAt, claimed_user_id AS claimedUserId,
 claimed_at AS claimedAt, expires_at AS expiresAt`;

export async function getPurchaseClaim(db: D1Database, claimId: string) {
  return db.prepare(`SELECT ${claimColumns} FROM billing_purchase_claims WHERE claim_id = ? LIMIT 1`)
    .bind(claimId).first<PurchaseClaim>();
}

export async function purchaseClaimBySubscription(db: D1Database, provider: PurchaseProvider, environment: string, subscriptionId: string) {
  return db.prepare(`SELECT ${claimColumns} FROM billing_purchase_claims
    WHERE provider = ? AND environment = ? AND provider_subscription_id = ? LIMIT 1`)
    .bind(provider, environment, subscriptionId).first<PurchaseClaim>();
}

export async function createPurchaseClaim(db: D1Database, input: {
  environment: "live" | "sandbox"; offerCode: string; returnTo: string; secret: string;
}) {
  const claimId = crypto.randomUUID();
  const hash = await hashClaimSecret(input.secret);
  const stamp = now();
  await db.prepare(`INSERT INTO billing_purchase_claims
    (claim_id, claim_secret_hash, environment, offer_code, return_to, status, expires_at, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, 'started', ?, ?, ?)`)
    .bind(claimId, hash, input.environment, input.offerCode, input.returnTo, stamp + 7200, stamp, stamp).run();
  return { claimId };
}

export function newClaimSecret() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
}

export async function hashClaimSecret(secret: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(secret));
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
}

export function sameSecretHash(a: string, b: string) {
  if (a.length !== 64 || b.length !== 64) return false;
  let difference = 0;
  for (let i = 0; i < 64; i += 1) difference |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return difference === 0;
}

/** A conditional update serializes duplicate clicks without storing a raw secret. */
export async function lockPurchaseCheckout(db: D1Database, claimId: string, provider: PurchaseProvider) {
  const stamp = now();
  const result = await db.prepare(`UPDATE billing_purchase_claims SET provider = ?, status = 'checkout',
    checkout_request_id = COALESCE(checkout_request_id, ?), expires_at = ?, updated_at = ?
    WHERE claim_id = ? AND expires_at > ? AND (provider IS NULL OR provider = ?)
      AND (status = 'started' OR
        (status = 'checkout' AND provider_subscription_id IS NULL AND provider_payment_id IS NULL AND updated_at <= ?))`)
    .bind(provider, crypto.randomUUID(), stamp + 30 * 86400, stamp, claimId, stamp, provider, stamp - 120).run();
  return (result.meta.changes ?? 0) === 1 ? getPurchaseClaim(db, claimId) : null;
}

export async function markPurchaseCheckout(db: D1Database, claimId: string, provider: PurchaseProvider, input: {
  subscriptionId?: string; paymentId?: string; approvalUrl?: string;
}) {
  const result = await db.prepare(`UPDATE billing_purchase_claims SET
    provider = ?, status = 'checkout', provider_subscription_id = COALESCE(?, provider_subscription_id),
    provider_payment_id = COALESCE(?, provider_payment_id), approval_url = COALESCE(?, approval_url), updated_at = ?
    WHERE claim_id = ? AND status IN ('started', 'checkout') AND (provider IS NULL OR provider = ?)
      AND (provider_subscription_id IS NULL OR provider_subscription_id = ?)
      AND (provider_payment_id IS NULL OR provider_payment_id = ?)`)
    .bind(provider, input.subscriptionId ?? null, input.paymentId ?? null, input.approvalUrl ?? null,
      now(), claimId, provider, input.subscriptionId ?? null, input.paymentId ?? null).run();
  if ((result.meta.changes ?? 0) !== 1) throw new Error("purchase_checkout_changed");
}

export async function releasePurchaseCheckout(db: D1Database, claimId: string, provider: PurchaseProvider) {
  await db.prepare(`UPDATE billing_purchase_claims SET status = 'started', updated_at = ?
    WHERE claim_id = ? AND provider = ? AND status = 'checkout' AND provider_subscription_id IS NULL AND provider_payment_id IS NULL`)
    .bind(now(), claimId, provider).run();
}

export async function recordVerifiedPurchase(db: D1Database, claimId: string, provider: PurchaseProvider, input: {
  subscriptionId: string; paymentId: string; customerId?: string | null;
  email: string; amountCents: number; currency: string; paidThrough: number; paidAt: number;
  eventId?: string | null; providerStatus?: string | null;
}) {
  const normalized = input.email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) ||
      !input.subscriptionId || !input.paymentId || input.amountCents !== APPROVED_PRICE_CENTS ||
      input.currency !== "USD" || !Number.isInteger(input.paidAt) || input.paidAt <= 0 ||
      !Number.isInteger(input.paidThrough) || input.paidThrough <= input.paidAt) {
    throw new Error("purchase_provider_verification_missing");
  }
  const already = await getPurchaseClaim(db, claimId);
  if (already?.status === "paid" && already.provider === provider && already.providerPaymentId === input.paymentId &&
      already.providerSubscriptionId === input.subscriptionId && already.normalizedEmail === normalized) return already;
  const stamp = now();
  const result = await db.prepare(`UPDATE billing_purchase_claims SET
    status = 'paid', buyer_email = ?, normalized_email = ?,
    provider_customer_id = ?, provider_subscription_id = ?, provider_payment_id = ?,
    provider_event_id = COALESCE(?, provider_event_id), provider_status = COALESCE(?, provider_status),
    amount_cents = ?, currency = ?, paid_through = ?, paid_at = ?,
    expires_at = ?, updated_at = ?
    WHERE claim_id = ? AND provider = ? AND status IN ('checkout', 'paid')
      AND (provider_subscription_id IS NULL OR provider_subscription_id = ?)
      AND (provider_payment_id IS NULL OR provider_payment_id = ?)
      AND (normalized_email IS NULL OR normalized_email = ?)`)
    .bind(input.email.trim(), normalized, input.customerId ?? null, input.subscriptionId, input.paymentId,
      input.eventId ?? null, input.providerStatus ?? null, input.amountCents, input.currency,
      input.paidThrough, input.paidAt, stamp + 30 * 86400, stamp, claimId, provider,
      input.subscriptionId, input.paymentId, normalized).run();
  if ((result.meta.changes ?? 0) !== 1) {
    const existing = await getPurchaseClaim(db, claimId);
    if (existing?.status === "claimed" && existing.provider === provider &&
        existing.providerSubscriptionId === input.subscriptionId && existing.providerPaymentId === input.paymentId) return existing;
    throw new Error("purchase_verification_conflict");
  }
  return getPurchaseClaim(db, claimId);
}

/** Only a paid claim and the provider-confirmed email may enter binding. */
export async function beginPurchaseBind(db: D1Database, claimId: string, userId: string, verifiedEmail: string) {
  const email = verifiedEmail.trim().toLowerCase();
  if (!email || !userId) return null;
  const stamp = now();
  const result = await db.prepare(`UPDATE billing_purchase_claims SET status = 'claiming',
    claimed_user_id = ?, updated_at = ?
    WHERE claim_id = ? AND status = 'paid' AND normalized_email = ?
      AND provider_payment_id IS NOT NULL AND paid_through > ? AND expires_at > ?`)
    .bind(userId, stamp, claimId, email, stamp, stamp).run();
  if ((result.meta.changes ?? 0) === 1) return getPurchaseClaim(db, claimId);
  const existing = await getPurchaseClaim(db, claimId);
  return existing?.claimedUserId === userId && existing.normalizedEmail === email &&
    (existing.status === "claiming" || existing.status === "claimed") ? existing : null;
}

export async function finishPurchaseBind(db: D1Database, claimId: string, userId: string) {
  await db.prepare(`UPDATE billing_purchase_claims SET status = 'claimed', claimed_at = COALESCE(claimed_at, ?), updated_at = ?
    WHERE claim_id = ? AND status = 'claiming' AND claimed_user_id = ?`)
    .bind(now(), now(), claimId, userId).run();
}

export async function updatePurchaseLifecycle(db: D1Database, claimId: string, providerStatus: string) {
  await db.prepare(`UPDATE billing_purchase_claims SET provider_status = ?, updated_at = ?
    WHERE claim_id = ? AND status IN ('checkout', 'paid', 'claiming')`)
    .bind(providerStatus, now(), claimId).run();
}

export async function cancelUnclaimedPurchase(db: D1Database, claimId: string, providerPaymentId: string) {
  await db.prepare(`UPDATE billing_purchase_claims SET status = 'cancelled', updated_at = ?
    WHERE claim_id = ? AND provider_payment_id = ? AND status IN ('checkout', 'paid')`)
    .bind(now(), claimId, providerPaymentId).run();
}
