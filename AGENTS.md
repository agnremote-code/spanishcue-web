# SPANISHCUE delivery rule

GitHub `agnremote-code/spanishcue-web` main is canonical. Read current main and overlapping PRs before working. Use one fresh task branch. Preserve auth, billing, lesson content and other unrelated functionality.

Every completed implementation must be committed, pushed, and submitted as a non-draft PR to main. Let `CI + Auto Merge` verify and merge it; fix CI failures on that open PR. Verify the merged SHA before reporting completion. Never push directly to main or manually merge. Never deploy an unmerged Work/agent branch.

Only the merge-triggered Sites release owner may publish, following `docs/releases/SITES_RELEASE.md`. A source PR is not a production release. Never use a deploy helper that bypasses that procedure. If an external service blocks completion, report the exact blocker and the PR/status; do not label unfinished work complete.

Changes to drizzle/**, db/schema.ts, D1 bindings/configuration or migration infrastructure require `docs/releases/MIGRATION_RELEASE.md`. Automatic releases and rollbacks must not mutate D1 schema/data. Do not change working Firebase/Resend verification as part of infrastructure work.

Never alter `automation/sites-release-state` or `automation/merge-lock` in ordinary feature work. Those are release coordination state, not source branches. Do not delete, expire, force-update or steal a busy release lock.
