# Home updates and teacher feedback

## What appears below the hero
The existing hero is unchanged. `app/updates/FeaturedUpdates.tsx` replaces the old hardcoded news carousel, directly below it. `selectFeaturedUpdates` in `app/updates/data.ts` uses canonical catalog title, preview, category, level and path. The `lessonUpdates` map in the same data source controls promotion by canonical lesson ID:

```ts
224: { kind: 'new', publishedAt: '2026-10-01', priority: 10, expiresAt: '2026-11-01' }
```

Use `new` for a new lesson, `featured` for a highlight. Future collection/function announcements belong in the typed `announcements` array in the same data source. Future dates and expired items are excluded; highest priority then latest date wins, capped at six. No items hides the banner. Initial highlights: Hablar sin cortar, Noche abierta, Entrenador personal. No component edits are needed to promote another catalog entry. The historical teaching catalog remains byte-identical; the selector reads all display content and routes from it.

Manual arrows/dots and mobile swipe; no autoplay, no infinite-loop animation. Real previews and the official pointing mascot, fixed geometry, keyboard targets and reduced-motion support.

## Teacher reports
A shared `LessonReport` dialog mounts on every recognized lesson route through `LessonFeedback`, which follows client navigation, and inside the existing inline library viewer. Signed-in teachers can submit one message (5–3000 characters) with optional category. Visitors get a return-to-lesson sign-in link. Text remains on failure. Retry identity is bound to payload: identical retries dedupe, subsequent edits get a new identity.

Context captures the last visible interaction, stable section/activity/question/component IDs when available, the actual selected level and a short heading. Phonetics and conversation renderers expose the current level; shared grammar steps and generic lessons expose section/namespace IDs. Legacy blocks retain existing IDs and heading context. Unidentified content is explicitly null; the system never fabricates an exact source ID.

## Storage and authorization
`lesson_reports` is a new additive D1 table, defined in `db/schema.ts` and migration `0010_lesson_reports.sql`. It stores:
- Report/request IDs, timestamps, trusted user/account/email.
- Canonical lesson ID, slug, title, category and selected level.
- Observed context IDs, category, issue type, message, sanitized URL, route and bounded JSON context.
- Human status (`new`, `reviewing`, `accepted`, `rejected`, `resolved`).
- Future Claude `ai_status`/`ai_analysis`, resolution, resolver/date and change reference.

POST `/api/lesson-reports` validates verified Worker identity, same origin, lesson access, catalog/family level, canonical route, category and payload size. A single D1 INSERT SELECT enforces five new reports per uid per hour; a unique uid/request key safely deduplicates retries. No sensitive query values, tokens, IPs or browser fingerprint are retained. Write freeze is honored. Storage failures return a visible 503; no fake success or in-memory fallback.

## Owner review
Open `/admin/reportes`, linked from `/admin`. The page and APIs are owner-only and no-store. Filters: pending, accepted, rejected, resolved and all; paging is guarded against stale responses. Each report shows teacher, class, context, category/date/status, and editable resolution/change reference. Resolution records owner and timestamp. Teacher text is rendered as plain React text.

Claude fields are passive data only. No agent, model call, production correction or automatic deploy exists. Review status is independent from future AI analysis. A future Claude worker can consume reports, resolve lesson + level + source IDs, write analysis and link its verified change without reworking the current human-review flow.

## Release boundary
This is source-only branch delivery: no merge, PR with auto merge, production publication or live D1 mutation. D1 was validated locally. Future rollout must follow `docs/releases/LESSON_REPORTS_MIGRATION.md`; the previous Worker remains compatible with the expanded schema. Production persistence requires the authorized migration and source release.

## Verification
- `npm run test:feedback`: real HTTP handlers + SQLite persistence/permissions/validation/rate limits/idempotency; updates selection; context; family levels; retry edits; public client mount.
- `npm run test:feedback:browser`: actual protected Worker home/free sample/auth guards, UI across 1440/1280/1024/768/430/390, and deterministic component fixtures for network ambiguity/admin response races. API fixture responses are explicitly mocked; HTTP/D1 persistence tests exercise the real handlers separately.
- `npm test`: full repository suite, build, artifact validation, and Worker route regression tests.
- ESLint on changed code; `git diff --check`.
- Global `tsc --noEmit` has existing errors in unchanged billing subscription, marketing sample and Mexico geometry files. New/changed feature files introduce no TypeScript diagnostics.

Browser screenshots are generated under ignored `outputs/feedback-qa/`. For a runtime without bundled Playwright, install Playwright or provide it via CODEX_PRIMARY_RUNTIME_NODE_MODULES. Set FEEDBACK_CHROMIUM to a local Chromium executable when needed.
