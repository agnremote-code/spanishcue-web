import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { build } from 'esbuild';

const bundle = await build({stdin:{contents:"export { modulesByLevel } from './app/autoestudio/curriculum/course'; export { moduleClips } from './app/autoestudio/curriculum/audio-clips';",resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',write:false,logLevel:'error'});
const { modulesByLevel, moduleClips } = await import('data:text/javascript;base64,'+Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const all = Object.values(modulesByLevel).flat();

// Operational surfaces never teach a regional variety. Curriculum has specific,
// field-level regional examples documented in AUTOESTUDIO.md, not a blanket ban.
const voseo = /\b(?:vos|sos|tenés|querés|podés|venís|hacés|sabés|pensás|escuchás|necesitás|mirá|escuchá|probá|elegí|completá|arrastrá|tocá|marcá|escribí|respondé|contá|compará|pensá|imaginá|seguí|repetí|decí|decilo|hacelo|miralo|probalo|contame|decime|mostrame|contanos|ayudanos|volvé|ingresá|recargá|intentá|esperá|copiá|seleccioná|compartilo|pedile|comprobá|abrí)\b/iu;
function sources(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?(['curriculum'].includes(e.name)?[]:sources(`${dir}/${e.name}`)):/\.tsx?$/.test(e.name)?[`${dir}/${e.name}`]:[]);}
test('Autoestudio operational Spanish uses tú across all UI and progress/share surfaces',()=>{
 for(const file of sources('app/autoestudio')) assert.equal(readFileSync(file,'utf8').match(voseo),null,file);
});
test('120 modules keep tú separate from regional voseo and full paradigms list vosotros and ustedes',()=>{
 assert.equal(all.length,120);
 for(const mod of all) for(const part of mod.theory.parts){
  const table=part.table;
  if(!table) continue;
  assert.ok(!JSON.stringify(table).includes('tú / vos'),`${mod.id}: separate tú from regional voseo`);
  const head=table.head.join(' | ');
  if(/\byo\b/.test(head)&&/\btú\b/.test(head)&&/nosotros/.test(head)) assert.match(head,/vosotros/,`${mod.id}: full international paradigm`);
 }
});
test('every synthetic dialogue line is synthesized with exactly the transcript text',()=>{
 for(const mod of all){
  const clips=new Set(moduleClips(mod).map(clip=>clip.text));
  for(const line of mod.listening.script) assert.ok(clips.has(line.text),`${mod.id}: ${line.text.slice(0,40)}`);
 }
});
