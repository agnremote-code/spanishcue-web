import assert from 'node:assert/strict';
import test from 'node:test';
import {build} from 'esbuild';
const r=await build({stdin:{contents:'export * from "./app/material-ele/exercise-answers.ts"; export {ejercicioPages} from "./app/material-ele/actividades.ts";',resolveDir:process.cwd()},bundle:true,write:false,platform:'node',format:'esm'});
const m=await import('data:text/javascript;base64,'+Buffer.from(r.outputFiles[0].text).toString('base64'));
test('answer keys written for teachers are read into accepted answers',()=>{
 assert.deepEqual(m.acceptedAnswers('Mi profesora ___ argentina.','es'),[['es']]);
 assert.deepEqual(m.acceptedAnswers('Ayer no ___ entrar porque la puerta ___ cerrada.','pudimos · estaba'),[['pudimos'],['estaba']]);
 assert.deepEqual(m.acceptedAnswers('Trabajo ___ nueve ___ cinco.','de / a (también: desde las nueve hasta las cinco)'),[['de'],['a']]);
 assert.deepEqual(m.acceptedAnswers('Sí, voy a ___.','llamarlos (o: los voy a llamar)'),[['llamarlos','los voy a llamar']]);
 assert.deepEqual(m.acceptedAnswers('___ vi ayer.','lo (también «le» en parte de España)'),[['lo','le']]);
 assert.deepEqual(m.acceptedAnswers('El tren sale ___ Valencia.','para (dirección / destino)'),[['para']]);
 assert.deepEqual(m.acceptedAnswers('Es la amiga con ___ viajo.','la que (preposición + artículo + que); también «quien»'),[['la que','quien']]);
 assert.deepEqual(m.acceptedAnswers('¿Qué lleva Marta?','El informe.'),[]);
 assert.deepEqual(m.acceptedAnswers('El chico ___ vino.','que (explicativa; también «quien»)'),[['que','quien']]);
 assert.deepEqual(m.acceptedAnswers('No come ___ carne ___ pescado.','ni, ni'),[['ni'],['ni']]);
 assert.deepEqual(m.acceptedAnswers('___ lunes trabajo.','Los (todos los lunes) o El (este lunes)'),[['Los','El']]);
 assert.equal(m.gradeAnswer('-',m.acceptedAnswers('Soy ___ profesor.','Ø (profesión sin adjetivo)')[0]),'right');
});
test('grading never punishes case, and separates a missing accent from a wrong answer',()=>{
 assert.equal(m.gradeAnswer('',['está']),'empty');
 assert.equal(m.gradeAnswer(' Está ',['está']),'right');
 assert.equal(m.gradeAnswer('hay',['Hay']),'right');
 assert.equal(m.gradeAnswer('esta',['está']),'accent');
 assert.equal(m.gradeAnswer('es',['está']),'check');
 assert.equal(m.gradeAnswer('algo',[]),'check');
});
test('every published fill-in sentence can be answered: its own key is graded as right',()=>{
 assert.ok(m.ejercicioPages.length>=30);
 let graded=0,gaps=0;
 for(const page of m.ejercicioPages)for(const item of page.exercise.items){
  const accepted=m.acceptedAnswers(item.q,item.a);
  assert.equal(accepted.length,item.q.split('___').length-1,item.q);
  for(const options of accepted){gaps++;if(!options.length)continue;graded++;
   for(const option of options){assert.ok(option.length>0&&option.length<=60,`${page.slug}: «${item.q}» reads an explanation as an answer: ${option}`);assert.equal(m.gradeAnswer(option,options),'right');}
  }
 }
 assert.ok(graded/gaps>0.9,`only ${graded} of ${gaps} gaps can be graded`);
});
test('exercise pages say they are answered online',()=>{
 for(const page of m.ejercicioPages){assert.ok(page.title.length<=78,page.title);assert.ok(page.description.length>=110&&page.description.length<=165,`${page.slug} ${page.description.length}`);assert.match(page.description,/corrección al instante/);}
});
