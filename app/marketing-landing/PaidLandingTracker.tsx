"use client";
import { useEffect } from 'react';
import { trackMarketingEvent } from '../marketing/analytics';
import { consentFor, CONSENT_EVENT } from '../privacy/consent';

/**
 * Reports founder_offer_view and pricing_view once the plans section is on
 * screen, and shows the fixed mobile CTA only while neither purchase block is
 * visible. The CTA is position:fixed and slides with a transform, so toggling
 * it never moves the page.
 */
export default function PaidLandingTracker({ slug }: { slug: string }) {
 useEffect(() => {
  const plans = document.getElementById('plans');
  const hero = document.querySelector('.plp-hero-checkout');
  const sticky = document.getElementById('plp-sticky');
  if (!plans) return;
  let visible = false;
  let tracked = false;
  const run = () => { if (visible && !tracked && consentFor('analytics')) { tracked = true; trackMarketingEvent('founder_offer_view', { landing:slug }); trackMarketingEvent('pricing_view', { placement:`landing_offer_${slug}` }); } };
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; run(); }, { threshold:.3 });
  // Sticky CTA: visible once the hero checkout has scrolled above the viewport, hidden while the plans are on screen.
  const state = { heroPassed:false, plansVisible:false };
  const stickyObserver = new IntersectionObserver(entries => {
   for (const entry of entries) {
    if (entry.target === plans) state.plansVisible = entry.isIntersecting;
    else state.heroPassed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
   }
   sticky?.setAttribute('data-show', state.heroPassed && !state.plansVisible ? 'true' : 'false');
  });
  observer.observe(plans); window.addEventListener(CONSENT_EVENT, run);
  if (sticky) { stickyObserver.observe(plans); if (hero) stickyObserver.observe(hero); }
  return () => { observer.disconnect(); stickyObserver.disconnect(); window.removeEventListener(CONSENT_EVENT, run); };
 }, [slug]);
 return null;
}
