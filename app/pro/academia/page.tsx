import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { env } from 'cloudflare:workers';
import Link from 'next/link';
import { getUserSessionFromHeaders } from '../../access-policy';
import { institutionStorageReady } from '../../../db/institutions';
import { catalogLessons } from '../../conversation-families/catalog';
import AcademyDashboard from './AcademyDashboard';
import './style.css';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title:'Mi academia | SpanishCue',robots:{index:false,follow:false},referrer:'no-referrer' };
export default async function AcademyPage() {
  const session = getUserSessionFromHeaders(await headers());
  const ready = await institutionStorageReady(env.DB);
  return <main className="institution-page"><header className="institution-header"><Link href="/">SPANISHCUE</Link><nav aria-label="Navegación de academia"><Link href="/cuenta">Mi cuenta</Link><Link href="/academias">Para academias</Link></nav></header>
    <div className="institution-intro"><p className="institution-eyebrow">EQUIPO DOCENTE</p><h1>Tu academia, en un solo lugar.</h1><p>Cuentas individuales. Un equipo común. Accesos que tú administras.</p></div>
    {!session.isAuthenticated || !session.accountId ? <section className="institution-panel"><h2>Entra con tu cuenta de profesor</h2><p>Necesitas una cuenta individual con correo verificado para registrar tu academia o aceptar una invitación.</p><Link className="institution-primary" href="/ingresar?modo=entrar&returnTo=%2Fpro%2Facademia">Iniciar sesión</Link></section> : !ready ? <section className="institution-panel" role="status"><h2>Estamos preparando el panel institucional</h2><p>La gestión de academias aún no está habilitada en este entorno. Puedes consultar las opciones para tu equipo.</p><Link className="institution-primary" href="/academias#solicitar-demo">Consultar por mi academia</Link></section> : <AcademyDashboard userId={session.accountId} owner={session.isOwner} resourceCount={catalogLessons.filter(lesson=>!lesson.path?.startsWith('http')).length} />}
  </main>;
}
