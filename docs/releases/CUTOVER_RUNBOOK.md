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
| Write-freeze flag | **Done** (`worker/write-freeze.ts`, var `SPANISHCUE_WRITE_FREEZE=true`) | Non-GET `/api/*` returns 503 `WRITE_FREEZE` with `Retry-After: 300`; lesson-progress saves are skipped; pages and reads work. New sign-ins (`POST /api/auth/session`) are also paused |
| Production API token + GitHub `production` environment with required reviewer | Owner | Workers Scripts:Edit, D1:Edit on the owner account; Workers Routes:Edit / Zone read on `spanishcue.com` only |
| Production deploy workflow | **Done, inactive** (`.github/workflows/deploy-production.yml`) | Manual only; repo variable `OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true` + `production` environment reviewer; typed confirmation; modes `inert` / `cutover` / `release`; `release` refuses while Sites `enabled` is not `false`; smoke + auto rollback |

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
2. Use the existing empty `spanishcue-production` D1 (`343ac454-a056-4c40-a893-f8be572665a6`) in the owner account; if it is not empty, stop. Apply `drizzle/0000`–`0009`. Write the ledger rows in Wrangler format (`d1_migrations`) so no migration re-runs.
3. Import data only, in the foreign-key order from `docs/BACKEND_MIGRATION.md`.
4. Run §2 on the new DB; every count must match the export report. Zero mismatches or stop.
5. Record a D1 Time Travel bookmark for the new DB.

## 5. Secrets and configuration (owner, outside chat)

Classification of every production setting after Sites. Values are never
committed or pasted into chat.

| Setting | Kind | Status | How it gets to the new Worker |
|---|---|---|---|
| `FIREBASE_ADMIN_SERVICE_ACCOUNT_B64` | secret | MUST BE RE-ISSUED | Owner creates a new key (Firebase console → Project settings → Service accounts → Generate new private key), base64-encodes it, `wrangler secret put` / dashboard |
| Firebase authorized domains | provider config | ALREADY AVAILABLE | `spanishcue.com` already authorized; no change |
| Firebase web config | public, in code | ALREADY AVAILABLE | `app/firebase-config.ts` |
| `PAYPAL_ENV` | var | CAN BE MIGRATED AUTOMATICALLY | `PRODUCTION_VARS_JSON` (value from Sites env set) |
| `PAYPAL_LIVE_CLIENT_ID`, `PAYPAL_LIVE_PRODUCT_ID`, `PAYPAL_LIVE_FOUNDER_PLAN_ID`, `PAYPAL_LIVE_WEBHOOK_ID` | vars (identifiers) | MUST BE ENTERED BY OWNER | Copy from PayPal Developer Dashboard (Live app, product, plan, webhook) into `PRODUCTION_VARS_JSON` |
| `PAYPAL_LIVE_CLIENT_SECRET` | secret | MUST BE ENTERED BY OWNER | PayPal Developer Dashboard → Live app → secret (add a second secret if offered, so Sites keeps working) |
| PayPal webhook destination | provider config | ALREADY AVAILABLE | `https://spanishcue.com/api/billing/webhook`, unchanged by cutover |
| `PAYPAL_PUBLIC_CHECKOUT_ENABLED`, `PAYPAL_LIVE_SUPERVISED_USER_ID` | vars | CAN BE MIGRATED AUTOMATICALLY | Values from Sites env set |
| `PAYPAL_SANDBOX_*` | vars + secret | NOT REQUIRED in production unless Sandbox testing on production is wanted | — |
| `PADDLE_API_KEY`, `PADDLE_WEBHOOK_SECRET` | secrets | MUST BE RE-ISSUED | Paddle → Developer tools → Authentication (new API key); Notifications → destination secret. Create new, keep old active until step 9 |
| `PADDLE_CLIENT_TOKEN`, `PADDLE_PRICE_ID` | vars | MUST BE ENTERED BY OWNER | Paddle dashboard → client-side token; catalog price ID |
| Paddle webhook destination | provider config | ALREADY AVAILABLE | `https://spanishcue.com/api/billing/paddle/webhook`, unchanged |
| `RESEND_API_KEY` | secret | MUST BE RE-ISSUED | Resend → API Keys → create a sending-only key for `spanishcue.com` |
| Resend sender/domain | provider config | ALREADY AVAILABLE | `verify@spanishcue.com`; domain verified |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | build-time + runtime var | MUST BE ENTERED BY OWNER | GA4 → Admin → Data streams → Measurement ID. Note: GA4 reported no data in 28 days; confirm whether production sets it at all |
| `ANALYTICS_CONVERSIONS_ENABLED` | var | CAN BE MIGRATED AUTOMATICALLY | Value from Sites env set |
| `FOUNDER_OFFER_ENABLED`, `FOUNDER_OFFER_CODE`, `FOUNDER_LIMIT`, `FOUNDER_PRICE_USD` | vars | CAN BE MIGRATED AUTOMATICALLY | Values from Sites env set (code defaults otherwise) |
| `CHESPANISH_OWNER_UID`, `CHESPANISH_OWNER_EMAIL`, `CHESPANISH_APPLE_AUTH_ENABLED` | vars | CAN BE MIGRATED AUTOMATICALLY | Values from Sites env set |
| `LEGAL_OPERATOR_JSON` | secret-like | MUST BE ENTERED BY OWNER | Owner's legal operator JSON; `wrangler secret put` |
| `SPANISHCUE_WRITE_FREEZE` | var | Set `true` for the cutover window only | `PRODUCTION_VARS_JSON` |

GitHub `production` environment (owner creates; required reviewer = owner):
secret `CLOUDFLARE_API_TOKEN_PRODUCTION` (Account · Workers Scripts · Edit and
Account · D1 · Edit on the owner account, plus Zone · Workers Routes · Edit on
`spanishcue.com` only), variables `CLOUDFLARE_ACCOUNT_ID`, `PRODUCTION_D1_ID`,
`PRODUCTION_VARS_JSON` (JSON object of the plain vars above),
`PRODUCTION_COMPATIBILITY_DATE`, `PRODUCTION_WORKERS_DEV_URL`; repository
variable `OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true` only when the cutover
starts.

Rotation order: create new keys where the provider allows two active keys, so Sites keeps working until the switch; revoke old keys only after step 9.

## 6. Deploy and switch

1. Run "Deploy Production (Cloudflare, owner-authorized)" with `mode: inert`, the exact SHA running on Sites and `confirm: deploy <sha>`. It deploys Worker `spanishcue` on workers.dev only and smokes it.
2. Sites owner detaches the `spanishcue.com` custom domain from Sites (mechanism per §0).
3. Run the same workflow with `mode: cutover` and `confirm: CUTOVER spanishcue.com <sha>`: it attaches `spanishcue.com` and `www.spanishcue.com` (which 308-redirects to the apex) as Worker custom domains and turns workers.dev off. Preserve every DNS record listed in `CLOUDFLARE_MIGRATION_PLAN.md` (Search Console TXT, `firebase=` TXT, SPF, Firebase DKIM CNAMEs, Resend DKIM/SPF/MX, DMARC).
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
2. Merge the PR that updates `AGENTS.md`, `CLAUDE.md` and `SITES_RELEASE.md` to name `deploy-production.yml` (`mode: release`) as the only production deployer. `release` mode refuses to run until `state.json` says `enabled: false`.
3. Keep the Sites deployment idle (not deleted) as a code-level fallback.

## 10. Rollback

- Before step 6.2: nothing to undo; production still on Sites.
- Between 6.2 and 8 (frozen): reattach the domain to Sites; Sites still has all data because writes were frozen. No data loss.
- After 8: code rollback via `wrangler rollback` on the new Worker (same smoke). Host rollback to Sites requires replaying writes made since unfreeze; treat as incident.
- Never run SQL rollback; use D1 Time Travel only with explicit owner authorization.

## A. Request to send to the Sites release owner (single consolidated request)

> SPANISHCUE is preparing to move production from OpenAI Sites to an owner-controlled Cloudflare account. This request is **read-only**. Do not deploy, modify the database, schema, migration ledger, environment set, secrets, custom domain or `automation/sites-release-state`. Sites remains the production deployer until the owner says otherwise.
>
> Sites project `appgprj_6a83ba10b0c481919060fc089d581233`, D1 binding `DB`, production v176 (source `ae4bfc50b39f95432a9c3c20477d25fbd6ca523f`) or the current healthy version.
>
> Please deliver, as files, to the owner only (private channel; not GitHub, not a public URL):
>
> 1. A complete SQL dump of the production D1 (schema and all data), taken from one consistent snapshot.
> 2. The migration ledger: the exact table Sites uses to record applied migrations, its schema and all rows (expected 0000–0009, last `0009_glossy_mariko_yashida`).
> 3. The list of all tables.
> 4. Row counts for every table, from the same snapshot as the dump.
> 5. All index, trigger and view definitions (`SELECT type, name, tbl_name, sql FROM sqlite_master`).
> 6. The Worker `compatibility_date` and compatibility flags used in production.
> 7. Every Worker binding name and type (D1, assets, Images, any other).
> 8. Every production plain-variable **name**, with values for the non-secret ones.
> 9. Every production secret **name** (no values; they will be re-issued in the provider consoles).
> 10. The current custom domain / route configuration for `spanishcue.com` and `www.spanishcue.com`, and the supported way to detach it later.
> 11. Whether an `IMAGES` (Cloudflare Images) binding is attached.
> 12. The current production version ID and deployment ID.
> 13. The previous healthy version ID.
> 14. The current `automation/sites-release-state` `state.json` values relevant to releases (enabled, status, healthy, previous), and confirmation that none of this changes it.
> 15. Any OpenAI-specific packaging or configuration that must be replaced outside Sites (for example `.openai/hosting.json`, `dist/.openai`, source-branch mechanics, the backup ref `refs/tags/production-v161-preserved` and source `c49bd60`).
>
> This first export is a rehearsal. A final export will be requested later during a short write freeze.
