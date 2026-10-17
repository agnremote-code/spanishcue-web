# Scheduled board routines: runbook

Every scheduled cloud run starts with zero context and follows this file. The routine prompt only names the slot. The owner configured the routines on 2026-10-16 (see STATUS.md for routine IDs).

## What a routine is (and is not)
- A routine is **one isolated Claude Code cloud session** with a fresh checkout of `agnremote-code/spanishcue-web`. It does not inherit the interactive session's agents, scratchpad or memory. The repo and `docs/board/` are its only memory.
- **The board.** If the run has the `Agent` and `SendMessage` tools, convene the three executives as named agents `Alejandro`, `Sofia` and `Martin`, following CONSTITUTION.md. Keep it proportionate: use one implementer, and bring others in only for review or a specific question. If those tools are not available, do the work as a single agent and **write in the run report that the board was not convened**. Never write dialogue that did not happen.
- A routine cannot see subscription usage. Record usage as UNKNOWN. If the run is cut short, the next run resumes from STATUS.md.

## Start of every run (all slots)
1. Run `git fetch origin`. Read `AGENTS.md`, `CLAUDE.md`, `docs/board/CONSTITUTION.md`, `docs/board/STATUS.md` and the latest `docs/board/decisions/*`.
2. Run `gh pr list --state open`. Do not touch another agent's PR or overlapping files (AGENTS.md rules 5, 6 and 15). If the previous board PR is still open and red, fixing it comes first.
3. Check the outstanding defects, priorities and dependencies in STATUS.md. Pick the highest-ranked item for this slot whose dependencies are met.

## Slots
| Cron (UTC) | Local (Asia/Vientiane) | Slot | Default lead → reviewer |
|---|---|---|---|
| `0 2 * * 1` | Mon 09:00 | 3D unit (gated) | Martin authors content → Sofia builds → G4 content review by Alejandro or a fresh agent (never the author) |
| `0 2 * * 2` | Tue 09:00 | SEO investigation + implementation | Alejandro → Sofia (code) |
| `0 2 * * 3` | Wed 09:00 | 3D unit (gated) | as Monday |
| `0 2 * * 4` | Thu 09:00 | Backend, admin, security, reliability review (mandate §9) | Sofia or Alejandro → the other |
| `0 2 * * 5` | Fri 09:00 | 3D unit (gated) + weekly executive assessment | as Monday, plus the assessment written by Alejandro |

**3D units.** One unit is a new world with at least one fully authored level, a genuinely authored new level of an existing world, or a gated repair reported as a repair. The owner accepted this definition on 2026-10-16. Every unit needs its LQG review file (BOARD-DECISION-001 §3). If no unit passes the gate, ship nothing and say so.

**Creative ownership (owner, 2026-10-16).** The board invents its own lessons; never wait for the owner to supply topics or approve a routine release. When the backlog has no ready 3D item, run this concept pipeline before building:
1. **Inventory.** List the existing catalog (`app/lesson-catalog.ts`, `app/escucha-3d/games.mjs`, the 3D world folders) and the concepts already rejected in `docs/board/concepts/`. A new concept must not duplicate an existing world's setting, its main communicative function at the same level, or its core mechanic.
2. **Brainstorm.** Sofia and Martin each propose at least 2 original concepts. Each concept covers:
   - setting (a realistic, specific Hispanic-world place, never generic or stereotyped);
   - CEFR level and primary objective ids;
   - the characters, with their distinct regional voices from the TTS pipeline;
   - the conversation scenes and listening beats;
   - the 3D-specific mechanic, and why it needs 3D;
   - the teacher route;
   - the SEO target, meaning a real teacher query, with Search Console evidence when it exists.
3. **Select.** Alejandro scores the concepts on educational value, originality, SEO evidence, build risk and reuse of the kit. The majority decides. Record the chosen and rejected concepts, with their reasons, in `docs/board/concepts/YYYY-MM-DD-<slug>.md`.
4. **Build.** Martin authors the content (natural dialogue, not textbook lines; neutral-Spanish policy, with regional features only as taught exemplars), then Sofia builds it. Follow the AGENTS.md 3D-world rule: both modes, own listening per circle, neural TTS with distinct voices, the same controls, a teacher list and a no-WebGL fallback. Add tests and the LQG review file.
5. **Review and publish.** The G4 content review is done by Alejandro or a fresh agent, never the author. Release follows the delivery rules below. Add the lesson's public resource or teacher page per the Indexable Teacher Page standard.
6. **Report.** Append an entry to `docs/board/PUBLISHED.md` (the format is in that file) in the same PR or a follow-up docs PR.

**SEO.** Use Search Console via the Windsor.ai connector (`searchconsole`, account `sc-domain:spanishcue.com`). Never invent rankings or traffic. No thin or mass-generated pages (Indexable Teacher Page standard).

**Thursday review.** Inventory routes, the auth/authz boundaries, CI health and recent deploy runs. Fix only verified defects, each with a regression test. Billing, auth and D1 changes follow their runbooks and the one-writer rule. Never mutate D1 or secrets.

**Friday assessment.** Record what shipped this week, by type, with links. Include the SEO indicators (indexed count, cluster impressions and position, clicks as-is), the defects found and fixed, misses and their root causes, and the next week's plan. Write it to `docs/board/assessments/YYYY-Www.md`.

## Delivery and deploy (owner authorization, 2026-10-16)
- Work on one fresh `claude/<topic>-YYYYMMDD` branch and push checkpoints. Open the PR as a **draft** first.
- Commit and push your branch after every coherent step (owner rule 2026-10-17: "always save the work in case internet goes down"). Pushing a `claude/*` branch never deploys. If a push fails, keep committing locally and push when back online.
- **Merging is a production deploy**: CI + Auto Merge → deploy-staging → deploy-production. The owner authorized routines to mark their own PR ready **only after** the required local checks pass (`npm test` and the checks the change needs) **and** the independent review is resolved.
- After the merge: verify the merged SHA, watch the staging and production runs, and smoke the changed URLs in production. Report "deployed" only with production evidence.
- Never touch `vars.OWNER_CLOUDFLARE_PRODUCTION_ENABLED`, environment protection, `automation/*` refs, secrets, DNS, billing or ads configuration, or run D1 writes. If a release lock is busy, wait or stop. Never steal it.
- If production smoke fails: rely on the workflow's own rollback, open a fix PR, and record the incident in STATUS.md.

## End of every run
- Update `docs/board/STATUS.md` with what was done, its evidence (PRs, SHAs, run URLs), what is unfinished, and the exact next action.
- Archive the real inter-agent messages, if any, verbatim with sender, recipient and timestamp in `docs/board/transcripts/`.
- Records reach main through the same PR (or a docs PR) the run already opened. Never push to main directly.
