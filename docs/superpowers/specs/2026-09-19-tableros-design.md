# Tableros de conversación: diseño

## Objetivo

Agregar **Tableros** como estilo de la categoría pedagógica existente `Conversación`, al mismo nivel que `Universos` y `Modo Play`. No se crea una sexta categoría. La colección `PAÍSES` permanece separada y sus lecciones no se duplican.

El primer lanzamiento incluye dos clases PRO de 45 minutos:

- B1 · **De eso sí hablo**: conversación accesible mediante historias conectadas, experiencias, descripciones y razones.
- B2 · **No es tan simple**: experiencias, argumentos, contrastes y revisión de postura, sin pragmática C2 ni debate abstracto permanente.

## Arquitectura

`app/boards/` será un módulo autocontenido. Los bancos B1 y B2 viven en archivos separados; el motor puro gestiona selección, mezcla, historial, progreso y serialización; `BoardLesson.tsx` implementa la interfaz compartida. Las rutas solo aportan configuración, metadata y el banco correspondiente.

El estado persistido en `sessionStorage` contiene la versión del formato, la selección de categorías, el orden barajado, la posición actual, el historial y la repregunta abierta. Al refrescar, el motor normaliza el estado contra el banco actual. No hay red, IA ni contenido generado al hacer clic.

## Modelo de contenido

Cada banco contiene seis categorías exactas, 72 preguntas principales (12 por categoría) y 12 preguntas finales. Cada principal tiene exactamente dos repreguntas redactadas específicamente para ella. En B2, exactamente 24 principales incluyen una repregunta opcional que cambia una condición.

Los IDs son estables y tienen prefijo de nivel. Los textos se comparan de forma normalizada con `Uno o el otro`, `¿Y ahora qué?` y `La Ruleta de Tu Vida`; la validación rechaza duplicados internos exactos y coincidencias sustanciales por similitud léxica.

## Motor y navegación

El inicio permite seleccionar una categoría o mezclar varias. La selección baraja una cola sin repetición. `Otra pregunta` avanza en esa cola; al agotarse muestra un estado claro y permite reiniciar solo esa selección. `Anterior` restaura la tarjeta ya vista y su estado estable. `Profundizar` abre las dos repreguntas específicas; `Cambiar categoría` vuelve al selector sin borrar el progreso guardado; `Pasar` registra un salto sin penalización y avanza.

El contador separa `Banco: 72 + 12 finales` de `Sesión: n vistas`, sin sugerir que haya que completar todo el banco. El profesor puede reiniciar la sesión explícitamente.

## Experiencia de clase

La guía visible marca 45 minutos: 3 de entrada, 27 de preguntas elegidas, 5 para que el alumno pregunte al profesor y 10 de conversación final abierta. La clase usa solo una parte del banco. Las preguntas personales se pueden pasar sin penalización.

La vista ofrece modo presentación, controles grandes, atajos de teclado, diseño móvil y ayudas opcionales. Los atajos no se activan dentro de controles de formulario. No hay ruleta, fantasía, personajes, cronómetro obligatorio, sonidos automáticos, reconocimiento de voz ni evaluación de opiniones. La interfaz es propia y no replica Wordwall ni Baamboozle.

## Accesibilidad y adaptación

Las acciones tienen texto visible, foco perceptible y `aria-live` para cambios de pregunta. El selector usa botones con estado `aria-pressed`. En móvil los controles pasan a una sola columna y conservan áreas táctiles amplias. `prefers-reduced-motion` elimina transiciones no esenciales.

## Integración diferida

Esta rama no modifica `app/lesson-catalog.ts`, `app/Library.tsx`, navegación ni build central. Exporta metadata de nivel, estilo y colección por separado desde `app/boards/catalog-adapter.ts`. La tarea 8 deberá:

1. añadir `boards` al tipo `conversationMode`;
2. incorporar las dos entradas del adaptador al catálogo PRO;
3. mostrar `TABLEROS` junto a `UNIVERSOS` y `MODO PLAY`;
4. mantener `PAÍSES` fuera de esos tres estilos;
5. ejecutar catálogo, gate PRO, build y pruebas después de conectar.

La integración no se considera terminada en esta rama.

## Verificación

Un script valida conteos, categorías, IDs, duplicados, cambio de condición B2, finales y nivel lingüístico mediante reglas explícitas. Las pruebas del motor cubren sorteo, mezcla, historial, reset, restauración, banco agotado y saltos. Las pruebas de contrato cubren rutas, metadata, 45 minutos, ayudas, presentación, móvil y teclado. El preview se captura localmente en anchos de escritorio y móvil.
