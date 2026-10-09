'use client';
import Link from 'next/link';
import {useState} from 'react';
import {useI18n} from '../i18n/LocaleProvider';
import PremiumPanel from './PremiumPanel';
export default function ProDiscovery({signedIn}:{signedIn:boolean}){
 const {locale}=useI18n();const es=locale==='es';const [open,setOpen]=useState(false);
 return <aside className="im-discovery" aria-label={es?'Descubre los mundos de SpanishCue':'Discover SpanishCue worlds'}><div><span className="im-eyebrow">NOCHE ABIERTA</span><strong>{es?'Tu próxima conversación tiene una ciudad entera.':'Your next conversation has a whole city waiting.'}</strong><p>{es?'Explora el centro gratis o descubre los mundos y clases de PRO.':'Explore the centre free, or discover the worlds and lessons in PRO.'}</p></div><div><Link className="im-primary" href="/demo/noche-abierta">{es?'Entrar gratis':'Enter free'} ↗</Link><button className="im-quiet" onClick={()=>setOpen(true)}>{es?'Descubrir PRO':'Discover PRO'}</button></div>{open&&<PremiumPanel area={es?'Clases y mundos interactivos':'Lessons and interactive worlds'} signedIn={signedIn} onClose={()=>setOpen(false)}/>}</aside>;
}
