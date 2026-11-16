// The teacher's pass against the built Worker: a student holding a PRO
// teacher's link plays the hub's 3D worlds and nothing else; a link from a
// teacher without PRO opens none of them.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const origin = process.env.CHESPANISH_TEST_ORIGIN;
const secret = process.env.AUTOESTUDIO_TEST_SHARE_SECRET;
const enabled = Boolean(origin && secret);
const WORLD = '/el-consorcio';
const WORLD_AUDIO = '/audio/escucha-3d/argentina-a0-bariloche.mp3';
const OTHER_AUDIO = '/audio/frecuencia-abierta/tono-sincera.mp3';

const cookies = new Map();
async function passCookie(id) {
  if (cookies.has(id)) return cookies.get(id);
  const token = `v1.${id}.a1.1`;
  const signed = `${token}.${createHmac('sha256', secret).update(token).digest('hex')}`;
  const response = await fetch(`${origin}/s/${signed}`, { redirect: 'manual' });
  assert.equal(response.status, 303);
  const cookie = response.headers.get('set-cookie').split(';')[0];
  cookies.set(id, cookie);
  return cookie;
}
const proPass = () => passCookie('d'.repeat(48));
const freePass = () => passCookie('b'.repeat(48));
const get = (path, headers = {}) => fetch(origin + path, { headers, redirect: 'manual' });

async function chunks() {
  const report = JSON.parse(await readFile('dist/.openai/client-protection-report.json', 'utf8'));
  const student = new Set(report.studentProtectedFiles);
  return { student: `/${report.studentProtectedFiles[0]}`, teacherOnly: `/${report.protectedFiles.find((file) => !student.has(file))}` };
}

test('without a pass a PRO world, its chunks and its audio stay closed', { skip: !enabled }, async () => {
  const { student } = await chunks();
  const page = await get(WORLD);
  assert.notEqual(page.status, 200);
  assert.match(page.headers.get('location') ?? '', /\/acceso\?returnTo=/);
  assert.notEqual((await get(student)).status, 200);
  assert.notEqual((await get(WORLD_AUDIO)).status, 200);
});

test('a PRO teacher\'s pass opens the hub worlds, their chunks and their audio', { skip: !enabled }, async () => {
  const headers = { cookie: await proPass() };
  const { student } = await chunks();
  const page = await get(WORLD, headers);
  assert.equal(page.status, 200);
  assert.equal((await get(student, headers)).status, 200);
  assert.equal((await get(WORLD_AUDIO, headers)).status, 200);
  const hub = await get('/jugar', headers);
  assert.equal(hub.status, 200);
  const html = await hub.text();
  assert.match(html, /WorkerSol/);
  assert.match(html, new RegExp(`href="${WORLD}"`));
});

test('the pass never reaches teacher pages, other classes, other chunks or other audio', { skip: !enabled }, async () => {
  const headers = { cookie: await proPass() };
  const { teacherOnly } = await chunks();
  for (const path of ['/la-ciudad-de-los-motores', '/autoestudio/b1/semana-3', '/cuenta?tab=alumnos', teacherOnly, OTHER_AUDIO]) {
    const response = await get(path, headers);
    assert.notEqual(response.status, 200, path);
  }
  assert.equal((await get('/api/autoestudio/passes', headers)).status, 401);
});

test('a pass from a teacher without PRO opens no world and sends the student back to the hub', { skip: !enabled }, async () => {
  const headers = { cookie: await freePass() };
  const { student } = await chunks();
  const page = await get(WORLD, headers);
  assert.notEqual(page.status, 200);
  assert.match(page.headers.get('location') ?? '', /\/jugar\?pase=vencido$/);
  assert.notEqual((await get(student, headers)).status, 200);
  assert.notEqual((await get(WORLD_AUDIO, headers)).status, 200);
  const hub = await get('/jugar', headers);
  assert.equal(hub.status, 200);
  assert.doesNotMatch(await hub.text(), new RegExp(`href="${WORLD}"`));
});

test('forged pass headers are erased', { skip: !enabled }, async () => {
  const forged = { 'x-spanishcue-student-pass': '1', 'x-spanishcue-student-alias': 'Forged', 'x-chespanish-access-level': 'full' };
  assert.notEqual((await get(WORLD, forged)).status, 200);
  const hub = await get('/jugar', forged);
  const html = await hub.text();
  assert.doesNotMatch(html, /Forged/);
  assert.doesNotMatch(html, new RegExp(`href="${WORLD}"`));
});
