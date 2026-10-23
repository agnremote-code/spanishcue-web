'use client';

import { useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { trackMarketingEvent } from '../marketing/analytics';

export default function DemoForm({ es }: { es: boolean }) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const key = useRef('');
  const pending = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    key.current ||= crypto.randomUUID();
    pending.current = true;
    setState('sending'); setError('');
    try {
      const response = await fetch('/api/academy-demo', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name: data.get('name'), institution: data.get('institution'), email: data.get('email'), teachers: data.get('teachers'), message: data.get('message'), website: data.get('website'), consent: data.get('consent') === 'on', requestKey: key.current }),
      });
      const raw: unknown = await response.json();
      const result = raw && typeof raw === 'object' ? raw as { ok?: unknown; error?: unknown } : {};
      if (!response.ok || result.ok !== true) throw new Error(es && typeof result.error === 'string' ? result.error : es ? 'No pudimos guardar la solicitud.' : 'We could not save your request. Please try again.');
      setState('success');
      trackMarketingEvent('cta_click', { placement: 'academy_demo_submitted', cta_type: 'lead_submitted' });
    } catch (err) {
      setState('error'); setError(err instanceof Error ? err.message : es ? 'Revisa tu conexión e inténtalo de nuevo.' : 'Check your connection and try again.');
    } finally { pending.current = false; }
  }
  if (state === 'success') return <div className="academy-form-success" role="status"><span aria-hidden="true">✓</span><h3>{es ? 'Tu solicitud quedó guardada.' : 'Your request is saved.'}</h3><p>{es ? 'Revisaremos lo que necesita tu academia y te contactaremos por email para coordinar la demo.' : 'We will review your school’s needs and contact you by email to arrange the demo.'}</p><Link href="/demo/noche-abierta">{es ? 'Mientras tanto, explora el mundo 3D' : 'Explore the 3D world while you wait'} →</Link></div>;
  return <form className="academy-form" onSubmit={submit} aria-busy={state === 'sending'}>
    <div className="academy-form-grid">
      <label>{es ? 'Tu nombre' : 'Your name'}<input name="name" autoComplete="name" required maxLength={100} placeholder={es ? 'Nombre y apellido' : 'Full name'} /></label>
      <label>{es ? 'Academia o institución' : 'School or institution'}<input name="institution" autoComplete="organization" required maxLength={160} placeholder={es ? 'Nombre de tu academia' : 'Your school’s name'} /></label>
      <label>{es ? 'Email profesional' : 'Work email'}<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="nombre@academia.com" /></label>
      <label>{es ? 'Profesores en tu equipo' : 'Teachers on your team'}<select name="teachers" required defaultValue=""><option value="" disabled>{es ? 'Selecciona una cantidad' : 'Select a team size'}</option>{['1-5','6-15','16-30','31-50','51+'].map(band => <option key={band} value={band}>{band}</option>)}</select></label>
    </div>
    <label>{es ? '¿Qué buscas para tu academia? (opcional)' : 'What does your school need? (optional)'}<textarea name="message" rows={3} maxLength={2000} placeholder={es ? 'Cuéntanos brevemente cómo trabaja tu equipo.' : 'Tell us briefly how your team works.'} /></label>
    <div className="academy-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="academy-consent"><input name="consent" type="checkbox" required /><span>{es ? 'Acepto que SpanishCue me contacte para atender esta solicitud. He leído la ' : 'I agree to be contacted by SpanishCue about this request. I have read the '}<Link href="/privacy">{es ? 'política de privacidad' : 'privacy policy'}</Link>.</span></label>
    {state === 'error' && <p className="academy-form-error" role="alert">{error}</p>}
    <button className="academy-primary" disabled={state === 'sending'} type="submit">{state === 'sending' ? (es ? 'Guardando…' : 'Saving…') : (es ? 'Solicitar una demo' : 'Request a demo')} <span aria-hidden="true">↗</span></button>
    <small>{es ? 'Sin compromiso. No activa ninguna suscripción.' : 'No commitment. This does not start a subscription.'}</small>
  </form>;
}
