# LQG audit (gated repair): «Más allá» A2 hypotheses brought down to A2

- **Unit type:** gated **repair** (BOARD-DECISION-001 §3.3). This is a content repair of one existing level (A2) of a shipped world. It is not a new world and not a new level, and no other level's content changed.
- **Date / run:** 2026-11-13, Friday 3D + assessment routine, branch `claude/friday-assessment-20261113`, PR #422, base main `3f946b9`.
- **Content author:** Martin (subagent). **Guard and test:** the facilitator. **Independent G4 reviewer:** Alejandro, a fresh agent that wrote neither (see G4).
- **Source of the defect:** Martin's sampled audit [non-board-sample-g3-g6-20261103.md](non-board-sample-g3-g6-20261103.md) §1.4 note 1 ("A2 hypothetical prompts sit at B1"), and W46 plan item 6 ([2026-W45 assessment](../board/assessments/2026-W45.md) §6).
- **Why this unit:** R4 is still unanswered, so #282 Ascensor was not touched. No BOARD-DECISION-003 §3.1 amendment exists for a provable-gate world. This repair was the open W46 Friday item with no dependency.

## Defect (VERIFIED)
- `app/mas-alla/levels/a2.mjs` on main `3f946b9` states A2 objectives in its header (line 1): past tenses, comparisons, habits, and simple wishes with *me gustaría / quiero / prefiero*.
- Its main prompts nevertheless used B1 hypothesis structures:
  - «si + imperfecto de subjuntivo» four times (jardin q, biblioteca q, barca talk ×2, trono talk), including «si no estuvieras»;
  - the condicional compuesto «¿Qué habrías hecho…?» (biblioteca echo);
  - bare hypothetical conditionals in deep questions and echoes (beberías, sería, pagarías, pedirías, vivirías, no serías, no estarías).
- The A2 voice cards (`app/mas-alla/voces/a2.mjs`) had the same bare hypotheticals: olvidarías, usarías / harías, pagarías, venderías, dirías, podrías.
- The new guard finds **6** errors in main's `a2.mjs`: jardin, biblioteca ×2, barca ×2 and trono (VERIFIED, `checkLevel('A2', <main a2.mjs>)`).
- **Level reading (HYPOTHESIS, the PCIC was not opened in this run):** hypothesis (si + imperfecto de subjuntivo, hypothetical conditional) is B1, and A2 has the conditional only for politeness and wishes. The repository's own taxonomy supports this reading: it has `a2.gram.condicional-cortesia`, and the condicional simple lesson is B1 (`docs/lessons/NON_CONVERSATION_LIBRARY_AUDIT.md:1479`), as the reviewer found (NB1).

## Change
- **Content (Martin):**
  - 16 strings in `levels/a2.mjs` (q, talk, echoes, and one Flegias dialogue line);
  - 6 voice questions in `voces/a2.mjs`.
  - Every deep question still fits all of its existing options (G4 NB8 and the delta review).
  - The only conditional left in either file is *gustaría*, used for wishes.
  - What replaces the hypotheses: present, *ir a* + infinitive, *querer / poder / preferir* + infinitive, *me gustaría* + infinitive, *imagina que…*, and *cuando* + present.
  - No string copies `a1.mjs`. B1 keeps its own «si + imperfecto de subjuntivo» prompts, so the A2 → B1 step is preserved.
- **Guard (facilitator):** `scripts/check-mas-alla.mjs` exports `aboveA2(text)`. At A0, A1 and A2 the checker refuses three things, in encounters and in voices:
  1. *-iera / -iese* forms anywhere, except present subjunctives of e→ie verbs (quiera, prefieras…) and the words cualquiera, siquiera, quisiera and fiera;
  2. *-ara / -ase* forms and *fuera / dijera / trajera / quisiera…* after «si», with an optional subject, possessive + noun, «de verdad», «no» or clitics in between; present forms of *-arar* verbs (separa, compara, prepara…) and nouns such as clase, base and frase are excluded;
  3. the condicional compuesto.
  - Boundaries are Unicode-aware lookarounds. JS `\b` only knows ASCII letters, which was review B3.
  - The guard does **not** catch bare hypothetical conditionals («¿Qué pagarías?»), because politeness conditionals have the same form. Those were removed by authoring and by the review, not by the machine.
- **Test:** the new test in `tests/mas-alla.test.mjs` contains 14 above-A2 and 15 A2-legitimate probe sentences, a seeded A2 encounter, a seeded A2 voice, and a check that B1 still uses the hypothesis.

## Gates
- **G3** `npm run test:language`: pass. 43/43 tests; «Neutral Spanish guard: 0 unresolved findings across 2184 source files»; «ENGLISH COPY: UNCHANGED».
- **G4** (author ≠ reviewer): Alejandro, a fresh agent.
  - **First review on `cd245ba`: CHANGES REQUESTED**, 4 blockers:
    - B1: the rio question capped the answer at one glass;
    - B2: trono talk contradicted the "same life" offer;
    - B3: the first guard missed «si fuera», «si yo pudiera» and «habría ido», and it flagged «si separa» and «si la clase»;
    - B4: the A2 voices were left unrepaired.
  - Also 8 notes. Martin applied B1, B2, B4 and NB2–NB4. The facilitator applied B3, NB5 (this file), NB6 (a seeded voice case; deleting the voice guard now fails the test, 12 pass / 1 fail, VERIFIED) and NB7 (the test comment). NB1 and NB8 needed no change.
  - **Delta review:** see the "G4 delta" section below.
- **G6** (level honesty):
  - A2 was read in full by the author and by the reviewer.
  - The machine checks pass on all seven levels: `node scripts/check-mas-alla.mjs` prints «Más allá: all levels pass.».
  - The catalog `levels` stay A0–C2. No level is removed.
- **Beat labelling:** not applicable. No new lesson or new beat was added.
- **G5:** no rendered change. The same components show different strings, and the A2 talk strings stay ≥10 words, as before. Featured-flag status is unchanged: it is a non-board world and is out of scope.

## Not done / follow-ups
- Two near-duplicates that `scripts/conversation-quality.mjs --list mas-alla/levels/a2` reports predate this repair and lie outside it: `a2.mjs:142` and `a2.mjs:221` talk[0].
- Flegias still says «Pon una moneda en mi mano», which the authors read as a figure of speech.
- The other levels were not re-read for over-level structures. Only A2 was in scope.
