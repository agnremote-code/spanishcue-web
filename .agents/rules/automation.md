# SPANISHCUE automation rules

All agent-made code changes must use a task branch and pull request targeting `main`.

## Before editing

1. Read current `main`.
2. Inspect open PRs and active branches for overlapping work.
3. Create a unique branch for the task from the latest appropriate `main`.
4. Do not modify another active agent's branch.

## Finishing ordinary application/UI/content/test/asset work

1. Run the relevant local verification available for the task.
2. Push the completed task branch.
3. Open a **non-draft** pull request to `main`.
4. Do not manually merge it.
5. Repository CI runs regression tests, lint, artifact validation, and whitespace checks.
6. Before merge, CI rebuilds/retests the candidate against the latest `main`.
7. Concurrent agent merges are serialized through the reserved `automation/merge-lock` ref.
8. After merge, CI runs a health gate and attempts a validated rollback if the merged tree fails.
9. If CI fails before merge, fix the failure on the same still-open task branch and push again.

Never bypass failing checks by pushing directly to `main`.

## Branch lifecycle

- A branch belongs to one PR/task lifecycle.
- Once its PR is **merged or closed**, consider that branch disposable.
- Never append new work to a branch whose PR has already completed, even if the ref still exists.
- For follow-up work, create a new branch from current `main`.
- `automation/merge-lock` is an ephemeral CI coordination ref. Agents must not use, rename, force-update, or manually delete it during normal work.

## Release-sensitive changes

Database/schema migrations and production infrastructure changes remain release-sensitive. A source PR merge does not authorize applying production D1 migrations, changing DNS, enabling Live PayPal, activating Ads, or publishing/rolling back OpenAI Sites.

Those actions require the dedicated release/deployment path and verification of external state.
