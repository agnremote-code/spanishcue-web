# SEO Tutor/Business 50-Page Expansion Design

Date: 2026-09-24

## Goal

Add a second set of 50 high-quality organic-search guides aimed at people who already teach Spanish online, are starting to teach Spanish online, or are building a tutoring business.

This expansion is intentionally different from the teaching-methodology and lesson-topic cluster. It targets commercial and operational intent around:

- Preply
- italki
- Verbling
- Superprof
- AmazingTalker
- tutor profiles and trial lessons
- pricing and hourly rates
- conversion and retention
- schedules, cancellations and rescheduling
- lesson-prep efficiency
- tutoring niches such as travel Spanish, business Spanish, DELE preparation, pronunciation and Rioplatense Spanish

The objective is to attract the exact user SpanishCue is built for: a Spanish tutor who needs to teach better while spending less time preparing materials.

If both approved 50-page expansions are eventually implemented, SpanishCue will have:

- 13 existing guides
- 50 teaching/topic guides
- 50 tutor/business guides
- 113 editorial guides total

This specification is independent of the implementation order of the first 50-page expansion. It must remain mergeable whether the teaching/topic expansion lands before or after it.

## Positioning

SpanishCue must not become a generic blog about tutoring platforms.

The content architecture should keep the product promise visible:

> Teach Spanish better, prepare less, and build a tutoring workflow that is sustainable.

Platform articles are acquisition pages. They should lead naturally from a tutor's current problem to concrete teaching systems and SpanishCue resources.

Examples:

- "How to structure a Preply trial lesson" → sample lesson flow → matching SpanishCue A1/A2 resources
- "How much should an online Spanish tutor charge?" → effective hourly-rate calculation → reduce unpaid prep → SpanishCue
- "How to retain Spanish students" → lesson continuity and visible progression → reusable SpanishCue lesson sequences
- "How to teach Spanish for travel" → offer positioning → sample lesson sequence → travel-ready SpanishCue resources

## Search and quality strategy

### Principle 1: one page, one materially distinct intent

Do not create pages solely because a keyword can be reworded.

Examples of distinct intent:

- Preply headline
- Preply profile description
- Preply trial structure
- Preply price strategy

These solve different tutor problems.

Examples that should normally remain one page rather than split:

- "Preply tutor bio"
- "Preply tutor about me"
- "Preply tutor description"

These are the same core intent and belong in one authoritative guide.

### Principle 2: platform pages separate facts from advice

Platform-specific content must distinguish:

1. current documented platform facts
2. SpanishCue's teaching/business recommendations

A sentence such as "Preply currently charges..." is a platform fact and requires a current official source.

A sentence such as "Use the first five minutes to clarify the student's outcome" is editorial guidance and should be presented as SpanishCue's recommendation, not attributed to the platform unless the platform explicitly says it.

### Principle 3: platform facts have freshness controls

Every platform guide must support:

- `platform`
- `lastReviewed`
- `officialSources`

Visible UI should show a quiet note such as:

> Platform information reviewed September 2026.

Do not show a fake "updated today" date.

### Principle 4: no unsupported volatile claims

Do not publish current claims about any platform's:

- commission
- teacher acceptance requirements
- trial pricing
- teacher ranking algorithm
- payout timing
- subscription mechanics
- cancellation policy
- application availability
- badges/status criteria

unless a current first-party source supports the claim.

If an official current source cannot be found, the article may still exist, but the volatile section must be omitted or framed as general tutoring advice.

### Principle 5: each page must be independently useful

A visitor should get a complete answer even if they never subscribe.

The CTA should follow useful content rather than replace it.

## Current first-party source baseline

These sources are approved starting points as of 2026-09-24. They must still be rechecked when platform facts are implemented or later refreshed.

### Preply

Commission:
https://help.preply.com/en/articles/4171383-preply-commission-model

Trial format:
https://help.preply.com/en/articles/4179487-how-to-book-a-trial-lesson

Super Tutor:
https://help.preply.com/en/articles/6359318-the-super-tutor-program

Super Tutor metrics:
https://help.preply.com/en/articles/14880665-how-super-tutor-metrics-and-criteria-work

Profile headline and description:
https://help.preply.com/en/articles/4175164-4-profile-headline-and-description-guidelines

Profile score:
https://help.preply.com/en/articles/7863157-what-is-profile-score

Video introduction:
https://help.preply.com/en/articles/4171392-5-video-introduction-guidelines

Price selection:
https://help.preply.com/en/articles/11833566-7-how-to-choose-the-right-price

Availability:
https://help.preply.com/en/articles/4175356-6-setting-up-your-availability

Tutor discovery:
https://help.preply.com/en/articles/4178879-how-can-students-find-me

### Verbling

Teacher application:
https://www.verbling.com/teach

New teacher overview:
https://support.verbling.com/hc/en-us/articles/360007886158-NEW-TEACHERS-How-does-Verbling-work-and-what-should-I-know

Teacher application video:
https://support.verbling.com/hc/en-us/articles/360007839257-How-do-I-record-my-teacher-application-video

### Superprof

Tutor overview:
https://www.superprof.com/tutor/

Tutor payments:
https://www.superprof.com/help/tutors/tutor-payment/how-to-get-paid/68/

### italki

At spec-writing time, no sufficiently current indexed first-party teacher documentation was retrieved through the available search path.

Therefore:

- italki pages are allowed
- evergreen teaching/profile/business advice is allowed
- current fee, commission, application, package, ranking or policy claims are NOT allowed until a current first-party italki source is verified
- no third-party blog may substitute for an official source when the claim is about current platform rules

### AmazingTalker

An official teacher-application surface exists, but implementation must verify a current Spanish-teacher-specific or platform-general first-party page before making factual claims about acceptance, fees, ranking or payouts.

If verification is weak, keep the guide evergreen and avoid volatile facts.

## Proposed information architecture

Keep the public route:

`/guides/[slug]`

The guide data architecture should eventually support two top-level pillars:

### Teach Spanish

- Grammar
- Conversation
- Listening
- Pronunciation
- Vocabulary
- Teaching methodology

### Grow as a Spanish Tutor

- Preply
- italki
- Other platforms
- Pricing & business
- Operations & retention
- Tutor niches

The `/guides` hub should let visitors understand these two pillars immediately rather than rendering 100+ cards in one undifferentiated wall.

This specification does not require a brand redesign.

## Guide data model

Extend the shared guide model so business/platform content can express source and freshness metadata without hard-coding it in route components.

Suggested additions:

```ts
type GuidePillar = "teach-spanish" | "tutor-business";

type GuideCluster =
  | "grammar"
  | "conversation"
  | "listening"
  | "pronunciation"
  | "vocabulary"
  | "methodology"
  | "preply"
  | "italki"
  | "other-platforms"
  | "pricing-business"
  | "operations-retention"
  | "tutor-niches";

type GuideOfficialSource = {
  label: string;
  url: string;
};

type TeachingGuide = {
  // existing fields...
  pillar: GuidePillar;
  cluster: GuideCluster;
  relatedLessonIds?: number[];
  relatedGuideSlugs?: string[];
  platform?: "Preply" | "italki" | "Verbling" | "Superprof" | "AmazingTalker";
  lastReviewed?: string;
  officialSources?: GuideOfficialSource[];
};
```

Rules:

- `platform` requires `lastReviewed`
- pages with volatile platform facts require at least one `officialSources` entry
- `lastReviewed` is not an automatic publication date
- source links should be visible in a compact "Platform sources" section when platform facts are present
- platform pages should include an independence note: SpanishCue is not affiliated with the named platform

## Content templates by intent

These are editorial structures, not rigid identical templates.

### Platform profile/article pages

Typical sections:

1. what the user is trying to achieve
2. what the platform currently documents
3. how this applies specifically to a Spanish tutor
4. examples
5. mistakes to avoid
6. practical checklist
7. relevant SpanishCue resources

### Trial/conversion pages

Typical sections:

1. what the trial must accomplish
2. before the trial
3. first minutes
4. diagnostic
5. sample teaching
6. learning-plan handoff
7. post-trial follow-up
8. relevant SpanishCue resources

### Pricing/business pages

Typical sections:

1. define the business problem
2. gross vs. net rate
3. unpaid time
4. utilization / booked hours
5. worked example
6. decision framework
7. when to review the number
8. SpanishCue as prep-time leverage where relevant

### Operations pages

Typical sections:

1. operational problem
2. policy or scheduling framework
3. examples
4. edge cases
5. communication approach
6. workflow checklist
7. relevant resources

### Tutor-niche pages

Typical sections:

1. who the niche serves
2. needs diagnosis
3. offer design
4. sample lesson progression
5. materials strategy
6. common mistakes
7. relevant SpanishCue resources

## Content quality floor

Platform and business guides should normally contain 900–1,500 words.

Narrower operational pages may be 750–1,200 words if the intent is fully answered.

Every page must include:

- unique H1
- unique meta title and description
- 4–7 substantive sections
- at least one specific example, framework, calculation, script pattern, lesson sequence or checklist
- at least one Spanish-teacher-specific section
- 1–4 related SpanishCue resource links
- 2–4 related editorial guides
- final CTA appropriate to the intent

Avoid:

- generic motivational filler
- identical intros
- "10 tips" pages where each tip is one sentence
- invented statistics
- fake case studies
- fake testimonials
- presenting anecdotal marketplace advice as platform rules
- claiming that any tactic guarantees ranking, conversion, Super Tutor status, students or income

## Exact 50-page set

### Preply — 14 pages

| # | Slug | H1 / primary intent | Related lesson IDs |
|---|---|---|---|
| 1 | `teach-spanish-on-preply` | How to Teach Spanish on Preply: A Practical Guide for Tutors | 15, 14, 18, 108 |
| 2 | `preply-spanish-tutor-profile` | How to Build a Spanish Tutor Profile on Preply | 15, 14, 137 |
| 3 | `preply-headline-spanish-tutor` | Preply Headline Ideas for Spanish Tutors | 15, 14, 16 |
| 4 | `preply-description-spanish-tutor` | How to Write a Preply Description as a Spanish Tutor | 15, 14, 137 |
| 5 | `preply-introduction-video-spanish-tutor` | Preply Introduction Video for Spanish Tutors: What to Say and Show | 201, 202, 15 |
| 6 | `preply-trial-lesson-spanish` | How to Structure a Preply Trial Lesson for Spanish Students | 15, 14, 121, 130 |
| 7 | `preply-25-vs-50-minute-trial` | 25 vs. 50 Minute Preply Trial: How Spanish Tutors Can Use Each Format | 15, 121, 14 |
| 8 | `preply-trial-to-subscription-spanish` | Preply Trial-to-Subscription Conversion for Spanish Tutors | 15, 14, 121, 137 |
| 9 | `preply-super-tutor-spanish-teachers` | The Preply Super Tutor System for Spanish Teachers | 15, 14, 137, 138 |
| 10 | `preply-pre-trial-message-spanish` | What to Message a Spanish Student Before a Preply Trial | 15, 14, 130 |
| 11 | `preply-post-trial-message-spanish` | What to Send After a Preply Trial Lesson | 15, 14, 121 |
| 12 | `preply-pricing-spanish-tutor` | How to Price Spanish Lessons on Preply | 15, 18, 108 |
| 13 | `preply-raise-hourly-rate` | How to Raise Your Preply Price as a Spanish Tutor | 15, 18, 108 |
| 14 | `preply-student-retention-spanish` | How to Retain Spanish Students on Preply | 137, 138, 208, 215 |

#### Preply editorial requirements

Pages 1–14 may use current first-party Preply facts only when sourced.

Specific requirements:

- pages 1, 6, 7, 8, 10 and 11 should verify current trial mechanics
- pages 8 and 9 must verify current Super Tutor conversion/engagement criteria before publishing numbers
- page 12 must verify current commission rules before performing take-home examples
- pages 2–5 must use current profile/video guidelines
- page 13 must not imply that a price increase automatically improves ranking or income
- page 14 must distinguish platform metrics from broader retention advice

### italki — 7 pages

| # | Slug | H1 / primary intent | Related lesson IDs |
|---|---|---|---|
| 15 | `teach-spanish-on-italki` | How to Teach Spanish on italki: A Practical Tutor Guide | 15, 14, 18, 108 |
| 16 | `italki-spanish-teacher-profile` | How to Build an italki Spanish Teacher Profile | 15, 14, 137 |
| 17 | `italki-introduction-video-spanish-teacher` | italki Introduction Video Ideas for Spanish Teachers | 201, 202, 15 |
| 18 | `italki-trial-lesson-spanish` | How to Structure a First Spanish Lesson for an italki Student | 15, 14, 121 |
| 19 | `italki-pricing-spanish-lessons` | How to Price Spanish Lessons on italki | 15, 18, 108 |
| 20 | `get-more-italki-spanish-students` | How Spanish Teachers Can Attract More Students on italki | 15, 14, 137 |
| 21 | `retain-italki-spanish-students` | How to Keep italki Spanish Students Coming Back | 137, 138, 208, 215 |

#### italki editorial requirements

Until a current first-party teacher source is verified:

- do not state current commission percentages
- do not state current application availability
- do not state current lesson/package rules
- do not state ranking factors as facts
- do not state current trial mechanics as facts
- do not use third-party SEO blogs as a substitute for first-party documentation

The pages should still be valuable through:

- profile positioning
- niche clarity
- sample teaching structure
- diagnostic strategy
- lesson continuity
- pricing decision frameworks
- retention systems

If first-party sources become available during implementation, add verified facts and record the review date.

### Other platforms — 4 pages

| # | Slug | H1 / primary intent | Related lesson IDs |
|---|---|---|---|
| 22 | `teach-spanish-on-verbling` | How to Teach Spanish on Verbling | 15, 14, 18 |
| 23 | `verbling-application-video-spanish-teacher` | Verbling Teacher Application Video for Spanish Teachers | 201, 202, 15 |
| 24 | `teach-spanish-on-superprof` | How to Teach Spanish on Superprof | 15, 14, 18 |
| 25 | `teach-spanish-on-amazingtalker` | How to Teach Spanish on AmazingTalker | 15, 14, 18 |

Requirements:

- Verbling pages should use current first-party teacher/application documentation
- Superprof page should use first-party tutor/payment documentation appropriate to the relevant market and clearly state when regional rules may differ
- AmazingTalker page must verify a current first-party teacher page before including volatile platform mechanics
- no platform-comparison ranking or "best platform" verdict is part of this batch

### Pricing & business — 10 pages

| # | Slug | H1 / primary intent | Related lesson IDs |
|---|---|---|---|
| 26 | `online-spanish-tutor-rates` | How Much Should an Online Spanish Tutor Charge? | 15, 18, 108 |
| 27 | `raise-spanish-tutoring-rates` | When and How to Raise Your Spanish Tutoring Rates | 15, 18, 108 |
| 28 | `real-hourly-rate-online-spanish-tutor` | Your Real Hourly Rate as an Online Spanish Tutor | 108, 15 |
| 29 | `price-spanish-lesson-packages` | How to Price Spanish Lesson Packages | 15, 14, 18 |
| 30 | `spanish-tutor-income-calculator` | Spanish Tutor Income Calculator: Students, Hours and Net Revenue | 15, 14, 108 |
| 31 | `how-many-students-full-time-spanish-tutor` | How Many Students Do You Need to Tutor Spanish Full-Time? | 15, 14, 18 |
| 32 | `fill-weekly-schedule-spanish-tutor` | How to Fill Your Weekly Schedule as a Spanish Tutor | 15, 14, 137 |
| 33 | `monthly-income-plan-spanish-tutor` | How to Plan Monthly Income as an Online Spanish Tutor | 15, 14, 108 |
| 34 | `spanish-tutor-niche-ideas` | Spanish Tutor Niche Ideas: How to Stop Competing With Everyone | 16, 39, 38, 37 |
| 35 | `independent-spanish-tutor-referrals` | Referral Strategies for Independent Spanish Tutors | 15, 14, 137 |

#### Business calculation rules

Business pages may use arithmetic models, but must label assumptions.

Examples:

```
effective_hourly_rate =
  net_teaching_revenue /
  (teaching_hours + prep_hours + admin_hours)
```

```
monthly_revenue =
  average_paid_lessons_per_week *
  average_net_rate *
  4.33
```

The page must not present hypothetical outputs as typical tutor income.

When platform fees are included, the fee must be sourced and dated.

## Operations & retention — 9 pages

| # | Slug | H1 / primary intent | Related lesson IDs |
|---|---|---|---|
| 36 | `cancellation-policy-spanish-tutor` | How to Write a Cancellation Policy for Spanish Tutoring | 15, 14 |
| 37 | `rescheduling-policy-online-spanish-tutor` | A Rescheduling Policy That Works for Online Spanish Tutors | 15, 14 |
| 38 | `availability-online-spanish-tutor` | How Much Availability Should an Online Spanish Tutor Open? | 15, 14, 17 |
| 39 | `first-online-spanish-lesson` | How to Teach Your First Online Spanish Lesson | 15, 120, 121, 130 |
| 40 | `assess-spanish-student-level-online` | How to Assess a Spanish Student's Level Online | 15, 14, 13, 11 |
| 41 | `spanish-student-learning-plan` | How to Build a Spanish Learning Plan After the First Lesson | 140, 142, 143, 148 |
| 42 | `retain-online-spanish-students` | How to Retain Online Spanish Students for Months, Not Weeks | 137, 138, 208, 215 |
| 43 | `lesson-prep-system-spanish-tutors` | A Lesson Prep System for Spanish Tutors Who Teach All Day | 108, 15, 18, 28 |
| 44 | `conversation-only-spanish-lesson` | How to Structure a Conversation-Only Spanish Tutoring Lesson | 15, 14, 13, 11 |

Policy-writing pages should provide frameworks and sample components, not legal advice.

## Tutor niches — 6 pages

| # | Slug | H1 / primary intent | Related lesson IDs |
|---|---|---|---|
| 45 | `teach-beginner-spanish-online` | How to Teach Beginner Spanish Online One-to-One | 15, 120, 121, 130 |
| 46 | `teach-spanish-for-travel-online` | How to Teach Spanish for Travel Online | 39, 17, 131, 204 |
| 47 | `business-spanish-tutoring` | How to Build a Business Spanish Tutoring Offer | 125, 124, 133, 134 |
| 48 | `dele-preparation-private-tutor` | How to Plan DELE Preparation Lessons as a Private Spanish Tutor | 140, 142, 143, 148 |
| 49 | `spanish-pronunciation-tutoring-online` | How to Offer Spanish Pronunciation Tutoring Online | 38, 201, 202 |
| 50 | `rioplatense-spanish-tutoring-niche` | How to Build a Rioplatense Spanish Tutoring Niche | 16, 39, 3, 19 |

DELE content must not imply official affiliation with Instituto Cervantes.

## Internal-linking architecture

Every new page should link laterally to 2–4 guides.

Examples:

### Preply funnel

`preply-spanish-tutor-profile`
→ `preply-headline-spanish-tutor`
→ `preply-description-spanish-tutor`
→ `preply-introduction-video-spanish-tutor`
→ `preply-trial-lesson-spanish`
→ `preply-trial-to-subscription-spanish`
→ `preply-student-retention-spanish`

### Business funnel

`online-spanish-tutor-rates`
→ `real-hourly-rate-online-spanish-tutor`
→ `spanish-tutor-income-calculator`
→ `monthly-income-plan-spanish-tutor`
→ `fill-weekly-schedule-spanish-tutor`

### Student lifecycle

`first-online-spanish-lesson`
→ `assess-spanish-student-level-online`
→ `spanish-student-learning-plan`
→ `retain-online-spanish-students`
→ `lesson-prep-system-spanish-tutors`

### Niche funnel

`spanish-tutor-niche-ideas`
→ relevant niche page
→ related lesson resources
→ broader SpanishCue resource collection

## Product-linking rules

The editorial page should primarily link to public `/resources/[slug]` pages.

It should not use a protected lesson route as the main SEO bridge.

For business pages where the lesson relationship is indirect, the copy should explain why the resource is relevant.

Example:

> Raising your rate is easier to justify when your lesson experience is consistent. These ready-to-teach resources can reduce preparation time while keeping the student-facing experience structured.

Do not force a lesson link into a paragraph where it makes no sense.

## Platform-source presentation

When a page contains platform facts, render a compact source section near the end:

### Platform sources

- Preply Help Center — Commission model
- Preply Help Center — Trial lessons

Also display:

> Platform information reviewed: September 24, 2026

The source title should be linked.

Do not clutter ordinary methodology pages with this block.

## Disclaimers

Platform pages should include a concise, non-disruptive note:

> SpanishCue is an independent teaching-resource platform and is not affiliated with Preply, italki, Verbling, Superprof, or AmazingTalker.

Only name platforms relevant to the specific page when possible.

Do not imply endorsement.

## Structured data

Continue using:

- `Article`
- `BreadcrumbList`

Do not add:

- fake reviews
- rating schema
- FAQ schema solely to chase rich results
- unsupported Product schema for editorial pages

Visible source/freshness information must agree with structured data dates.

## Sitemap

All guides continue to enter the sitemap through the guide catalog.

Requirements:

- canonical URL
- index/follow
- no auth requirement
- no robots exclusion
- sitemap includes all 50 new slugs
- protected full lesson routes remain protected

## Quality validation

Add automated tests that fail when:

1. a new slug duplicates an existing guide slug
2. two guides have the same exact title
3. a tutor-business guide has fewer than four substantive sections
4. a tutor-business guide has no related lesson IDs
5. a related lesson ID does not exist
6. a related guide slug does not exist
7. a guide links to itself
8. a guide is orphaned from the internal guide graph
9. a platform page lacks `platform`
10. a platform page lacks `lastReviewed`
11. a platform page marked as containing volatile facts has no official source
12. an official source uses a non-HTTPS URL
13. the second expansion does not contain exactly 50 guides
14. sitemap generation omits any tutor-business guide
15. the combined guide count is wrong for the set of expansions actually merged

The combined-count test must be feature-aware:

- current base only: 13
- after one 50-page expansion: 63
- after both 50-page expansions: 113

Do not hard-code 113 before both expansions exist on the branch.

## Editorial anti-duplication checks

Reviewers should compare:

- `teach-spanish-on-preply` vs existing `how-to-teach-spanish-online`
- `first-online-spanish-lesson` vs existing `spanish-lesson-planning-45-minutes`
- `conversation-only-spanish-lesson` vs existing `spanish-conversation-activities-by-level`
- `spanish-pronunciation-tutoring-online` vs pronunciation teaching guides from the other expansion
- `dele-preparation-private-tutor` vs grammar/topic guides

The tutor-business page must answer the commercial/service-design intent, while the teaching/topic page answers the classroom-method intent.

If two drafts answer the same search intent, consolidate rather than publish both.

## Implementation batches

Implement in five independently reviewable batches.

### Batch 1 — Preply profile and trial funnel

Pages 1–7.

Also introduces:

- platform metadata
- reviewed-date UI
- official source block
- affiliation disclaimer

### Batch 2 — Preply growth + italki

Pages 8–21.

Special review required for:

- current Preply metrics
- italki volatile claims

### Batch 3 — Other platforms + pricing/business

Pages 22–35.

Includes business calculation helpers/examples.

### Batch 4 — Operations & retention

Pages 36–44.

### Batch 5 — Tutor niches + final IA

Pages 45–50 plus:

- final tutor-business hub grouping
- cross-cluster links
- final source/freshness audit
- sitemap verification
- internal-link graph validation

Every batch must pass the repository's full CI before merge.

## Search Console feedback loop

Search Console is connected for `sc-domain:spanishcue.com`.

After launch, optimize from actual query/page data rather than continuing to add pages automatically.

Priority buckets:

### High impressions, position 8–25

Improve the existing page:

- title
- intro
- missing subtopic
- internal links
- examples

### Good position, low CTR

Test title/meta-description alignment with the query.

### Multiple pages getting impressions for the same query

Investigate cannibalization and merge or differentiate.

### Platform page loses impressions after platform changes

Recheck first-party documentation before rewriting.

## Freshness review schedule

Recommended editorial review cadence:

- Preply factual pages: every 60–90 days
- italki factual pages: every 60–90 days once first-party sources are available
- other marketplace factual pages: every 90 days
- generic pricing/business pages: every 6 months
- operational/methodology pages: every 6–12 months unless product assumptions change

This is an editorial policy, not an automated promise. Do not display a new review date unless the page was actually checked.

## Non-goals

This expansion does not:

- scrape tutor profiles
- copy platform help-center content
- impersonate platform staff
- promise platform ranking gains
- promise Super Tutor status
- promise student numbers
- promise earnings
- create fake tutor case studies
- publish unsupported commission data
- build a user forum
- change SpanishCue billing or auth
- make paid lessons public
- automatically generate endless platform keyword variants

## Success criteria

The second expansion is complete when:

- exactly 50 unique tutor/business guide URLs have been added
- all slugs are distinct from existing guides and the first expansion
- every page contains substantial original content
- platform facts are sourced and reviewed
- unsupported volatile italki/AmazingTalker facts are omitted
- every page links to relevant SpanishCue resources
- every page participates in the guide-link graph
- the `/guides` information architecture clearly separates teaching content from tutor-business content
- sitemap includes the new URLs
- premium lesson access is unchanged
- CI passes for every batch
- Search Console can measure each page once Google discovers it

## Final editorial rule

The reason for publishing a page must be:

> A Spanish tutor has this real problem, and SpanishCue can give them a genuinely useful answer.

Not:

> We found another keyword variant.
