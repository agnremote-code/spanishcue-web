# SEO Phase 2: grammar and teaching methodology

Owner brief: uploaded continuation request, 2026-10-07. Execution, PR, CI merge and production release are already authorized. Base: f2ab15a4feb67c569e8fcc351611777c98307061. No open PR or recoverable Phase 2 branch at inspection.

## Outcome
Teachers of adults can find a usable grammar task, select the actual classroom level, and open the matching SpanishCue lesson. Preserve Phase 1 URLs, conversation content, access controls, billing and release infrastructure.

## Design
Use the existing server-rendered growth design system. Rebuild the existing /spanish-grammar-lessons cornerstone. Add distinct A1, A2, B1, B2 and C1 teaching pages with original activities, outcomes, corrections and real lessons. C2 remains an honest hub section: its single current C2 classroom is historical receptive work, not a complete C2 grammar curriculum. Classroom level is the catalog's base level; older multi-level reference banks must not inflate the offering.

Four topic opportunities: expand the existing ser/estar, preterite/imperfect and subjunctive guide URLs with activity kits; add /spanish-grammar-lessons/por-vs-para-activities. Preserve existing guide methodology content below the kit. No duplicate topic routes or conversation expansion. Levels support planning; topic kits support one grammar teaching problem.

/about explains audience, lesson sequence, CEFR/PCIC reference (not accreditation), teacher judgment and real online practice. Source https://preply.com/en/tutor/4226888 checked live on 2026-10-07: 4,194 lessons; 5 rating across 52 public reviews; Professional Tutor and Super Tutor visible. Use durable 4,000+ claim; dated rating/count; three short real excerpts totaling at most 25 source words. Explicitly distinguish feedback on the teaching practice from product reviews. No owner name, student photos, invented experience or Review/AggregateRating schema.

## Performance and safety
No new client components or dependencies. Catalog metadata only; never import classroom content into SEO routes. Use existing optimized images with explicit dimensions and native details. Existing layout reads request headers/locale and auth synchronization remains client-side: retain private no-store HTML rather than widening cache behavior in this task. Check built JS for game imports.

## Delivery
Meaningful data/indexation guardrails; full npm test, lint, tsc, build/artifact validation; rendered routes, canonical/query/noindex/sitemap checks; desktop/mobile visual review of every changed resource plus a free grammar lesson and teacher hub. Update docs/seo-strategy.md with research, intent ownership, proof policy and next moves. Commit/push checkpoints, non-draft PR, CI + Auto Merge only, exact-main production workflow and smoke.
