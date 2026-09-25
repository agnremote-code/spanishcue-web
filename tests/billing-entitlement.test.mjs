import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { DatabaseSync } from "node:sqlite";
import test from "node:test";
import { build } from "esbuild";

const compiled = await build({
  stdin: { contents: 'export * from "./db/accounts";', resolveDir: process.cwd() },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
});
const accounts = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);

const NOW = Math.floor(Date.now() / 1000);
const FUTURE = NOW + 30 * 86400;
const PAST = NOW - 86400;

async function database() {
  const sqlite = new DatabaseSync(":memory:");
  sqlite.exec("PRAGMA foreign_keys = ON");
  for (const name of (await readdir("drizzle")).filter((file) => file.endsWith(".sql")).sort()) {
    sqlite.exec((await readFile(`drizzle/${name}`, "utf8")).replaceAll("--> statement-breakpoint", ""));
  }
  return sqlite;
}

function asD1(sqlite) {
  const statement = (sql, args = []) => ({
    bind: (...values) => statement(sql, values),
    run: async () => ({ meta: { changes: Number(sqlite.prepare(sql).run(...args).changes) } }),
    first: async () => sqlite.prepare(sql).get(...args) ?? null,
    all: async () => ({ results: sqlite.prepare(sql).all(...args) }),
  });
  return { prepare: (sql) => statement(sql) };
}

function seedUser(sqlite, id, role = "teacher") {
  sqlite.prepare(`INSERT INTO users (id, email, normalized_email, role, status, created_at, updated_at, last_sign_in_at)
    VALUES (?, ?, ?, ?, 'active', 1, 1, 1)`).run(id, `${id}@example.test`, `${id}@example.test`, role);
  sqlite.prepare(`INSERT INTO auth_identities (user_id, provider, provider_subject, provider_email, email_verified, created_at, last_seen_at)
    VALUES (?, 'firebase', ?, ?, 1, 1, 1)`).run(id, `uid-${id}`, `${id}@example.test`);
}

function seedSubscription(sqlite, userId, { provider = "paypal", environment, subscriptionId }) {
  sqlite.prepare(`INSERT INTO billing_subscriptions (user_id, provider, environment, provider_subscription_id, provider_plan_id,
    product_code, status, created_at, updated_at) VALUES (?, ?, ?, ?, 'P-15', 'spanishcue-pro', 'ACTIVE', 1, 1)`)
    .run(userId, provider, environment, subscriptionId);
}

function seedGrant(sqlite, userId, { productCode = "spanishcue-pro", source = "billing", reference = null, status = "active", expiresAt = FUTURE }) {
  sqlite.prepare(`INSERT INTO access_grants (user_id, product_code, access_level, source, source_reference, status, starts_at,
    expires_at, created_at, updated_at) VALUES (?, ?, 'full', ?, ?, ?, 1, ?, 1, 1)`)
    .run(userId, productCode, source, reference, status, expiresAt);
}

async function access(sqlite, id) {
  return accounts.resolveFirebaseAccount(asD1(sqlite), { uid: `uid-${id}`, email: `${id}@example.test`, emailVerified: true, displayName: null });
}

test("a Live PayPal billing grant unlocks PRO", async () => {
  const sqlite = await database();
  seedUser(sqlite, "live-paypal");
  seedSubscription(sqlite, "live-paypal", { environment: "live", subscriptionId: "I-LIVE" });
  seedGrant(sqlite, "live-paypal", { reference: "I-LIVE" });
  const account = await access(sqlite, "live-paypal");
  assert.equal(account.accessLevel, "full");
  assert.equal(account.accessSource, "billing");
  assert.equal(account.accessExpiresAt, FUTURE);
});

test("a Live Paddle billing grant unlocks PRO", async () => {
  const sqlite = await database();
  seedUser(sqlite, "live-paddle");
  seedSubscription(sqlite, "live-paddle", { provider: "paddle", environment: "live", subscriptionId: "sub_live" });
  seedGrant(sqlite, "live-paddle", { reference: "sub_live" });
  assert.equal((await access(sqlite, "live-paddle")).accessLevel, "full");
});

test("a Sandbox billing grant never unlocks PRO", async () => {
  const sqlite = await database();
  seedUser(sqlite, "sandbox");
  seedSubscription(sqlite, "sandbox", { environment: "sandbox", subscriptionId: "I-SANDBOX" });
  seedGrant(sqlite, "sandbox", { reference: "I-SANDBOX" });
  const account = await access(sqlite, "sandbox");
  assert.equal(account.accessLevel, "free");
  assert.equal(account.accessSource, null);
});

test("a billing grant without a matching subscription, or owned by another user, does not unlock PRO", async () => {
  const sqlite = await database();
  seedUser(sqlite, "orphan");
  seedGrant(sqlite, "orphan", { reference: "I-MISSING" });
  assert.equal((await access(sqlite, "orphan")).accessLevel, "free");

  seedUser(sqlite, "other");
  seedSubscription(sqlite, "other", { environment: "live", subscriptionId: "I-OTHER" });
  seedUser(sqlite, "borrower");
  seedGrant(sqlite, "borrower", { reference: "I-OTHER" });
  assert.equal((await access(sqlite, "borrower")).accessLevel, "free");
});

test("expired or inactive Live billing grants do not unlock PRO", async () => {
  const sqlite = await database();
  seedUser(sqlite, "expired");
  seedSubscription(sqlite, "expired", { environment: "live", subscriptionId: "I-EXPIRED" });
  seedGrant(sqlite, "expired", { reference: "I-EXPIRED", expiresAt: PAST });
  assert.equal((await access(sqlite, "expired")).accessLevel, "free");

  seedUser(sqlite, "inactive");
  seedSubscription(sqlite, "inactive", { environment: "live", subscriptionId: "I-INACTIVE" });
  seedGrant(sqlite, "inactive", { reference: "I-INACTIVE", status: "inactive" });
  assert.equal((await access(sqlite, "inactive")).accessLevel, "free");
});

test("manual library grants and the owner role keep full access", async () => {
  const sqlite = await database();
  seedUser(sqlite, "manual");
  seedGrant(sqlite, "manual", { productCode: "teacher_library", source: "manual", expiresAt: null });
  const manual = await access(sqlite, "manual");
  assert.equal(manual.accessLevel, "full");
  assert.equal(manual.accessSource, "manual");

  seedUser(sqlite, "owner", "owner");
  assert.equal((await access(sqlite, "owner")).accessLevel, "full");

  seedUser(sqlite, "nobody");
  assert.equal((await access(sqlite, "nobody")).accessLevel, "free");
});

test("the admin teacher list applies the same entitlement rule", async () => {
  const sqlite = await database();
  seedUser(sqlite, "live");
  seedSubscription(sqlite, "live", { environment: "live", subscriptionId: "I-LIVE" });
  seedGrant(sqlite, "live", { reference: "I-LIVE" });
  seedUser(sqlite, "sandbox");
  seedSubscription(sqlite, "sandbox", { environment: "sandbox", subscriptionId: "I-SANDBOX" });
  seedGrant(sqlite, "sandbox", { reference: "I-SANDBOX" });
  const byId = Object.fromEntries((await accounts.listTeacherAccounts(asD1(sqlite))).map((row) => [row.userId, row.accessLevel]));
  assert.deepEqual(byId, { live: "full", sandbox: "free" });
});
