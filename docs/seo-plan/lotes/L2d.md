# Lote L2d · 26/11/2026

Plan:
1. Qué: las 3 URLs del lote L2 en español que no tenían gancho de reescritura: /material-ele/formatos/juegos-de-conversacion, /material-ele y /material-ele/ejercicio/subjuntivo. Briefs 21, 28 y 35.
2. Elemento irreemplazable: tabla «tienes / tu alumno es / quieres → empieza por» con clases reales del catálogo (juegos); por dónde empezar en cada nivel en dos clics, nivel → tema (portada); formación del presente de subjuntivo con los seis que no siguen el truco (ejercicio).
3. Código: la página de tema, la de ejercicio y la portada leen `pageRewrites`. En una página de tema reescrita, las tarjetas de clase van compactas y se ocultan las listas de objetivos y preguntas copiadas de las clases (eran texto repetido en muchas páginas).
4. Canibalización: juegos de conversación (esta página) frente a juegos para clase de español (dinámicas generales): cada una enlaza a la otra con su intención. El ejercicio de subjuntivo es de formas y usos básicos y enlaza a /indicativo-o-subjuntivo para el contraste de modo.
5. Reversión: borrar las 3 entradas de L2d en app/material-ele/seo-rewrites.ts (los ganchos sin entrada no cambian nada).

Arreglo de paso: el ejercicio de subjuntivo usaba «vosotros» en dos frases (tengáis, estéis); pasan a «ustedes» (tengan, estén), según la regla de español neutro.

Medición (build local): juegos de conversación 56 → 29 % de plantilla, ejercicio de subjuntivo 41 → 29 %, portada 2 → 2 % (cambio de enlazado, como pedía el brief).
Tests: tests/seo-rewrites.test.mjs 8 de 8; suite renderizada 246 + 166, 0 fallos; español neutro 0 hallazgos; Worker 26,87 MiB.
