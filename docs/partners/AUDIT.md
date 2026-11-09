# SpanishCue Partners · commercial and operational audit

Audited 2026-11-09 against GitHub main `78f178be91a5fb6b40d32947eeeb2a078b259ac3`, existing payment code and the live home rendered in the browser. Implementation remains separate from deployment and the proposed production database expansion.

## Price and availability findings

| Surface / source | Finding | Action / state |
|---|---|---|
| Live home, SpanishCueBrand hero | US$19.90/month and US$150/year visible; annual saving 37% | Current real offer retained. Home and campaign destinations preserved. |
| app/paddle-config.ts | New pinned monthly price US$19.90; annual US$150. Legacy monthly and US$129 annual IDs remain for existing agreements. | No provider product, price or subscription changes. Pilot excludes annual and legacy amounts. |
| app/billing-config.ts | New PayPal Live monthly plan US$19.90; US$15 remains for Sandbox and legacy validation. | Preserve valid old contracts. Do not globally replace historical 1500-cent amounts. |
| Open draft PR #360 | Older branch proposes US$199/year and edits public pricing, legal and billing files; its body describes old missing price IDs, superseded by current main. | Do not merge or overwrite. Requires coordination before any overlapping commercial corrections. |
| app/cuenta/SubscriptionManager.tsx | PayPal founder branch hardcodes US$15/month regardless of a newer US$19.90 payment. | Confirmed inconsistent account display, deferred because #360 owns this file. Must derive display from actual amount/period, preserving old agreements. |
| app/legal/LegalDocument.tsx | Public terms still describe optional US$2 one-day trial and method-specific PayPal amounts. | Confirmed stale commercial terms; deferred to coordinated #360/#283 resolution. No trial advertised by Partners. |
| app/pricing/page.tsx and MarketingSections | `PRO opens soon` exists in unconfigured-readiness branches; normal live branches advertise current price. | Conditional fallback is not proof that live checkout is disabled. Browser home currently shows paid offer. Retain readiness gating. |
| app/marketing-landing/campaign-copy.ts | Contains public launch-soon copy; selected depending on campaign readiness. | Flagged for coordinated audit of actual campaign states; do not change campaign URL/destination. |
| db/billing.ts and docs/billing-contract.md | Some legacy 1500-cent comments/text remain while current Live validation uses the pinned new offer. | Historical compatibility is deliberate; narrative state-machine documentation needs a coordinated update. |
| app/lesson-catalog.ts, conversation-families/catalog.ts | Home proof/filter counts derive from actual catalog data. | Partners publishes no volatile class total, avoiding a new hardcoded count. |

No generic photograph, fabricated testimonial, fabricated product UI or promotional video was added. Hero uses the actual existing public Noche abierta preview asset and links to the working demo route. The owner's explicitly supplied voseo hero is preserved by two exact language exceptions; other new instructions use tú. Existing English copy is unchanged.

## Implementation state

| Function | Local implementation and verification | Production prerequisite / boundary |
|---|---|---|
| /partners page, SEO, OG, canonical, responsive CSS | Implemented; desktop browser inspected; canonical follows existing www → apex policy | Not a replacement home; production release still required |
| Calculator | Native accessible range and 1/10/50/100 buttons; 100 clicked in browser produced US$597.00 | Mathematical examples only |
| Application form | Local D1 prepared, real browser submission returned saved confirmation; server tests cover persistence, retries, honeypot and validation | Five production tables must be explicitly prepared before intake; absent storage shows unavailable, no false success |
| Owner admin | Review, approval/pause/rejection, immutable unique code, agreement reference, commission ledger, documented adjustments and CSV | Existing verified owner gate; no public partner dashboard. Authenticated browser admin was not tested in this session |
| Attribution | Signed HttpOnly Secure SameSite=Lax first-touch cookie, 30 days, only with existing marketing consent; immutable account binding, excludes self/existing paying customers | Existing signing secret must be present; cross-device attribution and coupon checkout not implemented |
| Confirmed purchases and renewals | Read-only billing ledger/outbox. US$19.90 monthly USD Live facts only, integer cents, first six paid identities | No new provider write, no entitlement mutation; missing original payment proof does not earn |
| Refunds and chargebacks | Existing payment reversals plus owner-entered verified cumulative adjustments; settled amounts retain negative corrections | Paddle adjustment webhook automation is NOT implemented; manual provider reconciliation is mandatory before every settlement |
| Settlements | Immutable per-payment signed net snapshots; external payment/evidence reference; unique retry key; rejects a changed transfer amount | Bookkeeping only; owner pays externally. Does not transfer money automatically |

## Verification and limits

Open PR #257 also edits app/layout.tsx and package.json. This implementation avoids both files: Partners scopes visitor-overlay presentation in its own CSS, and its tests join the existing security-hardening test entry point. There are no remaining file overlaps with that PR.


- Partner domain/routes and affected security, billing, checkout, referral and Worker identity tests pass. Tests use disposable SQLite for actual SQL rather than mocking accounting results.
- Independent code review found real PayPal refund-time and mutable subscription-plan bugs. Both were corrected: commissions use original immutable outbox confirmation times and trusted immutable payment amounts. Refund and plan-change regression cases cover those paths.
- Actual browser navigation, 100-teacher calculator and local application submission verified. A browser-only HTTP preview bug (`crypto.randomUUID` unavailable) was reproduced and fixed using getRandomValues request keys, with a regression test.
- Production build and artifact validation passed. No live money transaction, production schema write or production entitlement change was performed.
- Initial full-suite Worker tests failed because the shallow clone lacked two historic pinned Git baselines. Those baselines were fetched and the two affected tests passed; broader Worker checks were then resumed.
- TypeScript reports three pre-existing diagnostics outside changed files: missing ../estados-unidos-basico/data and resulting implicit stop type in app/estados-unidos-a2-b1/data.ts, plus the gender type in app/noche-abierta/voice.ts. No Partners diagnostics remain after corrections.
- CSS includes explicit mobile layouts at 760px/390px and reduced-motion handling. The cloud browser fixes its viewport at 1348px, including requested popup dimensions. Mobile screenshot and actual narrow-viewport behavior are therefore NOT verified here. No fabricated mobile screenshot is supplied.
- Core Web Vitals field performance and a production browser smoke are not yet measured. No new font, 3D engine or heavy media is loaded by Partners; the single hero screenshot is a real existing optimized WebP.

The resumed Worker suite exposed a date-dependent existing test in tests/homework-errors.test.mjs: its fixtures use October 10, but two categoriesToSuggest calls silently used the wall clock instead of the test’s October 12 clock. Passing its existing explicit `now` argument fixes the expired-fixture assertion without changing production behavior.

Privacy hardening: a signed public recommendation waits in the home URL until the visitor opts into existing marketing consent; no cookie/account attribution is stored before that choice. A same-origin bounded capture endpoint verifies the signed recommendation and approval. Revocation stops account binding and expires the partner cookie on the next normal request. This does not change campaign destinations or existing analytics consent.

## Final local check record

The complete `npm test` command exited 0 with 1,588 assertions after fetching its pinned historic Git baselines and fixing the unrelated date-dependent fixture clock. The subsequent consent hardening passed 48 focused partner/security/billing/referral/identity regressions, the production build and artifact validation, lint on changed implementation, neutral-Spanish guard (0 unresolved findings), and English-copy guard (unchanged). The full-suite run began before the final consent change; CI on the final remote head is the canonical all-source verification. No claim is made that TypeScript's three unrelated existing diagnostics were resolved. No production migration, payment or deployment has been executed in this task at this checkpoint.
