import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import ts from "typescript";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

async function importTypeScript(path) {
  const source = await readFile(join(root, path), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const { antesDespuesCuando, siPasaEsto } = await importTypeScript("app/syntax-labs/data.ts");
const lessons = JSON.parse(execFileSync(process.execPath, [
  "--import", "tsx", "--input-type=module", "--eval",
  "import { lessons } from './app/lesson-catalog.ts'; console.log(JSON.stringify(lessons));",
], { cwd: root, encoding: "utf8" }));

const allText = (value) => JSON.stringify(value).normalize("NFC").toLowerCase();

function assertA2Lesson(lesson, { slug, mode, pcic, decisions }) {
  assert.equal(lesson.slug, slug);
  assert.equal(lesson.level, "A2");
  assert.equal(lesson.category, "Gramática");
  assert.equal(lesson.mode, mode);
  assert.match(lesson.pcic, pcic);
  assert.equal(lesson.timeline.reduce((total, stage) => total + stage.minutes, 0), 45);
  assert.equal(lesson.decisions.length, decisions);
  assert.ok(lesson.decisions.every((item) => item.options.length >= 2));
  assert.ok(lesson.decisions.every((item) => Number.isInteger(item.correct)));
  assert.ok(lesson.decisions.every((item) => item.feedback.length >= 35));
  assert.ok(lesson.repairs.length >= 4);
  assert.ok(lesson.retrieval.length >= 5);
  assert.ok(lesson.production.length >= 3);
  assert.ok(lesson.conversationMinutes >= 7);
  assert.ok(lesson.conversation.length >= 6);
  assert.ok(lesson.conversation.every((item) => item.followUp.length >= 12));
}

test("Antes, después, cuando implements the bounded PCIC 15.3.1 A2 brief", () => {
  assertA2Lesson(antesDespuesCuando, {
    slug: "antes-despues-cuando",
    mode: "timeline",
    pcic: /PCIC 15\.3\.1.*temporales A2/i,
    decisions: 10,
  });
  assert.deepEqual(antesDespuesCuando.productiveTargets, [
    "antes de + infinitivo", "después de + infinitivo", "cuando + presente de indicativo",
  ]);
  assert.deepEqual(antesDespuesCuando.patterns.map((pattern) => pattern.key), [
    "antes-de", "despues-de", "cuando-presente",
  ]);
  assert.ok(antesDespuesCuando.repairs.some((item) => /infinitivo/i.test(item.prompt)));
  assert.ok(antesDespuesCuando.retrieval.some((item) => /sin conectores|sin banco|sin apoyo/i.test(item.prompt)));
  assert.doesNotMatch(allText(antesDespuesCuando), /cuando\s+(?:vaya|sea|tenga|llegue|haga)/i);
  assert.match(antesDespuesCuando.finalTask, /6 acciones/i);
});

test("Si pasa esto implements the bounded PCIC 15.3.6 A2 brief", () => {
  assertA2Lesson(siPasaEsto, {
    slug: "si-pasa-esto",
    mode: "decision",
    pcic: /PCIC 15\.3\.6.*condicionales A2/i,
    decisions: 10,
  });
  assert.deepEqual(siPasaEsto.productiveTargets, [
    "si + presente de indicativo", "consecuencia práctica en presente", "si / sí",
  ]);
  assert.ok(siPasaEsto.questionAnswerCycle.length >= 4);
  assert.ok(siPasaEsto.questionAnswerCycle.some((item) => /sí,/i.test(item.answer)));
  assert.ok(siPasaEsto.repairs.some((item) => /si \/ sí/i.test(item.prompt)));
  assert.doesNotMatch(allText(siPasaEsto), /si\s+(?:tuviera|fuera|pudiera|hubiera|hubiese)|habría/i);
  assert.match(siPasaEsto.finalTask, /6 condiciones/i);
});

test("the shared syntax engine exposes timeline and decision-chain visuals", async () => {
  const [engine, visuals] = await Promise.all([
    readFile(join(root, "app/syntax-labs/SyntaxLab.tsx"), "utf8"),
    readFile(join(root, "app/syntax-labs/SyntaxVisuals.tsx"), "utf8"),
  ]);
  assert.match(visuals, /export function TimelineBuilder/);
  assert.match(visuals, /export function DecisionChain/);
  assert.match(engine, /TimelineBuilder/);
  assert.match(engine, /DecisionChain/);
  assert.doesNotMatch(engine, /draggable=|onDragStart=/);
});

test("both A2 routes are thin pages backed by the shared engine", async () => {
  const [timelineRoute, conditionRoute] = await Promise.all([
    readFile(join(root, "app/antes-despues-cuando/page.tsx"), "utf8"),
    readFile(join(root, "app/si-pasa-esto/page.tsx"), "utf8"),
  ]);
  assert.match(timelineRoute, /<SyntaxLab data=\{antesDespuesCuando\}/);
  assert.match(conditionRoute, /<SyntaxLab data=\{siPasaEsto\}/);
});

test("catalog registers the two A2 lessons in one prerequisite chain", () => {
  const timeline = lessons.find((lesson) => lesson.id === 213);
  const condition = lessons.find((lesson) => lesson.id === 214);
  assert.deepEqual(
    [timeline?.title, timeline?.level, timeline?.category, timeline?.path, timeline?.requires],
    ["Antes, después, cuando", "A2", "Gramática", "/antes-despues-cuando", [212]],
  );
  assert.deepEqual(
    [condition?.title, condition?.level, condition?.category, condition?.path, condition?.requires],
    ["Si pasa esto…", "A2", "Gramática", "/si-pasa-esto", [213]],
  );
  assert.ok(timeline.curriculumOrder < condition.curriculumOrder);
  assert.equal(new Set(lessons.filter((lesson) => lesson.category === "Gramática").map((lesson) => lesson.curriculumOrder)).size,
    lessons.filter((lesson) => lesson.category === "Gramática").length);
});
