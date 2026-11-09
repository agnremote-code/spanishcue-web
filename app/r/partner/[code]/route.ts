import { env } from 'cloudflare:workers';
import { approvedPartner } from '../../../../db/partners';
import { PARTNER_COOKIE,PARTNER_TTL,partnerMarketingConsent,partnerCookieValue,verifyReferral,signReferral } from '../../../partners/referral';
import { partnerStorageReady } from '../../../partners/service';
export const dynamic='force-dynamic';
export async function GET(request:Request,{params}:{params:Promise<{code:string}>}) {
 const {code}=await params;
 const headers=new Headers({'Cache-Control':'private, no-store','Referrer-Policy':'no-referrer','X-Robots-Tag':'noindex, nofollow'});
 const secret=(env as unknown as {AUTOESTUDIO_SHARE_SECRET?:string}).AUTOESTUDIO_SHARE_SECRET??'';
 if(!/^sc_[a-f0-9]{24}$/.test(code))return new Response('Enlace no válido.',{status:404,headers});
 try {
 if(secret.length<32||!await partnerStorageReady(env.DB))return new Response('Programa todavía no disponible.',{status:503,headers});
 if(!await approvedPartner(env.DB,code))return new Response('Enlace no disponible.',{status:404,headers});
 if(!partnerMarketingConsent(request.headers.get('cookie'))){
 const destination=new URL('/',request.url);destination.searchParams.set('partner_ref',await signReferral({code,clickedAt:Math.floor(Date.now()/1000)},secret));headers.set('Location',destination.href);return new Response(null,{status:303,headers});
 }
 const existing=await verifyReferral(partnerCookieValue(request.headers.get('cookie')),secret);
 if(!existing)headers.set('Set-Cookie',`${PARTNER_COOKIE}=${await signReferral({code,clickedAt:Math.floor(Date.now()/1000)},secret)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${PARTNER_TTL}`);
 headers.set('Location',new URL('/',request.url).href);
 return new Response(null,{status:303,headers});
 }catch{return new Response('Programa temporalmente no disponible.',{status:503,headers});}
}
