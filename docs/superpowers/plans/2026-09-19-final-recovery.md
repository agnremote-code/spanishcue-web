# SpanishCue Final Recovery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recover the completed SpanishCue launch work onto one GitHub-main-based branch, verify all security and product contracts, and publish only the verified commit.

**Architecture:** Use the recovered `chatgpt/release` tree, whose ancestry already contains GitHub `main`, as the integration source. Preserve Firebase authentication, D1 owner-scoped data and entitlements, server-confirmed PayPal state, the shared lesson catalog, consent-gated analytics and the existing Sites project.

**Tech Stack:** TypeScript, React/Vinext, Cloudflare Worker, D1/Drizzle, Firebase Auth, PayPal Subscriptions, Node test runner, ESLint, OpenAI Sites.

**Spec:** `docs/launch/START.md` and the user-provided final-recovery requirements.

## Global Constraints

- GitHub `main` is `ba8c09ece88f1cfc97c985849b506ff28dc40935`.
- Final branch is `chatgpt/final-recovery`.
- Founder pricing is USD 15/month for the first 1,000 eligible customers.
- PayPal Sandbox and Live remain isolated; Live checkout is disabled.
- Ads remain paused and no money may be spent.
- No DNS, hosting migration or destructive production operation.
- Reuse the existing Sites project only after all verification gates pass.

## Review Focus

- Forged identity or callback data must never grant cross-owner or PRO access.
- Repeated PayPal webhooks and conversion delivery must not duplicate effects.
- Migration filenames, journal entries and snapshots must form one ordered immutable chain.
- Boards entries must resolve to existing catalog IDs and preserve navigation/filter behavior.
- Anonymous or non-consenting visitors must not load analytics or receive protected assets.

---

### Task 1: Establish recovered source and launch record

**Files:**
- Modify: `docs/launch/START.md`
- Modify: `docs/launch/WORKING_RULES.md`

**Interfaces:**
- Consumes: recovered refs and GitHub `main` SHA.
- Produces: canonical branch, safety rules and release path for all remaining tasks.

- [ ] Confirm `ba8c09e` is an ancestor of the recovered release.
- [ ] Create `chatgpt/final-recovery` from the recovered integrated commit.
- [ ] Record exact source, migration and deployment constraints in the two launch documents.
- [ ] Verify the branch is clean before dependency setup.

### Task 2: Verify recovered feature contracts and migration chain

**Files:**
- Inspect: `app/**`, `worker/**`, `db/**`, `drizzle/**`, `marketing/**`, `tests/**`
- Modify only if a failing contract test proves an integration regression.

**Interfaces:**
- Consumes: recovered implementation and Drizzle journal.
- Produces: one coherent auth/billing/students/landings/SEO/boards/Ads release tree.

- [ ] Run focused tests for billing idempotency, server-side PRO, owner isolation, callback rejection, consent, catalog links and protected assets.
- [ ] Inspect `drizzle/meta/_journal.json` and assert every numbered SQL migration and snapshot is unique and ordered.
- [ ] If a contract fails, add or use the smallest reproducing test, verify RED, patch minimally, then verify GREEN.
- [ ] Confirm Live PayPal is disabled and Ads files contain no activation action.

### Task 3: Run the single complete release gate

**Files:**
- Verify: `package.json`, build output and protected artifact.

**Interfaces:**
- Consumes: final integrated source.
- Produces: fresh evidence for test, TypeScript, lint, build and artifact claims.

- [ ] Run the relevant test suite once.
- [ ] Run `npx tsc --noEmit`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build` once.
- [ ] Run `npm run validate:artifact` against that build.
- [ ] Perform the supported functional route/worker checks for landing, demo, login/session, account, students, lessons, persistence, Sandbox entitlement and logout; mark external Sandbox execution unverified when credentials are unavailable.

### Task 4: Finalize, review and publish safely

**Files:**
- Create: `docs/launch/TASK-08.md`
- Create: `docs/launch/RESUME.md`

**Interfaces:**
- Consumes: verified source SHA and gate results.
- Produces: GitHub PR, optional protected merge, exact Sites version and concise recovery handoff.

- [ ] Write the final evidence and any external-only blockers into TASK-08 and RESUME.
- [ ] Commit all final-recovery changes and push the branch.
- [ ] Open a PR to `main` and request an independent whole-branch review.
- [ ] Resolve Critical or Important findings with RED/GREEN evidence and rerun affected gates.
- [ ] Merge only when GitHub protections permit and the expected head SHA still matches.
- [ ] Package and deploy only the verified commit to the existing Sites project; never enable Live PayPal or Ads.
