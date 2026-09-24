> **Historical record (last edited 2026-09-20).** This file describes project state at that time and is kept unmodified below for traceability. It is not current status: for current source read GitHub `main`, for production read `state.json` on `automation/sites-release-state`, and for context read `docs/SPANISHCUE_HANDOFF.md`.

# TASK-05B · SEO, measurement, consent and performance

## Objective

Make public SPANISHCUE routes crawlable and locally indexed in Spanish and English, keep account, checkout and paid material out of search and inaccessible without authorization, and measure only consented, real funnel outcomes.

## Non-negotiables

- No redesign and no PayPal checkout-flow changes.
- One optional direct GA4 installation only. It remains disabled until `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is configured and analytics consent is granted.
- The only commercial conversion is `subscription_first_paid`, emitted only after the server has persisted and atomically claimed the first completed payment for the account. Renewals, refunds, callbacks and client-only success pages are not purchases.
- No analytical payload includes email, name, lesson notes, tokens, `returnTo`, `subscription_id`, or URL query strings.
- Consent defaults to denied for all Google v2 storage/data signals; non-essential scripts are not loaded without consent.
- Legal publication and live payment remain blocked by the existing real-operator configuration gate.

## Required hosted configuration

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID`: optional GA4 web measurement ID (`G-…`). Leave empty to disable GA4.
- `ANALYTICS_CONVERSIONS_ENABLED=true`: server-only live-production gate for the sole paid conversion. Leave false in sandbox, tests and internal validation.
- `PAYPAL_WEBHOOK_ID`, PayPal live credentials and every `LEGAL_*` value: already required by the existing live-billing gate; verify them outside source control before any live charge.

## Evidence to collect

- Automated SEO, consent, analytics privacy/deduplication, private-route and sitemap tests.
- Local build, lint and worker tests.
- A laboratory performance comparison with the exact command, local environment and limitations recorded after implementation.

## Implemented controls

- Public Spanish and English variants use their own canonical URL (`?lang=en` is the existing English URL contract), reciprocal `hreflang` and sitemap alternates. No country-language clones were created.
- Host, scheme, legacy lesson slug and trailing-slash normalization are coalesced into one 308. Preview hosts remain local.
- Account, sign-in, checkout/paywall, PRO and admin surfaces are `noindex,nofollow`, also disallowed in `robots.txt`; authorization remains enforced by the Worker. API and premium media/client artifacts remain private/no-store.
- Direct GA4 is optional and only loads with `NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-…` plus analytics consent. The default Consent Mode v2 state is denied and is updated on accept, reject, save or withdrawal. There is no GTM, ad tag or server-side Measurement Protocol.
- Secondary funnel events remain consent-gated. The primary commercial event is `subscription_first_paid`; it requires an authenticated request, live PayPal, the explicit server gate, and a unique PayPal completed-sale transaction atomically claimed in D1. Refunds/reversals update payment state, PayPal retries are idempotent, renewals do not become acquisition conversions, and client success callbacks alone do not convert.
- Analytics payloads use pathname only and allowlisted properties. They drop `returnTo`, subscription IDs, query strings, names, emails, notes and tokens. UTM storage still requires separate marketing consent.

## Laboratory evidence (2026-09-19, local Node 24 / Wrangler local)

- `npm run build`: completed locally; protected build excluded 238 private paths, including 47 premium media paths.
- Targeted static suite: 17/17 passed for consent accepted/rejected code paths, analytics privacy, language/canonical/sitemap controls and payment conversion safeguards. The repository worker suite was started through `npm test`; the build portion passed, but this environment terminated the long-lived local Worker runner before its final summary.
- `npm run lint`: zero errors; 115 existing warnings, chiefly the repository-wide Next `<img>` advisory. The one blocking React effect error discovered during this task was removed without changing its route UI.
- Before/after consent laboratory check: before opt-in the optional GA4 request count is zero; after analytics opt-in it is one `gtag.js` request only when a valid `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is configured. The tag is dynamically injected, so it adds no public-home script, image or font bytes without consent.

These are laboratory build/asset observations, not user-field metrics, Core Web Vitals, accessibility certification or ranking promises. The site still has existing image warnings that merit a dedicated image-optimization pass; this task did not redesign lesson pages or load the whole catalog into additional home resources.

## Required configuration and release checklist

- Optional: set `NEXT_PUBLIC_GA4_MEASUREMENT_ID` to the actual GA4 `G-…` ID. Leave it empty to keep analytics disabled. Configure `subscription_first_paid` as the sole primary commercial conversion; demo use, true registration and checkout start are secondary.
- Keep `ANALYTICS_CONVERSIONS_ENABLED=false` until PayPal is live and GA4 internal-traffic filters are verified. This source change does not activate Google Ads.
- Live charging stays blocked until real PayPal live credentials/webhook configuration and every `LEGAL_*` value are set. A qualified professional must review vendor identity, address, tax/registration, governing law/courts, refunds, withdrawal/cancellation and privacy disclosures for the actual jurisdiction before enabling checkout.

## Known external blockers

- `origin` fetch requires credentials in this environment, so a fresh remote fetch/push/PR may need the connected Git credentials restored.
- No vendor, address, governing law, court, tax registration, refund policy or withdrawal policy is invented here. Those values remain a mandatory legal and operational review before live billing.
