# Lesson feedback migration (branch-only preparation)

Base source: 829bfdef46e1b2fdb1fd81eb0836ab3e5155eb13.
Candidate source: the final commit on codex/updates-lesson-reports-20261002.
Source diff: additive table `lesson_reports`, 29 columns, 3 indexes. Forward SQL: `drizzle/0010_lesson_reports.sql`; matching Drizzle schema and generated snapshot/journal.

No remote database has been changed. Owner explicitly prohibits merge and production deploy for this task. This document prepares a separate migration release under `MIGRATION_RELEASE.md`; it does not authorize applying SQL to production.

## Compatibility and impact
- Existing tables, auth, Firebase, billing and verification records are unchanged.
- Previous Worker is compatible with the expanded schema and ignores the new table.
- New Worker needs migration 0010 before feedback is enabled. Missing table produces a visible 503 and preserves the teacher's draft; never a false success.
- New reports contain trusted teacher uid/account/email, canonical catalog metadata, bounded message, observed content identifiers, short location label, basic viewport and deployment reference. No token, arbitrary query string, IP or device fingerprint.
- Rate cap is an atomic INSERT SELECT: 5 reports per teacher per hour; unique request key deduplicates network retries.
- Future Claude analysis is separated from human status. No analysis worker or correction automation is implemented.

## Validation
HTTP-handler tests execute the real SQL and D1 repository against disposable SQLite; local Wrangler D1 validation applies all existing migrations then 0010 and checks the resulting schema. The old application tests/build verify source compatibility. Browser tests exercise actual UI success/errors independently of live identities.

## Future authorized rollout
1. Pin exact base/candidate/merged source SHAs in a dedicated migration release request; review overlap and production migration ledger/binding read-only.
2. Export production database, retain manifest/checksums and validate recovery into a disposable database (include existing reports in later backups).
3. Obtain explicit authorization for the exact forward production database operation, separately from publishing source.
4. Apply only `0010_lesson_reports.sql` once to the authorized production D1 through the canonical Cloudflare migration procedure; verify ledger, table columns, unique/index constraints and existing table row counts.
5. Publish the exact authorized merged source via current canonical production workflow. Smoke teacher create, admin read/status and unauthorized access.

## Recovery
An old Worker can be restored without dropping `lesson_reports`; preserve feedback data. Do not execute SQL rollback, delete reports, modify migration ledgers or re-run migration merely to repair publication. If schema compatibility cannot be established, stop the release and retain its identifiers.
