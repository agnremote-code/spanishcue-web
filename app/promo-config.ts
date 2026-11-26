/**
 * «Primera semana por US$0,99» (owner order, 2026-11-17): new teachers pay US$0.99 for a short
 * paid trial and the subscription then renews at the regular US$19.90/month until cancelled.
 * Since 2026-11-26 (owner: «cambialo dale») the trial lasts 10 days instead of 7, so a teacher
 * reaches the second weekly class with the same student before the first full charge. The names
 * keep «WEEK» for continuity. Subscriptions started on the 7-day terms stay valid until they end.
 * It needs an account, so the server can keep it to teachers who never paid before.
 * Existing plans, prices and subscriptions are not touched: the promo lives on its own
 * Paddle non-catalog price and its own PayPal plan.
 */
export const PROMO_WEEK_CODE = "prueba10-099-20261126";
/** The original 7-day terms (2026-11-17 to 2026-11-26): still recognized for subscriptions created on them. */
export const PROMO_LEGACY_CODE = "semana-099-20261117";
export const PROMO_WEEK_CENTS = 99;
export const PROMO_WEEK_DAYS = 10;
export const PROMO_LEGACY_DAYS = 7;
/** Trial lengths a promo subscription may carry: the current one first. */
export const PROMO_ALLOWED_DAYS = [PROMO_WEEK_DAYS, PROMO_LEGACY_DAYS] as const;
/** Days before the first full charge when the reminder goes out (Visa: at least 7; Mastercard: 3 to 7). */
export const PROMO_REMINDER_DAYS_BEFORE = 7;
export const PROMO_WEEK_THEN_CENTS = 1990;
/** Last moment to start the promo: end of 30 November 2026 in Argentina (UTC−3). */
export const PROMO_WEEK_ENDS_AT = Date.UTC(2026, 11, 1, 3, 0, 0) / 1000;
/** The same last day as text, for the site copy. */
export const PROMO_WEEK_UNTIL = { es: "30 de noviembre", en: "30 November" } as const;
/** Charges that open a paid trial period instead of a full billing period. */
export const TRIAL_CHARGE_CENTS = [200, PROMO_WEEK_CENTS, 1791] as const;

export function promoWeekActive(nowSeconds = Math.floor(Date.now() / 1000)) {
  return nowSeconds < PROMO_WEEK_ENDS_AT;
}

export function isTrialCharge(amountCents: number | null | undefined) {
  return (TRIAL_CHARGE_CENTS as readonly number[]).includes(amountCents ?? -1);
}

/**
 * «Obtén un 10% de descuento en tu próxima suscripción» (owner order, 2026-11-24): signed-in FREE
 * teachers pay US$17.91 (10% off) for their FIRST month by card, then the regular US$19.90/month
 * (owner, same day: «el primer mes»). Like the promo week, it lives on its own Paddle non-catalog price of the PRO
 * product: no catalog price, PayPal plan or existing subscription changes.
 */
export const DISCOUNT_10_CODE = "descuento10-20261124";
export const DISCOUNT_10_PERCENT = 10;
export const DISCOUNT_10_CENTS = 1791;
export const DISCOUNT_10_THEN_CENTS = 1990;
