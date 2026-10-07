import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {existsSync} from 'node:fs';
test('pressure has a complete native level bank',()=>assert.ok(existsSync('app/la-camara-de-presion/levels.ts')));
if(existsSync('app/la-camara-de-presion/levels.ts')){
 const result=await build({stdin:{contents:`export * from './app/la-camara-de-presion/levels'; export * from './app/la-camara-de-presion/questions'; export * from './app/la-camara-de-presion/pulse';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
 const api=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
 test('original C2 questions and source references remain intact',()=>assert.deepEqual(api.pressureQuestionsForLevel('C2'),[...api.pulseQuestions,...api.evergreenQuestions]));
 test('every stage and family has actual distinct questions at each level',()=>{
  const seen=new Set();
  for(const level of ['A0','A1','A2','B1','B2','C1','C2']){
   const questions=api.pressureQuestionsForLevel(level);
   assert.ok(questions.length>=30,level);
   for(const family of [...api.familyOrder,'pulse'])assert.ok(questions.some(q=>q.family===family),`${level}: ${family}`);
   assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);
   const content=JSON.stringify(questions.map(q=>q.prompt)); assert.ok(!seen.has(content),level);seen.add(content);
   if(level==='A0')for(const q of questions){assert.ok(q.promptEn);assert.ok(q.support.frame.es.includes('___'));assert.ok(q.support.frame.en.includes('___'));assert.ok(q.support.choices.length>=2);assert.ok(q.support.model.en);assert.ok(q.support.tip.en);}
  }
 });
}

test('A1 pressure models answer each question and provide a specific next oral turn',async()=>{
 const result=await build({stdin:{contents:`export * from './app/la-camara-de-presion/levels';`,resolveDir:process.cwd()},bundle:true,write:false,format:'esm',platform:'node'});
 const {pressureQuestionsForLevel}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
 const bank=pressureQuestionsForLevel('A1');
 const expected={words:'Por favor',premise:'tengo tiempo',literal:'respuesta corta',wordshift:'escuchar primero',opposite:'Me gusta la ciudad',effects:'Uso el autobús',patterns:'tomo café',speaker:'Mi amigo me ayuda',personal:'Necesito descanso',brutal:'importante para mí',nodepends:'ir a un parque',newfact:'No quiero salir',headline:'leo noticias',final:'Me gusta el parque',pulse:'paz para mi ciudad'};
 for(const [family,phrase] of Object.entries(expected)){const question=bank.find(q=>q.family===family);assert.ok(question.model.includes(phrase),`${family}: ${question.model}`);assert.ok(question.tip.length>30);assert.ok(question.followup.length>35);}
 assert.equal(new Set(bank.map(q=>q.model)).size,15);
 for(const q of pressureQuestionsForLevel('A0'))for(const choice of q.support.choices){const en=q.support.frame.en.replace('___',choice.en);const es=q.support.frame.es.replace('___',choice.es);assert.doesNotMatch(en,/\bto to\b|\bwant to (?:a|an|the)\b/);assert.doesNotMatch(es,/quiero a (?:escuchar|hablar)|elijo (?:escuchar|hablar)/);assert.ok(q.support.tip.en);}
});
