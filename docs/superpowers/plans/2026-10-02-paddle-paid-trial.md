# Paddle direct monthly and one-day paid trial

Owner specification: current conversation, 2026-10-02. Base main c4b817429deec7f3c08c80d1faa801d0a8897dd7 (includes subsequent speech repair).

- Direct monthly: pri_01m38sk06dtyhga2d4h36rt5dc, USD 15.50, taxes included, no trial.
- Trial: pri_01m3xv2ybze2yve1phknvm3r4b, USD 2 for one day then USD 15.50/month.
- Do not mutate Paddle catalog. Server chooses price by enum; validates catalog, ownership, payment, currency and purchased period.
- Keep checkout-first, signed claims, provider signatures, paid-through expiration, existing PayPal and historical subscriptions.
- Central checkout offers monthly first, trial second, including local payment marks and explicit renewal copy.
- Test actual routes and SQLite-backed grants, run full suite/lint/typecheck/build/artifact, review, then official CI auto-merge and release.

## Progress and decisions
- Baseline: 27 billing, entitlement, claim and diagnostics tests passed.
- Price/offer and payment tests RED then GREEN; DB trial first incorrectly claimed Founder (RED), now only first full monthly payment does (GREEN).
- Closed stale PR 94: every added source/test line already exists in main; package test remains included. No work discarded.
- Ruling: preserve PayPal's existing provider plan and USD15 contract. The owner only supplied/reconfigured Paddle prices and explicitly requires existing PayPal not to break. PayPal amount is displayed separately; claiming it charges USD15.50 without changing/verifying the provider would be false.
- Ruling: validate entitlement against paid transaction billing period, not the subscription's potentially newer current period, to prevent replay extension.
- Ruling: default to the two exact owner-approved Paddle IDs when deployment variables are absent; reject mismatching configured IDs at readiness. No secrets are defaulted or committed.

## Review focus
Guest trial confirmation/binding, offer switching, concurrent webhooks and bind, renewal before account creation, legacy subscription compatibility, expired paid-through, duplicate payment/outbox idempotency, tax/currency mismatches, monthly-first UI, no provider-catalog mutations.

## Verification and review
- Full `npm test`: 648 executed, zero failures (includes build and real local Worker/D1 route suites).
- Final focused suites after allowlist/copy tightening: 32 billing/claim tests and 25 UI/offer tests, zero failures.
- Independent review identified concurrent trial replay expiration regression and legacy unclaimed renewal rejection; both corrected with SQL monotonic updates and persisted legacy claim context. Deterministic race reproduced RED, then GREEN.
- Also guards concurrent claim refresh in SQL, so an older trial cannot overwrite newer paid renewal metadata.
- No Paddle product/price mutations, PayPal plan changes, schema migrations, credentials, or auth changes.
