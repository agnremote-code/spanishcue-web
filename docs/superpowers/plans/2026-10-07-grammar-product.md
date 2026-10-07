# Grammar classroom implementation plan

> **For agentic workers:** Use superpowers:executing-plans for integration and the independent content authoring brief for the bounded content task. Track completed work in the task ledger.

**Goal:** Make all 51 existing grammar lessons usable in a clear 60-minute live class and add exactly six substantive missing teacher-led lessons.

**Architecture:** Preserve IDs, routes, access and original reference banks. Add a data-driven classroom sequence with eight stages totaling 60 minutes; existing grammatical explanations/practice are adapted, while reading, listening and writing are specifically authored per lesson. Public catalog metadata is separate from server-only lesson bodies. Open responses are evaluated by the teacher against criteria; only objective choices auto-score.

**Tech Stack:** Existing React/TypeScript/Vinext, node:test, esbuild, jsdom; existing build-time Edge neural audio pipeline.

**Spec:** docs/superpowers/specs/2026-10-07-grammar-product.md

## Global Constraints

- Base main: b5a8cad64bbdfffd2c895884ef355f0be8c6f1bb. One task branch codex/grammar-product-20261007.
- Exactly six additions: A2 duration; B1 por/para; B2 passive/impersonal, reported speech, prepositional relatives, consecutive clauses.
- 55–65 minutes, planned as 60, with real Reading, Listening, Speaking and Writing.
- Neutral Spanish/tú; preserve explicitly taught Argentine voseo and all six conjugation persons.
- Grounded adult contexts, no games, no generated filler, no exact-match grading of open comprehension.
- No changes to billing, auth logic, accounts, checkout, D1 or workflows. Preserve overlapping PRs 122/123.
- Keep original URLs, IDs and teaching banks; historic reference tenses stay receptive, never sold as frequent DELE production.
- Media allowlist may add only the two existing free grammar samples; premium grammar recordings remain protected.
- Repository owner authorization covers tests, push, PR, CI auto-merge, exact-SHA production workflow and smoke.

## Review Focus

- Semantic paraphrases must remain ungraded until a teacher reviews them; model answers never trigger string comparison.
- Navigation must preserve typed learner answers, stop stale audio, keep first/last controls bounded and move focus accessibly.
- Clipboard rejection must leave selectable text and an honest error, never false success.
- Public library and free routes must never bundle paid teaching bodies or expose premium audio.
- The old multi-topic hubs require selected scope for 60 minutes; reference banks remain optional without falsely relabeling 110 minutes as 60.

### Task 1: Audit, taxonomy and metadata

Files: docs/audits/grammar-catalog-20261007.json; app/grammar-classroom/catalog.ts; app/lesson-catalog.ts; app/library-filters.mjs; app/Library.tsx; app/page.tsx.

Interface: `grammarTopics` (id/label array), `grammarMetadata` (numeric-ID metadata map). Catalog gets `grammarTopic`; `filterLessons` and `familyLessonsForCategory` accept it.

- [ ] Write and run tests that category/topic/level/search combine, new lessons are exactly six, legacy IDs/routes remain intact.
- [ ] Assign transparent titles and one topic to all 57 lessons. Show one grammar taxonomy, keeping the verbal atlas as a reference link.
- [ ] Verify the filter behavior and catalog integrity; commit with base SHA.

### Task 2: Classroom contract and interaction engine

Files: app/grammar-classroom/types.ts, Classroom.tsx, classroom.css, evaluation.ts; tests/grammar-classroom-ui.test.mjs.

Interface: `ClassroomLesson` contains metadata, warmup, reading, discovery, grammar, practice, listening, speaking, writing and closing; `LessonContext` supplies new contextual materials for existing content.

- [ ] Write real jsdom interaction tests for open-answer review, objective choice feedback, paste retention, navigation and clipboard failure; see them fail.
- [ ] Implement eight sequential accessible stages (4/7/9/9/8/12/8/3 minutes), teacher-only disclosures, actual audio playback, copy prompt, and paste/edit answer boxes.
- [ ] Use no AI/string-match assertion for semantic correctness; teacher marks achieved/developing and sees meaning criteria separately from grammar targets.
- [ ] Verify tests; commit.

### Task 3: Existing lessons and six new lessons

Files: app/grammar-classroom/content/{legacy-contexts,new-lessons}.json; adapters.ts; lessons.ts; existing grammar route pages.

Interface: `getClassroomLesson(id): ClassroomLesson`, `legacyContexts: Record<string,LessonContext>`.

- [ ] Validate every registered lesson has level-appropriate distinct passages, comprehension criteria, oral follow-ups and writing; tests must fail before additions.
- [ ] Author each legacy context against its original scope. Preserve supplementary source data; select a teachable core for long hubs, name omitted advanced parts in teacher scope.
- [ ] Author exactly six new complete original lessons after the recorded audit; keep taxonomy labels independent from bodies.
- [ ] Serve the new sequence on every original grammar route; retain the original reference bank in a clearly optional disclosure.
- [ ] Review all six inputs, answer keys and time budgets; commit.

### Task 4: Recorded audio and verification

Files: scripts/generate-grammar-classroom-audio.py; audio-manifest.json; public/audio/{grammar-classroom,grammar-free}; tests/grammar-classroom-audio.test.mjs; relevant compatibility tests.

- [ ] Generate Spanish-native neural voice assets with transcript hashes and word-boundary provenance; no browser synthesis fallback.
- [ ] Validate all 57 files, duration, signal, uniqueness, synchronization and free/premium separation.
- [ ] Run relevant tests, npm test, lint/typecheck/build/artifact validation; update historical metadata-only preservation checks without weakening unrelated content/access tests.
- [ ] Perform desktop/mobile checks where supported; record any actual environment limitation.
- [ ] Independent editorial/code review, fix concrete findings, commit/push, create non-draft PR, verify CI merge, dispatch canonical exact-SHA production and verify smoke.

## Audit conclusions

51 entries: 17 A1, 9 A2, 10 B1, 9 B2, 5 C1, 1 C2. Nine GrammarWorld lessons have 5 theory stations, 8 closed choices and 3 speaking prompts; 10 phrase labs have 5–7 choices and 10 speaking prompts; eight syntax lessons have 10–12 decisions plus repair/production; 17 verbal lessons have formation/use/contrast, 5 closed choices, 3 transformations and 8 conversation prompts. Seven remaining entries are broad hubs/inline/reference lessons. Recorded listening is absent from these grammar engines. Published duration ranges from 20–30 to 90–110 minutes, plus several 45-minute lessons. Strict token assembly exists, but it is not evidence that open semantic answers currently have an automatic validator.

Duplicate coverage clusters: conditionals 23/31/214/219 and tense lessons; past 18/141–143; subjunctive 37/148–151/155–156; pronouns 46/106. The six additions are gaps in the teacher-led catalog, not claims of absence from Autoestudio. Source references: PCIC A1–A2 15.3.1; PCIC B1–B2 15.3.5, 13.3, 9.1/9.2, 7.2 and 15.3.7; DELE guides for integrated comprehension/production. User requests quality over speed, so content expansion covers existing lessons as well.
