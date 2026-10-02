# Autoestudio Share Pass: dedicated migration release

Status: **prepared only; no production D1 operation authorized or executed**.
Source base: `8969357` (root release owner records full candidate and eventual merged SHA in the migration PR). This change is migration-sensitive and cannot be released by the ordinary automatic publisher. Follow `MIGRATION_RELEASE.md`, then the current Cloudflare production release procedure. Never run schema operations from an automatic publish or rollback.

## Exact forward operation

Apply the complete, unchanged SQL file `drizzle/0011_autoestudio_share.sql` once to the verified production D1 binding, after explicit owner authorization of that operation. It creates exactly four tables and three indexes:

- `autoestudio_learners`: 192-bit random opaque id, teacher owner UID, nullable alias, creation time. Unique `(id, owner_id)`.
- `autoestudio_passes`: independent 192-bit random id, teacher/learner composite foreign key, level constrained to A1–C2, increasing revision, optional revocation time, creation time.
- `autoestudio_progress`: primary key `(learner_id, module_id)`, structural completed sections, current section, start/update/completion times and bounded aggregate quiz summary.
- `autoestudio_rate_limits`: a fixed 4096-bucket maximum counter store. No IP address or raw user token is persisted.

No existing tables, records, columns, grants, named students, billing rows or lesson progress are modified. No `DROP`, `DELETE`, `ALTER`, backfill or production data copying occurs. Migration `0010` belongs to concurrent reports work; do not run a blanket “apply all migrations” command or assume it has been approved. Before executing, inspect the actual production ledger and reconciled schema read-only and record which migrations already exist. Record SHA-256 of the approved `0011` SQL and the merged source SHA. If any target table/index already exists or the ledger disagrees, stop and reconcile; do not treat an error as permission to repair schema.

Exact execution shape, once the binding/database ID and approved release environment have been verified by the release owner:

```sh
wrangler d1 execute <verified-production-database> --remote --file=drizzle/0011_autoestudio_share.sql
```

The placeholder is intentional: guessing the live database identifier is prohibited. The release record must replace it with the read-only verified binding and capture the exact invocation for owner approval. Ledger recording must follow the existing database's observed ledger procedure; do not invent or modify that procedure as part of this change.

## Model decision

The existing `students` model belongs to teacher-managed class records and accepts surname, email, goals and teacher notes. Anonymous course learners have a different identity and lifecycle: alias is chosen by a bearer-link learner, no account/contact field exists, and course access can progress across levels while retaining the learner. A separate learner table avoids granting a student bearer access to named student/class-record APIs or collecting contact data. Teacher owner UID follows the existing tracker ownership convention. Composite foreign keys prevent cross-teacher pass assignment independently of API checks.

## Token and cookie design

A reproducible link is `v1.<192-bit random pass id>.<level>.<revision>.<HMAC-SHA256>`. `AUTOESTUDIO_SHARE_SECRET` is server-only, at least 32 characters, and must be provisioned independently in each runtime using secret-provider tooling; never put its value in files, logs, PRs or chat. No raw usable bearer is stored in D1. The public opaque pass ID alone cannot authorize. Copy reconstructs the current signed link; rotation increments revision and preserves the learner and progress. Revocation is durable and cannot be undone through this API. Links have no routine expiry.

`/s/<token>` is a non-rendering route: it validates the HMAC and live row and immediately sends a `303` to a token-free path with `Referrer-Policy: no-referrer`, private/no-store and noindex. It never renders application analytics/navigation. A host-only `__Host-sc-autoestudio` cookie is Secure, HttpOnly, SameSite=Lax, Path=/, no Domain. Purpose-separated HMAC cookies distinguish a 30-minute pending alias claim from a claimed session (up to 400 days; the reusable link renews it). Pending cookies cannot read lessons/progress. Every session verifies live revision/revocation. Rotating the deployment signing secret invalidates all prior links/cookies: this is emergency invalidation, not routine release configuration.

First claim uses a conditional `alias IS NULL` SQL update, so concurrent clients resolve the same alias/profile. Alias is NFC-normalized, 2–24 Unicode characters, letters/numbers/simple spaces/hyphen/underscore; obvious contacts and long numeric phone-like runs are rejected. An alias can still identify a person; UI must encourage a non-identifying nickname.

Progress accepts only allowlisted structural fields. Written drafts, recordings, raw answers, arbitrary identities and timestamps as claimed evidence are not persisted. Server timestamps are authoritative. Completed sections are merged atomically in SQLite, completion is derived from all required sections, and quiz bounds are enforced. Every update binds pass id and revision as well as verifying the actual cookie, preventing a stale tab from writing another student's browser session. A live pass revision/revocation check is in the mutation SQL itself.

## Compatibility and fail-closed behavior

Old Worker + expanded schema: compatible, as old code does not reference these names. New Worker + expanded schema + secret: full Share Pass behavior. New Worker + old schema or missing secret: verification fails closed; API returns generic unavailable/invalid session, no premium access, no exception or token logging. Existing authenticated Pro/owner access and public previews remain independently enforced by the Worker. This does **not** authorize releasing the new Worker before the dedicated migration gate.

## Backup, release and recovery

1. Use the repository-authorized release coordination; wait for the merge lock and never alter or steal automation locks. The prior Sites controller is disabled; publish through Deploy Production (Cloudflare, owner-authorized), mode release, for the exact merged main SHA. Confirm last healthy source and exact merged candidate, production binding and live migration ledger read-only.
2. Export the verified production D1 using the established provider export procedure. Store it only in the approved encrypted recovery location; never commit a customer-data export. Record export identifier, timestamp, byte count/hash and a successful disposable restore/integrity/representative-row check. Verify provider recovery availability/window. No forward SQL until backup/recovery is verified.
3. Re-run the exact forward file against a disposable restore. Compare representative existing row counts/checksums before/after and verify foreign keys. Obtain owner authorization for the concrete verified production command and SQL hash.
4. Apply only that operation once, record execution and schema/ledger readback, then publish the exact merged candidate through the canonical release owner. Verify secret provisioning without reading/logging it. Smoke anonymous preview, Pro access, new pass, alias claim, assigned-level module, denied other level, teacher tenant isolation, progress, rotation and revoke.
5. On failure stop. No SQL rollback, table drop, data deletion, automatic repair or blanket migration retry is authorized. If tables exist and existing data is intact, restoring the previous Worker is compatible: leave additive tables and any collected progress in place. Recovering D1 from backup is a separate explicit database operation requiring owner authorization, identifiers and a data-loss analysis. Do not silently restore over subsequently collected learner progress.

## Local validation evidence

`node --test tests/autoestudio-share.test.mjs` uses Node SQLite with real migrations, representative pre-existing `students` data and foreign keys enabled. It executes the exact forward SQL unchanged, checks existing data preservation and tenant foreign keys, and exercises actual service SQL through a D1 adapter. Tests cover unauthorized mint, teacher tenant boundaries, pending/claimed purpose separation, tamper/random tokens, atomic claims, cross-device identity, progress scoping/privacy/monotonic merge, next-level profile continuity, revoke/rotate, failure without secret, and bounded distributed rate limiting. Worker/build tests separately cover routing, `.rsc`, public preview and absence of premium content/server secrets in public bundles. Local success is not a claim that production migration or backup verification occurred.
