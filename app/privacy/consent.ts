export type ConsentCategory = "preferences" | "analytics" | "marketing";

export type ConsentState = {
  version: 1;
  decided: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export const CONSENT_COOKIE = "spanishcue-consent-v1";
export const CONSENT_EVENT = "spanishcue:consent-change";
export const OPEN_CONSENT_EVENT = "spanishcue:open-consent";

type GoogleConsentValues = {
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  analytics_storage: "granted" | "denied";
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const deniedGoogleConsent: GoogleConsentValues = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
};

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...queued: unknown[]) => window.dataLayer?.push(queued));
  window.gtag(...args);
}

function googleConsentFor(state: ConsentState | null): GoogleConsentValues {
  return {
    analytics_storage: state?.analytics ? "granted" : "denied",
    ad_storage: state?.marketing ? "granted" : "denied",
    ad_user_data: state?.marketing ? "granted" : "denied",
    ad_personalization: state?.marketing ? "granted" : "denied",
  };
}

export function initialiseGoogleConsent() {
  if (typeof window === "undefined") return;
  gtag("consent", "default", deniedGoogleConsent);
}

export function updateGoogleConsent(state: ConsentState | null) {
  if (typeof window === "undefined") return;
  gtag("consent", "update", googleConsentFor(state));
}

function valid(value: unknown): value is ConsentState {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<ConsentState>;
  return item.version === 1 && item.decided === true
    && typeof item.preferences === "boolean"
    && typeof item.analytics === "boolean"
    && typeof item.marketing === "boolean"
    && typeof item.updatedAt === "string";
}

export function readConsent(): ConsentState | null {
  if (typeof document === "undefined") return null;
  const raw = document.cookie.split("; ").find((item) => item.startsWith(`${CONSENT_COOKIE}=`))?.split("=").slice(1).join("=");
  if (!raw) return null;
  try {
    const value = JSON.parse(decodeURIComponent(raw));
    return valid(value) ? value : null;
  } catch {
    return null;
  }
}

export function consentFor(category: ConsentCategory) {
  return readConsent()?.[category] === true;
}

export function saveConsent(input: Pick<ConsentState, ConsentCategory>) {
  const state: ConsentState = {
    version: 1,
    decided: true,
    ...input,
    updatedAt: new Date().toISOString(),
  };
  if (!input.analytics) {
    window.sessionStorage.removeItem("spanishcue.marketing.events.v1");
    delete document.documentElement.dataset.lastMarketingEvent;
  }
  if (!input.marketing) {
    window.localStorage.removeItem("spanishcue.marketing.attribution.v1");
    delete document.documentElement.dataset.marketingAttribution;
    delete document.documentElement.dataset.utmSource;
  }
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(state))}; Max-Age=15552000; Path=/; SameSite=Lax; Secure`;
  updateGoogleConsent(state);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
  return state;
}

export function openConsentManager() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
