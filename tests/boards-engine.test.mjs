import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

async function importTypeScript(path) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const engine = await importTypeScript("../app/boards/engine.ts");

const bank = {
  id: "test-board",
  level: "B1",
  title: "Test",
  categories: ["A", "B"],
  questions: [
    { id: "a-1", category: "A", prompt: "A uno", followUps: ["A1a", "A1b"] },
    { id: "a-2", category: "A", prompt: "A dos", followUps: ["A2a", "A2b"] },
    { id: "b-1", category: "B", prompt: "B uno", followUps: ["B1a", "B1b"] },
    { id: "b-2", category: "B", prompt: "B dos", followUps: ["B2a", "B2b"] },
  ],
  finals: [{ id: "final-1", prompt: "Final" }],
};

const firstRandom = () => 0;

test("creates a shuffled session from one or several selected categories", () => {
  const single = engine.createSession(bank, ["A"], firstRandom);
  assert.deepEqual(new Set(single.queue), new Set(["a-1", "a-2"]));
  assert.equal(single.queue.length, 2);

  const mixed = engine.createSession(bank, ["A", "B"], firstRandom);
  assert.deepEqual(new Set(mixed.queue), new Set(["a-1", "a-2", "b-1", "b-2"]));
  assert.equal(mixed.currentId, mixed.queue[0]);
  assert.deepEqual(mixed.visited, [mixed.queue[0]]);
});

test("does not repeat questions and marks the bank exhausted", () => {
  let session = engine.createSession(bank, ["A"], firstRandom);
  const visited = [session.currentId];
  session = engine.advanceSession(session);
  visited.push(session.currentId);
  session = engine.advanceSession(session);

  assert.equal(new Set(visited).size, 2);
  assert.equal(session.currentId, null);
  assert.equal(session.exhausted, true);
  assert.equal(session.cursor, 2);
});

test("preserves stable history when moving backward and forward", () => {
  let session = engine.createSession(bank, ["A", "B"], firstRandom);
  const first = session.currentId;
  session = engine.advanceSession(session);
  const second = session.currentId;
  session = engine.setDeepened(session, true);
  session = engine.previousSession(session);

  assert.equal(session.currentId, first);
  assert.equal(session.deepened, false);
  session = engine.advanceSession(session);
  assert.equal(session.currentId, second);
  assert.equal(session.deepened, true);
});

test("records passing without penalty and advances", () => {
  let session = engine.createSession(bank, ["A"], firstRandom);
  const skipped = session.currentId;
  session = engine.advanceSession(session, { skipped: true });

  assert.deepEqual(session.skipped, [skipped]);
  assert.equal(session.visited.length, 2);
});

test("reset creates a fresh complete queue for the same selection", () => {
  let session = engine.createSession(bank, ["A"], firstRandom);
  session = engine.advanceSession(session);
  session = engine.advanceSession(session);
  const reset = engine.resetSession(bank, session.selectedCategories, () => 0.99);

  assert.equal(reset.exhausted, false);
  assert.equal(reset.cursor, 0);
  assert.equal(reset.visited.length, 1);
  assert.deepEqual(new Set(reset.queue), new Set(["a-1", "a-2"]));
});

test("serializes and restores the exact current card and its depth state", () => {
  let session = engine.createSession(bank, ["A", "B"], firstRandom);
  session = engine.advanceSession(session);
  session = engine.setDeepened(session, true);
  const restored = engine.restoreSession(bank, engine.serializeSession(session), firstRandom);

  assert.deepEqual(restored, session);
});

test("normalizes stale queues and rejects corrupt persisted state", () => {
  const session = engine.createSession(bank, ["A", "B"], firstRandom);
  const stale = JSON.stringify({
    ...session,
    queue: [session.queue[0], "removed", session.queue[0]],
    currentId: "removed",
    cursor: 99,
  });
  const restored = engine.restoreSession(bank, stale, firstRandom);

  assert.deepEqual(new Set(restored.queue), new Set(bank.questions.map((item) => item.id)));
  assert.equal(restored.queue.length, 4);
  assert.ok(restored.currentId === null || restored.queue.includes(restored.currentId));

  assert.equal(engine.restoreSession(bank, "not-json", firstRandom), null);
  assert.equal(engine.restoreSession(bank, "null", firstRandom), null);
  assert.equal(engine.restoreSession(bank, JSON.stringify({ bankId: "other" }), firstRandom), null);
});

test("does not start a session without at least one valid category", () => {
  assert.throws(() => engine.createSession(bank, [], firstRandom), /categoría/i);
  assert.throws(() => engine.createSession(bank, ["UNKNOWN"], firstRandom), /categoría/i);
});
