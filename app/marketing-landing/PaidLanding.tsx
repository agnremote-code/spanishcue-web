import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { freeLessonIds, fullAccessFromHeaders, signedInFromHeaders } from '../access-policy';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { localeFromHeaders } from '../i18n/messages';
import { catalogLessons as lessons } from '../conversation-families/catalog';
import { SpanishCueBrand } from '../SpanishCueBrand';
import CheckoutButton from '../acceso/CheckoutButton';
import { canonicalUrl } from '../seo';
import type { LandingConfig } from './config';
import { campaignCopy } from './campaign-copy';
import { LandingLink } from './LandingConversion';
import PaidLandingTracker from './PaidLandingTracker';
import { featureMedia, paidCopy, type FeatureKey, type PaidLandingSlug } from './paid-copy';

/**
 * Paid-traffic landing for Meta/Zeely campaigns: real product screenshots,
 * both Paddle plans (1-day US$2 trial and US$15.50/month) in the hero and in
 * the plans section, PayPal as the secondary option, no popups.
 */
export default async function PaidLanding({ config, slug, pathname }: { config: LandingConfig; slug: PaidLandingSlug; pathname: string }) {
 const h = await headers();
 const locale = localeFromHeaders(h);
 const pro = fullAccessFromHeaders(h);
 const signedIn = signedInFromHeaders(h);
 const t = paidCopy[locale];
 const c = campaignCopy[locale];
 const original = config.copy[locale];
 const features: FeatureKey[] = ['worlds', 'lessons', 'listening', 'conversation', 'homework'];
 const facts = [String(lessons.length), 'A1–C2', String(freeLessonIds.length), locale === 'es' ? 'Navegador' : 'Browser'];
 const structuredData = { '@context':'https://schema.org', '@type':'WebPage', name:original.title, description:original.lead, url:canonicalUrl(pathname), isPartOf:{'@type':'WebSite',name:'SPANISHCUE',url:'https://spanishcue.com'}, audience:{'@type':'EducationalAudience',educationalRole:'teacher'} };
 const checkout = pro
  ? <div className="plp-pro"><strong>{t.proReady}</strong><Link className="plp-button" href="/#library-results">{t.openLibrary} →</Link></div>
  : <CheckoutButton signedIn={signedIn} returnTo="/" variant="landing" />;
 return <main className="plp" id="landing-main">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  <a className="skip-link" href="#landing-title">{locale === 'es' ? 'Ir al contenido' : 'Skip to content'}</a>
  <header className="plp-nav"><Link href="/" aria-label="SPANISHCUE"><SpanishCueBrand variant="compact" /></Link><nav aria-label={locale === 'es' ? 'Cuenta e idioma' : 'Account and language'}><LanguageSwitcher className="landing-language" /><Link href={signedIn ? '/cuenta' : '/ingresar'}>{signedIn ? c.login : c.loginVisitor}</Link></nav></header>

  <section className="plp-hero" aria-labelledby="landing-title">
   <div className="plp-hero-copy">
    <span className="plp-eyebrow">{t.eyebrow}</span>
    <h1 id="landing-title">{t.title}</h1>
    <p className="plp-lead">{t.lead[slug]}</p>
    <figure className="plp-hero-inline"><div className="plp-frame"><Image src={featureMedia.worlds.image} alt={t.features.worlds[0]} width={1280} height={800} sizes="100vw" /></div><figcaption>{t.heroShot}</figcaption></figure>
    <div className="plp-hero-checkout">{checkout}</div>
    <LandingLink href={featureMedia.listening.path!} className="plp-text-link" placement={`landing_hero_free_${slug}`}>{t.tryFree} →</LandingLink>
   </div>
   <figure className="plp-hero-shot">
    <div className="plp-frame"><div className="plp-frame-bar" aria-hidden="true"><i /><i /><i /><span>spanishcue.com/noche-abierta</span></div><Image src={featureMedia.worlds.image} alt={t.features.worlds[0]} width={1280} height={800} fetchPriority="high" sizes="(max-width: 900px) 100vw, 640px" /></div>
    <div className="plp-frame plp-frame-float" aria-hidden="true"><Image src={featureMedia.listening.image} alt="" width={1280} height={800} sizes="260px" /></div>
    <figcaption>{t.heroShot}</figcaption>
   </figure>
  </section>

  <section className="plp-facts" aria-label={locale === 'es' ? 'Datos de la biblioteca' : 'Library facts'}>{facts.map((value, i) => <div key={t.facts[i]}><b>{value}</b><span>{t.facts[i]}</span></div>)}</section>

  <section className="plp-features" aria-labelledby="plp-features-title">
   <header className="plp-section-head"><span className="plp-eyebrow">{t.featuresKicker}</span><h2 id="plp-features-title">{t.featuresTitle}</h2><p>{t.featuresNote}</p></header>
   <div className="plp-bento">{features.map(key => {
    const media = featureMedia[key];
    const [title, description] = t.features[key];
    return <article key={key} className={`plp-tile plp-tile-${key}`}>
     <div className="plp-tile-shot"><Image src={media.image} alt={title} width={1280} height={800} loading="lazy" sizes={key === 'worlds' ? '(max-width: 900px) 100vw, 760px' : '(max-width: 900px) 100vw, 400px'} /></div>
     <div className="plp-tile-copy"><span className={media.path ? 'plp-tag plp-tag-free' : 'plp-tag'}>{media.path ? t.freeTag : t.proTag}</span><h3>{title}</h3><p>{description}</p>{media.path && <LandingLink href={media.path} placement={`landing_feature_${key}_${slug}`}>{t.openLesson} →</LandingLink>}</div>
    </article>;
   })}</div>
  </section>

  <section className="plp-how" aria-labelledby="plp-how-title">
   <div className="plp-how-photo"><Image src="/brand/campaign/free-lesson.webp" alt="" width={1536} height={1024} loading="lazy" sizes="(max-width: 900px) 100vw, 560px" /></div>
   <div className="plp-how-copy">
    <span className="plp-eyebrow">{t.howKicker}</span>
    <h2 id="plp-how-title">{t.howTitle}</h2>
    <ol>{t.how.map(([title, description], i) => <li key={title}><b>0{i + 1}</b><div><strong>{title}</strong><span>{description}</span></div></li>)}</ol>
    <p>{t.howNote}</p>
   </div>
  </section>

  <section className="plp-prep" aria-labelledby="plp-prep-title">
   <h2 id="plp-prep-title">{t.prepTitle}</h2>
   <div className="plp-prep-grid">
    <div><span className="plp-eyebrow">{c.before}</span><ul>{c.beforeItems.map(item => <li key={item}>{item}</li>)}</ul></div>
    <div className="plp-prep-after"><span className="plp-eyebrow">{c.after}</span><ul>{c.afterItems.map(item => <li key={item}>{item}</li>)}</ul></div>
   </div>
  </section>

  <section className="plp-plans" id="plans" aria-labelledby="plp-plans-title">
   <div className="plp-plans-copy">
    <span className="plp-eyebrow">{t.plansKicker}</span>
    <h2 id="plp-plans-title">{t.plansTitle}</h2>
    <p>{t.plansLead}</p>
    <ul>{t.included.map(item => <li key={item}>{item}</li>)}</ul>
   </div>
   <div className="plp-plans-checkout">{checkout}<small>{t.secure}</small></div>
  </section>
  {!pro && <PaidLandingTracker slug={slug} />}

  <section className="plp-faq" aria-labelledby="plp-faq-title">
   <h2 id="plp-faq-title">{t.faqTitle}</h2>
   {t.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
  </section>

  <section className="plp-final">
   <h2>{t.finalTitle}</h2>
   <div><LandingLink href="#plans" primary className="plp-button" placement={`landing_final_buy_${slug}`}>{t.finalCta} →</LandingLink><LandingLink href={featureMedia.listening.path!} className="plp-text-link" placement={`landing_final_free_${slug}`}>{t.tryFree} →</LandingLink></div>
  </section>

  <footer className="plp-footer"><Link href="/"><SpanishCueBrand variant="compact" /></Link><nav aria-label={locale === 'es' ? 'Recursos, legal y contacto' : 'Resources, legal and contact'}><Link href="/resources">{locale === 'es' ? 'Recursos' : 'Resources'}</Link><Link href="/pricing">{locale === 'es' ? 'Precios' : 'Pricing'}</Link><Link href="/privacy">{locale === 'es' ? 'Privacidad' : 'Privacy'}</Link><Link href="/terms">{locale === 'es' ? 'Términos' : 'Terms'}</Link><Link href="/contact">{locale === 'es' ? 'Contacto' : 'Contact'}</Link></nav></footer>
 </main>;
}
