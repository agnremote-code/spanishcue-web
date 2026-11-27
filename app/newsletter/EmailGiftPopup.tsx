'use client';
import { useEffect, useState } from 'react';
import { GIFT_POPUP_STORAGE_KEY } from './gift';
import { GiftPitch, GiftSignupForm, rememberGiftPopup } from './GiftSignup';
import styles from './newsletter.module.css';

const SNOOZE_DAYS = 14;

function shouldAsk() {
  try {
    const value = window.localStorage.getItem(GIFT_POPUP_STORAGE_KEY);
    if (value === 'joined') return false;
    const closed = Number(value?.replace('closed:', ''));
    return !closed || Date.now() - closed > SNOOZE_DAYS * 86400000;
  } catch { return true; }
}

/**
 * Email capture on public SEO pages. Runs only in the browser, so edge-cached
 * HTML stays identical for everyone. Opens after 15 s, once the reader has
 * scrolled 40 % of the page, or when the pointer leaves through the top of the
 * window on a desktop (exit intent, not before 4 s), always after the cookie
 * banner is answered and at most once every two weeks after a close.
 */
/** English growth pages have no `lang="es"` on their main column; Spanish SEO pages always do. */
function pageLocale(): 'es' | 'en' {
  const lang = document.querySelector('main[lang]')?.getAttribute('lang') || document.documentElement.lang || 'es';
  return lang.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export default function EmailGiftPopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!shouldAsk()) return;
    let shown = false, waiting = 0;
    // Never stack on the cookie banner: wait until the visitor answers it.
    const show = () => {
      if (shown) return;
      cleanup();
      if (document.querySelector('.consent-panel')) { waiting = window.setTimeout(show, 1500); return; }
      shown = true; setOpen(true);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= .4) show();
    };
    const started = Date.now();
    const onLeave = (event: MouseEvent) => { if (!event.relatedTarget && event.clientY <= 0 && Date.now() - started > 4000) show(); };
    const timer = window.setTimeout(show, 15000);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseout', onLeave);
    function cleanup() { window.clearTimeout(timer); window.removeEventListener('scroll', onScroll); document.removeEventListener('mouseout', onLeave); }
    return () => { cleanup(); window.clearTimeout(waiting); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  function close() {
    try { if (window.localStorage.getItem(GIFT_POPUP_STORAGE_KEY) !== 'joined') rememberGiftPopup(`closed:${Date.now()}`); } catch { /* ignore */ }
    setOpen(false);
  }
  if (!open) return null;
  const locale = pageLocale();
  return (
    <div className={styles.backdrop} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="sc-gift-title">
        <button type="button" className={styles.close} onClick={close} aria-label={locale === 'es' ? 'Cerrar' : 'Close'}>×</button>
        <div id="sc-gift-title"><GiftPitch locale={locale} /></div>
        <img className={styles.mascot} src="/brand/mascot/pointing.webp" alt="" width={120} height={160} loading="lazy" />
        <GiftSignupForm locale={locale} source={typeof window === 'undefined' ? '/' : window.location.pathname} />
      </div>
    </div>
  );
}
