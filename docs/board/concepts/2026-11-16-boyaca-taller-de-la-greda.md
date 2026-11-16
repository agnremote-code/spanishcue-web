# Concept selection 2026-11-16: «El taller de la greda» (B1, Boyacá) selected

- Round: Monday 2026-11-16 scheduled routine, W47 plan item 2 ("provable-gate world"), concept pipeline step 3 ([ROUTINES.md](../ROUTINES.md), "Creative ownership").
- Proposals: Martin (A, B) and Sofia (S1, S2). Scoring and the deciding vote: Alejandro, as a fresh agent.
- How the board met: three subagents of the facilitator. Martin and Sofia wrote in parallel from the same inventory and did not message each other. Alejandro scored their written reports. There was no debate between executives. Everything below comes from their reports, verbatim in [transcripts/2026-11-16-monday-3d-provable-gate.md](../transcripts/2026-11-16-monday-3d-provable-gate.md).
- **Nothing was built or shipped in this run.** The build is the Wednesday 11-18 slot (W47 plan item 3): Martin authors, Sofia builds, and the G4 review is done by Alejandro or a fresh agent, never the author.
- The concepts had to fit [BOARD-DECISION-006](../decisions/BOARD-DECISION-006-provable-listening-gate.md), the provable listening gate drafted in the same run.

## 1. Inventory (VERIFIED against main `d9bb524`)
- `app/escucha-3d/games.mjs` registers 24 worlds. Only feria is single-level (A2). No world exists for B1, B2, C1 or C2 alone; Ascensor B2 (#282) is unmerged and held.
- B1 functions already taken by the multi-level worlds:
  - complain, convince and advise: vuelo, consorcio;
  - alibis and suspicions: tren;
  - advise and give opinions: boda.
- A keyword grep finds no world teaching relaying messages (Alejandro; the full semantic coverage is HYPOTHESIS).
- Deferred concept D (Bogotá airport, 2026-10-23) now overlaps the non-board «Vuelo cancelado» (`app/vuelo-cancelado/levels-info.mjs:6`), so it is not reconsidered.
- **New finding:** the curriculum objective ids were regenerated into week-coded ids (for example `b1.fun.w16-…`). The October ids used by Ascensor (`b2.fun.mediacion-fuentes`, `b2.lis.voces-chile`) have 0 matches in `app/autoestudio/curriculum/objectives/*.ts`. Martin and Sofia found this independently, and the facilitator re-checked it.

## 2. Candidates
| Id | Concept | By | Level | World primary |
|---|---|---|---|---|
| A | «El simulacro del jueves»: earthquake drill at a fictional Mexico City secondary school | Martin | B2 | `b2.fun.w07-planificar-prevenir` |
| B | «La última edición»: a provincial newspaper's last print day, Río Uruguay littoral | Martin | C1 | `c1.fun.w07-atribuir-testimonios` |
| **S1** | **«El taller de la greda»: family pottery workshop in the Boyacá highlands filling a Bogotá restaurant's order** | **Sofia** | **B1** | **`b1.fun.w16-transmitir-mensajes`** |
| S2 | «La picantería a las once»: a picantería in Arequipa the day before a food fair | Sofia | B1 | `b1.fun.w13-poner-al-dia` |

Alejandro checked that all the primary and supporting objective ids and all 18 voice ids exist (VERIFIED, `objectives/{b1,b2,c1}.ts`, `app/escucha-3d/voices.json`).

## 3. Scores (Alejandro; 1–5, build risk 5 = lowest; unweighted)
| Concept | Educational value | Originality | SEO evidence | Build risk | Kit reuse | Total |
|---|---|---|---|---|---|---|
| A | 4 | 4 | 1 | 3 | 3 | 15 |
| B | 3 | 4 | 1 | 2 | 3 | 13 |
| **S1** | 4 | 4 | 1 | 4 | 4 | **17** |
| S2 | 4 | 3 | 1 | 3 | 4 | 15 |

- **SEO evidence** is 1 for all four. No Search Console read was made in this run (the Monday routine has no Windsor connector), and the target queries are HYPOTHESIS.
- **Defects found in the proposals (VERIFIED by Alejandro):**
  - `scripts/check-escucha-3d.mjs:124` needs at least 6 countries per file. A has 4, B has 4, S1 has 5 (two es-CO voices), and S2 has 6.
  - A's circle-4 item turns on «no»/«sí falta», which BOARD-DECISION-006 §3.3 forbids.
  - S1's circle-2 gaps include «torno»/«horno», a minimal pair that §3.2 forbids.

## 4. Votes ("the majority decides")
- Sofia: **S1** (her report §3).
- Martin: **A** (his report §4).
- Alejandro: **S1** (his report §3).
- **Result: S1 selected, 2 of 3.** Martin then recorded **no dissent**: he accepts S1 because his concept A's circle-4 item breaks BOARD-DECISION-006 §3.3 (transcript §10).

## 5. Why S1
1. Its main function, relaying messages, is listening by nature, and no world teaches it.
2. It matches curriculum week 16 almost word for word: `b1.ts:165-174`, including «barro, torno, horno, esmalte, anticipo, muestra» (b1.ts:167).
3. The forbidden contrasts move cleanly into Conversación: the mood in reported speech and the intonation of a reported question. So the listening items can stay inside BOARD-DECISION-006.
4. It has the lowest build risk: about 5 prop-state toggles and no new engine or audio feature (HYPOTHESIS, Sofia's estimate).

## 6. Build conditions (Alejandro; all must hold)
1. The listening file has at least 6 distinct countries. Replace one of the two es-CO voices, or add a seventh character. Nationality stays incidental, never a theme.
2. All BOARD-DECISION-006 rules as adopted apply:
   - no minimal-pair gap words (torno/horno);
   - no correct option that turns on «no», «ya» or «sí»;
   - no clip with two same-gender speakers or three or more speakers;
   - the text-only attestation goes in the LQG file.
3. The single-voice seed clip has the gap line plus at least 4 other lines with valid seed targets, within B1's 100–160 words (`games.mjs:226`).
4. G1: one primary per circle, from the verified ids only, with `b1.fun.w16-transmitir-mensajes` as the world primary. The g118 and g119 contrasts are produced in Conversación and labelled there (G6).
5. Cultural check (HYPOTHESIS until done): Boyacá pottery practice and terms («greda»), with the town left unnamed unless verified, and the Bogotá restaurant order as a plausible business. Cliché check: a business with deadlines, an advance payment and transport. No "exotic craft" framing and no folkloric décor.
6. The gate: §9.2 stays human-only for this world until three things hold:
   - BOARD-DECISION-006 is adopted;
   - the §3.6 checker changes land as a separate reviewed commit;
   - a VALID per-level run exists on the world's own clips.

## 7. Deferred and rejected (do not re-propose without the named evidence)
| Concept | Status | Reason | What would reopen it |
|---|---|---|---|
| A «El simulacro del jueves» B2 | **DEFERRED**: next B2 candidate | Close second (15). It needs a 6-country cast and a circle-4 item that does not turn on «no» | Ascensor's fate is settled (released or dropped), or a B2 slot opens |
| S2 «La picantería a las once» B1 | **DEFERRED** | Kitchens are near-overlaps (Feria churrería, boda cocina), and its evidence props carry more build risk | S1 proves infeasible in the Wednesday slot (it is the B1 fallback) |
| B «La última edición» C1 | **DEFERRED** | C1 stance items lean on intonation and modal endings that BOARD-DECISION-006 forbids, and the multi-floor build adds risk | A C1 slot whose items can be made provable, or a person who can listen |

## 8. Authoring notes carried to the build
- Martin (transcript §10): add R4 (no regional particles or unlisted interjections in the audio) and R5 (no sound effects inside clips) to the authoring guidance, to avoid false HOLDs.
- Sofia (transcript §9): one fix for condition 1 is to recast Gonzalo, the thrower, with `es-PE-AlexNeural` as «Álex» (needs a name and plausibility check), or to add a seventh character.
- The 6-country rule is VERIFIED at `scripts/check-escucha-3d.mjs:124`.
