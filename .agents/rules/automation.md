# SPANISHCUE automation rules

All agent-made code changes must use a branch and pull request targeting `main`.

Do not leave completed work only in a local checkout or an unpushed branch.

For ordinary application, UI, content, test, and asset changes:

1. Push the completed branch.
2. Open a non-draft pull request to `main`.
3. Do not manually merge it.
4. The repository CI workflow runs the regression suite, lint, build/artifact validation, and merges automatically only after those checks succeed.
5. If CI fails, fix the failure on the same branch and push again. The workflow will rerun automatically.

Never bypass failing checks by pushing directly to `main`.

Database/schema migrations and production infrastructure changes remain release-sensitive: do not apply production D1 migrations or production infrastructure mutations merely because a pull request merged. Those actions require the dedicated release/deployment path.
