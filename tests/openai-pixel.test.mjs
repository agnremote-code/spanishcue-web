import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const pixel = readFileSync(new URL("../app/marketing/openaiPixel.ts", import.meta.url), "utf8");
const analytics = readFileSync(new URL("../app/marketing/analytics.ts", import.meta.url), "utf8");
const tag = readFileSync(new URL("../app/marketing/GoogleAnalytics.tsx", import.meta.url), "utf8");

test("ChatGPT Ads pixel loads only with marketing consent and without debug", () => {
  assert.match(pixel, /pixelId: OPENAI_PIXEL_ID/);
  assert.match(pixel, /OPENAI_PIXEL_ID = "FtmkxcA4M9Bu8q5eTLsYTP"/);
  assert.match(pixel, /if \(typeof window === "undefined" \|\| !consentFor\("marketing"\)\) return false;/);
  assert.match(pixel, /push\(arguments\)/);
  assert.doesNotMatch(pixel, /debug\s*:/);
  assert.match(tag, /if \(consent\?\.marketing\) installOpenAIPixel\(\);\s*else revokeOpenAIPixelConsent\(\);/);
});

test("ChatGPT Ads events: sign-up on signup_complete, purchase only on the verified first payment", () => {
  assert.match(pixel, /"registration_completed", \{ type: "customer_action" \}/);
  assert.match(pixel, /"order_created",\s*\{ type: "contents", amount: Math\.round\(value \* 100\), currency \},\s*\{ event_id: transactionId \}/);
  assert.match(analytics, /if \(event === "signup_complete"\) sendOpenAISignup\(\);/);
  const firstPaid = analytics.slice(analytics.indexOf('if (event === "subscription_first_paid") {'));
  assert.match(firstPaid.slice(0, 600), /if \(!properties\.transaction_id\) return;[\s\S]*sendOpenAIPurchase\(/);
  assert.equal((analytics.match(/sendOpenAIPurchase\(/g) || []).length, 1);
});
