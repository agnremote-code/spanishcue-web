/**
 * «Primera semana por US$0,99» (owner order, 2026-11-17): new teachers pay US$0.99 for the
 * first 7 days and the subscription then renews at the regular US$19.90/month until cancelled.
 * It needs an account, so the server can keep it to teachers who never paid before.
 * Existing plans, prices and subscriptions are not touched: the promo lives on its own
 * Paddle non-catalog price and its own PayPal plan.
 */
export const PROMO_WEEK_CODE = "semana-099-20261117";
export const PROMO_WEEK_CENTS = 99;
export const PROMO_WEEK_DAYS = 7;
export const PROMO_WEEK_THEN_CENTS = 1990;
/** Last moment to start the promo: end of 30 November 2026 in Argentina (UTC−3). */
export const PROMO_WEEK_ENDS_AT = Date.UTC(2026, 11, 1, 3, 0, 0) / 1000;
/** The same last day as text, for the site copy. */
export const PROMO_WEEK_UNTIL = { es: "30 de noviembre", en: "30 November" } as const;
/** Charges that open a paid trial period instead of a full billing period. */
export const TRIAL_CHARGE_CENTS = [200, PROMO_WEEK_CENTS] as const;

export function promoWeekActive(nowSeconds = Math.floor(Date.now() / 1000)) {
  return nowSeconds < PROMO_WEEK_ENDS_AT;
}

export function isTrialCharge(amountCents: number | null | undefined) {
  return (TRIAL_CHARGE_CENTS as readonly number[]).includes(amountCents ?? -1);
}
