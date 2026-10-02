export type FounderStatus = { mode: string; checkoutLive: boolean; enabled: boolean; available: boolean; remaining: number; limit: number; priceUsd: number };
export function isFounderStatus(value: unknown): value is FounderStatus {
  if (!value || typeof value !== "object") return false;
  const s = value as FounderStatus;
  return ["live", "sandbox"].includes(s.mode) && typeof s.checkoutLive === "boolean" && typeof s.enabled === "boolean" && typeof s.available === "boolean" && s.priceUsd === 15 && s.limit === 1000 && Number.isInteger(s.remaining) && s.remaining >= 0 && s.remaining <= s.limit;
}
export function liveFounderOffer(value: unknown): value is FounderStatus {
  if (!value || typeof value !== 'object') return false;
  const s = value as FounderStatus;
  return s.mode === 'live' && s.checkoutLive === true && s.enabled === true && s.available === true && s.priceUsd === 15 && s.limit === 1000 && Number.isInteger(s.remaining) && s.remaining > 0 && s.remaining <= s.limit;
}
export function shouldShowOffer(s: { live: boolean; pro: boolean; seen: boolean; converted: boolean; engagedMs: number; scroll: number; exit: boolean }) {
  return s.live && !s.pro && !s.seen && !s.converted && (s.engagedMs >= 30000 || (s.engagedMs >= 3000 && s.scroll >= .5) || (s.engagedMs >= 5000 && s.exit));
}
