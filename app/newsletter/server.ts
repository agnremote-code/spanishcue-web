import { GIFT_AUDIO_PATH, GIFT_LESSON_ID, GIFT_LESSON_PATH, GIFT_LESSON_TITLE } from './gift';

// Imported only by route handlers and the Worker. Never import from a client component.
export type NewsletterEnvironment = { DB: D1Database; AUTOESTUDIO_SHARE_SECRET?: string; RESEND_API_KEY?: string };
export type Fetcher = typeof fetch;
export const GIFT_COOKIE = '__Host-sc-regalo';
/** Resend segment «SpanishCue · Newsletter profes ELE»; broadcasts go to this segment only. */
export const NEWSLETTER_SEGMENT_ID = '0cc01e46-2405-4064-b35b-999ed0c27026';
export const NEWSLETTER_FROM = 'Ale de SpanishCue <novedades@spanishcue.com>';
const GIFT_MAX_AGE = 60 * 60 * 24 * 365;
const encoder = new TextEncoder();
const hex = (bytes: Uint8Array) => Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
export const randomToken = () => hex(crypto.getRandomValues(new Uint8Array(24)));

export class NewsletterError extends Error { constructor(message: string, public status = 400) { super(message); } }

export function validEmail(email: string) {
  return email.length <= 254 && /^[a-z0-9.!$%'*+/=_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i.test(email);
}
function safePath(value: unknown) {
  return typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && value.length <= 300 ? value : '/';
}

async function signature(secret: string, message: string) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  // Domain-separated from the Autoestudio share tokens that use the same secret.
  return hex(new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(`newsletter-gift:${message}`))));
}
function usableSecret(secret: string | undefined): secret is string { return Boolean(secret && secret.length >= 32); }

export async function giftCookie(env: NewsletterEnvironment, subscriberId: string) {
  if (!usableSecret(env.AUTOESTUDIO_SHARE_SECRET)) throw new NewsletterError('El regalo no está disponible ahora.', 503);
  const payload = `v1.${subscriberId}`;
  return `${GIFT_COOKIE}=${payload}.${await signature(env.AUTOESTUDIO_SHARE_SECRET, payload)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${GIFT_MAX_AGE}`;
}

function cookieValue(cookieHeader: string | null, name: string) {
  for (const part of (cookieHeader ?? '').split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return rest.join('=');
  }
  return null;
}

/** True when the request carries an authentic gift cookie. Stateless: an unsubscribe keeps the class already given. */
export async function hasGift(cookieHeader: string | null, secret: string | undefined) {
  const token = cookieValue(cookieHeader, GIFT_COOKIE);
  if (!token || !usableSecret(secret) || token.length > 200 || !/^v1\.[a-f0-9]{48}\.[a-f0-9]{64}$/.test(token)) return false;
  const split = token.lastIndexOf('.');
  const actual = token.slice(split + 1), expected = await signature(secret, token.slice(0, split));
  let difference = 0;
  for (let i = 0; i < expected.length; i++) difference |= actual.charCodeAt(i) ^ expected.charCodeAt(i);
  return difference === 0;
}

/** The gift opens exactly one lesson page and its audio, nothing else. */
export function giftCoversPath(pathname: string, lessonId: number | null) {
  return lessonId === GIFT_LESSON_ID || pathname === GIFT_AUDIO_PATH;
}

type Row = { id: string; status: string; unsubscribe_token: string };

export async function subscribe(db: D1Database, value: Record<string, unknown>) {
  const email = typeof value.email === 'string' ? value.email.trim() : '';
  const normalized = email.toLowerCase();
  if (!validEmail(normalized)) throw new NewsletterError('Ingresa un email válido.');
  if (value.consent !== true) throw new NewsletterError('Acepta recibir la newsletter para desbloquear la clase.');
  const source = safePath(value.source);
  const now = new Date().toISOString();
  const existing = await db.prepare('SELECT id,status,unsubscribe_token FROM newsletter_subscribers WHERE normalized_email=?').bind(normalized).first<Row>();
  if (existing) {
    // A returning email re-opts in: the form has an explicit consent box.
    await db.prepare("UPDATE newsletter_subscribers SET status='active', consent_at=?, updated_at=?, unsubscribed_at=NULL WHERE id=?").bind(now, now, existing.id).run();
    return { id: existing.id, email: normalized, unsubscribeToken: existing.unsubscribe_token, created: false };
  }
  const id = randomToken(), token = randomToken();
  await db.prepare(`INSERT INTO newsletter_subscribers (id,email,normalized_email,source_path,status,unsubscribe_token,consent_at,created_at,updated_at)
    VALUES (?,?,?,?,'active',?,?,?,?) ON CONFLICT(normalized_email) DO NOTHING`).bind(id, email, normalized, source, token, now, now, now).run();
  const row = await db.prepare('SELECT id,unsubscribe_token FROM newsletter_subscribers WHERE normalized_email=?').bind(normalized).first<Row>();
  if (!row) throw new NewsletterError('No pudimos guardar tu email. Inténtalo de nuevo.', 503);
  return { id: row.id, email: normalized, unsubscribeToken: row.unsubscribe_token, created: row.id === id };
}

export async function unsubscribe(db: D1Database, token: string) {
  if (!/^[a-f0-9]{48}$/.test(token)) return null;
  const row = await db.prepare('SELECT normalized_email FROM newsletter_subscribers WHERE unsubscribe_token=?').bind(token).first<{ normalized_email: string }>();
  if (!row) return null;
  const now = new Date().toISOString();
  await db.prepare("UPDATE newsletter_subscribers SET status='unsubscribed', updated_at=?, unsubscribed_at=COALESCE(unsubscribed_at, ?) WHERE unsubscribe_token=?").bind(now, now, token).run();
  return row.normalized_email;
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export function welcomeEmail(origin: string, unsubscribeToken: string) {
  const lesson = `${origin}${GIFT_LESSON_PATH}`;
  const leave = `${origin}/api/newsletter/baja?t=${unsubscribeToken}`;
  const subject = `Tu clase de regalo: ${GIFT_LESSON_TITLE}`;
  const text = [
    '¡Hola!',
    '',
    `Gracias por sumarte a la newsletter de SpanishCue. Tu clase de gramática PRO ya está desbloqueada en este navegador: «${GIFT_LESSON_TITLE}» (B1).`,
    'Es una clase completa para dar en vivo: explicación, práctica guiada, audio, conversación y escritura. Opinar con «creo que» + indicativo y negar con «no creo que» + subjuntivo.',
    '',
    `Abrir la clase: ${lesson}`,
    '',
    'Si la abres desde otro dispositivo, vuelve a dejar tu email en la página de la clase y se desbloquea ahí también.',
    '',
    'De vez en cuando te voy a escribir con ideas para tus clases de ELE y las clases nuevas de SpanishCue.',
    '',
    'Ale',
    'SpanishCue',
    '',
    `Darte de baja: ${leave}`,
  ].join('\n');
  const html = `<!doctype html><html lang="es"><body style="margin:0;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;color:#17233b">
<div style="max-width:560px;margin:0 auto;padding:28px 20px">
<p style="font-size:13px;color:#2457c5;font-weight:bold;letter-spacing:.04em;margin:0 0 18px">SPANISHCUE</p>
<div style="background:#fff;border-radius:14px;padding:28px 26px;border:1px solid #e3e8f2">
<p style="font-size:17px;margin:0 0 14px">¡Hola!</p>
<p style="font-size:15px;line-height:1.6;margin:0 0 14px">Gracias por sumarte a la newsletter de SpanishCue. Tu clase de gramática PRO ya está desbloqueada en este navegador:</p>
<p style="font-size:18px;line-height:1.4;margin:0 0 6px;font-weight:bold">${escapeHtml(GIFT_LESSON_TITLE)} · B1</p>
<p style="font-size:15px;line-height:1.6;margin:0 0 22px;color:#4a5875">Una clase completa para dar en vivo: explicación, práctica guiada, audio, conversación y escritura. Opinar con «creo que» + indicativo y negar con «no creo que» + subjuntivo.</p>
<p style="margin:0 0 22px"><a href="${escapeHtml(lesson)}" style="display:inline-block;background:#2457c5;color:#fff;text-decoration:none;padding:13px 22px;border-radius:10px;font-size:15px;font-weight:bold">Abrir la clase</a></p>
<p style="font-size:14px;line-height:1.6;margin:0 0 14px;color:#4a5875">Si la abres desde otro dispositivo, vuelve a dejar tu email en la página de la clase y se desbloquea ahí también.</p>
<p style="font-size:15px;line-height:1.6;margin:0">De vez en cuando te voy a escribir con ideas para tus clases de ELE y las clases nuevas de SpanishCue.</p>
<p style="font-size:15px;line-height:1.6;margin:18px 0 0">Ale<br>SpanishCue</p>
</div>
<p style="font-size:12px;color:#7a869e;margin:18px 0 0;text-align:center"><a href="${escapeHtml(leave)}" style="color:#7a869e">Darme de baja</a></p>
</div></body></html>`;
  return { subject, text, html, leave };
}

async function resend(env: NewsletterEnvironment, fetcher: Fetcher, path: string, init: { method: string; body?: unknown; idempotencyKey?: string }) {
  const headers: Record<string, string> = { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' };
  if (init.idempotencyKey) headers['idempotency-key'] = init.idempotencyKey;
  return fetcher(`https://api.resend.com${path}`, { method: init.method, headers, body: init.body === undefined ? undefined : JSON.stringify(init.body), signal: AbortSignal.timeout(8000) });
}

/** Best effort: the subscriber is already saved in D1, so mail or sync failures never fail the signup. */
export async function deliverWelcome(env: NewsletterEnvironment, fetcher: Fetcher, origin: string, subscriber: { id: string; email: string; unsubscribeToken: string; created: boolean }) {
  if (!env.RESEND_API_KEY) return { sent: false, synced: false };
  let synced = false, sent = false;
  try {
    const created = await resend(env, fetcher, '/contacts', { method: 'POST', body: { email: subscriber.email, unsubscribed: false, segments: [{ id: NEWSLETTER_SEGMENT_ID }] } });
    synced = created.ok;
    if (!created.ok) {
      // Already a contact (for example from an earlier signup): re-subscribe and add to the segment.
      const target = encodeURIComponent(subscriber.email);
      const updated = await resend(env, fetcher, `/contacts/${target}`, { method: 'PATCH', body: { unsubscribed: false } });
      const joined = await resend(env, fetcher, `/contacts/${target}/segments/${NEWSLETTER_SEGMENT_ID}`, { method: 'POST' });
      synced = updated.ok && joined.ok;
    }
  } catch { synced = false; }
  if (!subscriber.created) return { sent, synced };
  try {
    const mail = welcomeEmail(origin, subscriber.unsubscribeToken);
    const response = await resend(env, fetcher, '/emails', {
      method: 'POST',
      idempotencyKey: `newsletter-welcome/${subscriber.id}`,
      body: {
        from: NEWSLETTER_FROM, to: [subscriber.email], subject: mail.subject, html: mail.html, text: mail.text,
        headers: { 'List-Unsubscribe': `<${mail.leave}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
        tags: [{ name: 'category', value: 'newsletter_welcome' }],
      },
    });
    sent = response.ok;
  } catch { sent = false; }
  if (!sent || !synced) console.warn('newsletter_delivery', { sent, synced });
  return { sent, synced };
}

export async function markResendUnsubscribed(env: NewsletterEnvironment, fetcher: Fetcher, email: string) {
  if (!env.RESEND_API_KEY) return false;
  try {
    return (await resend(env, fetcher, `/contacts/${encodeURIComponent(email)}`, { method: 'PATCH', body: { unsubscribed: true } })).ok;
  } catch { return false; }
}

export { GIFT_LESSON_PATH };
