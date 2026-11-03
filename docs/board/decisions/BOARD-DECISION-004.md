# BOARD-DECISION-004: COMP-001 pass 2 is parked until the board can see the competitor

- Date: 2026-11-03 (Tuesday SEO routine, scheduled cloud run)
- Drafted by: the facilitator, following W45 plan item 3 ([assessments/2026-W44.md](../assessments/2026-W44.md) §6): "If R0 is not fixed: COMP-001 pass 2 on #225, as a recorded decision, not by default".
- Decided by: Alejandro (COMP-001 lead); see §5.
- Status: **ADOPTED 2026-11-03** (§5).

## 1. Situation (VERIFIED this run unless marked)
- **R0 is still open.** The `searchconsole` read for `sc-domain:spanishcue.com` (last 28 days) returned Windsor's error "reads are paused because you have 6 accounts connected (facebook: 2, google_ads: 1, googleanalytics4: 1, searchconsole: 2) and your Free plan includes 1 account". So the SEO-compare branch of the plan is unavailable and no ranking or traffic figure exists for this run.
- **The three open gaps of pass 1** (#225 §5) all need the competitor's pages or a search-results vantage: a browser read of 3 activities behind Sucuri, a Spain/Mexico SERP check, and a browser re-check of prices.
- **This sandbox cannot reach them.** `curl https://www.profedeele.es/` from this run returns no HTTP response (code `000`) through the sandbox proxy; the same happens for `https://spanishcue.com/robots.txt`. There is no rank tool among the connectors.
- **The public comparison already exists, built outside the board.** `/alternativa-a-profedeele` (`app/alternativa-a-profedeele/page.tsx`, commits `63a70c40` on 2026-10-30 and `721849c7` on 2026-11-02) compares SpanishCue with ProfeDeELE and five other sites.
- **Its price claim differs from the board's evidence.** The page says ProfeDeELE's individual membership is «95,88 € al año», source `https://profedeele.gumroad.com/l/individual`, checked 2026-10-30. Pass 1 (#225, line 29) recorded «Materiales €192/yr» from `https://mas.profedeele.es/membresias`, checked 2026-10-16. Both may be true at once (two products, or two sales channels). Which one a teacher sees first is UNKNOWN.

## 2. Options considered
1. **Run pass 2 anyway from public, non-browser sources.** Rejected: Sucuri blocks page bodies (pass 1, VERIFIED 2026-10-17) and this sandbox reaches neither site now. The output would be guesses.
2. **Edit `/alternativa-a-profedeele` to the board's €192 figure.** Rejected: the page is another session's work with its own dated source, the two figures are not proven to conflict, and AGENTS.md rule 15 says the board must not silently overwrite another agent's intent.
3. **Park pass 2 and record exactly what it is waiting for** (chosen).

## 3. Decision
1. COMP-001 pass 2 is **parked**, not abandoned. It resumes the first time a run can reach `www.profedeele.es` with a real browser, or a rank or Search Console source is available. #225 stays a draft, as evidence.
2. The board's public comparison work is now **an accuracy check of `/alternativa-a-profedeele`**, not a new page. When access exists, the check confirms each competitor statement against a dated public source, and resolves the 95,88 € vs €192 question by naming both products if both exist.
   - **Added on Alejandro's sign-off:** the check covers both sides of every row. SpanishCue's own claims can be checked now, without outside access. Example: the "Precio individual" row (`app/alternativa-a-profedeele/page.tsx:42`) shows `PRICE_LABEL` = «US$15,50 al mes» (`app/material-ele/components.tsx:19`). The pricing page says US$15.50, but `docs/billing-contract.md:58` still says the server validates `1500` USD. Which figure is current is an open item for the Thursday reliability slot, which reads the billing source; it is not an edit.
3. No change to the page is made by this decision.
4. The Tuesday slot's work this run goes to the items that do not need outside access: the technical SEO audit of main and the sampled quality audit (W45 item 2).

## 4. What would change this decision
New evidence only: access to the competitor's pages, a SERP source, or R0 fixed (then the SEO compare of the plan runs first).

## 5. Sign-off
**APPROVED by Alejandro (COMP-001 lead), 2026-11-03, with one wording change, applied as the sub-item of §3.2.** One deviation from his text: he wrote «The owner should confirm which figure is current»; the facilitator routed that question to the Thursday slot instead, because the board does not ask the owner (STATUS, owner decision 2026-10-16). His reply is verbatim in [transcripts/2026-11-03-tuesday-seo.md](../transcripts/2026-11-03-tuesday-seo.md). Sofia and Martin were not asked to vote: the decision changes no product and parks an item that has no other way forward. Status: **ADOPTED**.
