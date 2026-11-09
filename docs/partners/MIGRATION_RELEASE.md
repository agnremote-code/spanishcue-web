# Partners: dedicated additive migration proposal

Status: AUTHORIZED by the owner in this conversation on 2026-11-10, for the exact SQL checksum below. Tested in disposable SQLite and local D1. NOT executed against production; provider access and production preflight remain pending.
Source base: `78f178be91a5fb6b40d32947eeeb2a078b259ac3` (GitHub main when this task started).
Forward SQL: `docs/partners/schema.sql`.
SHA-256: `7107020f64c27a1c5f2abebebf16c6d04848ff60cbb9958816cebaa6e4111a86`.

## Exact operation requiring authorization

Create the five new `partner_applications`, `partner_attributions`, `partner_payment_adjustments`, `partner_settlements` and `partner_audit` tables and three supporting indexes in the existing production DB binding. Execute this exact reviewed SQL once through a separate coordinated migration release. No existing tables/rows, billing plans, products, subscription states, grants, secrets or release locks change. No implicit authorization for arbitrary migrations, deletes or repair is requested.

## Preflight and backup (before the authorized write)

1. Record the merged source SHA, current healthy production Worker version and exact production database ID from the existing owner-controlled release environment. Do not infer D1 IDs from placeholders or the retired Sites database.
2. Read release/merge coordination state; wait for any active holder, never replace its lock. The migration workflow must be a separately reviewed release, as required by docs/releases/MIGRATION_RELEASE.md; existing ordinary deployments do not run this SQL.
3. Query sqlite_master for the five exact table names; if any exists, compare PRAGMA table_info and index_list against the reviewed SQL. Stop on incompatible shape; IF NOT EXISTS must not hide partial/incompatible tables.
4. Export the production database with the existing authorized Cloudflare backup/export procedure to private storage. Verify non-empty export, timestamp, checksum, and access to the preceding Time Travel recovery point. Do not put personal data in Git, chat or this evidence directory.
5. In a disposable database, restore that export and apply the proposed SQL twice. Verify existing table row counts and schema are unchanged and all five partner tables/indexes have the expected shape. Local tests already exercise fresh application, but this production-snapshot compatibility check is still required.
6. Preserve the existing production auth/payment secret configuration. Referral signing uses the existing AUTOESTUDIO_SHARE_SECRET with a purpose-separated HMAC key; check presence/length without printing values. No new provider secret or payment product is required.

## Apply and verify

After explicit authorization and with the coordinated migration lock, execute only the checksum-matched SQL on the confirmed production database. Record job/run ID, database ID, source SHA, start/end times and success. Read PRAGMA table_info for all five tables and index_list for applications/settlements, and confirm existing billing/access row counts remain unchanged.

Publish only a verified merged main SHA through Deploy Production (Cloudflare, owner-authorized), action deploy, mode release, confirmation `deploy <exact sha>`. No native Sites publication or local wrangler deploy.

Smoke: /partners returns its specific metadata and valid application form; invalid/cross-origin submissions fail; owner admin is denied anonymously and to teachers; application retries remain single-row; approve only a clearly marked owner-approved smoke partner, verify redirect/cookie and bound teacher on a disposable test account. Verify existing free, PRO and checkout availability behavior without charging a real card. Do not create fictional production applications without owner authorization.

## Compatibility and recovery

The old Worker never references these tables; it remains compatible with the expanded schema. The new Worker checks table readiness and shows explicit form unavailability when missing; referral links fail closed. Ordinary checkout and PRO do not depend on these tables, and attribution failures are isolated.

If application verification fails, restore the prior compatible Worker through the existing rollback mechanism and preserve the new tables and recorded data. Do not drop tables, reverse migrations, delete applications or rewrite any payment data. Diagnose against logs and retry the same forward operation only after confirming the actual state. Database restoration is a separate explicitly authorized operation, never an automatic step.

## Authorized execution without browser login · 2026-11-10

The owner explicitly instructed continuing without the failed browser login. The dedicated `.github/workflows/partners-authorized-migration.yml` operation follows the existing Autoestudio one-off migration pattern. It uses the existing production environment, existing Cloudflare secret, the existing `deploy-production` concurrency group and read-only coordination checks. It waits for this exact task commit to pass CI and merge; it never steals a merge/release lock. No interactive Cloudflare session or new credential is required.

This is a separate migration release, not an ordinary deployment hook. Only a push changing the workflow on `codex/partners-d1-authorized-20261110` initiates it. The sole SQL execution is pinned to the original authorized checksum. A complete matching schema is recognized without another write; partial or incompatible schemas fail closed. Native export and Time Travel recovery are verified before mutation, and the export is restored and rehearsed twice inside the private runner. Raw customer data, export URLs and secret values are never uploaded to artifacts. Evidence contains sanitized metadata only. Normal live writes remain enabled; if genuine signups/purchases increase row counts during verification, this is recorded instead of claiming row-count equality.

No existing deployment workflow or ad-related PR #209 file is edited. This owner-directed dedicated production operation is isolated in its own workflow despite the older unrelated workflow PR remaining open; it shares production serialization and does not change the older PR's source or intent.

Pre-execution review: independent review found an overly permissive schema normalizer. It now preserves quoted SQL defaults and CHECK values exactly; regression tests reject changed case or internal whitespace. Backup restore/rehearsal, exact authorization/binding checks and partial-schema rejection pass locally. A failed or ambiguous SQL execution is recorded as requiring reconciliation, never as zero confirmed writes or as an automatic retry.
