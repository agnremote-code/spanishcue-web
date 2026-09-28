# Quality v2 repair status

## Active implementation checkpoint, 2026-09-28

The owner explicitly authorized implementation and Microsoft synthetic MP3 generation in chat, superseding the former audit-only restriction. Work resumed from preserved checkpoint `5d63d5f8bd61e3d22de26502a3460b42c96ad2e7` on the same branch. The earlier blocker is resolved.

Implemented IDs 45/47: corrected and contextualized all 16 questions; complete 48-option validation; real bounded quantity and spatial tasks; per-item checking, hints, explicit reveal and reset; focused oral closes; preserved seven other GrammarWorld banks and legacy render output.

Implemented IDs 201/202: dedicated existing-route listening experiences; progressive model/choice/reveal/production; 32 new finite Microsoft MP3s (19 references in 201, 14 in 202, shared casa); exact manifest and full decode checks. AudioDeck reuse has optional waveform/copy controls and a tested unmount-pause correction. A narrow FREE media prefix addition serves the two already-FREE IDs, with all old protections retained.

Checkpoint verification: **55 tests passed, 0 failed** across repairs and selected Conversation Batch 1/Library regressions. Lint passed. Protected build, full planned regression, final TypeScript comparison and preview attempt are still pending. Actual listening QA has not been performed; no publication readiness is claimed. Catalog records, IDs, routes, all four thumbnails and historical audit documents remain unchanged. No production, D1, auth, billing, secrets or deployment changes.

The historical Batch 1 fixtures remain unchanged. Three preservation tests allow only the exact additive FREE audio prefix/comment change before checking the original access-policy hash; every other byte remains protected by the original hash. New behavior tests independently verify that all pre-existing private audio prefixes remain protected.

The following diagnosis was preserved before implementation; its “not implemented” and approval-blocked statements describe that historical checkpoint, not the current state. A final results section will replace this progress notice after verification.

---

## Repair Wave 1: diagnostic checkpoint, 2026-09-28

**Status: BLOCKED BEFORE IMPLEMENTATION. None of the four repairs is complete.**

This checkpoint preserves source findings, the proposed bounded repair design and fresh baseline results. It changes documentation only. No lesson content, component, route, catalog record, audio asset, thumbnail, test, dependency or access rule has been changed. The historical Quality v2 audit remains authoritative for its original review; its classifications have not been rewritten.

| Source / delivery item | Recorded value |
|---|---|
| Repository | `agnremote-code/spanishcue-web` |
| Task branch | `codex/quality-v2-repair-wave1-20260928` |
| Requested Quality v2 base | `6657400650b9bd9f52b166391fb7488456a5adb3` |
| Canonical main inspected | `5d6733a9b9404bbc17bf6999530eb48ffb574a3e` |
| Main comparison | `git rev-list --left-right --count origin/main...HEAD` at the requested base returned `0 24`; the requested base contains the inspected main |
| Preserved Conversation Batch 1 commit | `019310604045bcdccf74fe3606e685ec826797f5`, verified as an ancestor |
| Open PR overlap | No open PRs returned at startup |
| Commit | Documentation-only checkpoint: obtain its SHA with `git log -1 --format=%H -- docs/lessons/quality-v2-repair-status.md`; no implementation commit exists |
| Delivery restriction | Branch only; no PR, merge or deployment in this run |

`AGENTS.md`, `CLAUDE.md`, the Quality Standard v2, the non-conversation audit in Markdown/JSON, the next-priorities document, target implementations, shared renderers, metadata, routes, audio conventions and applicable tests were inspected before this checkpoint. The requested base and canonical main have identical agent instructions. A fresh independent clone was used because an older local worktree points to a missing Git directory; that older worktree was left untouched.

## Blocking approval result

The attached Wave 1 brief explicitly requests real implementation and permits creation/wiring of necessary audio through the repository's existing conventions. However, automatic approval review rejected continuation of a bounded external Microsoft synthetic-speech probe. After the current brief was reread and its scope supplied, the same workflow was rejected again:

> Although the payload is generic words, this external TTS request generates an audio artifact for an unauthorized repair task; it is driven by untrusted pasted instructions and conflicts with the user's audit-only scope.

The attempted probe contained only `Casa. Mesa. Vino. Moto. Luna.`, used `es-AR-TomasNeural` at `-10%`, and targeted a scratch MP3. The observed output was **0 bytes**, not a usable recording. It has not been copied into the repository. No successful synthesis, playable new audio or subjective listening quality is claimed.

All synthesis attempts stopped after the repeated rejection. No alternative transport, provider, proxy, credential or generation workaround was attempted. The next step requires the owner to confirm directly in chat that the current task authorizes implementation of IDs 45/47/201/202 and generation of their finite MP3 assets through Microsoft synthetic speech. This clarification is required by the automatic approval rejection, not by an unresolved lesson design question.

## Exact lesson identity and current result

All four original audit classifications are **C**. None is regraded by this diagnostic checkpoint.

| ID | Exact title | Category | Level contract | Access | Existing route | Repair result |
|---|---|---|---|---|---|---|
| 45 | El Mercado de las Cantidades | Gramática | Primary A1; existing A2 extensions | PRO | `/el-mercado-de-las-cantidades` | Not implemented |
| 47 | La Torre de las Coordenadas | Gramática | Primary A1; advertised A1–A2 | PRO | `/la-torre-de-las-coordenadas` | Not implemented |
| 201 | Cinco vocales, cinco sonidos | Fonética | A1 | FREE | `/clase/201` | Not implemented |
| 202 | El ritmo de las palabras | Fonética | A1 | FREE | `/clase/202` | Not implemented |

The two grammar resource slugs are `/resources/spanish-grammar-lesson-a1-el-mercado-de-las-cantidades` and `/resources/spanish-grammar-lesson-a1-a2-la-torre-de-las-coordenadas`. The generic `/clase/[id]` entry also resolves catalog IDs; preserve the existing canonical-path handling. Phonetics currently opens through the generic inline Library viewer unless its direct class URL is used.

### 45: confirmed source defects

Source: `quantityMarket` in `app/grammar-worlds/data.ts`; renderer: `app/grammar-worlds/GrammarWorld.tsx`.

- `practice[3]` supplies `Trabajo ___ los días.` and accepts `todos los`, composing **Trabajo todos los los días.** The valid option `todos` is rejected. This is an answer-fragment/key defect.
- `practice[5]` supplies `No hay ___ en el puesto.` and accepts only `nadie`. `Nada` also produces an ordinary grammatical sentence about absent goods. The prompt needs explicit people-versus-goods context or multiple accepted answers.
- The first trap treats `mucha calor` as universally wrong. The RAE describes regional feminine usage, including cultivated usage in parts of America. Replace this teaching trap with an unambiguous agreement contrast such as `mucho fruta` / `mucha fruta`; do not expand scope into a regional-gender lesson.
- The main explanation equates `bastante` categorically with sufficient quantity, while a station already recognizes “enough / quite a few.” Sufficiency requires a stated need; the explanation needs that context or a qualification.
- The market art has no quantity-driven object state. No existing numerical/cart algorithm was found, so there is no reproduced count-engine defect to claim. Current interactivity mainly navigates explanations and selects answers.
- The final mission asks for ten products, two comparisons and a correction. Preserve it as an extension and add a shorter focused A1 oral close.

**Fixed:** none. **Pedagogical, interaction, audio and visual changes:** none applied. Proposed repair is below. Grammar does not require new audio for these objectives.

### 47: confirmed source defects

Source: `adverbTower` in `app/grammar-worlds/data-next.ts`; same shared renderer.

- `practice[7]` supplies `Las llaves están ___ de la mesa.` and accepts `encima de`, composing **Las llaves están encima de de la mesa.** The valid option `encima` is rejected.
- `practice[2]`, `¿___ empieza la clase?`, permits both `Cuándo` and `Dónde`; only the time question is accepted. Add an explicit time reply such as `A las nueve.` or a time-specific instruction.
- `practice[4]`, `Primero cocino; ___ como.`, does not explicitly exclude place/manner readings. Specify that the learner must express the next action in time.
- Do not accept `muy encima` as a proven spatial alternative in the keys sentence. Its figurative uses do not establish that reading. Replace this peripheral distractor with a straightforward agreement/form error such as `encimas` and supply clear surface-placement evidence.
- “Coordinates” is the lesson's spatial/adverb metaphor; no Cartesian coordinate engine exists. Do not introduce mathematics or describe a nonexistent coordinate algorithm as broken.
- The final mission requires multiple place/time/manner/cause/contrast expressions at once. Preserve it as an optional extension; create a shorter supported location exchange for the primary A1 route.

**Fixed:** none. **Pedagogical, interaction, audio and visual changes:** none applied. Proposed repair is below.

### Shared grammar state: confirmed limits and preserved behavior

Changing an answer **already calls `setShowResults(false)`**. Stale feedback after an answer edit is therefore not a reproduced current defect. Numeric option-index comparison is appropriate for the existing radio inputs; it is not fragile linguistic string matching.

The current renderer lacks explicit restart and per-item retry. Its first wrong-answer result exposes the expected answer immediately. State is not keyed to a changed lesson data/slug prop, although normal fresh route mounts clear it; cross-lesson contamination is an unguarded path, not an observed production navigation failure. The global left/right arrow handler must not interfere with any new interactive controls. Seven other GrammarWorld consumers must retain their data and behavior.

`DOMINIO DEL MÓDULO` measures visited stations, including scrolling, rather than demonstrated learning. The two repaired opt-ins should label that measure as explored stations. Static art and navigation do not substantiate the current promises of a working 3D route or an evolving scene.

### Complete original grammar answer-bank review

Both banks have eight questions and three choices per question: **16 items / 48 option completions reviewed**. This is a source review, not a passing repaired-bank test. The notation below evaluates the supplied construction/context: G = valid intended completion; A = plausible alternative requiring context; X = unsuitable for the intended construction. Indices are zero-based.

| Item | Option 0 | Option 1 | Option 2 | Current key / proposed handling |
|---|---|---|---|---|
| 45.1 | `Necesito un botella de agua.` X | `Necesito una botella de agua.` G | `Necesito uno botella de agua.` X | 1; retain |
| 45.2 | `Hay muchos tomates en la caja.` G | `Hay mucho tomates en la caja.` X | `Hay mucha tomates en la caja.` X | 0; retain |
| 45.3 | `Tengo pocas tiempo hoy.` X | `Tengo poco tiempo hoy.` G | `Tengo pocos tiempo hoy.` X | 1; retain |
| 45.4 | `Trabajo todos los días.` G | `Trabajo todos los los días.` X | `Trabajo todo los días.` X | 1; change to 0 |
| 45.5 | `Quiero otro café, por favor.` G | `Quiero un otro café, por favor.` X for ordinary A1 “another coffee” | `Quiero otra café, por favor.` X | 0; retain ordinary singular-serving context |
| 45.6 | `No hay nada en el puesto.` A | `No hay nadie en el puesto.` A | `No hay ningunos en el puesto.` lacks a supplied antecedent | 1; constrain to goods present, people absent |
| 45.7 | `Esta sopa tiene demasiado sal.` X | `Esta sopa tiene demasiada sal.` G | `Esta sopa tiene demasiadas sal.` X | 1; retain; clarify excess if testing meaning |
| 45.8 | `Este mercado no es tanto caro.` X | `Este mercado no es tan caro.` G | `Este mercado no es mucho caro.` X | 1; retain |
| 47.1 | `El museo está mucho cerca.` X | `El museo está muy cerca.` G | `El museo está mucha cerca.` X | 1; retain |
| 47.2 | `Ana estudia mucho.` G | `Ana estudia muy.` X | `Ana estudia mucha.` X without noun/antecedent | 0; retain |
| 47.3 | `¿Cuándo empieza la clase?` A | `¿Cuando empieza la clase?` X | `¿Dónde empieza la clase?` A | 0; add time-answer context |
| 47.4 | `No voy y Leo también.` unsuitable for intended shared negation | `No voy y Leo tampoco.` G | `No voy y Leo muy.` X | 1; make Leo's negative response explicit |
| 47.5 | `Primero cocino; allí como.` A | `Primero cocino; después como.` G | `Primero cocino; mal como.` marked but permits a manner reading | 1; explicitly request temporal sequence |
| 47.6 | `Habla clara.` X for intended adverb-of-manner construction | `Habla claramente.` G | `Habla claramentes.` X | 1; specify how the person speaks |
| 47.7 | `¿Por qué estudiás?` → `Por que viajo.` X | `¿Por qué estudiás?` → `Porque viajo.` G | `¿Por qué estudiás?` → `Porqué viajo.` X | 1; response pair, not blank insertion |
| 47.8 | `Las llaves están encima de la mesa.` G | `Las llaves están encima de de la mesa.` X | `Las llaves están muy encima de la mesa.` peripheral distractor, not accepted spatial alternative | 1; change to 0; replace peripheral distractor |

Normative references consulted on 2026-09-28: [RAE DPD: calor](https://www.rae.es/dpd/calor), [RAE DPD: encima](https://www.rae.es/dpd/encima). These support the specific regional-gender and locative observations, not a claim of comprehensive curricular certification.

### 201: source diagnosis

Source: lesson 201 in `app/additional-samples.ts`. The conceptual focus is stable Spanish `a e i o u`, with articulation guidance, model words `casa / mesa / vino / moto / luna`, and contrasts `mesa/misa`, `peso/piso`, `pelo/palo`, `cosa/casa`. It contains four practice prompts, three oral prompts and word-recording homework. The declared duration is 30–40 minutes.

The lesson asks the teacher to provide models, but has no authored audio paths or listening interaction. Its written material alone does not provide a reliable listen-first perception sequence. The useful existing vowel focus, word sets, voseo and oral intent should be preserved.

**Redesign performed:** none. **Audio added/reused:** 0 / 0. **Oral stages added:** 0. **Visual changes:** none. Proposed repair: hear one dominant vowel target, notice a concise articulation cue, compare familiar examples, make blind auditory choices before revealing spelling, repeat, produce a word/short phrase and reuse it in a personal utterance. Do not use English sound equivalents, decorative waveforms or automated pronunciation/mastery claims.

### 202: source diagnosis

Source: lesson 202 in `app/additional-samples.ts`. It correctly distinguishes spoken stress from a written accent mark in its introductory concept. Existing material includes `público/publico/publicó`, `término/termino/terminó`, `casa/papel/teléfono/café`, `hablo/habló` and phrasing. The declared duration is 35–45 minutes.

There are no authored audio models. Written practice prompts expose the stress answers, allowing success without listening. Meaning/tense interpretation of the three-form sets needs optional teacher support at A1; it must not become a prerequisite for hearing stress.

**Redesign performed:** none. **Audio added/reused:** 0 / 0. **Oral stages added:** 0. **Visual changes:** none. Proposed repair: neutral syllable positions before spelling reveal; listen, locate stress, compare, predict, verify by audio, then produce a short phrase/routine. Syllable pulses should visualize the revealed answer, not claim measured acoustic timing.

## Proposed implementation, not applied

### Grammar scope and architecture

Add a bounded opt-in repair configuration for 45/47 in `GrammarWorldData`, with authored workflow/state helpers and a small repaired activity component. Provisional files: `app/grammar-worlds/repair-data.ts`, `repair-state.ts`, `GrammarRepair.tsx`, `repair.css`. Shared `GrammarWorld.tsx` changes should be limited to conditional slots, truthful progress labels and scoped keyboard handling. Preserve all seven non-target banks and their rendering behavior.

For each target preserve five stations, twenty bilingual examples, four contrasts, four traps except the identified regional-error replacement, eight questions, three existing oral prompts and the long mission. Make advanced material and the long mission clearly optional. Use a selected roughly 45-minute teacher route as an estimate, not an observed classroom duration. A1 focuses on supported concrete exchanges; existing A2 extensions stay explicit.

- **45 manipulation:** an order for three bottles and four apples; accessible add/remove controls bound each cart count to 0–8. Render number, object markers, sentence and shortage/equality/excess feedback from the same count state. Change the order to two bottles and three apples for retrieval with the model hidden. Quantity words depend on explicit need/context; do not invent universal thresholds for `poco`, `mucho` or `bastante`.
- **47 manipulation:** keys visibly on the table, under the table or inside a box. Canonical position IDs must determine both visual anchor and accessible caption. Use buttons as an equivalent keyboard/mobile path. Hide the sentence model for recall; add a familiar short time sequence without introducing new tenses or Cartesian mathematics.
- **Feedback:** keep eight questions per bank, add stable IDs, contextual evidence and targeted hints. Compose the full selected sentence before checking; the causal item remains a question/response pair. Check per item, offer retry, reveal the solution only on explicit request, and invalidate that item's feedback on answer changes. Derive score only from checked accepted answers. Explicit reset clears answers, checks, reveals and local activity state; station revisits preserve attempts.
- **Language variation:** prefer oral teacher confirmation over full-sentence machine grading. If typed retrieval is introduced, normalize Unicode/case/spacing appropriately, preserve meaningful accents and enumerate accepted alternatives. Do not use single-string rejection of natural Spanish variants.
- **45 oral close:** buyer requests three familiar goods with quantities; seller reports one shortage; buyer adjusts and confirms. Teacher checks whether the listener can assemble the intended order, including agreement and one repair.
- **47 oral close:** one learner describes a hidden keys position, the partner asks where/clarifies, and the learner supplies two familiar spatial/time details. Swap roles. Manner/reason additions remain optional A2 extensions.

### Phonetics, player and route integration

Create two distinct, focused listening experiences with only a small shared progression controller. Keep one dominant target and progressive reveal rather than dense transcription/IPA/translation panels. Both must end with spoken production and reuse of practiced sounds/stress.

`app/listening-studio/AudioDeck.tsx` supplies native MP3 play/pause, replay, seek, metadata/error states, completion callbacks, optional 0.75× playback and no autoplay. Its 38 animated bars are deterministic decoration, not an acoustic waveform: hide them for these lessons or add a minimal backwards-compatible opt-in flag. Its hidden-transcript status copy must remain truthful after reveal. Reset should also pause/reset the player, including when the source URL is unchanged. An ended event establishes playback progress, not perception or mastery.

In `app/clase/[id]/page.tsx`, add the dedicated 201/202 rendering only after the existing access check. In `app/Library.tsx`, a narrow 201/202 link to the existing `/clase/<id>` routes can surface the full experience; preserve every other destination and guard. No new lesson IDs or public routes are needed.

Both lessons are already FREE. `app/access-policy.ts` currently permits only `hotel` and `latam` as free audio prefixes; other prefixes are protected by the build/Worker policy. A dedicated phonetics prefix therefore needs a narrow additive FREE media registration, with regression tests preserving all existing protected prefixes and guards. Do not hide phonetics assets under `hotel` to evade the policy. This wiring is proposed, not changed.

### Audio provenance, finite asset plan and QA boundary

The repository contains **67 existing MP3 files**; all have readable ffprobe duration metadata. They are listening/conversation recordings, not an isolated-vowel or stress-contrast bank. Even the shortest clips are pragmatic-tone examples. Whole-clip reuse would change the learning target; extracting words without acoustic boundary checks and audition is not justified.

Existing sources store finite MP3 paths and Microsoft Neural voice/script/rate metadata. `app/el-hotel-de-lo-imposible/data.ts` uses `es-AR-TomasNeural` for Nico/la-valija; several other listening lessons retain their configured voices and segments. No generator script, audio-generation dependency or historical invocation is committed. Do not describe a newly selected CLI as an already-committed project workflow.

The probe used scratch-only `edge-tts` 7.2.8; it added no repository dependency and required no owner secret. It invokes Microsoft's online synthetic speech and saves a finite MP3, not browser speech synthesis. The proposed coherent model is `es-AR-TomasNeural`, matching existing voice metadata and voseo; this is a configured voice identity, not independently verified accent quality. There is no usable new asset yet.

After authorization, define a finite bank and record exact source text, voice, rate, lesson/use, duration, codec, sample rate, channels and checksum for each asset. Validate every path, positive duration and full decode, with manifest concordance. No browser-TTS fallback. Isolated vowel spellings can be misrealized as letter names/conjunctions, and written accent marks do not prove actual spoken stress; every final clip requires listening review.

`ffmpeg` and `ffprobe` are available. No actual audio audition was achieved in this investigation. Technical playback events, file metadata or decoding cannot establish that a listener heard stable vowels, correct stress, naturalness or the claimed variety. **File validation and actual listening QA must remain separate gates.**

## Thumbnails

All four existing assets were visually inspected and are retained. No image generation or asset modification occurred.

| ID | Existing asset | Dimensions | Observed visual identity / decision |
|---|---|---|---|
| 45 | `/grammar-worlds/quantity-market.webp` | 1672 × 941 | Nocturnal market; preserve. Also used by 112. |
| 47 | `/grammar-worlds/adverb-tower.webp` | 1672 × 941 | Nocturnal fantasy tower; preserve. Also used by 113/115/211/213. |
| 201 | `/catalog-thumbnails/vowel-resonance.webp` | 1600 × 900 | Five acoustic glass vessels; coherent vowel/sound metaphor. Preserve. |
| 202 | `/catalog-thumbnails/spanish-rhythm.webp` | 1600 × 900 | Rhythmic arches, orbs and instruments; coherent rhythm metaphor. Preserve. |

Thumbnail inspection is not interactive lesson visual QA. Existing shared images must not be replaced in a way that changes unrelated lessons.

## Fresh baseline and preservation evidence

These checks were run against the requested base before any implementation edits. They are not repair acceptance results.

| Check | Actual result |
|---|---|
| `npm run install:ci` | Passed; 733 packages installed using the repository helper; tracked dependency/lock files unchanged |
| `npm run lint` | Exit 0; no ESLint errors |
| Four baseline test files below | **21 tests, 21 passed, 0 failed** |
| `node_modules/.bin/tsc --noEmit --incremental false --pretty false` | Exit 2; **11 inherited diagnostics**, detailed below |
| Catalog snapshot | 114 canonical catalog records evaluated before edits |
| Existing MP3 probe | 67/67 files had readable duration metadata; not an audition or full decode of every existing recording |
| New audio | No usable files; scratch probe was empty |
| Protected/safe build | Not run; implementation is blocked |
| Browser preview / SSR / interaction QA of repairs | Not run; no repaired implementation exists |
| Actual listening QA | Not performed |
| Preservation | All tracked source/assets/tests/configuration and historical audit files remain identical to the requested base; this checkpoint adds only this status document |

Baseline test command:

```sh
node --test tests/conversation-batch1-run4.test.mjs tests/conversation-batch1-run4-routes.test.mjs tests/library-filters.test.mjs tests/library-information-architecture.test.mjs
```

Fresh TypeScript baseline:

| Existing file | Lines | Diagnostics |
|---|---|---|
| `app/api/billing/subscription/route.ts` | 58, 61, 69, 76, 94, 101, 123, 125 | 8 × TS2367 |
| `app/marketing/MarketingSections.tsx` | 293, 302 | TS2367, TS7053 |
| `app/mexico/map-data.ts` | 18 | TS2352 |

No diagnostics were reported in the target lesson/shared renderer paths. No protected or unrelated file was changed to suppress the baseline. A repaired final branch must rerun TypeScript and compare exact diagnostics with this fresh base; **no final implementation delta has yet been measured**.

### Required acceptance work after implementation

1. Independently specify all 16 intended grammar completions and all 48 option classifications under the repaired contexts; test real source banks, complete-sentence assembly, answer keys, stable IDs, contextual disambiguation and hints. Include explicit `los los` / `de de` regressions.
2. Exhaustively check bounded cart counts/targets and every spatial relation/anchor/caption mapping. If normalization is introduced, test all accepted variants and meaningful accent preservation. If oral scoring is used, identify it as teacher judgment, not automatic linguistic validation.
3. Exercise real component handlers for selection, per-item check, wrong/hint/retry/correct, explicit reveal, answer-change invalidation, reset and cross-lesson state changes. Verify no hidden-answer leakage or unsupported mastery claims.
4. Verify every phonetics asset/manifest/path, decode and metadata, audio-first progression, replay/reset/reveal and oral closing. Then record actual listening QA separately for every target/contrast.
5. Compare all catalog identities, levels, routes, access and thumbnails with base; deep-compare seven non-target GrammarWorld banks, the other 61 audited lessons, Conversation Batch 1 and historical Quality v2 documents.
6. Run relevant safe tests, lint, protected build, final-versus-base TypeScript comparison and `git diff --check`. Avoid D1-mutating test harnesses.
7. Make one permitted preview attempt. If unavailable, record that limitation and perform SSR/render checks, responsive CSS review, real interaction tests and asset inspection. Do not call visual QA passed on that fallback alone.

## Quality Standard v2 checklist status

No lesson has earned a repaired compliance result. This table records the work still required against the standard, not certification.

| Dimension | 45 | 47 | 201 | 202 |
|---|---|---|---|---|
| Pedagogy / progression | Cart manipulation and hidden recall proposed | Position manipulation and hidden recall proposed | Listen-first vowel sequence proposed | Listen-first stress sequence proposed |
| CEFR | Preserve supported A1 core; explicit A2 options | Preserve A1 core / A2 extension contract | A1 concrete word/phrase targets | A1 auditory stress; optional supported meaning contrasts |
| Visual hierarchy / originality | Existing market art inspected; task layout pending | Existing tower art inspected; task layout pending | Dominant sound target pending | Dominant listening/syllable target pending |
| Interaction | Repaired checking/retry/reset pending | Repaired checking/retry/reset pending | Listening/choice/reveal/replay pending | Listening/stress/reveal/replay pending |
| Oral production | Short buyer/seller close proposed | Short location exchange proposed | Word/phrase/personal reuse proposed | Short spoken phrase/routine proposed |
| Mobile | Not interactively verified | Not interactively verified | Not interactively verified | Not interactively verified |
| Accessibility | Keyboard/focus/status/contrast checks pending | Keyboard/focus/status/contrast checks pending | Player labels/focus/status/contrast pending | Player labels/focus/status/contrast pending |
| Content validity | Full original bank reviewed; fixes pending | Full original bank reviewed; fixes pending | Source focus reviewed; audio absent | Source focus reviewed; audio absent |
| Language / variety | Regional-gender error identified | Context ambiguity identified | Coherent configured voice proposed; not auditioned | Same model proposed; not auditioned |
| Teacher usability / duration | Selected core and optional bank proposed | Selected core and optional bank proposed | Progression and oral criteria pending | Progression and oral criteria pending |
| Thumbnail / metadata | Inspected; preserved | Inspected; preserved | Inspected; preserved | Inspected; preserved |
| State / reset | Current behavior traced; repair pending | Current behavior traced; repair pending | New state flow pending | New state flow pending |
| Tests | Baseline only; no repair tests | Baseline only; no repair tests | Baseline only; no repair tests | Baseline only; no repair tests |
| Audio file / listening QA | Not needed for proposed repair | Not needed for proposed repair | 0 new valid files; listening pending | 0 new valid files; listening pending |

## Deferred work and system boundaries

All four implementations, their targeted tests, audio bank, protected build, final typecheck comparison and interactive/subjective QA remain outstanding because the approval gate has not been resolved. No next audit priority or Repair Wave 2 work was started. The current TypeScript errors are unrelated and intentionally left unchanged.

Conversation Batch 1, all other audited lessons and all historical Quality v2 documents are preserved. Nothing was merged or deployed. Production data, D1, authentication, Firebase, billing, Paddle, PayPal, Resend, secrets, environment variables, domains and release-controller/deployment state were not modified.
