# Search Console pull, Tuesday SEO routine 2026-11-24

- Source: Windsor.ai connector `searchconsole`, account `sc-domain:spanishcue.com`, pulled 2026-11-24 about 02:15–02:40Z by the facilitator. Latest day with data: **2026-11-21**.
- Every figure below was read from the connector in this run (VERIFIED) unless it is labelled otherwise. Weighted positions are impression-weighted means of the per-row positions the connector returned, computed by the facilitator.
- Page-level rows omit anonymized queries, so page sums can differ from site totals. The method is the same as on 2026-11-17, so the two pulls compare.
- Interpretation is kept short and labelled. Search Console's indexed count is not exposed by this connector, so it is UNKNOWN (R1).

## 1. Site totals (date dimension)
| Window | Clicks | Impressions | Weighted position |
|---|---|---|---|
| 28 days, 10-25..11-21 | **148** | **2,417** | **13.20** |
| ISO W46, 11-09..11-15 (7 days) | 49 | 678 | 13.29 |
| ISO W47 so far, 11-16..11-21 (6 days) | **71** | **1,276** | 12.73 |
| Same 6 weekdays a week earlier, 11-09..11-14 | 46 | 554 | 13.71 |

- The previous 28-day pull (10-18..11-14, on 11-17) was 77 clicks, 1,132 impressions, position 18.58.
- W46 here (49 / 678) matches the W47 assessment's W46 figures exactly, which cross-checks the method.
- Daily rows for 10-20..11-21 were read; the largest day is 11-17 (20 clicks, 248 impressions).

## 2. Generated /material-ele topic-level pages (BOARD-DECISION-007 §2 table, same method)
Pattern: `/material-ele/{gramatica|vocabulario|funciones|cultura|formatos}/<topic>/<level>`.

| Measure (28 days, 10-25..11-21) | Value |
|---|---|
| Level pages with ≥1 impression | **56** |
| Clicks | **54** |
| Impressions | **487** |
| Weighted position | **9.61** |
| Share of site clicks | 54 / 148 = **36%** (11-17 pull: 34 / 77 = 44%) |
| Level pages with impressions but 0 clicks | 30 of 56 |
| Level pages generated on main `dce909f` | **350** (generator run with esbuild in this session). It was 377 on 11-17. Non-board grammar commits of 11-17 and 11-18 (`22b1badb`, `1bca011d`, `39d0d768`, `a158e7a3`, `3720a656`, `f767cfc5`: "grammar topics list only classes that teach them") moved **27** level paths into `retiredTemaLevelPaths` (5 → 32 entries; each 308s to its topic page). The H7 test still passes. One of them had impressions: `gramatica/perifrasis-verbales/c1` (5 impressions, position 5.4) |

The share fell while the clicks rose: the rest of the site grew faster (HYPOTHESIS on cause: the guides and topic pages also gained impressions).

## 3. The ten most-clicked level pages (the H1/H8 sample), before and after the 11-17 deploy
The 11-17 release (`ca7fb3a0`, production 03:05Z on 11-17) removed copy from other levels on these pages. "Before" is 11-10..11-16 (7 days), "after" 11-17..11-21 (5 days). Format: clicks / impressions / position.

| # | Page | 28 days | Before | After | Copy shown now (goals / prompts) |
|---|---|---|---|---|---|
| 1 | formatos/comprension-auditiva/a1 | 8 / 50 / 11.4 | 2 / 10 / 14.0 | 3 / 24 / 10.8 | 3 / 0 |
| 2 | formatos/comprension-auditiva/b1 | 7 / 37 / 10.8 | 5 / 10 / 12.6 | 2 / 23 / 8.1 | 3 / 0 |
| 3 | cultura/fiestas-y-tradiciones/b2 | 4 / 32 / 5.1 | 2 / 14 / 4.3 | 1 / 10 / 7.1 | 0 / 0 |
| 4 | formatos/juegos-de-conversacion/b2 | 4 / 46 / 7.4 | 1 / 15 / 5.1 | 0 / 24 / 9.8 | 6 / 0 |
| 5 | formatos/juegos-de-conversacion/a2 | 3 / 15 / 5.5 | 1 / 4 / 6.3 | 1 / 2 / 3.0 | 6 / 3 |
| 6 | formatos/juegos-de-conversacion/c1 | 3 / 22 / 12.9 | 1 / 5 / 16.2 | 2 / 15 / 12.4 | 0 / 0 |
| 7 | formatos/comprension-auditiva/c1 | 2 / 20 / 8.8 | 1 / 5 / 8.8 | 1 / 11 / 9.2 | 3 / 0 |
| 8 | formatos/juegos-de-conversacion/a1 | 2 / 19 / 12.6 | 1 / 7 / 9.3 | 1 / 9 / 14.4 | 0 / 0 |
| 9 | cultura/fiestas-y-tradiciones/b1 | 2 / 11 / 4.8 | 1 / 6 / 5.7 | 0 / 1 / 4.0 | 0 / 0 |
| 10 | vocabulario/emociones-y-sentimientos/b2 | 2 / 8 / 5.6 | 0 / 3 / 5.7 | 1 / 3 / 4.7 | 0 / 0 |

Reading (HYPOTHESIS): no consistent movement. Some pages rose and some fell, on 1–24 impressions per window, which is noise. The 11-17 risk ("pages that lost copy drop") is **not visible yet**. One to watch: juegos-de-conversacion/b2, position 5.1 → 9.8 on 15 → 24 impressions.

## 4. Queries (query × page, ≥4 impressions, 28 days)
Only 24 pairs reach 4 impressions. The ones that matter:
- `spanish tutor cost`: 55 impressions, position 8.4, 0 clicks, on `/guides/online-spanish-tutor-rates` (non-board /guides stream). A snippet/intent issue, not a ranking one (HYPOTHESIS).
- `comprension auditiva a1` / `a1 español`: 17 impressions, position ~10, 1 click. `comprension auditiva a2` (three spellings): 20 impressions, position ~8.2, 0 clicks.
- `spanish tips for teachers`: 10 impressions, position 5.4, 0 clicks, on `/spanish-teacher-resources`.
- `spanish conversation questions` and variants: 35 impressions at positions 12–54 on `/spanish-conversation-questions` (236 impressions in total for the page, 6 clicks).
