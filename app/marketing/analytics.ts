import { funnelContext } from "../immersive/attribution";
import { consentFor } from "../privacy/consent";

export const marketingEvents = [
  "landing_view",
  "demo_start", "first_interaction", "demo_complete", "premium_gate_view", "verified_purchase",
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
  "trial_purchase",
  "first_subscription_payment",
  "subscription_renewal",
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

const clickIdKeys = ["gclid", "gbraid", "wbraid"] as const;

type UtmKey = (typeof utmKeys)[number];
type UtmValues = Partial<Record<UtmKey, string>>;
type ClickIdKey = (typeof clickIdKeys)[number];
type ClickIds = Partial<Record<ClickIdKey, string>>;
type Attribution = {
  first: UtmValues;
  latest: UtmValues;
  landingPath: string;
  capturedAt: string;
  /** Latest Google Ads click identifiers, kept only with marketing consent. */
  click?: ClickIds & { at?: string };
};

/** Google Ads accepts click conversions up to 90 days after the click. */
const clickIdMaxAgeMs = 90 * 24 * 60 * 60 * 1000;

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
  "transaction_id", "experiment_id", "variant", "zone", "activity_id",
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

function clickIdsFromUrl(url: URL): ClickIds {
  return Object.fromEntries(
    clickIdKeys.flatMap((key) => {
      const value = url.searchParams.get(key)?.trim();
      return value && /^[A-Za-z0-9_-]{1,200}$/.test(value) ? [[key, value]] : [];
    }),
  );
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
  const url = new URL(window.location.href);
  const incoming = valuesFromUrl(url);
  const incomingClick = clickIdsFromUrl(url);
  const existing = readMarketingAttribution();
  const hasIncoming = Object.keys(incoming).length > 0;
  const hasClick = Object.keys(incomingClick).length > 0;
  if (!hasIncoming && !hasClick && existing) {
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
    click: hasClick ? { ...incomingClick, at: new Date().toISOString() } : existing?.click,
  };
  try {
    window.localStorage.setItem(attributionKey, JSON.stringify(attribution));
    document.documentElement.dataset.marketingAttribution = "ready";
    if (attribution.first.utm_source) document.documentElement.dataset.utmSource = attribution.first.utm_source;
  } catch {}
  return attribution;
}

export type CheckoutAttribution = Partial<Record<ClickIdKey | "utm_source" | "utm_medium" | "utm_campaign" | "ga_client_id", string>>;

/**
 * Identifiers sent with a checkout so the server can attribute the verified
 * payment later. Click IDs and UTMs need marketing consent; the GA client ID
 * needs analytics consent. Nothing here is proof of payment.
 */
export function checkoutAttribution(): CheckoutAttribution {
  if (typeof window === "undefined") return {};
  const result: CheckoutAttribution = {};
  if (consentFor("marketing")) {
    const attribution = captureMarketingAttribution();
    const clickAt = Date.parse(attribution?.click?.at || "");
    if (attribution?.click && Number.isFinite(clickAt) && Date.now() - clickAt <= clickIdMaxAgeMs) {
      for (const key of clickIdKeys) if (attribution.click[key]) result[key] = attribution.click[key];
    }
    const utm = { ...attribution?.first, ...attribution?.latest };
    for (const key of ["utm_source", "utm_medium", "utm_campaign"] as const) if (utm[key]) result[key] = utm[key];
  }
  if (consentFor("analytics")) {
    const ga = document.cookie.split("; ").find((item) => item.startsWith("_ga="))?.slice(4);
    const match = ga?.match(/^GA\d\.\d\.(\d+\.\d+)$/);
    if (match) result.ga_client_id = match[1];
  }
  return result;
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

  // `subscription_first_paid` is the entry point for the customer's first
  // server-verified paid transaction (the US$2 trial or the first US$15.50
  // month). It is the only event allowed to reach the Google Ads purchase
  // conversion, which follows marketing consent independently from analytics.
  if (event === "subscription_first_paid") {
    if (!properties.transaction_id) return;
    sendGoogleAdsPurchase(properties);
    if (!consentFor("analytics")) return;
    // GA4 gets one specific event for the transaction (never the generic
    // name as well), plus the documented revenue alias used by funnel reports.
    trackMarketingEvent(properties.plan === "trial" ? "trial_purchase" : "first_subscription_payment", properties);
    if (typeof properties.value === "number" && Number.isFinite(properties.value) && properties.value > 0
        && typeof properties.currency === "string" && /^[A-Z]{3}$/.test(properties.currency)) {
      trackMarketingEvent("verified_purchase", properties);
    }
    return;
  }

  if (!consentFor("analytics")) return;

  const attribution = captureMarketingAttribution();
  const payload: Record<string, unknown> = {
    event,
    event_time: new Date().toISOString(),
    page_path: window.location.pathname,
    ...attribution?.first,
    ...Object.fromEntries(
      Object.entries(attribution?.latest || {}).map(([key, value]) => [`latest_${key}`, value]),
    ),
    ...funnelContext(),
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
