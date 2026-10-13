import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM, VirtualConsole } from 'jsdom';
import { build } from 'esbuild';
import { createRequire } from 'node:module';

// Learner feedback cards, the teacher panel and the premium demo with its PayPal modal, rendered with real React.
// A silent virtual console: jsdom cannot navigate, and the PayPal redirect is asserted through the checkout request instead.
const dom = new JSDOM('<div id="root"></div>', { url: 'https://spanishcue.test/autoestudio/a1/semana-1', virtualConsole: new VirtualConsole() });
globalThis.self = dom.window;
for (const key of ['window', 'document', 'HTMLElement', 'HTMLInputElement', 'HTMLTextAreaElement', 'Event', 'KeyboardEvent']) globalThis[key] = dom.window[key];
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true });
dom.window.HTMLElement.prototype.scrollIntoView = function () {};
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const require = createRequire(import.meta.url);
const React = require('react');
const { act } = React;
const { createRoot } = require('react-dom/client');
const built = await build({
  stdin: { resolveDir: process.cwd(), loader: 'tsx', contents: `
    import { ExerciseView } from './app/autoestudio/engine/Exercises';
    import { copyFor } from './app/autoestudio/engine/copy';
    import { useErrorLog } from './app/autoestudio/errors/useErrorLog';
    import { recommendationCatalog } from './app/autoestudio/errors/catalog';
    import { findModule } from './app/autoestudio/curriculum/course';
    import { sectionExercises } from './app/autoestudio/curriculum/lookup';
    export { default as TeacherErrors } from './app/autoestudio/errors/TeacherErrors';
    export { default as Classroom } from './app/grammar-classroom/Classroom';
    export { getClassroomLesson } from './app/grammar-classroom/lessons';
    export { previewOf, PREVIEW_STAGES } from './app/grammar-classroom/preview';
    export { LocaleProvider } from './app/i18n/LocaleProvider';
    export { summarizeCategories, summarizeWeeks, summarizeActivities, evolution } from './app/autoestudio/errors/model';
    export { buildClassPlan } from './app/autoestudio/errors/plan';
    const mod = findModule('a1', 'semana-1')!;
    export const exercise = sectionExercises(mod, 'grammar').find(e => e.id === 'g1')!;
    export function Learner({ fullAccess = false }: { fullAccess?: boolean }) {
      const log = useErrorLog(null, mod.id, mod.newObjectives, recommendationCatalog('a1'), fullAccess);
      return <ExerciseView exercise={exercise} ctx={{ t: copyFor('es'), showEnglish: false, section: 'grammar', report: log.report }} />;
    }
  ` },
  bundle: true, platform: 'node', format: 'cjs', write: false,
  jsx: 'automatic', external: ['react', 'react-dom', 'next/*'], loader: { '.css': 'empty' },
});
const compiled = { exports: {} };
new Function('require', 'module', 'exports', built.outputFiles[0].text)(require, compiled, compiled.exports);
const { Learner, TeacherErrors, Classroom, getClassroomLesson, previewOf, PREVIEW_STAGES, LocaleProvider, exercise, summarizeCategories, summarizeWeeks, summarizeActivities, evolution, buildClassPlan } = compiled.exports;

let root;
async function mount(element) {
  root = createRoot(document.getElementById('root'));
  await act(async () => root.render(element));
}
async function unmount() { if (root) await act(async () => root.unmount()); root = null; }
async function click(selector) { const node = document.querySelector(selector); assert.ok(node, selector); await act(async () => node.click()); }
const text = () => document.body.textContent;
const settle = () => act(async () => { await new Promise(r => setTimeout(r, 0)); });

test('a wrong SER/ESTAR answer gets feedback, the explanation and one discreet card to the real class; a correct one gets no card', async () => {
  assert.equal(exercise.items[0].q, 'Hola, ___ Carlos.');
  window.localStorage.clear();
  await mount(React.createElement(Learner));
  try {
    const options = [...document.querySelectorAll('.ae-options')][0].querySelectorAll('button');
    assert.deepEqual([...options].map(b => b.textContent.replace(/^[ABC]/, '')), ['eres', 'es', 'soy']);
    await act(async () => options[0].click());
    assert.ok(document.querySelector('.ae-feedback.wrong'), 'wrong feedback shown');
    assert.match(text(), /soy/);
    const link = document.querySelector('.ae-reco a');
    assert.ok(link, 'recommendation card rendered after a wrong answer');
    assert.equal(link.getAttribute('href'), '/autoestudio/clase/48?de=a1-01&tema=ser-estar');
    assert.match(document.querySelector('.ae-reco').textContent, /¿Ser o estar\?/);
    assert.equal(document.querySelectorAll('.ae-reco').length, 1, 'one card per topic per visit');
    const stored = JSON.parse(window.localStorage.getItem('spanishcue.autoestudio.errors.v1.local'));
    assert.equal(stored.length, 1); assert.equal(stored[0].given, 'eres'); assert.equal(stored[0].correct, 'soy'); assert.equal(stored[0].category, 'ser-estar'); assert.equal(stored[0].correctedAt, null);
    const retry = [...document.querySelectorAll('.ae-choice .ae-link')].find(b => /Intentar otra vez/.test(b.textContent));
    assert.ok(retry, 'retry stays available next to the card');
    await act(async () => retry.click());
    await act(async () => options[2].click());
    assert.ok(document.querySelector('.ae-feedback.correct'), 'correct feedback shown');
    assert.equal(document.querySelector('.ae-reco'), null, 'no card on a correct answer');
    const after = JSON.parse(window.localStorage.getItem('spanishcue.autoestudio.errors.v1.local'));
    assert.equal(after.length, 1, 'the original error is kept, not overwritten');
    assert.equal(after[0].given, 'eres'); assert.ok(after[0].correctedAt, 'later marked as corrected');
  } finally { await unmount(); }
});

test('a learner who already has full access never sees a class card', async () => {
  window.localStorage.clear();
  await mount(React.createElement(Learner, { fullAccess: true }));
  try {
    await act(async () => document.querySelector('.ae-options button').click());
    assert.ok(document.querySelector('.ae-feedback.wrong'));
    assert.equal(document.querySelector('.ae-reco'), null);
  } finally { await unmount(); }
});

const teacherErrors = [1, 2, 3].map(n => ({ id: String(n), moduleId: `b1-0${n}`, section: 'grammar', exerciseId: `g${n}`, itemIndex: 0, type: 'gap', question: 'Ayer ___ muy cansado.', given: 'soy', correct: 'estaba', explanation: 'Estado temporal: estar.', category: 'ser-estar', categoryLabel: 'SER / ESTAR', attempt: 1, verdict: 'wrong', createdAt: new Date(Date.now() - 3600e3).toISOString(), correctedAt: n === 3 ? new Date().toISOString() : null }));
const teacherData = {
  learner: { id: 'a'.repeat(48), alias: 'Walker', createdAt: '2026-10-01T00:00:00.000Z' }, level: 'b1', errors: teacherErrors, notes: [],
  events: [{ kind: 'recommended', lessonId: 48, category: 'ser-estar', moduleId: 'b1-01', createdAt: new Date().toISOString() }],
  categories: summarizeCategories(teacherErrors, []), weeks: summarizeWeeks(teacherErrors), activities: summarizeActivities(teacherErrors), evolution: evolution(teacherErrors),
  plan: buildClassPlan('Walker', 'b1', teacherErrors, [], { 'ser-estar': [48] }),
  recommendations: [{ category: 'ser-estar', label: 'SER / ESTAR', score: 5.6, reason: '3 errores, 3 recurrentes, 1 corregidos', classes: [{ id: 48, title: 'La ciudad de los motores', path: '/la-ciudad-de-los-motores', level: 'A1', image: '/x.png', topic: 'Ser y estar', free: false }], opened: false, previewed: false, shown: 1 }],
};

test('the teacher panel shows errors by topic with status, the real wrong/correct pair, and the class plan built from them', async () => {
  const calls = [];
  globalThis.fetch = async (url, init = {}) => { calls.push({ url, init }); return new Response(JSON.stringify(teacherData), { status: 200, headers: { 'content-type': 'application/json' } }); };
  await mount(React.createElement(TeacherErrors, { learnerId: 'a'.repeat(48), tab: 'errores' }));
  try {
    await settle();
    assert.equal(calls[0].url, `/api/autoestudio/learners/${'a'.repeat(48)}/errors`);
    assert.match(text(), /SER \/ ESTAR/); assert.match(text(), /Necesita refuerzo/);
    assert.match(text(), /Ayer ___ muy cansado\./); assert.match(text(), /soy/); assert.match(text(), /estaba/);
  } finally { await unmount(); }
  await mount(React.createElement(TeacherErrors, { learnerId: 'a'.repeat(48), tab: 'preparar' }));
  try {
    await settle();
    assert.match(text(), /Walker presenta dificultades recurrentes con SER \/ ESTAR \(3 errores/);
    assert.match(text(), /Ayer soy muy cansado/);
    assert.match(text(), /La ciudad de los motores/);
  } finally { await unmount(); }
});

test('the demo shows the real opening stages, locks the rest server-side, opens the PayPal modal and starts the existing checkout', async () => {
  const lesson = previewOf(getClassroomLesson(48));
  assert.equal(lesson.listening.transcript, ''); assert.deepEqual(lesson.practice, []); assert.deepEqual(lesson.speaking, []);
  const calls = [];
  globalThis.fetch = async (url, init = {}) => {
    calls.push({ url: String(url), body: init.body ? JSON.parse(init.body) : null });
    if (String(url) === '/api/billing/founder-status') return new Response(JSON.stringify({ remaining: 900, limit: 1000, available: true, checkoutAvailable: true, checkoutLive: true, mode: 'live', paddleCheckoutAvailable: false, trialCheckoutAvailable: false, paypalPriceUsd: 15 }), { status: 200, headers: { 'content-type': 'application/json' } });
    if (String(url) === '/api/billing/checkout') return new Response(JSON.stringify({ approvalUrl: 'https://www.paypal.com/checkoutnow?token=TEST' }), { status: 200, headers: { 'content-type': 'application/json' } });
    return new Response('{}', { status: 200, headers: { 'content-type': 'application/json' } });
  };
  const preview = { lessonPath: '/la-ciudad-de-los-motores', lessonTitle: 'La ciudad de los motores', returnTo: '/autoestudio/a1/semana-1', signedIn: false, unlocked: PREVIEW_STAGES, track: { lessonId: 48, category: 'ser-estar', moduleId: 'a1-01' } };
  await mount(React.createElement(LocaleProvider, { initialLocale: 'es' }, React.createElement(Classroom, { lesson, preview })));
  try {
    await settle();
    assert.match(text(), /Demostración gratuita/);
    assert.ok(document.querySelector('[data-preview="true"]'));
    assert.ok(document.querySelector('[data-stage="practice"][data-locked="true"]'), 'practice is locked');
    assert.equal(document.querySelector('[data-stage="opening"][data-locked]'), null, 'opening is open');
    assert.ok(calls.some(c => c.url === '/api/autoestudio/events' && c.body?.kind === 'previewed'), 'previewed event sent to the teacher');
    assert.equal(document.querySelector('[role="dialog"]'), null);
    await click('[data-stage="practice"]');
    const dialog = document.querySelector('[role="dialog"]');
    assert.ok(dialog, 'modal opens on a locked stage');
    assert.match(dialog.textContent, /Sigue aprendiendo con SpanishCue/);
    assert.ok(dialog.querySelector('a[href="/autoestudio/a1/semana-1"]'), 'return to Homework link');
    assert.ok(calls.some(c => c.url === '/api/autoestudio/events' && c.body?.kind === 'gated'));
    await settle();
    const paypal = dialog.querySelector('.checkout-paypal-button');
    assert.ok(paypal, 'PayPal button rendered from founder-status');
    assert.equal(dialog.querySelector('.checkout-card-button'), null, 'card option hidden when not configured');
    await act(async () => paypal.click());
    await settle();
    const checkout = calls.find(c => c.url === '/api/billing/checkout');
    assert.ok(checkout, 'checkout POSTed to the existing billing endpoint');
    assert.equal(checkout.body.returnTo, '/la-ciudad-de-los-motores');
    await click('.gc-unlock-close');
    assert.equal(document.querySelector('[role="dialog"]'), null, 'modal closes and the demo stays');
    assert.match(text(), /Demostración gratuita/);
  } finally { await unmount(); }
});
