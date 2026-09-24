# Conversation families implementation plan

> Execute inline with superpowers:executing-plans; one independent branch review before PR.

**Goal:** One conversation experience per catalog card, with authored CEFR variants and instant level switching.
**Architecture:** Preserve the original lesson ledger and all routes. Add a public family manifest/projection, separate protected content adapters, and a shared URL-backed selector. Consolidate actual duplicate concepts; retain distinct worlds and entitlements.
**Tech Stack:** React 19, TypeScript, Vinext/Vite, Cloudflare Worker, Node test runner.
**Spec:** ../specs/2026-09-24-conversation-families.md

## Global constraints
- Conversation only. Preserve original content, artwork, routes, free samples, billing, identity and infrastructure.
- No production deploy. Current canonical base: 6807b17ddae2d29deedf5e179f03fdf50635f259.
- No runtime AI, no new paid dependencies, no fabricated levels.

## Review focus
- Public manifest must not import protected prompt banks or make private chunks public.
- Level switches and browser history must not reuse answers from a different variant.
- Legacy SEO URLs and saved lesson IDs must continue resolving after consolidation.
- Free country variants must never grant access to a separate PRO country experience.
- Filtered links must retain the level through checkout and return navigation.

## Tasks
1. [x] Inventory and manifest: add family types, validation, public metadata projection and deterministic selectors; test all 48 original entries, no non-conversation changes, duplicate/default validation and filtering.
2. [x] Shared engines: consolidate Red Flag, machine, absurd rules, forbidden questions and Let's Talk; select existing country question tracks; test genuine content differences and closing conversation. Preserve each visual engine.
3. [x] Catalog and routes: project families in both catalogs, level-aware links/previews, preserve legacy resource slugs with canonical mappings, keep query out of sitemap. Test free/PRO route guards and query retention.
4. [ ] Verification and delivery: full baseline/regression suite, TypeScript, lint, protected build, responsive/browser checks, review and fixes; migration inventory and authoring guide; coherent commits and non-production PR.

## Decisions
- Existing single-level experiences retain their native renderers through explicit seed-variant references; no fabricated extra level.
- USA A1 remains separate from the free A2/B1 atlas because they are distinct visual experiences and access tiers.
- Taxi is an example in the brief and is absent from this canonical main; do not invent a replacement for parallel work.
