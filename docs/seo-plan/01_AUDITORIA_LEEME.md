# Paso 1 · Auditoría (cómo leer 01_AUDITORIA.csv)

Fecha: 26/11/2026. Base: `main` 58b4ede5 compilado localmente (el repo manda sobre la web).

## De dónde sale cada columna

| Columna | Fuente y método |
|---|---|
| url | Las 4.809 URLs del `sitemap.xml` del build local, más 7 URLs con impresiones en Search Console que el sitemap ya no lista. Total: 4.816. |
| clics_90d, impresiones_90d, posicion_media | Search Console por página vía Windsor, 90 días [SUPUESTO: ventana que termina el 25/11/2026, la que devuelve Windsor por defecto]. La posición es la media ponderada por impresiones. |
| intencion | Asignada por tipo de ruta (tabla `INTENT` en `scripts/seo-audit.py`). Se revisa a mano en el paso 2 para las URLs priorizadas. |
| similitud_plantilla_pct | Porcentaje de shingles de 6 palabras del `<main>` que se repiten en al menos el 30% de las páginas del mismo tipo de ruta o en al menos el 20% de todo el sitio (menú, pie, caja de newsletter). Mide texto de plantilla, no datos (una tabla de conjugación cuenta como texto propio). |
| similitud_hermana_max_pct | Jaccard máximo entre los shingles propios de la página y los de otra página del mismo tipo. Detecta casi duplicados que comparten texto con un subgrupo pequeño y que la columna anterior no ve. |
| texto_propio_palabras | Palabras del `<main>` multiplicadas por (1 − similitud de plantilla). |
| edad_familia_dias | Días desde el commit que creó el directorio `app/` de la ruta. Menos de 28 días significa que el silencio en Search Console todavía no prueba nada. |
| click_depth | Clics desde `/` siguiendo enlaces `<a>` internos del HTML renderizado. «huérfana» significa que solo se llega por sitemap o hreflang. |
| indexable | Estado HTTP, `noindex` en meta o cabecera, y canonical a otra URL. |
| canibalizacion_grupo | `Q`: la misma consulta de Search Console reparte impresiones entre 2 o más URLs. `T`: el mismo título una vez quitado el nivel CEFR. |
| veredicto | Regla automática, provisional. La decisión final por URL es del paso 4 (04_PLAN_PODA.csv). |

Regla del veredicto, en orden: no indexable → revisar destino; con clics o 20+ impresiones → mantener (o enriquecer si la plantilla llega al 60%); en grupo de canibalización o con hermana al 80%+ → consolidar; plantilla al 85%+ → noindex; familia de 28+ días, cero impresiones y plantilla al 50%+ → noindex; plantilla al 60%+ → enriquecer; resto → mantener.

## Hallazgos

1. **Hay muy poca demanda captada.** De 4.816 URLs, solo 394 (8,2%) tuvieron alguna impresión en 90 días: 3.384 impresiones y 190 clics en total.
2. **El 59% del sitio indexable se publicó en los últimos 7 días.** Son 2.844 URLs:
   - /conjugacion: 1.270
   - /spanish-verbs: 1.259
   - /verbos-con-preposicion: 54
   - mini-apps de reglas: 152
   - fichas gratis: 108

   Este es el mayor riesgo de contenido a escala: más de 2.800 URLs en 48 horas, en un dominio que tenía 394 URLs con impresiones.
3. **/spanish-verbs (1.259 URLs) no recibe ni un enlace `<a>` del sitio.** Google solo la descubre por sitemap y hreflang. Tiene cero impresiones, que a un día de vida no prueba nada.
4. **/resources y /recursos (720 fichas de clase, en EN y ES) son casi duplicados entre sí.** La similitud con la página hermana más cercana tiene una mediana del 67% al 70% y llega al 93%. 473 de esas páginas superan el 60%. Las dos familias juntas suman 442 impresiones.
5. **Las variantes por nivel de /material-ele/{grupo}/{tema}/{nivel} (unas 350 URLs) comparten título.** Hay 61 grupos de 2 a 6 páginas con el mismo título una vez quitado el nivel. Hay demanda real por nivel en algunos formatos: «comprensión auditiva A1» tiene 66 impresiones y 11 clics. Por eso no se pueden fusionar todas a ciegas.
6. **Canibalización real por consulta.** Hay 3 grupos:
   - «free spanish teaching resources»: /online-spanish-teaching-resources y /spanish-teacher-resources.
   - «how to teach spanish online»: 3 guías.
   - «preposiciones ejercicios»: /material-ele/ejercicio/preposiciones y /material-ele/preposiciones.

   Los grupos Q3 y Q8 son pares EN/ES con hreflang, así que no son canibalización.
7. **Algunas clases PRO con impresiones responden con un 302 a /acceso.** Por ejemplo /suiza-en-relieve y /la-maquina-que-elimina-cosas-a2. La señal debería ir a su ficha pública. Se trata en los pasos 4 y 8.
8. **El tráfico se concentra en los hubs y en los temas de /material-ele.** /material-ele/* suma 611 impresiones. Le siguen formatos por nivel (431), /guides (378) y /spanish-conversation-questions (313).

## Límites

- El contenedor no accede a spanishcue.com ni a los sitios de la competencia (el proxy devuelve 403). El rastreo es del build local, que incluye 38 URLs de mini-apps ya fusionadas pero todavía no publicadas.
- Search Console omite las consultas anonimizadas, así que la suma por consulta es menor que la suma por página.
- No hay datos de enlaces externos por URL [SUPUESTO: casi nulos, según el diagnóstico del 26/11 de que la brecha con la competencia es de enlaces y antigüedad].

## Reproducir

```
npm run build
node scripts/seo-crawl.mjs crawl.jsonl                # sitemap completo
node scripts/seo-crawl.mjs extra.jsonl extra.txt      # rutas sueltas
cat crawl.jsonl extra.jsonl > all.jsonl
AUDIT_DATE=2026-11-26 python3 scripts/seo-audit.py all.jsonl gsc_page.json gsc_query_page.json docs/seo-plan/01_AUDITORIA.csv
```
