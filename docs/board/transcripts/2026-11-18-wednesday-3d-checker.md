# Transcript: Wednesday 3D routine, 2026-11-18 (W47 plan item 3, step 1: the BOARD-DECISION-006 §3.6 checker)

Scheduled cloud run. The facilitator (main session) wrote the checker changes itself and convened **one** executive: Alejandro, as a fresh subagent and independent code reviewer. Sofia and Martin were not convened, because no content was authored and the code follows a decision already locked. The facilitator implemented instead of Sofia, and this is recorded as such. Only the facilitator and Alejandro exchanged messages. Below are the messages verbatim. Timestamps are UTC from the session clock, approximate to the minute.

---

## 1. Facilitator → Alejandro (review brief, sent about 02:20Z)

> You are Alejandro, CEO of the SpanishCue Executive Board, acting as the INDEPENDENT code reviewer (a fresh agent; you did not write this code). Repository: /home/user/spanishcue-web, branch `claude/board-wed-3d-20261118` (checked out), PR #472, head commit 4ff0126b. Do NOT edit, commit or push anything; read-only review. Do not run `npm test` (the facilitator is running it).
>
> Task: review whether the PR faithfully implements BOARD-DECISION-006 §3.6 (i)–(iv), and find real defects (silent passes, wrong casting, seeds that could be missing without failing, false lint positives/negatives, exit-code holes, anything that would make a VALID result untrustworthy).
>
> Read first:
> - docs/board/decisions/BOARD-DECISION-006-provable-listening-gate.md (the rule; §2.3–2.5, §3.2–3.4, §3.6)
> - docs/board/decisions/BOARD-DECISION-003.md §3 (the base rule) if needed
> - `git diff origin/main...HEAD` — files: scripts/check-escucha-3d-provable-stt.py (new), scripts/check-escucha-3d-provable.mjs (new), scripts/check-escucha-3d.mjs (hook), scripts/generate-escucha-3d-audio.py (main guard + lazy edge_tts import), tests/escucha-3d-provable-gate.test.mjs, package.json.
> - The original BD-003 checker it was derived from: `git show 3631534fe2c7ce5a111cbb55522ada6c1e69557e:scripts/check-escucha-3d-stt.py` (PR #282's branch; you may need `git fetch origin claude/escucha-3d-ascensor-cerro-b2-20261026` first).
>
> Known, deliberate scope choices (judge them, but they are not oversights): the workflow `.github/workflows/escucha-3d-stt.yml` is NOT moved because #282 already holds the only open .github/workflows change (AGENTS.md rule 6); the new checker is a separate file so #282 is untouched; PROVABLE_KEYS is empty (no world opted in yet). The full STT run cannot be executed in this sandbox (model hosts blocked); you can run `python3 scripts/check-escucha-3d-provable-stt.py <game> <level> --plan` and `node --test tests/escucha-3d-provable-gate.test.mjs` (deps are installed).
>
> Output: a verdict APPROVE / APPROVE WITH CHANGES / CHANGES REQUESTED, then numbered BLOCKERS (each with file:line, a concrete failure scenario, and a fix) and NON-BLOCKING notes. Label each claim VERIFIED (how you checked) or HYPOTHESIS. Be concise (under ~600 words). Do not invent problems; if something is fine, say so briefly.

## 2. Alejandro → Facilitator (review, received about 02:23Z)

> **Verdict: APPROVE WITH CHANGES.** One small blocker, and it is cheap to fix. Items (i) to (iv) are implemented faithfully. Item (v) is deferred, which is acceptable: until the workflow lands on `main` or the world's branch, no run under BOARD-DECISION-006 can happen, and that fails safe.
>
> Checked: I read the full diff and compared it with the BOARD-DECISION-003 checker at `3631534f`. I ran `node --test tests/escucha-3d-provable-gate.test.mjs` (14 of 14 pass), `--plan` on every content level, a difflib simulation of the boda B1 seeded clip, and lint probes with node. I did not edit anything, and I did not run `npm test`.
>
> **BLOCKER**
>
> 1. **Being unable to measure a line counts as finding its seed.** VERIFIED by reading `scripts/check-escucha-3d-provable-stt.py:519`.
>    - The code is `hit = (not line['words_ok']) if seed['kind'] == 'words' else (not line['speaker_ok'])`.
>    - `speaker_ok` is also False when the checker cannot measure the line: `'unresolved: no span'` (line 287) or `'unresolved: span too short to embed'` (line 292).
>    - Failure scenario: on the speaker-seed line, ASR does not locate the line, or the span comes out under 0.6 s. The speaker seed is then reported as "found" with no speaker comparison at all. The broken clip still HOLDs, because `words_ok` is False, so `valid` can become True.
>    - The same happens for word seeds. "Found" means any finding on that line, or "line not located". So an unrelated ASR slip on the seeded line counts as catching the seed. This is inherited from BOARD-DECISION-003, but this PR is where §3.6 asks for seeds you can trust.
>    - Fix (a few lines):
>      - Speaker seed: count it as found only when `'margin' in line and line['closest_cast'] == <other speaker's cast>`, or at least when the margin is below `MARGIN`.
>      - Word seeds: require a finding whose `authored` or `heard` text contains the seeded target token. For the `repeat` seed, that is an insert of the tail.
>      - Add one `--plan` or unit-level test of the hit rule.
>
> **What is right**
> - **(i) Casting.** VERIFIED. The checker imports the generator and uses `clip()` and `casting()` from it. The `OUT`/`FREE_OUT` swap is restored in `finally`. References are built with `speak(engine, RATE, pitch)` and cached per `(engine, pitch, level)`. The broken speaker line only changes `s`, so the generator gives it the other speaker's engine and pitch. The plan output for boda B1 confirms Emma +20Hz / Florian +13Hz.
> - **(ii) Per-level seeds, nothing skipped silently.** VERIFIED.
>   - Backtracking `assign()` replaces the old `zip` truncation, and `word_seed` tries every single-voice clip.
>   - `missing` lists every absent seed, and the run is NOT VALID if `missing` is non-empty.
>   - Same-gender and 3+ speaker clips HOLD as "unproven", and the speaker seed requires a cross-gender clip.
>   - The gap-delete and gap-replace seeds share one line, but the per-word gap-word report covers each one separately (checked in the difflib simulation).
> - **(iii) Exit code.** VERIFIED (`:530`, `:546`). `bool(cases)` prevents an `all([])` pass. A run without `--seeded` gives `tool_valid = None` and exits 1. Exceptions also exit non-zero.
> - **Generator change is safe.** VERIFIED. `escucha-3d-audio.yml` runs the generator as a script, so the `__main__` guard still fires. `import edge_tts` sits outside the retry `try`, so a missing package still fails loudly.
> - **Adjacent seed lines.** VERIFIED for boda B1 only: the `repeat` insertion is charged to line 1 alone, not to the delete line 2 that follows it. Other alignments are a HYPOTHESIS. The fix for blocker 1 removes the question either way.
>
> **NON-BLOCKING**
> 1. **Lint misses a name after a colon.** VERIFIED. `midSentence` treats `:` as a sentence end, so `"Se llama: [Rocío]."` passes. Drop `:` from the regex at `check-escucha-3d-provable.mjs:31`.
> 2. **Digit gaps get a misleading message.** VERIFIED. `[3]` is flagged "must be one whole word". It still fails, as it should (it is spoken «tres», which ends in -s), but the message is wrong.
> 3. **`--plan` is not standard-library only.** VERIFIED. `norm()` imports num2words whenever a line has a digit. `--plan` crashes with a traceback (exit 1, still fails closed) on consorcio/a0, consorcio/b1 and tren/c2. The test passes only because boda B1 happens to have no digits. Fix the docstring, or make that import lazy-safe in plan mode.
> 4. **Gap-word report can mask a duplicate gap word.** HYPOTHESIS. `heard = {g['word']: ...}` (`:524`) collapses a gap word that appears twice. Separately, `re.sub(whole(g0), count=1)` deletes the first occurrence in the line, which may sit outside the gap sentence. That case mostly fails closed.
> 5. **`el→en` is not an "-s pair".** VERIFIED. It is inherited from BOARD-DECISION-003, and `los→lo` is fine. Either note it in the LQG file or drop it.
> 6. **Several tests only check the source text.** VERIFIED (regexes in the test at `:156-159`). They break on harmless refactors and prove no behaviour. The `--plan` behaviour tests are good.
> 7. **PR scope is acceptable.** `PROVABLE_KEYS = []`, leaving #282 untouched and not moving the workflow are all reasonable.

## 3. Facilitator → Alejandro (delta request, sent about 02:25Z)

> Delta review request for PR #472: fixes for your blocker and non-blocking notes 1–3 are in commit bb02c13c (on top of 2429809c).
>
> Changes:
> - BLOCKER: new `seed_hit()` and `seed_match()` in scripts/check-escucha-3d-provable-stt.py.
>   - Word seeds count as caught only with an uncleared finding (`words_ok` False, no 'note') whose authored tokens contain the seeded word and whose heard tokens contain its replacement: gap-delete [g0]/[]; gap-replace [g1]/[repl]; repeat []/tail; delete [w]/[]; article [a]/[b]; first [w]/['ya' or 'y'].
>   - The speaker seed needs a measured 'margin', `speaker_ok` False, and `closest_cast` equal to the other speaker's cast (stored as `other_cast` in expect). A line with no span, too short to embed, or not located never counts.
> - NB3: `--plan` sets PLAN_ONLY, so digits stay raw and num2words is not needed. I ran it on every content level with no crash.
> - NB1: the colon was removed from `midSentence`. NB2: digit gaps get their own message.
> - NB4–NB6: not changed. NB5 (el→en) will be noted in the world's LQG file.
> - Tests: 18 of 18 pass, and the new hit-rule test fails against the inherited rule (I mutation-checked it).
>
> Please review only `git diff 2429809c..bb02c13c` (read-only, no edits, no npm test). Reply DELTA APPROVE or the remaining blockers, in under 250 words.

## 4. Alejandro → Facilitator (delta review, received about 02:26Z)

> **DELTA APPROVE** for `git diff 2429809c..bb02c13c`. No blockers remain. I made no edits and did not run `npm test`.
>
> **The blocker is fixed** (VERIFIED by reading the diff and by loading `seed_hit` from bb02c13c in Python):
> - **Speaker seed:** it now counts as caught only when the line has a measured `margin`, `speaker_ok` is False, and `closest_cast` equals `other_cast`. Both sides use the same `"{engine} {pitch}"` format. A line marked `unresolved: no span` returns False, as do lines too short to embed or not located.
> - **Word seeds:** they count only with an uncleared finding that has no `note`, whose authored tokens contain the seeded word and whose heard tokens contain its replacement. A real delete of «nieta» returns True. An unrelated slip on the same line («vestido» heard as «vestidos») returns False.
> - **Token matching:** the match tokens go through the same `norm()` that `check_clip` uses, so the two sides compare like with like in a full run.
> - **Repeat seed:** the expected tokens fit the insert finding, which is charged to the seeded line when it sits at the line join.
> - **Gap line:** if difflib merges the deletion and the replacement into one finding, the authored side holds both gap words and the heard side holds the replacement, so each seed still matches. The per-word gap-word report stays as a second check.
>
> **Non-blocking notes 1–3 are fixed.** VERIFIED from the diff.
> - **`--plan`:** with `PLAN_ONLY`, digits stay raw and num2words is no longer imported. `PLAN_ONLY` is only set by `--plan`, so a full run is unaffected. The missing game/level now gives a clean usage error.
> - **Colon:** removed from `midSentence`.
> - **Digit gaps:** they now get their own message.
>
> **One minor note, not a blocker (HYPOTHESIS):** the delete seed (`heard: []`) also accepts a wider replacement that covers the deleted word. That still means the authored word was not heard, so it is acceptable.
