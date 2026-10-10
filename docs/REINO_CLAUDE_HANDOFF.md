# El reino de la rosa dormida — checkpoint para Claude

El dueño pidió guardar este punto antes de agotar créditos. **Continúa esta implementación; no la rehagas.**

- Repositorio: `agnremote-code/spanishcue-web`.
- Rama de trabajo: `codex/reino-rosa-dormida-20261010`.
- Base: `711c385a7913de428b7eadca4b8bbf685efe004a`.
- Ruta: `/el-reino-de-la-rosa-dormida`; ficha única ID **238**, Conversación / Modo Play, A0–C2.
- No hay PR ni publicación de esta entrega. Es un checkpoint de implementación con QA pendiente.
- El brief íntegro del dueño está en `docs/REINO_ORIGINAL_BRIEF.txt`.
- Autorización vigente: terminar, probar, PR no draft, CI + Auto Merge, producción Cloudflare y smoke sin pedir aprobación. Leer `AGENTS.md`; no saltar protecciones ni mergear manualmente.
- Hay PR abierto #147 de Claude para vehículos de Noche Abierta. No editar sus archivos ni `package.json`. No se modificaron auth, pagos, secretos, D1 ni workflows.

## Qué está implementado

`app/el-reino-de-la-rosa-dormida/`:

- `ReinoGame.tsx`, `reino.css`: menú sobre mundo real, comenzar/continuar/reiniciar con confirmación, HUD, mapa, diario, inventario, selector A0–C2, conversaciones escritas, ayudas, dictado nativo compatible y síntesis española reutilizando audio de Autoestudio. Guardado local validado; música y efectos sintetizados con controles separados.
- `World3D.tsx`: Three.js, tercera persona, teclado/táctil, cámara con colisión, salto, interacción próxima, hechizos visuales, introducción/dragón/final, fallback WebGL.
- `movement.mjs`: reutiliza física horizontal de Noche Abierta y añade suelos/altura/escaleras/barreras/checkpoints seguros; no se alteró Noche Abierta.
- `world.ts`: bosque, aldea, molino, río/puente, jardines, castillo con interiores, biblioteca, cocina, escalera, terraza y torre. Materiales originales, arquitectura fusionada/vegetación instanciada; tres GLB locales.
- `characters.ts`: Gael adaptado del personaje maduro de Noche Abierta, capa azul animada, 11 NPCs, dragón riggeado con 8 animaciones y fallback. Último arreglo aplicado: material de pajarita de Teobaldo en vez de pasar un Mesh como Material.
- `content.mjs`, `engine.mjs` + tipos: 231 intervenciones (11 personajes × 3 turnos × 7 niveles), 8 misiones, cuatro hechizos, intenciones deterministas, restauración canónica de guardados. No existe ni se simula un LLM conversacional.
- `public/reino/assets/{dragon,pine,windmill}.glb`: Quaternius CC0, 2.84 MB total; procedencia/licencias/SHA-256 en `public/reino/ASSETS.md`.
- `public/reino/cover.webp`: captura REAL de la primera versión renderizada, anterior al pulido final de hierba/camino/capa. Reemplazar con captura actual si hay tiempo.

## Secuencia exacta de campaña

1. Nox ×3.
2. Inés ×3, Bruno ×3 → Ventaria; usar Ventaria en `mill`; recoger `key`.
3. Liora ×3 → Lumaria; usar en `grove`.
4. Aldren ×3 → `bridgeOpen`.
5. Celina ×3 → Floralis; usar en `thorns`; recoger `rose` → `castleOpen`.
6. Recoger `scroll`; Baltasar ×3 y Teobaldo ×3 → Aurora.
7. Subir escalera (x12, z−88→−104, altura0→8); Aurora en `dragon`; Brum ×3; recoger `crystal`.
8. Tejedora ×3; Lumaria, Floralis y Aurora, en ese orden, en `altar`; Elara ×3 → victoria.

## Verificación realizada y límites exactos

- Motor: 19 tests pasaron. Los siete niveles llegan al final y conservan progreso al recargar. Incluye negaciones, respuestas libres alternativas, orden ritual, duplicados y guardados imposibles.
- Movimiento: 7 tests pasaron; paredes, salto, escaleras, altura, puertas y checkpoints.
- Mundo: 3 tests pasaron, incluyendo campaña completa mediante la física real y flags reales progresivos, no puertas preabiertas.
- Integración de catálogo: 1 test pasó. Acceso PRO heredado; una sola ficha/ruta y siete niveles.
- Los cuatro tests Reino están integrados en `scripts/test-worker.mjs`, por lo tanto en `npm test`/CI, sin tocar `package.json` del PR #147.
- 23 tests de preservación histórica pasaron. `tests/helpers/catalog-additions.mjs` permite únicamente la adición ID238 y cambios exactos de contadores/registro, manteniendo hashes históricos.
- Guardias de español neutro/inglés pasaron: cinco pretéritos legítimos tienen excepciones exactas justificadas en el registro existente.
- ESLint global pasó antes de los últimos ajustes visuales; volver a ejecutar al terminar.
- `tsc --noEmit` tenía SOLO dos errores preexistentes, reproducidos en la base: `app/estados-unidos-a2-b1/data.ts` importa el retirado `../estados-unidos-basico/data` y deriva un parámetro implícito any en línea177. No restaurar la clase USA que el dueño retiró. Revalidar tras último arreglo de pajarita.
- `npm test` completo estaba en ejecución al guardar: compilación y protección de artefactos ya pasaron, suites posteriores en curso. No presentarlo como terminado sin confirmar código de salida. Log `/tmp/reino-full-test.log`, sesión local81998.
- Navegador real desktop: título y entrada renderizados, WASD, salto/aterrizaje, diario/inventario/mapa sin desbordes, conversación completa Nox y llegada física a Inés. Campaña visual completa aún en curso: sesión54867.
- Móvil390×844: entrada pasó. **320×700 falla por `.rr-hud-top clips content`**. Landscape844×390 todavía no validado. Arreglar este caso y volver a comprobar. Último ajuste de botones táctiles renderer no se volvió a probar en navegador.

## Revisión independiente: defectos corregidos / comprobar

- Corregidas cuatro falsas aceptaciones de «No quiero arreglar el molino», «No voy a cuidar la llave», «No quiero ayudar a Elara», «No respeto tu decisión». Hay regresiones y controles positivos de rechazo a la violencia.
- Corregida jardinera detrás de su propia puerta: ahora accesible antes de retirar espinas.
- Corregido bypass del puente: perímetro ahora llega a ±45.1 con altura6; jardines con paredes4.2. Revalidar intento de saltar baranda y rodear por x30 con `bridgeOpen:false`.
- Pulido reciente: hierba curva afinada, winding del camino corregido (antes no se veía), capa azul, Teobaldo mayordomo, molino con eje correcto. Capturas anteriores no muestran estos últimos cambios.

## Continuar ahora

1. Crear rama `claude/reino-rosa-continuacion-20261011` **desde este checkpoint**, no desde main. Regla de prefijos: Claude no debe escribir la rama `codex/*`. Registrar origen en PR; no hay otro PR de este juego.
2. Leer el brief y este handoff; inspeccionar cambios actuales y PRs antes de editar.
3. Corregir header320px, comprobar landscape y terminar browser QA completo hasta victoria. Revisar carga y animación de GLB, colisiones, cámara, guardado al recargar, diálogos y hechizos.
4. Ejecutar `node --test tests/reino-*.test.mjs`, `npm test`, `npm run lint`, `npm run validate:artifact`, `npx tsc --noEmit`, `git diff --check`. Distinguir los dos errores TS de base de cualquier error nuevo.
5. Commit/push; PR no draft a main; esperar CI + Auto Merge y verificar SHA fusionado. Staging se dispara con main y promociona automáticamente a producción tras smoke; verificar sus runs y producción. No publicar rama sin merge ni tocar locks.
6. Informar al dueño solamente qué funciona, URL, PR/commit, producción y pendientes reales.

## QA reproducible

`scripts/qa-reino-browser.mjs` empaqueta componentes reales en un servidor local aislado. No cambia auth ni agrega hooks productivos. Inyecta observación y navegación de prueba en bundle temporal; camina con física real, sin teletransportar ni saltarse reducer.

```bash
REINO_QA_OUTPUT=/tmp/reino-qa REINO_QA_SIZES=desktop \
PLAYWRIGHT_MODULE=/opt/codex/runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs \
CHROMIUM_EXECUTABLE_PATH=/tmp/reino-chromium/chrome-headless-shell-linux64/chrome-headless-shell \
CHROMIUM_ARGS='["--no-sandbox","--single-process","--no-zygote","--in-process-gpu","--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader"]' \
node scripts/qa-reino-browser.mjs
```

Para tamaños móviles: `REINO_QA_FAST=1 REINO_QA_SIZES=mobile,small,landscape` y otro directorio de salida. Con Chromium instalado normalmente, adaptar u omitir las variables de ejecutable y módulo. El shell oficial Chrome for Testing133 se descargó porque el CDN estándar de Playwright devolvía HTML. Software WebGL es lento; distinguir lentitud del entorno de fallo del producto.

Evidencia local (puede no sobrevivir, el código SÍ está guardado en GitHub): `/workspace/scratch/99e81ccecc10/reino-qa/`, `reino-qa-mobile/`; logs `/tmp/reino-mobile-qa.log`, `/tmp/reino-full-test.log`, `/tmp/reino-tsc-final.log`.
