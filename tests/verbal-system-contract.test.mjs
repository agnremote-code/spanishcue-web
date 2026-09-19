import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { verbalLessons } from "../app/verbal-system/lesson-data.ts";

const levelOrder = new Map(["A1", "A2", "B1", "B2", "C1", "C2"].map((level, index) => [level, index]));

test("the canonical verbal curriculum contains exactly 16 tenses plus the imperative", () => {
  assert.equal(verbalLessons.length, 17);
  assert.deepEqual(verbalLessons.map((lesson) => lesson.id), Array.from({ length: 17 }, (_, index) => 140 + index));
  assert.equal(verbalLessons.filter((lesson) => lesson.mood === "Imperativo").length, 1);
  assert.equal(verbalLessons.filter((lesson) => lesson.mood !== "Imperativo").length, 16);
  assert.equal(new Set(verbalLessons.map((lesson) => lesson.slug)).size, 17);
  assert.equal(new Set(verbalLessons.map((lesson) => lesson.route)).size, 17);
});

test("the curriculum stays ordered A1-C2 and every card points to its one canonical route", () => {
  let previousLevel = -1;
  let previousOrder = -1;
  for (const lesson of verbalLessons) {
    const currentLevel = levelOrder.get(lesson.level);
    assert.ok(currentLevel >= previousLevel, lesson.title);
    assert.ok(lesson.curriculumOrder > previousOrder, lesson.title);
    assert.equal(lesson.route, `/sistema-verbal/${lesson.slug}`);
    assert.equal(lesson.duration, "≈ 45 min");
    previousLevel = currentLevel;
    previousOrder = lesson.curriculumOrder;
  }
});

test("every lesson has a complete 45-minute teaching spine", () => {
  for (const lesson of verbalLessons) {
    assert.equal(lesson.formation.length, 3, lesson.title);
    assert.equal(lesson.uses.length, 4, lesson.title);
    assert.equal(lesson.examples.length, 6, lesson.title);
    assert.equal(lesson.contrast.length, 2, lesson.title);
    assert.equal(lesson.practice.length, 5, lesson.title);
    assert.equal(lesson.transform.length, 3, lesson.title);
    assert.equal(lesson.conversation.length, 8, lesson.title);
    assert.equal(lesson.regional.length, 3, lesson.title);
  }
});

test("A1-A2 lessons carry broad English support in every teaching phase", () => {
  for (const lesson of verbalLessons.filter((item) => item.level === "A1" || item.level === "A2")) {
    assert.equal(lesson.bilingual, true, lesson.title);
    assert.ok(lesson.questionEn, lesson.title);
    assert.ok(lesson.coreEn, lesson.title);
    assert.equal(lesson.formationEn?.length, lesson.formation.length, lesson.title);
    assert.ok(lesson.uses.every((item) => item.titleEn && item.explanationEn && item.example.en), lesson.title);
    assert.ok(lesson.examples.every((item) => item.en), lesson.title);
    assert.ok(lesson.contrast.every((item) => item.whyEn), lesson.title);
    assert.ok(lesson.practice.every((item) => item.whyEn), lesson.title);
    assert.ok(lesson.conversation.every((item) => item.english), lesson.title);
  }
});

test("the lesson UI exposes all eight core anchors and keeps only related help closed", async () => {
  const source = await readFile("app/verbal-system/VerbLesson.tsx", "utf8");
  for (const id of ["descubrir", "entender", "formar", "usar", "contrastar", "practicar", "transformar", "hablar"]) {
    assert.match(source, new RegExp(`\\[\\"${id}\\",\\"[^\\"]+\\"\\]`), id);
    assert.match(source, new RegExp(`id=\\"${id}\\"`), id);
  }
  for (const language of ["INGLÉS", "ALEMÁN", "FRANCÉS", "PORTUGUÉS", "ITALIANO", "HEBREO MODERNO"]) {
    assert.match(source, new RegExp(`name:\\"${language}\\"`), language);
  }
  assert.equal((source.match(/defaultOpen=\{false\} kind="optional"/g) ?? []).length, 3);
  for (const timing of ["DESCUBRIR · 4 MIN", "ENTENDER · 5 MIN", "FORMAR · 6 MIN", "USAR · 5 MIN", "CONTRASTAR · 4 MIN", "PRACTICAR · 8 MIN", "TRANSFORMAR · 4 MIN", "HABLAR · 9 MIN"]) {
    assert.match(source, new RegExp(timing));
  }
});

test("switching route clears the hidden route-only filter", async () => {
  const source = await readFile("app/verbal-system/SystemHub.tsx", "utf8");
  assert.match(source, /if\(next==="mode"\)setPlane\("Todos"\)/);
  assert.match(source, /else setMode\("Todos"\)/);
  assert.match(source, /aria-controls="verbal-results"/);
  assert.match(source, /role="tabpanel"/);
  assert.match(source, /onKeyDown=\{moveView\}/);
});
