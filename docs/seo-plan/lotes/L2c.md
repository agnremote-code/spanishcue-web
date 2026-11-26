# Lote L2c · 26/11/2026

Plan:
1. Qué: las 2 páginas en inglés del lote L2: /spanish-conversation-questions y /spanish-conversation-activities (briefs 22 y 38). Con L2a, L2b y L2d, el lote L2 llega a 20 URLs.
2. Elemento irreemplazable: tabla de respuesta modelo por nivel (pregunta real del banco → respuesta modelo → seguimiento → qué escuchar) y tabla «uno a uno en línea o grupo» con las cinco cosas que cambian.
3. Texto: aprobado palabra por palabra por el dueño en el hilo SEO el 26/11/2026 («Sí, publicalo tal cual»). Títulos y descripciones nuevos, sin el sufijo «| SPANISHCUE», como en L1.
4. Código: app/growth/conversation-page-extras.ts (texto) y app/growth/ConversationExtra.tsx (tabla), insertados en las dos páginas.
5. Reversión: quitar el `<ConversationExtra …>` de las dos páginas, borrar esos dos archivos y volver a los títulos y descripciones anteriores.

Autocrítica:
- SERP: en cada brief (05_BRIEFS/22 y 38; Google 26/11). En «spanish conversation questions» la vista creada con IA no mostró enlaces y había «People also ask»: la tabla contesta qué respuesta esperar por nivel, que el banco solo no contestaba.
- Canibalización: las preguntas viven en /spanish-conversation-questions; la página de actividades enlaza al banco y no repite preguntas.
- Sin datos inventados: las 6 preguntas de la tabla existen en app/growth/conversation-questions.ts (comprobado). El título usa el total calculado (150).
- Gramática ELE: «no creo que sea» + subjuntivo, «si fuera…, podría», «a las siete», «ahora bien» como contraargumento.

Medición (build local): plantilla 0 % en las dos páginas antes y después (ya eran únicas); palabras propias 4.488 → 4.913 y 1.038 → 1.242.
Tests: suites renderizadas completas sin fallos (incluye 247 + 166); español neutro 0 hallazgos; inglés sin cambios en las raíces que vigila check-english-copy; Worker 26,88 MiB.
