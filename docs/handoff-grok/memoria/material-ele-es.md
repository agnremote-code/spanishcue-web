---
name: material-ele-es
description: Spanish organic SEO for ELE teachers: /material-ele cluster (hub, 6 levels, 16 topics), /alternativa-a-profedeele, /recursos (310 pages, hreflang), IndexNow; goal top-5 Google vs ProfeDeELE
metadata:
  type: project
  modified: 2026-10-31T06:45:00.000Z
---
Thread cmsg_01Gr5R4j3t2Yet65UcmhcVhA5Nwp54sQ8VutNPoBVKLo5J. Ale: «hacé lo IMPOSIBLE» (10-30); «apruebo todo, seguí con todo y aún más» (cmsg_01Gr5R4j3t2Yet65UcmhcVhADrhouHhTwEhR7AdUoecTVb, 10-31; cited as English-copy approval in docs/audits/recursos-es-english-additions-20261031.json). Why: earlier SEO ([[seo-foundation-pr126]], [[seo-grammar-cluster-phase2]]) was English-first; Spanish ELE queries are weak → opening.

LIVE (prod main 9b043e9, 2026-10-31 06:40Z):
- /material-ele hub + /material-ele/{a1..c2} + topics: ser-y-estar, indefinido-e-imperfecto, subjuntivo, por-y-para, preguntas-de-conversacion (60 q), juegos-para-clase-de-espanol, primera-clase-de-espanol (PR #300); gustar, imperativo, pronombres-de-objeto, conectores, estilo-indirecto (#306); comprension-auditiva (#309); verbos-reflexivos, futuro, preterito-perfecto, condicional (#314). Data app/material-ele/data.ts; tests material-ele-seo + material-ele-rendered (title ≤78, description 110–165, unique activity names, `___` in exercises, featured grammar lesson in liveLessonIds).
- Each page features its first live grammar class (#310; Ale: «ese formato vende»); PDF PrintButton (#308, publicRoots).
- /alternativa-a-profedeele (#307): only verifiable, dated, linked facts (ProfeDeELE individual €95.88/yr, checked 2026-10-30).
- /recursos + /recursos/<slug> (#312): Spanish twins of /resources, first real hreflang pairs via resourceLanguagePair in app/resource-seo.ts; ResourceCatalog locale prop.
- IndexNow (#313 script scripts/indexnow-ping.mjs + key public/644c3f7ecabe04d2135933a3118a3bb3.txt; #318 deploy step after smoke, new URLs only, continue-on-error; ran OK on first deploy).
- docs/seo-strategy.md §14–15. New first-person preterite examples need neutral-context entries in docs/audits/neutral-spanish-20261003/exemptions.json.

Outreach list: /mnt/project-files/seo/outreach-ele-20261031.md (Ale sends; Claude only drafts). Preply forums: never pitch Preply students.

Pipeline lessons: after pushing, confirm PR head SHA updated and mergeable_state not dirty. Back-to-back merges make intermediate deploys fail on the merge-lock guard; a main SHA with any failed check-run (other than `production`) cannot be redeployed by dispatch, only the next merge deploys. Threads CAN run `gh workflow run deploy-production.yml -f action=deploy -f mode=release -f sha=<sha> -f confirm="deploy <sha>". A PR touching deploy-production.yml once 403'd on auto-merge; splitting the workflow change into its own PR worked.

2026-10-31 16:30Z Ale: «te falta más poder… necesitamos monopolizar» → tanda 4 PR #319 (perifrasis-verbales, verbos-de-cambio, acentuacion, vocabulario-por-temas; queue next: expresiones de tiempo, comparativos, preposiciones, voz pasiva). Gmail DRAFTS created in Ale's Gmail (Ale sends): info@rutaele.es and redaccionmarcoele@marcoele.com; Todoele uses forms todoele.net/node/add/recursos and /node/add/herramientas_digitales (login). ELE sites 403 from container via curl (WebFetch works for some). Tanda 4 LIVE (prod e7e1bb5, 2026-10-31 16:57Z). Buffer MCP (org 6ad5ac13d06bf04b9331207f, free: 3 channels/10 scheduled posts, tz Asia/Vientiane): LinkedIn profile 6ae61fe32f1f5ed64833f3af (Ale) + LinkedIn page 6ae61fe32f1f5ed64833f3ae (SpanishCue). 8 posts scheduled 2026-11-02→07 (profile 19:00+07 Mon–Fri, page 20:30+07 Tue/Thu/Sat): free /material-ele pages + demo, no price, no figures. Ale sent RutaEle/marcoELE emails 2026-10-31; Todoele listing via Claude-in-Chrome prompt (/mnt/project-files/seo/prompt-chrome-todoele-buffer.md). GSC re-read ~2026-11-20 (filter spanishcue.com). Honest timeline told to Ale: 4–12 weeks; top-5 needs links.
