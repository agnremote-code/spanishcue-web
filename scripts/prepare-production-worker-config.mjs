// Rewrites the generated build config (dist/server/wrangler.json) for the
// owner-controlled PRODUCTION Worker. Used only by the manually authorized
// deploy-production workflow. It never touches source configuration.
//
// Two modes:
// - inert (default): Worker `spanishcue` on workers.dev only, no routes.
//   Serves no spanishcue.com traffic; used to verify a deploy before cutover.
// - cutover (attachDomain): adds the spanishcue.com and www custom domains
//   and turns workers.dev off. Only the cutover runbook uses this.
import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { STAGING } from "./prepare-staging-worker-config.mjs";

export const PRODUCTION = Object.freeze({
  workerName: "spanishcue",
  d1Name: "spanishcue-production",
  domains: Object.freeze(["spanishcue.com", "www.spanishcue.com"]),
});

const PLACEHOLDER_D1 = "00000000-0000-4000-8000-000000000000";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

// Plain (non-secret) runtime variables production may carry. Secrets are set
// on the Worker with `wrangler secret put` and never appear here.
export const PRODUCTION_VAR_NAMES = Object.freeze([
  "CHESPANISH_OWNER_UID",
  "CHESPANISH_OWNER_EMAIL",
  "CHESPANISH_APPLE_AUTH_ENABLED",
  "PAYPAL_ENV",
  "PAYPAL_LIVE_CLIENT_ID",
  "PAYPAL_LIVE_PRODUCT_ID",
  "PAYPAL_LIVE_FOUNDER_PLAN_ID",
  "PAYPAL_LIVE_WEBHOOK_ID",
  "PAYPAL_SANDBOX_CLIENT_ID",
  "PAYPAL_SANDBOX_PRODUCT_ID",
  "PAYPAL_SANDBOX_FOUNDER_PLAN_ID",
  "PAYPAL_SANDBOX_WEBHOOK_ID",
  "PAYPAL_PUBLIC_CHECKOUT_ENABLED",
  "PAYPAL_LIVE_SUPERVISED_USER_ID",
  "PADDLE_CLIENT_TOKEN",
  "PADDLE_PRICE_ID",
  "FOUNDER_OFFER_ENABLED",
  "FOUNDER_OFFER_CODE",
  "FOUNDER_LIMIT",
  "FOUNDER_PRICE_USD",
  "ANALYTICS_CONVERSIONS_ENABLED",
  "NEXT_PUBLIC_GA4_MEASUREMENT_ID",
  "SPANISHCUE_WRITE_FREEZE",
]);

const SECRET_NAMES = [
  "FIREBASE_ADMIN_SERVICE_ACCOUNT_B64",
  "RESEND_API_KEY",
  "PAYPAL_LIVE_CLIENT_SECRET",
  "PAYPAL_SANDBOX_CLIENT_SECRET",
  "PADDLE_API_KEY",
  "PADDLE_WEBHOOK_SECRET",
  "LEGAL_OPERATOR_JSON",
];

export function productionConfig(generated, { d1Id, vars = {}, compatibilityDate, attachDomain = false }) {
  assert.equal(generated.main, "index.js", "unexpected generated Worker entry");
  assert.equal(generated.assets?.binding, "ASSETS", "ASSETS binding missing");
  assert.equal(generated.assets?.run_worker_first, true, "premium media must run the Worker first");
  assert.match(d1Id || "", UUID, "PRODUCTION_D1_ID must be the production D1 UUID");
  assert.notEqual(d1Id, PLACEHOLDER_D1, "placeholder D1 must never be deployed");
  assert.notEqual(d1Id, STAGING.d1Id, "production must not use the staging D1");
  for (const name of Object.keys(vars)) {
    assert.ok(PRODUCTION_VAR_NAMES.includes(name), `${name} is not an allowed production var`);
    assert.ok(!SECRET_NAMES.includes(name), `${name} is a secret; set it with wrangler secret put`);
    assert.equal(typeof vars[name], "string", `${name} must be a string`);
  }
  const config = structuredClone(generated);
  delete config.topLevelName;
  delete config.env;
  delete config.route;
  config.name = PRODUCTION.workerName;
  if (compatibilityDate) {
    assert.match(compatibilityDate, /^\d{4}-\d{2}-\d{2}$/);
    config.compatibility_date = compatibilityDate;
  }
  config.d1_databases = [{ binding: "DB", database_name: PRODUCTION.d1Name, database_id: d1Id, migrations_dir: "../../drizzle" }];
  config.vars = { ...vars };
  config.observability = { enabled: true };
  config.preview_urls = false;
  if (attachDomain) {
    config.workers_dev = false;
    config.routes = PRODUCTION.domains.map(pattern => ({ pattern, custom_domain: true }));
  } else {
    config.workers_dev = true;
    delete config.routes;
  }
  assert.ok(!("SPANISHCUE_DEPLOYMENT" in config.vars), "production must not carry a deployment label");
  return config;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const path = process.argv[2] || "dist/server/wrangler.json";
  const vars = process.env.PRODUCTION_VARS_JSON ? JSON.parse(process.env.PRODUCTION_VARS_JSON) : {};
  const config = productionConfig(JSON.parse(await readFile(path, "utf8")), {
    d1Id: process.env.PRODUCTION_D1_ID,
    vars,
    compatibilityDate: process.env.PRODUCTION_COMPATIBILITY_DATE || undefined,
    attachDomain: process.env.ATTACH_CUSTOM_DOMAIN === "true",
  });
  await writeFile(path, `${JSON.stringify(config, null, 2)}\n`);
  console.log(JSON.stringify({ worker: config.name, d1: config.d1_databases[0].database_name, workersDev: config.workers_dev, routes: (config.routes || []).map(route => route.pattern), varNames: Object.keys(config.vars).sort() }));
}
