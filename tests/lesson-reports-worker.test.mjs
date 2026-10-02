import test from 'node:test'; import assert from 'node:assert/strict'; import {readFile} from 'node:fs/promises';
// Root identity policy is the security boundary: handlers cannot trust browser headers.
test('worker verifies Firebase before reports and protects the entire admin subtree',async()=>{
 const source=await readFile('worker/index.ts','utf8');
 assert.match(source,/identityAware=.*pathname==='\/api\/lesson-reports'/);
 assert.match(source,/administrative=.*pathname\.startsWith\('\/admin\/'\)/);
 assert.match(source,/authenticatedRequestHeaders\(routedHeaders,verifiedUser,account,ownerIdentity\)/);
});
test('inline lesson delegates Escape and focus to the native report dialog',async()=>{
 const source=await readFile('app/Library.tsx','utf8');
 const modal=source.slice(source.indexOf('if (!activeLesson) return;'));
 assert.ok(modal.indexOf("if (modal.querySelector('dialog[open]')) return;")<modal.indexOf('if (event.key === "Escape")'));
});
test('flag launcher and participatory dialog keep accessible activation and CSS-only reveal',async()=>{
 const source=await readFile('app/lesson-reports/LessonReportPanel.tsx','utf8');
 const css=await readFile('app/lesson-reports/reports.css','utf8');
 assert.match(source,/aria-label="Ayudanos a mejorar"/);
 assert.match(source,/<span className="report-flag" aria-hidden="true">⚑<\/span>/);
 assert.match(source,/<span className="report-trigger-label" aria-hidden="true">Ayudanos a mejorar<\/span>/);
 assert.match(source,/className="report-trigger"[^>]*onClick=\{open\}/);
 assert.ok(!/onMouseEnter|onFocus=|setInterval|requestAnimationFrame/.test(source));
 assert.match(source,/¿Qué podemos mejorar\?/);
 assert.match(source,/Contanos qué viste, qué no quedó claro o qué mejorarías…/);
 assert.match(source,/Gracias por ayudarnos a mejorar SpanishCue\./);
 assert.match(css,/\.report-trigger-label\s*\{[^}]*visibility:\s*hidden/);
 assert.match(css,/\.report-trigger:focus-visible \.report-trigger-label\s*\{[^}]*visibility:\s*visible/);
 assert.ok(!/@media[^}]*\.lesson-report\s*\{[^}]*(right|bottom):/.test(css),'mobile rules must not translate inline launchers');
 assert.match(css,/@media\s*\(hover:\s*hover\)\s*and\s*\(pointer:\s*fine\)/);
});
