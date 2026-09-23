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

const { peroHayUnMatiz, laPersonaQueTengoEnMente } = await importTypeScript("app/syntax-labs/data.ts");
const lessons = JSON.parse(execFileSync(process.execPath, [
  "--import", "tsx", "--input-type=module", "--eval",
  "import { lessons } from './app/lesson-catalog.ts'; console.log(JSON.stringify(lessons));",
], { cwd: root, encoding: "utf8" }));

const allText = (value) => JSON.stringify(value).normalize("NFC").toLowerCase();

function assertB1Lesson(lesson, { slug, mode, pcic, conversationMinutes }) {
  assert.equal(lesson.slug, slug);
  assert.equal(lesson.level, "B1");
  assert.equal(lesson.category, "Gramática");
  assert.equal(lesson.mode, mode);
  assert.match(lesson.pcic, pcic);
  assert.equal(lesson.timeline.reduce((total, stage) => total + stage.minutes, 0), 45);
  assert.ok(lesson.decisions.length >= 10);
  assert.ok(lesson.decisions.every((item) => item.options.length >= 2));
  assert.ok(lesson.decisions.every((item) => Number.isInteger(item.correct)));
  assert.ok(lesson.decisions.every((item) => item.feedback.length >= 35));
  assert.ok(lesson.repairs.length >= 4);
  assert.ok(lesson.retrieval.length >= 5);
  assert.ok(lesson.production.length >= 3);
  assert.ok(lesson.conversationMinutes >= conversationMinutes);
  assert.ok(lesson.conversation.length >= 6);
  assert.ok(lesson.conversation.every((item) => item.followUp.length >= 12));
}

test("Pero hay un matiz implements the bounded PCIC 14.1/14.3 B1 brief", () => {
  assertB1Lesson(peroHayUnMatiz, {
    slug: "pero-hay-un-matiz",
    mode: "contrast",
    pcic: /PCIC 14\.1.*14\.3.*coordinación B1/i,
    conversationMinutes: 8,
  });
  assert.deepEqual(peroHayUnMatiz.productiveTargets, [
    "ni… ni", "sin embargo", "aunque adversativo",
  ]);
  assert.deepEqual(peroHayUnMatiz.patterns.map((pattern) => pattern.key), [
    "ni-ni", "sin-embargo", "aunque-adversativo",
  ]);
  assert.ok(peroHayUnMatiz.repairs.some((item) => /puntuación|posición/i.test(item.prompt)));
  assert.ok(peroHayUnMatiz.decisions.some((item) => /concesiv/i.test(`${item.prompt} ${item.feedback}`)));
  assert.ok(peroHayUnMatiz.retrieval.some((item) => /sin etiquetas|sin banco|sin apoyo/i.test(item.prompt)));
  assert.match(peroHayUnMatiz.finalTask, /panel|opinión/i);
});

test("La persona que tengo en mente implements the bounded PCIC 15.2 B1 brief", () => {
  assertB1Lesson(laPersonaQueTengoEnMente, {
    slug: "la-persona-que-tengo-en-mente",
    mode: "referent",
    pcic: /PCIC 15\.2.*relativas B1/i,
    conversationMinutes: 7,
  });
  assert.deepEqual(laPersonaQueTengoEnMente.productiveTargets, [
    "antecedente expreso + que", "persona + quien", "indicativo conocido",
  ]);
  assert.ok(laPersonaQueTengoEnMente.repairs.some((item) => /ambig/i.test(`${item.prompt} ${item.feedback}`)));
  assert.ok(laPersonaQueTengoEnMente.retrieval.some((item) => /sin marco|sin apoyo|información incompleta/i.test(item.prompt)));
  assert.doesNotMatch(allText(laPersonaQueTengoEnMente), /cuyo|cuanto|el cual|la cual|los cuales|las cuales|subjuntiv/);
  assert.match(laPersonaQueTengoEnMente.finalTask, /persona.*lugar.*cosa/i);
});

test("the shared syntax engine exposes reusable contrast and referent visuals", async () => {
  const [engine, visuals] = await Promise.all([
    readFile(join(root, "app/syntax-labs/SyntaxLab.tsx"), "utf8"),
    readFile(join(root, "app/syntax-labs/SyntaxVisuals.tsx"), "utf8"),
  ]);
  assert.match(visuals, /export function ContrastMixer/);
  assert.match(visuals, /export function ReferentFinder/);
  assert.match(engine, /ContrastMixer/);
  assert.match(engine, /ReferentFinder/);
  assert.match(engine, /aria-pressed=/);
  assert.match(engine, /role="status"/);
  assert.doesNotMatch(engine, /draggable=|onDragStart=/);
});

test("both B1 routes are thin pages backed by the shared engine", async () => {
  const [contrastRoute, referentRoute] = await Promise.all([
    readFile(join(root, "app/pero-hay-un-matiz/page.tsx"), "utf8"),
    readFile(join(root, "app/la-persona-que-tengo-en-mente/page.tsx"), "utf8"),
  ]);
  assert.match(contrastRoute, /<SyntaxLab data=\{peroHayUnMatiz\}/);
  assert.match(referentRoute, /<SyntaxLab data=\{laPersonaQueTengoEnMente\}/);
});

test("catalog registers both B1 lessons as one prerequisite chain", () => {
  const contrast = lessons.find((lesson) => lesson.id === 217);
  const referent = lessons.find((lesson) => lesson.id === 218);
  assert.deepEqual(
    [contrast?.title, contrast?.level, contrast?.category, contrast?.path, contrast?.requires],
    ["Pero hay un matiz", "B1", "Gramática", "/pero-hay-un-matiz", [214]],
  );
  assert.deepEqual(
    [referent?.title, referent?.level, referent?.category, referent?.path, referent?.requires],
    ["La persona que tengo en mente", "B1", "Gramática", "/la-persona-que-tengo-en-mente", [217]],
  );
  assert.ok(contrast.curriculumOrder < referent.curriculumOrder);
  assert.equal(new Set(lessons.filter((lesson) => lesson.category === "Gramática").map((lesson) => lesson.curriculumOrder)).size,
    lessons.filter((lesson) => lesson.category === "Gramática").length);
});
