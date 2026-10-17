# G4 content review: «Gustar y verbos como gustar» A1 (id 242)

- Reviewer: Alejandro. Author: Martin, so reviewer ≠ author (N1/G4).
- Reviewed: branch `claude/gram-gustar-a1-20261017` @ **f39612f**, files `docs/board/content/gram-gustar/242.lesson.json` and `WIRING.md`.
- Verdict: **REQUEST CHANGES** (3 small required edits). Everything else is APPROVED as written.

## What passes
- **Objectives (G1).**
  - `a1.gram.gustar` exists (a1.ts:101, PCIC Gramática 7.1).
  - `a1.gram.tambien-tampoco` exists (a1.ts:102, prerequisite gustar).
  - `a2.gram.doler` exists (a2.ts:102, prerequisite a1.gram.gustar), so the guided A2 extension is placed correctly.
  - Every block, practice item and speaking task targets one of these three.
- **Prerequisite.** 106 «La estación de los dos destinos» is A1 (order 1400, indirect-object pronouns), so order 1405 with `requires [106]` is coherent.
- **Level honesty (G6).** The core is A1. Doler appears only in items labelled "Ampliación A2", which matches the house pattern of 106 ("A1 · ampliación A2").
- **House format.** The class follows the format of `new-lessons.json`: scope, warm-up, reading with 2 questions, 2 discovery prompts, 4 grammar blocks with a contrast in each, 10 practice items (8 choice and 2 open), a listening with 2 questions, 3 speaking tasks, writing (35–55 words), and a closing. There's no new engine.
- **Language and pedagogy.**
  - The Spanish is natural and correct, and the distractors target real A1 errors («yo gusto», «me gusta los…», también/tampoco after a negative, «me duele los pies»).
  - The reading (Bruno and Carla) is coherent and recycles every exponent.
  - The listening links nicely to the Feria world.
- **Access.** PRO by default, with no ledger change.

## Required changes
1. **The paradigm must be complete** (docs/LANGUAGE_POLICY.md: full paradigms include vosotros/vosotras). In grammar block 2 «A mí, a ti, a ella…», replace `form` with:
   `a mí me / a ti te / a él, a ella, a usted le / a nosotros, a nosotras nos / a vosotros, a vosotras os / a ellos, a ellas, a ustedes les`
2. **Don't state a prescriptive rule that doesn't exist.** «me encanta mucho» is common in speech and isn't an error. In grammar block 4, replace the first sentence of `contrast`, «No se dice «me encanta mucho»: encantar ya significa «gustar mucho».», with:
   «Con encantar no hace falta «mucho»: encantar ya significa «gustar mucho».»
   Keep the doler sentence as it is.
3. **Listening: neutral lexis and A1 tense.**
   - (a) «noria» is Spain-specific: Mexico says «rueda de la fortuna», Colombia «rueda de Chicago», Argentina «vuelta al mundo». It also clashes with the es-CO voice. Replace «yo prefiero la noria» with «yo prefiero la montaña rusa».
   - (b) «Tú dijiste que…» uses the pretérito indefinido, which is A2 in PCIC. Replace «Tú dijiste que no te gustan las alturas, ¿verdad?» with «A ti no te gustan las alturas, ¿verdad?». This also models «a ti».
   - Both listening questions and their models stay valid as written. The transcript stays at about 80 words.

## Suggested (not blocking)
- Discovery 1 `model`: write «cocinar es un infinitivo y va con gusta; las películas son plural y van con gustan» instead of «una actividad (singular)».

## Conditions for the wiring PR (not content)
- Include the N1 LQG audit file `docs/audits/gram-gustar-pedagogy-YYYYMMDD.md` (G3 `npm run test:language`, this G4, G6).
- Audio generation needs the GitHub Actions generator, which is a workflow dispatch and is blocked this session. The listening must report "audio pending" honestly until the audio is generated.
- When the catalog row is added, give it `displayLevel` "A1 · ampliación A2", the same pattern as 106, so the card is level-honest about doler.
