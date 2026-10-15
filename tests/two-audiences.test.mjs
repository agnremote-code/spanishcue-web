import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { build } from "esbuild";

/**
 * Two audiences, one brand (2026-10-15): the home page stays the teacher
 * landing, /para-profesores and /aprender-espanol are indexable single-URL
 * landings, the header carries a Teach/Learn selector, the student landing
 * only promises free experiences that exist, and analytics adds no purchase.
 */
async function load() {
  const result = await build({
    stdin: {
      contents: [
        'export * from "./app/seo.ts";',
        'export * from "./app/audience/audiences.ts";',
        'export { default as sitemap } from "./app/sitemap.ts";',
        'export { isFreeLesson } from "./app/access-policy.ts";',
        'export { isFreeAutoestudioModule } from "./app/autoestudio/access.ts";',
        'export { marketingEvents } from "./app/marketing/analytics.ts";',
      ].join("\n"),
      resolveDir: process.cwd(),
    },
    bundle: true,
    format: "esm",
    platform: "node",
    write: false,
    loader: { ".ts": "ts", ".tsx": "tsx" },
    logLevel: "silent",
  });
  return import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
}

const mod = await load();
const read = (path) => readFileSync(path, "utf8");

test("both audience landings are clean, indexable, single-URL documents", () => {
  for (const path of ["/para-profesores", "/aprender-espanol"]) {
    assert.equal(mod.isSearchPrivatePath(path), false, path);
    assert.equal(mod.robotsHeaderFor(path), null, path);
    assert.equal(mod.languageAlternates(path), undefined, `${path} has no hreflang pair`);
    assert.equal(mod.isEnglishDefaultPath(path), false, `${path} defaults to Spanish like its slug`);
    assert.equal(mod.canonicalUrl(`${path}?lang=en`), `https://spanishcue.com${path}`);
  }
  const urls = mod.sitemap().map((entry) => entry.url);
  assert.ok(urls.includes("https://spanishcue.com/para-profesores"));
  assert.ok(urls.includes("https://spanishcue.com/aprender-espanol"));
  assert.ok(urls.includes("https://spanishcue.com/"), "the teacher home stays in the sitemap");
});

test("each landing has its own metadata, H1, canonical and structured data", () => {
  const teacher = read("app/para-profesores/page.tsx");
  const student = read("app/aprender-espanol/page.tsx");
  for (const source of [teacher, student]) {
    assert.match(source, /generateMetadata/);
    assert.match(source, /alternates: \{ canonical \}/);
    assert.match(source, /<AudienceSchema /);
    assert.doesNotMatch(source, /\?lang=/, "no ?lang= links");
  }
  assert.match(teacher, /Clases interactivas para profesores de español/);
  assert.match(teacher, /<SpanishCueHero kicker=\{meta\[locale\]\.kicker\} kickerInHeading \/>/, "teacher landing reuses the original hero");
  assert.match(student, /Aprende español/);
  assert.doesNotMatch(student, /spanishcue-hero-online/, "the student hero does not reuse the teacher image");
});

test("the home page keeps its hero and only gains the selector", () => {
  const library = read("app/Library.tsx");
  assert.match(library, /<SpanishCueHero \/>/);
  assert.match(library, /<AudienceSwitch active="teacher" \/>/);
  const brand = read("app/SpanishCueBrand.tsx");
  assert.match(brand, /src="\/brand\/spanishcue-hero-online\.webp"/);
  assert.match(brand, /PROBAR UNA CLASE GRATIS/);
});

test("the selector is two plain, accessible links to the two landings", () => {
  const source = read("app/audience/AudienceSwitch.tsx");
  assert.match(source, /<nav /);
  assert.match(source, /aria-current=/);
  assert.match(source, /Enseñar español/);
  assert.match(source, /Aprender español/);
  assert.match(source, /Teach Spanish/);
  assert.match(source, /Learn Spanish/);
  assert.doesNotMatch(source, /<dialog|showModal|role="dialog"/, "never a blocking chooser");
  assert.equal(mod.TEACHER_HOME_PATH, "/");
  assert.equal(mod.STUDENT_LANDING_PATH, "/aprender-espanol");
  assert.equal(mod.audienceForPath("/aprender-espanol"), "student");
  assert.equal(mod.audienceForPath("/para-profesores"), "teacher");
  assert.equal(mod.audienceForPath("/"), "teacher");
});

test("the student landing only links free experiences and sells nothing", () => {
  const student = read("app/aprender-espanol/page.tsx");
  assert.ok(mod.STUDENT_DEMO_PATH.startsWith("/demo/noche-abierta?"), "primary CTA is the public demo");
  assert.match(read("app/demo/noche-abierta/page.tsx"), /params\.from==='aprender-espanol'\?'\/aprender-espanol'/);
  assert.equal(mod.isFreeLesson(105), true);
  assert.equal(mod.isFreeLesson(40), true);
  assert.equal(mod.isFreeAutoestudioModule("/autoestudio/a1/semana-1"), true);
  assert.doesNotMatch(student, /CheckoutButton|\/pricing|\/acceso|US\$|\$\d/, "no student checkout or price");
  assert.doesNotMatch(student, /testimonial|reseña|review/i);
  const teacher = read("app/para-profesores/page.tsx");
  for (const id of [40, 36, 105, 28]) assert.equal(mod.isFreeLesson(id), true, `teacher sample ${id} is free`);
  assert.match(teacher, /href="\/pricing"/, "teachers keep the existing purchase path");
});

test("analytics adds audience events without a second purchase or checkout event", () => {
  for (const event of ["audience_selected_teacher", "audience_selected_student", "teacher_demo_started", "student_demo_started"]) {
    assert.ok(mod.marketingEvents.includes(event), event);
  }
  for (const event of ["teacher_checkout_started", "teacher_purchase_completed", "student_purchase_completed", "purchase"]) {
    assert.equal(mod.marketingEvents.includes(event), false, `${event} must not exist: checkout_start and the verified purchase events already cover it`);
  }
  assert.match(read("app/marketing/analytics.ts"), /audience: currentAudience\(\)/);
});

test("public client roots cover every component the new pages render", () => {
  const protect = read("scripts/protect-client-assets.mjs");
  for (const root of ["app/audience/AudienceSwitch.tsx", "app/audience/AudienceTopbar.tsx", "app/audience/TrackedLink.tsx", "app/SpanishCueBrand.tsx"]) {
    assert.ok(protect.includes(`"${root}"`), root);
  }
  const smoke = read("scripts/production-smoke.mjs");
  assert.match(smoke, /"\/para-profesores", "\/aprender-espanol"/);
});
