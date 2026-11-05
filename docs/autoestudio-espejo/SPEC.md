# Autoestudio espejo: cada semana repasa las clases de gramática

Pedido de Ale (2026-11-05): todo el contenido de Autoestudio (los «homework»
que reciben sus alumnos por link /s/) se reemplaza por contenido nuevo que
sigue **las mismas clases de gramática** que dan en vivo, en el mismo orden,
separadas por semana. Es self-study: no se explica igual que en la clase,
se repasa de otra manera. Los links no cambian.

## Qué no cambia

- 6 niveles × 20 semanas, mismas rutas `/autoestudio/<nivel>/semana-N`, mismos
  ids (`a1-01`…), mismo nombre de export (`a1w01`), mismo `stop` (ciudad y país
  del viaje), mismo tipo `Module` y mismo motor. Semanas 5, 10, 15 y 20 siguen
  siendo `checkpoint`.
- Las semanas gratis siguen igual (app/autoestudio/access.ts).

## Qué cambia

- `docs/autoestudio-espejo/mapa.json` dice qué clases de gramática tiene cada
  semana (`code`, `title`, `path` público y `lesson`, el archivo con el cuerpo
  de la clase). A0 (G001) va en A1 semana 1.
- Cada semana se reescribe entera en
  `app/autoestudio/curriculum/modules/<nivel>/wNN.ts`.
- Los objetivos se regeneran desde `docs/autoestudio-espejo/objetivos/<nivel>-wNN.json`
  (el script `ensamblar.mjs` arma `curriculum/objectives/<nivel>.ts`).
- El inglés de A1–B2 se regenera desde fuentes con clave en español en
  `/mnt/project-files/autoestudio/espejo/ingles/<nivel>-wNN.json`.

## Cómo se escribe una semana

1. Leé en `mapa.json` las clases de la semana y abrí cada archivo `lesson`
   (solo lo necesario: teoría, ejemplos, errores típicos). Esa es la gramática
   que el alumno vio en clase.
2. Escribí el módulo como **repaso autónomo** de esas clases:
   - `title`/`subtitle`: nombran lo que se repasa (no copies el título de la clase).
   - `theory`: al menos una parte por clase. Explicación nueva, más breve y
     guiada para alguien que estudia solo: ejemplos distintos de la clase,
     tablas, errores frecuentes, un consejo. Nunca copies frases de la clase.
   - `grammar` y `practice`: ejercicios sobre esas clases (todas las clases de
     la semana tienen que tener práctica).
   - `vocabulary`, `pronunciation`, `listening`, `reading`, `writing`,
     `speaking`: un tema de vida real que haga **usar** la gramática de la
     semana (el diálogo y la lectura están llenos de esas formas; el noticing
     las señala). Las cuatro destrezas siempre.
   - `useInClass`: tarjetas para traer a la próxima clase con el profesor.
   - `quiz` y `complete`: evalúan las clases de la semana.
   - `related`: un enlace por clase: `{ path: <path del mapa>, label: "Clase: <título>" }`.
   - Checkpoint (5, 10, 15, 20): repasa sus propias clases **y** integra las
     cuatro semanas anteriores (mencioná esas clases en teoría y práctica).
3. `reviewObjectives: []` y `prerequisites: []`: los completa el ensamblador.
4. `newObjectives`: exactamente los ids de tu JSON de objetivos.

## Objetivos de la semana (`docs/autoestudio-espejo/objetivos/<nivel>-wNN.json`)

Array de filas `[semana, código, slug, tema, logro "Puedo…", prerrequisitos, extra]`
(mismo formato que `ObjectiveRow` en curriculum/define.ts). El id es
`<nivel>.<código>.<slug>`.

- Una fila `gram` por clase del mapa, con slug = código de la clase en
  minúscula (`g001`). `extra = { related: [<path de la clase>] }`.
- Además, cada semana: una fila de cada `voc`, `pron`, `lis`, `read`, `wri`,
  `spk`, `fun`; de A2 en adelante también `disc`. Checkpoints: además una fila `rev`.
- Slug de las filas que no son `gram`: empieza con `wNN-` (ej. `w03-objetos`)
  para que nunca choque con otra semana. Solo `[a-z0-9-]`.
- Prerrequisitos: solo ids de filas de tu misma semana o ids `gram` de clases
  anteriores del mapa (ej. `a1.gram.g002`). Ninguno más.

## Idioma

- Español neutro, trato de **tú** en toda instrucción (nunca voseo en
  instrucciones; el voseo solo aparece como variación regional explicada, y una
  tabla nunca dice «tú / vos» en la misma celda).
- Paradigmas completos internacionales (yo, tú, él/ella/usted, nosotros,
  vosotros, ellos/ellas/ustedes) cuando haya tablas de conjugación.
- A1: cada parte de teoría con `support` en inglés y `en` en ejemplos útiles; `canDoEn`.
- A2: algo de `support`/`en` si ayuda.
- B1, B2, C1, C2: **ningún** campo `support`, `en` ni `canDoEn` en el módulo.
- C1 y C2: todo en español.
- Nada de `TODO`, `placeholder`, `próximamente`, `coming soon`.

## Mínimos por nivel (los tests los verifican)

Comunes: `validateModule()` sin problemas (curriculum/validate.ts);
`listening.stages` = gist, detail, notice; escritura con un paso que diga
«revisa» o «corrige»; el modelo de escritura cae dentro de `writing.words`
(salvo C2 no-checkpoint); ningún ejercicio, ítem de quiz, escucha ni lectura
repetido de otra semana (escribí todo original).

| Nivel | Lectura (palabras) | Escucha (palabras) | `writing.words[0]` | Habla |
|---|---|---|---|---|
| A1 | ≥ 80 | ≥ 70 | ≥ 30 | ≥ 2 tareas |
| A2 | ≥ 110 | ≥ 95 | ≥ 60 | suma ≥ 180 s |
| B1 | ≥ 180 | ≥ 170 | ≥ 130, modelo ≥ 2 párrafos | una tarea ≥ 120 s y una de interacción (pregunta, negocia, responde, aclara o interlocutor) |
| B2 | ≥ 300 (checkpoint ≥ 450) | ≥ 220 (checkpoint ≥ 330) | ≥ 200, modelo ≥ 3 párrafos | todas ≥ 120 s |
| C1 | ≥ 450 | ≥ 280 | ≥ 220, modelo ≥ 3 párrafos | una ≥ 240 s |
| C2 | ≥ 600 | ≥ 380 | ≥ 400 | suma ≥ 480 s |

Reglas extra por nivel:

- A2: en checkpoints la lectura y la escucha crecen (5 < 10 < 15 < 20); la
  semana 20 llega a ≥ 375 palabras de lectura y ≥ 225 de escucha.
- B1: un ejercicio cuyo `id` termina en `retrieval`; el quiz no usa `transform`
  y tiene un ítem `open` cuyo `prompt` empieza con «Reformulación» (con `model`
  y `checklist` ≥ 3).
- B2: `reading.tasks` incluye uno de tipo `open`; `grammar` tiene ≥ 3 ítems
  `open` cuyo prompt incluye «Texto de partida:» y cuyo checklist incluye una
  línea con «no es una respuesta única»; sin `transform` en grammar ni en quiz;
  `writing.context` sin «fragmento» ni «parcial».
- C1: cada cita de `reading.noticing` aparece literal en la lectura; sin
  `transform` en grammar ni en quiz; cada `gap` del quiz con `hint` de más de
  20 caracteres; ítems `open` de grammar con `model` y checklist ≥ 2; más de 20
  clips de audio (ítems con `audio`, guion y producción cuentan);
  `writing.context` sin «fragmento» ni «parcial».
- C2: un ejercicio de `practice` cuyo `id` termina en `recuperacion` (en
  checkpoint con ≥ 8 ítems `open` con `model`); el quiz tiene un `transform`
  cuya `instruction` no dice «Escribe literalmente la segunda»; fuera de
  checkpoint `writing.model[0]` empieza con «Modelo parcial de apertura»; en
  checkpoint el modelo es completo y cae en el rango.
- Respuestas de opción múltiple en posiciones variadas (no siempre la 0).

## Inglés (A1–B2)

Para cada semana A1–B2, un JSON `{ "<texto en español>": "<inglés natural>" }`
en `/mnt/project-files/autoestudio/espejo/ingles/<nivel>-wNN.json` que cubra
cada texto que lista el checker. Conservá el marcado (`**`, `_`, `` ` ``) y los
huecos `___` igual que en el español. Si un texto es una forma citada que no se
traduce, poné el mismo español.

## Verificación de cada semana

```
node scripts/autoestudio-espejo/check.mjs <nivel> <semana>
```

Tiene que decir `OK`. No toques ningún otro archivo del repo, no hagas
operaciones de git.

## Aprendido en el piloto (A1 1–2, C2 1)

- Si una clase se solapa con la de otra semana (ej. G002 ya toca género y
  artículos, que G003 y G004 desarrollan), cada semana se queda con lo que es
  propio de su clase y no repite lo de la vecina.
- Tablas de paradigma completo (con vosotros/ustedes) solo cuando la semana
  conjuga verbos; no hace falta inventar formas que la clase no tocó.
- El validador compara opciones en minúscula: dos opciones que solo difieren en
  mayúsculas cuentan como duplicadas (usa la sílaba sola, etc.).
- Claves con o sin comillas sirven (el ensamblador acepta ambas).
- A2 checkpoints, para que crezcan aunque los escriban personas distintas:
  lectura 5: 150–200, 10: 220–290, 15: 300–360, 20: 380–460 palabras;
  escucha 5: 120–150, 10: 160–190, 15: 195–220, 20: 230–280 palabras.
- C2 checkpoint: `…-recuperacion` con ≥ 8 ítems; C2 normal: con ≥ 4.
- Preguntas del quiz siempre específicas (el control de duplicados compara solo `q`; «¿Cuál es correcta?» choca con otras semanas).
