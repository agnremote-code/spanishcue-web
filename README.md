# SPANISHCUE Teacher Library

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`
- Linux with `flock`, `curl`, and GNU `timeout`

## Sites Lifecycle

The Sites lifecycle CLI runs the locked dependency install before returning this checkout. Edit the source under `app/`, then checkpoint when a coherent milestone is ready to inspect or share. The remote Sites builder runs `npm run build` against the pushed commit. Do not repeat install or build as a normal pre-checkpoint step.

This starter does not use `wrangler.jsonc`.

`install:ci` is intentionally a single, non-retrying `npm ci`. It refuses a concurrent install for the same project, consumes a matching image-seeded npm cache with `--prefer-offline` while retaining registry fallback for a missing cache object, otherwise downloads and verifies the complete vinext tarball recorded in `package-lock.json`, limits npm to one socket, and terminates a stalled install. `build` applies a short timeout and then validates the Sites artifact. These helpers target Linux and use GNU `timeout`; they are not native macOS scripts.

Scripts that need writable project-scoped home, npm, XDG, and temporary paths use `scripts/sites-env.sh`. The `dev` and `start` scripts honor the caller's runtime environment and keep Wrangler logs inside the checkout. The generated `.sites-runtime/` directory is disposable and ignored by Git.

## Included Shape

- edit site code under `app/`
- `app/firebase-client.ts` and `app/firebase-session.ts` provide Firebase sign-in and server-verified authorization
- `db/accounts.ts` keeps provider-neutral users, linked identities, roles, and access grants
- `db/progress.ts` stores durable lesson activity for each teacher
- `app/api/admin/teachers` lets the owner grant or revoke complete library access
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/index.ts` reads the D1 binding from the Cloudflare Worker environment
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Firebase Authentication

SPANISHCUE accepts email/password and Google accounts through Firebase. The
browser exchanges a Firebase ID token for a short-lived, secure session cookie.
The Worker verifies that token with Firebase before adding private identity
headers or serving owner-only routes and client modules. Browser-supplied
identity headers are always removed.

Apple sign-in is implemented with Firebase's Apple provider. It becomes
operational after the Apple provider credentials and the production return
domain are enabled in the Firebase console, then
`CHESPANISH_APPLE_AUTH_ENABLED` is set to `true`.

Firebase UIDs are not used as SPANISHCUE's primary account keys. The first
verified sign-in creates or updates a canonical `users` row and links the
Firebase identity in `auth_identities`. This keeps accounts, access grants, and
lesson progress portable if authentication or hosting is replaced later.

See [Backend migration runbook](docs/BACKEND_MIGRATION.md) for the stable data
contract and the future-domain migration sequence.

## Diagnostic Commands

- `npm run install:ci`: perform the one bounded lockfile install
- `npm run dev`: start the Vite/Vinext development server
- `npm run build`: build and validate the deployable Sites artifact
- `npm run start`: start the built Vinext application
- `npm test`: build, validate, and verify the rendered development-preview metadata
- `npm run validate:artifact`: recheck an existing artifact's manifest and ESM `default.fetch` export
- `npm run db:generate`: generate Drizzle migrations after schema changes

Use build and validation commands for targeted diagnosis after a remote failure, not as part of the normal checkpoint path.

The timeout defaults can be overridden for a controlled canary with `SITES_INSTALL_TIMEOUT`, `SITES_INSTALL_KILL_AFTER`, `SITES_BUILD_TIMEOUT`, and `SITES_BUILD_KILL_AFTER`. A timeout fails the command; the helpers never retry an unchanged install or build.

## Social previews

The default Open Graph and X card uses the 1200 × 630 promotional JPEG at
`public/social/spanishcue-og-v2.jpg`. Its public URL is
`https://spanishcue.com/social/spanishcue-og-v2.jpg`. When the creative changes,
publish a new versioned filename and update `app/social-preview.ts` so social
platforms request the new URL rather than showing a cached card. Pages with
their own social images keep those overrides.

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
