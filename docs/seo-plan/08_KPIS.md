# Paso 9a · KPIs del plan SEO

Actualizado: 26/11/2026. Línea base medida hoy con Search Console (Windsor, propiedad `sc-domain:spanishcue.com`), ventana de 28 días del 29/10 al 25/11/2026. No se fijan posiciones objetivo: el plan no promete rankings. Cada KPI tiene fuente, línea base, cuándo se mide y qué decisión dispara.

## 1. Lo que se mide

| # | KPI | Fuente y cómo | Línea base (28 días al 25/11) | Revisión |
|---|---|---|---|---|
| K1 | Clics orgánicos de Google | Search Console, suma por página | 210 | semanal; corte 3/12 y 7/1 |
| K2 | Impresiones | Search Console, suma por página | 3.310 | semanal |
| K3 | URLs del sitemap con al menos 1 impresión | Search Console ∩ sitemap del build podado | 377 de 1.767 (21 %) | 3/12, 7/1 |
| K4 | Clics e impresiones de las 40 URLs ICE | Search Console, URLs de 03_PRIORIDAD_ICE.csv | L1: 84 clics, 1.219 impr. (CTR 6,9 %). L2: 34 clics, 609 impr. (CTR 5,6 %). 11 de las 40 sin impresiones | 3/12 y 2 semanas después de publicar cada lote |
| K5 | URLs ICE con posición media ≤ 10 | Search Console, media ponderada por impresiones | 20 de 40 | 3/12, 7/1 |
| K6 | Impresiones que se pierden en la poda | Search Console de las 88 URLs con 301 más su destino, antes y después | Las 88 URLs con 301 sumaban 9 impresiones y 0 clics; las 2.955 noindex, 16 impresiones y 1 clic (6 URLs con datos) | 3/12 |
| K7 | Búsquedas de marca («spanishcue», «spanish cue», «spanish cute») | Search Console por consulta | 0 consultas visibles (debajo del umbral de anonimato de Google) | mensual |
| K8 | Altas al newsletter desde páginas orgánicas | D1, `newsletter_subscribers.source_path` (solo SELECT) | [SUPUESTO: sin medir hoy; el conector de Cloudflare tiene la sesión vencida] | 3/12 |
| K9 | Checkouts y suscripciones PRO | D1 `billing_purchase_claims`, `billing_subscriptions` | 1 clienta PRO, 0 checkouts desde la promo (bitácora de Omega, 26/11) | semanal, junto con Omega |

Consulta para K8, que se corre en el primer acceso de lectura a D1:

```sql
SELECT source_path, COUNT(*) FROM newsletter_subscribers
WHERE created_at >= '2026-11-26' GROUP BY source_path ORDER BY 2 DESC;
```

## 2. Qué decisión dispara cada número

- **K6 (poda).** Si en el corte del 3/12 un destino de 301 tiene menos impresiones que su origen y destino juntos antes del cambio, y el origen ya no aparece, se revisa ese par uno por uno. Con 9 impresiones en juego, la poda no explica una caída de K2: si K2 cae, se busca en otra parte.
- **K3 (cobertura).** El sitemap pasó de 3.511 a 1.767 URLs para concentrar el rastreo. Si en el corte del 7/1 K3 sigue por debajo del 25 %, la próxima tanda de trabajo es de calidad de plantilla sobre las URLs que nunca recibieron impresiones, no de páginas nuevas.
- **K4 y K5 (lotes).** Un lote reescrito se compara contra sí mismo 14 días después de publicarse, con la misma ventana de días. Si sus impresiones no suben, el lote siguiente no se publica igual: se revisa el brief contra la SERP antes de escribir.
- **K7 (marca).** Mientras sea 0, la señal externa de la entidad (09_DIGITAL_PR.md) es la prioridad del paso 9.
- **K8 y K9 (negocio).** Clics que no generan altas ni checkouts no cuentan como éxito del plan. Si K1 sube y K8 no, el problema es la conversión de la página (hilo de conversión), no el SEO.

## 3. Límites

- Search Console llega con 2–3 días de retraso; cada corte usa ventanas completas de 28 días.
- No hay Bing Webmaster en Windsor: Bing y ChatGPT se revisan a mano el 29/11 (hilo de búsqueda con IA).
- `users` no guarda el origen del alta, así que una suscripción no se puede atribuir a una página orgánica. Omega tiene la instrumentación de origen en su cola (punto 5); hasta entonces K9 se reporta sin atribución.
- Core Web Vitals: sin datos de campo; no se reportan.
