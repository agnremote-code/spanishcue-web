# Institution MVP: dedicated additive preparation

Base: `e92ab948a8e3a6ef577d240421b3aeed1229377e` (merged academy demo acquisition). This is a source/migration proposal only. The coordinating owner controls PR/publication and the exact safe D1 operation. No SQL has been run against staging or production.

## Exact forward contract

After export and recovery rehearsal, apply only `drizzle/0017_institutions.sql` to the existing `DB` binding, using the canonical migration release process in `MIGRATION_RELEASE.md`. The SQL contains only retry-safe `CREATE TABLE IF NOT EXISTS` and `CREATE INDEX IF NOT EXISTS`, adding:

- `institutions`: stable ID, basic name, creator, active/disabled status and timestamps.
- `institution_memberships`: institution/user composite primary key; academy-scoped administrator/teacher role; active/revoked status; allocated seat flag and timestamps.
- `institution_licenses`: one owner-provisioned allowance per institution, bounded seats, mandatory start and expiration, provisioning owner and update time.
- `institution_invitations`: expiring SHA-256 token digest, verified recipient email, scoped role/inviter, explicit sending/sent/failed/accepted/revoked state and acceptance identity. No raw tokens.

Foreign keys reference existing `users`; the migration does not change users, global roles, grants, billing, existing rows, external bindings, secrets or prices. Running it twice preserves all rows. No automatic migration/rollback, workflow mutation or second deployer is introduced.

## Access and atomicity

A verified active user can register up to three institutions; registration creates an academy administrator membership and **zero PRO access**. An academy administrator can edit its name, invite teachers/administrators, revoke membership/invitations, and allocate/revoke seats solely inside their own institution. Roles never become the global owner role. Teachers see their own membership and licence inventory, not the teacher list or invitation addresses.

Only the existing verified global owner, additionally checked as an active owner in `users`, can provision or renew a seat count (0–1000) and a finite expiration (at most five years). Administrators cannot change either. A single conditional SQLite write rechecks active scoped administration, licence validity and allocated count while acquiring SQLite's writer lock, preventing concurrent last-seat overbooking. Provisioning refuses a reduction below allocated seats. Membership revocation clears allocation in the same write. Registration and invitation acceptance use transactional D1 batches. Invitations grant membership only; they never reserve or allocate seats.

`db/accounts.ts` retains the existing personal entitlement resolver and adds institutional access only when personal access is free and the account, institution, membership, allocated seat and licence are all active. Personal subscriptions/manual grants survive institutional revocation or expiry. Missing institutional tables or institutional query failures fail closed without breaking personal access. Old Workers ignore all four new tables.

## Email and privacy contract

Reuse the existing `RESEND_API_KEY` and `VERIFICATION_FROM` (`verify@spanishcue.com`) conventions. Existing verified sending-domain setup is a prerequisite; no new secret is required. Without email configuration, the dashboard shows a non-operational invitation state and the API refuses to create invitations. No real recipient was emailed during development.

Generate 32 cryptographically random bytes and persist only their SHA-256 digest. Link to `https://spanishcue.com/pro/academia/aceptar#token=…`, never a query parameter. The recipient must sign in with a verified, active, matching individual email and explicitly accept within seven days. The active scoped inviter is rechecked during acceptance. Raw tokens are excluded from API responses, logs, analytics and referrers. The private academy paths suppress Google page views, use `no-referrer`, and remove the fragment at hydration. A visitor who needs to sign in reopens the original email after signing in; tokens are never carried in login return paths or browser storage.

Reserve delivery once per idempotency key and use the same Resend key/body for up to two bounded attempts. A duplicate API request never sends again. Provider acceptance is displayed as sent, not delivered; no delivery/open analytics are fabricated. An interruption or failure is visible; an administrator withdraws and replaces the invitation rather than recovering a raw token. Limit each inviter to 20 invitations/hour, each institution/recipient to 3/hour, and one live invitation per institution/recipient; quotas are checked atomically in the INSERT. Existing Worker IP limiting covers the academy POST endpoint as an additional layer.

## Preparation, verification and recovery

1. Coordinate against current main and overlapping PRs. Confirm exact candidate SQL bytes and canonical release/merge state; never modify or expire locks.
2. Inspect actual DB binding/schema/ledger read-only. Export privately using the existing owner export. Rehearse the pre-0017 export against the exact pre-0017 source schema; the latest importer intentionally continues to reject incomplete exports.
3. Restore that representative export locally, apply 0017 twice, compare existing row counts/integrity/entitlements, and exercise registration, permissions, quota and last-seat concurrency regressions. The latest-schema export/import fixture includes all four new tables and verifies retained invitation digests/allowance.
4. Prepare staging, verify exact columns/indexes, verify a real authorized staging invitation only if explicitly appropriate, and execute the coordinated production forward operation. Do not fabricate production institutions, invitations or analytics.
5. Publish the exact reviewed merged SHA. Before preparation the dashboard explains that it is unavailable and the public landing continues demo/contact intake. After preparation it links to the real dashboard and states that licences require owner provisioning. Verify signed-out/forged API requests fail, verified teachers cannot provision or cross institution boundaries, and personal subscriptions remain active after institutional revocation.

Rollback retains the added schema and all institution records; restore only an established compatible previous Worker. Never delete invitation/member/licence data or reverse SQL automatically. No pricing, billing subscription or institution usage-analytics feature is included.
