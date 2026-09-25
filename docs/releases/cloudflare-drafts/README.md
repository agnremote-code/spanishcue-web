# Cloudflare deployment drafts (INACTIVE)

These files are drafts for Phase 1–2 of `../CLOUDFLARE_MIGRATION_PLAN.md`.
Nothing reads them:

- they live under `docs/`, so GitHub Actions does not run the `.yml` files and neither Wrangler nor the Vite plugin loads the `.jsonc` file;
- they contain placeholders (`<…>`), not real account or database IDs;
- they contain no secret values.

Activating any of them is an owner-authorized phase of the migration plan:

| Draft | Becomes | Phase | Gate |
|---|---|---|---|
| `worker-config.draft.jsonc` | `wrangler.jsonc` at repo root, wired through `@cloudflare/vite-plugin` `configPath` | 1 | `MIGRATION_RELEASE.md` (migration-sensitive path) |
| `deploy-cloudflare.draft.yml` | `.github/workflows/deploy-cloudflare.yml` | 2 (staging only), 4 (production) | Owner authorization; production only at cutover, when Sites is disabled in the same step |
| `rollback-cloudflare.draft.yml` | `.github/workflows/rollback-cloudflare.yml` | 2 | Owner authorization |
| `d1-migrate.draft.yml` | `.github/workflows/d1-migrate.yml` | 2 | Owner authorization; GitHub environment with required reviewer |

Design invariants the drafts encode:

1. Deploys run an exact 40-character SHA that is already on `main`.
2. `release-policy.mjs classify` exit 42 stops a deploy; migrations are a separate, manually approved workflow.
3. Deploys and rollbacks never touch D1 schema or data.
4. Rollback redeploys the recorded previous Worker version and reruns the same smoke suite.
5. Staging and production use separate Workers, D1 databases, API tokens and GitHub environments.
6. Production deploy is invoked from the `CI + Auto Merge` merge job (`workflow_call`), because pushes made with `GITHUB_TOKEN` do not trigger `on: push` workflows.
