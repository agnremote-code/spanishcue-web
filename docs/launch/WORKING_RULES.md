# SPANISHCUE · Multi-Agent Working Rules

- Work from current `main`; never assume an old recovery/audit branch is current.
- Use one clearly named branch per task.
- Before editing, inspect open PRs and active branches for overlapping ownership.
- Do not edit another active agent's branch.
- Keep unrelated fixes out of the same PR.
- Never push ordinary feature work directly to `main`.
- Open a non-draft PR when the task is ready; let CI verify and merge it.
- Do not manually merge merely to bypass or outrun checks.
- Once a PR is merged or closed, do not continue work on that branch. Start a new branch from current `main`.
- The ref `automation/merge-lock` is reserved for CI and must not be used for development.
- Preserve Firebase server verification and D1-backed authorization.
- D1, not browser state, decides PRO access.
- Keep PayPal Sandbox and Live isolated. Live charging requires a separate explicit release decision.
- Keep teacher student/class data owner-scoped.
- Analytics must remain consent-gated.
- Ads remain inactive unless explicitly activated.
- Do not perform blind production migrations, DNS changes, destructive data operations, or unverified hosting releases.
- A GitHub merge and a production deployment are separate states. Report them separately.
