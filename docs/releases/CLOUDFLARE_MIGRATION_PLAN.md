# GitHub Actions + Cloudflare deployment: migration plan

Status: **prepared, not executed.** Nothing here is active. This document does
not authorize creating Cloudflare resources, adding a deploy workflow, running
`wrangler deploy`, applying D1 migrations, moving DNS, or changing Firebase,
PayPal, Paddle, Resend or any secret. Each phase in §4 needs its own explicit
owner authorization.

The canonical production mechanism remains the Sites release controller
(`docs/releases/SITES_RELEASE.md`) until the cutover phase completes. This plan
implements Option C of `docs/CLAUDE_RELEASE_TRANSITION.md`; read that document
first for risks, rollback limits and the zero-downtime strategy.

Prepared 2026-09-25 from `main` at `572d904`. Re-read `main` before acting.

No secret values appear in this file. Every item below is a **name**.

**Audit update 2026-09-25** (read-only, see `docs/CLAUDE_OPERATIONS.md`):

- The Cloudflare account connected to Claude holds no Workers, D1 or KV, and R2 is not enabled. Production does not live there; it could host the new staging and production resources.
- Registrar: Spaceship (expires 2027-09-11). NS `anuj`/`meg.ns.cloudflare.com`. The owning Cloudflare account is still **Unknown**; the connector has no zone access.
- `www.spanishcue.com` resolves (proxied A records) and 308-redirects to the apex. Carry it over.
- DNS records to preserve include: apex TXT `google-site-verification`, `firebase=chespanish-32645`, SPF `include:_spf.firebasemail.com`; `firebase1/2._domainkey` CNAMEs; `resend._domainkey` TXT; `send` MX and SPF; `_dmarc` (`p=none`).
- Firebase authorized domains already include `spanishcue.com`; staging needs its hostname added (owner action).
- Inactive drafts of the Worker config and workflows: `docs/releases/cloudflare-drafts/`.
- Re-audit (connectors connected): the connected Cloudflare account still has no zone access and no production resources. Staging D1 `spanishcue-staging` was created there with the `drizzle/` schema and no data (`docs/CLAUDE_OPERATIONS.md` §10). Phase 2 still needs a scoped API token for a staging Worker.

---

## 1. Principles

1. **One canonical deployer.** Until cutover, Sites deploys and the new workflow targets staging only. At cutover the Sites controller is disabled (`state.json` `enabled: false`, written by the Sites owner through its normal compare-and-swap) in the same step that makes the Cloudflare workflow the production deployer. They never both deploy to `spanishcue.com`.
2. **Deploy from the merge job, not from `on: push`.** Merges by `CI + Auto Merge` use `GITHUB_TOKEN`, and GitHub does not start new workflow runs from `GITHUB_TOKEN` pushes. The production deploy must be a job in (or `workflow_call`ed from) the merge job, or a `workflow_dispatch` with an exact merged SHA.
3. **Migration-sensitive changes still follow `MIGRATION_RELEASE.md`.** A new `wrangler.*` file and any `vite.config.ts` or `.openai/hosting.json` edit are migration-sensitive under `scripts/release-policy.mjs`.
4. **Deploys never mutate D1.** Automatic deploys and rollbacks do not apply migrations. Migrations are a separate, gated job that requires a manual approval.
5. **Secrets by name only.** Values are entered by the owner into Cloudflare (`wrangler secret put` or dashboard) or GitHub environment secrets. They are never pasted into chat, issues, PRs or files.

## 2. Inventory

Evidence: every item was read from this repository unless marked **Unknown**
(needs owner or provider-console access).

### 2.1 Worker configuration needed

Today the Worker config is generated in `vite.config.ts` (`localBindingConfig`)
and `@cloudflare/vite-plugin` 1.37.1 / `wrangler` 4.92.0. Sites supplies the rest.

| Setting | Current source value | Needed for Cloudflare |
|---|---|---|
| `main` | `./worker/index.ts` | Same |
| Build output | `dist/server/index.js` (ESM, `default.fetch`), `dist/client` assets | Same; built by `npm run build` on Linux |
| `compatibility_flags` | `["nodejs_compat"]` | Same |
| `compatibility_date` | Not set (Sites supplies) | Must be set. **Unknown:** the value production uses; match it |
| `name` | Not set | Choose, e.g. `spanishcue` (production) and `spanishcue-staging` |
| `account_id` | Not set | Owner Cloudflare account ID (not secret, but keep in GitHub variable `CLOUDFLARE_ACCOUNT_ID`) |
| `assets.binding` | `ASSETS` | Same |
| `assets.run_worker_first` | `true` in builds | Same. Required so premium media always passes authorization |
| D1 binding | `DB` (from `.openai/hosting.json`), placeholder `database_id` `00000000-0000-4000-8000-000000000000`, name `site-creator-d1` | Real `database_id` per environment. The placeholder must never reach a deploy config |
| `IMAGES` binding | Used by `worker/index.ts` for `/_vinext/image`; not declared in `vite.config.ts` | Declare `images = { binding = "IMAGES" }` if production has it. **Unknown:** whether production binds it |
| R2 | `null` | None |
| Cron triggers / queues / Durable Objects | None | None |
| Routes / custom domain | Not set (Sites supplies) | `spanishcue.com` custom domain on production only. Also `www.spanishcue.com` if it currently resolves (**Unknown**) |
| Observability | Sites Worker logs | Enable Workers Logs, needed for the post-deploy error-log correlation step |

Implementation choice (Phase 1): add an `environments`-aware Wrangler config
(`wrangler.jsonc`) that the Cloudflare Vite plugin reads through its
`configPath` option, keeping `localBindingConfig` as the local-dev fallback.
This is a migration-sensitive change.

### 2.2 D1 databases and bindings needed

| Item | Value |
|---|---|
| Binding name | `DB` (referenced about 100 times in app/worker code; do not rename) |
| Databases | `spanishcue-staging` and `spanishcue-production` in the owner account |
| Schema source | `drizzle/0000` through `drizzle/0009_glossy_mariko_yashida.sql` |
| Production migration level | Applied through `0009` (`billing_purchase_claims`) |
| Migration ledger | Imported DB must record 0000–0009 as applied, or `wrangler d1 migrations apply` would re-run them (forbidden). **Unknown:** Sites' ledger format |
| Triggers / constraints | `founder_assignments_increment_claimed` and billing uniqueness constraints must exist before data import. Build schema from `drizzle/`, then import data only |
| Import order | `docs/BACKEND_MIGRATION.md` |
| Data source | Production D1 export from Sites. **Unknown:** whether Sites supports a consistent export |
| Recovery | D1 Time Travel is available on owner accounts; using it would be a new capability needing its own authorization rule |

### 2.3 Worker secrets and environment variable names needed

Names only. "Secret" means use `wrangler secret put`; "var" may be a plain
Worker variable. None may be committed.

| Group | Name | Kind | Notes |
|---|---|---|---|
| Owner / auth | `CHESPANISH_OWNER_UID` | var | Carry over exactly; see `app/firebase-session.ts` |
| | `CHESPANISH_OWNER_EMAIL` | var | Carry over exactly |
| | `CHESPANISH_APPLE_AUTH_ENABLED` | var | `"true"` shows Apple sign-in |
| | `FIREBASE_ADMIN_SERVICE_ACCOUNT_B64` | secret | Base64 service-account JSON |
| Email | `RESEND_API_KEY` | secret | |
| PayPal | `PAYPAL_ENV` | var | Selects Sandbox or Live |
| | `PAYPAL_LIVE_CLIENT_ID` | var | |
| | `PAYPAL_LIVE_CLIENT_SECRET` | secret | |
| | `PAYPAL_LIVE_PRODUCT_ID` | var | |
| | `PAYPAL_LIVE_FOUNDER_PLAN_ID` | var | |
| | `PAYPAL_LIVE_WEBHOOK_ID` | var | Treat as sensitive |
| | `PAYPAL_SANDBOX_CLIENT_ID` | var | |
| | `PAYPAL_SANDBOX_CLIENT_SECRET` | secret | |
| | `PAYPAL_SANDBOX_PRODUCT_ID` | var | |
| | `PAYPAL_SANDBOX_FOUNDER_PLAN_ID` | var | |
| | `PAYPAL_SANDBOX_WEBHOOK_ID` | var | |
| | `PAYPAL_PUBLIC_CHECKOUT_ENABLED` | var | |
| | `PAYPAL_LIVE_SUPERVISED_USER_ID` | var | |
| | `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET` (secret), `PAYPAL_PRODUCT_ID`, `PAYPAL_FOUNDER_PLAN_ID`, `PAYPAL_WEBHOOK_ID` | mixed | Sandbox-only legacy bridge; set only if production sets them today |
| Paddle (Live only) | `PADDLE_API_KEY` | secret | |
| | `PADDLE_CLIENT_TOKEN` | var | Public client token |
| | `PADDLE_PRICE_ID` | var | |
| | `PADDLE_WEBHOOK_SECRET` | secret | |
| Offer | `FOUNDER_OFFER_ENABLED`, `FOUNDER_OFFER_CODE`, `FOUNDER_LIMIT`, `FOUNDER_PRICE_USD` | var | See `docs/billing-contract.md` |
| Legal | `LEGAL_OPERATOR_JSON` | secret | Preferred. Legacy fallbacks: `LEGAL_NAME`, `LEGAL_ENTITY_TYPE`, `LEGAL_REGISTRATION`, `LEGAL_TAX_ID`, `LEGAL_ADDRESS`, `LEGAL_COUNTRY`, `LEGAL_SUPPORT_EMAIL`, `LEGAL_PRIVACY_EMAIL`, `LEGAL_GOVERNING_LAW`, `LEGAL_COURTS`, `LEGAL_EFFECTIVE_DATE`, `LEGAL_REFUND_POLICY_EN`, `LEGAL_REFUND_POLICY_ES`, `LEGAL_WITHDRAWAL_POLICY_EN`, `LEGAL_WITHDRAWAL_POLICY_ES` |
| Analytics | `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | build-time var and runtime var | Read by `app/marketing/GoogleAnalytics.tsx` at build and `app/legal/LegalDocument.tsx` at runtime |
| | `ANALYTICS_CONVERSIONS_ENABLED` | var | |

Staging must use Sandbox PayPal and must not receive Live Paddle, Live PayPal,
or production Firebase Admin credentials unless the owner decides otherwise.
**Unknown:** whether Paddle has a sandbox account for staging; the code calls
`https://api.paddle.com` (Live) only.

### 2.4 Cloudflare resources needed

| Resource | Purpose |
|---|---|
| Owner-controlled Cloudflare account | Hosts Worker and D1 |
| Workers (paid plan recommended) | `spanishcue-staging`, `spanishcue` |
| D1 databases | `spanishcue-staging`, `spanishcue-production` |
| Cloudflare Images binding | Only if production uses `IMAGES` (**Unknown**) |
| Workers Logs / observability | Post-deploy error correlation |
| `spanishcue.com` zone | Must be in the owner account. **Unknown:** today it uses `meg`/`anuj.ns.cloudflare.com`; which account owns it |
| Staging hostname | e.g. `staging.spanishcue.com` or a `*.workers.dev` subdomain; protect with Cloudflare Access if on the main zone |
| Scoped API tokens | `CLOUDFLARE_API_TOKEN_STAGING` and `CLOUDFLARE_API_TOKEN_PRODUCTION`, each limited to the account's Workers Scripts:Edit and D1:Edit (plus Workers Routes:Edit on the zone for production). No Global API Key |

### 2.5 GitHub Actions workflows needed

| Workflow | Trigger | Does | Phase |
|---|---|---|---|
| `CI + Auto Merge` (existing) | PR | Unchanged verify + merge. At cutover, gains a final job that calls the deploy workflow with `MERGE_SHA` | 4 |
| `deploy-cloudflare.yml` (new) | `workflow_call` (from merge job) and `workflow_dispatch` (input: exact 40-char SHA, target env) | Checks out the exact SHA; asserts it is on `main`; runs `release-policy.mjs classify` against the last healthy SHA and stops on exit 42; takes the release lock via the existing `automation/sites-release-state` compare-and-swap (adapted to Cloudflare IDs); `npm ci`, `npm run build`, `npm run validate:artifact`; `wrangler versions upload`; `wrangler versions deploy`; runs `scripts/production-smoke.mjs` against the target origin; on failure rolls back to the previous Worker version and reruns smoke; records the result and unlocks | 2 (staging), 4 (production) |
| `d1-migrate.yml` (new) | `workflow_dispatch` only, GitHub environment with required reviewer | `wrangler d1 migrations list` then `apply` for one named database. Never called by deploy or rollback | 2 |
| `Production Smoke Monitor` (existing) | schedule | Unchanged; add a staging target input later | — |
| `Main Health + Auto Rollback` (existing) | push to main | Unchanged | — |

GitHub configuration: environments `staging` and `production`; `production`
restricted to the `main` branch with a required reviewer during the first
releases. Secrets `CLOUDFLARE_API_TOKEN_STAGING`, `CLOUDFLARE_API_TOKEN_PRODUCTION`;
variables `CLOUDFLARE_ACCOUNT_ID`, `SPANISHCUE_PRODUCTION_ORIGIN`,
`SPANISHCUE_STAGING_ORIGIN`. Application secrets stay in Cloudflare, not
GitHub.

### 2.6 Firebase configuration needed

| Item | State |
|---|---|
| Project | `chespanish-32645` (compiled in `app/firebase-config.ts`; web config is public by design) |
| Auth providers used | Email/password, Google, Apple (`OAuthProvider("apple.com")`, gated by `CHESPANISH_APPLE_AUTH_ENABLED`) |
| Authorized domains | Must include `spanishcue.com` (unchanged) and the staging hostname (add in Phase 2) |
| Action links | `server/verification-template.ts` accepts hosts `chespanish-32645.firebaseapp.com` and `spanishcue.com`, and rewrites to `https://spanishcue.com/auth/action`. Staging verification links will still point at production unless that code changes; decide in Phase 2 |
| Admin SDK | `FIREBASE_ADMIN_SERVICE_ACCOUNT_B64`. Prefer a new service-account key for the new host rather than extracting the Sites value |
| Apple sign-in | Return URLs registered with Apple point at the Firebase auth domain; unchanged if the domain is unchanged. **Unknown:** confirm in Apple Developer console |

### 2.7 Paddle configuration needed

| Item | State |
|---|---|
| Environment | Live only (`https://api.paddle.com`, `cdn.paddle.com/paddle/v2/paddle.js`) |
| Notification destination | `https://spanishcue.com/api/billing/paddle/webhook` (route exists in repo; **Unknown:** confirm exact registered URL) |
| Checkout / confirm routes | `/api/billing/paddle/checkout`, `/api/billing/paddle/confirm` |
| Approved domain | `spanishcue.com` must stay approved for Paddle.js checkout |
| Credentials | `PADDLE_API_KEY`, `PADDLE_CLIENT_TOKEN`, `PADDLE_PRICE_ID`, `PADDLE_WEBHOOK_SECRET` |
| Open issues | Anonymous Live checkout returned 502 at v172/v173 (state); refunds/adjustments have no handler (`docs/billing-contract.md`) |

No URL change is needed if the domain is unchanged. Create a second API key and
a second notification secret only if the plan requires parallel hosts; rotating
the existing ones would break Sites before cutover.

### 2.8 PayPal configuration needed

| Item | State |
|---|---|
| Environments | Sandbox (`api-m.sandbox.paypal.com`) and Live (`api-m.paypal.com`) selected by `PAYPAL_ENV` |
| Webhook URL | `https://spanishcue.com/api/billing/webhook` (route exists; **Unknown:** confirm exact URL registered for each environment) |
| Webhook IDs | `PAYPAL_SANDBOX_WEBHOOK_ID`, `PAYPAL_LIVE_WEBHOOK_ID` must match the registered webhooks |
| Product / plan | `PAYPAL_*_PRODUCT_ID`, `PAYPAL_*_FOUNDER_PLAN_ID` |
| Staging | Register a separate Sandbox webhook for the staging hostname; never point a Live webhook at staging |

### 2.9 Resend configuration needed

| Item | State |
|---|---|
| API | `https://api.resend.com/emails` with `RESEND_API_KEY` |
| Sender | `SPANISHCUE <verify@spanishcue.com>` (`server/verification-template.ts`) |
| Domain | `spanishcue.com` verified in Resend; its SPF/DKIM (and any MX on a `send.` subdomain) DNS records must be carried over exactly if the zone moves |
| Staging | Use a separate, restricted API key, or leave unset so staging cannot send mail |

Per `AGENTS.md`, do not change working Firebase/Resend verification as part of
this infrastructure work.

### 2.10 Domain and DNS configuration needed

| Item | State |
|---|---|
| Apex | `spanishcue.com`, Cloudflare nameservers `meg`/`anuj.ns.cloudflare.com`, proxied A records (public lookup) |
| Zone owner | **Unknown.** If Sites manages the zone, the zone must be moved to the owner account before cutover, preserving every record |
| Records to preserve | Resend SPF/DKIM/return-path, any MX, Google Search Console / GA verification TXT, Paddle domain verification if any, `www` if present |
| Current binding | **Unknown:** how Sites attaches the custom domain; it must be detached cleanly at cutover |
| New binding | Worker custom domain `spanishcue.com` on `spanishcue` (production) |
| Staging | `staging.spanishcue.com` custom domain or `workers.dev` |
| TLS | Cloudflare edge certificate (automatic for custom domains) |
| Cookies | `__Host-spanishcue-claim-*` and session cookies are host-bound; they survive only if the hostname is unchanged |

## 3. What does not change

Application code, the auth and billing trust model, the Firebase project, the
PayPal and Paddle accounts, the domain name, the build scripts
(`install-ci.sh`, `sites-env.sh`, `build/sites-vite-plugin.ts` run fine on
Linux CI), and the `CI + Auto Merge` verify gates.

## 4. Phases

Each phase is a separate owner-authorized task and its own PR.

0. **Prerequisites (owner, read-only).** Resolve every **Unknown** above. Fix the access-grant product-code discrepancy (`docs/CLAUDE_RELEASE_TRANSITION.md` §7) through a normal PR released by Sites.
1. **Config PR (migration-sensitive).** Add `wrangler.jsonc` with `staging` and `production` environments and wire it into `vite.config.ts`. No real IDs until the resources exist. Follows `MIGRATION_RELEASE.md`. Released by Sites like any other merge; it must not change the Sites build output.
2. **Staging.** Owner creates the account resources, staging D1, API tokens and staging secrets. Add `deploy-cloudflare.yml` (staging only) and `d1-migrate.yml`. Apply `drizzle/` to staging D1 through `d1-migrate.yml`. Deploy, smoke, and drill a rollback on staging.
3. **Data rehearsal.** Import a production export into a scratch D1. Reconcile row counts, users, identities, grants, founder counters, billing uniqueness and the migration ledger until there are zero mismatches.
4. **Cutover (authorized production operation).** Ship the maintenance/write-freeze flag first. Freeze writes on Sites, take the final export, import, verify, switch the custom domain, smoke, unfreeze. In the same change set: the Sites owner sets `enabled: false` in `state.json`, and the merge job starts calling `deploy-cloudflare.yml` for production. Update `AGENTS.md`, `CLAUDE.md` and `SITES_RELEASE.md` so there is still one canonical mechanism.
5. **Retire Sites.** Only after a successful production release and rollback drill on Cloudflare. Keep Sites idle as a code-level fallback for a defined period.
