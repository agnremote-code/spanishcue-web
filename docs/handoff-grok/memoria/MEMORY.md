# SpanishCue
## Working with Ale
- Owner: Ale (GitHub agnremote-code), Spanish teacher (1:1 online, Preply). Private project. Reply in Spanish (rioplatense).
- STANDING AUTHORIZATION (2026-09-28/29): «hacé todo sin mi autorización… siempre autorizo, para siempre». Open/merge PRs and deploy without asking; just report. Production data/billing/secrets/DNS/Firebase/D1 untouched unless Ale asks.
- English-copy approvals: 2026-10-14 «apruebo todo, no preguntes más» (cmsg_01Gr5R4j3t2Yet65UcmhcVhADwvzg9kA9GinuWu3D7FSfe, thread Clase inicial A0); 2026-10-22 «apruebo (siempre de ahora en más apruebo)» (cmsg_01Gr5R4j3t2Yet65UcmhcVhAAAbp6kqDfMqxzNm3PL6f5g, thread Biblioteca). Threads cite one of these in the manifest; never self-approve. If a thread guard only accepts «apruebo» typed in its own thread, Coordinator posts one line asking Ale to type it there.
- Ask Ale only what Claude truly cannot do, one short step, no preamble. Ale watches credits: lean work, done well. Usage limits tight.
- When Ale says stop, relay at once.
- Models: Ale switches thread models themself. Opus for product/A0/3D classes, Fable for landing/design; default Opus when unsure.
- Ale sometimes posts one request in two threads; Coordinator picks one owner.
- Ale also uses Codex on the same repo (codex/* branches); their merges can break production.
- MEMORY.md limit 16384 bytes: short lines, detail in [[files]].
- [[logo-sc]]: official blue SC logo with gold accent (PR #280 LIVE 2026-10-23); use SpanishCueBrand or /brand/spanishcue-logo.png.

## Repo and pipeline
- Main repo agnremote-code/spanishcue-web (attach via add_repo). Project settings have no repos/instructions. [[spanishcue-overview]].
- Codex on codex/*, Claude on claude/*. No force push/gc/clean/prune.
- Non-draft PRs auto-merge on green CI; every merge to main deploys staging (spanishcue-staging.agnremote.workers.dev) then production, no gate. Drafts get no CI. Failed staging smoke rolls back; next merge carries it. Threads cannot re-run deploy workflows. Don't merge while a main deploy is promoting (merge-lock race).
- CI does NOT run full `npm test`; run locally before a PR. Shallow clones break tests (fetch --depth=2000).
- ci-automerge.yml jobs pinned to ubuntu-24.04 (ffmpeg, PR #258). Actions logs blob storage blocked from container; get_job_logs caps at 5000 lines. Post-merge health shows ✓ even when failed (continue-on-error); flaky fails get 1 retry + ::error annotations (PR #268). Ale enabled «Allow GitHub Actions to create PRs» 2026-10-22.
- English-copy approval guard (manifest): see approvals above.
- spanishcue.com and profedeele.es blocked from container (proxy 403); smokes rely on deploy workflow. Claude can READ prod D1 via Cloudflare MCP (SELECT only).
- Hosting on Ale's Cloudflare since 2026-09-29. PayPal Live Founder subscriber: never break it. Checkout via POST /api/billing/checkout. Never run a Live charge in tests. Open: delete private export file once Ale confirms; /api/admin/export (owner-only) exists.
- Pricing (2026-10-16): US$15,50/month, no trial, yellow «Suscribirse», Paddle card + PayPal (US$15). Google Ads label AW-17144698608/DmpfCIzWzp4dEPCtne8_. Ads NOT activated: never activate campaigns or spend.
- [[demo-misma-clase]]: free Noche/Hospital demos = the same PRO game with locked districts/floors/circles (2026-10-30). Regenerate demo JSON after content edits.
- FREE LINEUP (PR #256, 2026-10-21, [[home-free-classes]]): Noche abierta (centre free, barrios PRO), Hospital (entrance + reception), Clase inicial (full), Latinoamérica al Oído, US 3D class (ID 36). «Probar una clase gratis» → /demo/noche-abierta. Leaving free area → popup «Compra PRO · US$15,50 al mes». PRO homepage: no try button, news carousel on top.
- Gotcha: server-side auth must cover RSC requests (`/cuenta.rsc`).
- Gotcha: public /assets/* chunks skip the Worker (scripts/worker-first-routes.mjs); never add a `!/assets/*` negative.
- Gotcha: scripts/protect-client-assets.mjs serves JS chunks not in `publicRoots` as private (403). Any component a free/public page renders must be in publicRoots or the page shows «Algo salió mal». Test public pages as anonymous on the built Worker.
- [[security-audit-20261021]]: LIVE (PR #252, #254). Worker checks raw path prefixes, router treats `//` as `/` (308 first). ABUSE_LIMITER on checkout/founder/speech POSTs. Speech STT never works. Device limits pending Ale's cards in thread cmsg_01Gr5R4j3t2Yet65UcmhcVhA5LQ2mxW6JtGsEz5TYEbump.

## Lessons
- [[once-clases-nuevas-20261031]]: 11 new conversation classes (6 3D + 5 classic) approved 2026-10-31, one by one, in order.
- [[academias-b2b]]: academy panel + licences LIVE 2026-10-27 (PR #286).
- LIBRARY (PR #269, 2026-10-22): two routes, Gramática + Conversación. Conversación = Mundos 3D (isImmersiveWorld from immersiveWorldGameByLessonId in app/page.tsx; new 3D world moves automatically) + Clásicas.
- [[spanishcue-lesson-style]]: route per lesson + app/lesson-catalog.ts entry. Catalog copy changes need tests/helpers/batch1-preservation.mjs entry.
- PERMANENT RULE (2026-10-15): every NEW Conversation/Listening class is a 3D immersive world with both modes (Conversación + Comprensión auditiva) in the same world.
- RULE: all country classes are 3D like Estados Unidos ([[paises-3d]], 11 LIVE 2026-10-21, PRs #262–#265, app/mundo-3d).
- RULE [[3d-sin-fantasmas]] (2026-10-21): mascot/NPCs never inside an object; shared escapeSolids + tests/3d-sin-fantasmas.test.mjs (WORLDS registry; add new worlds).
- 3D A0/A1: simpler bilingual with 4–6 keywords per scene (PR #211). Gap: Noche street scenes A1 share A2 text.
- All 3D games: Space = jump, N = nitro, touch buttons on mobile. All tested only on simulated GPU.
- RULE (2026-10-30): every 3D world with music has the shared volume slider (app/escucha-3d/MusicVolume.tsx); see [[mas-alla]].
- [[portadas-clasicas]]: classic conversation + Más allá covers as animated film-poster key art (Canva AI art, PR #305, 2026-10-30); all 50 done (PR #315 for Máquina/Regla).
- [[charlas-3d]]: extra conversation circles on every person/landmark in all 3D worlds (2026-10-30, app/charlas-3d).
- [[mas-alla]]: Más allá: cielo e infierno (ID 243, /mas-alla, PRO A0–C2): 10s hospital death intro, Umbral choice, 12 encounters with creative answer mechanics (no lists), «Saltear directo a la pregunta», listening per zone. Ale wants it as the masterpiece. PR #292 LIVE 2026-10-29 20:16Z; thread cmsg_01Gr5R4j3t2Yet65UcmhcVhAUCdLveWHdt7vSwzqpkmRs3. 41 voice circles + Infierno flame circles LIVE via PR #295.
- [[madrid-infectada]]: ID 242, /madrid-infectada, PRO A0–C2, one big city, zombie hordes, 30 survivors × 4 bands (PR #272 LIVE 2026-10-22).
- [[estados-unidos-3d]]: FREE US class (ID 36) A0–B1, 6 states × 5 spots + 24 listenings (PR #255).
- [[hospital-san-casi-vivo]]: ID 240, A0–C2, 147 neural-voice audios (PRs #197, #200, #201).
- REJECTED: «El Recadero de Puerto Neón» (ID 222): /el-recadero-de-puerto-neon stays 404, ID never reused. Ale hates generic neon dashboards, coins/ranking HUDs.
- Noche abierta (ID 223, /noche-abierta, A0–C2): [[noche-abierta-v2]], [[noche-abierta-ciudad-viva]]. Rules (2026-10-07): adult audience, no disclaimers, graphic ok but pedagogical and A2-accessible; carried object changes every scene. Floating-piece NPCs are «inadmisible». A0 bilingual + browser speech voices (PR #191). Conversation questions about real life, not weapons (PR #198).
- Reino de la Rosa Dormida (ID 238, 3D RPG): [[reino-rosa-dormida]]; per-student saves browser-only (localStorage).
- Casino «El Gran Meridiano» (ID 237, /marketing-de-casinos): [[casino-gran-meridiano]].
- [[escucha-3d-listening]]: Comprensión auditiva in all 3D worlds; audio built by GitHub Actions (edge-tts blocked in container).
- Autoestudio/Homework (/autoestudio, A1–C2): [[autoestudio-course]], [[autoestudio-bilingue]]. RULE (2026-10-20): bilingual (English under Spanish) up to B2 for all students; C1/C2 Spanish only. Every week covers reading, writing, listening, speaking; mascot on every screen. Do not re-author levels.
- Grammar class design (2026-10-13): theory FIRST («Entender»), then practice; clean light modern look, no filler boxes, no heavy bold; keep left numbered sidebar; mascot on sides (11 existing poses); images for verb tenses. Reference profedeele.es. 7-section live format for all grammar classes (PR #174); gaps: auto writing review only in ID 230, /autoestudio/clase/<id> preview still old format.
- Teacher-mode guide lines are READ BY THE STUDENT on shared screen: descriptive («Tú lees… y tu alumno repite»), never «pide al alumno que…». Ale loves the teacher/«Por mi cuenta» split with hidden answers.
- [[clase-inicial-a0]]: ID 239, /gramatica/clase-inicial, bilingual, Argentine-grandparents story, free.
- Grammar thumbnails: public/grammar-thumbnails/<id>.webp via scripts/grammar-thumbnails (new class needs entry; test enforces). Hover videos: ids in app/conversation-preview-videos.ts (new class needs a clip; test enforces). Test Chromium lacks H.264: stub WebM.
- [[grammar-course-a0-c2]]: all 236 units + G237–G240 LIVE 2026-10-21 (PRs #232–#250). Audit /mnt/project-files/gramatica/curso-a0-c2/auditoria-cobertura-pcic-mcer.md. Library «Todos» shows groups A1 y A2 / B1 y B2 / C1 y C2.
- [[live-class-per-student]]: «Con profesor» picks a student («Mis alumnos») and saves progress in the teacher's account; «Por mi cuenta» stays in browser (PR #196).
- Account panel: single «Mis alumnos» tab ([[cuenta-dashboard-2026-10-13]]); Homework errores ([[homework-errores-recomendaciones]]); teacher progress ([[autoestudio-teacher-progress]]).

## SEO and paid traffic
- [[newsletter-captacion]]: email popup → gift PRO class 393, Resend segment «SpanishCue · Newsletter profes ELE» (Resend shared with LogoCut; never use «General»). PR #303.
- [[material-ele-es]]: Spanish ELE SEO: /material-ele (16 topics), /alternativa-a-profedeele, /recursos (310 pages, hreflang), IndexNow; all LIVE 2026-10-31. Top-5 goal vs ProfeDeELE; all older SEO was English.
- [[google-ads-profes-2026-10-30]]: teacher Google Ads plan (ES+US Search → /lp/google-teachers, keep US$15,50), doc + Windsor facts.
- [[plan-anual-referidos]]: annual US$129/yr Paddle price pri_01m684zshhms5kzznb7s3kjfss (PR #316); referrals PR #317 (discount dsc_01m686383k32zpnm3t5geedqss).
- [[seo-foundation-pr126]], [[seo-grammar-cluster-phase2]], [[seo-phase3-cleanup-2027]]: canonicals, clusters, /lp variants, docs/seo-strategy.md; ?lang= URLs 301 to clean URL. GSC connected; indexing requested 2026-10-15; re-read GSC early November before copy changes. Windsor GSC connector mixes in logocutsvg.com: filter by URL.
- [[two-audiences]]: /para-profesores, /aprender-espanol LIVE. New-page smokes must tolerate prod 404 until promoted.
- [[lp-google-teachers]], [[lp-paid-landing-redesign]]: /lp/google-teachers Spanish default, ES/EN switch, tour autostarts. Never invent testimonials, results or customer counts.
- Checkout/subscription/tracking owner thread cmsg_01Gr5R4j3t2Yet65UcmhcVhAPE6XWXHFFtnX5XXr9xY6tp ([[checkout-ads-readiness-20261014]]). Ready for paid traffic once Ale confirms in Paddle that https://spanishcue.com/api/billing/paddle/webhook receives transaction.* and subscription.* events. No real charge ever tested.