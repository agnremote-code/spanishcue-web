import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = async (path) => readFile(path, "utf8");

test("the same collapsible mood/tense help is present in every verbal lesson", async () => {
  for (const path of [
    "app/subjuntivo-pais-maravillas/page.tsx",
    "app/condicionales-b1/page.tsx",
    "app/condicionales/page.tsx",
    "app/past-b1/page.tsx",
    "app/grammar-worlds/GrammarWorld.tsx",
    "app/Library.tsx",
    "app/clase/[id]/page.tsx",
  ]) {
    assert.match(await source(path), /MoodTenseDisclosure/, path);
  }
  assert.match(await source("app/grammar-worlds/GrammarWorld.tsx"), /data\.slug === "la-ciudad-de-los-motores"[\s\S]{0,180}<MoodTenseDisclosure/);
  assert.match(await source("app/Library.tsx"), /activeLesson\.id === 3[\s\S]{0,80}<MoodTenseDisclosure/);
  assert.match(await source("app/clase/[id]/page.tsx"), /lesson\.id === 3 && <MoodTenseDisclosure/);
});

test("the mood/tense theory has one canonical standalone lesson", async () => {
  const catalog = await source("app/lesson-catalog.ts");
  const page = await source("app/modo-vs-tiempo-verbal/page.tsx");
  assert.match(catalog, /id:107[^\n]+path:"\/modo-vs-tiempo-verbal"/);
  assert.match(page, /MoodTenseDisclosure showLessonLink=\{false\}/);
  assert.doesNotMatch(page, /MoodTenseDisclosure defaultOpen/);
});

test("subjunctive and B1 conditionals no longer duplicate the removed introductions", async () => {
  const subjunctivePage = await source("app/subjuntivo-pais-maravillas/page.tsx");
  const subjunctiveData = await source("app/subjuntivo-pais-maravillas/data.ts");
  const conditionals = await source("app/condicionales-b1/page.tsx");
  assert.doesNotMatch(subjunctivePage, /GrammarIntro|screen === "intro"/);
  assert.doesNotMatch(subjunctiveData, /id:"modos"/);
  assert.doesNotMatch(conditionals, /ModoTiempoIntro|co-master-ladder|co-learning-order|co-memory-rule/);
  assert.match(conditionals, /cb-key-question/);
});

test("the inline lesson defense accepts only server-verified full access", async () => {
  const page = await source("app/clase/[id]/page.tsx");
  assert.match(page, /fullAccessFromHeaders\(requestHeaders\)/);
  assert.doesNotMatch(page, /ownerFromHeaders/);
  assert.match(page, /returnTo=/);
});
