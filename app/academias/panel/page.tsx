import type { Metadata } from 'next';
import { env } from 'cloudflare:workers';
import { headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { accountIdFromHeaders, emailFromHeaders, signedInFromHeaders } from '../../access-policy';
import { SpanishCueBrand } from '../../SpanishCueBrand';
import { lessons } from '../../lesson-catalog';
import { getMembership, institutionsReady, listInvitations, listMembers } from '../../../db/institutions';
import AcademyPanel from './AcademyPanel';
import '../style.css';
import './panel.css';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'Panel de academia | SpanishCue', robots: { index: false, follow: false } };

export default async function AcademyPanelPage() {
  const h = await headers();
  if (!signedInFromHeaders(h)) redirect('/ingresar?modo=entrar&returnTo=%2Facademias%2Fpanel');
  // Until the additive migration runs, the panel does not exist rather than half-working.
  if (!(await institutionsReady(env.DB))) notFound();
  const userId = accountIdFromHeaders(h);
  if (!userId) redirect('/cuenta');
  const membership = await getMembership(env.DB, userId);
  const admin = membership?.role === 'admin';
  const [members, invitations] = admin && membership
    ? await Promise.all([listMembers(env.DB, membership.institution.id), listInvitations(env.DB, membership.institution.id)])
    : [[], []];
  const resources = {
    grammar: lessons.filter(lesson => lesson.category === 'Gramática').length,
    conversation: lessons.filter(lesson => lesson.category !== 'Gramática').length,
  };
  return <div className="academy-page academy-panel-page">
    <header className="academy-nav">
      <Link href="/" className="academy-brand" aria-label="SpanishCue"><SpanishCueBrand variant="compact" /></Link>
      <div className="academy-nav-actions"><Link href="/cuenta" className="academy-nav-demo">Mi cuenta</Link></div>
    </header>
    <main className="academy-wrap academy-panel-main">
      <AcademyPanel initial={{ membership, members, invitations }} selfId={userId} email={emailFromHeaders(h)} resources={resources} />
    </main>
  </div>;
}
