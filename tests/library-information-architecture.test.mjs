import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import * as filters from "../app/library-filters.mjs";

test("all-level browsing is grouped into capped, ordered level previews", () => {
  assert.equal(typeof filters.groupLessonsByLevel, "function");

  const lessons = [
    { id: 1, level: "A1", category: "Conversación", routeSequence: 2 },
    { id: 2, level: "A1", category: "Gramática", routeSequence: 1 },
    { id: 3, level: "A2", levels: ["A1", "A2"], category: "Escucha", routeSequence: 1 },
    { id: 4, level: "A1", category: "Fonética", routeSequence: 1 },
    { id: 5, level: "A1", category: "Vocabulario", routeSequence: 1 },
    { id: 6, level: "B1", category: "Conversación", routeSequence: 1 },
  ];

  assert.deepEqual(filters.groupLessonsByLevel(lessons, ["A1", "A2", "B1"], 4), [
    { level: "A1", total: 5, lessons: [lessons[1], lessons[0], lessons[2], lessons[3]] },
    { level: "A2", total: 1, lessons: [lessons[2]] },
    { level: "B1", total: 1, lessons: [lessons[5]] },
  ]);
});

test("family sources match the destination shown after a filter resets level", () => {
  const lessons = [
    { id: 1, level: "A1", category: "Conversación", conversationMode: "worlds", title: "", subtitle: "", tag: "" },
    { id: 2, level: "B1", category: "Conversación", conversationMode: "play", title: "", subtitle: "", tag: "" },
    { id: 3, level: "A2", category: "Conversación", conversationMode: "boards", title: "", subtitle: "", tag: "" },
    { id: 4, level: "B2", category: "Conversación", countryCollection: true, title: "", subtitle: "", tag: "" },
    { id: 5, level: "A1", category: "Gramática", verbalSystem: true, title: "", subtitle: "", tag: "" },
    { id: 6, level: "A1", category: "Gramática", title: "", subtitle: "", tag: "" },
  ];

  assert.deepEqual(filters.familyLessonsForCategory(lessons, { category: "Conversación", conversationMode: "play" }), [lessons[1]]);
  assert.deepEqual(filters.familyLessonsForCategory(lessons, { category: "Conversación", conversationMode: "all" }), lessons.slice(0, 4));
  assert.deepEqual(filters.familyLessonsForCategory(lessons, { category: "Gramática", grammarMode: "system" }), [lessons[4]]);
  assert.deepEqual(filters.familyLessonsForCategory(lessons, { category: "Gramática", grammarMode: "all" }), lessons.slice(4));
  assert.deepEqual(filters.familyLessonsForCategory(lessons, { category: "Todas" }), [lessons[0], lessons[1], lessons[2], lessons[5]]);
});

test("library shell follows category, family, level, lessons and removes duplicate navigation", async () => {
  const library = await readFile(new URL("../app/Library.tsx", import.meta.url), "utf8");

  const category = library.indexOf('className="route-divider"');
  const family = library.indexOf('className="conversation-family-filter"');
  const level = library.indexOf('className="category-levels"');
  const lessons = library.indexOf('className="level-catalog-sections"');

  assert.ok(category >= 0 && family > category && level > family && lessons > level);
  assert.doesNotMatch(library, /className="combined-filters"/);
  assert.doesNotMatch(library, /className="curriculum-strip"/);
  assert.match(library, /groupLessonsByLevel\(visibleLessons, categoryLevels, 4\)/);
  assert.match(library, /Ver todas las clases/);
  assert.match(library, /view === "Biblioteca" \? familyLessonSource : lessons/);
  assert.match(library, /prefers-reduced-motion: reduce/);
  assert.match(library, /levelFocusTargetRef/);
  assert.doesNotMatch(library, /\["all", "GENERAL"\]/);
  assert.ok(library.indexOf("<ProductPreview") > lessons);
});

test("featured lessons are compact, curated and responsive", async () => {
  const [sections, styles] = await Promise.all([
    readFile(new URL("../app/marketing/MarketingSections.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/library-architecture.css", import.meta.url), "utf8"),
  ]);

  assert.match(sections, /CLASES DESTACADAS/);
  assert.match(sections, /Probá una clase antes de elegir\./);
  assert.match(sections, /selectFreeProductSamples\(lessons\)\.slice\(0, 4\)/);
  assert.match(styles, /@media \(max-width: 700px\)/);
  assert.match(styles, /overflow-x:\s*auto/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /:focus-visible/);
});
