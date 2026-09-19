import type { MessageKey } from "../i18n/messages";
import type { MarketingEvent } from "./analytics";

export type MarketingAudience = "visitor" | "free" | "pro";

export type MarketingCta = {
  href: string;
  labelKey: MessageKey;
  event: MarketingEvent;
  intent: "try_free" | "view_lesson" | "subscribe" | "open_library";
};

export function audienceFromAccess(signedIn: boolean, fullAccess: boolean): MarketingAudience {
  if (fullAccess) return "pro";
  return signedIn ? "free" : "visitor";
}

export function primaryCtaFor(audience: MarketingAudience, sampleHref: string): MarketingCta {
  if (audience === "pro") {
    return { href: "#library-results", labelKey: "nav.openClass", event: "cta_click", intent: "open_library" };
  }
  if (audience === "free") {
    return { href: "/pricing", labelKey: "nav.unlockAll", event: "cta_click", intent: "subscribe" };
  }
  return {
    href: `/ingresar?modo=registro&returnTo=${encodeURIComponent(sampleHref)}`,
    labelKey: "nav.tryFree",
    event: "cta_click",
    intent: "try_free",
  };
}

export function secondaryCtaFor(audience: MarketingAudience, sampleHref: string): MarketingCta {
  if (audience === "pro") {
    return { href: sampleHref, labelKey: "nav.viewLesson", event: "cta_click", intent: "view_lesson" };
  }
  return { href: sampleHref, labelKey: "nav.viewLesson", event: "cta_click", intent: "view_lesson" };
}

export function subscriptionCtaFor(audience: MarketingAudience): MarketingCta {
  if (audience === "pro") {
    return { href: "#library-results", labelKey: "nav.openClass", event: "cta_click", intent: "open_library" };
  }
  if (audience === "free") {
    return { href: "/acceso", labelKey: "nav.subscribe", event: "cta_click", intent: "subscribe" };
  }
  return {
    href: `/ingresar?modo=registro&returnTo=${encodeURIComponent("/acceso")}`,
    labelKey: "nav.subscribe",
    event: "cta_click",
    intent: "subscribe",
  };
}
