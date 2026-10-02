# Owner-authorized reports schema release — 2026-10-02
Base: 829bfdef46e1b2fdb1fd81eb0836ab3e5155eb13. Candidate: the exact main SHA produced by this PR; record it in the official deployment summary.

The approved reports implementation requires one new table, `lesson_reports`, and two indexes. The explicit owner instruction authorizes the full implementation and production publication. The exact SQL is `drizzle/0010_lesson_reports.sql`: CREATE TABLE/INDEX IF NOT EXISTS only, no changes to existing rows/tables. Both previous and new Workers remain compatible after preparation. The official workflow runs this exact SQL before deploying the new Worker; retries are safe. Ordinary migrations remain excluded. The Drizzle journal/snapshot also describes the addition, so later migration-ledger application remains safe.

The previous Worker is the recovery path if smoke fails; keep the new table and any reports. Never roll back SQL or delete reports. No backup of existing rows is needed for this CREATE-only operation because it does not mutate them. The existing D1 export remains available; do not export user data into logs. Test against real disposable SQLite with double application and representative report lifecycle before release. The official deployment records the D1 command and exact source SHA. Production smoke and read-only owner admin inspection verify availability after deploy.

Novedades: set `news: { addedAt: 'YYYY-MM-DD', featured: true }` on real catalog records. Banner reads this metadata, sorts newest first and shows up to six entries. Set featured false to retire a promotion; catalog order and IDs do not define recency.

Future Claude management: reports are stored with canonical lesson metadata, optional activity context, status, ai_status, resolution and resolved_at. Current release exposes owner-only GET/PATCH endpoints and /admin/reportes. No AI process or automatic correction is enabled.
