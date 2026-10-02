# Updates and lesson feedback

Approved by owner in chat: APRUEBO TODO NO ME PIDAS ANDA DE APROBACION.
Source requirements: 2026-10-02-updates-reports-request.txt.
Base: 829bfdef46e1b2fdb1fd81eb0836ab3e5155eb13.

Preserve SpanishCueHero. Replace the existing hardcoded, lower-page news carousel with one editorial carousel directly after the hero. Feed lesson items from typed promotion metadata keyed by canonical catalog ID (preserving historical catalog bytes) and announcements from a typed data source. Real previews and official pointing mascot; manual arrows, dots, swipe, no autoplay (avoids distracting teachers). No infinite animation. Responsive at 1440/1280/1024/tablet/430/390 and reduced motion.

One shared feedback component mounted on lesson routes in RootLayout and inside the existing inline library lesson viewer. A discreet launcher opens a compact native dialog (bottom sheet on mobile). Keep one required textarea and optional category select. Capture last interacted or visible section, question/component identifiers when present, selected lesson level and short human-readable location. Explicit stable data-report identifiers augment shared lesson components; legacy lessons provide their existing DOM identifiers and heading fallback. Do not pretend unidentified content has a stable source ID.

Authenticated teachers submit POST /api/lesson-reports. Server resolves trusted identity from Worker headers and validates lesson/access against catalog. Store canonical title/slug/category/route, message (5–3000 chars), classification, context JSON, basic viewport and build reference in D1 lesson_reports. Reject oversize JSON, bad origins, invalid categories/levels and lesson spoofing. Persistent, atomic per-user rate cap of 5/hour via INSERT SELECT, and idempotent request keys prevent duplicate retry. No tokens, arbitrary query strings, IPs or fingerprints stored. Preserve write freeze.

Owner-only /admin/reportes and /api/admin/lesson-reports support paging, status filters and status/resolution updates. Update Worker identity-aware paths and guard every admin subroute. D1 additive migration only, tested on disposable SQLite and local D1. No production DB operation, merge, production deploy or non-draft PR that could trigger auto merge. Save and push task branch only, per explicit owner instruction.

Future Claude support: independent review status and ai_status, JSON analysis slot, resolution, resolved_by, resolved_at, change_reference. No model calls or code changes by agents. Document migration rollout, compatible old Worker, backups and forward-only recovery. Admin treats missing migration as an explicit service failure, never silently drops submissions.
