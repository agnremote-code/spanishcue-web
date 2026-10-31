---
name: security-audit-20261021
description: Security/IP audit 2026-10-21: what is and isn't protected in spanishcue-web, the // path bypass, ABUSE_LIMITER rate limit, pending risks and academy plan
metadata:
  type: project
  modified: 2026-10-21T04:43:20.422Z
---

Thread "Seguridad y protección del contenido" (cmsg_01Gr5R4j3t2Yet65UcmhcVhA5LQ2mxW6JtGsEz5TYEbump), audit of main 28d852a, branch claude/seguridad-proteccion-contenido-20261021. Report docs/security/auditoria-seguridad-2026-10-21.md, copy /mnt/project-files/seguridad/.
PR #252 merged as main 06753de; staging + production deploy (with smoke) green 2026-10-21 05:07Z.

Verified on the locally built Worker (wrangler dev + local D1), not on spanishcue.com (blocked):
- Protected: 303 PRO lessons (HTML + .rsc → 302 /acceso), 122 private JS chunks, 884 premium audios, 240 live-lesson bodies (all AES-GCM, key only in dist/server). No source maps, no Vite manifest, no secrets in client. All tracker/Homework/live-class SQL filters owner_id. Leak scan of 97 PRO lesson dirs vs public chunks: 0 hits.
- Gotcha (fixed): Worker access checks compare raw path prefixes but the router treats `//` as `/`. `/api//admin/billing` returned owner metrics anonymously. Fix: worker redirects any `//` path 308 before checks; admin routes must also check ownerFromHeaders themselves.
- Rate limit: Workers Rate Limiting binding `ABUSE_LIMITER` (vite.config.ts ratelimits, namespace 7301, 10/60s) via worker/rate-limit.ts on POST founder-access, billing/checkout, paddle/checkout, phonetics/speech-attempt; key = deployment:path:cf-connecting-ip; fails open. Miniflare enforces it locally too (cf-connecting-ip 127.0.0.1), so worker tests must not POST those >10 times/min.
- Speech STT (Azure, only "AI" in the app) never works: /api/phonetics is not in worker identityAware, so it always 401s.
- Pending (not done): PRO account sharing/mass download (no device/quota limits), Turnstile on founder form, CSP, Cloudflare WAF rules (dashboard), delete /api/admin/export, forensic watermarks. Student tables key owner_id by Firebase UID, not users.id (migrate before academies).
- Academies: diagnosis only (organizations + organization_members, grants source='organization', seat-based Paddle sub, admin sees aggregates not students). See report.
- PR #254 LIVE 2026-10-21 ~07:30Z (main e32571b, prod run 39560337877): invisible per-account watermark meta `spanishcue-license` (v1.<day>.<hmac>, app/license-watermark.ts, key AUTOESTUDIO_SHARE_SECRET) on PRO lesson/autoestudio HTML for full-access accounts; owner trace page /admin/seguridad?marca=; Terms+Privacy «Protección del contenido». Academy licence contract = Claude Doc https://claude.ai/artifact/Jmv62JL2sNhvuv2n6Dabfy. Device limit + daily open counter NOT built: waits on Ale's decision cards (D1 tables account_devices, account_daily_usage).
- CI flake: grammar-classroom-routes DELETE /api/live-class got 503 once in CI merge job; passed locally, rerun green.
