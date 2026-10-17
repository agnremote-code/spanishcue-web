# BOARD-DECISION-002: PRO grammar and 3D classes first (reprioritization)

- Date: 2026-10-17
- Decided by: Alejandro (CEO), with Sofia (CPIO) and Martin (CLRQO). Locked by the CEO under the 2026-10-17 owner directive (see Status).
- Status: **LOCKED 2026-10-17** (Alejandro, CEO). Inputs: Martin's proposal and vote (§2, branch `claude/martin-reprio-proposal-20261017` at b18fa20) and the owner directive of 2026-10-17 (§1.3), which assigns the parallel work streams and supersedes Sofia's pending vote. No further objection round: the owner directive says not to debate unnecessarily.
- Supersedes: the backlog order in BOARD-DECISION-001 v3 §5, only where §3 below says so. All non-votable rules in BOARD-DECISION-001 §3.1 (N1–N4, the LQG, the FREE/PRO ledger) remain in force.

## 1. Owner decisions recorded (verbatim)
1. **Priority (2026-10-16):** "give priority to grammar and 3d conversation/listening premier pro classes (keeping our style)".
   - Board reading: new PRO content (grammar classes and 3D Conversation/Listening worlds) comes before GROW-001 (the free preview) and other SEO-led items.
   - "Keeping our style" means the existing house formats exactly. For grammar, that's the GRAMÁTICA collection's established lesson engines and patterns. For 3D, it's the AGENTS.md 3D-world rule and the hospital-san-casi-vivo / noche-abierta reference implementations. No new formats.
2. **Save work (2026-10-17):** "always save the work in case internet goes down".
   - Board reading: commit locally after every coherent step, and push the `claude/*` branch right after each commit (pushing never deploys). If a push fails, keep committing locally. Drafts go into files, never only into messages.
   - The main session keeps a read-only local backup every 10 minutes (~/SpanishCue-Board-Backup).

3. **Parallel work streams (2026-10-17, owner directive, excerpt):** "Resume their existing roles… prioritizing SPANISHCUE's technical SEO, innovative immersive 3D lessons, and quality assurance/integration. Do not spend time debating ideas unnecessarily. Make autonomous decisions, implement, test, fix errors, create PRs… Once a task is complete, automatically claim the next highest-priority actionable task… Coordinate files, branches, and dependencies to prevent conflicts… Do not start work that cannot reasonably be completed within available resources."
   - Board reading: three streams run in parallel. **Technical SEO = Alejandro. Immersive 3D = Sofia. QA/integration = Martin.** This directive replaces the remaining vote (Sofia's), so the decision locks without it.
4. **Deploys this session (2026-10-17):** deploy permission was NOT granted in this session. All PRs stay **draft**. Nobody marks a PR ready, merges, dispatches a workflow, or pushes to main. QA's pass is a PR comment "QA: RELEASE-READY at <sha>", and the owner releases. The 2026-10-16 auto-deploy authorization is suspended for this session only.

## 2. Proposals
### Martin (CLRQO), received 2026-10-17
- **Grammar gaps (his audit; to be checked on resume):** no class takes these as its subject: a1.gram.gustar, a1.gram.tambien-tampoco, a2.gram.superlativos, a2.gram.doler. Narrow gaps: a1.gram.obligacion, a2.gram.indefinidos. Partial: a2.gram.comparativos (112), a2.gram.estar-gerundio (115/119).
- **Pick:** «Gustar y verbos como gustar», A1. Primary a1.gram.gustar, secondary a1.gram.tambien-tampoco, A2 extension a2.gram.doler. Five exponents. It's a grammar-classroom JSON lesson like 230–235 in new-lessons.json (≈60 min, house sequence), an `additions` catalog row (topic pronombres, /gramatica/gustar-y-verbos-como-gustar), PRO by default, no ledger change. Search demand: HYPOTHESIS. Next grammar slot: comparativos + superlativos.
- **Feria A2:** the design is locked (v5). He can author circles 2/3/4/5/8 and all 8 listenings now. Busca circles 1/6/7 are blocked on the Look-attribute contract (Sofia's first deliverable). v5 needs BOARD-DECISION-001 overlays (G1, N1 labels, routes-as-data with the N4 label, G4 rotation). Circle 3 shares a2.fun.favores with GROW-001, so it gets a different situation.
- **Vote:** the grammar class SHIPS FIRST; the Feria build STARTS IN PARALLEL (Sofia: engine + attribute contract). **GROW-001 pause: CONFIRMED.**

### Sofia (CPIO)
Not received before the lock. Superseded by the owner directive of 2026-10-17 (§1.3), which assigns Sofia the immersive 3D stream. Her build-effort estimate for LES-001 is still wanted as the first planning output of that stream, not as a vote.

## 3. Decision (LOCKED 2026-10-17)
1. **Order of PRO units.**
   1. **LES-001 «La feria de Villaluz», A2 PRO 3D Conversation/Listening world first** (LESSON-DECISION-001 v5 with the BOARD-DECISION-001 overlays). Martin authors the content (circles 2/3/4/5/8 and all listenings now; circles 1/6/7 after Sofia's Look-attribute contract), then Sofia builds it. G4 content review: Alejandro or a fresh agent (never the author).
   2. **«Gustar y verbos como gustar», A1 PRO grammar class** (Martin's pick, house format of `app/grammar-classroom/content/new-lessons.json`, no new engine): Martin authors it **after the Feria content is delivered**. Implementer for the catalog wiring: Sofia or a fresh agent, decided when it starts.
   - Why the Feria goes first, overriding Martin's vote for grammar-first: the owner directive gives the 3D stream to Sofia right now, and the Feria content is what she is blocked on. Grammar follows as soon as Martin's Feria authoring is done, so both owner priorities (PRO grammar, PRO 3D Conversation/Listening) are served this cycle.
2. **Technical SEO runs in parallel** (Alejandro), highest impact first. Discoverability is the binding constraint (90 days: 30/241 sitemap URLs with impressions). Any change that touches a 3D folder is agreed with Sofia first.
3. **GROW-001 build: PAUSED.** The approved content (#220) and the SEO decisions stay in `docs/board/content/` for later.
4. **QA/integration:** Martin reviews every board PR and labels it "QA: RELEASE-READY at <sha>" when it passes.
5. **No deploys this session** (§1.4). Releases wait for the owner.
6. COMP-001 (ProfeDeELE.com) stays the next SEO-stream research item after the first technical SEO fix.

## 4. Votes and objection round
- Martin: grammar first, Feria in parallel, GROW-001 pause confirmed. The pause and the parallel Feria are adopted. The order is changed by §3.1 (Feria content first), for the reason given there.
- Sofia: not received; superseded by the owner directive (§1.3).
- Alejandro: as §3.
- Objection round: skipped under the owner directive ("Do not spend time debating ideas unnecessarily"). Any executive may still raise a blocking objection by mailbox. It is recorded here and does not stop the work.
