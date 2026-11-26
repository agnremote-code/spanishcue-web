# Paso 8 · Técnico

Actualizado: 26/11/2026. Medido sobre el Worker construido localmente con los 10 lotes de poda, L1 y el schema (rama claude/seo-rewrite-l1-en, commit 6b79adb7), con `scripts/seo-crawl.mjs`. spanishcue.com está bloqueado desde el contenedor, así que producción se verifica después del deploy con el smoke oficial.

## Resultado del rastreo

| Comprobación | Resultado |
|---|---|
| URLs en el sitemap | 1.767 (3.511 en main antes de la poda) |
| Estado HTTP de las URLs del sitemap | 1.767 de 1.767 responden 200 |
| Canonical | 1.767 de 1.767 apuntan a sí mismas, sin parámetros |
| noindex dentro del sitemap | 0 |
| Título y descripción | ninguna página sin ellos; 0 títulos y 0 descripciones repetidos |
| H1 | exactamente 1 en las 1.767 |
| hreflang | 722 páginas (/recursos ↔ /resources), todas recíprocas y con las dos URLs en el sitemap; los pares con una página noindex no se declaran |
| lastmod | 932 de 1.767 entradas; solo donde hay una fecha real de publicación o cambio, nunca inventada |
| robots.txt | solo bloquea /api/ y los rastreadores de IA de app/crawler-policy.ts; sin Crawl-delay desde el 26/11 |

## Enlaces internos

Las páginas del sitemap enlazan 2.119 URLs que no están en el sitemap:

| Destino | URLs | Valoración |
|---|---|---|
| 200 con noindex (lotes N1–N5) | 1.709 | Correcto: siguen enlazadas para el usuario y Google sigue los enlaces (`noindex, follow`). |
| 200 indexables fuera del sitemap | 4 | /partners, /subscription-terms, /refunds, /legal. Páginas legales; no se añaden al sitemap. |
| PDF y feed | 25 | Plantillas en PDF y /material-ele/feed.xml. |
| 302 a /acceso | 337 | Clases PRO e /gramatica/* sin sesión: el muro de pago esperado. |
| 307 a /ingresar | 2 | /cuenta y /academias/panel. |
| 308 | 1 | /estados-unidos-basico → /estados-unidos-a2-b1 (ruta antigua mantenida). |
| **301 (URLs consolidadas)** | **41** | **Error.** 145 fichas (/material-ele/ficha/*) y 3 temas de gramática enlazaban temas y ejercicios consolidados. Corregido en este paso: los enlaces pasan por `livePath`. |

## Cambios de este paso

1. Fichas y temas de Material ELE: los enlaces a temas y ejercicios usan `livePath`, así que apuntan al destino final y no a una URL con 301. Test nuevo `tests/seo-links-rendered.test.mjs`: falla en el build anterior (3 de 10 páginas) y pasa con el arreglo.
2. IndexNow: además de las URLs nuevas, cada deploy envía una vez las URLs que salieron del sitemap (301 o noindex), para que Bing, DuckDuckGo y Yandex las vuelvan a rastrear y vean el cambio. Si la copia previa del sitemap falla, no se envía ninguna baja. Nunca se reenvía el sitemap completo.
3. Smoke de staging (PR #575): las páginas de nivel retiradas aceptan el destino consolidado que marca app/seo-prune.ts.

## Lo que no se mide aquí

- Core Web Vitals: no hay datos de campo (CrUX) ni acceso a PageSpeed desde el contenedor. No se afirma nada sobre velocidad hasta medirlo.
- Cobertura en Search Console y Bing: se mide el 3/12 con Windsor (Search Console) y en la revisión de Bing del 29/11.
