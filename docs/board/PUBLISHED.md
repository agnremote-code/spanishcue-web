# Publication log

Every change the board publishes to production that a learner or teacher can see: lessons, levels, repairs and SEO pages. Newest first. An entry is added **only after production verification**. A PR that merged but whose deploy wasn't verified is listed under "Pending verification", never as published.

Entry format:

```
## YYYY-MM-DD — <title> (<unit type: new world | new level | repair | SEO/page>)
- URL(s): https://spanishcue.com/...
- Level(s) / objectives: ...
- PR / merged SHA / production deploy run: ...
- Production smoke evidence: ...
- Concept file / LQG review file: ...
- Built by / reviewed by: ...
- Known limitations: ...
```

## Pending verification

## 2026-10-30 — «Hospital San Casi Vivo»: the 3D world frees the GPU on unmount (repair)
- URL(s): https://spanishcue.com/hospital-san-casi-vivo (PRO; anonymous users → /acceso).
- Level(s) / objectives: unchanged. No lesson content changed.
- PR / merged SHA / production deploy run: pending.
- Production smoke evidence: pending.
- Concept file / LQG review file: [docs/audits/hospital-san-casi-vivo-repair-gpu-20261030.md](../audits/hospital-san-casi-vivo-repair-gpu-20261030.md).
- Built by / reviewed by: facilitator / Alejandro (code review APPROVE).
- Known limitations: client-side fix; the before/after evidence comes from the SwiftShader browser check, not a real device.

## Published

## 2026-10-28 — «La feria de Villaluz»: the 3D world frees the GPU on unmount (repair)
- URL(s): https://spanishcue.com/la-feria-de-villaluz (PRO; anonymous users → /acceso).
- Level(s) / objectives: A2, unchanged. No lesson content changed.
- PR / merged SHA / production deploy run: PR #287 → `bea20888c9e9cafaaf80beb98746667f4957a544`; CI + Auto Merge 40622898546 (attempt 2), Deploy Staging 40625198904, Deploy Production 40625458992, all successful (Worker version ac61fd17-9ab5-4855-8feb-cb44f7233f4e).
- Production smoke evidence: the production workflow's `scripts/production-smoke.mjs` run against https://spanishcue.com (job 122609179330, 2026-10-28T03:16Z) returned `"passed": true`, including `/la-feria-de-villaluz` 302, `/audio/escucha-3d/feria-a2-baile.mp3` 403 and `/resources/spanish-conversation-activity-a2-la-feria-de-villaluz` 200. The rollback was skipped.
- Concept file / LQG review file: [docs/audits/la-feria-de-villaluz-repair-gpu-20261028.md](../audits/la-feria-de-villaluz-repair-gpu-20261028.md).
- Built by / reviewed by: facilitator / Alejandro (code review APPROVE, delta APPROVE).
- Known limitations: the fix is client-side, so production smoke can show only that the release deployed and the world still gates and serves. The before/after evidence comes from the SwiftShader browser check, not from a real device.

## 2026-10-27 — 72 retired /resources URLs 308-redirect to their lesson page (SEO/page)
- URL(s): 72 old `https://spanishcue.com/resources/...` slugs listed in `app/resource-legacy-slugs.ts`. Example: `/resources/spanish-grammar-lesson-a1-a2-ser-estar-y-hay-describir-personas-y-lugares` → `/resources/spanish-grammar-lesson-a1-ser-estar-y-hay-describir-personas-y-lugares`.
- Level(s) / objectives: n/a. This is technical SEO: these URLs had been listed in the sitemap and were returning 404 or duplicate pages.
- PR / merged SHA / production deploy run: PR #284 → `c8975523e8450755bf0f5c39eb5c2d4c71a46f7b`; CI + Auto Merge 40438086546, Deploy Staging 40439807119, Deploy Production 40440088211, all successful (Worker version b3abc59f-a34e-4394-a2d1-9f9f201deac0).
- Production smoke evidence: the production workflow's `scripts/production-smoke.mjs` run against https://spanishcue.com (job 121978101510, 2026-10-27T02:46Z) returned `"passed": true`. The example path returned `status: 308`, and the script asserted a same-origin `Location` pointing at the current lesson page. The other 71 slugs are covered by the Worker-rendered test and the guard test, not by production smoke.
- Concept file / LQG review file: n/a (no lesson content).
- Built by / reviewed by: facilitator (audit by Alejandro) / Sofia (APPROVE).
- Known limitations: `?level=` is not carried through the redirect. Retired id 222 stays a 404.

## 2026-10-21 — LES-001 «La feria de Villaluz», A2 (new world)
- URL(s):
  - https://spanishcue.com/la-feria-de-villaluz (PRO; anonymous users → /acceso);
  - https://spanishcue.com/resources/spanish-conversation-activity-a2-la-feria-de-villaluz (teacher page).
- Level(s) / objectives: A2 only. The 8 circles and their objectives:

  | Circle | Objective |
  |---|---|
  | informacion | `a2.gram.relativo-que` |
  | churreria | `a2.gram.condicional-cortesia` |
  | tombola | `a2.fun.favores` |
  | noria | `a2.fun.reclamar` |
  | artesania | `a2.fun.comparar-elegir` |
  | escenario | `a2.gram.estar-gerundio` |
  | fotos | `a2.gram.imperativo-pronombres` |
  | baile | `a2.fun.anecdota` (closing) |

  Both modes are in the same world: Conversación (8 scenes, with «Busca y describe» at 1, 6 and 7 plus a transfer set) and Comprensión auditiva (8 own listenings, TTS).
- PR / merged SHA / production deploy run: PR #251 → `6383b3b6de1d09398523619bedca77602da7fd06`. CI + Auto Merge 39547852346 success; staging 39549313371 success; production 39549567404 success (2026-10-21 05:29 UTC).
- Production smoke evidence:
  - The workflow's own "Production smoke" step passed (`"passed": true`, origin https://spanishcue.com). Rollback was skipped.
  - That generic smoke did not cover the Feria URLs, and the 2026-10-21 routine could not reach spanishcue.com (egress proxy), so the entry stayed pending until the changed-URL smoke below.
- Concept file / LQG review file:
  - design: LESSON-DECISION-001 v5;
  - LQG: [docs/audits/la-feria-de-villaluz-pedagogy-20261021.md](../audits/la-feria-de-villaluz-pedagogy-20261021.md);
  - G4: [docs/audits/la-feria-de-villaluz-g4-review-20261021.md](../audits/la-feria-de-villaluz-g4-review-20261021.md).
- Built by / reviewed by:
  - built by: Martin (content) and Sofia (build, 2026-10-17 and 2026-10-21);
  - reviewed by: Alejandro (G4: APPROVE after R1–R7) and a fresh QA agent (RELEASE-READY at d7299793).
- Known limitations:
  - The Look contract was rated from a SwiftShader render, not a real device (G5(b) is outstanding, so it is not featured).
  - fps on a real Android has not been measured.
  - Nobody has listened to the TTS clips.
  - Busca candidates are small on 390 px portrait.
  - The AC12 pilot is post-launch.
- **Changed-URL smoke VERIFIED 2026-10-22** (recorded by the Friday 2026-10-23 routine): Production Smoke Monitor run [39857963446](https://github.com/agnremote-code/spanishcue-web/actions/runs/39857963446) on main `373e8b33` (production = `373e8b33`, deploy run 39829348447) passed its "Run production smoke" step against `https://spanishcue.com`. Since #266 that script (`scripts/production-smoke.mjs`) asserts, for both `/hospital-san-casi-vivo` and `/la-feria-de-villaluz`: anonymous → redirect to `/acceso`; for the Feria, `/audio/escucha-3d/feria-a2-baile.mp3` → 403; and each `/resources/…` teacher page → 200 with its 3D `<title>`, «Inside the 3D world» and a `BreadcrumbList`. The earlier monitor run 39723380150 on `97f263d` passed the same checks.

## 2026-10-20 — SEO fix 1: 3D world teacher pages, honest level range, breadcrumbs on /resources (SEO/page)
- URL(s): every `/resources/{slug}` page (BreadcrumbList, level range); the 5 3D world pages such as https://spanishcue.com/resources/spanish-conversation-activity-a0-c2-hospital-san-casi-vivo ("3D" title and description, "Inside the 3D world", "More 3D Spanish worlds").
- PR / merged SHA / deploy: PR #224 → `c06c01c325f5188fc2ca6d643eb1bfcc99e41d16`. CI + Auto Merge 39358483836 success; staging run 39359479235 success; production run 39359743902 success (2026-10-20 02:38 UTC).
- Production smoke evidence: the workflow's own "Production smoke" step passed (`"passed": true`, origin https://spanishcue.com; status checks including the billing/auth refusals, report-launcher and forged-owner checks). Rollback was skipped.
- Why it was pending until 2026-10-22: the 2026-10-20 routine's sandbox could not reach spanishcue.com (`connect_rejected`), so the changed-URL content smoke was not run then. The automated check below covers the title, «Inside the 3D world», the BreadcrumbList and the anonymous redirect. It does **not** assert the `educationalLevel` array; that one item is still unverified in production.
- Built by / reviewed by: Alejandro stream (2026-10-17 author) / Sofia (code, APPROVE at 5ea0bcc), Martin role as a fresh agent (QA: RELEASE-READY at 990d1366).
- Known limitations: no Search Console evidence of effect yet (Windsor reads blocked, STATUS R0). The 3D search-demand hypothesis is untested.
- **Changed-URL smoke VERIFIED 2026-10-22** (recorded by the Friday 2026-10-23 routine): Production Smoke Monitor run [39857963446](https://github.com/agnremote-code/spanishcue-web/actions/runs/39857963446) on main `373e8b33` (production = `373e8b33`, deploy run 39829348447) passed its "Run production smoke" step against `https://spanishcue.com`. Since #266 that script (`scripts/production-smoke.mjs`) asserts, for both `/hospital-san-casi-vivo` and `/la-feria-de-villaluz`: anonymous → redirect to `/acceso`; for the Feria, `/audio/escucha-3d/feria-a2-baile.mp3` → 403; and each `/resources/…` teacher page → 200 with its 3D `<title>`, «Inside the 3D world» and a `BreadcrumbList`. The earlier monitor run 39723380150 on `97f263d` passed the same checks.

## 2026-10-17 — PERF-001: ~1 s TTFB fixed on every Worker-served URL (repair)
- URL(s): all Worker-served URLs on https://spanishcue.com (pages, `/robots.txt`, `/sitemap.xml`, APIs, redirects).
- Change: the 120 paid client chunks (10.5 MB) moved out of the Worker bundle into AES-GCM-encrypted static blobs under `/_protected-client/`. They are served through the premium-audio decrypt path, after the same full-access check. Isolate heap went from 133.7 to 95.3 MiB (local workerd), below Cloudflare's 128 MB limit, so isolates are reused instead of being replaced after every request. Evidence: [perf-001-notes.md](perf-001-notes.md).
- PR / merged SHA / deploy: PR #221 → `e3c42f18efef335e6549ceb5afc1e61a9e644b78`. CI + Auto Merge 38936733505 success; staging run 38938666820 success; production run 38938998017 success.
- Production smoke evidence (2026-10-17 17:24 UTC, ×3): all 10 smoke URLs gave their expected status. The PRO route `/hospital-san-casi-vivo` gave 302 to `/acceso`, and `/api/progress` gave 401. Raw TTFB was 0.03–0.15 s (before: 0.92–2.97 s). The anonymous protected chunk `/assets/OutputPass-WUcxeEwl.js` gave 403 `private, no-store`, and a direct `/_protected-client/*.bin` request gave 404.
- Server time (TTFB − TLS, median of 10): spanishcue.com `/favicon.ico` 1.040 → 0.011 s and `/robots.txt` 1.085 → 0.012 s; staging workers.dev `/favicon.ico` 0.917 → 0.014 s and `/robots.txt` 0.922 → 0.012 s. The facilitator's independent check measured 12 ms and 7–9 ms. Alejandro's independent check (2026-10-17) measured 0.012 s / 0.012 s on production and 0.011 s / 0.013 s on staging, and found a protected chunk returning 403 to anonymous GET, forged-owner, HEAD and POST requests.
- Built by / reviewed by: Sofia / Alejandro (CHANGES on e81a7ee; APPROVE on 4badfa1).
- Known limitations: mechanism consistent with the outcome, but isolate memory was not directly observed. Authorized paid-chunk delivery cannot be smoked without a paid session (same decrypt path as premium audio; covered by a local decrypt test). Both vantage points are on the same client network, on different hostnames. Two local test files need ffmpeg, which the dev machine lacks; they passed in CI.

## 2026-10-16 — SEO-001: /argento hreflang fix + `?lang=` regression guard (SEO/page)
- URL(s): https://spanishcue.com/argento
- Change: removed the invalid English hreflang that pointed at the 301-redirecting `/argento?lang=en`, so only the canonical remains. A new test in `tests/seo-architecture.test.mjs` scans `app/` and fails on any `?lang=` in a canonical, hreflang, sitemap or absolute site URL. The language-pair test now compares normalized paths.
- PR / merged SHA / deploy: PR #217 → `6c7379bc832f0e35c95dfd2ec42e776840e77ad8`. Staging run 38926800649 success; production run 38927285596 success.
- Production smoke evidence (2026-10-16): `curl -s https://spanishcue.com/argento` → `<link rel="canonical" href="https://spanishcue.com/argento"/>`, with no alternate links.
- Built by / reviewed by: Alejandro / Sofia (APPROVE on c771c4a; three optional notes applied in b8fbfc7).
- Known limitations: two local test failures, caused by missing ffmpeg on the dev machine, passed in CI. Search impact won't be visible in Search Console for days to weeks.
