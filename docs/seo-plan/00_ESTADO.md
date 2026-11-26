# Plan SEO spanishcue.com · Estado

Actualizado: 26/11/2026 (tarde).

| Paso | Entregable | Estado |
|---|---|---|
| 1 Auditoría | 01_AUDITORIA.csv, 01_AUDITORIA_LEEME.md | Hecho. 4.816 URLs, método y hallazgos en el LEEME. |
| 2 Mapa de demanda | 02_MAPA_DEMANDA.csv, 02_MAPA_DEMANDA_LEEME.md, serp/ | Hecho. 43 búsquedas con SERP real de Google (26/11, IP de España). |
| 3 Prioridad ICE | 03_PRIORIDAD_ICE.csv | Hecho. 40 URLs de 43 candidatas, ICE = impacto × confianza × facilidad (1–5 cada uno); lote L1 = orden 1–20, L2 = 21–40. Impacto: intención de comprador y demanda medida; confianza: posición real en Google/GSC; facilidad: esfuerzo de reescritura y si depende de consolidar. |
| 4 Poda | 04_PLAN_PODA.csv, 04_PLAN_PODA_LEEME.md, lotes/ | Plan hecho (100% de las URLs) y los 10 lotes implementados, en PR hasta que se publiquen. 301 (88 URLs): R1 (PR #562), R2 (#564), R3 (#565), R4 y R5. noindex por familia (decisión del dueño, 26/11; 2.955 URLs): N1 /spanish-verbs (#563), N2 /conjugacion (#568), N3 subpáginas de 8 mini-apps (#570), N4 249 variantes por nivel sin impresiones (#571) y N5 8 variantes con el título del hub (#572). Sitemap: 3.511 URLs en main antes de la poda, 1.767 con los 10 lotes (medido con app/sitemap.ts el 26/11). |
| 5 Briefs | 05_BRIEFS/ (LEEME con índice) | Hecho. 40 briefs con SERP real de las 40 consultas: 9 se capturaron aparte (`serp/serp-google-20261126b.json`). Estamos en el top 10 en 6 de las 40: «juegos de conversación b2» (3.º), «fiestas y tradiciones b2» (2.º) y «conditional tense activities spanish» (6.º), además de las 3 del paso 2. |
| 6 Producción | lotes de 20 URLs o menos | En curso. L1 español: parte a (#567, 7 páginas de tema y nivel) y parte b (#569, 3 guías y fichas). L1 inglés (4 páginas): texto en /mnt/project-files/seo/plan/L1b-textos-ingles.md, espera la aprobación del dueño. L2 (21–40) pendiente. |
| 7 Entidad y schema | 06_SCHEMA/ | Pendiente |
| 8 Técnico | 07_TECNICO.md | Pendiente |
| 9 KPIs y PR digital | 08_KPIS.md, 09_DIGITAL_PR.md | Pendiente |

## Decisiones vigentes

- No se crean familias nuevas de páginas hasta cerrar la poda (paso 4) y la plantilla (paso 6).
- Las URLs que ya están en `main` y todavía no se publicaron (38 de mini-apps, PRs #550 y #552) no se anuncian en outreach hasta que el paso 4 decida si se quedan.

## Línea base (Search Console, 90 días)

394 URLs con impresiones, 3.384 impresiones y 190 clics. Se vuelve a medir el 3/12/2026.

## Riesgos abiertos

- 2.844 URLs indexables publicadas en los últimos 7 días (ver el hallazgo 2 del LEEME).
- 720 fichas /resources y /recursos casi duplicadas entre sí.

## Límites de acceso

- spanishcue.com y la competencia están bloqueados desde el contenedor.
- La SERP de Google se captura desde Chrome en la Mac de Ale (IP de España, sesión iniciada, pws=0). 73 de 326 páginas del top 10 no se pudieron medir (antibots).
- No hay datos de enlaces externos por URL (no hay Ahrefs ni Semrush).
