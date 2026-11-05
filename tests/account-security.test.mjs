import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { DatabaseSync } from "node:sqlite";
import { build } from "esbuild";

const compiled = await build({ entryPoints: ["db/account-security.ts"], bundle: true, write: false, format: "esm", platform: "node" });
const security = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);
const { deviceIdFromCookie, newDeviceId, deviceCookieHeader, deviceHash, deviceLabel, recordPremiumOpen, listSharingAlerts, DEVICE_COOKIE } = security;

function d1() {
  const db = new DatabaseSync(":memory:");
  return readFile("drizzle/0020_account_security.sql", "utf8").then((sql) => {
    db.exec(sql);
    db.exec("CREATE TABLE users (id TEXT PRIMARY KEY, email TEXT NOT NULL)");
    const statement = (sql) => ({
      bind: (...values) => {
        // Cloudflare D1 limit: at most 100 bound parameters per query.
        if (values.length > 100) throw new Error("D1_ERROR: too many SQL variables");
        return {
        sql,
        async all() { return { results: db.prepare(sql).all(...values) }; },
        async run() { db.prepare(sql).run(...values); return { meta: {} }; },
        };
      },
    });
    return {
      raw: db,
      prepare: statement,
      async batch(list) {
        db.exec("BEGIN");
        try {
          const out = [];
          for (const st of list) out.push(/^\s*SELECT/i.test(st.sql) ? await st.all() : await st.run());
          db.exec("COMMIT");
          return out;
        } catch (error) { db.exec("ROLLBACK"); throw error; }
      },
    };
  });
}

test("the device cookie is a random 64-hex HttpOnly identifier and only its hash is stored", async () => {
  const id = newDeviceId();
  assert.match(id, /^[0-9a-f]{64}$/);
  assert.notEqual(id, newDeviceId());
  assert.equal(deviceIdFromCookie(`a=1; ${DEVICE_COOKIE}=${id}; b=2`), id);
  assert.equal(deviceIdFromCookie(`${DEVICE_COOKIE}=not-a-device`), null, "forged values are replaced, not stored");
  assert.equal(deviceIdFromCookie(null), null);
  const header = deviceCookieHeader(id);
  for (const part of ["HttpOnly", "Secure", "SameSite=Lax", "Path=/"]) assert.ok(header.includes(part), part);
  const hash = await deviceHash(id);
  assert.match(hash, /^[0-9a-f]{64}$/);
  assert.notEqual(hash, id);
  assert.equal(deviceLabel("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"), "Chrome · Windows");
  assert.equal(deviceLabel("Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile Safari/604.1"), "Safari · iOS");
  assert.equal(deviceLabel(null), "Otro navegador · otro sistema");
});

test("opens are counted per account and day; only accounts over the limits are listed, with no blocking", async () => {
  const db = await d1();
  db.raw.exec("INSERT INTO users VALUES ('shared','compartida@example.com'),('normal','normal@example.com')");
  const now = new Date("2026-11-02T12:00:00Z");
  for (let i = 0; i < 5; i++) await recordPremiumOpen(db, "shared", await deviceHash(newDeviceId()), "Chrome · Windows", now);
  const mine = await deviceHash(newDeviceId());
  for (let i = 0; i < 3; i++) await recordPremiumOpen(db, "normal", mine, "Safari · macOS", now);
  assert.equal(db.raw.prepare("SELECT COUNT(*) n FROM account_devices WHERE account_id='normal'").get().n, 1, "the same device is one row");
  assert.equal(db.raw.prepare("SELECT premium_opens n FROM account_daily_usage WHERE account_id='normal'").get().n, 3);

  let alerts = await listSharingAlerts(db, now);
  assert.deepEqual(alerts.map((a) => [a.email, a.devices]), [["compartida@example.com", 5]]);

  db.raw.exec("UPDATE account_daily_usage SET premium_opens = 151 WHERE account_id='normal'");
  alerts = await listSharingAlerts(db, now);
  const normal = alerts.find((a) => a.accountId === "normal");
  assert.equal(normal.peakOpens, 151);
  assert.equal(normal.peakDay, "2026-11-02");

  const later = new Date("2026-12-20T12:00:00Z");
  assert.deepEqual(await listSharingAlerts(db, later), [], "old devices and days fall out of the windows");
});

test("the alert list works when more than 100 accounts alert (D1 bound-parameter limit)", async () => {
  const db = await d1();
  const now = new Date("2026-11-02T12:00:00Z");
  for (let n = 0; n < 120; n++) {
    db.raw.prepare("INSERT INTO users VALUES (?, ?)").run(`acct${n}`, `profe${n}@example.com`);
    for (let i = 0; i < 4; i++) await recordPremiumOpen(db, `acct${n}`, await deviceHash(newDeviceId()), "Chrome · Windows", now);
  }
  db.raw.exec("INSERT INTO users VALUES ('quiet','tranquila@example.com')");
  await recordPremiumOpen(db, "quiet", await deviceHash(newDeviceId()), "Safari · macOS", now);
  const alerts = await listSharingAlerts(db, now);
  assert.equal(alerts.length, 120);
  assert.ok(alerts.every((a) => a.email === `profe${a.accountId.slice(4)}@example.com`), "every alert keeps its own email");
});

test("the worker records opens only for PRO documents of non-owner full-access accounts and the release prepares the tables", async () => {
  const worker = await readFile("worker/index.ts", "utf8");
  assert.match(worker, /premiumOpen && accountId && !owner && !writeFreezeActive/);
  assert.match(worker, /ctx\.waitUntil\(deviceHash\(deviceId\)\.then\(\(hash\) => recordPremiumOpen/);
  assert.doesNotMatch(worker, /account_devices[^\n]*(403|redirect)/, "sharing signals never block");
  for (const file of ["deploy-production", "deploy-staging"]) {
    const yml = await readFile(`.github/workflows/${file}.yml`, "utf8");
    assert.match(yml, /drizzle\/0020_account_security\.sql/);
    assert.match(yml, /verify-account-security-schema\.mjs/);
  }
  const legal = await readFile("app/legal/LegalDocument.tsx", "utf8");
  assert.match(legal, /spanishcue_device/);
  assert.match(legal, /Para detectar cuentas compartidas/);
});
