/**
 * Data report «Errores reales con el pretérito perfecto (A2)».
 *
 * Source: production table homework_errors, module a2-01 (Autoestudio A2, semana 1), category
 * «Tiempos del pasado», read-only on 2026-11-26. Only learners of the owner's own teacher account,
 * without the accounts named «test…». One row per learner and item: the first wrong answer.
 * The method and the query live in docs/seo-plan/fase1/LEEME.md. Never edit a figure by hand:
 * the page computes every count from this list.
 */

export type ErrorType = "participio" | "compuesto" | "uso" | "persona" | "concordancia" | "incompleta" | "orden" | "otro";

export const errorTypes: Record<ErrorType, { label: string; explanation: string }> = {
  participio: { label: "Participio mal formado", explanation: "El participio sale regularizado o inventado: «abrido», «escribido», «rompido»." },
  compuesto: { label: "No forma el tiempo compuesto", explanation: "Falta el participio o el auxiliar: «he abro», «ha devuelve», «hos vemos»." },
  uso: { label: "Uso del pretérito perfecto", explanation: "No reconoce qué expresa la frase (novedad, resultado o experiencia) o lo combina con «ayer»." },
  persona: { label: "Persona del auxiliar", explanation: "El auxiliar no concuerda con el sujeto: «mis compañeros y yo he trabajado»." },
  concordancia: { label: "Participio con -s", explanation: "El participio se pone en plural: «han salidos»." },
  incompleta: { label: "Frase incompleta", explanation: "La forma verbal está bien, pero falta parte de la frase pedida." },
  orden: { label: "Orden de palabras", explanation: "Algo se mete entre el auxiliar y el participio o el pronombre va en otro sitio." },
  otro: { label: "Otro", explanation: "Confunde un verbo con otro: «hemos venido» por «hemos visto»." },
};

export type RealError = { item: string; given: string; expected: string; type: ErrorType };

export const realErrors: RealError[] = [
  { item: "Abro las ventanas de la oficina. (Reescribe con «hoy».)", given: "he abrido las ventanas de la oficina", expected: "Hoy he abierto las ventanas de la oficina.", type: "participio" },
  { item: "Abro las ventanas de la oficina. (Reescribe con «hoy».)", given: "Hoy", expected: "Hoy he abierto las ventanas de la oficina.", type: "incompleta" },
  { item: "Abro las ventanas de la oficina. (Reescribe con «hoy».)", given: "Ya he abro las ventanas", expected: "Hoy he abierto las ventanas de la oficina.", type: "compuesto" },
  { item: "Abro las ventanas de la oficina. (Reescribe con «hoy».)", given: "hoy he abro las ventanas de la oficina", expected: "Hoy he abierto las ventanas de la oficina.", type: "compuesto" },
  { item: "Chicos, ya he ponido las bebidas en la nevera. (Corrige la frase.)", given: "Chicos, ya he ponido las bebidas en la nevera.", expected: "Chicos, ya he puesto las bebidas en la nevera.", type: "participio" },
  { item: "Doña Carmen ___ el puesto de frutas a las seis.", given: "han abierto", expected: "ha abierto", type: "persona" },
  { item: "Esta semana mis compañeros y yo ___ mucho en el taller.", given: "he trabajado", expected: "hemos trabajado", type: "persona" },
  { item: "Esta semana mis compañeros y yo ___ mucho en el taller.", given: "han trabajado", expected: "hemos trabajado", type: "persona" },
  { item: "Este mes hemos ahorrado bastante dinero. (¿Qué expresa?)", given: "un resultado que se ve ahora", expected: "una novedad de hoy o de esta semana", type: "uso" },
  { item: "Este mes hemos ahorrado bastante dinero. (¿Qué expresa?)", given: "un resultado que se ve ahora", expected: "una novedad de hoy o de esta semana", type: "uso" },
  { item: "Tu amiga ve que tienes la camiseta mojada. Explicas: (elige la frase)", given: "Se me ha caído el café encima ayer.", expected: "Se me ha caído el café encima.", type: "uso" },
  { item: "Hemos ___ (poner) las sillas en el patio.", given: "pudido", expected: "puesto", type: "participio" },
  { item: "Hoy no he ___ (hacer) nada especial.", given: "hacando", expected: "hecho", type: "participio" },
  { item: "Los turistas ___ temprano del parque nacional.", given: "han salidos", expected: "han salido", type: "concordancia" },
  { item: "Los turistas ___ temprano del parque nacional.", given: "han salidos", expected: "han salido", type: "concordancia" },
  { item: "Los turistas ___ temprano del parque nacional.", given: "han salidos", expected: "han salido", type: "concordancia" },
  { item: "Los turistas ___ temprano del parque nacional.", given: "han salidos", expected: "han salido", type: "concordancia" },
  { item: "Los vecinos rompen la piñata. (Reescribe con «hoy».)", given: "hoy, los vecinos han rompido", expected: "Hoy los vecinos han roto la piñata.", type: "participio" },
  { item: "Los vecinos rompen la piñata. (Reescribe con «hoy».)", given: "Hoy han los vecinos rompetido la piñata", expected: "Hoy los vecinos han roto la piñata.", type: "participio" },
  { item: "Los vecinos rompen la piñata. (Reescribe con «hoy».)", given: "Hoy los vecinos han rato la piñata.", expected: "Hoy los vecinos han roto la piñata.", type: "participio" },
  { item: "Los vecinos rompen la piñata. (Reescribe con «hoy».)", given: "hoy los vecinos hes rompido la piñata", expected: "Hoy los vecinos han roto la piñata.", type: "participio" },
  { item: "Los vecinos rompen la piñata. (Reescribe con «hoy».)", given: "hoy los vecinos rompen la pinata", expected: "Hoy los vecinos han roto la piñata.", type: "compuesto" },
  { item: "Me he quemado la mano con la sartén y me duele. (¿Qué expresa?)", given: "una experiencia de la vida", expected: "un resultado que se ve ahora", type: "uso" },
  { item: "Mi abuelo nunca ha ___ (escribir) un mensaje de texto.", given: "escribito", expected: "escrito", type: "participio" },
  { item: "Mi abuelo nunca ha ___ (escribir) un mensaje de texto.", given: "escribido", expected: "escrito", type: "participio" },
  { item: "Mi hija devuelve los libros a la biblioteca. (Reescribe con «esta mañana».)", given: "Esta manana, mi hija ha devuelvido los libros a la biblioteca", expected: "Esta mañana mi hija ha devuelto los libros a la biblioteca.", type: "participio" },
  { item: "Mi hija devuelve los libros a la biblioteca. (Reescribe con «esta mañana».)", given: "Esta mañana ha devuelto los libros a la biblioteca", expected: "Esta mañana mi hija ha devuelto los libros a la biblioteca.", type: "incompleta" },
  { item: "Mi hija devuelve los libros a la biblioteca. (Reescribe con «esta mañana».)", given: "está Mañana mi hija ha devuelto a la biblioteca", expected: "Esta mañana mi hija ha devuelto los libros a la biblioteca.", type: "incompleta" },
  { item: "Mi hija devuelve los libros a la biblioteca. (Reescribe con «esta mañana».)", given: "ha devuelve", expected: "Esta mañana mi hija ha devuelto los libros a la biblioteca.", type: "compuesto" },
  { item: "Mi hija devuelve los libros a la biblioteca. (Reescribe con «esta mañana».)", given: "esta manana has mi hija devuelve los libros a la biblioteca", expected: "Esta mañana mi hija ha devuelto los libros a la biblioteca.", type: "compuesto" },
  { item: "Se ha roto el vaso: hay cristales en el suelo. (¿Qué expresa?)", given: "una novedad de hoy o de esta semana", expected: "un resultado que se ve ahora", type: "uso" },
  { item: "Todavía / no / le / he / dicho / nada / a / Paula. (Ordena.)", given: "Todavía no he dicho nada a le Paula.", expected: "Todavía no le he dicho nada a Paula.", type: "orden" },
  { item: "Vemos una película coreana. (Reescribe con «esta semana».)", given: "Esta semana, hemos veido una pelicula coreana", expected: "Esta semana hemos visto una película coreana.", type: "participio" },
  { item: "Vemos una película coreana. (Reescribe con «esta semana».)", given: "Esta samana nosotros hambos una película coreana", expected: "Esta semana hemos visto una película coreana.", type: "compuesto" },
  { item: "Vemos una película coreana. (Reescribe con «esta semana».)", given: "Hemos venido", expected: "Esta semana hemos visto una película coreana.", type: "otro" },
  { item: "Vemos una película coreana. (Reescribe con «esta semana».)", given: "esta manana hos vemos una pelicula coreana", expected: "Esta semana hemos visto una película coreana.", type: "compuesto" },
  { item: "Vosotras nunca ___ un plato tan picante, ¿verdad?", given: "hemos comido", expected: "habéis comido", type: "persona" },
  { item: "Ya han ___ (repartir) los folletos en el barrio.", given: "repieta", expected: "repartido", type: "participio" },
  { item: "Ya han ___ (repartir) los folletos en el barrio.", given: "repartio", expected: "repartido", type: "participio" },
  { item: "¿Has / dormido / alguna / vez / en / una / tienda / de / campaña? (Ordena.)", given: "¿Has alguna vez dormido en una tienda de campaña?", expected: "¿Has dormido alguna vez en una tienda de campaña?", type: "orden" },
  { item: "¿Has bailado salsa alguna vez? (¿Qué expresa?)", given: "una novedad de hoy o de esta semana", expected: "una experiencia de la vida", type: "uso" },
  { item: "¿Quién ha ___ (decir) eso? No es verdad.", given: "decho", expected: "dicho", type: "participio" },
  { item: "¿Quién ha ___ (decir) eso? No es verdad.", given: "decido", expected: "dicho", type: "participio" },
];

/** Every wrong participle written in the sample, including second and later attempts. */
export const participleForms: { verb: string; correct: string; written: string[]; irregular: boolean }[] = [
  { verb: "romper", correct: "roto", written: ["rompido (2 alumnos)", "rompetido", "rato"], irregular: true },
  { verb: "escribir", correct: "escrito", written: ["escribito", "escribido"], irregular: true },
  { verb: "decir", correct: "dicho", written: ["decho", "decido"], irregular: true },
  { verb: "poner", correct: "puesto", written: ["ponido", "pudido"], irregular: true },
  { verb: "devolver", correct: "devuelto", written: ["devuelvido", "devolvido"], irregular: true },
  { verb: "hacer", correct: "hecho", written: ["hacando", "hicho"], irregular: true },
  { verb: "abrir", correct: "abierto", written: ["abrido"], irregular: true },
  { verb: "ver", correct: "visto", written: ["veido"], irregular: true },
  { verb: "repartir", correct: "repartido", written: ["repieta", "repartio"], irregular: false },
];

export const report = {
  path: "/datos/errores-preterito-perfecto-a2",
  csvPath: "/datos/errores-preterito-perfecto-a2.csv",
  learners: 6,
  /** Wrong answers stored, counting every retry. */
  wrongAnswers: 74,
  /** Learners who wrote «han salidos». */
  salidosLearners: 4,
  /** Learners with at least one badly formed participle. */
  participleLearners: 5,
  from: "2026-11-12",
  to: "2026-11-25",
  periodLabel: "entre el 12 y el 25 de noviembre de 2026",
  dates: { datePublished: "2026-11-26", dateModified: "2026-11-26" },
} as const;

export function countByType(errors: RealError[] = realErrors) {
  const counts = new Map<ErrorType, number>();
  for (const error of errors) counts.set(error.type, (counts.get(error.type) ?? 0) + 1);
  return (Object.keys(errorTypes) as ErrorType[]).map((type) => ({ type, count: counts.get(type) ?? 0 })).sort((a, b) => b.count - a.count);
}
