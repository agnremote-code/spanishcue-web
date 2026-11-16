import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
const built=await build({stdin:{contents:"export * from './worker/autoestudio-access';",resolveDir:process.cwd()},bundle:true,format:'esm',platform:'node',write:false,logLevel:'silent'});
const boundary=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
const session={passId:'a'.repeat(48),learnerId:'b'.repeat(48),level:'a2',alias:'雪 Luna',revision:1};
test('Worker removes forged pass headers even with no valid session',()=>{
 const headers=new Headers({'x-autoestudio-level':'c2','x-autoestudio-pass-id':'forged','x-autoestudio-alias':'admin','x-autoestudio-extra':'forged'});
 boundary.applyShareHeaders(headers,null);assert.equal([...headers.keys()].filter(k=>k.startsWith('x-autoestudio-')).length,0);
});
test('Worker records trusted unicode display identity without broadening library access',()=>{
 const headers=new Headers();boundary.applyShareHeaders(headers,session);assert.equal(headers.get('x-autoestudio-level'),'a2');assert.equal(decodeURIComponent(headers.get('x-autoestudio-alias')),'雪 Luna');assert.equal(headers.get('x-chespanish-access-level'),null);
});
test('assigned level authorizes matching module HTML and RSC only',()=>{
 for(const path of ['/autoestudio/a2/semana-3','/autoestudio/a2/semana-3.rsc','/autoestudio/a2/semana-20/'])assert.equal(boundary.shareAllowsPath(path,session),true,path);
 for(const path of ['/autoestudio/b1/semana-3','/autoestudio/b1/semana-3.rsc','/cuenta','/admin','/api/students','/clase/30','/autoestudio/a2/semana-21','/autoestudio/a2/semana-0'])assert.equal(boundary.shareAllowsPath(path,session),false,path);
 assert.equal(boundary.shareAllowsPath('/autoestudio/a2/semana-3',null),false);
});
test('a Homework topic opens for any valid pass and for nobody without one',async()=>{
 const topic='/autoestudio/tema/numeros-dinero-y-monedas';
 for(const level of ['a1','a2','c2'])for(const path of [topic,`${topic}.rsc`,`${topic}/`])assert.equal(boundary.shareAllowsPath(path,{...session,level}),true,`${level} ${path}`);
 assert.equal(boundary.shareAllowsPath(topic,null),false);
 for(const path of ['/autoestudio/tema/otro-tema','/autoestudio/tema','/autoestudio/tema/numeros-dinero-y-monedas/extra','/gramatica/numeros-dinero-y-monedas-del-mundo-hispano'])assert.equal(boundary.shareAllowsPath(path,session),false,path);
 const bundle=async entry=>{const r=await build({stdin:{contents:`export * from '${entry}';`,resolveDir:process.cwd()},bundle:true,format:'esm',platform:'node',write:false,logLevel:'silent'});return import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));};
 const access=await bundle('./app/autoestudio/access');const topics=await bundle('./app/autoestudio/topics');
 assert.ok(access.isPremiumAutoestudioPath(topic));assert.ok(access.isPremiumAutoestudioPath(`${topic}.rsc`));
 assert.ok(!access.isPremiumAutoestudioPath('/autoestudio/tema/otro-tema'));
 assert.ok(!access.isAutoestudioModulePath(topic),'a topic is not a weekly module');
 // The pass opens the topic's own recording and no other premium audio.
 assert.ok(topics.isHomeworkTopicAudio('/audio/grammar-live/549.mp3'));
 for(const path of ['/audio/grammar-live/548.mp3','/audio/grammar-live/549.mp3.bak','/audio/grammar-live/','/audio/grammar-classroom/549.mp3'])assert.ok(!topics.isHomeworkTopicAudio(path),path);
 const {readFileSync}=await import('node:fs');
 const worker=readFileSync('worker/index.ts','utf8');
 assert.match(worker,/const topicAudio=premiumAudio&&isHomeworkTopicAudio\(pathname\);/);
 assert.match(worker,/if \(premiumAudio && !fullAccess && !gifted && !\(topicAudio && shareSession\) && !studentAudio\)/);
 assert.match(readFileSync('worker/private-asset-auth.ts','utf8'),/isHomeworkTopicAudio\(path\) && await verifyShareSession\(/);
 // Every topic points at a real class and its real recording.
 const {lesson}=await bundle('./app/grammar-classroom/live/lessons/g549');
 for(const t of topics.homeworkTopics){assert.equal(t.lessonId,lesson.id);assert.equal(t.title,lesson.title);
  const listen=lesson.stages.flatMap(s=>s.steps).flatMap(s=>s.blocks).find(b=>b.kind==='listen');assert.equal(listen.src,t.audio);}
});
