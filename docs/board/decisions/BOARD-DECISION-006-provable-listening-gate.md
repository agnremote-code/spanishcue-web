# BOARD-DECISION-006: a provable listening gate for new worlds (scoped amendment to BOARD-DECISION-003 §3.1)

- Date: 2026-11-16 (Monday 3D routine, W47 plan item 2, [assessments/2026-W46.md](../assessments/2026-W46.md) §6)
- Drafted by: Sofia (CPIO)
- Status: **DRAFT v1**. Not adopted. Nothing in this file changes any gate until §Votes records adoption.
- Labels: every claim is VERIFIED (with its source) or HYPOTHESIS.

## 1. Why
- BOARD-DECISION-003 §3.1 makes the speech-to-text check valid only if it catches every seeded defect. The Ascensor runs 41377386724 and 41378668632 caught all of them except one: the gap word «caro» seeded as «caros» was reported as heard. So the check is NOT VALID, and §9.2 stays human-only (VERIFIED, [BOARD-DECISION-003](BOARD-DECISION-003.md) §5).
- What it did catch: a two-word repeat at a line join, a deleted plain word, an article -s pair (la→las), a replaced first word, a deleted gap word, and speaker swaps (margins about −0.2 same-gender, −0.34 cross-gender) (VERIFIED, same §5).
- The failure is narrow: a single-phoneme difference on a gap word. Most listening items do not depend on that. This amendment lets a new world use the check for exactly the item types it has been shown to catch, and for nothing else.

## 2. Facts this draft rests on
1. Since 2026-11-13, every woman is voiced by `en-US-EmmaMultilingualNeural` and every man by `de-DE-FlorianMultilingualNeural`. Same-gender characters in one clip differ only by a pitch shift: women 0/±8/±14/±20 Hz, men 0/±5/±9/±13 Hz (VERIFIED, `scripts/generate-escucha-3d-audio.py:24-53`, AGENTS.md "New Conversation and Listening classes are 3D worlds").
2. The speaker margins above were measured with the earlier distinct Chilean voices. They say nothing about two same-gender characters who now share one base voice. **Same-gender speaker discrimination is UNPROVEN.** Cross-gender discrimination with Emma vs Florian is also unmeasured (HYPOTHESIS that it holds, since the base voices differ).
3. The checker builds its seeded clips and speaker references with the content's identity voice (`es-CL-…`), not with Emma/Florian plus the per-clip pitch casting. So today it no longer reproduces the canonical assembly (VERIFIED, `scripts/check-escucha-3d-stt.py` `render_like_generator()` and `references()` on #282's branch, compared with `casting()` and `clip()` in the generator).
4. If a world has no single-voice clip with gaps, `seeded_items()` silently builds no word seeds. With no seeds at all, `all_found` is `all([])`, which is True (VERIFIED, same script, `seeded_items()` `if single:` and `main()`).
5. The "deleted plain word" seed only targets words of 5 or more letters. Deleting a short word such as «no» or «ya» has never been seeded (VERIFIED, `plain()` regex `{5,}`).
6. The listening engine has three item types: `choice` (4 multiple-choice questions), `open` (spoken answers, not scored against the audio) and `gaps` (4 bracketed words) (VERIFIED, `app/escucha-3d/content/README.md`).
7. The checker and `.github/workflows/escucha-3d-stt.yml` exist only on #282's branch, not on `main` (VERIFIED, `git ls-tree`, this run).
8. Side check, time-boxed: the STT workflow installs torch from download.pytorch.org, and faster-whisper pulls models from Hugging Face. Its runs produced transcripts, so Hugging Face is reachable from Actions (VERIFIED by runs 41377386724 and 41378668632). From the agent sandbox, Hugging Face, dl.fbaipublicfiles.com and download.pytorch.org are blocked, and PyPI is reachable (VERIFIED by the facilitator this run). No forced aligner was run. Whether a forced aligner (for example a CTC model hosted on Hugging Face) works from Actions is a **HYPOTHESIS** until a run is done.

## 3. The amendment
Scope: a NEW board world authored after adoption. It does not apply retroactively and does not reopen any shipped world.

**3.1 When the automatic check may close §9.2.** Only when all of the following hold:
- (a) every listening item of every level depends only on the allowed types in §3.2;
- (b) the seeded test in §3.4 is run on that world's own clips, in the same run and on the same code SHA as the real clips, and is VALID;
- (c) every real clip PASSES under BOARD-DECISION-003 §3.2–3.5, which this amendment leaves unchanged.

If any of these fails, §9.2 stays human-only for that world, exactly as now.

**3.2 Allowed item types.**
- `choice` questions whose correct option differs from both distractors by at least one whole content word that is spoken in the audio. Sequence questions («¿Qué hace después de…?») and inference questions are allowed when they rest on such words.
- `gaps` where each bracketed word is a whole content word, is not a proper name, and has no single-phoneme minimal pair that would fit the same sentence. Lint (machine-checkable): no gap word ends in -s, and no gap word is capitalised mid-sentence. This also excludes invariable words such as «jueves» or «más». The cost is accepted, because the rule is simple and provable.
- Who-said-what questions, only when the two candidate speakers in that clip differ in gender, and the options name roles («la clienta», «el tornero»), not names.
- `open` questions, unrestricted, since they are not scored against the audio.

**3.3 Forbidden item types.**
- A gap or correct option that hinges only on final -s, number, gender, person or mood inflection (caro/caros, hecho/hecha, habla/hable, tiene/tienes), or on any other single-phoneme pair.
- A correct option that hinges only on a short function word (for example «no», «ya» or «sí»), because that deletion has never been seeded (§2.5).
- A proper name as a gap word or as a correct option. The real Ascensor clip heard «Yaneth» as «Janet» (VERIFIED, BOARD-DECISION-003 §5).
- Same-gender speaker attribution. Each clip has either one speaker or two speakers of different gender (§2.1–2.2).
- Items that depend on intonation, stress or irony. BOARD-DECISION-003 §2 does not cover these.

**3.4 The seed set under this amendment.** This is BOARD-DECISION-003 §3.1 minus the seed it could not catch:
- in a single-voice clip with gaps: one gap word deleted, and a second gap word replaced by a different whole word that is not a minimal pair (this replaces the -s swap). On that clip's other lines: a two-word repeat at the join, a deleted plain word, an article -s pair, and a replaced first word;
- in a two-voice clip: one line read by the other speaker, who is always of the other gender under §3.3;
- every one of these seeds must be present, or the run is NOT VALID. A world must therefore include at least one single-voice clip with 2 or more gap words and at least one two-voice clip (closes §2.4).

**3.5 Not released by this amendment.**
- El ascensor del cerro (#282) stays held. It needs a VALID v3 run, and the cafe clip must pass. If its clips are regenerated under the 2026-11-13 voices, §2.3 applies to it too (HYPOTHESIS whether they have been).
- BOARD-DECISION-003 §2's partial and uncovered rows (stress shifts mapped back to the right word, artefacts inside a TTS line, a wrong voice declared for a character) stay written as **disclosed open items** in every LQG file that relies on the check, never as passes.
- A person's defect report always overrides a PASS (BOARD-DECISION-003 §4). No other gate in BOARD-DECISION-001 §3 is lowered.

**3.6 Code changes come first.** Any change to the checker or the workflow lands as a separate reviewed commit before the run that uses it, never fitted to a result (BOARD-DECISION-003 §3.7). At minimum, before a first run under this amendment:
- (i) build seeds and references with the generator's Emma/Florian engines and per-clip pitch casting (§2.3);
- (ii) apply the §3.4 seed set, and fail the run when a required seed is missing;
- (iii) the job exits green only when `tool_valid is True` (review note (b) of BOARD-DECISION-003 §6);
- (iv) add the §3.2 gap lint to `scripts/check-escucha-3d.mjs`, or a sibling script;
- (v) bring the checker and workflow to `main` or to the world's branch.

Whether a forced aligner should be added (v3) is a separate decision, made after a time-boxed Actions run (§2.8).

## Review

## Votes
