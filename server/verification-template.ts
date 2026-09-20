import { firebaseConfig } from "../app/firebase-config";

type Locale = "es" | "en";
export const VERIFICATION_FROM = "SPANISHCUE <verify@spanishcue.com>";

export function brandedVerificationUrl(firebaseLink: string, locale: Locale): string {
  const link = new URL(firebaseLink);
  const allowedHosts = [firebaseConfig.authDomain, `${firebaseConfig.projectId}.firebaseapp.com`, "spanishcue.com"];
  if (link.protocol !== "https:" || !allowedHosts.includes(link.hostname) ||
      link.username || link.password || link.port ||
      link.searchParams.get("mode") !== "verifyEmail" ||
      !link.searchParams.get("oobCode") || !link.searchParams.get("apiKey") ||
      link.searchParams.has("status")) throw new Error("FIREBASE_ACTION_LINK_INVALID");
  // Change only the handler location. Preserve Firebase's complete query string,
  // including its exact oobCode, apiKey, continueUrl and any future parameters.
  const branded = new URL("https://spanishcue.com/auth/action");
  branded.search = link.search;
  if (!branded.searchParams.has("lang")) branded.searchParams.set("lang", locale);
  return branded.toString();
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);

export function verificationEmail(locale: Locale, actionUrl: string) {
  const copy = locale === "en" ? {
    subject: "Your SPANISHCUE library is almost ready",
    headline: "Ready to teach?",
    lead: "Just one step left.",
    body: "Verify your email to activate your teacher account and enter your SPANISHCUE lesson library.",
    next: "Your next lessons are already waiting. Choose one, open it, and start teaching.",
    cta: "Verify my email",
    secure: "This link is personal and secure.",
    newest: "If you requested a new verification email, always use the most recent message.",
    fallback: "If the button does not work, copy and open this link:",
  } : {
    subject: "Tu biblioteca SPANISHCUE está casi lista",
    headline: "¿Listo para enseñar?",
    lead: "Solo falta un paso.",
    body: "Verificá tu email para activar tu cuenta de profesor y entrar a tu biblioteca SPANISHCUE.",
    next: "Tus próximas clases ya están listas. Elegí una, abrila y empezá a enseñar.",
    cta: "Verificar mi email",
    secure: "Este enlace es personal y seguro.",
    newest: "Si pediste un nuevo email de verificación, usá siempre el mensaje más reciente.",
    fallback: "Si el botón no funciona, copiá y abrí este enlace:",
  };
  const url = escapeHtml(actionUrl);
  return {
    subject: copy.subject,
    text: `${copy.headline}\n\n${copy.lead}\n\n${copy.body}\n\n${copy.next}\n\n${copy.cta}: ${actionUrl}\n\n${copy.secure}\n${copy.newest}\n\nSPANISHCUE\nChoose. Open. Teach.`,
    html: `<!doctype html>
<html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light dark"><meta name="supported-color-schemes" content="light dark"><title>${copy.subject}</title>
<style>body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}table{border-collapse:collapse}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important}@media(max-width:620px){.shell{width:100%!important}.pad{padding-left:26px!important;padding-right:26px!important}.headline{font-size:38px!important;line-height:1.12!important}.cta{display:block!important}}@media(prefers-color-scheme:dark){.canvas{background-color:#0b1125!important}.card{background-color:#14203d!important}.ink{color:#f5f7ff!important}.muted{color:#c2cce2!important}.note{background-color:#1b294a!important}.footer{color:#c2cce2!important}.cta{background-color:#4266f5!important;color:#ffffff!important}}</style></head>
<body class="canvas" style="margin:0;padding:0;background-color:#edf1f8;font-family:Arial,Helvetica,sans-serif;color:#14203d;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">${copy.lead} ${copy.next}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="canvas" bgcolor="#edf1f8"><tr><td align="center" style="padding:32px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" class="shell card" bgcolor="#ffffff" style="width:600px;max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;">
<tr><td class="pad" bgcolor="#101b3b" style="padding:30px 44px;background-color:#101b3b;border-bottom:5px solid #4266f5;"><a href="https://spanishcue.com" style="font-size:22px;font-weight:800;letter-spacing:2px;text-decoration:none;color:#ffffff;">SPANISHCUE</a></td></tr>
<tr><td class="pad" style="padding:44px 44px 18px;"><h1 class="headline ink" style="margin:0 0 24px;color:#101b3b;font-family:Georgia,'Times New Roman',serif;font-size:46px;line-height:1.1;font-weight:400;">${copy.headline}</h1><p class="ink" style="margin:0 0 16px;font-size:19px;line-height:1.5;font-weight:bold;color:#14203d;">${copy.lead}</p><p class="muted" style="margin:0 0 18px;color:#465474;font-size:16px;line-height:1.7;">${copy.body}</p><p class="muted" style="margin:0;color:#465474;font-size:16px;line-height:1.7;">${copy.next}</p></td></tr>
<tr><td class="pad" style="padding:18px 44px 34px;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" bgcolor="#3155e7" style="background-color:#3155e7;border-radius:8px;mso-padding-alt:18px 24px;"><a class="cta" href="${url}" style="display:block;padding:18px 24px;border:1px solid #3155e7;border-radius:8px;background-color:#3155e7;color:#ffffff;text-decoration:none;font-size:17px;line-height:24px;font-weight:bold;text-align:center;mso-padding-alt:0;">${copy.cta}</a></td></tr></table></td></tr>
<tr><td class="pad" style="padding:0 44px 38px;"><table role="presentation" width="100%" class="note" bgcolor="#f1f4fb" style="background-color:#f1f4fb;border-radius:8px;"><tr><td style="padding:20px 22px;"><p class="ink" style="margin:0 0 8px;color:#14203d;font-size:14px;line-height:1.6;font-weight:bold;">${copy.secure}</p><p class="muted" style="margin:0;color:#53617d;font-size:14px;line-height:1.6;">${copy.newest}</p></td></tr></table><p class="muted" style="margin:22px 0 6px;font-size:12px;line-height:1.6;color:#66738d;">${copy.fallback}</p><p style="margin:0;word-break:break-all;overflow-wrap:anywhere;"><a class="muted" href="${url}" style="font-size:12px;line-height:1.6;color:#526391;text-decoration:underline;word-break:break-all;">${url}</a></p></td></tr>
</table><table role="presentation" width="100%"><tr><td align="center" class="footer" style="padding:26px 12px 8px;color:#586782;font-size:12px;line-height:1.8;"><strong style="letter-spacing:1.5px;">SPANISHCUE</strong><br>Choose. Open. Teach.</td></tr></table>
</td></tr></table></body></html>`,
  };
}
