# Paso 4 · Plan de poda (cómo leer 04_PLAN_PODA.csv)

Fecha: 26/11/2026.

El plan cubre las 4.816 URLs de la auditoría, el 100%, con una fila por URL. Se genera con `scripts/seo-prune-plan.py` a partir de `01_AUDITORIA.csv`. Las reglas están en el código y se citan en la columna `motivo` de cada fila.

## Resultado

| Acción | URLs |
|---|---|
| mantener | 1.687 |
| enriquecer (texto propio en el paso 6) | 84 |
| noindex, follow (la página sigue disponible para el usuario) | 2.955 |
| 301 | 88 (87 nuevas y 1 cadena existente que se corrige) |
| no indexable (clase PRO que responde 302 a /acceso) | 2 |

## Reglas, por orden de aplicación

1. **Las fichas gratis de /material-ele/fichas-gratis/* no se tocan.** Están reservadas para outreach (regla del 19/11).
2. **Lo que decidió el dueño se mantiene.** Las landings de compra /lp/* indexables por decisión del dueño (app/seo.ts) y la landing de marketing /online-spanish-teaching-resources no se redirigen. Se diferencian con el título en el paso 6.
3. **N1, /spanish-verbs/* (1.259 URLs): noindex.**
   - Son conjugaciones en inglés publicadas en 1 día y sin enlaces internos.
   - La SERP de «tener conjugation» la dominan SpanishDict, WordReference y Quizlet, y no es nuestro comprador.
   - Se quitan del sitemap y del hreflang de /conjugacion.
4. **N2, /conjugacion/{verbo} (1.258 URLs): noindex.**
   - Son tablas de plantilla publicadas en 1 día.
   - La SERP de «conjugación verbo tener» la dominan WordReference, Reverso y la RAE.
   - Siguen indexables /conjugacion y las 10 páginas de /conjugacion/irregulares/*.
5. **N3, subpáginas por regla de las mini-apps y de /verbos-con-preposicion (181 URLs): noindex.** Cada intención de ejercicios la cubre su hub. Las 16 de /dudas-del-espanol/* sí se quedan, porque cada una responde una duda distinta («haber o a ver») y no comparten intención. Se marcan para enriquecer.
6. **R, ejercicios de /material-ele/ejercicio/{tema} con mini-app propia: 301 a la mini-app.** Son 7 temas: ser y estar, por y para, indefinido e imperfecto, indicativo o subjuntivo, imperativo, gustar y pronombres de objeto. Es la misma intención («ejercicios de X»), y ninguno de los 7 tenía impresiones.
7. **R, /material-ele/gramatica/{tema} y sus niveles, cuando existe /material-ele/{tema}: 301 a /material-ele/{tema}.** Son 34 temas duplicados. La URL de destino concentra las impresiones. Los niveles van directo al destino final, sin cadena.
8. **N4, variantes por nivel /material-ele/{grupo}/{tema}/{nivel} sin impresiones ni clics en 27 días: noindex (249 URLs).** Las 55 variantes con demanda medida (por ejemplo, comprensión auditiva A1, A2, B1 y C1, o juegos de conversación B2) se quedan.
9. **N5: noindex en las variantes por nivel con el mismo título que su hub.** Son /material-ele/preguntas/* y /spanish-grammar-lessons/{nivel} con 0 impresiones.
10. **Grupos de canibalización Q.**
    - Q2: /guides/how-to-teach-spanish-online es la única dueña de «how to teach spanish online». Las otras dos guías se reenfocan en el paso 6, sin 301.
    - Q4: preposiciones tiene dos intenciones distintas (material y ejercicios) y se mantienen las dos URLs.
    - Q3 y Q8: son pares EN/ES con hreflang, no canibalización.

## Cadenas y bucles

El script resuelve cada destino hasta su URL final y se detiene si encuentra un bucle o un 301 hacia una URL con noindex. Resultado: 0 bucles y 1 cadena corregida. /material-ele/gramatica/perifrasis-verbales/c1 ya redirigía a /material-ele/gramatica/perifrasis-verbales, que ahora pasa a 301, así que el destino final es /material-ele/perifrasis-verbales.

## Ejecución

- **301:** lotes R1 a R5, de 20 URLs o menos cada uno. Las URLs que van a un mismo destino viajan en el mismo lote, para que ninguna página viva enlace a una URL redirigida.
- **noindex:** lotes N1 a N5, por familia. Se envían a la vez la cabecera `X-Robots-Tag: noindex, follow` y la salida del sitemap. Ejecutarlos por familia supera el tope de 20 URLs por lote, así que esa decisión la toma el dueño.
- **Reversión:** un noindex se quita borrando la regla. Un 301 se deshace quitando la entrada del mapa. Los dos se registran en el CSV de cada lote.
