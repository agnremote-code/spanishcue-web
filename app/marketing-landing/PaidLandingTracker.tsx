"use client";
import { useEffect } from 'react';
import { trackMarketingEvent } from '../marketing/analytics';
import { consentFor, CONSENT_EVENT } from '../privacy/consent';

/** Reports founder_offer_view and pricing_view once the plans section is on screen. */
export default function PaidLandingTracker({ slug }: { slug: string }) {
 useEffect(() => {
  const el = document.getElementById('plans');
  if (!el) return;
  let visible = false;
  let tracked = false;
  const run = () => { if (visible && !tracked && consentFor('analytics')) { tracked = true; trackMarketingEvent('founder_offer_view', { landing:slug }); trackMarketingEvent('pricing_view', { placement:`landing_offer_${slug}` }); } };
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; run(); }, { threshold:.3 });
  observer.observe(el); window.addEventListener(CONSENT_EVENT, run);
  return () => { observer.disconnect(); window.removeEventListener(CONSENT_EVENT, run); };
 }, [slug]);
 return null;
}
