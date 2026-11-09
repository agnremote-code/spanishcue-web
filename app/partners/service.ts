import { DemoRequestError } from '../academias/demo-service';
export { readDemoRequest as readPartnerRequest, demoErrorResponse as partnerErrorResponse } from '../academias/demo-service';
export const audiences = { agency:'Agencia de captación', mentoring:'Mentoría o consultoría', branding:'Marca personal para docentes', creator:'Creación de contenido ELE', community:'Comunidad de profesores' } as const;
export const MONTHLY_CENTS=1990;
export const COMMISSION_PERCENT=30;
export const MAX_PAID_MONTHS=6;
export const partnerMoney=(cents:number)=>`US$${(cents/100).toLocaleString('es-ES',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
export function commissionCents(teachers:number) { return Math.round(MONTHLY_CENTS*COMMISSION_PERCENT/100)*Math.max(0,Math.floor(teachers)); }
export function field(value:unknown,max:number,required=true) {
 if(typeof value!=='string'||value.trim().length>max||(required&&!value.trim())||/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value))throw new DemoRequestError('Revisa los campos del formulario.');
 return value.trim();
}
export function validateApplication(value:Record<string,unknown>) {
 const name=field(value.name,100),organization=field(value.organization,160),email=field(value.email,254).toLowerCase();
 if(!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email))throw new DemoRequestError('Ingresa un email válido.');
 const website=field(value.website??'',500,false);
 if(website){let url:URL;try{url=new URL(website);}catch{throw new DemoRequestError('Ingresa una web completa, con https://.');}if(!['https:','http:'].includes(url.protocol)||url.username||url.password)throw new DemoRequestError('La web debe empezar por https:// o http://.');}
 const country=field(value.country,100),audience=field(value.audience,30),message=field(value.message??'',2000,false),requestKey=field(value.requestKey,100);
 if(!Object.hasOwn(audiences,audience))throw new DemoRequestError('Selecciona tu tipo de audiencia.');
 if(value.consent!==true||!/^[a-zA-Z0-9_-]{16,100}$/.test(requestKey))throw new DemoRequestError('Acepta el contacto y revisa el formulario.');
 return {name,organization,email,website,country,audience,message,requestKey};
}
export async function saveApplication(db:D1Database,value:Record<string,unknown>) {
 const v=validateApplication(value);
 const hash=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify(v)));
 const id=Array.from(new Uint8Array(hash),b=>b.toString(16).padStart(2,'0')).join('');
 const now=Math.floor(Date.now()/1000);
 const result=await db.prepare(`INSERT INTO partner_applications(id,name,organization,email,website,country,audience,message,consent_at,created_at)
 SELECT ?,?,?,?,?,?,?,?,?,? WHERE (SELECT count(*) FROM partner_applications WHERE email=? AND created_at>=?)<3 ON CONFLICT(id) DO NOTHING`)
 .bind(id,v.name,v.organization,v.email,v.website,v.country,v.audience,v.message,now,now,v.email,now-3600).run();
 if(!result.meta.changes&&!await db.prepare('SELECT id FROM partner_applications WHERE id=?').bind(id).first())throw new DemoRequestError('Ya recibimos varias solicitudes. Inténtalo más tarde.',429);
 return {ok:true};
}
export async function partnerStorageReady(db:D1Database) {
 try { const r=await db.prepare("SELECT count(*) AS n FROM sqlite_master WHERE type='table' AND name IN ('partner_applications','partner_attributions','partner_payment_adjustments','partner_settlements','partner_audit')").first<{n:number}>();return r?.n===5;}catch{return false;}
}
