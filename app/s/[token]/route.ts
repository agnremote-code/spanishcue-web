import { shareEnvironment } from '../../autoestudio/share/runtime';
import { redeem, privateHeaders } from '../../autoestudio/share/server';
export async function GET(request:Request,context:{params:Promise<{token:string}>}){
 try{return await redeem(request,(await context.params).token,shareEnvironment);}catch{return new Response('Este acceso no está disponible. Volvé a consultar a tu profe.',{status:503,headers:{...privateHeaders,'content-type':'text/plain; charset=utf-8'}});}
}
