import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync, readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';

const readJson = path => JSON.parse(readFileSync(path, 'utf8'));
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const baseline = readJson('tests/fixtures/wave2-preserved.json');
const audioLessons = [
  {id: 131, route: 'ultima-llamada', ids: ['salida','amiga','cafe','cambio','camino','conductor']},
  {id: 133, route: 'habitacion-508', ids: ['huesped','recepcion','housekeeping','room-service','vecino','gerente','resolution']},
];

test('Wave 1 source, 32 MP3s, tests, documentation history, catalog and four thumbnails remain byte exact', () => {
  assert.equal(baseline.baseCommit, 'e8f38659588526253c51f638b39e337682729363');
  assert.equal(Object.keys(baseline.records).length, 70);
  assert.equal(Object.keys(baseline.records).filter(path => path.startsWith('public/audio/phonetics/')).length, 32);
  for (const [path, expected] of Object.entries(baseline.records)) {
    const bytes = readFileSync(path);
    if (expected.prefixBytes) assert.ok(bytes.length >= expected.prefixBytes, path);
    assert.equal(hash(expected.prefixBytes ? bytes.subarray(0, expected.prefixBytes) : bytes), expected.sha256, path);
  }
});

test('the four canonical IDs, levels, routes, categories and access boundaries are preserved', async () => {
  const bundled = await build({stdin: {contents: "export {lessons} from './app/lesson-catalog'; export {isFreeLesson,lessonAtPath,freeAudioPrefixes} from './app/access-policy';", resolveDir: process.cwd()}, bundle: true, write: false, platform: 'node', format: 'esm'});
  const catalog = await import('data:text/javascript;base64,' + Buffer.from(bundled.outputFiles[0].text).toString('base64'));
  const expected = [
    [131, 'Última Llamada', 'A2', 'Escucha', '/ultima-llamada', false],
    [133, 'Habitación 508', 'B2', 'Escucha', '/habitacion-508', false],
    [16, 'ARGENTO', 'A1', 'Vocabulario', '/argento', true],
    [108, 'El Banco de Palabras', 'A2', 'Vocabulario', '/banco-de-palabras', false],
  ];
  for (const [id, title, level, category, path, free] of expected) {
    const lesson = catalog.lessons.find(item => item.id === id);
    assert.ok(lesson);
    assert.deepEqual([lesson.title, lesson.level, lesson.category, lesson.path], [title, level, category, path]);
    assert.equal(catalog.lessonAtPath(path, catalog.lessons)?.id, id);
    assert.equal(catalog.isFreeLesson(id), free);
  }
  const bank = catalog.lessons.find(item => item.id === 108);
  assert.deepEqual(bank.levels, ['A2', 'B1']);
  assert.equal(bank.displayLevel, 'A2–B1');
  for (const lesson of audioLessons) assert.equal(catalog.freeAudioPrefixes.has(lesson.route), false);
});

for (const lesson of audioLessons) {
  test(`${lesson.id}: complete source, manifest and file maps agree, including every speaker/script segment`, () => {
    const content = readJson(`app/${lesson.route}/content.json`);
    const manifest = readJson(`app/${lesson.route}/audio-manifest.json`);
    const items = lesson.id === 131 ? content.signals : [...content.testimonies, {...content.resolution, id: 'resolution'}];
    assert.equal(manifest.lessonId, lesson.id);
    assert.equal(manifest.sourceCommit, baseline.baseCommit);
    assert.deepEqual(items.map(item => item.id), lesson.ids);
    assert.deepEqual(manifest.clips.map(clip => clip.id), lesson.ids);
    assert.equal(new Set(manifest.clips.map(clip => clip.src)).size, lesson.ids.length);
    assert.equal(new Set(manifest.clips.map(clip => clip.sha256)).size, lesson.ids.length);
    for (const item of items) {
      const clip = manifest.clips.find(candidate => candidate.id === item.id);
      assert.equal(clip.lessonId, lesson.id);
      assert.equal(clip.src, item.file);
      assert.deepEqual(clip.segments, item.segments);
      assert.match(clip.src, new RegExp(`^/audio/${lesson.route}/[a-z-]+\\.mp3$`));
    }
    assert.deepEqual(readdirSync(`public/audio/${lesson.route}`).sort(), manifest.clips.map(clip => clip.src.split('/').at(-1)).sort());
    assert.equal(manifest.humanListeningCompleted, false);
    assert.match(manifest.listeningLimitations, /No actual audition/);
  });

  test(`${lesson.id}: every reused MP3 has unchanged bytes, exact duration/format and a complete clean decode`, () => {
    const manifest = readJson(`app/${lesson.route}/audio-manifest.json`);
    for (const clip of manifest.clips) {
      const path = 'public' + clip.src;
      const bytes = readFileSync(path);
      assert.ok(bytes.length > 1000, clip.id);
      assert.equal(bytes.length, clip.byteLength, clip.id);
      assert.equal(hash(bytes), clip.sha256, clip.id);
      const probe = JSON.parse(execFileSync('ffprobe', ['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',path], {encoding: 'utf8'}));
      assert.equal(probe.streams.length, 1, clip.id);
      assert.equal(probe.streams[0].codec_name, 'mp3', clip.id);
      assert.equal(Number(probe.streams[0].sample_rate), clip.sampleRate, clip.id);
      assert.equal(probe.streams[0].channels, clip.channels, clip.id);
      assert.ok(clip.durationSeconds > 0, clip.id);
      assert.ok(Math.abs(Number(probe.format.duration) - clip.durationSeconds) < .001, clip.id);
      execFileSync('ffmpeg', ['-v','error','-i',path,'-f','null','-'], {stdio: 'pipe'});
    }
  });
}
