# Lote L2b · 26/11/2026

Plan:
1. Qué: los 7 hubs de mini-apps del lote L2: /por-o-para, /ser-o-estar, /indefinido-o-imperfecto, /ejercicios-de-imperativo, /ejercicios-de-gustar, /ejercicios-de-pronombres y /verbos-con-preposicion. Briefs 29–34 y 40. Sus subpáginas por regla son noindex (N3), así que el hub tiene que valer solo.
2. Elemento irreemplazable por página: árbol de 3 preguntas para por y para; 5 errores de ser y estar con la pregunta que los resuelve; mapa de marcadores (cuáles fuerzan un tiempo y cuáles admiten los dos); los 8 irregulares de tú con su negativo; 9 verbos como gustar en un cuadro de concordancia; «le lo» → «se lo» paso a paso; calcos del inglés y del portugués por verbo.
3. Títulos y descripciones: se quedan los que los hubs calculan con sus datos (las cifras no pueden desfasarse). El test lo exige.
4. Código: app/mini-apps/seo-rewrites.ts y RewriteSections antes de la prueba mezclada en cada hub.
5. Reversión: borrar app/mini-apps/seo-rewrites.ts y la línea `<RewriteSections …>` de los 4 hubs y de app/ejercicios-gramatica/views.tsx.

Autocrítica:
- SERP: en cada brief (05_BRIEFS/29–34 y 40; Google 26/11).
- Canibalización: cada hub enlaza a su página de Material ELE (actividades de clase) en vez de repetirla; los hubs son de ejercicios.
- Sin datos inventados: el truco «Vin Diesel has ten weapons» se presenta como un truco que circula para angloparlantes, no como propio.
- Gramática ELE revisada a mano: «pensar sobre» es correcto con temas y error con personas; «gustar» sin «de»; tilde de «sé» y de «póntelo», «ponte» sin tilde.

Medición (build local): plantilla 18–20 % en los 7 hubs (antes 24–31 %); palabras propias de 474–699 a 937–1.243.
Tests: tests/seo-rewrites.test.mjs 8 de 8 (nuevo test para hubs); suite renderizada 246 + 166, 0 fallos; español neutro 0 hallazgos (3 exenciones de pretérito en primera persona); Worker 26,85 MiB.
