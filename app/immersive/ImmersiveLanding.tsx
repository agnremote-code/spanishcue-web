'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {useI18n} from '../i18n/LocaleProvider';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import {campaignLink} from './attribution';
import PremiumPanel from './PremiumPanel';

export default function ImmersiveLanding({pro,signedIn}:{pro:boolean;signedIn:boolean}){
 const {locale}=useI18n();const es=locale==='es';const video=useRef<HTMLVideoElement>(null);
 const [entry,setEntry]=useState(pro?'/noche-abierta':'/demo/noche-abierta');const [playing,setPlaying]=useState(false);const [gate,setGate]=useState(false);
 useEffect(()=>{
  // Sync campaign parameters from the actual browser URL after hydration.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setEntry(campaignLink(pro?'/noche-abierta':'/demo/noche-abierta',location.search));
  const clip=video.current;if(!clip)return;
  const connection=(navigator as Navigator&{connection?:{saveData?:boolean}}).connection;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches||connection?.saveData)return;
  const observer=new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting){clip.src='/brand/campaign/noche-demo.mp4';void clip.play().then(()=>setPlaying(true)).catch(()=>{});observer.disconnect();}},{rootMargin:'100px'});observer.observe(clip);return()=>observer.disconnect();
 },[pro]);
 return <main className="im-landing">
  <header className="im-nav"><Link className="im-wordmark" href="/">SPANISHCUE<span> CHOOSE. OPEN. TEACH.</span></Link><LanguageSwitcher /><Link href={signedIn?'/cuenta':'/ingresar'}>{es?'Mi cuenta':'My account'} ↗</Link></header>
  <section className="im-hero">
   <div className="im-hero-copy"><span className="im-eyebrow"><i/> {es?'UNA CLASE QUE PUEDES RECORRER':'A SPANISH LESSON YOU CAN WALK INTO'}</span>
    <h1>{es?<>Menos explicar.<br/>Más <em>vivirlo.</em></>:<>Less explaining.<br/>More <em>living it.</em></>}</h1>
    <p>{es?'Lleva a tus alumnos a una ciudad donde cada esquina abre una conversación. Entra y pruébala ahora.':'Take your students into a city where every corner starts a conversation. Step inside and try it for yourself.'}</p>
    <Link className="im-primary im-enter" href={entry}>{pro?(es?'ABRIR LA CIUDAD COMPLETA':'OPEN THE FULL CITY'):(es?'ENTRAR EN LA CIUDAD 3D — GRATIS':'ENTER THE 3D CITY — FREE')} <span>↗</span></Link>
    <div className="im-reassurance"><span>✓ {es?'Sin tarjeta':'No card'}</span><span>✓ {es?'Sin registro':'No sign-up'}</span><span>✓ {es?'Una zona completa':'One complete district'}</span></div>
    <div className="im-hero-metrics"><div><strong>10</strong><span>{es?'lugares abiertos':'open venues'}</span></div><div><strong>A1—C2</strong><span>{es?'conversaciones reales':'real conversations'}</span></div><div><strong>US$0</strong><span>{es?'para entrar':'to step inside'}</span></div></div>
   </div>
   <div className="im-film"><div className="im-film-top"><span>● NOCHE ABIERTA</span><span>{es?'IMÁGENES DEL JUEGO':'REAL GAMEPLAY'}</span></div>
    <video ref={video} muted playsInline loop preload="none" poster="/brand/campaign/noche-demo-poster.webp" aria-label={es?'Recorrido real por Noche Abierta':'Real Noche Abierta gameplay'} onPause={()=>setPlaying(false)} onPlay={()=>setPlaying(true)} />
    <div className="im-film-caption"><span>01 / {es?'TU PRIMERA NOCHE':'YOUR FIRST NIGHT'}</span><button onClick={()=>{const clip=video.current;if(!clip)return;if(playing)clip.pause();else{if(!clip.getAttribute('src'))clip.src='/brand/campaign/noche-demo.mp4';void clip.play().catch(()=>{});}}}>{playing?(es?'Pausar':'Pause'):(es?'Ver video':'Play video')} {playing?'Ⅱ':'▷'}</button></div>
    <div className="im-film-stamp">{es?'ESTO ES UNA CLASE.':'THIS IS A LESSON.'}<br/><b>{es?'Sí, de verdad.':'Yes, really.'}</b></div>
   </div>
  </section>
  <section className="im-how"><span className="im-eyebrow">{es?'DE MIRAR A CONVERSAR':'FROM SCROLLING TO SPEAKING'}</span><h2>{es?'Abre una puerta. Abre una conversación.':'Open a door. Open a conversation.'}</h2><div className="im-how-grid">{(es?[
   ['01','Explora a tu ritmo','Camina por el centro, entra en el café o descubre el museo. Tú eliges la ruta.'],['02','Usa tu español','Elige una respuesta a una situación real. Después, habla de tu propia vida.'],['03','Llévalo a tu clase','Prueba seis niveles y las notas para profesores. Si te convence, descubre todo PRO.']
  ]:[['01','Explore at your pace','Walk through the centre, stop at the café or discover the museum. You choose the route.'],['02','Use your Spanish','Choose a response to a real situation. Then talk about your own life.'],['03','Bring it to your class','Try six levels and teacher notes. If it fits your teaching, discover everything in PRO.']]).map(([n,h,p])=><article key={n}><span>{n} /</span><h3>{h}</h3><p>{p}</p></article>)}</div></section>
  <section className="im-offer"><div><span className="im-eyebrow">{es?'PRIMERO, PRUÉBALO':'TRY IT FIRST'}</span><h2>{es?'Tu primera noche, gratis.':'Your first night is on us.'}</h2><p>{es?'La demo no caduca. Explora el centro sin tarjeta ni cuenta; PRO amplía tu recorrido y tu biblioteca.':'The demo has no time limit. Explore the centre without a card or an account; PRO opens up your city and your lesson library.'}</p><Link className="im-primary" href={entry}>{es?'Explorar gratis':'Explore for free'} →</Link></div><div className="im-price-list"><div><span>{es?'Demo del centro':'City centre demo'}</span><strong>US$0</strong><small>{es?'Sin tarjeta ni registro':'No card. No sign-up.'}</small></div><div><span>{es?'Prueba completa':'Full trial'}</span><strong>US$2 <small>/ {es?'1 día':'1 day'}</small></strong><small>{es?'Después, US$15.50/mes. Renovación automática.':'Then US$15.50/month. Renews automatically.'}</small></div><div><span>{es?'Suscripción directa':'Subscribe directly'}</span><strong>US$15.50 <small>/ {es?'mes':'month'}</small></strong><small>{es?'Cancela antes de la próxima renovación.':'Cancel before the next renewal.'}</small></div>{!pro&&<button className="im-quiet" onClick={()=>setGate(true)}>{es?'Ver todo lo que incluye PRO':'See everything in PRO'} ↗</button>}</div></section>
  <footer className="im-footer"><span>SPANISHCUE · {es?'Creado para enseñar español.':'Made for teaching Spanish.'}</span><nav><Link href="/privacy">{es?'Privacidad':'Privacy'}</Link><Link href="/terms">{es?'Términos':'Terms'}</Link><Link href="/contact">{es?'Contacto':'Contact'}</Link></nav></footer>
  {gate&&!pro&&<PremiumPanel area="SPANISHCUE PRO" signedIn={signedIn} onClose={()=>setGate(false)}/>}
 </main>;
}
