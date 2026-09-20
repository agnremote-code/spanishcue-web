# SpanishCue · Audit State & Launch Baseline

## Reference Information
- **Reference Commit**: `08ef3a2` (`chore: add SpanishCue AI safety rules`)
- **Git Branch**: `antigravity/launch-audit`
- **Environment & Hosting**: Cloudflare Workers via OpenAI Sites (`.openai/hosting.json`, project ID `appgprj_6a83ba10b0c481919060fc089d581233`, D1 binding `DB`).
- **Detected Stack**:
  - **Framework**: `vinext` v0.0.50 (Next.js 16 App Router on Cloudflare Workers / Vite backend)
  - **Database / ORM**: Cloudflare D1 with Drizzle ORM v0.45.2 (`db/schema.ts`, `drizzle/0000_jazzy_fantastic_four.sql`)
  - **Frontend / Styling**: React v19.2.6, Tailwind CSS v4.2.1, custom CSS (`teachers.css`, `special.css`)
  - **Authentication**: ChatGPT Sign-In / Sites Auth (`app/chatgpt-auth.ts`, reading `oai-authenticated-user-*` headers)
  - **Testing & Build**: Node test runner + esbuild (`tests/teacher-access.test.mjs`, `npm test`)

---

## Technical Audit Findings & Priority Classification

### P0 (Critical Launch & Funnel Blockers)
1. **No Payment System (PayPal / Subscription Checkout)**:
   - *Finding*: 0% implemented. No PayPal client SDK, no payment API endpoints, no webhook processing, no transaction logs in D1.
   - *Impact*: Visitors cannot purchase access or unlock PRO features.
2. **Hardcoded Owner Authorization**:
   - *Finding*: `app/access-policy.ts` hardcodes `ownerFromHeaders` to `agnremote@gmail.com`.
   - *Impact*: Registered teachers/students who log in are treated as free users and redirected to `/acceso` when attempting to access PRO content.
3. **Missing Database Tables for Users, Subscriptions & Sessions**:
   - *Finding*: Cloudflare D1 schema (`db/schema.ts`) contains only `offer_settings`. No tables exist for `users`, `subscriptions`, `transactions`, `students`, or `lessons_taught`.
   - *Impact*: No user session state or subscription entitlements can be persisted across refreshes or sessions.
4. **CTA & Funnel Dead End**:
   - *Finding*: "Desbloquear" and "Ver lanzamiento" buttons open a modal without a checkout link, directing users back to free samples.
   - *Impact*: Funnel converts 0% of interested users.
5. **Missing Mandatory Legal & Compliance Pages**:
   - *Finding*: No Terms of Service, Privacy Policy, or Refund Policy pages exist.
   - *Impact*: Required for payment gateway compliance and commercial operation.

### P1 (Core Features, SEO & Usability)
1. **Static / Empty Account & Student Dashboard (`/cuenta`)**:
   - *Finding*: `/cuenta` renders static text ("No tenés cobros ni suscripciones activas."). Missing student roster ("Mis alumnos") and taught lesson tracker.
2. **Missing Analytics & Event Tracking**:
   - *Finding*: No analytics tools (Google Analytics, Plausible, PostHog, or Meta Pixel) exist to track conversions or funnel drop-offs.
3. **Technical SEO Baseline**:
   - *Finding*: Basic Next.js metadata exists in `app/layout.tsx`, but missing `sitemap.xml`, `robots.txt`, canonical URLs, and structured data (JSON-LD).
4. **Branding & Navigation Polish**:
   - *Finding*: Branding uses mixed terms ("CHESPANISH Teacher Studio" vs "SpanishCue"). Mobile navigation and return paths from 3D lessons require polish.

### P2 (Content & Visual Polish)
1. **Additional Lessons & Interactive Boards ("Tableros")**:
   - *Finding*: Extra lesson content, audio assets, and board tools to be expanded after P0/P1 stability.
2. **Decorative Styling & Animations**:
   - *Finding*: Minor mascot transitions and theme accents.

---

## Upcoming Task Dependencies

```
[TASK-01: Audit & State Baseline] (Current)
       │
       ▼
[TASK-02: Database Schema Expansion] (D1 tables: users, subscriptions, students, taught_lessons)
       │
       ▼
[TASK-03: Auth Engine & PRO Access Logic] (Replace hardcoded email with DB-backed entitlement)
       │
       ▼
[TASK-04: PayPal Integration & Checkout Funnel] (PayPal Sandbox, checkout APIs, webhook)
       │
       ▼
[TASK-05: Account & Student Management ("Mi cuenta / Mis alumnos")] (Dashboard, roster, lesson log)
       │
       ▼
[TASK-06: Legal, SEO, Analytics & Public Launch Readiness] (Terms, Privacy, Sitemap, Analytics)
```

---

## Safe Ownership Boundaries for Agents
- **Shared Repository**: `agnremote-code/spanishcue-web`
- **Branch Rule**: Work ONLY on assigned feature branches (e.g. `antigravity/launch-audit`). Never commit or push directly to `main`.
- **File Safety**:
  - Do not edit source code during audit tasks (`app/*`, `db/*`).
  - Modify only files assigned to your current active task.
  - Never alter secrets, environment variables, or remote deployment configurations.
