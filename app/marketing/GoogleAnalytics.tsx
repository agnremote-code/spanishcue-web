"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  CONSENT_EVENT,
  initialiseGoogleConsent,
  readConsent,
  updateGoogleConsent,
} from "../privacy/consent";

const scriptId = "spanishcue-google-tag";
const measurementId = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || "") : "";
const googleAdsConversionId = typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID?.trim() || "") : "";

function usableMeasurementId(value: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(value);
}

function usableGoogleAdsId(value: string): boolean {
  return /^AW-[0-9]+$/i.test(value);
}

function installGoogleTag(): void {
  const tagId = usableMeasurementId(measurementId)
    ? measurementId
    : usableGoogleAdsId(googleAdsConversionId)
      ? googleAdsConversionId
      : "";
  if (!tagId) return;

  // Queue Consent Mode before the network script loads. The tag stays loaded
  // even while storage is denied, so Google can honor consent changes without
  // us tearing down and recreating the tag.
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
    installGoogleTag();
    const sync = () => {
      updateGoogleConsent(readConsent());
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
