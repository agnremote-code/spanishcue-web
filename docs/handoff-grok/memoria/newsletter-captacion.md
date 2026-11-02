---
name: newsletter-captacion
description: Email capture popup + gift PRO grammar class 393 + Resend newsletter segment (PR #303, 2026-10-30); how to send newsletters
metadata:
  type: project
  modified: 2026-10-30T15:44:24.296Z
---
Thread «Captar emails y enviar newsletters» (cmsg_01Gr5R4j3t2Yet65UcmhcVhAA3ymUpQKrtjnUn5LAA735f). Ale 2026-10-30: collect emails with a popup offering a GRAMMAR class unlocked by email, then send newsletters. PR #303 LIVE 2026-10-30 16:2xZ (prod deploy main 4827f7f, newsletter table created). Pending: Ale test signup on /clase-gratis to confirm Resend contact sync + welcome mail.

- Popup app/newsletter/EmailGiftPopup.tsx mounted in GrowthFooter (all SEO pages incl. /material-ele, coordinated with the SEO thread). Client-only, waits for cookie banner, 25 s / 40 % scroll, 14-day snooze. Spanish copy only (also shows on English SEO pages). /clase-gratis = same form.
- Gift: PRO class 393 «Opinión afirmativa frente a opinión negada» B1 + /audio/grammar-live/393.mp3 via signed cookie __Host-sc-regalo (AUTOESTUDIO_SHARE_SECRET). Change gift in app/newsletter/gift.ts. Soft gate per browser; unsubscribing keeps the class.
- D1 newsletter_subscribers (drizzle/0018). Owner list GET /api/admin/newsletter.
- Resend account is SHARED with LogoCut: segment «General» is LogoCut's. SpanishCue segment «SpanishCue · Newsletter profes ELE» id 0cc01e46-2405-4064-b35b-999ed0c27026. Sender novedades@spanishcue.com (domain verified). Welcome email + one-click unsubscribe /api/newsletter/baja.
- Sending a newsletter: Claude drafts a Resend broadcast to that segment with {{{RESEND_UNSUBSCRIBE_URL}}}; send only when Ale asks. Unknown whether the Worker's RESEND_API_KEY may create contacts (may be send-only): if contacts don't appear in the segment, sync from D1. Docs: docs/newsletter.md.
- Nurture sequence (asked by Google Ads thread 2026-10-30): this thread owns it. 5 emails days 0/2/4/7/10, one real free class each (40,350,389,439,468,515, 239, Noche abierta centre, Hospital reception), CTA «Desbloquear todo · US$15,50/mes» → /pricing?utm_source=email&utm_campaign=nurture_dN. Ale chose a 30-day money-back guarantee (via Ads thread) → mention in emails 4–5. Activation waits for Ale's answer on the decision card (never self-activate). Only popup/clase-gratis subscribers, not account signups.
