import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { build } from "esbuild";

const result = await build({
  stdin: {
    contents: 'export * from "./app/access-policy"; export * from "./app/firebase-session";',
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
});
const access = await import(
  "data:text/javascript;base64," +
    Buffer.from(result.outputFiles[0].text).toString("base64")
);

test("only verified server context creates full-access headers", () => {
  const forged = new Headers({
    "x-chespanish-user-uid": "forged",
    "x-chespanish-account-id": "forged",
    "x-chespanish-access-level": "full",
    "x-chespanish-owner": "1",
  });
  const stripped = access.authenticatedRequestHeaders(forged, null);
  assert.equal(access.signedInFromHeaders(stripped), false);
  assert.equal(access.fullAccessFromHeaders(stripped), false);
  assert.equal(access.accountIdFromHeaders(stripped), null);

  const user = {
    uid: "firebase-user",
    email: "teacher@example.test",
    emailVerified: true,
    displayName: "Teacher",
  };
  const account = {
    userId: "internal-user",
    email: user.email,
    displayName: user.displayName,
    role: "teacher",
    status: "active",
    accessLevel: "full",
    accessSource: "manual",
    accessExpiresAt: null,
  };
  const unverified = access.authenticatedRequestHeaders(
    new Headers(),
    { ...user, emailVerified: false },
    account,
  );
  assert.equal(access.signedInFromHeaders(unverified), false);
  assert.equal(access.fullAccessFromHeaders(unverified), false);

  const verified = access.authenticatedRequestHeaders(new Headers(), user, account);
  assert.equal(access.signedInFromHeaders(verified), true);
  assert.equal(access.fullAccessFromHeaders(verified), true);
  assert.equal(access.accountIdFromHeaders(verified), "internal-user");
  assert.equal(access.ownerFromHeaders(verified), false);
});

test("the owner fallback remains exact and configurable", () => {
  const user = {
    uid: "owner-uid",
    email: "owner@example.test",
    emailVerified: true,
    displayName: null,
  };
  assert.equal(
    access.isOwnerUser(user, { uid: "owner-uid", email: "OWNER@example.test" }),
    true,
  );
  assert.equal(
    access.isOwnerUser({ ...user, uid: "other" }, { uid: "owner-uid", email: user.email }),
    false,
  );
});

test("the append-only backend migration creates the portable tables", async () => {
  const sql = await readFile("drizzle/0001_spotty_baron_zemo.sql", "utf8");
  for (const table of ["users", "auth_identities", "access_grants", "lesson_progress"]) {
    assert.match(sql, new RegExp("CREATE TABLE `" + table + "`"));
  }
  assert.doesNotMatch(sql, /INSERT\s+INTO/i);
});

test("Apple, Google, email and password remain present in the auth source", async () => {
  const source = await readFile("app/ingresar/AuthForm.tsx", "utf8");
  assert.match(source, /GoogleAuthProvider/);
  assert.match(source, /OAuthProvider\("apple\.com"\)/);
  assert.match(source, /createUserWithEmailAndPassword/);
  assert.match(source, /signInWithEmailAndPassword/);
  assert.match(source, /browserSessionPersistence/);
  assert.match(source, /inMemoryPersistence/);
  assert.match(source, /sendVerificationAndSignOut/);
  assert.match(source, /role="tabpanel"/);
  assert.match(source, /ArrowLeft/);
});

test("session creation and account provisioning reject unverified emails", async () => {
  const [sessionRoute, accounts, sessionSync, layout, authForm] = await Promise.all([
    readFile("app/api/auth/session/route.ts", "utf8"),
    readFile("db/accounts.ts", "utf8"),
    readFile("app/AuthSessionSync.tsx", "utf8"),
    readFile("app/layout.tsx", "utf8"),
    readFile("app/ingresar/AuthForm.tsx", "utf8"),
  ]);
  assert.match(sessionRoute, /!user\.emailVerified/);
  assert.match(sessionRoute, /EMAIL_NOT_VERIFIED/);
  assert.match(accounts, /!user\.emailVerified/);
  assert.match(accounts, /EMAIL_NOT_VERIFIED/);
  assert.match(sessionSync, /response\.status === 403/);
  assert.match(sessionSync, /signOut\(firebaseAuth\)/);
  assert.match(authForm, /browserLocalPersistence/);
  assert.match(sessionSync, /!serverSignedIn/);
  assert.match(sessionSync, /window\.location\.reload\(\)/);
  assert.match(sessionSync, /window\.location\.pathname !== "\/ingresar"/);
  assert.match(layout, /<AuthSessionSync serverSignedIn=\{signedIn\}/);
});

test("failed or abandoned PayPal webhooks can be claimed again safely", async () => {
  const source = await readFile("db/billing.ts", "utf8");
  assert.match(source, /processing_status = 'failed'/);
  assert.match(source, /processing_status = 'received' AND received_at <=/);
  assert.match(source, /processed_at = NULL, error_code = NULL/);
});

test("only a server-recorded initial completed payment can become a purchase conversion", async () => {
  const [billing, webhook, success, conversion, migration] = await Promise.all([
    readFile("db/billing.ts", "utf8"),
    readFile("app/api/billing/webhook/route.ts", "utf8"),
    readFile("app/pro/success/SuccessClient.tsx", "utf8"),
    readFile("app/api/billing/conversion/route.ts", "utf8"),
    readFile("drizzle/0004_clean_justice.sql", "utf8"),
  ]);
  assert.match(billing,/recordPaypalPayment/);
  assert.match(billing,/claimFirstPaidConversionForUser/);
  assert.match(billing,/billing_outbox_events/);
  assert.match(billing,/first_subscription_paid/);
  assert.match(webhook,/PAYMENT\.SALE\.COMPLETED/);
  assert.match(webhook,/recordPaypalPayment/);
  assert.match(conversion,/accountIdFromHeaders/);
  assert.match(conversion,/claimFirstPaidConversionForUser/);
  assert.match(conversion,/ANALYTICS_CONVERSIONS_ENABLED/);
  assert.match(success,/\/api\/billing\/conversion/);
  assert.match(success,/subscription_first_paid/);
  assert.match(success,/transaction_id/);
  assert.match(migration,/billing_outbox_events/);
  assert.match(migration,/billing_outbox_events_key_unique/);
});
