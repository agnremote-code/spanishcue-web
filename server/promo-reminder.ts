import { VERIFICATION_FROM } from "./verification-template";

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
    `Tu primera semana de SpanishCue PRO por US$0,99 termina el ${es}. Ese día tu suscripción se renueva sola a US$19,90 por mes, con el mismo medio de pago.`,
    "Si quieres seguir, no tienes que hacer nada: conservas todas las clases sin interrupción.",
    `Si prefieres no continuar, cancela antes de esa fecha desde tu cuenta, en la pestaña Suscripción: ${account}. No se te cobrará nada más. Si ya cancelaste, ignora este mensaje.`,
    "—",
    "Hi,",
    `Your first week of SpanishCue PRO for US$0.99 ends on ${en}. On that day your subscription renews automatically at US$19.90 per month, using the same payment method.`,
    "To keep going, you do not need to do anything: you keep every lesson with no interruption.",
    `If you would rather not continue, cancel before that date from your account, in the Subscription tab: ${account}. You will not be charged again. If you already cancelled, please ignore this message.`,
    "SpanishCue",
  ];
  const html = `<!doctype html><html lang="es"><body style="font-family:Arial,sans-serif;color:#14203d;line-height:1.6;max-width:600px;margin:24px auto;padding:20px">${paragraphs.map((line) =>
    line === "—" ? '<hr style="border:0;border-top:1px solid #d5dbe6;margin:24px 0">'
      : `<p>${escapeHtml(line).replace(account, `<a href="${account}">${account}</a>`)}</p>`).join("")}</body></html>`;
  return { subject: "Tu semana por US$0,99 termina pronto · Your US$0.99 week ends soon", text: paragraphs.join("\n\n"), html };
}

/**
 * Schedules, two days before the first full charge of a promo week, one mail to the subscriber.
 * Best effort: it never throws, so a mail problem cannot fail the payment that grants access.
 * The idempotency key keeps webhook retries and the browser confirmation from scheduling it twice.
 */
export async function schedulePromoReminder(
  input: unknown,
  db: D1Database,
  details: { userId: string; provider: "paddle" | "paypal"; subscriptionId: string; chargeAt: number },
) {
  try {
    const env = (input && typeof input === "object" ? input : {}) as ReminderEnvironment;
    const now = Math.floor(Date.now() / 1000);
    if (!env.RESEND_API_KEY || !Number.isInteger(details.chargeAt) || details.chargeAt <= now) return false;
    const user = await db.prepare(`SELECT email FROM users WHERE id = ? AND status = 'active' LIMIT 1`).bind(details.userId).first<{ email: string | null }>();
    const recipient = user?.email?.trim() || "";
    if (!/^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/.test(recipient)) return false;
    // Two days before the charge; a late confirmation still leaves at least a few minutes' notice.
    const sendAt = Math.max(details.chargeAt - 2 * 86400, now + 300);
    const message = promoReminderMessage(details.chargeAt);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json",
        "idempotency-key": `promo-week-reminder/${details.provider}/${details.subscriptionId}`,
      },
      body: JSON.stringify({ from: VERIFICATION_FROM, to: [recipient], ...message, scheduled_at: new Date(sendAt * 1000).toISOString() }),
      signal: AbortSignal.timeout(8000),
    });
    const result = await response.json().catch(() => null) as { id?: unknown } | null;
    if (!response.ok || typeof result?.id !== "string") throw new Error("delivery");
    return true;
  } catch {
    console.warn("promo_reminder_schedule_failed");
    return false;
  }
}
