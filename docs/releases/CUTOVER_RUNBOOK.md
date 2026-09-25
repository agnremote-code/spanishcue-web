# Sites → owner Cloudflare cutover runbook (NOT EXECUTED)

Status: prepared only. Executing any step is an owner-authorized production
operation. Until step 9 succeeds, OpenAI Sites (`SITES_RELEASE.md`) stays the
only production deployer.

Inputs that must exist before starting (see §0): production D1 export with
ledger, every production secret re-issued or re-entered, the `spanishcue.com`
zone in an owner-controlled Cloudflare account, a production API token, a
reviewed maintenance/write-freeze flag, and a green staging deploy of the same
SHA.

## 0. Blockers to clear first

| Blocker | Owner of the answer | Notes |
|---|---|---|
| Production D1 export (schema + data + migration ledger) | Sites release owner | Request text in §A |
| `spanishcue.com` zone location | Owner (Cloudflare dashboard) | Zone is not in the connected account |
| How Sites binds the custom domain, and how to detach it | Sites release owner | Must be detachable without DNS downtime |
| Production `compatibility_date` and bindings (`IMAGES`?) | Sites release owner | Build config says `2026-05-15`; no `IMAGES` in build output; production behavior matches no binding |
| Production env set (revision 47) **names and non-secret values** | Sites release owner | Secret values are re-issued from provider consoles, not exported |
| Write-freeze flag | Claude (code PR) | Mutating endpoints and webhooks return retryable 503 while on |
| Production API token + GitHub `production` environment with required reviewer | Owner | Workers Scripts:Edit, D1:Edit on the owner account; Workers Routes:Edit / Zone read on `spanishcue.com` only |
| Production deploy workflow | Claude (PR) | Derived from `deploy-staging.yml`, exact SHA, `production` environment, called from the merge job only after cutover |

## 1. Rehearse (repeat until clean, no production impact)

1. Sites owner produces a rehearsal export (§A) without freezing.
2. Create scratch D1 `spanishcue-rehearsal` in the owner account; apply `drizzle/0000`–`0009` schema; import data only.
3. Verify (§2 queries) against the counts Sites reports for the same export.
4. Point a rehearsal Worker at it on workers.dev; run smoke and the billing checks in §7 read-only.
5. Delete the scratch database after sign-off.

## 2. Verification queries (run on source export report and on imported DB)

```sql
SELECT name FROM sqlite_master WHERE type IN ('table','index','trigger') ORDER BY type, name;
SELECT 'users', count(*) FROM users UNION ALL SELECT 'auth_identities', count(*) FROM auth_identities
UNION ALL SELECT 'access_grants', count(*) FROM access_grants UNION ALL SELECT 'billing_subscriptions', count(*) FROM billing_subscriptions
UNION ALL SELECT 'billing_payments', count(*) FROM billing_payments UNION ALL SELECT 'billing_purchase_claims', count(*) FROM billing_purchase_claims
UNION ALL SELECT 'founder_assignments', count(*) FROM founder_assignments UNION ALL SELECT 'founder_offer_state', count(*) FROM founder_offer_state
UNION ALL SELECT 'payment_webhook_events', count(*) FROM payment_webhook_events UNION ALL SELECT 'billing_outbox_events', count(*) FROM billing_outbox_events
UNION ALL SELECT 'lesson_progress', count(*) FROM lesson_progress UNION ALL SELECT 'students', count(*) FROM students
UNION ALL SELECT 'class_records', count(*) FROM class_records UNION ALL SELECT 'verification_email_deliveries', count(*) FROM verification_email_deliveries;
SELECT environment, offer_code, "limit", claimed FROM founder_offer_state;
SELECT count(*) FROM founder_assignments WHERE environment = 'live';
SELECT count(*) FROM access_grants WHERE status = 'active';
```

`founder_offer_state.claimed` must equal the live `founder_assignments` count,
and the trigger `founder_assignments_increment_claimed` must exist **before**
data import but must not double-count imported rows (import
`founder_assignments` with the trigger temporarily absent, or import
`founder_offer_state` last with its exported values; rehearse which).

## 3. Freeze window (production operation)

1. Announce a short maintenance window.
2. Sites owner releases the write-freeze flag ON (normal `SITES_RELEASE.md` flow). Reads and authorization keep working; sign-up sync, progress, claims, checkout, admin writes and webhooks return 503 (providers retry webhooks).
3. Confirm with smoke plus a write probe that returns 503.

## 4. Final export and import

1. Sites owner takes the final export (§A) after the freeze is confirmed, and reports per-table counts and the ledger.
2. Create `spanishcue-production` D1 in the owner account. Apply `drizzle/0000`–`0009`. Write the ledger rows in Wrangler format (`d1_migrations`) so no migration re-runs.
3. Import data only, in the foreign-key order from `docs/BACKEND_MIGRATION.md`.
4. Run §2 on the new DB; every count must match the export report. Zero mismatches or stop.
5. Record a D1 Time Travel bookmark for the new DB.

## 5. Secrets and configuration (owner, outside chat)

`wrangler secret put --name spanishcue` (or dashboard) for: `FIREBASE_ADMIN_SERVICE_ACCOUNT_B64`, `RESEND_API_KEY`, `PAYPAL_LIVE_CLIENT_SECRET`, `PAYPAL_SANDBOX_CLIENT_SECRET`, `PADDLE_API_KEY`, `PADDLE_WEBHOOK_SECRET`, `LEGAL_OPERATOR_JSON`. Plain vars copied exactly from the Sites env set: `PAYPAL_ENV`, `PAYPAL_LIVE_*` IDs, `PAYPAL_PUBLIC_CHECKOUT_ENABLED`, `PAYPAL_LIVE_SUPERVISED_USER_ID`, `PADDLE_CLIENT_TOKEN`, `PADDLE_PRICE_ID`, `FOUNDER_*`, `ANALYTICS_CONVERSIONS_ENABLED`, `CHESPANISH_*`; build-time `NEXT_PUBLIC_GA4_MEASUREMENT_ID`. Keep the freeze flag ON in the new config.

Rotation order: create new keys where the provider allows two active keys, so Sites keeps working until the switch; revoke old keys only after step 9.

## 6. Deploy and switch

1. Deploy the exact SHA running on Sites to Worker `spanishcue` (production workflow), **without** a route. Smoke it on its workers.dev URL.
2. Sites owner detaches the `spanishcue.com` custom domain from Sites (mechanism per §0).
3. Attach `spanishcue.com` (and `www.spanishcue.com`, which today 308-redirects to the apex) as Worker custom domains. Preserve every DNS record listed in `CLOUDFLARE_MIGRATION_PLAN.md` (Search Console TXT, `firebase=` TXT, SPF, Firebase DKIM CNAMEs, Resend DKIM/SPF/MX, DMARC).
4. Run `production-smoke.mjs` against `https://spanishcue.com`, and check `cf-ray`/response headers come from the new Worker.

## 7. Webhooks and providers

- PayPal Live (and Sandbox) webhook `https://spanishcue.com/api/billing/webhook`: URL unchanged. Confirm the webhook IDs in the new env match the registered webhooks.
- Paddle notification destination `https://spanishcue.com/api/billing/paddle/webhook`: URL unchanged. Confirm the endpoint secret in the new env.
- Firebase authorized domains: `spanishcue.com` already present; nothing to add. Remove `biblioteca-espanol.agnremote.chatgpt.site` only after Sites is retired.
- Resend: domain already verified; no change.

## 8. Unfreeze (go/no-go, one-way door)

Before unfreezing, verify read-only: owner account resolves to `full`; the founder account resolves to `full` (Live billing grant); `founder-status` shows the same `claimed`; a free account is `free`. Then turn the freeze flag OFF on the new Worker. From this moment, rolling back to Sites loses writes unless replayed.

## 9. Retire the Sites controller

Only after production is healthy on Cloudflare for an agreed period, including one successful release and one rollback drill through the new workflow:

1. Sites owner sets `state.json` `enabled: false` via its normal compare-and-swap.
2. Merge the PR that enables the production deploy job in `CI + Auto Merge` and updates `AGENTS.md`, `CLAUDE.md` and `SITES_RELEASE.md`, so there is still exactly one deployer.
3. Keep the Sites deployment idle (not deleted) as a code-level fallback.

## 10. Rollback

- Before step 6.2: nothing to undo; production still on Sites.
- Between 6.2 and 8 (frozen): reattach the domain to Sites; Sites still has all data because writes were frozen. No data loss.
- After 8: code rollback via `wrangler rollback` on the new Worker (same smoke). Host rollback to Sites requires replaying writes made since unfreeze; treat as incident.
- Never run SQL rollback; use D1 Time Travel only with explicit owner authorization.

## A. Request to send to the Sites release owner

> Please produce a read-only export of the SPANISHCUE production D1 (Sites project `appgprj_6a83ba10b0c481919060fc089d581233`, binding `DB`). Do not modify the database, schema, migration ledger or environment.
>
> Deliver:
> 1. A full SQL dump (schema and data) of every table, including the table the platform uses to record applied migrations, with its exact name and rows.
> 2. Per-table row counts taken in the same transaction/snapshot as the dump.
> 3. The list of applied migrations and how Sites records them (expected: 0000–0009 through `0009_glossy_mariko_yashida`).
> 4. The production Worker's `compatibility_date`, compatibility flags and bindings (confirm whether `IMAGES` is bound), and how the `spanishcue.com` custom domain is attached and can be detached.
> 5. The **names** (not values) of every variable and secret in environment set revision 47, and the values of non-secret plain variables.
>
> Deliver the files through a private channel to the owner only (not GitHub, not a public URL). This first export is a rehearsal; a final export will be requested later during a write freeze.
