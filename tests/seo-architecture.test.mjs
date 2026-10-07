import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { build } from "esbuild";

/**
 * Guardrails for the organic-growth architecture described in
 * docs/seo-strategy.md: one clean canonical per page, hreflang only for real
 * pairs, noindex (never robots.txt) for private surfaces, a sitemap without
 * parameters or private URLs, and a conversation cluster whose data points at
 * real lessons and guides.
 */
async function load() {
  const result = await build({
    stdin: {
      contents: [
        'export * from "./app/seo.ts";',
        'export { default as sitemap, autoestudioLevelPaths } from "./app/sitemap.ts";',
        'export { default as robots } from "./app/robots.ts";',
        'export * from "./app/growth/conversation-levels.ts";',
        'export * from "./app/growth/conversation-questions.ts";',
        'export { lessons } from "./app/lesson-catalog.ts";',
        'export { catalogLessons } from "./app/conversation-families/catalog.ts";',
        'export { teachingGuides } from "./app/teaching-guides.ts";',
        'export { landingConfigs } from "./app/marketing-landing/config.ts";',
        'export { isFreeLesson, localLessonPath } from "./app/access-policy.ts";',
        'export { resourcePathForLesson, resourceLessons } from "./app/resource-seo.ts";',
      ].join("\n"),
      resolveDir: process.cwd(),
    },
    bundle: true,
    write: false,
    format: "esm",
    platform: "node",
    loader: { ".json": "json" },
  });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
}

const mod = await load();
const read = (path) => readFileSync(path, "utf8");

test("canonical URLs are clean apex URLs without parameters, hashes or trailing slashes", () => {
  assert.equal(mod.canonicalUrl("/"), "https://spanishcue.com/");
  assert.equal(mod.canonicalUrl("/pricing/"), "https://spanishcue.com/pricing");
  assert.equal(mod.canonicalUrl("/resources/x?lang=en#top"), "https://spanishcue.com/resources/x");
  assert.equal(mod.canonicalUrl("mexico"), "https://spanishcue.com/mexico");
});

test("private, campaign and tooling paths are noindex while public pages are not", () => {
  for (const path of ["/ingresar", "/cuenta", "/acceso", "/pro", "/pro/success", "/admin", "/admin/reportes", "/api/progress", "/auth/action", "/demo/mis-alumnos", "/s/token", "/autoestudio/claim", "/zeely", "/lp", "/lp/spanish-grammar-lessons", "/acceso/"]) {
    assert.equal(mod.isSearchPrivatePath(path), true, path);
  }
  for (const path of ["/", "/pricing", "/resources", "/resources/x", "/guides/x", "/spanish-conversation-activities", "/spanish-conversation-activities/b1", "/spanish-conversation-questions", "/spanish-teacher-resources", "/autoestudio", "/autoestudio/a1", "/autoestudio/a1/semana-1", "/mexico", "/sistema-verbal", "/privacy"]) {
    assert.equal(mod.isSearchPrivatePath(path), false, path);
  }
  assert.equal(mod.robotsHeaderFor("/lp/spanish-conversation-activities"), "noindex, follow");
  assert.equal(mod.robotsHeaderFor("/acceso"), "noindex, nofollow");
  assert.equal(mod.robotsHeaderFor("/api/billing/checkout"), "noindex, nofollow");
  assert.equal(mod.robotsHeaderFor("/spanish-conversation-activities/a1"), null);
  assert.equal(mod.robotsHeaderFor("/"), null);
});

test("English is the default UI language on the English organic and campaign surfaces only", () => {
  for (const path of ["/resources", "/resources/x", "/guides", "/guides/x", "/spanish-teacher-resources", "/spanish-conversation-activities/c1", "/spanish-conversation-questions", "/online-spanish-teaching-resources", "/free-spanish-lesson", "/lp/spanish-grammar-lessons"]) {
    assert.equal(mod.isEnglishDefaultPath(path), true, path);
  }
  for (const path of ["/", "/pricing", "/ele-recursos-profesores", "/lp/ele-recursos-profesores", "/autoestudio", "/mexico", "/sistema-verbal"]) {
    assert.equal(mod.isEnglishDefaultPath(path), false, path);
  }
});

test("hreflang exists only for declared real pairs, and every pair is indexable and distinct", () => {
  for (const pair of mod.languagePairs) {
    assert.notEqual(pair.es, pair.en);
    assert.equal(mod.isSearchPrivatePath(pair.es), false);
    assert.equal(mod.isSearchPrivatePath(pair.en), false);
    assert.deepEqual(Object.keys(mod.languageAlternates(pair.es)).sort(), ["en", "es", "x-default"]);
  }
  assert.equal(mod.languageAlternates("/"), undefined);
  assert.equal(mod.languageAlternates("/pricing"), undefined);
  assert.equal(mod.languageAlternates("/spanish-conversation-activities"), undefined);
});

test("robots.txt blocks machine endpoints only, never a page that relies on noindex", () => {
  const rules = mod.robots().rules;
  assert.deepEqual(rules.disallow, ["/api/"]);
  assert.equal(rules.allow, "/");
});

test("the sitemap lists clean, public, deduplicated URLs covering the organic architecture", () => {
  const entries = mod.sitemap();
  const urls = entries.map((entry) => entry.url);
  assert.equal(new Set(urls).size, urls.length, "no duplicate URLs");
  for (const entry of entries) {
    assert.match(entry.url, /^https:\/\/spanishcue\.com\//);
    assert.doesNotMatch(entry.url, /[?#]/, entry.url);
    if (entry.url !== "https://spanishcue.com/") assert.doesNotMatch(entry.url, /\/$/, entry.url);
    assert.equal(mod.isSearchPrivatePath(new URL(entry.url).pathname), false, entry.url);
    if (entry.alternates) assert.ok(mod.languagePairs.length > 0, "alternates only when a pair exists");
  }
  const expected = [
    "/", "/pricing", "/spanish-teacher-resources", mod.CONVERSATION_HUB_PATH, mod.CONVERSATION_QUESTIONS_PATH,
    ...mod.conversationLevels.map((level) => level.path),
    "/resources", "/guides", "/autoestudio", ...mod.autoestudioLevelPaths, "/autoestudio/a1/semana-1",
    "/spanish-grammar-lessons", "/ele-recursos-profesores", "/free-spanish-lesson", "/online-spanish-teaching-resources", "/sistema-verbal",
  ];
  for (const path of expected) assert.ok(urls.includes(`https://spanishcue.com${path}`), path);
  for (const lesson of mod.lessons.filter((item) => mod.isFreeLesson(item.id))) {
    const path = mod.localLessonPath(lesson);
    if (path) assert.ok(urls.includes(`https://spanishcue.com${path}`), `free lesson ${lesson.id}`);
  }
  for (const lesson of mod.resourceLessons) assert.ok(urls.includes(`https://spanishcue.com${mod.resourcePathForLesson(lesson)}`), `resource ${lesson.id}`);
  for (const guide of mod.teachingGuides) {
    const entry = entries.find((item) => item.url === `https://spanishcue.com/guides/${guide.slug}`);
    assert.ok(entry, guide.slug);
    assert.match(String(entry.lastModified), /^\d{4}-\d{2}-\d{2}$/);
  }
  assert.ok(!urls.some((url) => /\/(?:lp|zeely|acceso|ingresar|cuenta|pro|admin|api)(?:\/|$)/.test(new URL(url).pathname)));
});

test("the conversation cluster has six ordered levels with search-friendly metadata and complete content", () => {
  const codes = mod.conversationLevels.map((level) => level.code);
  assert.deepEqual(codes, ["A1", "A2", "B1", "B2", "C1", "C2"]);
  assert.equal(new Set(mod.conversationLevels.map((level) => level.slug)).size, 6);
  for (const level of mod.conversationLevels) {
    assert.equal(level.path, `${mod.CONVERSATION_HUB_PATH}/${level.slug}`);
    assert.ok(level.title.length <= 70, `${level.code} title ${level.title.length}`);
    assert.ok(level.description.length >= 110 && level.description.length <= 165, `${level.code} description ${level.description.length}`);
    assert.match(level.title, /Spanish Conversation Activities/);
    assert.match(level.h1, new RegExp(`^${level.code} Spanish Conversation Activities`));
    assert.ok(level.intro.length >= 2 && level.canDo.length >= 4 && level.design.length >= 4);
    assert.equal(level.activities.length, 4, `${level.code} activities`);
    for (const activity of level.activities) {
      assert.ok(activity.steps.length >= 3 && activity.minutes >= 8 && activity.language && activity.teacherTip && activity.goal, activity.name);
    }
    assert.ok(level.scaffolds.length >= 3 && level.pitfalls.length >= 3 && level.faq.length === 3);
    assert.ok(level.sampleQuestions.length >= 12, `${level.code} sample questions`);
    for (const question of level.sampleQuestions) assert.ok(question.es && question.en && question.es !== question.en);
  }
});

test("every level page points at real catalog lessons of the right level and existing guides", () => {
  const cards = new Map(mod.catalogLessons.map((lesson) => [lesson.id, lesson]));
  const guideSlugs = new Set(mod.teachingGuides.map((guide) => guide.slug));
  for (const level of mod.conversationLevels) {
    assert.ok(level.lessonIds.length >= 6, `${level.code} lessons`);
    assert.equal(new Set(level.lessonIds).size, level.lessonIds.length);
    for (const id of level.lessonIds) {
      const lesson = cards.get(id);
      assert.ok(lesson, `${level.code}: lesson ${id} is not a public catalog card`);
      assert.equal(lesson.category, "Conversación", `${level.code}: lesson ${id}`);
      assert.ok((lesson.levels || [lesson.level]).includes(level.code), `${level.code}: lesson ${id} (${lesson.title}) has levels ${lesson.levels || lesson.level}`);
    }
    for (const id of level.companionLessonIds) {
      const lesson = cards.get(id);
      assert.ok(lesson, `${level.code}: companion ${id}`);
      assert.notEqual(lesson.category, "Conversación", `${level.code}: companion ${id}`);
      assert.ok((lesson.levels || [lesson.level]).includes(level.code), `${level.code}: companion ${id} (${lesson.title})`);
    }
    for (const slug of level.guideSlugs) assert.ok(guideSlugs.has(slug), `${level.code}: guide ${slug}`);
    assert.ok(level.guideSlugs.includes("spanish-conversation-activities-by-level"));
  }
  assert.ok(mod.conversationLevels.some((level) => level.lessonIds.some((id) => mod.isFreeLesson(id))), "at least one level offers a free lesson");
});

test("the question bank is large, graded, unique and tagged with known topics", () => {
  const questions = mod.conversationQuestions;
  assert.ok(questions.length >= 150, `only ${questions.length} questions`);
  assert.equal(new Set(questions.map((question) => question.id)).size, questions.length);
  assert.equal(new Set(questions.map((question) => question.es)).size, questions.length, "duplicate Spanish questions");
  const topics = new Set(mod.questionTopics.map((topic) => topic.slug));
  for (const question of questions) {
    assert.ok(topics.has(question.topic), question.id);
    assert.ok(/[?.!]$/.test(question.es.trim()), question.es);
    assert.ok(question.en.trim().length > 10, question.id);
    assert.doesNotMatch(question.es, /\b(?:vos|tenés|querés|podés|sos)\b/i, question.es);
  }
  for (const code of ["A1", "A2", "B1", "B2", "C1", "C2"]) assert.ok(mod.questionCountByLevel[code] >= 20, `${code}: ${mod.questionCountByLevel[code]}`);
  for (const topic of topics) assert.ok(questions.some((question) => question.topic === topic), `${topic} unused`);
});

test("campaign variants exist for every landing config and only under the noindex /lp prefix", () => {
  assert.ok(existsSync("app/lp/[slug]/page.tsx"));
  for (const slug of Object.keys(mod.landingConfigs)) {
    assert.equal(mod.isCampaignPath(`/lp/${slug}`), true, slug);
    assert.equal(mod.isSearchPrivatePath(`/${slug}`), false, slug);
  }
  const page = read("app/lp/[slug]/page.tsx");
  assert.match(page, /index: false/);
  assert.match(page, /pathname: `\/lp\/\$\{slug\}`/);
});

test("the homepage never ships hidden text and carries site-wide Organization and WebSite data", () => {
  const home = read("app/page.tsx");
  assert.match(home, /<SiteSchema\s*\/>/);
  assert.doesNotMatch(home, /hidden|display:\s*['"]none/);
  assert.ok(!existsSync("app/zeely/ZeelyDiscovery.tsx"));
  const schema = read("app/growth/SiteSchema.tsx");
  assert.match(schema, /"Organization"/);
  assert.match(schema, /"WebSite"/);
  assert.doesNotMatch(schema, /"(?:aggregateRating|review|award|sameAs)"/);
});

test("indexable hub pages declare clean canonicals and the layout no longer emits parameter alternates", () => {
  for (const path of ["app/spanish-conversation-activities/page.tsx", "app/spanish-conversation-activities/[level]/page.tsx", "app/spanish-conversation-questions/page.tsx", "app/spanish-teacher-resources/page.tsx"]) {
    const source = read(path);
    assert.match(source, /canonicalUrl\(/, path);
    assert.match(source, /robots: \{ index: true, follow: true \}/, path);
    assert.doesNotMatch(source, /\?lang=/, path);
  }
  const layout = read("app/layout.tsx");
  assert.match(layout, /canonicalUrl\(pathname\)/);
  assert.match(layout, /languageAlternates\(pathname\)/);
  assert.doesNotMatch(layout, /\?lang=(?:en|es)|localizedUrl/);
  for (const path of ["app/pricing/page.tsx", "app/clase/[id]/page.tsx", "app/marketing-landing/metadata.ts"]) {
    assert.doesNotMatch(read(path), /\?lang=(?:en|es|\$\{)/, path);
  }
  const worker = read("worker/index.ts");
  assert.match(worker, /robotsHeaderFor\(url\.pathname\)/);
  assert.match(worker, /X-Robots-Tag/);
});

test("marketing attribution records landing views for hubs, level pages and campaign variants", () => {
  const attribution = read("app/marketing/MarketingAttribution.tsx");
  for (const path of ["/spanish-conversation-questions", "/resources", "/guides", "/autoestudio"]) assert.match(attribution, new RegExp(`"${path}"`), path);
  assert.match(attribution, /startsWith\("\/spanish-conversation-activities\/"\)/);
  assert.match(attribution, /startsWith\("\/lp\/"\)/);
});
