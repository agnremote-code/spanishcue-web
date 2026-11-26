import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const component = read('app/cuenta/modules/FirstStudent.tsx');
const copy = read('app/cuenta/free-homework.ts');
const overview = read('app/cuenta/modules/Overview.tsx');
const page = read('app/cuenta/page.tsx');
const analytics = read('app/marketing/analytics.ts');

test('free account first screen: H1, add-student button, three steps and a 16:9 video slot', () => {
  assert.match(copy, /title: "Crea tu primer alumno"/);
  assert.match(copy, /addStudent: "Añadir alumno"/);
  assert.match(copy, /step2: "Asignar deberes"/);
  assert.match(copy, /step3: "Ver progreso"/);
  assert.match(component, /<h1 id="first-student-title">\{copy\.title\}<\/h1>/);
  assert.match(component, /aspect-ratio|cx-first-student-video-slot/);
  assert.match(read('app/cuenta/style.css'), /aspect-ratio: 16 \/ 9/);
});

test('step 2 unlocks only with a student and generates a Homework link; step 3 only after the link', () => {
  assert.match(component, /hasStudent && !hasHomework && <>/);
  assert.match(component, /"\/api\/autoestudio\/passes"/);
  assert.match(component, /action: "link", learnerId: data\.pass\.learnerId, studentId: student\.id/);
  assert.match(component, /hasHomework\s*\n?\s*\? <Link/);
});

test('the three onboarding events are registered and fired', () => {
  for (const event of ['onboarding_student_created', 'onboarding_homework_sent', 'onboarding_progress_viewed']) {
    assert.match(analytics, new RegExp(`"${event}"`));
    assert.match(component, new RegExp(`trackMarketingEvent\\("${event}"`));
  }
});

test('only free accounts get the screen, and the page keeps a single H1 for them', () => {
  assert.match(overview, /showFirstStudent = homeworkFree && homeworkEnabled/);
  assert.match(page, /tab === "inicio" && !fullAccess \? <h2>/);
});
