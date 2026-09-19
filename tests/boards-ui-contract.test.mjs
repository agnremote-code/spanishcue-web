import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const component = await readFile(new URL("../app/boards/BoardLesson.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/boards/board.css", import.meta.url), "utf8");
const b1Page = await readFile(new URL("../app/tablero-de-eso-si-hablo/page.tsx", import.meta.url), "utf8");
const b2Page = await readFile(new URL("../app/tablero-no-es-tan-simple/page.tsx", import.meta.url), "utf8");
const b1Layout = await readFile(new URL("../app/tablero-de-eso-si-hablo/layout.tsx", import.meta.url), "utf8");
const b2Layout = await readFile(new URL("../app/tablero-no-es-tan-simple/layout.tsx", import.meta.url), "utf8");

test("shared board UI exposes the five main actions and six-category mixing", () => {
  for (const label of ["Anterior", "Otra pregunta", "Profundizar", "Cambiar categoría", "Pasar"]) {
    assert.match(component, new RegExp(label));
  }
  assert.match(component, /bank\.categories\.map/);
  assert.match(component, /aria-pressed/);
  assert.match(component, /Mezclar las elegidas/);
});

test("the 45-minute teaching spine and optional help are explicit", () => {
  for (const copy of ["3 min", "27 min", "5 min", "10 min", "Alumno pregunta", "Conversación final abierta"]) {
    assert.match(component, new RegExp(copy));
  }
  assert.match(component, /<details/);
  assert.match(component, /Ayudas opcionales/);
  assert.match(component, /sin penalización/i);
});

test("refresh, keyboard and presentation mode are implemented without click-time AI", () => {
  assert.match(component, /sessionStorage\.getItem/);
  assert.match(component, /sessionStorage\.setItem/);
  assert.match(component, /restoreSession/);
  assert.match(component, /addEventListener\("keydown"/);
  assert.match(component, /requestFullscreen/);
  assert.match(component, /fullscreenchange/);
  assert.match(component, /event\.defaultPrevented/);
  assert.match(component, /event\.ctrlKey/);
  assert.match(component, /!view\.choosing/);
  assert.match(component, /board-presentation/);
  assert.match(component, /board-presentation-exit/);
  assert.doesNotMatch(component, /\bfetch\s*\(/);
  assert.doesNotMatch(component, /OpenAI|anthropic|generative|speechRecognition/i);
});

test("invalid recovery and edited category choices cannot hide or break an active session", () => {
  assert.match(component, /choosing:\s*restored\s*\?\s*Boolean\(savedView\.choosing\)\s*:\s*true/);
  assert.match(component, /session\?\.selectedCategories\s*\?\?\s*selected/);
});

test("progress and bank size are separate and exhaustion has an explicit reset", () => {
  assert.match(component, /Banco:/);
  assert.match(component, /Sesión:/);
  assert.match(component, /Banco recorrido/i);
  assert.match(component, /Reiniciar sorteo/);
});

test("CSS provides large controls, mobile layout and reduced-motion safeguards", () => {
  assert.match(css, /min-height:\s*5[2-9]px/);
  assert.match(css, /@media\s*\(max-width:\s*720px\)/);
  assert.match(css, /grid-template-columns:\s*1fr/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /\.board-presentation/);
});

test("both routes use the shared component and publish level-specific metadata", () => {
  assert.match(b1Page, /BoardLesson/);
  assert.match(b1Page, /b1Board/);
  assert.match(b2Page, /BoardLesson/);
  assert.match(b2Page, /b2Board/);
  assert.match(b1Layout, /B1/);
  assert.match(b1Layout, /De eso sí hablo/);
  assert.match(b2Layout, /B2/);
  assert.match(b2Layout, /No es tan simple/);
});
