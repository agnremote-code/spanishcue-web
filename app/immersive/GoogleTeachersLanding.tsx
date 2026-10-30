'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CheckoutButton from '../acceso/CheckoutButton';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import {useI18n} from '../i18n/LocaleProvider';
import {trackMarketingEvent} from '../marketing/analytics';
import type {Location} from '../noche-abierta/engine.mjs';
import {campaignLink} from './attribution';
import GuidedTour,{type TourSpot} from './GuidedTour';
import PremiumPanel from './PremiumPanel';
import ProPreview from './ProPreview';
import Showcase from './Showcase';
import {gtCopy} from './google-copy';
import type {ProPreviewFragment,ShowcaseCategory,ShowcaseItem} from './google-showcase';
import {FLAGS,TESTIMONIALS} from './google-testimonials';

const LANDING='google-teachers';

export type FreeGrammarClass={id:number;level:string;title:string;href:string};

export default function GoogleTeachersLanding({pro,signedIn,cafe,spots,level,showcase,previews,freeGrammar}:{freeGrammar:FreeGrammarClass[];pro:boolean;signedIn:boolean;cafe:Location;spots:TourSpot[];level:string;showcase:ShowcaseCategory[];previews:ProPreviewFragment[]}){
 const {locale}=useI18n();const es=locale==='es';const c=gtCopy(es);
 const [search,setSearch]=useState('');
 const [gate,setGate]=useState<string|null>(null);
 const [preview,setPreview]=useState<ProPreviewFragment|null>(null);
 const [sticky,setSticky]=useState(false);
 const heroBuy=useRef<HTMLDivElement>(null);
 const reduced=useRef(false);
 const [autoplay,setAutoplay]=useState(false);
 const demoPath=pro?'/noche-abierta':'/demo/noche-abierta';
 const exploreHref=campaignLink(`${demoPath}?from=${LANDING}&level=${level}`,search);
 useEffect(()=>{
  // Campaign parameters come from the real browser URL after hydration; the server renders plain links.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setSearch(location.search);
  reduced.current=matchMedia('(prefers-reduced-motion:reduce)').matches;
  setAutoplay(!reduced.current);
  // Mobile sticky CTA: shown once the hero checkout has scrolled away, hidden while a checkout block is on screen.
  const buy=heroBuy.current;const blocks=[document.getElementById('pro'),document.getElementById('close')].filter(Boolean) as HTMLElement[];
  const state={heroPassed:false,visible:new Set<Element>()};
  const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.target===buy)state.heroPassed=!e.isIntersecting&&e.boundingClientRect.top<0;else if(e.isIntersecting)state.visible.add(e.target);else state.visible.delete(e.target);}setSticky(state.heroPassed&&state.visible.size===0);});
  if(buy)observer.observe(buy);for(const b of blocks)observer.observe(b);
  return()=>observer.disconnect();
 },[]);
 // One attribution event per purchase placement; the official checkout then fires checkout_start itself.
 const buyClick=(placement:string)=>()=>trackMarketingEvent('cta_click',{cta_type:'buy',placement:`${LANDING}_${placement}`});
 const cta=(placement:string,type='demo')=>()=>trackMarketingEvent('cta_click',{cta_type:type,placement:`${LANDING}_${placement}`});
 const watchTour=()=>{document.getElementById('tour')?.scrollIntoView({behavior:reduced.current?'auto':'smooth',block:'center'});document.querySelector('.gt-tour')?.dispatchEvent(new Event('tour-start'));};
 const toShowcase=()=>document.getElementById('showcase')?.scrollIntoView({behavior:reduced.current?'auto':'smooth',block:'start'});
 function openPreview(category:ShowcaseCategory['key'],item:ShowcaseItem){
  if(item.action==='pro-preview'&&!pro){const fragment=previews.find(p=>p.id===item.id);if(fragment){setPreview(fragment);return;}}
  trackMarketingEvent('lesson_preview_open',{lesson_id:item.id>0?item.id:undefined,lesson_title:item.title,category,access:item.free?'free':'pro',placement:`landing_${LANDING}`});
  if(item.action==='tour')watchTour();
  else if(item.action==='pro'&&!pro)setGate(item.title);
 }
 /** Direct monthly checkout for the nav and sticky CTA; historical trials are not promoted. */
 const buyMonthly=(placement:string,returnTo='/noche-abierta')=>pro?null:<div className="gt-buy gt-buy-one" onClickCapture={buyClick(placement)}><CheckoutButton signedIn={signedIn} returnTo={returnTo} variant="landing" paddleOnly /></div>;
 const both=(placement:string,extra='')=>pro?<Link className="im-primary" href="/noche-abierta">{c.plans.openFull}</Link>:<div className={`gt-buy ${extra}`} onClickCapture={buyClick(placement)}><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" paddleOnly /></div>;

 return <main className="im-landing gt">
  <header className="im-nav"><Link className="im-wordmark" href="/">SPANISHCUE<span> CHOOSE. OPEN. TEACH.</span></Link><nav className="gt-nav-links"><a href="#tour">{c.nav.watch}</a><a href="#showcase">{c.nav.demos}</a><a href="#pro">{c.nav.pricing}</a></nav><div className="gt-nav-buy">{pro?<Link className="gt-nav-cta" href="/noche-abierta">{c.nav.openCity}</Link>:buyMonthly('nav')}</div><LanguageSwitcher /><Link className="gt-nav-account" href={signedIn?'/cuenta':'/ingresar'}>{signedIn?c.nav.account:c.nav.signIn} ↗</Link></header>

  <section className="gt-hero2">
   <div className="gt-hero2-copy">
    <span className="im-eyebrow"><i/> {c.hero.eyebrow}</span>
    <h1>{c.hero.h1a}<em>{c.hero.h1b}</em></h1>
    <p className="gt-lead">{c.hero.lead}</p>
    <p>{c.hero.p}</p>
    <div ref={heroBuy} id="buy" className="gt-buy gt-buy-hero" onClickCapture={buyClick('hero')}>
     {!pro?<CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" />:<Link className="im-primary" href="/noche-abierta">{c.hero.openFull}</Link>}
    </div>
    <div className="im-reassurance">{c.hero.reassure.map(r=><span key={r}>✓ {r}</span>)}</div>
   </div>
   <div id="tour" className="gt-hero2-stage"><GuidedTour cafe={cafe} spots={spots} level={level} signedIn={signedIn} pro={pro} exploreHref={exploreHref} autoplay={autoplay} onExploreMore={toShowcase} onBuyClick={buyClick('tour_end')} onUnlockClick={buyClick('tour_fullscreen')} /></div>
  </section>

  <section className="gt-free" aria-labelledby="gt-free-h">
   <span className="im-eyebrow"><i/> {c.freeGrammar.eyebrow}</span>
   <h2 id="gt-free-h">{c.freeGrammar.h2}</h2>
   <p>{c.freeGrammar.p}</p>
   <ul>{freeGrammar.map(g=><li key={g.id}><Link href={campaignLink(g.href,search)} onClick={()=>trackMarketingEvent('lesson_preview_open',{lesson_id:g.id,lesson_title:g.title,category:'grammar',access:'free',placement:`landing_${LANDING}_free_grammar`})}><b>{g.level}</b><span>{g.title}</span><em>{c.freeGrammar.open}</em></Link></li>)}</ul>
  </section>

  <section className="gt-tiers" aria-label={c.tiers.aria}>
   <div><b>{c.tiers.a[0]}</b><span>{c.tiers.a[1]}</span></div>
   <div><b>{c.tiers.b[0]}</b><span>{c.tiers.b[1]}</span><Link href={exploreHref} onClick={cta('tiers')}>{c.tiers.b[2]}</Link></div>
   <div><b>{c.tiers.c[0]}</b><span>{c.tiers.c[1]}</span><a href="#pro" onClick={cta('tiers','plans')}>{c.tiers.c[2]}</a></div>
  </section>

  <Showcase categories={showcase} pro={pro} onPreview={openPreview} buy={both('showcase','gt-buy-row')} />

  <section className="gt-how" aria-label={c.how.eyebrow}>
   <span className="im-eyebrow">{c.how.eyebrow}</span>
   <h2>{c.how.h2}</h2>
   <ol className="gt-how-steps">
    {c.how.steps.map((s,i)=><li key={s.b}><Image src={['/lp/fabrica.webp','/lp/noche-3d.webp','/lp/autoestudio.webp'][i]} alt={s.alt} width={1280} height={800} loading="lazy" sizes="(max-width: 900px) 100vw, 420px" /><b>{s.b}</b><h3>{s.h3}</h3><p>{s.p}</p></li>)}
   </ol>
   <p className="gt-how-note">{c.how.note}</p>
  </section>

  <section id="pro" className="gt-pro">
   <div>
    <span className="im-eyebrow">{c.plans.eyebrow}</span>
    <h2>{c.plans.h2}</h2>
    <ul className="gt-compare">{c.plans.rows.map(([b,s])=><li key={b}><b>{b}</b><span>{s}</span></li>)}</ul>
    <p className="gt-terms">{c.plans.terms}</p>
   </div>
   {!pro?<div className="gt-checkout" onClickCapture={buyClick('plans')}><CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" /></div>:<div className="gt-checkout gt-checkout-pro"><p>{c.plans.havePro}</p><Link className="im-primary" href="/noche-abierta">{c.plans.openFull}</Link></div>}
  </section>

  <section className="gt-faq">
   <h2>{c.faq.h2}</h2>
   <dl>{c.faq.items.map(([q,a])=><div key={q}><dt>{q}</dt><dd>{a}</dd></div>)}</dl>
  </section>

  {TESTIMONIALS.length>0&&<section className="gt-voices" aria-label={c.voices.aria}>
   <span className="im-eyebrow">{c.voices.eyebrow}</span>
   <div className="gt-voices-grid">{TESTIMONIALS.map(t=><figure key={t.name}><blockquote lang={es?'es':'en'}>{es?t.quoteEs:t.quote}</blockquote><figcaption><Image className="gt-voice-photo" src={t.photo} alt="" width={48} height={48} loading="lazy" /><span><b>{t.name} <i className={`gt-flag gt-flag-${t.flag}`} role="img" aria-label={FLAGS[t.flag]} title={FLAGS[t.flag]} /></b>{es?t.roleEs:t.role}</span></figcaption></figure>)}</div>
   <p className="gt-voices-note">{c.voices.note}</p>
  </section>}

  <section id="close" className="gt-close">
   <h2>{c.close.h2}</h2>
   <p>{c.close.p}</p>
   {both('close','gt-buy-row')}
  </section>

  <footer className="im-footer"><span>{c.footer.tag}</span><nav><Link href="/privacy">{c.footer.privacy}</Link><Link href="/terms">{c.footer.terms}</Link><Link href="/contact">{c.footer.contact}</Link></nav></footer>
  <div className={`gt-sticky${sticky?' show':''}`} aria-hidden={!sticky} inert={!sticky}>{buyMonthly('sticky')}<button type="button" onClick={()=>{cta('sticky')();watchTour();}}>{c.sticky}</button></div>
  {gate&&!pro&&<PremiumPanel area={gate} signedIn={signedIn} onClose={()=>setGate(null)}/>}
  {preview&&!pro&&<ProPreview fragment={preview} signedIn={signedIn} onClose={()=>setPreview(null)} onBuyClick={buyClick('pro_preview')} />}
 </main>;
}
