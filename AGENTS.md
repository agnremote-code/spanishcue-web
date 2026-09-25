# SPANISHCUE agent rules

This file is the shared authority for every coding agent working on SPANISHCUE.
Claude Code is the primary development agent. Codex is the secondary agent.
Both follow this file. Agent-specific files (`CLAUDE.md`, and any future Codex
file) may add stricter rules but never relax these. When two rules conflict,
the stricter one wins.

## Delivery rule

GitHub `agnremote-code/spanishcue-web` main is canonical. Read current main and overlapping PRs before working. Use one fresh task branch. Preserve auth, billing, lesson content and other unrelated functionality.

Every completed implementation must be committed, pushed, and submitted as a non-draft PR to main. Let `CI + Auto Merge` verify and merge it; fix CI failures on that open PR. Verify the merged SHA before reporting completion. Never push directly to main or manually merge. Never deploy an unmerged Work/agent branch.

Only the merge-triggered Sites release owner may publish, following `docs/releases/SITES_RELEASE.md`. A source PR is not a production release. Never use a deploy helper that bypasses that procedure. If an external service blocks completion, report the exact blocker and the PR/status; do not label unfinished work complete.

Changes to drizzle/**, db/schema.ts, D1 bindings/configuration or migration infrastructure require `docs/releases/MIGRATION_RELEASE.md`. Automatic releases and rollbacks must not mutate D1 schema/data. Do not change working Firebase/Resend verification as part of infrastructure work.

Never alter `automation/sites-release-state` or `automation/merge-lock` in ordinary feature work. Those are release coordination state, not source branches. Do not delete, expire, force-update or steal a busy release lock.

## Agent roles

| Agent | Role | Branch prefix |
|---|---|---|
| Claude Code | Primary development agent: features, fixes, content, docs, CI changes, release preparation up to a verified merged SHA | `claude/*` |
| Codex | Secondary agent: tasks the owner assigns to it explicitly | `codex/*` |
| OpenAI Sites release owner | The only current production publisher, via `docs/releases/SITES_RELEASE.md` | none (does not author source) |

Neither Claude Code nor Codex is a production publisher today. See
"Production deployment" below.

## Multi-agent branch and PR rules

0. **Start from fresh truth.** `origin/main` is the source of truth. Run `git fetch origin` before starting, branch from `origin/main`, and record the base SHA in your first commit message or PR body. Never edit `main` directly, not even for docs.
1. **Branch names.** Normal work uses `claude/<topic>` or `codex/<topic>`, created from current `origin/main`. One task, one branch, one PR. Add a date suffix (`-YYYYMMDD`) when a topic may recur.
2. **Reserved prefixes.** `automation/*` belongs to CI and the release controller. `recovery/*` holds forensic preservation refs. Agents never create, push to, rebase, or delete branches under those prefixes in ordinary work.
3. **Own your prefix.** An agent pushes only to branches under its own prefix. It never pushes to, rebases, or force-updates the other agent's branches, even to fix them. To build on another agent's open work, wait for it to merge, or branch from it under your own prefix and say so in the PR body.
4. **Force-push.** Never force-push `main` (the "Protect main" ruleset also blocks it). On your own unmerged task branch, prefer new commits; use `--force-with-lease` only on a branch no other agent or PR depends on.
5. **Check for overlap first.** Before editing, list open PRs (`gh pr list --state open`) and check whether any touch the same files. If one does, do not open a competing PR: coordinate through the owner, or wait for it to merge and rebase your work on the new main.
6. **One writer per sensitive area at a time.** Migration-sensitive files (see `scripts/release-policy.mjs` `migrationSensitivePaths`), billing (`app/paypal-server.ts`, `app/paddle-server.ts`, `app/api/billing/**`), auth (`app/firebase-session.ts`, `app/api/auth/**`, `server/**`), `.github/workflows/**`, and `AGENTS.md`/`CLAUDE.md` may have at most one open PR each across both agents.
7. **PR body.** State which agent authored it, what changed, which checks ran, and whether anything touches production, billing, auth, secrets or D1. Always non-draft when ready; `CI + Auto Merge` ignores drafts.
8. **Merging.** Only `CI + Auto Merge` merges. Agents never click merge, never call the merge API, and never take `automation/merge-lock`.
9. **After merge.** Verify the merged SHA on `main` before reporting completion. CI deletes the merged branch; do not recreate it.
10. **Stale branches.** Do not delete branches you did not create. Report stale ones to the owner.
11. **Stay current before merge.** If `main` moves under an open PR and the PR conflicts, merge `origin/main` into your branch (or rebase your own unshared branch), rerun the relevant checks, and push. The `merge` job re-tests against the newest `main` anyway; a fresh-base failure is yours to fix on the same PR.
12. **Run the checks.** Run what the change needs locally (`npm test`, `npm run lint`, `npm run validate:artifact`, `npx tsc --noEmit`, `git diff --check`), and report any that could not run (for example Linux-only tooling on macOS). CI on Linux is the canonical result.
13. **No destructive Git.** Never run `git clean`, `git reset --hard`, `git gc`, `git prune`, `git reflog expire`, a destructive checkout, or a force-update of any shared ref, unless the owner authorizes that exact operation.
14. **Preserve work remotely.** Agent filesystems and worktrees are ephemeral. Push every coherent checkpoint to your task branch. Never end a session with meaningful work only local.
15. **Semantic conflicts are not yours to settle.** If your change contradicts another agent's open or recently merged work (not just a textual conflict: a different product decision, a changed contract, a removed route), stop and describe the conflict to the owner. Do not silently overwrite, revert or "reconcile" the other agent's intent.

### Agent lock: evaluated, not added

A repository-level agent lock (a ref or file that one agent must hold before
working) was considered and rejected:

- the existing controls already serialize what matters: `automation/merge-lock` serializes merges, `automation/sites-release-state` serializes releases, and CI re-tests every PR against the newest `main`;
- branch prefixes plus the overlap check prevent agents from writing to the same branch;
- a lock held by a crashed or ended agent session would block the other agent indefinitely, and a time-expiring lock would violate the "never expire a lock based only on elapsed time" rule the release controller relies on.

Revisit only if two agents repeatedly produce conflicting PRs in the same area
despite rules 5, 6 and 15.

## Production deployment

There is exactly one canonical deployment mechanism at any time.

- **Current mechanism:** the OpenAI Sites release controller in `docs/releases/SITES_RELEASE.md`. Its save, deploy and rollback steps need native Sites tools that Claude Code and Codex do not have. Agents stop at a verified merged SHA.
- **Prepared, not active:** a GitHub Actions + Cloudflare deployment described in `docs/releases/CLOUDFLARE_MIGRATION_PLAN.md`. It becomes canonical only after the owner authorizes the cutover in that plan. At that moment the Sites controller is disabled in the same change; the two never run side by side against production.
- No second, parallel deployment system may be added or enabled without explicit owner approval for that specific system.
- **Staging (owner-approved, 2026-09-25):** `.github/workflows/deploy-staging.yml` deploys only the `spanishcue-staging` Worker on workers.dev with the staging D1 (`docs/releases/STAGING.md`). It is manual, cannot target `spanishcue.com`, and is not a production deployer. Never widen it to production; production cutover follows `docs/releases/CUTOVER_RUNBOOK.md`.
- **Prepared production workflow (inactive):** `.github/workflows/deploy-production.yml` runs only when the owner sets `OWNER_CLOUDFLARE_PRODUCTION_ENABLED=true`, approves the `production` environment and types the confirmation. Its `release` mode refuses to run while the Sites controller is enabled, so there is never more than one deployer to `spanishcue.com`. Agents never set that variable or dispatch this workflow without explicit owner instruction for that run.
- Adding, enabling or running any other deployment path (a `wrangler deploy` from a laptop, a new workflow that deploys, a manual Sites deploy outside the controller) is forbidden.

## Secrets

Never commit secret values, and never ask the owner to paste them into a chat, issue, PR or file. Refer to secrets by name only. Values live in the hosting provider, GitHub encrypted secrets, or provider consoles.
