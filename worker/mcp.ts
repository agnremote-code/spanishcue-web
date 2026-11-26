/**
 * Public, read-only MCP server (Model Context Protocol, Streamable HTTP,
 * stateless JSON responses) at https://spanishcue.com/mcp.
 *
 * AI assistants (Claude, ChatGPT, Cursor…) connect to it and call SpanishCue's
 * FREE teaching material only: verb conjugation, irregular verbs by tense, the
 * open grammar mini-apps (por/para, ser/estar, indefinido/imperfecto,
 * indicativo/subjuntivo, verbos con preposición, imperativo, gustar,
 * pronombres), the open exercises and conversation questions of /material-ele,
 * the teaching guides, the free worksheets and a search over /llms.txt (which
 * lists open pages only). Every answer links back to its spanishcue.com page.
 *
 * No auth, no state, no writes, no user data, nothing PRO: every source below
 * is a public page's own data module. Loaded lazily by worker/index.ts, so the
 * isolate's startup heap only pays for it when /mcp is called.
 */
import { llmsTxt } from "../app/llms";
import { SITE_ORIGIN } from "../app/seo";
import { PERSONS, TENSE_GROUPS, verbFromParam, verbPage } from "../app/conjugacion/verbos";
import { irregularRows, tiempoBySlug, tiempoPages } from "../app/conjugacion/tiempos";
import { porParaPage } from "../app/por-o-para/data";
import { usosPorPara } from "../app/por-o-para/usos";
import { adjPage, usoPage } from "../app/ser-o-estar/data";
import { adjetivos, usos as usosSerEstar } from "../app/ser-o-estar/contenido";
import { pasadoPage } from "../app/indefinido-o-imperfecto/data";
import { marcadores } from "../app/indefinido-o-imperfecto/marcadores";
import { modoPage } from "../app/indicativo-o-subjuntivo/data";
import { expresiones } from "../app/indicativo-o-subjuntivo/expresiones";
import { prepPage } from "../app/verbos-con-preposicion/data";
import { verbosPrep } from "../app/verbos-con-preposicion/verbos";
import { gapPage } from "../app/ejercicios-gramatica/data";
import { gapFamilies } from "../app/ejercicios-gramatica/families";
import { ejercicioPages, preguntasPages } from "../app/material-ele/actividades";
import { guiaPages, type GuiaBlock } from "../app/material-ele/guias";
import { guiaRespuestas } from "../app/material-ele/guia-respuestas";
import { FICHAS_GRATIS_PATH, fichasGratis } from "../app/material-ele/fichas-gratis";

export const MCP_PATH = "/mcp";
export const MCP_DOCS_PATH = "/llms.txt";
export const MCP_SERVER_NAME = "com.spanishcue/spanishcue";
const SERVER_INFO = { name: "spanishcue", title: "SpanishCue", version: "1.0.0" };
const PROTOCOLS = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];
export const MCP_DESCRIPTION = "Material gratis para enseñar español (ELE): conjugación, dudas de gramática, ejercicios y fichas.";
const INSTRUCTIONS = "SpanishCue (spanishcue.com) tiene clases de español interactivas y listas para dar, de A1 a C2, para profesores de español como lengua extranjera (ELE) y tutores online. Estas herramientas devuelven material gratuito: conjugación de más de 1.200 verbos, verbos irregulares por tiempo, reglas con ejercicios para las dudas de gramática más frecuentes (por o para, ser o estar, indefinido o imperfecto, indicativo o subjuntivo, verbos con preposición, imperativo, gustar, pronombres), ejercicios con soluciones, preguntas de conversación por nivel, guías didácticas y fichas gratis. Cada resultado trae su enlace a spanishcue.com: compártelo con la persona para que abra la página completa, con el ejercicio interactivo o la ficha para imprimir.";

type Json = Record<string, unknown>;
type ToolResult = { text: string; error?: boolean };

const url = (path: string) => `${SITE_ORIGIN}${path}`;
/** Lowercase, no accents (ñ kept), single spaces: «Indefinido» and «indefinído» match. */
const norm = (text: unknown) => String(text ?? "").toLowerCase().normalize("NFD").replace(/[̀-̂̄-ͯ]/g, "").normalize("NFC").replace(/[¿?¡!«»"“”.,;:()]/g, " ").replace(/\s+/g, " ").trim();
const footer = (path: string, label = "Página completa") => `\n\n${label}: ${url(path)}`;
const clampLimit = (value: unknown, fallback: number, max: number) => Math.min(Math.max(Number(value) || fallback, 1), max);
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

/** Score how well a query matches an entry's names (exact > contained > every word). */
function score(query: string, names: string[]): number {
  const q = norm(query);
  if (!q) return 0;
  const words = q.split(" ").filter((w) => w.length > 1);
  let best = 0;
  for (const raw of names) {
    const name = norm(raw);
    if (!name) continue;
    let s = name === q ? 100 : name.includes(q) ? 40 : q.includes(name) && name.length > 2 ? 30 : 0;
    const hits = words.filter((w) => name.includes(w)).length;
    if (words.length && hits === words.length) s += 15;
    s += hits * 3;
    best = Math.max(best, s);
  }
  return best;
}

// ---------------------------------------------------------------- search

type Doc = { title: string; url: string; text: string; section: string };
let docs: Doc[] | undefined;
function searchIndex(): Doc[] {
  if (docs) return docs;
  const out: Doc[] = [];
  let section = "";
  for (const line of llmsTxt().split("\n")) {
    if (line.startsWith("## ")) section = line.slice(3).trim();
    const m = /^- \[([^\]]+)\]\((https:\/\/spanishcue\.com[^)]*)\):?\s*(.*)$/.exec(line);
    if (m) out.push({ title: m[1], url: m[2], text: m[3], section });
  }
  for (const page of ejercicioPages) out.push({ title: page.h1, url: url(page.path), text: page.description, section: "Ejercicios con soluciones" });
  for (const page of preguntasPages) out.push({ title: page.h1, url: url(page.path), text: page.description, section: "Preguntas de conversación" });
  for (const page of fichasGratis) out.push({ title: page.freeH1, url: url(page.freePath), text: page.freeDescription, section: "Fichas gratis" });
  docs = out;
  return out;
}

function search(args: Json): ToolResult {
  const query = norm(args.consulta);
  if (!query) return { text: "Escribe qué buscas, por ejemplo «ficha subjuntivo B1», «preguntas de conversación A2» o «actividad para la primera clase».", error: true };
  const limit = clampLimit(args.limite, 8, 20);
  const terms = query.split(" ").filter((t) => t.length > 2);
  const found = searchIndex().map((doc) => {
    const title = norm(doc.title), body = `${norm(doc.text)} ${norm(doc.section)}`;
    let s = title === query ? 50 : title.includes(query) ? 20 : body.includes(query) ? 8 : 0;
    for (const t of terms) s += (title.includes(t) ? 4 : 0) + (body.includes(t) ? 1 : 0);
    if (terms.length && !terms.every((t) => title.includes(t) || body.includes(t))) s -= 6;
    return { doc, s };
  }).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, limit);
  if (!found.length) return { text: `Ninguna página de SpanishCue coincide con «${query}». Mapa completo del material abierto: ${url("/llms.txt")}` };
  return { text: `Material de SpanishCue para «${query}»:\n\n${found.map(({ doc }) => `- ${doc.title} (${doc.section})\n  ${doc.url}${doc.text ? `\n  ${doc.text.slice(0, 220)}` : ""}`).join("\n")}` };
}

// ---------------------------------------------------------------- conjugation

const TENSE_ALIASES: Record<string, string> = { "preterito indefinido": "indefinido", "preterito perfecto simple": "indefinido", "pasado simple": "indefinido", "preterito imperfecto": "imperfecto", subjuntivo: "presente de subjuntivo" };

function conjugar(args: Json): ToolResult {
  const asked = String(args.verbo ?? "").trim().toLowerCase().replace(/^(el verbo|verbo)\s+/, "");
  const verb = verbFromParam(asked);
  if (!verb) return { text: `«${asked}» no está en la lista de verbos de SpanishCue (más de 1.200). Escribe el infinitivo, por ejemplo «tener» o «salir».${footer("/conjugacion", "Conjugador")}`, error: true };
  const page = verbPage(verb);
  const cj = page.conjugation;
  const wanted = norm(args.tiempo);
  const tenseWanted = TENSE_ALIASES[wanted] ?? wanted;
  const line = (label: string, forms: readonly string[], key: string) => {
    const marks = page.highlight[key as keyof typeof page.highlight] ?? [];
    return `${label}: ${forms.map((form, i) => (form ? `${PERSONS[i]} ${form}${marks[i] ? "*" : ""}` : "")).filter(Boolean).join(", ")}`;
  };
  const groups = TENSE_GROUPS.map((group) => {
    const tenses = group.tenses.filter((t) => !tenseWanted || norm(t.label).includes(tenseWanted));
    return tenses.length ? `${group.mood}\n${tenses.map((t) => line(t.label, cj.tenses[t.key], t.key)).join("\n")}` : "";
  }).filter(Boolean);
  const imperative = !tenseWanted || "imperativo".includes(tenseWanted)
    ? `\nImperativo afirmativo: tú ${cj.tenses.imperativo[1]}, usted ${cj.tenses.imperativo[2]}, nosotros ${cj.tenses.imperativo[3]}, vosotros ${cj.tenses.imperativo[4]}, ustedes ${cj.tenses.imperativo[5]}\nImperativo negativo: no ${cj.tenses.imperativoNegativo[1]}, no ${cj.tenses.imperativoNegativo[2]}, no ${cj.tenses.imperativoNegativo[5]} (tú, usted, ustedes)`
    : "";
  const notes = page.notes.length ? `\n\nNotas:\n${page.notes.map((n) => `- ${n}`).join("\n")}` : "";
  return { text: `${page.h1} (verbo ${page.irregular ? "irregular" : "regular"}; ${page.model.label})\nGerundio: ${cj.gerund} · Participio: ${cj.participle}\n\n${groups.join("\n\n") || `No hay un tiempo llamado «${args.tiempo}». Se muestran todos.`}${imperative}\n\n* = forma irregular.${notes}${footer(page.path, "Conjugación completa con ejercicio corregido")}` };
}

function irregulares(args: Json): ToolResult {
  const wanted = norm(args.tiempo);
  const page = tiempoBySlug.get(wanted.replace(/ de /g, "-").replace(/\s+/g, "-")) ?? tiempoPages.map((p) => ({ p, s: score(wanted, [p.label, p.slug.replace(/-/g, " ")]) })).sort((a, b) => b.s - a.s).find((x) => x.s > 0)?.p;
  if (!page) return { text: `Elige un tiempo: ${tiempoPages.map((p) => p.label.toLowerCase()).join(", ")}.${footer("/conjugacion/irregulares", "Verbos irregulares por tiempo")}`, error: Boolean(wanted) };
  const rows = irregularRows(page);
  const groups = new Map<string, string[]>();
  for (const row of rows) {
    const list = groups.get(row.group) ?? [];
    if (list.length < 8) list.push("tense" in page ? `${row.verb} (${row.forms.filter((form, i) => form && row.marks[i]).slice(0, 2).join(", ")}…)` : `${row.verb} → ${row.forms[0]}`);
    groups.set(row.group, list);
  }
  const patterns = page.patterns.map((p) => `- ${p.name}: ${p.text}`).join("\n");
  const list = [...groups].slice(0, 14).map(([group, verbs]) => `${group}: ${verbs.join("; ")}`).join("\n");
  return { text: `${page.h1} (${rows.length} verbos)\n${page.intro.join(" ")}\n\nPatrones:\n${patterns}\n\nEjemplos por modelo:\n${list}${footer(page.path, "Lista completa con ejercicio")}` };
}

// ---------------------------------------------------------------- grammar doubts

type Quiz = { before: string; after: string; options: readonly string[]; answer: number };
type Entry = { names: string[]; name: string; level: string; head: string; rule: string; tip: string; path: string; quiz: Quiz[] };
const fill = (q: Quiz) => `${q.before}${q.options[q.answer]}${q.after}`;
const gap = (q: Quiz) => `${q.before}___${q.after} (${q.options.join(" / ")}) → ${q.options[q.answer]}`;

type Topic = { key: string; label: string; hub: string; entries: () => Entry[] };
const TOPICS: Topic[] = [
  { key: "por-o-para", label: "¿Por o para?", hub: "/por-o-para", entries: () => usosPorPara.map((u) => { const p = porParaPage(u); return { names: [u.name, u.slug.replace(/-/g, " ")], name: u.name, level: u.level, head: `Se usa «${u.prep}»`, rule: u.rule, tip: u.tip, path: p.path, quiz: p.quiz }; }) },
  { key: "ser-o-estar", label: "¿Ser o estar?", hub: "/ser-o-estar", entries: () => [
    ...usosSerEstar.map((u) => { const p = usoPage(u); return { names: [u.name, u.slug.replace(/-/g, " ")], name: u.name, level: u.level, head: `Se usa «${u.verb}»`, rule: u.rule, tip: u.tip, path: p.path, quiz: p.quiz }; }),
    ...adjetivos.map((a) => { const p = adjPage(a); return { names: [a.adj, `ser ${a.adj}`, `estar ${a.adj}`], name: `Ser ${a.adj} o estar ${a.adj}`, level: a.level, head: "Cambia de significado", rule: `Ser ${a.adj}: ${a.ser}. Estar ${a.adj}: ${a.estar}.`, tip: a.note, path: p.path, quiz: p.quiz }; }),
  ] },
  { key: "indefinido-o-imperfecto", label: "¿Indefinido o imperfecto?", hub: "/indefinido-o-imperfecto", entries: () => marcadores.map((m) => { const p = pasadoPage(m); return { names: [m.marker, m.slug.replace(/-/g, " ")], name: m.marker, level: m.level, head: m.uso === "depende" ? "Depende del sentido" : `Suele ir con ${m.uso}`, rule: m.rule, tip: m.tip, path: p.path, quiz: p.playable }; }) },
  { key: "indicativo-o-subjuntivo", label: "¿Indicativo o subjuntivo?", hub: "/indicativo-o-subjuntivo", entries: () => expresiones.map((e) => { const p = modoPage(e); return { names: [e.expr, e.slug.replace(/-/g, " ")], name: e.expr, level: e.level, head: e.mood === "depende" ? "Depende del sentido" : `Va con ${e.mood}`, rule: e.rule, tip: e.tip, path: p.path, quiz: p.playable }; }) },
  { key: "verbos-con-preposicion", label: "Verbos con preposición", hub: "/verbos-con-preposicion", entries: () => verbosPrep.map((v) => { const p = prepPage(v); return { names: [v.v, `${v.v} ${v.p}`], name: `${v.v} ${v.p}`, level: v.level, head: `${v.v} lleva «${v.p}»${v.wrong ? `, no «${v.wrong}»` : ""} (${v.meaning})`, rule: v.note, tip: "", path: p.path, quiz: p.quiz }; }) },
  ...gapFamilies.map((f): Topic => ({ key: f.key, label: f.label, hub: f.path, entries: () => f.pages.map((g) => { const p = gapPage(f, g); return { names: [g.name, g.slug.replace(/-/g, " ")], name: g.name, level: g.level, head: g.name, rule: g.rule, tip: g.tip, path: p.path, quiz: p.quiz }; }) })),
];
const entryCache = new Map<string, Entry[]>();
const entriesOf = (topic: Topic) => entryCache.get(topic.key) ?? (entryCache.set(topic.key, topic.entries()), entryCache.get(topic.key)!);

function duda(args: Json): ToolResult {
  const wanted = norm(args.tema).replace(/ /g, "-");
  const topic = TOPICS.find((t) => t.key === wanted) ?? TOPICS.find((t) => wanted && (t.key.includes(wanted) || wanted.includes(t.key)));
  if (!topic) return { text: `Temas disponibles: ${TOPICS.map((t) => t.key).join(", ")}.`, error: true };
  const entries = entriesOf(topic);
  const query = String(args.consulta ?? "").trim();
  if (!query) return { text: `${topic.label}: ${entries.length} usos, cada uno con su regla y un ejercicio.\n\n${entries.map((e) => `- ${e.name} (${e.level}): ${url(e.path)}`).join("\n")}${footer(topic.hub, "Página con ejercicio mezclado")}` };
  const ranked = entries.map((e) => ({ e, s: score(query, e.names) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s);
  const best = ranked[0]?.e;
  if (!best) return { text: `No hay una entrada de «${topic.label}» para «${query}». Entradas: ${entries.map((e) => e.name).join(", ")}.${footer(topic.hub)}`, error: true };
  const examples = best.quiz.slice(0, 3).map((q) => `- ${fill(q)}`).join("\n");
  const exercise = best.quiz.map((q, i) => `${i + 1}. ${gap(q)}`).join("\n");
  const others = ranked.slice(1, 4).map((x) => `${x.e.name} ${url(x.e.path)}`).join(" · ");
  return { text: `${topic.label} · ${best.name} (nivel ${best.level})\n${best.head}. ${best.rule}${best.tip ? `\nOjo: ${best.tip}` : ""}\n\nEjemplos:\n${examples}\n\nEjercicio (la solución va después de la flecha):\n${exercise}${others ? `\n\nTambién puede interesar: ${others}` : ""}${footer(best.path, "Página con el ejercicio interactivo")}` };
}

// ---------------------------------------------------------------- material ELE

function ejercicio(args: Json): ToolResult {
  const query = String(args.tema ?? "").trim();
  const level = String(args.nivel ?? "").toUpperCase();
  const pool = ejercicioPages.filter((p) => !level || p.level.includes(level));
  const ranked = (query ? pool.map((p) => ({ p, s: score(query, [p.parent.label, p.exercise.title, p.slug.replace(/-/g, " ")]) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s) : pool.map((p) => ({ p, s: 1 })));
  const page = ranked[0]?.p;
  if (!page) return { text: `No hay un ejercicio de «${query}»${level ? ` en ${level}` : ""}. Ejercicios disponibles: ${ejercicioPages.map((p) => p.parent.label).join(", ")}.${footer("/material-ele/actividades", "Banco de actividades")}`, error: true };
  const items = page.exercise.items.map((it, i) => `${i + 1}. ${it.q} → ${it.a}`).join("\n");
  return { text: `${page.h1} (nivel ${page.level})\n${page.exercise.instructions}\n\n${items}${footer(page.path, "Ejercicio interactivo y ficha en PDF")}` };
}

function preguntas(args: Json): ToolResult {
  const level = String(args.nivel ?? "").toUpperCase().trim();
  const page = preguntasPages.find((p) => p.level === level);
  if (!page) return { text: `Hay preguntas para estos niveles: ${preguntasPages.map((p) => p.level).join(", ")}.`, error: true };
  return { text: `${page.h1}\nOrdenadas de más fácil a más difícil; elige tres o cuatro por clase.\n\n${page.set.items.map((q, i) => `${i + 1}. ${q}`).join("\n")}${footer(page.path, "Ficha para imprimir o proyectar")}` };
}

const plain = (text: string) => text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => (href.startsWith("/") ? `${label} (${url(href)})` : label));
const blockText = (block: GuiaBlock) => (block.type === "p" ? plain(block.text) : block.items.map((item) => `- ${plain(item)}`).join("\n"));

function guia(args: Json): ToolResult {
  const query = String(args.tema ?? "").trim();
  if (!query) return { text: `Guías para profesores de español:\n\n${guiaPages.map((p) => `- ${p.h1}: ${url(p.path)}`).join("\n")}` };
  const page = guiaPages.map((p) => ({ p, s: score(query, [p.h1, p.slug.replace(/-/g, " "), ...p.keywords]) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s)[0]?.p;
  if (!page) return { text: `No hay una guía sobre «${query}». Guías: ${guiaPages.map((p) => p.h1).join("; ")}.`, error: true };
  const short = guiaRespuestas[page.slug];
  const summary = short ? `En pocas palabras: ${short.answer}\n${short.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}` : plain(page.intro);
  const sections = page.sections.slice(0, 6).map((s) => `## ${s.title}\n${s.blocks.slice(0, 2).map(blockText).join("\n")}`).join("\n\n");
  return { text: `${page.h1}\n\n${summary}\n\n${sections}${footer(page.path, "Guía completa")}` };
}

function fichas(args: Json): ToolResult {
  const level = String(args.nivel ?? "").toUpperCase().trim();
  const pool = fichasGratis.filter((p) => !level || p.level === level);
  if (!pool.length) return { text: `Niveles: ${LEVELS.join(", ")}.${footer(FICHAS_GRATIS_PATH, "Fichas gratis")}`, error: true };
  return { text: `Fichas ELE completas y gratis${level ? ` de nivel ${level}` : ""} (teoría, ejercicios y soluciones en PDF, sin registro):\n\n${pool.map((p) => `- ${p.level} · ${p.name}: ${url(p.freePath)}`).join("\n")}${footer(FICHAS_GRATIS_PATH, "Todas las fichas gratis")}` };
}

// ---------------------------------------------------------------- tool list

const str = (description: string) => ({ type: "string", description });
const level = (description: string) => ({ type: "string", enum: LEVELS, description });
const readOnly = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };
type Tool = { name: string; title: string; description: string; inputSchema: Json; run: (args: Json) => ToolResult };
const TOOLS: Tool[] = [
  { name: "buscar_material_ele", title: "Buscar material ELE", description: "Busca en el material gratuito de SpanishCue para profesores de español: guías didácticas, fichas, ejercicios con soluciones, preguntas de conversación, dudas de gramática, conjugación y clases gratis. Devuelve títulos, enlaces y resúmenes.", inputSchema: { type: "object", properties: { consulta: str("Qué buscar, por ejemplo «subjuntivo B1», «preguntas de conversación A2» o «primera clase con un alumno nuevo»."), limite: { type: "integer", minimum: 1, maximum: 20, description: "Número máximo de resultados (8 por defecto)." } }, required: ["consulta"] }, run: search },
  { name: "conjugar_verbo", title: "Conjugar un verbo en español", description: "Conjuga un verbo español en todos los tiempos (indicativo, compuestos, subjuntivo e imperativo), con las formas irregulares marcadas, gerundio, participio y notas sobre su modelo.", inputSchema: { type: "object", properties: { verbo: str("El infinitivo, por ejemplo «tener», «dormir» u «oír»."), tiempo: str("Opcional: un solo tiempo, por ejemplo «indefinido» o «presente de subjuntivo».") }, required: ["verbo"] }, run: conjugar },
  { name: "verbos_irregulares", title: "Verbos irregulares por tiempo", description: "Lista de verbos irregulares en un tiempo verbal (presente, indefinido, imperfecto, futuro, condicional, presente o imperfecto de subjuntivo, imperativo, participios, gerundios), agrupados por modelo y con los patrones explicados.", inputSchema: { type: "object", properties: { tiempo: str("El tiempo, por ejemplo «indefinido», «futuro» o «participios».") }, required: ["tiempo"] }, run: irregulares },
  { name: "resolver_duda_gramatical", title: "Resolver una duda de gramática", description: "Regla, ejemplos y ejercicio con soluciones para las dudas de gramática más frecuentes del español: por o para, ser o estar (y adjetivos que cambian de significado), indefinido o imperfecto según el marcador temporal, indicativo o subjuntivo según la expresión, verbos con preposición, imperativo, gustar y pronombres de objeto.", inputSchema: { type: "object", properties: { tema: { type: "string", enum: TOPICS.map((t) => t.key), description: "El tema de la duda." }, consulta: str("Opcional: el uso, marcador, expresión, adjetivo o verbo concreto, por ejemplo «causa», «listo», «de repente», «ojalá» o «soñar». Sin consulta, devuelve la lista de entradas.") }, required: ["tema"] }, run: duda },
  { name: "ejercicio_con_soluciones", title: "Ejercicio con soluciones", description: "Un ejercicio de gramática de huecos con sus soluciones, listo para clase, por tema (ser y estar, subjuntivo, pretérito perfecto…) o por nivel MCER.", inputSchema: { type: "object", properties: { tema: str("El tema, por ejemplo «subjuntivo» o «pronombres»."), nivel: level("Nivel MCER (opcional).") } }, run: ejercicio },
  { name: "preguntas_de_conversacion", title: "Preguntas de conversación por nivel", description: "Lista de preguntas de conversación para la clase de español de un nivel (A1 a C2), ordenadas de más fácil a más difícil.", inputSchema: { type: "object", properties: { nivel: level("Nivel MCER.") }, required: ["nivel"] }, run: preguntas },
  { name: "guia_para_profesores", title: "Guía didáctica para profesores de ELE", description: "Resumen de una guía de SpanishCue para profesores de español (cómo enseñar un tema, preparar una clase, materiales, primera clase…), con la respuesta corta y las secciones principales. Sin tema, lista todas las guías.", inputSchema: { type: "object", properties: { tema: str("El tema de la guía, por ejemplo «enseñar el subjuntivo» o «primera clase».") } }, run: guia },
  { name: "fichas_gratis", title: "Fichas ELE gratis", description: "Fichas ELE completas y gratuitas en PDF (teoría, ejercicios y soluciones), de A1 a C2, sin registro.", inputSchema: { type: "object", properties: { nivel: level("Nivel MCER (opcional).") } }, run: fichas },
];

export const mcpToolList = () => TOOLS.map(({ name, title, description }) => ({ name, title, description }));
export const callMcpTool = (name: string, args: Json): ToolResult => {
  const tool = TOOLS.find((t) => t.name === name);
  return tool ? tool.run(args) : { text: `Herramienta desconocida: ${name}`, error: true };
};

// ---------------------------------------------------------------- transport

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Mcp-Session-Id, Mcp-Protocol-Version, Authorization",
  "Access-Control-Expose-Headers": "Mcp-Session-Id, Mcp-Protocol-Version",
};
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
const rpcError = (id: unknown, code: number, message: string) => ({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });

function handleMessage(message: Json): Json | null {
  const { id, method } = message;
  const params = (message.params ?? {}) as Json;
  if (typeof method !== "string") return rpcError(id, -32600, "Invalid request");
  if (id === undefined || id === null) return null; // notification
  switch (method) {
    case "initialize": {
      const asked = String(params.protocolVersion ?? "");
      return { jsonrpc: "2.0", id, result: { protocolVersion: PROTOCOLS.includes(asked) ? asked : PROTOCOLS[1], capabilities: { tools: { listChanged: false } }, serverInfo: { ...SERVER_INFO, websiteUrl: SITE_ORIGIN }, instructions: INSTRUCTIONS } };
    }
    case "ping": return { jsonrpc: "2.0", id, result: {} };
    case "tools/list": return { jsonrpc: "2.0", id, result: { tools: TOOLS.map(({ name, title, description, inputSchema }) => ({ name, title, description, inputSchema, annotations: { title, ...readOnly } })) } };
    case "tools/call": {
      const tool = TOOLS.find((t) => t.name === params.name);
      if (!tool) return rpcError(id, -32602, `Unknown tool: ${String(params.name)}`);
      try {
        const out = tool.run((params.arguments ?? {}) as Json);
        return { jsonrpc: "2.0", id, result: { content: [{ type: "text", text: out.text }], isError: !!out.error } };
      } catch {
        return { jsonrpc: "2.0", id, result: { content: [{ type: "text", text: "SpanishCue no pudo responder ahora. Inténtalo de nuevo en unos segundos." }], isError: true } };
      }
    }
    case "resources/list": return { jsonrpc: "2.0", id, result: { resources: [] } };
    case "resources/templates/list": return { jsonrpc: "2.0", id, result: { resourceTemplates: [] } };
    case "prompts/list": return { jsonrpc: "2.0", id, result: { prompts: [] } };
    default: return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

export async function handleMcp(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (request.method === "GET" || request.method === "HEAD") {
    // Stateless server: no server-initiated stream. Browsers get the server card.
    if ((request.headers.get("accept") ?? "").includes("text/html")) return Response.redirect(url("/.well-known/mcp/server-card.json"), 302);
    return new Response(null, { status: 405, headers: { ...CORS, Allow: "POST, OPTIONS" } });
  }
  if (request.method !== "POST") return new Response(null, { status: 405, headers: { ...CORS, Allow: "POST, OPTIONS" } });
  const raw = await request.text();
  if (raw.length > 64_000) return json(rpcError(null, -32600, "Request too large"), 413);
  let body: unknown;
  try { body = JSON.parse(raw); } catch { return json(rpcError(null, -32700, "Parse error"), 400); }
  if (Array.isArray(body)) {
    const replies = body.slice(0, 20).map((m) => handleMessage((m ?? {}) as Json)).filter(Boolean);
    return replies.length ? json(replies) : new Response(null, { status: 202, headers: CORS });
  }
  const reply = handleMessage((body ?? {}) as Json);
  return reply ? json(reply) : new Response(null, { status: 202, headers: CORS });
}

// ---------------------------------------------------------------- discovery

export const MCP_DISCOVERY_PATHS: ReadonlySet<string> = new Set(["/.well-known/mcp.json", "/.well-known/mcp/server-card.json"]);

export const serverCard = () => ({
  $schema: "https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json",
  name: MCP_SERVER_NAME, title: SERVER_INFO.title, description: MCP_DESCRIPTION,
  version: SERVER_INFO.version, websiteUrl: SITE_ORIGIN,
  repository: { url: "https://github.com/agnremote-code/spanishcue-web", source: "github" },
  remotes: [{ type: "streamable-http", url: url(MCP_PATH) }],
  tools: mcpToolList(),
  documentation: url("/llms.txt"),
});

export function handleMcpDiscovery(request: Request): Response {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  return new Response(JSON.stringify(serverCard(), null, 2), { headers: { ...CORS, "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
