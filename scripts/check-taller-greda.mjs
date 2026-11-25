// El taller de la greda · content checker (the Feria pattern, scripts/check-feria.mjs).
// Run from the repo root: node scripts/check-taller-greda.mjs
// Exit code 1 on any problem. `checkTaller()` returns { problems, warnings, checks }.
// Checks: G1 (verified B1 primary/related ids, 3–6 exponents, the world
// primary at the closing), N1 beat labels (22 contrasts as counted in Martin's
// §11, one stimulus per circle, the closing round at the yard), contrast shape (one
// correct, every wrong option names a feature with feedback), house fields
// (talk 5, words 6), cast voices (one voice per character, listening speakers
// = cast, 6+ countries), «El recado viaja» hand-offs, production tasks, the
// closing, the route (45 minutes, ends at the closing), the listening file
// through the repo's escucha-3d checker, the neutral-Spanish guard and the
// world's own rules (no town name, no regional particle in any voiced line).
// Exponents no beat targets are warnings, not failures: Martin's doc covers
// them in production tasks and talk (listed for the G4 reviewer).
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { REGISTRY_PATH, scanSource } from './neutral-spanish.mjs';
import { checkFile } from './check-escucha-3d.mjs';
import * as B1 from '../app/el-taller-de-la-greda/levels/b1.mjs';
import { CIRCLE_IDS, CIRCLES as PLACES, HOMES } from '../app/el-taller-de-la-greda/layout.mjs';
import { GAMES } from '../app/escucha-3d/games.mjs';

const { SPOTS, CAST, CIRCLES, CLOSING, ROUTES, E1_LABEL } = B1;
// Martin §11: contrast beats per circle, in walking order.
const CONTRASTS = { mostrador: 2, greda: 2, torno: 4, secadero: 3, horno: 2, esmaltes: 3, oficina: 3, patio: 3 };
const WORLD_PRIMARY = 'b1.fun.w16-transmitir-mensajes';

export function checkTaller() {
  const problems = [];
  const warnings = [];
  let checks = 0;
  const ok = (cond, msg) => { checks += 1; if (!cond) problems.push(msg); };

  // Objective ids that exist in the B1 curriculum.
  const ids = new Set();
  const src = readFileSync('app/autoestudio/curriculum/objectives/b1.ts', 'utf8');
  for (const m of src.matchAll(/\[\s*\d+,\s*"(\w+)",\s*"([\w-]+)"/g)) ids.add(`b1.${m[1]}.${m[2]}`);
  ok(ids.size > 50, `could not read the B1 objective file (${ids.size} ids)`);

  // Cast: one voice per character, gender and country match the voice list.
  const voices = JSON.parse(readFileSync('app/escucha-3d/voices.json', 'utf8'));
  const castVoices = new Map();
  for (const [key, c] of Object.entries(CAST)) {
    ok(voices[c.voice]?.country === c.country, `cast ${key}: voice ${c.voice} is not from ${c.country}`);
    ok(voices[c.voice]?.gender === c.gender, `cast ${key}: voice gender does not match`);
    ok(!castVoices.has(c.voice), `cast ${key}: voice ${c.voice} already used by ${castVoices.get(c.voice)}`);
    castVoices.set(c.voice, key);
  }
  ok(new Set(Object.values(CAST).map(c => c.country)).size >= 6, 'concept §6.1: at least 6 countries');

  ok(JSON.stringify(Object.keys(CIRCLES)) === JSON.stringify(SPOTS), 'CIRCLES keys must be the 8 spots in order');
  ok(JSON.stringify(SPOTS) === JSON.stringify(CIRCLE_IDS), 'SPOTS must match the world layout circles');
  ok(JSON.stringify(SPOTS) === JSON.stringify(GAMES.taller.spots), 'SPOTS must match the listening registry');

  let contrastTotal = 0;
  for (const [n, id] of SPOTS.entries()) {
    const c = CIRCLES[id];
    const at = `circle ${id}`;
    ok(c.objective?.startsWith('b1.') && ids.has(c.objective), `${at}: primary objective ${c.objective} missing or not B1 (G1)`);
    for (const r of c.related ?? []) ok(ids.has(r), `${at}: related id ${r} unknown`);
    for (const key of ['title', 'place', 'task', 'line', 'teacher', 'scaffolding']) ok(typeof c[key] === 'string' && c[key].trim(), `${at}: missing ${key}`);
    ok(Array.isArray(c.exponents) && c.exponents.length >= 3 && c.exponents.length <= 6, `${at}: needs 3–6 exponents (G1)`);
    const expIds = new Set((c.exponents ?? []).map(e => e.id));
    for (const e of c.exponents ?? []) ok(e.form?.trim() && e.use?.trim(), `${at}: exponent ${e.id} needs form and use`);
    for (const [who] of c.dialogue ?? []) ok(CAST[who], `${at}: dialogue speaker ${who} not in CAST`);
    // Who is on stage: in the cast, never a phone-only character, and placed by the layout.
    const place = PLACES[n];
    ok(Array.isArray(c.cast) && c.cast.length >= 1, `${at}: needs the cast on stage`);
    for (const who of c.cast ?? []) {
      ok(CAST[who] && !CAST[who].phone, `${at}: ${who} is not an on-stage cast member`);
      ok(place?.slots?.[who], `${at}: the layout has no place for ${who}`);
      ok(HOMES[who], `${at}: ${who} has no home in the workshop`);
    }
    ok(Object.keys(place?.slots ?? {}).every(who => (c.cast ?? []).includes(who)), `${at}: the layout places someone who is not in the scene`);

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
        ok(b.context && b.prompt, `${bt}: needs context and prompt`);
        const opts = b.options ?? [];
        ok(opts.length === 3, `${bt}: needs 3 options`);
        ok(opts.filter(o => o.correct).length === 1, `${bt}: exactly one correct option`);
        ok(new Set(opts.map(o => o.label)).size === opts.length, `${bt}: options repeat`);
        ok(new Set(opts.map(o => o.id)).size === opts.length, `${bt}: option ids repeat`);
        for (const o of opts) {
          ok(o.feedback?.trim(), `${bt} ${o.id}: missing feedback`);
          if (!o.correct) ok(o.feature?.trim(), `${bt} ${o.id}: a wrong option must name its feature`);
        }
      } else if (b.kind === 'stimulus') {
        stimuli += 1;
        ok(b.label === 'Estímulo de conversación', `${bt}: label must be «Estímulo de conversación» (N1)`);
        ok(b.teacher?.trim(), `${bt}: a stimulus needs a teacher note`);
        ok(b.ask?.trim(), `${bt}: a stimulus needs its ask`);
        if (b.options) {
          ok(b.options.length === 3, `${bt}: option stimulus needs 3 options`);
          for (const o of b.options) ok(o.say && o.reply && o.end && o.mood && o.correct === undefined, `${bt}: option needs say/reply/end/mood and no correct flag`);
        } else ok(Array.isArray(b.frames) && b.frames.length >= 2 && b.frames.every(f => f.id && f.label), `${bt}: frame stimulus needs 2+ frames`);
      } else ok(false, `${bt}: unknown kind ${b.kind}`);
    }
    ok(contrasts === CONTRASTS[id], `${at}: ${contrasts} contrast beats, Martin §11 counts ${CONTRASTS[id]}`);
    contrastTotal += contrasts;
    // One stimulus per circle; at the yard it is the closing round (Martin §8, §11).
    ok(stimuli === 1, `${at}: one conversation stimulus`);
    for (const e of expIds) if (!covered.has(e)) warnings.push(`${at}: exponent ${e} is not targeted by a beat (covered by the doc's task, production or talk)`);
    ok(Array.isArray(c.talk) && c.talk.length === 5, `${at}: talk needs 5 questions`);
    // Six words; a seventh only where it carries an exponent no beat targets (G4 B2).
    ok(Array.isArray(c.words) && (c.words.length === 6 || (c.words.length === 7 && id === 'greda')), `${at}: words needs 6 entries`);
    // Every exponent shows up in the circle: in a beat, or in its words, talk, task, scaffolding or production (G4 B2).
    const circleText = JSON.stringify([c.words, c.talk, c.task, c.scaffolding, c.production ?? null, c.handoff ?? null, c.line, c.dialogue]).toLocaleLowerCase('es');
    const KEYS = { 'plazo-envio': 'plazo de entrega', 'que-te-dijo': 'qué te dijo exactamente' };
    for (const e of expIds) if (!covered.has(e) && KEYS[e]) ok(circleText.includes(KEYS[e]), `${at}: exponent ${e} appears nowhere in the circle`);
    // «El recado viaja»: every station but the yard hands a message on.
    if (id !== 'patio') ok(c.handoff?.text && CAST[c.handoff.who] && c.handoff.prop, `${at}: needs a hand-off (who, text, prop)`);
    else ok(!c.handoff, `${at}: the closing hands nothing on`);
  }
  ok(contrastTotal === 22, `Martin §11: 22 contrast beats, found ${contrastTotal}`);

  // G1: the world primary is the closing's primary.
  ok(CIRCLES.patio.objective === WORLD_PRIMARY, `the closing must carry the world primary ${WORLD_PRIMARY}`);
  // The pronunciation objective is related only, never a primary.
  ok(!SPOTS.some(id => CIRCLES[id].objective === 'b1.pron.w16-pregunta-referida'), 'b1.pron.w16-pregunta-referida is related only');

  // Production tasks (circle 5 speaking, circle 7 writing) and the closing.
  ok(CIRCLES.horno.production?.kind === 'speaking' && CIRCLES.horno.production.interruptions?.length === 2 && CIRCLES.horno.production.facts?.length === 4, 'horno: the 2-minute speaking task with two interruptions and the fact card');
  ok(CIRCLES.horno.opening?.includes('Emilio dice que'), 'horno: the opening relay from circle 4');
  ok(CIRCLES.oficina.production?.kind === 'writing' && CIRCLES.oficina.production.model?.length >= 5, 'oficina: the email task with its model');
  const modelWords = (CIRCLES.oficina.production?.model ?? []).join(' ').match(/\p{L}+/gu)?.length ?? 0;
  ok(modelWords >= 120 && modelWords <= 150, `oficina: model email has ${modelWords} words, target 120–150`);
  const closingBeat = CIRCLES.patio.beats.at(-1);
  ok(closingBeat?.closing && closingBeat.frames?.length === 8, 'patio: the chain round closes the circle with 8 frames');
  ok(/130–170 palabras/.test(CLOSING.production.prompt), 'closing: the final written message (130–170 words)');
  ok(CLOSING.selfCheck.items.length === 3, 'closing: the three success criteria');
  ok(CLOSING.sessionLabel === 'Notas de esta sesión: no se guardan por alumno', 'closing: session label');

  // Route (Martin §9).
  for (const r of ROUTES) {
    const total = r.steps.reduce((sum, s) => sum + s.minutes, 0);
    ok(total === r.minutes && total <= 45, `route ${r.id}: minutes ${total} ≠ ${r.minutes} or > 45`);
    ok(r.steps.at(-1).circle === 'patio' && r.steps.at(-1).closing, `route ${r.id}: must end in the closing`);
    for (const s of r.steps) for (const c of [s.circle, ...(s.oneOf ?? [])].filter(Boolean)) ok(SPOTS.includes(c), `route ${r.id}: unknown circle ${c}`);
    ok(r.steps.some(s => s.circle === 'torno'), `route ${r.id}: the grammar core (torno) is never skipped`);
    ok(r.steps.some(s => s.circle === 'esmaltes' && s.listening), `route ${r.id}: the curriculum listening at esmaltes`);
  }
  ok(E1_LABEL.includes('not learning') && E1_LABEL.includes('signed-in PRO accounts only'), 'E1 label must be the N4 wording');

  // Listening through the repo checker; speakers keep their one voice.
  const listeningPath = 'app/escucha-3d/content/taller/b1.json';
  const listeningSource = readFileSync(listeningPath, 'utf8');
  const listening = JSON.parse(listeningSource);
  const listeningProblems = checkFile('taller', 'B1', listening, listeningPath);
  ok(listeningProblems.length === 0, `listening: ${listeningProblems.join(' | ')}`);
  ok(JSON.stringify(listening.items.map(i => i.id)) === JSON.stringify(SPOTS), 'listening: one item per circle, same ids, same order');
  for (const item of listening.items) {
    ok(item.title === CIRCLES[item.id]?.title, `listening ${item.id}: title differs from the scene («${item.title}»)`);
    for (const s of item.speakers) {
      const member = Object.values(CAST).find(c => c.name === s.name);
      ok(member, `listening ${item.id}: ${s.name} is not in CAST`);
      if (member) ok(member.voice === s.voice, `listening ${item.id}: ${s.name} must keep ${member.voice}`);
    }
  }

  // Language guard: repo scanner on the data and the listening, and the world's rules.
  const dataPath = 'app/el-taller-de-la-greda/levels/b1.mjs';
  const dataSource = readFileSync(dataPath, 'utf8');
  const registry = JSON.parse(readFileSync(REGISTRY_PATH, 'utf8'));
  for (const [text, path] of [[dataSource, dataPath], [listeningSource, listeningPath]]) {
    const findings = scanSource(text, path, registry);
    ok(findings.length === 0, `neutral-Spanish guard: ${findings.map(f => `${path}:${f.line} «${f.token}» (${f.kind})`).join('; ')}`);
  }
  const body = dataSource.slice(dataSource.indexOf('export const SPOTS')).toLocaleLowerCase('es');
  for (const banned of ['vosotros', 'sumercé', 'ráquira', 'coger', 'móvil', 'ordenador', 'artesanía típica', 'folclor', 'exótic']) {
    // «exótico» appears once on purpose in the circle 5 teacher note («no lo presentes como algo exótico»).
    if (banned === 'exótic') { ok((body.match(/exótic/g) ?? []).length <= 1, `${dataPath}: «exótico» framing`); continue; }
    ok(!body.includes(banned), `${dataPath}: banned word «${banned}»`);
  }
  for (const path of ['app/el-taller-de-la-greda/TallerGame.tsx', 'app/el-taller-de-la-greda/layout.tsx']) {
    ok(!/Ráquira/i.test(readFileSync(path, 'utf8')), `${path}: the town is never named`);
  }

  return { problems, warnings, checks };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? '').href) {
  const { problems, warnings, checks } = checkTaller();
  for (const w of warnings) console.log(`note ${w}`);
  for (const p of problems) console.error(`FAIL ${p}`);
  console.log(`${checks - problems.length}/${checks} checks passed`);
  process.exitCode = problems.length ? 1 : 0;
}
