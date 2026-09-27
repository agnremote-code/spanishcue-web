# SPANISHCUE Quality Standard v2

Version: **2.0 · 2026-09-28**. Applies to future lesson creation and explicitly authorized repairs across all five categories. Owner brief: *Quality Standard v2 + Non-conversation Library Audit*. Companion inventory: [non-conversation audit](NON_CONVERSATION_LIBRARY_AUDIT.md); production queue: [next 20 priorities](NEXT_20_LESSON_PRIORITIES.md).

This is the lesson-quality authority for future authoring, subordinate to the owner's task scope and `AGENTS.md` for repository, access and release operations. It does not authorize replacing existing lessons, changing their levels, archiving records or implementing this roadmap. Existing approved content remains authoritative until a bounded repair is authorized. This run adds documentation only; none of these gates has been added to CI.

## 1. The product contract

SPANISHCUE is a teacher-facing library: **CHOOSE. OPEN. TEACH.** A lesson is a designed learning experience that a teacher can use with minimal preparation. Its visual idea must explain, constrain or support the linguistic task. A large bank can support repeated classes, but bank size is not class duration or progression.

**CONSISTENCY ≠ SAMENESS.** Share dependable behavior, clear controls and truthful metadata. Preserve many art directions: editorial, illustrated, realistic 3D, playful, board-game, map, magazine, retro, urban, cinematic, minimal, tactile, paper, physical objects, fantasy and country-specific systems. A noun factory, a radio desk and an editorial debate do not need the same interface.

Reject a proposed experience if its only learner action is opening the next explanation or question. A card can be excellent; an entire lesson of interchangeable cards with no change in linguistic demand is insufficient. Static diagrams are legitimate when described as diagrams. Do not call three text spans a working timeline, a card list an explorable city or a decorative bar strip an audio waveform.

## 2. Required authoring brief, before implementation

Record these decisions in the task's lesson plan/content module or authoring document. Use exact existing IDs/routes for repairs; proposals do not become active inventory records.

| Required decision | Acceptance evidence |
| --- | --- |
| Learner and context | CEFR, target variety/register, prerequisites, teacher/student roles, pair or one-to-one use. |
| Outcome | One observable language action and a final task that demonstrates it. “Understand the subjunctive” is too broad. |
| Curricular boundary | What this lesson teaches, recycles and leaves for later; existing coverage checked by ID. |
| Experience | One coherent situation/visual world and what the student changes, distinguishes, retrieves, negotiates or produces inside it. |
| Progression | A named core path with timing and decreasing support; optional extensions visibly separated. |
| Evidence | Which choices have answers, which permit alternatives, what an acceptable oral response shows, and how feedback helps the next attempt. |
| Content contract | Authored fields and counts by unit, including input, practice, support, final production and teacher guidance. Do not count translations as new tasks. |
| Architecture | Existing matching engine or precise new mechanic; content/renderer boundary; route/state/access and public preview plan. |
| Visual contract | Art direction, reason for images/3D/motion, thumbnail composition, small-screen adaptation. |
| Verification | Content review, interaction/state checks, desktop/mobile evidence, audio checks where relevant, and known limitations. |

Keep this brief operational. Do not fill it with promotional features, invented certification, screen counts or generic teaching theory.

## 3. A usable 45-minute route

Target **approximately 45 minutes of teacher-led use**. A reference tool may honestly be 15–25 minutes; a large reusable bank may offer several 45-minute selections. Label those formats explicitly. Do not stretch a short reference into a full lesson by changing its duration badge.

One possible route is below; it is a planning example, not a compulsory seven-screen template.

| Phase | Example budget | What the learner does |
| --- | ---: | --- |
| Entry / curiosity | 4 min | Makes a prediction, diagnoses a need or chooses a role. |
| Guided discovery / comprehensible input | 7 min | Notices a contrast or extracts meaning before the explanation. |
| Controlled interaction | 7 min | Tries a bounded choice/manipulation and receives explanatory feedback. |
| Meaningful practice | 8 min | Retrieves the target in a changed context. |
| Increased demand | 6 min | Handles a missing detail, constraint, perspective or unexpected response. |
| Freer production | 8 min | Uses the target to achieve an outcome with fewer supports. |
| Memorable closing | 5 min | Revisits an earlier decision, demonstrates transfer and names a next step. |

The plan must identify the exact subset of a large bank used in the core route, a stopping point and optional alternatives. Read the prompts aloud and estimate response/turn-taking time. Count input, thinking, teacher feedback and transitions; a sum of section labels is not validation. A teacher walkthrough should plausibly fit roughly 35–55 minutes without rushing or inventing half the lesson. Report estimates as estimates until classroom use is observed.

Protect substantial learner speaking time. Even phonetics, grammar, vocabulary and listening need a supported oral transfer task. Do not require an essay or long typed justification to unlock a conversation. Short notes or explicit teacher confirmation can support live teaching. Never claim software has evaluated oral quality when the teacher supplies the judgment.

## 4. CEFR and pedagogy

Choose level from **what the learner must do with language, under the actual support conditions**. Vocabulary length, tense rarity, abstract artwork and the presence of a sophisticated topic do not determine CEFR. Specify productive versus receptive targets and the effect of visible models, repetition and teacher mediation.

The following is SPANISHCUE's operational interpretation of the [CEFR global scale](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale), not a certification rubric.

| Level | Core demand | Support and successful closing |
| --- | --- | --- |
| A1 | Exchange concrete personal information and meet basic needs. | Images, models and short turns; complete a small real exchange with help. |
| A2 | Manage familiar routines and simple descriptions, reasons and comparisons. | Useful chunks and predictable contexts; resolve a practical need with short connected turns. |
| B1 | Narrate, explain, solve familiar problems and justify choices. | Selective prompts; sustain an account or agree a workable solution with reasons. |
| B2 | Argue, negotiate and respond to perspectives with spontaneity. | Optional language help; defend and revise a position through substantive interaction. |
| C1 | Manage abstraction, implication, nuance and sophisticated discourse. | Precision prompts; synthesize, qualify or reformulate to suit audience and purpose. |
| C2 | Control implicit meaning, fine distinctions and competing readings precisely. | Minimal linguistic support; reconcile interpretations and express a defensible, exact formulation. |

PCIC supplies Spanish-specific curricular guidance. Cite the actual inventory section and level band relevant to the target. A PCIC section heading is not proof that all its subitems have been taught. Grammar can legitimately recur with different functions across levels; a single tense does not make every use suitable for beginners. Historical forms belong in labelled receptive/reference work, not as a substitute for advanced communicative ability.

### Observable teaching requirements

| Principle | Required authoring behavior |
| --- | --- |
| Scaffolding | Supply usable words/chunks, an example and a help route at the point of difficulty; let the learner attempt before revealing. Reduce or vary support later. |
| Progression | Change demand, not just item number: recognition → retrieval → choice for meaning → production/transfer. State the reason for any different sequence. |
| Repetition | Revisit the same target with a new purpose, interlocutor or context. Do not reskin the same question dozens of times. |
| Retrieval | Include at least one later opportunity to recall a previously used target without the full answer visible. Mark optional hints. |
| Interleaving | Mix a new target with relevant previously known material after initial practice; do not introduce several unfamiliar systems simultaneously. |
| Production | Require an outcome: find an object, repair an exchange, tell an account, advise, reconstruct, negotiate or refine a claim. |
| Meaningful choices | Options change reference, time, intention, interpretation or consequences. Cosmetic theme choices are not language practice. |
| Vocabulary support | Separate essential active chunks from optional recognition vocabulary; make glosses concise and hideable. |
| Teacher role | Provide a core path, expected difficulty, accepted alternatives, feedback focus, optional follow-up and closure criterion. Keep these out of the student's main reading path. |
| Student autonomy | Show the next useful action, allow help/replay/retry, and make progress understandable. Teacher mediation may be intentional; advertise it. |
| Error tolerance | Explain meaning/form differences; preserve attempts; allow justified alternatives and regional forms. Do not punish unfamiliar yet valid Spanish. |
| Closing | Return to the opening purpose using lesson evidence. Include a short oral demonstration and a concrete self/teacher observation. |

## 5. Visual and interaction rules

These are product requirements, not a single visual template. Values below are SPANISHCUE design targets; accessibility checks also use [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/).

| Surface | Operational standard |
| --- | --- |
| Hierarchy | One primary task/action per active work area. Separate student task, optional help and teacher tools. The title, current instruction and response area must be visible without competing decoration. |
| Typography | Body text normally at least 16px, comfortably readable at shared-screen size; use a larger presentation mode where needed. Keep long reading lines approximately 45–75 characters. Small metadata must never carry essential instructions. Use a restrained, readable type system suited to the art direction. |
| Spacing | Choose a small spacing scale and use it consistently inside the lesson. Leave space around controls and between unrelated tasks. Avoid empty full screens that repeatedly require scrolling to find one sentence. |
| Density | Show enough context to decide, with answers/support disclosed separately. A comparison can need several panels; a single speaking prompt usually does not need a dashboard. Do not hide indispensable context to achieve a minimal appearance. |
| Responsive layout | Verify 320/390px widths, a tablet and a normal desktop/shared-screen view. No page-level horizontal overflow; boards/maps may have intentional bounded pan with an equally usable list/linear route. Do not merely shrink desktop text. |
| Touch | Aim for at least 44×44 CSS-pixel primary targets with separation. This is the project target, stricter than WCAG 2.2's 24px target-size baseline with exceptions. Every drag/hover task needs a tap/click and keyboard alternative. |
| Mobile | Keep audio, current prompt and response controls usable together. Fixed headers/toolbars must not cover focused fields or the final action. Test long Spanish text, zoom and on-screen keyboard behavior. |
| Contrast | Check actual foreground/background combinations: normal text 4.5:1; large text and essential non-text UI 3:1 where WCAG applies. Do not use color alone for level, answer status, speakers or roles. Images under text need a readable surface. |
| Header | Show title, category/level, return route and concise current-stage context. Avoid oversized repeated covers inside each activity. A range badge must describe the actual scope, not imply unimplemented variants. |
| Progress | Name what is measured: visited, answered, teacher-confirmed or completed. Scrolling, clicks and audio-ended events do not prove mastery. Let teachers revisit without destroying earned progress. |
| Help/support | Place optional hints close to the task; keep answers closed until requested. Give plain labels such as “Ejemplo” or “Ayuda”. Do not repeat the entire method on every screen. |
| Teacher controls | Clearly separate solutions, timing, selection and reset from learner choices. Permit a labelled override for guided teaching; never falsify completion evidence. State what a reset clears. |
| Modals | Use only for bounded focus, not the entire lesson. Provide an accessible name, close control, Escape, focus management and focus return; no hidden scroll traps. |
| Cards | Each card has a task role: evidence, object, speaker, choice or retrieval cue. Distinguish reveal from answer. Avoid repeated three-column grids as the default architecture. |
| Maps and boards | Spatial placement, paths or adjacency must support choice or reasoning. Use meaningful labels, position/state feedback and keyboard/list alternatives. A decorative map may accompany a linear route, but describe it honestly. |
| Scenes and objects | Hotspots expose relevant information or enable a consequence. Preserve context after opening a hotspot. Use stable object IDs; two objects with the same visible word may still be different objects. |
| Images | Check language, factual details, relevance, crop and legibility. Supply useful alt text when the image conveys information; decorative images should not flood assistive output. Never encode the only clue in inaccessible art. |
| Animation | Motion should explain change, direct attention or provide feedback. Respect reduced-motion settings, allow stopping persistent motion, avoid flashing, and never make speed a hidden proficiency test. |
| 3D | Use depth, placement, rotation or physical relation when it teaches the target or improves orientation. A generated 3D illustration is an illustration; do not advertise a 3D manipulation engine that does not exist. No mandatory WebGL/large effects for decorative value alone. |
| Feedback | Describe why a choice works and what to try next. For interpretation, compare evidence and permit multiple defensible answers. No fake “AI score”, applause loops or celebration after mere navigation. |
| Closing screen | Show the learner's actual choices/artifact where relevant, an oral transfer instruction and a useful next step. No fabricated changed opinion, mastery percentage or generic motivational paragraph. |

Use semantic HTML, visible focus, labelled controls and sensible reading order. Scope keyboard shortcuts to the active component; do not hijack arrow keys while the user edits a field. Feedback/status updates should be announced without moving focus unexpectedly. Accommodations may expose transcripts or replace an oral assessment route; label the altered task rather than blocking access.

### Actively reject the “AI template” look

During design review, name the purpose of every prominent visual treatment. Remove or redesign a treatment that has no task, navigation or world-building purpose:

- stacked gradients, context-free neon purple/blue and glass cards on every surface;
- floating icons/emoji used as a substitute for a coherent visual vocabulary;
- identical rounded rectangles and three-column feature grids across unrelated lessons;
- generic “premium dashboard” metrics, invented badges and progress theatrics;
- decorative 3D, persistent motion or ornate backgrounds that compete with reading;
- motivational filler, long fake feature lists and excessive explanatory microcopy;
- dozens of screens whose only change is a new question inside the same box.

A restrained gradient, rounded card, emoji or static illustration is not automatically a defect. Reject the unmotivated repeated pattern, not a particular color or technology.

## 6. Category standards

### 6.1 Gramática

The preferred learning arc is **notice → contrast → manipulate → choose → produce → communicate**. A rule followed by twenty blanks and a final quiz does not satisfy the standard by itself.

1. Define a bounded form/function target and prerequisites. Introduce regular patterns before irregular complexity where appropriate. Contextualize every example.
2. Separate form, meaning and use visually. An arrangement change must actually change the example or interpretation. If the visual is static, call it an illustration and provide the meaningful action elsewhere.
3. Offer controlled retrieval before freer production. Mix plausible alternatives that require understanding; avoid nonsense distractors that let learners ignore the target.
4. Reconstruct every completed sentence from the actual rendered prompt and chosen option. Check contractions, duplicated prepositions/articles, negation, punctuation, person agreement and all accepted alternatives.
5. Review regional variants and norm claims against appropriate primary references. A preferred teaching model is not the only grammatical form. Mark receptive, historical and register restrictions accurately.
6. End with a speaking/use outcome and teacher criteria. A translation list or conjugation table alone is a reference, not a complete experience.

**Preserve routes BY MOOD and BY TENSE.** `app/verbal-system/SystemHub.tsx` offers both views over the same canonical lessons; do not duplicate IDs/routes for the second view. Keep Indicativo, Subjuntivo and Imperativo coherent, and distinguish mood, grammatical tense, temporal interpretation and productive status. The conditional's catalog position must not imply that every conditional denotes future time.

Teach one tense/system at a time when introducing form; compare known systems in a later contrast task. Do not clone every grammar topic across A1–C2. Progress is curricular and communicative. A broad overview can remain an overview with a clearly selected core route.

### 6.2 Conversación

Retain the architecture and compatibility rules in [conversation-family authoring](../conversation-family-authoring.md). A family may span A1–C2 only if the same scenario/universe supports a genuine shift in communicative demand. **New level ≠ synonym rewrite.** Do not merge different worlds because both involve travel, food or decisions.

Lessons from the preserved [Batch 1 completion](conversation-batch1-completion.json):

- Keep original banks, routes, IDs, thumbnails and defaults verifiably intact; content fingerprints and route matrices proved useful across four runs.
- Separate public summaries from protected content banks. A level query selects authored content; it never grants access.
- Make the change in demand concrete: supported A1 exchange; sustained B2 comparison/negotiation; C1 qualification; C2 competing readings and precise reformulation. C1 also reformulates; C2 needs a stronger sustained demand, not an exclusive claim to that verb.
- Use a shared world/renderer when it fits, with authored tasks, support, teacher guidance and closing at each level. Reuse mechanics without flattening the experience.
- Key state by family and level. Changing evidence/law/proposition must clear dependent answers; returning to completed steps should not erase valid progress.
- Finales must draw on actual learner decisions. Never invent a changed vote or demand an opinion shift to finish.
- Large banks need a selected 45-minute route. Batch 1's 708 new principal items are a library quantity, not 708 required actions in one class.
- Source tests and image inspection do not establish browser readiness. Batch 1's recorded interactive QA remains pending; this standard does not retroactively mark it passed.

### 6.3 Fonética

Phonetics must be **oral**: hear/discriminate → notice → adjust → repeat → produce → reuse spontaneously. A spelling quiz or text-heavy articulation lecture cannot be the principal experience.

- Specify one main perceptual/production target and the target variety. Provide an audible model or explicitly identify teacher-modelled delivery. Do not advertise embedded audio when none exists.
- Use short sound contrasts, meaningful words and phrases. Include a listen-first discrimination attempt; written forms may follow. Track perception separately from production.
- Where articulation guidance helps, use accurate mouth/tongue/lip placement, air and voicing cues. An image of a laboratory is not an articulatory model. Avoid strain, exaggerated force or promises to remove a person's accent.
- Progress from controlled syllables/words to a brief spontaneous reuse task. Judge intelligibility and target control with a teacher rubric; do not invent pronunciation scoring.
- For a 45-minute core, select a compact set of contrasts with repeated listening/production and transfer. Do not rush through the entire Spanish sound system.

Coverage planning must distinguish vowel stability; syllable structure and stress; rhythm and phrasing; tap/trill /ɾ/–/r/; y/ll realizations for the chosen variety; /s/ variation; jota /x/ and its variants; b/v spelling versus the shared phoneme in standard Spanish; context-sensitive d weakening; linking/resyllabification; intonation; and intentional regional modules including Rioplatense speech. A dialect feature is not an error merely because another region differs. Do not teach “all syllables have equal duration” as a literal rule.

### 6.4 Escucha

Design a purpose for listening: **prediction → global meaning → selective listening → detail → inference/reconstruction → response → spoken follow-up**. Select the stages appropriate to the level and audio; do not add unanswerable inference questions to A1 simply to fill the sequence.

- Record audio type, speakers, topic, claimed variety, measured clip duration, pace/support and intended level. Source transcripts cannot verify actual accent, naturalness, recording quality or speaker distinction.
- Listen to every released clip; verify the transcript and each answer against the sound. Identify the evidence time span. If a question depends on a pause, background sound or tone, that cue must actually be audible and not supplied only by explanatory text.
- Let first listening establish meaning before learner transcript exposure. Keep transcript/replay available as an intentional support or accommodation; distinguish teacher access from learner timing.
- Make repeated listening purposeful: a new question or evidence search, not an identical pass to satisfy a counter. Seeking or an `ended` callback is not proof of comprehension.
- Vary audio forms over the curriculum: messages, announcements, exchanges, calls, stories, interviews and longer arguments. Plan speaker/variety diversity intentionally and verify it by ear. Do not label all Latin American speech as one accent.
- Use realistic missing information, conflicting accounts or response tasks where level-appropriate. If several solutions fit the supplied evidence, accept alternatives or add the needed constraint.
- End with reconstruction, a spoken reply, clarification, retelling or synthesis. Keep the audio evidence relevant to that response.

An audio UI must offer accessible play/pause/replay, seek where appropriate, loading/error state and clear speaker/clip identity. A decorative waveform must not be sold as signal analysis. Speed controls must not be the only adaptation between levels. No autoplay or transcript-first dependency masquerading as listening.

### 6.5 Vocabulario

Design **meaning → recognition → retrieval → combinations/collocations → categorization → choice → production**. A word list with attractive cards is a reference bank until it includes purposeful use and recall.

- Define a bounded semantic/pragmatic context. State essential productive chunks separately from useful recognition vocabulary.
- Teach combinations and use: articles where useful, common partners, situations, politeness and register. Avoid isolated translations as the only cue.
- Recycle target items after intervening material; offer a later no-answer-visible recall. Distinguish “saved” and “viewed” from “learned”.
- Use categorization, selection or matching only if the relation matters. Ensure items are uniquely identifiable even when visible words repeat.
- Introduce regional/slang content with use conditions and neutral alternatives. Do not expose beginners to sensitive/informal terms without register/context guidance or assume slang always implies an advanced CEFR level.
- Conclude with a short exchange/decision/story that uses selected target chunks naturally. Do not demand all bank words in one contrived paragraph.
- A saved-word bank can be reusable infrastructure; each lesson still needs its own core route and oral goal. Do not promise spaced repetition unless scheduling/retrieval logic actually exists.

## 7. Architecture and content integrity

Use the real repository contracts:

| Contract | Required behavior |
| --- | --- |
| Ledger and projection | `app/lesson-catalog.ts` owns numeric records/routes and curricular order. `catalogLessons` consolidates conversation only. Do not replace the ledger with a deduplicated display list. |
| Collection | Preserve explicit collection fields; distinguish a UI filter/group such as Sistema verbal from a stored collection. A country-themed lexical module need not be a conversation country family. |
| Level | Store primary CEFR, advertised scope and actual authored variants separately. Never count a range label as multiple banks. |
| Routes and previews | Keep IDs, old links, defaults, resource slugs, locale behavior and favorites/plans compatibility. Ensure a new public description exactly matches implemented tasks and volume. |
| Reuse | Reuse specialized mechanics only when the data/task contract fits. Extract a bounded component from proven bespoke logic when useful. Do not build a mega-engine with flags for every category. |
| State | Use stable item IDs. Separate lessons/levels; define reload, revisit, retry, reset and finalization behavior. Invalidate notes when their underlying context changes. |
| Access | Read the existing FREE/PRO ledger; preserve protection and public/private import boundaries. Neither query parameters nor UI state decide entitlement. |
| Assets | Preserve approved originals; new art needs source/provenance and a correct bound path. Check missing files, dimensions and actual catalog/lesson crop. |
| Language | Primarily Spanish; bilingual grammar support at A1–A2 when useful. Natural concise instructions consistent with the current locale strategy. Intentional voseo/regional instruction must be identified and consistent. |
| Source integrity | Use file-native edits and valid encodings. Never paste truncated terminal output as source. Detect truncation warnings, ellipsis placeholders and missing bank tails before commit. |

The governing source/publication instructions remain `AGENTS.md`, `CLAUDE.md`, [Sites release authority](../releases/SITES_RELEASE.md) and applicable release runbooks. This quality document creates no new deployer, entitlement rule or exception to protected-system boundaries.

## 8. Pre-publication gate

Every future lesson/repair records **pass / fail / pending / not applicable with reason** for each gate. A source-complete checkpoint can be pushed with pending visual/audio checks, but must not be labelled ready for publication. Tests alone cannot approve pedagogical or aesthetic quality.

| Gate | Required evidence | Reject / hold condition |
| --- | --- | --- |
| Pedagogy | Outcome, core route, learner actions, support reduction and transfer. | Passive next/reveal sequence is the complete experience; filler substitutes for practice; final oral task absent without an explicit accommodation. |
| CEFR / PCIC | Communicative-demand review and appropriate curricular references; productive/receptive status. | Level supported only by rare words/tense names; mandatory demand clearly exceeds available support; fake level variants. |
| Originality | Whole-bank review and exact/normalized duplicate report, with legitimate repetitions explained. | Recycled bank or synonym substitutions advertised as a new experience. A flagged match is reviewed, not automatically deleted. |
| Visual design | Screenshots of entry, working task, feedback/help and close; actual asset inspection. | Decorative complexity blocks use; visual/mechanic promise unimplemented; unrelated generic skin substitutes for a designed experience. |
| Interaction | Exercise real handlers, success/error/retry and meaningful choices. | “Interactive” control is inert; score/progress measures a different claim; invalid context retains old responses. |
| Mobile | Narrow viewport, touch alternatives, long content, scrolling and focus evidence. | Clipped instructions/actions, unintended document overflow, drag/hover-only required task. |
| Accessibility | Keyboard walkthrough, labels/focus, contrast, reduced motion and audio/transcript accommodations. | Keyboard dead end, inaccessible essential clue, missing accessible name or unreadable required text. |
| Content correctness | Every authored item reviewed in rendered context; answer/rationale and references checked. | Invalid accepted sentence, valid alternative rejected without explanation, contradictory evidence/timeline, missing required clue. |
| Language / register | Spanish review, consistent treatment, regional/register labels and natural prompts. | Unintended language mixing, ambiguous instruction or unsupported norm claim changes the answer. |
| Audio | Every clip played; transcript/cue/answer concordance and file duration verified. | Missing/broken audio, claimed cue absent, wrong speaker/clip mapping or unverified accent claims used as facts. |
| State / routing | Old and new URLs, defaults, history, resets, persistence and access boundaries checked as relevant. | Lost historical route/content, cross-level state leakage, broken resource link or weakened protection. |
| Tests | Relevant executable tests plus schema/count/reference checks, with actual commands/results. | Necessary regression absent; test exists but is not runnable/reached; unresolved introduced failure. Never use a D1-mutating harness when the task forbids D1. |
| Thumbnail | Correct existing/new file, relevant visual promise, readable crop at catalog size, provenance for new art. | Missing/wrong path, unreadable essential art text, misleading scene or unauthorized overwrite. |
| Teacher usability | Clear core selection, timing, answers/alternatives, help, skip/revisit/reset and stopping point. | Teacher must invent missing stages or cannot find/override a support safely. |
| Duration | Honest selected route and timed walkthrough/heuristic, labelled with confidence. | “45 min” inferred solely from item count or hardcoded section totals; advertised scope cannot fit the core route. |
| Final production | Actual oral outcome using the lesson's targets/evidence, with simple observation criteria. | Generic congratulations/homework stands in for closure, or fabricated learner decisions. |

No publishing until required gates pass. Follow the repository's authorized release workflow after the owner authorizes that step; passing this checklist is not deployment authorization. If browser or audio QA is unavailable, record exactly what was checked and leave the relevant gate pending. Do not deploy a branch to obtain a preview.

## 9. Enforcement plan, not implemented CI

| Can be automated | Requires teacher / content / visual review |
| --- | --- |
| Schema/types, unique IDs, valid options and answer indexes; route/asset references. | Whether choices genuinely test meaning; whether all defensible answers are accepted. |
| Declared versus actual counts; required support/finale fields; duplicate and fixed-answer-position warnings. | Communicative level, originality beyond exact strings, progression and depth. |
| Assemble chosen options into completed sentences for inspection; flag repeated tokens and suspicious placeholders. | Grammar/naturalness/register and why a construction is acceptable in context. |
| Bank hashes for preserved content; changed-file allowlist; legacy defaults/access/import contracts. | Whether an authorized repair preserves the original learning purpose. |
| Handler/state regressions, reset invalidation, score bounds and stable keys. | Real classroom flow and teacher usability. |
| Media existence/format/duration; thumbnail dimensions/path; audio/transcript item-ID mapping. | Listen to every audio, verify accents/cues/transcripts and inspect every new image. |
| Overflow/focus/axe-style checks and screenshot capture when a permitted browser exists. | Actual reading comfort, interaction on mobile, art direction, crop and meaningful alternative access. |
| Summed timing and estimated response/replay time as warning heuristics. | Credible 45-minute selection, learner speaking time and pilot-class feedback. |

Suggested rollout for a later authorized task: add an authoring checklist/template; pilot schema/count and state checks on 2–4 lessons; wire relevant existing suites into the actual runner; then add screenshot/mobile evidence and audio review records. Measure false positives before making heuristic warnings blocking. Do not expand CI or alter application code during this audit.

A future Work agent must finish with exact changed lesson IDs, content counts, preserved originals, checks actually executed, pending gates, commit SHA and pushed branch. Work in 2–4-lesson production or substantial-repair batches, preserve checkpoints on GitHub, and stop at the authorized scope. Read the current inventory before proposing another lesson on an already-covered topic.

## 10. Reference use and limits

The operational rules above are SPANISHCUE editorial decisions informed by the owner's brief, actual source findings and these primary references, checked 2026-09-28 in Asia/Saigon (2026-09-27 UTC). They do not claim formal CEFR/PCIC certification or WCAG certification of the existing library.

- [Council of Europe, CEFR global scale](https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale) and [descriptor resources](https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors).
- PCIC grammar inventories: [A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_a1-a2.htm), [B1–B2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_b1-b2.htm), [C1–C2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_c1-c2.htm).
- [PCIC pronunciation and prosody A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/03_pronunciacion_inventario_a1-a2.htm) and [specific notions A1–A2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/09_nociones_especificas_inventario_a1-a2.htm).
- [RAE/ASALE, DPD: si](https://www.rae.es/dpd/si), sections 1.1a and 1.1c, supports checking accepted conditional alternatives rather than declaring one preferred model uniquely grammatical.
- [W3C WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/), used for the accessibility thresholds and review categories above.
