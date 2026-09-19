import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { DatabaseSync } from "node:sqlite";
import test from "node:test";
import { build } from "esbuild";

const compiled = await build({
  stdin: {
    contents: 'export * from "./app/billing-config"; export * from "./app/paypal-server"; export * from "./db/billing";',
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
});
const billing = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);

async function migratedDatabase() {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  const migrations = (await readdir("drizzle"))
    .filter((name) => name.endsWith(".sql"))
    .sort();
  for (const migration of migrations) {
    const sql = await readFile(`drizzle/${migration}`, "utf8");
    database.exec(sql.replaceAll("--> statement-breakpoint", ""));
  }
  return database;
}

async function legacyDatabaseWithFixtures() {
  const database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  const migrations = (await readdir("drizzle")).filter((name) => name.endsWith(".sql")).sort();
  for (const migration of migrations.filter((name) => name < "0004_")) {
    database.exec((await readFile(`drizzle/${migration}`, "utf8")).replaceAll("--> statement-breakpoint", ""));
  }
  seedUser(database);
  database.prepare(`INSERT INTO billing_subscriptions (
    user_id, provider, provider_subscription_id, provider_plan_id, product_code,
    status, created_at, updated_at
  ) VALUES ('user-1', 'paypal', 'I-LEGACY', 'P-LEGACY', 'spanishcue-pro', 'PENDING', 1, 1)`).run();
  database.prepare(`INSERT INTO payment_webhook_events (
    provider, event_id, event_type, resource_id, received_at
  ) VALUES ('paypal', 'WH-LEGACY', 'BILLING.SUBSCRIPTION.CREATED', 'I-LEGACY', 1)`).run();
  const migration = migrations.find((name) => name.startsWith("0004_"));
  assert.ok(migration);
  database.exec((await readFile(`drizzle/${migration}`, "utf8")).replaceAll("--> statement-breakpoint", ""));
  return database;
}

function columns(database, table) {
  return database.prepare(`PRAGMA table_info(${table})`).all().map((row) => row.name);
}

function seedUser(database, id = "user-1") {
  database.prepare(`INSERT INTO users (
    id, email, normalized_email, role, status, created_at, updated_at, last_sign_in_at
  ) VALUES (?, ?, ?, 'teacher', 'active', 1, 1, 1)`).run(id, `${id}@example.test`, `${id}@example.test`);
}

function asD1(database) {
  const statement = (sql, args = []) => ({
    bind: (...nextArgs) => statement(sql, nextArgs),
    run: async () => {
      const result = database.prepare(sql).run(...args);
      return { success: true, meta: { changes: Number(result.changes) } };
    },
    first: async () => database.prepare(sql).get(...args) ?? null,
    all: async () => ({ results: database.prepare(sql).all(...args) }),
  });
  return {
    prepare: (sql) => statement(sql),
    batch: async (statements) => Promise.all(statements.map((item) => item.run())),
  };
}

function config(environment = "sandbox", limit = 1000) {
  return billing.billingConfig({
    PAYPAL_ENV: environment,
    [`PAYPAL_${environment.toUpperCase()}_CLIENT_ID`]: `${environment}-client`,
    [`PAYPAL_${environment.toUpperCase()}_CLIENT_SECRET`]: `${environment}-secret`,
    [`PAYPAL_${environment.toUpperCase()}_WEBHOOK_ID`]: `${environment}-webhook`,
    [`PAYPAL_${environment.toUpperCase()}_PRODUCT_ID`]: `${environment}-product`,
    [`PAYPAL_${environment.toUpperCase()}_FOUNDER_PLAN_ID`]: `${environment}-plan`,
    FOUNDER_LIMIT: String(limit),
  });
}

function validPlan(runtime) {
  return {
    id: runtime.founderPlanId,
    product_id: runtime.productId,
    status: "ACTIVE",
    billing_cycles: [{
      frequency: { interval_unit: "MONTH", interval_count: 1 },
      tenure_type: "REGULAR",
      sequence: 1,
      total_cycles: 0,
      pricing_scheme: { fixed_price: { value: "15.00", currency_code: "USD" } },
    }],
    payment_preferences: { setup_fee: { value: "0.00", currency_code: "USD" } },
  };
}

function insertSubscription(database, environment, providerSubscriptionId) {
  database.prepare(`INSERT INTO billing_subscriptions (
    user_id, provider, environment, provider_subscription_id, provider_plan_id,
    product_code, status, created_at, updated_at
  ) VALUES ('user-1', 'paypal', ?, ?, 'P-15', 'spanishcue-pro', 'APPROVAL_PENDING', 1, 1)`).run(
    environment,
    providerSubscriptionId,
  );
  return Number(database.prepare("SELECT last_insert_rowid() AS id").get().id);
}

test("billing migration is append-only and seeds no commercial activity", async () => {
  const database = await migratedDatabase();
  for (const table of [
    "billing_checkout_locks",
    "billing_payments",
    "billing_outbox_events",
  ]) {
    assert.equal(database.prepare("SELECT COUNT(*) AS total FROM sqlite_master WHERE type = 'table' AND name = ?").get(table).total, 1);
    assert.equal(database.prepare(`SELECT COUNT(*) AS total FROM ${table}`).get().total, 0);
  }
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM founder_assignments").get().total, 0);
  assert.ok(columns(database, "billing_subscriptions").includes("environment"));
  assert.ok(columns(database, "billing_subscriptions").includes("first_payment_at"));
  assert.ok(columns(database, "billing_subscriptions").includes("paid_through"));
  assert.ok(columns(database, "payment_webhook_events").includes("environment"));
  database.close();
});

test("provider identities and checkout locks are isolated by environment", async () => {
  const database = await migratedDatabase();
  seedUser(database);
  const sandboxSubscription = insertSubscription(database, "sandbox", "I-SAME");
  const liveSubscription = insertSubscription(database, "live", "I-SAME");
  assert.notEqual(sandboxSubscription, liveSubscription);
  assert.throws(() => insertSubscription(database, "sandbox", "I-SAME"), /UNIQUE/);

  const lock = database.prepare(`INSERT INTO billing_checkout_locks (
    environment, user_id, product_code, request_id, status, held_until, created_at, updated_at
  ) VALUES (?, 'user-1', 'spanishcue-pro', ?, 'creating', 100, 1, 1)`);
  lock.run("sandbox", "request-sandbox");
  lock.run("live", "request-live");
  assert.throws(() => lock.run("sandbox", "request-second"), /UNIQUE/);

  const payment = database.prepare(`INSERT INTO billing_payments (
    user_id, subscription_id, provider, environment, provider_payment_id,
    amount_cents, currency, status, occurred_at, created_at, updated_at
  ) VALUES ('user-1', ?, 'paypal', ?, 'SALE-SAME', 1500, 'USD', 'COMPLETED', 2, 2, 2)`);
  payment.run(sandboxSubscription, "sandbox");
  payment.run(liveSubscription, "live");
  assert.throws(() => payment.run(sandboxSubscription, "sandbox"), /UNIQUE/);

  const outbox = database.prepare(`INSERT INTO billing_outbox_events (
    provider, environment, event_key, event_name, user_id, subscription_id,
    payment_id, occurred_at, created_at
  ) VALUES ('paypal', ?, 'first-paid:user-1', 'first_subscription_paid', 'user-1', ?, 1, 2, 2)`);
  outbox.run("sandbox", sandboxSubscription);
  outbox.run("live", liveSubscription);
  assert.throws(() => outbox.run("sandbox", sandboxSubscription), /UNIQUE/);
  database.close();
});

test("migration preserves fictional legacy subscriptions and webhook events as sandbox", async () => {
  const database = await legacyDatabaseWithFixtures();
  assert.deepEqual(
    { ...database.prepare("SELECT provider_subscription_id AS id, environment FROM billing_subscriptions").get() },
    { id: "I-LEGACY", environment: "sandbox" },
  );
  assert.deepEqual(
    { ...database.prepare("SELECT event_id AS id, environment FROM payment_webhook_events").get() },
    { id: "WH-LEGACY", environment: "sandbox" },
  );
  database.close();
});

test("Sandbox and Live use distinct credentials and exact monthly plan validation", () => {
  const sandbox = config("sandbox");
  const live = config("live");
  assert.equal(sandbox.clientId, "sandbox-client");
  assert.equal(live.clientId, "live-client");
  assert.equal(sandbox.founderPlanId, "sandbox-plan");
  assert.equal(live.founderPlanId, "live-plan");
  assert.equal(billing.billingReadiness(sandbox, false), "sandbox_ready");
  assert.equal(billing.billingReadiness(live, false), "unconfigured");
  assert.equal(billing.billingReadiness(live, true), "live_ready");
  assert.equal(billing.checkoutAllowed(sandbox, "user-1"), true);
  assert.equal(billing.checkoutAllowed(live, "user-1"), false);
  const supervised = billing.billingConfig({
    PAYPAL_ENV: "live", PAYPAL_LIVE_CLIENT_ID: "id", PAYPAL_LIVE_CLIENT_SECRET: "secret",
    PAYPAL_LIVE_WEBHOOK_ID: "webhook", PAYPAL_LIVE_PRODUCT_ID: "product",
    PAYPAL_LIVE_FOUNDER_PLAN_ID: "plan", PAYPAL_LIVE_SUPERVISED_USER_ID: "supervisor",
  });
  assert.equal(billing.checkoutAllowed(supervised, "visitor"), false);
  assert.equal(billing.checkoutAllowed(supervised, "supervisor"), true);
  assert.equal(billing.validatePaypalPlan(validPlan(sandbox), sandbox), true);
  assert.equal(billing.validatePaypalPlan({ ...validPlan(sandbox), status: "INACTIVE" }, sandbox), false);
  assert.equal(billing.validatePaypalPlan({ ...validPlan(sandbox), product_id: "wrong" }, sandbox), false);
  const wrongAmount = structuredClone(validPlan(sandbox));
  wrongAmount.billing_cycles[0].pricing_scheme.fixed_price.value = "7.49";
  assert.equal(billing.validatePaypalPlan(wrongAmount, sandbox), false);
  const trial = structuredClone(validPlan(sandbox));
  trial.billing_cycles.unshift({ ...trial.billing_cycles[0], tenure_type: "TRIAL", sequence: 1, total_cycles: 1 });
  assert.equal(billing.validatePaypalPlan(trial, sandbox), false);
});

test("subscription ownership requires the configured environment, plan and custom user", () => {
  const runtime = config("sandbox");
  const subscription = { id: "I-1", plan_id: runtime.founderPlanId, custom_id: "user-1", status: "ACTIVE" };
  assert.equal(billing.validatePaypalSubscription(subscription, { subscriptionId: "I-1", userId: "user-1", config: runtime }), true);
  assert.equal(billing.validatePaypalSubscription({ ...subscription, plan_id: "wrong" }, { subscriptionId: "I-1", userId: "user-1", config: runtime }), false);
  assert.equal(billing.validatePaypalSubscription({ ...subscription, custom_id: "user-2" }, { subscriptionId: "I-1", userId: "user-1", config: runtime }), false);
  assert.equal(billing.validatePaypalPayment({ value: "15.00", currency_code: "USD" }, runtime), true);
  assert.equal(billing.validatePaypalPayment({ value: "15.01", currency_code: "USD" }, runtime), false);
  assert.equal(billing.validatePaypalPayment({ value: "15.00", currency_code: "EUR" }, runtime), false);
});

test("webhook verification rejects missing headers and provider signature failures", async () => {
  const runtime = config("sandbox");
  const originalFetch = globalThis.fetch;
  let requests = 0;
  try {
    globalThis.fetch = async (url) => {
      requests += 1;
      if (String(url).endsWith("/v1/oauth2/token")) {
        return Response.json({ access_token: "test-token" });
      }
      return Response.json({ verification_status: "FAILURE" });
    };
    const missing = new Request("https://spanishcue.test/api/billing/webhook", { method: "POST" });
    assert.equal(await billing.verifyPaypalWebhook(runtime, missing, { id: "WH-1" }), false);
    assert.equal(requests, 0);
    const headers = new Headers({
      "paypal-auth-algo": "SHA256withRSA", "paypal-cert-url": "https://api.paypal.com/cert",
      "paypal-transmission-id": "transmission", "paypal-transmission-sig": "invalid",
      "paypal-transmission-time": "2026-09-19T00:00:00Z",
    });
    const signed = new Request("https://spanishcue.test/api/billing/webhook", { method: "POST", headers });
    assert.equal(await billing.verifyPaypalWebhook(runtime, signed, { id: "WH-1" }), false);
    assert.equal(requests, 2);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("ACTIVE alone grants nothing; confirmed payments are first, renewal and idempotent", async () => {
  const database = await migratedDatabase();
  seedUser(database);
  const db = asD1(database);
  const runtime = config("sandbox");
  await billing.createPendingSubscription(db, {
    environment: "sandbox", userId: "user-1", paypalSubscriptionId: "I-1",
    planId: runtime.founderPlanId, offerCode: runtime.founderOffer.code,
  });
  await billing.applyPaypalSubscriptionLifecycle(db, "sandbox", "I-1", {
    status: "ACTIVE", subscriberId: "PAYER-1", nextBillingTime: new Date(Date.now() + 86400000).toISOString(), eventType: "BILLING.SUBSCRIPTION.ACTIVATED",
  });
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM access_grants WHERE source = 'billing'").get().total, 0);
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM founder_assignments").get().total, 0);

  const now = Math.floor(Date.now() / 1000);
  const first = await billing.recordPaypalPayment(db, {
    environment: "sandbox", paypalSubscriptionId: "I-1", providerPaymentId: "SALE-1",
    providerEventId: "WH-1", amountCents: 1500, currency: "USD", status: "COMPLETED",
    occurredAt: now, paidThrough: now + 86400,
  }, runtime);
  assert.equal(first.kind, "first");
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM access_grants WHERE source = 'billing' AND status = 'active'").get().total, 1);
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM founder_assignments").get().total, 1);
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM billing_outbox_events WHERE event_name = 'first_subscription_paid'").get().total, 1);

  const duplicate = await billing.recordPaypalPayment(db, {
    environment: "sandbox", paypalSubscriptionId: "I-1", providerPaymentId: "SALE-1",
    providerEventId: "WH-DUP", amountCents: 1500, currency: "USD", status: "COMPLETED",
    occurredAt: now, paidThrough: now + 86400,
  }, runtime);
  assert.equal(duplicate.kind, "duplicate");
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM billing_payments").get().total, 1);

  const renewal = await billing.recordPaypalPayment(db, {
    environment: "sandbox", paypalSubscriptionId: "I-1", providerPaymentId: "SALE-2",
    providerEventId: "WH-2", amountCents: 1500, currency: "USD", status: "COMPLETED",
    occurredAt: now + 86400, paidThrough: now + 172800,
  }, runtime);
  assert.equal(renewal.kind, "renewal");
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM founder_assignments").get().total, 1);
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM billing_outbox_events WHERE event_name = 'subscription_renewed'").get().total, 1);
  database.close();
});

test("late lifecycle events cannot overwrite newer provider state", async () => {
  const database = await migratedDatabase();
  seedUser(database);
  const db = asD1(database);
  const runtime = config("sandbox");
  await billing.createPendingSubscription(db, {
    environment: "sandbox", userId: "user-1", paypalSubscriptionId: "I-ORDER",
    planId: runtime.founderPlanId, offerCode: runtime.founderOffer.code,
  });
  await billing.applyPaypalSubscriptionLifecycle(db, "sandbox", "I-ORDER", {
    status: "CANCELLED", eventType: "BILLING.SUBSCRIPTION.CANCELLED", occurredAt: 200,
  });
  await billing.applyPaypalSubscriptionLifecycle(db, "sandbox", "I-ORDER", {
    status: "ACTIVE", eventType: "BILLING.SUBSCRIPTION.ACTIVATED", occurredAt: 100,
  });
  assert.equal(database.prepare("SELECT status FROM billing_subscriptions WHERE provider_subscription_id = 'I-ORDER'").get().status, "CANCELLED");
  database.close();
});

test("refund and reversal revoke only when no completed paid period remains", async () => {
  const database = await migratedDatabase();
  seedUser(database);
  const db = asD1(database);
  const runtime = config("sandbox");
  await billing.createPendingSubscription(db, { environment: "sandbox", userId: "user-1", paypalSubscriptionId: "I-REFUND", planId: runtime.founderPlanId, offerCode: runtime.founderOffer.code });
  const now = Math.floor(Date.now() / 1000);
  for (const [providerPaymentId, paidThrough] of [["SALE-A", now + 86400], ["SALE-B", now + 172800]]) {
    await billing.recordPaypalPayment(db, { environment: "sandbox", paypalSubscriptionId: "I-REFUND", providerPaymentId, amountCents: 1500, currency: "USD", status: "COMPLETED", occurredAt: now, paidThrough }, runtime);
  }
  await billing.recordPaypalPayment(db, { environment: "sandbox", paypalSubscriptionId: "I-REFUND", providerPaymentId: "SALE-B", amountCents: 1500, currency: "USD", status: "REFUNDED", occurredAt: now + 1, paidThrough: now + 172800 }, runtime);
  assert.equal(database.prepare("SELECT status FROM access_grants WHERE source_reference = 'I-REFUND'").get().status, "active");
  await billing.recordPaypalPayment(db, { environment: "sandbox", paypalSubscriptionId: "I-REFUND", providerPaymentId: "SALE-A", amountCents: 1500, currency: "USD", status: "REVERSED", occurredAt: now + 2, paidThrough: now + 86400 }, runtime);
  assert.equal(database.prepare("SELECT status FROM access_grants WHERE source_reference = 'I-REFUND'").get().status, "inactive");
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM billing_outbox_events WHERE event_name IN ('subscription_refunded','subscription_reversed')").get().total, 2);
  const recovered = await billing.recordPaypalPayment(db, { environment: "sandbox", paypalSubscriptionId: "I-REFUND", providerPaymentId: "SALE-C", amountCents: 1500, currency: "USD", status: "COMPLETED", occurredAt: now + 3, paidThrough: now + 259200 }, runtime);
  assert.equal(recovered.kind, "renewal");
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM billing_outbox_events WHERE event_name = 'first_subscription_paid'").get().total, 1);
  database.close();
});

test("failed payment and cancellation preserve only an already paid period; expiry revokes elapsed access", async () => {
  const database = await migratedDatabase();
  seedUser(database);
  const db = asD1(database);
  const runtime = config("sandbox");
  const stamp = Math.floor(Date.now() / 1000);
  await billing.createPendingSubscription(db, { environment: "sandbox", userId: "user-1", paypalSubscriptionId: "I-CANCEL", planId: runtime.founderPlanId, offerCode: runtime.founderOffer.code });
  await billing.recordPaypalPayment(db, { environment: "sandbox", paypalSubscriptionId: "I-CANCEL", providerPaymentId: "SALE-CANCEL", amountCents: 1500, currency: "USD", status: "COMPLETED", occurredAt: stamp, paidThrough: stamp + 86400 }, runtime);
  await billing.applyPaypalSubscriptionLifecycle(db, "sandbox", "I-CANCEL", { status: "SUSPENDED", eventType: "BILLING.SUBSCRIPTION.PAYMENT.FAILED", occurredAt: stamp + 1 });
  assert.equal(database.prepare("SELECT status FROM access_grants WHERE source_reference = 'I-CANCEL'").get().status, "active");
  await billing.applyPaypalSubscriptionLifecycle(db, "sandbox", "I-CANCEL", { status: "CANCELLED", eventType: "BILLING.SUBSCRIPTION.CANCELLED", occurredAt: stamp + 2 });
  const cancelled = database.prepare("SELECT status, expires_at FROM access_grants WHERE source_reference = 'I-CANCEL'").get();
  assert.deepEqual({ ...cancelled }, { status: "active", expires_at: stamp + 86400 });

  await billing.createPendingSubscription(db, { environment: "sandbox", userId: "user-1", paypalSubscriptionId: "I-EXPIRED", planId: runtime.founderPlanId, offerCode: runtime.founderOffer.code });
  await billing.recordPaypalPayment(db, { environment: "sandbox", paypalSubscriptionId: "I-EXPIRED", providerPaymentId: "SALE-EXPIRED", amountCents: 1500, currency: "USD", status: "COMPLETED", occurredAt: stamp - 90000, paidThrough: stamp - 1 }, runtime);
  await billing.applyPaypalSubscriptionLifecycle(db, "sandbox", "I-EXPIRED", { status: "EXPIRED", eventType: "BILLING.SUBSCRIPTION.EXPIRED", occurredAt: stamp + 3 });
  assert.equal(database.prepare("SELECT status FROM access_grants WHERE source_reference = 'I-EXPIRED'").get().status, "inactive");
  database.close();
});

test("concurrent first payments cannot over-allocate the founder limit", async () => {
  const database = await migratedDatabase();
  seedUser(database, "user-1");
  seedUser(database, "user-2");
  const db = asD1(database);
  const runtime = config("sandbox", 1);
  await billing.createPendingSubscription(db, { environment: "sandbox", userId: "user-1", paypalSubscriptionId: "I-C1", planId: runtime.founderPlanId, offerCode: runtime.founderOffer.code });
  await billing.createPendingSubscription(db, { environment: "sandbox", userId: "user-2", paypalSubscriptionId: "I-C2", planId: runtime.founderPlanId, offerCode: runtime.founderOffer.code });
  const now = Math.floor(Date.now() / 1000);
  await Promise.all([
    billing.recordPaypalPayment(db, { environment: "sandbox", paypalSubscriptionId: "I-C1", providerPaymentId: "SALE-C1", amountCents: 1500, currency: "USD", status: "COMPLETED", occurredAt: now, paidThrough: now + 86400 }, runtime),
    billing.recordPaypalPayment(db, { environment: "sandbox", paypalSubscriptionId: "I-C2", providerPaymentId: "SALE-C2", amountCents: 1500, currency: "USD", status: "COMPLETED", occurredAt: now, paidThrough: now + 86400 }, runtime),
  ]);
  assert.equal(database.prepare("SELECT COUNT(*) AS total FROM founder_assignments").get().total, 1);
  assert.equal(database.prepare("SELECT claimed FROM founder_offer_state WHERE offer_code = ?").get(runtime.founderOffer.code).claimed, 1);
  database.close();
});

test("Sandbox payments never consume the Live founder allocation", async () => {
  const database = await migratedDatabase();
  seedUser(database, "user-1");
  seedUser(database, "user-2");
  const db = asD1(database);
  for (const [environment, userId] of [["sandbox", "user-1"], ["live", "user-2"]]) {
    const runtime = config(environment, 1);
    const subscriptionId = `I-${environment.toUpperCase()}`;
    await billing.createPendingSubscription(db, {
      environment, userId, paypalSubscriptionId: subscriptionId,
      planId: runtime.founderPlanId, offerCode: runtime.founderOffer.code,
    });
    const stamp = Math.floor(Date.now() / 1000);
    await billing.recordPaypalPayment(db, {
      environment, paypalSubscriptionId: subscriptionId, providerPaymentId: `SALE-${environment.toUpperCase()}`,
      amountCents: 1500, currency: "USD", status: "COMPLETED", occurredAt: stamp, paidThrough: stamp + 86400,
    }, runtime);
  }
  const allocations = database.prepare(
    "SELECT environment, claimed FROM founder_offer_state ORDER BY environment",
  ).all().map((row) => ({ ...row }));
  assert.deepEqual(allocations, [{ environment: "live", claimed: 1 }, { environment: "sandbox", claimed: 1 }]);
  database.close();
});

test("checkout lock reuses one PayPal creation request and prevents a second subscription", async () => {
  const database = await migratedDatabase();
  seedUser(database);
  const db = asD1(database);
  const first = await billing.acquireCheckoutLock(db, {
    environment: "sandbox", userId: "user-1", requestId: "REQ-1", heldUntil: 100,
  }, 10);
  assert.deepEqual(first, { kind: "acquired", requestId: "REQ-1" });
  const racing = await billing.acquireCheckoutLock(db, {
    environment: "sandbox", userId: "user-1", requestId: "REQ-2", heldUntil: 100,
  }, 10);
  assert.deepEqual(racing, { kind: "busy", requestId: "REQ-1" });
  await billing.completeCheckoutLock(db, {
    environment: "sandbox", userId: "user-1", requestId: "REQ-1",
    paypalSubscriptionId: "I-LOCK", approvalUrl: "https://www.sandbox.paypal.com/approve/I-LOCK",
  }, 11);
  const reused = await billing.acquireCheckoutLock(db, {
    environment: "sandbox", userId: "user-1", requestId: "REQ-3", heldUntil: 200,
  }, 12);
  assert.deepEqual(reused, {
    kind: "ready", requestId: "REQ-1", paypalSubscriptionId: "I-LOCK",
    approvalUrl: "https://www.sandbox.paypal.com/approve/I-LOCK",
  });
  database.close();
});
