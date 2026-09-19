# TASK-03 — PayPal PRO purchase and access

## Implementation delivered

- Recovered the PayPal partial implementation from validated local base `3342720` in isolated branch `chatgpt/paypal-pro`.
- Added append-only D1 migrations `0004`, `0005` and `0006` for environment-scoped subscription/payment/webhook identity, checkout serialization, paid-through dates, founder allocation, lifecycle ordering and a transactional analytics outbox.
- Centralized the approved USD 15 monthly offer and capped founder capacity at 1,000 confirmed first payments.
- Separated Sandbox and Live names and endpoints. Live cannot inherit legacy Sandbox credentials.
- Replaced resource auto-creation with read-only validation of configured PayPal plan and webhook resources, avoiding accidental duplicates.
- Implemented same-origin checkout, PayPal request idempotency, a database checkout lock, stable-user `custom_id`, provider-side ownership/plan validation, authentic webhook verification, explicit reconciliation, duplicate/retry handling and late lifecycle ordering.
- Decoupled subscription approval, provider activation and settled payment. Only a verified USD 15.00 completed payment persists PRO access and a founder assignment.
- Added renewal, cancellation, failed-payment/expiry and refund/reversal behavior. Cancellation preserves the paid period; refunds retain access only when another completed payment still covers it.
- Connected `/acceso`, `/pro/success` and `/cuenta` with honest Sandbox, verifying, pending, error and retry states. The success callback never emits purchase analytics or grants access.
- Preserved Worker enforcement for premium pages, APIs, JavaScript and media, and preserved owner as a distinct authorization role.
- Added the small 5A CTA contract and idempotent 5B first-paid outbox contract in `docs/billing-contract.md`.
- Removed USD 7.49/12 months as an accepted current provider plan. No historical billing rows are mutated.

## Evidence levels

### SIMULADO — completed

Automated fixtures cover visitor/free/owner/PRO authorization, forged headers, private client/media assets, approval without payment, duplicate checkout, bad webhook signature, duplicate payments/events, late lifecycle events, wrong user/plan/amount/currency, separate renewal/refund events, cancellation/expiry semantics, concurrent founder allocation and Sandbox/Live isolation. Fixtures create no commercial rows in migrations.

### SANDBOX REAL — prepared, not executed here

Code, configuration names, webhook events, reconciliation and visibly labelled Sandbox checkout are ready. A real Sandbox run requires the existing account resource IDs and credentials in the secure runtime. Mocks do not prove Sandbox delivery.

### LIVE REAL — prepared, not executed or exposed

Live endpoints and resource names are separate. Public Live checkout defaults off. `PAYPAL_LIVE_SUPERVISED_USER_ID` can allow exactly one internal account to perform a supervised purchase while public checkout stays disabled. No Live customer was charged, cancelled or modified, and no deployment was performed. Mocks and Sandbox do not prove Live delivery.

## Minimal manual actions

1. Sign in to the authorized PayPal Developer Dashboard and locate the existing Sandbox and Live app, product, monthly plan and webhook. Do not create replacements if matching resources exist.
2. Confirm each plan is active and exactly USD 15.00 every month, with no trial or setup fee, and its product ID matches. Confirm the webhook URL is `/api/billing/webhook` and includes the ten events listed in `docs/billing-contract.md`.
3. Store only the documented variable names in the hosting secret/config manager. Keep `PAYPAL_PUBLIC_CHECKOUT_ENABLED=false` for Live and set `PAYPAL_LIVE_SUPERVISED_USER_ID` only to the chosen internal test account.
4. Apply the append-only D1 migrations in order to the intended non-production environment, then run one real Sandbox approval/payment/webhook/cancel/refund scenario and inspect persisted rows/outbox.
5. After legal/operator readiness and Sandbox acceptance, deploy to a controlled Live preview, run exactly one supervised Live USD 15 purchase, verify webhook/payment/access/cancellation dates, then remove the supervised user binding. Do not enable public checkout, merge or deploy production as part of this task.

## Known external blocker

The PayPal dashboard redirected to sign-in and no authorized PayPal session or billing variables were available in this execution environment. Therefore existing remote app/product/plan/webhook IDs could not be inspected and neither Sandbox Real nor Live Real could be executed. No duplicate resources were created.
