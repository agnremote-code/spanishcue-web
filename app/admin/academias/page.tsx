import { env } from 'cloudflare:workers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ownerFromHeaders, signedInFromHeaders } from '../../access-policy';
import { listDemoRequests } from '../../academias/demo-service';
import { institutionsReady, listInstitutions } from '../../../db/institutions';
import SeatEditor from './SeatEditor';
import '../../teachers.css';
import './style.css';

export const dynamic = 'force-dynamic';

export default async function AcademyRequests() {
  const h = await headers();
  if (!signedInFromHeaders(h)) redirect('/ingresar?modo=entrar&returnTo=%2Fadmin%2Facademias');
  if (!ownerFromHeaders(h)) redirect('/cuenta');
  // A DB error stays visible: it must never masquerade as an empty inbox.
  const rows = await listDemoRequests(env.DB);
  const institutions = (await institutionsReady(env.DB)) ? await listInstitutions(env.DB) : null;
  return <div className="teacher-app"><main className="teacher-main academy-inbox">
    <Link href="/admin">← Administración</Link>
    {institutions && <>
      <section className="teacher-intro"><p>ACADEMIAS · CUENTAS INSTITUCIONALES</p><h1>Academias registradas.</h1><div>Las licencias se asignan a mano después de un acuerdo real. Cada licencia da acceso completo a un miembro del equipo, por orden de incorporación; 0 quita el acceso institucional sin tocar suscripciones personales.</div></section>
      {institutions.length === 0 ? <p>Todavía no hay academias registradas. Se registran desde <Link href="/academias/panel">/academias/panel</Link>.</p> : <ol className="academy-requests">{institutions.map(item => <li key={item.id}>
        <header><div><h2>{item.name}</h2><p>{[item.city, item.website].filter(Boolean).join(' · ') || 'Sin datos de contacto'} · {item.members} miembros · {item.seatsUsed} de {item.seatLimit} licencias en uso</p></div><time dateTime={new Date(item.createdAt * 1000).toISOString()}>{new Date(item.createdAt * 1000).toLocaleDateString('es', { timeZone: 'UTC' })}</time></header>
        <p>Administración: {item.admins.join(', ') || '—'}</p>
        <SeatEditor institutionId={item.id} seats={item.seatLimit} />
      </li>)}</ol>}
    </>}
    <section className="teacher-intro"><p>ACADEMIAS · SOLICITUDES REALES</p><h1>Demos institucionales.</h1><div>Las 200 solicitudes más recientes. Contacto autorizado para atender cada consulta.</div></section>
    {rows.length === 0 ? <p>Todavía no hay solicitudes. La landing está en <Link href="/academias">/academias</Link>.</p> : <ol className="academy-requests">{rows.map(row => <li key={row.id}>
      <header><div><h2>{row.institution}</h2><p>{row.name} · {row.teachers} profesores</p></div><time dateTime={row.created_at}>{new Date(row.created_at).toLocaleString('es', { timeZone: 'UTC' })} UTC</time></header>
      <a href={`mailto:${encodeURIComponent(row.email)}`}>{row.email}</a>
      {row.message && <p className="academy-request-message">{row.message}</p>}
    </li>)}</ol>}
  </main></div>;
}
