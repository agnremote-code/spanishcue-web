# Martin: proposal and vote for the PRO-first reprioritization (input to BOARD-DECISION-002)

- Date: 2026-10-17. Evidence from main at `585ecc7`.
- Owner priority (verbatim): "give priority to grammar and 3d conversation/listening premier pro classes (keeping our style)".

## (A) One new PRO grammar class

### Evidence: grammar objectives with no grammar class

Method:
- I read every `"gram"` row in `app/autoestudio/curriculum/objectives/a1.ts` and `a2.ts`.
- I matched each row against:
  - its `related` class path;
  - the 51 Gramática ids in `grammarMetadata` (`app/grammar-classroom/catalog.ts`);
  - the 7 `additions` there (230–235, 239);
  - the Gramática rows in `app/lesson-catalog.ts` (35 rows, including the 3D grammar worlds: Torre 47, Central 46, Ciudad de los Motores 48, Estación 106, and others).
- I then grepped the class bodies (`app/grammar-classroom/content/legacy-contexts.json`, `new-lessons.json`) for the exponents.

An objective counts as a gap when no class takes it as its subject. A passing mention inside another class doesn't count.

| Objective id | Week | Covered by | Gap? |
|---|---|---|---|
| `a1.gram.gustar` | A1 w12 | none. Only a contrast note inside 106 (`app/la-estacion-de-los-dos-destinos/data.ts`: «Gustar no representa una entrega…»). There's no `related` path | **GAP** |
| `a1.gram.tambien-tampoco` | A1 w12 | none: «tampoco» has 0 hits in both content files | **GAP** |
| `a1.gram.obligacion` (tener que / hay que / necesitar) | A1 w18 | none as a subject; the forms appear incidentally in 148/151/154/219 | GAP (narrow) |
| `a2.gram.comparativos` | A2 w7 | partly: one goal inside 112 «El Estudio del Detalle» («Comparar, recomendar y reaccionar») | partial |
| `a2.gram.superlativos` | A2 w7 | none: «-ísimo» and «el más» have 0 hits | **GAP** |
| `a2.gram.doler` | A2 w13 | none: «duele/doler» has 0 hits in legacy contexts | **GAP** |
| `a2.gram.indefinidos` (algo, nada, alguien, nadie) | A2 w18 | none as a subject; incidental in 13 bodies | GAP (narrow) |
| `a2.gram.estar-gerundio` | A2 w11 | only as an aspect inside 115/119 (B1/C1) | partial |
| `a2.gram.se-lo` | A2 w8 | 106 covers it as a guided "ampliación A2" | covered |
| `a2.gram.por-para` | A2 w17 | 231 (B1 addition) | covered |
| `a2.gram.condicional-cortesia`, `consejos-deberias` | A2 w13–14 | 146 condicional simple | covered |
| the past tenses, imperativo, futuro, perfecto | A1–A2 | 140–145, 18, sistema-verbal | covered |

Notional items (`a1.gram.hora`, `a1.gram.fechas`) are left out on purpose, since they don't fit a grammar class.

### Pick: «Gustar y verbos como gustar» (A1, with a short A2 extension)
- **Level:** A1. A2 learners can use it as review; the extension is the `doler` block.
- **Primary objective:** `a1.gram.gustar`.
- **Secondary objectives:** `a1.gram.tambien-tampoco`, and the A2 extension `a2.gram.doler`.
- **Exponents (5):**
  1. me/te/le/nos/os/les gusta + singular noun or infinitive;
  2. gustan + plural noun, where agreement goes with the thing liked, not the person;
  3. a mí / a ti / a él… for emphasis or contrast («A mí me gusta, ¿y a ti?»);
  4. también / tampoco / a mí sí / a mí no, with the polarity rule after a negative;
  5. encantar / interesar / (A2) doler on the same pattern («me duelen los pies»).
- **Why it beats the next gap** (comparativos + superlativos):
  1. It's the earlier and more load-bearing structure. Our own A1 conversation material opens on it (`app/noche-abierta/pedagogy.mjs` A1 starters «Me gusta…»), and every A1 conversation class relies on it.
  2. The gap is total: no class at all, and «tampoco» never appears. For comparison there's at least a goal inside 112.
  3. Its errors are classic and checkable in a choice format («me gustan el café», «yo gusto», «a mí también» after a negative), which suits the house practice items.
  4. Comparativos stays the runner-up for the next grammar slot.
- **House style (no new format):** the `app/grammar-classroom` JSON lesson, exactly like additions 230–235 in `app/grammar-classroom/content/new-lessons.json`, ≈ 60 min. Its sections are:
  scope → warmup → reading (+ questions) → discovery → grammar (title/form/meaning/examples/contrast) → practice (6) → listening (voice, transcript, questions) → speaking (3) → writing → closing.
  It needs a catalog row in the `additions` table with topic `pronombres` and path `/gramatica/gustar-y-verbos-como-gustar`, and a new id that doesn't collide with Feria's planned 241.
- **Access:** PRO by default (`app/access-policy.ts` Gramática samples are only 40 and 41). No ledger change.
- **Gates:**
  - `tests/grammar-classroom-content.test.mjs`, `grammar-classroom-audio.test.mjs`, `neutral-grammar.test.mjs` and `test:language`;
  - the N1 LQG audit file;
  - G4 by Alejandro or a fresh agent; G5 by me.
- **Search demand:** a HYPOTHESIS (R1 open, no per-query data).

## (B) LES-001 Feria A2 as the first PRO 3D world: content-design state

It's **ready for me to author now, for 5 of the 8 circles.** The design is locked (`docs/board/decisions/LESSON-DECISION-001-feria-de-villaluz.md` v5): circle ids and primary objectives (D7), AC1–AC12, teacher routes, language resolutions (§6), and AM-7/D2 session data.

What's missing:
1. **All of the content.** None of the 8 scene texts, the 8 listening JSONs (`app/escucha-3d/content/feria/a2.json`), the ~6 Busca sets + 1 transfer set, the teacher notes, the 2 routes or the closing is authored yet.
2. **Busca circles 1/6/7 are blocked on the Look-attribute contract** (§7 risk 2). Their descriptions may use only the features `people3d` renders distinctly in low mode at about 10 m. That list is provisional until it has been rendered once on the QA device. **I can author circles 2, 3, 4, 5 and 8, plus all 8 listenings, now.** Circles 1/6/7 need Sofia's rendered attribute list first, so that is the one thing she should produce early.
3. **The v5 text predates BOARD-DECISION-001.** It needs, per circle:
   - G1: 3–6 exponents;
   - N1 beat labelling;
   - routes-as-data with the E1 label (N4 wording);
   - risk 4 ("Martin authors and signs off") updated to the G4 rotation (Alejandro or a fresh agent reviews).
4. **Overlap to note:** Feria circle 3 is `a2.fun.favores`, the same objective as the free GROW-001 circle. That's acceptable and even useful as a funnel (the free scene previews the PRO objective), but the PRO scene must be a different situation and different text. I'll make sure it is.

## (C) Vote on order, and GROW-001

- **VOTE: the grammar class ships first, and the Feria build starts in parallel now.**
  - The grammar class needs no engine. It's content plus a catalog row, so it can be the first PRO shipping unit this week.
  - Feria's long pole is Sofia's engine (an estimated 2,000–2,500 lines, §7 risk 9) and the attribute contract. Sofia starts that immediately while I author the grammar class, then Feria circles 2/3/4/5/8 and the listenings, then 1/6/7 once the attribute list is rendered.
  - "Grammar first" therefore costs Feria nothing, and it avoids an author/build bottleneck.
- **GROW-001 paused: CONFIRM, no objection.** The approved content stays on main (`docs/board/content/grow-001-*`, merged `30bf6f2`). When it resumes, the build follows §6 of the handoff unchanged.
