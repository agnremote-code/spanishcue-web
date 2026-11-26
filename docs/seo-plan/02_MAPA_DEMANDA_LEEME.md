# Paso 2 · Mapa de demanda (cómo leer 02_MAPA_DEMANDA.csv)

Fecha: 26/11/2026.

## Fuentes

- **SERP real de Google.** 43 búsquedas capturadas el 26/11/2026 a las 09:09 UTC desde Chrome en una Mac con IP residencial de España, con sesión de Google iniciada y los parámetros `hl`/`gl` de cada búsqueda más `pws=0`. Puede quedar algo de personalización. Los datos crudos están en `serp/serp-google-20261126.json`.
- **Páginas medidas.** De 326 URLs únicas del top 10 se midieron 253. Las otras 73 fallaron, entre ellas 20 de profedeele.es por su bloqueo antibots, así que su longitud no figura y no se inventa.
- **Search Console.** Consulta × página, 90 días. Una consulta sin datos aparece con 0, y eso no prueba que no haya demanda.
- **Juicio.** Los campos URL objetivo, entidades, brecha y «se puede ganar» están en `serp/juicio-20261126.json`. Cada brecha cita lo observado en la SERP.
- **Volúmenes.** No hay volumen de herramientas de palabras clave. No se usó para priorizar, como pide el plan.

## Selección de búsquedas

Se eligieron 43 búsquedas:

- las de Search Console con más impresiones;
- las del comprador (profe ELE que busca material, ejercicios o clases);
- una de control por familia programática: conjugación, verbos con preposición y la marca.

## Hallazgos

1. **Competencia real en las 31 búsquedas en español.** Este es el número de SERP en las que aparece cada dominio:

   | Dominio | SERP |
   |---|---|
   | profedeele.es | 26 |
   | profe-de-espanol.de | 16 |
   | deleahora.com | 15 |
   | todoele.net | 12 |
   | arche-ele.com | 11 |
   | espanol.lingolia.com | 11 |
   | spanishunicorn.com | 11 |
   | aprenderespanol.org | 9 |

   eleinternacional.com sale una sola vez. Cervantes solo aparece en búsquedas genéricas de recursos.
2. **Las tres posiciones top 10 de spanishcue.com son guías escritas a mano, sin plantilla.**
   - «ejercicios ele con soluciones»: 2.º, con 2.434 palabras.
   - «spanish subjunctive lesson plan»: 3.º, con 1.207 palabras.
   - «actividades de conversación en español para adultos»: 7.º, con 2.230 palabras.

   Ninguna página programática entra en el top 10 de las búsquedas medidas.
3. **Formato de las búsquedas de ejercicios.** Las de tipo «X ejercicios» las ganan páginas cortas de ejercicios, con una mediana de 344 a 760 palabras, más una guía larga con soluciones: spanishunicorn, con 2.200 a 4.300 palabras, sale en 11 de las 31.
4. **Funciones de la SERP.**
   - Hay vista creada con IA en 38 de las 43 búsquedas (37 de 42 sin contar la de marca).
   - No hay «Otras preguntas de los usuarios» en ninguna búsqueda en español.
   - No hay fragmentos destacados.

   La visibilidad en la vista creada con IA cuenta como resultado. Nos cita en 2 de las 3 búsquedas donde estamos en el top 10; en «ejercicios ele con soluciones», 2.º orgánico, no sale entre sus enlaces visibles (corregido el 26/11 al recontar el JSON).
5. **Marca.** Google corrige «spanishcue» a «spanish cute» y no muestra la web. Con `nfpr=1` sale 1.ª, con 5 URLs propias más Instagram, YouTube y LinkedIn. Se trabaja en el paso 7.
6. **Búsquedas sin intención docente útil.**
   - «roleplays en español» es una SERP de diccionarios.
   - «tener conjugation» y «conjugación verbo tener» los dominan diccionarios y conjugadores con autoridad.
   - «spanish teacher resources» y «spanish lesson plans» son SERP K-12 de EE. UU.

   En estas búsquedas no se invierte.
7. **Intenciones con varias URLs nuestras.** Hay de 3 a 5 URLs propias por tema: por ejemplo ser y estar, preposiciones y «how to teach spanish online». La URL objetivo del mapa es la candidata a quedarse. La decisión final es del paso 4.

## Resumen de «se puede ganar»

- sí: 11
- a 6 meses: 22
- no: 10

«Sí» significa que ya estamos en el top 10 de Google o que Search Console da una posición de 10 o mejor. No es una promesa de posición.
