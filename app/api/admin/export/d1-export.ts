// Logical export of the whole D1 database for the Sites → Cloudflare move
// (docs/releases/PRODUCTION_DATA_EXPORT.md). Read-only: SELECT and PRAGMA only.
// The bundle is unpacked by `scripts/import-production-export.mjs unpack`.

type Statement = {
  bind(...values: unknown[]): Statement;
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
};
export type ExportDatabase = { prepare(sql: string): Statement };

type ColumnInfo = { name: string; pk: number };

export const EXPORT_FORMAT = "spanishcue-d1-export/1";
const PAGE_SIZE = 500;
// Platform tables D1 does not let a Worker read.
const UNREADABLE_TABLE = /^(_cf_|sqlite_)/;

const quote = (name: string) => `"${name.replaceAll('"', '""')}"`;

async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
}

async function countStar(db: ExportDatabase, table: string): Promise<number> {
  const { results } = await db.prepare(`SELECT COUNT(*) AS n FROM ${quote(table)}`).all<{ n: number }>();
  return Number(results[0]?.n ?? 0);
}

export async function exportDatabase(db: ExportDatabase, source: Record<string, unknown> = {}) {
  const exportStartedAt = new Date().toISOString();
  const { results: objects } = await db
    .prepare("SELECT type, name, tbl_name FROM sqlite_master WHERE type IN ('table','index','trigger') ORDER BY type, name")
    .all<{ type: string; name: string; tbl_name: string }>();
  const tableNames = objects.filter(object => object.type === "table").map(object => object.name);

  const tables = [];
  const skipped = [];
  const files: Record<string, string> = {};
  for (const name of tableNames) {
    if (UNREADABLE_TABLE.test(name)) {
      skipped.push({ name, reason: "platform table" });
      continue;
    }
    const { results: info } = await db.prepare(`PRAGMA table_info(${quote(name)})`).all<ColumnInfo>();
    const columns = info.map(column => column.name);
    const primaryKey = info.filter(column => column.pk > 0).sort((a, b) => a.pk - b.pk).map(column => column.name);
    const orderBy = primaryKey.length ? primaryKey : columns;
    const before = await countStar(db, name);
    const lines: string[] = [];
    let pages = 0;
    let firstKey: unknown[] | null = null;
    let lastKey: unknown[] | null = null;
    for (;;) {
      const { results } = await db
        .prepare(`SELECT * FROM ${quote(name)} ORDER BY ${orderBy.map(quote).join(", ")} LIMIT ? OFFSET ?`)
        .bind(PAGE_SIZE, pages * PAGE_SIZE)
        .all();
      pages += 1;
      for (const row of results) {
        const ordered: Record<string, unknown> = {};
        for (const column of columns) ordered[column] = row[column] ?? null;
        const key = orderBy.map(column => ordered[column]);
        firstKey ??= key;
        lastKey = key;
        lines.push(JSON.stringify(ordered));
      }
      if (results.length < PAGE_SIZE) break;
    }
    const after = await countStar(db, name);
    // A write between the two counts would make the pages inconsistent.
    if (before !== after || after !== lines.length) {
      throw new Error(`EXPORT_COUNT_MISMATCH:${name}:${before}:${lines.length}:${after}`);
    }
    const file = `${name}.jsonl`;
    const text = lines.length ? lines.join("\n") + "\n" : "";
    files[file] = text;
    tables.push({
      name, file, columns, orderBy, pageSize: PAGE_SIZE, pages,
      rowCount: lines.length, countStar: after, firstKey, lastKey, sha256: await sha256Hex(text),
    });
  }

  return {
    format: EXPORT_FORMAT,
    manifest: {
      source: { ...source, exportStartedAt, exportFinishedAt: new Date().toISOString() },
      tables,
      otherTables: skipped,
      metadata: {
        schemaObjects: objects.filter(object => object.type !== "table").map(({ type, name, tbl_name }) => ({ type, name, table: tbl_name })),
      },
    },
    files,
  };
}
