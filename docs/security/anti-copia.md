# Anti-copy and anti-scraping layer (2026-11-13)

Goal: make SpanishCue expensive to copy or scrape with AI, without touching
search engines, free classes or checkout.

## What is enforced

| Layer | Where | Effect |
| --- | --- | --- |
| robots.txt | `app/robots.ts` + `app/crawler-policy.ts` | Disallows AI training crawlers and SEO-tool crawlers; `Google-Extended` / `Applebot-Extended` opt out of AI training while Googlebot / Applebot keep indexing. |
| User-Agent refusal | `worker/anti-scrape.ts` (`refusedAgent`) | 403 for those crawlers on every path except `/robots.txt`; 403 for default scraping libraries (python-requests, curl, Scrapy, wget, HTTrack…) on content pages. |
| Page-read limiter | `SCRAPE_LIMITER` (120 HTML documents/min per IP), `PAYLOAD_LIMITER` (600 `.rsc` payloads/min per IP) | 429 with `Retry-After: 60`. Fails open. |
| PRO content | existing (`scripts/protect-client-assets.mjs`, encrypted blobs, per-account watermark) | PRO pages, chunks, audio and question banks are only served to entitled accounts. |
| Client code | build | Minified, no source maps (`tests/anti-scrape.test.mjs` guards the config). |

## What is never blocked

- Googlebot, Bingbot, Applebot, DuckDuckBot, Yandex, link previews (WhatsApp,
  Facebook, LinkedIn, X, Slack…), `OAI-AdsBot`, AdsBot-Google.
- POSTs, `/api/*`, webhooks (PayPal, Paddle, Resend), student links `/s/*`,
  static files and media, `/`, `*.xml`, `*.txt` for plain HTTP clients (release
  smokes use them).
- Loopback (local preview, Worker tests) is never rate limited.

A request that claims to be Googlebot/Bingbot from a network that is certainly
not Google's or Microsoft's (Cloudflare `cf.asn`) is still served, but it is
counted by the limiter like any visitor.

## Honest limits

Anything a visitor's browser can show can be copied by a person with a browser,
or by a scraper that imitates one slowly from many IPs. This layer stops the
cheap, automatic routes (AI crawlers, assistants "reading the site", default
scripts, fast bulk downloads). The real protection of the product is that PRO
content never leaves the server without an entitled account, plus the legal
terms and the per-account watermark.

## Changing it

- Add or remove a crawler: `app/crawler-policy.ts` (robots.txt and the Worker
  follow). Never add a search engine.
- Live AI search agents (`AI_SEARCH_AGENTS`: OAI-SearchBot, ChatGPT-User,
  PerplexityBot, Perplexity-User, Claude-SearchBot, Claude-User) are allowed
  since 2026-11-14 (owner decision) so those assistants can recommend
  SpanishCue; they are still rate limited per IP. Training crawlers stay
  blocked. To block them again, move them into `AI_CRAWLERS`.
- Limits: `ratelimits` in `vite.config.ts`.
