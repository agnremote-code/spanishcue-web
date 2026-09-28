# Quality v2 repair status

## Repair Wave 1: implemented, source verified, publication QA pending

Updated 2026-09-28 UTC. Exactly **four existing lessons** were repaired: **45, 47, 201 and 202**. No new lesson or CEFR variant was registered. The owner explicitly authorized implementation and Microsoft synthetic MP3 generation in chat; that authorization superseded the earlier audit-only restriction. The former approval blocker is resolved.

**Result:** implementation and safe executable verification are complete on the task branch. **181 tests passed, 0 failed; lint and the protected build passed; TypeScript has 11 inherited diagnostics and zero new diagnostics.** An independent Astra review found no critical or important implementation issues; its minor catalog-copy finding was corrected and rechecked. This is a source handoff, **not approval to publish**. Interactive browser/mobile/accessibility inspection and actual listening remain pending.

| Source / delivery | Value |
|---|---|
| Repository | `agnremote-code/spanishcue-web` |
| Branch | `codex/quality-v2-repair-wave1-20260928` |
| Requested Quality v2 base | `6657400650b9bd9f52b166391fb7488456a5adb3` |
| Canonical main inspected and rechecked | `5d6733a9b9404bbc17bf6999530eb48ffb574a3e` |
| Base relationship | Requested base contains inspected main: `0 24` in `git rev-list --left-right --count origin/main...6657400650b9bd9f52b166391fb7488456a5adb3` |
| Preserved Conversation Batch 1 | `019310604045bcdccf74fe3606e685ec826797f5`, ancestor of the repair branch |
| Preserved diagnosis checkpoint | `5d63d5f8bd61e3d22de26502a3460b42c96ad2e7` |
| Pushed implementation checkpoint | `d0e7eab5f83e5e9af8cd813c09cea405495999c3` |
| Final report/catalog verification commit | The commit containing this revision; obtain its exact SHA with `git log -1 --format=%H -- docs/lessons/quality-v2-repair-status.md` |
| Delivery boundary | Same existing branch; no PR, merge or deploy; stop after Wave 1 |

`AGENTS.md`, `CLAUDE.md`, the Quality Standard v2, historical non-conversation audit (Markdown and JSON), next-priorities document, target sources, routes, metadata, assets, audio infrastructure and relevant tests were read. No open PR overlap was returned. Work resumed from the required checkpoint, without resetting or discarding prior work. Historical diagnosis, original answer matrix and the resolved approval event remain recoverable at `5d63d5f`; this report replaces its obsolete active-blocker status.

## Exact lessons and scope

All four historical audit classifications are **C**. The original audit is preserved unchanged; this implementation report does not retrospectively regrade it.

| ID | Exact title | Category | Level contract | Access | Existing route | Current result |
|---|---|---|---|---|---|---|
| 45 | El Mercado de las Cantidades | Gramática | Primary A1; optional A2 material | PRO | `/el-mercado-de-las-cantidades` | Implemented; visual/mobile QA pending |
| 47 | La Torre de las Coordenadas | Gramática | Primary A1; advertised A1–A2; explicit A2 extension | PRO | `/la-torre-de-las-coordenadas` | Implemented; visual/mobile QA pending |
| 201 | Cinco vocales, cinco sonidos | Fonética | A1 | FREE | `/clase/201` | Implemented; visual/mobile and listening QA pending |
| 202 | El ritmo de las palabras | Fonética | A1; optional stress contrasts are recognition/imitation, not required past-tense production | FREE | `/clase/202` | Implemented; visual/mobile and listening QA pending |

Grammar resource slugs remain `/resources/spanish-grammar-lesson-a1-el-mercado-de-las-cantidades` and `/resources/spanish-grammar-lesson-a1-a2-la-torre-de-las-coordenadas`. `/clase/45` and `/clase/47` still follow the existing canonical-path rejection; dedicated grammar routes are authoritative. The Library now links 201/202 to their already-existing class URLs instead of opening the generic inline description. No URL, ID, level, entitlement or registration was added or removed.

Only the subtitle and duration of catalog records 45/47 changed: actual movable-scene / interactive-purchase descriptions replace unimplemented 3D promises, and `≈ 45 min + banco opcional` distinguishes the selected route from the retained extended banks. All other catalog fields and records, including 201/202's historical descriptions, are preserved.

## 45: quantities and a usable purchase

**Original defects:** the key for `Trabajo ___ los días.` supplied `todos los`, creating `todos los los días`; the empty-stall prompt accepted only `nadie` although `nada` was also defensible without context; a trap rejected regional `mucha calor` universally; the explanation treated `bastante` as invariably sufficient. Existing art was not driven by quantities. No pre-existing cart/count algorithm existed, so this was not a reproduced numerical-engine bug.

**Repairs:** accept `todos`; specify that products are present but people are absent; use unambiguous `mucho fruta` / `mucha fruta` for agreement; explain sufficiency relative to need and acknowledge the contextual abundant reading. All eight questions now have stable IDs, evidence, a targeted hint, composed sentence, individual check and deliberate reveal.

**Pedagogical and interaction changes:** retain five stations, twenty bilingual examples, four contrasts, four traps (with the identified correction), eight questions, three existing speaking prompts and the long mission. Add a bounded basket for bottles and apples, with counts 0–8. The first order is 3 bottles / 4 apples; the retrieval order is 2 / 3. The same state supplies objects, numerals, quantity phrases and exact/short/excess feedback. Editing a count clears the previous confirmation. Help can be hidden for retrieval; a teacher confirms intelligibility rather than a string matcher grading speech.

The selected A1 route uses stations 1–2 and questions 1, 2, 3, 5. Stations 3–5, questions 4 and 6–8, and the long missions are optional A2 expansion. The new oral close is a buyer/seller exchange: request three goods, hear a shortage, adjust the order and confirm it. The teacher observes comprehensible quantities, agreement and successful repair. Estimated route: **45 minutes**, with 16 minutes allocated to exchange/retrieval; not classroom-timed.

**Visual changes:** preserve market artwork; add tangible bottle/apple markers, an order and large add/remove controls. No decorative 3D or new thumbnail. No new audio is needed for this teacher-mediated grammar objective.

## 47: adverbs, spatial evidence and time

**Original defects:** `Las llaves están ___ de la mesa.` accepted `encima de`, creating `de de`; the class-start question allowed both time and place readings; the cooking prompt did not explicitly require the next step in time. Shared-negative and manner items needed stronger context. `Muy encima` was a peripheral distractor, not an established alternative for the supplied literal keys scene. “Coordinates” was a spatial/adverb metaphor, not a Cartesian engine.

**Repairs:** accept `encima`; replace the peripheral distractor with `encimas`; specify a time question answered at nine; explicitly request temporal sequence; specify Leo's shared negative response; use Luis and a manner request, with `claras` as the distractor rather than a potential name reading. All eight items receive the same contextual, individual feedback controls as 45.

**Pedagogical and interaction changes:** retain the original five stations, twenty bilingual examples, four contrasts, four traps, eight questions, three speaking prompts and long mission. Add keys visibly on the table, under it or inside a box. One position record controls both the SVG marker and its accessible caption/model. Tested anchors: on `(190,91)`, under `(190,173)`, inside `(470,115)`. Buttons provide a non-drag interaction. Oral alternatives are accepted by the teacher: `sobre/encima de`, `bajo/debajo de`, `en/dentro de la caja`; no free-text equality rejects these alternatives.

The A1 route prioritizes supported place/time and `muy/mucho`, stations 1–3 and questions 1–4. Stations 4–5, questions 5–8, manner/cause and long missions are optional A2 expansion. New oral close: describe an unseen keys position, say whether the keys are needed today or tomorrow, let the partner clarify and confirm, then exchange roles. Estimated selected route: **45 minutes**, including 15 minutes of paired use/retrieval; not classroom-timed.

**Visual changes:** preserve tower art; introduce a simple table/box scene with position-driven keys, visible captions and large controls. No mathematics, new thumbnail or grammar audio was added.

## Complete grammar-bank validation and shared state

**16 items / all 48 choices** were independently reviewed and run through the real selection/check/reveal handlers. Expected complete answers below use one-based item numbers; answer indexes in code remain zero-based.

| Item | 45: accepted completion | 47: accepted completion |
|---|---|---|
| 1 | Necesito una botella de agua. | El museo está muy cerca. |
| 2 | Hay muchos tomates en la caja. | Ana estudia mucho. |
| 3 | Tengo poco tiempo hoy. | ¿Cuándo empieza la clase? |
| 4 | Trabajo todos los días. | No voy y Leo tampoco. |
| 5 | Quiero otro café, por favor. | Primero cocino; después como. |
| 6 | No hay nadie en el puesto. | Habla claramente. |
| 7 | Esta sopa tiene demasiada sal. | ¿Por qué estudiás? → Porque viajo. |
| 8 | Este mercado no es tan caro. | Las llaves están encima de la mesa. |

The causal item is a question/answer pair, not blank insertion. A rejected alternative can be grammatical in another context; the feedback constrains the intended meaning instead of declaring it universally invalid. Option-index validation is appropriate for these closed choices. No typed-answer normalization is required; open speech stays teacher assessed.

Tests cover all 81 count/target combinations, bounds at 0/8, number/agreement composition, all three position records and their oral alternatives, deterministic checked/correct counts, reveal/retry/reset and item isolation. Target banks preserve their substantial existing content. Seven other GrammarWorld banks retain exact data hashes and normalized server-render hashes against the inherited renderer.

Whole-bank duplicate check: the 16 accepted grammar responses are unique after NFC, case and whitespace normalization. All 8 vowel targets and all 12 stress targets are unique within their respective banks under the same normalization. Accents are retained because they encode the stress contrast. Repeated option pairs, the shared `casa` model and repeated isolated/word/phrase use are intentional recycling, not additional lessons or inflated unique-content counts.

Changes to the shared renderer are opt-in. Target station progress starts at zero and says **ESTACIONES EXPLORADAS / VISTA**, not mastery. Target keyboard arrows navigate only from station controls. A keyed content wrapper resets all state when the repaired lesson changes; legacy worlds keep their original identity. Each revised question hides feedback when edited. The old renderer already hid aggregate results on answer changes, so this report does **not** invent an original stale-answer defect. New explicit reset and per-item hints/reveal address actual missing capabilities.

## 201: hearing and producing stable vowels

**Original limitation:** the generic lesson had useful vowel words, articulation and oral prompts, but no embedded audio paths or listen-first interaction. Its 30–40-minute catalog focus is retained; it is not transformed into a spelling lesson.

**Redesign:** one dominant vowel target, concise tongue/lip/jaw guidance without English equivalents, a toggle between five isolated vowels and their word models (`casa, mesa, vino, moto, luna`), then **eight listen-first word contrasts**. The independent answer sequence is `mesa, casa, piso, pelo, misa, peso, cosa, palo`. Paired repetitions are deliberate perceptual recycling; targets are balanced across option positions.

Choices stay disabled until playback completion or explicit text accommodation. A wrong answer gives a listening focus without exposing the solution; a correct check or requested help reveals the model and rationale. Repeated listening has a specific vowel focus. Three phrase clips lead to hidden-text recall and a changed personal detail.

**Oral closing:** dictate three selected words for a partner to repeat, give two personal sentences and agree on a vowel to practise. Teacher criteria distinguish recognizable vowels, stable quality and comprehensibility. No speech recognition, recording capture, pronunciation score or automatic mastery claim. Estimated route: **40 minutes**, within the existing catalog range; not observed classroom duration.

**Visual changes:** warm paper/ochre, dominant vowel, generous controls and progressive text reveal. Existing sound-vessel thumbnail retained. Decorative AudioDeck bars are hidden; the lesson does not present them as an acoustic signal.

## 202: spoken stress before the written mark

**Original limitation:** the source correctly distinguished stress and tilde but exposed the answers in written tasks; no audio supported `público/publico/publicó`, `término/termino/terminó` or word/phrase models. Perfect written completion did not demonstrate hearing stress.

**Redesign:** model `casa, papel, teléfono, café`; neutral syllable-position buttons before text reveal; hear, predict/select the stressed position, replay, verify, imitate, and carry the word into a phrase. The bank has **12 trials: four A1 core items and eight optional contrast items**. Answer positions are `[0,1,1,1,0,1,2,0,1,2,0,1]`; syllabification and scripts are independently checked. The displayed stress marker represents the authored answer, not acoustic timing analysis.

Optional three-form contrasts are listening/imitation with teacher-mediated meaning. They do not require the learner to produce past tense. Two phrase clips model `¿Tomás café?` / `Sí, tomo café.`; transfer explicitly substitutes **another beverage** to keep the question grammatical.

**Oral closing:** ask about a real habit, respond truthfully, tell a routine in three short phrases, then repeat one important word alone and in its phrase. Teacher criteria concern identifiable stress, retention in the phrase and useful pauses; the learner is not told to force equal syllable durations. Estimated route: **40 minutes**, within the existing 35–45-minute range; choose at most one optional contrast group if time permits.

**Visual changes:** cool paper/ink, large neutral syllable pulses and a revealed stress marker; focused task rather than a simulated studio. Existing rhythm thumbnail retained.

## Audio inventory, provenance and integration

**32 new unique MP3s; 0 pre-existing recordings reused or modified.** Lesson 201 references 19 assets; lesson 202 references 14; `casa` is shared, so 19 + 14 − 1 = 32. Existing MP3s were full listening/conversation clips rather than an appropriate isolated-vowel/stress bank.

| New asset group | Files | Use |
|---|---:|---|
| `vowel-a/e/i/o/u.mp3` | 5 | 201 isolated models |
| `casa, mesa, vino, moto, luna, misa, peso, piso, pelo, palo, cosa` | 11 | 201 word models/contrasts; casa also 202 |
| `vowels-phrase-1/2/3.mp3` | 3 | 201 imitation and oral recall |
| `publico-initial/middle/final`, `termino-initial/middle/final` | 6 | 202 optional stress contrasts |
| `papel, telefono, cafe, hablo-present, hablo-past` | 5 | 202 words and optional contrast |
| `stress-phrase-1/2.mp3` | 2 | 202 habit exchange |
| **Total** | **32** | All used; none orphaned |

Paths: `public/audio/phonetics/*.mp3`. Exact scripts, clip IDs, lesson IDs, voice, rate, codec, duration and SHA-256 are in `app/phonetics/audio-manifest.json`. Configured model: **Microsoft synthetic `es-AR-TomasNeural`, −10%**, produced through scratch-only `edge-tts 7.2.8`. No new repository dependency or secret. This follows the repository's finite MP3/voice-metadata convention; it is not a claim that a generator was previously committed. No browser TTS, human recording or verified native accent is claimed.

**File validation PASS:** all 32 files exist, have distinct hashes, decode fully with ffmpeg, are mono MP3 at 24 kHz, have nonsilent decoded PCM and durations **1.536–2.544 seconds**. Total **398,880 bytes / 66.48 seconds**. Every model/trial/phrase reference maps to a manifest entry assigned to that lesson; every new file is used. All 32 are retained in the protected build's public assets.

**Actual listening QA PENDING:** no clip was auditioned. Neither text metadata nor full decode verifies stable isolated vowels, the correct realization of accent-sensitive homographs, intelligibility, naturalness, accent or transcript concordance. All 32 clips must be listened to before publication, especially isolated vowel spellings and `publico/termino/hablo` forms. Regenerate only a confirmed faulty clip under the same authorized scope if that review finds one.

The existing AudioDeck is reused for native play/pause/replay, seek, load/error states and optional slow playback. Optional props hide its decorative bars and supply truthful phonetics status text; defaults preserve old screens. Cleanup captures and pauses the actual audio element on unmount, avoiding a nulled-ref race. Tests cover that fix, native handlers, replay, seek, completion, errors, source changes and unchanged default rendering. Lesson reset changes the player key even when the source is the same.

The `/clase/[id]` integration executes **after the unchanged access guard**. Only the new `phonetics` media prefix is added to the FREE asset allowlist because IDs 201/202 were already FREE. Existing `hotel/latam` allowances and every old private prefix remain unchanged. This is media registration, not a change to auth/entitlement logic. The protected build retains **47 premium media files and 60 private client modules**, excluding **288 private paths** from public assets.

## State and teacher control in phonetics

Per-item state separates completed playback, selected answer, checked feedback, revealed solution and whether text support was ever used. Playback completion is not evidence of comprehension. Changing an answer invalidates feedback; retry keeps the fact that support was previously shown, so assisted work cannot become unaided credit. Copy distinguishes currently visible text from text used earlier. Progress counts **reviewed responses**, not hearing skill or pronunciation mastery.

Teachers may move between stages, replay, reveal as an accommodation, skip optional contrasts, revisit attempts, hide phrase models, record three manual observations and restart the lesson. Reset clears answers, support, observations and player state. Lesson identity prevents cross-lesson leakage. State is local and is not persisted across reloads; the UI says so. No D1, storage service or learner recordings were introduced.

## Thumbnails and visual evidence

All four original files were visually inspected and retained byte-for-byte. No new image or overwrite was necessary.

| ID | Asset | Dimensions | Observation |
|---|---|---|---|
| 45 | `/grammar-worlds/quantity-market.webp` | 1672 × 941 | Nocturnal market identity; also used by 112, therefore preserved |
| 47 | `/grammar-worlds/adverb-tower.webp` | 1672 × 941 | Nocturnal tower; also used by 113/115/211/213, preserved |
| 201 | `/catalog-thumbnails/vowel-resonance.webp` | 1600 × 900 | Five acoustic/glass vessels; sound identity supports vowel focus |
| 202 | `/catalog-thumbnails/spanish-rhythm.webp` | 1600 × 900 | Rhythmic arches/orbs/instrumental forms; supports sound and rhythm |

One permitted local browser-preview attempt returned **`net::ERR_BLOCKED_BY_CLIENT` for `http://127.0.0.1:8765/?id=201`**. No interactive screen, screenshot or mobile walkthrough was obtained. No deployment was used to work around the restriction.

Fallback evidence: all nine GrammarWorlds server-render; both actual free class pages render audio and production; actual Library SSR exposes the existing 201/202 links while PRO 38 stays locked; real handler tests exercise interactions; existing thumbnail files were inspected; responsive CSS was reviewed (grammar single-column breakpoint 700 px; phonetics 650 px; wrapping controls, visible focus, reduced-motion rules, large touch controls); audio files were decoded. These checks do **not** establish actual layout, browser playback, tab order, screen-reader use or catalog crop readability.

## Quality Standard v2 gates, per lesson

PASS below refers to the specified source/executable evidence only. PENDING gates prevent publication. No lesson is labelled fully compliant or publication-ready.

| Gate | 45 | 47 | 201 | 202 |
|---|---|---|---|---|
| Pedagogy | PASS: observe → basket → recall → adjusted order | PASS: place/time → move → recall → partner location | PASS: model → discriminate → imitate → personal reuse | PASS: hear → locate → verify → habit/routine |
| CEFR / PCIC | PASS: supported A1; advanced quantifiers optional A2 | PASS: supported A1; manner/cause optional A2 | PASS: concrete A1 words/phrases | PASS: A1 core; advanced forms receptive/imitative only |
| Originality | PASS: intentional repair, original banks retained | PASS: original bank retained; own spatial task | PASS: original word focus; paired contrast repetition intentional | PASS: original stress focus; related forms are the learning contrast |
| Visual design | PENDING: source/asset review only | PENDING: source/asset review only | PENDING: SSR/CSS/assets only | PENDING: SSR/CSS/assets only |
| Interaction | PASS: real count/quiz/reveal/reset handlers | PASS: real position/quiz/reveal/reset handlers | PASS: model/trial/help/retry/replay/reset handlers | PASS: neutral choice/reveal/optional/phrase/reset handlers |
| Mobile | PENDING: responsive CSS inspected, no viewport use | PENDING: same | PENDING: same | PENDING: same |
| Accessibility | PENDING: semantic controls, labels/focus and alternatives inspected; no full keyboard/AT walkthrough | PENDING: same, caption matches SVG | PENDING: audio/text accommodation and labels inspected; no full walkthrough | PENDING: same |
| Content correctness | PASS: all 8 items / 24 choices and quantity states | PASS: all 8 items / 24 choices and positions | PENDING: written target/articulation review passed; sound concordance unauditioned | PENDING: written stress/syllabification review passed; sound concordance unauditioned |
| Language / register | PASS: voseo, scoped bilingual help; regional gender not penalized | PASS: voseo, explicit task contexts | PASS for script: concise Spanish, no English sound equivalents; voice realization pending Audio gate | PASS for script: coherent voseo and beverage transfer; voice realization pending Audio gate |
| Audio | N/A: teacher-led grammar, no embedded audio requirement | N/A: same | PENDING: file validation PASS, every clip still needs listening | PENDING: file validation PASS, every clip still needs listening |
| State / routing | PASS: target key/reset; canonical route/access retained | PASS: same | PASS: actual class/Library path, FREE access, item/reset state | PASS: same |
| Tests | PASS: full bank and shared regression | PASS: full bank and shared regression | PASS: assets, state, routes and player | PASS: assets, state, routes and player |
| Thumbnail | PENDING catalog crop; source file inspected and preserved | PENDING catalog crop; file inspected/preserved | PENDING catalog crop; file inspected/preserved | PENDING catalog crop; file inspected/preserved |
| Teacher usability | PASS source review: selected core, hints, optional bank, reset and stop | PASS source review: same | PASS source review: stages, text support, optional help and observations | PASS source review: core/extension distinction and stop |
| Duration | PASS heuristic: explicit selected 45-minute route; classroom timing not verified | PASS heuristic: 45-minute route; not timed | PASS heuristic: 40-minute route within original range; not timed | PASS heuristic: 40-minute route with optional bank; not timed |
| Final production | PASS: partner adjusts a real order | PASS: partner finds object and confirms time | PASS: word dictation and personal sentences | PASS: real habit exchange and short routine |

Curricular references checked against communicative demand, not rare vocabulary or tense labels: [PCIC grammar A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_a1-a2.htm), §6.1 quantifiers and §8.1–8.2 adverbs; [PCIC pronunciation/prosody A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/03_pronunciacion_inventario_a1-a2.htm), §1.1 and §5.1.1–5.1.2 vowel quality/articulation, §3.1–3.2 syllables/stress and §4.1–4.2 rhythm/pauses. [RAE DPD calor](https://www.rae.es/dpd/calor) and [encima](https://www.rae.es/dpd/encima) informed the specific grammar corrections. No formal CEFR, PCIC or accessibility certification is claimed.

## Executed verification

The final combined run includes each test file once: all files from `npm run test:conversation`, plus the six files below. **181 passed, 0 failed, 0 skipped.** The subtotal is 137 conversation tests + 36 new repair tests + 4 Library information-architecture tests + 4 verbal-help contract tests.

```sh
node --test tests/grammar-wave1-repair.test.mjs tests/phonetics-wave1.test.mjs tests/phonetics-wave1-assets.test.mjs tests/audio-deck-wave1.test.mjs tests/library-information-architecture.test.mjs tests/verbal-help-contract.test.mjs
npm run test:conversation
npm run lint
npm run build
npx tsc --noEmit
git diff --check
```

| Check | Result / meaning |
|---|---|
| Grammar repair suite | 21 tests; complete bank, 48 choices, 81 quantity states, positions, resets, metadata, all nine SSR and seven preserved worlds |
| Phonetics interaction suite | 8 tests; actual Library/class integration, access guards, all 20 trials/all choices, no early answer reveal, oral stage/reset |
| Phonetics assets suite | 4 tests; all 32 exact scripts/hashes/decodes, every reference, independent target matrix, FREE media policy |
| AudioDeck suite | 3 tests; captured-element cleanup, native handlers and legacy defaults |
| Conversation regression | 137 tests; all Batch 1 banks, families, previews, level routing and protected imports preserved |
| Library / verbal-help contracts | 8 tests; existing information architecture and server-verified inline-access boundary |
| Lint | PASS, exit 0 |
| Protected build | PASS, exit 0; artifact validator confirms ESM Worker `default.fetch` and hosting manifest |
| TypeScript base vs final | Freshly measured **11 → 11**, exact diagnostic-line equality, **0 introduced / 0 resolved** |
| JSON / asset checks | Manifest parses; exact script/path/hash/lesson map and durations validated |
| Diff / preservation | `git diff --check` passed; scoped changes reviewed; historical docs/assets and unrelated records preserved |

TypeScript is **not globally clean**: inherited diagnostics remain in `app/api/billing/subscription/route.ts` (8 TS2367), `app/marketing/MarketingSections.tsx` (TS2367 and TS7053) and `app/mexico/map-data.ts` (TS2352). Those files were not changed. Existing build route-classification notices are not new TypeScript failures.

`npm test` as a whole and `scripts/test-worker.mjs` were intentionally not run because they chain D1-backed/mutating harnesses outside the permitted scope. The listed direct suites, lint and safe protected build provide the relevant branch evidence without touching D1. No claim of repository-wide CI or live-production testing is made.

Independent review reran the original 34 repair tests, then checked the final metadata/Library additions and tested that unrelated ledger mutations still fail preservation. No critical/important issue was found. The one minor finding, stale 3D/duration catalog promises, is fixed. Review explicitly declined to judge audible quality, real browser/mobile/AT behavior, observed classroom timing and production behavior without that evidence.

## Changed files and preservation

The final Wave 1 diff from the requested base contains **61 files**, including the 32 new MP3s and this report.

| Area | Files / scope |
|---|---|
| Grammar repair | `app/grammar-worlds/GrammarWorld.tsx`, `data.ts`, `data-next.ts`; new `GrammarRepair.tsx`, `repair-data.ts`, `repair-state.ts`, `repair.css` |
| Phonetics | New `app/phonetics/PhoneticsLesson.tsx`, `data.ts`, `state.ts`, `navigation.ts`, `phonetics.css`, `audio-manifest.json` |
| Minimal integration | `app/Library.tsx`, `app/clase/[id]/page.tsx`, `app/listening-studio/AudioDeck.tsx`; additive FREE media prefix in `app/access-policy.ts`; only two target subtitle/duration pairs in `app/lesson-catalog.ts` |
| Audio | 32 new `public/audio/phonetics/*.mp3` |
| New tests / fixture | `tests/grammar-wave1-repair.test.mjs`, `tests/phonetics-wave1.test.mjs`, `tests/phonetics-wave1-assets.test.mjs`, `tests/audio-deck-wave1.test.mjs`, `tests/fixtures/grammar-wave1-baseline.json`, `tests/helpers/batch1-preservation.mjs` |
| Historical test integration | `tests/conversation-batch1.test.mjs`, `tests/conversation-batch1-run2.test.mjs`, `tests/conversation-batch1-run3.test.mjs`, `tests/conversation-batch1-run4.test.mjs`; original fixtures unchanged |
| Report | `docs/lessons/quality-v2-repair-status.md` |

Historical Batch 1 hashes remain authoritative. The test helper reverses only the exact approved additive FREE audio prefix/comment and the two exact target subtitle/duration pairs before comparing the original bytes/ledger hashes. Every other access-policy byte and catalog field, all IDs/routes/access and all unrelated records still participate unchanged. Unexpected replacement text does not normalize. New behavioral assertions separately verify the approved changes. This does not replace the old fixtures with a snapshot of new behavior.

The other **61 audited non-conversation lessons** were not edited. Shared-component effects are limited and tested: seven other GrammarWorlds retain normalized SSR/data; AudioDeck retains its default copy/bars/controls with the corrected pause cleanup; all old media access classifications remain intact. `app/additional-samples.ts`, four target thumbnail bytes, all existing MP3s, Conversation Batch 1 lesson data/assets and its historical status remain unchanged. Catalog registration count remains **114**; only the two approved display-copy pairs differ.

The four historical Quality v2 files are byte-for-byte preserved: `SPANISHCUE_QUALITY_STANDARD_V2.md`, `NON_CONVERSATION_LIBRARY_AUDIT.md`, `non-conversation-library-audit.json`, `NEXT_20_LESSON_PRIORITIES.md`. No historical audit was rewritten.

## Intentional deferrals and stop condition

Before any later authorized publication: inspect entry/task/feedback/close in a real browser, mobile layout, focus and accessibility, actual thumbnail crops, native audio controls; listen to every new clip and verify its audible target/transcript; preferably time a teacher walkthrough. These gates remain pending, not failed or falsely passed. Unrelated inherited TypeScript errors stay outside scope.

**Wave 1 implementation stops here. No Wave 2 or next-priority lesson was started.** Nothing was merged or deployed. No production systems/data, D1, authentication, Firebase, billing, Paddle, PayPal, Resend, secrets, environment variables, domains, release-controller state or deployment state were modified. All delivery is source commits on the named repair branch.

## Repair Wave 2: implementation and verification, 2026-09-28

This is a newly authorized implementation run for **131, 133, 16 and 108 only**, starting from Wave 1 final `e8f38659588526253c51f638b39e337682729363`. The entire Wave 1 report above is preserved verbatim as history. Branch: `codex/quality-v2-repair-wave2-20260928`, created on GitHub before implementation. Canonical main rechecked: `5d6733a9b9404bbc17bf6999530eb48ffb574a3e`; main versus requested base is **0 / 27**, so no newer canonical changes need integration. No open PR overlaps were returned. Lost local checkout was recovered by a new clone of the pushed branch; no work or branch was reset, cleaned or pruned.

**Final source status:** the four authorized repairs are implemented and pushed. **228 tests pass; lint and protected build pass; TypeScript remains at the same 11 inherited diagnostics with zero new errors.** Independent review has no outstanding findings. Browser visual/mobile/accessibility QA and human listening remain **pending**. This is source-complete, **not approved for publication**. The diagnosis and selected design below were preserved in the first checkpoint before implementation.

| ID | Exact title | Category / level | Historical grade | Access / route |
|---|---|---|---|---|
| 131 | Última Llamada | Escucha / A2 | C | PRO / `/ultima-llamada` |
| 133 | Habitación 508 | Escucha / B2 | C | PRO / `/habitacion-508` |
| 16 | ARGENTO | Vocabulario / A1 | C | FREE / `/argento` |
| 108 | El Banco de Palabras | Vocabulario / primary A2, advertised A2–B1 | B | PRO / `/banco-de-palabras` |

### Confirmed defects before editing

- **131:** at 17:46 the current source permits collecting ready coffee or waiting for Nina under defensible assumptions, but accepts only walking directly to C4. Saved notes contain only IDs and never appear in the decision. Previous/next navigation can expose the next transcript. Wrong choices reveal the key and lock further attempts. A sidebar title reveals the seven-minute answer, synthetic receipt clocks are not supported by recordings, and an ended callback is conflated with readiness. Six scripts/files and the final oral-response concept are substantial assets to preserve.
- **133:** witness-report labels at 22:14–23:18 conflict with a guest recounting the following morning at 05:30. Three-card timelines contain exact minutes or facts not spoken by the relevant witness. Guest/neighbor/global key times disagree; the precise moment/cause of key blocking is not established. Sorting exposed numbers does not require listening. The introduction supplies the global conclusion; the decision supplies a solved chronology before reconstruction. Laura's question conflates the complaint she actually describes with cake evidence heard later. Manager-resolution transcript is authored but not exposed. Six testimonies plus resolution are preserved candidates.
- **16:** the masthead labels a vocabulary lesson as conversation. All lexical/support answers remain visible and there is no delayed recall. Seventy-two follow-up supports are assigned by array index rather than meaning. `boludo` is glossed as uncomplicated friend address and `ni en pedo` lacks vulgar-register/context guidance. Six expanded slang explanations also need relationship/use conditions and neutral alternatives. `cancha` is narrower than its translation suggests; kiosk `papas` needs explicit snack context. Full bank: 12 worlds, 144 occurrences / 133 distinct Spanish strings, 72 follow-ups, 23 supports, six expanded slang entries and two dialogue models.
- **108:** matching reveals English regardless of the support toggle; topic-only practice ignores other filters and saved targets. Saved IDs are volatile despite next-class promises. Random targets can immediately repeat; delayed retrieval is absent. Canonical lemma labels produce invalid completed gaps for article/person/gender-sensitive entries; one gap uses a different blank marker. Matching timeouts survive resets; denominators assume five even for smaller sets; speaking timer may outlive its context. Full bank: 60 cards, six topics, 20 nouns / 12 verbs / 7 adjectives / 21 chunks.

### Selected bounded repair design

- **131:** keep all six recordings/scripts; neutral pre-listen prompts, global then detail work, editable check/hint/retry, deliberate text accommodation, source-tagged saved evidence actually used in the final plan. Give conditional feedback for all three defensible plans without inventing certainty. Oral response to Nina and the driver uses the heard changes; personal questions remain optional.
- **133:** retain seven recordings/scripts; frame reports as the morning after the incident, with dates explicitly editorial. Separate reported facts, speaker hypotheses and unsupported claims; reconstruct untimed events using only defensible partial-order constraints. Do not force a global order between unconnected testimonies or claim a proven cause of key failure. Hide model reconstruction until requested; make manager transcript accessible and compare with the learner's prior spoken remedy.
- **16:** preserve all worlds and lexical occurrences; repair glosses/context, author relevant support and safe active chunks, make Spanish the default with optional translations. Context choice leads to hidden recall; later changed-context recall follows an actual task in another world. Teacher observations assess oral variants. Risky slang remains available for understanding with explicit caution and neutral production alternatives. Preserve roleplays, focus-managed modal and imagery.
- **108:** preserve four modes and 60 lexical entries. An explicit session selection captures the filtered/saved target set for every mode. Spanish-definition matching is default. Definition-to-word recall then gap-to-inflected-model recall returns after intervening targets; tiny pools get an explicit oral interlude. Model comparison/teacher confirmation accepts valid variants without brittle free-text grading. Versioned local-only saved IDs have honest persistence/failure messaging. Finish with a short contextual exchange using a few targets.

The actual audio change count is **0**: 13 existing files are reused with technical manifests, retaining exact scripts, configured voices and bytes. Actual listening has not been performed. Existing multi-variety cast metadata is preserved; no random new voice or claim of verified accent is introduced. If a concrete audio/script defect later requires synthesis, the owner has explicitly authorized Microsoft MP3 generation for 131/133; no synthesis is presumed necessary now.

Root owns cross-lesson preservation, manifests, documentation, final verification and pushes; independent Astra implementers own the two listening pages, ARGENTO and WordBank respectively. No shared component changes were required or made. Existing IDs/routes/catalog metadata/access, thumbnails, Conversation Batch 1 and Wave 1 code/tests/audio remain protected. No production/D1/auth/billing/environment/release work, merge or deployment. No Wave 3 or Priority 9 lesson.

### Recovery and source checkpoints

| Checkpoint | SHA | Preserved outcome |
|---|---|---|
| Required Wave 1 base | `e8f38659588526253c51f638b39e337682729363` | All Wave 1 repairs, 32 phonetics MP3s, tests and report history. |
| Wave 2 diagnosis | `c2eaee9fcfcc111dcd5f0c59f8ecbfbd5403ff6c` | Pre-edit defects, bounded design and 70-record preservation fixture, pushed early. |
| ARGENTO / media checkpoint | `12318099eac4c555cef976828ed37fc194db12ca` | Contextual vocabulary retrieval, 13-clip manifests and executable preservation checks; 15 checkpoint tests passed. |
| Integrated implementation | `b3c70d5ea53a890c13ef485b3871f82d151fc2e0` | Four repaired lessons, final review fixes and 47 Wave 2 tests; 228 combined tests passed. |

The final documentation commit follows these checkpoints on the same branch. All commits descend from the requested Wave 1 base. No PR, main merge or release operation was performed.

### Implemented repair: 131, Última Llamada

**ESCUCHA · A2 · PRO · historical audit C.** Airport announcements, a friend's message, a ready-order message, directions and a driver's message remain the central scenario. The six clips total **86.424 seconds**. Speakers/configured varieties remain Anuncio (Spain), Nina (Argentina), Cafetería (Colombia), Aerolínea (Mexico), Pasajera/Pasajero (Peru/Spain) and Diego (Colombia). These are inherited voice declarations, not an ear-verified accent assessment.

- Neutral signal names replace answer-bearing sidebar clues. Unsupported receipt timestamps and the promised live-changing board are removed. **17:46 is explicitly a scenario clock**, without a running countdown.
- Each signal now has prediction, a first-pass oral gist, purposeful second listening, an editable detail answer, check, hint, retry and deliberate reveal. The complete six-question bank was reviewed against all script segments. Wrong answers no longer lock the activity or automatically reveal the full key.
- Previous/next/sidebar/stage navigation hides the transcript. Replay remains available through the existing AudioDeck; changing the active signal/reset remounts the deck. Text accommodation is available deliberately and recorded separately from audio completion. An ended callback is labelled only as an audio finishing, never comprehension or mastery.
- Verified or deliberately revealed facts can be stored, removed and consulted in the mission with their source and a return link. The first B12/18:10 announcement is distinguished from the updated C4/17:55 boarding and 18:15 closure. The seven-minute walk is correctly located **from the speakers' position**, matching “desde aquí.”
- All three plans receive conditional feedback. Walking directly is a low-risk plan under the scenario assumptions, approximately 17:53. Coffee is already ready; collection time is unknown and cancellation is at 17:50, so it cannot be categorically rejected. Waiting for Nina depends on an uncertain 18:05 arrival; adding roughly seven minutes gives approximately 18:12, with little margin and her explicit request not to wait once boarding is called. These are planning estimates, not heard arrival guarantees.
- The close requires a spoken message to Nina using the changed gate/time, a reason and a request, a partner response about coffee, and a message to Diego about a possible delay. The teacher manually observes the outcome. All eight original personal questions remain optional extensions. Reset clears attempts, notes, assistance, plan and observations; reload persistence is explicitly absent.

The visual world remains the airport and signal board. CSS improves task contrast/readability, primary touch targets, narrow-screen flow and reduced motion. The shared audio component and thumbnail are unchanged. The estimated teacher route is **25 + 10 + 10 minutes**; classroom timing is unobserved.

### Implemented repair: 133, Habitación 508

**ESCUCHA · B2 · PRO · historical audit C.** The hotel incident remains a six-voice investigation and professional response, with **219.120 seconds** across seven clips. Laura (Spain), Tomás (Colombia), Marisol (Peru), Iván (Mexico), Julián (Argentina) and Ana (Colombia, also the response) retain their configured voices and scripts.

- Reports are framed as morning-after interviews. Day 1/day 2 and the case-response time are explicitly **editorial scenario framing**, not claimed audible recording timestamps. Fabricated exact-minute event sorting and the prematurely solved global timeline are removed.
- Global perspective precedes detailed evidence work. Each witness has three authored assertions, **18 total**, classified as declared, the speaker's hypothesis or unsupported. “Declared” is explained as a report, not independently proven fact. Each key/feedback quote is grounded in the relevant preserved script. Laura is no longer asked to account for the cake's destination before Iván supplies that information.
- Eight events are reconstructed with arrow controls and **seven evidenced precedence constraints**, not a single prescribed sequence. All **40,320 permutations** are evaluated against an independently specified relation set in tests. Cake dispatch has no fabricated minute or fixed ordering relative to housekeeping/key failure. A housekeeping-induced block remains a hypothesis; approximate testimony is not converted into false precision.
- Evidence relations appear only after deliberate reveal; they are not a pre-solved answer sheet. Multiple compatible orders are accepted. The learner proposes a spoken remedy before the manager comparison, with an explicit teacher-guided override.
- The manager's existing transcript is now available as deliberate support. Three response checks verify measures actually announced, and permit correction after feedback. Final roleplay uses two voices, distinguishes a reported fact from a hypothesis, proposes a proportionate remedy and answers a partner's objection. All eight original broader discussion prompts remain optional extensions.
- All witness/transcript/navigation/reset states are explicit and tested, including alternative valid ordering through actual arrow handlers. Speech judgments remain manual. The case-room visual identity and thumbnail stay intact; no decorative waveform is shown. Mobile flow, touch controls and reduced-motion CSS are improved structurally.

Estimated teacher route: **27 minutes** for the six voices with two listening purposes, **8** for reconstruction/proposal/comparison, **10** for oral defense/revision. The teacher selects an extension rather than rushing through all questions; timing remains an estimate.

### Implemented repair: 16, ARGENTO

**VOCABULARIO · A1 · FREE · historical audit C.** All **12 worlds, 144 Spanish lexical occurrences / 133 unique strings, 72 original follow-up questions, 23 shared supports, 12 scene-photo references, six expanded slang entries and both four-turn dialogue models** remain available. Model spelling “re copado” becomes “recopado”; the lexical bank's Spanish strings are otherwise preserved.

- The masthead now correctly says Vocabulario. Spanish is the default; English translations are optional. Seventy-two separately authored supports replace the unrelated index-based help assignment.
- Four English glosses are corrected: `boludo` is potentially insulting/context-dependent; `ni en pedo` is vulgar; `cancha` is a playing field/pitch, not only a stadium; kiosk `papas` explicitly means packet crisps/chips in that context. The intensifier is presented as a spoken combination, with normative `rebueno`/`recopado` examples.
- Register guidance gives a relationship/context, a neutral alternative and active/receptive scope. `boludo`, `ni en pedo` and `quilombo` are receptive-only in this A1 route and removed from suggested roleplay production. The complete reference bank remains available. Regional material is not presented as exclusive to Argentina.
- **36 safe active chunks**, **12 contextual choice tasks with 36 explained options**, and **36 changed-context return prompts** were authored. Meaning/context recognition leads to oral recall with the full bank, page supports, dialogue models and floating help hidden. A deliberate model comparison supports retry; valid natural alternatives are teacher-assessed.
- A registered recall attempt returns only after a **subsequent correct contextual response in another world**. Navigation alone cannot unlock it. The later situation changes while the useful expression is reused. Return, help, teacher observation and reset are implemented and tested.
- Each world has a short oral close: at least two turns, two suitable expressions, a partner response and explicit teacher criteria. Reset also clears the page's older self-report marks. Session-only progress and reload behavior are disclosed. The existing focus-managed roleplay modal is preserved.

The selected 45-minute route is **Mate → Café → Argento → delayed returns → oral close**, with 4/9/9/6/7/10-minute planning budgets. Other worlds and long comparisons remain optional; this is not a requirement to learn 144 items in one A1 class. The van thumbnail and scene imagery are unchanged.

### Implemented repair: 108, El Banco de Palabras

**VOCABULARIO · primary A2, display A2–B1 · PRO · historical audit B.** This remains **one reusable bank**, not two separately authored CEFR variants. All **60 cards**, six topics of ten, **20 nouns / 12 verbs / 7 adjectives / 21 chunks**, and four modes are preserved. In the original data, only ID 40's inconsistent gap marker changes from two underscores to three.

- “Practicar estas tarjetas” takes an explicit snapshot of selected cards from the intersection of topic, lexical kind, search and saved-only filters. Matching, retrieval and speaking use that session. Exploration filters do not silently replace an active practice session. Applying a new selection explicitly resets rounds/observations. Search text is not repeated over hidden-answer practice, preventing answer leakage through a query.
- Matching uses Spanish definitions by default, with English only on request. Batches contain at most five pairs and show their actual denominator. Empty, singleton and small pools work. Synchronous matching removes the stale timeout/reset race.
- **All 60 completed sentences** have been assembled and reviewed, with 60 authored model completions, combinations and hints. Models handle articles (`una cuadra`, `tu barrio`, `el plato`, `la primera tarea`), existential `un embotellamiento`, pronouns (`quedarme`, `ponerme`, `concentrarme`), imperative `doblá` and agreement (`desordenada`, `emocionada`, `orgullosos`, `tener pendientes`). The model is one possible natural completion; no fragile exact-string answer matcher rejects valid alternatives.
- Retrieval has two passes: Spanish definition to word/chunk, then a later gap/context requiring the correct form. Other selected targets intervene; a one-card session inserts a spoken exchange before the same target returns. Supported attempts reappear later; hiding help does not erase the record that assistance was used. Progress measures teacher-observed attempts, not automatic mastery.
- Five selective use notes cover address/politeness/regional context, including the source's existing Argentina note for `rendir un examen`. The rest of the bank is not cluttered with unnecessary register badges.
- Saved IDs use a validated, versioned localStorage record with corruption/availability/write-failure handling. The UI explicitly says **this browser and device, no account synchronization**. Nothing is stored in D1. Saved does not mean learned.
- Speaking uses a scenario topic present in the selected bank, with one to three targets from that topic, avoiding unnatural mixed-topic combinations. Two suitable expressions are requested, or one for a singleton. Models are hidden until help; a changed detail prompts a response and agreement. Three teacher criteria confirm the close. Changing context resets observations/help/timer; leaving speaking pauses the optional, penalty-free timer.

The teacher selects roughly **6–8 cards from one topic** for a 45-minute core (5/8/5/12/10/5 minutes), with a B1 explanation/comparison extension in the same bank. Responsive CSS raises essential text, labels search, preserves keyboard/tap controls and improves focus/contrast. The six-world object-tray thumbnail is preserved.

### Exact audio inventory and validation

All paths below are unchanged repository assets under `public`. **Reused: 13. Added/replaced/deleted: 0. New Microsoft MP3s generated: 0.** No synthesis service or credentials were needed.

| ID | Exact path | Seconds |
|---|---|---:|
| 131 | `public/audio/ultima-llamada/salida.mp3` | 13.848 |
| 131 | `public/audio/ultima-llamada/amiga.mp3` | 15.528 |
| 131 | `public/audio/ultima-llamada/cafe.mp3` | 14.424 |
| 131 | `public/audio/ultima-llamada/cambio.mp3` | 15.840 |
| 131 | `public/audio/ultima-llamada/camino.mp3` | 14.616 |
| 131 | `public/audio/ultima-llamada/conductor.mp3` | 12.168 |
| 133 | `public/audio/habitacion-508/huesped.mp3` | 35.184 |
| 133 | `public/audio/habitacion-508/recepcion.mp3` | 28.728 |
| 133 | `public/audio/habitacion-508/housekeeping.mp3` | 29.016 |
| 133 | `public/audio/habitacion-508/room-service.mp3` | 31.584 |
| 133 | `public/audio/habitacion-508/vecino.mp3` | 28.248 |
| 133 | `public/audio/habitacion-508/gerente.mp3` | 35.160 |
| 133 | `public/audio/habitacion-508/decision-real.mp3` | 31.200 |

New manifests: `app/ultima-llamada/audio-manifest.json` and `app/habitacion-508/audio-manifest.json`. They record the inherited source commit, exact segment text/speaker/configured voice/rate, configured variety, byte count, SHA-256, duration and format. All clips are MP3, mono, 24 kHz. Totals: **519,966 + 1,316,379 = 1,836,345 bytes**, **305.544 seconds**.

**Technical audio validation: PASS for all 13.** File existence/nonzero length, unique paths and checksums, exact active content/manifest correspondence, original script preservation, `ffprobe` format/duration and complete `ffmpeg` decoding passed. Existing PRO audio prefixes remain protected. Manifests clearly mark inherited multi-variety voices as configuration, not independently verified speaker identity.

**Human listening completed: NO.** Audible transcript concordance, pronunciation, accent, pacing, speaker distinction, clipping/noise and pedagogical listening quality remain pending for every clip. No audible time-span annotation or listening-quality claim is fabricated from text or decoding.

### Complete-bank and duplicate review

The implementation and independent Astra review covered every active item, including the first, middle and final entries, not a sample. For 131 this means all six detail keys/options, saved facts and all three conditional plans; for 133 all six source questions, 18 assertions, seven relations, eight events and three manager checks; for ARGENTO all 144 original occurrences, 72 supports and 36 new chunks; for WordBank all 60 composed models and practice supports.

NFC/case/punctuation/whitespace-normalized duplicate inspection found:

- ARGENTO's preserved words intentionally recur across related scenes: `caliente` three times; `dulce`, `rico`, `probar`, `carne`, `comer`, `agua`, `grande`, `barato`, `caro` twice each. The 11 repeated occurrences explain 144 versus 133. The two duplicated original follow-ups are “¿Tomás algo caliente?” and “¿Comés con amigos?”, in relevant different scenes. They are retained as legitimate recycling.
- No duplicates among the 36 new ARGENTO chunk models, 36 changed-context cues or 12 contextual prompts.
- No duplicate WordBank headwords, Spanish definitions or completed contextual models across all 60 cards.
- No duplicate questions within either listening bank or assertions within the 18 hotel claims. Repeated first-listen instructions are stage guidance, not counted as new content.

Curricular references: [PCIC, A1–A2 oral genres §1.2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/07_generos_discursivos_inventario_a1-a2.htm) supports short personal/transactional exchanges and routine service/airport situations; [PCIC, B1–B2 oral genres §1.2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/07_generos_discursivos_inventario_b1-b2.htm) informs the hotel case's explanation, qualification and professional exchange. Review judges communicative demand and scaffolding, not word rarity. ARGENTO's productive core is short supported A1 exchange; sensitive slang is receptive. WordBank has a bounded A2 core and optional B1 expansion. No level change or formal certification is claimed.

Register references consulted: ASALE's [boludo](https://www.asale.org/damer/boludo), [pedo](https://www.asale.org/damer/pedo), [quilombo](https://www.asale.org/damer/quilombo), [copado](https://www.asale.org/damer/copado), [che](https://www.asale.org/damer/che), [posta](https://www.asale.org/damer/posta), and RAE's [re-](https://dle.rae.es/re-). Relationship and context determine whether a term is appropriate; regional examples do not imply national exclusivity.

### Verification results and limits

| Check | Result |
|---|---|
| Fresh preservation baseline before product edits | 181 passed, 0 failed, 0 skipped, serial TAP run. |
| ARGENTO targeted tests | 10 passed. All context choices, hidden resources, delayed eligibility, safe roleplay prompts, real reset and 12-world SSR paths. |
| Listening targeted tests | 15 passed. Full source maps/keys, all 40,320 chronology permutations, real navigation/retry/reveal/save/reconstruction/response/reset handlers and SSR. |
| WordBank targeted tests | 16 passed. All 60 composed models and actual contextual handlers, pool sizes 0–60, small matching groups, filtered snapshots, delays, assistance, persistence failures, oral-topic/singleton behavior, timer cleanup and search leakage. |
| Cross-wave preservation/media tests | 6 passed. 70 protected records, 32 Wave 1 MP3s, all four catalog records/access boundaries, 13 active script/asset maps and full media decode. |
| Final combined regression run | **228 passed, 0 failed, 0 cancelled, 0 skipped** in 14.84 seconds. Includes all 137 conversation tests, 36 Wave 1 tests, 8 library/verbal-help tests and 47 Wave 2 tests. |
| `npm run lint` | PASS, exit 0. No source warnings/errors. npm emits its inherited unknown `http-proxy` configuration notice. |
| `npm run build` | PASS, exit 0. Protected 60 private client modules and 47 premium media files; excluded 288 private paths; artifact validator confirmed ESM Worker `default.fetch` and hosting manifest. No publishing command run. |
| `npx tsc --noEmit`, fresh before/after | Both exit 2 with **the same 11 diagnostics**, exact diagnostic-line match; **0 new / 0 removed**. Eight inherited TS2367 billing diagnostics, two marketing TS2367/TS7053, one Mexico TS2352. Those unrelated files are unchanged. |
| `git diff --check` and scope inspection | PASS. Exactly the four authorized lesson directories, their tests/fixture and this appended report change. No shared component change. |
| Independent review | No outstanding findings. Walking-origin precision and singleton oral-completion copy were corrected and covered by regressions. |
| Browser attempt | One permitted local isolated preview attempt, using the actual four client components without starting Worker/D1, was blocked at `http://127.0.0.1:8765/argento` with `net::ERR_BLOCKED_BY_CLIENT`. **Visual QA did not pass.** No alternate deployment or browser-policy bypass was attempted. |
| Fallback | Actual-component SSR/handler tests, CSS breakpoint/readability/touch/reduced-motion review, source accessibility sanity checks, all four thumbnail images inspected, complete media technical validation. This does not prove rendered 320/390px, tablet/desktop, focus/zoom or screen-reader behavior. |

Reproducible targeted command: `node --test --test-concurrency=1 --test-reporter=tap tests/wave2-argento.test.mjs tests/wave2-listening.test.mjs tests/wave2-preservation.test.mjs tests/wave2-wordbank.test.mjs`. The aggregate run uses the exact files in `package.json`'s `test:conversation`, plus `tests/audio-deck-wave1.test.mjs`, `tests/grammar-wave1-repair.test.mjs`, `tests/phonetics-wave1.test.mjs`, `tests/phonetics-wave1-assets.test.mjs`, `tests/library-information-architecture.test.mjs`, `tests/verbal-help-contract.test.mjs` and those four Wave 2 tests, with concurrency 1 and TAP reporting. `ffmpeg`/`ffprobe` are needed for media tests. The D1-mutating full `npm test` harness was not run.

### Quality Standard v2 gate status per lesson

**PASS below means the stated source/content/test review passed; it is not release certification. PENDING gates keep all four lessons from publication approval.**

| v2 gate | 131 | 133 | 16 | 108 |
|---|---|---|---|---|
| Pedagogy | PASS: listen, integrate signals, respond | PASS: compare voices, reconstruct, defend remedy | PASS: context, hidden recall, return, exchange | PASS: meaning, matching, two retrieval passes, agreement |
| CEFR / PCIC | PASS: supported A2 practical planning | PASS: B2 evidence, uncertainty and professional response | PASS: supported A1 active core; risky slang receptive | PASS: A2 core, optional B1 extension in one bank |
| Originality / duplicates | PASS: original airport preserved, full bank checked | PASS: hotel dossier preserved, full bank checked | PASS: 12 worlds and original recycling preserved | PASS: 60-item six-topic bank preserved |
| Visual design | PENDING: asset inspected, browser blocked | PENDING: asset inspected, browser blocked | PENDING: asset inspected, browser blocked | PENDING: asset inspected, browser blocked |
| Interaction | PASS: checks/retry/source facts/conditional plan | PASS: assertions/partial order/response checks | PASS: context/recall/real delayed eligibility | PASS: selection/matching/recall/context/oral state |
| Mobile | PENDING: responsive source checked only | PENDING: responsive source checked only | PENDING: responsive source checked only | PENDING: responsive source checked only |
| Accessibility | PENDING: semantic/focus/reduced-motion source and accommodations checked; browser/AT walk pending | PENDING: same, with arrow alternative to drag | PENDING: preserved modal focus logic and labelled controls; browser/AT walk pending | PENDING: labelled search/selection, focus/tap source; browser/AT walk pending |
| Content correctness | PASS for complete scripts/keys/scenario reasoning; audible concordance pending under Audio | PASS for complete scripts/claims/partial order; audible concordance pending under Audio | PASS for complete lexical/context/support bank | PASS for all 60 composed models and alternatives |
| Language / register | PASS: inherited varieties clearly declared | PASS: uncertainty and reported-source language | PASS: active/receptive separation, contextual cautions | PASS: contextual chunks, address/region notes, valid variants |
| Audio | PENDING human listening; 6/6 technical PASS | PENDING human listening; 7/7 technical PASS | N/A: teacher-led vocabulary; no embedded audio claimed | N/A: teacher-led vocabulary; no embedded audio claimed |
| State / routing | PASS: navigation/reset/maps/access preserved | PASS: navigation/reset/partial-order maps preserved | PASS: delayed/reset/route/FREE preserved | PASS: session/local save/reset/route/PRO preserved |
| Tests | PASS: 15 listening + 6 shared checks | PASS: 15 listening + 6 shared checks | PASS: 10 targeted + 6 shared checks | PASS: 16 targeted + 6 shared checks |
| Thumbnail | PASS asset relevance/path/bytes; catalog crop browser check pending | PASS asset relevance/path/bytes; catalog crop browser check pending | PASS asset relevance/path/bytes; catalog crop browser check pending | PASS asset relevance/path/bytes; catalog crop browser check pending |
| Teacher usability | PASS source route/help/alternatives/reset; live walkthrough pending | PASS source route/interpretation/override/close; live walkthrough pending | PASS selected route/helps/safe targets/reset; live walkthrough pending | PASS exact selected bank/observations/local-save disclosure; live walkthrough pending |
| Duration | PASS as labelled 45-minute estimate; unobserved in class | PASS as labelled 45-minute estimate; unobserved in class | PASS selected 45-minute route; original 70-minute catalog bank preserved | PASS selected 45-minute route; original 60–90-minute reusable-bank catalog preserved |
| Final production | PASS: Nina/Diego response uses heard data | PASS: two-source remedy, uncertainty and objection | PASS: two-turn contextual exchange with teacher observation | PASS: coherent selected-topic agreement, changed detail and recall |

### Preserved assets, changed files and deferred work

All four thumbnails were viewed and remain byte-identical: `public/listening-premium/ultima-llamada.webp` (airport announcements/travel decisions), `public/listening-premium/habitacion-508.webp` (guest/staff incident), `public/chespanish-guide-van.webp` (Argentine lexical world) and `public/previews/word-bank-studio-v91.webp` (six concrete everyday semantic worlds). None materially misrepresents the repair. **No images were generated or overwritten.**

Exact Wave 2 changed-file inventory, relative to the required base (**25 files**):

```text
app/argento/ArgentoPractice.tsx
app/argento/data.ts
app/argento/page.tsx
app/argento/practice-data.ts
app/argento/style.css
app/banco-de-palabras/WordBank.tsx
app/banco-de-palabras/data.ts
app/banco-de-palabras/practice.ts
app/banco-de-palabras/state.ts
app/banco-de-palabras/style.css
app/habitacion-508/audio-manifest.json
app/habitacion-508/content.json
app/habitacion-508/page.tsx
app/habitacion-508/reconstruction.ts
app/habitacion-508/style.css
app/ultima-llamada/audio-manifest.json
app/ultima-llamada/content.json
app/ultima-llamada/page.tsx
app/ultima-llamada/style.css
docs/lessons/quality-v2-repair-status.md
tests/fixtures/wave2-preserved.json
tests/wave2-argento.test.mjs
tests/wave2-listening.test.mjs
tests/wave2-preservation.test.mjs
tests/wave2-wordbank.test.mjs
```

Intentionally deferred: real browser desktop/tablet/320/390px/focus/zoom/AT walkthrough, all 13 human listening checks, and observed classroom pacing. ARGENTO's original external scene-photo URLs are preserved; their actual browser loading/cropping remains unverified. Catalog metadata is preserved exactly as requested, including 131's inherited “en tiempo real” promotional phrase and the original large-bank durations/WordBank “quiz” wording. The lesson itself explicitly states a simulated clock and the new teacher-assessed retrieval task. A future authorized metadata pass may align that copy; it does not justify modifying the protected catalog or Wave 1 tests in this run. Eleven inherited TypeScript errors are documented rather than repaired outside scope. No automatic pronunciation/speech assessment or cross-device progress synchronization is claimed.

**Preservation confirmed:** Wave 1's source, all 32 MP3s, tests and the first 31,767 bytes of this report remain exact; the 70-record SHA-256 fixture verifies them plus protected catalog/docs/thumbnails. Conversation Batch 1 remains intact, with all 137 conversation tests passing and no conversation source changes. All original listening files/scripts and unrelated lessons, route IDs, metadata and access architecture are preserved. No changes to dependencies or shared components.

**Operational boundary:** nothing deployed, merged or published; no PR created; production, D1, authentication/Firebase, billing/Paddle/PayPal, Resend, secrets, environment configuration, domains and release-controller state untouched. Work stops after these four lessons. Repair Wave 3 and Priority 9's new lesson were not started.

## Repair Wave 3

### Authorized scope and source diagnosis checkpoint (2026-09-28)

Implementation is explicitly authorized for **213, 217, 218 and 38 only**, including finite Microsoft synthetic MP3 generation for 38. Branch: `codex/quality-v2-repair-wave3-20260928`, created remotely from the required Wave 2 final commit `2b48f28bc7b25f19c650e52cece8f59eca352936`. Freshly fetched canonical main is `5d6733a9b9404bbc17bf6999530eb48ffb574a3e`; `main...base` is 0/31, so there are no newer main commits to incorporate. Historical report bytes above this heading are preserved verbatim. No deployment, merge, production service change or Wave 4 is authorized.

| ID | Exact source title | CEFR contract | Category / access | Existing canonical route | Audit |
| --- | --- | --- | --- | --- | --- |
| 213 | Antes, después, cuando | A2 | Gramática / PRO | `/antes-despues-cuando` | C |
| 217 | Pero hay un matiz | B1 | Gramática / PRO | `/pero-hay-un-matiz` | C |
| 218 | La persona que tengo en mente | B1 | Gramática / PRO | `/la-persona-que-tengo-en-mente` | C |
| 38 | Spanish Mouth Lab | A1 primary; advertised A1–C1, one bank | Fonética / PRO | `/clase/38` | D |

#### Exact defects recorded before product edits

**213:** target is `antes de` / `después de` + infinitive for same-subject sequencing, plus habitual/factual `cuando` + present. The antes explanation reverses chronology: in “Antes de salir, desayuno”, salir is later. The después preview disagrees with its correct authored example. The cuando preview and decisions 3/6/9 invert the intended event framing. Repair 3 leaves a grammatical después alternative without a constraining context; repair 4 labels a valid equivalent sentence erroneous. The same-subject boundary incorrectly appears to cover cuando clauses too, and a closing instruction overgeneralizes the restriction on `de`. There is no actual event ordering behind the timeline-labelled spans.

**217:** target is negative coordination `ni…ni`, `sin embargo`, and adversative `aunque` in B1 messages. Three accepted postverbal ni strings lack `no`: “El problema es ni el dinero ni el tiempo”, “Quiere viajar ni en tren ni en avión”, “Fue ni Pablo ni Lucía”. Activation 2/5 assert positive propositions when the intended facts are negative. The discontinuous ni pattern is represented as a single middle connector; its explanation and repair 2 misdescribe the additional negation. Repair 2 starts with a valid sentence but labels it erroneous; aunque models need punctuation; repair 3 calls concession temporal; repair 4 changes denials into assertions without explicit intended facts. The supposed message mixer has no meaningful manipulation state.

**218:** target is identifying `que`, explanatory human `quien` (also valid `que`), and clear reference in indicative clauses. The quien model and decisions 4/9 lack antecedent commas and reject explanatory que. Repair 1 arbitrarily chooses Marta rather than her friend as the Valencia resident; repair 3 asserts uniqueness without an identifiable candidate set; repair 4 changes explanatory into restrictive meaning. Retrieval 5 treats explanatory que as identifying, and the final oral starter lacks a comma. The advertised person finder has no candidates or filters.

**Shared grammar experience:** each complete target bank has 5 activation prompts, 3 patterns, 10 decisions, 4 repairs, 5 retrieval prompts and 3 production situations; 213 has 7 final conversation prompts, 217/218 have 6. Every option needs review as a complete rendered sentence. The shared engine immediately reveals the correct answer after a wrong selection, accepts one key only, has no explicit check/hint/retry/reveal/reset, and leaves retrieval support visible. Existing original oral banks are useful and will be retained with focused communicative closings. Five unrelated syntax banks must retain their original data and legacy rendering.

**38:** subtitle is “Mapa articulatorio, vocales, R, consonantes y ritmo con una ruta graduada y práctica oral”; catalog duration 60–75 min. Six source stations cover mirror diagnosis, pure vowels, tap/trill, consonant placement, stress/rhythm and transfer. Four oral prompts cover articulation explanation, teacher-led contrast, changing speed and 60-second speech, followed by a three-day routine. The generic route and inline Library rendering have no audio, diagram, perception state or oral completion check and can be traversed silently. No explicit regional phonetic variety exists beyond voseo UI. The featured Library copy additionally promises diagnosis of English and six other language habits without an implemented bank. All original stations, oral prompts and homework remain useful optional teacher reference, not five newly invented level variants.

#### Bounded implementation and verification plan

1. Preserve and fingerprint prior work. Fresh base TypeScript measurement: **11 inherited diagnostics**, in the same billing, marketing and Mexico files as Wave 2. Do not change those files. Measure final delta rather than assuming this count.
2. Repair every answer-bearing item and explanation demonstrated above. Opt in only the three target slugs to a new renderer, preserving legacy shared visuals/CSS and the other five banks. Add distinct event ordering, negative-message transformation and candidate filtering, context-based accepted alternatives, concealed retrieval support, focused hints and recoverable state. Keep the bank scope; do not introduce A2 temporal subjunctive or entire negative/relative paradigms.
3. Give Mouth Lab a roughly 45-minute core: hear/notice (5), articulate/repeat (10), contrast (8), phrase imitation (7), produce/reuse (15). Focus on simple/multiple R, retaining vowels, other consonants, stress and broader transfer as the original optional stations. Reuse AudioDeck without altering shared behavior. Audio completion plus explicit heard confirmation and teacher observation are evidence of practice, not automatic pronunciation grading or proof that the physical device was audible. Accessible text support must not count as auditory success.
4. Generate eight finite MP3s using Microsoft `es-AR-TomasNeural`, configured rate `-10%`: `pero`, `perro`, `caro`, `carro`, `rojo`, `Mi perro corre.`, `El carro es caro.`, `Quiero el carro rojo, pero es caro.` The voice locale is configured, not human verified. General-Spanish rhotic targets remain unchanged. No existing recording directly supplies these core models. No runtime TTS dependency. Record scripts, hashes, bytes, duration, codec and actual task mappings; decode every file.
5. Serve the reconstructed experience at the same `/clase/38` URL through a guarded static page, preserving the existing dynamic page and its metadata contract. Minimal ID38-only Library link/copy adjustments are required so the actual surfaced lesson opens the new experience. No entitlement-policy change. Extend the prior preservation assertion with an exact reversible exception for only these Library changes, retaining the old fingerprint and every old regression.
6. Validate complete banks and real handlers, accepted alternatives, all routes/access/metadata, SSR, all MP3 mappings, prior repair and conversation regression, lint, protected build, fresh TypeScript delta and diff. Make one permitted browser attempt; if blocked, mark visual/mobile/accessibility QA pending. Human audio listening remains pending unless actually performed.

All four thumbnails were visually inspected and will be preserved: the adverb tower (213), connection panel (217), positions gallery (218) and anatomical Mouth Lab (38). The Mouth Lab image still represents the articulation lab; it is not used as an authoritative anatomical teaching diagram. New interaction visuals will be schematic, functional and in code.

Primary linguistic references checked: [RAE negative concord](https://www.rae.es/espanol-al-dia/doble-negacion-no-vino-nadie-no-hice-nada-no-tengo-ninguna), [RAE quien](https://www.rae.es/dpd/quien), [RAE que](https://www.rae.es/dpd/que), [PCIC A1–A2 grammar](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_a1-a2.htm), [PCIC A1–A2 pronunciation](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/03_pronunciacion_inventario_a1-a2.htm). These guide the bounded repairs, not a claim of formal certification.

**Checkpoint status:** diagnosis and design recorded before product edits; implementation and final verification pending. No publication-readiness claim.

### Completed repairs and final review

**Scope outcome:** all four authorized source implementations are complete. Historical audit grades (C/C/C/D) are retained as historical findings, not silently replaced by a publication grade. Current status for every lesson is **SOURCE IMPLEMENTED / MANUAL QA PENDING**. The source review found no remaining blocker after the fixes below; this is not merge, deployment or publication approval.

#### 213 · Antes, después, cuando · A2 · Gramática · PRO

- Corrected chronology in the antes explanation and después model. Cuando decisions now put the habitual trigger and response in the intended relationship, including distinct subjects where appropriate. The same-subject limit is explicitly confined to the selected infinitive constructions.
- Reframed already grammatical sentences as reformulations, constrained the cuando repair to preserve its intended connector, and limited the infinitive rule to the structures actually taught. No new temporal subjunctive, mientras, hasta que, desde que, en cuanto or other target was added just to enlarge the bank.
- Replaced the inert timeline preview with four movable events at specified times. Buttons provide keyboard access; all 24 orders are testable. Reversing the linguistic point of departure preserves breakfast before departure. Full authored models are rendered as sentences, not mislabeled fragments.
- Core closes by explaining a six-action real/plausible routine, responding to an earlier transport departure and reformulating the same chronology. The teacher observes sequence, forms and response to the changed fact. Open speech has no exact-string scoring.

#### 217 · Pero hay un matiz · B1 · Gramática · PRO

- Corrected all three postverbal negative-coordination outputs with `no`; repaired the two falsely positive activation propositions. Explained preverbal versus postverbal `ni…ni` without an English-derived double-negative prohibition.
- Rendered the complete discontinuous negative pattern. Added punctuation and explicit adversative contexts; valid original wording is labeled as valid reformulation, and positive facts are stated before asking the learner to contrast them. Full concessive clauses remain outside this selected practice.
- The new manipulation moves the negative group before/after the verb while preserving meaning, then introduces an impossible schedule as a third fact requiring a changed message. The first retrieval task now supplies three actual input sentences with pero; the learner does not need to invent missing materials.
- Oral closing corrects two assumptions, gives a counterweight and a brief reservation, then updates the decision after price/time changes. Natural alternative messages are teacher assessed, not string graded.

#### 218 · La persona que tengo en mente · B1 · Gramática · PRO

- Restored explanatory commas and accepted both `que` and `quien` in the Lucía/Mario items. Identifying clauses retain the appropriate que target. The relevant rule is qualified by explicit antecedent and absence of preposition, rather than a false universal pronoun rule.
- Marta's city is now specified before the ambiguity repair; the identification repair supplies Ana/Eva/Luz and their jobs/shifts. The telephone repair retains explanatory commas and meaning. Retrieval and the last conversation starter correctly distinguish extra information from identification.
- A three-person directory responds to two actual filters: either clue alone leaves two candidates, both select Ana. Once Ana is identified, the task compares the two valid explanatory forms with commas.
- Oral closing identifies a person, place and object, lets the teacher propose a wrong candidate and requires a relevant clarifying detail. The source bank and extra conversation prompts remain available.

#### Shared grammar behavior and preservation

Only these three slugs opt into `RepairSyntaxLab`. The five other exported banks are deeply equal to the exact base, and their rendered HTML is byte-equal to the base renderer. `SyntaxVisuals.tsx` and the original stylesheet are untouched. New styles are scoped under `.sx-repaired`.

The three repaired lessons now have deliberate check, focused hint, retry, solution and reset controls. Selecting another response invalidates old feedback. The complete bank is optional alongside a 45-minute core selection: notice → contrast/model → manipulate → choose in context → retrieve → produce/use orally. The original 45-minute timeline data and bank sizes remain intact; the UI explains the concrete core selection rather than requiring every optional item in one class.

Retrieval hides the model, bank and answers with native hidden panels and a scoped hidden rule. Panels and optional-bank cards remain mounted so revisiting does not erase answers or teacher observations. A whole-lesson keyed reset deliberately clears everything. A reconciliation-oriented test host drops unmounted hook state and caught the original revisit-loss regression before the fix. Teacher observation, not a quiz result, records an oral attempt.

| Bank / coverage | 213 | 217 | 218 | Total |
| --- | ---: | ---: | ---: | ---: |
| Activation prompts retained | 5 | 5 | 5 | 15 |
| Complete pattern models | 3 | 3 | 3 | 9 |
| Decisions / original option paths | 10 / 30 | 10 / 30 | 10 / 30 | 30 / 90 |
| Repairs / original option paths | 4 / 12 | 4 / 12 | 4 / 12 | 12 / 36 |
| Accepted complete outputs, including alternatives | 14 | 14 | 16 | 44 |
| Retrieval prompts retained | 5 | 5 | 5 | 15 |
| Production situations retained | 3 | 3 | 3 | 9 |
| Final conversation prompts retained | 7 | 6 | 6 | 19 |

Independent literal fixtures validate **all 126 original options**, their complete composed sentences and **44 accepted outputs**. All 42 original closed items are exercised through actual selection/check handlers. The new third-datum task adds 3 options and 1 accepted output: **129 option evaluations / 45 accepted outputs** across original and new closed banks. Additional coverage includes 24 event permutations, all four candidate-filter states, and both known-person explanatory forms. The normalized review found no duplicate decision/repair/retrieval prompts within each lesson's 19-prompt set and no duplicate accepted sentences within its 14/14/16 output set. Deliberate repeated models and vocabulary remain available for retrieval.

#### 38 · Spanish Mouth Lab · A1 primary / A1–C1 single bank · Fonética · PRO

The existing general-Spanish rhotic targets are retained. The A1 core supports short modeled exchanges; older learners can remove support or use the broader original bank. No five-level curriculum or automatic pronunciation evaluation is claimed. The original 60–75-minute catalog duration is unchanged; the lesson explicitly distinguishes **approximately 45 minutes of core plus optional extension**.

| Core stage | Concrete action | Estimated minutes |
| --- | --- | ---: |
| Hear / notice | Hear two neutral-titled word models before choosing one contact versus multiple contacts | 5 |
| Articulate / repeat | Select the contact region on a simplified mouth profile; use concise tongue/air cues and imitate five words three times | 10 |
| Contrast | Eight listen-first trials across pero/perro and caro/carro; focused wrong-answer cues, replay and comparison | 8 |
| Phrase | Hear and imitate three phrases, hide text, change a detail and obtain listener feedback | 7 |
| Produce / reuse | Buy a toy within ten coins; identify it without pointing, clarify caro/carro, change roles and repeat two improved phrases | 15 |

The core retains simple R in pero/caro, multiple R in perro/carro and initial R in rojo. The complete original six-station bank remains verbatim as optional reference: mirror diagnosis, vowels, two R paths, consonant map, stress/rhythm and transfer. All four original oral proposals, goals, warmup, explanation and homework are preserved. A teacher note qualifies the original broad b/d placement description because realization varies with context. The existing cover is atmospheric artwork, while the new functional diagram is clearly labeled as a simplified schematic, not an anatomical scan or animated measurement.

Successful playback completion plus explicit learner/teacher confirmation unlocks the listening attempt. Text accommodation stays visibly assisted and never earns unaided perception credit; reload, retry, reveal/hide, per-item navigation and reset are covered. The application cannot determine physical device volume or truthfulness of the confirmation. It records declared practice, not proof of hearing. All five word and three phrase productions require teacher observation for a complete route record, plus the final three oral criteria. No voice is recorded or uploaded. Showing/hiding earned text now works independently of correctness and hearing state; it does not invent assistance or silently erase credit.

AudioDeck is reused without edits, with decorative waveform bars disabled. There are **0 reused recordings in the new core and 8 newly generated recordings**. Existing Wave 1 vowels/stress files do not supply the required rhotic models, so none were overwritten or relabeled. The original broader stations still use teacher-provided models.

All eight new files are under `public/audio/mouth-lab/`, with exact provenance in `app/mouth-lab/audio-manifest.json`:

| MP3 | Exact synthesis script | Bytes | Seconds |
| --- | --- | ---: | ---: |
| `pero.mp3` | pero | 12,528 | 2.088 |
| `perro.mp3` | perro | 12,528 | 2.088 |
| `caro.mp3` | caro | 12,528 | 2.088 |
| `carro.mp3` | carro | 12,528 | 2.088 |
| `rojo.mp3` | rojo | 12,528 | 2.088 |
| `phrase-perro.mp3` | Mi perro corre. | 12,528 | 2.088 |
| `phrase-carro.mp3` | El carro es caro. | 13,248 | 2.208 |
| `phrase-contrast.mp3` | Quiero el carro rojo, pero es caro. | 20,016 | 3.336 |

Total: **108,432 bytes / 18.072 seconds**. Producer: Microsoft Edge online speech through edge-tts 7.2.8; configured voice `es-AR-TomasNeural`, rate `-10%`, MP3 at 24,000 Hz, mono. The Argentine locale is configured, not human verified, and does not convert the broader original general-Spanish station scope into a new regional curriculum. The generator and its dependencies stayed outside the repository; there is no runtime TTS dependency or package/lockfile change. The initial scratch synthesis attempt encountered a CA-bundle mismatch; using the existing system trust store retained TLS verification and completed generation without a secret or configuration change.

Every file is mapped to real models/tasks. Manifest scripts, station/purpose mapping, byte counts, SHA-256, duration and codec were checked; every MP3 decoded fully through ffmpeg with no errors. **Human listening QA: PENDING.** No claim is made about audible pronunciation, accent, stress, naturalness, clipping or transcript concordance from technical decoding alone.

#### Routes, catalog, access and thumbnails

The catalog, lesson IDs, levels, category assignments, FREE/PRO policy and preview records are unchanged. A static server page renders the existing `/clase/38` URL using the existing verified-header access helper. Anonymous/free requests still redirect to `/acceso?returnTo=%2Fclase%2F38`; existing PRO/owner headers allow the lesson. Metadata delegates to the unchanged dynamic-page generator and is tested in Spanish and English. Grammar wrappers and metadata are unchanged. Query strings do not grant access or create a Mouth Lab level variant.

The only public shared integration is **two ID38-only Library lines**: link the authorized card to its existing URL, and replace the unsupported seven-language habits claim with an accurate description of the core/optional bank. No premium lesson module is imported into Library. The old Wave 2 preservation test retains its original SHA-256 fixture; an exact, reversible helper removes only those two authorized changes before comparing historical Library bytes. The Wave 3 fixture also freezes the original Wave 2 test after undoing only that helper import/call. No historical assertion was deleted or its expected hash replaced.

The four inspected thumbnails remain byte-identical: `public/grammar-worlds/adverb-tower.webp`, `public/catalog-thumbnails/connection-panel.webp`, `public/catalog-thumbnails/positions-gallery.webp`, `public/catalog-thumbnails/mouth-lab.webp`. No image generation, deletion or overwriting occurred.

### Final verification evidence

| Check | Result |
| --- | --- |
| Fresh pre-edit baseline | 238 existing tests passed; TypeScript reported 11 inherited diagnostics |
| New Wave 3 tests | **42 passed**: grammar 23, Mouth Lab 10, routes/catalog/access 4, preservation 3, audio 2 |
| Complete combined regression | **280 passed, 0 failed, 0 cancelled, 0 skipped**; serial TAP run after final source edits |
| Prior regression breakdown | 137 conversation + 36 Wave 1 + 47 Wave 2 + 8 Library/verbal-help + 10 original syntax tests all passed |
| Independent source review | Reviewed every grammar bank and first/middle/final Mouth flow; independently ran 33 grammar/Mouth tests, all passed; no remaining source blocker |
| Lint | `npm run lint`: exit 0 after final source edits |
| Protected build | `npm run build`: exit 0, including both finalization passes and artifact validator |
| Protected artifact specifics | 61 private client modules, 55 premium media files, 297 excluded private paths. All 8 Mouth MP3s and both repaired lesson client chunks are protected and absent from public output; 49 public JS files checked for unique repaired-content leaks |
| TypeScript | Fresh base `npx tsc --noEmit` versus final `npx tsc --noEmit --incremental false`: **11 → 11 identical diagnostics, 0 new, 0 resolved**. Raw compiler exit remains 2; the delta gate passes, not a clean compiler claim |
| Diff | Full scoped source/test/audio-manifest diff inspected; `git diff --check` passed; no unrelated path modifications |
| Historical preservation | 239 frozen records plus the complete 66,809-byte pre-Wave-3 report prefix pass; all 32 Wave 1 MP3s and all 13 Wave 2 listening MP3s/manifests are covered by unchanged prior checks |
| Browser attempt | One isolated local client preview attempt at `http://127.0.0.1:8766/clase/38` returned `net::ERR_BLOCKED_BY_CLIENT`. No retry or deployment workaround. Interactive visual QA **PENDING** |
| Fallback QA | Full SSR/handler checks, first/middle/final source walkthrough, responsive CSS, semantic controls/focus/reduced-motion source and all thumbnails inspected. These do not replace browser/AT testing |
| Human listening | **PENDING** for all eight new recordings; technical validation is complete |

The first combined run was 278/280: two original regression assertions required explicit concessive-scope and ambiguity terminology in feedback. Those concepts were restored truthfully in the two target banks; the historical tests stayed unchanged. The final full run is 280/280.

The first build compiled but correctly stopped at its existing protection guard when the legacy `/audio/edificio-voces/1b-andres.mp3` was still present in generated public output. Its bytes matched the untouched source. The unchanged build pipeline was rerun after final source edits and completed successfully, including protection, two finalizers and artifact validation. No protection check was disabled, build script changed or failed artifact deployed. The precise transient cause was not established; successful final-artifact checks are the evidence for the reported result.

Inherited TypeScript locations remain outside this wave: 8 diagnostics in `app/api/billing/subscription/route.ts`, 2 in `app/marketing/MarketingSections.tsx`, and 1 in `app/mexico/map-data.ts`. Those files were not edited. The npm wrapper emitted its pre-existing http-proxy configuration warning; no environment configuration was changed.

Reproduce the selected safe regression without the D1-mutating full harness:

```sh
node --input-type=module <<'JS'
import {readFileSync, readdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const files = [
  ...pkg.scripts['test:conversation'].split(' ').slice(2),
  'tests/audio-deck-wave1.test.mjs', 'tests/grammar-wave1-repair.test.mjs',
  'tests/phonetics-wave1.test.mjs', 'tests/phonetics-wave1-assets.test.mjs',
  'tests/library-information-architecture.test.mjs', 'tests/verbal-help-contract.test.mjs',
  'tests/a1-syntax-lessons.test.mjs', 'tests/b1-contrast-relative-lessons.test.mjs',
  ...readdirSync('tests').filter(name => /^wave[23]-.*\.test\.mjs$/.test(name)).sort().map(name => `tests/${name}`),
];
const result = spawnSync(process.execPath, ['--test', '--test-concurrency=1', '--test-reporter=tap', ...files], {stdio: 'inherit'});
process.exit(result.status ?? 1);
JS
npm run lint
npm run build
npx tsc --noEmit --incremental false
git diff --check
```

### Quality Standard v2 gates

PASS below means supported by source/test evidence for this scope. PENDING means the required manual evidence was not obtained, not that it silently passed.

| Gate | 213 | 217 | 218 | 38 |
| --- | --- | --- | --- | --- |
| Pedagogy | PASS: real chronological manipulation to speech | PASS: denial, contrast and changed decision | PASS: identifying facts to clarification | PASS: hearing to observed oral reuse |
| CEFR contract | PASS: bounded A2 habitual/infinitive use | PASS: bounded B1 discourse | PASS: B1 indicative reference/clarification | PASS: supported A1 core, original A1–C1 single bank retained |
| Originality | PASS: event order and invariant meaning | PASS: negative placement and new evidence | PASS: filtering and known-person information | PASS: contact map and listener-dependent toy exchange |
| Visual hierarchy | PENDING browser; task headings/layout source checked | PENDING same | PENDING same | PENDING browser; current sound/task prioritized in source |
| Meaningful interaction | PASS: all24 orders and reformulation | PASS: placement switch and3 new options | PASS: all4 filters and2 valid explanations | PASS:10 judgments,5 words,3 phrases, oral reuse |
| Mobile | PENDING browser;720/390px CSS inspected | PENDING same | PENDING same | PENDING browser;650px responsive rules inspected |
| Accessibility | PENDING browser/AT; keyboard buttons, labels, hidden panels and focus rules checked | PENDING same | PENDING same | PENDING browser/AT; named controls, text accommodation and focus rules checked |
| Content correctness | PASS complete original bank/context review | PASS complete original bank/context review | PASS complete bank and valid alternatives | PASS scripts/cues/source; audible realization PENDING |
| Language/register | PASS natural Spanish/voseo, no accidental new English UI | PASS same | PASS same | PASS Spanish/voseo; existing English title retained |
| Audio | Not required for this grammar repair | Not required | Not required | Technical PASS; human listening PENDING |
| Routing/state | PASS preserved PRO route; revisit/reset tested | PASS same | PASS same | PASS canonical guarded route, listen/reveal/reload/reset tested |
| Tests | PASS complete bank, mechanics, legacy preservation | PASS same | PASS same | PASS models/trials/full path/invalidation/audio/routes |
| Thumbnail | PASS inspected and preserved; browser crop PENDING | PASS same | PASS same | PASS inspected and preserved; browser crop PENDING |
| Teacher usability | PASS concrete core selection, hints and observation; classroom trial PENDING | PASS supplied retrieval inputs and changed facts; classroom trial PENDING | PASS candidates and clarification; classroom trial PENDING | PASS models, explicit practice evidence and original optional bank; classroom trial PENDING |
| Duration | 45-minute planned core; observed timing PENDING | Same | Same | 45-minute planned core plus original extension; observed timing PENDING |
| Final oral production | PASS sequence and changed departure | PASS correct assumptions and revise choice | PASS identify and repair wrong candidates | PASS request/clarify/buy/retry, teacher observed |
| Overall | SOURCE IMPLEMENTED / MANUAL QA PENDING | SOURCE IMPLEMENTED / MANUAL QA PENDING | SOURCE IMPLEMENTED / MANUAL QA PENDING | SOURCE IMPLEMENTED / MANUAL QA PENDING |

Deferred intentionally: actual desktop/mobile/zoom/keyboard/AT walkthrough, all eight human listening checks and observed classroom pacing. The inherited TypeScript issues remain untouched. No new lesson IDs, level variants, broad phonetics curriculum, runtime synthesis, automated speech grading, new cover art or cross-device progress system was added. No Priority 9 lesson or Repair Wave 4 was started.

### Durable checkpoints and final scope

| Checkpoint | SHA |
| --- | --- |
| Diagnosis and bounded plan before product edits | `7047130c7c882711b85724adb92f48c3344dd5d8` |
| Eight finite Microsoft audio models/provenance | `1dcc87fa4bab75a76d48df3b9d47573184a3ce1a` |
| Mouth Lab core, preserved route and Library integration | `49e45da36d60dfbf846836ec69518e321675ae7d` |
| Three grammar banks, mechanics and complete regression fixes | `e57dd0198564e1f8b536894d997bff4a2ad31fca` |

All four checkpoints were pushed to `codex/quality-v2-repair-wave3-20260928`. The final documentation commit follows these checkpoints; its SHA is reported in the task handoff. The required Wave 2 base, Wave 1 checkpoints and Conversation Batch 1 remain ancestors. No PR was opened because this task forbids merging.

Exactly **30 paths** changed from the required base; the list includes the minimal shared/test adaptations explained above:

- `app/Library.tsx`
- `app/clase/38/page.tsx`
- `app/mouth-lab/MouthLab.tsx`
- `app/mouth-lab/audio-manifest.json`
- `app/mouth-lab/data.ts`
- `app/mouth-lab/mouth-lab.css`
- `app/mouth-lab/state.ts`
- `app/syntax-labs/RepairSyntaxLab.tsx`
- `app/syntax-labs/SyntaxLab.tsx`
- `app/syntax-labs/data.ts`
- `app/syntax-labs/repair-content.ts`
- `app/syntax-labs/repair.css`
- `docs/lessons/quality-v2-repair-status.md`
- `public/audio/mouth-lab/caro.mp3`
- `public/audio/mouth-lab/carro.mp3`
- `public/audio/mouth-lab/pero.mp3`
- `public/audio/mouth-lab/perro.mp3`
- `public/audio/mouth-lab/phrase-carro.mp3`
- `public/audio/mouth-lab/phrase-contrast.mp3`
- `public/audio/mouth-lab/phrase-perro.mp3`
- `public/audio/mouth-lab/rojo.mp3`
- `tests/fixtures/wave3-preserved.json`
- `tests/helpers/wave3-preservation.mjs`
- `tests/wave2-preservation.test.mjs`
- `tests/wave3-audio.test.mjs`
- `tests/wave3-grammar-content.test.mjs`
- `tests/wave3-grammar-interaction.test.mjs`
- `tests/wave3-mouth.test.mjs`
- `tests/wave3-preservation.test.mjs`
- `tests/wave3-routes.test.mjs`

**Preservation and operational confirmation:** Conversation Batch 1 and Waves 1–2 retain all lesson content, behavior, assets, audio and regression coverage. Historical reports are preserved verbatim; the only prior-test edit is the explicit two-line integration exception with its original fingerprint still enforced. All unrelated lessons and the five other syntax banks remain untouched in content/rendering. Nothing was deployed, merged or published. No production, D1/data, auth/Firebase, billing/Paddle/PayPal, Resend, secrets, environment configuration, domains, release-controller or deployment-state change occurred. This run stops after IDs 213, 217, 218 and 38.
