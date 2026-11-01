import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export {default as sitemap} from "./app/sitemap.ts"; export * from "./app/material-ele/indice.ts"; export {temaLevelPages,temaPages} from "./app/material-ele/temas.ts"; export {bancoPaths} from "./app/material-ele/actividades.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));

test('the full index lists every Material ELE page once, with a real publication day, and the sitemap carries it as lastmod',()=>{
 const paths=m.indiceEntries.map(e=>e.path);
 assert.equal(new Set(paths).size,paths.length,'duplicate paths');
 assert.ok(paths.length>=500,`only ${paths.length} entries`);
 for(const p of [...m.temaPages,...m.temaLevelPages].map(p=>p.path).concat(m.bancoPaths))assert.ok(paths.includes(p),p);
 for(const e of m.indiceEntries){assert.match(e.published,/^\d{4}-\d{2}-\d{2}$/);assert.ok(e.title.length>0&&e.description.length>0,e.path);}
 const byUrl=new Map(m.sitemap().map(x=>[x.url,x]));
 for(const e of m.indiceEntries)assert.equal(byUrl.get('https://spanishcue.com'+e.path)?.lastModified,e.published,e.path);
 assert.ok(byUrl.has('https://spanishcue.com'+m.INDICE_PATH));
 assert.ok(m.indiceTitle.length<=78);assert.ok(m.indiceDescription.length>=110&&m.indiceDescription.length<=165,m.indiceDescription.length);
});

test('the Atom feed is well formed, escaped and newest first',()=>{
 const xml=m.materialEleAtom();
 assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom"'));
 assert.equal((xml.match(/<entry>/g)||[]).length,m.indiceEntries.length);
 assert.doesNotMatch(xml.replace(/&(amp|lt|gt|quot|apos);/g,''),/&/,'unescaped ampersand');
 const dates=[...xml.matchAll(/<published>([^<]+)<\/published>/g)].map(x=>x[1]);
 for(let i=1;i<dates.length;i++)assert.ok(dates[i-1]>=dates[i],'newest first');
 assert.match(xml,/<link rel="self" type="application\/atom\+xml" href="https:\/\/spanishcue.com\/material-ele\/feed.xml"\/>/);
});
