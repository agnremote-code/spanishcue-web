---
name: academias-b2b
description: Academies (B2B): /academias landing v2, demo form, institutions panel with licences (D1 0016/0017 LIVE), WhatsApp button and Ask Bauti assistant
metadata:
  type: project
  modified: 2026-10-27T18:19:12.351Z
---

Thread «Academias: landing y panel» (cmsg_01Gr5R4j3t2Yet65UcmhcVhABMw3SmCoQCaX1DvxWNbQVF), started 2026-10-23.
- Phase 1 by Codex, PR #274 LIVE 2026-10-23: /academias, AudienceSwitch «Soy academia / Soy profesor», demo form (app/academias/DemoForm.tsx), owner inbox /admin/academias.
- Phase 2 (Claude) PR #277/#279 LIVE: drizzle/0017_institutions.sql, db/institutions.ts, /api/academy, /api/admin/academies (owner sets seat_limit in /admin/academias), /academias/panel, /academias/unirse?token=. Access = access_grants source 'institution' (first N members by join date); personal subscriptions never change. Invitations are copy-link/mailto, no email sending yet.
- Tables 0016 + 0017 created in staging+production by «Prepare academy tables» deploy step (PR #278, LIVE 2026-10-27 ~17:05Z, smoke OK; Ale approved with «sí» 2026-10-23). Same PR raised CI verify timeout 30→45 min (full npm test ran ~30 min and kept getting cancelled).
- PR #286 merged 2026-10-27 18:18Z: moving 3D tour video, worlds + grammar sections, WhatsApp float (wa.me/19406015598, Ale's number), and «Ask Bauti» (app/bauti/*): mascot-based floating help bottom-left for non-PRO visitors on every page except lessons/3D/demo/admin/sign-in; different pre-written answers for academies vs teachers. NO AI: a real chatbot would need an API key (owner action).
- Gotchas: tests forbid image src matching /avatar|portrait|preply/ on SEO pages; "A0" text only allowed in authored-lesson files (tests/level-cleanup); react lint forbids setState in useEffect.
