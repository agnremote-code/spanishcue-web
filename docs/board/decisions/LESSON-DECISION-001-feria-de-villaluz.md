# DECISION — "La feria de Villaluz" (3D Conversación class), A2 MVP

- Date: 2026-10-16
- Decided by: Alejandro (Team Lead / Technical Director), with Sofia (3D Experience Dev) and Martin (Pedagogical Director / QA)
- Status: **v5, FINAL and LOCKED. CONFIRMED by Sofia ([34]) and Martin ([33]).** v5 = v3's circle-6 resolution plus all of v4's additions. **Lock (call D7):** circle 6 went back and forth four times because messages crossed. Both owners' latest messages and both stated *substantive* preferences point to estar-gerundio. The flips to imperfecto were explicitly procedural ("to stop the crossing", Martin [33]). So it's locked as estar-gerundio. Any further change needs a new pedagogical or technical reason, not a relay or a retraction.
- Source: read-only shallow clone of `agnremote-code/spanishcue-web` at `3dd0ac4`

> **Nothing was implemented.** This was a read-only planning test. No file in the repository was changed, and nothing was pushed, opened as a PR or issue, built, deployed, or written to any production service. Every path below was read from the clone. Every number that says "target" or "estimate" has not been measured.

## 1. Decision

We'll build **"La feria de Villaluz"** as a new **Conversación** class (catalog id 241, PRO, `conversationMode: "play"`, collection "Modo Play", route `/la-feria-de-villaluz`, game id `feria`). It's one procedural three.js world: a fictional pan-Hispanic town fair at dusk with 8 white circles. **Conversación** and **Comprensión auditiva** both run in the same world through the shared `ModeSwitch`, as the owner rule requires (AGENTS.md "New Conversation and Listening classes are 3D worlds (permanent rule, owner 2026-10-15)"; CLAUDE.md:186).

The MVP is **A2 only**. Its single pedagogical spine is **describing and locating people**. The 3D-specific mechanic is **"Busca y describe"** (circles 1, 6 and 7). An announcement describes a person, and the class finds them in the crowd by giving the teacher directions relative to the hero. Then, in the flip, a student secretly picks an NPC and describes it so the teacher can find it.

Honest claim, which all three of us accept: the 3D earns a learning gain only in circles 1/6/7, through viewpoint-relative spatial language, listening mapped onto bodies in a crowd, and an information gap. The other 5 circles are setting. That's acceptable under the owner rule, provided the 1/6/7 circles sit on the spine and on the 45-minute route.

## 2. Repo constraints the decision rests on (verified)

| Constraint | Source |
|---|---|
| One Cloudflare Worker, vinext 0.0.50 + Vite 8 + `@cloudflare/vite-plugin`, Next 16 / React 19, D1 via drizzle | `package.json`, `worker/index.ts`, `db/schema.ts`, CLAUDE.md §1a |
| `three@0.186.1` already a dependency. No R3F, physics or GLTF pipeline | `package.json` |
| New Conversation/Listening classes = 3D world, both modes, reuse `app/escucha-3d` + `app/noche-abierta` people/hero/movement, neural TTS via `scripts/generate-escucha-3d-audio.py` (never `speechSynthesis`), teacher list, no-WebGL fallback. Reference implementation: `app/hospital-san-casi-vivo` | AGENTS.md (rule section), CLAUDE.md:186 |
| Lazy 3D chunk (`next/dynamic` ssr:false) | `app/hospital-san-casi-vivo/HospitalGame.tsx:24` |
| 2D "mapa sin movimiento" forced on reduced motion, `onFail` on WebGL failure | `app/bosque-de-los-hongos-gigantes/BosqueHongos.tsx:21,46` |
| Low-power path | Bosque `World3D.tsx:98-103`, Hospital `World3D.tsx:63-67` |
| No explicit KB/FPS budget exists in the repo | `scripts/build-verified.sh`, `scripts/validate-artifact.sh`, `vite.config.ts` (none found) |
| Teacher-led, screen-shared, ~45 min, input → production → conversation. CEFR/PCIC are references only | `docs/SPANISHCUE_HANDOFF.md` §3, §6 |
| "Sin grabación ni puntuación. El profesor decide cuándo continuar." | `BosqueHongos.tsx:53` |
| Free speech is not auto-scored | `app/api/phonetics/speech-attempt/route.ts:39` (`kind:'manual'`) |
| Neutral international Spanish, tú | `docs/LANGUAGE_POLICY.md`, `npm run test:language` |
| FREE/PRO from the ledger. PRO chunks are protected | handoff §21, `scripts/protect-client-assets.mjs`, `scripts/validate-artifact.sh` |
| D1 changes require the migration runbook | AGENTS.md, `docs/releases/MIGRATION_RELEASE.md` |
| Objective ids | `app/autoestudio/curriculum/objectives/a1.ts`, `a2.ts` (all 15 ids in §4 verified to exist) |

## 3. Scope

### MVP (A2 only)
- **World:** `app/la-feria-de-villaluz/`, which mirrors the hospital: `page.tsx`, `layout.tsx`, `FeriaGame.tsx`, `World3D.tsx` (lazy), `feria3d.ts` (procedural only: booths, InstancedMesh string lights, Ferris wheel, bandstand, no GLB), `layout.mjs`, `engine.mjs` (pure, `node --test`), `story.mjs`, `levels/a2.mjs`, `busca.mjs`. Flat ~80×80 m area with no floors.
- **Listening:** `app/escucha-3d/content/feria/a2.json`, plus `feria` registered in `app/escucha-3d/games.mjs` (`levels: ['A2']`, 8 spots, `ownListening: true`).
- **Shared code change:** extract an exported `<Transcript>` from the inline markup at `app/escucha-3d/Escucha.tsx:296`. It's used by both listening and Busca. `tests/escucha-3d.test.mjs` must stay green.
- **8 circles:** 1 informacion (lost child, Busca) · 2 churreria · 3 tombola · 4 noria · 5 artesania · 6 escenario (missing singer, Busca, **present tense**: "la cantante es la que está tocando la guitarra") · 7 fotos (arranging people, Busca location variant) · 8 **baile** (closing; replaces "verbena").
- **Teacher drives by default.** Students give directions relative to the hero. The follow camera keeps the hero's left on screen-left (`app/noche-abierta/world3d.mjs:359,390`, per Sofia). Click-to-travel from the teacher list reuses `app/immersive/travel.mjs`. Free-roam stays optional.
- **Flip (single screen):** a student secretly picks an NPC, then describes it and gives directions, and the teacher drives to find it. There's no secret-pick UI.
- **Fallbacks:** a no-WebGL list, a user-pickable "mapa sin movimiento" (forced on `prefers-reduced-motion`), `onFail` / context loss → 2D, and "Usar el mapa" while loading. Busca in 2D is a grid of 4 **SVG figures** (no text labels) plus a small top-down plan. Both views render from **one data record** in `busca.mjs`.
- **Low-power path:** pointer:coarse or width < 760 → DPR ≤ 1.25, no AA, no shadow maps (blob shadows), crowd ~10 NPCs instead of ~24, emissive bulbs with no extra point lights.
- **Audio:** ~14 pre-generated TTS clips (8 own listenings of 70–120 words + ~6 Busca announcements), one cast voice per character.
- **Session data:** described in AM-7 below, as clarified by calls D2 and D2-upheld. No server, no D1, no API, no recording, no automated speech scoring, no PII.
- **Catalog:** an entry in `app/lesson-catalog.ts` with `levels: ['A2']` and duration "45–90 min". `access-policy.ts` stays untouched. Premium chunks are protected as for the other 3D worlds.
- **Checks:** `scripts/check-feria.mjs`, plus `tests/la-feria-de-villaluz.test.mjs` wired into `package.json` `test` and `scripts/test-worker.mjs`.

### Later (each its own PR, against the same ACs re-run for that level)
- A1, which maps onto `a1.gram.preposiciones-lugar` / `a1.fun.direcciones`, and B1, each genuinely authored (`docs/conversation-family-authoring.md`). A0 and B2–C2 come after those.
- A teacher-private second-client view, for a real hidden-target flip.
- Writing evidence to `autoestudio_progress` or the error log. That needs its own decision and probably a migration.
- The 3D-vs-2D teacher pilot (AC12 / AM-8).

## 4. Owners

| Area | Owner |
|---|---|
| Engine, world, shell, Busca 3D + 2D, `<Transcript>` extraction, fallbacks, perf | **Sofia** |
| **Look-attribute contract**: the list of features `people3d` (`app/noche-abierta/people3d.ts:46`) renders distinctly at fair distance in low mode | **Sofia** |
| Checkers and tests for AC2, AC3, AC4, AC5, AC6, AC10, AC11, plus a check that every Busca description uses only listed attributes (AM-4) | **Sofia** |
| A2 content authoring: 8 scene texts, 8 listening JSONs, ~6 Busca sets + 1 transfer set, teacher notes, two routes, closing | **Martin** |
| Content and language sign-off: AC1, AC7, AC8, AC9 | **Martin** (the independent checks are `npm run test:language` plus Sofia's attribute checker) |
| QA: device matrix, named mid-range Android, visual sign-off of the Look contract before content freeze, T5 fps check | **Martin** (D6) |
| Technical review, deadlock calls, DECISION.md, pilot go/no-go after launch | **Alejandro** |

A2 circle → primary objective [review ids], **final (locked, D7)**, confirmed by Martin [33] and Sofia [34]:
1 `a2.gram.relativo-que` [a1.voc.descripcion-personas, a1.voc.ropa-colores] · 2 `a2.gram.condicional-cortesia` [a1.fun.pedir-restaurante] · 3 `a2.fun.favores` [a2.gram.se-lo] · 4 `a2.fun.reclamar` [a2.gram.condicional-cortesia] · 5 `a2.fun.comparar-elegir` [a2.gram.comparativos] · 6 **`a2.gram.estar-gerundio`** [a2.gram.relativo-que] · 7 `a2.gram.imperativo-pronombres` [a1.gram.preposiciones-lugar] · 8 `a2.fun.anecdota` [a1.fun.invitar (role-play first), a2.disc.secuenciar].
Why estar-gerundio at circle 6 (Martin [33]): the pose is a renderable non-colour feature, it keeps one spine, and it takes the imperfecto load out of a find task. The imperfecto moves to **one scaffolded background sentence** in the closing selfCheck ("había mucha gente / hacía calor"), which is ticked, not computed. Circle 1 keeps its original review ids, so the estar-gerundio review-id compromise from D1 is dropped. Martin held 3/4/7/8 against Sofia's alternatives (reasons in log [21]), and Sofia adopted his numbering.
Teacher notes place the lesson in the second half of A2 (relativo-que is week 18, `a2.ts:140`).

**Call D1 (Alejandro), on the A2 spine dispute. The AC1 reasoning stands; the circle-6 part is superseded by D7.** Sofia objected that describing and locating people is A1 content (a1.ts:57,59,72,75,112), so it can't satisfy AC1 at A2. Resolution: AC1 is about the circle's **primary** id, and every circle in AM-2 has an A2 primary id. The A1 describe/locate ids appear only as review ids. So the spine is "describe and locate people" as the recycled A1 base, and the new A2 language rides on it, which is exactly what AC1 checks. Circle 6 stays `a2.gram.indefinido-imperfecto`, because its task ("who did you see, where?") is past narration and Martin owns the pedagogy. Sofia's `a2.gram.estar-gerundio` (a2.ts:86) is added as a **review id on circle 1**, since the live crowd description ("la señora que está bailando") is where it naturally occurs. That needs Martin to confirm it. If it's rejected, circle 1 keeps its AM-2 review ids. **Superseded:** the content owner later made estar-gerundio circle 6's primary id, and both confirmed that ([33], [34]). The AC1 reasoning above (primary ids are A2, describe/locate is recycled A1) still holds.

## 5. Acceptance criteria

### AC1–AC12 (Martin, verbatim)
- AC1 Every circle declares one primary objective id from app/autoestudio/curriculum/objectives/<level>.ts and 3-6 target exponents. The checker fails on a missing or unknown id.
- AC2 Every find-person set: target matches its description; each of 3-4 distractors differs in ≥1 described feature; at least 2 features are needed to rule out all distractors; at least 1 distinguishing feature isn't colour. (checker)
- AC3 Every wrong pick returns Spanish feedback naming at least one mismatched feature. (test)
- AC4 Candidate cluster within a fixed radius of its circle (you pick the number, e.g. ≤12 m); target has no unique emissive or highlight material. (test on layout.mjs)
- AC5 Ambient audio gain ≤ silence/ducked during any announcement or listening clip; world paused while a task card is open. (test on engine state)
- AC6 Listening JSON passes app/escucha-3d/content/README.md rules and the per-level word ranges. (existing checker)
- AC7 Language: the neutral-Spanish guard passes, plus a manual review list of Spain-centred items (me pone, apetece, verbena…) resolved. (test:language + my sign-off)
- AC8 Teacher route: one documented 45-minute Conversación path and one 45-minute listening path per level, each ending in the closing production. (content review)
- AC9 Closing: role-play, then the session-based narrative with the selfCheck above, then one personal transfer question. (content + test that the timeline renders from session state)
- AC10 Transfer check: one unseen find set per level, not reused from circles 1/6. (checker)
- AC11 The fallback 2D path reaches every circle, every listening, every find set and the closing with identical content. (test)
- AC12 Pilot measure, after launch, not a ship blocker: in ≥5 teacher-led classes, ≥70% of first find attempts are correct and the student's secret description lets the teacher find the person with ≤2 follow-up questions. Below that, the descriptions or distractors get reworked.

The "selfCheck above" in AC9 is: "Give it a selfCheck like autoestudio SpeakingTask (curriculum/types.ts): ≥5 sentences, ≥3 sequencers (primero/después/luego/al final), ≥4 indefinido forms including at least two of ir/ser/tener/estar."

### Agreed amendments (Martin's text; agreed in messages)
- AM-1 (to AC8): the Conversación route MUST include circles 1, 6 and 7. Both routes live in the teacher list, the remaining circles are extensions, and the catalog duration reads "45–90 min".
- AM-2 (to AC1): the circle→objective map in §4.
- AM-3 (to AC2/AC11): the 2D fallback uses SVG figures, not text attribute cards. The SVG figures render the same described features as the 3D Look, and the AC2 checker runs on both.
- AM-4 (to AC2): descriptions may only use attributes on Sofia's Look-attribute list. Sofia's checker enforces this.
- AM-5: every circle task, the transfer check and the closing can be completed using click-to-travel from the teacher list alone. Free-roam stays optional. **Correction (Sofia [26], verified):** `app/immersive/travel.mjs` (`demoArrival`) imports `DEMO_BOUNDS` and can't be reused as is. Feria gets its own arrival function following the same pattern (`exitSpot` + `isWalkable` from `app/noche-abierta/world3d.mjs`) with its own bounds. My earlier "reuse travel.mjs" wording was imprecise.
- AM-6: the role flip runs on one shared screen. The student secretly picks an NPC, then describes it and gives directions, and the teacher drives to find it. There's no secret-pick UI. A second-client teacher view is post-MVP.
- AM-7: the recap shows a non-persisted tally (e.g. "5/6") labelled as the group's result in this session. Ticks (logrado / con ayuda / todavía no) are per circle for "el grupo en esta sesión" in sessionStorage, with no name or student field. The world position stays in localStorage. A visible "Nueva clase / nuevo grupo" reset with confirm clears ticks, the tally and the closing timeline, and the label reads "Notas de esta sesión: no se guardan por alumno". No server, no D1, no recording, no automated speech scoring.
- AM-8 (to AC12): the 3D-vs-2D comparison on circles 1/6/7 is counterbalanced across teachers. "Descriptive utterances" means distinct described features produced (feature + correct form). Teachers log on paper or a form, never in the app.
- AM-9: each level ships in its own PR against these ACs re-run for that level. The catalog `levels` array lists only shipped levels.

### Calls added in v2 (Alejandro)
- **D2, storage split (Sofia [18] said localStorage; AM-7 says sessionStorage).** The ruling is that **group-session data goes in `sessionStorage`**: can-do ticks, the tally, choice picks for the closing timeline, and transfer-set progress. **Per-device continuity goes in `localStorage`**: world position, circles visited, and the level/mode choice. Reason: a teacher running several groups on one device must never see the previous group's ticks or narrative, even after forgetting to reset (Martin's AM-7 rationale). Losing the world position costs nothing pedagogically. The "Nueva clase / nuevo grupo" reset still clears the sessionStorage set explicitly.
- **D2 confirmed by both** ([25], [26], [27]). Sofia's [22] delta said localStorage, and she has since confirmed D2: ticks, the tally, the per-circle choice picks and the closing-timeline picks go in sessionStorage. Done ids, world position and level/mode go in localStorage.
- **D5, circle 6 location (confirmed [33], [34]).** Circle 6 is present tense, so the singer's described location is her current position. Location counts as a valid solving feature there under the same AC2 rules, and the checker needs no special case.
- **D6, QA owner (ACCEPTED by Martin [33], with a condition; confirmed by Sofia [31]).** "QA" in Sofia's delta means **Martin** (Pedagogical Director and QA Reviewer). He names the mid-range Android and the device matrix, and he signs off the visual confirmation of the Look contract at DPR 1.25 and ~8–10 m **before content is frozen**. Sofia supplies the build and the dev overlay (draw calls/DPR/fps). **Martin's condition, which I accept:** there's no usage or device data in the repo, and analytics must stay PII-free (TASK-05B.md). So Martin proposes the device matrix with **explicit selection criteria** (a mid-range Android of a stated tier and age, one low-end phone, one tablet, one desktop with screen-share), and Alejandro approves it. It must not be presented as data-backed. T5 fps numbers are reported as measured. Any Tier A/B Look item that fails the visual check is removed before Busca authoring.
- **D3, AC4 radius.** Sofia picks **≤ 10 m**, as AC4 allows ("you pick the number").
- **D4, find step on one screen.** The target is never highlighted until a pick is confirmed. The find step counts as directed production, because the teacher heard the audio too. The flip (AM-6) is the true information gap. Two devices (a 1:1 lesson) work with the same client and get no special design.

### AC edits accepted by Martin [21] (Sofia's numbers)
- AC2 adds: distractors share the target's age band unless age is described, and ≥1 **Tier-A** feature is needed.
- AC4: ≤ 10 m radius, and no unique pose unless it's described and shared by ≥ 1 distractor.
- AC5: ambience gain 0 during clips, 0.3 with a card open and silent, 1 otherwise, tested as a pure function.
- AC9: the selfCheck is a ticked checklist (teacher or student) and never computed from speech. It gets **one added item: +1 scaffolded imperfecto background sentence** ("había mucha gente / hacía calor").
- AM-4 boundary: Sofia's Look contract (Tiers A/B/C plus colour rules; NOT AVAILABLE: patterns/stripes, logos, text, shoes) ships as a **data file the checker imports**. Wording follows house usage: "jeans" not "vaqueros", "suéter" not "jersey", "gafas" stays with "lentes" in the glossary. Carried objects must be named (mochila, bolso), so "llevando algo" isn't allowed.
- AC7 is partly automated: the checker has a game-scoped banned list ("verbena", "me pone", "apetece"). Martin's sign-off still governs. MVP has no stripes or patterns (cross-world regression risk in `people3d`).

### Teacher routes (Martin [21], Sofia [22]), stored as data and shown in the teacher list
- **Conversación (~42'):** warm-up 3' → 1 informacion 8' → 7 fotos 7' → 6 escenario 8' → 2 churreria **or** 4 noria 6' → closing 10'.
- **Comprensión auditiva (~45'):** informacion, churreria, noria, escenario, fotos, then the closing.
- Closing: invite role-play → narrative from the session timeline (sessionStorage picks) with the ticked selfCheck → one transfer question.

### Technical ACs (Alejandro, from Sofia's proposal)
- T1 No new npm dependencies, no D1/drizzle changes, no new API route. `access-policy.ts` unchanged. `npm run validate:artifact` passes (PRO chunks not public).
- T2 The 3D world loads lazily. The route's initial chunk doesn't include three.js.
- T3 Fallback triggers: no WebGL, `onFail`, context loss, `prefers-reduced-motion` (forced 2D), user toggle, and "Usar el mapa" while loading. All of them keep the same level and progress.
- T4 Low-power path as in §3.
- T5 Budget, which is a **target until measured**: the lazy feria World chunk gzip ≤ the hospital World3D chunk gzip, measured from `dist/` in CI. The first CI build records the actual numbers, and after that the check is a gate. Low mode ≤ 120 draw calls (`renderer.info.render.calls`, dev overlay). ≥ 30 fps on one QA-named mid-range Android (manual). No new binaries except ~14 A2 mp3s.
- T6 All audio comes from the TTS pipeline, never `speechSynthesis`. Real audio state is reported, and no accent is claimed that the engine doesn't produce.
- T7 Every listening and every Busca announcement has a transcript (teacher-revealable "Ver texto", and student-visible after the 2nd listen). Colour is never the only cue. Figures have attribute aria-labels.
- T8 `tests/escucha-3d.test.mjs` and the existing `npm test` suite stay green after the `<Transcript>` extraction.

## 6. Language-policy resolutions (Martin)
- "verbena" → "el baile" (circle id `baile`, e.g. "El baile de la plaza"). It isn't used anywhere, not even glossed.
- "¿me pone…?" → "Quería…, por favor" / "¿Me das…, por favor?" / "¿Me podría dar…?" (formal).
- "¿te apetece + inf?" → "¿Quieres + inf?" (default) / "¿Te gustaría + inf?".
- Keep the title "La tómbola" and add "rifa" to the glossary (minor, not a ship blocker).

## 7. Open risks
1. **The budget is unmeasured.** No build was run. The hospital chunk size is unknown, so T5 can't be a gate until the first CI build.
2. **Look-attribute legibility in low mode.** Sofia's contract (Tiers A/B/C, colour rules, NOT AVAILABLE: patterns such as "rayas") is provisional, since nothing was rendered. QA must confirm it on the chosen Android at DPR 1.25 and ~8–10 m. If `people3d` can't render glasses or a cap distinctly at ~10 m with DPR 1.25, the attribute list shrinks and AC2 ("≥2 features, ≥1 non-colour") gets hard to satisfy. Sofia has to deliver the list before Martin authors Busca.
3. **Viewpoint stability.** "Left of the hero = screen-left" only holds while nobody is drag-looking (`world3d.mjs:359`). A teacher who rotates the camera breaks students' directions. **Mitigation (agreed, Sofia [26]):** while a Busca card is open, camera yaw snaps to the hero's heading and drag-look is disabled. Both are restored when the card closes. This is tested on engine/world state.
4. **Overlapping author and reviewer for content.** Martin both authors and signs off. This is mitigated by `test:language`, Sofia's attribute checker, and Alejandro's technical review, but there's no second pedagogical reviewer.
5. **The relativo-que placement (A2 week 18)** narrows when teachers can use the lesson. The teacher notes have to make that clear.
6. **Audio pipeline.** It runs in GitHub Actions, outside this test. `app/escucha-3d/voices.json` lists 22 countries and ~45 voices (checked by Sofia), so one regional voice per character is feasible on paper. The Actions generation run itself is unverified.
7. **Shared-engine change.** Extracting `<Transcript>` touches every existing Escucha game, which is a regression risk.
8. **The 3D value is unproven.** AC12 / AM-8 is post-launch. If 3D doesn't beat 2D on descriptive utterances, Busca reverts to 2D-only and the world becomes a scene host (Sofia's own decision rule).
9. **Scope estimate.** About 2,000–2,500 engineering lines plus the content is Sofia's rough estimate, not measured.

## 8. Rejected alternatives and why
- **v1 shipping A1/A2/B1 (Sofia's original):** too much generated audio and QA at once. One level done well first. Sofia agreed and cut to A2.
- **A1 week 8 (preposiciones de lugar) as the MVP (Martin's original):** it reads as a Gramática lesson, which already exists as "La Torre de las Coordenadas" (id 47, `app/lesson-catalog.ts:227`). At A1, first exposure plus the control load is also too much. Martin conceded. The A1 version of the feria is a later phase.
- **Teacher-secret pick on the on-screen MiniMap (Sofia's flip d):** the hospital MiniMap (`HospitalGame.tsx:55`) is a visible SVG, so under screen-share there's no information gap. Replaced by AM-6.
- **Text attribute cards in the 2D fallback:** these turn listening into word matching. Replaced by SVG figures (AM-3).
- **Skipping Busca in the fallback:** the core mechanic has to degrade, not disappear (AC11).
- **Automated scoring of free speech / recording:** it contradicts the house rule (`BosqueHongos.tsx:53`) and `speech-attempt/route.ts:39`.
- **Persisting evidence in D1 / `autoestudio_progress` in the MVP:** it needs a migration (`MIGRATION_RELEASE.md`) and creates student-data and PII scope. Deferred.
- **A teacher-private second client or a server-synced session:** new infra. Post-MVP.
- **New 3D dependencies (R3F, physics, GLB assets):** there's no need, since three.js plus procedural geometry already ships in 4+ worlds.
- **Circle 6 = indefinido-imperfecto, with past location as narrative only (D1, briefly v4):** it loads a find task with the imperfecto and makes the checker special-case past vs. current location. Both owners' substantive preference is estar-gerundio (D7).
- **estar-gerundio as a review id on circle 1:** a compromise for a disagreement that no longer exists. Dropped.
- **Teacher ticks and picks in localStorage (Sofia [22]):** they'd leak between groups on a shared teacher device. sessionStorage instead (D2).
- **Stripes/patterns in MVP:** cross-world regression risk in `people3d` (Martin conceded to Sofia).
- **Treating the full world as "a 45-minute class":** dishonest given 8 circles × 2 modes. We use two 45-minute routes and "45–90 min" instead, matching the Hospital's honest labelling.

## 9. Confirmations
- **Sofia: CONFIRMED v3 in full** ([34]): "I CONFIRM DECISION.md v3 in full, §10 items 1-4 included, with no conditions remaining." She retracted [32]. Her v4 additions (a)–(e) had already been confirmed ([27]).
- **Martin: CONFIRMED v3** ([33]): "CONFIRM DECISION.md v3, all four §10 reconciliations." He accepted D6 with the device-matrix condition recorded above. His additions A–C had already been confirmed ([25], [28]).
- **After v5 ([37], [38]; both crossed with v5):** Martin wrote "the team lead's recorded version wins; I won't send any further circle-6 changes" and ACKed D6. Sofia wrote "I accept whichever you record, provided the doc keeps the coupled items consistent." **v5 stands unchanged under D7.** Its coupled items are consistent: estar-gerundio, location solves (D5), and +1 ticked imperfecto sentence in AC9.
- v5 differs from v3 only by adding the v4 additions both had already confirmed, plus the D6 condition and the D7 lock. No new substantive decision was introduced.

## 10. Version history
- v1: initial record. v2: calls D1–D4. v3: circle 6 = estar-gerundio, D5, D6. v4: reverted circle 6 to D1 after crossed messages, and added the agreed additions. **v5: restored v3's circle 6 per both teammates' latest confirmations, kept the v4 additions, recorded Martin's D6 condition, and locked circle 6 (D7).**
