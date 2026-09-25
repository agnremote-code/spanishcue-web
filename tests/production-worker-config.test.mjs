import assert from "node:assert/strict";
import test from "node:test";
import { PRODUCTION, productionConfig } from "../scripts/prepare-production-worker-config.mjs";
import { STAGING } from "../scripts/prepare-staging-worker-config.mjs";

const D1 = "11111111-2222-4333-8444-555555555555";
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

test("inert production deploy has no routes and uses the production D1", () => {
  const config = productionConfig(generated(), { d1Id: D1 });
  assert.equal(config.name, "spanishcue");
  assert.equal(config.workers_dev, true);
  assert.equal(config.routes, undefined);
  assert.deepEqual(config.d1_databases.map(db => [db.binding, db.database_name, db.database_id]), [["DB", PRODUCTION.d1Name, D1]]);
  assert.equal(config.assets.run_worker_first, true);
  assert.equal(config.compatibility_date, "2026-05-15");
});

test("cutover mode attaches only spanishcue.com and www and disables workers.dev", () => {
  const config = productionConfig(generated(), { d1Id: D1, attachDomain: true, compatibilityDate: "2026-06-01" });
  assert.equal(config.workers_dev, false);
  assert.deepEqual(config.routes, [
    { pattern: "spanishcue.com", custom_domain: true },
    { pattern: "www.spanishcue.com", custom_domain: true },
  ]);
  assert.equal(config.compatibility_date, "2026-06-01");
});

test("production refuses placeholder, staging or malformed D1 ids", () => {
  assert.throws(() => productionConfig(generated(), { d1Id: "00000000-0000-4000-8000-000000000000" }));
  assert.throws(() => productionConfig(generated(), { d1Id: STAGING.d1Id }));
  assert.throws(() => productionConfig(generated(), { d1Id: undefined }));
  assert.throws(() => productionConfig(generated(), { d1Id: "prod" }));
});

test("only allow-listed plain vars are accepted; secrets and staging labels are rejected", () => {
  const config = productionConfig(generated(), { d1Id: D1, vars: { PAYPAL_ENV: "live", SPANISHCUE_WRITE_FREEZE: "true" } });
  assert.deepEqual(config.vars, { PAYPAL_ENV: "live", SPANISHCUE_WRITE_FREEZE: "true" });
  assert.throws(() => productionConfig(generated(), { d1Id: D1, vars: { PADDLE_API_KEY: "x" } }));
  assert.throws(() => productionConfig(generated(), { d1Id: D1, vars: { RESEND_API_KEY: "x" } }));
  assert.throws(() => productionConfig(generated(), { d1Id: D1, vars: { SPANISHCUE_DEPLOYMENT: "staging" } }));
  assert.throws(() => productionConfig(generated(), { d1Id: D1, vars: { FOUNDER_LIMIT: 1000 } }));
});
