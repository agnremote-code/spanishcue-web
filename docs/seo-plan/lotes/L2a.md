# Lote L2a · 26/11/2026

Plan:
1. Qué: 8 URLs del lote L2 (paso 3) que ya tienen el gancho de reescritura: /material-ele/preguntas-de-conversacion, /material-ele/formatos/comprension-auditiva/c1, /material-ele/perifrasis-verbales, /material-ele/conectores, /material-ele/guia/materiales-para-ensenar-espanol, /material-ele/cultura/fiestas-y-tradiciones/b2, /material-ele/b2 y /material-ele/preposiciones. Briefs 23–27, 36, 37 y 39.
2. Elemento irreemplazable por página: tabla pregunta → seguimiento → error (12 preguntas reales de la página); «lo que dijo / lo que quiso decir» para C1; línea de vida de una acción con la perífrasis de cada punto; conectores por función y nivel; cinco criterios para elegir material (con licencia); debate guiado de tradiciones con frases B2; mapa del B2 función → gramática → clase; mapa de movimiento sobre un plano.
3. Datos: solo del catálogo y de la propia página (60 preguntas, número de clases, actividades y frases, nombres y argumentos de las clases). Los recuentos de las descripciones los comprueba tests/seo-rewrites.test.mjs.
4. Fiestas y tradiciones B2 está 5.ª en Google: se deja el título y solo se cambian la descripción y se suma una sección.
5. Reversión: borrar las 8 entradas con `lote: "L2"` de app/material-ele/seo-rewrites.ts.

Autocrítica:
- SERP: la de cada consulta está en su brief (05_BRIEFS/23–27, 36, 37, 39; Google 26/11).
- Canibalización: preguntas de conversación es la única dueña de la intención (las variantes por nivel son noindex desde N5); materiales para enseñar español enlaza a recursos ELE gratis en lugar de repetir su lista; preposiciones (material) y /material-ele/ejercicio/preposiciones (ejercicios) mantienen títulos distintos.
- Sin cifras inventadas: los ejemplos de la tabla de C1 se presentan como ejemplos del tipo de frase, no como citas de los audios.
- Gramática ELE revisada a mano: deber / deber de según la norma, «de ahí que» + subjuntivo, «a pie» como excepción de «en» con transportes.

Medición (rastreo del build local, misma métrica que L1): plantilla 10–27 % en las 8 páginas (antes 12–77 %); parecido con la página hermana más cercana 6–18 % (antes 6–70 %). Las que más cambian: comprensión auditiva C1 (77 → 27 %) y fiestas y tradiciones B2 (50 → 27 %).
Tests: tests/seo-rewrites.test.mjs 7 de 7; suite renderizada 246 + 166, 0 fallos; guardia de español neutro 0 hallazgos; Worker 26,84 MiB.
