# Academias phase 1 implementation plan

> Execute inline, following the owner's attached specification and existing publication rules.

**Goal:** let academy directors discover the real product and submit a persisted demo request, while teachers retain their current library and subscriptions.
**Architecture:** reuse the audience selector, bilingual locale, brand, real demo video and free lessons. Store leads in an additive D1 table, readable only by the existing owner administration. Institutional memberships and billing remain phase 2.
**Base:** daee8bf28728c1a10c2afa069ab54606f050fb95.
**Constraints:** preserve all existing educational routes, auth, billing, prices and subscriptions. Do not replace the logo without the official asset. No invented customers, plans, metrics or institutional capabilities. Avoid open PRs #226 (logo/layout), #257 (layout/SEO/package) and #209 (analytics/production workflow).

## Review focus

- Anonymous JSON writes: reject cross-origin, invalid/oversized bodies and unconsented requests.
- Retries and spam: persist once per request; bound repeated submissions without storing IPs.
- Owner-only review: reject ordinary users at both page and API boundaries.
- Responsive header: brand never shrinks beneath the selector; selector wraps before overlap.
- Honest conversion: show success and emit consent-aware analytics only after persistence.

## Tasks

- [x] Persistence and API: `drizzle/0016_academy_demo_requests.sql`, `app/academias/demo-service.ts`, `app/api/academy-demo/route.ts`, `app/api/admin/academy-demo/route.ts`; exercise real SQLite and actual handlers in `tests/academias.test.mjs`.
- [x] Acquisition: bilingual `/academias`, scoped styling, live demo video, free lesson links, accessible form and owner review page; canonical and sitemap entry.
- [x] Navigation: replace the main teacher/student selector with academy/teacher links, retain student routes and brand component. Wrap the header at narrow sizes.
- [ ] Verify: focused tests, existing audience/SEO/security regressions, TypeScript, lint, full suite/build/artifact and visual desktop/mobile checks.
- [ ] Review and delivery: independent whole-branch review; commit through the GitHub connector, non-draft PR, CI automatic merge and official staging/production verification where available.

## Database release

This is a dedicated migration release, not ordinary source-only work. The forward SQL only creates a new table and indexes, is retry-safe, touches no existing data, and is compatible with the old Worker. Production SQL must follow `docs/releases/MIGRATION_RELEASE.md`; do not edit the production workflow while #209 remains open. Export and disposable restore evidence must precede the exact operation; retain the table on Worker rollback.

## Ledger

Pre-flight: form consumes API validation/persistence; admin reads the same rows. Analytics uses existing `cta_click` with a specific placement, avoiding the overlapping analytics PR. No PII in events.
Ruling: phase 1 only, as explicitly prioritized by the owner. Institutions, invitations, seat limits and institutional entitlements remain unadvertised until implemented.

Final review: independent reviewer identified protected public form chunk, unbounded body read and mailto injection; all three corrected and covered by regressions. Regional copy was normalized.
Validation: focused acquisition/audience/security/SEO checks pass, disposable database export/import passes, production build and artifact validation pass; full suite is running. Lint: zero errors, 67 existing warnings. TypeScript: three existing errors outside the modified files (missing retired USA data import and voice gender inference); no academy errors.
Ruling: source may precede the coordinated table operation; a readiness check offers the existing real public contact route until persistence is prepared. This prevents publishing a form that cannot save. No production SQL was performed.
Visual QA limitation: the local dev server could not be reached through the available browser environment; semantic server rendering was checked for both storage states. Do not claim desktop/mobile visual sign-off.
