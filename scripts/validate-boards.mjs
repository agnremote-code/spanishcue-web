import { readFile } from "node:fs/promises";
import ts from "typescript";

async function importTypeScript(path) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

function quotedStrings(source) {
  return [...source.matchAll(/(["'`])((?:\\.|(?!\1).){12,}?)\1/gs)]
    .map((match) => match[2].replace(/\\[nrt]/g, " "))
    .filter((value) => value.includes(" "));
}

const comparisonPaths = [
  "../app/modo-play-uno-o-el-otro/choices.ts",
  "../app/modo-play-y-ahora-que/data.ts",
  "../app/life-roulette/data.ts",
];
const comparisonTexts = (
  await Promise.all(comparisonPaths.map((path) => readFile(new URL(path, import.meta.url), "utf8")))
).flatMap(quotedStrings);

const [{ b1Board }, { b2Board }, { validateBoardBank }] = await Promise.all([
  importTypeScript("../app/boards/b1-data.ts"),
  importTypeScript("../app/boards/b2-data.ts"),
  importTypeScript("../app/boards/validate.ts"),
]);

const banks = [b1Board, b2Board];
const errors = banks.flatMap((bank) =>
  validateBoardBank(bank, { comparisonTexts }).map((error) => `${bank.level}: ${error}`),
);
const globalIds = banks.flatMap((bank) => [
  ...bank.questions.map((question) => question.id),
  ...bank.finals.map((question) => question.id),
]);
if (new Set(globalIds).size !== globalIds.length) errors.push("GLOBAL: Hay IDs repetidos entre bancos.");

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  const main = banks.reduce((total, bank) => total + bank.questions.length, 0);
  const finals = banks.reduce((total, bank) => total + bank.finals.length, 0);
  const followUps = banks.reduce(
    (total, bank) => total + bank.questions.reduce((subtotal, question) => subtotal + question.followUps.length, 0),
    0,
  );
  console.log(`Tableros válidos: ${main} principales + ${finals} finales + ${followUps} repreguntas.`);
  console.log("Distribución: 12 principales por cada una de las 12 categorías; B2 incluye 24 cambios de condición.");
  console.log(`Comparación editorial: ${comparisonTexts.length} textos de Uno o el otro, ¿Y ahora qué? y La Ruleta de Tu Vida.`);
}
