# Concept selection 2026-10-23: «El ascensor del cerro» (B2, Valparaíso) selected

- Round: Friday 2026-10-23 scheduled routine, concept pipeline step 3 ("Select", [ROUTINES.md](../ROUTINES.md) "Creative ownership").
- Selected by: Alejandro (CEO), scoring and selection. Proposals: Sofia (CPIO) and Martin (CLRQO).
- How the board met: Sofia and Martin wrote their proposals in parallel, as subagents of the facilitator, from the same inventory. They did not message each other, and there was no debate or objection round between executives. Their recommendations below come from their written reports. Nothing else was agreed.
- **Nothing was built or shipped in this run.** The build goes to the next 3D slot, **Monday 2026-10-26**: Martin authors → Sofia builds → G4 content review by Alejandro or a fresh agent (never the author).

## 1. Why a concept round was needed
- The backlog had no ready 3D item. LES-001 Feria shipped on 2026-10-21 (PR #251, `6383b3b6`). BOARD-DECISION-002 rank 2 is a grammar class, not a 3D unit, and Martin's check in this run found it largely duplicated (see the W43 assessment).
- Before this round, `docs/board/concepts/` held only README.md, so no concept had been rejected (VERIFIED).

## 2. Inventory used (VERIFIED against `origin/main` @ `373e8b3`)
- `app/escucha-3d/games.mjs`:
  - noche, casino and bosque cover A1–C2. reino, hospital and madrid cover A0–C2.
  - 11 country worlds stop at B1: usa, mexico, argentina, espana, suecia, uk, irlanda, australia, suiza, israel and indonesia. Martin's report says "ten" but then lists all 11, and both the registry and Sofia's report give 11.
  - feria is A2 only.
- B2 and C1 have no world of their own. They exist only as one level inside the multi-level worlds (Sofia, citing `app/hospital-san-casi-vivo/levels-info.mjs` and `app/madrid-infectada/levels-info.mjs`).
- Chile, Valparaíso, Colombia and the Eje Cafetero appear in no game, world or atlas. Sofia and Martin each checked this with a grep over `app/`.
- **Premise near-overlap, noted by Alejandro and not a duplicate.** The approved but paused GROW-001 circle is «El ascensor no funciona» (`docs/board/content/grow-001-circle.md`): A2, `a2.fun.favores`, a broken lift in an apartment building. Valparaíso differs in level, function, setting and mechanic. Still, the new world must not reuse the title or the "lift out of order" framing, so the premise below is a funicular closed for repairs whose reopening terms are disputed.

## 3. Candidates
| Id | Concept | Proposed by | Level | Primary objective |
|---|---|---|---|---|
| **V** | Valparaíso funicular mediation world. Sofia's S1 «Ascensor Concepción» and Martin's C1 «Valparaíso: el ascensor del cerro» are **merged into one candidate** | Sofia and Martin, independently | B2 | `b2.fun.mediacion-fuentes` |
| K | «La cosecha de la ladera»: coffee cooperative, Eje Cafetero (Quindío) | Sofia (S2) | C1 | `c1.fun.mediacion-conflicto` |
| D | «Escala en El Dorado: vuelo cancelado»: Bogotá airport | Martin (C2) | B1 | `b1.fun.quejarse-formal` |

**On the convergence.** S1 and C1 share the setting, the level, the primary objective and the vertical-funicular mechanic. Two people working from the same inventory and arriving at the same idea is evidence that the gap is real: no B2 world and no Chile setting. It is not two votes for originality, so V is scored once.

Every objective id above, and every id in §5, was checked in `app/autoestudio/curriculum/objectives/{b1,b2,c1}.ts`. Every voice id was checked in `app/escucha-3d/voices.json` (VERIFIED, this run).

## 4. Scores (1–5, 5 = best; build risk 5 = lowest risk; unweighted total)
| Criterion | V Valparaíso B2 | K Eje Cafetero C1 | D El Dorado B1 |
|---|---|---|---|
| Educational value | 5. It fills the B2 gap with no dedicated world. Mediation is the core B2 function, and it uses the unused listening objective `b2.lis.voces-chile` | 5. C1 mitigation and register is a strong, under-served target | 4. Formal complaint and relaying messages are useful, but A0–B1 is already the best-covered range (11 country worlds) |
| Originality | 4. New country and a vertical mechanic. Minus 1 for the premise near-overlap with GROW-001 (§2) | 5. Proximity listening as a register gradient is a new mechanic | 3. A flight-cancellation role-play is a common textbook scenario. The changing departures board is the original part |
| SEO evidence | 1. HYPOTHESIS only. Search Console is unreadable (R0) | 1. HYPOTHESIS only | 1. HYPOTHESIS only |
| Build risk (5 = lowest) | 3. Medium. The funicular is a new scripted camera-and-platform move. The rest follows the Feria and Hospital pattern | 2. Medium-high. Distance-based audio volume and per-line mixing of overlapping talk are new shared code | 4. HYPOTHESIS: lower, per Martin. The board state change is world state and needs no new movement or audio feature |
| Kit reuse | 4. escucha-3d, people3d, hero3d and the `levels/<level>.mjs` + `scripts/check-*.mjs` pattern | 3. Reuses the kit but needs a new kit feature first | 4. Same kit, flat terrain |
| **Total** | **17** | **16** | **16** |

These scores are Alejandro's judgement on the written proposals. The totals are close, and the 1-point lead is not decisive by itself. The vote decides.

## 5. Votes (ROUTINES: "the majority decides")
- Sofia: **V** (her S1), from her report: "lower risk, it fills the B2 gap and an unused listening objective (`b2.lis.voces-chile`), and its new mechanic is narrow".
- Martin: **V** (his Concept 1), from his report: "build Concept 1 first, because B2 has no dedicated world". He also noted, as a HYPOTHESIS, that D is lower-risk if the slot is tight.
- Alejandro: **V**.
- **Result: V selected, 3 of 3.**

## 6. Selection and why
**«El ascensor del cerro», B2 PRO 3D Conversation/Listening world, Valparaíso, Chile.**
1. It closes the clearest catalogue gap: no world is authored for B2.
2. Its 3D mechanic is necessary, not decorative. Positions sit at physically different heights, and the student carries them down or up to the assembly, so a flat card list would lose the geography of "who lives up there, who profits down there".
3. Its only new engine work is narrow: one scripted funicular transition. K's new work is a shared audio feature with wider risk.
4. All three executives recommend it.

## 7. Deferred and rejected (do not re-propose without the new evidence named)
| Concept | Status | Reason | What would reopen it |
|---|---|---|---|
| K «La cosecha de la ladera», C1, Eje Cafetero | **DEFERRED** (not rejected) | Its mechanic depends on proximity-based audio volume, which belongs in the shared `app/escucha-3d` kit and should not be built inside one world (AGENTS.md: reuse, do not copy). Building the feature and the world in one slot is the riskiest of the three options | A kit PR that adds distance-based listening volume and is merged, or Sofia's estimate that it fits one slot. Then it is the first candidate for C1 |
| D «Escala en El Dorado», B1, Bogotá | **DEFERRED** (not rejected) | The scenario is the most familiar of the three and the A0–B1 range is already the best covered. It is a fallback, not the priority | Use it as the fallback if the funicular proves infeasible in the Monday slot, or as a B1 candidate in a later round. Its cliché check (§9) still applies |
| Using a real, named funicular (Sofia's «Ascensor Concepción») | **REJECTED within the merge** | A real named funicular brings factual claims about its current service, fares and history that the board cannot verify from here (HYPOTHESIS that such details change) | A cited, dated source for every factual claim about that funicular |
| A separate "port" circle (Sofia's 7th circle) | **MERGED AWAY** | Folded into the lower station to keep about 45 minutes with 6 circles | none needed |

## 8. Merged spec for authoring (Martin finalises; any line he changes is recorded in the LQG file)
**Title.** «El ascensor del cerro». Level B2 only, a single-level world like Feria. PRO. No FREE ledger change.

**Setting.** A fictional funicular on a Valparaíso hillside, placed near Cerro Concepción and Cerro Alegre (HYPOTHESIS, needs the cultural check). It has been closed for repairs, and the junta de vecinos meets to decide the terms for reopening it: a residents' fare or a tourist fare, the timetable, and the conditions attached to a heritage grant.

**Objectives (G1: one primary objective per circle, ids VERIFIED in `objectives/b2.ts`).**
- World primary: `b2.fun.mediacion-fuentes`. Both proposals chose it.
- Supporting objectives in the world: `b2.fun.conceder-objetar` and `b2.gram.concesivas` (both proposals), `b2.fun.negociar-condiciones` (Martin), `b2.fun.describir-transformacion`, `b2.gram.verbos-cambio-sistema` and `b2.voc.ciudad-sostenible` (Sofia), and `b2.lis.voces-chile` and `b2.lis.debate-radio` (both).
- The circle mapping below is a proposal. Martin may reassign it as long as each circle keeps exactly one primary.

**Cast (one distinct voice per character, ids VERIFIED in `voices.json`).** The cast reconciles the two versions, keeps 3 women and 2 men, and gives each character one stakeholder position.

| Character | Role | Voice | Source |
|---|---|---|---|
| Catalina | president of the junta de vecinos; chairs the assembly | `es-CL-CatalinaNeural` | Martin's role |
| don Lorenzo | funicular operator for decades; witness to how the cerro changed | `es-CL-LorenzoNeural` | Martin's role, Sofia's "how the cerro changed" beat |
| Paola | Venezuelan resident who runs the café by the upper station | `es-VE-PaolaNeural` | Sofia's voice, both proposals' role |
| Alex | Peruvian heritage architect; technical report | `es-PE-AlexNeural` | Sofia's version |
| Elvira | Spanish heritage-grant consultant; the grant comes with conditions | `es-ES-ElviraNeural` | Martin's role (grant consultant, not tour operator), Sofia's voice |

Alternates if Martin needs them: `es-VE-SebastianNeural`, `es-PE-CamilaNeural`, `es-ES-AlvaroNeural`. Only two Chilean voices exist in `voices.json`, so no third Chilean speaker is possible.

**Circles (6), each with its own conversation scene and its own listening (`ownListening: true`).**

| # | Circle (height) | Proposed primary | Listening beat |
|---|---|---|---|
| 1 | Lower station, by the port | `b2.fun.describir-transformacion` | don Lorenzo's voice note: how the cerro changed («se ha vuelto…», «llegó a ser…»); `b2.gram.verbos-cambio-sistema` exponents |
| 2 | Stairway mural (mid-height) | `b2.fun.conceder-objetar` | two neighbours argue on the stairs (Catalina and Paola), each conceding part of the other's point (aunque + indicative/subjunctive) |
| 3 | Café by the upper station | `b2.lis.debate-radio` | a local radio phone-in on the reopening, playing in the café (Martin's pattern) |
| 4 | Heritage workshop | `b2.voc.ciudad-sostenible` | Alex's technical report: safety, cost, timeline |
| 5 | Upper viewpoint (mirador) | `b2.fun.negociar-condiciones` | Elvira's grant pitch with a concealed condition («siempre que…», «a cambio de…») |
| 6 | Assembly hall (closing) | `b2.fun.mediacion-fuentes` | the junta's minute (acta) to summarise, keeping each party's reservations |

`b2.lis.voces-chile` is carried by circles 1 and 2 (the Chilean speakers). Its descriptor (VERIFIED, `b2.ts:106`) requires contrasting Chilean phonetics "con una muestra real en clase". The teacher route therefore tells the teacher to bring a real sample. TTS does not supply it.

**3D mechanic.** A vertical world. The student moves between heights by the funicular, a scripted camera-and-platform transition between two levels with no physics, or by the stairway. Positions are gathered at different heights and carried to the assembly hall for the final mediation. The no-WebGL fallback lists the circles in height order. Controls, the teacher list and `ModeSwitch` follow the AGENTS.md 3D rule.

**Teacher route (about 45 min).**
1. 5 min: warm-up, «¿Cómo ha cambiado tu barrio?»
2. 20 min: four circles chosen by the teacher, in pairs, alternating Conversación and Comprensión auditiva.
3. 10 min: assembly role-play, where the class mediates and keeps the reservations people expressed.
4. 10 min: closing production, a written agreement with conditions (aunque, siempre que, a cambio de).

**SEO target: HYPOTHESIS, no Search Console evidence.** Candidate queries: «actividad de mediación B2 español», «spanish B2 mediation activity», «clase de español B2 negociar y mediar». A `/resources/…` teacher page follows the Indexable Teacher Page standard. Alejandro owns its SEO structure and Martin owns its pedagogy.

## 9. Open checks before and during authoring (Martin, unless stated)
1. **Cultural and cliché check.**
   - Avoid postcard Valparaíso (murals as decoration only, "colourful houses", a poverty-by-the-port framing).
   - Do not reduce the Venezuelan and Peruvian characters to a migrant stereotype. Paola is a business owner and Alex a professional, and both must hold real positions, not illustrate a theme.
   - Check that the funicular-reopening and junta premise is plausible, and keep the funicular itself fictional.
   - For D (if it is ever used), avoid the "chaotic Latin American airport" cliché.
2. **Accent claims.** The TTS voices prove only that a country label exists in `voices.json`. Nobody has listened to the output. The Chilean features (*po*, *cachai*, *al tiro*, aspirated /s/) are taught from the script as exemplars, and the narration and instructions stay neutral. The page and catalogue must never claim a Chilean accent until someone has heard the clips. Someone listens to every clip before release. That step was missed for Feria.
3. **SEO evidence.** When R0 is fixed and Search Console is readable, check impressions for the candidate queries and adjust the teacher-page title before release. If it is still unreadable at release, ship with the target marked HYPOTHESIS.
4. **Gate.** The LQG file `docs/audits/<world>-pedagogy-YYYYMMDD.md` must cover G3 (`npm run test:language`), G4 (author ≠ reviewer), G6 (catalogue `levels` = `['B2']` only), beat labelling, G5(a) SwiftShader smoke at 390 px and G5(b) real-device check. Until G5(b) passes, the world stays `featured:false`. If the unit does not pass the gate, nothing ships.
5. **Build check (Sofia).** If the funicular transition cannot be built inside the Monday slot, she says so early. The fallback is a stair-only vertical layout, with D as the alternative concept. That decision comes back to the board and is not made silently.
