// The 3D worlds must stay light on a laptop: a frame limit, a pixel budget for
// huge canvases and no per-frame work for what is hidden (owner report,
// 2026-11-12: the Mac stalled when opening a 3D class).
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import * as THREE from 'three';
import { createFramePacer, skipHiddenMatrices, worldPixelRatio } from '../app/noche-abierta/world3d.mjs';

const drawn = (hz, seconds, calm = false) => {
  const pace = createFramePacer();
  let n = 0;
  for (let i = 0; i < hz * seconds; i++) if (pace(i * 1000 / hz, calm)) n++;
  return n / seconds;
};

test('a 60 Hz display never drops a frame; faster displays draw about 60', () => {
  assert.equal(drawn(60, 10), 60);
  assert.equal(drawn(120, 10), 60);
  for (const hz of [75, 90, 100, 144, 165, 240]) { const fps = drawn(hz, 10); assert.ok(fps >= 45 && fps <= 75.5, `${hz} Hz draws ${fps}`); }
});

test('a calm world (title card, a panel over the scene) draws about 30', () => {
  assert.equal(drawn(60, 10, true), 30);
  assert.equal(drawn(120, 10, true), 30);
  for (const hz of [75, 90, 144]) { const fps = drawn(hz, 10, true); assert.ok(fps >= 28 && fps <= 38, `${hz} Hz draws ${fps}`); }
});

test('a normal window keeps its sharpness; a huge Retina canvas is held to the pixel budget', () => {
  assert.equal(worldPixelRatio(1440, 800, 1.75, 2), 1.75);
  assert.equal(worldPixelRatio(1280, 720, 1.75, 1), 1);
  assert.equal(worldPixelRatio(390, 780, 1.2, 3), 1.2);
  const huge = worldPixelRatio(2366, 1141, 1.75, 2);
  assert.ok(huge > 1.3 && huge < 1.4, String(huge));
  assert.ok(2366 * 1141 * huge * huge <= 5e6 + 1);
  assert.equal(worldPixelRatio(3840, 2160, 1.75, 1), 1, 'never below one device pixel');
});

test('hidden parts of a scene cost nothing and are right again the frame they show', () => {
  const build = () => {
    const scene = new THREE.Scene();
    const floor = new THREE.Group(); floor.position.set(0, 4, 0);
    const desk = new THREE.Mesh(); desk.position.set(3, 1, -2);
    const lamp = new THREE.Mesh(); lamp.position.set(0, 1, 0); lamp.matrixAutoUpdate = false; lamp.updateMatrix();
    desk.add(lamp); floor.add(desk); scene.add(floor);
    return { scene, floor, desk, lamp };
  };
  const a = build(), b = build();
  skipHiddenMatrices(a.scene);
  for (const w of [a, b]) { w.floor.visible = false; w.scene.updateMatrixWorld(); }
  assert.deepEqual(a.lamp.matrixWorld.elements, new THREE.Matrix4().elements, 'the hidden floor was not walked');
  for (const w of [a, b]) { w.floor.position.y = 8; w.desk.position.x = 5; w.floor.visible = true; w.scene.updateMatrixWorld(); }
  assert.deepEqual(a.lamp.matrixWorld.elements, b.lamp.matrixWorld.elements);
  assert.deepEqual(a.desk.matrixWorld.elements, b.desk.matrixWorld.elements);
  assert.equal(new THREE.Vector3().setFromMatrixPosition(a.lamp.matrixWorld).y, 10);
});

test('every 3D world limits its frames', () => {
  const worlds = readdirSync('app').map(dir => `app/${dir}/World3D.tsx`).filter(file => existsSync(file));
  assert.ok(worlds.length >= 14);
  for (const file of worlds) {
    const source = readFileSync(file, 'utf8');
    // The forest has its own adaptive quality and pauses while hidden.
    if (file.includes('bosque-de-los-hongos-gigantes')) continue;
    assert.match(source, /createFramePacer\(\)/, `${file} must use createFramePacer`);
    assert.match(source, /if \(!pace\(now/, `${file} must skip early frames`);
  }
});
