import assert from "node:assert/strict";
import test from "node:test";
import { build } from "esbuild";

const compiled = await build({ entryPoints: ["worker/deployment-headers.ts"], bundle: true, write: false, format: "esm", platform: "node" });
const { withDeploymentHeaders } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);

test("production responses are returned unchanged", async () => {
  const response = new Response("ok", { status: 200, headers: { "content-type": "text/html" } });
  assert.equal(withDeploymentHeaders(response, undefined), response);
  assert.equal(withDeploymentHeaders(response, "production"), response);
  assert.equal(response.headers.get("X-Robots-Tag"), null);
});

test("staging responses are marked noindex without changing status, body or headers", async () => {
  const tagged = withDeploymentHeaders(new Response("body", { status: 404, headers: { "cache-control": "private, no-store" } }), "staging");
  assert.equal(tagged.headers.get("X-Robots-Tag"), "noindex, nofollow");
  assert.equal(tagged.status, 404);
  assert.equal(tagged.headers.get("cache-control"), "private, no-store");
  assert.equal(await tagged.text(), "body");
});

test("staging redirects with immutable headers are still tagged", () => {
  const tagged = withDeploymentHeaders(Response.redirect("https://example.test/acceso", 308), "staging");
  assert.equal(tagged.status, 308);
  assert.equal(tagged.headers.get("location"), "https://example.test/acceso");
  assert.equal(tagged.headers.get("X-Robots-Tag"), "noindex, nofollow");
});
