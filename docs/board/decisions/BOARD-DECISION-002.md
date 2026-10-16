# BOARD-DECISION-002: PRO grammar and 3D classes first (reprioritization)

- Date: 2026-10-17
- Decided by: Alejandro (CEO), with Sofia (CPIO) and Martin (CLRQO). Majority vote with one objection round.
- Status: **PENDING: resume.** The session stopped on 2026-10-17 (owner shutdown). Received so far: **Martin's proposal and vote** (2026-10-17; full text on branch `claude/martin-reprio-proposal-20261017` at b18fa20, `docs/board/proposals/2026-10-17-martin-reprio.md`). Sofia's proposal and vote are still missing.
- Still missing on resume:
  1. Sofia's proposal: the build effort for LES-001 Feria A2 (single implementer?) and for a PRO grammar class on the GRAMÁTICA engine, plus her vote.
  2. ~~Martin's proposal~~ RECEIVED (see §2).
  3. The majority vote and one objection round, then LOCK: the order, the GROW-001 build pause (interim: Sofia told to HOLD; Martin's content stays on main), and the first PRO unit with its implementer.
  4. Update STATUS.md in this same branch, then ONE docs PR. Interim state: PR #222 merged at 585ecc7, so the pipeline was free when the session stopped.
- Supersedes: the backlog order in BOARD-DECISION-001 v3 §5, only where §3 below says so. All non-votable rules in BOARD-DECISION-001 §3.1 (N1–N4, the LQG, the FREE/PRO ledger) remain in force.

## 1. Owner decisions recorded (verbatim)
1. **Priority (2026-10-17):** "give priority to grammar and 3d conversation/listening premier pro classes (keeping our style)".
   - Board reading: new PRO content (grammar classes and 3D Conversation/Listening worlds) comes before GROW-001 (the free preview) and other SEO-led items.
   - "Keeping our style" means the existing house formats exactly. For grammar, that's the GRAMÁTICA collection's established lesson engines and patterns. For 3D, it's the AGENTS.md 3D-world rule and the hospital-san-casi-vivo / noche-abierta reference implementations. No new formats.
2. **Save work (2026-10-17):** "always save the work in case internet goes down".
   - Board reading: commit locally after every coherent step, and push the `claude/*` branch right after each commit (pushing never deploys). If a push fails, keep committing locally. Drafts go into files, never only into messages.
   - The main session keeps a read-only local backup every 10 minutes (~/SpanishCue-Board-Backup).

## 2. Proposals
### Martin (CLRQO), received 2026-10-17
- **Grammar gaps (his audit; to be checked on resume):** no class takes these as its subject: a1.gram.gustar, a1.gram.tambien-tampoco, a2.gram.superlativos, a2.gram.doler. Narrow gaps: a1.gram.obligacion, a2.gram.indefinidos. Partial: a2.gram.comparativos (112), a2.gram.estar-gerundio (115/119).
- **Pick:** «Gustar y verbos como gustar», A1. Primary a1.gram.gustar, secondary a1.gram.tambien-tampoco, A2 extension a2.gram.doler. Five exponents. It's a grammar-classroom JSON lesson like 230–235 in new-lessons.json (≈60 min, house sequence), an `additions` catalog row (topic pronombres, /gramatica/gustar-y-verbos-como-gustar), PRO by default, no ledger change. Search demand: HYPOTHESIS. Next grammar slot: comparativos + superlativos.
- **Feria A2:** the design is locked (v5). He can author circles 2/3/4/5/8 and all 8 listenings now. Busca circles 1/6/7 are blocked on the Look-attribute contract (Sofia's first deliverable). v5 needs BOARD-DECISION-001 overlays (G1, N1 labels, routes-as-data with the N4 label, G4 rotation). Circle 3 shares a2.fun.favores with GROW-001, so it gets a different situation.
- **Vote:** the grammar class SHIPS FIRST; the Feria build STARTS IN PARALLEL (Sofia: engine + attribute contract). **GROW-001 pause: CONFIRMED.**

### Sofia (CPIO)
_Pending._

## 3. Decision (LOCKED when votes are in)
_Pending: the new order, the GROW-001 pause, and the first PRO unit with its single implementer._

## 4. Votes and objection round
_Pending._
