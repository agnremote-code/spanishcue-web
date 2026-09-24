import assert from "node:assert/strict";
import test from "node:test";
import { build } from "esbuild";
import { readFile } from "node:fs/promises";

async function loadGuideModule() {
  const result = await build({
    stdin: {
      contents: [
        'export * from "./app/teaching-guides.ts";',
        'export * from "./app/guides/guide-format.ts";',
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

test("guide review date helpers use lastReviewed when present", () => {
  assert.equal(mod.guideModifiedDate({
    slug: "x",
    title: "x",
    description: "x",
    eyebrow: "x",
    readingTime: "1 min",
    keywords: [],
    sections: [],
    relatedHref: "/",
    relatedLabel: "x",
    pillar: "tutor-business",
    cluster: "preply",
    publishedAt: "2026-09-01",
    platform: "Preply",
    lastReviewed: "2026-09-24",
  }), "2026-09-24");
  assert.equal(mod.formatReviewedDate("2026-09-24"), "September 24, 2026");
});

test("sitemap derives guide URLs from the aggregate guide catalog", async () => {
  const sitemap = await readFile("app/sitemap.ts", "utf8");
  assert.match(sitemap, /teachingGuides\.map/);
  assert.match(sitemap, /\/guides\/\$\{guide\.slug\}/);
});

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
