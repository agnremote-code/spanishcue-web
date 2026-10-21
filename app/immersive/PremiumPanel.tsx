'use client';
import {useEffect,useRef} from 'react';
import CheckoutButton from '../acceso/CheckoutButton';
import {useI18n} from '../i18n/LocaleProvider';
import {trackMarketingEvent} from '../marketing/analytics';
import {CONSENT_EVENT,consentFor} from '../privacy/consent';

export default function PremiumPanel({area,signedIn,onClose,returnTo='/noche-abierta'}:{area:string;signedIn:boolean;onClose:()=>void;returnTo?:string}){
 const dialog=useRef<HTMLDialogElement>(null);
 const {locale}=useI18n();const es=locale==='es';
 useEffect(()=>{
  const previous=document.activeElement as HTMLElement|null;
  dialog.current?.showModal();let tracked=false;
  const track=()=>{if(!tracked&&consentFor('analytics')){tracked=true;trackMarketingEvent('premium_gate_view',{zone:area,placement:'city_pass'});}};
  track();window.addEventListener(CONSENT_EVENT,track);
  return()=>{window.removeEventListener(CONSENT_EVENT,track);previous?.focus?.();};
 },[area]);
 return <dialog ref={dialog} className="im-pass" onCancel={e=>{e.preventDefault();onClose();}} aria-labelledby="im-pass-title">
  <button className="im-close" onClick={onClose} aria-label={es?'Cerrar y seguir gratis':'Close and keep exploring free'}>×</button>
  <span className="im-eyebrow">SPANISHCUE · CITY PASS</span>
  <p className="im-pass-place">🔒 {area}</p><h2 id="im-pass-title">{es?'Compra PRO para seguir.':'Buy PRO to keep going.'}</h2>
  <p className="im-pass-price">{es?'PRO · US$15,50 al mes':'PRO · US$15.50 a month'}</p>
  <p>{es?'Desbloquea los ocho barrios de Noche abierta, el hospital entero y toda la biblioteca de clases para enseñar español.':'Unlock all eight Noche abierta districts, the whole hospital and the full library of ready-to-teach Spanish lessons.'}</p>
  <ul><li>{es?'Mundos interactivos y conversación A1–C2':'Interactive worlds and A1–C2 conversation'}</li><li>{es?'Clases de gramática, escucha y vocabulario':'Grammar, listening and vocabulary lessons'}</li><li>{es?'Actividades para compartir pantalla en clase':'Activities to share on screen in class'}</li></ul>
  <p className="im-free-line">{es?'Demo gratuita: US$0 · Sin tarjeta':'Free demo: US$0 · No card needed'}</p>
  <p className="im-terms">{es?'Desbloquea PRO por US$15.50/mes con tarjeta o elige PayPal (US$15/mes). Sin obligación anual; cancela antes de la próxima renovación.':'Unlock PRO for US$15.50/month by card or choose PayPal (US$15/month). No annual commitment; cancel before renewal.'}</p>
  <CheckoutButton signedIn={signedIn} returnTo={returnTo} variant="landing" onPaddleOverlayChange={open=>{
   const panel=dialog.current;if(!panel)return;
   if(open)panel.close();else if(!panel.open)panel.showModal();
  }} />
  <button className="im-keep" onClick={onClose}>{es?'Seguir explorando gratis':'Keep exploring free'} →</button>
 </dialog>;
}
