# COMP-001: ProfeDeELE benchmark (evidence pass 1)

- Owner: Alejandro (CEO/SEO lead). Pedagogical comparison: Martin. UX/performance comparison: Sofia.
- Dates: 2026-10-16 (competitor sources) and 2026-10-17 (our side).
- Status: **pass 1 complete, with known gaps (§5).** This is evidence for a later backlog decision. It is not a decision itself.
- Labels:
  - **VERIFIED**: fetched or queried, with the source given;
  - **UNKNOWN**: not observable with our tools;
  - **HYPOTHESIS**: a claim to test, never to be treated as fact.

## 0. Access limits (why some cells are UNKNOWN)
- `profedeele.com` and `www.profedeele.com` 301 to `https://www.profedeele.es/`. VERIFIED (curl, 2026-10-16).
- Every HTML page on `www.profedeele.es` answers **307** behind Sucuri/Cloudproxy, a bot challenge (`server: Sucuri/Cloudproxy`), so non-browser fetches can't read page bodies. The XML sitemaps and robots.txt are served. VERIFIED.
- Their robots.txt blocks AI crawlers (GPTBot, ClaudeBot, CCBot, Applebot-Extended, Bytespider, Amazonbot and others). VERIFIED: https://www.profedeele.es/robots.txt
- `mas.profedeele.es/membresias`:
  - 2026-10-16: the body was readable;
  - 2026-10-17: it returns a JS shell (12 characters of text) to curl, so the prices below can't be re-verified today. They are VERIFIED as of 2026-10-16.
- Our WebSearch tool is US-only, so Spanish/European SERPs can't be observed. **No ranking claims are made for either site.**

## 1. Their offer
| Item | Value | Label / source |
|---|---|---|
| Activity inventory | **421** `actividad` URLs; 137 categories, 17 formats, 39 themes, 6 levels (A1–C2) | VERIFIED: https://www.profedeele.es/sitemap_index.xml and the child sitemaps |
| Formats | dictado, lecturas, actividad breve (audio / lectura / vídeo), explicación, podcast, ponte al día, unidades didácticas, examen, canción, escape room, kahoot | VERIFIED: act_formato-sitemap.xml |
| 3D / immersive format | none in the format taxonomy | VERIFIED absence in the taxonomy; page bodies UNKNOWN |
| Maintenance | lastmod: 94 activities in 2026-09 and 141 in 2026-10 (of 421). lastmod = modified, not published | VERIFIED count; new-publication rate UNKNOWN |
| Language / audience | all slugs and copy are in Spanish: a site for ELE teachers | VERIFIED (slugs); audience mix is a HYPOTHESIS |
| B2B | "Red de escuelas ProfeDeELE": 12 partner schools in Spain | VERIFIED: page-sitemap.xml |
| Pricing (annual only, VAT incl.) | Formación €84/yr; **Materiales €192/yr**; Materiales y Formación €228/yr; Centro €264/yr + €36 per extra teacher. No monthly plan | VERIFIED 2026-10-16: https://mas.profedeele.es/membresias |
| Free tier | "the interactive activities"; the downloadable materials are paid | VERIFIED 2026-10-16 (their wording, same page) |

## 2. Our side (VERIFIED from the repo at main 585ecc7 and Search Console)
| Item | Value | Source |
|---|---|---|
| Catalog | 132 lessons: 58 Gramática, 57 Conversación, 9 Escucha, 5 Fonética, 3 Vocabulario | `app/lesson-catalog.ts` |
| Free lessons | 10 (2 per category), by the FREE ledger | `app/access-policy.ts` `freeLessonIds` |
| Immersive 3D worlds | 5, each with Conversación + Comprensión auditiva in the same world (noche, bosque, casino, reino, hospital) | `app/escucha-3d/games.mjs` |
| Price | **USD 15/month** (Founder offer, the first 1,000) | `app/billing-config.ts` (`APPROVED_PRICE_CENTS = 1500`) |
| Indexable surface | 244 sitemap URLs, including 125 `/resources/*` teacher pages | live https://spanishcue.com/sitemap.xml, 2026-10-17 |
| Search visibility, 90 days | 30 pages with ≥1 impression; **0 of the 125 `/resources/*` pages**; ~200 impressions, a handful of clicks | Windsor `searchconsole`, `sc-domain:spanishcue.com`, last_90d |
| Countries, 90 days | US 39 impressions; Spain 11; Mexico 11; Vietnam 6; long tail ≤3 each | same, by country |
| Spanish-language teacher queries | essentially none: "preguntas para clase de conversacion en español" (1 impression, position 29), "horizontes de ele" (1 impression, position 50) | same, by query |

## 3. Searches they win
**UNKNOWN.** We can't observe Spain/EU SERPs, and we have no rank tool. What is VERIFIED:
- their whole inventory targets Spanish-language ELE-teacher queries;
- ours is English-slug and English-copy, with Spanish lesson content.
**HYPOTHESIS:** direct SERP overlap today is small. "Beating ProfeDeELE" on their own queries would mean a Spanish-language teacher surface, which is a positioning decision and not an SEO tweak.

## 4. Where SpanishCue can be clearly better (gap table)
| # | Dimension | ProfeDeELE | SpanishCue | Assessment |
|---|---|---|---|---|
| G1 | Format | PDFs, readings, podcasts, Kahoot, escape rooms (VERIFIED) | browser 3D worlds with conversation and listening in one world (VERIFIED, 5 worlds) | **Clear differentiation (VERIFIED).** Whether teachers value it is a HYPOTHESIS, to test via lesson_reports/E1 |
| G2 | Price entry | €192/yr for materials, annual only (VERIFIED 2026-10-16) | USD 15/month, monthly (VERIFIED) | **Lower commitment** for a teacher trying it out. Annual cost is higher if kept 12 months (USD 180 vs €192; currency effects UNKNOWN) |
| G3 | Breadth | 421 activities, 137 categories (VERIFIED) | 132 lessons (VERIFIED) | **We lose on volume.** Don't compete on count; compete on depth per unit (3D + listening + levels) |
| G4 | Level coverage per unit | 6 levels as a taxonomy; per-activity level depth UNKNOWN | 3D worlds are authored per level, A0–C2 | HYPOTHESIS: one world reusable across a whole school's levels is a B2B argument against their "Centro" plan |
| G5 | English-speaking teachers and schools | Spanish-only copy (VERIFIED) | English UI with Spanish content (VERIFIED) | HYPOTHESIS: an underserved segment for them. Our GSC country mix (US first) is weakly consistent with it |
| G6 | Discoverability | an established site; ranking UNKNOWN | 0 impressions on 125 teacher pages | **Our binding constraint.** Fix our own indexability before any head-to-head SEO |

## 5. Gaps in this pass (next steps, owner of each)
1. A browser read of 3 matching activities (contraste de pasados B1, por/para, one conversation activity) beside our equivalents. Martin scores the pedagogy against the Indexable Teacher Page standard; Sofia scores UX/performance. This needs a real browser (Sucuri).
2. A Spain/Mexico-vantage SERP check for: "actividades ELE", "fichas español", "preguntas de conversación", "recursos para profesores de español", "actividades ELE B1". This needs a rank tool or a manual check; it's UNKNOWN until then.
3. Re-verify their prices in a browser (the page went JS-only on 2026-10-17).

## 6. Implications for the backlog (input to the next board decision, not a decision)
- Keep investing where G1 is unique: PRO 3D Conversation/Listening worlds (already rank 1 under BOARD-DECISION-002).
- G6 comes before any competitive SEO. PR #224 is the first step: it makes the 3D worlds' teacher pages say "3D" and fixes the level contradictions. The next step is to measure the `/resources/*` indexing state once R1 (the Page-indexing report) is available.
- A Spanish-language teacher surface (for G5 and §3) is a positioning question for a later board decision. It should not start before G6 shows our existing pages can earn impressions.
