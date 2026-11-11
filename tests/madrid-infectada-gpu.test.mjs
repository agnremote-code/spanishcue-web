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

async function mount() {
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
    onIntroEnd: none, onFinaleEnd: none, onNear: none, onSpot: none, onVax: none, onEvent: e => { if (e === 'metro') seen.metro++; }, onPose: p => { seen.zone = p.zone; }, onFail: () => assert.fail('GPU fixture failed') };
  const root = createRoot(document.getElementById('root'));
  const render = async more => { props = { ...props, ...more }; await act(() => root.render(React.createElement(m.exports.default, props))); };
  const advance = async (n = 20) => act(() => { for (let i = 0; i < n; i++) { time += 16; const pending = [...frames.values()]; frames.clear(); for (const f of pending) f(time); } });
  await render({});
  return { seen, advance, async go(zone) { await render({ go: { zone, n: props.go.n + 1 } }); await advance(120); }, async stop() { await act(() => root.unmount()); dom.window.close(); } };
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
