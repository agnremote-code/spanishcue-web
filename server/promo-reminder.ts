import { VERIFICATION_FROM } from "./verification-template";
import { PROMO_REMINDER_DAYS_BEFORE } from "../app/promo-config";

type ReminderEnvironment = { RESEND_API_KEY?: string };

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);

function longDate(seconds: number, locale: "es" | "en") {
  return new Intl.DateTimeFormat(locale === "es" ? "es" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
    .format(new Date(seconds * 1000));
}

/** Text and HTML of the reminder: what will be charged, when, and how to cancel. */
export function promoReminderMessage(chargeAt: number) {
  const es = longDate(chargeAt, "es"), en = longDate(chargeAt, "en");
  const account = "https://spanishcue.com/cuenta";
  const paragraphs = [
    "Hola:",
    `Tu prueba de SpanishCue PRO por US$0,99 termina el ${es}. Ese día tu suscripción se renueva sola a US$19,90 por mes, con el mismo medio de pago.`,
    "Si quieres seguir, no tienes que hacer nada: conservas todas las clases sin interrupción.",
    `Si prefieres no continuar, cancela antes de esa fecha desde tu cuenta, en la pestaña Suscripción: ${account}. No se te cobrará nada más. Si ya cancelaste, ignora este mensaje.`,
    "—",
    "Hi,",
    `Your SpanishCue PRO trial for US$0.99 ends on ${en}. On that day your subscription renews automatically at US$19.90 per month, using the same payment method.`,
    "To keep going, you do not need to do anything: you keep every lesson with no interruption.",
    `If you would rather not continue, cancel before that date from your account, in the Subscription tab: ${account}. You will not be charged again. If you already cancelled, please ignore this message.`,
    "SpanishCue",
  ];
  const html = `<!doctype html><html lang="es"><body style="font-family:Arial,sans-serif;color:#14203d;line-height:1.6;max-width:600px;margin:24px auto;padding:20px">${paragraphs.map((line) =>
    line === "—" ? '<hr style="border:0;border-top:1px solid #d5dbe6;margin:24px 0">'
      : `<p>${escapeHtml(line).replace(account, `<a href="${account}">${account}</a>`)}</p>`).join("")}</body></html>`;
  return { subject: "Tu prueba por US$0,99 termina pronto · Your US$0.99 trial ends soon", text: paragraphs.join("\n\n"), html };
}

const STUDENTS = "https://spanishcue.com/cuenta?tab=alumnos";
const SUBSCRIPTION = "https://spanishcue.com/cuenta?tab=suscripcion";

function simpleHtml(paragraphs: string[]) {
  const linked = (line: string) => [STUDENTS, SUBSCRIPTION].reduce((html, url) => html.replace(url, `<a href="${url}">${url}</a>`), escapeHtml(line));
  return `<!doctype html><html lang="es"><body style="font-family:Arial,sans-serif;color:#14203d;line-height:1.6;max-width:600px;margin:24px auto;padding:20px">${paragraphs.map((line) => `<p>${linked(line)}</p>`).join("")}</body></html>`;
}

/**
 * Onboarding during the paid trial (owner approval 2026-11-26): day 0 create the first student, day 2
 * send the first homework, day 8 look at the results before the next class. The value of PRO shows
 * when a teacher uses it with a real student, so each mail asks for one step only.
 */
export function promoOnboardingMessages(chargeAt: number) {
  const date = longDate(chargeAt, "es");
  const mail = (key: string, day: number, subject: string, paragraphs: string[]) =>
    ({ key, day, subject, text: paragraphs.join("\n\n"), html: simpleHtml(paragraphs) });
  return [
    mail("dia-0", 0, "Tu prueba PRO empezó: crea tu primer alumno", [
      "Hola:",
      "Ya tienes todas las clases de SpanishCue PRO. Lo que más sirve es usarlas con un alumno real desde hoy.",
      `Primer paso, dos minutos: crea tu primer alumno y elige la clase que vas a dar esta semana: ${STUDENTS}`,
      "En la clase la abres en pantalla compartida y listo.",
      "SpanishCue",
    ]),
    mail("dia-2", 2, "Manda la primera tarea a tu alumno", [
      "Hola:",
      "Después de la clase, mándale a tu alumno la tarea. Le llega un enlace, la hace desde el móvil y tú ves sus resultados antes de la próxima clase.",
      `Se asigna desde tu cuenta, en la pestaña Alumnos: ${STUDENTS}`,
      "SpanishCue",
    ]),
    mail("dia-8", 8, "Mira cómo le fue a tu alumno con la tarea", [
      "Hola:",
      `Antes de tu próxima clase, revisa qué hizo tu alumno y en qué se equivocó. Así empiezas la clase por lo que necesita: ${STUDENTS}`,
      `Tu prueba termina el ${date}. Ese día la suscripción se renueva a US$19,90 por mes. Si no quieres seguir, cancela antes desde tu cuenta, en la pestaña Suscripción: ${SUBSCRIPTION}`,
      "SpanishCue",
    ]),
  ];
}

async function scheduleMail(apiKey: string, idempotencyKey: string, body: Record<string, unknown>) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json", "idempotency-key": idempotencyKey },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
  });
  const result = await response.json().catch(() => null) as { id?: unknown } | null;
  if (!response.ok || typeof result?.id !== "string") throw new Error("delivery");
}

/**
 * Schedules the mails of a promo trial: the charge reminder PROMO_REMINDER_DAYS_BEFORE days before the first
 * full charge (Visa asks for at least 7 days, Mastercard for 3 to 7), and the onboarding mails of days 0, 2
 * and 8 (only those that still fall before the charge). `startedAt` is when the trial began.
 * Best effort: it never throws, so a mail problem cannot fail the payment that grants access.
 * The idempotency keys keep webhook retries and the browser confirmation from scheduling anything twice.
 */
export async function schedulePromoReminder(
  input: unknown,
  db: D1Database,
  details: { userId: string; provider: "paddle" | "paypal"; subscriptionId: string; chargeAt: number; startedAt?: number },
) {
  try {
    const env = (input && typeof input === "object" ? input : {}) as ReminderEnvironment;
    const now = Math.floor(Date.now() / 1000);
    if (!env.RESEND_API_KEY || !Number.isInteger(details.chargeAt) || details.chargeAt <= now) return false;
    const user = await db.prepare(`SELECT email FROM users WHERE id = ? AND status = 'active' LIMIT 1`).bind(details.userId).first<{ email: string | null }>();
    const recipient = user?.email?.trim() || "";
    if (!/^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/.test(recipient)) return false;
    const reference = `${details.provider}/${details.subscriptionId}`;
    const startedAt = Number.isInteger(details.startedAt) && details.startedAt! <= now ? details.startedAt! : now;
    let scheduled = 0;
    for (const mail of promoOnboardingMessages(details.chargeAt)) {
      const sendAt = Math.max(startedAt + mail.day * 86400, now + 120);
      // A mail whose day already passed by more than a day, or that would land after the charge, is skipped.
      if (sendAt - (startedAt + mail.day * 86400) > 86400 || sendAt >= details.chargeAt - 3600) continue;
      try {
        await scheduleMail(env.RESEND_API_KEY, `promo-onboarding/${mail.key}/${reference}`, {
          from: VERIFICATION_FROM, to: [recipient], subject: mail.subject, text: mail.text, html: mail.html,
          scheduled_at: new Date(sendAt * 1000).toISOString(),
        });
        scheduled++;
      } catch {
        console.warn("promo_onboarding_schedule_failed");
      }
    }
    // A late confirmation still leaves at least a few minutes' notice.
    const sendAt = Math.max(details.chargeAt - PROMO_REMINDER_DAYS_BEFORE * 86400, now + 300);
    const message = promoReminderMessage(details.chargeAt);
    await scheduleMail(env.RESEND_API_KEY, `promo-week-reminder/${reference}`,
      { from: VERIFICATION_FROM, to: [recipient], ...message, scheduled_at: new Date(sendAt * 1000).toISOString() });
    if (scheduled === 0) console.warn("promo_onboarding_none_scheduled");
    return true;
  } catch {
    console.warn("promo_reminder_schedule_failed");
    return false;
  }
}
