# Transcript — Lesson design test (Session 0), 2026-10-16

Exported from the Claude Code session transcripts (SendMessage tool calls that were delivered; calls rejected by the runtime are excluded). Sender, recipient and UTC timestamp come from the transcript. Message bodies are verbatim.

## 2026-10-16T13:55:04.567Z — Alejandro → Sofia

````text
Kickoff from Alejandro (Tech Director): ground rules, repo constraints, and who owns what for the 3D Spanish lesson proposal.

GROUND RULES
1. Read-only first test. Nobody modifies the repo, pushes, opens PRs/issues, deploys, or touches production/Cloudflare/Firebase/billing. Clone (read-only): /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad/repo
2. Cite real repo paths for any claim about the codebase. If you haven't verified it, say so.
3. Sofia sends the proposal to Martin and cc's me. Martin sends the critique to Sofia and cc's me. I make the call on any point that deadlocks, and I'll say why.
4. Only things actually said in messages count. Don't assume what someone else agreed to.

WHAT I FOUND (constraints the 3D lesson must respect)
A. Stack. One Cloudflare Worker (worker/index.ts) built by vinext 0.0.50 + Vite 8 + @cloudflare/vite-plugin, with Next 16 / React 19 app routes under app/. D1 via drizzle (db/schema.ts, drizzle/). three@0.186.1 is already a dependency (package.json). No R3F/drei, no physics lib, no GLTF pipeline. Adding a 3D dependency is a cost you have to justify.
B. Precedent: we already ship 3D lessons. Reuse the pattern, don't invent one. The reference is app/bosque-de-los-hongos-gigantes/:
   - BosqueHongos.tsx lazy-loads World3D (`lazy(()=>import('./World3D'))`), so three.js stays out of the route's initial chunk.
   - A 2D "mapa sin movimiento" fallback with the SAME content and progress. It's forced on prefers-reduced-motion, and it's used on WebGL init failure and context loss (`onFail`). Users can also pick it.
   - World3D.tsx:98-103 has a low-power path (pointer:coarse or width <760): no antialias, no shadows, DPR capped at 1.25 (1.75 on desktop). Full dispose() on unmount.
   - The world is procedural geometry, not heavy assets. A pure engine.mjs plus content/<level>.mjs data, tested with node --test (tests/bosque-*.test.mjs) without a browser.
   Other 3D: app/noche-abierta/, app/escucha-3d/ (per-level dynamic JSON imports in loaders.ts), app/immersive/CityDemo.tsx (dynamic import, "slow" skip-to-map button, saveData check in ImmersiveLanding.tsx:18).
C. Perf budget. I found NO explicit KB/FPS budget in the repo (no size checks in scripts/build-verified.sh, scripts/validate-artifact.sh or vite.config.ts). So the de facto budget is "match Bosque": lazy 3D chunk, procedural/low-poly, low-power path, a 2D fallback that's usable with JS-loaded content only. public/ is already 239 MB, so no large new binary assets without a case. If you want a numeric budget, propose one and say how it would be measured.
D. Product and pedagogy (docs/SPANISHCUE_HANDOFF.md §3, §6). The primary user is a TEACHER who opens a lesson and teaches from it, often screen-shared ("CHOOSE. OPEN. TEACH."). Target about 45 minutes. Progression goes from input to freer production and ends in real conversation. CEFR/PCIC are references only, with no certification claims. Bosque's help text states the house principle: "Las preguntas se responden en voz alta, sin grabación ni puntuación. El profesor decide cuándo continuar." The engines enforce choose→talk beats (tests/noche-pedagogy.test.mjs).
E. Language. docs/LANGUAGE_POLICY.md: neutral international Spanish, tú register, no Spain-only forms, regionalisms only when intentional. Enforced by npm run test:language. Lesson content is primarily Spanish. English only where it helps (A0/A1-A2 support).
F. Access and data. FREE/PRO is decided by the route/access ledger and tests, never by similarity (handoff §21). PRO client chunks and premium media are stripped or encrypted at build (scripts/validate-artifact.sh checks it). Any new D1 table or column needs docs/releases/MIGRATION_RELEASE.md, which is a big deal. The only existing per-learner scoring storage is autoestudio_progress (quizScore etc., alias-only learners) in db/schema.ts. Analytics must not carry PII (TASK-05B.md). Lesson problem reports already exist (app/lesson-reports/, lesson_reports table).
G. Delivery. AGENTS.md/CLAUDE.md: branch → PR → CI + Auto Merge → owner-authorized Cloudflare deploy. Not relevant for this test except that any plan should be shippable through it without new infra.

RESPONSIBILITIES
- Sofia (3D Experience Dev): the proposal. Include the scene and interaction design, how it reuses the Bosque/Noche architecture, the 2D/reduced-motion/low-power fallback, the asset and perf approach, MVP vs later, and what you'd need from content and QA. Send it to Martin, cc me.
- Martin (Pedagogical Director/QA): the critique. Cover CEFR level fit, the input→production arc, the 45-minute teacher-led flow, language policy, whether 3D actually serves learning or is decoration, and draft QA acceptance criteria. Send it to Sofia, cc me.
- Me: technical feasibility calls, ownership negotiation (content authoring, assessment/instrumentation, fallback UX, QA criteria), and DECISION.md.

Questions I want answered, not skipped:
1. (Sofia) What does 3D give the learner that the 2D map version of the same lesson doesn't? If the answer is "engagement", say how we'd know.
2. (Martin) If you want assessment or scoring, how does it square with the "sin grabación ni puntuación, el profesor decide" principle, and does it require a D1 migration?
3. (Both) Which level(s) are the MVP? One level done well beats seven thin ones.
````

## 2026-10-16T13:55:19.249Z — Alejandro → Martin

````text
Kickoff from Alejandro (Tech Director): ground rules, repo constraints, and who owns what for the 3D Spanish lesson proposal.

GROUND RULES
1. Read-only first test. Nobody modifies the repo, pushes, opens PRs/issues, deploys, or touches production/Cloudflare/Firebase/billing. Clone (read-only): /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad/repo
2. Cite real repo paths for any claim about the codebase. If you haven't verified it, say so.
3. Sofia sends the proposal to Martin and cc's me. Martin sends the critique to Sofia and cc's me. I make the call on any point that deadlocks, and I'll say why.
4. Only things actually said in messages count. Don't assume what someone else agreed to.

WHAT I FOUND (constraints the 3D lesson must respect)
A. Stack. One Cloudflare Worker (worker/index.ts) built by vinext 0.0.50 + Vite 8 + @cloudflare/vite-plugin, with Next 16 / React 19 app routes under app/. D1 via drizzle (db/schema.ts, drizzle/). three@0.186.1 is already a dependency (package.json). No R3F/drei, no physics lib, no GLTF pipeline. Adding a 3D dependency is a cost you have to justify.
B. Precedent: we already ship 3D lessons. Reuse the pattern, don't invent one. The reference is app/bosque-de-los-hongos-gigantes/:
   - BosqueHongos.tsx lazy-loads World3D (`lazy(()=>import('./World3D'))`), so three.js stays out of the route's initial chunk.
   - A 2D "mapa sin movimiento" fallback with the SAME content and progress. It's forced on prefers-reduced-motion, and it's used on WebGL init failure and context loss (`onFail`). Users can also pick it.
   - World3D.tsx:98-103 has a low-power path (pointer:coarse or width <760): no antialias, no shadows, DPR capped at 1.25 (1.75 on desktop). Full dispose() on unmount.
   - The world is procedural geometry, not heavy assets. A pure engine.mjs plus content/<level>.mjs data, tested with node --test (tests/bosque-*.test.mjs) without a browser.
   Other 3D: app/noche-abierta/, app/escucha-3d/ (per-level dynamic JSON imports in loaders.ts), app/immersive/CityDemo.tsx (dynamic import, "slow" skip-to-map button, saveData check in ImmersiveLanding.tsx:18).
C. Perf budget. I found NO explicit KB/FPS budget in the repo (no size checks in scripts/build-verified.sh, scripts/validate-artifact.sh or vite.config.ts). So the de facto budget is "match Bosque": lazy 3D chunk, procedural/low-poly, low-power path, a 2D fallback that's usable with JS-loaded content only. public/ is already 239 MB, so no large new binary assets without a case. If you want a numeric budget, propose one and say how it would be measured.
D. Product and pedagogy (docs/SPANISHCUE_HANDOFF.md §3, §6). The primary user is a TEACHER who opens a lesson and teaches from it, often screen-shared ("CHOOSE. OPEN. TEACH."). Target about 45 minutes. Progression goes from input to freer production and ends in real conversation. CEFR/PCIC are references only, with no certification claims. Bosque's help text states the house principle: "Las preguntas se responden en voz alta, sin grabación ni puntuación. El profesor decide cuándo continuar." The engines enforce choose→talk beats (tests/noche-pedagogy.test.mjs).
E. Language. docs/LANGUAGE_POLICY.md: neutral international Spanish, tú register, no Spain-only forms, regionalisms only when intentional. Enforced by npm run test:language. Lesson content is primarily Spanish. English only where it helps (A0/A1-A2 support).
F. Access and data. FREE/PRO is decided by the route/access ledger and tests, never by similarity (handoff §21). PRO client chunks and premium media are stripped or encrypted at build (scripts/validate-artifact.sh checks it). Any new D1 table or column needs docs/releases/MIGRATION_RELEASE.md, which is a big deal. The only existing per-learner scoring storage is autoestudio_progress (quizScore etc., alias-only learners) in db/schema.ts. Analytics must not carry PII (TASK-05B.md). Lesson problem reports already exist (app/lesson-reports/, lesson_reports table).
G. Delivery. AGENTS.md/CLAUDE.md: branch → PR → CI + Auto Merge → owner-authorized Cloudflare deploy. Not relevant for this test except that any plan should be shippable through it without new infra.

RESPONSIBILITIES
- Sofia (3D Experience Dev): the proposal. Include the scene and interaction design, how it reuses the Bosque/Noche architecture, the 2D/reduced-motion/low-power fallback, the asset and perf approach, MVP vs later, and what you'd need from content and QA. Send it to Martin, cc me.
- Martin (Pedagogical Director/QA): the critique. Cover CEFR level fit, the input→production arc, the 45-minute teacher-led flow, language policy, whether 3D actually serves learning or is decoration, and draft QA acceptance criteria. Send it to Sofia, cc me.
- Me: technical feasibility calls, ownership negotiation (content authoring, assessment/instrumentation, fallback UX, QA criteria), and DECISION.md.

Questions I want answered, not skipped:
1. (Sofia) What does 3D give the learner that the 2D map version of the same lesson doesn't? If the answer is "engagement", say how we'd know.
2. (Martin) If you want assessment or scoring, how does it square with the "sin grabación ni puntuación, el profesor decide" principle, and does it require a D1 migration?
3. (Both) Which level(s) are the MVP? One level done well beats seven thin ones.
````

## 2026-10-16T13:56:18.743Z — Sofia → Martin

````text
Martin, here is my 3D lesson proposal, "La feria de Villaluz" (A2 flagship), and I'd like your pedagogical critique.

Everything below is grounded in the repo (read-only clone). Key constraints I found:
- AGENTS.md:88-95 + CLAUDE.md §7 (owner rule, 2026-10-15): every NEW Conversation/Listening class must be a 3D world with BOTH modes (Conversación + Comprensión auditiva) in one world, switched via the shared ModeSwitch, reusing app/escucha-3d (ListeningCard, ModeSwitch, useListeningMode, content/<game>/<level>.json) and people/hero/movement from app/noche-abierta (people3d.ts, hero3d.ts, world3d.mjs). Reference implementation: app/hospital-san-casi-vivo.
- Listening audio = pre-generated neural TTS, one regional voice per character (scripts/generate-escucha-3d-audio.py), never speechSynthesis. Content rules in app/escucha-3d/content/README.md (8 items/level, 4 MC + 3 open + 4 gaps + glossary, word ranges per level, neutral "tú", no voseo, no English except A0).
- docs/conversation-family-authoring.md: each CEFR level genuinely authored (objectives, tasks, scaffolding, teacher notes, closing production); add only levels with ~45 min of real content.
- CLAUDE.md §7: ~45 min class, progressive sequencing, end with meaningful production, Spanish-first.
- Existing themes to avoid duplicating: noche-abierta (night out), casino, bosque, reino, hospital, "La estación de los dos destinos", a 3D travel world, "El Edificio de las Voces" (A1 neighbours listening). A town fair is not covered.

1) SCENARIO
A small-town summer fair at dusk ("feria del pueblo", fictional town Villaluz; pan-Hispanic, not tied to one country). The student arrives to meet a friend and gets pulled into the fair's small dramas. 8 white circles (game id `feria`):
 1. informacion – info booth: a child is lost; the loudspeaker describes him.
 2. churreria – food stall: ordering for a group, one item is sold out.
 3. tombola – raffle: you won something you don't want; swap it.
 4. noria – Ferris wheel queue: someone cuts in; complain politely.
 5. artesania – craft stall: ask about a gift, price, compare two items.
 6. escenario – bandstand: the band's singer is missing; describe who you saw and where.
 7. fotos – photo booth: arrange friends in a photo (location language: delante, detrás, al lado, entre).
 8. verbena – final dance: invite / accept / decline, and tell your night (closing production).

2) TARGET LEARNER & LANGUAGE (v1 levels A1, A2, B1; A2 is the flagship authored first)
A2 core functions (PCIC A2 nociones/funciones):
 - Describe people: ser + adj, tener + pelo/ojos, llevar + ropa/colores, edad aproximada.
 - Locate people/things in space: delante de, detrás de, al lado de, entre, enfrente de, a la izquierda/derecha.
 - Give and follow simple directions inside a space: sigue recto, gira, está al final de...
 - Order and request politely: ¿me pone/me da...?, quería..., ¿tiene...?
 - Complain and apologise softly: perdona, creo que estaba yo antes.
 - Invite, accept, decline with an excuse: ¿te apetece/quieres + inf?, lo siento, es que...
 - Narrate the evening: pretérito indefinido (regular + ir/ser/tener/estar) with antes/después/luego.
Vocab sets: ropa y colores, rasgos físicos, comida de feria, objetos/regalos, precios y números, espacio.
A1 version: present only, describe a person with 2-3 features, locate with 4 prepositions, order with quiero/¿tiene?. B1 version: reported speech of the announcement, hypotheses about where the singer went (estará / habrá ido... light), giving advice, telling the night with indefinido/imperfecto contrast.

3) INTERACTION LOOP (per circle, ~5 min; 8 circles + warm-up + closing ≈ 45-60 min)
Conversación mode (same card pattern as the hospital, app/hospital-san-casi-vivo/engine.mjs sceneView): situation line → short dialogue → one prompt → three answers, each with its own reaction and consequence → five open questions linking to the student's life (e.g. "¿Cómo son las fiestas de tu ciudad?"), teacher-facing.
Comprensión auditiva mode (same world, ModeSwitch): each circle has its own listening (ownListening: true): listen twice → MC → choose one open question and answer aloud → gaps → transcript.
The 3D-native mechanic ("Busca y describe") is the reason this is 3D and not a worksheet: at circles 1 and 6, an announcement (pre-generated TTS) describes a person ("un niño de unos seis años, lleva una gorra azul y una camiseta de rayas..."). The student walks the fairground and picks the right NPC among 3-4 distractors that differ in exactly one or two described features. Then the roles flip: the student describes another NPC aloud to the teacher, who has to find them on the map. Circle 7 does the same with location: the student arranges/describes positions. Language production is the goal; finding is the input check.
Closing production at circle 8: "Cuéntale a tu amigo qué pasó en la feria" (indefinido + secuenciadores) and invite them to the dance.

4) TECH APPROACH (no new dependencies; three 0.186.1 already in package.json)
New route app/la-feria-de-villaluz/ mirroring the hospital:
 - page.tsx, layout.tsx (metadata), FeriaGame.tsx (title screen, level + mode, HUD, cards, map, no-WebGL list), World3D.tsx loaded with next/dynamic ssr:false.
 - feria3d.ts: procedural geometry only (booths, string lights as InstancedMesh, Ferris wheel, bandstand) – no GLB, like the hospital.
 - layout.mjs (spots, NPC poses/looks, colliders), engine.mjs (pure state, node --test-able), story.mjs (cast, one voice each from app/escucha-3d/voices.json), levels/a1.mjs|a2.mjs|b1.mjs.
 - Find-person data: structured attributes mapped onto people3d `Look` (hairStyle, hairColor, top, topColor, bottom, extras like glasses/cap, age). A checker verifies the authored description matches the target Look and each distractor differs only in the intended features.
 - Listening: app/escucha-3d/content/feria/{a1,a2,b1}.json, register `feria` in app/escucha-3d/games.mjs with 8 spots, ownListening: true; audio via generate-escucha-3d-audio.py in GitHub Actions.
 - Catalog: new entry (next id 241) in app/lesson-catalog.ts, category Conversación, conversationMode "play", PRO (not a free sample; access-policy.ts untouched). Premium chunk quarantine via scripts/protect-client-assets.mjs as for the other 3D worlds.
 - Tests/checks: scripts/check-feria.mjs + tests/la-feria-de-villaluz.test.mjs, wired into package.json "test" and scripts/test-worker.mjs; neutral-Spanish guard applies.

5) MOBILE / LOW-END
Reuse the hospital's low flag (World3D.tsx:63: pointer coarse or width < 760): pixel ratio cap 1.2, no antialias, no shadow maps (blob shadows via people3d addBlobShadow), crowd 10 NPCs instead of ~24, bulbs emissive (no extra point lights), Ferris wheel static under prefers-reduced-motion. One flat open area (~80x80 m), no floors/elevator, so cheaper than the hospital. Touch joystick + buttons as in the other games.
No-WebGL fallback: the circle list opens every scene and listening; "Busca y describe" becomes a 2D card with 4 candidate cards listing attributes as text + simple icon.

6) ACCESSIBILITY
Keyboard everywhere, teacher list navigation, transcripts in every listening card, announcement text available after the 2nd listen, aria-live for announcements, colour is never the only distinguishing feature (each description includes a non-colour feature: gafas, gorra, pelo rizado, barba), reduced motion respected, Spanish UI.

7) ROUGH SCOPE
Engineering (world, game shell, find-person mechanic, checker, tests): about the size of the hospital minus floors – I estimate ~2,000-2,500 lines, mostly reuse. Content v1: 3 levels × 8 scenes, 3 × 8 listenings, ~6 find-person sets per level, ~30 TTS clips per level. A0 and B2-C2 as phase 2, only when genuinely authored.

QUESTIONS FOR YOU
a) Is v1 with A1/A2/B1 acceptable, or do you see a reason to require the full A0-C2 range at launch like the hospital?
b) Is "Busca y describe" pedagogically sound (input → production flip), or does it risk becoming a visual-search game with little language?
c) Is the A2 language load per circle right (I may be packing too many functions into 8 circles)?
d) Anything in the closing production you'd change?
````

## 2026-10-16T13:56:22.876Z — Sofia → Alejandro

````text
Heads-up: my 3D lesson proposal "La feria de Villaluz" is with Martin for pedagogical critique.
Summary: a pan-Hispanic town fair at dusk, 8 white circles (info booth/lost child, churrería, tómbola, noria queue, craft stall, bandstand/missing singer, photo booth, final verbena). Built per the owner's 3D rule (AGENTS.md:88-95): one world with Conversación + Comprensión auditiva via the shared ModeSwitch, reusing app/escucha-3d and app/noche-abierta people/hero/movement, modelled on app/hospital-san-casi-vivo. A2 flagship (describe people, locate in space, polite requests/complaints, invitations, indefinido narration); v1 ships A1/A2/B1, A0 and B2-C2 in phase 2. The 3D-specific mechanic is "Busca y describe": audio describes a person, the student finds them in the crowd (people3d Look attributes), then describes another NPC aloud to the teacher. No new deps, procedural geometry only, hospital's low-end path (DPR 1.2, no shadows, smaller crowd), no-WebGL list fallback, PRO catalog id 241. I'll report back after Martin replies. No repo changes made.
````

## 2026-10-16T13:56:23.926Z — Martin → Alejandro

````text
Martin to Alejandro: my answers to Q2 (assessment vs "sin grabación ni puntuación") and Q3 (MVP level). These are provisional; Sofia's proposal hasn't reached me yet.

Q2. ASSESSMENT. No D1 migration needed for the MVP, and the house principle stays intact.
- Free speech stays unrecorded and unscored. That is the house rule (BosqueHongos.tsx:53), and the existing ASR route agrees with it: app/api/phonetics/speech-attempt/route.ts returns kind:'manual' ("pide comentarios a tu profesor") for free speech and rejects transcripts below 0.65 confidence. Automatically scoring open B1 talk in a 3D game would contradict our own code. I won't ask for it.
- What I do ask for is evidence that learning happened, without scoring the speech:
  (a) Comprehension and form checks in the "choose" beats get immediate feedback with a "why", like the autoestudio items (types.ts ChoiceItem.why, engine/text.ts verdicts). That's feedback, not a grade.
  (b) Each station has one observable can-do, tied to a real objective id (e.g. a1.fun.direcciones). The teacher ticks it on screen: "logrado / con ayuda / todavía no". The teacher decides, so the principle holds.
  (c) An end-of-lesson recap screen lists the can-dos and the teacher's ticks, plus a short exit task that can be checked automatically (5-6 items).
- Storage: the same as Bosque/Noche, i.e. client state in localStorage/sessionStorage (BosqueHongos.tsx:21-23, NocheAbierta.tsx:60-67). Nothing goes to the server, there's no PII and there's no migration. Writing into autoestudio_progress or the error log (app/autoestudio/errors/model.ts) belongs to a later phase and would need its own decision. I'm explicitly NOT asking for it in the MVP.

Q3. MVP LEVEL. One level, one lesson. My pedagogical pick is A1 week 8, a lesson where space IS the content: a1.gram.preposiciones-lugar ("cerca de, al lado de, enfrente de, entre, detrás de, al/del"), a1.voc.ciudad and a1.fun.direcciones (app/autoestudio/curriculum/objectives/a1.ts:73-76).
- Why there: delante/detrás and izquierda/derecha depend on where the speaker stands. 3D shows that directly and a flat map can't, so the answer to your Q1 is about the language itself, not "engagement".
- Second choice: A2 week 9, instructions and the imperative (a2.ts:74-79).
- I'd argue against a conversation-topic level (B1+) as the MVP. There the 3D is scenery: the existing Bosque B1 stations already work identically in the 2D map, which is evidence that 3D adds nothing to those tasks.
- Caveat: at A1 the controls add cognitive load. That's why I'll ask for a mode where the teacher drives and the scene isn't full free-roam.

I'll send my full critique to Sofia, cc you, once her proposal arrives.
````

## 2026-10-16T13:57:07.623Z — Alejandro → Sofia

````text
Sofia, thanks. I checked your citations and they hold: AGENTS.md "New Conversation and Listening classes are 3D worlds (owner 2026-10-15)" exists, and I'd missed it. So Hospital San Casi Vivo (app/hospital-san-casi-vivo, catalog id 240 in app/lesson-catalog.ts:132) is the reference, not Bosque, and 241 is the next free id. Good. Before Martin's critique lands, I need you to answer these:

1. Fallback parity for "Busca y describe". It's your 3D-specific mechanic, and it's also the part that breaks in the no-WebGL list fallback (HospitalGame.tsx:269 falls back to a panel list with no world). In the list, what does "find the person from the audio" turn into? I'd want a 2D card grid built from the same Look attributes, not "skip it". If the mechanic can't degrade, it can't be the core of the circle.
2. Who drives? The product is teacher-led and screen-shared (handoff §3). In "the student finds them in the crowd", is the teacher steering while students call out directions, or does a student control it? This changes the design: calling out directions is actually great A2 practice for "locate in space" (a la izquierda de, detrás de). Make it explicit.
3. Audio. AGENTS.md requires pre-generated neural TTS, one regional voice per character, via scripts/generate-escucha-3d-audio.py in GitHub Actions, never speechSynthesis. A1+A2+B1 × 8 circles × own listening plus the "Busca" descriptions is a lot of generated audio and review. I'm pushing to cut v1 to A2 only, fully done (8 circles, both modes, Busca). A1/B1 can follow once Martin has QA'd one level. Give me a reason if you disagree. "The Hospital shipped seven" isn't enough on its own; it's also the reason Hospital is the hard-to-QA one.
4. Accessibility. If the target person is only described in audio, deaf or hard-of-hearing learners are out. Escucha already renders transcripts (Escucha.tsx:296). Confirm Busca uses that too, at least as a teacher-revealable transcript.
5. "Find" success feedback. Fine as in-world feedback, but no score persisted and no new D1. Confirm.

Please also send me the full proposal text, not just the summary, so DECISION.md can quote it accurately.
````

## 2026-10-16T13:57:31.923Z — Sofia → Alejandro

````text
Sofia's answers to your kickoff Q1 and Q3, plus four changes to the feria proposal Martin has.

Q1. What does 3D give that the 2D map doesn't?
To be straight about it: for most of the 8 circles, very little. The scene card (situation → 3 answers → 5 open questions) works just as well from a list, and the hospital already opens it that way without WebGL (HospitalGame.tsx:269). I'm only claiming a learning gain for 3 circles where the language is about space and perception: informacion (lost child), escenario (missing singer), fotos (arranging people).
 - Viewpoint-relative language. "A la izquierda de la noria", "detrás del puesto", "el señor que está delante de ti" change as the learner moves the camera, so the learner has to compute the relation from their own position and say it. In a 2D top-down map, left/right is fixed and the task turns into reading the map.
 - Listening to perception instead of text matching. In 3D, the announcement ("lleva gorra azul y gafas, está cerca de la churrería") has to be mapped onto bodies in a crowd made with people3d Look attributes (app/noche-abierta/people3d.ts:46). In 2D, candidates have to be represented somehow, and if they're text attribute cards the task becomes word matching. That's why my 2D fallback will use simple SVG figures, not text.
 - A real information gap for the teacher-led flip. The student is in the world and the teacher has the map (screen-shared). The student describes what they see and the teacher has to find it. That gap is real speaking need, and the 2D version gives it a weaker form.
How we'd know, without a D1 migration or PII. I'm not claiming "engagement" can be measured in-product today. db/schema.ts has no per-lesson event storage beyond autoestudio_progress, and I haven't verified what TASK-05B's analytics can carry, so I'm leaving that out. Proposal: a teacher-observed A/B pilot. 3-5 teachers each run circles 1/6/7 once in 3D and once with the 2D map (the toggle already exists in the Bosque pattern). They record 3 numbers per circle on a one-page sheet: student descriptive utterances, find accuracy on the first try, and minutes on task. If 3D doesn't beat 2D on utterances, the 3D-specific mechanic isn't earning its cost and we keep the world as a scene host only. In-product we keep the house rule: no scoring and no recording. A find attempt just gives in-world feedback, isn't persisted, and the teacher decides when to continue.

Q3. MVP level
I'm changing my proposal from A1/A2/B1 to A2 only for the MVP: all 8 circles, both modes, 8 listenings, ~6 Busca sets, all fully authored. A1 and B1 come next as separate genuinely authored variants (docs/conversation-family-authoring.md step 3). Why A2: describing people, locating things and the indefinido narration are central A2 functions, and the spatial mechanic is most useful there.

Changes to the proposal after your kickoff:
1. Fallback follows Bosque (BosqueHongos.tsx:21,40,46, verified). There's a user-pickable "mapa sin movimiento" with the same content and progress. It's forced on prefers-reduced-motion and used on WebGL init failure or context loss via onFail. Plus a "Usar el mapa" button while loading. Bosque's low-power path (World3D.tsx:96-104, verified): DPR 1.25/1.75, no AA or shadows on coarse pointers or widths under 760. Note that the hospital, which AGENTS.md:95 names as the reference for new Conversation/Listening worlds, only falls back to its list without WebGL. It doesn't force 2D on reduced motion, so I'm combining both: the hospital's scene/listening shell plus the Bosque fallback rules.
2. Proposed numeric budget, measured in CI build output. Lazy feria World chunk ≤ the hospital's World3D chunk gzip (measured from dist/ after npm run build in CI; I haven't measured it, no builds here). No new binary assets except the TTS mp3s. Low mode ≤ 120 draw calls (renderer.info.render.calls, logged in a dev-only overlay). Target ≥ 30 fps on one named mid-range Android (QA to pick the device), checked manually.
3. No new deps, no D1 changes, no new API. Progress uses localStorage only, as engine.mjs STORAGE_KEY does in the hospital.
4. What I need. Content (Martin's side, or whoever you assign): A2 scene texts and 8 listening JSONs that pass scripts/check-escucha-3d.mjs, plus authored Busca descriptions with the attributes they rely on. QA: the device matrix and acceptance criteria. I'll ask Martin to draft those.

Sent to Martin as well, so he critiques the A2-only version.
````

## 2026-10-16T13:57:37.290Z — Sofia → Martin

````text
Update to the feria proposal before you critique: the MVP is now A2 only, and I've made three other changes after Alejandro's kickoff.
1. MVP = A2 only: 8 circles, both modes, fully authored. A1 and B1 come later as separately authored variants. Your question (a) is mostly settled by this, but tell me if you think A2 is the wrong level.
2. I'm only claiming a 3D-specific learning gain for 3 circles (informacion, escenario, fotos): viewpoint-relative spatial language, listening mapped onto people in a crowd, and a student-in-world / teacher-with-map information gap. The other 5 circles are scene cards that would work just as well from a list. If you think 3 circles are too few to justify a 3D world, say so.
3. No scoring and no recording. A Busca attempt only gives in-world feedback, isn't persisted, and the teacher decides when to continue. To check whether 3D actually helps, I suggested Alejandro run a teacher-observed pilot comparing 3D and the 2D map on those 3 circles (descriptive utterances, find accuracy on the first try, minutes on task).
4. The 2D "mapa sin movimiento" follows Bosque: same content, forced on reduced motion. Busca uses simple SVG figures, not text attribute cards, so the 2D version still tests listening rather than word matching.
I'd also value your draft QA acceptance criteria. Content for A2 (scene texts, 8 listening JSONs that pass scripts/check-escucha-3d.mjs, Busca descriptions) would come from the content side. Alejandro is deciding ownership.
````

## 2026-10-16T13:58:07.178Z — Alejandro → Martin

````text
Martin, I checked your citations: speech-attempt/route.ts:39 kind:'manual' and a1.ts:73-76 both hold. Your assessment model (feedback-with-why on choose beats, teacher-ticked can-dos, client-only storage, no migration) is technically clean, and I'm inclined to adopt it. Three challenges before your critique goes out:

1. Category collision. Your A1 week-8 pick reads like a Gramática lesson (preposiciones de lugar). Sofia's "La feria de Villaluz" is a Conversación class, and AGENTS.md's owner rule (2026-10-15) says every NEW Conversación/Listening class is a 3D world with both modes (Conversación + Comprensión auditiva via ModeSwitch), referencing app/hospital-san-casi-vivo. Also, A1 place grammar already has a lesson: "La Torre de las Coordenadas" (id 47, Gramática A1–A2, app/lesson-catalog.ts:227, "una escena que puedes mover"), which a1.ts:73 itself links as related. So are you proposing a different product, or a level and objective target for the feria? I need you to critique the lesson that's actually proposed. Your deixis argument is strong, and it fits Sofia's "Busca y describe" mechanic (audio describes a person, the class finds them in the crowd, then describes another one). That's where viewpoint-dependent delante/detrás/izquierda pays off inside a conversation class.
2. Level. Sofia proposes A2 as the flagship and v1 = A1/A2/B1. I've pushed her to A2 only. You prefer A1 (cognitive load of controls is your own caveat) or A2 second. If the feria's MVP is one level, what's your call between A1 and A2 for THAT lesson, and which objective ids would each of the 8 circles target?
3. Precision on assessment. (a) The auto-checked exit task: does it show a number ("5/6")? If so, is that persisted anywhere? I'll accept per-item feedback plus a non-persisted tally, nothing more. (b) Teacher ticks live in localStorage on the teacher's device with no student identity. Confirm a teacher running three groups gets a clear reset and that ticks aren't presented as a record of any individual student. (c) "Teacher drives, not free-roam": concretely, do you mean click-to-travel between circles? That already exists in app/immersive (travel.mjs, CityDemo setTravel), so it's cheap. Say whether free-roam stays available.

One note: "the owner rule mandates 3D" settles whether this class is 3D. Our job is to make the 3D carry learning inside that rule. "3D adds nothing" is a valid objection to a specific mechanic, not to the format.
````

## 2026-10-16T13:58:32.489Z — Martin → Sofia

````text
Martin to Sofia: pedagogical critique of "La feria de Villaluz". Verdict: APPROVE WITH CONDITIONS. The core mechanic is good; the A2 load and the 45-minute flow need work. (cc Alejandro)

I checked your citations. AGENTS.md ("New Conversation and Listening classes are 3D worlds", owner 2026-10-15) and CLAUDE.md:186 do make 3D plus both modes mandatory, so I'm not re-arguing "why 3D". The question I'm asking is which mechanic earns the 3D, and I think "Busca y describe" does. Point by point:

WHAT I CONCEDE / ENDORSE
- "Busca y describe" is a real information-gap task. The announcement is comprehensible input, and distractors that differ in 1-2 described features make the learner process the language: gorra vs. sombrero, rayas vs. lisa, delante vs. detrás. Your Look-based checker (description matches target, distractors differ only in the intended features) is exactly the right guard. Keep it.
- Circle 7 (fotos) is the strongest 3D case. Delante/detrás/a la izquierda depend on the viewer's position, which a flat worksheet can't show.
- Technical reuse (hospital/escucha-3d/noche-abierta), procedural geometry, the low flag and the no-WebGL list: no objections. That's your call and Alejandro's.
- Colour is never the only distinguishing feature: correct, keep it.

(a) LEVELS. A1/A2/B1 for v1 is acceptable. Requiring A0-C2 would contradict docs/conversation-family-authoring.md (only genuinely authored levels). One condition: each level ships only once it passes the acceptance criteria below on its own. A2 must not wait for A1/B1, and A1/B1 must not ride on A2's approval. Two notes:
- Map A1 explicitly to a1.gram.preposiciones-lugar, a1.voc.ciudad and a1.fun.direcciones (app/autoestudio/curriculum/objectives/a1.ts:73-76). It's almost exactly your A1 spec.
- B1: "estará" (future of conjecture) is fine. "habrá ido" should be receptive only (in the input, not required in output).

(b) BUSCA Y DESCRIBE: sound, but it can become a visual-search game unless you add these four fixes:
 1. Language must be necessary and sufficient. The target must not be visually salient (no glow, no isolation, no unique pose). Every find must need at least 2 described features to solve, so no single feature identifies the target.
 2. Keep walking time low. The candidate cluster sits close to the circle (no cross-map hunts), and teacher list navigation can jump straight there. Time spent walking is time spent away from Spanish.
 3. Wrong picks get feedback in Spanish that names the mismatched feature: "Este niño lleva gorra, pero su camiseta no es de rayas." A generic "incorrecto" isn't enough. That feedback is the error correction.
 4. The role flip breaks under screen-share, which is our main use case (handoff §3: the teacher opens and teaches, usually sharing the screen). If the app picks the target for the student, the teacher sees it too and the information gap disappears. Fix: "Elige en secreto a una persona de la feria y descríbela", so the student chooses silently and the teacher searches and confirms. Add an on-screen scaffold frame (Es un/una…, tiene…, lleva…, está al lado de/delante de…) that fades by level. A1 gets full frames, B1 none.

(c) A2 LOAD: yes, it's overpacked. You list 7 functions plus indefinido narrative in 8 circles. I also checked the hospital A2 pattern you're copying (app/hospital-san-casi-vivo/levels/a2.mjs): its three options lead to funny consequences, not a language choice, and each scene has 5 talk questions. At about 5 minutes a circle, that pattern can't also teach a new function. Required changes:
 - One spine: describing and locating people (ser/tener/llevar + prepositions). It's taught at 1, recycled at 6 and 7, and assessed at the end. Ordering, swapping, complaining and gifts (2-5) are "service" circles that only RECYCLE known A2 functions. Each circle declares ONE primary function with 3-6 target exponents and maps to an objective id.
 - Circle 6, "describe who you saw", needs the IMPERFECTO for description (llevaba, tenía, estaba al lado de), not just the indefinido. Either keep circle 6 in the present ("está junto al escenario, lleva…") or name a2.gram.indefinido-imperfecto as its target. Right now the spec doesn't match the task.
 - Language policy (docs/LANGUAGE_POLICY.md, neutral international Spanish): "¿me pone…?", "¿te apetece…?" and "verbena" read as Spain-centred. Use "¿me das…? / ¿me puede dar…? / quería…", "¿quieres + inf?", and "el baile" (or keep "verbena" only as a glossed item). The neutral guard won't necessarily catch these, so they go in the content review.

(d) CLOSING PRODUCTION: keep it, but split and reorder it.
 - First a short functional role-play: invite / accept / decline with "es que…".
 - Then the extended narrative "Cuéntale a tu amigo qué pasó en la feria", because production should end at its freest. Base the narrative on the learner's ACTUAL session. Show a timeline of the circles they visited and their choices as visual prompts, so the task tests the past tense and not memory.
 - Give it a selfCheck like autoestudio SpeakingTask (curriculum/types.ts): ≥5 sentences, ≥3 sequencers (primero/después/luego/al final), ≥4 indefinido forms including at least two of ir/ser/tener/estar.
 - End with one personal transfer question ("¿Cómo son las fiestas de tu pueblo o ciudad?").

TIMING / 45 MINUTES (handoff §6.2). Your own estimate is 45-60 minutes for 8 circles in ONE mode. With Conversación plus Comprensión auditiva per circle, it's two classes. Please add a teacher route per level: a 45-minute Conversación path (warm-up, 1, 7, 6, 2 or 4, closing) and a separate 45-minute listening path. The other circles become optional extensions. Don't promise "8 circles in 45 minutes".

COGNITIVE LOAD / ACCESSIBILITY ADDITIONS
- The fair's ambient music and crowd noise must duck to silence during announcements and listening clips. Background noise during an A1/A2 listening task is a comprehension confound, not atmosphere.
- The world pauses (no NPC movement or swapped looks) while a description card is open, so the target can't wander off mid-task.
- String lights must not flicker or flash (photosensitivity), and they stay static under prefers-reduced-motion, like the wheel.
- Fallback: in the no-WebGL 2D card, the candidates' attributes listed as text turn listening-then-find into reading-then-matching. That's acceptable, but keep the announcement audio-first there too (text only after the 2nd listen, as you proposed).

ASSESSMENT (consistent with the house rule "sin grabación ni puntuación, el profesor decide", BosqueHongos.tsx:53)
- Speech is never recorded or scored automatically.
- Automatic feedback only where answers are objective: find-picks, listening MC/gaps (the existing escucha-3d flow).
- Teacher ticks each circle's can-do: logrado / con ayuda / todavía no.
- End-of-lesson recap, plus ONE transfer check: an unseen "Busca" set (new description, new candidates) with no scaffold, as a mini post-test.
- All state client-side like Bosque/Noche: no D1, no PII.

DRAFT ACCEPTANCE CRITERIA (per level, checked by your checker/tests or by my content review)
 AC1 Every circle declares one primary objective id from app/autoestudio/curriculum/objectives/<level>.ts and 3-6 target exponents. The checker fails on a missing or unknown id.
 AC2 Every find-person set: target matches its description; each of 3-4 distractors differs in ≥1 described feature; at least 2 features are needed to rule out all distractors; at least 1 distinguishing feature isn't colour. (checker)
 AC3 Every wrong pick returns Spanish feedback naming at least one mismatched feature. (test)
 AC4 Candidate cluster within a fixed radius of its circle (you pick the number, e.g. ≤12 m); target has no unique emissive or highlight material. (test on layout.mjs)
 AC5 Ambient audio gain ≤ silence/ducked during any announcement or listening clip; world paused while a task card is open. (test on engine state)
 AC6 Listening JSON passes app/escucha-3d/content/README.md rules and the per-level word ranges. (existing checker)
 AC7 Language: the neutral-Spanish guard passes, plus a manual review list of Spain-centred items (me pone, apetece, verbena…) resolved. (test:language + my sign-off)
 AC8 Teacher route: one documented 45-minute Conversación path and one 45-minute listening path per level, each ending in the closing production. (content review)
 AC9 Closing: role-play, then the session-based narrative with the selfCheck above, then one personal transfer question. (content + test that the timeline renders from session state)
 AC10 Transfer check: one unseen find set per level, not reused from circles 1/6. (checker)
 AC11 The fallback 2D path reaches every circle, every listening, every find set and the closing with identical content. (test)
 AC12 Pilot measure, after launch, not a ship blocker: in ≥5 teacher-led classes, ≥70% of first find attempts are correct and the student's secret description lets the teacher find the person with ≤2 follow-up questions. Below that, the descriptions or distractors get reworked.

Open to pushback on any of these, especially AC4/AC5 thresholds, where your technical judgement beats mine. The non-negotiables for me are: the screen-share fix for the flip (b4), one spine with one function per circle (c), the 45-minute teacher routes, and no automated scoring of speech.
````

## 2026-10-16T13:58:42.594Z — Alejandro → Sofia

````text
Sofia, I'm accepting several things: A2-only MVP, the honest Q1 scoping (a learning claim only for informacion/escenario/fotos), the SVG-figure 2D fallback, the hospital shell plus Bosque fallback rules, no deps/D1/API, and the budget, with one amendment: the chunk-size check is a CI build-output comparison and needs a real number recorded once the first build runs. Until then it's a target, not a gate. Two gaps remain:

1. The info-gap flip contradicts screen-sharing. You wrote that the student is in the world and the teacher has the map (screen-shared). In the default setup (handoff §3), there's ONE shared screen, so teacher and students see the same view and there's no gap. Pick one and say what it needs:
   (a) Two devices: the student on their own device in the world, the teacher on the map. That means a second client, either a "teacher map" view or the student sharing their screen. No shared state, since a server-synced session would be new infra, and I'd reject that for MVP.
   (b) Single screen, with the gap made by occlusion or hiding. For example, the teacher hides the target overlay and only the student who heard the audio knows, or students give directions while the teacher drives blind.
   My preference is (b) for MVP, because it needs no new client. Tell me if it kills the mechanic.
2. You didn't answer my Q4. If the Busca target is only described in audio, deaf or hard-of-hearing learners and noisy classrooms are excluded. Confirm a teacher-revealable transcript using the existing Escucha transcript rendering (app/escucha-3d/Escucha.tsx:296).

Also, ownership. I'm assigning A2 content authoring (scene texts, 8 listening JSONs, Busca descriptions) to Martin as content owner, with you owning the Look-attribute contract (which attributes people3d can actually render distinctly at fair distance and at low-mode DPR). He can only write "gorra azul y gafas" if you guarantee they're visible. Send him that list. The pilot is post-MVP and needs real teachers, so it goes in DECISION.md as a later validation step, not an MVP gate.
````

## 2026-10-16T13:59:16.541Z — Martin → Alejandro

````text
Martin to Alejandro: my position on Sofia's "La feria de Villaluz" is APPROVE WITH CONDITIONS. My full critique went to Sofia; here is the summary and the calls I need from you.

UPDATE TO MY EARLIER Q3 ANSWER: I'm conceding. I'd suggested A1 week 8 as the MVP. Sofia showed me the owner rule in AGENTS.md ("New Conversation and Listening classes are 3D worlds", 2026-10-15; CLAUDE.md:186), which makes new Conversation/Listening classes 3D with both modes. Her A2 flagship also already contains the spatial-language task I wanted (circle 7, fotos) plus a genuine information-gap mechanic ("Busca y describe"). So A2 first is fine with me. A1 maps cleanly onto a1.gram.preposiciones-lugar / a1.fun.direcciones (objectives/a1.ts:73-76).

YOUR Q1 ("what does 3D add"), from the pedagogy side: 3D earns its place only in Busca y describe (circles 1/6) and the viewpoint-dependent prepositions (circle 7). Elsewhere it's setting. That's acceptable under the owner rule, provided walking and visual search don't eat language time. I've asked for testable guards on that: candidate clusters near the circle, a target that isn't visually salient, ≥2 features needed to solve, ambient audio ducked during listening, and the world paused during task cards.

MY NON-NEGOTIABLES (sent to Sofia as acceptance criteria AC1-AC12):
1. The role flip must work under screen-share. If the app picks the target, the teacher sees it too and the information gap is gone. Fix: the student secretly picks an NPC and describes it.
2. The A2 load is overpacked (7 functions plus narrative in 8 circles). I want one spine (describe and locate people), one primary function per circle tied to an objective id, and circle 6 corrected: describing who you saw needs the imperfecto, not only the indefinido.
3. Feedback on wrong picks names the mismatched feature in Spanish.
4. No recording and no automated speech scoring. Evidence comes from auto-checked finds and listening, teacher ticks per can-do, and one unseen transfer find set at the end. Client-side state only: no D1 migration, no PII.
5. Language-policy items to fix: "¿me pone?", "¿te apetece?", "verbena" read as Spain-centred.

POINTS NEEDING YOUR CALL:
A. The 45-minute target vs. 8 circles × 2 modes. Sofia's own estimate is 45-60 minutes for one mode. I'm asking for a documented 45-minute Conversación route and a separate 45-minute listening route per level, with the remaining circles as extensions. If you or the owner read "~45 min" as one class covering the whole world, that's your call. I'd hold that it's two classes.
B. Release gating per level: I want A2 to ship once it passes on its own, without waiting for A1/B1 and without A1/B1 riding on A2's approval. Does that fit the release process?
C. Ownership of AC7 (language review) and AC1/AC8/AC9 (objective mapping, teacher routes, closing): I'd own the content review and sign-off. Sofia owns the checker/tests for AC2-AC6/AC10/AC11. AC12 is a post-launch pilot metric, not a ship blocker. Please confirm or reassign.

I'll forward Sofia's response and any remaining disagreement.
````

## 2026-10-16T13:59:47.248Z — Alejandro → Martin

````text
Martin, here are my calls on your three points, plus one request.

A. 45 minutes: I agree, with one framing. The handoff (§6.2) targets about 45 min of usable class time, and the precedent catalog entries already state longer worlds honestly: Hospital id 240 says "45–90 min", Bosque says "45–60 min". So the MVP ships with two documented 45-minute teacher routes for A2. One is a Conversación route that MUST include circles 1, 6 and 7, because those are where the 3D earns its place. The other is a Comprensión auditiva route. The remaining circles are listed as extensions, and the catalog duration reads "45–90 min", not "45 min". It's one world, so it's one catalog entry, not two classes. The routes live in the teacher list (AGENTS.md already requires "a list for teacher navigation").

B. Per-level release: yes. The release process (AGENTS.md / CLAUDE.md) is per merged PR to main, not per level. A2 ships in its own PR once its gates pass, and the catalog entry's `levels` array lists only shipped levels. Bosque already does this: only B1 has authored stations (bosque README). A1 and B1 each ship later in their own PR, against the same ACs re-run for that level. Nothing rides on A2's approval.

C. Ownership: confirmed, with one addition. You AUTHOR the A2 content (scene texts, the 8 listening JSONs that must pass scripts/check-escucha-3d.mjs, Busca descriptions) and own the language and objective sign-off (AC1/AC7/AC8/AC9). Since author and reviewer are the same person, the independent check on language is the automated guard (npm run test:language, docs/LANGUAGE_POLICY.md) plus my technical review. Sofia owns AC2-AC6/AC10/AC11 tests and checkers, and she also owns the Look-attribute contract, meaning which features people3d renders distinctly at fair distance in low mode. You may only write descriptions using attributes on her list. AC12 is a post-launch pilot and not a ship blocker. Agreed.

Also accepted: your role-flip fix (the student secretly picks the NPC, which makes the gap work under a single shared screen), one spine (describe and locate people), imperfecto in circle 6, feedback that names the mismatched feature, the anti-salience and pause guards, and the Spain-centred items. Pick neutral replacements for "¿me pone?", "¿te apetece?" and "verbena" and send them to Sofia.

Request: I only have your summary. Please send me AC1-AC12 VERBATIM so DECISION.md quotes them exactly instead of my paraphrase.
````

## 2026-10-16T14:00:02.216Z — Sofia → Alejandro

````text
Sofia's answers to your 5 points, followed by the FULL proposal text v2 (A2 MVP) for DECISION.md. Martin's critique hasn't arrived yet, so v2 doesn't include his input.

ANSWERS
1. Fallback parity: agreed. Busca doesn't skip in the list fallback. It becomes a 2D card grid of 4 figures (1 target + 3 distractors). Each card is an SVG figure drawn from the SAME data that feeds people3d Look (hairStyle, hairColor, top/topColor, bottom/bottomColor, extras such as glasses/cap/beard, age), so the 3D and 2D versions can't drift apart. The figures carry no visible text labels, which keeps it a listen-and-identify task rather than word matching. The location half ("está cerca de la churrería") becomes a small top-down plan in the same card with 4 marked positions. The 2D version loses viewpoint-relative left/right, and I accept that. The checker (scripts/check-feria.mjs) will assert that every Busca set renders in both views from one data record. In v2 the 2D grid is used by the hospital-style list fallback (no WebGL), the Bosque-style "mapa sin movimiento" (user-picked or forced by reduced motion), and WebGL context loss.
2. Who drives: the teacher drives by default (screen-shared, CHOOSE. OPEN. TEACH.). Busca, class mode:
   a) The announcement plays (or the teacher plays it).
   b) The STUDENTS give the teacher directions: "sigue recto", "gira a la izquierda", "está detrás de la noria", "es el señor de gafas". They do it relative to the hero, because the third-person follow camera keeps the hero's left on screen-left (verified: followCamera in app/noche-abierta/world3d.mjs:390 puts the camera behind the hero along yaw, and followYaw at :359 eases yaw back to the heading, so this holds unless someone is drag-looking).
   c) The teacher picks who the students point to, and the world reacts.
   d) Flip: the teacher secretly picks another NPC from the teacher-only map (the existing MiniMap pattern, HospitalGame.tsx:55), and the students ask yes/no questions ("¿Lleva gafas?", "¿Está al lado del escenario?") until they find them.
   Self-study (1:1, the student at the keyboard) still works with the same steps, but it isn't the design target. This makes "dar indicaciones" and "preguntar por rasgos" the productive core, not the clicking.
3. Audio: no disagreement. I'd already cut to A2 only in my last message. A2 audio = 8 own listenings (README word range 70–120 each) + about 6 Busca announcements (1 short clip each, one cast voice from app/escucha-3d/voices.json), so about 14 clips. A1/B1 only after Martin QAs A2.
4. Accessibility: confirmed. Busca announcements reuse the Escucha transcript markup. Today it's inline JSX at Escucha.tsx:296 (the e3-transcript div), not an exported component. So the plan is to extract an exported <Transcript> from Escucha.tsx and use it in both the listening Exercise and Busca, which follows the reuse-not-copy rule. That touches the shared engine, so tests/escucha-3d.test.mjs must stay green. For Busca the transcript is teacher-revealable via a "Ver texto" button, and also available to the student after the second listen. Deaf or hard-of-hearing learners can do the whole task by reading. Screen-reader users: the figures get aria-labels listing their attributes, so for them the task becomes read-and-match. That's an accepted accommodation, not parity.
5. Confirmed. Find feedback stays in-world and in-session (the NPC reacts and the card says "¡Es él/ella!" or "No, ese no lleva gafas"), like the existing non-persisted "X de 4 bien" status in Escucha.tsx:285. No score is persisted, no D1, no API. Progress (circles visited) uses localStorage only, as the hospital's STORAGE_KEY does (engine.mjs).

=== FULL PROPOSAL v2 — "La feria de Villaluz" (Sofia, 3D Experience Dev) ===

0. Constraints it respects (verified paths)
- AGENTS.md:88-95, CLAUDE.md §7: a new Conversation class = one 3D world with Conversación + Comprensión auditiva via the shared ModeSwitch. It reuses app/escucha-3d (ListeningCard, ModeSwitch, ListeningBadge, useListeningMode, useListeningDone, loaders, content/<game>/<level>.json) and app/noche-abierta (people3d.ts, hero3d.ts, world3d.mjs). The reference is app/hospital-san-casi-vivo. Audio is pre-generated neural TTS via scripts/generate-escucha-3d-audio.py in GitHub Actions, never speechSynthesis.
- app/escucha-3d/content/README.md: 8 items per level, ids in games.mjs order; 4 MC, 3 open, 4 gaps, 3–5 glossary; A2 transcripts of 70–120 words; neutral tú, no voseo, no English above A0.
- docs/conversation-family-authoring.md: genuinely authored levels only.
- Product: teacher-led, screen-shared, about 45 min, input → production → closing conversation; answered aloud, sin grabación ni puntuación.

1. Scenario
A summer town fair at dusk in the fictional pan-Hispanic town of Villaluz. The student comes to meet a friend and gets pulled into small dramas. Game id `feria`, route /la-feria-de-villaluz, catalog id 241 (PRO, Conversación, conversationMode "play", collection "Modo Play"). 8 white circles:
 1 informacion: a child is lost, and the loudspeaker describes him [Busca]
 2 churreria: order for a group; one item is sold out
 3 tombola: you won something you don't want; swap it
 4 noria: someone cuts into the queue; complain politely
 5 artesania: choose a gift; ask the price, compare two items
 6 escenario: the singer is missing; who did you see, and where? [Busca]
 7 fotos: arrange friends for a photo (delante/detrás/al lado/entre) [Busca, location variant]
 8 verbena: final dance; invite/accept/decline, and tell the story of your night (closing production)

2. Level and language (MVP = A2 only)
Functions:
 - describe people (ser + adj, tener + pelo/ojos, llevar + ropa/colores, approximate age)
 - locate (delante/detrás/al lado/entre/enfrente de, a la izquierda/derecha)
 - give and follow directions (sigue recto, gira, al final de)
 - polite requests (¿me pone/me da…?, quería…, ¿tiene…?)
 - soft complaints and apologies (perdona, creo que estaba yo antes)
 - invite/accept/decline (¿te apetece/quieres + inf?, lo siento, es que…)
 - narrate with pretérito indefinido (regular + ir/ser/tener/estar) + antes/después/luego
Vocabulary: clothes and colours, physical features, fair food, gifts, prices and numbers, space.
A1 and B1 are later phases, each genuinely authored and released only after A2 has passed QA.

3. Interaction loop (about 5 min per circle; warm-up + 8 circles + closing = about 45–60 min)
- Conversación (the hospital card pattern, engine.mjs sceneView): situation → short dialogue → prompt → 3 answers, each with its own reaction and consequence → 5 open questions about the student's life, which the teacher leads.
- Comprensión auditiva (same world, via ModeSwitch, ownListening: true): listen twice → MC → answer one open question aloud → gaps → transcript.
- Busca y describe (circles 1, 6, 7): the teacher drives by default; the full sequence is in ANSWERS 2 above.
- Closing at circle 8: "Cuéntale a tu amigo qué pasó en la feria" (indefinido + secuenciadores), then invite them to the dance.
Claimed 3D-specific gain, only for circles 1/6/7: viewpoint-relative spatial language, listening mapped onto bodies in a crowd, and a student/teacher information gap. The other 5 circles work just as well from the list. The proposed pilot (3–5 teachers, 3D vs 2D on circles 1/6/7) records descriptive utterances, find accuracy on the first try, and minutes on task, on paper. If 3D doesn't win on utterances, Busca stays only as a 2D card and the world remains a scene host.

4. Tech (no new deps; three 0.186.1 per package.json)
app/la-feria-de-villaluz/ mirrors the hospital:
 - page.tsx, layout.tsx (metadata)
 - FeriaGame.tsx (title, level/mode, HUD, cards, teacher map, list fallback, Busca card); World3D.tsx via next/dynamic ssr:false
 - feria3d.ts: procedural geometry only (booths, InstancedMesh string lights, a Ferris wheel, a bandstand), no GLB
 - layout.mjs (spots, NPC looks/poses, colliders); engine.mjs (pure, node --test); story.mjs (cast, one voice each, from voices.json); levels/a2.mjs; busca.mjs (target + distractor attribute records feeding both Look and the SVG figures)
Escucha:
 - app/escucha-3d/content/feria/a2.json
 - `feria` registered in app/escucha-3d/games.mjs (levels ['A2'], 8 spots, ownListening: true)
 - shared <Transcript> extracted from Escucha.tsx:296
Catalog entry in app/lesson-catalog.ts; access-policy.ts untouched; premium chunks quarantined as for the other 3D worlds (scripts/protect-client-assets.mjs, validate-artifact).
Checks: scripts/check-feria.mjs (scene shape, Busca consistency: the description matches the target, each distractor differs only in the intended features, and every description includes at least one non-colour feature); tests/la-feria-de-villaluz.test.mjs added to package.json "test" and scripts/test-worker.mjs; the neutral-Spanish guard applies.

5. Fallbacks and performance
- Low-power path (pointer:coarse or width <760, as in hospital World3D.tsx:63 and Bosque World3D.tsx:98): DPR ≤1.25, no AA, no shadow maps (people3d addBlobShadow), crowd about 10 NPCs instead of about 24, emissive bulbs and no extra point lights.
- One flat area of about 80×80 m with no floors.
- 2D: list fallback when there's no WebGL or on onFail/context loss; user-pickable "mapa sin movimiento", forced on prefers-reduced-motion (the Bosque pattern, BosqueHongos.tsx:21); "Usar el mapa" while loading. Same content and progress.
- Proposed budget (not measured yet, since I ran no build): lazy feria World chunk gzip ≤ the hospital's World3D chunk, measured from dist/ in CI; ≤120 draw calls in low mode (renderer.info, dev overlay); ≥30 fps on one QA-chosen mid-range Android; no new binaries except about 14 A2 mp3s.

6. Accessibility
- Keyboard and teacher list navigation; touch joystick and buttons.
- Transcripts for every listening and every Busca announcement (teacher-revealable, and student-visible after the 2nd listen); aria-live announcements.
- Colour is never the only cue; reduced motion respected; Spanish UI.
- Screen readers: attribute aria-labels (an accommodation).

7. Data and access
No D1, no migration, no API, no persisted score. localStorage progress only. PRO via the existing ledger.

8. Scope (rough estimates, not measured)
- Engineering: about 2,000–2,500 lines, mostly reuse: world, shell, Busca (3D + 2D), Transcript extraction, checker, tests.
- Content (A2): 8 scenes, 8 listening JSONs passing scripts/check-escucha-3d.mjs, about 6 Busca sets, about 14 TTS clips.
- QA: Martin's acceptance criteria + a device matrix.
Needs from others: A2 content authoring (Alejandro to assign the owner), QA criteria and devices (Martin), the pilot (Alejandro to decide whether to run it).
````

## 2026-10-16T14:00:51.213Z — Martin → Sofia

````text
Martin to Sofia: reply to your update (A2 only, 3 circles, no scoring, SVG fallback). Our messages crossed: my full critique and draft AC1-AC12 are already in your inbox. Here is what changes with your update.

1. A2 IS THE RIGHT LEVEL, and I now have a sharper reason than before. The describe-and-locate spine is A1 material: a1.voc.descripcion-personas, a1.voc.ropa-colores, a1.gram.preposiciones-lugar (objectives/a1.ts:57,112,73). At A2 it gets recycled, and the NEW A2 language rides on it. That's input that's slightly beyond the learner without overloading them. Proposed primary objective per circle (all ids exist in app/autoestudio/curriculum/objectives/a2.ts or a1.ts; review ids in brackets):
 1 informacion: a2.gram.relativo-que, "el niño que lleva una gorra azul", "es el que está al lado de…" [a1.voc.descripcion-personas, a1.voc.ropa-colores]
 2 churreria: a2.gram.condicional-cortesia, quería / me gustaría / ¿podría darme…?, plus handling "se acabaron" [a1.fun.pedir-restaurante]
 3 tombola: a2.fun.favores with se lo, ¿me lo cambias? / te lo doy [a2.gram.se-lo]
 4 noria: a2.fun.reclamar, "perdona, creo que yo estaba antes" [a2.gram.condicional-cortesia]
 5 artesania: a2.fun.comparar-elegir, más/menos… que, tan… como [a2.gram.comparativos]
 6 escenario: a2.gram.indefinido-imperfecto, "lo vi hace un rato; llevaba…, estaba junto a…" [a2.gram.relativo-que]
 7 fotos: a2.gram.imperativo-pronombres, ponte detrás de…, siéntate entre…, colócate a la izquierda [a1.gram.preposiciones-lugar]. Imperative with clitics plus viewpoint-relative space is exactly where 3D pays off.
 8 baile: invite role-play [a1.fun.invitar], then narrative a2.fun.anecdota [a2.disc.secuenciar]
 Placement caveat: relativo-que (A2 week 18) and imperativo-pronombres (week 9) put this lesson in the SECOND HALF of A2. The teacher notes should say so. In the meantime, relativo-que can stay receptive in the announcements and scaffolded in production ("el/la que lleva…").

2. THREE 3D CIRCLES ARE ENOUGH. Inside the owner rule, I don't need all 8 to be 3D-native. What I need is for the 3 to be on the spine and on the teacher's 45-minute Conversación route. My suggested route (warm-up, 1, 7, 6, one service circle, closing) contains all three, so they're the core of the class, not a side trip. The other 5 as list-quality scene cards are fine, provided each still has its one primary function above.

3. THE INFORMATION GAP NEEDS ONE CLARIFICATION. You describe it as "student-in-world / teacher-with-map". Does that assume two screens, with the student on their own device? In the main use case the teacher screen-shares a single world (handoff §3), so both see the same thing. Please make the flip work on ONE shared screen: the student secretly picks an NPC and describes it, and the teacher finds it. Two-device can be an extra. This is the one point I won't drop.

4. SVG FIGURES IN 2D: CONCEDED. That's better than my concern about text attribute cards, and it keeps the task as listening. Drop that note from my critique. One condition: the SVG figures must show the same described features as the 3D Look, so the AC2 checker can run on both.

5. PILOT: ENDORSED. It's my AC12 made comparative. To make it interpretable:
 - counterbalance which circles each teacher runs in 3D vs 2D;
 - define "descriptive utterances" as the count of distinct described features the student produces (feature + correct form);
 - log first-try find accuracy and minutes on task per circle, entered by the teacher on paper or a form, not by the app (no persistence).

Still open from my critique, and needing your answer: the A2 load reduction (one function per circle, now concretely mapped above); the circle 6 tense fix (covered above); the Spain-centred items (¿me pone?, ¿te apetece?, verbena); the audio ducking and world pause during tasks; and the closing reorder. Push back on thresholds where your technical judgement says otherwise.
````

## 2026-10-16T14:00:59.580Z — Alejandro → Sofia

````text
Sofia, v2 is strong. The fallback parity via one data record (busca.mjs feeding both Look and SVG), students giving directions relative to the hero (with the followCamera citation), the <Transcript> extraction with tests/escucha-3d.test.mjs kept green, and the non-persisted feedback are all accepted as written. Two calls from me, and some of Martin's points you need to fold in:

1. TECHNICAL CALL on flip (d). The "teacher-only map (existing MiniMap pattern, HospitalGame.tsx:55)" isn't teacher-only. It's an on-screen SVG, so under screen-share the students see whatever the teacher picks on it. As written, (d) has no information gap. For MVP I'm adopting Martin's flip: a student secretly picks an NPC (they know it, the screen doesn't), describes it and gives directions, and the teacher drives to find it. It needs no hidden UI and works on one shared screen. Your yes/no-question variant can stay ONLY if the teacher can choose without any on-screen highlight (e.g. the teacher just decides mentally). It gets no new "secret pick" UI in MVP. A real teacher-private view means a second client, and that's post-MVP.
2. Pilot: accepted as a post-launch validation step. It's not an MVP gate, and it isn't run in this read-only test. I'll record your decision rule ("if 3D doesn't win on utterances, Busca stays 2D-only and the world is a scene host").

FROM MARTIN (he says he sent his critique to you; he told me he's at APPROVE WITH CONDITIONS, AC1-AC12). The points I've already ruled on, which you need to reflect:
- One spine for A2: describe and locate people. One primary function per circle, tied to an objective id. Your 7-function list gets cut down. Martin owns the mapping.
- Circle 6 ("who did you see") uses imperfecto for description plus indefinido for events, not indefinido only.
- Wrong-pick feedback names the mismatched feature in Spanish. Your "No, ese no lleva gafas" already fits.
- Anti-salience guards: candidates cluster near the circle, the target isn't visually salient, at least 2 features are needed to solve, ambient audio ducks during listening, and the world pauses during task cards.
- Language policy: replace "¿me pone?", "¿te apetece?" and "verbena". Martin picks the neutral replacements.
- Time: two documented 45-minute teacher routes. Conversación must include circles 1/6/7. Comprensión auditiva is the other route. The rest are extensions, and the catalog duration reads "45–90 min".
- Ownership: Martin authors A2 content and signs off on language and objectives. You own the engine, world, checkers and tests (his AC2-6/10/11) and the Look-attribute contract. Send Martin the list of attributes people3d renders distinctly at fair distance in low mode, because his Busca descriptions may only use those.

If you object to any of these, say so now with the reason. Otherwise I'll write DECISION.md.
````

## 2026-10-16T14:01:04.144Z — Martin → Alejandro

````text
Martin to Alejandro: answers to your three challenges. Note that our messages crossed; my critique had already gone to Sofia (cc you) before your challenge arrived.

1. CATEGORY. You're right, and I had already conceded it in my second message. I'm not proposing a different product. I'm critiquing the feria as a Conversación class under the owner rule. Torre de las Coordenadas (id 47) stays the grammar lesson; the feria recycles that grammar inside conversation tasks. My deixis argument now lives inside Busca y describe and circle 7 (fotos).

2. LEVEL: A2, not A1, for this lesson. The describe-and-locate spine is A1 content (a1.voc.descripcion-personas, a1.voc.ropa-colores, a1.gram.preposiciones-lugar; a1.ts:57,112,73). At A2 it's recycled, and the new A2 language rides on it. At A1, first exposure plus the control load is too much at once (my own caveat). Circle → primary objective [review]:
 1 informacion: a2.gram.relativo-que [a1.voc.descripcion-personas, a1.voc.ropa-colores]
 2 churreria: a2.gram.condicional-cortesia [a1.fun.pedir-restaurante]
 3 tombola: a2.fun.favores [a2.gram.se-lo]
 4 noria: a2.fun.reclamar [a2.gram.condicional-cortesia]
 5 artesania: a2.fun.comparar-elegir [a2.gram.comparativos]
 6 escenario: a2.gram.indefinido-imperfecto [a2.gram.relativo-que]
 7 fotos: a2.gram.imperativo-pronombres [a1.gram.preposiciones-lugar]
 8 baile: a2.fun.anecdota [a1.fun.invitar, a2.disc.secuenciar]
 All ids are in app/autoestudio/curriculum/objectives/a1.ts and a2.ts, built as `${level}.${code}.${slug}` (define.ts:29).
 Caveat: relativo-que is A2 week 18, so the teacher notes should place the lesson in the second half of A2.

3. ASSESSMENT PRECISION
 (a) I accept your limit: per-item feedback plus a non-persisted tally on the recap screen (e.g. "5/6", labelled as the group's result in this session). It isn't written to any storage and it's cleared on reset. No server, no D1.
 (b) Confirmed:
  - ticks are per circle for "el grupo en esta sesión", with no name or student field anywhere;
  - a visible "Nueva clase / nuevo grupo" reset clears ticks, the tally and the closing timeline, with a confirm, like Bosque's startOver (BosqueHongos.tsx:36);
  - the label says "Notas de esta sesión: no se guardan por alumno";
  - I'd prefer ticks in sessionStorage, not localStorage, so a new tab or the next group starts clean even if the teacher forgets to reset. The world position can stay in localStorage, as in Bosque.
 (c) Yes, I mean click-to-travel between circles via the teacher list, reusing app/immersive travel.mjs. Free-roam stays available. What I need is that no task REQUIRES free-roam: on arrival at a circle, its Busca cluster is in view and selectable. Testable: every circle task, the transfer check and the closing can be completed using travel alone.

Your note on "3D adds nothing": agreed. I've stated it as a mechanic-level objection only. To Sofia I accepted that 3 of 8 circles carrying the 3D-specific gain is enough, provided they're on the spine and on the 45-minute route.

My remaining hard points, unchanged:
 - the role flip must work on ONE screen-shared screen. I've asked Sofia whether her "student-in-world / teacher-with-map" assumes two devices.
 - one primary function per circle (mapped above);
 - the Spain-centred items fixed;
 - a separate 45-minute route for each mode.
The 45-minute interpretation and AC ownership are still your calls, from my previous message.
````

## 2026-10-16T14:01:37.492Z — Alejandro → Martin

````text
Martin, I've verified all 15 objective ids you mapped in a1.ts/a2.ts (relativo-que is in fact week 18, a2.ts:140). Accepted: the circle→objective map, the second-half-of-A2 placement note, the non-persisted session tally, ticks per circle for "el grupo en esta sesión" in sessionStorage (world position in localStorage), the confirmed "Nueva clase / nuevo grupo" reset, and the travel-only completability AC (click-to-travel via the teacher list, reusing app/immersive travel.mjs; free-roam stays optional).

The role flip is ruled in your favour. I told Sofia the hospital MiniMap (HospitalGame.tsx:55) is an on-screen SVG, so it isn't teacher-only and her teacher-secret pick has no gap under screen-share. The MVP flip is yours: the student secretly picks an NPC and describes it and gives directions, and the teacher drives to find it. Her yes/no variant survives only if the teacher picks mentally, with no secret-pick UI. A second-client teacher view is post-MVP.

Your 45-minute and ownership calls were in my previous message: two 45-minute routes, the Conversación route must include 1/6/7, the catalog says "45–90 min", you author and sign off on content, Sofia owns the tests and the Look-attribute list. Circle 8 is now "baile" in your map. Confirm that's the neutral replacement for "verbena", and send replacements for "¿me pone?" and "¿te apetece?".

I still need AC1-AC12 verbatim. Your critique to Sofia never reached me (cc didn't arrive), so please paste the ACs directly to me.
````

## 2026-10-16T14:02:35.768Z — Martin → Alejandro

````text
Martin to Alejandro: AC1-AC12 verbatim as sent to Sofia, then the amendments we've agreed since, clearly separated, and the neutral replacements. I accept your calls A, B and C.

=== AC1-AC12, VERBATIM (as sent to Sofia) ===
DRAFT ACCEPTANCE CRITERIA (per level, checked by your checker/tests or by my content review)
 AC1 Every circle declares one primary objective id from app/autoestudio/curriculum/objectives/<level>.ts and 3-6 target exponents. The checker fails on a missing or unknown id.
 AC2 Every find-person set: target matches its description; each of 3-4 distractors differs in ≥1 described feature; at least 2 features are needed to rule out all distractors; at least 1 distinguishing feature isn't colour. (checker)
 AC3 Every wrong pick returns Spanish feedback naming at least one mismatched feature. (test)
 AC4 Candidate cluster within a fixed radius of its circle (you pick the number, e.g. ≤12 m); target has no unique emissive or highlight material. (test on layout.mjs)
 AC5 Ambient audio gain ≤ silence/ducked during any announcement or listening clip; world paused while a task card is open. (test on engine state)
 AC6 Listening JSON passes app/escucha-3d/content/README.md rules and the per-level word ranges. (existing checker)
 AC7 Language: the neutral-Spanish guard passes, plus a manual review list of Spain-centred items (me pone, apetece, verbena…) resolved. (test:language + my sign-off)
 AC8 Teacher route: one documented 45-minute Conversación path and one 45-minute listening path per level, each ending in the closing production. (content review)
 AC9 Closing: role-play, then the session-based narrative with the selfCheck above, then one personal transfer question. (content + test that the timeline renders from session state)
 AC10 Transfer check: one unseen find set per level, not reused from circles 1/6. (checker)
 AC11 The fallback 2D path reaches every circle, every listening, every find set and the closing with identical content. (test)
 AC12 Pilot measure, after launch, not a ship blocker: in ≥5 teacher-led classes, ≥70% of first find attempts are correct and the student's secret description lets the teacher find the person with ≤2 follow-up questions. Below that, the descriptions or distractors get reworked.
("selfCheck above" in AC9 refers to this line of the same critique: "Give it a selfCheck like autoestudio SpeakingTask (curriculum/types.ts): ≥5 sentences, ≥3 sequencers (primero/después/luego/al final), ≥4 indefinido forms including at least two of ir/ser/tener/estar.")

=== AMENDMENTS AGREED SINCE (not part of the verbatim text; quote these separately) ===
 AM-1 (to AC8, your call A): the Conversación route MUST include circles 1, 6 and 7. Both routes live in the teacher list, the remaining circles are extensions, and the catalog duration reads "45–90 min".
 AM-2 (to AC1): use the agreed A2 circle→objective map: 1 a2.gram.relativo-que · 2 a2.gram.condicional-cortesia · 3 a2.fun.favores · 4 a2.fun.reclamar · 5 a2.fun.comparar-elegir · 6 a2.gram.indefinido-imperfecto · 7 a2.gram.imperativo-pronombres · 8 a2.fun.anecdota, with the review ids from my earlier message. The teacher notes place the lesson in the second half of A2.
 AM-3 (to AC2/AC11, conceding to Sofia): the 2D fallback uses SVG figures, not text attribute cards. The SVG figures render the same described features as the 3D Look, and the AC2 checker runs on both.
 AM-4 (to AC2, your ownership call C): descriptions may only use attributes on Sofia's Look-attribute list, meaning features people3d renders distinctly at fair distance in low mode.
 AM-5 (new, travel-only): every circle task, the transfer check and the closing can be completed using click-to-travel from the teacher list alone (app/immersive travel.mjs). Free-roam stays optional.
 AM-6 (new, flip): the role flip runs on one shared screen. The student secretly picks an NPC, then describes it and gives directions, and the teacher drives to find it. There's no secret-pick UI. A second-client teacher view is post-MVP.
 AM-7 (new, session data): the recap shows a non-persisted tally (e.g. "5/6") labelled as the group's result in this session. Ticks (logrado / con ayuda / todavía no) are per circle for "el grupo en esta sesión" in sessionStorage, with no name or student field anywhere. The world position stays in localStorage. A visible "Nueva clase / nuevo grupo" reset with confirm clears ticks, the tally and the closing timeline, and the label reads "Notas de esta sesión: no se guardan por alumno". No server, no D1, no recording, no automated speech scoring.
 AM-8 (to AC12, Sofia's pilot): the 3D-vs-2D comparison on circles 1/6/7 is counterbalanced across teachers. "Descriptive utterances" means the count of distinct described features the student produces (feature + correct form). Teachers log on paper or a form, never in the app.
 AM-9 (release, your call B): each level ships in its own PR against these same ACs re-run for that level. The catalog `levels` array lists only shipped levels.

=== NEUTRAL REPLACEMENTS (also going to Sofia) ===
 - "verbena" → confirmed "el baile" (circle id `baile`, title e.g. "El baile de la plaza"). "verbena" is not used anywhere in the lesson, not even glossed.
 - "¿me pone…?" → "Quería…, por favor" (A2 polite imperfect, which fits a2.gram.condicional-cortesia) / "¿Me das…, por favor?" (tú, per LANGUAGE_POLICY) / "¿Me podría dar…?" as the more formal option.
 - "¿te apetece + inf?" → "¿Quieres + inf?" (default) / "¿Te gustaría + inf?" (A2 polite form).
 - Minor, no ship blocker: "tómbola" is understood widely, but in Mexico "rifa" is more usual. Keep the title "La tómbola" and add "rifa" to the glossary.

On ownership: I accept authoring the A2 content and signing off AC1/AC7/AC8/AC9. Because I'm both author and reviewer, I'd like one more check where the guard is blind: Sofia's checker verifying that every Busca description uses only her listed attributes (AM-4). That makes part of my content machine-checked by someone else.
````

## 2026-10-16T14:02:40.590Z — Martin → Sofia

````text
Martin to Sofia: neutral replacements for the three Spain-centred items, as Alejandro asked. Use these in the A2 feria content.

 - "verbena" → "el baile" (rename circle id `verbena` to `baile` in games.mjs / layout; title e.g. "El baile de la plaza"). "verbena" doesn't appear anywhere, not even glossed.
 - "¿me pone…?" → "Quería…, por favor" (fits circle 2's a2.gram.condicional-cortesia) / "¿Me das…, por favor?" (tú, per docs/LANGUAGE_POLICY.md) / "¿Me podría dar…?" as the formal option.
 - "¿te apetece + inf?" → "¿Quieres + inf?" (default) / "¿Te gustaría + inf?" (A2 polite).
 - Minor: keep "La tómbola" as the title, with "rifa" in the glossary (more usual in Mexico).

Also, from Alejandro's calls:
 - I author the A2 content.
 - You own the Look-attribute list, and I'll write descriptions only from it. Please send me that list (the features people3d renders distinctly at fair distance in low mode) when you have it.
 - I've asked that your checker also fail any Busca description using an attribute that isn't on the list. Since I'm both author and reviewer, that gives my content an external check.
````

## 2026-10-16T14:02:55.588Z — Sofia → Martin

````text
Sofia's reply to your critique: I accept your four non-negotiables, push back on the spine's level (with a curriculum citation), and include the Look-attribute contract Alejandro asked me to give you as content owner. (cc Alejandro)

ACCEPTED AS-IS
- b1 No salience: the target never gets a unique material, glow, isolation or pose. One refinement: when the action is a described feature ("está bailando"), at least one distractor shares that pose. Lost-child sets use only distractors of the same age band, otherwise "un niño" alone solves it.
- b2 Walking: AC4 radius ≤10 m from the circle centre. Opening a Busca card frames the camera on the cluster. The teacher's list jump places the hero on the circle, facing the cluster.
- b3 Feedback names the mismatched feature, generated from the same attribute record as the description ("Este niño lleva gorra, pero no lleva mochila"). So AC3 is testable and can't drift from the content.
- b4 Screen-share flip: your fix exactly. The student picks someone in their head, and the app has NO secret-selection UI, so nothing leaks onto the shared screen. The teacher drives, finds the person, the student confirms. Students giving directions while the teacher drives covers Alejandro's option (b). Scaffold frames fade by level.
- Language policy: "¿me pone?", "¿te apetece?" and "verbena" are gone. Circle 8's id becomes `baile`, using "¿me das / me puede dar / quería…" and "¿quieres + inf?". I'll add your review list to the checker as a level-scoped banned list, so AC7 is partly automated. Your sign-off still governs.
- Closing (d): role-play, then the session-based narrative, then the transfer question. The timeline needs the circles visited AND the chosen option per circle. The hospital persists only done ids (engine.mjs serialise), so I'll add picks to the same localStorage record: no D1, no PII. selfCheck: I'm reading it as a checklist the student/teacher TICKS, never computed from speech, since we have no speech recognition and want none. Confirm that's your intent.
- 45-min routes: accepted. Each route is data in levels/a2.mjs (`routes: { conversacion: [...], escucha: [...] }`), rendered as "Ruta de 45 min" in the teacher list. The checker asserts both end in the closing (AC8 becomes partly testable). Conversación: warm-up 3' → informacion 8' → fotos 7' → escenario 8' → churreria or noria 6' → closing 10' = 42'. Escucha: 5 of the 8 listenings + closing. You choose which 5.
- Audio ducking (AC5): the ambience gain target is a pure function of state: 0 while any announcement or listening clip plays, 0.3 while a card is open and silent, 1 otherwise. The hospital already ducks (HospitalGame.tsx, ambience.duck); I'm only making it silent and testable. The world is paused while a task card is open; World3D already takes `paused`.
- Lights: no flicker or flashing at all (constant emissive). The wheel is static under reduced motion.
- Assessment: teacher ticks logrado / con ayuda / todavía no per circle, in localStorage keyed by level only. There's no student-name field, so no PII and no roster/tracker integration in MVP. One unseen transfer Busca set per level (AC10).
- AC1-AC12 as drafted, with the edits below. AC12 is post-launch, as Alejandro said.

PUSHBACK 1: the spine as you wrote it is A1 in our own curriculum.
In app/autoestudio/curriculum/objectives/a1.ts: a1.voc.descripcion-personas and a1.fun.describir-personas (:57,:59), a1.voc.ropa-colores (:112), and a1.gram.preposiciones-lugar and a1.fun.direcciones (:72,:75). So "ser/tener/llevar + prepositions" can't satisfy AC1 for A2, which requires ids from objectives/a2.ts. I propose the A2 spine as "identificar personas por lo que llevan, cómo son y lo que están haciendo", which recycles the A1 description and location and adds two A2 targets:
 - a2.gram.relativo-que (a2.ts:140): "Puedo describir personas, cosas y lugares con que y donde". Exponents: "el niño que lleva gorra", "la señora que está al lado de…", "el chico que tiene…".
 - a2.gram.estar-gerundio (a2.ts:86; plus a2.spk.videollamada :91, "describir en directo lo que está pasando a mi alrededor"). Exponents: "está comiendo", "está bailando", "está hablando por teléfono".
This also settles circle 6 the way you offered: it stays in the present ("la cantante es la que está…"), so no imperfecto at A2 and no second spine. It's 3D-friendly too: people3d poses (dance, phone, guitar, read, carry, wave, sit…) let actions be a renderable, non-colour feature.
Proposed primary ids (you own the final choice):
 1 informacion: a2.gram.relativo-que
 2 churreria: a2.gram.condicional-cortesia (:110)
 3 tombola: a2.fun.reclamar (:113)
 4 noria: a2.fun.favores (:70; "¿me guardas el sitio?", so it doesn't duplicate reclamar)
 5 artesania: a2.fun.comparar-elegir (:60)
 6 escenario: a2.gram.estar-gerundio
 7 fotos: a2.gram.imperativo-afirmativo (:74; "ponte detrás de…", "colócate entre…" on top of the location exponents)
 8 baile: a2.fun.contar-ayer (:24), with the invitation role-play recycling a1.fun.invitar (a1.ts:159)
If you'd rather keep the person spine purely A1 recycling, then this world is really an A1 world and should be authored at A1 first. I think it's stronger at A2 with relativo-que + estar-gerundio.

PUSHBACK 2: "camiseta de rayas" isn't renderable (see the contract). Adding stripes means a pattern texture system in people3d, which is shared with noche-abierta and the hospital, so it's a cross-world regression risk. I'd keep it out of MVP.

PUSHBACK 3: the 2D fallback won't list attributes as text. Alejandro accepted SVG figures drawn from the same attribute record, so the 2D version stays listen-and-identify. Only screen-reader users get text aria-labels, as an accommodation.

LOOK-ATTRIBUTE CONTRACT (what you may write in Busca descriptions)
Based on the geometry code in app/noche-abierta/people3d.ts. I have NOT rendered anything (no build or browser here), so every tier is provisional until QA sees it at low-mode DPR 1.25 on the chosen Android at ~8-10 m.
TIER A, safe at fair distance, can be the main distinguishing feature:
 - age band: child / teen / adult / elderly
 - build and height: alto/bajo, delgado/fuerte
 - top type: vestido, abrigo, chaqueta, delantal, traje, sudadera con capucha, camiseta, jersey. Avoid camisa vs camiseta as the only contrast.
 - bottom type: falda, pantalón corto vs largo. Vaqueros vs pantalón differs only in colour, so it counts as colour.
 - hair shape: largo, calvo, afro, coleta, moño, trenzas, rizado. Avoid corto vs rapado as a contrast.
 - headwear: gorra (hairStyle 'cap'), sombrero (extra 'hat'), casco (extra 'helmet'). Gorra vs sombrero IS a valid contrast.
 - carried items: mochila ('backpack'), bolso ('bag')
 - action/pose: bailando, hablando por teléfono, tocando la guitarra, leyendo, saludando, sentado/a, llevando algo
TIER B, needs the close cluster framing, only as the 2nd feature, never the sole distinguisher:
 - gafas, barba, bigote, bufanda, auriculares
TIER C, never as a distinguishing feature:
 - pendientes, vendas/moretones
COLOUR: only strongly separated basic colours (rojo, azul, amarillo, verde, negro, blanco), and hair colour rubio/moreno/canoso/pelirrojo. Never similar shades. Never the only distinguisher (AC2 already requires ≥1 non-colour feature).
NOT AVAILABLE: patterns (rayas, cuadros, lunares), logos, text on clothing, shoes as a feature.
The checker will reject any description feature not in Tier A/B/colour, and any set whose only distinguisher is Tier B or colour.

Proposed AC edits:
 - AC2 adds "distractors share the target's age band unless age is described" and "at least 1 Tier-A feature is needed".
 - AC4 = ≤10 m, plus no unique pose unless the pose is described and shared by ≥1 distractor.
 - AC5 = gain 0 during clips, 0.3 with a card open, as a pure-function test.
 - AC9 selfCheck = ticked, not computed.
Tell me where you disagree.
````

## 2026-10-16T14:03:22.212Z — Sofia → Alejandro

````text
Sofia: on your two gaps, I pick (b) single screen, and it doesn't kill the mechanic. Q4 is confirmed (I answered it in my v2 message, which probably crossed with yours). I accept the ownership split.

1. Screen-share: (b), with no new client. The gap lives in people's heads, never in the UI.
 - Find step: the target is never highlighted on screen until a pick is confirmed, so the shared screen gives nothing away. The announcement is the only source. Students give the teacher directions while the teacher drives (sigue recto / gira a la izquierda / es la señora que está bailando). The teacher has heard the audio too, so this half is directed production practice rather than a true gap, and that's fine.
 - Flip: Martin's fix, which I accepted. The student picks a person silently in their head, with no app selection UI, describes them, and the teacher searches and the student confirms. Here the gap is real on one screen.
 - Two devices (a) still works if a teacher happens to run it 1:1, since it's the same client and needs no sync. I'm not designing for it or adding a "teacher map" client. A server-synced session stays out, as you said.
2. Q4 confirmed: Busca announcements use the Escucha transcript rendering. Escucha.tsx:296 is inline JSX inside Exercise, not an exported component, so the plan extracts an exported <Transcript> from Escucha.tsx and uses it in both places (reuse, not copy). tests/escucha-3d.test.mjs must stay green. The teacher can reveal it any time with "Ver texto", and the student sees it after the 2nd listen. Deaf, hard-of-hearing and noisy-room use is covered by reading.
3. Ownership accepted. I've sent Martin the Look-attribute contract (Tiers A/B/C + colour rules + NOT AVAILABLE: patterns like "rayas" aren't renderable). It's provisional, because I haven't rendered anything here. QA must confirm it on the chosen Android at DPR 1.25, ~8-10 m. The checker will enforce it.
4. Budget amendment accepted: the chunk size is a target until the first CI build records the real number. The pilot goes in DECISION.md as post-MVP validation (Martin's AC12), not a gate.

One open point for you to watch: I pushed back on Martin's A2 spine. In our own curriculum, describing and locating people is A1 (objectives/a1.ts:57,59,72,75,112), so it can't satisfy his AC1 at A2. I proposed a2.gram.relativo-que (a2.ts:140) + a2.gram.estar-gerundio (a2.ts:86) as the A2 spine, with A1 description recycled. That also keeps circle 6 in the present. If Martin and I don't converge, it's your call. The alternative is to author this world at A1 first.

Changes since v2, already agreed with Martin or proposed to him:
 - circle 8 is renamed `baile`; no "me pone / apetece / verbena"
 - one primary objective id per circle
 - two 45-min routes stored as data
 - closing reordered: role-play → session-timeline narrative with a ticked selfCheck → transfer question
 - ambience at gain 0 during clips; world paused while a card is open; no flicker
 - teacher can-do ticks and the transfer Busca set stay in localStorage, with no names
 - choice picks persisted locally for the timeline
 - AC4 radius ≤10 m
````

## 2026-10-16T14:04:28.948Z — Alejandro → Sofia

````text
DECISION.md v1 is recorded. Please reply CONFIRM, or OBJECT with the section number and your reason.

Path: /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad/team-logs/DECISION.md

Summary:
- Decision: "La feria de Villaluz", a new Conversación 3D class (id 241, PRO, Modo Play, /la-feria-de-villaluz). It's one procedural three.js world with Conversación + Comprensión auditiva via ModeSwitch, modelled on app/hospital-san-casi-vivo and reusing app/escucha-3d and app/noche-abierta.
- MVP is A2 only. The spine is describing and locating people. The 3D-specific gain is claimed only in circles 1/6/7 ("Busca y describe"). Circle 8 is "baile".
- Teacher drives, and students give directions relative to the hero. Click-to-travel completes everything (AM-5). The flip works on one screen: a student secretly picks an NPC and the teacher finds it (AM-6, no secret-pick UI).
- Fallbacks: no-WebGL list, "mapa sin movimiento" forced on reduced motion, onFail/context loss. Busca in 2D uses SVG figures from the same busca.mjs record. Low-power path: DPR ≤1.25, no AA or shadows, ~10 NPCs.
- Data: no D1, API, recording or speech scoring. Ticks go in sessionStorage, the tally isn't persisted, world position goes in localStorage, and there's a "Nueva clase / nuevo grupo" reset (AM-7).
- Time: two 45-minute routes (the Conversación route includes 1/6/7). The catalog says "45–90 min".
- Owners: Sofia owns the engine, world, fallbacks, perf, the Look-attribute list, and the checkers/tests for AC2-6/10/11 plus the attribute-only check. Martin owns A2 content authoring and sign-off for AC1/7/8/9. Alejandro owns technical review and the pilot go/no-go.
- ACs: Martin's AC1-AC12 verbatim, plus AM-1..AM-9 and technical T1-T8. The budget (T5) is a target until the first CI build measures it.
- Later: A1 (preposiciones/direcciones), B1, a second-client teacher view, D1 evidence, and the post-launch 3D-vs-2D pilot.
- Open risks include the unmeasured budget, glasses/cap legibility in low mode, camera drag breaking left/right (I propose snapping the camera during Busca), Martin being both author and reviewer, and the shared <Transcript> regression.
- Nothing was implemented. This was a read-only test.

Sofia: your reply to my last message (role-flip call, Martin's points folded in) hadn't reached me when I wrote this. DECISION.md reflects my calls on those points, so if you object to any of them, this is the place to say so.
````

## 2026-10-16T14:04:34.665Z — Sofia → Martin

````text
Sofia to Martin: we've converged. I accept your objective mapping, the neutral replacements and the one-screen flip. I'm dropping my estar-gerundio counter-proposal. Two technical notes below, plus confirmation that the attribute list is already in your inbox. (cc Alejandro)

1. Mapping: accepted as you wrote it. Ids 1-8 are yours, and I spot-checked that a2.disc.secuenciar and a1.fun.pedir-restaurante exist. Our spine positions were the same: A1 describe/locate recycled, with the new A2 language riding on it. I withdraw estar-gerundio as circle 6's target. It can appear receptively in announcements ("está comiendo…") if you want it. The "second half of A2" placement goes in the teacher notes.
2. Circle 6 with imperfecto, technical consequence: the singer was seen earlier ("estaba junto a…"), so her CURRENT position in the world needn't match. The checker will treat circle 6 location clues as narrative only, never as a solving feature. Only appearance features (llevaba/tenía, from the attribute list) count toward AC2's "≥2 features needed". If you want location to solve there, the past location must equal where she stands now. Tell me which you want.
3. Replacements: accepted. `verbena` → `baile` (id, layout, games.mjs; title "El baile de la plaza"). "verbena", "me pone" and "apetece" go on the checker's banned list for this game. "La tómbola" stays as the title, with "rifa" in the glossary.
4. One-screen flip: yes. The student picks silently, describes and gives directions, the teacher drives and finds them. There's no secret-pick UI and nothing is highlighted before confirmation. Two devices are just an extra, with no extra code.
5. SVG parity condition: accepted. busca.mjs is the single record. Both the 3D Look and the SVG figure are generated from it, and the AC2 checker runs on that record. So a feature the SVG can't draw can't be on the list. Tier B items (gafas, barba…) get drawn at a size readable in the card.
6. Attribute list: I sent it in my previous message ("LOOK-ATTRIBUTE CONTRACT": Tier A / Tier B / Tier C / colour / NOT AVAILABLE, so no rayas). The checker fails any description feature not on it, as you asked. It's provisional until QA views it at DPR 1.25 on the chosen Android.
7. Already answered in my previous message: ducking (gain 0 during clips, 0.3 with a card open), world pause, no flicker, the closing reorder with a ticked selfCheck, and AC4 ≤10 m. If you disagree with any of those thresholds, say so; otherwise I take them as agreed.
````

## 2026-10-16T14:04:36.935Z — Alejandro → Martin

````text
DECISION.md v1 is recorded. Please reply CONFIRM, or OBJECT with the section number and your reason.

Path: /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad/team-logs/DECISION.md

Summary:
- Decision: "La feria de Villaluz", a new Conversación 3D class (id 241, PRO, Modo Play, /la-feria-de-villaluz). It's one procedural three.js world with Conversación + Comprensión auditiva via ModeSwitch, modelled on app/hospital-san-casi-vivo and reusing app/escucha-3d and app/noche-abierta.
- MVP is A2 only. The spine is describing and locating people. The 3D-specific gain is claimed only in circles 1/6/7 ("Busca y describe"). Circle 8 is "baile".
- Teacher drives, and students give directions relative to the hero. Click-to-travel completes everything (AM-5). The flip works on one screen: a student secretly picks an NPC and the teacher finds it (AM-6, no secret-pick UI).
- Fallbacks: no-WebGL list, "mapa sin movimiento" forced on reduced motion, onFail/context loss. Busca in 2D uses SVG figures from the same busca.mjs record. Low-power path: DPR ≤1.25, no AA or shadows, ~10 NPCs.
- Data: no D1, API, recording or speech scoring. Ticks go in sessionStorage, the tally isn't persisted, world position goes in localStorage, and there's a "Nueva clase / nuevo grupo" reset (AM-7).
- Time: two 45-minute routes (the Conversación route includes 1/6/7). The catalog says "45–90 min".
- Owners: Sofia owns the engine, world, fallbacks, perf, the Look-attribute list, and the checkers/tests for AC2-6/10/11 plus the attribute-only check. Martin owns A2 content authoring and sign-off for AC1/7/8/9. Alejandro owns technical review and the pilot go/no-go.
- ACs: Martin's AC1-AC12 verbatim, plus AM-1..AM-9 and technical T1-T8. The budget (T5) is a target until the first CI build measures it.
- Later: A1 (preposiciones/direcciones), B1, a second-client teacher view, D1 evidence, and the post-launch 3D-vs-2D pilot.
- Open risks include the unmeasured budget, glasses/cap legibility in low mode, camera drag breaking left/right (I propose snapping the camera during Busca), Martin being both author and reviewer, and the shared <Transcript> regression.
- Nothing was implemented. This was a read-only test.

Martin: your AC1-AC12 are quoted verbatim in §5, with AM-1..AM-9 kept separate. I've accepted your extra check (Sofia's attribute-only checker, AM-4), and it's listed under Sofia's ownership.
````

## 2026-10-16T14:04:40.999Z — Martin → Sofia

````text
Martin to Sofia: my answers to your three pushbacks, the Look contract and the AC edits. Mostly concessions; I hold firm on two objective ids and one storage point. (Alejandro gets a summary separately.)

PUSHBACK 1 (spine level): agreed on the substance. Our messages crossed again: my reply to your update already mapped the A2 spine to a2.gram.relativo-que on top of A1 recycling, and Alejandro verified that map. Taking your additions per circle:
 - 6 escenario: CONCEDED, a2.gram.estar-gerundio, in the present ("la cantante es la que está tocando la guitarra"), with a2.gram.relativo-que as review. Your argument is better than mine: the pose is a renderable, non-colour feature, it keeps one spine, and it removes the imperfecto load from a Busca task.
 - 3/4 tombola/noria: I KEEP my mapping: 3 tombola = a2.fun.favores (swapping a prize: "¿me lo cambias? te lo doy", recycling a2.gram.se-lo), 4 noria = a2.fun.reclamar (someone cuts in). Those are the scenarios you wrote. Your swap would require rewriting both scenes ("¿me guardas el sitio?"), and there's no duplication in my version: one circle does favour, the other complaint.
 - 7 fotos: I KEEP a2.gram.imperativo-pronombres (a2.ts:75), with a2.gram.imperativo-afirmativo as review. Your own exponents (ponte, colócate, siéntate) are reflexive imperatives with enclitic pronouns, which is exactly what :75 targets ("cómpralo, siéntese"). Since this is second-half A2, the pronoun objective is the right new target.
 - 8 baile: I KEEP a2.fun.anecdota (a2.ts:52), not a2.fun.contar-ayer (week 2). Telling a friend about the fair is an anecdote, and the lesson sits in the second half of A2. To keep the load fair, the selfCheck stays focused on the indefinido (≥5 sentences, ≥3 sequencers, ≥4 indefinido forms incl. two of ir/ser/tener/estar), plus ONE scaffolded background sentence in imperfecto ("había mucha gente / hacía calor"). That's where the imperfecto lives now, instead of circle 6. Review: a1.fun.invitar, a2.disc.secuenciar.
 - 1 informacion: a2.gram.relativo-que · 2 churreria: a2.gram.condicional-cortesia · 5 artesania: a2.fun.comparar-elegir (unchanged, we agree).

PUSHBACK 2 (stripes): CONCEDED. "Rayas" was only my example; no pattern system in people3d for MVP.

PUSHBACK 3 (2D text): CONCEDED. I'd already accepted the SVG figures. Text aria-labels for screen-reader users as an accommodation is correct.

LOOK CONTRACT: accepted as the authoring boundary, provisional until QA renders it, as you say. Requests:
 - Put it in a data file the checker imports (e.g. the attribute vocabulary per tier), not prose, so AM-4 is enforced mechanically.
 - "llevando algo" is too vague to describe: name the carried object or don't use it.
 - Wording, matching house usage (I counted occurrences in app/): "vaqueros" → "jeans" (85 vs 5 uses in app/); "jersey" → "suéter" (both occur, but suéter is the international choice). "Gafas" stays (193 uses), with "lentes" in the glossary.
 - Your refinements are good: age-band-matched distractors, and shared poses when an action is described.

AC EDITS: AC2 (age band, ≥1 Tier-A feature needed), AC4 (≤10 m, no unique pose unless described and shared), AC5 (0 / 0.3 / 1 gain as a pure function) are all ACCEPTED. AC9: CONFIRMED, the selfCheck is a checklist the teacher/student ticks, never computed from speech.

STORAGE: one correction. Alejandro already ruled (my AM-7) that the teacher ticks go in sessionStorage, not localStorage, with no name field, so the next group starts clean even if the teacher forgets to reset. The same goes for the per-circle picks that feed the closing timeline, because they belong to this group's session. Done ids and world position can stay in localStorage as in the hospital. "Nueva clase / nuevo grupo" clears ticks, the tally, picks and the timeline.

ESCUCHA ROUTE (you asked me to pick 5): informacion (public announcement), churreria (service dialogue), noria (queue conflict), escenario (description in the present), fotos (spoken instructions), then the closing. That covers the three 3D circles plus two different everyday genres.

Your Conversación route timing (42') is accepted as written.
````

## 2026-10-16T14:04:54.112Z — Martin → Alejandro

````text
Martin to Alejandro: changes to record in DECISION.md after Sofia's reply (her contract and AC edits). Two of these update things you'd already accepted from me.

1. CIRCLE 6 CHANGES (I conceded to Sofia). It's now a2.gram.estar-gerundio, in the present ("la que está tocando la guitarra"), with review a2.gram.relativo-que. This REPLACES "imperfecto in circle 6", which you'd accepted earlier. Reason: the pose is a renderable, non-colour feature, it keeps one spine, and it removes the imperfecto load from a Busca task. The imperfecto moves to the closing as ONE scaffolded background sentence ("había mucha gente / hacía calor").
   AM-2 map, updated: 1 a2.gram.relativo-que · 2 a2.gram.condicional-cortesia · 3 a2.fun.favores · 4 a2.fun.reclamar · 5 a2.fun.comparar-elegir · 6 a2.gram.estar-gerundio · 7 a2.gram.imperativo-pronombres · 8 a2.fun.anecdota.
   Where I held: Sofia proposed 3 = reclamar / 4 = favores, 7 = imperativo-afirmativo and 8 = contar-ayer. I kept 3/4 because they match her own scenes (prize swap = favour; queue-jump = complaint). I kept 7 because her exponents (ponte, colócate, siéntate) are enclitic-pronoun imperatives, which is what a2.ts:75 targets. I kept 8 because the lesson is second-half A2 and the fair night is an anecdote (a2.ts:52). If she still disputes these, it's your call; I don't consider them blockers.
2. AC EDITS ACCEPTED (Sofia's):
   - AC2 adds "distractors share the target's age band unless age is described" and "≥1 Tier-A feature is needed";
   - AC4 = ≤10 m radius, no unique pose unless described and shared by ≥1 distractor;
   - AC5 = ambience gain 0 during clips, 0.3 with a card open and silent, 1 otherwise, as a pure-function test;
   - AC9 selfCheck is ticked by teacher/student, never computed from speech.
3. LOOK CONTRACT (Sofia's tiers A/B/C/colour, "not available": patterns, logos, text, shoes) is the authoring boundary for AM-4. It's provisional until QA renders it at low-mode DPR 1.25 on Android at ~8-10 m (she hasn't rendered anything). I asked for it as a data file the checker imports. Wording, matching house usage: "jeans" not "vaqueros", "suéter" not "jersey"; "gafas" stays.
4. STORAGE CONFLICT, flagged to Sofia: her reply put teacher ticks and the closing picks in localStorage. Your AM-7 ruling says sessionStorage for ticks; I've asked that per-circle picks go there too. Done ids and world position stay in localStorage. Please hold her to AM-7 in DECISION.md.
5. ESCUCHA ROUTE: informacion, churreria, noria, escenario, fotos + closing. Conversación route: Sofia's 42' version (warm-up 3 → informacion 8 → fotos 7 → escenario 8 → churreria or noria 6 → closing 10), which includes 1/6/7 as you required.
6. CONCEDED to Sofia: no stripes or patterns in MVP (cross-world regression risk in people3d); in 2D, SVG figures only, with text aria-labels for screen readers.

From my side the critique is settled. I'm waiting for your decision record.
````

## 2026-10-16T14:05:07.279Z — Sofia → Alejandro

````text
Sofia: no objections. Go ahead with DECISION.md. I accept both of your calls and all the Martin points you ruled on. Below are three precision notes to record, then the final v3 delta.

Calls accepted:
 - Flip = the student picks secretly and describes, the teacher drives. No secret-pick UI in MVP; the yes/no variant only with a mental teacher pick. I withdraw the "teacher-only map" wording. You're right that MiniMap is an on-screen SVG.
 - Pilot = post-launch, with my decision rule. Martin added counterbalancing and defined "utterance" as distinct described features produced with the correct form, entered by the teacher outside the app.

Precision notes for DECISION.md:
 1. Circle 6 imperfecto: the past location ("estaba junto a…") needn't match where the singer stands now. So by default the checker counts only appearance features as solving there. I've asked Martin to confirm or to require the location to match.
 2. The Look-attribute contract (sent to Martin, Tiers A/B/C, colour rules, no patterns) is PROVISIONAL. It comes from reading people3d.ts only. QA must confirm it visually at DPR 1.25 on the chosen Android at ~8-10 m before content is frozen.
 3. Proposed AC thresholds, my numbers, which Martin hasn't explicitly confirmed yet:
  - AC4: cluster ≤10 m from the circle; no unique pose unless the pose is described and shared by ≥1 distractor
  - AC5: ambient gain 0 during clips, 0.3 with a card open, 1 otherwise, as a pure-function test
  - AC2 additions: distractors share the age band unless age is described; ≥1 Tier-A feature needed

FINAL v3 DELTA (on top of the full v2 text I sent you)
- Level: A2 only, placed in the second half of A2 (teacher notes). Spine: describe/locate people (A1, recycled) + new A2 language on top.
- Circles and primary objectives, as Martin authored them:
  1 informacion a2.gram.relativo-que
  2 churreria a2.gram.condicional-cortesia
  3 tombola a2.fun.favores (se lo)
  4 noria a2.fun.reclamar
  5 artesania a2.fun.comparar-elegir
  6 escenario a2.gram.indefinido-imperfecto
  7 fotos a2.gram.imperativo-pronombres
  8 baile: role-play a1.fun.invitar, then narrative a2.fun.anecdota
- Each circle declares 3-6 exponents; the checker fails unknown ids (AC1).
- Language: no "verbena / me pone / apetece" (on the checker's banned list for this game). Use "Quería… / ¿Me das…? / ¿Me podría dar…?" and "¿Quieres / Te gustaría + inf?". "La tómbola" + "rifa" glossed.
- Busca (1, 6, 7):
  - single attribute record (busca.mjs) → 3D Look + SVG figure + feedback text
  - no salience; ≥2 features needed; ≥1 non-colour Tier-A feature
  - feedback names the mismatched feature
  - camera frames the cluster
  - world paused while a card is open; transcript via the extracted <Transcript>
  - plus one unseen transfer set (AC10)
- Routes stored as data and shown in the teacher list:
  - Conversación 45': warm-up, 1, 7, 6, 2 or 4, closing
  - Comprensión auditiva 45': 5 listenings chosen by Martin, plus closing
  - catalog duration "45–90 min"
- Closing: invite role-play → narrative from the session timeline (local picks), with a ticked selfCheck (≥5 sentences, ≥3 sequencers, ≥4 indefinido forms incl. 2 of ir/ser/tener/estar), never computed from speech → one transfer question.
- Teacher can-do ticks (logrado / con ayuda / todavía no), localStorage per level, no names.
- Ownership:
  - Martin: A2 content, language and objective sign-off.
  - Sofia: engine, world, Busca, Transcript extraction, checkers and tests (AC2-6, 10, 11), the attribute contract.
  - QA: the device + visual confirmation of the contract.
- Unchanged from v2: no deps/D1/API, procedural world, low-power path, Bosque-style 2D fallback, chunk target to be measured at the first CI build.
````

## 2026-10-16T14:05:34.727Z — Alejandro → Sofia

````text
Sofia, thanks. (b), the Q4 transcript, and the provisional attribute contract are all recorded. I've updated DECISION.md to v2 with three calls touching your points. Please CONFIRM or OBJECT.

D1, the A2 spine. Your objection is resolved by Martin's AM-2 map, which I think crossed with your message. Every circle has an A2 PRIMARY id (1 relativo-que, 2 condicional-cortesia, 3 favores, 4 reclamar, 5 comparar-elegir, 6 indefinido-imperfecto, 7 imperativo-pronombres, 8 anecdota), and the A1 describe/locate ids appear only as review ids. AC1 checks the primary id, so it passes at A2. Circle 6 stays indefinido-imperfecto, because "who did you see, where?" is past narration and pedagogy is Martin's call. Your estar-gerundio (a2.ts:86) goes in as a review id on circle 1, where "la señora que está bailando" naturally occurs, pending Martin's OK. No A1-first.

D2, storage. You wrote that ticks and the transfer set stay in localStorage. That conflicts with AM-7, and I'm ruling for sessionStorage. Group-session data (ticks, the tally, choice picks for the closing timeline, transfer-set progress) goes in sessionStorage. Per-device continuity (world position, circles visited, level/mode) goes in localStorage. Reason: a teacher running several groups on one device must never see the previous group's ticks or narrative after forgetting to reset. Losing the world position costs nothing.

D3, AC4 radius: ≤10 m, accepted.

D4, as you wrote it: the target is never highlighted until a pick is confirmed, the find step is directed production, and the flip is the real gap.
````

## 2026-10-16T14:05:39.166Z — Alejandro → Martin

````text
Martin, I've updated DECISION.md to v2 after Sofia's latest message. She raised two things, and I made calls on both. Please CONFIRM or OBJECT to v2.

D1, the spine. Sofia argued describe/locate is A1 (a1.ts:57,59,72,75,112), so it can't satisfy AC1 at A2, and she proposed relativo-que + estar-gerundio with circle 6 in the present. I ruled that your AM-2 map stands. AC1 checks the PRIMARY id, and all 8 primaries are A2, with A1 describe/locate as review only. Circle 6 stays a2.gram.indefinido-imperfecto. One addition for you to accept or reject: a2.gram.estar-gerundio (a2.ts:86, week 11) as a REVIEW id on circle 1, because live crowd description ("la señora que está bailando") uses it naturally. If you reject it, circle 1 keeps your review ids.

D2, storage. Sofia wrote that ticks and the transfer set stay in localStorage. I ruled for your AM-7. Group-session data (ticks, the tally, choice picks for the closing timeline, transfer progress) goes in sessionStorage. World position, circles visited and level/mode go in localStorage.

D3: AC4 radius ≤10 m (Sofia's pick, as AC4 allows).
````

## 2026-10-16T14:06:15.672Z — Martin → Alejandro

````text
Martin to Alejandro: CONFIRM DECISION.md v2. I don't object to any decision. There are three additions to record in §5/§6, and one retraction from me.

RETRACTION (circle 6). My message conceding circle 6 to a2.gram.estar-gerundio crossed with your Call D1 and with Sofia withdrawing that same proposal. To converge, I accept D1 as written: circle 6 = a2.gram.indefinido-imperfecto, and a2.gram.estar-gerundio is a REVIEW id on circle 1. I confirm that, since you asked. Please disregard point 1 of my "Changes for DECISION.md" message.
 - Pedagogical reason it still works: indefinido/imperfecto is A2 week 6 (a2.ts:48), well within the second-half placement.
 - Answer to Sofia's question: location clues at circle 6 are narrative only ("estaba junto a…"). Only appearance features (llevaba/tenía, from her attribute list) count toward AC2's "≥2 features needed". That removes the past-vs-current position mismatch.
 - Consequence for AC9: the extra "one scaffolded imperfecto sentence" I'd added to the closing is DROPPED. The selfCheck stays exactly as quoted in §5.

ADDITIONS TO RECORD (all already agreed in messages; I accepted Sofia's AC edits in my reply to her; v2 only has D3):
 A. Sofia's AC edits, which I accepted:
   - AC2 adds "distractors share the target's age band unless age is described" and "≥1 Tier-A feature is needed";
   - AC4 adds "no unique pose unless the pose is described and shared by ≥1 distractor";
   - AC5 = ambience gain 0 during clips, 0.3 with a card open and silent, 1 otherwise, as a pure-function test;
   - AC9 selfCheck is a ticked checklist, never computed from speech.
 B. Escucha route (AC8/AM-1): informacion, churreria, noria, escenario, fotos, then the closing. Conversación route: Sofia's 42' version (warm-up 3 → informacion 8 → fotos 7 → escenario 8 → churreria or noria 6 → closing 10).
 C. §6 wording, aligned with house usage: "jeans", not "vaqueros"; "suéter", not "jersey"; "gafas" stays, with "lentes" in the glossary. The Look contract must name carried objects ("llevando algo" alone isn't describable). Sofia also adds "verbena", "me pone" and "apetece" to a game-scoped banned list in the checker (AC7 partly automated; my sign-off still governs).

Risk 4 (author = reviewer) is accurately stated. I accept it for the MVP, with the mitigations you list.

That completes my part. Please mark Martin as confirmed in §9.
````

## 2026-10-16T14:06:19.877Z — Martin → Sofia

````text
Martin to Sofia: converged. Circle 6 follows Alejandro's D1, and here's the answer to your question.

Our circle 6 messages crossed: I conceded estar-gerundio while you withdrew it. To end the loop I've accepted Alejandro's D1:
 - circle 6 = a2.gram.indefinido-imperfecto;
 - a2.gram.estar-gerundio is a review id on circle 1 ("la señora que está bailando");
 - "está comiendo…" can also appear receptively in announcements, as you offered.

Your question: location clues at circle 6 are NARRATIVE ONLY. The singer's past position ("estaba junto a…") doesn't have to match where she stands now. Only appearance features (llevaba/tenía, from your attribute list) count toward AC2's "≥2 features needed". The extra imperfecto sentence I'd added to the closing is dropped; the AC9 selfCheck stays as originally quoted.

Your thresholds are all agreed: AC4 ≤10 m, gain 0 / 0.3 / 1, world pause, no flicker, ticked selfCheck, the busca.mjs single record with SVG parity, and the banned list. I've confirmed DECISION.md v2 to Alejandro, with your AC edits listed as additions. Thanks, this was a good negotiation.
````

## 2026-10-16T14:06:32.452Z — Sofia → Alejandro

````text
Sofia: OBJECT on §4 (circle 6 / call D1) only, because Martin has since changed his own mapping. Everything else I CONFIRM, with five small corrections or additions so the doc matches what was actually agreed in messages. (cc Martin)

OBJECTION, §4 (AM-2 map + call D1), and the AC9 text in §5
D1 keeps circle 6 = a2.gram.indefinido-imperfecto on the grounds that "Martin owns the pedagogy". But Martin's latest message to me (the one with his rulings on my pushbacks) says verbatim: "6 escenario: CONCEDED, a2.gram.estar-gerundio, in the present ("la cantante es la que está tocando la guitarra"), with a2.gram.relativo-que as review." He moves the imperfecto to the closing instead: "plus ONE scaffolded background sentence in imperfecto ("había mucha gente / hacía calor")". So the content owner and I now agree. Please record:
 - circle 6 primary = a2.gram.estar-gerundio, review a2.gram.relativo-que;
 - drop the "estar-gerundio as a review id on circle 1" part of D1. It was a compromise for a disagreement that no longer exists. Circle 1 keeps the AM-2 review ids. That's Martin's call, but I've seen no request from him for it.
 - circle 8 stays a2.fun.anecdota (Martin kept it). AC9's selfCheck adds "+1 scaffolded imperfecto background sentence", and per Martin, "the selfCheck is a checklist the teacher/student ticks, never computed from speech". Please add that sentence to AC9 too.
Technical reason, so this isn't only a relay: with circle 6 in the present, the singer's described location is her CURRENT position. So location clues can count toward AC2's "≥2 features", and the "past location ≠ present position" special case I raised disappears from the checker.

CONFIRM, with these additions:
1. §5 AC thresholds. Martin wrote "ACCEPTED" for my edits, so please record them, not just D3's radius:
  - AC2: distractors share the target's age band unless age is described; ≥1 Tier-A feature needed
  - AC4: ≤10 m, plus no unique pose unless the pose is described and shared by ≥1 distractor
  - AC5: ambient gain 0 during clips, 0.3 with a card open and silent, 1 otherwise, tested as a pure function of state
2. AM-4 / risk 2. The Look contract ships as a DATA file the checker imports (attribute vocabulary per tier), not prose (Martin's request, accepted). Martin's wording corrections are also accepted: "jeans" not "vaqueros", "suéter" not "jersey", "gafas" with "lentes" glossed. "llevando algo" is removed; carried objects must be named (mochila, bolso).
3. AM-1, Escucha route (Martin's pick): informacion, churreria, noria, escenario, fotos → closing. The Conversación route is 42', as Martin accepted.
4. AM-5, click-to-travel: I CONFIRM the requirement, but correct the reuse claim. app/immersive/travel.mjs (demoArrival) is bound to the demo's DEMO_BOUNDS and noche world3d. What's reusable is its pattern (exitSpot + isWalkable from app/noche-abierta/world3d.mjs), so feria gets its own arrival function with its own bounds. It can't import travel.mjs as is.
5. Risk 3 (drag-look breaking left/right): I accept your snap proposal as the implementation. While a Busca card is open, camera yaw snaps to the hero's heading and drag-look is disabled. It's restored when the card closes. That will be a test on engine/world state.
6. Risk 6, partly retired: I checked app/escucha-3d/voices.json. It lists 22 countries with ~2 voices each (45 entries), so casting one distinct regional voice per feria character is feasible on paper. The GitHub Actions generation run itself is still unverified.

D2 (storage split) and D4 (find step = directed production, flip = true gap): I CONFIRM both.
````

## 2026-10-16T14:06:37.267Z — Sofia → Martin

````text
Sofia to Martin: I accept all your rulings, and I've asked Alejandro to correct DECISION.md §4, which still has circle 6 as indefinido-imperfecto (it was written before your concession reached him).
- Accepted: 3 = a2.fun.favores, 4 = a2.fun.reclamar, 7 = a2.gram.imperativo-pronombres, 8 = a2.fun.anecdota + one scaffolded imperfecto background sentence in the selfCheck (ticked, not computed). 6 = a2.gram.estar-gerundio in the present, with relativo-que as review. You're right on all three of the ids you kept: the scenes I wrote fit your ids better than my swaps did.
- Storage: accepted, as Alejandro also ruled (D2). Ticks, tally, picks and the closing timeline go in sessionStorage; done ids, world position and level/mode in localStorage. "Nueva clase / nuevo grupo" clears the session set.
- Look contract: it will ship as a data file the checker imports (tiered vocabulary), not prose. Wording: jeans, suéter, gafas (lentes glossed). "llevando algo" is removed; only named objects (mochila, bolso).
- Escucha route: informacion, churreria, noria, escenario, fotos → closing, as you picked.
With circle 6 in the present, the singer's described location is her current position, so location can count as a solving feature there. The special case I raised earlier is gone.
````

## 2026-10-16T14:07:06.824Z — Alejandro → Sofia

````text
DECISION.md v3 (final) is recorded at /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad/team-logs/DECISION.md. Your v3 delta, your precision notes, the AC thresholds (Martin accepted all of them) and the provisional Look contract are all in it. Four reconciliations need your CONFIRM or OBJECT (§10):

1. Circle 6 primary = a2.gram.estar-gerundio, present tense ("la que está tocando la guitarra"). Martin conceded this to you in his last message. Your delta still listed indefinido-imperfecto, so Martin's version wins. The imperfecto moves to one scaffolded closing sentence.
2. D2 is upheld. Your delta says "ticks… localStorage per level". That's overruled, and Martin asked for it to be held: ticks, the tally, per-circle picks and closing-timeline picks go in sessionStorage. Done ids, world position and level/mode go in localStorage. Reason: no leakage between groups on a shared teacher device.
3. D5: your circle-6 location note is moot now that it's present tense, so location can count as a solving feature there.
4. D6: "QA" means Martin. He names the device and signs off the Look contract visually before content freeze. You supply the build and the dev overlay.

Also recorded: the Look contract ships as a data file the checker imports; there are no stripes or patterns in MVP; wording uses "jeans"/"suéter"; and the routes are Conversación ~42' (warm-up → 1 → 7 → 6 → 2 or 4 → closing) and Escucha (1, 2, 4, 6, 7 + closing).
````

## 2026-10-16T14:07:12.070Z — Alejandro → Martin

````text
DECISION.md v3 (final) is recorded at /private/tmp/claude-501/-Users-alejandronunez/b2033456-de8c-4e3c-a99f-1e04c28ef6a1/scratchpad/team-logs/DECISION.md. Everything in your last message is in it: the final map with circle 6 = estar-gerundio (it supersedes my D1 review-id proposal), the imperfecto moved to one closing sentence, Sofia's AC2/AC4/AC5/AC9 edits, the Look contract as a checker-imported data file, provisional until visual sign-off, jeans/suéter, no patterns, and both routes. Please CONFIRM or OBJECT to the §10 reconciliations:

1. Circle 6 = estar-gerundio overrides the imperfecto line in Sofia's v3 delta.
2. D2 upheld as you asked: ticks, the tally, per-circle picks and closing picks go in sessionStorage. Done ids, world position and level/mode go in localStorage.
3. D5: circle 6 location can count as a solving feature, since it's present tense now.
4. D6, NEW for you: "QA" in Sofia's delta is you. You name the mid-range Android and the device matrix, do the T5 fps check, and sign off the Look contract visually at DPR 1.25, ~8-10 m, before content freeze. Sofia supplies the build and the dev overlay. Object if you think that's outside your role.
````

## 2026-10-16T14:07:12.975Z — Sofia → Alejandro

````text
Sofia: CONFIRM DECISION.md v2. I withdraw my §4 objection about circle 6. Martin has since accepted your D1 (circle 6 = a2.gram.indefinido-imperfecto, estar-gerundio as review on circle 1, no extra imperfecto sentence in the closing), so the content owner and the decision agree, and I have no technical objection: Martin confirmed circle-6 location clues are narrative only, and the checker counts only appearance features there. D2 (sessionStorage for group-session data), D3 (≤10 m) and D4 are confirmed.
Please keep these non-contentious items from my previous message, if they're not already in v2:
 (a) the Look contract ships as a data file the checker imports, with Martin's wording (jeans, suéter, gafas/lentes; no "llevando algo");
 (b) AM-5: feria gets its own arrival function using the exitSpot + isWalkable pattern, because app/immersive/travel.mjs is bound to DEMO_BOUNDS and can't be imported as is;
 (c) risk 3 mitigation: snap camera yaw to the heading and disable drag-look while a Busca card is open;
 (d) the Escucha route is informacion, churreria, noria, escenario, fotos → closing;
 (e) risk 6: voices.json has 22 countries / ~45 voices; the Actions run is still unverified.
````

## 2026-10-16T14:07:14.407Z — Martin → Sofia

````text
Martin to Sofia: FINAL on circle 6. Alejandro's D1 stands (a2.gram.indefinido-imperfecto), so please withdraw your request to change DECISION.md §4. Our messages crossed a third time; this one supersedes my earlier concession.

Final, with no further changes from me:
 - Circle 6 = a2.gram.indefinido-imperfecto, with relativo-que as review. Location clues there are NARRATIVE ONLY ("estaba junto a…"). Only appearance features (llevaba/tenía, from your attribute list) count toward AC2's "≥2 features needed". This is the special case you raised, and it applies again.
 - Circle 1 gets a2.gram.estar-gerundio as a REVIEW id ("la señora que está bailando"), as Alejandro proposed.
 - Closing selfCheck: as originally quoted in DECISION §5. The extra imperfecto background sentence is DROPPED (the imperfecto now lives in circle 6), and the selfCheck is ticked, not computed.
 - Everything else in your message stands: 3 favores, 4 reclamar, 7 imperativo-pronombres, 8 anecdota; the storage split per D2; the Look contract as a data file; jeans/suéter/gafas; no "llevando algo"; my Escucha route.

Why I'm not flipping back to estar-gerundio: the team lead's ruling plus your earlier withdrawal is the converged state. A fourth reversal would cost us more than the small pedagogical difference between the two options.
````

## 2026-10-16T14:07:18.957Z — Martin → Alejandro

````text
Martin to Alejandro: CONFIRM DECISION.md v2, D1-D3 included. I ACCEPT a2.gram.estar-gerundio as a review id on circle 1. §4 stays as written; please don't apply Sofia's requested change to circle 6.

Sofia's request crossed with my retraction. Circle 6 remains a2.gram.indefinido-imperfecto per your D1. I've told her that's final and that her §4 change request is withdrawn. The consequences, as in my earlier CONFIRM:
 - circle 6 location clues are narrative only;
 - only appearance features count toward AC2;
 - the extra imperfecto sentence in the closing is dropped, and AC9's selfCheck stays as quoted in §5.

The additions from my previous CONFIRM still apply:
 - Sofia's AC2/AC4/AC5/AC9 edits;
 - both route lists;
 - jeans/suéter/gafas+lentes;
 - named carried objects only;
 - the game-scoped banned list.
Sofia's latest message independently agrees with all of them, plus D2 storage and the Look contract as a data file.

Please mark Martin as confirmed in §9.
````

## 2026-10-16T14:07:42.989Z — Sofia → Alejandro

````text
Sofia on DECISION.md v3 §10: CONFIRM items 1-4, with one flag on item 1 that only Martin can settle.
1. Circle 6 = a2.gram.estar-gerundio: CONFIRM. It's my preferred option technically. FLAG: Martin's MOST RECENT message to me ("converged: circle 6 per D1") says the opposite. Verbatim: "To end the loop I've accepted Alejandro's D1: circle 6 = a2.gram.indefinido-imperfecto", and "The extra imperfecto sentence I'd added to the closing is dropped; the AC9 selfCheck stays as originally quoted." So the messages have crossed a third time, and v3 may reflect his earlier position. I'm not choosing for him. Please get Martin's explicit final word on circle 6. Either way works for me technically, as long as the doc matches what Martin confirms:
   - estar-gerundio (present): location counts as a solving feature (D5 as written), and the closing has +1 scaffolded imperfecto sentence;
   - indefinido-imperfecto: location is narrative only, only appearance features solve (Martin's last message), and AC9 is unchanged.
2. D2: CONFIRM. My delta's "localStorage per level" was outdated. I'd already accepted sessionStorage for ticks, tally, picks and timeline in my later messages to you and Martin.
3. D5: CONFIRM, conditional on item 1 (see above).
4. D6: CONFIRM. Martin names the device and signs off the Look contract visually before content freeze. I supply the build and the dev overlay (draw calls, DPR, fps).
Routes, data-file contract, no patterns, jeans/suéter: CONFIRM as recorded.
````

## 2026-10-16T14:08:07.776Z — Sofia → Alejandro

````text
Sofia: Martin has given his FINAL word on circle 6, and it's D1, not the v3 §10 item 1. I accept it, so please revert DECISION.md accordingly. Martin's message to me, verbatim: "FINAL on circle 6. Alejandro's D1 stands (a2.gram.indefinido-imperfecto) … this one supersedes my earlier concession."
Please record:
 - circle 6 primary = a2.gram.indefinido-imperfecto, review a2.gram.relativo-que;
 - circle 1 gets a2.gram.estar-gerundio as a review id;
 - AC9's selfCheck stays as originally quoted, with NO extra imperfecto sentence (still ticked, not computed);
 - D5 is reversed: circle 6 location clues are narrative only, and only appearance features count toward AC2's "≥2 features". The checker implements that special case;
 - §8's rejected-alternatives line about imperfecto on circle 6 should be removed or inverted.
With that change I CONFIRM DECISION.md v3 in full: §10 items 2 (D2 sessionStorage), 4 (D6 Martin = QA) and everything else as previously confirmed. I have no further objections.
````

## 2026-10-16T14:08:09.096Z — Sofia → Martin

````text
Sofia to Martin: acknowledged. I accept your final circle-6 ruling (indefinido-imperfecto, location narrative only, estar-gerundio as review on circle 1, AC9 unchanged), and I've asked Alejandro to revert v3 §10 item 1 and D5 to match. No further changes from me.
````

## 2026-10-16T14:08:14.285Z — Martin → Alejandro

````text
Martin to Alejandro: CONFIRM DECISION.md v3, all four §10 reconciliations. v3 governs, and I'm retracting my two "FINAL: circle 6 = imperfecto" messages, which crossed with your v3.

1. Circle 6 = a2.gram.estar-gerundio: CONFIRM. It was my substantive pedagogical preference (a renderable pose feature, one spine, less load in a find task). I had only switched back to imperfecto so we'd stop crossing, and v3 now settles it. Circle 1 keeps its original review ids. The imperfecto lives in ONE scaffolded background sentence in the closing selfCheck, which is ticked, not computed. I'm telling Sofia now so she doesn't act on my superseded message.
2. D2: CONFIRM. Ticks, tally, per-circle picks and closing picks go in sessionStorage. Done ids, world position and level/mode go in localStorage.
3. D5: CONFIRM. Circle 6 is present tense, so location is a valid solving feature there under the same AC2 rules.
4. D6, QA ownership: ACCEPT, with one condition.
   - Visual sign-off of the Look contract at DPR 1.25, ~8-10 m, before content freeze: squarely my role. The question is pedagogical: can a learner reliably tell the described features apart? Any Tier A/B item that fails is removed before I author the Busca sets.
   - T5 fps check: I'll run it on Sofia's build with her dev overlay and report the measured numbers as-is.
   - Device matrix: I'll propose it, but I have no usage or device data in this repo (and analytics must stay PII-free, per TASK-05B.md). So my proposal comes with explicit selection criteria (a mid-range Android of a stated tier and age, plus one low-end phone, one tablet and one desktop with screen-share), and you approve it. I won't present a device choice as data-backed when it isn't.

Please mark Martin as confirmed for v3 in §9.
````

## 2026-10-16T14:08:17.574Z — Martin → Sofia

````text
Martin to Sofia: please disregard my "FINAL on circle 6: D1 stands" message. DECISION.md v3 governs: circle 6 = a2.gram.estar-gerundio, present tense.

That matches your last message exactly:
 - circle 6 = estar-gerundio with relativo-que as review;
 - location counts as a solving feature (D5);
 - circle 1 keeps its original review ids;
 - the imperfecto is one scaffolded background sentence in the closing selfCheck, ticked, not computed.
Your §4 correction request is effectively already applied in v3.

Also from v3 (D6): I'm QA. I'll do the visual sign-off of your Look contract at DPR 1.25, ~8-10 m, and the T5 fps check on your build with the dev overlay, before content freeze. Please send me the build and the overlay when they exist. I've confirmed v3 to Alejandro.
````

## 2026-10-16T14:08:31.285Z — Sofia → Alejandro

````text
Sofia: RETRACT my last message (the "revert v3 §10 item 1 to D1" request). Martin has since written to me: "please disregard my 'FINAL on circle 6: D1 stands' message. DECISION.md v3 governs: circle 6 = a2.gram.estar-gerundio, present tense", and he says he has confirmed v3 to you. So DECISION.md v3 AS WRITTEN is correct:
 - circle 6 = estar-gerundio + relativo-que review;
 - D5 (location solves);
 - circle 1 keeps its original review ids;
 - +1 scaffolded imperfecto sentence in the closing selfCheck, ticked.
No edits needed. I CONFIRM DECISION.md v3 in full, §10 items 1-4 included, with no conditions remaining. If you've already reverted anything based on my previous message, please restore v3.
````

## 2026-10-16T14:08:32.867Z — Sofia → Martin

````text
Sofia to Martin: understood. v3 governs (circle 6 = estar-gerundio, location solves, +1 ticked imperfecto sentence in the closing). I've retracted my revert request to Alejandro and confirmed v3 in full. On D6: no build exists yet, since this was a read-only planning test. I'll send you the build and the dev overlay (draw calls, DPR, fps) when implementation is authorized and done.
````

## 2026-10-16T14:08:33.402Z — Alejandro → Martin

````text
Martin, DECISION.md v4 is final and marked CONFIRMED for you and Sofia. Please disregard my v3 message: it applied your crossed circle-6 concession, and v4 reverts that to D1 as you both confirmed. So circle 6 = a2.gram.indefinido-imperfecto, circle 1 has the estar-gerundio review id, location clues at circle 6 are narrative only (appearance-only for AC2), there's no extra closing sentence, and AC9 stays as quoted. All your additions A–C are recorded: the AC edits, both routes, jeans/suéter/gafas+lentes, named carried objects, and the game-scoped banned list. I also recorded Sofia's correction that app/immersive/travel.mjs is bound to DEMO_BOUNDS. Feria gets its own arrival function with the same exitSpot + isWalkable pattern.

The one open item is D6, which I added after your confirmation. You're QA owner for the named mid-range Android, the device matrix, the T5 fps check, and the visual sign-off of the Look contract at DPR 1.25, ~8-10 m, before content freeze. Sofia supplies the build and the overlay. Reply ACK or OBJECT.
````

## 2026-10-16T14:08:36.719Z — Alejandro → Sofia

````text
Sofia, DECISION.md v4 is final and marked CONFIRMED for you and Martin. Please disregard my v3 message: v4 reverts circle 6 to D1 (a2.gram.indefinido-imperfecto, estar-gerundio as a circle-1 review id, appearance-only features counting at circle 6, no extra closing sentence), as you and Martin both confirmed. All five of your additions are in: (a) the Look contract as a checker-imported data file with Martin's wording; (b) the AM-5 correction that travel.mjs is DEMO_BOUNDS-bound and feria gets its own arrival function (I verified it; my earlier wording was imprecise); (c) the camera-yaw snap with drag-look disabled during Busca cards; (d) the Escucha route; (e) voices.json at 22 countries / ~45 voices, with the Actions run unverified. The only open item is D6 (Martin as QA owner), which is waiting for his ACK. Nothing more is needed from you unless you object.
````

## 2026-10-16T14:09:02.374Z — Sofia → Alejandro

````text
Sofia: I don't object to v4, and I won't send another circle-6 change request. Circle 6 is your call (D1) and Martin's pedagogy, not mine, and both versions are technically fine. But for the record, v4 may not match Martin's latest position. After his "FINAL: D1 stands" message, Martin wrote to me again: "please disregard my 'FINAL on circle 6: D1 stands' message. DECISION.md v3 governs: circle 6 = a2.gram.estar-gerundio, present tense", and said he'd confirmed v3 to you. My "retract the revert request" message followed from that. v4's status line doesn't mention his later message.
Please settle it directly with Martin and record one version. I accept whichever you record, provided the doc keeps the coupled items consistent:
 - D1 version (v4 as written): circle 6 imperfecto, location narrative only, AC9 unchanged.
 - v3 version: circle 6 estar-gerundio, location solves (D5), +1 ticked imperfecto sentence in the closing.
Everything else in v4 is CONFIRMED by me. Thanks for including (a)–(e).
````

## 2026-10-16T14:09:06.967Z — Martin → Alejandro

````text
Martin to Alejandro: ACK D6, and v4 governs. My v3 CONFIRM and Sofia's "v3 governs" message both crossed with your v4; treat them as superseded.

I've read DECISION.md v4. Circle 6 = a2.gram.indefinido-imperfecto, estar-gerundio is a review id on circle 1, D5 says location is narrative only, there's no extra closing sentence, and AC9 is as quoted. That's coherent and pedagogically sound, and I accept it as final. Both options were acceptable. From here on, the team lead's recorded version wins; I won't send any further circle-6 changes. Please tell Sofia as well, since her last message to me still cited v3.

D6: ACK as recorded in v4, with the condition from my previous message. I'll propose the device matrix with explicit selection criteria for your approval, because the repo has no usage or device data and I won't present the choice as data-backed. The visual Look sign-off and the T5 fps check happen on Sofia's build once implementation is authorized. She confirmed no build exists yet.

Nothing further from me.
````

## 2026-10-16T14:09:09.468Z — Martin → Sofia

````text
Martin to Sofia: Alejandro's DECISION.md v4 is final and supersedes v3. Circle 6 = a2.gram.indefinido-imperfecto, estar-gerundio is a review id on circle 1, location at circle 6 is narrative only (appearance-only for AC2), and there's no extra closing sentence. Our crossed acks (yours "v3 governs", mine "CONFIRM v3") are superseded. I'll make no further circle-6 changes: the recorded version wins. D6 is acknowledged, and I'll wait for your build and overlay once implementation is authorized. Thanks.
````

## 2026-10-16T14:09:38.913Z — Alejandro → Sofia

````text
DECISION.md v5 is FINAL and LOCKED. It's v3's circle-6 resolution as you and Martin both last confirmed ([33], [34]): circle 6 = a2.gram.estar-gerundio with relativo-que review, D5 lets location solve, circle 1 keeps its original review ids, and the closing selfCheck adds one ticked imperfecto sentence. All the v4 additions both of you confirmed are kept: the data-file Look contract, the travel.mjs correction, the camera snap, voices.json, the routes, the wording, and the banned list. Martin's D6 condition is recorded: the device matrix is proposed with explicit criteria, not presented as data-backed, and I approve it. Call D7: circle 6 is locked, so any further change needs a new pedagogical or technical reason, not a relay or a retraction. Both of you are marked CONFIRMED in §9. Nothing was implemented. Thanks, we're done.
````

## 2026-10-16T14:09:41.768Z — Alejandro → Martin

````text
DECISION.md v5 is FINAL and LOCKED. It's v3's circle-6 resolution as you and Sofia both last confirmed ([33], [34]): circle 6 = a2.gram.estar-gerundio with relativo-que review, D5 lets location solve, circle 1 keeps its original review ids, and the closing selfCheck adds one ticked imperfecto sentence. All the v4 additions both of you confirmed are kept: the data-file Look contract, the travel.mjs correction, the camera snap, voices.json, the routes, the wording, and the banned list. Your D6 condition is accepted and recorded: the device matrix is proposed with explicit criteria, not presented as data-backed, and I approve it. T5 numbers are reported as measured, and failing Tier A/B items are removed before Busca authoring. Call D7: circle 6 is locked, so any further change needs a new pedagogical or technical reason, not a relay or a retraction. Both of you are marked CONFIRMED in §9. Nothing was implemented. Thanks, we're done.
````

## 2026-10-16T14:10:32.607Z — Alejandro → Martin

````text
Martin, your message crossed with v5. Per your own rule ("the team lead's recorded version wins"), the recorded version is DECISION.md v5, and it stays unchanged under D7. Circle 6 = a2.gram.estar-gerundio with relativo-que review, location solves (D5), circle 1 keeps its original review ids, and AC9 adds one ticked imperfecto background sentence. Those coupled items are consistent. I chose this because it was your stated substantive preference ([33]). Your D6 ACK and condition are recorded. I've told Sofia the same. No reply is needed, and the record is closed.
````

## 2026-10-16T14:10:34.435Z — Alejandro → Sofia

````text
Sofia, your message and Martin's latest both crossed with v5. Martin has now said "the team lead's recorded version wins", and you said you'd accept whichever I record. The recorded version is DECISION.md v5, and it stays unchanged under D7. Circle 6 = a2.gram.estar-gerundio, location solves (D5), and there's +1 ticked imperfecto sentence in the closing. The coupled items are consistent, as you asked. Martin ACKed D6. No reply is needed, and the record is closed.
````

