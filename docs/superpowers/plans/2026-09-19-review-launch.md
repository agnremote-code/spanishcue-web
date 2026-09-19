# SpanishCue Launch Base Review Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish one launch branch that preserves the verified production source and the valid GitHub review work, then document a trustworthy base for Tasks 3–8 without deploying.

**Architecture:** Merge the deployed Sites source into the GitHub review branch through their proven common ancestor. Resolve only the overlapping auth, account, navigation, access-gate, and test files by retaining production Firebase/D1/PayPal behavior and porting the honest six-section account experience plus safe return navigation. Keep coordination documentation separate from runtime code.

**Tech Stack:** Vinext/Next.js 16, React 19, Cloudflare Workers, Firebase Authentication, Cloudflare D1, Drizzle ORM, PayPal Sandbox, Node test runner, ESLint.

**Spec:** `docs/launch/TASK-02.md`, corrected by the launch requirements captured in `docs/launch/TASK-02-REVIEW.md`.

## Global Constraints

- Never work on, push to, or deploy from `main`.
- Preserve the deployed source commit `3342720a5783b602d43211059c109f95430ea521` and GitHub main `ba8c09ece88f1cfc97c985849b506ff28dc40935` through their common ancestor `7bded2797ff6b21c08dc8c7a742e4607d2f20c65`.
- Do not migrate authentication, add session tables, enable Live payments, change DNS, expose secrets, force-push, or deploy.
- Treat Firebase verification and D1 access grants as authoritative; browser-provided internal identity headers must never authorize access.
- Keep Favoritos, Mis alumnos, and Historial honest until their persisted features exist.
- Keep `npm test` as the single build-plus-worker verification; do not repeat an identical build.

## Review Focus

- A forged browser request containing internal `x-chespanish-*` headers must remain anonymous and unable to open paid routes, admin routes, APIs, or protected assets.
- An authenticated free account must remain signed in after a full request refresh but must not acquire PRO access.
- Owner and D1-granted PRO users must be distinct from merely authenticated users.
- `returnTo` must accept same-origin relative paths and reject absolute or protocol-relative redirects.
- Account sections without persisted data must show explicit empty/upcoming states and never imply saved favorites, students, or class history.

---

### Task 1: Reconcile the verified source lines

**Files:**
- Modify through merge: repository files changed between `7bded27` and `sites/deployed`
- Preserve: `.agents/rules/spanishcue-safety.md`
- Preserve: `docs/launch/TASK-01.md`
- Preserve: `docs/launch/TASK-02.md`

**Interfaces:**
- Consumes: production commit `3342720`, GitHub commit `ba8c09e`
- Produces: one normal merge commit whose runtime source follows production and whose review/rules documents remain available

- [ ] **Step 1: Simulate the merge and record the exact conflicts**

Run: `git merge-tree --write-tree origin/main sites/deployed`

Expected: conflicts only in the overlapping auth/account/navigation/test files already identified by the reviewed diff.

- [ ] **Step 2: Merge without committing**

Run: `git merge --no-ff --no-commit sites/deployed`

Expected: the same conflict set as the simulation, with all non-overlapping production files staged.

- [ ] **Step 3: Resolve conflicts against the verified runtime architecture**

Keep Firebase session verification, Worker header stripping/recreation, D1 access grants, production billing, brand, catalog, and protected-asset code. Keep GitHub rules/docs. Defer account UI behavior changes to Task 2 so they follow RED→GREEN.

- [ ] **Step 4: Commit the source reconciliation**

Run: `git commit -m "merge: reconcile verified production source"`

Expected: a two-parent merge commit and a clean index.

### Task 2: Preserve the valid PR #3 account behavior

**Files:**
- Modify: `app/access-policy.ts`
- Modify: `app/cuenta/page.tsx`
- Modify: `app/cuenta/style.css`
- Modify: `app/acceso/page.tsx`
- Modify: `tests/teacher-access.test.mjs`

**Interfaces:**
- Consumes: Worker-created `x-chespanish-*` headers, Firebase session cookie, D1-derived account headers, `SubscriptionManager`
- Produces: `getUserSessionFromHeaders(headers)` with visitor/authenticated-free/PRO/owner states; six URL-addressable account sections; safe paywall return navigation

- [ ] **Step 1: Write failing tests for role separation, return safety, and account honesty**

Add assertions that server-created headers yield distinct `authenticated_free`, `pro`, and `owner` sessions; forged incoming headers are removed by `authenticatedRequestHeaders`; unsafe `returnTo` values fall back to `/`; all six `/cuenta?tab=` sections render for a valid Firebase-backed session; empty sections state that no data is stored yet.

- [ ] **Step 2: Run the focused worker suite and verify RED**

Run: `npm test`

Expected: build succeeds and the new assertions fail because the combined account/session surface is not implemented yet.

- [ ] **Step 3: Implement the minimum production-compatible session and account UI**

Add a header-derived display session that trusts only Worker-created internal headers. Keep D1 `accessLevel` as the real entitlement and remove the obsolete `checkSubscriptionEntitlement` placeholder. Add URL-selected account sections while preserving `SubscriptionManager`, Firebase logout/password reset, localization, and owner admin navigation. Export and use one `safeReturnTo` helper in the paywall.

- [ ] **Step 4: Run the full suite and verify GREEN**

Run: `npm test`

Expected: every build/package/worker/auth/asset test passes.

- [ ] **Step 5: Run lint**

Run: `npm run lint`

Expected: zero ESLint errors; no global rule disabling for links or images.

- [ ] **Step 6: Commit**

Run: `git add app/access-policy.ts app/cuenta/page.tsx app/cuenta/style.css app/acceso/page.tsx tests/teacher-access.test.mjs && git commit -m "fix: align account access with production auth"`

### Task 3: Record the launch base and task boundaries

**Files:**
- Create: `docs/launch/START.md`
- Create: `docs/launch/WORKING_RULES.md`
- Create: `docs/launch/TASK-02-REVIEW.md`
- Modify: `.agents/rules/spanishcue-safety.md`

**Interfaces:**
- Consumes: verified commit/deployment evidence and final runtime behavior
- Produces: BASE_VALIDADA decision, branch/file/port map for Tasks 3–8, concise environment-readable rule reference

- [ ] **Step 1: Write the three launch documents**

Record GitHub, active checkout, deployed version and source commit; publication path; confidence limits; the corrected task numbering and dependency order; isolation guidance; preserved/corrected/unverified review results; and the exact next action for Task 3.

- [ ] **Step 2: Add the concise rule pointer**

Append a short reference in `.agents/rules/spanishcue-safety.md` directing agents to `docs/launch/START.md` and `docs/launch/WORKING_RULES.md` without replacing existing rules.

- [ ] **Step 3: Validate documentation against repository state**

Run: `git diff --check && git status --short`

Expected: no whitespace errors and only task-related changes.

- [ ] **Step 4: Commit**

Run: `git add .agents/rules/spanishcue-safety.md docs/launch docs/superpowers/plans/2026-09-19-review-launch.md && git commit -m "docs: establish validated launch base"`

### Task 4: Final verification and review

**Files:**
- Review: all changes from `origin/main` to `HEAD`

**Interfaces:**
- Consumes: Tasks 1–3
- Produces: verified branch ready for PR without deployment

- [ ] **Step 1: Run final verification**

Run: `npm test && npm run lint && git diff --check origin/main...HEAD`

Expected: all tests pass, lint is clean, and the diff has no whitespace errors.

- [ ] **Step 2: Review the whole branch against the request**

Inspect the complete diff for authentication migration, forged identity acceptance, PRO asset leaks, fake account states, global ESLint weakening, unrelated changes, and deployment actions.

- [ ] **Step 3: Commit any Important fixes with RED→GREEN evidence**

For each Important finding, add a failing regression test, implement the minimum fix, rerun the full suite, and commit. Defer only genuine minor polish.
