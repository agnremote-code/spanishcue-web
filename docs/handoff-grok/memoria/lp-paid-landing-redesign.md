---
name: lp-paid-landing-redesign
description: Paid-traffic landings /lp/spanish-teacher-resources + /lp/online-spanish-teaching-resources: PR #148 redesign, PR #149 scroll-jump fix + product-led hero (both live)
metadata:
  type: project
  modified: 2026-10-08T11:18:06.122Z
---

2026-10-08 ~11:17Z SHIPPED (PR #148, main 79fceb6, staging + production deploy and smoke green): the two Meta/Zeely landings /lp/spanish-teacher-resources and /lp/online-spanish-teaching-resources render `app/marketing-landing/PaidLanding.tsx` (+ paid-copy.ts, paid-landing.css, PaidLandingTracker.tsx). Other /lp slugs still use MarketingLanding. Hero "Stop Planning Spanish Lessons From Scratch.", real product screenshots in public/lp/*.webp, male teacher photo = existing AI campaign asset /brand/campaign/free-lesson.webp, no popup. `CheckoutButton variant="landing"` shows the 1-day US$2 trial first, US$15.50/month second, PayPal (US$15/month) as a text link; same Paddle/PayPal/claim code. New English literals approved in docs/audits/paid-landing-english-copy-additions-20261008.json. Report + before/after/checkout screenshots in /mnt/project-files/lp-redesign/.

Gotchas found: the shallow clone needs `git fetch --depth=1 origin <sha>` for every 40-char SHA in tests/ and scripts/ before `npm test` passes (english-copy base, entonacion baselines). Local QA: `npm run build`, run wrangler dev on dist/server/wrangler.json with local D1 migrations, Playwright from /opt/node22/lib/node_modules; mock /api/billing/founder-status as live to see the checkout buttons. Headless fullPage screenshots blank some large webp images, so stitch viewport screenshots instead. Related: [[seo-foundation-pr126]].

2026-10-08 ~15:10Z SHIPPED PR #149 (main c7087e0, staging + production deploy and smoke green). Scroll-jump root causes fixed:
- the landing checkout now reserves its final layout while founder-status loads, using one shared request;
- AuthSessionSync reloaded forever on pages where the Worker never resolved the session. The Worker now sets `x-spanishcue-identity-checked` on identity-aware paths (now including /lp), and the reload only happens where that header is set;
- LocaleProvider no longer replaces an explicit ?lang=.

New hero is "Stop building slides. Start teaching experiences." on a dark navy band with marigold accent, real Noche/bosque/USA-map screenshots, and both Paddle offers above the fold. The page also has a flow strip, a worksheet-vs-lesson block, 6 tiles and a fixed mobile CTA toggled by PaidLandingTracker.

Report: /mnt/project-files/lp-redesign/v2/INFORME.md. Local QA scripts were in /tmp/claude-0/qa, which is ephemeral.
