import { PADDLE_MONTHLY_PRICE_ID, PADDLE_REFERRAL_DISCOUNT_ID, type PaddleRuntimeConfig } from "./paddle-config";
import { applyPaddleReferralDiscount, getPaddleSubscription, paddleReferralCode, type PaddleSubscription } from "./paddle-server";
import {
  markRewardApplied, markRewardUsed, nextQueuedReward, qualifyReferral, referrerOf, registerReferral, rewardableSubscription,
} from "../db/referrals";

export const REFERRAL_COOKIE = "spanishcue_ref";

/** Schedules at most one queued free month on the account's active monthly Paddle subscription. */
async function applyQueuedReward(db: D1Database, paddle: PaddleRuntimeConfig, userId: string) {
  const reward = await nextQueuedReward(db, userId);
  if (!reward) return;
  const subscriptionId = await rewardableSubscription(db, userId, PADDLE_MONTHLY_PRICE_ID);
  if (!subscriptionId) return;
  const remote = await getPaddleSubscription(paddle, subscriptionId);
  if (remote.status !== "active" || remote.discount || remote.items?.[0]?.price?.id !== PADDLE_MONTHLY_PRICE_ID) return;
  await applyPaddleReferralDiscount(paddle, subscriptionId);
  await markRewardApplied(db, reward.id, subscriptionId);
}

/** Runs after a Paddle payment is recorded for an account. Never throws: a
 * referral problem must not fail the payment that grants access. */
export async function processReferrals(
  db: D1Database, paddle: PaddleRuntimeConfig,
  input: { userId: string; subscriptionId: string; subscription?: PaddleSubscription | null; referralFree?: boolean },
) {
  try {
    if (input.referralFree) await markRewardUsed(db, input.subscriptionId);
    const subscription = input.subscription ?? await getPaddleSubscription(paddle, input.subscriptionId);
    const code = paddleReferralCode(subscription);
    if (code) await registerReferral(db, code, input.userId, input.subscriptionId);
    await qualifyReferral(db, input.userId);
    const referrer = await referrerOf(db, input.userId);
    for (const userId of referrer ? [input.userId, referrer] : [input.userId]) await applyQueuedReward(db, paddle, userId);
  } catch (error) {
    console.error("referral_processing_failed", {
      code: (error instanceof Error ? error.message : "unknown").slice(0, 80), discount: PADDLE_REFERRAL_DISCOUNT_ID,
    });
  }
}

export function referralCodeFromCookie(header: string | null) {
  const value = header?.split(/;\s*/).find((item) => item.startsWith(`${REFERRAL_COOKIE}=`))?.slice(REFERRAL_COOKIE.length + 1);
  return value && /^[A-HJ-NP-Z2-9]{8}$/.test(value) ? value : null;
}
