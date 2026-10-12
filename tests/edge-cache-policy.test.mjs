import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {isEdgeCacheablePath,isSearchPrivatePath} from "./app/seo.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const mod=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
test('only visitor-independent organic pages are edge-cacheable',()=>{
 for(const path of ['/about','/resources','/resources/spanish-grammar-lesson-b1-por-y-para-explicar-razones-objetivos-y-destinatarios','/guides','/guides/spanish-imperative-activities','/spanish-teacher-resources','/spanish-conversation-activities','/spanish-conversation-activities/b1','/spanish-conversation-questions','/spanish-grammar-lessons','/spanish-grammar-lessons/a2','/spanish-grammar-lessons/conditional-tense-activities','/about/'])assert.equal(mod.isEdgeCacheablePath(path),true,path);
});
test('identity-aware, private, campaign and product surfaces are never edge-cacheable',()=>{
 for(const path of ['/','/pricing','/cuenta','/ingresar','/acceso','/pro','/pro/success','/admin','/api/auth/session','/lp','/lp/spanish-grammar-lessons','/la-fabrica-de-los-nombres','/noche-abierta','/autoestudio','/autoestudio/a1','/sistema-verbal','/choose-conversation','/free-spanish-lesson','/online-spanish-teaching-resources','/ele-recursos-profesores','/s/token','/demo/noche-abierta','/zeely','/contact','/terms'])assert.equal(mod.isEdgeCacheablePath(path),false,path);
 for(const path of ['/about','/guides','/spanish-grammar-lessons'])assert.equal(mod.isSearchPrivatePath(path),false,path);
});
