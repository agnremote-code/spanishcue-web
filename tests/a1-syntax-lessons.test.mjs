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

const { conectaLaFrase, ideasDentroDeIdeas } = await importTypeScript("app/syntax-labs/data.ts");
const lessons = JSON.parse(execFileSync(process.execPath, [
  "--import", "tsx", "--input-type=module", "--eval",
  "import { lessons } from './app/lesson-catalog.ts'; console.log(JSON.stringify(lessons));",
], { cwd: root, encoding: "utf8" }));

function allText(value) {
  return JSON.stringify(value).normalize("NFC").toLowerCase();
}

function assertCommonLessonContract(lesson, { slug, pcic, decisions }) {
  assert.equal(lesson.slug, slug);
  assert.equal(lesson.level, "A1");
  assert.equal(lesson.category, "Gramática");
  assert.match(lesson.pcic, pcic);
  assert.equal(lesson.timeline.reduce((total, stage) => total + stage.minutes, 0), 45);
  assert.equal(lesson.decisions.length, decisions);
  assert.ok(lesson.decisions.every((item) => item.options.length >= 2));
  assert.ok(lesson.decisions.every((item) => Number.isInteger(item.correct)));
  assert.ok(lesson.decisions.every((item) => item.feedback.length >= 35));
  assert.ok(lesson.repairs.length >= 4);
  assert.ok(lesson.patterns.every((pattern) => pattern.preview.left && pattern.preview.connector && pattern.preview.right));
  assert.ok(lesson.retrieval.length >= 5);
  assert.ok(lesson.production.length >= 3);
  assert.ok(lesson.conversationMinutes >= 5);
  assert.ok(lesson.conversation.length >= 6);
  assert.ok(lesson.conversation.every((item) => item.followUp.length >= 12));
}

test("Conecta la frase implements the bounded PCIC 14 A1 brief", () => {
  assertCommonLessonContract(conectaLaFrase, {
    slug: "conecta-la-frase",
    pcic: /PCIC 14.*coordinación/i,
    decisions: 10,
  });
  assert.equal(conectaLaFrase.mode, "connector");
  assert.deepEqual(conectaLaFrase.productiveTargets, ["y", "ni", "o", "pero", "uno… otro"]);
  assert.deepEqual(conectaLaFrase.patterns.map((pattern) => pattern.key), ["y", "ni", "o", "pero", "uno-otro"]);
  assert.doesNotMatch(allText(conectaLaFrase.productiveTargets), /\by\s*(?:→|->)\s*e\b|\bo\s*(?:→|->)\s*u\b/);
  assert.ok(conectaLaFrase.retrieval.some((item) => /sin banco|sin opciones|sin apoyo/i.test(item.prompt)));
  assert.ok(conectaLaFrase.finalTask.includes("8 conexiones"));
});

test("Ideas dentro de ideas implements the bounded PCIC 15 A1 brief", () => {
  assertCommonLessonContract(ideasDentroDeIdeas, {
    slug: "ideas-dentro-de-ideas",
    pcic: /PCIC 15.*subordinación A1/i,
    decisions: 12,
  });
  assert.equal(ideasDentroDeIdeas.mode, "clause");
  assert.deepEqual(ideasDentroDeIdeas.productiveTargets, [
    "ser + infinitivo",
    "gustar + infinitivo",
    "querer + infinitivo",
    "creer que + oración",
    "nombre + que + presente",
    "porque",
    "para + infinitivo",
  ]);
  assert.deepEqual(ideasDentroDeIdeas.patterns.map((pattern) => pattern.key), [
    "actividad", "gusto", "deseo", "opinion", "identificacion", "razon", "objetivo",
  ]);
  assert.ok(ideasDentroDeIdeas.questionAnswerCycle.length >= 4);
  assert.ok(ideasDentroDeIdeas.questionAnswerCycle.every((item) => item.question.includes("¿Por qué")));
  assert.ok(ideasDentroDeIdeas.questionAnswerCycle.every((item) => item.answer.includes("porque")));
  assert.ok(ideasDentroDeIdeas.repairs.some((item) => item.prompt.includes("para")));
  assert.ok(ideasDentroDeIdeas.repairs.some((item) => /por qué|porque/i.test(item.prompt)));
  assert.ok(ideasDentroDeIdeas.finalTask.includes("Mi mapa A1"));
});

test("the shared syntax engine exposes accessible reusable mechanics", async () => {
  const [engine, visuals] = await Promise.all([
    readFile(join(root, "app/syntax-labs/SyntaxLab.tsx"), "utf8"),
    readFile(join(root, "app/syntax-labs/SyntaxVisuals.tsx"), "utf8"),
  ]);
  assert.match(visuals, /export function SentenceConnector/);
  assert.match(visuals, /export function ClauseBuilder/);
  assert.match(engine, /<GrammarStep/g);
  assert.match(engine, /<button/g);
  assert.match(engine, /aria-pressed=/);
  assert.match(engine, /role="status"/);
  assert.match(engine, /SentenceConnector/);
  assert.match(engine, /ClauseBuilder/);
  assert.doesNotMatch(engine, /draggable=|onDragStart=/);
});

test("both routes are thin pages backed by the shared engine", async () => {
  const [connectRoute, clauseRoute] = await Promise.all([
    readFile(join(root, "app/conecta-la-frase/page.tsx"), "utf8"),
    readFile(join(root, "app/ideas-dentro-de-ideas/page.tsx"), "utf8"),
  ]);
  assert.match(connectRoute, /<SyntaxLab data=\{conectaLaFrase\}/);
  assert.match(clauseRoute, /<SyntaxLab data=\{ideasDentroDeIdeas\}/);
});

test("catalog registers the two lessons in the A1 grammar prerequisite chain", () => {
  const connector = lessons.find((lesson) => lesson.id === 211);
  const clauses = lessons.find((lesson) => lesson.id === 212);
  assert.deepEqual(
    [connector?.title, connector?.level, connector?.category, connector?.path, connector?.requires],
    ["Conecta la frase", "A1", "Gramática", "/conecta-la-frase", [111]],
  );
  assert.deepEqual(
    [clauses?.title, clauses?.level, clauses?.category, clauses?.path, clauses?.requires],
    ["Ideas dentro de ideas", "A1", "Gramática", "/ideas-dentro-de-ideas", [211]],
  );
  assert.ok(connector.curriculumOrder < clauses.curriculumOrder);
  assert.equal(new Set(lessons.filter((lesson) => lesson.category === "Gramática").map((lesson) => lesson.curriculumOrder)).size,
    lessons.filter((lesson) => lesson.category === "Gramática").length);
});
