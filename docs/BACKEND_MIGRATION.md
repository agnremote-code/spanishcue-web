# CHESPANISH backend migration runbook

This document is the stable contract for moving CHESPANISH from Sites to an
independent production domain without rebuilding teacher accounts or access
rules.

## Current request flow

1. Firebase authenticates Google, Apple, or email/password in the browser.
2. The session endpoint verifies the Firebase ID token server-side.
3. The verified identity is linked to an internal CHESPANISH user.
4. The Worker resolves that user's role and library entitlement from D1.
5. Only server-created identity headers can unlock protected routes and assets.

The Firebase UID is an external identity, not the account primary key. The
portable key is users.id.

## Portable data contract

| Table | Owns | Migration rule |
| --- | --- | --- |
| users | Canonical teacher profile, role, status, timestamps | Preserve every id exactly |
| auth_identities | Link from an auth provider and subject to a user | Add new providers; never replace users.id with a provider UID |
| access_grants | Free/full product entitlement and its source | Preserve active, revoked, and expiring grants |
| lesson_progress | Per-user lesson state and timestamps | Import by canonical user id and lesson id |
| offer_settings | Launch price and promotion settings | Import the row with id 1 |

All application authorization must resolve through users and access_grants. UI
state, Firebase claims, email text, and browser storage are not authoritative
permission sources.

## Auth-provider replacement

To replace Firebase later:

1. Keep users, access_grants, and lesson_progress unchanged.
2. Verify the new provider token in a new server adapter.
3. Match an existing user by a previously verified email only during the
   controlled migration.
4. Insert a new auth_identities row with the new provider and subject.
5. Keep the old identity until every account has successfully signed in with
   the replacement provider.
6. Remove the Firebase adapter only after reconciliation reports no orphaned
   accounts.

Never create a second internal user merely because a teacher changes from
email/password to Google or Apple.

## Billing-provider integration

A future billing webhook grants access by upserting an access_grants row:

- product_code: teacher_library
- access_level: full
- source: billing
- source_reference: the external subscription id
- plan_code: the stable CHESPANISH plan code
- status: active, revoked, or expired
- starts_at and expires_at: Unix timestamps in seconds

Webhook handling must be authenticated, idempotent, and server-only. Payment
screens and client callbacks never grant access directly.

## Independent-host migration sequence

1. Put the target schema under migrations and apply it to an empty staging
   database.
2. Export all five CHESPANISH tables with their canonical ids and timestamps.
3. Import them in dependency order: users, auth_identities, access_grants,
   lesson_progress, offer_settings.
4. Reconcile counts, unique emails, linked identities, active entitlements, and
   progress rows before opening staging.
5. Deploy the same server-side auth and authorization contract on the new host.
6. Add the new domain to Firebase Authorized domains.
7. Configure the Google and Apple return URLs for the new domain.
8. Run sign-in checks with email/password, Google, Apple, a free teacher, a
   full-access teacher, and the owner.
9. Keep the old site read-only during the final export and DNS change.
10. Switch DNS only after the final reconciliation has zero mismatches.

## Required configuration

Runtime owner overrides:

- CHESPANISH_OWNER_UID
- CHESPANISH_OWNER_EMAIL
- CHESPANISH_APPLE_AUTH_ENABLED (set to true only after Apple credentials and return URLs are active)

Firebase public build configuration:

- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- NEXT_PUBLIC_FIREBASE_APP_ID

Firebase browser values identify the project but are not secrets. Provider
private keys, billing webhook secrets, and database credentials must remain
server-only and must never be committed.

## Release checks

Every backend release must verify:

- forged browser identity headers cannot unlock lessons or administration;
- anonymous users can open only the fixed free samples;
- free accounts stay limited to the samples;
- full entitlements unlock both routes and protected client assets;
- owner access cannot be revoked through the teacher-management endpoint;
- account creation is idempotent across token refreshes;
- progress writes are scoped to the authenticated canonical user;
- applied database migrations are never edited retroactively.
