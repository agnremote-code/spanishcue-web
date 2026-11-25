import { CONJUGACION_PATH, conjugateVerb, irregularForms, verbFromParam, verbPath } from "../../conjugacion/verbos";
import type { TenseKey } from "../../conjugacion/engine";

export const dynamic = "force-dynamic";

/**
 * Embeddable conjugator: a self-contained, script-free HTML page that teachers
 * put in an <iframe> on their blog or virtual classroom (the worker allows
 * framing only under /embed/). Every copy carries a visible link back to the
 * full verb page. Nothing here reads cookies or identity.
 */
const TENSES: { key: TenseKey; label: string }[] = [
  { key: "presente", label: "Presente" },
  { key: "indefinido", label: "Pretérito indefinido" },
  { key: "imperfecto", label: "Pretérito imperfecto" },
  { key: "futuro", label: "Futuro" },
  { key: "subjPresente", label: "Presente de subjuntivo" },
  { key: "imperativo", label: "Imperativo" },
];
const PERSONS = ["yo", "tú", "él / ella / usted", "nosotros", "vosotros", "ellos / ustedes"];
const IMPERATIVE = ["", "tú", "usted", "nosotros", "vosotros", "ustedes"];

const esc = (text: string) => text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const asked = (params.get("v") ?? "").trim().toLowerCase().slice(0, 40);
  const found = asked ? verbFromParam(asked) : undefined;
  const verb = found ?? "tener";
  const cj = conjugateVerb(verb);
  const h = irregularForms(verb, cj);
  const link = `https://spanishcue.com${verbPath(verb)}`;
  const tables = TENSES.map(({ key, label }) => {
    const rows = cj.tenses[key].map((form, i) => form ? `<tr><th>${key === "imperativo" ? IMPERATIVE[i] : PERSONS[i]}</th><td${h[key][i] ? ' class="i"' : ""}>${esc(form)}</td></tr>` : "").join("");
    return `<section><h2>${label}</h2><table>${rows}</table></section>`;
  }).join("");
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><link rel="canonical" href="${link}"><title>Conjugación de ${esc(verb)} · SpanishCue</title><style>
*{box-sizing:border-box}body{margin:0;font:15px/1.4 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#06152f;background:#f6f9ff}main{padding:14px}
form{display:flex;gap:6px;margin:0 0 10px}input{flex:1;min-width:0;font:inherit;padding:8px 10px;border:1px solid #c9d8ee;border-radius:10px}button{font:inherit;font-weight:700;border:0;border-radius:10px;padding:8px 14px;background:#087eff;color:#fff;cursor:pointer}
h1{font-size:18px;margin:0 0 4px}p{margin:0 0 10px;color:#4a5b78}.g{display:grid;gap:8px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr))}
section{background:#fff;border:1px solid #d7e4f5;border-radius:12px;padding:8px 10px}h2{font-size:13px;margin:0 0 4px}table{width:100%;border-collapse:collapse}th{text-align:left;font-weight:400;color:#4a5b78;font-size:12px;padding:1px 6px 1px 0;white-space:nowrap}td{font-weight:700;padding:1px 0}.i{color:#b4232a}
footer{margin-top:10px;font-size:13px}a{color:#0759b8;font-weight:700}
</style></head><body><main>
<form action="/embed/conjugador" method="get"><input name="v" aria-label="Verbo" placeholder="Escribe un verbo" value="${esc(found ? verb : asked)}" autocomplete="off" autocapitalize="off" spellcheck="false"><button type="submit">Conjugar</button></form>
${asked && !found ? `<p>No encontramos «${esc(asked)}». Mostramos tener.</p>` : ""}
<h1>Conjugación de ${esc(verb)}</h1><p>Gerundio: <b>${esc(cj.gerund)}</b> · Participio: <b>${esc(cj.participle)}</b>${h.presente.some(Boolean) || h.indefinido.some(Boolean) ? ' · <span class="i">en rojo, formas irregulares</span>' : ""}</p>
<div class="g">${tables}</div>
<footer><a href="${link}" target="_blank" rel="noopener">Todos los tiempos de ${esc(verb)}, notas y ejercicio en SpanishCue</a> · <a href="https://spanishcue.com${CONJUGACION_PATH}" target="_blank" rel="noopener">Conjugador de SpanishCue</a></footer>
</main></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=3600", "x-robots-tag": "noindex, follow" } });
}
