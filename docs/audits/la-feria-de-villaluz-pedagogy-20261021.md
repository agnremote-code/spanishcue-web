# LQG audit (N1): LES-001 «La feria de Villaluz» A2

- **Rule:** BOARD-DECISION-001 §3.1 N1 (Learning Quality Gate audit file)
- **Unit:** a new 3D world at one fully authored level (A2), catalog id 241, route `/la-feria-de-villaluz`, game `feria`
- **Decision:** docs/board/decisions/LESSON-DECISION-001-feria-de-villaluz.md v5 (locked)
- **Branch / HEAD audited:** `claude/escucha-3d-feria-a2-20261021` @ `24c65fda`
- **Audit date:** 2026-10-21 · **Auditor:** Alejandro (the independent G4 reviewer; not the author)
- **Content audited:**
  - `app/la-feria-de-villaluz/levels/a2.mjs`
  - `app/escucha-3d/content/feria/a2.json`
  - `app/escucha-3d/content/feria/a2.busca.json`
  - `app/lesson-catalog.ts` row 241

Everything below was verified by the auditor at the HEAD above, unless it is listed under «Not verified».

## G3: neutral-Spanish guard

`npm run test:language` at `24c65fda` gave:

```
# tests 43  # pass 43  # fail 0
Neutral Spanish guard: 0 unresolved findings across 1540 source files.
ENGLISH COPY: UNCHANGED (10882 strings in 126 files; base 43e4b3eb1dc76031481d2406a62b9210f0dd97e2)
```

**Result: PASS.** The game-scoped banned list (AC7: verbena, «me pone», apetece, vaqueros, jersey) is absent from the content. The manual AC7 items raised in G4 («hacer fotos» → «tomar fotos», «enfadarse» → neutral alternatives) were applied in `2ad2d828`.

## G4: substance review (author ≠ reviewer)

- **Author:** Martin (CLRQO).
- **Reviewer:** Alejandro (CEO). This is the rotation in BOARD-DECISION-001 §3.2 G4: Martin-authored work is reviewed by Alejandro.
- **Review file:** [`docs/audits/la-feria-de-villaluz-g4-review-20261021.md`](la-feria-de-villaluz-g4-review-20261021.md).
  - Round 1: full review of the whole A2 level (8 circles, 7 Busca sets, 8 listenings, closing, routes, catalog row).
  - Round 2: delta review of the R1–R6 edits (`2ad2d828`) and the D6 rework of 5 Busca sets (`24c65fda`).
- **Current verdict:** `G4 VERDICT: APPROVE` (final, after «R7 resolved»; earlier rounds: APPROVE WITH REQUIRED EDITS).
  - R1–R6 are verified as applied.
  - R7 (audio regenerated to match the reworked Busca texts) is verified by recomputing the hashes. No required item is open.
- **Machine checks at `24c65fda`:**
  - `node scripts/check-feria.mjs`: 763/763 checks passed.
  - `node --test tests/la-feria-de-villaluz.test.mjs tests/feria-look-contract.test.mjs`: 30/30 pass.
- **Review time:** reported in the review file. Agent session time is given as actual; any human-equivalent figure is an estimate only.

## G6: level honesty

The catalog row (`app/lesson-catalog.ts:133`) has:
- `level:"A2"`, `levels:["A2"]`, `displayLevel:"A2"`;
- `duration:"45–90 min"` (AM-1);
- `news.featured:false`.

Only A2 is authored, so `levels` lists only the passed level (AM-9). The level placement is stated to teachers: `PLACEMENT` and the circle 1 teacher note say «segunda mitad de A2 … semana 18».

Each of the three catalog goals is backed by contrast beats that target it:

| Catalog goal | Backing beats (a2.mjs) |
|---|---|
| «Describir y encontrar a una persona entre la gente con oraciones de relativo y estar + gerundio» | circle 1 informacion (primary `a2.gram.relativo-que`): contrasts `aviso`, `donde`, `el-que` plus 2 Busca find sets · circle 6 escenario (primary `a2.gram.estar-gerundio`): contrasts `que-hace`, `baterista`, `cual-es` plus 2 Busca find sets · transfer set at the closing |
| «Pedir, reclamar y comparar con cortesía en los puestos de una feria» | circle 2 churrería (`a2.gram.condicional-cortesia`: `pedir`, `cambiar`, `probar`) · circle 4 noria (`a2.fun.reclamar`: `error`, `devolver`, `encargado`) · circle 5 artesanía (`a2.fun.comparar-elegir`: `tazas`, `bufanda`, `regalo`) |
| «Contar la noche en orden, con el fondo en imperfecto, y comprender escenas con voces de distintos países» | circle 8 baile (`a2.fun.anecdota`): contrasts `fondo` (imperfecto background) and `secuencia` (indefinido + sequencers), plus the closing narrative and the ticked selfCheck · 8 listenings in `a2.json`, each with speakers of named countries |

The catalog claims nothing that lacks a beat. Circles 3 (favores) and 7 (imperativo + pronombres) are taught but not claimed in the goals. That under-claims, which is allowed.

## Beat labelling (N1)

Every interactive beat in the level is labelled. Tally from `a2.mjs` at `24c65fda`:

| Circle (primary id) | «Contraste lingüístico» (names its exponent) | «Estímulo de conversación» | Exponents claimed / targeted |
|---|---|---|---|
| 1 informacion (`a2.gram.relativo-que`) | 3 | 2 (1 Busca, 1 choice) | 3 / 3 |
| 2 churreria (`a2.gram.condicional-cortesia`) | 3 | 1 | 3 / 3 |
| 3 tombola (`a2.fun.favores`) | 3 | 1 | 3 / 3 |
| 4 noria (`a2.fun.reclamar`) | 3 | 1 | 3 / 3 |
| 5 artesania (`a2.fun.comparar-elegir`) | 3 | 1 | 3 / 3 |
| 6 escenario (`a2.gram.estar-gerundio`) | 3 | 2 (1 Busca, 1 choice) | 3 / 3 |
| 7 fotos (`a2.gram.imperativo-pronombres`) | 3 | 2 (1 Busca, 1 choice) | 3 / 3 |
| 8 baile (`a2.fun.anecdota`) | 3 | 2 (reaction choice; invitation role-play with frames) | 5 / 5 |
| **Total** | **24** | **12** | **26 / 26 (no claimed exponent untargeted)** |

- **Checker evidence:** `scripts/check-feria.mjs` (763/763 at `24c65fda`) enforces all of the following:
  - every contrast is labelled «Contraste lingüístico», names ≥1 exponent and has exactly one correct option, and every wrong option names its `feature` and gives feedback;
  - every stimulus is labelled «Estímulo de conversación»;
  - every Busca beat carries an N1 label;
  - «exponent X is claimed but no beat targets it» fails the check.
- **Wiring:** `tests/la-feria-de-villaluz.test.mjs` runs the checker in `node --test`.
- **Baile's two stimulus-targeted exponents:** baile's `reaccionar` and `aceptar-rechazar` are targeted by stimulus beats that model the forms (the class picks a line and says it). N1 requires a beat that targets X, and these do; they are not scored.
- **G1:** one A2 primary id per circle, matching LESSON-DECISION-001 §4/D7, plus 3–6 exponents. The checker verifies the ids against `app/autoestudio/curriculum/objectives/`.
- **G2 guideline:** ≥1 contrast per scene, met in all 8.

## Other LESSON-DECISION-001 criteria checked in G4

- **AC8 / AM-1:** the routes are stored as data.
  - Conversación (42 min) runs informacion → fotos → escenario → churrería | noria → baile closing.
  - Comprensión auditiva (45 min) runs 5 listenings → baile closing.
  - Both end in the closing. The 45-minute trimming guidance is in the teacher notes (G4 R5).
- **AC9:** the closing order is role-play → narrative from the session timeline (sessionStorage) with a ticked selfCheck → one transfer question.
  - The selfCheck has ≥5 sentences, ≥3 sequencers, ≥4 indefinido forms incl. 2 of ir/ser/tener/estar, and the imperfecto background sentence.
  - It's ticked by hand and never computed from speech.
- **AC10:** the transfer set `transferencia-amparo` uses new people and is not reused from circles 1/6. The checker and G4 Round 2 confirm it.
- **AC2–AC4 / AM-4 / D6:** all 7 Busca sets pass `validateBuscaSet` under the D6 rules (only legible values distinguish), per the checker and `tests/feria-look-contract.test.mjs`.

## Not verified

- **G5(b): one real-device check per new world is outstanding.** Under G5(c), «unverified» blocks the featured flag. The catalog row has `featured:false`, which is consistent with that.
- **T5 fps on a real mid-range Android (the QA-named device) is not measured.** Low-mode draw calls were *counted* under SwiftShader (feria-look-contract.md §7: tablet 67–98, phone 43–74, ≤120 target). A draw-call count is not an fps figure.
- **The Look contract's legibility ratings come only from a SwiftShader (software WebGL) render** in headless Chromium (feria-look-contract.md §5). Martin's D6 visual sign-off on the QA device at DPR 1.25 and ~8–10 m is still required, and colours or brightness on a real panel may differ.
- **Audio state: TTS hashes verified current; no clip listened to.** All 15 feria A2 clips (8 listenings + 7 Busca announcements) were checked on HEAD `3c2a8f21`. Each content hash was recomputed as `scripts/generate-escucha-3d-audio.py` computes it (`sha256([1, '-7%', speakers, lines])[:20]`), and all 15 match `app/escucha-3d/audio-manifest.json`. Every MP3 is present. The 5 reworked announcements were regenerated in `4233b697` (Actions run 39542467174), and the R4 escenario listening was covered by the earlier run. Voices are Edge neural TTS voices (`es-*`, one per character, named in `CAST`). No accent is claimed beyond each voice's locale. **Nobody has listened to the clips.** Pronunciation, pacing and voice fit are unverified (see G4 review, «R7 resolved»).
- **AC12 / AM-8 pilot** (post-launch, not a ship blocker): not run.
- **No browser or visual QA of the content cards was done by the auditor.** G5(a) is Sofia's per-PR smoke run and is not evidenced here.
