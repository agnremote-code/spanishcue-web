# SEO 50-Page Expansion Design

Date: 2026-09-24

## Goal

Expand SpanishCue's organic-search surface with 50 additional teacher-intent guides while preserving paid lesson access.

The expansion must increase the number of useful, indexable entry points for Spanish teachers without exposing premium lesson content, creating thin doorway pages, or changing auth, billing, D1, subscription, Paddle, PayPal, or production data behavior.

After this expansion, SpanishCue will have 63 editorial guides total: the existing 13 plus 50 new pages.

## Current state

SpanishCue already has:

- public lesson index pages under `/resources/[slug]`
- 13 editorial guides under `/guides/[slug]`
- automatic guide inclusion in `sitemap.xml`
- Article and BreadcrumbList structured data on guide pages
- guide-to-resource linking
- premium lesson routes protected by the Worker
- Google Search Console connected for `sc-domain:spanishcue.com`

Search Console currently returns no query rows for SpanishCue, so the initial 50-page expansion is based on the actual SpanishCue curriculum and clear teacher search intent. Once impressions accumulate, page titles, sections, internal links, and future topics will be revised using Search Console data.

## SEO principles

1. Each guide targets one distinct teaching intent.
2. Every guide contains original teacher-facing instructional content, not keyword-swapped boilerplate.
3. Every guide links to 1–4 directly relevant public resource pages.
4. Every guide links laterally to 2–4 related guides in the same or adjacent cluster.
5. No Googlebot-only lesson access is introduced.
6. Premium interactive lessons remain protected exactly as they are now.
7. New pages must be useful even if the visitor never subscribes.
8. The project does not rely on the HTML meta-keywords tag for ranking.
9. No guide may be created solely because a keyword variant exists.
10. Pages should answer the teacher's practical question first and sell SpanishCue second.

## Content quality standard

Each new guide should normally contain:

- 800–1,200 words for grammar, conversation, listening, pronunciation, and methodology topics
- 650–1,000 words for narrower beginner vocabulary topics
- a clear teacher-intent H1
- 4–6 substantive H2 sections
- original examples
- at least one concrete classroom sequence, activity pattern, or decision framework
- a common-error, variation, or implementation section where appropriate
- links to 1–4 matching SpanishCue resource pages
- links to 2–4 related guides
- a final CTA to the relevant SpanishCue resource collection

Content may be longer when the search intent genuinely requires it. Word count is a quality floor, not a target to pad.

## Information architecture

Keep the existing public route:

`/guides/[slug]`

Refactor the current monolithic guide data into cluster files while preserving the current external API.

Proposed structure:

- `app/teaching-guides.ts` — small compatibility barrel and aggregate exports
- `app/guides/data/types.ts`
- `app/guides/data/grammar.ts`
- `app/guides/data/conversation.ts`
- `app/guides/data/listening.ts`
- `app/guides/data/pronunciation.ts`
- `app/guides/data/vocabulary.ts`
- `app/guides/data/methodology.ts`

`app/teaching-guides.ts` will continue exporting:

- `teachingGuides`
- `teachingGuideBySlug`
- shared guide types

This prevents unrelated route code from needing a large refactor.

## Guide data additions

Extend the guide model with:

- `cluster`
- `relatedLessonIds`
- `relatedGuideSlugs`

Every related lesson ID must resolve to a current catalog lesson.

## New pages

### Grammar — 24 pages

| # | Slug | H1 / Search intent | Related lesson IDs |
|---|---|---|---|
| 1 | `spanish-present-tense-activities` | Spanish Present Tense Activities for A1 Students | 140, 48, 3 |
| 2 | `spanish-present-perfect-lesson` | How to Teach the Spanish Present Perfect | 141, 18 |
| 3 | `spanish-preterite-activities` | Spanish Preterite Activities for Completed Past Events | 142, 18 |
| 4 | `spanish-imperfect-activities` | Spanish Imperfect Activities for Habits and Background | 143, 18 |
| 5 | `spanish-future-tense-activities` | Spanish Future Tense Activities: Plans, Predictions and Conjecture | 144, 22 |
| 6 | `spanish-conditional-tense-activities` | Spanish Conditional Activities for Hypotheses and Polite Requests | 146, 31, 23 |
| 7 | `spanish-pluperfect-lesson` | How to Teach the Spanish Pluperfect | 147, 18 |
| 8 | `subjunctive-vs-indicative-activities` | Subjunctive vs. Indicative Activities That Make Meaning Visible | 148, 107, 37 |
| 9 | `imperfect-subjunctive-activities` | Spanish Imperfect Subjunctive Activities for Hypothetical Situations | 150, 219, 31, 23 |
| 10 | `past-perfect-subjunctive-activities` | Spanish Past Perfect Subjunctive Activities for Unreal Past Situations | 151, 23 |
| 11 | `spanish-if-clauses-activities` | Spanish If-Clause Activities: Real vs. Hypothetical Conditions | 214, 219, 31, 23 |
| 12 | `aunque-indicative-vs-subjunctive` | Aunque + Indicative or Subjunctive: How to Teach the Difference | 220 |
| 13 | `spanish-relative-clauses-activities` | Spanish Relative Clause Activities with Que, Quien and Donde | 218 |
| 14 | `spanish-conjunctions-activities` | Spanish Conjunction Activities: Y, O, Ni, Pero and More | 211, 217 |
| 15 | `spanish-time-clauses-activities` | Before, After and Cuando: Spanish Time-Clause Activities | 213 |
| 16 | `spanish-sentence-building-activities` | Spanish Sentence-Building Activities for Beginners | 111, 110 |
| 17 | `spanish-adjective-agreement-activities` | Spanish Adjective Agreement Activities That Go Beyond Fill-in-the-Blanks | 41, 112 |
| 18 | `spanish-quantifiers-activities` | Spanish Quantifier Activities: Mucho, Poco, Todo and Demasiado | 45 |
| 19 | `muy-vs-mucho-lesson` | Muy vs. Mucho: How to Teach the Difference | 47 |
| 20 | `spanish-prepositional-verbs-lesson` | Spanish Verbs with Prepositions: A Teaching Framework | 117 |
| 21 | `spanish-verbal-periphrases-activities` | Spanish Verbal Periphrases Activities for Habits, Change and Continuity | 115 |
| 22 | `spanish-noun-gender-plural-activities` | Spanish Noun Gender and Plural Activities for A1 | 40 |
| 23 | `spanish-word-order-activities` | Spanish Word Order Activities Without Robotic Sentences | 113, 111 |
| 24 | `spanish-conditionals-lesson-plan` | Spanish Conditionals Lesson Plan: Zero, First, Second, Third and Mixed | 31, 23, 214, 219 |

These pages complement, rather than duplicate, the existing guides for ser/estar, preterite vs. imperfect, general subjunctive, imperative, pronouns, possessives, demonstratives, and articles.

### Conversation — 10 pages

| # | Slug | H1 / Search intent | Related lesson IDs |
|---|---|---|---|
| 25 | `a1-spanish-speaking-activities` | A1 Spanish Speaking Activities That Beginners Can Actually Do | 15, 120, 121, 27 |
| 26 | `a2-spanish-speaking-activities` | A2 Spanish Speaking Activities for Longer, More Flexible Answers | 14, 17, 21, 123 |
| 27 | `b1-spanish-conversation-activities` | B1 Spanish Conversation Activities for Reasons, Stories and Decisions | 13, 20, 109, 137 |
| 28 | `b2-spanish-speaking-activities` | B2 Spanish Speaking Activities for Nuance, Negotiation and Revision | 124, 125, 127, 209 |
| 29 | `c1-spanish-conversation-activities` | C1 Spanish Conversation Activities for Complex, Spontaneous Discussion | 11, 128 |
| 30 | `c2-spanish-discussion-questions` | C2 Spanish Discussion Questions for Precision, Subtext and Counterargument | 34, 129, 136, 203 |
| 31 | `spanish-role-play-activities` | Spanish Role-Play Activities for Online and In-Person Classes | 19, 120, 121, 122 |
| 32 | `spanish-opinion-activities` | Spanish Opinion Activities That Force Students to Explain and Reconsider | 20, 21, 208, 209 |
| 33 | `spanish-negotiation-activities` | Spanish Negotiation Activities for A2–B2 Learners | 123, 125, 127, 139 |
| 34 | `spanish-storytelling-activities` | Spanish Storytelling Activities for Past Tenses and Extended Speaking | 122, 126, 132, 215 |

### Listening — 5 pages

| # | Slug | H1 / Search intent | Related lesson IDs |
|---|---|---|---|
| 35 | `a1-spanish-listening-activities` | A1 Spanish Listening Activities with Short, Useful Audio | 130 |
| 36 | `a2-spanish-listening-activities` | A2 Spanish Listening Activities for Real-Life Information | 131, 105, 28 |
| 37 | `b1-spanish-listening-activities` | B1 Spanish Listening Activities for Stories, Attitude and Reaction | 132, 28 |
| 38 | `b2-spanish-listening-activities` | B2 Spanish Listening Activities for Testimony, Inference and Repair | 133 |
| 39 | `advanced-spanish-listening-activities` | Advanced Spanish Listening Activities for Subtext, Irony and Ambiguity | 134, 135 |

### Pronunciation — 4 pages

| # | Slug | H1 / Search intent | Related lesson IDs |
|---|---|---|---|
| 40 | `spanish-vowel-pronunciation-activities` | Spanish Vowel Pronunciation Activities for Clearer Speech | 201, 38 |
| 41 | `spanish-word-stress-activities` | Spanish Word Stress and Rhythm Activities | 202, 38 |
| 42 | `spanish-r-pronunciation-lesson` | How to Teach the Spanish R Without Making Students Force It | 38 |
| 43 | `online-spanish-pronunciation-lesson-plan` | An Online Spanish Pronunciation Lesson Plan That Produces Real Change | 38, 201, 202 |

### Vocabulary — 3 pages

| # | Slug | H1 / Search intent | Related lesson IDs |
|---|---|---|---|
| 44 | `beginner-spanish-survival-vocabulary-activities` | Beginner Spanish Survival Vocabulary Activities for Real Situations | 204, 16, 108 |
| 45 | `spanish-vocabulary-games-online` | Spanish Vocabulary Games for Online Classes That Require Retrieval | 108, 204 |
| 46 | `argentine-spanish-vocabulary-activities` | Argentine Spanish Vocabulary Activities for Rioplatense Learners | 16, 39, 3 |

### Methodology — 4 pages

| # | Slug | H1 / Search intent | Related lesson IDs |
|---|---|---|---|
| 47 | `retrieval-practice-language-teaching` | Retrieval Practice in Language Teaching: What Spanish Teachers Can Do Tomorrow | 140, 142, 143, 108 |
| 48 | `spanish-lesson-warm-up-activities` | Spanish Lesson Warm-Up Activities That Diagnose and Activate Language | 15, 14, 17, 109 |
| 49 | `error-correction-spanish-class` | Error Correction in Spanish Class: What to Correct, When and How | 106, 201, 202, 41 |
| 50 | `spanish-homework-ideas-language-learners` | Spanish Homework Ideas That Students Are More Likely to Complete | 108, 140, 142, 145 |

## Related-guide linking

Each guide must define 2–4 `relatedGuideSlugs`.

Examples:

- `spanish-preterite-activities` links to:
  - `spanish-imperfect-activities`
  - existing `preterite-vs-imperfect-activities`
  - `spanish-storytelling-activities`

- `spanish-present-tense-activities` links to:
  - existing `how-to-teach-ser-vs-estar`
  - `spanish-sentence-building-activities`
  - `a1-spanish-speaking-activities`

- `spanish-vowel-pronunciation-activities` links to:
  - `spanish-word-stress-activities`
  - `online-spanish-pronunciation-lesson-plan`
  - existing `psycholinguistics-for-spanish-teachers`

The article renderer should show these links in a "Related teaching guides" block before the final resource CTA.

## Guides hub

Update `/guides` so 63 cards are not rendered as one undifferentiated wall.

The hub should group guides into:

- Grammar
- Conversation
- Listening
- Pronunciation
- Vocabulary
- Teaching methodology

Each cluster gets:

- a short descriptive introduction
- its guide cards
- a link to the relevant SpanishCue collection when available

The current visual language should be preserved. This is an information-architecture improvement, not a brand redesign.

## Sitemap and crawlability

The existing sitemap already derives guide URLs from `teachingGuides`, so all 50 new guides should enter `sitemap.xml` automatically.

Requirements:

- canonical URL on every guide
- `robots: { index: true, follow: true }`
- no guide under an auth-only route
- no guide disallowed by `robots.ts`
- no paid lesson route added directly to the public sitemap beyond existing approved public resource pages

## Structured data

Continue using:

- `Article`
- `BreadcrumbList`

Do not add unsupported or misleading structured-data types.

Guide structured data must match visible page content.

## Resource linking

Each `relatedLessonIds` item must render as a link to the existing public `/resources/[slug]` page through `resourcePathForLesson()`.

Do not link the guide CTA directly to a protected premium lesson route as the primary SEO link.

The public resource page remains the SEO bridge between editorial content and premium lesson access.

## Validation and automated tests

Add tests that fail when:

1. two guides share the same slug
2. two guides share the same exact title
3. a guide has fewer than 4 substantive sections
4. a new guide has no `relatedLessonIds`
5. a related lesson ID does not exist in the current lesson catalog
6. a related-guide slug does not exist
7. a guide links to itself
8. a guide has no inbound guide link after the cluster is assembled
9. the total guide count is not 63
10. sitemap generation omits a guide URL

Content validation should be structural, not a crude word-count-only gate. However, tests may enforce a sensible minimum body-text threshold to catch accidental stubs.

## Implementation batches

To reduce risk and simplify review, implement in five mergeable batches.

### Batch 1 — Grammar fundamentals

Pages 1–12.

Includes verbal-system fundamentals and the major indicative/subjunctive contrasts.

### Batch 2 — Grammar structure

Pages 13–24.

Includes clauses, conjunctions, sentence structure, agreement, quantifiers, word order, periphrases, and conditionals.

### Batch 3 — Conversation

Pages 25–34.

### Batch 4 — Listening, pronunciation, vocabulary

Pages 35–46.

### Batch 5 — Methodology and final cross-linking

Pages 47–50 plus:

- hub grouping
- final related-guide graph
- guide integrity tests
- sitemap count checks
- final 63-guide verification

Every batch must pass the repository's full CI before merge.

## Non-goals

This project does not:

- expose full paid lessons to Googlebot
- change subscription gating
- change Firebase
- change D1
- change billing or payment-provider configuration
- create forum/community functionality
- create user-generated content
- create 50 translated duplicates
- create separate pages for trivial keyword variants
- promise rankings or traffic volume

## Success criteria

The implementation is complete when:

- exactly 50 new unique guide URLs exist
- total editorial guide count is 63
- every new guide is indexable and canonical
- every new guide has useful, unique content
- every new guide links to 1–4 matching public resource pages
- every new guide participates in the internal guide-link graph
- `/guides` is organized by cluster
- all guide URLs appear in `sitemap.xml`
- premium lesson access remains unchanged
- full CI passes after every batch
- Search Console can measure impressions/clicks for the new URLs after Google crawls them

## Post-launch optimization

Once Search Console contains useful query data:

1. identify pages with impressions but low CTR
2. identify pages ranking approximately positions 8–25
3. expand or retitle pages only when the query data shows a real opportunity
4. add new pages only for materially different intents
5. consolidate pages if Google treats two guides as the same intent
6. track organic entrances to `/resources`, pricing, and access pages in GA4

The 50-page launch is the initial content architecture, not a reason to keep expanding indefinitely without evidence.
