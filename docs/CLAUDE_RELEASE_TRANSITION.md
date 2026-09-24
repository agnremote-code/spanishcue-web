# Claude Code release transition plan

Status: analysis only. Nothing in this document has been implemented. It does
not authorize a deployment, a hosting change, a D1 operation, or any change to
Firebase, PayPal, Paddle, Resend, DNS, secrets or `automation/*` refs.

Prepared 2026-09-25 from `main` at `2e8f9b8` and release state at
`automation/sites-release-state` `aeee684` (production v174, source
`c18c90d`). Re-read both before acting on anything below.

Evidence levels used below:

- **Repo**: verified from files in this repository.
- **State**: recorded in `state.json`, written by the previous release owner. Not independently re-verified.
- **Public**: public DNS lookup, read-only.
- **Unknown**: needs owner or provider-console access. Do not assume.

---

## 1. What Claude Code can own today

All of this works with only GitHub access and a local or CI Node environment:

| Area | How | Evidence |
|---|---|---|
| Source changes | Fresh branch → push → non-draft PR to `main` | Repo (`AGENTS.md`) |
| Pre-merge verification | `CI + Auto Merge` `verify` job: `npm ci`, `npm test`, `npm run lint`, `npm run validate:artifact`, `git diff --check` | Repo (`.github/workflows/ci-automerge.yml`) |
| Serialized merge | The `merge` job waits for `state.json` `status == "idle"`, takes `automation/merge-lock`, re-tests against current `main`, merges, runs the post-merge health check, reverts automatically on failure, and deletes the lock and feature branch | Repo |
| Post-merge production observation | The `merge` job runs `scripts/production-smoke.mjs` against `https://spanishcue.com` and opens or closes a "Production smoke failing" issue. This only observes; it does not deploy | Repo |
| Scheduled smoke | `Production Smoke Monitor` every 6 hours | Repo |
| Release classification | `node scripts/release-policy.mjs classify BASE HEAD` (exit 42 means a migration release is required) | Repo |
| Reading release state | `git show origin/automation/sites-release-state:state.json` (read-only) | Repo |
| Migration authoring | `npm run db:generate`, new files under `drizzle/`, tested against a disposable local D1 by `npm test` | Repo |

Claude Code can therefore take a change all the way to a verified merged SHA
on `main`. It cannot make that SHA live.

Local macOS note: `install:ci` and `build` require Linux `flock`, GNU `timeout`
and `sha256sum` (`scripts/install-ci.sh`). Canonical verification runs in
GitHub Actions on `ubuntu-latest`. This is intentional; do not rewrite the
scripts for macOS.

CI observation: `Main Health + Auto Rollback` (`on: push` to `main`) last ran
for `744be64`. Merges performed by the `CI + Auto Merge` job use
`GITHUB_TOKEN`, and GitHub does not start new workflow runs from
`GITHUB_TOKEN` pushes, so that workflow does not run after automated merges.
The equivalent post-merge health gate inside `ci-automerge.yml` does run. Any
future "deploy on push to main" workflow would have the same blind spot.

## 2. What still depends on the OpenAI/Sites release owner

From `docs/releases/SITES_RELEASE.md`, these steps need native Sites tools
that Claude Code does not have:

| Step | Sites dependency |
|---|---|
| Push the merged SHA to the Site's configured source branch | Short-lived Sites source credential; the Sites Git remote is not GitHub |
| Build on Sites | The remote Sites builder runs `npm run build` on that commit (Repo: README) |
| Save a version (`appgver_…`) and deploy it (`appgdep_…`) | Native Sites save/deploy |
| Poll deployment status; detect a pending deployment | Native Sites |
| Query recent Worker error logs to correlate with smoke | Native Sites |
| Roll back to `state.previous.versionId` | Native Sites redeploy |
| Environment variables and secrets (the "environment set", revision 47) | Sites environment management (State) |
| Apply D1 migrations and inspect the production migration ledger | Sites. The build packages `drizzle/` into `dist/.openai/drizzle` for it (Repo: `build/sites-vite-plugin.ts`) |
| Custom domain binding for `spanishcue.com` | Sites (Unknown mechanism) |

The runbook also says: "GitHub Actions … cannot use the short-lived Sites
source credential as a deployment API key. Do not invent HTTP endpoints or
store Sites credentials in GitHub secrets."

**Can the existing release controller be run outside OpenAI? Only partly.**
`release-policy.mjs` (classify and transition) and `production-smoke.mjs` are
plain Node scripts. The state-branch compare-and-swap uses ordinary GitHub
Git-data APIs. The steps that change production (save, deploy, status,
rollback, logs) are Sites-only, so the controller cannot complete a release or
a rollback without the Sites owner.

The current release process is therefore: after a PR merges, the owner asks
the OpenAI/Sites release owner to run `SITES_RELEASE.md` for the merged SHA.
Claude Code must not attempt it.

## 3. What production hosting actually requires

### 3.1 Runtime shape (Repo)

- Build output: an ESM Worker at `dist/server/index.js` (`default.fetch`), static assets in `dist/client`, and the Sites manifest plus migrations in `dist/.openai/`.
- Worker config is generated in `vite.config.ts`, not a `wrangler.*` file:
  - `main: ./worker/index.ts`
  - `compatibility_flags: ["nodejs_compat"]`
  - an `ASSETS` binding with `run_worker_first: true` in builds, so premium media always passes authorization
  - D1 binding `DB` (`.openai/hosting.json`), using a placeholder `database_id` (`00000000-0000-4000-8000-000000000000`, name `site-creator-d1`) that Sites replaces with the real database
  - no R2
- The config sets no Worker name, account ID, routes, custom domain or `compatibility_date`. Sites supplies them. **Unknown:** the values production uses.
- `worker/index.ts` also calls an `IMAGES` binding (Cloudflare Images) for `/_vinext/image`. It is not declared in `vite.config.ts`. **Unknown:** whether production has it bound.
- Premium media is AES-encrypted at build time with a fresh random key per build (`scripts/protect-client-assets.mjs`). The key ships inside the server bundle, so no runtime secret is needed for it.
- Private client chunks are removed from public assets and served only after authorization. `validate:artifact` enforces this.

### 3.2 Runtime configuration names (Repo; values never in Git)

| Group | Names |
|---|---|
| D1 / assets | `DB`, `ASSETS`, `IMAGES` (bindings) |
| Owner / auth | `CHESPANISH_OWNER_UID`, `CHESPANISH_OWNER_EMAIL`, `CHESPANISH_APPLE_AUTH_ENABLED`, `FIREBASE_ADMIN_SERVICE_ACCOUNT_B64` (secret) |
| Email verification | `RESEND_API_KEY` (secret) |
| PayPal | `PAYPAL_ENV`, `PAYPAL_{SANDBOX,LIVE}_{CLIENT_ID,CLIENT_SECRET,PRODUCT_ID,FOUNDER_PLAN_ID,WEBHOOK_ID}`, `PAYPAL_PUBLIC_CHECKOUT_ENABLED`, `PAYPAL_LIVE_SUPERVISED_USER_ID`, plus the Sandbox-only legacy `PAYPAL_*` bridge |
| Paddle (Live only) | `PADDLE_API_KEY` (secret), `PADDLE_CLIENT_TOKEN`, `PADDLE_PRICE_ID`, `PADDLE_WEBHOOK_SECRET` (secret) |
| Offer | `FOUNDER_OFFER_ENABLED`, `FOUNDER_OFFER_CODE`, `FOUNDER_LIMIT`, `FOUNDER_PRICE_USD` |
| Legal | `LEGAL_OPERATOR_JSON` (preferred), or the legacy `LEGAL_*` fields |
| Analytics | `NEXT_PUBLIC_GA4_MEASUREMENT_ID` (build-time), `ANALYTICS_CONVERSIONS_ENABLED` |
| Smoke (CI only) | `SPANISHCUE_PRODUCTION_ORIGIN` (optional; default `https://spanishcue.com`) |

The Firebase web config is compiled in from `app/firebase-config.ts`.
`NEXT_PUBLIC_FIREBASE_*` are reserved names that the current build does not
read.

### 3.3 External services and their coupling to the host

| Service | Coupling | Changes if the host changes but the domain stays `spanishcue.com`? |
|---|---|---|
| Firebase Auth | Authorized domains; the `verification-template.ts` allowed hosts include `spanishcue.com` | No, if the domain is unchanged |
| Firebase Admin | Service-account JSON secret | The secret must be supplied again on the new host |
| Resend | API key; sending-domain verification | The key must be supplied again |
| PayPal | Webhook IDs registered against a URL on `spanishcue.com` (Unknown: exact URL); client credentials | No URL change; secrets must be supplied again |
| Paddle | Notification destination URL plus its webhook secret; API key | No URL change; secrets must be supplied again |
| DNS | `spanishcue.com` uses Cloudflare nameservers (`meg`/`anuj.ns.cloudflare.com`, proxied A records) (Public) | **Unknown:** which Cloudflare account owns the zone: the owner's, or one managed by Sites |
| D1 | Production database provisioned by Sites (Unknown: account, database ID, export capability) | Yes. Data must be exported and imported |

Secrets stored in Sites are generally not readable back. Plan to get values
from the provider consoles, or to issue new keys, rather than extracting them
from Sites. (Unknown: whether Sites allows secret export.)

## 4. Options

### Option A — Claude Code develops; the existing OpenAI/Sites release owner keeps releasing

- **Changes:** who writes source. Claude Code writes PRs. After each merge, the owner asks the Sites release owner to release the merged SHA.
- **Unchanged:** hosting, D1, secrets, domain, release controller, state branch, rollback path.
- **Dependencies:** continued access to the OpenAI/Sites release owner and its native tools. The owner has to relay each release request.
- **Risks:**
  - Every release involves two agents, so `main` can drift from production. Today they differ only by docs.
  - If OpenAI/Sites access lapses, nobody can release or roll back.
  - The v161 backup ref `refs/tags/production-v161-preserved` named in `state.json` is not on GitHub (the repo has no tags), and neither is its source `c49bd60`. It may exist only on the Sites remote.
- **Complexity:** none, beyond process.
- **Preserves domain, D1 data, Firebase identities, billing state, rollback?** Yes to all. Rollback stays with Sites.

### Option B — Release automation in GitHub Actions, hosting stays on Sites

- **Changes:** the gating and bookkeeping of `SITES_RELEASE.md` move into a workflow: classify, the state-branch lock, preflight and post-deploy smoke, and state transitions.
- **Unchanged:** Sites hosting, the D1 database, secrets, domain.
- **Dependencies:** a supported, non-interactive Sites deploy and rollback interface that Actions can call with a long-lived, scoped credential. The runbook states that no such interface exists for Actions today, and forbids storing Sites credentials in GitHub secrets.
- **Feasibility:** **not feasible end to end with what the repository documents.** A partial B that automates classification, locking and smoke, while a human or Sites agent still presses deploy, is possible. It also creates a second writer to `state.json` alongside the Sites owner, and the controller design (compare-and-swap on the state branch, "never steal the lock") must stay the only arbiter.
- **Risks:**
  - Two automation owners racing for the lock.
  - A false sense of independence, because rollback still needs Sites.
  - The `GITHUB_TOKEN` trigger gap described in §1.
- **Complexity:** moderate for the partial version. Blocked on OpenAI for the full version.
- **Preserves domain, D1 data, Firebase identities, billing state?** Yes. Rollback still depends on Sites.

### Option C — Host and release independently (own Cloudflare account, deployed from this repository)

- **Technical feasibility:** yes. The app is already a standard Cloudflare Worker with static assets and D1, built through `@cloudflare/vite-plugin`. `wrangler` is already a dev dependency. Nothing in the runtime code depends on OpenAI. The Sites coupling is confined to build packaging, config and scripts (below).
- **Changes:**
  - A real Worker config: name, account, `compatibility_date`, D1 `database_id`, the `IMAGES` binding if needed, and the custom domain or route. This goes either in `vite.config.ts` or in a new `wrangler.*` file. **Both are migration-sensitive paths** under `release-policy.mjs`, so the change must follow `MIGRATION_RELEASE.md`.
  - A new D1 database in the owner's account, loaded from a production export.
  - Secrets re-entered through `wrangler secret`, or a GitHub environment.
  - A deploy workflow using a scoped Cloudflare API token, triggered from the `CI + Auto Merge` job or `workflow_dispatch`, not `on: push` (see §1).
  - The release-state controller adapted to record Cloudflare version and deployment IDs instead of Sites IDs.
  - Rollback via Workers versions and deployments.
  - `scripts/sites-env.sh`, `install-ci.sh` and `build/sites-vite-plugin.ts` can stay at first, since they run fine on Linux CI.
- **Unchanged:** application code, the auth and billing trust model, Firebase project, PayPal and Paddle accounts, and the domain name.
- **Dependencies:**
  1. Owner-controlled Cloudflare account and control of the `spanishcue.com` zone.
  2. A complete, consistent export of the production D1 and its migration ledger from Sites (Unknown whether Sites supports it).
  3. Access to fresh provider credentials.
  4. Confirmation of how Sites attaches the custom domain, so it can be detached cleanly.
- **Risks:** see §5–§7. The data cutover is the critical risk.
- **Complexity:** high, roughly a multi-PR project: config and staging, deploy pipeline, data rehearsal, cutover. Most of the effort is verification, not code.
- **Preserves:**
  - Domain: yes, if the zone is controllable.
  - D1 data: yes, if the export is complete and writes are frozen during cutover.
  - Firebase identities: yes, since `users` and `auth_identities` are migrated unchanged.
  - Billing state: yes, with the same condition as D1.
  - Rollback: yes for code (Workers versions). For hosting, rolling back to Sites is only safe until the new host accepts its first write (§6).

## 5. Migration and D1 compatibility risks

- **Migration ledger.** Production has applied migrations through `0009` (`billing_purchase_claims`). An imported database must carry a ledger that marks 0000–0009 as applied. Otherwise `wrangler d1 migrations apply` would try to re-run them, which the repository rules forbid. How Sites records applied migrations is unknown, so inspect it before import. Do not assume Wrangler's `d1_migrations` table.
- **Triggers and constraints.** `founder_assignments_increment_claimed` and the uniqueness constraints on webhook, payment, lock and outbox tables must exist before the data is imported. Build the schema from `drizzle/` first, then import the data only.
- **Foreign-key order.** See `docs/BACKEND_MIGRATION.md` for the portable table list and import order.
- **No SQL rollback.** Under current policy, a failed release never authorizes SQL rollback. D1 Time Travel on an owner account would be a new recovery capability. Its use would need its own authorization rule.
- **Build-time placeholders.** The placeholder D1 ID in `vite.config.ts` must never reach a real deployment config. A missing or placeholder binding in production would fail every authenticated request.

## 6. Rollback requirements

- **Code rollback on the same host:** must restore the last healthy Worker version and re-run the same 10-check smoke. This is today's Sites behaviour, and Workers versions can provide it in Option C.
- **Schema compatibility:** a rollback target must be compatible with the current schema. That is why migrations are additive (expand/contract).
- **Host rollback in Option C:** pointing DNS back to Sites is safe only while the new database has received no writes the old one lacks. Once the new host accepts a sign-up, progress write, claim or webhook, reverting DNS loses that data unless it is replayed. Treat the first write as a one-way door and decide the go/no-go before opening writes.
- **Provider webhooks** keep retrying after failed deliveries. Both PayPal and Paddle document retries, but verify each provider's current retry window before relying on it. A write freeze that answers webhooks with a 5xx defers them rather than losing them.

## 7. Billing and auth risks

- **Pre-existing, independent of hosting (Repo):** billing grants are written with `product_code = 'spanishcue-pro'`, but `readAccessBySubject` in `db/accounts.ts` only counts `teacher_library` grants. Worker authorization flows from that function, so a billing grant alone would not unlock PRO. No test covers it. Check production data and fix it in a dedicated, reviewed code PR before any payment-dependent work, including a cutover. Details are in `docs/BACKEND_MIGRATION.md`.
- **Paddle Live checkout:** `state.json` recorded HTTP 502 on anonymous Paddle checkout at v172 and v173. The PR #54 diagnostics shipped in v174. A resolution is not recorded in the repository (Unknown).
- **Paddle refunds and adjustments** have no handler (Repo; see `docs/billing-contract.md`).
- **Webhooks during cutover:** a payment webhook processed by the old host after its export is missing from the new database. Freeze writes on the old host before the final export.
- **Claims and sessions:** `__Host-spanishcue-claim-*` and session cookies are bound to the domain and verified against Firebase and D1. They survive a host change only if the domain is unchanged and the `billing_purchase_claims` rows are migrated.
- **Owner access:** production may rely on the `CHESPANISH_OWNER_*` overrides or the hard-coded fallbacks in `app/firebase-session.ts`. Carry the overrides over exactly.
- **Secrets:** re-issuing a provider key rotates it for the old host too. Sequence rotations so the running host keeps working until cutover, for example by creating a second key where the provider supports it.

## 8. Recommended transition sequence

The recommendation is based on the architecture, not on which option is easiest.

1. **Now: Option A.** It is the only path that can release today. Claude Code owns source up to a verified merged SHA. Releases stay with the Sites owner following `SITES_RELEASE.md`, and the owner relays each release request.
2. **Before any hosting work: fix and verify the access-grant product-code discrepancy** (§7) in an ordinary reviewed PR, released by the Sites owner. Also confirm the current Paddle checkout state.
3. **Collect the unknowns** (owner and provider access, read-only):
   - which account owns the `spanishcue.com` Cloudflare zone;
   - whether Sites can export the production D1 and its migration ledger;
   - whether production binds `IMAGES`;
   - the exact webhook URLs registered with PayPal and Paddle;
   - Sites' custom-domain mechanism;
   - the location of the v161 backup ref.
4. **Decide between staying on A and moving to C.** Option B is not a real destination: without a supported Sites deploy API it only relocates bookkeeping and adds a second lock writer. If independence is required, target C.
5. **C: staging first, with no production impact:**
   - Owner Cloudflare account.
   - A staging Worker on a non-production hostname with its own D1, built from `drizzle/`.
   - A GitHub Actions deploy job with a scoped API token, started from the merge job or `workflow_dispatch`.
   - Smoke run against staging.
   - The config changes go through `MIGRATION_RELEASE.md`, because `vite.config.ts` and `wrangler.*` are migration-sensitive.
6. **C: data rehearsal.** Import a production export into staging. Reconcile row counts, users and identities, active grants, founder counters, billing uniqueness and the migration ledger. Repeat until there are zero mismatches.
7. **C: cutover** (authorized production operation). Use the §9 strategy. Update the release-state controller to point at the Cloudflare IDs, and retire the Sites release owner only after a successful release and rollback drill on the new host.

## 9. Zero-downtime strategy (Option C)

**Reads:** zero downtime is feasible. Both hosts can serve the same merged SHA while DNS or the custom-domain binding switches.

**Writes:** true zero downtime is not feasible with the current design. D1 cannot be replicated live across accounts, and the app has no dual-write path. The feasible target is a short write freeze:

1. Ship a reviewed **read-only / maintenance flag** first, as a separate code change. Under the flag:
   - mutating endpoints (sign-up sync, progress, claims, checkout, admin) return a retryable 503;
   - webhooks return 5xx so providers retry them later;
   - reads and authorization keep working.
2. Turn the flag on for the Sites host. Take the final D1 export and import it into the new database. Verify the counts.
3. Switch `spanishcue.com` to the new Worker with the flag still on. Smoke-test the new host.
4. Turn the flag off on the new host. This is the go/no-go point from §6. Deferred webhooks start arriving at the new host.
5. Keep Sites idle and unchanged for a defined period as a code-level fallback, not a data fallback.

The expected user impact is a few minutes in which account and payment actions ask users to retry, with no data loss. That depends on step 1 existing and on the export being consistent.

---

## Unknowns that need owner or provider access

- Cloudflare account that owns the `spanishcue.com` zone.
- Production D1 account, database ID, migration-ledger format, and export capability through Sites.
- Whether the production Worker has an `IMAGES` binding, and its `compatibility_date`.
- Webhook destination URLs registered in PayPal (Sandbox and Live) and Paddle.
- Current Paddle Live checkout health after v174.
- Whether any production paid account depends solely on a `spanishcue-pro` grant.
- Location of `refs/tags/production-v161-preserved` and source `c49bd60`.
- Whether Sites secrets can be exported, or must be re-issued from provider consoles.
