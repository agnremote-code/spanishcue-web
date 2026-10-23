'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import type { Invitation, Member, Membership } from '../../../db/institutions';

type PanelState = { membership: Membership | null; members?: Member[]; invitations?: Invitation[] };
type Resources = { grammar: number; conversation: number };

const date = (seconds: number) => new Date(seconds * 1000).toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });

async function send(body: Record<string, unknown>): Promise<PanelState & { link?: string }> {
  const response = await fetch('/api/academy', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  const result = await response.json().catch(() => ({})) as PanelState & { error?: string; link?: string };
  if (!response.ok) throw new Error(result.error || 'No pudimos guardar los cambios.');
  return result;
}

export default function AcademyPanel({ initial, selfId, email, resources }: { initial: PanelState; selfId: string; email: string | null; resources: Resources }) {
  const [state, setState] = useState<PanelState>(initial);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [link, setLink] = useState<{ email: string; url: string } | null>(null);

  async function run(body: Record<string, unknown>, done?: (result: PanelState & { link?: string }) => void) {
    if (busy) return;
    setBusy(true); setError(''); setNotice('');
    try {
      const result = await send(body);
      setState(result);
      done?.(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No pudimos guardar los cambios.');
    } finally {
      setBusy(false);
    }
  }

  function form(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    return Object.fromEntries(new FormData(event.currentTarget));
  }

  const { membership, members = [], invitations = [] } = state;
  const status = <>{error && <p className="panel-error" role="alert">{error}</p>}{notice && <p className="panel-notice" role="status">{notice}</p>}</>;

  if (!membership) {
    return <section className="panel-empty">
      <p className="academy-eyebrow"><span />PANEL DE ACADEMIA</p>
      <h1>Registra tu academia.</h1>
      <p className="academy-lead">Crea el espacio de tu institución para invitar a tus profesores. Cada profesor entra con su propia cuenta. Si te invitaron a una academia, abre el enlace de la invitación con tu cuenta {email ? <b>{email}</b> : null}.</p>
      <form className="academy-form panel-form" onSubmit={event => { const data = form(event); void run({ action: 'create', ...data }); }}>
        <label>Nombre de la academia<input name="name" required maxLength={120} autoComplete="organization" /></label>
        <div className="academy-form-grid">
          <label>Ciudad <span className="panel-optional">(opcional)</span><input name="city" maxLength={120} /></label>
          <label>Web <span className="panel-optional">(opcional)</span><input name="website" maxLength={200} inputMode="url" placeholder="www.tuacademia.com" /></label>
        </div>
        {status}
        <button className="academy-primary" disabled={busy}>{busy ? 'Creando…' : 'Crear mi academia'} <span aria-hidden="true">→</span></button>
        <small>Crear la academia no activa ninguna suscripción ni cobro. Las licencias para tu equipo se acuerdan con SpanishCue.</small>
      </form>
    </section>;
  }

  const { institution, role } = membership;
  const library = <section className="panel-card">
    <h2>Recursos para tu equipo</h2>
    <ul className="panel-resources">
      <li><b>{resources.grammar}</b><span>clases de gramática</span></li>
      <li><b>{resources.conversation}</b><span>clases de conversación, escucha y vocabulario, con mundos 3D</span></li>
    </ul>
    <Link className="academy-text-link" href="/#library-results">Abrir la biblioteca →</Link>
  </section>;

  if (role !== 'admin') {
    return <section className="panel-grid">
      <header className="panel-head"><p className="academy-eyebrow"><span />TU ACADEMIA</p><h1>{institution.name}</h1><p className="academy-lead">Eres profesor de esta academia. La administración de la academia gestiona los accesos del equipo.</p></header>
      {library}
    </section>;
  }

  const seatsUsed = members.filter(member => member.hasSeat).length;
  return <section className="panel-grid">
    <header className="panel-head">
      <p className="academy-eyebrow"><span />PANEL DE ACADEMIA · ADMINISTRACIÓN</p>
      <h1>{institution.name}</h1>
      <p className="panel-licence">{institution.seatLimit > 0
        ? <><b>{seatsUsed} de {institution.seatLimit}</b> licencias en uso. Cada licencia da acceso completo a la biblioteca a un miembro del equipo, por orden de incorporación.</>
        : <>Tu academia todavía no tiene licencias activas. Tu equipo puede unirse y usar las clases gratuitas; para el acceso completo, <Link href="/academias#solicitar-demo">consulta licencias para tu academia</Link>.</>}</p>
    </header>
    {status}

    <section className="panel-card">
      <h2>Equipo <span>{members.length}</span></h2>
      <ul className="panel-members">{members.map(member => <li key={member.userId}>
        <div><b>{member.displayName || member.email}</b><span>{member.email} · desde {date(member.joinedAt)}</span></div>
        <span className={member.hasSeat ? 'panel-pill on' : 'panel-pill'}>{member.hasSeat ? 'Con licencia' : 'Sin licencia'}</span>
        {member.userId === selfId ? <span className="panel-role">Administración (tú)</span> : <>
          <select aria-label={`Rol de ${member.email}`} value={member.role} disabled={busy} onChange={event => void run({ action: 'set-role', userId: member.userId, role: event.target.value })}>
            <option value="teacher">Profesor</option><option value="admin">Administración</option>
          </select>
          <button type="button" className="panel-danger" disabled={busy} onClick={() => { if (confirm(`¿Quitar a ${member.email} de ${institution.name}? Perderá la licencia de la academia.`)) void run({ action: 'remove-member', userId: member.userId }); }}>Quitar</button>
        </>}
      </li>)}</ul>
    </section>

    <section className="panel-card">
      <h2>Invitar profesores</h2>
      <form className="panel-invite" onSubmit={event => { const target = event.currentTarget; const data = form(event); void run({ action: 'invite', ...data }, result => { if (result.link) { setLink({ email: String(data.email).trim().toLowerCase(), url: result.link }); target.reset(); } }); }}>
        <label>Email del profesor<input name="email" type="email" required maxLength={254} autoComplete="off" /></label>
        <label>Rol<select name="role" defaultValue="teacher"><option value="teacher">Profesor</option><option value="admin">Administración</option></select></label>
        <button className="academy-primary" disabled={busy}>Crear invitación</button>
      </form>
      {link && <div className="panel-link">
        <p>Envía este enlace a <b>{link.email}</b>. Vale 14 días y solo funciona con una cuenta de ese email.</p>
        <input readOnly value={link.url} onFocus={event => event.currentTarget.select()} aria-label="Enlace de invitación" />
        <div>
          <button type="button" onClick={() => void navigator.clipboard?.writeText(link.url).then(() => setNotice('Enlace copiado.'), () => setNotice('Selecciona el enlace y cópialo.'))}>Copiar enlace</button>
          <a href={`mailto:${encodeURIComponent(link.email)}?subject=${encodeURIComponent(`Invitación a ${institution.name} en SpanishCue`)}&body=${encodeURIComponent(`Hola:\n\nTe invito a unirte a ${institution.name} en SpanishCue. Abre este enlace con tu cuenta ${link.email}:\n\n${link.url}\n\nEl enlace vale 14 días.`)}`}>Abrir en mi correo</a>
        </div>
      </div>}
      {invitations.length > 0 && <>
        <h3>Invitaciones pendientes</h3>
        <ul className="panel-members">{invitations.map(invite => <li key={invite.id}>
          <div><b>{invite.email}</b><span>{invite.role === 'admin' ? 'Administración' : 'Profesor'} · vence el {date(invite.expiresAt)}</span></div>
          <button type="button" className="panel-danger" disabled={busy} onClick={() => void run({ action: 'revoke-invite', invitationId: invite.id })}>Revocar</button>
        </li>)}</ul>
      </>}
    </section>

    <section className="panel-card">
      <h2>Datos de la academia</h2>
      <form className="panel-form" onSubmit={event => { const data = form(event); void run({ action: 'update', ...data }, () => setNotice('Datos guardados.')); }}>
        <label>Nombre<input name="name" required maxLength={120} defaultValue={institution.name} /></label>
        <div className="academy-form-grid">
          <label>Ciudad<input name="city" maxLength={120} defaultValue={institution.city} /></label>
          <label>Web<input name="website" maxLength={200} defaultValue={institution.website} inputMode="url" /></label>
        </div>
        <button className="academy-primary" disabled={busy}>Guardar</button>
      </form>
    </section>

    {library}
  </section>;
}
