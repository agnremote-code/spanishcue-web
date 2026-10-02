import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const landing = readFileSync(new URL("../app/marketing-landing/MarketingLanding.tsx", import.meta.url), "utf8");
const conversion = readFileSync(new URL("../app/marketing-landing/LandingConversion.tsx", import.meta.url), "utf8");
const policy = readFileSync(new URL("../app/marketing-landing/offer-policy.ts", import.meta.url), "utf8");

test("paid-search hero puts checkout before free lesson CTA", () => {
  const checkout = landing.indexOf("<LandingConversion {...shared} hero />");
  const free = landing.indexOf("landing_hero_free_");
  assert.ok(checkout >= 0, "hero checkout component is missing");
  assert.ok(free >= 0, "free lesson CTA is missing");
  assert.ok(checkout < free, "free lesson CTA must not precede checkout");
});

test("paid-search checkout works before account registration", () => {
  assert.match(conversion, /CheckoutButton signedIn=\{signedIn\} returnTo="\/" \/>/);
  assert.doesNotMatch(conversion, /ingresar\?modo=registro&returnTo=%2Facceso/);
});

test("locked PRO lesson cards sell instead of sending visitors into a lesson", () => {
  assert.match(landing, /className=\{!free && !pro \? 'landing-pro-card'/);
  assert.match(landing, /free \|\| pro \? path : '#founder-offer'/);
});

test("Founder modal is one-session but appears before the old 30-second threshold", () => {
  assert.match(policy, /engagedMs >= 12000/);
  assert.match(policy, /scroll >= \.25/);
  assert.doesNotMatch(policy, /engagedMs >= 30000/);
});
