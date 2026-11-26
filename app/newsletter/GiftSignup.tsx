'use client';
import { useState, type FormEvent } from 'react';
import { GIFT_LESSON_LEVEL, GIFT_LESSON_PATH, GIFT_LESSON_PITCH, GIFT_LESSON_TITLE, GIFT_POPUP_STORAGE_KEY } from './gift';
import styles from './newsletter.module.css';

function remember(value: string) {
  try { window.localStorage.setItem(GIFT_POPUP_STORAGE_KEY, value); } catch { /* private mode: the popup may ask again */ }
}

/** Email → gift grammar class. Shared by the popup and /clase-gratis. */
export function GiftSignupForm({ source, locale = 'es' }: { source: string; locale?: 'es' | 'en' }) {
  const es = locale === 'es';
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
      if (!response.ok) { setError((es && body.message) || (es ? 'No pudimos guardar tu email. Inténtalo de nuevo.' : 'We could not save your email. Please try again.')); setState('idle'); return; }
      remember('joined');
      setState('done');
    } catch {
      setError(es ? 'No hay conexión. Inténtalo de nuevo.' : 'No connection. Please try again.'); setState('idle');
    }
  }
  if (state === 'done') return (
    <div className={styles.done} role="status">
      <p className={styles.lesson}>{es ? '¡Listo! La clase ya está desbloqueada en este navegador. También te la enviamos por email.' : 'Done! The lesson is now unlocked in this browser. We also sent it to your email.'}</p>
      <a className={styles.open} href={GIFT_LESSON_PATH}>{es ? 'Abrir la clase' : 'Open the lesson'}</a>
    </div>
  );
  return (
    <form className={styles.form} onSubmit={submit}>
      <label className={styles.honeypot} aria-hidden="true">{es ? 'Sitio web' : 'Website'}<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <input className={styles.input} type="email" name="email" required maxLength={254} autoComplete="email" placeholder={es ? 'tu@email.com' : 'you@email.com'} aria-label={es ? 'Tu email' : 'Your email'} />
      <label className={styles.consent}><input type="checkbox" name="consent" required />{es ? 'Quiero recibir la newsletter de SpanishCue con ideas para mis clases de ELE. Puedo darme de baja cuando quiera.' : 'I want the SpanishCue newsletter with ideas for my Spanish lessons. I can unsubscribe at any time.'}</label>
      {error && <p className={styles.error} role="alert">{error}</p>}
      <button className={styles.submit} type="submit" disabled={state === 'sending'}>{state === 'sending' ? (es ? 'Desbloqueando…' : 'Unlocking…') : (es ? 'Desbloquear la clase gratis' : 'Unlock the free lesson')}</button>
    </form>
  );
}

export function GiftPitch({ heading = 'h2', topic, locale = 'es' }: { heading?: 'h1' | 'h2'; topic?: string; locale?: 'es' | 'en' }) {
  const Title = heading;
  if (locale === 'en') return (
    <div className={styles.copy}>
      <p className={styles.kicker}>A gift for Spanish teachers</p>
      <Title className={styles.title}>Unlock a PRO grammar lesson for free</Title>
      <p className={styles.lesson}>«{GIFT_LESSON_TITLE}» · {GIFT_LESSON_LEVEL}</p>
      <p className={styles.lead}>The Spanish imperfect: describing how things used to be, past habits and what was going on. A complete lesson to teach live, with explanation, audio, practice and conversation. Leave your email and it opens right away.</p>
    </div>
  );
  return (
    <div className={styles.copy}>
      <p className={styles.kicker}>{topic ? `¿Das clases de ${topic}? Regalo para profes de ELE` : 'Regalo para profes de ELE'}</p>
      <Title className={styles.title}>Desbloquea gratis una clase PRO de gramática</Title>
      <p className={styles.lesson}>«{GIFT_LESSON_TITLE}» · {GIFT_LESSON_LEVEL}</p>
      <p className={styles.lead}>{GIFT_LESSON_PITCH} Una clase completa para dar en vivo, con explicación, audio, práctica y conversación. Deja tu email y se abre al instante.</p>
    </div>
  );
}

export { remember as rememberGiftPopup };
