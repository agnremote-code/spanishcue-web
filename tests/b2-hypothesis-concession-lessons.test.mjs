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

const { siFueraDistinto, aunqueCambieElDato } = await importTypeScript("app/syntax-labs/data.ts");
const lessons = JSON.parse(execFileSync(process.execPath, [
  "--import", "tsx", "--input-type=module", "--eval",
  "import { lessons } from './app/lesson-catalog.ts'; console.log(JSON.stringify(lessons));",
], { cwd: root, encoding: "utf8" }));

const allText = (value) => JSON.stringify(value).normalize("NFC").toLowerCase();

function assertB2Lesson(lesson, { slug, mode, pcic }) {
  assert.equal(lesson.slug, slug);
  assert.equal(lesson.level, "B2");
  assert.equal(lesson.category, "Gramática");
  assert.equal(lesson.mode, mode);
  assert.match(lesson.pcic, pcic);
  assert.equal(lesson.timeline.reduce((total, stage) => total + stage.minutes, 0), 45);
  assert.ok(lesson.decisions.length >= 10);
  assert.ok(lesson.decisions.every((item) => item.options.length >= 2));
  assert.ok(lesson.decisions.every((item) => Number.isInteger(item.correct)));
  assert.ok(lesson.decisions.every((item) => item.feedback.length >= 45));
  assert.ok(lesson.repairs.length >= 4);
  assert.ok(lesson.retrieval.length >= 5);
  assert.ok(lesson.production.length >= 3);
  assert.ok(lesson.conversationMinutes >= 7);
  assert.ok(lesson.conversation.length >= 6);
  assert.ok(lesson.conversation.every((item) => item.followUp.length >= 12));
}

test("Si fuera distinto implements the bounded PCIC 15.3.6 B2 brief", () => {
  assertB2Lesson(siFueraDistinto, {
    slug: "si-fuera-distinto",
    mode: "hypothesis",
    pcic: /PCIC 15\.3\.6.*condicionales B2/i,
  });
  assert.deepEqual(siFueraDistinto.productiveTargets, [
    "si + presente → resultado real",
    "si + imperfecto de subjuntivo → condicional simple",
    "orden de cláusulas flexible",
  ]);
  assert.deepEqual(siFueraDistinto.patterns.map((pattern) => pattern.key), [
    "real-posible", "hipotetico-improbable", "orden-invertido",
  ]);
  assert.match(allText(siFueraDistinto), /si \+ condicional/);
  assert.match(allText(siFueraDistinto), /presente de subjuntivo/);
  assert.doesNotMatch(allText(siFueraDistinto), /hubiera|hubiese|habría/);
  assert.ok(siFueraDistinto.retrieval.some((item) => /sin apoyo|sin marco|reformul/i.test(`${item.prompt} ${item.challenge}`)));
  assert.match(siFueraDistinto.finalTask, /plan imposible.*negociable/i);
});

test("Aunque cambie el dato implements the bounded PCIC 15.3.9 B2 brief", () => {
  assertB2Lesson(aunqueCambieElDato, {
    slug: "aunque-cambie-el-dato",
    mode: "evidence",
    pcic: /PCIC 15\.3\.9.*concesivas B2/i,
  });
  assert.deepEqual(aunqueCambieElDato.productiveTargets, [
    "nuevo / afirmado → indicativo",
    "conocido / presupuesto → subjuntivo",
    "hipotético / no factual → subjuntivo",
  ]);
  assert.deepEqual(aunqueCambieElDato.patterns.map((pattern) => pattern.key), [
    "nuevo-afirmado", "conocido-presupuesto", "hipotetico-no-factual",
  ]);
  assert.ok(aunqueCambieElDato.decisions.some((item) => /ambas|dos modos|interpretaci/i.test(`${item.prompt} ${item.feedback}`)));
  assert.ok(aunqueCambieElDato.retrieval.some((item) => /mismas palabras|misma proposición|nuevo contexto/i.test(`${item.prompt} ${item.challenge}`)));
  assert.match(allText(aunqueCambieElDato), /a pesar de que/);
  assert.match(aunqueCambieElDato.finalTask, /debate/i);
});

test("the shared syntax engine exposes reusable hypothesis and evidence switches", async () => {
  const [engine, visuals, styles] = await Promise.all([
    readFile(join(root, "app/syntax-labs/SyntaxLab.tsx"), "utf8"),
    readFile(join(root, "app/syntax-labs/SyntaxVisuals.tsx"), "utf8"),
    readFile(join(root, "app/syntax-labs/style.css"), "utf8"),
  ]);
  assert.match(visuals, /export function HypothesisSwitch/);
  assert.match(visuals, /export function EvidenceSwitch/);
  assert.match(engine, /HypothesisSwitch/);
  assert.match(engine, /EvidenceSwitch/);
  assert.match(styles, /sx-hypothesis-switch/);
  assert.match(styles, /sx-evidence-switch/);
  assert.match(engine, /aria-pressed=/);
  assert.doesNotMatch(engine, /draggable=|onDragStart=/);
});

test("both B2 routes are thin pages backed by the shared engine", async () => {
  const [hypothesisRoute, evidenceRoute] = await Promise.all([
    readFile(join(root, "app/si-fuera-distinto/page.tsx"), "utf8"),
    readFile(join(root, "app/aunque-cambie-el-dato/page.tsx"), "utf8"),
  ]);
  assert.match(hypothesisRoute, /<SyntaxLab data=\{siFueraDistinto\}/);
  assert.match(evidenceRoute, /<SyntaxLab data=\{aunqueCambieElDato\}/);
});

test("catalog registers both B2 lessons after the B1 batch in one prerequisite chain", () => {
  const hypothesis = lessons.find((lesson) => lesson.id === 219);
  const evidence = lessons.find((lesson) => lesson.id === 220);
  assert.deepEqual(
    [hypothesis?.title, hypothesis?.level, hypothesis?.category, hypothesis?.path, hypothesis?.requires],
    ["Si fuera distinto…", "B2", "Gramática", "/si-fuera-distinto", [218, 150]],
  );
  assert.deepEqual(
    [evidence?.title, evidence?.level, evidence?.category, evidence?.path, evidence?.requires],
    ["Aunque cambie el dato…", "B2", "Gramática", "/aunque-cambie-el-dato", [219]],
  );
  assert.ok(hypothesis.curriculumOrder < evidence.curriculumOrder);
  assert.equal(new Set(lessons.filter((lesson) => lesson.category === "Gramática").map((lesson) => lesson.curriculumOrder)).size,
    lessons.filter((lesson) => lesson.category === "Gramática").length);
});
