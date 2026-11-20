# LQG audit (gated repair): «La boda» A1 brought back to A1 present tense

- **Unit type:** gated **repair** (BOARD-DECISION-001 §3.3). This is a content repair of one existing level (A1) of a shipped non-board world (id 257, `/la-boda`), plus one language fix in «El mundo en blanco» A1. It is not a new world and not a new level, and no other level changed.
- **Date / run:** 2026-11-20, Friday 3D + assessment routine, branch `claude/friday-assessment-20261120`, base main `f1d4a5dd`.
- **Content author:** Martin (subagent). **Guard and test:** the facilitator. **Independent G4 reviewer:** a fresh agent that wrote neither (see G4).
- **Source of the defect:** Martin's sampled audit [non-board-sample-g3-g6-20261120.md](non-board-sample-g3-g6-20261120.md) (W47 plan item 5, [2026-W46 assessment](../board/assessments/2026-W46.md) §6).

## Defect (VERIFIED)
- `app/la-boda/levels/a1.mjs` line 1 states the A1 scope: present tense, «ir a» + infinitive, «tener que», «hay», gustar and simple commands.
- On main `f1d4a5dd` the file broke that scope in two ways (Martin, file:line in the audit):
  1. **Past forms the student reads or says:** «el padrino me invitó» (:15, option `say`), «¿Cómo eras tú a los ocho años?» (:68, talk), «¿Cuántos años estuvo casada…?» (:108, `say`), «¿Montaste alguna vez a caballo?» (:345, talk, which also duplicated :342).
  2. **The present forced onto past meaning:** «Nunca me lo pruebo» (:85), «¿cómo es su boda? / Yo me escapo a caballo» (:106), «¿Quién hace este plano?» (:194), «Me la da Facundo» (:215), «¿Por qué no lo pienso yo?» (:246), «Nunca pienso en eso» (:313), «hoy nos salvas muchas veces» (:400), «Hoy llego solo» (:406), and the worst: «Cuéntame de tu papá. ¿Cómo es?» (:383), asked right after Facundo says his father died (:377).
- The new guard finds **4** past forms in main's A1 (invitó, eras, estuvo, Montaste). VERIFIED by `checkLevel('A1', <main a1.mjs>)`.
- **El mundo en blanco A1:** «cuando hace un error» (`app/el-mundo-en-blanco/levels/a1.mjs:93`) is a calque of "make a mistake". It is the only occurrence in `app/`.

## Change
- **Content (Martin):** 16 strings across the 13 lines in `app/la-boda/levels/a1.mjs`, and 1 talk question in `app/el-mundo-en-blanco/levels/a1.mjs:93` («¿Qué le dices a un amigo cuando se equivoca en algo importante?»).
  - Every line now either really means the present («¿De quién es este plano?», «Vengo con Facundo»), or turns the question into a present one («¿Tiene fotos de su boda?», «¿Cómo se llama su esposo?»).
  - :383 now opens with condolence and an invitation to talk: «Lo siento mucho, Facundo. ¿Quieres hablar de tu papá?». The reply puts the present inside «En mis recuerdos…».
  - The duplicate talk question at :345 is replaced by a new present-tense one.
  - :106 «nos escapamos» reads as a present to an A1 learner and as natural past narration to a native speaker. «murió» at :377 stays as the one fixed past chunk.
  - :406 no longer marks the student's gender («solo»).
  - Keys, option counts, moods and every `end` narration are unchanged. No string is copied from a2.mjs. These strings have no recorded audio.
- **Guard (facilitator):** `scripts/check-boda.mjs` exports `pastAtA1(text)`. At A1, `checkLevel` refuses past forms in every scene string: title, line, ask, dialogue, option say/reply/end and talk. It catches second-person preterites (-aste/-iste), third-person preterites ending in -ó, and the common past forms of ser, estar, tener, hacer and haber. Exclusions: «murió» and nouns such as triste or chiste.
  - **Known gaps:** regular first-person preterites (-é/-í) and -aba/-ía imperfects are not caught, because their forms collide with A1 words (café, aquí, día, tía). Present forced onto past meaning cannot be caught by a machine; it was removed by authoring and by review.
  - Boundaries are Unicode lookarounds (JS `\b` is ASCII-only).
- **Test:** a new test in `tests/la-boda.test.mjs` runs 8 past probes and 8 A1-legitimate probes, a seeded A1 scene with 3 injected past forms, and checks that A2 is unaffected. **It fails against main's A1** (4 findings; VERIFIED by swapping in main's a1.mjs: the test fails, 12 pass / 1 fail).

## Gates
- **G3** `npm run test:language`: pass. 43/43; neutral-Spanish guard «0 unresolved findings across 2312 source files»; ENGLISH COPY UNCHANGED (Martin's run on the final text).
- **G4** (author ≠ reviewer): see the review section below, filled in after the review.
- **G6** (level honesty): A1 was read in full by the author and by the reviewer. `checkLevel` passes on all seven levels for the scene content. The catalog `levels` stay A0–C2, and no level is removed.
- **Beat labelling:** not applicable. No new lesson or beat was added.
- **G5:** no rendered change. The same components show different strings of similar length.

## Pre-existing, not fixed here (VERIFIED)
- `node scripts/check-boda.mjs` exits 1 **on main as well**: «A0 listening asado open: «¿Hablas solo a veces?» already exists in app/choose-conversation/a1-data.ts». The cross-class duplicate came from another class's content (it appears in the #435 merge, 11-15). `tests/la-boda.test.mjs` does not run that CLI check, so CI stays green. It is a listening-content fix for a later unit.
- `app/la-boda/levels/a0.mjs:69` «¿De niño eras tranquilo o travieso?» is a past form at A0. The guard runs at A1 only, so this is out of this unit's reviewed scope. Next unit: fix it and extend the guard to A0.
- Martin's other findings (El tren A1/A2 above-level input, «hacer fotos», «enfadarse») stay open in the audit.

## G4 review
_(filled in after the independent review)_
