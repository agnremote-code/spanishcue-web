'use client';
import { useState, type FormEvent } from 'react';
import { GIFT_LESSON_LEVEL, GIFT_LESSON_PATH, GIFT_LESSON_TITLE, GIFT_POPUP_STORAGE_KEY } from './gift';
import styles from './newsletter.module.css';

function remember(value: string) {
  try { window.localStorage.setItem(GIFT_POPUP_STORAGE_KEY, value); } catch { /* private mode: the popup may ask again */ }
}

/** Email → gift grammar class. Shared by the popup and /clase-gratis. */
export function GiftSignupForm({ source }: { source: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setState('sending'); setError('');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: data.get('email'), consent: data.get('consent') === 'on', website: data.get('website'), source }),
      });
      const body = await response.json().catch(() => ({})) as { message?: string };
      if (!response.ok) { setError(body.message || 'No pudimos guardar tu email. Inténtalo de nuevo.'); setState('idle'); return; }
      remember('joined');
      setState('done');
    } catch {
      setError('No hay conexión. Inténtalo de nuevo.'); setState('idle');
    }
  }
  if (state === 'done') return (
    <div className={styles.done} role="status">
      <p className={styles.lesson}>¡Listo! La clase ya está desbloqueada en este navegador. También te la enviamos por email.</p>
      <a className={styles.open} href={GIFT_LESSON_PATH}>Abrir la clase</a>
    </div>
  );
  return (
    <form className={styles.form} onSubmit={submit}>
      <label className={styles.honeypot} aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <input className={styles.input} type="email" name="email" required maxLength={254} autoComplete="email" placeholder="tu@email.com" aria-label="Tu email" />
      <label className={styles.consent}><input type="checkbox" name="consent" required />Quiero recibir la newsletter de SpanishCue con ideas para mis clases de ELE. Puedo darme de baja cuando quiera.</label>
      {error && <p className={styles.error} role="alert">{error}</p>}
      <button className={styles.submit} type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Desbloqueando…' : 'Desbloquear la clase gratis'}</button>
    </form>
  );
}

export function GiftPitch({ heading = 'h2' }: { heading?: 'h1' | 'h2' }) {
  const Title = heading;
  return (
    <div className={styles.copy}>
      <p className={styles.kicker}>Regalo para profes de ELE</p>
      <Title className={styles.title}>Desbloquea gratis una clase PRO de gramática</Title>
      <p className={styles.lesson}>«{GIFT_LESSON_TITLE}» · {GIFT_LESSON_LEVEL}</p>
      <p className={styles.lead}>Creo que + indicativo, no creo que + subjuntivo. Una clase completa para dar en vivo, con explicación, audio, práctica y conversación. Deja tu email y se abre al instante.</p>
    </div>
  );
}

export { remember as rememberGiftPopup };
