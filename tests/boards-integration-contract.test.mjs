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

const adapter = await importTypeScript("../app/boards/catalog-adapter.ts");
const catalog = await readFile(new URL("../app/lesson-catalog.ts", import.meta.url), "utf8");
const library = await readFile(new URL("../app/Library.tsx", import.meta.url), "utf8");
const filters = await readFile(new URL("../app/library-filters.mjs", import.meta.url), "utf8");
const worker = await readFile(new URL("../worker/index.ts", import.meta.url), "utf8");
const b1Page = await readFile(new URL("../app/tablero-de-eso-si-hablo/page.tsx", import.meta.url), "utf8");
const b2Page = await readFile(new URL("../app/tablero-no-es-tan-simple/page.tsx", import.meta.url), "utf8");
const access = await importTypeScript("../app/boards/access.ts");

test("adapter keeps pedagogical category, style and collection as separate metadata", () => {
  assert.equal(adapter.BOARD_CONVERSATION_STYLE, "boards");
  assert.deepEqual(adapter.boardCatalogMetadata, {
    category: "Conversación",
    conversationMode: "boards",
    collection: "Tableros",
    countryCollection: false,
    special: true,
  });
});

test("adapter supplies two PRO-ready level-specific lesson entries", () => {
  assert.equal(adapter.boardLessonEntries.length, 2);
  assert.deepEqual(adapter.boardLessonEntries.map((entry) => entry.level), ["B1", "B2"]);
  assert.deepEqual(adapter.boardLessonEntries.map((entry) => entry.path), [
    "/tablero-de-eso-si-hablo",
    "/tablero-no-es-tan-simple",
  ]);
  assert.ok(adapter.boardLessonEntries.every((entry) => entry.special === true));
  assert.ok(adapter.boardLessonEntries.every((entry) => entry.conversationMode === "boards"));
  assert.ok(adapter.boardLessonEntries.every((entry) => entry.collection === "Tableros"));
  assert.ok(adapter.boardLessonEntries.every((entry) => entry.countryCollection === false));
  assert.ok(adapter.boardLessonEntries.every((entry) => !Object.hasOwn(entry, "id")));
});

test("release integration connects both PRO boards without merging the countries collection", () => {
  assert.match(catalog, /boardLessonIds\s*=\s*\[205,206\]/);
  assert.match(catalog, /boardLessonEntries\.map[\s\S]*id:boardLessonIds\[index\]/);
  assert.match(catalog, /conversationMode\?:\s*"worlds"\|"play"\|"boards"/);
  assert.match(library, /"boards"/);
  assert.match(library, /TABLEROS/);
  assert.match(library, /countryCollection/);
  assert.match(filters, /Gramática.*Conversación.*Escucha.*Fonética.*Vocabulario/s);
  assert.doesNotMatch(filters, /Tableros/);
});

test("both standalone board routes are recognized and protected as PRO", () => {
  for (const path of ["/tablero-de-eso-si-hablo", "/tablero-no-es-tan-simple"]) {
    assert.equal(access.isPremiumBoardPath(path), true);
    assert.equal(access.isPremiumBoardPath(`${path}/`), true);
  }
  assert.equal(access.isPremiumBoardPath("/past-b1"), false);
  assert.match(worker, /isPremiumBoardPath/);
  assert.match(worker, /premiumBoard.*!fullAccess/s);
  for (const page of [b1Page, b2Page]) {
    assert.match(page, /fullAccessFromHeaders/);
    assert.match(page, /redirect\(/);
  }
});
