import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { build } from "esbuild";

const built = await build({
  stdin: { contents: 'export * from "./app/billing-config";', resolveDir: process.cwd() },
  bundle: true, write: false, format: "esm", platform: "node",
});
const billing = await import(`data:text/javascript;base64,${Buffer.from(built.outputFiles[0].text).toString("base64")}`);

const live = {
  PAYPAL_ENV: "live", PAYPAL_LIVE_CLIENT_ID: "client", PAYPAL_LIVE_CLIENT_SECRET: "secret",
  PAYPAL_LIVE_WEBHOOK_ID: "webhook", PAYPAL_LIVE_PRODUCT_ID: "product",
  PAYPAL_LIVE_FOUNDER_PLAN_ID: "plan",
};

test("public checkout stays blocked until operator and public switch are ready", () => {
  const disabled = billing.billingConfig(live);
  assert.equal(billing.billingReadiness(disabled, true), "live_ready");
  assert.equal(billing.checkoutAllowed(disabled, null), false);
  const enabled = billing.billingConfig({ ...live, PAYPAL_PUBLIC_CHECKOUT_ENABLED: "true" });
  assert.equal(billing.checkoutAllowed(enabled, null), true);
  assert.equal(billing.billingReadiness(enabled, false), "unconfigured");
  assert.equal(billing.billingReadiness(billing.billingConfig({ PAYPAL_ENV: "sandbox" }), true), "unconfigured");
});

test("public pages honor live checkout availability and both providers", async () => {
  const [api, pricing, home, legal, prelaunch] = await Promise.all([
    readFile("app/api/billing/founder-status/route.ts", "utf8"),
    readFile("app/pricing/page.tsx", "utf8"),
    readFile("app/marketing/MarketingSections.tsx", "utf8"),
    readFile("app/legal/LegalDocument.tsx", "utf8"),
    readFile("app/legal/PrelaunchLegalDocument.tsx", "utf8"),
  ]);
  assert.match(api, /publicCheckoutAvailable: readiness === "live_ready" && config\.publicCheckoutEnabled/);
  assert.match(pricing, /config\.publicCheckoutEnabled && paypalReady\(config\)/);
  assert.match(pricing, /cardCheckoutLive && paddleReady|checkoutLive && paddleReady/);
  assert.match(home, /status\.publicCheckoutAvailable/);
  assert.match(home, /question === paymentQuestion \? paymentAnswer : answer/);
  assert.doesNotMatch(home, /PayPal está integrado en modo de pruebas y el checkout público permanece desactivado/);
  assert.doesNotMatch(home, /The full library for US\$15 a month/);
  assert.match(legal, /<td>Paddle<\/td>/);
  assert.match(legal, /US\$15\.50\/mes/);
  assert.match(prelaunch, /US\$15\.50 monthly Founder Price/);
});

test("pricing presents card or PayPal without falsely promising unavailable trial", async () => {
  const pricing = await readFile("app/pricing/page.tsx", "utf8");
  assert.match(pricing, /cardCheckoutLive/);
  assert.match(pricing, /checkoutLive \? \(es \? "Puedes cancelar online/);
  assert.match(pricing, /"No todavía\. El checkout público está desactivado/);
});
