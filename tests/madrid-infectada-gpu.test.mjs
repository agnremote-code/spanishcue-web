// Gated repair 2026-11-11 (docs/audits/madrid-infectada-repair-gpu-20261111.md): the Madrid infectada
// cleanup never lost the WebGL context, left the bloom pass's own render targets and the sun's shadow
// map, never freed the city's tree InstancedMesh instance buffers (the kit's disposeGroup leaves them),
// and left the particle stock (sparks, crows, dust) that lives outside the scene. SwiftShader on main:
// 18 textures and 3 buffers at 1280 px after the unmount, context not lost
// (`node scripts/qa-feria-browser.mjs --madrid-gpu`).
// Scene construction, the Metro trip, the composer and React stay real; only the GPU and 2D drawing are stubbed.
import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';
import { createRequire } from 'node:module';
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const require = createRequire(import.meta.url);
const React = require('react'), { act } = React, { createRoot } = require('react-dom/client');

const renderers = [];
const fn = () => {};
const freed = { instanced: 0, bloom: 0, shadow: 0 };
// Like three.js, the stub renderer makes a light's shadow map on its first shadowed render.
function shadowMaps(scene) {
  scene.traverse?.(o => {
    if (!o.isLight || !o.castShadow || !o.shadow || o.shadow.map) return;
    const map = new THREE.WebGLRenderTarget(4, 4), dispose = map.dispose.bind(map);
    map.dispose = () => { freed.shadow++; dispose(); };
    o.shadow.map = map;
  });
}
class Renderer {
  constructor() {
    this.domElement = document.createElement('canvas');
    this.shadowMap = {}; this.lost = 0; this.autoClear = true; this.toneMappingExposure = 1; this.outputColorSpace = THREE.SRGBColorSpace;
    this.capabilities = { isWebGL2: true, maxSamples: 4 }; this.info = { autoReset: true, reset: fn };
    renderers.push(this);
  }
  setPixelRatio() {} getPixelRatio() { return 1; } setSize() {}
  getSize(v) { return v.set(1024, 768); } getDrawingBufferSize(v) { return v.set(1024, 768); }
  getRenderTarget() { return null; } setRenderTarget() {} getClearColor(c) { return c; } getClearAlpha() { return 1; }
  setClearColor() {} setClearAlpha() {} clear() {} render(scene) { if (scene?.isScene) shadowMaps(scene); } getContext() { return { getParameter: () => 0 }; }
  dispose() {} forceContextLoss() { this.lost++; }
}

const external = ['three', 'three/*', 'react', 'react-dom', 'react/*'];
const compiled = await build({ entryPoints: ['app/madrid-infectada/World3D.tsx'], bundle: true, platform: 'node', format: 'cjs', write: false, loader: { '.css': 'empty' }, jsx: 'automatic', external });
const m = { exports: {} };
new Function('require', 'module', 'exports', compiled.outputFiles[0].text)(name =>
  name === 'three' ? { ...THREE, WebGLRenderer: Renderer } : require(name), m, m.exports);

async function mount(extra = {}) {
  const dom = new JSDOM('<main><div id="root"></div></main>', { url: 'https://fixture.invalid/madrid-infectada', pretendToBeVisual: true });
  for (const k of ['window', 'document', 'HTMLElement', 'localStorage', 'KeyboardEvent']) globalThis[k] = dom.window[k];
  window.matchMedia = () => ({ matches: false }); // desktop quality: composer, bloom and shadows
  Object.defineProperty(window, 'innerWidth', { value: 1280, configurable: true });
  dom.window.HTMLCanvasElement.prototype.getContext = () => new Proxy({ createRadialGradient: () => ({ addColorStop() {} }), createLinearGradient: () => ({ addColorStop() {} }), measureText: () => ({ width: 10 }), getImageData: () => ({ data: new Uint8ClampedArray(4) }) }, { get: (o, k) => o[k] ?? (() => {}) });
  const frames = new Map(); let frameId = 0, time = 0;
  globalThis.requestAnimationFrame = f => { frames.set(++frameId, f); return frameId; }; globalThis.cancelAnimationFrame = id => frames.delete(id);
  globalThis.ResizeObserver = class { observe() {} disconnect() {} }; globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const none = () => {};
  const seen = { zone: null, metro: 0 };
  let props = { level: 'b1', start: 'sol', go: { zone: 'sol', n: 0 }, target: null, intro: false, finale: false, spotOpen: null, done: [], paused: false, inset: { right: 0, bottom: 0 }, act: 0, fire: 0,
    onIntroEnd: none, onFinaleEnd: none, onNear: none, onSpot: none, onVax: none, onEvent: e => { if (e === 'metro') seen.metro++; }, onPose: p => { seen.zone = p.zone; }, onFail: () => assert.fail('GPU fixture failed'), ...extra };
  const root = createRoot(document.getElementById('root'));
  const render = async more => { props = { ...props, ...more }; await act(() => root.render(React.createElement(m.exports.default, props))); };
  const advance = async (n = 20) => act(() => { for (let i = 0; i < n; i++) { time += 16; const pending = [...frames.values()]; frames.clear(); for (const f of pending) f(time); } });
  await render({});
  return { seen, advance, render, async go(zone) { await render({ go: { zone, n: props.go.n + 1 } }); await advance(120); }, async stop() { await act(() => root.unmount()); dom.window.close(); } };
}

test('Madrid infectada frees the GPU on unmount after a Metro trip: instance buffers, bloom pass, shadow map and the context (2026-11-11 repair)', async () => {
  const instDispose = THREE.InstancedMesh.prototype.dispose, bloomDispose = UnrealBloomPass.prototype.dispose;
  THREE.InstancedMesh.prototype.dispose = function () { freed.instanced++; return instDispose.call(this); };
  UnrealBloomPass.prototype.dispose = function () { freed.bloom++; return bloomDispose.call(this); };
  try {
    const t = await mount();
    await t.advance(10);
    await t.go('metro');
    assert.equal(t.seen.metro, 1, 'the trip reached the Metro');
    assert.equal(t.seen.zone, 'metro');
    await t.go('sol');
    assert.notEqual(t.seen.zone, 'metro', 'back up in the city');
    assert.equal(freed.instanced, 0, 'the city (with its trees) stays built while you walk it');
    const renderer = renderers.at(-1);
    assert.equal(freed.shadow, 0, 'the shadow map was made and is still in use');
    await t.stop();
    assert.ok(freed.instanced >= 3, `the city's tree trunks, crowns and branches free their instance buffers (freed ${freed.instanced})`);
    assert.equal(freed.bloom, 1, 'the bloom pass frees its own render targets');
    assert.equal(freed.shadow, 1, "the sun's shadow map is freed");
    assert.equal(renderer.lost, 1, 'the context is lost exactly once');
    // React's unmount already detaches the mount div, so check the canvas left its parent (review NB2).
    assert.equal(renderer.domElement.parentNode, null, 'the canvas is removed from its mount');
  } finally {
    THREE.InstancedMesh.prototype.dispose = instDispose; UnrealBloomPass.prototype.dispose = bloomDispose;
  }
});

// Gated repair 2026-11-27 (docs/audits/madrid-infectada-repair-boat-context-20261127.md), the two
// follow-ups of the 11-11 repair: the replayed finale boat was only detached (review NB4), and a lost
// WebGL context froze the world instead of falling back to the 2D map.
test('Madrid infectada frees the finale boat when the finale ends, without freeing the shared city materials (2026-11-27 repair)', async () => {
  const geoDispose = THREE.BufferGeometry.prototype.dispose, matDispose = THREE.Material.prototype.dispose;
  const count = { geo: 0, mat: [] };
  THREE.BufferGeometry.prototype.dispose = function () { count.geo++; return geoDispose.call(this); };
  THREE.Material.prototype.dispose = function () { count.mat.push(this); return matDispose.call(this); };
  try {
    const boats = { n: 0 };
    const t = await mount({ onEvent: e => { if (e === 'boat') boats.n++; } });
    await t.advance(10);
    for (let round = 1; round <= 2; round++) {
      await t.render({ finale: true });
      await t.advance(30);
      assert.equal(boats.n, round, `the boat sails in finale ${round}`);
      count.geo = 0; count.mat = [];
      await t.render({ finale: false });
      await t.advance(5);
      assert.ok(count.geo >= 4, `the boat's hull, deck, mast and flag geometries are freed (freed ${count.geo})`);
      assert.equal(count.mat.length, 1, `only the flag's own material is freed, not the shared hull/deck/mast materials (freed ${count.mat.length})`);
      assert.equal(count.mat[0].side, THREE.DoubleSide, 'the freed material is the flag');
    }
    await t.stop();
  } finally {
    THREE.BufferGeometry.prototype.dispose = geoDispose; THREE.Material.prototype.dispose = matDispose;
  }
});

test('Madrid infectada falls back to 2D when the WebGL context is lost, and stops drawing (2026-11-27 repair)', async () => {
  const fails = { n: 0 };
  const t = await mount({ onFail: () => { fails.n++; } });
  await t.advance(10);
  const canvas = renderers.at(-1).domElement;
  const lost = new window.Event('webglcontextlost', { cancelable: true });
  canvas.dispatchEvent(lost);
  assert.equal(lost.defaultPrevented, true, 'the loss is claimed so the browser may restore the context');
  assert.equal(fails.n, 1, 'the game is told to switch to the 2D map');
  canvas.dispatchEvent(new window.Event('webglcontextlost', { cancelable: true }));
  assert.equal(fails.n, 1, 'a second loss event does not report twice');
  await t.stop();
  canvas.dispatchEvent(new window.Event('webglcontextlost', { cancelable: true }));
  assert.equal(fails.n, 1, 'after unmount (which forces the loss itself) nothing is reported');
});
