---
name: 3d-sin-fantasmas
description: Ale's 2026-10-21 rule that nobody (mascot or NPC) may end up inside an object in any 3D class, and the shared code + test that enforce it
metadata:
  type: project
  modified: 2026-10-21T14:36:21.069Z
---
Ale's rule (2026-10-21, thread "Personajes que atraviesan objetos en 3D", cmsg_01Gr5R4j3t2Yet65UcmhcVhA7BSCQ7An2yVN9uJVDFkEcm): in every 3D class, the mascot and every person collide with objects or stand on top of them. They never stay embedded in walls, furniture, cars or counters, like a ghost. This extends the 2026-10-15 rule (jump onto objects, people are solid, a bump makes them yell).

LIVE 2026-10-21 ~15:55Z (PR #259, deployed via main 556f5bd). How it is enforced:
- **Shared stepPlayer** (app/noche-abierta/world3d.mjs): it calls `escapeSolids` before every move, so a body overlapping an active box steps out to the nearest clear side. Noche, hospital, casino, Feria, Reino (via stepRealmPlayer) and mundo-3d all use it.
- **pushOut** (app/escucha-3d/bump.mjs): when the straight push would go into a wall, it slides round the person instead.
- **Bosque**: resolveObstacles runs several passes and again after landing. Caps are solid from below (head bump, CAP_DEPTH .6, BODY_HEIGHT 1.7).
- **Feria de Villaluz (ID 241)**:
  - The bulb poles and the fountain column are now solids, and the Ferris wheel box covers its legs.
  - People are solid there too: fair.bodies() + pushOut + shout.
  - The saved pose and the arrival spots must be clear ground (isClearGround).
- **Test** tests/3d-sin-fantasmas.test.mjs (in npm test). It has a WORLDS registry: Noche street + rooms, hospital floors, casino floors, Feria. It checks:
  - people are not inside solids (seated people may sit on boxes with top ≤1.3);
  - walkers do not pass through solids or standing people;
  - the mascot's spots are clear;
  - a random run/jump test never ends inside a box;
  - the bosque.
  Reino has its own check in tests/reino-world.test.mjs. A new 3D world must be added to WORLDS. mundo-3d (US) is not in it yet because the Estados Unidos thread owns it.
- **Allowed exceptions** (in the test's ALLOWED list): the casino cashier inside the hollow cage, the Noche person on the swings, and Elara lying in her bed.
