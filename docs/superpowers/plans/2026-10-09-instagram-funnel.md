# Instagram Funnel Implementation Plan

> Execute inline with superpowers:executing-plans; one independent whole-branch review at the end.

**Goal:** Let visitors play real Spanish activities before choosing the existing subscription.
**Architecture:** Public landing and selected demo payload, shared 3D primitives, contextual checkout, opt-in experiment.
**Tech Stack:** Existing React/Vinext/Three/Cloudflare/Paddle; no new dependencies.
**Spec:** `docs/superpowers/specs/2026-10-09-instagram-funnel-design.md`

## Global Constraints
- Preserve PRO/Share Pass/auth/billing/SEO and other agent branches.
- US$0 demo; US$2 one day then US$15.50/month; direct US$15.50/month.
- Never import full lesson/street content into the public demo client.
- Use existing server-verified purchases and consent; no revenue inferred from callbacks.

## Review Focus
- Anonymous direct requests for premium districts and private chunks fail.
- Invalid level/query input cannot widen the demo payload.
- Consent denied/revoked creates no optional tracking or stored assignment.
- Dialogs, context loss, tab changes and touch cancellation stop movement.
- Existing PRO and Share Pass users see no new unsolicited paywall.

### Task 1: Demo policy and tracking
- [ ] Test server selection for six levels, rejecting unknown districts; movement gates and busy suppression; consent and experiment propagation; verified-purchase guard.
- [ ] Add `app/immersive/policy.mjs`, declarations, server selector, `/api/city-demo`, experiment helper and route; extend existing analytics aliases without touching billing state.
- [ ] Verify `node --test tests/instagram-funnel.test.mjs`; wire into existing marketing test entrypoint without editing package.json.

### Task 2: Playable public experience
- [ ] Add demo React client and deferred scene reusing buildCity/createHero/stepPlayer/followCamera and activities.choose.
- [ ] Include all centre venues/activities, six authored levels, two-moment conversations, progress and map fallback; gated district boundaries; accessible premium panel and existing CheckoutButton.
- [ ] Add bilingual landing, real captured video, CTA/URL attribution, explicit experiment control; add opt-in PRO discovery on free lesson/map surfaces only.
- [ ] Verify browser interactions and mobile layouts, server access and production build asset privacy.

### Task 3: Delivery
- [ ] Full npm test, lint, TypeScript, artifact validation, diff check; fresh independent code review and fixes.
- [ ] Commit/push, non-draft PR with base SHA, CI + Auto Merge; verify exact merged SHA.
- [ ] Official Cloudflare release workflow; production smoke and links.
