# Paso 7 · Entidad y schema

Actualizado: 26/11/2026. Medido sobre el build local de la rama claude/seo-schema (el contenedor no llega a spanishcue.com ni a validator.schema.org; la validación se hace con tests/seo-schema-rendered.test.mjs contra el Worker construido).

## Qué declara cada plantilla

| Plantilla | Ejemplo | Tipos JSON-LD |
|---|---|---|
| Inicio | / | Organization + EducationalOrganization, WebSite |
| Material ELE, hubs | /material-ele, /material-ele/gramatica | CollectionPage, FAQPage, BreadcrumbList |
| Material ELE, tema y nivel | /material-ele/futuro, /material-ele/formatos/comprension-auditiva/a1 | WebPage, FAQPage, BreadcrumbList, VideoObject (y AudioObject en comprensión auditiva) |
| Material ELE, guías, fichas, actividades, ejercicios | /material-ele/guia/…, /material-ele/ficha/… | WebPage, FAQPage, BreadcrumbList (VideoObject si la página muestra la grabación) |
| Guías en inglés | /guides/assess-spanish-student-level-online | Article, BreadcrumbList |
| Guías de gramática en inglés | /guides/spanish-subjunctive-lesson-plan, /spanish-grammar-lessons/* | WebPage o CollectionPage, BreadcrumbList |
| Fichas de recursos | /resources/…, /recursos/… | LearningResource, BreadcrumbList |
| Mini-apps y dudas | /ser-o-estar, /dudas-del-espanol/… | WebPage, FAQPage, BreadcrumbList |
| Clases gratis | /gramatica/indefinido-e-imperfecto | LearningResource, BreadcrumbList |
| Conjugación (hub e irregulares) | /conjugacion | WebPage, FAQPage, BreadcrumbList |

Sin schema a propósito: /pricing, /autoestudio y /clase/* (páginas de producto o de alumno; no hay un tipo de resultado enriquecido que les corresponda sin inventar valoraciones).

## Cambios de este paso

1. La entidad de marca es una sola. La página de inicio publica el nodo completo con `@id` https://spanishcue.com/#organization. Desde este paso, cada `publisher`, `author` y `provider` del sitio (WebPage, CollectionPage, VideoObject, Article, LearningResource) usa ese mismo `@id`, y cada `isPartOf` usa el `@id` del WebSite. Antes eran organizaciones anónimas repetidas en cada página.
2. Tipo `["Organization", "EducationalOrganization"]`: SPANISHCUE publica material didáctico.
3. `sameAs` con los tres perfiles que lleva el dueño: LinkedIn (empresa 144023469), el canal de YouTube de SpanishCue (UCCLhj6h2hmjGQZ3XVLyrpUg, donde se publican el vídeo promocional y los Shorts) y Pinterest @spanishcue. Instagram queda fuera por decisión del dueño (26/11).
4. Las migas de las guías en inglés apuntan a la URL canónica de inicio (https://spanishcue.com/, con barra).

## «spanish cute»

Google corrige la búsqueda «spanishcue» a «spanish cute» (paso 2; con `nfpr=1` salimos 1.º con 5 URLs propias). Lo que se puede hacer desde el sitio ya está hecho: un solo nombre de entidad, `alternateName` con las grafías que escribe la gente («SpanishCue», «Spanish Cue», «spanishcue», «spanishcue.com») y perfiles enlazados con `sameAs`. El resto depende de señales externas: búsquedas de marca con clic en el sitio y menciones del nombre exacto en otras webs (paso 9, PR digital). Se vuelve a capturar la SERP de «spanishcue» el 3/12; no se promete un plazo.

## Validación

tests/seo-schema-rendered.test.mjs recorre una página por plantilla en el Worker construido y comprueba que cada bloque JSON-LD se puede leer, que tiene `@context` de schema.org, que cada tipo trae las propiedades que Google pide para su resultado (BreadcrumbList con posiciones y URLs absolutas, FAQPage con pregunta y respuesta, VideoObject con miniatura, fecha y archivo, Article con fechas, autor y editor) y que toda organización citada lleva el `@id` de la marca. Resultado: 18 de 18 tests en verde.
