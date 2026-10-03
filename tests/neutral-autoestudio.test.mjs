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
test('120 modules retain international main paradigms and intentional regional contrasts',()=>{
 assert.equal(all.length,120);
 for(const mod of all) for(const part of mod.theory.parts){
  const table=part.table;
  if(table) assert.ok(!JSON.stringify(table).includes('tú / vos'),`${mod.id}: separate tú from regional voseo`);
 }
 const table=modulesByLevel.a1[13].theory.parts[2].table;
 assert.deepEqual(table.head,['Infinitivo','yo','tú','él, ella, usted','nosotros, nosotras','vosotros, vosotras','ellos, ellas, ustedes']);
 assert.deepEqual(table.rows.map(row=>row[5]),['hacéis','ponéis','traéis','salís','conocéis','sabéis']);
 assert.ok(JSON.stringify(modulesByLevel.a1[10]).includes('Vos querés, vos podés: el voseo en Centroamérica'));
 assert.ok(JSON.stringify(modulesByLevel.b2[18]).includes('Vos tenés la maleta'));
});
test('ordinary synthetic dialogues and their quiz clips share corrected text',()=>{
 for(const [level,week,phrases] of [['b2',18,['sigue con tu idea']],['c1',6,['Mira, yo no digo','déjame aclarar']],['c1',8,['Tienes razón en ese punto']]]){
  const mod=modulesByLevel[level][week-1];
  for(const phrase of phrases){
   const line=mod.listening.script.find(line=>line.text.includes(phrase));
   assert.ok(line,`${mod.id}: ${phrase}`);
   assert.ok(moduleClips(mod).some(clip=>clip.text===line.text),`${mod.id}: exact synthesized transcript`);
  }
 }
 const mod=modulesByLevel.b2[17];
 const script=mod.listening.script.find(line=>line.text.includes('sigue con tu idea')).text;
 assert.ok(mod.quiz.items.some(item=>item.audio===script));
});
