import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {build} from 'esbuild';
const code=await build({stdin:{contents:"export {contextFromElement} from './app/lesson-reports/context'",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const {contextFromElement}=await import('data:text/javascript;base64,'+Buffer.from(code.outputFiles[0].text).toString('base64'));
const node=(attributes={},parent=null,heading='')=>({getAttribute:k=>attributes[k]??null,closest(selector){let n=this;while(n){if(selector.split(',').some(s=>s.trim()==='section'||s.trim()==='article'?n.getAttribute('tag')===s.trim():/^\[/.test(s.trim())?n.getAttribute(s.trim().slice(1,-1))!==null:false))return n;n=n.parent}return null},parent,querySelector:()=>heading?{textContent:heading}:null,id:attributes.id||''});
test('context reads stable activity/section/question and current level without page content or private inputs',()=>{
 const section=node({'data-report-section':'connect','data-report-level':'B2'},null,'Conexiones'); const activity=node({'data-report-activity':'b2-connect-3','tag':'article'},section,'Escuchá'); const question=node({'data-question-id':'q3'},activity);
 const context=contextFromElement(question);assert.equal(context.sectionId,'connect');assert.equal(context.activityId,'b2-connect-3');assert.equal(context.questionId,'q3');assert.equal(context.level,'B2');assert.equal(context.locationLabel,'Escuchá');assert.equal(Object.keys(context).includes('text'),false);
});
test('unidentified legacy blocks keep a readable location without fabricated IDs',()=>{
 const legacy=node({tag:'section'},null,'Práctica guiada');const result=contextFromElement(legacy);assert.equal(result.sectionId,null);assert.equal(result.activityId,null);assert.equal(result.locationLabel,'Práctica guiada');
});
test('launcher mounts in route and inline lessons, native dialog and admin are guarded',async()=>{
 const [layout,library,ui,admin,worker]=await Promise.all(['app/layout.tsx','app/Library.tsx','app/lesson-reports/LessonReport.tsx','app/admin/reportes/page.tsx','worker/index.ts'].map(p=>readFile(p,'utf8')));
 assert.match(layout,/LessonFeedback/);assert.match(library,/LessonReport/);assert.match(ui,/<dialog/);assert.match(ui,/showModal/);assert.match(ui,/role="alert"/);assert.match(ui,/maxLength=\{3000\}/);assert.match(admin,/ownerFromHeaders/);assert.match(worker,/pathname\.startsWith\('\/admin\/'\)/);assert.match(worker,/pathname==='\/api\/lesson-reports'/);
});
test('existing legacy section IDs are retained as section context',()=>{const section=node({tag:'section',id:'speaking-rounds'},null,'A conversar');const article=node({tag:'article'},section,'Ronda 3');assert.equal(contextFromElement(article).sectionId,'speaking-rounds')});
test('root feedback mount remains publicly loadable without exposing admin or lesson bodies',async()=>{const source=await readFile('scripts/protect-client-assets.mjs','utf8');const roots=source.slice(source.indexOf('const publicRoots'),source.indexOf('for (const lesson'));assert.match(roots,/app\/lesson-reports\/LessonFeedback.tsx/);assert.doesNotMatch(roots,/app\/lesson-reports\/ReportAdmin.tsx/)});
