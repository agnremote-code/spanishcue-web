# SpanishCue updates and reports Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans inline. Owner approved all stages and instructed no further approval requests.

**Goal:** Premium catalogue-driven home updates and persistent teacher feedback managed by the owner.
**Architecture:** Existing React/Vinext Worker, catalog, verified identity headers and D1. Shared feedback UI captures context, server validates canonical lesson metadata, admin manages review separately from future Claude analysis.
**Tech Stack:** React 19, TypeScript, Cloudflare D1, SQLite, native dialog, node:test/esbuild.
**Spec:** docs/superpowers/specs/2026-10-02-updates-reports-design.md (full request alongside).

## Global Constraints
- Hero unchanged; official existing mascot and real preview imagery only.
- No merge, production deploy or live database mutation. Commit/push fresh codex branch.
- Responsive 1440/1280/1024/tablet/430/390; keyboard and reduced motion.
- Reuse current auth, DB and styling. No automatic Claude agent.

## Review Focus
- Retry after network ambiguity must not duplicate a report.
- Concurrent submissions cannot exceed persistent rate cap.
- Modal lessons must preserve their parent focus/keyboard behavior.
- A teacher cannot spoof identity or access private reports.
- Unknown section IDs remain honest context rather than false stable references.

### Task 1: Updates data and banner
Files: app/updates/{data.ts,FeaturedUpdates.tsx,updates.css}; app/{Library.tsx,page.tsx,lesson-catalog.ts}; tests/featured-updates.test.mjs.
Interface: Lesson.update optional {kind:'new'|'featured',publishedAt:string,expiresAt?:string,priority?:number}; selectFeaturedUpdates(lessons,announcements,now) produces bounded items.
- [ ] Write tests for metadata selection, expiry, canonical hrefs, empty data and manual carousel integration.
- [ ] Run node --test tests/featured-updates.test.mjs (expect RED).
- [ ] Build data adapter and editorial carousel, replace old hardcoded carousel, preserve hero.
- [ ] Run the task tests (expect GREEN); commit coherent checkpoint.

### Task 2: Persistent report APIs
Files: app/lesson-reports/{contracts.ts,server.ts}; db/lesson-reports.ts; db/schema.ts; drizzle/0010_lesson_reports.sql and metadata; app/api/lesson-reports/route.ts; app/api/admin/lesson-reports/{route.ts,[id]/route.ts}; worker/index.ts; tests/lesson-reports-http-d1.test.mjs.
Interface: POST returns {id,createdAt}; admin GET returns {reports,nextOffset}; PATCH accepts {status,resolution?,changeReference?}.
- [ ] Write real SQLite HTTP-handler tests for persistence, canonical metadata, invalid payloads, auth, CSRF, permissions, duplicate retries, rate limits, paging and resolution.
- [ ] Run node --test tests/lesson-reports-http-d1.test.mjs (expect RED).
- [ ] Implement additive D1 migration, typed repository and handlers; update Worker auth paths and write-freeze use.
- [ ] Run HTTP task tests (expect GREEN); document local-only migration validation and rollout; commit.

### Task 3: Teacher and admin interfaces
Files: app/lesson-reports/{LessonReport.tsx,ReportAdmin.tsx,reports.css,context.ts}; app/{layout.tsx,Library.tsx}; app/admin/{page.tsx,reportes/page.tsx}; app/grammar-steps/GrammarStep.tsx; tests/lesson-reports-ui.test.mjs.
Interface: LessonReport consumes trusted-display lesson {id,title,level,levels,path} and signedIn; server remains authority. Context stores IDs and short labels only.
- [ ] Write UI/context tests for launcher placement, form errors, context, accessibility, owner page guard and dialog semantics.
- [ ] Run node --test tests/lesson-reports-ui.test.mjs (expect RED).
- [ ] Build responsive dialog with persistent draft on errors, loading/success and retry key; mount routes and inline viewer; build owner report list with filters/paging/resolution.
- [ ] Run tests (expect GREEN), typecheck/lint/build and existing lesson tests.
- [ ] Browser verify all target widths, teacher happy/error paths, context, admin changes and keyboard; save screenshots outside repo source.
- [ ] Commit, whole-branch review, fix important findings with RED→GREEN, push own branch. No merge/deploy.
