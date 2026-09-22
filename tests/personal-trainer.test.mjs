import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import test from "node:test";

let engine;
try {
  engine = await import("../app/entrenador-personal/engine.mjs");
} catch (error) {
  if (error?.code !== "ERR_MODULE_NOT_FOUND") throw error;
}

test("the lesson exposes every requested oral training station in order", () => {
  assert.ok(engine, "missing personal trainer lesson engine");
  assert.deepEqual(
    engine.TRAINING_STAGES.map(({ id }) => id),
    [
      "portada",
      "calentamiento",
      "objetivo",
      "entrenamiento",
      "corregime",
      "cliente-dificil",
      "semana",
      "emergencias",
      "final-boss",
      "resultado",
    ],
  );
  assert.equal(engine.TRAINING_STAGES.find(({ id }) => id === "final-boss").title, "Modo entrenador personal");
});

test("the oral deck contains every selectable goal, exercise and client interruption", () => {
  for (const collection of ["GOALS", "EXERCISES", "CORRECTION_ERRORS", "DIFFICULT_CLIENT_LINES", "EMERGENCIES", "SURPRISES"]) {
    assert.ok(Array.isArray(engine[collection]), `missing ${collection}`);
  }
  assert.deepEqual(engine.GOALS.map(({ id }) => id), ["musculo", "peso", "energia", "resistencia"]);
  assert.deepEqual(engine.EXERCISES.map(({ id }) => id), ["sentadillas", "flexiones", "pesas", "correr", "bicicleta", "estiramientos"]);
  assert.equal(engine.CORRECTION_ERRORS.length, 6);
  assert.equal(engine.DIFFICULT_CLIENT_LINES.length, 8);
  assert.equal(engine.EMERGENCIES.length, 6);
  assert.equal(engine.SURPRISES.length, 7);
});

test("imperative targets and station timing support one 45-minute lesson", () => {
  assert.equal(engine.TRAINING_STAGES.reduce((total, stage) => total + stage.minutes, 0), 45);
  assert.equal(engine.TRAINING_STAGES.find(({ id }) => id === "calentamiento").target, 8);
  assert.equal(engine.TRAINING_STAGES.find(({ id }) => id === "objetivo").target, 8);
  assert.equal(engine.TRAINING_STAGES.find(({ id }) => id === "emergencias").target, 5);
  assert.equal(engine.TRAINING_STAGES.find(({ id }) => id === "final-boss").target, 30);
});

test("teacher controls keep counters non-negative and cycle one prompt at a time", () => {
  assert.equal(typeof engine.adjustCount, "function", "missing adjustCount");
  assert.equal(typeof engine.moveCard, "function", "missing moveCard");
  assert.equal(engine.adjustCount(0, -1), 0);
  assert.equal(engine.adjustCount(7, 1), 8);
  assert.equal(engine.adjustCount(30, 1), 31);
  assert.equal(engine.moveCard(5, 6, 1), 0);
  assert.equal(engine.moveCard(0, 6, -1), 5);
});

test("the complete teacher journey preserves scoped counters and calculates one honest total", () => {
  assert.equal(typeof engine.counterKeyForStage, "function", "missing counterKeyForStage");
  assert.equal(typeof engine.updateCounts, "function", "missing updateCounts");
  assert.equal(typeof engine.countImperatives, "function", "missing countImperatives");

  let counts = {};
  counts = engine.updateCounts(counts, engine.counterKeyForStage("calentamiento"), 2);
  counts = engine.updateCounts(counts, engine.counterKeyForStage("objetivo"), 1);
  counts = engine.updateCounts(counts, engine.counterKeyForStage("emergencias", 0), 5);
  counts = engine.updateCounts(counts, engine.counterKeyForStage("emergencias", 1), 1);
  counts = engine.updateCounts(counts, engine.counterKeyForStage("final-boss"), 1);

  assert.equal(counts["emergencias-0"], 5);
  assert.equal(counts["emergencias-1"], 1);
  assert.equal(engine.countImperatives(counts), 10);
  assert.deepEqual(engine.updateCounts({}, "calentamiento", -1), {});
});

test("the interactive surface stays in Spanish and exposes honest accessible controls", async () => {
  const [component, styles, catalog] = await Promise.all([
    readFile("app/entrenador-personal/PersonalTrainer.tsx", "utf8"),
    readFile("app/entrenador-personal/personal-trainer.css", "utf8"),
    readFile("app/lesson-catalog.ts", "utf8"),
  ]);

  assert.doesNotMatch(component, /\b(?:RUN|LOCK|MOVE|PERSONAL TRAINER MODE)\b/);
  for (const person of ["VOS", "TÚ", "USTEDES"]) assert.match(component, new RegExp(person));
  assert.match(component, /role="group"/);
  assert.match(component, /aria-pressed=/);
  assert.doesNotMatch(component, /role="tab(?:list)?"/);
  assert.match(styles, /\.pt-app\{[^}]*overflow-x:clip/);
  assert.match(styles, /\.pt-header\{[^}]*position:sticky[^}]*top:0/);
  assert.match(styles, /\.pt-command-banner\{[^}]*position:sticky[^}]*top:76px/);
  assert.match(catalog, /8 ESTACIONES · DESAFÍO FINAL/);
});

test("final trainer ranks use the requested score boundaries", () => {
  assert.equal(typeof engine.trainerResult, "function", "missing trainerResult");
  assert.equal(engine.trainerResult(0), "CALENTANDO");
  assert.equal(engine.trainerResult(10), "CALENTANDO");
  assert.equal(engine.trainerResult(11), "BUEN ENTRENADOR");
  assert.equal(engine.trainerResult(20), "BUEN ENTRENADOR");
  assert.equal(engine.trainerResult(21), "PRO");
  assert.equal(engine.trainerResult(29), "PRO");
  assert.equal(engine.trainerResult(30), "MODO ENTRENADOR ACTIVADO");
});

test("the activity is published as a locked B1 conversation lesson", () => {
  const product = JSON.parse(execFileSync(process.execPath, [
    "--import",
    "tsx",
    "--input-type=module",
    "--eval",
    "import { lessons } from './app/lesson-catalog.ts'; import { isFreeLesson, lessonAtPath } from './app/access-policy.ts'; const lesson = lessonAtPath('/entrenador-personal', lessons); console.log(JSON.stringify({ lesson: lesson ?? null, free: lesson ? isFreeLesson(lesson.id) : null, trailingId: lessonAtPath('/entrenador-personal/', lessons)?.id ?? null }));",
  ], { encoding: "utf8" }));
  const { lesson } = product;
  assert.ok(lesson, "missing /entrenador-personal catalog entry");
  assert.equal(lesson.id, 216);
  assert.equal(lesson.level, "B1");
  assert.equal(lesson.category, "Conversación");
  assert.equal(lesson.conversationMode, "play");
  assert.equal(lesson.title, "Entrenador personal");
  assert.equal(lesson.image, "/entrenador-personal/hero.webp");
  assert.equal(product.free, false);
  assert.equal(product.trailingId, lesson.id);
});
