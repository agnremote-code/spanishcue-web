// Rewrites the generated build config (dist/server/wrangler.json) for the
// owner-controlled STAGING Worker. It never touches source configuration, so
// the Sites build and release classification are unaffected.
//
// Staging is isolated by construction: a staging-only Worker name, the
// staging-only D1, workers.dev only, no routes or custom domains, PayPal
// Sandbox, Paddle unconfigured, checkout and conversion reporting disabled.
import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export const STAGING = Object.freeze({
  workerName: "spanishcue-staging",
  d1Name: "spanishcue-staging",
  d1Id: "23fe3c11-85f7-48e1-9dd0-d508893625c9",
  vars: Object.freeze({
    SPANISHCUE_DEPLOYMENT: "staging",
    PAYPAL_ENV: "sandbox",
    PAYPAL_PUBLIC_CHECKOUT_ENABLED: "false",
    FOUNDER_OFFER_ENABLED: "false",
    ANALYTICS_CONVERSIONS_ENABLED: "false",
    CHESPANISH_APPLE_AUTH_ENABLED: "false",
  }),
});

const PRODUCTION_NAMES = new Set(["spanishcue", "biblioteca-espanol", "spanishcue-production"]);
const PLACEHOLDER_D1 = "00000000-0000-4000-8000-000000000000";
// Values that must never be configured on staging as plain vars.
const FORBIDDEN_VARS = [/^PADDLE_/, /^PAYPAL_LIVE_/, /^RESEND_/, /^FIREBASE_ADMIN_/, /^LEGAL_OPERATOR_JSON$/];

export function stagingConfig(generated, { images = false } = {}) {
  assert.equal(generated.main, "index.js", "unexpected generated Worker entry");
  assert.equal(generated.assets?.binding, "ASSETS", "ASSETS binding missing");
  assert.equal(generated.assets?.run_worker_first, true, "premium media must run the Worker first");
  const config = structuredClone(generated);
  delete config.topLevelName;
  delete config.routes;
  delete config.route;
  delete config.env;
  config.name = STAGING.workerName;
  config.workers_dev = true;
  config.preview_urls = false;
  config.d1_databases = [{ binding: "DB", database_name: STAGING.d1Name, database_id: STAGING.d1Id, migrations_dir: "../../drizzle" }];
  if (images) config.images = { binding: "IMAGES" };
  config.vars = { ...STAGING.vars };
  config.observability = { enabled: true };
  assertStagingOnly(config);
  return config;
}

export function assertStagingOnly(config) {
  assert.ok(!PRODUCTION_NAMES.has(config.name), `refusing production Worker name ${config.name}`);
  assert.equal(config.name, STAGING.workerName);
  assert.equal(config.workers_dev, true);
  assert.ok(!config.routes && !config.route, "staging must not define routes or custom domains");
  assert.equal(config.d1_databases.length, 1);
  const [db] = config.d1_databases;
  assert.equal(db.binding, "DB");
  assert.notEqual(db.database_id, PLACEHOLDER_D1, "placeholder D1 must never be deployed");
  assert.equal(db.database_id, STAGING.d1Id, "staging must use the staging D1 only");
  assert.equal(config.vars.PAYPAL_ENV, "sandbox");
  assert.equal(config.vars.PAYPAL_PUBLIC_CHECKOUT_ENABLED, "false");
  assert.equal(config.vars.ANALYTICS_CONVERSIONS_ENABLED, "false");
  for (const name of Object.keys(config.vars)) {
    assert.ok(!FORBIDDEN_VARS.some(pattern => pattern.test(name)), `${name} must not be a staging var`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const path = process.argv[2] || "dist/server/wrangler.json";
  // Production (Sites v176) serves /_vinext/image originals unchanged, which is
  // the no-binding fallback, so parity does not need Cloudflare Images.
  const images = process.env.STAGING_IMAGES_BINDING === "true";
  const config = stagingConfig(JSON.parse(await readFile(path, "utf8")), { images });
  await writeFile(path, `${JSON.stringify(config, null, 2)}\n`);
  console.log(JSON.stringify({ worker: config.name, d1: config.d1_databases[0].database_name, workersDev: true, images, vars: config.vars }));
}
