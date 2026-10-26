# LQG audit (N1): «El ascensor del cerro» B2

- **Rule:** BOARD-DECISION-001 §3.1 N1 (Learning Quality Gate audit file).
- **Unit:** a new 3D world with one fully authored level (B2). Catalog id 243, route `/el-ascensor-del-cerro`, game `ascensor`.
- **Concept:** `docs/board/concepts/2026-10-23-valparaiso-ascensor-del-cerro.md`. §8 is the spec; §9 lists the open checks.
- **Branch / HEAD audited:** `claude/escucha-3d-ascensor-cerro-b2-20261026` @ `ea1aa203` (draft PR #282).
- **Audit date:** 2026-10-26. **Auditor:** Alejandro, the independent G4 reviewer; the author is Martin.
- **Content audited:**
  - `app/el-ascensor-del-cerro/levels/b2.mjs`
  - `app/escucha-3d/content/ascensor/b2.json`
  - `app/lesson-catalog.ts` row 243
- **Content state:** both content files are unchanged since `d97a3187`, the state that passed the G4 delta check.

Everything below was verified by the auditor at the HEAD above, unless it is marked as cited or listed under «Not verified».

## G3: neutral-Spanish guard

`npm run test:language` at `ea1aa203` gave:

```
# pass 43  # fail 0
Neutral Spanish guard: 0 unresolved findings across 1760 source files.
ENGLISH COPY: UNCHANGED (10882 strings in 126 files; base 43e4b3eb1dc76031481d2406a62b9210f0dd97e2)
```

**Result: PASS.** Chilean markers («al tiro», «¿cachai?») appear only as labelled exemplars, in the `cachai` contrast, the word lists and the listening glossaries. The narration and instructions are neutral, with tú by default and usted with don Lorenzo.

## G4: substance review (author ≠ reviewer)

- **Author:** Martin (CLRQO). **Reviewer:** Alejandro (CEO). This follows the BOARD-DECISION-001 §3.2 rotation: Alejandro reviews Martin's work.
- **Review file:** [`docs/audits/el-ascensor-del-cerro-g4-review-20261026.md`](el-ascensor-del-cerro-g4-review-20261026.md).
  - **Round 1** was a full review of the whole B2 level: 6 circles, 21 contrasts, 6 stimuli, 6 listenings, the closing, the routes and Martin's deviations 1–7. Verdict: APPROVE WITH REQUIRED CHANGES. Six items were required:
    - R1: «se volvió un hostal» could be defended by a native speaker;
    - R2: the ponerse rule contradicted line 71;
    - R3: the aunque-mood criterion was wrong;
    - R4: the synthesis attributed a position the foundation never took;
    - R5: the estacion timeline misattributed what was said;
    - R6: the closing timing missed a beat.
  - **Delta check, 2026-10-26:** R1–R6 were all closed (`e59feb9f`→`d97a3187`). The `lines` of `b2.json` were unchanged, compared by script. Recommendations N3, N4, N7 and N8 were also applied.
- **Current verdict:** `G4 VERDICT (final): APPROVE`. No required G4 item is open.
- **Deviations accepted:** 1, 2, 4 (single-mode routes, which I reconfirm for the board), 5, 6 and 7.
- **Machine checks at `ea1aa203`:**
  - `node scripts/check-ascensor.mjs`: 615/615.
  - `node scripts/check-escucha-3d.mjs ascensor B2`: OK.

## G6: level honesty

The catalog row (`app/lesson-catalog.ts:135`) has:
- `level:"B2"`, `levels:["B2"]` and `displayLevel:"B2"`;
- `duration:"45–90 min"`;
- `news.featured:false`.

This is consistent with:
- `LEVELS` (`app/el-ascensor-del-cerro/levels.mjs`), which lists B2 only;
- `GAMES.ascensor.levels`, which is `['B2']`;
- the release-gate subtest in `tests/el-ascensor-del-cerro.test.mjs`.

The placement is stated to teachers in `PLACEMENT`: «segunda mitad de B2, a partir de la semana 13».

Each catalog goal is backed by beats that target it:

| Catalog goal | Backing beats (b2.mjs) |
|---|---|
| «Mediar entre posturas distintas: resumir lo que dijo cada parte, atribuirlo y conservar sus reservas sin inventar acuerdos» | asamblea (primary `b2.fun.mediacion-fuentes`): contrasts `sintesis`, `reserva`, `atribuir`, `adaptar`, `acuerdo`, then the role-play stimulus, the group acta and the ticked self-check · café `locutor` (choice of reporting verb, backshift) |
| «Conceder y objetar, y negociar condiciones con aunque, por mucho que, siempre que, a no ser que y a cambio de que» | escalera (`b2.fun.conceder-objetar`): `dato` (aunque + indicativo), `posibilidad` (aunque + subjuntivo), `cables` (por mucho que) · mirador (`b2.fun.negociar-condiciones`): `condicion` (siempre que), `excepcion` (a no ser que), `intercambio` (a cambio de que) · café `enfermera` (siempre que) |
| «Contar cómo ha cambiado un barrio con verbos de cambio y comprender un programa de radio, un informe técnico y una propuesta con letra pequeña» | estacion (`b2.fun.describir-transformacion`): `anonimo`, `hostal`, `jefe` (volverse, convertirse en, quedarse, llegar a ser, ponerse) · the listenings `cafe` (radio programme), `taller` (technical report) and `mirador` (fine print), each with 4 questions including inference items, gaps and open questions |

The `speaking` lines (volverse / convertirse en / llegar a ser; conceder con aunque; resumir sin inventar) are covered by the same beats. **Nothing is claimed without a beat.**

## Beat labelling (N1)

Every interactive beat is labelled. The tally below was computed from `b2.mjs` at `ea1aa203`:

| Circle (primary id) | «Contraste lingüístico» (each names its exponent) | «Estímulo de conversación» | Exponents claimed / targeted |
|---|---|---|---|
| 1 estacion (`b2.fun.describir-transformacion`) | 3 | 1 | 6 / 6 |
| 2 escalera (`b2.fun.conceder-objetar`) | 4 | 1 | 5 / 5 |
| 3 cafe (`b2.lis.debate-radio`) | 3 | 1 | 4 / 4 |
| 4 taller (`b2.voc.ciudad-sostenible`) | 3 | 1 | 5 / 5 |
| 5 mirador (`b2.fun.negociar-condiciones`) | 3 | 1 | 5 / 5 |
| 6 asamblea (`b2.fun.mediacion-fuentes`, closing) | 5 | 1 (role-play with frames) | 5 / 5 |
| **Total** | **21** | **6** | **30 / 30. No claimed exponent is left untargeted** |

- **What the checker enforces:** `scripts/check-ascensor.mjs` (615/615) checks that:
  - every contrast is labelled, names at least one exponent, and has exactly one correct option;
  - every wrong option names its `feature` and its feedback starts with it;
  - every stimulus is labelled;
  - no exponent is claimed without a targeting beat.
- **G1:** each circle has one B2 primary id, verified against `objectives/b2.ts`, plus 4–6 exponents.
- **G2 guideline:** at least one contrast per scene; every circle has 3–5.
- **How the checker runs:** `tests/el-ascensor-del-cerro.test.mjs` runs it under `node --test`.

## G5(a): SwiftShader smoke at 390 px (cited from Sofia's evidence; not re-run by the auditor)

Source: `docs/board/evidence/ascensor-2026-10-26/BUILD.md` («Verified» section). The run was `node scripts/qa-ascensor-browser.mjs --smoke --calls` in the agent's Linux sandbox, not CI.

- **Smoke:** 65/65, with 0 page or console errors and no 404s.
- **Canvas:** non-blank at 1280 and 390 px. The HUD never covers a control.
- **Teacher list:** reaches all 6 circles in both modes.
- **Rides:** funicular up, funicular down with skip, both stair flights, skip with E, starting by walking into the marker, and the reduced-motion cut.
- **Fallbacks:** the no-WebGL, «Plano sin movimiento» and reduced-motion fallbacks list the circles in height order.
- **Cards at 390 px:** every card was driven to its last beat. Nothing was clipped and there was no horizontal overflow. The longest card is asamblea, at 8390 px in a scroll container that reaches its end. All 6 listening cards pass. The shared `ol.e3-steps` strip scrolls horizontally by design.
- **Draw calls, low path:** tablet ≤ 103 and phone ≤ 74, against the 120 budget.
- **Screenshots in the same folder:**
  - `3d-390-title.png`, `3d-390-world.png`, `3d-1280-world.png`;
  - `ride-funicular-mid.png`, `ride-stairs-mid.png`;
  - `arrival-medio.png`, `arrival-alto.png`;
  - `fallback-no-webgl.png`, `card-390-asamblea-end.png`.
  - The auditor viewed `ride-funicular-mid.png` and `fallback-no-webgl.png`. The latter shows the teacher list with routes, PLACEMENT and «o 3. El café».

**Result: G5(a) evidenced (cited).** The code review (`el-ascensor-del-cerro-code-review-20261026.md`) raised two blocking items, B1 (GPU cleanup on unmount) and B2 (the ride copy claimed don Lorenzo rides with you). Both were closed in `0774a67d`; see its delta check, final verdict APPROVE. After those fixes Sofia re-ran the smoke (65/65) and the draw calls (max 103 mid-ride); that is cited from the BUILD.md addendum, not re-run by the auditor. The auditor viewed `ride-lorenzo-in-cabin.png`.

## G5(b): real-device check

**Not done.** No real-device run, and no fps or ride-time measurement on the QA device. Under G5(c), «unverified» blocks the featured flag. The catalog row has `featured:false`, which is consistent with that, and the release-gate test asserts it.

## Audio

- **Generation:** 6 clips (`public/audio/escucha-3d/ascensor-b2-{estacion,escalera,cafe,taller,mirador,asamblea}.mp3`), generated by the Escucha 3D audio run 40259015039 (commit `9e0fd7b0`).
  - All 6 are in `app/escucha-3d/audio-manifest.json`.
  - I recomputed each content hash the way `scripts/generate-escucha-3d-audio.py:104` does it (`sha256([1, '+0%', speakers, lines])[:20]`). **All 6 match the manifest.**
  - The G4 edits came after generation but changed no `lines`, so the audio matches the current transcripts.
- **Technical checks (the facilitator's, ffprobe/ffmpeg):**
  - durations of 61–91 s (the manifest says 61.32–90.58 s);
  - 117–159 wpm;
  - no silence longer than 2 s;
  - integrated loudness between −16.9 and −17.7 LUFS.
- **Automatic speech-to-text check:** attempted, but it could not run, because the model hosts return 403 through the proxy.
- **Accent:** the voices are Edge neural TTS, one locale voice per character. **No Chilean accent is claimed** anywhere in the page, catalogue or teacher notes. The teacher is told to bring a real sample for `b2.lis.voces-chile`.
- **Listening by a person:** **nobody has listened to any clip.**

### Concept §9.2 listening requirement: NOT MET. In my judgement as G4 reviewer, this BLOCKS release.

§9.2 says: «Someone listens to every clip before release. That step was missed for Feria.» It is not met. My judgement is that it blocks release (merge to `main`, which under the owner's authorization leads straight to the production deploy). It is **not** something to carry as a disclosed open item with `featured:false`. My reasons:

1. **The board wrote this rule because the open-item route failed once already.** Feria shipped with «nobody has listened» disclosed in its LQG file. §9.2 was written afterwards precisely so that would not happen again. If we carry it again as a disclosure, the rule never had any force.
2. **`featured:false` does not protect the people who would hear a bad clip.** It only keeps the world out of the news highlight. Every PRO teacher can still open the world from the catalog and play the clips to a live class. The gate is supposed to protect those paying users, not our featured slot.
3. **The machine checks cannot catch the failures that matter here.** Duration, wpm, silence and loudness cannot detect:
   - a mispronounced or swallowed word in a gap item. B2 gaps are word-for-word, so one bad word breaks the task;
   - a wrong stress pattern or name reading («Yaneth», «Arismendi»);
   - a speaker attributed to the wrong voice;
   - TTS artefacts at line joins.

   The one automatic check that could have helped, speech-to-text, did not run.
4. **Meeting the rule costs almost nothing.** Six clips total about 7.7 minutes. One person listening once with the transcript open closes it.
5. **Agents cannot do it.** No agent in this pipeline can hear audio, so this is an access limitation in the CLAUDE.md sense. It needs the owner, or a person the owner designates.

**To close §9.2:** one person listens to all 6 clips against the transcripts in `b2.json` and records the result in this file, either «listened, no defects» or a list of defects. That record needs: the listener's name, the date, and for each clip OK/defect with a timestamp. If a defect is found, the affected listening is fixed and regenerated through the canonical pipeline, and its hash is re-verified. Until then, the PR should not be merged.

## Not verified

- **G5(b):** see above.
- **Listening by a person:** see above. This is the release blocker.
- **Touch gestures on a real device:** not driven (BUILD.md).
- **Cultural look-pass on the rendered world:** BUILD.md calls the look Sofia's own judgement, and code review NB5 notes the multi-coloured façades against §9.1. Martin should do this pass together with G5(b).
- **Teacher-page SEO evidence (§9.3):** Search Console is still unreadable, so the SEO target remains a HYPOTHESIS.
- **No pilot or classroom use** has been observed.

## LQG result

| Gate | Result |
|---|---|
| G3 | PASS |
| G4 | PASS (final APPROVE) |
| G6 | PASS (`levels:["B2"]`, `featured:false`, goals backed by beats) |
| N1 beat labelling | PASS (21 contrasts, 6 stimuli, 30/30 exponents targeted) |
| G5(a) | Evidenced (cited from BUILD.md) |
| G5(b) | NOT DONE: blocks `featured` |
| §9.2 listened audio | **NOT MET: blocks release** |
| Code review (separate file) | APPROVE (final, after the delta check of `0774a67d`; B1 and B2 closed) |

**LQG VERDICT: NOT YET RELEASABLE.** The pedagogy gates and the code review pass. Release still requires:
- (1) §9.2: a person listens to the 6 clips and records the result here. Unchanged: there is no new evidence, and nobody has listened.
- (2) The world stays `featured:false` until G5(b) passes.
