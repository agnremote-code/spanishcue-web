# SpanishCue organic growth strategy (source of truth)

Status: Phase 1 live; Phase 2 grammar implementation, 2026-10-07. Owner: Ale. Maintainer of this document: whoever ships SEO work; update it in the same PR as the change.

This document decides how spanishcue.com earns English-language search traffic from Spanish teachers and turns it into customers. Code enforces the technical rules (`app/seo.ts`, `tests/seo-architecture.test.mjs`, `tests/rendered-html.test.mjs`); this file explains them and holds the plan.

## 1. Business goal and funnel

SpanishCue sells a teacher-facing library of interactive Spanish lessons (A1–C2). Organic search is a customer-acquisition channel, not a traffic channel:

| Stage | Where it happens | Measure |
| --- | --- | --- |
| Discovery | Google results for teacher intents (section 3) | impressions, clicks, average position per cluster |
| Resource | Hubs, level pages, question bank, guides, resource pages | engaged sessions, scroll depth, `landing_view` events |
| Product | Free lesson opened from an organic page | `free_lesson_start` with organic attribution |
| Signup | Free teacher account | `signup_start` → signup completed (Firebase) |
| Paid | PRO checkout | `checkout_start`, provider-verified payment (D1 grants) |

Every organic page therefore carries: a free lesson CTA (real, complete lesson, no card), a product section built from the real catalog, and a PRO link. Pages that cannot carry that funnel are not worth publishing.

## 2. Positioning

**The interactive, ready-to-teach Spanish lesson library for teachers and online tutors, conversation-first, organised by CEFR level (A1–C2).**

Why this wins the category instead of "teaching resources" generically:

- Competitors in the English SERPs are static: TpT-seller blogs (World Language Cafe, Srta Spanish, Señora Q, Mis Clases Locas, La Libre, Secondary Spanish Space), learner-facing sites repurposed for teachers (FluentU, Spanish Academy, Lingoda, Preply/italki blogs, Real Life Language, Verbalicity) and marketplaces (TpT, TES, Teacher's Discovery). They publish listicles and printables; none ships an interactive lesson the reader can open and teach.
- Almost none of them structures content by CEFR level. Their audience is K-12 and US high school ("Spanish 1/2/3"); SpanishCue's audience is teachers and tutors of teenagers and adults who think in A1–C2.
- Their content mixes learner intent ("how to say…") with teacher intent. SpanishCue pages are only for teachers.
- The product itself is the proof: a page about B1 conversation can show a real B1 conversation world, free.

What we do not claim: rankings, certification, awards, reviews, statistics we do not have, authors we do not have. See section 9.

## 3. Search market map (English, teacher intent)

Clusters in priority order. Volume labels are directional (from SERP research on 2026-10-07, no paid tool); update them with Search Console data once available.

| Cluster | Head terms | Long tail we can own first | Status |
| --- | --- | --- | --- |
| **Conversation (attack cluster)** | spanish conversation activities, spanish speaking activities, spanish conversation questions | b1 spanish conversation activities, a1/a2 spanish speaking activities, spanish conversation activities for adults, spanish conversation questions intermediate, no prep spanish conversation activities | **Shipped** (hub + 6 level pages + question bank) |
| Teacher resources (category) | spanish teacher resources, spanish teaching resources, resources for spanish teachers, interactive spanish lessons for teachers | spanish teacher resources for adults, online spanish teaching resources, ready to teach spanish lessons | **Shipped** (category hub) |
| Grammar | spanish grammar activities / lessons for teachers; CEFR planning; specific communicative tasks | por vs para activities; ser/estar; preterite/imperfect; subjunctive | Phase 2: hub, A1–C1 planning, four topic kits (three existing URLs), About; see section 11 |
| Listening | spanish listening activities, spanish listening comprehension for teachers | b1 spanish listening activities with audio | Resource pages only |
| Pronunciation / vocabulary | spanish pronunciation activities, spanish vocabulary games for adults | — | Resource pages only |
| Tutor business | how to teach spanish online, preply spanish tutor, online spanish tutor rates | 50 guides exist | Live; link from hubs |
| Self-study (learner intent, Spanish) | curso de español autoestudio, estudiar español A1 | — | Live (`/autoestudio`); kept separate from teacher clusters |

## 4. Site architecture (what is indexable)

```
/                                   Spanish-default library, Organization + WebSite schema
/spanish-teacher-resources          Category hub (EN)
/spanish-conversation-activities    Cornerstone hub (EN)
/spanish-conversation-activities/{a1,a2,b1,b2,c1,c2}   Level pages (EN)
/spanish-conversation-questions     Question bank, 150 questions (EN, server-rendered, client filters)
/spanish-grammar-lessons            Grammar cornerstone (EN), full current classroom inventory
/spanish-grammar-lessons/{a1,a2,b1,b2,c1}    Distinct teacher planning pages
/spanish-grammar-lessons/por-vs-para-activities   B1 topic activity kit
/about                             Teaching practice and methodology
/free-spanish-lesson, /online-spanish-teaching-resources, /ele-recursos-profesores   Landings (indexable, template)
/resources, /resources/{slug}       Lesson library and 114 public lesson pages (EN, LearningResource schema; count computed from the catalog)
/guides, /guides/{slug}             63 guides (EN, Article + BreadcrumbList)
/autoestudio, /autoestudio/{level}, free weeks   Self-study course (ES)
/pricing, legal pages, free lesson routes
```

Not indexable (`noindex` in metadata + `X-Robots-Tag`, never robots.txt): `/ingresar`, `/cuenta`, `/acceso`, `/pro/*`, `/admin/*`, `/api/*`, `/auth/*`, `/demo/*`, `/s/*`, `/autoestudio/claim`, `/zeely`, `/lp/*`. PRO lesson routes redirect anonymous visitors to `/acceso`, so their public representation is the `/resources/{slug}` page.

### Canonical and language rules

1. Exactly one canonical per page: the clean apex URL without query string (`canonicalUrl` in `app/seo.ts`). `?lang=` switches the UI language and stores a cookie; it never creates a second indexable URL.
2. hreflang only for real pairs declared in `languagePairs`: two distinct URLs carrying the same content in two languages. The list is empty on 2026-10-07; `/ele-recursos-profesores` (campaign landing) is not a translation of `/spanish-teacher-resources` (content hub). Never emit hreflang to a `?lang=` variant.
3. The default UI language of English organic surfaces is English (`isEnglishDefaultPath`): `/resources*`, `/guides*`, `/spanish-*`, `/online-spanish-teaching-resources`, `/free-spanish-lesson`, `/lp/*` (except the Spanish landing).
4. robots.txt disallows `/api/` only. Anything excluded from search must stay crawlable so Google can read the noindex.
5. Sitemap: clean URLs only, no parameters, no noindex pages, `lastModified` only where it is truthful (guides). Generated in `app/sitemap.ts`.

### Campaign landings (Meta, Zeely, Google Ads)

- Ad traffic goes to `/lp/{slug}` (`app/lp/[slug]/page.tsx`), which reuses the conversion-first `MarketingLanding` template for each config in `app/marketing-landing/config.ts`: `/lp/spanish-conversation-activities`, `/lp/spanish-teacher-resources`, `/lp/free-spanish-lesson`, `/lp/spanish-grammar-lessons`, `/lp/ele-recursos-profesores`, `/lp/online-spanish-teaching-resources`.
- They carry `noindex, follow` and a self-referencing canonical. UTM, `fbclid`, `gclid` and other parameters never change the canonical. Do not combine `noindex` with a canonical pointing at another page.
- The clean `/spanish-conversation-activities` and `/spanish-teacher-resources` URLs are the organic hubs. Update ad final URLs (GOOGLE_ADS_START.md, MARKET-TEST.md, Zeely) to the `/lp/` variants when campaigns restart.
- Zeely scrapes a URL for brand data. Give it `https://spanishcue.com/zeely` directly (linked from every footer). The hidden homepage block was removed because hidden text and links violate Google's spam policies regardless of intent.

## 5. Page templates (reusable SEO architecture)

All English organic pages share `app/growth/`:

- `components.tsx`: `GrowthTopbar`, `Breadcrumbs` (visible + BreadcrumbList), `LevelStrip`, `LessonGrid` (cards from the real catalog), `Section`, `Faq` (plain `<details>`, no FAQPage schema), `CtaBand`, `JsonLd`.
- `lessons.ts`: resolves lesson ids to cards (title, image, level, FREE/PRO, href). Free lessons link to the lesson; PRO lessons link to their public `/resources/{slug}` page. Nothing about a lesson is duplicated in content files.
- `schema.ts`: `CollectionPage` + `ItemList` for hubs, `WebPage` for level pages, `BreadcrumbList` everywhere, Organization/WebSite on the homepage (`SiteSchema.tsx`).
- `conversation-levels.ts`, `conversation-questions.ts`: editorial data. Adding a level page or a question is a data change, not a template change.
- `LevelCrossLinks.tsx`: cross-links from `/resources/{slug}` and `/guides/{slug}` into the cluster.

Template rules: one `<h1>`, descriptive `<title>` ≤ 65 characters, meta description 110–165 characters, breadcrumbs, a free-lesson CTA above the fold, real lessons from the catalog, internal links to the hub, siblings and the question bank, and a footer with the whole architecture. Mobile first (16px gutters, no horizontal scroll).

## 6. Content factory specification

Purpose: produce product-led pages that a Spanish teacher would bookmark, not an article farm. Volume follows demand evidence, never the reverse.

**Unit of work: one data entry.** A level page is an entry in `conversationLevels`; a question is an entry in `conversationQuestions`; a guide is an entry in `app/guides/data/*`. Templates render them. A new cluster (grammar, listening) gets its own data module and reuses `app/growth` components.

**Inputs required before writing** (recorded in the PR):

1. Query set: head term, 3–8 long-tail variants, the intent (teacher, not learner), and the current SERP shape (who ranks, what format).
2. Product fit: which real lessons (ids) the page can show, including at least one free lesson where possible.
3. Internal links: parent hub, siblings, and at least two existing pages that will link to the new page.

**Writing rules**

- Original, specific pedagogy: steps, timings, the language a task recycles, a classroom tip, common mistakes. No generic "engage your students" filler.
- Spanish examples in the neutral `tú` register (`scripts/neutral-spanish.mjs` enforces it). English UI copy additions are listed in a `docs/audits/*-english-copy-additions-*.json` manifest (`scripts/check-english-copy.mjs`).
- Truthful numbers only, computed from the catalog at render time (`catalogSummary`), never typed by hand.
- No fabricated authors, credentials, reviews, ratings, statistics or testimonials. Author is the organization until a named author page with real credentials exists.
- One page per intent. If two drafts would target the same query, merge them.

**Definition of done**: renders at desktop and mobile widths, passes `npm run test:seo` and the rendered checks, appears in the sitemap, is linked from its hub and footer, has a free-lesson CTA, and is logged in the roadmap table below.

**Cadence**: 2–4 pages per month in the first 90 days, chosen from the cluster table. Review Search Console every two weeks; promote pages with impressions, rewrite pages with impressions but no clicks, prune pages with neither after 90 days.

## 7. Measurement

- GA4 via `NEXT_PUBLIC_GA4_MEASUREMENT_ID` (consent-gated; `app/marketing/GoogleAnalytics.tsx`). One tag only. Do not add a second analytics snippet.
- Marketing events (`app/marketing/analytics.ts`): `landing_view` now fires for hubs, level pages, question bank, `/resources`, `/guides`, `/autoestudio` and `/lp/*`; `free_lesson_start`, `pricing_view`, `paywall_view`, `signup_start`, `checkout_start` unchanged. UTM attribution is captured on first visit (consent-gated) and attached to conversion events.
- Google Search Console: **connected and sitemap submitted**, confirmed by the owner on 2026-10-07. Newly deployed Phase 1 pages are being discovered/indexed. This session has not inspected a live GSC export: do not invent impression, click, volume or ranking data. Mature data largely predates Phase 1, so use it for historical clues and technical indexation issues, not to judge new pages prematurely.
- KPIs per quarter: indexed organic pages, impressions and clicks per cluster, organic `free_lesson_start`, organic signups, organic PRO conversions.

## 8. Performance notes

- All organic pages are server-rendered by the Worker with `Cache-Control: private, no-store` (identity-aware layout). Fine for crawlers, but HTML is never cached at the edge. P1: serve anonymous responses for organic hubs with `public, s-maxage` when the layout can skip identity for them.
- Images on organic pages use `next/image` with explicit dimensions and lazy loading; the site runs `images.unoptimized`, so provide pre-sized WebP assets.
- CSS for the growth pages is one CSS module; no client JavaScript except the question-bank filters.

## 9. Hard rules (never)

Hidden text or links, cloaking, keyword stuffing, doorway pages, duplicate AI pages, fake reviews/ratings/authors/data, purchased links, parasite SEO, expired-domain tricks, deceptive redirects, cross-page canonical + noindex (self-canonical campaign pages remain intentional), hreflang to parameter URLs, robots.txt blocks on pages that need noindex, FAQPage/HowTo rich-result markup used for decoration, and ranking guarantees in any copy.

## 10. Roadmap (12 months)

**Phase 1 (already deployed; preserved during Phase 2)**

- Technical foundation: clean canonicals, real-pair-only hreflang, robots/noindex alignment, `X-Robots-Tag`, sitemap rebuild, Organization/WebSite schema, hidden block removed, homepage title/description.
- Attack cluster: conversation hub, six level pages, 150-question bank, teacher-resources hub, campaign `/lp/*` variants, internal links, tests, this document.

**Next 30 days**

1. Monitor the already submitted sitemap and Phase 1 discovery without restarting setup.
2. Phase 2 implements the grammar hub, five level pages, four topic kits and About; verify the release evidence and assess organic cohorts after sufficient observation.
3. Add 2–3 conversation long-tail pages with proven demand (candidates: "Spanish conversation activities for adults", "Spanish icebreakers for adult beginners", "no-prep Spanish conversation lesson plan").
4. Point live ads to `/lp/*`; update GOOGLE_ADS_START.md and MARKET-TEST.md final URLs.
5. Decide the Spanish-language pair strategy (`/recursos-profesores-espanol` hub) so `languagePairs` can hold its first real entry.

**30–90 days**

- Listening hub (`/spanish-listening-activities`) with level pages built from the 8 listening worlds.
- `/about` now carries branded methodology and owner-authorized public proof; no personal name or student faces. Keep proof dated and recheck before changing it.
- Edge caching of anonymous organic HTML; Core Web Vitals check on real devices.
- `/resources` filters in the URL (`?level=`, `?skill=`) with canonical to the clean path, so hubs can deep-link.
- First outreach: 10 teacher communities/newsletters receive the question bank (no paid links).

**3–6 months**

- Extend grammar coverage only where product depth and search evidence justify it; C2 needs more contemporary grammar classrooms before a dedicated level page.
- Pronunciation and vocabulary hubs if Search Console shows impressions.
- Programmatic improvements to `/resources/{slug}`: per-level sections for multi-level worlds, teacher notes, related activities from the cluster.
- Review and prune: pages with no impressions after 90 days get merged or removed.

**6–12 months**

- Spanish-language teacher cluster (ELE) with true hreflang pairs.
- Lesson-plan generator or "build a 45-minute conversation lesson" interactive tool as a linkable asset.
- Case studies with real teachers (consent, real names) replacing the absence of testimonials.
- Quarterly content audit against this document; retire landings that duplicate hubs.

## 11. Phase 2: grammar authority cluster (2026-10-07)

### Research and decision

Live English SERP review on 2026-10-07 covered grammar activities/lessons for teachers and adults; communicative grammar and lesson plans; CEFR A1–C2; subjunctive; past tense/preterite vs imperfect; ser vs estar; por vs para; games and conjugation. This is qualitative opportunity assessment, **not measured keyword volume, difficulty or a ranking forecast**. Queries by CEFR include substantial learner intent. Our pages explicitly target teacher planning, with different practical outcomes and real classrooms. C1 is a narrower, product-supported planning opportunity, not a claim of large demand.

Competitor pages inspected:

| Source | Observed format | Implication for SpanishCue |
| --- | --- | --- |
| [World Language Cafe: past contrast](https://worldlanguagecafe.com/preterite-vs-imperfect-activities/) | Teacher activity list, speaking/storytelling ideas, product/resource links | Concrete classroom intent; differentiate with immediately usable prompts, correction logic and direct classroom access. |
| [World Language Cafe: subjunctive](https://worldlanguagecafe.com/spanish-lesson-plans-to-spice-up-the-subjunctive/) | Teacher lesson plans, handouts and activity resources | Preserve our existing subjunctive lesson-plan URL and make it more usable. |
| [La Profe Plotts: ser/estar](https://laprofeplotts.com/ser-vs-estar-activities-for-spanish-class/) | Classroom activity/product collection | Offer adult and online adaptations; avoid relying on permanent/temporary as an absolute rule. |
| [Cronopios Idiomas: subjunctive](https://cronopiosidiomas.com/activities-to-practice-the-subjunctive-in-spanish/) | Pedagogically framed practice activities | Competitors already offer meaningful practice; SpanishCue must add a complete teaching path and real interactive classrooms, not claim exclusivity. |
| [Ramón Díez Galán: por/para](https://ramondiezgalan.com/actividad/por-y-para/) | Situations, examples and a final challenge | Interactive/contextual competition exists. Our distinctive fit is English teacher guidance plus a B1 delivery classroom with four skills. |
| [Fluentivos grammar](https://www.fluentivos.com/spanish-grammar) | Learner-facing courses and focused grammar by A1–C2, explanations and practice | CEFR organization is not unique. Separate teacher planning from self-study, and claim only catalog-backed scope. |
| [TPT por/para](https://www.teacherspayteachers.com/Product/Spanish-Por-vs-Para-Lesson-1-8007213) and [TES por/para](https://www.tes.com/en-us/teaching-resource/por-vs-para-12490658) | Marketplace worksheets/lesson packs in results | Paid-ready teacher intent, but no assumed search volume. A usable free task can lead to a full classroom. |

Priority: improve the already-owned grammar cornerstone; four specific topic opportunities (three established URLs, one new URL); five level planning pages. Generic conjugation/games queries have broader learner/tool intent and overlap the verbal map; no extra pages now. No optional conversation long-tail pages were created. Phase 1 conversation copy is unchanged.

### URL and intent ownership

All rows below sit under `/spanish-grammar-lessons`, except the cornerstone itself (parent `/spanish-teacher-resources`) and About (brand/reference page). Existing guide URLs stay in `/guides` for continuity; breadcrumbs and contextual links establish the grammar relationship.

| URL | Primary intent | Secondary terms | Must not compete with |
| --- | --- | --- | --- |
| `/spanish-grammar-lessons` | Choose grammar teaching resources | Spanish grammar activities, lessons for teachers/adults; communicative grammar; lesson plans | `/spanish-teacher-resources` owns broad teacher resources; `/resources` owns catalog browsing; `/sistema-verbal` owns the Spanish verbal map. |
| `/spanish-grammar-lessons/a1` | Plan beginner grammar teaching | A1 Spanish grammar activities; nouns, agreement, room descriptions, routines | Topic ser/estar guide owns the specific contrast; hub owns broad discovery. |
| `/spanish-grammar-lessons/a2` | Plan A2 grammar teaching | past descriptions/events; instructions; duration | Past guide owns a combined tense-contrast activity kit. |
| `/spanish-grammar-lessons/b1` | Plan B1 grammar teaching | narrative, recommendations, purpose, relative clauses | Subjunctive and por/para kits own focused tasks, not a B1 overview. |
| `/spanish-grammar-lessons/b2` | Plan B2 grammar teaching | reported speech, hypotheses, concession, impersonal notices | Subjunctive kit owns the focused progression; individual lesson previews own product-specific intent. |
| `/spanish-grammar-lessons/c1` | Plan advanced precision work | ambiguity, aspect, reformulation, temporal perspective | C1 conversation page owns general conversation tasks; rare-tense previews own their own receptive scope. |
| `/guides/how-to-teach-ser-vs-estar` | Teach ser/estar through contextual activities | ser vs estar activities/lesson plan, adult beginners | No separate `/ser-vs-estar-activities` doorway. Preserve this existing URL. |
| `/guides/preterite-vs-imperfect-activities` | Practise past narrative perspective | Spanish past tense activities, preterite/imperfect lesson plan | No competing broad past-tense activities page. |
| `/guides/spanish-subjunctive-lesson-plan` | Plan communicative subjunctive practice | Spanish subjunctive activities, recommendations and past requests | No separate generic subjunctive-activities page. |
| `/spanish-grammar-lessons/por-vs-para-activities` | Teach por/para through a B1 decision task | reasons, purpose, recipients, routes and deadlines | Lesson 231's `/resources/*` page owns that specific classroom preview; A1 lesson 212 is prerequisite support only. |
| `/about` | Understand SpanishCue and its teaching method | SpanishCue methodology, real teaching practice | Not a generic grammar guide or teacher-directory profile. Parent: brand/home. |

C2: retain `/spanish-grammar-lessons#c2`. No indexable `/spanish-grammar-lessons/c2` page: the only current C2 core is lesson 156 (historical future perfect subjunctive, receptive/paraphrase). Legacy displayLevel ranges do not justify advanced classroom claims. A later C2 page requires substantial contemporary C2 grammar work plus distinct teaching tasks; do not characterize C2 itself as mainly archaic grammar.

### Current product evidence and teaching design

57 grammar classrooms observed on the base commit, derived at runtime from catalog metadata. Core-level counts: A1 17; A2 10; B1 11; B2 13; C1 5; C2 1. Counts are not hand-coded in public pages. Free A1 classroom IDs 40 and 41 are the entry points. `grammarLessonsAtLevel()` uses `.level`, not the legacy `.levels` reference-bank range; `grammarLessonCards()` normalizes the public card to that actual core level.

The hub links the full current inventory, the verbal map and all four topic kits. Topic classroom IDs: ser/estar 48, 40, 41; past 142, 143, 18; subjunctive 148, 149, 150, 37; por/para 231 and clearly labeled A1 prerequisite 212. Level pages expose every relevant classroom through featured cards and a crawlable inventory. Companion resources include conversation 15 and listening 132/236. Each new level has two original classroom activities; each topic kit has three. Tasks supply steps, Spanish prompts, a possible model, meaning-based correction and a tutoring/group adaptation. Existing guide principles remain visible in native disclosures.

About explains the six-stage grammar classroom, conversation-first teaching, teacher judgment, and level references. [Council of Europe classroom guidance](https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-in-the-classroom) and the [PCIC](https://cvc.cervantes.es/Ensenanza/biblioteca_ele/plan_curricular/indice.htm) are linked as references, never endorsements/accreditation. All Spanish prompts are neutral tú unless a regional form is explicitly being described. Three first-person preterite examples have exact contextual audit entries.

### Authorized proof policy and checked facts

AUTHORIZED PROOF SOURCE: https://preply.com/en/tutor/4226888

Checked live: **2026-10-07**. Visible facts: 4,194 lessons taught; overall rating 5 from 52 public student reviews; Professional Tutor and Super Tutor statuses. Separate lesson-dimension scores were 4.9 based on 118 anonymous reviews; **those are not the overall rating and are not used**. No inferred years of experience, degrees, awards, schools or accreditation.

Public claim: 4,000+ lessons **in the teaching practice behind SpanishCue**. Rating and review count visibly show the check date. About mentions the two statuses as observed on that date; no platform endorsement claim. Do not describe all delivered lessons as classes using this platform or claim the testimonials review SpanishCue itself.

Three short verbatim excerpts in `app/growth/teaching-proof.ts`: Charlie (2026-08-17, enjoyable classes); Joshua (2026-07-08, responsiveness to the student's needs); Tammy (2026-06-02, progress). 21 quoted words total. The owner authorizes reuse; preserve the original meaning and do not silently rewrite quotations. First names and review dates only; no student portraits, no owner personal name, no unnecessary personal data. Every proof section links discreetly to the public source. Recheck before updating counts/statuses; a dated observation is not a claim of permanent status.

No Review or AggregateRating schema: external tutor feedback is not a review of the SpanishCue software. Schema is CollectionPage + ItemList on the hub; WebPage for level/topic kits; AboutPage for methodology; BreadcrumbList and existing Organization references. Existing non-topic guide Article schema is unchanged.

### Internal links, measurement and indexation

Growth navigation adds Grammar and About. Teacher resources adds contextual grammar-level links. Grammar resources and grammar guides now use grammar cross-links; conversation cross-links remain as before. Footer links About alongside the existing grammar hub. Every new page has a free classroom entry, product previews, a pricing link, an intent-owning parent, siblings and useful related resources. Landing analytics includes grammar descendants, the three enhanced topic guides and About, using existing consent and attribution rules.

New sitemap entries: five grammar levels, por/para, About. The three improved guides keep existing entries with a truthful 2026-10-07 review date. Every page uses a clean apex canonical, index/follow, server HTML and a normal 200 status; unknown slugs return 404. Query parameters, locale switches and ad click IDs cannot change canonical ownership. `/lp/spanish-grammar-lessons` retains the existing campaign template and noindex policy.

### Performance decision

New surfaces are server components with metadata-only catalog imports and native disclosure/audio controls. No new packages, client filtering bundle, fonts or game/Three.js imports. Lesson previews have explicit dimensions and lazy loading outside the hero; the hero reserves its aspect ratio. The one free audio uses preload=none. Full classroom JSON and protected audio are not imported or exposed.

Keep HTML `private, no-store`: the shared layout consumes locale/access headers and includes auth synchronization. A public-cache policy would require a dedicated anonymous rendering contract and tests for cookie, locale, RSC and authenticated variations. That is outside this content cluster and is not justified by a synthetic timing claim. Existing immutable/static media caching remains active. The root layout still brings shared auth/analytics/report/consent overhead; do not claim zero client JavaScript site-wide. No measured Core Web Vitals improvement is claimed.

### Next five high-value moves

1. After sufficient observation, inspect GSC by grammar URL/query and indexation reason; separate newly deployed cohorts from mature pages. Fix actual indexing problems before expanding.
2. Measure organic free-lesson starts, teacher signups and paid conversion by grammar entry page; verify attribution end to end before judging conversion value.
3. Build the listening cornerstone from the real audio catalog, with public samples and distinct teacher tasks, if the next research pass supports it.
4. Deepen contemporary C2 grammar classrooms and teacher materials before deciding on a separate C2 SEO URL; do not create a thin placeholder.
5. Share the free activity kits with relevant teacher communities and newsletters through owner-authorized outreach; earn useful mentions without purchased links or unsolicited automated posting.

### Phase 2 verification record (2026-10-07)

- Fresh base: `f2ab15a4feb67c569e8fcc351611777c98307061`; task branch `codex/seo-phase2-grammar-20261007`. No recoverable Phase 2 remote branch or overlapping open PR was present at intake.
- Independent GPT-6 Astra Ultra code review: no actionable defects. Source verification, browser QA and release verification remain the implementer's responsibility.
- Full `npm test`: 942 tests passed, no failures or skips. Includes the build, language protections, SEO, rendered worker routes, access boundaries and existing product regressions. An old marketing-template expectation was updated to recognize the dedicated grammar CollectionPage and verify its metadata helper.
- `npm run test:seo`: 20 passed. TypeScript, lint, artifact validation and whitespace checks passed. A final rebuild plus 23 focused grammar/marketing tests followed the visual CSS correction.
- Browser QA: Chromium, 1440×1000 and 390×844, all eleven grammar/About URLs, teacher resources and the free nouns classroom; 26 page renders plus separate desktop/mobile proof captures. Every route returned 200; no broken images or uncaught page errors. Screenshots were visually inspected, including activities and the attributed testimonials.
- Browser QA found the existing free classroom's mobile step navigation expanding the document to 838 px at a 390 px viewport. Giving the grid sidebar `min-width:0` contains its horizontal scrolling. The rebuilt classroom now has a 390 px document; the desktop layout and stage interactions pass. No lesson content changed.
- All organic routes have one H1, a clean canonical, index/follow, valid structured data and sitemap coverage. Parameter variants canonicalize to the clean path; unsupported C2/unknown slugs return 404. Paid classroom/audio boundaries remain enforced, while the free nouns audio returns 200.
- Shared auth/consent JavaScript remains; no synthetic Core Web Vitals or ranking gain is asserted. Production success must be verified from CI + Auto Merge and the established staging/production workflow, separately from these local results.
