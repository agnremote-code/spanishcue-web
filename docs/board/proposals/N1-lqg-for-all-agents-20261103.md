# Proposal: make the Learning Quality Gate (N1) a shared AGENTS.md rule

- Date: 2026-11-03 (Tuesday SEO routine, scheduled cloud run)
- Drafted by: the facilitator, from W45 plan item 2 ([assessments/2026-W44.md](../assessments/2026-W44.md) §4.4 and §6) and W43 plan item 5.
- Status: **PROPOSAL, not adopted.** `AGENTS.md` is shared with Codex and every other agent, so the board cannot change it by its own vote ([CONSTITUTION.md](../CONSTITUTION.md) §2: repository permissions are not votable). This file only records the exact proposed text and the evidence behind it. Nobody edits `AGENTS.md` from it until the owner adopts it.
- Audit evidence that goes with it: [docs/audits/non-board-sample-g3-g6-20261103.md](../../audits/non-board-sample-g3-g6-20261103.md) (Martin, sampled and non-retroactive).

## 1. Problem (VERIFIED)
- BOARD-DECISION-001 §3.1 N1 says no new lesson, level or indexable teacher page merges without a `docs/audits/<lesson>-pedagogy-YYYYMMDD.md` file. It binds the board only: `AGENTS.md` does not mention it (`grep -n "LQG\|pedagogy-" AGENTS.md` returns nothing on main `6e4a2e7`).
- Since 2026-10-23, non-board sessions shipped 3D worlds, the ten «clases clásicas» A0–C2 and the `/material-ele` and `/recursos` teacher surfaces without that file (`ls docs/audits | grep pedagog` on `6e4a2e7` returns only the Feria file). Example: #292 «Más allá» shipped seven levels with `featured:true` and no LQG file (W44 §4.4).
- Those sessions did nothing wrong under the rules that bind them. The gap is in the rules.

## 2. Proposed text for `AGENTS.md` (a new section after "Spanish language consistency")
> ## Learning quality file for new lessons (every agent)
>
> A PR that adds a new lesson, a new level of an existing lesson, or a new indexable teacher page also adds `docs/audits/<slug>-pedagogy-YYYYMMDD.md`, written before the PR is marked ready. It records:
>
> - **Language:** the result of `npm run test:language`.
> - **Review:** who wrote the content and who reviewed it. The reviewer is a different agent or session from the author.
> - **Level honesty:** for each level listed in the catalogue, one or two quoted lines that show the content is written for that level and differs from the adjacent level. A level that is only a relabel is not listed.
> - **Objectives:** each scene or section names what it practises, and nothing claims to practise a structure that no activity targets.
>
> Changes to existing lessons do not need the file. Existing lessons are never removed or noindexed for lacking it; they are audited when touched.

Why this wording: it is the four N1 items (G3, G4 substance, G6, beat labelling) in plain terms, without the board-internal labels, so a session that never read `docs/board/` can follow it. It is deliberately a file, not a new CI gate, so it adds no CI risk.

## 3. Interim measure the board runs itself (no owner action needed)
Until the owner decides, the board audits a sample of non-board units each Tuesday slot that has capacity: one or two levels in full, machine checks on the rest, following BOARD-DECISION-001 G4/G6. A FAIL produces the narrowest fix PR (for example, dropping a level from the catalogue `levels`), never a retroactive noindex. The first sample is the audit file linked above.

## 4. What the owner is asked
Nothing is required for the board to continue. If the owner wants all agents bound by the same gate, adopting §2 is a one-section docs change to `AGENTS.md`, which the board can open as its own PR once the owner says so (only one open PR may touch `AGENTS.md` at a time, AGENTS.md rule 6).
