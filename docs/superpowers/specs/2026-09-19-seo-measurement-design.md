# SEO, measurement, consent and performance design

## Intent and success criteria

SPANISHCUE needs public teaching resources that search engines can crawl and understand in both supported interface languages, while private account, checkout and premium lesson surfaces stay both access-controlled and excluded from indexing. Measurement must be useful without mistaking a login, PayPal return URL, renewal or duplicate webhook for a new customer. No design refresh or payment-flow rewrite is in scope.

## Architecture

The existing SSR metadata and Worker stay the authority for public URLs, redirects and authorization. Metadata will use the requested language URL as its own canonical and reciprocal Spanish/English alternates, while sitemap entries contain only public canonical resources with corresponding locale alternates. The Worker will normalize SpanishCue host/scheme in one redirect and will retain conservative public caching only for public static media/assets.

The browser uses a single, optional direct GA4 tag. A consent bootstrap emits denied Consent Mode v2 defaults before any possible tag configuration. The tag script is injected only after analytics consent and a valid public measurement ID; revocation updates consent and removes the script element. The analytics layer strips query strings and accepts only allowlisted event properties.

PayPal webhooks are already idempotent by provider event ID. A new payment ledger records a PayPal sale/capture exactly once by transaction ID and identifies the first paid transaction of a subscription. An authenticated read endpoint exposes only that already-confirmed transaction ID to the matching browser session. The client sends the one commercial GA4 event only when analytics consent exists; it cannot create a server conversion or turn a callback into a purchase.

## Boundaries

- Direct GA4 only, never GTM. A blank or invalid `NEXT_PUBLIC_GA4_MEASUREMENT_ID` disables the integration.
- There is no Measurement Protocol/server analytics sending. This prevents using server events to bypass consent.
- `subscription_first_paid` is the primary commercial conversion. Demo use, new registration and checkout start are secondary funnel events.
- No structured data is added because the site has no visible factual entity data to safely claim. Existing pages must not invent reviews, ratings, credentials or certificates.
- Public lessons remain public only when the current access policy marks them free. Premium lessons and media retain the Worker authorization gate even if a URL is guessed.
- Legal copy reuses the existing conditional legal documents. The site must not enable real charges until the documented operator and policy values have been supplied and reviewed professionally.

## Error handling and privacy

Malformed or unrecognized PayPal payment resources are ignored, leaving subscription status handling intact. A duplicate provider transaction is a no-op. The conversion endpoint returns `404` for another user or a payment not confirmed by server; it returns no email, amount, payer ID, plan details or raw webhook material. Client tracking silently no-ops if consent or a valid GA4 ID is absent.

## Testing

Tests will cover canonical/localized alternate metadata, sitemap/robots and private noindex rules; single-hop canonical redirects; consent default/update/revocation and disabled GA4; sanitized event payloads; initial-payment idempotency, renewal exclusion and user-scoped conversion lookup; and existing Worker authorization. The standard build/test/lint suite is required. Performance results will be described as local laboratory observations, never as user or ranking outcomes.
