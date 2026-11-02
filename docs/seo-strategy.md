# SpanishCue organic growth strategy (source of truth)

Status: Phase 1 live; Phase 2 grammar cluster live since 2026-10-07 and extended on 2026-10-12 (three more kits, search-focused hub H1, anonymous edge cache; see section 11). Owner: Ale. Maintainer of this document: whoever ships SEO work; update it in the same PR as the change.

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

- The teacher-resource category is competitive and not exclusively static. Lesson Here (lessonhere.com) markets an interactive ELE library at A1–C1, ELETUTOR (eletutor.com) offers printable and interactive materials, and Linguas (linguas.org/resources/teachers) publishes step-by-step lesson plans. Do not claim that competing sites have no interactive experiences. These are product-positioning examples, not verified keyword ranking positions.
- Differentiate SpanishCue using actual product evidence: immersive 3D decision-based teaching worlds, reusable browser-based lessons, direct screen sharing, and clearly authored CEFR pathways including C2 where available. Target teachers and online tutors of teenagers and adults rather than attempting to rank for every beginner learner query.
- Their content mixes learner intent ("how to say…") with teacher intent. SpanishCue pages are only for teachers.
- The product itself is the proof: a page about B1 conversation can show a real B1 conversation world, free.

What we do not claim: rankings, certification, awards, reviews, statistics we do not have, authors we do not have. See section 9.

## 3. Search market map (English, teacher intent)

Clusters in priority order. Volume labels are directional (from SERP research on 2026-10-07, no paid tool); update them with Search Console data once available.

| Cluster | Head terms | Long tail we can own first | Status |
| --- | --- | --- | --- |
| **Conversation (attack cluster)** | spanish conversation activities, spanish speaking activities, spanish conversation questions | b1 spanish conversation activities, a1/a2 spanish speaking activities, spanish conversation activities for adults, spanish conversation questions intermediate, no prep spanish conversation activities | **Shipped** (hub + 6 level pages + question bank) |
| Teacher resources (category) | spanish teacher resources, spanish teaching resources, resources for spanish teachers, interactive spanish lessons for teachers | spanish teacher resources for adults, online spanish teaching resources, ready to teach spanish lessons | **Shipped** (category hub) |
| Grammar | spanish grammar activities / lessons for teachers; CEFR planning; specific communicative tasks | por vs para activities; ser/estar; preterite/imperfect; subjunctive; conditional and si clauses; imperative; object pronouns | Phase 2: hub, A1–C1 planning, seven topic kits (five on existing guide URLs, two under the hub), About; see section 11 |
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
/spanish-grammar-lessons/conditional-tense-activities   A2–B2 conditional and si-clause activity kit
/guides/{how-to-teach-ser-vs-estar, preterite-vs-imperfect-activities, spanish-subjunctive-lesson-plan, spanish-imperative-activities, spanish-direct-indirect-object-pronouns}   Grammar activity kits rendered on their original guide URLs
/about                             Teaching practice and methodology
/free-spanish-lesson, /online-spanish-teaching-resources, /ele-recursos-profesores   Landings (indexable, template)
/resources, /resources/{slug}       Lesson library and 114 public lesson pages (EN, LearningResource schema; count computed from the catalog)
/guides, /guides/{slug}             63 guides (EN, Article + BreadcrumbList)
/autoestudio, /autoestudio/{level}, free weeks   Self-study course (ES)
/pricing, legal pages, free lesson routes
```

Not indexable (`noindex` in metadata + `X-Robots-Tag`, never robots.txt): `/ingresar`, `/cuenta`, `/acceso`, `/pro/*`, `/admin/*`, `/api/*`, `/auth/*`, `/demo/*`, `/s/*`, `/autoestudio/claim`, `/zeely`, and `/lp/*` except `/lp/spanish-teacher-resources` and `/lp/online-spanish-teaching-resources` (these are publicly indexable paid-conversion pages). PRO lesson routes redirect anonymous visitors to `/acceso`, so their public representation is the `/resources/{slug}` page.

### Canonical and language rules

1. Exactly one canonical per page: the clean apex URL without query string (`canonicalUrl` in `app/seo.ts`). `?lang=` switches the UI language and stores a cookie; it never creates a second indexable URL. Since 2026-10-14 the Worker also answers a GET/HEAD with `?lang=` on any indexable page with a 301 to the same URL without that parameter (other parameters kept, cookie set), because Search Console listed `?lang=en` copies next to the clean URLs; `/ingresar`, `/acceso`, `/auth/*`, the non-indexable `/lp/*` variants and other noindex surfaces keep the parameter (`redirectsLanguageQuery`). `www.spanishcue.com` and plain `http://` are normalized to `https://spanishcue.com` in one hop by the Worker before any route handling (308, covered by `tests/teacher-access.test.mjs`).
2. hreflang only for real pairs declared in `languagePairs`: two distinct URLs carrying the same content in two languages. The list is empty on 2026-10-07; `/ele-recursos-profesores` (campaign landing) is not a translation of `/spanish-teacher-resources` (content hub). Never emit hreflang to a `?lang=` variant.
3. The default UI language of English organic surfaces is English (`isEnglishDefaultPath`): `/resources*`, `/guides*`, `/spanish-*`, `/online-spanish-teaching-resources`, `/free-spanish-lesson`, `/lp/*` (except the Spanish landing).
4. robots.txt disallows `/api/` only. Anything excluded from search must stay crawlable so Google can read the noindex.
5. Sitemap: clean URLs only, no parameters, no noindex pages, `lastModified` only where it is truthful (guides). The two indexable `/lp/` purchase URLs have high internal sitemap priority (a crawl hint, not a ranking guarantee). Generated in `app/sitemap.ts`.

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
- Edge caching of anonymous organic HTML (shipped 2026-10-12 for the organic cluster, guides, lesson previews and About); Core Web Vitals check on real devices still pending.
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

**Extension, 2026-10-12.** A second SERP pass on 16 teacher-intent queries (imperative/commands, reflexive verbs, gustar, present-tense conjugation, object pronouns, grammar games for adults, future, present perfect, conditional, si clauses, communicative grammar lesson plans, B1 grammar activities for teachers, and three conversation long-tail candidates) found teacher blogs (misclaseslocas.com, speakinglatino.com, worldlanguagecafe.com, ailespanol.com), marketplaces (TES, TPT, Teach Simple, Twinkl) and OER or learner sites (COERLL, Lumen, LibreTexts, Mango, Kwiziq). Three more kits were justified by teacher intent **and** catalog depth: conditional and si clauses (six classrooms 146, 31, 214, 219, 23, 152; no SpanishCue URL owned the intent, so a new URL under the hub), imperative (classroom 145 plus 213 and 148; the existing guide was upgraded in place) and object pronouns (106, 46, 114; existing guide upgraded in place). Not built, with reasons: present-tense conjugation (worksheet and learner-tool SERP; the A1 level page already owns routines), reflexive verbs and gustar (one or no dedicated classroom), future and present perfect (two classrooms each, weak or spammy SERPs), grammar games for adults (learner intent; would repeat the hub). They stay in the queue below. The hub H1 now carries the head term (“Spanish grammar activities for teachers …”), the kit count is computed from data, and the hub lists the six remaining grammar teaching guides.

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
| `/spanish-grammar-lessons/conditional-tense-activities` | Teach the conditional and si clauses through advice, plans and hypothetical deals (A2–B2) | Spanish conditional tense activities, si clauses speaking activity, hypothetical situations Spanish class | Subjunctive kit owns recommendations and past requests; B1/B2 level pages own the overview; lesson 146's `/resources/*` page owns its own preview. |
| `/guides/spanish-imperative-activities` | Teach commands through directions, a recipe and rules (A2–B1) | Spanish imperative activities, Spanish commands activities for class | No `/spanish-grammar-lessons/imperative…` page: the guide URL keeps its history. The A2 level page owns beginner instructions only as part of its overview. |
| `/guides/spanish-direct-indirect-object-pronouns` | Teach direct and indirect object pronouns through gifts, favours and messages (A1–B1) | Spanish object pronouns activities, direct and indirect object pronouns lesson | Guide URL preserved; the A1 level page owns broad beginner planning; classroom 114 keeps its own B1 preview. |
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

Growth navigation adds Grammar and About. Since 2026-10-12 the teaching-guides index links the grammar hub and About, the indexable marketing landings' footer links About, the hub lists six further grammar teaching guides (articles, demonstratives, possessives, communicative grammar, 45-minute planning, psycholinguistics), every kit links every other kit, and each level page links the kits covering its level (A1: ser/estar, object pronouns; A2: past, ser/estar, imperative, conditional; B1: subjunctive, past, por/para, conditional, imperative; B2: subjunctive, conditional; C1: subjunctive). Teacher resources adds contextual grammar-level links. Grammar resources and grammar guides now use grammar cross-links; conversation cross-links remain as before. Footer links About alongside the existing grammar hub. Every new page has a free classroom entry, product previews, a pricing link, an intent-owning parent, siblings and useful related resources. Landing analytics includes grammar descendants, the three enhanced topic guides and About, using existing consent and attribution rules.

New sitemap entries: five grammar levels, por/para, About; the conditional kit since 2026-10-12. The two guides upgraded on 2026-10-12 keep their entries with a truthful 2026-10-12 review date. The three improved guides keep existing entries with a truthful 2026-10-07 review date. Every page uses a clean apex canonical, index/follow, server HTML and a normal 200 status; unknown slugs return 404. Query parameters, locale switches and ad click IDs cannot change canonical ownership. `/lp/spanish-grammar-lessons` retains the existing campaign template and noindex policy.

### Performance decision

New surfaces are server components with metadata-only catalog imports and native disclosure/audio controls. No new packages, client filtering bundle, fonts or game/Three.js imports. Lesson previews have explicit dimensions and lazy loading outside the hero; the hero reserves its aspect ratio. The one free audio uses preload=none. Full classroom JSON and protected audio are not imported or exposed.

Edge cache for anonymous organic HTML (2026-10-12). The Worker serves `isEdgeCacheablePath()` pages (`/about`, `/resources*`, `/guides*`, `/spanish-teacher-resources`, `/spanish-conversation-activities*`, `/spanish-conversation-questions`, `/spanish-grammar-lessons*`) from Cloudflare's edge cache when the request is a GET with no query string, no `Cookie`, no `Authorization` and no client-navigation header (`rsc`, `next-router-*`, `next-url`). Why this is safe: those routes are not identity-aware (the Worker strips every identity header before rendering, so signed-in and anonymous visitors already receive the same HTML); the only per-visitor input, the `spanishcue_locale` cookie or `?lang=`, bypasses the cache in both directions; only a 200 `text/html` response without `Set-Cookie` is stored; the key includes the deployment and the build id (`GITHUB_SHA` injected through Vite `define`), so a new deployment never serves the previous build; the edge TTL is 600 s. Browsers receive `public, max-age=0, must-revalidate` (they always revalidate) plus `X-SpanishCue-Cache: HIT|MISS`; every other HTML response keeps `private, no-store`. `tests/edge-cache-policy.test.mjs` and `tests/edge-cache-rendered.test.mjs` cover the allowlist, the bypasses (cookie, `?lang=`, UTM, RSC, Authorization, HEAD), identical bytes on a hit, no localized copy leaking into the anonymous key, and `private, no-store` on home, pricing, lessons, campaign landings, account redirects and the session API. Expected effect: crawlers and first visits get the HTML from the edge instead of a Worker render; no Core Web Vitals figure is claimed until field data shows it. On `*.workers.dev` (staging) the Cache API may always miss; a miss is a normal render. Existing immutable/static media caching remains active. The root layout still brings shared auth/analytics/report/consent overhead; do not claim zero client JavaScript site-wide. No measured Core Web Vitals improvement is claimed.

### Search Console historical read (2026-10-12)

Pulled through the connected `sc-domain:spanishcue.com` property for 2026-07-01 → 2026-10-11. Totals are tiny and mostly predate Phase 1, so they are clues, not a verdict: 13 queries with impressions (none above 2), 3 clicks in total (`/contact`, `/latinoamerica-al-oido`, `/spanish-conversation-activities`). Pages by impressions: `/spanish-grammar-lessons` 21 (average position 11.1), `/spanish-teacher-resources` 15 (15.5), `/` 11, `/spanish-conversation-activities` 10 (15.2, one click). Teacher-intent queries already surfacing: “resources for spanish teachers”, “spanish teaching resources”, “activities spanish”, “preguntas para clase de conversacion en español”. Legacy `?lang=en` / `?lang=es` variants still appear as separate pages (`/clase/201?lang=en`, `/ele-recursos-profesores?lang=en`, `/spanish-conversation-activities?lang=es`); the Phase 1 canonicals should consolidate them. Watch Pages → “Duplicate, Google chose different canonical” before acting. No content change was made from this data.

### Long-tail conversation pages: none added (2026-10-12)

“Spanish conversation activities for adults” and “… for online lessons / Zoom” return local class listings and course pages (community programs, active.com, coursehorse): enrolment intent, not teacher resources. “No-prep Spanish speaking activities” returns marketplaces (TES, Teach Simple, TPT) plus speakinglatino's free list: teacher intent, but the conversation hub already owns ready-to-teach as a secondary term and a second page would cannibalize it. Decision: zero new conversation pages. Revisit only if Search Console shows the hub earning impressions for “no prep” variants without ranking for them.

### Grammar content queue and cannibalization warnings

Queue, in order, each only with catalog depth and SERP evidence: present tense for adult beginners (classrooms 140, 3, 111; needs a teacher-intent angle beyond worksheets), future and conjecture (144, 153), present perfect and experiences (141, 149), relative clauses (218, 234), reported speech (233), connectors and contrast (211, 217, 220, 235). C2 stays an anchor on the hub until contemporary C2 classrooms exist.

Warnings: never add `/spanish-grammar-lessons/ser-vs-estar`, `/…/preterite-vs-imperfect`, `/…/subjunctive`, `/…/imperative` or `/…/object-pronouns` pages; those intents live on the guide URLs. Do not create a “grammar games” page that repeats the hub. Level pages stay planning overviews and a kit owns one teaching problem. `/sistema-verbal` owns the verbal-system map; do not duplicate it in English under the hub. Conversation cluster copy stays untouched until it has 90 days of data.

### Next five high-value moves

1. After 14–28 days, inspect GSC by grammar URL and query for the seven kits and five level pages (impressions, position, “Discovered – currently not indexed”), and confirm the legacy `?lang=` URLs consolidate into the clean canonicals. Fix indexing problems before expanding.
2. Confirm the edge cache on production (`curl -sI` without cookies twice: `X-SpanishCue-Cache: HIT`, `public, max-age=0, must-revalidate`) and compare TTFB; only then consider widening it to `/sistema-verbal` or the marketing landings, which would first need to stop being identity-aware.
3. Measure organic free-lesson starts, teacher signups and paid conversion by grammar entry page; verify attribution end to end before judging conversion value.
4. Build the listening cornerstone from the real audio catalog, with public samples and distinct teacher tasks, if the next research pass supports it; take the next grammar kit from the queue above, one per PR, only with evidence.
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

## 12. Phase 3: deep clean, indexation and 2027 outlook (2026-10-14)

Owner ask (2026-10-14): benchmark the best Spanish sites for teachers and learners, read what is actually searched, deep-clean the site for indexing, project 2027 and leave a site Google can rank organically. Full Spanish report: `/mnt/project-files/seo/informe-seo-fase-3-limpieza-2027.md`; research annexes in `/mnt/project-files/seo/fase3/`.

### Search Console read (2026-07-01 → 2026-10-13, `sc-domain:spanishcue.com`)

The connected Windsor connector also carries a second property (`www.logocutsvg.com`, an unrelated site); every figure below is filtered to spanishcue.com. Totals stay tiny: 3 clicks in the whole period (`/contact`, `/latinoamerica-al-oido`, `/spanish-conversation-activities`), 21 impressions for `/spanish-grammar-lessons` (average position 11), 16 for `/spanish-teacher-resources`, 11 for `/`. Teacher-intent queries with impressions: “resources for spanish teachers” (position 70), “spanish teaching resources” (78), “preguntas para clase de conversacion en español” (29). The one structural signal is duplication: `/clase/201?lang=en` had 15 impressions against 9 for `/clase/201`, and `/ele-recursos-profesores?lang=en` 5 against 2; the same pattern appears on `/el-hotel-de-lo-imposible`, `/la-fabrica-de-los-nombres`, `/latinoamerica-al-oido` and `/spanish-conversation-activities`. Nothing in this data supports copy changes; it supports consolidation and patience (the cluster pages are days to weeks old).

### Technical audit (local crawl of the built Worker, 642 URLs, 2026-10-14)

Healthy and left alone: the sitemap lists 241 URLs, all answer 200 and none carries noindex; robots.txt disallows only `/api/`; `/lp/*`, account, API, demo and `/autoestudio/clase/*` carry `noindex` in both the meta tag and `X-Robots-Tag`; parameter variants (`?level=`, `?room=`, `?reference=1`, UTM) canonicalize to the clean path; every JSON-LD block parses (Organization+WebSite on the home, CollectionPage+BreadcrumbList on the hubs, WebPage+BreadcrumbList on level pages, AboutPage, LearningResource on the 114 resource pages, Article+BreadcrumbList on the guides); unknown URLs return a real 404; trailing slashes 308 to the clean path; legacy `/clase/:id` lessons keep their own canonical; PRO lesson routes redirect anonymous visitors to `/acceso` (noindex); no broken internal link.

Fixed in this phase: legacy `?lang=` URLs now 301 to the clean URL (see §4 rule 1); the anonymous edge cache explicitly skips vinext `.rsc` payload requests. `www.spanishcue.com` and `http://` were already normalized by the Worker (308, one hop, tested); a fetch of `https://www.spanishcue.com/about` from the build container returned the apex page content, which is consistent with that redirect being followed but could not confirm the status code.

Known and deliberately not changed (with the reason): meta descriptions above 160 characters on `/spanish-teacher-resources`, `/spanish-conversation-activities`, `/spanish-conversation-questions`, `/autoestudio` and fifteen guides (Google truncates or rewrites; the first 155 characters already carry the message; edits need the English-copy review manifest); the retired lesson 26 keeps `/resources/spanish-conversation-activity-a1-estados-unidos-coast-to-coast`, which links to the 308 at `/estados-unidos-basico` and overlaps the ESTADOS UNIDOS A2–B1 page (the legacy-URL preservation tests require the URL to resolve); URL case variants return 404 rather than redirecting; `/demo/noche-abierta` renders two H1s (noindex demo); `/latinoamerica-al-oido` lacks the “| SPANISHCUE” title suffix; `/resources`, `/guides` and the legal pages carry no JSON-LD. Not verifiable from the container: the live status codes of the `www`/`http` normalization and the Search Console index-coverage report.

### Benchmark and query themes (annex A)

Teacher queries in English are held by teacher blogs (speakinglatino.com, misclaseslocas.com, spanishmama.com, fluentu.com/blog/educator-spanish), marketplaces (tes.com, Teachers Pay Teachers via SpeakingLatino, comprehensibleclassroom.com) and template sites (storyboardthat.com, wizer.me, boomlearning.com). Learner queries are held by roundup publishers and tools (lingua.com, SpanishDict, Dreaming Spanish, Clozemaster, Conjuguemos, newsinslowspanish.com, kwiziq). No sourced search volume exists for any of the tracked queries; the themes with visible teacher intent and no strong owner are “spanish sub plans”, “first day of spanish class activities”, “spanish games for the classroom”, “spanish listening activities” and “ser vs estar activities”. SpanishCue's structural advantage against all of them is the interactive, sequenced, CEFR-labelled classroom with a free preview; its gap is the absence of printable/projectable versions and of visible update dates.

### 2027 outlook (annex B, facts dated and projections labelled)

Google's AI optimization guide (2026-05-15, updated 2026-07-10): no llms.txt, no special markup or Markdown is needed; structured data is not required for AI answers but still drives rich results; unique, non-commodity content is the long-run factor. AI Overviews appear on roughly a quarter to a half of tracked queries and cut organic clicks on informational queries (Pew: 8% vs 15%; Ahrefs: position-1 CTR −58% with an AI Overview); AI-assistant referrals are about 1% of web traffic but convert several times better (Clarity 1.66% vs 0.15%). Projection for SpanishCue: queries that need a deliverable (a lesson plan, an activity, slides) stay defensible while definition queries lose clicks; being cited becomes a KPI (Seer: cited brands earn ~2.2× the clicks of uncited ones); publish original, dated, author-named material (CEFR/PCIC mappings, 45-minute timings, error lists); keep schema accurate; prune near-duplicates; expect core updates around March and May and spam updates through the year; crypto and stock-market conditions have no sourced bearing on a USD 15 teacher subscription beyond ad budgets and consumer confidence.

### Next five high-value moves (2026-10-14)

1. Owner checks (one minute each): open `http://www.spanishcue.com/about` in a browser and confirm it lands on `https://spanishcue.com/about`; in Search Console, open Pages → “Not indexed” and the sitemap report, and request indexing for `/spanish-grammar-lessons`, `/spanish-grammar-lessons/conditional-tense-activities` and `/about`.
2. In 14–28 days read GSC again: the `?lang=` and `www` duplicates must disappear from the Pages report; grammar kit URLs should start to show impressions. Do nothing to copy before that.
3. Publish one “bookmarkable” teacher page where no strong owner exists, built from real lessons: Spanish sub plans (a free, printable 45-minute plan per level pointing at the free classrooms) or first-day activities; one URL, dated, with an author line.
4. Add printable/projectable companions (PDF or slides) to the three best free classrooms and the kits; it is the format every winning competitor offers and the one SpanishCue lacks.
5. Record three short lesson demos for YouTube and link them from the hubs (VideoObject schema only if the video is on the page): the single most cited source type in AI answers for education queries.

## 13. Two audiences, one brand (2026-10-15)

SpanishCue now speaks to teachers and to learners without splitting the brand or the platform.

| URL | Audience | Primary intent (default language Spanish) | Secondary terms | Must not compete with |
| --- | --- | --- | --- | --- |
| `/` | Teacher | Brand + ready-to-teach library (“clases de español listas para enseñar”) | interactive Spanish lessons for teachers (EN copy) | Unchanged; stays the main teacher landing. |
| `/para-profesores` | Teacher | “clases interactivas para profesores de español” (campaign-ready commercial landing) | Spanish lesson materials, Spanish teaching activities | `/ele-recursos-profesores` keeps “recursos ELE”; `/spanish-teacher-resources` keeps the English resource hub. |
| `/aprender-espanol` | Learner | “aprender español online con actividades interactivas” | learn Spanish online / through immersion, Spanish listening practice, Spanish grammar practice (bilingual hero line + EN copy) | `/autoestudio` keeps “curso de español autoestudio”. |

Rules:

- Both new pages are single-URL documents: one clean canonical, no hreflang (the UI language follows the locale cookie, like every other page), no `?lang=` variants, both in the sitemap. Each has its own title, description, H1, Open Graph image and `WebPage` JSON-LD with an `EducationalAudience` (`teacher` / `student`). No offers, ratings or reviews are declared.
- `/para-profesores` reuses the home hero component and image; its kicker (“Clases interactivas para profesores de español”) sits inside the H1 so the H1 differs from the home while the composition stays identical.
- The learner page promises only what works without a teacher today: the public Noche abierta demo (no sign-up, no card), the free Autoestudio A1 week and two free lessons (which ask for a free account after the first minutes, and the page says so). No student plan, price or checkout exists; add a learner offer only after a validated purchase path.
- The header selector (“Enseñar español / Aprender español”, “Teach Spanish / Learn Spanish”) is two plain links to `/` and `/aprender-espanol`; it never blocks the page.

Measurement:

- New events (none is a conversion): `audience_selected_teacher`, `audience_selected_student` (selector clicks), `teacher_demo_started` (teacher free-lesson CTAs), `student_demo_started` (learner experience CTAs).
- Every event now carries `audience` = `teacher` | `student` (page first, then the last choice in the tab; teacher by default). Register it as an event-scoped custom dimension in GA4 to segment reports.
- Teacher checkout and purchase stay the existing contract: `checkout_start` (one per opened checkout) and the server-verified `trial_purchase` / `first_subscription_payment` (the only Google Ads purchase). `teacher_checkout_started` / `teacher_purchase_completed` are those events filtered by `audience = teacher`; no duplicate events were added. A learner purchase event will exist only with a learner checkout.
- Campaign naming: `utm_campaign` starts with `teacher_` for teacher campaigns and `student_` for future learner campaigns; organic traffic has no UTM. Teacher ads keep pointing at `/lp/*` or `/para-profesores`; learner ads, when they exist, point at `/aprender-espanol`.

## 2026-10-19: commercial-intent landing differentiation

The two indexable purchase routes are not interchangeable campaigns. They now use
distinct search-result titles and have unique, server-rendered teaching workflows:

- `/lp/spanish-teacher-resources`: broad interactive Spanish lesson resources
  for teachers; links to the teacher hub, grammar hub and lesson previews.
- `/lp/online-spanish-teaching-resources`: video-call teaching intent for
  one-to-one tutors; links to the online teaching guide and student self-study.

The growth-page navigation and conversation/grammar hubs now link explicitly
to the primary purchase landing. This complements the already merged sitemap
and noindex changes in PR #228. Avoid mass-producing near-identical landing
pages: Google's canonical selection, indexing and page-one ranking remain
discretionary and require Search Console evidence after deployment.

**Verification**: CI regression checks, live response headers and rendered HTML,
then Search Console URL Inspection and query/page data after recrawling.
Sitemap priority values are crawl hints, not ranking signals.

## 14. Spanish ELE cluster `/material-ele` (2026-10-30)

Owner ask (2026-10-30): rank in Google's top 5 for Spanish searches by teachers looking for material to teach Spanish, competing with Spanish-language ELE sites, and turn that traffic into direct purchases on spanishcue.com. Every earlier cluster is English-first; Spanish-speaking ELE teachers search in Spanish («material ELE», «actividades ELE», «recursos ELE para profesores», «actividades de subjuntivo», «preguntas para clase de conversación»). A SERP spot check on 2026-10-30 returned PDFs, Gumroad stores, academic papers and ministry catalogs for these queries: few pages that give a teacher a usable activity directly. That is the opening.

What shipped: hub `/material-ele` (CollectionPage + FAQPage), six level pages `/material-ele/{a1..c2}` and seven topic pages (`ser-y-estar`, `indefinido-e-imperfecto`, `subjuntivo`, `por-y-para`, `preguntas-de-conversacion`, `juegos-para-clase-de-espanol`, `primera-clase-de-espanol`), all rendered from `app/material-ele/data.ts`. Each page carries original activities (steps, prompts, model answer, correction, online/group adaptation), an exercise with answers in native disclosures where the topic suits one, common teaching errors, real catalog lessons (free first) and a yellow «Suscribirse · US$15,50 al mes» band to `/pricing`. Spanish-first (`isEnglishDefaultPath` false), edge-cached like the English clusters, in the sitemap, linked from the global footer. Tests: `tests/material-ele-seo.test.mjs` (data, sitemap, metadata, honest copy) and `tests/material-ele-rendered.test.mjs` (built Worker HTML).

Ownership: the English guides keep the English intents; `/material-ele/*` owns the Spanish ones. `/ele-recursos-profesores` stays a conversion landing; do not add a second Spanish hub. Batch 2 (2026-10-30) added gustar, imperativo, pronombres-de-objeto, conectores and estilo-indirecto; then comprension-auditiva (listening lessons A1–C2, the only exercise allowed to use comprehension questions instead of gaps). Batch 3 (2026-10-31): verbos-reflexivos, futuro, preterito-perfecto, condicional. Batch 4 (2026-10-31): perifrasis-verbales, verbos-de-cambio (covers ser/estar with meaning-changing adjectives), acentuacion, vocabulario-por-temas. Next: expresiones de tiempo, comparativos, preposiciones, voz pasiva e impersonal. Measure in Search Console from ~2026-11-20 (filter to spanishcue.com); new pages typically need 4–12 weeks to settle and top-5 positions for head terms usually need links from other ELE sites.

## 15. Spanish resource pages (/recursos), 2026-10-31

Every lesson resource page now exists in both languages: `/resources/<en-slug>` (English, unchanged) and `/recursos/<es-slug>` (Spanish, `app/recursos`), built from the same catalog data in `app/resource-seo.ts` (`recursoPathForLesson`, `lessonForRecursoSlug`, `resourceLanguagePair`). They are the first real hreflang pairs: `languageAlternates` in `app/seo.ts` resolves them dynamically, so both pages and both sitemap entries carry `es`, `en` and `x-default` (English). The Spanish hub `/recursos` reuses `ResourceCatalog` with `locale="es"`. Both prefixes are edge-cached. Tests: `tests/recursos-seo.test.mjs` (pairs, slugs, sitemap) and `tests/recursos-rendered.test.mjs` (built Worker). Spanish pages link to `/material-ele/<level>`; keep `/recursos` as the Spanish catalog and `/material-ele` as the Spanish activities cluster, never a third Spanish listing.
