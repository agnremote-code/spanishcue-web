'use client';
import {useEffect,useRef} from 'react';
import CheckoutButton from '../acceso/CheckoutButton';
import {useI18n} from '../i18n/LocaleProvider';
import {trackMarketingEvent} from '../marketing/analytics';
import {CONSENT_EVENT,consentFor} from '../privacy/consent';

export default function PremiumPanel({area,signedIn,onClose}:{area:string;signedIn:boolean;onClose:()=>void}){
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
  <p className="im-pass-place">{area}</p><h2 id="im-pass-title">{es?'Tu próxima parada empieza aquí.':'Your next stop starts here.'}</h2>
  <p>{es?'Desbloquea los ocho barrios, la ciudad completa y la biblioteca de clases para enseñar español.':'Unlock all eight districts, the full city and a library of ready-to-teach Spanish lessons.'}</p>
  <ul><li>{es?'Mundos interactivos y conversación A1–C2':'Interactive worlds and A1–C2 conversation'}</li><li>{es?'Clases de gramática, escucha y vocabulario':'Grammar, listening and vocabulary lessons'}</li><li>{es?'Actividades para compartir pantalla en clase':'Activities to share on screen in class'}</li></ul>
  <p className="im-free-line">{es?'Demo gratuita: US$0 · Sin tarjeta':'Free demo: US$0 · No card needed'}</p>
  <p className="im-terms">{es?'Prueba completa: US$2 por un día. Después se renueva a US$15.50/mes. También puedes suscribirte directamente por US$15.50/mes. Cancela antes de la renovación para evitar el siguiente cargo.':'Full trial: US$2 for one day, then renews at US$15.50/month. Or subscribe directly for US$15.50/month. Cancel before renewal to avoid the next charge.'}</p>
  <CheckoutButton signedIn={signedIn} returnTo="/noche-abierta" variant="landing" onPaddleOverlayChange={open=>{
   const panel=dialog.current;if(!panel)return;
   if(open)panel.close();else if(!panel.open)panel.showModal();
  }} />
  <button className="im-keep" onClick={onClose}>{es?'Seguir explorando gratis':'Keep exploring free'} →</button>
 </dialog>;
}
