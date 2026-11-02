import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { build } from "esbuild";

/**
 * A /resources slug that search engines have seen must never become a 404.
 * The slug follows the lesson's level label and title, so renames move it;
 * app/resource-legacy-slugs.ts keeps every old slug as a 308 to the lesson's
 * current page. The fixture lists every slug ever in the sitemap (rebuilt
 * from main history on 2026-10-27, plus today's sitemap).
 */
const result = await build({
  stdin: {
    contents: [
      'export { default as sitemap } from "./app/sitemap.ts";',
      'export { lessons } from "./app/lesson-catalog.ts";',
      'export * from "./app/resource-seo.ts";',
      'export * from "./app/resource-legacy-slugs.ts";',
    ].join("\n"),
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
  loader: { ".json": "json" },
});
const mod = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
const fixtureFile = "tests/fixtures/published-resource-slugs.json";
const published = JSON.parse(readFileSync(fixtureFile, "utf8"));
const sitemapSlugs = mod.sitemap()
  .map((entry) => new URL(entry.url).pathname)
  .filter((path) => path.startsWith("/resources/"))
  .map((path) => path.slice("/resources/".length));

test("every slug in today's sitemap is recorded as published", () => {
  const known = new Set(published);
  const missing = sitemapSlugs.filter((slug) => !known.has(slug));
  assert.deepEqual(missing, [], `New /resources slugs. If a lesson's level or title changed, add its OLD slug to app/resource-legacy-slugs.ts; then add these new slugs to ${fixtureFile}.`);
});

test("every published slug serves a page, redirects to the sitemap, or is explicitly retired", () => {
  const live = new Set(sitemapSlugs);
  for (const slug of published) {
    if (mod.retiredResourceSlugs.has(slug)) {
      assert.equal(mod.lessonForResourceSlug(slug), undefined, slug);
      assert.equal(mod.legacyResourceRedirectPath(slug), undefined, slug);
      continue;
    }
    const redirect = mod.legacyResourceRedirectPath(slug);
    if (redirect) {
      assert.ok(live.has(redirect.slice("/resources/".length)), `${slug} must redirect to a sitemap URL, got ${redirect}`);
      continue;
    }
    const lesson = mod.lessonForResourceSlug(slug);
    assert.ok(lesson, `${slug} would 404: add it to app/resource-legacy-slugs.ts`);
  }
});

test("legacy slugs never shadow a current slug and point at existing lessons", () => {
  const ids = new Set(mod.lessons.map((lesson) => lesson.id));
  for (const [slug, id] of mod.legacyResourceSlugToLessonId) {
    assert.ok(ids.has(id), `${slug} points at missing lesson ${id}`);
    assert.equal(mod.lessonForResourceSlug(slug), undefined, `${slug} is a live slug, not a legacy one`);
    assert.ok(!mod.retiredResourceSlugs.has(slug), slug);
  }
  assert.equal(
    mod.legacyResourceRedirectPath("spanish-grammar-lesson-a1-a2-ser-estar-y-hay-describir-personas-y-lugares"),
    "/resources/spanish-grammar-lesson-a1-ser-estar-y-hay-describir-personas-y-lugares",
  );
});

test("the resource page sends legacy slugs through a permanent redirect before the 404", () => {
  const page = readFileSync("app/resources/[slug]/page.tsx", "utf8");
  assert.match(page, /const legacyPath = legacyResourceRedirectPath\(slug\);\s*if \(legacyPath\) permanentRedirect\(legacyPath\);\s*const lesson = lessonForResourceSlug\(slug\);\s*if \(!lesson\) notFound\(\);/);
});
