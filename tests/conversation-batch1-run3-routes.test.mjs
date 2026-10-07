import assert from 'node:assert/strict';
import test from 'node:test';
import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {build} from 'esbuild';

const require = createRequire(import.meta.url);
const React = require('react');
const {renderToString} = require('react-dom/server');
const compiled = new Map();
async function compile(path) {
  if (!compiled.has(path)) {
    const r = await build({entryPoints: [path], bundle: true, write: false, format: 'cjs', platform: 'node', external: ['react', 'react-dom', 'next/*'], loader: {'.css': 'empty', '.module.css': 'empty'}});
    compiled.set(path, r.outputFiles[0].text);
  }
  return compiled.get(path);
}
function load(source, react = React, globals = {}, overrides = {}) {
  const loadedModule = {exports: {}};
  runInNewContext(`(function(require,module,exports){${source}\n})`, {console, URL, URLSearchParams, Event, process, ...globals})(name => name === 'react' ? react : overrides[name] || require(name), loadedModule, loadedModule.exports);
  return loadedModule.exports;
}
const catalog = load(await compile('app/conversation-families/catalog.ts'));
const seo = load(await compile('app/resource-seo.ts'));
const red = load(await compile('app/red-flag-o-no/engine.mjs'));
const c1Worlds = load(await compile('app/conversation-worlds/data-c1.ts'));
const talk = load(await compile('app/choose-conversation/variants.ts'));
const routes = [
  ['red-flag-o-no-a2', 'A2', 'red-flag-o-no'], ['red-flag-o-no-b1', 'B1', 'red-flag-o-no'], ['red-flag-o-no-b2', 'B2', 'red-flag-o-no'],
  ['a1-conversation', 'A1', 'lets-talk'], ['basic-conversation', 'A2', 'lets-talk'], ['choose-conversation', 'B1', 'lets-talk'],
  ['la-maquina-que-elimina-cosas', 'B1', 'la-maquina-que-elimina-cosas'], ['la-maquina-que-elimina-cosas-a2', 'A2', 'la-maquina-que-elimina-cosas'],
  ['tu-vida-con-una-regla-absurda', 'B1', 'tu-vida-con-una-regla-absurda'], ['tu-vida-con-una-regla-absurda-a2', 'A2', 'tu-vida-con-una-regla-absurda'],
];
const variants = {
  'red-flag-o-no': [['C2', red.getLevelConfig('C2').warmup]],
  'lets-talk': [['C2', talk.talkVariants.C2.teacherNotes[0]]],
  'la-maquina-que-elimina-cosas': [['C1', c1Worlds.eliminationsC1[0].title]],
  'tu-vida-con-una-regla-absurda': [['C1', c1Worlds.absurdRulesC1[0].title]],
};
async function renderRoute(route, query) {
  const hooks = {...React, useSyncExternalStore: (_subscribe, snapshot, serverSnapshot) => query === undefined ? serverSnapshot() : snapshot()};
  const pageModule = load(await compile(`app/${route}/page.tsx`), hooks, {window: {location: {search: query || ''}}});
  return renderToString(React.createElement(pageModule.default));
}

test('all four Run 3 variants render through every historical adapter with exact level controls', async () => {
  for (const [route,,id] of routes) {
    const family = catalog.conversationFamilies.find(f => f.id === id);
    for (const [level, marker] of variants[id]) {
      const html = await renderRoute(route, `?locale=es&level=${level}&source=teacher`);
      assert.ok(html.includes(`data-level="${level}"`), `${route} ${level}`);
      assert.ok(html.includes(marker), `${route} ${level}: bank-specific content`);
      const controls = [...html.matchAll(/aria-pressed="(?:true|false)">(A0|A1|A2|B1|B2|C1|C2)<\/button>/g)].map(match => match[1]);
      assert.deepEqual(controls, [...family.availableLevels], 'No speculative or missing selector level');
      for (const available of family.availableLevels) assert.ok(html.includes(`>${available}</button>`), `${id} exposes ${available}`);
      assert.ok(html.includes(`aria-pressed="true">${level}</button>`));
      if (!family.availableLevels.includes('C2')) assert.doesNotMatch(html, />C2<\/button>/);
      if (!family.availableLevels.includes('C1')) assert.doesNotMatch(html, />C1<\/button>/);
      assert.doesNotMatch(html, /undefined|NaN/);
    }
  }
});

test('Run 3 keeps all ten historical SSR defaults and rejects unsupported C3', async () => {
  for (const [route, historical] of routes) {
    const unsupported = ['C3'];
    for (const query of [undefined, '', '?level=unknown', ...unsupported.map(level => '?level=' + level)]) {
      const html = await renderRoute(route, query);
      assert.ok(html.includes(`data-level="${historical}"`), `${route} ${query}`);
      assert.ok(html.includes(`aria-pressed="true">${historical}</button>`));
    }
  }
});

test('all four Run 3 variants render their own public preview, objectives, JSON-LD and lesson link without new slugs', async () => {
  // Only framework link/image rendering is stubbed; the actual async resource
  // page and metadata generation execute against the production catalog.
  const pageModule = load(await compile('app/resources/[slug]/page.tsx'), React, {}, {
    'next/link': ({children, ...props}) => React.createElement('a', props, children),
    'next/image': ({priority, ...props}) => { void priority; return React.createElement('img', props); },
    'next/navigation': {notFound: () => {throw new Error('Unexpected 404');}},
  });
  for (const [id, levels] of Object.entries(variants)) {
    const family = catalog.conversationFamilies.find(f => f.id === id);
    const lesson = catalog.catalogLessons.find(l => l.familyId === id);
    const slug = seo.resourceSlugForLesson(lesson);
    for (const [level] of levels) {
      const props = {params: Promise.resolve({slug}), searchParams: Promise.resolve({level})};
      const html = renderToString(await pageModule.default(props));
      const preview = family.previewByLevel[level];
      assert.ok(html.includes(preview.hook), `${id} ${level} hook`);
      assert.ok(html.includes(preview.explanation), `${id} ${level} explanation`);
      assert.ok(html.includes(preview.warmup), `${id} ${level} warmup`);
      assert.ok(html.includes(`src="${preview.image}"`));
      assert.ok(html.includes(`href="${family.canonicalPath}?level=${level}"`));
      for (const objective of family.variants[level].communicativeObjectives) assert.ok(html.includes(objective));
      const structured = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
      assert.equal(structured.educationalLevel, level);
      assert.equal(structured.image, 'https://spanishcue.com' + preview.image);
      assert.equal(structured.url, 'https://spanishcue.com' + seo.resourcePathForLesson(lesson));
      const metadata = await pageModule.generateMetadata(props);
      assert.equal(metadata.alternates.canonical, structured.url, 'canonical metadata remains query-independent');
    }
  }
});

test('all four selectors preserve query/hash, isolate child keys, support back/forward and clean up listeners', async () => {
  const find = (tree, predicate) => !tree || typeof tree !== 'object' ? [] : Array.isArray(tree) ? tree.flatMap(node => find(node, predicate)) : [...(predicate(tree) ? [tree] : []), ...find(tree.props?.children, predicate)];
  for (const id of Object.keys(variants)) {
    const family = catalog.conversationFamilies.find(f => f.id === id);
    const nextLevel = variants[id][0][0];
    const callbacks = new Map();
    const back = [];
    let cleanup;
    let notifications = 0;
    const location = {};
    const setUrl = href => {const url = new URL(href, 'https://example.test'); Object.assign(location, {href: url.href, search: url.search});};
    setUrl(`https://example.test${family.canonicalPath}?locale=es&source=teacher#round`);
    const window = {
      location,
      history: {pushState: (_state, _title, href) => {back.push(location.href); setUrl(href);}},
      addEventListener: (name, callback) => callbacks.set(name, callback),
      removeEventListener: name => callbacks.delete(name),
      dispatchEvent: event => callbacks.get(event.type)?.(),
    };
    const hooks = {...React, useRef: value => ({current: value}), useEffect: () => {}, useCallback: fn => fn, useSyncExternalStore: (subscribe, snapshot) => {
      if (!cleanup) cleanup = subscribe(() => {notifications++;});
      return snapshot();
    }};
    const {ConversationFamily} = load(await compile('app/conversation-families/ConversationFamily.tsx'), hooks, {window});
    const render = () => ConversationFamily({id, title: family.title, levels: family.availableLevels, defaultLevel: family.defaultLevel, children: level => React.createElement('div', {'data-engine': id, key: level})});
    const choose = level => find(render(), node => node.type === 'button' && node.props.children === level)[0].props.onClick();
    choose(nextLevel);
    assert.equal(render().props['data-level'], nextLevel);
    assert.equal(find(render(), node => node.props['data-engine'] === id)[0].key, nextLevel);
    assert.equal(location.href, `https://example.test${family.canonicalPath}?locale=es&source=teacher&level=${nextLevel}#round`);
    choose('A1');
    assert.equal(find(render(), node => node.props['data-engine'] === id)[0].key, 'A1');
    const forward = location.href;
    setUrl(back.pop()); window.dispatchEvent(new Event('popstate'));
    assert.equal(render().props['data-level'], nextLevel);
    setUrl(forward); window.dispatchEvent(new Event('popstate'));
    assert.equal(render().props['data-level'], 'A1');
    assert.equal(notifications, 4);
    const invalid = family.availableLevels.includes('C2') ? 'C3' : 'C2';
    setUrl(`https://example.test${family.canonicalPath}?level=${invalid}#round`); window.dispatchEvent(new Event('popstate'));
    assert.equal(render().props['data-level'], family.defaultLevel);
    cleanup();
    assert.equal(callbacks.size, 0);
  }
});
