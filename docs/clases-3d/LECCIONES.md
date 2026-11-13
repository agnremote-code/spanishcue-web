# Lecciones aprendidas: clases 3D semanales

Newest first. Each week: what the critic caught, what to do from the start
next time, and ideas left for later. Keep it short; promote stable lessons
into PLAYBOOK.md.

## 2026-11-11 · El mundo en blanco (259)

- **Arte propio en vez de muñecos**: seres de origami hechos a mano con
  triángulos (`seres3d.ts`) y un shader de tinta (`papel3d.ts`,
  `onBeforeCompile` de Lambert) que tiñe el mundo por zonas. El progreso es
  el color del mundo, no un marcador.
- **La tarjeta se aparta al premiar**: al «Devolver la tinta» se cierra la
  tarjeta para que la inundación de color se vea.
- **Catálogo y /material-ele**: una palabra suelta del texto del catálogo
  («número») clasificó la clase en un tema de vocabulario y creó una página
  de nivel nueva; `npm run test:seo` lo detecta. Releer el texto contra los
  `match` de `app/material-ele/temas.ts`.
- **Bundle**: con esta clase, Total Upload = 29,78 MiB (presupuesto 30).
  Antes de la próxima clase hay que mover contenido a assets/blobs.
- **Video de hover**: con `?qa3d=1`, animar `look()` e `ink()` cuadro a
  cuadro y montar a 12 fps con `minterpolate` a 24.

## Semana 1 · 2026-11-04 · El tren de las 23:40 (256) y La boda (257)

Lo que cazó el crítico (hacerlo bien desde el principio la próxima vez):
- **Clave de escuchas predecible**: respuestas en orden fijo (0-1-2-0) y la
  correcta casi siempre la más larga. Ahora `STRICT_KEYS` en
  scripts/check-escucha-3d.mjs lo hace fallar (letra >40 %, >3 ítems con el
  mismo patrón, correcta = más larga >40 %, C1/C2 con <2 preguntas `infer`).
  Sumar cada clase nueva a `STRICT_KEYS`. Consorcio y anteriores siguen mal.
- **C1/C2 de escucha = inferencia**: intención, ironía, registro; nunca copiar
  la frase del guion como respuesta, distractores plausibles.
- **Preguntas repetidas**: 54–64 por clase repetían otras clases. Hay dos
  filtros: el exacto del checker de la clase y el difuso (≥0,6) de
  tests/clasicas-conversacion.test.mjs, que mira TODO el sitio. Correr ese
  test antes de reportar.
- **A0 solo en presente rompe el español** («¿Dónde estás toda la noche?»).
  Usar fórmulas fijas en vez de forzar el presente. «Es la una», no «Son».
- **Salto vs. techo**: en interiores con techo <3 m, limitar el salto
  (`jumpSpeedFor(floor, standingOn)` del tren) y no saltar desde >0,45 m.
- **Ambiente según lugar y progreso**: anuncios/charlas con `where` y `after`
  (el tren anunciaba a Olga desaparecida antes de que desapareciera).
- **Alumno sin género**: nada de «amigo», «hermano», «dejarlo».
- **Una tabla de horas y datos** en story.mjs (horas, cabinas, edades) y que
  los niveles no se contradigan.
- **rendered-html**: una clase de conversación suma a «clases totales» pero
  NO a «resultados» (la home abre en Gramática).
- **Bundle**: tras main ~28,3 MiB (Total Upload) cada clase suma ~0,4 MB.
  Margen chico: la próxima semana cargar los niveles con `import()`.
- **Canva sin créditos**: portada SVG ilustrada con mascotas del repo; el
  crítico revisa que diga el tema (novios/anillos, reloj a las 23:40).

## Antes de la semana 1 (heredado de Vuelo cancelado y El consorcio)

- Per-vertex ghost check in the browser: tag person roots with
  `userData.person`, test every person vertex against world Box/closed
  Cylinder meshes, with people animated (scene opened). Stub `batchStatic`
  so merged furniture is still testable. The 2D test misses height: feet in
  raised slabs, bodies in blankets, legs in chair blocks.
- Seated NPCs: root at least depth/2 in front of the seat centre; use pants,
  not dresses (they clip seats).
- QA harness: esbuild bundle of a local entry (alias next/dynamic to a
  React.lazy stub), python http.server, Playwright swiftshader; `?qa3d=1`
  exposes `window.__xx3d` {place, where, look, scene} to teleport the camera.
- Preview video: Playwright clock.install + runFor(1000/24) per frame →
  ffmpeg; keep the dolly outside scene circles (a circle opens the card).
- `tests/grammar-classroom-routes` DELETE /api/live-class can 503 under load
  (known flake).
