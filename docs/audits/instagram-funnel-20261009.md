# Instagram immersive funnel — implementation and QA

## Campaign entry

- New landing: `/lp/instagram?lang=en` (also `lang=es`).
- Anonymous playable centre: `/demo/noche-abierta`.
- Opt-in 50/50 experiment: `/lp/instagram-test?utm_source=instagram&utm_medium=paid_social&utm_campaign=noche_abierta_test&lang=en`.
- Deterministic previews: add `variant=a` for the existing `/lp/spanish-teacher-resources`, or `variant=b` for the new landing.
- Existing landing routes and campaign destinations remain available. No global redirect, campaign edit or billing configuration change.

## Access and content

The server selects only the original ten centre venues for A1, A2, B1, B2, C1 or C2. The public endpoint rejects every non-centre district. The demo reuses the original procedural city, hero, movement/collision/camera and two-moment activity engine. Help, grammar, alternative situations and teacher notes remain available. The fallback map plays these same activities without WebGL. There is no registration, card or time limit for the demo.

Eight other districts appear as PRO discoveries; transit approaches prompt only outside an activity. Existing verified PRO users enter the full city and see no new discovery upsell. Share Pass pages and original lesson access policies are unchanged.

Geometry placements are projected into a literal data-only module; parity tests compare them with the authored originals. This prevents multi-entry bundlers from exposing paid encounter text through a shared geometry chunk. The asset protector checks the actual public dependency graph against all encounter titles from the previously mixed modules. Existing Worker authorization continues to protect paid routes, RSC content, private chunks and media.

## Checkout and measurement

The premium panel uses the existing Paddle checkout: US$2 for one day, automatically renewing at US$15.50/month, or US$15.50/month directly. It releases its native modal before Paddle opens, then restores it when checkout closes or fails. No product, price, webhook, entitlement or billing database changes.

Events: `landing_view`, `demo_start`, `first_interaction`, `demo_complete`, `premium_gate_view`, `checkout_start`, `verified_purchase`. Completion means three finished choice-and-personal-response activities, after which free play continues. A personal answer is not uploaded or automatically graded. Purchase is an alias of the existing server-confirmed, deduplicated first-paid transaction and requires validated positive revenue and currency, including anonymous purchase claims.

UTMs and experiment assignment follow navigation. Optional persistence and product analytics require analytics consent; existing marketing attribution and ad conversion consent remain separate. Consent withdrawal clears experiment persistence. No past interactions are replayed after opting in. Locale choice remains a functional cookie.

## Evidence

- `npm test`, `npm run lint`, `npm run validate:artifact` and `git diff --check` passed locally, including the built Worker HTTP tests for anonymous demo access, rejected PRO districts, preserved A/B destinations and the unchanged original landing.

- Eight focused tests cover the complete six-level allowlist, district denial, noninterrupting gates, attribution routing, consent, verified revenue, placement parity and walkable arrivals for all ten venues.
- Independent review found and resolved shared-chunk content exposure, Paddle modal interference, trapped map arrivals and missing PRO identity resolution. A repeated Rolldown multi-entry reproduction separated public geometry and paid encounters.
- Browser run [37908501841](https://github.com/agnremote-code/spanishcue-web/actions/runs/37908501841) passed desktop and 390×844, 412×915 and 320×700 layouts, real WebGL gameplay, full map, choice plus speaking activity, contextual pricing, six-level selection, context-loss fallback, bilingual landing, attribution propagation and Paddle overlay lifecycle. The fixture uses real UI and engine modules with intercepted billing; it creates no real transaction.
- Hero footage is recorded from the running WebGL canvas, not generated imagery. Shipped H.264 clip: 7.5 seconds, 720×432, 61,939 bytes, silent, inline, lazy-loaded; WebP poster: approximately 37 KB. Capture provenance: run [37907551667](https://github.com/agnremote-code/spanishcue-web/actions/runs/37907551667), before an unrelated browser-test wait-race was corrected.
- Physical Instagram in-app browsers and a real paid transaction were not exercised. Mobile Chromium viewport and pointer tests supplement, but do not claim, physical iOS/Android coverage.

The repository's full regression suite, lint, artifact protection and exact-SHA release gates are required before publication. CI + Auto Merge owns merging and dispatches verified staging, which promotes the same SHA through the production workflow and smoke checks.
