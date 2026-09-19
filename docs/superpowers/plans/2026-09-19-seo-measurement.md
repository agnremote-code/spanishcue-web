# SEO, Measurement, Consent and Performance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make public bilingual routes indexable and private material protected while recording only consented, deduplicated real funnel outcomes.

**Architecture:** SSR metadata and the Worker own canonical URLs, language alternates, redirects and access protection. A consent-gated direct GA4 client receives allowlisted browser events, while PayPal payment confirmation stays server-side and exposes a minimal user-scoped conversion signal to the browser.

**Tech Stack:** Next.js/Vinext, React, Cloudflare Worker/D1, Firebase session cookies, PayPal webhooks, Node test runner.

**Spec:** `docs/superpowers/specs/2026-09-19-seo-measurement-design.md`

## Global Constraints

- Do not redesign public surfaces or alter the PayPal checkout path.
- Use direct GA4 only; never add GTM, ad tags or hard-coded identifiers.
- Default Consent Mode v2 values are denied before any tag configuration and a missing GA4 ID disables tracking.
- Keep URL queries, user identity data, tokens and lesson notes out of analytics.
- Only server-recorded first completed payment transactions can produce `subscription_first_paid`; renewals, callbacks and duplicates cannot.
- Premium routes and assets remain authorization-protected and noindexed.
- Keep live billing blocked by the existing PayPal-live and complete-legal-operator gates.

## Review Focus

- A visitor revokes analytics after accepting: no future event or tag script remains active.
- A PayPal retry with the same completed sale: one transaction row and one possible conversion only.
- A recurring monthly completed sale: it records payment history but never becomes a new-customer conversion.
- A logged-in user guesses another subscription ID: the conversion endpoint must reveal nothing.
- A crawler requests `http://www.spanishcue.com/...`: it receives one canonical HTTPS redirect, without a chain.

---

### Task 1: SEO canonicalization and crawl controls

**Files:**
- Modify: `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `worker/index.ts`
- Modify: `tests/rendered-html.test.mjs`, `tests/teacher-access.test.mjs`

**Interfaces:**
- Produces `metadataForPath(pathname, locale)` canonical/robots behavior consumed by all SSR routes.
- Produces one-hop Worker canonical-host redirect behavior consumed by deployment requests.

- [ ] Write failing metadata/redirect tests for English own canonical, reciprocal alternates, private noindex and canonical host/scheme redirect.
- [ ] Run the focused test command and confirm the requested behavior fails.
- [ ] Implement focused metadata, sitemap/robots and Worker normalization changes without changing page layout.
- [ ] Re-run focused tests and confirm they pass.
- [ ] Commit SEO/crawl controls.

### Task 2: Consent-gated direct GA4 and safe browser events

**Files:**
- Create: `app/marketing/GoogleAnalytics.tsx`
- Modify: `app/layout.tsx`, `app/marketing/analytics.ts`, `app/privacy/consent.ts`, `.env.example`
- Modify: `tests/ads-readiness.test.mjs`, `tests/marketing-conversion.test.mjs`

**Interfaces:**
- Produces `trackMarketingEvent(event, properties)` with allowlisted/sanitized properties.
- Produces `GoogleAnalytics` which reads `NEXT_PUBLIC_GA4_MEASUREMENT_ID`, queues Consent Mode v2 defaults and installs one direct tag only after consent.

- [ ] Write failing tests for disabled configuration, default/update/revoke consent behavior, one direct GA4 path, and query-string-free event payloads.
- [ ] Run the focused test command and confirm the requested behavior fails.
- [ ] Implement consent bootstrap, lazy direct tag and event sanitization.
- [ ] Re-run focused tests and confirm they pass.
- [ ] Commit consent and analytics changes.

### Task 3: Server-confirmed first-payment conversion

**Files:**
- Create: `app/api/billing/conversion/route.ts`, `drizzle/0004_*_payment_measurement.sql`
- Modify: `db/schema.ts`, `db/billing.ts`, `app/api/billing/webhook/route.ts`, `app/pro/success/SuccessClient.tsx`
- Modify: `tests/backend-contract.test.mjs`, `tests/marketing-conversion.test.mjs`

**Interfaces:**
- Produces `recordPaypalPayment(db, subscriptionId, payment)` with unique transaction idempotency and `isInitial` classification.
- Produces `firstPaidConversionForUser(db, userId, subscriptionId)` returning only an initial confirmed transaction ID.
- Consumes PayPal completed-sale/capture webhook resources; ignores refunds and renewals for acquisition conversion.

- [ ] Write failing tests for first completed payment, duplicate transaction, renewal, refund and another-user lookup.
- [ ] Run the focused test command and confirm the requested behavior fails.
- [ ] Add migration/schema, update webhook processing and add the authenticated conversion read endpoint.
- [ ] Make the success page request the server-confirmed conversion before emitting `subscription_first_paid`.
- [ ] Re-run focused tests and confirm they pass.
- [ ] Commit payment-conversion changes.

### Task 4: Evidence, performance and release checks

**Files:**
- Modify: `TASK-05B.md`
- Modify: `README.md` if configuration documentation needs a concise pointer

**Interfaces:**
- Consumes all final code and test commands.
- Produces concise configuration, legal blockers and local laboratory evidence.

- [ ] Measure the existing/final local build output and static resource policies using reproducible commands.
- [ ] Run consent yes/no, deduplication, privacy, language/sitemap, build, Worker tests and lint.
- [ ] Record commands, results, test scope, required IDs and limitations in `TASK-05B.md`.
- [ ] Commit documentation/evidence.
