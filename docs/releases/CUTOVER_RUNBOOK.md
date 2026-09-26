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
| Production D1 export (logical, paginated JSONL + manifest) | Owner, via `/api/admin/export` once Sites releases it | The Sites reader cannot export (2026-09-26); see "Owner export route" in `PRODUCTION_DATA_EXPORT.md`. Import/verify tooling `scripts/import-production-export.mjs` (`unpack`, `check`, `rehearse`, `sql`) is ready |
| `spanishcue.com` zone location | Owner (Cloudflare dashboard) | Zone is not in the connected account |
| How Sites binds the custom domain, and how to detach it | Sites release owner | Must be detachable without DNS downtime |
| Production `compatibility_date` and bindings (`IMAGES`?) | Sites release owner | Build config says `2026-05-15`; no `IMAGES` in build output; production behavior matches no binding |
| Production env set (revision 47) **names and non-secret values** | Sites release owner | Secret values are re-issued from provider consoles, not exported |
| Write-freeze flag | **Done** (`worker/write-freeze.ts`, var `SPANISHCUE_WRITE_FREEZE=true`) | Non-GET `/api/*` returns 503 `WRITE_FREEZE` with `Retry-After: 300`; lesson-progress saves are skipped; pages and reads work. New sign-ins (`POST /api/auth/session`) are also paused |
| Production API token + GitHub `production` environment with required reviewer | Owner | Workers Scripts:Edit, D1:Edit on the owner account; Workers Routes:Edit / Zone read on `spanishcue.com` only |
| Production deploy workflow | **Done, inactive** (`.github/workflows/deploy-production.yml`) | Manual only; repo variable `OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true` + `production` environment reviewer; typed confirmation; modes `inert` / `cutover` / `release`; `release` refuses while Sites `enabled` is not `false`; smoke + auto rollback |

## 0b. Domain and DNS (resolve before the freeze)

Public facts (2026-09-26): registrar **Spaceship** (`clientTransferProhibited`, expires 2027-09-11); nameservers `anuj.ns.cloudflare.com` / `meg.ns.cloudflare.com`; apex and `www` are proxied Cloudflare A/AAAA; two `_acme-challenge` TXT tokens exist (certificate validation, typical of a hostname onboarded to a hosting platform). The zone is **not** visible through the connected Cloudflare connector, which has no zone tools, so which account holds it is unconfirmed.

Resolution:

1. **Zone already in the owner's Cloudflare account** (dash.cloudflare.com → account `3f075f11…` → Websites lists `spanishcue.com`): nothing to move. At cutover the production workflow attaches the Worker custom domains; the proxied apex/`www` records that point at Sites are replaced by the Worker custom domain records.
2. **Zone not in any owner account** (it lives with Sites): in the owner account choose *Add a domain* → `spanishcue.com` → Free plan. It stays **pending** and changes nothing until the nameservers change. Recreate every record below in it (Claude prepares the exact list; the owner or a zone-scoped token enters it). At cutover step 6 the owner changes the nameservers at Spaceship (Domain list → spanishcue.com → Nameservers → Custom) to the two nameservers Cloudflare assigns. Cloudflare-to-Cloudflare moves keep serving from the old zone until the change propagates, so there is no DNS outage, but the Sites custom domain must still be detached by the Sites owner.

Records to preserve exactly (values from public DNS; take DKIM values in full from the provider dashboards):

| Name | Type | Value | Purpose |
|---|---|---|---|
| `spanishcue.com` | TXT | `v=spf1 include:_spf.firebasemail.com ~all` | SPF for Firebase mail |
| `spanishcue.com` | TXT | `firebase=chespanish-32645` | Firebase domain verification |
| `spanishcue.com` | TXT | `google-site-verification=HWGRkszBOV2Nxfsl7dcQgjgskBJ8C7qTdTSe2nuucSY` | Search Console |
| `firebase1._domainkey` | CNAME | `mail-spanishcue-com.dkim1._domainkey.firebasemail.com` | Firebase DKIM (DNS only) |
| `firebase2._domainkey` | CNAME | `mail-spanishcue-com.dkim2._domainkey.firebasemail.com` | Firebase DKIM (DNS only) |
| `resend._domainkey` | TXT | full `p=…` key from Resend → Domains → spanishcue.com | Resend DKIM |
| `send` | CNAME | `send.forge.rmta.net` | Resend return path (DNS only) |
| `rsend` | CNAME | `rsend.forge.rmta.net` | Resend return path (DNS only) |
| `_dmarc` | TXT | `v=DMARC1; p=none;` | DMARC (monitor only) |
| `spanishcue.com`, `www` | Worker custom domain | Worker `spanishcue` | Replaces the proxied A/AAAA to Sites at cutover; `www` keeps its 308 to the apex (handled in `worker/index.ts`) |
| `_acme-challenge` | TXT | not copied | Belongs to the current host's certificates; Cloudflare issues new ones for Worker custom domains |

## 1. Rehearse (repeat until clean, no production impact)

1. Owner downloads a rehearsal export from `/api/admin/export` without freezing.
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

Prerequisite: Sites production runs a release that contains `worker/write-freeze.ts` (merged in `248934d`; any ordinary Sites release of `main` at or after it).

1. Announce a short maintenance window.
2. Sites owner sets the plain variable `SPANISHCUE_WRITE_FREEZE=true` on Sites production (environment change only, no code release). Mutating `/api/*` requests, including both provider webhooks and new sign-in sessions, return 503 `WRITE_FREEZE`; pages, reads and existing authorization keep working; providers retry webhooks.
3. Claude verifies: `production-smoke.mjs` passes, and `POST /api/billing/claim/bind` on `https://spanishcue.com` returns 503 with code `WRITE_FREEZE`.

## 4. Final export and import

1. Owner downloads `/api/admin/export` again while frozen (GET is not frozen) and delivers it privately.
2. Claude runs `import-production-export.mjs check` and `rehearse` on it; any problem stops the cutover (unfreeze Sites and reschedule).
3. Claude uses the existing empty `spanishcue-production` D1 (`343ac454-a056-4c40-a893-f8be572665a6`); if it is not empty, stop. Apply `drizzle/0000`–`0009`, write the `d1_migrations` ledger rows in Wrangler format (production must be confirmed at `0009` from the export metadata), then load the ordered INSERT files from `import-production-export.mjs sql`.
4. Run the §2 queries on the new D1; every count must equal the manifest. Zero mismatches or stop.
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

- Before step 6.2: nothing to undo; production still on Sites. Sites owner removes `SPANISHCUE_WRITE_FREEZE` (unfreeze).
- Between 6.2 and 8 (both hosts frozen): reattach the domain to Sites and remove `SPANISHCUE_WRITE_FREEZE` on Sites. Sites still has all data because writes were frozen. No data loss.
- After 8: code rollback via the production workflow (`action: rollback`) on the new Worker, same smoke. Host rollback to Sites requires replaying writes made since unfreeze; treat as an incident.
- Keep Sites production deployed, frozen and unchanged for the agreed verification window before step 9.
- Never run SQL rollback; use D1 Time Travel only with explicit owner authorization.

## A. Request to send to the Sites release owner

Superseded: use the single logical-export request in `docs/releases/PRODUCTION_DATA_EXPORT.md` (the Sites reader cannot produce a native SQL dump). The same procedure, run during the write freeze, is the final export in §4.
