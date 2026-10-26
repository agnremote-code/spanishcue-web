// El ascensor del cerro · B2 content checker (adapted from scripts/check-feria.mjs,
// without Busca). Run from the repo root: node scripts/check-ascensor.mjs
// Exit code 1 on any problem. `checkAscensor()` returns { problems, checks, blocked }.
// Checks: G1 (known B2 primary ids, known review ids, 3–6 exponents), N1 beat
// labels and exponent coverage, contrast-beat shape (one correct, every wrong
// option names a feature), house fields (talk 5, words 6), cast voices (one
// voice per character, listening speakers = cast), routes (≤45 min, end in
// the closing), closing, the listening file through the repo's own escucha-3d
// checker, the neutral-Spanish guard and the game-scoped banned list.
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { scanSource } from './neutral-spanish.mjs';
import { checkFile } from './check-escucha-3d.mjs';
import * as B2 from '../app/el-ascensor-del-cerro/levels/b2.mjs';
import { GAMES } from '../app/escucha-3d/games.mjs';

const { SPOTS, CAST, CIRCLES, CLOSING, ROUTES, E1_LABEL } = B2;
const CLOSING_ID = 'asamblea';

export function checkAscensor() {
  const problems = [];
  let checks = 0;
  const ok = (cond, msg) => { checks += 1; if (!cond) problems.push(msg); };

  // Objective ids that exist in the curriculum.
  const ids = new Set();
  for (const level of ['a1', 'a2', 'b1', 'b2']) {
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

  ok(JSON.stringify(Object.keys(CIRCLES)) === JSON.stringify(SPOTS), 'CIRCLES keys must be the spots in order');
  ok(JSON.stringify(SPOTS) === JSON.stringify(GAMES.ascensor.spots), 'SPOTS must match the listening registry (games.mjs)');
  ok(SPOTS.at(-1) === CLOSING_ID, 'the assembly is the last circle (closing)');
  const authored = [];
  const blocked = [];
  for (const id of SPOTS) {
    const c = CIRCLES[id];
    const at = `circle ${id}`;
    ok(c.objective?.startsWith('b2.') && ids.has(c.objective), `${at}: primary objective ${c.objective} missing or not B2`);
    for (const r of c.related ?? []) ok(ids.has(r), `${at}: review id ${r} unknown`);
    if (c.status) { blocked.push(id); continue; }
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
    if (id !== CLOSING_ID) {
      const stim = c.beats.find(b => b.kind === 'stimulus' && b.options);
      ok(Array.isArray(c.timeline) && stim && c.timeline.length === stim.options.length, `${at}: timeline needs one sentence per stimulus option`);
    }
  }

  // Closing: the assembly's production after its beats.
  ok(CLOSING.selfCheck.items.length === 4, 'closing: selfCheck needs 4 items');
  ok(CLOSING.narrative.source === 'sessionStorage', 'closing: narrative must come from this session only');
  ok(CLOSING.narrative.prompt && CLOSING.narrative.frames?.length >= 3 && CLOSING.narrative.opening && CLOSING.narrative.ending, 'closing: narrative prompt, frames, opening, ending');
  ok(CLOSING.transfer.question && CLOSING.transfer.model, 'closing: transfer question + model');
  ok(CLOSING.sessionLabel === 'Notas de esta sesión: no se guardan por alumno', 'closing: session label');
  ok(CIRCLES[CLOSING_ID].objective === 'b2.fun.mediacion-fuentes', 'closing circle carries the world primary b2.fun.mediacion-fuentes');

  // Routes (AC8 + AM-1).
  ok(ROUTES.map(r => r.mode).sort().join() === 'conversacion,escucha', 'routes: one conversacion and one escucha route');
  for (const r of ROUTES) {
    const total = r.steps.reduce((n, s) => n + s.minutes, 0);
    ok(total === r.minutes && total <= 45, `route ${r.id}: minutes ${total} ≠ ${r.minutes} or > 45`);
    ok(r.steps.at(-1).circle === CLOSING_ID && r.steps.at(-1).closing, `route ${r.id}: must end in the closing`);
    for (const s of r.steps) for (const c of [s.circle, ...(s.oneOf ?? [])].filter(Boolean)) ok(SPOTS.includes(c), `route ${r.id}: unknown circle ${c}`);
  }
  ok(E1_LABEL.includes('not learning') && E1_LABEL.includes('signed-in PRO accounts only'), 'E1 label must be the N4 wording');

  // Listening through the repo checker.
  const listeningPath = 'app/escucha-3d/content/ascensor/b2.json';
  const listeningSource = readFileSync(listeningPath, 'utf8');
  const listening = JSON.parse(listeningSource);
  const listeningProblems = checkFile('ascensor', 'B2', listening, listeningPath);
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

  // Language guard: repo scanner + game-scoped banned list (Peninsular-only forms).
  const dataPath = 'app/el-ascensor-del-cerro/levels/b2.mjs';
  const dataSource = readFileSync(dataPath, 'utf8');
  for (const [src, path] of [[dataSource, dataPath], [listeningSource, listeningPath]]) {
    const findings = scanSource(src, path);
    ok(findings.length === 0, `neutral-Spanish guard: ${findings.map(f => `${path}:${f.line} «${f.token}» (${f.kind})`).join('; ')}`);
    const text = src.toLocaleLowerCase('es');
    for (const banned of ['vosotros', 'vuestro', 'coger', 'ordenador', 'apetece']) {
      // Only the data, not the header comment.
      const body = path === dataPath ? text.slice(text.indexOf('export const spots')) : text;
      ok(!body.includes(banned), `${path}: banned word «${banned}»`);
    }
  }

  return { problems, checks, authored, blocked };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const { problems, checks, authored, blocked } = checkAscensor();
  console.log(`authored circles: ${authored.join(', ')}${blocked.length ? `; NOT AUTHORED YET: ${blocked.join(', ')}` : ''}`);
  for (const p of problems) console.error(`FAIL ${p}`);
  console.log(`${checks - problems.length}/${checks} checks passed`);
  process.exitCode = problems.length ? 1 : 0;
}
