'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { useI18n } from '../i18n/LocaleProvider';
import { trackMarketingEvent } from '../marketing/analytics';
import { bautiCopy, BAUTI_WHATSAPP, type BautiAudience, type BautiTopic } from './copy';

const PRO_FLAG = 'sc-bauti-pro';
const noSubscribe = () => () => {};
const storedPro = () => { try { return sessionStorage.getItem(PRO_FLAG) === '1'; } catch { return false; } };

/**
 * Bauti, SpanishCue's floating help for visitors without a subscription.
 * Answers are written in advance (no AI, no data collection); academies and
 * independent teachers get different answers. Pages whose identity the Worker
 * did not check fall back to what the last checked page said about PRO.
 */
export default function AskBauti({ audience, fullAccess, identityChecked }: { audience: BautiAudience; fullAccess: boolean; identityChecked: boolean }) {
  const { locale } = useI18n();
  const t = bautiCopy[locale === 'en' ? 'en' : 'es'][audience];
  const lastCheckedPro = useSyncExternalStore(noSubscribe, storedPro, () => false);
  const hidden = fullAccess || (!identityChecked && lastCheckedPro);
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<BautiTopic | null>(null);

  useEffect(() => {
    if (!identityChecked) return;
    try { sessionStorage.setItem(PRO_FLAG, fullAccess ? '1' : '0'); } catch { /* storage blocked: rely on the server's answer */ }
  }, [fullAccess, identityChecked]);

  if (hidden) return null;
  const track = (placement: string) => trackMarketingEvent('cta_click', { placement: `bauti_${audience}_${placement}`, cta_type: 'contact' });
  const whatsapp = `https://wa.me/${BAUTI_WHATSAPP}?text=${encodeURIComponent(t.whatsappMessage)}`;

  return <div className={open ? 'bauti is-open' : 'bauti'}>
    {open && <section className="bauti-panel" role="dialog" aria-label={t.title}>
      <header>
        <img src="/bauti/half.webp" alt="" width="272" height="235" />
        <div><b>Bauti</b><span>{t.subtitle}</span></div>
        <button type="button" onClick={() => setOpen(false)} aria-label={t.close}>×</button>
      </header>
      <div className="bauti-body" aria-live="polite">
        <p className="bauti-bubble">{t.intro}</p>
        {topic ? <>
          <p className="bauti-bubble mine">{topic.question}</p>
          <p className="bauti-bubble">{topic.answer}</p>
          {topic.link && <a className="bauti-cta" href={topic.link.href} onClick={() => track(`${topic.id}_link`)}>{topic.link.label} →</a>}
          <button type="button" className="bauti-back" onClick={() => setTopic(null)}>{t.back}</button>
        </> : <ul>{t.topics.map(item => <li key={item.id}><button type="button" onClick={() => { setTopic(item); track(item.id); }}>{item.question}</button></li>)}</ul>}
      </div>
      <footer>
        <a className="bauti-wa" href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp')}>{t.whatsapp}</a>
        <a className="bauti-main" href={t.primary.href} onClick={() => { setOpen(false); track('primary'); }}>{t.primary.label}</a>
        <small>{t.note}</small>
      </footer>
    </section>}
    <button type="button" className="bauti-launcher" aria-expanded={open} aria-label={open ? t.close : t.open} onClick={() => { if (!open) track('open'); setOpen(!open); }}>
      <img src="/bauti/bauti-cara.webp" alt="" width="40" height="40" />
      <span><b>{t.launcher}</b><small>{t.launcherHint}</small></span>
      <i aria-hidden="true" />
    </button>
  </div>;
}
