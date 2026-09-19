"use client";

import { useEffect, useRef } from "react";
import {
  CONSENT_EVENT,
  initialiseGoogleConsent,
  readConsent,
  updateGoogleConsent,
} from "../privacy/consent";

const scriptId = "spanishcue-ga4";
const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || "";

function usableMeasurementId(value: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(value);
}

function removeTag(): void {
  document.getElementById(scriptId)?.remove();
}

function installTag(id: string): void {
  if (document.getElementById(scriptId)) return;
  (window as unknown as Record<string, boolean>)[`ga-disable-${id}`] = false;
  // These commands must be queued before the network script starts, so an
  // early product event always has a configured destination.
  window.gtag?.("js", new Date());
  window.gtag?.("config", id, {
    send_page_view: false,
    allow_google_signals: false,
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_referrer: "",
  });
  const script = document.createElement("script");
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

export default function GoogleAnalytics() {
  const installed = useRef(false);

  useEffect(() => {
    initialiseGoogleConsent();
    const sync = () => {
      const consent = readConsent();
      updateGoogleConsent(consent);
      if (!consent?.analytics || !usableMeasurementId(measurementId)) {
        if (usableMeasurementId(measurementId)) (window as unknown as Record<string, boolean>)[`ga-disable-${measurementId}`] = true;
        removeTag();
        installed.current = false;
        return;
      }
      installTag(measurementId);
      installed.current = true;
    };
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      if (!installed.current) removeTag();
    };
  }, []);

  return null;
}
