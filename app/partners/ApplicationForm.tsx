'use client';
import {useRef,useState,type FormEvent} from 'react';
import {audiences} from './service';
import {newPartnerRequestKey} from './request-key';
export default function ApplicationForm() {
 const [state,setState]=useState<'idle'|'sending'|'success'|'error'>('idle'),[error,setError]=useState('');
 const key=useRef(''),pending=useRef(false);
 async function submit(event:FormEvent<HTMLFormElement>) {
 event.preventDefault();if(pending.current)return;pending.current=true;const data=new FormData(event.currentTarget);key.current ||=newPartnerRequestKey();setState('sending');setError('');
 try{const r=await fetch('/api/partners/apply',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...Object.fromEntries(data),consent:data.get('consent')==='on',requestKey:key.current})});const v=await r.json() as {ok?:boolean;error?:string};if(!r.ok||v.ok!==true)throw new Error(v.error??'No pudimos guardar tu solicitud.');setState('success');}
 catch(e){setState('error');setError(e instanceof Error?e.message:'Revisa tu conexión e inténtalo de nuevo.');}finally{pending.current=false;}
 }
 if(state==='success')return <div className="pt-success" role="status"><span>✓</span><h3>Ya tenemos tu solicitud.</h3><p>Revisaremos tu propuesta y te contactaremos por email para conversar sobre el piloto. La participación queda sujeta a aprobación y acuerdo.</p><a href="/demo/noche-abierta">Mientras tanto, explora SpanishCue ↗</a></div>;
 return <form className="pt-form" onSubmit={submit} aria-busy={state==='sending'}><div className="pt-fields">
 <label>Nombre<input name="name" autoComplete="name" required maxLength={100} placeholder="Tu nombre"/></label><label>Organización<input name="organization" autoComplete="organization" required maxLength={160} placeholder="Tu empresa o proyecto"/></label>
 <label>Email profesional<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="nombre@tuempresa.com"/></label><label>Web <span>(opcional)</span><input name="website" type="url" autoComplete="url" maxLength={500} placeholder="https://"/></label>
 <label>País<input name="country" autoComplete="country-name" required maxLength={100} placeholder="Dónde trabajas"/></label><label>Tipo de audiencia<select name="audience" required defaultValue=""><option value="" disabled>Selecciona una opción</option>{Object.entries(audiences).map(([value,label])=><option value={value} key={value}>{label}</option>)}</select></label>
 </div><label>Mensaje <span>(opcional)</span><textarea name="message" rows={3} maxLength={2000} placeholder="¿Cómo trabajas con profesores independientes de español?"/></label>
 <div className="pt-honeypot" aria-hidden="true"><label>Fax<input name="companyFax" tabIndex={-1} autoComplete="off"/></label></div>
 <label className="pt-consent"><input type="checkbox" name="consent" required/><span>Acepto que SpanishCue me contacte para atender esta solicitud. He leído la <a href="/privacy">política de privacidad</a>.</span></label>
 {state==='error'&&<p role="alert" className="pt-error">{error}</p>}
 <button className="pt-button" type="submit" disabled={state==='sending'}>{state==='sending'?'Guardando solicitud…':'Quiero ser partner'}<span aria-hidden="true">↗</span></button><small>Sin pagos por adelantado. Sin exclusividad. Revisamos cada propuesta.</small>
 </form>;
}
