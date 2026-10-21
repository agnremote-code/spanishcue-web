import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { build } from "esbuild";

const compiled = await build({ entryPoints: ["app/license-watermark.ts"], bundle: true, write: false, format: "esm", platform: "node" });
const { traceWatermark, watermarkDay, watermarkToken, withWatermark, WATERMARK_META } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);
const secret = "a".repeat(64);

test("a token names the day and traces back to exactly one account", async () => {
  const day = watermarkDay(new Date("2026-10-21T23:59:00Z"));
  assert.equal(day, "20261021");
  const token = await watermarkToken(secret, "acct-b", day);
  assert.match(token, /^v1\.20261021\.[0-9a-f]{20}$/);
  assert.equal(token, await watermarkToken(secret, "acct-b", day), "stable within a day");
  assert.notEqual(token, await watermarkToken(secret, "acct-a", day));
  assert.notEqual(token, await watermarkToken(secret, "acct-b", "20261022"));
  assert.notEqual(token, await watermarkToken("b".repeat(64), "acct-b", day), "useless without the secret");
  assert.doesNotMatch(token, /acct/);
  assert.deepEqual(await traceWatermark(secret, token, ["acct-a", "acct-b", "acct-c"]), { accountId: "acct-b", day });
  assert.deepEqual(await traceWatermark(secret, ` ${token.toUpperCase()} `, ["acct-b"]), { accountId: "acct-b", day }, "pasted with spaces or caps");
  assert.equal(await traceWatermark(secret, token, ["acct-a"]), null);
  assert.equal(await traceWatermark(secret, token.slice(0, -1) + "0", ["acct-b"]), null);
  assert.equal(await traceWatermark(secret, "<script>", ["acct-b"]), null);
});

function fakeRewriter(log) {
  const rewriter = { on(selector, handlers) { handlers.element({ append: (content, options) => log.push([selector, content, options.html]) }); return rewriter; }, transform: (response) => new Response("rewritten", response) };
  return () => rewriter;
}

test("only successful HTML gets the meta tag, and only a well-formed token", async () => {
  const token = await watermarkToken(secret, "acct", "20261021");
  const log = [];
  const html = new Response("<html><head></head></html>", { headers: { "Content-Type": "text/html; charset=utf-8" } });
  assert.equal(await withWatermark(html, token, fakeRewriter(log)).text(), "rewritten");
  assert.deepEqual(log, [["head", `<meta name="${WATERMARK_META}" content="${token}">`, true]]);
  const json = new Response("{}", { headers: { "Content-Type": "application/json" } });
  assert.equal(withWatermark(json, token, fakeRewriter([])), json);
  const redirect = new Response(null, { status: 302, headers: { "Content-Type": "text/html" } });
  assert.equal(withWatermark(redirect, token, fakeRewriter([])), redirect);
  const page = new Response("<html></html>", { headers: { "Content-Type": "text/html" } });
  assert.equal(withWatermark(page, '"><script>', fakeRewriter([])), page);
  assert.equal(withWatermark(page, token, undefined), page);
});

test("the Worker marks PRO documents only, never RSC payloads or free samples", async () => {
  const source = await readFile("worker/index.ts", "utf8");
  assert.match(source, /const premiumDocument = \(lesson && !isFreeLesson\(lesson\.id\)\) \|\| premiumAutoestudio;/);
  assert.match(source, /premiumDocument && accountId && fullAccess && request\.method === 'GET' && !rscPayload && env\.AUTOESTUDIO_SHARE_SECRET/);
});
