// Safari before 16.4 (iPhones and Macs that stopped updating) cannot parse a
// regex lookbehind. One literal in a client chunk stops the whole chunk from
// loading and the student sees «Something went wrong» (Homework, 2026-11-11).
// Run after the build.
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const LOOKBEHIND = /\(\?<[=!]/;
// Lesson data keeps its patterns as strings, compiled with a fallback
// (app/grammar-classroom/live/writing.ts); quality.mjs only runs in Node.
const ALLOWED = [/^app\/grammar-classroom\/live\/lessons\//, /^app\/conversacion-general\/quality\.mjs$/];

async function files(directory, match) {
  const found = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...await files(path, match));
    else if (match.test(entry.name)) found.push(path);
  }
  return found;
}

test("app source has no regex lookbehind outside lesson pattern strings", async () => {
  const offenders = [];
  for (const path of await files("app", /\.(tsx?|mjs)$/)) {
    if (ALLOWED.some((allowed) => allowed.test(path))) continue;
    if (LOOKBEHIND.test(await readFile(path, "utf8"))) offenders.push(path);
  }
  assert.deepEqual(offenders, []);
});

test("public client chunks have no regex lookbehind", async () => {
  const offenders = [];
  for (const path of await files("dist/client/assets", /\.js$/)) if (LOOKBEHIND.test(await readFile(path, "utf8"))) offenders.push(path);
  assert.deepEqual(offenders, []);
});
