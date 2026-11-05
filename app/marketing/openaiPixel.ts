import { consentFor } from "../privacy/consent";

// ChatGPT Ads conversion pixel (data source «SpanishCue Web (spanishcue.com)»,
// created in OpenAI Ads Manager on 2026-11-05). The ID is public by design.
export const OPENAI_PIXEL_ID = "FtmkxcA4M9Bu8q5eTLsYTP";
const sdkSrc = "https://bzrcdn.openai.com/sdk/oaiq.min.js";
const scriptId = "spanishcue-openai-pixel";

type Oaiq = ((...args: unknown[]) => void) & { q?: unknown[] };

declare global {
  interface Window {
    oaiq?: Oaiq;
  }
}

/**
 * Loads the pixel only after marketing consent, like the Google Ads tag.
 * The queue must stay a classic function pushing `arguments`, as in the
 * official snippet. Returns false while consent is missing.
 */
export function installOpenAIPixel(): boolean {
  if (typeof window === "undefined" || !consentFor("marketing")) return false;
  if (!window.oaiq) {
    const queue: Oaiq = function oaiqQueue() {
      // eslint-disable-next-line prefer-rest-params
      queue.q!.push(arguments);
    };
    queue.q = [];
    window.oaiq = queue;
    window.oaiq("consent", true);
    window.oaiq("init", { pixelId: OPENAI_PIXEL_ID });
  }
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = sdkSrc;
    document.head.appendChild(script);
  }
  return true;
}

/** Withdraws consent in an already loaded pixel when the visitor opts out. */
export function revokeOpenAIPixelConsent() {
  if (typeof window !== "undefined" && window.oaiq) window.oaiq("consent", false);
}

export function sendOpenAISignup() {
  if (!installOpenAIPixel()) return;
  window.oaiq?.("measure", "registration_completed", { type: "customer_action" });
}

/** Only for the first server-verified paid transaction. Amount goes in cents. */
export function sendOpenAIPurchase(transactionId: string, value: number, currency: string) {
  if (!installOpenAIPixel()) return;
  if (!transactionId || !Number.isFinite(value) || value <= 0 || !/^[A-Z]{3}$/.test(currency)) return;
  window.oaiq?.(
    "measure",
    "order_created",
    { type: "contents", amount: Math.round(value * 100), currency },
    { event_id: transactionId },
  );
}
