"use client";

import { useEffect, useRef } from "react";
import { captureMarketingAttribution, trackMarketingEvent } from "./analytics";
import { CONSENT_EVENT, readConsent } from "../privacy/consent";

const acquisitionLandings = new Set([
  "/",
  "/spanish-teacher-resources",
  "/spanish-conversation-activities",
  "/spanish-conversation-questions",
  "/spanish-grammar-lessons",
  "/about",
  "/guides/how-to-teach-ser-vs-estar",
  "/guides/preterite-vs-imperfect-activities",
  "/guides/spanish-subjunctive-lesson-plan",
  "/ele-recursos-profesores",
  "/online-spanish-teaching-resources",
  "/free-spanish-lesson",
  "/resources",
  "/guides",
  "/autoestudio",
]);

/** Organic hubs, their level pages and ad-only `/lp/*` variants all count as landings. */
function landingName(pathname: string): string | null {
  if (pathname === "/") return "home";
  if (acquisitionLandings.has(pathname)) return pathname.slice(1);
  if (pathname.startsWith("/spanish-conversation-activities/") || pathname.startsWith("/spanish-grammar-lessons/") || pathname.startsWith("/lp/")) return pathname.slice(1);
  return null;
}

export default function MarketingAttribution({
  pathname,
  freeLesson,
  lessonId,
  lessonTitle,
}: {
  pathname: string;
  freeLesson: boolean;
  lessonId?: number;
  lessonTitle?: string;
}) {
  const tracked = useRef(false);

  useEffect(() => {
    const run = () => {
      const consent = readConsent();
      if (!consent?.analytics || tracked.current) return;
      tracked.current = true;
      captureMarketingAttribution();
      const landing = landingName(pathname);
      if (landing) trackMarketingEvent("landing_view", { landing });
      if (pathname === "/pro" || pathname === "/acceso" || pathname === "/pricing") {
        trackMarketingEvent("pricing_view", { placement: pathname.slice(1) });
      }
      if (pathname === "/acceso") trackMarketingEvent("paywall_view");
      if (pathname === "/ingresar" && new URL(window.location.href).searchParams.get("modo") === "registro") {
        trackMarketingEvent("signup_start");
      }
      if (freeLesson && lessonId) {
        trackMarketingEvent("free_lesson_start", { lesson_id: lessonId, lesson_title: lessonTitle });
      }
    };
    run();
    window.addEventListener(CONSENT_EVENT, run);
    return () => window.removeEventListener(CONSENT_EVENT, run);
  }, [freeLesson, lessonId, lessonTitle, pathname]);

  return null;
}
