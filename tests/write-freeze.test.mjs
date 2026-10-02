import assert from "node:assert/strict";
import test from "node:test";
import { build } from "esbuild";

const compiled = await build({ entryPoints: ["worker/write-freeze.ts"], bundle: true, write: false, format: "esm", platform: "node" });
const { writeFreezeActive, writeFreezeResponse } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);

const request = (method, path) => new Request(`https://spanishcue.com${path}`, { method });

test("freeze is off unless the variable is exactly 'true'", () => {
  for (const value of [undefined, "", "false", "TRUE", "1"]) {
    assert.equal(writeFreezeActive(value), false);
    assert.equal(writeFreezeResponse(request("POST", "/api/billing/webhook"), value), null);
  }
});

test("while frozen, mutating API requests get a retryable 503", async () => {
  for (const [method, path] of [["POST", "/api/auth/session"], ["POST", "/api/billing/webhook"], ["POST", "/api/billing/paddle/webhook"],
    ["POST", "/api/billing/checkout"], ["POST", "/api/billing/claim/bind"], ["PUT", "/api/settings"], ["PATCH", "/api/students/1"], ["DELETE", "/api/students/1"]]) {
    const response = writeFreezeResponse(request(method, path), "true");
    assert.equal(response.status, 503, `${method} ${path}`);
    assert.equal(response.headers.get("Retry-After"), "300");
    assert.match(response.headers.get("Cache-Control"), /no-store/);
    assert.equal((await response.json()).code, "WRITE_FREEZE");
  }
});

test("while frozen, reads and pages keep working", () => {
  for (const [method, path] of [["GET", "/"], ["GET", "/api/billing/founder-status"], ["HEAD", "/api/students"], ["OPTIONS", "/api/auth/session"], ["POST", "/ingresar"]]) {
    assert.equal(writeFreezeResponse(request(method, path), "true"), null, `${method} ${path}`);
  }
});

test('freeze blocks Share Pass reads that persist D1 rate counters',()=>{
 for(const path of ['/s','/s/v1.test','/api/autoestudio/passes','/api/autoestudio/progress','/api/autoestudio/learners/test']){
  for(const method of ['GET','HEAD'])assert.equal(writeFreezeResponse(request(method,path),'true')?.status,503,method+' '+path);
  assert.equal(writeFreezeResponse(request('GET',path),'false'),null);
 }
});
