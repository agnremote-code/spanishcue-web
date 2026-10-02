import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import Link from 'next/link';
import {ownerFromHeaders,signedInFromHeaders} from '../../access-policy';
import ReportsManager from './ReportsManager';
import './style.css';
export const dynamic='force-dynamic';
export default async function ReportsPage(){const h=await headers();if(!signedInFromHeaders(h))redirect('/ingresar?modo=entrar&returnTo=%2Fadmin%2Freportes');if(!ownerFromHeaders(h))redirect('/cuenta');return <main className="reports-admin"><Link href="/admin">← Administración</Link><p>SOLO VOS · CALIDAD DE LAS CLASES</p><h1>Reportes de clases</h1><ReportsManager/></main>;}
