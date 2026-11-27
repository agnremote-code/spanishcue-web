# Fase 1: informes con datos reales (/datos)

Misión «Ventaja estructural de buscadores» (Ale, 26/11/2026), fase 1. Estado al 26/11/2026.

## Qué hay publicado

| URL | Datos | Esquema |
| --- | --- | --- |
| /datos | Índice de informes y método | CollectionPage, DataCatalog |
| /datos/errores-preterito-perfecto-a2 | 43 errores de 6 alumnos de A2, 12–25/11/2026 | Article, Dataset (CSV), FAQPage, BreadcrumbList |
| /datos/errores-preterito-perfecto-a2.csv | Los 43 errores, sin datos personales | CC BY 4.0 |
| /material-ele/guia/ia-de-google-en-busquedas-de-profes-de-ele | 37 de 42 búsquedas con vista de IA (ya existía) | Article, FAQPage |

Las cifras de la página salen de `app/datos/preterito-perfecto-a2.ts`: la página las calcula de la lista, nunca a mano.

## Fuente y método

- Tabla de producción `homework_errors` (solo lectura, conector D1). Guarda cada respuesta equivocada de las tareas de Autoestudio, **no los aciertos**.
- Filtro: módulo `a2-01`, categoría «Tiempos del pasado», alumnos de la cuenta de Ale (rol owner). Quedan fuera las cuentas con alias `test…` y los alumnos de otros profesores (no publicamos datos de clientes).
- Consulta base:

```sql
SELECT e.question, e.answer_given, e.answer_correct, e.attempt, e.learner_id
FROM homework_errors e JOIN autoestudio_learners l ON l.id = e.learner_id
WHERE e.module_id = 'a2-01' AND e.category_label = 'Tiempos del pasado'
  AND e.owner_id = '<uid de Ale>' AND l.alias NOT LIKE 'test%'
ORDER BY e.question, e.learner_id, e.attempt;
```

- 74 filas. Una unidad por alumno y frase, con el primer intento fallido: 43 errores en 21 frases. Clasificación a mano en 8 tipos (participio, compuesto, uso, persona, concordancia, incompleta, orden, otro).
- Nunca se publican alias, ids ni fechas exactas por alumno.

## Lo que los datos permiten y lo que no

Al 26/11/2026 la tabla tiene 255 filas en total, casi todas de una sola cuenta de profesor. Por categoría, ninguna supera 7 alumnos reales. Con eso:

- Sí: informes cualitativos honestos («qué errores aparecen y en cuántos alumnos»), con la muestra en el primer párrafo.
- No: porcentajes de error (faltan los aciertos) ni «10 informes en 30 días». No se publica un informe con menos de 5 alumnos reales en la categoría.
- SER/ESTAR A1 (`a1-01`): 19 errores de 4 alumnos de Ale a 26/11. Hallazgo interesante (12 de 19 errores son de persona verbal, sobre todo usted/ustedes/vosotros, no de elegir ser o estar), pero queda en espera hasta tener al menos 5 alumnos.

Para informes con porcentajes haría falta guardar también los aciertos (migración D1 aditiva). Es una decisión de Ale.

## Cadencia

Martes y viernes se revisa si alguna categoría llegó a 5 alumnos reales; si llegó, se publica su informe. Si no, no se publica nada.

## Informe 2: qué autocompleta Google (27/11/2026)

- URL: /datos/que-autocompleta-google-en-gramatica · CSV agregado: /datos/autocompletado-gramatica-2026-11.csv (solo recuentos, no las sugerencias crudas).
- Fuente: `docs/seo-plan/fase0/suggest-20261126.csv` (342 búsquedas, 2.876 sugerencias; 40 búsquedas sin sugerencias). Cifras en `app/datos/autocompletado.ts`.
- Regla de conteo de «palabras dentro»: solo en búsquedas cuya semilla no contenía esa palabra (si no, «pdf» se cuenta solo).

```python
import csv
rows=list(csv.DictReader(open('docs/seo-plan/fase0/suggest-20261126.csv',encoding='utf-8')))
ok=lambda r: r['suggestion'].strip()
def dentro(lang,kw):
    base=[r for r in rows if r['hl']==lang and ok(r) and kw not in r['seed'].lower()]
    return sum(kw in r['suggestion'].lower() for r in base), len(base)
def por_modificador(lang,mod):
    seeds={r['seed'] for r in rows if r['hl']==lang and r['seed'].split()[-1]==mod}
    return sum(1 for r in rows if r['seed'] in seeds and ok(r))
```
