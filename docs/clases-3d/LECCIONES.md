# Lecciones aprendidas: clases 3D semanales

Newest first. Each week: what the critic caught, what to do from the start
next time, and ideas left for later. Keep it short; promote stable lessons
into PLAYBOOK.md.

## Semana 3 · 2026-11-16 · La casa (260) y Último crucero (261)

- **Las dos clases repitieron los mismos cuatro errores**, así que desde la
  semana 4 son chequeos en el `check-<slug>` de cada clase, no tareas del
  crítico:
  1. Alumno con género («de las nuestras», «nominada», «juntas», «solo o
     sola»): guard de regex sobre todo texto dirigido al alumno (escenas,
     invitados y escucha). Ojo: la escucha también le habla al alumno.
  2. HUD a 390 px: subtítulos/bitácora y minimapa tapaban «Usar», el joystick,
     el selector de modo y el volumen. El creador entrega una captura a
     390×844 sin solapes; minimapa debajo del HUD (top ≥ 236 px) y prompt
     encima de los botones.
  3. Claves de escucha adivinables por longitud: la correcta es la opción de
     longitud media ≤ 40 % de las veces, la más corta ≥ 25 %, y ninguna
     opción mide menos del 45 % de la clave (`LENGTH_KEYS`).
  4. Niveles en el bundle: `import()` solo no alcanza; `LOADERS =
     import.meta.env?.SSR ? {} : {…}` como `app/escucha-3d/loaders.ts`.
- **C2 con voz propia desde el borrador**: en las dos, C2 salió como C1 con
  sinónimos. Funcionó darle otro narrador (en el crucero narra el barco) y
  otros tipos de tarea (defender una tesis, cambiar de registro,
  contrafáctico, anécdota). Regla: Jaccard C1/C2 de las preguntas < 0,3.
  Pendiente: el texto de escena del crucero aún comparte vocabulario (0,47).
- **Una tabla de hechos** en `story.mjs` (años, páginas, edades) y todo texto
  y escucha alineados a ella: las dos clases tenían fechas y números
  contradictorios entre escenas y escucha.
- **A0/A1 en pasado**: el crucero volvió a forzar el presente sobre hechos
  pasados (ya estaba en esta lista). Revisarlo antes de entregar.
- **Personas sentadas**: tumbonas y pianos. Asientos con la raíz hacia el
  borde delantero; cuerpos de muebles sin el volumen del teclado/mostrador.
- **Realista desde el inicio** (`app/mundo-real`): personas y materiales
  reales en computadoras, livianas en teléfonos, `?real=0` las apaga. Worker
  modules tras las dos clases: 24,2 MiB de 27.
- **CI**: dos veces una petición al Worker de prueba (`wrangler dev`) quedó
  colgada 300 s en tests ajenos a la clase (`clasicas-routes`,
  `jugar-pass-worker`), y pasó al relanzar; localmente 3/3 en verde.

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
