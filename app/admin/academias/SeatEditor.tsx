'use client';

import { useState } from 'react';

/** Owner-only: sets the licences agreed with one academy. */
export default function SeatEditor({ institutionId, seats }: { institutionId: string; seats: number }) {
  const [value, setValue] = useState(String(seats));
  const [state, setState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [error, setError] = useState('');
  async function save() {
    setState('saving'); setError('');
    try {
      const response = await fetch('/api/admin/academies', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ institutionId, seats: Number(value) }) });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(result.error || 'No se guardó.');
      setState('saved');
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se guardó.');
      setState('error');
    }
  }
  return <form className="academy-seats" onSubmit={event => { event.preventDefault(); void save(); }}>
    <label>Licencias<input type="number" min={0} max={1000} step={1} value={value} onChange={event => setValue(event.target.value)} /></label>
    <button disabled={state === 'saving'}>{state === 'saving' ? 'Guardando…' : 'Guardar'}</button>
    {state === 'error' && <span role="alert">{error}</span>}
  </form>;
}
