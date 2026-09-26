# Production data export from OpenAI Sites (logical, paginated)

The Sites database reader cannot produce a native SQL dump, but it can list
tables and read bounded pages of rows. The migration therefore uses a
**logical export**: every row of every table as JSON, one file per table, plus
a manifest. The schema, indexes, triggers and constraints are rebuilt from the
repository (`drizzle/0000`–`0009`), which is authoritative.

This is the last extraction expected from OpenAI Sites. Everything after file
delivery is done by Claude with `scripts/import-production-export.mjs`.

## Owner export route (used because the Sites reader cannot do the above)

On 2026-09-26 the Sites database reader was confirmed unable to run
`COUNT(*)`, choose `ORDER BY`, list every table, or guarantee untruncated
values. The export therefore runs inside the application itself:

- `GET /api/admin/export` (`app/api/admin/export/`) is owner-only through the
  verified Firebase session, read-only (SELECT and PRAGMA), `private,
  no-store`, and not blocked by the write freeze. It reads every table in
  `sqlite_master` except `_cf_*`/`sqlite_*`, orders by primary key (all
  columns when there is none), pages 500 rows at a time, and refuses to
  deliver a table whose `COUNT(*)` changes during the read.
- The response is one JSON bundle (`spanishcue-d1-export/1`) holding the
  manifest described below plus every `<table>.jsonl` text with its sha256.
- It reaches production through an ordinary Sites release of `main`.
- The owner opens the URL while signed in, keeps the downloaded file private,
  and hands it to Claude, who runs
  `node scripts/import-production-export.mjs unpack <bundle.json> <exportDir>`
  and then the steps below.
- Delete the route after the cutover.

## Tables (import order, primary key = stable export ordering)

| Table | ORDER BY (primary key) | Columns | Column names |
|---|---|---|---|
| `users` | `id` | 9 | `id`, `email`, `normalized_email`, `display_name`, `role`, `status`, `created_at`, `updated_at`, `last_sign_in_at` |
| `access_grants` | `id` | 12 | `id`, `user_id`, `product_code`, `access_level`, `source`, `source_reference`, `plan_code`, `status`, `starts_at`, `expires_at`, `created_at`, `updated_at` |
| `auth_identities` | `id` | 8 | `id`, `user_id`, `provider`, `provider_subject`, `provider_email`, `email_verified`, `created_at`, `last_seen_at` |
| `billing_checkout_locks` | `environment`, `user_id`, `product_code` | 10 | `environment`, `user_id`, `product_code`, `request_id`, `status`, `provider_subscription_id`, `approval_url`, `held_until`, `created_at`, `updated_at` |
| `billing_subscriptions` | `id` | 21 | `id`, `user_id`, `provider`, `provider_subscriber_id`, `provider_subscription_id`, `provider_plan_id`, `product_code`, `offer_code`, `status`, `current_period_end`, `next_billing_time`, `created_at`, `activated_at`, `cancelled_at`, `last_payment_at`, `last_failure_at`, `updated_at`, `environment`, `first_payment_at`, `paid_through`, `provider_event_time` |
| `billing_payments` | `id` | 14 | `id`, `user_id`, `subscription_id`, `provider`, `environment`, `provider_payment_id`, `provider_event_id`, `amount_cents`, `currency`, `status`, `occurred_at`, `paid_through`, `created_at`, `updated_at` |
| `billing_outbox_events` | `id` | 11 | `id`, `provider`, `environment`, `event_key`, `event_name`, `user_id`, `subscription_id`, `payment_id`, `occurred_at`, `created_at`, `delivered_at` |
| `billing_purchase_claims` | `claim_id` | 25 | `claim_id`, `claim_secret_hash`, `environment`, `provider`, `offer_code`, `return_to`, `status`, `checkout_request_id`, `approval_url`, `buyer_email`, `normalized_email`, `provider_customer_id`, `provider_subscription_id`, `provider_payment_id`, `provider_event_id`, `provider_status`, `amount_cents`, `currency`, `paid_through`, `paid_at`, `claimed_user_id`, `claimed_at`, `expires_at`, `created_at`, `updated_at` |
| `students` | `id` | 10 | `id`, `owner_id`, `alias`, `last_name`, `email`, `level`, `goal`, `status`, `created_at`, `updated_at` |
| `class_records` | `id` | 14 | `id`, `owner_id`, `student_id`, `lesson_id`, `free_title`, `starts_at`, `timezone`, `duration_minutes`, `status`, `pedagogical_note`, `next_step`, `request_key`, `created_at`, `updated_at` |
| `founder_assignments` | `id` | 7 | `id`, `user_id`, `subscription_id`, `offer_code`, `founder_number`, `created_at`, `environment` |
| `founder_leads` | `id` | 12 | `id`, `email`, `normalized_email`, `display_name`, `account_id`, `source_path`, `offer_price_cents`, `offer_revision`, `status`, `marketing_consent_at`, `created_at`, `updated_at` |
| `founder_offer_state` | `environment`, `offer_code` | 6 | `environment`, `offer_code`, `limit`, `claimed`, `enabled`, `updated_at` |
| `lesson_progress` | `user_id`, `lesson_id` | 7 | `user_id`, `lesson_id`, `state`, `progress_percent`, `first_opened_at`, `last_opened_at`, `completed_at` |
| `offer_settings` | `id` | 6 | `id`, `base_cents`, `discount_percent`, `months`, `max_teachers`, `revision` |
| `payment_webhook_events` | `provider`, `environment`, `event_id` | 9 | `provider`, `environment`, `event_id`, `event_type`, `resource_id`, `received_at`, `processed_at`, `processing_status`, `error_code` |
| `verification_email_deliveries` | `id` | 8 | `id`, `identity`, `recipient`, `request_key`, `kind`, `status`, `requested_at`, `provider_id` |

Import order puts parents before children and `founder_offer_state` after
`founder_assignments`, so the `founder_assignments_increment_claimed` trigger
cannot double-count imported founders.

## File format

- `<table>.jsonl`: one JSON object per line, one line per row, **every column
  present**, values exactly as stored (`null` stays `null`; integers stay
  numbers; timestamps, IDs, provider references and JSON-in-text fields stay
  unmodified strings/numbers). A JSON array file is also accepted.
- `manifest.json`:

```json
{
  "source": { "project": "appgprj_6a83ba10b0c481919060fc089d581233", "version": "<version id>", "sourceSha": "<sha>", "exportStartedAt": "<ISO>", "exportFinishedAt": "<ISO>" },
  "tables": [
    { "name": "users", "file": "users.jsonl", "columns": ["id", "..."], "orderBy": ["id"], "pageSize": 200,
       "pages": 3, "rowCount": 412, "countStar": 412, "firstKey": ["..."], "lastKey": ["..."], "sha256": "<optional>" }
  ],
  "otherTables": [ { "name": "<any other table the listing shows>", "file": "<name>.jsonl", "rowCount": 0 } ],
  "metadata": { "...": "release/environment metadata, names only for secrets" }
}
```

`rowCount` = rows written to the file; `countStar` = `SELECT COUNT(*)` for the
same table. They must be equal. Values in `firstKey`/`lastKey` are pagination
evidence and never shared outside the owner.

## What Claude runs after delivery

1. `node scripts/import-production-export.mjs check <dir>`: all 17 tables present, columns identical to the repository schema, no nulls in NOT NULL columns, no duplicate primary keys, `rowCount == countStar == lines`, optional checksums.
2. `node scripts/import-production-export.mjs rehearse <dir>`: rebuilds the schema from `drizzle/`, imports every row, then checks per-table counts, `PRAGMA foreign_key_check`, `integrity_check`, founder `claimed` equals Live assignments, every billing grant references its subscription, every Live founder and every active Live billing grant resolves to PRO through the production access code (`db/accounts.ts`), no Sandbox-only user resolves to PRO, users have identities. Output contains counts only.
3. `node scripts/import-production-export.mjs sql <dir> <out>`: ordered INSERT files (≤ 90 KB each).
4. Create a **disposable** rehearsal D1 (`spanishcue-rehearsal-<date>`), apply `drizzle/0000`–`0009`, record the ledger, load the INSERT files, re-run the counts on D1 itself.
5. Run the app against the rehearsal data **locally** (`wrangler dev --local` with the same INSERT files) so no production data is served from a public hostname; run `production-smoke.mjs`, the FREE/PRO and billing checks, and compare with production.
6. Delete the rehearsal D1 and local state after sign-off. Mark DATA MIGRATION READY only if every check passes.

The export files contain personal and payment data. Keep them outside the
repository (the scratchpad/private folder), never commit them, never paste
them into chat, and delete them after the cutover.

## Request for the Sites release owner (copy exactly)

> **SPANISHCUE — final read-only production data extraction.** Make **no production changes**: do not deploy, write to, migrate, or alter the database, schema, environment set, secrets, custom domain or `automation/sites-release-state`.
>
> Target: Sites project `appgprj_6a83ba10b0c481919060fc089d581233`, D1 binding `DB`, current healthy production (v176, source `ae4bfc50b39f95432a9c3c20477d25fbd6ca523f`, or newer if released).
>
> A native SQL dump is **not** required. Use the database reader you have:
>
> 1. **Enumerate every table** in the production database, including any platform or migration-tracking table. Report the full list.
> 2. For **each** table, read **every row** with stable pagination: `SELECT * FROM <table> ORDER BY <primary key columns> LIMIT <page size> OFFSET <n>` (or keyset pagination on the same key). **Never stop after one page**: keep reading until a page returns fewer rows than the page size. Then run `SELECT COUNT(*) FROM <table>` and confirm it equals the number of rows you exported. Ordering keys for the 17 application tables: users(id); access_grants(id); auth_identities(id); billing_checkout_locks(environment, user_id, product_code); billing_subscriptions(id); billing_payments(id); billing_outbox_events(id); billing_purchase_claims(claim_id); founder_assignments(id); founder_offer_state(environment, offer_code); founder_leads(id); lesson_progress(user_id, lesson_id); offer_settings(id); payment_webhook_events(provider, environment, event_id); students(id); class_records(id); verification_email_deliveries(id). For any other table, order by all columns.
> 3. Write each table to its own **`<table>.jsonl`** file: one JSON object per row with **every column name as the key**, values exactly as returned. Preserve `null`, numbers, timestamps, IDs, provider references and JSON-in-text fields exactly; do not reformat, trim, round or convert anything.
> 4. Write **`manifest.json`** with, per table: `name`, `file`, `columns` (all column names in order), `orderBy`, `pageSize`, `pages`, `rowCount` (rows written), `countStar` (the COUNT(*) result), `firstKey` and `lastKey` of the ordering columns, and `sha256` of the file if you can compute it. Add `source` (project, version ID, source SHA, export start/finish time).
> 5. In the same manifest add `metadata`, read-only, with what you can already see: the applied migration list/ledger rows (expected 0000–0009, last `0009_glossy_mariko_yashida`); Worker `compatibility_date` and flags; binding names and types (confirm whether `IMAGES` is bound); plain variable **names** and non-secret values; secret **names only** (no values); custom-domain/route configuration for `spanishcue.com` and `www.spanishcue.com`, and which Cloudflare account/zone serves `spanishcue.com`; current version and deployment IDs; previous healthy version ID; the `enabled`/`status`/`healthy`/`previous` values from `automation/sites-release-state`; and any OpenAI-specific packaging or refs (`.openai/hosting.json`, `dist/.openai`, source-branch mechanics, `refs/tags/production-v161-preserved`, source `c49bd60`).
> 6. Deliver all files **privately to the owner only** as a single archive (not GitHub, not a public link, not pasted into chat).
>
> Report at the end: the table list, and per table `rowCount` / `countStar` / `pages`. If any table's counts differ, or any read failed, say so explicitly instead of delivering a partial export.
