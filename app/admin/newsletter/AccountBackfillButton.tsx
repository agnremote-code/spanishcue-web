'use client';
import { useState } from 'react';

/** Sends the first sequence mail to accounts since 5-nov, one small batch at a time, until none remain. */
export default function AccountBackfillButton({ remaining }: { remaining: number }) {
  const [left, setLeft] = useState(remaining);
  const [sent, setSent] = useState(0);
  const [state, setState] = useState<'idle' | 'running' | 'done' | 'error'>(remaining ? 'idle' : 'done');
  async function run() {
    setState('running');
    let pending = left, total = 0;
    for (let round = 0; round < 200 && pending > 0; round += 1) {
      const response = await fetch('/api/admin/newsletter/cuentas', { method: 'POST' });
      if (!response.ok) { setState('error'); return; }
      const result = await response.json() as { sent: number; remaining: number; processed: number; error?: string };
      if (result.error || result.processed === 0) { setState('error'); return; }
      total += result.sent; pending = result.remaining;
      setSent(total); setLeft(pending);
    }
    setState(pending ? 'error' : 'done');
  }
  return <p data-account-backfill={state}>
    {state === 'done' ? `Cuentas desde el 5-nov: ninguna pendiente${sent ? ` (${sent} mails enviados ahora)` : ''}.` : <>
      Cuentas desde el 5-nov sin el primer mail: {left}. {sent ? `Enviados: ${sent}. ` : ''}
      <button type="button" onClick={run} disabled={state === 'running'}>{state === 'running' ? 'Enviando…' : 'Enviar primer mail'}</button>
      {state === 'error' ? ' Se cortó: vuelve a intentarlo.' : ''}
    </>}
  </p>;
}
