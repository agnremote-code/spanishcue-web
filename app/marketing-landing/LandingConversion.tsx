"use client";
import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { trackMarketingEvent } from '../marketing/analytics';
import { consentFor, CONSENT_EVENT } from '../privacy/consent';
import { campaignCopy } from './campaign-copy';
import { isFounderStatus, liveFounderOffer, shouldShowOffer, type FounderStatus } from './offer-policy';

const seenKey = 'spanishcue.founder-modal.seen';
const convertedKey = 'spanishcue.founder-modal.converted';
function sessionHas(key: string) { try { return sessionStorage.getItem(key) === '1'; } catch { return true; } }
function sessionSet(key: string) { try { sessionStorage.setItem(key, '1'); } catch {} }
export function LandingLink({ href, placement, primary = false, children, className }: { href: string; placement: string; primary?: boolean; children: ReactNode; className?: string }) {
 return <a href={href} className={className} onClick={() => trackMarketingEvent(primary ? 'primary_cta_click' : 'cta_click', { placement })}>{children}</a>;
}
export default function LandingConversion({ locale, pro, signedIn, slug, hero = false }: { locale: 'es' | 'en'; pro: boolean; signedIn: boolean; slug: string; hero?: boolean }) {
 const c = campaignCopy[locale];
 const [status, setStatus] = useState<FounderStatus | null>(null);
 const [pastHero, setPastHero] = useState(false);
 const [open, setOpen] = useState(false);
 const [converted, setConverted] = useState(false);
 const dialog = useRef<HTMLDialogElement>(null);
 const offer = useRef<HTMLElement>(null);
 const trigger = useRef<HTMLElement | null>(null);
 const seen = useRef(false);
 const live = !pro && liveFounderOffer(status);
 const launch = status !== null && (status.mode === 'sandbox' || !status.checkoutLive);
 const soldOut = status?.mode === 'live' && status.checkoutLive && !live;
 const unavailableTitle = locale === 'es' ? 'Conoce tu próximo paso con PRO.' : 'Find your next step with PRO.';
 const unavailableCopy = soldOut ? (locale === 'es' ? 'La oferta fundadora ya no está disponible. Consulta las opciones actuales de acceso.' : 'The Founder offer is no longer available. Check the current access options.') : (locale === 'es' ? 'Consulta la disponibilidad y las condiciones actuales de acceso a la biblioteca.' : 'Check current availability and terms for full library access.');
 const destination = signedIn ? '/acceso' : '/ingresar?modo=registro&returnTo=%2Facceso';
 useEffect(() => {
  if (pro) return;
  const controller = new AbortController();
  fetch('/api/billing/founder-status', { credentials:'same-origin', signal: controller.signal }).then(r => r.ok ? r.json() : null).then(body => setStatus(isFounderStatus(body) ? body : null)).catch(() => {});
  return () => controller.abort();
 }, [pro]);
 useEffect(() => {
  if (hero || pro) return;
  const onConversion = (event: Event) => {
   const name = (event as CustomEvent).detail?.event;
   if (name === 'signup_complete' || name === 'subscription_first_paid' || name === 'subscription_complete') { sessionSet(convertedKey); setConverted(true); setOpen(false); }
  };
  window.addEventListener('spanishcue:marketing', onConversion);
  return () => window.removeEventListener('spanishcue:marketing', onConversion);
 }, [hero, pro]);
 useEffect(() => {
  if (hero || !live || converted) return;
  let elapsed = 0;
  let previous = performance.now();
  let lastInteraction = previous;
  let didInteract = false;
  let activeScroll = 0;
  const markInteraction = () => { didInteract = true; lastInteraction = performance.now(); };
  const attempt = (exit = false) => {
   const busy = Boolean(document.querySelector('dialog[open], [role="dialog"][aria-modal="true"]'));
   if (busy || document.visibilityState !== 'visible' || !document.hasFocus()) return;
   if (!shouldShowOffer({ live, pro, seen: seen.current || sessionHas(seenKey), converted: converted || sessionHas(convertedKey), engagedMs: elapsed, scroll: activeScroll, exit })) return;
   seen.current = true; sessionSet(seenKey);
   trigger.current = document.activeElement as HTMLElement;
   setOpen(true);
   trackMarketingEvent('founder_modal_view', { landing:slug });
  };
  const scroll = () => {
   markInteraction();
   const el = document.querySelector('.landing-hero');
   setPastHero(Boolean(el && el.getBoundingClientRect().bottom < 0));
   activeScroll = window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight);
   attempt();
  };
  const exit = (e: MouseEvent) => { if (e.clientY <= 0 && !e.relatedTarget && matchMedia('(hover:hover) and (pointer:fine)').matches) attempt(true); };
  const timer = window.setInterval(() => {
   const now = performance.now();
   if (didInteract && now - lastInteraction < 60000 && document.visibilityState === 'visible' && document.hasFocus()) elapsed += Math.min(now - previous, 1500);
   previous = now; attempt();
  }, 1000);
  window.addEventListener('scroll', scroll, { passive:true });
  window.addEventListener('pointerdown', markInteraction, { passive:true });
  window.addEventListener('keydown', markInteraction);
  document.addEventListener('mouseout', exit);
  return () => { clearInterval(timer); window.removeEventListener('scroll', scroll); window.removeEventListener('pointerdown', markInteraction); window.removeEventListener('keydown', markInteraction); document.removeEventListener('mouseout', exit); };
 }, [hero, live, pro, slug, converted]);
 useEffect(() => {
  const el = dialog.current;
  if (!el) return;
  if (open) { el.showModal(); const old = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { el.close(); document.body.style.overflow = old; trigger.current?.focus(); }; }
 }, [open]);
 useEffect(() => {
  if (hero || pro) return;
  const el = offer.current;
  if (!el) return;
  let visible = false;
  let tracked = false;
  const run = () => { if (visible && !tracked && consentFor('analytics')) { tracked = true; trackMarketingEvent('founder_offer_view', { landing:slug }); trackMarketingEvent('pricing_view', { placement:`landing_offer_${slug}` }); } };
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; run(); }, { threshold:.3 });
  observer.observe(el); window.addEventListener(CONSENT_EVENT, run);
  return () => { observer.disconnect(); window.removeEventListener(CONSENT_EVENT, run); };
 }, [hero, pro, slug]);
 if (pro) return hero ? null : <section className="landing-pro-ready"><h2>{locale === 'es' ? 'Tu biblioteca PRO te espera.' : 'Your PRO library is ready.'}</h2><Link className="lp-button" href="/#library-results">{locale === 'es' ? 'ABRIR BIBLIOTECA' : 'OPEN THE LIBRARY'}</Link></section>;
 if (hero) return <div className="landing-hero-offer">{live ? <><LandingLink href={destination} placement={`landing_hero_offer_${slug}`}>{c.unlock} →</LandingLink><small>{locale === 'es' ? 'Precio fundador · US$15/mes · primeras 1.000 suscripciones activadas' : 'Founder Price · US$15/month · first 1,000 activated subscriptions'}</small></> : <small>{launch ? (locale === 'es' ? 'PRO próximamente · precio fundador previsto US$15/mes' : 'PRO coming soon · planned Founder Price US$15/month') : unavailableTitle}</small>}</div>;
 return <>
  <section ref={offer} id="founder-offer" className="landing-founder" aria-labelledby="founder-title">
   <div><span className="lp-eyebrow">FOUNDING TEACHERS</span><h2 id="founder-title">{live ? c.founder : launch ? c.launch : unavailableTitle}</h2><p>{live ? c.founderCopy : launch ? c.launchCopy : unavailableCopy}</p>{live && <p>{c.keep}</p>}</div>
   <div className="landing-founder-deal">{(live || launch) && <p className="landing-founder-price"><b>US$15</b><span>/ {c.month}</span></p>}<h3>{c.full}</h3>{live && <p className="landing-availability">{status.remaining} {c.remaining}</p>}<LandingLink href={live ? destination : '/pricing'} placement={`landing_founder_${slug}`} className="lp-button">{live ? c.unlock : launch ? c.launchCta : (locale === 'es' ? 'VER OPCIONES PRO' : 'VIEW PRO OPTIONS')}</LandingLink><small>{live ? c.payment : launch ? (locale === 'es' ? 'Sin cobros hoy. Sin tarjeta.' : 'No payment today. No card.') : c.tryFirst}</small></div>
  </section>
  {live && pastHero && !open && !converted && <aside className="landing-sticky" aria-label="Founder Price"><span>Founder Price · <strong>US$15/{c.month}</strong><small>{c.founderCopy}</small></span><LandingLink className="lp-button" href={destination} placement={`landing_sticky_${slug}`}>{locale === 'es' ? 'Desbloquear biblioteca' : 'Unlock the library'}</LandingLink></aside>}
  {live && <dialog ref={dialog} className="landing-modal" aria-labelledby="founder-modal-title" aria-describedby="founder-modal-copy" onCancel={() => setOpen(false)} onClose={() => setOpen(false)}>
   <button className="landing-modal-close" type="button" aria-label={c.close} onClick={() => setOpen(false)}>×</button><span className="lp-eyebrow">FOUNDING TEACHERS</span><h2 id="founder-modal-title">{c.modalTitle}</h2><p id="founder-modal-copy">{c.founderCopy}</p><p>{c.keep}</p><p className="landing-availability">{status.remaining} {c.remaining}</p><a className="lp-button" href={destination} onClick={() => { sessionSet(convertedKey); trackMarketingEvent('founder_modal_click', { landing:slug }); }}>{c.unlock}</a><button className="landing-modal-continue" type="button" onClick={() => setOpen(false)}>{c.continue}</button><small>{c.tryFirst}</small>
  </dialog>}
 </>;
}
