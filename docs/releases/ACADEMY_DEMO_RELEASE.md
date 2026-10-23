# Academy acquisition: coordinated additive database release

Source base: `daee8bf28728c1a10c2afa069ab54606f050fb95`. The PR identifies the exact candidate commit. This is a dedicated migration release proposal under `MIGRATION_RELEASE.md`, not permission to modify existing production data.

## Forward operation

Apply exactly `drizzle/0016_academy_demo_requests.sql` to the existing `DB` binding after export and recovery rehearsal. It creates `academy_demo_requests` and two indexes with `IF NOT EXISTS`; it contains no UPDATE, DELETE, ALTER or DROP. It does not modify accounts, grants, subscriptions, educational content or existing rows. It adds no binding, external service, secret or pricing plan. Validate the exact SQL in a disposable database twice; `tests/academias.test.mjs` does this and preserves a representative existing row. `tests/production-export-import.test.mjs` also restores representative academy requests alongside current account, billing and Homework fixtures.

## Compatibility and public behavior

- Old Workers ignore the added table and continue to work.
- New Workers check table readiness. Before preparation, `/academias` offers a real contact link using the existing public support address (or `/contact` when none is configured). There is no broken public form.
- Once the table exists, the same page exposes the form. A success message and the existing consent-aware analytics event occur only after D1 persistence.
- `/admin/academias` and `/api/admin/academy-demo` reuse the Worker’s verified owner boundary and add their own owner check. They do not grant academy administrators any global permissions.
- On Worker rollback, retain the table and its requests. Do not reverse SQL or delete leads.

## Coordination and execution status

At inspection, open PR #209 modifies `.github/workflows/deploy-production.yml` and `app/marketing/analytics.ts`; #226 owns logo/layout changes. This task does not modify those files or create a competing deployment system. The existing production workflow does not apply 0016. No production schema operation has been performed by this task.

Before applying 0016:

1. Confirm the exact merged candidate and that the official release state is idle and the merge lock is absent. Do not modify, steal or expire either lock.
2. Resolve the overlapping production workflow work through the owner or wait for its merge, following AGENTS.md. Use the single authorized migration/release mechanism; do not improvise a second deployer.
3. Inspect the actual staging and production D1 bindings and table inventory read-only. Export through the existing owner export mechanism. Keep private exports private. Before 0016 exists in production, rehearse the export against the base revision schema (daee8bf28728c1a10c2afa069ab54606f050fb95), then apply 0016 twice to that disposable restored database. Verify integrity and existing account entitlements before the live forward operation. Do not weaken the latest-schema importer to silently ignore missing tables.
4. Apply only the reviewed CREATE-only SQL to staging, verify all columns and indexes and a representative consented test submission there, then apply the same approved operation to production under the official coordination rules. Do not submit fabricated production leads.
5. Verify a normal visit offers the form, cross-origin POSTs fail, ordinary users cannot list requests, and the owner can read a real authorized submission. Run the official production smoke against the exact released SHA.

## Institutional architecture audit and next phase

Current identity is Firebase, resolved to stable internal `users`/`auth_identities` through `db/accounts.ts`. Access is already separated from billing through `access_grants`; provider subscriptions and verified payment records remain independent. Worker identity headers are stripped and rebuilt from verified sessions. The current owner administration is global, so it must not become the academy administrator role.

No institutional membership, invitation, seat allocation or academy usage dashboard exists today. The next bounded MVP should add institutions, institution memberships (`administrator`/`teacher`), hashed expiring invitations, and institution-specific access allocations. Authorize every administrative query against the authenticated user’s membership and institution ID, never a client-supplied owner field. Resolve individual and institutional library access additively, preserving personal subscriptions. Seat enforcement and revocation must be atomic. Do not create a public institutional tariff or connect academy roles to the global owner flag. Show usage only once genuine institutional events exist.

## Phase 2: institutions MVP (source only; 0017 not applied)

`drizzle/0017_institutions.sql` is CREATE-only: `institutions`, `institution_members` (one institution per account, roles `admin`/`teacher`) and `institution_invitations` (only a SHA-256 of the token is stored; 14-day links bound to the invited email; a new invite to the same email revokes the previous one).

- `/academias/panel`: any signed-in teacher can register an academy and becomes its administrator. Administrators edit name/city/web, invite by link (copy or open in their mail client; no email is sent by the server yet), revoke invitations, change roles and remove members. Teachers see their academy and the library only.
- `/academias/unirse?token=…`: accepts an invitation with the invited account.
- `/admin/academias` (owner only): lists academies and sets `seat_limit` after a real agreement. No public price, plan or checkout exists.
- Access: `syncSeats` gives the first `seat_limit` members (by join date) an `access_grants` row with `source='institution'` and `source_reference=<institution id>`; everyone else's institutional grant is revoked. The account resolver is unchanged, and personal billing/manual grants are never touched.
- Every admin query uses the institution of the authenticated user's own membership; no client-supplied institution id is trusted. `/api/academy`, `/academias/panel` and `/academias/unirse` are identity-aware in the Worker.
- Before 0017 exists the panel and invitation pages return 404 and `/api/academy` returns 503, so nothing half-working is public.
- Not built yet: server-sent invitation emails, institution usage reporting (no real institutional events exist), per-teacher seat choice.
