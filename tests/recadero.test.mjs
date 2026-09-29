import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import test from "node:test";

const engine = await import("../app/el-recadero-de-puerto-neon/engine.mjs");

test("the mission runs through seven stages that fill one 45-minute lesson", () => {
  assert.deepEqual(engine.STAGES.map(({ id }) => id), ["arranque", "mercado", "puerto", "barrio-alto", "techos", "terraza", "ranking"]);
  assert.equal(engine.STAGES.reduce((total, stage) => total + stage.minutes, 0), 45);
});

test("every multiple-choice item has three options and a valid answer", () => {
  assert.equal(engine.DISCOVERY_QUESTIONS.length, 3);
  assert.equal(engine.CARGO.length, 8);
  assert.equal(engine.CROSSED.length, 6);
  for (const item of [...engine.DISCOVERY_QUESTIONS, ...engine.CARGO, ...engine.CROSSED]) {
    assert.equal(item.options.length, 3);
    assert.ok(Number.isInteger(item.answer) && item.answer >= 0 && item.answer < 3);
    assert.ok(item.hint.length > 10);
  }
  assert.deepEqual(engine.DISCOVERY_QUESTIONS.map((item) => item.answer), [0, 1, 1]);
  assert.deepEqual(
    engine.CARGO.map((item) => item.options[item.answer]),
    ["lleves", "compres", "tiene", "a qué hora", "esperes", "su", "llames", "ir allá"],
  );
  assert.equal(engine.CROSSED[2].options[engine.CROSSED[2].answer], "Chela dice que lleves tu guitarra.");
});

test("the free route offers three routes with four model-backed cards each", () => {
  assert.equal(engine.ROUTES.length, 3);
  for (const route of engine.ROUTES) {
    assert.equal(route.cards.length, 4);
    for (const card of route.cards) assert.ok(card.model.length > card.from.length);
  }
  assert.equal(engine.ROUTES.find(({ id }) => id === "atajo").bonus, 10);
  assert.equal(engine.FINAL_CHECKLIST.length, 5);
  assert.equal(engine.FINAL_ROLES.length, 4);
});

test("a wrong first try costs half a star that the correction gives back", () => {
  let state = engine.initialState();
  state = engine.applyAnswer(state, "c0", false);
  assert.equal(state.respect, 2.5);
  state = engine.applyAnswer(state, "c0", false);
  assert.equal(state.respect, 2.5);
  state = engine.applyAnswer(state, "c0", true);
  assert.equal(state.respect, 3);
  assert.equal(state.coins, 10);
  assert.equal(engine.applyAnswer(state, "c0", true), state);
});

test("deliveries toggle their coins and the atajo pays its bonus", () => {
  let state = engine.initialState();
  state = engine.applyDelivery(state, "atajo-0", true, 10);
  assert.equal(state.coins, 30);
  state = engine.applyDelivery(state, "atajo-0", true, 10);
  assert.equal(state.coins, 30);
  state = engine.applyDelivery(state, "atajo-0", false, 10);
  assert.equal(state.coins, 0);
  state = engine.applyDelivery(state, "avenida-1", false);
  assert.equal(state.coins, 0);
});

test("the final verdict and the neighbourhood ranks use the designed boundaries", () => {
  assert.equal(engine.missionVerdict(5).reward, 100);
  assert.equal(engine.missionVerdict(3).reward, 60);
  assert.equal(engine.missionVerdict(2).reward, 0);
  assert.equal(engine.rankFor(159), "Novato de esquina");
  assert.equal(engine.rankFor(160), "Recadero de confianza");
  assert.equal(engine.rankFor(309), "Recadero de confianza");
  assert.equal(engine.rankFor(310), "Leyenda de Puerto Neón");
});

test("the game surface stays in Spanish and uses accessible controls", async () => {
  const [component, styles] = await Promise.all([
    readFile("app/el-recadero-de-puerto-neon/RecaderoGame.tsx", "utf8"),
    readFile("app/el-recadero-de-puerto-neon/recadero.css", "utf8"),
  ]);
  assert.doesNotMatch(component, /\b(?:GTA|Grand Theft|WANTED|MISSION|START|NEXT)\b/);
  for (const label of ["ARRANCAR EL TURNO", "CARGAR PAQUETE", "REPARAR MENSAJE", "ENTREGADO ✓", "CRUZADO ✗", "EMPEZAR LA MEDIACIÓN", "MANDAR NOTA DE VOZ", "VER RANKING", "SOLO PROFESOR · ABRIR ROL", "CHULETA DEL RECADERO"]) {
    assert.ok(component.includes(label), `missing button text ${label}`);
  }
  assert.match(component, /role="group"/);
  assert.match(component, /aria-pressed=/);
  assert.doesNotMatch(styles, /:root/);
  assert.match(styles, /\.rp-app\{[^}]*overflow-x:clip/);
});

test("the mission is published as a locked B1 Modo Play conversation lesson", () => {
  const product = JSON.parse(execFileSync(process.execPath, [
    "--import",
    "tsx",
    "--input-type=module",
    "--eval",
    "import { lessons } from './app/lesson-catalog.ts'; import { isFreeLesson, lessonAtPath } from './app/access-policy.ts'; const lesson = lessonAtPath('/el-recadero-de-puerto-neon', lessons); console.log(JSON.stringify({ lesson: lesson ?? null, free: lesson ? isFreeLesson(lesson.id) : null }));",
  ], { encoding: "utf8" }));
  const { lesson } = product;
  assert.ok(lesson, "missing /el-recadero-de-puerto-neon catalog entry");
  assert.equal(lesson.id, 222);
  assert.equal(lesson.level, "B1");
  assert.equal(lesson.category, "Conversación");
  assert.equal(lesson.conversationMode, "play");
  assert.equal(lesson.tag, "MODO PLAY · DISCURSO REFERIDO · 5 ENCARGOS · MISIÓN FINAL");
  assert.equal(product.free, false);
});
