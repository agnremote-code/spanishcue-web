# SPANISHCUE · Start Here

## Canonical workflow

- Repository: `agnremote-code/spanishcue-web`
- Integration branch: `main`
- Product domain: `https://spanishcue.com`

There is **no permanent recovery feature branch** anymore. Historical references to `chatgpt/final-recovery`, `antigravity/launch-audit`, or another old feature branch describe past work only.

For every new task:

1. Inspect the current `main`, open PRs, and active task branches.
2. Create a unique branch from the latest appropriate `main`.
3. Keep the task scoped so it does not overwrite work owned by another active agent.
4. Run the relevant tests locally when available.
5. Push the branch and open a non-draft PR to `main`.
6. Do not manually merge ordinary agent work. Repository automation owns verification and merge.
7. After a PR is merged or closed, treat its branch as disposable. **Never add new work to that old branch.** Create a new branch from current `main`.

## Automated merge safety

The repository automation runs the regression suite, lint, artifact validation, latest-`main` revalidation, and post-merge health checks. Concurrent agent merges are serialized with the reserved `automation/merge-lock` ref.

Do not create, reuse, or manually delete `automation/merge-lock` as a task branch.

## Release boundary

A successful GitHub merge does not by itself mean production was deployed.

Production D1 migrations, OpenAI Sites publication/rollback, PayPal Live activation, DNS changes, and other external infrastructure changes remain explicit release operations. Verify external state before changing it.
