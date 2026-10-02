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
