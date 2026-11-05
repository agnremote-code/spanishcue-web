import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

// gtag.js ignores plain arrays in dataLayer: the queue must push `arguments`.
test("the gtag stub queues arguments objects, never rest-parameter arrays", async () => {
  const consent = await readFile("app/privacy/consent.ts", "utf8");
  assert.match(consent, /window\.dataLayer\?\.push\(arguments\)/);
  assert.doesNotMatch(consent, /\(\.\.\.queued: unknown\[\]\) => window\.dataLayer\?\.push\(queued\)/);
});

// `typeof process` is "undefined" in the browser, so a guard on it threw away the
// build-time IDs and the Google tag was never installed for any visitor.
test("public Google IDs are read without a typeof-process guard", async () => {
  for (const file of ["app/marketing/GoogleAnalytics.tsx", "app/marketing/analytics.ts", "app/pro/success/SuccessClient.tsx"]) {
    const source = await readFile(file, "utf8");
    assert.doesNotMatch(source, /typeof process !== "undefined" \? \(process\.env\.NEXT_PUBLIC_/, file);
    assert.match(source, /process\.env\.NEXT_PUBLIC_/, file);
  }
});
