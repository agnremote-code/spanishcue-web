// Validates the LES-001 Feria A2 content drafts before Sofia moves them into app/.
// Run from the repo root: node docs/board/content/les-001-feria/check-feria-content.mjs
// Checks: G1 (known primary/review ids, 3–6 exponents), N1 beat labels and
// exponent coverage, contrast-beat shape (one correct, every wrong option names
// a feature), house fields (talk 5, words 6), cast voices (one voice per
// character, listening speakers = cast), routes (AC8/AM-1), closing (AC9),
// the listening file through the repo's own escucha-3d checker (AC6), the
// neutral-Spanish guard (AC7) and the game-scoped banned list.
import { readFileSync } from 'node:fs';
import { GAMES } from '../../../../app/escucha-3d/games.mjs';
import { scanSource } from '../../../../scripts/neutral-spanish.mjs';
import { SPOTS, CAST, CIRCLES, CLOSING, ROUTES, E1_LABEL } from './feria-a2.data.mjs';

const here = 'docs/board/content/les-001-feria';
const problems = [];
let checks = 0;
const ok = (cond, msg) => { checks += 1; if (!cond) problems.push(msg); };

// Objective ids that exist in the curriculum.
const ids = new Set();
for (const level of ['a1', 'a2']) {
  const src = readFileSync(`app/autoestudio/curriculum/objectives/${level}.ts`, 'utf8');
  for (const m of src.matchAll(/\[\s*\d+,\s*"(\w+)",\s*"([\w-]+)"/g)) ids.add(`${level}.${m[1]}.${m[2]}`);
}
ok(ids.size > 50, `could not read the objective files (${ids.size} ids)`);

const voices = JSON.parse(readFileSync('app/escucha-3d/voices.json', 'utf8'));
const castVoices = new Map();
for (const [key, c] of Object.entries(CAST)) {
  ok(voices[c.voice]?.country === c.country, `cast ${key}: voice ${c.voice} is not from ${c.country}`);
  ok(voices[c.voice]?.gender === c.gender, `cast ${key}: voice gender does not match`);
  ok(!castVoices.has(c.voice), `cast ${key}: voice ${c.voice} already used by ${castVoices.get(c.voice)}`);
  castVoices.set(c.voice, key);
}

ok(JSON.stringify(Object.keys(CIRCLES)) === JSON.stringify(SPOTS), 'CIRCLES keys must be the 8 spots in order');
const authored = [];
for (const id of SPOTS) {
  const c = CIRCLES[id];
  const at = `circle ${id}`;
  ok(c.objective?.startsWith('a2.') && ids.has(c.objective), `${at}: primary objective ${c.objective} missing or not A2`);
  for (const r of c.related ?? []) ok(ids.has(r), `${at}: review id ${r} unknown`);
  if (c.status) continue;
  authored.push(id);
  for (const key of ['title', 'place', 'line', 'teacher']) ok(typeof c[key] === 'string' && c[key].trim(), `${at}: missing ${key}`);
  ok(Array.isArray(c.exponents) && c.exponents.length >= 3 && c.exponents.length <= 6, `${at}: needs 3–6 exponents (G1)`);
  const expIds = new Set((c.exponents ?? []).map(e => e.id));
  ok(Array.isArray(c.dialogue) && c.dialogue.length >= 3, `${at}: dialogue too short`);
  for (const [who] of c.dialogue ?? []) ok(who.startsWith('*') || CAST[who], `${at}: dialogue speaker ${who} not in CAST`);
  const covered = new Set();
  let contrasts = 0; let stimuli = 0;
  for (const b of c.beats ?? []) {
    const bt = `${at} beat ${b.id}`;
    ok(CAST[b.who], `${bt}: who ${b.who} not in CAST`);
    for (const e of b.exponent ?? []) { ok(expIds.has(e), `${bt}: unknown exponent ${e}`); covered.add(e); }
    if (b.kind === 'contrast') {
      contrasts += 1;
      ok(b.label === 'Contraste lingüístico', `${bt}: label must be «Contraste lingüístico» (N1)`);
      ok((b.exponent ?? []).length >= 1, `${bt}: a contrast must name its exponent (N1)`);
      ok(b.context && b.prompt && b.after, `${bt}: needs context, prompt and after`);
      const opts = b.options ?? [];
      ok(opts.length === 3, `${bt}: needs 3 options`);
      ok(opts.filter(o => o.correct).length === 1, `${bt}: exactly one correct option`);
      ok(new Set(opts.map(o => o.label)).size === opts.length, `${bt}: options repeat`);
      for (const o of opts) {
        ok(o.feedback?.trim(), `${bt} ${o.id}: missing feedback`);
        if (!o.correct) {
          ok(o.feature?.trim(), `${bt} ${o.id}: a wrong option must name its feature`);
          const head = o.feature.toLocaleLowerCase('es').split(' ')[0];
          ok(o.feedback.toLocaleLowerCase('es').includes(head), `${bt} ${o.id}: feedback should name the feature («${o.feature}»)`);
        }
      }
    } else if (b.kind === 'stimulus') {
      stimuli += 1;
      ok(b.label === 'Estímulo de conversación', `${bt}: label must be «Estímulo de conversación» (N1)`);
      ok(b.teacher?.trim(), `${bt}: a stimulus needs a teacher note`);
      if (b.options) {
        ok(b.ask?.trim() && b.options.length === 3, `${bt}: house stimulus needs ask + 3 options`);
        for (const o of b.options) ok(o.say && o.reply && o.end && o.mood && o.correct === undefined, `${bt}: option needs say/reply/end/mood and no correct flag`);
      } else ok(Array.isArray(b.frames) && b.frames.length >= 2 && b.prompt, `${bt}: frame stimulus needs prompt + frames`);
    } else ok(false, `${bt}: unknown kind ${b.kind}`);
  }
  ok(contrasts >= 1, `${at}: at least one contrast beat (G2)`);
  ok(stimuli >= 1, `${at}: at least one conversation stimulus`);
  for (const e of expIds) ok(covered.has(e), `${at}: exponent ${e} is claimed but no beat targets it (N1)`);
  ok(Array.isArray(c.talk) && c.talk.length === 5, `${at}: talk needs 5 questions`);
  ok(Array.isArray(c.words) && c.words.length === 6, `${at}: words needs 6 entries`);
  if (id !== 'baile') {
    const stim = c.beats.find(b => b.kind === 'stimulus' && b.options);
    ok(Array.isArray(c.timeline) && stim && c.timeline.length === stim.options.length, `${at}: timeline needs one sentence per stimulus option`);
  }
}

// Closing (AC9).
ok(CLOSING.selfCheck.items.length === 4 && CLOSING.selfCheck.items.some(i => i.id === 'fondo'), 'closing: selfCheck needs the 4 items incl. the imperfecto background');
ok(CLOSING.narrative.source === 'sessionStorage', 'closing: narrative must come from this session only');
ok(CLOSING.transfer.question && CLOSING.transfer.model, 'closing: transfer question + model');
const baile = CIRCLES.baile;
const order = baile.beats.map(b => b.id);
ok(order.indexOf('juego-de-roles') < order.indexOf('fondo') && order.indexOf('fondo') < order.indexOf('secuencia'), 'closing: role-play before the narrative (AC9)');

// Routes (AC8 + AM-1).
const conv = ROUTES.find(r => r.id === 'conversacion');
const conCircles = conv.steps.map(s => s.circle).filter(Boolean);
for (const busca of ['informacion', 'escenario', 'fotos']) ok(conCircles.includes(busca), `route conversacion must include ${busca} (AM-1)`);
for (const r of ROUTES) {
  const total = r.steps.reduce((n, s) => n + s.minutes, 0);
  ok(total === r.minutes && total <= 45, `route ${r.id}: minutes ${total} ≠ ${r.minutes} or > 45`);
  ok(r.steps.at(-1).circle === 'baile' && r.steps.at(-1).closing, `route ${r.id}: must end in the closing`);
  for (const s of r.steps) for (const c of [s.circle, ...(s.oneOf ?? [])].filter(Boolean)) ok(SPOTS.includes(c), `route ${r.id}: unknown circle ${c}`);
}
ok(E1_LABEL.includes('not learning') && E1_LABEL.includes('signed-in PRO accounts only'), 'E1 label must be the N4 wording');

// Listening through the repo checker, with feria registered only in memory.
const listeningPath = `${here}/a2.listening.json`;
const listeningSource = readFileSync(listeningPath, 'utf8');
const listening = JSON.parse(listeningSource);
GAMES.feria = { title: 'La feria de Villaluz', levels: ['A2'], spots: SPOTS, ownListening: true };
const { checkFile } = await import('../../../../scripts/check-escucha-3d.mjs');
const listeningProblems = checkFile('feria', 'A2', listening, listeningPath);
ok(listeningProblems.length === 0, `listening: ${listeningProblems.join(' | ')}`);
for (const item of listening.items) {
  for (const s of item.speakers) {
    const member = Object.values(CAST).find(c => c.name === s.name);
    ok(member, `listening ${item.id}: ${s.name} is not in CAST`);
    if (member) ok(member.voice === s.voice, `listening ${item.id}: ${s.name} must keep ${member.voice}`);
  }
}
const titles = listening.items.map(i => i.title);
ok(new Set(titles).size === titles.length, 'listening: titles repeat');

// Language guard (AC7): repo scanner + game-scoped banned list.
const dataPath = `${here}/feria-a2.data.mjs`;
const dataSource = readFileSync(dataPath, 'utf8');
for (const [src, path] of [[dataSource, dataPath], [listeningSource, listeningPath]]) {
  const findings = scanSource(src, path);
  ok(findings.length === 0, `neutral-Spanish guard: ${findings.map(f => `${path}:${f.line} «${f.token}» (${f.kind})`).join('; ')}`);
  const text = src.toLocaleLowerCase('es');
  for (const banned of ['verbena', 'me pone', 'apetece', 'vaqueros', 'jersey', 'vosotros', 'coger', 'móvil', 'ordenador']) {
    // The header comment of the data file lists the banned words on purpose.
    const body = path === dataPath ? text.slice(text.indexOf('export const spots')) : text;
    ok(!body.includes(banned), `${path}: banned word «${banned}»`);
  }
}

const words = item => item.lines.map(l => l.text).join(' ').match(/[\p{L}\p{N}]+/gu).length;
console.log(`authored circles: ${authored.join(', ')}; listening words: ${listening.items.map(i => `${i.id} ${words(i)}`).join(', ')}`);
for (const p of problems) console.error(`FAIL ${p}`);
console.log(`${checks - problems.length}/${checks} checks passed`);
process.exitCode = problems.length ? 1 : 0;
