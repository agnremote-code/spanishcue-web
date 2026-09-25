# SPANISHCUE operations map for Claude Code

Permanent map of every external service SPANISHCUE uses, how Claude Code can
reach it, and what it may change. It never contains secret values.

Audited 2026-09-25 from `main` at `2cf1c1e`. Production at audit time:
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
| Cloudflare (owner account) | Owner | Connected, read/write MCP | "Cloudflare Developer Platform" connector | Could create/delete Workers, D1, KV. **Not used** without owner authorization | High if misused; the account holds no SPANISHCUE resources today | Connector OAuth | None | Account empty (0 Workers, 0 D1, 0 KV; R2 not enabled). No DNS/zone tools in this connector |
| Production D1 | OpenAI Sites | Not connected | None | None | Critical | Sites | **Full** | Needs export capability from Sites |
| DNS `spanishcue.com` | **Unknown** Cloudflare account (NS `anuj`/`meg.ns.cloudflare.com`); registrar Spaceship, expires 2027-09-11 | Public lookups only | DNS-over-HTTPS | None | Critical | Registrar / Cloudflare dashboard | Possible (if Sites manages the zone) | Owner must identify zone account |
| Firebase Auth `chespanish-32645` | Owner Google account | Connected, read/write | Firebase plugin MCP (`agnremote@gmail.com`), public Identity Toolkit config endpoint | Plugin can deploy/modify. **Not used**: Auth config is owner-only | High | Firebase console; Admin key in Sites env (`FIREBASE_ADMIN_SERVICE_ACCOUNT_B64`) | Admin secret stored in Sites | No host coupling if domain unchanged |
| Paddle Live | Owner Paddle account | Not connected | Official Paddle MCP needs an API key (see §4) | None | Critical (real charges) | Sites env (`PADDLE_*`) | Secrets in Sites | Needs secrets re-entered on new host |
| PayPal Sandbox + Live | Owner PayPal account | Not connected | Official PayPal connector (OAuth) | Connector can create products/invoices/refunds. **Keep read-only** | Critical | Sites env (`PAYPAL_*`) | Secrets in Sites | Needs secrets re-entered on new host |
| Resend | Owner Resend account | Not connected | Official Resend connector (OAuth) | Connector can create API keys, send mail. **Keep read-only** | Medium (sends real email) | Sites env (`RESEND_API_KEY`) | Secret in Sites | Needs secret re-entered on new host |
| GA4 | Owner Google account | Not connected | Windsor.ai connector (was used in ChatGPT) or Supermetrics | Read-only reporting | Low | Measurement ID in Sites env (`NEXT_PUBLIC_GA4_MEASUREMENT_ID`) | Build-time var in Sites | Needs var on new host |
| Google Ads | Owner | Not connected | Windsor.ai connector | Read-only reporting. Campaign edits owner-only | Medium (spend) | Google Ads | None | — |
| Google Search Console | Owner | Not connected | Windsor.ai connector | Read-only | Low | DNS TXT `google-site-verification` | None | Keep TXT record on any zone move |
| Meta Ads | Owner | Not connected | Windsor.ai connector | Read-only | Low | Meta | None | No Meta pixel in repo |
| Google Drive / Gmail / Calendar | Owner | Not connected | Official Google connectors (OAuth) | Drafts only; sending needs owner confirmation each time | Low–medium | Google account | None | — |
| Canva | Owner | Not connected | Official Canva connector (OAuth) | Create/export designs | Low | Canva | None | — |
| Browser / production testing | — | Connected | Built-in browser pane; `scripts/production-smoke.mjs` | Read-only page visits | Low (never click pay) | — | None | Done |
| Image/CDN | Cloudflare `IMAGES` binding via Sites (`/_vinext/image`) | Not connected | — | None | Medium | — | Binding supplied by Sites | Unknown whether bound in production |
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
| Canva | Official Canva connector (`mcp.canva.com`) | Needs owner OAuth |
| Google Drive | Official Google Drive connector | Needs owner OAuth |
| Gmail | Official Gmail connector | Needs owner OAuth |
| Google Calendar | Official Google Calendar connector | Needs owner OAuth |
| Windsor.ai (Google Ads, GA4, Search Console, Meta Ads) | Windsor.ai connector (`mcp.windsor.ai`), same vendor as before | Needs owner OAuth |
| Resend | Official Resend connector (`mcp.resend.com`) | Needs owner OAuth. Can create keys and send mail: use read-only |
| PayPal | Official PayPal connector (`mcp.paypal.com`) | Needs owner OAuth. Has refund/dispute tools: use read-only; connect Sandbox first if offered |
| Paddle | Official Paddle MCP (`@paddle/paddle-mcp`, local) | Needs a Paddle API key the owner creates with **read-only** permissions, stored in the local MCP config, never in the repo or chat. Optional |
| Image generation | No image-generation model in Claude Code. Use Canva, or supply assets | Gap |
| Namecheap/registrar | Registrar is Spaceship, not Namecheap. No official connector | Owner dashboard |

## 5. Billing audit (read-only)

**Paddle (Live only).** Checkout `app/api/billing/paddle/checkout` → `app/paddle-server.ts` creates a transaction at `https://api.paddle.com` with one `PADDLE_PRICE_ID` item and `custom_data` (`spanishcue_user_id` or `spanishcue_claim_id`). Webhook `app/api/billing/paddle/webhook`: HMAC-SHA256 on `ts:rawBody`, 300 s tolerance, event de-duplication. Confirm route re-fetches the transaction server-side. Grants written in `db/paddle-billing.ts`. Env: `PADDLE_API_KEY`, `PADDLE_CLIENT_TOKEN`, `PADDLE_PRICE_ID`, `PADDLE_WEBHOOK_SECRET`. Gaps: no refund/chargeback/adjustment handler.

**PayPal (Sandbox + Live).** Subscriptions API (`/v1/billing/subscriptions`) in `app/paypal-server.ts`, endpoints `api-m.paypal.com` / `api-m.sandbox.paypal.com` by `PAYPAL_ENV`. Webhook `app/api/billing/webhook` verifies the signature and grants only on `PAYMENT.SALE.COMPLETED` with validated plan/amount. Grants in `db/billing.ts`. Env names in `docs/billing-contract.md`.

**Entitlement mismatch: confirmed in code, not fixed.**

- Every billing grant uses `PRO_PRODUCT_CODE = "spanishcue-pro"` (`db/billing.ts`, `db/paddle-billing.ts`).
- Every access check uses `TEACHER_LIBRARY_PRODUCT = "teacher_library"` (`db/accounts.ts` `readAccessBySubject`, `listTeacherAccounts`), which feeds page, API and media authorization (`worker/private-asset-auth.ts`).
- Result: a paid grant alone does not unlock PRO. Owner and manual grants (`teacher_library`) do.
- Production reports **1 founder allocation claimed**. That paying customer may lack PRO unless the owner also gave a manual grant. The checkout routes refuse only users who already have full access, so an affected customer might be offered checkout again. Owner should check this account first.

Why this is not a one-line fix: `access_grants` has no `environment` column. Counting `spanishcue-pro` grants naively would also let Sandbox PayPal grants unlock PRO in production. A correct fix must count only Live-backed billing grants (or only rows whose source subscription/payment is `live`), keep owner/manual behavior, and add D1-backed tests for Live, Sandbox, expired and refunded cases. It changes production authorization, so it is a separate reviewed PR released through Sites, not part of this setup.

## 6. Email (Resend and Firebase)

- **Resend:** `server/verification-delivery.ts` posts to `https://api.resend.com/emails` with `RESEND_API_KEY`, from `SPANISHCUE <verify@spanishcue.com>`. Links must point at `chespanish-32645.firebaseapp.com` or `spanishcue.com`, and are rewritten to `https://spanishcue.com/auth/action`. Route: `app/api/auth/verification-email` (smoke checks its invalid-token rejection, no email sent).
- **Firebase mail:** password-reset (and any Firebase-sent) mail uses the custom domain: SPF `include:_spf.firebasemail.com` on the apex, DKIM `firebase1/2._domainkey` CNAMEs to `firebasemail.com`.
- **Public DNS observed:** Resend DKIM `resend._domainkey` TXT present. `send.spanishcue.com` has MX and SPF records for the Resend return path. DMARC `_dmarc` is `p=none` (monitor only). No apex MX: `spanishcue.com` does not receive mail.
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
