# SpanishCue organic growth strategy (source of truth)

Status: Phase 40 foundation, 2026-10-07. Owner: Ale. Maintainer of this document: whoever ships SEO work; update it in the same PR as the change.

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
| Grammar | spanish grammar lessons, how to teach [tense], ser vs estar activities, preterite vs imperfect activities | teach spanish subjunctive activities, spanish imperative activities | Landing + 13 guides exist; hub rebuild is next |
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
/spanish-grammar-lessons            Grammar landing (EN) — next hub to rebuild
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
- Google Search Console: **not connected from this repository and no access was available during Phase 40.** Checklist to connect it:
  1. Verify `spanishcue.com` as a Domain property (DNS TXT) or URL-prefix property (HTML meta tag added to `app/layout.tsx` metadata `verification.google`).
  2. Submit `https://spanishcue.com/sitemap.xml`.
  3. Request indexing for the hub, the six level pages, the question bank and the teacher-resources hub.
  4. After 14 days, export Performance by page and by query; check Pages → "Excluded" for `?lang=` duplicates (expected to consolidate) and for `/acceso` (expected "Excluded by noindex").
- KPIs per quarter: indexed organic pages, impressions and clicks per cluster, organic `free_lesson_start`, organic signups, organic PRO conversions.

## 8. Performance notes

- All organic pages are server-rendered by the Worker with `Cache-Control: private, no-store` (identity-aware layout). Fine for crawlers, but HTML is never cached at the edge. P1: serve anonymous responses for organic hubs with `public, s-maxage` when the layout can skip identity for them.
- Images on organic pages use `next/image` with explicit dimensions and lazy loading; the site runs `images.unoptimized`, so provide pre-sized WebP assets.
- CSS for the growth pages is one CSS module; no client JavaScript except the question-bank filters.

## 9. Hard rules (never)

Hidden text or links, cloaking, keyword stuffing, doorway pages, duplicate AI pages, fake reviews/ratings/authors/data, purchased links, parasite SEO, expired-domain tricks, deceptive redirects, canonical + noindex on the same page, hreflang to parameter URLs, robots.txt blocks on pages that need noindex, FAQPage/HowTo rich-result markup used for decoration, and ranking guarantees in any copy.

## 10. Roadmap (12 months)

**NOW (shipped in this PR, pending deploy)**

- Technical foundation: clean canonicals, real-pair-only hreflang, robots/noindex alignment, `X-Robots-Tag`, sitemap rebuild, Organization/WebSite schema, hidden block removed, homepage title/description.
- Attack cluster: conversation hub, six level pages, 150-question bank, teacher-resources hub, campaign `/lp/*` variants, internal links, tests, this document.

**Next 30 days**

1. Deploy to production after preview inspection; connect Search Console; submit sitemap; request indexing for 10 URLs.
2. Rebuild `/spanish-grammar-lessons` as a grammar hub (by tense and level) using `app/growth`, linking the 13 grammar guides and the verbal-system map.
3. Add 2–3 conversation long-tail pages with proven demand (candidates: "Spanish conversation activities for adults", "Spanish icebreakers for adult beginners", "no-prep Spanish conversation lesson plan").
4. Point live ads to `/lp/*`; update GOOGLE_ADS_START.md and MARKET-TEST.md final URLs.
5. Decide the Spanish-language pair strategy (`/recursos-profesores-espanol` hub) so `languagePairs` can hold its first real entry.

**30–90 days**

- Listening hub (`/spanish-listening-activities`) with level pages built from the 8 listening worlds.
- Author/E-E-A-T page with Ale's real teaching background (facts only) and an "About SpanishCue" page; link from guides.
- Edge caching of anonymous organic HTML; Core Web Vitals check on real devices.
- `/resources` filters in the URL (`?level=`, `?skill=`) with canonical to the clean path, so hubs can deep-link.
- First outreach: 10 teacher communities/newsletters receive the question bank (no paid links).

**3–6 months**

- Grammar level pages (A1–C2) and "how to teach X" cluster expansion where guides already rank.
- Pronunciation and vocabulary hubs if Search Console shows impressions.
- Programmatic improvements to `/resources/{slug}`: per-level sections for multi-level worlds, teacher notes, related activities from the cluster.
- Review and prune: pages with no impressions after 90 days get merged or removed.

**6–12 months**

- Spanish-language teacher cluster (ELE) with true hreflang pairs.
- Lesson-plan generator or "build a 45-minute conversation lesson" interactive tool as a linkable asset.
- Case studies with real teachers (consent, real names) replacing the absence of testimonials.
- Quarterly content audit against this document; retire landings that duplicate hubs.
