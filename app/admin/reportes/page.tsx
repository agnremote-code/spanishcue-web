import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import Link from 'next/link';
import {ownerFromHeaders,signedInFromHeaders} from '../../access-policy';
import ReportAdmin from '../../lesson-reports/ReportAdmin';
import '../../teachers.css';
export const dynamic='force-dynamic';
export default async function ReportsPage(){
 const h=await headers();if(!signedInFromHeaders(h))redirect('/ingresar?modo=entrar&returnTo=%2Fadmin%2Freportes');if(!ownerFromHeaders(h))redirect('/cuenta');
 return <div className="teacher-app"><main className="teacher-main" style={{maxWidth:1000}}><Link href="/admin">← Administración</Link><section className="teacher-intro" style={{marginTop:32}}><p>LA MIRADA DE LOS PROFESORES</p><h1>Clases que mejoran.</h1><div>Revisá lo que encontraron y registrá cada cambio.</div></section><ReportAdmin/></main></div>;
}
