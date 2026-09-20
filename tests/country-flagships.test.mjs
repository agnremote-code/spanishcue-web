import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { build } from "esbuild";

const result = await build({
  stdin: {
    contents: [
      'export { lessons } from "./app/lesson-catalog";',
      'export { samplesByCategory, freeLessonIds } from "./app/access-policy";',
      'export { landingConfigs } from "./app/marketing-landing/config";',
      'export { familyLessonsForCategory, filterLessons } from "./app/library-filters.mjs";',
      'export * from "./app/mexico/data";',
      'export { mexicoShapes } from "./app/mexico/map-data";',
      'export * from "./app/estados-unidos-a2-b1/state-data";',
      'export { stateShapes } from "./app/estados-unidos-a2-b1/map-data";',
    ].join("\n"),
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
});

const product = await import(
  `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`
);

test("México and United States are the two free conversation flagships", () => {
  assert.deepEqual(product.samplesByCategory.Conversación, [210, 36]);
  assert.equal(product.freeLessonIds.length, 10);

  const mexico = product.lessons.find((lesson) => lesson.id === 210);
  const usa = product.lessons.find((lesson) => lesson.id === 36);
  assert.deepEqual(
    {
      title: mexico?.title,
      path: mexico?.path,
      level: mexico?.level,
      countryCollection: mexico?.countryCollection,
    },
    { title: "MÉXICO", path: "/mexico", level: "B1", countryCollection: true },
  );
  assert.deepEqual(
    { title: usa?.title, path: usa?.path, level: usa?.level, levels: usa?.levels },
    {
      title: "ESTADOS UNIDOS",
      path: "/estados-unidos-a2-b1",
      level: "A2",
      levels: ["A2", "B1"],
    },
  );
});

test("Países opens with México and United States and aliases are searchable", () => {
  const countries = product.familyLessonsForCategory(product.lessons, {
    category: "Conversación",
    conversationMode: "countries",
  });
  assert.deepEqual(countries.slice(0, 2).map((lesson) => lesson.id), [210, 36]);

  for (const alias of ["Mexico", "México", "mexicano", "mexicana"])
    assert.deepEqual(product.filterLessons(product.lessons, { query: alias }).map((lesson) => lesson.id), [210]);
  for (const alias of ["USA", "United States", "US", "EEUU", "Estados Unidos"])
    assert.ok(product.filterLessons(product.lessons, { query: alias }).some((lesson) => lesson.id === 36), alias);
});

test("paid-search landings place both country flagships first in the requested order", () => {
  const ids = (slug) => product.landingConfigs[slug].lessonIds;
  assert.deepEqual(ids("online-spanish-teaching-resources").slice(0, 2), [36, 210]);
  assert.deepEqual(ids("ele-recursos-profesores").slice(0, 2), [210, 36]);
  assert.deepEqual(ids("spanish-conversation-activities").slice(0, 2), [210, 36]);
  assert.deepEqual(ids("free-spanish-lesson").slice(0, 2), [210, 36]);
});

test("México supplies 32 selectable entities, 160 B1 prompts and all six modes", () => {
  assert.equal(product.mexicoEntities.length, 32);
  assert.equal(product.mexicoShapes.length, 32);
  assert.equal(new Set(product.mexicoEntities.map((entity) => entity.code)).size, 32);
  assert.equal(product.mexicoPromptCount, 160);
  assert.ok(product.mexicoEntities.every((entity) => entity.questions.length === 5));
  assert.ok(product.mexicoEntities.every((entity) => entity.vocabulary.length >= 4));
  assert.ok(product.mexicoEntities.every((entity) => entity.followups.length >= 3));
  assert.deepEqual(product.mexicoModes, [
    "EXPLORAR", "AL AZAR", "ELEGÍ ENTRE DOS", "¿DÓNDE VIVIRÍAS?",
    "TU PAÍS VS MÉXICO", "TU MÉXICO IDEAL",
  ]);
});

test("United States keeps 50 states, adds a D.C. bonus and separates A2 from B1", () => {
  assert.equal(product.states.length, 50);
  assert.equal(product.stateShapes.length, 50);
  assert.ok(product.states.some((state) => state.code === "AK"));
  assert.ok(product.states.some((state) => state.code === "HI"));
  assert.equal(product.dcBonus.code, "DC");
  assert.ok(product.states.every((state) => state.a2Questions.length === 5));
  assert.ok(product.states.every((state) => state.b1Extension.es.length > 20));
  assert.equal(product.states.reduce((sum, state) => sum + state.questions.length, 0), 300);
  assert.equal(product.usaModes.length, 6);
});

test("both maps expose keyboard, mobile and reduced-motion contracts", async () => {
  const [mexicoPage, mexicoCss, usaPage, usaCss] = await Promise.all([
    readFile("app/mexico/page.tsx", "utf8"),
    readFile("app/mexico/style.css", "utf8"),
    readFile("app/estados-unidos-a2-b1/page.tsx", "utf8"),
    readFile("app/estados-unidos-a2-b1/style.css", "utf8"),
  ]);
  for (const source of [mexicoPage, usaPage]) {
    assert.match(source, /role="button"/);
    assert.match(source, /tabIndex=/);
    assert.match(source, /event\.key==?="Enter"|event\.key === "Enter"/);
  }
  for (const source of [mexicoCss, usaCss]) {
    assert.match(source, /prefers-reduced-motion\s*:\s*reduce/);
    assert.match(source, /max-width:\s*(720|820)px/);
    assert.match(source, /:focus-visible/);
  }
});

test("CRO landings keep their baseline and add compact country product proof", async () => {
  const [landing, css] = await Promise.all([
    readFile("app/marketing-landing/MarketingLanding.tsx", "utf8"),
    readFile("app/marketing/marketing.css", "utf8"),
  ]);
  assert.match(landing, /landing-human/);
  assert.match(landing, /LandingConversion/);
  assert.match(landing, /landing-country-proof/);
  assert.match(landing, /ONE MAP\. A FULL CONVERSATION LESSON\./);
  assert.match(landing, /UN MAPA PUEDE SER UNA CLASE ENTERA\./);
  assert.match(landing, /landing-category-strip/);
  for (const category of ["Gramática", "Conversación", "Escucha", "Fonética", "Vocabulario"])
    assert.match(landing, new RegExp(category));
  assert.match(css, /\.landing-country-proof/);
  assert.match(css, /\.landing-category-strip/);
  assert.match(css, /@media\(max-width:760px\)/);
});
