import { env } from 'cloudflare:workers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ownerFromHeaders,signedInFromHeaders } from '../../access-policy';
import { partnerStorageReady } from '../../partners/service';
import { applications } from '../../../db/partners';
import PartnerAdmin from './PartnerAdmin';
import './style.css';
export const dynamic='force-dynamic';
export const metadata={title:'Administración de partners | SpanishCue',robots:{index:false,follow:false}};
export default async function Page() {
 const h=await headers();
 if(!signedInFromHeaders(h))redirect('/ingresar?modo=entrar&returnTo=%2Fadmin%2Fpartners');
 if(!ownerFromHeaders(h))redirect('/cuenta');
 const ready=await partnerStorageReady(env.DB);
 return <main className="partner-admin"><Link href="/admin">← Administración</Link><p>SPANISHCUE · SOLO PROPIETARIO</p><h1>Partners.</h1>
 <p>Solicitudes de colaboración y liquidaciones del piloto. Hasta 200 solicitudes recientes. Este registro no envía dinero.</p>
 <aside><b>Control antes de liquidar</b><p>Compras y renovaciones se leen del registro de pagos confirmado. Revisa en PayPal o Paddle todos los reembolsos y contracargos, registra los ajustes que falten y conserva una referencia de esa conciliación. Los ajustes de Paddle todavía requieren esa revisión manual. No hay un panel público para partners.</p></aside>
 {ready?<PartnerAdmin initial={await applications(env.DB)}/>:<p role="status">Almacenamiento pendiente: aplica la ampliación de base de datos mediante el procedimiento autorizado antes de recibir solicitudes. No se han habilitado registros ficticios.</p>}
 </main>;
}
