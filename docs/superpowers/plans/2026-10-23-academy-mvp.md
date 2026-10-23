# Institutional access implementation plan

> **For agentic workers:** Execute inline with `superpowers:executing-plans`; owner explicitly delegated implementation and minor choices without further questions.

**Goal:** Administrators manage a real institution, verified individual teachers and owner-provisioned seats.
**Architecture:** Add four independent tables; institution registration never grants library access. Worker verifies all academy API identities. A conditional SQLite write enforces every scope and seat limit; D1 batches make registration and acceptance atomic. Personal grants remain authoritative and institutional access is additive.
**Tech Stack:** Existing React, D1 SQLite, Firebase session boundary, Resend.
**Spec:** `docs/releases/ACADEMY_DEMO_RELEASE.md`, institutional architecture and owner handoff.

## Constraints and review focus

- No billing, pricing, auth implementation, workflow, grammar or conversation edits.
- Only verified global owner provisions seat count and expiration; roles are scoped to each institution.
- Expired/revoked memberships or licences cannot grant access; personal subscriptions survive.
- Invitation tokens are unpredictable, hashed in storage, expiring and fragment-only in email; verified recipient explicitly accepts.
- Absent schema/email configuration exposes a clear non-operational state.
- Cross-institution IDs, nonmembers, disabled accounts, concurrent last-seat allocation, retries, and stale admin invitations must fail closed.

## Tasks

- [ ] Write failing real SQLite/API regressions for creation without PRO, scoped editing/administration, owner-only allowance, allocation races/retries, verified-email acceptance, revocation, expiry, and personal access survival; run and confirm missing implementation failure.
- [ ] Add retry-safe CREATE-only `0017` tables and service operations; run regressions.
- [ ] Add bounded same-origin authenticated API and Resend invitation delivery; verify failure/idempotency without contacting real recipients.
- [ ] Integrate effective institutional access into `db/accounts.ts`; verify previous deployments remain functional.
- [ ] Build usable `/pro/academia` dashboard and `/pro/academia/aceptar`; update landing with readiness-aware links and truthful capability status.
- [ ] Document migration/recovery contract; run focused and project checks; request one independent review; fix material findings.
- [ ] Preserve coherent source through connector tree/commit/ref on the task branch; report exact contract and SHA to coordinating parent before PR/deploy.
