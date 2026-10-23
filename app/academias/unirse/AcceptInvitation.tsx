'use client';

import { useState } from 'react';

export default function AcceptInvitation({ token }: { token: string }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function accept() {
    if (busy) return;
    setBusy(true); setError('');
    try {
      const response = await fetch('/api/academy', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action: 'accept', token }) });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(result.error || 'No pudimos aceptar la invitación.');
      window.location.assign('/academias/panel');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No pudimos aceptar la invitación.');
      setBusy(false);
    }
  }
  return <div className="academy-actions">
    <button type="button" className="academy-primary" disabled={busy} onClick={() => void accept()}>{busy ? 'Uniéndote…' : 'Aceptar la invitación'}</button>
    {error && <p className="panel-error" role="alert">{error}</p>}
  </div>;
}
