import { env } from 'cloudflare:workers';
import { ownerFromHeaders } from '../../../access-policy';
import { DemoRequestError } from '../../../academias/demo-service';
import { readPartnerRequest,partnerErrorResponse } from '../../../partners/service';
import { applications,commissionLedger,reviewApplication,recordAdjustment,recordSettlement,settlements,settlementsCsv } from '../../../../db/partners';
export const dynamic='force-dynamic';
const privateHeaders={'Cache-Control':'private, no-store'};
function owner(request:Request) {if(!ownerFromHeaders(request.headers))throw new DemoRequestError('Acceso exclusivo del propietario.',403);}
export async function GET(request:Request) {
 try {owner(request);const url=new URL(request.url);
 if(url.searchParams.get('export')==='settlements')return new Response(settlementsCsv(await settlements(env.DB)),{headers:{...privateHeaders,'content-type':'text/csv; charset=utf-8','content-disposition':'attachment; filename="spanishcue-partner-settlements.csv"'}});
 const id=url.searchParams.get('partner');
 return Response.json(id?{ledger:await commissionLedger(env.DB,id),settlements:await settlements(env.DB,id)}:{applications:await applications(env.DB)}, {headers:privateHeaders});
 }catch(error){return partnerErrorResponse(error);}
}
export async function POST(request:Request) {
 try {owner(request);const v=await readPartnerRequest(request);
 if(typeof v.partnerId!=='string'||v.partnerId.length>100)throw new DemoRequestError('Partner no válido.');
 if(v.action==='review')await reviewApplication(env.DB,v.partnerId,String(v.status??''),String(v.reference??''));
 else if(v.action==='adjustment')await recordAdjustment(env.DB,v.partnerId,Number(v.paymentId),Number(v.refundedCents),String(v.reference??''));
 else if(v.action==='settlement'){
 if(v.providerReconciled!==true)throw new DemoRequestError('Verifica compras, renovaciones, reembolsos y contracargos con el proveedor antes de liquidar.');
 await recordSettlement(env.DB,{partnerId:v.partnerId,requestKey:String(v.requestKey??''),externalReference:String(v.externalReference??''),reconciliationReference:String(v.reference??''),expectedCents:Number(v.expectedCents)});
 }else throw new DemoRequestError('Acción no válida.');
 return Response.json({ok:true},{headers:privateHeaders});
 }catch(error){return partnerErrorResponse(error);}
}
