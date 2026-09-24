# SPANISHCUE handoff for Claude Code

Updated: 2026-09-25 (UTC+7 context)
Repository: `agnremote-code/spanishcue-web`

This document transfers project context from the prior ChatGPT/OpenAI workflow into repository-owned documentation so future agents do not depend on chat memory.

It is a context snapshot, not a substitute for reading current GitHub state. Always re-read `main`, open PRs, release state and external provider state before acting.

---

## 1. Canonical source and current verified baseline

GitHub `main` is canonical.

At the time this handoff was prepared:

- canonical `main`: `c18c90d0a7119b66fbce195adfc04f55cc527e00`
- production Sites version: `174`
- healthy production source SHA: `c18c90d0a7119b66fbce195adfc04f55cc527e00`
- release state: enabled and idle
- production smoke: passed, 10 checks
- recorded unexpected runtime errors: 0
- environment set revision: 47
- latest recorded migration: `drizzle/0009_glossy_mariko_yashida.sql`
- migration 0009 status: already applied and retained through later Worker rollback/redeploy history

These values are a snapshot only. Re-read `state.json` from branch `automation/sites-release-state` and current GitHub `main` before any release task.

Do not reapply migration 0009.

---

## 2. Why this handoff exists

The project has grown beyond a simple website. It now includes:

- a structured Spanish-teaching content library;
- protected FREE/PRO lesson access;
- Firebase-backed authentication;
- portable internal account identities;
- D1-backed account, progress and billing data;
- PayPal and Paddle billing flows;
- checkout-before-registration purchase claims;
- a release controller with locking and rollback state;
- a large set of interactive lesson worlds;
- CEFR-aware conversation-family architecture;
- SEO and canonical-route compatibility;
- production smoke checks and protected-asset verification.

A previous long Work execution also demonstrated a workflow risk: a large Conversation content-expansion task accumulated significant work in a temporary agent worktree and the original branch/worktree disappeared before all work had been safely pushed.

From now on, repository persistence is part of implementation quality. Long-running work must be checkpointed and pushed continuously.

---

## 3. Product identity

Product name: **SPANISHCUE**

Brand language:

- Motto: **CHOOSE. OPEN. TEACH.**
- Slogan: **Stop building every lesson from scratch.**

Primary audience: Spanish teachers who need ready-to-use, visually engaging lesson material without rebuilding every class manually.

Core product idea:

A teacher chooses a lesson, opens it, and teaches directly from an interactive/visual experience. The product should minimize lesson-prep friction while still providing sound pedagogical progression.

Primary production domain:

- `https://spanishcue.com`

Launch/commercial positioning:

- Founder subscription: USD 15/month
- no trial in the current billing contract
- first 1,000 valid founder allocations across supported payment providers
- allocation occurs only after the billing contract's valid settled-payment conditions are met

Never infer billing terms from marketing copy alone. `docs/billing-contract.md` is authoritative for implementation.

---

## 4. Product UX and brand direction

Established direction:

- clean, modern, teacher-facing UI;
- bilingual ES/EN site experience;
- natural English copy;
- Spanish UI uses a consistent `tú` register;
- prominent lesson previews;
- clear FREE vs PRO behavior;
- strong visual identity without turning lesson interfaces into generic dashboards;
- level selectors should be obvious but compact;
- filters should not dominate the content;
- avoid unnecessary friction between discovering a lesson and opening it.

Hero/marketing direction established during earlier work:

- balanced teacher/student imagery;
- Latin America + Spain language positioning;
- CTA wording centered on trying/opening lessons rather than technical product language;
- product value proposition focused on saving prep time.

Official mascot concept established in project design work:

- young male figure;
- black clothing;
- pencil motif;
- transparent-background asset;
- used as a recognizable brand character rather than as a replacement for lesson-specific art.

Do not redesign the brand, mascot or marketing hierarchy unless the user explicitly requests a redesign.

---

## 5. Library/content taxonomy

Important high-level collections include:

- **GRAMÁTICA**
- **CONVERSACIÓN**
- **ESCUCHA**
- country-themed material as a distinct collection

Historical A0 content was consolidated into A1 rather than maintained as a separate public level.

Conversation content includes recurring families and visual concepts. Some important examples from existing/project history include:

- Red Flag o No
- La isla vota
- Argento Roleplays
- La vida después de los 30
- La Agencia de Vidas Paralelas
- La Ruleta de Tu Vida
- Let’s Talk
- country worlds such as USA, UK, Australia, Switzerland, Ireland and others
- high-level scenario worlds for B2/C1/C2

The repository's actual catalog and route ledger, not this prose list, determine what currently exists.

---

## 6. Pedagogical operating principles

New lesson work should follow these principles unless a specific lesson brief overrides them.

### 6.1 CEFR / PCIC

Use CEFR and PCIC as authoring references.

Do not claim formal certification merely because content was designed using those frameworks.

### 6.2 Class length

Target approximately **45 minutes** of usable class time.

If material is too short:

- deepen interaction;
- add meaningful retrieval/production;
- combine coherent stages;
- do not pad with repetitive filler.

### 6.3 Progression

Within a lesson:

- move from accessible input/activation toward freer production;
- preserve clear progression;
- end with meaningful conversation, production or application.

### 6.4 Language policy

Lesson content is primarily in Spanish.

English should generally be avoided except where grammar explanation genuinely benefits from bilingual clarification.

A1–A2 grammar lessons may use bilingual support when pedagogically useful.

### 6.5 Grammar/conjugation

For verbal-system material:

- one tense at a time;
- regular forms first;
- irregular forms after the regular pattern is established;
- keep mood/tense routes explicit;
- avoid mixing several new paradigms before the learner can retrieve one reliably.

### 6.6 Out-of-class practice principles

When homework/practice is requested, favor evidence-aligned approaches such as:

- spaced retrieval;
- repeated production;
- interleaving after initial acquisition;
- deliberate pronunciation practice;
- short repeated tasks over passive rereading.

Do not turn every lesson into homework unless requested.

---

## 7. Conversation-family architecture

This project has already migrated Conversation content toward family-based variants.

Read:

- `docs/conversation-family-authoring.md`
- `docs/conversation-family-migration.md`

Important invariant:

The family catalog is a presentation layer. The route/access ledger remains authoritative for existing IDs, routes and access behavior.

### 7.1 Shared world, distinct pedagogy

Multiple CEFR levels may share:

- visual world;
- interaction engine;
- map;
- scene;
- mechanics;
- assets.

But each level must have genuinely distinct pedagogical content:

- communicative objectives;
- task demands;
- scaffolding;
- teacher notes;
- production;
- closing conversation.

Changing only a CEFR badge or generic instruction is not a legitimate variant.

### 7.2 Compatibility

Preserve:

- existing lesson IDs;
- old URLs;
- route defaults;
- entitlement checks;
- canonical SEO behavior;
- query handling;
- history/back-forward behavior;
- favorites/plans compatibility.

### 7.3 Access

FREE and PRO boundaries are security behavior, not presentation hints.

Never allow query parameters or public client imports to grant/leak premium content.

---

## 8. Lost Conversation expansion and forensic recovery

A long-running task on 2026-09-24 attempted to expand every Conversation family that only had one CEFR level into A1–C2 variants.

The original working branch was:

`codex/conversation-all-levels-20260924`

The reported deleted Work worktree was:

`/workspace/scratch/8fa7e1318252/spanishcue-web`

That original remote branch is not present on GitHub.

Known recovery branches created afterward include:

- `codex/recover-conversation-all-levels-20260924`
- `recovery/conversation-worktree-fragments-20260924`
- `recovery/pre-conversation-expansion-20260924`
- `recovery/conversation-all-levels-forensic-20260924`

The first recovery branches initially preserved only a few thumbnails.

The forensic branch later preserved materially more evidence, including:

- raw TypeScript cache artifacts;
- exact-source snapshots extracted from cache;
- provenance metadata;
- recovered source fragments/variants;
- known recovered thumbnails;
- evidence of a larger intermediate catalog;
- test/configuration traces from the lost execution.

Important:

**Do not merge the forensic branch wholesale.**

It is an evidence/preservation branch, not automatically a valid feature branch.

For recovery work:

1. preserve bytes exactly;
2. identify provenance;
3. compare candidate source against current `main`;
4. determine whether the artifact is complete enough to be meaningful;
5. integrate only verified artifacts on a fresh branch;
6. never silently fill gaps by regenerating content unless the user explicitly authorizes reconstruction.

Recovery and regeneration are separate tasks.

---

## 9. Billing product behavior

Read `docs/billing-contract.md` before touching billing.

Important commercial invariant:

- product code: `spanishcue-pro`
- Founder offer: USD 15/month
- automatic renewal
- no trial
- no setup fee
- maximum 1,000 founder allocations per environment
- founder allocation depends on a valid settled payment, not merely checkout approval or provider ACTIVE status

### 9.1 Checkout before account creation

A key product decision is that a buyer can pay before creating/signing into a SPANISHCUE account.

The application supports this through provider-neutral purchase claims.

The intended funnel is:

1. user initiates checkout;
2. provider-side payment completes under the server-side validation rules;
3. purchase claim remains server-tracked;
4. buyer authenticates/creates account;
5. verified account with the appropriate normalized email binds the paid claim;
6. normal billing/access machinery grants entitlement.

Do not force registration before checkout unless the product owner explicitly changes this policy.

### 9.2 Trust boundary

Never grant PRO from:

- browser callback alone;
- localStorage/sessionStorage;
- frontend analytics event;
- unverified provider email;
- subscription approval alone;
- PayPal ACTIVE status alone;
- client-supplied identity headers.

Access derives from validated server-side billing state and persisted access grants.

### 9.3 Provider state

PayPal and Paddle production state can change outside Git.

Do not rely on an old failure message as current truth.

Recent project work involved:

- PayPal Live preparation and payment testing;
- Paddle production verification;
- Paddle checkout initialization diagnostics;
- default payment-link configuration;
- checkout-before-account behavior.

Always verify the current external provider state when the task depends on it.

---

## 10. Authentication and user identity

Read `docs/BACKEND_MIGRATION.md`.

Current architecture uses Firebase for external authentication.

Important invariant:

Firebase UID is not the canonical SPANISHCUE account primary key.

The durable application identity is the internal user ID.

Preserve:

- `users`
- `auth_identities`
- `access_grants`
- `lesson_progress`
- offer/billing settings and billing records as defined by current schema/docs

Server-side identity verification is authoritative.

Browser-supplied identity headers are not trusted.

Do not create duplicate internal accounts merely because the same person changes provider/sign-in method.

---

## 11. Backend portability

SPANISHCUE is intentionally designed so that authentication/hosting can be replaced later without rebuilding user identities or access.

If moving away from Firebase or current hosting in the future:

- preserve canonical internal user IDs;
- add new identity links rather than replacing user IDs;
- preserve access grants/progress;
- reconcile all records before cutover;
- keep old auth paths until migration is verified;
- do not make billing/provider identities the application primary key.

See `docs/BACKEND_MIGRATION.md`.

---

## 12. D1 / migrations

D1 is production state.

Never mutate production D1 casually.

Migration-sensitive work follows `docs/releases/MIGRATION_RELEASE.md`.

At the time of this handoff:

- migration 0009 has already been applied;
- its table is `billing_purchase_claims`;
- the migration remained applied across Worker rollback/redeploy history.

Do not reapply 0009.

Never edit applied migrations retroactively merely to make source look cleaner.

Failed Worker deployment does not imply database rollback authorization.

---

## 13. Release architecture

Read `AGENTS.md` and `docs/releases/SITES_RELEASE.md`.

Source workflow:

1. current `main` is canonical;
2. work on a fresh branch;
3. commit/push;
4. non-draft PR to `main`;
5. CI + Auto Merge owns merge validation;
6. verify merged SHA.

Production workflow is separate.

A merged PR is not proof that production changed.

Sites release controller state is stored on the dedicated branch:

`automation/sites-release-state`

Do not manually edit that state during feature work.

Do not steal/expire a busy release lock.

Do not bypass the release controller.

A production release must publish the exact merged source SHA and verify smoke/runtime behavior.

Rollback restores a compatible prior Worker; it does not authorize SQL rollback.

---

## 14. Current production snapshot

As verified while preparing this handoff:

- Sites production version: 174
- source SHA: `c18c90d0a7119b66fbce195adfc04f55cc527e00`
- deployment ID: `appgdep_6ab539813f58819189c8274d87133ffe`
- environment revision: 47
- smoke passed: 10 checks
- runtimeErrors: 0
- release state: idle

Re-read live state before relying on these values.

---

## 15. Current source baseline around production v174

The current main SHA includes PR #54's sanitized Paddle API failure logging.

Before that, production/release history included:

- the Conversation family refactor;
- purchase-claim/billing work;
- SEO work;
- release-controller reconciliation;
- migration 0009;
- Paddle diagnostics.

Do not assume the exact branch/PR history described in old chats is still the current head. GitHub is canonical.

---

## 16. Build/test environment

`package.json` currently requires Node >= 22.13.0.

Important scripts include:

- `npm run dev`
- `npm run build`
- `npm test`
- `npm run lint`
- `npm run validate:artifact`
- `npm run smoke:production`
- targeted tracker, Red Flag and guide suites

Repository docs explicitly note that some install/build helpers target Linux and GNU utilities.

The owner runs macOS.

Therefore:

- do not rewrite Linux production tooling just because a local Mac command is unavailable;
- distinguish local-environment limitation from source failure;
- use CI or a Linux environment for canonical checks when needed;
- report exactly what did and did not run.

---

## 17. Workflow expected from Claude Code

The migration away from ChatGPT Work is primarily a workflow migration.

Desired Claude Code behavior:

### Before editing

- fetch/read current `main`;
- read `AGENTS.md`;
- read `CLAUDE.md`;
- inspect relevant docs;
- inspect overlapping PRs;
- identify whether the task touches billing/auth/D1/release risk.

### During work

- work on a fresh branch;
- keep changes narrowly scoped;
- preserve unrelated functionality;
- checkpoint frequently;
- push coherent milestones;
- do not keep hours of completed work only locally;
- maintain a brief running inventory of what was changed and verified.

### After implementation

- run appropriate checks;
- commit;
- push;
- create non-draft PR;
- observe/fix CI;
- verify merged SHA before saying source work is merged.

### Production

Only if explicitly requested:

- follow release runbook;
- never improvise deployment;
- report exact deployed SHA/version/deployment;
- run/verify smoke;
- distinguish source completion from production completion.

---

## 18. Content-generation workflow expected from Claude

When generating many lessons or variants:

1. determine the exact inventory first;
2. preserve existing originals;
3. generate/adapt in small coherent batches;
4. after each batch, validate structure/content;
5. commit and push each batch;
6. continue;
7. never wait until all dozens/hundreds of files are complete before the first durable checkpoint.

For CEFR variants:

- preserve the seed/original level;
- create genuinely level-appropriate tasks;
- keep visual-family resemblance when desired;
- vary thumbnails enough to distinguish level while keeping family identity;
- do not make every level a superficial rewrite of the same prompts.

---

## 19. Visual content / thumbnails

Conversation families may use related but distinct thumbnails by level.

Desired effect:

- clearly same family;
- not visually identical;
- level variants should be distinguishable;
- thumbnails should not misleadingly imply different lesson concepts when they are one family.

Do not regenerate existing approved visual assets unless asked.

Recovered forensic thumbnails should be treated as recovered artifacts, not automatically approved canonical assets.

---

## 20. SEO / routes

Preserve existing canonical route behavior.

Do not break historical lesson URLs while simplifying the visible catalog.

Do not use query-variant URLs as independent canonical sitemap entries when the family architecture expects a single canonical resource.

When touching lesson routing:

- check legacy URLs;
- access redirects;
- returnTo behavior;
- level query behavior;
- canonical metadata;
- sitemap;
- favorites/plans mappings;
- protected content behavior.

---

## 21. FREE / PRO model

Some lesson experiences are intentionally FREE samples.

Do not infer access from family similarity.

Existing route/access ledger and tests determine entitlement.

Country content may contain free and paid experiences that look related but are intentionally separate.

Never merge a paid experience into a free family merely for visual/catalog convenience.

---

## 22. Known historical UX/technical concerns

These are historical context, not proof of current bugs. Verify before modifying.

Issues previously discussed include:

- auth/session persistence across refresh/new tabs;
- preview cropping;
- oversized filter UI;
- paywall/checkout routing friction;
- CTA path accidentally sending buyers to registration before payment;
- email verification deliverability/spam;
- payment-provider configuration drift;
- browser limitations during local visual QA.

Some of these may already be fixed in current `main` or external configuration.

Do not “fix” them from memory without reproducing current behavior.

---

## 23. Marketing/funnel context

Established product funnel concepts include:

- clear value proposition around ready-to-teach lessons;
- trial/free lesson CTA;
- founder subscription;
- FAQ/legal support;
- paywall;
- teacher account area;
- lesson discovery via category/level;
- optional conversion UI such as banners/popups where already implemented.

Do not add aggressive conversion mechanics without checking current product direction.

---

## 24. Repository rules are more authoritative than chat memory

This handoff intentionally captures project context that previously lived in chats.

However:

- code defines implementation;
- tests define verified behavior;
- docs define contracts;
- current GitHub defines source state;
- current provider dashboards/runtime define external configuration;
- current release state defines production state.

If this handoff conflicts with those sources, investigate and update this handoff rather than forcing source to match stale prose.

---

## 25. Suggested first action when Claude takes over

When Claude Code opens the repo for the first time, do not immediately modify source.

First run a read-only takeover audit:

1. identify current branch and clean/dirty status;
2. fetch current remote refs;
3. read `AGENTS.md`, `CLAUDE.md`, and this handoff;
4. inspect current `main`;
5. list open PRs relevant to active work;
6. note current release-state snapshot read-only;
7. inspect the forensic recovery branch without merging it;
8. report what is canonical, what is pending, and what is recovery-only.

Only then begin the first new implementation task.

---

## 26. What should never again depend only on a chat

These must live in GitHub or another durable project system:

- architectural decisions;
- billing invariants;
- release procedures;
- lesson-family conventions;
- CEFR authoring rules;
- active migration/recovery state;
- critical branch/PR references;
- production deployment identifiers;
- acceptance criteria for large refactors;
- project workflow rules.

Chats can help execute work, but they should not be the only durable store of project knowledge.

---

## 27. Immediate migration status

This handoff and `CLAUDE.md` are being added on a dedicated documentation branch rather than directly to `main`.

The migration itself must follow normal repository rules:

- documentation branch;
- commits pushed;
- non-draft PR;
- CI/auto-merge;
- verify merged SHA.

No production deployment is required merely to add these Claude handoff documents.
