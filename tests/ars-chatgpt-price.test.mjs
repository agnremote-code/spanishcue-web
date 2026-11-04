import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("AR$ equivalent is display-only and limited to ChatGPT ad visitors", async () => {
  const ui = await readFile("app/marketing/ArsPrice.tsx", "utf8");
  assert.match(ui, /get\("utm_source"\)\?\.toLowerCase\(\) === "chatgpt"/);
  assert.match(ui, /sessionStorage\.setItem\(FLAG, "1"\)/);
  assert.match(ui, /if \(!fromChatGptAd\(\)\) return;/);
  assert.match(ui, /if \(!rate \|\| locale !== "es"\) return null;/);
  assert.match(ui, /se cobra en US\$/);
  const route = await readFile("app/api/fx/ars/route.ts", "utf8");
  assert.match(route, /api\.bcra\.gob\.ar/);
  assert.match(route, /60 \* 60 \* 1000/);
  assert.match(route, /available: false/);
  // Charges never change: no billing module touches the rate.
  for (const file of ["app/paddle-server.ts", "app/billing-config.ts", "app/paddle-config.ts"]) {
    assert.doesNotMatch(await readFile(file, "utf8"), /fx\/ars|ArsPrice/);
  }
});
