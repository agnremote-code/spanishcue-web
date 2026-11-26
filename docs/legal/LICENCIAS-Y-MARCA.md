# Licencias de recursos y marca · inventario 2026-11-26

Inventario hecho en el repositorio (rama `claude/cumplimiento-legal`). No es asesoramiento legal: los puntos marcados **⚖ revisar con abogado** necesitan una opinión profesional.

## 1. Mundos 3D y modelos

| Recurso | Dónde | Origen | Licencia | Estado |
| --- | --- | --- | --- | --- |
| Motor 3D `three` 0.186.1 | `node_modules/three` | three.js | MIT | OK |
| Geometría, texturas y personajes procedurales (Noche abierta y la mayoría de los mundos) | `app/*/…3d.ts`, `*.mjs` | Código propio | Propio | OK. Detalle por objeto en `docs/lessons/noche-abierta-3d-assets.md` |
| Dragón, pino, molino (Reino de la Rosa Dormida) | `public/reino/assets/*.glb` | Quaternius (vía Poly Pizza) | CC0 1.0 | OK. Créditos, URL y SHA-256 en `public/reino/ASSETS.md` |
| Humanos realistas (4 elencos × 15 GLB, ropa, zapatos, pelo) | `public/mundo-real/gente/` | MakeHuman (assets de sistema) | CC0 (`app/mundo-real/persona.ts`) | Falta un `ASSETS.md` con versión de MakeHuman y lista de assets usados |
| Muebles y objetos escaneados (55 GLB), texturas PBR, HDRI | `public/mundo-real/objetos`, `muebles`, `*.webp`, `*.hdr` | Poly Haven | CC0 (`app/mundo-real/real3d.ts`) | Falta un `ASSETS.md` con la URL de cada asset |
| `vista_ciudad_1-3.webp` | `public/mundo-real/` | Sin registro | ? | **Documentar origen** |
| Banderas de países | `public/roleplays-hispanos/banderas/` | flag-icons (Panayiotis Lipiridis) | MIT, licencia incluida | OK |

## 2. Mascota, ilustraciones y fotos

| Recurso | Origen | Licencia | Estado |
| --- | --- | --- | --- |
| Mascota oficial (`public/brand/mascot/*.webp`) | Arte de marca del proyecto; no hay registro de quién o qué herramienta lo creó | Propio (a confirmar) | **Ale: confirmar si la hizo una persona (contrato o cesión) o una IA (qué herramienta)** |
| Fotos de campaña (`public/brand/campaign/`) | Generadas con IA (`image_gen`), registro en `provenance.json` | Términos de la herramienta: la salida es del usuario | OK; ya rotuladas como modelos ficticios, no testimonios |
| Portadas y miniaturas de clases | Ilustraciones generadas con ChatGPT y capturas propias | Términos de OpenAI: la salida es del usuario | OK. ⚖ Las imágenes hechas solo con IA pueden no tener protección de derecho de autor: se usan, pero no se pueden “defender” igual que un arte propio |
| Fotos de Pexels (clase Argento, enlazadas en caliente) | `app/argento/data.ts` | Licencia Pexels: uso comercial permitido, sin atribución obligatoria | OK; mejor descargarlas y guardarlas con el ID, por si desaparecen |
| Fotos de Unsplash (Future City) | `app/future-city/` | Licencia Unsplash: uso comercial permitido | OK; idem |
| Tipografías | Google Fonts en clases concretas | SIL OFL | OK |

## 3. Voces y audio

| Recurso | Origen | Licencia | Estado |
| --- | --- | --- | --- |
| Voces de clases, autoestudio y escucha (es-MX Jorge y Dalia, Emma/Florian en audios viejos) | Generadas con la librería `edge-tts` (scripts `scripts/generate-*-audio.py`), que usa el servicio de lectura en voz alta de Microsoft Edge | **Sin licencia comercial clara.** `edge-tts` es un cliente no oficial; los términos de Microsoft para la lectura de Edge no cubren vender el audio generado | **⚖ Riesgo principal del inventario.** Recomendación: regenerar con Azure AI Speech (mismas voces neuronales, licencia comercial explícita). Costo aproximado: unos US$15 por millón de caracteres en voz neuronal estándar; el nivel gratuito da 0,5 M caracteres/mes. Para todo el catálogo probablemente se paga una vez entre US$10 y US$60. Necesita tu cuenta de Azure, por eso no lo hice |
| Voces del navegador (Web Speech) | Del sistema del alumno | No se distribuyen | OK |

## 4. Marca «SpanishCue»

- No hay registro. «Cue» solo es genérico, pero «SpanishCue» como conjunto tiene distintividad suficiente para intentar registrarlo. ⚖ Antes de pagar, búsqueda de anterioridad profesional (incluye «EnglishCue», también tuya: conviene registrar las dos con la misma estrategia).
- Recomendación, sin presentar nada (cuesta dinero):
  1. **Argentina (INPI)**, porque ahí estás: marca denominativa SPANISHCUE en clase 41 (educación, materiales didácticos online) y clase 9 o 42 (software o plataforma). Tasa del INPI por clase: unos pocos miles de pesos; con agente de marcas, el total suele ser bastante más. Duración: 10 años.
  2. **Unión Europea (EUIPO)**, porque tu público objetivo y el riesgo de copias están ahí: 850 € por la primera clase online, 50 € la segunda, 150 € cada una desde la tercera. Duración: 10 años. Las pymes de la UE tienen ayudas del Fondo para Pymes; tú no calificas si no tienes empresa en la UE.
  3. **Estados Unidos (USPTO)**: solo si EE. UU. pesa en ventas. Tasa base de US$350 por clase.
  4. Alternativa más barata para cubrir varios países: el sistema de Madrid (OMPI) a partir de la solicitud argentina. Argentina no es miembro del Protocolo de Madrid, así que hoy no aplica: hay que ir país por país.
- Mientras tanto: usar «SpanishCue™» (no «®») es legal y avisa que la reclamas como marca.

Las tasas son orientativas, de memoria (no verificadas hoy): confirmar en la web de cada oficina antes de decidir.
