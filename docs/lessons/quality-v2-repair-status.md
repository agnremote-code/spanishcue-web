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

## Repair Wave 2: diagnosis and implementation checkpoint, 2026-09-28

This is a newly authorized implementation run for **131, 133, 16 and 108 only**, starting from Wave 1 final `e8f38659588526253c51f638b39e337682729363`. The entire Wave 1 report above is preserved verbatim as history. Branch: `codex/quality-v2-repair-wave2-20260928`, created on GitHub before implementation. Canonical main rechecked: `5d6733a9b9404bbc17bf6999530eb48ffb574a3e`; main versus requested base is **0 / 27**, so no newer canonical changes need integration. No open PR overlaps were returned. Lost local checkout was recovered by a new clone of the pushed branch; no work or branch was reset, cleaned or pruned.

**Checkpoint status:** complete source diagnosis and bounded design recorded; implementation in progress. Fresh inherited TypeScript baseline: **11 diagnostics**, captured before product edits. This section will gain implementation/results evidence before final delivery. No publication readiness is claimed.

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

The planned audio change count is **0**: reuse 13 existing files with a technical manifest, retaining exact scripts, configured voices and bytes. Actual listening has not been performed. Existing multi-variety cast metadata is preserved; no random new voice or claim of verified accent is introduced. If a concrete audio/script defect later requires synthesis, the owner has explicitly authorized Microsoft MP3 generation for 131/133; no synthesis is presumed necessary now.

Root owns cross-lesson preservation, manifests, documentation, final verification and pushes; independent Astra implementers own the two listening pages, ARGENTO and WordBank respectively. No shared Wave 1 component changes are currently required. Existing IDs/routes/catalog metadata/access, thumbnails, Conversation Batch 1 and Wave 1 code/tests/audio remain protected. No production/D1/auth/billing/environment/release work, merge or deployment. No Wave 3 or Priority 9 lesson.
