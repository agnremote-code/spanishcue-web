# Plan 1000 páginas para EE. UU.: cómo se agrega una página

Plan y ritmo: `/mnt/project-files/seo-mision/plan-1000-paginas-usa.md` (unas 40 páginas por día, tandas de 50 a 100 cada 2 o 3 días).

## Dónde vive el contenido

- El cuerpo de cada página es un JSON en `public/us-content/<familia>/<slug>.json`. Se sirve como asset y la ruta lo lee en tiempo de render con `loadUsContent` (`app/us-content/load.ts`). Nunca se importa: 1000 páginas dentro del Worker lo pasarían del límite (incidente del 2/11, presupuesto 27 MiB).
- `app/us-content/catalog.generated.ts` es el índice chico (familia, slug, nivel, tema, título) que usan la ruta, la página del nivel y el sitemap. Se regenera con `node scripts/build-us-catalog.mjs` después de agregar o quitar un JSON.
- Tipos en `app/us-content/types.ts`.

## Familias activas

| Familia | Ruta | Archivo |
| --- | --- | --- |
| reading | `/spanish-reading-comprehension/<nivel>/<tema>` | `public/us-content/reading/<nivel>-<tema>.json` |

Una familia nueva necesita su ruta, su tipo y su bloque en `tests/us-content-quality.test.mjs` antes del primer JSON.

## Control de calidad (`tests/us-content-quality.test.mjs`, en `npm run test:seo`)

- búsqueda real de EE. UU. registrada en `demand` (autocompletado en-US capturado en `docs/seo-plan/us1000/`);
- texto de la lectura: 160 palabras en A1, 220 en A2, 280 en B1; 300 palabras propias en total;
- 6 preguntas de comprensión y 3 de gramática como mínimo, con la explicación de cada respuesta; ninguna pregunta repetida entre páginas;
- dato con fuente, bloque para hablantes de herencia, nota para el profesor;
- menos del 30 % de secuencias de 5 palabras compartidas con cualquier otra página de la familia;
- catálogo sincronizado.

## Reglas que no cambian

- El texto en inglés necesita el OK de Ale en una tarjeta del hilo; una tarjeta por tanda, citada en el manifiesto `docs/audits/*-english-additions-*.json`.
- Español neutro con tú (el guard `scripts/neutral-spanish.mjs` también lee `public/`).
- Nada inventado: el dato de cada página sale de datos reales (autocompletado, SERP capturada o datos propios).
- Si Search Console muestra que Google indexa cada vez menos páginas de una tanda, se frena la familia.
