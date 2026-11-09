import {env} from 'cloudflare:workers';
import {readPartnerRequest,partnerErrorResponse,partnerStorageReady} from '../../../partners/service';
import {DemoRequestError} from '../../../academias/demo-service';
import {approvedPartner} from '../../../../db/partners';
import {PARTNER_COOKIE,PARTNER_TTL,partnerCookieValue,partnerMarketingConsent,verifyReferral} from '../../../partners/referral';
export const dynamic='force-dynamic';
export async function POST(request:Request) {
 try {
 const v=await readPartnerRequest(request);
 if(!partnerMarketingConsent(request.headers.get('cookie')))throw new DemoRequestError('La atribución requiere tu consentimiento de marketing.',403);
 const secret=(env as unknown as {AUTOESTUDIO_SHARE_SECRET?:string}).AUTOESTUDIO_SHARE_SECRET??'';
 const ref=await verifyReferral(typeof v.referral==='string'?v.referral:null,secret);
 if(!ref)throw new DemoRequestError('Recomendación no válida o vencida.',400);
 if(!await partnerStorageReady(env.DB))throw new DemoRequestError('Programa temporalmente no disponible.',503);
 if(!await approvedPartner(env.DB,ref.code))throw new DemoRequestError('Recomendación no disponible.',404);
 const headers=new Headers({'Cache-Control':'private, no-store'});
 if(!await verifyReferral(partnerCookieValue(request.headers.get('cookie')),secret))headers.set('Set-Cookie',`${PARTNER_COOKIE}=${v.referral}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${PARTNER_TTL}`);
 return Response.json({ok:true},{headers});
 }catch(error){return partnerErrorResponse(error);}
}
