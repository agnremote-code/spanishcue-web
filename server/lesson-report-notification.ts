import 'server-only';
import { ownerIdentityFromEnvironment } from '../app/firebase-session';
import { VERIFICATION_FROM } from './verification-template';
import type { validateReport } from '../app/lesson-reports/service';

export type ReportNotificationEnvironment = {
  RESEND_API_KEY?: string;
  LESSON_REPORT_NOTIFICATION_EMAIL?: string;
  CHESPANISH_OWNER_EMAIL?: string;
};

type Report = ReturnType<typeof validateReport>;
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);

/** Called only by the successful INSERT winner, never by an idempotent replay. */
export async function notifyLessonReport(
  env: ReportNotificationEnvironment, id: string, report: Report, createdAt: string,
): Promise<void> {
  try {
    const recipient = (env.LESSON_REPORT_NOTIFICATION_EMAIL || ownerIdentityFromEnvironment(env).email).trim();
    if (!env.RESEND_API_KEY || !/^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/.test(recipient)) {
      throw new Error('configuration');
    }
    const lessonUrl = new URL(report.url, 'https://spanishcue.com');
    const section = report.context.sectionId || report.context.activityId;
    if (section) lessonUrl.hash = encodeURIComponent(section);
    const adminUrl = 'https://spanishcue.com/admin/reportes';
    const fields = [
      ['Clase', report.lesson.title], ['Nivel', report.level], ['Categoría', report.category],
      ['Fecha (UTC)', createdAt],
      ...(['sectionLabel', 'sectionId', 'activityId', 'questionId', 'blockId'] as const)
        .filter(key => report.context[key])
        .map(key => [{ sectionLabel: 'Sección', sectionId: 'Sección ID', activityId: 'Actividad', questionId: 'Pregunta', blockId: 'Bloque' }[key], report.context[key]]),
    ];
    const text = fields.map(([label, value]) => `${label}: ${value}`).join('\n') +
      `\n\nComentario:\n${report.message}\n\nAbrir clase: ${lessonUrl.href}\nVer reportes: ${adminUrl}`;
    const html = `<!doctype html><html lang="es"><body style="font-family:Arial,sans-serif;color:#14203d;line-height:1.6;max-width:600px;margin:24px auto;padding:20px"><h1 style="font-size:22px">Nuevo reporte de SpanishCue</h1><dl>${fields.map(([label, value]) => `<dt style="font-weight:bold">${escapeHtml(label)}</dt><dd style="margin:0 0 12px">${escapeHtml(value)}</dd>`).join('')}</dl><h2 style="font-size:16px">Comentario</h2><p style="white-space:pre-wrap">${escapeHtml(report.message)}</p><p><a href="${escapeHtml(lessonUrl.href)}">Abrir clase y contexto</a> · <a href="${adminUrl}">Ver reportes</a></p></body></html>`;
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json',
        'idempotency-key': `lesson-report/${id}`,
      },
      body: JSON.stringify({ from: VERIFICATION_FROM, to: [recipient],
        subject: `SpanishCue · Nuevo reporte · ${report.lesson.title}`, text, html }),
      signal: AbortSignal.timeout(8000),
    });
    const result = await response.json().catch(() => null) as { id?: unknown } | null;
    if (!response.ok || typeof result?.id !== 'string') throw new Error('delivery');
  } catch {
    // No provider response, error object, report contents, identity or configuration values.
    console.warn('lesson_report_notification_failed');
  }
}
