// Platform-wide conversation audit (Ale, 2026-11-10). Finds every open
// conversation question addressed to the learner in every conversation lesson
// and 3D world, checks it with app/conversacion-general/quality.mjs and with
// the near-duplicate rule, and prints a report.
//
//   node scripts/conversation-quality.mjs            → summary by lesson
//   node scripts/conversation-quality.mjs --json F   → full list of flagged questions to F
//   node scripts/conversation-quality.mjs --list DIR → flagged questions under app/DIR
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';
import { questionProblems, SECOND_PERSON } from '../app/conversacion-general/quality.mjs';
import { normalize, similarity, NEAR_DUPLICATE } from '../app/conversacion-general/audit.mjs';

// Every folder that holds conversation for learners: the conversation lessons
// of app/lesson-catalog.ts, their shared engines and the 3D worlds.
export const CONVERSATION_DIRS = [
  'choose-conversation', 'advanced-conversation', 'conversation-worlds', 'conversation-families', 'boards', 'play-mode',
  'charlas-3d', 'conversacion-general', 'escucha-3d/content', 'noche-abierta', 'mundo-3d',
  'speed-dating-de-personajes', 'el-restaurante-imposible', 'el-dia-que-todo-salio-mal', 'tradiciones-que-nadie-entiende',
  'mi-yo-de-2035', 'el-consultorio-sentimental', 'resenas-de-una-estrella', 'el-billete-ganador', 'un-dia-sin-pantallas',
  'el-tribunal-de-las-cosas-pequenas',
  'el-reino-de-la-rosa-dormida', 'hospital-san-casi-vivo', 'la-feria-de-villaluz', 'madrid-infectada', 'mas-alla',
  'vuelo-cancelado', 'el-consorcio', 'el-tren-de-las-2340', 'la-boda', 'marketing-de-casinos', 'suecia', 'argentina',
  'espana', 'la-ciudad-no-duerme', 'bosque-de-los-hongos-gigantes', 'entrenador-personal', 'la-vida-despues-de-los-30',
  'red-flag-o-no', 'red-flag-o-no-a2', 'red-flag-o-no-b1', 'red-flag-o-no-b2', 'ciudad-en-juego', 'modo-play-y-ahora-que',
  'modo-play-uno-o-el-otro', 'la-camara-de-presion', 'el-ministerio-de-las-versiones', 'la-agencia-de-vidas-paralelas',
  'el-protocolo-aurora', 'la-noche-de-las-siete-llamadas', 'la-mesa-de-las-tres-ofertas',
  'la-sala-de-los-mensajes-fuera-de-contexto', 'en-vivo-en-diez-minutos', 'el-teatro-de-las-coartadas',
  'el-cine-de-las-tres-funciones', 'la-noche-de-las-invitaciones-cruzadas', 'la-isla-vota', 'la-maquina-que-elimina-cosas-a2',
  'tu-vida-con-una-regla-absurda-a2', 'la-maquina-que-elimina-cosas', 'tu-vida-con-una-regla-absurda',
  'buenos-aires-en-la-calle', 'mexico', 'estados-unidos-a2-b1', 'monasterio-de-las-ideas', 'irlanda-en-relieve',
  'reino-unido-en-relieve', 'australia-en-movimiento', 'suiza-en-relieve', 'mundo-fantastico', 'estados-unidos-basico',
  'israel-en-capas', 'indonesia-fantastica', 'future-city', 'preguntas-prohibidas-a2', 'preguntas-prohibidas',
  'argento-roleplays', 'argento', 'life-roulette', 'basic-conversation',
];

const QUESTION = /¿[^?¿"`\n]{4,400}\?/g;
const LEVEL_IN_PATH = /(?:^|[\/_.-])(a0|a1|a2|b1|b2|c1|c2)(?:[\/_.-]|$)/i;
const LEVEL_MARK = /(?:\blevel\s*:\s*['"]|['"]|\b)(A0|A1|A2|B1|B2|C1|C2)['"]?\s*[:,\]]/g;

function levelAt(path, text, index) {
  const p = LEVEL_IN_PATH.exec(path);
  if (p) return p[1].toUpperCase();
  let last = null;
  for (const m of text.matchAll(LEVEL_MARK)) { if (m.index > index) break; last = m[1]; }
  return last ?? 'B1';
}

export function collect(root = '.') {
  const items = [];
  const walk = (dir) => {
    let names; try { names = readdirSync(dir); } catch { return; }
    for (const name of names) {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) { if (!name.startsWith('.')) walk(path); continue; }
      if (!/\.(tsx?|mjs|js|json)$/.test(name) || /\.d\.mts$/.test(name)) continue;
      const text = readFileSync(path, 'utf8');
      for (const m of text.matchAll(QUESTION)) {
        const q = m[0];
        if (!SECOND_PERSON.test(q)) continue;
        const rel = relative(root, path);
        items.push({ file: rel, line: text.slice(0, m.index).split('\n').length, level: levelAt(rel, text, m.index), text: q });
      }
    }
  };
  for (const d of CONVERSATION_DIRS) walk(join(root, 'app', d));
  return items;
}

export function audit(root = '.') {
  const items = collect(root);
  for (const it of items) it.problems = questionProblems(it.text, it.level);
  // Rule E: the same question (or a near-duplicate) in two different lessons.
  // Short follow-ups («¿Y tú?», «¿Te ha pasado?») are dialogue, not repeats.
  const seen = new Map(); const byWord = new Map(); const kept = [];
  const lessonOf = (file) => file.split('/').slice(0, 3).join('/');
  const words = (t) => [...new Set(normalize(t).split(' ').filter((w) => w.length > 3))];
  for (const it of items) {
    const key = normalize(it.text);
    if (key.split(' ').length < 6) continue;
    const lesson = lessonOf(it.file);
    const prev = seen.get(key);
    if (prev) { if (prev.lesson !== lesson) it.problems.push(`duplicate:${prev.file}`); continue; }
    let near = null; const tried = new Set();
    for (const w of words(it.text)) {
      for (const j of byWord.get(w) ?? []) {
        if (tried.has(j)) continue; tried.add(j);
        const o = kept[j];
        if (o.lesson !== lesson && similarity(it.text, o.text) >= NEAR_DUPLICATE + 0.15) { near = o; break; }
      }
      if (near) break;
    }
    if (near) { it.problems.push(`near-duplicate:${near.file}`); continue; }
    seen.set(key, { lesson, file: it.file });
    const idx = kept.push({ lesson, file: it.file, text: it.text }) - 1;
    for (const w of words(it.text)) { if (!byWord.has(w)) byWord.set(w, []); byWord.get(w).push(idx); }
  }
  return items;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const items = audit();
  const arg = process.argv[2];
  const flagged = items.filter((i) => i.problems.length);
  if (arg === '--json') writeFileSync(process.argv[3], JSON.stringify(flagged, null, 1));
  if (arg === '--list') {
    for (const i of flagged.filter((x) => x.file.startsWith(`app/${process.argv[3]}`))) console.log(`${i.file}:${i.line} [${i.level}] ${i.problems.join(',')} :: ${i.text}`);
  } else {
    const by = new Map();
    for (const i of items) { const k = i.file.split('/')[1]; const v = by.get(k) ?? [0, 0]; v[0]++; if (i.problems.length) v[1]++; by.set(k, v); }
    const kinds = new Map();
    for (const i of flagged) for (const p of i.problems) { const k = p.split(':')[0]; kinds.set(k, (kinds.get(k) ?? 0) + 1); }
    console.log(`${items.length} preguntas al alumno · ${flagged.length} con problemas`);
    console.log([...kinds].map(([k, v]) => `${k}=${v}`).join(' '));
    for (const [k, [n, f]] of [...by].sort((a, b) => b[1][1] - a[1][1])) console.log(`${String(f).padStart(5)} / ${String(n).padEnd(6)} ${k}`);
  }
}
