# SPANISHCUE operations map for Claude Code

Permanent map of every external service SPANISHCUE uses, how Claude Code can
reach it, and what it may change. It never contains secret values.

Audited 2026-09-25 from `main` at `2cf1c1e`; connectors re-audited the same day from `7c19738`. Production at audit time:
Sites v175, source `572d904` (`automation/sites-release-state`, status
`idle`, smoke 10/10). Access and connector state change over time: re-check
before relying on a row.

Rules that apply everywhere: `AGENTS.md` (shared authority), `CLAUDE.md`
(owner-only actions). Read-only means Claude may look, never write.

---

## 1. Service map

| Service | Current owner / operator | Claude access now | How Claude accesses it | Claude write capability | Production risk | Secret location | OpenAI dependency | Migration status |
|---|---|---|---|---|---|---|---|---|
| GitHub repo, PRs, Actions | Owner (`agnremote-code`) | Connected (admin token) | `gh` CLI, `git` | Branches `claude/*`, PRs. Merge only by `CI + Auto Merge` | Medium: workflow edits change CI | GitHub keyring on owner Mac | None | Done |
| GitHub rulesets / settings | Owner | Connected (admin) | `gh api` | **Not used**: owner-only | High | — | None | Done |
| Production hosting (Worker, versions, deploy, rollback, logs) | OpenAI Sites release owner | Not connected | None available | None | High | Sites | **Full** | Blocked; see §3 |
| Cloudflare (owner account) | Owner | Connected, read/write MCP | "Cloudflare Developer Platform" connector | Workers, D1, KV, R2, Hyperdrive tools. No zone, DNS, route or account-switch tools | Low: this account serves no SPANISHCUE traffic | Connector OAuth | None | Holds only staging D1 `spanishcue-staging` (see §10). No Workers, no production D1, R2 not enabled. Does **not** own production |
| Production D1 | OpenAI Sites | Not connected | None | None | Critical | Sites | **Full** | Needs export capability from Sites |
| DNS `spanishcue.com` | **Unknown** Cloudflare account (NS `anuj`/`meg.ns.cloudflare.com`); registrar Spaceship, expires 2027-09-11 | Public lookups only | DNS-over-HTTPS | None | Critical | Registrar / Cloudflare dashboard | Possible (if Sites manages the zone) | Owner must identify zone account |
| Firebase Auth `chespanish-32645` | Owner Google account | Connected, read/write | Firebase plugin MCP (`agnremote@gmail.com`), public Identity Toolkit config endpoint | Plugin can deploy/modify. **Not used**: Auth config is owner-only | High | Firebase console; Admin key in Sites env (`FIREBASE_ADMIN_SERVICE_ACCOUNT_B64`) | Admin secret stored in Sites | No host coupling if domain unchanged |
| Paddle Live | Owner Paddle account | Not connected (no official hosted connector in the directory) | Official Paddle MCP needs a read-only API key (see §4) | None | Critical (real charges) | Sites env (`PADDLE_*`) | Secrets in Sites | Needs secrets re-entered on new host |
| PayPal Live | Owner PayPal account | Connected (Live) | Official PayPal connector | Tools exposed: transactions, invoices, disputes, payment links. No product/plan/webhook/subscription tools, so plans and webhook URLs cannot be audited through it. Can create invoices/payment links: **read-only use only** | Critical | Sites env (`PAYPAL_*`) | Secrets in Sites | Needs secrets re-entered on new host. Sandbox not reachable through this connector |
| Resend | Owner Resend account | Connected | Official Resend connector | Can send mail, create/remove keys, domains and webhooks. **Read-only use only** | Medium (sends real email) | Sites env (`RESEND_API_KEY`) | Secret in Sites | `spanishcue.com` verified (see §6). Key must be re-entered on new host |
| GA4 | Owner Google account | Connected via Windsor.ai | Windsor.ai `googleanalytics4`, property `553569142` ("chespanish-32645") | Read-only reporting | Low | Measurement ID in Sites env (`NEXT_PUBLIC_GA4_MEASUREMENT_ID`) | Build-time var in Sites | **No data in last 28 days**: tag likely not configured in production, or consent-gated with no opt-ins. Owner to check |
| Google Ads | Owner | Connected via Windsor.ai | Windsor.ai `google_ads`, customer `423-495-3611` | Read-only reporting. Campaign edits owner-only | Medium (spend) | Google Ads | None | No campaign activity in last 28 days |
| Google Search Console | Owner | Connected via Windsor.ai | Windsor.ai `searchconsole`, `sc-domain:spanishcue.com` | Read-only | Low | DNS TXT `google-site-verification` | None | 18 impressions, 0 clicks in last 28 days. Keep TXT record on any zone move |
| Meta Ads | Owner | Not connected (no Meta account linked inside Windsor.ai) | Windsor.ai `facebook` once linked | Read-only | Low | Meta | None | No Meta pixel in repo |
| Google Drive / Gmail / Calendar | Owner | Connected (`agnremote@gmail.com`) | Official Google connectors | Gmail: drafts only, sending needs owner confirmation each time. Drive/Calendar: read; writes on request | Low–medium (personal account) | Google account | None | Personal account; not SPANISHCUE-specific |
| Canva | Owner | Connected | Official Canva connector | Create, edit, export designs; generate images | Low | Canva | None | No Brand Kit configured |
| Browser / production testing | — | Connected | Built-in browser pane; `scripts/production-smoke.mjs` | Read-only page visits | Low (never click pay) | — | None | Done |
| Image/CDN | `/_vinext/image` route; `IMAGES` binding not in build config | — | — | None | Low | — | None observable | Production v176 returns originals at every width, same as the no-binding fallback; staging omits `IMAGES` for parity |
| Fonts | Google Fonts | — | — | — | Low | — | None | No change |

Content images from Unsplash, Pexels and Wikimedia are referenced by URL in
lesson source; they are not integrations.

## 2. Claude environment audit (2026-09-25)

- **GitHub:** `gh` authenticated as `agnremote-code` with admin, push and maintain. Actions: `CI + Auto Merge`, `Main Health + Auto Rollback`, `Production Smoke Monitor` (every 6 h, passing). No Actions secrets, variables or environments exist. Ruleset "Protect main": blocks deletion and non-fast-forward (force-push), requires a PR, no bypass actors. No required status checks. Repository auto-merge setting is off; merging is done by the workflow.
- **Cloudflare:** official "Cloudflare Developer Platform" connector connected. The connected account holds no Workers, D1 or KV, and R2 is not enabled, so production does not live in it. The connector has no zone or DNS tools.
- **Firebase:** official plugin connected as `agnremote@gmail.com`; it sees project `chespanish-32645` ("CHESPANISH"). No active project is set and no `firebase.json` exists, by design.
- **Firebase Auth config (read-only):** authorized domains are `localhost`, `chespanish-32645.firebaseapp.com`, `chespanish-32645.web.app`, `biblioteca-espanol.agnremote.chatgpt.site`, `spanishcue.com`. Google provider enabled. Apple provider **not configured** in Firebase (matches the app flag). `www.spanishcue.com` is not authorized; it 308-redirects to the apex, so sign-in always happens on `spanishcue.com`. Email/password could not be confirmed without a sign-in attempt; confirm in the console.
- **Local CLIs:** `gh`, `git`, `node`. Not installed: `wrangler` (repo devDependency, needs `npm ci`), `gcloud`, `firebase` (available via `npx firebase-tools`).
- **Browser:** built-in pane works. `/acceso` renders "Pagar con tarjeta · US$15/mes" (Paddle) and "Pagar con PayPal" with no console errors. Buttons were **not** clicked, because that creates a provider transaction and D1 checkout rows.
- **Smoke:** `node scripts/production-smoke.mjs` passed all 10 checks. `/api/billing/founder-status` reports mode `live`, limit 1000, **claimed 1**.

## 3. OpenAI Sites dependencies

| Dependency | Where | Classification |
|---|---|---|
| Deploy (save version, deploy) | `SITES_RELEASE.md` steps 6–7 | MUST REMAIN TEMPORARILY ON SITES |
| Worker versions and rollback | `state.json` `healthy`/`previous` IDs (`appgver_…`, `appgdep_…`) | MUST REMAIN TEMPORARILY ON SITES |
| Release controller bookkeeping | `scripts/release-policy.mjs`, `automation/sites-release-state` | CAN MIGRATE NOW SAFELY (plain Node + GitHub refs); keep one writer |
| Smoke tests | `scripts/production-smoke.mjs`, both workflows | CAN MIGRATE NOW SAFELY (already in GitHub Actions) |
| Worker error logs | Sites native | MUST REMAIN TEMPORARILY ON SITES |
| Production D1 | Sites-provisioned | NEEDS PRODUCTION DATA + NEEDS OWNER AUTHORIZATION |
| D1 migration ledger | Sites (format unknown); applied through `0009` | NEEDS PRODUCTION DATA |
| Secrets and env set (revision 47) | Sites environment | NEEDS SECRET (re-enter from provider consoles) |
| Custom domain binding | Sites (mechanism unknown) | NEEDS DNS CUTOVER + NEEDS OWNER AUTHORIZATION |
| `IMAGES` binding | Supplied by Sites, not declared in repo | NEEDS OWNER AUTHORIZATION (confirm, then declare) |
| Build packaging | `build/sites-vite-plugin.ts` writes `dist/.openai/`; `validate-artifact.sh` requires it | CAN MIGRATE NOW SAFELY later; keep until cutover because Sites needs it |
| `.openai/hosting.json` | D1 binding name + Sites project ID | MUST REMAIN TEMPORARILY ON SITES |
| Source git remote | Sites source branch (credential-gated) | MUST REMAIN TEMPORARILY ON SITES |
| v161 backup ref `production-v161-preserved`, source `c49bd60` | Not on GitHub | Possibly Sites-only; owner to confirm |
| Firebase authorized domain `biblioteca-espanol.agnremote.chatgpt.site` | Firebase Auth | Old Sites preview host. Remove only after owner confirms it is unused (owner action) |
| Privacy policy provider table | `app/legal/LegalDocument.tsx`, `PrelaunchLegalDocument.tsx` name "OpenAI Sites / Cloudflare" | Update at cutover. Note: the live table lists PayPal but not **Paddle** or **Resend**; owner/legal decision |

The GitHub Actions + Cloudflare target, inventory and phases are in
`docs/releases/CLOUDFLARE_MIGRATION_PLAN.md`. Inactive drafts of the Worker
config and workflows are in `docs/releases/cloudflare-drafts/`.

## 4. Capability parity with the previous ChatGPT setup

Prefer official integrations. Connectors marked OAuth are connected by the
owner in Claude (Settings → Connectors, or `/mcp` in a Claude Code terminal).

| Previous capability | Claude equivalent | Status |
|---|---|---|
| GitHub, repo development, Actions | `gh` CLI + git | Connected |
| Web/browser research | Built-in browser, WebSearch/WebFetch | Connected |
| Cloudflare via Sites | Official Cloudflare Developer Platform connector (owner account) | Connected; production not reachable (not in this account) |
| Firebase Auth | Official Firebase plugin (`firebase@firebase`) | Connected |
| Release/deploy via Sites | None. Target: GitHub Actions + Cloudflare (`CLOUDFLARE_MIGRATION_PLAN.md`) | Not available until cutover |
| Canva | Official Canva connector (`mcp.canva.com`) | Connected |
| Google Drive | Official Google Drive connector | Connected |
| Gmail | Official Gmail connector | Connected |
| Google Calendar | Official Google Calendar connector | Connected |
| Windsor.ai (Google Ads, GA4, Search Console, Meta Ads) | Windsor.ai connector (`mcp.windsor.ai`), same vendor as before | Connected: Google Ads, GA4, Search Console. Meta not linked |
| Resend | Official Resend connector (`mcp.resend.com`) | Connected. Can create keys and send mail: use read-only |
| PayPal | Official PayPal connector (`mcp.paypal.com`) | Connected to Live. No plan/webhook/subscription tools; use the PayPal developer dashboard for those |
| Paddle | Official Paddle MCP (`@paddle/paddle-mcp`, local) | Needs a Paddle API key the owner creates with **read-only** permissions, stored in the local MCP config, never in the repo or chat. Optional |
| Image generation | Canva connector `generate-image` | Connected |
| Namecheap/registrar | Registrar is Spaceship, not Namecheap. No official connector | Owner dashboard |

## 5. Billing audit (read-only)

**Paddle (Live only).** Checkout `app/api/billing/paddle/checkout` → `app/paddle-server.ts` creates a transaction at `https://api.paddle.com` with one `PADDLE_PRICE_ID` item and `custom_data` (`spanishcue_user_id` or `spanishcue_claim_id`). Webhook `app/api/billing/paddle/webhook`: HMAC-SHA256 on `ts:rawBody`, 300 s tolerance, event de-duplication. Confirm route re-fetches the transaction server-side. Grants written in `db/paddle-billing.ts`. Env: `PADDLE_API_KEY`, `PADDLE_CLIENT_TOKEN`, `PADDLE_PRICE_ID`, `PADDLE_WEBHOOK_SECRET`. Gaps: no refund/chargeback/adjustment handler.

**PayPal (Sandbox + Live).** Subscriptions API (`/v1/billing/subscriptions`) in `app/paypal-server.ts`, endpoints `api-m.paypal.com` / `api-m.sandbox.paypal.com` by `PAYPAL_ENV`. Webhook `app/api/billing/webhook` verifies the signature and grants only on `PAYMENT.SALE.COMPLETED` with validated plan/amount. Grants in `db/billing.ts`. Env names in `docs/billing-contract.md`.

**Entitlement mismatch: confirmed; code fix in review (PR #60, not yet released).**

- Every billing grant uses `PRO_PRODUCT_CODE = "spanishcue-pro"` (`db/billing.ts`, `db/paddle-billing.ts`), with `source = 'billing'` and `source_reference` = the provider subscription ID.
- On `main` before PR #60, every access check used only `TEACHER_LIBRARY_PRODUCT = "teacher_library"` (`db/accounts.ts` `readAccessBySubject`, `listTeacherAccounts`), which feeds page, API and media authorization. A paid grant alone did not unlock PRO.
- `access_grants` has no `environment` column, but `billing_subscriptions` does (`provider`, `environment`, `provider_subscription_id` unique). PR #60 counts a `spanishcue-pro` billing grant only when its `source_reference` matches a `live` subscription of the same user and product. Sandbox grants never unlock PRO. No schema, migration or data change is needed.
- **Founder state (2026-09-25):** `/api/billing/founder-status` reports 1 claimed. PayPal Live shows one incoming USD 15.00 "SPANISHCUE Founder Monthly" subscription payment (2026-09-23). Under the currently deployed code, that customer has PRO only if they are the owner or have a manual `teacher_library` grant. Claude has no read-only path to production D1 to confirm which. After PR #60 is released through Sites, their Live billing grant unlocks PRO automatically.

## 6. Email (Resend and Firebase)

- **Resend:** `server/verification-delivery.ts` posts to `https://api.resend.com/emails` with `RESEND_API_KEY`, from `SPANISHCUE <verify@spanishcue.com>`. Links must point at `chespanish-32645.firebaseapp.com` or `spanishcue.com`, and are rewritten to `https://spanishcue.com/auth/action`. Route: `app/api/auth/verification-email` (smoke checks its invalid-token rejection, no email sent).
- **Firebase mail:** password-reset (and any Firebase-sent) mail uses the custom domain: SPF `include:_spf.firebasemail.com` on the apex, DKIM `firebase1/2._domainkey` CNAMEs to `firebasemail.com`.
- **Public DNS observed:** Resend DKIM `resend._domainkey` TXT present. `send.spanishcue.com` has MX and SPF records for the Resend return path. DMARC `_dmarc` is `p=none` (monitor only). No apex MX: `spanishcue.com` does not receive mail.
- **Resend account (connector, read-only):** domain `spanishcue.com` status **verified**, region `ap-northeast-1`, sending enabled, receiving disabled, open/click tracking off. Records verified: DKIM `resend._domainkey` (TXT), SPF `send` and `rsend` (CNAME to Resend's `forge.rmta.net` return path). No Resend webhooks configured; the app does not depend on Resend events. The account also holds an unrelated verified domain.
- The repository documents no SPF/DKIM/DMARC policy beyond this. Tightening DMARC is an owner DNS decision.

## 7. Marketing and analytics in the repository

- GA4 through `app/marketing/GoogleAnalytics.tsx`: loads `gtag.js` only after cookie consent, measurement ID from `NEXT_PUBLIC_GA4_MEASUREMENT_ID` (not in Git). No Google Signals, no automatic page views.
- First-paid conversion events come from the server-side `billing_outbox_events`, gated by `ANALYTICS_CONVERSIONS_ENABLED`, and are honored only in Live.
- Attribution: `app/marketing/analytics.ts` and `MarketingAttribution.tsx` read `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`. No `gclid`/`fbclid` handling.
- Not present: Google Ads `AW-` tag, GTM container, Meta pixel.
- Search Console: verified by DNS TXT `google-site-verification`.
- Drafts: `marketing/google-ads-launch-draft.md`, `marketing/instagram-evergreen-drafts.md`, `GOOGLE_ADS_START.md`. Nothing launches campaigns.

## 8. Brand and media

Claude can read, place and optimize existing assets directly in the repo:
`public/brand/` (hero images, `mascot/` portrait/pointing/kneeling, `campaign/`
with `provenance.json`), `public/mascots`, lesson world art, `public/catalog-thumbnails`.
Claude Code cannot generate new raster images. New visual assets come from
Canva (official connector once connected) or the owner. Do not redesign.

## 9. Production testing Claude may perform

Allowed without asking: `npm run smoke:production`; visiting public pages;
logged-out flows; FREE lesson; PRO redirect/paywall; the 404; observing
network errors and console logs; confirming `/acceso` renders both payment
buttons and `founder-status` is healthy.

Not allowed without the owner: clicking either payment button (it creates a
Paddle transaction or PayPal subscription and D1 checkout rows); entering any
payment data; signing in with the owner's account; accepting cookie consent on
the owner's behalf; triggering verification or password-reset email.

## 10. Staging resources (created 2026-09-25)

Created in the connected owner Cloudflare account, which serves no SPANISHCUE
traffic. IDs are identifiers, not secrets.

| Resource | Value | State |
|---|---|---|
| D1 database | `spanishcue-staging`, id `23fe3c11-85f7-48e1-9dd0-d508893625c9`, region ENAM | Schema from `drizzle/0000`–`0009`; verified identical (17 tables, 31 indexes, 1 trigger) to a local build of `drizzle/`. `d1_migrations` records all 10 files in Wrangler's format, so `wrangler d1 migrations apply` will not re-run them. **No data** |
| Staging Worker | `spanishcue-staging`, `https://spanishcue-staging.agnremote.workers.dev` — **deployed and healthy** | `deploy-staging.yml` passes end to end (deploy, in-Actions smoke, rollback drill). 207/207 route parity with production; staging-only `noindex`. See `docs/releases/STAGING.md` |
| Routes / custom domain | none | None will be added to `spanishcue.com` |

Cutover procedure: `docs/releases/CUTOVER_RUNBOOK.md` (not executed). Prepared, inactive: `.github/workflows/deploy-production.yml`, `scripts/prepare-production-worker-config.mjs`, write freeze `worker/write-freeze.ts`.

Not possible from this account: zone, DNS, routes and the production Worker.
The `spanishcue.com` zone is served by Cloudflare nameservers but is not in
this account; production Worker, D1 and domain binding remain inside OpenAI
Sites.
