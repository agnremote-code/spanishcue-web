# SPANISHCUE PRO billing contract

## Commercial invariant

- Product: `spanishcue-pro`.
- Offer: USD 15.00 every month, automatic renewal, no trial and no setup fee.
- Founder allocation: at most 1,000 per environment, shared across PayPal and Paddle, assigned only after the first valid USD 15.00 payment is persisted and the verified buyer binds it to an account.
- PayPal subscription approval or `ACTIVE` status never grants PRO by itself.
- Historical provider transactions keep their original facts. This implementation does not rewrite legitimate old agreements.

The constants live in `app/billing-config.ts`. Runtime configuration may reduce the enabled founder capacity but cannot raise it above 1,000 or change the accepted settled amount.

## Trust and access boundary

The Worker verifies Firebase, resolves the stable internal `users.id`, and replaces all browser-supplied `x-chespanish-*` headers. Page, API, JavaScript and premium media authorization consumes only those server-created headers and persisted `access_grants`. Owner access remains a separate role and is never inferred from an authenticated teacher.

The payment state machine is:

1. `APPROVAL_PENDING` / `APPROVED`: PayPal checkout exists; no access and no founder allocation.
2. `ACTIVE`: provider lifecycle fact only; still no access without a settled payment.
3. `PAYMENT.SALE.COMPLETED`: verify webhook signature, fetch the subscription from the matching PayPal environment, validate subscription ID, `custom_id`, plan, product, USD 15.00 amount and monthly terms, then persist payment and access.
4. Renewal: a distinct provider payment extends `paid_through`; it never emits another first-paid event or founder assignment.
5. Cancellation: stop PayPal renewals and keep access until persisted `paid_through`.
6. Failed/suspended/expired: do not invent a new period; authorization naturally ends at `paid_through`.
7. Refund/reversal: update the referenced settled payment. Access remains only if another completed paid period still covers the current time.

Webhook IDs, provider payment IDs, checkout locks, founder assignments and outbox keys have database uniqueness constraints. Provider lifecycle timestamps reject late state regressions. Failed or stale webhook work is retryable; PayPal reconciliation runs only on explicit checkout return/account actions, not on each view.

## Environment contract

Sandbox and Live use separate API endpoints, resource IDs, webhook IDs, client credentials, subscription identities, payment identities, checkout locks and founder allocation. Generic legacy `PAYPAL_*` names are accepted only as a Sandbox compatibility bridge; Live never reads them.

Secure runtime names (values never belong in Git):

- `PAYPAL_ENV`
- `PAYPAL_SANDBOX_CLIENT_ID`, `PAYPAL_SANDBOX_CLIENT_SECRET`, `PAYPAL_SANDBOX_PRODUCT_ID`, `PAYPAL_SANDBOX_FOUNDER_PLAN_ID`, `PAYPAL_SANDBOX_WEBHOOK_ID`
- `PAYPAL_LIVE_CLIENT_ID`, `PAYPAL_LIVE_CLIENT_SECRET`, `PAYPAL_LIVE_PRODUCT_ID`, `PAYPAL_LIVE_FOUNDER_PLAN_ID`, `PAYPAL_LIVE_WEBHOOK_ID`
- `PAYPAL_PUBLIC_CHECKOUT_ENABLED`
- `PAYPAL_LIVE_SUPERVISED_USER_ID`

- `PADDLE_API_KEY` (server-only secret)
- `PADDLE_CLIENT_TOKEN` (safe for Paddle.js, still kept out of Git)
- `PADDLE_PRICE_ID`
- `PADDLE_WEBHOOK_SECRET` (server-only secret)
- `FOUNDER_OFFER_ENABLED`, `FOUNDER_OFFER_CODE`, `FOUNDER_LIMIT`, `FOUNDER_PRICE_USD` (display/runtime offer configuration read by `app/billing-config.ts`; the limit is clamped to 1–1,000 and D1 founder state remains authoritative)
- `ANALYTICS_CONVERSIONS_ENABLED` (server-only gate for first-paid conversion reporting; only honoured when `PAYPAL_ENV=live`)

The source of truth for these names is the code (`app/billing-config.ts`, `app/paddle-config.ts`, `app/paypal-server.ts`) and `.env.example`. Values are held in the hosting runtime, never in Git.

Live public checkout defaults to disabled. A supervised Live purchase can be prepared for exactly one internal user through `PAYPAL_LIVE_SUPERVISED_USER_ID` without exposing checkout publicly. Do not set `PAYPAL_PUBLIC_CHECKOUT_ENABLED=true` as part of preparation.

## Paddle contract

Paddle was added after the PayPal state machine above. Current source (`app/paddle-server.ts`, `app/api/billing/paddle/*`, `db/paddle-billing.ts`) behaves as follows:

- Paddle is Live-only. The API base is hard-coded to `https://api.paddle.com`, and Paddle billing rows use environment `live`. There is no Paddle Sandbox configuration; Paddle and PayPal Live share the 1,000 Live founder allocation.
- Checkout readiness requires all four `PADDLE_*` values. The server creates the checkout transaction with exactly one item of `PADDLE_PRICE_ID` and `custom_data` containing either `spanishcue_user_id` or, for checkout before account creation, `spanishcue_claim_id`, plus the offer code.
- A payment counts only after the server fetches the transaction/subscription from the Paddle API and validates the configured price ID, quantity 1, amount `1500` USD, monthly interval with frequency 1, no trial, matching `custom_data`, and (for claims) transaction status `completed`.
- Webhooks are verified by HMAC-SHA256 over `ts:rawBody` from the `paddle-signature` header, with a 300-second timestamp tolerance and constant-time comparison, then de-duplicated by event ID in `payment_webhook_events`.
- Handled webhook events: `transaction.completed`, `subscription.created`, `subscription.updated`, `subscription.canceled`, `transaction.payment_failed`.
- `/api/billing/paddle/confirm` accepts a `txn_…` ID from a same-origin browser return but re-fetches and validates the transaction server-side. The browser value is a lookup key, not proof of payment.
- Account subscription management can cancel, pause and resume Paddle subscriptions through the server API.
- Known gap: current source has no handler for Paddle refunds, chargebacks or adjustments. The PayPal refund/reversal rule (step 7 above) has no Paddle equivalent yet.
- Diagnostics: Paddle API failures are logged with dynamic path segments, bearer tokens and claim cookies redacted (PR #54).

Configured plan validation requires one and only one regular cycle: `MONTH × 1`, unlimited cycles, USD 15.00, no trial and USD 0 setup fee. The owner validation endpoint reads the configured plan/webhook and rejects mismatches; it never creates duplicate PayPal resources.

## CTA contract for 5A

Home and landing files are not changed by this task. Their CTA may link to:

`/acceso?returnTo=<safe local path>`

`/acceso` is the sole checkout UI contract. It reports unconfigured, Sandbox test, supervised Live, unavailable founder capacity and retryable errors honestly. CTA code must not infer payment success or write access state.

## First-paid event contract for 5B

`billing_outbox_events` is the server-side source. Consumers select undelivered rows and mark `delivered_at` only after their own durable success.

| Field | Contract |
| --- | --- |
| `event_name` | `first_subscription_paid` exactly once; `subscription_renewed`, `subscription_refunded`, and `subscription_reversed` are distinct |
| `event_key` | Idempotent provider-payment-derived key |
| `environment` | `sandbox` or `live`; consumers must never count Sandbox as real revenue |
| `user_id` | Stable internal identity |
| `subscription_id` / `payment_id` | Local foreign keys for audit and reconciliation |
| `occurred_at` | Provider event/transaction time |

No browser callback, `localStorage`, `sessionStorage`, client analytics event or PayPal `ACTIVE` status represents a purchase.

## Checkout before account creation

- Anonymous checkout creates a provider-neutral `billing_purchase_claims` record. Only a SHA-256 verifier is stored in D1; its random secret stays in a Secure, HttpOnly, SameSite=Lax `__Host-spanishcue-claim-*` cookie. Providers receive only the public claim ID.
- Paddle's completed transaction and customer email are fetched via the server API. PayPal's completed sale and subscriber email come from signed webhooks or server-side subscription reconciliation. Exact Founder terms remain mandatory.
- No pending claim creates a `billing_subscriptions`, `billing_payments` or `access_grants` row. A verified Firebase account with the same normalized email binds the paid claim to the existing billing machinery. The binding is retryable and the first-paid event remains payment-derived and unique.
- A cookie alone, an approval callback, or a provider email supplied by JavaScript never grants access. Older account-bound subscriptions keep their existing verification and management paths.

## Provider references

- [PayPal Subscriptions API](https://developer.paypal.com/api/subscriptions/v1/)
- [PayPal webhook handling](https://developer.paypal.com/api/rest/webhooks/rest/)
- [Verify webhook signature](https://developer.paypal.com/api/webhooks/v1/verify-webhook-signature-post/)
- [PayPal request idempotency](https://developer.paypal.com/api/rest/reference/idempotency/)
- [PayPal webhook event names](https://developer.paypal.com/api/rest/webhooks/event-names/)
