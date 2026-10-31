// «Invitá a un colega»: a referred teacher who pays their first month gets the
// second month free, and the referrer gets their next month free. Rewards are
// queued here and applied to Paddle monthly subscriptions one at a time.

const now = () => Math.floor(Date.now() / 1000);
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function newCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(bytes, (byte) => ALPHABET[byte % ALPHABET.length]).join("");
}

export async function referralCodeForUser(db: D1Database, userId: string) {
  const existing = await db.prepare("SELECT code FROM referral_codes WHERE user_id = ?").bind(userId).first<{ code: string }>();
  if (existing) return existing.code;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    await db.prepare("INSERT INTO referral_codes (user_id, code, created_at) VALUES (?, ?, ?) ON CONFLICT DO NOTHING")
      .bind(userId, newCode(), now()).run();
    const row = await db.prepare("SELECT code FROM referral_codes WHERE user_id = ?").bind(userId).first<{ code: string }>();
    if (row) return row.code;
  }
  throw new Error("referral_code_unavailable");
}

/** Links a paying account to the code it checked out with. Self-referrals and
 * second referrals of the same account are ignored. Returns the referrer. */
export async function registerReferral(db: D1Database, code: string, referredUserId: string, subscriptionId: string) {
  const owner = await db.prepare("SELECT user_id AS userId FROM referral_codes WHERE code = ?").bind(code).first<{ userId: string }>();
  if (!owner || owner.userId === referredUserId) return null;
  await db.prepare(
    `INSERT INTO referrals (code, referrer_user_id, referred_user_id, referred_subscription_id, created_at)
     VALUES (?, ?, ?, ?, ?) ON CONFLICT(referred_user_id) DO NOTHING`,
  ).bind(code, owner.userId, referredUserId, subscriptionId, now()).run();
  return owner.userId;
}

/** Once the referred account has a settled full-price payment, both sides get one free month. */
export async function qualifyReferral(db: D1Database, referredUserId: string) {
  const referral = await db.prepare(
    "SELECT id, referrer_user_id AS referrerUserId, qualified_at AS qualifiedAt FROM referrals WHERE referred_user_id = ?",
  ).bind(referredUserId).first<{ id: number; referrerUserId: string; qualifiedAt: number | null }>();
  if (!referral) return null;
  if (!referral.qualifiedAt) {
    const paid = await db.prepare(
      `SELECT 1 AS found FROM billing_payments WHERE user_id = ? AND provider = 'paddle' AND status = 'COMPLETED' AND amount_cents >= 1500 LIMIT 1`,
    ).bind(referredUserId).first<{ found: number }>();
    if (!paid) return null;
    const stamp = now();
    await db.prepare("UPDATE referrals SET qualified_at = COALESCE(qualified_at, ?) WHERE id = ?").bind(stamp, referral.id).run();
    for (const [role, userId] of [["referred", referredUserId], ["referrer", referral.referrerUserId]] as const) {
      await db.prepare(
        `INSERT INTO referral_rewards (referral_id, user_id, role, status, created_at) VALUES (?, ?, ?, 'queued', ?)
         ON CONFLICT(referral_id, role) DO NOTHING`,
      ).bind(referral.id, userId, role, stamp).run();
    }
  }
  return referral.referrerUserId;
}

export async function referrerOf(db: D1Database, referredUserId: string) {
  const row = await db.prepare("SELECT referrer_user_id AS userId FROM referrals WHERE referred_user_id = ?")
    .bind(referredUserId).first<{ userId: string }>();
  return row?.userId ?? null;
}

/** The next queued reward, unless one is already scheduled on a subscription. */
export async function nextQueuedReward(db: D1Database, userId: string) {
  const applied = await db.prepare("SELECT id FROM referral_rewards WHERE user_id = ? AND status = 'applied' LIMIT 1")
    .bind(userId).first<{ id: number }>();
  if (applied) return null;
  return db.prepare("SELECT id FROM referral_rewards WHERE user_id = ? AND status = 'queued' ORDER BY id LIMIT 1")
    .bind(userId).first<{ id: number }>();
}

/** Paddle subscription (monthly price only) that can carry the free month. */
export async function rewardableSubscription(db: D1Database, userId: string, monthlyPriceId: string) {
  const row = await db.prepare(
    `SELECT provider_subscription_id AS subscriptionId FROM billing_subscriptions
     WHERE user_id = ? AND provider = 'paddle' AND environment = 'live' AND status = 'ACTIVE' AND provider_plan_id = ?
     ORDER BY id DESC LIMIT 1`,
  ).bind(userId, monthlyPriceId).first<{ subscriptionId: string }>();
  return row?.subscriptionId ?? null;
}

export async function markRewardApplied(db: D1Database, rewardId: number, subscriptionId: string) {
  await db.prepare("UPDATE referral_rewards SET status = 'applied', subscription_id = ?, applied_at = ? WHERE id = ? AND status = 'queued'")
    .bind(subscriptionId, now(), rewardId).run();
}

/** A US$0 renewal consumed the scheduled free month on this subscription. */
export async function markRewardUsed(db: D1Database, subscriptionId: string) {
  await db.prepare(
    `UPDATE referral_rewards SET status = 'used', used_at = ?
     WHERE id = (SELECT id FROM referral_rewards WHERE subscription_id = ? AND status = 'applied' ORDER BY id LIMIT 1)`,
  ).bind(now(), subscriptionId).run();
}

export async function referralSummary(db: D1Database, userId: string) {
  const code = await referralCodeForUser(db, userId);
  const counts = await db.prepare(
    `SELECT
       (SELECT count(*) FROM referrals WHERE referrer_user_id = ? AND qualified_at IS NOT NULL) AS qualified,
       (SELECT count(*) FROM referral_rewards WHERE user_id = ? AND status IN ('queued','applied')) AS pending,
       (SELECT count(*) FROM referral_rewards WHERE user_id = ? AND status = 'used') AS used`,
  ).bind(userId, userId, userId).first<{ qualified: number; pending: number; used: number }>();
  return { code, qualified: counts?.qualified ?? 0, pending: counts?.pending ?? 0, used: counts?.used ?? 0 };
}
