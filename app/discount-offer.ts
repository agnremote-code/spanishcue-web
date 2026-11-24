/** What the 10% card needs from /api/billing/founder-status. */
export type DiscountOfferStatus = {
  available?: boolean;
  promoWeek?: { available?: boolean; eligible?: boolean | null };
  discount10?: { cardAvailable?: boolean; eligible?: boolean | null };
};

/** The card shows to signed-in teachers without PRO while card checkout is open. While the better
 * US$0.99 week is open to the same teacher, that offer wins and the card stays hidden.
 * `preview` lets the owner see it in the library's FREE preview. */
export function discount10Visible(status: DiscountOfferStatus | null, preview = false) {
  if (!status?.available || !status.discount10?.cardAvailable) return false;
  if (!preview && status.discount10.eligible !== true) return false;
  return !(status.promoWeek?.available && status.promoWeek.eligible === true);
}
