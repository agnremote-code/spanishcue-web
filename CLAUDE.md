# CLAUDE.md — SPANISHCUE operating instructions

This file is the permanent operating contract for Claude Code on SPANISHCUE.

Claude Code is the primary development agent. Codex is the secondary agent.
`AGENTS.md` is the shared authority for both; this file adds Claude-specific
rules and never relaxes `AGENTS.md`.

## 1. Authority and startup order

GitHub repository `agnremote-code/spanishcue-web` is canonical.

Before doing substantive work:

1. Read current `main`.
2. Read `AGENTS.md`.
3. Read this file.
4. Read the relevant project docs for the task.
5. Inspect overlapping open PRs/branches before editing.
6. Treat production, billing-provider state, release state, and recovery branches as live state that must be re-read, never assumed from an old chat or handoff snapshot.

Core references:

- `AGENTS.md`
- `docs/SPANISHCUE_HANDOFF.md`
- `docs/releases/SITES_RELEASE.md`
- `docs/releases/MIGRATION_RELEASE.md`
- `docs/billing-contract.md`
- `docs/BACKEND_MIGRATION.md`
- `docs/conversation-family-authoring.md`
- `docs/conversation-family-migration.md`
- `docs/CLAUDE_RELEASE_TRANSITION.md` (what Claude Code can and cannot release today)
- `docs/releases/CLOUDFLARE_MIGRATION_PLAN.md` (prepared, not active, GitHub Actions + Cloudflare deployment)

If this file conflicts with `AGENTS.md` or a task-specific release runbook, the stricter repository rule wins.

`docs/CLAUDE_OPERATIONS.md` maps every external service to how Claude can reach it, what it may write, and what still depends on OpenAI Sites. Read it before touching any external service.

## 1a. System architecture in brief

Summary only. The linked documents and the code are authoritative; re-read them before acting.

- **Runtime.** One Cloudflare Worker (`worker/index.ts`, built by vinext/Vite with `@cloudflare/vite-plugin`) serves pages, APIs and static assets (`ASSETS`, `run_worker_first: true`), with one D1 database bound as `DB`. Hosting, D1, secrets and the custom domain are currently provided by OpenAI Sites (`.openai/hosting.json`), not by an owner Cloudflare account.
- **Auth.** Firebase Auth (project `chespanish-32645`; email/password and Google; Apple is gated by `CHESPANISH_APPLE_AUTH_ENABLED`). The Worker verifies the Firebase token server-side, resolves the stable internal `users.id` through `auth_identities`, and replaces any browser-supplied `x-chespanish-*` headers. Firebase UID is not the account key. See `docs/BACKEND_MIGRATION.md`.
- **FREE / PRO.** Access is `full` for the owner role or an active `access_grants` row, otherwise `free`. Pages, APIs, private JS chunks and premium media all authorize from server-created headers. Premium media is encrypted per build and served only after authorization. The route/access ledger and tests decide what is FREE; never infer it from family or visual similarity.
- **Billing.** Product `spanishcue-pro`, USD 15.00 monthly, Founder allocation of at most 1,000 per environment shared by PayPal and Paddle (`docs/billing-contract.md`). PayPal has Sandbox and Live; Paddle is Live-only. Checkout before account creation uses `billing_purchase_claims`. Access comes only from a server-verified settled payment, never from a browser callback or provider approval.
- **Access defect.** Billing writes grants with `product_code = 'spanishcue-pro'`, which access checks ignored until PR #60 (count only Live-backed billing grants). Check whether PR #60 is merged and released before relying on paid access. Details: `docs/CLAUDE_OPERATIONS.md` §5.
- **Email.** Account verification mail goes through Resend (`RESEND_API_KEY`, sender `verify@spanishcue.com`). Firebase's own mail uses a custom `spanishcue.com` sending domain.
- **Content.** Collections GRAMÁTICA, CONVERSACIÓN, ESCUCHA and country content. Conversation families share visual engines but each CEFR level is genuinely authored (`docs/conversation-family-authoring.md`). Legacy route IDs and entitlement checks stay authoritative.
- **Release.** Source reaches `main` only through `CI + Auto Merge`. Production is published only by the OpenAI Sites release controller (`docs/releases/SITES_RELEASE.md`), whose state is in `automation/sites-release-state`. Claude Code cannot save, deploy, roll back or read Worker logs on Sites today.

### Owner-only actions

Claude never does these; the owner does them or explicitly authorizes a specific instance:

- production deploy, rollback, or any Sites release step;
- entering or rotating secrets, API keys or webhook secrets;
- DNS, domain, or registrar changes;
- Paddle, PayPal, Firebase Auth or Resend configuration changes;
- D1 production writes, migrations, exports or imports;
- connecting OAuth connectors or signing in to provider accounts;
- launching, pausing or editing ad campaigns;
- changing GitHub rulesets, repository settings or Actions secrets.

Never claim production changed unless the authorized release flow published it and its smoke checks were verified.

## 2. Git discipline — non-negotiable

Never allow hours of meaningful work to exist only in an agent filesystem.

For every task:

- create one fresh task branch from current canonical `main`, named `claude/<topic>` (never `codex/*`, `automation/*` or `recovery/*`);
- follow the multi-agent branch and PR rules in `AGENTS.md` (own prefix only, overlap check, one open PR per sensitive area);
- checkpoint coherent progress in logical commits;
- push each meaningful checkpoint to GitHub;
- do not leave large completed batches only uncommitted or only in a temporary worktree;
- open a non-draft PR to `main` when implementation is ready;
- let repository CI / auto-merge perform the authorized merge flow;
- never push directly to `main`, and never force-push `main`;
- never manually merge unless the repository rules are explicitly changed by the owner;
- verify the merged SHA before reporting implementation complete.

For long-running generation/refactor tasks, preserve progress continuously. A practical default is: after each coherent family/module/batch that is independently reviewable, test what is appropriate, commit, and push.

Do not run destructive Git cleanup or object-pruning commands during recovery work. In particular, do not use `git gc`, `git clean`, prune, destructive reset/checkout, or force-update recovery refs unless explicitly authorized for a specific recovery operation.

## 3. Production and release safety

Do not deploy merely because a source task is complete.

Only deploy when the user explicitly requests production release work and the repository release rules authorize it.

For ordinary source work:

- do not modify `automation/sites-release-state`;
- do not modify or steal `automation/merge-lock`;
- do not bypass the release controller;
- do not invent manual deployment shortcuts;
- do not change environment variables, secrets, domains, Firebase, Paddle, PayPal, D1, or production data unless the task explicitly requires it and the correct runbook authorizes it.

There is exactly one canonical production deployment mechanism. Today it is the Sites release controller.

For Sites publishing, follow `docs/releases/SITES_RELEASE.md`. Its save/deploy/rollback steps require native OpenAI Sites tools that Claude Code does not have; Claude Code stops at a verified merged SHA and the owner routes the release to the Sites release owner. See `docs/CLAUDE_RELEASE_TRANSITION.md`.

The GitHub Actions + Cloudflare path in `docs/releases/CLOUDFLARE_MIGRATION_PLAN.md` is prepared only. Do not add an active deploy workflow, run `wrangler deploy`, create Cloudflare resources, or move DNS until the owner explicitly authorizes a specific phase of that plan.

For any change touching migration-sensitive files, D1 schema/data, Drizzle, bindings, hosting configuration, or migration infrastructure, follow `docs/releases/MIGRATION_RELEASE.md`.

Never reapply an already-applied migration merely because a deployment is being retried.

## 4. Secrets and external services

Never commit secret values.

Provider credentials, webhook secrets, private keys, database credentials, environment-specific secrets, and account tokens remain outside Git.

When debugging billing/auth:

- preserve the server-side trust boundary;
- do not grant access from client callbacks, browser state, provider approval status alone, or unverified headers;
- use sanitized diagnostics;
- do not weaken production authorization to make a test pass.

## 5. Local macOS caveat

The owner uses macOS, but parts of this repository's install/build tooling intentionally target Linux and GNU utilities.

Do not modify repository build/release scripts solely because a Linux-oriented command fails on macOS.

Use the documented repository workflow, CI, or an appropriate Linux environment for canonical verification. If local macOS limitations block a check, report the limitation accurately rather than rewriting production tooling without authorization.

## 6. SPANISHCUE product intent

SPANISHCUE is a teacher-facing Spanish lesson library.

Core brand:

- Name: SPANISHCUE
- Motto: `CHOOSE. OPEN. TEACH.`
- Slogan: `Stop building every lesson from scratch.`
- Primary launch offer: Founder plan, USD 15/month, first 1,000 valid paid founder allocations across supported providers, subject to the billing contract.
- Main site: `https://spanishcue.com`

The product should feel fast, polished, visually clear, teacher-oriented, and reusable in live lessons.

Do not redesign the product or branding unless the user explicitly asks.

## 7. Lesson/content principles

SPANISHCUE lessons are teaching products, not generic worksheets.

General rules:

- align to CEFR and PCIC where applicable;
- target roughly 45 minutes of usable class time;
- use progressive sequencing;
- combine sections when a lesson would otherwise be too short;
- end with meaningful conversation/production;
- avoid shallow duplication;
- preserve the original pedagogical intent when refactoring;
- do not claim formal CEFR certification merely because CEFR/PCIC references guide authoring.

Language policy:

- lesson content is primarily Spanish;
- English is avoided except where grammar explanation genuinely benefits from it;
- A1–A2 grammar material may use bilingual support when pedagogically useful;
- Spanish UI copy should remain natural and consistent with the product's existing locale strategy.

Verbal-system content:

- organize by mood and tense;
- teach one tense at a time;
- regular forms first, then irregulars;
- keep progression clear from A1 through advanced levels.

Major content collections include GRAMÁTICA, CONVERSACIÓN, ESCUCHA and country-themed conversation content. Do not collapse separate pedagogical collections merely because they share visuals.

## 8. Conversation-family architecture

Follow `docs/conversation-family-authoring.md` and `docs/conversation-family-migration.md`.

Key rules:

- legacy route IDs/URLs and entitlement checks remain authoritative;
- family cards may consolidate variants visually, but the route/access ledger must remain intact;
- shared visual engines are allowed;
- each CEFR level must have genuinely authored objectives, tasks, scaffolding, teacher notes and closing production;
- do not create a fake level variant by changing only a badge, difficulty label, or generic instruction;
- query parameters never grant access;
- FREE and PRO boundaries must remain intact;
- premium content must not leak through public imports/client roots;
- preserve old routes and compatibility.

When asked to recover previously generated lesson variants, do not regenerate missing content unless the user explicitly changes the task from recovery to reconstruction.

## 9. Current recovery incident

A prior long-running Conversation A1–C2 expansion task lost its original Work worktree/branch.

A forensic preservation branch exists:

`recovery/conversation-all-levels-forensic-20260924`

It contains recovered cache artifacts, exact-source snapshots, known thumbnails and provenance material.

Rules:

- do not merge that branch wholesale;
- do not treat cache artifacts as canonical source merely because they were recovered;
- inspect provenance and compare each candidate against current `main`;
- preserve recovered bytes faithfully during forensic work;
- separate recovery from regeneration;
- normal feature work must not depend on that branch unless a task explicitly integrates a verified recovered artifact.

## 10. Billing expectations

Read `docs/billing-contract.md` before changing checkout or access.

Important invariant: SPANISHCUE supports checkout before account creation. A completed, validated provider payment can later be bound to a verified account through the purchase-claim flow.

Do not reintroduce a forced registration-before-payment flow unless the user explicitly changes product policy.

Paddle and PayPal are external providers with environment-specific state. Always verify current provider/runtime state instead of relying on old chat history.

## 11. Authentication and account portability

Read `docs/BACKEND_MIGRATION.md`.

Firebase is an external identity provider, not the canonical account key.

Preserve:

- internal user IDs;
- auth identity links;
- access grants;
- lesson progress;
- offer settings;
- server-side authorization.

Do not make browser-supplied identity authoritative.

## 12. Brand/UI context

Preserve established SPANISHCUE identity unless redesign is requested:

- bilingual ES/EN product UI;
- natural English;
- Spanish interface copy consistent with the site's current `tú` strategy;
- official mascot concept: young male teacher/creator figure, black clothing, pencil, transparent-background asset;
- country content remains a distinct collection;
- Red Flag o No remains a clean editorial family with level variants;
- filters, previews, level selectors and paywall behavior should remain clear and compact.

Known historical UX issues must be verified before editing because some may already be fixed. Do not assume an old chat complaint still exists in current `main`.

## 13. Verification

Use the repository's relevant tests and CI.

The documented full verification surface includes:

- `npm test`
- `npm run lint`
- `npm run validate:artifact`
- `npx tsc --noEmit`
- `git diff --check`

But account for the documented Linux/macOS tooling difference. Do not report a check as passed if it could not run.

For UI work, browser/visual verification should be performed when tooling allows. SSR/build tests are not a substitute for visual QA.

For auth/billing/access changes, verify unauthorized behavior as well as the happy path.

## 14. Completion standard

A task is not complete merely because code was generated.

A complete implementation normally means:

- requested source change exists;
- unrelated behavior is preserved;
- appropriate tests/checks pass or limitations are explicitly reported;
- work is committed and pushed;
- PR exists when required;
- CI status is known;
- merged SHA is verified before claiming merged completion;
- production is only claimed updated when the authorized release flow actually published and verified it.

When blocked by an external service, report the exact blocker and preserve all completed source work in GitHub.

## 15. Communication with the owner

Be concrete and stateful.

At checkpoints, report:

- branch;
- latest commit SHA;
- what changed;
- tests/checks run;
- what remains;
- whether anything touched production.

Do not say “done” when work is only local, only committed but not pushed, only in a PR, or not yet deployed when deployment was part of the task.

For high-risk production/billing/auth tasks, state exactly what was and was not changed.
