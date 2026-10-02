import { env } from 'cloudflare:workers';
import { ownerFromHeaders } from '../../../access-policy';
import { listReports,updateReport,readReportJson,requireReportOrigin,reportErrorResponse,ReportError } from '../../../lesson-reports/service';
export const dynamic='force-dynamic';
function requireOwner(request:Request){if(!ownerFromHeaders(request.headers))throw new ReportError('Acceso exclusivo del propietario.',403);}
export async function GET(request:Request){try{requireOwner(request);return Response.json({items:await listReports(env.DB,new URL(request.url))},{headers:{'cache-control':'private, no-store'}});}catch(error){return reportErrorResponse(error);}}
export async function PATCH(request:Request){try{requireOwner(request);requireReportOrigin(request);await updateReport(env.DB,await readReportJson(request));return Response.json({ok:true},{headers:{'cache-control':'private, no-store'}});}catch(error){return reportErrorResponse(error);}}
