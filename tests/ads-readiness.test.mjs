import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { build } from "esbuild";

const source = (path) => readFile(path, "utf8");

test("the home conversion sequence and Founder Price pill use real state", async () => {
  const [library, sections] = await Promise.all([
    source("app/Library.tsx"),
    source("app/marketing/MarketingSections.tsx"),
  ]);
  for (const item of ["HowItWorks", "BenefitSection", "SocialProof", "Pricing", "FAQ", "CTASection"])
    assert.match(library, new RegExp(`<${item}`));
  assert.ok(library.indexOf("<BenefitSection") < library.indexOf("<SocialProof"));
  assert.ok(library.indexOf("<SocialProof") < library.indexOf("<Pricing"));
  assert.ok(library.indexOf("<Pricing") < library.indexOf("<FAQ"));
  assert.match(sections, /entry\.isIntersecting/);
  assert.match(sections, /sessionStorage\.setItem\("spanishcue\.founder-pill\.hidden"/);
  assert.match(sections, /checkoutLive/);
  assert.doesNotMatch(sections, /Math\.random|setInterval/);
});

test("optional tracking is consent-gated and withdrawal clears stored data", async () => {
  const [analytics, consent, banner] = await Promise.all([
    source("app/marketing/analytics.ts"),
    source("app/privacy/consent.ts"),
    source("app/privacy/CookieConsent.tsx"),
  ]);
  assert.match(analytics, /consentFor\("analytics"\)/);
  assert.match(analytics, /consentFor\("marketing"\)/);
  assert.match(consent, /removeItem\("spanishcue\.marketing\.events\.v1"\)/);
  assert.match(consent, /removeItem\("spanishcue\.marketing\.attribution\.v1"\)/);
  assert.match(banner, /Aceptar|Accept/);
  assert.match(banner, /Rechazar|Reject/);
  assert.match(banner, /Configurar|Configure/);
  assert.match(banner, /checked disabled/);
  assert.doesNotMatch(banner, /checked=\{true\}/);
});

test("GA4 is optional, direct and uses Consent Mode v2 before any measurement", async () => {
  const [analytics, consent, tag, layout, env] = await Promise.all([
    source("app/marketing/analytics.ts"),
    source("app/privacy/consent.ts"),
    source("app/marketing/GoogleAnalytics.tsx"),
    source("app/layout.tsx"),
    source(".env.example"),
  ]);
  assert.match(tag,/NEXT_PUBLIC_GA4_MEASUREMENT_ID/);
  assert.match(consent,/gtag\("consent", "default"/);
  assert.match(consent,/ad_user_data.*denied/);
  assert.match(consent,/ad_personalization.*denied/);
  assert.match(consent,/analytics_storage.*denied/);
  assert.match(consent,/gtag\("consent", "update"/);
  assert.match(tag,/gtag\/js\?id=/);
  assert.doesNotMatch(tag,/googletagmanager\.com\/gtm\.js|GTM-/);
  assert.match(tag,/ga-disable-/);
  assert.match(tag,/page_referrer: ""/);
  const scriptInjection = tag.search(/document\.head\.append(?:Child)?\(script\)/);
  assert.ok(scriptInjection >= 0);
  assert.ok(tag.indexOf('window.gtag?.("config", id') < scriptInjection);
  assert.match(layout,/GoogleAnalytics/);
  assert.match(analytics,/window\.location\.pathname/);
  assert.doesNotMatch(analytics,/page_path: `\$\{window\.location\.pathname\}\$\{window\.location\.search\}`/);
  assert.match(analytics,/allowedPropertyKeys/);
  assert.match(consent,/updateGoogleConsent/);
  assert.match(env,/NEXT_PUBLIC_GA4_MEASUREMENT_ID=/);
  assert.match(env,/ANALYTICS_CONVERSIONS_ENABLED=false/);
});

test("legal pages stay unpublished until real operator and refund data exist", async () => {
  const result = await build({
    stdin: { contents: 'export * from "./app/legal/operator";', resolveDir: process.cwd() },
    bundle: true, write: false, format: "esm", platform: "node",
  });
  const legal = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString("base64")}`);
  assert.equal(legal.legalOperator({}), null);
  const complete = Object.fromEntries([
    "LEGAL_NAME", "LEGAL_ENTITY_TYPE", "LEGAL_ADDRESS", "LEGAL_COUNTRY", "LEGAL_TAX_ID",
    "LEGAL_REGISTRATION", "LEGAL_SUPPORT_EMAIL", "LEGAL_PRIVACY_EMAIL", "LEGAL_GOVERNING_LAW",
    "LEGAL_COURTS", "LEGAL_EFFECTIVE_DATE", "LEGAL_REFUND_POLICY_ES", "LEGAL_REFUND_POLICY_EN",
    "LEGAL_WITHDRAWAL_POLICY_ES", "LEGAL_WITHDRAWAL_POLICY_EN",
  ].map((key) => [key, `real-${key}`]));
  assert.ok(legal.legalOperator(complete));
  const compact = legal.legalOperator({
    CHESPANISH_OWNER_EMAIL: "owner@example.test",
    LEGAL_OPERATOR_JSON: JSON.stringify({ legalName: "Real Name", address: "Real address" }),
  });
  assert.equal(compact?.legalName, "Real Name");
  assert.equal(compact?.address, "Real address");
  assert.equal(compact?.entityType, "Particular");
  assert.equal(compact?.country, "Argentina");
  assert.equal(compact?.supportEmail, "owner@example.test");
  assert.equal(compact?.privacyEmail, "owner@example.test");
  assert.equal(compact?.taxId, "");
  assert.equal(compact?.registration, "");
  assert.match(compact?.refundPolicyEs || "", /cancelar/i);
  assert.equal(legal.legalOperator({ LEGAL_OPERATOR_JSON: "{bad-json" }), null);
  assert.equal(legal.legalOperator({
    CHESPANISH_OWNER_EMAIL: "owner@example.test",
    LEGAL_OPERATOR_JSON: JSON.stringify({ legalName: "Real Name", address: "Real address", entityType: "Corporation" }),
  }), null);
  const document = await source("app/legal/LegalDocument.tsx");
  assert.doesNotMatch(document, /\[YOUR|YOUR COMPANY|PLACEHOLDER/i);
  assert.match(document, /Nothing limits mandatory consumer rights/);
});

test("online cancellation calls PayPal and keeps paid-through access", async () => {
  const [route, billing, account] = await Promise.all([
    source("app/api/billing/subscription/route.ts"),
    source("db/billing.ts"),
    source("app/cuenta/SubscriptionManager.tsx"),
  ]);
  assert.match(route, /cancelPaypalSubscription/);
  assert.match(route, /cancellationReference/);
  assert.match(billing, /paidThrough && paidThrough > stamp/);
  assert.match(billing, /expires_at = \?/);
  assert.match(account, /Sí, cancelar|Yes, cancel/);
  assert.match(account, /No habrá nuevas renovaciones|There will be no further renewals/);
});
