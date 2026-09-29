import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync, readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';

const scripts = {
  pero: 'pero', perro: 'perro', caro: 'caro', carro: 'carro', rojo: 'rojo',
  'phrase-perro': 'Mi perro corre.', 'phrase-carro': 'El carro es caro.',
  'phrase-contrast': 'Quiero el carro rojo, pero es caro.',
};
test('all eight finite Microsoft clips match the approved scripts, provenance and task mapping', () => {
  const manifest = JSON.parse(readFileSync('app/mouth-lab/audio-manifest.json', 'utf8'));
  assert.equal(manifest.lessonId, 38);
  assert.equal(manifest.synthetic, true);
  assert.equal(manifest.voice, 'es-AR-TomasNeural');
  assert.equal(manifest.rate, '-10%');
  assert.equal(manifest.humanListeningCompleted, false);
  assert.match(manifest.listeningLimitations, /not establish/);
  assert.deepEqual(manifest.clips.map(clip => clip.id), Object.keys(scripts));
  assert.deepEqual(readdirSync('public/audio/mouth-lab').sort(), Object.keys(scripts).map(id => `${id}.mp3`).sort());
  for (const clip of manifest.clips) {
    assert.equal(clip.text, scripts[clip.id]);
    assert.equal(clip.src, `/audio/mouth-lab/${clip.id}.mp3`);
    assert.equal(clip.lessonId, 38);
    assert.equal(clip.voice, manifest.voice);
    assert.equal(clip.rate, manifest.rate);
    assert.ok(clip.stations.length > 0);
    assert.ok(clip.purpose.length > 10);
  }
});

test('every new MP3 matches bytes/hash/duration/codec and fully decodes without errors', () => {
  const manifest = JSON.parse(readFileSync('app/mouth-lab/audio-manifest.json', 'utf8'));
  for (const clip of manifest.clips) {
    const path = 'public' + clip.src, bytes = readFileSync(path);
    assert.ok(bytes.length > 1000, clip.id);
    assert.equal(bytes.length, clip.byteLength, clip.id);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), clip.sha256, clip.id);
    const probe = JSON.parse(execFileSync('ffprobe', ['-v','error','-show_entries','format=duration:stream=codec_name,sample_rate,channels','-of','json',path], {encoding:'utf8'}));
    assert.equal(probe.streams.length, 1);
    assert.equal(probe.streams[0].codec_name, 'mp3');
    assert.equal(clip.codec, 'mp3');
    assert.equal(Number(probe.streams[0].sample_rate), clip.sampleRate);
    assert.equal(probe.streams[0].channels, clip.channels);
    assert.ok(clip.durationSeconds > 0);
    assert.ok(Math.abs(Number(probe.format.duration) - clip.durationSeconds) < .001);
    execFileSync('ffmpeg', ['-v','error','-i',path,'-f','null','-'], {stdio:'pipe'});
  }
});
