import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

async function importTypeScript(path) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const [{ b1Board }, { b2Board }, { validateBoardBank }] = await Promise.all([
  importTypeScript("../app/boards/b1-data.ts"),
  importTypeScript("../app/boards/b2-data.ts"),
  importTypeScript("../app/boards/validate.ts"),
]);

function assertBankShape(bank, prefix) {
  assert.equal(bank.categories.length, 6);
  assert.equal(new Set(bank.categories).size, 6);
  assert.equal(bank.questions.length, 72);
  assert.equal(bank.finals.length, 12);
  assert.ok(bank.questions.every((question) => question.id.startsWith(`${prefix}-q-`)));
  assert.ok(bank.finals.every((question) => question.id.startsWith(`${prefix}-f-`)));
  for (const category of bank.categories) {
    assert.equal(bank.questions.filter((question) => question.category === category).length, 12);
  }
  for (const question of bank.questions) {
    assert.equal(question.followUps.length, 2);
    assert.ok(question.followUps.every((followUp) => followUp.trim().length > 12));
  }
}

test("B1 and B2 expose the exact requested bank sizes", () => {
  assertBankShape(b1Board, "b1");
  assertBankShape(b2Board, "b2");
  assert.equal(
    [...b1Board.questions, ...b2Board.questions].reduce((total, question) => total + question.followUps.length, 0),
    288,
  );
});

test("exactly 24 B2 principals offer an optional condition change", () => {
  assert.equal(b2Board.questions.filter((question) => question.conditionChange).length, 24);
  assert.equal(b1Board.questions.filter((question) => question.conditionChange).length, 0);
});

test("all principal and final IDs are globally unique", () => {
  const ids = [b1Board, b2Board].flatMap((bank) => [
    ...bank.questions.map((question) => question.id),
    ...bank.finals.map((question) => question.id),
  ]);
  assert.equal(new Set(ids).size, 168);
});

test("validator accepts both authored banks", () => {
  assert.deepEqual(validateBoardBank(b1Board), []);
  assert.deepEqual(validateBoardBank(b2Board), []);
});

test("validator reports counts, duplicate IDs, duplicate prompts and level mismatches", () => {
  const invalid = {
    ...b1Board,
    level: "B2",
    questions: [b1Board.questions[0], { ...b1Board.questions[0] }],
    finals: [],
  };
  const errors = validateBoardBank(invalid);
  assert.ok(errors.some((error) => error.includes("72 principales")));
  assert.ok(errors.some((error) => error.includes("12 finales")));
  assert.ok(errors.some((error) => error.includes("ID duplicado")));
  assert.ok(errors.some((error) => error.toLowerCase().includes("texto duplicado")));
  assert.ok(errors.some((error) => error.includes("nivel")));
});

test("validator detects substantial overlap with comparison banks", () => {
  const overlapping = {
    ...b1Board,
    questions: [
      ...b1Board.questions.slice(0, -1),
      { ...b1Board.questions.at(-1), prompt: "¿Qué plan reciente no salió como esperabas y qué ocurrió?" },
    ],
  };
  const errors = validateBoardBank(overlapping, {
    comparisonTexts: ["¿Qué plan reciente no salió como esperabas?"],
  });
  assert.ok(errors.some((error) => error.toLowerCase().includes("solapamiento sustancial")));
});
