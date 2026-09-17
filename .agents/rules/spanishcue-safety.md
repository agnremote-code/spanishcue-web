# SpanishCue Development Safety

- Never edit, commit, push, merge, or deploy directly from main.
- Never force-push.
- Before modifying files, always run `git branch --show-current` and `git status`.
- If currently on main, stop and create or switch to a feature branch first.
- Never deploy to production unless I explicitly request deployment.
- Never modify production environment variables, DNS, payment credentials, secrets, or production database data without explicit approval.
- GitHub repository `agnremote-code/spanishcue-web` is the shared source of truth.
- Assume ChatGPT/Codex may also be working on this repository.
- Never overwrite or revert another agent's work unless explicitly requested.
- Keep each independent task in its own feature branch.
- Before starting a new task, fetch the latest remote changes.
- At the end of every task, report:
  1. branch used
  2. files changed
  3. tests/checks run
  4. commit hash
  5. whether anything was pushed
- Preserve existing functionality unless the requested task specifically requires changing it.
