import type { Metadata } from 'next';
import { env } from 'cloudflare:workers';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { accountIdFromHeaders, emailFromHeaders, signedInFromHeaders } from '../../access-policy';
import { SpanishCueBrand } from '../../SpanishCueBrand';
import { getMembership, institutionsReady, previewInvitation } from '../../../db/institutions';
import AcceptInvitation from './AcceptInvitation';
import '../style.css';
import '../panel/panel.css';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Invitación a una academia | SpanishCue', robots: { index: false, follow: false }, referrer: 'no-referrer' };

export default async function JoinAcademy({ searchParams }: { searchParams: Promise<{ token?: string }> }) {
  const [h, { token }] = await Promise.all([headers(), searchParams]);
  if (!(await institutionsReady(env.DB))) notFound();
  const preview = await previewInvitation(env.DB, token);
  const signedIn = signedInFromHeaders(h);
  const email = emailFromHeaders(h);
  const userId = accountIdFromHeaders(h);
  const membership = userId ? await getMembership(env.DB, userId) : null;
  const back = `/academias/unirse?token=${encodeURIComponent(token ?? '')}`;
  let body;
  if (preview.status !== 'valid') {
    body = <><h1>Esta invitación no es válida.</h1><p className="academy-lead">Puede que haya vencido, que ya se haya usado o que la academia la haya revocado. Pide a la administración de tu academia una invitación nueva.</p></>;
  } else if (!signedIn) {
    body = <><h1>Te invitaron a {preview.institution}.</h1><p className="academy-lead">Entra o crea tu cuenta con <b>{preview.email}</b> para unirte como {preview.role === 'admin' ? 'administración' : 'profesor'}.</p>
      <div className="academy-actions"><Link className="academy-primary" href={`/ingresar?modo=entrar&returnTo=${encodeURIComponent(back)}`}>Entrar</Link><Link className="academy-text-link" href={`/ingresar?modo=registro&returnTo=${encodeURIComponent(back)}`}>Crear cuenta →</Link></div></>;
  } else if (email !== preview.email) {
    body = <><h1>Esta invitación es para otra cuenta.</h1><p className="academy-lead">La invitación a {preview.institution} es para <b>{preview.email}</b> y entraste como <b>{email}</b>. Cierra sesión y entra con la cuenta invitada.</p></>;
  } else if (membership) {
    body = <><h1>Tu cuenta ya pertenece a {membership.institution.name}.</h1><p className="academy-lead">Una cuenta solo puede pertenecer a una academia.</p><div className="academy-actions"><Link className="academy-primary" href="/academias/panel">Ir al panel</Link></div></>;
  } else {
    body = <><h1>Únete a {preview.institution}.</h1><p className="academy-lead">Te unirás como {preview.role === 'admin' ? 'administración' : 'profesor'} con tu cuenta <b>{email}</b>. Tu suscripción personal, si tienes una, no cambia.</p><AcceptInvitation token={token ?? ''} /></>;
  }
  return <div className="academy-page academy-panel-page">
    <header className="academy-nav"><Link href="/" className="academy-brand" aria-label="SpanishCue"><SpanishCueBrand variant="compact" /></Link></header>
    <main className="academy-wrap academy-panel-main"><section className="panel-empty"><p className="academy-eyebrow"><span />INVITACIÓN</p>{body}</section></main>
  </div>;
}
