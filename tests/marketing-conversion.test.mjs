import "./landing-offer.test.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { build } from "esbuild";
import {
  FREE_LESSON_SAMPLE_MS,
  shouldPromptFreeLessonRegistration,
} from "../app/marketing/free-lesson-gate.mjs";

const result = await build({
  stdin: {
    contents: 'export * from "./app/marketing/cta-state";',
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
});
const ctas = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
const source = (path) => readFile(path, "utf8");

test("conversion CTA state is centralized for visitor, free and pro audiences", () => {
  const demo = "/el-hotel-de-lo-imposible";
  assert.equal(ctas.audienceFromAccess(false, false), "visitor");
  assert.equal(ctas.audienceFromAccess(true, false), "free");
  assert.equal(ctas.audienceFromAccess(true, true), "pro");
  assert.match(ctas.primaryCtaFor("visitor", demo).href, /modo=registro/);
  assert.match(ctas.primaryCtaFor("visitor", demo).href, /returnTo=/);
  assert.equal(ctas.primaryCtaFor("free", demo).href, "/pricing");
  assert.equal(ctas.primaryCtaFor("pro", demo).href, "#library-results");
  assert.equal(ctas.secondaryCtaFor("visitor", demo).href, demo);
  assert.match(ctas.subscriptionCtaFor("visitor").href, /returnTo=%2Facceso/);
});

test("free lessons prompt registration after thirty active seconds", () => {
  assert.equal(FREE_LESSON_SAMPLE_MS, 30_000);
  assert.equal(shouldPromptFreeLessonRegistration(FREE_LESSON_SAMPLE_MS - 1), false);
  assert.equal(shouldPromptFreeLessonRegistration(FREE_LESSON_SAMPLE_MS), true);
});

test("all requested funnel and product events use one analytics layer", async () => {
  const analytics = await source("app/marketing/analytics.ts");
  for (const event of [
    "landing_view", "cta_click", "lesson_preview_open", "free_lesson_start",
    "signup_start", "signup_complete", "pricing_view", "paywall_view",
    "checkout_start", "subscription_first_paid", "search_used", "filter_used",
    "free_lesson_completed",
  ]) assert.match(analytics, new RegExp(`"${event}"`));
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"])
    assert.match(analytics, new RegExp(`"${key}"`));
  assert.match(analytics, /window\.dataLayer/);
  assert.match(analytics, /window\.gtag\?\.\("event", event, payload\)/);
  assert.doesNotMatch(analytics, /G-[A-Z0-9]+|AW-[0-9]+|fbq\s*\(/);
});

test("marketing surfaces stay reusable and the free lesson close is global", async () => {
  const [sections, styles, layout, library, brand, auth, gate, checkout, success] = await Promise.all([
    source("app/marketing/MarketingSections.tsx"),
    source("app/marketing/marketing.css"),
    source("app/layout.tsx"),
    source("app/Library.tsx"),
    source("app/SpanishCueBrand.tsx"),
    source("app/ingresar/AuthForm.tsx"),
    source("app/marketing/FreeLessonRegistrationGate.tsx"),
    source("app/acceso/CheckoutButton.tsx"),
    source("app/pro/success/SuccessClient.tsx"),
  ]);
  for (const component of ["BenefitSection", "SocialProof", "ProductPreview", "Pricing", "FounderOffer", "CTASection", "FAQ"])
    assert.match(sections, new RegExp(`export function ${component}`));
  assert.match(library, /SpanishCueHero/);
  assert.match(brand, /PROBAR UNA CLASE GRATIS/);
  assert.match(brand, /href="#free-lessons"/);
  assert.match(brand, /scrollIntoView/);
  assert.doesNotMatch(brand, /hero_secondary/);
  assert.match(sections, /id="free-lessons"/);
  assert.match(layout, /MarketingAttribution/);
  assert.match(layout, /FreeLessonConversionBar/);
  assert.match(layout, /FreeLessonRegistrationGate/);
  assert.match(layout, /!signedIn/);
  assert.match(auth, /signup_complete/);
  assert.match(gate, /createUserWithEmailAndPassword/);
  assert.match(gate, /signInWithPopup/);
  assert.match(gate, /establishSession/);
  assert.match(gate, /href="\/terms"/);
  assert.match(gate, /href="\/privacy"/);
  assert.match(checkout, /checkout_start/);
  assert.match(checkout, /value: 15/);
  assert.match(checkout, /currency: "USD"/);
  assert.match(checkout, /founder-status/);
  assert.match(sections, /subscriptionCtaFor\(audience\)/);
  assert.match(sections, /checkoutLive \? <MarketingLink cta=\{subscriptionCta\}/);
  assert.doesNotMatch(success, /subscription_complete|sessionStorage/);
  assert.match(success, /subscription_first_paid/);
  assert.match(success, /transaction_id/);
  assert.match(success, /CONSENT_EVENT/);
  assert.match(success, /consentFor\("analytics"\)/);
  assert.match(success, /accessConfirmed/);
  assert.match(success, /Retry verification|Reintentar verificación/);
  assert.match(styles, /@media\(max-width:700px\)/);
  assert.match(styles, /overflow-x:auto/);
  assert.match(styles, /min-width:78vw/);
  assert.doesNotMatch(sections, /100,000|5-star|testimonios inventados/i);
});

test("search landings, including a dedicated free demo, and crawl controls are implemented", async () => {
  const routeNames = [
    "free-spanish-lesson",
    "spanish-teacher-resources",
    "spanish-conversation-activities",
    "spanish-grammar-lessons",
    "ele-recursos-profesores",
    "online-spanish-teaching-resources",
  ];
  const [landing, pricing, sitemap, robots, manifest] = await Promise.all([
    source("app/marketing-landing/MarketingLanding.tsx"),
    source("app/pricing/page.tsx"),
    source("app/sitemap.ts"),
    source("app/robots.ts"),
    source("app/manifest.ts"),
  ]);
  for (const routeName of routeNames) {
    const page = await source(`app/${routeName}/page.tsx`);
    assert.match(page, /MarketingLanding/);
    assert.match(page, /generateLandingMetadata/);
    assert.match(sitemap, new RegExp(routeName));
  }
  assert.match(landing, /freeLessonIds\.length/);
  assert.match(landing, /landing-product-float/);
  assert.match(pricing, /FOUNDING TEACHERS/);
  assert.match(pricing, /CheckoutButton/);
  assert.match(pricing, /href="\/demo\/mis-alumnos"/);
  assert.match(robots, /\/api\//);
  assert.doesNotMatch(robots, /\/pricing/);
  assert.match(manifest, /SPANISHCUE/);
});

test("public conversion routes keep every required client entry public", async () => {
  const protection = await source("scripts/protect-client-assets.mjs");
  for (const entry of [
    "app/marketing/MarketingAttribution.tsx",
    "app/marketing-landing/LandingConversion.tsx",
    "app/marketing/FreeLessonRegistrationGate.tsx",
    "app/acceso/CheckoutButton.tsx",
    "app/acceso/FounderAccessForm.tsx",
    "app/pro/success/SuccessClient.tsx",
    "app/privacy/GoogleConsentMode.tsx",
    "app/verbal-system/SystemHub.tsx",
  ]) assert.match(protection, new RegExp(`['\"]${entry.replaceAll("/", "\\/")}['\"]`));
});
