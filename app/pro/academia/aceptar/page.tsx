import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';
import { getUserSessionFromHeaders } from '../../../access-policy';
import AcceptInvitation from './AcceptInvitation';
import '../style.css';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {title:'Aceptar invitación | SpanishCue',robots:{index:false,follow:false},referrer:'no-referrer'};
export default async function AcceptPage() {
 const session=getUserSessionFromHeaders(await headers());
 return <main className="institution-page institution-accept"><header className="institution-header"><Link href="/">SPANISHCUE</Link><Link href="/pro/academia">Mi academia</Link></header><section className="institution-panel"><p className="institution-eyebrow">INVITACIÓN AL EQUIPO</p><h1>Un equipo. Tu propia cuenta.</h1><AcceptInvitation email={session.accountId?session.email:null}/></section></main>;
}
