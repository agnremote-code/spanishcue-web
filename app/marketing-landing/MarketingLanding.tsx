import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { freeLessonIds, isFreeLesson, localLessonPath, fullAccessFromHeaders, signedInFromHeaders } from '../access-policy';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { localeFromHeaders, translateCategory } from '../i18n/messages';
import { lessons } from '../lesson-catalog';
import { SpanishCueBrand } from '../SpanishCueBrand';
import type { LandingConfig } from './config';
import { campaignCopy, campaignHero } from './campaign-copy';
import LandingConversion, { LandingLink } from './LandingConversion';

export default async function MarketingLanding({ config }: { config: LandingConfig }) {
 const h = await headers();
 const locale = localeFromHeaders(h);
 const pro = fullAccessFromHeaders(h);
 const signedIn = signedInFromHeaders(h);
 const c = campaignCopy[locale];
 const original = config.copy[locale];
 const hero = campaignHero(config.slug, locale);
 const selected = config.lessonIds.map(id => lessons.find(l => l.id === id)).filter((l): l is (typeof lessons)[number] => Boolean(l)).map(lesson => ({ lesson, path:localLessonPath(lesson) })).filter((item): item is { lesson:(typeof lessons)[number]; path:string } => Boolean(item.path)).slice(0,4);
 const firstFree = selected.find(({lesson}) => isFreeLesson(lesson.id)) ?? lessons.map(lesson => ({lesson,path:localLessonPath(lesson)})).find(item => item.path && isFreeLesson(item.lesson.id));
 const freePath = firstFree?.path || '/el-hotel-de-lo-imposible';
 const shared = { locale, pro, signedIn, slug:config.slug };
 const structuredData = { '@context':'https://schema.org', '@type':'WebPage', name:original.title, description:original.lead, url:`https://spanishcue.com/${config.slug}`, isPartOf:{'@type':'WebSite',name:'SPANISHCUE',url:'https://spanishcue.com'}, audience:{'@type':'EducationalAudience',educationalRole:'teacher'} };
 return <main className="landing-page campaign-page" id="landing-main">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  <a className="skip-link" href="#landing-title">{locale === 'es' ? 'Ir al contenido' : 'Skip to content'}</a>
  <header className="landing-nav"><Link href="/" aria-label="SPANISHCUE"><SpanishCueBrand variant="compact" /></Link><nav aria-label={locale === 'es' ? 'Cuenta e idioma' : 'Account and language'}><LanguageSwitcher className="landing-language" /><Link href={signedIn ? '/cuenta' : '/ingresar'}>{signedIn ? c.login : c.loginVisitor}</Link></nav></header>
  <section className="landing-hero" aria-labelledby="landing-title">
   <div className="landing-hero-copy"><span className="lp-eyebrow">{c.teacher} · {original.kicker}</span><h1 id="landing-title">{hero.title}</h1><p className="landing-mechanism">{c.mechanism}</p><p>{hero.lead}</p><ul className="landing-pains">{c.pains.map(p => <li key={p}>{p}</li>)}</ul><div className="landing-actions"><LandingLink href={freePath} primary placement={`landing_hero_${config.slug}`}>{c.primary}<b aria-hidden="true">↗</b></LandingLink></div><small>{original.proof}</small><LandingConversion {...shared} hero /></div>
   <div className={`landing-human landing-human-${hero.image}`}><Image className="landing-human-photo" src={`/brand/campaign/${hero.image}.webp`} alt="" width={1536} height={1024} fetchPriority="high" sizes="(max-width: 760px) 100vw, 50vw" />
    <div className="landing-human-tag">{locale === 'es' ? 'Tu clase empieza aquí.' : 'Your class starts here.'}</div>
    {firstFree && <LandingLink href={freePath} className="landing-product-float" placement={`landing_visual_${config.slug}`}><Image src={firstFree.lesson.image} alt={firstFree.lesson.title} width={720} height={450} sizes="(max-width: 760px) 70vw, 300px" /><span><small>{c.free} · {firstFree.lesson.displayLevel || firstFree.lesson.level}</small><b>{firstFree.lesson.title}</b><em>{c.open} ↗</em></span></LandingLink>}
   </div>
  </section>
  <section className="landing-products" id="real-lessons" aria-labelledby="landing-product-title"><header><span>{c.proof}</span><h2 id="landing-product-title">{c.proofTitle}</h2><p>{original.productCopy}</p></header><div className="landing-lesson-grid">{selected.map(({lesson,path}) => {
   const free = isFreeLesson(lesson.id);
   return <article key={lesson.id}><Image src={lesson.image} alt={lesson.title} width={720} height={450} loading="lazy" sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 25vw" /><div><span className={free ? 'free' : 'pro'}>{free ? c.free : c.pro}</span><small>{lesson.displayLevel || lesson.level} · {translateCategory(locale,lesson.category)}</small><h3>{lesson.title}</h3><p>{lesson.subtitle}</p><LandingLink href={free || pro ? path : `/acceso?returnTo=${encodeURIComponent(path)}`} placement={`landing_lesson_${config.slug}`}>{free || pro ? c.open : c.viewPro} ↗</LandingLink></div></article>;
  })}</div></section>
  <section className="landing-stats" aria-label={locale === 'es' ? 'Datos de la biblioteca' : 'Library facts'}>{[lessons.length, new Set(lessons.map(l => l.category)).size, 'A1–C2', freeLessonIds.length].map((v,i) => <div key={i}><b>{v}</b><span>{c.stats[i]}</span></div>)}</section>
  <section className="landing-comparison"><h2>{c.beforeTitle}</h2><div className="landing-comparison-grid"><div className="landing-before"><span className="lp-eyebrow">{c.before}</span><ol>{c.beforeItems.map(item => <li key={item}>{item}</li>)}</ol></div><div className="landing-after"><span className="lp-eyebrow">{c.after}</span><ol>{c.afterItems.map(item => <li key={item}>{item}</li>)}</ol><LandingLink href={freePath} placement={`landing_comparison_${config.slug}`}>{c.primary} ↗</LandingLink></div></div></section>
  <section className="landing-method"><header><span>SPANISHCUE</span><h2>{c.mechanism}</h2></header><div>{c.steps.map(([title,description],i) => <article key={title}><b>0{i+1}</b><h3>{title}</h3><p>{description}</p></article>)}</div></section>
  <section className="landing-not-pdf"><div><span className="lp-eyebrow">{c.pdf}</span><h2>{c.pdfCopy}</h2><p>{c.formatsNote}</p><ul>{c.formats.map(f => <li key={f}>{f}</li>)}</ul></div><div className="landing-format-proof"><div className="landing-worksheet" aria-label={locale === 'es' ? 'Ejemplo ilustrativo de ficha estática' : 'Illustrative static worksheet'}><small>{c.static}</small><p>1. Yo ______ español.</p><p>2. Tú ______ español.</p><p>3. Ella ______ español.</p></div>{firstFree && <LandingLink href={freePath} placement={`landing_interactive_${config.slug}`}><Image src={firstFree.lesson.image} alt={firstFree.lesson.title} width={720} height={450} loading="lazy" sizes="(max-width:760px) 85vw, 450px" /><strong>{c.interactive} ↗</strong></LandingLink>}</div></section>
  <section className="landing-creator"><span className="lp-eyebrow">{locale === 'es' ? 'DE PROFE A PROFE' : 'FROM ONE TEACHER TO ANOTHER'}</span><h2>{c.made}</h2><p>{c.madeCopy}</p></section>
  <LandingConversion {...shared} />
  <section className="landing-final"><span>{c.mechanism}</span><h2>{locale === 'es' ? 'La próxima clase puede empezar aquí.' : 'Your next class can start here.'}</h2><p>{original.finalCopy}</p><div className="landing-actions"><LandingLink href={freePath} primary placement={`landing_final_${config.slug}`}>{c.primary} ↗</LandingLink></div></section>
  <footer className="landing-footer"><Link href="/"><SpanishCueBrand variant="compact" /></Link><nav aria-label={locale === 'es' ? 'Legal y contacto' : 'Legal and contact'}><Link href="/pricing">{locale === 'es' ? 'Precios' : 'Pricing'}</Link><Link href="/privacy">{locale === 'es' ? 'Privacidad' : 'Privacy'}</Link><Link href="/terms">{locale === 'es' ? 'Términos' : 'Terms'}</Link><Link href="/contact">{locale === 'es' ? 'Contacto' : 'Contact'}</Link></nav></footer>
 </main>;
}
