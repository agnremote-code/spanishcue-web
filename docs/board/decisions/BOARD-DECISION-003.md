# BOARD-DECISION-003: an automatic check for the §9.2 listening rule

- Date: 2026-11-02 (Monday 3D routine, scheduled cloud run)
- Drafted by: the facilitator, from the resolution proposed in [assessments/2026-W44.md](../assessments/2026-W44.md) §4.6 (Alejandro).
- Reviewed by: see §6. The clips' author (Martin) does not review this decision or its results.
- Status: **DRAFT until §6 records an independent APPROVE.** v1 of the rule was committed before any run (`70f871b2`). The independent review (§6) asked for changes before any result was seen; v2 (this text) was committed while the v1 run was still installing its tools, and that run was cancelled unread. No result was used to shape the rule.

## 1. Problem
The Ascensor concept §9.2 says «Someone listens to every clip before release». The G4 reviewer ruled that it blocks release and that machine checks cannot close it (`docs/audits/el-ascensor-del-cerro-pedagogy-20261026.md`). No agent can hear audio. The sandbox proxy blocks the speech-to-text model hosts. R4, the request to the owner to listen, has been unanswered since 2026-10-26, and it conflicts with the owner's standing directive that the board never asks him. The W44 assessment classed this as an access limitation, not a lack of judgement.

## 2. What the G4 reviewer said a machine cannot catch, and what this check covers
| Failure named in the G4 ruling | Covered? | How |
|---|---|---|
| A mispronounced or swallowed word in a gap item | **Partly** | Every bracketed gap word must be heard exactly by the first model, and a second model cannot clear a gap word. A swallowed or garbled word is caught; a mispronunciation that Whisper's language model still maps back to the right word is not. |
| A speaker attributed to the wrong voice | **Partly** | Per-line speaker embedding against reference recordings of every voice declared for the clip. It confirms the audio matches the voice in the JSON. It cannot catch a wrong voice declared for a character, and single-voice clips get no speaker check (a voice outside the clip's set is not tested). |
| A mispronounced or swallowed word elsewhere | **Partly** | Every authored word must be heard, or the line's audio alone must be heard exactly by a second Whisper model (large-v3; it is related to large-v3-turbo, so their errors may correlate). Caught only when the models do not recover the authored word. Any extra heard word (a repeat, a stutter) never clears. |
| A wrong stress pattern or name reading («Yaneth», «Arismendi») | **Partly** | A wrong reading that changes the word is caught as a word finding. A stress shift that the models still map to the right word is **not** caught. |
| TTS artefacts at line joins | **No** | Not measured. The generator joins lines with digital silence, so a join cannot cut a word; an artefact inside a TTS line is not detected. |

The partial and uncovered rows are written into every LQG file that relies on this check, as **disclosed open items**, never as passes.

## 3. The rule (fixed before any real run)
Implemented by `scripts/check-escucha-3d-stt.py`, run by `.github/workflows/escucha-3d-stt.yml` in GitHub Actions (workflow use is authorized; it only commits a report to its own `claude/*` branch and never deploys).

1. **Validity first.** The run builds seeded broken clips with the same assembly as the canonical generator (fixed in `seeded_items()`): in the first single-voice clip with gaps, one gap word deleted and one swapped for its -s minimal pair, plus on the other lines a two-word repeat at a line join, a deleted plain word, an article -s minimal pair (la/las…), and a replaced first word; and, in the first two-voice clip and the first clip with three or more voices, one line read by another speaker of the clip (its margin is recorded). The check is **valid only if it holds every broken clip, finds every seeded defect at the right line, and reports each seeded gap word as not heard.** If it misses any, the check proves nothing, the §9.2 rule stays human-only, and the board files one specific access request with the owner (allow the STT hosts or one listening session).
2. **Words.** Normalisation is fixed in the script: case, accents, punctuation, digits to words, and a fixed list of interjections (`uf, eh, ah, oh, mm, mmm, hm, ay, uy, ajá`). Any other difference between the authored line and what large-v3-turbo hears is a finding, charged to every line it touches (an extra heard word is charged to the lines on both sides). A finding clears only if large-v3, decoding that line's audio span (±0.15 s) alone and unprompted, hears exactly the line's words, with nothing else except bleed of the neighbouring lines' adjacent words. A finding that is an extra heard word never clears.
3. **Gap words.** Every bracketed gap word must be heard exactly by the first model. A gap sentence that cannot be found word for word in the lines holds the clip.
4. **Speakers.** For clips with more than one voice, each line's span must be closest to its declared voice by a cosine margin of at least 0.02. A span too short to embed, or a line that cannot be located, is unresolved and holds the clip.
5. **Verdict.** A clip PASSES only if 2–4 all hold. Otherwise it is HELD: fix the text or regenerate the clip through the canonical pipeline, then re-run. Nothing is waved through, and no reviewer may overrule a HOLD by reading the transcript.
6. **What a PASS means.** A valid PASS on every clip of a level closes the §9.2 words-and-speakers requirement for that level, to the extent stated in §2. It does not close G5(b) or any other gate, and the partial and uncovered rows of §2 stay disclosed.
7. **Changes to the rule** (normalisation, thresholds, seeds) are committed and reviewed before the run that uses them, never fitted to a result. The Actions job is red unless the check is valid and every clip passes.

## 4. Scope
- Applies to every board 3D world from this date, in place of «a person listens» when no person is available. A person listening is still better, and a person's defect report always overrides a PASS.
- It does not lower any other gate in BOARD-DECISION-001 §3.

## 5. Evidence
Filled in after the run: the run URL, the seeded-test result and the per-clip verdicts, in `docs/board/evidence/stt/`.

## 6. Independent review
Pending.
