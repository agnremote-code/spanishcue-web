# Owner-controlled Cloudflare staging

Staging is isolated from production by construction. It never uses
`spanishcue.com`, never deploys over the Sites Worker, and never applies D1
migrations automatically.

| Item | Value |
|---|---|
| Worker | `spanishcue-staging` (workers.dev only, no routes, no custom domain) |
| D1 | `spanishcue-staging`, id `23fe3c11-85f7-48e1-9dd0-d508893625c9`; migrations `0000`–`0009` applied, ledger in `d1_migrations`, **no data** |
| Config | Build output `dist/server/wrangler.json`, rewritten by `scripts/prepare-staging-worker-config.mjs`. No source config changes, so the Sites build and `release-policy.mjs classify` are unaffected |
| Deploy | `.github/workflows/deploy-staging.yml` (manual `workflow_dispatch`, exact SHA on `main`, GitHub environment `staging`) |
| Rollback | Same workflow with `action: rollback` (optional version ID); automatic rollback after a failed smoke when a previous version exists |
| Smoke | `scripts/production-smoke.mjs` against the workers.dev URL |

## One-time owner setup

1. Cloudflare dashboard (owner account that holds `spanishcue-staging`) → Workers & Pages: if no `*.workers.dev` subdomain exists yet, open the Workers overview once so Cloudflare assigns one. Copy the **Account ID** from the account overview.
2. My Profile → API Tokens → Create Token → Create Custom Token:
   - Permissions: **Account · Workers Scripts · Edit** and **Account · D1 · Edit**.
   - Account Resources: **Include · <that account only>**.
   - Zone Resources: none. The token must not be able to touch `spanishcue.com`.
3. GitHub → `agnremote-code/spanishcue-web` → Settings → Environments → **New environment** `staging`:
   - Environment secrets → Add secret `CLOUDFLARE_API_TOKEN_STAGING` = the token.
   - Environment variables → Add variable `CLOUDFLARE_ACCOUNT_ID` = the account ID (an identifier, not a secret).
4. The first deploy prints the workers.dev URL. Add that hostname to Firebase Auth → Settings → Authorized domains only if login testing on staging is wanted.

Run: Actions → "Deploy Staging (Cloudflare)" → Run workflow → `action: deploy`, `sha: <full SHA on main>`.

## Environment classification

| Name | Class | Staging value |
|---|---|---|
| `DB` | binding | staging D1 (set by the script) |
| `ASSETS` | binding | build assets, `run_worker_first: true` |
| `IMAGES` | binding, optional | **omitted**. Production v176 returns originals from `/_vinext/image` at every width (the no-binding fallback), so parity does not need it. Opt in with `STAGING_IMAGES_BINDING=true` |
| `SPANISHCUE_DEPLOYMENT` | safe non-secret | `staging` (label only) |
| `PAYPAL_ENV` | can use Sandbox | `sandbox` |
| `PAYPAL_PUBLIC_CHECKOUT_ENABLED` | must remain disabled | `false` |
| `FOUNDER_OFFER_ENABLED` | must remain disabled | `false` |
| `ANALYTICS_CONVERSIONS_ENABLED` | must remain disabled | `false` |
| `CHESPANISH_APPLE_AUTH_ENABLED` | safe non-secret | `false` (Apple is not configured in Firebase) |
| `FOUNDER_OFFER_CODE`, `FOUNDER_LIMIT`, `FOUNDER_PRICE_USD` | safe non-secret | unset (code defaults) |
| `PAYPAL_SANDBOX_CLIENT_ID`, `PAYPAL_SANDBOX_PRODUCT_ID`, `PAYPAL_SANDBOX_FOUNDER_PLAN_ID` | can use Sandbox | unset until a Sandbox checkout test is wanted |
| `PAYPAL_SANDBOX_CLIENT_SECRET`, `PAYPAL_SANDBOX_WEBHOOK_ID` | secret requiring owner entry (Sandbox) | unset. A Sandbox webhook must point at the staging URL, never at production |
| `PAYPAL_LIVE_*`, `PAYPAL_LIVE_SUPERVISED_USER_ID` | production-only | never on staging (script rejects them) |
| `PADDLE_API_KEY`, `PADDLE_CLIENT_TOKEN`, `PADDLE_PRICE_ID`, `PADDLE_WEBHOOK_SECRET` | production-only (Paddle is Live-only in code) | never on staging (script rejects them); Paddle checkout reports unavailable |
| `FIREBASE_ADMIN_SERVICE_ACCOUNT_B64` | secret requiring owner entry | unset: sign-in on staging fails closed (`/api/auth/session` 401). Set via `wrangler secret put` only if login testing is wanted; prefer a new service-account key |
| `RESEND_API_KEY` | secret requiring owner entry | **unset**: no real email. If ever set, use a separate restricted key |
| `CHESPANISH_OWNER_UID`, `CHESPANISH_OWNER_EMAIL` | safe non-secret, production value | unset (code fallbacks) |
| `LEGAL_OPERATOR_JSON` (and legacy `LEGAL_*`) | secret-like, production value | unset: legal pages render prelaunch variant |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | build-time, production-only | unset: no analytics from staging |

## Parity report (2026-09-25, `main` `ae4bfc5`, production Sites v176)

Measured on the exact staging Worker config running locally
(`wrangler dev --local`, staging vars, empty D1 with the `drizzle/` schema),
because the staging token does not exist yet. Re-run against the workers.dev
URL after the first deploy.

| Check | Result |
|---|---|
| `production-smoke.mjs` (10 checks) | **10/10 pass** |
| HTTP status of every sitemap URL (194) plus 10 protected/API/static paths | **204/204 identical** to production |
| `<title>` of 26 sampled pages | **26/26 identical** |
| FREE lesson `/la-fabrica-de-los-nombres` | 200 on both |
| PRO board `/tablero-de-eso-si-hablo` | 302 → `/acceso` on both |
| `/cuenta` | redirect → `/ingresar` on both |
| Private audio | 403 on both |
| `/api/students`, `/api/auth/session`, `/api/auth/verification-email` | 401 on both |
| D1 connectivity | `/api/billing/founder-status` reads D1: staging `claimed 0`, `mode sandbox`, `readiness unconfigured`, checkout unavailable; production `claimed 1`, `mode live`, `live_ready` (expected difference) |
| `/_vinext/image` | originals returned on both (same bytes) |
| Protected build | 58 private modules and 47 premium media files protected; 263 private paths excluded; `validate-artifact.sh` passes |

Expected, intentional differences: billing mode and availability, no
analytics, no Firebase Admin (login fails closed), no email, empty data.
