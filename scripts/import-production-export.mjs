// Imports a paginated logical export of the Sites production D1 (one JSONL
// file per table plus manifest.json, see docs/releases/PRODUCTION_DATA_EXPORT.md)
// into a database whose schema is rebuilt from drizzle/0000-0009.
//
// This tool never talks to production. It reads private export files, builds
// an in-memory rehearsal copy, and (for `sql`) writes ordered INSERT files for
// a disposable rehearsal D1 or, at cutover, the empty owner production D1.
//
//   node scripts/import-production-export.mjs check    <exportDir>
//   node scripts/import-production-export.mjs rehearse <exportDir>
//   node scripts/import-production-export.mjs sql      <exportDir> <outDir>
//   node scripts/import-production-export.mjs unpack   <bundle.json> <exportDir>
//
// `unpack` turns the single file downloaded from the owner-only
// /api/admin/export route into the manifest + JSONL layout above.
//
// Reports contain counts and pass/fail results only, never row values.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";

export const LEDGER_TABLES = new Set(["d1_migrations", "__drizzle_migrations"]);
// Platform-internal tables a table listing may show; never imported.
const PLATFORM_TABLE = /^(_cf_|sqlite_)/;
const MAX_SQL_FILE_BYTES = 90_000;

export async function schemaDatabase(drizzleDir = "drizzle") {
  const db = new DatabaseSync(":memory:");
  db.exec("PRAGMA foreign_keys = ON");
  const files = (await readdir(drizzleDir)).filter(name => name.endsWith(".sql")).sort();
  for (const file of files) db.exec((await readFile(join(drizzleDir, file), "utf8")).replaceAll("--> statement-breakpoint", ""));
  return { db, migrations: files };
}

export function schemaModel(db) {
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY name").all().map(row => row.name);
  const model = new Map();
  for (const name of tables) {
    const columns = db.prepare(`PRAGMA table_info("${name}")`).all();
    const references = [...new Set(db.prepare(`PRAGMA foreign_key_list("${name}")`).all().map(fk => fk.table))].filter(table => table !== name);
    model.set(name, {
      columns: columns.map(column => column.name),
      notNull: new Set(columns.filter(column => column.notnull && column.dflt_value === null).map(column => column.name)),
      primaryKey: columns.filter(column => column.pk).sort((a, b) => a.pk - b.pk).map(column => column.name),
      references,
    });
  }
  return model;
}

// Parents first. founder_assignments is placed before founder_offer_state so
// the founder_assignments_increment_claimed trigger updates no row while the
// exported rows are inserted; founder_offer_state then carries its exported
// `claimed` value unchanged.
export function importOrder(model) {
  const order = [];
  const visiting = new Set();
  const visit = name => {
    if (order.includes(name)) return;
    assert.ok(!visiting.has(name), `foreign-key cycle at ${name}`);
    visiting.add(name);
    for (const parent of model.get(name).references) visit(parent);
    visiting.delete(name);
    order.push(name);
  };
  for (const name of [...model.keys()].sort()) visit(name);
  const state = order.indexOf("founder_offer_state");
  const assignments = order.indexOf("founder_assignments");
  if (state !== -1 && assignments !== -1 && state < assignments) {
    order.splice(state, 1);
    order.splice(order.indexOf("founder_assignments") + 1, 0, "founder_offer_state");
  }
  return order;
}

async function readRows(path) {
  const text = await readFile(path, "utf8");
  const trimmed = text.trim();
  const rows = trimmed.startsWith("[") ? JSON.parse(trimmed) : trimmed === "" ? [] : trimmed.split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
  return { rows, sha256: createHash("sha256").update(text).digest("hex") };
}

export async function loadExport(dir, model) {
  const manifest = JSON.parse(await readFile(join(dir, "manifest.json"), "utf8"));
  assert.ok(Array.isArray(manifest.tables), "manifest.tables must be an array");
  const byName = new Map(manifest.tables.map(entry => [entry.name, entry]));
  const problems = [];
  const expected = [...model.keys()];
  for (const name of expected) if (!byName.has(name)) problems.push(`missing table ${name}`);
  for (const name of byName.keys()) if (!model.has(name) && !LEDGER_TABLES.has(name) && !PLATFORM_TABLE.test(name)) problems.push(`unexpected table ${name}`);
  const data = new Map();
  const report = [];
  for (const name of expected) {
    const entry = byName.get(name);
    if (!entry) continue;
    const { rows, sha256 } = await readRows(join(dir, entry.file || `${name}.jsonl`));
    const { columns, primaryKey, notNull } = model.get(name);
    const exportedColumns = entry.columns || (rows[0] ? Object.keys(rows[0]) : columns);
    const missing = columns.filter(column => !exportedColumns.includes(column));
    const extra = exportedColumns.filter(column => !columns.includes(column));
    if (missing.length) problems.push(`${name}: missing columns ${missing.join(",")}`);
    if (extra.length) problems.push(`${name}: columns not in repository schema ${extra.join(",")}`);
    if (entry.rowCount !== undefined && entry.rowCount !== rows.length) problems.push(`${name}: manifest rowCount ${entry.rowCount} but file has ${rows.length}`);
    if (entry.countStar !== undefined && entry.countStar !== rows.length) problems.push(`${name}: COUNT(*) ${entry.countStar} but exported ${rows.length}`);
    if (entry.sha256 && entry.sha256 !== sha256) problems.push(`${name}: sha256 mismatch`);
    const keys = new Set();
    rows.forEach((row, index) => {
      for (const column of Object.keys(row)) if (!columns.includes(column)) problems.push(`${name} row ${index}: unknown column ${column}`);
      for (const column of notNull) if (row[column] === null || row[column] === undefined) problems.push(`${name} row ${index}: ${column} is null`);
      for (const [column, value] of Object.entries(row)) {
        if (value !== null && !["string", "number"].includes(typeof value)) problems.push(`${name} row ${index}: ${column} has unsupported type ${typeof value}`);
      }
      const key = JSON.stringify(primaryKey.map(column => row[column]));
      if (keys.has(key)) problems.push(`${name}: duplicate primary key at row ${index}`);
      keys.add(key);
    });
    data.set(name, rows);
    report.push({ table: name, rows: rows.length, sha256 });
  }
  const ledger = [...byName.keys()].filter(name => LEDGER_TABLES.has(name));
  return { manifest, data, report, ledger, problems };
}

export const BUNDLE_FORMAT = "spanishcue-d1-export/1";

export async function unpackBundle(bundlePath, outDir) {
  const bundle = JSON.parse(await readFile(bundlePath, "utf8"));
  assert.equal(bundle.format, BUNDLE_FORMAT, "not a SPANISHCUE D1 export bundle");
  assert.ok(Array.isArray(bundle.manifest?.tables) && bundle.files && typeof bundle.files === "object", "bundle needs manifest.tables and files");
  await mkdir(outDir, { recursive: true });
  for (const entry of bundle.manifest.tables) {
    const text = bundle.files[entry.file];
    assert.equal(typeof text, "string", `bundle is missing ${entry.file}`);
    assert.ok(!/[\\/]/.test(entry.file) && !entry.file.startsWith("."), `unsafe file name ${entry.file}`);
    if (entry.sha256) assert.equal(createHash("sha256").update(text).digest("hex"), entry.sha256, `${entry.file}: sha256 mismatch`);
    await writeFile(join(outDir, entry.file), text);
  }
  await writeFile(join(outDir, "manifest.json"), JSON.stringify(bundle.manifest, null, 2) + "\n");
  return bundle.manifest.tables.length;
}

export function sqlLiteral(value) {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "number") {
    assert.ok(Number.isFinite(value), "non-finite number");
    return String(value);
  }
  return `'${String(value).replaceAll("'", "''")}'`;
}

export function insertStatements(name, columns, rows) {
  const list = columns.map(column => `\`${column}\``).join(", ");
  return rows.map(row => `INSERT INTO \`${name}\` (${list}) VALUES (${columns.map(column => sqlLiteral(row[column])).join(", ")});`);
}

export function importInto(db, model, data) {
  db.exec("BEGIN");
  try {
    for (const name of importOrder(model)) {
      const { columns } = model.get(name);
      for (const statement of insertStatements(name, columns, data.get(name) || [])) db.exec(statement);
    }
    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

async function accountsModule() {
  const { build } = await import("esbuild");
  const compiled = await build({ stdin: { contents: 'export * from "./db/accounts";', resolveDir: process.cwd() }, bundle: true, write: false, format: "esm", platform: "node" });
  return import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString("base64")}`);
}

function asD1(db) {
  const statement = (sql, args = []) => ({
    bind: (...values) => statement(sql, values),
    first: async () => db.prepare(sql).get(...args) ?? null,
    all: async () => ({ results: db.prepare(sql).all(...args) }),
    run: async () => ({ meta: { changes: Number(db.prepare(sql).run(...args).changes) } }),
  });
  return { prepare: sql => statement(sql) };
}

// Integrity and billing/auth checks on an imported copy. Counts only.
export async function verifyImported(db, model, data) {
  const checks = [];
  const add = (name, ok, detail) => checks.push({ check: name, ok, detail });
  for (const name of model.keys()) {
    const count = db.prepare(`SELECT count(*) AS n FROM \`${name}\``).get().n;
    add(`rows:${name}`, count === (data.get(name) || []).length, `${count}`);
  }
  const fk = db.prepare("PRAGMA foreign_key_check").all();
  add("foreign_key_check", fk.length === 0, `${fk.length} violations`);
  add("integrity_check", db.prepare("PRAGMA integrity_check").get().integrity_check === "ok", "sqlite integrity_check");

  const liveAssignments = db.prepare("SELECT count(*) AS n FROM founder_assignments WHERE environment = 'live'").get().n;
  const liveState = db.prepare("SELECT COALESCE(SUM(claimed), 0) AS n FROM founder_offer_state WHERE environment = 'live'").get().n;
  add("founder_claimed_matches_live_assignments", liveState === liveAssignments, `claimed=${liveState} assignments=${liveAssignments}`);

  const orphanBilling = db.prepare(`SELECT count(*) AS n FROM access_grants g WHERE g.source = 'billing' AND NOT EXISTS (
    SELECT 1 FROM billing_subscriptions s WHERE s.user_id = g.user_id AND s.provider_subscription_id = g.source_reference)`).get().n;
  add("billing_grants_reference_subscriptions", orphanBilling === 0, `${orphanBilling} orphaned billing grants`);

  const { resolveFirebaseAccount } = await accountsModule();
  const d1 = asD1(db);
  const subjectFor = userId => db.prepare("SELECT provider_subject AS subject, provider_email AS email FROM auth_identities WHERE provider = 'firebase' AND user_id = ? LIMIT 1").get(userId);
  const resolve = async userId => {
    const identity = subjectFor(userId);
    if (!identity) return null;
    return resolveFirebaseAccount(d1, { uid: identity.subject, email: identity.email || "", emailVerified: true, displayName: null });
  };

  const founders = db.prepare("SELECT DISTINCT user_id AS userId FROM founder_assignments WHERE environment = 'live'").all();
  let foundersFull = 0;
  for (const { userId } of founders) if ((await resolve(userId))?.accessLevel === "full") foundersFull += 1;
  add("live_founders_have_pro", foundersFull === founders.length, `${foundersFull}/${founders.length}`);

  const paidLive = db.prepare(`SELECT DISTINCT g.user_id AS userId FROM access_grants g JOIN billing_subscriptions s
    ON s.user_id = g.user_id AND s.provider_subscription_id = g.source_reference AND s.product_code = g.product_code
    WHERE g.source = 'billing' AND g.status = 'active' AND s.environment = 'live' AND (g.expires_at IS NULL OR g.expires_at > unixepoch())`).all();
  let paidFull = 0;
  for (const { userId } of paidLive) if ((await resolve(userId))?.accessLevel === "full") paidFull += 1;
  add("active_live_billing_grants_unlock_pro", paidFull === paidLive.length, `${paidFull}/${paidLive.length}`);

  const sandboxOnly = db.prepare(`SELECT DISTINCT g.user_id AS userId FROM access_grants g JOIN billing_subscriptions s
    ON s.user_id = g.user_id AND s.provider_subscription_id = g.source_reference
    WHERE g.source = 'billing' AND s.environment = 'sandbox'
      AND NOT EXISTS (SELECT 1 FROM users u WHERE u.id = g.user_id AND u.role = 'owner')
      AND NOT EXISTS (SELECT 1 FROM access_grants o WHERE o.user_id = g.user_id AND o.product_code = 'teacher_library' AND o.status = 'active')
      AND NOT EXISTS (SELECT 1 FROM billing_subscriptions l WHERE l.user_id = g.user_id AND l.environment = 'live')`).all();
  let sandboxFull = 0;
  for (const { userId } of sandboxOnly) if ((await resolve(userId))?.accessLevel === "full") sandboxFull += 1;
  add("sandbox_billing_never_unlocks_pro", sandboxFull === 0, `${sandboxFull}/${sandboxOnly.length} sandbox-only users resolve to full`);

  const identities = db.prepare("SELECT count(*) AS n FROM auth_identities").get().n;
  const users = db.prepare("SELECT count(*) AS n FROM users").get().n;
  const usersWithoutIdentity = db.prepare("SELECT count(*) AS n FROM users u WHERE NOT EXISTS (SELECT 1 FROM auth_identities i WHERE i.user_id = u.id)").get().n;
  add("users_have_identities", usersWithoutIdentity === 0, `${users} users, ${identities} identities, ${usersWithoutIdentity} without identity`);

  const unboundPaidClaims = db.prepare("SELECT count(*) AS n FROM billing_purchase_claims WHERE status = 'paid' AND claimed_user_id IS NULL").get().n;
  add("paid_claims_awaiting_binding (informational)", true, `${unboundPaidClaims}`);
  return checks;
}

export function sqlFiles(model, data) {
  const files = [];
  let current = [];
  let size = 0;
  const flush = () => {
    if (current.length) files.push(current.join("\n") + "\n");
    current = [];
    size = 0;
  };
  for (const name of importOrder(model)) {
    for (const statement of insertStatements(name, model.get(name).columns, data.get(name) || [])) {
      if (size + statement.length + 1 > MAX_SQL_FILE_BYTES) flush();
      current.push(statement);
      size += statement.length + 1;
    }
  }
  flush();
  return files;
}

async function main(command, dir, outDir) {
  assert.ok(["check", "rehearse", "sql", "unpack"].includes(command), "usage: check|rehearse|sql <exportDir> [outDir] | unpack <bundle.json> <exportDir>");
  if (command === "unpack") {
    assert.ok(outDir, "unpack needs an output directory");
    console.log(JSON.stringify({ command, tables: await unpackBundle(dir, outDir) }));
    return;
  }
  const { db, migrations } = await schemaDatabase();
  const model = schemaModel(db);
  const loaded = await loadExport(dir, model);
  const summary = { command, schemaMigrations: migrations, tables: loaded.report.map(({ table, rows }) => ({ table, rows })), ledgerTablesInExport: loaded.ledger, problems: loaded.problems };
  if (loaded.problems.length || command === "check") {
    console.log(JSON.stringify(summary, null, 2));
    if (loaded.problems.length) process.exitCode = 1;
    return;
  }
  if (command === "rehearse") {
    importInto(db, model, loaded.data);
    summary.checks = await verifyImported(db, model, loaded.data);
    summary.ready = summary.checks.every(check => check.ok);
    console.log(JSON.stringify(summary, null, 2));
    if (!summary.ready) process.exitCode = 1;
    return;
  }
  assert.ok(outDir, "sql needs an output directory");
  await mkdir(outDir, { recursive: true });
  const files = sqlFiles(model, loaded.data);
  for (const [index, text] of files.entries()) await writeFile(join(outDir, `${String(index + 1).padStart(4, "0")}.sql`), text);
  summary.sqlFiles = files.length;
  summary.order = importOrder(model);
  console.log(JSON.stringify(summary, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main(...process.argv.slice(2));
}
