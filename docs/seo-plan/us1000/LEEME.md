# Plan 1000 páginas para EE. UU.: cómo se agrega una página

Plan y ritmo: `/mnt/project-files/seo-mision/plan-1000-paginas-usa.md` (unas 40 páginas por día, tandas de 50 a 100 cada 2 o 3 días).

## Dónde vive el contenido

- El cuerpo de cada página es un JSON en `public/us-content/<familia>/<slug>.json`. Se sirve como asset y la ruta lo lee en tiempo de render con `loadUsContent` (`app/us-content/load.ts`). Nunca se importa: 1000 páginas dentro del Worker lo pasarían del límite (incidente del 2/11, presupuesto 27 MiB).
- `app/us-content/catalog.generated.ts` es el índice chico (familia, slug, nivel, tema, título) que usan la ruta, la página del nivel y el sitemap. Se regenera con `node scripts/build-us-catalog.mjs` después de agregar o quitar un JSON.
- Tipos en `app/us-content/types.ts`.

## Familias activas

| Familia | Ruta | Archivo |
| --- | --- | --- |
| vocabulary | `/spanish-vocabulary/<tema>` (hub `/spanish-vocabulary`) | `public/us-content/vocabulary/<tema>.json` |

Una familia nueva necesita su ruta, su tipo y su bloque en `tests/us-content-quality.test.mjs` antes del primer JSON.

## Control de calidad (`tests/us-content-quality.test.mjs`, en `npm run test:seo`)

- búsqueda real de EE. UU. registrada en `demand` (autocompletado en-US capturado en `docs/seo-plan/us1000/`);
- lista de 20 palabras o más en 3 grupos y 8 preguntas de vocabulario;
- texto de la lectura: 140 palabras en A1, 190 en A2, 240 en B1; 300 palabras propias en total (hoy rondan 520 a 740);
- 6 preguntas de comprensión y 3 de gramática como mínimo, con la explicación de cada respuesta; ninguna pregunta repetida entre páginas;
- dato con fuente, bloque para hablantes de herencia, nota para el profesor;
- menos del 30 % de secuencias de 5 palabras compartidas con cualquier otra página de la familia;
- catálogo sincronizado.

## Reglas que no cambian

- El texto en inglés necesita el OK de Ale en una tarjeta del hilo; una tarjeta por tanda, citada en el manifiesto `docs/audits/*-english-additions-*.json`.
- Español neutro con tú (el guard `scripts/neutral-spanish.mjs` también lee `public/`).
- Nada inventado: el dato de cada página sale de datos reales (autocompletado, SERP capturada o datos propios).
- Si Search Console muestra que Google indexa cada vez menos páginas de una tanda, se frena la familia.

## Demanda capturada (27/11/2026)

`docs/seo-plan/us1000/suggest-us-20261127.csv` (rama `claude/us-1000-demand`): autocompletado en-US de 156 semillas, 741 sugerencias. Lo que enseñó:

- «spanish reading comprehension <tema>» no tiene ninguna sugerencia: nadie lo busca así. Por eso la tanda 1 no son lecturas por tema sino páginas «spanish <tema> vocabulary», que sí tienen demanda (practice, quiz, worksheet, list, activities) y llevan la lectura adentro.
- Con demanda clara para las próximas tandas: «spanish verb <verbo>» (+ practice, conjugation, present, past), los temas de AP («ap spanish families and communities», etc., ensayo: rubric, examples, prompts, transition words), «spanish class games» (high school, review, no prep) y «spanish 1/2/3 final exam review».
- Sin sugerencias: la mayoría de «<país> culture spanish class» y «spanish heritage speakers accents/spelling». No se hacen páginas para esas búsquedas.
- Las lecturas B1 ya escritas (fiesta, tecnología, trabajo, salud, viaje) quedan guardadas para las páginas de temas de AP.
