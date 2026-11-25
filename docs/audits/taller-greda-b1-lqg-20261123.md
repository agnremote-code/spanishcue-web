# LQG audit (DRAFT, author's half): «El taller de la greda» B1

- **Unit type:** new board world at one fully authored level (B1), PRO (BOARD-DECISION-001 §3.3 "shipping unit"). Concept: [2026-11-16-boyaca-taller-de-la-greda.md](../board/concepts/2026-11-16-boyaca-taller-de-la-greda.md).
- **Date / run:** 2026-11-23, Monday 3D routine, W48 plan item 1 (content half). Branch `claude/escucha-3d-taller-greda-b1-20261123`, base main `59475b40`.
- **Content author:** Martin (CLRQO, subagent). **Builder:** Sofia, later slot. **Independent G4 reviewer:** Alejandro or a fresh agent; never the author. **This file started as the author's self-assessment.** The G4 column was filled on 2026-11-25 from the G4 review (see G4 below); every CPIO (Sofia) cell stays PENDING: the builder has not made her own row-by-row text-only attestation.
- **Files under review:**
  - `app/escucha-3d/content/taller/b1.json`: listening, 8 items.
  - `docs/board/content/taller-greda-b1-conversacion.md`: Conversación scenes, 8 circles, teacher route, cultural check.
  - `app/escucha-3d/games.mjs`: `taller` registered (single level B1, `ownListening`).
  - `scripts/check-escucha-3d-provable.mjs`: `'taller'` added to `PROVABLE_KEYS`.
- **Nothing is built or shipped.** The audio workflow (`escucha-3d-audio.yml`, triggered by the push) generated the 8 clips on this branch in commit `b9c8c661` (github-actions[bot]); nobody has listened to them. No STT run has been made.

## Machine checks (author's run on this branch)

| Check | Result |
|---|---|
| `node scripts/check-escucha-3d.mjs taller B1` | `Escucha 3D: all files OK`. Includes the BOARD-DECISION-006 §3.2/§3.3 lint, because `taller` is in `PROVABLE_KEYS` |
| `node scripts/check-escucha-3d.mjs taller b1` (lower case, as written in the brief) | Prints `all files OK`, **but vacuously**: the script compares the argument with `'B1'` case-sensitively, so it skips every file. Use `B1`. Script defect, not fixed here (out of scope) |
| `strictKey('B1', items)` and `lengthKey(items)` (opt-in checks, run by hand; `taller` is not in those lists) | both `[]` |
| `python3 scripts/check-escucha-3d-provable-stt.py taller b1 --plan` | exit 0, `"missing": []`. Word seed on `greda` (gap-delete «agua», gap-replace «plástico» → «ventana», repeat «este audio» on line 1, delete «llamó» on line 2, article «la» → «las» on line 3, first word «Después» → «Ya» on line 5). Speaker seed on `mostrador` line 2 (Valentina's line read by Gonzalo's engine) |
| `node --test tests/escucha-3d-provable-gate.test.mjs` | 18/18 pass |
| `npm run test:language` (G3) | 43/43 pass; neutral-Spanish guard «0 unresolved findings across 2315 source files»; ENGLISH COPY UNCHANGED |
| `node --test tests/escucha-3d.test.mjs` | 5/5 pass after the bot's audio commit `b9c8c661` (before it, the audio test failed: `taller/b1-mostrador` was not in the manifest) |
| `node --test tests/resource-3d-worlds.test.mjs` | **1 fail**: «every 3D world in the listening registry has exactly one public resource page». Expected until the world has a catalog lesson |
| The three test files above together, at the branch tip | 30 pass, 1 fail (the resource-page test only). With the registration left out (checked before the audio existed): 31/31 |
| The other world tests that import `games.mjs` (feria, paises, madrid, hospital, boda, consorcio, vuelo, más allá, crucero, hr, reality, papel, tren) | all pass |

## G1 · objectives (author: PASS, machine part VERIFIED by grep)
- One primary per circle, all from `app/autoestudio/curriculum/objectives/b1.ts`: mostrador `b1.fun.w07-pedir-requisitos` (:79), greda `b1.voc.w16-taller-artesania` (:167), torno `b1.gram.g118` (:165), secadero `b1.gram.g119` (:166), horno `b1.spk.w16-contar-conversacion` (:172), esmaltes `b1.lis.w16-encargo-taller` (:169), oficina `b1.wri.w16-correo-reunion` (:171), patio `b1.fun.w16-transmitir-mensajes` (:173, world primary, concept §6.4).
- 4–5 exponents per circle (within 3–6), listed in the conversation file.
- `b1.pron.w16-pregunta-referida` (:168) is related only. The text mode cannot score intonation, so it is never claimed. Circle 3 has a teacher-led choral moment, marked "not scored".
- "Machine-checked" exponents: there is no checker yet. Sofia's build adds one (the Feria `check-feria.mjs` pattern). Until then this is the author's check only.

## G2 · contrast beats (author: PASS)
- 22 contrast beats, 2–4 per circle; at least one per scene. Every wrong option names its `feature`, and its feedback opens with that feature.
- The g118 contrasts that the listening may not test (mood in reported speech, backshift, «preguntó si», person change) are produced and labelled in Conversación: 3.1–3.4, 5.1–5.2, 6.1–6.2, 7.1, 8.1–8.3. g119 contrasts: 4.1–4.3, 6.3, 7.2 (concept §5.3, §6.4).

## G3 · language (author: PASS on the machine part)
- `npm run test:language` passes (above). The listening JSON is under `app/`, so the neutral guard scans it. The conversation scenes are a docs file, not yet under `app/`; Sofia's `levels/b1.mjs` will be scanned when it exists.
- Neutral Spanish with tú (`docs/LANGUAGE_POLICY.md`). Usted only as a character's register (clients and Roberto with Marina). No voseo for the Uruguayan voice.
- R4: no regional particles or unlisted interjections in any voiced line. The only interjections are «ay», «uy» and «ah», all on the normalised list. «Listo», «doña», «manejar» and «apenas» are dictionary words. «sumercé» appears only as a teacher-note exemplar. R5: no sound effects in any clip.
- Humanity check by the author: the dialogue has fillers, interruptions and self-corrections («Nada malo. Bueno, más o menos.»), and no textbook lines. The reviewer should challenge this.

## G4 · independent review: **APPROVE WITH CHANGES** (Alejandro, fresh agent, at build `61c70f91`; recorded by Sofia 2026-11-25)
- Reviewer: Alejandro or a fresh agent, from the checklist and the diff only. The author does not review this unit.
- §3.2 attestation (G4 column below, as relayed by the facilitator): all 32 gap words ATTEST, including the 9 ⚑ rows; all 32 correct options ATTEST; torno Q4 (who-said-what) attested as an item type only and **ungated until a VALID speaker seed** for this level.
- Findings and their state after Sofia's follow-up commit:
  - **B1 (listening `context` gives away gist answers; `Escucha.tsx:237` always shows `item.context`): NOT APPLIED.** The requested `context` rewrites for greda, torno, secadero, esmaltes (and patio, whose context states Q1's answer, «las cajas» / «la carga») were not made: the edit of `app/escucha-3d/content/taller/b1.json` was refused by the build session's permission check (that file was out of scope in the build brief). The audio hash in `scripts/generate-escucha-3d-audio.py` covers `[VERSION, RATE, speakers, lines]` only, so changing `context` would not regenerate audio. Open: needs an approved edit.
  - **B2 (`plazo-envio` at greda and `que-te-dijo` at patio appear nowhere in their circle): FIXED.** Greda words add «el plazo de entrega (para cuándo hay que tener listo el pedido)»; patio talk question 3 now ends «¿Le preguntas a la persona «¿Qué te dijo exactamente?»?». The checker now fails if either exponent disappears from its circle.
  - **B3 (after the esmaltes listening step switches to Comprensión auditiva, later route steps open the listening card instead of the scene): FIXED.** Route buttons go through `openStep()`: the listening step opens the listening; any other step switches back to Conversación and opens its scene directly. Test added.
  - **B4 (catalog cover): NOT DONE by decision.** Covers are image-model key art; no image model in the build slot. The class test keeps it as a todo.
  - **B5:** not detailed in the message relayed to the builder; not acted on.
  - **NB5 (touch nitro survives `clear()`): FIXED.** **NB6 (misleading dispose comment in `taller3d.ts`): FIXED.**

## G5 · rendered verification: **PARTIAL (Sofia, build 2026-11-25)**
- Built as `app/el-taller-de-la-greda` (catalog lesson 285, PRO, B1). Builder's evidence only; G4 still reviews it.
- SwiftShader smoke (headless Chromium, isolated esbuild bundle of the real `TallerGame`, DPR 1): title, walking, the teacher list, circle 3 (wrong then right contrast with its feedback), the relay to circle 4, the listening card at circle 8 (pre-generated `taller-b1-patio.mp3`), the closing round in the yard with all five on-stage characters, «Terminar»: no page errors, no missing files.
- 2D fallback (reduced motion): the list and the map open with no WebGL. 390 × 844: the circle 7 card fits, no horizontal scroll.
- Not done: one real-device check; the catalog cover (image-model key art, not a screenshot) is still to make.

## G6 · level honesty (author: PASS, by judgement)
- One level only, B1. Catalogue `levels` must list `['B1']` only (as registered).
- Listening transcripts are 113–147 words (B1 needs 100–160): mostrador 139, greda 147, torno 134, secadero 113, horno 136, esmaltes 140, oficina 135, patio 142.
- Language matches the B1 PCIC and week-16 scope: reported speech with backshift, «pidió que» + imperfect subjunctive, «para que», relatives with subjunctive, se pasivo / impersonal. No C-level irony or implicature. The «si abrieras…» model answer (open question, item 1) sits at the upper edge of B1; it is a model, not a requirement.

## N1 · beat labelling (author: PASS)
- Every beat is labelled «Contraste lingüístico» (with `exponent`) or «Estímulo de conversación». No goal or metadata claims that the listening mode practises the g118 contrasts. Summary in the conversation file, §11.

## BOARD-DECISION-006 compliance (listening)

**Clip rule (§3.3): PASS, lint-checked.** Each clip has one speaker or exactly one woman and one man:
- single voice: greda (Marina, f), secadero (Emilio, m);
- cross-gender: mostrador (Valentina f + Gonzalo m), torno (Gonzalo m + Paola f), horno (Emilio m + Marina f), esmaltes (Paola f + Emilio m), oficina (Andrés m + Marina f), patio (Roberto m + Marina f).

6 two-speaker items (at least 4 needed). Countries: Colombia, Uruguay, Venezuela, República Dominicana, Guatemala, Panamá (6; concept §6.1 is met by adding Andrés, a seventh character). Answers spread 12 / 10 / 10 over A/B/C. The correct option is the longest in 9 of 32, the shortest in 8 and the middle length in 15.

**Seed-clip shape (§3.4): PASS.** `greda` is single-voice. Its gap line is line 4, and its six other lines each hold an article with a space on both sides, a lower-case word of 5+ letters that occurs once in the line, and a first word. Cross-gender clips with a later line over 40 characters: all six dialogues. The `--plan` above confirms it.

**Item types used:** `choice` (32), `gaps` (32 words), `open` (24; not scored against the audio). One **who-said-what** item: torno Q4 «¿Quién va a hablar con Emilio del horno pequeño?». Options are roles (el tornero / la dueña del taller / **la aprendiz**), inside a cross-gender clip. It counts as gated only once this level's speaker seed is VALID (Martin's vote note in BOARD-DECISION-006). There are no intonation or irony items, and no name, number or clock time is a correct option or a gap word.

### §3.2 text-only attestation: gap words

Attestation question: does the word have a gender, person, mood or consonant (or other single-phoneme) minimal pair that would fit the same sentence? "Fits" means grammatical **and** plausible in context. Rows marked ⚑ have a single-phoneme neighbour that is grammatical but, in the author's view, not plausible. They are listed so the reviewers decide, not hidden.

| # | Item | Gap word | Author (Martin) | CPIO (Sofia) | G4 reviewer |
|---|---|---|---|---|---|
| 1 | mostrador | segundo | No fitting pair. «segunda» fails agreement with «un … local» | PENDING | ATTEST |
| 2 | mostrador | enero | No pair | PENDING | ATTEST |
| 3 | mostrador | vajilla | No pair | PENDING | ATTEST |
| 4 | mostrador | café | No pair | PENDING | ATTEST |
| 5 | greda | agua | No pair | PENDING | ATTEST |
| 6 | greda | plástico | No pair | PENDING | ATTEST |
| 7 | greda | rincón | No pair | PENDING | ATTEST |
| 8 | greda | mañana | No pair | PENDING | ATTEST |
| 9 | torno | semana | No pair | PENDING | ATTEST |
| 10 | torno | pedido | ⚑ «perdido» (one inserted /r/) does not fit «un ___ para el mercado» as a noun phrase. No gender pair («un pedida» fails) | PENDING | ATTEST (⚑ reviewed) |
| 11 | torno | mercado | ⚑ «marcado» (one vowel) does not fit «para el ___ del domingo» | PENDING | ATTEST (⚑ reviewed) |
| 12 | torno | domingo | No pair | PENDING | ATTEST |
| 13 | secadero | regla | «reja» differs by two phonemes. No pair | PENDING | ATTEST |
| 14 | secadero | comida | No pair («comido» fails after «con») | PENDING | ATTEST |
| 15 | secadero | polvo | No pair | PENDING | ATTEST |
| 16 | secadero | greda | No pair | PENDING | ATTEST |
| 17 | horno | cosa | ⚑ «costa» (one inserted /t/) is grammatical in «Y otra ___:» but implausible. «causa» is two phonemes away | PENDING | ATTEST (⚑ reviewed) |
| 18 | horno | esmalte | No pair | PENDING | ATTEST |
| 19 | horno | plomo | ⚑ «pomo» (one deleted /l/) is grammatical in «sin ___» but implausible for a glaze | PENDING | ATTEST (⚑ reviewed) |
| 20 | horno | doble | ⚑ «noble» (one consonant) does not fit «cuesta el ___» | PENDING | ATTEST (⚑ reviewed) |
| 21 | esmaltes | jarra | ⚑ «jara» (rr→r, a shrub) is grammatical but implausible in «una ___ para el agua» | PENDING | ATTEST (⚑ reviewed) |
| 22 | esmaltes | agua | No pair | PENDING | ATTEST |
| 23 | esmaltes | mesa | ⚑ «misa» (one vowel) is grammatical in «en la ___ del comedor» but implausible | PENDING | ATTEST (⚑ reviewed) |
| 24 | esmaltes | comedor | No pair | PENDING | ATTEST |
| 25 | oficina | anticipo | «anticipó» (stress) does not fit after «El» | PENDING | ATTEST |
| 26 | oficina | mitad | No pair | PENDING | ATTEST |
| 27 | oficina | total | No pair | PENDING | ATTEST |
| 28 | oficina | correo | ⚑ «correa» (one vowel, gender-like noun pair) is grammatical in «por ___» but implausible for sending data | PENDING | ATTEST (⚑ reviewed) |
| 29 | patio | papel | No pair | PENDING | ATTEST |
| 30 | patio | cartón | ⚑ «carbón» (t→b) is grammatical in «envueltas en papel y ___» but implausible for packing | PENDING | ATTEST (⚑ reviewed) |
| 31 | patio | manejar | No pair (an infinitive after «hay que»; «manejan» etc. fail) | PENDING | ATTEST |
| 32 | patio | cuidado | No pair («cuidada» fails after «con») | PENDING | ATTEST |

Machine lint: no word ends in -s, none is capitalised mid-sentence, all are single words with no digits (`provableKey` = no findings). Every gap sentence is copied verbatim from one line. Avoided by design: «torno»/«horno» (b1.ts:167) appear in lines but never as gap words or as the hinge of a correct option; seseo homophones (taza/tasa, casa/caza) were removed from the gaps; adjectives with a fitting gender pair were avoided.

### §3.2 text-only attestation: correct options

Attestation question: does the correct option differ from **both** distractors by at least one whole content word that is spoken in the audio, without hinging on «no», «ya» or «sí», on number, gender, person or mood inflection, or on a name?

| # | Item · Q | Correct option | Distinguishing spoken content word(s) | Author (Martin) | CPIO (Sofia) | G4 reviewer |
|---|---|---|---|---|---|---|
| 1 | mostrador · 1 | Para hacer un pedido de vajilla | vajilla | PASS | PENDING | ATTEST |
| 2 | mostrador · 2 | Porque va a abrir un segundo local | abrir, segundo, local | PASS | PENDING | ATTEST |
| 3 | mostrador · 3 | Que aguanten el lavaplatos | aguanten, lavaplatos | PASS | PENDING | ATTEST |
| 4 | mostrador · 4 | Que Marina le mande una muestra | muestra (vs «visite el restaurante», «la factura»). «Marina» is in all three options, so it is not the hinge | PASS | PENDING | ATTEST |
| 5 | greda · 1 | Porque va por la carretera | carretera | PASS | PENDING | ATTEST |
| 6 | greda · 2 | La del saco azul, que es más fina | fina (vs «barata»; «sobró del mercado») | PASS; the reviewer should check that «más» is not the only cue (it is not: fina/barata differ) | PENDING | ATTEST |
| 7 | greda · 3 | Echarle agua tibia | agua, tibia | PASS | PENDING | ATTEST |
| 8 | greda · 4 | Porque sigue caliente desde anoche | caliente, anoche | PASS | PENDING | ATTEST |
| 9 | torno · 1 | De la llamada de una clienta | clienta (spoken in line 1; «llamada» rests on the spoken «llamó», see note a) | PASS | PENDING | ATTEST |
| 10 | torno · 2 | Si podían entregar antes de la inauguración | entregar, inauguración | PASS | PENDING | ATTEST |
| 11 | torno · 3 | Sencillas y de color tierra | sencillo, tierra | PASS (option «Sencillas» is plural feminine vs audio «sencillo»; the hinge is «tierra») | PENDING | ATTEST |
| 12 | torno · 4 | La aprendiz (who-said-what) | speaker identity: Paola, the woman, says «yo hablo con él». Roles, not names | PASS as an item type; **gated only after a VALID speaker seed** | PENDING | ATTEST as an item type only; ungated until this level's speaker seed is VALID |
| 13 | secadero · 1 | Cómo se secan las piezas | secadero / secan, piezas | PASS | PENDING | ATTEST |
| 14 | secadero · 2 | Porque si se secan rápido, se rajan | rápido, rajan | PASS | PENDING | ATTEST |
| 15 | secadero · 3 | Se moja y se vuelve a usar | moja, usar | PASS | PENDING | ATTEST |
| 16 | secadero · 4 | Porque el polvo de la greda se pega a todo | polvo, pega | PASS | PENDING | ATTEST |
| 17 | horno · 1 | Una taza tiene una grieta en el asa | grieta, asa | PASS | PENDING | ATTEST |
| 18 | horno · 2 | Porque el asa estaba más húmeda | húmeda | PASS | PENDING | ATTEST |
| 19 | horno · 3 | Mandar los platos el lunes | platos, lunes | PASS | PENDING | ATTEST |
| 20 | horno · 4 | Que prefiere pagar más por algo seguro | pagar, seguro | PASS | PENDING | ATTEST |
| 21 | esmaltes · 1 | Le cuenta qué dijo la del restaurante | dijo, restaurante (and «cuenta» ← spoken «te cuento», see note a) | PASS | PENDING | ATTEST |
| 22 | esmaltes · 2 | Que eran justo lo que buscaba | justo, buscaba | PASS | PENDING | ATTEST |
| 23 | esmaltes · 3 | Porque allá sirven el café en taza grande | sirven, café, grande | PASS | PENDING | ATTEST |
| 24 | esmaltes · 4 | Una jarra para el agua | jarra, agua | PASS | PENDING | ATTEST |
| 25 | oficina · 1 | Porque Valentina está en una reunión | reunión (the name is in all three options) | PASS | PENDING | ATTEST |
| 26 | oficina · 2 | Que la inauguración se adelantó | inauguración, adelantó | PASS | PENDING | ATTEST |
| 27 | oficina · 3 | La mitad del total | mitad | PASS | PENDING | ATTEST |
| 28 | oficina · 4 | Porque ese día la cocina está tranquila | cocina, tranquila | PASS | PENDING | ATTEST |
| 29 | patio · 1 | De la entrega de las cajas | cajas (and «entrega» ← spoken «entregaras», see note a) | PASS | PENDING | ATTEST |
| 30 | patio · 2 | Porque adelante están pintando la fachada | pintando, fachada | PASS | PENDING | ATTEST |
| 31 | patio · 3 | Revisar caja por caja | revisar, caja | PASS | PENDING | ATTEST |
| 32 | patio · 4 | Una foto de la factura firmada | foto, factura, firmada | PASS | PENDING | ATTEST |

- **Note a (derived forms).** Three general-idea options also use a noun derived from a spoken verb (llamada ← llamó, entrega ← entregaras, cuenta ← cuento). In each case the option also carries a whole spoken word that neither distractor has (clienta; dijo / restaurante; cajas), so the item does not rest on the derived form. Flagged so G4 can confirm this reading.

## Disclosed open items (BOARD-DECISION-006 §3.5; never passes)
1. **BOARD-DECISION-003 §2 partial and uncovered rows stay open** for every clip of this world: stress shifts mapped back to the right word; artefacts inside a TTS line; a wrong voice declared for a character.
2. **Any single-phoneme mismatch between audio and transcript outside the items** (for example a swallowed -s in a line that carries no item) will be written here as an open item when a run exists, never as a pass.
3. **Same-gender speaker discrimination is unproven**, so the content avoids it by construction. **Cross-gender discrimination with Emma vs Florian is unmeasured** (BOARD-DECISION-006 §2.2). The one who-said-what item (torno Q4) is not gated until this level's speaker seed is VALID.
4. **Proper names in the audio** (Valentina, Marina, Gonzalo, Paola, Emilio, Andrés, Roberto, Bogotá, «Taller La Greda») are not items, but an STT run may spell them differently («Yaneth»/«Janet» precedent). They would be outside-item mismatches under item 2.
5. **Numbers in the audio** («cuatro», «seis», «diez», «doce») are spoken as words and carry no item.
6. **Audio exists but is unheard.** The workflow generated the 8 clips (53.5–73.2 s; Emma/Florian with per-clip pitch, no accent claimed) in `b9c8c661` from the same lines as the final content (the manifest hash covers speakers and lines only; the later commit changed two answer options, not lines). No person and no STT check has listened to them.
7. **Script defect found:** `node scripts/check-escucha-3d.mjs <game> b1` (lower-case level) skips every file and prints OK. Not fixed here; reported for a separate reviewed change.
8. **Registration needs a built world:** `tests/resource-3d-worlds.test.mjs` needs a catalog lesson for `taller`. The registration is a separate commit, so it can be dropped or kept for Sofia's build.
9. **Cultural claims marked HYPOTHESIS** in the conversation file §10: the local use of «greda», lead-free glaze practice, the advance/balance convention and «sumercé». Ráquira as a Boyacá pottery centre is VERIFIED from a Ministerio de Cultura publication (web, this run), but the town stays unnamed.
10. **The 45-minute route timing** is the author's estimate (HYPOTHESIS until a class trial).

## §9.2 status: **NOT CLOSED**
- §9.2 stays **human-only** for «El taller de la greda» B1. None of the three conditions in concept §6.6 / BOARD-DECISION-006 §3.1 holds yet:
  - (a) item types: satisfied by authoring, pending the CPIO and G4 attestations above;
  - (b) a VALID seeded run on this world's own clips, same run and same SHA: **does not exist**. The clips exist, but no STT workflow for the provable checker exists on main (`.github/workflows/` at `59475b40` has only `escucha-3d-audio.yml`). The `--plan` output above is a plan, not a run;
  - (c) every real clip PASSES: **no run exists**.
- So a person must listen to all 8 clips before release (BOARD-DECISION-003 §4: a person's defect report always overrides a PASS).

## Author's sign-off
- Martin, 2026-11-23: the content is ready for G4 review and for Sofia's build. I attest the author column above. I do not review my own content.
