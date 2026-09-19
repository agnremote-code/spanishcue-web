# PayPal PRO Billing Design

## Intent

Complete the existing SpanishCue PayPal subscription flow without replacing Firebase authentication, Cloudflare D1, or the existing PayPal product/plan/webhook. The only current commercial offer is USD 15 monthly for the first 1,000 teachers. A founder place is consumed only after a valid first payment, never by a reservation, approval, activation callback, mock, or fabricated counter.

## Constraints

- Base: local validated reference `origin/main` at `3342720`; the public GitHub `main` is older and divergent.
- Work only on `chatgpt/paypal-pro`; no merge or deployment.
- Keep Sandbox and Live credentials, endpoints, provider records, webhooks, tests, and conversion events separate.
- Keep secrets in the runtime secret store. Documentation names variables but never records values.
- Do not edit home or marketing landing files owned by 5A. Expose a small CTA contract instead.
- Preserve legitimate historical agreements, including any historical price, while removing USD 7.49/12 months as a current offer.
- Owner access remains permanent and distinct from an authenticated free account or paid PRO access.

## Architecture

### Central commercial contract

`app/billing-config.ts` owns the current product, offer code, USD 15 price, monthly interval, 1,000-place limit, and environment-specific runtime names. `billingReadiness()` reports honest `unconfigured`, `sandbox_ready`, or `live_ready` state. Live readiness requires Live-specific credentials and IDs plus the existing legal operator gate; Sandbox can be exercised independently.

Existing provider resources are reused only after server-side validation confirms product, plan, currency, amount, monthly frequency, and active status. Setup never creates a second resource merely because an ID was not copied into a generic variable; Sandbox and Live use distinct ID names.

### Persistence and concurrency

Migration `0004` appends:

- `environment` and provider lifecycle/payment fields to subscriptions and webhook records.
- `billing_checkout_locks`, keyed by environment/user/product, to serialize checkout creation and reuse a deterministic PayPal request ID after ambiguous failures.
- `billing_payments`, uniquely keyed by environment/provider transaction ID, for completed, refunded, and reversed payments.
- `billing_outbox_events`, keyed by semantic event key, for the idempotent first-paid event consumed by 5B and separate renewal/refund events.

Existing subscription rows remain intact and default to `sandbox`, matching the only checkout previously enabled. The migration does not insert sales, founder assignments, payments, or entitlements.

### Checkout

The server authenticates the Firebase-backed internal user and validates same-origin/CSRF expectations. It rejects existing paid access or a non-stale open checkout. A checkout lock is acquired atomically before calling PayPal. Its UUID is reused as `PayPal-Request-Id`, so a network retry cannot create another subscription. The configured provider plan is validated before use. The provider subscription is persisted with environment, plan, user, offer, and approval URL; only then is the URL returned.

### Provider lifecycle and payment lifecycle

Approval, activation, and payment are separate:

- `APPROVAL_PENDING`/`APPROVED`: no access.
- `ACTIVE` without a confirmed payment: verifying, no access.
- `PAYMENT.SALE.COMPLETED`: reconcile the subscription with PayPal; require matching environment, plan ID, `custom_id` user, USD currency, and exactly 1500 cents; persist payment; grant/extend access; claim a founder slot if this is the first valid payment; emit exactly one first-paid outbox event.
- Later completed sales are renewals and extend the paid-through timestamp without another founder assignment.
- Failed payment records failure and shows a delinquent state. It does not manufacture a payment or founder slot.
- Cancellation stops renewal and preserves access through the known paid-through timestamp.
- Refund/reversal updates the payment and revokes access when no other unrefunded paid period covers the current time. It emits a separate non-conversion outbox event.

Webhook signatures are verified with PayPal before any mutation. The environment-specific webhook ID is used. Event rows make duplicates, retries, failed processing, and stale claims idempotent. Provider reconciliation is authoritative when webhook fields are incomplete or arrive out of order.

### Authorization and protected assets

The worker remains the trust boundary. Browser headers are stripped and recreated after Firebase verification and D1 entitlement lookup. Page routes, API routes, protected client chunks, and premium media all rely on the same persisted access grant. Owner access remains an independent source and is never downgraded by billing events.

### UX and integration contract

`/acceso`, `/pro/success`, and `/cuenta` expose actual states: unavailable, approval pending, active but verifying first payment, paid, delinquent, cancelled with paid-through access, expired, refunded, and retryable provider delay. The client never writes entitlement state to localStorage/sessionStorage. Client analytics fires only from a server-confirmed first-paid outbox-backed result, not from `ACTIVE` or a callback parameter.

5A receives a small server-safe CTA/readiness contract from `app/billing-contract.ts`; no assigned home/landing file is edited. 5B receives the `first_subscription_paid` outbox schema, clearly separated by environment and from renewals/refunds.

## Error handling and observability

Provider errors map to controlled public messages and stable internal error codes. Logs contain environment, event type, subscription/payment IDs, and error code but never credentials, access tokens, full webhook bodies, or payer financial details. Retryable reconciliation returns HTTP 202 and a persisted verifying state. Invalid signatures, wrong plan/user/amount/currency, and foreign subscriptions produce no access or founder assignment.

## Verification levels

- **SIMULATED:** unit/integration tests with fictional users, PayPal payloads, and local D1 migrations.
- **SANDBOX REAL:** requires the existing Sandbox app/product/plan/webhook IDs and an actual Sandbox buyer payment. Mocks do not satisfy this level.
- **LIVE REAL:** prepared only. It requires verified Live resource IDs, Live secrets, legal readiness, and a supervised real purchase. This task does not execute it or enable public Live checkout automatically.

## Official references checked 2026-09-19

- PayPal Subscriptions v1: https://developer.paypal.com/api/subscriptions/v1
- PayPal webhook integration and retries: https://developer.paypal.com/api/rest/webhooks/rest/
- Verify webhook signature: https://developer.paypal.com/api/webhooks/v1/verify-webhook-signature-post
- PayPal REST idempotency: https://developer.paypal.com/api/rest/reference/idempotency/
- Subscription webhook event names: https://developer.paypal.com/api/rest/webhooks/event-names/
