# Auditoría C1 · dominio operativo eficaz

Fecha: 2 de octubre de 2026. Contenido original de SpanishCue; no es un curso oficial del Instituto Cervantes ni una reproducción de exámenes DELE. El contrato de módulos, las trece estaciones y el reproductor de A1 se conservan. Los módulos son datos estáticos tipados, sin una fábrica de contenido en ejecución.

## Fuentes consultadas y decisiones de diseño

- [Consejo de Europa, MCER: volumen complementario, 2020](https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4): escalas de comprensión de discursos extensos, producción organizada, mediación de textos, facilitación de interacción y control fonológico. Se traducen en síntesis con atribución, exposiciones con reservas, reformulación comprobada y prosodia al servicio de la inteligibilidad. Las escalas orientan la exigencia; no se presentan como una lista cerrada de estructuras gramaticales.
- [PCIC, Gramática C1–C2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_c1-c2.htm): inventarios de tiempos, subordinación, relativos y organización de información. El mapa preexistente conserva sus identificadores; las semanas trabajan alternancia modal, condensación, foco, condiciones, aspecto, régimen y estilo narrativo. Las formas restringidas se contextualizan y no se exigen como habla cotidiana.
- [PCIC, Tácticas y estrategias pragmáticas C1–C2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/06_tacticas_pragmaticas_inventario_c1-c2.htm): construcción del discurso, voces, inferencias, ironía, atenuación y actos indirectos. Se desarrollan en escenas, correspondencia, actas, reportajes, negociación y análisis de atribuciones.
- [PCIC, Pronunciación y prosodia C1–C2](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/03_pronunciacion_inventario_c1-c2.htm): segmentación melódica, foco, orden marcado, registro y efectos expresivos. Cada semana incluye percepción y producción; la finalidad es claridad y control, no eliminación del acento.
- [Instituto Cervantes, guía DELE C1 renovada en 2024](https://examenes.cervantes.es/sites/default/files/Guia_examen_DELE_C1_2024_0.pdf): se consultó la guía vigente, no solo la versión anterior. La expresión, mediación e interacción fundamentan tareas de síntesis, exposición y negociación. Los criterios de coherencia, alcance, corrección y cumplimiento informan las listas de revisión. No se copian estímulos, textos, respuestas de candidatos ni rúbricas extensas; las actividades no pretenden reproducir la duración total de un examen.

## Progresión y trazabilidad

`objectives/c1.ts` contiene 84 objetivos: se preservan los anteriores, se desplaza el balance final de 18 a 20 y se añaden mediación del conflicto y síntesis para dos públicos en 18–19. `newObjectives` introduce cada objetivo una sola vez en su semana. `reviewObjectives` enlaza recuperaciones posteriores. Las actividades de recuperación nombran la semana, el objetivo y el caso anterior, y exigen contrastarlo con el nuevo; no son únicamente etiquetas de cobertura.

| Semana | Caso y género | Demanda central y transferencia |
|---|---|---|
| 1 | Calor urbano; divulgación y conferencia | Modo, evidencia y valoración; recomendación que conserva límites |
| 2 | Desplazamientos laborales; informe | Nominalización, agentes y promedios; resumen técnico y explicación pública |
| 3 | Reapertura de biblioteca; ensayo editorial | Hendidas, tema/foco y protagonismo; titular y presentación |
| 4 | Uso del patio; reglamento | Condición, concesión, consecuencia y excepción; respuesta institucional |
| 5 | Peatonalización; expediente y reunión | Balance de 1–4: dictamen condicionado y negociación |
| 6 | Ascensor; crónica y asamblea | Aspecto, insistencia y reparación; acta con compromisos |
| 7 | Reunión editorial; escena teatral | Ironía, subtexto e inferencias revisables; lectura e interpretación |
| 8 | Cierre editorial; comunicación laboral | Cortesía y responsabilidad; crítica constructiva y acuerdo |
| 9 | Corte de agua; tres fuentes y radio | Síntesis, atribución y comunicación de incertidumbre |
| 10 | Festival; ensayo y negociación | Balance de 6–9: distinguir cortesía, aceptación y reserva |
| 11 | Horarios de bibliotecas; tribuna y debate | Concesión, refutación y condiciones de revisión |
| 12 | Memoria institucional; edición de estilo | Colocaciones, connotación y cambio de registro |
| 13 | Ayuda de investigación; convocatoria | Régimen, requisitos y méritos; correo académico preciso |
| 14 | Mercado y patrimonio; ensayo y ponencia extensa | Notas jerarquizadas, voces y valoración separada |
| 15 | Premio ciudadano; dossier público | Balance de 11–14: artículo de opinión y defensa ante objeciones |
| 16 | Plataforma vecinal; reportaje | Dislocación, clíticos y línea editorial; retomar temas |
| 17 | Cierre de tienda; relato y conversación crítica | Indirecto libre, voz, tiempos restringidos; escena original |
| 18 | Sala compartida; mediación | Necesidades, condiciones, preferencias y costes de partes ausentes |
| 19 | Orientación universitaria; dossier contrapuesto | Dos públicos, mismos hechos; coherencia editorial |
| 20 | Archivo ciudadano; expediente final | Balance integrado: informe, mensaje vecinal, ponencia y negociación |

Los balances 5, 10 y 15 recuperan los cuatro módulos inmediatamente anteriores; el 20 recupera 16–19 y diez objetivos transversales anteriores. Todos los objetivos anteriores a la semana 20 reaparecen después. Los dos objetivos nuevos de la semana final son el balance y la ponencia de cierre: no introducen un sistema lingüístico huérfano.

## Cuatro destrezas y demanda real

- Lectura: 20 textos originales, 10.383 palabras en total, 476–548 por semana. Hay inferencia, estructura argumentativa, contraste de voces y dos mecanismos de comprensión. Las citas de observación se verifican contra el texto realmente mostrado.
- Escucha: 20 guiones originales distintos de las lecturas, 6.486 palabras en total. Los intercambios habituales tienen 289–327 palabras; la ponencia de la semana 14 tiene 659. La secuencia es global → detalle → inferencia/observación, con transcripción bajo el comportamiento existente del reproductor. No se ofrece la transcripción como primera tarea.
- Escritura: producción independiente de 240–320 palabras en semanas ordinarias, 280–360 en narrativa, 300–360 en balances y 320–400 más mensaje vecinal en el final. Los veinte modelos son realizaciones completas dentro del intervalo de la tarea, con desarrollo específico del caso; se exige escribir primero, comparar después y justificar revisiones. El contador final incluye el informe y el mensaje vecinal: 420–500 palabras en total.
- Oralidad: 40 tareas sustanciales. Cada semana contiene exposición de cuatro minutos y cuatro minutos de interacción con objeción, aclaración, reparación o negociación; la exposición final dura cinco minutos. Hay preparación, autoevaluación y continuación en clase.
- Fonología transversal: pausas lógicas, incisos, foco contrastivo, advertencias, reinicios, ironía contextual, cortesía, síntesis, toma de turno, acentuación, enlaces, dislocación, voces narrativas y comprobación mediadora. No constituye una quinta prueba.
- Evaluación: 160 ítems de balance, con reconocimiento, escucha, reformulación controlada, corrección de un error y producción abierta. Las respuestas correctas no ocupan una posición constante. Cada módulo emplea al menos cinco mecanismos de ejercicio.

## Audio: alcance verificado y límites

Se utiliza la arquitectura de síntesis existente. Los módulos proporcionan entre 23 y 28 solicitudes de audio, con texto no vacío y etiquetas de voz válidas. No se han creado ni declarado grabaciones humanas nuevas, ni se afirma haber escuchado archivos grabados. Las etiquetas regionales solicitan una voz al motor; no certifican realizaciones dialectales.

Las semanas 4 y 14 explicitan esta limitación. La variación se enseña mediante explicación, estrategias de aclaración y comparación guiada con muestras verificadas que el docente pueda aportar. La ironía se interpreta por contexto y se ensaya oralmente; no se atribuye al sintetizador una entonación irónica garantizada. La comprobación acústica de acentos y la calidad de voz disponible en cada dispositivo siguen requiriendo QA de reproducción, no pueden deducirse de la cobertura curricular.

## Verificación efectuada

- `node --test tests/autoestudio-c1.test.mjs`: **6/6** pruebas superadas.
- `validateModule`: **20/20** módulos, **0** problemas.
- `validateCourse` con C1 publicado y el registro completo de objetivos: **0** problemas.
- `duplicationAudit` sobre C1: **0** duplicados de ejercicios, evaluación, lectura o escucha.
- Cobertura C1: **84** introducciones únicas, **0** huérfanos y **0** objetivos anteriores al cierre sin recuperación posterior; **153** referencias de recuperación, incluidas las dos recuperaciones B2 de entrada.
- Solo español: ningún campo de apoyo inglés en C1. Sin marcadores de contenido pendiente.
- `npx tsc --noEmit`: superado en el estado compartido comprobado.
- `git diff --check` sobre los archivos C1: superado.

La auditoría comprueba contenido, contratos y referencias. No afirma QA visual, escucha humana, despliegue ni integración de acceso: esos trabajos corresponden a la integración del producto. La capa de mascota, el diseño adaptable y la protección de módulos se heredan del motor compartido, que esta entrega no modifica.

## Revisión del motor de respuestas exactas

Se revisaron las 60 reformulaciones gramaticales y las 40 reformulaciones de evaluación. Las paráfrasis se presentan ahora como producción abierta con modelo y lista de comprobación: una respuesta natural no se marca incorrecta por diferir literalmente. Cada evaluación conserva una laguna de forma o régimen con objetivo explícito; se aceptan las dos terminaciones del imperfecto de subjuntivo donde proceden. Los bancos son cerrados, reutilizables y sin claves repetidas. La recuperación de variedades distingue descripción lingüística de evidencia acústica y remite cualquier comparación de acentos a muestras verificadas, sin atribuirla a la síntesis. Las objeciones deben apoyarse en limitaciones presentes en el dossier o el audio. La prueba adicional impide volver a introducir reformulaciones semánticas con una única cadena de respuesta automática.

La revisión final sustituyó los modelos parciales por veinte producciones completas: 253–328 palabras en las tareas ordinarias y balances, una escena literaria de 291 palabras y un informe final con mensaje vecinal dentro de su intervalo total de 420–500. Una prueba comprueba límites inferior y superior y desarrollo en varios párrafos. Los modelos de doble destinatario mantienen las mismas reservas entre versiones y la escena narrativa evita sustituir desarrollo literario por comentario metalingüístico.
