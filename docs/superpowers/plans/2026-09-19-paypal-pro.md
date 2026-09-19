# PayPal PRO Billing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a real, idempotent PayPal subscription-to-PRO lifecycle for the USD 15 monthly founder offer without enabling public Live charging.

**Architecture:** Extend the existing D1 billing foundation with environment-scoped checkout locks, payments, and outbox events. Treat PayPal subscription lifecycle and confirmed payment lifecycle separately, reconcile provider state before granting access, and keep the worker/D1 entitlement as the sole authorization source.

**Tech Stack:** TypeScript, vinext/Next App Router, Cloudflare Workers and D1, Drizzle ORM, PayPal Subscriptions v1, Node test runner, Node SQLite test adapter.

**Spec:** `docs/superpowers/specs/2026-09-19-paypal-pro-design.md`

## Global Constraints

- Offer is USD 15 monthly for the first 1,000 teachers; no trial, lifetime promise, later price, or simulated sales.
- Preserve historical agreements and do not alter Live customers or production data.
- Sandbox and Live are distinct in config, provider API base, IDs, DB rows, webhooks, and tests.
- `ACTIVE` never grants PRO until a valid first payment is confirmed.
- Do not edit home or marketing landing files assigned to 5A.
- No merge, deploy, public Live checkout, real charge, or production migration.

## Review Focus

- A forged or foreign PayPal subscription/payment must never grant access.
- Simultaneous checkout requests must create at most one reusable provider attempt per user/product/environment.
- Duplicate and out-of-order webhook events must converge without double payment, access, founder slot, or conversion event.
- Cancellation, failed payment, expiry, refund, and reversal must preserve or revoke access according to paid-through state.
- Owner and manual grants must remain unaffected by billing mutations; premium page/API/assets must share the same entitlement.

---

### Task 1: Billing state model and migration

**Files:**
- Modify: `db/schema.ts`
- Create: `drizzle/0004_*.sql` and Drizzle metadata
- Create: `tests/billing-lifecycle.test.mjs`
- Modify: `scripts/test-worker.mjs`

**Interfaces:**
- Produces: environment-scoped `billing_checkout_locks`, `billing_payments`, `billing_outbox_events`, and extended subscription/webhook columns.

- [ ] Write a failing test that applies every migration to an in-memory Node SQLite database and asserts environment separation, unique payment IDs, unique outbox keys, checkout lock uniqueness, and no seeded sales/founder rows.
- [ ] Run `node --test tests/billing-lifecycle.test.mjs` and confirm the missing schema assertions fail.
- [ ] Extend `db/schema.ts`, run `npm run db:generate`, inspect and minimize the generated migration, then rerun the targeted test.
- [ ] Add the test to `scripts/test-worker.mjs` and commit the independently passing schema milestone.

### Task 2: Provider validation, checkout locking, and reconciliation primitives

**Files:**
- Modify: `app/billing-config.ts`
- Modify: `app/paypal-server.ts`
- Modify: `db/billing.ts`
- Modify: `.env.example`
- Modify: `tests/billing-lifecycle.test.mjs`

**Interfaces:**
- Consumes: Task 1 tables and environment columns.
- Produces: `billingReadiness`, exact plan/subscription validation, deterministic checkout acquisition/finalization, payment application, and provider reconciliation primitives.

- [ ] Add failing tests for separate Sandbox/Live config, exact USD/monthly plan validation, wrong plan/custom user rejection, `ACTIVE` without payment, first vs renewal payment, duplicate sale, refund/reversal, and concurrent founder limit.
- [ ] Run the targeted test and confirm behavior failures, not import/setup errors.
- [ ] Implement the smallest pure validation/state helpers and D1 functions needed to pass; use parameterized statements and semantic idempotency keys.
- [ ] Add deterministic `PayPal-Request-Id`, environment-specific API endpoints/IDs, plan lookup, subscription detail reconciliation, and transaction lookup support.
- [ ] Rerun the targeted suite and commit the provider/domain milestone.

### Task 3: Routes, webhook lifecycle, authorization, and UX

**Files:**
- Modify: `app/api/billing/checkout/route.ts`
- Modify: `app/api/billing/webhook/route.ts`
- Modify: `app/api/billing/refresh/route.ts`
- Modify: `app/api/billing/subscription/route.ts`
- Modify: `app/api/billing/founder-status/route.ts`
- Modify: `app/acceso/CheckoutButton.tsx`
- Modify: `app/pro/success/SuccessClient.tsx`
- Modify: `app/cuenta/SubscriptionManager.tsx`
- Create: `app/billing-contract.ts`
- Modify: `app/legal/LegalDocument.tsx`
- Modify: `tests/billing-lifecycle.test.mjs`
- Modify: `tests/backend-contract.test.mjs`
- Modify: `tests/marketing-conversion.test.mjs`

**Interfaces:**
- Consumes: Task 2 validation, checkout, payment, and reconciliation primitives.
- Produces: CTA readiness contract and `first_subscription_paid` outbox contract for 5B.

- [ ] Add failing tests for visitor/free/owner/PRO, identity ownership, wrong plan/amount/currency, invalid signature boundary, pending/cancelled/expired/refunded UX, double checkout, repeated/out-of-order events, first-paid analytics, and CTA contract.
- [ ] Run targeted tests and confirm each fails for the missing behavior.
- [ ] Update routes so callback/`ACTIVE` never grants access, payment webhooks reconcile and validate before mutation, duplicates return success, retryable reconciliation returns 202, and cancellation keeps paid-through access.
- [ ] Update access/account/success UI with honest states and server-confirmed first-paid conversion; do not use local storage as authority and do not edit 5A landings/home.
- [ ] Update legal founder wording from activated to first paid subscription and commit the application milestone.

### Task 4: Documentation, regression repair, and full verification

**Files:**
- Create: `docs/launch/TASK-03.md`
- Create: `docs/launch/BILLING-CONTRACT.md`
- Modify: `docs/launch/OWNER_ACTIONS.md`
- Modify only if root cause is in task scope: asset protection build scripts/tests

**Interfaces:**
- Consumes: all prior task interfaces.
- Produces: manual setup checklist, SIMULATED/SANDBOX REAL/LIVE REAL evidence, supervised Live purchase runbook, and integration contract.

- [ ] Document runtime secret names, existing-resource validation commands/UI steps, webhook URL/events, D1 migration command, Sandbox purchase evidence, and supervised Live checklist without values.
- [ ] Diagnose the two baseline asset packaging failures; fix only the root cause with a failing regression test and no relaxed assertion.
- [ ] Run `npm test`, `npm run lint`, `npm run build`, `npm run validate:artifact`, migration-on-fixture tests, and secret/offer scans.
- [ ] Review the branch against every objective, commit documentation/fixes, then push and open a PR against the validated integration base without merge or deploy.
