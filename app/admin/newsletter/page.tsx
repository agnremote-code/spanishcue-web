import { env } from 'cloudflare:workers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ownerFromHeaders, signedInFromHeaders } from '../../access-policy';
import '../reportes/style.css';

export const dynamic = 'force-dynamic';

type Row = { email: string; source_path: string | null; status: string; created_at: string; unsubscribed_at: string | null };

function when(value: string | null) {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', dateStyle: 'short', timeStyle: 'short' });
}

/** Owner-only list of the emails captured by the gift popup and /clase-gratis. */
export default async function NewsletterAdminPage() {
  const h = await headers();
  if (!signedInFromHeaders(h)) redirect('/ingresar?modo=entrar&returnTo=%2Fadmin%2Fnewsletter');
  if (!ownerFromHeaders(h)) redirect('/cuenta');
  let rows: Row[] = [];
  let failed = false;
  try {
    rows = (await env.DB.prepare('SELECT email,source_path,status,created_at,unsubscribed_at FROM newsletter_subscribers ORDER BY created_at DESC LIMIT 5000').all<Row>()).results;
  } catch { failed = true; }
  const active = rows.filter(row => row.status === 'active').length;
  return <main className="reports-admin">
    <Link href="/admin">← Administración</Link>
    <p>SOLO TÚ · EMAILS CAPTURADOS</p>
    <h1>Newsletter</h1>
    {failed ? <p>La lista no está disponible ahora.</p> : <>
      <p>{active} activos de {rows.length} en total. Vienen del popup de regalo y de /clase-gratis.</p>
      <p><a href="/api/admin/newsletter?format=csv" download>Descargar CSV</a></p>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
        <thead><tr style={{ textAlign: 'left' }}><th>Email</th><th>Fecha</th><th>Página</th><th>Estado</th></tr></thead>
        <tbody>{rows.map(row => <tr key={row.email} style={{ borderTop: '1px solid #d7e1da' }}>
          <td style={{ padding: '8px 6px', overflowWrap: 'anywhere' }}>{row.email}</td>
          <td style={{ padding: '8px 6px' }}>{when(row.created_at)}</td>
          <td style={{ padding: '8px 6px' }}>{row.source_path ?? ''}</td>
          <td style={{ padding: '8px 6px' }}>{row.status === 'active' ? 'Activo' : `Baja ${when(row.unsubscribed_at)}`}</td>
        </tr>)}</tbody>
      </table>
    </>}
  </main>;
}
