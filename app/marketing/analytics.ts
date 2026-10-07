import { consentFor } from "../privacy/consent";

export const marketingEvents = [
  "landing_view",
  "cta_click",
  "primary_cta_click",
  "founder_offer_view",
  "founder_modal_view",
  "founder_modal_click",
  "subscription_complete",
  "lesson_preview_open",
  "free_lesson_start",
  "signup_start",
  "signup_complete",
  "pricing_view",
  "paywall_view",
  "checkout_start",
  "trial_checkout_start",
  "subscription_first_paid",
  "search_used",
  "filter_used",
  "free_lesson_completed",
] as const;

export type MarketingEvent = (typeof marketingEvents)[number];

const attributionKey = "spanishcue.marketing.attribution.v1";
const eventQueueKey = "spanishcue.marketing.events.v1";
const googleAdsConversionId = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID?.trim() || "") : "";
const googleAdsPurchaseLabel = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_GOOGLE_ADS_PURCHASE_LABEL?.trim() || "") : "";
const utmKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmKey = (typeof utmKeys)[number];
type UtmValues = Partial<Record<UtmKey, string>>;
type Attribution = {
  first: UtmValues;
  latest: UtmValues;
  landingPath: string;
  capturedAt: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const allowedPropertyKeys = new Set([
  "family",
  "level",
  "access", "category", "cta_type", "currency", "filter", "landing", "lesson_id",
  "method", "placement", "plan", "query_length", "signed_in", "value",
  "transaction_id",
]);

function clean(value: string | null) {
  return value?.trim().slice(0, 180) || undefined;
}

function usableGoogleAdsConversion(): boolean {
  return /^AW-[0-9]+$/i.test(googleAdsConversionId)
    && /^[A-Za-z0-9_-]+$/.test(googleAdsPurchaseLabel);
}

function valuesFromUrl(url: URL): UtmValues {
  return Object.fromEntries(
    utmKeys.flatMap((key) => {
      const value = clean(url.searchParams.get(key));
      return value ? [[key, value]] : [];
    }),
  );
}

function sendGoogleAdsPurchase(properties: Record<string, string | number | boolean | null | undefined>) {
  if (!usableGoogleAdsConversion() || !consentFor("marketing")) return;
  const transactionId = typeof properties.transaction_id === "string"
    ? clean(properties.transaction_id)
    : undefined;
  const value = typeof properties.value === "number" && Number.isFinite(properties.value) && properties.value > 0
    ? properties.value
    : undefined;
  const currency = typeof properties.currency === "string" ? clean(properties.currency)?.toUpperCase() : undefined;
  if (!transactionId || value === undefined || !currency || !/^[A-Z]{3}$/.test(currency)) return;
  window.gtag?.("event", "conversion", {
    send_to: `${googleAdsConversionId}/${googleAdsPurchaseLabel}`,
    value,
    currency,
    transaction_id: transactionId,
  });
}

export function readMarketingAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(attributionKey);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

export function captureMarketingAttribution() {
  if (typeof window === "undefined") return null;
  if (!consentFor("marketing")) return null;
  const incoming = valuesFromUrl(new URL(window.location.href));
  const existing = readMarketingAttribution();
  const hasIncoming = Object.keys(incoming).length > 0;
  if (!hasIncoming && existing) {
    document.documentElement.dataset.marketingAttribution = "ready";
    if (existing.first.utm_source) document.documentElement.dataset.utmSource = existing.first.utm_source;
    return existing;
  }

  const attribution: Attribution = {
    first: existing?.first && Object.keys(existing.first).length
      ? existing.first
      : incoming,
    latest: hasIncoming ? incoming : existing?.latest || {},
    landingPath: existing?.landingPath || `${window.location.pathname}${window.location.search}`,
    capturedAt: existing?.capturedAt || new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(attributionKey, JSON.stringify(attribution));
    document.documentElement.dataset.marketingAttribution = "ready";
    if (attribution.first.utm_source) document.documentElement.dataset.utmSource = attribution.first.utm_source;
  } catch {}
  return attribution;
}

function queueEvent(payload: Record<string, unknown>) {
  try {
    const queue = JSON.parse(window.sessionStorage.getItem(eventQueueKey) || "[]") as unknown[];
    window.sessionStorage.setItem(eventQueueKey, JSON.stringify([...queue.slice(-39), payload]));
  } catch {}
}

function safeProperties(properties: Record<string, string | number | boolean | null | undefined>) {
  const safe: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(properties)) {
    if (!allowedPropertyKeys.has(key) || value === null || value === undefined) continue;
    if (typeof value === "string") {
      const cleaned = clean(value);
      if (cleaned) safe[key] = cleaned;
      continue;
    }
    safe[key] = value;
  }
  return safe;
}

export function trackMarketingEvent(
  event: MarketingEvent,
  properties: Record<string, string | number | boolean | null | undefined> = {},
) {
  if (typeof window === "undefined") return;
  // Functional session suppression must survive navigation and analytics opt-out.
  if (event === "signup_complete" || event === "subscription_first_paid" || event === "subscription_complete") {
    try { window.sessionStorage.setItem("spanishcue.founder-modal.converted", "1"); } catch {}
  }

  // Google Ads purchase measurement follows marketing consent independently
  // from optional product analytics. The server-deduplicated transaction ID is
  // still the only event allowed to reach the paid conversion destination.
  if (event === "subscription_first_paid" && properties.transaction_id) {
    sendGoogleAdsPurchase(properties);
  }

  if (!consentFor("analytics")) return;

  // Keep the existing confirmed, server-deduplicated payment event as the authority.
  // The requested reporting alias is emitted only with that same transaction.
  if (event === "subscription_first_paid" && properties.transaction_id) {
    trackMarketingEvent("subscription_complete", properties);
  }

  const attribution = captureMarketingAttribution();
  const payload: Record<string, unknown> = {
    event,
    event_time: new Date().toISOString(),
    page_path: window.location.pathname,
    ...attribution?.first,
    ...Object.fromEntries(
      Object.entries(attribution?.latest || {}).map(([key, value]) => [`latest_${key}`, value]),
    ),
    ...safeProperties(properties),
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  window.gtag?.("event", event, payload);
  document.documentElement.dataset.lastMarketingEvent = event;
  queueEvent(payload);
  window.dispatchEvent(new CustomEvent("spanishcue:marketing", { detail: payload }));
}

export function markFreeLessonCompleted(lessonId: number, lessonTitle?: string) {
  trackMarketingEvent("free_lesson_completed", {
    lesson_id: lessonId,
    lesson_title: lessonTitle,
  });
}
