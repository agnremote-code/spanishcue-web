import { ownerFromHeaders } from '../../access-policy';
import { validateOffer } from '../../offer';
import { readOffer,saveOffer } from '../../../db/offer';
export const dynamic='force-dynamic';
export async function GET(request:Request){if(!ownerFromHeaders(request.headers))return Response.json({error:'Acceso exclusivo del propietario.'},{status:403});try{return Response.json(await readOffer(),{headers:{'Cache-Control':'private, no-store'}})}catch{return Response.json({error:'No se pudo leer la configuración.'},{status:503})}}
export async function PUT(request:Request){
 if(!ownerFromHeaders(request.headers))return Response.json({error:'Acceso exclusivo del propietario.'},{status:403});
 if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Origen no válido.'},{status:403});
 if(!request.headers.get('content-type')?.startsWith('application/json'))return Response.json({error:'Formato no válido.'},{status:415});
 try{const text=await request.text();if(text.length>2048)return Response.json({error:'Solicitud demasiado grande.'},{status:413});let value;try{value=JSON.parse(text)}catch{return Response.json({error:'Formato no válido.'},{status:400})}if(!validateOffer(value))return Response.json({error:'Revisá precio, porcentaje, duración y cupos.'},{status:400});if(!await saveOffer(value))return Response.json({error:'La configuración cambió en otra ventana. Recargá antes de guardar.'},{status:409});return Response.json(await readOffer(),{headers:{'Cache-Control':'private, no-store'}})}catch{return Response.json({error:'No se guardaron los cambios. Intentá nuevamente.'},{status:503})}
}
