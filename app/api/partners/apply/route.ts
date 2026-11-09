import { env } from 'cloudflare:workers';
import { readPartnerRequest, saveApplication, partnerErrorResponse, partnerStorageReady } from '../../../partners/service';
import { DemoRequestError } from '../../../academias/demo-service';
export const dynamic='force-dynamic';
export async function POST(request:Request) {
 try {
 const value=await readPartnerRequest(request);
 if(typeof value.companyFax==='string'&&value.companyFax.trim())return Response.json({ok:true},{status:201,headers:{'Cache-Control':'private, no-store'}});
 if(!await partnerStorageReady(env.DB))throw new DemoRequestError('Las solicitudes todavía no están disponibles. Inténtalo más tarde.',503);
 return Response.json(await saveApplication(env.DB,value),{status:201,headers:{'Cache-Control':'private, no-store'}});
 }catch(error){return partnerErrorResponse(error);}
}
