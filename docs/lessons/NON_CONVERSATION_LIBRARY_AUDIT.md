# SPANISHCUE Non-conversation Library Audit

Audit date: **2026-09-28 (Asia/Saigon)**; source/reference retrieval: 2026-09-27 UTC. Status: **complete source audit; final consistency verification pending**.

Companions: [Quality Standard v2](SPANISHCUE_QUALITY_STANDARD_V2.md), [machine-readable audit](non-conversation-library-audit.json), [ranked production queue](NEXT_20_LESSON_PRIORITIES.md).

## 1. Executive summary

**65 active non-conversation lesson records** are surfaced by the preserved source: **51 Gramática, 3 Fonética, 8 Escucha and 3 Vocabulario**. There are **8 FREE and 57 PRO** records. Every active ID has one inventory entry below. Category and primary CEFR totals partition those 65 records; advertised ranges are overlapping metadata, not separate authored variants.

**Source-quality classification: A 1 · B 17 · C 45 · D 2 · E 0.** This evaluates authored content and implemented mechanics against v2, with explicit limits. It does not certify browser appearance, audio naturalness, accessibility, observed class duration or publication readiness. A generic component is not automatically weak, and a bespoke scene is not automatically strong.

Preserve the strong postal pronoun interaction (106), useful phrase builders, real past-perspective manipulation, substantial oral banks and newer listening scenarios. Repair demonstrable answer/context errors first. The dominant gap is often the quality of practice and feedback, not an absent topic: all 17 canonical verbal-system records already exist. Fonética lacks native audible models; Vocabulario lacks dedicated upper-band lexical pathways; Escucha has a record at every level but little sustained multi-minute input.

**Recommended first run:** repair quantities and coordinates, IDs **45 and 47** (P01 / B01). Then rotate through beginner phonetics, listening evidence and vocabulary retrieval. The full queue has **20 tasks, five per category**, covering **23 existing records and 10 proposed new lessons** in **15 runs of 2–3 lesson targets**. No proposal was implemented.

## 2. Source authority and preservation

| Reference | Value |
| --- | --- |
| Repository | `agnremote-code/spanishcue-web` |
| Audit branch | `codex/quality-v2-nonconversation-audit-20260928` |
| Canonical main inspected | `5d6733a9b9404bbc17bf6999530eb48ffb574a3e` |
| Preserved source / Batch 1 final | `019310604045bcdccf74fe3606e685ec826797f5` |
| Batch 1 branch | `codex/conversation-batch1-run4-20260927` |
| Integration at audit start | Batch 1 not integrated into main; main is its ancestor (0 main-only / 20 Batch-1-only commits). |
| Base decision | Branch from Batch1 final: it contains current main and all legitimate Batch1 work. No reconciliation merge needed. |
| Open PRs at start | 0 |
| Pushed inventory checkpoint | `6b2c5e469b555d99d81a2f8bedb00ce8ae4b7351` |
| Pushed quality-standard checkpoint | `ef12fd30052be6313ee938de4f7c158effeb13de` |

The four completed conversation families, their 14 additions and 708 principal authored elements remain byte-for-byte unchanged. Only the four requested documentation files belong to this audit diff. The owner explicitly requires branch-only delivery; no PR/auto-merge, merge to main, deployment or production action is authorized.

The earlier conversation-family audit was reviewed at [e6da3f0943de](https://github.com/agnremote-code/spanishcue-web/blob/e6da3f0943de088a9cba837ea71b3faa77a473eb/docs/lessons/CONVERSATION_FAMILY_AUDIT.md). It lives on a separate preserved audit branch; it was not silently copied or merged into this source. Current Batch 1 status is recorded in [`docs/lessons/conversation-family-production-status.md`](../../docs/lessons/conversation-family-production-status.md) and [`docs/lessons/conversation-batch1-completion.json`](../../docs/lessons/conversation-batch1-completion.json).

## 3. Counting method and audit limits

- **activeLessonRecord:** One numeric ID in evaluated lessons and catalogLessons, with rendered route/source and discoverable resource preview.
- **levelCoverage:** Primary cefrLevel partitions65 records; advertisedLevelMemberships overlap and sum80. They are not authored variant counts.
- **collection:** Exact stored collection or null. catalogueSection is a UI grouping such as Sistema verbal, not an invented collection.
- **grade:** A–E editorial assessment of source alignment with v2, not browser/audio/classroom certification.
- **appearsComplete:** Implementation has an authored usable flow/bank and resolvable route; does not mean defect-free or publication-ready.
- **duration:** Declared duration copied from catalog; estimatedDuration is reviewer estimate for selected teacher-led use, never observed class timing.
- **contentVolume:** Units explicit per lesson; do not add translations, task templates, random combinations or a compound law and its questions as distinct new items.
- **scopeOfGap:** Dedicated/integrated/partial/absent within audited category distinguished; advanced vocabulary/phonetic exposure elsewhere is acknowledged, not counted as a new category lesson.

The inventory evaluates the real catalog, public projection, access policy and resource-slug resolver. It then follows page imports, dynamic data, renderers, assets and state handlers. It does not infer active lessons from filenames or archive claims.

- Evaluated lessons, catalogLessons, localLessonPath/isFreeLesson and resourcePathForLesson/lessonForResourceSlug; unique IDs and exact equality.
- IDs3,38,201,202,204 render as authorized inline Library views and direct/clase pages; both use one bank and count once.
- 17 dynamic records140–156; BY MOOD and BY TENSE are two navigation views of those same records.
- No explicit collection field on these65 source records.17 carry verbalSystem=true and surface in Sistema verbal;34 Grammar general. No invented family grouping.
- 65 resource slugs resolve to same IDs. Direct routes, inline viewers, language/query strings, SystemHub and public previews do not multiply records. No additional non-conversation legacy alias entries found in resource slug map.

All **123 page entry files** were reconciled: 93 match lesson-route sources across the complete library; the remaining 30 are catalog/hub, resource, guide, account, marketing, legal or teacher surfaces, not additional active lessons. The machine-readable methodology lists all 30. Dynamic `/sistema-verbal/[slug]` resolves 17 records; it must not be counted as one lesson or 17 extra page files.

In particular, IDs **3, 38, 201, 202 and 204** have two entry surfaces: authorized inline Library views and direct `/clase/ID` pages. Both render the same bank. The inline viewer has text/task grids and generic hints; the direct page uses text disclosures. Neither supplies the missing native phonetics audio/articulation experience.

| Excluded source | IDs | Reason |
| --- | --- | --- |
| [`archive/initial-draft-lessons.ts`](../../archive/initial-draft-lessons.ts) | 1, 2, 4, 5, 6, 7, 8, 9, 10, 12 | Explicitly retired starter records, no runtime imports; includes categories outside current audit. ID3 is deliberately retained active. |
| [`archive/grammar-progress.md`](../../archive/grammar-progress.md) | 49, 50, 51, 52, 53, 54, 55, 56 | Historical September7 checkpoint claims; neither current catalogue IDs nor live page routes. Not current coverage. |

No dedicated current phonetics/listening/vocabulary curriculum document found. Detailed curricula and styles largely live in source; historical grammar checkpoint is not current inventory.

- Source audit of preserved repository, not live-production inventory or runtime acceptance.
- No browser screenshots/desktop/mobile interaction executed; CSS/handler review does not prove responsive appearance or accessibility.
- 67 audio files and metadata verified, but no audio audition: claimed accents, naturalness, sound effects, prosody and overlaps remain unverified.
- Durations are explicit teacher-selection estimates; no classroom observations.
- CEFR/PCIC mappings are editorial judgments and selected-system coverage, not exhaustive certification.
- Exact strings/structure can be checked mechanically; semantic quality and visual coherence require review.
- History was sampled; no speculation about author intent or production-speed causation.

## 4. Exact current metrics

### Category and quality

| Category | Records | FREE | PRO | A Strong | B Foundation | C Repair | D Rebuild | E Archive |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gramática | 51 | 2 | 49 | 1 | 13 | 36 | 1 | 0 |
| Fonética | 3 | 2 | 1 | 0 | 0 | 2 | 1 | 0 |
| Escucha | 8 | 2 | 6 | 0 | 3 | 5 | 0 | 0 |
| Vocabulario | 3 | 2 | 1 | 0 | 1 | 2 | 0 | 0 |
| TOTAL | 65 | 8 | 57 | 1 | 17 | 45 | 2 | 0 |

### Primary CEFR — each record counted once

| Category | A1 | A2 | B1 | B2 | C1 | C2 | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Gramática | 17 | 9 | 10 | 9 | 5 | 1 | 51 |
| Fonética | 3 | 0 | 0 | 0 | 0 | 0 | 3 |
| Escucha | 1 | 3 | 1 | 1 | 1 | 1 | 8 |
| Vocabulario | 2 | 1 | 0 | 0 | 0 | 0 | 3 |
| TOTAL | 23 | 13 | 11 | 10 | 6 | 2 | 65 |

### Advertised range memberships — not variant counts

| Category | A1 | A2 | B1 | B2 | C1 | C2 |
| --- | --- | --- | --- | --- | --- | --- |
| Gramática | 17 | 14 | 11 | 11 | 7 | 1 |
| Fonética | 3 | 1 | 1 | 1 | 1 | 0 |
| Escucha | 1 | 3 | 1 | 1 | 1 | 1 |
| Vocabulario | 2 | 1 | 1 | 0 | 0 | 0 |
| TOTAL memberships | 23 | 19 | 14 | 13 | 9 | 2 |

These memberships sum to **80**, because a single record may advertise multiple levels. For example, Mouth Lab’s A1–C1 range remains one A1-primary record; it is not five independently adapted lessons.

There are **43 distinct thumbnail assets** across 65 references; all resolve. **40** records need interaction/visual redesign, **47** need pedagogical repair, and **0** need only metadata/thumbnail repair. Flags can overlap. **64** have an implemented usable bank/flow; ID 3 remains a short starter rather than the promised complete class. Implementation completeness does not override a C/D grade.

CEFR plausibility judgments: **44 plausible, 20 mixed-scope, 1 insufficient evidence**. “Mixed-scope” means the core and extensions require separation or further support; it does not recommend automatically lowering the level. The insufficient-evidence flag is ID 156: a rare historical form alone does not demonstrate C2 communicative demand.

### Major category gaps

| Category | Major gaps |
| --- | --- |
| Gramática | Correctness and semantic assessment in existing lessons; Por/para use contrast; reported/deictic speech; passive/impersonal se; Partial reflexive/experiencer/comparison and advanced discourse extensions, not missing tense inventory |
| Fonética | Audible discrimination/production and articulatory support; Connected speech, pragmatic intonation and intentional regional modules; No separately authored upper-level pathways despite the Mouth Lab range |
| Escucha | Valid evidence/chronology and freer transfer in affected lessons; Beginner transaction/clarification and sustained multi-minute listening; Verified regional/prosodic input, news/vox-pop and multi-party turn tracking |
| Vocabulario | Hidden/repeated retrieval, register and selected-word reuse; Coherent health/help/time/detail lexical use beyond existing themes; Dedicated B1/B2 collocations and C1/C2 lexical nuance |

## 5. Quality classification

| Grade | Meaning | Count |
| --- | --- | --- |
| A | STRONG | 1 |
| B | GOOD FOUNDATION | 17 |
| C | REPAIR | 45 |
| D | REBUILD CANDIDATE | 2 |
| E | RETIRE/ARCHIVE CANDIDATE | 0 |

A means strong source alignment/minor work; B means preserve a good foundation with modest improvement; C means focused substantial repair; D means preserve the concept while rebuilding its delivery; E would mean a retirement/archive candidate. **No E records or archival actions are recommended here.**

Review full banks and actual renderer actions, including supported oral teaching; penalize evidenced validity/mechanism defects, not renderer reuse alone. Not assessed as ready: browser, audio audition and classroom timing were not performed.

High-confidence language issues include duplicated insertions in 45/47, temporal/negation/relative errors in 213/217/218, and invalidly narrow conditional judgments in 31/151/152. [RAE/ASALE DPD, si §1.1a/1.1c](https://www.rae.es/dpd/si) supports future periphrasis in real conditions and accepted pluperfect-subjunctive result clauses. The flagged distractor in 152 includes an editorial label inside its option: the whole option is not a grammatical answer, but its normative framing is still misleading. Review the actual rendered sentence and context rather than mechanically changing a key.

## 6. Complete active lesson inventory

Each `Lesson ID` heading below defines exactly one active catalog record. All collections are the literal stored value (`null` here); the separate catalog section is the actual UI grouping. Source paths and locators connect every qualitative judgment to the authored bank and renderer. Estimates assume teacher-selected use and are not observed duration.

### Gramática

#### Lesson 40 · La Fábrica de los Nombres

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/la-fabrica-de-los-nombres` / `/resources/spanish-grammar-lesson-a1-la-fabrica-de-los-nombres` |
| Route source | [`app/la-fabrica-de-los-nombres/page.tsx`](../../app/la-fabrica-de-los-nombres/page.tsx) |
| Access / collection / section | FREE / null / Gramática general |
| Thumbnail | [`public/previews/noun-studio-v91.webp`](../../public/previews/noun-studio-v91.webp) |
| Objective | Name belongings with accurate article, gender and plural forms, then repack a travel box for two people. |
| Focus | common/proper nouns; grammatical gender and frequent exceptions; regular plurals and z→ces; article/noun agreement; recognition of gender-dependent meaning |
| Visual concept | factory art direction with a static illustrated hero (/grammar-worlds/noun-factory.webp), simulated depth/CSS animation and the same dark/cream station, quiz and oral-card layout. Catalogue calls it a 3D world; no spatial manipulation is implemented. |
| Principal interaction | Scroll or jump to explanatory stations; open optional details; select one option for each of eight MCQs; unlock correction only after answering the whole series; teacher guides three oral tasks and the final mission. |
| Volume | 5 explanatory stations, 20 bilingual examples, 4 introductory contrasts, 4 error contrasts, 8 explained MCQs, 3 oral prompts and 1 final mission. |
| Renderer | generic; [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) |
| Declared duration | 65–80 min |
| Estimated selected duration | 40–60 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial reusable explanation and oral mission survive, but the repeated rule/quiz layout needs a focused meaning-first interaction redesign to meet v2; specific source defects are separated below. |
| CEFR plausibility | plausible. Everyday naming/describing with models supports A1; peripheral recognition material should be optional. |

**Current concerns**

- The visual metaphor remains chiefly a hero/navigation wrapper over rule → examples → whole-series MCQ → oral cards; no topic-specific manipulation supports discovery.
- DOMINIO DEL MÓDULO reports stations visited (including scrolling), not demonstrated mastery.
- The plural rule states consonant + -es without marking common invariant -s/-x limits; appropriate first pattern needs an explicit boundary.
- Recognition contrast el capital/la capital is peripheral to first-day naming and should remain optional.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.
- Historical nextPath links in GrammarWorld data diverge from current catalogue prerequisites, e.g. 40→41 while 41 requires42; reconcile selected-route guidance in a later repair without changing URLs in this audit.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 40`: La Fábrica de los Nombres; primary A1; route /la-fabrica-de-los-nombres; catalogue duration 65–80 min
- [`app/la-fabrica-de-los-nombres/page.tsx`](../../app/la-fabrica-de-los-nombres/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `nounFactory`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress / openStation / IntersectionObserver`: Progress equals visited stations / station count and is labelled DOMINIO DEL MÓDULO.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `gw-map / gw-practice / gw-speaking / gw-mission`: Actual actions are section navigation, disclosures and MCQ selection; final production is supplied as teacher-led prompts.
- [`app/grammar-worlds/style.css`](../../app/grammar-worlds/style.css) — `gw-world-scene and responsive media rules`: Static hero image receives CSS scale/translate/depth styling; mobile navigation is horizontally scrollable and grids collapse.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `nounFactory authored examples/keys/oral tasks`: The plural rule states consonant + -es without marking common invariant -s/-x limits; appropriate first pattern needs an explicit boundary.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `nounFactory authored examples/keys/oral tasks`: Recognition contrast el capital/la capital is peripheral to first-day naming and should remain optional.

#### Lesson 42 · La Galería de los Artículos

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/la-galeria-de-los-articulos` / `/resources/spanish-grammar-lesson-a1-la-galeria-de-los-articulos` |
| Route source | [`app/la-galeria-de-los-articulos/page.tsx`](../../app/la-galeria-de-los-articulos/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/article-gallery.webp`](../../public/grammar-worlds/article-gallery.webp) |
| Objective | Introduce an object and refer to it again so the listener knows whether it is new or identifiable. |
| Focus | definite/indefinite articles; new/shared reference; zero article with profession and unspecified quantity; al/del |
| Visual concept | gallery art direction with a static illustrated hero (/grammar-worlds/article-gallery.webp), simulated depth/CSS animation and the same dark/cream station, quiz and oral-card layout. Catalogue calls it a 3D world; no spatial manipulation is implemented. |
| Principal interaction | Scroll or jump to explanatory stations; open optional details; select one option for each of eight MCQs; unlock correction only after answering the whole series; teacher guides three oral tasks and the final mission. |
| Volume | 5 explanatory stations, 20 bilingual examples, 4 introductory contrasts, 4 error contrasts, 8 explained MCQs, 3 oral prompts and 1 final mission. |
| Renderer | generic; [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) |
| Declared duration | 65–80 min |
| Estimated selected duration | 40–60 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial reusable explanation and oral mission survive, but the repeated rule/quiz layout needs a focused meaning-first interaction redesign to meet v2; specific source defects are separated below. |
| CEFR plausibility | plausible. Everyday naming/describing with models supports A1; peripheral recognition material should be optional. |

**Current concerns**

- The visual metaphor remains chiefly a hero/navigation wrapper over rule → examples → whole-series MCQ → oral cards; no topic-specific manipulation supports discovery.
- DOMINIO DEL MÓDULO reports stations visited (including scrolling), not demonstrated mastery.
- Several single-key items rely on unstated discourse context: Necesito ___ información permits la when information is identifiable; closing a window can introduce una in a suitable scene. Make intended context explicit rather than treating all alternatives as intrinsically wrong.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.
- Historical nextPath links in GrammarWorld data diverge from current catalogue prerequisites, e.g. 40→41 while 41 requires42; reconcile selected-route guidance in a later repair without changing URLs in this audit.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 42`: La Galería de los Artículos; primary A1; route /la-galeria-de-los-articulos; catalogue duration 65–80 min
- [`app/la-galeria-de-los-articulos/page.tsx`](../../app/la-galeria-de-los-articulos/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `articleGallery`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress / openStation / IntersectionObserver`: Progress equals visited stations / station count and is labelled DOMINIO DEL MÓDULO.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `gw-map / gw-practice / gw-speaking / gw-mission`: Actual actions are section navigation, disclosures and MCQ selection; final production is supplied as teacher-led prompts.
- [`app/grammar-worlds/style.css`](../../app/grammar-worlds/style.css) — `gw-world-scene and responsive media rules`: Static hero image receives CSS scale/translate/depth styling; mobile navigation is horizontally scrollable and grids collapse.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `articleGallery authored examples/keys/oral tasks`: Several single-key items rely on unstated discourse context: Necesito ___ información permits la when information is identifiable; closing a window can introduce una in a suitable scene. Make intended context explicit rather than treating all alternatives as intrinsically wrong.

#### Lesson 41 · El Atelier de la Concordancia

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/el-atelier-de-la-concordancia` / `/resources/spanish-grammar-lesson-a1-el-atelier-de-la-concordancia` |
| Route source | [`app/el-atelier-de-la-concordancia/page.tsx`](../../app/el-atelier-de-la-concordancia/page.tsx) |
| Access / collection / section | FREE / null / Gramática general |
| Thumbnail | [`public/previews/agreement-studio-v91.webp`](../../public/previews/agreement-studio-v91.webp) |
| Objective | Describe rooms, people and clothing with agreeing adjectives and a controlled level of intensity. |
| Focus | adjective agreement; -o/-a and invariant-gender adjectives; neutral adjective position; muy + adjective; basic preposed evaluations |
| Visual concept | atelier art direction with a static illustrated hero (/grammar-worlds/agreement-atelier.webp), simulated depth/CSS animation and the same dark/cream station, quiz and oral-card layout. Catalogue calls it a 3D world; no spatial manipulation is implemented. |
| Principal interaction | Scroll or jump to explanatory stations; open optional details; select one option for each of eight MCQs; unlock correction only after answering the whole series; teacher guides three oral tasks and the final mission. |
| Volume | 5 explanatory stations, 20 bilingual examples, 4 introductory contrasts, 4 error contrasts, 8 explained MCQs, 3 oral prompts and 1 final mission. |
| Renderer | generic; [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) |
| Declared duration | 60–75 min |
| Estimated selected duration | 40–60 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / No / No |
| Quality | C — REPAIR. Substantial reusable explanation and oral mission survive, but the repeated rule/quiz layout needs a focused meaning-first interaction redesign to meet v2; specific source defects are separated below. |
| CEFR plausibility | plausible. Everyday naming/describing with models supports A1; peripheral recognition material should be optional. |

**Current concerns**

- The visual metaphor remains chiefly a hero/navigation wrapper over rule → examples → whole-series MCQ → oral cards; no topic-specific manipulation supports discovery.
- DOMINIO DEL MÓDULO reports stations visited (including scrolling), not demonstrated mastery.
- The free sample teaches sound form contrasts but the atelier never lets learners manipulate adjective agreement or revise a visual brief.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.
- Historical nextPath links in GrammarWorld data diverge from current catalogue prerequisites, e.g. 40→41 while 41 requires42; reconcile selected-route guidance in a later repair without changing URLs in this audit.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 41`: El Atelier de la Concordancia; primary A1; route /el-atelier-de-la-concordancia; catalogue duration 60–75 min
- [`app/el-atelier-de-la-concordancia/page.tsx`](../../app/el-atelier-de-la-concordancia/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `agreementAtelier`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress / openStation / IntersectionObserver`: Progress equals visited stations / station count and is labelled DOMINIO DEL MÓDULO.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `gw-map / gw-practice / gw-speaking / gw-mission`: Actual actions are section navigation, disclosures and MCQ selection; final production is supplied as teacher-led prompts.
- [`app/grammar-worlds/style.css`](../../app/grammar-worlds/style.css) — `gw-world-scene and responsive media rules`: Static hero image receives CSS scale/translate/depth styling; mobile navigation is horizontally scrollable and grids collapse.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `agreementAtelier authored examples/keys/oral tasks`: The free sample teaches sound form contrasts but the atelier never lets learners manipulate adjective agreement or revise a visual brief.

#### Lesson 43 · El Observatorio de las Distancias

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/el-observatorio-de-las-distancias` / `/resources/spanish-grammar-lesson-a1-el-observatorio-de-las-distancias` |
| Route source | [`app/el-observatorio-de-las-distancias/page.tsx`](../../app/el-observatorio-de-las-distancias/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/demonstrative-observatory.webp`](../../public/grammar-worlds/demonstrative-observatory.webp) |
| Objective | Direct another person to objects and distinguish alternatives using demonstratives from the speaker’s perspective. |
| Focus | este/ese/aquel paradigms; spatial deixis; neuter esto/eso/aquello; demonstrative position; A2 temporal/anaphoric extension |
| Visual concept | observatory art direction with a static illustrated hero (/grammar-worlds/demonstrative-observatory.webp), simulated depth/CSS animation and the same dark/cream station, quiz and oral-card layout. Catalogue calls it a 3D world; no spatial manipulation is implemented. |
| Principal interaction | Scroll or jump to explanatory stations; open optional details; select one option for each of eight MCQs; unlock correction only after answering the whole series; teacher guides three oral tasks and the final mission. |
| Volume | 5 explanatory stations, 20 bilingual examples, 4 introductory contrasts, 4 error contrasts, 8 explained MCQs, 3 oral prompts and 1 final mission. |
| Renderer | generic; [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) |
| Declared duration | 65–80 min |
| Estimated selected duration | 40–60 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / No / No |
| Quality | C — REPAIR. Substantial reusable explanation and oral mission survive, but the repeated rule/quiz layout needs a focused meaning-first interaction redesign to meet v2; specific source defects are separated below. |
| CEFR plausibility | mixed-scope. A1 everyday core is supported; explicit A2 extensions and combined final production require teacher selection instead of treating the whole bank as equally productive A1. |

**Current concerns**

- The visual metaphor remains chiefly a hero/navigation wrapper over rule → examples → whole-series MCQ → oral cards; no topic-specific manipulation supports discovery.
- DOMINIO DEL MÓDULO reports stations visited (including scrolling), not demonstrated mastery.
- Catalogue level is A1 while fifth station and final oral time prompt explicitly extend to A2; select the spatial core for A1.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.
- Historical nextPath links in GrammarWorld data diverge from current catalogue prerequisites, e.g. 40→41 while 41 requires42; reconcile selected-route guidance in a later repair without changing URLs in this audit.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 43`: El Observatorio de las Distancias; primary A1; route /el-observatorio-de-las-distancias; catalogue duration 65–80 min
- [`app/el-observatorio-de-las-distancias/page.tsx`](../../app/el-observatorio-de-las-distancias/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `demonstrativeObservatory`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress / openStation / IntersectionObserver`: Progress equals visited stations / station count and is labelled DOMINIO DEL MÓDULO.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `gw-map / gw-practice / gw-speaking / gw-mission`: Actual actions are section navigation, disclosures and MCQ selection; final production is supplied as teacher-led prompts.
- [`app/grammar-worlds/style.css`](../../app/grammar-worlds/style.css) — `gw-world-scene and responsive media rules`: Static hero image receives CSS scale/translate/depth styling; mobile navigation is horizontally scrollable and grids collapse.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `demonstrativeObservatory authored examples/keys/oral tasks`: Catalogue level is A1 while fifth station and final oral time prompt explicitly extend to A2; select the spatial core for A1.

#### Lesson 44 · La Casa de las Pertenencias

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/la-casa-de-las-pertenencias` / `/resources/spanish-grammar-lesson-a1-la-casa-de-las-pertenencias` |
| Route source | [`app/la-casa-de-las-pertenencias/page.tsx`](../../app/la-casa-de-las-pertenencias/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/possession-house.webp`](../../public/grammar-worlds/possession-house.webp) |
| Objective | Assign belongings to owners, clarify ambiguous su and contrast whose object is whose. |
| Focus | mi/tu/su; nuestro/vuestro agreement; owner versus possessed object; su ambiguity; A2 tonic possessives |
| Visual concept | house art direction with a static illustrated hero (/grammar-worlds/possession-house.webp), simulated depth/CSS animation and the same dark/cream station, quiz and oral-card layout. Catalogue calls it a 3D world; no spatial manipulation is implemented. |
| Principal interaction | Scroll or jump to explanatory stations; open optional details; select one option for each of eight MCQs; unlock correction only after answering the whole series; teacher guides three oral tasks and the final mission. |
| Volume | 5 explanatory stations, 20 bilingual examples, 4 introductory contrasts, 4 error contrasts, 8 explained MCQs, 3 oral prompts and 1 final mission. |
| Renderer | generic; [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) |
| Declared duration | 65–80 min |
| Estimated selected duration | 40–60 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / No / No |
| Quality | C — REPAIR. Substantial reusable explanation and oral mission survive, but the repeated rule/quiz layout needs a focused meaning-first interaction redesign to meet v2; specific source defects are separated below. |
| CEFR plausibility | mixed-scope. A1 everyday core is supported; explicit A2 extensions and combined final production require teacher selection instead of treating the whole bank as equally productive A1. |

**Current concerns**

- The visual metaphor remains chiefly a hero/navigation wrapper over rule → examples → whole-series MCQ → oral cards; no topic-specific manipulation supports discovery.
- DOMINIO DEL MÓDULO reports stations visited (including scrolling), not demonstrated mastery.
- A1 catalogue includes explicitly A2 tonic possessives, and final mission requires three tonic contrasts; the extension is not optional in that final brief.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.
- Historical nextPath links in GrammarWorld data diverge from current catalogue prerequisites, e.g. 40→41 while 41 requires42; reconcile selected-route guidance in a later repair without changing URLs in this audit.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 44`: La Casa de las Pertenencias; primary A1; route /la-casa-de-las-pertenencias; catalogue duration 65–80 min
- [`app/la-casa-de-las-pertenencias/page.tsx`](../../app/la-casa-de-las-pertenencias/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `possessionHouse`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress / openStation / IntersectionObserver`: Progress equals visited stations / station count and is labelled DOMINIO DEL MÓDULO.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `gw-map / gw-practice / gw-speaking / gw-mission`: Actual actions are section navigation, disclosures and MCQ selection; final production is supplied as teacher-led prompts.
- [`app/grammar-worlds/style.css`](../../app/grammar-worlds/style.css) — `gw-world-scene and responsive media rules`: Static hero image receives CSS scale/translate/depth styling; mobile navigation is horizontally scrollable and grids collapse.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `possessionHouse authored examples/keys/oral tasks`: A1 catalogue includes explicitly A2 tonic possessives, and final mission requires three tonic contrasts; the extension is not optional in that final brief.

#### Lesson 45 · El Mercado de las Cantidades

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/el-mercado-de-las-cantidades` / `/resources/spanish-grammar-lesson-a1-el-mercado-de-las-cantidades` |
| Route source | [`app/el-mercado-de-las-cantidades/page.tsx`](../../app/el-mercado-de-las-cantidades/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/quantity-market.webp`](../../public/grammar-worlds/quantity-market.webp) |
| Objective | Plan quantities for a four-person meal and explain excess, shortage and comparisons between stalls. |
| Focus | cardinal/ordinal basics; poco/mucho/bastante; todo + article; otro/demasiado/nada/nadie; quantity/degree comparisons |
| Visual concept | market art direction with a static illustrated hero (/grammar-worlds/quantity-market.webp), simulated depth/CSS animation and the same dark/cream station, quiz and oral-card layout. Catalogue calls it a 3D world; no spatial manipulation is implemented. |
| Principal interaction | Scroll or jump to explanatory stations; open optional details; select one option for each of eight MCQs; unlock correction only after answering the whole series; teacher guides three oral tasks and the final mission. |
| Volume | 5 explanatory stations, 20 bilingual examples, 4 introductory contrasts, 4 error contrasts, 8 explained MCQs, 3 oral prompts and 1 final mission. |
| Renderer | generic; [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) |
| Declared duration | 70–85 min |
| Estimated selected duration | 40–60 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial reusable explanation and oral mission survive, but the repeated rule/quiz layout needs a focused meaning-first interaction redesign to meet v2; specific source defects are separated below. |
| CEFR plausibility | mixed-scope. A1 everyday core is supported; explicit A2 extensions and combined final production require teacher selection instead of treating the whole bank as equally productive A1. |

**Current concerns**

- The visual metaphor remains chiefly a hero/navigation wrapper over rule → examples → whole-series MCQ → oral cards; no topic-specific manipulation supports discovery.
- DOMINIO DEL MÓDULO reports stations visited (including scrolling), not demonstrated mastery.
- Practice[3] reads Trabajo ___ los días. but keys todos los, yielding Trabajo todos los los días; todos is the required insertion.
- No hay ___ en el puesto keys nadie but nada is also grammatical if the stall is empty of goods; intent is underspecified.
- Catalogue A1 includes A2-labelled totality/absence/comparison extension; select scope.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.
- Historical nextPath links in GrammarWorld data diverge from current catalogue prerequisites, e.g. 40→41 while 41 requires42; reconcile selected-route guidance in a later repair without changing URLs in this audit.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 45`: El Mercado de las Cantidades; primary A1; route /el-mercado-de-las-cantidades; catalogue duration 70–85 min
- [`app/el-mercado-de-las-cantidades/page.tsx`](../../app/el-mercado-de-las-cantidades/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `quantityMarket`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress / openStation / IntersectionObserver`: Progress equals visited stations / station count and is labelled DOMINIO DEL MÓDULO.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `gw-map / gw-practice / gw-speaking / gw-mission`: Actual actions are section navigation, disclosures and MCQ selection; final production is supplied as teacher-led prompts.
- [`app/grammar-worlds/style.css`](../../app/grammar-worlds/style.css) — `gw-world-scene and responsive media rules`: Static hero image receives CSS scale/translate/depth styling; mobile navigation is horizontally scrollable and grids collapse.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `quantityMarket authored examples/keys/oral tasks`: Practice[3] reads Trabajo ___ los días. but keys todos los, yielding Trabajo todos los los días; todos is the required insertion.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `quantityMarket authored examples/keys/oral tasks`: No hay ___ en el puesto keys nadie but nada is also grammatical if the stall is empty of goods; intent is underspecified.
- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `quantityMarket authored examples/keys/oral tasks`: Catalogue A1 includes A2-labelled totality/absence/comparison extension; select scope.

#### Lesson 48 · La Ciudad de los Motores

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1, A2 / A1–A2 |
| Route / resource preview | `/la-ciudad-de-los-motores` / `/resources/spanish-grammar-lesson-a1-a2-la-ciudad-de-los-motores` |
| Route source | [`app/la-ciudad-de-los-motores/page.tsx`](../../app/la-ciudad-de-los-motores/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/verb-city.webp`](../../public/grammar-worlds/verb-city.webp) |
| Objective | Give a guided overview of identity, state, routine, plans and a short memory using appropriate basic verb choices. |
| Focus | regular voseo present; essential irregular present forms; ser/estar/hay; ir a + infinitive; recognition of imperfect/indefinite/perfect perspectives |
| Visual concept | city art direction with a static illustrated hero (/grammar-worlds/verb-city.webp), simulated depth/CSS animation and the same dark/cream station, quiz and oral-card layout. Catalogue calls it a 3D world; no spatial manipulation is implemented. |
| Principal interaction | Scroll or jump to explanatory stations; open optional details; select one option for each of eight MCQs; unlock correction only after answering the whole series; teacher guides three oral tasks and the final mission. |
| Volume | 5 explanatory stations, 20 bilingual examples, 4 introductory contrasts, 4 error contrasts, 8 explained MCQs, 3 oral prompts and 1 final mission. |
| Renderer | generic; [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) |
| Declared duration | 90–110 min |
| Estimated selected duration | 45–70 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial reusable explanation and oral mission survive, but the repeated rule/quiz layout needs a focused meaning-first interaction redesign to meet v2; specific source defects are separated below. |
| CEFR plausibility | mixed-scope. A1 everyday core is supported; explicit A2 extensions and combined final production require teacher selection instead of treating the whole bank as equally productive A1. |

**Current concerns**

- The visual metaphor remains chiefly a hero/navigation wrapper over rule → examples → whole-series MCQ → oral cards; no topic-specific manipulation supports discovery.
- DOMINIO DEL MÓDULO reports stations visited (including scrolling), not demonstrated mastery.
- One eight-item quiz spans present, three copular/existential choices, future periphrasis and three past perspectives; it cannot evidence mastery of that system.
- Final mission combines habitual present, four plans and a three-past memory; it must be framed as a teacher-selected A1/A2 survey, not first-pass A1 productive demand.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.
- Historical nextPath links in GrammarWorld data diverge from current catalogue prerequisites, e.g. 40→41 while 41 requires42; reconcile selected-route guidance in a later repair without changing URLs in this audit.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 48`: La Ciudad de los Motores; primary A1; route /la-ciudad-de-los-motores; catalogue duration 90–110 min
- [`app/la-ciudad-de-los-motores/page.tsx`](../../app/la-ciudad-de-los-motores/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `verbCity`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress / openStation / IntersectionObserver`: Progress equals visited stations / station count and is labelled DOMINIO DEL MÓDULO.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `gw-map / gw-practice / gw-speaking / gw-mission`: Actual actions are section navigation, disclosures and MCQ selection; final production is supplied as teacher-led prompts.
- [`app/grammar-worlds/style.css`](../../app/grammar-worlds/style.css) — `gw-world-scene and responsive media rules`: Static hero image receives CSS scale/translate/depth styling; mobile navigation is horizontally scrollable and grids collapse.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `verbCity authored examples/keys/oral tasks`: One eight-item quiz spans present, three copular/existential choices, future periphrasis and three past perspectives; it cannot evidence mastery of that system.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `verbCity authored examples/keys/oral tasks`: Final mission combines habitual present, four plans and a three-past memory; it must be framed as a teacher-selected A1/A2 survey, not first-pass A1 productive demand.

#### Lesson 107 · Modo vs. tiempo verbal

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1, A2, B1, B2, C1 / A1–C1 |
| Route / resource preview | `/modo-vs-tiempo-verbal` / `/resources/spanish-grammar-lesson-a1-c1-modo-vs-tiempo-verbal` |
| Route source | [`app/modo-vs-tiempo-verbal/page.tsx`](../../app/modo-vs-tiempo-verbal/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/verb-city.webp`](../../public/grammar-worlds/verb-city.webp) |
| Objective | Distinguish mood from tense and apply a three-question analysis to a conjugated form. |
| Focus | mood versus tense; conditional belongs to indicative; imperative lacks tense series |
| Visual concept | Editorial navy/cream mini-class, two concept cards and three labeled example strips; catalogue verb-city image is absent from actual page. |
| Principal interaction | Open/collapse explanation, read3 contrast examples, read3 analysis questions, navigate to system hub; no learner response/check mechanism. |
| Volume | Short conceptual reference:2 concept cards,3 analyzed examples,1 two-confusion note and3-step method. |
| Renderer | shared-specialized; [`app/modo-vs-tiempo-verbal/page.tsx`](../../app/modo-vs-tiempo-verbal/page.tsx), [`app/verbal-system/MoodTenseDisclosure.tsx`](../../app/verbal-system/MoodTenseDisclosure.tsx), [`app/modo-vs-tiempo-verbal/style.css`](../../app/modo-vs-tiempo-verbal/style.css) |
| Declared duration | 20–30 min |
| Estimated selected duration | 10–20 min. Editorial estimate for stated teacher-led selection, not observed class timing. Read the reference, discuss the supplied examples and explain the method;20–30 requires teacher-added practice. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Honest mini-class/reference purpose with useful conceptual clarification and strong hub connection; a small transfer task would make the method usable rather than read-only. |
| CEFR plausibility | mixed-scope. Metalinguistic distinctions can support any level via a teacher, but the all-Spanish explanation is not an autonomous A1 experience. |

**Current concerns**

- No actual new-form analysis or exit task verifies that learner can use the method.
- A1–C1 is a consultation range, not5 authored level variants.
- 20–30 minutes requires considerable teacher examples beyond source.

**Scope / preservation notes**

- Do not force this intentionally short reference to45minutes.

**Evidence locators**

- [`app/modo-vs-tiempo-verbal/page.tsx`](../../app/modo-vs-tiempo-verbal/page.tsx) — `ModoVsTiempoPage`: Contains disclosure and three method questions, then hub link.
- [`app/verbal-system/MoodTenseDisclosure.tsx`](../../app/verbal-system/MoodTenseDisclosure.tsx) — `vmt-help-examples and vmt-help-note`: Three analyzed examples and conditional/mood clarification; defaults open only on standalone page.

#### Lesson 140 · Presente de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/sistema-verbal/presente-de-indicativo` / `/resources/spanish-grammar-lesson-a1-presente-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/grammar-worlds/verb-city.webp`](../../public/grammar-worlds/verb-city.webp) |
| Objective | Describe a routine, current state and scheduled plan with an appropriate present form. |
| Focus | present indicative; regular -ar/-er/-ir; voseo/tuteo; common irregulars; scheduled future |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/grammar-worlds/verb-city.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. The central formula only supplies -ÁS(-AS) for second singular and omits -ÉS/-ES and -ÍS/-ES, despite a three-conjugation objective. It is not a complete form-building guide. |
| CEFR plausibility | plausible. Short personal exchanges and optional English/starter support fit A1; formation needs strengthening before irregular retrieval. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- The central formula only supplies -ÁS(-AS) for second singular and omits -ÉS/-ES and -ÍS/-ES, despite a three-conjugation objective. It is not a complete form-building guide.
- Formation step3 asks learners to learn irregular families but provides no usable paradigm or family examples beyond six isolated sentences.
- Practice tests sé and scheduled future before much supported regular retrieval.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:140 formula, formation, practice`: Formula begins RAÍZ + -O / -ÁS(-AS); practice asks irregular saber; routine conversation includes eight personal questions.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 3 · Presente con vos

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/clase/3` / `/resources/spanish-grammar-lesson-a1-presente-con-vos` |
| Route source | [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/verb-city.webp`](../../public/grammar-worlds/verb-city.webp) |
| Objective | Ask and answer simple routine questions using regular present-tense voseo. |
| Focus | regular present voseo; routine questions; hacer extension |
| Visual concept | Generic teacher worksheet with collapsible steps; verb-city thumbnail has no corresponding city mechanic. Library uses a generic text/task-grid modal; the direct route uses text accordions. Thumbnail art is not an interactive lesson scene. |
| Principal interaction | Read explanation; reveal4 text blank prompts, discuss3 broad oral tasks, read homework. Library modal adds a hint button that only toggles to Pensá en el contexto; standalone route has no answers. |
| Volume | 1 warmup,1 short rule,4 unkeyed blanks,3 oral tasks and1 homework assignment; no dedicated voseo scene or conjugation bank. |
| Renderer | generic; [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx), [`app/Library.tsx`](../../app/Library.tsx), [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx), [`app/page.tsx`](../../app/page.tsx) |
| Declared duration | 60 min |
| Estimated selected duration | 15–25 min. Editorial estimate for stated teacher-led selection, not observed class timing. Rule,4 oral blanks and a short selection of the3 discussion tasks; lengthy interviews would require teacher invention. |
| Appears implemented complete | No |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | D — REBUILD CANDIDATE. Preserve the voseo concept and ID, but a four-blank generic worksheet is not the promised60-minute designed experience. It needs a rebuilt practice/interaction spine. |
| CEFR plausibility | plausible. Personal routine questions with simple verbs fit A1; the actual prompts need starters/models for comparison/interview tasks. |

**Current concerns**

- 60-minute catalogue claim is unsupported by supplied teaching material.
- hacer is tested without irregular explanation or answer key.
- No worked contrast with tú, retrieval feedback or incremental speaking scaffolds.
- The inline Library viewer repeats Pensá en el contexto as every hint; the direct /clase route has no item-specific hint or answer key.

**Scope / preservation notes**

- ID3 is explicitly protected in archive/grammar-progress.md; D means future rebuild proposal, never deletion or silent replacement.
- Surface distinction: the Library card opens the authorized inline viewer; /clase is also a valid direct/resource destination. Neither supplies embedded audio, image-based articulation or a bespoke task engine for this record.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `id:3`: Contains exactly4 practice and3 speaking strings; advertised60min.
- [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) — `GrammarStep práctica`: Details reveal prompt text, not a solution or diagnostic feedback.
- [`app/Library.tsx`](../../app/Library.tsx) — `activeLesson.practice hint handler`: All hints toggle to the same Pensá en el contexto text.
- [`app/Library.tsx`](../../app/Library.tsx) — `lessonHref/openLesson and activeLesson viewer (around lines 838–861 and 1930–2160)`: Authorized records without path/special open inline text/task grids; all hint buttons use the same context hint. Resource/direct links use /clase accordions. Both render the same bank and count once.

#### Lesson 110 · El Taller de las Capas

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/grupos-de-palabras-con-sentido` / `/resources/spanish-grammar-lesson-a1-el-taller-de-las-capas` |
| Route source | [`app/grupos-de-palabras-con-sentido/page.tsx`](../../app/grupos-de-palabras-con-sentido/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/layers-workshop.webp`](../../public/catalog-thumbnails/layers-workshop.webp) |
| Objective | Pasar de palabras sueltas a grupos claros para describir personas, objetos y lugares. |
| Focus | noun-phrase expansion; de/con/para complements; agreement retrieval; intensifier placement; vocative |
| Visual concept | Shared editorial grammar-studio layout: dark hero with orbit/grid decoration, colour-coded word tokens, cream task cards, preparation tabs and a dark conversation section. Creative title varies, while the same interface presents every PhraseLab. |
| Principal interaction | Notice a contrast; step through prepared phrase layers; tap tokens to assemble and revise a sentence; check against explicit accepted orders; answer meaning/form choices; compare prepared transformations; create three personal productions and choose from ten supported discussion prompts. |
| Volume | 4 layers, 6 principles, 3 orderTasks, 5 choices, 4 transformations, 3 production, 10 conversation, 18 principleExamples, 4 discoveryContrasts. Oral bank is selectable; it is not ten mandatory conversations. |
| Renderer | shared-specialized; [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Meaningful click-to-order construction, contrast, personal production and optional oral supports make a good foundation; preserve the progression and improve the bounded issues. |
| CEFR plausibility | plausible. A1 descriptions assemble familiar noun groups with visible models and concrete personal reference. |

**Current concerns**

- One fixed answer is accepted for each reconstruction; teacher should distinguish target neutral order from all possible Spanish orders.
- Layer and transformation controls reveal prepared versions; they do not let a learner independently add arbitrary modifiers.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 110`: El Taller de las Capas; primary A1; route /grupos-de-palabras-con-sentido; catalogue duration ≈ 45 min
- [`app/grupos-de-palabras-con-sentido/page.tsx`](../../app/grupos-de-palabras-con-sentido/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) — `gruposConSentido`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `OrderBoard`: Learner selects/removes/resets tokens; checking uses exact task.answers arrays, so the construction mechanic is real but bounded.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `layer / transformation state and production/conversation sections`: Prepared examples change with tabs; ten oral cards include hidden starter/vocabulary/follow-up support.
- [`app/phrase-labs/style.css`](../../app/phrase-labs/style.css) — `responsive @media rules and reduced-motion block`: Contains narrow-screen grid collapse, 390px adjustments and reduced-motion rules; this is implementation evidence, not browser QA.
- [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) — `gruposConSentido authored examples/keys/oral tasks`: One fixed answer is accepted for each reconstruction; teacher should distinguish target neutral order from all possible Spanish orders.
- [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) — `gruposConSentido authored examples/keys/oral tasks`: Layer and transformation controls reveal prepared versions; they do not let a learner independently add arbitrary modifiers.

#### Lesson 111 · La Mesa de Montaje

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/de-palabras-a-oraciones-completas` / `/resources/spanish-grammar-lesson-a1-la-mesa-de-montaje` |
| Route source | [`app/de-palabras-a-oraciones-completas/page.tsx`](../../app/de-palabras-a-oraciones-completas/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/sentence-assembly.webp`](../../public/catalog-thumbnails/sentence-assembly.webp) |
| Objective | Construir una idea completa, transformarla y mover información sencilla sin perder claridad. |
| Focus | subject–verb agreement; subject–attribute agreement; basic SVO; negation; total/partial questions; time/place mobility |
| Visual concept | Shared editorial grammar-studio layout: dark hero with orbit/grid decoration, colour-coded word tokens, cream task cards, preparation tabs and a dark conversation section. Creative title varies, while the same interface presents every PhraseLab. |
| Principal interaction | Notice a contrast; step through prepared phrase layers; tap tokens to assemble and revise a sentence; check against explicit accepted orders; answer meaning/form choices; compare prepared transformations; create three personal productions and choose from ten supported discussion prompts. |
| Volume | 4 layers, 6 principles, 4 orderTasks, 5 choices, 5 transformations, 3 production, 10 conversation, 19 principleExamples, 4 discoveryContrasts. Oral bank is selectable; it is not ten mandatory conversations. |
| Renderer | shared-specialized; [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Meaningful click-to-order construction, contrast, personal production and optional oral supports make a good foundation; preserve the progression and improve the bounded issues. |
| CEFR plausibility | plausible. A1 supported statements, negatives and questions organize familiar information into complete short messages. |

**Current concerns**

- The useful oral endpoint is a selectable ten-question bank, but there is no explicit final performance success check beyond production checklists.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 111`: La Mesa de Montaje; primary A1; route /de-palabras-a-oraciones-completas; catalogue duration ≈ 45 min
- [`app/de-palabras-a-oraciones-completas/page.tsx`](../../app/de-palabras-a-oraciones-completas/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) — `oracionesCompletas`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `OrderBoard`: Learner selects/removes/resets tokens; checking uses exact task.answers arrays, so the construction mechanic is real but bounded.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `layer / transformation state and production/conversation sections`: Prepared examples change with tabs; ten oral cards include hidden starter/vocabulary/follow-up support.
- [`app/phrase-labs/style.css`](../../app/phrase-labs/style.css) — `responsive @media rules and reduced-motion block`: Contains narrow-screen grid collapse, 390px adjustments and reduced-motion rules; this is implementation evidence, not browser QA.
- [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) — `oracionesCompletas authored examples/keys/oral tasks`: The useful oral endpoint is a selectable ten-question bank, but there is no explicit final performance success check beyond production checklists.

#### Lesson 47 · La Torre de las Coordenadas

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1, A2 / A1–A2 |
| Route / resource preview | `/la-torre-de-las-coordenadas` / `/resources/spanish-grammar-lesson-a1-a2-la-torre-de-las-coordenadas` |
| Route source | [`app/la-torre-de-las-coordenadas/page.tsx`](../../app/la-torre-de-las-coordenadas/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/adverb-tower.webp`](../../public/grammar-worlds/adverb-tower.webp) |
| Objective | Explain a familiar route or routine with spatial, temporal and manner information. |
| Focus | place/time adverbs; muy versus mucho; -mente adverbs; questions and por qué/porque; también/tampoco; sequence |
| Visual concept | tower art direction with a static illustrated hero (/grammar-worlds/adverb-tower.webp), simulated depth/CSS animation and the same dark/cream station, quiz and oral-card layout. Catalogue calls it a 3D world; no spatial manipulation is implemented. |
| Principal interaction | Scroll or jump to explanatory stations; open optional details; select one option for each of eight MCQs; unlock correction only after answering the whole series; teacher guides three oral tasks and the final mission. |
| Volume | 5 explanatory stations, 20 bilingual examples, 4 introductory contrasts, 4 error contrasts, 8 explained MCQs, 3 oral prompts and 1 final mission. |
| Renderer | generic; [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) |
| Declared duration | 70–85 min |
| Estimated selected duration | 45–70 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial reusable explanation and oral mission survive, but the repeated rule/quiz layout needs a focused meaning-first interaction redesign to meet v2; specific source defects are separated below. |
| CEFR plausibility | mixed-scope. A1 everyday core is supported; explicit A2 extensions and combined final production require teacher selection instead of treating the whole bank as equally productive A1. |

**Current concerns**

- The visual metaphor remains chiefly a hero/navigation wrapper over rule → examples → whole-series MCQ → oral cards; no topic-specific manipulation supports discovery.
- DOMINIO DEL MÓDULO reports stations visited (including scrolling), not demonstrated mastery.
- Practice[7] Las llaves están ___ de la mesa keys encima de, yielding encima de de la mesa; correct insertion is encima.
- Final route mission asks for many simultaneous coordinate types without an intermediate independent retrieval stage.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.
- Historical nextPath links in GrammarWorld data diverge from current catalogue prerequisites, e.g. 40→41 while 41 requires42; reconcile selected-route guidance in a later repair without changing URLs in this audit.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 47`: La Torre de las Coordenadas; primary A1; route /la-torre-de-las-coordenadas; catalogue duration 70–85 min
- [`app/la-torre-de-las-coordenadas/page.tsx`](../../app/la-torre-de-las-coordenadas/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `adverbTower`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress / openStation / IntersectionObserver`: Progress equals visited stations / station count and is labelled DOMINIO DEL MÓDULO.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `gw-map / gw-practice / gw-speaking / gw-mission`: Actual actions are section navigation, disclosures and MCQ selection; final production is supplied as teacher-led prompts.
- [`app/grammar-worlds/style.css`](../../app/grammar-worlds/style.css) — `gw-world-scene and responsive media rules`: Static hero image receives CSS scale/translate/depth styling; mobile navigation is horizontally scrollable and grids collapse.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `adverbTower authored examples/keys/oral tasks`: Practice[7] Las llaves están ___ de la mesa keys encima de, yielding encima de de la mesa; correct insertion is encima.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `adverbTower authored examples/keys/oral tasks`: Final route mission asks for many simultaneous coordinate types without an intermediate independent retrieval stage.

#### Lesson 46 · La Central de las Identidades

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1, A2 / A1–A2 |
| Route / resource preview | `/la-central-de-las-identidades` / `/resources/spanish-grammar-lesson-a1-a2-la-central-de-las-identidades` |
| Route source | [`app/la-central-de-las-identidades/page.tsx`](../../app/la-central-de-las-identidades/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/pronoun-central.webp`](../../public/grammar-worlds/pronoun-central.webp) |
| Objective | Tell a scene involving people and objects without repeating every name, while preserving who does or receives each action. |
| Focus | subject omission; direct-object pronouns; indirect-object/experiencer pronouns; le→se combinations; reflexive/pronominal routines; interrogatives and relative que |
| Visual concept | central art direction with a static illustrated hero (/grammar-worlds/pronoun-central.webp), simulated depth/CSS animation and the same dark/cream station, quiz and oral-card layout. Catalogue calls it a 3D world; no spatial manipulation is implemented. |
| Principal interaction | Scroll or jump to explanatory stations; open optional details; select one option for each of eight MCQs; unlock correction only after answering the whole series; teacher guides three oral tasks and the final mission. |
| Volume | 5 explanatory stations, 20 bilingual examples, 4 introductory contrasts, 4 error contrasts, 8 explained MCQs, 3 oral prompts and 1 final mission. |
| Renderer | generic; [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) |
| Declared duration | 75–90 min |
| Estimated selected duration | 45–70 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial reusable explanation and oral mission survive, but the repeated rule/quiz layout needs a focused meaning-first interaction redesign to meet v2; specific source defects are separated below. |
| CEFR plausibility | mixed-scope. A1 everyday core is supported; explicit A2 extensions and combined final production require teacher selection instead of treating the whole bank as equally productive A1. |

**Current concerns**

- The visual metaphor remains chiefly a hero/navigation wrapper over rule → examples → whole-series MCQ → oral cards; no topic-specific manipulation supports discovery.
- DOMINIO DEL MÓDULO reports stations visited (including scrolling), not demonstrated mastery.
- Five stations compress subject, OD, OI, double clitics, reflexives, interrogatives and relatives into eight choices; not a mastery-sized assessment.
- Llamarse is labelled reflexive in practice feedback despite being a pronominal naming construction; the note only partially softens the simplification.
- Existing detailed ID106 should be the expansion path, not a duplicate pronoun-system rebuild.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.
- Historical nextPath links in GrammarWorld data diverge from current catalogue prerequisites, e.g. 40→41 while 41 requires42; reconcile selected-route guidance in a later repair without changing URLs in this audit.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 46`: La Central de las Identidades; primary A1; route /la-central-de-las-identidades; catalogue duration 75–90 min
- [`app/la-central-de-las-identidades/page.tsx`](../../app/la-central-de-las-identidades/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `pronounCentral`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress / openStation / IntersectionObserver`: Progress equals visited stations / station count and is labelled DOMINIO DEL MÓDULO.
- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `gw-map / gw-practice / gw-speaking / gw-mission`: Actual actions are section navigation, disclosures and MCQ selection; final production is supplied as teacher-led prompts.
- [`app/grammar-worlds/style.css`](../../app/grammar-worlds/style.css) — `gw-world-scene and responsive media rules`: Static hero image receives CSS scale/translate/depth styling; mobile navigation is horizontally scrollable and grids collapse.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `pronounCentral authored examples/keys/oral tasks`: Five stations compress subject, OD, OI, double clitics, reflexives, interrogatives and relatives into eight choices; not a mastery-sized assessment.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `pronounCentral authored examples/keys/oral tasks`: Llamarse is labelled reflexive in practice feedback despite being a pronominal naming construction; the note only partially softens the simplification.
- [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) — `pronounCentral authored examples/keys/oral tasks`: Existing detailed ID106 should be the expansion path, not a duplicate pronoun-system rebuild.

#### Lesson 106 · La estación de los dos destinos

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1, A2 / A1 · ampliación A2 |
| Route / resource preview | `/la-estacion-de-los-dos-destinos` / `/resources/spanish-grammar-lesson-a1-ampliacion-a2-la-estacion-de-los-dos-destinos` |
| Route source | [`app/la-estacion-de-los-dos-destinos/page.tsx`](../../app/la-estacion-de-los-dos-destinos/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/objetos-pronombres/estacion-hero.webp`](../../public/objetos-pronombres/estacion-hero.webp) |
| Objective | Identify what each participant does in a scene and replace recoverable references with appropriate OD/OI pronouns before combining them. |
| Focus | subject/object/recipient roles; personal a versus indirect object; lo/la/los/las; le/les; me/te/nos/os as OD or OI; optional se + OD combinations and placement; gustar as experiencer construction |
| Visual concept | Bespoke postal-station adventure with illustrated fantasy scene, role-coloured clickable sentence pieces, chapter map, delivery controls and an atlas; shares underlying typography/styles with the subjunctive adventure but implements its own language mechanics. |
| Principal interaction | Explore subject/OD/OI roles by touching sentence parts; visit eight stations in a guided sequence; answer four decisions with immediate explanatory retry feedback; choose objects/recipients and switch full phrase→OI→two-pronoun representation; skip clearly marked A2 extension if appropriate; practise oral reference and use atlas diagnostic. |
| Volume | 8 stations × 4 explained decisions + 8 final diagnostic decisions = 40; 24 oral prompts, 6 tables, 16 use cases, 16 contrasts, 16 error contrasts; 4 explorable sentence scenes and a 4-object/5-recipient delivery lab. |
| Renderer | bespoke; [`app/la-estacion-de-los-dos-destinos/page.tsx`](../../app/la-estacion-de-los-dos-destinos/page.tsx), [`app/la-estacion-de-los-dos-destinos/data.ts`](../../app/la-estacion-de-los-dos-destinos/data.ts) |
| Declared duration | 2 encuentros · a elección |
| Estimated selected duration | 40–100 min. Editorial estimate for teacher-led selection, explanation, retrieval and oral work; not observed class timing. ID106 range spans selected core through the explicitly two-meeting full bank. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | A — STRONG. Strong source-based model: role before label, meaningful participant contrast, real manipulable pronoun transformation, coherent retry explanations and oral reuse. Scope/accessibility/runtime still require delivery QA. |
| CEFR plausibility | plausible. Entry uses repeated familiar present-tense scenes and optional English support; double clitics/placement are explicitly A2 extensions and skippable. A1 guided + A2 extension is honest. |

**Current concerns**

- The atlas ends with diagnostic/reference guidance rather than a separate integrated final speaking screen; preserve the integration-unit oral tasks when selecting a 45-minute class.
- Bank exceeds one standard lesson: maintain the explicit two-meeting/teacher-selection promise and the optional A2 skip path.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 106`: La estación de los dos destinos; primary A1; route /la-estacion-de-los-dos-destinos; catalogue duration 2 encuentros · a elección
- [`app/la-estacion-de-los-dos-destinos/page.tsx`](../../app/la-estacion-de-los-dos-destinos/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/la-estacion-de-los-dos-destinos/data.ts`](../../app/la-estacion-de-los-dos-destinos/data.ts) — `units`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/la-estacion-de-los-dos-destinos/page.tsx`](../../app/la-estacion-de-los-dos-destinos/page.tsx) — `SentenceLab / scenes`: Four role-exploration scenes distinguish personal a, destination and gustar rather than treating a or personhood as the indirect-object rule.
- [`app/la-estacion-de-los-dos-destinos/page.tsx`](../../app/la-estacion-de-los-dos-destinos/page.tsx) — `DeliveryLab / parcels / recipients`: Changing object and recipient recomputes clitics across three representations, with explicit le/les→se explanation.
- [`app/la-estacion-de-los-dos-destinos/page.tsx`](../../app/la-estacion-de-los-dos-destinos/page.tsx) — `completed / unitIndex === 4 / atlas`: Completion requires correct decisions, progress is openly session-local, A2 extension has a skip link, and the atlas marks final two diagnostic items as extra.

#### Lesson 211 · Conecta la frase

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/conecta-la-frase` / `/resources/spanish-grammar-lesson-a1-conecta-la-frase` |
| Route source | [`app/conecta-la-frase/page.tsx`](../../app/conecta-la-frase/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/adverb-tower.webp`](../../public/grammar-worlds/adverb-tower.webp) |
| Objective | Unir ideas cotidianas con el conector que expresa la relación correcta y usarlas al hablar de la vida real. |
| Focus | y; ni; o; pero; uno…otro |
| Visual concept | Shared editorial SyntaxLab in connector mode: coloured three-part sentence/relationship diagrams, pattern tabs, decision/repair grids and oral cards. SyntaxVisuals changes span labels/classes; it has no scenario, filter, timeline-order or evidence-switch state. |
| Principal interaction | Interpret five activation pairs; select a pattern; choose MCQ answers that populate a centre diagram slot and immediately reveal feedback; choose a repair; perform five oral retrieval prompts and three production tasks; select final conversations with hidden starters/follow-ups. Any changed scenarios and fading supports are administered by the teacher. |
| Volume | 5 patterns, 10 decisions, 0 questionAnswerCycle, 5 repairs, 5 retrieval, 3 production, 8 conversation, 5 activationPairs, 1 finalTasks, 45 declaredTimelineMinutes. Meaning/repair/retrieval/oral items are authored; timeline minutes are declarations, not observed time. |
| Renderer | shared-specialized; [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx), [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Bounded meaning-based choices, semantic repair, independent retrieval and a genuine oral endpoint form a good foundation; teacher-led support fading should be represented honestly. |
| CEFR plausibility | plausible. Everyday familiar topics and model phrases support later A1, with short teacher-supported turns instead of requiring fluent monologue. |

**Current concerns**

- Five-minute final discussion plus 2–3 minute sustained talk is ambitious for early A1; the teacher must select prompts and allow short turns.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 211`: Conecta la frase; primary A1; route /conecta-la-frase; catalogue duration ≈ 45 min
- [`app/conecta-la-frase/page.tsx`](../../app/conecta-la-frase/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `conectaLaFrase`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `DecisionCard / RepairCard / SyntaxPreview`: Every selection has a single keyed correct index; choices are inserted verbatim into the centre visual and feedback is shown immediately.
- [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) — `connector visual function`: Stateless presentation component receives left/connector/right and renders spans. Naming a component Finder/Switch/Builder is not implementation of those mechanics.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `retrieval / production / conversation sections`: Five retrieval prompts, three production tasks and supported conversation create real teacher-led oral progression.
- [`app/syntax-labs/style.css`](../../app/syntax-labs/style.css) — `720px media rules`: Decision/repair/oral grids collapse to one column; pattern tabs scroll horizontally. No browser geometry/contrast claim is made.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `conectaLaFrase authored examples/keys/oral tasks`: Five-minute final discussion plus 2–3 minute sustained talk is ambitious for early A1; the teacher must select prompts and allow short turns.

#### Lesson 212 · Ideas dentro de ideas

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/ideas-dentro-de-ideas` / `/resources/spanish-grammar-lesson-a1-ideas-dentro-de-ideas` |
| Route source | [`app/ideas-dentro-de-ideas/page.tsx`](../../app/ideas-dentro-de-ideas/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/pronoun-central.webp`](../../public/grammar-worlds/pronoun-central.webp) |
| Objective | Construir mensajes A1 con una idea principal y otra dependiente para hablar de gustos, deseos, opiniones, personas, razones y objetivos. |
| Focus | infinitive subject + ser; gustar/querer + infinitive; creer que + indicative; antecedent + que + present; porque; para + infinitive |
| Visual concept | Shared editorial SyntaxLab in clause mode: coloured three-part sentence/relationship diagrams, pattern tabs, decision/repair grids and oral cards. SyntaxVisuals changes span labels/classes; it has no scenario, filter, timeline-order or evidence-switch state. |
| Principal interaction | Interpret five activation pairs; select a pattern; choose MCQ answers that populate a centre diagram slot and immediately reveal feedback; choose a repair; perform five oral retrieval prompts and three production tasks; select final conversations with hidden starters/follow-ups. Any changed scenarios and fading supports are administered by the teacher. |
| Volume | 7 patterns, 12 decisions, 4 questionAnswerCycle, 5 repairs, 5 retrieval, 3 production, 8 conversation, 5 activationPairs, 1 finalTasks, 45 declaredTimelineMinutes. Meaning/repair/retrieval/oral items are authored; timeline minutes are declarations, not observed time. |
| Renderer | shared-specialized; [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx), [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Bounded meaning-based choices, semantic repair, independent retrieval and a genuine oral endpoint form a good foundation; teacher-led support fading should be represented honestly. |
| CEFR plausibility | plausible. Everyday familiar topics and model phrases support later A1, with short teacher-supported turns instead of requiring fluent monologue. |

**Current concerns**

- Seven patterns and a 3–5 minute integrated final conversation suit supported later A1, not a first lesson; scaffold/reference-repair demands are substantial.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 212`: Ideas dentro de ideas; primary A1; route /ideas-dentro-de-ideas; catalogue duration ≈ 45 min
- [`app/ideas-dentro-de-ideas/page.tsx`](../../app/ideas-dentro-de-ideas/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `ideasDentroDeIdeas`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `DecisionCard / RepairCard / SyntaxPreview`: Every selection has a single keyed correct index; choices are inserted verbatim into the centre visual and feedback is shown immediately.
- [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) — `clause visual function`: Stateless presentation component receives left/connector/right and renders spans. Naming a component Finder/Switch/Builder is not implementation of those mechanics.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `retrieval / production / conversation sections`: Five retrieval prompts, three production tasks and supported conversation create real teacher-led oral progression.
- [`app/syntax-labs/style.css`](../../app/syntax-labs/style.css) — `720px media rules`: Decision/repair/oral grids collapse to one column; pattern tabs scroll horizontally. No browser geometry/contrast claim is made.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `ideasDentroDeIdeas authored examples/keys/oral tasks`: Seven patterns and a 3–5 minute integrated final conversation suit supported later A1, not a first lesson; scaffold/reference-repair demands are substantial.

#### Lesson 141 · Pretérito perfecto compuesto de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/sistema-verbal/preterito-perfecto-compuesto-indicativo` / `/resources/spanish-grammar-lesson-a2-preterito-perfecto-compuesto-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/past-b1/surf-perfecto.webp`](../../public/past-b1/surf-perfecto.webp) |
| Objective | Relate experience and recent results to a current time frame while recognizing regional alternatives. |
| Focus | present perfect indicative; haber + participle; experience/result; regional perfect/preterite |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/past-b1/surf-perfecto.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. Three formation statements never enumerate irregular participles, but practice tests hecho. |
| CEFR plausibility | plausible. Supported experience and recent-event exchanges are reasonable A2; follow-ups using conditional are optional stretch. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- Three formation statements never enumerate irregular participles, but practice tests hecho.
- The regional note correctly licenses American indefinido; practice feedback still risks presenting open-time markers as automatic selectors.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:141 regional, practice, contrast`: Regional notes explicitly allow Hoy hablé con Ana; practice includes hecho and five fixed-first choices.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 142 · Pretérito perfecto simple de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/sistema-verbal/preterito-perfecto-simple-indicativo` / `/resources/spanish-grammar-lesson-a2-preterito-perfecto-simple-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/past-b1/surf-indefinido.webp`](../../public/past-b1/surf-indefinido.webp) |
| Objective | Narrate a completed event sequence and a bounded period in the past. |
| Focus | preterite/indefinido; regular endings; strong irregulars; narrative sequence |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/past-b1/surf-indefinido.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. Strong irregulars are listed together in one step with no retrieval ladder from regular forms. |
| CEFR plausibility | plausible. Short sequenced personal narratives with English support fit A2; selecting a few irregular families is necessary. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- Strong irregulars are listed together in one step with no retrieval ladder from regular forms.
- Some distractors are meaningless phrases (e.g. he abierto mañana), so sequence/aspect is not truly contrasted.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:142 formation, practice, transform`: Lists tuve/pude/puse/dije/fui; transformations order llegar/abrir/sentarse and close a bounded Lima period.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 143 · Pretérito imperfecto de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/sistema-verbal/preterito-imperfecto-indicativo` / `/resources/spanish-grammar-lesson-a2-preterito-imperfecto-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/past-b1/surf-imperfecto.webp`](../../public/past-b1/surf-imperfecto.webp) |
| Objective | Describe a past setting or repeated habit and contrast it with an interrupting event. |
| Focus | imperfect indicative; past descriptions/habits; imperfect/preterite contrast |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/past-b1/surf-imperfecto.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. The three irregular forms are named but no plural conjugation model is provided. |
| CEFR plausibility | plausible. Scaffolded childhood descriptions and events fit A2, with teacher support for interruption. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- The three irregular forms are named but no plural conjugation model is provided.
- A wrong option literally reads llamaba una vez cerrada, so the interruption question cannot diagnose genuine aspect understanding.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:143 practice, uses, transform`: Four functions and two aspect contrasts; practice pairs llamó with llamaba una vez cerrada and ha llamar.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 144 · Futuro simple de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/sistema-verbal/futuro-simple-indicativo` / `/resources/spanish-grammar-lesson-a2-futuro-simple-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/catalog-thumbnails/future-city.webp`](../../public/catalog-thumbnails/future-city.webp) |
| Objective | Make predictions and promises, then distinguish these from plans and present-time conjecture. |
| Focus | simple future; future irregular stems; ir a contrast; epistemic future |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/catalog-thumbnails/future-city.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. One transformation calls Va a llover a plan to convert into a prediction; weather phrasing already expresses prediction, so plan/prediction is falsely mapped to form. |
| CEFR plausibility | mixed-scope. Plans and simple predictions are accessible with A2 support; conjecture, societal forecasts and distinguishing epistemic from temporal meaning raise demand beyond a uniform A2 label. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- One transformation calls Va a llover a plan to convert into a prediction; weather phrasing already expresses prediction, so plan/prediction is falsely mapped to form.
- The visual marks future only even when the target sentence Serán las cinco concerns present conjecture.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:144 uses, transform, conversation`: Includes Serán las cinco, Ana estará en casa and technology/profession predictions; transform says Convertí el plan en predicción: Va a llover.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 145 · Imperativo afirmativo y negativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/sistema-verbal/imperativo` / `/resources/spanish-grammar-lesson-a2-imperativo-afirmativo-y-negativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/la-isla-vota/island-command-table-v1.webp`](../../public/la-isla-vota/island-command-table-v1.webp) |
| Objective | Give requests, advice, directions and prohibitions with appropriate person, pronoun placement and politeness. |
| Focus | affirmative/negative imperative; tú/vos/usted/ustedes; enclisis/proclisis; directive pragmatics |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/la-isla-vota/island-command-table-v1.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. Begins with ven/vení/venga and negative subjunctive, but does not give a regular formation sequence or explain subjunctive endings before testing llegues/entren. |
| CEFR plausibility | mixed-scope. Simple directions/requests fit A2; all persons, irregular commands, two attached pronouns and formal negotiation in one lesson need selected routes. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- Begins with ven/vení/venga and negative subjunctive, but does not give a regular formation sequence or explain subjunctive endings before testing llegues/entren.
- Strong authentic oral actions (give teacher instructions, directions and invitations) should be brought into controlled practice rather than isolated form selection.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:145 formation, examples, conversation`: Examples mix Ven/Vení/Venga-related forms, Dígame, Siéntense, Contámelo; eight speaking tasks include directing teacher actions.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 213 · Antes, después, cuando

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/antes-despues-cuando` / `/resources/spanish-grammar-lesson-a2-antes-despues-cuando` |
| Route source | [`app/antes-despues-cuando/page.tsx`](../../app/antes-despues-cuando/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/grammar-worlds/adverb-tower.webp`](../../public/grammar-worlds/adverb-tower.webp) |
| Objective | Narrar secuencias habituales o factuales con antes de, después de y cuando, y explicarlas con naturalidad. |
| Focus | antes de/después de + infinitive; habitual cuando + present; same-subject factual sequencing |
| Visual concept | Shared editorial SyntaxLab in timeline mode: coloured three-part sentence/relationship diagrams, pattern tabs, decision/repair grids and oral cards. SyntaxVisuals changes span labels/classes; it has no scenario, filter, timeline-order or evidence-switch state. |
| Principal interaction | Interpret five activation pairs; select a pattern; choose MCQ answers that populate a centre diagram slot and immediately reveal feedback; choose a repair; perform five oral retrieval prompts and three production tasks; select final conversations with hidden starters/follow-ups. Any changed scenarios and fading supports are administered by the teacher. |
| Volume | 3 patterns, 10 decisions, 0 questionAnswerCycle, 4 repairs, 5 retrieval, 3 production, 7 conversation, 5 activationPairs, 1 finalTasks, 45 declaredTimelineMinutes. Meaning/repair/retrieval/oral items are authored; timeline minutes are declarations, not observed time. |
| Renderer | shared-specialized; [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx), [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial meaning→choice→repair→retrieval→production progression supports the curriculum, but the cited content/output defects and overclaimed mechanics require focused repair. |
| CEFR plausibility | plausible. Concrete routines and practical plans remain in present/infinitive structures and end in supported connected explanation or negotiation. |

**Current concerns**

- The antes-de explanation says the infinitive action is anterior to the main action, reversing Antes de salir, desayuno: salir is later than desayuno.
- The después-de preview is como / después de / caminar, while the pattern example says Después de comer, camino un poco; SyntaxLab renders preview and does not render pattern.example, so the visible model reverses the intended events.
- Decision[5] renders Empieza la reunión cuando apago el teléfono while the prompt/feedback intends switching the phone off when the meeting starts.
- Repair[3] presents the already-correct Antes de desayunar, me despierto. as a chronology repair without explaining that the chosen answer is an equivalent paraphrase.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 213`: Antes, después, cuando; primary A2; route /antes-despues-cuando; catalogue duration ≈ 45 min
- [`app/antes-despues-cuando/page.tsx`](../../app/antes-despues-cuando/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `antesDespuesCuando`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `DecisionCard / RepairCard / SyntaxPreview`: Every selection has a single keyed correct index; choices are inserted verbatim into the centre visual and feedback is shown immediately.
- [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) — `timeline visual function`: Stateless presentation component receives left/connector/right and renders spans. Naming a component Finder/Switch/Builder is not implementation of those mechanics.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `retrieval / production / conversation sections`: Five retrieval prompts, three production tasks and supported conversation create real teacher-led oral progression.
- [`app/syntax-labs/style.css`](../../app/syntax-labs/style.css) — `720px media rules`: Decision/repair/oral grids collapse to one column; pattern tabs scroll horizontally. No browser geometry/contrast claim is made.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `antesDespuesCuando authored examples/keys/oral tasks`: The antes-de explanation says the infinitive action is anterior to the main action, reversing Antes de salir, desayuno: salir is later than desayuno.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `antesDespuesCuando authored examples/keys/oral tasks`: The después-de preview is como / después de / caminar, while the pattern example says Después de comer, camino un poco; SyntaxLab renders preview and does not render pattern.example, so the visible model reverses the intended events.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `antesDespuesCuando authored examples/keys/oral tasks`: Decision[5] renders Empieza la reunión cuando apago el teléfono while the prompt/feedback intends switching the phone off when the meeting starts.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `antesDespuesCuando authored examples/keys/oral tasks`: Repair[3] presents the already-correct Antes de desayunar, me despierto. as a chronology repair without explaining that the chosen answer is an equivalent paraphrase.

#### Lesson 214 · Si pasa esto…

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/si-pasa-esto` / `/resources/spanish-grammar-lesson-a2-si-pasa-esto` |
| Route source | [`app/si-pasa-esto/page.tsx`](../../app/si-pasa-esto/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/conditionals-path.webp`](../../public/catalog-thumbnails/conditionals-path.webp) |
| Objective | Expresar condiciones reales o posibles y consecuencias prácticas en decisiones cotidianas. |
| Focus | real/open si + present conditions; present consequences; clause-order variation; si versus sí |
| Visual concept | Shared editorial SyntaxLab in decision mode: coloured three-part sentence/relationship diagrams, pattern tabs, decision/repair grids and oral cards. SyntaxVisuals changes span labels/classes; it has no scenario, filter, timeline-order or evidence-switch state. |
| Principal interaction | Interpret five activation pairs; select a pattern; choose MCQ answers that populate a centre diagram slot and immediately reveal feedback; choose a repair; perform five oral retrieval prompts and three production tasks; select final conversations with hidden starters/follow-ups. Any changed scenarios and fading supports are administered by the teacher. |
| Volume | 3 patterns, 10 decisions, 4 questionAnswerCycle, 4 repairs, 5 retrieval, 3 production, 7 conversation, 5 activationPairs, 1 finalTasks, 45 declaredTimelineMinutes. Meaning/repair/retrieval/oral items are authored; timeline minutes are declarations, not observed time. |
| Renderer | shared-specialized; [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx), [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial meaning→choice→repair→retrieval→production progression supports the curriculum, but the cited content/output defects and overclaimed mechanics require focused repair. |
| CEFR plausibility | plausible. Concrete routines and practical plans remain in present/infinitive structures and end in supported connected explanation or negotiation. |

**Current concerns**

- Five of ten decisions ask the learner to select a literal arrow between already-complete clauses, yielding a low-demand symbol quiz instead of retrieving the conditional structure.
- The shared microcycle heading always says ¿Por qué? se pregunta; porque responde even when this lesson’s four items teach Sí, si… .
- The advertised chain does not branch or reveal consequences; evolving conditions exist only in teacher prompts.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 214`: Si pasa esto…; primary A2; route /si-pasa-esto; catalogue duration ≈ 45 min
- [`app/si-pasa-esto/page.tsx`](../../app/si-pasa-esto/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `siPasaEsto`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `DecisionCard / RepairCard / SyntaxPreview`: Every selection has a single keyed correct index; choices are inserted verbatim into the centre visual and feedback is shown immediately.
- [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) — `decision visual function`: Stateless presentation component receives left/connector/right and renders spans. Naming a component Finder/Switch/Builder is not implementation of those mechanics.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `retrieval / production / conversation sections`: Five retrieval prompts, three production tasks and supported conversation create real teacher-led oral progression.
- [`app/syntax-labs/style.css`](../../app/syntax-labs/style.css) — `720px media rules`: Decision/repair/oral grids collapse to one column; pattern tabs scroll horizontally. No browser geometry/contrast claim is made.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `siPasaEsto authored examples/keys/oral tasks`: Five of ten decisions ask the learner to select a literal arrow between already-complete clauses, yielding a low-demand symbol quiz instead of retrieving the conditional structure.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `siPasaEsto authored examples/keys/oral tasks`: The shared microcycle heading always says ¿Por qué? se pregunta; porque responde even when this lesson’s four items teach Sí, si… .
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `siPasaEsto authored examples/keys/oral tasks`: The advertised chain does not branch or reveal consequences; evolving conditions exist only in teacher prompts.

#### Lesson 112 · El Estudio del Detalle

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/expandir-y-precisar-descripciones` / `/resources/spanish-grammar-lesson-a2-el-estudio-del-detalle` |
| Route source | [`app/expandir-y-precisar-descripciones/page.tsx`](../../app/expandir-y-precisar-descripciones/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/detail-studio.webp`](../../public/catalog-thumbnails/detail-studio.webp) |
| Objective | Convertir una descripción básica en información útil, matizada y natural sin crear grupos interminables. |
| Focus | adjectival participles; identifying apposition; collectives; comparative adjectives; qué exclamatives; description editing |
| Visual concept | Shared editorial grammar-studio layout: dark hero with orbit/grid decoration, colour-coded word tokens, cream task cards, preparation tabs and a dark conversation section. Creative title varies, while the same interface presents every PhraseLab. |
| Principal interaction | Notice a contrast; step through prepared phrase layers; tap tokens to assemble and revise a sentence; check against explicit accepted orders; answer meaning/form choices; compare prepared transformations; create three personal productions and choose from ten supported discussion prompts. |
| Volume | 4 layers, 6 principles, 3 orderTasks, 6 choices, 5 transformations, 3 production, 10 conversation, 18 principleExamples, 4 discoveryContrasts. Oral bank is selectable; it is not ten mandatory conversations. |
| Renderer | shared-specialized; [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Meaningful click-to-order construction, contrast, personal production and optional oral supports make a good foundation; preserve the progression and improve the bounded issues. |
| CEFR plausibility | mixed-scope. Core description and comparison are supported A2; some oral follow-ups introduce B1-like conditional/relative demands without explicit new form scaffolding. |

**Current concerns**

- Several conversation prompts invite conditional or complex relative forms (recomendarías, describirías, lo más… que) beyond a tightly controlled A2 lesson; teacher selection/support matters.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 112`: El Estudio del Detalle; primary A2; route /expandir-y-precisar-descripciones; catalogue duration ≈ 45 min
- [`app/expandir-y-precisar-descripciones/page.tsx`](../../app/expandir-y-precisar-descripciones/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) — `describirConPrecision`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `OrderBoard`: Learner selects/removes/resets tokens; checking uses exact task.answers arrays, so the construction mechanic is real but bounded.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `layer / transformation state and production/conversation sections`: Prepared examples change with tabs; ten oral cards include hidden starter/vocabulary/follow-up support.
- [`app/phrase-labs/style.css`](../../app/phrase-labs/style.css) — `responsive @media rules and reduced-motion block`: Contains narrow-screen grid collapse, 390px adjustments and reduced-motion rules; this is implementation evidence, not browser QA.
- [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) — `describirConPrecision authored examples/keys/oral tasks`: Several conversation prompts invite conditional or complex relative forms (recomendarías, describirías, lo más… que) beyond a tightly controlled A2 lesson; teacher selection/support matters.

#### Lesson 113 · La Sala de las Posiciones

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/una-oracion-puede-moverse` / `/resources/spanish-grammar-lesson-a2-la-sala-de-las-posiciones` |
| Route source | [`app/una-oracion-puede-moverse/page.tsx`](../../app/una-oracion-puede-moverse/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/positions-gallery.webp`](../../public/catalog-thumbnails/positions-gallery.webp) |
| Objective | Ganar flexibilidad para organizar tiempo, lugar y modo según lo que queremos destacar. |
| Focus | time/place/manner ordering; information focus; alternative questions; exclamations/exhortations; impersonal weather hacer; scope of solo |
| Visual concept | Shared editorial grammar-studio layout: dark hero with orbit/grid decoration, colour-coded word tokens, cream task cards, preparation tabs and a dark conversation section. Creative title varies, while the same interface presents every PhraseLab. |
| Principal interaction | Notice a contrast; step through prepared phrase layers; tap tokens to assemble and revise a sentence; check against explicit accepted orders; answer meaning/form choices; compare prepared transformations; create three personal productions and choose from ten supported discussion prompts. |
| Volume | 4 layers, 6 principles, 4 orderTasks, 6 choices, 6 transformations, 3 production, 10 conversation, 15 principleExamples, 4 discoveryContrasts. Oral bank is selectable; it is not ten mandatory conversations. |
| Renderer | shared-specialized; [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Meaningful click-to-order construction, contrast, personal production and optional oral supports make a good foundation; preserve the progression and improve the bounded issues. |
| CEFR plausibility | plausible. A2 familiar time/place/manner rearrangement and short questions extend an already-known sentence, with model support. |

**Current concerns**

- Advertised moving pieces are realised in four short click-order tasks and prepared layer/version tabs; retain this usable foundation but expand task-specific focus manipulation.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 113`: La Sala de las Posiciones; primary A2; route /una-oracion-puede-moverse; catalogue duration ≈ 45 min
- [`app/una-oracion-puede-moverse/page.tsx`](../../app/una-oracion-puede-moverse/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) — `oracionFlexible`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `OrderBoard`: Learner selects/removes/resets tokens; checking uses exact task.answers arrays, so the construction mechanic is real but bounded.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `layer / transformation state and production/conversation sections`: Prepared examples change with tabs; ten oral cards include hidden starter/vocabulary/follow-up support.
- [`app/phrase-labs/style.css`](../../app/phrase-labs/style.css) — `responsive @media rules and reduced-motion block`: Contains narrow-screen grid collapse, 390px adjustments and reduced-motion rules; this is implementation evidence, not browser QA.
- [`app/phrase-labs/data.ts`](../../app/phrase-labs/data.ts) — `oracionFlexible authored examples/keys/oral tasks`: Advertised moving pieces are realised in four short click-order tasks and prepared layer/version tabs; retain this usable foundation but expand task-specific focus manipulation.

#### Lesson 217 · Pero hay un matiz

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/pero-hay-un-matiz` / `/resources/spanish-grammar-lesson-b1-pero-hay-un-matiz` |
| Route source | [`app/pero-hay-un-matiz/page.tsx`](../../app/pero-hay-un-matiz/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/connection-panel.webp`](../../public/catalog-thumbnails/connection-panel.webp) |
| Objective | Organizar posiciones, objeciones y alternativas negativas con ni… ni, sin embargo y aunque adversativo. |
| Focus | ni…ni; sin embargo; adversative aunque; counterargument organization |
| Visual concept | Shared editorial SyntaxLab in contrast mode: coloured three-part sentence/relationship diagrams, pattern tabs, decision/repair grids and oral cards. SyntaxVisuals changes span labels/classes; it has no scenario, filter, timeline-order or evidence-switch state. |
| Principal interaction | Interpret five activation pairs; select a pattern; choose MCQ answers that populate a centre diagram slot and immediately reveal feedback; choose a repair; perform five oral retrieval prompts and three production tasks; select final conversations with hidden starters/follow-ups. Any changed scenarios and fading supports are administered by the teacher. |
| Volume | 3 patterns, 10 decisions, 0 questionAnswerCycle, 4 repairs, 5 retrieval, 3 production, 6 conversation, 5 activationPairs, 1 finalTasks, 45 declaredTimelineMinutes. Meaning/repair/retrieval/oral items are authored; timeline minutes are declarations, not observed time. |
| Renderer | shared-specialized; [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx), [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial meaning→choice→repair→retrieval→production progression supports the curriculum, but the cited content/output defects and overclaimed mechanics require focused repair. |
| CEFR plausibility | plausible. Familiar opinions/reference clarification require connected speech and repair, supported by known indicative forms. |

**Current concerns**

- Three keyed ni…ni decisions lack preverbal no: El problema es ni el dinero ni el tiempo; Quiere viajar ni en tren ni en avión; Fue ni Pablo ni Lucía. These are positively framed main clauses with postverbal negative coordination.
- Activation cards labelled double negation pair No quiero conducir with quiero volar and No llamó Ana with llamó Marcos; the second claims are positive, contradicting their intended relation.
- The pattern preview inserts ni…ni as a single middle span, failing to show the discontinuous structure around both coordinated items.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 217`: Pero hay un matiz; primary B1; route /pero-hay-un-matiz; catalogue duration ≈ 45 min
- [`app/pero-hay-un-matiz/page.tsx`](../../app/pero-hay-un-matiz/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `peroHayUnMatiz`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `DecisionCard / RepairCard / SyntaxPreview`: Every selection has a single keyed correct index; choices are inserted verbatim into the centre visual and feedback is shown immediately.
- [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) — `contrast visual function`: Stateless presentation component receives left/connector/right and renders spans. Naming a component Finder/Switch/Builder is not implementation of those mechanics.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `retrieval / production / conversation sections`: Five retrieval prompts, three production tasks and supported conversation create real teacher-led oral progression.
- [`app/syntax-labs/style.css`](../../app/syntax-labs/style.css) — `720px media rules`: Decision/repair/oral grids collapse to one column; pattern tabs scroll horizontally. No browser geometry/contrast claim is made.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `peroHayUnMatiz authored examples/keys/oral tasks`: Three keyed ni…ni decisions lack preverbal no: El problema es ni el dinero ni el tiempo; Quiere viajar ni en tren ni en avión; Fue ni Pablo ni Lucía. These are positively framed main clauses with postverbal negative coordination.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `peroHayUnMatiz authored examples/keys/oral tasks`: Activation cards labelled double negation pair No quiero conducir with quiero volar and No llamó Ana with llamó Marcos; the second claims are positive, contradicting their intended relation.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `peroHayUnMatiz authored examples/keys/oral tasks`: The pattern preview inserts ni…ni as a single middle span, failing to show the discontinuous structure around both coordinated items.

#### Lesson 218 · La persona que tengo en mente

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/la-persona-que-tengo-en-mente` / `/resources/spanish-grammar-lesson-b1-la-persona-que-tengo-en-mente` |
| Route source | [`app/la-persona-que-tengo-en-mente/page.tsx`](../../app/la-persona-que-tengo-en-mente/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/positions-gallery.webp`](../../public/catalog-thumbnails/positions-gallery.webp) |
| Objective | Usar un antecedente expreso y una cláusula relativa para identificar un único referente y aclararlo cuando haya confusión. |
| Focus | restrictive antecedent + que; human nonrestrictive quien; reference repair; indicative tense recycling |
| Visual concept | Shared editorial SyntaxLab in referent mode: coloured three-part sentence/relationship diagrams, pattern tabs, decision/repair grids and oral cards. SyntaxVisuals changes span labels/classes; it has no scenario, filter, timeline-order or evidence-switch state. |
| Principal interaction | Interpret five activation pairs; select a pattern; choose MCQ answers that populate a centre diagram slot and immediately reveal feedback; choose a repair; perform five oral retrieval prompts and three production tasks; select final conversations with hidden starters/follow-ups. Any changed scenarios and fading supports are administered by the teacher. |
| Volume | 3 patterns, 10 decisions, 0 questionAnswerCycle, 4 repairs, 5 retrieval, 3 production, 6 conversation, 5 activationPairs, 1 finalTasks, 45 declaredTimelineMinutes. Meaning/repair/retrieval/oral items are authored; timeline minutes are declarations, not observed time. |
| Renderer | shared-specialized; [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx), [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial meaning→choice→repair→retrieval→production progression supports the curriculum, but the cited content/output defects and overclaimed mechanics require focused repair. |
| CEFR plausibility | plausible. Familiar opinions/reference clarification require connected speech and repair, supported by known indicative forms. |

**Current concerns**

- Quien-only keys for Lucía and Mario exclude equally possible explanatory que; visible left-hand text also omits the required comma before the nonrestrictive clause.
- First ambiguity repair offers two grammatical unambiguous resolutions (friend lives in Valencia or Marta lives there) but marks only the Marta reading correct without specifying that intended referent.
- Advertised finder has no candidate dataset, filters or state; the teacher must invent the competing candidates described by prompts.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 218`: La persona que tengo en mente; primary B1; route /la-persona-que-tengo-en-mente; catalogue duration ≈ 45 min
- [`app/la-persona-que-tengo-en-mente/page.tsx`](../../app/la-persona-que-tengo-en-mente/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `laPersonaQueTengoEnMente`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `DecisionCard / RepairCard / SyntaxPreview`: Every selection has a single keyed correct index; choices are inserted verbatim into the centre visual and feedback is shown immediately.
- [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) — `referent visual function`: Stateless presentation component receives left/connector/right and renders spans. Naming a component Finder/Switch/Builder is not implementation of those mechanics.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `retrieval / production / conversation sections`: Five retrieval prompts, three production tasks and supported conversation create real teacher-led oral progression.
- [`app/syntax-labs/style.css`](../../app/syntax-labs/style.css) — `720px media rules`: Decision/repair/oral grids collapse to one column; pattern tabs scroll horizontally. No browser geometry/contrast claim is made.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `laPersonaQueTengoEnMente authored examples/keys/oral tasks`: Quien-only keys for Lucía and Mario exclude equally possible explanatory que; visible left-hand text also omits the required comma before the nonrestrictive clause.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `laPersonaQueTengoEnMente authored examples/keys/oral tasks`: First ambiguity repair offers two grammatical unambiguous resolutions (friend lives in Valencia or Marta lives there) but marks only the Marta reading correct without specifying that intended referent.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `laPersonaQueTengoEnMente authored examples/keys/oral tasks`: Advertised finder has no candidate dataset, filters or state; the teacher must invent the competing candidates described by prompts.

#### Lesson 114 · El Laboratorio de la Segunda Versión

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/decir-mas-sin-repetir` / `/resources/spanish-grammar-lesson-b1-el-laboratorio-de-la-segunda-version` |
| Route source | [`app/decir-mas-sin-repetir/page.tsx`](../../app/decir-mas-sin-repetir/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/second-version-lab.webp`](../../public/catalog-thumbnails/second-version-lab.webp) |
| Objective | Añadir, quitar y ordenar información para hablar con claridad sin repetirlo todo. |
| Focus | recoverable nominal ellipsis; explanatory apposition; restrictive modifiers; action nominalization; quantity/intensity; elative adjectives |
| Visual concept | Shared editorial grammar-studio layout: dark hero with orbit/grid decoration, colour-coded word tokens, cream task cards, preparation tabs and a dark conversation section. Creative title varies, while the same interface presents every PhraseLab. |
| Principal interaction | Notice a contrast; step through prepared phrase layers; tap tokens to assemble and revise a sentence; check against explicit accepted orders; answer meaning/form choices; compare prepared transformations; create three personal productions and choose from ten supported discussion prompts. |
| Volume | 4 layers, 6 principles, 4 orderTasks, 6 choices, 5 transformations, 3 production, 10 conversation, 17 principleExamples, 4 discoveryContrasts. Oral bank is selectable; it is not ten mandatory conversations. |
| Renderer | shared-specialized; [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Meaningful click-to-order construction, contrast, personal production and optional oral supports make a good foundation; preserve the progression and improve the bounded issues. |
| CEFR plausibility | plausible. B1 reformulation of familiar information through ellipsis, apposition and emphasis supports connected, less repetitive descriptions. |

**Current concerns**

- The six structures are a broad B1 selection; keep ellipsis/apposition as the core and label nominalization/intensity as selectable extensions.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 114`: El Laboratorio de la Segunda Versión; primary B1; route /decir-mas-sin-repetir; catalogue duration ≈ 45 min
- [`app/decir-mas-sin-repetir/page.tsx`](../../app/decir-mas-sin-repetir/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `decirSinRepetir`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `OrderBoard`: Learner selects/removes/resets tokens; checking uses exact task.answers arrays, so the construction mechanic is real but bounded.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `layer / transformation state and production/conversation sections`: Prepared examples change with tabs; ten oral cards include hidden starter/vocabulary/follow-up support.
- [`app/phrase-labs/style.css`](../../app/phrase-labs/style.css) — `responsive @media rules and reduced-motion block`: Contains narrow-screen grid collapse, 390px adjustments and reduced-motion rules; this is implementation evidence, not browser QA.
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `decirSinRepetir authored examples/keys/oral tasks`: The six structures are a broad B1 selection; keep ellipsis/apposition as the core and label nominalization/intensity as selectable extensions.

#### Lesson 18 · El Pasado

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/past-b1` / `/resources/spanish-grammar-lesson-b1-el-pasado` |
| Route source | [`app/past-b1/page.tsx`](../../app/past-b1/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/past-b1/surf-indefinido.webp`](../../public/past-b1/surf-indefinido.webp) |
| Objective | Narrate a past story using event versus setting viewpoints, then connect completed action with now. |
| Focus | preterite; imperfect; present perfect; past contrast; regional variation |
| Visual concept | Coral/violet/teal editorial chapters with3 realistic surfer images. Closed sequence, open ongoing/habit view and present-result timelines give the same scene distinct grammatical perspectives. Representative surfer image inspected. |
| Principal interaction | Notice3 scene images; consult regular before irregular tables; reveal7 blanks; make6 contrast choices with immediate feedback; choose2 story slots; select20 oral questions across3 panels; finish with perfect recognition and recap. |
| Volume | 4 chapters,3 viewpoint scenes,15 six-person conjugation paradigms+6 perfect forms,7 reveals,6 two-choice contrasts,one2-slot builder,20 selectable oral prompts and20 support chunks. |
| Renderer | bespoke; [`app/past-b1/page.tsx`](../../app/past-b1/page.tsx), [`app/past-b1/style.css`](../../app/past-b1/style.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | 90 min |
| Estimated selected duration | 45–90 min. Editorial estimate for stated teacher-led selection, not observed class timing. Select key contrasts, regular-form refresh and one narrative panel for45–60; the full four-part bank plausibly takes90+. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | B — GOOD FOUNDATION. The scene metaphor materially clarifies aspect, with regular-first forms, contrasting readings and genuine narrative production. Preserve it; modest targeted repair can improve feedback and ending. |
| CEFR plausibility | plausible. Personal narrative, background/event contrast and regional explanations fit a B1 consolidation class; it is not a novice first exposure to all three paradigms. |

**Current concerns**

- The story builder accepts any setting/event choice and always says the learner built a setting/event, without explaining the changed reading.
- Final perfect section ends in3 reveals and recap, with no oral task to integrate that third tense.
- Ayer in a choice explanation is still treated too categorically despite the earlier good warning that markers are clues, not rules.
- Very long open-default page needs a teacher selection route for45minutes.

**Scope / preservation notes**

- 90min metadata is plausible as a full class bank; do not reduce simply to meet universal45min.
- Static asset inspected; no rendered mobile/browser validation.

**Evidence locators**

- [`app/past-b1/page.tsx`](../../app/past-b1/page.tsx) — `SurfLesson`: Same surfer in three views plus closed/open/connected timelines.
- [`app/past-b1/page.tsx`](../../app/past-b1/page.tsx) — `choices and story-builder`: 6 choices; builder simply concatenates selections, no correctness/perspective feedback.
- [`app/past-b1/page.tsx`](../../app/past-b1/page.tsx) — `perfect-practice and past-final`: Ends with3 reveal prompts and recap after last oral panel.

#### Lesson 146 · Condicional simple de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/sistema-verbal/condicional-simple-indicativo` / `/resources/spanish-grammar-lesson-b1-condicional-simple-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/catalog-thumbnails/conditionals-path.webp`](../../public/catalog-thumbnails/conditionals-path.webp) |
| Objective | Offer hypothetical results, polite requests and future-in-the-past statements. |
| Focus | conditional simple; hypothesis; politeness; reported future; past conjecture |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/catalog-thumbnails/conditionals-path.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. The same future-highlighted strip is used for consequence, past conjecture and future-in-the-past without a reference-time distinction. |
| CEFR plausibility | mixed-scope. Polite requests and familiar hypothetical choices fit B1 with scaffolds; tense backshift and past conjecture broaden the same lesson and need stretch labeling. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- The same future-highlighted strip is used for consequence, past conjecture and future-in-the-past without a reference-time distinction.
- One oral follow-up asks Lo habría escuchado, introducing conditional perfect outside this lesson.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:146 uses, transform, conversation`: Four uses include Dijo que llegaría and Serían las diez; transform changes Dice que vendrá to Dijo que vendría.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 147 · Pretérito pluscuamperfecto de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/sistema-verbal/preterito-pluscuamperfecto-indicativo` / `/resources/spanish-grammar-lesson-b1-preterito-pluscuamperfecto-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/past-b1/surf-perfecto.webp`](../../public/past-b1/surf-perfecto.webp) |
| Objective | Explain what had happened before another past event and use that ordering in a personal narrative. |
| Focus | pluperfect indicative; past anteriority; cause; reported prior event |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/past-b1/surf-perfecto.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. Generic past-only visual does not display the two past reference points central to this objective. |
| CEFR plausibility | plausible. Narrating a sequence and explaining a familiar cause is plausible B1 with reference-point support. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- Generic past-only visual does not display the two past reference points central to this objective.
- Last oral prompt introduces si hubiera...se habría, beyond the stated indicative target and prerequisites.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:147 uses, transform, conversation`: When-arrival contrasts and three transformations target prior events; final prompt asks counterfactual error avoidance.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 115 · La Línea de los Cambios

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/empezar-seguir-repetir-dejar-de-hacer` / `/resources/spanish-grammar-lesson-b1-la-linea-de-los-cambios` |
| Route source | [`app/empezar-seguir-repetir-dejar-de-hacer/page.tsx`](../../app/empezar-seguir-repetir-dejar-de-hacer/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/change-line.webp`](../../public/catalog-thumbnails/change-line.webp) |
| Objective | Contar cambios personales mostrando si una acción es habitual, empieza, continúa, se interrumpe o se repite. |
| Focus | soler; volver a; dejar de; ponerse a; estar a punto de; seguir + gerund |
| Visual concept | Shared editorial grammar-studio layout: dark hero with orbit/grid decoration, colour-coded word tokens, cream task cards, preparation tabs and a dark conversation section. Creative title varies, while the same interface presents every PhraseLab. |
| Principal interaction | Notice a contrast; step through prepared phrase layers; tap tokens to assemble and revise a sentence; check against explicit accepted orders; answer meaning/form choices; compare prepared transformations; create three personal productions and choose from ten supported discussion prompts. |
| Volume | 6 layers, 6 principles, 4 orderTasks, 6 choices, 6 transformations, 3 production, 10 conversation, 13 principleExamples, 4 discoveryContrasts. Oral bank is selectable; it is not ten mandatory conversations. |
| Renderer | shared-specialized; [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Meaningful click-to-order construction, contrast, personal production and optional oral supports make a good foundation; preserve the progression and improve the bounded issues. |
| CEFR plausibility | plausible. B1 learners narrate familiar habits and changes using aspectual frames and personal timelines, with optional starters. |

**Current concerns**

- The life-line metaphor is only tabbed prewritten text: there is no timeline placement or phase manipulation. Actual order tasks nevertheless provide useful form retrieval.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 115`: La Línea de los Cambios; primary B1; route /empezar-seguir-repetir-dejar-de-hacer; catalogue duration ≈ 45 min
- [`app/empezar-seguir-repetir-dejar-de-hacer/page.tsx`](../../app/empezar-seguir-repetir-dejar-de-hacer/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `perifrasesDeCambio`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `OrderBoard`: Learner selects/removes/resets tokens; checking uses exact task.answers arrays, so the construction mechanic is real but bounded.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `layer / transformation state and production/conversation sections`: Prepared examples change with tabs; ten oral cards include hidden starter/vocabulary/follow-up support.
- [`app/phrase-labs/style.css`](../../app/phrase-labs/style.css) — `responsive @media rules and reduced-motion block`: Contains narrow-screen grid collapse, 390px adjustments and reduced-motion rules; this is implementation evidence, not browser QA.
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `perifrasesDeCambio authored examples/keys/oral tasks`: The life-line metaphor is only tabbed prewritten text: there is no timeline placement or phase manipulation. Actual order tasks nevertheless provide useful form retrieval.

#### Lesson 31 · Condicionales paso a paso

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1, B2 / B1+ |
| Route / resource preview | `/condicionales-b1` / `/resources/spanish-grammar-lesson-b1-condicionales-paso-a-paso` |
| Route source | [`app/condicionales-b1/page.tsx`](../../app/condicionales-b1/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/conditionals-path.webp`](../../public/catalog-thumbnails/conditionals-path.webp) |
| Objective | Build conditional sentences progressively and explain condition/result time and reality. |
| Focus | real/hypothetical/counterfactual conditionals; form-building; mixed conditionals |
| Visual concept | Same portal/particle/character aesthetic as ID23 with a more explicitly ordered Spanish-only teaching sequence;9 step accordions per unit. |
| Principal interaction | Read3 foundation sections; enter5 units; analyze meaning, uses, form, examples and errors; reveal4 exercises and discuss4 starter-supported prompts per unit; finish with comparison,5-question diagnostic and5-perspective production. |
| Volume | 5 units×(3 uses,3 construction blocks,2 tables,4 examples,3 errors,4 reveals,4 oral prompts),5 diagnostic questions and5-perspective final task. |
| Renderer | bespoke; [`app/condicionales-b1/page.tsx`](../../app/condicionales-b1/page.tsx), [`app/condicionales-b1/data.ts`](../../app/condicionales-b1/data.ts), [`app/condicionales-b1/style.css`](../../app/condicionales-b1/style.css), [`app/condicionales/style.css`](../../app/condicionales/style.css) |
| Declared duration | 90+ min |
| Estimated selected duration | 45–110 min. Editorial estimate for stated teacher-led selection, not observed class timing. One or two selected units with synthesis can fill45–60; complete five-unit explicit teaching is90+. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Worth retaining for clearer form sequencing, Spanish instruction and stronger scaffolds than ID23. Needs correction of false error labeling, explicit B1/B2 selection and a task beyond revealing blanks. |
| CEFR plausibility | mixed-scope. B1 can handle real-condition refresh and supported remote scenarios; third/mixed conditional production demands preparation in B2 forms. Full all-system run is not uniform B1. |

**Current concerns**

- First conditional marks Si va a llover, cancelaremos wrong instead of a possible different emphasis; DPD si1.1a accepts ir a + infinitive in protasis.
- B1 PROGRESIVO cover and EXTENSIÓN B1+ mixed unit understate the all-system demand; third and mixed sections need visible B2 prerequisites/selection.
- Substantial repeated explanation/table/error/reveal pattern leaves condition/result manipulation to teacher talk.
- CSS comment says all content starts collapsed, but GrammarStep defaults open and these9 core steps omit defaultOpen=false; instruction Abrí los pasos uno por uno does not match initial state.
- ID23/31 overlap heavily but differ in language support and sequencing; preserve routes and establish separate audience/use cases rather than auto-archive either.

**Evidence locators**

- [`app/condicionales-b1/data.ts`](../../app/condicionales-b1/data.ts) — `primero.construccion and primero.errores`: Si va a llover labeled incorrect.
- [`app/condicionales-b1/page.tsx`](../../app/condicionales-b1/page.tsx) — `unidad9 GrammarStep and resumen`: Nine phases with20 total reveals/oral prompts and real5-perspective close.
- [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) — `defaultOpen=true`: Explains open-core behavior despite collapse-oriented copy/comments.

#### Lesson 148 · Presente de subjuntivo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/sistema-verbal/presente-de-subjuntivo` / `/resources/spanish-grammar-lesson-b1-presente-de-subjuntivo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/subjuntivo/alicia-hero.webp`](../../public/subjuntivo/alicia-hero.webp) |
| Objective | Use wishes, reactions, purpose and pending future clauses to influence or describe a desired situation. |
| Focus | present subjunctive; desire/influence; negated belief; purpose; future temporal; unknown relative |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/subjuntivo/alicia-hero.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. Formation rule starts from yo and removes -o but does not teach exceptions sea/haya/vaya or stem-change details before sea appears in assessment. |
| CEFR plausibility | mixed-scope. Familiar wishes and recommendations can fit B1; combining six clause environments and concessive aunque with little controlled retrieval is a broad survey. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- Formation rule starts from yo and removes -o but does not teach exceptions sea/haya/vaya or stem-change details before sea appears in assessment.
- One lesson compresses wish, emotion, doubt, purpose, time, relative and concessive uses into five choices and three transforms.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:148 formation, examples, practice`: Formula YO...QUITO -O; examples include No creo que sea fácil, Busco...que tenga and Aunque llueva.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 149 · Pretérito perfecto de subjuntivo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/sistema-verbal/preterito-perfecto-subjuntivo` / `/resources/spanish-grammar-lesson-b1-preterito-perfecto-de-subjuntivo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/subjuntivo/alicia-hero.webp`](../../public/subjuntivo/alicia-hero.webp) |
| Objective | React now to a completed event and express completion before a pending future action. |
| Focus | perfect subjunctive; current reaction to anterior event; future completion; doubt/result |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/subjuntivo/alicia-hero.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. The transform starting Me alegra que venís is an unmarked non-target starting sentence, conflating mood correction with anteriority transformation. |
| CEFR plausibility | mixed-scope. Familiar supported reactions are plausible upper B1, but future anteriority and unknown-experienced referents add B2-like scope; label optional extensions. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- The transform starting Me alegra que venís is an unmarked non-target starting sentence, conflating mood correction with anteriority transformation.
- The generic past-plane highlight hides the explicitly taught future-anterior use Cuando hayas terminado.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:149 transform, uses`: One use is Futuro anterior; transform starts Marcá anterioridad: Me alegra que venís.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 116 · La Mesa del Editor

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B2 |
| Advertised levels / display | B2 / B2 |
| Route / resource preview | `/precision-grupo-nominal-adjetival` / `/resources/spanish-grammar-lesson-b2-la-mesa-del-editor` |
| Route source | [`app/precision-grupo-nominal-adjetival/page.tsx`](../../app/precision-grupo-nominal-adjetival/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/editor-table.webp`](../../public/catalog-thumbnails/editor-table.webp) |
| Objective | Interpretar y reformular titulares, anuncios y descripciones para que expresen exactamente el sentido deseado. |
| Focus | contextual ellipsis; restrictive/nonrestrictive scope; de ambiguity; participle modification; adjective complementation; infinitive versus que + finite clause |
| Visual concept | Shared editorial grammar-studio layout: dark hero with orbit/grid decoration, colour-coded word tokens, cream task cards, preparation tabs and a dark conversation section. Creative title varies, while the same interface presents every PhraseLab. |
| Principal interaction | Notice a contrast; step through prepared phrase layers; tap tokens to assemble and revise a sentence; check against explicit accepted orders; answer meaning/form choices; compare prepared transformations; create three personal productions and choose from ten supported discussion prompts. |
| Volume | 4 layers, 6 principles, 4 orderTasks, 6 choices, 5 transformations, 3 production, 10 conversation, 15 principleExamples, 4 discoveryContrasts. Oral bank is selectable; it is not ten mandatory conversations. |
| Renderer | shared-specialized; [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Meaningful click-to-order construction, contrast, personal production and optional oral supports make a good foundation; preserve the progression and improve the bounded issues. |
| CEFR plausibility | plausible. B2 learners compare ambiguous readings and revise descriptions for a particular meaning; precision is the communicative demand. |

**Current concerns**

- The editor concept is principally prewritten variants plus reconstruction, rather than editing a draft. A bounded text-revision interaction would strengthen the existing interpretation tasks.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 116`: La Mesa del Editor; primary B2; route /precision-grupo-nominal-adjetival; catalogue duration ≈ 45 min
- [`app/precision-grupo-nominal-adjetival/page.tsx`](../../app/precision-grupo-nominal-adjetival/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `precisionEditorial`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `OrderBoard`: Learner selects/removes/resets tokens; checking uses exact task.answers arrays, so the construction mechanic is real but bounded.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `layer / transformation state and production/conversation sections`: Prepared examples change with tabs; ten oral cards include hidden starter/vocabulary/follow-up support.
- [`app/phrase-labs/style.css`](../../app/phrase-labs/style.css) — `responsive @media rules and reduced-motion block`: Contains narrow-screen grid collapse, 390px adjustments and reduced-motion rules; this is implementation evidence, not browser QA.
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `precisionEditorial authored examples/keys/oral tasks`: The editor concept is principally prewritten variants plus reconstruction, rather than editing a draft. A bounded text-revision interaction would strengthen the existing interpretation tasks.

#### Lesson 117 · El Panel de Conexiones

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B2 |
| Advertised levels / display | B2 / B2 |
| Route / resource preview | `/verbos-que-piden-una-estructura` / `/resources/spanish-grammar-lesson-b2-el-panel-de-conexiones` |
| Route source | [`app/verbos-que-piden-una-estructura/page.tsx`](../../app/verbos-que-piden-una-estructura/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/connection-panel.webp`](../../public/catalog-thumbnails/connection-panel.webp) |
| Objective | Elegir y desarrollar las conexiones que determinados verbos necesitan, y añadir estados ligados al sujeto o al objeto. |
| Focus | verb-specific a/de/en/con/por complementation; lexical contrast contar/contar con; infinitive versus finite complement; subject/object depictive/resultative complements |
| Visual concept | Shared editorial grammar-studio layout: dark hero with orbit/grid decoration, colour-coded word tokens, cream task cards, preparation tabs and a dark conversation section. Creative title varies, while the same interface presents every PhraseLab. |
| Principal interaction | Notice a contrast; step through prepared phrase layers; tap tokens to assemble and revise a sentence; check against explicit accepted orders; answer meaning/form choices; compare prepared transformations; create three personal productions and choose from ten supported discussion prompts. |
| Volume | 6 layers, 6 principles, 4 orderTasks, 7 choices, 6 transformations, 3 production, 10 conversation, 16 principleExamples, 4 discoveryContrasts. Oral bank is selectable; it is not ten mandatory conversations. |
| Renderer | shared-specialized; [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | C — REPAIR. Useful regime/predicative practice and oral transfer are undermined by a nonunique answer key and an ungrammatical model question; focused content repair is required. |
| CEFR plausibility | plausible. B2 learners explain intended participant states and verb–preposition relations in connected speech; the level is plausible despite the specific language/key errors. |

**Current concerns**

- Choice[5] marks only Entregó el trabajo terminado. correct while Entregó terminado el trabajo. is also a valid object-state construction; feedback must accept or contextually distinguish them.
- Conversation[8] asks ¿Qué problema social creés que mucha gente no repara en? with stranded en; natural target is ¿En qué problema social creés que mucha gente no repara?
- Fixed-order keys can reject a natural alternative such as Insistió en que fuéramos otra vez. when no intended scope is specified.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 117`: El Panel de Conexiones; primary B2; route /verbos-que-piden-una-estructura; catalogue duration ≈ 45 min
- [`app/verbos-que-piden-una-estructura/page.tsx`](../../app/verbos-que-piden-una-estructura/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `verbosConConexion`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `OrderBoard`: Learner selects/removes/resets tokens; checking uses exact task.answers arrays, so the construction mechanic is real but bounded.
- [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) — `layer / transformation state and production/conversation sections`: Prepared examples change with tabs; ten oral cards include hidden starter/vocabulary/follow-up support.
- [`app/phrase-labs/style.css`](../../app/phrase-labs/style.css) — `responsive @media rules and reduced-motion block`: Contains narrow-screen grid collapse, 390px adjustments and reduced-motion rules; this is implementation evidence, not browser QA.
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `verbosConConexion authored examples/keys/oral tasks`: Choice[5] marks only Entregó el trabajo terminado. correct while Entregó terminado el trabajo. is also a valid object-state construction; feedback must accept or contextually distinguish them.
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `verbosConConexion authored examples/keys/oral tasks`: Conversation[8] asks ¿Qué problema social creés que mucha gente no repara en? with stranded en; natural target is ¿En qué problema social creés que mucha gente no repara?
- [`app/phrase-labs/data-advanced.ts`](../../app/phrase-labs/data-advanced.ts) — `verbosConConexion authored examples/keys/oral tasks`: Fixed-order keys can reject a natural alternative such as Insistió en que fuéramos otra vez. when no intended scope is specified.

#### Lesson 23 · El Multiverso del ‘Si’

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B2 |
| Advertised levels / display | B2, C1 / B2–C1 |
| Route / resource preview | `/condicionales` / `/resources/spanish-grammar-lesson-b2-c1-el-multiverso-del-si` |
| Route source | [`app/condicionales/page.tsx`](../../app/condicionales/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/conditional-multiverse.webp`](../../public/catalog-thumbnails/conditional-multiverse.webp) |
| Objective | Choose conditional structures for real, possible, remote and past/mixed alternative situations. |
| Focus | zero/first/second/third/mixed conditionals; 7 tenses+imperative; conditional connectors |
| Visual concept | Five colored sci-fi portals, animated particles/rings, astronaut emoji and one character illustration; inspected thumbnail portrays rich alternate worlds, while portal bodies are long text/table/reveal sequences. |
| Principal interaction | Enter any portal, read8 shared step-types, reveal3 exercises and discuss3 prompts per portal; consult8-table atlas and8 connector entries; final5-part personal-story mission. Visited portals drive progress. |
| Volume | 5 portals×(3 uses,3 examples,2 traps,3 reveals,3 oral prompts);8 reference tables/41 rows;12 stems,10 participles,6 subjunctive irregulars,8 connectors,5-part close. |
| Renderer | bespoke; [`app/condicionales/page.tsx`](../../app/condicionales/page.tsx), [`app/condicionales/data.ts`](../../app/condicionales/data.ts), [`app/condicionales/style.css`](../../app/condicionales/style.css) |
| Declared duration | 90+ min |
| Estimated selected duration | 45–100 min. Editorial estimate for stated teacher-led selection, not observed class timing. Select1–2 portals plus corresponding final mission for45; full five-portal teaching with atlas exceeds90. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial contextual grammar and oral synthesis should survive, but the world design largely decorates an explanation–blank–conversation template; metadata and normative feedback need focused repair. |
| CEFR plausibility | mixed-scope. B2–C1 review is plausible for hypothetical reasoning and connector negotiation; A1→C1 cover describes introductory content bands, not5 separately authored level lessons. |

**Current concerns**

- Catalogue promises autocorregible; renderer only reveals answer/explanation, never collects or checks an answer.
- Cover promises100% bilingüe; higher-portal explanations/feedback lack equivalent English fields and the renderer restricts several translations to first2 portals.
- Progress is portal entry, not demonstrated learning; current CSS says LISTO/DONE on visit.
- Claims complete tables but vosotros is omitted in these8 tables (regional prioritization should be labeled).
- Past chapter implies hubiera in result belongs to colloquial versus careful neutral habría, contrary to DPD si1.1c.
- Next wraps from last chapter to first; final mission is in separately opened atlas, so linear route does not lead to closure.

**Evidence locators**

- [`app/condicionales/data.ts`](../../app/condicionales/data.ts) — `chapters/tenseTables/advancedConnectors`: Five structures,8 tables,8 connectors and15 practice answers.
- [`app/condicionales/page.tsx`](../../app/condicionales/page.tsx) — `reveal, move, atlas finalMission`: Answers only reveal; move uses modulo and closure is atlas-only.
- [`app/condicionales/page.tsx`](../../app/condicionales/page.tsx) — `cover and isBasic conditions`: 100% bilingual claim; several translations only in basic portals.
- [`app/condicionales/data.ts`](../../app/condicionales/data.ts) — `pasado.traps`: Restricts neutral formal recommendation to habría despite standard subjunctive apodosis.

#### Lesson 150 · Pretérito imperfecto de subjuntivo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B2 |
| Advertised levels / display | B2 / B2 |
| Route / resource preview | `/sistema-verbal/preterito-imperfecto-subjuntivo` / `/resources/spanish-grammar-lesson-b2-preterito-imperfecto-de-subjuntivo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/subjuntivo/wonderland-garden.webp`](../../public/subjuntivo/wonderland-garden.webp) |
| Objective | Shift wishes and demands into a past viewpoint, and discuss remote present/future hypotheses. |
| Focus | imperfect subjunctive; -ra/-se; past sequence; remote hypothetical; courtesy |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/subjuntivo/wonderland-garden.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. Last speaking prompt asks what would have been different if taking another decision today; its temporal relationship needs contextual repair. |
| CEFR plausibility | plausible. B2 hypothetical reasoning, reported wishes and polite distancing align with the supported oral tasks. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- Last speaking prompt asks what would have been different if taking another decision today; its temporal relationship needs contextual repair.
- Contrast and feedback treat concordance as mechanical past selection; contextual alternatives need teacher notes.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:150 conversation, formation`: Provides -ra/-se equivalence and nosotros accent; final question is Qué habría sido distinto si tomaras otra decisión hoy.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 151 · Pretérito pluscuamperfecto de subjuntivo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B2 |
| Advertised levels / display | B2 / B2 |
| Route / resource preview | `/sistema-verbal/preterito-pluscuamperfecto-subjuntivo` / `/resources/spanish-grammar-lesson-b2-preterito-pluscuamperfecto-de-subjuntivo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/subjuntivo/alicia-hero.webp`](../../public/subjuntivo/alicia-hero.webp) |
| Objective | Reconstruct an alternative past and react to an event anterior to another past point. |
| Focus | pluperfect subjunctive; past counterfactual; regret; past anteriority |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/subjuntivo/alicia-hero.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. One of the four supposed uses of this tense gives Habría sido mejor que avisaras, which contains imperfect subjunctive, not the target pluperfect. |
| CEFR plausibility | plausible. B2 counterfactual narration and evaluation are plausible; history prompts are optional stretch. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- One of the four supposed uses of this tense gives Habría sido mejor que avisaras, which contains imperfect subjunctive, not the target pluperfect.
- Regional note implies hubiera in the consequence is colloquial and habría is the careful norm; DPD si1.1c explicitly permits pluscuamperfecto subjunctive in apodosis.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:151 uses[3], regional`: Evaluación contrafactual example is Habría sido mejor que avisaras; regional note says La norma cuidada suele contrastar hubiera + habría.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 152 · Condicional compuesto de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B2 |
| Advertised levels / display | B2 / B2 |
| Route / resource preview | `/sistema-verbal/condicional-compuesto-indicativo` / `/resources/spanish-grammar-lesson-b2-condicional-compuesto-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/catalog-thumbnails/conditional-multiverse.webp`](../../public/catalog-thumbnails/conditional-multiverse.webp) |
| Objective | Evaluate unrealized past results and interpret conjectural or reported completion. |
| Focus | conditional perfect; past counterfactual result; future perfect from past; attenuated reproach |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/catalog-thumbnails/conditional-multiverse.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. First choice explicitly relegates hubiera ido en la principal normativa to a wrong option; standard apodosis permits hubiera/hubiese alongside habría (RAE DPD si1.1c). |
| CEFR plausibility | plausible. Comparing alternative decisions and consequences fits B2 with teacher scaffolding for inferential readings. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- First choice explicitly relegates hubiera ido en la principal normativa to a wrong option; standard apodosis permits hubiera/hubiese alongside habría (RAE DPD si1.1c).
- Past alternative and future-perfect-from-past share a future-only marker; distinct temporal anchors are missing.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:152 practice[0], regional, uses`: Prompt Si hubiera podido accepts only habría ido; second option includes hubiera ido en la principal normativa.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 153 · Futuro compuesto de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B2 |
| Advertised levels / display | B2 / B2 |
| Route / resource preview | `/sistema-verbal/futuro-compuesto-indicativo` / `/resources/spanish-grammar-lesson-b2-futuro-compuesto-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/catalog-thumbnails/future-city.webp`](../../public/catalog-thumbnails/future-city.webp) |
| Objective | Discuss completed outcomes before a future deadline and infer a recent past cause from current evidence. |
| Focus | future perfect; future anteriority; accumulated duration; past conjecture |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/catalog-thumbnails/future-city.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 30–50 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. At least two time points or evidence/result nodes are required, but the renderer only colors future. |
| CEFR plausibility | plausible. B2 predictions, causal conjecture and justification fit the oral prompts; simple forms require substantially less than B2. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- At least two time points or evidence/result nodes are required, but the renderer only colors future.
- Several practice items merely identify invariant participle or obvious auxiliary form; they do not require selecting between deadline and conjecture readings.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:153 uses, practice, conversation`: Examples include Para2030 and Habrá perdido el tren; oral questions ask alternative explanations and evidence.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 219 · Si fuera distinto…

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B2 |
| Advertised levels / display | B2 / B2 |
| Route / resource preview | `/si-fuera-distinto` / `/resources/spanish-grammar-lesson-b2-si-fuera-distinto` |
| Route source | [`app/si-fuera-distinto/page.tsx`](../../app/si-fuera-distinto/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/conditionals-path.webp`](../../public/catalog-thumbnails/conditionals-path.webp) |
| Objective | Formular hipótesis presentes o futuras con si + imperfecto de subjuntivo y una consecuencia en condicional simple. |
| Focus | real versus hypothetical conditions; imperfect subjunctive + conditional simple; clause-order variation; negotiation under changing constraints |
| Visual concept | Shared editorial SyntaxLab in hypothesis mode: coloured three-part sentence/relationship diagrams, pattern tabs, decision/repair grids and oral cards. SyntaxVisuals changes span labels/classes; it has no scenario, filter, timeline-order or evidence-switch state. |
| Principal interaction | Interpret five activation pairs; select a pattern; choose MCQ answers that populate a centre diagram slot and immediately reveal feedback; choose a repair; perform five oral retrieval prompts and three production tasks; select final conversations with hidden starters/follow-ups. Any changed scenarios and fading supports are administered by the teacher. |
| Volume | 3 patterns, 10 decisions, 0 questionAnswerCycle, 4 repairs, 5 retrieval, 3 production, 6 conversation, 5 activationPairs, 1 finalTasks, 45 declaredTimelineMinutes. Meaning/repair/retrieval/oral items are authored; timeline minutes are declarations, not observed time. |
| Renderer | shared-specialized; [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx), [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial meaning→choice→repair→retrieval→production progression supports the curriculum, but the cited content/output defects and overclaimed mechanics require focused repair. |
| CEFR plausibility | plausible. Hypothetical negotiation or discourse-mode framing requires defending and revising positions under changed information. |

**Current concerns**

- Several decisions put grammatical labels or an entire rewritten sentence into a middle slot between original clauses; this is neither a clean sentence output nor a context-switch interface.
- Advertised hypothesis switch does not transform scenario state; changes between real and hypothetical worlds are tab selections or oral instructions.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 219`: Si fuera distinto…; primary B2; route /si-fuera-distinto; catalogue duration ≈ 45 min
- [`app/si-fuera-distinto/page.tsx`](../../app/si-fuera-distinto/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `siFueraDistinto`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `DecisionCard / RepairCard / SyntaxPreview`: Every selection has a single keyed correct index; choices are inserted verbatim into the centre visual and feedback is shown immediately.
- [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) — `hypothesis visual function`: Stateless presentation component receives left/connector/right and renders spans. Naming a component Finder/Switch/Builder is not implementation of those mechanics.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `retrieval / production / conversation sections`: Five retrieval prompts, three production tasks and supported conversation create real teacher-led oral progression.
- [`app/syntax-labs/style.css`](../../app/syntax-labs/style.css) — `720px media rules`: Decision/repair/oral grids collapse to one column; pattern tabs scroll horizontally. No browser geometry/contrast claim is made.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `siFueraDistinto authored examples/keys/oral tasks`: Several decisions put grammatical labels or an entire rewritten sentence into a middle slot between original clauses; this is neither a clean sentence output nor a context-switch interface.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `siFueraDistinto authored examples/keys/oral tasks`: Advertised hypothesis switch does not transform scenario state; changes between real and hypothetical worlds are tab selections or oral instructions.

#### Lesson 220 · Aunque cambie el dato…

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / B2 |
| Advertised levels / display | B2 / B2 |
| Route / resource preview | `/aunque-cambie-el-dato` / `/resources/spanish-grammar-lesson-b2-aunque-cambie-el-dato` |
| Route source | [`app/aunque-cambie-el-dato/page.tsx`](../../app/aunque-cambie-el-dato/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/connection-panel.webp`](../../public/catalog-thumbnails/connection-panel.webp) |
| Objective | Conceder información nueva, presupuesta o hipotética con aunque y elegir indicativo o subjuntivo por significado discursivo. |
| Focus | aunque + indicative for asserted information; aunque + subjunctive for backgrounded/shared information; hypothetical concessions; stance revision; brief a pesar de que transfer |
| Visual concept | Shared editorial SyntaxLab in evidence mode: coloured three-part sentence/relationship diagrams, pattern tabs, decision/repair grids and oral cards. SyntaxVisuals changes span labels/classes; it has no scenario, filter, timeline-order or evidence-switch state. |
| Principal interaction | Interpret five activation pairs; select a pattern; choose MCQ answers that populate a centre diagram slot and immediately reveal feedback; choose a repair; perform five oral retrieval prompts and three production tasks; select final conversations with hidden starters/follow-ups. Any changed scenarios and fading supports are administered by the teacher. |
| Volume | 3 patterns, 10 decisions, 0 questionAnswerCycle, 4 repairs, 5 retrieval, 3 production, 6 conversation, 5 activationPairs, 1 finalTasks, 45 declaredTimelineMinutes. Meaning/repair/retrieval/oral items are authored; timeline minutes are declarations, not observed time. |
| Renderer | shared-specialized; [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx), [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–55 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantial meaning→choice→repair→retrieval→production progression supports the curriculum, but the cited content/output defects and overclaimed mechanics require focused repair. |
| CEFR plausibility | plausible. Hypothetical negotiation or discourse-mode framing requires defending and revising positions under changed information. |

**Current concerns**

- Known information can still be asserted with indicative; keys based only on both people knowing a fact risk falsely treating discourse framing as a mandatory new/known grammar rule. Specify the intended assertion/backgrounding choice and acknowledge valid alternatives.
- Two decisions place labels indicativo/subjuntivo between already-complete clauses; the model should distinguish metalinguistic classification from completed language.
- The evidence switch has no evidence-state control that preserves a proposition across changed speaker stance; that experience is teacher-led in prompts.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 220`: Aunque cambie el dato…; primary B2; route /aunque-cambie-el-dato; catalogue duration ≈ 45 min
- [`app/aunque-cambie-el-dato/page.tsx`](../../app/aunque-cambie-el-dato/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `aunqueCambieElDato`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `DecisionCard / RepairCard / SyntaxPreview`: Every selection has a single keyed correct index; choices are inserted verbatim into the centre visual and feedback is shown immediately.
- [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) — `evidence visual function`: Stateless presentation component receives left/connector/right and renders spans. Naming a component Finder/Switch/Builder is not implementation of those mechanics.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `retrieval / production / conversation sections`: Five retrieval prompts, three production tasks and supported conversation create real teacher-led oral progression.
- [`app/syntax-labs/style.css`](../../app/syntax-labs/style.css) — `720px media rules`: Decision/repair/oral grids collapse to one column; pattern tabs scroll horizontally. No browser geometry/contrast claim is made.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `aunqueCambieElDato authored examples/keys/oral tasks`: Known information can still be asserted with indicative; keys based only on both people knowing a fact risk falsely treating discourse framing as a mandatory new/known grammar rule. Specify the intended assertion/backgrounding choice and acknowledge valid alternatives.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `aunqueCambieElDato authored examples/keys/oral tasks`: Two decisions place labels indicativo/subjuntivo between already-complete clauses; the model should distinguish metalinguistic classification from completed language.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `aunqueCambieElDato authored examples/keys/oral tasks`: The evidence switch has no evidence-state control that preserves a proposition across changed speaker stance; that experience is teacher-led in prompts.

#### Lesson 118 · El Archivo de las Dos Lecturas

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / C1 |
| Advertised levels / display | C1 / C1 |
| Route / resource preview | `/cuando-una-frase-puede-significar-dos-cosas` / `/resources/spanish-grammar-lesson-c1-el-archivo-de-las-dos-lecturas` |
| Route source | [`app/cuando-una-frase-puede-significar-dos-cosas/page.tsx`](../../app/cuando-una-frase-puede-significar-dos-cosas/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/two-readings-archive.webp`](../../public/catalog-thumbnails/two-readings-archive.webp) |
| Objective | Interpretar dos sentidos posibles y reformular para eliminar —o producir deliberadamente— la ambigüedad. |
| Focus | discourse ellipsis; topic dislocation; literary/stylistic nominalization; semantic-role ambiguity; coordinated agreement; de lo más/lo más bien |
| Visual concept | Shared C1 editorial dossier using coloured word tokens, dark hero/orbit decoration, chapter cards and selectable case files. Distinct archive/camera titles are metaphors; the controls remain tabs, reveals, ordering and choice. |
| Principal interaction | Propose an interpretation; read selected chapters and optional notes; switch among four authored case snippets; reveal two readings/reformulations after discussion; reconstruct three expressions; answer five choices; produce three intentional texts and choose C1 challenge-bearing conversation prompts. |
| Volume | 10 rendered stages: discovery, 6 chapters, integrated case/practice stage, production, conversation; 6 chapters, 4 cases, 3 orderTasks, 5 choices, 3 production, 10 conversation, 6 optionalChapterNotes, 18 chapterExamples, 8 caseReformulations. |
| Renderer | shared-specialized; [`app/phrase-labs/C1Lab.tsx`](../../app/phrase-labs/C1Lab.tsx), [`app/phrase-labs/data-c1.ts`](../../app/phrase-labs/data-c1.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 45–65 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | B — GOOD FOUNDATION. Genuine interpretive cases with hidden analyses, intentional reformulation and sustained C1 oral challenges form a good foundation; maintain source limitations and repair isolated examples. |
| CEFR plausibility | plausible. Requires justified readings, stance/style choices, ambiguity control and nuanced argument rather than merely unusual vocabulary; supported C1 demand is credible. |

**Current concerns**

- Optional chapter-1 recoverability example contrasts el informe with la copia yet asks whether el de Marta recovers informe or copia; gender already selects informe. Replace the false ambiguity with two masculine candidates.
- Cases are authored genre-labelled snippets, not sourced authentic news/chat excerpts; catalogue should not imply an authentic text corpus.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 118`: El Archivo de las Dos Lecturas; primary C1; route /cuando-una-frase-puede-significar-dos-cosas; catalogue duration ≈ 45 min
- [`app/cuando-una-frase-puede-significar-dos-cosas/page.tsx`](../../app/cuando-una-frase-puede-significar-dos-cosas/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data-c1.ts`](../../app/phrase-labs/data-c1.ts) — `ambiguedadC1`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/C1Lab.tsx`](../../app/phrase-labs/C1Lab.tsx) — `c1-case-lab / OrderCard / ChoiceGrid`: Four selectable cases hide analyses and reformulations; exact-order reconstruction and answer feedback are active.
- [`app/phrase-labs/C1Lab.tsx`](../../app/phrase-labs/C1Lab.tsx) — `GrammarStep 09 and 10`: Three production tasks plus ten conversations, each with follow-up and C1 challenge; the teacher is told to select conversations.
- [`app/phrase-labs/c1.css`](../../app/phrase-labs/c1.css) — `case/chapter layouts and media queries`: C1-specific case panels and stacked narrow-screen layouts exist; visual appearance is source-audited only.
- [`app/phrase-labs/data-c1.ts`](../../app/phrase-labs/data-c1.ts) — `ambiguedadC1 authored examples/keys/oral tasks`: Optional chapter-1 recoverability example contrasts el informe with la copia yet asks whether el de Marta recovers informe or copia; gender already selects informe. Replace the false ambiguity with two masculine candidates.
- [`app/phrase-labs/data-c1.ts`](../../app/phrase-labs/data-c1.ts) — `ambiguedadC1 authored examples/keys/oral tasks`: Cases are authored genre-labelled snippets, not sourced authentic news/chat excerpts; catalogue should not imply an authentic text corpus.

#### Lesson 119 · La Cámara de la Acción

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / C1 |
| Advertised levels / display | C1 / C1 |
| Route / resource preview | `/la-accion-vista-desde-dentro` / `/resources/spanish-grammar-lesson-c1-la-camara-de-la-accion` |
| Route source | [`app/la-accion-vista-desde-dentro/page.tsx`](../../app/la-accion-vista-desde-dentro/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/catalog-thumbnails/action-camera.webp`](../../public/catalog-thumbnails/action-camera.webp) |
| Objective | Elegir desde qué fase mostrar una acción para narrar procesos, logros, resultados y aproximaciones con precisión. |
| Focus | echarse a/romper a; ir/venir/andar + gerund; event versus resultant state; tener/llevar/dejar + participle; llegar a/acabar por/no alcanzar a; venir a approximation |
| Visual concept | Shared C1 editorial dossier using coloured word tokens, dark hero/orbit decoration, chapter cards and selectable case files. Distinct archive/camera titles are metaphors; the controls remain tabs, reveals, ordering and choice. |
| Principal interaction | Propose an interpretation; read selected chapters and optional notes; switch among four authored case snippets; reveal two readings/reformulations after discussion; reconstruct three expressions; answer five choices; produce three intentional texts and choose C1 challenge-bearing conversation prompts. |
| Volume | 10 rendered stages: discovery, 6 chapters, integrated case/practice stage, production, conversation; 6 chapters, 4 cases, 3 orderTasks, 5 choices, 3 production, 10 conversation, 6 optionalChapterNotes, 18 chapterExamples, 8 caseReformulations. |
| Renderer | shared-specialized; [`app/phrase-labs/C1Lab.tsx`](../../app/phrase-labs/C1Lab.tsx), [`app/phrase-labs/data-c1.ts`](../../app/phrase-labs/data-c1.ts) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 45–65 min. Editorial estimate for teacher-led selection, explanation, practice and oral close; not observed class timing. Do not require all discussion prompts. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Genuine interpretive cases with hidden analyses, intentional reformulation and sustained C1 oral challenges form a good foundation; maintain source limitations and repair isolated examples. |
| CEFR plausibility | plausible. Requires justified readings, stance/style choices, ambiguity control and nuanced argument rather than merely unusual vocabulary; supported C1 demand is credible. |

**Current concerns**

- Broad six-phase C1 menu is better taught through selected cases than every chapter in 45 minutes.
- The camera metaphor is textual comparison and case tabs rather than a visual temporal control; preserve meaning-first case work.

**Scope / preservation notes**

- Source audit only; no browser, class-timing or accessibility conformance claim.
- Primary CEFR counts use the single catalogue level; declared extensions do not create additional lesson records.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `active lesson 119`: La Cámara de la Acción; primary C1; route /la-accion-vista-desde-dentro; catalogue duration ≈ 45 min
- [`app/la-accion-vista-desde-dentro/page.tsx`](../../app/la-accion-vista-desde-dentro/page.tsx) — `default export`: Active page imports the renderer and bank recorded below.
- [`app/phrase-labs/data-c1.ts`](../../app/phrase-labs/data-c1.ts) — `arquitecturaVerbalC1`: Full authored bank reviewed, including examples, answer keys and oral tasks.
- [`app/phrase-labs/C1Lab.tsx`](../../app/phrase-labs/C1Lab.tsx) — `c1-case-lab / OrderCard / ChoiceGrid`: Four selectable cases hide analyses and reformulations; exact-order reconstruction and answer feedback are active.
- [`app/phrase-labs/C1Lab.tsx`](../../app/phrase-labs/C1Lab.tsx) — `GrammarStep 09 and 10`: Three production tasks plus ten conversations, each with follow-up and C1 challenge; the teacher is told to select conversations.
- [`app/phrase-labs/c1.css`](../../app/phrase-labs/c1.css) — `case/chapter layouts and media queries`: C1-specific case panels and stacked narrow-screen layouts exist; visual appearance is source-audited only.
- [`app/phrase-labs/data-c1.ts`](../../app/phrase-labs/data-c1.ts) — `arquitecturaVerbalC1 authored examples/keys/oral tasks`: Broad six-phase C1 menu is better taught through selected cases than every chapter in 45 minutes.
- [`app/phrase-labs/data-c1.ts`](../../app/phrase-labs/data-c1.ts) — `arquitecturaVerbalC1 authored examples/keys/oral tasks`: The camera metaphor is textual comparison and case tabs rather than a visual temporal control; preserve meaning-first case work.

#### Lesson 37 · El País del Subjuntivo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / C1 |
| Advertised levels / display | C1 / C1 |
| Route / resource preview | `/subjuntivo-pais-maravillas` / `/resources/spanish-grammar-lesson-c1-el-pais-del-subjuntivo` |
| Route source | [`app/subjuntivo-pais-maravillas/page.tsx`](../../app/subjuntivo-pais-maravillas/page.tsx) |
| Access / collection / section | PRO / null / Gramática general |
| Thumbnail | [`public/subjuntivo/alicia-hero.webp`](../../public/subjuntivo/alicia-hero.webp) |
| Objective | Choose modern subjunctive tense by viewpoint/anteriority and interpret restricted historical forms. |
| Focus | 4 modern subjunctive tenses; 2 historical futures; trigger meaning; temporal/relative clauses; sequence of tenses; ojalá |
| Visual concept | Wonderland art, clocks, cards and gardens;7 named worlds reuse2 raster scenes with CSS zoom/glow/depth, not7 independent manipulable3D environments. Hero image inspected. |
| Principal interaction | Choose7 world cards; read8 phases with formation/tables/uses/contrasts/errors; orally answer and reveal4 practice cards then4 speaking tasks per world; atlas compares tense sequence and ojalá. Progress counts visited worlds. |
| Volume | 7 worlds,6 tenses,7 paradigms/43 rows (-ra/-se separately),28 uses,14 contrasts,16 error pairs,28 reveals,28 speaking prompts;5 irregular groups and6 diagnostic questions. |
| Renderer | bespoke; [`app/subjuntivo-pais-maravillas/page.tsx`](../../app/subjuntivo-pais-maravillas/page.tsx), [`app/subjuntivo-pais-maravillas/data.ts`](../../app/subjuntivo-pais-maravillas/data.ts), [`app/subjuntivo-pais-maravillas/style.css`](../../app/subjuntivo-pais-maravillas/style.css) |
| Declared duration | 90+ min |
| Estimated selected duration | 45–120 min. Editorial estimate for stated teacher-led selection, not observed class timing. Choose one modern-tense world plus contrasts/oral task for45; full seven-world course requires multiple selections, not one45-minute class. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Rich authored coverage, full regional person tables and productive/historical distinction are worth keeping. Focused repair is needed where grammar is presented as categorical errors and the visual world never changes task behavior. |
| CEFR plausibility | mixed-scope. C1 consolidation/consultation is plausible; many world tasks are A2–B2 and the source advertises A2–C1. Broad coverage and rare future forms do not independently establish C1 precision. |

**Current concerns**

- DOMINIO DEL MODO percentage equals visited.size/7; merely opening every chapter yields100%.
- The relative unit labels Busco el libro que explica la regla as NO without specifying the nonidentified context first; it is grammatical for an identified book.
- Sequence errors present Quería que vengas and Me alegra que hubieras venido as unqualified wrong forms; reference time/current relevance and regional usage require contextual qualification.
- Modern4-tense sequence is simplified into a rigid matrix; the learner never moves two event/reference points to test interpretation.
- Seven world names share the same8-phase action loop and2 illustrations; more art is not the main need—meaning-changing interaction is.
- 28 speaking prompts are useful, but no cross-world communicative final mission integrates learning; atlas ends by restarting present.

**Evidence locators**

- [`app/subjuntivo-pais-maravillas/data.ts`](../../app/subjuntivo-pais-maravillas/data.ts) — `units`: 7 units with4 exercises and4 oral prompts each; only2 unique image paths.
- [`app/subjuntivo-pais-maravillas/page.tsx`](../../app/subjuntivo-pais-maravillas/page.tsx) — `progress and Nav`: DOMINIO DEL MODO is calculated solely from visited units.
- [`app/subjuntivo-pais-maravillas/data.ts`](../../app/subjuntivo-pais-maravillas/data.ts) — `tiempo-relativas.errors and secuencia.errors`: Unqualified NO/SÍ corrections of context-dependent grammatical readings.
- [`app/subjuntivo-pais-maravillas/page.tsx`](../../app/subjuntivo-pais-maravillas/page.tsx) — `Atlas ending`: Reference diagnostic ends EMPEZAR POR EL PRESENTE, not integrated production.

#### Lesson 154 · Pretérito anterior de indicativo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / C1 |
| Advertised levels / display | C1 / C1 |
| Route / resource preview | `/sistema-verbal/preterito-anterior-indicativo` / `/resources/spanish-grammar-lesson-c1-preterito-anterior-de-indicativo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/past-b1/surf-indefinido.webp`](../../public/past-b1/surf-indefinido.webp) |
| Objective | Recognize literary pretérito anterior, preserve sequence while modernizing it, and discuss register. |
| Focus | preterite anterior; receptive literary register; immediate anteriority; modern paraphrase |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/past-b1/surf-indefinido.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 25–45 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. All input is isolated invented clauses; no coherent literary extract makes register inference or stylistic comparison necessary. |
| CEFR plausibility | plausible. C1 stylistic comparison and modernization are plausible; recognizing morphology alone is not evidence of C1 communication. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- All input is isolated invented clauses; no coherent literary extract makes register inference or stylistic comparison necessary.
- The historical tense is appropriately labeled receptive; expansion should improve text interpretation, not require habitual oral use.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:154 status, transform, conversation`: Status Receptivo; six isolated examples, modernization tasks, eight register discussion prompts; no passage bank.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 155 · Futuro simple de subjuntivo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / C1 |
| Advertised levels / display | C1 / C1 |
| Route / resource preview | `/sistema-verbal/futuro-simple-subjuntivo` / `/resources/spanish-grammar-lesson-c1-futuro-simple-de-subjuntivo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/subjuntivo/wonderland-garden.webp`](../../public/subjuntivo/wonderland-garden.webp) |
| Objective | Recognize future subjunctive in restricted registers and reformulate it in contemporary Spanish. |
| Focus | future subjunctive; legal/proverbial register; historical receptive forms; modernization |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/subjuntivo/wonderland-garden.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 25–45 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. Formation lists -remos without the required nosotros accent explanation (habláremos), unlike the complete master table in ID37. |
| CEFR plausibility | plausible. C1 register analysis and plain-language reformulation are reasonable; not a productive tense target. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- Formation lists -remos without the required nosotros accent explanation (habláremos), unlike the complete master table in ID37.
- Six isolated fragments plus register opinions do not constitute authentic contextual reading or nuanced legal-to-plain-language mediation.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:155 formation, status, examples`: Status Histórico/restringido; formation says Agregá -re,-res,-re,-remos,-reis,-ren; examples are fragments.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

#### Lesson 156 · Futuro perfecto de subjuntivo

| Field | Current source |
| --- | --- |
| Category / primary level | Gramática / C2 |
| Advertised levels / display | C2 / C2 |
| Route / resource preview | `/sistema-verbal/futuro-perfecto-subjuntivo` / `/resources/spanish-grammar-lesson-c2-futuro-perfecto-de-subjuntivo` |
| Route source | [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx) |
| Access / collection / section | PRO / null / Sistema verbal |
| Thumbnail | [`public/subjuntivo/wonderland-garden.webp`](../../public/subjuntivo/wonderland-garden.webp) |
| Objective | Interpret anteriority in historical/legal future-perfect subjunctive and reformulate across registers. |
| Focus | future perfect subjunctive; historical/legal recognition; anteriority; register mediation |
| Visual concept | Shared navy editorial hero, serif title, accent-coded stages and white text cards. Catalogue artwork (/subjuntivo/wonderland-garden.webp) is not rendered in VerbLesson. The only semantic graphic is a static past/now/future strip. |
| Principal interaction | Scroll or jump through eight stages; read discovery examples/core/formation/uses/contrasts; select five three-option answers then check all; orally transform three prompts and reveal proposals; choose from eight conversation prompts with optional starter/follow-up; optional language bridges, regional notes and mood/tense help. |
| Volume | 8 core stages; 3 formation steps,4 use/example units,6 examples,2 paired contrasts,5 three-option choices,3 transformations,8 scaffolded conversation prompts,3 regional notes; six generated language bridge panels are shared support, not six authored lessons. Discovery repeats first3 examples. |
| Renderer | shared-specialized; [`app/sistema-verbal/[slug]/page.tsx`](../../app/sistema-verbal/[slug]/page.tsx), [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts), [`app/verbal-system/system.css`](../../app/verbal-system/system.css), [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 25–45 min. Editorial estimate for stated teacher-led selection, not observed class timing. All core sections plus 3–5 oral prompts, with discussion and feedback; the 45-minute timing labels are authored allocations, not measured duration. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. A genuine teacher-led progression and tense-specific content survive. Focused repair is warranted because every controlled choice is position-predictable, distractors often bypass meaning, and the central visual does not model the distinctions being taught. Only isolated model clauses and easy recognition choices underpin a C2 badge. Add sustained difficult source interpretation and nuanced reformulation criteria before claiming a C2 experience. |
| CEFR plausibility | insufficient-evidence. The rare form is not intrinsically C2. Explaining it to B1 and rewriting in three registers could elicit advanced mediation, but no sustained source text, ambiguity or exacting success criteria establishes C2. |

**Current concerns**

- All five correct choices occupy option 0, in every one of IDs140–156 (85/85); options never shuffle. Many distractors include impossible morphology, incompatible adverbs or editorial labels, rewarding elimination rather than target meaning.
- All stages use the same text/accordion/grid treatment. The three-point past/now/future strip only highlights a plane; it cannot show aspect, reference time, anteriority, or multiple valid readings. No learner manipulation of the conceptual visual.
- The eight oral prompts are useful and individually scaffolded, but there is no distinct synthesis/exit task or retrieval of earlier choices at the close. Teacher selection, feedback and follow-up carry much of the 45-minute value.
- Only isolated model clauses and easy recognition choices underpin a C2 badge. Add sustained difficult source interpretation and nuanced reformulation criteria before claiming a C2 experience.
- Keep the explicitly restricted/receptive purpose; do not turn this into productive C2 conjugation drilling.

**Scope / preservation notes**

- Source-complete, not runtime/browser verified. Preserve canonical one-lesson-per-tense identity and both hub navigation routes.
- Regional variation is explicitly acknowledged; it should affect accepted feedback as well as the optional note.

**Evidence locators**

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessonSources id:156 status, practice, transform, conversation`: Five choices include usage labels and invariant participle; oral close asks three-register rewrite without a supplied source passage.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `VerbLessonPage stages practicar/transformar/hablar`: Shared answer-state/check-all logic, reveal transformations and eight optional-support oral cards; no img rendering.
- [`app/verbal-system/system.css`](../../app/verbal-system/system.css) — `.vt-timeline and plane-* selectors`: Only present/past/future plane dots are highlighted; conditional highlights the future dot.
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete45-minute teaching spine`: Test enforces identical array lengths and duration string; it does not test answer-position balance, distractor quality or communicative sufficiency.

### Fonética

#### Lesson 201 · Cinco vocales, cinco sonidos

| Field | Current source |
| --- | --- |
| Category / primary level | Fonética / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/clase/201` / `/resources/spanish-pronunciation-lesson-a1-cinco-vocales-cinco-sonidos` |
| Route source | [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) |
| Access / collection / section | FREE / null / Fonética |
| Thumbnail | [`public/catalog-thumbnails/vowel-resonance.webp`](../../public/catalog-thumbnails/vowel-resonance.webp) |
| Objective | Keep Spanish vowel quality stable while understanding and producing familiar words and short personal phrases. |
| Focus | five vowel qualities; articulatory placement; vowel contrast discrimination; syllable-to-word blending; oral transfer |
| Visual concept | Acoustic-vessel thumbnail suggests five contrasting resonances; actual lesson is dark text sections/accordions with no visible vowel/articulation aid. Library uses a generic text/task-grid modal; the direct route uses text accordions. Thumbnail art is not an interactive lesson scene. |
| Principal interaction | Teacher models without print; learner points/selects, repeats minimal contrasts, blends syllables, introduces themself, identifies nearby objects and dictates words; UI action is opening prompts. On the Library surface the same prompts appear in static task grids with generic hint buttons; on the direct route they are disclosures. |
| Volume | 4 practice + 3 speaking tasks; 4 named contrast pairs (mesa/misa, peso/piso, pelo/palo, cosa/casa); one home recording assignment. |
| Renderer | generic; [`app/additional-samples.ts`](../../app/additional-samples.ts), [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx), [`app/teachers.css`](../../app/teachers.css), [`app/Library.tsx`](../../app/Library.tsx), [`app/page.tsx`](../../app/page.tsx) |
| Declared duration | 30–40 min |
| Estimated selected duration | 25–40 min. Editorial estimate for teacher-led modelling, four contrast sets, three short transfer tasks and feedback; not observed timing. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Substantive, properly oral beginner sequencing deserves preservation; a focused repair should turn the printed teacher plan into an audible, visible vowel task with concealed targets and replay. |
| CEFR plausibility | plausible. Familiar objects, pointing, short introductions and teacher imitation suit A1; articulatory language is teacher guidance, not a required metalinguistic performance. |

**Current concerns**

- All auditory models and discrimination controls are external teacher actions.
- Four pairs and a single short sentence limit independent practice variety.
- Explanation is text-heavy relative to oral target; thumbnail mechanism is absent.

**Scope / preservation notes**

- Repair the existing vowel module; do not propose a duplicate new five-vowel lesson.
- Surface distinction: the Library card opens the authorized inline viewer; /clase is also a valid direct/resource destination. Neither supplies embedded audio, image-based articulation or a bespoke task engine for this record.

**Evidence locators**

- [`app/additional-samples.ts`](../../app/additional-samples.ts) — `id:201`: 4 practice + 3 speaking tasks; 4 named contrast pairs (mesa/misa, peso/piso, pelo/palo, cosa/casa); one home recording assignment.
- [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) — `LessonPage non-Gramática branch`: Renders goals, warmup, explanation, practice/speaking details, homework; no audio, image, response or feedback component.
- [`app/teachers.css`](../../app/teachers.css) — `.teaching-section`: Shared dark text/accordion styling with 18px content and responsive teacher-main margins.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory`: Fonética samples determine FREE status.
- [`public/catalog-thumbnails/vowel-resonance.webp`](../../public/catalog-thumbnails/vowel-resonance.webp) — `local image inspected`: Visual concept recorded after direct local-image inspection.
- [`app/Library.tsx`](../../app/Library.tsx) — `lessonHref/openLesson and activeLesson viewer (around lines 838–861 and 1930–2160)`: Authorized records without path/special open inline text/task grids; all hint buttons use the same context hint. Resource/direct links use /clase accordions. Both render the same bank and count once.

#### Lesson 202 · El ritmo de las palabras

| Field | Current source |
| --- | --- |
| Category / primary level | Fonética / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/clase/202` / `/resources/spanish-pronunciation-lesson-a1-el-ritmo-de-las-palabras` |
| Route source | [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) |
| Access / collection / section | FREE / null / Fonética |
| Thumbnail | [`public/catalog-thumbnails/spanish-rhythm.webp`](../../public/catalog-thumbnails/spanish-rhythm.webp) |
| Objective | Make word stress and phrase boundaries clear enough for a partner to recover meaning. |
| Focus | syllable prominence; stress vs written accent; stress-related meaning contrast; phrase grouping; comfortable pace; tú/vos stress awareness |
| Visual concept | Rhythm thumbnail shows marble arches and moving spheres with Spanish instruments; actual UI offers only dark text and accordions, no beat strip/audio or manipulable syllables. Library uses a generic text/task-grid modal; the direct route uses text accordions. Thumbnail art is not an interactive lesson scene. |
| Principal interaction | Teacher says stress contrasts; learner claps/selects/repeats, compares hablo/habló, reads two pause-marked phrases and recalls them, then speaks about routine at different speeds. On the Library surface the same prompts appear in static task grids with generic hint buttons; on the direct route they are disclosures. |
| Volume | 4 practice + 3 speaking tasks; 2 stress triples, 4 labelled stress words and 2 phrase-grouping examples. |
| Renderer | generic; [`app/additional-samples.ts`](../../app/additional-samples.ts), [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx), [`app/teachers.css`](../../app/teachers.css), [`app/Library.tsx`](../../app/Library.tsx), [`app/page.tsx`](../../app/page.tsx) |
| Declared duration | 35–45 min |
| Estimated selected duration | 25–40 min. Editorial estimate for teacher-led listening/clapping, two stress sets, phrasing and three brief oral rounds; not observed timing. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Clear oral intent and meaningful stress contrasts, but text/answer presentation and the absence of listening-first or rhythmic manipulation require focused pedagogical/visual repair. |
| CEFR plausibility | mixed-scope. Short routine production and imitation fit A1. Interpreting public/present/past lexical triples and hablo/habló adds grammatical/semantic load beyond some beginners; retain as teacher-supported recognition rather than assumed A1 tense mastery. |

**Current concerns**

- Activity 1 includes the target words and answer key in the same prompt on both surfaces; response-before-key is teacher-managed, not implemented by the UI.
- Substantial orthographic rule explanation can displace the oral focus.
- No authored intonation contour practice or connected-speech linking; question punctuation is not evidence of such coverage.

**Scope / preservation notes**

- Text explicitly avoids the inaccurate instruction that every Spanish syllable has exactly equal duration.
- Tú/vos distinction is a limited regional stress observation, not a regional pronunciation course.
- Surface distinction: the Library card opens the authorized inline viewer; /clase is also a valid direct/resource destination. Neither supplies embedded audio, image-based articulation or a bespoke task engine for this record.

**Evidence locators**

- [`app/additional-samples.ts`](../../app/additional-samples.ts) — `id:202`: 4 practice + 3 speaking tasks; 2 stress triples, 4 labelled stress words and 2 phrase-grouping examples.
- [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) — `LessonPage non-Gramática branch`: Renders goals, warmup, explanation, practice/speaking details, homework; no audio, image, response or feedback component.
- [`app/teachers.css`](../../app/teachers.css) — `.teaching-section`: Shared dark text/accordion styling with 18px content and responsive teacher-main margins.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory`: Fonética samples determine FREE status.
- [`public/catalog-thumbnails/spanish-rhythm.webp`](../../public/catalog-thumbnails/spanish-rhythm.webp) — `local image inspected`: Visual concept recorded after direct local-image inspection.
- [`app/Library.tsx`](../../app/Library.tsx) — `lessonHref/openLesson and activeLesson viewer (around lines 838–861 and 1930–2160)`: Authorized records without path/special open inline text/task grids; all hint buttons use the same context hint. Resource/direct links use /clase accordions. Both render the same bank and count once.

#### Lesson 38 · Spanish Mouth Lab

| Field | Current source |
| --- | --- |
| Category / primary level | Fonética / A1 |
| Advertised levels / display | A1, A2, B1, B2, C1 / A1–C1 |
| Route / resource preview | `/clase/38` / `/resources/spanish-pronunciation-lesson-a1-c1-spanish-mouth-lab` |
| Route source | [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) |
| Access / collection / section | PRO / null / Fonética |
| Thumbnail | [`public/catalog-thumbnails/mouth-lab.webp`](../../public/catalog-thumbnails/mouth-lab.webp) |
| Objective | Diagnose one pronunciation target and transfer a controlled articulation into spontaneous speech. |
| Focus | stable vowels; tap/trill contrast; place of consonant articulation; stress; rhythm; speed control; teacher-led discrimination |
| Visual concept | Advertised articulatory laboratory and map; inspected thumbnail is an elaborate transparent anatomical model with luminous airflow. Actual route is the same dark, text-only teaching sections and accordions as the other generic lessons; neither thumbnail nor articulatory diagram is rendered. Library uses a generic text/task-grid modal; the direct route uses text accordions. Thumbnail art is not an interactive lesson scene. |
| Principal interaction | Teacher/student select a target, use a mirror, repeat contrasts and phrases, open six practice/four speaking accordions and perform a 60-second spontaneous transfer; all listening and feedback depend on a live teacher. On the Library surface the same prompts appear in static task grids with generic hint buttons; on the direct route they are disclosures. |
| Volume | 6 practice stations + 4 oral tasks + warmup/explanation/home routine; one content bank, not five CEFR variants. |
| Renderer | generic; [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts), [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx), [`app/teachers.css`](../../app/teachers.css), [`app/Library.tsx`](../../app/Library.tsx), [`app/page.tsx`](../../app/page.tsx) |
| Declared duration | 60–75 min |
| Estimated selected duration | 35–60 min. Editorial estimate: select 1–2 targets, model/discriminate 10–15 min, controlled stations 15–25 min, transfer/feedback 10–20 min. Full six-area survey could fill 60–75 min but needs teacher-built material; not observed timing. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | D — REBUILD CANDIDATE. Preserve a coherent oral diagnostic/transfer concept, but the defining advertised laboratory/map is absent and a multi-level 60–75-minute experience is implemented as generic text grids/disclosures. A rebuilt oral/visual mechanism is required to meet v2. |
| CEFR plausibility | mixed-scope. One bank combines elementary imitation with explaining articulation and a 60-second independent response. Teacher-selected remediation may serve several levels, but this is not evidence of authored A1–C1 adaptation. |

**Current concerns**

- No model audio, replay, articulation diagrams or in-app listening discrimination despite laboratory promise.
- A1–C1 is a declared usability range with no level selector or separately authored supports/demands.
- Detailed anatomy and explaining articulation can overload A1 without teacher paraphrase.

**Scope / preservation notes**

- Native /clase/38 is authoritative; do not count or assess the historical external Mouth Lab as active.
- No speech-recognition scoring is required; teacher judgment can remain authoritative.
- Surface distinction: the Library card opens the authorized inline viewer; /clase is also a valid direct/resource destination. Neither supplies embedded audio, image-based articulation or a bespoke task engine for this record.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `id:38`: 6 practice stations + 4 oral tasks + warmup/explanation/home routine; one content bank, not five CEFR variants.
- [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) — `LessonPage non-Gramática branch`: Renders goals, warmup, explanation, practice/speaking details, homework; no audio, image, response or feedback component.
- [`app/teachers.css`](../../app/teachers.css) — `.teaching-section`: Shared dark text/accordion styling with 18px content and responsive teacher-main margins.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory`: Fonética samples determine PRO status.
- [`public/catalog-thumbnails/mouth-lab.webp`](../../public/catalog-thumbnails/mouth-lab.webp) — `local image inspected`: Visual concept recorded after direct local-image inspection.
- [`app/Library.tsx`](../../app/Library.tsx) — `lessonHref/openLesson and activeLesson viewer (around lines 838–861 and 1930–2160)`: Authorized records without path/special open inline text/task grids; all hint buttons use the same context hint. Resource/direct links use /clase accordions. Both render the same bank and count once.

### Escucha

#### Lesson 130 · El Edificio de las Voces

| Field | Current source |
| --- | --- |
| Category / primary level | Escucha / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/el-edificio-de-las-voces` / `/resources/spanish-listening-activity-a1-el-edificio-de-las-voces` |
| Route source | [`app/el-edificio-de-las-voces/page.tsx`](../../app/el-edificio-de-las-voces/page.tsx) |
| Access / collection / section | PRO / null / Escucha |
| Thumbnail | [`public/listening-premium/edificio-voces.webp`](../../public/listening-premium/edificio-voces.webp) |
| Objective | Use brief neighbor messages to identify routine facts and infer the recipient of an unnamed package. |
| Focus | Names/floors/jobs/routines; days/times; selective listening; simple reason-giving |
| Visual concept | Warm cinematic apartment/intercom asset with amber/teal scene console. Six buttons correspond to neighbors; asset directly inspected. Most cognition occurs in the player and question pane, rather than spatial apartment hotspots. |
| Principal interaction | Predict → select neighbor and listen → one detail choice → personal oral turn with starter → package dialogue and justify recipient using two facts → eight-question personal conversation, asking ¿Y vos?. |
| Volume | neighbors: 6; packageDialogues: 1; mp3Files: 7; detailChoicesIncludingPackage: 7; predictionPrompts: 6; oralTurnsIncludingPackage: 7; finalQuestions: 8; supportChunks: 5 |
| Renderer | bespoke; [`app/el-edificio-de-las-voces/page.tsx`](../../app/el-edificio-de-las-voces/page.tsx), [`app/el-edificio-de-las-voces/content.json`](../../app/el-edificio-de-las-voces/content.json), [`app/el-edificio-de-las-voces/style.css`](../../app/el-edificio-de-las-voces/style.css), [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 35–45 min. Editorial estimate, not observed class timing. All six brief messages and package dialogue with repeats and oral turns, then select four to six closing questions; displayed25+8+12-minute schedule needs teacher expansion, not103 seconds of audio alone. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Good A1 foundation: brief comprehensible inputs lead to a concrete information-combination decision and genuine personal speech. Needs modest cue validity and listening-stage refinements. |
| CEFR plausibility | plausible. Concrete slow-declared messages of12–16s, direct factual matching, repeated listening and sentence starters support A1. Package inference requires two familiar details and modeled porque; optional desire formula is scaffolded. |

**Current concerns**

- Before-listen prompts mention two keys, a dog and a bag of books, but content only supplies spoken segments and a shared scene image; these cues require audio/image QA and should not be assumed implemented.
- Names and floors are visible in the active console before listening; this is valid support but not a listening assessment of those data.
- Only one scored detail per message; global understanding and second-listen purpose rely on teacher facilitation.
- Final ¿Dónde te gustaría vivir? slightly stretches core A1 but a matching formula is supplied.
- Shared player has decorative animation without a reduced-motion override in this lesson; final selector buttons are34px.

**Scope / preservation notes**

- All seven MP3s exist and yield duration metadata.
- Variety labels supported by es-*-Neural voice names, not listening validation.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `lesson id 130`: Active Escucha record; A1; route /el-edificio-de-las-voces; declared duration ≈ 45 min.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory.Escucha`: FREE samples are 105 and 28; other six listening IDs are PRO.
- [`app/el-edificio-de-las-voces/content.json`](../../app/el-edificio-de-las-voces/content.json) — `complete content bank`: neighbors: 6; packageDialogues: 1; mp3Files: 7; detailChoicesIncludingPackage: 7; predictionPrompts: 6; oralTurnsIncludingPackage: 7; finalQuestions: 8; supportChunks: 5
- [`app/el-edificio-de-las-voces/page.tsx`](../../app/el-edificio-de-las-voces/page.tsx) — `Stage; building; package; conversation`: Three coherent stages; package task can be used after selected neighbors, teacher controls remain free.
- [`app/el-edificio-de-las-voces/content.json`](../../app/el-edificio-de-las-voces/content.json) — `neighbors and package`: Six authored messages plus two-speaker package clue; no sound-effect metadata for keys/dog.
- [`app/el-edificio-de-las-voces/style.css`](../../app/el-edificio-de-las-voces/style.css) — `ev-building, ev-console, media blocks`: Responsive collapse1080/720px and focus style; max-height removed at tablet size;34px final selectors.
- [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) — `AudioDeck, onEnded, seek, audio-wave`: Real MP3, metadata duration, seek/replay, no autoplay; completion event unlocks parent tasks. 38 simulated bars are not an audio-derived waveform.

#### Lesson 131 · Última Llamada

| Field | Current source |
| --- | --- |
| Category / primary level | Escucha / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/ultima-llamada` / `/resources/spanish-listening-activity-a2-ultima-llamada` |
| Route source | [`app/ultima-llamada/page.tsx`](../../app/ultima-llamada/page.tsx) |
| Access / collection / section | PRO / null / Escucha |
| Thumbnail | [`public/listening-premium/ultima-llamada.webp`](../../public/listening-premium/ultima-llamada.webp) |
| Objective | Combine changing travel messages to decide and explain a practical boarding plan. |
| Focus | Announcement gist/detail; time/place changes; information integration; simple decision and future plan |
| Visual concept | Airport terminal/signal board and amber time card; six source channels and staged clock labels. The advertised real-time pressure is simulated by fixed timestamps, not a running timer or changing live data. |
| Principal interaction | Predict/listen to six messages → one factual choice each → oral travel question and save-data toggle → final three-plan decision after all six ended events → tell Nina the plan → eight personal travel questions. |
| Volume | signals: 6; mp3Files: 6; multipleChoice: 7; predictionPrompts: 6; integratedMission: 1; oralSignalPrompts: 6; finalQuestions: 8; supportChunks: 5 |
| Renderer | bespoke; [`app/ultima-llamada/page.tsx`](../../app/ultima-llamada/page.tsx), [`app/ultima-llamada/content.json`](../../app/ultima-llamada/content.json), [`app/ultima-llamada/style.css`](../../app/ultima-llamada/style.css), [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 35–45 min. Editorial estimate, not observed class timing. All six signals with second passes, fact reconstruction and a10-minute decision; select personal follow-ups. Explicit25+10+10-minute source schedule is a teacher-led allocation. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | C — REPAIR. Strong integrative travel concept and final oral response, but current decision evidence and unused saved-note mechanism weaken the central task. |
| CEFR plausibility | plausible. Short announcements, voice notes and one brief direction exchange suit A2 selective listening; cross-source decision is accessible with repeated playback and simple plan chunks. Final retrospective questions may need teacher selection. |

**Current concerns**

- Mission labels direct walk the single correct answer, yet at17:46 the learner is already at the café, walking takes7min, boarding begins17:55 and closes18:15. Pickup time is unspecified; collecting ready coffee or meeting Nina can be defensible. Need explicit constraints or accept justified alternatives.
- GUARDAR DATO EN EL PLAN toggles only signal IDs; saved facts are never rendered in the mission, so the plan affordance promises an absent synthesis artifact.
- Sidebar selection clears transcript, but previous/next signal buttons change index without clearing it; a new transcript can appear before that new audio when teacher had opened the prior one.
- Prediction says a board row changes color, but changing operational board data are not implemented; fixed clock is decorative scenario framing.
- Mobile ul-workspace retains750px max-height/overflow:auto whereas neighboring lessons remove theirs; nested scrolling needs mobile review.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `lesson id 131`: Active Escucha record; A2; route /ultima-llamada; declared duration ≈ 45 min.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory.Escucha`: FREE samples are 105 and 28; other six listening IDs are PRO.
- [`app/ultima-llamada/content.json`](../../app/ultima-llamada/content.json) — `complete content bank`: signals: 6; mp3Files: 6; multipleChoice: 7; predictionPrompts: 6; integratedMission: 1; oralSignalPrompts: 6; finalQuestions: 8; supportChunks: 5
- [`app/ultima-llamada/page.tsx`](../../app/ultima-llamada/page.tsx) — `notes/addNote; missionReady; mission; signal footer`: Notes only change button state; all six ended events unlock decision; footer does not clear transcript.
- [`app/ultima-llamada/content.json`](../../app/ultima-llamada/content.json) — `mission and signals salida/cambio/camino/amiga`: 17:46 now;17:55 boarding start;18:15 close;7-minute walk; missing café wait constraint makes binary marking contestable.
- [`app/ultima-llamada/style.css`](../../app/ultima-llamada/style.css) — `ul-workspace and720px block`: 750px nested scrolling remains at mobile breakpoint.
- [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) — `AudioDeck, onEnded, seek, audio-wave`: Real MP3, metadata duration, seek/replay, no autoplay; completion event unlocks parent tasks. 38 simulated bars are not an audio-derived waveform.

#### Lesson 105 · El hotel de lo imposible

| Field | Current source |
| --- | --- |
| Category / primary level | Escucha / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/el-hotel-de-lo-imposible` / `/resources/spanish-listening-activity-a2-el-hotel-de-lo-imposible` |
| Route source | [`app/el-hotel-de-lo-imposible/page.tsx`](../../app/el-hotel-de-lo-imposible/page.tsx) |
| Access / collection / section | FREE / null / Escucha |
| Thumbnail | [`public/hotel-imposible/lobby.webp`](../../public/hotel-imposible/lobby.webp) |
| Objective | Understand each fantastical hotel incident, identify how its rule works and retrieve details orally. |
| Focus | Anecdote comprehension; cause/outcome; objects, time and requests; oral reconstruction |
| Visual concept | Illustrated/photographic fantasy hotel lobby, room-key links and warm editorial typography; inner flow retains radio-like orbit/icon player from ID28. Source contains later typography, focus and responsive overrides. |
| Principal interaction | Pick one of ten linked rooms → listen/replay → six MCQs → four spoken factual/inferential answers with optional notes and model reveal → score → transcript reading/shadowing. No separate freer role-play/creative response close. |
| Volume | roomStories: 10; mp3Files: 10; multipleChoice: 60; oralOpenQuestions: 40; glossaryItems: 40; scriptWords: 1311 |
| Renderer | bespoke; [`app/el-hotel-de-lo-imposible/page.tsx`](../../app/el-hotel-de-lo-imposible/page.tsx), [`app/el-hotel-de-lo-imposible/data.ts`](../../app/el-hotel-de-lo-imposible/data.ts), [`app/el-hotel-de-lo-imposible/style.css`](../../app/el-hotel-de-lo-imposible/style.css) |
| Declared duration | 90+ min · a elección |
| Estimated selected duration | 35–50 min. Editorial estimate, not observed class timing. Select two or three rooms; replay, oral explanation and reading with teacher support. Full ten-room bank plausibly exceeds90 minutes, as advertised. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | C — REPAIR. Distinctive fantasy premise, coherent stories and usable oral questions deserve preservation. All ten rooms still enact the same comprehension/reading routine and omit the meaningful freer oral closing expected by v2. |
| CEFR plausibility | plausible. Concrete imaginative stories can fit supported A2 when gist/detail tasks are the assessed demand. 126–138-word stories and layered past references increase processing load; the label should not imply unsupported independent comprehension. |

**Current concerns**

- No authored final transfer task: learner reads source aloud rather than negotiating a request, explaining a new room rule or retelling from memory.
- One repeated ten-question workflow across ten rooms can become long quiz progression if taught exhaustively; source does not propose a 45-minute room selection.
- Input uses past-perfect backstory and multiple time planes; keep A2 task focus concrete and supply targeted comprehension support. Mexican character in el-telefono says soy vos; variety-label/script editorial review needed, not proof of accent defect.

**Scope / preservation notes**

- Room numbers101–110 are narrative labels, not catalog lesson IDs.
- Ten stories are one A2 record.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `lesson id 105`: Active Escucha record; A2; route /el-hotel-de-lo-imposible; declared duration 90+ min · a elección.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory.Escucha`: FREE samples are 105 and 28; other six listening IDs are PRO.
- [`app/el-hotel-de-lo-imposible/data.ts`](../../app/el-hotel-de-lo-imposible/data.ts) — `complete content bank`: roomStories: 10; mp3Files: 10; multipleChoice: 60; oralOpenQuestions: 40; glossaryItems: 40; scriptWords: 1311
- [`app/el-hotel-de-lo-imposible/page.tsx`](../../app/el-hotel-de-lo-imposible/page.tsx) — `chooseRoom; query room; six-stage flow`: Ten room deep links preserve original bank; indexed answer update fixes re-entry pattern seen in ID28.
- [`app/el-hotel-de-lo-imposible/data.ts`](../../app/el-hotel-de-lo-imposible/data.ts) — `rooms; questions`: Ten complete stories, six three-option questions and four model-backed open questions per room.
- [`app/el-hotel-de-lo-imposible/style.css`](../../app/el-hotel-de-lo-imposible/style.css) — `final overrides lines45–65`: Larger type, visible focus, mobile room menu, reduced-motion override; preserve these improvements.

#### Lesson 28 · Latinoamérica al Oído

| Field | Current source |
| --- | --- |
| Category / primary level | Escucha / A2 |
| Advertised levels / display | A2 / A2 |
| Route / resource preview | `/latinoamerica-al-oido` / `/resources/spanish-listening-activity-a2-latinoamerica-al-oido` |
| Route source | [`app/latinoamerica-al-oido/page.tsx`](../../app/latinoamerica-al-oido/page.tsx) |
| Access / collection / section | FREE / null / Escucha |
| Thumbnail | [`public/brand/spanishcue-global-stage.webp`](../../public/brand/spanishcue-global-stage.webp) |
| Objective | Extract gist and concrete details from ten short everyday stories set across Latin America, then answer orally and imitate rhythm. |
| Focus | Everyday narrative listening; regional lexical exposure; gist/detail; retelling support |
| Visual concept | Radio console and real orthographic map with country pins; animated rings, glow, flags and simulated waveforms. Actual globe is a remote Wikimedia image with positioned buttons, not navigable 3D. Generic global-stage catalog thumbnail does not identify this map/radio interaction. |
| Principal interaction | Choose country → suggested two listens → six MCQs → four oral factual responses with optional notes/model reveal → score → transcript reading/shadowing. Teacher can open text/exercises at any time. No authored freer speaking close. |
| Volume | countryStories: 10; mp3Files: 10; multipleChoice: 60; oralOpenQuestions: 40; glossaryItems: 30; scriptWords: 1005 |
| Renderer | bespoke; [`app/latinoamerica-al-oido/page.tsx`](../../app/latinoamerica-al-oido/page.tsx), [`app/latinoamerica-al-oido/data.ts`](../../app/latinoamerica-al-oido/data.ts), [`app/latinoamerica-al-oido/style.css`](../../app/latinoamerica-al-oido/style.css) |
| Declared duration | 90+ min |
| Estimated selected duration | 35–50 min. Editorial estimate, not observed class timing. Select three countries (six listening passes, 18 MCQs, 12 oral responses and one reading/retell discussion); the full ten-country 90+ minute bank is a resource selection, not a single 45-minute route. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | C — REPAIR. Large usable bank and oral comprehension exist, but the core flow repeats factual recall and finishes with reading; question validity, scoring re-entry and metadata claims need focused repair. |
| CEFR plausibility | plausible. Concrete familiar narratives, 95–106 words each, repeated listening and narrow factual responses fit supported A2; regional exposure is not evidence of mastery of ten varieties. |

**Current concerns**

- Catalog says two listens are compulsory before questions; page button ABRIR EJERCICIO AHORA permits immediate entry and text is unlocked anytime. Teacher override is valid; metadata should state it honestly.
- Costa Rica open question asks why sloths must not be touched; the script only says the guide explained why and never supplies the reason. Current model answer repeats that the guide explained it.
- Page selectAnswer appends rather than assigning by question index. Returning to audio and reopening the quiz resets chosen to null without clearing answers, allowing duplicate answers and misaligned score calculations (source-reachable sequence, not browser-tested).
- Open oral prompts are mostly factual recall; final stage is silent/oral reading and rhythm imitation, without a personal decision, retell from memory or transfer task.
- Visible player label EN VIVO misrepresents a fixed MP3; regional-natural voice promise has no perceptual validation in this audit.
- Heavy animated radio decoration, small legacy labels, no lesson-local focus-visible rule in style.css; note textareas have placeholder but no programmatic label. Map depends on external image URL.

**Scope / preservation notes**

- Ten countries are subitems of one A2 record, not ten lessons.
- Audio metadata total463.805s (7m43.805s); duration is not class time.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `lesson id 28`: Active Escucha record; A2; route /latinoamerica-al-oido; declared duration 90+ min.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory.Escucha`: FREE samples are 105 and 28; other six listening IDs are PRO.
- [`app/latinoamerica-al-oido/data.ts`](../../app/latinoamerica-al-oido/data.ts) — `complete content bank`: countryStories: 10; mp3Files: 10; multipleChoice: 60; oralOpenQuestions: 40; glossaryItems: 30; scriptWords: 1005
- [`app/latinoamerica-al-oido/page.tsx`](../../app/latinoamerica-al-oido/page.tsx) — `selectAnswer; listen-stage unlock; open and reading stages`: Append-only answers, teacher flex controls, six MCQ/four open questions and final read-aloud.
- [`app/latinoamerica-al-oido/data.ts`](../../app/latinoamerica-al-oido/data.ts) — `Costa Rica questions[8] and script`: Causal answer requested is absent from source narrative.
- [`app/latinoamerica-al-oido/LatamGlobe.tsx`](../../app/latinoamerica-al-oido/LatamGlobe.tsx) — `mapImage; globePositions; country pins`: External Wikimedia map image and explicit accessible pin labels; country list also provides navigation.
- [`app/latinoamerica-al-oido/style.css`](../../app/latinoamerica-al-oido/style.css) — `responsive blocks; StudentGuide and animation rules`: Breakpoints at1000/680px; reduced-motion override exists; legacy small typography and glow remain.

#### Lesson 132 · Radio Después de Medianoche

| Field | Current source |
| --- | --- |
| Category / primary level | Escucha / B1 |
| Advertised levels / display | B1 / B1 |
| Route / resource preview | `/radio-despues-de-medianoche` / `/resources/spanish-listening-activity-b1-radio-despues-de-medianoche` |
| Route source | [`app/radio-despues-de-medianoche/page.tsx`](../../app/radio-despues-de-medianoche/page.tsx) |
| Access / collection / section | PRO / null / Escucha |
| Thumbnail | [`public/listening-premium/radio-medianoche.webp`](../../public/listening-premium/radio-medianoche.webp) |
| Objective | Follow a spoken anecdote to its turning point, evaluate a claim and formulate a relevant follow-up question before the host. |
| Focus | Narrative sequence; gist/details; attitude/credibility; follow-up questions; personal storytelling |
| Visual concept | Late-night radio with incoming call lines, red/gold studio image, recorder console and open-microphone closing. The clock and EN DIRECTO are theatrical labels over prerecorded media. |
| Principal interaction | Predict caller story → listen → gist MCQ → detail and personal reaction → formulate own question before opening real host audio → credibility judgment for one story → narrate own experience with beginning/change/end. |
| Volume | callerStories: 5; hostQuestionsAudio: 5; mp3Files: 10; gistChoices: 5; detailQuestions: 5; reactionPrompts: 5; createHostQuestions: 5; credibilityDecisions: 1; finalQuestions: 8; supportChunks: 5 |
| Renderer | bespoke; [`app/radio-despues-de-medianoche/page.tsx`](../../app/radio-despues-de-medianoche/page.tsx), [`app/radio-despues-de-medianoche/content.json`](../../app/radio-despues-de-medianoche/content.json), [`app/radio-despues-de-medianoche/style.css`](../../app/radio-despues-de-medianoche/style.css), [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–50 min. Editorial estimate, not observed class timing. Five28–40s stories, replay/detail cycles and five host interventions, with8–12-minute open-microphone closing; select closing questions. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. Clear progression from comprehension to generating a contingent question and a personal story; enough bank for one facilitated lesson. A few assessment and feedback refinements are modest. |
| CEFR plausibility | plausible. Following familiar linear narratives and explaining reactions/follow-up questions is plausible B1. Counterfactual host turns are optional stretch; main task need not require producing them. |

**Current concerns**

- All five gist answer indices are0, creating an answer-position pattern.
- Labels PRIMERA + SEGUNDA ESCUCHA reveal both after one ended event; a second-pass focus is prompted, not enforced or separately staged.
- HostQuestion text is displayed immediately with the unlocked host player, so host audio can be read before listening; use deliberate support timing.
- Torta story describes un señor also named Andrea. This is possible but uncontextualized and distracts from intended plausibility task; editorial clarification would help.
- B1 host questions include past counterfactuals (si nadie hubiera…, habrías…); comprehension/reaction can remain B1 with support, but do not require that grammar independently.
- Radio blink and shared wave animation lack lesson-local reduced-motion rules; small final selectors.

**Scope / preservation notes**

- No caller spontaneity or regional authenticity verified by listening.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `lesson id 132`: Active Escucha record; B1; route /radio-despues-de-medianoche; declared duration ≈ 45 min.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory.Escucha`: FREE samples are 105 and 28; other six listening IDs are PRO.
- [`app/radio-despues-de-medianoche/content.json`](../../app/radio-despues-de-medianoche/content.json) — `complete content bank`: callerStories: 5; hostQuestionsAudio: 5; mp3Files: 10; gistChoices: 5; detailQuestions: 5; reactionPrompts: 5; createHostQuestions: 5; credibilityDecisions: 1; finalQuestions: 8; supportChunks: 5
- [`app/radio-despues-de-medianoche/page.tsx`](../../app/radio-despues-de-medianoche/page.tsx) — `rm-host; final`: Learner proposes question before host reveal, final requires beginning/change/end and teacher follow-up.
- [`app/radio-despues-de-medianoche/content.json`](../../app/radio-despues-de-medianoche/content.json) — `calls answer fields and hostSegments`: Five answers all0; five distinct full caller stories and host audio segments.
- [`app/radio-despues-de-medianoche/style.css`](../../app/radio-despues-de-medianoche/style.css) — `rm-clock;rmBlink;media blocks`: Clock is fixed UI; mobile collapse and focus styles exist; local reduced-motion handling absent.
- [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) — `AudioDeck, onEnded, seek, audio-wave`: Real MP3, metadata duration, seek/replay, no autoplay; completion event unlocks parent tasks. 38 simulated bars are not an audio-derived waveform.

#### Lesson 133 · Habitación 508

| Field | Current source |
| --- | --- |
| Category / primary level | Escucha / B2 |
| Advertised levels / display | B2 / B2 |
| Route / resource preview | `/habitacion-508` / `/resources/spanish-listening-activity-b2-habitacion-508` |
| Route source | [`app/habitacion-508/page.tsx`](../../app/habitacion-508/page.tsx) |
| Access / collection / section | PRO / null / Escucha |
| Thumbnail | [`public/listening-premium/habitacion-508.webp`](../../public/listening-premium/habitacion-508.webp) |
| Objective | Reconstruct a service failure from partial testimony and propose a proportionate professional repair. |
| Focus | Chronology; fact vs inference; cause/responsibility; service recovery; qualified argument |
| Visual concept | Boutique-hotel case file, witness tabs and chronology cards; green/brass/cream art direction. Actual ordering supports drag and arrow buttons; full eight-event timeline is revealed as static ordered text in decision stage. |
| Principal interaction | Listen to six witnesses → interpret each and order three timestamped events → verify → inspect full timeline → choose one of four responses and speak as manager → compare manager audio → B2 discussion with stance/example/reservation. |
| Volume | testimonies: 6; resolutionAudio: 1; mp3Files: 7; interpretationQuestions: 6; discussionPrompts: 6; eventCards: 18; fullTimelineEvents: 8; responseOptions: 4; finalQuestions: 8; supportChunks: 5 |
| Renderer | bespoke; [`app/habitacion-508/page.tsx`](../../app/habitacion-508/page.tsx), [`app/habitacion-508/content.json`](../../app/habitacion-508/content.json), [`app/habitacion-508/style.css`](../../app/habitacion-508/style.css), [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–50 min. Editorial estimate, not observed class timing. Six short witness audios repeated, causal discussion and ordering,8-minute management decision,10-minute speaking;45min plausible when reasoning, not only sorting, is used. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | C — REPAIR. Valuable distinct reconstruction engine and professional oral close, but the main task currently rewards sorting visible times and contains chronology contradictions; needs focused reconstruction repair. |
| CEFR plausibility | plausible. Integrating testimony, distinguishing uncertainty and defending a repair with reservations fits B2; the present numerical sorting does not by itself evidence B2 listening. |

**Current concerns**

- Every event card already carries a timestamp, so chronological sorting can be solved numerically without understanding the audio; exact minute values often are not even spoken.
- Guest declaration labeled22:14 recounts this morning05:30, while the same investigation timestamps run22:22–23:18 and resolution09:10; absent dates make event/report sequence internally unclear.
- Guest card says21:55 key failure; neighbor sees guest trying key21:52; master timeline labels21:52 blocked key. Might represent perspectives but source does not teach that distinction; audit/reconcile explicitly.
- Guest question asks three problems, but guest audio mentions key, unsolicited wake-up and general recognition; cake mishandling is inferred only later. Clarify what constitutes the third problem.
- Intro already tells learner no individual culprit; decision screen supplies the complete correct timeline before independent reconstruction, weakening inference.
- Resolution audio has transcript data in JSON but page never exposes it; teacher accessibility/support is incomplete.
- Ordering arrow controls are28px; full mobile usability requires validation.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `lesson id 133`: Active Escucha record; B2; route /habitacion-508; declared duration ≈ 45 min.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory.Escucha`: FREE samples are 105 and 28; other six listening IDs are PRO.
- [`app/habitacion-508/content.json`](../../app/habitacion-508/content.json) — `complete content bank`: testimonies: 6; resolutionAudio: 1; mp3Files: 7; interpretationQuestions: 6; discussionPrompts: 6; eventCards: 18; fullTimelineEvents: 8; responseOptions: 4; finalQuestions: 8; supportChunks: 5
- [`app/habitacion-508/page.tsx`](../../app/habitacion-508/page.tsx) — `order initialization;h508-sort;decision`: Initial order rotates each three-card list; arrows provide non-drag controls; full timeline given in decision stage; any response selection opens manager audio.
- [`app/habitacion-508/content.json`](../../app/habitacion-508/content.json) — `testimonies events/time;timeline;resolution`: Minute-tagged cards, conflicting key timestamps and undated overnight report chronology; resolution transcript exists but is not rendered.
- [`app/habitacion-508/style.css`](../../app/habitacion-508/style.css) — `h508-sort>div button;media`: Arrow buttons28x28; mobile removes nested evidence max-height.
- [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) — `AudioDeck, onEnded, seek, audio-wave`: Real MP3, metadata duration, seek/replay, no autoplay; completion event unlocks parent tasks. 38 simulated bars are not an audio-derived waveform.

#### Lesson 134 · La Entrevista que no Salió al Aire

| Field | Current source |
| --- | --- |
| Category / primary level | Escucha / C1 |
| Advertised levels / display | C1 / C1 |
| Route / resource preview | `/la-entrevista-que-no-salio-al-aire` / `/resources/spanish-listening-activity-c1-la-entrevista-que-no-salio-al-aire` |
| Route source | [`app/la-entrevista-que-no-salio-al-aire/page.tsx`](../../app/la-entrevista-que-no-salio-al-aire/page.tsx) |
| Access / collection / section | PRO / null / Escucha |
| Thumbnail | [`public/listening-premium/entrevista-no-salio.webp`](../../public/listening-premium/entrevista-no-salio.webp) |
| Objective | Infer a speaker’s evasions, irony and changing responsibility, then make and defend a fair editorial selection. |
| Focus | Subtext; hedging; register shift; irony; recontextualization; media framing |
| Visual concept | Editorial interview cutting room, five clip list, red/ivory timeline and three-slot selection counter. This is a conceptual edit-selection interface, not actual audio cutting or waveform editing. |
| Principal interaction | Listen to five connected clips → inference choice → close linguistic analysis/reformulation → select three for publication →60-second defense and fair/sensational headlines → discussion allowing a second reading. |
| Volume | interviewClips: 5; mp3Files: 5; speakingRoles: 2; interpretationChoices: 5; analysisPrompts: 5; transferPrompts: 5; editSelectionsRequired: 3; editorialProductionTasks: 3; finalQuestions: 8; supportChunks: 5 |
| Renderer | bespoke; [`app/la-entrevista-que-no-salio-al-aire/page.tsx`](../../app/la-entrevista-que-no-salio-al-aire/page.tsx), [`app/la-entrevista-que-no-salio-al-aire/content.json`](../../app/la-entrevista-que-no-salio-al-aire/content.json), [`app/la-entrevista-que-no-salio-al-aire/style.css`](../../app/la-entrevista-que-no-salio-al-aire/style.css), [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–50 min. Editorial estimate, not observed class timing. Five clips repeated and closely analyzed; eight-minute editorial defense/headlines and12-minute critical discussion. Source advertises25+8+12minutes. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / No / No |
| Quality | B — GOOD FOUNDATION. A coherent C1 experience: each clip changes interpretation and selection has an ethical/communicative consequence. Preserve the design; improve authentic inference and evidence scaffolding modestly. |
| CEFR plausibility | plausible. Inferential interpretation, register reformulation, justified selection and two readings of responsibility are suitable C1 demands; MCQ alone is simpler, but subsequent production supplies the level. |

**Current concerns**

- Before-listen hooks and clip labels often disclose the target strategy (evasiva/ironia/registro), so initial inference is heavily cued; reserve a later unprimed transfer task.
- Channel label MICRÓFONO AMBIENTE · RISAS and analysis of final pause require actual audio confirmation. Text/voice settings do not establish effective irony.
- Editing selects three IDs but cannot sequence/replay the selected cut together; acceptable conceptual selection, but avoid claiming real audio editing.
- Five audios total2m24.696s:45min is supported by analytic speech and debate, not extended listening endurance.
- Late-stage navigation can bypass listening, which is reasonable teacher control but not evidence of completing those stages.

**Scope / preservation notes**

- No claims about authentic interview, laughter, rhythm or acted irony can be verified from source alone.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `lesson id 134`: Active Escucha record; C1; route /la-entrevista-que-no-salio-al-aire; declared duration ≈ 45 min.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory.Escucha`: FREE samples are 105 and 28; other six listening IDs are PRO.
- [`app/la-entrevista-que-no-salio-al-aire/content.json`](../../app/la-entrevista-que-no-salio-al-aire/content.json) — `complete content bank`: interviewClips: 5; mp3Files: 5; speakingRoles: 2; interpretationChoices: 5; analysisPrompts: 5; transferPrompts: 5; editSelectionsRequired: 3; editorialProductionTasks: 3; finalQuestions: 8; supportChunks: 5
- [`app/la-entrevista-que-no-salio-al-aire/page.tsx`](../../app/la-entrevista-que-no-salio-al-aire/page.tsx) — `raw/edit/conversation;toggleSelection`: Select exactly three clips then defend cut and create opposed headlines; no media editing implementation.
- [`app/la-entrevista-que-no-salio-al-aire/content.json`](../../app/la-entrevista-que-no-salio-al-aire/content.json) — `clips hook/analysis/segments`: Five connected consequences and two voice IDs; targets revealed by pre-listen hooks.
- [`app/la-entrevista-que-no-salio-al-aire/style.css`](../../app/la-entrevista-que-no-salio-al-aire/style.css) — `en-studio/en-headlines;media blocks`: Desktop three-area scene, editorial three-task stage, mobile single-column and focus rules.
- [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) — `AudioDeck, onEnded, seek, audio-wave`: Real MP3, metadata duration, seek/replay, no autoplay; completion event unlocks parent tasks. 38 simulated bars are not an audio-derived waveform.

#### Lesson 135 · Frecuencia Abierta

| Field | Current source |
| --- | --- |
| Category / primary level | Escucha / C2 |
| Advertised levels / display | C2 / C2 |
| Route / resource preview | `/frecuencia-abierta` / `/resources/spanish-listening-activity-c2-frecuencia-abierta` |
| Route source | [`app/frecuencia-abierta/page.tsx`](../../app/frecuencia-abierta/page.tsx) |
| Access / collection / section | PRO / null / Escucha |
| Thumbnail | [`public/listening-premium/frecuencia-abierta.webp`](../../public/listening-premium/frecuencia-abierta.webp) |
| Objective | Synthesize conflicting positions about flexible work, interpret implied stance and prosodic intent, then revise a nuanced conclusion after counterevidence. |
| Focus | Ambiguity; speaker interests; irony; overlap; stance; concession/counterargument; intonation |
| Visual concept | International audio control room with six source channels, five-point stance scale, tone lab and counter-signal stage. Thumbnail inspected: cinematic multi-monitor neon cyan/pink studio. Shared console geometry remains similar to130–134; avoid assuming different palettes guarantee different experience. |
| Principal interaction | Predict role interests → hear six signals → place each on a stance scale and justify ambiguity → teacher objection → five contextual intention judgments and mimicry → new evidence →60–90s synthesis with concession/implication/revision → ten discussion prompts with tailored follow-up/counterargument. |
| Volume | mainSignals: 6; overlappingConversations: 1; toneClips: 5; counterSignal: 1; mp3Files: 12; stanceInterpretations: 6; mainTeacherCounterarguments: 6; toneClassifications: 5; synthesisTask: 1; finalQuestions: 10; finalFollowups: 10; finalCounterarguments: 10; synthesisCounterarguments: 4; supportChunks: 5 |
| Renderer | bespoke; [`app/frecuencia-abierta/page.tsx`](../../app/frecuencia-abierta/page.tsx), [`app/frecuencia-abierta/content.json`](../../app/frecuencia-abierta/content.json), [`app/frecuencia-abierta/style.css`](../../app/frecuencia-abierta/style.css), [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) |
| Declared duration | ≈ 45 min |
| Estimated selected duration | 40–50 min. Editorial estimate, not observed class timing. Six signals, five short intention clips and counter-signal are3m56.448s total audio.45min requires the authored22+6+7+10minute discussion/reconstruction path. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | C — REPAIR. Sophisticated source synthesis and open stance mechanism deserve preservation. The explicit intonation subtask is confounded by context/wording and lacks evidence of usable prosody; focused repair and perceptual QA are needed before treating it as a C2 model. |
| CEFR plausibility | mixed-scope. Nuanced multi-source interpretation, ambiguity, rebuttal and revision support advanced/C2 use. Very short, strongly cued sources and lexical/context shortcuts in tone lab cannot independently establish C2 listening; final teacher demand determines level. |

**Current concerns**

- Tone lab says LA MISMA FRASE, but doubtful version adds supongo and changes wording; context alone often supplies the target intention. It does not isolate prosodic listening.
- Five intentions use one synthetic voice ID with rate/pitch settings; differing settings do not prove distinct perceived intentions. Must audition blind, allow warranted alternative interpretations and avoid overclaiming voice authenticity.
- Negative pause metadata requests overlap, but source alone does not prove intelligible/appropriate mixed audio. Local MP3 exists; no listening validation performed.
- Final counter-signal transcript is present in JSON but not exposed in page; support/parity gap for a crucial synthesis input.
- Positions are stored per source and visible in small numerical badges, but no aggregate comparative stance board is rendered; source synthesis remains oral.
- C2 status rests on teacher-led nuanced interpretation and response, not30s clip length or increased declared speaking rate. Sustained unprepared speech/endurance is absent.
- Very small desktop scale labels(.55rem),31px final selectors, glass/blur/neon console and no local reduced-motion rule require visual/accessibility review.

**Evidence locators**

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `lesson id 135`: Active Escucha record; C2; route /frecuencia-abierta; declared duration ≈ 45 min.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory.Escucha`: FREE samples are 105 and 28; other six listening IDs are PRO.
- [`app/frecuencia-abierta/content.json`](../../app/frecuencia-abierta/content.json) — `complete content bank`: mainSignals: 6; overlappingConversations: 1; toneClips: 5; counterSignal: 1; mp3Files: 12; stanceInterpretations: 6; mainTeacherCounterarguments: 6; toneClassifications: 5; synthesisTask: 1; finalQuestions: 10; finalFollowups: 10; finalCounterarguments: 10; synthesisCounterarguments: 4; supportChunks: 5
- [`app/frecuencia-abierta/page.tsx`](../../app/frecuencia-abierta/page.tsx) — `signals/tone/conclusion/conversation`: Four stages, open stance scale, five forced intent classes, final synthesis and tailored counterarguments; finalSignal transcript not rendered.
- [`app/frecuencia-abierta/content.json`](../../app/frecuencia-abierta/content.json) — `toneLab;caribe-solapado;finalSignal`: Doubtful phrase differs by supongo; voices/rate/pitch/negative pause are provenance cues only, not validated sound quality.
- [`app/frecuencia-abierta/style.css`](../../app/frecuencia-abierta/style.css) — `fa-scale;fa-private-controls;fa-final nav;media`: Cyan/pink studio, tiny desktop labels and31px nav; mobile stacks scales, no local reduced-motion override.
- [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) — `AudioDeck, onEnded, seek, audio-wave`: Real MP3, metadata duration, seek/replay, no autoplay; completion event unlocks parent tasks. 38 simulated bars are not an audio-derived waveform.

### Vocabulario

#### Lesson 16 · ARGENTO

| Field | Current source |
| --- | --- |
| Category / primary level | Vocabulario / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/argento` / `/resources/spanish-vocabulary-lesson-a1-argento` |
| Route source | [`app/argento/page.tsx`](../../app/argento/page.tsx) |
| Access / collection / section | FREE / null / Vocabulario |
| Thumbnail | [`public/chespanish-guide-van.webp`](../../public/chespanish-guide-van.webp) |
| Objective | Use supported Argentine everyday vocabulary to express preferences, respond and sustain simple personal exchanges. |
| Focus | Argentina food/drinks; sport/music; transport/city; shopping; social plans; bilingual starters/connectors/reactions; slang and register |
| Visual concept | Bespoke Argentine photo dashboard: navy/sky blue, cream, warm gold, twelve photo world tiles, emoji and dense bilingual tool cards. Local thumbnail is a stylized mate-drinking guide in an Argentina van; in-lesson photos/hero are external Pexels backgrounds. |
| Principal interaction | Choose a world, page through 12 bilingual words and six follow-ups, use common starters/connectors/reactions, extend one idea; café and slang worlds add model/your-turn dialogue tabs. Help/surprise modal and four self-report speaking ticks support use. |
| Volume | 12 × (12 lexical entries + 1 lead + 6 follow-ups + 1 extension); 133 distinct lexical strings among 144 occurrences; 23 shared support entries; 2 four-turn models; 6 expanded slang cards and 3 surprises. |
| Renderer | bespoke; [`app/argento/page.tsx`](../../app/argento/page.tsx), [`app/argento/data.ts`](../../app/argento/data.ts), [`app/argento/style.css`](../../app/argento/style.css), [`app/argento/layout.tsx`](../../app/argento/layout.tsx) |
| Declared duration | 70 min |
| Estimated selected duration | 40–70 min. Editorial estimate for selecting 3–5 of 12 worlds, 1–2 roleplays/extensions and a short transfer close; exhaustive 12-world study is not a realistic single 70-minute beginner class; not observed timing. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | C — REPAIR. A substantial selectable regional bank, oral purpose and useful accessible modal flow are worth preserving. Focused register/context and retrieval repairs are necessary: beginner-safe support is weakened by unlabelled vulgar/informal forms and mostly permanently visible word/translation grids. |
| CEFR plausibility | mixed-scope. Most short likes/routine/choice prompts with bilingual frames are plausible A1. Comparing cities/cultures and explaining journeys need more scaffolding; social deployment of boludo/ni en pedo requires pragmatic/register control not supplied here. These forms do not automatically make the whole lesson B2; mark reception versus safe active production and constrain context. |

**Current concerns**

- Slang world presents boludo as mate/dude and ni en pedo as no way without relationship, offensiveness or avoid-in-formal-setting guidance; expanded slang section does not repair those two entries.
- Catalog/layout label Vocabulario A1; in-page masthead says A1 · CONVERSACIÓN.
- All bilingual words/supports stay visible; no built-in recognition-to-hidden-retrieval stage or re-entry of missed items.
- Follow-up support is assigned by array index, not authored per question; e.g. mate world question about sharing drinks receives termo + por ejemplo.
- 12 world patterns repeat the same card/question flow; extended output is not a progressive lexical retrieval route.
- All world photos/hero rely on remote resources; availability was not checked.

**Scope / preservation notes**

- Not in the countryCollection registry despite Argentina theme; this is metadata architecture, not an absent regional lesson.
- The separate Conversation Argento Roleplays lesson is not counted here.
- Bilingual support is intentional beginner scaffolding; critique concerns ungraduated visibility and context, not bilingualism itself.

**Evidence locators**

- [`app/argento/data.ts`](../../app/argento/data.ts) — `worlds, starters, connectors, reactions, slang, surprises`: 12 worlds/144 entries/133 unique strings; 72 followups; six expanded slang rows; boludo/ni en pedo lack register notes.
- [`app/argento/page.tsx`](../../app/argento/page.tsx) — `Argento, roleLines, visibleWords, visibleQuestions`: Bilingual world dashboard; two roleplay models; index-derived word+connector supports; A1 CONVERSACIÓN header.
- [`app/argento/page.tsx`](../../app/argento/page.tsx) — `modal effect`: Escape close, focus trap/return and scroll lock are implemented; no browser verification claimed.
- [`app/argento/style.css`](../../app/argento/style.css) — `world-grid, tools-grid, media queries`: 4-column world grid, then 3/2/1; tools become one column; reduced-motion and focus-visible support.
- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `countryLessonIds / id:16`: Vocabulario A1; not included in country collection.
- [`public/chespanish-guide-van.webp`](../../public/chespanish-guide-van.webp) — `local image inspected`: Argentina van/guide visual; differs from remote photographic runtime world tiles.

#### Lesson 204 · Palabras para resolver el día

| Field | Current source |
| --- | --- |
| Category / primary level | Vocabulario / A1 |
| Advertised levels / display | A1 / A1 |
| Route / resource preview | `/clase/204` / `/resources/spanish-vocabulary-lesson-a1-palabras-para-resolver-el-dia` |
| Route source | [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) |
| Access / collection / section | FREE / null / Vocabulario |
| Thumbnail | [`public/catalog-thumbnails/everyday-words.webp`](../../public/catalog-thumbnails/everyday-words.webp) |
| Objective | Resolve simple needs and communication problems using requests, clarification and closing chunks. |
| Focus | functional requests; communication repair; politeness; vos/tú/usted selection; café/class/shop exchanges |
| Visual concept | Thumbnail is a cabinet of home/travel/work/leisure worlds, much broader than this lesson. Actual route is a dark linear teacher worksheet with expandable activity prompts. Library uses a generic text/task-grid modal; the direct route uses text accordions. Thumbnail art is not an interactive lesson scene. |
| Principal interaction | Name real objects, read/model useful phrases, enact café/class/shop problems, classify expressions by function, reverse roles and repeat a six-turn personal dialogue after a changed detail. On the Library surface the same prompts appear in static task grids with generic hint buttons; on the direct route they are disclosures. |
| Volume | 8 core chunk groups (including 3 person forms of repeat request), 4 practice + 3 speaking tasks; final six-turn exchange. |
| Renderer | generic; [`app/additional-samples.ts`](../../app/additional-samples.ts), [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx), [`app/teachers.css`](../../app/teachers.css), [`app/Library.tsx`](../../app/Library.tsx), [`app/page.tsx`](../../app/page.tsx) |
| Declared duration | 35–45 min |
| Estimated selected duration | 30–45 min. Editorial estimate for three teacher-led contexts, role reversals, retrieval and a changed-detail close; not observed timing. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | Yes / Yes / No |
| Quality | C — REPAIR. Good meaning-to-use micro-sequence and meaningful final variation; focused visual/task repair is needed because categorization, context changes and information gaps are only instructions inside generic text panels. |
| CEFR plausibility | plausible. Formulaic requests, familiar concrete needs, role reversals and supported six-turn exchanges fit A1; teacher should select one address form before practice. |

**Current concerns**

- All lexical support is front-loaded in one paragraph rather than available within each scene.
- Classification is a text instruction with no sorting mechanism or contrasting choices.
- No teacher-only reveal for role information; exchanges depend entirely on teacher improvisation.
- Thumbnail suggests broad thematic vocabulary rather than functional survival/repair.

**Scope / preservation notes**

- Useful integrated functional chunks already exist; future core-vocabulary modules should add missing situations rather than duplicate these phrases.
- Surface distinction: the Library card opens the authorized inline viewer; /clase is also a valid direct/resource destination. Neither supplies embedded audio, image-based articulation or a bespoke task engine for this record.

**Evidence locators**

- [`app/additional-samples.ts`](../../app/additional-samples.ts) — `id:204`: 8 core chunk groups (including 3 person forms of repeat request), 4 practice + 3 speaking tasks; final six-turn exchange.
- [`app/clase/[id]/page.tsx`](../../app/clase/[id]/page.tsx) — `LessonPage non-Gramática branch`: Renders goals, warmup, explanation, practice/speaking details, homework; no audio, image, response or feedback component.
- [`app/teachers.css`](../../app/teachers.css) — `.teaching-section`: Shared dark text/accordion styling with 18px content and responsive teacher-main margins.
- [`app/access-policy.ts`](../../app/access-policy.ts) — `samplesByCategory`: Vocabulario samples determine FREE status.
- [`public/catalog-thumbnails/everyday-words.webp`](../../public/catalog-thumbnails/everyday-words.webp) — `local image inspected`: Visual concept recorded after direct local-image inspection.
- [`app/Library.tsx`](../../app/Library.tsx) — `lessonHref/openLesson and activeLesson viewer (around lines 838–861 and 1930–2160)`: Authorized records without path/special open inline text/task grids; all hint buttons use the same context hint. Resource/direct links use /clase accordions. Both render the same bank and count once.

#### Lesson 108 · El Banco de Palabras

| Field | Current source |
| --- | --- |
| Category / primary level | Vocabulario / A2 |
| Advertised levels / display | A2, B1 / A2–B1 |
| Route / resource preview | `/banco-de-palabras` / `/resources/spanish-vocabulary-lesson-a2-b1-el-banco-de-palabras` |
| Route source | [`app/banco-de-palabras/page.tsx`](../../app/banco-de-palabras/page.tsx) |
| Access / collection / section | PRO / null / Vocabulario |
| Thumbnail | [`public/previews/word-bank-studio-v91.webp`](../../public/previews/word-bank-studio-v91.webp) |
| Objective | Retrieve useful everyday words/chunks and combine selected units into connected personal speech. |
| Focus | home; city; food; travel; emotions; work/study; chunks/collocations; recognition-to-production |
| Visual concept | Bespoke cream/navy lexical workbench with editorial serif headings, six color-coded topics and tactile 3D object-studio hero. Four actual modes share topic selection; small card icons are symbolic rather than depicted referents. |
| Principal interaction | Filter/reveal cards; answer a four-option gap or meaning quiz with feedback; match five Spanish/English pairs; combine three sampled cards using one of four speaking tasks and a 60-second timer; choose five cards in Mi banco and use three without looking at close. |
| Volume | 60 lexical cards, each with definition/translation/example/gap; 21 chunks; 6 topics ×10; four modes and four reusable speaking instructions. Random draws are not additional authored content. |
| Renderer | bespoke; [`app/banco-de-palabras/WordBank.tsx`](../../app/banco-de-palabras/WordBank.tsx), [`app/banco-de-palabras/data.ts`](../../app/banco-de-palabras/data.ts), [`app/banco-de-palabras/style.css`](../../app/banco-de-palabras/style.css), [`app/banco-de-palabras/brand.css`](../../app/banco-de-palabras/brand.css), [`app/banco-de-palabras/layout.tsx`](../../app/banco-de-palabras/layout.tsx), [`app/banco-de-palabras/page.tsx`](../../app/banco-de-palabras/page.tsx) |
| Declared duration | 60–90 min · reutilizable |
| Estimated selected duration | 40–60 min. Editorial estimate for selecting 10–20 cards, exploring 8–12, two short recognition/retrieval rounds and several speaking turns plus the five-minute close. Catalogue 60–90 min is plausible only as an expanded reusable session; not observed timing. |
| Appears implemented complete | Yes |
| Needs redesign / pedagogical repair / metadata-only repair | No / Yes / No |
| Quality | B — GOOD FOUNDATION. A genuinely usable recognition-to-production foundation with substantial bank, control over English, feedback and oral close. Modest repairs can make retrieval selection, cross-session revisit and accessibility honest and reliable. |
| CEFR plausibility | plausible. Supported concrete recognition and short requests fit A2; connected story/problem/solution and past-present comparison provide B1 stretch. A2–B1 is one reusable mixed-demand bank, not two authored variants. |

**Current concerns**

- Mi banco uses component state only; close promises two cards for next class/homework without persistence or export.
- English toggle does not suppress the English-only matching meanings; teacher copy says English remains hidden until chosen.
- Practice pool uses topic only; kind/search/saved selection affects exploration but not quiz/matching/speaking, so saved targets cannot directly drive a retrieval round.
- Random quiz draws do not track seen/missed items or schedule re-retrieval; same target can immediately recur.
- Four speaking templates are shared across A2–B1; no separately authored A2/B1 routes or scaffolding.
- Some small text is 8–11px and save buttons are 30px; verify legibility/touch targets on mobile. Search input has only an icon/placeholder rather than a meaningful explicit accessible label.

**Scope / preservation notes**

- No audio is required for every vocabulary card, but recognition versus active production should be explicit.
- No evidence of a separate B1 bank; counts should credit one active A2 record and one declared A2–B1 range.

**Evidence locators**

- [`app/banco-de-palabras/data.ts`](../../app/banco-de-palabras/data.ts) — `wordBank / wordTopics`: Exactly 60 cards; 20 nouns/12 verbs/7 adjectives/21 chunks; ten per topic; every card includes definition/example/gap.
- [`app/banco-de-palabras/WordBank.tsx`](../../app/banco-de-palabras/WordBank.tsx) — `practicePool, visibleWords, savedIds`: Saved IDs exist only in component state; topic-only practicePool ignores other exploration filters.
- [`app/banco-de-palabras/WordBank.tsx`](../../app/banco-de-palabras/WordBank.tsx) — `buildQuiz, buildMatch, speakingTasks, wb-exit`: Actual quiz feedback, five-pair matching, four oral tasks/timer and five-card oral/revisit close.
- [`app/banco-de-palabras/WordBank.tsx`](../../app/banco-de-palabras/WordBank.tsx) — `parejas mode`: Meaning tiles always use English translations independently of supportVisible.
- [`app/banco-de-palabras/style.css`](../../app/banco-de-palabras/style.css) — `.wb-save, .wb-card-face, media queries`: 30px save targets, some 8–11px text; responsive grid reductions and reduced-motion rule.
- [`public/previews/word-bank-studio-v91.webp`](../../public/previews/word-bank-studio-v91.webp) — `local image inspected`: Tactile object studio visibly groups home/city/food/travel/emotion/work themes.

## 7. Curriculum coverage and gaps

This is a curriculum map, not a six-level cloning plan. “Dedicated” identifies a focused existing route; “integrated/partial” acknowledges material inside another lesson. A listed system is not a claim of exhaustive PCIC subitem coverage. The lesson IDs below are current source records; historical archive items do not establish active coverage.

### Grammar coverage

| System | Current IDs | Coverage | Level focus | Finding / next boundary |
| --- | --- | --- | --- | --- |
| Articles | 42, 40, 110 | dedicated-and-integrated | A1; selected A2 extensions | Definiteness/first and subsequent mention, zero article and contractions exist. Repair under-specified discourse choices; stressed-a and advanced reference subitems are not established as exhaustive. |
| Gender and number | 40, 41, 110, 112, 118 | dedicated-and-integrated | A1–C1 progression | Noun/adjective agreement and basic plural patterns are explicit; later collective/complex agreement exists. Bound first-pattern rules and exceptions rather than adding a duplicate foundation. |
| Ser / estar | 48, 111, 119 | integrated | A1–A2 core; C1 perspective | ID48 directly contrasts identity/state; sentence architecture and advanced event/result cases reuse it. Focused meaning-shift extension could help, but the topic is not absent. |
| Hay | 48, 42, 111 | integrated | A1 | Existence/reference and hay versus estar are taught inside existing worlds and sentence work. |
| Present indicative | 140, 48, 3 | dedicated-and-integrated | A1 | Canonical tense route, system survey and preserved voseo seed exist. Repair form support and distractors; do not add another broad present lesson. |
| Reflexives and pronominal verbs | 46, 115 | partial-integrated | A1–A2; B1 aspect | Routine/reflexive overview and ponerse a exist. Terminology and a bounded reflexive/pronominal contrast need work; not a wholly missing category. |
| Gustar-type structures | 106, 212, 46 | partial-integrated | A1–A2 | ID106 explicitly explains experiencer OI and subject agreement; ID212 practices gustar + infinitive. Wider encantar/doler/importar contrasts lack a coherent selected route. |
| Direct object | 106, 46 | dedicated-and-integrated | A1 with A2 extension | Substantial dedicated postal/pronoun experience: role contrasts, 40 decisions and manipulable objects/recipients. Preserve and reuse its proven mechanism. |
| Indirect object | 106, 46 | dedicated-and-integrated | A1 with A2 extension | Recipients, experiencers and clitic combinations are already taught, with explicit optional A2 scope. |
| Possessives | 44, 114 | dedicated-and-integrated | A1 core; A2 tonic extension; B1 reuse | Full dedicated household overview exists; final tonic-contrast demand must be separated from the A1 core. |
| Demonstratives | 43 | dedicated | A1 core; A2 extension | Spatial and neuter demonstratives plus temporal/anaphoric extension exist. Improve actual referent manipulation rather than count an absent lesson. |
| Comparatives and superlatives | 45, 112, 114, 118 | partial-integrated | A1 quantity; A2–C1 extension | Quantity, adjective comparison and intensified/reformulated descriptions exist. A bounded irregular/superlative use route is incomplete; historic ID51 is not active coverage. |
| Pretérito perfecto compuesto | 141, 18, 48 | dedicated-and-integrated | A2; B1 contrast | Single-tense route and contrast masterclass exist. Retain regional alternatives; time adverbs alone cannot make an otherwise valid variety incorrect. |
| Pretérito perfecto simple / indefinido | 142, 18, 48 | dedicated-and-integrated | A2; B1 contrast | Regular/irregular survey and narrative viewpoint work exist; controlled formation/retrieval needs strengthening. |
| Imperfecto | 143, 18, 48 | dedicated-and-integrated | A2; B1 contrast | Habit/background and interruption contrasted with events. Repair assessment precision rather than create another overview. |
| Contrast of past tenses | 18, 141, 142, 143, 147 | dedicated-and-integrated | B1 consolidation | ID18 supplies a genuine surfer/viewpoint metaphor; add a coherent three-tense oral close to the existing class. |
| Future simple | 144 | dedicated | A2 core; conjecture/stretch scope | Future route exists. Separate prediction/promise and current conjecture; a future-only diagram cannot explain every use. |
| Periphrastic future | 48, 140, 144, 31 | integrated | A1–A2; later contrast | Ir a + infinitive has examples, practice and oral agenda in ID48 plus contrasts elsewhere. Missing a standalone title does not mean missing coverage. |
| Conditional simple | 146, 23, 31, 219 | dedicated-and-integrated | B1–B2 | Politeness, hypothesis, reported future and conjecture appear; bound the selected route and temporal interpretation. |
| Present subjunctive | 148, 37, 220 | dedicated-and-integrated | B1 introduction; B2/C1 consolidation | Modern form and multiple clause uses exist. Support regular formation first and avoid oversimplifying known/new information as mandatory mood rules. |
| Past subjunctive | 150, 151, 37, 219 | dedicated-and-integrated | B2; C1 consolidation | Imperfect and pluperfect subjunctive already have separate routes. Contextual time relations and accepted alternatives need repair. |
| Perfect subjunctive | 149, 151, 37 | dedicated-and-integrated | B1/B2; selected higher uses | Perfect and pluperfect routes exist, including anteriority. Future-anterior use is broader than simple recent-event reaction. |
| Conditional structures | 214, 219, 31, 23, 150, 151, 152 | dedicated-and-integrated | A2 real → B1/B2 hypothesis → B2/C1 mixed | Real, remote, past and mixed patterns exist; prioritize semantic practice, normative accuracy and audience differentiation. |
| Imperatives affirmative and negative | 145, 23, 31 | dedicated-and-integrated | A2; later pragmatic use | Canonical affirmative/negative route plus reference tables exist. Conversation ID216 also supplies enactment but remains outside Grammar record counts. |
| Relative clauses | 212, 218, 114, 116, 118, 37 | partial-dedicated | A1 identification → B1 reference → advanced interpretation | Que, quien, donde, restrictive/explanatory contrasts and mood by referent exist. Repair missing punctuation/nonunique keys; wider relative inventory is incomplete. |
| Pronouns | 46, 106, 212, 218 | dedicated-and-integrated | A1–B1 core; later reuse | Subject, OD/OI, reflexive/interrogative/relative overview and detailed clitics exist; do not duplicate the postal lesson. |
| Connectors / discourse grammar | 211, 212, 217, 220, 118 | partial-dedicated | A1–C1 | Coordination, reason/purpose, concession and advanced information structure exist. Correct negative coordination and broaden discourse organization selectively. |
| Por / para | 110, 212, 117, 106 | partial-integrated | A1 purpose; A2/B1 expansion opportunity | Purpose, recipient and verb-regime uses exist. No active coherent reason/purpose/means/route contrast sequence found. Archived ID7 is excluded. |
| Prepositions | 47, 110, 106, 117 | partial-dedicated | A1 location/participants; B2 verb regime | Location, noun complements and selected verb–preposition combinations exist. Broader contextual a/de/en/por/para selection remains uneven. |
| Reported speech | 146, 147, 152, 37, 117 | partial-integrated | B1–B2 proposed integration | Backshift examples and finite complements exist; no coherent speaker/person/place/time-shift reporting task was found across the 51 grammar records. |
| Passive / impersonal constructions | 113, 116, 119 | partial-integrated | B2/C1 examples; bounded productive gap | Weather impersonals and event-passive/result-state examples exist. No coherent productive passive-se/impersonal-se agreement and agency route found. |
| Sequence of tenses | 37, 147, 148, 149, 150, 151, 152, 219 | dedicated-overview-with-repair | B1–C1 | Modern subjunctive matrix, reference shifts and condition/result correlation exist. Not absent; improve variable reference-time/context and regional qualification. |
| Advanced discourse structures | 118, 119, 116, 220, 37 | partial-dedicated | B2–C1; limited C2 evidence | Ambiguity, ellipsis, dislocation, nominalization, perspective and concessive stance exist. Extended register-sensitive discourse and mediation remain uneven. |
| Other compound indicative systems | 147, 152, 153 | dedicated | B1–B2 | Pluperfect, conditional perfect and future perfect are present; missing modern tenses is not the core gap. |
| Historical / restricted tenses | 154, 155, 156, 37 | receptive-reference | C1/C2 catalogue | Pretérito anterior and future subjunctive forms are explicitly receptive/restricted. Preserve their purpose; one rare-form C2 record does not constitute a productive C2 grammar curriculum. |

The 17 single-tense/mood routes are already present. Keep both **BY MOOD** and **BY TENSE** navigation over that same ledger. Repair their practice design in bounded groups; do not regenerate the entire system or create A1–C2 copies of every tense.

### Phonetics coverage

| Area | Current IDs | Coverage | Finding |
| --- | --- | --- | --- |
| sound-level | 201, 38 | partial-dedicated | 201 explicitly treats five stable vowels; 38 adds brief tap/trill and place-of-articulation survey (p/b/m, f, t/d, n/l, ñ, j). Model audio and dedicated consonant contrast practice are absent from these routes. |
| syllable/stress | 202, 38 | dedicated | 202 has stress triples, four target words, stress/meaning contrast and oral routine; 38 integrates stress and slower/natural repetition. |
| rhythm | 202, 38 | partial-dedicated | Clapping, two pause-marked phrases and speed changes; no connected audio or progressively removed rhythmic support. |
| connected speech | 202, 38 | missing-dedicated | Phrase grouping and speed changes are integrated precursors; no explicit linking/resyllabification, vowel contact or reductions bank. Do not label connected speech wholly absent across listening lessons without cross-category review. |
| intonation | 202, 38 | missing-dedicated | Questions and expressive speech appear but no authored meaning contrast through rising/falling/continuation contours or pragmatic prosody. |
| regional pronunciation | 202 | partial-integrated | 202 contrasts tomás/tomas as preferred treatment; no dedicated pronunciation contrasts or variety-specific modelling. Argentina lexical culture16 is not pronunciation evidence. |
| listening discrimination | 201, 202, 38 | partial-integrated | Teacher says hidden words in vowel/stress/tap-trill tasks, so discrimination exists pedagogically. No local audio-backed minimal-pair/replay engine in any of the three routes. |
| CEFR bands | 201, 202, 38 | uneven | 3 primary A1 records;38 declares A1–C1 but contains one bank and no authored level adaptation. No dedicated primary A2/B1/B2/C1/C2 record. |
| specific consonant/variety boundaries | 38, 202 | partial-or-missing-dedicated | ID38 mentions b/d/j articulation but does not teach b/v spelling-versus-phoneme, contextual d weakening or jota variants; s and y/ll are not targeted in these three banks. Tap/trill exists as teacher-led contrast. No dedicated Rioplatense pronunciation module; voseo stress in202 is only an integrated precursor. |

Teacher-led oral discrimination is already part of 201/202. The missing mechanism is native audible input and structured perception-to-production reuse, not the absence of an oral teaching intention. Related shadowing and tone work in Escucha do not become additional Fonética records.

### Listening coverage

| Area | Current IDs | Coverage | Finding |
| --- | --- | --- | --- |
| CEFR record distribution | 28, 105, 130, 131, 132, 133, 134, 135 | present | A1=1, A2=3, B1=1, B2=1, C1=1, C2=1. Presence of a badge at every level is not breadth or formal CEFR certification. |
| voice messages and announcements | 130, 131, 133, 135 | integrated | Several channels represented inside narrative experiences; do not call them absent or propose duplicate airport listening. |
| café/transport/travel | 28, 105, 131, 132 | integrated | Everyday stories, café pickup message, airport decision and travel-seat anecdote already exist. Dedicated turn-by-turn café negotiation still absent. |
| interview, radio, work, customer service | 132, 133, 134, 135 | present | Radio callers/host, hotel recovery, complex interview and flexible-work perspectives. Customer-service repair is established atB2, not absent. |
| family/friends and storytelling | 28, 105, 132 | integrated | Family, friends and anecdotal narratives are abundant, predominantly narrated monologues rather than real-time family group conversation. |
| dialect exposure | 28, 105, 130, 131, 132, 133, 134, 135 | partial | Broad regional labels and many es-*-Neural voice IDs. This is modeled exposure; neither regional authenticity nor systematic receptive variety learning is verified. |
| spoken follow-up | 130, 131, 132, 133, 134, 135 | present | All six newer routes include explicit oral close;28/105 have oral comprehension and shadowing but lack authored freer transfer. |
| connected speech/intonation | 28, 105, 134, 135 | partial | Shadowing, irony and five-tone lab exist. Systematic reductions/segmentation and blind validated prosodic discrimination are missing from this listening set. |

**67 MP3s total 2,004.701 seconds (33 min 24.701 s).** This is audio duration across the library, not class time. File metadata was measured; no perceptual audition was performed. Variety labels below are source/voice claims, not verified accents.

| ID / CEFR | Audio forms | Topics | Files / total seconds | Clip duration range |
| --- | --- | --- | --- | --- |
| 130 / A1 | intercom message; voice note; voicemail; two-speaker delivery dialogue | neighbors; home; work routine; package delivery | 7 / 103.056 | 11.928–16.368 s |
| 131 / A2 | terminal announcement; friend voice note; café recorded pickup message; two-speaker directions; driver voice note | flight gate/time; café pickup; late travel partner; wayfinding; arrival transport | 6 / 86.424 | 12.168–15.84 s |
| 105 / A2 | single-speaker fantasy anecdote | luggage; breakfast orders; weather; rest; directions; sound/sleep; time; clothing; phone message; companionship | 10 / 545.04 | 49.368–61.992 s |
| 28 / A2 | single-speaker anecdote | transport; friendship; market/food; lost bag; family plans; weather/work; walk/relaxation; family party; nature visit; family memory; urban travel | 10 / 463.805 | 44.33–48.562 s |
| 132 / B1 | single-speaker radio caller anecdote; host follow-up | mistaken messages; work meeting error; delivery coincidence; professional community; travel-seat fairness | 10 / 206.112 | 6.168–40.056 s |
| 133 / B2 | testimony monologues; internal interview/report; voicemail-style account; manager response | hotel service; room change; cake delivery; key access; wake-up call; complaint/reputation | 7 / 219.12 | 28.248–35.184 s |
| 134 / C1 | two-speaker scripted interview; off-camera monologue | festival expansion; sponsor pressure; staff departures; campaign irony; responsibility; media editing | 5 / 144.696 | 27.24–30.96 s |
| 135 / C2 | corporate podcast excerpt; private voice note; professional interview excerpt; local radio commentary; spontaneous-commentary simulation; overlapping two-speaker conversation; intonation mini-clips; data-report counter-signal | flexible work; availability; coordination; coworking; informal monitoring; interpretation/intonation | 12 / 236.448 | 3.36–35.016 s |

| ID | Claimed varieties | Tasks / interaction | Support / transcript |
| --- | --- | --- | --- |
| 130 | México; Colombia; Perú; Uruguay; España; Argentina | prediction; detail choice; cross-source matching; justify with two facts; personal exchange | High: declared slowed voice rates, optional0.75× playback, transcript teacher toggle, starters after questions, five support chunks. Hidden initially; teacher can open before first listen; no synchronized word/sentence timestamps. |
| 131 | España; Argentina; Colombia; México; Perú | prediction; gist/detail choice; cross-source decision; oral message response; personal experience | High: short slowed-declared sources,0.75× option, transcript toggle and five plan chunks. Hidden initially; teacher can open before first listen; no synchronized word/sentence timestamps. |
| 105 | Argentina; México; Colombia; Chile; Uruguay; Perú; Costa Rica; República Dominicana | gist MCQ; detail MCQ; spoken factual/inferential response; model comparison; reading/shadowing | High: replay/seek ±10s, optional transcript, bilingual glossary, English student directions; no speed control. Hidden initially; teacher can open before first listen; no synchronized word/sentence timestamps. |
| 28 | Argentina; México; Colombia; Perú; Chile; Uruguay; República Dominicana; Costa Rica; Cuba; Bolivia | factual MCQ; spoken factual answers; model comparison; reading/shadowing | High: replay/seek ±10s, optional transcript, Spanish glossary, English student instructions. No playback-rate control. Hidden initially; teacher can open before first listen; no synchronized word/sentence timestamps. |
| 132 | México; España; Chile; Colombia; Uruguay; Argentina (host) | prediction; gist choice; detail response; credibility inference; generate question; narrative production | Medium: optional0.75× on stories, replay, teacher transcript, narrative connectors; host audio has no slow toggle. Hidden initially; teacher can open before first listen; no synchronized word/sentence timestamps. |
| 133 | España; Colombia; Perú; México; Argentina | selective listening; fact/inference; event ordering; causal reconstruction; professional response; argument | Medium: listening focus before each, replay/transcript on witnesses, discourse chunks, keyboard arrow alternative to drag; no slow option or rendered resolution transcript. Hidden initially; teacher can open before first listen; no synchronized word/sentence timestamps. |
| 134 | España (Nora voice metadata); Argentina (León voice metadata) | subtext inference; register contrast; irony interpretation; evidence quotation; select clips; oral defense; headline reformulation | Medium/light: replay, teacher transcript, inferential language stems, prior hooks; no slow toggle. Hidden initially; teacher can open before first listen; no synchronized word/sentence timestamps. |
| 135 | México; Argentina; España; Colombia; Chile; Puerto Rico; Perú | stance scale; implicit inference; counterargument; overlap reconstruction; intention discrimination; imitated prosody; multi-source synthesis; revise conclusion | Light/advanced: teacher transcript for main signals, five discourse stems, source-role preview, teacher counterarguments; tone context explicit; no slow toggle. Hidden initially; teacher can open before first listen; no synchronized word/sentence timestamps. |

The JSON also records every MP3 path/duration and each source’s type, topic, question, voice metadata and transcript availability. Existing short messages, transport, travel, storytelling and radio/panel framing are real coverage; they do not substitute for a sustained interview, service clarification, news/vox-pop or multi-party turn-tracking route.

### Vocabulary coverage

| Area | Current IDs | Coverage | Finding |
| --- | --- | --- | --- |
| everyday semantic themes | 16, 108 | partial-dedicated | 108 offers home/city/food/travel/emotions/work-study, 10 cards each;16 adds Argentine drinks/food/sport/music/café/kiosk/transport/city/social life/market/slang. These are curated selections, not comprehensive core lexicon. |
| functional chunks | 204, 16, 108 | dedicated | 204 requests/clarification/closing;16 7 starters,8 connectors,8 reactions and 2 role models;108 21 chunks including quedarse sin, para llevar, tener ganas de, ponerse al día. |
| collocations/combinations | 108, 204, 16 | partial-integrated | Lexical chunks and full examples supply combinations. No dedicated meaningful collocation-choice/repair task or corpus-informed contrast sequence is present. |
| slang/register and regional modules | 16, 204, 108 | dedicated-with-repair | ARGENTO is already a country/regional lexical module; regional work should refine its register support, not duplicate it.204 contrasts address forms;108 explicitly labels rendir un examen as frequent Argentina usage. |
| CEFR bands | 16, 204, 108 | uneven | 2 primary A1 records and 1 primary A2 record;108 declares A2–B1. No primary B1/B2/C1/C2 vocabulary record. Integrated advanced lexis in conversation/listening/grammar is not assessed as absent. |

Everyday food, home, city, travel, work and emotional vocabulary already exists. New work should address purposeful retrieval, combinations and register or a specific unserved use case. Advanced words used in another category are acknowledged exposure; they do not prove a dedicated advanced lexical progression.

### Prioritized curriculum gap register

| Gap | Category / area | Current IDs | Coverage status | Priority | Recommendation |
| --- | --- | --- | --- | --- | --- |
| G-CORRECTNESS | Gramática / Answer validity and rendered language | 45, 47, 117, 213, 217, 218, 31, 151, 152 | repair-existing | high | Repair demonstrable sentence/key/context errors first. Keep lesson identity; assemble real rendered strings and review every accepted alternative. |
| G-VERBAL | Gramática / Meaningful tense formation and assessment | 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156 | repair-existing | high | Modern tense inventory is already broad. Pilot repaired form support, plausible distractors, oral exit and truthful temporal representations in2–3 existing records per run; do not rewrite all17 in one run. |
| G-PORPARA | Gramática / Por/para communicative contrast | 110, 212, 117, 106 | partial-integrated | high | Later bounded A2/B1 route contrasting reason, purpose, beneficiary, means and path where current contexts do not cover them. Archived7 is not active; reuse integrated foundations. |
| G-REPORT | Gramática / Reported speech / deictic shift | 146, 147, 152, 37, 117 | partial-integrated | high | New bounded B1/B2 message-relay experience: preserve speaker intention while changing person/time/place. Existing backshift examples are prerequisites, not a complete reporting route. |
| G-SE | Gramática / Passive and impersonal se | 113, 116, 119 | partial-integrated | high | New bounded B2 agency/information task; differentiate agreement, unknown agent and result state with speaking transfer. No blanket claim that passives are absent. |
| G-FOUNDATION | Gramática / Reflexive/experiencer/comparison extensions | 46, 106, 212, 45, 112, 114 | partial-integrated | medium | After correctness repairs, deepen selected reflexive/pronominal, gustar-family and comparison/superlative functions; do not duplicate OD/OI or article foundations. |
| G-DISCOURSE | Gramática / Advanced discourse and C2 evidence | 118, 119, 116, 220, 156 | partial-dedicated | medium | Later sustained precision/mediation work and context-sensitive scope; preserve historical156 as receptive while reviewing its unsupported C2 demand. |
| P-MODELS | Fonética / Audible/visible oral mechanisms | 201, 202, 38 | repair-existing | high | All3 currently rely on teacher-provided models. Repair vowels/stress, then rebuild Mouth Lab with a bounded articulation/contrast core; keep existing text as support. |
| P-CONNECTED | Fonética / Connected speech | 202, 38 | missing-dedicated | high | New A2/B1 linking/resyllabification and phrase-grouping route using reviewed audio, segmentation and spontaneous reuse. Listening shadowing is an integrated precursor. |
| P-INTONATION | Fonética / Pragmatic intonation | 202, 38, 135 | missing-dedicated | high | New B1/B2 meaning-through-prosody work. C2 listening135 already attempts tone discrimination and must be repaired, not counted as no prosody anywhere. |
| P-REGIONAL | Fonética / Regional consonants and perception | 38, 202 | partial-precursors | high | Prioritize an intentional y/ll Rioplatense-versus-other-variety listening/production module. Later s, jota and d variation, b/v orthography/phoneme distinction; no accent erasure or stereotypes. |
| L-VALIDITY | Escucha / Evidence, chronology, scoring and transfer | 28, 105, 131, 133, 135 | repair-existing | high | Fix answerability and actual source evidence, state/scoring and real oral transfer before expanding large banks. |
| L-TRANSACTION | Escucha / Beginner sustained transaction / clarification | 130, 131, 105, 133 | missing-dedicated | high | New A2 appointment/service call with clarification and a spoken next turn. Short messages, transport and hotel contexts already exist; do not propose another airport clone. |
| L-SUSTAINED | Escucha / Multi-minute sustained listening | 132, 134, 135 | partial | high | New C1 extended interview/podcast with coherent argument, turn repair and note-based synthesis; production/audio rights and perceptual QA are future prerequisites. |
| L-VARIETY | Escucha / Verified varieties and reduced speech | 28, 105, 130, 131, 132, 133, 134, 135 | partial-unverified | high | Broad labels exist. Audition all chosen sources, validate scripts/prosody and design strategy transfer before advertising authentic accent mastery. |
| L-FORMATS | Escucha / News, street reactions and informal group decision | 132, 134, 135, 28 | missing-dedicated-with-topic-overlap | medium | Later B1/B2 local bulletin plus reactions or3-person informal decision. Friends, family, work, radio and argument topics already occur; the gap is sustained task/audio form. |
| V-RETRIEVAL | Vocabulario / Recall, saved targets and register | 16, 108, 204 | repair-existing | high | Retain regional bank and chunks; make register/neutral alternatives explicit, hide answers for retrieval and make selected/saved targets actually drive practice. Clarify persistence without requiring D1. |
| V-CORE | Vocabulario / Everyday lexical gaps | 16, 108, 204 | missing-dedicated-with-cross-category-overlap | high | Prioritize health/help/appointment chunks, then clothing/detail selection, time and personal/family identity where coherent active-retrieval routes remain absent. Cross-category scene mentions do not establish a lexical sequence. |
| V-COLLOCATION | Vocabulario / B1/B2 collocations and commitments | 108, 16, 204 | partial-integrated | high | New situation-led combination/repair task, including conventional partners and pragmatic choice; do not add another100-word thematic list. |
| V-NUANCE | Vocabulario / C1/C2 lexical nuance and register | None | missing-dedicated | high | New C1 bounded connotation/near-synonym/register experience; later C2 only if exacting communication is authored. Advanced language already occurs in conversation/listening. |

## 8. Reusable engines and extraction boundaries

Reuse where the learner action matches. An engine may be a small primitive, a shared renderer or useful in-page logic; these are different maturity levels. A scene title does not prove an engine exists. No extraction or new engine was implemented.

| ID / system | Status | Implemented mechanism | Boundary / recommendation | Source |
| --- | --- | --- | --- | --- |
| E01 / AudioDeck | existing-extracted | Audio play/pause/replay/seek, loaded duration, optional 0.75×/1×, errors, completed-play count and completion callback. Used by six listening narratives. | It does not implement comprehension progression, transcript rules, segment looping or a real waveform. The 38 bars are deterministic decoration. Reuse transport; keep lesson state and editorial narrative separate. Add segment replay only when a task requires it. | [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx), [`app/listening-studio/audio-deck.css`](../../app/listening-studio/audio-deck.css) |
| E02 / GrammarStep | existing-extracted-primitive | Accessible disclosure with stable generated panel ID, aria-expanded/controls, default-open/core/optional distinction, theme accent. | Presentation/navigation primitive, not a pedagogical engine or evidence of meaningful learner action. Reuse for optional guidance and teacher controls; do not make opening panels the principal activity. | [`app/grammar-steps/GrammarStep.tsx`](../../app/grammar-steps/GrammarStep.tsx), [`app/grammar-steps/style.css`](../../app/grammar-steps/style.css) |
| E03 / GrammarWorld | existing-extracted-renderer | Station navigation, visited tracking, explanation/formula/example displays, MCQ practice, oral prompts and final mission. | Illustrated world/console is not a manipulable spatial map. Progress labeled DOMINIO DEL MÓDULO is derived from visited stations, not mastery. Retain shared station/reference layer where useful; repair misleading mastery language and add topic-specific meaningful mechanisms selectively. | [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx), [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts), [`app/grammar-worlds/data-next.ts`](../../app/grammar-worlds/data-next.ts) |
| E04 / PhraseLab and C1Lab | existing-extracted-specialized-renderers | Token-colored grammatical layers, selectable transformations or case files, tap-to-order reconstructions, feedback MCQs, oral production and closing conversation. | Ordering internals are duplicated private components, not exported primitives; selecting a layer does not prove learning. Keep distinct C1 case interpretation when justified; extract only compatible ordering/feedback primitives. | [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/C1Lab.tsx`](../../app/phrase-labs/C1Lab.tsx) |
| E05 / SyntaxLab and syntax visuals | existing-extracted-renderer-and-visual-primitives | Pattern selectors, meaning decisions with feedback, repair choices, retrieval prompts, production and conversation; eight visual layouts for left/connector/right. | TimelineBuilder, DecisionChain, ContrastMixer, ReferentFinder, HypothesisSwitch, EvidenceSwitch are stateless span layouts. Names do not establish drag/order, branch logic or active switches. Reuse shared semantics/feedback. Add a real timeline or switch only when the learner must manipulate those relationships; do not count eight independent engines. | [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx), [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) |
| E06 / VerbLesson and SystemHub | existing-extracted-specialized-renderer | Mood/tense navigation; discovery, form/use/contrast, five-choice practice, reveal transformations, oral prompts, optional language bridges/region notes. | Seventeen curricular records, not one generic six-level family. Uniform arrays/time labels do not prove duration or CEFR fit. Preserve mood/tense architecture and recognition-vs-production status; enrich only evidenced weak stages. | [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx), [`app/verbal-system/SystemHub.tsx`](../../app/verbal-system/SystemHub.tsx), [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) |
| E07 / Board session engine | existing-extracted | Shuffled category queue without repeats, next/previous/skip/deepen, exhaustion, serialization and restoration with bank validation. | Conversation banks; not yet a vocabulary mastery/spaced-retrieval system. Reuse queue/state logic only where genuine board or prompt-deck activity fits; preserve separate authored banks and visual identity. | [`app/boards/engine.ts`](../../app/boards/engine.ts), [`app/boards/BoardLesson.tsx`](../../app/boards/BoardLesson.tsx), [`app/boards/types.ts`](../../app/boards/types.ts), [`app/boards/validate.ts`](../../app/boards/validate.ts) |
| E08 / Conversation world/family state | existing-extracted | Level-aware authored world decisions and family navigation with independent state. | Batch1 protected; not a universal lesson template and no reason to apply six levels to each grammar concept. Treat as architectural reference for type-only renderer imports and state boundaries; do not change during this audit. | [`app/conversation-worlds/ConversationWorld.tsx`](../../app/conversation-worlds/ConversationWorld.tsx), [`app/conversation-worlds/state.ts`](../../app/conversation-worlds/state.ts), [`app/conversation-families/ConversationFamily.tsx`](../../app/conversation-families/ConversationFamily.tsx) |
| E09 / Tap-to-order reconstruction | bespoke-logic-worth-extracting | Click token into sentence, remove, reset, compare with accepted order arrays. | Uses token text identity/includes/key; duplicate strings cannot be independent tokens. This is a reuse constraint, not proof current tasks fail. Extract small ordered-token primitive with stable token IDs, keyboard/touch interaction, accepted alternatives and meaning feedback; no mandatory drag. | [`app/phrase-labs/PhraseLab.tsx#OrderBoard`](../../app/phrase-labs/PhraseLab.tsx), [`app/phrase-labs/C1Lab.tsx#OrderCard`](../../app/phrase-labs/C1Lab.tsx) |
| E10 / Pronoun roles / DeliveryLab | bespoke-logic-worth-extracting | Four explorable sentence scenes and 4 objects ×5 recipients ×3 representations; changing referents changes nominal, single-clitic and combined-clitic output. | Proven inside ID106, not an exported general phrase builder; object/person/accepted-form rules are domain-specific. Reuse the participant/reference pattern for a suitable pronoun or lexical scene; keep ID106 intact and extract only with real second-use requirements. | [`app/la-estacion-de-los-dos-destinos/page.tsx`](../../app/la-estacion-de-los-dos-destinos/page.tsx), [`app/la-estacion-de-los-dos-destinos/data.ts`](../../app/la-estacion-de-los-dos-destinos/data.ts) |
| E11 / Vocabulary quiz/match/oral combination | bespoke-logic-worth-extracting | buildQuiz/buildMatch, filtered pools, reveal, timed three-card speaking combinations, matching by stable wordId. | Hardwired wordBank import and monolithic state. Random reshuffling is not spaced retrieval. Extract pool and matching/retrieval policies if a second lexical lesson requires them, preserving separate art direction and chunk-oriented content. | [`app/banco-de-palabras/WordBank.tsx`](../../app/banco-de-palabras/WordBank.tsx) |
| E12 / Listening stage orchestration and transcript controls | bespoke-logic-worth-extracting | Per-country resets, listening counters, hidden transcript, stage navigation, prediction and authored speaking follow-ups. | Teacher transcript overrides and seek/end behavior need explicit product policy; a completion callback alone does not prove full attentive listening. Extract a small stage/progress controller with replay/skip/back/reset policy only after comparing needs; keep narrative cases bespoke. | [`app/latinoamerica-al-oido/page.tsx`](../../app/latinoamerica-al-oido/page.tsx), [`app/el-edificio-de-las-voces/page.tsx`](../../app/el-edificio-de-las-voces/page.tsx), [`app/la-entrevista-que-no-salio-al-aire/page.tsx`](../../app/la-entrevista-que-no-salio-al-aire/page.tsx) |
| E13 / Choice-limited scenarios / scene navigation | bespoke-logic-worth-extracting | Protected choices, constrained budgets, consequence reveals and explorable scene-driven decisions. | Existing bespoke conversation code demonstrates mechanisms; not a currently exported universal branching engine. Use as patterns if a listening/lexical service scenario needs consequential decisions. Avoid generic mega-engine extraction. | [`app/la-mesa-de-las-tres-ofertas/page.tsx`](../../app/la-mesa-de-las-tres-ofertas/page.tsx), [`app/en-vivo-en-diez-minutos/page.tsx`](../../app/en-vivo-en-diez-minutos/page.tsx), [`app/la-ciudad-no-duerme/page.tsx`](../../app/la-ciudad-no-duerme/page.tsx) |
| E14 / Audio-first discrimination and production loop | new-recommended | New task controller for listen-without-visible-answer, contrast selection, replay, articulation cue, controlled and spontaneous oral reuse. | No extracted minimal-pair/audio-first phonetics task engine found. Existing teacher-led contrast prompts count as content, not this engine. Compose with AudioDeck and reviewed recordings; manual oral assessment sufficient, no mandatory automated speech scoring. | [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) |
| E15 / Segment replay and reconstruction timeline | new-recommended-extension | Bounded start/end replay, hide/reveal support, ordered chunk or event reconstruction from listening. | Current slider supports seeking only; decorative audio bars are not waveform/segment analysis. Existing OrderBoard can supply ordering after extraction. Add bounded replay and task state where selected listening repair needs them; do not build a waveform editor without pedagogical need. | [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx), [`app/phrase-labs/PhraseLab.tsx`](../../app/phrase-labs/PhraseLab.tsx) |
| E16 / Within-lesson adaptive retrieval scheduling | new-recommended-extension | Return missed or uncertain lexical chunks later, interleave contexts and track recognition separately from spoken use. | Current matching and random queue implementations are not adaptive spacing. No claim this requires persistent user storage. Use local session evidence/manual teacher marks; integrate only into selected vocabulary experience, not a universal lesson runtime. | [`app/banco-de-palabras/WordBank.tsx`](../../app/banco-de-palabras/WordBank.tsx), [`app/boards/engine.ts`](../../app/boards/engine.ts) |
| E17 / Evidence chronology ordering | bespoke-logic-worth-extracting | Move event cards using explicit up/down controls and compare sequence. | Current timestamps shortcut listening and source chronology requires repair; preserve keyboard/tap alternative. Extract only after event/evidence model is coherent, with stable IDs and listening evidence rather than numeric sorting alone. | [`app/habitacion-508/page.tsx`](../../app/habitacion-508/page.tsx) |
| E18 / ARGENTO scene chooser / support modal | existing-bespoke-pattern | Choose among12 worlds, inspect support and model two-role dialogues. | No hidden retrieval or mastery scheduling; culture bank not a phonetics engine. Preserve regional art/content; reuse role separation only when another lexical task requires it. | [`app/argento/page.tsx`](../../app/argento/page.tsx), [`app/argento/data.ts`](../../app/argento/data.ts) |
| E19 / Branching clarification / referent and evidence switches | new-recommended | Future bounded controllers in which changed referent/evidence or a clarification request changes available responses and consequences. | Named syntax switches are currently static; scenario data must be authored for each use. Implement only the one mechanic required by a2–4-lesson batch. Do not consolidate every category into a mega-engine. | [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx), [`app/ultima-llamada/page.tsx`](../../app/ultima-llamada/page.tsx) |

The strongest reusable foundations are AudioDeck transport, the postal object/recipient mechanism, PhraseLab token ordering, WordBank matching/retrieval state, real temporal viewpoint interaction and the newer listening evidence/plan state. Current limitations must be repaired before extraction. Future minimal-pair, segment-replay, articulatory, context/register and clarification controllers stay bounded; no mega-engine is proposed.

## 9. Observable quality drift and prevention

Concrete current source debt and a proven temporary source-integrity regression are documented. No evidence establishes a monotonic library-wide decline or causation by production speed.

### H1 · proven-temporary-regression-and-repair

A September23 B1 addition committed literal tool-output truncation headers and omitted content in two central source files; immediate follow-up restored complete catalog and syntax data. This is source-integrity loss in an intermediate commit, not proof current catalog is missing those lessons.

History: [21dab90d0498](https://github.com/agnremote-code/spanishcue-web/commit/21dab90d0498d8e1257241170fe360bd21a35251), [672f38e1f929](https://github.com/agnremote-code/spanishcue-web/commit/672f38e1f9299ad87aafc693f439d13dff0324c8).

- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `672f38e diff, file start and hunk near id127`: Removes Warning: truncated output (original token count: 20032) / Total output lines: 305 and restores records.
- [`app/syntax-labs/data.ts`](../../app/syntax-labs/data.ts) — `672f38e diff, file start and repairs section`: Removes analogous 17720/973 header and repairs truncated task content. Commit restores 249 lines and removes8 across two files.

**Prevention:** Parse/typecheck touched TS, compare IDs and preserved banks to base, reject truncation markers in source; review diff before checkpoint. No inference about author intent or deployment.

### H2 · proven-mechanism-homogenization-risk

September21–24 SyntaxLab additions expanded from connector/clause to timeline/decision, contrast/referent and hypothesis/evidence while all named visual primitives remained stateless left/connector/right presentations. Later names promise differentiated objects but the implemented interaction remains pattern selection and answer choice. This proves architectural repetition across additions, not that newer banks are shorter or worse Spanish.

History: [46743dff24f0](https://github.com/agnremote-code/spanishcue-web/commit/46743dff24f081f1aeba18fb257c596c539ca5c7), [0d04cc9a76e1](https://github.com/agnremote-code/spanishcue-web/commit/0d04cc9a76e14670a1de5321ba638b68eb4746b9), [21dab90d0498](https://github.com/agnremote-code/spanishcue-web/commit/21dab90d0498d8e1257241170fe360bd21a35251), [adde24c90680](https://github.com/agnremote-code/spanishcue-web/commit/adde24c9068014b7fec69b6066e8495d8848a976).

- [`app/syntax-labs/SyntaxVisuals.tsx`](../../app/syntax-labs/SyntaxVisuals.tsx) — `git log and adde24c additions HypothesisSwitch/EvidenceSwitch`: New components render three spans with labels, without independent state/events.
- [`app/syntax-labs/SyntaxLab.tsx`](../../app/syntax-labs/SyntaxLab.tsx) — `SyntaxPreview; PatternPreview; DecisionCard; RepairCard`: Common choice and feedback mechanism shared across modes.

**Prevention:** For each advertised mechanic document the learner action, state change and communicative consequence; human review rejects a metaphor that exists only as headings.

### H3 · current-debt-with-historical-continuity

Phonetics samples201/202 and vocabulary204 already existed as teacher-led textual arrays in September9; their generic current presentation is not evidence of later regression from a richer engine.

History: [7bded2797ff6](https://github.com/agnremote-code/spanishcue-web/commit/7bded2797ff6b21c08dc8c7a742e4607d2f20c65).

- [`app/additional-samples.ts`](../../app/additional-samples.ts) — `git show 7bded27:app/additional-samples.ts, IDs201/202/204`: Same type of warmup/explanation/practice/speaking/homework arrays;201 had A0 label then.

**Prevention:** Call these inherited format debt; improve them based on current v2 objectives without inventing a decline chronology.

### H4 · counterexample-improvement

September5 GrammarWorld enhancement added explicit curriculum scope and a world overview/console. September20 recovery integration adds GrammarStep/core/optional structure, scroll station navigation and visible station flow. These are concrete navigation and scope improvements, although they do not automatically make the underlying pedagogy sufficiently interactive.

History: [e3a27fa4c7d9](https://github.com/agnremote-code/spanishcue-web/commit/e3a27fa4c7d933d6ccd5fe6b0f009d93432dafe8), [b1c294115083](https://github.com/agnremote-code/spanishcue-web/commit/b1c294115083b9afa45ef0f6d72ab3cb858eb6b9).

- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `e3a27fa diff data.world/data.curriculum; b1c2941 openStation/IntersectionObserver/GrammarStep`: Adds explicit curriculum and navigation/disclosure structure.

**Prevention:** Preserve useful improvements and distinguish navigation change from authored learner practice. Recovery integration date is not original authoring date.

### H5 · current-verification-gap

Four syntax grammar suites are present but not invoked by package.json, scripts or GitHub workflows: A1 syntax, A2 time/condition, B1 contrast/relative, B2 hypothesis/concession. Verbal-system tests ARE invoked indirectly by scripts/test-worker.mjs.

History: [019310604045](https://github.com/agnremote-code/spanishcue-web/commit/019310604045bcdccf74fe3606e685ec826797f5).

- [`package.json`](../../package.json) — `scripts.test/test:conversation`: Explicit test lists; full test includes build and worker.
- [`scripts/test-worker.mjs`](../../scripts/test-worker.mjs) — `node --test invocation`: Includes verbal-help-contract and verbal-system-contract, not four syntax suites.
- [`.github/workflows/ci-automerge.yml`](../../.github/workflows/ci-automerge.yml) — `CI test invocation`: Uses npm test.

**Prevention:** Future implementation should connect lesson-specific checks to an explicit lightweight content suite and a CI invocation; no CI/config change in audit.

### H6 · quality-evidence-overclaim-risk

Structural tests assert exact bank counts, time labels and 45-minute timeline sums; these verify authored structure but cannot establish 45 minutes of useful teaching, correct accent, CEFR fit, accessibility or visual quality. Test names must not be treated as review results.

History: [019310604045](https://github.com/agnremote-code/spanishcue-web/commit/019310604045bcdccf74fe3606e685ec826797f5).

- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs) — `every lesson has a complete 45-minute teaching spine`: Checks3formation/4uses/6examples/2contrast/5practice/3transform/8conversation/3regional and fixed stage labels.
- [`tests/a1-syntax-lessons.test.mjs`](../../tests/a1-syntax-lessons.test.mjs) — `assertCommonLessonContract and shared engine test`: Checks timeline45, string lengths/counts and source regex for accessible-looking attributes; no browser interaction.

**Prevention:** Keep shape checks but add learning-objective, workload and interaction review. Do not replace a count threshold with inflated repetitive material.

### D1 · current-source-observation

All85 canonical verbal MCQ keys (17×5) select option0 without shuffling; many distractors contain malformed forms or editorial labels. Uniform counts do not establish meaningful practice.

- [`app/verbal-system/lesson-data.ts`](../../app/verbal-system/lesson-data.ts) — `verbalLessons[*].practice[*].answer`: 85/85 answer indexes0.
- [`app/verbal-system/VerbLesson.tsx`](../../app/verbal-system/VerbLesson.tsx) — `practice option rendering`: Source order rendered without shuffle.

**Prevention:** Check answer-position patterns and plausible alternative meanings; review every keyed sentence, not just array lengths.

### D2 · current-source-observation

Mastery labels in GrammarWorld and Subjuntivo derive from visited stations/worlds. The source measures navigation rather than demonstrated control.

- [`app/grammar-worlds/GrammarWorld.tsx`](../../app/grammar-worlds/GrammarWorld.tsx) — `progress/visited; DOMINIO DEL MÓDULO`: visited.length / stations.length.
- [`app/subjuntivo-pais-maravillas/page.tsx`](../../app/subjuntivo-pais-maravillas/page.tsx) — `visited; DOMINIO DEL MODO`: visited.size /7.

**Prevention:** Name progress accurately and distinguish teacher observation from automatic completion.

### D3 · current-source-observation

Navigation and metadata drift: historical GrammarWorld next links disagree with current prerequisites; generic Library grids and direct/clase disclosures present the same banks differently; words saved in108 do not persist despite next-class language.

- [`app/grammar-worlds/data.ts`](../../app/grammar-worlds/data.ts) — `nounFactory.nextPath; agreementAtelier.nextPath`: 40→41→42 versus catalogue40→42→41.
- [`app/lesson-catalog.ts`](../../app/lesson-catalog.ts) — `41.requires`: ID41 requires42.
- [`app/banco-de-palabras/WordBank.tsx`](../../app/banco-de-palabras/WordBank.tsx) — `saved state and closing copy`: useState only; no persistence/export.
- [`app/Library.tsx`](../../app/Library.tsx) — `openLesson and viewer`: Inline action surface coexists with direct route.

**Prevention:** Check advertised mechanics, both entry surfaces and prerequisite navigation against actual handlers.

### D4 · current-source-observation

Listening breadth is mostly short authored clips and spoken follow-up. All67 MP3s total33m24.701s across8 records; this is not class duration.20 legacy stories repeat MCQ→oral recall→reading; six newer scenes add meaningful integration and closes.

- [`app/latinoamerica-al-oido/page.tsx`](../../app/latinoamerica-al-oido/page.tsx) — `audio/exercise/oral/result/read stages`: Repeated bank loop; no authored freer close.
- [`app/listening-studio/AudioDeck.tsx`](../../app/listening-studio/AudioDeck.tsx) — `ended callback; bars`: Completion event not comprehension; bars decorative.

**Prevention:** Require audio-evidence review, useful repeated-listen purpose, honest pacing and final response; preserve newer meaningful scene mechanisms.

### D5 · current-source-observation

No evidence of an across-the-board shorter-bank trend was established. There are large old and new banks, useful oral prompts, and source fixes. Current defects and proven temporary source regression should not be attributed to an author or to production speed without evidence.

- [`docs/lessons/conversation-batch1-completion.json`](../../docs/lessons/conversation-batch1-completion.json) — `new variants and verification`: Batch1 preserved14 additions/708 primary items with explicit review limitations.
- [`app/argento/data.ts`](../../app/argento/data.ts) — `worlds`: Large12-world bank remains; volume alone is not quality.

**Prevention:** Compare dated source facts, preserve improvements and separate inheritance from proven regression.

## 10. Recommended production cadence

The [ranked first 20 priorities](NEXT_20_LESSON_PRIORITIES.md) contain full purpose, level, NEW/REPAIR/REDESIGN scope, complexity, engine, assets, reuse, prerequisite and acceptance details. One task can be an explicit 2–3-record repair package. The queue is **20 tasks, not 20 new lessons**.

First wave rotates Grammar→Phonetics→Listening→Vocabulary. Later bounded mixed-category batches pair compatible production stages; task rank expresses value and may be pulled forward within a batch.

| Run | Tasks | Categories | Existing IDs | New proposals | Total lesson targets | Complexity |
| --- | --- | --- | --- | --- | --- | --- |
| B01 | P01 | Gramática | 45, 47 | 0 | 2 | medium |
| B02 | P02 | Fonética | 201, 202 | 0 | 2 | high |
| B03 | P03 | Escucha | 131, 133 | 0 | 2 | high |
| B04 | P04 | Vocabulario | 16, 108 | 0 | 2 | medium |
| B05 | P05 | Gramática | 213, 217, 218 | 0 | 3 | medium |
| B06 | P06, P08 | Fonética, Vocabulario | 38, 204 | 0 | 2 | high |
| B07 | P07 | Escucha | 28, 105 | 0 | 2 | medium |
| B08 | P09, P11 | Vocabulario, Fonética | None | 2 | 2 | high |
| B09 | P10 | Gramática | 31, 151, 152 | 0 | 3 | medium |
| B10 | P12, P14 | Fonética, Escucha | None | 2 | 2 | high |
| B11 | P13 | Escucha | 134, 135 | 0 | 2 | high |
| B12 | P15, P17 | Vocabulario, Fonética | None | 2 | 2 | high |
| B13 | P16 | Gramática | 140, 141, 142 | 0 | 3 | high |
| B14 | P18, P19 | Vocabulario, Escucha | None | 2 | 2 | high |
| B15 | P20 | Gramática | None | 2 | 2 | high |

Each run starts from fresh canonical/pending legitimate source, preserves IDs/routes/access and original banks, and closes with the v2 evidence relevant to that work. A repair batch does not authorize adjacent redesigns. Stop at the agreed lesson count; a high-complexity controller is a reason to limit the run, not inflate it.

Batch1 preserved. Conversation production resumes only after separate prioritization/authorization; no Batch2 starts here.

**Beyond the first 20:**

- Por/para bounded contrast after integrated-coverage check
- Repair remaining14 canonical verbal banks in2–3-record waves
- Other GrammarWorld scope/navigation/meaning-mechanic repairs and ID3 voseo rebuild
- Meaningful active switches in214/219/220 and predicative117 correction
- Further news/vox-pop, family multi-party listening and agency/register use
- Clothing/detail, time/identity lexical gaps; other consonant/variety work; advanced discourse precision

## 11. Enforcement plan

Planning only. The full operational checklist and objective rejection conditions are in [Quality Standard v2](SPANISHCUE_QUALITY_STANDARD_V2.md). No test, CI, config or app file changed.

**Suitable for automation**

- Schema/unique IDs/option indexes/route/media references
- Catalog claims versus authored counts and available levels
- Exact/normalized duplicate and answer-position warnings
- Rendered answer composition checks and invalidation/reset regressions
- Preserved-bank hashes and changed-file scope
- Media duration/ID mapping and image dimension checks
- Targeted content tests wired into an actual lightweight runner
- Permitted browser screenshot/mobile/keyboard checks

**Requires qualified human/AI review and appropriate runtime evidence**

- Whole-bank language, answer alternatives and regional norms
- Communicative CEFR demand and progressive scaffolding
- Art direction and actual responsive/mobile usability
- Every audio cue/transcript/variety and thumbnail crop
- Credible selected45-minute route, oral transfer and teacher operation

Four syntax suites exist but are absent from actual package/scripts/workflow invocation. Verbal help/system suites are reached indirectly by test-worker. Full npmtest runs D1-mutating harnesses and was not run in this docs-only audit.

No publication until relevant QA passes through the authorized repository release process; pushed source-complete docs are not deployment or visual acceptance.

A content-count threshold detects missing structure, not good teaching. Duplication and answer-position checks are warnings requiring review. Screenshots need visual judgment; an `ended` audio event or a source-level ARIA assertion does not prove comprehension or accessibility.

## 12. Verification and delivery

**Verification status:** pending-final-consistency-check.

- Valid JSON; every65 active ID exactly once
- Source titles/categories/levels/paths/access/thumbnails/resource slugs exact
- All cited existing file paths resolve
- Category/CEFR/quality totals recompute
- Markdown inventory/queue/batches agree with JSON
- Only four requested docs differ from preserved source; Batch1 untouched
- git diff --check
- Final commit pushed and local/remote branch clean/equal

**Not run:** Full npmtest or worker/D1 harness; Build/lint/TypeScript (documentation-only; no app changes); Browser/audio audition/production smoke. Task-specific docs-only validation; avoid unnecessary database-mutating or production checks.

**Preservation:** Conversation Batch 1 unchanged; no new lessons or variants; no lesson text, thumbnails or routes altered. No D1, production data, auth, Firebase, billing, Paddle, PayPal, Resend, environments, secrets, domains or release-controller state modified. Nothing deployed or merged to main. Delivery is this pushed documentation branch only.

## 13. References reviewed

**Repository architecture, curriculum, authoring and test references**

- [`AGENTS.md`](../../AGENTS.md)
- [`CLAUDE.md`](../../CLAUDE.md)
- [`docs/SPANISHCUE_HANDOFF.md`](../../docs/SPANISHCUE_HANDOFF.md)
- [`docs/conversation-family-authoring.md`](../../docs/conversation-family-authoring.md)
- [`docs/conversation-family-migration.md`](../../docs/conversation-family-migration.md)
- [`docs/superpowers/plans/2026-09-24-conversation-families.md`](../../docs/superpowers/plans/2026-09-24-conversation-families.md)
- [`docs/superpowers/specs/2026-09-24-conversation-families.md`](../../docs/superpowers/specs/2026-09-24-conversation-families.md)
- [`docs/lessons/conversation-family-production-status.md`](../../docs/lessons/conversation-family-production-status.md)
- [`docs/lessons/conversation-batch1-completion.json`](../../docs/lessons/conversation-batch1-completion.json)
- [`archive/grammar-progress.md`](../../archive/grammar-progress.md)
- [`docs/releases/SITES_RELEASE.md`](../../docs/releases/SITES_RELEASE.md)
- [`tests/verbal-system-contract.test.mjs`](../../tests/verbal-system-contract.test.mjs)
- [`tests/verbal-help-contract.test.mjs`](../../tests/verbal-help-contract.test.mjs)
- [`tests/a1-syntax-lessons.test.mjs`](../../tests/a1-syntax-lessons.test.mjs)
- [`tests/a2-time-condition-lessons.test.mjs`](../../tests/a2-time-condition-lessons.test.mjs)
- [`tests/b1-contrast-relative-lessons.test.mjs`](../../tests/b1-contrast-relative-lessons.test.mjs)
- [`tests/b2-hypothesis-concession-lessons.test.mjs`](../../tests/b2-hypothesis-concession-lessons.test.mjs)
- [`tests/library-information-architecture.test.mjs`](../../tests/library-information-architecture.test.mjs)
- [`tests/library-filters.test.mjs`](../../tests/library-filters.test.mjs)
- [`tests/teaching-guides-seo.test.mjs`](../../tests/teaching-guides-seo.test.mjs)
- [`package.json`](../../package.json)
- [`scripts/test-worker.mjs`](../../scripts/test-worker.mjs)

**External primary references** — checked 2026-09-28 Asia/Saigon / 2026-09-27 UTC; used as guidance, not certification.

- [CEFR global scale](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale)
- [CEFR descriptor resources](https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors)
- [PCIC grammar A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_a1-a2.htm)
- [PCIC grammar B1–B2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_b1-b2.htm)
- [PCIC grammar C1–C2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_c1-c2.htm)
- [PCIC pronunciation A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/03_pronunciacion_inventario_a1-a2.htm)
- [PCIC pronunciation B1–B2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/03_pronunciacion_inventario_b1-b2.htm)
- [PCIC pronunciation C1–C2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/03_pronunciacion_inventario_c1-c2.htm)
- [PCIC specific notions A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/09_nociones_especificas_inventario_a1-a2.htm)
- [PCIC functions A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/05_funciones_inventario_a1-a2.htm)
- [PCIC functions C1–C2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/05_funciones_inventario_c1-c2.htm)
- [RAE/ASALE DPD si,1.1a and1.1c](https://www.rae.es/dpd/si)
- [WCAG2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/)
