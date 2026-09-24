# SPANISHCUE backend migration runbook

The product was originally built as CHESPANISH and renamed SPANISHCUE. Some
runtime identifiers intentionally keep the old prefix and must not be renamed
casually, because they are live configuration names or security headers:
`CHESPANISH_OWNER_UID`, `CHESPANISH_OWNER_EMAIL`,
`CHESPANISH_APPLE_AUTH_ENABLED` and the server-created `x-chespanish-*`
identity headers.

This document is the stable contract for moving SPANISHCUE off OpenAI Sites
hosting to independently operated infrastructure without rebuilding teacher
accounts or access rules. The production domain `https://spanishcue.com` is
already live on Sites; a hosting move keeps that domain. See
`docs/CLAUDE_RELEASE_TRANSITION.md` for the release/hosting transition analysis.

## Current request flow

1. Firebase authenticates Google or email/password in the browser. Apple is
   implemented but only shown when `CHESPANISH_APPLE_AUTH_ENABLED=true`.
2. The session endpoint verifies the Firebase ID token server-side.
3. The verified identity is linked to an internal SPANISHCUE user.
4. The Worker resolves that user's role and library entitlement from D1.
5. Only server-created identity headers can unlock protected routes and assets.

The Firebase UID is an external identity, not the account primary key. The
portable key is users.id.

## Portable data contract

Identity and access core:

| Table | Owns | Migration rule |
| --- | --- | --- |
| users | Canonical teacher profile, role, status, timestamps | Preserve every id exactly |
| auth_identities | Link from an auth provider and subject to a user | Add new providers; never replace users.id with a provider UID |
| access_grants | Free/full product entitlement and its source | Preserve active, revoked, and expiring grants |
| lesson_progress | Per-user lesson state and timestamps | Import by canonical user id and lesson id |
| offer_settings | Launch price and promotion settings | Import the row with id 1 |

Since this runbook was first written, `db/schema.ts` has grown to 17 tables.
A hosting move must also carry, with ids and timestamps unchanged:

- billing: `billing_subscriptions`, `billing_payments`,
  `payment_webhook_events`, `billing_checkout_locks`, `billing_outbox_events`,
  `billing_purchase_claims`;
- founder offer: `founder_offer_state`, `founder_assignments` (its
  `founder_assignments_increment_claimed` trigger must exist on the target
  before import), `founder_leads`;
- product features: `students`, `class_records`,
  `verification_email_deliveries`.

Billing rows carry provider identities (PayPal/Paddle subscription and payment
IDs, webhook event IDs) with uniqueness constraints that make webhook
processing idempotent. Losing them would allow duplicate processing or founder
reallocation, so they are part of the portable contract, not a cache.

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

Billing is implemented (PayPal and Paddle; see `docs/billing-contract.md`).
On a validated settled payment, `db/billing.ts` (PayPal) and
`db/paddle-billing.ts` (Paddle) upsert an access_grants row:

- product_code: `spanishcue-pro` (`PRO_PRODUCT_CODE` in `app/billing-config.ts`)
- access_level: full
- source: billing
- source_reference: the provider subscription id
- plan_code: the founder offer code (default `founder-1000-usd15-monthly`)
- status: active while paid; deactivated on refund/reversal/expiry
- starts_at and expires_at: Unix timestamps in seconds; expires_at is the
  persisted paid-through time

Owner and manual grants use product_code `teacher_library`
(`TEACHER_LIBRARY_PRODUCT` in `app/account-types.ts`).

**Open source discrepancy (recorded 2026-09-25, not resolved by this
document):** `readAccessBySubject` in `db/accounts.ts`, which feeds
`resolveFirebaseAccount` and therefore the Worker's access headers and
private-asset authorization, only counts grants with product_code
`teacher_library`. No code path, trigger or view in `main` maps a
`spanishcue-pro` billing grant to full access, and no test asserts that a
billing grant resolves to `accessLevel: "full"`. Whether production paid
accounts are affected (for example, if they also hold manual grants) needs to
be checked against production data. Fixing it is a separate, reviewed code
change with its own tests.

Webhook handling must be authenticated, idempotent, and server-only. Payment
screens and client callbacks never grant access directly.

## Independent-host migration sequence

1. Put the target schema under migrations and apply it to an empty staging
   database.
2. Export every table in the portable data contract above with its canonical
   ids and timestamps, plus the production migration ledger state (inspect
   how Sites records applied migrations; do not assume Wrangler's default
   `d1_migrations` table).
3. Import them in dependency order, starting with users, auth_identities,
   access_grants, lesson_progress and offer_settings, then the billing,
   founder and feature tables in foreign-key order.
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

Runtime owner overrides (optional; `app/firebase-session.ts` has fallbacks):

- CHESPANISH_OWNER_UID
- CHESPANISH_OWNER_EMAIL
- CHESPANISH_APPLE_AUTH_ENABLED (set to true only after Apple credentials and return URLs are active)

Server-only runtime secrets for auth/verification:

- FIREBASE_ADMIN_SERVICE_ACCOUNT_B64 (Base64 service-account JSON)
- RESEND_API_KEY (verification email delivery)

Billing, founder-offer, legal and analytics runtime names are listed in
`docs/billing-contract.md` and `.env.example`.

Firebase browser configuration is currently compiled in from
`app/firebase-config.ts`; the current build does not read environment
variables for it. `.env.example` reserves these names for a future host that
injects `NEXT_PUBLIC_*` values at build time:

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
