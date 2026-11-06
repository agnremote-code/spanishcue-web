// Gated repair 2026-11-06 (docs/audits/mas-alla-repair-gpu-20261106.md): Más allá builds the Cielo and
// the Infierno when you cross a gate and frees them on the way out. On main each Cielo + Infierno round
// kept 9 GPU buffers (InstancedMesh instance buffers), each Umbral visit made a new black mirror whose
// render target and three.js transmission target were never freed, and the unmount never lost the
// WebGL context (SwiftShader counts in the LQG file; `node scripts/qa-feria-browser.mjs --masalla-gpu`).
// Scene construction, place swaps, the composer and React stay real; only the GPU and 2D drawing are stubbed.
import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';
import { createRequire } from 'node:module';
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

const require = createRequire(import.meta.url);
const React = require('react'), { act } = React, { createRoot } = require('react-dom/client');

const renderers = [];
const fn = () => {};
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
  setClearColor() {} setClearAlpha() {} clear() {} render() {} getContext() { return { getParameter: () => 0 }; }
  dispose() {} forceContextLoss() { this.lost++; }
}
const made = { mirrors: 0 }, freed = { mirrors: 0, instanced: 0, bloom: 0 };
class CountedReflector extends Reflector {
  constructor(...a) { super(...a); made.mirrors++; const d = this.dispose; this.dispose = () => { freed.mirrors++; d(); }; }
}

const external = ['three', 'three/*', 'react', 'react-dom', 'react/*'];
const compiled = await build({ entryPoints: ['app/mas-alla/World3D.tsx'], bundle: true, platform: 'node', format: 'cjs', write: false, loader: { '.css': 'empty' }, jsx: 'automatic', external });
const m = { exports: {} };
new Function('require', 'module', 'exports', compiled.outputFiles[0].text)(name =>
  name === 'three' ? { ...THREE, WebGLRenderer: Renderer }
    : name === 'three/addons/objects/Reflector.js' ? { Reflector: CountedReflector }
      : require(name), m, m.exports);

async function mount() {
  const dom = new JSDOM('<div id="root"></div>', { url: 'https://fixture.invalid/mas-alla', pretendToBeVisual: true });
  for (const k of ['window', 'document', 'HTMLElement', 'localStorage', 'KeyboardEvent']) globalThis[k] = dom.window[k];
  window.matchMedia = () => ({ matches: false }); // desktop quality: composer, shadows and the black mirror
  dom.window.HTMLCanvasElement.prototype.getContext = () => new Proxy({ createRadialGradient: () => ({ addColorStop() {} }), createLinearGradient: () => ({ addColorStop() {} }), measureText: () => ({ width: 10 }), getImageData: () => ({ data: new Uint8ClampedArray(4) }) }, { get: (o, k) => o[k] ?? (() => {}) });
  const frames = new Map(); let frameId = 0, time = 0;
  globalThis.requestAnimationFrame = f => { frames.set(++frameId, f); return frameId; }; globalThis.cancelAnimationFrame = id => frames.delete(id);
  globalThis.ResizeObserver = class { observe() {} disconnect() {} }; globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const none = () => {};
  let props = { view: 'umbral', spotOpen: null, done: [], paused: false, inset: { right: 0, bottom: 0 }, greetings: {}, act: 0, onIntroBeat: none, onNear: none, onPortal: none, onExit: none, onFinal: none, onSpot: none, onPose: none, onFail: () => assert.fail('GPU fixture failed') };
  const root = createRoot(document.getElementById('root'));
  const render = async more => { props = { ...props, ...more }; await act(() => root.render(React.createElement(m.exports.default, props))); };
  const advance = async (n = 20) => act(() => { for (let i = 0; i < n; i++) { time += 16; const pending = [...frames.values()]; frames.clear(); for (const f of pending) f(time); } });
  await render({});
  return { render, advance, async go(view) { await render({ view }); await advance(120); }, async stop() { await act(() => root.unmount()); dom.window.close(); } };
}

test('Más allá frees what it leaves: instance buffers on every swap, one mirror per mount, passes and the context on unmount (2026-11-06 repair)', async () => {
  const instDispose = THREE.InstancedMesh.prototype.dispose, bloomDispose = UnrealBloomPass.prototype.dispose;
  THREE.InstancedMesh.prototype.dispose = function () { freed.instanced++; return instDispose.call(this); };
  UnrealBloomPass.prototype.dispose = function () { freed.bloom++; return bloomDispose.call(this); };
  try {
    const t = await mount();
    await t.advance(10);
    assert.equal(made.mirrors, 1, 'the first Umbral has its black mirror');
    await t.go('cielo');
    assert.equal(freed.instanced, 0, 'the Umbral has no instanced meshes');
    await t.go('umbral');
    assert.ok(freed.instanced > 0, 'leaving the Cielo frees its instance buffers');
    const afterCielo = freed.instanced;
    await t.go('infierno'); await t.go('umbral');
    assert.ok(freed.instanced > afterCielo, 'leaving the Infierno frees its instance buffers');
    assert.equal(made.mirrors, 1, 'every Umbral visit reuses the same mirror (a new one leaves a transmission target behind)');
    assert.equal(freed.mirrors, 0, 'the mirror survives the swaps');
    const renderer = renderers.at(-1);
    await t.stop();
    assert.equal(freed.mirrors, 1, 'the mirror is freed on unmount');
    assert.equal(freed.bloom, 1, 'the bloom pass frees its own render targets');
    assert.equal(renderer.lost, 1, 'the context is lost exactly once');
    assert.equal(renderer.domElement.isConnected, false, 'the canvas is removed');
  } finally {
    THREE.InstancedMesh.prototype.dispose = instDispose; UnrealBloomPass.prototype.dispose = bloomDispose;
  }
});
