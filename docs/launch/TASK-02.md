# Task 02 · Authentication & Account Session Baseline

## Overview & Status
- **Status**: Implemented & Verified
- **Branch**: `antigravity/auth-account`
- **Objective**: Resolve header-based auth & session state disconnect across refreshes, eliminate hardcoded access logic assumptions, and establish a professional 6-section Account Dashboard (`/cuenta`).

---

## 1. Root Cause Analysis
During audit and diagnosis, the apparent "logged-out on refresh" bug was traced to three distinct issues in the application architecture:

1. **Auth Header & UI State Disconnect**:
   - OpenAI Sites platform injects user identity headers (`oai-authenticated-user-email`, `oai-authenticated-user-id`, etc.).
   - Main page routes (`app/page.tsx`, `app/Library.tsx`) checked only `ownerFromHeaders` (`email === 'agnremote@gmail.com'`).
   - Logged-in non-owner teachers evaluated to `owner: false`, causing `Library.tsx` to render the header CTA **"Ingresar con ChatGPT ↗"** instead of an authenticated user menu.
   - Upon refreshing or returning to `/`, users saw "Ingresar con ChatGPT ↗", giving the appearance that their session was lost after sign-in.

2. **Absence of Unified User Session Abstraction**:
   - Access control checks hardcoded `agnremote@gmail.com` directly in route gates without distinguishing between `visitor`, `authenticated_free`, `pro`, and `owner` user states.

3. **Inconsistent Return URL Handling**:
   - Redirect logic across restricted routes lacked proper `return_to` parameter propagation, resulting in loss of target destinations upon redirecting to `/acceso` or `/signin-with-chatgpt`.

---

## 2. Implementation Details

1. **Structured User & Entitlement Model (`app/access-policy.ts`)**:
   - Introduced `UserSession` and `UserRole` (`'visitor' | 'authenticated_free' | 'pro' | 'owner'`).
   - Added `getUserSessionFromHeaders(h: Headers)` to construct a authoritative server-side session object.
   - Added `isProUser(h: Headers)` and `checkSubscriptionEntitlement()` hooks to cleanly separate owner permissions from upcoming PayPal subscription entitlements.
   - Maintained self-contained `ownerFromHeaders(h)` for client code bundling compatibility in `scripts/protect-client-assets.mjs`.

2. **Persistent Navigation & Page Hydration (`app/page.tsx`, `app/Library.tsx`)**:
   - Updated `app/page.tsx` to pass `session` to `Library.tsx`.
   - Updated `Library.tsx` top navigation bar to render user display name / "Mi cuenta" whenever `session.isAuthenticated` is true, keeping users visibly logged in across refreshes and page transitions.

3. **Professional 6-Tab Account Dashboard (`app/cuenta/page.tsx`)**:
   - Built a sober, professional dashboard supporting tab navigation via URL query parameters (`/cuenta?tab=...`):
     - **Inicio**: Account summary, access role badge, quick link to lesson library.
     - **Mis alumnos**: Honest "Módulo en preparación (Próximamente)" state explaining upcoming student roster management without fake UI data.
     - **Historial de clases**: Honest "Sin historial de clases" state, explicitly clarifying that exploring a lesson for prep does not mark it as "taught".
     - **Favoritos**: Honest empty state for bookmarked lessons.
     - **Suscripcion**: Real account tier display, promotional price breakdown from `db/offer.ts`, and architecture prepared for PayPal integration (Task 04).
     - **Ajustes**: User identity breakdown, OAuth security explanation (no password required for ChatGPT OAuth users), and sign-out action.

4. **Access Gate & ReturnTo URL Safety (`app/acceso/page.tsx`, `app/clase/[id]/page.tsx`, `app/chatgpt-auth.ts`)**:
   - Added `safeRelativeReturnPath()` export in `app/chatgpt-auth.ts` to prevent open redirects.
   - Updated `/clase/[id]` to redirect denied requests to `/acceso?return_to=/clase/:id`.
   - Tailored `/acceso` messaging to show clear feedback for authenticated free users vs unauthenticated visitors.

---

## 3. Files Changed
- [`app/access-policy.ts`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/app/access-policy.ts): Defined `UserRole`, `UserSession`, `getUserSessionFromHeaders()`, `isProUser()`, `checkSubscriptionEntitlement()`.
- [`app/chatgpt-auth.ts`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/app/chatgpt-auth.ts): Exported `safeRelativeReturnPath()` for open redirect prevention.
- [`app/page.tsx`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/app/page.tsx): Extracted session from headers and passed it to `Library`.
- [`app/Library.tsx`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/app/Library.tsx): Updated header navigation to inspect `session.isAuthenticated` and display user account state.
- [`app/cuenta/page.tsx`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/app/cuenta/page.tsx): Implemented full 6-section Account Dashboard (Inicio, Mis alumnos, Historial, Favoritos, Suscripción, Ajustes).
- [`app/acceso/page.tsx`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/app/acceso/page.tsx): Added validated `return_to` handling and authenticated free user messaging.
- [`app/clase/[id]/page.tsx`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/app/clase/[id]/page.tsx): Updated access check to `isProUser` and preserved target route on redirect.
- [`app/teachers.css`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/app/teachers.css): Added CSS rules for account headers, badges, tabs, and info grids.
- [`tests/teacher-access.test.mjs`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/tests/teacher-access.test.mjs): Added unit and integration test coverage for session extraction, returnTo safety, dashboard tabs, and redirect preservation.
- [`docs/launch/TASK-02.md`](file:///Users/alejandronunez/Projects/spanishcue-antigravity/docs/launch/TASK-02.md): Created Task 02 documentation.

---

## 4. Tests & Verification Results

1. **Automated Unit & Integration Test Suite (`npm test`)**:
   - `13/13` test cases passed (100% pass rate).
   - Validated header parsing into `visitor`, `authenticated_free`, and `owner` roles.
   - Validated `safeRelativeReturnPath` prevention of open redirects (`//evil.com` -> `/`).
   - Validated `/cuenta?tab=...` tab rendering for authenticated users.
   - Validated asset protection script execution and ESM worker artifact validation.

2. **Build Verification (`npm run build`)**:
   - `vinext build` completed successfully.
   - Protected client modules correctly extracted and validated.

---

## 5. Anything Not Verifiable Locally & Remaining Blockers
- **Live Dispatch Identity Header Injection**: In local test environments, headers are simulated via mock fixtures (`teacher` and `owner`). Live header injection relies on OpenAI Sites platform dispatch.
- **PayPal Subscription Checkout (Task 04 Blocked on Credentials)**: Real payment processing requires Alejandro to configure PayPal Sandbox/Live credentials (`NEXT_PUBLIC_PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_WEBHOOK_ID`).
- **Database Schema Expansion (Task 03)**: D1 table creation for `users`, `subscriptions`, `students`, and `taught_lessons` remains scheduled for upcoming tasks.
