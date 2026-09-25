import assert from "node:assert/strict";
import test from "node:test";
import { STAGING, assertStagingOnly, stagingConfig } from "../scripts/prepare-staging-worker-config.mjs";

const generated = () => ({
  topLevelName: "biblioteca-espanol",
  name: "biblioteca-espanol",
  main: "index.js",
  compatibility_date: "2026-05-15",
  compatibility_flags: ["nodejs_compat"],
  vars: {},
  d1_databases: [{ binding: "DB", database_name: "site-creator-d1", database_id: "00000000-0000-4000-8000-000000000000" }],
  assets: { binding: "ASSETS", run_worker_first: true, directory: "../client" },
});

test("staging config targets only the staging Worker, staging D1 and workers.dev", () => {
  const config = stagingConfig(generated());
  assert.equal(config.name, "spanishcue-staging");
  assert.equal(config.topLevelName, undefined);
  assert.equal(config.workers_dev, true);
  assert.equal(config.routes, undefined);
  assert.deepEqual(config.d1_databases.map(db => [db.binding, db.database_name, db.database_id]), [["DB", STAGING.d1Name, STAGING.d1Id]]);
  assert.equal(config.images, undefined);
  assert.deepEqual(stagingConfig(generated(), { images: true }).images, { binding: "IMAGES" });
  assert.equal(config.assets.run_worker_first, true);
  assert.equal(config.compatibility_date, "2026-05-15");
});

test("staging vars keep payments, founder checkout and conversions disabled", () => {
  const { vars } = stagingConfig(generated());
  assert.equal(vars.PAYPAL_ENV, "sandbox");
  assert.equal(vars.PAYPAL_PUBLIC_CHECKOUT_ENABLED, "false");
  assert.equal(vars.FOUNDER_OFFER_ENABLED, "false");
  assert.equal(vars.ANALYTICS_CONVERSIONS_ENABLED, "false");
  assert.ok(!Object.keys(vars).some(name => /^(PADDLE_|PAYPAL_LIVE_|RESEND_|FIREBASE_ADMIN_)/.test(name)));
});

test("generated routes and environments are stripped", () => {
  const config = stagingConfig({ ...generated(), routes: [{ pattern: "spanishcue.com", custom_domain: true }], env: { production: {} } });
  assert.equal(config.routes, undefined);
  assert.equal(config.env, undefined);
});

test("guard rejects production names, routes, placeholder D1 and live payment settings", () => {
  const good = stagingConfig(generated());
  assert.throws(() => assertStagingOnly({ ...good, name: "spanishcue" }));
  assert.throws(() => assertStagingOnly({ ...good, routes: [{ pattern: "spanishcue.com" }] }));
  assert.throws(() => assertStagingOnly({ ...good, d1_databases: [{ binding: "DB", database_id: "00000000-0000-4000-8000-000000000000" }] }));
  assert.throws(() => assertStagingOnly({ ...good, vars: { ...good.vars, PAYPAL_ENV: "live" } }));
  assert.throws(() => assertStagingOnly({ ...good, vars: { ...good.vars, PADDLE_API_KEY: "x" } }));
  assert.throws(() => stagingConfig({ ...generated(), assets: { binding: "ASSETS", run_worker_first: false } }));
});
