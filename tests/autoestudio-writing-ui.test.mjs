import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { build } from 'esbuild';
import { createRequire } from 'node:module';

// Set up DOM before ReactDOM so its real input-event support is initialized.
const dom = new JSDOM('<div id="root"></div>', { url: 'https://spanishcue.test' });
for (const key of ['window', 'document', 'HTMLElement', 'Event']) globalThis[key] = dom.window[key];
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const require = createRequire(import.meta.url);
const React = require('react');
const { act } = React;
const { createRoot } = require('react-dom/client');
const built = await build({
  stdin: { resolveDir: process.cwd(), loader: 'tsx', contents: `
    import { WritingSection } from './app/autoestudio/engine/Sections';
    import { useProgress } from './app/autoestudio/progress/useProgress';
    import { saveDraft } from './app/autoestudio/progress/model';
    import { copyFor } from './app/autoestudio/engine/copy';
    export default function Editor() {
      const {state, ready, update} = useProgress();
      if (!ready) return null;
      return <WritingSection writing={{task:'Presentación',words:[1,40],steps:[],useLanguage:[],checklist:[],model:[]}}
        ctx={{t:copyFor('es'),showEnglish:false}} draft={state.modules['a1-01']?.writingDraft ?? ''}
        onDraft={text => update(current => saveDraft(current,'a1-01',text))} />;
    }
  ` },
  bundle: true, platform: 'node', format: 'cjs', write: false,
  jsx: 'automatic', external: ['react', 'react-dom', 'next/*'], loader: { '.css': 'empty' },
});
const compiled = { exports: {} };
new Function('require', 'module', 'exports', built.outputFiles[0].text)(require, compiled, compiled.exports);

async function mount() {
  const root = createRoot(document.getElementById('root'));
  await act(async () => root.render(React.createElement(compiled.exports.default)));
  return root;
}
async function edit(text) {
  const textarea = document.querySelector('textarea');
  await act(() => {
    Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set.call(textarea, text);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  });
  assert.equal(textarea.value, text, 'the real editor accepted the input');
}

test('writing survives immediate reload, including replacement and clearing, without waiting for a save timer', async () => {
  let root = await mount();
  try {
    for (const text of ['Buenas tardes. Me llamo Luna.', 'Buenas tardes. Me llamo Sol.', '']) {
      await edit(text);
      await act(() => root.unmount());
      // Remount with the same origin storage, as a reload would, without advancing timers.
      root = await mount();
      assert.equal(document.querySelector('textarea').value, text, 'latest draft survives reload');
    }
  } finally {
    await act(() => root.unmount());
    dom.window.close();
  }
});
