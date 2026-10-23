'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
export default function AcceptInvitation({email}:{email:string|null}) {
 const token=useRef(''),[loaded,setLoaded]=useState(false),[hasToken,setHasToken]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState(''),[accepted,setAccepted]=useState(false);
 useEffect(()=>{
   const fragment=new URLSearchParams(window.location.hash.slice(1));
   const value=fragment.get('token')||'';
   if(value)token.current=value;
   // Remove the secret from the address bar before any subsequent navigation.
   if(window.location.hash)window.history.replaceState(null,'',window.location.pathname);
   queueMicrotask(()=>{setHasToken(Boolean(token.current));setLoaded(true);});
 },[]);
 async function accept(){setBusy(true);setError('');try{const response=await fetch('/api/academy',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({action:'accept',token:token.current})});const value=await response.json() as {error?:string};if(!response.ok)throw new Error(value.error||'No pudimos aceptar la invitación.');token.current='';setAccepted(true);}catch(e){setError(e instanceof Error?e.message:'No pudimos aceptar la invitación.');}finally{setBusy(false);}}
 if(!loaded)return <p>Cargando invitación…</p>;
 if(accepted)return <div role="status"><h2>Ya formas parte de la academia</h2><p>El administrador puede asignarte una plaza institucional. Tu cuenta y tu suscripción personal siguen siendo tuyas.</p><Link className="institution-primary" href="/pro/academia">Abrir mi academia</Link></div>;
 return <>{error&&<p className="institution-error" role="alert">{error}</p>}{!email?<><p>Inicia sesión con el correo al que llegó la invitación y verifica tu cuenta. Después vuelve a abrir el enlace original del correo.</p><Link className="institution-primary" href="/ingresar?modo=entrar&returnTo=%2Fpro%2Facademia%2Faceptar">Iniciar sesión</Link></>:!hasToken?<><p>Abre el enlace original del correo de invitación. Si venció, pide al administrador que te envíe uno nuevo.</p><Link href="/pro/academia">Volver a mi academia</Link></>:<><p>Vas a aceptar esta invitación con <strong>{email}</strong>. Debe coincidir con el correo invitado.</p><p>Tu pertenencia no activa cobros ni una suscripción. El administrador asigna las plazas disponibles por separado.</p><button disabled={busy} onClick={accept}>{busy?'Aceptando…':'Aceptar invitación'}</button></>}</>;
}
