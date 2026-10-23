import { env } from 'cloudflare:workers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ownerFromHeaders, signedInFromHeaders } from '../../access-policy';
import { listDemoRequests } from '../../academias/demo-service';
import '../../teachers.css';
import './style.css';

export const dynamic = 'force-dynamic';

export default async function AcademyRequests() {
  const h = await headers();
  if (!signedInFromHeaders(h)) redirect('/ingresar?modo=entrar&returnTo=%2Fadmin%2Facademias');
  if (!ownerFromHeaders(h)) redirect('/cuenta');
  // A DB error stays visible: it must never masquerade as an empty inbox.
  const rows = await listDemoRequests(env.DB);
  return <div className="teacher-app"><main className="teacher-main academy-inbox">
    <Link href="/admin">← Administración</Link>
    <section className="teacher-intro"><p>ACADEMIAS · SOLICITUDES REALES</p><h1>Demos institucionales.</h1><div>Las 200 solicitudes más recientes. Contacto autorizado para atender cada consulta.</div></section>
    {rows.length === 0 ? <p>Todavía no hay solicitudes. La landing está en <Link href="/academias">/academias</Link>.</p> : <ol className="academy-requests">{rows.map(row => <li key={row.id}>
      <header><div><h2>{row.institution}</h2><p>{row.name} · {row.teachers} profesores</p></div><time dateTime={row.created_at}>{new Date(row.created_at).toLocaleString('es', { timeZone: 'UTC' })} UTC</time></header>
      <a href={`mailto:${encodeURIComponent(row.email)}`}>{row.email}</a>
      {row.message && <p className="academy-request-message">{row.message}</p>}
    </li>)}</ol>}
  </main></div>;
}
