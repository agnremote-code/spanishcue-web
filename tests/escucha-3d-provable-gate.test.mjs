// BOARD-DECISION-006 §3.6: the provable listening gate tooling.
// - the §3.2/§3.3 lint (scripts/check-escucha-3d-provable.mjs);
// - the per-level seed plan of scripts/check-escucha-3d-provable-stt.py, run
//   with --plan (no audio, no models, standard-library Python only).
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { provableKey, PROVABLE_KEYS } from '../scripts/check-escucha-3d-provable.mjs';

const voices = JSON.parse(readFileSync('app/escucha-3d/voices.json', 'utf8'));
const WOMAN = 'es-CO-SalomeNeural';
const WOMAN2 = 'es-AR-ElenaNeural';
const MAN = 'es-MX-JorgeNeural';
const MAN2 = 'es-CL-LorenzoNeural';
const SCRIPT = 'scripts/check-escucha-3d-provable-stt.py';

const item = (over = {}) => ({
  id: 'x',
  speakers: [{ name: 'Rocío', voice: WOMAN }, { name: 'Iván', voice: MAN }],
  lines: [{ s: 0, text: 'Buenas noches. Estoy en la lista de hoy.' }],
  gaps: 'Estoy en la [lista] de [hoy].',
  ...over,
});

test('the voices used by these fixtures have the genders the fixtures assume', () => {
  assert.deepEqual([WOMAN, WOMAN2, MAN, MAN2].map(v => voices[v]?.gender), ['f', 'f', 'm', 'm']);
});

test('§3.2 lint passes a clean cross-gender item and a single-voice item', () => {
  assert.deepEqual(provableKey([item()], voices), []);
  assert.deepEqual(provableKey([item({ speakers: [{ name: 'Rocío', voice: WOMAN }] })], voices), []);
  // A capital that starts a sentence (also after «¿» or «¡») is not a proper name.
  assert.deepEqual(provableKey([item({ gaps: '[Hola]. ¿[Dónde] está la [lista]? ¡[Vengan]!' })], voices).filter(m => /capitalised/.test(m)), []);
});

test('§3.2 lint: a gap word ending in -s fails, including invariable words', () => {
  for (const word of ['caros', 'jueves', 'más']) {
    const out = provableKey([item({ gaps: `Estoy en la [${word}] de hoy.` })], voices);
    assert.ok(out.some(m => m.includes(`«${word}» ends in -s`)), `${word}: ${out}`);
  }
});

test('§3.3 lint: a gap word capitalised mid-sentence fails (proper names)', () => {
  const out = provableKey([item({ gaps: 'Me llamo Rocío [Díaz] y vivo aquí.' })], voices);
  assert.ok(out.some(m => m.includes('«Díaz» is capitalised mid-sentence')), String(out));
});

test('§3.2 lint: a multi-word gap fails', () => {
  const out = provableKey([item({ gaps: 'Estoy en [la lista] de hoy.' })], voices);
  assert.ok(out.some(m => m.includes('must be one whole word')), String(out));
});

test('§3.3 lint: two same-gender speakers or three speakers in one clip fail', () => {
  const women = provableKey([item({ speakers: [{ name: 'A', voice: WOMAN }, { name: 'B', voice: WOMAN2 }] })], voices);
  assert.ok(women.some(m => m.includes('two same-gender speakers')), String(women));
  const men = provableKey([item({ speakers: [{ name: 'A', voice: MAN }, { name: 'B', voice: MAN2 }] })], voices);
  assert.ok(men.some(m => m.includes('two same-gender speakers')), String(men));
  const three = provableKey([item({ speakers: [{ name: 'A', voice: WOMAN }, { name: 'B', voice: MAN }, { name: 'C', voice: MAN2 }] })], voices);
  assert.ok(three.some(m => m.includes('not 3')), String(three));
});

test('the lint is wired into checkFile for opted-in games only (older worlds grandfathered)', () => {
  const source = readFileSync('scripts/check-escucha-3d.mjs', 'utf8');
  assert.match(source, /if \(PROVABLE_KEYS\.includes\(game\)\) out\.push\(\.\.\.provableKey\(items, voices\)/);
  assert.ok(Array.isArray(PROVABLE_KEYS));
});

// ------------------------------------------------------------------ seed plan (Python, --plan)
const plan = (args) => {
  const run = spawnSync('python3', [SCRIPT, ...args, '--plan'], { encoding: 'utf8' });
  assert.equal(run.error, undefined, 'python3 must be available (CI runs on ubuntu-24.04)');
  let json = null;
  try { json = JSON.parse(run.stdout); } catch { /* reported below */ }
  assert.ok(json, `plan output is JSON: ${run.stdout.slice(0, 300)} ${run.stderr.slice(0, 600)}`);
  return { status: run.status, ...json };
};
const fixture = (data) => {
  const path = join(mkdtempSync(join(tmpdir(), 'provable-')), 'level.json');
  writeFileSync(path, JSON.stringify(data));
  return path;
};
const REQUIRED = ['gap-delete', 'gap-replace', 'repeat', 'delete', 'article', 'first', 'speaker'];

test('a level with a seedable single-voice clip and a cross-gender dialogue gets all seven §3.4 seeds', () => {
  const p = plan(['boda', 'B1']);
  assert.equal(p.status, 0, JSON.stringify(p.missing));
  assert.deepEqual(p.missing, []);
  const seeds = p.seeds.flatMap(s => s.expect.map(e => e.seed));
  assert.deepEqual([...seeds].sort(), [...REQUIRED].sort());
  const words = p.seeds.find(s => s.kind === 'words');
  assert.equal(new Set(words.expect.filter(e => e.seed !== 'gap-delete' && e.seed !== 'gap-replace').map(e => e.line)).size, 4, 'four distinct other lines');
  // The second gap word is replaced by a whole word, never an -s pair.
  assert.match(words.expect.find(e => e.seed === 'gap-replace').what, /→ «(ventana|pelota|camino|tormenta)»/);
});

test('seeds and references use the generator casting: Emma for women, Florian for men, per-clip pitch (§3.6 i)', () => {
  const p = plan(['boda', 'B1']);
  const speaker = p.seeds.find(s => s.kind === 'speaker');
  assert.equal(speaker.cast.length, 2);
  assert.ok(speaker.cast.some(c => c.startsWith('en-US-EmmaMultilingualNeural ')) && speaker.cast.some(c => c.startsWith('de-DE-FlorianMultilingualNeural ')), String(speaker.cast));
  for (const c of speaker.cast) assert.match(c, / [+-]\d+Hz$/);
  // The seeded line is spoken by the other speaker index, so the generator gives it the other engine and pitch.
  const line = speaker.expect[0].line - 1;
  const authored = JSON.parse(readFileSync('app/escucha-3d/content/boda/b1.json', 'utf8')).items.find(i => i.id === speaker.clip);
  assert.equal(speaker.broken_speakers[line], 1 - authored.lines[line].s);
  // The checker imports the generator instead of copying its voices.
  const source = readFileSync(SCRIPT, 'utf8');
  assert.match(source, /spec_from_file_location\('escucha3d_generator', ROOT \/ 'scripts\/generate-escucha-3d-audio\.py'\)/);
  assert.doesNotMatch(source, /MultilingualNeural/);
  assert.match(readFileSync('scripts/generate-escucha-3d-audio.py', 'utf8'), /\nif __name__ == '__main__':\n    asyncio\.run\(main\(\)\)\n$/);
});

const single = (lines, gaps) => ({ id: 'solo', speakers: [{ name: 'Rocío', voice: WOMAN }], lines: lines.map(text => ({ s: 0, text })), gaps });
const SOLO_LINES = [
  'Hoy llegamos temprano al mercado del pueblo.',
  'Compramos pan caliente para toda la familia.',
  'Después caminamos despacio hasta la plaza mayor.',
  'Mañana volvemos con mucha calma y buena música.',
  'Bueno, por la tarde descansamos en casa.',
];
const DUO = { id: 'duo', speakers: [{ name: 'Rocío', voice: WOMAN }, { name: 'Iván', voice: MAN }],
  lines: [{ s: 0, text: 'Hola, ¿qué tal?' }, { s: 1, text: 'Muy bien, gracias. Acabo de volver del trabajo y estoy cansado.' }] };

test('a fixture level with every target passes the plan', () => {
  const p = plan(['--content', fixture({ game: 'fixture', level: 'B1', items: [single(SOLO_LINES, 'Hoy llegamos [temprano] al [mercado] del [pueblo].'), DUO] })]);
  // Three gaps are enough for the plan (the content checker asks for four).
  assert.deepEqual(p.missing, []);
  assert.equal(p.status, 0);
});

test('a level without a seedable single-voice clip is NOT VALID: missing seeds are named, never skipped (§3.4)', () => {
  const p = plan(['--content', fixture({ game: 'fixture', level: 'B1', items: [DUO] })]);
  assert.equal(p.status, 1);
  for (const seed of REQUIRED.filter(s => s !== 'speaker')) assert.ok(p.missing.some(m => m.startsWith(`${seed} `)), `${seed} reported missing: ${p.missing}`);
});

test('a single-voice clip with no article line cannot host the article seed', () => {
  const lines = SOLO_LINES.map(l => l.replace(/ (la|las|los|el) /g, ' '));
  const p = plan(['--content', fixture({ game: 'fixture', level: 'B1', items: [single(lines, 'Hoy llegamos [temprano] al [mercado] del [pueblo].'), DUO] })]);
  assert.equal(p.status, 1);
  assert.ok(p.missing.some(m => m.startsWith('article ')), String(p.missing));
});

test('a level whose only dialogue is same-gender has no speaker seed and is NOT VALID (§3.3)', () => {
  const women = { ...DUO, speakers: [{ name: 'Rocío', voice: WOMAN }, { name: 'Elena', voice: WOMAN2 }] };
  const p = plan(['--content', fixture({ game: 'fixture', level: 'B1', items: [single(SOLO_LINES, 'Hoy llegamos [temprano] al [mercado] del [pueblo].'), women] })]);
  assert.equal(p.status, 1);
  assert.ok(p.missing.some(m => m.startsWith('speaker ')), String(p.missing));
});

test('the run is green only when the seeded test is VALID and every clip passes (§3.6 iii)', () => {
  const source = readFileSync(SCRIPT, 'utf8');
  assert.match(source, /return 0 if report\['tool_valid'\] is True and report\['all_pass'\] else 1/);
  assert.match(source, /'valid': all_found and not missing/);
  assert.match(source, /all_found = bool\(cases\) and /, 'zero seeds can never be valid (no all([]) pass)');
  assert.match(source, /report\['all_pass'\] = bool\(report\['clips'\]\) and /);
});
