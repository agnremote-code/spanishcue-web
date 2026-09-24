> **Historical record (last edited 2026-09-20).** This file describes project state at that time and is kept unmodified below for traceability. It is not current status: for current source read GitHub `main`, for production read `state.json` on `automation/sites-release-state`, and for context read `docs/SPANISHCUE_HANDOFF.md`.

# TASK-06 · Tableros / Boards

## Estado

Implementación autónoma completa en `chatgpt/tableros`. Las dos rutas funcionan y compilan como contenido privado PRO, pero la integración del catálogo está intencionalmente pendiente de la tarea 8. No se modificaron `app/lesson-catalog.ts`, `app/Library.tsx`, navegación ni build central.

`WORKING_RULES.md` y `START.md` no están presentes en el checkout, en otros checkouts accesibles ni en las referencias locales disponibles. Se siguieron las reglas completas incluidas en el prompt de TASK-06.

## Entregables

- Motor puro de sesión en `app/boards/engine.ts`.
- Tipos compartidos en `app/boards/types.ts`.
- Banco B1 **De eso sí hablo** en `app/boards/b1-data.ts`.
- Banco B2 **No es tan simple** en `app/boards/b2-data.ts`.
- UI compartida en `app/boards/BoardLesson.tsx` y `app/boards/board.css`.
- Rutas `/tablero-de-eso-si-hablo` y `/tablero-no-es-tan-simple`.
- Validador en `app/boards/validate.ts` y `scripts/validate-boards.mjs`.
- Adaptador de catálogo sin ID central en `app/boards/catalog-adapter.ts`.
- Registro de acceso PRO independiente en `app/boards/access.ts`, aplicado por el worker y reforzado en cada página.

## Contenido validado

| Banco | Nivel | Categorías | Principales | Finales | Repreguntas | Cambios de condición |
|---|---:|---:|---:|---:|---:|---:|
| De eso sí hablo | B1 | 6 | 72 | 12 | 144 | 0 |
| No es tan simple | B2 | 6 | 72 | 12 | 144 | 24 |
| **Total** |  | **12** | **144** | **24** | **288** | **24** |

El script comprueba conteos, 12 principales por categoría, IDs globalmente únicos, dos repreguntas por principal, nivel/ID, duplicados exactos y solapamiento léxico sustancial. También compara los textos contra `Uno o el otro`, `¿Y ahora qué?` y `La Ruleta de Tu Vida`.

La adecuación B1/B2 se trabajó con funciones comunicativas compatibles con MCER/PCIC: B1 prioriza narración conectada, descripción y razones accesibles; B2 añade contraste, argumentación y revisión condicionada. Esto es alineación editorial, no una certificación oficial.

## Comportamiento probado

- Sorteo de una categoría o mezcla de varias.
- Cola sin repetición durante la sesión.
- Historial estable al retroceder y avanzar.
- Estado de profundización preservado por pregunta.
- Recuperación y normalización después de refrescar.
- Paso de preguntas personales sin penalización.
- Reset explícito y banco agotado sin repetición automática.
- Separación visual entre tamaño total y progreso de la sesión.
- Presentación/fullscreen opcional, teclado, móvil y movimiento reducido.
- Salida visible y sincronizada del modo presentación; los atajos ignoran modificadores y el selector de categorías.
- Ayudas opcionales sin IA, audio, voz ni evaluación de opiniones.
- Estructura de 45 minutos: 3 + 27 + 5 + 10.
- Acceso anónimo rechazado con `302` y `private, no-store` antes de renderizar o serializar los bancos PRO.

## Integración para TASK-08

Usar `boardLessonEntries` y `boardCatalogMetadata` de `app/boards/catalog-adapter.ts`.

1. Reservar dos IDs numéricos libres en `app/lesson-catalog.ts` y combinar cada entrada con su ID.
2. Ampliar `conversationMode` a `"worlds" | "play" | "boards"` en el tipo del catálogo/biblioteca.
3. Añadir `TABLEROS` al selector de estilos de Conversación, al mismo nivel que `UNIVERSOS` y `MODO PLAY`.
4. Mantener `PAÍSES` como colección separada; no incluir lecciones con `countryCollection` en ningún estilo.
5. Mostrar la insignia `TABLEROS` usando `conversationMode: "boards"` y `collection: "Tableros"`.
6. Mantener ambas entradas como PRO (`special: true` y fuera de la lista central de muestras gratuitas).
7. Ejecutar pruebas de filtros, acceso PRO, rutas, build y render después de conectar.

La integración no debe declararse completa hasta que estas entradas estén conectadas al catálogo real y se hayan probado desde la biblioteca.

## Comandos de verificación

```bash
node scripts/validate-boards.mjs
node --test tests/boards-engine.test.mjs tests/boards-content.test.mjs tests/boards-ui-contract.test.mjs tests/boards-integration-contract.test.mjs
bash scripts/sites-env.sh -- ./node_modules/.bin/eslint app/boards app/tablero-de-eso-si-hablo app/tablero-no-es-tan-simple tests/boards-*.test.mjs scripts/validate-boards.mjs
npm run build
npm test
git diff --check
```

Después de rebasar sobre el `origin/main` actualizado, el lint global termina con 0 errores y 113 advertencias preexistentes; el lint dirigido a todos los archivos de Tableros está limpio.

Resultado final tras la revisión independiente: 25/25 pruebas focalizadas de Tableros y 63/63 pruebas globales, incluido el build de producción y el gate PRO del worker.

## Preview

El preview local del renderer respondió correctamente para ambas rutas antes del endurecimiento PRO (B1: 47.556 bytes; B2: 52.495 bytes). La prueba de producción posterior confirma que el worker devuelve `302` para ambas rutas anónimas, sin exponer el contenido. La captura visual autenticada quedó bloqueada por el entorno: el navegador remoto rechaza direcciones loopback con `ERR_BLOCKED_BY_CLIENT`, aunque el servidor local queda disponible. No se desplegó ni se creó una versión externa para respetar la orden de no deploy.

La adaptación móvil y el teclado quedan cubiertos por el contrato `tests/boards-ui-contract.test.mjs`; la interacción de sorteo, historial, reset, refresh, agotamiento y mezcla queda cubierta por `tests/boards-engine.test.mjs`.
