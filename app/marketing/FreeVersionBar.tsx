'use client';
import Link from 'next/link';
import {useI18n} from '../i18n/LocaleProvider';
import {trackMarketingEvent} from './analytics';

/** Slim bar above every browsing page for visitors without PRO: the site works as usual with the FREE
 *  classes open, and the way to PRO is always one click away. Lessons, 3D worlds and campaign landings
 *  keep their own conversion UI, so the layout leaves the bar out there. */
export default function FreeVersionBar(){
 const {locale}=useI18n();const es=locale==='es';
 return <aside className="mk-free-version" aria-label={es?'Versión gratis de SpanishCue':'SpanishCue free version'}>
  <p><b>{es?'Versión gratis':'Free version'}</b><span>{es?' · Prueba las clases marcadas FREE.':' · Try the lessons marked FREE.'}</span></p>
  <Link href="/pricing" onClick={()=>trackMarketingEvent('cta_click',{cta_type:'buy',placement:'free_version_bar',destination:'/pricing'})}>{es?'Desbloquear todo · US$15,50/mes →':'Unlock everything · US$15.50/month →'}</Link>
 </aside>;
}
