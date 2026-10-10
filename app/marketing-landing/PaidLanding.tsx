import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { fullAccessFromHeaders, signedInFromHeaders } from '../access-policy';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { localeFromHeaders } from '../i18n/messages';
import { SpanishCueBrand } from '../SpanishCueBrand';
import CheckoutButton from '../acceso/CheckoutButton';
import { canonicalUrl } from '../seo';
import type { LandingConfig } from './config';
import { campaignCopy } from './campaign-copy';
import { LandingLink } from './LandingConversion';
import PaidLandingTracker from './PaidLandingTracker';
import { featureMedia, paidCopy, type FeatureKey, type PaidLandingSlug } from './paid-copy';

/** Fill-in-the-blank lines for the "worksheet" side of the contrast block. */
const worksheetLines = ['1. Yo ______ (ir) al mercado.', '2. Ella ______ (tener) dos hermanos.', '3. Nosotros ______ (comer) a las dos.'];

/**
 * Paid-traffic landing for Meta/Zeely campaigns: the real product leads, both
 * Paddle plans (1-day US$2 trial and US$15.50/month) sit in the hero and in the
 * plans section, PayPal is the secondary option, and nothing pops up. Every
 * image has fixed dimensions and the checkout reserves its final layout, so
 * nothing shifts while the page loads.
 */
export default async function PaidLanding({ config, slug, pathname }: { config: LandingConfig; slug: PaidLandingSlug; pathname: string }) {
 const h = await headers();
 const locale = localeFromHeaders(h);
 const pro = fullAccessFromHeaders(h);
 const signedIn = signedInFromHeaders(h);
 const t = paidCopy[locale];
 const c = campaignCopy[locale];
 const original = config.copy[locale];
 const features: FeatureKey[] = ['worlds', 'forest', 'map', 'lessons', 'listening', 'homework'];
 const structuredData = { '@context':'https://schema.org', '@type':'WebPage', name:original.title, description:original.lead, url:canonicalUrl(pathname), isPartOf:{'@type':'WebSite',name:'SPANISHCUE',url:'https://spanishcue.com'}, audience:{'@type':'EducationalAudience',educationalRole:'teacher'} };
 const checkout = pro
  ? <div className="plp-pro"><strong>{t.proReady}</strong><Link className="plp-button" href="/#library-results">{t.openLibrary} →</Link></div>
  : <CheckoutButton signedIn={signedIn} returnTo="/" variant="landing" />;
 const freeLesson = featureMedia.listening.path!;
 return <main className="plp" id="landing-main">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  <a className="skip-link" href="#landing-title">{locale === 'es' ? 'Ir al contenido' : 'Skip to content'}</a>

  <div className="plp-top">
   <header className="plp-nav"><Link href="/" aria-label="SPANISHCUE"><SpanishCueBrand variant="compact" tone="light" /></Link><nav aria-label={locale === 'es' ? 'Cuenta e idioma' : 'Account and language'}><LanguageSwitcher className="landing-language" /><Link href={signedIn ? '/cuenta' : '/ingresar'}>{signedIn ? c.login : c.loginVisitor}</Link></nav></header>

   <section className="plp-hero" aria-labelledby="landing-title">
    <div className="plp-hero-copy">
     <span className="plp-eyebrow">{t.eyebrow}</span>
     <h1 id="landing-title">{t.titleLead} <span className="plp-accent">{t.titleAccent}</span></h1>
     <p className="plp-lead">{t.lead[slug]}</p>
     <ul className="plp-points">{t.heroPoints.map(point => <li key={point}>{point}</li>)}</ul>
     <div className="plp-hero-checkout">{checkout}</div>
     <LandingLink href={freeLesson} className="plp-text-link" placement={`landing_hero_free_${slug}`}>{t.tryFree} →</LandingLink>
     <figure className="plp-hero-inline"><div className="plp-frame"><Image src={featureMedia.worlds.image} alt={t.features.worlds[0]} width={1280} height={800} fetchPriority="high" sizes="(max-width: 600px) 100vw, 560px" /></div><figcaption><b>{t.shots.worlds}</b></figcaption></figure>
     <div className="plp-hero-strip" aria-hidden="true">
      {(['forest', 'map'] as const).map(key => <figure key={key}><div className="plp-frame"><Image src={featureMedia[key].image} alt="" width={1280} height={800} loading="lazy" sizes="50vw" /></div><figcaption>{t.shots[key]}</figcaption></figure>)}
     </div>
    </div>
    <div className="plp-collage">
     <figure className="plp-collage-main">
      <div className="plp-frame"><div className="plp-frame-bar" aria-hidden="true"><i /><i /><i /><span>{featureMedia.worlds.url}</span></div><Image src={featureMedia.worlds.image} alt={t.features.worlds[0]} width={1280} height={800} fetchPriority="high" sizes="(max-width: 1023px) 1px, 640px" /></div>
      <figcaption className="plp-chip">{t.shots.worlds}</figcaption>
     </figure>
     {(['forest', 'map'] as const).map(key => <figure key={key} className={`plp-collage-side plp-collage-${key}`}>
      <div className="plp-frame"><Image src={featureMedia[key].image} alt={t.features[key][0]} width={1280} height={800} loading="lazy" sizes="(max-width: 1023px) 1px, 320px" /></div>
      <figcaption className="plp-chip">{t.shots[key]}</figcaption>
     </figure>)}
     <p className="plp-real">{t.realNote}</p>
    </div>
   </section>
  </div>

  <section className="plp-flow" aria-labelledby="plp-flow-title">
   <h2 id="plp-flow-title">{t.flowTitle}</h2>
   <ol>{t.flow.map(([title, description], i) => <li key={title}><b>{i + 1}</b><strong>{title}</strong><span>{description}</span></li>)}</ol>
  </section>

  <section className="plp-contrast" aria-labelledby="plp-contrast-title">
   <header className="plp-section-head"><span className="plp-eyebrow">{t.contrastKicker}</span><h2 id="plp-contrast-title">{t.contrastTitle}</h2><p>{t.contrastCopy}</p></header>
   <div className="plp-contrast-grid">
    <div className="plp-worksheet"><span className="plp-contrast-label">{t.contrastBefore}</span><div className="plp-sheet" aria-hidden="true">{worksheetLines.map(line => <p key={line}>{line}</p>)}</div></div>
    <div className="plp-experience"><span className="plp-contrast-label">{t.contrastAfter}</span><div className="plp-frame"><Image src={featureMedia.listening.image} alt={t.features.listening[0]} width={1280} height={800} loading="lazy" sizes="(max-width: 767px) 100vw, 560px" /></div></div>
   </div>
  </section>

  <section className="plp-features" aria-labelledby="plp-features-title">
   <header className="plp-section-head"><span className="plp-eyebrow">{t.featuresKicker}</span><h2 id="plp-features-title">{t.featuresTitle}</h2></header>
   <div className="plp-bento">{features.map(key => {
    const media = featureMedia[key];
    const [title, description] = t.features[key];
    return <article key={key} className={`plp-tile plp-tile-${key}`}>
     <div className="plp-tile-shot"><Image src={media.image} alt={title} width={1280} height={800} loading="lazy" sizes={key === 'worlds' ? '(max-width: 900px) 100vw, 760px' : '(max-width: 900px) 100vw, 400px'} /></div>
     <div className="plp-tile-copy"><span className={media.path ? 'plp-tag plp-tag-free' : 'plp-tag'}>{media.path ? t.freeTag : t.proTag}</span><h3>{title}</h3><p>{description}</p>{media.path && <LandingLink href={media.path} placement={`landing_feature_${key}_${slug}`}>{t.openLesson} →</LandingLink>}</div>
    </article>;
   })}</div>
  </section>

  <section className="plp-moments" aria-labelledby="plp-moments-title">
   <div className="plp-moments-photo"><Image src="/brand/campaign/free-lesson.webp" alt="" width={1536} height={1024} loading="lazy" sizes="(max-width: 900px) 100vw, 520px" /></div>
   <div className="plp-moments-copy">
    <h2 id="plp-moments-title">{t.momentsTitle}</h2>
    <ul>{t.moments.map(moment => <li key={moment}>{moment}</li>)}</ul>
    <p>{t.howNote}</p>
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

  <section className="plp-faq" aria-labelledby="plp-faq-title">
   <h2 id="plp-faq-title">{t.faqTitle}</h2>
   {t.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
  </section>

  <section className="plp-final">
   <h2>{t.finalTitle}</h2>
   <div><LandingLink href="#plans" primary className="plp-button plp-button-accent" placement={`landing_final_buy_${slug}`}>{t.finalCta} →</LandingLink><LandingLink href={freeLesson} className="plp-text-link" placement={`landing_final_free_${slug}`}>{t.tryFree} →</LandingLink></div>
  </section>

  <footer className="plp-footer"><Link href="/"><SpanishCueBrand variant="compact" /></Link><nav aria-label={locale === 'es' ? 'Recursos, legal y contacto' : 'Resources, legal and contact'}><Link href="/resources">{locale === 'es' ? 'Recursos' : 'Resources'}</Link><Link href="/pricing">{locale === 'es' ? 'Precios' : 'Pricing'}</Link><Link href="/privacy">{locale === 'es' ? 'Privacidad' : 'Privacy'}</Link><Link href="/terms">{locale === 'es' ? 'Términos' : 'Terms'}</Link><Link href="/contact">{locale === 'es' ? 'Contacto' : 'Contact'}</Link></nav></footer>

  {!pro && <>
   <div className="plp-sticky" id="plp-sticky" data-show="false"><LandingLink href="#plans" primary className="plp-sticky-link" placement={`landing_sticky_${slug}`}><strong>{t.sticky}</strong><small>{t.stickyNote}</small></LandingLink></div>
   <PaidLandingTracker slug={slug} />
  </>}
 </main>;
}
