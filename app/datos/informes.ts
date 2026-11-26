/**
 * Data reports listed on /datos. Only reports built on real, dated figures: each one says how many
 * answers or searches it analyses, from when to when, and its limits. Never list a report before it
 * is published, and never announce future figures.
 */
export const DATOS_PATH = "/datos";

export type Informe = { path: string; title: string; summary: string; source: string; published: string; /** True when the report page publishes a Dataset (table + CSV). */ dataset: boolean };

export const informes: Informe[] = [
  {
    path: "/datos/errores-preterito-perfecto-a2",
    title: "Errores reales con el pretérito perfecto en A2",
    summary: "43 errores de 6 alumnos de A2: participios como «escribido» o «rompido», el auxiliar en la persona equivocada y «han salidos».",
    source: "Respuestas equivocadas en las tareas de Autoestudio A2, del 12 al 25 de noviembre de 2026.",
    published: "2026-11-26",
    dataset: true,
  },
  {
    path: "/material-ele/guia/ia-de-google-en-busquedas-de-profes-de-ele",
    title: "La IA de Google en las búsquedas de profesores de ELE",
    summary: "La vista creada con IA de Google salió en 37 de 42 búsquedas típicas de profesores de ELE y citó una mediana de 7 fuentes.",
    source: "42 búsquedas hechas el 26 de noviembre de 2026, desde España.",
    published: "2026-11-26",
    dataset: false,
  },
];
