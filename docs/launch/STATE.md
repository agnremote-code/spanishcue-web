# SPANISHCUE · Current Repository State

_Last updated: 2026-09-20. This document describes the current GitHub repository state, not the original launch-audit baseline._

## Source of truth

- Canonical repository: `agnremote-code/spanishcue-web`.
- Canonical integration branch: `main`.
- Product/domain identity in current code: **SPANISHCUE** / `https://spanishcue.com`.
- Hosting target remains the existing OpenAI Sites / Cloudflare Workers project.
- Historical task documents under `docs/launch/` are evidence of earlier work. They are not authoritative when they conflict with current `main`.

## Implemented in current main

### Authentication and access
- Firebase-backed authentication and server-side session verification.
- Email verification is required before server session provisioning.
- Google sign-in and email/password flows are hardened against stale or rejected client sessions.
- Access is backed by D1 account/identity/access-grant data rather than a browser-only flag.

### Database and account data
- D1 schema includes users, auth identities, access grants, billing/subscription records, founder-offer state, student data, and class-history data.
- Migration history has been reconciled through the integrated release line.
- `/cuenta` includes account status, **Mis alumnos**, class history, subscription management, favorites, and settings.

### Billing
- PayPal subscription/server integration exists.
- Sandbox and Live environments are separated in code.
- PayPal plan, webhook, subscription, and payment validation exist.
- Live checkout must remain disabled unless the external Live configuration and release gate are explicitly verified.

### Public/commercial readiness
- Legal/privacy/refund surfaces exist in the application.
- Canonical URLs, `robots.txt`, `sitemap.xml`, localized SEO routes, and public marketing routes exist.
- GA4 support exists and is consent-gated.
- Ads activation is not implied by the presence of marketing/measurement code.

### Repository automation
- Same-repository, non-draft PRs to `main` run regression tests, lint, artifact validation, and whitespace checks.
- The merge path revalidates the PR against the latest `main` before merge.
- Multi-agent merges use an explicit repository merge lock so concurrent PRs are serialized without silently dropping older pending work.
- Merged commits receive a post-merge health check.
- A failed post-merge health check attempts a validated rollback while guarding against stale-main races.
- Direct/manual `main` pushes are covered by a separate health/rollback workflow.
- `npm run smoke:production` exists for public production smoke checks.

## External state GitHub cannot prove

Do **not** infer any of the following only from repository code:

- which commit is currently deployed to the OpenAI Sites production project;
- whether every D1 migration has already been applied to production;
- which hosting secrets are currently bound;
- the current PayPal dashboard resources/credentials and whether Live is authorized;
- Firebase sender-domain/DNS/email-deliverability settings;
- current GA4 / Google Ads account configuration;
- DNS state outside the repository.

These must be verified through their owning service or deployment path before claiming production readiness.

## Current operating priority

1. Keep independent agent work isolated by branch and PR.
2. Let repository automation verify and merge ordinary code/content changes.
3. Never reuse a branch after its PR is merged or closed.
4. Keep production D1 migrations, payment-provider Live changes, DNS changes, and hosting release actions behind explicit release gates.
5. Treat production smoke and deployed-version verification as separate from GitHub merge success.

## Superseded baseline

The original audit correctly described the project at the time it was written, but statements such as “no payment system,” “no user/subscription tables,” “static account dashboard,” and “missing SEO/legal/analytics” are historical and must not be used as current blockers.
