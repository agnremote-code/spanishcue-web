import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
const bundled = await build({stdin:{contents:"export { selectFeaturedUpdates } from './app/updates/data'; export { catalogLessons } from './app/conversation-families/catalog';",resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
const {selectFeaturedUpdates,catalogLessons} = await import('data:text/javascript;base64,'+Buffer.from(bundled.outputFiles[0].text).toString('base64'));
const now = new Date('2026-10-02T00:00:00Z');
const lesson = {id:1,title:'Una clase',subtitle:'Una idea',category:'Fonética',level:'A1',levels:['A1','A2'],displayLevel:'A1–A2',path:'/una-clase',image:'/real.webp'};
test('metadata selects only eligible updates, sorts priority and uses canonical catalogue fields',()=>{
 const items=selectFeaturedUpdates([{...lesson,update:{kind:'new',publishedAt:'2026-10-01',priority:2}},{...lesson,id:2,update:{kind:'featured',publishedAt:'2026-09-30',priority:4}},{...lesson,id:3},{...lesson,id:4,update:{kind:'new',publishedAt:'2026-11-01'}},{...lesson,id:5,update:{kind:'new',publishedAt:'2026-09-01',expiresAt:'2026-10-01'}}],[],now);
 assert.deepEqual(items.map(i=>i.lessonId),[2,1]); assert.equal(items[0].href,'/una-clase');assert.equal(items[0].level,'A1–A2');assert.equal(items[0].image,'/real.webp');
});
test('announcements share the source, expire and cannot introduce external navigation',()=>{
 const items=selectFeaturedUpdates([], [{id:'feature',kind:'announcement',title:'Una función',copy:'Lista',href:'/autoestudio',image:'/real.webp',publishedAt:'2026-10-01'},{id:'external',kind:'announcement',title:'Mala',copy:'',href:'https://bad.test',publishedAt:'2026-10-01'}],now);
 assert.equal(items.length,1);assert.equal(items[0].kind,'announcement');assert.deepEqual(selectFeaturedUpdates([],[],now),[]);
});
test('new class comes from real catalog, has working image and A1–C2 level',()=>{
 const items=selectFeaturedUpdates(catalogLessons,[],now); const item=items.find(i=>i.lessonId===224);assert.ok(item);assert.equal(item.title,'Hablar sin cortar');assert.equal(item.href,'/hablar-sin-cortar');assert.equal(item.level,'A1–C2');assert.ok(items.length<=6);
});
