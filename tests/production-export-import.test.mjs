import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile, readdir, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import {
  importInto, importOrder, insertStatements, loadExport, schemaDatabase, schemaModel, sqlFiles, sqlLiteral, verifyImported,
} from "../scripts/import-production-export.mjs";

const FUTURE = Math.floor(Date.now() / 1000) + 30 * 86400;

function fixture() {
  const t = 1_790_000_000;
  const user = (id, role = "teacher") => ({ id, email: `${id}@example.test`, normalized_email: `${id}@example.test`, display_name: null, role, status: "active", created_at: t, updated_at: t, last_sign_in_at: t });
  const identity = (id, userId) => ({ id, user_id: userId, provider: "firebase", provider_subject: `uid-${userId}`, provider_email: `${userId}@example.test`, email_verified: 1, created_at: t, last_seen_at: t });
  const subscription = (id, userId, environment, subscriptionId) => ({
    id, user_id: userId, provider: "paypal", provider_subscriber_id: null, provider_subscription_id: subscriptionId, provider_plan_id: "P-15", product_code: "spanishcue-pro",
    offer_code: "founder-1000-usd15-monthly", status: "ACTIVE", current_period_end: null, next_billing_time: null, created_at: t, activated_at: t, cancelled_at: null,
    last_payment_at: t, last_failure_at: null, updated_at: t, environment, first_payment_at: t, paid_through: FUTURE, provider_event_time: t,
  });
  const grant = (id, userId, reference, productCode = "spanishcue-pro", source = "billing") => ({
    id, user_id: userId, product_code: productCode, access_level: "full", source, source_reference: reference, plan_code: null, status: "active", starts_at: t, expires_at: source === "billing" ? FUTURE : null, created_at: t, updated_at: t,
  });
  return {
    users: [user("owner", "owner"), user("founder"), user("sandbox"), user("free"), user("manual")],
    auth_identities: [identity(1, "owner"), identity(2, "founder"), identity(3, "sandbox"), identity(4, "free"), identity(5, "manual")],
    billing_subscriptions: [subscription(1, "founder", "live", "I-LIVE"), subscription(2, "sandbox", "sandbox", "I-SANDBOX")],
    billing_payments: [{ id: 1, user_id: "founder", subscription_id: 1, provider: "paypal", environment: "live", provider_payment_id: "PAY-1", provider_event_id: "WH-1", amount_cents: 1500, currency: "USD", status: "COMPLETED", occurred_at: t, paid_through: FUTURE, created_at: t, updated_at: t }],
    access_grants: [grant(1, "founder", "I-LIVE"), grant(2, "sandbox", "I-SANDBOX"), grant(3, "manual", null, "teacher_library", "manual")],
    founder_assignments: [{ id: 1, user_id: "founder", subscription_id: 1, offer_code: "founder-1000-usd15-monthly", founder_number: 1, created_at: t, environment: "live" }],
    founder_offer_state: [{ environment: "live", offer_code: "founder-1000-usd15-monthly", limit: 1000, claimed: 1, enabled: 1, updated_at: t }],
    billing_outbox_events: [{ id: 1, provider: "paypal", environment: "live", event_key: "first_subscription_paid:PAY-1", event_name: "first_subscription_paid", user_id: "founder", subscription_id: 1, payment_id: 1, occurred_at: t, created_at: t, delivered_at: null }],
    payment_webhook_events: [{ provider: "paypal", environment: "live", event_id: "WH-1", event_type: "PAYMENT.SALE.COMPLETED", resource_id: "PAY-1", received_at: t, processed_at: t, processing_status: "processed", error_code: null }],
    students: [{ id: "s1", owner_id: "owner", alias: "Ana O'Neil", last_name: null, email: null, level: "A2", goal: "", status: "active", created_at: "2026-09-01T00:00:00Z", updated_at: "2026-09-01T00:00:00Z" }],
    class_records: [{ id: "c1", owner_id: "owner", student_id: "s1", lesson_id: null, free_title: "Repaso", starts_at: "2026-09-02T10:00:00Z", timezone: "Asia/Taipei", duration_minutes: 45, status: "done", pedagogical_note: "", next_step: "", request_key: "k1", created_at: "2026-09-02T10:00:00Z", updated_at: "2026-09-02T10:00:00Z" }],
    lesson_progress: [], offer_settings: [], founder_leads: [], billing_checkout_locks: [], billing_purchase_claims: [], verification_email_deliveries: [],
  };
}

async function writeExport(tables, overrides = {}) {
  const dir = await mkdtemp(join(tmpdir(), "spanishcue-export-"));
  const entries = [];
  for (const [name, rows] of Object.entries(tables)) {
    await writeFile(join(dir, `${name}.jsonl`), rows.map(row => JSON.stringify(row)).join("\n") + (rows.length ? "\n" : ""));
    entries.push({ name, file: `${name}.jsonl`, rowCount: rows.length, countStar: rows.length, ...(overrides[name] || {}) });
  }
  await writeFile(join(dir, "manifest.json"), JSON.stringify({ tables: entries }));
  return dir;
}

test("import order inserts parents first and founder_offer_state after founder_assignments", async () => {
  const { db } = await schemaDatabase();
  const order = importOrder(schemaModel(db));
  assert.equal(order.length, 17);
  assert.ok(order.indexOf("users") < order.indexOf("auth_identities"));
  assert.ok(order.indexOf("billing_subscriptions") < order.indexOf("billing_payments"));
  assert.ok(order.indexOf("billing_payments") < order.indexOf("billing_outbox_events"));
  assert.ok(order.indexOf("students") < order.indexOf("class_records"));
  assert.ok(order.indexOf("founder_assignments") < order.indexOf("founder_offer_state"));
});

test("a complete export rehearses cleanly: counts, integrity, founder PRO, sandbox never PRO", async () => {
  const dir = await writeExport(fixture());
  try {
    const { db } = await schemaDatabase();
    const model = schemaModel(db);
    const loaded = await loadExport(dir, model);
    assert.deepEqual(loaded.problems, []);
    importInto(db, model, loaded.data);
    const checks = await verifyImported(db, model, loaded.data);
    const failed = checks.filter(check => !check.ok);
    assert.deepEqual(failed, []);
    assert.equal(db.prepare("SELECT claimed FROM founder_offer_state WHERE environment = 'live'").get().claimed, 1, "trigger must not double count");
    assert.equal(db.prepare("SELECT alias FROM students").get().alias, "Ana O'Neil");
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test("incomplete or inconsistent exports are rejected before import", async () => {
  const tables = fixture();
  const missing = { ...tables };
  delete missing.students;
  for (const [data, overrides, pattern] of [
    [missing, {}, /missing table students/],
    [tables, { users: { rowCount: 99 } }, /users: manifest rowCount 99/],
    [tables, { users: { countStar: 6 } }, /users: COUNT\(\*\) 6/],
    [{ ...tables, users: [...tables.users, tables.users[0]] }, { users: { rowCount: 6, countStar: 6 } }, /users: duplicate primary key/],
    [{ ...tables, users: [{ ...tables.users[0], surprise: 1 }] }, {}, /not in repository schema surprise|unknown column surprise/],
    [{ ...tables, mystery_table: [] }, {}, /unexpected table mystery_table/],
  ]) {
    const dir = await writeExport(data, overrides);
    try {
      const { db } = await schemaDatabase();
      const loaded = await loadExport(dir, schemaModel(db));
      assert.ok(loaded.problems.some(problem => pattern.test(problem)), `${pattern}: ${loaded.problems.join("; ")}`);
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  }
});

test("verification catches a founder whose grant would not unlock PRO and a claimed-count mismatch", async () => {
  const tables = fixture();
  tables.billing_subscriptions = tables.billing_subscriptions.map(row => row.id === 1 ? { ...row, environment: "sandbox" } : row);
  tables.founder_offer_state = [{ ...tables.founder_offer_state[0], claimed: 2 }];
  const dir = await writeExport(tables);
  try {
    const { db } = await schemaDatabase();
    const model = schemaModel(db);
    const loaded = await loadExport(dir, model);
    importInto(db, model, loaded.data);
    const failed = (await verifyImported(db, model, loaded.data)).filter(check => !check.ok).map(check => check.check);
    assert.ok(failed.includes("live_founders_have_pro"));
    assert.ok(failed.includes("founder_claimed_matches_live_assignments"));
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test("SQL output escapes values and loads into a fresh schema with identical counts", async () => {
  assert.equal(sqlLiteral(null), "NULL");
  assert.equal(sqlLiteral(15), "15");
  assert.equal(sqlLiteral("O'Neil"), "'O''Neil'");
  assert.match(insertStatements("users", ["id"], [{ id: "x" }])[0], /^INSERT INTO `users` \(`id`\) VALUES \('x'\);$/);
  const dir = await writeExport(fixture());
  const out = await mkdtemp(join(tmpdir(), "spanishcue-sql-"));
  try {
    const { db: source } = await schemaDatabase();
    const model = schemaModel(source);
    const loaded = await loadExport(dir, model);
    const files = sqlFiles(model, loaded.data);
    for (const [index, text] of files.entries()) await writeFile(join(out, `${index}.sql`), text);
    const { db: target } = await schemaDatabase();
    for (const name of (await readdir(out)).sort((a, b) => Number.parseInt(a) - Number.parseInt(b))) target.exec(await readFile(join(out, name), "utf8"));
    for (const [name, rows] of loaded.data) assert.equal(target.prepare(`SELECT count(*) AS n FROM \`${name}\``).get().n, rows.length, name);
    assert.equal(target.prepare("SELECT claimed FROM founder_offer_state").get().claimed, 1);
  } finally {
    await rm(dir, { recursive: true, force: true });
    await rm(out, { recursive: true, force: true });
  }
});
