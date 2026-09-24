# Tutor/Business SEO 50-Page Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 50 high-quality, indexable tutor/business guides that attract Spanish teachers from Preply, italki, other tutoring marketplaces, pricing/business queries, operations/retention queries, and tutoring niches, while preserving SpanishCue's paid lesson protection.

**Architecture:** Refactor the current single `app/teaching-guides.ts` data file into focused guide-data modules behind the same public exports, then add tutor/business content in five editorial batches. The article renderer gains platform freshness/sources, related-guide links, and an independence note; the hub gains two pillars and cluster grouping. All new guides continue to enter the existing sitemap through the aggregated `teachingGuides` export.

**Tech Stack:** Next.js 16.2.6, React 19.2.6, TypeScript 5.9.3, Node >=22.13.0, node:test, esbuild, existing CSS modules, existing GitHub CI.

**Spec:** `docs/superpowers/specs/2026-09-24-seo-tutor-business-50-page-expansion-design.md`

## Global Constraints

- Add exactly 50 tutor/business guides from the approved spec.
- Preserve all existing guide slugs and public URLs.
- Keep paid lesson routes protected; editorial pages link primarily to public `/resources/[slug]` pages.
- Do not change Firebase, auth, D1, Paddle, PayPal, subscription state, environment variables, or production data.
- Platform facts must be separated from SpanishCue editorial advice.
- Current platform commissions, trial rules, ranking criteria, payouts, acceptance rules, subscriptions, or badges require current first-party sources.
- italki and AmazingTalker pages must omit unsupported volatile facts when a current first-party source is unavailable.
- Platform pages must have `platform` and `lastReviewed`.
- Pages containing volatile platform facts must have at least one HTTPS first-party `officialSources` entry.
- Do not use fake reviews, fake testimonials, invented statistics, fake case studies, or guarantees about ranking, students, Super Tutor status, conversions, or income.
- Every new page must contain substantial original content, at least four substantive sections, at least one Spanish-teacher-specific section, 1–4 related lesson IDs, and 2–4 related guide slugs.
- Preserve existing `Article` and `BreadcrumbList` structured data.
- Do not add dependencies.
- Keep Node engine floor at `>=22.13.0`.
- Run targeted guide tests before each batch commit and the repository's full CI before each batch merge.
- The implementation must remain compatible with the separate approved 50-page teaching/topic expansion.

## Review Focus

- **Platform facts without sources:** a guide that sets `containsVolatilePlatformFacts: true` must fail validation unless at least one HTTPS official source is present; Task 1 adds this test.
- **Implementation-order compatibility:** the guide aggregator must work with only the current 13 core guides plus this 50-page expansion, and later accept additional teaching-topic cluster files without changing route code; Task 1 tests preserved core slugs and modular exports.
- **Broken internal graph:** every tutor/business guide must link to existing guide slugs, never itself, and receive at least one inbound tutor/business guide link; Task 6 adds the final graph test.
- **Stale freshness metadata:** platform pages must have an ISO review date and structured-data `dateModified` must use that date; Tasks 1 and 2 test the metadata and renderer contract.
- **Thin or duplicated pages:** every tutor/business guide must have a unique slug/title, at least four sections, a minimum body-text threshold, and related lessons that exist in the catalog; Task 1 creates the validator and each batch reruns it.

---

## File Structure

### Existing files to modify

- `app/teaching-guides.ts` — become a compatibility barrel that re-exports the modular guide API.
- `app/guides/page.tsx` — render pillar and cluster groupings instead of one flat grid.
- `app/guides/[slug]/page.tsx` — render related guides, platform freshness/source UI, independence note, and accurate structured-data dates.
- `app/guides/guides.module.css` — styles for pillar sections, cluster headings, related-guide links, platform note, and source list.
- `package.json` — add `test:guides` and run it in the normal `npm test` chain.

### New files to create

- `app/guides/data/types.ts` — guide types and platform/source types.
- `app/guides/data/core.ts` — the existing 13 guides, content preserved.
- `app/guides/data/platform-sources.ts` — reusable first-party source constants.
- `app/guides/data/preply.ts` — 14 Preply guides.
- `app/guides/data/italki.ts` — 7 italki guides.
- `app/guides/data/other-platforms.ts` — 4 Verbling/Superprof/AmazingTalker guides.
- `app/guides/data/pricing-business.ts` — 10 pricing/business guides.
- `app/guides/data/operations-retention.ts` — 9 operations/retention guides.
- `app/guides/data/tutor-niches.ts` — 6 niche guides.
- `app/guides/data/index.ts` — aggregate exports and maps.
- `app/guides/guide-format.ts` — pure helpers for review-date display and source/freshness behavior.
- `tests/teaching-guides-seo.test.mjs` — structural, graph, source, lesson-ID, and count tests.

The separate teaching/topic 50-page expansion may later add additional cluster files under `app/guides/data/`; it must only need to register them in `index.ts`.

---

### Task 1: Modular guide foundation, validation, and platform metadata renderer

**Files:**
- Create: `app/guides/data/types.ts`
- Create: `app/guides/data/core.ts`
- Create: `app/guides/data/platform-sources.ts`
- Create: `app/guides/data/preply.ts`
- Create: `app/guides/data/italki.ts`
- Create: `app/guides/data/other-platforms.ts`
- Create: `app/guides/data/pricing-business.ts`
- Create: `app/guides/data/operations-retention.ts`
- Create: `app/guides/data/tutor-niches.ts`
- Create: `app/guides/data/index.ts`
- Create: `app/guides/guide-format.ts`
- Modify: `app/teaching-guides.ts`
- Modify: `app/guides/[slug]/page.tsx`
- Modify: `app/guides/guides.module.css`
- Modify: `package.json`
- Create: `tests/teaching-guides-seo.test.mjs`

**Interfaces:**
- Consumes: existing `Lesson` objects from `app/lesson-catalog.ts`, `resourcePathForLesson(lesson)`, and `resourceLevelLabel(lesson)`.
- Produces:
  - `TeachingGuide`
  - `GuidePillar`
  - `GuideCluster`
  - `GuideOfficialSource`
  - `coreGuides: TeachingGuide[]`
  - `tutorBusinessGuides: TeachingGuide[]`
  - `teachingGuides: TeachingGuide[]`
  - `teachingGuideBySlug: Map<string, TeachingGuide>`
  - `formatReviewedDate(value: string): string`
  - `guideModifiedDate(guide: TeachingGuide): string`

- [ ] **Step 1: Write the failing modular-data and validation test**

Create `tests/teaching-guides-seo.test.mjs` with a bundled import so Node can inspect TypeScript data without adding runtime dependencies:

```js
import assert from "node:assert/strict";
import test from "node:test";
import { build } from "esbuild";

async function loadGuideModule() {
  const result = await build({
    stdin: {
      contents: [
        'export * from "./app/teaching-guides.ts";',
        'export { lessons } from "./app/lesson-catalog.ts";',
      ].join("\n"),
      resolveDir: process.cwd(),
    },
    bundle: true,
    write: false,
    format: "esm",
    platform: "node",
  });
  return import(
    `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`
  );
}

const mod = await loadGuideModule();
const { teachingGuides, tutorBusinessGuides, lessons } = mod;

test("the existing 13 guide URLs survive the modular refactor", () => {
  const expected = [
    "how-to-teach-spanish-online",
    "spanish-lesson-planning-45-minutes",
    "how-to-teach-spanish-grammar-communicatively",
    "psycholinguistics-for-spanish-teachers",
    "spanish-conversation-activities-by-level",
    "how-to-teach-ser-vs-estar",
    "preterite-vs-imperfect-activities",
    "spanish-subjunctive-lesson-plan",
    "spanish-imperative-activities",
    "spanish-direct-indirect-object-pronouns",
    "spanish-possessive-adjectives-lesson",
    "spanish-demonstratives-lesson",
    "spanish-articles-el-la-un-una",
  ];
  for (const slug of expected) {
    assert.ok(teachingGuides.some((guide) => guide.slug === slug), slug);
  }
});

test("guide slugs and titles are globally unique", () => {
  const slugs = teachingGuides.map((guide) => guide.slug);
  const titles = teachingGuides.map((guide) => guide.title);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(new Set(titles).size, titles.length);
});

test("tutor-business guides have substantial structure and valid lesson links", () => {
  const lessonIds = new Set(lessons.map((lesson) => lesson.id));
  for (const guide of tutorBusinessGuides) {
    assert.equal(guide.pillar, "tutor-business", guide.slug);
    assert.ok(guide.sections.length >= 4, guide.slug);
    assert.ok((guide.relatedLessonIds ?? []).length >= 1, guide.slug);
    for (const id of guide.relatedLessonIds ?? []) {
      assert.ok(lessonIds.has(id), `${guide.slug}: missing lesson ${id}`);
    }
    const body = guide.sections.flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.bullets ?? []),
    ]).join(" ");
    assert.ok(body.length >= 2500, `${guide.slug}: body is suspiciously short`);
  }
});

test("platform freshness metadata is truthful and source-safe", () => {
  for (const guide of tutorBusinessGuides.filter((item) => item.platform)) {
    assert.match(guide.lastReviewed ?? "", /^\d{4}-\d{2}-\d{2}$/, guide.slug);
    if (guide.containsVolatilePlatformFacts) {
      assert.ok((guide.officialSources ?? []).length > 0, guide.slug);
    }
    for (const source of guide.officialSources ?? []) {
      assert.match(source.url, /^https:\/\//, `${guide.slug}: ${source.url}`);
    }
  }
});
```

- [ ] **Step 2: Add the guide test to the normal test chain and verify failure**

Modify `package.json`:

```json
{
  "scripts": {
    "test:guides": "node --test tests/teaching-guides-seo.test.mjs"
  }
}
```

Insert `npm run test:guides` into the existing `test` script before the build step.

Run:

```bash
npm run test:guides
```

Expected: FAIL because `tutorBusinessGuides` and the modular guide files do not exist yet.

- [ ] **Step 3: Define the exact shared types**

Create `app/guides/data/types.ts`:

```ts
export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type GuidePillar = "teach-spanish" | "tutor-business";

export type GuideCluster =
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

export type GuidePlatform =
  | "Preply"
  | "italki"
  | "Verbling"
  | "Superprof"
  | "AmazingTalker";

export type GuideOfficialSource = {
  label: string;
  url: string;
};

export type TeachingGuide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  readingTime: string;
  keywords: string[];
  sections: GuideSection[];
  relatedHref: string;
  relatedLabel: string;
  pillar: GuidePillar;
  cluster: GuideCluster;
  publishedAt: string;
  relatedLessonIds?: number[];
  relatedGuideSlugs?: string[];
  platform?: GuidePlatform;
  lastReviewed?: string;
  officialSources?: GuideOfficialSource[];
  containsVolatilePlatformFacts?: boolean;
};
```

- [ ] **Step 4: Move the current 13 guides into `core.ts` without rewriting their prose**

Create `app/guides/data/core.ts`.

Copy the current 13 guide objects byte-for-byte for title, description, keywords, sections, related links, and lesson IDs. Add only:

```ts
pillar: "teach-spanish",
cluster: "<appropriate current cluster>",
publishedAt: "2026-09-24",
```

Use these cluster assignments:

```ts
const coreClusterBySlug = {
  "how-to-teach-spanish-online": "methodology",
  "spanish-lesson-planning-45-minutes": "methodology",
  "how-to-teach-spanish-grammar-communicatively": "methodology",
  "psycholinguistics-for-spanish-teachers": "methodology",
  "spanish-conversation-activities-by-level": "conversation",
  "how-to-teach-ser-vs-estar": "grammar",
  "preterite-vs-imperfect-activities": "grammar",
  "spanish-subjunctive-lesson-plan": "grammar",
  "spanish-imperative-activities": "grammar",
  "spanish-direct-indirect-object-pronouns": "grammar",
  "spanish-possessive-adjectives-lesson": "grammar",
  "spanish-demonstratives-lesson": "grammar",
  "spanish-articles-el-la-un-una": "grammar",
} as const;
```

- [ ] **Step 5: Create empty cluster modules and the aggregate index**

Each new content module initially exports an empty typed array, for example:

```ts
import type { TeachingGuide } from "./types";

export const preplyGuides: TeachingGuide[] = [];
```

Do the same for:

- `italkiGuides`
- `otherPlatformGuides`
- `pricingBusinessGuides`
- `operationsRetentionGuides`
- `tutorNicheGuides`

Create `app/guides/data/index.ts`:

```ts
export * from "./types";

import { coreGuides } from "./core";
import { preplyGuides } from "./preply";
import { italkiGuides } from "./italki";
import { otherPlatformGuides } from "./other-platforms";
import { pricingBusinessGuides } from "./pricing-business";
import { operationsRetentionGuides } from "./operations-retention";
import { tutorNicheGuides } from "./tutor-niches";

export const tutorBusinessGuides = [
  ...preplyGuides,
  ...italkiGuides,
  ...otherPlatformGuides,
  ...pricingBusinessGuides,
  ...operationsRetentionGuides,
  ...tutorNicheGuides,
];

export const teachingGuides = [
  ...coreGuides,
  ...tutorBusinessGuides,
];

export const teachingGuideBySlug = new Map(
  teachingGuides.map((guide) => [guide.slug, guide]),
);
```

Replace `app/teaching-guides.ts` with:

```ts
export * from "./guides/data";
```

- [ ] **Step 6: Create reusable first-party platform-source constants**

Create `app/guides/data/platform-sources.ts` with exact source objects:

```ts
import type { GuideOfficialSource } from "./types";

const source = (label: string, url: string): GuideOfficialSource => ({ label, url });

export const PREPLY_SOURCES = {
  commission: source(
    "Preply Help Center — Commission model",
    "https://help.preply.com/en/articles/4171383-preply-commission-model",
  ),
  trial: source(
    "Preply Help Center — Trial lessons",
    "https://help.preply.com/en/articles/4179487-how-to-book-a-trial-lesson",
  ),
  superTutor: source(
    "Preply Help Center — Super Tutor program",
    "https://help.preply.com/en/articles/6359318-the-super-tutor-program",
  ),
  superTutorMetrics: source(
    "Preply Help Center — Super Tutor metrics and criteria",
    "https://help.preply.com/en/articles/14880665-how-super-tutor-metrics-and-criteria-work",
  ),
  profile: source(
    "Preply Help Center — Profile headline and description guidelines",
    "https://help.preply.com/en/articles/4175164-4-profile-headline-and-description-guidelines",
  ),
  profileScore: source(
    "Preply Help Center — Profile score",
    "https://help.preply.com/en/articles/7863157-what-is-profile-score",
  ),
  video: source(
    "Preply Help Center — Video introduction guidelines",
    "https://help.preply.com/en/articles/4171392-5-video-introduction-guidelines",
  ),
  price: source(
    "Preply Help Center — How to choose the right price",
    "https://help.preply.com/en/articles/11833566-7-how-to-choose-the-right-price",
  ),
  availability: source(
    "Preply Help Center — Setting up availability",
    "https://help.preply.com/en/articles/4175356-6-setting-up-your-availability",
  ),
  discovery: source(
    "Preply Help Center — How students find tutors",
    "https://help.preply.com/en/articles/4178879-how-can-students-find-me",
  ),
} as const;

export const VERBLING_SOURCES = {
  teach: source("Verbling — Teach languages online", "https://www.verbling.com/teach"),
  overview: source(
    "Verbling Support — New teacher overview",
    "https://support.verbling.com/hc/en-us/articles/360007886158-NEW-TEACHERS-How-does-Verbling-work-and-what-should-I-know",
  ),
  applicationVideo: source(
    "Verbling Support — Teacher application video",
    "https://support.verbling.com/hc/en-us/articles/360007839257-How-do-I-record-my-teacher-application-video",
  ),
} as const;

export const SUPERPROF_SOURCES = {
  tutor: source("Superprof — Become a tutor", "https://www.superprof.com/tutor/"),
  payment: source(
    "Superprof Help — Tutor payment",
    "https://www.superprof.com/help/tutors/tutor-payment/how-to-get-paid/68/",
  ),
} as const;
```

Do not add an italki or AmazingTalker source constant until a qualifying current first-party URL has been verified.

- [ ] **Step 7: Add pure date helpers and their tests**

Create `app/guides/guide-format.ts`:

```ts
import type { TeachingGuide } from "./data";

export function guideModifiedDate(guide: TeachingGuide): string {
  return guide.lastReviewed || guide.publishedAt;
}

export function formatReviewedDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
```

Extend `tests/teaching-guides-seo.test.mjs` to bundle and assert:

```js
assert.equal(mod.guideModifiedDate({
  publishedAt: "2026-09-01",
  lastReviewed: "2026-09-24",
}), "2026-09-24");
assert.equal(mod.formatReviewedDate("2026-09-24"), "September 24, 2026");
```

Bundle `guide-format.ts` in the test entry so these functions are exported.

- [ ] **Step 8: Update the article renderer for platform/source metadata and related-guide links**

In `app/guides/[slug]/page.tsx`:

1. import `guideModifiedDate` and `formatReviewedDate`
2. resolve `relatedGuideSlugs` through `teachingGuideBySlug`
3. set structured-data dates from guide metadata
4. render platform review note when `guide.platform` exists
5. render official sources only when present
6. render the platform independence note
7. render "Related teaching guides" before the lesson CTA

Use this exact structured-data date behavior:

```ts
datePublished: guide.publishedAt,
dateModified: guideModifiedDate(guide),
```

Use this platform note copy:

```tsx
{guide.platform ? (
  <aside className={styles.platformNote}>
    <strong>Platform information reviewed: {formatReviewedDate(guide.lastReviewed!)}</strong>
    <p>
      SpanishCue is an independent teaching-resource platform and is not affiliated with {guide.platform}.
    </p>
  </aside>
) : null}
```

Use this related-guide block:

```tsx
{relatedGuides.length ? (
  <section className={styles.relatedGuides}>
    <h2>Related teaching guides</h2>
    <div className={styles.relatedGuideGrid}>
      {relatedGuides.map((item) => (
        <Link href={`/guides/${item.slug}`} key={item.slug}>
          {item.title}
        </Link>
      ))}
    </div>
  </section>
) : null}
```

Use this source block:

```tsx
{guide.officialSources?.length ? (
  <section className={styles.platformSources}>
    <h2>Platform sources</h2>
    <ul>
      {guide.officialSources.map((source) => (
        <li key={source.url}>
          <a href={source.url} rel="noreferrer">{source.label}</a>
        </li>
      ))}
    </ul>
  </section>
) : null}
```

- [ ] **Step 9: Add CSS for the new metadata blocks**

Add focused styles to `app/guides/guides.module.css` for:

- `.platformNote`
- `.platformSources`
- `.relatedGuides`
- `.relatedGuideGrid`

Keep the existing neutral editorial visual language. Do not introduce a new color system or brand treatment.

- [ ] **Step 10: Run foundation tests**

Run:

```bash
npm run test:guides
npm run lint
```

Expected: PASS with 13 preserved guides and 0 tutor-business guides.

- [ ] **Step 11: Commit the foundation**

```bash
git add app/teaching-guides.ts app/guides/data app/guides/guide-format.ts app/guides/[slug]/page.tsx app/guides/guides.module.css tests/teaching-guides-seo.test.mjs package.json
git commit -m "refactor: modularize teaching guide SEO data"
```

---

### Task 2: Batch 1 — Preply profile and trial funnel, pages 1–7

**Files:**
- Modify: `app/guides/data/preply.ts`
- Modify: `tests/teaching-guides-seo.test.mjs`

**Interfaces:**
- Consumes: `TeachingGuide`, `PREPLY_SOURCES`.
- Produces: the first 7 entries of `preplyGuides`.

- [ ] **Step 1: Add a failing batch-count and exact-slug test**

Add:

```js
test("Preply batch 1 exposes the approved seven URLs", () => {
  const slugs = tutorBusinessGuides
    .filter((guide) => guide.cluster === "preply")
    .map((guide) => guide.slug);
  assert.deepEqual(slugs, [
    "teach-spanish-on-preply",
    "preply-spanish-tutor-profile",
    "preply-headline-spanish-tutor",
    "preply-description-spanish-tutor",
    "preply-introduction-video-spanish-tutor",
    "preply-trial-lesson-spanish",
    "preply-25-vs-50-minute-trial",
  ]);
});
```

Run `npm run test:guides`.

Expected: FAIL because `preplyGuides` is still empty.

- [ ] **Step 2: Author the seven full Preply guides**

Create seven complete `TeachingGuide` objects with:

```ts
pillar: "tutor-business",
cluster: "preply",
platform: "Preply",
publishedAt: "2026-09-24",
lastReviewed: "2026-09-24",
containsVolatilePlatformFacts: true,
```

Use the exact slugs, H1s, related lesson IDs, and intent from spec pages 1–7.

Required source mappings:

```ts
"teach-spanish-on-preply":
  [PREPLY_SOURCES.profile, PREPLY_SOURCES.video, PREPLY_SOURCES.availability, PREPLY_SOURCES.discovery],

"preply-spanish-tutor-profile":
  [PREPLY_SOURCES.profile, PREPLY_SOURCES.profileScore, PREPLY_SOURCES.discovery],

"preply-headline-spanish-tutor":
  [PREPLY_SOURCES.profile],

"preply-description-spanish-tutor":
  [PREPLY_SOURCES.profile, PREPLY_SOURCES.profileScore],

"preply-introduction-video-spanish-tutor":
  [PREPLY_SOURCES.video],

"preply-trial-lesson-spanish":
  [PREPLY_SOURCES.trial],

"preply-25-vs-50-minute-trial":
  [PREPLY_SOURCES.trial],
```

Required section maps:

- `teach-spanish-on-preply`: who Preply fits; current profile/discovery mechanics; availability; trial role; recurring lesson system; prep/material workflow; launch checklist.
- `preply-spanish-tutor-profile`: positioning; headline; first lines; evidence/specificity; video consistency; availability; profile audit checklist.
- `preply-headline-spanish-tutor`: official constraints; niche formula; weak vs. specific examples; 12–20 original headline examples across beginner/travel/conversation/business/Rioplatense niches; mistakes; final selection test.
- `preply-description-spanish-tutor`: first-line job; audience/problem/approach/proof structure; concrete example rewrites; tone; what not to claim; final checklist.
- `preply-introduction-video-spanish-tutor`: current video guidance; opening 10 seconds; who you teach; teaching style demonstration; audio/pronunciation; sample 45–60 second script framework; production mistakes.
- `preply-trial-lesson-spanish`: trial objective; pre-trial preparation; opening; diagnostic; short sample teaching; learning plan; closing; post-trial handoff.
- `preply-25-vs-50-minute-trial`: current format facts; 25-minute sequence; 50-minute sequence; what not to squeeze into 25 minutes; how to choose the sample task; follow-up.

Do not copy sentences from Preply Help Center. Paraphrase facts and link the source.

- [ ] **Step 3: Add explicit related-guide slugs for the seven-page funnel**

Use these relations:

```ts
{
  "teach-spanish-on-preply": [
    "preply-spanish-tutor-profile",
    "preply-trial-lesson-spanish",
    "preply-25-vs-50-minute-trial",
  ],
  "preply-spanish-tutor-profile": [
    "preply-headline-spanish-tutor",
    "preply-description-spanish-tutor",
    "preply-introduction-video-spanish-tutor",
  ],
  "preply-headline-spanish-tutor": [
    "preply-spanish-tutor-profile",
    "preply-description-spanish-tutor",
  ],
  "preply-description-spanish-tutor": [
    "preply-spanish-tutor-profile",
    "preply-headline-spanish-tutor",
  ],
  "preply-introduction-video-spanish-tutor": [
    "preply-spanish-tutor-profile",
    "preply-trial-lesson-spanish",
  ],
  "preply-trial-lesson-spanish": [
    "preply-25-vs-50-minute-trial",
    "teach-spanish-on-preply",
  ],
  "preply-25-vs-50-minute-trial": [
    "preply-trial-lesson-spanish",
    "teach-spanish-on-preply",
  ],
}
```

- [ ] **Step 4: Run the batch tests and full local checks**

```bash
npm run test:guides
npm run lint
npm run build
```

Expected: PASS.

- [ ] **Step 5: Commit batch 1**

```bash
git add app/guides/data/preply.ts tests/teaching-guides-seo.test.mjs
git commit -m "feat: add Preply profile and trial SEO guides"
```

Before merge, run the repository's normal CI and require success.

---

### Task 3: Batch 2 — Preply growth and italki, pages 8–21

**Files:**
- Modify: `app/guides/data/preply.ts`
- Modify: `app/guides/data/italki.ts`
- Modify: `tests/teaching-guides-seo.test.mjs`

**Interfaces:**
- Consumes: existing Batch-1 Preply funnel and shared types.
- Produces: all 14 Preply guides and 7 italki guides.

- [ ] **Step 1: Add a failing exact-count test**

```js
test("batch 2 contains 14 Preply guides and 7 italki guides", () => {
  assert.equal(tutorBusinessGuides.filter((g) => g.cluster === "preply").length, 14);
  assert.equal(tutorBusinessGuides.filter((g) => g.cluster === "italki").length, 7);
});
```

Run `npm run test:guides`.

Expected: FAIL with 7 Preply / 0 italki.

- [ ] **Step 2: Add Preply pages 8–14 with exact source discipline**

Add:

- `preply-trial-to-subscription-spanish`
- `preply-super-tutor-spanish-teachers`
- `preply-pre-trial-message-spanish`
- `preply-post-trial-message-spanish`
- `preply-pricing-spanish-tutor`
- `preply-raise-hourly-rate`
- `preply-student-retention-spanish`

Source mappings:

```ts
"preply-trial-to-subscription-spanish":
  [PREPLY_SOURCES.trial, PREPLY_SOURCES.superTutor, PREPLY_SOURCES.superTutorMetrics],

"preply-super-tutor-spanish-teachers":
  [PREPLY_SOURCES.superTutor, PREPLY_SOURCES.superTutorMetrics],

"preply-pre-trial-message-spanish":
  [PREPLY_SOURCES.trial],

"preply-post-trial-message-spanish":
  [PREPLY_SOURCES.trial],

"preply-pricing-spanish-tutor":
  [PREPLY_SOURCES.commission, PREPLY_SOURCES.price],

"preply-raise-hourly-rate":
  [PREPLY_SOURCES.price, PREPLY_SOURCES.discovery],

"preply-student-retention-spanish":
  [PREPLY_SOURCES.superTutorMetrics],
```

Required section focus:

- conversion page: funnel definition; what trial can/cannot prove; diagnostic; sample teaching; visible plan; follow-up; platform metric caveats.
- Super Tutor page: what status is; current official criteria only; what a tutor can control; what not to game; operational checklist.
- pre-trial message: confirm goal; obtain level/context; set expectation; do not overload; example patterns.
- post-trial message: recap; learning plan; next-step clarity; boundaries; example patterns.
- pricing: current fee model; gross vs net; unpaid prep; demand/positioning; worked examples; review cadence.
- raise rate: triggers; current students vs new students; communication; capacity; risk; measuring results without guarantees.
- retention: continuity; visible progress; personalization; scheduling habit; lesson variety; reactivation; metric vs pedagogical retention.

- [ ] **Step 3: Add the 7 italki guides as evergreen platform pages**

Add exactly:

- `teach-spanish-on-italki`
- `italki-spanish-teacher-profile`
- `italki-introduction-video-spanish-teacher`
- `italki-trial-lesson-spanish`
- `italki-pricing-spanish-lessons`
- `get-more-italki-spanish-students`
- `retain-italki-spanish-students`

Every italki guide must use:

```ts
platform: "italki",
lastReviewed: "2026-09-24",
containsVolatilePlatformFacts: false,
officialSources: [],
```

Do not state current commission, acceptance, ranking, trial, package, or payout mechanics.

Required editorial focus:

- teaching overview: offer positioning, profile clarity, lesson design, scheduling workflow, prep system.
- profile: target learner, outcome, teaching method, specificity, proof without inflated claims.
- video: speaking clearly, demonstrating teaching presence, sample structure, audio quality.
- first lesson: diagnosis, sample task, plan, follow-up; avoid claiming a current platform-specific trial format.
- pricing: floor/target/ceiling model, prep time, positioning, capacity; no current italki fee claims.
- attracting students: niche, profile coherence, availability consistency, response quality, lesson offer clarity; do not claim platform ranking factors.
- retention: continuity, progress, recurring lesson formats, student goals, communication boundaries.

- [ ] **Step 4: Connect the two platform clusters without a “winner” page**

Add these cross-links:

- `teach-spanish-on-preply` ↔ `teach-spanish-on-italki`
- `preply-spanish-tutor-profile` ↔ `italki-spanish-teacher-profile`
- `preply-introduction-video-spanish-tutor` ↔ `italki-introduction-video-spanish-teacher`
- `preply-student-retention-spanish` ↔ `retain-italki-spanish-students`

Linking may say "Teaching on another marketplace?" but must not rank the platforms.

- [ ] **Step 5: Run quality, source, build, and lint checks**

```bash
npm run test:guides
npm run lint
npm run build
```

Expected: PASS.

- [ ] **Step 6: Commit batch 2**

```bash
git add app/guides/data/preply.ts app/guides/data/italki.ts tests/teaching-guides-seo.test.mjs
git commit -m "feat: add Preply growth and italki SEO guides"
```

Before merge, require full CI success.

---

### Task 4: Batch 3 — Other platforms and pricing/business, pages 22–35

**Files:**
- Modify: `app/guides/data/other-platforms.ts`
- Modify: `app/guides/data/pricing-business.ts`
- Modify: `app/guides/data/platform-sources.ts` only if a current first-party AmazingTalker source is verified
- Modify: `tests/teaching-guides-seo.test.mjs`

**Interfaces:**
- Consumes: platform source constants and business-quality rules.
- Produces: 4 other-platform guides and 10 pricing/business guides.

- [ ] **Step 1: Add a failing batch-count test**

```js
test("batch 3 contains four other-platform and ten pricing-business guides", () => {
  assert.equal(tutorBusinessGuides.filter((g) => g.cluster === "other-platforms").length, 4);
  assert.equal(tutorBusinessGuides.filter((g) => g.cluster === "pricing-business").length, 10);
});
```

- [ ] **Step 2: Author Verbling and Superprof pages with first-party sources**

Add:

- `teach-spanish-on-verbling`
- `verbling-application-video-spanish-teacher`
- `teach-spanish-on-superprof`

Use:

```ts
officialSources: [
  VERBLING_SOURCES.teach,
  VERBLING_SOURCES.overview,
]
```

for the Verbling overview, `VERBLING_SOURCES.applicationVideo` for its video guide, and:

```ts
officialSources: [
  SUPERPROF_SOURCES.tutor,
  SUPERPROF_SOURCES.payment,
]
```

for Superprof.

All three use `containsVolatilePlatformFacts: true` and `lastReviewed: "2026-09-24"`.

- [ ] **Step 3: Verify AmazingTalker first-party documentation before authoring facts**

Before writing `teach-spanish-on-amazingtalker`, search current first-party AmazingTalker teacher documentation.

Two permitted outcomes:

**Verified source exists:**

```ts
containsVolatilePlatformFacts: true,
officialSources: [AMAZINGTALKER_SOURCES.teach],
```

and factual claims may only reflect that source.

**No qualifying current first-party source:**

```ts
containsVolatilePlatformFacts: false,
officialSources: [],
```

and the guide stays evergreen: positioning, lesson offer, profile/video principles, teaching workflow, and SpanishCue materials.

Do not use a third-party blog to justify current platform mechanics.

- [ ] **Step 4: Author the ten business pages with explicit assumptions**

Add:

- `online-spanish-tutor-rates`
- `raise-spanish-tutoring-rates`
- `real-hourly-rate-online-spanish-tutor`
- `price-spanish-lesson-packages`
- `spanish-tutor-income-calculator`
- `how-many-students-full-time-spanish-tutor`
- `fill-weekly-schedule-spanish-tutor`
- `monthly-income-plan-spanish-tutor`
- `spanish-tutor-niche-ideas`
- `independent-spanish-tutor-referrals`

Required calculation examples must explicitly label assumptions.

Use these formulas in visible prose where relevant:

```text
effective hourly rate =
net teaching revenue ÷ (teaching hours + prep hours + admin hours)
```

```text
estimated monthly teaching revenue =
average paid lessons per week × average net lesson rate × 4.33
```

```text
weekly capacity =
available teaching hours × realistic utilization rate
```

Do not label any hypothetical output as an industry average.

Required unique intent:

- rates: set a rate using experience, niche, demand, prep load, and capacity.
- raise rates: decide when and how to change rate, with communication and capacity implications.
- real hourly rate: include prep/admin and platform fees when known.
- packages: package design, discount limits, outcome-based structure, cash-flow caution.
- calculator: worked scenarios and variables, not a JavaScript calculator in this project.
- full-time students: convert desired teaching hours into active-student load using lessons/student/week assumptions.
- fill schedule: availability, positioning, follow-up, retention, referrals, and underfilled-slot diagnosis.
- monthly income: revenue planning with cancellations/utilization and buffer assumptions.
- niches: beginner, travel, conversation, business, DELE, pronunciation, Rioplatense, heritage/reconnection as examples without claiming demand data.
- referrals: ethical asks, timing, referral loop, no spam or fake incentives.

- [ ] **Step 5: Add test coverage for calculation disclaimers**

Add a structural test asserting each calculation-heavy slug contains language equivalent to "assumption" or "example", for example:

```js
for (const slug of [
  "online-spanish-tutor-rates",
  "real-hourly-rate-online-spanish-tutor",
  "spanish-tutor-income-calculator",
  "how-many-students-full-time-spanish-tutor",
  "monthly-income-plan-spanish-tutor",
]) {
  const guide = tutorBusinessGuides.find((item) => item.slug === slug);
  const text = JSON.stringify(guide).toLowerCase();
  assert.match(text, /assum|example|scenario/, slug);
}
```

- [ ] **Step 6: Run checks and commit batch 3**

```bash
npm run test:guides
npm run lint
npm run build
git add app/guides/data/other-platforms.ts app/guides/data/pricing-business.ts app/guides/data/platform-sources.ts tests/teaching-guides-seo.test.mjs
git commit -m "feat: add marketplace and tutor business SEO guides"
```

Before merge, require full CI success.

---

### Task 5: Batch 4 — Operations and retention, pages 36–44

**Files:**
- Modify: `app/guides/data/operations-retention.ts`
- Modify: `tests/teaching-guides-seo.test.mjs`

**Interfaces:**
- Consumes: shared guide types and current tutor-business graph.
- Produces: 9 operations/retention guides.

- [ ] **Step 1: Add a failing count test**

```js
test("batch 4 contains nine operations-retention guides", () => {
  assert.equal(
    tutorBusinessGuides.filter((guide) => guide.cluster === "operations-retention").length,
    9,
  );
});
```

- [ ] **Step 2: Author all nine approved pages**

Add:

- `cancellation-policy-spanish-tutor`
- `rescheduling-policy-online-spanish-tutor`
- `availability-online-spanish-tutor`
- `first-online-spanish-lesson`
- `assess-spanish-student-level-online`
- `spanish-student-learning-plan`
- `retain-online-spanish-students`
- `lesson-prep-system-spanish-tutors`
- `conversation-only-spanish-lesson`

Required distinct content:

- cancellation policy: notice windows, exceptions, no-shows, consistency, sample policy components, explicit note that this is operational guidance rather than legal advice.
- rescheduling: when to allow, boundaries, student self-service vs tutor action, emergency handling, repeated changes.
- availability: core hours, buffer time, demand windows, avoiding fragmented days, opening enough inventory without creating unsustainable availability.
- first lesson: rapport, goal, baseline, sample teaching, next-step plan; distinguish from marketplace-specific trial pages.
- assessment: CEFR-informed observation, comprehension, speaking, grammar/vocabulary sampling, no fake precision from a 5-minute conversation.
- learning plan: goals → communicative outcomes → sequence → review points → visible progress.
- retention: continuity, perceived progress, level-appropriate challenge, scheduling habit, adaptation, reactivation.
- prep system: reusable lesson architecture, batching, resource library, student notes, retrieval/recycling, prep-time ceiling.
- conversation-only: warm-up, controlled launch, depth, correction, recycling, closing retrieval; distinguish from generic conversation-activity lists.

- [ ] **Step 3: Add policy-safety assertions**

Add:

```js
for (const slug of [
  "cancellation-policy-spanish-tutor",
  "rescheduling-policy-online-spanish-tutor",
]) {
  const guide = tutorBusinessGuides.find((item) => item.slug === slug);
  assert.match(JSON.stringify(guide), /not legal advice|operational guidance/i, slug);
}
```

- [ ] **Step 4: Run checks and commit batch 4**

```bash
npm run test:guides
npm run lint
npm run build
git add app/guides/data/operations-retention.ts tests/teaching-guides-seo.test.mjs
git commit -m "feat: add tutor operations and retention SEO guides"
```

Before merge, require full CI success.

---

### Task 6: Batch 5 — Tutor niches, final hub IA, graph validation, and sitemap verification

**Files:**
- Modify: `app/guides/data/tutor-niches.ts`
- Modify: all tutor-business data files as needed to complete reciprocal/internal links
- Modify: `app/guides/data/index.ts`
- Modify: `app/guides/page.tsx`
- Modify: `app/guides/guides.module.css`
- Modify: `tests/teaching-guides-seo.test.mjs`
- Test: `app/sitemap.ts` through source/bundle assertions; do not change sitemap unless a failing test proves the existing dynamic guide map is insufficient

**Interfaces:**
- Consumes: all 44 prior tutor-business guides.
- Produces: 6 niche guides, complete 50-guide tutor/business set, final two-pillar hub, validated internal graph.

- [ ] **Step 1: Add failing final-count and exact-slug tests**

Add:

```js
test("the tutor-business expansion contains exactly 50 approved guides", () => {
  assert.equal(tutorBusinessGuides.length, 50);
});

test("the final six niche slugs are present", () => {
  const slugs = tutorBusinessGuides
    .filter((guide) => guide.cluster === "tutor-niches")
    .map((guide) => guide.slug);
  assert.deepEqual(slugs, [
    "teach-beginner-spanish-online",
    "teach-spanish-for-travel-online",
    "business-spanish-tutoring",
    "dele-preparation-private-tutor",
    "spanish-pronunciation-tutoring-online",
    "rioplatense-spanish-tutoring-niche",
  ]);
});
```

- [ ] **Step 2: Author all six niche guides**

Required content:

- beginner one-to-one: A1 interaction, scaffolding, visual support, limited targets, retrieval, confidence without infantilizing.
- travel Spanish: needs analysis by trip situations, survival functions, role-play, listening, realistic language; connect travel resources.
- business Spanish: needs by role/tasks rather than generic "business vocabulary", register, meetings, negotiation, email/speaking boundaries; connect B2/C1 resources.
- DELE private tutoring: level diagnosis, exam-skill mapping, language development, mock-task cycle, feedback, planning; include the visible note that SpanishCue is not affiliated with Instituto Cervantes and do not imply official exam-prep endorsement.
- pronunciation tutoring: diagnostic recording, one target at a time, perception before production where useful, deliberate practice, transfer to speech; connect phonetics lessons.
- Rioplatense niche: who wants it, vos, pronunciation, vocabulary/register, cultural exposure, scope boundaries; connect Argento/Buenos Aires/presente con vos resources.

- [ ] **Step 3: Complete the related-guide graph and add graph validation**

Every tutor-business guide must have 2–4 valid `relatedGuideSlugs`.

Add this final test:

```js
test("every tutor-business guide participates in a valid internal graph", () => {
  const bySlug = new Map(teachingGuides.map((guide) => [guide.slug, guide]));
  const inbound = new Map(tutorBusinessGuides.map((guide) => [guide.slug, 0]));

  for (const guide of tutorBusinessGuides) {
    assert.ok((guide.relatedGuideSlugs ?? []).length >= 2, guide.slug);
    assert.ok((guide.relatedGuideSlugs ?? []).length <= 4, guide.slug);

    for (const slug of guide.relatedGuideSlugs ?? []) {
      assert.notEqual(slug, guide.slug, guide.slug);
      assert.ok(bySlug.has(slug), `${guide.slug}: missing related guide ${slug}`);
      if (inbound.has(slug)) inbound.set(slug, inbound.get(slug) + 1);
    }
  }

  for (const [slug, count] of inbound) {
    assert.ok(count >= 1, `${slug}: no inbound tutor-business link`);
  }
});
```

- [ ] **Step 4: Add the two-pillar, clustered guide hub**

Refactor `app/guides/page.tsx` to group with explicit metadata:

```ts
const pillarCopy = {
  "teach-spanish": {
    eyebrow: "TEACH SPANISH",
    title: "Teach with clearer structure and less prep.",
    description: "Grammar, conversation, listening, pronunciation and teaching-method guides.",
  },
  "tutor-business": {
    eyebrow: "GROW AS A SPANISH TUTOR",
    title: "Build a tutoring workflow that can actually scale.",
    description: "Platforms, pricing, student retention, operations and tutoring niches.",
  },
} as const;

const clusterLabels = {
  grammar: "Grammar",
  conversation: "Conversation",
  listening: "Listening",
  pronunciation: "Pronunciation",
  vocabulary: "Vocabulary",
  methodology: "Teaching methodology",
  preply: "Preply",
  italki: "italki",
  "other-platforms": "Other tutoring platforms",
  "pricing-business": "Pricing & business",
  "operations-retention": "Operations & retention",
  "tutor-niches": "Tutor niches",
} as const;
```

Render pillar sections in this order:

1. `teach-spanish`
2. `tutor-business`

Within each pillar, retain guide array order inside each cluster.

Do not add client-side filtering in this project. Static grouped navigation is sufficient and more crawlable.

- [ ] **Step 5: Add responsive hub styles**

Add CSS for:

- `.pillar`
- `.pillarHeader`
- `.cluster`
- `.clusterHeader`
- reuse `.grid` and `.card`

At mobile widths, keep one-column cards and readable section spacing. No horizontal carousel.

- [ ] **Step 6: Add sitemap and combined-count validation**

Extend `tests/teaching-guides-seo.test.mjs`:

```js
import { readFile } from "node:fs/promises";

test("sitemap derives guide URLs from the aggregate guide catalog", async () => {
  const sitemap = await readFile("app/sitemap.ts", "utf8");
  assert.match(sitemap, /teachingGuides\.map/);
  assert.match(sitemap, /\/guides\/\$\{guide\.slug\}/);
});

test("current branch guide count matches the expansions actually present", () => {
  const tutorCount = tutorBusinessGuides.length;
  assert.equal(tutorCount, 50);

  const expectedTotal = teachingGuides.some((guide) =>
    guide.slug === "spanish-present-tense-activities"
  ) ? 113 : 63;

  assert.equal(teachingGuides.length, expectedTotal);
});
```

This test intentionally supports either implementation order of the two 50-page expansions.

- [ ] **Step 7: Add anti-cannibalization assertions for the known overlap pairs**

Add:

```js
const overlapPairs = [
  ["teach-spanish-on-preply", "how-to-teach-spanish-online"],
  ["first-online-spanish-lesson", "spanish-lesson-planning-45-minutes"],
  ["conversation-only-spanish-lesson", "spanish-conversation-activities-by-level"],
];

for (const [businessSlug, teachingSlug] of overlapPairs) {
  const business = teachingGuides.find((guide) => guide.slug === businessSlug);
  const teaching = teachingGuides.find((guide) => guide.slug === teachingSlug);
  assert.ok(business && teaching);
  assert.notEqual(business.title, teaching.title);
  assert.notEqual(business.description, teaching.description);
}
```

Reviewer focus remains semantic: the business page must answer offer/workflow intent, not merely paraphrase the teaching page.

- [ ] **Step 8: Run final targeted and full verification**

Run:

```bash
npm run test:guides
npm run lint
npm test
npm run validate:artifact
```

Expected: all PASS.

- [ ] **Step 9: Inspect generated routes from the build artifact**

Confirm that the build contains or serves:

```text
/guides/teach-spanish-on-preply
/guides/preply-pricing-spanish-tutor
/guides/teach-spanish-on-italki
/guides/teach-spanish-on-verbling
/guides/online-spanish-tutor-rates
/guides/lesson-prep-system-spanish-tutors
/guides/rioplatense-spanish-tutoring-niche
```

For one Preply guide, verify HTML includes:

- canonical URL
- `index, follow`
- review date
- independence note
- first-party source link
- related guide links
- public `/resources/` links
- Article JSON-LD
- BreadcrumbList JSON-LD

For one italki guide, verify HTML includes:

- platform review date
- independence note
- no unsupported current fee/commission claim
- no fabricated official source block
- related guide/resource links

- [ ] **Step 10: Commit batch 5**

```bash
git add app/guides/data app/guides/page.tsx app/guides/guides.module.css tests/teaching-guides-seo.test.mjs
git commit -m "feat: complete tutor business SEO guide cluster"
```

Before merge, require full GitHub CI success and a whole-branch review.

---

## Final Whole-Branch Review Checklist

The final reviewer must explicitly verify:

- exactly 50 tutor-business guides exist
- all 50 approved slugs match the spec exactly
- no existing guide URL changed
- no duplicate titles or slugs
- every tutor-business guide has 1–4 valid lesson IDs
- every tutor-business guide has 2–4 valid related-guide links
- every tutor-business guide has at least one inbound link
- Preply current facts cite first-party sources
- italki pages contain no unsupported current platform mechanics
- AmazingTalker current mechanics are absent unless a verified first-party source was added
- business calculations label assumptions and examples
- cancellation/rescheduling pages do not present legal advice
- DELE page includes no affiliation implication
- `/guides` is separated into Teach Spanish and Grow as a Spanish Tutor
- sitemap still derives all guide URLs from `teachingGuides`
- premium routes and Worker access logic are untouched
- auth, billing, D1, Paddle, PayPal, Firebase and environment configuration are untouched
- `npm run test:guides`, `npm run lint`, `npm test`, and `npm run validate:artifact` pass

## Execution Notes

Use an isolated branch/worktree for implementation.

Do not merge all 50 pages in one unreviewed commit. Preserve the six task boundaries above and the five editorial batch boundaries from the spec.

When first-party platform information changes during implementation, prefer updating the source-backed factual section over changing the page's search intent or slug.
