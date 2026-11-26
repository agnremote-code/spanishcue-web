"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  CONSENT_EVENT,
  initialiseGoogleConsent,
  readConsent,
  updateGoogleConsent,
} from "../privacy/consent";
import { installOpenAIPixel, revokeOpenAIPixelConsent } from "./openaiPixel";

const scriptId = "spanishcue-google-tag";
const measurementId = (() => { try { return process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || ""; } catch { return ""; } })();
const googleAdsConversionId = (() => { try { return process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID?.trim() || ""; } catch { return ""; } })();

function usableMeasurementId(value: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(value);
}

function usableGoogleAdsId(value: string): boolean {
  return /^AW-[0-9]+$/i.test(value);
}

let googleTagInstalled = false;

function installGoogleTag(): void {
  if (googleTagInstalled) return;
  const tagId = usableMeasurementId(measurementId)
    ? measurementId
    : usableGoogleAdsId(googleAdsConversionId)
      ? googleAdsConversionId
      : "";
  if (!tagId) return;
  googleTagInstalled = true;

  // Queue Consent Mode before the network script loads. Called only after an
  // optional category is accepted; the tag then stays loaded so Google can honor
  // later consent changes without us tearing down and recreating the tag.
  window.gtag?.("js", new Date());
  if (usableMeasurementId(measurementId)) {
    window.gtag?.("config", measurementId, {
      send_page_view: false,
      allow_google_signals: false,
    });
  }
  if (usableGoogleAdsId(googleAdsConversionId)) {
    window.gtag?.("config", googleAdsConversionId, {
      send_page_view: false,
      allow_google_signals: false,
    });
  }

  if (document.getElementById(scriptId)) return;
  const script = document.createElement("script");
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(tagId)}`;
  document.head.appendChild(script);
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const lastPageView = useRef("");

  const sendPageView = useCallback(() => {
    if (!usableMeasurementId(measurementId) || !readConsent()?.analytics) return;
    const pagePath = `${window.location.pathname}${window.location.search}`;
    if (lastPageView.current === pagePath) return;
    lastPageView.current = pagePath;
    window.gtag?.("event", "page_view", {
      send_to: measurementId,
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
    });
  }, []);

  useEffect(() => {
    initialiseGoogleConsent();
    const sync = () => {
      const consent = readConsent();
      updateGoogleConsent(consent);
      // Basic Consent Mode (2026-11-26 compliance pass): no request reaches Google
      // until the visitor accepts analytics or marketing. Once loaded, the tag stays
      // and Consent Mode honours later changes.
      if (consent?.analytics || consent?.marketing) installGoogleTag();
      if (consent?.marketing) installOpenAIPixel();
      else revokeOpenAIPixelConsent();
      sendPageView();
    };
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, [sendPageView]);

  useEffect(() => {
    sendPageView();
  }, [pathname, sendPageView]);

  return null;
}
